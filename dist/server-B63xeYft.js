var fi = Object.defineProperty;
var cr = (t) => {
  throw TypeError(t);
};
var hi = (t, e, r) => e in t ? fi(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var C = (t, e, r) => hi(t, typeof e != "symbol" ? e + "" : e, r), lr = (t, e, r) => e.has(t) || cr("Cannot " + r);
var u = (t, e, r) => (lr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), O = (t, e, r) => e.has(t) ? cr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), I = (t, e, r, n) => (lr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
function di(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const Vr = !(typeof navigator > "u") && navigator.product === "ReactNative", Nr = { timeout: Vr ? 6e4 : 12e4 }, pi = function(t) {
  const e = { ...Nr, ...typeof t == "string" ? { url: t } : t };
  if (e.timeout = Hr(e.timeout), e.query) {
    const { url: r, searchParams: n } = function(i) {
      const s = i.indexOf("?");
      if (s === -1) return { url: i, searchParams: new URLSearchParams() };
      const o = i.slice(0, s), a = i.slice(s + 1);
      if (!Vr) return { url: o, searchParams: new URLSearchParams(a) };
      if (typeof decodeURIComponent != "function") throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
      const l = new URLSearchParams();
      for (const c of a.split("&")) {
        const [y, m] = c.split("=");
        y && l.append(fr(y), fr(m || ""));
      }
      return { url: o, searchParams: l };
    }(e.url);
    for (const [i, s] of Object.entries(e.query)) {
      if (s !== void 0) if (Array.isArray(s)) for (const a of s) n.append(i, a);
      else n.append(i, s);
      const o = n.toString();
      o && (e.url = `${r}?${o}`);
    }
  }
  return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e;
};
function fr(t) {
  return decodeURIComponent(t.replace(/\+/g, " "));
}
function Hr(t) {
  if (t === !1 || t === 0) return !1;
  if (t.connect || t.socket) return t;
  const e = Number(t);
  return isNaN(e) ? Hr(Nr.timeout) : { connect: e, socket: e };
}
const yi = /^https?:\/\//i, mi = function(t) {
  if (!yi.test(t.url)) throw new Error(`"${t.url}" is not a valid URL`);
};
function zr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
const vi = ["request", "response", "progress", "error", "abort"], hr = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function Br(t, e) {
  const r = [], n = hr.reduce((s, o) => (s[o] = s[o] || [], s), { processOptions: [pi], validateOptions: [mi] });
  function i(s) {
    const o = vi.reduce((f, b) => (f[b] = /* @__PURE__ */ function() {
      const d = /* @__PURE__ */ Object.create(null);
      let S = 0;
      return { publish: function(_) {
        for (const x in d) d[x](_);
      }, subscribe: function(_) {
        const x = S++;
        return d[x] = _, function() {
          delete d[x];
        };
      } };
    }(), f), {}), a = /* @__PURE__ */ ((f) => function(b, d, ...S) {
      const _ = b === "onError";
      let x = d;
      for (let A = 0; A < f[b].length && (x = (0, f[b][A])(x, ...S), !_ || x); A++) ;
      return x;
    })(n), l = a("processOptions", s);
    a("validateOptions", l);
    const c = { options: l, channels: o, applyMiddleware: a };
    let y;
    const m = o.request.subscribe((f) => {
      y = e(f, (b, d) => ((S, _, x) => {
        let A = S, q = _;
        if (!A) try {
          q = a("onResponse", _, x);
        } catch (U) {
          q = null, A = U;
        }
        A = A && a("onError", A, x), A ? o.error.publish(A) : q && o.response.publish(q);
      })(b, d, f));
    });
    o.abort.subscribe(() => {
      m(), y && y.abort();
    });
    const w = a("onReturn", o, c);
    return w === o && o.request.publish(c), w;
  }
  return i.use = function(s) {
    if (!s) throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof s == "function") throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (s.onReturn && n.onReturn.length > 0) throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return hr.forEach((o) => {
      s[o] && n[o].push(s[o]);
    }), r.push(s), i;
  }, i.clone = () => Br(r, e), t.forEach(i.use), i;
}
var dr, pr, gi = /* @__PURE__ */ zr(function() {
  if (pr) return dr;
  pr = 1;
  var t = function(r) {
    return r.replace(/^\s+|\s+$/g, "");
  }, e = function(r) {
    return Object.prototype.toString.call(r) === "[object Array]";
  };
  return dr = function(r) {
    if (!r) return {};
    for (var n = /* @__PURE__ */ Object.create(null), i = t(r).split(`
`), s = 0; s < i.length; s++) {
      var o = i[s], a = o.indexOf(":"), l = t(o.slice(0, a)).toLowerCase(), c = t(o.slice(a + 1));
      typeof n[l] > "u" ? n[l] = c : e(n[l]) ? n[l].push(c) : n[l] = [n[l], c];
    }
    return n;
  };
}()), Qe, Je, qe, Ye, ne, Xe, Ze, Lr;
let Lt = (Lr = class {
  constructor() {
    C(this, "onabort");
    C(this, "onerror");
    C(this, "onreadystatechange");
    C(this, "ontimeout");
    C(this, "readyState", 0);
    C(this, "response");
    C(this, "responseText", "");
    C(this, "responseType", "");
    C(this, "status");
    C(this, "statusText");
    C(this, "withCredentials");
    O(this, Qe);
    O(this, Je);
    O(this, qe);
    O(this, Ye, {});
    O(this, ne);
    O(this, Xe, {});
    O(this, Ze);
  }
  open(e, r, n) {
    var i;
    I(this, Qe, e), I(this, Je, r), I(this, qe, ""), this.readyState = 1, (i = this.onreadystatechange) == null || i.call(this), I(this, ne, void 0);
  }
  abort() {
    u(this, ne) && u(this, ne).abort();
  }
  getAllResponseHeaders() {
    return u(this, qe);
  }
  setRequestHeader(e, r) {
    u(this, Ye)[e] = r;
  }
  setInit(e, r = !0) {
    I(this, Xe, e), I(this, Ze, r);
  }
  send(e) {
    const r = this.responseType !== "arraybuffer", n = { ...u(this, Xe), method: u(this, Qe), headers: u(this, Ye), body: e };
    typeof AbortController == "function" && u(this, Ze) && (I(this, ne, new AbortController()), typeof EventTarget < "u" && u(this, ne).signal instanceof EventTarget && (n.signal = u(this, ne).signal)), typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"), fetch(u(this, Je), n).then((i) => {
      var s;
      return i.headers.forEach((o, a) => {
        I(this, qe, u(this, qe) + `${a}: ${o}\r
`);
      }), this.status = i.status, this.statusText = i.statusText, this.readyState = 3, (s = this.onreadystatechange) == null || s.call(this), r ? i.text() : i.arrayBuffer();
    }).then((i) => {
      var s;
      typeof i == "string" ? this.responseText = i : this.response = i, this.readyState = 4, (s = this.onreadystatechange) == null || s.call(this);
    }).catch((i) => {
      var s, o;
      i.name !== "AbortError" ? (s = this.onerror) == null || s.call(this, i) : (o = this.onabort) == null || o.call(this);
    });
  }
}, Qe = new WeakMap(), Je = new WeakMap(), qe = new WeakMap(), Ye = new WeakMap(), ne = new WeakMap(), Xe = new WeakMap(), Ze = new WeakMap(), Lr);
const Vt = typeof XMLHttpRequest == "function" ? "xhr" : "fetch", bi = Vt === "xhr" ? XMLHttpRequest : Lt, wi = (t, e) => {
  const r = t.options, n = t.applyMiddleware("finalizeOptions", r), i = {}, s = t.applyMiddleware("interceptRequest", void 0, { adapter: Vt, context: t });
  if (s) {
    const d = setTimeout(e, 0, null, s);
    return { abort: () => clearTimeout(d) };
  }
  let o = new bi();
  o instanceof Lt && typeof n.fetch == "object" && o.setInit(n.fetch, n.useAbortSignal ?? !0);
  const a = n.headers, l = n.timeout;
  let c = !1, y = !1, m = !1;
  if (o.onerror = (d) => {
    b(o instanceof Lt ? d instanceof Error ? d : new Error(`Request error while attempting to reach is ${n.url}`, { cause: d }) : new Error(`Request error while attempting to reach is ${n.url}${d.lengthComputable ? `(${d.loaded} of ${d.total} bytes transferred)` : ""}`));
  }, o.ontimeout = (d) => {
    b(new Error(`Request timeout while attempting to reach ${n.url}${d.lengthComputable ? `(${d.loaded} of ${d.total} bytes transferred)` : ""}`));
  }, o.onabort = () => {
    f(!0), c = !0;
  }, o.onreadystatechange = function() {
    l && (f(), i.socket = setTimeout(() => w("ESOCKETTIMEDOUT"), l.socket)), !c && o && o.readyState === 4 && o.status !== 0 && function() {
      if (!(c || y || m)) {
        if (o.status === 0) return void b(new Error("Unknown XHR error"));
        f(), y = !0, e(null, { body: o.response || (o.responseType === "" || o.responseType === "text" ? o.responseText : ""), url: n.url, method: n.method, headers: gi(o.getAllResponseHeaders()), statusCode: o.status, statusMessage: o.statusText });
      }
    }();
  }, o.open(n.method, n.url, !0), o.withCredentials = !!n.withCredentials, a && o.setRequestHeader) for (const d in a) a.hasOwnProperty(d) && o.setRequestHeader(d, a[d]);
  return n.rawBody && (o.responseType = "arraybuffer"), t.applyMiddleware("onRequest", { options: n, adapter: Vt, request: o, context: t }), o.send(n.body || null), l && (i.connect = setTimeout(() => w("ETIMEDOUT"), l.connect)), { abort: function() {
    c = !0, o && o.abort();
  } };
  function w(d) {
    m = !0, o.abort();
    const S = new Error(d === "ESOCKETTIMEDOUT" ? `Socket timed out on request to ${n.url}` : `Connection timed out on request to ${n.url}`);
    S.code = d, t.channels.error.publish(S);
  }
  function f(d) {
    (d || c || o && o.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket);
  }
  function b(d) {
    if (y) return;
    f(!0), y = !0, o = null;
    const S = d || new Error(`Network error while attempting to reach ${n.url}`);
    S.isNetworkError = !0, S.request = n, e(S);
  }
}, Ei = (t = [], e = wi) => Br(t, e);
var yr, mr, vr, gr, br, qt = { exports: {} };
br || (br = 1, function(t, e) {
  e.formatArgs = function(n) {
    if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
    const i = "color: " + this.color;
    n.splice(1, 0, i, "color: inherit");
    let s = 0, o = 0;
    n[0].replace(/%[a-zA-Z%]/g, (a) => {
      a !== "%%" && (s++, a === "%c" && (o = s));
    }), n.splice(o, 0, i);
  }, e.save = function(n) {
    try {
      n ? e.storage.setItem("debug", n) : e.storage.removeItem("debug");
    } catch {
    }
  }, e.load = function() {
    let n;
    try {
      n = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
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
  }), t.exports = (gr ? vr : (gr = 1, vr = function(n) {
    function i(a) {
      let l, c, y, m = null;
      function w(...f) {
        if (!w.enabled) return;
        const b = w, d = Number(/* @__PURE__ */ new Date()), S = d - (l || d);
        b.diff = S, b.prev = l, b.curr = d, l = d, f[0] = i.coerce(f[0]), typeof f[0] != "string" && f.unshift("%O");
        let _ = 0;
        f[0] = f[0].replace(/%([a-zA-Z%])/g, (x, A) => {
          if (x === "%%") return "%";
          _++;
          const q = i.formatters[A];
          if (typeof q == "function") {
            const U = f[_];
            x = q.call(b, U), f.splice(_, 1), _--;
          }
          return x;
        }), i.formatArgs.call(b, f), (b.log || i.log).apply(b, f);
      }
      return w.namespace = a, w.useColors = i.useColors(), w.color = i.selectColor(a), w.extend = s, w.destroy = i.destroy, Object.defineProperty(w, "enabled", { enumerable: !0, configurable: !1, get: () => m !== null ? m : (c !== i.namespaces && (c = i.namespaces, y = i.enabled(a)), y), set: (f) => {
        m = f;
      } }), typeof i.init == "function" && i.init(w), w;
    }
    function s(a, l) {
      const c = i(this.namespace + (typeof l > "u" ? ":" : l) + a);
      return c.log = this.log, c;
    }
    function o(a, l) {
      let c = 0, y = 0, m = -1, w = 0;
      for (; c < a.length; ) if (y < l.length && (l[y] === a[c] || l[y] === "*")) l[y] === "*" ? (m = y, w = c, y++) : (c++, y++);
      else {
        if (m === -1) return !1;
        y = m + 1, w++, c = w;
      }
      for (; y < l.length && l[y] === "*"; ) y++;
      return y === l.length;
    }
    return i.debug = i, i.default = i, i.coerce = function(a) {
      return a instanceof Error ? a.stack || a.message : a;
    }, i.disable = function() {
      const a = [...i.names, ...i.skips.map((l) => "-" + l)].join(",");
      return i.enable(""), a;
    }, i.enable = function(a) {
      i.save(a), i.namespaces = a, i.names = [], i.skips = [];
      const l = (typeof a == "string" ? a : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const c of l) c[0] === "-" ? i.skips.push(c.slice(1)) : i.names.push(c);
    }, i.enabled = function(a) {
      for (const l of i.skips) if (o(a, l)) return !1;
      for (const l of i.names) if (o(a, l)) return !0;
      return !1;
    }, i.humanize = function() {
      if (mr) return yr;
      mr = 1;
      var a = 1e3, l = 60 * a, c = 60 * l, y = 24 * c, m = 7 * y;
      function w(f, b, d, S) {
        var _ = b >= 1.5 * d;
        return Math.round(f / d) + " " + S + (_ ? "s" : "");
      }
      return yr = function(f, b) {
        b = b || {};
        var d, S, _ = typeof f;
        if (_ === "string" && f.length > 0) return function(x) {
          if (!((x = String(x)).length > 100)) {
            var A = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(x);
            if (A) {
              var q = parseFloat(A[1]);
              switch ((A[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return 315576e5 * q;
                case "weeks":
                case "week":
                case "w":
                  return q * m;
                case "days":
                case "day":
                case "d":
                  return q * y;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return q * c;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return q * l;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return q * a;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return q;
                default:
                  return;
              }
            }
          }
        }(f);
        if (_ === "number" && isFinite(f)) return b.long ? (d = f, (S = Math.abs(d)) >= y ? w(d, S, y, "day") : S >= c ? w(d, S, c, "hour") : S >= l ? w(d, S, l, "minute") : S >= a ? w(d, S, a, "second") : d + " ms") : function(x) {
          var A = Math.abs(x);
          return A >= y ? Math.round(x / y) + "d" : A >= c ? Math.round(x / c) + "h" : A >= l ? Math.round(x / l) + "m" : A >= a ? Math.round(x / a) + "s" : x + "ms";
        }(f);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(f));
      };
    }(), i.destroy = function() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }, Object.keys(n).forEach((a) => {
      i[a] = n[a];
    }), i.names = [], i.skips = [], i.formatters = {}, i.selectColor = function(a) {
      let l = 0;
      for (let c = 0; c < a.length; c++) l = (l << 5) - l + a.charCodeAt(c), l |= 0;
      return i.colors[Math.abs(l) % i.colors.length];
    }, i.enable(i.load()), i;
  }))(e);
  const { formatters: r } = t.exports;
  r.j = function(n) {
    try {
      return JSON.stringify(n);
    } catch (i) {
      return "[UnexpectedJSONParseError]: " + i.message;
    }
  };
}(qt, qt.exports)), qt.exports;
const Ci = typeof Buffer > "u" ? () => !1 : (t) => Buffer.isBuffer(t);
function wr(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Si(t) {
  if (wr(t) === !1) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(wr(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1);
}
const Ii = ["boolean", "string", "number"];
function Oi() {
  return { processOptions: (t) => {
    const e = t.body;
    return !e || typeof e.pipe == "function" || Ci(e) || Ii.indexOf(typeof e) === -1 && !Array.isArray(e) && !Si(e) ? t : Object.assign({}, t, { body: JSON.stringify(t.body), headers: Object.assign({}, t.headers, { "Content-Type": "application/json" }) });
  } };
}
function xi(t) {
  return { onResponse: (r) => {
    const n = r.headers["content-type"] || "", i = t && t.force || n.indexOf("application/json") !== -1;
    return r.body && n && i ? Object.assign({}, r, { body: e(r.body) }) : r;
  }, processOptions: (r) => Object.assign({}, r, { headers: Object.assign({ Accept: "application/json" }, r.headers) }) };
  function e(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw n.message = `Failed to parsed response body as JSON: ${n.message}`, n;
    }
  }
}
let Be = {};
typeof globalThis < "u" ? Be = globalThis : typeof window < "u" ? Be = window : typeof global < "u" ? Be = global : typeof self < "u" && (Be = self);
var Ai = Be;
function _i(t = {}) {
  const e = t.implementation || Ai.Observable;
  if (!e) throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return { onReturn: (r, n) => new e((i) => (r.error.subscribe((s) => i.error(s)), r.progress.subscribe((s) => i.next(Object.assign({ type: "progress" }, s))), r.response.subscribe((s) => {
    i.next(Object.assign({ type: "response" }, s)), i.complete();
  }), r.request.publish(n), () => r.abort.publish())) };
}
function $i() {
  return { onRequest: (t) => {
    if (t.adapter !== "xhr") return;
    const e = t.request, r = t.context;
    function n(i) {
      return (s) => {
        const o = s.lengthComputable ? s.loaded / s.total * 100 : -1;
        r.channels.progress.publish({ stage: i, percent: o, total: s.total, loaded: s.loaded, lengthComputable: s.lengthComputable });
      };
    }
    "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"));
  } };
}
var Wr = (t, e, r) => (r.method === "GET" || r.method === "HEAD") && (t.isNetworkError || !1);
function ji(t) {
  return 100 * Math.pow(2, t) + 100 * Math.random();
}
const Bt = (t = {}) => ((e) => {
  const r = e.maxRetries || 5, n = e.retryDelay || ji, i = e.shouldRetry;
  return { onError: (s, o) => {
    const a = o.options, l = a.maxRetries || r, c = a.retryDelay || n, y = a.shouldRetry || i, m = a.attemptNumber || 0;
    if ((w = a.body) !== null && typeof w == "object" && typeof w.pipe == "function" || !y(s, m, a) || m >= l) return s;
    var w;
    const f = Object.assign({}, o, { options: Object.assign({}, a, { attemptNumber: m + 1 }) });
    return setTimeout(() => o.channels.request.publish(f), c(m)), null;
  } };
})({ shouldRetry: Wr, ...t });
Bt.shouldRetry = Wr;
var Nt = function(t, e) {
  return Nt = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Nt(t, e);
};
function fe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Nt(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function Ti(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(y) {
      try {
        c(n.next(y));
      } catch (m) {
        o(m);
      }
    }
    function l(y) {
      try {
        c(n.throw(y));
      } catch (m) {
        o(m);
      }
    }
    function c(y) {
      y.done ? s(y.value) : i(y.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
}
function Gr(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(c) {
    return function(y) {
      return l([c, y]);
    };
  }
  function l(c) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, c[0] && (r = 0)), r; ) try {
      if (n = 1, i && (s = c[0] & 2 ? i.return : c[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, c[1])).done) return s;
      switch (i = 0, s && (c = [c[0] & 2, s.value]), c[0]) {
        case 0:
        case 1:
          s = c;
          break;
        case 4:
          return r.label++, { value: c[1], done: !1 };
        case 5:
          r.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            r = 0;
            continue;
          }
          if (c[0] === 3 && (!s || c[1] > s[0] && c[1] < s[3])) {
            r.label = c[1];
            break;
          }
          if (c[0] === 6 && r.label < s[1]) {
            r.label = s[1], s = c;
            break;
          }
          if (s && r.label < s[2]) {
            r.label = s[2], r.ops.push(c);
            break;
          }
          s[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      c = e.call(t, r);
    } catch (y) {
      c = [6, y], i = 0;
    } finally {
      n = s = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function De(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r) return r.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function ce(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r) return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; ) s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return s;
}
function le(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, i = e.length, s; n < i; n++)
    (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function Re(t) {
  return this instanceof Re ? (this.v = t, this) : new Re(t);
}
function Ri(t, e, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(f) {
    return function(b) {
      return Promise.resolve(b).then(f, m);
    };
  }
  function a(f, b) {
    n[f] && (i[f] = function(d) {
      return new Promise(function(S, _) {
        s.push([f, d, S, _]) > 1 || l(f, d);
      });
    }, b && (i[f] = b(i[f])));
  }
  function l(f, b) {
    try {
      c(n[f](b));
    } catch (d) {
      w(s[0][3], d);
    }
  }
  function c(f) {
    f.value instanceof Re ? Promise.resolve(f.value.v).then(y, m) : w(s[0][2], f);
  }
  function y(f) {
    l("next", f);
  }
  function m(f) {
    l("throw", f);
  }
  function w(f, b) {
    f(b), s.shift(), s.length && l(s[0][0], s[0][1]);
  }
}
function Pi(t) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof De == "function" ? De(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(o) {
      return new Promise(function(a, l) {
        o = t[s](o), i(a, l, o.done, o.value);
      });
    };
  }
  function i(s, o, a, l) {
    Promise.resolve(l).then(function(c) {
      s({ value: c, done: a });
    }, o);
  }
}
function M(t) {
  return typeof t == "function";
}
function Wt(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var Mt = Wt(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function yt(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var at = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, i, s;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var a = De(o), l = a.next(); !l.done; l = a.next()) {
              var c = l.value;
              c.remove(this);
            }
          } catch (d) {
            e = { error: d };
          } finally {
            try {
              l && !l.done && (r = a.return) && r.call(a);
            } finally {
              if (e) throw e.error;
            }
          }
        else
          o.remove(this);
      var y = this.initialTeardown;
      if (M(y))
        try {
          y();
        } catch (d) {
          s = d instanceof Mt ? d.errors : [d];
        }
      var m = this._finalizers;
      if (m) {
        this._finalizers = null;
        try {
          for (var w = De(m), f = w.next(); !f.done; f = w.next()) {
            var b = f.value;
            try {
              Er(b);
            } catch (d) {
              s = s ?? [], d instanceof Mt ? s = le(le([], ce(s)), ce(d.errors)) : s.push(d);
            }
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            f && !f.done && (i = w.return) && i.call(w);
          } finally {
            if (n) throw n.error;
          }
        }
      }
      if (s)
        throw new Mt(s);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        Er(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && yt(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && yt(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}(), Qr = at.EMPTY;
function Jr(t) {
  return t instanceof at || t && "closed" in t && M(t.remove) && M(t.add) && M(t.unsubscribe);
}
function Er(t) {
  M(t) ? t() : t.unsubscribe();
}
var qi = {
  Promise: void 0
}, Mi = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, le([t, e], ce(r)));
  },
  clearTimeout: function(t) {
    return clearTimeout(t);
  },
  delegate: void 0
};
function Yr(t) {
  Mi.setTimeout(function() {
    throw t;
  });
}
function Cr() {
}
function dt(t) {
  t();
}
var Gt = function(t) {
  fe(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, Jr(r) && r.add(n)) : n.destination = Ui, n;
  }
  return e.create = function(r, n, i) {
    return new Ue(r, n, i);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
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
}(at), Fi = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        ht(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        ht(n);
      }
    else
      ht(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        ht(r);
      }
  }, t;
}(), Ue = function(t) {
  fe(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this, o;
    return M(r) || !r ? o = {
      next: r ?? void 0,
      error: n ?? void 0,
      complete: i ?? void 0
    } : o = r, s.destination = new Fi(o), s;
  }
  return e;
}(Gt);
function ht(t) {
  Yr(t);
}
function Di(t) {
  throw t;
}
var Ui = {
  closed: !0,
  next: Cr,
  error: Di,
  complete: Cr
}, Qt = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function St(t) {
  return t;
}
function ki() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Xr(t);
}
function Xr(t) {
  return t.length === 0 ? St : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var D = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this, s = Vi(e) ? e : new Ue(e, r, n);
    return dt(function() {
      var o = i, a = o.operator, l = o.source;
      s.add(a ? a.call(s, l) : l ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Sr(r), new r(function(i, s) {
      var o = new Ue({
        next: function(a) {
          try {
            e(a);
          } catch (l) {
            s(l), o.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      n.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[Qt] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return Xr(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Sr(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Sr(t) {
  var e;
  return (e = t ?? qi.Promise) !== null && e !== void 0 ? e : Promise;
}
function Li(t) {
  return t && M(t.next) && M(t.error) && M(t.complete);
}
function Vi(t) {
  return t && t instanceof Gt || Li(t) && Jr(t);
}
function Ni(t) {
  return M(t == null ? void 0 : t.lift);
}
function ee(t) {
  return function(e) {
    if (Ni(e))
      return e.lift(function(r) {
        try {
          return t(r, this);
        } catch (n) {
          this.error(n);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function we(t, e, r, n, i) {
  return new Hi(t, e, r, n, i);
}
var Hi = function(t) {
  fe(e, t);
  function e(r, n, i, s, o, a) {
    var l = t.call(this, r) || this;
    return l.onFinalize = o, l.shouldUnsubscribe = a, l._next = n ? function(c) {
      try {
        n(c);
      } catch (y) {
        r.error(y);
      }
    } : t.prototype._next, l._error = s ? function(c) {
      try {
        s(c);
      } catch (y) {
        r.error(y);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, l._complete = i ? function() {
      try {
        i();
      } catch (c) {
        r.error(c);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, l;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
}(Gt), zi = Wt(function(t) {
  return function() {
    t(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), Jt = function(t) {
  fe(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype.lift = function(r) {
    var n = new Ir(this, this);
    return n.operator = r, n;
  }, e.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new zi();
  }, e.prototype.next = function(r) {
    var n = this;
    dt(function() {
      var i, s;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var o = De(n.currentObservers), a = o.next(); !a.done; a = o.next()) {
            var l = a.value;
            l.next(r);
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            a && !a.done && (s = o.return) && s.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    });
  }, e.prototype.error = function(r) {
    var n = this;
    dt(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = r;
        for (var i = n.observers; i.length; )
          i.shift().error(r);
      }
    });
  }, e.prototype.complete = function() {
    var r = this;
    dt(function() {
      if (r._throwIfClosed(), !r.isStopped) {
        r.isStopped = !0;
        for (var n = r.observers; n.length; )
          n.shift().complete();
      }
    });
  }, e.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(e.prototype, "observed", {
    get: function() {
      var r;
      return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype._trySubscribe = function(r) {
    return this._throwIfClosed(), t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r);
  }, e.prototype._innerSubscribe = function(r) {
    var n = this, i = this, s = i.hasError, o = i.isStopped, a = i.observers;
    return s || o ? Qr : (this.currentObservers = null, a.push(r), new at(function() {
      n.currentObservers = null, yt(a, r);
    }));
  }, e.prototype._checkFinalizedStatuses = function(r) {
    var n = this, i = n.hasError, s = n.thrownError, o = n.isStopped;
    i ? r.error(s) : o && r.complete();
  }, e.prototype.asObservable = function() {
    var r = new D();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Ir(r, n);
  }, e;
}(D), Ir = function(t) {
  fe(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return e.prototype.next = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i === void 0 || i.call(n, r);
  }, e.prototype.error = function(r) {
    var n, i;
    (i = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i === void 0 || i.call(n, r);
  }, e.prototype.complete = function() {
    var r, n;
    (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r);
  }, e.prototype._subscribe = function(r) {
    var n, i;
    return (i = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && i !== void 0 ? i : Qr;
  }, e;
}(Jt), Yt = {
  now: function() {
    return (Yt.delegate || Date).now();
  },
  delegate: void 0
}, Bi = function(t) {
  fe(e, t);
  function e(r, n, i) {
    r === void 0 && (r = 1 / 0), n === void 0 && (n = 1 / 0), i === void 0 && (i = Yt);
    var s = t.call(this) || this;
    return s._bufferSize = r, s._windowTime = n, s._timestampProvider = i, s._buffer = [], s._infiniteTimeWindow = !0, s._infiniteTimeWindow = n === 1 / 0, s._bufferSize = Math.max(1, r), s._windowTime = Math.max(1, n), s;
  }
  return e.prototype.next = function(r) {
    var n = this, i = n.isStopped, s = n._buffer, o = n._infiniteTimeWindow, a = n._timestampProvider, l = n._windowTime;
    i || (s.push(r), !o && s.push(a.now() + l)), this._trimBuffer(), t.prototype.next.call(this, r);
  }, e.prototype._subscribe = function(r) {
    this._throwIfClosed(), this._trimBuffer();
    for (var n = this._innerSubscribe(r), i = this, s = i._infiniteTimeWindow, o = i._buffer, a = o.slice(), l = 0; l < a.length && !r.closed; l += s ? 1 : 2)
      r.next(a[l]);
    return this._checkFinalizedStatuses(r), n;
  }, e.prototype._trimBuffer = function() {
    var r = this, n = r._bufferSize, i = r._timestampProvider, s = r._buffer, o = r._infiniteTimeWindow, a = (o ? 1 : 2) * n;
    if (n < 1 / 0 && a < s.length && s.splice(0, s.length - a), !o) {
      for (var l = i.now(), c = 0, y = 1; y < s.length && s[y] <= l; y += 2)
        c = y;
      c && s.splice(0, c + 1);
    }
  }, e;
}(Jt), Wi = function(t) {
  fe(e, t);
  function e(r, n) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(r, n) {
    return this;
  }, e;
}(at), Or = {
  setInterval: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setInterval.apply(void 0, le([t, e], ce(r)));
  },
  clearInterval: function(t) {
    return clearInterval(t);
  },
  delegate: void 0
}, Gi = function(t) {
  fe(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i.pending = !1, i;
  }
  return e.prototype.schedule = function(r, n) {
    var i;
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = r;
    var s = this.id, o = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(o, s, n)), this.pending = !0, this.delay = n, this.id = (i = this.id) !== null && i !== void 0 ? i : this.requestAsyncId(o, this.id, n), this;
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), Or.setInterval(r.flush.bind(r, this), i);
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i != null && this.delay === i && this.pending === !1)
      return n;
    n != null && Or.clearInterval(n);
  }, e.prototype.execute = function(r, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(r, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(r, n) {
    var i = !1, s;
    try {
      this.work(r);
    } catch (o) {
      i = !0, s = o || new Error("Scheduled action threw falsy error");
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var r = this, n = r.id, i = r.scheduler, s = i.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, yt(s, this), n != null && (this.id = this.recycleAsyncId(i, n, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Wi), xr = function() {
  function t(e, r) {
    r === void 0 && (r = t.now), this.schedulerActionCtor = e, this.now = r;
  }
  return t.prototype.schedule = function(e, r, n) {
    return r === void 0 && (r = 0), new this.schedulerActionCtor(this, e).schedule(n, r);
  }, t.now = Yt.now, t;
}(), Qi = function(t) {
  fe(e, t);
  function e(r, n) {
    n === void 0 && (n = xr.now);
    var i = t.call(this, r, n) || this;
    return i.actions = [], i._active = !1, i;
  }
  return e.prototype.flush = function(r) {
    var n = this.actions;
    if (this._active) {
      n.push(r);
      return;
    }
    var i;
    this._active = !0;
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (r = n.shift());
    if (this._active = !1, i) {
      for (; r = n.shift(); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(xr), Ji = new Qi(Gi), Yi = Ji, Zr = new D(function(t) {
  return t.complete();
});
function Xi(t) {
  return t && M(t.schedule);
}
function Xt(t) {
  return t[t.length - 1];
}
function Zi(t) {
  return M(Xt(t)) ? t.pop() : void 0;
}
function Zt(t) {
  return Xi(Xt(t)) ? t.pop() : void 0;
}
function Ki(t, e) {
  return typeof Xt(t) == "number" ? t.pop() : e;
}
var Kr = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function en(t) {
  return M(t == null ? void 0 : t.then);
}
function tn(t) {
  return M(t[Qt]);
}
function rn(t) {
  return Symbol.asyncIterator && M(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function nn(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function es() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var sn = es();
function on(t) {
  return M(t == null ? void 0 : t[sn]);
}
function an(t) {
  return Ri(this, arguments, function() {
    var r, n, i, s;
    return Gr(this, function(o) {
      switch (o.label) {
        case 0:
          r = t.getReader(), o.label = 1;
        case 1:
          o.trys.push([1, , 9, 10]), o.label = 2;
        case 2:
          return [4, Re(r.read())];
        case 3:
          return n = o.sent(), i = n.value, s = n.done, s ? [4, Re(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Re(i)];
        case 6:
          return [4, o.sent()];
        case 7:
          return o.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return r.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function un(t) {
  return M(t == null ? void 0 : t.getReader);
}
function te(t) {
  if (t instanceof D)
    return t;
  if (t != null) {
    if (tn(t))
      return ts(t);
    if (Kr(t))
      return rs(t);
    if (en(t))
      return ns(t);
    if (rn(t))
      return cn(t);
    if (on(t))
      return is(t);
    if (un(t))
      return ss(t);
  }
  throw nn(t);
}
function ts(t) {
  return new D(function(e) {
    var r = t[Qt]();
    if (M(r.subscribe))
      return r.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function rs(t) {
  return new D(function(e) {
    for (var r = 0; r < t.length && !e.closed; r++)
      e.next(t[r]);
    e.complete();
  });
}
function ns(t) {
  return new D(function(e) {
    t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, Yr);
  });
}
function is(t) {
  return new D(function(e) {
    var r, n;
    try {
      for (var i = De(t), s = i.next(); !s.done; s = i.next()) {
        var o = s.value;
        if (e.next(o), e.closed)
          return;
      }
    } catch (a) {
      r = { error: a };
    } finally {
      try {
        s && !s.done && (n = i.return) && n.call(i);
      } finally {
        if (r) throw r.error;
      }
    }
    e.complete();
  });
}
function cn(t) {
  return new D(function(e) {
    os(t, e).catch(function(r) {
      return e.error(r);
    });
  });
}
function ss(t) {
  return cn(an(t));
}
function os(t, e) {
  var r, n, i, s;
  return Ti(this, void 0, void 0, function() {
    var o, a;
    return Gr(this, function(l) {
      switch (l.label) {
        case 0:
          l.trys.push([0, 5, 6, 11]), r = Pi(t), l.label = 1;
        case 1:
          return [4, r.next()];
        case 2:
          if (n = l.sent(), !!n.done) return [3, 4];
          if (o = n.value, e.next(o), e.closed)
            return [2];
          l.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return a = l.sent(), i = { error: a }, [3, 11];
        case 6:
          return l.trys.push([6, , 9, 10]), n && !n.done && (s = r.return) ? [4, s.call(r)] : [3, 8];
        case 7:
          l.sent(), l.label = 8;
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
function xe(t, e, r, n, i) {
  n === void 0 && (n = 0), i === void 0 && (i = !1);
  var s = e.schedule(function() {
    r(), i ? t.add(this.schedule(null, n)) : this.unsubscribe();
  }, n);
  if (t.add(s), !i)
    return s;
}
function ln(t, e) {
  return e === void 0 && (e = 0), ee(function(r, n) {
    r.subscribe(we(n, function(i) {
      return xe(n, t, function() {
        return n.next(i);
      }, e);
    }, function() {
      return xe(n, t, function() {
        return n.complete();
      }, e);
    }, function(i) {
      return xe(n, t, function() {
        return n.error(i);
      }, e);
    }));
  });
}
function fn(t, e) {
  return e === void 0 && (e = 0), ee(function(r, n) {
    n.add(t.schedule(function() {
      return r.subscribe(n);
    }, e));
  });
}
function as(t, e) {
  return te(t).pipe(fn(e), ln(e));
}
function us(t, e) {
  return te(t).pipe(fn(e), ln(e));
}
function cs(t, e) {
  return new D(function(r) {
    var n = 0;
    return e.schedule(function() {
      n === t.length ? r.complete() : (r.next(t[n++]), r.closed || this.schedule());
    });
  });
}
function ls(t, e) {
  return new D(function(r) {
    var n;
    return xe(r, e, function() {
      n = t[sn](), xe(r, e, function() {
        var i, s, o;
        try {
          i = n.next(), s = i.value, o = i.done;
        } catch (a) {
          r.error(a);
          return;
        }
        o ? r.complete() : r.next(s);
      }, 0, !0);
    }), function() {
      return M(n == null ? void 0 : n.return) && n.return();
    };
  });
}
function hn(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new D(function(r) {
    xe(r, e, function() {
      var n = t[Symbol.asyncIterator]();
      xe(r, e, function() {
        n.next().then(function(i) {
          i.done ? r.complete() : r.next(i.value);
        });
      }, 0, !0);
    });
  });
}
function fs(t, e) {
  return hn(an(t), e);
}
function hs(t, e) {
  if (t != null) {
    if (tn(t))
      return as(t, e);
    if (Kr(t))
      return cs(t, e);
    if (en(t))
      return us(t, e);
    if (rn(t))
      return hn(t, e);
    if (on(t))
      return ls(t, e);
    if (un(t))
      return fs(t, e);
  }
  throw nn(t);
}
function ut(t, e) {
  return e ? hs(t, e) : te(t);
}
function It() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Zt(t);
  return ut(t, r);
}
function dn(t, e) {
  var r = M(t) ? t : function() {
    return t;
  }, n = function(i) {
    return i.error(r());
  };
  return new D(n);
}
function ds(t) {
  return !!t && (t instanceof D || M(t.lift) && M(t.subscribe));
}
var pn = Wt(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
function $(t, e) {
  return new Promise(function(r, n) {
    var i = !1, s;
    t.subscribe({
      next: function(o) {
        s = o, i = !0;
      },
      error: n,
      complete: function() {
        i ? r(s) : n(new pn());
      }
    });
  });
}
function Ar(t, e) {
  return new Promise(function(r, n) {
    var i = new Ue({
      next: function(s) {
        r(s), i.unsubscribe();
      },
      error: n,
      complete: function() {
        n(new pn());
      }
    });
    t.subscribe(i);
  });
}
function ps(t) {
  return t instanceof Date && !isNaN(t);
}
function k(t, e) {
  return ee(function(r, n) {
    var i = 0;
    r.subscribe(we(n, function(s) {
      n.next(t.call(e, s, i++));
    }));
  });
}
var ys = Array.isArray;
function ms(t, e) {
  return ys(e) ? t.apply(void 0, le([], ce(e))) : t(e);
}
function vs(t) {
  return k(function(e) {
    return ms(t, e);
  });
}
function gs(t, e, r) {
  return r === void 0 && (r = St), function(n) {
    _r(e, function() {
      for (var i = t.length, s = new Array(i), o = i, a = i, l = function(y) {
        _r(e, function() {
          var m = ut(t[y], e), w = !1;
          m.subscribe(we(n, function(f) {
            s[y] = f, w || (w = !0, a--), a || n.next(r(s.slice()));
          }, function() {
            --o || n.complete();
          }));
        }, n);
      }, c = 0; c < i; c++)
        l(c);
    });
  };
}
function _r(t, e, r) {
  e();
}
function bs(t, e, r, n, i, s, o, a) {
  var l = [], c = 0, y = 0, m = !1, w = function() {
    m && !l.length && !c && e.complete();
  }, f = function(d) {
    return c < n ? b(d) : l.push(d);
  }, b = function(d) {
    c++;
    var S = !1;
    te(r(d, y++)).subscribe(we(e, function(_) {
      e.next(_);
    }, function() {
      S = !0;
    }, void 0, function() {
      if (S)
        try {
          c--;
          for (var _ = function() {
            var x = l.shift();
            o || b(x);
          }; l.length && c < n; )
            _();
          w();
        } catch (x) {
          e.error(x);
        }
    }));
  };
  return t.subscribe(we(e, f, function() {
    m = !0, w();
  })), function() {
  };
}
function ct(t, e, r) {
  return r === void 0 && (r = 1 / 0), M(e) ? ct(function(n, i) {
    return k(function(s, o) {
      return e(n, s, i, o);
    })(te(t(n, i)));
  }, r) : (typeof e == "number" && (r = e), ee(function(n, i) {
    return bs(n, i, t, r);
  }));
}
function yn(t) {
  return t === void 0 && (t = 1 / 0), ct(St, t);
}
function ws() {
  return yn(1);
}
function mn() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return ws()(ut(t, Zt(t)));
}
function vn(t) {
  return new D(function(e) {
    te(t()).subscribe(e);
  });
}
function Es(t, e, r) {
  return r === void 0 && (r = Yi), new D(function(n) {
    var i = ps(t) ? +t - r.now() : t;
    i < 0 && (i = 0);
    var s = 0;
    return r.schedule(function() {
      n.closed || (n.next(s++), n.complete());
    }, i);
  });
}
function Cs() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Zt(t), n = Ki(t, 1 / 0), i = t;
  return i.length ? i.length === 1 ? te(i[0]) : yn(n)(ut(i, r)) : Zr;
}
var Ss = Array.isArray;
function Is(t) {
  return t.length === 1 && Ss(t[0]) ? t[0] : t;
}
function Ve(t, e) {
  return ee(function(r, n) {
    var i = 0;
    r.subscribe(we(n, function(s) {
      return t.call(e, s, i++) && n.next(s);
    }));
  });
}
function Kt(t) {
  return ee(function(e, r) {
    var n = null, i = !1, s;
    n = e.subscribe(we(r, void 0, void 0, function(o) {
      s = te(t(o, Kt(t)(e))), n ? (n.unsubscribe(), n = null, s.subscribe(r)) : i = !0;
    })), i && (n.unsubscribe(), n = null, s.subscribe(r));
  });
}
function gn() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Zi(t);
  return r ? ki(gn.apply(void 0, le([], ce(t))), vs(r)) : ee(function(n, i) {
    gs(le([n], ce(Is(t))))(i);
  });
}
function Os() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return gn.apply(void 0, le([], ce(t)));
}
function bn(t) {
  return ee(function(e, r) {
    try {
      e.subscribe(r);
    } finally {
      r.add(t);
    }
  });
}
function wn(t) {
  t === void 0 && (t = {});
  var e = t.connector, r = e === void 0 ? function() {
    return new Jt();
  } : e, n = t.resetOnError, i = n === void 0 ? !0 : n, s = t.resetOnComplete, o = s === void 0 ? !0 : s, a = t.resetOnRefCountZero, l = a === void 0 ? !0 : a;
  return function(c) {
    var y, m, w, f = 0, b = !1, d = !1, S = function() {
      m == null || m.unsubscribe(), m = void 0;
    }, _ = function() {
      S(), y = w = void 0, b = d = !1;
    }, x = function() {
      var A = y;
      _(), A == null || A.unsubscribe();
    };
    return ee(function(A, q) {
      f++, !d && !b && S();
      var U = w = w ?? r();
      q.add(function() {
        f--, f === 0 && !d && !b && (m = Ft(x, l));
      }), U.subscribe(q), !y && f > 0 && (y = new Ue({
        next: function(N) {
          return U.next(N);
        },
        error: function(N) {
          d = !0, S(), m = Ft(_, i, N), U.error(N);
        },
        complete: function() {
          b = !0, S(), m = Ft(_, o), U.complete();
        }
      }), te(A).subscribe(y));
    })(c);
  };
}
function Ft(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  if (e === !0) {
    t();
    return;
  }
  if (e !== !1) {
    var i = new Ue({
      next: function() {
        i.unsubscribe(), t();
      }
    });
    return te(e.apply(void 0, le([], ce(r)))).subscribe(i);
  }
}
function xs(t, e, r) {
  var n, i = !1;
  return n = t, wn({
    connector: function() {
      return new Bi(n, e, r);
    },
    resetOnError: !0,
    resetOnComplete: !1,
    resetOnRefCountZero: i
  });
}
function As(t, e, r) {
  var n = M(t) || e || r ? { next: t, error: e, complete: r } : t;
  return n ? ee(function(i, s) {
    var o;
    (o = n.subscribe) === null || o === void 0 || o.call(n);
    var a = !0;
    i.subscribe(we(s, function(l) {
      var c;
      (c = n.next) === null || c === void 0 || c.call(n, l), s.next(l);
    }, function() {
      var l;
      a = !1, (l = n.complete) === null || l === void 0 || l.call(n), s.complete();
    }, function(l) {
      var c;
      a = !1, (c = n.error) === null || c === void 0 || c.call(n, l), s.error(l);
    }, function() {
      var l, c;
      a && ((l = n.unsubscribe) === null || l === void 0 || l.call(n)), (c = n.finalize) === null || c === void 0 || c.call(n);
    }));
  }) : St;
}
function En(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
var Cn = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 }, er = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 }, _s = new Array(4).fill(String.fromCodePoint(er[0])).join("");
function $s(t) {
  let e = JSON.stringify(t);
  return `${_s}${Array.from(e).map((r) => {
    let n = r.charCodeAt(0);
    if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);
    return Array.from(n.toString(4).padStart(4, "0")).map((i) => String.fromCodePoint(er[i])).join("");
  }).join("")}`;
}
function js(t) {
  return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? !1 : !!Date.parse(t);
}
function Ts(t) {
  try {
    new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function Ia(t, e, r = "auto") {
  return r === !0 || r === "auto" && (js(t) || Ts(t)) ? t : `${t}${$s(e)}`;
}
Object.fromEntries(Object.entries(er).map((t) => t.reverse()));
Object.fromEntries(Object.entries(Cn).map((t) => t.reverse()));
var Rs = `${Object.values(Cn).map((t) => `\\u{${t.toString(16)}}`).join("")}`, $r = new RegExp(`[${Rs}]{4,}`, "gu");
function Ps(t) {
  var e;
  return { cleaned: t.replace($r, ""), encoded: ((e = t.match($r)) == null ? void 0 : e[0]) || "" };
}
function qs(t) {
  return t && JSON.parse(Ps(JSON.stringify(t)).cleaned);
}
function Ms(t) {
  return qs(t);
}
const Fs = "drafts", Ds = "versions", ke = ".", mt = `${Fs}${ke}`, Sn = `${Ds}${ke}`;
function Ot(t) {
  return t.startsWith(mt);
}
function xt(t) {
  return t.startsWith(Sn);
}
function Us(t) {
  if (xt(t)) {
    const e = _t(t);
    return mt + e;
  }
  return Ot(t) ? t : mt + t;
}
function At(t, e) {
  if (e === "drafts" || e === "published")
    throw new Error('Version can not be "published" or "drafts"');
  return `${Sn}${e}${ke}${_t(t)}`;
}
function In(t) {
  if (!xt(t)) return;
  const [e, r, ...n] = t.split(ke);
  return r;
}
function _t(t) {
  return xt(t) ? t.split(ke).slice(2).join(ke) : Ot(t) ? t.slice(mt.length) : t;
}
let ks = (t) => crypto.getRandomValues(new Uint8Array(t)), Ls = (t, e, r) => {
  let n = (2 << Math.log(t.length - 1) / Math.LN2) - 1, i = -~(1.6 * n * e / t.length);
  return (s = e) => {
    let o = "";
    for (; ; ) {
      let a = r(i), l = i | 0;
      for (; l--; )
        if (o += t[a[l] & n] || "", o.length === s) return o;
    }
  };
}, Vs = (t, e = 21) => Ls(t, e, ks);
const jr = /\r\n|[\n\r\u2028\u2029]/;
function Ns(t, e, r) {
  const n = t.split(jr), i = {
    start: Tr(e.start, n),
    end: e.end ? Tr(e.end, n) : void 0
  }, { start: s, end: o, markerLines: a } = Hs(i, n), l = `${o}`.length;
  return t.split(jr, o).slice(s, o).map((c, y) => {
    const m = s + 1 + y, w = ` ${` ${m}`.slice(-l)} |`, f = a[m], b = !a[m + 1];
    if (!f)
      return ` ${w}${c.length > 0 ? ` ${c}` : ""}`;
    let d = "";
    if (Array.isArray(f)) {
      const S = c.slice(0, Math.max(f[0] - 1, 0)).replace(/[^\t]/g, " "), _ = f[1] || 1;
      d = [
        `
 `,
        w.replace(/\d/g, " "),
        " ",
        S,
        "^".repeat(_)
      ].join(""), b && r && (d += " " + r);
    }
    return [">", w, c.length > 0 ? ` ${c}` : "", d].join("");
  }).join(`
`);
}
function Hs(t, e) {
  const r = { ...t.start }, n = { ...r, ...t.end }, i = 2, s = 3, o = r.line ?? -1, a = r.column ?? 0, l = n.line, c = n.column;
  let y = Math.max(o - (i + 1), 0), m = Math.min(e.length, l + s);
  o === -1 && (y = 0), l === -1 && (m = e.length);
  const w = l - o, f = {};
  if (w)
    for (let b = 0; b <= w; b++) {
      const d = b + o;
      if (!a)
        f[d] = !0;
      else if (b === 0) {
        const S = e[d - 1].length;
        f[d] = [a, S - a + 1];
      } else if (b === w)
        f[d] = [0, c];
      else {
        const S = e[d - b].length;
        f[d] = [0, S];
      }
    }
  else
    a === c ? a ? f[o] = [a, 0] : f[o] = !0 : f[o] = [a, c - a];
  return { start: y, end: m, markerLines: f };
}
function Tr(t, e) {
  var n;
  let r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i].length + 1;
    if (r + s > t)
      return {
        line: i + 1,
        // 1-based line
        column: t - r
        // 0-based column
      };
    r += s;
  }
  return {
    line: e.length,
    column: ((n = e[e.length - 1]) == null ? void 0 : n.length) ?? 0
  };
}
const Dt = 5;
class zs extends Error {
  constructor(r, n) {
    const i = On(r, n);
    super(i.message);
    C(this, "response");
    C(this, "statusCode", 400);
    C(this, "responseBody");
    C(this, "details");
    Object.assign(this, i);
  }
}
class Bs extends Error {
  constructor(r) {
    const n = On(r);
    super(n.message);
    C(this, "response");
    C(this, "statusCode", 500);
    C(this, "responseBody");
    C(this, "details");
    Object.assign(this, n);
  }
}
function On(t, e) {
  var s, o;
  const r = t.body, n = {
    response: t,
    statusCode: t.statusCode,
    responseBody: Qs(r, t),
    message: "",
    details: void 0
  };
  if (!En(r))
    return n.message = Ut(t, r), n;
  const i = r.error;
  if (typeof i == "string" && typeof r.message == "string")
    return n.message = `${i} - ${r.message}`, n;
  if (typeof i != "object" || i === null)
    return typeof i == "string" ? n.message = i : typeof r.message == "string" ? n.message = r.message : n.message = Ut(t, r), n;
  if (Ws(i) || Gs(i)) {
    const a = i.items || [], l = a.slice(0, Dt).map((y) => {
      var m;
      return (m = y.error) == null ? void 0 : m.description;
    }).filter(Boolean);
    let c = l.length ? `:
- ${l.join(`
- `)}` : "";
    return a.length > Dt && (c += `
...and ${a.length - Dt} more`), n.message = `${i.description}${c}`, n.details = r.error, n;
  }
  if (xn(i)) {
    const a = (o = (s = e == null ? void 0 : e.options) == null ? void 0 : s.query) == null ? void 0 : o.tag;
    return n.message = An(i, a), n.details = r.error, n;
  }
  return "description" in i && typeof i.description == "string" ? (n.message = i.description, n.details = i, n) : (n.message = Ut(t, r), n);
}
function Ws(t) {
  return "type" in t && t.type === "mutationError" && "description" in t && typeof t.description == "string";
}
function Gs(t) {
  return "type" in t && t.type === "actionError" && "description" in t && typeof t.description == "string";
}
function xn(t) {
  return En(t) && t.type === "queryParseError" && typeof t.query == "string" && typeof t.start == "number" && typeof t.end == "number";
}
function An(t, e) {
  const { query: r, start: n, end: i, description: s } = t;
  if (!r || typeof n > "u")
    return `GROQ query parse error: ${s}`;
  const o = e ? `

Tag: ${e}` : "";
  return `GROQ query parse error:
${Ns(r, { start: n, end: i }, s)}${o}`;
}
function Ut(t, e) {
  const r = typeof e == "string" ? ` (${Js(e, 100)})` : "", n = t.statusMessage ? ` ${t.statusMessage}` : "";
  return `${t.method}-request to ${t.url} resulted in HTTP ${t.statusCode}${n}${r}`;
}
function Qs(t, e) {
  return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(t, null, 2) : t;
}
function Js(t, e) {
  return t.length > e ? `${t.slice(0, e)}…` : t;
}
class Ys extends Error {
  constructor({ projectId: r }) {
    super("CorsOriginError");
    C(this, "projectId");
    C(this, "addOriginUrl");
    this.name = "CorsOriginError", this.projectId = r;
    const n = new URL(`https://sanity.io/manage/project/${r}/api`);
    if (typeof location < "u") {
      const { origin: i } = location;
      n.searchParams.set("cors", "add"), n.searchParams.set("origin", i), this.addOriginUrl = n, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${n}`;
    } else
      this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${n}`;
  }
}
const Xs = {
  onResponse: (t, e) => {
    if (t.statusCode >= 500)
      throw new Bs(t);
    if (t.statusCode >= 400)
      throw new zs(t, e);
    return t;
  }
};
function Zs() {
  const t = {};
  return {
    onResponse: (e) => {
      const r = e.headers["x-sanity-warning"], n = Array.isArray(r) ? r : [r];
      for (const i of n)
        !i || t[i] || (t[i] = !0, console.warn(i));
      return e;
    }
  };
}
function Rr(t) {
  return Ei([
    Bt({ shouldRetry: Ks }),
    ...t,
    Zs(),
    Oi(),
    xi(),
    $i(),
    Xs,
    _i({ implementation: D })
  ]);
}
function Ks(t, e, r) {
  if (r.maxRetries === 0) return !1;
  const n = r.method === "GET" || r.method === "HEAD", i = (r.uri || r.url).startsWith("/data/query"), s = t.response && (t.response.statusCode === 429 || t.response.statusCode === 502 || t.response.statusCode === 503);
  return (n || i) && s ? !0 : Bt.shouldRetry(t, e, r);
}
const eo = "https://www.sanity.io/help/";
function tr(t) {
  return eo + t;
}
const Pr = ["image", "file"], qr = ["before", "after", "replace"], _n = (t) => {
  if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t))
    throw new Error(
      "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
    );
}, to = (t) => {
  if (!/^[-a-z0-9]+$/i.test(t))
    throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
}, ro = (t) => {
  if (Pr.indexOf(t) === -1)
    throw new Error(`Invalid asset type: ${t}. Must be one of ${Pr.join(", ")}`);
}, We = (t, e) => {
  if (e === null || typeof e != "object" || Array.isArray(e))
    throw new Error(`${t}() takes an object of properties`);
}, $n = (t, e) => {
  if (typeof e != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(e) || e.includes(".."))
    throw new Error(`${t}(): "${e}" is not a valid document ID`);
}, Le = (t, e) => {
  if (!e._id)
    throw new Error(`${t}() requires that the document contains an ID ("_id" property)`);
  $n(t, e._id);
}, no = (t, e) => {
  if (typeof e != "string")
    throw new Error(`\`${t}()\`: \`${e}\` is not a valid document type`);
}, jn = (t, e) => {
  if (!e._type)
    throw new Error(`\`${t}()\` requires that the document contains a type (\`_type\` property)`);
  no(t, e._type);
}, io = (t, e) => {
  if (e._id && e._id !== t)
    throw new Error(
      `The provided document ID (\`${e._id}\`) does not match the generated version ID (\`${t}\`)`
    );
}, so = (t, e, r) => {
  const n = "insert(at, selector, items)";
  if (qr.indexOf(t) === -1) {
    const i = qr.map((s) => `"${s}"`).join(", ");
    throw new Error(`${n} takes an "at"-argument which is one of: ${i}`);
  }
  if (typeof e != "string")
    throw new Error(`${n} takes a "selector"-argument which must be a string`);
  if (!Array.isArray(r))
    throw new Error(`${n} takes an "items"-argument which must be an array`);
}, _e = (t) => {
  if (!t.dataset)
    throw new Error("`dataset` must be provided to perform queries");
  return t.dataset || "";
}, Tn = (t) => {
  if (typeof t != "string" || !/^[a-z0-9._-]{1,75}$/i.test(t))
    throw new Error(
      "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
    );
  return t;
}, Rn = (t) => {
  if (!t["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type: e, id: r } = t["~experimental_resource"];
  switch (e) {
    case "dataset": {
      if (r.split(".").length !== 2)
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
}, K = (t, e) => {
  if (e["~experimental_resource"])
    throw new Error(`\`${t}\` does not support resource-based operations`);
};
function oo(t) {
  let e = !1, r;
  return (...n) => (e || (r = t(...n), e = !0), r);
}
const $e = (t) => (
  // eslint-disable-next-line no-console
  oo((...e) => console.warn(t.join(" "), ...e))
), ao = $e([
  "Because you set `withCredentials` to true, we will override your `useCdn`",
  "setting to be false since (cookie-based) credentials are never set on the CDN"
]), uo = $e([
  "Since you haven't set a value for `useCdn`, we will deliver content using our",
  "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
  "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
]), co = $e([
  "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
  "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
]), lo = $e([
  "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"
]), fo = $e([
  "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
  `See ${tr(
    "js-client-browser-token"
  )} for more information and how to hide this warning.`
]), ho = $e([
  "You have configured Sanity client to use a token, but also provided `withCredentials: true`.",
  "This is no longer supported - only token will be used - remove `withCredentials: true`."
]), po = $e([
  "Using the Sanity client without specifying an API version is deprecated.",
  `See ${tr("js-client-api-version")}`
]), yo = "apicdn.sanity.io", Ge = {
  apiHost: "https://api.sanity.io",
  apiVersion: "1",
  useProjectHostname: !0,
  stega: { enabled: !1 }
}, mo = ["localhost", "127.0.0.1", "0.0.0.0"], vo = (t) => mo.indexOf(t) !== -1;
function go(t) {
  if (t === "1" || t === "X")
    return;
  const e = new Date(t);
  if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0))
    throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
}
function Pn(t) {
  if (Array.isArray(t) && t.length > 1 && t.includes("raw"))
    throw new TypeError(
      'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
    );
}
const qn = (t, e) => {
  const r = {
    ...e,
    ...t,
    stega: {
      ...typeof e.stega == "boolean" ? { enabled: e.stega } : e.stega || Ge.stega,
      ...typeof t.stega == "boolean" ? { enabled: t.stega } : t.stega || {}
    }
  };
  r.apiVersion || po();
  const n = {
    ...Ge,
    ...r
  }, i = n.useProjectHostname && !n["~experimental_resource"];
  if (typeof Promise > "u") {
    const w = tr("js-client-promise-polyfill");
    throw new Error(`No native Promise-implementation found, polyfill needed - see ${w}`);
  }
  if (i && !n.projectId)
    throw new Error("Configuration must contain `projectId`");
  if (n["~experimental_resource"] && Rn(n), typeof n.perspective < "u" && Pn(n.perspective), "encodeSourceMap" in n)
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
  const s = typeof window < "u" && window.location && window.location.hostname, o = s && vo(window.location.hostname), a = !!n.token;
  n.withCredentials && a && (ho(), n.withCredentials = !1), s && o && a && n.ignoreBrowserTokenWarning !== !0 ? fo() : typeof n.useCdn > "u" && uo(), i && to(n.projectId), n.dataset && _n(n.dataset), "requestTagPrefix" in n && (n.requestTagPrefix = n.requestTagPrefix ? Tn(n.requestTagPrefix).replace(/\.+$/, "") : void 0), n.apiVersion = `${n.apiVersion}`.replace(/^v/, ""), n.isDefaultApi = n.apiHost === Ge.apiHost, n.useCdn === !0 && n.withCredentials && ao(), n.useCdn = n.useCdn !== !1 && !n.withCredentials, go(n.apiVersion);
  const l = n.apiHost.split("://", 2), c = l[0], y = l[1], m = n.isDefaultApi ? yo : y;
  return i ? (n.url = `${c}://${n.projectId}.${y}/v${n.apiVersion}`, n.cdnUrl = `${c}://${n.projectId}.${m}/v${n.apiVersion}`) : (n.url = `${n.apiHost}/v${n.apiVersion}`, n.cdnUrl = n.url), n;
};
class Mn extends Error {
  constructor() {
    super(...arguments);
    C(this, "name", "ConnectionFailedError");
  }
}
class bo extends Error {
  constructor(r, n, i = {}) {
    super(r, i);
    C(this, "name", "DisconnectError");
    C(this, "reason");
    this.reason = n;
  }
}
class wo extends Error {
  constructor(r, n) {
    super(r);
    C(this, "name", "ChannelError");
    C(this, "data");
    this.data = n;
  }
}
class Eo extends Error {
  constructor(r, n, i = {}) {
    super(r, i);
    C(this, "name", "MessageError");
    C(this, "data");
    this.data = n;
  }
}
class Mr extends Error {
  constructor() {
    super(...arguments);
    C(this, "name", "MessageParseError");
  }
}
const Co = ["channelError", "disconnect"];
function Fn(t, e) {
  return vn(() => {
    const r = t();
    return ds(r) ? r : It(r);
  }).pipe(ct((r) => So(r, e)));
}
function So(t, e) {
  return new D((r) => {
    const n = e.includes("open"), i = e.includes("reconnect");
    function s(c) {
      if ("data" in c) {
        const [y, m] = Fr(c);
        r.error(
          y ? new Mr("Unable to parse EventSource error message", { cause: m }) : new Eo((m == null ? void 0 : m.data).message, m)
        );
        return;
      }
      t.readyState === t.CLOSED ? r.error(new Mn("EventSource connection failed")) : i && r.next({ type: "reconnect" });
    }
    function o() {
      r.next({ type: "open" });
    }
    function a(c) {
      var w;
      const [y, m] = Fr(c);
      if (y) {
        r.error(
          new Mr("Unable to parse EventSource message", { cause: y })
        );
        return;
      }
      if (c.type === "channelError") {
        const f = new URL(t.url).searchParams.get("tag");
        r.error(new wo(Io(m == null ? void 0 : m.data, f), m.data));
        return;
      }
      if (c.type === "disconnect") {
        r.error(
          new bo(
            `Server disconnected client: ${((w = m.data) == null ? void 0 : w.reason) || "unknown error"}`
          )
        );
        return;
      }
      r.next({
        type: c.type,
        id: c.lastEventId,
        ...m.data ? { data: m.data } : {}
      });
    }
    t.addEventListener("error", s), n && t.addEventListener("open", o);
    const l = [.../* @__PURE__ */ new Set([...Co, ...e])].filter((c) => c !== "error" && c !== "open" && c !== "reconnect");
    return l.forEach((c) => t.addEventListener(c, a)), () => {
      t.removeEventListener("error", s), n && t.removeEventListener("open", o), l.forEach((c) => t.removeEventListener(c, a)), t.close();
    };
  });
}
function Fr(t) {
  try {
    const e = typeof t.data == "string" && JSON.parse(t.data);
    return [
      null,
      {
        type: t.type,
        id: t.lastEventId,
        ...Oo(e) ? {} : { data: e }
      }
    ];
  } catch (e) {
    return [e, null];
  }
}
function Io(t, e) {
  const r = t.error;
  return r ? xn(r) ? An(r, e) : r.description ? r.description : typeof r == "string" ? r : JSON.stringify(r, null, 2) : t.message || "Unknown listener error";
}
function Oo(t) {
  for (const e in t)
    return !1;
  return !0;
}
function Dn(t) {
  if (typeof t == "string")
    return { id: t };
  if (Array.isArray(t))
    return { query: "*[_id in $ids]", params: { ids: t } };
  if (typeof t == "object" && t !== null && "query" in t && typeof t.query == "string")
    return "params" in t && typeof t.params == "object" && t.params !== null ? { query: t.query, params: t.params } : { query: t.query };
  const e = [
    "* Document ID (<docId>)",
    "* Array of document IDs",
    "* Object containing `query`"
  ].join(`
`);
  throw new Error(`Unknown selection - must be one of:

${e}`);
}
class Un {
  constructor(e, r = {}) {
    C(this, "selection");
    C(this, "operations");
    this.selection = e, this.operations = r;
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
    return We("diffMatchPatch", e), this._assign("diffMatchPatch", e);
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
  insert(e, r, n) {
    return so(e, r, n), this._assign("insert", { [e]: r, items: n });
  }
  /**
   * Append the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
   * @param items - Array of items to append to the array
   */
  append(e, r) {
    return this.insert("after", `${e}[-1]`, r);
  }
  /**
   * Prepend the given items to the array at the given JSONPath
   *
   * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
   * @param items - Array of items to prepend to the array
   */
  prepend(e, r) {
    return this.insert("before", `${e}[0]`, r);
  }
  /**
   * Change the contents of an array by removing existing elements and/or adding new elements.
   *
   * @param selector - Attribute or JSONPath expression for array
   * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
   * @param deleteCount - An integer indicating the number of old array elements to remove.
   * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
   */
  splice(e, r, n, i) {
    const s = typeof n > "u" || n === -1, o = r < 0 ? r - 1 : r, a = s ? -1 : Math.max(0, r + n), l = o < 0 && a >= 0 ? "" : a, c = `${e}[${o}:${l}]`;
    return this.insert("replace", c, i || []);
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
    return { ...Dn(this.selection), ...this.operations };
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
  _assign(e, r, n = !0) {
    return We(e, r), this.operations = Object.assign({}, this.operations, {
      [e]: Object.assign({}, n && this.operations[e] || {}, r)
    }), this;
  }
  _set(e, r) {
    return this._assign(e, r, !1);
  }
}
var Ce;
const sr = class sr extends Un {
  constructor(r, n, i) {
    super(r, n);
    O(this, Ce);
    I(this, Ce, i);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new sr(this.selection, { ...this.operations }, u(this, Ce));
  }
  commit(r) {
    if (!u(this, Ce))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const n = typeof this.selection == "string", i = Object.assign({ returnFirst: n, returnDocuments: !0 }, r);
    return u(this, Ce).mutate({ patch: this.serialize() }, i);
  }
};
Ce = new WeakMap();
let Ae = sr;
var Se;
const or = class or extends Un {
  constructor(r, n, i) {
    super(r, n);
    O(this, Se);
    I(this, Se, i);
  }
  /**
   * Clones the patch
   */
  clone() {
    return new or(this.selection, { ...this.operations }, u(this, Se));
  }
  commit(r) {
    if (!u(this, Se))
      throw new Error(
        "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
      );
    const n = typeof this.selection == "string", i = Object.assign({ returnFirst: n, returnDocuments: !0 }, r);
    return u(this, Se).mutate({ patch: this.serialize() }, i);
  }
};
Se = new WeakMap();
let be = or;
const kn = { returnDocuments: !1 };
class Ln {
  constructor(e = [], r) {
    C(this, "operations");
    C(this, "trxId");
    this.operations = e, this.trxId = r;
  }
  /**
   * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create. Requires a `_type` property.
   */
  create(e) {
    return We("create", e), this._add({ create: e });
  }
  /**
   * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
   */
  createIfNotExists(e) {
    const r = "createIfNotExists";
    return We(r, e), Le(r, e), this._add({ [r]: e });
  }
  /**
   * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
   */
  createOrReplace(e) {
    const r = "createOrReplace";
    return We(r, e), Le(r, e), this._add({ [r]: e });
  }
  /**
   * Deletes the document with the given document ID
   * The operation is added to the current transaction, ready to be commited by `commit()`
   *
   * @param documentId - Document ID to delete
   */
  delete(e) {
    return $n("delete", e), this._add({ delete: { id: e } });
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
var ie;
const ar = class ar extends Ln {
  constructor(r, n, i) {
    super(r, i);
    O(this, ie);
    I(this, ie, n);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new ar([...this.operations], u(this, ie), this.trxId);
  }
  commit(r) {
    if (!u(this, ie))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return u(this, ie).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, kn, r || {})
    );
  }
  patch(r, n) {
    const i = typeof n == "function", s = typeof r != "string" && r instanceof be, o = typeof r == "object" && ("query" in r || "id" in r);
    if (s)
      return this._add({ patch: r.serialize() });
    if (i) {
      const a = n(new be(r, {}, u(this, ie)));
      if (!(a instanceof be))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: a.serialize() });
    }
    if (o) {
      const a = new be(r, n || {}, u(this, ie));
      return this._add({ patch: a.serialize() });
    }
    return this._add({ patch: { id: r, ...n } });
  }
};
ie = new WeakMap();
let vt = ar;
var he;
const ur = class ur extends Ln {
  constructor(r, n, i) {
    super(r, i);
    O(this, he);
    I(this, he, n);
  }
  /**
   * Clones the transaction
   */
  clone() {
    return new ur([...this.operations], u(this, he), this.trxId);
  }
  commit(r) {
    if (!u(this, he))
      throw new Error(
        "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
      );
    return u(this, he).mutate(
      this.serialize(),
      Object.assign({ transactionId: this.trxId }, kn, r || {})
    );
  }
  patch(r, n) {
    const i = typeof n == "function";
    if (typeof r != "string" && r instanceof Ae)
      return this._add({ patch: r.serialize() });
    if (i) {
      const s = n(new Ae(r, {}, u(this, he)));
      if (!(s instanceof Ae))
        throw new Error("function passed to `patch()` must return the patch");
      return this._add({ patch: s.serialize() });
    }
    return this._add({ patch: { id: r, ...n } });
  }
};
he = new WeakMap();
let gt = ur;
const xo = "X-Sanity-Project-ID";
function Ao(t, e = {}) {
  const r = {};
  t.headers && Object.assign(r, t.headers);
  const n = e.token || t.token;
  n && (r.Authorization = `Bearer ${n}`), !e.useGlobalApi && !t.useProjectHostname && t.projectId && (r[xo] = t.projectId);
  const i = !!(typeof e.withCredentials > "u" ? t.withCredentials : e.withCredentials), s = typeof e.timeout > "u" ? t.timeout : e.timeout;
  return Object.assign({}, e, {
    headers: Object.assign({}, r, e.headers || {}),
    timeout: typeof s > "u" ? 5 * 60 * 1e3 : s,
    proxy: e.proxy || t.proxy,
    json: !0,
    withCredentials: i,
    fetch: typeof e.fetch == "object" && typeof t.fetch == "object" ? { ...t.fetch, ...e.fetch } : e.fetch || t.fetch
  });
}
const Vn = ({
  query: t,
  params: e = {},
  options: r = {}
}) => {
  const n = new URLSearchParams(), { tag: i, includeMutations: s, returnQuery: o, ...a } = r;
  i && n.append("tag", i), n.append("query", t);
  for (const [l, c] of Object.entries(e))
    c !== void 0 && n.append(`$${l}`, JSON.stringify(c));
  for (const [l, c] of Object.entries(a))
    c && n.append(l, `${c}`);
  return o === !1 && n.append("returnQuery", "false"), s === !1 && n.append("includeMutations", "false"), `?${n}`;
}, _o = (t, e) => t === !1 ? void 0 : typeof t > "u" ? e : t, $o = (t = {}) => ({
  dryRun: t.dryRun,
  returnIds: !0,
  returnDocuments: _o(t.returnDocuments, !0),
  visibility: t.visibility || "sync",
  autoGenerateArrayKeys: t.autoGenerateArrayKeys,
  skipCrossDatasetReferenceValidation: t.skipCrossDatasetReferenceValidation
}), rr = (t) => t.type === "response", jo = (t) => t.body, To = (t, e) => t.reduce((r, n) => (r[e(n)] = n, r), /* @__PURE__ */ Object.create(null)), Ro = 11264;
function Nn(t, e, r, n, i = {}, s = {}) {
  const o = "stega" in s ? {
    ...r || {},
    ...typeof s.stega == "boolean" ? { enabled: s.stega } : s.stega || {}
  } : r, a = o.enabled ? Ms(i) : i, l = s.filterResponse === !1 ? (b) => b : (b) => b.result, { cache: c, next: y, ...m } = {
    // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
    // This is necessary in React Server Components to avoid opting out of Request Memoization.
    useAbortSignal: typeof s.signal < "u",
    // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
    resultSourceMap: o.enabled ? "withKeyArraySelector" : s.resultSourceMap,
    ...s,
    // Default to not returning the query, unless `filterResponse` is `false`,
    // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
    returnQuery: s.filterResponse === !1 && s.returnQuery !== !1
  }, w = typeof c < "u" || typeof y < "u" ? { ...m, fetch: { cache: c, next: y } } : m, f = je(t, e, "query", { query: n, params: a }, w);
  return o.enabled ? f.pipe(
    Os(
      ut(
        import("./stegaEncodeSourceMap-BJORIZL8.js").then(function(b) {
          return b.stegaEncodeSourceMap$1;
        }).then(
          ({ stegaEncodeSourceMap: b }) => b
        )
      )
    ),
    k(
      ([b, d]) => {
        const S = d(b.result, b.resultSourceMap, o);
        return l({ ...b, result: S });
      }
    )
  ) : f.pipe(k(l));
}
function $t(t, e, r, n = {}) {
  const i = (() => {
    if (!n.releaseId)
      return r;
    const o = In(r);
    if (!o) {
      if (Ot(r))
        throw new Error(
          `The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``
        );
      return At(r, n.releaseId);
    }
    if (o !== n.releaseId)
      throw new Error(
        `The document ID (\`${r}\`) is already a version of \`${o}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`
      );
    return r;
  })(), s = {
    uri: Y(t, "doc", i),
    json: !0,
    tag: n.tag,
    signal: n.signal
  };
  return ft(t, e, s).pipe(
    Ve(rr),
    k((o) => o.body.documents && o.body.documents[0])
  );
}
function Hn(t, e, r, n = {}) {
  const i = {
    uri: Y(t, "doc", r.join(",")),
    json: !0,
    tag: n.tag,
    signal: n.signal
  };
  return ft(t, e, i).pipe(
    Ve(rr),
    k((s) => {
      const o = To(s.body.documents || [], (a) => a._id);
      return r.map((a) => o[a] || null);
    })
  );
}
function zn(t, e, r, n = {}) {
  return je(
    t,
    e,
    "query",
    {
      query: "*[sanity::partOfRelease($releaseId)]",
      params: {
        releaseId: r
      }
    },
    n
  );
}
function Bn(t, e, r, n) {
  return Le("createIfNotExists", r), jt(t, e, r, "createIfNotExists", n);
}
function Wn(t, e, r, n) {
  return Le("createOrReplace", r), jt(t, e, r, "createOrReplace", n);
}
function Gn(t, e, r, n, i) {
  return Le("createVersion", r), jn("createVersion", r), F(t, e, {
    actionType: "sanity.action.document.version.create",
    publishedId: n,
    document: r
  }, i);
}
function Qn(t, e, r, n) {
  return je(
    t,
    e,
    "mutate",
    { mutations: [{ delete: Dn(r) }] },
    n
  );
}
function Jn(t, e, r, n = !1, i) {
  return F(t, e, {
    actionType: "sanity.action.document.version.discard",
    versionId: r,
    purge: n
  }, i);
}
function Yn(t, e, r, n) {
  return Le("replaceVersion", r), jn("replaceVersion", r), F(t, e, {
    actionType: "sanity.action.document.version.replace",
    document: r
  }, n);
}
function Xn(t, e, r, n, i) {
  return F(t, e, {
    actionType: "sanity.action.document.version.unpublish",
    versionId: r,
    publishedId: n
  }, i);
}
function Zn(t, e, r, n) {
  let i;
  r instanceof be || r instanceof Ae ? i = { patch: r.serialize() } : r instanceof vt || r instanceof gt ? i = r.serialize() : i = r;
  const s = Array.isArray(i) ? i : [i], o = n && n.transactionId || void 0;
  return je(t, e, "mutate", { mutations: s, transactionId: o }, n);
}
function F(t, e, r, n) {
  const i = Array.isArray(r) ? r : [r], s = n && n.transactionId || void 0, o = n && n.skipCrossDatasetReferenceValidation || void 0, a = n && n.dryRun || void 0;
  return je(
    t,
    e,
    "actions",
    { actions: i, transactionId: s, skipCrossDatasetReferenceValidation: o, dryRun: a },
    n
  );
}
function je(t, e, r, n, i = {}) {
  const s = r === "mutate", o = r === "actions", a = r === "query", l = s || o ? "" : Vn(n), c = !s && !o && l.length < Ro, y = c ? l : "", m = i.returnFirst, { timeout: w, token: f, tag: b, headers: d, returnQuery: S, lastLiveEventId: _, cacheMode: x } = i, A = Y(t, r, y), q = {
    method: c ? "GET" : "POST",
    uri: A,
    json: !0,
    body: c ? void 0 : n,
    query: s && $o(i),
    timeout: w,
    headers: d,
    token: f,
    tag: b,
    returnQuery: S,
    perspective: i.perspective,
    resultSourceMap: i.resultSourceMap,
    lastLiveEventId: Array.isArray(_) ? _[0] : _,
    cacheMode: x,
    canUseCdn: a,
    signal: i.signal,
    fetch: i.fetch,
    useAbortSignal: i.useAbortSignal,
    useCdn: i.useCdn
  };
  return ft(t, e, q).pipe(
    Ve(rr),
    k(jo),
    k((U) => {
      if (!s)
        return U;
      const N = U.results || [];
      if (i.returnDocuments)
        return m ? N[0] && N[0].document : N.map((Ne) => Ne.document);
      const Tt = m ? "documentId" : "documentIds", Rt = m ? N[0] && N[0].id : N.map((Ne) => Ne.id);
      return {
        transactionId: U.transactionId,
        results: N,
        [Tt]: Rt
      };
    })
  );
}
function jt(t, e, r, n, i = {}) {
  const s = { [n]: r }, o = Object.assign({ returnFirst: !0, returnDocuments: !0 }, i);
  return je(t, e, "mutate", { mutations: [s] }, o);
}
const lt = (t) => t.config().dataset !== void 0 && t.config().projectId !== void 0 || t.config()["~experimental_resource"] !== void 0, Kn = (t, e) => lt(t) && e.startsWith(Y(t, "query")), Po = (t, e) => lt(t) && e.startsWith(Y(t, "mutate")), qo = (t, e) => lt(t) && e.startsWith(Y(t, "doc", "")), Mo = (t, e) => lt(t) && e.startsWith(Y(t, "listen")), Fo = (t, e) => lt(t) && e.startsWith(Y(t, "history", "")), Do = (t, e) => e.startsWith("/data/") || Kn(t, e) || Po(t, e) || qo(t, e) || Mo(t, e) || Fo(t, e);
function ft(t, e, r) {
  const n = r.url || r.uri, i = t.config(), s = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && Do(t, n) : r.canUseCdn;
  let o = (r.useCdn ?? i.useCdn) && s;
  const a = r.tag && i.requestTagPrefix ? [i.requestTagPrefix, r.tag].join(".") : r.tag || i.requestTagPrefix;
  if (a && r.tag !== null && (r.query = { tag: Tn(a), ...r.query }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && Kn(t, n)) {
    const y = r.resultSourceMap ?? i.resultSourceMap;
    y !== void 0 && y !== !1 && (r.query = { resultSourceMap: y, ...r.query });
    const m = r.perspective || i.perspective;
    typeof m < "u" && (m === "previewDrafts" && lo(), Pn(m), r.query = {
      perspective: Array.isArray(m) ? m.join(",") : m,
      ...r.query
    }, (Array.isArray(m) && m.length > 0 || // previewDrafts was renamed to drafts, but keep for backwards compat
    m === "previewDrafts" || m === "drafts") && o && (o = !1, co())), r.lastLiveEventId && (r.query = { ...r.query, lastLiveEventId: r.lastLiveEventId }), r.returnQuery === !1 && (r.query = { returnQuery: "false", ...r.query }), o && r.cacheMode == "noStale" && (r.query = { cacheMode: "noStale", ...r.query });
  }
  const l = Ao(
    i,
    Object.assign({}, r, {
      url: nr(t, n, o)
    })
  ), c = new D(
    (y) => e(l, i.requester).subscribe(y)
  );
  return r.signal ? c.pipe(Uo(r.signal)) : c;
}
function L(t, e, r) {
  return ft(t, e, r).pipe(
    Ve((n) => n.type === "response"),
    k((n) => n.body)
  );
}
function Y(t, e, r) {
  const n = t.config();
  if (n["~experimental_resource"]) {
    Rn(n);
    const o = Vo(n), a = r !== void 0 ? `${e}/${r}` : e;
    return `${o}/${a}`.replace(/\/($|\?)/, "$1");
  }
  const i = _e(n), s = `/${e}/${i}`;
  return `/data${r !== void 0 ? `${s}/${r}` : s}`.replace(/\/($|\?)/, "$1");
}
function nr(t, e, r = !1) {
  const { url: n, cdnUrl: i } = t.config();
  return `${r ? i : n}/${e.replace(/^\//, "")}`;
}
function Uo(t) {
  return (e) => new D((r) => {
    const n = () => r.error(Lo(t));
    if (t && t.aborted) {
      n();
      return;
    }
    const i = e.subscribe(r);
    return t.addEventListener("abort", n), () => {
      t.removeEventListener("abort", n), i.unsubscribe();
    };
  });
}
const ko = !!globalThis.DOMException;
function Lo(t) {
  if (ko)
    return new DOMException((t == null ? void 0 : t.reason) ?? "The operation was aborted.", "AbortError");
  const e = new Error((t == null ? void 0 : t.reason) ?? "The operation was aborted.");
  return e.name = "AbortError", e;
}
const Vo = (t) => {
  if (!t["~experimental_resource"])
    throw new Error("`resource` must be provided to perform resource queries");
  const { type: e, id: r } = t["~experimental_resource"];
  switch (e) {
    case "dataset": {
      const n = r.split(".");
      if (n.length !== 2)
        throw new Error('Dataset ID must be in the format "project.dataset"');
      return `/projects/${n[0]}/datasets/${n[1]}`;
    }
    case "canvas":
      return `/canvases/${r}`;
    case "media-library":
      return `/media-libraries/${r}`;
    case "dashboard":
      return `/dashboards/${r}`;
    default:
      throw new Error(`Unsupported resource type: ${e.toString()}`);
  }
};
function ei(t, e, r) {
  const n = _e(t.config());
  return L(t, e, {
    method: "POST",
    uri: `/agent/action/generate/${n}`,
    body: r
  });
}
function No(t, e, r) {
  const n = _e(t.config());
  return L(t, e, {
    method: "POST",
    uri: `/agent/action/patch/${n}`,
    body: r
  });
}
function Ho(t, e, r) {
  const n = _e(t.config());
  return L(t, e, {
    method: "POST",
    uri: `/agent/action/prompt/${n}`,
    body: r
  });
}
function ti(t, e, r) {
  const n = _e(t.config());
  return L(t, e, {
    method: "POST",
    uri: `/agent/action/transform/${n}`,
    body: r
  });
}
function ri(t, e, r) {
  const n = _e(t.config());
  return L(t, e, {
    method: "POST",
    uri: `/agent/action/translate/${n}`,
    body: r
  });
}
var Ie, Oe;
class zo {
  constructor(e, r) {
    O(this, Ie);
    O(this, Oe);
    I(this, Ie, e), I(this, Oe, r);
  }
  /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */
  generate(e) {
    return ei(u(this, Ie), u(this, Oe), e);
  }
  /**
   * Transform a target document based on a source.
   * @param request - translation request
   */
  transform(e) {
    return ti(u(this, Ie), u(this, Oe), e);
  }
  /**
   * Translate a target document based on a source.
   * @param request - translation request
   */
  translate(e) {
    return ri(u(this, Ie), u(this, Oe), e);
  }
}
Ie = new WeakMap(), Oe = new WeakMap();
var se, oe;
class Bo {
  constructor(e, r) {
    O(this, se);
    O(this, oe);
    I(this, se, e), I(this, oe, r);
  }
  /**
   * Run an instruction to generate content in a target document.
   * @param request - instruction request
   */
  generate(e) {
    return $(ei(u(this, se), u(this, oe), e));
  }
  /**
   * Transform a target document based on a source.
   * @param request - translation request
   */
  transform(e) {
    return $(ti(u(this, se), u(this, oe), e));
  }
  /**
   * Translate a target document based on a source.
   * @param request - translation request
   */
  translate(e) {
    return $(ri(u(this, se), u(this, oe), e));
  }
  /**
   * Run a raw instruction and return the result either as text or json
   * @param request - prompt request
   */
  prompt(e) {
    return $(Ho(u(this, se), u(this, oe), e));
  }
  /**
   * Patch a document using a schema aware API.
   * Does not use an LLM, but uses the schema to ensure paths and values matches the schema.
   * @param request - instruction request
   */
  patch(e) {
    return $(No(u(this, se), u(this, oe), e));
  }
}
se = new WeakMap(), oe = new WeakMap();
var Ke, et;
class Wo {
  constructor(e, r) {
    O(this, Ke);
    O(this, et);
    I(this, Ke, e), I(this, et, r);
  }
  upload(e, r, n) {
    return ni(u(this, Ke), u(this, et), e, r, n);
  }
}
Ke = new WeakMap(), et = new WeakMap();
var tt, rt;
class Go {
  constructor(e, r) {
    O(this, tt);
    O(this, rt);
    I(this, tt, e), I(this, rt, r);
  }
  upload(e, r, n) {
    const i = ni(u(this, tt), u(this, rt), e, r, n);
    return $(
      i.pipe(
        Ve((s) => s.type === "response"),
        k(
          (s) => s.body.document
        )
      )
    );
  }
}
tt = new WeakMap(), rt = new WeakMap();
function ni(t, e, r, n, i = {}) {
  ro(r);
  let s = i.extract || void 0;
  s && !s.length && (s = ["none"]);
  const o = t.config(), a = Jo(i, n), { tag: l, label: c, title: y, description: m, creditLine: w, filename: f, source: b } = a, d = {
    label: c,
    title: y,
    description: m,
    filename: f,
    meta: s,
    creditLine: w
  };
  return b && (d.sourceId = b.id, d.sourceName = b.name, d.sourceUrl = b.url), ft(t, e, {
    tag: l,
    method: "POST",
    timeout: a.timeout || 0,
    uri: Qo(o, r),
    headers: a.contentType ? { "Content-Type": a.contentType } : {},
    query: d,
    body: n
  });
}
function Qo(t, e) {
  const r = e === "image" ? "images" : "files";
  if (t["~experimental_resource"]) {
    const { type: i, id: s } = t["~experimental_resource"];
    switch (i) {
      case "dataset":
        throw new Error(
          "Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead."
        );
      case "canvas":
        return `/canvases/${s}/assets/${r}`;
      case "media-library":
        return `/media-libraries/${s}/upload`;
      case "dashboard":
        return `/dashboards/${s}/assets/${r}`;
      default:
        throw new Error(`Unsupported resource type: ${i.toString()}`);
    }
  }
  const n = _e(t);
  return `assets/${r}/${n}`;
}
function Jo(t, e) {
  return typeof File > "u" || !(e instanceof File) ? t : Object.assign(
    {
      filename: t.preserveFilename === !1 ? void 0 : e.name,
      contentType: e.type
    },
    t
  );
}
var Yo = (t, e) => Object.keys(e).concat(Object.keys(t)).reduce((r, n) => (r[n] = typeof t[n] > "u" ? e[n] : t[n], r), {});
const Xo = (t, e) => e.reduce((r, n) => (typeof t[n] > "u" || (r[n] = t[n]), r), {}), ii = vn(() => import("./browser-CAoy7NlX.js").then((t) => t.b)).pipe(
  k(({ default: t }) => t),
  xs(1)
);
function si() {
  return function(t) {
    return t.pipe(
      Kt((e, r) => e instanceof Mn ? mn(It({ type: "reconnect" }), Es(1e3).pipe(ct(() => r))) : dn(() => e))
    );
  };
}
const Zo = 14800, Ko = [
  "includePreviousRevision",
  "includeResult",
  "includeMutations",
  "includeAllVersions",
  "visibility",
  "effectFormat",
  "tag"
], ea = {
  includeResult: !0
};
function oi(t, e, r = {}) {
  const { url: n, token: i, withCredentials: s, requestTagPrefix: o, headers: a } = this.config(), l = r.tag && o ? [o, r.tag].join(".") : r.tag, c = { ...Yo(r, ea), tag: l }, y = Xo(c, Ko), m = Vn({ query: t, params: e, options: { tag: l, ...y } }), w = `${n}${Y(this, "listen", m)}`;
  if (w.length > Zo)
    return dn(() => new Error("Query too large for listener"));
  const f = c.events ? c.events : ["mutation"], b = {};
  return s && (b.withCredentials = !0), (i || a) && (b.headers = {}, i && (b.headers.Authorization = `Bearer ${i}`), a && Object.assign(b.headers, a)), Fn(() => (
    // use polyfill if there is no global EventSource or if we need to set headers
    (typeof EventSource > "u" || b.headers ? ii : It(EventSource)).pipe(k((d) => new d(w, b)))
  ), f).pipe(
    si(),
    Ve((d) => f.includes(d.type)),
    k(
      (d) => ({
        type: d.type,
        ..."data" in d ? d.data : {}
      })
    )
  );
}
function ta(t, e) {
  return ra(
    typeof t == "function" ? { predicate: t, ...e } : t
  );
}
function ra(t) {
  return (e) => {
    let r, n = !1;
    const { predicate: i, ...s } = t, o = e.pipe(
      As((l) => {
        t.predicate(l) && (n = !0, r = l);
      }),
      bn(() => {
        n = !1, r = void 0;
      }),
      wn(s)
    ), a = new D((l) => {
      n && l.next(
        // this cast is safe because of the emitted check which asserts that we got T from the source
        r
      ), l.complete();
    });
    return Cs(o, a);
  };
}
const Dr = "2021-03-25";
var de;
class ai {
  constructor(e) {
    O(this, de);
    I(this, de, e);
  }
  /**
   * Requires `apiVersion` to be `2021-03-25` or later.
   */
  events({
    includeDrafts: e = !1,
    tag: r
  } = {}) {
    K("live", u(this, de).config());
    const {
      projectId: n,
      apiVersion: i,
      token: s,
      withCredentials: o,
      requestTagPrefix: a,
      headers: l
    } = u(this, de).config(), c = i.replace(/^v/, "");
    if (c !== "X" && c < Dr)
      throw new Error(
        `The live events API requires API version ${Dr} or later. The current API version is ${c}. Please update your API version to use this feature.`
      );
    if (e && !s && !o)
      throw new Error(
        "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
      );
    const y = Y(u(this, de), "live/events"), m = new URL(u(this, de).getUrl(y, !1)), w = r && a ? [a, r].join(".") : r;
    w && m.searchParams.set("tag", w), e && m.searchParams.set("includeDrafts", "true");
    const f = {};
    e && o && (f.withCredentials = !0), (e && s || l) && (f.headers = {}, e && s && (f.headers.Authorization = `Bearer ${s}`), l && Object.assign(f.headers, l));
    const b = `${m.href}::${JSON.stringify(f)}`, d = kt.get(b);
    if (d)
      return d;
    const S = Fn(() => (
      // use polyfill if there is no global EventSource or if we need to set headers
      (typeof EventSource > "u" || f.headers ? ii : It(EventSource)).pipe(k((A) => new A(m.href, f)))
    ), [
      "message",
      "restart",
      "welcome",
      "reconnect",
      "goaway"
    ]).pipe(
      si(),
      k((A) => {
        if (A.type === "message") {
          const { data: q, ...U } = A;
          return { ...U, tags: q.tags };
        }
        return A;
      })
    ), _ = na(m, {
      method: "OPTIONS",
      mode: "cors",
      credentials: f.withCredentials ? "include" : "omit",
      headers: f.headers
    }).pipe(
      ct(() => Zr),
      Kt(() => {
        throw new Ys({ projectId: n });
      })
    ), x = mn(_, S).pipe(
      bn(() => kt.delete(b)),
      ta({
        predicate: (A) => A.type === "welcome"
      })
    );
    return kt.set(b, x), x;
  }
}
de = new WeakMap();
function na(t, e) {
  return new D((r) => {
    const n = new AbortController(), i = n.signal;
    return fetch(t, { ...e, signal: n.signal }).then(
      (s) => {
        r.next(s), r.complete();
      },
      (s) => {
        i.aborted || r.error(s);
      }
    ), () => n.abort();
  });
}
const kt = /* @__PURE__ */ new Map();
var pe, ye;
class ia {
  constructor(e, r) {
    O(this, pe);
    O(this, ye);
    I(this, pe, e), I(this, ye, r);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(e, r) {
    return Pe(u(this, pe), u(this, ye), "PUT", e, r);
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(e, r) {
    return Pe(u(this, pe), u(this, ye), "PATCH", e, r);
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(e) {
    return Pe(u(this, pe), u(this, ye), "DELETE", e);
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return L(u(this, pe), u(this, ye), {
      uri: "/datasets",
      tag: null
    });
  }
}
pe = new WeakMap(), ye = new WeakMap();
var J, me;
class sa {
  constructor(e, r) {
    O(this, J);
    O(this, me);
    I(this, J, e), I(this, me, r);
  }
  /**
   * Create a new dataset with the given name
   *
   * @param name - Name of the dataset to create
   * @param options - Options for the dataset
   */
  create(e, r) {
    return K("dataset", u(this, J).config()), $(
      Pe(u(this, J), u(this, me), "PUT", e, r)
    );
  }
  /**
   * Edit a dataset with the given name
   *
   * @param name - Name of the dataset to edit
   * @param options - New options for the dataset
   */
  edit(e, r) {
    return K("dataset", u(this, J).config()), $(
      Pe(u(this, J), u(this, me), "PATCH", e, r)
    );
  }
  /**
   * Delete a dataset with the given name
   *
   * @param name - Name of the dataset to delete
   */
  delete(e) {
    return K("dataset", u(this, J).config()), $(Pe(u(this, J), u(this, me), "DELETE", e));
  }
  /**
   * Fetch a list of datasets for the configured project
   */
  list() {
    return K("dataset", u(this, J).config()), $(
      L(u(this, J), u(this, me), { uri: "/datasets", tag: null })
    );
  }
}
J = new WeakMap(), me = new WeakMap();
function Pe(t, e, r, n, i) {
  return K("dataset", t.config()), _n(n), L(t, e, {
    method: r,
    uri: `/datasets/${n}`,
    body: i,
    tag: null
  });
}
var ve, Me;
class oa {
  constructor(e, r) {
    O(this, ve);
    O(this, Me);
    I(this, ve, e), I(this, Me, r);
  }
  list(e) {
    K("projects", u(this, ve).config());
    const r = (e == null ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
    return L(u(this, ve), u(this, Me), { uri: r });
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(e) {
    return K("projects", u(this, ve).config()), L(u(this, ve), u(this, Me), { uri: `/projects/${e}` });
  }
}
ve = new WeakMap(), Me = new WeakMap();
var ge, Fe;
class aa {
  constructor(e, r) {
    O(this, ge);
    O(this, Fe);
    I(this, ge, e), I(this, Fe, r);
  }
  list(e) {
    K("projects", u(this, ge).config());
    const r = (e == null ? void 0 : e.includeMembers) === !1 ? "/projects?includeMembers=false" : "/projects";
    return $(L(u(this, ge), u(this, Fe), { uri: r }));
  }
  /**
   * Fetch a project by project ID
   *
   * @param projectId - ID of the project to fetch
   */
  getById(e) {
    return K("projects", u(this, ge).config()), $(
      L(u(this, ge), u(this, Fe), { uri: `/projects/${e}` })
    );
  }
}
ge = new WeakMap(), Fe = new WeakMap();
const Ur = Vs(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  8
), bt = (t, e) => e ? At(t, e) : Us(t);
function wt(t, {
  releaseId: e,
  publishedId: r,
  document: n
}) {
  if (r && n._id) {
    const i = bt(r, e);
    return io(i, n), i;
  }
  if (n._id) {
    const i = Ot(n._id), s = xt(n._id);
    if (!i && !s)
      throw new Error(
        `\`${t}()\` requires a document with an \`_id\` that is a version or draft ID`
      );
    if (e) {
      if (i)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${e}\`) was also provided.`
        );
      const o = In(n._id);
      if (o !== e)
        throw new Error(
          `\`${t}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${e}\`) does not match the document's version ID (\`${o}\`).`
        );
    }
    return n._id;
  }
  if (r)
    return bt(r, e);
  throw new Error(`\`${t}()\` requires either a publishedId or a document with an \`_id\``);
}
const ua = (t, e) => {
  if (typeof t == "object" && t !== null && ("releaseId" in t || "metadata" in t)) {
    const { releaseId: r = Ur(), metadata: n = {} } = t;
    return [r, n, e];
  }
  return [Ur(), {}, t];
}, ui = (t, e) => {
  const [r, n, i] = ua(t, e), s = {
    ...n,
    releaseType: n.releaseType || "undecided"
  };
  return { action: {
    actionType: "sanity.action.release.create",
    releaseId: r,
    metadata: s
  }, options: i };
};
var z, B;
class ca {
  constructor(e, r) {
    O(this, z);
    O(this, B);
    I(this, z, e), I(this, B, r);
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
  get({ releaseId: e }, r) {
    return $t(
      u(this, z),
      u(this, B),
      `_.releases.${e}`,
      r
    );
  }
  create(e, r) {
    const { action: n, options: i } = ui(e, r), { releaseId: s, metadata: o } = n;
    return F(u(this, z), u(this, B), n, i).pipe(
      k((a) => ({
        ...a,
        releaseId: s,
        metadata: o
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
  edit({ releaseId: e, patch: r }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: r
    };
    return F(u(this, z), u(this, B), i, n);
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
  publish({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.publish",
      releaseId: e
    };
    return F(u(this, z), u(this, B), n, r);
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
  archive({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.archive",
      releaseId: e
    };
    return F(u(this, z), u(this, B), n, r);
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
  unarchive({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.unarchive",
      releaseId: e
    };
    return F(u(this, z), u(this, B), n, r);
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
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: r
    };
    return F(u(this, z), u(this, B), i, n);
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
  unschedule({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.unschedule",
      releaseId: e
    };
    return F(u(this, z), u(this, B), n, r);
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
  delete({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.delete",
      releaseId: e
    };
    return F(u(this, z), u(this, B), n, r);
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
  fetchDocuments({ releaseId: e }, r) {
    return zn(u(this, z), u(this, B), e, r);
  }
}
z = new WeakMap(), B = new WeakMap();
var W, G;
class la {
  constructor(e, r) {
    O(this, W);
    O(this, G);
    I(this, W, e), I(this, G, r);
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
  get({ releaseId: e }, r) {
    return $(
      $t(
        u(this, W),
        u(this, G),
        `_.releases.${e}`,
        r
      )
    );
  }
  async create(e, r) {
    const { action: n, options: i } = ui(e, r), { releaseId: s, metadata: o } = n;
    return { ...await $(
      F(u(this, W), u(this, G), n, i)
    ), releaseId: s, metadata: o };
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
  edit({ releaseId: e, patch: r }, n) {
    const i = {
      actionType: "sanity.action.release.edit",
      releaseId: e,
      patch: r
    };
    return $(F(u(this, W), u(this, G), i, n));
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
  publish({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.publish",
      releaseId: e
    };
    return $(F(u(this, W), u(this, G), n, r));
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
  archive({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.archive",
      releaseId: e
    };
    return $(F(u(this, W), u(this, G), n, r));
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
  unarchive({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.unarchive",
      releaseId: e
    };
    return $(F(u(this, W), u(this, G), n, r));
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
  schedule({ releaseId: e, publishAt: r }, n) {
    const i = {
      actionType: "sanity.action.release.schedule",
      releaseId: e,
      publishAt: r
    };
    return $(F(u(this, W), u(this, G), i, n));
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
  unschedule({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.unschedule",
      releaseId: e
    };
    return $(F(u(this, W), u(this, G), n, r));
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
  delete({ releaseId: e }, r) {
    const n = {
      actionType: "sanity.action.release.delete",
      releaseId: e
    };
    return $(F(u(this, W), u(this, G), n, r));
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
  fetchDocuments({ releaseId: e }, r) {
    return $(zn(u(this, W), u(this, G), e, r));
  }
}
W = new WeakMap(), G = new WeakMap();
var nt, it;
class fa {
  constructor(e, r) {
    O(this, nt);
    O(this, it);
    I(this, nt, e), I(this, it, r);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(e) {
    return L(
      u(this, nt),
      u(this, it),
      { uri: `/users/${e}` }
    );
  }
}
nt = new WeakMap(), it = new WeakMap();
var st, ot;
class ha {
  constructor(e, r) {
    O(this, st);
    O(this, ot);
    I(this, st, e), I(this, ot, r);
  }
  /**
   * Fetch a user by user ID
   *
   * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
   */
  getById(e) {
    return $(
      L(u(this, st), u(this, ot), {
        uri: `/users/${e}`
      })
    );
  }
}
st = new WeakMap(), ot = new WeakMap();
var ae, P;
const Et = class Et {
  constructor(e, r = Ge) {
    C(this, "assets");
    C(this, "datasets");
    C(this, "live");
    C(this, "projects");
    C(this, "users");
    C(this, "agent");
    C(this, "releases");
    /**
     * Private properties
     */
    O(this, ae);
    O(this, P);
    /**
     * Instance properties
     */
    C(this, "listen", oi);
    this.config(r), I(this, P, e), this.assets = new Wo(this, u(this, P)), this.datasets = new ia(this, u(this, P)), this.live = new ai(this), this.projects = new oa(this, u(this, P)), this.users = new fa(this, u(this, P)), this.agent = {
      action: new zo(this, u(this, P))
    }, this.releases = new ca(this, u(this, P));
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new Et(u(this, P), this.config());
  }
  config(e) {
    if (e === void 0)
      return { ...u(this, ae) };
    if (u(this, ae) && u(this, ae).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return I(this, ae, qn(e, u(this, ae) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(e) {
    const r = this.config();
    return new Et(u(this, P), {
      ...r,
      ...e,
      stega: {
        ...r.stega || {},
        ...typeof (e == null ? void 0 : e.stega) == "boolean" ? { enabled: e.stega } : (e == null ? void 0 : e.stega) || {}
      }
    });
  }
  fetch(e, r, n) {
    return Nn(
      this,
      u(this, P),
      u(this, ae).stega,
      e,
      r,
      n
    );
  }
  /**
   * Fetch a single document with the given ID.
   *
   * @param id - Document ID to fetch
   * @param options - Request options
   */
  getDocument(e, r) {
    return $t(this, u(this, P), e, r);
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
  getDocuments(e, r) {
    return Hn(this, u(this, P), e, r);
  }
  create(e, r) {
    return jt(this, u(this, P), e, "create", r);
  }
  createIfNotExists(e, r) {
    return Bn(this, u(this, P), e, r);
  }
  createOrReplace(e, r) {
    return Wn(this, u(this, P), e, r);
  }
  createVersion({
    document: e,
    publishedId: r,
    releaseId: n
  }, i) {
    const s = wt("createVersion", {
      document: e,
      publishedId: r,
      releaseId: n
    }), o = { ...e, _id: s }, a = r || _t(e._id);
    return Gn(
      this,
      u(this, P),
      o,
      a,
      i
    );
  }
  delete(e, r) {
    return Qn(this, u(this, P), e, r);
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
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = bt(r, e);
    return Jn(this, u(this, P), s, n, i);
  }
  replaceVersion({
    document: e,
    publishedId: r,
    releaseId: n
  }, i) {
    const s = wt("replaceVersion", {
      document: e,
      publishedId: r,
      releaseId: n
    }), o = { ...e, _id: s };
    return Yn(this, u(this, P), o, i);
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
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = At(r, e);
    return Xn(this, u(this, P), i, r, n);
  }
  mutate(e, r) {
    return Zn(this, u(this, P), e, r);
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(e, r) {
    return new Ae(e, r, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(e) {
    return new gt(e, this);
  }
  /**
   * Perform action operations against the configured dataset
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(e, r) {
    return F(this, u(this, P), e, r);
  }
  /**
   * Perform an HTTP request against the Sanity API
   *
   * @param options - Request options
   */
  request(e) {
    return L(this, u(this, P), e);
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(e, r) {
    return nr(this, e, r);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(e, r) {
    return Y(this, e, r);
  }
};
ae = new WeakMap(), P = new WeakMap();
let Ht = Et;
var ue, T;
const Ct = class Ct {
  constructor(e, r = Ge) {
    C(this, "assets");
    C(this, "datasets");
    C(this, "live");
    C(this, "projects");
    C(this, "users");
    C(this, "agent");
    C(this, "releases");
    /**
     * Observable version of the Sanity client, with the same configuration as the promise-based one
     */
    C(this, "observable");
    /**
     * Private properties
     */
    O(this, ue);
    O(this, T);
    /**
     * Instance properties
     */
    C(this, "listen", oi);
    this.config(r), I(this, T, e), this.assets = new Go(this, u(this, T)), this.datasets = new sa(this, u(this, T)), this.live = new ai(this), this.projects = new aa(this, u(this, T)), this.users = new ha(this, u(this, T)), this.agent = {
      action: new Bo(this, u(this, T))
    }, this.releases = new la(this, u(this, T)), this.observable = new Ht(e, r);
  }
  /**
   * Clone the client - returns a new instance
   */
  clone() {
    return new Ct(u(this, T), this.config());
  }
  config(e) {
    if (e === void 0)
      return { ...u(this, ue) };
    if (u(this, ue) && u(this, ue).allowReconfigure === !1)
      throw new Error(
        "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
      );
    return this.observable && this.observable.config(e), I(this, ue, qn(e, u(this, ue) || {})), this;
  }
  /**
   * Clone the client with a new (partial) configuration.
   *
   * @param newConfig - New client configuration properties, shallowly merged with existing configuration
   */
  withConfig(e) {
    const r = this.config();
    return new Ct(u(this, T), {
      ...r,
      ...e,
      stega: {
        ...r.stega || {},
        ...typeof (e == null ? void 0 : e.stega) == "boolean" ? { enabled: e.stega } : (e == null ? void 0 : e.stega) || {}
      }
    });
  }
  fetch(e, r, n) {
    return $(
      Nn(
        this,
        u(this, T),
        u(this, ue).stega,
        e,
        r,
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
  getDocument(e, r) {
    return $($t(this, u(this, T), e, r));
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
  getDocuments(e, r) {
    return $(Hn(this, u(this, T), e, r));
  }
  create(e, r) {
    return $(
      jt(this, u(this, T), e, "create", r)
    );
  }
  createIfNotExists(e, r) {
    return $(
      Bn(this, u(this, T), e, r)
    );
  }
  createOrReplace(e, r) {
    return $(
      Wn(this, u(this, T), e, r)
    );
  }
  createVersion({
    document: e,
    publishedId: r,
    releaseId: n
  }, i) {
    const s = wt("createVersion", {
      document: e,
      publishedId: r,
      releaseId: n
    }), o = { ...e, _id: s }, a = r || _t(e._id);
    return Ar(
      Gn(
        this,
        u(this, T),
        o,
        a,
        i
      )
    );
  }
  delete(e, r) {
    return $(Qn(this, u(this, T), e, r));
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
  discardVersion({ releaseId: e, publishedId: r }, n, i) {
    const s = bt(r, e);
    return $(
      Jn(this, u(this, T), s, n, i)
    );
  }
  replaceVersion({
    document: e,
    publishedId: r,
    releaseId: n
  }, i) {
    const s = wt("replaceVersion", {
      document: e,
      publishedId: r,
      releaseId: n
    }), o = { ...e, _id: s };
    return Ar(
      Yn(this, u(this, T), o, i)
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
  unpublishVersion({ releaseId: e, publishedId: r }, n) {
    const i = At(r, e);
    return $(
      Xn(this, u(this, T), i, r, n)
    );
  }
  mutate(e, r) {
    return $(Zn(this, u(this, T), e, r));
  }
  /**
   * Create a new buildable patch of operations to perform
   *
   * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
   * @param operations - Optional object of patch operations to initialize the patch instance with
   * @returns Patch instance - call `.commit()` to perform the operations defined
   */
  patch(e, r) {
    return new be(e, r, this);
  }
  /**
   * Create a new transaction of mutations
   *
   * @param operations - Optional array of mutation operations to initialize the transaction instance with
   */
  transaction(e) {
    return new vt(e, this);
  }
  /**
   * Perform action operations against the configured dataset
   * Returns a promise that resolves to the transaction result
   *
   * @param operations - Action operation(s) to execute
   * @param options - Action options
   */
  action(e, r) {
    return $(F(this, u(this, T), e, r));
  }
  /**
   * Perform a request against the Sanity API
   * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
   *
   * @param options - Request options
   * @returns Promise resolving to the response body
   */
  request(e) {
    return $(L(this, u(this, T), e));
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
  dataRequest(e, r, n) {
    return $(je(this, u(this, T), e, r, n));
  }
  /**
   * Get a Sanity API URL for the URI provided
   *
   * @param uri - URI/path to build URL for
   * @param canUseCdn - Whether or not to allow using the API CDN for this route
   */
  getUrl(e, r) {
    return nr(this, e, r);
  }
  /**
   * Get a Sanity API URL for the data operation and path provided
   *
   * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
   * @param path - Path to append after the operation
   */
  getDataUrl(e, r) {
    return Y(this, e, r);
  }
};
ue = new WeakMap(), T = new WeakMap();
let zt = Ct;
function da(t, e) {
  return { requester: Rr(t), createClient: (r) => {
    const n = Rr(t);
    return new e(
      (i, s) => (s || n)({
        maxRedirects: 0,
        maxRetries: r.maxRetries,
        retryDelay: r.retryDelay,
        ...i
      }),
      r
    );
  } };
}
var pa = [];
const ya = da(pa, zt), ma = ya.createClient;
var pt = { exports: {} }, va = pt.exports, kr;
function ga() {
  return kr || (kr = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(va, function() {
      function r() {
        return r = Object.assign || function(p) {
          for (var v = 1; v < arguments.length; v++) {
            var g = arguments[v];
            for (var h in g)
              Object.prototype.hasOwnProperty.call(g, h) && (p[h] = g[h]);
          }
          return p;
        }, r.apply(this, arguments);
      }
      function n(p, v) {
        if (p) {
          if (typeof p == "string") return i(p, v);
          var g = Object.prototype.toString.call(p).slice(8, -1);
          if (g === "Object" && p.constructor && (g = p.constructor.name), g === "Map" || g === "Set") return Array.from(p);
          if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return i(p, v);
        }
      }
      function i(p, v) {
        (v == null || v > p.length) && (v = p.length);
        for (var g = 0, h = new Array(v); g < v; g++) h[g] = p[g];
        return h;
      }
      function s(p, v) {
        var g = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
        if (g) return (g = g.call(p)).next.bind(g);
        if (Array.isArray(p) || (g = n(p)) || v) {
          g && (p = g);
          var h = 0;
          return function() {
            return h >= p.length ? {
              done: !0
            } : {
              done: !1,
              value: p[h++]
            };
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var o = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function a(p) {
        var v = p.split("-"), g = v[1], h = v[2], R = v[3];
        if (!g || !h || !R)
          throw new Error("Malformed asset _ref '" + p + `'. Expected an id like "` + o + '".');
        var E = h.split("x"), j = E[0], V = E[1], X = +j, Q = +V, H = isFinite(X) && isFinite(Q);
        if (!H)
          throw new Error("Malformed asset _ref '" + p + `'. Expected an id like "` + o + '".');
        return {
          id: g,
          width: X,
          height: Q,
          format: R
        };
      }
      var l = function(v) {
        var g = v;
        return g ? typeof g._ref == "string" : !1;
      }, c = function(v) {
        var g = v;
        return g ? typeof g._id == "string" : !1;
      }, y = function(v) {
        var g = v;
        return g && g.asset ? typeof g.asset.url == "string" : !1;
      };
      function m(p) {
        if (!p)
          return null;
        var v;
        if (typeof p == "string" && w(p))
          v = {
            asset: {
              _ref: f(p)
            }
          };
        else if (typeof p == "string")
          v = {
            asset: {
              _ref: p
            }
          };
        else if (l(p))
          v = {
            asset: p
          };
        else if (c(p))
          v = {
            asset: {
              _ref: p._id || ""
            }
          };
        else if (y(p))
          v = {
            asset: {
              _ref: f(p.asset.url)
            }
          };
        else if (typeof p.asset == "object")
          v = r({}, p);
        else
          return null;
        var g = p;
        return g.crop && (v.crop = g.crop), g.hotspot && (v.hotspot = g.hotspot), b(v);
      }
      function w(p) {
        return /^https?:\/\//.test("" + p);
      }
      function f(p) {
        var v = p.split("/").slice(-1);
        return ("image-" + v[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function b(p) {
        if (p.crop && p.hotspot)
          return p;
        var v = r({}, p);
        return v.crop || (v.crop = {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }), v.hotspot || (v.hotspot = {
          x: 0.5,
          y: 0.5,
          height: 1,
          width: 1
        }), v;
      }
      var d = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"], ["frame", "frame"]];
      function S(p) {
        var v = r({}, p || {}), g = v.source;
        delete v.source;
        var h = m(g);
        if (!h)
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(g) + ")");
        var R = h.asset._ref || h.asset._id || "", E = a(R), j = Math.round(h.crop.left * E.width), V = Math.round(h.crop.top * E.height), X = {
          left: j,
          top: V,
          width: Math.round(E.width - h.crop.right * E.width - j),
          height: Math.round(E.height - h.crop.bottom * E.height - V)
        }, Q = h.hotspot.height * E.height / 2, H = h.hotspot.width * E.width / 2, Te = h.hotspot.x * E.width, Ee = h.hotspot.y * E.height, Z = {
          left: Te - H,
          top: Ee - Q,
          right: Te + H,
          bottom: Ee + Q
        };
        return v.rect || v.focalPoint || v.ignoreImageParams || v.crop || (v = r({}, v, x({
          crop: X,
          hotspot: Z
        }, v))), _(r({}, v, {
          asset: E
        }));
      }
      function _(p) {
        var v = (p.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), g = p.vanityName ? "/" + p.vanityName : "", h = p.asset.id + "-" + p.asset.width + "x" + p.asset.height + "." + p.asset.format + g, R = v + "/images/" + p.projectId + "/" + p.dataset + "/" + h, E = [];
        if (p.rect) {
          var j = p.rect, V = j.left, X = j.top, Q = j.width, H = j.height, Te = V !== 0 || X !== 0 || H !== p.asset.height || Q !== p.asset.width;
          Te && E.push("rect=" + V + "," + X + "," + Q + "," + H);
        }
        p.bg && E.push("bg=" + p.bg), p.focalPoint && (E.push("fp-x=" + p.focalPoint.x), E.push("fp-y=" + p.focalPoint.y));
        var Ee = [p.flipHorizontal && "h", p.flipVertical && "v"].filter(Boolean).join("");
        return Ee && E.push("flip=" + Ee), d.forEach(function(Z) {
          var He = Z[0], re = Z[1];
          typeof p[He] < "u" ? E.push(re + "=" + encodeURIComponent(p[He])) : typeof p[re] < "u" && E.push(re + "=" + encodeURIComponent(p[re]));
        }), E.length === 0 ? R : R + "?" + E.join("&");
      }
      function x(p, v) {
        var g, h = v.width, R = v.height;
        if (!(h && R))
          return {
            width: h,
            height: R,
            rect: p.crop
          };
        var E = p.crop, j = p.hotspot, V = h / R, X = E.width / E.height;
        if (X > V) {
          var Q = Math.round(E.height), H = Math.round(Q * V), Te = Math.max(0, Math.round(E.top)), Ee = Math.round((j.right - j.left) / 2 + j.left), Z = Math.max(0, Math.round(Ee - H / 2));
          Z < E.left ? Z = E.left : Z + H > E.left + E.width && (Z = E.left + E.width - H), g = {
            left: Z,
            top: Te,
            width: H,
            height: Q
          };
        } else {
          var He = E.width, re = Math.round(He / V), ci = Math.max(0, Math.round(E.left)), li = Math.round((j.bottom - j.top) / 2 + j.top), ze = Math.max(0, Math.round(li - re / 2));
          ze < E.top ? ze = E.top : ze + re > E.top + E.height && (ze = E.top + E.height - re), g = {
            left: ci,
            top: ze,
            width: He,
            height: re
          };
        }
        return {
          width: h,
          height: R,
          rect: g
        };
      }
      var A = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], q = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], U = ["format"];
      function N(p) {
        return p && "config" in p ? typeof p.config == "function" : !1;
      }
      function Tt(p) {
        return p && "clientConfig" in p ? typeof p.clientConfig == "object" : !1;
      }
      function Rt(p) {
        for (var v = d, g = s(v), h; !(h = g()).done; ) {
          var R = h.value, E = R[0], j = R[1];
          if (p === E || p === j)
            return E;
        }
        return p;
      }
      function Ne(p) {
        if (N(p)) {
          var v = p.config(), g = v.apiHost, h = v.projectId, R = v.dataset, E = g || "https://api.sanity.io";
          return new Pt(null, {
            baseUrl: E.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: h,
            dataset: R
          });
        }
        if (Tt(p)) {
          var j = p.clientConfig, V = j.apiHost, X = j.projectId, Q = j.dataset, H = V || "https://api.sanity.io";
          return new Pt(null, {
            baseUrl: H.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: X,
            dataset: Q
          });
        }
        return new Pt(null, p || {});
      }
      var Pt = /* @__PURE__ */ function() {
        function p(g, h) {
          this.options = void 0, this.options = g ? r({}, g.options || {}, h || {}) : r({}, h || {});
        }
        var v = p.prototype;
        return v.withOptions = function(h) {
          var R = h.baseUrl || this.options.baseUrl, E = {
            baseUrl: R
          };
          for (var j in h)
            if (h.hasOwnProperty(j)) {
              var V = Rt(j);
              E[V] = h[j];
            }
          return new p(this, r({
            baseUrl: R
          }, E));
        }, v.image = function(h) {
          return this.withOptions({
            source: h
          });
        }, v.dataset = function(h) {
          return this.withOptions({
            dataset: h
          });
        }, v.projectId = function(h) {
          return this.withOptions({
            projectId: h
          });
        }, v.bg = function(h) {
          return this.withOptions({
            bg: h
          });
        }, v.dpr = function(h) {
          return this.withOptions(h && h !== 1 ? {
            dpr: h
          } : {});
        }, v.width = function(h) {
          return this.withOptions({
            width: h
          });
        }, v.height = function(h) {
          return this.withOptions({
            height: h
          });
        }, v.focalPoint = function(h, R) {
          return this.withOptions({
            focalPoint: {
              x: h,
              y: R
            }
          });
        }, v.maxWidth = function(h) {
          return this.withOptions({
            maxWidth: h
          });
        }, v.minWidth = function(h) {
          return this.withOptions({
            minWidth: h
          });
        }, v.maxHeight = function(h) {
          return this.withOptions({
            maxHeight: h
          });
        }, v.minHeight = function(h) {
          return this.withOptions({
            minHeight: h
          });
        }, v.size = function(h, R) {
          return this.withOptions({
            width: h,
            height: R
          });
        }, v.blur = function(h) {
          return this.withOptions({
            blur: h
          });
        }, v.sharpen = function(h) {
          return this.withOptions({
            sharpen: h
          });
        }, v.rect = function(h, R, E, j) {
          return this.withOptions({
            rect: {
              left: h,
              top: R,
              width: E,
              height: j
            }
          });
        }, v.format = function(h) {
          return this.withOptions({
            format: h
          });
        }, v.invert = function(h) {
          return this.withOptions({
            invert: h
          });
        }, v.orientation = function(h) {
          return this.withOptions({
            orientation: h
          });
        }, v.quality = function(h) {
          return this.withOptions({
            quality: h
          });
        }, v.forceDownload = function(h) {
          return this.withOptions({
            download: h
          });
        }, v.flipHorizontal = function() {
          return this.withOptions({
            flipHorizontal: !0
          });
        }, v.flipVertical = function() {
          return this.withOptions({
            flipVertical: !0
          });
        }, v.ignoreImageParams = function() {
          return this.withOptions({
            ignoreImageParams: !0
          });
        }, v.fit = function(h) {
          if (A.indexOf(h) === -1)
            throw new Error('Invalid fit mode "' + h + '"');
          return this.withOptions({
            fit: h
          });
        }, v.crop = function(h) {
          if (q.indexOf(h) === -1)
            throw new Error('Invalid crop mode "' + h + '"');
          return this.withOptions({
            crop: h
          });
        }, v.saturation = function(h) {
          return this.withOptions({
            saturation: h
          });
        }, v.auto = function(h) {
          if (U.indexOf(h) === -1)
            throw new Error('Invalid auto mode "' + h + '"');
          return this.withOptions({
            auto: h
          });
        }, v.pad = function(h) {
          return this.withOptions({
            pad: h
          });
        }, v.vanityName = function(h) {
          return this.withOptions({
            vanityName: h
          });
        }, v.frame = function(h) {
          if (h !== 1)
            throw new Error('Invalid frame value "' + h + '"');
          return this.withOptions({
            frame: h
          });
        }, v.url = function() {
          return S(this.options);
        }, v.toString = function() {
          return this.url();
        }, p;
      }();
      return Ne;
    });
  }(pt)), pt.exports;
}
var ba = /* @__PURE__ */ ga();
const wa = /* @__PURE__ */ di(ba), ir = ma({
  projectId: "e2soh655",
  dataset: "production",
  useCdn: !0,
  apiVersion: "2025-02-28"
}), Ea = wa(ir), Oa = (t) => Ea.image(t), xa = async () => {
  try {
    const t = `*[_type == "faq"] | order(order asc) {
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
    const e = await ir.fetch(t);
    return console.log("Query results:", e), e;
  } catch (t) {
    throw console.error("Error fetching FAQs from Sanity:", t), t;
  }
}, Aa = async (t) => await ir.fetch(`*[_type == "page" && slug.current == $slug][0] {
    title,
    "authorName": author->name,
    "authorImage": author->image.asset->url,
    "publishedAt": publishedAt,
    categories[]->{ title, slug },
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
  }`, { slug: t });
export {
  Ia as C,
  xa as a,
  Aa as b,
  di as g,
  En as i,
  Oa as u
};
