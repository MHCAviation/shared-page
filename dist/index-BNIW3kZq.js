var Jt = Object.defineProperty;
var k4 = (r) => {
  throw TypeError(r);
};
var Yt = (r, e, t) => e in r ? Jt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var q = (r, e, t) => Yt(r, typeof e != "symbol" ? e + "" : e, t), P4 = (r, e, t) => e.has(r) || k4("Cannot " + t);
var m = (r, e, t) => (P4(r, e, "read from private field"), t ? t.call(r) : e.get(r)), V = (r, e, t) => e.has(r) ? k4("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), H = (r, e, t, n) => (P4(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t);
import Qt, { useState as o2, useRef as T3, useEffect as C1, useCallback as Kt, useMemo as z3 } from "react";
const Xt = "_faqRoot_kbz97_3", Zt = "_faqWrapper_kbz97_31", e6 = "_banner_kbz97_43", t6 = "_bannerOverlay_kbz97_63", r6 = "_bannerContent_kbz97_81", n6 = "_bannerTitle_kbz97_99", i6 = "_bannerDescription_kbz97_111", s6 = "_searchBar_kbz97_125", o6 = "_searchInput_kbz97_149", a6 = "_searchIcon_kbz97_193", u6 = "_faqContent_kbz97_223", c6 = "_faqItems_kbz97_237", l6 = "_faqItem_kbz97_237", h6 = "_faqItemContent_kbz97_287", d6 = "_faqItemMain_kbz97_301", f6 = "_faqQuestion_kbz97_309", p6 = "_faqDescription_kbz97_333", m6 = "_arrowIcon_kbz97_351", v6 = "_faqCategory_kbz97_453", y6 = "_faqCategoryTitle_kbz97_461", g6 = "_faqCategoryDescription_kbz97_475", _6 = "_loading_kbz97_495", w6 = "_error_kbz97_495", b6 = "_noResults_kbz97_495", C6 = "_searchResults_kbz97_517", I6 = "_clearSearch_kbz97_539", s1 = {
  faqRoot: Xt,
  faqWrapper: Zt,
  banner: e6,
  bannerOverlay: t6,
  bannerContent: r6,
  bannerTitle: n6,
  bannerDescription: i6,
  searchBar: s6,
  searchInput: o6,
  searchIcon: a6,
  faqContent: u6,
  faqItems: c6,
  faqItem: l6,
  faqItemContent: h6,
  faqItemMain: d6,
  faqQuestion: f6,
  faqDescription: p6,
  arrowIcon: m6,
  faqCategory: v6,
  faqCategoryTitle: y6,
  faqCategoryDescription: g6,
  loading: _6,
  error: w6,
  noResults: b6,
  searchResults: C6,
  clearSearch: I6
}, E6 = "_container_wg8fd_5", S6 = "_sectionReferenceLink_wg8fd_29", x6 = "_mainContent_wg8fd_41", L6 = "_breadcrumbs_wg8fd_51", M6 = "_pageTitle_wg8fd_81", j6 = "_metaInfo_wg8fd_93", O6 = "_authorImage_wg8fd_111", k6 = "_authorName_wg8fd_127", P6 = "_publishedDate_wg8fd_135", A6 = "_tocInContent_wg8fd_145", T6 = "_bodyContent_wg8fd_197", $6 = "_portableImage_wg8fd_271", R6 = "_stickySidebar_wg8fd_299", F6 = "_sidebarInner_wg8fd_309", D6 = "_loading_wg8fd_415", N6 = "_error_wg8fd_417", I1 = {
  container: E6,
  sectionReferenceLink: S6,
  mainContent: x6,
  breadcrumbs: L6,
  pageTitle: M6,
  metaInfo: j6,
  authorImage: O6,
  authorName: k6,
  publishedDate: P6,
  tocInContent: A6,
  bodyContent: T6,
  portableImage: $6,
  stickySidebar: R6,
  sidebarInner: F6,
  loading: D6,
  error: N6
};
function U6(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var $3 = { exports: {} }, t3 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A4;
function q6() {
  if (A4) return t3;
  A4 = 1;
  var r = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(n, i, a) {
    var u = null;
    if (a !== void 0 && (u = "" + a), i.key !== void 0 && (u = "" + i.key), "key" in i) {
      a = {};
      for (var c in i)
        c !== "key" && (a[c] = i[c]);
    } else a = i;
    return i = a.ref, {
      $$typeof: r,
      type: n,
      key: u,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return t3.Fragment = e, t3.jsx = t, t3.jsxs = t, t3;
}
var r3 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T4;
function z6() {
  return T4 || (T4 = 1, process.env.NODE_ENV !== "production" && function() {
    function r(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === v1 ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case v:
          return "Fragment";
        case L:
          return "Profiler";
        case P:
          return "StrictMode";
        case J:
          return "Suspense";
        case z:
          return "SuspenseList";
        case m1:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case I:
            return "Portal";
          case T:
            return (O.displayName || "Context") + ".Provider";
          case A:
            return (O._context.displayName || "Context") + ".Consumer";
          case U:
            var N = O.render;
            return O = O.displayName, O || (O = N.displayName || N.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case W:
            return N = O.displayName || null, N !== null ? N : r(O.type) || "Memo";
          case e1:
            N = O._payload, O = O._init;
            try {
              return r(O(N));
            } catch {
            }
        }
      return null;
    }
    function e(O) {
      return "" + O;
    }
    function t(O) {
      try {
        e(O);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var t1 = N.error, i1 = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return t1.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i1
        ), e(O);
      }
    }
    function n(O) {
      if (O === v) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === e1)
        return "<...>";
      try {
        var N = r(O);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var O = E.A;
      return O === null ? null : O.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function u(O) {
      if (j.call(O, "key")) {
        var N = Object.getOwnPropertyDescriptor(O, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function c(O, N) {
      function t1() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      t1.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: t1,
        configurable: !0
      });
    }
    function d() {
      var O = r(this.type);
      return F[O] || (F[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function f(O, N, t1, i1, h1, g1, E1, l2) {
      return t1 = g1.ref, O = {
        $$typeof: g,
        type: O,
        key: N,
        props: g1,
        _owner: h1
      }, (t1 !== void 0 ? t1 : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E1
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: l2
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function b(O, N, t1, i1, h1, g1, E1, l2) {
      var u1 = N.children;
      if (u1 !== void 0)
        if (i1)
          if (_(u1)) {
            for (i1 = 0; i1 < u1.length; i1++)
              y(u1[i1]);
            Object.freeze && Object.freeze(u1);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(u1);
      if (j.call(N, "key")) {
        u1 = r(O);
        var b1 = Object.keys(N).filter(function(u0) {
          return u0 !== "key";
        });
        i1 = 0 < b1.length ? "{key: someKey, " + b1.join(": ..., ") + ": ...}" : "{key: someKey}", w1[u1 + i1] || (b1 = 0 < b1.length ? "{" + b1.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i1,
          u1,
          b1,
          u1
        ), w1[u1 + i1] = !0);
      }
      if (u1 = null, t1 !== void 0 && (t(t1), u1 = "" + t1), u(N) && (t(N.key), u1 = "" + N.key), "key" in N) {
        t1 = {};
        for (var A2 in N)
          A2 !== "key" && (t1[A2] = N[A2]);
      } else t1 = N;
      return u1 && c(
        t1,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), f(
        O,
        u1,
        g1,
        h1,
        i(),
        t1,
        E1,
        l2
      );
    }
    function y(O) {
      typeof O == "object" && O !== null && O.$$typeof === g && O._store && (O._store.validated = 1);
    }
    var C = Qt, g = Symbol.for("react.transitional.element"), I = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), A = Symbol.for("react.consumer"), T = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), z = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), e1 = Symbol.for("react.lazy"), m1 = Symbol.for("react.activity"), v1 = Symbol.for("react.client.reference"), E = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, _ = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    C = {
      "react-stack-bottom-frame": function(O) {
        return O();
      }
    };
    var Y, F = {}, B = C["react-stack-bottom-frame"].bind(
      C,
      a
    )(), a1 = M(n(a)), w1 = {};
    r3.Fragment = v, r3.jsx = function(O, N, t1, i1, h1) {
      var g1 = 1e4 > E.recentlyCreatedOwnerStacks++;
      return b(
        O,
        N,
        t1,
        !1,
        i1,
        h1,
        g1 ? Error("react-stack-top-frame") : B,
        g1 ? M(n(O)) : a1
      );
    }, r3.jsxs = function(O, N, t1, i1, h1) {
      var g1 = 1e4 > E.recentlyCreatedOwnerStacks++;
      return b(
        O,
        N,
        t1,
        !0,
        i1,
        h1,
        g1 ? Error("react-stack-top-frame") : B,
        g1 ? M(n(O)) : a1
      );
    };
  }()), r3;
}
var $4;
function W6() {
  return $4 || ($4 = 1, process.env.NODE_ENV === "production" ? $3.exports = q6() : $3.exports = z6()), $3.exports;
}
var S = W6(), B6 = Object.defineProperty, H6 = Object.defineProperties, V6 = Object.getOwnPropertyDescriptors, W3 = Object.getOwnPropertySymbols, S9 = Object.prototype.hasOwnProperty, x9 = Object.prototype.propertyIsEnumerable, F0 = (r, e, t) => e in r ? B6(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, x1 = (r, e) => {
  for (var t in e || (e = {})) S9.call(e, t) && F0(r, t, e[t]);
  if (W3) for (var t of W3(e)) x9.call(e, t) && F0(r, t, e[t]);
  return r;
}, N1 = (r, e) => H6(r, V6(e)), L9 = (r, e) => {
  var t = {};
  for (var n in r) S9.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && W3) for (var n of W3(r)) e.indexOf(n) < 0 && x9.call(r, n) && (t[n] = r[n]);
  return t;
}, G = (r, e, t) => F0(r, typeof e != "symbol" ? e + "" : e, t), K = (r, e, t) => new Promise((n, i) => {
  var a = (d) => {
    try {
      c(t.next(d));
    } catch (f) {
      i(f);
    }
  }, u = (d) => {
    try {
      c(t.throw(d));
    } catch (f) {
      i(f);
    }
  }, c = (d) => d.done ? n(d.value) : Promise.resolve(d.value).then(a, u);
  c((t = t.apply(r, e)).next());
}), G6 = class {
  requestAnimationFrame(r) {
    return requestAnimationFrame(r);
  }
  cancelAnimationFrame(r) {
    cancelAnimationFrame(r);
  }
}, J6 = class {
  constructor() {
    G(this, "_lastHandleId", 0), G(this, "_lastImmediate", null);
  }
  requestAnimationFrame(r) {
    return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
      r(Date.now());
    }), this._lastHandleId;
  }
  cancelAnimationFrame(r) {
    this._lastImmediate && clearImmediate(this._lastImmediate);
  }
}, Y6 = class {
  constructor() {
    G(this, "_strategy"), this._strategy = typeof requestAnimationFrame == "function" ? new G6() : new J6();
  }
  requestAnimationFrame(r) {
    return this._strategy.requestAnimationFrame(r);
  }
  cancelAnimationFrame(r) {
    this._strategy.cancelAnimationFrame(r);
  }
}, L1 = typeof window < "u" && typeof window.document < "u", L0 = new Uint8Array([80, 75, 3, 4]), Q6 = ["v", "ip", "op", "layers", "fr", "w", "h"], M9 = "0.42.0", j9 = "@lottiefiles/dotlottie-web", K6 = 0.75, X6 = (() => {
  var r, e = typeof document < "u" ? (r = document.currentScript) == null ? void 0 : r.src : void 0;
  return function(t = {}) {
    var n, i = t, a, u, c = new Promise((s, o) => {
      a = s, u = o;
    }), d = Object.assign({}, i), f = "./this.program", b = "", y;
    typeof document < "u" && document.currentScript && (b = document.currentScript.src), e && (b = e), b.startsWith("blob:") ? b = "" : b = b.substr(0, b.replace(/[?#].*/, "").lastIndexOf("/") + 1), y = (s) => fetch(s, { credentials: "same-origin" }).then((o) => o.ok ? o.arrayBuffer() : Promise.reject(Error(o.status + " : " + o.url)));
    var C = i.print || console.log.bind(console), g = i.printErr || console.error.bind(console);
    Object.assign(i, d), d = null, i.thisProgram && (f = i.thisProgram);
    var I = i.wasmBinary, v, P = !1, L, A, T, U, J, z, W, e1, m1;
    function v1() {
      var s = v.buffer;
      i.HEAP8 = A = new Int8Array(s), i.HEAP16 = U = new Int16Array(s), i.HEAPU8 = T = new Uint8Array(s), i.HEAPU16 = J = new Uint16Array(s), i.HEAP32 = z = new Int32Array(s), i.HEAPU32 = W = new Uint32Array(s), i.HEAPF32 = e1 = new Float32Array(s), i.HEAPF64 = m1 = new Float64Array(s);
    }
    var E = [], j = [], _ = [];
    function M() {
      var s = i.preRun.shift();
      E.unshift(s);
    }
    var Y = 0, F = null;
    function B(s) {
      var o;
      throw (o = i.onAbort) == null || o.call(i, s), s = "Aborted(" + s + ")", g(s), P = !0, s = new WebAssembly.RuntimeError(s + ". Build with -sASSERTIONS for more info."), u(s), s;
    }
    var a1 = (s) => s.startsWith("data:application/octet-stream;base64,"), w1;
    function O(s) {
      if (s == w1 && I) return new Uint8Array(I);
      throw "both async and sync fetching of the wasm failed";
    }
    function N(s) {
      return I ? Promise.resolve().then(() => O(s)) : y(s).then((o) => new Uint8Array(o), () => O(s));
    }
    function t1(s, o, l) {
      return N(s).then((h) => WebAssembly.instantiate(h, o)).then(l, (h) => {
        g(`failed to asynchronously prepare wasm: ${h}`), B(h);
      });
    }
    function i1(s, o) {
      var l = w1;
      return I || typeof WebAssembly.instantiateStreaming != "function" || a1(l) || typeof fetch != "function" ? t1(l, s, o) : fetch(l, { credentials: "same-origin" }).then((h) => WebAssembly.instantiateStreaming(h, s).then(o, function(p) {
        return g(`wasm streaming compile failed: ${p}`), g("falling back to ArrayBuffer instantiation"), t1(l, s, o);
      }));
    }
    class h1 {
      constructor(o) {
        G(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${o})`, this.status = o;
      }
    }
    var g1 = (s) => {
      for (; 0 < s.length; ) s.shift()(i);
    }, E1 = i.noExitRuntime || !0, l2 = typeof TextDecoder < "u" ? new TextDecoder() : void 0, u1 = (s, o = 0, l = NaN) => {
      var h = o + l;
      for (l = o; s[l] && !(l >= h); ) ++l;
      if (16 < l - o && s.buffer && l2) return l2.decode(s.subarray(o, l));
      for (h = ""; o < l; ) {
        var p = s[o++];
        if (p & 128) {
          var w = s[o++] & 63;
          if ((p & 224) == 192) h += String.fromCharCode((p & 31) << 6 | w);
          else {
            var k = s[o++] & 63;
            p = (p & 240) == 224 ? (p & 15) << 12 | w << 6 | k : (p & 7) << 18 | w << 12 | k << 6 | s[o++] & 63, 65536 > p ? h += String.fromCharCode(p) : (p -= 65536, h += String.fromCharCode(55296 | p >> 10, 56320 | p & 1023));
          }
        } else h += String.fromCharCode(p);
      }
      return h;
    }, b1 = 0;
    class A2 {
      constructor(o) {
        this.Ea = o - 24;
      }
    }
    var u0 = () => {
      var s = [], o = b1;
      if (!o) return X2(0), 0;
      var l = new A2(o);
      W[l.Ea + 16 >> 2] = o;
      var h = W[l.Ea + 4 >> 2];
      if (!h) return X2(0), o;
      for (var p of s) {
        if (p === 0 || p === h) break;
        if (L4(p, h, l.Ea + 16)) return X2(p), o;
      }
      return X2(h), o;
    }, H2 = (s, o, l) => {
      var h = T;
      if (0 < l) {
        l = o + l - 1;
        for (var p = 0; p < s.length; ++p) {
          var w = s.charCodeAt(p);
          if (55296 <= w && 57343 >= w) {
            var k = s.charCodeAt(++p);
            w = 65536 + ((w & 1023) << 10) | k & 1023;
          }
          if (127 >= w) {
            if (o >= l) break;
            h[o++] = w;
          } else {
            if (2047 >= w) {
              if (o + 1 >= l) break;
              h[o++] = 192 | w >> 6;
            } else {
              if (65535 >= w) {
                if (o + 2 >= l) break;
                h[o++] = 224 | w >> 12;
              } else {
                if (o + 3 >= l) break;
                h[o++] = 240 | w >> 18, h[o++] = 128 | w >> 12 & 63;
              }
              h[o++] = 128 | w >> 6 & 63;
            }
            h[o++] = 128 | w & 63;
          }
        }
        h[o] = 0;
      }
    }, x3 = {}, c0 = (s) => {
      for (; s.length; ) {
        var o = s.pop();
        s.pop()(o);
      }
    };
    function V2(s) {
      return this.fromWireType(W[s >> 2]);
    }
    var T2 = {}, b2 = {}, L3 = {}, G2, h2 = (s, o, l) => {
      function h(x) {
        if (x = l(x), x.length !== s.length) throw new G2("Mismatched type converter count");
        for (var $ = 0; $ < s.length; ++$) B1(s[$], x[$]);
      }
      s.forEach((x) => L3[x] = o);
      var p = Array(o.length), w = [], k = 0;
      o.forEach((x, $) => {
        b2.hasOwnProperty(x) ? p[$] = b2[x] : (w.push(x), T2.hasOwnProperty(x) || (T2[x] = []), T2[x].push(() => {
          p[$] = b2[x], ++k, k === w.length && h(p);
        }));
      }), w.length === 0 && h(p);
    }, c4, S1 = (s) => {
      for (var o = ""; T[s]; ) o += c4[T[s++]];
      return o;
    }, X;
    function at(s, o, l = {}) {
      var h = o.name;
      if (!s) throw new X(`type "${h}" must have a positive integer typeid pointer`);
      if (b2.hasOwnProperty(s)) {
        if (l.kb) return;
        throw new X(`Cannot register type '${h}' twice`);
      }
      b2[s] = o, delete L3[s], T2.hasOwnProperty(s) && (o = T2[s], delete T2[s], o.forEach((p) => p()));
    }
    function B1(s, o, l = {}) {
      return at(s, o, l);
    }
    var l0 = (s) => {
      throw new X(s.Da.Ga.Fa.name + " instance already deleted");
    }, h0 = !1, l4 = () => {
    }, h4 = (s, o, l) => o === l ? s : l.Ja === void 0 ? null : (s = h4(s, o, l.Ja), s === null ? null : l.cb(s)), d4 = {}, ut = {}, ct = (s, o) => {
      if (o === void 0) throw new X("ptr should not be undefined");
      for (; s.Ja; ) o = s.Ta(o), s = s.Ja;
      return ut[o];
    }, M3 = (s, o) => {
      if (!o.Ga || !o.Ea) throw new G2("makeClassHandle requires ptr and ptrType");
      if (!!o.Ka != !!o.Ia) throw new G2("Both smartPtrType and smartPtr must be specified");
      return o.count = { value: 1 }, J2(Object.create(s, { Da: { value: o, writable: !0 } }));
    }, J2 = (s) => typeof FinalizationRegistry > "u" ? (J2 = (o) => o, s) : (h0 = new FinalizationRegistry((o) => {
      o = o.Da, --o.count.value, o.count.value === 0 && (o.Ia ? o.Ka.Na(o.Ia) : o.Ga.Fa.Na(o.Ea));
    }), J2 = (o) => {
      var l = o.Da;
      return l.Ia && h0.register(o, { Da: l }, o), o;
    }, l4 = (o) => {
      h0.unregister(o);
    }, J2(s));
    function j3() {
    }
    var Y2 = (s, o) => Object.defineProperty(o, "name", { value: s }), f4 = (s, o, l) => {
      if (s[o].Ha === void 0) {
        var h = s[o];
        s[o] = function(...p) {
          if (!s[o].Ha.hasOwnProperty(p.length)) throw new X(`Function '${l}' called with an invalid number of arguments (${p.length}) - expects one of (${s[o].Ha})!`);
          return s[o].Ha[p.length].apply(this, p);
        }, s[o].Ha = [], s[o].Ha[h.Qa] = h;
      }
    }, d0 = (s, o, l) => {
      if (i.hasOwnProperty(s)) {
        if (l === void 0 || i[s].Ha !== void 0 && i[s].Ha[l] !== void 0) throw new X(`Cannot register public name '${s}' twice`);
        if (f4(i, s, s), i[s].Ha.hasOwnProperty(l)) throw new X(`Cannot register multiple overloads of a function with the same number of arguments (${l})!`);
        i[s].Ha[l] = o;
      } else i[s] = o, i[s].Qa = l;
    }, lt = (s) => {
      s = s.replace(/[^a-zA-Z0-9_]/g, "$");
      var o = s.charCodeAt(0);
      return 48 <= o && 57 >= o ? `_${s}` : s;
    };
    function ht(s, o, l, h, p, w, k, x) {
      this.name = s, this.constructor = o, this.Pa = l, this.Na = h, this.Ja = p, this.fb = w, this.Ta = k, this.cb = x, this.mb = [];
    }
    var f0 = (s, o, l) => {
      for (; o !== l; ) {
        if (!o.Ta) throw new X(`Expected null or instance of ${l.name}, got an instance of ${o.name}`);
        s = o.Ta(s), o = o.Ja;
      }
      return s;
    };
    function dt(s, o) {
      if (o === null) {
        if (this.Wa) throw new X(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!o.Da) throw new X(`Cannot pass "${w0(o)}" as a ${this.name}`);
      if (!o.Da.Ea) throw new X(`Cannot pass deleted object as a pointer of type ${this.name}`);
      return f0(o.Da.Ea, o.Da.Ga.Fa, this.Fa);
    }
    function ft(s, o) {
      if (o === null) {
        if (this.Wa) throw new X(`null is not a valid ${this.name}`);
        if (this.Va) {
          var l = this.Xa();
          return s !== null && s.push(this.Na, l), l;
        }
        return 0;
      }
      if (!o || !o.Da) throw new X(`Cannot pass "${w0(o)}" as a ${this.name}`);
      if (!o.Da.Ea) throw new X(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (!this.Ua && o.Da.Ga.Ua) throw new X(`Cannot convert argument of type ${o.Da.Ka ? o.Da.Ka.name : o.Da.Ga.name} to parameter type ${this.name}`);
      if (l = f0(o.Da.Ea, o.Da.Ga.Fa, this.Fa), this.Va) {
        if (o.Da.Ia === void 0) throw new X("Passing raw pointer to smart pointer is illegal");
        switch (this.rb) {
          case 0:
            if (o.Da.Ka === this) l = o.Da.Ia;
            else throw new X(`Cannot convert argument of type ${o.Da.Ka ? o.Da.Ka.name : o.Da.Ga.name} to parameter type ${this.name}`);
            break;
          case 1:
            l = o.Da.Ia;
            break;
          case 2:
            if (o.Da.Ka === this) l = o.Da.Ia;
            else {
              var h = o.clone();
              l = this.nb(l, k3(() => h.delete())), s !== null && s.push(this.Na, l);
            }
            break;
          default:
            throw new X("Unsupporting sharing policy");
        }
      }
      return l;
    }
    function pt(s, o) {
      if (o === null) {
        if (this.Wa) throw new X(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!o.Da) throw new X(`Cannot pass "${w0(o)}" as a ${this.name}`);
      if (!o.Da.Ea) throw new X(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (o.Da.Ga.Ua) throw new X(`Cannot convert argument of type ${o.Da.Ga.name} to parameter type ${this.name}`);
      return f0(o.Da.Ea, o.Da.Ga.Fa, this.Fa);
    }
    function Q2(s, o, l, h, p, w, k, x, $, R, D) {
      this.name = s, this.Fa = o, this.Wa = l, this.Ua = h, this.Va = p, this.lb = w, this.rb = k, this.ab = x, this.Xa = $, this.nb = R, this.Na = D, p || o.Ja !== void 0 ? this.toWireType = ft : (this.toWireType = h ? dt : pt, this.Ma = null);
    }
    var p4 = (s, o, l) => {
      if (!i.hasOwnProperty(s)) throw new G2("Replacing nonexistent public symbol");
      i[s].Ha !== void 0 && l !== void 0 ? i[s].Ha[l] = o : (i[s] = o, i[s].Qa = l);
    }, O1, mt = (s, o, l = []) => (s.includes("j") ? (s = s.replace(/p/g, "i"), o = (0, i["dynCall_" + s])(o, ...l)) : o = O1.get(o)(...l), o), vt = (s, o) => (...l) => mt(s, o, l), k1 = (s, o) => {
      s = S1(s);
      var l = s.includes("j") ? vt(s, o) : O1.get(o);
      if (typeof l != "function") throw new X(`unknown function pointer with signature ${s}: ${o}`);
      return l;
    }, m4, v4 = (s) => {
      s = S4(s);
      var o = S1(s);
      return Z1(s), o;
    }, O3 = (s, o) => {
      function l(w) {
        p[w] || b2[w] || (L3[w] ? L3[w].forEach(l) : (h.push(w), p[w] = !0));
      }
      var h = [], p = {};
      throw o.forEach(l), new m4(`${s}: ` + h.map(v4).join([", "]));
    }, p0 = (s, o) => {
      for (var l = [], h = 0; h < s; h++) l.push(W[o + 4 * h >> 2]);
      return l;
    };
    function yt(s) {
      for (var o = 1; o < s.length; ++o) if (s[o] !== null && s[o].Ma === void 0) return !0;
      return !1;
    }
    function m0(s, o, l, h, p) {
      var w = o.length;
      if (2 > w) throw new X("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var k = o[1] !== null && l !== null, x = yt(o), $ = o[0].name !== "void", R = w - 2, D = Array(R), Q = [], r1 = [];
      return Y2(s, function(...U1) {
        if (r1.length = 0, Q.length = k ? 2 : 1, Q[0] = p, k) {
          var y1 = o[1].toWireType(r1, this);
          Q[1] = y1;
        }
        for (var _1 = 0; _1 < R; ++_1) D[_1] = o[_1 + 2].toWireType(r1, U1[_1]), Q.push(D[_1]);
        if (U1 = h(...Q), x) c0(r1);
        else for (_1 = k ? 1 : 2; _1 < o.length; _1++) {
          var H1 = _1 === 1 ? y1 : D[_1 - 2];
          o[_1].Ma !== null && o[_1].Ma(H1);
        }
        return y1 = $ ? o[0].fromWireType(U1) : void 0, y1;
      });
    }
    var y4 = (s) => {
      s = s.trim();
      let o = s.indexOf("(");
      return o !== -1 ? s.substr(0, o) : s;
    }, v0 = [], X1 = [], y0 = (s) => {
      9 < s && --X1[s + 1] === 0 && (X1[s] = void 0, v0.push(s));
    }, g0 = (s) => {
      if (!s) throw new X("Cannot use deleted val. handle = " + s);
      return X1[s];
    }, k3 = (s) => {
      switch (s) {
        case void 0:
          return 2;
        case null:
          return 4;
        case !0:
          return 6;
        case !1:
          return 8;
        default:
          let o = v0.pop() || X1.length;
          return X1[o] = s, X1[o + 1] = 1, o;
      }
    }, g4 = { name: "emscripten::val", fromWireType: (s) => {
      var o = g0(s);
      return y0(s), o;
    }, toWireType: (s, o) => k3(o), La: 8, readValueFromPointer: V2, Ma: null }, gt = (s, o, l) => {
      switch (o) {
        case 1:
          return l ? function(h) {
            return this.fromWireType(A[h]);
          } : function(h) {
            return this.fromWireType(T[h]);
          };
        case 2:
          return l ? function(h) {
            return this.fromWireType(U[h >> 1]);
          } : function(h) {
            return this.fromWireType(J[h >> 1]);
          };
        case 4:
          return l ? function(h) {
            return this.fromWireType(z[h >> 2]);
          } : function(h) {
            return this.fromWireType(W[h >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${o}): ${s}`);
      }
    }, _0 = (s, o) => {
      var l = b2[s];
      if (l === void 0) throw s = `${o} has unknown type ${v4(s)}`, new X(s);
      return l;
    }, w0 = (s) => {
      if (s === null) return "null";
      var o = typeof s;
      return o === "object" || o === "array" || o === "function" ? s.toString() : "" + s;
    }, _t = (s, o) => {
      switch (o) {
        case 4:
          return function(l) {
            return this.fromWireType(e1[l >> 2]);
          };
        case 8:
          return function(l) {
            return this.fromWireType(m1[l >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${o}): ${s}`);
      }
    }, wt = (s, o, l) => {
      switch (o) {
        case 1:
          return l ? (h) => A[h] : (h) => T[h];
        case 2:
          return l ? (h) => U[h >> 1] : (h) => J[h >> 1];
        case 4:
          return l ? (h) => z[h >> 2] : (h) => W[h >> 2];
        default:
          throw new TypeError(`invalid integer width (${o}): ${s}`);
      }
    }, bt = Object.assign({ optional: !0 }, g4), _4 = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Ct = (s, o) => {
      for (var l = s >> 1, h = l + o / 2; !(l >= h) && J[l]; ) ++l;
      if (l <<= 1, 32 < l - s && _4) return _4.decode(T.subarray(s, l));
      for (l = "", h = 0; !(h >= o / 2); ++h) {
        var p = U[s + 2 * h >> 1];
        if (p == 0) break;
        l += String.fromCharCode(p);
      }
      return l;
    }, It = (s, o, l) => {
      if (l != null || (l = 2147483647), 2 > l) return 0;
      l -= 2;
      var h = o;
      l = l < 2 * s.length ? l / 2 : s.length;
      for (var p = 0; p < l; ++p) U[o >> 1] = s.charCodeAt(p), o += 2;
      return U[o >> 1] = 0, o - h;
    }, Et = (s) => 2 * s.length, St = (s, o) => {
      for (var l = 0, h = ""; !(l >= o / 4); ) {
        var p = z[s + 4 * l >> 2];
        if (p == 0) break;
        ++l, 65536 <= p ? (p -= 65536, h += String.fromCharCode(55296 | p >> 10, 56320 | p & 1023)) : h += String.fromCharCode(p);
      }
      return h;
    }, xt = (s, o, l) => {
      if (l != null || (l = 2147483647), 4 > l) return 0;
      var h = o;
      l = h + l - 4;
      for (var p = 0; p < s.length; ++p) {
        var w = s.charCodeAt(p);
        if (55296 <= w && 57343 >= w) {
          var k = s.charCodeAt(++p);
          w = 65536 + ((w & 1023) << 10) | k & 1023;
        }
        if (z[o >> 2] = w, o += 4, o + 4 > l) break;
      }
      return z[o >> 2] = 0, o - h;
    }, Lt = (s) => {
      for (var o = 0, l = 0; l < s.length; ++l) {
        var h = s.charCodeAt(l);
        55296 <= h && 57343 >= h && ++l, o += 4;
      }
      return o;
    }, b0 = 0, C0 = [], Mt = (s) => {
      var o = C0.length;
      return C0.push(s), o;
    }, jt = (s, o) => {
      for (var l = Array(s), h = 0; h < s; ++h) l[h] = _0(W[o + 4 * h >> 2], "parameter " + h);
      return l;
    }, Ot = Reflect.construct, K2 = {}, w4 = (s) => {
      if (!(s instanceof h1 || s == "unwind")) throw s;
    }, b4 = (s) => {
      var o;
      throw L = s, E1 || 0 < b0 || ((o = i.onExit) == null || o.call(i, s), P = !0), new h1(s);
    }, kt = (s) => {
      if (!P) try {
        if (s(), !(E1 || 0 < b0)) try {
          L = s = L, b4(s);
        } catch (o) {
          w4(o);
        }
      } catch (o) {
        w4(o);
      }
    }, I0 = {}, C4 = () => {
      if (!E0) {
        var s = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: f || "./this.program" }, o;
        for (o in I0) I0[o] === void 0 ? delete s[o] : s[o] = I0[o];
        var l = [];
        for (o in s) l.push(`${o}=${s[o]}`);
        E0 = l;
      }
      return E0;
    }, E0, Pt = [null, [], []], At = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (s) => crypto.getRandomValues(s);
      B("initRandomDevice");
    }, I4 = (s) => (I4 = At())(s);
    G2 = i.InternalError = class extends Error {
      constructor(s) {
        super(s), this.name = "InternalError";
      }
    };
    for (var E4 = Array(256), P3 = 0; 256 > P3; ++P3) E4[P3] = String.fromCharCode(P3);
    c4 = E4, X = i.BindingError = class extends Error {
      constructor(s) {
        super(s), this.name = "BindingError";
      }
    }, Object.assign(j3.prototype, { isAliasOf: function(s) {
      if (!(this instanceof j3 && s instanceof j3)) return !1;
      var o = this.Da.Ga.Fa, l = this.Da.Ea;
      s.Da = s.Da;
      var h = s.Da.Ga.Fa;
      for (s = s.Da.Ea; o.Ja; ) l = o.Ta(l), o = o.Ja;
      for (; h.Ja; ) s = h.Ta(s), h = h.Ja;
      return o === h && l === s;
    }, clone: function() {
      if (this.Da.Ea || l0(this), this.Da.Sa) return this.Da.count.value += 1, this;
      var s = J2, o = Object, l = o.create, h = Object.getPrototypeOf(this), p = this.Da;
      return s = s(l.call(o, h, { Da: { value: { count: p.count, Ra: p.Ra, Sa: p.Sa, Ea: p.Ea, Ga: p.Ga, Ia: p.Ia, Ka: p.Ka } } })), s.Da.count.value += 1, s.Da.Ra = !1, s;
    }, delete() {
      if (this.Da.Ea || l0(this), this.Da.Ra && !this.Da.Sa) throw new X("Object already scheduled for deletion");
      l4(this);
      var s = this.Da;
      --s.count.value, s.count.value === 0 && (s.Ia ? s.Ka.Na(s.Ia) : s.Ga.Fa.Na(s.Ea)), this.Da.Sa || (this.Da.Ia = void 0, this.Da.Ea = void 0);
    }, isDeleted: function() {
      return !this.Da.Ea;
    }, deleteLater: function() {
      if (this.Da.Ea || l0(this), this.Da.Ra && !this.Da.Sa) throw new X("Object already scheduled for deletion");
      return this.Da.Ra = !0, this;
    } }), Object.assign(Q2.prototype, { gb(s) {
      return this.ab && (s = this.ab(s)), s;
    }, Za(s) {
      var o;
      (o = this.Na) == null || o.call(this, s);
    }, La: 8, readValueFromPointer: V2, fromWireType: function(s) {
      function o() {
        return this.Va ? M3(this.Fa.Pa, { Ga: this.lb, Ea: l, Ka: this, Ia: s }) : M3(this.Fa.Pa, { Ga: this, Ea: s });
      }
      var l = this.gb(s);
      if (!l) return this.Za(s), null;
      var h = ct(this.Fa, l);
      if (h !== void 0) return h.Da.count.value === 0 ? (h.Da.Ea = l, h.Da.Ia = s, h.clone()) : (h = h.clone(), this.Za(s), h);
      if (h = this.Fa.fb(l), h = d4[h], !h) return o.call(this);
      h = this.Ua ? h.bb : h.pointerType;
      var p = h4(l, this.Fa, h.Fa);
      return p === null ? o.call(this) : this.Va ? M3(h.Fa.Pa, { Ga: h, Ea: p, Ka: this, Ia: s }) : M3(h.Fa.Pa, { Ga: h, Ea: p });
    } }), m4 = i.UnboundTypeError = ((s, o) => {
      var l = Y2(o, function(h) {
        this.name = o, this.message = h, h = Error(h).stack, h !== void 0 && (this.stack = this.toString() + `
` + h.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return l.prototype = Object.create(s.prototype), l.prototype.constructor = l, l.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, l;
    })(Error, "UnboundTypeError"), X1.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), i.count_emval_handles = () => X1.length / 2 - 5 - v0.length;
    var Tt = { c: (s, o, l, h) => B(`Assertion failed: ${s ? u1(T, s) : ""}, at: ` + [o ? o ? u1(T, o) : "" : "unknown filename", l, h ? h ? u1(T, h) : "" : "unknown function"]), d: () => u0(), p: (s, o, l) => {
      var h = new A2(s);
      throw W[h.Ea + 16 >> 2] = 0, W[h.Ea + 4 >> 2] = o, W[h.Ea + 8 >> 2] = l, b1 = s, b1;
    }, g: (s) => {
      throw b1 || (b1 = s), b1;
    }, R: () => {
    }, O: () => {
    }, P: () => {
    }, U: function() {
    }, Q: () => {
    }, W: () => B(""), z: (s) => {
      var o = x3[s];
      delete x3[s];
      var l = o.Xa, h = o.Na, p = o.$a, w = p.map((k) => k.jb).concat(p.map((k) => k.pb));
      h2([s], w, (k) => {
        var x = {};
        return p.forEach(($, R) => {
          var D = k[R], Q = $.hb, r1 = $.ib, U1 = k[R + p.length], y1 = $.ob, _1 = $.qb;
          x[$.eb] = { read: (H1) => D.fromWireType(Q(r1, H1)), write: (H1, Z2) => {
            var q1 = [];
            y1(_1, H1, U1.toWireType(q1, Z2)), c0(q1);
          } };
        }), [{ name: o.name, fromWireType: ($) => {
          var R = {}, D;
          for (D in x) R[D] = x[D].read($);
          return h($), R;
        }, toWireType: ($, R) => {
          for (var D in x) if (!(D in R)) throw new TypeError(`Missing field: "${D}"`);
          var Q = l();
          for (D in x) x[D].write(Q, R[D]);
          return $ !== null && $.push(h, Q), Q;
        }, La: 8, readValueFromPointer: V2, Ma: h }];
      });
    }, H: () => {
    }, aa: (s, o, l, h) => {
      o = S1(o), B1(s, { name: o, fromWireType: function(p) {
        return !!p;
      }, toWireType: function(p, w) {
        return w ? l : h;
      }, La: 8, readValueFromPointer: function(p) {
        return this.fromWireType(T[p]);
      }, Ma: null });
    }, v: (s, o, l, h, p, w, k, x, $, R, D, Q, r1) => {
      D = S1(D), w = k1(p, w), x && (x = k1(k, x)), R && (R = k1($, R)), r1 = k1(Q, r1);
      var U1 = lt(D);
      d0(U1, function() {
        O3(`Cannot construct ${D} due to unbound types`, [h]);
      }), h2([s, o, l], h ? [h] : [], (y1) => {
        if (y1 = y1[0], h) var _1 = y1.Fa, H1 = _1.Pa;
        else H1 = j3.prototype;
        y1 = Y2(D, function(...x0) {
          if (Object.getPrototypeOf(this) !== Z2) throw new X("Use 'new' to construct " + D);
          if (q1.Oa === void 0) throw new X(D + " has no accessible constructor");
          var O4 = q1.Oa[x0.length];
          if (O4 === void 0) throw new X(`Tried to invoke ctor of ${D} with invalid number of parameters (${x0.length}) - expected (${Object.keys(q1.Oa).toString()}) parameters instead!`);
          return O4.apply(this, x0);
        });
        var Z2 = Object.create(H1, { constructor: { value: y1 } });
        y1.prototype = Z2;
        var q1 = new ht(D, y1, Z2, r1, _1, w, x, R);
        if (q1.Ja) {
          var e3;
          (e3 = q1.Ja).Ya != null || (e3.Ya = []), q1.Ja.Ya.push(q1);
        }
        return _1 = new Q2(D, q1, !0, !1, !1), e3 = new Q2(D + "*", q1, !1, !1, !1), H1 = new Q2(D + " const*", q1, !1, !0, !1), d4[s] = { pointerType: e3, bb: H1 }, p4(U1, y1), [_1, e3, H1];
      });
    }, t: (s, o, l, h, p, w) => {
      var k = p0(o, l);
      p = k1(h, p), h2([], [s], (x) => {
        x = x[0];
        var $ = `constructor ${x.name}`;
        if (x.Fa.Oa === void 0 && (x.Fa.Oa = []), x.Fa.Oa[o - 1] !== void 0) throw new X(`Cannot register multiple constructors with identical number of parameters (${o - 1}) for class '${x.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return x.Fa.Oa[o - 1] = () => {
          O3(`Cannot construct ${x.name} due to unbound types`, k);
        }, h2([], k, (R) => (R.splice(1, 0, null), x.Fa.Oa[o - 1] = m0($, R, null, p, w), [])), [];
      });
    }, h: (s, o, l, h, p, w, k, x) => {
      var $ = p0(l, h);
      o = S1(o), o = y4(o), w = k1(p, w), h2([], [s], (R) => {
        function D() {
          O3(`Cannot call ${Q} due to unbound types`, $);
        }
        R = R[0];
        var Q = `${R.name}.${o}`;
        o.startsWith("@@") && (o = Symbol[o.substring(2)]), x && R.Fa.mb.push(o);
        var r1 = R.Fa.Pa, U1 = r1[o];
        return U1 === void 0 || U1.Ha === void 0 && U1.className !== R.name && U1.Qa === l - 2 ? (D.Qa = l - 2, D.className = R.name, r1[o] = D) : (f4(r1, o, Q), r1[o].Ha[l - 2] = D), h2([], $, (y1) => (y1 = m0(Q, y1, R, w, k), r1[o].Ha === void 0 ? (y1.Qa = l - 2, r1[o] = y1) : r1[o].Ha[l - 2] = y1, [])), [];
      });
    }, $: (s) => B1(s, g4), B: (s, o, l, h) => {
      function p() {
      }
      o = S1(o), p.values = {}, B1(s, { name: o, constructor: p, fromWireType: function(w) {
        return this.constructor.values[w];
      }, toWireType: (w, k) => k.value, La: 8, readValueFromPointer: gt(o, l, h), Ma: null }), d0(o, p);
    }, n: (s, o, l) => {
      var h = _0(s, "enum");
      o = S1(o), s = h.constructor, h = Object.create(h.constructor.prototype, { value: { value: l }, constructor: { value: Y2(`${h.name}_${o}`, function() {
      }) } }), s.values[l] = h, s[o] = h;
    }, D: (s, o, l) => {
      o = S1(o), B1(s, { name: o, fromWireType: (h) => h, toWireType: (h, p) => p, La: 8, readValueFromPointer: _t(o, l), Ma: null });
    }, y: (s, o, l, h, p, w) => {
      var k = p0(o, l);
      s = S1(s), s = y4(s), p = k1(h, p), d0(s, function() {
        O3(`Cannot call ${s} due to unbound types`, k);
      }, o - 1), h2([], k, (x) => (p4(s, m0(s, [x[0], null].concat(x.slice(1)), null, p, w), o - 1), []));
    }, o: (s, o, l, h, p) => {
      if (o = S1(o), p === -1 && (p = 4294967295), p = (x) => x, h === 0) {
        var w = 32 - 8 * l;
        p = (x) => x << w >>> w;
      }
      var k = o.includes("unsigned") ? function(x, $) {
        return $ >>> 0;
      } : function(x, $) {
        return $;
      };
      B1(s, { name: o, fromWireType: p, toWireType: k, La: 8, readValueFromPointer: wt(o, l, h !== 0), Ma: null });
    }, k: (s, o, l) => {
      function h(w) {
        return new p(A.buffer, W[w + 4 >> 2], W[w >> 2]);
      }
      var p = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][o];
      l = S1(l), B1(s, { name: l, fromWireType: h, La: 8, readValueFromPointer: h }, { kb: !0 });
    }, x: (s) => {
      B1(s, bt);
    }, ga: (s, o, l, h, p, w, k, x, $, R, D, Q) => {
      l = S1(l), w = k1(p, w), x = k1(k, x), R = k1($, R), Q = k1(D, Q), h2([s], [o], (r1) => (r1 = r1[0], [new Q2(l, r1.Fa, !1, !1, !0, r1, h, w, x, R, Q)]));
    }, E: (s, o) => {
      o = S1(o);
      var l = o === "std::string";
      B1(s, { name: o, fromWireType: function(h) {
        var p = W[h >> 2], w = h + 4;
        if (l) for (var k = w, x = 0; x <= p; ++x) {
          var $ = w + x;
          if (x == p || T[$] == 0) {
            if (k = k ? u1(T, k, $ - k) : "", R === void 0) var R = k;
            else R += "\0", R += k;
            k = $ + 1;
          }
        }
        else {
          for (R = Array(p), x = 0; x < p; ++x) R[x] = String.fromCharCode(T[w + x]);
          R = R.join("");
        }
        return Z1(h), R;
      }, toWireType: function(h, p) {
        p instanceof ArrayBuffer && (p = new Uint8Array(p));
        var w, k = typeof p == "string";
        if (!(k || p instanceof Uint8Array || p instanceof Uint8ClampedArray || p instanceof Int8Array)) throw new X("Cannot pass non-string to std::string");
        if (l && k) for (var x = w = 0; x < p.length; ++x) {
          var $ = p.charCodeAt(x);
          127 >= $ ? w++ : 2047 >= $ ? w += 2 : 55296 <= $ && 57343 >= $ ? (w += 4, ++x) : w += 3;
        }
        else w = p.length;
        if (x = S0(4 + w + 1), $ = x + 4, W[x >> 2] = w, l && k) H2(p, $, w + 1);
        else if (k) for (k = 0; k < w; ++k) {
          var R = p.charCodeAt(k);
          if (255 < R) throw Z1($), new X("String has UTF-16 code units that do not fit in 8 bits");
          T[$ + k] = R;
        }
        else for (k = 0; k < w; ++k) T[$ + k] = p[k];
        return h !== null && h.push(Z1, x), x;
      }, La: 8, readValueFromPointer: V2, Ma(h) {
        Z1(h);
      } });
    }, w: (s, o, l) => {
      if (l = S1(l), o === 2) var h = Ct, p = It, w = Et, k = (x) => J[x >> 1];
      else o === 4 && (h = St, p = xt, w = Lt, k = (x) => W[x >> 2]);
      B1(s, { name: l, fromWireType: (x) => {
        for (var $ = W[x >> 2], R, D = x + 4, Q = 0; Q <= $; ++Q) {
          var r1 = x + 4 + Q * o;
          (Q == $ || k(r1) == 0) && (D = h(D, r1 - D), R === void 0 ? R = D : (R += "\0", R += D), D = r1 + o);
        }
        return Z1(x), R;
      }, toWireType: (x, $) => {
        if (typeof $ != "string") throw new X(`Cannot pass non-string to C++ string type ${l}`);
        var R = w($), D = S0(4 + R + o);
        return W[D >> 2] = R / o, p($, D + 4, R + o), x !== null && x.push(Z1, D), D;
      }, La: 8, readValueFromPointer: V2, Ma(x) {
        Z1(x);
      } });
    }, A: (s, o, l, h, p, w) => {
      x3[s] = { name: S1(o), Xa: k1(l, h), Na: k1(p, w), $a: [] };
    }, m: (s, o, l, h, p, w, k, x, $, R) => {
      x3[s].$a.push({ eb: S1(o), jb: l, hb: k1(h, p), ib: w, pb: k, ob: k1(x, $), qb: R });
    }, ba: (s, o) => {
      o = S1(o), B1(s, { sb: !0, name: o, La: 0, fromWireType: () => {
      }, toWireType: () => {
      } });
    }, M: () => {
      E1 = !1, b0 = 0;
    }, I: () => {
      throw 1 / 0;
    }, ea: (s, o, l, h) => (s = C0[s], o = g0(o), s(null, o, l, h)), F: y0, da: (s, o, l) => {
      var h = jt(s, o), p = h.shift();
      s--;
      var w = Array(s);
      return o = `methodCaller<(${h.map((k) => k.name).join(", ")}) => ${p.name}>`, Mt(Y2(o, (k, x, $, R) => {
        for (var D = 0, Q = 0; Q < s; ++Q) w[Q] = h[Q].readValueFromPointer(R + D), D += h[Q].La;
        return x = l === 1 ? Ot(x, w) : x.apply(k, w), k = [], x = p.toWireType(k, x), k.length && (W[$ >> 2] = k3(k)), x;
      }));
    }, fa: (s) => {
      9 < s && (X1[s + 1] += 1);
    }, ca: (s) => {
      var o = g0(s);
      c0(o), y0(s);
    }, r: (s, o) => (s = _0(s, "_emval_take_value"), s = s.readValueFromPointer(o), k3(s)), J: (s, o) => {
      if (K2[s] && (clearTimeout(K2[s].id), delete K2[s]), !o) return 0;
      var l = setTimeout(() => {
        delete K2[s], kt(() => x4(s, performance.now()));
      }, o);
      return K2[s] = { id: l, tb: o }, 0;
    }, K: (s, o, l, h) => {
      var p = (/* @__PURE__ */ new Date()).getFullYear(), w = new Date(p, 0, 1).getTimezoneOffset();
      p = new Date(p, 6, 1).getTimezoneOffset(), W[s >> 2] = 60 * Math.max(w, p), z[o >> 2] = +(w != p), o = (k) => {
        var x = Math.abs(k);
        return `UTC${0 <= k ? "-" : "+"}${String(Math.floor(x / 60)).padStart(2, "0")}${String(x % 60).padStart(2, "0")}`;
      }, s = o(w), o = o(p), p < w ? (H2(s, l, 17), H2(o, h, 17)) : (H2(s, h, 17), H2(o, l, 17));
    }, ha: () => performance.now(), L: (s) => {
      var o = T.length;
      if (s >>>= 0, 2147483648 < s) return !1;
      for (var l = 1; 4 >= l; l *= 2) {
        var h = o * (1 + 0.2 / l);
        h = Math.min(h, s + 100663296);
        e: {
          h = (Math.min(2147483648, 65536 * Math.ceil(Math.max(s, h) / 65536)) - v.buffer.byteLength + 65535) / 65536 | 0;
          try {
            v.grow(h), v1();
            var p = 1;
            break e;
          } catch {
          }
          p = void 0;
        }
        if (p) return !0;
      }
      return !1;
    }, Y: (s, o) => {
      var l = 0;
      return C4().forEach((h, p) => {
        var w = o + l;
        for (p = W[s + 4 * p >> 2] = w, w = 0; w < h.length; ++w) A[p++] = h.charCodeAt(w);
        A[p] = 0, l += h.length + 1;
      }), 0;
    }, Z: (s, o) => {
      var l = C4();
      W[s >> 2] = l.length;
      var h = 0;
      return l.forEach((p) => h += p.length + 1), W[o >> 2] = h, 0;
    }, V: () => 52, T: () => 52, S: (s, o, l, h) => {
      for (var p = 0, w = 0; w < l; w++) {
        var k = W[o >> 2], x = W[o + 4 >> 2];
        o += 8;
        for (var $ = 0; $ < x; $++) {
          var R = s, D = T[k + $], Q = Pt[R];
          D === 0 || D === 10 ? ((R === 1 ? C : g)(u1(Q)), Q.length = 0) : Q.push(D);
        }
        p += x;
      }
      return W[h >> 2] = p, 0;
    }, j: Ut, f: Ht, e: Bt, _: Rt, s: Vt, C: Wt, u: Nt, b: $t, a: Ft, i: Dt, l: zt, q: qt, G: Gt, X: b4, N: (s, o) => (I4(T.subarray(s, s + o)), 0) }, l1 = function() {
      var s;
      function o(h) {
        var p;
        return l1 = h.exports, v = l1.ia, v1(), O1 = l1.na, j.unshift(l1.ja), Y--, (p = i.monitorRunDependencies) == null || p.call(i, Y), Y == 0 && F && (h = F, F = null, h()), l1;
      }
      Y++, (s = i.monitorRunDependencies) == null || s.call(i, Y);
      var l = { a: Tt };
      if (i.instantiateWasm) try {
        return i.instantiateWasm(l, o);
      } catch (h) {
        g(`Module.instantiateWasm callback failed with error: ${h}`), u(h);
      }
      return w1 != null || (w1 = a1("DotLottiePlayer.wasm") ? "DotLottiePlayer.wasm" : i.locateFile ? i.locateFile("DotLottiePlayer.wasm", b) : b + "DotLottiePlayer.wasm"), i1(l, function(h) {
        o(h.instance);
      }).catch(u), {};
    }(), S0 = (s) => (S0 = l1.ka)(s), S4 = (s) => (S4 = l1.la)(s), Z1 = (s) => (Z1 = l1.ma)(s), x4 = (s, o) => (x4 = l1.oa)(s, o), P1 = (s, o) => (P1 = l1.pa)(s, o), X2 = (s) => (X2 = l1.qa)(s), A1 = (s) => (A1 = l1.ra)(s), T1 = () => (T1 = l1.sa)(), L4 = (s, o, l) => (L4 = l1.ta)(s, o, l);
    i.dynCall_iijj = (s, o, l, h, p, w) => (i.dynCall_iijj = l1.ua)(s, o, l, h, p, w), i.dynCall_vijj = (s, o, l, h, p, w) => (i.dynCall_vijj = l1.va)(s, o, l, h, p, w), i.dynCall_jiii = (s, o, l, h) => (i.dynCall_jiii = l1.wa)(s, o, l, h);
    var M4 = i.dynCall_vijjjj = (s, o, l, h, p, w, k, x, $, R) => (M4 = i.dynCall_vijjjj = l1.xa)(s, o, l, h, p, w, k, x, $, R);
    i.dynCall_jii = (s, o, l) => (i.dynCall_jii = l1.ya)(s, o, l), i.dynCall_viijii = (s, o, l, h, p, w, k) => (i.dynCall_viijii = l1.za)(s, o, l, h, p, w, k), i.dynCall_iiiiij = (s, o, l, h, p, w, k) => (i.dynCall_iiiiij = l1.Aa)(s, o, l, h, p, w, k), i.dynCall_iiiiijj = (s, o, l, h, p, w, k, x, $) => (i.dynCall_iiiiijj = l1.Ba)(s, o, l, h, p, w, k, x, $), i.dynCall_iiiiiijj = (s, o, l, h, p, w, k, x, $, R) => (i.dynCall_iiiiiijj = l1.Ca)(s, o, l, h, p, w, k, x, $, R);
    function $t(s, o) {
      var l = T1();
      try {
        O1.get(s)(o);
      } catch (h) {
        if (A1(l), h !== h + 0) throw h;
        P1(1, 0);
      }
    }
    function Rt(s, o, l, h, p) {
      var w = T1();
      try {
        return O1.get(s)(o, l, h, p);
      } catch (k) {
        if (A1(w), k !== k + 0) throw k;
        P1(1, 0);
      }
    }
    function Ft(s, o, l) {
      var h = T1();
      try {
        O1.get(s)(o, l);
      } catch (p) {
        if (A1(h), p !== p + 0) throw p;
        P1(1, 0);
      }
    }
    function Dt(s, o, l, h) {
      var p = T1();
      try {
        O1.get(s)(o, l, h);
      } catch (w) {
        if (A1(p), w !== w + 0) throw w;
        P1(1, 0);
      }
    }
    function Nt(s) {
      var o = T1();
      try {
        O1.get(s)();
      } catch (l) {
        if (A1(o), l !== l + 0) throw l;
        P1(1, 0);
      }
    }
    function Ut(s, o) {
      var l = T1();
      try {
        return O1.get(s)(o);
      } catch (h) {
        if (A1(l), h !== h + 0) throw h;
        P1(1, 0);
      }
    }
    function qt(s, o, l, h, p, w) {
      var k = T1();
      try {
        O1.get(s)(o, l, h, p, w);
      } catch (x) {
        if (A1(k), x !== x + 0) throw x;
        P1(1, 0);
      }
    }
    function zt(s, o, l, h, p) {
      var w = T1();
      try {
        O1.get(s)(o, l, h, p);
      } catch (k) {
        if (A1(w), k !== k + 0) throw k;
        P1(1, 0);
      }
    }
    function Wt(s, o, l, h, p, w, k, x) {
      var $ = T1();
      try {
        return O1.get(s)(o, l, h, p, w, k, x);
      } catch (R) {
        if (A1($), R !== R + 0) throw R;
        P1(1, 0);
      }
    }
    function Bt(s, o, l, h) {
      var p = T1();
      try {
        return O1.get(s)(o, l, h);
      } catch (w) {
        if (A1(p), w !== w + 0) throw w;
        P1(1, 0);
      }
    }
    function Ht(s, o, l) {
      var h = T1();
      try {
        return O1.get(s)(o, l);
      } catch (p) {
        if (A1(h), p !== p + 0) throw p;
        P1(1, 0);
      }
    }
    function Vt(s, o, l, h, p, w) {
      var k = T1();
      try {
        return O1.get(s)(o, l, h, p, w);
      } catch (x) {
        if (A1(k), x !== x + 0) throw x;
        P1(1, 0);
      }
    }
    function Gt(s, o, l, h, p, w, k, x, $, R) {
      var D = T1();
      try {
        M4(s, o, l, h, p, w, k, x, $, R);
      } catch (Q) {
        if (A1(D), Q !== Q + 0) throw Q;
        P1(1, 0);
      }
    }
    var A3;
    F = function s() {
      A3 || j4(), A3 || (F = s);
    };
    function j4() {
      function s() {
        var o;
        if (!A3 && (A3 = !0, i.calledRun = !0, !P)) {
          if (g1(j), a(i), (o = i.onRuntimeInitialized) == null || o.call(i), i.postRun) for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; ) {
            var l = i.postRun.shift();
            _.unshift(l);
          }
          g1(_);
        }
      }
      if (!(0 < Y)) {
        if (i.preRun) for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; ) M();
        g1(E), 0 < Y || (i.setStatus ? (i.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => i.setStatus(""), 1), s();
        }, 1)) : s());
      }
    }
    if (i.preInit) for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); 0 < i.preInit.length; ) i.preInit.pop()();
    return j4(), n = c, n;
  };
})(), Z6 = X6, B3 = class {
  constructor() {
    throw new Error("RendererLoader is a static class and cannot be instantiated.");
  }
  static _tryLoad(r) {
    return K(this, null, function* () {
      return yield Z6({ locateFile: () => r });
    });
  }
  static _loadWithBackup() {
    return K(this, null, function* () {
      return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch((r) => K(this, null, function* () {
        let e = `https://unpkg.com/${j9}@${M9}/dist/dotlottie-player.wasm`;
        console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${r.message}`), console.warn(`Attempting to load WASM from backup URL: ${e}`);
        try {
          return yield this._tryLoad(e);
        } catch (t) {
          throw console.error(`Primary WASM URL failed: ${r.message}`), console.error(`Backup WASM URL failed: ${t.message}`), new Error("WASM loading failed from all sources.");
        }
      }))), this._ModulePromise;
    });
  }
  static load() {
    return K(this, null, function* () {
      return this._loadWithBackup();
    });
  }
  static setWasmUrl(r) {
    r !== this._wasmURL && (this._wasmURL = r, this._ModulePromise = null);
  }
};
G(B3, "_ModulePromise", null), G(B3, "_wasmURL", `https://cdn.jsdelivr.net/npm/${j9}@${M9}/dist/dotlottie-player.wasm`);
var O9 = class {
  constructor() {
    G(this, "_eventListeners", /* @__PURE__ */ new Map());
  }
  addEventListener(r, e) {
    let t = this._eventListeners.get(r);
    t || (t = /* @__PURE__ */ new Set(), this._eventListeners.set(r, t)), t.add(e);
  }
  removeEventListener(r, e) {
    let t = this._eventListeners.get(r);
    t && (e ? (t.delete(e), t.size === 0 && this._eventListeners.delete(r)) : this._eventListeners.delete(r));
  }
  dispatch(r) {
    let e = this._eventListeners.get(r.type);
    e == null || e.forEach((t) => t(r));
  }
  removeAllEventListeners() {
    this._eventListeners.clear();
  }
}, G1 = class {
  static _initializeObserver() {
    if (this._observer) return;
    let r = (e) => {
      e.forEach((t) => {
        let n = this._observedCanvases.get(t.target);
        n && (t.isIntersecting ? n.unfreeze() : n.freeze());
      });
    };
    this._observer = new IntersectionObserver(r, { threshold: 0 });
  }
  static observe(r, e) {
    var t;
    this._initializeObserver(), !this._observedCanvases.has(r) && (this._observedCanvases.set(r, e), (t = this._observer) == null || t.observe(r));
  }
  static unobserve(r) {
    var e, t;
    (e = this._observer) == null || e.unobserve(r), this._observedCanvases.delete(r), this._observedCanvases.size === 0 && ((t = this._observer) == null || t.disconnect(), this._observer = null);
  }
};
G(G1, "_observer", null), G(G1, "_observedCanvases", /* @__PURE__ */ new Map());
var J1 = class {
  static _initializeObserver() {
    if (this._observer) return;
    let r = (e) => {
      e.forEach((t) => {
        let n = this._observedCanvases.get(t.target);
        if (!n) return;
        let [i, a] = n;
        clearTimeout(a);
        let u = setTimeout(() => {
          i.resize();
        }, 100);
        this._observedCanvases.set(t.target, [i, u]);
      });
    };
    this._observer = new ResizeObserver(r);
  }
  static observe(r, e) {
    var t;
    this._initializeObserver(), !this._observedCanvases.has(r) && (this._observedCanvases.set(r, [e, 0]), (t = this._observer) == null || t.observe(r));
  }
  static unobserve(r) {
    var e, t;
    (e = this._observer) == null || e.unobserve(r), this._observedCanvases.delete(r), this._observedCanvases.size === 0 && ((t = this._observer) == null || t.disconnect(), this._observer = null);
  }
};
G(J1, "_observer", null), G(J1, "_observedCanvases", /* @__PURE__ */ new Map());
function e5(r) {
  return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(r);
}
function t5(r) {
  if (!e5(r)) return 0;
  let e = r.replace("#", "");
  return e = e.length === 6 ? `${e}ff` : e, parseInt(e, 16);
}
function R4(r) {
  if (r.byteLength < 4) return !1;
  let e = new Uint8Array(r.slice(0, L0.byteLength));
  for (let t = 0; t < L0.length; t += 1) if (L0[t] !== e[t]) return !1;
  return !0;
}
function F4(r) {
  return Q6.every((e) => Object.prototype.hasOwnProperty.call(r, e));
}
function D4(r) {
  if (typeof r == "string") try {
    return F4(JSON.parse(r));
  } catch {
    return !1;
  }
  else return F4(r);
}
function I2() {
  return 1 + ((L1 ? window.devicePixelRatio : 1) - 1) * K6;
}
function k9(r) {
  let e = r.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
var M0 = (r, e) => r === "reverse" ? e.Mode.Reverse : r === "bounce" ? e.Mode.Bounce : r === "reverse-bounce" ? e.Mode.ReverseBounce : e.Mode.Forward, r5 = (r, e) => r === "contain" ? e.Fit.Contain : r === "cover" ? e.Fit.Cover : r === "fill" ? e.Fit.Fill : r === "fit-height" ? e.Fit.FitHeight : r === "fit-width" ? e.Fit.FitWidth : e.Fit.None, n5 = (r, e) => {
  let t = new e.VectorFloat();
  return t.push_back(r[0]), t.push_back(r[1]), t;
}, j0 = (r, e) => {
  let t = new e.VectorFloat();
  return r.length !== 2 || (t.push_back(r[0]), t.push_back(r[1])), t;
}, O0 = (r, e) => {
  var t, n;
  return r ? { align: n5((t = r.align) != null ? t : [0.5, 0.5], e), fit: r5((n = r.fit) != null ? n : "contain", e) } : e.createDefaultLayout();
}, P9 = class d1 {
  constructor(e) {
    G(this, "_canvas"), G(this, "_context", null), G(this, "_eventManager"), G(this, "_animationFrameId", null), G(this, "_frameManager"), G(this, "_dotLottieCore", null), G(this, "_renderConfig", {}), G(this, "_isFrozen", !1), G(this, "_backgroundColor", null), G(this, "_pointerUpMethod"), G(this, "_pointerDownMethod"), G(this, "_pointerMoveMethod"), G(this, "_pointerEnterMethod"), G(this, "_pointerExitMethod");
    var t, n, i;
    this._canvas = e.canvas, this._context = this._canvas.getContext("2d"), this._eventManager = new O9(), this._frameManager = new Y6(), this._renderConfig = N1(x1({}, e.renderConfig), { devicePixelRatio: ((t = e.renderConfig) == null ? void 0 : t.devicePixelRatio) || I2(), freezeOnOffscreen: (i = (n = e.renderConfig) == null ? void 0 : n.freezeOnOffscreen) != null ? i : !0 }), B3.load().then((a) => {
      var u, c, d, f, b, y, C, g;
      d1._wasmModule = a, this._dotLottieCore = new a.DotLottiePlayer({ themeId: (u = e.themeId) != null ? u : "", autoplay: (c = e.autoplay) != null ? c : !1, backgroundColor: 0, loopAnimation: (d = e.loop) != null ? d : !1, mode: M0((f = e.mode) != null ? f : "forward", a), segment: j0((b = e.segment) != null ? b : [], a), speed: (y = e.speed) != null ? y : 1, useFrameInterpolation: (C = e.useFrameInterpolation) != null ? C : !0, marker: (g = e.marker) != null ? g : "", layout: O0(e.layout, a) }), this._eventManager.dispatch({ type: "ready" }), e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src), e.backgroundColor && this.setBackgroundColor(e.backgroundColor);
    }).catch((a) => {
      this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to load wasm module: ${a}`) });
    }), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this);
  }
  _dispatchError(e) {
    console.error(e), this._eventManager.dispatch({ type: "loadError", error: new Error(e) });
  }
  _fetchData(e) {
    return K(this, null, function* () {
      let t = yield fetch(e);
      if (!t.ok) throw new Error(`Failed to fetch animation data from URL: ${e}. ${t.status}: ${t.statusText}`);
      let n = yield t.arrayBuffer();
      return R4(n) ? n : new TextDecoder().decode(n);
    });
  }
  _loadFromData(e) {
    if (this._dotLottieCore === null) return;
    let t = this._canvas.width, n = this._canvas.height, i = !1;
    if (typeof e == "string") {
      if (!D4(e)) {
        this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");
        return;
      }
      i = this._dotLottieCore.loadAnimationData(e, t, n);
    } else if (e instanceof ArrayBuffer) {
      if (!R4(e)) {
        this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");
        return;
      }
      i = this._dotLottieCore.loadDotLottieData(e, t, n);
    } else if (typeof e == "object") {
      if (!D4(e)) {
        this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");
        return;
      }
      i = this._dotLottieCore.loadAnimationData(JSON.stringify(e), t, n);
    } else {
      this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof e}`);
      return;
    }
    i ? (this._eventManager.dispatch({ type: "load" }), L1 && this.resize(), this._eventManager.dispatch({ type: "frame", currentFrame: this.currentFrame }), this._render(), this._dotLottieCore.config().autoplay && (this._dotLottieCore.play(), this._dotLottieCore.isPlaying() ? (this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))) : console.error("something went wrong, the animation was suppose to autoplay")), L1 && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.freezeOnOffscreen && G1.observe(this._canvas, this), this._renderConfig.autoResize && J1.observe(this._canvas, this))) : this._dispatchError("Failed to load animation data");
  }
  _loadFromSrc(e) {
    this._fetchData(e).then((t) => this._loadFromData(t)).catch((t) => this._dispatchError(`Failed to load animation data from URL: ${e}. ${t}`));
  }
  get activeAnimationId() {
    var e;
    return (e = this._dotLottieCore) == null ? void 0 : e.activeAnimationId();
  }
  get activeThemeId() {
    var e;
    return (e = this._dotLottieCore) == null ? void 0 : e.activeThemeId();
  }
  get layout() {
    var e;
    let t = (e = this._dotLottieCore) == null ? void 0 : e.config().layout;
    if (t) return { align: [t.align.get(0), t.align.get(1)], fit: (() => {
      var n, i, a, u, c, d;
      switch (t.fit) {
        case ((n = d1._wasmModule) == null ? void 0 : n.Fit.Contain):
          return "contain";
        case ((i = d1._wasmModule) == null ? void 0 : i.Fit.Cover):
          return "cover";
        case ((a = d1._wasmModule) == null ? void 0 : a.Fit.Fill):
          return "fill";
        case ((u = d1._wasmModule) == null ? void 0 : u.Fit.FitHeight):
          return "fit-height";
        case ((c = d1._wasmModule) == null ? void 0 : c.Fit.FitWidth):
          return "fit-width";
        case ((d = d1._wasmModule) == null ? void 0 : d.Fit.None):
          return "none";
        default:
          return "contain";
      }
    })() };
  }
  get marker() {
    var e;
    return (e = this._dotLottieCore) == null ? void 0 : e.config().marker;
  }
  get manifest() {
    var e;
    try {
      let t = (e = this._dotLottieCore) == null ? void 0 : e.manifestString();
      if (this._dotLottieCore === null || !t) return null;
      let n = JSON.parse(t);
      return Object.keys(n).length === 0 ? null : n;
    } catch {
      return null;
    }
  }
  get renderConfig() {
    return this._renderConfig;
  }
  get segment() {
    var e;
    let t = (e = this._dotLottieCore) == null ? void 0 : e.config().segment;
    if (t && t.size() === 2) return [t.get(0), t.get(1)];
  }
  get loop() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.config().loopAnimation) != null ? t : !1;
  }
  get mode() {
    var e, t, n, i;
    let a = (e = this._dotLottieCore) == null ? void 0 : e.config().mode;
    return a === ((t = d1._wasmModule) == null ? void 0 : t.Mode.Reverse) ? "reverse" : a === ((n = d1._wasmModule) == null ? void 0 : n.Mode.Bounce) ? "bounce" : a === ((i = d1._wasmModule) == null ? void 0 : i.Mode.ReverseBounce) ? "reverse-bounce" : "forward";
  }
  get isFrozen() {
    return this._isFrozen;
  }
  get backgroundColor() {
    var e;
    return (e = this._backgroundColor) != null ? e : "";
  }
  get autoplay() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.config().autoplay) != null ? t : !1;
  }
  get useFrameInterpolation() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.config().useFrameInterpolation) != null ? t : !1;
  }
  get speed() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.config().speed) != null ? t : 0;
  }
  get isReady() {
    return this._dotLottieCore !== null;
  }
  get isLoaded() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.isLoaded()) != null ? t : !1;
  }
  get isPlaying() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.isPlaying()) != null ? t : !1;
  }
  get isPaused() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.isPaused()) != null ? t : !1;
  }
  get isStopped() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.isStopped()) != null ? t : !1;
  }
  get currentFrame() {
    return this._dotLottieCore ? Math.round(this._dotLottieCore.currentFrame() * 100) / 100 : 0;
  }
  get loopCount() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.loopCount()) != null ? t : 0;
  }
  get totalFrames() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.totalFrames()) != null ? t : 0;
  }
  get duration() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.duration()) != null ? t : 0;
  }
  get segmentDuration() {
    var e, t;
    return (t = (e = this._dotLottieCore) == null ? void 0 : e.segmentDuration()) != null ? t : 0;
  }
  get canvas() {
    return this._canvas;
  }
  load(e) {
    var t, n, i, a, u, c, d, f, b;
    this._dotLottieCore === null || d1._wasmModule === null || (this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), this._isFrozen = !1, this._dotLottieCore.setConfig({ themeId: (t = e.themeId) != null ? t : "", autoplay: (n = e.autoplay) != null ? n : !1, backgroundColor: 0, loopAnimation: (i = e.loop) != null ? i : !1, mode: M0((a = e.mode) != null ? a : "forward", d1._wasmModule), segment: j0((u = e.segment) != null ? u : [], d1._wasmModule), speed: (c = e.speed) != null ? c : 1, useFrameInterpolation: (d = e.useFrameInterpolation) != null ? d : !0, marker: (f = e.marker) != null ? f : "", layout: O0(e.layout, d1._wasmModule) }), e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src), this.setBackgroundColor((b = e.backgroundColor) != null ? b : ""));
  }
  _render() {
    if (this._dotLottieCore === null || this._context === null) return !1;
    if (this._dotLottieCore.render()) {
      let e = this._dotLottieCore.buffer(), t = new Uint8ClampedArray(e, 0, this._canvas.width * this._canvas.height * 4), n = null;
      return typeof ImageData > "u" ? (n = this._context.createImageData(this._canvas.width, this._canvas.height), n.data.set(t)) : n = new ImageData(t, this._canvas.width, this._canvas.height), this._context.putImageData(n, 0, 0), this._eventManager.dispatch({ type: "render", currentFrame: this.currentFrame }), !0;
    }
    return !1;
  }
  _draw() {
    if (!(this._dotLottieCore === null || this._context === null || !this._dotLottieCore.isPlaying())) try {
      let e = Math.round(this._dotLottieCore.requestFrame() * 1e3) / 1e3;
      if (this._dotLottieCore.setFrame(e) && (this._eventManager.dispatch({ type: "frame", currentFrame: this.currentFrame }), this._render() && this._dotLottieCore.isComplete())) if (this._dotLottieCore.config().loopAnimation) this._eventManager.dispatch({ type: "loop", loopCount: this._dotLottieCore.loopCount() });
      else {
        this._eventManager.dispatch({ type: "complete" });
        return;
      }
      this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this));
    } catch (e) {
      console.error("Error in animation frame:", e), this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null);
    }
  }
  play() {
    this._dotLottieCore !== null && (this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), (this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) && (this._isFrozen = !1, this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))), L1 && this._canvas instanceof HTMLCanvasElement && this._renderConfig.freezeOnOffscreen && !k9(this._canvas) && this.freeze());
  }
  pause() {
    this._dotLottieCore !== null && (this._dotLottieCore.pause() || this._dotLottieCore.isPaused()) && this._eventManager.dispatch({ type: "pause" });
  }
  stop() {
    this._dotLottieCore !== null && this._dotLottieCore.stop() && (this._eventManager.dispatch({ type: "frame", currentFrame: this.currentFrame }), this._render(), this._eventManager.dispatch({ type: "stop" }));
  }
  setFrame(e) {
    this._dotLottieCore === null || e < 0 || e > this._dotLottieCore.totalFrames() || this._dotLottieCore.seek(e) && (this._eventManager.dispatch({ type: "frame", currentFrame: this.currentFrame }), this._render());
  }
  setSpeed(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { speed: e }));
  }
  setBackgroundColor(e) {
    this._dotLottieCore !== null && (L1 && this._canvas instanceof HTMLCanvasElement ? this._canvas.style.backgroundColor = e : this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { backgroundColor: t5(e) })), this._backgroundColor = e);
  }
  setLoop(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { loopAnimation: e }));
  }
  setUseFrameInterpolation(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { useFrameInterpolation: e }));
  }
  addEventListener(e, t) {
    this._eventManager.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this._eventManager.removeEventListener(e, t);
  }
  destroy() {
    var e;
    this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), L1 && this._canvas instanceof HTMLCanvasElement && (G1.unobserve(this._canvas), J1.unobserve(this._canvas)), (e = this._dotLottieCore) == null || e.delete(), this._dotLottieCore = null, this._context = null, this._eventManager.dispatch({ type: "destroy" }), this._eventManager.removeAllEventListeners(), this._cleanupStateMachineListeners();
  }
  freeze() {
    this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null, this._isFrozen = !0, this._eventManager.dispatch({ type: "freeze" }));
  }
  unfreeze() {
    this._animationFrameId === null && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)), this._isFrozen = !1, this._eventManager.dispatch({ type: "unfreeze" }));
  }
  resize() {
    if (!(!this._dotLottieCore || !this.isLoaded)) {
      if (L1 && this._canvas instanceof HTMLCanvasElement) {
        let e = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, { height: t, width: n } = this._canvas.getBoundingClientRect();
        t !== 0 && n !== 0 && (this._canvas.width = n * e, this._canvas.height = t * e);
      }
      this._dotLottieCore.resize(this._canvas.width, this._canvas.height) && this._render();
    }
  }
  setSegment(e, t) {
    this._dotLottieCore === null || d1._wasmModule === null || this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { segment: j0([e, t], d1._wasmModule) }));
  }
  setMode(e) {
    this._dotLottieCore === null || d1._wasmModule === null || this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { mode: M0(e, d1._wasmModule) }));
  }
  setRenderConfig(e) {
    let t = e, { devicePixelRatio: n, freezeOnOffscreen: i } = t, a = L9(t, ["devicePixelRatio", "freezeOnOffscreen"]);
    this._renderConfig = N1(x1(x1({}, this._renderConfig), a), { devicePixelRatio: n || I2(), freezeOnOffscreen: i ?? !0 }), L1 && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.autoResize ? J1.observe(this._canvas, this) : J1.unobserve(this._canvas), this._renderConfig.freezeOnOffscreen ? G1.observe(this._canvas, this) : (G1.unobserve(this._canvas), this._isFrozen && this.unfreeze()));
  }
  loadAnimation(e) {
    this._dotLottieCore === null || this._dotLottieCore.activeAnimationId() === e || (this._dotLottieCore.loadAnimation(e, this._canvas.width, this._canvas.height) ? (this._eventManager.dispatch({ type: "load" }), this.resize()) : this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to animation :${e}`) }));
  }
  setMarker(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { marker: e }));
  }
  markers() {
    var e;
    let t = (e = this._dotLottieCore) == null ? void 0 : e.markers();
    if (t) {
      let n = [];
      for (let i = 0; i < t.size(); i += 1) {
        let a = t.get(i);
        n.push({ name: a.name, time: a.time, duration: a.duration });
      }
      return n;
    }
    return [];
  }
  setTheme(e) {
    if (this._dotLottieCore === null) return !1;
    let t = this._dotLottieCore.setTheme(e);
    return this._render(), t;
  }
  resetTheme() {
    return this._dotLottieCore === null ? !1 : this._dotLottieCore.resetTheme();
  }
  setThemeData(e) {
    if (this._dotLottieCore === null) return !1;
    let t = this._dotLottieCore.setThemeData(e);
    return this._render(), t;
  }
  setSlots(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setSlots(e);
  }
  setLayout(e) {
    this._dotLottieCore === null || d1._wasmModule === null || this._dotLottieCore.setConfig(N1(x1({}, this._dotLottieCore.config()), { layout: O0(e, d1._wasmModule) }));
  }
  setViewport(e, t, n, i) {
    return this._dotLottieCore === null ? !1 : this._dotLottieCore.setViewport(e, t, n, i);
  }
  static setWasmUrl(e) {
    B3.setWasmUrl(e);
  }
  loadStateMachine(e) {
    var t, n;
    return (n = (t = this._dotLottieCore) == null ? void 0 : t.loadStateMachine(e)) != null ? n : !1;
  }
  startStateMachine() {
    var e, t;
    let n = (t = (e = this._dotLottieCore) == null ? void 0 : e.startStateMachine()) != null ? t : !1;
    return n && this._setupStateMachineListeners(), n;
  }
  stopStateMachine() {
    var e, t;
    let n = (t = (e = this._dotLottieCore) == null ? void 0 : e.stopStateMachine()) != null ? t : !1;
    return n && this._cleanupStateMachineListeners(), n;
  }
  _getPointerPosition(e) {
    let t = this._canvas.getBoundingClientRect(), n = this._canvas.width / t.width, i = this._canvas.height / t.height, a = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, u = (e.clientX - t.left) * n / a, c = (e.clientY - t.top) * i / a;
    return { x: u, y: c };
  }
  _onPointerUp(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this.postPointerUpEvent(t, n);
  }
  _onPointerDown(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this.postPointerDownEvent(t, n);
  }
  _onPointerMove(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this.postPointerMoveEvent(t, n);
  }
  _onPointerEnter(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this.postPointerEnterEvent(t, n);
  }
  _onPointerLeave(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this.postPointerExitEvent(t, n);
  }
  postPointerUpEvent(e, t) {
    var n;
    return (n = this._dotLottieCore) == null ? void 0 : n.postPointerUpEvent(e, t);
  }
  postPointerDownEvent(e, t) {
    var n;
    return (n = this._dotLottieCore) == null ? void 0 : n.postPointerDownEvent(e, t);
  }
  postPointerMoveEvent(e, t) {
    var n;
    return (n = this._dotLottieCore) == null ? void 0 : n.postPointerMoveEvent(e, t);
  }
  postPointerEnterEvent(e, t) {
    var n;
    return (n = this._dotLottieCore) == null ? void 0 : n.postPointerEnterEvent(e, t);
  }
  postPointerExitEvent(e, t) {
    var n;
    return (n = this._dotLottieCore) == null ? void 0 : n.postPointerExitEvent(e, t);
  }
  getStateMachineListeners() {
    if (!this._dotLottieCore) return [];
    let e = this._dotLottieCore.stateMachineFrameworkSetup(), t = [];
    for (let n = 0; n < e.size(); n += 1) t.push(e.get(n));
    return t;
  }
  _setupStateMachineListeners() {
    if (L1 && this._canvas instanceof HTMLCanvasElement && this._dotLottieCore !== null && this.isLoaded) {
      let e = this.getStateMachineListeners();
      e.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), e.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), e.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), e.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), e.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod);
    }
  }
  _cleanupStateMachineListeners() {
    L1 && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod));
  }
  loadStateMachineData(e) {
    var t, n;
    return (n = (t = this._dotLottieCore) == null ? void 0 : t.loadStateMachineData(e)) != null ? n : !1;
  }
  animationSize() {
    var e, t, n, i;
    let a = (t = (e = this._dotLottieCore) == null ? void 0 : e.animationSize().get(0)) != null ? t : 0, u = (i = (n = this._dotLottieCore) == null ? void 0 : n.animationSize().get(1)) != null ? i : 0;
    return { width: a, height: u };
  }
  setStateMachineBooleanContext(e, t) {
    var n, i;
    return (i = (n = this._dotLottieCore) == null ? void 0 : n.setStateMachineBooleanContext(e, t)) != null ? i : !1;
  }
  setStateMachineNumericContext(e, t) {
    var n, i;
    return (i = (n = this._dotLottieCore) == null ? void 0 : n.setStateMachineNumericContext(e, t)) != null ? i : !1;
  }
  setStateMachineStringContext(e, t) {
    var n, i;
    return (i = (n = this._dotLottieCore) == null ? void 0 : n.setStateMachineStringContext(e, t)) != null ? i : !1;
  }
  getLayerBoundingBox(e) {
    var t;
    let n = (t = this._dotLottieCore) == null ? void 0 : t.getLayerBounds(e);
    if (!n || n.size() !== 8) return;
    let i = [];
    for (let a = 0; a < 8; a += 1) i.push(n.get(a));
    return i;
  }
  static transformThemeToLottieSlots(e, t) {
    var n, i;
    return (i = (n = d1._wasmModule) == null ? void 0 : n.transformThemeToLottieSlots(e, t)) != null ? i : "";
  }
};
G(P9, "_wasmModule", null);
var i5 = P9, s5 = class {
  constructor() {
    if (typeof Worker > "u") throw new Error("Worker is not supported in this environment.");
    let r = new Blob([new Uint8Array([34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115, 99, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 83, 121, 109, 98, 111, 108, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 112, 114, 111, 112, 101, 114, 116, 121, 73, 115, 69, 110, 117, 109, 101, 114, 97, 98, 108, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101, 32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 105, 110, 32, 98, 32, 124, 124, 32, 40, 98, 32, 61, 32, 123, 125, 41, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 40, 98, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 40, 97, 44, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115, 99, 115, 40, 98, 41, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 111, 98, 106, 82, 101, 115, 116, 32, 61, 32, 40, 115, 111, 117, 114, 99, 101, 44, 32, 101, 120, 99, 108, 117, 100, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 105, 110, 32, 115, 111, 117, 114, 99, 101, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 32, 38, 38, 32, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 111, 117, 114, 99, 101, 32, 33, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 40, 115, 111, 117, 114, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 32, 38, 38, 32, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101, 111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121, 109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32, 34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 97, 115, 121, 110, 99, 32, 61, 32, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 44, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 114, 101, 115, 111, 108, 118, 101, 44, 32, 114, 101, 106, 101, 99, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 117, 108, 102, 105, 108, 108, 101, 100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 120, 116, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 101, 106, 101, 99, 116, 101, 100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 116, 104, 114, 111, 119, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 115, 116, 101, 112, 32, 61, 32, 40, 120, 41, 32, 61, 62, 32, 120, 46, 100, 111, 110, 101, 32, 63, 32, 114, 101, 115, 111, 108, 118, 101, 40, 120, 46, 118, 97, 108, 117, 101, 41, 32, 58, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 120, 46, 118, 97, 108, 117, 101, 41, 46, 116, 104, 101, 110, 40, 102, 117, 108, 102, 105, 108, 108, 101, 100, 44, 32, 114, 101, 106, 101, 99, 116, 101, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 61, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 97, 112, 112, 108, 121, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41, 41, 46, 110, 101, 120, 116, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109, 98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78, 84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40, 68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101, 119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116, 115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32, 32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44, 32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91, 34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34, 44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102, 114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 52, 50, 46, 48, 34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116, 105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118, 97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 63, 32, 40, 95, 97, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101, 65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32, 97, 97, 44, 32, 98, 97, 44, 32, 99, 97, 32, 61, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 44, 32, 100, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 107, 41, 44, 32, 101, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 44, 32, 113, 32, 61, 32, 34, 34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 32, 38, 38, 32, 40, 113, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 38, 38, 32, 40, 113, 32, 61, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 113, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98, 108, 111, 98, 58, 34, 41, 32, 63, 32, 113, 32, 61, 32, 34, 34, 32, 58, 32, 113, 32, 61, 32, 113, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 113, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108, 97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34, 41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 102, 101, 116, 99, 104, 40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 98, 46, 111, 107, 32, 63, 32, 98, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 32, 58, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 106, 101, 99, 116, 40, 69, 114, 114, 111, 114, 40, 98, 46, 115, 116, 97, 116, 117, 115, 32, 43, 32, 34, 32, 58, 32, 34, 32, 43, 32, 98, 46, 117, 114, 108, 41, 41, 10, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 97, 32, 61, 32, 107, 46, 112, 114, 105, 110, 116, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 44, 32, 116, 32, 61, 32, 107, 46, 112, 114, 105, 110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 107, 44, 32, 100, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 100, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 32, 38, 38, 32, 40, 101, 97, 32, 61, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 97, 32, 61, 32, 107, 46, 119, 97, 115, 109, 66, 105, 110, 97, 114, 121, 44, 32, 108, 97, 44, 32, 109, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 110, 97, 44, 32, 117, 44, 32, 120, 44, 32, 121, 44, 32, 122, 44, 32, 65, 44, 32, 66, 44, 32, 111, 97, 44, 32, 112, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 113, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 108, 97, 46, 98, 117, 102, 102, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 56, 32, 61, 32, 117, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 49, 54, 32, 61, 32, 121, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 56, 32, 61, 32, 120, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 49, 54, 32, 61, 32, 122, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 51, 50, 32, 61, 32, 65, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 51, 50, 32, 61, 32, 66, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 51, 50, 32, 61, 32, 111, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 54, 52, 32, 61, 32, 112, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32, 115, 97, 32, 61, 32, 91, 93, 44, 32, 116, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 107, 46, 112, 114, 101, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 67, 32, 61, 32, 48, 44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108, 44, 32, 68, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 65, 98, 111, 114, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 34, 65, 98, 111, 114, 116, 101, 100, 40, 34, 32, 43, 32, 97, 32, 43, 32, 34, 41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 101, 119, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 40, 97, 32, 43, 32, 34, 46, 32, 66, 117, 105, 108, 100, 32, 119, 105, 116, 104, 32, 45, 115, 65, 83, 83, 69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 120, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 100, 97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114, 101, 97, 109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 121, 97, 32, 38, 38, 32, 107, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 107, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97, 115, 121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32, 102, 101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 65, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 97, 32, 63, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 41, 46, 116, 104, 101, 110, 40, 40, 41, 32, 61, 62, 32, 122, 97, 40, 97, 41, 41, 32, 58, 32, 105, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 41, 32, 61, 62, 32, 122, 97, 40, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 66, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 65, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 40, 100, 44, 32, 98, 41, 41, 46, 116, 104, 101, 110, 40, 99, 44, 32, 40, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 108, 121, 32, 112, 114, 101, 112, 97, 114, 101, 32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 67, 97, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 97, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 32, 124, 124, 32, 120, 97, 40, 99, 41, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 102, 101, 116, 99, 104, 32, 63, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 32, 58, 32, 102, 101, 116, 99, 104, 40, 99, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 100, 44, 32, 97, 41, 46, 116, 104, 101, 110, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 119, 97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 34, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 68, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69, 120, 105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103, 114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36, 123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 97, 32, 61, 32, 107, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116, 105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 71, 97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 71, 32, 61, 32, 40, 97, 44, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 78, 97, 78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 32, 61, 32, 98, 59, 32, 97, 91, 99, 93, 32, 38, 38, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 54, 32, 60, 32, 99, 32, 45, 32, 98, 32, 38, 38, 32, 97, 46, 98, 117, 102, 102, 101, 114, 32, 38, 38, 32, 71, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 71, 97, 46, 100, 101, 99, 111, 100, 101, 40, 97, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 98, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32, 98, 32, 60, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 97, 91, 98, 43, 43, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 50, 52, 41, 41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 40, 101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32, 54, 32, 124, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 50, 50, 52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 52, 48, 41, 32, 63, 32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60, 60, 32, 49, 50, 32, 124, 32, 102, 32, 60, 60, 32, 54, 32, 124, 32, 104, 32, 58, 32, 40, 101, 32, 38, 32, 55, 41, 32, 60, 60, 32, 49, 56, 32, 124, 32, 102, 32, 60, 60, 32, 49, 50, 32, 124, 32, 104, 32, 60, 60, 32, 54, 32, 124, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 62, 32, 101, 32, 63, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 32, 58, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 72, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 69, 97, 32, 61, 32, 97, 32, 45, 32, 50, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 74, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 91, 93, 44, 32, 98, 32, 61, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 48, 41, 44, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 110, 101, 119, 32, 72, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 99, 46, 69, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 66, 91, 99, 46, 69, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 48, 41, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 111, 102, 32, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 101, 32, 124, 124, 32, 101, 32, 61, 61, 61, 32, 100, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 97, 40, 101, 44, 32, 100, 44, 32, 99, 46, 69, 97, 32, 43, 32, 49, 54, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 101, 41, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 75, 97, 32, 61, 32, 48, 44, 32, 75, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 120, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 60, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 32, 43, 32, 99, 32, 45, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 50, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 48, 52, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 49, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 57, 50, 32, 124, 32, 102, 32, 62, 62, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 54, 53, 53, 51, 53, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 50, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 50, 52, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 51, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 52, 48, 32, 124, 32, 102, 32, 62, 62, 32, 49, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 54, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 97, 32, 61, 32, 123, 125, 44, 32, 77, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 112, 111, 112, 40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 76, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 91, 97, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 77, 32, 61, 32, 123, 125, 44, 32, 78, 32, 61, 32, 123, 125, 44, 32, 78, 97, 32, 61, 32, 123, 125, 44, 32, 79, 97, 44, 32, 80, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 99, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 97, 46, 108, 101, 110, 103, 116, 104, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 77, 105, 115, 109, 97, 116, 99, 104, 101, 100, 32, 116, 121, 112, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 114, 32, 99, 111, 117, 110, 116, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 108, 41, 32, 79, 40, 97, 91, 108, 93, 44, 32, 103, 91, 108, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 41, 32, 61, 62, 32, 78, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 114, 114, 97, 121, 40, 98, 46, 108, 101, 110, 103, 116, 104, 41, 44, 32, 102, 32, 61, 32, 91, 93, 44, 32, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 78, 91, 103, 93, 32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40, 103, 41, 44, 32, 77, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40, 77, 91, 103, 93, 32, 61, 32, 91, 93, 41, 44, 32, 77, 91, 103, 93, 46, 112, 117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108, 93, 32, 61, 32, 78, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 97, 44, 32, 81, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 34, 34, 59, 32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61, 32, 80, 97, 91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 116, 121, 112, 101, 32, 34, 36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 105, 100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 78, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 46, 107, 98, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 116, 121, 112, 101, 32, 39, 36, 123, 100, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 91, 97, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 78, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 77, 91, 97, 93, 44, 32, 100, 101, 108, 101, 116, 101, 32, 77, 91, 97, 93, 44, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 101, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 79, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 83, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 97, 46, 68, 97, 46, 71, 97, 46, 70, 97, 46, 110, 97, 109, 101, 32, 43, 32, 34, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 108, 114, 101, 97, 100, 121, 32, 100, 101, 108, 101, 116, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 85, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 61, 61, 61, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 46, 74, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 97, 40, 97, 44, 32, 98, 44, 32, 99, 46, 74, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 32, 63, 32, 110, 117, 108, 108, 32, 58, 32, 99, 46, 99, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 97, 32, 61, 32, 123, 125, 44, 32, 88, 97, 32, 61, 32, 123, 125, 44, 32, 89, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 112, 116, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 74, 97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46, 84, 97, 40, 98, 41, 44, 32, 97, 32, 61, 32, 97, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 88, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 71, 97, 32, 124, 124, 32, 33, 98, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 109, 97, 107, 101, 67, 108, 97, 115, 115, 72, 97, 110, 100, 108, 101, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 112, 116, 114, 32, 97, 110, 100, 32, 112, 116, 114, 84, 121, 112, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 33, 98, 46, 75, 97, 32, 33, 61, 61, 32, 33, 33, 98, 46, 73, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 66, 111, 116, 104, 32, 115, 109, 97, 114, 116, 80, 116, 114, 84, 121, 112, 101, 32, 97, 110, 100, 32, 115, 109, 97, 114, 116, 80, 116, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116, 32, 61, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 44, 32, 123, 32, 68, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 90, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 41, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 98, 44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 97, 32, 61, 32, 110, 101, 119, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 40, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 98, 46, 73, 97, 32, 63, 32, 98, 46, 75, 97, 46, 78, 97, 40, 98, 46, 73, 97, 41, 32, 58, 32, 98, 46, 71, 97, 46, 70, 97, 46, 78, 97, 40, 98, 46, 69, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 73, 97, 32, 38, 38, 32, 84, 97, 46, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 44, 32, 123, 32, 68, 97, 58, 32, 99, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 97, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 97, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 97, 32, 125, 41, 44, 32, 100, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 72, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91, 98, 93, 46, 72, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103, 116, 104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39, 36, 123, 99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40, 36, 123, 97, 91, 98, 93, 46, 72, 97, 125, 41, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 91, 98, 93, 46, 72, 97, 91, 101, 46, 108, 101, 110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 72, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 72, 97, 91, 100, 46, 81, 97, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 101, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117, 98, 108, 105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 98, 40, 107, 44, 32, 97, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 91, 97, 93, 46, 72, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114, 108, 111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32, 107, 91, 97, 93, 46, 81, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 102, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97, 45, 122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34, 36, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32, 98, 32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96, 95, 36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 80, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 78, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 74, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 84, 97, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 98, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97, 109, 101, 125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 46, 84, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 86, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 88, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 78, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 32, 124, 124, 32, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 85, 97, 32, 38, 38, 32, 98, 46, 68, 97, 46, 71, 97, 46, 85, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 75, 97, 32, 63, 32, 98, 46, 68, 97, 46, 75, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 86, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 46, 68, 97, 46, 73, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 80, 97, 115, 115, 105, 110, 103, 32, 114, 97, 119, 32, 112, 111, 105, 110, 116, 101, 114, 32, 116, 111, 32, 115, 109, 97, 114, 116, 32, 112, 111, 105, 110, 116, 101, 114, 32, 105, 115, 32, 105, 108, 108, 101, 103, 97, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 116, 104, 105, 115, 46, 114, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 75, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 75, 97, 32, 63, 32, 98, 46, 68, 97, 46, 75, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 75, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 110, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 98, 40, 40, 41, 32, 61, 62, 32, 100, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 78, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 85, 110, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 32, 115, 104, 97, 114, 105, 110, 103, 32, 112, 111, 108, 105, 99, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 71, 97, 46, 85, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 70, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 87, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 85, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 86, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 108, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 98, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 97, 98, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 88, 97, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 98, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 78, 97, 32, 61, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 98, 46, 74, 97, 32, 63, 32, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 107, 98, 32, 58, 32, 40, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 100, 32, 63, 32, 105, 98, 32, 58, 32, 109, 98, 44, 32, 116, 104, 105, 115, 46, 77, 97, 32, 61, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 111, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 82, 101, 112, 108, 97, 99, 105, 110, 103, 32, 110, 111, 110, 101, 120, 105, 115, 116, 101, 110, 116, 32, 112, 117, 98, 108, 105, 99, 32, 115, 121, 109, 98, 111, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 99, 32, 63, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 32, 61, 32, 98, 32, 58, 32, 40, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32, 107, 91, 97, 93, 46, 81, 97, 32, 61, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 44, 32, 112, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 91, 93, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 40, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 112, 47, 103, 44, 32, 34, 105, 34, 41, 44, 32, 98, 32, 61, 32, 40, 48, 44, 32, 107, 91, 34, 100, 121, 110, 67, 97, 108, 108, 95, 34, 32, 43, 32, 97, 93, 41, 40, 98, 44, 32, 46, 46, 46, 99, 41, 41, 32, 58, 32, 98, 32, 61, 32, 83, 46, 103, 101, 116, 40, 98, 41, 40, 46, 46, 46, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 113, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 46, 46, 46, 99, 41, 32, 61, 62, 32, 112, 98, 40, 97, 44, 32, 98, 44, 32, 99, 41, 44, 32, 84, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 113, 98, 40, 97, 44, 32, 98, 41, 32, 58, 32, 83, 46, 103, 101, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 111, 105, 110, 116, 101, 114, 32, 119, 105, 116, 104, 32, 115, 105, 103, 110, 97, 116, 117, 114, 101, 32, 36, 123, 97, 125, 58, 32, 36, 123, 98, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 114, 98, 44, 32, 116, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 115, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 117, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 102, 93, 32, 124, 124, 32, 78, 91, 102, 93, 32, 124, 124, 32, 40, 78, 97, 91, 102, 93, 32, 63, 32, 78, 97, 91, 102, 93, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 32, 58, 32, 40, 100, 46, 112, 117, 115, 104, 40, 102, 41, 44, 32, 101, 91, 102, 93, 32, 61, 32, 116, 114, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 44, 32, 101, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 114, 98, 40, 96, 36, 123, 97, 125, 58, 32, 96, 32, 43, 32, 100, 46, 109, 97, 112, 40, 116, 98, 41, 46, 106, 111, 105, 110, 40, 91, 34, 44, 32, 34, 93, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 118, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 100, 43, 43, 41, 32, 99, 46, 112, 117, 115, 104, 40, 66, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 49, 59, 32, 98, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 98, 41, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 91, 98, 93, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 77, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 120, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 102, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 97, 114, 103, 84, 121, 112, 101, 115, 32, 97, 114, 114, 97, 121, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 33, 32, 77, 117, 115, 116, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 103, 101, 116, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 97, 110, 100, 32, 39, 116, 104, 105, 115, 39, 32, 116, 121, 112, 101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32, 119, 98, 40, 98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105, 100, 34, 32, 33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109, 101, 44, 32, 109, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 110, 32, 61, 32, 65, 114, 114, 97, 121, 40, 109, 41, 44, 32, 112, 32, 61, 32, 91, 93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 97, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 69, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 104, 32, 63, 32, 50, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 91, 48, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 98, 91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 91, 49, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 119, 32, 61, 32, 48, 59, 32, 119, 32, 60, 32, 109, 59, 32, 43, 43, 119, 41, 32, 110, 91, 119, 93, 32, 61, 32, 98, 91, 119, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 69, 91, 119, 93, 41, 44, 32, 112, 46, 112, 117, 115, 104, 40, 110, 91, 119, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 32, 61, 32, 100, 40, 46, 46, 46, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 77, 97, 40, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 119, 32, 61, 32, 104, 32, 63, 32, 49, 32, 58, 32, 50, 59, 32, 119, 32, 60, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 32, 119, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 72, 32, 61, 32, 49, 32, 61, 61, 61, 32, 119, 32, 63, 32, 118, 32, 58, 32, 110, 91, 119, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 119, 93, 46, 77, 97, 32, 38, 38, 32, 98, 91, 119, 93, 46, 77, 97, 40, 72, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48, 93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 69, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 121, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45, 49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61, 32, 91, 93, 44, 32, 86, 32, 61, 32, 91, 93, 44, 32, 66, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32, 45, 45, 86, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 86, 91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 65, 98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115, 101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108, 46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 86, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 108, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 65, 98, 46, 112, 111, 112, 40, 41, 32, 124, 124, 32, 86, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 93, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 68, 98, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58, 118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 67, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 108, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 69, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 117, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 65, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 78, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32, 61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110, 107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123, 116, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 82, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 106, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114, 114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32, 98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 71, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 112, 97, 91, 99, 32, 62, 62, 32, 51, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 72, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 117, 91, 100, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 65, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32, 116, 114, 117, 101, 32, 125, 44, 32, 68, 98, 41, 44, 32, 74, 98, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 34, 117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 75, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32, 47, 32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38, 38, 32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32, 60, 32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 74, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 98, 46, 100, 101, 99, 111, 100, 101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32, 62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32, 47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 44, 32, 78, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32, 61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47, 32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 91, 97, 32, 43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32, 101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 79, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43, 32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81, 98, 32, 61, 32, 48, 44, 32, 82, 98, 32, 61, 32, 91, 93, 44, 32, 83, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 82, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91, 100, 93, 32, 61, 32, 70, 98, 40, 66, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 44, 32, 86, 98, 32, 61, 32, 123, 125, 44, 32, 87, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 68, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100, 34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 88, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 97, 32, 124, 124, 32, 48, 32, 60, 32, 81, 98, 32, 124, 124, 32, 40, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 69, 120, 105, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 44, 32, 109, 97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 68, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 89, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 109, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 40, 41, 44, 32, 33, 40, 70, 97, 32, 124, 124, 32, 48, 32, 60, 32, 81, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 32, 61, 32, 97, 32, 61, 32, 110, 97, 44, 32, 88, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 90, 98, 32, 61, 32, 123, 125, 44, 32, 97, 99, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 36, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101, 47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34, 67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 101, 97, 32, 124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 90, 98, 41, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 90, 98, 91, 98, 93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98, 93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 90, 98, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41, 32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61, 36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 98, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 36, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 98, 44, 32, 98, 99, 32, 61, 32, 91, 110, 117, 108, 108, 44, 32, 91, 93, 44, 32, 91, 93, 93, 44, 32, 99, 99, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109, 68, 101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 100, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 100, 99, 32, 61, 32, 99, 99, 40, 41, 41, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 97, 32, 61, 32, 107, 46, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 102, 99, 32, 61, 32, 48, 59, 32, 50, 53, 54, 32, 62, 32, 102, 99, 59, 32, 43, 43, 102, 99, 41, 32, 101, 99, 91, 102, 99, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 102, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 80, 97, 32, 61, 32, 101, 99, 59, 10, 32, 32, 32, 32, 32, 32, 82, 32, 61, 32, 107, 46, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 98, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 116, 104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 98, 98, 32, 38, 38, 32, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 98, 98, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 32, 61, 32, 97, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 68, 97, 46, 71, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 97, 32, 61, 32, 97, 46, 68, 97, 46, 69, 97, 59, 32, 98, 46, 74, 97, 59, 32, 41, 32, 99, 32, 61, 32, 98, 46, 84, 97, 40, 99, 41, 44, 32, 98, 32, 61, 32, 98, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 100, 46, 74, 97, 59, 32, 41, 32, 97, 32, 61, 32, 100, 46, 84, 97, 40, 97, 41, 44, 32, 100, 32, 61, 32, 100, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 61, 61, 61, 32, 100, 32, 38, 38, 32, 99, 32, 61, 61, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 111, 110, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 44, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 90, 97, 44, 32, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 44, 32, 99, 32, 61, 32, 98, 46, 99, 114, 101, 97, 116, 101, 44, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 44, 32, 101, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 99, 97, 108, 108, 40, 98, 44, 32, 100, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 99, 111, 117, 110, 116, 58, 32, 101, 46, 99, 111, 117, 110, 116, 44, 32, 82, 97, 58, 32, 101, 46, 82, 97, 44, 32, 83, 97, 58, 32, 101, 46, 83, 97, 44, 32, 69, 97, 58, 32, 101, 46, 69, 97, 44, 32, 71, 97, 58, 32, 101, 46, 71, 97, 44, 32, 73, 97, 58, 32, 101, 46, 73, 97, 44, 32, 75, 97, 58, 32, 101, 46, 75, 97, 32, 125, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 46, 82, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 97, 46, 73, 97, 32, 63, 32, 97, 46, 75, 97, 46, 78, 97, 40, 97, 46, 73, 97, 41, 32, 58, 32, 97, 46, 71, 97, 46, 70, 97, 46, 78, 97, 40, 97, 46, 69, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 32, 124, 124, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 73, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 68, 101, 108, 101, 116, 101, 100, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 76, 97, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 98, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 110, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 97, 98, 32, 38, 38, 32, 40, 97, 32, 61, 32, 116, 104, 105, 115, 46, 97, 98, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 116, 104, 105, 115, 46, 78, 97, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 86, 97, 32, 63, 32, 36, 97, 40, 116, 104, 105, 115, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 116, 104, 105, 115, 46, 108, 98, 44, 32, 69, 97, 58, 32, 99, 44, 32, 75, 97, 58, 32, 116, 104, 105, 115, 44, 32, 73, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 36, 97, 40, 116, 104, 105, 115, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 116, 104, 105, 115, 44, 32, 69, 97, 58, 32, 97, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 103, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 90, 97, 40, 97, 41, 44, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 89, 97, 40, 116, 104, 105, 115, 46, 70, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 100, 46, 68, 97, 46, 69, 97, 32, 61, 32, 99, 44, 32, 100, 46, 68, 97, 46, 73, 97, 32, 61, 32, 97, 44, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 90, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 70, 97, 46, 102, 98, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 87, 97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 85, 97, 32, 63, 32, 100, 46, 98, 98, 32, 58, 32, 100, 46, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 86, 97, 40, 99, 44, 32, 116, 104, 105, 115, 46, 70, 97, 44, 32, 100, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 101, 32, 63, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 32, 58, 32, 116, 104, 105, 115, 46, 86, 97, 32, 63, 32, 36, 97, 40, 100, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 100, 44, 32, 69, 97, 58, 32, 101, 44, 32, 75, 97, 58, 32, 116, 104, 105, 115, 44, 32, 73, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 36, 97, 40, 100, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 100, 44, 32, 69, 97, 58, 32, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 98, 32, 61, 32, 107, 46, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 32, 61, 32, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 99, 98, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 69, 114, 114, 111, 114, 40, 100, 41, 46, 115, 116, 97, 99, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 115, 116, 97, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 43, 32, 34, 92, 110, 34, 32, 43, 32, 100, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 69, 114, 114, 111, 114, 40, 58, 91, 94, 92, 110, 93, 42, 41, 63, 92, 110, 47, 44, 32, 34, 34, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 63, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 58, 32, 96, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 58, 32, 36, 123, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 69, 114, 114, 111, 114, 44, 32, 34, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 86, 46, 112, 117, 115, 104, 40, 48, 44, 32, 49, 44, 32, 118, 111, 105, 100, 32, 48, 44, 32, 49, 44, 32, 110, 117, 108, 108, 44, 32, 49, 44, 32, 116, 114, 117, 101, 44, 32, 49, 44, 32, 102, 97, 108, 115, 101, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 99, 111, 117, 110, 116, 95, 101, 109, 118, 97, 108, 95, 104, 97, 110, 100, 108, 101, 115, 32, 61, 32, 40, 41, 32, 61, 62, 32, 86, 46, 108, 101, 110, 103, 116, 104, 32, 47, 32, 50, 32, 45, 32, 53, 32, 45, 32, 65, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 99, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 119, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 97, 32, 63, 32, 71, 40, 120, 44, 32, 97, 41, 32, 58, 32, 34, 34, 125, 44, 32, 97, 116, 58, 32, 96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32, 63, 32, 71, 40, 120, 44, 32, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110, 97, 109, 101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32, 63, 32, 71, 40, 120, 44, 32, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 58, 32, 40, 41, 32, 61, 62, 32, 74, 97, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 110, 101, 119, 32, 72, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 32, 124, 124, 32, 40, 73, 32, 61, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32, 40, 41, 32, 61, 62, 32, 119, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 122, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 76, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 76, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 88, 97, 44, 32, 100, 32, 61, 32, 98, 46, 78, 97, 44, 32, 101, 32, 61, 32, 98, 46, 36, 97, 44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 106, 98, 41, 46, 99, 111, 110, 99, 97, 116, 40, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 112, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 104, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 104, 91, 109, 93, 44, 32, 112, 32, 61, 32, 108, 46, 104, 98, 44, 32, 114, 32, 61, 32, 108, 46, 105, 98, 44, 32, 69, 32, 61, 32, 104, 91, 109, 32, 43, 32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 118, 32, 61, 32, 108, 46, 111, 98, 44, 32, 119, 32, 61, 32, 108, 46, 113, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 91, 108, 46, 101, 98, 93, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 58, 32, 40, 72, 41, 32, 61, 62, 32, 110, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 112, 40, 114, 44, 32, 72, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58, 32, 40, 72, 44, 32, 102, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 40, 119, 44, 32, 72, 44, 32, 69, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 70, 44, 32, 102, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 123, 125, 44, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32, 109, 91, 110, 93, 32, 61, 32, 103, 91, 110, 93, 46, 114, 101, 97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 105, 110, 32, 103, 41, 32, 105, 102, 32, 40, 33, 40, 110, 32, 105, 110, 32, 109, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115, 115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36, 123, 110, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 112, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32, 103, 91, 110, 93, 46, 119, 114, 105, 116, 101, 40, 112, 44, 32, 109, 91, 110, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32, 38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 112, 44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 81, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 84, 40, 104, 44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 38, 38, 32, 40, 109, 32, 61, 32, 84, 40, 108, 44, 32, 109, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 84, 40, 112, 44, 32, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 102, 98, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 69, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 110, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100, 93, 32, 58, 32, 91, 93, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 118, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 32, 61, 32, 118, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 72, 32, 61, 32, 119, 46, 80, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 72, 32, 61, 32, 98, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 99, 98, 40, 110, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 81, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 102, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 85, 115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 70, 46, 79, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 110, 32, 43, 32, 34, 32, 104, 97, 115, 32, 110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 122, 98, 32, 61, 32, 70, 46, 79, 97, 91, 81, 97, 46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 122, 98, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105, 110, 118, 111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102, 32, 36, 123, 110, 125, 32, 119, 105, 116, 104, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 81, 97, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 40, 36, 123, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 70, 46, 79, 97, 41, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 125, 41, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 105, 110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 122, 98, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 81, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 72, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 118, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 102, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 110, 101, 119, 32, 103, 98, 40, 110, 44, 32, 118, 44, 32, 102, 97, 44, 32, 114, 44, 32, 119, 44, 32, 102, 44, 32, 103, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 70, 46, 74, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 40, 104, 97, 32, 61, 32, 70, 46, 74, 97, 41, 46, 89, 97, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 104, 97, 46, 89, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 46, 74, 97, 46, 89, 97, 46, 112, 117, 115, 104, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 44, 32, 70, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 32, 43, 32, 34, 42, 34, 44, 32, 70, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 32, 43, 32, 34, 32, 99, 111, 110, 115, 116, 42, 34, 44, 32, 70, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 91, 97, 93, 32, 61, 32, 123, 32, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 58, 32, 104, 97, 44, 32, 98, 98, 58, 32, 72, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 111, 98, 40, 69, 44, 32, 118, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 119, 44, 32, 104, 97, 44, 32, 72, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 118, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 96, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 103, 46, 70, 97, 46, 79, 97, 32, 38, 38, 32, 40, 103, 46, 70, 97, 46, 79, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 119, 105, 116, 104, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 98, 32, 45, 32, 49, 125, 41, 32, 102, 111, 114, 32, 99, 108, 97, 115, 115, 32, 39, 36, 123, 103, 46, 110, 97, 109, 101, 125, 39, 33, 32, 79, 118, 101, 114, 108, 111, 97, 100, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 32, 99, 117, 114, 114, 101, 110, 116, 108, 121, 32, 111, 110, 108, 121, 32, 112, 101, 114, 102, 111, 114, 109, 101, 100, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 99, 111, 117, 110, 116, 44, 32, 110, 111, 116, 32, 97, 99, 116, 117, 97, 108, 32, 116, 121, 112, 101, 32, 105, 110, 102, 111, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 104, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 46, 115, 112, 108, 105, 99, 101, 40, 49, 44, 32, 48, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 120, 98, 40, 108, 44, 32, 109, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 118, 98, 40, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 121, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 112, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 109, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 112, 32, 61, 32, 96, 36, 123, 109, 46, 110, 97, 109, 101, 125, 46, 36, 123, 98, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 64, 64, 34, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121, 109, 98, 111, 108, 91, 98, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 50, 41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 109, 46, 70, 97, 46, 109, 98, 46, 112, 117, 115, 104, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 109, 46, 70, 97, 46, 80, 97, 44, 32, 69, 32, 61, 32, 114, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 69, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 69, 46, 72, 97, 32, 38, 38, 32, 69, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 33, 61, 61, 32, 109, 46, 110, 97, 109, 101, 32, 38, 38, 32, 69, 46, 81, 97, 32, 61, 61, 61, 32, 99, 32, 45, 32, 50, 32, 63, 32, 40, 110, 46, 81, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 110, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 61, 32, 109, 46, 110, 97, 109, 101, 44, 32, 114, 91, 98, 93, 32, 61, 32, 110, 41, 32, 58, 32, 40, 100, 98, 40, 114, 44, 32, 98, 44, 32, 112, 41, 44, 32, 114, 91, 98, 93, 46, 72, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 108, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 120, 98, 40, 112, 44, 32, 118, 44, 32, 109, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 114, 91, 98, 93, 46, 72, 97, 32, 63, 32, 40, 118, 46, 81, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 114, 91, 98, 93, 32, 61, 32, 118, 41, 32, 58, 32, 114, 91, 98, 93, 46, 72, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97, 41, 32, 61, 62, 32, 79, 40, 97, 44, 32, 68, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 118, 97, 108, 117, 101, 115, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 118, 97, 108, 117, 101, 115, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 102, 44, 32, 104, 41, 32, 61, 62, 32, 104, 46, 118, 97, 108, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 69, 98, 40, 98, 44, 32, 99, 44, 32, 100, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 98, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 70, 98, 40, 97, 44, 32, 34, 101, 110, 117, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 98, 40, 96, 36, 123, 100, 46, 110, 97, 109, 101, 125, 95, 36, 123, 98, 125, 96, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 118, 97, 108, 117, 101, 115, 91, 99, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 68, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 41, 32, 61, 62, 32, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 71, 98, 40, 98, 44, 32, 99, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 118, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 121, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 97, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45, 32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 104, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 111, 98, 40, 97, 44, 32, 120, 98, 40, 97, 44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117, 108, 108, 93, 46, 99, 111, 110, 99, 97, 116, 40, 103, 46, 115, 108, 105, 99, 101, 40, 49, 41, 41, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 44, 32, 98, 32, 45, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 49, 32, 61, 61, 61, 32, 101, 32, 38, 38, 32, 40, 101, 32, 61, 32, 52, 50, 57, 52, 57, 54, 55, 50, 57, 53, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 51, 50, 32, 45, 32, 56, 32, 42, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 32, 60, 60, 32, 102, 32, 62, 62, 62, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 98, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 117, 110, 115, 105, 103, 110, 101, 100, 34, 41, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 32, 62, 62, 62, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 101, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 104, 44, 32, 76, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 72, 98, 40, 98, 44, 32, 99, 44, 32, 48, 32, 33, 61, 61, 32, 100, 41, 44, 32, 77, 97, 58, 32, 110, 117, 108, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 101, 40, 117, 46, 98, 117, 102, 102, 101, 114, 44, 32, 66, 91, 102, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 44, 32, 66, 91, 102, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 91, 73, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 93, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 99, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 100, 44, 32, 76, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 100, 32, 125, 44, 32, 123, 32, 107, 98, 58, 32, 116, 114, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 73, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 112, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 84, 40, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 84, 40, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 61, 32, 84, 40, 110, 44, 32, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 93, 44, 32, 91, 98, 93, 44, 32, 40, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 114, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 110, 101, 119, 32, 110, 98, 40, 99, 44, 32, 114, 46, 70, 97, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 114, 44, 32, 100, 44, 32, 102, 44, 32, 103, 44, 32, 109, 44, 32, 112, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 34, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 44, 32, 102, 32, 61, 32, 100, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 104, 32, 61, 32, 102, 44, 32, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 61, 32, 101, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 102, 32, 43, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 61, 61, 32, 101, 32, 124, 124, 32, 48, 32, 61, 61, 32, 120, 91, 108, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 104, 32, 63, 32, 71, 40, 120, 44, 32, 104, 44, 32, 108, 32, 45, 32, 104, 41, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 109, 41, 32, 118, 97, 114, 32, 109, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 109, 32, 43, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 108, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 65, 114, 114, 97, 121, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 59, 32, 43, 43, 103, 41, 32, 109, 91, 103, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 120, 91, 102, 32, 43, 32, 103, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 109, 46, 106, 111, 105, 110, 40, 34, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 38, 38, 32, 40, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 44, 32, 104, 32, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 104, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 103, 32, 61, 32, 102, 32, 61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 43, 43, 32, 58, 32, 50, 48, 52, 55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 32, 43, 61, 32, 50, 32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 108, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 108, 32, 63, 32, 40, 102, 32, 43, 61, 32, 52, 44, 32, 43, 43, 103, 41, 32, 58, 32, 102, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 32, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 99, 40, 52, 32, 43, 32, 102, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 32, 61, 32, 103, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 32, 75, 40, 101, 44, 32, 108, 44, 32, 102, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 53, 53, 32, 60, 32, 109, 41, 32, 116, 104, 114, 111, 119, 32, 85, 40, 108, 41, 44, 32, 110, 101, 119, 32, 82, 40, 34, 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70, 45, 49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115, 32, 116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43, 104, 41, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 101, 91, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 100, 46, 112, 117, 115, 104, 40, 85, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 75, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 76, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 77, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38, 32, 40, 100, 32, 61, 32, 78, 98, 44, 32, 101, 32, 61, 32, 79, 98, 44, 32, 102, 32, 61, 32, 80, 98, 44, 32, 104, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 109, 44, 32, 110, 32, 61, 32, 103, 32, 43, 32, 52, 44, 32, 112, 32, 61, 32, 48, 59, 32, 112, 32, 60, 61, 32, 108, 59, 32, 43, 43, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32, 43, 32, 112, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 32, 61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 104, 40, 114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 100, 40, 110, 44, 32, 114, 32, 45, 32, 110, 41, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 109, 32, 63, 32, 109, 32, 61, 32, 110, 32, 58, 32, 40, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 109, 32, 43, 61, 32, 110, 41, 44, 32, 110, 32, 61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114, 105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 102, 40, 108, 41, 44, 32, 110, 32, 61, 32, 103, 99, 40, 52, 32, 43, 32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 110, 32, 62, 62, 32, 50, 93, 32, 61, 32, 109, 32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 40, 108, 44, 32, 110, 32, 43, 32, 52, 44, 32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 85, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 91, 97, 93, 32, 61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 81, 40, 98, 41, 44, 32, 88, 97, 58, 32, 84, 40, 99, 44, 32, 100, 41, 44, 32, 78, 97, 58, 32, 84, 40, 101, 44, 32, 102, 41, 44, 32, 36, 97, 58, 32, 91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 91, 97, 93, 46, 36, 97, 46, 112, 117, 115, 104, 40, 123, 32, 101, 98, 58, 32, 81, 40, 98, 41, 44, 32, 106, 98, 58, 32, 99, 44, 32, 104, 98, 58, 32, 84, 40, 100, 44, 32, 101, 41, 44, 32, 105, 98, 58, 32, 102, 44, 32, 112, 98, 58, 32, 104, 44, 32, 111, 98, 58, 32, 84, 40, 103, 44, 32, 108, 41, 44, 32, 113, 98, 58, 32, 109, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 115, 98, 58, 32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 76, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110, 102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 82, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 67, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 58, 32, 66, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 84, 98, 40, 97, 44, 32, 98, 41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96, 109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60, 40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40, 34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46, 110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 98, 40, 98, 44, 32, 40, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 61, 32, 48, 44, 32, 112, 32, 61, 32, 48, 59, 32, 112, 32, 60, 32, 97, 59, 32, 43, 43, 112, 41, 32, 102, 91, 112, 93, 32, 61, 32, 100, 91, 112, 93, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 109, 32, 43, 32, 110, 41, 44, 32, 110, 32, 43, 61, 32, 100, 91, 112, 93, 46, 76, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 49, 32, 61, 61, 61, 32, 99, 32, 63, 32, 85, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32, 103, 46, 97, 112, 112, 108, 121, 40, 104, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 101, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 66, 91, 108, 32, 62, 62, 32, 50, 93, 32, 61, 32, 108, 98, 40, 104, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 86, 91, 97, 32, 43, 32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 67, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 70, 98, 40, 97, 44, 32, 34, 95, 101, 109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 91, 97, 93, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 86, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108, 101, 116, 101, 32, 86, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 86, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 98, 40, 40, 41, 32, 61, 62, 32, 104, 99, 40, 97, 44, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32, 116, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70, 117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54, 48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98, 101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 104, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98, 115, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67, 36, 123, 48, 32, 60, 61, 32, 104, 32, 63, 32, 34, 45, 34, 32, 58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32, 47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102, 32, 63, 32, 40, 75, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44, 32, 75, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32, 40, 75, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 75, 40, 98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62, 62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49, 59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32, 43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116, 104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48, 48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97, 116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116, 104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97, 120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54, 41, 41, 32, 45, 32, 108, 97, 46, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32, 54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 46, 103, 114, 111, 119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 89, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 40, 41, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 66, 91, 97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 102, 41, 32, 117, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 91, 101, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 83, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 44, 32, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 99, 59, 32, 102, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 66, 91, 98, 32, 62, 62, 32, 50, 93, 44, 32, 103, 32, 61, 32, 66, 91, 98, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 103, 59, 32, 108, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 97, 44, 32, 110, 32, 61, 32, 120, 91, 104, 32, 43, 32, 108, 93, 44, 32, 112, 32, 61, 32, 98, 99, 91, 109, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 110, 32, 124, 124, 32, 49, 48, 32, 61, 61, 61, 32, 110, 32, 63, 32, 40, 40, 49, 32, 61, 61, 61, 32, 109, 32, 63, 32, 106, 97, 32, 58, 32, 116, 41, 40, 71, 40, 112, 41, 41, 44, 32, 112, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 41, 32, 58, 32, 112, 46, 112, 117, 115, 104, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 43, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 58, 32, 106, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 58, 32, 107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 108, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 58, 32, 109, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 58, 32, 110, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 58, 32, 111, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 58, 32, 112, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 113, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 58, 32, 114, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 58, 32, 115, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 58, 32, 116, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 117, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88, 58, 32, 88, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 99, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 99, 46, 101, 120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32, 87, 46, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 32, 61, 32, 87, 46, 110, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 106, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 51, 32, 61, 32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 51, 46, 99, 97, 108, 108, 40, 107, 44, 32, 67, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 32, 67, 32, 38, 38, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 118, 97, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 73, 110, 116, 101, 114, 118, 97, 108, 40, 118, 97, 41, 44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108, 41, 44, 32, 68, 32, 38, 38, 32, 40, 99, 32, 61, 32, 68, 44, 32, 68, 32, 61, 32, 110, 117, 108, 108, 44, 32, 99, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 67, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 123, 32, 97, 58, 32, 118, 99, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77, 111, 100, 117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98, 97, 99, 107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116, 104, 32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 99, 125, 96, 41, 44, 32, 98, 97, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 97, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 121, 97, 32, 58, 32, 121, 97, 32, 61, 32, 120, 97, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 32, 58, 32, 107, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 32, 63, 32, 107, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 44, 32, 113, 41, 32, 58, 32, 113, 32, 43, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 98, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 40, 41, 44, 32, 103, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 103, 99, 32, 61, 32, 87, 46, 107, 97, 41, 40, 97, 41, 44, 32, 115, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 115, 98, 32, 61, 32, 87, 46, 108, 97, 41, 40, 97, 41, 44, 32, 85, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 85, 32, 61, 32, 87, 46, 109, 97, 41, 40, 97, 41, 44, 32, 104, 99, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 104, 99, 32, 61, 32, 87, 46, 111, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 88, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88, 32, 61, 32, 87, 46, 112, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 74, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 74, 32, 61, 32, 87, 46, 113, 97, 41, 40, 97, 41, 44, 32, 89, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41, 32, 61, 62, 32, 40, 90, 32, 61, 32, 87, 46, 115, 97, 41, 40, 41, 44, 32, 73, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 73, 97, 32, 61, 32, 87, 46, 116, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 106, 106, 32, 61, 32, 87, 46, 117, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 32, 61, 32, 87, 46, 118, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 87, 46, 119, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 99, 32, 61, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 40, 119, 99, 32, 61, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 106, 106, 32, 61, 32, 87, 46, 120, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 121, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 87, 46, 122, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 87, 46, 65, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 66, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 67, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 108, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 113, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 99, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 32, 33, 61, 61, 32, 109, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 32, 33, 61, 61, 32, 112, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 112, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 120, 99, 59, 10, 32, 32, 32, 32, 32, 32, 68, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 121, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 99, 32, 124, 124, 32, 122, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 99, 32, 124, 124, 32, 40, 68, 32, 61, 32, 121, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 120, 99, 32, 38, 38, 32, 40, 120, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 107, 46, 99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114, 117, 101, 44, 32, 33, 109, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 115, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 82, 117, 110, 116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38, 32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32, 91, 107, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 48, 32, 60, 32, 67, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 82, 117, 110, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32, 91, 107, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 107, 46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 117, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 114, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 67, 32, 124, 124, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 32, 63, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34, 41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32, 58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116, 32, 61, 32, 91, 107, 46, 112, 114, 101, 73, 110, 105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112, 111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 122, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110, 100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105, 115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97, 115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 116, 114, 121, 76, 111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 121, 105, 101, 108, 100, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114, 105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105, 109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32, 110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32, 32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104, 32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 46, 99, 97, 116, 99, 104, 40, 40, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117, 112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116, 116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108, 111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 121, 105, 101, 108, 100, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77, 32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115, 111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98, 108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105, 122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32, 97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115, 115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32, 105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45, 32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45, 101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103, 45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97, 103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97, 116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116, 46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101, 101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101, 115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97, 114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105, 108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100, 97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102, 93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116, 40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108, 111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104, 101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104, 101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115, 108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32, 33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121, 40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44, 32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41, 32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 98, 111, 116, 116, 111, 109, 32, 60, 61, 32, 40, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 41, 32, 38, 38, 32, 114, 101, 99, 116, 46, 114, 105, 103, 104, 116, 32, 60, 61, 32, 40, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116, 104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40, 109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97, 114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 32, 61, 32, 40, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 40, 95, 97, 32, 61, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 91, 48, 46, 53, 44, 32, 48, 46, 53, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 40, 40, 95, 98, 32, 61, 32, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101, 110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 40, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 41, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32, 98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32, 112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99, 101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114, 105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115, 99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 40, 95, 99, 32, 61, 32, 40, 95, 98, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46, 116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 50, 44, 32, 95, 99, 50, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95, 103, 44, 32, 95, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 50, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 95, 99, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 50, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 121, 105, 101, 108, 100, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114, 101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99, 104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61, 32, 121, 105, 101, 108, 100, 32, 114, 101, 115, 112, 111, 110, 115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46, 32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110, 103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100, 111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 119, 101, 110, 116, 32, 119, 114, 111, 110, 103, 44, 32, 116, 104, 101, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 119, 97, 115, 32, 115, 117, 112, 112, 111, 115, 101, 32, 116, 111, 32, 97, 117, 116, 111, 112, 108, 97, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 34, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 97, 50, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 70, 105, 116, 46, 70, 105, 108, 108, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 102, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 102, 46, 70, 105, 116, 46, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 110, 105, 102, 101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105, 102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32, 115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40, 41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114, 111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97, 100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49, 48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95, 103, 44, 32, 95, 104, 44, 32, 95, 105, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 95, 99, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 40, 95, 105, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 105, 32, 58, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 114, 101, 110, 100, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117, 102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32, 48, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 42, 32, 52, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116, 101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 120, 116, 70, 114, 97, 109, 101, 32, 61, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 101, 51, 41, 32, 47, 32, 49, 101, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 110, 101, 120, 116, 70, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 112, 100, 97, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 67, 111, 109, 112, 108, 101, 116, 101, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 69, 114, 114, 111, 114, 32, 105, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 102, 114, 97, 109, 101, 58, 34, 44, 32, 101, 114, 114, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97, 117, 115, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97, 109, 101, 32, 60, 32, 48, 32, 124, 124, 32, 102, 114, 97, 109, 101, 32, 62, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 33, 61, 61, 32, 48, 32, 38, 38, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 33, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 105, 122, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 91, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 109, 111, 100, 101, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 44, 32, 123, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 44, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 125, 32, 61, 32, 95, 97, 44, 32, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 111, 98, 106, 82, 101, 115, 116, 40, 95, 97, 44, 32, 91, 34, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 34, 44, 32, 34, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 34, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 44, 32, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105, 115, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 44, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 112, 114, 111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 58, 36, 123, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107, 101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109, 97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115, 117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 112, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112, 112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 89, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101, 88, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101, 99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108, 101, 89, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117, 115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 40, 95, 100, 32, 61, 32, 40, 95, 99, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 49, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 79, 114, 105, 101, 110, 116, 101, 100, 32, 66, 111, 117, 110, 100, 105, 110, 103, 32, 66, 111, 120, 32, 40, 79, 66, 66, 41, 32, 112, 111, 105, 110, 116, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121, 101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 56, 32, 110, 117, 109, 98, 101, 114, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 52, 32, 112, 111, 105, 110, 116, 115, 32, 40, 120, 44, 121, 41, 32, 111, 102, 32, 116, 104, 101, 32, 79, 66, 66, 32, 105, 110, 32, 99, 108, 111, 99, 107, 119, 105, 115, 101, 32, 111, 114, 100, 101, 114, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 111, 109, 32, 116, 111, 112, 45, 108, 101, 102, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 120, 48, 44, 32, 121, 48, 44, 32, 120, 49, 44, 32, 121, 49, 44, 32, 120, 50, 44, 32, 121, 50, 44, 32, 120, 51, 44, 32, 121, 51, 93, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32, 68, 114, 97, 119, 32, 97, 32, 112, 111, 108, 121, 103, 111, 110, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32, 49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110, 100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 32, 61, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 105, 102, 32, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 98, 101, 103, 105, 110, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 109, 111, 118, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 48, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 49, 93, 41, 59, 32, 47, 47, 32, 70, 105, 114, 115, 116, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 50, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 51, 93, 41, 59, 32, 47, 47, 32, 83, 101, 99, 111, 110, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 52, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 53, 93, 41, 59, 32, 47, 47, 32, 84, 104, 105, 114, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 54, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 55, 93, 41, 59, 32, 47, 47, 32, 70, 111, 117, 114, 116, 104, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 99, 108, 111, 115, 101, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114, 111, 107, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105, 122, 101, 40, 41, 32, 33, 61, 61, 32, 56, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 105, 110, 116, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 56, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 111, 105, 110, 116, 115, 46, 112, 117, 115, 104, 40, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 111, 105, 110, 116, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107, 101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32, 114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 103, 101, 116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114, 111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105, 102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114, 101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 10, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116, 101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101, 101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36, 123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61, 32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109, 109, 121, 59, 10, 125, 41, 40, 41, 59, 10])], { type: "application/javascript" }), e = URL.createObjectURL(r), t = new Worker(e);
    return URL.revokeObjectURL(e), t;
  }
}, o5 = s5, a5 = class {
  constructor() {
    G(this, "_workers", /* @__PURE__ */ new Map()), G(this, "_animationWorkerMap", /* @__PURE__ */ new Map());
  }
  getWorker(r) {
    return this._workers.has(r) || this._workers.set(r, new o5()), this._workers.get(r);
  }
  assignAnimationToWorker(r, e) {
    this._animationWorkerMap.set(r, e);
  }
  unassignAnimationFromWorker(r) {
    this._animationWorkerMap.delete(r);
  }
  sendMessage(r, e, t) {
    this.getWorker(r).postMessage(e, t || []);
  }
  terminateWorker(r) {
    let e = this._workers.get(r);
    e && (e.terminate(), this._workers.delete(r));
  }
};
function N4(r, e) {
  if (r instanceof HTMLCanvasElement) {
    let { height: t, width: n } = r.getBoundingClientRect();
    if (t !== 0 && n !== 0) return { width: n * e, height: t * e };
  }
  return { width: r.width, height: r.height };
}
function U4() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
var q4 = class C2 {
  constructor(e) {
    G(this, "_eventManager", new O9()), G(this, "_id"), G(this, "_worker"), G(this, "_canvas"), G(this, "_dotLottieInstanceState", { loopCount: 0, markers: [], autoplay: !1, backgroundColor: "", currentFrame: 0, duration: 0, loop: !1, mode: "forward", segment: [0, 0], segmentDuration: 0, speed: 1, totalFrames: 0, isLoaded: !1, isPlaying: !1, isPaused: !1, isStopped: !0, isFrozen: !1, useFrameInterpolation: !1, renderConfig: { devicePixelRatio: I2() }, activeAnimationId: "", activeThemeId: "", layout: void 0, marker: void 0, isReady: !1, manifest: null }), G(this, "_created", !1), G(this, "_pointerUpMethod"), G(this, "_pointerDownMethod"), G(this, "_pointerMoveMethod"), G(this, "_pointerEnterMethod"), G(this, "_pointerExitMethod");
    var t, n, i;
    this._canvas = e.canvas, this._id = `dotlottie-${U4()}`;
    let a = e.workerId || "defaultWorker";
    this._worker = C2._workerManager.getWorker(a), C2._workerManager.assignAnimationToWorker(this._id, a), C2._wasmUrl && this._sendMessage("setWasmUrl", { url: C2._wasmUrl }), this._create(N1(x1({}, e), { renderConfig: N1(x1({}, e.renderConfig), { devicePixelRatio: ((t = e.renderConfig) == null ? void 0 : t.devicePixelRatio) || I2(), freezeOnOffscreen: (i = (n = e.renderConfig) == null ? void 0 : n.freezeOnOffscreen) != null ? i : !0 }) })), this._worker.addEventListener("message", this._handleWorkerEvent.bind(this)), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this);
  }
  _handleWorkerEvent(e) {
    return K(this, null, function* () {
      let t = e.data;
      t.id || (t.method === "onLoad" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event), L1 && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && G1.observe(this._canvas, this), this._dotLottieInstanceState.renderConfig.autoResize && J1.observe(this._canvas, this))), t.method === "onComplete" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onDestroy" && t.result.instanceId === this._id && this._eventManager.dispatch(t.result.event), t.method === "onUnfreeze" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._dotLottieInstanceState.isFrozen = !1, this._eventManager.dispatch(t.result.event)), t.method === "onFrame" && t.result.instanceId === this._id && (this._dotLottieInstanceState.currentFrame = t.result.event.currentFrame, this._eventManager.dispatch(t.result.event)), t.method === "onRender" && t.result.instanceId === this._id && this._eventManager.dispatch(t.result.event), t.method === "onFreeze" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onPause" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onPlay" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onStop" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onLoadError" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onReady" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)), t.method === "onLoop" && t.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(t.result.event)));
    });
  }
  _create(e) {
    return K(this, null, function* () {
      var t;
      let n;
      this._canvas instanceof HTMLCanvasElement ? n = this._canvas.transferControlToOffscreen() : n = this._canvas;
      let { instanceId: i } = yield this._sendMessage("create", x1({ instanceId: this._id, config: N1(x1({}, e), { canvas: n }) }, N4(this._canvas, ((t = e.renderConfig) == null ? void 0 : t.devicePixelRatio) || I2())), [n]);
      if (i !== this._id) throw new Error("Instance ID mismatch");
      this._created = !0, yield this._updateDotLottieInstanceState();
    });
  }
  get loopCount() {
    return this._dotLottieInstanceState.loopCount;
  }
  get isLoaded() {
    return this._dotLottieInstanceState.isLoaded;
  }
  get isPlaying() {
    return this._dotLottieInstanceState.isPlaying;
  }
  get isPaused() {
    return this._dotLottieInstanceState.isPaused;
  }
  get isStopped() {
    return this._dotLottieInstanceState.isStopped;
  }
  get currentFrame() {
    return this._dotLottieInstanceState.currentFrame;
  }
  get isFrozen() {
    return this._dotLottieInstanceState.isFrozen;
  }
  get segmentDuration() {
    return this._dotLottieInstanceState.segmentDuration;
  }
  get totalFrames() {
    return this._dotLottieInstanceState.totalFrames;
  }
  get segment() {
    return this._dotLottieInstanceState.segment;
  }
  get speed() {
    return this._dotLottieInstanceState.speed;
  }
  get duration() {
    return this._dotLottieInstanceState.duration;
  }
  get isReady() {
    return this._dotLottieInstanceState.isReady;
  }
  get mode() {
    return this._dotLottieInstanceState.mode;
  }
  get canvas() {
    return this._canvas;
  }
  get autoplay() {
    return this._dotLottieInstanceState.autoplay;
  }
  get backgroundColor() {
    return this._dotLottieInstanceState.backgroundColor;
  }
  get loop() {
    return this._dotLottieInstanceState.loop;
  }
  get useFrameInterpolation() {
    return this._dotLottieInstanceState.useFrameInterpolation;
  }
  get renderConfig() {
    return this._dotLottieInstanceState.renderConfig;
  }
  get manifest() {
    return this._dotLottieInstanceState.manifest;
  }
  get activeAnimationId() {
    return this._dotLottieInstanceState.activeAnimationId;
  }
  get marker() {
    return this._dotLottieInstanceState.marker;
  }
  get activeThemeId() {
    return this._dotLottieInstanceState.activeThemeId;
  }
  get layout() {
    return this._dotLottieInstanceState.layout;
  }
  play() {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("play", { instanceId: this._id }), yield this._updateDotLottieInstanceState(), L1 && this._canvas instanceof HTMLCanvasElement && this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && !k9(this._canvas) && (yield this.freeze()));
    });
  }
  pause() {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("pause", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  stop() {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("stop", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setSpeed(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setSpeed", { instanceId: this._id, speed: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setMode(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setMode", { instanceId: this._id, mode: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setFrame(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setFrame", { frame: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setSegment(e, t) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setSegment", { instanceId: this._id, segment: [e, t] }), yield this._updateDotLottieInstanceState());
    });
  }
  setRenderConfig(e) {
    return K(this, null, function* () {
      if (!this._created) return;
      let t = e, { devicePixelRatio: n, freezeOnOffscreen: i } = t, a = L9(t, ["devicePixelRatio", "freezeOnOffscreen"]);
      yield this._sendMessage("setRenderConfig", { instanceId: this._id, renderConfig: N1(x1(x1({}, this._dotLottieInstanceState.renderConfig), a), { devicePixelRatio: n || I2(), freezeOnOffscreen: i ?? !0 }) }), yield this._updateDotLottieInstanceState(), L1 && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.autoResize ? J1.observe(this._canvas, this) : J1.unobserve(this._canvas), this._dotLottieInstanceState.renderConfig.freezeOnOffscreen ? G1.observe(this._canvas, this) : (G1.unobserve(this._canvas), this._dotLottieInstanceState.isFrozen && (yield this.unfreeze())));
    });
  }
  setUseFrameInterpolation(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setUseFrameInterpolation", { instanceId: this._id, useFrameInterpolation: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setTheme(e) {
    return K(this, null, function* () {
      if (!this._created) return !1;
      let t = this._sendMessage("setTheme", { instanceId: this._id, themeId: e });
      return yield this._updateDotLottieInstanceState(), t;
    });
  }
  load(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("load", { config: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setLoop(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setLoop", { instanceId: this._id, loop: e }), yield this._updateDotLottieInstanceState());
    });
  }
  resize() {
    return K(this, null, function* () {
      if (!this._created) return;
      let { height: e, width: t } = N4(this._canvas, this._dotLottieInstanceState.renderConfig.devicePixelRatio || I2());
      yield this._sendMessage("resize", { height: e, instanceId: this._id, width: t }), yield this._updateDotLottieInstanceState();
    });
  }
  destroy() {
    return K(this, null, function* () {
      this._created && (this._created = !1, yield this._sendMessage("destroy", { instanceId: this._id }), this._cleanupStateMachineListeners(), C2._workerManager.unassignAnimationFromWorker(this._id), this._eventManager.removeAllEventListeners(), L1 && this._canvas instanceof HTMLCanvasElement && (G1.unobserve(this._canvas), J1.unobserve(this._canvas)));
    });
  }
  freeze() {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("freeze", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  unfreeze() {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("unfreeze", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setBackgroundColor(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setBackgroundColor", { instanceId: this._id, backgroundColor: e }), yield this._updateDotLottieInstanceState());
    });
  }
  loadAnimation(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("loadAnimation", { animationId: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setLayout(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setLayout", { instanceId: this._id, layout: e }), yield this._updateDotLottieInstanceState());
    });
  }
  _updateDotLottieInstanceState() {
    return K(this, null, function* () {
      if (!this._created) return;
      let e = yield this._sendMessage("getDotLottieInstanceState", { instanceId: this._id });
      this._dotLottieInstanceState = e.state;
    });
  }
  markers() {
    return this._dotLottieInstanceState.markers;
  }
  setMarker(e) {
    return K(this, null, function* () {
      this._created && (yield this._sendMessage("setMarker", { instanceId: this._id, marker: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setThemeData(e) {
    return K(this, null, function* () {
      if (!this._created) return !1;
      let t = yield this._sendMessage("setThemeData", { instanceId: this._id, themeData: e });
      return yield this._updateDotLottieInstanceState(), t;
    });
  }
  setViewport(e, t, n, i) {
    return K(this, null, function* () {
      return this._created ? this._sendMessage("setViewport", { x: e, y: t, width: n, height: i, instanceId: this._id }) : !1;
    });
  }
  _sendMessage(e, t, n) {
    return K(this, null, function* () {
      let i = { id: `dotlottie-request-${U4()}`, method: e, params: t };
      return this._worker.postMessage(i, n || []), new Promise((a, u) => {
        let c = (d) => {
          let f = d.data;
          f.id === i.id && (this._worker.removeEventListener("message", c), f.error ? u(new Error(`Failed to execute method ${e}: ${f.error}`)) : a(f.result));
        };
        this._worker.addEventListener("message", c);
      });
    });
  }
  addEventListener(e, t) {
    this._eventManager.addEventListener(e, t);
  }
  removeEventListener(e, t) {
    this._eventManager.removeEventListener(e, t);
  }
  static setWasmUrl(e) {
    C2._wasmUrl = e;
  }
  loadStateMachine(e) {
    return K(this, null, function* () {
      if (!this._created) return !1;
      let t = yield this._sendMessage("loadStateMachine", { instanceId: this._id, stateMachineId: e });
      return yield this._updateDotLottieInstanceState(), t;
    });
  }
  loadStateMachineData(e) {
    return K(this, null, function* () {
      if (!this._created) return !1;
      let t = yield this._sendMessage("loadStateMachineData", { instanceId: this._id, stateMachineData: e });
      return yield this._updateDotLottieInstanceState(), t;
    });
  }
  startStateMachine() {
    return K(this, null, function* () {
      if (!this._created) return !1;
      this._setupStateMachineListeners();
      let e = yield this._sendMessage("startStateMachine", { instanceId: this._id });
      return yield this._updateDotLottieInstanceState(), e;
    });
  }
  stopStateMachine() {
    return K(this, null, function* () {
      return this._created ? (this._cleanupStateMachineListeners(), this._sendMessage("stopStateMachine", { instanceId: this._id })) : !1;
    });
  }
  getStateMachineListeners() {
    return K(this, null, function* () {
      return this._created ? this._sendMessage("getStateMachineListeners", { instanceId: this._id }) : [];
    });
  }
  _getPointerPosition(e) {
    let t = this._canvas.getBoundingClientRect(), n = this._canvas.width / t.width, i = this._canvas.height / t.height, a = this._dotLottieInstanceState.renderConfig.devicePixelRatio || window.devicePixelRatio || 1, u = (e.clientX - t.left) * n / a, c = (e.clientY - t.top) * i / a;
    return { x: u, y: c };
  }
  _onPointerUp(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this._sendMessage("postPointerUpEvent", { instanceId: this._id, x: t, y: n });
  }
  _onPointerDown(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this._sendMessage("postPointerDownEvent", { instanceId: this._id, x: t, y: n });
  }
  _onPointerMove(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this._sendMessage("postPointerMoveEvent", { instanceId: this._id, x: t, y: n });
  }
  _onPointerEnter(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this._sendMessage("postPointerEnterEvent", { instanceId: this._id, x: t, y: n });
  }
  _onPointerLeave(e) {
    let { x: t, y: n } = this._getPointerPosition(e);
    this._sendMessage("postPointerExitEvent", { instanceId: this._id, x: t, y: n });
  }
  _setupStateMachineListeners() {
    return K(this, null, function* () {
      if (L1 && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
        let e = yield this._sendMessage("getStateMachineListeners", { instanceId: this._id });
        e.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), e.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), e.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), e.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), e.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod);
      }
    });
  }
  _cleanupStateMachineListeners() {
    L1 && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod));
  }
};
G(q4, "_workerManager", new a5()), G(q4, "_wasmUrl", "");
var u5 = ({ animationId: r, autoplay: e, backgroundColor: t, className: n, createDotLottie: i, data: a, dotLottieRefCallback: u, layout: c, loop: d, mode: f, playOnHover: b, renderConfig: y, segment: C, speed: g, src: I, style: v, themeData: P, themeId: L, useFrameInterpolation: A, workerId: T, ...U }) => {
  let [J, z] = o2(null), W = T3(null), e1 = T3(null), m1 = T3(u), v1 = { speed: g, mode: f, loop: d, useFrameInterpolation: A, segment: C, backgroundColor: t, autoplay: e, themeId: L, workerId: T, src: I, data: a, layout: c, renderConfig: y }, E = T3(v1);
  m1.current = u, e1.current = J, E.current = v1, C1(() => {
    typeof m1.current == "function" && J && m1.current(J);
  }, [J]);
  let j = Kt((_) => {
    if (W.current = _, _) {
      let M = i({ ...E.current, canvas: _ });
      z(M);
    } else J == null || J.destroy(), z(null);
  }, []);
  return C1(() => {
    var M, Y;
    let _ = (F) => {
      var B, a1;
      b && (F.type === "mouseenter" && ((B = e1.current) == null || B.play()), F.type === "mouseleave" && ((a1 = e1.current) == null || a1.pause()));
    };
    return (M = W.current) == null || M.addEventListener("mouseenter", _), (Y = W.current) == null || Y.addEventListener("mouseleave", _), () => {
      var F, B;
      (F = W.current) == null || F.removeEventListener("mouseenter", _), (B = W.current) == null || B.removeEventListener("mouseleave", _);
    };
  }, [b]), C1(() => () => {
    J && (J.destroy(), z(null));
  }, [J]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setSpeed(g ?? 1);
  }, [g]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setMode(f ?? "forward");
  }, [f]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setLoop(d ?? !1);
  }, [d]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setUseFrameInterpolation(A ?? !0);
  }, [A]), C1(() => {
    var _;
    typeof (C == null ? void 0 : C[0]) == "number" && typeof C[1] == "number" && ((_ = e1.current) == null || _.setSegment(C[0], C[1]));
  }, [C]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setBackgroundColor(t ?? "");
  }, [t]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setRenderConfig(y ?? {});
  }, [JSON.stringify(y)]), C1(() => {
    var _;
    typeof a != "string" && typeof a != "object" || ((_ = e1.current) == null || _.load({ data: a, ...E.current }));
  }, [a]), C1(() => {
    var _;
    typeof I == "string" && ((_ = e1.current) == null || _.load({ src: I, ...E.current }));
  }, [I]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setMarker(U.marker ?? "");
  }, [U.marker]), C1(() => {
    var _;
    (_ = e1.current) == null || _.loadAnimation(r ?? "");
  }, [r]), C1(() => {
    var _;
    typeof L == "string" && ((_ = e1.current) == null || _.setTheme(L));
  }, [L]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setThemeData(P ?? "");
  }, [P]), C1(() => {
    var _;
    (_ = e1.current) == null || _.setLayout(c ?? {});
  }, [c == null ? void 0 : c.fit, (c == null ? void 0 : c.align) && c.align[0], (c == null ? void 0 : c.align) && c.align[1]]), S.jsx("div", { className: n, ...!n && { style: { width: "100%", height: "100%", lineHeight: 0, ...v } }, children: S.jsx("canvas", { ref: j, style: { width: "100%", height: "100%" }, ...U }) });
}, c5 = (r) => new i5(r), l5 = (r) => S.jsx(u5, { ...r, createDotLottie: c5 });
const mi = ({
  message: r = "Page not found",
  styles: e = {}
}) => {
  const [t, n] = o2(""), {
    primaryColor: i = "#0055FF",
    secondaryColor: a = "#E0EBFF",
    textColor: u = "white",
    backgroundColor: c = "#ffffff",
    borderColor: d = "#cbd5e0",
    inputFocusColor: f = "#0055FF"
  } = e, b = (y) => {
    y.preventDefault(), t.trim() && (window.location.href = `/find-jobs?search=${encodeURIComponent(
      t
    )}`);
  };
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      style: {
        ...m5,
        backgroundColor: c,
        fontFamily: "Arial, sans-serif"
      },
      children: [
        /* @__PURE__ */ S.jsx(
          l5,
          {
            style: v5,
            autoplay: !0,
            loop: !0,
            src: "https://lottie.host/d1f4afd3-53fc-429b-838e-93f7070b4c62/hQBV6RREpn.lottie"
          }
        ),
        /* @__PURE__ */ S.jsx("h1", { style: { ...y5, color: i }, children: "404" }),
        /* @__PURE__ */ S.jsx("p", { style: g5, children: r }),
        /* @__PURE__ */ S.jsxs("form", { style: h5, onSubmit: b, children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "text",
              value: t,
              onChange: (y) => n(y.target.value),
              placeholder: "Search for jobs...",
              style: {
                ...d5,
                borderColor: d
              }
            }
          ),
          /* @__PURE__ */ S.jsx(
            "button",
            {
              type: "submit",
              style: {
                ...f5,
                backgroundColor: a,
                color: i
              },
              children: "Search"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx(
          "button",
          {
            style: {
              ...p5,
              backgroundColor: i,
              color: u
            },
            onClick: () => window.location.href = "/",
            children: "Return Home"
          }
        ),
        /* @__PURE__ */ S.jsx("style", { children: `
        input:focus-visible {
          outline: 2px solid ${f} !important;
          border-color: ${f};
        }
      ` })
      ]
    }
  );
}, h5 = {
  display: "flex",
  position: "relative",
  gap: "0.5rem",
  marginTop: "1rem",
  maxWidth: "320px",
  width: "100%"
}, d5 = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid",
  fontSize: "1rem"
}, f5 = {
  position: "absolute",
  height: "100%",
  right: "0",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s"
}, p5 = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
}, m5 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center"
}, v5 = {
  height: "320px",
  width: "320px"
}, y5 = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "0"
}, g5 = {
  fontSize: "1.25rem",
  color: "#4a5568",
  marginTop: "1rem"
}, A9 = !(typeof navigator > "u") && navigator.product === "ReactNative", T9 = { timeout: A9 ? 6e4 : 12e4 }, _5 = function(r) {
  const e = { ...T9, ...typeof r == "string" ? { url: r } : r };
  if (e.timeout = $9(e.timeout), e.query) {
    const { url: t, searchParams: n } = function(i) {
      const a = i.indexOf("?");
      if (a === -1) return { url: i, searchParams: new URLSearchParams() };
      const u = i.slice(0, a), c = i.slice(a + 1);
      if (!A9) return { url: u, searchParams: new URLSearchParams(c) };
      if (typeof decodeURIComponent != "function") throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
      const d = new URLSearchParams();
      for (const f of c.split("&")) {
        const [b, y] = f.split("=");
        b && d.append(z4(b), z4(y || ""));
      }
      return { url: u, searchParams: d };
    }(e.url);
    for (const [i, a] of Object.entries(e.query)) {
      if (a !== void 0) if (Array.isArray(a)) for (const c of a) n.append(i, c);
      else n.append(i, a);
      const u = n.toString();
      u && (e.url = `${t}?${u}`);
    }
  }
  return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e;
};
function z4(r) {
  return decodeURIComponent(r.replace(/\+/g, " "));
}
function $9(r) {
  if (r === !1 || r === 0) return !1;
  if (r.connect || r.socket) return r;
  const e = Number(r);
  return isNaN(e) ? $9(T9.timeout) : { connect: e, socket: e };
}
const w5 = /^https?:\/\//i, b5 = function(r) {
  if (!w5.test(r.url)) throw new Error(`"${r.url}" is not a valid URL`);
};
function R9(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
const C5 = ["request", "response", "progress", "error", "abort"], W4 = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function F9(r, e) {
  const t = [], n = W4.reduce((a, u) => (a[u] = a[u] || [], a), { processOptions: [_5], validateOptions: [b5] });
  function i(a) {
    const u = C5.reduce((g, I) => (g[I] = /* @__PURE__ */ function() {
      const v = /* @__PURE__ */ Object.create(null);
      let P = 0;
      return { publish: function(L) {
        for (const A in v) v[A](L);
      }, subscribe: function(L) {
        const A = P++;
        return v[A] = L, function() {
          delete v[A];
        };
      } };
    }(), g), {}), c = /* @__PURE__ */ ((g) => function(I, v, ...P) {
      const L = I === "onError";
      let A = v;
      for (let T = 0; T < g[I].length && (A = (0, g[I][T])(A, ...P), !L || A); T++) ;
      return A;
    })(n), d = c("processOptions", a);
    c("validateOptions", d);
    const f = { options: d, channels: u, applyMiddleware: c };
    let b;
    const y = u.request.subscribe((g) => {
      b = e(g, (I, v) => ((P, L, A) => {
        let T = P, U = L;
        if (!T) try {
          U = c("onResponse", L, A);
        } catch (J) {
          U = null, T = J;
        }
        T = T && c("onError", T, A), T ? u.error.publish(T) : U && u.response.publish(U);
      })(I, v, g));
    });
    u.abort.subscribe(() => {
      y(), b && b.abort();
    });
    const C = c("onReturn", u, f);
    return C === u && u.request.publish(f), C;
  }
  return i.use = function(a) {
    if (!a) throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof a == "function") throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (a.onReturn && n.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return W4.forEach((u) => {
      a[u] && n[u].push(a[u]);
    }), t.push(a), i;
  }, i.clone = () => F9(t, e), r.forEach(i.use), i;
}
var B4, H4, I5 = /* @__PURE__ */ R9(function() {
  if (H4) return B4;
  H4 = 1;
  var r = function(e) {
    return e.replace(/^\s+|\s+$/g, "");
  };
  return B4 = function(e) {
    if (!e) return {};
    for (var t = {}, n = r(e).split(`
`), i = 0; i < n.length; i++) {
      var a = n[i], u = a.indexOf(":"), c = r(a.slice(0, u)).toLowerCase(), d = r(a.slice(u + 1));
      typeof t[c] > "u" ? t[c] = d : (f = t[c], Object.prototype.toString.call(f) === "[object Array]" ? t[c].push(d) : t[c] = [t[c], d]);
    }
    var f;
    return t;
  };
}()), a3, u3, F2, c3, e2, l3, h3, E9;
let D0 = (E9 = class {
  constructor() {
    q(this, "onabort");
    q(this, "onerror");
    q(this, "onreadystatechange");
    q(this, "ontimeout");
    q(this, "readyState", 0);
    q(this, "response");
    q(this, "responseText", "");
    q(this, "responseType", "");
    q(this, "status");
    q(this, "statusText");
    q(this, "withCredentials");
    V(this, a3);
    V(this, u3);
    V(this, F2);
    V(this, c3, {});
    V(this, e2);
    V(this, l3, {});
    V(this, h3);
  }
  open(e, t, n) {
    var i;
    H(this, a3, e), H(this, u3, t), H(this, F2, ""), this.readyState = 1, (i = this.onreadystatechange) == null || i.call(this), H(this, e2, void 0);
  }
  abort() {
    m(this, e2) && m(this, e2).abort();
  }
  getAllResponseHeaders() {
    return m(this, F2);
  }
  setRequestHeader(e, t) {
    m(this, c3)[e] = t;
  }
  setInit(e, t = !0) {
    H(this, l3, e), H(this, h3, t);
  }
  send(e) {
    const t = this.responseType !== "arraybuffer", n = { ...m(this, l3), method: m(this, a3), headers: m(this, c3), body: e };
    typeof AbortController == "function" && m(this, h3) && (H(this, e2, new AbortController()), typeof EventTarget < "u" && m(this, e2).signal instanceof EventTarget && (n.signal = m(this, e2).signal)), typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"), fetch(m(this, u3), n).then((i) => {
      var a;
      return i.headers.forEach((u, c) => {
        H(this, F2, m(this, F2) + `${c}: ${u}\r
`);
      }), this.status = i.status, this.statusText = i.statusText, this.readyState = 3, (a = this.onreadystatechange) == null || a.call(this), t ? i.text() : i.arrayBuffer();
    }).then((i) => {
      var a;
      typeof i == "string" ? this.responseText = i : this.response = i, this.readyState = 4, (a = this.onreadystatechange) == null || a.call(this);
    }).catch((i) => {
      var a, u;
      i.name !== "AbortError" ? (a = this.onerror) == null || a.call(this, i) : (u = this.onabort) == null || u.call(this);
    });
  }
}, a3 = new WeakMap(), u3 = new WeakMap(), F2 = new WeakMap(), c3 = new WeakMap(), e2 = new WeakMap(), l3 = new WeakMap(), h3 = new WeakMap(), E9);
const N0 = typeof XMLHttpRequest == "function" ? "xhr" : "fetch", E5 = N0 === "xhr" ? XMLHttpRequest : D0, S5 = (r, e) => {
  const t = r.options, n = r.applyMiddleware("finalizeOptions", t), i = {}, a = r.applyMiddleware("interceptRequest", void 0, { adapter: N0, context: r });
  if (a) {
    const v = setTimeout(e, 0, null, a);
    return { abort: () => clearTimeout(v) };
  }
  let u = new E5();
  u instanceof D0 && typeof n.fetch == "object" && u.setInit(n.fetch, n.useAbortSignal ?? !0);
  const c = n.headers, d = n.timeout;
  let f = !1, b = !1, y = !1;
  if (u.onerror = (v) => {
    I(u instanceof D0 ? v instanceof Error ? v : new Error(`Request error while attempting to reach is ${n.url}`, { cause: v }) : new Error(`Request error while attempting to reach is ${n.url}${v.lengthComputable ? `(${v.loaded} of ${v.total} bytes transferred)` : ""}`));
  }, u.ontimeout = (v) => {
    I(new Error(`Request timeout while attempting to reach ${n.url}${v.lengthComputable ? `(${v.loaded} of ${v.total} bytes transferred)` : ""}`));
  }, u.onabort = () => {
    g(!0), f = !0;
  }, u.onreadystatechange = function() {
    d && (g(), i.socket = setTimeout(() => C("ESOCKETTIMEDOUT"), d.socket)), !f && u && u.readyState === 4 && u.status !== 0 && function() {
      if (!(f || b || y)) {
        if (u.status === 0) return void I(new Error("Unknown XHR error"));
        g(), b = !0, e(null, { body: u.response || (u.responseType === "" || u.responseType === "text" ? u.responseText : ""), url: n.url, method: n.method, headers: I5(u.getAllResponseHeaders()), statusCode: u.status, statusMessage: u.statusText });
      }
    }();
  }, u.open(n.method, n.url, !0), u.withCredentials = !!n.withCredentials, c && u.setRequestHeader) for (const v in c) c.hasOwnProperty(v) && u.setRequestHeader(v, c[v]);
  return n.rawBody && (u.responseType = "arraybuffer"), r.applyMiddleware("onRequest", { options: n, adapter: N0, request: u, context: r }), u.send(n.body || null), d && (i.connect = setTimeout(() => C("ETIMEDOUT"), d.connect)), { abort: function() {
    f = !0, u && u.abort();
  } };
  function C(v) {
    y = !0, u.abort();
    const P = new Error(v === "ESOCKETTIMEDOUT" ? `Socket timed out on request to ${n.url}` : `Connection timed out on request to ${n.url}`);
    P.code = v, r.channels.error.publish(P);
  }
  function g(v) {
    (v || f || u && u.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket);
  }
  function I(v) {
    if (b) return;
    g(!0), b = !0, u = null;
    const P = v || new Error(`Network error while attempting to reach ${n.url}`);
    P.isNetworkError = !0, P.request = n, e(P);
  }
}, x5 = (r = [], e = S5) => F9(r, e);
var V4, G4, J4, Y4, Q4, k0 = { exports: {} };
Q4 || (Q4 = 1, function(r, e) {
  e.formatArgs = function(n) {
    if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + r.exports.humanize(this.diff), !this.useColors) return;
    const i = "color: " + this.color;
    n.splice(1, 0, i, "color: inherit");
    let a = 0, u = 0;
    n[0].replace(/%[a-zA-Z%]/g, (c) => {
      c !== "%%" && (a++, c === "%c" && (u = a));
    }), n.splice(u, 0, i);
  }, e.save = function(n) {
    try {
      n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
    } catch {
    }
  }, e.load = function() {
    let n;
    try {
      n = e.storage.getItem("debug");
    } catch {
    }
    return !n && typeof process < "u" && "env" in process && (n = process.env.DEBUG), n;
  }, e.useColors = function() {
    if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
    if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
    let n;
    return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (n = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(n[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, e.storage = function() {
    try {
      return localStorage;
    } catch {
    }
  }(), e.destroy = /* @__PURE__ */ (() => {
    let n = !1;
    return () => {
      n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = console.debug || console.log || (() => {
  }), r.exports = (Y4 ? J4 : (Y4 = 1, J4 = function(n) {
    function i(c) {
      let d, f, b, y = null;
      function C(...g) {
        if (!C.enabled) return;
        const I = C, v = Number(/* @__PURE__ */ new Date()), P = v - (d || v);
        I.diff = P, I.prev = d, I.curr = v, d = v, g[0] = i.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
        let L = 0;
        g[0] = g[0].replace(/%([a-zA-Z%])/g, (A, T) => {
          if (A === "%%") return "%";
          L++;
          const U = i.formatters[T];
          if (typeof U == "function") {
            const J = g[L];
            A = U.call(I, J), g.splice(L, 1), L--;
          }
          return A;
        }), i.formatArgs.call(I, g), (I.log || i.log).apply(I, g);
      }
      return C.namespace = c, C.useColors = i.useColors(), C.color = i.selectColor(c), C.extend = a, C.destroy = i.destroy, Object.defineProperty(C, "enabled", { enumerable: !0, configurable: !1, get: () => y !== null ? y : (f !== i.namespaces && (f = i.namespaces, b = i.enabled(c)), b), set: (g) => {
        y = g;
      } }), typeof i.init == "function" && i.init(C), C;
    }
    function a(c, d) {
      const f = i(this.namespace + (typeof d > "u" ? ":" : d) + c);
      return f.log = this.log, f;
    }
    function u(c, d) {
      let f = 0, b = 0, y = -1, C = 0;
      for (; f < c.length; ) if (b < d.length && (d[b] === c[f] || d[b] === "*")) d[b] === "*" ? (y = b, C = f, b++) : (f++, b++);
      else {
        if (y === -1) return !1;
        b = y + 1, C++, f = C;
      }
      for (; b < d.length && d[b] === "*"; ) b++;
      return b === d.length;
    }
    return i.debug = i, i.default = i, i.coerce = function(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }, i.disable = function() {
      const c = [...i.names, ...i.skips.map((d) => "-" + d)].join(",");
      return i.enable(""), c;
    }, i.enable = function(c) {
      i.save(c), i.namespaces = c, i.names = [], i.skips = [];
      const d = (typeof c == "string" ? c : "").trim().replace(" ", ",").split(",").filter(Boolean);
      for (const f of d) f[0] === "-" ? i.skips.push(f.slice(1)) : i.names.push(f);
    }, i.enabled = function(c) {
      for (const d of i.skips) if (u(c, d)) return !1;
      for (const d of i.names) if (u(c, d)) return !0;
      return !1;
    }, i.humanize = function() {
      if (G4) return V4;
      G4 = 1;
      var c = 1e3, d = 60 * c, f = 60 * d, b = 24 * f, y = 7 * b;
      function C(g, I, v, P) {
        var L = I >= 1.5 * v;
        return Math.round(g / v) + " " + P + (L ? "s" : "");
      }
      return V4 = function(g, I) {
        I = I || {};
        var v, P, L = typeof g;
        if (L === "string" && g.length > 0) return function(A) {
          if (!((A = String(A)).length > 100)) {
            var T = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(A);
            if (T) {
              var U = parseFloat(T[1]);
              switch ((T[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * U;
                case "weeks":
                case "week":
                case "w":
                  return U * y;
                case "days":
                case "day":
                case "d":
                  return U * b;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return U * f;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return U * d;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return U * c;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return U;
                default:
                  return;
              }
            }
          }
        }(g);
        if (L === "number" && isFinite(g)) return I.long ? (v = g, (P = Math.abs(v)) >= b ? C(v, P, b, "day") : P >= f ? C(v, P, f, "hour") : P >= d ? C(v, P, d, "minute") : P >= c ? C(v, P, c, "second") : v + " ms") : function(A) {
          var T = Math.abs(A);
          return T >= b ? Math.round(A / b) + "d" : T >= f ? Math.round(A / f) + "h" : T >= d ? Math.round(A / d) + "m" : T >= c ? Math.round(A / c) + "s" : A + "ms";
        }(g);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(g));
      };
    }(), i.destroy = function() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(n).forEach((c) => {
      i[c] = n[c];
    }), i.names = [], i.skips = [], i.formatters = {}, i.selectColor = function(c) {
      let d = 0;
      for (let f = 0; f < c.length; f++) d = (d << 5) - d + c.charCodeAt(f), d |= 0;
      return i.colors[Math.abs(d) % i.colors.length];
    }, i.enable(i.load()), i;
  }))(e);
  const { formatters: t } = r.exports;
  t.j = function(n) {
    try {
      return JSON.stringify(n);
    } catch (i) {
      return "[UnexpectedJSONParseError]: " + i.message;
    }
  };
}(k0, k0.exports)), k0.exports;
const L5 = typeof Buffer > "u" ? () => !1 : (r) => Buffer.isBuffer(r);
function K4(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function M5(r) {
  if (K4(r) === !1) return !1;
  const e = r.constructor;
  if (e === void 0) return !0;
  const t = e.prototype;
  return !(K4(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1);
}
const j5 = ["boolean", "string", "number"];
function O5() {
  return { processOptions: (r) => {
    const e = r.body;
    return !e || typeof e.pipe == "function" || L5(e) || j5.indexOf(typeof e) === -1 && !Array.isArray(e) && !M5(e) ? r : Object.assign({}, r, { body: JSON.stringify(r.body), headers: Object.assign({}, r.headers, { "Content-Type": "application/json" }) });
  } };
}
function k5(r) {
  return { onResponse: (t) => {
    const n = t.headers["content-type"] || "", i = r && r.force || n.indexOf("application/json") !== -1;
    return t.body && n && i ? Object.assign({}, t, { body: e(t.body) }) : t;
  }, processOptions: (t) => Object.assign({}, t, { headers: Object.assign({ Accept: "application/json" }, t.headers) }) };
  function e(t) {
    try {
      return JSON.parse(t);
    } catch (n) {
      throw n.message = `Failed to parsed response body as JSON: ${n.message}`, n;
    }
  }
}
let i3 = {};
typeof globalThis < "u" ? i3 = globalThis : typeof window < "u" ? i3 = window : typeof global < "u" ? i3 = global : typeof self < "u" && (i3 = self);
var P5 = i3;
function A5(r = {}) {
  const e = r.implementation || P5.Observable;
  if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (t, n) => new e((i) => (t.error.subscribe((a) => i.error(a)), t.progress.subscribe((a) => i.next(Object.assign({ type: "progress" }, a))), t.response.subscribe((a) => {
    i.next(Object.assign({ type: "response" }, a)), i.complete();
  }), t.request.publish(n), () => t.abort.publish())) };
}
function T5() {
  return { onRequest: (r) => {
    if (r.adapter !== "xhr") return;
    const e = r.request, t = r.context;
    function n(i) {
      return (a) => {
        const u = a.lengthComputable ? a.loaded / a.total * 100 : -1;
        t.channels.progress.publish({ stage: i, percent: u, total: a.total, loaded: a.loaded, lengthComputable: a.lengthComputable });
      };
    }
    "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"));
  } };
}
var D9 = (r, e, t) => (t.method === "GET" || t.method === "HEAD") && (r.isNetworkError || !1);
function $5(r) {
  return 100 * Math.pow(2, r) + 100 * Math.random();
}
const H0 = (r = {}) => ((e) => {
  const t = e.maxRetries || 5, n = e.retryDelay || $5, i = e.shouldRetry;
  return { onError: (a, u) => {
    const c = u.options, d = c.maxRetries || t, f = c.retryDelay || n, b = c.shouldRetry || i, y = c.attemptNumber || 0;
    if ((C = c.body) !== null && typeof C == "object" && typeof C.pipe == "function" || !b(a, y, c) || y >= d) return a;
    var C;
    const g = Object.assign({}, u, { options: Object.assign({}, c, { attemptNumber: y + 1 }) });
    return setTimeout(() => u.channels.request.publish(g), f(y)), null;
  } };
})({ shouldRetry: D9, ...r });
H0.shouldRetry = D9;
var U0 = function(r, e) {
  return U0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
  }, U0(r, e);
};
function c2(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  U0(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
function R5(r, e, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(u) {
      u(a);
    });
  }
  return new (t || (t = Promise))(function(a, u) {
    function c(b) {
      try {
        f(n.next(b));
      } catch (y) {
        u(y);
      }
    }
    function d(b) {
      try {
        f(n.throw(b));
      } catch (y) {
        u(y);
      }
    }
    function f(b) {
      b.done ? a(b.value) : i(b.value).then(c, d);
    }
    f((n = n.apply(r, e || [])).next());
  });
}
function N9(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, u = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return u.next = c(0), u.throw = c(1), u.return = c(2), typeof Symbol == "function" && (u[Symbol.iterator] = function() {
    return this;
  }), u;
  function c(f) {
    return function(b) {
      return d([f, b]);
    };
  }
  function d(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; u && (u = 0, f[0] && (t = 0)), t; ) try {
      if (n = 1, i && (a = f[0] & 2 ? i.return : f[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, f[1])).done) return a;
      switch (i = 0, a && (f = [f[0] & 2, a.value]), f[0]) {
        case 0:
        case 1:
          a = f;
          break;
        case 4:
          return t.label++, { value: f[1], done: !1 };
        case 5:
          t.label++, i = f[1], f = [0];
          continue;
        case 7:
          f = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            t = 0;
            continue;
          }
          if (f[0] === 3 && (!a || f[1] > a[0] && f[1] < a[3])) {
            t.label = f[1];
            break;
          }
          if (f[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = f;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(f);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      f = e.call(r, t);
    } catch (b) {
      f = [6, b], i = 0;
    } finally {
      n = a = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function U2(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function a2(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), i, a = [], u;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (c) {
    u = { error: c };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function u2(r, e, t) {
  if (t || arguments.length === 2) for (var n = 0, i = e.length, a; n < i; n++)
    (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return r.concat(a || Array.prototype.slice.call(e));
}
function $2(r) {
  return this instanceof $2 ? (this.v = r, this) : new $2(r);
}
function F5(r, e, t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = t.apply(r, e || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), c("next"), c("throw"), c("return", u), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function u(g) {
    return function(I) {
      return Promise.resolve(I).then(g, y);
    };
  }
  function c(g, I) {
    n[g] && (i[g] = function(v) {
      return new Promise(function(P, L) {
        a.push([g, v, P, L]) > 1 || d(g, v);
      });
    }, I && (i[g] = I(i[g])));
  }
  function d(g, I) {
    try {
      f(n[g](I));
    } catch (v) {
      C(a[0][3], v);
    }
  }
  function f(g) {
    g.value instanceof $2 ? Promise.resolve(g.value.v).then(b, y) : C(a[0][2], g);
  }
  function b(g) {
    d("next", g);
  }
  function y(g) {
    d("throw", g);
  }
  function C(g, I) {
    g(I), a.shift(), a.length && d(a[0][0], a[0][1]);
  }
}
function D5(r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator], t;
  return e ? e.call(r) : (r = typeof U2 == "function" ? U2(r) : r[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
    return this;
  }, t);
  function n(a) {
    t[a] = r[a] && function(u) {
      return new Promise(function(c, d) {
        u = r[a](u), i(c, d, u.done, u.value);
      });
    };
  }
  function i(a, u, c, d) {
    Promise.resolve(d).then(function(f) {
      a({ value: f, done: c });
    }, u);
  }
}
function c1(r) {
  return typeof r == "function";
}
function V0(r) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = r(e);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var P0 = V0(function(r) {
  return function(t) {
    r(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function H3(r, e) {
  if (r) {
    var t = r.indexOf(e);
    0 <= t && r.splice(t, 1);
  }
}
var w3 = function() {
  function r(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return r.prototype.unsubscribe = function() {
    var e, t, n, i, a;
    if (!this.closed) {
      this.closed = !0;
      var u = this._parentage;
      if (u)
        if (this._parentage = null, Array.isArray(u))
          try {
            for (var c = U2(u), d = c.next(); !d.done; d = c.next()) {
              var f = d.value;
              f.remove(this);
            }
          } catch (v) {
            e = { error: v };
          } finally {
            try {
              d && !d.done && (t = c.return) && t.call(c);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          u.remove(this);
      var b = this.initialTeardown;
      if (c1(b))
        try {
          b();
        } catch (v) {
          a = v instanceof P0 ? v.errors : [v];
        }
      var y = this._finalizers;
      if (y) {
        this._finalizers = null;
        try {
          for (var C = U2(y), g = C.next(); !g.done; g = C.next()) {
            var I = g.value;
            try {
              X4(I);
            } catch (v) {
              a = a ?? [], v instanceof P0 ? a = u2(u2([], a2(a)), a2(v.errors)) : a.push(v);
            }
          }
        } catch (v) {
          n = { error: v };
        } finally {
          try {
            g && !g.done && (i = C.return) && i.call(C);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (a)
        throw new P0(a);
    }
  }, r.prototype.add = function(e) {
    var t;
    if (e && e !== this)
      if (this.closed)
        X4(e);
      else {
        if (e instanceof r) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(e);
      }
  }, r.prototype._hasParent = function(e) {
    var t = this._parentage;
    return t === e || Array.isArray(t) && t.includes(e);
  }, r.prototype._addParent = function(e) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e;
  }, r.prototype._removeParent = function(e) {
    var t = this._parentage;
    t === e ? this._parentage = null : Array.isArray(t) && H3(t, e);
  }, r.prototype.remove = function(e) {
    var t = this._finalizers;
    t && H3(t, e), e instanceof r && e._removeParent(this);
  }, r.EMPTY = function() {
    var e = new r();
    return e.closed = !0, e;
  }(), r;
}(), U9 = w3.EMPTY;
function q9(r) {
  return r instanceof w3 || r && "closed" in r && c1(r.remove) && c1(r.add) && c1(r.unsubscribe);
}
function X4(r) {
  c1(r) ? r() : r.unsubscribe();
}
var N5 = {
  Promise: void 0
}, U5 = {
  setTimeout: function(r, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, u2([r, e], a2(t)));
  },
  clearTimeout: function(r) {
    return clearTimeout(r);
  },
  delegate: void 0
};
function z9(r) {
  U5.setTimeout(function() {
    throw r;
  });
}
function Z4() {
}
function U3(r) {
  r();
}
var G0 = function(r) {
  c2(e, r);
  function e(t) {
    var n = r.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, q9(t) && t.add(n)) : n.destination = W5, n;
  }
  return e.create = function(t, n, i) {
    return new q2(t, n, i);
  }, e.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, e.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, r.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(t) {
    this.destination.next(t);
  }, e.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(w3), q5 = function() {
  function r(e) {
    this.partialObserver = e;
  }
  return r.prototype.next = function(e) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(e);
      } catch (n) {
        R3(n);
      }
  }, r.prototype.error = function(e) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(e);
      } catch (n) {
        R3(n);
      }
    else
      R3(e);
  }, r.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (t) {
        R3(t);
      }
  }, r;
}(), q2 = function(r) {
  c2(e, r);
  function e(t, n, i) {
    var a = r.call(this) || this, u;
    return c1(t) || !t ? u = {
      next: t ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : u = t, a.destination = new q5(u), a;
  }
  return e;
}(G0);
function R3(r) {
  z9(r);
}
function z5(r) {
  throw r;
}
var W5 = {
  closed: !0,
  next: Z4,
  error: z5,
  complete: Z4
}, J0 = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function e0(r) {
  return r;
}
function B5() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return W9(r);
}
function W9(r) {
  return r.length === 0 ? e0 : r.length === 1 ? r[0] : function(t) {
    return r.reduce(function(n, i) {
      return i(n);
    }, t);
  };
}
var p1 = function() {
  function r(e) {
    e && (this._subscribe = e);
  }
  return r.prototype.lift = function(e) {
    var t = new r();
    return t.source = this, t.operator = e, t;
  }, r.prototype.subscribe = function(e, t, n) {
    var i = this, a = V5(e) ? e : new q2(e, t, n);
    return U3(function() {
      var u = i, c = u.operator, d = u.source;
      a.add(c ? c.call(a, d) : d ? i._subscribe(a) : i._trySubscribe(a));
    }), a;
  }, r.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (t) {
      e.error(t);
    }
  }, r.prototype.forEach = function(e, t) {
    var n = this;
    return t = e9(t), new t(function(i, a) {
      var u = new q2({
        next: function(c) {
          try {
            e(c);
          } catch (d) {
            a(d), u.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
      n.subscribe(u);
    });
  }, r.prototype._subscribe = function(e) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(e);
  }, r.prototype[J0] = function() {
    return this;
  }, r.prototype.pipe = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    return W9(e)(this);
  }, r.prototype.toPromise = function(e) {
    var t = this;
    return e = e9(e), new e(function(n, i) {
      var a;
      t.subscribe(function(u) {
        return a = u;
      }, function(u) {
        return i(u);
      }, function() {
        return n(a);
      });
    });
  }, r.create = function(e) {
    return new r(e);
  }, r;
}();
function e9(r) {
  var e;
  return (e = r ?? N5.Promise) !== null && e !== void 0 ? e : Promise;
}
function H5(r) {
  return r && c1(r.next) && c1(r.error) && c1(r.complete);
}
function V5(r) {
  return r && r instanceof G0 || H5(r) && q9(r);
}
function G5(r) {
  return c1(r == null ? void 0 : r.lift);
}
function Q1(r) {
  return function(e) {
    if (G5(e))
      return e.lift(function(t) {
        try {
          return r(t, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function w2(r, e, t, n, i) {
  return new J5(r, e, t, n, i);
}
var J5 = function(r) {
  c2(e, r);
  function e(t, n, i, a, u, c) {
    var d = r.call(this, t) || this;
    return d.onFinalize = u, d.shouldUnsubscribe = c, d._next = n ? function(f) {
      try {
        n(f);
      } catch (b) {
        t.error(b);
      }
    } : r.prototype._next, d._error = a ? function(f) {
      try {
        a(f);
      } catch (b) {
        t.error(b);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._error, d._complete = i ? function() {
      try {
        i();
      } catch (f) {
        t.error(f);
      } finally {
        this.unsubscribe();
      }
    } : r.prototype._complete, d;
  }
  return e.prototype.unsubscribe = function() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      r.prototype.unsubscribe.call(this), !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }, e;
}(G0), Y5 = V0(function(r) {
  return function() {
    r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Y0 = function(r) {
  c2(e, r);
  function e() {
    var t = r.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return e.prototype.lift = function(t) {
    var n = new t9(this, this);
    return n.operator = t, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new Y5();
  }, e.prototype.next = function(t) {
    var n = this;
    U3(function() {
      var i, a;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var u = U2(n.currentObservers), c = u.next(); !c.done; c = u.next()) {
            var d = c.value;
            d.next(t);
          }
        } catch (f) {
          i = { error: f };
        } finally {
          try {
            c && !c.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(t) {
    var n = this;
    U3(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var i = n.observers; i.length; )
          i.shift().error(t);
      }
    });
  }, e.prototype.complete = function() {
    var t = this;
    U3(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), r.prototype._trySubscribe.call(this, t);
  }, e.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, e.prototype._innerSubscribe = function(t) {
    var n = this, i = this, a = i.hasError, u = i.isStopped, c = i.observers;
    return a || u ? U9 : (this.currentObservers = null, c.push(t), new w3(function() {
      n.currentObservers = null, H3(c, t);
    }));
  }, e.prototype._checkFinalizedStatuses = function(t) {
    var n = this, i = n.hasError, a = n.thrownError, u = n.isStopped;
    i ? t.error(a) : u && t.complete();
  }, e.prototype.asObservable = function() {
    var t = new p1();
    return t.source = this, t;
  }, e.create = function(t, n) {
    return new t9(t, n);
  }, e;
}(p1), t9 = function(r) {
  c2(e, r);
  function e(t, n) {
    var i = r.call(this) || this;
    return i.destination = t, i.source = n, i;
  }
  return e.prototype.next = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, t);
  }, e.prototype.error = function(t) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, t);
  }, e.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, e.prototype._subscribe = function(t) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && i !== void 0 ? i : U9;
  }, e;
}(Y0), Q0 = {
  now: function() {
    return (Q0.delegate || Date).now();
  },
  delegate: void 0
}, Q5 = function(r) {
  c2(e, r);
  function e(t, n, i) {
    t === void 0 && (t = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = Q0);
    var a = r.call(this) || this;
    return a._bufferSize = t, a._windowTime = n, a._timestampProvider = i, a._buffer = [], a._infiniteTimeWindow = !0, a._infiniteTimeWindow = n === 1 / 0, a._bufferSize = Math.max(1, t), a._windowTime = Math.max(1, n), a;
  }
  return e.prototype.next = function(t) {
    var n = this, i = n.isStopped, a = n._buffer, u = n._infiniteTimeWindow, c = n._timestampProvider, d = n._windowTime;
    i || (a.push(t), !u && a.push(c.now() + d)), this._trimBuffer(), r.prototype.next.call(this, t);
  }, e.prototype._subscribe = function(t) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(t), i = this, a = i._infiniteTimeWindow, u = i._buffer, c = u.slice(), d = 0; d < c.length && !t.closed; d += a ? 1 : 2)
      t.next(c[d]);
    return this._checkFinalizedStatuses(t), n;
  }, e.prototype._trimBuffer = function() {
    var t = this, n = t._bufferSize, i = t._timestampProvider, a = t._buffer, u = t._infiniteTimeWindow, c = (u ? 1 : 2) * n;
    if (n < 1 / 0 && c < a.length && a.splice(0, a.length - c), !u) {
      for (var d = i.now(), f = 0, b = 1; b < a.length && a[b] <= d; b += 2)
        f = b;
      f && a.splice(0, f + 1);
    }
  }, e;
}(Y0), K5 = function(r) {
  c2(e, r);
  function e(t, n) {
    return r.call(this) || this;
  }
  return e.prototype.schedule = function(t, n) {
    return this;
  }, e;
}(w3), r9 = {
  setInterval: function(r, e) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setInterval.apply(void 0, u2([r, e], a2(t)));
  },
  clearInterval: function(r) {
    return clearInterval(r);
  },
  delegate: void 0
}, X5 = function(r) {
  c2(e, r);
  function e(t, n) {
    var i = r.call(this, t, n) || this;
    return i.scheduler = t, i.work = n, i.pending = !1, i;
  }
  return e.prototype.schedule = function(t, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = t;
    var a = this.id, u = this.scheduler;
    return a != null && (this.id = this.recycleAsyncId(u, a, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(u, this.id, n), this;
  }, e.prototype.requestAsyncId = function(t, n, i) {
    return i === void 0 && (i = 0), r9.setInterval(t.flush.bind(t, this), i);
  }, e.prototype.recycleAsyncId = function(t, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && r9.clearInterval(n);
  }, e.prototype.execute = function(t, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(t, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(t, n) {
    var i = !1, a;
    try {
      this.work(t);
    } catch (u) {
      i = !0, a = u || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), a;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var t = this, n = t.id, i = t.scheduler, a = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, H3(a, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, r.prototype.unsubscribe.call(this);
    }
  }, e;
}(K5), n9 = function() {
  function r(e, t) {
    t === void 0 && (t = r.now), this.schedulerActionCtor = e, this.now = t;
  }
  return r.prototype.schedule = function(e, t, n) {
    return t === void 0 && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t);
  }, r.now = Q0.now, r;
}(), Z5 = function(r) {
  c2(e, r);
  function e(t, n) {
    n === void 0 && (n = n9.now);
    var i = r.call(this, t, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(t) {
    var n = this.actions;
    if (this._active) {
      n.push(t);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = t.execute(t.state, t.delay))
        break;
    while (t = n.shift());
    if (this._active = !1, i) {
      for (; t = n.shift(); )
        t.unsubscribe();
      throw i;
    }
  }, e;
}(n9), er = new Z5(X5), tr = er, B9 = new p1(function(r) {
  return r.complete();
});
function rr(r) {
  return r && c1(r.schedule);
}
function K0(r) {
  return r[r.length - 1];
}
function nr(r) {
  return c1(K0(r)) ? r.pop() : void 0;
}
function X0(r) {
  return rr(K0(r)) ? r.pop() : void 0;
}
function ir(r, e) {
  return typeof K0(r) == "number" ? r.pop() : e;
}
var H9 = function(r) {
  return r && typeof r.length == "number" && typeof r != "function";
};
function V9(r) {
  return c1(r == null ? void 0 : r.then);
}
function G9(r) {
  return c1(r[J0]);
}
function J9(r) {
  return Symbol.asyncIterator && c1(r == null ? void 0 : r[Symbol.asyncIterator]);
}
function Y9(r) {
  return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function sr() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Q9 = sr();
function K9(r) {
  return c1(r == null ? void 0 : r[Q9]);
}
function X9(r) {
  return F5(this, arguments, function() {
    var t, n, i, a;
    return N9(this, function(u) {
      switch (u.label) {
        case 0:
          t = r.getReader(), u.label = 1;
        case 1:
          u.trys.push([1, , 9, 10]), u.label = 2;
        case 2:
          return [4, $2(t.read())];
        case 3:
          return n = u.sent(), i = n.value, a = n.done, a ? [4, $2(void 0)] : [3, 5];
        case 4:
          return [2, u.sent()];
        case 5:
          return [4, $2(i)];
        case 6:
          return [4, u.sent()];
        case 7:
          return u.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return t.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function Z9(r) {
  return c1(r == null ? void 0 : r.getReader);
}
function K1(r) {
  if (r instanceof p1)
    return r;
  if (r != null) {
    if (G9(r))
      return or(r);
    if (H9(r))
      return ar(r);
    if (V9(r))
      return ur(r);
    if (J9(r))
      return ee(r);
    if (K9(r))
      return cr(r);
    if (Z9(r))
      return lr(r);
  }
  throw Y9(r);
}
function or(r) {
  return new p1(function(e) {
    var t = r[J0]();
    if (c1(t.subscribe))
      return t.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ar(r) {
  return new p1(function(e) {
    for (var t = 0; t < r.length && !e.closed; t++)
      e.next(r[t]);
    e.complete();
  });
}
function ur(r) {
  return new p1(function(e) {
    r.then(function(t) {
      e.closed || (e.next(t), e.complete());
    }, function(t) {
      return e.error(t);
    }).then(null, z9);
  });
}
function cr(r) {
  return new p1(function(e) {
    var t, n;
    try {
      for (var i = U2(r), a = i.next(); !a.done; a = i.next()) {
        var u = a.value;
        if (e.next(u), e.closed)
          return;
      }
    } catch (c) {
      t = { error: c };
    } finally {
      try {
        a && !a.done && (n = i.return) && n.call(i);
      } finally {
        if (t) throw t.error;
      }
    }
    e.complete();
  });
}
function ee(r) {
  return new p1(function(e) {
    hr(r, e).catch(function(t) {
      return e.error(t);
    });
  });
}
function lr(r) {
  return ee(X9(r));
}
function hr(r, e) {
  var t, n, i, a;
  return R5(this, void 0, void 0, function() {
    var u, c;
    return N9(this, function(d) {
      switch (d.label) {
        case 0:
          d.trys.push([0, 5, 6, 11]), t = D5(r), d.label = 1;
        case 1:
          return [4, t.next()];
        case 2:
          if (n = d.sent(), !!n.done) return [3, 4];
          if (u = n.value, e.next(u), e.closed)
            return [2];
          d.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return c = d.sent(), i = { error: c }, [3, 11];
        case 6:
          return d.trys.push([6, , 9, 10]), n && !n.done && (a = t.return) ? [4, a.call(t)] : [3, 8];
        case 7:
          d.sent(), d.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (i) throw i.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function M2(r, e, t, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var a = e.schedule(function() {
    t(), i ? r.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (r.add(a), !i)
    return a;
}
function te(r, e) {
  return e === void 0 && (e = 0), Q1(function(t, n) {
    t.subscribe(w2(n, function(i) {
      return M2(n, r, function() {
        return n.next(i);
      }, e);
    }, function() {
      return M2(n, r, function() {
        return n.complete();
      }, e);
    }, function(i) {
      return M2(n, r, function() {
        return n.error(i);
      }, e);
    }));
  });
}
function re(r, e) {
  return e === void 0 && (e = 0), Q1(function(t, n) {
    n.add(r.schedule(function() {
      return t.subscribe(n);
    }, e));
  });
}
function dr(r, e) {
  return K1(r).pipe(re(e), te(e));
}
function fr(r, e) {
  return K1(r).pipe(re(e), te(e));
}
function pr(r, e) {
  return new p1(function(t) {
    var n = 0;
    return e.schedule(function() {
      n === r.length ? t.complete() : (t.next(r[n++]), t.closed || this.schedule());
    });
  });
}
function mr(r, e) {
  return new p1(function(t) {
    var n;
    return M2(t, e, function() {
      n = r[Q9](), M2(t, e, function() {
        var i, a, u;
        try {
          i = n.next(), a = i.value, u = i.done;
        } catch (c) {
          t.error(c);
          return;
        }
        u ? t.complete() : t.next(a);
      }, 0, !0);
    }), function() {
      return c1(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function ne(r, e) {
  if (!r)
    throw new Error("Iterable cannot be null");
  return new p1(function(t) {
    M2(t, e, function() {
      var n = r[Symbol.asyncIterator]();
      M2(t, e, function() {
        n.next().then(function(i) {
          i.done ? t.complete() : t.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function vr(r, e) {
  return ne(X9(r), e);
}
function yr(r, e) {
  if (r != null) {
    if (G9(r))
      return dr(r, e);
    if (H9(r))
      return pr(r, e);
    if (V9(r))
      return fr(r, e);
    if (J9(r))
      return ne(r, e);
    if (K9(r))
      return mr(r, e);
    if (Z9(r))
      return vr(r, e);
  }
  throw Y9(r);
}
function b3(r, e) {
  return e ? yr(r, e) : K1(r);
}
function t0() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  var t = X0(r);
  return b3(r, t);
}
function ie(r, e) {
  var t = c1(r) ? r : function() {
    return r;
  }, n = function(i) {
    return i.error(t());
  };
  return new p1(n);
}
function gr(r) {
  return !!r && (r instanceof p1 || c1(r.lift) && c1(r.subscribe));
}
var se = V0(function(r) {
  return function() {
    r(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function Z(r, e) {
  return new Promise(function(t, n) {
    var i = !1, a;
    r.subscribe({
      next: function(u) {
        a = u, i = !0;
      },
      error: n,
      complete: function() {
        i ? t(a) : n(new se());
      }
    });
  });
}
function i9(r, e) {
  return new Promise(function(t, n) {
    var i = new q2({
      next: function(a) {
        t(a), i.unsubscribe();
      },
      error: n,
      complete: function() {
        n(new se());
      }
    });
    r.subscribe(i);
  });
}
function _r(r) {
  return r instanceof Date && !isNaN(r);
}
function M1(r, e) {
  return Q1(function(t, n) {
    var i = 0;
    t.subscribe(w2(n, function(a) {
      n.next(r.call(e, a, i++));
    }));
  });
}
var wr = Array.isArray;
function br(r, e) {
  return wr(e) ? r.apply(void 0, u2([], a2(e))) : r(e);
}
function Cr(r) {
  return M1(function(e) {
    return br(r, e);
  });
}
function Ir(r, e, t) {
  return t === void 0 && (t = e0), function(n) {
    s9(e, function() {
      for (var i = r.length, a = new Array(i), u = i, c = i, d = function(b) {
        s9(e, function() {
          var y = b3(r[b], e), C = !1;
          y.subscribe(w2(n, function(g) {
            a[b] = g, C || (C = !0, c--), c || n.next(t(a.slice()));
          }, function() {
            --u || n.complete();
          }));
        }, n);
      }, f = 0; f < i; f++)
        d(f);
    });
  };
}
function s9(r, e, t) {
  e();
}
function Er(r, e, t, n, i, a, u, c) {
  var d = [], f = 0, b = 0, y = !1, C = function() {
    y && !d.length && !f && e.complete();
  }, g = function(v) {
    return f < n ? I(v) : d.push(v);
  }, I = function(v) {
    f++;
    var P = !1;
    K1(t(v, b++)).subscribe(w2(e, function(L) {
      e.next(L);
    }, function() {
      P = !0;
    }, void 0, function() {
      if (P)
        try {
          f--;
          for (var L = function() {
            var A = d.shift();
            u || I(A);
          }; d.length && f < n; )
            L();
          C();
        } catch (A) {
          e.error(A);
        }
    }));
  };
  return r.subscribe(w2(e, g, function() {
    y = !0, C();
  })), function() {
  };
}
function C3(r, e, t) {
  return t === void 0 && (t = 1 / 0), c1(e) ? C3(function(n, i) {
    return M1(function(a, u) {
      return e(n, a, i, u);
    })(K1(r(n, i)));
  }, t) : (typeof e == "number" && (t = e), Q1(function(n, i) {
    return Er(n, i, r, t);
  }));
}
function oe(r) {
  return r === void 0 && (r = 1 / 0), C3(e0, r);
}
function Sr() {
  return oe(1);
}
function ae() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return Sr()(b3(r, X0(r)));
}
function ue(r) {
  return new p1(function(e) {
    K1(r()).subscribe(e);
  });
}
function xr(r, e, t) {
  return t === void 0 && (t = tr), new p1(function(n) {
    var i = _r(r) ? 1e3 - t.now() : r;
    i < 0 && (i = 0);
    var a = 0;
    return t.schedule(function() {
      n.closed || (n.next(a++), n.complete());
    }, i);
  });
}
function Lr() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  var t = X0(r), n = ir(r, 1 / 0), i = r;
  return i.length ? i.length === 1 ? K1(i[0]) : oe(n)(b3(i, t)) : B9;
}
var Mr = Array.isArray;
function jr(r) {
  return r.length === 1 && Mr(r[0]) ? r[0] : r;
}
function B2(r, e) {
  return Q1(function(t, n) {
    var i = 0;
    t.subscribe(w2(n, function(a) {
      return r.call(e, a, i++) && n.next(a);
    }));
  });
}
function Z0(r) {
  return Q1(function(e, t) {
    var n = null, i = !1, a;
    n = e.subscribe(w2(t, void 0, void 0, function(u) {
      a = K1(r(u, Z0(r)(e))), n ? (n.unsubscribe(), n = null, a.subscribe(t)) : i = !0;
    })), i && (n.unsubscribe(), n = null, a.subscribe(t));
  });
}
function ce() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  var t = nr(r);
  return t ? B5(ce.apply(void 0, u2([], a2(r))), Cr(t)) : Q1(function(n, i) {
    Ir(u2([n], a2(jr(r))))(i);
  });
}
function Or() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return ce.apply(void 0, u2([], a2(r)));
}
function le(r) {
  return Q1(function(e, t) {
    try {
      e.subscribe(t);
    } finally {
      t.add(r);
    }
  });
}
function he(r) {
  r === void 0 && (r = {});
  var e = r.connector, t = e === void 0 ? function() {
    return new Y0();
  } : e, n = r.resetOnError, i = n === void 0 ? !0 : n, a = r.resetOnComplete, u = a === void 0 ? !0 : a, c = r.resetOnRefCountZero, d = c === void 0 ? !0 : c;
  return function(f) {
    var b, y, C, g = 0, I = !1, v = !1, P = function() {
      y == null || y.unsubscribe(), y = void 0;
    }, L = function() {
      P(), b = C = void 0, I = v = !1;
    }, A = function() {
      var T = b;
      L(), T == null || T.unsubscribe();
    };
    return Q1(function(T, U) {
      g++, !v && !I && P();
      var J = C = C ?? t();
      U.add(function() {
        g--, g === 0 && !v && !I && (y = A0(A, d));
      }), J.subscribe(U), !b && g > 0 && (b = new q2({
        next: function(z) {
          return J.next(z);
        },
        error: function(z) {
          v = !0, P(), y = A0(L, i, z), J.error(z);
        },
        complete: function() {
          I = !0, P(), y = A0(L, u), J.complete();
        }
      }), K1(T).subscribe(b));
    })(f);
  };
}
function A0(r, e) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  if (e === !0) {
    r();
    return;
  }
  if (e !== !1) {
    var i = new q2({
      next: function() {
        i.unsubscribe(), r();
      }
    });
    return K1(e.apply(void 0, u2([], a2(t)))).subscribe(i);
  }
}
function kr(r, e, t) {
  var n, i = !1;
  return n = r, he({
    connector: function() {
      return new Q5(n, e, t);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function Pr(r, e, t) {
  var n = c1(r) || e || t ? { next: r, error: e, complete: t } : r;
  return n ? Q1(function(i, a) {
    var u;
    (u = n.subscribe) === null || u === void 0 || u.call(n);
    var c = !0;
    i.subscribe(w2(a, function(d) {
      var f;
      (f = n.next) === null || f === void 0 || f.call(n, d), a.next(d);
    }, function() {
      var d;
      c = !1, (d = n.complete) === null || d === void 0 || d.call(n), a.complete();
    }, function(d) {
      var f;
      c = !1, (f = n.error) === null || f === void 0 || f.call(n, d), a.error(d);
    }, function() {
      var d, f;
      c && ((d = n.unsubscribe) === null || d === void 0 || d.call(n)), (f = n.finalize) === null || f === void 0 || f.call(n);
    }));
  }) : e0;
}
function de(r) {
  return typeof r == "object" && r !== null && !Array.isArray(r);
}
var fe = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 }, e4 = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 }, Ar = new Array(4).fill(String.fromCodePoint(e4[0])).join("");
function Tr(r) {
  let e = JSON.stringify(r);
  return `${Ar}${Array.from(e).map((t) => {
    let n = t.charCodeAt(0);
    if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${t} (${n})`);
    return Array.from(n.toString(4).padStart(4, "0")).map((i) => String.fromCodePoint(e4[i])).join("");
  }).join("")}`;
}
function $r(r) {
  return !Number.isNaN(Number(r)) || /[a-z]/i.test(r) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(r) ? !1 : !!Date.parse(r);
}
function Rr(r) {
  try {
    new URL(r, r.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function yi(r, e, t = "auto") {
  return t === !0 || t === "auto" && ($r(r) || Rr(r)) ? r : `${r}${Tr(e)}`;
}
Object.fromEntries(Object.entries(e4).map((r) => r.reverse()));
Object.fromEntries(Object.entries(fe).map((r) => r.reverse()));
var Fr = `${Object.values(fe).map((r) => `\\u{${r.toString(16)}}`).join("")}`, o9 = new RegExp(`[${Fr}]{4,}`, "gu");
function Dr(r) {
  var e;
  return { cleaned: r.replace(o9, ""), encoded: ((e = r.match(o9)) == null ? void 0 : e[0]) || "" };
}
function Nr(r) {
  return r && JSON.parse(Dr(JSON.stringify(r)).cleaned);
}
function Ur(r) {
  return Nr(r);
}
const qr = "drafts", zr = "versions", z2 = ".", V3 = `${qr}${z2}`, pe = `${zr}${z2}`;
function r0(r) {
  return r.startsWith(V3);
}
function n0(r) {
  return r.startsWith(pe);
}
function Wr(r) {
  if (n0(r)) {
    const e = s0(r);
    return V3 + e;
  }
  return r0(r) ? r : V3 + r;
}
function i0(r, e) {
  if (e === "drafts" || e === "published")
    throw new Error('Version can not be "published" or "drafts"');
  return `${pe}${e}${z2}${s0(r)}`;
}
function me(r) {
  if (!n0(r)) return;
  const [e, t, ...n] = r.split(z2);
  return t;
}
function s0(r) {
  return n0(r) ? r.split(z2).slice(2).join(z2) : r0(r) ? r.slice(V3.length) : r;
}
let Br = (r) => crypto.getRandomValues(new Uint8Array(r)), Hr = (r, e, t) => {
  let n = (2 << Math.log(r.length - 1) / Math.LN2) - 1, i = -~(1.6 * n * e / r.length);
  return (a = e) => {
    let u = "";
    for (; ; ) {
      let c = t(i), d = i | 0;
      for (; d--; )
        if (u += r[c[d] & n] || "", u.length === a) return u;
    }
  };
}, Vr = (r, e = 21) => Hr(r, e, Br);
const a9 = /\r\n|[\n\r\u2028\u2029]/;
function Gr(r, e, t) {
  const n = r.split(a9), i = {
    start: u9(e.start, n),
    end: e.end ? u9(e.end, n) : void 0
  }, { start: a, end: u, markerLines: c } = Jr(i, n), d = `${u}`.length;
  return r.split(a9, u).slice(a, u).map((f, b) => {
    const y = a + 1 + b, C = ` ${` ${y}`.slice(-d)} |`, g = c[y], I = !c[y + 1];
    if (!g)
      return ` ${C}${f.length > 0 ? ` ${f}` : ""}`;
    let v = "";
    if (Array.isArray(g)) {
      const P = f.slice(0, Math.max(g[0] - 1, 0)).replace(/[^\t]/g, " "), L = g[1] || 1;
      v = [
        `
 `,
        C.replace(/\d/g, " "),
        " ",
        P,
        "^".repeat(L)
      ].join(""), I && t && (v += " " + t);
    }
    return [">", C, f.length > 0 ? ` ${f}` : "", v].join("");
  }).join(`
`);
}
function Jr(r, e) {
  const t = { ...r.start }, n = { ...t, ...r.end }, i = 2, a = 3, u = t.line ?? -1, c = t.column ?? 0, d = n.line, f = n.column;
  let b = Math.max(u - (i + 1), 0), y = Math.min(e.length, d + a);
  u === -1 && (b = 0), d === -1 && (y = e.length);
  const C = d - u, g = {};
  if (C)
    for (let I = 0; I <= C; I++) {
      const v = I + u;
      if (!c)
        g[v] = !0;
      else if (I === 0) {
        const P = e[v - 1].length;
        g[v] = [c, P - c + 1];
      } else if (I === C)
        g[v] = [0, f];
      else {
        const P = e[v - I].length;
        g[v] = [0, P];
      }
    }
  else
    c === f ? c ? g[u] = [c, 0] : g[u] = !0 : g[u] = [c, f - c];
  return { start: b, end: y, markerLines: g };
}
function u9(r, e) {
  var n;
  let t = 0;
  for (let i = 0; i < e.length; i++) {
    const a = e[i].length + 1;
    if (t + a > r)
      return {
        line: i + 1,
        // 1-based line
        column: r - t
        // 0-based column
      };
    t += a;
  }
  return {
    line: e.length,
    column: ((n = e[e.length - 1]) == null ? void 0 : n.length) ?? 0
  };
}
const T0 = 5;
class Yr extends Error {
  constructor(t, n) {
    const i = ve(t, n);
    super(i.message);
    q(this, "response");
    q(this, "statusCode", 400);
    q(this, "responseBody");
    q(this, "details");
    Object.assign(this, i);
  }
}
class Qr extends Error {
  constructor(t) {
    const n = ve(t);
    super(n.message);
    q(this, "response");
    q(this, "statusCode", 500);
    q(this, "responseBody");
    q(this, "details");
    Object.assign(this, n);
  }
}
function ve(r, e) {
  var a, u;
  const t = r.body, n = {
    response: r,
    statusCode: r.statusCode,
    responseBody: Zr(t, r),
    message: "",
    details: void 0
  };
  if (!de(t))
    return n.message = $0(r, t), n;
  const i = t.error;
  if (typeof i == "string" && typeof t.message == "string")
    return n.message = `${i} - ${t.message}`, n;
  if (typeof i != "object" || i === null)
    return typeof i == "string" ? n.message = i : typeof t.message == "string" ? n.message = t.message : n.message = $0(r, t), n;
  if (Kr(i) || Xr(i)) {
    const c = i.items || [], d = c.slice(0, T0).map((b) => {
      var y;
      return (y = b.error) == null ? void 0 : y.description;
    }).filter(Boolean);
    let f = d.length ? `:
- ${d.join(`
- `)}` : "";
    return c.length > T0 && (f += `
...and ${c.length - T0} more`), n.message = `${i.description}${f}`, n.details = t.error, n;
  }
  if (ye(i)) {
    const c = (u = (a = e == null ? void 0 : e.options) == null ? void 0 : a.query) == null ? void 0 : u.tag;
    return n.message = ge(i, c), n.details = t.error, n;
  }
  return "description" in i && typeof i.description == "string" ? (n.message = i.description, n.details = i, n) : (n.message = $0(r, t), n);
}
function Kr(r) {
  return "type" in r && r.type === "mutationError" && "description" in r && typeof r.description == "string";
}
function Xr(r) {
  return "type" in r && r.type === "actionError" && "description" in r && typeof r.description == "string";
}
function ye(r) {
  return de(r) && r.type === "queryParseError" && typeof r.query == "string" && typeof r.start == "number" && typeof r.end == "number";
}
function ge(r, e) {
  const { query: t, start: n, end: i, description: a } = r;
  if (!t || typeof n > "u")
    return `GROQ query parse error: ${a}`;
  const u = e ? `

Tag: ${e}` : "";
  return `GROQ query parse error:
${Gr(t, { start: n, end: i }, a)}${u}`;
}
function $0(r, e) {
  const t = typeof e == "string" ? ` (${en(e, 100)})` : "", n = r.statusMessage ? ` ${r.statusMessage}` : "";
  return `${r.method}-request to ${r.url} resulted in HTTP ${r.statusCode}${n}${t}`;
}
function Zr(r, e) {
  return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(r, null, 2) : r;
}
function en(r, e) {
  return r.length > e ? `${r.slice(0, e)}…` : r;
}
class tn extends Error {
  constructor({ projectId: t }) {
    super("CorsOriginError");
    q(this, "projectId");
    q(this, "addOriginUrl");
    this.name = "CorsOriginError", this.projectId = t;
    const n = new URL(`https://sanity.io/manage/project/${t}/api`);
    if (typeof location < "u") {
      const { origin: i } = location;
      n.searchParams.set("cors", "add"), n.searchParams.set("origin", i), this.addOriginUrl = n, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${n}`;
    } else
      this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${n}`;
  }
}
const rn = {
  onResponse: (r, e) => {
    if (r.statusCode >= 500)
      throw new Qr(r);
    if (r.statusCode >= 400)
      throw new Yr(r, e);
    return r;
  }
};
function nn() {
  const r = {};
  return {
    onResponse: (e) => {
      const t = e.headers["x-sanity-warning"], n = Array.isArray(t) ? t : [t];
      for (const i of n)
        !i || r[i] || (r[i] = !0, console.warn(i));
      return e;
    }
  };
}
function c9(r) {
  return x5([
    H0({ shouldRetry: sn }),
    ...r,
    nn(),
    O5(),
    k5(),
    T5(),
    rn,
    A5({ implementation: p1 })
  ]);
}
function sn(r, e, t) {
  if (t.maxRetries === 0) return !1;
  const n = t.method === "GET" || t.method === "HEAD", i = (t.uri || t.url).startsWith("/data/query"), a = r.response && (r.response.statusCode === 429 || r.response.statusCode === 502 || r.response.statusCode === 503);
  return (n || i) && a ? !0 : H0.shouldRetry(r, e, t);
}
const on = "https://www.sanity.io/help/";
function t4(r) {
  return on + r;
}
const l9 = ["image", "file"], h9 = ["before", "after", "replace"], _e = (r) => {
  if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(r))
    throw new Error(
      "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
    );
}, an = (r) => {
  if (!/^[-a-z0-9]+$/i.test(r))
    throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
}, un = (r) => {
  if (l9.indexOf(r) === -1)
    throw new Error(`Invalid asset type: ${r}. Must be one of ${l9.join(", ")}`);
}, s3 = (r, e) => {
  if (e === null || typeof e != "object" || Array.isArray(e))
    throw new Error(`${r}() takes an object of properties`);
}, we = (r, e) => {
  if (typeof e != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes(".."))
    throw new Error(`${r}(): "${e}" is not a valid document ID`);
}, W2 = (r, e) => {
  if (!e._id)
    throw new Error(`${r}() requires that the document contains an ID ("_id" property)`);
  we(r, e._id);
}, cn = (r, e) => {
  if (typeof e != "string")
    throw new Error(`\`${r}()\`: \`${e}\` is not a valid document type`);
}, be = (r, e) => {
  if (!e._type)
    throw new Error(`\`${r}()\` requires that the document contains a type (\`_type\` property)`);
  cn(r, e._type);
}, ln = (r, e) => {
  if (e._id && e._id !== r)
    throw new Error(
      `The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${r}\`)`
    );
}, hn = (r, e, t) => {
  const n = "insert(at, selector, items)";
  if (h9.indexOf(r) === -1) {
    const i = h9.map((a) => `"${a}"`).join(", ");
    throw new Error(`${n} takes an "at"-argument which is one of: ${i}`);
  }
  if (typeof e != "string")
    throw new Error(`${n} takes a "selector"-argument which must be a string`);
  if (!Array.isArray(t))
    throw new Error(`${n} takes an "items"-argument which must be an array`);
}, O2 = (r) => {
  if (!r.dataset)
    throw new Error("`dataset` must be provided to perform queries");
  return r.dataset || "";
}, Ce = (r) => {
  if (typeof r != "string" || !/^[a-z0-9._-]{1,75}$/i.test(r))
    throw new Error(
      "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
    );
  return r;
}, Ie = (r) => {
  if (!r["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type: e, id: t } = r["~experimental_resource"];
  switch (e) {
    case "dataset": {
      if (t.split(".").length !== 2)
        throw new Error('Dataset resource ID must be in the format "project.dataset"');
      return;
    }
    case "dashboard":
    case "media-library":
    case "canvas":
      return;
    default:
      throw new Error(`Unsupported resource type: ${e.toString()}`);
  }
}, Y1 = (r, e) => {
  if (e["~experimental_resource"])
    throw new Error(`\`${r}\` does not support resource-based operations`);
};
function dn(r) {
  let e = !1, t;
  return (...n) => (e || (t = r(...n), e = !0), t);
}
const k2 = (r) => (
  // eslint-disable-next-line no-console
  dn((...e) => console.warn(r.join(" "), ...e))
), fn = k2([
  "Because you set `withCredentials` to true, we will override your `useCdn`",
  "setting to be false since (cookie-based) credentials are never set on the CDN"
]), pn = k2([
  "Since you haven't set a value for `useCdn`, we will deliver content using our",
  "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
  "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]), mn = k2([
  "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
  "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
]), vn = k2([
  "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"
]), yn = k2([
  "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
  `See ${t4(
    "js-client-browser-token"
  )} for more information and how to hide this warning.`
]), gn = k2([
  "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
  "This is no longer supported - only token will be used - remove `withCredentials: true`."
]), _n = k2([
  "Using the Sanity client without specifying an API version is deprecated.",
  `See ${t4("js-client-api-version")}`
]), wn = "apicdn.sanity.io", o3 = {
  apiHost: "https://api.sanity.io",
  apiVersion: "1",
  useProjectHostname: !0,
  stega: { enabled: !1 }
}, bn = ["localhost", "127.0.0.1", "0.0.0.0"], Cn = (r) => bn.indexOf(r) !== -1;
function In(r) {
  if (r === "1" || r === "X")
    return;
  const e = new Date(r);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(r) && e instanceof Date && e.getTime() > 0))
    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function Ee(r) {
  if (Array.isArray(r) && r.length > 1 && r.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
    );
}
const Se = (r, e) => {
  const t = {
    ...e,
    ...r,
    stega: {
      ...typeof e.stega == "boolean" ? { enabled: e.stega } : e.stega || o3.stega,
      ...typeof r.stega == "boolean" ? { enabled: r.stega } : r.stega || {}
    }
  };
  t.apiVersion || _n();
  const n = {
    ...o3,
    ...t
  }, i = n.useProjectHostname && !n["~experimental_resource"];
  if (typeof Promise > "u") {
    const C = t4("js-client-promise-polyfill");
    throw new Error(`No native Promise-implementation found, polyfill needed - see ${C}`);
  }
  if (i && !n.projectId)
    throw new Error("Configuration must contain `projectId`");
  if (n["~experimental_resource"] && Ie(n), typeof n.perspective < "u" && Ee(n.perspective), "encodeSourceMap" in n)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
    );
  if ("encodeSourceMapAtPath" in n)
    throw new Error(
      "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
    );
  if (typeof n.stega.enabled != "boolean")
    throw new Error(`stega.enabled must be a boolean, received ${n.stega.enabled}`);
  if (n.stega.enabled && n.stega.studioUrl === void 0)
    throw new Error("stega.studioUrl must be defined when stega.enabled is true");
  if (n.stega.enabled && typeof n.stega.studioUrl != "string" && typeof n.stega.studioUrl != "function")
    throw new Error(
      `stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`
    );
  const a = typeof window < "u" && window.location && window.location.hostname, u = a && Cn(window.location.hostname), c = !!n.token;
  n.withCredentials && c && (gn(), n.withCredentials = !1), a && u && c && n.ignoreBrowserTokenWarning !== !0 ? yn() : typeof n.useCdn > "u" && pn(), i && an(n.projectId), n.dataset && _e(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? Ce(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === o3.apiHost, n.useCdn === !0 && n.withCredentials && fn(), n.useCdn = n.useCdn !== !1 && !n.withCredentials, In(n.apiVersion);
  const d = n.apiHost.split("://", 2), f = d[0], b = d[1], y = n.isDefaultApi ? wn : b;
  return i ? (n.url = `${f}://${n.projectId}.${b}/v${n.apiVersion}`, n.cdnUrl = `${f}://${n.projectId}.${y}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n;
};
class xe extends Error {
  constructor() {
    super(...arguments);
    q(this, "name", "ConnectionFailedError");
  }
}
class En extends Error {
  constructor(t, n, i = {}) {
    super(t, i);
    q(this, "name", "DisconnectError");
    q(this, "reason");
    this.reason = n;
  }
}
class Sn extends Error {
  constructor(t, n) {
    super(t);
    q(this, "name", "ChannelError");
    q(this, "data");
    this.data = n;
  }
}
class xn extends Error {
  constructor(t, n, i = {}) {
    super(t, i);
    q(this, "name", "MessageError");
    q(this, "data");
    this.data = n;
  }
}
class d9 extends Error {
  constructor() {
    super(...arguments);
    q(this, "name", "MessageParseError");
  }
}
const Ln = ["channelError", "disconnect"];
function Le(r, e) {
  return ue(() => {
    const t = r();
    return gr(t) ? t : t0(t);
  }).pipe(C3((t) => Mn(t, e)));
}
function Mn(r, e) {
  return new p1((t) => {
    const n = e.includes("open"), i = e.includes("reconnect");
    function a(f) {
      if ("data" in f) {
        const [b, y] = f9(f);
        t.error(
          b ? new d9("Unable to parse EventSource error message", { cause: y }) : new xn((y == null ? void 0 : y.data).message, y)
        );
        return;
      }
      r.readyState === r.CLOSED ? t.error(new xe("EventSource connection failed")) : i && t.next({ type: "reconnect" });
    }
    function u() {
      t.next({ type: "open" });
    }
    function c(f) {
      var C;
      const [b, y] = f9(f);
      if (b) {
        t.error(
          new d9("Unable to parse EventSource message", { cause: b })
        );
        return;
      }
      if (f.type === "channelError") {
        const g = new URL(r.url).searchParams.get("tag");
        t.error(new Sn(jn(y == null ? void 0 : y.data, g), y.data));
        return;
      }
      if (f.type === "disconnect") {
        t.error(
          new En(
            `Server disconnected client: ${((C = y.data) == null ? void 0 : C.reason) || "unknown error"}`
          )
        );
        return;
      }
      t.next({
        type: f.type,
        id: f.lastEventId,
        ...y.data ? { data: y.data } : {}
      });
    }
    r.addEventListener("error", a), n && r.addEventListener("open", u);
    const d = [.../* @__PURE__ */ new Set([...Ln, ...e])].filter((f) => f !== "error" && f !== "open" && f !== "reconnect");
    return d.forEach((f) => r.addEventListener(f, c)), () => {
      r.removeEventListener("error", a), n && r.removeEventListener("open", u), d.forEach((f) => r.removeEventListener(f, c)), r.close();
    };
  });
}
function f9(r) {
  try {
    const e = typeof r.data == "string" && JSON.parse(r.data);
    return [
      null,
      {
        type: r.type,
        id: r.lastEventId,
        ...On(e) ? {} : { data: e }
      }
    ];
  } catch (e) {
    return [e, null];
  }
}
function jn(r, e) {
  const t = r.error;
  return t ? ye(t) ? ge(t, e) : t.description ? t.description : typeof t == "string" ? t : JSON.stringify(t, null, 2) : r.message || "Unknown listener error";
}
function On(r) {
  for (const e in r)
    return !1;
  return !0;
}
function Me(r) {
  if (typeof r == "string")
    return { id: r };
  if (Array.isArray(r))
    return { query: "*[_id in $ids]", params: { ids: r } };
  if (typeof r == "object" && r !== null && "query" in r && typeof r.query == "string")
    return "params" in r && typeof r.params == "object" && r.params !== null ? { query: r.query, params: r.params } : { query: r.query };
  const e = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`"
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${e}`);
}
class je {
  constructor(e, t = {}) {
    q(this, "selection");
    q(this, "operations");
    this.selection = e, this.operations = t;
  }
  /**
   * Sets the given attributes to the document. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */
  set(e) {
    return this._assign("set", e);
  }
  /**
   * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
   */
  setIfMissing(e) {
    return this._assign("setIfMissing", e);
  }
  /**
   * Performs a "diff-match-patch" operation on the string attributes provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
   */
  diffMatchPatch(e) {
    return s3("diffMatchPatch", e), this._assign("diffMatchPatch", e);
  }
  /**
   * Unsets the attribute paths provided.
   * The operation is added to the current patch, ready to be commited by `commit()`
   *
   * @param attrs - Attribute paths to unset.
   */
  unset(e) {
    if (!Array.isArray(e))
      throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
    return this.operations = Object.assign({}, this.operations, { unset: e }), this;
  }
  /**
   * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
   */
  inc(e) {
    return this._assign("inc", e);
  }
  /**
   * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
   *
   * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
   */
  dec(e) {
    return this._assign("dec", e);
  }
  /**
   * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
   *
   * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
   * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
   * @param items - Array of items to insert/replace
   */
  insert(e, t, n) {
    return hn(e, t, n), this._assign("insert", { [e]: t, items: n });
  }
  /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */
  append(e, t) {
    return this.insert("after", `${e}[-1]`, t);
  }
  /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */
  prepend(e, t) {
    return this.insert("before", `${e}[0]`, t);
  }
  /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */
  splice(e, t, n, i) {
    const a = typeof n > "u" || n === -1, u = t < 0 ? t - 1 : t, c = a ? -1 : Math.max(0, t + n), d = u < 0 && c >= 0 ? "" : c, f = `${e}[${u}:${d}]`;
    return this.insert("replace", f, i || []);
  }
  /**
   * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
   *
   * @param rev - Revision to lock the patch to
   */
  ifRevisionId(e) {
    return this.operations.ifRevisionID = e, this;
  }
  /**
   * Return a plain JSON representation of the patch
   */
  serialize() {
    return { ...Me(this.selection), ...this.operations };
  }
  /**
   * Return a plain JSON representation of the patch
   */
  toJSON() {
    return this.serialize();
  }
  /**
   * Clears the patch of all operations
   */
  reset() {
    return this.operations = {}, this;
  }
  _assign(e, t, n = !0) {
    return s3(e, t), this.operations = Object.assign({}, this.operations, {
      [e]: Object.assign({}, n && this.operations[e] || {}, t)
    }), this;
  }
  _set(e, t) {
    return this._assign(e, t, !1);
  }
}
var E2;
const s4 = class s4 extends je {
  constructor(t, n, i) {
    super(t, n);
    V(this, E2);
    H(this, E2, i);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new s4(this.selection, { ...this.operations }, m(this, E2));
  }
  commit(t) {
    if (!m(this, E2))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const n = typeof this.selection == "string", i = Object.assign({ returnFirst: n, returnDocuments: !0 }, t);
    return m(this, E2).mutate({ patch: this.serialize() }, i);
  }
};
E2 = new WeakMap();
let j2 = s4;
var S2;
const o4 = class o4 extends je {
  constructor(t, n, i) {
    super(t, n);
    V(this, S2);
    H(this, S2, i);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new o4(this.selection, { ...this.operations }, m(this, S2));
  }
  commit(t) {
    if (!m(this, S2))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const n = typeof this.selection == "string", i = Object.assign({ returnFirst: n, returnDocuments: !0 }, t);
    return m(this, S2).mutate({ patch: this.serialize() }, i);
  }
};
S2 = new WeakMap();
let _2 = o4;
const Oe = { returnDocuments: !1 };
class ke {
  constructor(e = [], t) {
    q(this, "operations");
    q(this, "trxId");
    this.operations = e, this.trxId = t;
  }
  /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */
  create(e) {
    return s3("create", e), this._add({ create: e });
  }
  /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */
  createIfNotExists(e) {
    const t = "createIfNotExists";
    return s3(t, e), W2(t, e), this._add({ [t]: e });
  }
  /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */
  createOrReplace(e) {
    const t = "createOrReplace";
    return s3(t, e), W2(t, e), this._add({ [t]: e });
  }
  /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */
  delete(e) {
    return we("delete", e), this._add({ delete: { id: e } });
  }
  transactionId(e) {
    return e ? (this.trxId = e, this) : this.trxId;
  }
  /**
   * Return a plain JSON representation of the transaction
   */
  serialize() {
    return [...this.operations];
  }
  /**
   * Return a plain JSON representation of the transaction
   */
  toJSON() {
    return this.serialize();
  }
  /**
   * Clears the transaction of all operations
   */
  reset() {
    return this.operations = [], this;
  }
  _add(e) {
    return this.operations.push(e), this;
  }
}
var t2;
const a4 = class a4 extends ke {
  constructor(t, n, i) {
    super(t, i);
    V(this, t2);
    H(this, t2, n);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new a4([...this.operations], m(this, t2), this.trxId);
  }
  commit(t) {
    if (!m(this, t2))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return m(this, t2).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, Oe, t || {})
    );
  }
  patch(t, n) {
    const i = typeof n == "function", a = typeof t != "string" && t instanceof _2, u = typeof t == "object" && ("query" in t || "id" in t);
    if (a)
      return this._add({ patch: t.serialize() });
    if (i) {
      const c = n(new _2(t, {}, m(this, t2)));
      if (!(c instanceof _2))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: c.serialize() });
    }
    if (u) {
      const c = new _2(t, n || {}, m(this, t2));
      return this._add({ patch: c.serialize() });
    }
    return this._add({ patch: { id: t, ...n } });
  }
};
t2 = new WeakMap();
let G3 = a4;
var d2;
const u4 = class u4 extends ke {
  constructor(t, n, i) {
    super(t, i);
    V(this, d2);
    H(this, d2, n);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new u4([...this.operations], m(this, d2), this.trxId);
  }
  commit(t) {
    if (!m(this, d2))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return m(this, d2).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, Oe, t || {})
    );
  }
  patch(t, n) {
    const i = typeof n == "function";
    if (typeof t != "string" && t instanceof j2)
      return this._add({ patch: t.serialize() });
    if (i) {
      const a = n(new j2(t, {}, m(this, d2)));
      if (!(a instanceof j2))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: a.serialize() });
    }
    return this._add({ patch: { id: t, ...n } });
  }
};
d2 = new WeakMap();
let J3 = u4;
const kn = "X-Sanity-Project-ID";
function Pn(r, e = {}) {
  const t = {};
  r.headers && Object.assign(t, r.headers);
  const n = e.token || r.token;
  n && (t.Authorization = `Bearer ${n}`), !e.useGlobalApi && !r.useProjectHostname && r.projectId && (t[kn] = r.projectId);
  const i = !!(typeof e.withCredentials > "u" ? r.withCredentials : e.withCredentials), a = typeof e.timeout > "u" ? r.timeout : e.timeout;
  return Object.assign({}, e, {
    headers: Object.assign({}, t, e.headers || {}),
    timeout: typeof a > "u" ? 5 * 60 * 1e3 : a,
    proxy: e.proxy || r.proxy,
    json: !0,
    withCredentials: i,
    fetch: typeof e.fetch == "object" && typeof r.fetch == "object" ? { ...r.fetch, ...e.fetch } : e.fetch || r.fetch
  });
}
const Pe = ({
  query: r,
  params: e = {},
  options: t = {}
}) => {
  const n = new URLSearchParams(), { tag: i, includeMutations: a, returnQuery: u, ...c } = t;
  i && n.append("tag", i), n.append("query", r);
  for (const [d, f] of Object.entries(e))
    f !== void 0 && n.append(`$${d}`, JSON.stringify(f));
  for (const [d, f] of Object.entries(c))
    f && n.append(d, `${f}`);
  return u === !1 && n.append("returnQuery", "false"), a === !1 && n.append("includeMutations", "false"), `?${n}`;
}, An = (r, e) => r === !1 ? void 0 : typeof r > "u" ? e : r, Tn = (r = {}) => ({
  dryRun: r.dryRun,
  returnIds: !0,
  returnDocuments: An(r.returnDocuments, !0),
  visibility: r.visibility || "sync",
  autoGenerateArrayKeys: r.autoGenerateArrayKeys,
  skipCrossDatasetReferenceValidation: r.skipCrossDatasetReferenceValidation
}), r4 = (r) => r.type === "response", $n = (r) => r.body, Rn = (r, e) => r.reduce((t, n) => (t[e(n)] = n, t), /* @__PURE__ */ Object.create(null)), Fn = 11264;
function Ae(r, e, t, n, i = {}, a = {}) {
  const u = "stega" in a ? {
    ...t || {},
    ...typeof a.stega == "boolean" ? { enabled: a.stega } : a.stega || {}
  } : t, c = u.enabled ? Ur(i) : i, d = a.filterResponse === !1 ? (I) => I : (I) => I.result, { cache: f, next: b, ...y } = {
    // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
    // This is necessary in React Server Components to avoid opting out of Request Memoization.
    useAbortSignal: typeof a.signal < "u",
    // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
    resultSourceMap: u.enabled ? "withKeyArraySelector" : a.resultSourceMap,
    ...a,
    // Default to not returning the query, unless `filterResponse` is `false`,
    // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
    returnQuery: a.filterResponse === !1 && a.returnQuery !== !1
  }, C = typeof f < "u" || typeof b < "u" ? { ...y, fetch: { cache: f, next: b } } : y, g = P2(r, e, "query", { query: n, params: c }, C);
  return u.enabled ? g.pipe(
    Or(
      b3(
        import("./stegaEncodeSourceMap-DMHeInRM.js").then(function(I) {
          return I.stegaEncodeSourceMap$1;
        }).then(
          ({ stegaEncodeSourceMap: I }) => I
        )
      )
    ),
    M1(
      ([I, v]) => {
        const P = v(I.result, I.resultSourceMap, u);
        return d({ ...I, result: P });
      }
    )
  ) : g.pipe(M1(d));
}
function o0(r, e, t, n = {}) {
  const i = (() => {
    if (!n.releaseId)
      return t;
    const u = me(t);
    if (!u) {
      if (r0(t))
        throw new Error(
          `The document ID (\`${t}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``
        );
      return i0(t, n.releaseId);
    }
    if (u !== n.releaseId)
      throw new Error(
        `The document ID (\`${t}\`) is already a version of \`${u}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`
      );
    return t;
  })(), a = {
    uri: W1(r, "doc", i),
    json: !0,
    tag: n.tag,
    signal: n.signal
  };
  return E3(r, e, a).pipe(
    B2(r4),
    M1((u) => u.body.documents && u.body.documents[0])
  );
}
function Te(r, e, t, n = {}) {
  const i = {
    uri: W1(r, "doc", t.join(",")),
    json: !0,
    tag: n.tag,
    signal: n.signal
  };
  return E3(r, e, i).pipe(
    B2(r4),
    M1((a) => {
      const u = Rn(a.body.documents || [], (c) => c._id);
      return t.map((c) => u[c] || null);
    })
  );
}
function $e(r, e, t, n = {}) {
  return P2(
    r,
    e,
    "query",
    {
      query: "*[sanity::partOfRelease($releaseId)]",
      params: {
        releaseId: t
      }
    },
    n
  );
}
function Re(r, e, t, n) {
  return W2("createIfNotExists", t), a0(r, e, t, "createIfNotExists", n);
}
function Fe(r, e, t, n) {
  return W2("createOrReplace", t), a0(r, e, t, "createOrReplace", n);
}
function De(r, e, t, n, i) {
  return W2("createVersion", t), be("createVersion", t), f1(r, e, {
    actionType: "sanity.action.document.version.create",
    publishedId: n,
    document: t
  }, i);
}
function Ne(r, e, t, n) {
  return P2(
    r,
    e,
    "mutate",
    { mutations: [{ delete: Me(t) }] },
    n
  );
}
function Ue(r, e, t, n = !1, i) {
  return f1(r, e, {
    actionType: "sanity.action.document.version.discard",
    versionId: t,
    purge: n
  }, i);
}
function qe(r, e, t, n) {
  return W2("replaceVersion", t), be("replaceVersion", t), f1(r, e, {
    actionType: "sanity.action.document.version.replace",
    document: t
  }, n);
}
function ze(r, e, t, n, i) {
  return f1(r, e, {
    actionType: "sanity.action.document.version.unpublish",
    versionId: t,
    publishedId: n
  }, i);
}
function We(r, e, t, n) {
  let i;
  t instanceof _2 || t instanceof j2 ? i = { patch: t.serialize() } : t instanceof G3 || t instanceof J3 ? i = t.serialize() : i = t;
  const a = Array.isArray(i) ? i : [i], u = n && n.transactionId || void 0;
  return P2(r, e, "mutate", { mutations: a, transactionId: u }, n);
}
function f1(r, e, t, n) {
  const i = Array.isArray(t) ? t : [t], a = n && n.transactionId || void 0, u = n && n.skipCrossDatasetReferenceValidation || void 0, c = n && n.dryRun || void 0;
  return P2(
    r,
    e,
    "actions",
    { actions: i, transactionId: a, skipCrossDatasetReferenceValidation: u, dryRun: c },
    n
  );
}
function P2(r, e, t, n, i = {}) {
  const a = t === "mutate", u = t === "actions", c = t === "query", d = a || u ? "" : Pe(n), f = !a && !u && d.length < Fn, b = f ? d : "", y = i.returnFirst, { timeout: C, token: g, tag: I, headers: v, returnQuery: P, lastLiveEventId: L, cacheMode: A } = i, T = W1(r, t, b), U = {
    method: f ? "GET" : "POST",
    uri: T,
    json: !0,
    body: f ? void 0 : n,
    query: a && Tn(i),
    timeout: C,
    headers: v,
    token: g,
    tag: I,
    returnQuery: P,
    perspective: i.perspective,
    resultSourceMap: i.resultSourceMap,
    lastLiveEventId: Array.isArray(L) ? L[0] : L,
    cacheMode: A,
    canUseCdn: c,
    signal: i.signal,
    fetch: i.fetch,
    useAbortSignal: i.useAbortSignal,
    useCdn: i.useCdn
  };
  return E3(r, e, U).pipe(
    B2(r4),
    M1($n),
    M1((J) => {
      if (!a)
        return J;
      const z = J.results || [];
      if (i.returnDocuments)
        return y ? z[0] && z[0].document : z.map((m1) => m1.document);
      const W = y ? "documentId" : "documentIds", e1 = y ? z[0] && z[0].id : z.map((m1) => m1.id);
      return {
        transactionId: J.transactionId,
        results: z,
        [W]: e1
      };
    })
  );
}
function a0(r, e, t, n, i = {}) {
  const a = { [n]: t }, u = Object.assign({ returnFirst: !0, returnDocuments: !0 }, i);
  return P2(r, e, "mutate", { mutations: [a] }, u);
}
const I3 = (r) => r.config().dataset !== void 0 && r.config().projectId !== void 0 || r.config()["~experimental_resource"] !== void 0, Be = (r, e) => I3(r) && e.startsWith(W1(r, "query")), Dn = (r, e) => I3(r) && e.startsWith(W1(r, "mutate")), Nn = (r, e) => I3(r) && e.startsWith(W1(r, "doc", "")), Un = (r, e) => I3(r) && e.startsWith(W1(r, "listen")), qn = (r, e) => I3(r) && e.startsWith(W1(r, "history", "")), zn = (r, e) => e.startsWith("/data/") || Be(r, e) || Dn(r, e) || Nn(r, e) || Un(r, e) || qn(r, e);
function E3(r, e, t) {
  const n = t.url || t.uri, i = r.config(), a = typeof t.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 && zn(r, n) : t.canUseCdn;
  let u = (t.useCdn ?? i.useCdn) && a;
  const c = t.tag && i.requestTagPrefix ? [i.requestTagPrefix, t.tag].join(".") : t.tag || i.requestTagPrefix;
  if (c && t.tag !== null && (t.query = { tag: Ce(c), ...t.query }), ["GET", "HEAD", "POST"].indexOf(t.method || "GET") >= 0 && Be(r, n)) {
    const b = t.resultSourceMap ?? i.resultSourceMap;
    b !== void 0 && b !== !1 && (t.query = { resultSourceMap: b, ...t.query });
    const y = t.perspective || i.perspective;
    typeof y < "u" && (y === "previewDrafts" && vn(), Ee(y), t.query = {
      perspective: Array.isArray(y) ? y.join(",") : y,
      ...t.query
    }, (Array.isArray(y) && y.length > 0 || // previewDrafts was renamed to drafts, but keep for backwards compat
    y === "previewDrafts" || y === "drafts") && u && (u = !1, mn())), t.lastLiveEventId && (t.query = { ...t.query, lastLiveEventId: t.lastLiveEventId }), t.returnQuery === !1 && (t.query = { returnQuery: "false", ...t.query }), u && t.cacheMode == "noStale" && (t.query = { cacheMode: "noStale", ...t.query });
  }
  const d = Pn(
    i,
    Object.assign({}, t, {
      url: n4(r, n, u)
    })
  ), f = new p1(
    (b) => e(d, i.requester).subscribe(b)
  );
  return t.signal ? f.pipe(Wn(t.signal)) : f;
}
function j1(r, e, t) {
  return E3(r, e, t).pipe(
    B2((n) => n.type === "response"),
    M1((n) => n.body)
  );
}
function W1(r, e, t) {
  const n = r.config();
  if (n["~experimental_resource"]) {
    Ie(n);
    const u = Vn(n), c = t !== void 0 ? `${e}/${t}` : e;
    return `${u}/${c}`.replace(/\/($|\?)/, "$1");
  }
  const i = O2(n), a = `/${e}/${i}`;
  return `/data${t !== void 0 ? `${a}/${t}` : a}`.replace(/\/($|\?)/, "$1");
}
function n4(r, e, t = !1) {
  const { url: n, cdnUrl: i } = r.config();
  return `${t ? i : n}/${e.replace(/^\//, "")}`;
}
function Wn(r) {
  return (e) => new p1((t) => {
    const n = () => t.error(Hn(r));
    if (r && r.aborted) {
      n();
      return;
    }
    const i = e.subscribe(t);
    return r.addEventListener("abort", n), () => {
      r.removeEventListener("abort", n), i.unsubscribe();
    };
  });
}
const Bn = !!globalThis.DOMException;
function Hn(r) {
  if (Bn)
    return new DOMException((r == null ? void 0 : r.reason) ?? "The operation was aborted.", "AbortError");
  const e = new Error((r == null ? void 0 : r.reason) ?? "The operation was aborted.");
  return e.name = "AbortError", e;
}
const Vn = (r) => {
  if (!r["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type: e, id: t } = r["~experimental_resource"];
  switch (e) {
    case "dataset": {
      const n = t.split(".");
      if (n.length !== 2)
        throw new Error('Dataset ID must be in the format "project.dataset"');
      return `/projects/${n[0]}/datasets/${n[1]}`;
    }
    case "canvas":
      return `/canvases/${t}`;
    case "media-library":
      return `/media-libraries/${t}`;
    case "dashboard":
      return `/dashboards/${t}`;
    default:
      throw new Error(`Unsupported resource type: ${e.toString()}`);
  }
};
function He(r, e, t) {
  const n = O2(r.config());
  return j1(r, e, {
    method: "POST",
    uri: `/agent/action/generate/${n}`,
    body: t
  });
}
function Gn(r, e, t) {
  const n = O2(r.config());
  return j1(r, e, {
    method: "POST",
    uri: `/agent/action/patch/${n}`,
    body: t
  });
}
function Jn(r, e, t) {
  const n = O2(r.config());
  return j1(r, e, {
    method: "POST",
    uri: `/agent/action/prompt/${n}`,
    body: t
  });
}
function Ve(r, e, t) {
  const n = O2(r.config());
  return j1(r, e, {
    method: "POST",
    uri: `/agent/action/transform/${n}`,
    body: t
  });
}
function Ge(r, e, t) {
  const n = O2(r.config());
  return j1(r, e, {
    method: "POST",
    uri: `/agent/action/translate/${n}`,
    body: t
  });
}
var x2, L2;
class Yn {
  constructor(e, t) {
    V(this, x2);
    V(this, L2);
    H(this, x2, e), H(this, L2, t);
  }
  /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */
  generate(e) {
    return He(m(this, x2), m(this, L2), e);
  }
  /**
   * Transform a target document based on a source.
   * @param request - translation request
   */
  transform(e) {
    return Ve(m(this, x2), m(this, L2), e);
  }
  /**
   * Translate a target document based on a source.
   * @param request - translation request
   */
  translate(e) {
    return Ge(m(this, x2), m(this, L2), e);
  }
}
x2 = new WeakMap(), L2 = new WeakMap();
var r2, n2;
class Qn {
  constructor(e, t) {
    V(this, r2);
    V(this, n2);
    H(this, r2, e), H(this, n2, t);
  }
  /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */
  generate(e) {
    return Z(He(m(this, r2), m(this, n2), e));
  }
  /**
   * Transform a target document based on a source.
   * @param request - translation request
   */
  transform(e) {
    return Z(Ve(m(this, r2), m(this, n2), e));
  }
  /**
   * Translate a target document based on a source.
   * @param request - translation request
   */
  translate(e) {
    return Z(Ge(m(this, r2), m(this, n2), e));
  }
  /**
   * Run a raw instruction and return the result either as text or json
   * @param request - prompt request
   */
  prompt(e) {
    return Z(Jn(m(this, r2), m(this, n2), e));
  }
  /**
   * Patch a document using a schema aware API.
   * Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
   * @param request - instruction request
   */
  patch(e) {
    return Z(Gn(m(this, r2), m(this, n2), e));
  }
}
r2 = new WeakMap(), n2 = new WeakMap();
var d3, f3;
class Kn {
  constructor(e, t) {
    V(this, d3);
    V(this, f3);
    H(this, d3, e), H(this, f3, t);
  }
  upload(e, t, n) {
    return Je(m(this, d3), m(this, f3), e, t, n);
  }
}
d3 = new WeakMap(), f3 = new WeakMap();
var p3, m3;
class Xn {
  constructor(e, t) {
    V(this, p3);
    V(this, m3);
    H(this, p3, e), H(this, m3, t);
  }
  upload(e, t, n) {
    const i = Je(m(this, p3), m(this, m3), e, t, n);
    return Z(
      i.pipe(
        B2((a) => a.type === "response"),
        M1(
          (a) => a.body.document
        )
      )
    );
  }
}
p3 = new WeakMap(), m3 = new WeakMap();
function Je(r, e, t, n, i = {}) {
  un(t);
  let a = i.extract || void 0;
  a && !a.length && (a = ["none"]);
  const u = r.config(), c = e7(i, n), { tag: d, label: f, title: b, description: y, creditLine: C, filename: g, source: I } = c, v = {
    label: f,
    title: b,
    description: y,
    filename: g,
    meta: a,
    creditLine: C
  };
  return I && (v.sourceId = I.id, v.sourceName = I.name, v.sourceUrl = I.url), E3(r, e, {
    tag: d,
    method: "POST",
    timeout: c.timeout || 0,
    uri: Zn(u, t),
    headers: c.contentType ? { "Content-Type": c.contentType } : {},
    query: v,
    body: n
  });
}
function Zn(r, e) {
  const t = e === "image" ? "images" : "files";
  if (r["~experimental_resource"]) {
    const { type: i, id: a } = r["~experimental_resource"];
    switch (i) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead."
        );
      case "canvas":
        return `/canvases/${a}/assets/${t}`;
      case "media-library":
        return `/media-libraries/${a}/upload`;
      case "dashboard":
        return `/dashboards/${a}/assets/${t}`;
      default:
        throw new Error(`Unsupported resource type: ${i.toString()}`);
    }
  }
  const n = O2(r);
  return `assets/${t}/${n}`;
}
function e7(r, e) {
  return typeof File > "u" || !(e instanceof File) ? r : Object.assign(
    {
      filename: r.preserveFilename === !1 ? void 0 : e.name,
      contentType: e.type
    },
    r
  );
}
var t7 = (r, e) => Object.keys(e).concat(Object.keys(r)).reduce((t, n) => (t[n] = typeof r[n] > "u" ? e[n] : r[n], t), {});
const r7 = (r, e) => e.reduce((t, n) => (typeof r[n] > "u" || (t[n] = r[n]), t), {}), Ye = ue(() => import("./browser-Ba3AZnRO.js").then((r) => r.b)).pipe(
  M1(({ default: r }) => r),
  kr(1)
);
function Qe() {
  return function(r) {
    return r.pipe(
      Z0((e, t) => e instanceof xe ? ae(t0({ type: "reconnect" }), xr(1e3).pipe(C3(() => t))) : ie(() => e))
    );
  };
}
const n7 = 14800, i7 = [
  "includePreviousRevision",
  "includeResult",
  "includeMutations",
  "includeAllVersions",
  "visibility",
  "effectFormat",
  "tag"
], s7 = {
  includeResult: !0
};
function Ke(r, e, t = {}) {
  const { url: n, token: i, withCredentials: a, requestTagPrefix: u, headers: c } = this.config(), d = t.tag && u ? [u, t.tag].join(".") : t.tag, f = { ...t7(t, s7), tag: d }, b = r7(f, i7), y = Pe({ query: r, params: e, options: { tag: d, ...b } }), C = `${n}${W1(this, "listen", y)}`;
  if (C.length > n7)
    return ie(() => new Error("Query too large for listener"));
  const g = f.events ? f.events : ["mutation"], I = {};
  return a && (I.withCredentials = !0), (i || c) && (I.headers = {}, i && (I.headers.Authorization = `Bearer ${i}`), c && Object.assign(I.headers, c)), Le(() => (
    // use polyfill if there is no global EventSource or if we need to set headers
    (typeof EventSource > "u" || I.headers ? Ye : t0(EventSource)).pipe(M1((v) => new v(C, I)))
  ), g).pipe(
    Qe(),
    B2((v) => g.includes(v.type)),
    M1(
      (v) => ({
        type: v.type,
        ..."data" in v ? v.data : {}
      })
    )
  );
}
function o7(r, e) {
  return a7(
    typeof r == "function" ? { predicate: r, ...e } : r
  );
}
function a7(r) {
  return (e) => {
    let t, n = !1;
    const { predicate: i, ...a } = r, u = e.pipe(
      Pr((d) => {
        r.predicate(d) && (n = !0, t = d);
      }),
      le(() => {
        n = !1, t = void 0;
      }),
      he(a)
    ), c = new p1((d) => {
      n && d.next(
        // this cast is safe because of the emitted check which asserts that we got T from the source
        t
      ), d.complete();
    });
    return Lr(u, c);
  };
}
const p9 = "2021-03-25";
var f2;
class Xe {
  constructor(e) {
    V(this, f2);
    H(this, f2, e);
  }
  /**
   * Requires `apiVersion` to be `2021-03-25` or later.
   */
  events({
    includeDrafts: e = !1,
    tag: t
  } = {}) {
    Y1("live", m(this, f2).config());
    const {
      projectId: n,
      apiVersion: i,
      token: a,
      withCredentials: u,
      requestTagPrefix: c,
      headers: d
    } = m(this, f2).config(), f = i.replace(/^v/, "");
    if (f !== "X" && f < p9)
      throw new Error(
        `The live events API requires API version ${p9} or later. The current API version is ${f}. Please update your API version to use this feature.`
      );
    if (e && !a && !u)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
      );
    const b = W1(m(this, f2), "live/events"), y = new URL(m(this, f2).getUrl(b, !1)), C = t && c ? [c, t].join(".") : t;
    C && y.searchParams.set("tag", C), e && y.searchParams.set("includeDrafts", "true");
    const g = {};
    e && u && (g.withCredentials = !0), (e && a || d) && (g.headers = {}, e && a && (g.headers.Authorization = `Bearer ${a}`), d && Object.assign(g.headers, d));
    const I = `${y.href}::${JSON.stringify(g)}`, v = R0.get(I);
    if (v)
      return v;
    const P = Le(() => (
      // use polyfill if there is no global EventSource or if we need to set headers
      (typeof EventSource > "u" || g.headers ? Ye : t0(EventSource)).pipe(M1((T) => new T(y.href, g)))
    ), [
      "message",
      "restart",
      "welcome",
      "reconnect",
      "goaway"
    ]).pipe(
      Qe(),
      M1((T) => {
        if (T.type === "message") {
          const { data: U, ...J } = T;
          return { ...J, tags: U.tags };
        }
        return T;
      })
    ), L = u7(y, {
      method: "OPTIONS",
      mode: "cors",
      credentials: g.withCredentials ? "include" : "omit",
      headers: g.headers
    }).pipe(
      C3(() => B9),
      Z0(() => {
        throw new tn({ projectId: n });
      })
    ), A = ae(L, P).pipe(
      le(() => R0.delete(I)),
      o7({
        predicate: (T) => T.type === "welcome"
      })
    );
    return R0.set(I, A), A;
  }
}
f2 = new WeakMap();
function u7(r, e) {
  return new p1((t) => {
    const n = new AbortController(), i = n.signal;
    return fetch(r, { ...e, signal: n.signal }).then(
      (a) => {
        t.next(a), t.complete();
      },
      (a) => {
        i.aborted || t.error(a);
      }
    ), () => n.abort();
  });
}
const R0 = /* @__PURE__ */ new Map();
var p2, m2;
class c7 {
  constructor(e, t) {
    V(this, p2);
    V(this, m2);
    H(this, p2, e), H(this, m2, t);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(e, t) {
    return R2(m(this, p2), m(this, m2), "PUT", e, t);
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(e, t) {
    return R2(m(this, p2), m(this, m2), "PATCH", e, t);
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(e) {
    return R2(m(this, p2), m(this, m2), "DELETE", e);
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return j1(m(this, p2), m(this, m2), {
      uri: "/datasets",
      tag: null
    });
  }
}
p2 = new WeakMap(), m2 = new WeakMap();
var z1, v2;
class l7 {
  constructor(e, t) {
    V(this, z1);
    V(this, v2);
    H(this, z1, e), H(this, v2, t);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(e, t) {
    return Y1("dataset", m(this, z1).config()), Z(
      R2(m(this, z1), m(this, v2), "PUT", e, t)
    );
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(e, t) {
    return Y1("dataset", m(this, z1).config()), Z(
      R2(m(this, z1), m(this, v2), "PATCH", e, t)
    );
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(e) {
    return Y1("dataset", m(this, z1).config()), Z(R2(m(this, z1), m(this, v2), "DELETE", e));
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return Y1("dataset", m(this, z1).config()), Z(
      j1(m(this, z1), m(this, v2), { uri: "/datasets", tag: null })
    );
  }
}
z1 = new WeakMap(), v2 = new WeakMap();
function R2(r, e, t, n, i) {
  return Y1("dataset", r.config()), _e(n), j1(r, e, {
    method: t,
    uri: `/datasets/${n}`,
    body: i,
    tag: null
  });
}
var y2, D2;
class h7 {
  constructor(e, t) {
    V(this, y2);
    V(this, D2);
    H(this, y2, e), H(this, D2, t);
  }
  list(e) {
    Y1("projects", m(this, y2).config());
    const t = (e == null ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
    return j1(m(this, y2), m(this, D2), { uri: t });
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(e) {
    return Y1("projects", m(this, y2).config()), j1(m(this, y2), m(this, D2), { uri: `/projects/${e}` });
  }
}
y2 = new WeakMap(), D2 = new WeakMap();
var g2, N2;
class d7 {
  constructor(e, t) {
    V(this, g2);
    V(this, N2);
    H(this, g2, e), H(this, N2, t);
  }
  list(e) {
    Y1("projects", m(this, g2).config());
    const t = (e == null ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
    return Z(j1(m(this, g2), m(this, N2), { uri: t }));
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(e) {
    return Y1("projects", m(this, g2).config()), Z(
      j1(m(this, g2), m(this, N2), { uri: `/projects/${e}` })
    );
  }
}
g2 = new WeakMap(), N2 = new WeakMap();
const m9 = Vr(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  8
), Y3 = (r, e) => e ? i0(r, e) : Wr(r);
function Q3(r, {
  releaseId: e,
  publishedId: t,
  document: n
}) {
  if (t && n._id) {
    const i = Y3(t, e);
    return ln(i, n), i;
  }
  if (n._id) {
    const i = r0(n._id), a = n0(n._id);
    if (!i && !a)
      throw new Error(
        `\`${r}()\` requires a document with an \`_id\` that is a version or draft ID`
      );
    if (e) {
      if (i)
        throw new Error(
          `\`${r}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`
        );
      const u = me(n._id);
      if (u !== e)
        throw new Error(
          `\`${r}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${u}\`).`
        );
    }
    return n._id;
  }
  if (t)
    return Y3(t, e);
  throw new Error(`\`${r}()\` requires either a publishedId or a document with an \`_id\``);
}
const f7 = (r, e) => {
  if (typeof r == "object" && r !== null && ("releaseId" in r || "metadata" in r)) {
    const { releaseId: t = m9(), metadata: n = {} } = r;
    return [t, n, e];
  }
  return [m9(), {}, r];
}, Ze = (r, e) => {
  const [t, n, i] = f7(r, e), a = {
    ...n,
    releaseType: n.releaseType || "undecided"
  };
  return { action: {
    actionType: "sanity.action.release.create",
    releaseId: t,
    metadata: a
  }, options: i };
};
var $1, R1;
class p7 {
  constructor(e, t) {
    V(this, $1);
    V(this, R1);
    H(this, $1, e), H(this, R1, t);
  }
  /**
   * @public
   *
   * Retrieve a release by id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to retrieve.
   * @param options - Additional query options including abort signal and query tag.
   * @returns An observable that resolves to the release document {@link ReleaseDocument}.
   *
   * @example Retrieving a release by id
   * ```ts
   * client.observable.releases.get({releaseId: 'my-release'}).pipe(
   *   tap((release) => console.log(release)),
   *   // {
   *   //   _id: '_.releases.my-release',
   *   //   name: 'my-release'
   *   //   _type: 'system.release',
   *   //   metadata: {releaseType: 'asap'},
   *   //   _createdAt: '2021-01-01T00:00:00.000Z',
   *   //   ...
   *   // }
   * ).subscribe()
   * ```
   */
  get({ releaseId: e }, t) {
    return o0(
      m(this, $1),
      m(this, R1),
      `_.releases.${e}`,
      t
    );
  }
  create(e, t) {
    const { action: n, options: i } = Ze(e, t), { releaseId: a, metadata: u } = n;
    return f1(m(this, $1), m(this, R1), n, i).pipe(
      M1((c) => ({
        ...c,
        releaseId: a,
        metadata: u
      }))
    );
  }
  /**
   * @public
   *
   * Edits an existing release, updating the metadata.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to edit.
   *   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  edit({ releaseId: e, patch: t }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: t
    };
    return f1(m(this, $1), m(this, R1), i, n);
  }
  /**
   * @public
   *
   * Publishes all documents in a release at once. For larger releases the effect of the publish
   * will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
   * documents and creation of the corresponding published documents with the new content may
   * take some time.
   *
   * During this period both the source and target documents are locked and cannot be
   * modified through any other means.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to publish.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  publish({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.publish",
      releaseId: e
    };
    return f1(m(this, $1), m(this, R1), n, t);
  }
  /**
   * @public
   *
   * An archive action removes an active release. The documents that comprise the release
   * are deleted and therefore no longer queryable.
   *
   * While the documents remain in retention the last version can still be accessed using document history endpoint.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to archive.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  archive({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.archive",
      releaseId: e
    };
    return f1(m(this, $1), m(this, R1), n, t);
  }
  /**
   * @public
   *
   * An unarchive action restores an archived release and all documents
   * with the content they had just prior to archiving.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unarchive.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  unarchive({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.unarchive",
      releaseId: e
    };
    return f1(m(this, $1), m(this, R1), n, t);
  }
  /**
   * @public
   *
   * A schedule action queues a release for publishing at the given future time.
   * The release is locked such that no documents in the release can be modified and
   * no documents that it references can be deleted as this would make the publish fail.
   * At the given time, the same logic as for the publish action is triggered.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to schedule.
   *   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  schedule({ releaseId: e, publishAt: t }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: t
    };
    return f1(m(this, $1), m(this, R1), i, n);
  }
  /**
   * @public
   *
   * An unschedule action stops a release from being published.
   * The documents in the release are considered unlocked and can be edited again.
   * This may fail if another release is scheduled to be published after this one and
   * has a reference to a document created by this one.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unschedule.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  unschedule({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.unschedule",
      releaseId: e
    };
    return f1(m(this, $1), m(this, R1), n, t);
  }
  /**
   * @public
   *
   * A delete action removes a published or archived release.
   * The backing system document will be removed from the dataset.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to delete.
   * @param options - Additional action options.
   * @returns An observable that resolves to the `transactionId`.
   */
  delete({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.delete",
      releaseId: e
    };
    return f1(m(this, $1), m(this, R1), n, t);
  }
  /**
   * @public
   *
   * Fetch the documents in a release by release id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to fetch documents for.
   * @param options - Additional mutation options {@link BaseMutationOptions}.
   * @returns An observable that resolves to the documents in the release.
   */
  fetchDocuments({ releaseId: e }, t) {
    return $e(m(this, $1), m(this, R1), e, t);
  }
}
$1 = new WeakMap(), R1 = new WeakMap();
var F1, D1;
class m7 {
  constructor(e, t) {
    V(this, F1);
    V(this, D1);
    H(this, F1, e), H(this, D1, t);
  }
  /**
   * @public
   *
   * Retrieve a release by id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to retrieve.
   * @param options - Additional query options including abort signal and query tag.
   * @returns A promise that resolves to the release document {@link ReleaseDocument}.
   *
   * @example Retrieving a release by id
   * ```ts
   * const release = await client.releases.get({releaseId: 'my-release'})
   * console.log(release)
   * // {
   * //   _id: '_.releases.my-release',
   * //   name: 'my-release'
   * //   _type: 'system.release',
   * //   metadata: {releaseType: 'asap'},
   * //   _createdAt: '2021-01-01T00:00:00.000Z',
   * //   ...
   * // }
   * ```
   */
  get({ releaseId: e }, t) {
    return Z(
      o0(
        m(this, F1),
        m(this, D1),
        `_.releases.${e}`,
        t
      )
    );
  }
  async create(e, t) {
    const { action: n, options: i } = Ze(e, t), { releaseId: a, metadata: u } = n;
    return { ...await Z(
      f1(m(this, F1), m(this, D1), n, i)
    ), releaseId: a, metadata: u };
  }
  /**
   * @public
   *
   * Edits an existing release, updating the metadata.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to edit.
   *   - `patch` - The patch operation to apply on the release metadata {@link PatchMutationOperation}.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  edit({ releaseId: e, patch: t }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: t
    };
    return Z(f1(m(this, F1), m(this, D1), i, n));
  }
  /**
   * @public
   *
   * Publishes all documents in a release at once. For larger releases the effect of the publish
   * will be visible immediately when querying but the removal of the `versions.<releasesId>.*`
   * documents and creation of the corresponding published documents with the new content may
   * take some time.
   *
   * During this period both the source and target documents are locked and cannot be
   * modified through any other means.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to publish.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  publish({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.publish",
      releaseId: e
    };
    return Z(f1(m(this, F1), m(this, D1), n, t));
  }
  /**
   * @public
   *
   * An archive action removes an active release. The documents that comprise the release
   * are deleted and therefore no longer queryable.
   *
   * While the documents remain in retention the last version can still be accessed using document history endpoint.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to archive.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  archive({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.archive",
      releaseId: e
    };
    return Z(f1(m(this, F1), m(this, D1), n, t));
  }
  /**
   * @public
   *
   * An unarchive action restores an archived release and all documents
   * with the content they had just prior to archiving.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unarchive.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  unarchive({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.unarchive",
      releaseId: e
    };
    return Z(f1(m(this, F1), m(this, D1), n, t));
  }
  /**
   * @public
   *
   * A schedule action queues a release for publishing at the given future time.
   * The release is locked such that no documents in the release can be modified and
   * no documents that it references can be deleted as this would make the publish fail.
   * At the given time, the same logic as for the publish action is triggered.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to schedule.
   *   - `publishAt` - The serialised date and time to publish the release. If the `publishAt` is in the past, the release will be published immediately.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  schedule({ releaseId: e, publishAt: t }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: t
    };
    return Z(f1(m(this, F1), m(this, D1), i, n));
  }
  /**
   * @public
   *
   * An unschedule action stops a release from being published.
   * The documents in the release are considered unlocked and can be edited again.
   * This may fail if another release is scheduled to be published after this one and
   * has a reference to a document created by this one.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to unschedule.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  unschedule({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.unschedule",
      releaseId: e
    };
    return Z(f1(m(this, F1), m(this, D1), n, t));
  }
  /**
   * @public
   *
   * A delete action removes a published or archived release.
   * The backing system document will be removed from the dataset.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to delete.
   * @param options - Additional action options.
   * @returns A promise that resolves to the `transactionId`.
   */
  delete({ releaseId: e }, t) {
    const n = {
      actionType: "sanity.action.release.delete",
      releaseId: e
    };
    return Z(f1(m(this, F1), m(this, D1), n, t));
  }
  /**
   * @public
   *
   * Fetch the documents in a release by release id.
   *
   * @category Releases
   *
   * @param params - Release action parameters:
   *   - `releaseId` - The id of the release to fetch documents for.
   * @param options - Additional mutation options {@link BaseMutationOptions}.
   * @returns A promise that resolves to the documents in the release.
   */
  fetchDocuments({ releaseId: e }, t) {
    return Z($e(m(this, F1), m(this, D1), e, t));
  }
}
F1 = new WeakMap(), D1 = new WeakMap();
var v3, y3;
class v7 {
  constructor(e, t) {
    V(this, v3);
    V(this, y3);
    H(this, v3, e), H(this, y3, t);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(e) {
    return j1(
      m(this, v3),
      m(this, y3),
      { uri: `/users/${e}` }
    );
  }
}
v3 = new WeakMap(), y3 = new WeakMap();
var g3, _3;
class y7 {
  constructor(e, t) {
    V(this, g3);
    V(this, _3);
    H(this, g3, e), H(this, _3, t);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(e) {
    return Z(
      j1(m(this, g3), m(this, _3), {
        uri: `/users/${e}`
      })
    );
  }
}
g3 = new WeakMap(), _3 = new WeakMap();
var i2, o1;
const X3 = class X3 {
  constructor(e, t = o3) {
    q(this, "assets");
    q(this, "datasets");
    q(this, "live");
    q(this, "projects");
    q(this, "users");
    q(this, "agent");
    q(this, "releases");
    /**
     * Private properties
     */
    V(this, i2);
    V(this, o1);
    /**
     * Instance properties
     */
    q(this, "listen", Ke);
    this.config(t), H(this, o1, e), this.assets = new Kn(this, m(this, o1)), this.datasets = new c7(this, m(this, o1)), this.live = new Xe(this), this.projects = new h7(this, m(this, o1)), this.users = new v7(this, m(this, o1)), this.agent = {
      action: new Yn(this, m(this, o1))
    }, this.releases = new p7(this, m(this, o1));
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new X3(m(this, o1), this.config());
  }
  config(e) {
    if (e === void 0)
      return { ...m(this, i2) };
    if (m(this, i2) && m(this, i2).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return H(this, i2, Se(e, m(this, i2) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(e) {
    const t = this.config();
    return new X3(m(this, o1), {
      ...t,
      ...e,
      stega: {
        ...t.stega || {},
        ...typeof (e == null ? void 0 : e.stega) == "boolean" ? { enabled: e.stega } : (e == null ? void 0 : e.stega) || {}
      }
    });
  }
  fetch(e, t, n) {
    return Ae(
      this,
      m(this, o1),
      m(this, i2).stega,
      e,
      t,
      n
    );
  }
  /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */
  getDocument(e, t) {
    return o0(this, m(this, o1), e, t);
  }
  /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */
  getDocuments(e, t) {
    return Te(this, m(this, o1), e, t);
  }
  create(e, t) {
    return a0(this, m(this, o1), e, "create", t);
  }
  createIfNotExists(e, t) {
    return Re(this, m(this, o1), e, t);
  }
  createOrReplace(e, t) {
    return Fe(this, m(this, o1), e, t);
  }
  createVersion({
    document: e,
    publishedId: t,
    releaseId: n
  }, i) {
    const a = Q3("createVersion", {
      document: e,
      publishedId: t,
      releaseId: n
    }), u = { ...e, _id: a }, c = t || s0(e._id);
    return De(
      this,
      m(this, o1),
      u,
      c,
      i
    );
  }
  delete(e, t) {
    return Ne(this, m(this, o1), e, t);
  }
  /**
   * @public
   *
   * Deletes the draft or release version of a document.
   *
   * @remarks
   * * Discarding a version with no `releaseId` will discard the draft version of the published document.
   * * If the draft or release version does not exist, any error will throw.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to discard the document from.
   *   - `publishedId` - The published ID of the document to discard.
   * @param purge - if `true` the document history is also discarded.
   * @param options - Additional action options.
   * @returns an observable that resolves to the `transactionId`.
   *
   * @example Discarding a release version of a document
   * ```ts
   * client.observable.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be discarded.
   * ```
   *
   * @example Discarding a draft version of a document
   * ```ts
   * client.observable.discardVersion({publishedId: 'myDocument'})
   * // The document with the ID `drafts.myDocument` will be discarded.
   * ```
   */
  discardVersion({ releaseId: e, publishedId: t }, n, i) {
    const a = Y3(t, e);
    return Ue(this, m(this, o1), a, n, i);
  }
  replaceVersion({
    document: e,
    publishedId: t,
    releaseId: n
  }, i) {
    const a = Q3("replaceVersion", {
      document: e,
      publishedId: t,
      releaseId: n
    }), u = { ...e, _id: a };
    return qe(this, m(this, o1), u, i);
  }
  /**
   * @public
   *
   * Used to indicate when a document within a release should be unpublished when
   * the release is run.
   *
   * @remarks
   * * If the published document does not exist, an error will be thrown.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to unpublish the document from.
   *   - `publishedId` - The published ID of the document to unpublish.
   * @param options - Additional action options.
   * @returns an observable that resolves to the `transactionId`.
   *
   * @example Unpublishing a release version of a published document
   * ```ts
   * client.observable.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
   * ```
   */
  unpublishVersion({ releaseId: e, publishedId: t }, n) {
    const i = i0(t, e);
    return ze(this, m(this, o1), i, t, n);
  }
  mutate(e, t) {
    return We(this, m(this, o1), e, t);
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(e, t) {
    return new j2(e, t, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(e) {
    return new J3(e, this);
  }
  /**
   * Perform action operations against the configured dataset
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(e, t) {
    return f1(this, m(this, o1), e, t);
  }
  /**
   * Perform an HTTP request against the Sanity API
   *
   * @param options - Request options
   */
  request(e) {
    return j1(this, m(this, o1), e);
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(e, t) {
    return n4(this, e, t);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(e, t) {
    return W1(this, e, t);
  }
};
i2 = new WeakMap(), o1 = new WeakMap();
let q0 = X3;
var s2, n1;
const Z3 = class Z3 {
  constructor(e, t = o3) {
    q(this, "assets");
    q(this, "datasets");
    q(this, "live");
    q(this, "projects");
    q(this, "users");
    q(this, "agent");
    q(this, "releases");
    /**
     * Observable version of the Sanity client, with the same configuration as the promise-based one
     */
    q(this, "observable");
    /**
     * Private properties
     */
    V(this, s2);
    V(this, n1);
    /**
     * Instance properties
     */
    q(this, "listen", Ke);
    this.config(t), H(this, n1, e), this.assets = new Xn(this, m(this, n1)), this.datasets = new l7(this, m(this, n1)), this.live = new Xe(this), this.projects = new d7(this, m(this, n1)), this.users = new y7(this, m(this, n1)), this.agent = {
      action: new Qn(this, m(this, n1))
    }, this.releases = new m7(this, m(this, n1)), this.observable = new q0(e, t);
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new Z3(m(this, n1), this.config());
  }
  config(e) {
    if (e === void 0)
      return { ...m(this, s2) };
    if (m(this, s2) && m(this, s2).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return this.observable && this.observable.config(e), H(this, s2, Se(e, m(this, s2) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(e) {
    const t = this.config();
    return new Z3(m(this, n1), {
      ...t,
      ...e,
      stega: {
        ...t.stega || {},
        ...typeof (e == null ? void 0 : e.stega) == "boolean" ? { enabled: e.stega } : (e == null ? void 0 : e.stega) || {}
      }
    });
  }
  fetch(e, t, n) {
    return Z(
      Ae(
        this,
        m(this, n1),
        m(this, s2).stega,
        e,
        t,
        n
      )
    );
  }
  /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */
  getDocument(e, t) {
    return Z(o0(this, m(this, n1), e, t));
  }
  /**
   * Fetch multiple documents in one request.
   * Should be used sparingly - performing a query is usually a better option.
   * The order/position of documents is preserved based on the original array of IDs.
   * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
   *
   * @param ids - Document IDs to fetch
   * @param options - Request options
   */
  getDocuments(e, t) {
    return Z(Te(this, m(this, n1), e, t));
  }
  create(e, t) {
    return Z(
      a0(this, m(this, n1), e, "create", t)
    );
  }
  createIfNotExists(e, t) {
    return Z(
      Re(this, m(this, n1), e, t)
    );
  }
  createOrReplace(e, t) {
    return Z(
      Fe(this, m(this, n1), e, t)
    );
  }
  createVersion({
    document: e,
    publishedId: t,
    releaseId: n
  }, i) {
    const a = Q3("createVersion", {
      document: e,
      publishedId: t,
      releaseId: n
    }), u = { ...e, _id: a }, c = t || s0(e._id);
    return i9(
      De(
        this,
        m(this, n1),
        u,
        c,
        i
      )
    );
  }
  delete(e, t) {
    return Z(Ne(this, m(this, n1), e, t));
  }
  /**
   * @public
   *
   * Deletes the draft or release version of a document.
   *
   * @remarks
   * * Discarding a version with no `releaseId` will discard the draft version of the published document.
   * * If the draft or release version does not exist, any error will throw.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to discard the document from.
   *   - `publishedId` - The published ID of the document to discard.
   * @param purge - if `true` the document history is also discarded.
   * @param options - Additional action options.
   * @returns a promise that resolves to the `transactionId`.
   *
   * @example Discarding a release version of a document
   * ```ts
   * client.discardVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be discarded.
   * ```
   *
   * @example Discarding a draft version of a document
   * ```ts
   * client.discardVersion({publishedId: 'myDocument'})
   * // The document with the ID `drafts.myDocument` will be discarded.
   * ```
   */
  discardVersion({ releaseId: e, publishedId: t }, n, i) {
    const a = Y3(t, e);
    return Z(
      Ue(this, m(this, n1), a, n, i)
    );
  }
  replaceVersion({
    document: e,
    publishedId: t,
    releaseId: n
  }, i) {
    const a = Q3("replaceVersion", {
      document: e,
      publishedId: t,
      releaseId: n
    }), u = { ...e, _id: a };
    return i9(
      qe(this, m(this, n1), u, i)
    );
  }
  /**
   * @public
   *
   * Used to indicate when a document within a release should be unpublished when
   * the release is run.
   *
   * @remarks
   * * If the published document does not exist, an error will be thrown.
   *
   * @param params - Version action parameters:
   *   - `releaseId` - The ID of the release to unpublish the document from.
   *   - `publishedId` - The published ID of the document to unpublish.
   * @param options - Additional action options.
   * @returns a promise that resolves to the `transactionId`.
   *
   * @example Unpublishing a release version of a published document
   * ```ts
   * await client.unpublishVersion({publishedId: 'myDocument', releaseId: 'myRelease'})
   * // The document with the ID `versions.myRelease.myDocument` will be unpublished. when `myRelease` is run.
   * ```
   */
  unpublishVersion({ releaseId: e, publishedId: t }, n) {
    const i = i0(t, e);
    return Z(
      ze(this, m(this, n1), i, t, n)
    );
  }
  mutate(e, t) {
    return Z(We(this, m(this, n1), e, t));
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(e, t) {
    return new _2(e, t, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(e) {
    return new G3(e, this);
  }
  /**
   * Perform action operations against the configured dataset
   * Returns a promise that resolves to the transaction result
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(e, t) {
    return Z(f1(this, m(this, n1), e, t));
  }
  /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */
  request(e) {
    return Z(j1(this, m(this, n1), e));
  }
  /**
   * Perform an HTTP request a `/data` sub-endpoint
   * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
   *
   * @deprecated - Use `request()` or your own HTTP library instead
   * @param endpoint - Endpoint to hit (mutate, query etc)
   * @param body - Request body
   * @param options - Request options
   * @internal
   */
  dataRequest(e, t, n) {
    return Z(P2(this, m(this, n1), e, t, n));
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(e, t) {
    return n4(this, e, t);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(e, t) {
    return W1(this, e, t);
  }
};
s2 = new WeakMap(), n1 = new WeakMap();
let z0 = Z3;
function g7(r, e) {
  return { requester: c9(r), createClient: (t) => {
    const n = c9(r);
    return new e(
      (i, a) => (a || n)({
        maxRedirects: 0,
        maxRetries: t.maxRetries,
        retryDelay: t.retryDelay,
        ...i
      }),
      t
    );
  } };
}
var _7 = [];
const w7 = g7(_7, z0), b7 = w7.createClient;
var q3 = { exports: {} }, C7 = q3.exports, v9;
function I7() {
  return v9 || (v9 = 1, function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(C7, function() {
      function t() {
        return t = Object.assign || function(E) {
          for (var j = 1; j < arguments.length; j++) {
            var _ = arguments[j];
            for (var M in _)
              Object.prototype.hasOwnProperty.call(_, M) && (E[M] = _[M]);
          }
          return E;
        }, t.apply(this, arguments);
      }
      function n(E, j) {
        if (E) {
          if (typeof E == "string") return i(E, j);
          var _ = Object.prototype.toString.call(E).slice(8, -1);
          if (_ === "Object" && E.constructor && (_ = E.constructor.name), _ === "Map" || _ === "Set") return Array.from(E);
          if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return i(E, j);
        }
      }
      function i(E, j) {
        (j == null || j > E.length) && (j = E.length);
        for (var _ = 0, M = new Array(j); _ < j; _++) M[_] = E[_];
        return M;
      }
      function a(E, j) {
        var _ = typeof Symbol < "u" && E[Symbol.iterator] || E["@@iterator"];
        if (_) return (_ = _.call(E)).next.bind(_);
        if (Array.isArray(E) || (_ = n(E)) || j) {
          _ && (E = _);
          var M = 0;
          return function() {
            return M >= E.length ? {
              done: !0
            } : {
              done: !1,
              value: E[M++]
            };
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var u = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function c(E) {
        var j = E.split("-"), _ = j[1], M = j[2], Y = j[3];
        if (!_ || !M || !Y)
          throw new Error("Malformed asset _ref '" + E + `'. Expected an id like "` + u + '".');
        var F = M.split("x"), B = F[0], a1 = F[1], w1 = +B, O = +a1, N = isFinite(w1) && isFinite(O);
        if (!N)
          throw new Error("Malformed asset _ref '" + E + `'. Expected an id like "` + u + '".');
        return {
          id: _,
          width: w1,
          height: O,
          format: Y
        };
      }
      var d = function(j) {
        var _ = j;
        return _ ? typeof _._ref == "string" : !1;
      }, f = function(j) {
        var _ = j;
        return _ ? typeof _._id == "string" : !1;
      }, b = function(j) {
        var _ = j;
        return _ && _.asset ? typeof _.asset.url == "string" : !1;
      };
      function y(E) {
        if (!E)
          return null;
        var j;
        if (typeof E == "string" && C(E))
          j = {
            asset: {
              _ref: g(E)
            }
          };
        else if (typeof E == "string")
          j = {
            asset: {
              _ref: E
            }
          };
        else if (d(E))
          j = {
            asset: E
          };
        else if (f(E))
          j = {
            asset: {
              _ref: E._id || ""
            }
          };
        else if (b(E))
          j = {
            asset: {
              _ref: g(E.asset.url)
            }
          };
        else if (typeof E.asset == "object")
          j = t({}, E);
        else
          return null;
        var _ = E;
        return _.crop && (j.crop = _.crop), _.hotspot && (j.hotspot = _.hotspot), I(j);
      }
      function C(E) {
        return /^https?:\/\//.test("" + E);
      }
      function g(E) {
        var j = E.split("/").slice(-1);
        return ("image-" + j[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function I(E) {
        if (E.crop && E.hotspot)
          return E;
        var j = t({}, E);
        return j.crop || (j.crop = {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }), j.hotspot || (j.hotspot = {
          x: 0.5,
          y: 0.5,
          height: 1,
          width: 1
        }), j;
      }
      var v = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"], ["frame", "frame"]];
      function P(E) {
        var j = t({}, E || {}), _ = j.source;
        delete j.source;
        var M = y(_);
        if (!M)
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(_) + ")");
        var Y = M.asset._ref || M.asset._id || "", F = c(Y), B = Math.round(M.crop.left * F.width), a1 = Math.round(M.crop.top * F.height), w1 = {
          left: B,
          top: a1,
          width: Math.round(F.width - M.crop.right * F.width - B),
          height: Math.round(F.height - M.crop.bottom * F.height - a1)
        }, O = M.hotspot.height * F.height / 2, N = M.hotspot.width * F.width / 2, t1 = M.hotspot.x * F.width, i1 = M.hotspot.y * F.height, h1 = {
          left: t1 - N,
          top: i1 - O,
          right: t1 + N,
          bottom: i1 + O
        };
        return j.rect || j.focalPoint || j.ignoreImageParams || j.crop || (j = t({}, j, A({
          crop: w1,
          hotspot: h1
        }, j))), L(t({}, j, {
          asset: F
        }));
      }
      function L(E) {
        var j = (E.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), _ = E.vanityName ? "/" + E.vanityName : "", M = E.asset.id + "-" + E.asset.width + "x" + E.asset.height + "." + E.asset.format + _, Y = j + "/images/" + E.projectId + "/" + E.dataset + "/" + M, F = [];
        if (E.rect) {
          var B = E.rect, a1 = B.left, w1 = B.top, O = B.width, N = B.height, t1 = a1 !== 0 || w1 !== 0 || N !== E.asset.height || O !== E.asset.width;
          t1 && F.push("rect=" + a1 + "," + w1 + "," + O + "," + N);
        }
        E.bg && F.push("bg=" + E.bg), E.focalPoint && (F.push("fp-x=" + E.focalPoint.x), F.push("fp-y=" + E.focalPoint.y));
        var i1 = [E.flipHorizontal && "h", E.flipVertical && "v"].filter(Boolean).join("");
        return i1 && F.push("flip=" + i1), v.forEach(function(h1) {
          var g1 = h1[0], E1 = h1[1];
          typeof E[g1] < "u" ? F.push(E1 + "=" + encodeURIComponent(E[g1])) : typeof E[E1] < "u" && F.push(E1 + "=" + encodeURIComponent(E[E1]));
        }), F.length === 0 ? Y : Y + "?" + F.join("&");
      }
      function A(E, j) {
        var _, M = j.width, Y = j.height;
        if (!(M && Y))
          return {
            width: M,
            height: Y,
            rect: E.crop
          };
        var F = E.crop, B = E.hotspot, a1 = M / Y, w1 = F.width / F.height;
        if (w1 > a1) {
          var O = Math.round(F.height), N = Math.round(O * a1), t1 = Math.max(0, Math.round(F.top)), i1 = Math.round((B.right - B.left) / 2 + B.left), h1 = Math.max(0, Math.round(i1 - N / 2));
          h1 < F.left ? h1 = F.left : h1 + N > F.left + F.width && (h1 = F.left + F.width - N), _ = {
            left: h1,
            top: t1,
            width: N,
            height: O
          };
        } else {
          var g1 = F.width, E1 = Math.round(g1 / a1), l2 = Math.max(0, Math.round(F.left)), u1 = Math.round((B.bottom - B.top) / 2 + B.top), b1 = Math.max(0, Math.round(u1 - E1 / 2));
          b1 < F.top ? b1 = F.top : b1 + E1 > F.top + F.height && (b1 = F.top + F.height - E1), _ = {
            left: l2,
            top: b1,
            width: g1,
            height: E1
          };
        }
        return {
          width: M,
          height: Y,
          rect: _
        };
      }
      var T = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], U = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], J = ["format"];
      function z(E) {
        return E && "config" in E ? typeof E.config == "function" : !1;
      }
      function W(E) {
        return E && "clientConfig" in E ? typeof E.clientConfig == "object" : !1;
      }
      function e1(E) {
        for (var j = v, _ = a(j), M; !(M = _()).done; ) {
          var Y = M.value, F = Y[0], B = Y[1];
          if (E === F || E === B)
            return F;
        }
        return E;
      }
      function m1(E) {
        if (z(E)) {
          var j = E.config(), _ = j.apiHost, M = j.projectId, Y = j.dataset, F = _ || "https://api.sanity.io";
          return new v1(null, {
            baseUrl: F.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: M,
            dataset: Y
          });
        }
        if (W(E)) {
          var B = E.clientConfig, a1 = B.apiHost, w1 = B.projectId, O = B.dataset, N = a1 || "https://api.sanity.io";
          return new v1(null, {
            baseUrl: N.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: w1,
            dataset: O
          });
        }
        return new v1(null, E || {});
      }
      var v1 = /* @__PURE__ */ function() {
        function E(_, M) {
          this.options = void 0, this.options = _ ? t({}, _.options || {}, M || {}) : t({}, M || {});
        }
        var j = E.prototype;
        return j.withOptions = function(M) {
          var Y = M.baseUrl || this.options.baseUrl, F = {
            baseUrl: Y
          };
          for (var B in M)
            if (M.hasOwnProperty(B)) {
              var a1 = e1(B);
              F[a1] = M[B];
            }
          return new E(this, t({
            baseUrl: Y
          }, F));
        }, j.image = function(M) {
          return this.withOptions({
            source: M
          });
        }, j.dataset = function(M) {
          return this.withOptions({
            dataset: M
          });
        }, j.projectId = function(M) {
          return this.withOptions({
            projectId: M
          });
        }, j.bg = function(M) {
          return this.withOptions({
            bg: M
          });
        }, j.dpr = function(M) {
          return this.withOptions(M && M !== 1 ? {
            dpr: M
          } : {});
        }, j.width = function(M) {
          return this.withOptions({
            width: M
          });
        }, j.height = function(M) {
          return this.withOptions({
            height: M
          });
        }, j.focalPoint = function(M, Y) {
          return this.withOptions({
            focalPoint: {
              x: M,
              y: Y
            }
          });
        }, j.maxWidth = function(M) {
          return this.withOptions({
            maxWidth: M
          });
        }, j.minWidth = function(M) {
          return this.withOptions({
            minWidth: M
          });
        }, j.maxHeight = function(M) {
          return this.withOptions({
            maxHeight: M
          });
        }, j.minHeight = function(M) {
          return this.withOptions({
            minHeight: M
          });
        }, j.size = function(M, Y) {
          return this.withOptions({
            width: M,
            height: Y
          });
        }, j.blur = function(M) {
          return this.withOptions({
            blur: M
          });
        }, j.sharpen = function(M) {
          return this.withOptions({
            sharpen: M
          });
        }, j.rect = function(M, Y, F, B) {
          return this.withOptions({
            rect: {
              left: M,
              top: Y,
              width: F,
              height: B
            }
          });
        }, j.format = function(M) {
          return this.withOptions({
            format: M
          });
        }, j.invert = function(M) {
          return this.withOptions({
            invert: M
          });
        }, j.orientation = function(M) {
          return this.withOptions({
            orientation: M
          });
        }, j.quality = function(M) {
          return this.withOptions({
            quality: M
          });
        }, j.forceDownload = function(M) {
          return this.withOptions({
            download: M
          });
        }, j.flipHorizontal = function() {
          return this.withOptions({
            flipHorizontal: !0
          });
        }, j.flipVertical = function() {
          return this.withOptions({
            flipVertical: !0
          });
        }, j.ignoreImageParams = function() {
          return this.withOptions({
            ignoreImageParams: !0
          });
        }, j.fit = function(M) {
          if (T.indexOf(M) === -1)
            throw new Error('Invalid fit mode "' + M + '"');
          return this.withOptions({
            fit: M
          });
        }, j.crop = function(M) {
          if (U.indexOf(M) === -1)
            throw new Error('Invalid crop mode "' + M + '"');
          return this.withOptions({
            crop: M
          });
        }, j.saturation = function(M) {
          return this.withOptions({
            saturation: M
          });
        }, j.auto = function(M) {
          if (J.indexOf(M) === -1)
            throw new Error('Invalid auto mode "' + M + '"');
          return this.withOptions({
            auto: M
          });
        }, j.pad = function(M) {
          return this.withOptions({
            pad: M
          });
        }, j.vanityName = function(M) {
          return this.withOptions({
            vanityName: M
          });
        }, j.frame = function(M) {
          if (M !== 1)
            throw new Error('Invalid frame value "' + M + '"');
          return this.withOptions({
            frame: M
          });
        }, j.url = function() {
          return P(this.options);
        }, j.toString = function() {
          return this.url();
        }, E;
      }();
      return m1;
    });
  }(q3)), q3.exports;
}
var E7 = /* @__PURE__ */ I7();
const S7 = /* @__PURE__ */ U6(E7), i4 = b7({
  projectId: "e2soh655",
  dataset: "production",
  useCdn: !0,
  apiVersion: "2025-02-28"
}), x7 = S7(i4), F3 = (r) => x7.image(r), L7 = async () => {
  try {
    const r = `*[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      order,
      category->{
        _id,
        title,
        description,
        slug
      },
      page->{
        _id,
        title,
        slug,
        "tableOfContents": *[_type == "tableOfContents" && references(^._id)] {
          _id,
          title,
          "slug": slug.current,
          subsections[]{
            title,
            "slug": slug.current
          }
        }
      }
    }`;
    console.log("Executing Sanity query...");
    const e = await i4.fetch(r);
    return console.log("Query results:", e), e;
  } catch (r) {
    throw console.error("Error fetching FAQs from Sanity:", r), r;
  }
}, M7 = [
  {
    _id: "default-1",
    question: "How do I get started?",
    answer: "We'll load the real FAQs from Sanity shortly...",
    order: 1,
    category: {
      _id: "default-cat",
      title: "General"
    }
  }
], j7 = () => /* @__PURE__ */ S.jsx(
  "svg",
  {
    className: s1.arrowIcon,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ S.jsx(
      "path",
      {
        d: "M5 12H19M19 12L12 5M19 12L12 19",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), gi = ({
  title: r = "Advice and answers from the team",
  initialFaqs: e = M7,
  description: t
}) => {
  const [n, i] = o2(""), [a, u] = o2(e), [c, d] = o2(!1), [f, b] = o2(null);
  C1(() => {
    (async () => {
      try {
        d(!0);
        const P = await L7();
        u(P || []);
      } catch (P) {
        b("Failed to load FAQs. Please try again later."), console.error("Error loading FAQs:", P);
      } finally {
        d(!1);
      }
    })();
  }, []);
  const y = z3(() => {
    if (!n.trim()) return a;
    const v = n.toLowerCase();
    return a.filter(
      (P) => P.question.toLowerCase().includes(v) || P.answer.toLowerCase().includes(v)
    );
  }, [a, n]), C = z3(() => y.length ? y.reduce((v, P) => {
    var T;
    const L = P.category || { title: "Other" }, A = L.title.charAt(0).toUpperCase() + L.title.slice(1);
    return v.has(A) || v.set(A, {
      faqs: [],
      description: L.description || ""
    }), (T = v.get(A)) == null || T.faqs.push(P), v;
  }, /* @__PURE__ */ new Map()) : /* @__PURE__ */ new Map(), [y]), g = (v) => {
    if (!v.page)
      return `/faq/${v._id}`;
    const L = `/docs/${v.page.slug.current}`;
    if (v.page.tableOfContents && v.page.tableOfContents.length > 0) {
      const T = v.page.tableOfContents[0].slug.replace(/^#+/, "");
      return `${L}#${T}`;
    }
    return L;
  }, I = (v) => v.answer.substring(0, 120) + (v.answer.length > 120 ? "..." : "");
  return /* @__PURE__ */ S.jsx("div", { className: s1.faqRoot, children: /* @__PURE__ */ S.jsxs(
    "div",
    {
      className: s1.faqWrapper,
      style: {
        "--banner-image": "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')"
      },
      children: [
        /* @__PURE__ */ S.jsxs("div", { className: s1.banner, children: [
          /* @__PURE__ */ S.jsx("div", { className: s1.bannerOverlay }),
          /* @__PURE__ */ S.jsxs("div", { className: s1.bannerContent, children: [
            /* @__PURE__ */ S.jsx("h1", { className: s1.bannerTitle, children: r }),
            t && /* @__PURE__ */ S.jsx("p", { className: s1.bannerDescription, children: t }),
            /* @__PURE__ */ S.jsxs("div", { className: s1.searchBar, children: [
              /* @__PURE__ */ S.jsx(
                "svg",
                {
                  className: s1.searchIcon,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ S.jsx(
                    "path",
                    {
                      d: "M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round"
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "text",
                  className: s1.searchInput,
                  value: n,
                  onChange: (v) => i(v.target.value),
                  placeholder: "Search answer or question"
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: s1.faqContent, children: [
          n.trim() && /* @__PURE__ */ S.jsxs("div", { className: s1.searchResults, children: [
            /* @__PURE__ */ S.jsx("span", { children: y.length === 0 ? `No results for "${n}"` : `Found ${y.length} result${y.length === 1 ? "" : "s"} for "${n}"` }),
            /* @__PURE__ */ S.jsx(
              "button",
              {
                onClick: () => i(""),
                className: s1.clearSearch,
                children: "Clear search"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: s1.faqItems, children: c ? /* @__PURE__ */ S.jsx("div", { className: s1.loading, children: "Loading FAQs..." }) : f ? /* @__PURE__ */ S.jsx("div", { className: s1.error, children: f }) : y.length === 0 && n.trim() ? /* @__PURE__ */ S.jsx("div", { className: s1.noResults, children: "No matching questions found. Try adjusting your search terms." }) : Array.from(C.entries()).map(
            ([v, { faqs: P, description: L }]) => /* @__PURE__ */ S.jsxs("div", { className: s1.faqCategory, children: [
              /* @__PURE__ */ S.jsx("h2", { className: s1.faqCategoryTitle, children: v }),
              L && /* @__PURE__ */ S.jsx("p", { className: s1.faqCategoryDescription, children: L }),
              P.map((A) => /* @__PURE__ */ S.jsx(
                "a",
                {
                  href: g(A),
                  className: s1.faqItem,
                  children: /* @__PURE__ */ S.jsxs("div", { className: s1.faqItemContent, children: [
                    /* @__PURE__ */ S.jsxs("div", { className: s1.faqItemMain, children: [
                      /* @__PURE__ */ S.jsx("h3", { className: s1.faqQuestion, children: A.question }),
                      /* @__PURE__ */ S.jsx("p", { className: s1.faqDescription, children: I(A) })
                    ] }),
                    /* @__PURE__ */ S.jsx(j7, {})
                  ] })
                },
                A._id
              ))
            ] }, v)
          ) })
        ] })
      ]
    }
  ) });
};
function y9(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function g9(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? y9(Object(t), !0).forEach(function(n) {
      O7(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : y9(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function O7(r, e, t) {
  return (e = k7(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function k7(r) {
  var e = P7(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function P7(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function K3(r) {
  return r._type === "span" && "text" in r && typeof r.text == "string" && (typeof r.marks > "u" || Array.isArray(r.marks) && r.marks.every((e) => typeof e == "string"));
}
function et(r) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof r._type == "string" && // Toolkit-types like nested spans are @-prefixed
    r._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in r) || !r.markDefs || Array.isArray(r.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    r.markDefs.every((e) => typeof e._key == "string")) && // `children` is required and needs to be an array
    "children" in r && Array.isArray(r.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    r.children.every((e) => typeof e == "object" && "_type" in e)
  );
}
function tt(r) {
  return et(r) && "listItem" in r && typeof r.listItem == "string" && (typeof r.level > "u" || typeof r.level == "number");
}
function rt(r) {
  return r._type === "@list";
}
function nt(r) {
  return r._type === "@span";
}
function it(r) {
  return r._type === "@text";
}
const _9 = ["strong", "em", "code", "underline", "strike-through"];
function A7(r, e, t) {
  if (!K3(r) || !r.marks) return [];
  if (!r.marks.length) return [];
  const n = r.marks.slice(), i = {};
  return n.forEach((a) => {
    i[a] = 1;
    for (let u = e + 1; u < t.length; u++) {
      const c = t[u];
      if (c && K3(c) && Array.isArray(c.marks) && c.marks.indexOf(a) !== -1) i[a]++;
      else break;
    }
  }), n.sort((a, u) => T7(i, a, u));
}
function T7(r, e, t) {
  const n = r[e], i = r[t];
  if (n !== i) return i - n;
  const a = _9.indexOf(e), u = _9.indexOf(t);
  return a !== u ? a - u : e.localeCompare(t);
}
function $7(r) {
  var e, t;
  const {
    children: n
  } = r, i = (e = r.markDefs) != null ? e : [];
  if (!n || !n.length) return [];
  const a = n.map(A7), u = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let c = [u];
  for (let d = 0; d < n.length; d++) {
    const f = n[d];
    if (!f) continue;
    const b = a[d] || [];
    let y = 1;
    if (c.length > 1) for (y; y < c.length; y++) {
      const g = ((t = c[y]) == null ? void 0 : t.markKey) || "", I = b.indexOf(g);
      if (I === -1) break;
      b.splice(I, 1);
    }
    c = c.slice(0, y);
    let C = c[c.length - 1];
    if (C) {
      for (const g of b) {
        const I = i == null ? void 0 : i.find((L) => L._key === g), v = I ? I._type : g, P = {
          _type: "@span",
          _key: f._key,
          children: [],
          markDef: I,
          markType: v,
          markKey: g
        };
        C.children.push(P), c.push(P), C = P;
      }
      if (K3(f)) {
        const g = f.text.split(`
`);
        for (let I = g.length; I-- > 1; ) g.splice(I, 0, `
`);
        C.children = C.children.concat(g.map((I) => ({
          _type: "@text",
          text: I
        })));
      } else C.children = C.children.concat(f);
    }
  }
  return u.children;
}
function R7(r, e) {
  const t = [];
  let n;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (a) {
      if (!tt(a)) {
        t.push(a), n = void 0;
        continue;
      }
      if (!n) {
        n = D3(a, i, e), t.push(n);
        continue;
      }
      if (F7(a, n)) {
        n.children.push(a);
        continue;
      }
      if ((a.level || 1) > n.level) {
        const u = D3(a, i, e);
        if (e === "html") {
          const c = n.children[n.children.length - 1], d = g9(g9({}, c), {}, {
            children: [...c.children, u]
          });
          n.children[n.children.length - 1] = d;
        } else n.children.push(u);
        n = u;
        continue;
      }
      if ((a.level || 1) < n.level) {
        const u = t[t.length - 1], c = u && W0(u, a);
        if (c) {
          n = c, n.children.push(a);
          continue;
        }
        n = D3(a, i, e), t.push(n);
        continue;
      }
      if (a.listItem !== n.listItem) {
        const u = t[t.length - 1], c = u && W0(u, {
          level: a.level || 1
        });
        if (c && c.listItem === a.listItem) {
          n = c, n.children.push(a);
          continue;
        } else {
          n = D3(a, i, e), t.push(n);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", a), t.push(a);
    }
  }
  return t;
}
function F7(r, e) {
  return (r.level || 1) === e.level && r.listItem === e.listItem;
}
function D3(r, e, t) {
  return {
    _type: "@list",
    _key: `${r._key || `${e}`}-parent`,
    mode: t,
    level: r.level || 1,
    listItem: r.listItem,
    children: [r]
  };
}
function W0(r, e) {
  const t = e.level || 1, n = e.listItem || "normal", i = typeof e.listItem == "string";
  if (rt(r) && (r.level || 1) === t && i && (r.listItem || "normal") === n) return r;
  if (!("children" in r)) return;
  const a = r.children[r.children.length - 1];
  return a && !K3(a) ? W0(a, e) : void 0;
}
function st(r) {
  let e = "";
  return r.children.forEach((t) => {
    it(t) ? e += t.text : nt(t) && (e += st(t));
  }), e;
}
const D7 = "html", N7 = ["block", "list", "listItem", "marks", "types"], U7 = ["listItem"], q7 = ["_key"];
function w9(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function V1(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? w9(Object(t), !0).forEach(function(n) {
      z7(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : w9(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function z7(r, e, t) {
  return (e = W7(e)) in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function W7(r) {
  var e = B7(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function B7(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function B0(r, e) {
  if (r == null) return {};
  var t, n, i = H7(r, e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++) t = a[n], e.includes(t) || {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
  }
  return i;
}
function H7(r, e) {
  if (r == null) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}
const V7 = {
  number: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("ol", {
    children: r
  }),
  bullet: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("ul", {
    children: r
  })
}, G7 = ({
  children: r
}) => /* @__PURE__ */ S.jsx("li", {
  children: r
}), J7 = ({
  children: r,
  value: e
}) => /* @__PURE__ */ S.jsx("a", {
  href: e == null ? void 0 : e.href,
  children: r
}), Y7 = {
  textDecoration: "underline"
}, Q7 = {
  em: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("em", {
    children: r
  }),
  strong: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("strong", {
    children: r
  }),
  code: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("code", {
    children: r
  }),
  underline: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("span", {
    style: Y7,
    children: r
  }),
  "strike-through": ({
    children: r
  }) => /* @__PURE__ */ S.jsx("del", {
    children: r
  }),
  link: J7
}, S3 = (r, e) => `[@portabletext/react] Unknown ${r}, specify a component for it in the \`components.${e}\` prop`, ot = (r) => S3(`block type "${r}"`, "types"), K7 = (r) => S3(`mark type "${r}"`, "marks"), X7 = (r) => S3(`block style "${r}"`, "block"), Z7 = (r) => S3(`list style "${r}"`, "list"), ei = (r) => S3(`list item style "${r}"`, "listItem");
function ti(r) {
  console.warn(r);
}
const b9 = {
  display: "none"
}, ri = ({
  value: r,
  isInline: e
}) => {
  const t = ot(r._type);
  return e ? /* @__PURE__ */ S.jsx("span", {
    style: b9,
    children: t
  }) : /* @__PURE__ */ S.jsx("div", {
    style: b9,
    children: t
  });
}, ni = ({
  markType: r,
  children: e
}) => /* @__PURE__ */ S.jsx("span", {
  className: `unknown__pt__mark__${r}`,
  children: e
}), ii = ({
  children: r
}) => /* @__PURE__ */ S.jsx("p", {
  children: r
}), si = ({
  children: r
}) => /* @__PURE__ */ S.jsx("ul", {
  children: r
}), oi = ({
  children: r
}) => /* @__PURE__ */ S.jsx("li", {
  children: r
}), ai = () => /* @__PURE__ */ S.jsx("br", {}), ui = {
  normal: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("p", {
    children: r
  }),
  blockquote: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("blockquote", {
    children: r
  }),
  h1: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h1", {
    children: r
  }),
  h2: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h2", {
    children: r
  }),
  h3: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h3", {
    children: r
  }),
  h4: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h4", {
    children: r
  }),
  h5: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h5", {
    children: r
  }),
  h6: ({
    children: r
  }) => /* @__PURE__ */ S.jsx("h6", {
    children: r
  })
}, C9 = {
  types: {},
  block: ui,
  marks: Q7,
  list: V7,
  listItem: G7,
  hardBreak: ai,
  unknownType: ri,
  unknownMark: ni,
  unknownList: si,
  unknownListItem: oi,
  unknownBlockStyle: ii
};
function ci(r, e) {
  const {
    block: t,
    list: n,
    listItem: i,
    marks: a,
    types: u
  } = e, c = B0(e, N7);
  return V1(V1({}, r), {}, {
    block: n3(r, e, "block"),
    list: n3(r, e, "list"),
    listItem: n3(r, e, "listItem"),
    marks: n3(r, e, "marks"),
    types: n3(r, e, "types")
  }, c);
}
function n3(r, e, t) {
  const n = e[t], i = r[t];
  return typeof n == "function" || n && typeof i == "function" ? n : n ? V1(V1({}, i), n) : i;
}
function N3({
  value: r,
  components: e,
  listNestingMode: t,
  onMissingComponent: n = ti
}) {
  const i = n || hi, a = Array.isArray(r) ? r : [r], u = R7(a, t || D7), c = z3(() => e ? ci(C9, e) : C9, [e]), d = z3(() => li(c, i), [c, i]), f = u.map((b, y) => d({
    node: b,
    index: y,
    isInline: !1,
    renderNode: d
  }));
  return /* @__PURE__ */ S.jsx(S.Fragment, {
    children: f
  });
}
const li = (r, e) => {
  function t(y) {
    const {
      node: C,
      index: g,
      isInline: I
    } = y, v = C._key || `node-${g}`;
    return rt(C) ? a(C, g, v) : tt(C) ? i(C, g, v) : nt(C) ? u(C, g, v) : n(C) ? b(C, g, v, I) : et(C) ? c(C, g, v, I) : it(C) ? d(C, v) : f(C, g, v, I);
  }
  function n(y) {
    return y._type in r.types;
  }
  function i(y, C, g) {
    const I = I9({
      node: y,
      index: C,
      isInline: !1,
      renderNode: t
    }), v = r.listItem, P = (typeof v == "function" ? v : v[y.listItem]) || r.unknownListItem;
    if (P === r.unknownListItem) {
      const A = y.listItem || "bullet";
      e(ei(A), {
        type: A,
        nodeType: "listItemStyle"
      });
    }
    let L = I.children;
    if (y.style && y.style !== "normal") {
      const {
        listItem: A
      } = y, T = B0(y, U7);
      L = t({
        node: T,
        index: C,
        isInline: !1
      });
    }
    return /* @__PURE__ */ S.jsx(P, {
      value: y,
      index: C,
      isInline: !1,
      renderNode: t,
      children: L
    }, g);
  }
  function a(y, C, g) {
    const I = y.children.map((L, A) => t({
      node: L._key ? L : V1(V1({}, L), {}, {
        _key: `li-${C}-${A}`
      }),
      index: A,
      isInline: !1
    })), v = r.list, P = (typeof v == "function" ? v : v[y.listItem]) || r.unknownList;
    if (P === r.unknownList) {
      const L = y.listItem || "bullet";
      e(Z7(L), {
        nodeType: "listStyle",
        type: L
      });
    }
    return /* @__PURE__ */ S.jsx(P, {
      value: y,
      index: C,
      isInline: !1,
      renderNode: t,
      children: I
    }, g);
  }
  function u(y, C, g) {
    const {
      markDef: I,
      markType: v,
      markKey: P
    } = y, L = r.marks[v] || r.unknownMark, A = y.children.map((T, U) => t({
      node: T,
      index: U,
      isInline: !0
    }));
    return L === r.unknownMark && e(K7(v), {
      nodeType: "mark",
      type: v
    }), /* @__PURE__ */ S.jsx(L, {
      text: st(y),
      value: I,
      markType: v,
      markKey: P,
      renderNode: t,
      children: A
    }, g);
  }
  function c(y, C, g, I) {
    const v = I9({
      node: y,
      index: C,
      isInline: I,
      renderNode: t
    }), {
      _key: P
    } = v, L = B0(v, q7), A = L.node.style || "normal", T = (typeof r.block == "function" ? r.block : r.block[A]) || r.unknownBlockStyle;
    return T === r.unknownBlockStyle && e(X7(A), {
      nodeType: "blockStyle",
      type: A
    }), /* @__PURE__ */ S.jsx(T, V1(V1({}, L), {}, {
      value: L.node,
      renderNode: t
    }), g);
  }
  function d(y, C) {
    if (y.text === `
`) {
      const g = r.hardBreak;
      return g ? /* @__PURE__ */ S.jsx(g, {}, C) : `
`;
    }
    return y.text;
  }
  function f(y, C, g, I) {
    const v = {
      value: y,
      isInline: I,
      index: C,
      renderNode: t
    };
    e(ot(y._type), {
      nodeType: "block",
      type: y._type
    });
    const P = r.unknownType;
    return /* @__PURE__ */ S.jsx(P, V1({}, v), g);
  }
  function b(y, C, g, I) {
    const v = {
      value: y,
      isInline: I,
      index: C,
      renderNode: t
    }, P = r.types[y._type];
    return P ? /* @__PURE__ */ S.jsx(P, V1({}, v), g) : null;
  }
  return t;
};
function I9(r) {
  const {
    node: e,
    index: t,
    isInline: n,
    renderNode: i
  } = r, a = $7(e).map((u, c) => i({
    node: u,
    isInline: !0,
    index: c,
    renderNode: i
  }));
  return {
    _key: e._key || `block-${t}`,
    children: a,
    index: t,
    isInline: n,
    node: e
  };
}
function hi() {
}
const di = `
  *[_type == "page" && slug.current == $slug][0] {
    title,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "publishedAt": publishedAt,
    tableOfContents[]->{
      _id,
      title,
      order,
      "slug": slug.current,
      subsections[]{ title, "slug": slug.current }
    },
    body[]{
      _type == "table" => {
        _type,
        layoutOrientation,
        rows[]{ cells[]{ column, content, width } }
      },
      _type != "table" => @
    }
  }
`, _i = ({ slug: r }) => {
  const [e, t] = o2(!0), [n, i] = o2(null), [a, u] = o2(null);
  if (C1(() => {
    r && (t(!0), i4.fetch(di, { slug: r }).then((L) => {
      L ? u(L) : (i("Page not found."), u(null));
    }).catch(() => i("Failed to load page.")).finally(() => t(!1)));
  }, [r]), e) return /* @__PURE__ */ S.jsx("div", { className: I1.loading, children: "Loading…" });
  if (n || !a) return /* @__PURE__ */ S.jsx("div", { className: I1.error, children: n });
  const { title: c, authorName: d, authorImage: f, publishedAt: b, tableOfContents: y, body: C } = a, g = b ? new Date(b).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : null, I = [...y].sort((L, A) => L.order - A.order), v = new Map(
    I.map((L) => [
      L._id,
      { title: L.title, slug: L.slug.replace(/^#+/, "") }
    ])
  ), P = {
    block: {
      h2: ({ children: L }) => {
        const A = String(L).toLowerCase().replace(/\s+/g, "-");
        return /* @__PURE__ */ S.jsx("h2", { id: A, children: L });
      },
      h3: ({ children: L }) => {
        const A = String(L).toLowerCase().replace(/\s+/g, "-");
        return /* @__PURE__ */ S.jsx("h3", { id: A, children: L });
      }
    },
    types: {
      image: ({ value: L }) => {
        var z;
        if (!((z = L == null ? void 0 : L.asset) != null && z._ref)) return null;
        const A = F3(L).width(320).auto("format").url(), T = F3(L).width(640).auto("format").url(), U = F3(L).width(800).auto("format").url(), J = F3(L).width(1200).auto("format").url();
        return /* @__PURE__ */ S.jsx(
          "img",
          {
            src: U,
            srcSet: `${A} 320w, ${T} 640w, ${U} 800w, ${J} 1200w`,
            sizes: "(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 50vw",
            alt: L.alt || L.caption || "Image",
            className: I1.portableImage
          }
        );
      },
      reference: ({ value: L }) => {
        if (!L._ref) return null;
        const A = v.get(L._ref);
        return A ? /* @__PURE__ */ S.jsx("h3", { className: I1.sectionReferenceLink, id: A.slug, children: A.title }) : null;
      },
      table: ({ value: L }) => {
        var J;
        if (!((J = L == null ? void 0 : L.rows) != null && J.length)) return null;
        const A = L.layoutOrientation === "left" ? "left" : "top", T = L.rows[0].cells.map((z) => z.column), U = L.rows[0].cells.map((z) => z.width || "auto");
        return A === "top" ? /* @__PURE__ */ S.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ S.jsxs("table", { className: "min-w-full table-auto border-collapse", children: [
          /* @__PURE__ */ S.jsx("thead", { className: "bg-gray-100 text-gray-700", children: /* @__PURE__ */ S.jsx("tr", { children: T.map((z, W) => /* @__PURE__ */ S.jsx(
            "th",
            {
              className: "px-4 py-2 border border-gray-300 text-left",
              style: { width: U[W] },
              children: z
            },
            z + W
          )) }) }),
          /* @__PURE__ */ S.jsx("tbody", { children: L.rows.map((z, W) => /* @__PURE__ */ S.jsx("tr", { className: "even:bg-gray-50", children: T.map((e1, m1) => {
            const v1 = z.cells.find((E) => E.column === e1);
            return /* @__PURE__ */ S.jsx(
              "td",
              {
                className: "px-4 py-2 border border-gray-300 align-top",
                style: { width: U[m1], minWidth: U[m1] },
                children: v1 != null && v1.content ? /* @__PURE__ */ S.jsx(
                  N3,
                  {
                    value: v1.content,
                    components: P
                  }
                ) : /* @__PURE__ */ S.jsx("span", { className: "text-gray-400", children: "—" })
              },
              e1 + m1
            );
          }) }, W)) })
        ] }) }) : /* @__PURE__ */ S.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ S.jsx("table", { className: "w-full table-auto border-collapse", children: /* @__PURE__ */ S.jsx("tbody", { children: L.rows.map((z, W) => {
          var e1, m1;
          return /* @__PURE__ */ S.jsxs("tr", { className: "even:bg-gray-50", children: [
            /* @__PURE__ */ S.jsx(
              "th",
              {
                className: "px-4 py-2 border border-gray-300 text-left align-top break-words",
                style: { width: U[0] },
                children: ((e1 = z.cells[0]) == null ? void 0 : e1.column) || "—"
              }
            ),
            /* @__PURE__ */ S.jsx(
              "td",
              {
                className: "px-4 py-2 border border-gray-300 align-top break-words",
                style: {
                  width: U[1] || "auto",
                  minWidth: U[1] || "auto"
                },
                children: (m1 = z.cells[0]) != null && m1.content ? /* @__PURE__ */ S.jsx(
                  N3,
                  {
                    value: z.cells[0].content,
                    components: P
                  }
                ) : /* @__PURE__ */ S.jsx("span", { className: "text-gray-400", children: "—" })
              }
            ),
            z.cells.slice(1).map((v1, E) => /* @__PURE__ */ S.jsx(
              "td",
              {
                className: "px-4 py-2 border border-gray-300 align-top break-words",
                style: {
                  width: U[E + 1],
                  minWidth: U[E + 1]
                },
                children: v1 != null && v1.content ? /* @__PURE__ */ S.jsx(
                  N3,
                  {
                    value: v1.content,
                    components: P
                  }
                ) : /* @__PURE__ */ S.jsx("span", { className: "text-gray-400", children: "—" })
              },
              E
            ))
          ] }, W);
        }) }) }) });
      }
    }
  };
  return /* @__PURE__ */ S.jsxs("div", { className: I1.container, children: [
    /* @__PURE__ */ S.jsx("aside", { className: I1.stickySidebar, children: /* @__PURE__ */ S.jsxs("div", { className: I1.sidebarInner, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Table Of Content" }),
      /* @__PURE__ */ S.jsx("ul", { children: I.map((L) => /* @__PURE__ */ S.jsx("li", { children: /* @__PURE__ */ S.jsx("a", { href: `#${L.slug.replace(/^#+/, "")}`, children: L.title }) }, L._id)) })
    ] }) }),
    /* @__PURE__ */ S.jsxs("article", { className: I1.mainContent, children: [
      /* @__PURE__ */ S.jsxs("nav", { className: I1.breadcrumbs, children: [
        /* @__PURE__ */ S.jsx("a", { href: "/", children: "All Collections" }),
        " > ",
        /* @__PURE__ */ S.jsx("span", { children: c })
      ] }),
      /* @__PURE__ */ S.jsx("h1", { className: I1.pageTitle, children: c }),
      /* @__PURE__ */ S.jsxs("div", { className: I1.metaInfo, children: [
        f ? /* @__PURE__ */ S.jsx(
          "img",
          {
            src: f,
            alt: d || "Author",
            className: I1.authorImage
          }
        ) : /* @__PURE__ */ S.jsx("div", { className: I1.authorPlaceholder }),
        /* @__PURE__ */ S.jsxs("div", { children: [
          d && /* @__PURE__ */ S.jsxs("div", { className: I1.authorName, children: [
            "Written by ",
            d
          ] }),
          g && /* @__PURE__ */ S.jsxs("div", { className: I1.publishedDate, children: [
            "Updated ",
            g
          ] })
        ] })
      ] }),
      I.length > 0 && /* @__PURE__ */ S.jsxs("section", { className: I1.tocInContent, children: [
        /* @__PURE__ */ S.jsx("h2", { children: "Table Of Content" }),
        /* @__PURE__ */ S.jsx("ul", { children: I.map((L) => /* @__PURE__ */ S.jsx("li", { className: I1.tocItem, children: /* @__PURE__ */ S.jsx("a", { href: `#${L.slug.replace(/^#+/, "")}`, children: L.title }) }, L._id)) })
      ] }),
      /* @__PURE__ */ S.jsx("section", { className: I1.bodyContent, children: /* @__PURE__ */ S.jsx(N3, { value: C, components: P }) })
    ] })
  ] });
};
export {
  yi as C,
  _i as D,
  gi as F,
  mi as N,
  U6 as g,
  de as i
};
