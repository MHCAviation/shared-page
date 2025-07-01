import * as I from "react";
import m3, { useState as C1, useRef as C2, useEffect as K, useCallback as j4, useMemo as M2 } from "react";
import { a as p3, u as x2, b as R4 } from "./server-D_08APjE.js";
const D4 = "_faqRoot_wkrsy_2", T4 = "_faqWrapper_wkrsy_16", F4 = "_faqContent_wkrsy_23", O4 = "_faqItems_wkrsy_30", A4 = "_faqItem_wkrsy_30", $4 = "_faqItemContent_wkrsy_55", N4 = "_faqItemMain_wkrsy_62", W4 = "_faqQuestion_wkrsy_66", U4 = "_faqDescription_wkrsy_78", q4 = "_faqCategory_wkrsy_123", z4 = "_faqCategoryTitle_wkrsy_146", B4 = "_faqCategoryDescription_wkrsy_157", H4 = "_faqCategoryCount_wkrsy_166", V4 = "_noResults_wkrsy_172", G4 = "_searchResults_wkrsy_183", J4 = "_clearSearch_wkrsy_194", V = {
  faqRoot: D4,
  faqWrapper: T4,
  faqContent: F4,
  faqItems: O4,
  faqItem: A4,
  faqItemContent: $4,
  faqItemMain: N4,
  faqQuestion: W4,
  faqDescription: U4,
  faqCategory: q4,
  faqCategoryTitle: z4,
  faqCategoryDescription: B4,
  faqCategoryCount: H4,
  noResults: V4,
  searchResults: G4,
  clearSearch: J4
}, Y4 = "_docPageRoot_uwotq_5", K4 = "_container_uwotq_29", Q4 = "_sectionReferenceLink_uwotq_53", X4 = "_mainContent_uwotq_65", Z4 = "_breadcrumbs_uwotq_75", e9 = "_pageTitle_uwotq_105", t9 = "_metaInfo_uwotq_117", n9 = "_authorImage_uwotq_135", r9 = "_authorName_uwotq_151", a9 = "_publishedDate_uwotq_159", i9 = "_tocInContent_uwotq_169", o9 = "_bodyContent_uwotq_221", s9 = "_portableImage_uwotq_295", l9 = "_stickySidebar_uwotq_323", u9 = "_sidebarInner_uwotq_333", c9 = "_error_uwotq_441", r1 = {
  docPageRoot: Y4,
  container: K4,
  sectionReferenceLink: Q4,
  mainContent: X4,
  breadcrumbs: Z4,
  pageTitle: e9,
  metaInfo: t9,
  authorImage: n9,
  authorName: r9,
  publishedDate: a9,
  tocInContent: i9,
  bodyContent: o9,
  portableImage: s9,
  stickySidebar: l9,
  sidebarInner: u9,
  error: c9
}, h9 = "_banner_1k3lo_5", d9 = "_bannerOverlay_1k3lo_25", f9 = "_bannerContent_1k3lo_43", m9 = "_bannerTitle_1k3lo_61", p9 = "_bannerDescription_1k3lo_73", v9 = "_searchBar_1k3lo_85", g9 = "_searchInput_1k3lo_113", y9 = "_searchIcon_1k3lo_169", W1 = {
  banner: h9,
  bannerOverlay: d9,
  bannerContent: f9,
  bannerTitle: m9,
  bannerDescription: p9,
  searchBar: v9,
  searchInput: g9,
  searchIcon: y9
};
var L2 = { exports: {} }, s2 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G3;
function _9() {
  if (G3) return s2;
  G3 = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(o, i, u) {
    var m = null;
    if (u !== void 0 && (m = "" + u), i.key !== void 0 && (m = "" + i.key), "key" in i) {
      u = {};
      for (var h in i)
        h !== "key" && (u[h] = i[h]);
    } else u = i;
    return i = u.ref, {
      $$typeof: t,
      type: o,
      key: m,
      ref: i !== void 0 ? i : null,
      props: u
    };
  }
  return s2.Fragment = e, s2.jsx = n, s2.jsxs = n, s2;
}
var l2 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J3;
function w9() {
  return J3 || (J3 = 1, process.env.NODE_ENV !== "production" && function() {
    function t(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === J ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case L:
          return "Fragment";
        case d:
          return "Profiler";
        case R:
          return "StrictMode";
        case F:
          return "Suspense";
        case A:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case _:
            return "Portal";
          case j:
            return (E.displayName || "Context") + ".Provider";
          case P:
            return (E._context.displayName || "Context") + ".Consumer";
          case N:
            var U = E.render;
            return E = E.displayName, E || (E = U.displayName || U.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case D:
            return U = E.displayName || null, U !== null ? U : t(E.type) || "Memo";
          case $:
            U = E._payload, E = E._init;
            try {
              return t(E(U));
            } catch {
            }
        }
      return null;
    }
    function e(E) {
      return "" + E;
    }
    function n(E) {
      try {
        e(E);
        var U = !1;
      } catch {
        U = !0;
      }
      if (U) {
        U = console;
        var Y = U.error, a1 = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return Y.call(
          U,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          a1
        ), e(E);
      }
    }
    function o(E) {
      if (E === L) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === $)
        return "<...>";
      try {
        var U = t(E);
        return U ? "<" + U + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var E = e1.A;
      return E === null ? null : E.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function m(E) {
      if (P1.call(E, "key")) {
        var U = Object.getOwnPropertyDescriptor(E, "key").get;
        if (U && U.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function h(E, U) {
      function Y() {
        g1 || (g1 = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          U
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: Y,
        configurable: !0
      });
    }
    function v() {
      var E = t(this.type);
      return h1[E] || (h1[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function p(E, U, Y, a1, x1, d1, z1, G1) {
      return Y = d1.ref, E = {
        $$typeof: C,
        type: E,
        key: U,
        props: d1,
        _owner: x1
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z1
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G1
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function x(E, U, Y, a1, x1, d1, z1, G1) {
      var X = U.children;
      if (X !== void 0)
        if (a1)
          if (O(X)) {
            for (a1 = 0; a1 < X.length; a1++)
              b(X[a1]);
            Object.freeze && Object.freeze(X);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(X);
      if (P1.call(U, "key")) {
        X = t(E);
        var _1 = Object.keys(U).filter(function($2) {
          return $2 !== "key";
        });
        a1 = 0 < _1.length ? "{key: someKey, " + _1.join(": ..., ") + ": ...}" : "{key: someKey}", q1[X + a1] || (_1 = 0 < _1.length ? "{" + _1.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          a1,
          X,
          _1,
          X
        ), q1[X + a1] = !0);
      }
      if (X = null, Y !== void 0 && (n(Y), X = "" + Y), m(U) && (n(U.key), X = "" + U.key), "key" in U) {
        Y = {};
        for (var J1 in U)
          J1 !== "key" && (Y[J1] = U[J1]);
      } else Y = U;
      return X && h(
        Y,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), p(
        E,
        X,
        d1,
        x1,
        i(),
        Y,
        z1,
        G1
      );
    }
    function b(E) {
      typeof E == "object" && E !== null && E.$$typeof === C && E._store && (E._store.validated = 1);
    }
    var g = m3, C = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), j = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), J = Symbol.for("react.client.reference"), e1 = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P1 = Object.prototype.hasOwnProperty, O = Array.isArray, I1 = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(E) {
        return E();
      }
    };
    var g1, h1 = {}, y1 = g["react-stack-bottom-frame"].bind(
      g,
      u
    )(), $1 = I1(o(u)), q1 = {};
    l2.Fragment = L, l2.jsx = function(E, U, Y, a1, x1) {
      var d1 = 1e4 > e1.recentlyCreatedOwnerStacks++;
      return x(
        E,
        U,
        Y,
        !1,
        a1,
        x1,
        d1 ? Error("react-stack-top-frame") : y1,
        d1 ? I1(o(E)) : $1
      );
    }, l2.jsxs = function(E, U, Y, a1, x1) {
      var d1 = 1e4 > e1.recentlyCreatedOwnerStacks++;
      return x(
        E,
        U,
        Y,
        !0,
        a1,
        x1,
        d1 ? Error("react-stack-top-frame") : y1,
        d1 ? I1(o(E)) : $1
      );
    };
  }()), l2;
}
var Y3;
function b9() {
  return Y3 || (Y3 = 1, process.env.NODE_ENV === "production" ? L2.exports = _9() : L2.exports = w9()), L2.exports;
}
var f = b9(), C9 = Object.defineProperty, x9 = Object.defineProperties, L9 = Object.getOwnPropertyDescriptors, P2 = Object.getOwnPropertySymbols, f0 = Object.prototype.hasOwnProperty, m0 = Object.prototype.propertyIsEnumerable, c3 = (t, e, n) => e in t ? C9(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, o1 = (t, e) => {
  for (var n in e || (e = {})) f0.call(e, n) && c3(t, n, e[n]);
  if (P2) for (var n of P2(e)) m0.call(e, n) && c3(t, n, e[n]);
  return t;
}, v1 = (t, e) => x9(t, L9(e)), p0 = (t, e) => {
  var n = {};
  for (var o in t) f0.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
  if (t != null && P2) for (var o of P2(t)) e.indexOf(o) < 0 && m0.call(t, o) && (n[o] = t[o]);
  return n;
}, W = (t, e, n) => c3(t, typeof e != "symbol" ? e + "" : e, n), z = (t, e, n) => new Promise((o, i) => {
  var u = (v) => {
    try {
      h(n.next(v));
    } catch (p) {
      i(p);
    }
  }, m = (v) => {
    try {
      h(n.throw(v));
    } catch (p) {
      i(p);
    }
  }, h = (v) => v.done ? o(v.value) : Promise.resolve(v.value).then(u, m);
  h((n = n.apply(t, e)).next());
}), k9 = class {
  requestAnimationFrame(t) {
    return requestAnimationFrame(t);
  }
  cancelAnimationFrame(t) {
    cancelAnimationFrame(t);
  }
}, I9 = class {
  constructor() {
    W(this, "_lastHandleId", 0), W(this, "_lastImmediate", null);
  }
  requestAnimationFrame(t) {
    return this._lastHandleId >= Number.MAX_SAFE_INTEGER && (this._lastHandleId = 0), this._lastHandleId += 1, this._lastImmediate = setImmediate(() => {
      t(Date.now());
    }), this._lastHandleId;
  }
  cancelAnimationFrame(t) {
    this._lastImmediate && clearImmediate(this._lastImmediate);
  }
}, E9 = class {
  constructor() {
    W(this, "_strategy"), this._strategy = typeof requestAnimationFrame == "function" ? new k9() : new I9();
  }
  requestAnimationFrame(t) {
    return this._strategy.requestAnimationFrame(t);
  }
  cancelAnimationFrame(t) {
    this._strategy.cancelAnimationFrame(t);
  }
}, l1 = typeof window < "u" && typeof window.document < "u", r3 = new Uint8Array([80, 75, 3, 4]), S9 = ["v", "ip", "op", "layers", "fr", "w", "h"], v0 = "0.42.0", g0 = "@lottiefiles/dotlottie-web", M9 = 0.75, P9 = (() => {
  var t, e = typeof document < "u" ? (t = document.currentScript) == null ? void 0 : t.src : void 0;
  return function(n = {}) {
    var o, i = n, u, m, h = new Promise((r, a) => {
      u = r, m = a;
    }), v = Object.assign({}, i), p = "./this.program", x = "", b;
    typeof document < "u" && document.currentScript && (x = document.currentScript.src), e && (x = e), x.startsWith("blob:") ? x = "" : x = x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1), b = (r) => fetch(r, { credentials: "same-origin" }).then((a) => a.ok ? a.arrayBuffer() : Promise.reject(Error(a.status + " : " + a.url)));
    var g = i.print || console.log.bind(console), C = i.printErr || console.error.bind(console);
    Object.assign(i, v), v = null, i.thisProgram && (p = i.thisProgram);
    var _ = i.wasmBinary, L, R = !1, d, P, j, N, F, A, D, $, H;
    function J() {
      var r = L.buffer;
      i.HEAP8 = P = new Int8Array(r), i.HEAP16 = N = new Int16Array(r), i.HEAPU8 = j = new Uint8Array(r), i.HEAPU16 = F = new Uint16Array(r), i.HEAP32 = A = new Int32Array(r), i.HEAPU32 = D = new Uint32Array(r), i.HEAPF32 = $ = new Float32Array(r), i.HEAPF64 = H = new Float64Array(r);
    }
    var e1 = [], P1 = [], O = [];
    function I1() {
      var r = i.preRun.shift();
      e1.unshift(r);
    }
    var g1 = 0, h1 = null;
    function y1(r) {
      var a;
      throw (a = i.onAbort) == null || a.call(i, r), r = "Aborted(" + r + ")", C(r), R = !0, r = new WebAssembly.RuntimeError(r + ". Build with -sASSERTIONS for more info."), m(r), r;
    }
    var $1 = (r) => r.startsWith("data:application/octet-stream;base64,"), q1;
    function E(r) {
      if (r == q1 && _) return new Uint8Array(_);
      throw "both async and sync fetching of the wasm failed";
    }
    function U(r) {
      return _ ? Promise.resolve().then(() => E(r)) : b(r).then((a) => new Uint8Array(a), () => E(r));
    }
    function Y(r, a, s) {
      return U(r).then((l) => WebAssembly.instantiate(l, a)).then(s, (l) => {
        C(`failed to asynchronously prepare wasm: ${l}`), y1(l);
      });
    }
    function a1(r, a) {
      var s = q1;
      return _ || typeof WebAssembly.instantiateStreaming != "function" || $1(s) || typeof fetch != "function" ? Y(s, r, a) : fetch(s, { credentials: "same-origin" }).then((l) => WebAssembly.instantiateStreaming(l, r).then(a, function(c) {
        return C(`wasm streaming compile failed: ${c}`), C("falling back to ArrayBuffer instantiation"), Y(s, r, a);
      }));
    }
    class x1 {
      constructor(a) {
        W(this, "name", "ExitStatus"), this.message = `Program terminated with exit(${a})`, this.status = a;
      }
    }
    var d1 = (r) => {
      for (; 0 < r.length; ) r.shift()(i);
    }, z1 = i.noExitRuntime || !0, G1 = typeof TextDecoder < "u" ? new TextDecoder() : void 0, X = (r, a = 0, s = NaN) => {
      var l = a + s;
      for (s = a; r[s] && !(s >= l); ) ++s;
      if (16 < s - a && r.buffer && G1) return G1.decode(r.subarray(a, s));
      for (l = ""; a < s; ) {
        var c = r[a++];
        if (c & 128) {
          var y = r[a++] & 63;
          if ((c & 224) == 192) l += String.fromCharCode((c & 31) << 6 | y);
          else {
            var k = r[a++] & 63;
            c = (c & 240) == 224 ? (c & 15) << 12 | y << 6 | k : (c & 7) << 18 | y << 12 | k << 6 | r[a++] & 63, 65536 > c ? l += String.fromCharCode(c) : (c -= 65536, l += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023));
          }
        } else l += String.fromCharCode(c);
      }
      return l;
    }, _1 = 0;
    class J1 {
      constructor(a) {
        this.Ea = a - 24;
      }
    }
    var $2 = () => {
      var r = [], a = _1;
      if (!a) return a2(0), 0;
      var s = new J1(a);
      D[s.Ea + 16 >> 2] = a;
      var l = D[s.Ea + 4 >> 2];
      if (!l) return a2(0), a;
      for (var c of r) {
        if (c === 0 || c === l) break;
        if (z3(c, l, s.Ea + 16)) return a2(c), a;
      }
      return a2(l), a;
    }, Q1 = (r, a, s) => {
      var l = j;
      if (0 < s) {
        s = a + s - 1;
        for (var c = 0; c < r.length; ++c) {
          var y = r.charCodeAt(c);
          if (55296 <= y && 57343 >= y) {
            var k = r.charCodeAt(++c);
            y = 65536 + ((y & 1023) << 10) | k & 1023;
          }
          if (127 >= y) {
            if (a >= s) break;
            l[a++] = y;
          } else {
            if (2047 >= y) {
              if (a + 1 >= s) break;
              l[a++] = 192 | y >> 6;
            } else {
              if (65535 >= y) {
                if (a + 2 >= s) break;
                l[a++] = 224 | y >> 12;
              } else {
                if (a + 3 >= s) break;
                l[a++] = 240 | y >> 18, l[a++] = 128 | y >> 12 & 63;
              }
              l[a++] = 128 | y >> 6 & 63;
            }
            l[a++] = 128 | y & 63;
          }
        }
        l[a] = 0;
      }
    }, m2 = {}, N2 = (r) => {
      for (; r.length; ) {
        var a = r.pop();
        r.pop()(a);
      }
    };
    function X1(r) {
      return this.fromWireType(D[r >> 2]);
    }
    var Y1 = {}, B1 = {}, p2 = {}, Z1, N1 = (r, a, s) => {
      function l(w) {
        if (w = s(w), w.length !== r.length) throw new Z1("Mismatched type converter count");
        for (var S = 0; S < r.length; ++S) L1(r[S], w[S]);
      }
      r.forEach((w) => p2[w] = a);
      var c = Array(a.length), y = [], k = 0;
      a.forEach((w, S) => {
        B1.hasOwnProperty(w) ? c[S] = B1[w] : (y.push(w), Y1.hasOwnProperty(w) || (Y1[w] = []), Y1[w].push(() => {
          c[S] = B1[w], ++k, k === y.length && l(c);
        }));
      }), y.length === 0 && l(c);
    }, k3, i1 = (r) => {
      for (var a = ""; j[r]; ) a += k3[j[r++]];
      return a;
    }, B;
    function B0(r, a, s = {}) {
      var l = a.name;
      if (!r) throw new B(`type "${l}" must have a positive integer typeid pointer`);
      if (B1.hasOwnProperty(r)) {
        if (s.kb) return;
        throw new B(`Cannot register type '${l}' twice`);
      }
      B1[r] = a, delete p2[r], Y1.hasOwnProperty(r) && (a = Y1[r], delete Y1[r], a.forEach((c) => c()));
    }
    function L1(r, a, s = {}) {
      return B0(r, a, s);
    }
    var W2 = (r) => {
      throw new B(r.Da.Ga.Fa.name + " instance already deleted");
    }, U2 = !1, I3 = () => {
    }, E3 = (r, a, s) => a === s ? r : s.Ja === void 0 ? null : (r = E3(r, a, s.Ja), r === null ? null : s.cb(r)), S3 = {}, H0 = {}, V0 = (r, a) => {
      if (a === void 0) throw new B("ptr should not be undefined");
      for (; r.Ja; ) a = r.Ta(a), r = r.Ja;
      return H0[a];
    }, v2 = (r, a) => {
      if (!a.Ga || !a.Ea) throw new Z1("makeClassHandle requires ptr and ptrType");
      if (!!a.Ka != !!a.Ia) throw new Z1("Both smartPtrType and smartPtr must be specified");
      return a.count = { value: 1 }, e2(Object.create(r, { Da: { value: a, writable: !0 } }));
    }, e2 = (r) => typeof FinalizationRegistry > "u" ? (e2 = (a) => a, r) : (U2 = new FinalizationRegistry((a) => {
      a = a.Da, --a.count.value, a.count.value === 0 && (a.Ia ? a.Ka.Na(a.Ia) : a.Ga.Fa.Na(a.Ea));
    }), e2 = (a) => {
      var s = a.Da;
      return s.Ia && U2.register(a, { Da: s }, a), a;
    }, I3 = (a) => {
      U2.unregister(a);
    }, e2(r));
    function g2() {
    }
    var t2 = (r, a) => Object.defineProperty(a, "name", { value: r }), M3 = (r, a, s) => {
      if (r[a].Ha === void 0) {
        var l = r[a];
        r[a] = function(...c) {
          if (!r[a].Ha.hasOwnProperty(c.length)) throw new B(`Function '${s}' called with an invalid number of arguments (${c.length}) - expects one of (${r[a].Ha})!`);
          return r[a].Ha[c.length].apply(this, c);
        }, r[a].Ha = [], r[a].Ha[l.Qa] = l;
      }
    }, q2 = (r, a, s) => {
      if (i.hasOwnProperty(r)) {
        if (s === void 0 || i[r].Ha !== void 0 && i[r].Ha[s] !== void 0) throw new B(`Cannot register public name '${r}' twice`);
        if (M3(i, r, r), i[r].Ha.hasOwnProperty(s)) throw new B(`Cannot register multiple overloads of a function with the same number of arguments (${s})!`);
        i[r].Ha[s] = a;
      } else i[r] = a, i[r].Qa = s;
    }, G0 = (r) => {
      r = r.replace(/[^a-zA-Z0-9_]/g, "$");
      var a = r.charCodeAt(0);
      return 48 <= a && 57 >= a ? `_${r}` : r;
    };
    function J0(r, a, s, l, c, y, k, w) {
      this.name = r, this.constructor = a, this.Pa = s, this.Na = l, this.Ja = c, this.fb = y, this.Ta = k, this.cb = w, this.mb = [];
    }
    var z2 = (r, a, s) => {
      for (; a !== s; ) {
        if (!a.Ta) throw new B(`Expected null or instance of ${s.name}, got an instance of ${a.name}`);
        r = a.Ta(r), a = a.Ja;
      }
      return r;
    };
    function Y0(r, a) {
      if (a === null) {
        if (this.Wa) throw new B(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!a.Da) throw new B(`Cannot pass "${K2(a)}" as a ${this.name}`);
      if (!a.Da.Ea) throw new B(`Cannot pass deleted object as a pointer of type ${this.name}`);
      return z2(a.Da.Ea, a.Da.Ga.Fa, this.Fa);
    }
    function K0(r, a) {
      if (a === null) {
        if (this.Wa) throw new B(`null is not a valid ${this.name}`);
        if (this.Va) {
          var s = this.Xa();
          return r !== null && r.push(this.Na, s), s;
        }
        return 0;
      }
      if (!a || !a.Da) throw new B(`Cannot pass "${K2(a)}" as a ${this.name}`);
      if (!a.Da.Ea) throw new B(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (!this.Ua && a.Da.Ga.Ua) throw new B(`Cannot convert argument of type ${a.Da.Ka ? a.Da.Ka.name : a.Da.Ga.name} to parameter type ${this.name}`);
      if (s = z2(a.Da.Ea, a.Da.Ga.Fa, this.Fa), this.Va) {
        if (a.Da.Ia === void 0) throw new B("Passing raw pointer to smart pointer is illegal");
        switch (this.rb) {
          case 0:
            if (a.Da.Ka === this) s = a.Da.Ia;
            else throw new B(`Cannot convert argument of type ${a.Da.Ka ? a.Da.Ka.name : a.Da.Ga.name} to parameter type ${this.name}`);
            break;
          case 1:
            s = a.Da.Ia;
            break;
          case 2:
            if (a.Da.Ka === this) s = a.Da.Ia;
            else {
              var l = a.clone();
              s = this.nb(s, _2(() => l.delete())), r !== null && r.push(this.Na, s);
            }
            break;
          default:
            throw new B("Unsupporting sharing policy");
        }
      }
      return s;
    }
    function Q0(r, a) {
      if (a === null) {
        if (this.Wa) throw new B(`null is not a valid ${this.name}`);
        return 0;
      }
      if (!a.Da) throw new B(`Cannot pass "${K2(a)}" as a ${this.name}`);
      if (!a.Da.Ea) throw new B(`Cannot pass deleted object as a pointer of type ${this.name}`);
      if (a.Da.Ga.Ua) throw new B(`Cannot convert argument of type ${a.Da.Ga.name} to parameter type ${this.name}`);
      return z2(a.Da.Ea, a.Da.Ga.Fa, this.Fa);
    }
    function n2(r, a, s, l, c, y, k, w, S, M, T) {
      this.name = r, this.Fa = a, this.Wa = s, this.Ua = l, this.Va = c, this.lb = y, this.rb = k, this.ab = w, this.Xa = S, this.nb = M, this.Na = T, c || a.Ja !== void 0 ? this.toWireType = K0 : (this.toWireType = l ? Y0 : Q0, this.Ma = null);
    }
    var P3 = (r, a, s) => {
      if (!i.hasOwnProperty(r)) throw new Z1("Replacing nonexistent public symbol");
      i[r].Ha !== void 0 && s !== void 0 ? i[r].Ha[s] = a : (i[r] = a, i[r].Qa = s);
    }, u1, X0 = (r, a, s = []) => (r.includes("j") ? (r = r.replace(/p/g, "i"), a = (0, i["dynCall_" + r])(a, ...s)) : a = u1.get(a)(...s), a), Z0 = (r, a) => (...s) => X0(r, a, s), c1 = (r, a) => {
      r = i1(r);
      var s = r.includes("j") ? Z0(r, a) : u1.get(a);
      if (typeof s != "function") throw new B(`unknown function pointer with signature ${r}: ${a}`);
      return s;
    }, j3, R3 = (r) => {
      r = U3(r);
      var a = i1(r);
      return R1(r), a;
    }, y2 = (r, a) => {
      function s(y) {
        c[y] || B1[y] || (p2[y] ? p2[y].forEach(s) : (l.push(y), c[y] = !0));
      }
      var l = [], c = {};
      throw a.forEach(s), new j3(`${r}: ` + l.map(R3).join([", "]));
    }, B2 = (r, a) => {
      for (var s = [], l = 0; l < r; l++) s.push(D[a + 4 * l >> 2]);
      return s;
    };
    function e4(r) {
      for (var a = 1; a < r.length; ++a) if (r[a] !== null && r[a].Ma === void 0) return !0;
      return !1;
    }
    function H2(r, a, s, l, c) {
      var y = a.length;
      if (2 > y) throw new B("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var k = a[1] !== null && s !== null, w = e4(a), S = a[0].name !== "void", M = y - 2, T = Array(M), q = [], G = [];
      return t2(r, function(...w1) {
        if (G.length = 0, q.length = k ? 2 : 1, q[0] = c, k) {
          var t1 = a[1].toWireType(G, this);
          q[1] = t1;
        }
        for (var n1 = 0; n1 < M; ++n1) T[n1] = a[n1 + 2].toWireType(G, w1[n1]), q.push(T[n1]);
        if (w1 = l(...q), w) N2(G);
        else for (n1 = k ? 1 : 2; n1 < a.length; n1++) {
          var k1 = n1 === 1 ? t1 : T[n1 - 2];
          a[n1].Ma !== null && a[n1].Ma(k1);
        }
        return t1 = S ? a[0].fromWireType(w1) : void 0, t1;
      });
    }
    var D3 = (r) => {
      r = r.trim();
      let a = r.indexOf("(");
      return a !== -1 ? r.substr(0, a) : r;
    }, V2 = [], j1 = [], G2 = (r) => {
      9 < r && --j1[r + 1] === 0 && (j1[r] = void 0, V2.push(r));
    }, J2 = (r) => {
      if (!r) throw new B("Cannot use deleted val. handle = " + r);
      return j1[r];
    }, _2 = (r) => {
      switch (r) {
        case void 0:
          return 2;
        case null:
          return 4;
        case !0:
          return 6;
        case !1:
          return 8;
        default:
          let a = V2.pop() || j1.length;
          return j1[a] = r, j1[a + 1] = 1, a;
      }
    }, T3 = { name: "emscripten::val", fromWireType: (r) => {
      var a = J2(r);
      return G2(r), a;
    }, toWireType: (r, a) => _2(a), La: 8, readValueFromPointer: X1, Ma: null }, t4 = (r, a, s) => {
      switch (a) {
        case 1:
          return s ? function(l) {
            return this.fromWireType(P[l]);
          } : function(l) {
            return this.fromWireType(j[l]);
          };
        case 2:
          return s ? function(l) {
            return this.fromWireType(N[l >> 1]);
          } : function(l) {
            return this.fromWireType(F[l >> 1]);
          };
        case 4:
          return s ? function(l) {
            return this.fromWireType(A[l >> 2]);
          } : function(l) {
            return this.fromWireType(D[l >> 2]);
          };
        default:
          throw new TypeError(`invalid integer width (${a}): ${r}`);
      }
    }, Y2 = (r, a) => {
      var s = B1[r];
      if (s === void 0) throw r = `${a} has unknown type ${R3(r)}`, new B(r);
      return s;
    }, K2 = (r) => {
      if (r === null) return "null";
      var a = typeof r;
      return a === "object" || a === "array" || a === "function" ? r.toString() : "" + r;
    }, n4 = (r, a) => {
      switch (a) {
        case 4:
          return function(s) {
            return this.fromWireType($[s >> 2]);
          };
        case 8:
          return function(s) {
            return this.fromWireType(H[s >> 3]);
          };
        default:
          throw new TypeError(`invalid float width (${a}): ${r}`);
      }
    }, r4 = (r, a, s) => {
      switch (a) {
        case 1:
          return s ? (l) => P[l] : (l) => j[l];
        case 2:
          return s ? (l) => N[l >> 1] : (l) => F[l >> 1];
        case 4:
          return s ? (l) => A[l >> 2] : (l) => D[l >> 2];
        default:
          throw new TypeError(`invalid integer width (${a}): ${r}`);
      }
    }, a4 = Object.assign({ optional: !0 }, T3), F3 = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, i4 = (r, a) => {
      for (var s = r >> 1, l = s + a / 2; !(s >= l) && F[s]; ) ++s;
      if (s <<= 1, 32 < s - r && F3) return F3.decode(j.subarray(r, s));
      for (s = "", l = 0; !(l >= a / 2); ++l) {
        var c = N[r + 2 * l >> 1];
        if (c == 0) break;
        s += String.fromCharCode(c);
      }
      return s;
    }, o4 = (r, a, s) => {
      if (s != null || (s = 2147483647), 2 > s) return 0;
      s -= 2;
      var l = a;
      s = s < 2 * r.length ? s / 2 : r.length;
      for (var c = 0; c < s; ++c) N[a >> 1] = r.charCodeAt(c), a += 2;
      return N[a >> 1] = 0, a - l;
    }, s4 = (r) => 2 * r.length, l4 = (r, a) => {
      for (var s = 0, l = ""; !(s >= a / 4); ) {
        var c = A[r + 4 * s >> 2];
        if (c == 0) break;
        ++s, 65536 <= c ? (c -= 65536, l += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023)) : l += String.fromCharCode(c);
      }
      return l;
    }, u4 = (r, a, s) => {
      if (s != null || (s = 2147483647), 4 > s) return 0;
      var l = a;
      s = l + s - 4;
      for (var c = 0; c < r.length; ++c) {
        var y = r.charCodeAt(c);
        if (55296 <= y && 57343 >= y) {
          var k = r.charCodeAt(++c);
          y = 65536 + ((y & 1023) << 10) | k & 1023;
        }
        if (A[a >> 2] = y, a += 4, a + 4 > s) break;
      }
      return A[a >> 2] = 0, a - l;
    }, c4 = (r) => {
      for (var a = 0, s = 0; s < r.length; ++s) {
        var l = r.charCodeAt(s);
        55296 <= l && 57343 >= l && ++s, a += 4;
      }
      return a;
    }, Q2 = 0, X2 = [], h4 = (r) => {
      var a = X2.length;
      return X2.push(r), a;
    }, d4 = (r, a) => {
      for (var s = Array(r), l = 0; l < r; ++l) s[l] = Y2(D[a + 4 * l >> 2], "parameter " + l);
      return s;
    }, f4 = Reflect.construct, r2 = {}, O3 = (r) => {
      if (!(r instanceof x1 || r == "unwind")) throw r;
    }, A3 = (r) => {
      var a;
      throw d = r, z1 || 0 < Q2 || ((a = i.onExit) == null || a.call(i, r), R = !0), new x1(r);
    }, m4 = (r) => {
      if (!R) try {
        if (r(), !(z1 || 0 < Q2)) try {
          d = r = d, A3(r);
        } catch (a) {
          O3(a);
        }
      } catch (a) {
        O3(a);
      }
    }, Z2 = {}, $3 = () => {
      if (!e3) {
        var r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: p || "./this.program" }, a;
        for (a in Z2) Z2[a] === void 0 ? delete r[a] : r[a] = Z2[a];
        var s = [];
        for (a in r) s.push(`${a}=${r[a]}`);
        e3 = s;
      }
      return e3;
    }, e3, p4 = [null, [], []], v4 = () => {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (r) => crypto.getRandomValues(r);
      y1("initRandomDevice");
    }, N3 = (r) => (N3 = v4())(r);
    Z1 = i.InternalError = class extends Error {
      constructor(r) {
        super(r), this.name = "InternalError";
      }
    };
    for (var W3 = Array(256), w2 = 0; 256 > w2; ++w2) W3[w2] = String.fromCharCode(w2);
    k3 = W3, B = i.BindingError = class extends Error {
      constructor(r) {
        super(r), this.name = "BindingError";
      }
    }, Object.assign(g2.prototype, { isAliasOf: function(r) {
      if (!(this instanceof g2 && r instanceof g2)) return !1;
      var a = this.Da.Ga.Fa, s = this.Da.Ea;
      r.Da = r.Da;
      var l = r.Da.Ga.Fa;
      for (r = r.Da.Ea; a.Ja; ) s = a.Ta(s), a = a.Ja;
      for (; l.Ja; ) r = l.Ta(r), l = l.Ja;
      return a === l && s === r;
    }, clone: function() {
      if (this.Da.Ea || W2(this), this.Da.Sa) return this.Da.count.value += 1, this;
      var r = e2, a = Object, s = a.create, l = Object.getPrototypeOf(this), c = this.Da;
      return r = r(s.call(a, l, { Da: { value: { count: c.count, Ra: c.Ra, Sa: c.Sa, Ea: c.Ea, Ga: c.Ga, Ia: c.Ia, Ka: c.Ka } } })), r.Da.count.value += 1, r.Da.Ra = !1, r;
    }, delete() {
      if (this.Da.Ea || W2(this), this.Da.Ra && !this.Da.Sa) throw new B("Object already scheduled for deletion");
      I3(this);
      var r = this.Da;
      --r.count.value, r.count.value === 0 && (r.Ia ? r.Ka.Na(r.Ia) : r.Ga.Fa.Na(r.Ea)), this.Da.Sa || (this.Da.Ia = void 0, this.Da.Ea = void 0);
    }, isDeleted: function() {
      return !this.Da.Ea;
    }, deleteLater: function() {
      if (this.Da.Ea || W2(this), this.Da.Ra && !this.Da.Sa) throw new B("Object already scheduled for deletion");
      return this.Da.Ra = !0, this;
    } }), Object.assign(n2.prototype, { gb(r) {
      return this.ab && (r = this.ab(r)), r;
    }, Za(r) {
      var a;
      (a = this.Na) == null || a.call(this, r);
    }, La: 8, readValueFromPointer: X1, fromWireType: function(r) {
      function a() {
        return this.Va ? v2(this.Fa.Pa, { Ga: this.lb, Ea: s, Ka: this, Ia: r }) : v2(this.Fa.Pa, { Ga: this, Ea: r });
      }
      var s = this.gb(r);
      if (!s) return this.Za(r), null;
      var l = V0(this.Fa, s);
      if (l !== void 0) return l.Da.count.value === 0 ? (l.Da.Ea = s, l.Da.Ia = r, l.clone()) : (l = l.clone(), this.Za(r), l);
      if (l = this.Fa.fb(s), l = S3[l], !l) return a.call(this);
      l = this.Ua ? l.bb : l.pointerType;
      var c = E3(s, this.Fa, l.Fa);
      return c === null ? a.call(this) : this.Va ? v2(l.Fa.Pa, { Ga: l, Ea: c, Ka: this, Ia: r }) : v2(l.Fa.Pa, { Ga: l, Ea: c });
    } }), j3 = i.UnboundTypeError = ((r, a) => {
      var s = t2(a, function(l) {
        this.name = a, this.message = l, l = Error(l).stack, l !== void 0 && (this.stack = this.toString() + `
` + l.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return s.prototype = Object.create(r.prototype), s.prototype.constructor = s, s.prototype.toString = function() {
        return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
      }, s;
    })(Error, "UnboundTypeError"), j1.push(0, 1, void 0, 1, null, 1, !0, 1, !1, 1), i.count_emval_handles = () => j1.length / 2 - 5 - V2.length;
    var g4 = { c: (r, a, s, l) => y1(`Assertion failed: ${r ? X(j, r) : ""}, at: ` + [a ? a ? X(j, a) : "" : "unknown filename", s, l ? l ? X(j, l) : "" : "unknown function"]), d: () => $2(), p: (r, a, s) => {
      var l = new J1(r);
      throw D[l.Ea + 16 >> 2] = 0, D[l.Ea + 4 >> 2] = a, D[l.Ea + 8 >> 2] = s, _1 = r, _1;
    }, g: (r) => {
      throw _1 || (_1 = r), _1;
    }, R: () => {
    }, O: () => {
    }, P: () => {
    }, U: function() {
    }, Q: () => {
    }, W: () => y1(""), z: (r) => {
      var a = m2[r];
      delete m2[r];
      var s = a.Xa, l = a.Na, c = a.$a, y = c.map((k) => k.jb).concat(c.map((k) => k.pb));
      N1([r], y, (k) => {
        var w = {};
        return c.forEach((S, M) => {
          var T = k[M], q = S.hb, G = S.ib, w1 = k[M + c.length], t1 = S.ob, n1 = S.qb;
          w[S.eb] = { read: (k1) => T.fromWireType(q(G, k1)), write: (k1, i2) => {
            var b1 = [];
            t1(n1, k1, w1.toWireType(b1, i2)), N2(b1);
          } };
        }), [{ name: a.name, fromWireType: (S) => {
          var M = {}, T;
          for (T in w) M[T] = w[T].read(S);
          return l(S), M;
        }, toWireType: (S, M) => {
          for (var T in w) if (!(T in M)) throw new TypeError(`Missing field: "${T}"`);
          var q = s();
          for (T in w) w[T].write(q, M[T]);
          return S !== null && S.push(l, q), q;
        }, La: 8, readValueFromPointer: X1, Ma: l }];
      });
    }, H: () => {
    }, aa: (r, a, s, l) => {
      a = i1(a), L1(r, { name: a, fromWireType: function(c) {
        return !!c;
      }, toWireType: function(c, y) {
        return y ? s : l;
      }, La: 8, readValueFromPointer: function(c) {
        return this.fromWireType(j[c]);
      }, Ma: null });
    }, v: (r, a, s, l, c, y, k, w, S, M, T, q, G) => {
      T = i1(T), y = c1(c, y), w && (w = c1(k, w)), M && (M = c1(S, M)), G = c1(q, G);
      var w1 = G0(T);
      q2(w1, function() {
        y2(`Cannot construct ${T} due to unbound types`, [l]);
      }), N1([r, a, s], l ? [l] : [], (t1) => {
        if (t1 = t1[0], l) var n1 = t1.Fa, k1 = n1.Pa;
        else k1 = g2.prototype;
        t1 = t2(T, function(...n3) {
          if (Object.getPrototypeOf(this) !== i2) throw new B("Use 'new' to construct " + T);
          if (b1.Oa === void 0) throw new B(T + " has no accessible constructor");
          var V3 = b1.Oa[n3.length];
          if (V3 === void 0) throw new B(`Tried to invoke ctor of ${T} with invalid number of parameters (${n3.length}) - expected (${Object.keys(b1.Oa).toString()}) parameters instead!`);
          return V3.apply(this, n3);
        });
        var i2 = Object.create(k1, { constructor: { value: t1 } });
        t1.prototype = i2;
        var b1 = new J0(T, t1, i2, G, n1, y, w, M);
        if (b1.Ja) {
          var o2;
          (o2 = b1.Ja).Ya != null || (o2.Ya = []), b1.Ja.Ya.push(b1);
        }
        return n1 = new n2(T, b1, !0, !1, !1), o2 = new n2(T + "*", b1, !1, !1, !1), k1 = new n2(T + " const*", b1, !1, !0, !1), S3[r] = { pointerType: o2, bb: k1 }, P3(w1, t1), [n1, o2, k1];
      });
    }, t: (r, a, s, l, c, y) => {
      var k = B2(a, s);
      c = c1(l, c), N1([], [r], (w) => {
        w = w[0];
        var S = `constructor ${w.name}`;
        if (w.Fa.Oa === void 0 && (w.Fa.Oa = []), w.Fa.Oa[a - 1] !== void 0) throw new B(`Cannot register multiple constructors with identical number of parameters (${a - 1}) for class '${w.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);
        return w.Fa.Oa[a - 1] = () => {
          y2(`Cannot construct ${w.name} due to unbound types`, k);
        }, N1([], k, (M) => (M.splice(1, 0, null), w.Fa.Oa[a - 1] = H2(S, M, null, c, y), [])), [];
      });
    }, h: (r, a, s, l, c, y, k, w) => {
      var S = B2(s, l);
      a = i1(a), a = D3(a), y = c1(c, y), N1([], [r], (M) => {
        function T() {
          y2(`Cannot call ${q} due to unbound types`, S);
        }
        M = M[0];
        var q = `${M.name}.${a}`;
        a.startsWith("@@") && (a = Symbol[a.substring(2)]), w && M.Fa.mb.push(a);
        var G = M.Fa.Pa, w1 = G[a];
        return w1 === void 0 || w1.Ha === void 0 && w1.className !== M.name && w1.Qa === s - 2 ? (T.Qa = s - 2, T.className = M.name, G[a] = T) : (M3(G, a, q), G[a].Ha[s - 2] = T), N1([], S, (t1) => (t1 = H2(q, t1, M, y, k), G[a].Ha === void 0 ? (t1.Qa = s - 2, G[a] = t1) : G[a].Ha[s - 2] = t1, [])), [];
      });
    }, $: (r) => L1(r, T3), B: (r, a, s, l) => {
      function c() {
      }
      a = i1(a), c.values = {}, L1(r, { name: a, constructor: c, fromWireType: function(y) {
        return this.constructor.values[y];
      }, toWireType: (y, k) => k.value, La: 8, readValueFromPointer: t4(a, s, l), Ma: null }), q2(a, c);
    }, n: (r, a, s) => {
      var l = Y2(r, "enum");
      a = i1(a), r = l.constructor, l = Object.create(l.constructor.prototype, { value: { value: s }, constructor: { value: t2(`${l.name}_${a}`, function() {
      }) } }), r.values[s] = l, r[a] = l;
    }, D: (r, a, s) => {
      a = i1(a), L1(r, { name: a, fromWireType: (l) => l, toWireType: (l, c) => c, La: 8, readValueFromPointer: n4(a, s), Ma: null });
    }, y: (r, a, s, l, c, y) => {
      var k = B2(a, s);
      r = i1(r), r = D3(r), c = c1(l, c), q2(r, function() {
        y2(`Cannot call ${r} due to unbound types`, k);
      }, a - 1), N1([], k, (w) => (P3(r, H2(r, [w[0], null].concat(w.slice(1)), null, c, y), a - 1), []));
    }, o: (r, a, s, l, c) => {
      if (a = i1(a), c === -1 && (c = 4294967295), c = (w) => w, l === 0) {
        var y = 32 - 8 * s;
        c = (w) => w << y >>> y;
      }
      var k = a.includes("unsigned") ? function(w, S) {
        return S >>> 0;
      } : function(w, S) {
        return S;
      };
      L1(r, { name: a, fromWireType: c, toWireType: k, La: 8, readValueFromPointer: r4(a, s, l !== 0), Ma: null });
    }, k: (r, a, s) => {
      function l(y) {
        return new c(P.buffer, D[y + 4 >> 2], D[y >> 2]);
      }
      var c = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][a];
      s = i1(s), L1(r, { name: s, fromWireType: l, La: 8, readValueFromPointer: l }, { kb: !0 });
    }, x: (r) => {
      L1(r, a4);
    }, ga: (r, a, s, l, c, y, k, w, S, M, T, q) => {
      s = i1(s), y = c1(c, y), w = c1(k, w), M = c1(S, M), q = c1(T, q), N1([r], [a], (G) => (G = G[0], [new n2(s, G.Fa, !1, !1, !0, G, l, y, w, M, q)]));
    }, E: (r, a) => {
      a = i1(a);
      var s = a === "std::string";
      L1(r, { name: a, fromWireType: function(l) {
        var c = D[l >> 2], y = l + 4;
        if (s) for (var k = y, w = 0; w <= c; ++w) {
          var S = y + w;
          if (w == c || j[S] == 0) {
            if (k = k ? X(j, k, S - k) : "", M === void 0) var M = k;
            else M += "\0", M += k;
            k = S + 1;
          }
        }
        else {
          for (M = Array(c), w = 0; w < c; ++w) M[w] = String.fromCharCode(j[y + w]);
          M = M.join("");
        }
        return R1(l), M;
      }, toWireType: function(l, c) {
        c instanceof ArrayBuffer && (c = new Uint8Array(c));
        var y, k = typeof c == "string";
        if (!(k || c instanceof Uint8Array || c instanceof Uint8ClampedArray || c instanceof Int8Array)) throw new B("Cannot pass non-string to std::string");
        if (s && k) for (var w = y = 0; w < c.length; ++w) {
          var S = c.charCodeAt(w);
          127 >= S ? y++ : 2047 >= S ? y += 2 : 55296 <= S && 57343 >= S ? (y += 4, ++w) : y += 3;
        }
        else y = c.length;
        if (w = t3(4 + y + 1), S = w + 4, D[w >> 2] = y, s && k) Q1(c, S, y + 1);
        else if (k) for (k = 0; k < y; ++k) {
          var M = c.charCodeAt(k);
          if (255 < M) throw R1(S), new B("String has UTF-16 code units that do not fit in 8 bits");
          j[S + k] = M;
        }
        else for (k = 0; k < y; ++k) j[S + k] = c[k];
        return l !== null && l.push(R1, w), w;
      }, La: 8, readValueFromPointer: X1, Ma(l) {
        R1(l);
      } });
    }, w: (r, a, s) => {
      if (s = i1(s), a === 2) var l = i4, c = o4, y = s4, k = (w) => F[w >> 1];
      else a === 4 && (l = l4, c = u4, y = c4, k = (w) => D[w >> 2]);
      L1(r, { name: s, fromWireType: (w) => {
        for (var S = D[w >> 2], M, T = w + 4, q = 0; q <= S; ++q) {
          var G = w + 4 + q * a;
          (q == S || k(G) == 0) && (T = l(T, G - T), M === void 0 ? M = T : (M += "\0", M += T), T = G + a);
        }
        return R1(w), M;
      }, toWireType: (w, S) => {
        if (typeof S != "string") throw new B(`Cannot pass non-string to C++ string type ${s}`);
        var M = y(S), T = t3(4 + M + a);
        return D[T >> 2] = M / a, c(S, T + 4, M + a), w !== null && w.push(R1, T), T;
      }, La: 8, readValueFromPointer: X1, Ma(w) {
        R1(w);
      } });
    }, A: (r, a, s, l, c, y) => {
      m2[r] = { name: i1(a), Xa: c1(s, l), Na: c1(c, y), $a: [] };
    }, m: (r, a, s, l, c, y, k, w, S, M) => {
      m2[r].$a.push({ eb: i1(a), jb: s, hb: c1(l, c), ib: y, pb: k, ob: c1(w, S), qb: M });
    }, ba: (r, a) => {
      a = i1(a), L1(r, { sb: !0, name: a, La: 0, fromWireType: () => {
      }, toWireType: () => {
      } });
    }, M: () => {
      z1 = !1, Q2 = 0;
    }, I: () => {
      throw 1 / 0;
    }, ea: (r, a, s, l) => (r = X2[r], a = J2(a), r(null, a, s, l)), F: G2, da: (r, a, s) => {
      var l = d4(r, a), c = l.shift();
      r--;
      var y = Array(r);
      return a = `methodCaller<(${l.map((k) => k.name).join(", ")}) => ${c.name}>`, h4(t2(a, (k, w, S, M) => {
        for (var T = 0, q = 0; q < r; ++q) y[q] = l[q].readValueFromPointer(M + T), T += l[q].La;
        return w = s === 1 ? f4(w, y) : w.apply(k, y), k = [], w = c.toWireType(k, w), k.length && (D[S >> 2] = _2(k)), w;
      }));
    }, fa: (r) => {
      9 < r && (j1[r + 1] += 1);
    }, ca: (r) => {
      var a = J2(r);
      N2(a), G2(r);
    }, r: (r, a) => (r = Y2(r, "_emval_take_value"), r = r.readValueFromPointer(a), _2(r)), J: (r, a) => {
      if (r2[r] && (clearTimeout(r2[r].id), delete r2[r]), !a) return 0;
      var s = setTimeout(() => {
        delete r2[r], m4(() => q3(r, performance.now()));
      }, a);
      return r2[r] = { id: s, tb: a }, 0;
    }, K: (r, a, s, l) => {
      var c = (/* @__PURE__ */ new Date()).getFullYear(), y = new Date(c, 0, 1).getTimezoneOffset();
      c = new Date(c, 6, 1).getTimezoneOffset(), D[r >> 2] = 60 * Math.max(y, c), A[a >> 2] = +(y != c), a = (k) => {
        var w = Math.abs(k);
        return `UTC${0 <= k ? "-" : "+"}${String(Math.floor(w / 60)).padStart(2, "0")}${String(w % 60).padStart(2, "0")}`;
      }, r = a(y), a = a(c), c < y ? (Q1(r, s, 17), Q1(a, l, 17)) : (Q1(r, l, 17), Q1(a, s, 17));
    }, ha: () => performance.now(), L: (r) => {
      var a = j.length;
      if (r >>>= 0, 2147483648 < r) return !1;
      for (var s = 1; 4 >= s; s *= 2) {
        var l = a * (1 + 0.2 / s);
        l = Math.min(l, r + 100663296);
        e: {
          l = (Math.min(2147483648, 65536 * Math.ceil(Math.max(r, l) / 65536)) - L.buffer.byteLength + 65535) / 65536 | 0;
          try {
            L.grow(l), J();
            var c = 1;
            break e;
          } catch {
          }
          c = void 0;
        }
        if (c) return !0;
      }
      return !1;
    }, Y: (r, a) => {
      var s = 0;
      return $3().forEach((l, c) => {
        var y = a + s;
        for (c = D[r + 4 * c >> 2] = y, y = 0; y < l.length; ++y) P[c++] = l.charCodeAt(y);
        P[c] = 0, s += l.length + 1;
      }), 0;
    }, Z: (r, a) => {
      var s = $3();
      D[r >> 2] = s.length;
      var l = 0;
      return s.forEach((c) => l += c.length + 1), D[a >> 2] = l, 0;
    }, V: () => 52, T: () => 52, S: (r, a, s, l) => {
      for (var c = 0, y = 0; y < s; y++) {
        var k = D[a >> 2], w = D[a + 4 >> 2];
        a += 8;
        for (var S = 0; S < w; S++) {
          var M = r, T = j[k + S], q = p4[M];
          T === 0 || T === 10 ? ((M === 1 ? g : C)(X(q)), q.length = 0) : q.push(T);
        }
        c += w;
      }
      return D[l >> 2] = c, 0;
    }, j: x4, f: S4, e: E4, _: _4, s: M4, C: I4, u: C4, b: y4, a: w4, i: b4, l: k4, q: L4, G: P4, X: A3, N: (r, a) => (N3(j.subarray(r, r + a)), 0) }, Q = function() {
      var r;
      function a(l) {
        var c;
        return Q = l.exports, L = Q.ia, J(), u1 = Q.na, P1.unshift(Q.ja), g1--, (c = i.monitorRunDependencies) == null || c.call(i, g1), g1 == 0 && h1 && (l = h1, h1 = null, l()), Q;
      }
      g1++, (r = i.monitorRunDependencies) == null || r.call(i, g1);
      var s = { a: g4 };
      if (i.instantiateWasm) try {
        return i.instantiateWasm(s, a);
      } catch (l) {
        C(`Module.instantiateWasm callback failed with error: ${l}`), m(l);
      }
      return q1 != null || (q1 = $1("DotLottiePlayer.wasm") ? "DotLottiePlayer.wasm" : i.locateFile ? i.locateFile("DotLottiePlayer.wasm", x) : x + "DotLottiePlayer.wasm"), a1(s, function(l) {
        a(l.instance);
      }).catch(m), {};
    }(), t3 = (r) => (t3 = Q.ka)(r), U3 = (r) => (U3 = Q.la)(r), R1 = (r) => (R1 = Q.ma)(r), q3 = (r, a) => (q3 = Q.oa)(r, a), f1 = (r, a) => (f1 = Q.pa)(r, a), a2 = (r) => (a2 = Q.qa)(r), m1 = (r) => (m1 = Q.ra)(r), p1 = () => (p1 = Q.sa)(), z3 = (r, a, s) => (z3 = Q.ta)(r, a, s);
    i.dynCall_iijj = (r, a, s, l, c, y) => (i.dynCall_iijj = Q.ua)(r, a, s, l, c, y), i.dynCall_vijj = (r, a, s, l, c, y) => (i.dynCall_vijj = Q.va)(r, a, s, l, c, y), i.dynCall_jiii = (r, a, s, l) => (i.dynCall_jiii = Q.wa)(r, a, s, l);
    var B3 = i.dynCall_vijjjj = (r, a, s, l, c, y, k, w, S, M) => (B3 = i.dynCall_vijjjj = Q.xa)(r, a, s, l, c, y, k, w, S, M);
    i.dynCall_jii = (r, a, s) => (i.dynCall_jii = Q.ya)(r, a, s), i.dynCall_viijii = (r, a, s, l, c, y, k) => (i.dynCall_viijii = Q.za)(r, a, s, l, c, y, k), i.dynCall_iiiiij = (r, a, s, l, c, y, k) => (i.dynCall_iiiiij = Q.Aa)(r, a, s, l, c, y, k), i.dynCall_iiiiijj = (r, a, s, l, c, y, k, w, S) => (i.dynCall_iiiiijj = Q.Ba)(r, a, s, l, c, y, k, w, S), i.dynCall_iiiiiijj = (r, a, s, l, c, y, k, w, S, M) => (i.dynCall_iiiiiijj = Q.Ca)(r, a, s, l, c, y, k, w, S, M);
    function y4(r, a) {
      var s = p1();
      try {
        u1.get(r)(a);
      } catch (l) {
        if (m1(s), l !== l + 0) throw l;
        f1(1, 0);
      }
    }
    function _4(r, a, s, l, c) {
      var y = p1();
      try {
        return u1.get(r)(a, s, l, c);
      } catch (k) {
        if (m1(y), k !== k + 0) throw k;
        f1(1, 0);
      }
    }
    function w4(r, a, s) {
      var l = p1();
      try {
        u1.get(r)(a, s);
      } catch (c) {
        if (m1(l), c !== c + 0) throw c;
        f1(1, 0);
      }
    }
    function b4(r, a, s, l) {
      var c = p1();
      try {
        u1.get(r)(a, s, l);
      } catch (y) {
        if (m1(c), y !== y + 0) throw y;
        f1(1, 0);
      }
    }
    function C4(r) {
      var a = p1();
      try {
        u1.get(r)();
      } catch (s) {
        if (m1(a), s !== s + 0) throw s;
        f1(1, 0);
      }
    }
    function x4(r, a) {
      var s = p1();
      try {
        return u1.get(r)(a);
      } catch (l) {
        if (m1(s), l !== l + 0) throw l;
        f1(1, 0);
      }
    }
    function L4(r, a, s, l, c, y) {
      var k = p1();
      try {
        u1.get(r)(a, s, l, c, y);
      } catch (w) {
        if (m1(k), w !== w + 0) throw w;
        f1(1, 0);
      }
    }
    function k4(r, a, s, l, c) {
      var y = p1();
      try {
        u1.get(r)(a, s, l, c);
      } catch (k) {
        if (m1(y), k !== k + 0) throw k;
        f1(1, 0);
      }
    }
    function I4(r, a, s, l, c, y, k, w) {
      var S = p1();
      try {
        return u1.get(r)(a, s, l, c, y, k, w);
      } catch (M) {
        if (m1(S), M !== M + 0) throw M;
        f1(1, 0);
      }
    }
    function E4(r, a, s, l) {
      var c = p1();
      try {
        return u1.get(r)(a, s, l);
      } catch (y) {
        if (m1(c), y !== y + 0) throw y;
        f1(1, 0);
      }
    }
    function S4(r, a, s) {
      var l = p1();
      try {
        return u1.get(r)(a, s);
      } catch (c) {
        if (m1(l), c !== c + 0) throw c;
        f1(1, 0);
      }
    }
    function M4(r, a, s, l, c, y) {
      var k = p1();
      try {
        return u1.get(r)(a, s, l, c, y);
      } catch (w) {
        if (m1(k), w !== w + 0) throw w;
        f1(1, 0);
      }
    }
    function P4(r, a, s, l, c, y, k, w, S, M) {
      var T = p1();
      try {
        B3(r, a, s, l, c, y, k, w, S, M);
      } catch (q) {
        if (m1(T), q !== q + 0) throw q;
        f1(1, 0);
      }
    }
    var b2;
    h1 = function r() {
      b2 || H3(), b2 || (h1 = r);
    };
    function H3() {
      function r() {
        var a;
        if (!b2 && (b2 = !0, i.calledRun = !0, !R)) {
          if (d1(P1), u(i), (a = i.onRuntimeInitialized) == null || a.call(i), i.postRun) for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; ) {
            var s = i.postRun.shift();
            O.unshift(s);
          }
          d1(O);
        }
      }
      if (!(0 < g1)) {
        if (i.preRun) for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; ) I1();
        d1(e1), 0 < g1 || (i.setStatus ? (i.setStatus("Running..."), setTimeout(() => {
          setTimeout(() => i.setStatus(""), 1), r();
        }, 1)) : r());
      }
    }
    if (i.preInit) for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); 0 < i.preInit.length; ) i.preInit.pop()();
    return H3(), o = h, o;
  };
})(), j9 = P9, j2 = class {
  constructor() {
    throw new Error("RendererLoader is a static class and cannot be instantiated.");
  }
  static _tryLoad(t) {
    return z(this, null, function* () {
      return yield j9({ locateFile: () => t });
    });
  }
  static _loadWithBackup() {
    return z(this, null, function* () {
      return this._ModulePromise || (this._ModulePromise = this._tryLoad(this._wasmURL).catch((t) => z(this, null, function* () {
        let e = `https://unpkg.com/${g0}@${v0}/dist/dotlottie-player.wasm`;
        console.warn(`Primary WASM load failed from ${this._wasmURL}. Error: ${t.message}`), console.warn(`Attempting to load WASM from backup URL: ${e}`);
        try {
          return yield this._tryLoad(e);
        } catch (n) {
          throw console.error(`Primary WASM URL failed: ${t.message}`), console.error(`Backup WASM URL failed: ${n.message}`), new Error("WASM loading failed from all sources.");
        }
      }))), this._ModulePromise;
    });
  }
  static load() {
    return z(this, null, function* () {
      return this._loadWithBackup();
    });
  }
  static setWasmUrl(t) {
    t !== this._wasmURL && (this._wasmURL = t, this._ModulePromise = null);
  }
};
W(j2, "_ModulePromise", null), W(j2, "_wasmURL", `https://cdn.jsdelivr.net/npm/${g0}@${v0}/dist/dotlottie-player.wasm`);
var y0 = class {
  constructor() {
    W(this, "_eventListeners", /* @__PURE__ */ new Map());
  }
  addEventListener(t, e) {
    let n = this._eventListeners.get(t);
    n || (n = /* @__PURE__ */ new Set(), this._eventListeners.set(t, n)), n.add(e);
  }
  removeEventListener(t, e) {
    let n = this._eventListeners.get(t);
    n && (e ? (n.delete(e), n.size === 0 && this._eventListeners.delete(t)) : this._eventListeners.delete(t));
  }
  dispatch(t) {
    let e = this._eventListeners.get(t.type);
    e == null || e.forEach((n) => n(t));
  }
  removeAllEventListeners() {
    this._eventListeners.clear();
  }
}, S1 = class {
  static _initializeObserver() {
    if (this._observer) return;
    let t = (e) => {
      e.forEach((n) => {
        let o = this._observedCanvases.get(n.target);
        o && (n.isIntersecting ? o.unfreeze() : o.freeze());
      });
    };
    this._observer = new IntersectionObserver(t, { threshold: 0 });
  }
  static observe(t, e) {
    var n;
    this._initializeObserver(), !this._observedCanvases.has(t) && (this._observedCanvases.set(t, e), (n = this._observer) == null || n.observe(t));
  }
  static unobserve(t) {
    var e, n;
    (e = this._observer) == null || e.unobserve(t), this._observedCanvases.delete(t), this._observedCanvases.size === 0 && ((n = this._observer) == null || n.disconnect(), this._observer = null);
  }
};
W(S1, "_observer", null), W(S1, "_observedCanvases", /* @__PURE__ */ new Map());
var M1 = class {
  static _initializeObserver() {
    if (this._observer) return;
    let t = (e) => {
      e.forEach((n) => {
        let o = this._observedCanvases.get(n.target);
        if (!o) return;
        let [i, u] = o;
        clearTimeout(u);
        let m = setTimeout(() => {
          i.resize();
        }, 100);
        this._observedCanvases.set(n.target, [i, m]);
      });
    };
    this._observer = new ResizeObserver(t);
  }
  static observe(t, e) {
    var n;
    this._initializeObserver(), !this._observedCanvases.has(t) && (this._observedCanvases.set(t, [e, 0]), (n = this._observer) == null || n.observe(t));
  }
  static unobserve(t) {
    var e, n;
    (e = this._observer) == null || e.unobserve(t), this._observedCanvases.delete(t), this._observedCanvases.size === 0 && ((n = this._observer) == null || n.disconnect(), this._observer = null);
  }
};
W(M1, "_observer", null), W(M1, "_observedCanvases", /* @__PURE__ */ new Map());
function R9(t) {
  return /^#([\da-f]{6}|[\da-f]{8})$/iu.test(t);
}
function D9(t) {
  if (!R9(t)) return 0;
  let e = t.replace("#", "");
  return e = e.length === 6 ? `${e}ff` : e, parseInt(e, 16);
}
function K3(t) {
  if (t.byteLength < 4) return !1;
  let e = new Uint8Array(t.slice(0, r3.byteLength));
  for (let n = 0; n < r3.length; n += 1) if (r3[n] !== e[n]) return !1;
  return !0;
}
function Q3(t) {
  return S9.every((e) => Object.prototype.hasOwnProperty.call(t, e));
}
function X3(t) {
  if (typeof t == "string") try {
    return Q3(JSON.parse(t));
  } catch {
    return !1;
  }
  else return Q3(t);
}
function V1() {
  return 1 + ((l1 ? window.devicePixelRatio : 1) - 1) * M9;
}
function _0(t) {
  let e = t.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth);
}
var a3 = (t, e) => t === "reverse" ? e.Mode.Reverse : t === "bounce" ? e.Mode.Bounce : t === "reverse-bounce" ? e.Mode.ReverseBounce : e.Mode.Forward, T9 = (t, e) => t === "contain" ? e.Fit.Contain : t === "cover" ? e.Fit.Cover : t === "fill" ? e.Fit.Fill : t === "fit-height" ? e.Fit.FitHeight : t === "fit-width" ? e.Fit.FitWidth : e.Fit.None, F9 = (t, e) => {
  let n = new e.VectorFloat();
  return n.push_back(t[0]), n.push_back(t[1]), n;
}, i3 = (t, e) => {
  let n = new e.VectorFloat();
  return t.length !== 2 || (n.push_back(t[0]), n.push_back(t[1])), n;
}, o3 = (t, e) => {
  var n, o;
  return t ? { align: F9((n = t.align) != null ? n : [0.5, 0.5], e), fit: T9((o = t.fit) != null ? o : "contain", e) } : e.createDefaultLayout();
}, w0 = class Z {
  constructor(e) {
    W(this, "_canvas"), W(this, "_context", null), W(this, "_eventManager"), W(this, "_animationFrameId", null), W(this, "_frameManager"), W(this, "_dotLottieCore", null), W(this, "_renderConfig", {}), W(this, "_isFrozen", !1), W(this, "_backgroundColor", null), W(this, "_pointerUpMethod"), W(this, "_pointerDownMethod"), W(this, "_pointerMoveMethod"), W(this, "_pointerEnterMethod"), W(this, "_pointerExitMethod");
    var n, o, i;
    this._canvas = e.canvas, this._context = this._canvas.getContext("2d"), this._eventManager = new y0(), this._frameManager = new E9(), this._renderConfig = v1(o1({}, e.renderConfig), { devicePixelRatio: ((n = e.renderConfig) == null ? void 0 : n.devicePixelRatio) || V1(), freezeOnOffscreen: (i = (o = e.renderConfig) == null ? void 0 : o.freezeOnOffscreen) != null ? i : !0 }), j2.load().then((u) => {
      var m, h, v, p, x, b, g, C;
      Z._wasmModule = u, this._dotLottieCore = new u.DotLottiePlayer({ themeId: (m = e.themeId) != null ? m : "", autoplay: (h = e.autoplay) != null ? h : !1, backgroundColor: 0, loopAnimation: (v = e.loop) != null ? v : !1, mode: a3((p = e.mode) != null ? p : "forward", u), segment: i3((x = e.segment) != null ? x : [], u), speed: (b = e.speed) != null ? b : 1, useFrameInterpolation: (g = e.useFrameInterpolation) != null ? g : !0, marker: (C = e.marker) != null ? C : "", layout: o3(e.layout, u) }), this._eventManager.dispatch({ type: "ready" }), e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src), e.backgroundColor && this.setBackgroundColor(e.backgroundColor);
    }).catch((u) => {
      this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to load wasm module: ${u}`) });
    }), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this);
  }
  _dispatchError(e) {
    console.error(e), this._eventManager.dispatch({ type: "loadError", error: new Error(e) });
  }
  _fetchData(e) {
    return z(this, null, function* () {
      let n = yield fetch(e);
      if (!n.ok) throw new Error(`Failed to fetch animation data from URL: ${e}. ${n.status}: ${n.statusText}`);
      let o = yield n.arrayBuffer();
      return K3(o) ? o : new TextDecoder().decode(o);
    });
  }
  _loadFromData(e) {
    if (this._dotLottieCore === null) return;
    let n = this._canvas.width, o = this._canvas.height, i = !1;
    if (typeof e == "string") {
      if (!X3(e)) {
        this._dispatchError("Invalid Lottie JSON string: The provided string does not conform to the Lottie JSON format.");
        return;
      }
      i = this._dotLottieCore.loadAnimationData(e, n, o);
    } else if (e instanceof ArrayBuffer) {
      if (!K3(e)) {
        this._dispatchError("Invalid dotLottie ArrayBuffer: The provided ArrayBuffer does not conform to the dotLottie format.");
        return;
      }
      i = this._dotLottieCore.loadDotLottieData(e, n, o);
    } else if (typeof e == "object") {
      if (!X3(e)) {
        this._dispatchError("Invalid Lottie JSON object: The provided object does not conform to the Lottie JSON format.");
        return;
      }
      i = this._dotLottieCore.loadAnimationData(JSON.stringify(e), n, o);
    } else {
      this._dispatchError(`Unsupported data type for animation data. Expected: 
          - string (Lottie JSON),
          - ArrayBuffer (dotLottie),
          - object (Lottie JSON). 
          Received: ${typeof e}`);
      return;
    }
    i ? (this._eventManager.dispatch({ type: "load" }), l1 && this.resize(), this._eventManager.dispatch({ type: "frame", currentFrame: this.currentFrame }), this._render(), this._dotLottieCore.config().autoplay && (this._dotLottieCore.play(), this._dotLottieCore.isPlaying() ? (this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))) : console.error("something went wrong, the animation was suppose to autoplay")), l1 && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.freezeOnOffscreen && S1.observe(this._canvas, this), this._renderConfig.autoResize && M1.observe(this._canvas, this))) : this._dispatchError("Failed to load animation data");
  }
  _loadFromSrc(e) {
    this._fetchData(e).then((n) => this._loadFromData(n)).catch((n) => this._dispatchError(`Failed to load animation data from URL: ${e}. ${n}`));
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
    let n = (e = this._dotLottieCore) == null ? void 0 : e.config().layout;
    if (n) return { align: [n.align.get(0), n.align.get(1)], fit: (() => {
      var o, i, u, m, h, v;
      switch (n.fit) {
        case ((o = Z._wasmModule) == null ? void 0 : o.Fit.Contain):
          return "contain";
        case ((i = Z._wasmModule) == null ? void 0 : i.Fit.Cover):
          return "cover";
        case ((u = Z._wasmModule) == null ? void 0 : u.Fit.Fill):
          return "fill";
        case ((m = Z._wasmModule) == null ? void 0 : m.Fit.FitHeight):
          return "fit-height";
        case ((h = Z._wasmModule) == null ? void 0 : h.Fit.FitWidth):
          return "fit-width";
        case ((v = Z._wasmModule) == null ? void 0 : v.Fit.None):
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
      let n = (e = this._dotLottieCore) == null ? void 0 : e.manifestString();
      if (this._dotLottieCore === null || !n) return null;
      let o = JSON.parse(n);
      return Object.keys(o).length === 0 ? null : o;
    } catch {
      return null;
    }
  }
  get renderConfig() {
    return this._renderConfig;
  }
  get segment() {
    var e;
    let n = (e = this._dotLottieCore) == null ? void 0 : e.config().segment;
    if (n && n.size() === 2) return [n.get(0), n.get(1)];
  }
  get loop() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.config().loopAnimation) != null ? n : !1;
  }
  get mode() {
    var e, n, o, i;
    let u = (e = this._dotLottieCore) == null ? void 0 : e.config().mode;
    return u === ((n = Z._wasmModule) == null ? void 0 : n.Mode.Reverse) ? "reverse" : u === ((o = Z._wasmModule) == null ? void 0 : o.Mode.Bounce) ? "bounce" : u === ((i = Z._wasmModule) == null ? void 0 : i.Mode.ReverseBounce) ? "reverse-bounce" : "forward";
  }
  get isFrozen() {
    return this._isFrozen;
  }
  get backgroundColor() {
    var e;
    return (e = this._backgroundColor) != null ? e : "";
  }
  get autoplay() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.config().autoplay) != null ? n : !1;
  }
  get useFrameInterpolation() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.config().useFrameInterpolation) != null ? n : !1;
  }
  get speed() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.config().speed) != null ? n : 0;
  }
  get isReady() {
    return this._dotLottieCore !== null;
  }
  get isLoaded() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.isLoaded()) != null ? n : !1;
  }
  get isPlaying() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.isPlaying()) != null ? n : !1;
  }
  get isPaused() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.isPaused()) != null ? n : !1;
  }
  get isStopped() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.isStopped()) != null ? n : !1;
  }
  get currentFrame() {
    return this._dotLottieCore ? Math.round(this._dotLottieCore.currentFrame() * 100) / 100 : 0;
  }
  get loopCount() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.loopCount()) != null ? n : 0;
  }
  get totalFrames() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.totalFrames()) != null ? n : 0;
  }
  get duration() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.duration()) != null ? n : 0;
  }
  get segmentDuration() {
    var e, n;
    return (n = (e = this._dotLottieCore) == null ? void 0 : e.segmentDuration()) != null ? n : 0;
  }
  get canvas() {
    return this._canvas;
  }
  load(e) {
    var n, o, i, u, m, h, v, p, x;
    this._dotLottieCore === null || Z._wasmModule === null || (this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), this._isFrozen = !1, this._dotLottieCore.setConfig({ themeId: (n = e.themeId) != null ? n : "", autoplay: (o = e.autoplay) != null ? o : !1, backgroundColor: 0, loopAnimation: (i = e.loop) != null ? i : !1, mode: a3((u = e.mode) != null ? u : "forward", Z._wasmModule), segment: i3((m = e.segment) != null ? m : [], Z._wasmModule), speed: (h = e.speed) != null ? h : 1, useFrameInterpolation: (v = e.useFrameInterpolation) != null ? v : !0, marker: (p = e.marker) != null ? p : "", layout: o3(e.layout, Z._wasmModule) }), e.data ? this._loadFromData(e.data) : e.src && this._loadFromSrc(e.src), this.setBackgroundColor((x = e.backgroundColor) != null ? x : ""));
  }
  _render() {
    if (this._dotLottieCore === null || this._context === null) return !1;
    if (this._dotLottieCore.render()) {
      let e = this._dotLottieCore.buffer(), n = new Uint8ClampedArray(e, 0, this._canvas.width * this._canvas.height * 4), o = null;
      return typeof ImageData > "u" ? (o = this._context.createImageData(this._canvas.width, this._canvas.height), o.data.set(n)) : o = new ImageData(n, this._canvas.width, this._canvas.height), this._context.putImageData(o, 0, 0), this._eventManager.dispatch({ type: "render", currentFrame: this.currentFrame }), !0;
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
    this._dotLottieCore !== null && (this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), (this._dotLottieCore.play() || this._dotLottieCore.isPlaying()) && (this._isFrozen = !1, this._eventManager.dispatch({ type: "play" }), this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this))), l1 && this._canvas instanceof HTMLCanvasElement && this._renderConfig.freezeOnOffscreen && !_0(this._canvas) && this.freeze());
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
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { speed: e }));
  }
  setBackgroundColor(e) {
    this._dotLottieCore !== null && (l1 && this._canvas instanceof HTMLCanvasElement ? this._canvas.style.backgroundColor = e : this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { backgroundColor: D9(e) })), this._backgroundColor = e);
  }
  setLoop(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { loopAnimation: e }));
  }
  setUseFrameInterpolation(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { useFrameInterpolation: e }));
  }
  addEventListener(e, n) {
    this._eventManager.addEventListener(e, n);
  }
  removeEventListener(e, n) {
    this._eventManager.removeEventListener(e, n);
  }
  destroy() {
    var e;
    this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null), l1 && this._canvas instanceof HTMLCanvasElement && (S1.unobserve(this._canvas), M1.unobserve(this._canvas)), (e = this._dotLottieCore) == null || e.delete(), this._dotLottieCore = null, this._context = null, this._eventManager.dispatch({ type: "destroy" }), this._eventManager.removeAllEventListeners(), this._cleanupStateMachineListeners();
  }
  freeze() {
    this._animationFrameId !== null && (this._frameManager.cancelAnimationFrame(this._animationFrameId), this._animationFrameId = null, this._isFrozen = !0, this._eventManager.dispatch({ type: "freeze" }));
  }
  unfreeze() {
    this._animationFrameId === null && (this._animationFrameId = this._frameManager.requestAnimationFrame(this._draw.bind(this)), this._isFrozen = !1, this._eventManager.dispatch({ type: "unfreeze" }));
  }
  resize() {
    if (!(!this._dotLottieCore || !this.isLoaded)) {
      if (l1 && this._canvas instanceof HTMLCanvasElement) {
        let e = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, { height: n, width: o } = this._canvas.getBoundingClientRect();
        n !== 0 && o !== 0 && (this._canvas.width = o * e, this._canvas.height = n * e);
      }
      this._dotLottieCore.resize(this._canvas.width, this._canvas.height) && this._render();
    }
  }
  setSegment(e, n) {
    this._dotLottieCore === null || Z._wasmModule === null || this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { segment: i3([e, n], Z._wasmModule) }));
  }
  setMode(e) {
    this._dotLottieCore === null || Z._wasmModule === null || this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { mode: a3(e, Z._wasmModule) }));
  }
  setRenderConfig(e) {
    let n = e, { devicePixelRatio: o, freezeOnOffscreen: i } = n, u = p0(n, ["devicePixelRatio", "freezeOnOffscreen"]);
    this._renderConfig = v1(o1(o1({}, this._renderConfig), u), { devicePixelRatio: o || V1(), freezeOnOffscreen: i ?? !0 }), l1 && this._canvas instanceof HTMLCanvasElement && (this._renderConfig.autoResize ? M1.observe(this._canvas, this) : M1.unobserve(this._canvas), this._renderConfig.freezeOnOffscreen ? S1.observe(this._canvas, this) : (S1.unobserve(this._canvas), this._isFrozen && this.unfreeze()));
  }
  loadAnimation(e) {
    this._dotLottieCore === null || this._dotLottieCore.activeAnimationId() === e || (this._dotLottieCore.loadAnimation(e, this._canvas.width, this._canvas.height) ? (this._eventManager.dispatch({ type: "load" }), this.resize()) : this._eventManager.dispatch({ type: "loadError", error: new Error(`Failed to animation :${e}`) }));
  }
  setMarker(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { marker: e }));
  }
  markers() {
    var e;
    let n = (e = this._dotLottieCore) == null ? void 0 : e.markers();
    if (n) {
      let o = [];
      for (let i = 0; i < n.size(); i += 1) {
        let u = n.get(i);
        o.push({ name: u.name, time: u.time, duration: u.duration });
      }
      return o;
    }
    return [];
  }
  setTheme(e) {
    if (this._dotLottieCore === null) return !1;
    let n = this._dotLottieCore.setTheme(e);
    return this._render(), n;
  }
  resetTheme() {
    return this._dotLottieCore === null ? !1 : this._dotLottieCore.resetTheme();
  }
  setThemeData(e) {
    if (this._dotLottieCore === null) return !1;
    let n = this._dotLottieCore.setThemeData(e);
    return this._render(), n;
  }
  setSlots(e) {
    this._dotLottieCore !== null && this._dotLottieCore.setSlots(e);
  }
  setLayout(e) {
    this._dotLottieCore === null || Z._wasmModule === null || this._dotLottieCore.setConfig(v1(o1({}, this._dotLottieCore.config()), { layout: o3(e, Z._wasmModule) }));
  }
  setViewport(e, n, o, i) {
    return this._dotLottieCore === null ? !1 : this._dotLottieCore.setViewport(e, n, o, i);
  }
  static setWasmUrl(e) {
    j2.setWasmUrl(e);
  }
  loadStateMachine(e) {
    var n, o;
    return (o = (n = this._dotLottieCore) == null ? void 0 : n.loadStateMachine(e)) != null ? o : !1;
  }
  startStateMachine() {
    var e, n;
    let o = (n = (e = this._dotLottieCore) == null ? void 0 : e.startStateMachine()) != null ? n : !1;
    return o && this._setupStateMachineListeners(), o;
  }
  stopStateMachine() {
    var e, n;
    let o = (n = (e = this._dotLottieCore) == null ? void 0 : e.stopStateMachine()) != null ? n : !1;
    return o && this._cleanupStateMachineListeners(), o;
  }
  _getPointerPosition(e) {
    let n = this._canvas.getBoundingClientRect(), o = this._canvas.width / n.width, i = this._canvas.height / n.height, u = this._renderConfig.devicePixelRatio || window.devicePixelRatio || 1, m = (e.clientX - n.left) * o / u, h = (e.clientY - n.top) * i / u;
    return { x: m, y: h };
  }
  _onPointerUp(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this.postPointerUpEvent(n, o);
  }
  _onPointerDown(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this.postPointerDownEvent(n, o);
  }
  _onPointerMove(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this.postPointerMoveEvent(n, o);
  }
  _onPointerEnter(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this.postPointerEnterEvent(n, o);
  }
  _onPointerLeave(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this.postPointerExitEvent(n, o);
  }
  postPointerUpEvent(e, n) {
    var o;
    return (o = this._dotLottieCore) == null ? void 0 : o.postPointerUpEvent(e, n);
  }
  postPointerDownEvent(e, n) {
    var o;
    return (o = this._dotLottieCore) == null ? void 0 : o.postPointerDownEvent(e, n);
  }
  postPointerMoveEvent(e, n) {
    var o;
    return (o = this._dotLottieCore) == null ? void 0 : o.postPointerMoveEvent(e, n);
  }
  postPointerEnterEvent(e, n) {
    var o;
    return (o = this._dotLottieCore) == null ? void 0 : o.postPointerEnterEvent(e, n);
  }
  postPointerExitEvent(e, n) {
    var o;
    return (o = this._dotLottieCore) == null ? void 0 : o.postPointerExitEvent(e, n);
  }
  getStateMachineListeners() {
    if (!this._dotLottieCore) return [];
    let e = this._dotLottieCore.stateMachineFrameworkSetup(), n = [];
    for (let o = 0; o < e.size(); o += 1) n.push(e.get(o));
    return n;
  }
  _setupStateMachineListeners() {
    if (l1 && this._canvas instanceof HTMLCanvasElement && this._dotLottieCore !== null && this.isLoaded) {
      let e = this.getStateMachineListeners();
      e.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), e.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), e.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), e.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), e.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod);
    }
  }
  _cleanupStateMachineListeners() {
    l1 && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod));
  }
  loadStateMachineData(e) {
    var n, o;
    return (o = (n = this._dotLottieCore) == null ? void 0 : n.loadStateMachineData(e)) != null ? o : !1;
  }
  animationSize() {
    var e, n, o, i;
    let u = (n = (e = this._dotLottieCore) == null ? void 0 : e.animationSize().get(0)) != null ? n : 0, m = (i = (o = this._dotLottieCore) == null ? void 0 : o.animationSize().get(1)) != null ? i : 0;
    return { width: u, height: m };
  }
  setStateMachineBooleanContext(e, n) {
    var o, i;
    return (i = (o = this._dotLottieCore) == null ? void 0 : o.setStateMachineBooleanContext(e, n)) != null ? i : !1;
  }
  setStateMachineNumericContext(e, n) {
    var o, i;
    return (i = (o = this._dotLottieCore) == null ? void 0 : o.setStateMachineNumericContext(e, n)) != null ? i : !1;
  }
  setStateMachineStringContext(e, n) {
    var o, i;
    return (i = (o = this._dotLottieCore) == null ? void 0 : o.setStateMachineStringContext(e, n)) != null ? i : !1;
  }
  getLayerBoundingBox(e) {
    var n;
    let o = (n = this._dotLottieCore) == null ? void 0 : n.getLayerBounds(e);
    if (!o || o.size() !== 8) return;
    let i = [];
    for (let u = 0; u < 8; u += 1) i.push(o.get(u));
    return i;
  }
  static transformThemeToLottieSlots(e, n) {
    var o, i;
    return (i = (o = Z._wasmModule) == null ? void 0 : o.transformThemeToLottieSlots(e, n)) != null ? i : "";
  }
};
W(w0, "_wasmModule", null);
var O9 = w0, A9 = class {
  constructor() {
    if (typeof Worker > "u") throw new Error("Worker is not supported in this environment.");
    let t = new Blob([new Uint8Array([34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 10, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115, 99, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 68, 101, 115, 99, 114, 105, 112, 116, 111, 114, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 83, 121, 109, 98, 111, 108, 115, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 112, 114, 111, 112, 101, 114, 116, 121, 73, 115, 69, 110, 117, 109, 101, 114, 97, 98, 108, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 107, 101, 121, 32, 105, 110, 32, 111, 98, 106, 32, 63, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 123, 32, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 44, 32, 118, 97, 108, 117, 101, 32, 125, 41, 32, 58, 32, 111, 98, 106, 91, 107, 101, 121, 93, 32, 61, 32, 118, 97, 108, 117, 101, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 105, 110, 32, 98, 32, 124, 124, 32, 40, 98, 32, 61, 32, 123, 125, 41, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 40, 98, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108, 40, 98, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 97, 44, 32, 112, 114, 111, 112, 44, 32, 98, 91, 112, 114, 111, 112, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 80, 114, 111, 112, 115, 40, 97, 44, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 68, 101, 115, 99, 115, 40, 98, 41, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 111, 98, 106, 82, 101, 115, 116, 32, 61, 32, 40, 115, 111, 117, 114, 99, 101, 44, 32, 101, 120, 99, 108, 117, 100, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 116, 97, 114, 103, 101, 116, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 105, 110, 32, 115, 111, 117, 114, 99, 101, 41, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 95, 95, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 46, 99, 97, 108, 108, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 32, 38, 38, 32, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 111, 117, 114, 99, 101, 32, 33, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 41, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 112, 114, 111, 112, 32, 111, 102, 32, 95, 95, 103, 101, 116, 79, 119, 110, 80, 114, 111, 112, 83, 121, 109, 98, 111, 108, 115, 40, 115, 111, 117, 114, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 120, 99, 108, 117, 100, 101, 46, 105, 110, 100, 101, 120, 79, 102, 40, 112, 114, 111, 112, 41, 32, 60, 32, 48, 32, 38, 38, 32, 95, 95, 112, 114, 111, 112, 73, 115, 69, 110, 117, 109, 46, 99, 97, 108, 108, 40, 115, 111, 117, 114, 99, 101, 44, 32, 112, 114, 111, 112, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 114, 103, 101, 116, 91, 112, 114, 111, 112, 93, 32, 61, 32, 115, 111, 117, 114, 99, 101, 91, 112, 114, 111, 112, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 97, 114, 103, 101, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 32, 61, 32, 40, 111, 98, 106, 44, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 95, 95, 100, 101, 102, 78, 111, 114, 109, 97, 108, 80, 114, 111, 112, 40, 111, 98, 106, 44, 32, 116, 121, 112, 101, 111, 102, 32, 107, 101, 121, 32, 33, 61, 61, 32, 34, 115, 121, 109, 98, 111, 108, 34, 32, 63, 32, 107, 101, 121, 32, 43, 32, 34, 34, 32, 58, 32, 107, 101, 121, 44, 32, 118, 97, 108, 117, 101, 41, 59, 10, 32, 32, 118, 97, 114, 32, 95, 95, 97, 115, 121, 110, 99, 32, 61, 32, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 44, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 114, 101, 115, 111, 108, 118, 101, 44, 32, 114, 101, 106, 101, 99, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 117, 108, 102, 105, 108, 108, 101, 100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 110, 101, 120, 116, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 101, 106, 101, 99, 116, 101, 100, 32, 61, 32, 40, 118, 97, 108, 117, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 116, 104, 114, 111, 119, 40, 118, 97, 108, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 106, 101, 99, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 115, 116, 101, 112, 32, 61, 32, 40, 120, 41, 32, 61, 62, 32, 120, 46, 100, 111, 110, 101, 32, 63, 32, 114, 101, 115, 111, 108, 118, 101, 40, 120, 46, 118, 97, 108, 117, 101, 41, 32, 58, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 120, 46, 118, 97, 108, 117, 101, 41, 46, 116, 104, 101, 110, 40, 102, 117, 108, 102, 105, 108, 108, 101, 100, 44, 32, 114, 101, 106, 101, 99, 116, 101, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 115, 116, 101, 112, 40, 40, 103, 101, 110, 101, 114, 97, 116, 111, 114, 32, 61, 32, 103, 101, 110, 101, 114, 97, 116, 111, 114, 46, 97, 112, 112, 108, 121, 40, 95, 95, 116, 104, 105, 115, 44, 32, 95, 95, 97, 114, 103, 117, 109, 101, 110, 116, 115, 41, 41, 46, 110, 101, 120, 116, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 97, 110, 105, 109, 97, 116, 105, 111, 110, 45, 102, 114, 97, 109, 101, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 34, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 62, 61, 32, 78, 117, 109, 98, 101, 114, 46, 77, 65, 88, 95, 83, 65, 70, 69, 95, 73, 78, 84, 69, 71, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 32, 61, 32, 115, 101, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 108, 108, 98, 97, 99, 107, 40, 68, 97, 116, 101, 46, 110, 111, 119, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 72, 97, 110, 100, 108, 101, 73, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 95, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 73, 109, 109, 101, 100, 105, 97, 116, 101, 40, 116, 104, 105, 115, 46, 95, 108, 97, 115, 116, 73, 109, 109, 101, 100, 105, 97, 116, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 115, 116, 114, 97, 116, 101, 103, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 63, 32, 110, 101, 119, 32, 87, 101, 98, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 32, 58, 32, 110, 101, 119, 32, 78, 111, 100, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 83, 116, 114, 97, 116, 101, 103, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 99, 97, 108, 108, 98, 97, 99, 107, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 116, 114, 97, 116, 101, 103, 121, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 105, 100, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 110, 115, 116, 97, 110, 116, 115, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 38, 38, 32, 116, 121, 112, 101, 111, 102, 32, 119, 105, 110, 100, 111, 119, 46, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 10, 32, 32, 118, 97, 114, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 91, 56, 48, 44, 32, 55, 53, 44, 32, 51, 44, 32, 52, 93, 41, 59, 10, 32, 32, 118, 97, 114, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 32, 61, 32, 91, 34, 118, 34, 44, 32, 34, 105, 112, 34, 44, 32, 34, 111, 112, 34, 44, 32, 34, 108, 97, 121, 101, 114, 115, 34, 44, 32, 34, 102, 114, 34, 44, 32, 34, 119, 34, 44, 32, 34, 104, 34, 93, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 32, 61, 32, 34, 48, 46, 52, 50, 46, 48, 34, 59, 10, 32, 32, 118, 97, 114, 32, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 32, 61, 32, 34, 64, 108, 111, 116, 116, 105, 101, 102, 105, 108, 101, 115, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 101, 98, 34, 59, 10, 32, 32, 118, 97, 114, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 32, 61, 32, 48, 46, 55, 53, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 106, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 32, 61, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 33, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 63, 32, 40, 95, 97, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 114, 99, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 109, 111, 100, 117, 108, 101, 65, 114, 103, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 32, 61, 32, 109, 111, 100, 117, 108, 101, 65, 114, 103, 44, 32, 97, 97, 44, 32, 98, 97, 44, 32, 99, 97, 32, 61, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 44, 32, 100, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 125, 44, 32, 107, 41, 44, 32, 101, 97, 32, 61, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 44, 32, 113, 32, 61, 32, 34, 34, 44, 32, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 100, 111, 99, 117, 109, 101, 110, 116, 32, 38, 38, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 32, 38, 38, 32, 40, 113, 32, 61, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 99, 117, 114, 114, 101, 110, 116, 83, 99, 114, 105, 112, 116, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 32, 38, 38, 32, 40, 113, 32, 61, 32, 95, 115, 99, 114, 105, 112, 116, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 113, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98, 108, 111, 98, 58, 34, 41, 32, 63, 32, 113, 32, 61, 32, 34, 34, 32, 58, 32, 113, 32, 61, 32, 113, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 113, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 63, 35, 93, 46, 42, 47, 44, 32, 34, 34, 41, 46, 108, 97, 115, 116, 73, 110, 100, 101, 120, 79, 102, 40, 34, 47, 34, 41, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 102, 101, 116, 99, 104, 40, 97, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 98, 46, 111, 107, 32, 63, 32, 98, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 32, 58, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 106, 101, 99, 116, 40, 69, 114, 114, 111, 114, 40, 98, 46, 115, 116, 97, 116, 117, 115, 32, 43, 32, 34, 32, 58, 32, 34, 32, 43, 32, 98, 46, 117, 114, 108, 41, 41, 10, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 106, 97, 32, 61, 32, 107, 46, 112, 114, 105, 110, 116, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 44, 32, 116, 32, 61, 32, 107, 46, 112, 114, 105, 110, 116, 69, 114, 114, 32, 124, 124, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 46, 98, 105, 110, 100, 40, 99, 111, 110, 115, 111, 108, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 107, 44, 32, 100, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 100, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 32, 38, 38, 32, 40, 101, 97, 32, 61, 32, 107, 46, 116, 104, 105, 115, 80, 114, 111, 103, 114, 97, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 107, 97, 32, 61, 32, 107, 46, 119, 97, 115, 109, 66, 105, 110, 97, 114, 121, 44, 32, 108, 97, 44, 32, 109, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 110, 97, 44, 32, 117, 44, 32, 120, 44, 32, 121, 44, 32, 122, 44, 32, 65, 44, 32, 66, 44, 32, 111, 97, 44, 32, 112, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 113, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 108, 97, 46, 98, 117, 102, 102, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 56, 32, 61, 32, 117, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 49, 54, 32, 61, 32, 121, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 56, 32, 61, 32, 120, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 49, 54, 32, 61, 32, 122, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 51, 50, 32, 61, 32, 65, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 85, 51, 50, 32, 61, 32, 66, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 51, 50, 32, 61, 32, 111, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 46, 72, 69, 65, 80, 70, 54, 52, 32, 61, 32, 112, 97, 32, 61, 32, 110, 101, 119, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 97, 32, 61, 32, 91, 93, 44, 32, 115, 97, 32, 61, 32, 91, 93, 44, 32, 116, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 107, 46, 112, 114, 101, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 67, 32, 61, 32, 48, 44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108, 44, 32, 68, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 65, 98, 111, 114, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 34, 65, 98, 111, 114, 116, 101, 100, 40, 34, 32, 43, 32, 97, 32, 43, 32, 34, 41, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 110, 101, 119, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 82, 117, 110, 116, 105, 109, 101, 69, 114, 114, 111, 114, 40, 97, 32, 43, 32, 34, 46, 32, 66, 117, 105, 108, 100, 32, 119, 105, 116, 104, 32, 45, 115, 65, 83, 83, 69, 82, 84, 73, 79, 78, 83, 32, 102, 111, 114, 32, 109, 111, 114, 101, 32, 105, 110, 102, 111, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 120, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 100, 97, 116, 97, 58, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 111, 99, 116, 101, 116, 45, 115, 116, 114, 101, 97, 109, 59, 98, 97, 115, 101, 54, 52, 44, 34, 41, 44, 32, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 32, 61, 61, 32, 121, 97, 32, 38, 38, 32, 107, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 107, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 34, 98, 111, 116, 104, 32, 97, 115, 121, 110, 99, 32, 97, 110, 100, 32, 115, 121, 110, 99, 32, 102, 101, 116, 99, 104, 105, 110, 103, 32, 111, 102, 32, 116, 104, 101, 32, 119, 97, 115, 109, 32, 102, 97, 105, 108, 101, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 65, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 97, 32, 63, 32, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 41, 46, 116, 104, 101, 110, 40, 40, 41, 32, 61, 62, 32, 122, 97, 40, 97, 41, 41, 32, 58, 32, 105, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 98, 41, 32, 61, 62, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 41, 32, 61, 62, 32, 122, 97, 40, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 66, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 65, 97, 40, 97, 41, 46, 116, 104, 101, 110, 40, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 40, 100, 44, 32, 98, 41, 41, 46, 116, 104, 101, 110, 40, 99, 44, 32, 40, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 102, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 115, 121, 110, 99, 104, 114, 111, 110, 111, 117, 115, 108, 121, 32, 112, 114, 101, 112, 97, 114, 101, 32, 119, 97, 115, 109, 58, 32, 36, 123, 100, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 67, 97, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 121, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 97, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 32, 124, 124, 32, 120, 97, 40, 99, 41, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 102, 101, 116, 99, 104, 32, 63, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 32, 58, 32, 102, 101, 116, 99, 104, 40, 99, 44, 32, 123, 32, 99, 114, 101, 100, 101, 110, 116, 105, 97, 108, 115, 58, 32, 34, 115, 97, 109, 101, 45, 111, 114, 105, 103, 105, 110, 34, 32, 125, 41, 46, 116, 104, 101, 110, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 100, 41, 32, 61, 62, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 100, 44, 32, 97, 41, 46, 116, 104, 101, 110, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 119, 97, 115, 109, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 34, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 66, 97, 40, 99, 44, 32, 97, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 68, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 34, 69, 120, 105, 116, 83, 116, 97, 116, 117, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 96, 80, 114, 111, 103, 114, 97, 109, 32, 116, 101, 114, 109, 105, 110, 97, 116, 101, 100, 32, 119, 105, 116, 104, 32, 101, 120, 105, 116, 40, 36, 123, 97, 125, 41, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 116, 97, 116, 117, 115, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 48, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 97, 46, 115, 104, 105, 102, 116, 40, 41, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 97, 32, 61, 32, 107, 46, 110, 111, 69, 120, 105, 116, 82, 117, 110, 116, 105, 109, 101, 32, 124, 124, 32, 116, 114, 117, 101, 44, 32, 71, 97, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 71, 32, 61, 32, 40, 97, 44, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 78, 97, 78, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 99, 32, 61, 32, 98, 59, 32, 97, 91, 99, 93, 32, 38, 38, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 54, 32, 60, 32, 99, 32, 45, 32, 98, 32, 38, 38, 32, 97, 46, 98, 117, 102, 102, 101, 114, 32, 38, 38, 32, 71, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 71, 97, 46, 100, 101, 99, 111, 100, 101, 40, 97, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 98, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 34, 34, 59, 32, 98, 32, 60, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 97, 91, 98, 43, 43, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 38, 32, 49, 50, 56, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 57, 50, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 50, 52, 41, 41, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 40, 101, 32, 38, 32, 51, 49, 41, 32, 60, 60, 32, 54, 32, 124, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 50, 50, 52, 32, 61, 61, 32, 40, 101, 32, 38, 32, 50, 52, 48, 41, 32, 63, 32, 40, 101, 32, 38, 32, 49, 53, 41, 32, 60, 60, 32, 49, 50, 32, 124, 32, 102, 32, 60, 60, 32, 54, 32, 124, 32, 104, 32, 58, 32, 40, 101, 32, 38, 32, 55, 41, 32, 60, 60, 32, 49, 56, 32, 124, 32, 102, 32, 60, 60, 32, 49, 50, 32, 124, 32, 104, 32, 60, 60, 32, 54, 32, 124, 32, 97, 91, 98, 43, 43, 93, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 62, 32, 101, 32, 63, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 32, 58, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 108, 97, 115, 115, 32, 72, 97, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 69, 97, 32, 61, 32, 97, 32, 45, 32, 50, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 74, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 91, 93, 44, 32, 98, 32, 61, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 48, 41, 44, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 110, 101, 119, 32, 72, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 99, 46, 69, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 66, 91, 99, 46, 69, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 48, 41, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 111, 102, 32, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 101, 32, 124, 124, 32, 101, 32, 61, 61, 61, 32, 100, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 97, 40, 101, 44, 32, 100, 44, 32, 99, 46, 69, 97, 32, 43, 32, 49, 54, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 40, 101, 41, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 75, 97, 32, 61, 32, 48, 44, 32, 75, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 120, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 60, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 32, 43, 32, 99, 32, 45, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 49, 50, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 48, 52, 55, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 49, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 57, 50, 32, 124, 32, 102, 32, 62, 62, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 54, 53, 53, 51, 53, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 50, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 50, 52, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 51, 32, 62, 61, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 50, 52, 48, 32, 124, 32, 102, 32, 62, 62, 32, 49, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 49, 50, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 62, 62, 32, 54, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 43, 43, 93, 32, 61, 32, 49, 50, 56, 32, 124, 32, 102, 32, 38, 32, 54, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 91, 98, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 97, 32, 61, 32, 123, 125, 44, 32, 77, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 112, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 112, 111, 112, 40, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 76, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 91, 97, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 77, 32, 61, 32, 123, 125, 44, 32, 78, 32, 61, 32, 123, 125, 44, 32, 78, 97, 32, 61, 32, 123, 125, 44, 32, 79, 97, 44, 32, 80, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 99, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 97, 46, 108, 101, 110, 103, 116, 104, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 77, 105, 115, 109, 97, 116, 99, 104, 101, 100, 32, 116, 121, 112, 101, 32, 99, 111, 110, 118, 101, 114, 116, 101, 114, 32, 99, 111, 117, 110, 116, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 108, 41, 32, 79, 40, 97, 91, 108, 93, 44, 32, 103, 91, 108, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 41, 32, 61, 62, 32, 78, 97, 91, 103, 93, 32, 61, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 114, 114, 97, 121, 40, 98, 46, 108, 101, 110, 103, 116, 104, 41, 44, 32, 102, 32, 61, 32, 91, 93, 44, 32, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 78, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 63, 32, 101, 91, 108, 93, 32, 61, 32, 78, 91, 103, 93, 32, 58, 32, 40, 102, 46, 112, 117, 115, 104, 40, 103, 41, 44, 32, 77, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 103, 41, 32, 124, 124, 32, 40, 77, 91, 103, 93, 32, 61, 32, 91, 93, 41, 44, 32, 77, 91, 103, 93, 46, 112, 117, 115, 104, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 108, 93, 32, 61, 32, 78, 91, 103, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 102, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 100, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 97, 44, 32, 81, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 34, 34, 59, 32, 120, 91, 97, 93, 59, 32, 41, 32, 98, 32, 43, 61, 32, 80, 97, 91, 120, 91, 97, 43, 43, 93, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 110, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 116, 121, 112, 101, 32, 34, 36, 123, 100, 125, 34, 32, 109, 117, 115, 116, 32, 104, 97, 118, 101, 32, 97, 32, 112, 111, 115, 105, 116, 105, 118, 101, 32, 105, 110, 116, 101, 103, 101, 114, 32, 116, 121, 112, 101, 105, 100, 32, 112, 111, 105, 110, 116, 101, 114, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 78, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 46, 107, 98, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 116, 121, 112, 101, 32, 39, 36, 123, 100, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 91, 97, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 78, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 77, 91, 97, 93, 44, 32, 100, 101, 108, 101, 116, 101, 32, 77, 91, 97, 93, 44, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 101, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 79, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 123, 125, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 82, 97, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 83, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 97, 46, 68, 97, 46, 71, 97, 46, 70, 97, 46, 110, 97, 109, 101, 32, 43, 32, 34, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 97, 108, 114, 101, 97, 100, 121, 32, 100, 101, 108, 101, 116, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 97, 32, 61, 32, 102, 97, 108, 115, 101, 44, 32, 85, 97, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 86, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 61, 61, 61, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 46, 74, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 86, 97, 40, 97, 44, 32, 98, 44, 32, 99, 46, 74, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 32, 63, 32, 110, 117, 108, 108, 32, 58, 32, 99, 46, 99, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 97, 32, 61, 32, 123, 125, 44, 32, 88, 97, 32, 61, 32, 123, 125, 44, 32, 89, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 112, 116, 114, 32, 115, 104, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 97, 46, 74, 97, 59, 32, 41, 32, 98, 32, 61, 32, 97, 46, 84, 97, 40, 98, 41, 44, 32, 97, 32, 61, 32, 97, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 88, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 97, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 71, 97, 32, 124, 124, 32, 33, 98, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 109, 97, 107, 101, 67, 108, 97, 115, 115, 72, 97, 110, 100, 108, 101, 32, 114, 101, 113, 117, 105, 114, 101, 115, 32, 112, 116, 114, 32, 97, 110, 100, 32, 112, 116, 114, 84, 121, 112, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 33, 98, 46, 75, 97, 32, 33, 61, 61, 32, 33, 33, 98, 46, 73, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 66, 111, 116, 104, 32, 115, 109, 97, 114, 116, 80, 116, 114, 84, 121, 112, 101, 32, 97, 110, 100, 32, 115, 109, 97, 114, 116, 80, 116, 114, 32, 109, 117, 115, 116, 32, 98, 101, 32, 115, 112, 101, 99, 105, 102, 105, 101, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 99, 111, 117, 110, 116, 32, 61, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 49, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 40, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 44, 32, 123, 32, 68, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 98, 44, 32, 119, 114, 105, 116, 97, 98, 108, 101, 58, 32, 116, 114, 117, 101, 32, 125, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 90, 97, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 61, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 41, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 98, 44, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 97, 32, 61, 32, 110, 101, 119, 32, 70, 105, 110, 97, 108, 105, 122, 97, 116, 105, 111, 110, 82, 101, 103, 105, 115, 116, 114, 121, 40, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 98, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 98, 46, 73, 97, 32, 63, 32, 98, 46, 75, 97, 46, 78, 97, 40, 98, 46, 73, 97, 41, 32, 58, 32, 98, 46, 71, 97, 46, 70, 97, 46, 78, 97, 40, 98, 46, 69, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 73, 97, 32, 38, 38, 32, 84, 97, 46, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 44, 32, 123, 32, 68, 97, 58, 32, 99, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 97, 32, 61, 32, 40, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 84, 97, 46, 117, 110, 114, 101, 103, 105, 115, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 90, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 97, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 40, 98, 44, 32, 34, 110, 97, 109, 101, 34, 44, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 97, 32, 125, 41, 44, 32, 100, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 72, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 91, 98, 93, 46, 72, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 101, 46, 108, 101, 110, 103, 116, 104, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 70, 117, 110, 99, 116, 105, 111, 110, 32, 39, 36, 123, 99, 125, 39, 32, 99, 97, 108, 108, 101, 100, 32, 119, 105, 116, 104, 32, 97, 110, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 101, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 115, 32, 111, 110, 101, 32, 111, 102, 32, 40, 36, 123, 97, 91, 98, 93, 46, 72, 97, 125, 41, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 91, 98, 93, 46, 72, 97, 91, 101, 46, 108, 101, 110, 103, 116, 104, 93, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 72, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 46, 72, 97, 91, 100, 46, 81, 97, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 101, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 112, 117, 98, 108, 105, 99, 32, 110, 97, 109, 101, 32, 39, 36, 123, 97, 125, 39, 32, 116, 119, 105, 99, 101, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 98, 40, 107, 44, 32, 97, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 91, 97, 93, 46, 72, 97, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 99, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 111, 118, 101, 114, 108, 111, 97, 100, 115, 32, 111, 102, 32, 97, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 105, 116, 104, 32, 116, 104, 101, 32, 115, 97, 109, 101, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 97, 114, 103, 117, 109, 101, 110, 116, 115, 32, 40, 36, 123, 99, 125, 41, 33, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32, 107, 91, 97, 93, 46, 81, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 102, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 91, 94, 97, 45, 122, 65, 45, 90, 48, 45, 57, 95, 93, 47, 103, 44, 32, 34, 36, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 56, 32, 60, 61, 32, 98, 32, 38, 38, 32, 53, 55, 32, 62, 61, 32, 98, 32, 63, 32, 96, 95, 36, 123, 97, 125, 96, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 80, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 78, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 74, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 84, 97, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 99, 98, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 98, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 98, 32, 33, 61, 61, 32, 99, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 84, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 69, 120, 112, 101, 99, 116, 101, 100, 32, 110, 117, 108, 108, 32, 111, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 99, 46, 110, 97, 109, 101, 125, 44, 32, 103, 111, 116, 32, 97, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 111, 102, 32, 36, 123, 98, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 46, 84, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 86, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 88, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 78, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 32, 124, 124, 32, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 85, 97, 32, 38, 38, 32, 98, 46, 68, 97, 46, 71, 97, 46, 85, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 75, 97, 32, 63, 32, 98, 46, 68, 97, 46, 75, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 86, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 98, 46, 68, 97, 46, 73, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 80, 97, 115, 115, 105, 110, 103, 32, 114, 97, 119, 32, 112, 111, 105, 110, 116, 101, 114, 32, 116, 111, 32, 115, 109, 97, 114, 116, 32, 112, 111, 105, 110, 116, 101, 114, 32, 105, 115, 32, 105, 108, 108, 101, 103, 97, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 116, 104, 105, 115, 46, 114, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 75, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 75, 97, 32, 63, 32, 98, 46, 68, 97, 46, 75, 97, 46, 110, 97, 109, 101, 32, 58, 32, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 75, 97, 32, 61, 61, 61, 32, 116, 104, 105, 115, 41, 32, 99, 32, 61, 32, 98, 46, 68, 97, 46, 73, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 110, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 98, 40, 40, 41, 32, 61, 62, 32, 100, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 32, 38, 38, 32, 97, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 46, 78, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 85, 110, 115, 117, 112, 112, 111, 114, 116, 105, 110, 103, 32, 115, 104, 97, 114, 105, 110, 103, 32, 112, 111, 108, 105, 99, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 98, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 87, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 110, 117, 108, 108, 32, 105, 115, 32, 110, 111, 116, 32, 97, 32, 118, 97, 108, 105, 100, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 34, 36, 123, 106, 98, 40, 98, 41, 125, 34, 32, 97, 115, 32, 97, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 46, 68, 97, 46, 69, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 100, 101, 108, 101, 116, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 97, 115, 32, 97, 32, 112, 111, 105, 110, 116, 101, 114, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 46, 68, 97, 46, 71, 97, 46, 85, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 118, 101, 114, 116, 32, 97, 114, 103, 117, 109, 101, 110, 116, 32, 111, 102, 32, 116, 121, 112, 101, 32, 36, 123, 98, 46, 68, 97, 46, 71, 97, 46, 110, 97, 109, 101, 125, 32, 116, 111, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 116, 121, 112, 101, 32, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 104, 98, 40, 98, 46, 68, 97, 46, 69, 97, 44, 32, 98, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 116, 104, 105, 115, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 70, 97, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 87, 97, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 85, 97, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 86, 97, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 108, 98, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 98, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 97, 98, 32, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 88, 97, 32, 61, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 98, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 78, 97, 32, 61, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 98, 46, 74, 97, 32, 63, 32, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 107, 98, 32, 58, 32, 40, 116, 104, 105, 115, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 32, 61, 32, 100, 32, 63, 32, 105, 98, 32, 58, 32, 109, 98, 44, 32, 116, 104, 105, 115, 46, 77, 97, 32, 61, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 111, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 107, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 40, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 79, 97, 40, 34, 82, 101, 112, 108, 97, 99, 105, 110, 103, 32, 110, 111, 110, 101, 120, 105, 115, 116, 101, 110, 116, 32, 112, 117, 98, 108, 105, 99, 32, 115, 121, 109, 98, 111, 108, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 107, 91, 97, 93, 46, 72, 97, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 99, 32, 63, 32, 107, 91, 97, 93, 46, 72, 97, 91, 99, 93, 32, 61, 32, 98, 32, 58, 32, 40, 107, 91, 97, 93, 32, 61, 32, 98, 44, 32, 107, 91, 97, 93, 46, 81, 97, 32, 61, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 83, 44, 32, 112, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 32, 61, 32, 91, 93, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 40, 97, 32, 61, 32, 97, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 112, 47, 103, 44, 32, 34, 105, 34, 41, 44, 32, 98, 32, 61, 32, 40, 48, 44, 32, 107, 91, 34, 100, 121, 110, 67, 97, 108, 108, 95, 34, 32, 43, 32, 97, 93, 41, 40, 98, 44, 32, 46, 46, 46, 99, 41, 41, 32, 58, 32, 98, 32, 61, 32, 83, 46, 103, 101, 116, 40, 98, 41, 40, 46, 46, 46, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 113, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 46, 46, 46, 99, 41, 32, 61, 62, 32, 112, 98, 40, 97, 44, 32, 98, 44, 32, 99, 41, 44, 32, 84, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 106, 34, 41, 32, 63, 32, 113, 98, 40, 97, 44, 32, 98, 41, 32, 58, 32, 83, 46, 103, 101, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 111, 105, 110, 116, 101, 114, 32, 119, 105, 116, 104, 32, 115, 105, 103, 110, 97, 116, 117, 114, 101, 32, 36, 123, 97, 125, 58, 32, 36, 123, 98, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 114, 98, 44, 32, 116, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 115, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 117, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 91, 102, 93, 32, 124, 124, 32, 78, 91, 102, 93, 32, 124, 124, 32, 40, 78, 97, 91, 102, 93, 32, 63, 32, 78, 97, 91, 102, 93, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 32, 58, 32, 40, 100, 46, 112, 117, 115, 104, 40, 102, 41, 44, 32, 101, 91, 102, 93, 32, 61, 32, 116, 114, 117, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 91, 93, 44, 32, 101, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 102, 111, 114, 69, 97, 99, 104, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 114, 98, 40, 96, 36, 123, 97, 125, 58, 32, 96, 32, 43, 32, 100, 46, 109, 97, 112, 40, 116, 98, 41, 46, 106, 111, 105, 110, 40, 91, 34, 44, 32, 34, 93, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 118, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 100, 43, 43, 41, 32, 99, 46, 112, 117, 115, 104, 40, 66, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 119, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 49, 59, 32, 98, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 98, 41, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 97, 91, 98, 93, 32, 38, 38, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 97, 91, 98, 93, 46, 77, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 120, 98, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 102, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 97, 114, 103, 84, 121, 112, 101, 115, 32, 97, 114, 114, 97, 121, 32, 115, 105, 122, 101, 32, 109, 105, 115, 109, 97, 116, 99, 104, 33, 32, 77, 117, 115, 116, 32, 97, 116, 32, 108, 101, 97, 115, 116, 32, 103, 101, 116, 32, 114, 101, 116, 117, 114, 110, 32, 118, 97, 108, 117, 101, 32, 97, 110, 100, 32, 39, 116, 104, 105, 115, 39, 32, 116, 121, 112, 101, 115, 33, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 49, 93, 32, 38, 38, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 99, 44, 32, 103, 32, 61, 32, 119, 98, 40, 98, 41, 44, 32, 108, 32, 61, 32, 34, 118, 111, 105, 100, 34, 32, 33, 61, 61, 32, 98, 91, 48, 93, 46, 110, 97, 109, 101, 44, 32, 109, 32, 61, 32, 102, 32, 45, 32, 50, 44, 32, 110, 32, 61, 32, 65, 114, 114, 97, 121, 40, 109, 41, 44, 32, 112, 32, 61, 32, 91, 93, 44, 32, 114, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 98, 40, 97, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 69, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 104, 32, 63, 32, 50, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 91, 48, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 32, 61, 32, 98, 91, 49, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 91, 49, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 119, 32, 61, 32, 48, 59, 32, 119, 32, 60, 32, 109, 59, 32, 43, 43, 119, 41, 32, 110, 91, 119, 93, 32, 61, 32, 98, 91, 119, 32, 43, 32, 50, 93, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 114, 44, 32, 69, 91, 119, 93, 41, 44, 32, 112, 46, 112, 117, 115, 104, 40, 110, 91, 119, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 32, 61, 32, 100, 40, 46, 46, 46, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 41, 32, 77, 97, 40, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 119, 32, 61, 32, 104, 32, 63, 32, 49, 32, 58, 32, 50, 59, 32, 119, 32, 60, 32, 98, 46, 108, 101, 110, 103, 116, 104, 59, 32, 119, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 72, 32, 61, 32, 49, 32, 61, 61, 61, 32, 119, 32, 63, 32, 118, 32, 58, 32, 110, 91, 119, 32, 45, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 98, 91, 119, 93, 46, 77, 97, 32, 38, 38, 32, 98, 91, 119, 93, 46, 77, 97, 40, 72, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 108, 32, 63, 32, 98, 91, 48, 93, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 69, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 121, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 116, 114, 105, 109, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 97, 46, 105, 110, 100, 101, 120, 79, 102, 40, 34, 40, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 45, 49, 32, 33, 61, 61, 32, 98, 32, 63, 32, 97, 46, 115, 117, 98, 115, 116, 114, 40, 48, 44, 32, 98, 41, 32, 58, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 65, 98, 32, 61, 32, 91, 93, 44, 32, 86, 32, 61, 32, 91, 93, 44, 32, 66, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 48, 32, 61, 61, 61, 32, 45, 45, 86, 91, 97, 32, 43, 32, 49, 93, 32, 38, 38, 32, 40, 86, 91, 97, 93, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 65, 98, 46, 112, 117, 115, 104, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 67, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 67, 97, 110, 110, 111, 116, 32, 117, 115, 101, 32, 100, 101, 108, 101, 116, 101, 100, 32, 118, 97, 108, 46, 32, 104, 97, 110, 100, 108, 101, 32, 61, 32, 34, 32, 43, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 86, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 108, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 118, 111, 105, 100, 32, 48, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 110, 117, 108, 108, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 116, 114, 117, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 54, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 102, 97, 108, 115, 101, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 32, 61, 32, 65, 98, 46, 112, 111, 112, 40, 41, 32, 124, 124, 32, 86, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 93, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 91, 98, 32, 43, 32, 49, 93, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 68, 98, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 34, 101, 109, 115, 99, 114, 105, 112, 116, 101, 110, 58, 58, 118, 97, 108, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 67, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 108, 98, 40, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 69, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 117, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 121, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 122, 91, 100, 32, 62, 62, 32, 49, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 65, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 66, 91, 100, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 70, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 78, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 99, 41, 32, 116, 104, 114, 111, 119, 32, 97, 32, 61, 32, 96, 36, 123, 98, 125, 32, 104, 97, 115, 32, 117, 110, 107, 110, 111, 119, 110, 32, 116, 121, 112, 101, 32, 36, 123, 116, 98, 40, 97, 41, 125, 96, 44, 32, 110, 101, 119, 32, 82, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 106, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 110, 117, 108, 108, 32, 61, 61, 61, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 117, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 121, 112, 101, 111, 102, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 97, 114, 114, 97, 121, 34, 32, 61, 61, 61, 32, 98, 32, 124, 124, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 61, 32, 98, 32, 63, 32, 97, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 58, 32, 34, 34, 32, 43, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 71, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 111, 97, 91, 99, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 56, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 112, 97, 91, 99, 32, 62, 62, 32, 51, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 102, 108, 111, 97, 116, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 72, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 49, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 117, 91, 100, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 120, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 50, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 121, 91, 100, 32, 62, 62, 32, 49, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 122, 91, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 52, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 32, 63, 32, 40, 100, 41, 32, 61, 62, 32, 65, 91, 100, 32, 62, 62, 32, 50, 93, 32, 58, 32, 40, 100, 41, 32, 61, 62, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 105, 110, 118, 97, 108, 105, 100, 32, 105, 110, 116, 101, 103, 101, 114, 32, 119, 105, 100, 116, 104, 32, 40, 36, 123, 98, 125, 41, 58, 32, 36, 123, 97, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 73, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 123, 32, 111, 112, 116, 105, 111, 110, 97, 108, 58, 32, 116, 114, 117, 101, 32, 125, 44, 32, 68, 98, 41, 44, 32, 74, 98, 32, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 32, 63, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 34, 117, 116, 102, 45, 49, 54, 108, 101, 34, 41, 32, 58, 32, 118, 111, 105, 100, 32, 48, 44, 32, 75, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 32, 62, 62, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 100, 32, 61, 32, 99, 32, 43, 32, 98, 32, 47, 32, 50, 59, 32, 33, 40, 99, 32, 62, 61, 32, 100, 41, 32, 38, 38, 32, 122, 91, 99, 93, 59, 32, 41, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 60, 60, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 51, 50, 32, 60, 32, 99, 32, 45, 32, 97, 32, 38, 38, 32, 74, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 74, 98, 46, 100, 101, 99, 111, 100, 101, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 99, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 100, 32, 61, 32, 48, 59, 32, 33, 40, 100, 32, 62, 61, 32, 98, 32, 47, 32, 50, 41, 59, 32, 43, 43, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 121, 91, 97, 32, 43, 32, 50, 32, 42, 32, 100, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 76, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 45, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 99, 32, 60, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 32, 63, 32, 99, 32, 47, 32, 50, 32, 58, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 99, 59, 32, 43, 43, 101, 41, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 44, 32, 98, 32, 43, 61, 32, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 91, 98, 32, 62, 62, 32, 49, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 77, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 50, 32, 42, 32, 97, 46, 108, 101, 110, 103, 116, 104, 44, 32, 78, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 48, 44, 32, 100, 32, 61, 32, 34, 34, 59, 32, 33, 40, 99, 32, 62, 61, 32, 98, 32, 47, 32, 52, 41, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 65, 91, 97, 32, 43, 32, 52, 32, 42, 32, 99, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 32, 101, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 54, 53, 53, 51, 54, 32, 60, 61, 32, 101, 32, 63, 32, 40, 101, 32, 45, 61, 32, 54, 53, 53, 51, 54, 44, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 53, 53, 50, 57, 54, 32, 124, 32, 101, 32, 62, 62, 32, 49, 48, 44, 32, 53, 54, 51, 50, 48, 32, 124, 32, 101, 32, 38, 32, 49, 48, 50, 51, 41, 41, 32, 58, 32, 100, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 79, 98, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 99, 32, 58, 32, 99, 32, 61, 32, 50, 49, 52, 55, 52, 56, 51, 54, 52, 55, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 52, 32, 62, 32, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 100, 32, 43, 32, 99, 32, 45, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 59, 32, 101, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 53, 53, 50, 57, 54, 32, 60, 61, 32, 102, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 43, 43, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 54, 53, 53, 51, 54, 32, 43, 32, 40, 40, 102, 32, 38, 32, 49, 48, 50, 51, 41, 32, 60, 60, 32, 49, 48, 41, 32, 124, 32, 104, 32, 38, 32, 49, 48, 50, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 32, 43, 32, 52, 32, 62, 32, 99, 41, 32, 98, 114, 101, 97, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 45, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 80, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 98, 32, 61, 32, 48, 44, 32, 99, 32, 61, 32, 48, 59, 32, 99, 32, 60, 32, 97, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 100, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 100, 32, 38, 38, 32, 43, 43, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 81, 98, 32, 61, 32, 48, 44, 32, 82, 98, 32, 61, 32, 91, 93, 44, 32, 83, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 82, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 98, 46, 112, 117, 115, 104, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 84, 98, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 44, 32, 100, 32, 61, 32, 48, 59, 32, 100, 32, 60, 32, 97, 59, 32, 43, 43, 100, 41, 32, 99, 91, 100, 93, 32, 61, 32, 70, 98, 40, 66, 91, 98, 32, 43, 32, 52, 32, 42, 32, 100, 32, 62, 62, 32, 50, 93, 44, 32, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 34, 32, 43, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 85, 98, 32, 61, 32, 82, 101, 102, 108, 101, 99, 116, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 44, 32, 86, 98, 32, 61, 32, 123, 125, 44, 32, 87, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 68, 97, 32, 124, 124, 32, 34, 117, 110, 119, 105, 110, 100, 34, 32, 61, 61, 32, 97, 41, 41, 32, 116, 104, 114, 111, 119, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 88, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 97, 32, 124, 124, 32, 48, 32, 60, 32, 81, 98, 32, 124, 124, 32, 40, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 69, 120, 105, 116, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 97, 41, 44, 32, 109, 97, 32, 61, 32, 116, 114, 117, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 68, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 89, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 109, 97, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 97, 40, 41, 44, 32, 33, 40, 70, 97, 32, 124, 124, 32, 48, 32, 60, 32, 81, 98, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 32, 61, 32, 97, 32, 61, 32, 110, 97, 44, 32, 88, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 90, 98, 32, 61, 32, 123, 125, 44, 32, 97, 99, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 36, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 83, 69, 82, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 79, 71, 78, 65, 77, 69, 58, 32, 34, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 65, 84, 72, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 87, 68, 58, 32, 34, 47, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 79, 77, 69, 58, 32, 34, 47, 104, 111, 109, 101, 47, 119, 101, 98, 95, 117, 115, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 65, 78, 71, 58, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 32, 38, 38, 32, 110, 97, 118, 105, 103, 97, 116, 111, 114, 46, 108, 97, 110, 103, 117, 97, 103, 101, 115, 91, 48, 93, 32, 124, 124, 32, 34, 67, 34, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 45, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 95, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 32, 43, 32, 34, 46, 85, 84, 70, 45, 56, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 101, 97, 32, 124, 124, 32, 34, 46, 47, 116, 104, 105, 115, 46, 112, 114, 111, 103, 114, 97, 109, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 90, 98, 41, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 90, 98, 91, 98, 93, 32, 63, 32, 100, 101, 108, 101, 116, 101, 32, 97, 91, 98, 93, 32, 58, 32, 97, 91, 98, 93, 32, 61, 32, 90, 98, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 98, 32, 105, 110, 32, 97, 41, 32, 99, 46, 112, 117, 115, 104, 40, 96, 36, 123, 98, 125, 61, 36, 123, 97, 91, 98, 93, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 36, 98, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 36, 98, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 36, 98, 44, 32, 98, 99, 32, 61, 32, 91, 110, 117, 108, 108, 44, 32, 91, 93, 44, 32, 91, 93, 93, 44, 32, 99, 99, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 111, 98, 106, 101, 99, 116, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 32, 38, 38, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 97, 41, 32, 61, 62, 32, 99, 114, 121, 112, 116, 111, 46, 103, 101, 116, 82, 97, 110, 100, 111, 109, 86, 97, 108, 117, 101, 115, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 97, 40, 34, 105, 110, 105, 116, 82, 97, 110, 100, 111, 109, 68, 101, 118, 105, 99, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 100, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 100, 99, 32, 61, 32, 99, 99, 40, 41, 41, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 97, 32, 61, 32, 107, 46, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 73, 110, 116, 101, 114, 110, 97, 108, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 99, 32, 61, 32, 65, 114, 114, 97, 121, 40, 50, 53, 54, 41, 44, 32, 102, 99, 32, 61, 32, 48, 59, 32, 50, 53, 54, 32, 62, 32, 102, 99, 59, 32, 43, 43, 102, 99, 41, 32, 101, 99, 91, 102, 99, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 102, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 80, 97, 32, 61, 32, 101, 99, 59, 10, 32, 32, 32, 32, 32, 32, 82, 32, 61, 32, 107, 46, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 112, 101, 114, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 34, 66, 105, 110, 100, 105, 110, 103, 69, 114, 114, 111, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 98, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 65, 108, 105, 97, 115, 79, 102, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 116, 104, 105, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 98, 98, 32, 38, 38, 32, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 98, 98, 41, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 46, 71, 97, 46, 70, 97, 44, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 32, 61, 32, 97, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 97, 46, 68, 97, 46, 71, 97, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 97, 32, 61, 32, 97, 46, 68, 97, 46, 69, 97, 59, 32, 98, 46, 74, 97, 59, 32, 41, 32, 99, 32, 61, 32, 98, 46, 84, 97, 40, 99, 41, 44, 32, 98, 32, 61, 32, 98, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 59, 32, 100, 46, 74, 97, 59, 32, 41, 32, 97, 32, 61, 32, 100, 46, 84, 97, 40, 97, 41, 44, 32, 100, 32, 61, 32, 100, 46, 74, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 98, 32, 61, 61, 61, 32, 100, 32, 38, 38, 32, 99, 32, 61, 61, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 111, 110, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 44, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 90, 97, 44, 32, 98, 32, 61, 32, 79, 98, 106, 101, 99, 116, 44, 32, 99, 32, 61, 32, 98, 46, 99, 114, 101, 97, 116, 101, 44, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 44, 32, 101, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 99, 97, 108, 108, 40, 98, 44, 32, 100, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 68, 97, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 99, 111, 117, 110, 116, 58, 32, 101, 46, 99, 111, 117, 110, 116, 44, 32, 82, 97, 58, 32, 101, 46, 82, 97, 44, 32, 83, 97, 58, 32, 101, 46, 83, 97, 44, 32, 69, 97, 58, 32, 101, 46, 69, 97, 44, 32, 71, 97, 58, 32, 101, 46, 71, 97, 44, 32, 73, 97, 58, 32, 101, 46, 73, 97, 44, 32, 75, 97, 58, 32, 101, 46, 75, 97, 32, 125, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 43, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 68, 97, 46, 82, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 91, 34, 100, 101, 108, 101, 116, 101, 34, 93, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 97, 32, 61, 32, 116, 104, 105, 115, 46, 68, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 45, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 32, 38, 38, 32, 40, 97, 46, 73, 97, 32, 63, 32, 97, 46, 75, 97, 46, 78, 97, 40, 97, 46, 73, 97, 41, 32, 58, 32, 97, 46, 71, 97, 46, 70, 97, 46, 78, 97, 40, 97, 46, 69, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 32, 124, 124, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 73, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 44, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 61, 32, 118, 111, 105, 100, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 68, 101, 108, 101, 116, 101, 100, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 76, 97, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 69, 97, 32, 124, 124, 32, 83, 97, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 38, 38, 32, 33, 116, 104, 105, 115, 46, 68, 97, 46, 83, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 79, 98, 106, 101, 99, 116, 32, 97, 108, 114, 101, 97, 100, 121, 32, 115, 99, 104, 101, 100, 117, 108, 101, 100, 32, 102, 111, 114, 32, 100, 101, 108, 101, 116, 105, 111, 110, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 98, 46, 112, 117, 115, 104, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 68, 97, 46, 82, 97, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 79, 98, 106, 101, 99, 116, 46, 97, 115, 115, 105, 103, 110, 40, 110, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 98, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 97, 98, 32, 38, 38, 32, 40, 97, 32, 61, 32, 116, 104, 105, 115, 46, 97, 98, 40, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 97, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 116, 104, 105, 115, 46, 78, 97, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 98, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 86, 97, 32, 63, 32, 36, 97, 40, 116, 104, 105, 115, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 116, 104, 105, 115, 46, 108, 98, 44, 32, 69, 97, 58, 32, 99, 44, 32, 75, 97, 58, 32, 116, 104, 105, 115, 44, 32, 73, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 36, 97, 40, 116, 104, 105, 115, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 116, 104, 105, 115, 44, 32, 69, 97, 58, 32, 97, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 116, 104, 105, 115, 46, 103, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 99, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 90, 97, 40, 97, 41, 44, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 89, 97, 40, 116, 104, 105, 115, 46, 70, 97, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 46, 68, 97, 46, 99, 111, 117, 110, 116, 46, 118, 97, 108, 117, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 100, 46, 68, 97, 46, 69, 97, 32, 61, 32, 99, 44, 32, 100, 46, 68, 97, 46, 73, 97, 32, 61, 32, 97, 44, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 100, 46, 99, 108, 111, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 90, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 70, 97, 46, 102, 98, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 87, 97, 91, 100, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 100, 41, 32, 114, 101, 116, 117, 114, 110, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 116, 104, 105, 115, 46, 85, 97, 32, 63, 32, 100, 46, 98, 98, 32, 58, 32, 100, 46, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 86, 97, 40, 99, 44, 32, 116, 104, 105, 115, 46, 70, 97, 44, 32, 100, 46, 70, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 32, 61, 61, 61, 32, 101, 32, 63, 32, 98, 46, 99, 97, 108, 108, 40, 116, 104, 105, 115, 41, 32, 58, 32, 116, 104, 105, 115, 46, 86, 97, 32, 63, 32, 36, 97, 40, 100, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 100, 44, 32, 69, 97, 58, 32, 101, 44, 32, 75, 97, 58, 32, 116, 104, 105, 115, 44, 32, 73, 97, 58, 32, 97, 32, 125, 41, 32, 58, 32, 36, 97, 40, 100, 46, 70, 97, 46, 80, 97, 44, 32, 123, 32, 71, 97, 58, 32, 100, 44, 32, 69, 97, 58, 32, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 98, 32, 61, 32, 107, 46, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 32, 61, 32, 40, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 99, 98, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 69, 114, 114, 111, 114, 40, 100, 41, 46, 115, 116, 97, 99, 107, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 40, 116, 104, 105, 115, 46, 115, 116, 97, 99, 107, 32, 61, 32, 116, 104, 105, 115, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 43, 32, 34, 92, 110, 34, 32, 43, 32, 100, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 94, 69, 114, 114, 111, 114, 40, 58, 91, 94, 92, 110, 93, 42, 41, 63, 92, 110, 47, 44, 32, 34, 34, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 97, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 32, 63, 32, 116, 104, 105, 115, 46, 110, 97, 109, 101, 32, 58, 32, 96, 36, 123, 116, 104, 105, 115, 46, 110, 97, 109, 101, 125, 58, 32, 36, 123, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 40, 69, 114, 114, 111, 114, 44, 32, 34, 85, 110, 98, 111, 117, 110, 100, 84, 121, 112, 101, 69, 114, 114, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 86, 46, 112, 117, 115, 104, 40, 48, 44, 32, 49, 44, 32, 118, 111, 105, 100, 32, 48, 44, 32, 49, 44, 32, 110, 117, 108, 108, 44, 32, 49, 44, 32, 116, 114, 117, 101, 44, 32, 49, 44, 32, 102, 97, 108, 115, 101, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 99, 111, 117, 110, 116, 95, 101, 109, 118, 97, 108, 95, 104, 97, 110, 100, 108, 101, 115, 32, 61, 32, 40, 41, 32, 61, 62, 32, 86, 46, 108, 101, 110, 103, 116, 104, 32, 47, 32, 50, 32, 45, 32, 53, 32, 45, 32, 65, 98, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 118, 99, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 119, 97, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 97, 32, 63, 32, 71, 40, 120, 44, 32, 97, 41, 32, 58, 32, 34, 34, 125, 44, 32, 97, 116, 58, 32, 96, 32, 43, 32, 91, 98, 32, 63, 32, 98, 32, 63, 32, 71, 40, 120, 44, 32, 98, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 105, 108, 101, 110, 97, 109, 101, 34, 44, 32, 99, 44, 32, 100, 32, 63, 32, 100, 32, 63, 32, 71, 40, 120, 44, 32, 100, 41, 32, 58, 32, 34, 34, 32, 58, 32, 34, 117, 110, 107, 110, 111, 119, 110, 32, 102, 117, 110, 99, 116, 105, 111, 110, 34, 93, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 58, 32, 40, 41, 32, 61, 62, 32, 74, 97, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 110, 101, 119, 32, 72, 97, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 49, 54, 32, 62, 62, 32, 50, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 32, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 46, 69, 97, 32, 43, 32, 56, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 32, 61, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 75, 97, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 73, 32, 124, 124, 32, 40, 73, 32, 61, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 82, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 80, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 85, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 81, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 87, 58, 32, 40, 41, 32, 61, 62, 32, 119, 97, 40, 34, 34, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 122, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 76, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 76, 97, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 98, 46, 88, 97, 44, 32, 100, 32, 61, 32, 98, 46, 78, 97, 44, 32, 101, 32, 61, 32, 98, 46, 36, 97, 44, 32, 102, 32, 61, 32, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 106, 98, 41, 46, 99, 111, 110, 99, 97, 116, 40, 101, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 112, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 93, 44, 32, 102, 44, 32, 40, 104, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 104, 91, 109, 93, 44, 32, 112, 32, 61, 32, 108, 46, 104, 98, 44, 32, 114, 32, 61, 32, 108, 46, 105, 98, 44, 32, 69, 32, 61, 32, 104, 91, 109, 32, 43, 32, 101, 46, 108, 101, 110, 103, 116, 104, 93, 44, 32, 118, 32, 61, 32, 108, 46, 111, 98, 44, 32, 119, 32, 61, 32, 108, 46, 113, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 91, 108, 46, 101, 98, 93, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 58, 32, 40, 72, 41, 32, 61, 62, 32, 110, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 112, 40, 114, 44, 32, 72, 41, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 114, 105, 116, 101, 58, 32, 40, 72, 44, 32, 102, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 40, 119, 44, 32, 72, 44, 32, 69, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 70, 44, 32, 102, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 123, 125, 44, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32, 109, 91, 110, 93, 32, 61, 32, 103, 91, 110, 93, 46, 114, 101, 97, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 105, 110, 32, 103, 41, 32, 105, 102, 32, 40, 33, 40, 110, 32, 105, 110, 32, 109, 41, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 84, 121, 112, 101, 69, 114, 114, 111, 114, 40, 96, 77, 105, 115, 115, 105, 110, 103, 32, 102, 105, 101, 108, 100, 58, 32, 34, 36, 123, 110, 125, 34, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 112, 32, 61, 32, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 110, 32, 105, 110, 32, 103, 41, 32, 103, 91, 110, 93, 46, 119, 114, 105, 116, 101, 40, 112, 44, 32, 109, 91, 110, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 108, 32, 38, 38, 32, 108, 46, 112, 117, 115, 104, 40, 100, 44, 32, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 72, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 33, 33, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 32, 63, 32, 99, 32, 58, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 40, 120, 91, 101, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 112, 44, 32, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 81, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 40, 103, 32, 61, 32, 84, 40, 104, 44, 32, 103, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 38, 38, 32, 40, 109, 32, 61, 32, 84, 40, 108, 44, 32, 109, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 84, 40, 112, 44, 32, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 69, 32, 61, 32, 102, 98, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 69, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 110, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 91, 100, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 44, 32, 98, 44, 32, 99, 93, 44, 32, 100, 32, 63, 32, 91, 100, 93, 32, 58, 32, 91, 93, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 118, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 32, 61, 32, 118, 46, 70, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 72, 32, 61, 32, 119, 46, 80, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 72, 32, 61, 32, 98, 98, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 99, 98, 40, 110, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 46, 46, 46, 81, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 103, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 41, 32, 33, 61, 61, 32, 102, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 85, 115, 101, 32, 39, 110, 101, 119, 39, 32, 116, 111, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 34, 32, 43, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 70, 46, 79, 97, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 110, 32, 43, 32, 34, 32, 104, 97, 115, 32, 110, 111, 32, 97, 99, 99, 101, 115, 115, 105, 98, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 122, 98, 32, 61, 32, 70, 46, 79, 97, 91, 81, 97, 46, 108, 101, 110, 103, 116, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 122, 98, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 84, 114, 105, 101, 100, 32, 116, 111, 32, 105, 110, 118, 111, 107, 101, 32, 99, 116, 111, 114, 32, 111, 102, 32, 36, 123, 110, 125, 32, 119, 105, 116, 104, 32, 105, 110, 118, 97, 108, 105, 100, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 81, 97, 46, 108, 101, 110, 103, 116, 104, 125, 41, 32, 45, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 40, 36, 123, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 70, 46, 79, 97, 41, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 125, 41, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 105, 110, 115, 116, 101, 97, 100, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 122, 98, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 44, 32, 81, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 97, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 72, 44, 32, 123, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 118, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 32, 61, 32, 102, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 70, 32, 61, 32, 110, 101, 119, 32, 103, 98, 40, 110, 44, 32, 118, 44, 32, 102, 97, 44, 32, 114, 44, 32, 119, 44, 32, 102, 44, 32, 103, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 70, 46, 74, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 40, 104, 97, 32, 61, 32, 70, 46, 74, 97, 41, 46, 89, 97, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 104, 97, 46, 89, 97, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 46, 74, 97, 46, 89, 97, 46, 112, 117, 115, 104, 40, 70, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 44, 32, 70, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 32, 43, 32, 34, 42, 34, 44, 32, 70, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 72, 32, 61, 32, 110, 101, 119, 32, 110, 98, 40, 110, 32, 43, 32, 34, 32, 99, 111, 110, 115, 116, 42, 34, 44, 32, 70, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 97, 91, 97, 93, 32, 61, 32, 123, 32, 112, 111, 105, 110, 116, 101, 114, 84, 121, 112, 101, 58, 32, 104, 97, 44, 32, 98, 98, 58, 32, 72, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 111, 98, 40, 69, 44, 32, 118, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 119, 44, 32, 104, 97, 44, 32, 72, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 118, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 96, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 103, 46, 70, 97, 46, 79, 97, 32, 38, 38, 32, 40, 103, 46, 70, 97, 46, 79, 97, 32, 61, 32, 91, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 33, 61, 61, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 67, 97, 110, 110, 111, 116, 32, 114, 101, 103, 105, 115, 116, 101, 114, 32, 109, 117, 108, 116, 105, 112, 108, 101, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 115, 32, 119, 105, 116, 104, 32, 105, 100, 101, 110, 116, 105, 99, 97, 108, 32, 110, 117, 109, 98, 101, 114, 32, 111, 102, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 115, 32, 40, 36, 123, 98, 32, 45, 32, 49, 125, 41, 32, 102, 111, 114, 32, 99, 108, 97, 115, 115, 32, 39, 36, 123, 103, 46, 110, 97, 109, 101, 125, 39, 33, 32, 79, 118, 101, 114, 108, 111, 97, 100, 32, 114, 101, 115, 111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 32, 99, 117, 114, 114, 101, 110, 116, 108, 121, 32, 111, 110, 108, 121, 32, 112, 101, 114, 102, 111, 114, 109, 101, 100, 32, 117, 115, 105, 110, 103, 32, 116, 104, 101, 32, 112, 97, 114, 97, 109, 101, 116, 101, 114, 32, 99, 111, 117, 110, 116, 44, 32, 110, 111, 116, 32, 97, 99, 116, 117, 97, 108, 32, 116, 121, 112, 101, 32, 105, 110, 102, 111, 33, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 32, 36, 123, 103, 46, 110, 97, 109, 101, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 104, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 46, 115, 112, 108, 105, 99, 101, 40, 49, 44, 32, 48, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 46, 70, 97, 46, 79, 97, 91, 98, 32, 45, 32, 49, 93, 32, 61, 32, 120, 98, 40, 108, 44, 32, 109, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 118, 98, 40, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 121, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 91, 97, 93, 44, 32, 40, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 112, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 109, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 112, 32, 61, 32, 96, 36, 123, 109, 46, 110, 97, 109, 101, 125, 46, 36, 123, 98, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 64, 64, 34, 41, 32, 38, 38, 32, 40, 98, 32, 61, 32, 83, 121, 109, 98, 111, 108, 91, 98, 46, 115, 117, 98, 115, 116, 114, 105, 110, 103, 40, 50, 41, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 38, 38, 32, 109, 46, 70, 97, 46, 109, 98, 46, 112, 117, 115, 104, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 109, 46, 70, 97, 46, 80, 97, 44, 32, 69, 32, 61, 32, 114, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 69, 32, 124, 124, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 69, 46, 72, 97, 32, 38, 38, 32, 69, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 33, 61, 61, 32, 109, 46, 110, 97, 109, 101, 32, 38, 38, 32, 69, 46, 81, 97, 32, 61, 61, 61, 32, 99, 32, 45, 32, 50, 32, 63, 32, 40, 110, 46, 81, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 110, 46, 99, 108, 97, 115, 115, 78, 97, 109, 101, 32, 61, 32, 109, 46, 110, 97, 109, 101, 44, 32, 114, 91, 98, 93, 32, 61, 32, 110, 41, 32, 58, 32, 40, 100, 98, 40, 114, 44, 32, 98, 44, 32, 112, 41, 44, 32, 114, 91, 98, 93, 46, 72, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 108, 44, 32, 40, 118, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 32, 61, 32, 120, 98, 40, 112, 44, 32, 118, 44, 32, 109, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 114, 91, 98, 93, 46, 72, 97, 32, 63, 32, 40, 118, 46, 81, 97, 32, 61, 32, 99, 32, 45, 32, 50, 44, 32, 114, 91, 98, 93, 32, 61, 32, 118, 41, 32, 58, 32, 114, 91, 98, 93, 46, 72, 97, 91, 99, 32, 45, 32, 50, 93, 32, 61, 32, 118, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 36, 58, 32, 40, 97, 41, 32, 61, 62, 32, 79, 40, 97, 44, 32, 68, 98, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 66, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 46, 118, 97, 108, 117, 101, 115, 32, 61, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 118, 97, 108, 117, 101, 115, 91, 102, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 102, 44, 32, 104, 41, 32, 61, 62, 32, 104, 46, 118, 97, 108, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 69, 98, 40, 98, 44, 32, 99, 44, 32, 100, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 98, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 110, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 70, 98, 40, 97, 44, 32, 34, 101, 110, 117, 109, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 79, 98, 106, 101, 99, 116, 46, 99, 114, 101, 97, 116, 101, 40, 100, 46, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 108, 117, 101, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 58, 32, 123, 32, 118, 97, 108, 117, 101, 58, 32, 99, 98, 40, 96, 36, 123, 100, 46, 110, 97, 109, 101, 125, 95, 36, 123, 98, 125, 96, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 46, 118, 97, 108, 117, 101, 115, 91, 99, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 91, 98, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 68, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 41, 32, 61, 62, 32, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 71, 98, 40, 98, 44, 32, 99, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 58, 32, 110, 117, 108, 108, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 118, 98, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 81, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 121, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 84, 40, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 98, 40, 96, 67, 97, 110, 110, 111, 116, 32, 99, 97, 108, 108, 32, 36, 123, 97, 125, 32, 100, 117, 101, 32, 116, 111, 32, 117, 110, 98, 111, 117, 110, 100, 32, 116, 121, 112, 101, 115, 96, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 45, 32, 49, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 93, 44, 32, 104, 44, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 111, 98, 40, 97, 44, 32, 120, 98, 40, 97, 44, 32, 91, 103, 91, 48, 93, 44, 32, 110, 117, 108, 108, 93, 46, 99, 111, 110, 99, 97, 116, 40, 103, 46, 115, 108, 105, 99, 101, 40, 49, 41, 41, 44, 32, 110, 117, 108, 108, 44, 32, 101, 44, 32, 102, 41, 44, 32, 98, 32, 45, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 111, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 49, 32, 61, 61, 61, 32, 101, 32, 38, 38, 32, 40, 101, 32, 61, 32, 52, 50, 57, 52, 57, 54, 55, 50, 57, 53, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 48, 32, 61, 61, 61, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 51, 50, 32, 45, 32, 56, 32, 42, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 103, 32, 60, 60, 32, 102, 32, 62, 62, 62, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 98, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 117, 110, 115, 105, 103, 110, 101, 100, 34, 41, 32, 63, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 32, 62, 62, 62, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 103, 44, 32, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 101, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 104, 44, 32, 76, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 72, 98, 40, 98, 44, 32, 99, 44, 32, 48, 32, 33, 61, 61, 32, 100, 41, 44, 32, 77, 97, 58, 32, 110, 117, 108, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 107, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 101, 40, 117, 46, 98, 117, 102, 102, 101, 114, 44, 32, 66, 91, 102, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 44, 32, 66, 91, 102, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 91, 73, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 49, 54, 65, 114, 114, 97, 121, 44, 32, 73, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 85, 105, 110, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 51, 50, 65, 114, 114, 97, 121, 44, 32, 70, 108, 111, 97, 116, 54, 52, 65, 114, 114, 97, 121, 93, 91, 98, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 110, 97, 109, 101, 58, 32, 99, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 100, 44, 32, 76, 97, 58, 32, 56, 44, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 100, 32, 125, 44, 32, 123, 32, 107, 98, 58, 32, 116, 114, 117, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 73, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 103, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 44, 32, 110, 44, 32, 112, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 32, 61, 32, 84, 40, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 84, 40, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 84, 40, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 112, 32, 61, 32, 84, 40, 110, 44, 32, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 80, 40, 91, 97, 93, 44, 32, 91, 98, 93, 44, 32, 40, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 32, 61, 32, 114, 91, 48, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 110, 101, 119, 32, 110, 98, 40, 99, 44, 32, 114, 46, 70, 97, 44, 32, 102, 97, 108, 115, 101, 44, 32, 102, 97, 108, 115, 101, 44, 32, 116, 114, 117, 101, 44, 32, 114, 44, 32, 100, 44, 32, 102, 44, 32, 103, 44, 32, 109, 44, 32, 112, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 69, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 34, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 61, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 44, 32, 102, 32, 61, 32, 100, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 104, 32, 61, 32, 102, 44, 32, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 61, 32, 101, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 102, 32, 43, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 61, 61, 32, 101, 32, 124, 124, 32, 48, 32, 61, 61, 32, 120, 91, 108, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 104, 32, 63, 32, 71, 40, 120, 44, 32, 104, 44, 32, 108, 32, 45, 32, 104, 41, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 109, 41, 32, 118, 97, 114, 32, 109, 32, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 109, 32, 43, 61, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 108, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 65, 114, 114, 97, 121, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 103, 32, 61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 59, 32, 43, 43, 103, 41, 32, 109, 91, 103, 93, 32, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 120, 91, 102, 32, 43, 32, 103, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 32, 61, 32, 109, 46, 106, 111, 105, 110, 40, 34, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 38, 38, 32, 40, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 101, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 44, 32, 104, 32, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 104, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 32, 124, 124, 32, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 73, 110, 116, 56, 65, 114, 114, 97, 121, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 34, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 115, 116, 100, 58, 58, 115, 116, 114, 105, 110, 103, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 103, 32, 61, 32, 102, 32, 61, 32, 48, 59, 32, 103, 32, 60, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 49, 50, 55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 43, 43, 32, 58, 32, 50, 48, 52, 55, 32, 62, 61, 32, 108, 32, 63, 32, 102, 32, 43, 61, 32, 50, 32, 58, 32, 53, 53, 50, 57, 54, 32, 60, 61, 32, 108, 32, 38, 38, 32, 53, 55, 51, 52, 51, 32, 62, 61, 32, 108, 32, 63, 32, 40, 102, 32, 43, 61, 32, 52, 44, 32, 43, 43, 103, 41, 32, 58, 32, 102, 32, 43, 61, 32, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 32, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 103, 99, 40, 52, 32, 43, 32, 102, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 32, 61, 32, 103, 32, 43, 32, 52, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 38, 38, 32, 104, 41, 32, 75, 40, 101, 44, 32, 108, 44, 32, 102, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 104, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 101, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 53, 53, 32, 60, 32, 109, 41, 32, 116, 104, 114, 111, 119, 32, 85, 40, 108, 41, 44, 32, 110, 101, 119, 32, 82, 40, 34, 83, 116, 114, 105, 110, 103, 32, 104, 97, 115, 32, 85, 84, 70, 45, 49, 54, 32, 99, 111, 100, 101, 32, 117, 110, 105, 116, 115, 32, 116, 104, 97, 116, 32, 100, 111, 32, 110, 111, 116, 32, 102, 105, 116, 32, 105, 110, 32, 56, 32, 98, 105, 116, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 108, 115, 101, 32, 102, 111, 114, 32, 40, 104, 32, 61, 32, 48, 59, 32, 104, 32, 60, 32, 102, 59, 32, 43, 43, 104, 41, 32, 120, 91, 108, 32, 43, 32, 104, 93, 32, 61, 32, 101, 91, 104, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 100, 32, 38, 38, 32, 100, 46, 112, 117, 115, 104, 40, 85, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 61, 32, 81, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 32, 61, 61, 61, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 75, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 76, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 77, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 122, 91, 103, 32, 62, 62, 32, 49, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 52, 32, 61, 61, 61, 32, 98, 32, 38, 38, 32, 40, 100, 32, 61, 32, 78, 98, 44, 32, 101, 32, 61, 32, 79, 98, 44, 32, 102, 32, 61, 32, 80, 98, 44, 32, 104, 32, 61, 32, 40, 103, 41, 32, 61, 62, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 66, 91, 103, 32, 62, 62, 32, 50, 93, 44, 32, 109, 44, 32, 110, 32, 61, 32, 103, 32, 43, 32, 52, 44, 32, 112, 32, 61, 32, 48, 59, 32, 112, 32, 60, 61, 32, 108, 59, 32, 43, 43, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 114, 32, 61, 32, 103, 32, 43, 32, 52, 32, 43, 32, 112, 32, 42, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 32, 61, 61, 32, 108, 32, 124, 124, 32, 48, 32, 61, 61, 32, 104, 40, 114, 41, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 32, 61, 32, 100, 40, 110, 44, 32, 114, 32, 45, 32, 110, 41, 44, 32, 118, 111, 105, 100, 32, 48, 32, 61, 61, 61, 32, 109, 32, 63, 32, 109, 32, 61, 32, 110, 32, 58, 32, 40, 109, 32, 43, 61, 32, 83, 116, 114, 105, 110, 103, 46, 102, 114, 111, 109, 67, 104, 97, 114, 67, 111, 100, 101, 40, 48, 41, 44, 32, 109, 32, 43, 61, 32, 110, 41, 44, 32, 110, 32, 61, 32, 114, 32, 43, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 103, 44, 32, 108, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 34, 115, 116, 114, 105, 110, 103, 34, 32, 33, 61, 32, 116, 121, 112, 101, 111, 102, 32, 108, 41, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 82, 40, 96, 67, 97, 110, 110, 111, 116, 32, 112, 97, 115, 115, 32, 110, 111, 110, 45, 115, 116, 114, 105, 110, 103, 32, 116, 111, 32, 67, 43, 43, 32, 115, 116, 114, 105, 110, 103, 32, 116, 121, 112, 101, 32, 36, 123, 99, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 102, 40, 108, 41, 44, 32, 110, 32, 61, 32, 103, 99, 40, 52, 32, 43, 32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 110, 32, 62, 62, 32, 50, 93, 32, 61, 32, 109, 32, 47, 32, 98, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 40, 108, 44, 32, 110, 32, 43, 32, 52, 44, 32, 109, 32, 43, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 117, 108, 108, 32, 33, 61, 61, 32, 103, 32, 38, 38, 32, 103, 46, 112, 117, 115, 104, 40, 85, 44, 32, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 58, 32, 56, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 58, 32, 76, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 85, 40, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 65, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 91, 97, 93, 32, 61, 32, 123, 32, 110, 97, 109, 101, 58, 32, 81, 40, 98, 41, 44, 32, 88, 97, 58, 32, 84, 40, 99, 44, 32, 100, 41, 44, 32, 78, 97, 58, 32, 84, 40, 101, 44, 32, 102, 41, 44, 32, 36, 97, 58, 32, 91, 93, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 76, 97, 91, 97, 93, 46, 36, 97, 46, 112, 117, 115, 104, 40, 123, 32, 101, 98, 58, 32, 81, 40, 98, 41, 44, 32, 106, 98, 58, 32, 99, 44, 32, 104, 98, 58, 32, 84, 40, 100, 44, 32, 101, 41, 44, 32, 105, 98, 58, 32, 102, 44, 32, 112, 98, 58, 32, 104, 44, 32, 111, 98, 58, 32, 84, 40, 103, 44, 32, 108, 41, 44, 32, 113, 98, 58, 32, 109, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 81, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 40, 97, 44, 32, 123, 32, 115, 98, 58, 32, 116, 114, 117, 101, 44, 32, 110, 97, 109, 101, 58, 32, 98, 44, 32, 76, 97, 58, 32, 48, 44, 32, 102, 114, 111, 109, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 77, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 70, 97, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 81, 98, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 73, 58, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 73, 110, 102, 105, 110, 105, 116, 121, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 82, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 67, 98, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 97, 40, 110, 117, 108, 108, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 70, 58, 32, 66, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 97, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 84, 98, 40, 97, 44, 32, 98, 41, 44, 32, 101, 32, 61, 32, 100, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 65, 114, 114, 97, 121, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 96, 109, 101, 116, 104, 111, 100, 67, 97, 108, 108, 101, 114, 60, 40, 36, 123, 100, 46, 109, 97, 112, 40, 40, 104, 41, 32, 61, 62, 32, 104, 46, 110, 97, 109, 101, 41, 46, 106, 111, 105, 110, 40, 34, 44, 32, 34, 41, 125, 41, 32, 61, 62, 32, 36, 123, 101, 46, 110, 97, 109, 101, 125, 62, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 98, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 98, 40, 98, 44, 32, 40, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 110, 32, 61, 32, 48, 44, 32, 112, 32, 61, 32, 48, 59, 32, 112, 32, 60, 32, 97, 59, 32, 43, 43, 112, 41, 32, 102, 91, 112, 93, 32, 61, 32, 100, 91, 112, 93, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 109, 32, 43, 32, 110, 41, 44, 32, 110, 32, 43, 61, 32, 100, 91, 112, 93, 46, 76, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 49, 32, 61, 61, 61, 32, 99, 32, 63, 32, 85, 98, 40, 103, 44, 32, 102, 41, 32, 58, 32, 103, 46, 97, 112, 112, 108, 121, 40, 104, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 103, 32, 61, 32, 101, 46, 116, 111, 87, 105, 114, 101, 84, 121, 112, 101, 40, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 104, 46, 108, 101, 110, 103, 116, 104, 32, 38, 38, 32, 40, 66, 91, 108, 32, 62, 62, 32, 50, 93, 32, 61, 32, 108, 98, 40, 104, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 57, 32, 60, 32, 97, 32, 38, 38, 32, 40, 86, 91, 97, 32, 43, 32, 49, 93, 32, 43, 61, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 67, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 77, 97, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 70, 98, 40, 97, 44, 32, 34, 95, 101, 109, 118, 97, 108, 95, 116, 97, 107, 101, 95, 118, 97, 108, 117, 101, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 97, 46, 114, 101, 97, 100, 86, 97, 108, 117, 101, 70, 114, 111, 109, 80, 111, 105, 110, 116, 101, 114, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 98, 40, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 74, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 91, 97, 93, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 86, 98, 91, 97, 93, 46, 105, 100, 41, 44, 32, 100, 101, 108, 101, 116, 101, 32, 86, 98, 91, 97, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 108, 101, 116, 101, 32, 86, 98, 91, 97, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 98, 40, 40, 41, 32, 61, 62, 32, 104, 99, 40, 97, 44, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 86, 98, 91, 97, 93, 32, 61, 32, 123, 32, 105, 100, 58, 32, 99, 44, 32, 116, 98, 58, 32, 98, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 75, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 40, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 41, 41, 46, 103, 101, 116, 70, 117, 108, 108, 89, 101, 97, 114, 40, 41, 44, 32, 102, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 48, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 110, 101, 119, 32, 68, 97, 116, 101, 40, 101, 44, 32, 54, 44, 32, 49, 41, 46, 103, 101, 116, 84, 105, 109, 101, 122, 111, 110, 101, 79, 102, 102, 115, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 54, 48, 32, 42, 32, 77, 97, 116, 104, 46, 109, 97, 120, 40, 102, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 65, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 78, 117, 109, 98, 101, 114, 40, 102, 32, 33, 61, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 40, 104, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 103, 32, 61, 32, 77, 97, 116, 104, 46, 97, 98, 115, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 96, 85, 84, 67, 36, 123, 48, 32, 60, 61, 32, 104, 32, 63, 32, 34, 45, 34, 32, 58, 32, 34, 43, 34, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 103, 32, 47, 32, 54, 48, 41, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 50, 44, 32, 34, 48, 34, 41, 125, 36, 123, 83, 116, 114, 105, 110, 103, 40, 103, 32, 37, 32, 54, 48, 41, 46, 112, 97, 100, 83, 116, 97, 114, 116, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 48, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 125, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 61, 32, 98, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 61, 32, 98, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 60, 32, 102, 32, 63, 32, 40, 75, 40, 97, 44, 32, 99, 44, 32, 49, 55, 41, 44, 32, 75, 40, 98, 44, 32, 100, 44, 32, 49, 55, 41, 41, 32, 58, 32, 40, 75, 40, 97, 44, 32, 100, 44, 32, 49, 55, 41, 44, 32, 75, 40, 98, 44, 32, 99, 44, 32, 49, 55, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 97, 58, 32, 40, 41, 32, 61, 62, 32, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 76, 58, 32, 40, 97, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 120, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 32, 62, 62, 62, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 32, 60, 32, 97, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 99, 32, 61, 32, 49, 59, 32, 52, 32, 62, 61, 32, 99, 59, 32, 99, 32, 42, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 98, 32, 42, 32, 40, 49, 32, 43, 32, 48, 46, 50, 32, 47, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 77, 97, 116, 104, 46, 109, 105, 110, 40, 100, 44, 32, 97, 32, 43, 32, 49, 48, 48, 54, 54, 51, 50, 57, 54, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 32, 61, 32, 40, 77, 97, 116, 104, 46, 109, 105, 110, 40, 50, 49, 52, 55, 52, 56, 51, 54, 52, 56, 44, 32, 54, 53, 53, 51, 54, 32, 42, 32, 77, 97, 116, 104, 46, 99, 101, 105, 108, 40, 77, 97, 116, 104, 46, 109, 97, 120, 40, 97, 44, 32, 100, 41, 32, 47, 32, 54, 53, 53, 51, 54, 41, 41, 32, 45, 32, 108, 97, 46, 98, 117, 102, 102, 101, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 43, 32, 54, 53, 53, 51, 53, 41, 32, 47, 32, 54, 53, 53, 51, 54, 32, 124, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 46, 103, 114, 111, 119, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 114, 101, 97, 107, 32, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 89, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 40, 41, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 100, 44, 32, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 98, 32, 43, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 61, 32, 66, 91, 97, 32, 43, 32, 52, 32, 42, 32, 101, 32, 62, 62, 32, 50, 93, 32, 61, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 100, 46, 108, 101, 110, 103, 116, 104, 59, 32, 43, 43, 102, 41, 32, 117, 91, 101, 43, 43, 93, 32, 61, 32, 100, 46, 99, 104, 97, 114, 67, 111, 100, 101, 65, 116, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 91, 101, 93, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 32, 43, 61, 32, 100, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 90, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 97, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 97, 32, 62, 62, 32, 50, 93, 32, 61, 32, 99, 46, 108, 101, 110, 103, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 41, 32, 61, 62, 32, 100, 32, 43, 61, 32, 101, 46, 108, 101, 110, 103, 116, 104, 32, 43, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 98, 32, 62, 62, 32, 50, 93, 32, 61, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 86, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 84, 58, 32, 40, 41, 32, 61, 62, 32, 53, 50, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 83, 58, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 101, 32, 61, 32, 48, 44, 32, 102, 32, 61, 32, 48, 59, 32, 102, 32, 60, 32, 99, 59, 32, 102, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 66, 91, 98, 32, 62, 62, 32, 50, 93, 44, 32, 103, 32, 61, 32, 66, 91, 98, 32, 43, 32, 52, 32, 62, 62, 32, 50, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 32, 43, 61, 32, 56, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 118, 97, 114, 32, 108, 32, 61, 32, 48, 59, 32, 108, 32, 60, 32, 103, 59, 32, 108, 43, 43, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 109, 32, 61, 32, 97, 44, 32, 110, 32, 61, 32, 120, 91, 104, 32, 43, 32, 108, 93, 44, 32, 112, 32, 61, 32, 98, 99, 91, 109, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 61, 32, 110, 32, 124, 124, 32, 49, 48, 32, 61, 61, 61, 32, 110, 32, 63, 32, 40, 40, 49, 32, 61, 61, 61, 32, 109, 32, 63, 32, 106, 97, 32, 58, 32, 116, 41, 40, 71, 40, 112, 41, 41, 44, 32, 112, 46, 108, 101, 110, 103, 116, 104, 32, 61, 32, 48, 41, 32, 58, 32, 112, 46, 112, 117, 115, 104, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 32, 43, 61, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 66, 91, 100, 32, 62, 62, 32, 50, 93, 32, 61, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 106, 58, 32, 105, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 58, 32, 106, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 58, 32, 107, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 58, 32, 108, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 58, 32, 109, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 58, 32, 110, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 58, 32, 111, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 58, 32, 112, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 58, 32, 113, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 58, 32, 114, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 58, 32, 115, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 113, 58, 32, 116, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 71, 58, 32, 117, 99, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 88, 58, 32, 88, 98, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 78, 58, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 99, 40, 120, 46, 115, 117, 98, 97, 114, 114, 97, 121, 40, 97, 44, 32, 97, 32, 43, 32, 98, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 44, 32, 87, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 87, 32, 61, 32, 99, 46, 101, 120, 112, 111, 114, 116, 115, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 32, 61, 32, 87, 46, 105, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 113, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 32, 61, 32, 87, 46, 110, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 87, 46, 106, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 45, 45, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 51, 32, 61, 32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 51, 46, 99, 97, 108, 108, 40, 107, 44, 32, 67, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 61, 61, 32, 67, 32, 38, 38, 32, 40, 110, 117, 108, 108, 32, 33, 61, 61, 32, 118, 97, 32, 38, 38, 32, 40, 99, 108, 101, 97, 114, 73, 110, 116, 101, 114, 118, 97, 108, 40, 118, 97, 41, 44, 32, 118, 97, 32, 61, 32, 110, 117, 108, 108, 41, 44, 32, 68, 32, 38, 38, 32, 40, 99, 32, 61, 32, 68, 44, 32, 68, 32, 61, 32, 110, 117, 108, 108, 44, 32, 99, 40, 41, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 87, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 43, 43, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 109, 111, 110, 105, 116, 111, 114, 82, 117, 110, 68, 101, 112, 101, 110, 100, 101, 110, 99, 105, 101, 115, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 44, 32, 67, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 123, 32, 97, 58, 32, 118, 99, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 107, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 40, 98, 44, 32, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 40, 96, 77, 111, 100, 117, 108, 101, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 32, 99, 97, 108, 108, 98, 97, 99, 107, 32, 102, 97, 105, 108, 101, 100, 32, 119, 105, 116, 104, 32, 101, 114, 114, 111, 114, 58, 32, 36, 123, 99, 125, 96, 41, 44, 32, 98, 97, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 97, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 121, 97, 32, 58, 32, 121, 97, 32, 61, 32, 120, 97, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 41, 32, 63, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 32, 58, 32, 107, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 32, 63, 32, 107, 46, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 40, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 44, 32, 113, 41, 32, 58, 32, 113, 32, 43, 32, 34, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 40, 98, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 99, 46, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 98, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 40, 41, 44, 32, 103, 99, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 103, 99, 32, 61, 32, 87, 46, 107, 97, 41, 40, 97, 41, 44, 32, 115, 98, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 115, 98, 32, 61, 32, 87, 46, 108, 97, 41, 40, 97, 41, 44, 32, 85, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 85, 32, 61, 32, 87, 46, 109, 97, 41, 40, 97, 41, 44, 32, 104, 99, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 104, 99, 32, 61, 32, 87, 46, 111, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 88, 32, 61, 32, 40, 97, 44, 32, 98, 41, 32, 61, 62, 32, 40, 88, 32, 61, 32, 87, 46, 112, 97, 41, 40, 97, 44, 32, 98, 41, 44, 32, 74, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 74, 32, 61, 32, 87, 46, 113, 97, 41, 40, 97, 41, 44, 32, 89, 32, 61, 32, 40, 97, 41, 32, 61, 62, 32, 40, 89, 32, 61, 32, 87, 46, 114, 97, 41, 40, 97, 41, 44, 32, 90, 32, 61, 32, 40, 41, 32, 61, 62, 32, 40, 90, 32, 61, 32, 87, 46, 115, 97, 41, 40, 41, 44, 32, 73, 97, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 73, 97, 32, 61, 32, 87, 46, 116, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 106, 106, 32, 61, 32, 87, 46, 117, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 32, 61, 32, 87, 46, 118, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 105, 32, 61, 32, 87, 46, 119, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 119, 99, 32, 61, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 40, 119, 99, 32, 61, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 106, 106, 106, 106, 32, 61, 32, 87, 46, 120, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 106, 105, 105, 32, 61, 32, 87, 46, 121, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 118, 105, 105, 106, 105, 105, 32, 61, 32, 87, 46, 122, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 32, 61, 32, 87, 46, 65, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 66, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 61, 62, 32, 40, 107, 46, 100, 121, 110, 67, 97, 108, 108, 95, 105, 105, 105, 105, 105, 105, 106, 106, 32, 61, 32, 87, 46, 67, 97, 41, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 108, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 113, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 99, 40, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 32, 33, 61, 61, 32, 99, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 99, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 99, 40, 97, 44, 32, 98, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 99, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 100, 32, 33, 61, 61, 32, 100, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 100, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 102, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 104, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 104, 32, 33, 61, 61, 32, 104, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 108, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 32, 33, 61, 61, 32, 109, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 109, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 107, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 101, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 32, 33, 61, 61, 32, 102, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 99, 40, 97, 44, 32, 98, 44, 32, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 100, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 32, 33, 61, 61, 32, 101, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 109, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 104, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 83, 46, 103, 101, 116, 40, 97, 41, 40, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 104, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 103, 32, 33, 61, 61, 32, 103, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 103, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 117, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 110, 32, 61, 32, 90, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 119, 99, 40, 97, 44, 32, 98, 44, 32, 99, 44, 32, 100, 44, 32, 101, 44, 32, 102, 44, 32, 104, 44, 32, 103, 44, 32, 108, 44, 32, 109, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 89, 40, 110, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 112, 32, 33, 61, 61, 32, 112, 32, 43, 32, 48, 41, 32, 116, 104, 114, 111, 119, 32, 112, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 88, 40, 49, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 120, 99, 59, 10, 32, 32, 32, 32, 32, 32, 68, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 121, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 99, 32, 124, 124, 32, 122, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 99, 32, 124, 124, 32, 40, 68, 32, 61, 32, 121, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 99, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 97, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 120, 99, 32, 38, 38, 32, 40, 120, 99, 32, 61, 32, 116, 114, 117, 101, 44, 32, 107, 46, 99, 97, 108, 108, 101, 100, 82, 117, 110, 32, 61, 32, 116, 114, 117, 101, 44, 32, 33, 109, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 115, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 97, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 97, 50, 32, 61, 32, 107, 46, 111, 110, 82, 117, 110, 116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 99, 97, 108, 108, 40, 107, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 38, 38, 32, 40, 107, 46, 112, 111, 115, 116, 82, 117, 110, 32, 61, 32, 91, 107, 46, 112, 111, 115, 116, 82, 117, 110, 93, 41, 59, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 98, 32, 61, 32, 107, 46, 112, 111, 115, 116, 82, 117, 110, 46, 115, 104, 105, 102, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 97, 46, 117, 110, 115, 104, 105, 102, 116, 40, 98, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 40, 48, 32, 60, 32, 67, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 41, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 82, 117, 110, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 82, 117, 110, 32, 61, 32, 91, 107, 46, 112, 114, 101, 82, 117, 110, 93, 41, 59, 32, 107, 46, 112, 114, 101, 82, 117, 110, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 117, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 69, 97, 40, 114, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 32, 60, 32, 67, 32, 124, 124, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 32, 63, 32, 40, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 82, 117, 110, 110, 105, 110, 103, 46, 46, 46, 34, 41, 44, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 107, 46, 115, 101, 116, 83, 116, 97, 116, 117, 115, 40, 34, 34, 41, 44, 32, 49, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 49, 41, 41, 32, 58, 32, 97, 40, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 32, 61, 61, 32, 116, 121, 112, 101, 111, 102, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 32, 38, 38, 32, 40, 107, 46, 112, 114, 101, 73, 110, 105, 116, 32, 61, 32, 91, 107, 46, 112, 114, 101, 73, 110, 105, 116, 93, 41, 59, 32, 48, 32, 60, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 108, 101, 110, 103, 116, 104, 59, 32, 41, 32, 107, 46, 112, 114, 101, 73, 110, 105, 116, 46, 112, 111, 112, 40, 41, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 122, 99, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 32, 61, 32, 99, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 82, 116, 110, 59, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 41, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 99, 114, 101, 97, 116, 101, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 77, 111, 100, 117, 108, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 99, 111, 114, 101, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 119, 97, 115, 109, 45, 108, 111, 97, 100, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 82, 101, 110, 100, 101, 114, 101, 114, 76, 111, 97, 100, 101, 114, 32, 105, 115, 32, 97, 32, 115, 116, 97, 116, 105, 99, 32, 99, 108, 97, 115, 115, 32, 97, 110, 100, 32, 99, 97, 110, 110, 111, 116, 32, 98, 101, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 100, 46, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 116, 114, 121, 76, 111, 97, 100, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 117, 108, 101, 32, 61, 32, 121, 105, 101, 108, 100, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 112, 108, 97, 121, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 40, 123, 32, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 58, 32, 40, 41, 32, 61, 62, 32, 117, 114, 108, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 84, 114, 105, 101, 115, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 109, 111, 100, 117, 108, 101, 32, 102, 114, 111, 109, 32, 116, 104, 101, 32, 112, 114, 105, 109, 97, 114, 121, 32, 85, 82, 76, 44, 32, 102, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 97, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 105, 102, 32, 110, 101, 99, 101, 115, 115, 97, 114, 121, 46, 10, 32, 32, 32, 32, 32, 42, 32, 84, 104, 114, 111, 119, 115, 32, 97, 110, 32, 101, 114, 114, 111, 114, 32, 105, 102, 32, 98, 111, 116, 104, 32, 85, 82, 76, 115, 32, 102, 97, 105, 108, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 46, 99, 97, 116, 99, 104, 40, 40, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 41, 32, 61, 62, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 117, 112, 85, 114, 108, 32, 61, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 108, 111, 97, 100, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 36, 123, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 125, 46, 32, 69, 114, 114, 111, 114, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 96, 65, 116, 116, 101, 109, 112, 116, 105, 110, 103, 32, 116, 111, 32, 108, 111, 97, 100, 32, 87, 65, 83, 77, 32, 102, 114, 111, 109, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 85, 114, 108, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 121, 105, 101, 108, 100, 32, 116, 104, 105, 115, 46, 95, 116, 114, 121, 76, 111, 97, 100, 40, 98, 97, 99, 107, 117, 112, 85, 114, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 80, 114, 105, 109, 97, 114, 121, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 105, 110, 105, 116, 105, 97, 108, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 96, 66, 97, 99, 107, 117, 112, 32, 87, 65, 83, 77, 32, 85, 82, 76, 32, 102, 97, 105, 108, 101, 100, 58, 32, 36, 123, 98, 97, 99, 107, 117, 112, 69, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 34, 87, 65, 83, 77, 32, 108, 111, 97, 100, 105, 110, 103, 32, 102, 97, 105, 108, 101, 100, 32, 102, 114, 111, 109, 32, 97, 108, 108, 32, 115, 111, 117, 114, 99, 101, 115, 46, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 80, 117, 98, 108, 105, 99, 32, 109, 101, 116, 104, 111, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 116, 104, 101, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 32, 85, 116, 105, 108, 105, 122, 101, 115, 32, 97, 32, 112, 114, 105, 109, 97, 114, 121, 32, 97, 110, 100, 32, 98, 97, 99, 107, 117, 112, 32, 85, 82, 76, 32, 102, 111, 114, 32, 114, 111, 98, 117, 115, 116, 110, 101, 115, 115, 46, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 80, 114, 111, 109, 105, 115, 101, 60, 77, 111, 100, 117, 108, 101, 62, 32, 45, 32, 65, 32, 112, 114, 111, 109, 105, 115, 101, 32, 116, 104, 97, 116, 32, 114, 101, 115, 111, 108, 118, 101, 115, 32, 116, 111, 32, 116, 104, 101, 32, 108, 111, 97, 100, 101, 100, 32, 109, 111, 100, 117, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 108, 111, 97, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 87, 105, 116, 104, 66, 97, 99, 107, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 83, 101, 116, 115, 32, 97, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 97, 110, 100, 32, 105, 110, 118, 97, 108, 105, 100, 97, 116, 101, 115, 32, 116, 104, 101, 32, 99, 117, 114, 114, 101, 110, 116, 32, 109, 111, 100, 117, 108, 101, 32, 112, 114, 111, 109, 105, 115, 101, 46, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 115, 116, 114, 105, 110, 103, 32, 45, 32, 32, 84, 104, 101, 32, 110, 101, 119, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 46, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 114, 108, 32, 61, 61, 61, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 119, 97, 115, 109, 85, 82, 76, 32, 61, 32, 117, 114, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 47, 47, 32, 101, 115, 108, 105, 110, 116, 45, 100, 105, 115, 97, 98, 108, 101, 45, 110, 101, 120, 116, 45, 108, 105, 110, 101, 32, 64, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 45, 101, 115, 108, 105, 110, 116, 47, 110, 97, 109, 105, 110, 103, 45, 99, 111, 110, 118, 101, 110, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 77, 111, 100, 117, 108, 101, 80, 114, 111, 109, 105, 115, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 47, 47, 32, 85, 82, 76, 32, 102, 111, 114, 32, 116, 104, 101, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 44, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 101, 100, 32, 117, 115, 105, 110, 103, 32, 112, 97, 99, 107, 97, 103, 101, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111, 110, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 44, 32, 34, 95, 119, 97, 115, 109, 85, 82, 76, 34, 44, 32, 96, 104, 116, 116, 112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 78, 65, 77, 69, 125, 64, 36, 123, 80, 65, 67, 75, 65, 71, 69, 95, 86, 69, 82, 83, 73, 79, 78, 125, 47, 100, 105, 115, 116, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 45, 112, 108, 97, 121, 101, 114, 46, 119, 97, 115, 109, 96, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 101, 118, 101, 110, 116, 45, 109, 97, 110, 97, 103, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 83, 101, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 101, 116, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 97, 100, 100, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 105, 115, 116, 101, 110, 101, 114, 115, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 100, 101, 108, 101, 116, 101, 40, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 105, 115, 112, 97, 116, 99, 104, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 103, 101, 116, 40, 101, 118, 101, 110, 116, 46, 116, 121, 112, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 61, 62, 32, 108, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 46, 99, 108, 101, 97, 114, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 111, 102, 102, 115, 99, 114, 101, 101, 110, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 101, 110, 116, 114, 121, 46, 105, 115, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 110, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 40, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 79, 98, 115, 101, 114, 118, 101, 114, 67, 97, 108, 108, 98, 97, 99, 107, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 101, 115, 104, 111, 108, 100, 58, 32, 48, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 114, 101, 115, 105, 122, 101, 45, 111, 98, 115, 101, 114, 118, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 32, 61, 32, 49, 48, 48, 59, 10, 32, 32, 118, 97, 114, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 99, 108, 97, 115, 115, 32, 123, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 32, 61, 32, 40, 101, 110, 116, 114, 105, 101, 115, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 110, 116, 114, 105, 101, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 110, 116, 114, 121, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 108, 101, 109, 101, 110, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 103, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 101, 108, 101, 109, 101, 110, 116, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 116, 105, 109, 101, 111, 117, 116, 93, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 105, 109, 101, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 32, 61, 32, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 44, 32, 82, 69, 83, 73, 90, 69, 95, 68, 69, 66, 79, 85, 78, 67, 69, 95, 84, 73, 77, 69, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 101, 110, 116, 114, 121, 46, 116, 97, 114, 103, 101, 116, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 110, 101, 119, 84, 105, 109, 101, 111, 117, 116, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 101, 119, 32, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 114, 101, 115, 105, 122, 101, 72, 97, 110, 100, 108, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 44, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 104, 97, 115, 40, 99, 97, 110, 118, 97, 115, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 101, 116, 40, 99, 97, 110, 118, 97, 115, 44, 32, 91, 100, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 44, 32, 48, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 100, 101, 108, 101, 116, 101, 40, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 46, 115, 105, 122, 101, 32, 61, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 40, 95, 98, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 100, 105, 115, 99, 111, 110, 110, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 111, 98, 115, 101, 114, 118, 101, 114, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 44, 32, 34, 95, 111, 98, 115, 101, 114, 118, 101, 100, 67, 97, 110, 118, 97, 115, 101, 115, 34, 44, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 41, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 117, 116, 105, 108, 115, 46, 116, 115, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 47, 94, 35, 40, 91, 92, 100, 97, 45, 102, 93, 123, 54, 125, 124, 91, 92, 100, 97, 45, 102, 93, 123, 56, 125, 41, 36, 47, 105, 117, 46, 116, 101, 115, 116, 40, 99, 111, 108, 111, 114, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 72, 101, 120, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 72, 101, 120, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 101, 116, 32, 104, 101, 120, 32, 61, 32, 99, 111, 108, 111, 114, 72, 101, 120, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 35, 34, 44, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 104, 101, 120, 32, 61, 32, 104, 101, 120, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 54, 32, 63, 32, 96, 36, 123, 104, 101, 120, 125, 102, 102, 96, 32, 58, 32, 104, 101, 120, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 97, 114, 115, 101, 73, 110, 116, 40, 104, 101, 120, 44, 32, 49, 54, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 32, 60, 32, 52, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 102, 105, 108, 101, 68, 97, 116, 97, 46, 115, 108, 105, 99, 101, 40, 48, 44, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 41, 59, 10, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 46, 108, 101, 110, 103, 116, 104, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 90, 73, 80, 95, 83, 73, 71, 78, 65, 84, 85, 82, 69, 91, 105, 93, 32, 33, 61, 61, 32, 102, 105, 108, 101, 83, 105, 103, 110, 97, 116, 117, 114, 101, 91, 105, 93, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 106, 115, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 76, 79, 84, 84, 73, 69, 95, 74, 83, 79, 78, 95, 77, 65, 78, 68, 65, 84, 79, 82, 89, 95, 70, 73, 69, 76, 68, 83, 46, 101, 118, 101, 114, 121, 40, 40, 102, 105, 101, 108, 100, 41, 32, 61, 62, 32, 79, 98, 106, 101, 99, 116, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 46, 104, 97, 115, 79, 119, 110, 80, 114, 111, 112, 101, 114, 116, 121, 46, 99, 97, 108, 108, 40, 106, 115, 111, 110, 44, 32, 102, 105, 101, 108, 100, 41, 41, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 102, 105, 108, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 115, 76, 111, 116, 116, 105, 101, 74, 83, 79, 78, 40, 102, 105, 108, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 63, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 58, 32, 49, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 49, 32, 43, 32, 40, 100, 112, 114, 32, 45, 32, 49, 41, 32, 42, 32, 68, 69, 70, 65, 85, 76, 84, 95, 68, 80, 82, 95, 70, 65, 67, 84, 79, 82, 59, 10, 32, 32, 125, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 101, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 101, 108, 101, 109, 101, 110, 116, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 99, 116, 46, 116, 111, 112, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 32, 62, 61, 32, 48, 32, 38, 38, 32, 114, 101, 99, 116, 46, 98, 111, 116, 116, 111, 109, 32, 60, 61, 32, 40, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 72, 101, 105, 103, 104, 116, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 41, 32, 38, 38, 32, 114, 101, 99, 116, 46, 114, 105, 103, 104, 116, 32, 60, 61, 32, 40, 119, 105, 110, 100, 111, 119, 46, 105, 110, 110, 101, 114, 87, 105, 100, 116, 104, 32, 124, 124, 32, 100, 111, 99, 117, 109, 101, 110, 116, 46, 100, 111, 99, 117, 109, 101, 110, 116, 69, 108, 101, 109, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 41, 59, 10, 32, 32, 125, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 32, 61, 32, 40, 109, 111, 100, 101, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 77, 111, 100, 101, 46, 70, 111, 114, 119, 97, 114, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 32, 61, 32, 40, 102, 105, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 99, 111, 118, 101, 114, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 108, 108, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 108, 108, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 102, 105, 116, 32, 61, 61, 61, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 70, 105, 116, 46, 78, 111, 110, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 40, 97, 108, 105, 103, 110, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 97, 108, 105, 103, 110, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 65, 108, 105, 103, 110, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 115, 101, 103, 109, 101, 110, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 70, 108, 111, 97, 116, 40, 41, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 46, 108, 101, 110, 103, 116, 104, 32, 33, 61, 61, 32, 50, 41, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 41, 59, 10, 32, 32, 32, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 114, 101, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 32, 61, 32, 40, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 33, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 111, 100, 117, 108, 101, 46, 99, 114, 101, 97, 116, 101, 68, 101, 102, 97, 117, 108, 116, 76, 97, 121, 111, 117, 116, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 65, 108, 105, 103, 110, 40, 40, 95, 97, 32, 61, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 91, 48, 46, 53, 44, 32, 48, 46, 53, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 70, 105, 116, 40, 40, 95, 98, 32, 61, 32, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 125, 59, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 99, 108, 97, 115, 115, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 97, 110, 118, 97, 115, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 99, 111, 110, 116, 101, 120, 116, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 34, 44, 32, 123, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 105, 115, 70, 114, 111, 122, 101, 110, 34, 44, 32, 102, 97, 108, 115, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 116, 104, 105, 115, 44, 32, 34, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 34, 50, 100, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 69, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 32, 61, 32, 110, 101, 119, 32, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 40, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 41, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 105, 115, 32, 116, 114, 117, 101, 32, 98, 121, 32, 100, 101, 102, 97, 117, 108, 116, 32, 116, 111, 32, 112, 114, 101, 118, 101, 110, 116, 32, 117, 110, 110, 101, 99, 101, 115, 115, 97, 114, 121, 32, 114, 101, 110, 100, 101, 114, 105, 110, 103, 32, 119, 104, 101, 110, 32, 116, 104, 101, 32, 99, 97, 110, 118, 97, 115, 32, 105, 115, 32, 111, 102, 102, 115, 99, 114, 101, 101, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 40, 95, 99, 32, 61, 32, 40, 95, 98, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 108, 111, 97, 100, 40, 41, 46, 116, 104, 101, 110, 40, 40, 109, 111, 100, 117, 108, 101, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 50, 44, 32, 95, 99, 50, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95, 103, 44, 32, 95, 104, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 32, 109, 111, 100, 117, 108, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 101, 119, 32, 109, 111, 100, 117, 108, 101, 46, 68, 111, 116, 76, 111, 116, 116, 105, 101, 80, 108, 97, 121, 101, 114, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 50, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 50, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 95, 99, 50, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 50, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 109, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 109, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 97, 100, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 119, 97, 115, 109, 32, 109, 111, 100, 117, 108, 101, 58, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 109, 101, 115, 115, 97, 103, 101, 41, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 95, 95, 97, 115, 121, 110, 99, 40, 116, 104, 105, 115, 44, 32, 110, 117, 108, 108, 44, 32, 102, 117, 110, 99, 116, 105, 111, 110, 42, 32, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 121, 105, 101, 108, 100, 32, 102, 101, 116, 99, 104, 40, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 114, 101, 115, 112, 111, 110, 115, 101, 46, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 102, 101, 116, 99, 104, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 125, 58, 32, 36, 123, 114, 101, 115, 112, 111, 110, 115, 101, 46, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 97, 116, 97, 32, 61, 32, 121, 105, 101, 108, 100, 32, 114, 101, 115, 112, 111, 110, 115, 101, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 100, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 41, 46, 100, 101, 99, 111, 100, 101, 40, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 115, 116, 114, 105, 110, 103, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 115, 116, 114, 105, 110, 103, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 115, 116, 114, 105, 110, 103, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 100, 97, 116, 97, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 68, 111, 116, 76, 111, 116, 116, 105, 101, 68, 97, 116, 97, 40, 100, 97, 116, 97, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 32, 61, 61, 61, 32, 34, 111, 98, 106, 101, 99, 116, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 115, 76, 111, 116, 116, 105, 101, 40, 100, 97, 116, 97, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 34, 73, 110, 118, 97, 108, 105, 100, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 111, 98, 106, 101, 99, 116, 58, 32, 84, 104, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 111, 98, 106, 101, 99, 116, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 99, 111, 110, 102, 111, 114, 109, 32, 116, 111, 32, 116, 104, 101, 32, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 32, 102, 111, 114, 109, 97, 116, 46, 34, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 68, 97, 116, 97, 40, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 100, 97, 116, 97, 41, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 96, 85, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 32, 100, 97, 116, 97, 32, 116, 121, 112, 101, 32, 102, 111, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 46, 32, 69, 120, 112, 101, 99, 116, 101, 100, 58, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 115, 116, 114, 105, 110, 103, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 40, 100, 111, 116, 76, 111, 116, 116, 105, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 45, 32, 111, 98, 106, 101, 99, 116, 32, 40, 76, 111, 116, 116, 105, 101, 32, 74, 83, 79, 78, 41, 46, 32, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 82, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 116, 121, 112, 101, 111, 102, 32, 100, 97, 116, 97, 125, 96, 10, 32, 32, 32, 32, 32, 32, 32, 32, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 115, 111, 109, 101, 116, 104, 105, 110, 103, 32, 119, 101, 110, 116, 32, 119, 114, 111, 110, 103, 44, 32, 116, 104, 101, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 119, 97, 115, 32, 115, 117, 112, 112, 111, 115, 101, 32, 116, 111, 32, 97, 117, 116, 111, 112, 108, 97, 121, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 34, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 34, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 101, 116, 99, 104, 68, 97, 116, 97, 40, 115, 114, 99, 41, 46, 116, 104, 101, 110, 40, 40, 100, 97, 116, 97, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 100, 97, 116, 97, 41, 41, 46, 99, 97, 116, 99, 104, 40, 40, 101, 114, 114, 111, 114, 41, 32, 61, 62, 32, 116, 104, 105, 115, 46, 95, 100, 105, 115, 112, 97, 116, 99, 104, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 108, 111, 97, 100, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 100, 97, 116, 97, 32, 102, 114, 111, 109, 32, 85, 82, 76, 58, 32, 36, 123, 115, 114, 99, 125, 46, 32, 36, 123, 101, 114, 114, 111, 114, 125, 96, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 97, 121, 111, 117, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 97, 108, 105, 103, 110, 58, 32, 91, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 48, 41, 44, 32, 108, 97, 121, 111, 117, 116, 46, 97, 108, 105, 103, 110, 46, 103, 101, 116, 40, 49, 41, 93, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 102, 105, 116, 58, 32, 40, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 50, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 115, 119, 105, 116, 99, 104, 32, 40, 108, 97, 121, 111, 117, 116, 46, 102, 105, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 97, 50, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 50, 46, 70, 105, 116, 46, 67, 111, 110, 116, 97, 105, 110, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 70, 105, 116, 46, 67, 111, 118, 101, 114, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 118, 101, 114, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 70, 105, 116, 46, 70, 105, 108, 108, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 108, 108, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 70, 105, 116, 46, 70, 105, 116, 72, 101, 105, 103, 104, 116, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 104, 101, 105, 103, 104, 116, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 101, 46, 70, 105, 116, 46, 70, 105, 116, 87, 105, 100, 116, 104, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 105, 116, 45, 119, 105, 100, 116, 104, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 97, 115, 101, 32, 40, 40, 95, 102, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 102, 46, 70, 105, 116, 46, 78, 111, 110, 101, 41, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 110, 111, 110, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 102, 97, 117, 108, 116, 58, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 99, 111, 110, 116, 97, 105, 110, 34, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 114, 107, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 110, 105, 102, 101, 115, 116, 83, 116, 114, 105, 110, 103, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 109, 97, 110, 105, 102, 101, 115, 116, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 32, 61, 32, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 109, 97, 110, 105, 102, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 79, 98, 106, 101, 99, 116, 46, 107, 101, 121, 115, 40, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 41, 46, 108, 101, 110, 103, 116, 104, 32, 61, 61, 61, 32, 48, 41, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 109, 97, 110, 105, 102, 101, 115, 116, 74, 115, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 95, 101, 114, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 101, 103, 109, 101, 110, 116, 32, 38, 38, 32, 115, 101, 103, 109, 101, 110, 116, 46, 115, 105, 122, 101, 40, 41, 32, 61, 61, 61, 32, 50, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 48, 41, 44, 32, 115, 101, 103, 109, 101, 110, 116, 46, 103, 101, 116, 40, 49, 41, 93, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 109, 111, 100, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 98, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 98, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 99, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 77, 111, 100, 101, 46, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 109, 111, 100, 101, 32, 61, 61, 61, 32, 40, 40, 95, 100, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 100, 46, 77, 111, 100, 101, 46, 82, 101, 118, 101, 114, 115, 101, 66, 111, 117, 110, 99, 101, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 114, 101, 118, 101, 114, 115, 101, 45, 98, 111, 117, 110, 99, 101, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 70, 114, 111, 122, 101, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 97, 117, 116, 111, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 112, 101, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 82, 101, 97, 100, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 76, 111, 97, 100, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 48, 48, 41, 32, 47, 32, 49, 48, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 117, 114, 97, 116, 105, 111, 110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 32, 99, 97, 110, 118, 97, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 44, 32, 95, 101, 44, 32, 95, 102, 44, 32, 95, 103, 44, 32, 95, 104, 44, 32, 95, 105, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 101, 109, 101, 73, 100, 58, 32, 40, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 116, 104, 101, 109, 101, 73, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 97, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 40, 95, 98, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 112, 108, 97, 121, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 48, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 95, 99, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 108, 111, 111, 112, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 99, 32, 58, 32, 102, 97, 108, 115, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 40, 95, 100, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 111, 100, 101, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 34, 102, 111, 114, 119, 97, 114, 100, 34, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 40, 95, 101, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 101, 103, 109, 101, 110, 116, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 101, 32, 58, 32, 91, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 40, 95, 102, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 115, 112, 101, 101, 100, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 102, 32, 58, 32, 49, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 95, 103, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 103, 32, 58, 32, 116, 114, 117, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 40, 95, 104, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 109, 97, 114, 107, 101, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 104, 32, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 99, 111, 110, 102, 105, 103, 46, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 68, 97, 116, 97, 40, 99, 111, 110, 102, 105, 103, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 105, 102, 32, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 70, 114, 111, 109, 83, 114, 99, 40, 99, 111, 110, 102, 105, 103, 46, 115, 114, 99, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 40, 95, 105, 32, 61, 32, 99, 111, 110, 102, 105, 103, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 105, 32, 58, 32, 34, 34, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 114, 101, 110, 100, 101, 114, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 117, 102, 102, 101, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 98, 117, 102, 102, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 32, 61, 32, 110, 101, 119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 40, 98, 117, 102, 102, 101, 114, 44, 32, 48, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 42, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 42, 32, 52, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 101, 116, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 61, 61, 32, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 99, 114, 101, 97, 116, 101, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 46, 100, 97, 116, 97, 46, 115, 101, 116, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 109, 97, 103, 101, 68, 97, 116, 97, 32, 61, 32, 110, 101, 119, 32, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 99, 108, 97, 109, 112, 101, 100, 66, 117, 102, 102, 101, 114, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 46, 112, 117, 116, 73, 109, 97, 103, 101, 68, 97, 116, 97, 40, 105, 109, 97, 103, 101, 68, 97, 116, 97, 44, 32, 48, 44, 32, 48, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 100, 114, 97, 119, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 110, 101, 120, 116, 70, 114, 97, 109, 101, 32, 61, 32, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97, 109, 101, 40, 41, 32, 42, 32, 49, 101, 51, 41, 32, 47, 32, 49, 101, 51, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 112, 100, 97, 116, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 110, 101, 120, 116, 70, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 117, 112, 100, 97, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 114, 101, 110, 100, 101, 114, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 67, 111, 109, 112, 108, 101, 116, 101, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 46, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 40, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 34, 69, 114, 114, 111, 114, 32, 105, 110, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 102, 114, 97, 109, 101, 58, 34, 44, 32, 101, 114, 114, 111, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 108, 97, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 108, 97, 121, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 38, 38, 32, 33, 105, 115, 69, 108, 101, 109, 101, 110, 116, 73, 110, 86, 105, 101, 119, 112, 111, 114, 116, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 40, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 112, 97, 117, 115, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 115, 116, 111, 112, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 102, 114, 97, 109, 101, 32, 60, 32, 48, 32, 124, 124, 32, 102, 114, 97, 109, 101, 32, 62, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 40, 41, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 101, 107, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 97, 109, 101, 34, 44, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 116, 104, 105, 115, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 99, 111, 108, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 115, 116, 121, 108, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 104, 101, 120, 83, 116, 114, 105, 110, 103, 84, 111, 82, 71, 66, 65, 73, 110, 116, 40, 99, 111, 108, 111, 114, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 99, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 108, 111, 111, 112, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 116, 121, 112, 101, 44, 32, 108, 105, 115, 116, 101, 110, 101, 114, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 100, 101, 108, 101, 116, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 111, 110, 116, 101, 120, 116, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 109, 111, 118, 101, 65, 108, 108, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 99, 97, 110, 99, 101, 108, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 110, 117, 108, 108, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 116, 114, 117, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 33, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 97, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 73, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 102, 114, 97, 109, 101, 77, 97, 110, 97, 103, 101, 114, 46, 114, 101, 113, 117, 101, 115, 116, 65, 110, 105, 109, 97, 116, 105, 111, 110, 70, 114, 97, 109, 101, 40, 116, 104, 105, 115, 46, 95, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 32, 61, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 124, 124, 32, 33, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 112, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 104, 101, 105, 103, 104, 116, 58, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 44, 32, 119, 105, 100, 116, 104, 58, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 33, 61, 61, 32, 48, 32, 38, 38, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 33, 61, 61, 32, 48, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 99, 108, 105, 101, 110, 116, 87, 105, 100, 116, 104, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 99, 108, 105, 101, 110, 116, 72, 101, 105, 103, 104, 116, 32, 42, 32, 100, 112, 114, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 107, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 105, 122, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 111, 107, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 83, 101, 103, 109, 101, 110, 116, 40, 91, 115, 116, 97, 114, 116, 70, 114, 97, 109, 101, 44, 32, 101, 110, 100, 70, 114, 97, 109, 101, 93, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 77, 111, 100, 101, 40, 109, 111, 100, 101, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 99, 111, 110, 102, 105, 103, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 95, 97, 32, 61, 32, 99, 111, 110, 102, 105, 103, 44, 32, 123, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 44, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 125, 32, 61, 32, 95, 97, 44, 32, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 111, 98, 106, 82, 101, 115, 116, 40, 95, 97, 44, 32, 91, 34, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 34, 44, 32, 34, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 34, 93, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 44, 32, 114, 101, 115, 116, 67, 111, 110, 102, 105, 103, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 47, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 105, 115, 32, 97, 32, 115, 112, 101, 99, 105, 97, 108, 32, 99, 97, 115, 101, 44, 32, 105, 116, 32, 115, 104, 111, 117, 108, 100, 32, 98, 101, 32, 115, 101, 116, 32, 116, 111, 32, 116, 104, 101, 32, 100, 101, 102, 97, 117, 108, 116, 32, 118, 97, 108, 117, 101, 32, 105, 102, 32, 105, 116, 39, 115, 32, 110, 111, 116, 32, 112, 114, 111, 118, 105, 100, 101, 100, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 58, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 103, 101, 116, 68, 101, 102, 97, 117, 108, 116, 68, 80, 82, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 58, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 32, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 97, 117, 116, 111, 82, 101, 115, 105, 122, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 67, 97, 110, 118, 97, 115, 82, 101, 115, 105, 122, 101, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 102, 114, 101, 101, 122, 101, 79, 110, 79, 102, 102, 115, 99, 114, 101, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 44, 32, 116, 104, 105, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 79, 102, 102, 115, 99, 114, 101, 101, 110, 79, 98, 115, 101, 114, 118, 101, 114, 46, 117, 110, 111, 98, 115, 101, 114, 118, 101, 40, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 105, 115, 70, 114, 111, 122, 101, 110, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 40, 41, 32, 61, 61, 61, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 44, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 34, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 101, 118, 101, 110, 116, 77, 97, 110, 97, 103, 101, 114, 46, 100, 105, 115, 112, 97, 116, 99, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 121, 112, 101, 58, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 70, 97, 105, 108, 101, 100, 32, 116, 111, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 58, 36, 123, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 125, 96, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 109, 97, 114, 107, 101, 114, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 109, 97, 114, 107, 101, 114, 115, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 109, 97, 114, 107, 101, 114, 115, 46, 103, 101, 116, 40, 105, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 46, 112, 117, 115, 104, 40, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 110, 97, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 110, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 105, 109, 101, 58, 32, 109, 97, 114, 107, 101, 114, 46, 116, 105, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 109, 97, 114, 107, 101, 114, 46, 100, 117, 114, 97, 116, 105, 111, 110, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 114, 101, 115, 117, 108, 116, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 114, 101, 115, 101, 116, 84, 104, 101, 109, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 101, 100, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 111, 97, 100, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 83, 108, 111, 116, 115, 40, 115, 108, 111, 116, 115, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 32, 124, 124, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 67, 111, 110, 102, 105, 103, 40, 95, 95, 115, 112, 114, 101, 97, 100, 80, 114, 111, 112, 115, 40, 95, 95, 115, 112, 114, 101, 97, 100, 86, 97, 108, 117, 101, 115, 40, 123, 125, 44, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 99, 111, 110, 102, 105, 103, 40, 41, 41, 44, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 99, 114, 101, 97, 116, 101, 67, 111, 114, 101, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 44, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 10, 32, 32, 32, 32, 32, 32, 125, 41, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 61, 61, 61, 32, 110, 117, 108, 108, 41, 32, 114, 101, 116, 117, 114, 110, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 87, 97, 115, 109, 76, 111, 97, 100, 101, 114, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 114, 116, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 97, 114, 116, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 97, 114, 116, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 112, 101, 100, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 115, 116, 111, 112, 112, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 115, 116, 111, 112, 112, 101, 100, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 99, 116, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 103, 101, 116, 66, 111, 117, 110, 100, 105, 110, 103, 67, 108, 105, 101, 110, 116, 82, 101, 99, 116, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 88, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 47, 32, 114, 101, 99, 116, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 99, 97, 108, 101, 89, 32, 61, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 47, 32, 114, 101, 99, 116, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 61, 32, 116, 104, 105, 115, 46, 95, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 119, 105, 110, 100, 111, 119, 46, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 32, 124, 124, 32, 49, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 88, 32, 45, 32, 114, 101, 99, 116, 46, 108, 101, 102, 116, 41, 32, 42, 32, 115, 99, 97, 108, 101, 88, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 40, 101, 118, 101, 110, 116, 46, 99, 108, 105, 101, 110, 116, 89, 32, 45, 32, 114, 101, 99, 116, 46, 116, 111, 112, 41, 32, 42, 32, 115, 99, 97, 108, 101, 89, 32, 47, 32, 100, 101, 118, 105, 99, 101, 80, 105, 120, 101, 108, 82, 97, 116, 105, 111, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 120, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 121, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 85, 112, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 111, 110, 80, 111, 105, 110, 116, 101, 114, 76, 101, 97, 118, 101, 40, 101, 118, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 123, 32, 120, 44, 32, 121, 32, 125, 32, 61, 32, 116, 104, 105, 115, 46, 95, 103, 101, 116, 80, 111, 105, 110, 116, 101, 114, 80, 111, 115, 105, 116, 105, 111, 110, 40, 101, 118, 101, 110, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 114, 101, 116, 117, 114, 110, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 70, 114, 97, 109, 101, 119, 111, 114, 107, 83, 101, 116, 117, 112, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 115, 105, 122, 101, 40, 41, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 112, 117, 115, 104, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 86, 101, 99, 116, 111, 114, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 115, 101, 116, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 32, 33, 61, 61, 32, 110, 117, 108, 108, 32, 38, 38, 32, 116, 104, 105, 115, 46, 105, 115, 76, 111, 97, 100, 101, 100, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 105, 115, 116, 101, 110, 101, 114, 115, 32, 61, 32, 116, 104, 105, 115, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 85, 112, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 108, 105, 115, 116, 101, 110, 101, 114, 115, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 34, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 34, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 95, 99, 108, 101, 97, 110, 117, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 73, 83, 95, 66, 82, 79, 87, 83, 69, 82, 32, 38, 38, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 72, 84, 77, 76, 67, 97, 110, 118, 97, 115, 69, 108, 101, 109, 101, 110, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 117, 112, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 85, 112, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 100, 111, 119, 110, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 109, 111, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 101, 110, 116, 101, 114, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 105, 115, 46, 95, 99, 97, 110, 118, 97, 115, 46, 114, 101, 109, 111, 118, 101, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 112, 111, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 34, 44, 32, 116, 104, 105, 115, 46, 95, 112, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 77, 101, 116, 104, 111, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 44, 32, 95, 99, 44, 32, 95, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 48, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 40, 95, 100, 32, 61, 32, 40, 95, 99, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 99, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 83, 105, 122, 101, 40, 41, 46, 103, 101, 116, 40, 49, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 100, 32, 58, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 119, 105, 100, 116, 104, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 101, 105, 103, 104, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 66, 111, 111, 108, 101, 97, 110, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 78, 117, 109, 101, 114, 105, 99, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 115, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 83, 116, 114, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 110, 97, 109, 101, 44, 32, 118, 97, 108, 117, 101, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 102, 97, 108, 115, 101, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 47, 42, 42, 10, 32, 32, 32, 32, 32, 42, 32, 71, 101, 116, 32, 116, 104, 101, 32, 79, 114, 105, 101, 110, 116, 101, 100, 32, 66, 111, 117, 110, 100, 105, 110, 103, 32, 66, 111, 120, 32, 40, 79, 66, 66, 41, 32, 112, 111, 105, 110, 116, 115, 32, 111, 102, 32, 97, 32, 108, 97, 121, 101, 114, 32, 98, 121, 32, 105, 116, 115, 32, 110, 97, 109, 101, 10, 32, 32, 32, 32, 32, 42, 32, 64, 112, 97, 114, 97, 109, 32, 108, 97, 121, 101, 114, 78, 97, 109, 101, 32, 45, 32, 84, 104, 101, 32, 110, 97, 109, 101, 32, 111, 102, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 10, 32, 32, 32, 32, 32, 42, 32, 64, 114, 101, 116, 117, 114, 110, 115, 32, 65, 110, 32, 97, 114, 114, 97, 121, 32, 111, 102, 32, 56, 32, 110, 117, 109, 98, 101, 114, 115, 32, 114, 101, 112, 114, 101, 115, 101, 110, 116, 105, 110, 103, 32, 52, 32, 112, 111, 105, 110, 116, 115, 32, 40, 120, 44, 121, 41, 32, 111, 102, 32, 116, 104, 101, 32, 79, 66, 66, 32, 105, 110, 32, 99, 108, 111, 99, 107, 119, 105, 115, 101, 32, 111, 114, 100, 101, 114, 32, 115, 116, 97, 114, 116, 105, 110, 103, 32, 102, 114, 111, 109, 32, 116, 111, 112, 45, 108, 101, 102, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 91, 120, 48, 44, 32, 121, 48, 44, 32, 120, 49, 44, 32, 121, 49, 44, 32, 120, 50, 44, 32, 121, 50, 44, 32, 120, 51, 44, 32, 121, 51, 93, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 64, 101, 120, 97, 109, 112, 108, 101, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 116, 121, 112, 101, 115, 99, 114, 105, 112, 116, 10, 32, 32, 32, 32, 32, 42, 32, 47, 47, 32, 68, 114, 97, 119, 32, 97, 32, 112, 111, 108, 121, 103, 111, 110, 32, 97, 114, 111, 117, 110, 100, 32, 116, 104, 101, 32, 108, 97, 121, 101, 114, 32, 39, 76, 97, 121, 101, 114, 32, 49, 39, 10, 32, 32, 32, 32, 32, 42, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 39, 114, 101, 110, 100, 101, 114, 39, 44, 32, 40, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 99, 111, 110, 115, 116, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 32, 61, 32, 100, 111, 116, 76, 111, 116, 116, 105, 101, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 39, 76, 97, 121, 101, 114, 32, 49, 39, 41, 59, 10, 32, 32, 32, 32, 32, 42, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 105, 102, 32, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 98, 101, 103, 105, 110, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 109, 111, 118, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 48, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 49, 93, 41, 59, 32, 47, 47, 32, 70, 105, 114, 115, 116, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 50, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 51, 93, 41, 59, 32, 47, 47, 32, 83, 101, 99, 111, 110, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 52, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 53, 93, 41, 59, 32, 47, 47, 32, 84, 104, 105, 114, 100, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 108, 105, 110, 101, 84, 111, 40, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 54, 93, 44, 32, 111, 98, 98, 80, 111, 105, 110, 116, 115, 91, 55, 93, 41, 59, 32, 47, 47, 32, 70, 111, 117, 114, 116, 104, 32, 112, 111, 105, 110, 116, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 99, 108, 111, 115, 101, 80, 97, 116, 104, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 32, 32, 99, 111, 110, 116, 101, 120, 116, 46, 115, 116, 114, 111, 107, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 42, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 42, 32, 96, 96, 96, 10, 32, 32, 32, 32, 32, 42, 47, 10, 32, 32, 32, 32, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 105, 110, 103, 66, 111, 120, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 111, 117, 110, 100, 115, 32, 61, 32, 40, 95, 97, 32, 61, 32, 116, 104, 105, 115, 46, 95, 100, 111, 116, 76, 111, 116, 116, 105, 101, 67, 111, 114, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 103, 101, 116, 76, 97, 121, 101, 114, 66, 111, 117, 110, 100, 115, 40, 108, 97, 121, 101, 114, 78, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 98, 111, 117, 110, 100, 115, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 98, 111, 117, 110, 100, 115, 46, 115, 105, 122, 101, 40, 41, 32, 33, 61, 61, 32, 56, 41, 32, 114, 101, 116, 117, 114, 110, 32, 118, 111, 105, 100, 32, 48, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 111, 105, 110, 116, 115, 32, 61, 32, 91, 93, 59, 10, 32, 32, 32, 32, 32, 32, 102, 111, 114, 32, 40, 108, 101, 116, 32, 105, 32, 61, 32, 48, 59, 32, 105, 32, 60, 32, 56, 59, 32, 105, 32, 43, 61, 32, 49, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 112, 111, 105, 110, 116, 115, 46, 112, 117, 115, 104, 40, 98, 111, 117, 110, 100, 115, 46, 103, 101, 116, 40, 105, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 112, 111, 105, 110, 116, 115, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 115, 116, 97, 116, 105, 99, 32, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 118, 97, 114, 32, 95, 97, 44, 32, 95, 98, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 40, 95, 98, 32, 61, 32, 40, 95, 97, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 41, 32, 61, 61, 32, 110, 117, 108, 108, 32, 63, 32, 118, 111, 105, 100, 32, 48, 32, 58, 32, 95, 97, 46, 116, 114, 97, 110, 115, 102, 111, 114, 109, 84, 104, 101, 109, 101, 84, 111, 76, 111, 116, 116, 105, 101, 83, 108, 111, 116, 115, 40, 116, 104, 101, 109, 101, 44, 32, 115, 108, 111, 116, 115, 41, 41, 32, 33, 61, 32, 110, 117, 108, 108, 32, 63, 32, 95, 98, 32, 58, 32, 34, 34, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 95, 95, 112, 117, 98, 108, 105, 99, 70, 105, 101, 108, 100, 40, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 44, 32, 34, 95, 119, 97, 115, 109, 77, 111, 100, 117, 108, 101, 34, 44, 32, 110, 117, 108, 108, 41, 59, 10, 32, 32, 118, 97, 114, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 32, 61, 32, 95, 68, 111, 116, 76, 111, 116, 116, 105, 101, 59, 10, 10, 32, 32, 47, 47, 32, 115, 114, 99, 47, 119, 111, 114, 107, 101, 114, 47, 100, 111, 116, 108, 111, 116, 116, 105, 101, 46, 119, 111, 114, 107, 101, 114, 46, 116, 115, 10, 32, 32, 118, 97, 114, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 32, 61, 32, 47, 42, 32, 64, 95, 95, 80, 85, 82, 69, 95, 95, 32, 42, 47, 32, 110, 101, 119, 32, 77, 97, 112, 40, 41, 59, 10, 32, 32, 118, 97, 114, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 32, 61, 32, 123, 10, 32, 32, 32, 32, 114, 101, 97, 100, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 97, 100, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 111, 109, 112, 108, 101, 116, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 97, 100, 69, 114, 114, 111, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 76, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 108, 111, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 108, 97, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 80, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 112, 97, 117, 115, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 83, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 115, 116, 111, 112, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 97, 109, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 97, 109, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 82, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 114, 101, 110, 100, 101, 114, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 70, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 85, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 117, 110, 102, 114, 101, 101, 122, 101, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 32, 61, 62, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 32, 61, 32, 101, 118, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 34, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 34, 111, 110, 68, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 58, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 58, 32, 100, 101, 115, 116, 114, 111, 121, 69, 118, 101, 110, 116, 10, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 99, 111, 109, 109, 97, 110, 100, 115, 32, 61, 32, 123, 10, 32, 32, 32, 32, 103, 101, 116, 68, 111, 116, 76, 111, 116, 116, 105, 101, 73, 110, 115, 116, 97, 110, 99, 101, 83, 116, 97, 116, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 67, 111, 117, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 67, 111, 117, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 76, 111, 97, 100, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 76, 111, 97, 100, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 97, 117, 115, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 97, 117, 115, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 80, 108, 97, 121, 105, 110, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 80, 108, 97, 121, 105, 110, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 83, 116, 111, 112, 112, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 83, 116, 111, 112, 112, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 70, 114, 111, 122, 101, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 70, 114, 111, 122, 101, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 111, 111, 112, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 111, 112, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 111, 100, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 111, 100, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 112, 101, 101, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 112, 101, 101, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 117, 114, 114, 101, 110, 116, 70, 114, 97, 109, 101, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 116, 111, 116, 97, 108, 70, 114, 97, 109, 101, 115, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 100, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 114, 107, 101, 114, 115, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 114, 107, 101, 114, 115, 40, 41, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 65, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 99, 116, 105, 118, 101, 84, 104, 101, 109, 101, 73, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 97, 117, 116, 111, 112, 108, 97, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 117, 116, 111, 112, 108, 97, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 108, 97, 121, 111, 117, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 97, 121, 111, 117, 116, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 103, 109, 101, 110, 116, 68, 117, 114, 97, 116, 105, 111, 110, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 115, 82, 101, 97, 100, 121, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 105, 115, 82, 101, 97, 100, 121, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 97, 110, 105, 102, 101, 115, 116, 58, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 109, 97, 110, 105, 102, 101, 115, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 116, 97, 116, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 97, 121, 111, 117, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 97, 121, 111, 117, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 97, 121, 111, 117, 116, 40, 108, 97, 121, 111, 117, 116, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 103, 101, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 76, 105, 115, 116, 101, 110, 101, 114, 115, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 68, 111, 119, 110, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 110, 116, 101, 114, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 69, 120, 105, 116, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 77, 111, 118, 101, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 111, 115, 116, 80, 111, 105, 110, 116, 101, 114, 85, 112, 69, 118, 101, 110, 116, 40, 120, 44, 32, 121, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 97, 114, 116, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 83, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 40, 115, 116, 97, 116, 101, 77, 97, 99, 104, 105, 110, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 99, 114, 101, 97, 116, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 104, 97, 115, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 97, 108, 114, 101, 97, 100, 121, 32, 101, 120, 105, 115, 116, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 110, 101, 119, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 115, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 44, 32, 105, 110, 115, 116, 97, 110, 99, 101, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 118, 101, 110, 116, 115, 32, 61, 32, 91, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 99, 111, 109, 112, 108, 101, 116, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 97, 109, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 97, 100, 69, 114, 114, 111, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 108, 111, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 97, 117, 115, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 112, 108, 97, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 115, 116, 111, 112, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 100, 101, 115, 116, 114, 111, 121, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 117, 110, 102, 114, 101, 101, 122, 101, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 110, 100, 101, 114, 34, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 34, 114, 101, 97, 100, 121, 34, 10, 32, 32, 32, 32, 32, 32, 93, 59, 10, 32, 32, 32, 32, 32, 32, 101, 118, 101, 110, 116, 115, 46, 102, 111, 114, 69, 97, 99, 104, 40, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 101, 118, 101, 110, 116, 44, 32, 101, 118, 101, 110, 116, 72, 97, 110, 100, 108, 101, 114, 77, 97, 112, 91, 101, 118, 101, 110, 116, 93, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 100, 101, 115, 116, 114, 111, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 114, 101, 116, 117, 114, 110, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 100, 101, 115, 116, 114, 111, 121, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 100, 101, 108, 101, 116, 101, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 99, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 99, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 40, 99, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 65, 110, 105, 109, 97, 116, 105, 111, 110, 40, 97, 110, 105, 109, 97, 116, 105, 111, 110, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 40, 116, 104, 101, 109, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 116, 104, 101, 109, 101, 68, 97, 116, 97, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 116, 104, 101, 109, 101, 68, 97, 116, 97, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 84, 104, 101, 109, 101, 68, 97, 116, 97, 40, 116, 104, 101, 109, 101, 68, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 97, 117, 115, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 97, 117, 115, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 112, 108, 97, 121, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 112, 108, 97, 121, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 114, 101, 115, 105, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 104, 101, 105, 103, 104, 116, 32, 61, 32, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 99, 97, 110, 118, 97, 115, 46, 119, 105, 100, 116, 104, 32, 61, 32, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 115, 105, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 66, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 40, 98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 67, 111, 108, 111, 114, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 70, 114, 97, 109, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 102, 114, 97, 109, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 102, 114, 97, 109, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 40, 102, 114, 97, 109, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 111, 100, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 111, 100, 101, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 111, 100, 101, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 111, 100, 101, 40, 109, 111, 100, 101, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 82, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 40, 114, 101, 110, 100, 101, 114, 67, 111, 110, 102, 105, 103, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 101, 103, 109, 101, 110, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 101, 103, 109, 101, 110, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 101, 103, 109, 101, 110, 116, 40, 115, 101, 103, 109, 101, 110, 116, 91, 48, 93, 44, 32, 115, 101, 103, 109, 101, 110, 116, 91, 49, 93, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 83, 112, 101, 101, 100, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 115, 112, 101, 101, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 115, 112, 101, 101, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 83, 112, 101, 101, 100, 40, 115, 112, 101, 101, 100, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 85, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 40, 117, 115, 101, 70, 114, 97, 109, 101, 73, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 68, 111, 116, 76, 111, 116, 116, 105, 101, 46, 115, 101, 116, 87, 97, 115, 109, 85, 114, 108, 40, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 117, 114, 108, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 116, 111, 112, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 116, 111, 112, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 117, 110, 102, 114, 101, 101, 122, 101, 58, 32, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 117, 110, 102, 114, 101, 101, 122, 101, 40, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 120, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 120, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 121, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 121, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 119, 105, 100, 116, 104, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 119, 105, 100, 116, 104, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 104, 101, 105, 103, 104, 116, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 104, 101, 105, 103, 104, 116, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 86, 105, 101, 119, 112, 111, 114, 116, 40, 120, 44, 32, 121, 44, 32, 119, 105, 100, 116, 104, 44, 32, 104, 101, 105, 103, 104, 116, 41, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 97, 114, 107, 101, 114, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 109, 97, 114, 107, 101, 114, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 77, 97, 114, 107, 101, 114, 40, 109, 97, 114, 107, 101, 114, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 44, 10, 32, 32, 32, 32, 115, 101, 116, 76, 111, 111, 112, 40, 114, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 108, 111, 111, 112, 32, 61, 32, 114, 101, 113, 117, 101, 115, 116, 46, 112, 97, 114, 97, 109, 115, 46, 108, 111, 111, 112, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 105, 110, 115, 116, 97, 110, 99, 101, 32, 61, 32, 105, 110, 115, 116, 97, 110, 99, 101, 115, 77, 97, 112, 46, 103, 101, 116, 40, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 41, 59, 10, 32, 32, 32, 32, 32, 32, 105, 102, 32, 40, 33, 105, 110, 115, 116, 97, 110, 99, 101, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 73, 110, 115, 116, 97, 110, 99, 101, 32, 119, 105, 116, 104, 32, 105, 100, 32, 36, 123, 105, 110, 115, 116, 97, 110, 99, 101, 73, 100, 125, 32, 100, 111, 101, 115, 32, 110, 111, 116, 32, 101, 120, 105, 115, 116, 46, 96, 41, 59, 10, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 32, 32, 105, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 76, 111, 111, 112, 40, 108, 111, 111, 112, 41, 59, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 115, 117, 99, 99, 101, 115, 115, 58, 32, 116, 114, 117, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 32, 123, 10, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 109, 101, 116, 104, 111, 100, 32, 61, 32, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 46, 109, 101, 116, 104, 111, 100, 59, 10, 32, 32, 32, 32, 105, 102, 32, 40, 116, 121, 112, 101, 111, 102, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 32, 61, 61, 61, 32, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 114, 101, 116, 117, 114, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 91, 109, 101, 116, 104, 111, 100, 93, 40, 114, 112, 99, 82, 101, 113, 117, 101, 115, 116, 41, 59, 10, 32, 32, 32, 32, 125, 32, 101, 108, 115, 101, 32, 123, 10, 32, 32, 32, 32, 32, 32, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 77, 101, 116, 104, 111, 100, 32, 36, 123, 109, 101, 116, 104, 111, 100, 125, 32, 105, 115, 32, 110, 111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110, 116, 101, 100, 32, 105, 110, 32, 99, 111, 109, 109, 97, 110, 100, 115, 46, 96, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 10, 32, 32, 115, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97, 103, 101, 32, 61, 32, 40, 101, 118, 101, 110, 116, 41, 32, 61, 62, 32, 123, 10, 32, 32, 32, 32, 116, 114, 121, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 117, 108, 116, 32, 61, 32, 101, 120, 101, 99, 117, 116, 101, 67, 111, 109, 109, 97, 110, 100, 40, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 41, 59, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 114, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 114, 101, 115, 117, 108, 116, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 114, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 32, 99, 97, 116, 99, 104, 32, 40, 101, 114, 114, 111, 114, 41, 32, 123, 10, 32, 32, 32, 32, 32, 32, 99, 111, 110, 115, 116, 32, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 32, 61, 32, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 105, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 105, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 109, 101, 116, 104, 111, 100, 58, 32, 101, 118, 101, 110, 116, 46, 100, 97, 116, 97, 46, 109, 101, 116, 104, 111, 100, 44, 10, 32, 32, 32, 32, 32, 32, 32, 32, 101, 114, 114, 111, 114, 58, 32, 101, 114, 114, 111, 114, 46, 109, 101, 115, 115, 97, 103, 101, 10, 32, 32, 32, 32, 32, 32, 125, 59, 10, 32, 32, 32, 32, 32, 32, 115, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 114, 114, 111, 114, 82, 101, 115, 112, 111, 110, 115, 101, 41, 59, 10, 32, 32, 32, 32, 125, 10, 32, 32, 125, 59, 10, 32, 32, 118, 97, 114, 32, 100, 117, 109, 109, 121, 32, 61, 32, 34, 34, 59, 10, 32, 32, 118, 97, 114, 32, 100, 111, 116, 108, 111, 116, 116, 105, 101, 95, 119, 111, 114, 107, 101, 114, 95, 100, 101, 102, 97, 117, 108, 116, 32, 61, 32, 100, 117, 109, 109, 121, 59, 10, 125, 41, 40, 41, 59, 10])], { type: "application/javascript" }), e = URL.createObjectURL(t), n = new Worker(e);
    return URL.revokeObjectURL(e), n;
  }
}, $9 = A9, N9 = class {
  constructor() {
    W(this, "_workers", /* @__PURE__ */ new Map()), W(this, "_animationWorkerMap", /* @__PURE__ */ new Map());
  }
  getWorker(t) {
    return this._workers.has(t) || this._workers.set(t, new $9()), this._workers.get(t);
  }
  assignAnimationToWorker(t, e) {
    this._animationWorkerMap.set(t, e);
  }
  unassignAnimationFromWorker(t) {
    this._animationWorkerMap.delete(t);
  }
  sendMessage(t, e, n) {
    this.getWorker(t).postMessage(e, n || []);
  }
  terminateWorker(t) {
    let e = this._workers.get(t);
    e && (e.terminate(), this._workers.delete(t));
  }
};
function Z3(t, e) {
  if (t instanceof HTMLCanvasElement) {
    let { height: n, width: o } = t.getBoundingClientRect();
    if (n !== 0 && o !== 0) return { width: o * e, height: n * e };
  }
  return { width: t.width, height: t.height };
}
function e0() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
var t0 = class H1 {
  constructor(e) {
    W(this, "_eventManager", new y0()), W(this, "_id"), W(this, "_worker"), W(this, "_canvas"), W(this, "_dotLottieInstanceState", { loopCount: 0, markers: [], autoplay: !1, backgroundColor: "", currentFrame: 0, duration: 0, loop: !1, mode: "forward", segment: [0, 0], segmentDuration: 0, speed: 1, totalFrames: 0, isLoaded: !1, isPlaying: !1, isPaused: !1, isStopped: !0, isFrozen: !1, useFrameInterpolation: !1, renderConfig: { devicePixelRatio: V1() }, activeAnimationId: "", activeThemeId: "", layout: void 0, marker: void 0, isReady: !1, manifest: null }), W(this, "_created", !1), W(this, "_pointerUpMethod"), W(this, "_pointerDownMethod"), W(this, "_pointerMoveMethod"), W(this, "_pointerEnterMethod"), W(this, "_pointerExitMethod");
    var n, o, i;
    this._canvas = e.canvas, this._id = `dotlottie-${e0()}`;
    let u = e.workerId || "defaultWorker";
    this._worker = H1._workerManager.getWorker(u), H1._workerManager.assignAnimationToWorker(this._id, u), H1._wasmUrl && this._sendMessage("setWasmUrl", { url: H1._wasmUrl }), this._create(v1(o1({}, e), { renderConfig: v1(o1({}, e.renderConfig), { devicePixelRatio: ((n = e.renderConfig) == null ? void 0 : n.devicePixelRatio) || V1(), freezeOnOffscreen: (i = (o = e.renderConfig) == null ? void 0 : o.freezeOnOffscreen) != null ? i : !0 }) })), this._worker.addEventListener("message", this._handleWorkerEvent.bind(this)), this._pointerUpMethod = this._onPointerUp.bind(this), this._pointerDownMethod = this._onPointerDown.bind(this), this._pointerMoveMethod = this._onPointerMove.bind(this), this._pointerEnterMethod = this._onPointerEnter.bind(this), this._pointerExitMethod = this._onPointerLeave.bind(this);
  }
  _handleWorkerEvent(e) {
    return z(this, null, function* () {
      let n = e.data;
      n.id || (n.method === "onLoad" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event), l1 && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && S1.observe(this._canvas, this), this._dotLottieInstanceState.renderConfig.autoResize && M1.observe(this._canvas, this))), n.method === "onComplete" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onDestroy" && n.result.instanceId === this._id && this._eventManager.dispatch(n.result.event), n.method === "onUnfreeze" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._dotLottieInstanceState.isFrozen = !1, this._eventManager.dispatch(n.result.event)), n.method === "onFrame" && n.result.instanceId === this._id && (this._dotLottieInstanceState.currentFrame = n.result.event.currentFrame, this._eventManager.dispatch(n.result.event)), n.method === "onRender" && n.result.instanceId === this._id && this._eventManager.dispatch(n.result.event), n.method === "onFreeze" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onPause" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onPlay" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onStop" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onLoadError" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onReady" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)), n.method === "onLoop" && n.result.instanceId === this._id && (yield this._updateDotLottieInstanceState(), this._eventManager.dispatch(n.result.event)));
    });
  }
  _create(e) {
    return z(this, null, function* () {
      var n;
      let o;
      this._canvas instanceof HTMLCanvasElement ? o = this._canvas.transferControlToOffscreen() : o = this._canvas;
      let { instanceId: i } = yield this._sendMessage("create", o1({ instanceId: this._id, config: v1(o1({}, e), { canvas: o }) }, Z3(this._canvas, ((n = e.renderConfig) == null ? void 0 : n.devicePixelRatio) || V1())), [o]);
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
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("play", { instanceId: this._id }), yield this._updateDotLottieInstanceState(), l1 && this._canvas instanceof HTMLCanvasElement && this._dotLottieInstanceState.renderConfig.freezeOnOffscreen && !_0(this._canvas) && (yield this.freeze()));
    });
  }
  pause() {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("pause", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  stop() {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("stop", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setSpeed(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setSpeed", { instanceId: this._id, speed: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setMode(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setMode", { instanceId: this._id, mode: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setFrame(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setFrame", { frame: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setSegment(e, n) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setSegment", { instanceId: this._id, segment: [e, n] }), yield this._updateDotLottieInstanceState());
    });
  }
  setRenderConfig(e) {
    return z(this, null, function* () {
      if (!this._created) return;
      let n = e, { devicePixelRatio: o, freezeOnOffscreen: i } = n, u = p0(n, ["devicePixelRatio", "freezeOnOffscreen"]);
      yield this._sendMessage("setRenderConfig", { instanceId: this._id, renderConfig: v1(o1(o1({}, this._dotLottieInstanceState.renderConfig), u), { devicePixelRatio: o || V1(), freezeOnOffscreen: i ?? !0 }) }), yield this._updateDotLottieInstanceState(), l1 && this._canvas instanceof HTMLCanvasElement && (this._dotLottieInstanceState.renderConfig.autoResize ? M1.observe(this._canvas, this) : M1.unobserve(this._canvas), this._dotLottieInstanceState.renderConfig.freezeOnOffscreen ? S1.observe(this._canvas, this) : (S1.unobserve(this._canvas), this._dotLottieInstanceState.isFrozen && (yield this.unfreeze())));
    });
  }
  setUseFrameInterpolation(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setUseFrameInterpolation", { instanceId: this._id, useFrameInterpolation: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setTheme(e) {
    return z(this, null, function* () {
      if (!this._created) return !1;
      let n = this._sendMessage("setTheme", { instanceId: this._id, themeId: e });
      return yield this._updateDotLottieInstanceState(), n;
    });
  }
  load(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("load", { config: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setLoop(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setLoop", { instanceId: this._id, loop: e }), yield this._updateDotLottieInstanceState());
    });
  }
  resize() {
    return z(this, null, function* () {
      if (!this._created) return;
      let { height: e, width: n } = Z3(this._canvas, this._dotLottieInstanceState.renderConfig.devicePixelRatio || V1());
      yield this._sendMessage("resize", { height: e, instanceId: this._id, width: n }), yield this._updateDotLottieInstanceState();
    });
  }
  destroy() {
    return z(this, null, function* () {
      this._created && (this._created = !1, yield this._sendMessage("destroy", { instanceId: this._id }), this._cleanupStateMachineListeners(), H1._workerManager.unassignAnimationFromWorker(this._id), this._eventManager.removeAllEventListeners(), l1 && this._canvas instanceof HTMLCanvasElement && (S1.unobserve(this._canvas), M1.unobserve(this._canvas)));
    });
  }
  freeze() {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("freeze", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  unfreeze() {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("unfreeze", { instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setBackgroundColor(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setBackgroundColor", { instanceId: this._id, backgroundColor: e }), yield this._updateDotLottieInstanceState());
    });
  }
  loadAnimation(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("loadAnimation", { animationId: e, instanceId: this._id }), yield this._updateDotLottieInstanceState());
    });
  }
  setLayout(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setLayout", { instanceId: this._id, layout: e }), yield this._updateDotLottieInstanceState());
    });
  }
  _updateDotLottieInstanceState() {
    return z(this, null, function* () {
      if (!this._created) return;
      let e = yield this._sendMessage("getDotLottieInstanceState", { instanceId: this._id });
      this._dotLottieInstanceState = e.state;
    });
  }
  markers() {
    return this._dotLottieInstanceState.markers;
  }
  setMarker(e) {
    return z(this, null, function* () {
      this._created && (yield this._sendMessage("setMarker", { instanceId: this._id, marker: e }), yield this._updateDotLottieInstanceState());
    });
  }
  setThemeData(e) {
    return z(this, null, function* () {
      if (!this._created) return !1;
      let n = yield this._sendMessage("setThemeData", { instanceId: this._id, themeData: e });
      return yield this._updateDotLottieInstanceState(), n;
    });
  }
  setViewport(e, n, o, i) {
    return z(this, null, function* () {
      return this._created ? this._sendMessage("setViewport", { x: e, y: n, width: o, height: i, instanceId: this._id }) : !1;
    });
  }
  _sendMessage(e, n, o) {
    return z(this, null, function* () {
      let i = { id: `dotlottie-request-${e0()}`, method: e, params: n };
      return this._worker.postMessage(i, o || []), new Promise((u, m) => {
        let h = (v) => {
          let p = v.data;
          p.id === i.id && (this._worker.removeEventListener("message", h), p.error ? m(new Error(`Failed to execute method ${e}: ${p.error}`)) : u(p.result));
        };
        this._worker.addEventListener("message", h);
      });
    });
  }
  addEventListener(e, n) {
    this._eventManager.addEventListener(e, n);
  }
  removeEventListener(e, n) {
    this._eventManager.removeEventListener(e, n);
  }
  static setWasmUrl(e) {
    H1._wasmUrl = e;
  }
  loadStateMachine(e) {
    return z(this, null, function* () {
      if (!this._created) return !1;
      let n = yield this._sendMessage("loadStateMachine", { instanceId: this._id, stateMachineId: e });
      return yield this._updateDotLottieInstanceState(), n;
    });
  }
  loadStateMachineData(e) {
    return z(this, null, function* () {
      if (!this._created) return !1;
      let n = yield this._sendMessage("loadStateMachineData", { instanceId: this._id, stateMachineData: e });
      return yield this._updateDotLottieInstanceState(), n;
    });
  }
  startStateMachine() {
    return z(this, null, function* () {
      if (!this._created) return !1;
      this._setupStateMachineListeners();
      let e = yield this._sendMessage("startStateMachine", { instanceId: this._id });
      return yield this._updateDotLottieInstanceState(), e;
    });
  }
  stopStateMachine() {
    return z(this, null, function* () {
      return this._created ? (this._cleanupStateMachineListeners(), this._sendMessage("stopStateMachine", { instanceId: this._id })) : !1;
    });
  }
  getStateMachineListeners() {
    return z(this, null, function* () {
      return this._created ? this._sendMessage("getStateMachineListeners", { instanceId: this._id }) : [];
    });
  }
  _getPointerPosition(e) {
    let n = this._canvas.getBoundingClientRect(), o = this._canvas.width / n.width, i = this._canvas.height / n.height, u = this._dotLottieInstanceState.renderConfig.devicePixelRatio || window.devicePixelRatio || 1, m = (e.clientX - n.left) * o / u, h = (e.clientY - n.top) * i / u;
    return { x: m, y: h };
  }
  _onPointerUp(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this._sendMessage("postPointerUpEvent", { instanceId: this._id, x: n, y: o });
  }
  _onPointerDown(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this._sendMessage("postPointerDownEvent", { instanceId: this._id, x: n, y: o });
  }
  _onPointerMove(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this._sendMessage("postPointerMoveEvent", { instanceId: this._id, x: n, y: o });
  }
  _onPointerEnter(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this._sendMessage("postPointerEnterEvent", { instanceId: this._id, x: n, y: o });
  }
  _onPointerLeave(e) {
    let { x: n, y: o } = this._getPointerPosition(e);
    this._sendMessage("postPointerExitEvent", { instanceId: this._id, x: n, y: o });
  }
  _setupStateMachineListeners() {
    return z(this, null, function* () {
      if (l1 && this._canvas instanceof HTMLCanvasElement && this.isLoaded) {
        let e = yield this._sendMessage("getStateMachineListeners", { instanceId: this._id });
        e.includes("PointerUp") && this._canvas.addEventListener("pointerup", this._pointerUpMethod), e.includes("PointerDown") && this._canvas.addEventListener("pointerdown", this._pointerDownMethod), e.includes("PointerMove") && this._canvas.addEventListener("pointermove", this._pointerMoveMethod), e.includes("PointerEnter") && this._canvas.addEventListener("pointerenter", this._pointerEnterMethod), e.includes("PointerExit") && this._canvas.addEventListener("pointerleave", this._pointerExitMethod);
      }
    });
  }
  _cleanupStateMachineListeners() {
    l1 && this._canvas instanceof HTMLCanvasElement && (this._canvas.removeEventListener("pointerup", this._pointerUpMethod), this._canvas.removeEventListener("pointerdown", this._pointerDownMethod), this._canvas.removeEventListener("pointermove", this._pointerMoveMethod), this._canvas.removeEventListener("pointerenter", this._pointerEnterMethod), this._canvas.removeEventListener("pointerleave", this._pointerExitMethod));
  }
};
W(t0, "_workerManager", new N9()), W(t0, "_wasmUrl", "");
var W9 = ({ animationId: t, autoplay: e, backgroundColor: n, className: o, createDotLottie: i, data: u, dotLottieRefCallback: m, layout: h, loop: v, mode: p, playOnHover: x, renderConfig: b, segment: g, speed: C, src: _, style: L, themeData: R, themeId: d, useFrameInterpolation: P, workerId: j, ...N }) => {
  let [F, A] = C1(null), D = C2(null), $ = C2(null), H = C2(m), J = { speed: C, mode: p, loop: v, useFrameInterpolation: P, segment: g, backgroundColor: n, autoplay: e, themeId: d, workerId: j, src: _, data: u, layout: h, renderConfig: b }, e1 = C2(J);
  H.current = m, $.current = F, e1.current = J, K(() => {
    typeof H.current == "function" && F && H.current(F);
  }, [F]);
  let P1 = j4((O) => {
    if (D.current = O, O) {
      let I1 = i({ ...e1.current, canvas: O });
      A(I1);
    } else F == null || F.destroy(), A(null);
  }, []);
  return K(() => {
    var I1, g1;
    let O = (h1) => {
      var y1, $1;
      x && (h1.type === "mouseenter" && ((y1 = $.current) == null || y1.play()), h1.type === "mouseleave" && (($1 = $.current) == null || $1.pause()));
    };
    return (I1 = D.current) == null || I1.addEventListener("mouseenter", O), (g1 = D.current) == null || g1.addEventListener("mouseleave", O), () => {
      var h1, y1;
      (h1 = D.current) == null || h1.removeEventListener("mouseenter", O), (y1 = D.current) == null || y1.removeEventListener("mouseleave", O);
    };
  }, [x]), K(() => () => {
    F && (F.destroy(), A(null));
  }, [F]), K(() => {
    var O;
    (O = $.current) == null || O.setSpeed(C ?? 1);
  }, [C]), K(() => {
    var O;
    (O = $.current) == null || O.setMode(p ?? "forward");
  }, [p]), K(() => {
    var O;
    (O = $.current) == null || O.setLoop(v ?? !1);
  }, [v]), K(() => {
    var O;
    (O = $.current) == null || O.setUseFrameInterpolation(P ?? !0);
  }, [P]), K(() => {
    var O;
    typeof (g == null ? void 0 : g[0]) == "number" && typeof g[1] == "number" && ((O = $.current) == null || O.setSegment(g[0], g[1]));
  }, [g]), K(() => {
    var O;
    (O = $.current) == null || O.setBackgroundColor(n ?? "");
  }, [n]), K(() => {
    var O;
    (O = $.current) == null || O.setRenderConfig(b ?? {});
  }, [JSON.stringify(b)]), K(() => {
    var O;
    typeof u != "string" && typeof u != "object" || ((O = $.current) == null || O.load({ data: u, ...e1.current }));
  }, [u]), K(() => {
    var O;
    typeof _ == "string" && ((O = $.current) == null || O.load({ src: _, ...e1.current }));
  }, [_]), K(() => {
    var O;
    (O = $.current) == null || O.setMarker(N.marker ?? "");
  }, [N.marker]), K(() => {
    var O;
    (O = $.current) == null || O.loadAnimation(t ?? "");
  }, [t]), K(() => {
    var O;
    typeof d == "string" && ((O = $.current) == null || O.setTheme(d));
  }, [d]), K(() => {
    var O;
    (O = $.current) == null || O.setThemeData(R ?? "");
  }, [R]), K(() => {
    var O;
    (O = $.current) == null || O.setLayout(h ?? {});
  }, [h == null ? void 0 : h.fit, (h == null ? void 0 : h.align) && h.align[0], (h == null ? void 0 : h.align) && h.align[1]]), f.jsx("div", { className: o, ...!o && { style: { width: "100%", height: "100%", lineHeight: 0, ...L } }, children: f.jsx("canvas", { ref: P1, style: { width: "100%", height: "100%" }, ...N }) });
}, U9 = (t) => new O9(t), q9 = (t) => f.jsx(W9, { ...t, createDotLottie: U9 });
const oe = ({
  message: t = "Page not found",
  styles: e = {}
}) => {
  const [n, o] = C1(""), {
    primaryColor: i = "#0055FF",
    secondaryColor: u = "#E0EBFF",
    textColor: m = "white",
    backgroundColor: h = "#ffffff",
    borderColor: v = "#cbd5e0",
    inputFocusColor: p = "#0055FF"
  } = e, x = (b) => {
    b.preventDefault(), n.trim() && (window.location.href = `/find-jobs?search=${encodeURIComponent(
      n
    )}`);
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      style: {
        ...G9,
        backgroundColor: h,
        fontFamily: "Arial, sans-serif"
      },
      children: [
        /* @__PURE__ */ f.jsx(
          q9,
          {
            style: J9,
            autoplay: !0,
            loop: !0,
            src: "https://lottie.host/d1f4afd3-53fc-429b-838e-93f7070b4c62/hQBV6RREpn.lottie"
          }
        ),
        /* @__PURE__ */ f.jsx("h1", { style: { ...Y9, color: i }, children: "404" }),
        /* @__PURE__ */ f.jsx("p", { style: K9, children: t }),
        /* @__PURE__ */ f.jsxs("form", { style: z9, onSubmit: x, children: [
          /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              value: n,
              onChange: (b) => o(b.target.value),
              placeholder: "Search for jobs...",
              style: {
                ...B9,
                borderColor: v
              }
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              type: "submit",
              style: {
                ...H9,
                backgroundColor: u,
                color: i
              },
              children: "Search"
            }
          )
        ] }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            style: {
              ...V9,
              backgroundColor: i,
              color: m
            },
            onClick: () => window.location.href = "/",
            children: "Return Home"
          }
        ),
        /* @__PURE__ */ f.jsx("style", { children: `
        input:focus-visible {
          outline: 2px solid ${p} !important;
          border-color: ${p};
        }
      ` })
      ]
    }
  );
}, z9 = {
  display: "flex",
  position: "relative",
  gap: "0.5rem",
  marginTop: "1rem",
  maxWidth: "320px",
  width: "100%"
}, B9 = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "4px",
  border: "1px solid",
  fontSize: "1rem"
}, H9 = {
  position: "absolute",
  height: "100%",
  right: "0",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
  fontSize: "1rem",
  transition: "background-color 0.2s"
}, V9 = {
  marginTop: "2rem",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
}, G9 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center"
}, J9 = {
  height: "320px",
  width: "320px"
}, Y9 = {
  fontSize: "3rem",
  fontWeight: "bold",
  margin: "0"
}, K9 = {
  fontSize: "1.25rem",
  color: "#4a5568",
  marginTop: "1rem"
}, T2 = ({
  title: t,
  description: e,
  inputValue: n,
  onInputChange: o,
  onSearchSubmit: i,
  placeholder: u = "Search answer or question",
  redirectToFaq: m = !1,
  basePath: h = "/"
}) => {
  const v = (p) => {
    p.preventDefault(), i ? i() : m && n.trim() && window.location.assign(`${h}?search=${encodeURIComponent(n.trim())}`);
  };
  return /* @__PURE__ */ f.jsxs("div", { className: W1.banner, children: [
    /* @__PURE__ */ f.jsx("div", { className: W1.bannerOverlay }),
    /* @__PURE__ */ f.jsxs("div", { className: W1.bannerContent, children: [
      /* @__PURE__ */ f.jsx("h1", { className: W1.bannerTitle, children: t }),
      e && /* @__PURE__ */ f.jsx("p", { className: W1.bannerDescription, children: e }),
      /* @__PURE__ */ f.jsxs("form", { onSubmit: v, className: W1.searchBar, children: [
        /* @__PURE__ */ f.jsx(
          "svg",
          {
            className: W1.searchIcon,
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /* @__PURE__ */ f.jsx(
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
        /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "text",
            className: W1.searchInput,
            value: n,
            onChange: o ? (p) => o(p.target.value) : void 0,
            placeholder: u
          }
        )
      ] })
    ] })
  ] });
};
var u2 = {}, n0;
function Q9() {
  if (n0) return u2;
  n0 = 1, Object.defineProperty(u2, "__esModule", { value: !0 }), u2.parse = m, u2.serialize = p;
  const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, e = /^[\u0021-\u003A\u003C-\u007E]*$/, n = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, i = Object.prototype.toString, u = /* @__PURE__ */ (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function m(g, C) {
    const _ = new u(), L = g.length;
    if (L < 2)
      return _;
    const R = (C == null ? void 0 : C.decode) || x;
    let d = 0;
    do {
      const P = g.indexOf("=", d);
      if (P === -1)
        break;
      const j = g.indexOf(";", d), N = j === -1 ? L : j;
      if (P > N) {
        d = g.lastIndexOf(";", P - 1) + 1;
        continue;
      }
      const F = h(g, d, P), A = v(g, P, F), D = g.slice(F, A);
      if (_[D] === void 0) {
        let $ = h(g, P + 1, N), H = v(g, N, $);
        const J = R(g.slice($, H));
        _[D] = J;
      }
      d = N + 1;
    } while (d < L);
    return _;
  }
  function h(g, C, _) {
    do {
      const L = g.charCodeAt(C);
      if (L !== 32 && L !== 9)
        return C;
    } while (++C < _);
    return _;
  }
  function v(g, C, _) {
    for (; C > _; ) {
      const L = g.charCodeAt(--C);
      if (L !== 32 && L !== 9)
        return C + 1;
    }
    return _;
  }
  function p(g, C, _) {
    const L = (_ == null ? void 0 : _.encode) || encodeURIComponent;
    if (!t.test(g))
      throw new TypeError(`argument name is invalid: ${g}`);
    const R = L(C);
    if (!e.test(R))
      throw new TypeError(`argument val is invalid: ${C}`);
    let d = g + "=" + R;
    if (!_)
      return d;
    if (_.maxAge !== void 0) {
      if (!Number.isInteger(_.maxAge))
        throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);
      d += "; Max-Age=" + _.maxAge;
    }
    if (_.domain) {
      if (!n.test(_.domain))
        throw new TypeError(`option domain is invalid: ${_.domain}`);
      d += "; Domain=" + _.domain;
    }
    if (_.path) {
      if (!o.test(_.path))
        throw new TypeError(`option path is invalid: ${_.path}`);
      d += "; Path=" + _.path;
    }
    if (_.expires) {
      if (!b(_.expires) || !Number.isFinite(_.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${_.expires}`);
      d += "; Expires=" + _.expires.toUTCString();
    }
    if (_.httpOnly && (d += "; HttpOnly"), _.secure && (d += "; Secure"), _.partitioned && (d += "; Partitioned"), _.priority)
      switch (typeof _.priority == "string" ? _.priority.toLowerCase() : void 0) {
        case "low":
          d += "; Priority=Low";
          break;
        case "medium":
          d += "; Priority=Medium";
          break;
        case "high":
          d += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${_.priority}`);
      }
    if (_.sameSite)
      switch (typeof _.sameSite == "string" ? _.sameSite.toLowerCase() : _.sameSite) {
        case !0:
        case "strict":
          d += "; SameSite=Strict";
          break;
        case "lax":
          d += "; SameSite=Lax";
          break;
        case "none":
          d += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${_.sameSite}`);
      }
    return d;
  }
  function x(g) {
    if (g.indexOf("%") === -1)
      return g;
    try {
      return decodeURIComponent(g);
    } catch {
      return g;
    }
  }
  function b(g) {
    return i.call(g) === "[object Date]";
  }
  return u2;
}
Q9();
/**
 * react-router v7.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function s1(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
function T1(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {
    }
  }
}
function h3({
  pathname: t = "/",
  search: e = "",
  hash: n = ""
}) {
  return e && e !== "?" && (t += e.charAt(0) === "?" ? e : "?" + e), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function v3(t) {
  let e = {};
  if (t) {
    let n = t.indexOf("#");
    n >= 0 && (e.hash = t.substring(n), t = t.substring(0, n));
    let o = t.indexOf("?");
    o >= 0 && (e.search = t.substring(o), t = t.substring(0, o)), t && (e.pathname = t);
  }
  return e;
}
function b0(t, e, n = "/") {
  return X9(t, e, n, !1);
}
function X9(t, e, n, o) {
  let i = typeof e == "string" ? v3(e) : e, u = U1(i.pathname || "/", n);
  if (u == null)
    return null;
  let m = C0(t);
  Z9(m);
  let h = null;
  for (let v = 0; h == null && v < m.length; ++v) {
    let p = c6(u);
    h = l6(
      m[v],
      p,
      o
    );
  }
  return h;
}
function C0(t, e = [], n = [], o = "") {
  let i = (u, m, h) => {
    let v = {
      relativePath: h === void 0 ? u.path || "" : h,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: m,
      route: u
    };
    v.relativePath.startsWith("/") && (s1(
      v.relativePath.startsWith(o),
      `Absolute route path "${v.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), v.relativePath = v.relativePath.slice(o.length));
    let p = D1([o, v.relativePath]), x = n.concat(v);
    u.children && u.children.length > 0 && (s1(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      u.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
    ), C0(u.children, e, x, p)), !(u.path == null && !u.index) && e.push({
      path: p,
      score: o6(p, u.index),
      routesMeta: x
    });
  };
  return t.forEach((u, m) => {
    var h;
    if (u.path === "" || !((h = u.path) != null && h.includes("?")))
      i(u, m);
    else
      for (let v of x0(u.path))
        i(u, m, v);
  }), e;
}
function x0(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [n, ...o] = e, i = n.endsWith("?"), u = n.replace(/\?$/, "");
  if (o.length === 0)
    return i ? [u, ""] : [u];
  let m = x0(o.join("/")), h = [];
  return h.push(
    ...m.map(
      (v) => v === "" ? u : [u, v].join("/")
    )
  ), i && h.push(...m), h.map(
    (v) => t.startsWith("/") && v === "" ? "/" : v
  );
}
function Z9(t) {
  t.sort(
    (e, n) => e.score !== n.score ? n.score - e.score : s6(
      e.routesMeta.map((o) => o.childrenIndex),
      n.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var e6 = /^:[\w-]+$/, t6 = 3, n6 = 2, r6 = 1, a6 = 10, i6 = -2, r0 = (t) => t === "*";
function o6(t, e) {
  let n = t.split("/"), o = n.length;
  return n.some(r0) && (o += i6), e && (o += n6), n.filter((i) => !r0(i)).reduce(
    (i, u) => i + (e6.test(u) ? t6 : u === "" ? r6 : a6),
    o
  );
}
function s6(t, e) {
  return t.length === e.length && t.slice(0, -1).every((o, i) => o === e[i]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - e[e.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function l6(t, e, n = !1) {
  let { routesMeta: o } = t, i = {}, u = "/", m = [];
  for (let h = 0; h < o.length; ++h) {
    let v = o[h], p = h === o.length - 1, x = u === "/" ? e : e.slice(u.length) || "/", b = R2(
      { path: v.relativePath, caseSensitive: v.caseSensitive, end: p },
      x
    ), g = v.route;
    if (!b && p && n && !o[o.length - 1].route.index && (b = R2(
      {
        path: v.relativePath,
        caseSensitive: v.caseSensitive,
        end: !1
      },
      x
    )), !b)
      return null;
    Object.assign(i, b.params), m.push({
      // TODO: Can this as be avoided?
      params: i,
      pathname: D1([u, b.pathname]),
      pathnameBase: m6(
        D1([u, b.pathnameBase])
      ),
      route: g
    }), b.pathnameBase !== "/" && (u = D1([u, b.pathnameBase]));
  }
  return m;
}
function R2(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [n, o] = u6(
    t.path,
    t.caseSensitive,
    t.end
  ), i = e.match(n);
  if (!i) return null;
  let u = i[0], m = u.replace(/(.)\/+$/, "$1"), h = i.slice(1);
  return {
    params: o.reduce(
      (p, { paramName: x, isOptional: b }, g) => {
        if (x === "*") {
          let _ = h[g] || "";
          m = u.slice(0, u.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const C = h[g];
        return b && !C ? p[x] = void 0 : p[x] = (C || "").replace(/%2F/g, "/"), p;
      },
      {}
    ),
    pathname: u,
    pathnameBase: m,
    pattern: t
  };
}
function u6(t, e = !1, n = !0) {
  T1(
    t === "*" || !t.endsWith("*") || t.endsWith("/*"),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`
  );
  let o = [], i = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, h, v) => (o.push({ paramName: h, isOptional: v != null }), v ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return t.endsWith("*") ? (o.push({ paramName: "*" }), i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, e ? void 0 : "i"), o];
}
function c6(t) {
  try {
    return t.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
  } catch (e) {
    return T1(
      !1,
      `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
    ), t;
  }
}
function U1(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase()))
    return null;
  let n = e.endsWith("/") ? e.length - 1 : e.length, o = t.charAt(n);
  return o && o !== "/" ? null : t.slice(n) || "/";
}
function h6(t, e = "/") {
  let {
    pathname: n,
    search: o = "",
    hash: i = ""
  } = typeof t == "string" ? v3(t) : t;
  return {
    pathname: n ? n.startsWith("/") ? n : d6(n, e) : e,
    search: p6(o),
    hash: v6(i)
  };
}
function d6(t, e) {
  let n = e.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((i) => {
    i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
  }), n.length > 1 ? n.join("/") : "/";
}
function s3(t, e, n, o) {
  return `Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function f6(t) {
  return t.filter(
    (e, n) => n === 0 || e.route.path && e.route.path.length > 0
  );
}
function L0(t) {
  let e = f6(t);
  return e.map(
    (n, o) => o === e.length - 1 ? n.pathname : n.pathnameBase
  );
}
function k0(t, e, n, o = !1) {
  let i;
  typeof t == "string" ? i = v3(t) : (i = { ...t }, s1(
    !i.pathname || !i.pathname.includes("?"),
    s3("?", "pathname", "search", i)
  ), s1(
    !i.pathname || !i.pathname.includes("#"),
    s3("#", "pathname", "hash", i)
  ), s1(
    !i.search || !i.search.includes("#"),
    s3("#", "search", "hash", i)
  ));
  let u = t === "" || i.pathname === "", m = u ? "/" : i.pathname, h;
  if (m == null)
    h = n;
  else {
    let b = e.length - 1;
    if (!o && m.startsWith("..")) {
      let g = m.split("/");
      for (; g[0] === ".."; )
        g.shift(), b -= 1;
      i.pathname = g.join("/");
    }
    h = b >= 0 ? e[b] : "/";
  }
  let v = h6(i, h), p = m && m !== "/" && m.endsWith("/"), x = (u || m === ".") && n.endsWith("/");
  return !v.pathname.endsWith("/") && (p || x) && (v.pathname += "/"), v;
}
var D1 = (t) => t.join("/").replace(/\/\/+/g, "/"), m6 = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), p6 = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, v6 = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function g6(t) {
  return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t;
}
var I0 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  I0
);
var y6 = [
  "GET",
  ...I0
];
new Set(y6);
var K1 = I.createContext(null);
K1.displayName = "DataRouter";
var F2 = I.createContext(null);
F2.displayName = "DataRouterState";
var E0 = I.createContext({
  isTransitioning: !1
});
E0.displayName = "ViewTransition";
var _6 = I.createContext(
  /* @__PURE__ */ new Map()
);
_6.displayName = "Fetchers";
var w6 = I.createContext(null);
w6.displayName = "Await";
var F1 = I.createContext(
  null
);
F1.displayName = "Navigation";
var g3 = I.createContext(
  null
);
g3.displayName = "Location";
var O1 = I.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
O1.displayName = "Route";
var y3 = I.createContext(null);
y3.displayName = "RouteError";
function b6(t, { relative: e } = {}) {
  s1(
    O2(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: n, navigator: o } = I.useContext(F1), { hash: i, pathname: u, search: m } = d2(t, { relative: e }), h = u;
  return n !== "/" && (h = u === "/" ? n : D1([n, u])), o.createHref({ pathname: h, search: m, hash: i });
}
function O2() {
  return I.useContext(g3) != null;
}
function A1() {
  return s1(
    O2(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), I.useContext(g3).location;
}
var S0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function M0(t) {
  I.useContext(F1).static || I.useLayoutEffect(t);
}
function _3() {
  let { isDataRoute: t } = I.useContext(O1);
  return t ? T6() : C6();
}
function C6() {
  s1(
    O2(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let t = I.useContext(K1), { basename: e, navigator: n } = I.useContext(F1), { matches: o } = I.useContext(O1), { pathname: i } = A1(), u = JSON.stringify(L0(o)), m = I.useRef(!1);
  return M0(() => {
    m.current = !0;
  }), I.useCallback(
    (v, p = {}) => {
      if (T1(m.current, S0), !m.current) return;
      if (typeof v == "number") {
        n.go(v);
        return;
      }
      let x = k0(
        v,
        JSON.parse(u),
        i,
        p.relative === "path"
      );
      t == null && e !== "/" && (x.pathname = x.pathname === "/" ? e : D1([e, x.pathname])), (p.replace ? n.replace : n.push)(
        x,
        p.state,
        p
      );
    },
    [
      e,
      n,
      u,
      i,
      t
    ]
  );
}
I.createContext(null);
function d2(t, { relative: e } = {}) {
  let { matches: n } = I.useContext(O1), { pathname: o } = A1(), i = JSON.stringify(L0(n));
  return I.useMemo(
    () => k0(
      t,
      JSON.parse(i),
      o,
      e === "path"
    ),
    [t, i, o, e]
  );
}
function x6(t, e, n, o) {
  s1(
    O2(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: i } = I.useContext(F1), { matches: u } = I.useContext(O1), m = u[u.length - 1], h = m ? m.params : {}, v = m ? m.pathname : "/", p = m ? m.pathnameBase : "/", x = m && m.route;
  {
    let d = x && x.path || "";
    P0(
      v,
      !x || d.endsWith("*") || d.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d === "/" ? "*" : `${d}/*`}">.`
    );
  }
  let b = A1(), g;
  g = b;
  let C = g.pathname || "/", _ = C;
  if (p !== "/") {
    let d = p.replace(/^\//, "").split("/");
    _ = "/" + C.replace(/^\//, "").split("/").slice(d.length).join("/");
  }
  let L = b0(t, { pathname: _ });
  return T1(
    x || L != null,
    `No routes matched location "${g.pathname}${g.search}${g.hash}" `
  ), T1(
    L == null || L[L.length - 1].route.element !== void 0 || L[L.length - 1].route.Component !== void 0 || L[L.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), S6(
    L && L.map(
      (d) => Object.assign({}, d, {
        params: Object.assign({}, h, d.params),
        pathname: D1([
          p,
          // Re-encode pathnames that were decoded inside matchRoutes
          i.encodeLocation ? i.encodeLocation(d.pathname).pathname : d.pathname
        ]),
        pathnameBase: d.pathnameBase === "/" ? p : D1([
          p,
          // Re-encode pathnames that were decoded inside matchRoutes
          i.encodeLocation ? i.encodeLocation(d.pathnameBase).pathname : d.pathnameBase
        ])
      })
    ),
    u,
    n,
    o
  );
}
function L6() {
  let t = D6(), e = g6(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t), n = t instanceof Error ? t.stack : null, o = "rgba(200,200,200, 0.5)", i = { padding: "0.5rem", backgroundColor: o }, u = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    t
  ), m = /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ I.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ I.createElement("code", { style: u }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ I.createElement("code", { style: u }, "errorElement"), " prop on your route.")), /* @__PURE__ */ I.createElement(I.Fragment, null, /* @__PURE__ */ I.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ I.createElement("h3", { style: { fontStyle: "italic" } }, e), n ? /* @__PURE__ */ I.createElement("pre", { style: i }, n) : null, m);
}
var k6 = /* @__PURE__ */ I.createElement(L6, null), I6 = class extends I.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      revalidation: t.revalidation,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, e) {
    return e.location !== t.location || e.revalidation !== "idle" && t.revalidation === "idle" ? {
      error: t.error,
      location: t.location,
      revalidation: t.revalidation
    } : {
      error: t.error !== void 0 ? t.error : e.error,
      location: e.location,
      revalidation: t.revalidation || e.revalidation
    };
  }
  componentDidCatch(t, e) {
    console.error(
      "React Router caught the following error during render",
      t,
      e
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ I.createElement(O1.Provider, { value: this.props.routeContext }, /* @__PURE__ */ I.createElement(
      y3.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function E6({ routeContext: t, match: e, children: n }) {
  let o = I.useContext(K1);
  return o && o.static && o.staticContext && (e.route.errorElement || e.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = e.route.id), /* @__PURE__ */ I.createElement(O1.Provider, { value: t }, n);
}
function S6(t, e = [], n = null, o = null) {
  if (t == null) {
    if (!n)
      return null;
    if (n.errors)
      t = n.matches;
    else if (e.length === 0 && !n.initialized && n.matches.length > 0)
      t = n.matches;
    else
      return null;
  }
  let i = t, u = n == null ? void 0 : n.errors;
  if (u != null) {
    let v = i.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    s1(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ), i = i.slice(
      0,
      Math.min(i.length, v + 1)
    );
  }
  let m = !1, h = -1;
  if (n)
    for (let v = 0; v < i.length; v++) {
      let p = i[v];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (h = v), p.route.id) {
        let { loaderData: x, errors: b } = n, g = p.route.loader && !x.hasOwnProperty(p.route.id) && (!b || b[p.route.id] === void 0);
        if (p.route.lazy || g) {
          m = !0, h >= 0 ? i = i.slice(0, h + 1) : i = [i[0]];
          break;
        }
      }
    }
  return i.reduceRight((v, p, x) => {
    let b, g = !1, C = null, _ = null;
    n && (b = u && p.route.id ? u[p.route.id] : void 0, C = p.route.errorElement || k6, m && (h < 0 && x === 0 ? (P0(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), g = !0, _ = null) : h === x && (g = !0, _ = p.route.hydrateFallbackElement || null)));
    let L = e.concat(i.slice(0, x + 1)), R = () => {
      let d;
      return b ? d = C : g ? d = _ : p.route.Component ? d = /* @__PURE__ */ I.createElement(p.route.Component, null) : p.route.element ? d = p.route.element : d = v, /* @__PURE__ */ I.createElement(
        E6,
        {
          match: p,
          routeContext: {
            outlet: v,
            matches: L,
            isDataRoute: n != null
          },
          children: d
        }
      );
    };
    return n && (p.route.ErrorBoundary || p.route.errorElement || x === 0) ? /* @__PURE__ */ I.createElement(
      I6,
      {
        location: n.location,
        revalidation: n.revalidation,
        component: C,
        error: b,
        children: R(),
        routeContext: { outlet: null, matches: L, isDataRoute: !0 }
      }
    ) : R();
  }, null);
}
function w3(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function M6(t) {
  let e = I.useContext(K1);
  return s1(e, w3(t)), e;
}
function P6(t) {
  let e = I.useContext(F2);
  return s1(e, w3(t)), e;
}
function j6(t) {
  let e = I.useContext(O1);
  return s1(e, w3(t)), e;
}
function b3(t) {
  let e = j6(t), n = e.matches[e.matches.length - 1];
  return s1(
    n.route.id,
    `${t} can only be used on routes that contain a unique "id"`
  ), n.route.id;
}
function R6() {
  return b3(
    "useRouteId"
    /* UseRouteId */
  );
}
function D6() {
  var o;
  let t = I.useContext(y3), e = P6(
    "useRouteError"
    /* UseRouteError */
  ), n = b3(
    "useRouteError"
    /* UseRouteError */
  );
  return t !== void 0 ? t : (o = e.errors) == null ? void 0 : o[n];
}
function T6() {
  let { router: t } = M6(
    "useNavigate"
    /* UseNavigateStable */
  ), e = b3(
    "useNavigate"
    /* UseNavigateStable */
  ), n = I.useRef(!1);
  return M0(() => {
    n.current = !0;
  }), I.useCallback(
    async (i, u = {}) => {
      T1(n.current, S0), n.current && (typeof i == "number" ? t.navigate(i) : await t.navigate(i, { fromRouteId: e, ...u }));
    },
    [t, e]
  );
}
var a0 = {};
function P0(t, e, n) {
  !e && !a0[t] && (a0[t] = !0, T1(!1, n));
}
I.memo(F6);
function F6({
  routes: t,
  future: e,
  state: n
}) {
  return x6(t, void 0, n, e);
}
var E2 = "get", S2 = "application/x-www-form-urlencoded";
function A2(t) {
  return t != null && typeof t.tagName == "string";
}
function O6(t) {
  return A2(t) && t.tagName.toLowerCase() === "button";
}
function A6(t) {
  return A2(t) && t.tagName.toLowerCase() === "form";
}
function $6(t) {
  return A2(t) && t.tagName.toLowerCase() === "input";
}
function N6(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function W6(t, e) {
  return t.button === 0 && // Ignore everything but left clicks
  (!e || e === "_self") && // Let browser handle "target=_blank" etc.
  !N6(t);
}
var k2 = null;
function U6() {
  if (k2 === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), k2 = !1;
    } catch {
      k2 = !0;
    }
  return k2;
}
var q6 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function l3(t) {
  return t != null && !q6.has(t) ? (T1(
    !1,
    `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${S2}"`
  ), null) : t;
}
function z6(t, e) {
  let n, o, i, u, m;
  if (A6(t)) {
    let h = t.getAttribute("action");
    o = h ? U1(h, e) : null, n = t.getAttribute("method") || E2, i = l3(t.getAttribute("enctype")) || S2, u = new FormData(t);
  } else if (O6(t) || $6(t) && (t.type === "submit" || t.type === "image")) {
    let h = t.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = t.getAttribute("formaction") || h.getAttribute("action");
    if (o = v ? U1(v, e) : null, n = t.getAttribute("formmethod") || h.getAttribute("method") || E2, i = l3(t.getAttribute("formenctype")) || l3(h.getAttribute("enctype")) || S2, u = new FormData(h, t), !U6()) {
      let { name: p, type: x, value: b } = t;
      if (x === "image") {
        let g = p ? `${p}.` : "";
        u.append(`${g}x`, "0"), u.append(`${g}y`, "0");
      } else p && u.append(p, b);
    }
  } else {
    if (A2(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    n = E2, o = null, i = S2, m = t;
  }
  return u && i === "text/plain" && (m = u, u = void 0), { action: o, method: n.toLowerCase(), encType: i, formData: u, body: m };
}
function C3(t, e) {
  if (t === !1 || t === null || typeof t > "u")
    throw new Error(e);
}
async function B6(t, e) {
  if (t.id in e)
    return e[t.id];
  try {
    let n = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      t.module
    );
    return e[t.id] = n, n;
  } catch (n) {
    return console.error(
      `Error loading route module \`${t.module}\`, reloading page...`
    ), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function H6(t) {
  return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string";
}
async function V6(t, e, n) {
  let o = await Promise.all(
    t.map(async (i) => {
      let u = e.routes[i.route.id];
      if (u) {
        let m = await B6(u, n);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return K6(
    o.flat(1).filter(H6).filter((i) => i.rel === "stylesheet" || i.rel === "preload").map(
      (i) => i.rel === "stylesheet" ? { ...i, rel: "prefetch", as: "style" } : { ...i, rel: "prefetch" }
    )
  );
}
function i0(t, e, n, o, i, u) {
  let m = (v, p) => n[p] ? v.route.id !== n[p].route.id : !0, h = (v, p) => {
    var x;
    return (
      // param change, /users/123 -> /users/456
      n[p].pathname !== v.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((x = n[p].route.path) == null ? void 0 : x.endsWith("*")) && n[p].params["*"] !== v.params["*"]
    );
  };
  return u === "assets" ? e.filter(
    (v, p) => m(v, p) || h(v, p)
  ) : u === "data" ? e.filter((v, p) => {
    var b;
    let x = o.routes[v.route.id];
    if (!x || !x.hasLoader)
      return !1;
    if (m(v, p) || h(v, p))
      return !0;
    if (v.route.shouldRevalidate) {
      let g = v.route.shouldRevalidate({
        currentUrl: new URL(
          i.pathname + i.search + i.hash,
          window.origin
        ),
        currentParams: ((b = n[0]) == null ? void 0 : b.params) || {},
        nextUrl: new URL(t, window.origin),
        nextParams: v.params,
        defaultShouldRevalidate: !0
      });
      if (typeof g == "boolean")
        return g;
    }
    return !0;
  }) : [];
}
function G6(t, e, { includeHydrateFallback: n } = {}) {
  return J6(
    t.map((o) => {
      let i = e.routes[o.route.id];
      if (!i) return [];
      let u = [i.module];
      return i.clientActionModule && (u = u.concat(i.clientActionModule)), i.clientLoaderModule && (u = u.concat(i.clientLoaderModule)), n && i.hydrateFallbackModule && (u = u.concat(i.hydrateFallbackModule)), i.imports && (u = u.concat(i.imports)), u;
    }).flat(1)
  );
}
function J6(t) {
  return [...new Set(t)];
}
function Y6(t) {
  let e = {}, n = Object.keys(t).sort();
  for (let o of n)
    e[o] = t[o];
  return e;
}
function K6(t, e) {
  let n = /* @__PURE__ */ new Set();
  return new Set(e), t.reduce((o, i) => {
    let u = JSON.stringify(Y6(i));
    return n.has(u) || (n.add(u), o.push({ key: u, link: i })), o;
  }, []);
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Q6 = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function X6(t, e) {
  let n = typeof t == "string" ? new URL(
    t,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : t;
  return n.pathname === "/" ? n.pathname = "_root.data" : e && U1(n.pathname, e) === "/" ? n.pathname = `${e.replace(/\/$/, "")}/_root.data` : n.pathname = `${n.pathname.replace(/\/$/, "")}.data`, n;
}
function j0() {
  let t = I.useContext(K1);
  return C3(
    t,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), t;
}
function Z6() {
  let t = I.useContext(F2);
  return C3(
    t,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), t;
}
var x3 = I.createContext(void 0);
x3.displayName = "FrameworkContext";
function R0() {
  let t = I.useContext(x3);
  return C3(
    t,
    "You must render this element inside a <HydratedRouter> element"
  ), t;
}
function e5(t, e) {
  let n = I.useContext(x3), [o, i] = I.useState(!1), [u, m] = I.useState(!1), { onFocus: h, onBlur: v, onMouseEnter: p, onMouseLeave: x, onTouchStart: b } = e, g = I.useRef(null);
  I.useEffect(() => {
    if (t === "render" && m(!0), t === "viewport") {
      let L = (d) => {
        d.forEach((P) => {
          m(P.isIntersecting);
        });
      }, R = new IntersectionObserver(L, { threshold: 0.5 });
      return g.current && R.observe(g.current), () => {
        R.disconnect();
      };
    }
  }, [t]), I.useEffect(() => {
    if (o) {
      let L = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [o]);
  let C = () => {
    i(!0);
  }, _ = () => {
    i(!1), m(!1);
  };
  return n ? t !== "intent" ? [u, g, {}] : [
    u,
    g,
    {
      onFocus: c2(h, C),
      onBlur: c2(v, _),
      onMouseEnter: c2(p, C),
      onMouseLeave: c2(x, _),
      onTouchStart: c2(b, C)
    }
  ] : [!1, g, {}];
}
function c2(t, e) {
  return (n) => {
    t && t(n), n.defaultPrevented || e(n);
  };
}
function t5({
  page: t,
  ...e
}) {
  let { router: n } = j0(), o = I.useMemo(
    () => b0(n.routes, t, n.basename),
    [n.routes, t, n.basename]
  );
  return o ? /* @__PURE__ */ I.createElement(r5, { page: t, matches: o, ...e }) : null;
}
function n5(t) {
  let { manifest: e, routeModules: n } = R0(), [o, i] = I.useState([]);
  return I.useEffect(() => {
    let u = !1;
    return V6(t, e, n).then(
      (m) => {
        u || i(m);
      }
    ), () => {
      u = !0;
    };
  }, [t, e, n]), o;
}
function r5({
  page: t,
  matches: e,
  ...n
}) {
  let o = A1(), { manifest: i, routeModules: u } = R0(), { basename: m } = j0(), { loaderData: h, matches: v } = Z6(), p = I.useMemo(
    () => i0(
      t,
      e,
      v,
      i,
      o,
      "data"
    ),
    [t, e, v, i, o]
  ), x = I.useMemo(
    () => i0(
      t,
      e,
      v,
      i,
      o,
      "assets"
    ),
    [t, e, v, i, o]
  ), b = I.useMemo(() => {
    if (t === o.pathname + o.search + o.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), L = !1;
    if (e.forEach((d) => {
      var j;
      let P = i.routes[d.route.id];
      !P || !P.hasLoader || (!p.some((N) => N.route.id === d.route.id) && d.route.id in h && ((j = u[d.route.id]) != null && j.shouldRevalidate) || P.hasClientLoader ? L = !0 : _.add(d.route.id));
    }), _.size === 0)
      return [];
    let R = X6(t, m);
    return L && _.size > 0 && R.searchParams.set(
      "_routes",
      e.filter((d) => _.has(d.route.id)).map((d) => d.route.id).join(",")
    ), [R.pathname + R.search];
  }, [
    m,
    h,
    o,
    i,
    p,
    e,
    t,
    u
  ]), g = I.useMemo(
    () => G6(x, i),
    [x, i]
  ), C = n5(x);
  return /* @__PURE__ */ I.createElement(I.Fragment, null, b.map((_) => /* @__PURE__ */ I.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...n })), g.map((_) => /* @__PURE__ */ I.createElement("link", { key: _, rel: "modulepreload", href: _, ...n })), C.map(({ key: _, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ I.createElement("link", { key: _, ...L })
  )));
}
function a5(...t) {
  return (e) => {
    t.forEach((n) => {
      typeof n == "function" ? n(e) : n != null && (n.current = e);
    });
  };
}
var D0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  D0 && (window.__reactRouterVersion = "7.6.2");
} catch {
}
var T0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, L3 = I.forwardRef(
  function({
    onClick: e,
    discover: n = "render",
    prefetch: o = "none",
    relative: i,
    reloadDocument: u,
    replace: m,
    state: h,
    target: v,
    to: p,
    preventScrollReset: x,
    viewTransition: b,
    ...g
  }, C) {
    let { basename: _ } = I.useContext(F1), L = typeof p == "string" && T0.test(p), R, d = !1;
    if (typeof p == "string" && L && (R = p, D0))
      try {
        let H = new URL(window.location.href), J = p.startsWith("//") ? new URL(H.protocol + p) : new URL(p), e1 = U1(J.pathname, _);
        J.origin === H.origin && e1 != null ? p = e1 + J.search + J.hash : d = !0;
      } catch {
        T1(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let P = b6(p, { relative: i }), [j, N, F] = e5(
      o,
      g
    ), A = l5(p, {
      replace: m,
      state: h,
      target: v,
      preventScrollReset: x,
      relative: i,
      viewTransition: b
    });
    function D(H) {
      e && e(H), H.defaultPrevented || A(H);
    }
    let $ = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ I.createElement(
        "a",
        {
          ...g,
          ...F,
          href: R || P,
          onClick: d || u ? e : D,
          ref: a5(C, N),
          target: v,
          "data-discover": !L && n === "render" ? "true" : void 0
        }
      )
    );
    return j && !L ? /* @__PURE__ */ I.createElement(I.Fragment, null, $, /* @__PURE__ */ I.createElement(t5, { page: P })) : $;
  }
);
L3.displayName = "Link";
var i5 = I.forwardRef(
  function({
    "aria-current": e = "page",
    caseSensitive: n = !1,
    className: o = "",
    end: i = !1,
    style: u,
    to: m,
    viewTransition: h,
    children: v,
    ...p
  }, x) {
    let b = d2(m, { relative: p.relative }), g = A1(), C = I.useContext(F2), { navigator: _, basename: L } = I.useContext(F1), R = C != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    f5(b) && h === !0, d = _.encodeLocation ? _.encodeLocation(b).pathname : b.pathname, P = g.pathname, j = C && C.navigation && C.navigation.location ? C.navigation.location.pathname : null;
    n || (P = P.toLowerCase(), j = j ? j.toLowerCase() : null, d = d.toLowerCase()), j && L && (j = U1(j, L) || j);
    const N = d !== "/" && d.endsWith("/") ? d.length - 1 : d.length;
    let F = P === d || !i && P.startsWith(d) && P.charAt(N) === "/", A = j != null && (j === d || !i && j.startsWith(d) && j.charAt(d.length) === "/"), D = {
      isActive: F,
      isPending: A,
      isTransitioning: R
    }, $ = F ? e : void 0, H;
    typeof o == "function" ? H = o(D) : H = [
      o,
      F ? "active" : null,
      A ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let J = typeof u == "function" ? u(D) : u;
    return /* @__PURE__ */ I.createElement(
      L3,
      {
        ...p,
        "aria-current": $,
        className: H,
        ref: x,
        style: J,
        to: m,
        viewTransition: h
      },
      typeof v == "function" ? v(D) : v
    );
  }
);
i5.displayName = "NavLink";
var o5 = I.forwardRef(
  ({
    discover: t = "render",
    fetcherKey: e,
    navigate: n,
    reloadDocument: o,
    replace: i,
    state: u,
    method: m = E2,
    action: h,
    onSubmit: v,
    relative: p,
    preventScrollReset: x,
    viewTransition: b,
    ...g
  }, C) => {
    let _ = h5(), L = d5(h, { relative: p }), R = m.toLowerCase() === "get" ? "get" : "post", d = typeof h == "string" && T0.test(h), P = (j) => {
      if (v && v(j), j.defaultPrevented) return;
      j.preventDefault();
      let N = j.nativeEvent.submitter, F = (N == null ? void 0 : N.getAttribute("formmethod")) || m;
      _(N || j.currentTarget, {
        fetcherKey: e,
        method: F,
        navigate: n,
        replace: i,
        state: u,
        relative: p,
        preventScrollReset: x,
        viewTransition: b
      });
    };
    return /* @__PURE__ */ I.createElement(
      "form",
      {
        ref: C,
        method: R,
        action: L,
        onSubmit: o ? v : P,
        ...g,
        "data-discover": !d && t === "render" ? "true" : void 0
      }
    );
  }
);
o5.displayName = "Form";
function s5(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function F0(t) {
  let e = I.useContext(K1);
  return s1(e, s5(t)), e;
}
function l5(t, {
  target: e,
  replace: n,
  state: o,
  preventScrollReset: i,
  relative: u,
  viewTransition: m
} = {}) {
  let h = _3(), v = A1(), p = d2(t, { relative: u });
  return I.useCallback(
    (x) => {
      if (W6(x, e)) {
        x.preventDefault();
        let b = n !== void 0 ? n : h3(v) === h3(p);
        h(t, {
          replace: b,
          state: o,
          preventScrollReset: i,
          relative: u,
          viewTransition: m
        });
      }
    },
    [
      v,
      h,
      p,
      n,
      o,
      e,
      t,
      i,
      u,
      m
    ]
  );
}
var u5 = 0, c5 = () => `__${String(++u5)}__`;
function h5() {
  let { router: t } = F0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: e } = I.useContext(F1), n = R6();
  return I.useCallback(
    async (o, i = {}) => {
      let { action: u, method: m, encType: h, formData: v, body: p } = z6(
        o,
        e
      );
      if (i.navigate === !1) {
        let x = i.fetcherKey || c5();
        await t.fetch(x, n, i.action || u, {
          preventScrollReset: i.preventScrollReset,
          formData: v,
          body: p,
          formMethod: i.method || m,
          formEncType: i.encType || h,
          flushSync: i.flushSync
        });
      } else
        await t.navigate(i.action || u, {
          preventScrollReset: i.preventScrollReset,
          formData: v,
          body: p,
          formMethod: i.method || m,
          formEncType: i.encType || h,
          replace: i.replace,
          state: i.state,
          fromRouteId: n,
          flushSync: i.flushSync,
          viewTransition: i.viewTransition
        });
    },
    [t, e, n]
  );
}
function d5(t, { relative: e } = {}) {
  let { basename: n } = I.useContext(F1), o = I.useContext(O1);
  s1(o, "useFormAction must be used inside a RouteContext");
  let [i] = o.matches.slice(-1), u = { ...d2(t || ".", { relative: e }) }, m = A1();
  if (t == null) {
    u.search = m.search;
    let h = new URLSearchParams(u.search), v = h.getAll("index");
    if (v.some((x) => x === "")) {
      h.delete("index"), v.filter((b) => b).forEach((b) => h.append("index", b));
      let x = h.toString();
      u.search = x ? `?${x}` : "";
    }
  }
  return (!t || t === ".") && i.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (u.pathname = u.pathname === "/" ? n : D1([n, u.pathname])), h3(u);
}
function f5(t, e = {}) {
  let n = I.useContext(E0);
  s1(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = F0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), i = d2(t, { relative: e.relative });
  if (!n.isTransitioning)
    return !1;
  let u = U1(n.currentLocation.pathname, o) || n.currentLocation.pathname, m = U1(n.nextLocation.pathname, o) || n.nextLocation.pathname;
  return R2(i.pathname, m) != null || R2(i.pathname, u) != null;
}
[
  ...Q6
];
const O0 = ({ items: t }) => /* @__PURE__ */ f.jsx("nav", { "aria-label": "breadcrumb", style: { margin: "16px 0" }, children: /* @__PURE__ */ f.jsx("ol", { style: { display: "flex", listStyle: "none", padding: 0, margin: 0, fontSize: 14, color: "#666" }, children: t.map((e, n) => /* @__PURE__ */ f.jsxs("li", { style: { display: "flex", alignItems: "center" }, children: [
  n > 0 && /* @__PURE__ */ f.jsx("span", { style: { margin: "0 8px" }, children: "/" }),
  n < t.length - 1 ? /* @__PURE__ */ f.jsx(L3, { to: e.to, style: { color: "#2563eb", textDecoration: "none" }, children: e.label }) : /* @__PURE__ */ f.jsx("span", { style: { color: "#111" }, children: e.label })
] }, e.to)) }) }), m5 = [
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
], p5 = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    className: V.arrowIcon,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ f.jsx(
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
), v5 = ({
  title: t = "Advice and answers from the team",
  faqs: e,
  initialFaqs: n = m5,
  description: o = "Guides to configuring and using the platform, troubleshooting common issues, and more.",
  basePath: i = "/",
  searchTerm: u,
  onSearchChange: m,
  inputValue: h,
  onInputChange: v,
  onSearchSubmit: p,
  breadcrumbItems: x,
  onNavigate: b,
  onSearch: g
}) => {
  const C = e && e.length > 0 ? e : n, _ = u ?? "", L = M2(() => {
    if (!_.trim()) return C;
    const F = _.toLowerCase();
    return C.filter(
      (A) => A.question.toLowerCase().includes(F) || A.answer.toLowerCase().includes(F)
    );
  }, [C, _]), R = M2(() => L.length ? L.reduce(
    (F, A) => {
      var H;
      const D = A.category || { title: "Other" }, $ = D.title.charAt(0).toUpperCase() + D.title.slice(1);
      return F.has($) || F.set($, {
        faqs: [],
        description: D.description || ""
      }), (H = F.get($)) == null || H.faqs.push(A), F;
    },
    /* @__PURE__ */ new Map()
  ) : /* @__PURE__ */ new Map(), [L]), d = (F) => {
    if (!F.page)
      return `/faq/${F._id}`;
    const D = `/docs/${F.page.slug.current}`;
    if (F.page.tableOfContents && F.page.tableOfContents.length > 0) {
      const H = F.page.tableOfContents[0].slug.replace(/^#+/, "");
      return `${D}#${H}`;
    }
    return D;
  }, P = (F) => F.answer.substring(0, 120) + (F.answer.length > 120 ? "..." : ""), j = () => {
    m && m(""), b ? b("/") : window.location.assign("/");
  }, N = () => {
    p && p(), h.trim() && (g ? g(h.trim()) : window.location.assign(`/search?query=${encodeURIComponent(h.trim())}&from=/faq`));
  };
  return /* @__PURE__ */ f.jsx("div", { className: V.faqRoot, children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: V.faqWrapper,
      style: {
        "--banner-image": "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')"
      },
      children: [
        /* @__PURE__ */ f.jsx(
          T2,
          {
            title: t,
            description: o,
            inputValue: h,
            onInputChange: v,
            onSearchSubmit: N,
            basePath: i
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: V.faqContent, children: [
          /* @__PURE__ */ f.jsx("div", { className: V.breadcrumbs, children: x && /* @__PURE__ */ f.jsx(O0, { items: x }) }),
          /* @__PURE__ */ f.jsx("div", { className: V.faqItems, children: L.length === 0 && _.trim() ? /* @__PURE__ */ f.jsx("div", { className: V.noResults, children: "No matching questions found. Try adjusting your search terms." }) : Array.from(R.entries()).map(
            ([F, A]) => /* @__PURE__ */ f.jsxs("div", { className: V.faqCategoryList, children: [
              /* @__PURE__ */ f.jsx("h2", { className: V.faqCategoryTitle, children: F }),
              A.description && /* @__PURE__ */ f.jsx("p", { className: V.faqCategoryDescription, children: A.description }),
              A.faqs.map((D) => /* @__PURE__ */ f.jsx(
                "a",
                {
                  href: d(D),
                  className: V.faqItem,
                  children: /* @__PURE__ */ f.jsxs("div", { className: V.faqItemContent, children: [
                    /* @__PURE__ */ f.jsxs("div", { className: V.faqItemMain, children: [
                      /* @__PURE__ */ f.jsx("h3", { className: V.faqQuestion, children: D.question }),
                      /* @__PURE__ */ f.jsx("p", { className: V.faqDescription, children: P(D) })
                    ] }),
                    /* @__PURE__ */ f.jsx(p5, {})
                  ] })
                },
                D._id
              ))
            ] }, F)
          ) }),
          m && /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: j,
              className: V.clearSearch,
              children: "Clear search"
            }
          )
        ] })
      ]
    }
  ) });
}, g5 = "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')", y5 = "Advice and answers from the team", _5 = "Guides to configuring and using the platform, troubleshooting common issues, and more.", w5 = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#1a1a1a",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ f.jsx(
        "rect",
        {
          x: "3",
          y: "3",
          width: "18",
          height: "18",
          rx: "2",
          ry: "2",
          stroke: "#1a1a1a",
          fill: "#f3f4f6"
        }
      ),
      /* @__PURE__ */ f.jsx("path", { d: "M3 9h18M9 21V9" })
    ]
  }
), se = ({ onNavigate: t, onSearch: e, searchValue: n }) => {
  const [o, i] = C1([]), [u, m] = C1(!0), [h, v] = C1(n || "");
  K(() => {
    v(n || "");
  }, [n]), K(() => {
    p3().then((C) => {
      i(C), m(!1);
    });
  }, []);
  const p = m3.useMemo(() => {
    const C = /* @__PURE__ */ new Map();
    return o.forEach((_) => {
      var R, d;
      const L = ((R = _.category) == null ? void 0 : R.title) || "General";
      C.has(L) ? C.get(L).count++ : C.set(L, {
        title: L,
        description: ((d = _.category) == null ? void 0 : d.description) || "",
        count: 1
      });
    }), Array.from(C.values());
  }, [o]);
  function x(C) {
    return C.replace(/\b\w/g, (_) => _.toUpperCase());
  }
  const b = (C) => {
    const _ = `/collection/${encodeURIComponent(C.toLowerCase())}`;
    t ? t(_) : window.location.assign(_);
  }, g = () => {
    h.trim() && (e ? e(h.trim()) : window.location.assign(`/search?query=${encodeURIComponent(h.trim())}&from=/`));
  };
  return /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: V.faqWrapper,
        style: {
          "--banner-image": g5,
          padding: 0,
          minHeight: 0
        },
        children: /* @__PURE__ */ f.jsx(
          T2,
          {
            title: y5,
            description: _5,
            inputValue: h,
            onInputChange: v,
            onSearchSubmit: g,
            basePath: "/"
          }
        )
      }
    ),
    /* @__PURE__ */ f.jsx(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(340px, 1fr))",
          gap: "2rem",
          marginTop: 32,
          maxWidth: 900,
          marginLeft: "auto",
          marginRight: "auto"
        },
        children: u ? /* @__PURE__ */ f.jsx("div", { children: "Loading..." }) : p.map((C) => /* @__PURE__ */ f.jsxs(
          "div",
          {
            className: V.faqCategory,
            onClick: () => b(C.title),
            children: [
              /* @__PURE__ */ f.jsx("div", { style: { marginBottom: 16 }, children: /* @__PURE__ */ f.jsx(w5, {}) }),
              /* @__PURE__ */ f.jsx("h2", { className: V.faqCategoryTitle, style: { margin: 0 }, children: x(C.title) }),
              /* @__PURE__ */ f.jsx(
                "p",
                {
                  className: V.faqCategoryDescription,
                  style: { margin: "8px 0 16px 0" },
                  children: C.description || "All articles in this category."
                }
              ),
              /* @__PURE__ */ f.jsxs("div", { className: V.faqCategoryCount, children: [
                C.count,
                " articles"
              ] })
            ]
          },
          C.title
        ))
      }
    )
  ] });
}, le = (t) => {
  const [e, n] = C1([]), o = A1(), i = new URLSearchParams(o.search), u = _3(), [m, h] = C1(() => i.get("search") || ""), [v, p] = C1(() => i.get("search") || ""), x = i.get("category") || o.pathname.split("/").pop();
  K(() => {
    h(i.get("search") || ""), p(i.get("search") || "");
  }, [o.search]), K(() => {
    p3().then(n);
  }, []), K(() => {
    const g = new URLSearchParams(o.search);
    m ? g.set("search", m) : g.delete("search"), u({ search: g.toString() }, { replace: !0 });
  }, [m]);
  const b = () => {
    h(v);
  };
  return /* @__PURE__ */ f.jsx(
    v5,
    {
      ...t,
      faqs: e,
      searchTerm: m,
      onSearchChange: h,
      inputValue: v,
      onInputChange: p,
      onSearchSubmit: b,
      breadcrumbItems: [
        { label: "All Collections", to: "/collection" },
        ...x ? [{ label: x.charAt(0).toUpperCase() + x.slice(1), to: o.pathname + o.search }] : []
      ]
    }
  );
};
function o0(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function s0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? o0(Object(n), !0).forEach(function(o) {
      b5(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o0(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function b5(t, e, n) {
  return (e = C5(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function C5(t) {
  var e = x5(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function x5(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function D2(t) {
  return t._type === "span" && "text" in t && typeof t.text == "string" && (typeof t.marks > "u" || Array.isArray(t.marks) && t.marks.every((e) => typeof e == "string"));
}
function A0(t) {
  return (
    // A block doesn't _have_ to be named 'block' - to differentiate between
    // allowed child types and marks, one might name them differently
    typeof t._type == "string" && // Toolkit-types like nested spans are @-prefixed
    t._type[0] !== "@" && // `markDefs` isn't _required_ per say, but if it's there, it needs to be an array
    (!("markDefs" in t) || !t.markDefs || Array.isArray(t.markDefs) && // Every mark definition needs to have an `_key` to be mappable in child spans
    t.markDefs.every((e) => typeof e._key == "string")) && // `children` is required and needs to be an array
    "children" in t && Array.isArray(t.children) && // All children are objects with `_type` (usually spans, but can contain other stuff)
    t.children.every((e) => typeof e == "object" && "_type" in e)
  );
}
function $0(t) {
  return A0(t) && "listItem" in t && typeof t.listItem == "string" && (typeof t.level > "u" || typeof t.level == "number");
}
function N0(t) {
  return t._type === "@list";
}
function W0(t) {
  return t._type === "@span";
}
function U0(t) {
  return t._type === "@text";
}
const l0 = ["strong", "em", "code", "underline", "strike-through"];
function L5(t, e, n) {
  if (!D2(t) || !t.marks) return [];
  if (!t.marks.length) return [];
  const o = t.marks.slice(), i = {};
  return o.forEach((u) => {
    i[u] = 1;
    for (let m = e + 1; m < n.length; m++) {
      const h = n[m];
      if (h && D2(h) && Array.isArray(h.marks) && h.marks.indexOf(u) !== -1) i[u]++;
      else break;
    }
  }), o.sort((u, m) => k5(i, u, m));
}
function k5(t, e, n) {
  const o = t[e], i = t[n];
  if (o !== i) return i - o;
  const u = l0.indexOf(e), m = l0.indexOf(n);
  return u !== m ? u - m : e.localeCompare(n);
}
function I5(t) {
  var e, n;
  const {
    children: o
  } = t, i = (e = t.markDefs) != null ? e : [];
  if (!o || !o.length) return [];
  const u = o.map(L5), m = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let h = [m];
  for (let v = 0; v < o.length; v++) {
    const p = o[v];
    if (!p) continue;
    const x = u[v] || [];
    let b = 1;
    if (h.length > 1) for (b; b < h.length; b++) {
      const C = ((n = h[b]) == null ? void 0 : n.markKey) || "", _ = x.indexOf(C);
      if (_ === -1) break;
      x.splice(_, 1);
    }
    h = h.slice(0, b);
    let g = h[h.length - 1];
    if (g) {
      for (const C of x) {
        const _ = i == null ? void 0 : i.find((d) => d._key === C), L = _ ? _._type : C, R = {
          _type: "@span",
          _key: p._key,
          children: [],
          markDef: _,
          markType: L,
          markKey: C
        };
        g.children.push(R), h.push(R), g = R;
      }
      if (D2(p)) {
        const C = p.text.split(`
`);
        for (let _ = C.length; _-- > 1; ) C.splice(_, 0, `
`);
        g.children = g.children.concat(C.map((_) => ({
          _type: "@text",
          text: _
        })));
      } else g.children = g.children.concat(p);
    }
  }
  return m.children;
}
function E5(t, e) {
  const n = [];
  let o;
  for (let i = 0; i < t.length; i++) {
    const u = t[i];
    if (u) {
      if (!$0(u)) {
        n.push(u), o = void 0;
        continue;
      }
      if (!o) {
        o = I2(u, i, e), n.push(o);
        continue;
      }
      if (S5(u, o)) {
        o.children.push(u);
        continue;
      }
      if ((u.level || 1) > o.level) {
        const m = I2(u, i, e);
        if (e === "html") {
          const h = o.children[o.children.length - 1], v = s0(s0({}, h), {}, {
            children: [...h.children, m]
          });
          o.children[o.children.length - 1] = v;
        } else o.children.push(m);
        o = m;
        continue;
      }
      if ((u.level || 1) < o.level) {
        const m = n[n.length - 1], h = m && d3(m, u);
        if (h) {
          o = h, o.children.push(u);
          continue;
        }
        o = I2(u, i, e), n.push(o);
        continue;
      }
      if (u.listItem !== o.listItem) {
        const m = n[n.length - 1], h = m && d3(m, {
          level: u.level || 1
        });
        if (h && h.listItem === u.listItem) {
          o = h, o.children.push(u);
          continue;
        } else {
          o = I2(u, i, e), n.push(o);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", u), n.push(u);
    }
  }
  return n;
}
function S5(t, e) {
  return (t.level || 1) === e.level && t.listItem === e.listItem;
}
function I2(t, e, n) {
  return {
    _type: "@list",
    _key: `${t._key || `${e}`}-parent`,
    mode: n,
    level: t.level || 1,
    listItem: t.listItem,
    children: [t]
  };
}
function d3(t, e) {
  const n = e.level || 1, o = e.listItem || "normal", i = typeof e.listItem == "string";
  if (N0(t) && (t.level || 1) === n && i && (t.listItem || "normal") === o) return t;
  if (!("children" in t)) return;
  const u = t.children[t.children.length - 1];
  return u && !D2(u) ? d3(u, e) : void 0;
}
function q0(t) {
  let e = "";
  return t.children.forEach((n) => {
    U0(n) ? e += n.text : W0(n) && (e += q0(n));
  }), e;
}
const M5 = "html", P5 = ["block", "list", "listItem", "marks", "types"], j5 = ["listItem"], R5 = ["_key"];
function u0(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function E1(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? u0(Object(n), !0).forEach(function(o) {
      D5(t, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u0(Object(n)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return t;
}
function D5(t, e, n) {
  return (e = T5(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function T5(t) {
  var e = F5(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
function F5(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var o = n.call(t, e);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function f3(t, e) {
  if (t == null) return {};
  var n, o, i = O5(t, e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++) n = u[o], e.includes(n) || {}.propertyIsEnumerable.call(t, n) && (i[n] = t[n]);
  }
  return i;
}
function O5(t, e) {
  if (t == null) return {};
  var n = {};
  for (var o in t) if ({}.hasOwnProperty.call(t, o)) {
    if (e.includes(o)) continue;
    n[o] = t[o];
  }
  return n;
}
const A5 = {
  number: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("ol", {
    children: t
  }),
  bullet: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("ul", {
    children: t
  })
}, $5 = ({
  children: t
}) => /* @__PURE__ */ f.jsx("li", {
  children: t
}), N5 = ({
  children: t,
  value: e
}) => /* @__PURE__ */ f.jsx("a", {
  href: e == null ? void 0 : e.href,
  children: t
}), W5 = {
  textDecoration: "underline"
}, U5 = {
  em: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("em", {
    children: t
  }),
  strong: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("strong", {
    children: t
  }),
  code: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("code", {
    children: t
  }),
  underline: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("span", {
    style: W5,
    children: t
  }),
  "strike-through": ({
    children: t
  }) => /* @__PURE__ */ f.jsx("del", {
    children: t
  }),
  link: N5
}, f2 = (t, e) => `[@portabletext/react] Unknown ${t}, specify a component for it in the \`components.${e}\` prop`, z0 = (t) => f2(`block type "${t}"`, "types"), q5 = (t) => f2(`mark type "${t}"`, "marks"), z5 = (t) => f2(`block style "${t}"`, "block"), B5 = (t) => f2(`list style "${t}"`, "list"), H5 = (t) => f2(`list item style "${t}"`, "listItem");
function V5(t) {
  console.warn(t);
}
const c0 = {
  display: "none"
}, G5 = ({
  value: t,
  isInline: e
}) => {
  const n = z0(t._type);
  return e ? /* @__PURE__ */ f.jsx("span", {
    style: c0,
    children: n
  }) : /* @__PURE__ */ f.jsx("div", {
    style: c0,
    children: n
  });
}, J5 = ({
  markType: t,
  children: e
}) => /* @__PURE__ */ f.jsx("span", {
  className: `unknown__pt__mark__${t}`,
  children: e
}), Y5 = ({
  children: t
}) => /* @__PURE__ */ f.jsx("p", {
  children: t
}), K5 = ({
  children: t
}) => /* @__PURE__ */ f.jsx("ul", {
  children: t
}), Q5 = ({
  children: t
}) => /* @__PURE__ */ f.jsx("li", {
  children: t
}), X5 = () => /* @__PURE__ */ f.jsx("br", {}), Z5 = {
  normal: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("p", {
    children: t
  }),
  blockquote: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("blockquote", {
    children: t
  }),
  h1: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h1", {
    children: t
  }),
  h2: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h2", {
    children: t
  }),
  h3: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h3", {
    children: t
  }),
  h4: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h4", {
    children: t
  }),
  h5: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h5", {
    children: t
  }),
  h6: ({
    children: t
  }) => /* @__PURE__ */ f.jsx("h6", {
    children: t
  })
}, h0 = {
  types: {},
  block: Z5,
  marks: U5,
  list: A5,
  listItem: $5,
  hardBreak: X5,
  unknownType: G5,
  unknownMark: J5,
  unknownList: K5,
  unknownListItem: Q5,
  unknownBlockStyle: Y5
};
function ee(t, e) {
  const {
    block: n,
    list: o,
    listItem: i,
    marks: u,
    types: m
  } = e, h = f3(e, P5);
  return E1(E1({}, t), {}, {
    block: h2(t, e, "block"),
    list: h2(t, e, "list"),
    listItem: h2(t, e, "listItem"),
    marks: h2(t, e, "marks"),
    types: h2(t, e, "types")
  }, h);
}
function h2(t, e, n) {
  const o = e[n], i = t[n];
  return typeof o == "function" || o && typeof i == "function" ? o : o ? E1(E1({}, i), o) : i;
}
function u3({
  value: t,
  components: e,
  listNestingMode: n,
  onMissingComponent: o = V5
}) {
  const i = o || ne, u = Array.isArray(t) ? t : [t], m = E5(u, n || M5), h = M2(() => e ? ee(h0, e) : h0, [e]), v = M2(() => te(h, i), [h, i]), p = m.map((x, b) => v({
    node: x,
    index: b,
    isInline: !1,
    renderNode: v
  }));
  return /* @__PURE__ */ f.jsx(f.Fragment, {
    children: p
  });
}
const te = (t, e) => {
  function n(b) {
    const {
      node: g,
      index: C,
      isInline: _
    } = b, L = g._key || `node-${C}`;
    return N0(g) ? u(g, C, L) : $0(g) ? i(g, C, L) : W0(g) ? m(g, C, L) : o(g) ? x(g, C, L, _) : A0(g) ? h(g, C, L, _) : U0(g) ? v(g, L) : p(g, C, L, _);
  }
  function o(b) {
    return b._type in t.types;
  }
  function i(b, g, C) {
    const _ = d0({
      node: b,
      index: g,
      isInline: !1,
      renderNode: n
    }), L = t.listItem, R = (typeof L == "function" ? L : L[b.listItem]) || t.unknownListItem;
    if (R === t.unknownListItem) {
      const P = b.listItem || "bullet";
      e(H5(P), {
        type: P,
        nodeType: "listItemStyle"
      });
    }
    let d = _.children;
    if (b.style && b.style !== "normal") {
      const {
        listItem: P
      } = b, j = f3(b, j5);
      d = n({
        node: j,
        index: g,
        isInline: !1
      });
    }
    return /* @__PURE__ */ f.jsx(R, {
      value: b,
      index: g,
      isInline: !1,
      renderNode: n,
      children: d
    }, C);
  }
  function u(b, g, C) {
    const _ = b.children.map((d, P) => n({
      node: d._key ? d : E1(E1({}, d), {}, {
        _key: `li-${g}-${P}`
      }),
      index: P,
      isInline: !1
    })), L = t.list, R = (typeof L == "function" ? L : L[b.listItem]) || t.unknownList;
    if (R === t.unknownList) {
      const d = b.listItem || "bullet";
      e(B5(d), {
        nodeType: "listStyle",
        type: d
      });
    }
    return /* @__PURE__ */ f.jsx(R, {
      value: b,
      index: g,
      isInline: !1,
      renderNode: n,
      children: _
    }, C);
  }
  function m(b, g, C) {
    const {
      markDef: _,
      markType: L,
      markKey: R
    } = b, d = t.marks[L] || t.unknownMark, P = b.children.map((j, N) => n({
      node: j,
      index: N,
      isInline: !0
    }));
    return d === t.unknownMark && e(q5(L), {
      nodeType: "mark",
      type: L
    }), /* @__PURE__ */ f.jsx(d, {
      text: q0(b),
      value: _,
      markType: L,
      markKey: R,
      renderNode: n,
      children: P
    }, C);
  }
  function h(b, g, C, _) {
    const L = d0({
      node: b,
      index: g,
      isInline: _,
      renderNode: n
    }), {
      _key: R
    } = L, d = f3(L, R5), P = d.node.style || "normal", j = (typeof t.block == "function" ? t.block : t.block[P]) || t.unknownBlockStyle;
    return j === t.unknownBlockStyle && e(z5(P), {
      nodeType: "blockStyle",
      type: P
    }), /* @__PURE__ */ f.jsx(j, E1(E1({}, d), {}, {
      value: d.node,
      renderNode: n
    }), C);
  }
  function v(b, g) {
    if (b.text === `
`) {
      const C = t.hardBreak;
      return C ? /* @__PURE__ */ f.jsx(C, {}, g) : `
`;
    }
    return b.text;
  }
  function p(b, g, C, _) {
    const L = {
      value: b,
      isInline: _,
      index: g,
      renderNode: n
    };
    e(z0(b._type), {
      nodeType: "block",
      type: b._type
    });
    const R = t.unknownType;
    return /* @__PURE__ */ f.jsx(R, E1({}, L), C);
  }
  function x(b, g, C, _) {
    const L = {
      value: b,
      isInline: _,
      index: g,
      renderNode: n
    }, R = t.types[b._type];
    return R ? /* @__PURE__ */ f.jsx(R, E1({}, L), C) : null;
  }
  return n;
};
function d0(t) {
  const {
    node: e,
    index: n,
    isInline: o,
    renderNode: i
  } = t, u = I5(e).map((m, h) => i({
    node: m,
    isInline: !0,
    index: h,
    renderNode: i
  }));
  return {
    _key: e._key || `block-${n}`,
    children: u,
    index: n,
    isInline: o,
    node: e
  };
}
function ne() {
}
const re = ({
  basePath: t = "/",
  pageData: e,
  inputValue: n,
  onInputChange: o,
  onSearchSubmit: i,
  breadcrumbItems: u
}) => {
  const m = e;
  if (!m)
    return /* @__PURE__ */ f.jsx("div", { className: r1.error, children: "No data found." });
  const { title: h, authorName: v, authorImage: p, publishedAt: x, tableOfContents: b, body: g } = m, C = x ? new Date(x).toLocaleDateString(void 0, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }) : null, _ = [...b].sort((d, P) => d.order - P.order), L = new Map(
    _.map((d) => [
      d._id,
      { title: d.title, slug: d.slug.replace(/^#+/, "") }
    ])
  ), R = {
    block: {
      h2: ({ children: d }) => {
        const P = String(d).toLowerCase().replace(/\s+/g, "-");
        return /* @__PURE__ */ f.jsx("h2", { id: P, children: d });
      },
      h3: ({ children: d }) => {
        const P = String(d).toLowerCase().replace(/\s+/g, "-");
        return /* @__PURE__ */ f.jsx("h3", { id: P, children: d });
      },
      blockquote: ({ children: d }) => /* @__PURE__ */ f.jsx(
        "blockquote",
        {
          style: {
            borderLeft: "4px solid #ccc",
            margin: "1em 0",
            padding: "0.5em 1em",
            color: "#555",
            background: "#f9f9f9"
          },
          children: d
        }
      ),
      normal: ({ children: d }) => /* @__PURE__ */ f.jsx("p", { children: d })
    },
    list: {
      bullet: ({ children: d }) => /* @__PURE__ */ f.jsx("ul", { className: "list-disc list-inside pl-4", children: d }),
      number: ({ children: d }) => /* @__PURE__ */ f.jsx("ol", { className: "list-decimal list-inside pl-4", children: d })
    },
    listItem: {
      bullet: ({ children: d }) => /* @__PURE__ */ f.jsx("li", { children: d }),
      number: ({ children: d }) => /* @__PURE__ */ f.jsx("li", { children: d })
    },
    marks: {
      strong: ({ children: d }) => /* @__PURE__ */ f.jsx("strong", { children: d }),
      em: ({ children: d }) => /* @__PURE__ */ f.jsx("em", { children: d }),
      underline: ({ children: d }) => /* @__PURE__ */ f.jsx("u", { children: d }),
      code: ({ children: d }) => /* @__PURE__ */ f.jsx(
        "code",
        {
          style: {
            background: "#f4f4f4",
            padding: "0.2em 0.4em",
            borderRadius: "4px",
            fontSize: "0.95em"
          },
          children: d
        }
      ),
      link: ({ value: d, children: P }) => {
        const j = (d == null ? void 0 : d.href) || "";
        return /* @__PURE__ */ f.jsx(
          "a",
          {
            href: j,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { color: "#2563eb", textDecoration: "underline" },
            children: P
          }
        );
      }
    },
    types: {
      image: ({ value: d }) => {
        var A;
        if (!((A = d == null ? void 0 : d.asset) != null && A._ref)) return null;
        const P = x2(d).width(320).auto("format").url(), j = x2(d).width(640).auto("format").url(), N = x2(d).width(800).auto("format").url(), F = x2(d).width(1200).auto("format").url();
        return /* @__PURE__ */ f.jsx(
          "img",
          {
            src: N,
            srcSet: `${P} 320w, ${j} 640w, ${N} 800w, ${F} 1200w`,
            sizes: "(max-width: 600px) 90vw, (max-width: 1200px) 60vw, 50vw",
            alt: d.alt || d.caption || "Image",
            className: r1.portableImage
          }
        );
      },
      reference: ({ value: d }) => {
        if (!d._ref) return null;
        const P = L.get(d._ref);
        return P ? /* @__PURE__ */ f.jsx("h3", { className: r1.sectionReferenceLink, id: P.slug, children: P.title }) : null;
      },
      table: ({ value: d }) => {
        var F;
        if (!((F = d == null ? void 0 : d.rows) != null && F.length)) return null;
        const P = d.layoutOrientation === "left" ? "left" : "top", j = d.rows[0].cells.map((A) => A.column), N = d.rows[0].cells.map((A) => A.width || "auto");
        return P === "top" ? /* @__PURE__ */ f.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ f.jsxs("table", { className: "min-w-full table-auto border-collapse", children: [
          /* @__PURE__ */ f.jsx("thead", { className: "bg-gray-100 text-gray-700", children: /* @__PURE__ */ f.jsx("tr", { children: j.map((A, D) => /* @__PURE__ */ f.jsx(
            "th",
            {
              className: "px-4 py-2 border border-gray-300 text-left",
              style: { width: N[D] },
              children: A
            },
            A + D
          )) }) }),
          /* @__PURE__ */ f.jsx("tbody", { children: d.rows.map((A, D) => /* @__PURE__ */ f.jsx("tr", { className: "even:bg-gray-50", children: j.map(($, H) => {
            const J = A.cells.find((e1) => e1.column === $);
            return /* @__PURE__ */ f.jsx(
              "td",
              {
                className: "px-4 py-2 border border-gray-300 align-top break-words",
                style: { width: N[H], minWidth: N[H] },
                children: J != null && J.content ? /* @__PURE__ */ f.jsx(
                  u3,
                  {
                    value: J.content,
                    components: R
                  }
                ) : /* @__PURE__ */ f.jsx("span", { className: "text-gray-400", children: "—" })
              },
              $ + H
            );
          }) }, D)) })
        ] }) }) : /* @__PURE__ */ f.jsx("div", { className: "overflow-x-auto my-6", children: /* @__PURE__ */ f.jsx("table", { className: "w-full table-auto border-collapse", children: /* @__PURE__ */ f.jsx("tbody", { children: d.rows.map((A, D) => {
          const $ = A.cells[0];
          return /* @__PURE__ */ f.jsxs("tr", { className: "even:bg-gray-50", children: [
            /* @__PURE__ */ f.jsx(
              "th",
              {
                className: "px-4 py-2 border border-gray-300 text-left align-top break-words",
                style: { width: N[0] },
                children: ($ == null ? void 0 : $.column) || "—"
              }
            ),
            j.map((H, J) => {
              const e1 = A.cells.find((P1) => P1.column === H);
              return J === 0 ? null : /* @__PURE__ */ f.jsx(
                "td",
                {
                  className: "px-4 py-2 border border-gray-300 align-top break-words",
                  style: { width: N[J], minWidth: N[J] },
                  children: e1 != null && e1.content ? /* @__PURE__ */ f.jsx(
                    u3,
                    {
                      value: e1.content,
                      components: R
                    }
                  ) : /* @__PURE__ */ f.jsx("span", { className: "text-gray-400", children: "—" })
                },
                H + J
              );
            })
          ] }, D);
        }) }) }) });
      }
    }
  };
  return /* @__PURE__ */ f.jsxs("div", { className: r1.docPageRoot, children: [
    /* @__PURE__ */ f.jsx(
      "div",
      {
        className: r1.bannerWrapper,
        style: {
          "--banner-image": "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')"
        },
        children: /* @__PURE__ */ f.jsx(
          T2,
          {
            title: "Advice and answers from the team",
            description: "Guides to configuring and using the platform, troubleshooting common issues, and more.",
            inputValue: n,
            onInputChange: o,
            onSearchSubmit: i,
            basePath: t
          }
        )
      }
    ),
    /* @__PURE__ */ f.jsxs("div", { className: r1.container, children: [
      /* @__PURE__ */ f.jsx("aside", { className: r1.stickySidebar, children: /* @__PURE__ */ f.jsxs("div", { className: r1.sidebarInner, children: [
        /* @__PURE__ */ f.jsx("h3", { children: "Table Of Content" }),
        /* @__PURE__ */ f.jsx("ul", { children: _.map((d) => /* @__PURE__ */ f.jsx("li", { children: /* @__PURE__ */ f.jsx("a", { href: `#${d.slug.replace(/^#+/, "")}`, children: d.title }) }, d._id)) })
      ] }) }),
      /* @__PURE__ */ f.jsxs("article", { className: r1.mainContent, children: [
        /* @__PURE__ */ f.jsx("div", { className: r1.breadcrumbs, children: u && /* @__PURE__ */ f.jsx(O0, { items: u }) }),
        /* @__PURE__ */ f.jsx("h1", { className: r1.pageTitle, children: h }),
        /* @__PURE__ */ f.jsxs("div", { className: r1.metaInfo, children: [
          p ? /* @__PURE__ */ f.jsx(
            "img",
            {
              src: p,
              alt: v || "Author",
              className: r1.authorImage
            }
          ) : /* @__PURE__ */ f.jsx("div", { className: r1.authorPlaceholder }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            v && /* @__PURE__ */ f.jsxs("div", { className: r1.authorName, children: [
              "Written by ",
              v
            ] }),
            C && /* @__PURE__ */ f.jsxs("div", { className: r1.publishedDate, children: [
              "Updated ",
              C
            ] })
          ] })
        ] }),
        _.length > 0 && /* @__PURE__ */ f.jsxs("section", { className: r1.tocInContent, children: [
          /* @__PURE__ */ f.jsx("h2", { children: "Table Of Content" }),
          /* @__PURE__ */ f.jsx("ul", { children: _.map((d) => /* @__PURE__ */ f.jsx("li", { className: r1.tocItem, children: /* @__PURE__ */ f.jsx("a", { href: `#${d.slug.replace(/^#+/, "")}`, children: d.title }) }, d._id)) })
        ] }),
        /* @__PURE__ */ f.jsx("section", { className: r1.bodyContent, children: /* @__PURE__ */ f.jsx(u3, { value: g, components: R }) })
      ] })
    ] })
  ] });
}, ue = ({
  slug: t,
  basePath: e = "/"
}) => {
  var x, b;
  const [n, o] = C1(""), [i, u] = C1(null), m = A1(), h = _3();
  K(() => {
    R4(t).then(u);
  }, [t]);
  const v = () => {
    n.trim() && h(`/search?query=${encodeURIComponent(n.trim())}&from=/docs/${t}`);
  };
  if (!i) return /* @__PURE__ */ f.jsx("div", { children: "Loading…" });
  let p = (x = i.categories) == null ? void 0 : x[0];
  if (p)
    p.title && (p.title = p.title.charAt(0).toUpperCase() + p.title.slice(1));
  else {
    const g = m.pathname.match(/\/collection\/([^/]+)/);
    if (g) {
      const C = decodeURIComponent(g[1]).replace(/-/g, " ");
      p = { title: C.charAt(0).toUpperCase() + C.slice(1), slug: { current: g[1] } };
    }
  }
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsx(
    re,
    {
      basePath: e,
      pageData: i,
      inputValue: n,
      onInputChange: o,
      onSearchSubmit: v,
      breadcrumbItems: [
        { label: "All Collections", to: "/collection" },
        ...p ? [{ label: p.title, to: `/collection/${((b = p.slug) == null ? void 0 : b.current) || ""}` }] : [],
        { label: i.title, to: `/docs/${t}` }
      ]
    }
  ) });
}, ce = ({
  query: t,
  from: e,
  onNavigate: n,
  onSearch: o
}) => {
  let i = t, u = e;
  if (typeof window < "u") {
    const L = new URLSearchParams(window.location.search);
    i || (i = L.get("query") || ""), u || (u = L.get("from") || "/");
  }
  const [m, h] = C1([]), [v, p] = C1(!0), [x, b] = C1(i || "");
  K(() => {
    b(i || "");
  }, [i]), K(() => {
    p3().then((L) => {
      h(L), p(!1);
    });
  }, []);
  const g = m3.useMemo(() => {
    if (!x.trim()) return [];
    const L = x.toLowerCase();
    return m.filter(
      (R) => R.question.toLowerCase().includes(L) || R.answer.toLowerCase().includes(L)
    );
  }, [m, x]), C = () => {
    b(""), n ? n(u || "/") : window.location.assign(u || "/");
  }, _ = (L) => {
    L && L.preventDefault(), x.trim() && (o ? o(x.trim()) : window.location.assign(
      `/search?query=${encodeURIComponent(
        x.trim()
      )}&from=${encodeURIComponent(u || "/")}`
    ));
  };
  return /* @__PURE__ */ f.jsx("div", { className: V.faqRoot, children: /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: V.faqWrapper,
      style: {
        "--banner-image": "url('https://images.unsplash.com/photo-1507812984078-917a274065be?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0')"
      },
      children: [
        /* @__PURE__ */ f.jsx(
          T2,
          {
            title: "Advice and answers from the team",
            description: "Guides to configuring and using the platform, troubleshooting common issues, and more.",
            inputValue: x,
            onInputChange: b,
            onSearchSubmit: _,
            basePath: "/search"
          }
        ),
        /* @__PURE__ */ f.jsxs("div", { className: V.faqContent, children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: C,
              className: V.clearSearch,
              type: "button",
              children: "Clear search"
            }
          ),
          x.trim() && !v && /* @__PURE__ */ f.jsxs("div", { className: V.searchResults, children: [
            'Search for "',
            x,
            '" has ',
            g.length,
            " result",
            g.length !== 1 ? "s" : ""
          ] }),
          v ? /* @__PURE__ */ f.jsx("div", { children: "Loading..." }) : g.length === 0 ? /* @__PURE__ */ f.jsx("div", { children: "No results found." }) : /* @__PURE__ */ f.jsx("div", { className: V.faqItems, children: g.map((L) => /* @__PURE__ */ f.jsx(
            "a",
            {
              href: L.page ? `/docs/${L.page.slug.current}` : `/faq/${L._id}`,
              className: V.faqItem,
              style: { textDecoration: "none" },
              children: /* @__PURE__ */ f.jsxs("div", { className: V.faqItemContent, children: [
                /* @__PURE__ */ f.jsxs("div", { className: V.faqItemMain, children: [
                  /* @__PURE__ */ f.jsx("h3", { className: V.faqQuestion, children: L.question }),
                  /* @__PURE__ */ f.jsxs("p", { className: V.faqDescription, children: [
                    L.answer.substring(0, 120),
                    L.answer.length > 120 ? "..." : ""
                  ] })
                ] }),
                /* @__PURE__ */ f.jsx(
                  "svg",
                  {
                    className: V.arrowIcon,
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ f.jsx(
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
                )
              ] })
            },
            L._id
          )) })
        ] })
      ]
    }
  ) });
};
export {
  T2 as BannerSearch,
  O0 as Breadcrumb,
  re as DocPage,
  ue as DocPageLocalWrapper,
  v5 as FAQ,
  se as FAQCard,
  le as FAQLocalWrapper,
  oe as NotFound,
  ce as SearchResults
};
