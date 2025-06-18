import * as c from "react";
import * as ii from "react-dom";
var gt = {}, Ma;
function li() {
  if (Ma) return gt;
  Ma = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.parse = i, gt.serialize = u;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, n = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, o = /* @__PURE__ */ (() => {
    const f = function() {
    };
    return f.prototype = /* @__PURE__ */ Object.create(null), f;
  })();
  function i(f, h) {
    const m = new o(), g = f.length;
    if (g < 2)
      return m;
    const E = (h == null ? void 0 : h.decode) || d;
    let w = 0;
    do {
      const C = f.indexOf("=", w);
      if (C === -1)
        break;
      const x = f.indexOf(";", w), L = x === -1 ? g : x;
      if (C > L) {
        w = f.lastIndexOf(";", C - 1) + 1;
        continue;
      }
      const R = s(f, w, C), v = l(f, C, R), D = f.slice(R, v);
      if (m[D] === void 0) {
        let P = s(f, C + 1, L), T = l(f, L, P);
        const I = E(f.slice(P, T));
        m[D] = I;
      }
      w = L + 1;
    } while (w < g);
    return m;
  }
  function s(f, h, m) {
    do {
      const g = f.charCodeAt(h);
      if (g !== 32 && g !== 9)
        return h;
    } while (++h < m);
    return m;
  }
  function l(f, h, m) {
    for (; h > m; ) {
      const g = f.charCodeAt(--h);
      if (g !== 32 && g !== 9)
        return h + 1;
    }
    return m;
  }
  function u(f, h, m) {
    const g = (m == null ? void 0 : m.encode) || encodeURIComponent;
    if (!e.test(f))
      throw new TypeError(`argument name is invalid: ${f}`);
    const E = g(h);
    if (!t.test(E))
      throw new TypeError(`argument val is invalid: ${h}`);
    let w = f + "=" + E;
    if (!m)
      return w;
    if (m.maxAge !== void 0) {
      if (!Number.isInteger(m.maxAge))
        throw new TypeError(`option maxAge is invalid: ${m.maxAge}`);
      w += "; Max-Age=" + m.maxAge;
    }
    if (m.domain) {
      if (!r.test(m.domain))
        throw new TypeError(`option domain is invalid: ${m.domain}`);
      w += "; Domain=" + m.domain;
    }
    if (m.path) {
      if (!n.test(m.path))
        throw new TypeError(`option path is invalid: ${m.path}`);
      w += "; Path=" + m.path;
    }
    if (m.expires) {
      if (!p(m.expires) || !Number.isFinite(m.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${m.expires}`);
      w += "; Expires=" + m.expires.toUTCString();
    }
    if (m.httpOnly && (w += "; HttpOnly"), m.secure && (w += "; Secure"), m.partitioned && (w += "; Partitioned"), m.priority)
      switch (typeof m.priority == "string" ? m.priority.toLowerCase() : void 0) {
        case "low":
          w += "; Priority=Low";
          break;
        case "medium":
          w += "; Priority=Medium";
          break;
        case "high":
          w += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${m.priority}`);
      }
    if (m.sameSite)
      switch (typeof m.sameSite == "string" ? m.sameSite.toLowerCase() : m.sameSite) {
        case !0:
        case "strict":
          w += "; SameSite=Strict";
          break;
        case "lax":
          w += "; SameSite=Lax";
          break;
        case "none":
          w += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${m.sameSite}`);
      }
    return w;
  }
  function d(f) {
    if (f.indexOf("%") === -1)
      return f;
    try {
      return decodeURIComponent(f);
    } catch {
      return f;
    }
  }
  function p(f) {
    return a.call(f) === "[object Date]";
  }
  return gt;
}
var Oa = li(), ot = { exports: {} }, Fa;
function si() {
  if (Fa) return ot.exports;
  Fa = 1;
  var e = {
    decodeValues: !0,
    map: !1,
    silent: !1
  };
  function t(i) {
    return typeof i == "string" && !!i.trim();
  }
  function r(i, s) {
    var l = i.split(";").filter(t), u = l.shift(), d = n(u), p = d.name, f = d.value;
    s = s ? Object.assign({}, e, s) : e;
    try {
      f = s.decodeValues ? decodeURIComponent(f) : f;
    } catch (m) {
      console.error(
        "set-cookie-parser encountered an error while decoding a cookie with value '" + f + "'. Set options.decodeValues to false to disable this feature.",
        m
      );
    }
    var h = {
      name: p,
      value: f
    };
    return l.forEach(function(m) {
      var g = m.split("="), E = g.shift().trimLeft().toLowerCase(), w = g.join("=");
      E === "expires" ? h.expires = new Date(w) : E === "max-age" ? h.maxAge = parseInt(w, 10) : E === "secure" ? h.secure = !0 : E === "httponly" ? h.httpOnly = !0 : E === "samesite" ? h.sameSite = w : E === "partitioned" ? h.partitioned = !0 : h[E] = w;
    }), h;
  }
  function n(i) {
    var s = "", l = "", u = i.split("=");
    return u.length > 1 ? (s = u.shift(), l = u.join("=")) : l = i, { name: s, value: l };
  }
  function a(i, s) {
    if (s = s ? Object.assign({}, e, s) : e, !i)
      return s.map ? {} : [];
    if (i.headers)
      if (typeof i.headers.getSetCookie == "function")
        i = i.headers.getSetCookie();
      else if (i.headers["set-cookie"])
        i = i.headers["set-cookie"];
      else {
        var l = i.headers[Object.keys(i.headers).find(function(d) {
          return d.toLowerCase() === "set-cookie";
        })];
        !l && i.headers.cookie && !s.silent && console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        ), i = l;
      }
    if (Array.isArray(i) || (i = [i]), s.map) {
      var u = {};
      return i.filter(t).reduce(function(d, p) {
        var f = r(p, s);
        return d[f.name] = f, d;
      }, u);
    } else
      return i.filter(t).map(function(d) {
        return r(d, s);
      });
  }
  function o(i) {
    if (Array.isArray(i))
      return i;
    if (typeof i != "string")
      return [];
    var s = [], l = 0, u, d, p, f, h;
    function m() {
      for (; l < i.length && /\s/.test(i.charAt(l)); )
        l += 1;
      return l < i.length;
    }
    function g() {
      return d = i.charAt(l), d !== "=" && d !== ";" && d !== ",";
    }
    for (; l < i.length; ) {
      for (u = l, h = !1; m(); )
        if (d = i.charAt(l), d === ",") {
          for (p = l, l += 1, m(), f = l; l < i.length && g(); )
            l += 1;
          l < i.length && i.charAt(l) === "=" ? (h = !0, l = f, s.push(i.substring(u, p)), u = l) : l = p + 1;
        } else
          l += 1;
      (!h || l >= i.length) && s.push(i.substring(u, i.length));
    }
    return s;
  }
  return ot.exports = a, ot.exports.parse = a, ot.exports.parseString = r, ot.exports.splitCookiesString = o, ot.exports;
}
var ui = /* @__PURE__ */ si();
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
var cn = (e) => {
  throw TypeError(e);
}, ci = (e, t, r) => t.has(e) || cn("Cannot " + r), Sr = (e, t, r) => (ci(e, t, "read from private field"), r ? r.call(e) : t.get(e)), di = (e, t, r) => t.has(e) ? cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), fi = /* @__PURE__ */ ((e) => (e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE", e))(fi || {}), ka = "popstate";
function dn(e = {}) {
  let { initialEntries: t = ["/"], initialIndex: r, v5Compat: n = !1 } = e, a;
  a = t.map(
    (h, m) => d(
      h,
      typeof h == "string" ? null : h.state,
      m === 0 ? "default" : void 0
    )
  );
  let o = l(
    r ?? a.length - 1
  ), i = "POP", s = null;
  function l(h) {
    return Math.min(Math.max(h, 0), a.length - 1);
  }
  function u() {
    return a[o];
  }
  function d(h, m = null, g) {
    let E = Oe(
      a ? u().pathname : "/",
      h,
      m,
      g
    );
    return K(
      E.pathname.charAt(0) === "/",
      `relative pathnames are not supported in memory history: ${JSON.stringify(
        h
      )}`
    ), E;
  }
  function p(h) {
    return typeof h == "string" ? h : me(h);
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return i;
    },
    get location() {
      return u();
    },
    createHref: p,
    createURL(h) {
      return new URL(p(h), "http://localhost");
    },
    encodeLocation(h) {
      let m = typeof h == "string" ? xe(h) : h;
      return {
        pathname: m.pathname || "",
        search: m.search || "",
        hash: m.hash || ""
      };
    },
    push(h, m) {
      i = "PUSH";
      let g = d(h, m);
      o += 1, a.splice(o, a.length, g), n && s && s({ action: i, location: g, delta: 1 });
    },
    replace(h, m) {
      i = "REPLACE";
      let g = d(h, m);
      a[o] = g, n && s && s({ action: i, location: g, delta: 0 });
    },
    go(h) {
      i = "POP";
      let m = l(o + h), g = a[m];
      o = m, s && s({ action: i, location: g, delta: h });
    },
    listen(h) {
      return s = h, () => {
        s = null;
      };
    }
  };
}
function Jr(e = {}) {
  function t(n, a) {
    let { pathname: o, search: i, hash: s } = n.location;
    return Oe(
      "",
      { pathname: o, search: i, hash: s },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : me(a);
  }
  return hn(
    t,
    r,
    null,
    e
  );
}
function fn(e = {}) {
  function t(a, o) {
    let {
      pathname: i = "/",
      search: s = "",
      hash: l = ""
    } = xe(a.location.hash.substring(1));
    return !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i), Oe(
      "",
      { pathname: i, search: s, hash: l },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(a, o) {
    let i = a.document.querySelector("base"), s = "";
    if (i && i.getAttribute("href")) {
      let l = a.location.href, u = l.indexOf("#");
      s = u === -1 ? l : l.slice(0, u);
    }
    return s + "#" + (typeof o == "string" ? o : me(o));
  }
  function n(a, o) {
    K(
      a.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        o
      )})`
    );
  }
  return hn(
    t,
    r,
    n,
    e
  );
}
function k(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function K(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function hi() {
  return Math.random().toString(36).substring(2, 10);
}
function Na(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function Oe(e, t, r = null, n) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? xe(t) : t,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || n || hi()
  };
}
function me({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function xe(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function hn(e, t, r, n = {}) {
  let { window: a = document.defaultView, v5Compat: o = !1 } = n, i = a.history, s = "POP", l = null, u = d();
  u == null && (u = 0, i.replaceState({ ...i.state, idx: u }, ""));
  function d() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    s = "POP";
    let E = d(), w = E == null ? null : E - u;
    u = E, l && l({ action: s, location: g.location, delta: w });
  }
  function f(E, w) {
    s = "PUSH";
    let C = Oe(g.location, E, w);
    r && r(C, E), u = d() + 1;
    let x = Na(C, u), L = g.createHref(C);
    try {
      i.pushState(x, "", L);
    } catch (R) {
      if (R instanceof DOMException && R.name === "DataCloneError")
        throw R;
      a.location.assign(L);
    }
    o && l && l({ action: s, location: g.location, delta: 1 });
  }
  function h(E, w) {
    s = "REPLACE";
    let C = Oe(g.location, E, w);
    r && r(C, E), u = d();
    let x = Na(C, u), L = g.createHref(C);
    i.replaceState(x, "", L), o && l && l({ action: s, location: g.location, delta: 0 });
  }
  function m(E) {
    return mn(E);
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(a, i);
    },
    listen(E) {
      if (l)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(ka, p), l = E, () => {
        a.removeEventListener(ka, p), l = null;
      };
    },
    createHref(E) {
      return t(a, E);
    },
    createURL: m,
    encodeLocation(E) {
      let w = m(E);
      return {
        pathname: w.pathname,
        search: w.search,
        hash: w.hash
      };
    },
    push: f,
    replace: h,
    go(E) {
      return i.go(E);
    }
  };
  return g;
}
function mn(e, t = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), k(r, "No window.location.(origin|href) available to create URL");
  let n = typeof e == "string" ? e : me(e);
  return n = n.replace(/ $/, "%20"), !t && n.startsWith("//") && (n = r + n), new URL(n, r);
}
function Pu(e) {
  return { defaultValue: e };
}
var Rt, $e = class {
  constructor(e) {
    if (di(this, Rt, /* @__PURE__ */ new Map()), e)
      for (let [t, r] of e)
        this.set(t, r);
  }
  get(e) {
    if (Sr(this, Rt).has(e))
      return Sr(this, Rt).get(e);
    if (e.defaultValue !== void 0)
      return e.defaultValue;
    throw new Error("No value found for context");
  }
  set(e, t) {
    Sr(this, Rt).set(e, t);
  }
};
Rt = /* @__PURE__ */ new WeakMap();
var mi = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function pi(e) {
  return mi.has(
    e
  );
}
var yi = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "unstable_middleware",
  "children"
]);
function vi(e) {
  return yi.has(
    e
  );
}
function gi(e) {
  return e.index === !0;
}
function Ze(e, t, r = [], n = {}) {
  return e.map((a, o) => {
    let i = [...r, String(o)], s = typeof a.id == "string" ? a.id : i.join("-");
    if (k(
      a.index !== !0 || !a.children,
      "Cannot specify children on an index route"
    ), k(
      !n[s],
      `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`
    ), gi(a)) {
      let l = {
        ...a,
        ...t(a),
        id: s
      };
      return n[s] = l, l;
    } else {
      let l = {
        ...a,
        ...t(a),
        id: s,
        children: void 0
      };
      return n[s] = l, a.children && (l.children = Ze(
        a.children,
        t,
        i,
        n
      )), l;
    }
  });
}
function ve(e, t, r = "/") {
  return Ut(e, t, r, !1);
}
function Ut(e, t, r, n) {
  let a = typeof t == "string" ? xe(t) : t, o = ne(a.pathname || "/", r);
  if (o == null)
    return null;
  let i = yn(e);
  wi(i);
  let s = null;
  for (let l = 0; s == null && l < i.length; ++l) {
    let u = wn(o);
    s = Di(
      i[l],
      u,
      n
    );
  }
  return s;
}
function pn(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return {
    id: r.id,
    pathname: n,
    params: a,
    data: t[r.id],
    handle: r.handle
  };
}
function yn(e, t = [], r = [], n = "") {
  let a = (o, i, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || "" : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    l.relativePath.startsWith("/") && (k(
      l.relativePath.startsWith(n),
      `Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), l.relativePath = l.relativePath.slice(n.length));
    let u = _e([n, l.relativePath]), d = r.concat(l);
    o.children && o.children.length > 0 && (k(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      o.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${u}".`
    ), yn(o.children, t, d, u)), !(o.path == null && !o.index) && t.push({
      path: u,
      score: Pi(u, o.index),
      routesMeta: d
    });
  };
  return e.forEach((o, i) => {
    var s;
    if (o.path === "" || !((s = o.path) != null && s.includes("?")))
      a(o, i);
    else
      for (let l of vn(o.path))
        a(o, i, l);
  }), t;
}
function vn(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, a = r.endsWith("?"), o = r.replace(/\?$/, "");
  if (n.length === 0)
    return a ? [o, ""] : [o];
  let i = vn(n.join("/")), s = [];
  return s.push(
    ...i.map(
      (l) => l === "" ? o : [o, l].join("/")
    )
  ), a && s.push(...i), s.map(
    (l) => e.startsWith("/") && l === "" ? "/" : l
  );
}
function wi(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : Li(
      t.routesMeta.map((n) => n.childrenIndex),
      r.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var Ei = /^:[\w-]+$/, bi = 3, Ri = 2, Si = 1, Ci = 10, xi = -2, Aa = (e) => e === "*";
function Pi(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(Aa) && (n += xi), t && (n += Ri), r.filter((a) => !Aa(a)).reduce(
    (a, o) => a + (Ei.test(o) ? bi : o === "" ? Si : Ci),
    n
  );
}
function Li(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Di(e, t, r = !1) {
  let { routesMeta: n } = e, a = {}, o = "/", i = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s], u = s === n.length - 1, d = o === "/" ? t : t.slice(o.length) || "/", p = St(
      { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
      d
    ), f = l.route;
    if (!p && u && r && !n[n.length - 1].route.index && (p = St(
      {
        path: l.relativePath,
        caseSensitive: l.caseSensitive,
        end: !1
      },
      d
    )), !p)
      return null;
    Object.assign(a, p.params), i.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: _e([o, p.pathname]),
      pathnameBase: Mi(
        _e([o, p.pathnameBase])
      ),
      route: f
    }), p.pathnameBase !== "/" && (o = _e([o, p.pathnameBase]));
  }
  return i;
}
function Lu(e, t = {}) {
  let r = e;
  r.endsWith("*") && r !== "*" && !r.endsWith("/*") && (K(
    !1,
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  ), r = r.replace(/\*$/, "/*"));
  const n = r.startsWith("/") ? "/" : "", a = (i) => i == null ? "" : typeof i == "string" ? i : String(i), o = r.split(/\/+/).map((i, s, l) => {
    if (s === l.length - 1 && i === "*")
      return a(t["*"]);
    const d = i.match(/^:([\w-]+)(\??)$/);
    if (d) {
      const [, p, f] = d;
      let h = t[p];
      return k(f === "?" || h != null, `Missing ":${p}" param`), a(h);
    }
    return i.replace(/\?$/g, "");
  }).filter((i) => !!i);
  return n + o.join("/");
}
function St(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = gn(
    e.path,
    e.caseSensitive,
    e.end
  ), a = t.match(r);
  if (!a) return null;
  let o = a[0], i = o.replace(/(.)\/+$/, "$1"), s = a.slice(1);
  return {
    params: n.reduce(
      (u, { paramName: d, isOptional: p }, f) => {
        if (d === "*") {
          let m = s[f] || "";
          i = o.slice(0, o.length - m.length).replace(/(.)\/+$/, "$1");
        }
        const h = s[f];
        return p && !h ? u[d] = void 0 : u[d] = (h || "").replace(/%2F/g, "/"), u;
      },
      {}
    ),
    pathname: o,
    pathnameBase: i,
    pattern: e
  };
}
function gn(e, t = !1, r = !0) {
  K(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (i, s, l) => (n.push({ paramName: s, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (n.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), n];
}
function wn(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return K(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function ne(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function _i(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: a = ""
  } = typeof e == "string" ? xe(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Ti(r, t) : t,
    search: Oi(n),
    hash: Fi(a)
  };
}
function Ti(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function Cr(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function En(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function nr(e) {
  let t = En(e);
  return t.map(
    (r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function or(e, t, r, n = !1) {
  let a;
  typeof e == "string" ? a = xe(e) : (a = { ...e }, k(
    !a.pathname || !a.pathname.includes("?"),
    Cr("?", "pathname", "search", a)
  ), k(
    !a.pathname || !a.pathname.includes("#"),
    Cr("#", "pathname", "hash", a)
  ), k(
    !a.search || !a.search.includes("#"),
    Cr("#", "search", "hash", a)
  ));
  let o = e === "" || a.pathname === "", i = o ? "/" : a.pathname, s;
  if (i == null)
    s = r;
  else {
    let p = t.length - 1;
    if (!n && i.startsWith("..")) {
      let f = i.split("/");
      for (; f[0] === ".."; )
        f.shift(), p -= 1;
      a.pathname = f.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let l = _i(a, s), u = i && i !== "/" && i.endsWith("/"), d = (o || i === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || d) && (l.pathname += "/"), l;
}
var _e = (e) => e.join("/").replace(/\/\/+/g, "/"), Mi = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Oi = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Fi = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ki = class {
  constructor(e, t) {
    this.type = "DataWithResponseInit", this.data = e, this.init = t || null;
  }
};
function Ni(e, t) {
  return new ki(
    e,
    typeof t == "number" ? { status: t } : t
  );
}
var ir = (e, t = 302) => {
  let r = t;
  typeof r == "number" ? r = { status: r } : typeof r.status > "u" && (r.status = 302);
  let n = new Headers(r.headers);
  return n.set("Location", e), new Response(null, { ...r, headers: n });
}, Ai = (e, t) => {
  let r = ir(e, t);
  return r.headers.set("X-Remix-Reload-Document", "true"), r;
}, $i = (e, t) => {
  let r = ir(e, t);
  return r.headers.set("X-Remix-Replace", "true"), r;
}, Ce = class {
  constructor(e, t, r, n = !1) {
    this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function ae(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var bn = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
], Hi = new Set(
  bn
), Ii = [
  "GET",
  ...bn
], ji = new Set(Ii), Rn = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), Ui = /* @__PURE__ */ new Set([307, 308]), zt = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Yr = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
}, Ge = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, Xr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Sn = (e) => ({
  hasErrorBoundary: !!e.hasErrorBoundary
}), Cn = "remix-router-transitions", xn = Symbol("ResetLoaderData");
function lr(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0, r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u";
  k(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let n = e.hydrationRouteProperties || [], a = e.mapRouteProperties || Sn, o = {}, i = Ze(
    e.routes,
    a,
    void 0,
    o
  ), s, l = e.basename || "/", u = e.dataStrategy || Yi, d = {
    unstable_middleware: !1,
    ...e.future
  }, p = null, f = /* @__PURE__ */ new Set(), h = null, m = null, g = null, E = e.hydrationData != null, w = ve(i, e.history.location, l), C = !1, x = null, L;
  if (w == null && !e.patchRoutesOnNavigation) {
    let y = q(404, {
      pathname: e.history.location.pathname
    }), { matches: b, route: S } = Gt(i);
    L = !0, w = b, x = { [S.id]: y };
  } else if (w && !e.hydrationData && Ot(
    w,
    i,
    e.history.location.pathname
  ).active && (w = null), w)
    if (w.some((y) => y.route.lazy))
      L = !1;
    else if (!w.some((y) => y.route.loader))
      L = !0;
    else {
      let y = e.hydrationData ? e.hydrationData.loaderData : null, b = e.hydrationData ? e.hydrationData.errors : null;
      if (b) {
        let S = w.findIndex(
          (_) => b[_.route.id] !== void 0
        );
        L = w.slice(0, S + 1).every(
          (_) => !Fr(_.route, y, b)
        );
      } else
        L = w.every(
          (S) => !Fr(S.route, y, b)
        );
    }
  else {
    L = !1, w = [];
    let y = Ot(
      null,
      i,
      e.history.location.pathname
    );
    y.active && y.matches && (C = !0, w = y.matches);
  }
  let R, v = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: w,
    initialized: L,
    navigation: zt,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || x,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, D = "POP", P = !1, T, I = !1, B = /* @__PURE__ */ new Map(), oe = null, ee = !1, W = !1, G = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map(), se = 0, pe = -1, ue = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Set(), Pe = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Map(), Tt, We = null;
  function Bo() {
    if (p = e.history.listen(
      ({ action: y, location: b, delta: S }) => {
        if (Tt) {
          Tt(), Tt = void 0;
          return;
        }
        K(
          Be.size === 0 || S != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let _ = La({
          currentLocation: v.location,
          nextLocation: b,
          historyAction: y
        });
        if (_ && S != null) {
          let M = new Promise((N) => {
            Tt = N;
          });
          e.history.go(S * -1), Mt(_, {
            state: "blocked",
            location: b,
            proceed() {
              Mt(_, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location: b
              }), M.then(() => e.history.go(S));
            },
            reset() {
              let N = new Map(v.blockers);
              N.set(_, Ge), de({ blockers: N });
            }
          });
          return;
        }
        return Ve(y, b);
      }
    ), r) {
      qi(t, B);
      let y = () => el(t, B);
      t.addEventListener("pagehide", y), oe = () => t.removeEventListener("pagehide", y);
    }
    return v.initialized || Ve("POP", v.location, {
      initialHydration: !0
    }), R;
  }
  function Wo() {
    p && p(), oe && oe(), f.clear(), T && T.abort(), v.fetchers.forEach((y, b) => wr(b)), v.blockers.forEach((y, b) => Pa(b));
  }
  function Vo(y) {
    return f.add(y), () => f.delete(y);
  }
  function de(y, b = {}) {
    v = {
      ...v,
      ...y
    };
    let S = [], _ = [];
    v.fetchers.forEach((M, N) => {
      M.state === "idle" && (ce.has(N) ? S.push(N) : _.push(N));
    }), ce.forEach((M) => {
      !v.fetchers.has(M) && !J.has(M) && S.push(M);
    }), [...f].forEach(
      (M) => M(v, {
        deletedFetchers: S,
        viewTransitionOpts: b.viewTransitionOpts,
        flushSync: b.flushSync === !0
      })
    ), S.forEach((M) => wr(M)), _.forEach((M) => v.fetchers.delete(M));
  }
  function at(y, b, { flushSync: S } = {}) {
    var H, U;
    let _ = v.actionData != null && v.navigation.formMethod != null && he(v.navigation.formMethod) && v.navigation.state === "loading" && ((H = y.state) == null ? void 0 : H._isRedirect) !== !0, M;
    b.actionData ? Object.keys(b.actionData).length > 0 ? M = b.actionData : M = null : _ ? M = v.actionData : M = null;
    let N = b.loaderData ? Ya(
      v.loaderData,
      b.loaderData,
      b.matches || [],
      b.errors
    ) : v.loaderData, j = v.blockers;
    j.size > 0 && (j = new Map(j), j.forEach(($, z) => j.set(z, Ge)));
    let F = P === !0 || v.navigation.formMethod != null && he(v.navigation.formMethod) && ((U = y.state) == null ? void 0 : U._isRedirect) !== !0;
    s && (i = s, s = void 0), ee || D === "POP" || (D === "PUSH" ? e.history.push(y, y.state) : D === "REPLACE" && e.history.replace(y, y.state));
    let A;
    if (D === "POP") {
      let $ = B.get(v.location.pathname);
      $ && $.has(y.pathname) ? A = {
        currentLocation: v.location,
        nextLocation: y
      } : B.has(y.pathname) && (A = {
        currentLocation: y,
        nextLocation: v.location
      });
    } else if (I) {
      let $ = B.get(v.location.pathname);
      $ ? $.add(y.pathname) : ($ = /* @__PURE__ */ new Set([y.pathname]), B.set(v.location.pathname, $)), A = {
        currentLocation: v.location,
        nextLocation: y
      };
    }
    de(
      {
        ...b,
        // matches, errors, fetchers go through as-is
        actionData: M,
        loaderData: N,
        historyAction: D,
        location: y,
        initialized: !0,
        navigation: zt,
        revalidation: "idle",
        restoreScrollPosition: _a(
          y,
          b.matches || v.matches
        ),
        preventScrollReset: F,
        blockers: j
      },
      {
        viewTransitionOpts: A,
        flushSync: S === !0
      }
    ), D = "POP", P = !1, I = !1, ee = !1, W = !1, We == null || We.resolve(), We = null;
  }
  async function wa(y, b) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let S = Or(
      v.location,
      v.matches,
      l,
      y,
      b == null ? void 0 : b.fromRouteId,
      b == null ? void 0 : b.relative
    ), { path: _, submission: M, error: N } = Ha(
      !1,
      S,
      b
    ), j = v.location, F = Oe(v.location, _, b && b.state);
    F = {
      ...F,
      ...e.history.encodeLocation(F)
    };
    let A = b && b.replace != null ? b.replace : void 0, H = "PUSH";
    A === !0 ? H = "REPLACE" : A === !1 || M != null && he(M.formMethod) && M.formAction === v.location.pathname + v.location.search && (H = "REPLACE");
    let U = b && "preventScrollReset" in b ? b.preventScrollReset === !0 : void 0, $ = (b && b.flushSync) === !0, z = La({
      currentLocation: j,
      nextLocation: F,
      historyAction: H
    });
    if (z) {
      Mt(z, {
        state: "blocked",
        location: F,
        proceed() {
          Mt(z, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: F
          }), wa(y, b);
        },
        reset() {
          let X = new Map(v.blockers);
          X.set(z, Ge), de({ blockers: X });
        }
      });
      return;
    }
    await Ve(H, F, {
      submission: M,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: N,
      preventScrollReset: U,
      replace: b && b.replace,
      enableViewTransition: b && b.viewTransition,
      flushSync: $
    });
  }
  function Jo() {
    We || (We = tl()), gr(), de({ revalidation: "loading" });
    let y = We.promise;
    return v.navigation.state === "submitting" ? y : v.navigation.state === "idle" ? (Ve(v.historyAction, v.location, {
      startUninterruptedRevalidation: !0
    }), y) : (Ve(
      D || v.historyAction,
      v.navigation.location,
      {
        overrideNavigation: v.navigation,
        // Proxy through any rending view transition
        enableViewTransition: I === !0
      }
    ), y);
  }
  async function Ve(y, b, S) {
    T && T.abort(), T = null, D = y, ee = (S && S.startUninterruptedRevalidation) === !0, ri(v.location, v.matches), P = (S && S.preventScrollReset) === !0, I = (S && S.enableViewTransition) === !0;
    let _ = s || i, M = S && S.overrideNavigation, N = S != null && S.initialHydration && v.matches && v.matches.length > 0 && !C ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      v.matches
    ) : ve(_, b, l), j = (S && S.flushSync) === !0;
    if (N && v.initialized && !W && Ki(v.location, b) && !(S && S.submission && he(S.submission.formMethod))) {
      at(b, { matches: N }, { flushSync: j });
      return;
    }
    let F = Ot(N, _, b.pathname);
    if (F.active && F.matches && (N = F.matches), !N) {
      let { error: ie, notFoundMatches: ye, route: V } = Er(
        b.pathname
      );
      at(
        b,
        {
          matches: ye,
          loaderData: {},
          errors: {
            [V.id]: ie
          }
        },
        { flushSync: j }
      );
      return;
    }
    T = new AbortController();
    let A = it(
      e.history,
      b,
      T.signal,
      S && S.submission
    ), H = new $e(
      e.unstable_getContext ? await e.unstable_getContext() : void 0
    ), U;
    if (S && S.pendingError)
      U = [
        De(N).route.id,
        { type: "error", error: S.pendingError }
      ];
    else if (S && S.submission && he(S.submission.formMethod)) {
      let ie = await Yo(
        A,
        b,
        S.submission,
        N,
        H,
        F.active,
        S && S.initialHydration === !0,
        { replace: S.replace, flushSync: j }
      );
      if (ie.shortCircuited)
        return;
      if (ie.pendingActionResult) {
        let [ye, V] = ie.pendingActionResult;
        if (re(V) && ae(V.error) && V.error.status === 404) {
          T = null, at(b, {
            matches: ie.matches,
            loaderData: {},
            errors: {
              [ye]: V.error
            }
          });
          return;
        }
      }
      N = ie.matches || N, U = ie.pendingActionResult, M = xr(b, S.submission), j = !1, F.active = !1, A = it(
        e.history,
        A.url,
        A.signal
      );
    }
    let {
      shortCircuited: $,
      matches: z,
      loaderData: X,
      errors: te
    } = await Xo(
      A,
      b,
      N,
      H,
      F.active,
      M,
      S && S.submission,
      S && S.fetcherSubmission,
      S && S.replace,
      S && S.initialHydration === !0,
      j,
      U
    );
    $ || (T = null, at(b, {
      matches: z || N,
      ...Xa(U),
      loaderData: X,
      errors: te
    }));
  }
  async function Yo(y, b, S, _, M, N, j, F = {}) {
    gr();
    let A = Qi(b, S);
    if (de({ navigation: A }, { flushSync: F.flushSync === !0 }), N) {
      let $ = await Ft(
        _,
        b.pathname,
        y.signal
      );
      if ($.type === "aborted")
        return { shortCircuited: !0 };
      if ($.type === "error") {
        let z = De($.partialMatches).route.id;
        return {
          matches: $.partialMatches,
          pendingActionResult: [
            z,
            {
              type: "error",
              error: $.error
            }
          ]
        };
      } else if ($.matches)
        _ = $.matches;
      else {
        let { notFoundMatches: z, error: X, route: te } = Er(
          b.pathname
        );
        return {
          matches: z,
          pendingActionResult: [
            te.id,
            {
              type: "error",
              error: X
            }
          ]
        };
      }
    }
    let H, U = Qe(_, b);
    if (!U.route.action && !U.route.lazy)
      H = {
        type: "error",
        error: q(405, {
          method: y.method,
          pathname: b.pathname,
          routeId: U.route.id
        })
      };
    else {
      let $ = je(
        a,
        o,
        y,
        _,
        U,
        j ? [] : n,
        M
      ), z = await ht(
        y,
        $,
        M,
        null
      );
      if (H = z[U.route.id], !H) {
        for (let X of _)
          if (z[X.route.id]) {
            H = z[X.route.id];
            break;
          }
      }
      if (y.signal.aborted)
        return { shortCircuited: !0 };
    }
    if (He(H)) {
      let $;
      return F && F.replace != null ? $ = F.replace : $ = Wa(
        H.response.headers.get("Location"),
        new URL(y.url),
        l
      ) === v.location.pathname + v.location.search, await Je(y, H, !0, {
        submission: S,
        replace: $
      }), { shortCircuited: !0 };
    }
    if (re(H)) {
      let $ = De(_, U.route.id);
      return (F && F.replace) !== !0 && (D = "PUSH"), {
        matches: _,
        pendingActionResult: [
          $.route.id,
          H,
          U.route.id
        ]
      };
    }
    return {
      matches: _,
      pendingActionResult: [U.route.id, H]
    };
  }
  async function Xo(y, b, S, _, M, N, j, F, A, H, U, $) {
    let z = N || xr(b, j), X = j || F || Ka(z), te = !ee && !H;
    if (M) {
      if (te) {
        let Re = Ea($);
        de(
          {
            navigation: z,
            ...Re !== void 0 ? { actionData: Re } : {}
          },
          {
            flushSync: U
          }
        );
      }
      let Y = await Ft(
        S,
        b.pathname,
        y.signal
      );
      if (Y.type === "aborted")
        return { shortCircuited: !0 };
      if (Y.type === "error") {
        let Re = De(Y.partialMatches).route.id;
        return {
          matches: Y.partialMatches,
          loaderData: {},
          errors: {
            [Re]: Y.error
          }
        };
      } else if (Y.matches)
        S = Y.matches;
      else {
        let { error: Re, notFoundMatches: Ne, route: Nt } = Er(
          b.pathname
        );
        return {
          matches: Ne,
          loaderData: {},
          errors: {
            [Nt.id]: Re
          }
        };
      }
    }
    let ie = s || i, { dsMatches: ye, revalidatingFetchers: V } = Ia(
      y,
      _,
      a,
      o,
      e.history,
      v,
      S,
      X,
      b,
      H ? [] : n,
      H === !0,
      W,
      G,
      ce,
      Pe,
      fe,
      ie,
      l,
      e.patchRoutesOnNavigation != null,
      $
    );
    if (pe = ++se, !e.dataStrategy && !ye.some((Y) => Y.shouldLoad) && V.length === 0) {
      let Y = Ca();
      return at(
        b,
        {
          matches: S,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: $ && re($[1]) ? { [$[0]]: $[1].error } : null,
          ...Xa($),
          ...Y ? { fetchers: new Map(v.fetchers) } : {}
        },
        { flushSync: U }
      ), { shortCircuited: !0 };
    }
    if (te) {
      let Y = {};
      if (!M) {
        Y.navigation = z;
        let Re = Ea($);
        Re !== void 0 && (Y.actionData = Re);
      }
      V.length > 0 && (Y.fetchers = Ko(V)), de(Y, { flushSync: U });
    }
    V.forEach((Y) => {
      ke(Y.key), Y.controller && J.set(Y.key, Y.controller);
    });
    let mt = () => V.forEach((Y) => ke(Y.key));
    T && T.signal.addEventListener(
      "abort",
      mt
    );
    let { loaderResults: Ye, fetcherResults: pt } = await ba(
      ye,
      V,
      y,
      _
    );
    if (y.signal.aborted)
      return { shortCircuited: !0 };
    T && T.signal.removeEventListener(
      "abort",
      mt
    ), V.forEach((Y) => J.delete(Y.key));
    let be = At(Ye);
    if (be)
      return await Je(y, be.result, !0, {
        replace: A
      }), { shortCircuited: !0 };
    if (be = At(pt), be)
      return fe.add(be.key), await Je(y, be.result, !0, {
        replace: A
      }), { shortCircuited: !0 };
    let { loaderData: yt, errors: vt } = Ja(
      v,
      S,
      Ye,
      $,
      V,
      pt
    );
    H && v.errors && (vt = { ...v.errors, ...vt });
    let br = Ca(), Xe = xa(pe), kt = br || Xe || V.length > 0;
    return {
      matches: S,
      loaderData: yt,
      errors: vt,
      ...kt ? { fetchers: new Map(v.fetchers) } : {}
    };
  }
  function Ea(y) {
    if (y && !re(y[1]))
      return {
        [y[0]]: y[1].data
      };
    if (v.actionData)
      return Object.keys(v.actionData).length === 0 ? null : v.actionData;
  }
  function Ko(y) {
    return y.forEach((b) => {
      let S = v.fetchers.get(b.key), _ = wt(
        void 0,
        S ? S.data : void 0
      );
      v.fetchers.set(b.key, _);
    }), new Map(v.fetchers);
  }
  async function Go(y, b, S, _) {
    ke(y);
    let M = (_ && _.flushSync) === !0, N = s || i, j = Or(
      v.location,
      v.matches,
      l,
      S,
      b,
      _ == null ? void 0 : _.relative
    ), F = ve(N, j, l), A = Ot(F, N, j);
    if (A.active && A.matches && (F = A.matches), !F) {
      Me(
        y,
        b,
        q(404, { pathname: j }),
        { flushSync: M }
      );
      return;
    }
    let { path: H, submission: U, error: $ } = Ha(
      !0,
      j,
      _
    );
    if ($) {
      Me(y, b, $, { flushSync: M });
      return;
    }
    let z = Qe(F, H), X = new $e(
      e.unstable_getContext ? await e.unstable_getContext() : void 0
    ), te = (_ && _.preventScrollReset) === !0;
    if (U && he(U.formMethod)) {
      await Qo(
        y,
        b,
        H,
        z,
        F,
        X,
        A.active,
        M,
        te,
        U
      );
      return;
    }
    Pe.set(y, { routeId: b, path: H }), await Zo(
      y,
      b,
      H,
      z,
      F,
      X,
      A.active,
      M,
      te,
      U
    );
  }
  async function Qo(y, b, S, _, M, N, j, F, A, H) {
    gr(), Pe.delete(y);
    function U(Z) {
      if (!Z.route.action && !Z.route.lazy) {
        let nt = q(405, {
          method: H.formMethod,
          pathname: S,
          routeId: b
        });
        return Me(y, b, nt, { flushSync: F }), !0;
      }
      return !1;
    }
    if (!j && U(_))
      return;
    let $ = v.fetchers.get(y);
    Fe(y, Zi(H, $), {
      flushSync: F
    });
    let z = new AbortController(), X = it(
      e.history,
      S,
      z.signal,
      H
    );
    if (j) {
      let Z = await Ft(
        M,
        S,
        X.signal,
        y
      );
      if (Z.type === "aborted")
        return;
      if (Z.type === "error") {
        Me(y, b, Z.error, { flushSync: F });
        return;
      } else if (Z.matches) {
        if (M = Z.matches, _ = Qe(M, S), U(_))
          return;
      } else {
        Me(
          y,
          b,
          q(404, { pathname: S }),
          { flushSync: F }
        );
        return;
      }
    }
    J.set(y, z);
    let te = se, ie = je(
      a,
      o,
      X,
      M,
      _,
      n,
      N
    ), V = (await ht(
      X,
      ie,
      N,
      y
    ))[_.route.id];
    if (X.signal.aborted) {
      J.get(y) === z && J.delete(y);
      return;
    }
    if (ce.has(y)) {
      if (He(V) || re(V)) {
        Fe(y, Ae(void 0));
        return;
      }
    } else {
      if (He(V))
        if (J.delete(y), pe > te) {
          Fe(y, Ae(void 0));
          return;
        } else
          return fe.add(y), Fe(y, wt(H)), Je(X, V, !1, {
            fetcherSubmission: H,
            preventScrollReset: A
          });
      if (re(V)) {
        Me(y, b, V.error);
        return;
      }
    }
    let mt = v.navigation.location || v.location, Ye = it(
      e.history,
      mt,
      z.signal
    ), pt = s || i, be = v.navigation.state !== "idle" ? ve(pt, v.navigation.location, l) : v.matches;
    k(be, "Didn't find any matches after fetcher action");
    let yt = ++se;
    ue.set(y, yt);
    let vt = wt(H, V.data);
    v.fetchers.set(y, vt);
    let { dsMatches: br, revalidatingFetchers: Xe } = Ia(
      Ye,
      N,
      a,
      o,
      e.history,
      v,
      be,
      H,
      mt,
      n,
      !1,
      W,
      G,
      ce,
      Pe,
      fe,
      pt,
      l,
      e.patchRoutesOnNavigation != null,
      [_.route.id, V]
    );
    Xe.filter((Z) => Z.key !== y).forEach((Z) => {
      let nt = Z.key, Ta = v.fetchers.get(nt), oi = wt(
        void 0,
        Ta ? Ta.data : void 0
      );
      v.fetchers.set(nt, oi), ke(nt), Z.controller && J.set(nt, Z.controller);
    }), de({ fetchers: new Map(v.fetchers) });
    let kt = () => Xe.forEach((Z) => ke(Z.key));
    z.signal.addEventListener(
      "abort",
      kt
    );
    let { loaderResults: Y, fetcherResults: Re } = await ba(
      br,
      Xe,
      Ye,
      N
    );
    if (z.signal.aborted)
      return;
    if (z.signal.removeEventListener(
      "abort",
      kt
    ), ue.delete(y), J.delete(y), Xe.forEach((Z) => J.delete(Z.key)), v.fetchers.has(y)) {
      let Z = Ae(V.data);
      v.fetchers.set(y, Z);
    }
    let Ne = At(Y);
    if (Ne)
      return Je(
        Ye,
        Ne.result,
        !1,
        { preventScrollReset: A }
      );
    if (Ne = At(Re), Ne)
      return fe.add(Ne.key), Je(
        Ye,
        Ne.result,
        !1,
        { preventScrollReset: A }
      );
    let { loaderData: Nt, errors: Rr } = Ja(
      v,
      be,
      Y,
      void 0,
      Xe,
      Re
    );
    xa(yt), v.navigation.state === "loading" && yt > pe ? (k(D, "Expected pending action"), T && T.abort(), at(v.navigation.location, {
      matches: be,
      loaderData: Nt,
      errors: Rr,
      fetchers: new Map(v.fetchers)
    })) : (de({
      errors: Rr,
      loaderData: Ya(
        v.loaderData,
        Nt,
        be,
        Rr
      ),
      fetchers: new Map(v.fetchers)
    }), W = !1);
  }
  async function Zo(y, b, S, _, M, N, j, F, A, H) {
    let U = v.fetchers.get(y);
    Fe(
      y,
      wt(
        H,
        U ? U.data : void 0
      ),
      { flushSync: F }
    );
    let $ = new AbortController(), z = it(
      e.history,
      S,
      $.signal
    );
    if (j) {
      let V = await Ft(
        M,
        S,
        z.signal,
        y
      );
      if (V.type === "aborted")
        return;
      if (V.type === "error") {
        Me(y, b, V.error, { flushSync: F });
        return;
      } else if (V.matches)
        M = V.matches, _ = Qe(M, S);
      else {
        Me(
          y,
          b,
          q(404, { pathname: S }),
          { flushSync: F }
        );
        return;
      }
    }
    J.set(y, $);
    let X = se, te = je(
      a,
      o,
      z,
      M,
      _,
      n,
      N
    ), ye = (await ht(
      z,
      te,
      N,
      y
    ))[_.route.id];
    if (J.get(y) === $ && J.delete(y), !z.signal.aborted) {
      if (ce.has(y)) {
        Fe(y, Ae(void 0));
        return;
      }
      if (He(ye))
        if (pe > X) {
          Fe(y, Ae(void 0));
          return;
        } else {
          fe.add(y), await Je(z, ye, !1, {
            preventScrollReset: A
          });
          return;
        }
      if (re(ye)) {
        Me(y, b, ye.error);
        return;
      }
      Fe(y, Ae(ye.data));
    }
  }
  async function Je(y, b, S, {
    submission: _,
    fetcherSubmission: M,
    preventScrollReset: N,
    replace: j
  } = {}) {
    b.response.headers.has("X-Remix-Revalidate") && (W = !0);
    let F = b.response.headers.get("Location");
    k(F, "Expected a Location header on the redirect Response"), F = Wa(
      F,
      new URL(y.url),
      l
    );
    let A = Oe(v.location, F, {
      _isRedirect: !0
    });
    if (r) {
      let te = !1;
      if (b.response.headers.has("X-Remix-Reload-Document"))
        te = !0;
      else if (Xr.test(F)) {
        const ie = mn(F, !0);
        te = // Hard reload if it's an absolute URL to a new origin
        ie.origin !== t.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        ne(ie.pathname, l) == null;
      }
      if (te) {
        j ? t.location.replace(F) : t.location.assign(F);
        return;
      }
    }
    T = null;
    let H = j === !0 || b.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: U, formAction: $, formEncType: z } = v.navigation;
    !_ && !M && U && $ && z && (_ = Ka(v.navigation));
    let X = _ || M;
    if (Ui.has(b.response.status) && X && he(X.formMethod))
      await Ve(H, A, {
        submission: {
          ...X,
          formAction: F
        },
        // Preserve these flags across redirects
        preventScrollReset: N || P,
        enableViewTransition: S ? I : void 0
      });
    else {
      let te = xr(
        A,
        _
      );
      await Ve(H, A, {
        overrideNavigation: te,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission: M,
        // Preserve these flags across redirects
        preventScrollReset: N || P,
        enableViewTransition: S ? I : void 0
      });
    }
  }
  async function ht(y, b, S, _) {
    let M, N = {};
    try {
      M = await Mn(
        u,
        y,
        b,
        _,
        S,
        !1
      );
    } catch (j) {
      return b.filter((F) => F.shouldLoad).forEach((F) => {
        N[F.route.id] = {
          type: "error",
          error: j
        };
      }), N;
    }
    if (y.signal.aborted)
      return N;
    for (let [j, F] of Object.entries(M))
      if (An(F)) {
        let A = F.result;
        N[j] = {
          type: "redirect",
          response: Fn(
            A,
            y,
            j,
            b,
            l
          )
        };
      } else
        N[j] = await On(
          F
        );
    return N;
  }
  async function ba(y, b, S, _) {
    let M = ht(
      S,
      y,
      _,
      null
    ), N = Promise.all(
      b.map(async (A) => {
        if (A.matches && A.match && A.request && A.controller) {
          let U = (await ht(
            A.request,
            A.matches,
            _,
            A.key
          ))[A.match.route.id];
          return { [A.key]: U };
        } else
          return Promise.resolve({
            [A.key]: {
              type: "error",
              error: q(404, {
                pathname: A.path
              })
            }
          });
      })
    ), j = await M, F = (await N).reduce(
      (A, H) => Object.assign(A, H),
      {}
    );
    return {
      loaderResults: j,
      fetcherResults: F
    };
  }
  function gr() {
    W = !0, Pe.forEach((y, b) => {
      J.has(b) && G.add(b), ke(b);
    });
  }
  function Fe(y, b, S = {}) {
    v.fetchers.set(y, b), de(
      { fetchers: new Map(v.fetchers) },
      { flushSync: (S && S.flushSync) === !0 }
    );
  }
  function Me(y, b, S, _ = {}) {
    let M = De(v.matches, b);
    wr(y), de(
      {
        errors: {
          [M.route.id]: S
        },
        fetchers: new Map(v.fetchers)
      },
      { flushSync: (_ && _.flushSync) === !0 }
    );
  }
  function Ra(y) {
    return Le.set(y, (Le.get(y) || 0) + 1), ce.has(y) && ce.delete(y), v.fetchers.get(y) || Yr;
  }
  function wr(y) {
    let b = v.fetchers.get(y);
    J.has(y) && !(b && b.state === "loading" && ue.has(y)) && ke(y), Pe.delete(y), ue.delete(y), fe.delete(y), ce.delete(y), G.delete(y), v.fetchers.delete(y);
  }
  function qo(y) {
    let b = (Le.get(y) || 0) - 1;
    b <= 0 ? (Le.delete(y), ce.add(y)) : Le.set(y, b), de({ fetchers: new Map(v.fetchers) });
  }
  function ke(y) {
    let b = J.get(y);
    b && (b.abort(), J.delete(y));
  }
  function Sa(y) {
    for (let b of y) {
      let S = Ra(b), _ = Ae(S.data);
      v.fetchers.set(b, _);
    }
  }
  function Ca() {
    let y = [], b = !1;
    for (let S of fe) {
      let _ = v.fetchers.get(S);
      k(_, `Expected fetcher: ${S}`), _.state === "loading" && (fe.delete(S), y.push(S), b = !0);
    }
    return Sa(y), b;
  }
  function xa(y) {
    let b = [];
    for (let [S, _] of ue)
      if (_ < y) {
        let M = v.fetchers.get(S);
        k(M, `Expected fetcher: ${S}`), M.state === "loading" && (ke(S), ue.delete(S), b.push(S));
      }
    return Sa(b), b.length > 0;
  }
  function ei(y, b) {
    let S = v.blockers.get(y) || Ge;
    return Be.get(y) !== b && Be.set(y, b), S;
  }
  function Pa(y) {
    v.blockers.delete(y), Be.delete(y);
  }
  function Mt(y, b) {
    let S = v.blockers.get(y) || Ge;
    k(
      S.state === "unblocked" && b.state === "blocked" || S.state === "blocked" && b.state === "blocked" || S.state === "blocked" && b.state === "proceeding" || S.state === "blocked" && b.state === "unblocked" || S.state === "proceeding" && b.state === "unblocked",
      `Invalid blocker state transition: ${S.state} -> ${b.state}`
    );
    let _ = new Map(v.blockers);
    _.set(y, b), de({ blockers: _ });
  }
  function La({
    currentLocation: y,
    nextLocation: b,
    historyAction: S
  }) {
    if (Be.size === 0)
      return;
    Be.size > 1 && K(!1, "A router only supports one blocker at a time");
    let _ = Array.from(Be.entries()), [M, N] = _[_.length - 1], j = v.blockers.get(M);
    if (!(j && j.state === "proceeding") && N({ currentLocation: y, nextLocation: b, historyAction: S }))
      return M;
  }
  function Er(y) {
    let b = q(404, { pathname: y }), S = s || i, { matches: _, route: M } = Gt(S);
    return { notFoundMatches: _, route: M, error: b };
  }
  function ti(y, b, S) {
    if (h = y, g = b, m = S || null, !E && v.navigation === zt) {
      E = !0;
      let _ = _a(v.location, v.matches);
      _ != null && de({ restoreScrollPosition: _ });
    }
    return () => {
      h = null, g = null, m = null;
    };
  }
  function Da(y, b) {
    return m && m(
      y,
      b.map((_) => pn(_, v.loaderData))
    ) || y.key;
  }
  function ri(y, b) {
    if (h && g) {
      let S = Da(y, b);
      h[S] = g();
    }
  }
  function _a(y, b) {
    if (h) {
      let S = Da(y, b), _ = h[S];
      if (typeof _ == "number")
        return _;
    }
    return null;
  }
  function Ot(y, b, S) {
    if (e.patchRoutesOnNavigation)
      if (y) {
        if (Object.keys(y[0].params).length > 0)
          return { active: !0, matches: Ut(
            b,
            S,
            l,
            !0
          ) };
      } else
        return { active: !0, matches: Ut(
          b,
          S,
          l,
          !0
        ) || [] };
    return { active: !1, matches: null };
  }
  async function Ft(y, b, S, _) {
    if (!e.patchRoutesOnNavigation)
      return { type: "success", matches: y };
    let M = y;
    for (; ; ) {
      let N = s == null, j = s || i, F = o;
      try {
        await e.patchRoutesOnNavigation({
          signal: S,
          path: b,
          matches: M,
          fetcherKey: _,
          patch: (U, $) => {
            S.aborted || ja(
              U,
              $,
              j,
              F,
              a
            );
          }
        });
      } catch (U) {
        return { type: "error", error: U, partialMatches: M };
      } finally {
        N && !S.aborted && (i = [...i]);
      }
      if (S.aborted)
        return { type: "aborted" };
      let A = ve(j, b, l);
      if (A)
        return { type: "success", matches: A };
      let H = Ut(
        j,
        b,
        l,
        !0
      );
      if (!H || M.length === H.length && M.every(
        (U, $) => U.route.id === H[$].route.id
      ))
        return { type: "success", matches: null };
      M = H;
    }
  }
  function ai(y) {
    o = {}, s = Ze(
      y,
      a,
      void 0,
      o
    );
  }
  function ni(y, b) {
    let S = s == null;
    ja(
      y,
      b,
      s || i,
      o,
      a
    ), S && (i = [...i], de({}));
  }
  return R = {
    get basename() {
      return l;
    },
    get future() {
      return d;
    },
    get state() {
      return v;
    },
    get routes() {
      return i;
    },
    get window() {
      return t;
    },
    initialize: Bo,
    subscribe: Vo,
    enableScrollRestoration: ti,
    navigate: wa,
    fetch: Go,
    revalidate: Jo,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (y) => e.history.createHref(y),
    encodeLocation: (y) => e.history.encodeLocation(y),
    getFetcher: Ra,
    deleteFetcher: qo,
    dispose: Wo,
    getBlocker: ei,
    deleteBlocker: Pa,
    patchRoutes: ni,
    _internalFetchControllers: J,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: ai
  }, R;
}
function Pn(e, t) {
  k(
    e.length > 0,
    "You must provide a non-empty routes array to createStaticHandler"
  );
  let r = {}, n = (t ? t.basename : null) || "/", a = (t == null ? void 0 : t.mapRouteProperties) || Sn, o = Ze(
    e,
    a,
    void 0,
    r
  );
  async function i(f, {
    requestContext: h,
    filterMatchesToLoad: m,
    skipLoaderErrorBubbling: g,
    skipRevalidation: E,
    dataStrategy: w,
    unstable_respond: C
  } = {}) {
    let x = new URL(f.url), L = f.method, R = Oe("", me(x), null, "default"), v = ve(o, R, n);
    if (h = h ?? new $e(), !Ar(L) && L !== "HEAD") {
      let P = q(405, { method: L }), { matches: T, route: I } = Gt(o), B = {
        basename: n,
        location: R,
        matches: T,
        loaderData: {},
        actionData: null,
        errors: {
          [I.id]: P
        },
        statusCode: P.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
      return C ? C(B) : B;
    } else if (!v) {
      let P = q(404, { pathname: R.pathname }), { matches: T, route: I } = Gt(o), B = {
        basename: n,
        location: R,
        matches: T,
        loaderData: {},
        actionData: null,
        errors: {
          [I.id]: P
        },
        statusCode: P.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
      return C ? C(B) : B;
    }
    if (C && v.some(
      (P) => P.route.unstable_middleware || typeof P.route.lazy == "object" && P.route.lazy.unstable_middleware
    )) {
      k(
        h instanceof $e,
        "When using middleware in `staticHandler.query()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`"
      );
      try {
        await Ba(
          v,
          r,
          a
        );
        let P, T = await Kt(
          {
            request: f,
            matches: v,
            params: v[0].params,
            // If we're calling middleware then it must be enabled so we can cast
            // this to the proper type knowing it's not an `AppLoadContext`
            context: h
          },
          !0,
          async () => {
            let I = await l(
              f,
              R,
              v,
              h,
              w || null,
              g === !0,
              null,
              m || null,
              E === !0
            );
            return Q(I) ? I : (P = { location: R, basename: n, ...I }, await C(P));
          },
          async (I, B) => {
            var oe;
            if (Q(I))
              return I;
            if (P)
              return B in P.loaderData && (P.loaderData[B] = void 0), C(
                Ln(
                  o,
                  P,
                  I,
                  g ? B : De(v, B).route.id
                )
              );
            {
              let ee = g ? B : De(
                v,
                ((oe = v.find(
                  (W) => W.route.id === B || W.route.loader
                )) == null ? void 0 : oe.route.id) || B
              ).route.id;
              return C({
                matches: v,
                location: R,
                basename: n,
                loaderData: {},
                actionData: null,
                errors: {
                  [ee]: I
                },
                statusCode: ae(I) ? I.status : 500,
                actionHeaders: {},
                loaderHeaders: {}
              });
            }
          }
        );
        return k(Q(T), "Expected a response in query()"), T;
      } catch (P) {
        if (Q(P))
          return P;
        throw P;
      }
    }
    let D = await l(
      f,
      R,
      v,
      h,
      w || null,
      g === !0,
      null,
      m || null,
      E === !0
    );
    return Q(D) ? D : { location: R, basename: n, ...D };
  }
  async function s(f, {
    routeId: h,
    requestContext: m,
    dataStrategy: g,
    unstable_respond: E
  } = {}) {
    let w = new URL(f.url), C = f.method, x = Oe("", me(w), null, "default"), L = ve(o, x, n);
    if (m = m ?? new $e(), !Ar(C) && C !== "HEAD" && C !== "OPTIONS")
      throw q(405, { method: C });
    if (!L)
      throw q(404, { pathname: x.pathname });
    let R = h ? L.find((P) => P.route.id === h) : Qe(L, x);
    if (h && !R)
      throw q(403, {
        pathname: x.pathname,
        routeId: h
      });
    if (!R)
      throw q(404, { pathname: x.pathname });
    if (E && L.some(
      (P) => P.route.unstable_middleware || typeof P.route.lazy == "object" && P.route.lazy.unstable_middleware
    ))
      return k(
        m instanceof $e,
        "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must be an instance of `unstable_RouterContextProvider`"
      ), await Ba(L, r, a), await Kt(
        {
          request: f,
          matches: L,
          params: L[0].params,
          // If we're calling middleware then it must be enabled so we can cast
          // this to the proper type knowing it's not an `AppLoadContext`
          context: m
        },
        !0,
        async () => {
          let T = await l(
            f,
            x,
            L,
            m,
            g || null,
            !1,
            R,
            null,
            !1
          );
          if (Q(T))
            return E(T);
          let I = T.errors ? Object.values(T.errors)[0] : void 0;
          if (I !== void 0)
            throw I;
          let B = T.actionData ? Object.values(T.actionData)[0] : Object.values(T.loaderData)[0];
          return typeof B == "string" ? new Response(B) : Response.json(B);
        },
        (T) => Q(T) ? E(T) : new Response(String(T), {
          status: 500,
          statusText: "Unexpected Server Error"
        })
      );
    let v = await l(
      f,
      x,
      L,
      m,
      g || null,
      !1,
      R,
      null,
      !1
    );
    if (Q(v))
      return v;
    let D = v.errors ? Object.values(v.errors)[0] : void 0;
    if (D !== void 0)
      throw D;
    if (v.actionData)
      return Object.values(v.actionData)[0];
    if (v.loaderData)
      return Object.values(v.loaderData)[0];
  }
  async function l(f, h, m, g, E, w, C, x, L) {
    k(
      f.signal,
      "query()/queryRoute() requests must contain an AbortController signal"
    );
    try {
      if (he(f.method))
        return await u(
          f,
          m,
          C || Qe(m, h),
          g,
          E,
          w,
          C != null,
          x,
          L
        );
      let R = await d(
        f,
        m,
        g,
        E,
        w,
        C,
        x
      );
      return Q(R) ? R : {
        ...R,
        actionData: null,
        actionHeaders: {}
      };
    } catch (R) {
      if (Gi(R) && Q(R.result)) {
        if (R.type === "error")
          throw R.result;
        return R.result;
      }
      if (ur(R))
        return R;
      throw R;
    }
  }
  async function u(f, h, m, g, E, w, C, x, L) {
    let R;
    if (!m.route.action && !m.route.lazy) {
      let P = q(405, {
        method: f.method,
        pathname: new URL(f.url).pathname,
        routeId: m.route.id
      });
      if (C)
        throw P;
      R = {
        type: "error",
        error: P
      };
    } else {
      let P = je(
        a,
        r,
        f,
        h,
        m,
        [],
        g
      );
      R = (await p(
        f,
        P,
        C,
        g,
        E
      ))[m.route.id], f.signal.aborted && $a(f, C);
    }
    if (He(R))
      throw new Response(null, {
        status: R.response.status,
        headers: {
          Location: R.response.headers.get("Location")
        }
      });
    if (C) {
      if (re(R))
        throw R.error;
      return {
        matches: [m],
        loaderData: {},
        actionData: { [m.route.id]: R.data },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    if (L)
      if (re(R)) {
        let P = w ? m : De(h, m.route.id);
        return {
          statusCode: ae(R.error) ? R.error.status : R.statusCode != null ? R.statusCode : 500,
          actionData: null,
          actionHeaders: {
            ...R.headers ? { [m.route.id]: R.headers } : {}
          },
          matches: h,
          loaderData: {},
          errors: {
            [P.route.id]: R.error
          },
          loaderHeaders: {}
        };
      } else
        return {
          actionData: {
            [m.route.id]: R.data
          },
          actionHeaders: R.headers ? { [m.route.id]: R.headers } : {},
          matches: h,
          loaderData: {},
          errors: null,
          statusCode: R.statusCode || 200,
          loaderHeaders: {}
        };
    let v = new Request(f.url, {
      headers: f.headers,
      redirect: f.redirect,
      signal: f.signal
    });
    if (re(R)) {
      let P = w ? m : De(h, m.route.id);
      return {
        ...await d(
          v,
          h,
          g,
          E,
          w,
          null,
          x,
          [P.route.id, R]
        ),
        statusCode: ae(R.error) ? R.error.status : R.statusCode != null ? R.statusCode : 500,
        actionData: null,
        actionHeaders: {
          ...R.headers ? { [m.route.id]: R.headers } : {}
        }
      };
    }
    return {
      ...await d(
        v,
        h,
        g,
        E,
        w,
        null,
        x
      ),
      actionData: {
        [m.route.id]: R.data
      },
      // action status codes take precedence over loader status codes
      ...R.statusCode ? { statusCode: R.statusCode } : {},
      actionHeaders: R.headers ? { [m.route.id]: R.headers } : {}
    };
  }
  async function d(f, h, m, g, E, w, C, x) {
    let L = w != null;
    if (L && !(w != null && w.route.loader) && !(w != null && w.route.lazy))
      throw q(400, {
        method: f.method,
        pathname: new URL(f.url).pathname,
        routeId: w == null ? void 0 : w.route.id
      });
    let R;
    if (w)
      R = je(
        a,
        r,
        f,
        h,
        w,
        [],
        m
      );
    else {
      let P = x && re(x[1]) ? (
        // Up to but not including the boundary
        h.findIndex((T) => T.route.id === x[0]) - 1
      ) : void 0;
      R = h.map((T, I) => P != null && I > P ? Ct(
        a,
        r,
        f,
        T,
        [],
        m,
        !1
      ) : Ct(
        a,
        r,
        f,
        T,
        [],
        m,
        (T.route.loader || T.route.lazy) != null && (!C || C(T))
      ));
    }
    if (!g && !R.some((P) => P.shouldLoad))
      return {
        matches: h,
        loaderData: {},
        errors: x && re(x[1]) ? {
          [x[0]]: x[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {}
      };
    let v = await p(
      f,
      R,
      L,
      m,
      g
    );
    return f.signal.aborted && $a(f, L), {
      ...kn(
        h,
        v,
        x,
        !0,
        E
      ),
      matches: h
    };
  }
  async function p(f, h, m, g, E) {
    let w = await Mn(
      E || kr,
      f,
      h,
      null,
      g,
      !0
    ), C = {};
    return await Promise.all(
      h.map(async (x) => {
        if (!(x.route.id in w))
          return;
        let L = w[x.route.id];
        if (An(L)) {
          let R = L.result;
          throw Fn(
            R,
            f,
            x.route.id,
            h,
            n
          );
        }
        if (Q(L.result) && m)
          throw L;
        C[x.route.id] = await On(L);
      })
    ), C;
  }
  return {
    dataRoutes: o,
    query: i,
    queryRoute: s
  };
}
function Ln(e, t, r, n) {
  let a = n || t._deepestRenderedBoundaryId || e[0].id;
  return {
    ...t,
    statusCode: ae(r) ? r.status : 500,
    errors: {
      [a]: r
    }
  };
}
function $a(e, t) {
  if (e.signal.reason !== void 0)
    throw e.signal.reason;
  let r = t ? "queryRoute" : "query";
  throw new Error(
    `${r}() call aborted without an \`AbortSignal.reason\`: ${e.method} ${e.url}`
  );
}
function zi(e) {
  return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function Or(e, t, r, n, a, o) {
  let i, s;
  if (a) {
    i = [];
    for (let u of t)
      if (i.push(u), u.route.id === a) {
        s = u;
        break;
      }
  } else
    i = t, s = t[t.length - 1];
  let l = or(
    n || ".",
    nr(i),
    ne(e.pathname, r) || e.pathname,
    o === "path"
  );
  if (n == null && (l.search = e.search, l.hash = e.hash), (n == null || n === "" || n === ".") && s) {
    let u = Gr(l.search);
    if (s.route.index && !u)
      l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index";
    else if (!s.route.index && u) {
      let d = new URLSearchParams(l.search), p = d.getAll("index");
      d.delete("index"), p.filter((h) => h).forEach((h) => d.append("index", h));
      let f = d.toString();
      l.search = f ? `?${f}` : "";
    }
  }
  return r !== "/" && (l.pathname = l.pathname === "/" ? r : _e([r, l.pathname])), me(l);
}
function Ha(e, t, r) {
  if (!r || !zi(r))
    return { path: t };
  if (r.formMethod && !Ar(r.formMethod))
    return {
      path: t,
      error: q(405, { method: r.formMethod })
    };
  let n = () => ({
    path: t,
    error: q(400, { type: "invalid-body" })
  }), o = (r.formMethod || "get").toUpperCase(), i = Nn(t);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!he(o))
        return n();
      let p = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(r.body.entries()).reduce(
          (f, [h, m]) => `${f}${h}=${m}
`,
          ""
        )
      ) : String(r.body);
      return {
        path: t,
        submission: {
          formMethod: o,
          formAction: i,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: p
        }
      };
    } else if (r.formEncType === "application/json") {
      if (!he(o))
        return n();
      try {
        let p = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: t,
          submission: {
            formMethod: o,
            formAction: i,
            formEncType: r.formEncType,
            formData: void 0,
            json: p,
            text: void 0
          }
        };
      } catch {
        return n();
      }
    }
  }
  k(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let s, l;
  if (r.formData)
    s = Nr(r.formData), l = r.formData;
  else if (r.body instanceof FormData)
    s = Nr(r.body), l = r.body;
  else if (r.body instanceof URLSearchParams)
    s = r.body, l = Va(s);
  else if (r.body == null)
    s = new URLSearchParams(), l = new FormData();
  else
    try {
      s = new URLSearchParams(r.body), l = Va(s);
    } catch {
      return n();
    }
  let u = {
    formMethod: o,
    formAction: i,
    formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
    formData: l,
    json: void 0,
    text: void 0
  };
  if (he(u.formMethod))
    return { path: t, submission: u };
  let d = xe(t);
  return e && d.search && Gr(d.search) && s.append("index", ""), d.search = `?${s}`, { path: me(d), submission: u };
}
function Ia(e, t, r, n, a, o, i, s, l, u, d, p, f, h, m, g, E, w, C, x) {
  var ee;
  let L = x ? re(x[1]) ? x[1].error : x[1].data : void 0, R = a.createURL(o.location), v = a.createURL(l), D;
  if (d && o.errors) {
    let W = Object.keys(o.errors)[0];
    D = i.findIndex((G) => G.route.id === W);
  } else if (x && re(x[1])) {
    let W = x[0];
    D = i.findIndex((G) => G.route.id === W) - 1;
  }
  let P = x ? x[1].statusCode : void 0, T = P && P >= 400, I = {
    currentUrl: R,
    currentParams: ((ee = o.matches[0]) == null ? void 0 : ee.params) || {},
    nextUrl: v,
    nextParams: i[0].params,
    ...s,
    actionResult: L,
    actionStatus: P
  }, B = i.map((W, G) => {
    let { route: J } = W, se = null;
    if (D != null && G > D ? se = !1 : J.lazy ? se = !0 : J.loader == null ? se = !1 : d ? se = Fr(
      J,
      o.loaderData,
      o.errors
    ) : Bi(o.loaderData, o.matches[G], W) && (se = !0), se !== null)
      return Ct(
        r,
        n,
        e,
        W,
        u,
        t,
        se
      );
    let pe = T ? !1 : (
      // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
      p || R.pathname + R.search === v.pathname + v.search || // Search params affect all loaders
      R.search !== v.search || Wi(o.matches[G], W)
    ), ue = {
      ...I,
      defaultShouldRevalidate: pe
    }, fe = Xt(W, ue);
    return Ct(
      r,
      n,
      e,
      W,
      u,
      t,
      fe,
      ue
    );
  }), oe = [];
  return m.forEach((W, G) => {
    if (d || !i.some((ce) => ce.route.id === W.routeId) || h.has(G))
      return;
    let J = o.fetchers.get(G), se = J && J.state !== "idle" && J.data === void 0, pe = ve(E, W.path, w);
    if (!pe) {
      if (C && se)
        return;
      oe.push({
        key: G,
        routeId: W.routeId,
        path: W.path,
        matches: null,
        match: null,
        request: null,
        controller: null
      });
      return;
    }
    if (g.has(G))
      return;
    let ue = Qe(pe, W.path), fe = new AbortController(), Pe = it(
      a,
      W.path,
      fe.signal
    ), Le = null;
    if (f.has(G))
      f.delete(G), Le = je(
        r,
        n,
        Pe,
        pe,
        ue,
        u,
        t
      );
    else if (se)
      p && (Le = je(
        r,
        n,
        Pe,
        pe,
        ue,
        u,
        t
      ));
    else {
      let ce = {
        ...I,
        defaultShouldRevalidate: T ? !1 : p
      };
      Xt(ue, ce) && (Le = je(
        r,
        n,
        Pe,
        pe,
        ue,
        u,
        t,
        ce
      ));
    }
    Le && oe.push({
      key: G,
      routeId: W.routeId,
      path: W.path,
      matches: Le,
      match: ue,
      request: Pe,
      controller: fe
    });
  }), { dsMatches: B, revalidatingFetchers: oe };
}
function Fr(e, t, r) {
  if (e.lazy)
    return !0;
  if (!e.loader)
    return !1;
  let n = t != null && e.id in t, a = r != null && r[e.id] !== void 0;
  return !n && a ? !1 : typeof e.loader == "function" && e.loader.hydrate === !0 ? !0 : !n && !a;
}
function Bi(e, t, r) {
  let n = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    r.route.id !== t.route.id
  ), a = !e.hasOwnProperty(r.route.id);
  return n || a;
}
function Wi(e, t) {
  let r = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Xt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean")
      return r;
  }
  return t.defaultShouldRevalidate;
}
function ja(e, t, r, n, a) {
  let o;
  if (e) {
    let l = n[e];
    k(
      l,
      `No route found to patch children into: routeId = ${e}`
    ), l.children || (l.children = []), o = l.children;
  } else
    o = r;
  let i = t.filter(
    (l) => !o.some(
      (u) => Dn(l, u)
    )
  ), s = Ze(
    i,
    a,
    [e || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
    n
  );
  o.push(...s);
}
function Dn(e, t) {
  return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children.every(
    (r, n) => {
      var a;
      return (a = t.children) == null ? void 0 : a.some((o) => Dn(r, o));
    }
  ) : !1;
}
var Ua = /* @__PURE__ */ new WeakMap(), Kr = ({
  key: e,
  route: t,
  manifest: r,
  mapRouteProperties: n
}) => {
  let a = r[t.id];
  if (k(a, "No route found in manifest"), !a.lazy || typeof a.lazy != "object")
    return;
  let o = a.lazy[e];
  if (!o)
    return;
  let i = Ua.get(a);
  i || (i = {}, Ua.set(a, i));
  let s = i[e];
  if (s)
    return s;
  let l = (async () => {
    let u = pi(e), p = a[e] !== void 0 && e !== "hasErrorBoundary";
    if (u)
      K(
        !u,
        "Route property " + e + " is not a supported lazy route property. This property will be ignored."
      ), i[e] = Promise.resolve();
    else if (p)
      K(
        !1,
        `Route "${a.id}" has a static property "${e}" defined. The lazy property will be ignored.`
      );
    else {
      let f = await o();
      f != null && (Object.assign(a, { [e]: f }), Object.assign(a, n(a)));
    }
    typeof a.lazy == "object" && (a.lazy[e] = void 0, Object.values(a.lazy).every((f) => f === void 0) && (a.lazy = void 0));
  })();
  return i[e] = l, l;
}, za = /* @__PURE__ */ new WeakMap();
function Vi(e, t, r, n, a) {
  let o = r[e.id];
  if (k(o, "No route found in manifest"), !e.lazy)
    return {
      lazyRoutePromise: void 0,
      lazyHandlerPromise: void 0
    };
  if (typeof e.lazy == "function") {
    let d = za.get(o);
    if (d)
      return {
        lazyRoutePromise: d,
        lazyHandlerPromise: d
      };
    let p = (async () => {
      k(
        typeof e.lazy == "function",
        "No lazy route function found"
      );
      let f = await e.lazy(), h = {};
      for (let m in f) {
        let g = f[m];
        if (g === void 0)
          continue;
        let E = vi(m), C = o[m] !== void 0 && // This property isn't static since it should always be updated based
        // on the route updates
        m !== "hasErrorBoundary";
        E ? K(
          !E,
          "Route property " + m + " is not a supported property to be returned from a lazy route function. This property will be ignored."
        ) : C ? K(
          !C,
          `Route "${o.id}" has a static property "${m}" defined but its lazy function is also returning a value for this property. The lazy route property "${m}" will be ignored.`
        ) : h[m] = g;
      }
      Object.assign(o, h), Object.assign(o, {
        // To keep things framework agnostic, we use the provided `mapRouteProperties`
        // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
        // since the logic will differ between frameworks.
        ...n(o),
        lazy: void 0
      });
    })();
    return za.set(o, p), p.catch(() => {
    }), {
      lazyRoutePromise: p,
      lazyHandlerPromise: p
    };
  }
  let i = Object.keys(e.lazy), s = [], l;
  for (let d of i) {
    if (a && a.includes(d))
      continue;
    let p = Kr({
      key: d,
      route: e,
      manifest: r,
      mapRouteProperties: n
    });
    p && (s.push(p), d === t && (l = p));
  }
  let u = s.length > 0 ? Promise.all(s).then(() => {
  }) : void 0;
  return u == null || u.catch(() => {
  }), l == null || l.catch(() => {
  }), {
    lazyRoutePromise: u,
    lazyHandlerPromise: l
  };
}
function Ji(e) {
  return e !== void 0;
}
function Ba(e, t, r) {
  let n = e.map(({ route: a }) => {
    if (!(typeof a.lazy != "object" || !a.lazy.unstable_middleware))
      return Kr({
        key: "unstable_middleware",
        route: a,
        manifest: t,
        mapRouteProperties: r
      });
  }).filter(Ji);
  return n.length > 0 ? Promise.all(n) : void 0;
}
async function kr(e) {
  let t = e.matches.filter((a) => a.shouldLoad), r = {};
  return (await Promise.all(t.map((a) => a.resolve()))).forEach((a, o) => {
    r[t[o].route.id] = a;
  }), r;
}
async function Yi(e) {
  return e.matches.some((t) => t.route.unstable_middleware) ? Kt(
    e,
    !1,
    () => kr(e),
    (t, r) => ({ [r]: { type: "error", result: t } })
  ) : kr(e);
}
async function Kt(e, t, r, n) {
  let { matches: a, request: o, params: i, context: s } = e, l = {
    handlerResult: void 0
  };
  try {
    let u = a.flatMap(
      (p) => p.route.unstable_middleware ? p.route.unstable_middleware.map((f) => [p.route.id, f]) : []
    ), d = await _n(
      { request: o, params: i, context: s },
      u,
      t,
      l,
      r
    );
    return t ? d : l.handlerResult;
  } catch (u) {
    if (!l.middlewareError)
      throw u;
    let d = await n(
      l.middlewareError.error,
      l.middlewareError.routeId
    );
    return t || !l.handlerResult ? d : Object.assign(l.handlerResult, d);
  }
}
async function _n(e, t, r, n, a, o = 0) {
  let { request: i } = e;
  if (i.signal.aborted)
    throw i.signal.reason ? i.signal.reason : new Error(
      `Request aborted without an \`AbortSignal.reason\`: ${i.method} ${i.url}`
    );
  let s = t[o];
  if (!s)
    return n.handlerResult = await a(), n.handlerResult;
  let [l, u] = s, d = !1, p, f = async () => {
    if (d)
      throw new Error("You may only call `next()` once per middleware");
    d = !0;
    let h = await _n(
      e,
      t,
      r,
      n,
      a,
      o + 1
    );
    if (r)
      return p = h, p;
  };
  try {
    let h = await u(
      {
        request: e.request,
        params: e.params,
        context: e.context
      },
      f
    );
    return d ? h === void 0 ? p : h : f();
  } catch (h) {
    throw n.middlewareError ? n.middlewareError.error !== h && (n.middlewareError = { routeId: l, error: h }) : n.middlewareError = { routeId: l, error: h }, h;
  }
}
function Tn(e, t, r, n, a) {
  let o = Kr({
    key: "unstable_middleware",
    route: n.route,
    manifest: t,
    mapRouteProperties: e
  }), i = Vi(
    n.route,
    he(r.method) ? "action" : "loader",
    t,
    e,
    a
  );
  return {
    middleware: o,
    route: i.lazyRoutePromise,
    handler: i.lazyHandlerPromise
  };
}
function Ct(e, t, r, n, a, o, i, s = null) {
  let l = !1, u = Tn(
    e,
    t,
    r,
    n,
    a
  );
  return {
    ...n,
    _lazyPromises: u,
    shouldLoad: i,
    unstable_shouldRevalidateArgs: s,
    unstable_shouldCallHandler(d) {
      return l = !0, s ? typeof d == "boolean" ? Xt(n, {
        ...s,
        defaultShouldRevalidate: d
      }) : Xt(n, s) : i;
    },
    resolve(d) {
      return l || i || d && r.method === "GET" && (n.route.lazy || n.route.loader) ? Xi({
        request: r,
        match: n,
        lazyHandlerPromise: u == null ? void 0 : u.handler,
        lazyRoutePromise: u == null ? void 0 : u.route,
        handlerOverride: d,
        scopedContext: o
      }) : Promise.resolve({ type: "data", result: void 0 });
    }
  };
}
function je(e, t, r, n, a, o, i, s = null) {
  return n.map((l) => l.route.id !== a.route.id ? {
    ...l,
    shouldLoad: !1,
    unstable_shouldRevalidateArgs: s,
    unstable_shouldCallHandler: () => !1,
    _lazyPromises: Tn(
      e,
      t,
      r,
      l,
      o
    ),
    resolve: () => Promise.resolve({ type: "data", result: void 0 })
  } : Ct(
    e,
    t,
    r,
    l,
    o,
    i,
    !0,
    s
  ));
}
async function Mn(e, t, r, n, a, o) {
  r.some((u) => {
    var d;
    return (d = u._lazyPromises) == null ? void 0 : d.middleware;
  }) && await Promise.all(r.map((u) => {
    var d;
    return (d = u._lazyPromises) == null ? void 0 : d.middleware;
  }));
  let i = {
    request: t,
    params: r[0].params,
    context: a,
    matches: r
  }, l = await e({
    ...i,
    fetcherKey: n,
    unstable_runClientMiddleware: o ? () => {
      throw new Error(
        "You cannot call `unstable_runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`"
      );
    } : (u) => {
      let d = i;
      return Kt(
        d,
        !1,
        () => u({
          ...d,
          fetcherKey: n,
          unstable_runClientMiddleware: () => {
            throw new Error(
              "Cannot call `unstable_runClientMiddleware()` from within an `unstable_runClientMiddleware` handler"
            );
          }
        }),
        (p, f) => ({
          [f]: { type: "error", result: p }
        })
      );
    }
  });
  try {
    await Promise.all(
      r.flatMap((u) => {
        var d, p;
        return [(d = u._lazyPromises) == null ? void 0 : d.handler, (p = u._lazyPromises) == null ? void 0 : p.route];
      })
    );
  } catch {
  }
  return l;
}
async function Xi({
  request: e,
  match: t,
  lazyHandlerPromise: r,
  lazyRoutePromise: n,
  handlerOverride: a,
  scopedContext: o
}) {
  let i, s, l = he(e.method), u = l ? "action" : "loader", d = (p) => {
    let f, h = new Promise((E, w) => f = w);
    s = () => f(), e.signal.addEventListener("abort", s);
    let m = (E) => typeof p != "function" ? Promise.reject(
      new Error(
        `You cannot call the handler for a route which defines a boolean "${u}" [routeId: ${t.route.id}]`
      )
    ) : p(
      {
        request: e,
        params: t.params,
        context: o
      },
      ...E !== void 0 ? [E] : []
    ), g = (async () => {
      try {
        return { type: "data", result: await (a ? a((w) => m(w)) : m()) };
      } catch (E) {
        return { type: "error", result: E };
      }
    })();
    return Promise.race([g, h]);
  };
  try {
    let p = l ? t.route.action : t.route.loader;
    if (r || n)
      if (p) {
        let f, [h] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          d(p).catch((m) => {
            f = m;
          }),
          // Ensure all lazy route promises are resolved before continuing
          r,
          n
        ]);
        if (f !== void 0)
          throw f;
        i = h;
      } else {
        await r;
        let f = l ? t.route.action : t.route.loader;
        if (f)
          [i] = await Promise.all([d(f), n]);
        else if (u === "action") {
          let h = new URL(e.url), m = h.pathname + h.search;
          throw q(405, {
            method: e.method,
            pathname: m,
            routeId: t.route.id
          });
        } else
          return { type: "data", result: void 0 };
      }
    else if (p)
      i = await d(p);
    else {
      let f = new URL(e.url), h = f.pathname + f.search;
      throw q(404, {
        pathname: h
      });
    }
  } catch (p) {
    return { type: "error", result: p };
  } finally {
    s && e.signal.removeEventListener("abort", s);
  }
  return i;
}
async function On(e) {
  var n, a, o, i, s, l;
  let { result: t, type: r } = e;
  if (Q(t)) {
    let u;
    try {
      let d = t.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d) ? t.body == null ? u = null : u = await t.json() : u = await t.text();
    } catch (d) {
      return { type: "error", error: d };
    }
    return r === "error" ? {
      type: "error",
      error: new Ce(t.status, t.statusText, u),
      statusCode: t.status,
      headers: t.headers
    } : {
      type: "data",
      data: u,
      statusCode: t.status,
      headers: t.headers
    };
  }
  return r === "error" ? Qt(t) ? t.data instanceof Error ? {
    type: "error",
    error: t.data,
    statusCode: (n = t.init) == null ? void 0 : n.status,
    headers: (a = t.init) != null && a.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: new Ce(
      ((o = t.init) == null ? void 0 : o.status) || 500,
      void 0,
      t.data
    ),
    statusCode: ae(t) ? t.status : void 0,
    headers: (i = t.init) != null && i.headers ? new Headers(t.init.headers) : void 0
  } : {
    type: "error",
    error: t,
    statusCode: ae(t) ? t.status : void 0
  } : Qt(t) ? {
    type: "data",
    data: t.data,
    statusCode: (s = t.init) == null ? void 0 : s.status,
    headers: (l = t.init) != null && l.headers ? new Headers(t.init.headers) : void 0
  } : { type: "data", data: t };
}
function Fn(e, t, r, n, a) {
  let o = e.headers.get("Location");
  if (k(
    o,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  ), !Xr.test(o)) {
    let i = n.slice(
      0,
      n.findIndex((s) => s.route.id === r) + 1
    );
    o = Or(
      new URL(t.url),
      i,
      a,
      o
    ), e.headers.set("Location", o);
  }
  return e;
}
function Wa(e, t, r) {
  if (Xr.test(e)) {
    let n = e, a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n), o = ne(a.pathname, r) != null;
    if (a.origin === t.origin && o)
      return a.pathname + a.search + a.hash;
  }
  return e;
}
function it(e, t, r, n) {
  let a = e.createURL(Nn(t)).toString(), o = { signal: r };
  if (n && he(n.formMethod)) {
    let { formMethod: i, formEncType: s } = n;
    o.method = i.toUpperCase(), s === "application/json" ? (o.headers = new Headers({ "Content-Type": s }), o.body = JSON.stringify(n.json)) : s === "text/plain" ? o.body = n.text : s === "application/x-www-form-urlencoded" && n.formData ? o.body = Nr(n.formData) : o.body = n.formData;
  }
  return new Request(a, o);
}
function Nr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function Va(e) {
  let t = new FormData();
  for (let [r, n] of e.entries())
    t.append(r, n);
  return t;
}
function kn(e, t, r, n = !1, a = !1) {
  let o = {}, i = null, s, l = !1, u = {}, d = r && re(r[1]) ? r[1].error : void 0;
  return e.forEach((p) => {
    if (!(p.route.id in t))
      return;
    let f = p.route.id, h = t[f];
    if (k(
      !He(h),
      "Cannot handle redirect results in processLoaderData"
    ), re(h)) {
      let m = h.error;
      if (d !== void 0 && (m = d, d = void 0), i = i || {}, a)
        i[f] = m;
      else {
        let g = De(e, f);
        i[g.route.id] == null && (i[g.route.id] = m);
      }
      n || (o[f] = xn), l || (l = !0, s = ae(h.error) ? h.error.status : 500), h.headers && (u[f] = h.headers);
    } else
      o[f] = h.data, h.statusCode && h.statusCode !== 200 && !l && (s = h.statusCode), h.headers && (u[f] = h.headers);
  }), d !== void 0 && r && (i = { [r[0]]: d }, r[2] && (o[r[2]] = void 0)), {
    loaderData: o,
    errors: i,
    statusCode: s || 200,
    loaderHeaders: u
  };
}
function Ja(e, t, r, n, a, o) {
  let { loaderData: i, errors: s } = kn(
    t,
    r,
    n
  );
  return a.filter((l) => !l.matches || l.matches.some((u) => u.shouldLoad)).forEach((l) => {
    let { key: u, match: d, controller: p } = l, f = o[u];
    if (k(f, "Did not find corresponding fetcher result"), !(p && p.signal.aborted))
      if (re(f)) {
        let h = De(e.matches, d == null ? void 0 : d.route.id);
        s && s[h.route.id] || (s = {
          ...s,
          [h.route.id]: f.error
        }), e.fetchers.delete(u);
      } else if (He(f))
        k(!1, "Unhandled fetcher revalidation redirect");
      else {
        let h = Ae(f.data);
        e.fetchers.set(u, h);
      }
  }), { loaderData: i, errors: s };
}
function Ya(e, t, r, n) {
  let a = Object.entries(t).filter(([, o]) => o !== xn).reduce((o, [i, s]) => (o[i] = s, o), {});
  for (let o of r) {
    let i = o.route.id;
    if (!t.hasOwnProperty(i) && e.hasOwnProperty(i) && o.route.loader && (a[i] = e[i]), n && n.hasOwnProperty(i))
      break;
  }
  return a;
}
function Xa(e) {
  return e ? re(e[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [e[0]]: e[1].data
    }
  } : {};
}
function De(e, t) {
  return (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e]).reverse().find((n) => n.route.hasErrorBoundary === !0) || e[0];
}
function Gt(e) {
  let t = e.length === 1 ? e[0] : e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t
      }
    ],
    route: t
  };
}
function q(e, {
  pathname: t,
  routeId: r,
  method: n,
  type: a,
  message: o
} = {}) {
  let i = "Unknown Server Error", s = "Unknown @remix-run/router error";
  return e === 400 ? (i = "Bad Request", n && t && r ? s = `You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.` : a === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (i = "Forbidden", s = `Route "${r}" does not match URL "${t}"`) : e === 404 ? (i = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (i = "Method Not Allowed", n && t && r ? s = `You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.` : n && (s = `Invalid request method "${n.toUpperCase()}"`)), new Ce(
    e || 500,
    i,
    new Error(s),
    !0
  );
}
function At(e) {
  let t = Object.entries(e);
  for (let r = t.length - 1; r >= 0; r--) {
    let [n, a] = t[r];
    if (He(a))
      return { key: n, result: a };
  }
}
function Nn(e) {
  let t = typeof e == "string" ? xe(e) : e;
  return me({ ...t, hash: "" });
}
function Ki(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Gi(e) {
  return e != null && typeof e == "object" && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function An(e) {
  return Q(e.result) && Rn.has(e.result.status);
}
function re(e) {
  return e.type === "error";
}
function He(e) {
  return (e && e.type) === "redirect";
}
function Qt(e) {
  return typeof e == "object" && e != null && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Q(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function sr(e) {
  return Rn.has(e);
}
function ur(e) {
  return Q(e) && sr(e.status) && e.headers.has("Location");
}
function Ar(e) {
  return ji.has(e.toUpperCase());
}
function he(e) {
  return Hi.has(e.toUpperCase());
}
function Gr(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Qe(e, t) {
  let r = typeof t == "string" ? xe(t).search : t.search;
  if (e[e.length - 1].route.index && Gr(r || ""))
    return e[e.length - 1];
  let n = En(e);
  return n[n.length - 1];
}
function Ka(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: a, formData: o, json: i } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: o,
        json: void 0,
        text: void 0
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: i,
        text: void 0
      };
  }
}
function xr(e, t) {
  return t ? {
    state: "loading",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  } : {
    state: "loading",
    location: e,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0
  };
}
function Qi(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text
  };
}
function wt(e, t) {
  return e ? {
    state: "loading",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t
  } : {
    state: "loading",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: t
  };
}
function Zi(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0
  };
}
function Ae(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e
  };
}
function qi(e, t) {
  try {
    let r = e.sessionStorage.getItem(
      Cn
    );
    if (r) {
      let n = JSON.parse(r);
      for (let [a, o] of Object.entries(n || {}))
        o && Array.isArray(o) && t.set(a, new Set(o || []));
    }
  } catch {
  }
}
function el(e, t) {
  if (t.size > 0) {
    let r = {};
    for (let [n, a] of t)
      r[n] = [...a];
    try {
      e.sessionStorage.setItem(
        Cn,
        JSON.stringify(r)
      );
    } catch (n) {
      K(
        !1,
        `Failed to save applied view transitions in sessionStorage (${n}).`
      );
    }
  }
}
function tl() {
  let e, t, r = new Promise((n, a) => {
    e = async (o) => {
      n(o);
      try {
        await r;
      } catch {
      }
    }, t = async (o) => {
      a(o);
      try {
        await r;
      } catch {
      }
    };
  });
  return {
    promise: r,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var Ue = c.createContext(null);
Ue.displayName = "DataRouter";
var qe = c.createContext(null);
qe.displayName = "DataRouterState";
var cr = c.createContext({
  isTransitioning: !1
});
cr.displayName = "ViewTransition";
var dr = c.createContext(
  /* @__PURE__ */ new Map()
);
dr.displayName = "Fetchers";
var xt = c.createContext(null);
xt.displayName = "Await";
var ge = c.createContext(
  null
);
ge.displayName = "Navigation";
var ct = c.createContext(
  null
);
ct.displayName = "Location";
var we = c.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
we.displayName = "Route";
var Qr = c.createContext(null);
Qr.displayName = "RouteError";
function rl(e, { relative: t } = {}) {
  k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: n } = c.useContext(ge), { hash: a, pathname: o, search: i } = Dt(e, { relative: t }), s = o;
  return r !== "/" && (s = o === "/" ? r : _e([r, o])), n.createHref({ pathname: s, search: i, hash: a });
}
function et() {
  return c.useContext(ct) != null;
}
function Ee() {
  return k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), c.useContext(ct).location;
}
function Du() {
  return c.useContext(ct).navigationType;
}
function _u(e) {
  k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component."
  );
  let { pathname: t } = Ee();
  return c.useMemo(
    () => St(e, wn(t)),
    [t, e]
  );
}
var $n = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Hn(e) {
  c.useContext(ge).static || c.useLayoutEffect(e);
}
function Zr() {
  let { isDataRoute: e } = c.useContext(we);
  return e ? yl() : al();
}
function al() {
  k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = c.useContext(Ue), { basename: t, navigator: r } = c.useContext(ge), { matches: n } = c.useContext(we), { pathname: a } = Ee(), o = JSON.stringify(nr(n)), i = c.useRef(!1);
  return Hn(() => {
    i.current = !0;
  }), c.useCallback(
    (l, u = {}) => {
      if (K(i.current, $n), !i.current) return;
      if (typeof l == "number") {
        r.go(l);
        return;
      }
      let d = or(
        l,
        JSON.parse(o),
        a,
        u.relative === "path"
      );
      e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : _e([t, d.pathname])), (u.replace ? r.replace : r.push)(
        d,
        u.state,
        u
      );
    },
    [
      t,
      r,
      o,
      a,
      e
    ]
  );
}
var In = c.createContext(null);
function Tu() {
  return c.useContext(In);
}
function nl(e) {
  let t = c.useContext(we).outlet;
  return t && /* @__PURE__ */ c.createElement(In.Provider, { value: e }, t);
}
function qr() {
  let { matches: e } = c.useContext(we), t = e[e.length - 1];
  return t ? t.params : {};
}
function Dt(e, { relative: t } = {}) {
  let { matches: r } = c.useContext(we), { pathname: n } = Ee(), a = JSON.stringify(nr(r));
  return c.useMemo(
    () => or(
      e,
      JSON.parse(a),
      n,
      t === "path"
    ),
    [e, a, n, t]
  );
}
function ol(e, t) {
  return ea(e, t);
}
function ea(e, t, r, n) {
  var w;
  k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a } = c.useContext(ge), { matches: o } = c.useContext(we), i = o[o.length - 1], s = i ? i.params : {}, l = i ? i.pathname : "/", u = i ? i.pathnameBase : "/", d = i && i.route;
  {
    let C = d && d.path || "";
    Un(
      l,
      !d || C.endsWith("*") || C.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C === "/" ? "*" : `${C}/*`}">.`
    );
  }
  let p = Ee(), f;
  if (t) {
    let C = typeof t == "string" ? xe(t) : t;
    k(
      u === "/" || ((w = C.pathname) == null ? void 0 : w.startsWith(u)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${C.pathname}" was given in the \`location\` prop.`
    ), f = C;
  } else
    f = p;
  let h = f.pathname || "/", m = h;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    m = "/" + h.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let g = ve(e, { pathname: m });
  K(
    d || g != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ), K(
    g == null || g[g.length - 1].route.element !== void 0 || g[g.length - 1].route.Component !== void 0 || g[g.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let E = jn(
    g && g.map(
      (C) => Object.assign({}, C, {
        params: Object.assign({}, s, C.params),
        pathname: _e([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(C.pathname).pathname : C.pathname
        ]),
        pathnameBase: C.pathnameBase === "/" ? u : _e([
          u,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(C.pathnameBase).pathname : C.pathnameBase
        ])
      })
    ),
    o,
    r,
    n
  );
  return t && E ? /* @__PURE__ */ c.createElement(
    ct.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...f
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    E
  ) : E;
}
function il() {
  let e = ia(), t = ae(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: n }, o = { padding: "2px 4px", backgroundColor: n }, i = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), i = /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ c.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ c.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ c.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ c.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ c.createElement("pre", { style: a }, r) : null, i);
}
var ll = /* @__PURE__ */ c.createElement(il, null), sl = class extends c.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ c.createElement(we.Provider, { value: this.props.routeContext }, /* @__PURE__ */ c.createElement(
      Qr.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function ul({ routeContext: e, match: t, children: r }) {
  let n = c.useContext(Ue);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ c.createElement(we.Provider, { value: e }, r);
}
function jn(e, t = [], r = null, n = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let a = e, o = r == null ? void 0 : r.errors;
  if (o != null) {
    let l = a.findIndex(
      (u) => u.route.id && (o == null ? void 0 : o[u.route.id]) !== void 0
    );
    k(
      l >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        o
      ).join(",")}`
    ), a = a.slice(
      0,
      Math.min(a.length, l + 1)
    );
  }
  let i = !1, s = -1;
  if (r)
    for (let l = 0; l < a.length; l++) {
      let u = a[l];
      if ((u.route.HydrateFallback || u.route.hydrateFallbackElement) && (s = l), u.route.id) {
        let { loaderData: d, errors: p } = r, f = u.route.loader && !d.hasOwnProperty(u.route.id) && (!p || p[u.route.id] === void 0);
        if (u.route.lazy || f) {
          i = !0, s >= 0 ? a = a.slice(0, s + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((l, u, d) => {
    let p, f = !1, h = null, m = null;
    r && (p = o && u.route.id ? o[u.route.id] : void 0, h = u.route.errorElement || ll, i && (s < 0 && d === 0 ? (Un(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), f = !0, m = null) : s === d && (f = !0, m = u.route.hydrateFallbackElement || null)));
    let g = t.concat(a.slice(0, d + 1)), E = () => {
      let w;
      return p ? w = h : f ? w = m : u.route.Component ? w = /* @__PURE__ */ c.createElement(u.route.Component, null) : u.route.element ? w = u.route.element : w = l, /* @__PURE__ */ c.createElement(
        ul,
        {
          match: u,
          routeContext: {
            outlet: l,
            matches: g,
            isDataRoute: r != null
          },
          children: w
        }
      );
    };
    return r && (u.route.ErrorBoundary || u.route.errorElement || d === 0) ? /* @__PURE__ */ c.createElement(
      sl,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: h,
        error: p,
        children: E(),
        routeContext: { outlet: null, matches: g, isDataRoute: !0 }
      }
    ) : E();
  }, null);
}
function ta(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ra(e) {
  let t = c.useContext(Ue);
  return k(t, ta(e)), t;
}
function ze(e) {
  let t = c.useContext(qe);
  return k(t, ta(e)), t;
}
function cl(e) {
  let t = c.useContext(we);
  return k(t, ta(e)), t;
}
function _t(e) {
  let t = cl(e), r = t.matches[t.matches.length - 1];
  return k(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function dl() {
  return _t(
    "useRouteId"
    /* UseRouteId */
  );
}
function fl() {
  return ze(
    "useNavigation"
    /* UseNavigation */
  ).navigation;
}
function Mu() {
  let e = ra(
    "useRevalidator"
    /* UseRevalidator */
  ), t = ze(
    "useRevalidator"
    /* UseRevalidator */
  ), r = c.useCallback(async () => {
    await e.router.revalidate();
  }, [e.router]);
  return c.useMemo(
    () => ({ revalidate: r, state: t.revalidation }),
    [r, t.revalidation]
  );
}
function aa() {
  let { matches: e, loaderData: t } = ze(
    "useMatches"
    /* UseMatches */
  );
  return c.useMemo(
    () => e.map((r) => pn(r, t)),
    [e, t]
  );
}
function na() {
  let e = ze(
    "useLoaderData"
    /* UseLoaderData */
  ), t = _t(
    "useLoaderData"
    /* UseLoaderData */
  );
  return e.loaderData[t];
}
function Ou(e) {
  return ze(
    "useRouteLoaderData"
    /* UseRouteLoaderData */
  ).loaderData[e];
}
function oa() {
  let e = ze(
    "useActionData"
    /* UseActionData */
  ), t = _t(
    "useLoaderData"
    /* UseLoaderData */
  );
  return e.actionData ? e.actionData[t] : void 0;
}
function ia() {
  var n;
  let e = c.useContext(Qr), t = ze(
    "useRouteError"
    /* UseRouteError */
  ), r = _t(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function hl() {
  let e = c.useContext(xt);
  return e == null ? void 0 : e._data;
}
function Fu() {
  let e = c.useContext(xt);
  return e == null ? void 0 : e._error;
}
var ml = 0;
function pl(e) {
  let { router: t, basename: r } = ra(
    "useBlocker"
    /* UseBlocker */
  ), n = ze(
    "useBlocker"
    /* UseBlocker */
  ), [a, o] = c.useState(""), i = c.useCallback(
    (s) => {
      if (typeof e != "function")
        return !!e;
      if (r === "/")
        return e(s);
      let { currentLocation: l, nextLocation: u, historyAction: d } = s;
      return e({
        currentLocation: {
          ...l,
          pathname: ne(l.pathname, r) || l.pathname
        },
        nextLocation: {
          ...u,
          pathname: ne(u.pathname, r) || u.pathname
        },
        historyAction: d
      });
    },
    [r, e]
  );
  return c.useEffect(() => {
    let s = String(++ml);
    return o(s), () => t.deleteBlocker(s);
  }, [t]), c.useEffect(() => {
    a !== "" && t.getBlocker(a, i);
  }, [t, a, i]), a && n.blockers.has(a) ? n.blockers.get(a) : Ge;
}
function yl() {
  let { router: e } = ra(
    "useNavigate"
    /* UseNavigateStable */
  ), t = _t(
    "useNavigate"
    /* UseNavigateStable */
  ), r = c.useRef(!1);
  return Hn(() => {
    r.current = !0;
  }), c.useCallback(
    async (a, o = {}) => {
      K(r.current, $n), r.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: t, ...o }));
    },
    [e, t]
  );
}
var Ga = {};
function Un(e, t, r) {
  !t && !Ga[e] && (Ga[e] = !0, K(!1, r));
}
var Qa = {};
function Zt(e, t) {
  !e && !Qa[t] && (Qa[t] = !0, console.warn(t));
}
function dt(e) {
  let t = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null
  };
  return e.Component && (e.element && K(
    !1,
    "You should not include both `Component` and `element` on your route - `Component` will be used."
  ), Object.assign(t, {
    element: c.createElement(e.Component),
    Component: void 0
  })), e.HydrateFallback && (e.hydrateFallbackElement && K(
    !1,
    "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
  ), Object.assign(t, {
    hydrateFallbackElement: c.createElement(e.HydrateFallback),
    HydrateFallback: void 0
  })), e.ErrorBoundary && (e.errorElement && K(
    !1,
    "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
  ), Object.assign(t, {
    errorElement: c.createElement(e.ErrorBoundary),
    ErrorBoundary: void 0
  })), t;
}
var fr = [
  "HydrateFallback",
  "hydrateFallbackElement"
];
function vl(e, t) {
  return lr({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: dn({
      initialEntries: t == null ? void 0 : t.initialEntries,
      initialIndex: t == null ? void 0 : t.initialIndex
    }),
    hydrationData: t == null ? void 0 : t.hydrationData,
    routes: e,
    hydrationRouteProperties: fr,
    mapRouteProperties: dt,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation
  }).initialize();
}
var gl = class {
  constructor() {
    this.status = "pending", this.promise = new Promise((e, t) => {
      this.resolve = (r) => {
        this.status === "pending" && (this.status = "resolved", e(r));
      }, this.reject = (r) => {
        this.status === "pending" && (this.status = "rejected", t(r));
      };
    });
  }
};
function zn({
  router: e,
  flushSync: t
}) {
  let [r, n] = c.useState(e.state), [a, o] = c.useState(), [i, s] = c.useState({
    isTransitioning: !1
  }), [l, u] = c.useState(), [d, p] = c.useState(), [f, h] = c.useState(), m = c.useRef(/* @__PURE__ */ new Map()), g = c.useCallback(
    (x, { deletedFetchers: L, flushSync: R, viewTransitionOpts: v }) => {
      x.fetchers.forEach((P, T) => {
        P.data !== void 0 && m.current.set(T, P.data);
      }), L.forEach((P) => m.current.delete(P)), Zt(
        R === !1 || t != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let D = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
      if (Zt(
        v == null || D,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      ), !v || !D) {
        t && R ? t(() => n(x)) : c.startTransition(() => n(x));
        return;
      }
      if (t && R) {
        t(() => {
          d && (l && l.resolve(), d.skipTransition()), s({
            isTransitioning: !0,
            flushSync: !0,
            currentLocation: v.currentLocation,
            nextLocation: v.nextLocation
          });
        });
        let P = e.window.document.startViewTransition(() => {
          t(() => n(x));
        });
        P.finished.finally(() => {
          t(() => {
            u(void 0), p(void 0), o(void 0), s({ isTransitioning: !1 });
          });
        }), t(() => p(P));
        return;
      }
      d ? (l && l.resolve(), d.skipTransition(), h({
        state: x,
        currentLocation: v.currentLocation,
        nextLocation: v.nextLocation
      })) : (o(x), s({
        isTransitioning: !0,
        flushSync: !1,
        currentLocation: v.currentLocation,
        nextLocation: v.nextLocation
      }));
    },
    [e.window, t, d, l]
  );
  c.useLayoutEffect(() => e.subscribe(g), [e, g]), c.useEffect(() => {
    i.isTransitioning && !i.flushSync && u(new gl());
  }, [i]), c.useEffect(() => {
    if (l && a && e.window) {
      let x = a, L = l.promise, R = e.window.document.startViewTransition(async () => {
        c.startTransition(() => n(x)), await L;
      });
      R.finished.finally(() => {
        u(void 0), p(void 0), o(void 0), s({ isTransitioning: !1 });
      }), p(R);
    }
  }, [a, l, e.window]), c.useEffect(() => {
    l && a && r.location.key === a.location.key && l.resolve();
  }, [l, d, r.location, a]), c.useEffect(() => {
    !i.isTransitioning && f && (o(f.state), s({
      isTransitioning: !0,
      flushSync: !1,
      currentLocation: f.currentLocation,
      nextLocation: f.nextLocation
    }), h(void 0));
  }, [i.isTransitioning, f]);
  let E = c.useMemo(() => ({
    createHref: e.createHref,
    encodeLocation: e.encodeLocation,
    go: (x) => e.navigate(x),
    push: (x, L, R) => e.navigate(x, {
      state: L,
      preventScrollReset: R == null ? void 0 : R.preventScrollReset
    }),
    replace: (x, L, R) => e.navigate(x, {
      replace: !0,
      state: L,
      preventScrollReset: R == null ? void 0 : R.preventScrollReset
    })
  }), [e]), w = e.basename || "/", C = c.useMemo(
    () => ({
      router: e,
      navigator: E,
      static: !1,
      basename: w
    }),
    [e, E, w]
  );
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(Ue.Provider, { value: C }, /* @__PURE__ */ c.createElement(qe.Provider, { value: r }, /* @__PURE__ */ c.createElement(dr.Provider, { value: m.current }, /* @__PURE__ */ c.createElement(cr.Provider, { value: i }, /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: w,
      location: r.location,
      navigationType: r.historyAction,
      navigator: E
    },
    /* @__PURE__ */ c.createElement(
      wl,
      {
        routes: e.routes,
        future: e.future,
        state: r
      }
    )
  ))))), null);
}
var wl = c.memo(El);
function El({
  routes: e,
  future: t,
  state: r
}) {
  return ea(e, void 0, r, t);
}
function ku({
  basename: e,
  children: t,
  initialEntries: r,
  initialIndex: n
}) {
  let a = c.useRef();
  a.current == null && (a.current = dn({
    initialEntries: r,
    initialIndex: n,
    v5Compat: !0
  }));
  let o = a.current, [i, s] = c.useState({
    action: o.action,
    location: o.location
  }), l = c.useCallback(
    (u) => {
      c.startTransition(() => s(u));
    },
    [s]
  );
  return c.useLayoutEffect(() => o.listen(l), [o, l]), /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: o
    }
  );
}
function Nu({
  to: e,
  replace: t,
  state: r,
  relative: n
}) {
  k(
    et(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: a } = c.useContext(ge);
  K(
    !a,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: o } = c.useContext(we), { pathname: i } = Ee(), s = Zr(), l = or(
    e,
    nr(o),
    i,
    n === "path"
  ), u = JSON.stringify(l);
  return c.useEffect(() => {
    s(JSON.parse(u), { replace: t, state: r, relative: n });
  }, [s, u, n, t, r]), null;
}
function bl(e) {
  return nl(e.context);
}
function Rl(e) {
  k(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function tt({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: n = "POP",
  navigator: a,
  static: o = !1
}) {
  k(
    !et(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let i = e.replace(/^\/*/, "/"), s = c.useMemo(
    () => ({
      basename: i,
      navigator: a,
      static: o,
      future: {}
    }),
    [i, a, o]
  );
  typeof r == "string" && (r = xe(r));
  let {
    pathname: l = "/",
    search: u = "",
    hash: d = "",
    state: p = null,
    key: f = "default"
  } = r, h = c.useMemo(() => {
    let m = ne(l, i);
    return m == null ? null : {
      location: {
        pathname: m,
        search: u,
        hash: d,
        state: p,
        key: f
      },
      navigationType: n
    };
  }, [i, l, u, d, p, f, n]);
  return K(
    h != null,
    `<Router basename="${i}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`
  ), h == null ? null : /* @__PURE__ */ c.createElement(ge.Provider, { value: s }, /* @__PURE__ */ c.createElement(ct.Provider, { children: t, value: h }));
}
function Au({
  children: e,
  location: t
}) {
  return ol(qt(e), t);
}
function $u({
  children: e,
  errorElement: t,
  resolve: r
}) {
  return /* @__PURE__ */ c.createElement(Sl, { resolve: r, errorElement: t }, /* @__PURE__ */ c.createElement(Cl, null, e));
}
var Sl = class extends c.Component {
  constructor(e) {
    super(e), this.state = { error: null };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  componentDidCatch(e, t) {
    console.error(
      "<Await> caught the following error during render",
      e,
      t
    );
  }
  render() {
    let { children: e, errorElement: t, resolve: r } = this.props, n = null, a = 0;
    if (!(r instanceof Promise))
      a = 1, n = Promise.resolve(), Object.defineProperty(n, "_tracked", { get: () => !0 }), Object.defineProperty(n, "_data", { get: () => r });
    else if (this.state.error) {
      a = 2;
      let o = this.state.error;
      n = Promise.reject().catch(() => {
      }), Object.defineProperty(n, "_tracked", { get: () => !0 }), Object.defineProperty(n, "_error", { get: () => o });
    } else r._tracked ? (n = r, a = "_error" in n ? 2 : "_data" in n ? 1 : 0) : (a = 0, Object.defineProperty(r, "_tracked", { get: () => !0 }), n = r.then(
      (o) => Object.defineProperty(r, "_data", { get: () => o }),
      (o) => Object.defineProperty(r, "_error", { get: () => o })
    ));
    if (a === 2 && !t)
      throw n._error;
    if (a === 2)
      return /* @__PURE__ */ c.createElement(xt.Provider, { value: n, children: t });
    if (a === 1)
      return /* @__PURE__ */ c.createElement(xt.Provider, { value: n, children: e });
    throw n;
  }
};
function Cl({
  children: e
}) {
  let t = hl(), r = typeof e == "function" ? e(t) : e;
  return /* @__PURE__ */ c.createElement(c.Fragment, null, r);
}
function qt(e, t = []) {
  let r = [];
  return c.Children.forEach(e, (n, a) => {
    if (!c.isValidElement(n))
      return;
    let o = [...t, a];
    if (n.type === c.Fragment) {
      r.push.apply(
        r,
        qt(n.props.children, o)
      );
      return;
    }
    k(
      n.type === Rl,
      `[${typeof n.type == "string" ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), k(
      !n.props.index || !n.props.children,
      "An index route cannot have child routes."
    );
    let i = {
      id: n.props.id || o.join("-"),
      caseSensitive: n.props.caseSensitive,
      element: n.props.element,
      Component: n.props.Component,
      index: n.props.index,
      path: n.props.path,
      loader: n.props.loader,
      action: n.props.action,
      hydrateFallbackElement: n.props.hydrateFallbackElement,
      HydrateFallback: n.props.HydrateFallback,
      errorElement: n.props.errorElement,
      ErrorBoundary: n.props.ErrorBoundary,
      hasErrorBoundary: n.props.hasErrorBoundary === !0 || n.props.ErrorBoundary != null || n.props.errorElement != null,
      shouldRevalidate: n.props.shouldRevalidate,
      handle: n.props.handle,
      lazy: n.props.lazy
    };
    n.props.children && (i.children = qt(
      n.props.children,
      o
    )), r.push(i);
  }), r;
}
var Hu = qt;
function Iu(e) {
  return jn(e);
}
function xl(e) {
  return function() {
    const r = {
      params: qr(),
      loaderData: na(),
      actionData: oa(),
      matches: aa()
    };
    return c.createElement(e, r);
  };
}
function Pl(e) {
  return function() {
    const r = {
      params: qr(),
      loaderData: na(),
      actionData: oa()
    };
    return c.createElement(e, r);
  };
}
function Ll(e) {
  return function() {
    const r = {
      params: qr(),
      loaderData: na(),
      actionData: oa(),
      error: ia()
    };
    return c.createElement(e, r);
  };
}
var Bt = "get", Wt = "application/x-www-form-urlencoded";
function hr(e) {
  return e != null && typeof e.tagName == "string";
}
function Dl(e) {
  return hr(e) && e.tagName.toLowerCase() === "button";
}
function _l(e) {
  return hr(e) && e.tagName.toLowerCase() === "form";
}
function Tl(e) {
  return hr(e) && e.tagName.toLowerCase() === "input";
}
function Ml(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ol(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Ml(e);
}
function $r(e = "") {
  return new URLSearchParams(
    typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, r) => {
      let n = e[r];
      return t.concat(
        Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]
      );
    }, [])
  );
}
function Fl(e, t) {
  let r = $r(e);
  return t && t.forEach((n, a) => {
    r.has(a) || t.getAll(a).forEach((o) => {
      r.append(a, o);
    });
  }), r;
}
var $t = null;
function kl() {
  if ($t === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), $t = !1;
    } catch {
      $t = !0;
    }
  return $t;
}
var Nl = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Pr(e) {
  return e != null && !Nl.has(e) ? (K(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Wt}"`
  ), null) : e;
}
function Al(e, t) {
  let r, n, a, o, i;
  if (_l(e)) {
    let s = e.getAttribute("action");
    n = s ? ne(s, t) : null, r = e.getAttribute("method") || Bt, a = Pr(e.getAttribute("enctype")) || Wt, o = new FormData(e);
  } else if (Dl(e) || Tl(e) && (e.type === "submit" || e.type === "image")) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (n = l ? ne(l, t) : null, r = e.getAttribute("formmethod") || s.getAttribute("method") || Bt, a = Pr(e.getAttribute("formenctype")) || Pr(s.getAttribute("enctype")) || Wt, o = new FormData(s, e), !kl()) {
      let { name: u, type: d, value: p } = e;
      if (d === "image") {
        let f = u ? `${u}.` : "";
        o.append(`${f}x`, "0"), o.append(`${f}y`, "0");
      } else u && o.append(u, p);
    }
  } else {
    if (hr(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Bt, n = null, a = Wt, i = e;
  }
  return o && a === "text/plain" && (i = o, o = void 0), { action: n, method: r.toLowerCase(), encType: a, formData: o, body: i };
}
function le(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function Bn(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function $l(e, t, r) {
  let n = e.map((o) => {
    var l;
    let i = t[o.route.id], s = r.routes[o.route.id];
    return [
      s && s.css ? s.css.map((u) => ({ rel: "stylesheet", href: u })) : [],
      ((l = i == null ? void 0 : i.links) == null ? void 0 : l.call(i)) || []
    ];
  }).flat(2), a = sa(e, r);
  return Yn(n, a);
}
function Wn(e) {
  return e.css ? e.css.map((t) => ({ rel: "stylesheet", href: t })) : [];
}
async function Hl(e) {
  if (!e.css) return;
  let t = Wn(e);
  await Promise.all(t.map(Jn));
}
async function Vn(e, t) {
  if (!e.css && !t.links || !Bl()) return;
  let r = [];
  if (e.css && r.push(...Wn(e)), t.links && r.push(...t.links()), r.length === 0) return;
  let n = [];
  for (let a of r)
    !la(a) && a.rel === "stylesheet" && n.push({
      ...a,
      rel: "preload",
      as: "style"
    });
  await Promise.all(n.map(Jn));
}
async function Jn(e) {
  return new Promise((t) => {
    if (e.media && !window.matchMedia(e.media).matches || document.querySelector(
      `link[rel="stylesheet"][href="${e.href}"]`
    ))
      return t();
    let r = document.createElement("link");
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    r.onload = () => {
      n(), t();
    }, r.onerror = () => {
      n(), t();
    }, document.head.appendChild(r);
  });
}
function la(e) {
  return e != null && typeof e.page == "string";
}
function Il(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function jl(e, t, r) {
  let n = await Promise.all(
    e.map(async (a) => {
      let o = t.routes[a.route.id];
      if (o) {
        let i = await Bn(o, r);
        return i.links ? i.links() : [];
      }
      return [];
    })
  );
  return Yn(
    n.flat(1).filter(Il).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function Za(e, t, r, n, a, o) {
  let i = (l, u) => r[u] ? l.route.id !== r[u].route.id : !0, s = (l, u) => {
    var d;
    return (
      // param change, /users/123 -> /users/456
      r[u].pathname !== l.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((d = r[u].route.path) == null ? void 0 : d.endsWith("*")) && r[u].params["*"] !== l.params["*"]
    );
  };
  return o === "assets" ? t.filter(
    (l, u) => i(l, u) || s(l, u)
  ) : o === "data" ? t.filter((l, u) => {
    var p;
    let d = n.routes[l.route.id];
    if (!d || !d.hasLoader)
      return !1;
    if (i(l, u) || s(l, u))
      return !0;
    if (l.route.shouldRevalidate) {
      let f = l.route.shouldRevalidate({
        currentUrl: new URL(
          a.pathname + a.search + a.hash,
          window.origin
        ),
        currentParams: ((p = r[0]) == null ? void 0 : p.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: l.params,
        defaultShouldRevalidate: !0
      });
      if (typeof f == "boolean")
        return f;
    }
    return !0;
  }) : [];
}
function sa(e, t, { includeHydrateFallback: r } = {}) {
  return Ul(
    e.map((n) => {
      let a = t.routes[n.route.id];
      if (!a) return [];
      let o = [a.module];
      return a.clientActionModule && (o = o.concat(a.clientActionModule)), a.clientLoaderModule && (o = o.concat(a.clientLoaderModule)), r && a.hydrateFallbackModule && (o = o.concat(a.hydrateFallbackModule)), a.imports && (o = o.concat(a.imports)), o;
    }).flat(1)
  );
}
function Ul(e) {
  return [...new Set(e)];
}
function zl(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let n of r)
    t[n] = e[n];
  return t;
}
function Yn(e, t) {
  let r = /* @__PURE__ */ new Set(), n = new Set(t);
  return e.reduce((a, o) => {
    if (t && !la(o) && o.as === "script" && o.href && n.has(o.href))
      return a;
    let s = JSON.stringify(zl(o));
    return r.has(s) || (r.add(s), a.push({ key: s, link: o })), a;
  }, []);
}
var Ht;
function Bl() {
  if (Ht !== void 0)
    return Ht;
  let e = document.createElement("link");
  return Ht = e.relList.supports("preload"), e = null, Ht;
}
var Wl = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, Vl = /[&><\u2028\u2029]/g;
function Jl(e) {
  return e.replace(Vl, (t) => Wl[t]);
}
function qa(e) {
  return { __html: e };
}
var Xn = -1, Kn = -2, Gn = -3, Qn = -4, ua = -5, Zn = -6, qn = -7, eo = "B", to = "D", lt = "E", Hr = "M", ro = "N", st = "P", ao = "R", Ir = "S", no = "Y", oo = "U", jr = "Z", io = class {
  constructor() {
    this.promise = new Promise((e, t) => {
      this.resolve = e, this.reject = t;
    });
  }
};
function Yl() {
  const e = new TextDecoder();
  let t = "";
  return new TransformStream({
    transform(r, n) {
      const a = e.decode(r, { stream: !0 }), o = (t + a).split(`
`);
      t = o.pop() || "";
      for (const i of o)
        n.enqueue(i);
    },
    flush(r) {
      t && r.enqueue(t);
    }
  });
}
function Se(e) {
  const { indices: t } = this, r = t.get(e);
  if (r) return [r];
  if (e === void 0) return qn;
  if (e === null) return ua;
  if (Number.isNaN(e)) return Kn;
  if (e === Number.POSITIVE_INFINITY) return Zn;
  if (e === Number.NEGATIVE_INFINITY) return Gn;
  if (e === 0 && 1 / e < 0) return Qn;
  const n = this.index++;
  return t.set(e, n), Xl.call(this, e, n), n;
}
function Xl(e, t) {
  const { deferred: r, plugins: n, postPlugins: a } = this, o = this.stringified, i = [[e, t]];
  for (; i.length > 0; ) {
    const [s, l] = i.pop(), u = (p) => Object.keys(p).map((f) => `"_${Se.call(this, f)}":${Se.call(this, p[f])}`).join(",");
    let d = null;
    switch (typeof s) {
      case "boolean":
      case "number":
      case "string":
        o[l] = JSON.stringify(s);
        break;
      case "bigint":
        o[l] = `["${eo}","${s}"]`;
        break;
      case "symbol": {
        const p = Symbol.keyFor(s);
        p ? o[l] = `["${no}",${JSON.stringify(p)}]` : d = new Error(
          "Cannot encode symbol unless created with Symbol.for()"
        );
        break;
      }
      case "object": {
        if (!s) {
          o[l] = `${ua}`;
          break;
        }
        const p = Array.isArray(s);
        let f = !1;
        if (!p && n)
          for (const h of n) {
            const m = h(s);
            if (Array.isArray(m)) {
              f = !0;
              const [g, ...E] = m;
              o[l] = `[${JSON.stringify(g)}`, E.length > 0 && (o[l] += `,${E.map((w) => Se.call(this, w)).join(",")}`), o[l] += "]";
              break;
            }
          }
        if (!f) {
          let h = p ? "[" : "{";
          if (p) {
            for (let m = 0; m < s.length; m++)
              h += (m ? "," : "") + (m in s ? Se.call(this, s[m]) : Xn);
            o[l] = `${h}]`;
          } else s instanceof Date ? o[l] = `["${to}",${s.getTime()}]` : s instanceof URL ? o[l] = `["${oo}",${JSON.stringify(s.href)}]` : s instanceof RegExp ? o[l] = `["${ao}",${JSON.stringify(
            s.source
          )},${JSON.stringify(s.flags)}]` : s instanceof Set ? s.size > 0 ? o[l] = `["${Ir}",${[...s].map((m) => Se.call(this, m)).join(",")}]` : o[l] = `["${Ir}"]` : s instanceof Map ? s.size > 0 ? o[l] = `["${Hr}",${[...s].flatMap(([m, g]) => [
            Se.call(this, m),
            Se.call(this, g)
          ]).join(",")}]` : o[l] = `["${Hr}"]` : s instanceof Promise ? (o[l] = `["${st}",${l}]`, r[l] = s) : s instanceof Error ? (o[l] = `["${lt}",${JSON.stringify(s.message)}`, s.name !== "Error" && (o[l] += `,${JSON.stringify(s.name)}`), o[l] += "]") : Object.getPrototypeOf(s) === null ? o[l] = `["${ro}",{${u(s)}}]` : Gl(s) ? o[l] = `{${u(s)}}` : d = new Error("Cannot encode object with prototype");
        }
        break;
      }
      default: {
        const p = Array.isArray(s);
        let f = !1;
        if (!p && n)
          for (const h of n) {
            const m = h(s);
            if (Array.isArray(m)) {
              f = !0;
              const [g, ...E] = m;
              o[l] = `[${JSON.stringify(g)}`, E.length > 0 && (o[l] += `,${E.map((w) => Se.call(this, w)).join(",")}`), o[l] += "]";
              break;
            }
          }
        f || (d = new Error("Cannot encode function or unexpected type"));
      }
    }
    if (d) {
      let p = !1;
      if (a)
        for (const f of a) {
          const h = f(s);
          if (Array.isArray(h)) {
            p = !0;
            const [m, ...g] = h;
            o[l] = `[${JSON.stringify(m)}`, g.length > 0 && (o[l] += `,${g.map((E) => Se.call(this, E)).join(",")}`), o[l] += "]";
            break;
          }
        }
      if (!p)
        throw d;
    }
  }
}
var Kl = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Gl(e) {
  const t = Object.getPrototypeOf(e);
  return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Kl;
}
var Lr = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function Ur(e) {
  const { hydrated: t, values: r } = this;
  if (typeof e == "number") return en.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const n = r.length;
  for (const a of e)
    r.push(a);
  return t.length = r.length, en.call(this, n);
}
function en(e) {
  const { hydrated: t, values: r, deferred: n, plugins: a } = this;
  let o;
  const i = [
    [
      e,
      (l) => {
        o = l;
      }
    ]
  ];
  let s = [];
  for (; i.length > 0; ) {
    const [l, u] = i.pop();
    switch (l) {
      case qn:
        u(void 0);
        continue;
      case ua:
        u(null);
        continue;
      case Kn:
        u(NaN);
        continue;
      case Zn:
        u(1 / 0);
        continue;
      case Gn:
        u(-1 / 0);
        continue;
      case Qn:
        u(-0);
        continue;
    }
    if (t[l]) {
      u(t[l]);
      continue;
    }
    const d = r[l];
    if (!d || typeof d != "object") {
      t[l] = d, u(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == "string") {
        const [p, f, h] = d;
        switch (p) {
          case to:
            u(t[l] = new Date(f));
            continue;
          case oo:
            u(t[l] = new URL(f));
            continue;
          case eo:
            u(t[l] = BigInt(f));
            continue;
          case ao:
            u(t[l] = new RegExp(f, h));
            continue;
          case no:
            u(t[l] = Symbol.for(f));
            continue;
          case Ir:
            const m = /* @__PURE__ */ new Set();
            t[l] = m;
            for (let L = d.length - 1; L > 0; L--)
              i.push([
                d[L],
                (R) => {
                  m.add(R);
                }
              ]);
            u(m);
            continue;
          case Hr:
            const g = /* @__PURE__ */ new Map();
            t[l] = g;
            for (let L = d.length - 2; L > 0; L -= 2) {
              const R = [];
              i.push([
                d[L + 1],
                (v) => {
                  R[1] = v;
                }
              ]), i.push([
                d[L],
                (v) => {
                  R[0] = v;
                }
              ]), s.push(() => {
                g.set(R[0], R[1]);
              });
            }
            u(g);
            continue;
          case ro:
            const E = /* @__PURE__ */ Object.create(null);
            t[l] = E;
            for (const L of Object.keys(f).reverse()) {
              const R = [];
              i.push([
                f[L],
                (v) => {
                  R[1] = v;
                }
              ]), i.push([
                Number(L.slice(1)),
                (v) => {
                  R[0] = v;
                }
              ]), s.push(() => {
                E[R[0]] = R[1];
              });
            }
            u(E);
            continue;
          case st:
            if (t[f])
              u(t[l] = t[f]);
            else {
              const L = new io();
              n[f] = L, u(t[l] = L.promise);
            }
            continue;
          case lt:
            const [, w, C] = d;
            let x = C && Lr && Lr[C] ? new Lr[C](w) : new Error(w);
            t[l] = x, u(x);
            continue;
          case jr:
            u(t[l] = t[f]);
            continue;
          default:
            if (Array.isArray(a)) {
              const L = [], R = d.slice(1);
              for (let v = 0; v < R.length; v++) {
                const D = R[v];
                i.push([
                  D,
                  (P) => {
                    L[v] = P;
                  }
                ]);
              }
              s.push(() => {
                for (const v of a) {
                  const D = v(d[0], ...L);
                  if (D) {
                    u(t[l] = D.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const p = [];
        t[l] = p;
        for (let f = 0; f < d.length; f++) {
          const h = d[f];
          h !== Xn && i.push([
            h,
            (m) => {
              p[f] = m;
            }
          ]);
        }
        u(p);
        continue;
      }
    else {
      const p = {};
      t[l] = p;
      for (const f of Object.keys(d).reverse()) {
        const h = [];
        i.push([
          d[f],
          (m) => {
            h[1] = m;
          }
        ]), i.push([
          Number(f.slice(1)),
          (m) => {
            h[0] = m;
          }
        ]), s.push(() => {
          p[h[0]] = h[1];
        });
      }
      u(p);
      continue;
    }
  }
  for (; s.length > 0; )
    s.pop()();
  return o;
}
async function Ql(e, t) {
  const { plugins: r } = t ?? {}, n = new io(), a = e.pipeThrough(Yl()).getReader(), o = {
    values: [],
    hydrated: [],
    deferred: {},
    plugins: r
  }, i = await Zl.call(o, a);
  let s = n.promise;
  return i.done ? n.resolve() : s = ql.call(o, a).then(n.resolve).catch((l) => {
    for (const u of Object.values(o.deferred))
      u.reject(l);
    n.reject(l);
  }), {
    done: s.then(() => a.closed),
    value: i.value
  };
}
async function Zl(e) {
  const t = await e.read();
  if (!t.value)
    throw new SyntaxError();
  let r;
  try {
    r = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return {
    done: t.done,
    value: Ur.call(this, r)
  };
}
async function ql(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const r = t.value;
    switch (r[0]) {
      case st: {
        const n = r.indexOf(":"), a = Number(r.slice(1, n)), o = this.deferred[a];
        if (!o)
          throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = Ur.call(this, s);
        o.resolve(l);
        break;
      }
      case lt: {
        const n = r.indexOf(":"), a = Number(r.slice(1, n)), o = this.deferred[a];
        if (!o)
          throw new Error(`Deferred ID ${a} not found in stream`);
        const i = r.slice(n + 1);
        let s;
        try {
          s = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const l = Ur.call(this, s);
        o.reject(l);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
function es(e, t) {
  const { plugins: r, postPlugins: n, signal: a } = t ?? {}, o = {
    deferred: {},
    index: 0,
    indices: /* @__PURE__ */ new Map(),
    stringified: [],
    plugins: r,
    postPlugins: n,
    signal: a
  }, i = new TextEncoder();
  let s = 0;
  return new ReadableStream({
    async start(u) {
      const d = Se.call(o, e);
      if (Array.isArray(d))
        throw new Error("This should never happen");
      d < 0 ? u.enqueue(i.encode(`${d}
`)) : (u.enqueue(
        i.encode(`[${o.stringified.join(",")}]
`)
      ), s = o.stringified.length - 1);
      const p = /* @__PURE__ */ new WeakSet();
      if (Object.keys(o.deferred).length) {
        let f;
        const h = new Promise((m, g) => {
          if (f = m, a) {
            const E = () => g(a.reason || new Error("Signal was aborted."));
            a.aborted ? E() : a.addEventListener("abort", (w) => {
              E();
            });
          }
        });
        for (; Object.keys(o.deferred).length > 0; ) {
          for (const [m, g] of Object.entries(
            o.deferred
          ))
            p.has(g) || p.add(
              // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
              o.deferred[Number(m)] = Promise.race([
                h,
                g
              ]).then(
                (E) => {
                  const w = Se.call(o, E);
                  if (Array.isArray(w))
                    u.enqueue(
                      i.encode(
                        `${st}${m}:[["${jr}",${w[0]}]]
`
                      )
                    ), o.index++, s++;
                  else if (w < 0)
                    u.enqueue(
                      i.encode(
                        `${st}${m}:${w}
`
                      )
                    );
                  else {
                    const C = o.stringified.slice(s + 1).join(",");
                    u.enqueue(
                      i.encode(
                        `${st}${m}:[${C}]
`
                      )
                    ), s = o.stringified.length - 1;
                  }
                },
                (E) => {
                  (!E || typeof E != "object" || !(E instanceof Error)) && (E = new Error("An unknown error occurred"));
                  const w = Se.call(o, E);
                  if (Array.isArray(w))
                    u.enqueue(
                      i.encode(
                        `${lt}${m}:[["${jr}",${w[0]}]]
`
                      )
                    ), o.index++, s++;
                  else if (w < 0)
                    u.enqueue(
                      i.encode(`${lt}${m}:${w}
`)
                    );
                  else {
                    const C = o.stringified.slice(s + 1).join(",");
                    u.enqueue(
                      i.encode(
                        `${lt}${m}:[${C}]
`
                      )
                    ), s = o.stringified.length - 1;
                  }
                }
              ).finally(() => {
                delete o.deferred[Number(m)];
              })
            );
          await Promise.race(Object.values(o.deferred));
        }
        f();
      }
      await Promise.all(Object.values(o.deferred)), u.close();
    }
  });
}
async function ts(e) {
  let t = { signal: e.signal };
  if (e.method !== "GET") {
    t.method = e.method;
    let r = e.headers.get("Content-Type");
    r && /\bapplication\/json\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = JSON.stringify(await e.json())) : r && /\btext\/plain\b/.test(r) ? (t.headers = { "Content-Type": r }, t.body = await e.text()) : r && /\bapplication\/x-www-form-urlencoded\b/.test(r) ? t.body = new URLSearchParams(await e.text()) : t.body = await e.formData();
  }
  return t;
}
var Te = Symbol("SingleFetchRedirect"), lo = class extends Error {
}, ut = 202, so = /* @__PURE__ */ new Set([100, 101, 204, 205]);
function uo({
  context: e,
  identifier: t,
  reader: r,
  textDecoder: n,
  nonce: a
}) {
  if (!e.renderMeta || !e.renderMeta.didRenderScripts)
    return null;
  e.renderMeta.streamCache || (e.renderMeta.streamCache = {});
  let { streamCache: o } = e.renderMeta, i = o[t];
  if (i || (i = o[t] = r.read().then((d) => {
    o[t].result = {
      done: d.done,
      value: n.decode(d.value, { stream: !0 })
    };
  }).catch((d) => {
    o[t].error = d;
  })), i.error)
    throw i.error;
  if (i.result === void 0)
    throw i;
  let { done: s, value: l } = i.result, u = l ? /* @__PURE__ */ c.createElement(
    "script",
    {
      nonce: a,
      dangerouslySetInnerHTML: {
        __html: `window.__reactRouterContext.streamController.enqueue(${Jl(
          JSON.stringify(l)
        )});`
      }
    }
  ) : null;
  return s ? /* @__PURE__ */ c.createElement(c.Fragment, null, u, /* @__PURE__ */ c.createElement(
    "script",
    {
      nonce: a,
      dangerouslySetInnerHTML: {
        __html: "window.__reactRouterContext.streamController.close();"
      }
    }
  )) : /* @__PURE__ */ c.createElement(c.Fragment, null, u, /* @__PURE__ */ c.createElement(c.Suspense, null, /* @__PURE__ */ c.createElement(
    uo,
    {
      context: e,
      identifier: t + 1,
      reader: r,
      textDecoder: n,
      nonce: a
    }
  )));
}
function rs(e, t, r, n, a) {
  let o = as(
    e,
    (i) => {
      let s = t.routes[i.route.id];
      le(s, "Route not found in manifest");
      let l = r[i.route.id];
      return {
        hasLoader: s.hasLoader,
        hasClientLoader: s.hasClientLoader,
        hasShouldRevalidate: !!(l != null && l.shouldRevalidate)
      };
    },
    cs,
    n,
    a
  );
  return async (i) => i.unstable_runClientMiddleware(o);
}
function as(e, t, r, n, a) {
  return async (o) => {
    let { request: i, matches: s, fetcherKey: l } = o, u = e();
    if (i.method !== "GET")
      return ns(o, r, a);
    let d = s.some((p) => {
      let { hasLoader: f, hasClientLoader: h } = t(p);
      return p.unstable_shouldCallHandler() && f && !h;
    });
    return !n && !d ? os(o, t, r, a) : l ? ss(o, r, a) : is(
      o,
      u,
      t,
      r,
      n,
      a
    );
  };
}
async function ns(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  le(n, "No action match found");
  let a, o = await n.resolve(async (i) => await i(async () => {
    let { data: l, status: u } = await t(e, r, [
      n.route.id
    ]);
    return a = u, Pt(l, n.route.id);
  }));
  return Q(o.result) || ae(o.result) || Qt(o.result) ? { [n.route.id]: o } : {
    [n.route.id]: {
      type: o.type,
      result: Ni(o.result, a)
    }
  };
}
async function os(e, t, r, n) {
  let a = e.matches.filter(
    (i) => i.unstable_shouldCallHandler()
  ), o = {};
  return await Promise.all(
    a.map(
      (i) => i.resolve(async (s) => {
        try {
          let { hasClientLoader: l } = t(i), u = i.route.id, d = l ? await s(async () => {
            let { data: p } = await r(e, n, [u]);
            return Pt(p, u);
          }) : await s();
          o[i.route.id] = { type: "data", result: d };
        } catch (l) {
          o[i.route.id] = { type: "error", result: l };
        }
      })
    )
  ), o;
}
async function is(e, t, r, n, a, o) {
  let i = /* @__PURE__ */ new Set(), s = !1, l = e.matches.map(() => tn()), u = tn(), d = {}, p = Promise.all(
    e.matches.map(
      async (h, m) => h.resolve(async (g) => {
        l[m].resolve();
        let E = h.route.id, { hasLoader: w, hasClientLoader: C, hasShouldRevalidate: x } = r(h), L = !h.unstable_shouldRevalidateArgs || h.unstable_shouldRevalidateArgs.actionStatus == null || h.unstable_shouldRevalidateArgs.actionStatus < 400;
        if (!h.unstable_shouldCallHandler(L)) {
          s || (s = h.unstable_shouldRevalidateArgs != null && // This is a revalidation,
          w && // for a route with a server loader,
          x === !0);
          return;
        }
        if (C) {
          w && (s = !0);
          try {
            let v = await g(async () => {
              let { data: D } = await n(e, o, [E]);
              return Pt(D, E);
            });
            d[E] = { type: "data", result: v };
          } catch (v) {
            d[E] = { type: "error", result: v };
          }
          return;
        }
        w && i.add(E);
        try {
          let v = await g(async () => {
            let D = await u.promise;
            return Pt(D, E);
          });
          d[E] = { type: "data", result: v };
        } catch (v) {
          d[E] = { type: "error", result: v };
        }
      })
    )
  );
  if (await Promise.all(l.map((h) => h.promise)), (!t.state.initialized && t.state.navigation.state === "idle" || i.size === 0) && !window.__reactRouterHdrActive)
    u.resolve({ routes: {} });
  else {
    let h = a && s && i.size > 0 ? [...i.keys()] : void 0;
    try {
      let m = await n(e, o, h);
      u.resolve(m.data);
    } catch (m) {
      u.reject(m);
    }
  }
  return await p, await ls(
    u.promise,
    e.matches,
    i,
    d
  ), d;
}
async function ls(e, t, r, n) {
  try {
    let a, o = await e;
    if ("routes" in o) {
      for (let i of t)
        if (i.route.id in o.routes) {
          let s = o.routes[i.route.id];
          if ("error" in s) {
            a = s.error;
            break;
          }
        }
    }
    a !== void 0 && Array.from(r.values()).forEach((i) => {
      n[i].result instanceof lo && (n[i].result = a);
    });
  } catch {
  }
}
async function ss(e, t, r) {
  let n = e.matches.find((i) => i.unstable_shouldCallHandler());
  le(n, "No fetcher match found");
  let a = n.route.id, o = await n.resolve(
    async (i) => i(async () => {
      let { data: s } = await t(e, r, [a]);
      return Pt(s, a);
    })
  );
  return { [n.route.id]: o };
}
function us(e) {
  let t = e.searchParams.getAll("index");
  e.searchParams.delete("index");
  let r = [];
  for (let n of t)
    n && r.push(n);
  for (let n of r)
    e.searchParams.append("index", n);
  return e;
}
function co(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && ne(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
async function cs(e, t, r) {
  let { request: n } = e, a = co(n.url, t);
  n.method === "GET" && (a = us(a), r && a.searchParams.set("_routes", r.join(",")));
  let o = await fetch(a, await ts(n));
  if (o.status === 404 && !o.headers.has("X-Remix-Response"))
    throw new Ce(404, "Not Found", !0);
  if (o.status === 204 && o.headers.has("X-Remix-Redirect"))
    return {
      status: ut,
      data: {
        redirect: {
          redirect: o.headers.get("X-Remix-Redirect"),
          status: Number(o.headers.get("X-Remix-Status") || "302"),
          revalidate: o.headers.get("X-Remix-Revalidate") === "true",
          reload: o.headers.get("X-Remix-Reload-Document") === "true",
          replace: o.headers.get("X-Remix-Replace") === "true"
        }
      }
    };
  if (so.has(o.status)) {
    let i = {};
    return r && n.method !== "GET" && (i[r[0]] = { data: void 0 }), {
      status: o.status,
      data: { routes: i }
    };
  }
  le(o.body, "No response body to decode");
  try {
    let i = await ca(o.body, window), s;
    if (n.method === "GET") {
      let l = i.value;
      Te in l ? s = { redirect: l[Te] } : s = { routes: l };
    } else {
      let l = i.value, u = r == null ? void 0 : r[0];
      le(u, "No routeId found for single fetch call decoding"), "redirect" in l ? s = { redirect: l } : s = { routes: { [u]: l } };
    }
    return { status: o.status, data: s };
  } catch {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function ca(e, t) {
  return Ql(e, {
    plugins: [
      (r, ...n) => {
        if (r === "SanitizedError") {
          let [a, o, i] = n, s = Error;
          a && a in t && typeof t[a] == "function" && (s = t[a]);
          let l = new s(o);
          return l.stack = i, { value: l };
        }
        if (r === "ErrorResponse") {
          let [a, o, i] = n;
          return {
            value: new Ce(o, i, a)
          };
        }
        if (r === "SingleFetchRedirect")
          return { value: { [Te]: n[0] } };
        if (r === "SingleFetchClassInstance")
          return { value: n[0] };
        if (r === "SingleFetchFallback")
          return { value: void 0 };
      }
    ]
  });
}
function Pt(e, t) {
  if ("redirect" in e) {
    let {
      redirect: n,
      revalidate: a,
      reload: o,
      replace: i,
      status: s
    } = e.redirect;
    throw ir(n, {
      status: s,
      headers: {
        // Three R's of redirecting (lol Veep)
        ...a ? { "X-Remix-Revalidate": "yes" } : null,
        ...o ? { "X-Remix-Reload-Document": "yes" } : null,
        ...i ? { "X-Remix-Replace": "yes" } : null
      }
    });
  }
  let r = e.routes[t];
  if (r == null)
    throw new lo(
      `No result found for routeId "${t}"`
    );
  if ("error" in r)
    throw r.error;
  if ("data" in r)
    return r.data;
  throw new Error(`Invalid response found for routeId "${t}"`);
}
function tn() {
  let e, t, r = new Promise((n, a) => {
    e = async (o) => {
      n(o);
      try {
        await r;
      } catch {
      }
    }, t = async (o) => {
      a(o);
      try {
        await r;
      } catch {
      }
    };
  });
  return {
    promise: r,
    //@ts-ignore
    resolve: e,
    //@ts-ignore
    reject: t
  };
}
var fo = class extends c.Component {
  constructor(e) {
    super(e), this.state = { error: e.error || null, location: e.location };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location ? { error: e.error || null, location: e.location } : { error: e.error || t.error, location: t.location };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ c.createElement(
      ho,
      {
        error: this.state.error,
        isOutsideRemixApp: !0
      }
    ) : this.props.children;
  }
};
function ho({
  error: e,
  isOutsideRemixApp: t
}) {
  console.error(e);
  let r = /* @__PURE__ */ c.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."
        );
      `
      }
    }
  );
  if (ae(e))
    return /* @__PURE__ */ c.createElement(zr, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ c.createElement("h1", { style: { fontSize: "24px" } }, e.status, " ", e.statusText), r);
  let n;
  if (e instanceof Error)
    n = e;
  else {
    let a = e == null ? "Unknown Error" : typeof e == "object" && "toString" in e ? e.toString() : JSON.stringify(e);
    n = new Error(a);
  }
  return /* @__PURE__ */ c.createElement(
    zr,
    {
      title: "Application Error!",
      isOutsideRemixApp: t
    },
    /* @__PURE__ */ c.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    /* @__PURE__ */ c.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      },
      n.stack
    ),
    r
  );
}
function zr({
  title: e,
  renderScripts: t,
  isOutsideRemixApp: r,
  children: n
}) {
  var o;
  let { routeModules: a } = ft();
  return (o = a.root) != null && o.Layout && !r ? n : /* @__PURE__ */ c.createElement("html", { lang: "en" }, /* @__PURE__ */ c.createElement("head", null, /* @__PURE__ */ c.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ c.createElement(
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }
  ), /* @__PURE__ */ c.createElement("title", null, e)), /* @__PURE__ */ c.createElement("body", null, /* @__PURE__ */ c.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, n, t ? /* @__PURE__ */ c.createElement(Ps, null) : null)));
}
function ds() {
  return /* @__PURE__ */ c.createElement(zr, { title: "Loading...", renderScripts: !0 }, /* @__PURE__ */ c.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://reactrouter.com/start/framework/route-module#hydratefallback " +
                "for more information."
              );
            `
      }
    }
  ));
}
function da(e) {
  let t = {};
  return Object.values(e).forEach((r) => {
    if (r) {
      let n = r.parentId || "";
      t[n] || (t[n] = []), t[n].push(r);
    }
  }), t;
}
function mo(e, t, r) {
  let n = yo(t), a = t.HydrateFallback && (!r || e.id === "root") ? t.HydrateFallback : e.id === "root" ? ds : void 0, o = t.ErrorBoundary ? t.ErrorBoundary : e.id === "root" ? () => /* @__PURE__ */ c.createElement(ho, { error: ia() }) : void 0;
  return e.id === "root" && t.Layout ? {
    ...n ? {
      element: /* @__PURE__ */ c.createElement(t.Layout, null, /* @__PURE__ */ c.createElement(n, null))
    } : { Component: n },
    ...o ? {
      errorElement: /* @__PURE__ */ c.createElement(t.Layout, null, /* @__PURE__ */ c.createElement(o, null))
    } : { ErrorBoundary: o },
    ...a ? {
      hydrateFallbackElement: /* @__PURE__ */ c.createElement(t.Layout, null, /* @__PURE__ */ c.createElement(a, null))
    } : { HydrateFallback: a }
  } : { Component: n, ErrorBoundary: o, HydrateFallback: a };
}
function po(e, t, r, n, a = "", o = da(e), i = Promise.resolve({ Component: () => null })) {
  return (o[a] || []).map((s) => {
    let l = t[s.id];
    le(
      l,
      "No `routeModule` available to create server routes"
    );
    let u = {
      ...mo(s, l, n),
      caseSensitive: s.caseSensitive,
      id: s.id,
      index: s.index,
      path: s.path,
      handle: l.handle,
      // For SPA Mode, all routes are lazy except root.  However we tell the
      // router root is also lazy here too since we don't need a full
      // implementation - we just need a `lazy` prop to tell the RR rendering
      // where to stop which is always at the root route in SPA mode
      lazy: n ? () => i : void 0,
      // For partial hydration rendering, we need to indicate when the route
      // has a loader/clientLoader, but it won't ever be called during the static
      // render, so just give it a no-op function so we can render down to the
      // proper fallback
      loader: s.hasLoader || s.hasClientLoader ? () => null : void 0
      // We don't need middleware/action/shouldRevalidate on these routes since
      // they're for a static render
    }, d = po(
      e,
      t,
      r,
      n,
      s.id,
      o,
      i
    );
    return d.length > 0 && (u.children = d), u;
  });
}
function fs(e, t, r, n, a, o) {
  return mr(
    t,
    r,
    n,
    a,
    o,
    "",
    da(t),
    e
  );
}
function It(e, t) {
  if (e === "loader" && !t.hasLoader || e === "action" && !t.hasAction) {
    let n = `You are trying to call ${e === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    throw console.error(n), new Ce(400, "Bad Request", new Error(n), !0);
  }
}
function Dr(e, t) {
  let r = e === "clientAction" ? "a" : "an", n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
  throw console.error(n), new Ce(405, "Method Not Allowed", new Error(n), !0);
}
function mr(e, t, r, n, a, o = "", i = da(e), s) {
  return (i[o] || []).map((l) => {
    var C, x, L;
    let u = t[l.id];
    function d(R) {
      return le(
        typeof R == "function",
        "No single fetch function available for route handler"
      ), R();
    }
    function p(R) {
      return l.hasLoader ? d(R) : Promise.resolve(null);
    }
    function f(R) {
      if (!l.hasAction)
        throw Dr("action", l.id);
      return d(R);
    }
    function h(R) {
      import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        R
      );
    }
    function m(R) {
      R.clientActionModule && h(R.clientActionModule), R.clientLoaderModule && h(R.clientLoaderModule);
    }
    async function g(R) {
      let v = t[l.id], D = v ? Vn(l, v) : Promise.resolve();
      try {
        return R();
      } finally {
        await D;
      }
    }
    let E = {
      id: l.id,
      index: l.index,
      path: l.path
    };
    if (u) {
      Object.assign(E, {
        ...E,
        ...mo(l, u, a),
        unstable_middleware: u.unstable_clientMiddleware,
        handle: u.handle,
        shouldRevalidate: rn(
          E.path,
          u,
          l,
          n,
          s
        )
      });
      let R = r && r.loaderData && l.id in r.loaderData, v = R ? (C = r == null ? void 0 : r.loaderData) == null ? void 0 : C[l.id] : void 0, D = r && r.errors && l.id in r.errors, P = D ? (x = r == null ? void 0 : r.errors) == null ? void 0 : x[l.id] : void 0, T = s == null && (((L = u.clientLoader) == null ? void 0 : L.hydrate) === !0 || !l.hasLoader);
      E.loader = async ({ request: I, params: B, context: oe }, ee) => {
        try {
          return await g(async () => (le(
            u,
            "No `routeModule` available for critical-route loader"
          ), u.clientLoader ? u.clientLoader({
            request: I,
            params: B,
            context: oe,
            async serverLoader() {
              if (It("loader", l), T) {
                if (R)
                  return v;
                if (D)
                  throw P;
              }
              return p(ee);
            }
          }) : p(ee)));
        } finally {
          T = !1;
        }
      }, E.loader.hydrate = fa(
        l.id,
        u.clientLoader,
        l.hasLoader,
        a
      ), E.action = ({ request: I, params: B, context: oe }, ee) => g(async () => {
        if (le(
          u,
          "No `routeModule` available for critical-route action"
        ), !u.clientAction) {
          if (a)
            throw Dr("clientAction", l.id);
          return f(ee);
        }
        return u.clientAction({
          request: I,
          params: B,
          context: oe,
          async serverAction() {
            return It("action", l), f(ee);
          }
        });
      });
    } else {
      l.hasClientLoader || (E.loader = (D, P) => g(() => p(P))), l.hasClientAction || (E.action = (D, P) => g(() => {
        if (a)
          throw Dr("clientAction", l.id);
        return f(P);
      }));
      let R;
      async function v() {
        return R ? await R : (R = (async () => {
          (l.clientLoaderModule || l.clientActionModule) && await new Promise((P) => setTimeout(P, 0));
          let D = ms(
            l,
            t
          );
          return m(l), await D;
        })(), await R);
      }
      E.lazy = {
        loader: l.hasClientLoader ? async () => {
          let { clientLoader: D } = l.clientLoaderModule ? await import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            l.clientLoaderModule
          ) : await v();
          return le(D, "No `clientLoader` export found"), (P, T) => D({
            ...P,
            async serverLoader() {
              return It("loader", l), p(T);
            }
          });
        } : void 0,
        action: l.hasClientAction ? async () => {
          let D = l.clientActionModule ? import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            l.clientActionModule
          ) : v();
          m(l);
          let { clientAction: P } = await D;
          return le(P, "No `clientAction` export found"), (T, I) => P({
            ...T,
            async serverAction() {
              return It("action", l), f(I);
            }
          });
        } : void 0,
        unstable_middleware: l.hasClientMiddleware ? async () => {
          let { unstable_clientMiddleware: D } = l.clientMiddlewareModule ? await import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            l.clientMiddlewareModule
          ) : await v();
          return le(
            D,
            "No `unstable_clientMiddleware` export found"
          ), D;
        } : void 0,
        shouldRevalidate: async () => {
          let D = await v();
          return rn(
            E.path,
            D,
            l,
            n,
            s
          );
        },
        handle: async () => (await v()).handle,
        // No need to wrap these in layout since the root route is never
        // loaded via route.lazy()
        Component: async () => (await v()).Component,
        ErrorBoundary: l.hasErrorBoundary ? async () => (await v()).ErrorBoundary : void 0
      };
    }
    let w = mr(
      e,
      t,
      r,
      n,
      a,
      l.id,
      i,
      s
    );
    return w.length > 0 && (E.children = w), E;
  });
}
function rn(e, t, r, n, a) {
  if (a)
    return hs(
      r.id,
      t.shouldRevalidate,
      a
    );
  if (!n && r.hasLoader && !r.hasClientLoader) {
    let o = e ? gn(e)[1].map((s) => s.paramName) : [];
    const i = (s) => o.some((l) => s.currentParams[l] !== s.nextParams[l]);
    if (t.shouldRevalidate) {
      let s = t.shouldRevalidate;
      return (l) => s({
        ...l,
        defaultShouldRevalidate: i(l)
      });
    } else
      return (s) => i(s);
  }
  if (n && t.shouldRevalidate) {
    let o = t.shouldRevalidate;
    return (i) => o({ ...i, defaultShouldRevalidate: !0 });
  }
  return t.shouldRevalidate;
}
function hs(e, t, r) {
  let n = !1;
  return (a) => n ? t ? t(a) : a.defaultShouldRevalidate : (n = !0, r.has(e));
}
async function ms(e, t) {
  let r = Bn(e, t), n = Hl(e), a = await r;
  return await Promise.all([
    n,
    Vn(e, a)
  ]), {
    Component: yo(a),
    ErrorBoundary: a.ErrorBoundary,
    unstable_clientMiddleware: a.unstable_clientMiddleware,
    clientAction: a.clientAction,
    clientLoader: a.clientLoader,
    handle: a.handle,
    links: a.links,
    meta: a.meta,
    shouldRevalidate: a.shouldRevalidate
  };
}
function yo(e) {
  if (e.default == null) return;
  if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
    return e.default;
}
function fa(e, t, r, n) {
  return n && e !== "root" || t != null && (t.hydrate === !0 || r !== !0);
}
var Vt = /* @__PURE__ */ new Set(), ps = 1e3, er = /* @__PURE__ */ new Set(), ys = 7680;
function ha(e, t) {
  return e.mode === "lazy" && t === !0;
}
function vs({ sri: e, ...t }, r) {
  let n = new Set(r.state.matches.map((s) => s.route.id)), a = r.state.location.pathname.split("/").filter(Boolean), o = ["/"];
  for (a.pop(); a.length > 0; )
    o.push(`/${a.join("/")}`), a.pop();
  o.forEach((s) => {
    let l = ve(r.routes, s, r.basename);
    l && l.forEach((u) => n.add(u.route.id));
  });
  let i = [...n].reduce(
    (s, l) => Object.assign(s, { [l]: t.routes[l] }),
    {}
  );
  return {
    ...t,
    routes: i,
    sri: e ? !0 : void 0
  };
}
function gs(e, t, r, n, a, o) {
  if (ha(n, r))
    return async ({ path: i, patch: s, signal: l, fetcherKey: u }) => {
      er.has(i) || await go(
        [i],
        u ? window.location.href : i,
        e,
        t,
        r,
        a,
        o,
        n.manifestPath,
        s,
        l
      );
    };
}
function ws(e, t, r, n, a, o) {
  c.useEffect(() => {
    var d, p;
    if (!ha(a, n) || // @ts-expect-error - TS doesn't know about this yet
    ((p = (d = window.navigator) == null ? void 0 : d.connection) == null ? void 0 : p.saveData) === !0)
      return;
    function i(f) {
      let h = f.tagName === "FORM" ? f.getAttribute("action") : f.getAttribute("href");
      if (!h)
        return;
      let m = f.tagName === "A" ? f.pathname : new URL(h, window.location.origin).pathname;
      er.has(m) || Vt.add(m);
    }
    async function s() {
      document.querySelectorAll("a[data-discover], form[data-discover]").forEach(i);
      let f = Array.from(Vt.keys()).filter((h) => er.has(h) ? (Vt.delete(h), !1) : !0);
      if (f.length !== 0)
        try {
          await go(
            f,
            null,
            t,
            r,
            n,
            o,
            e.basename,
            a.manifestPath,
            e.patchRoutes
          );
        } catch (h) {
          console.error("Failed to fetch manifest patches", h);
        }
    }
    let l = bs(s, 100);
    s();
    let u = new MutationObserver(() => l());
    return u.observe(document.documentElement, {
      subtree: !0,
      childList: !0,
      attributes: !0,
      attributeFilter: ["data-discover", "href", "action"]
    }), () => u.disconnect();
  }, [n, o, t, r, e, a]);
}
function vo(e, t) {
  let r = e || "/__manifest";
  return t == null ? r : `${t}${r}`.replace(/\/+/g, "/");
}
var _r = "react-router-manifest-version";
async function go(e, t, r, n, a, o, i, s, l, u) {
  let d = new URL(
    vo(s, i),
    window.location.origin
  );
  if (e.sort().forEach((g) => d.searchParams.append("p", g)), d.searchParams.set("version", r.version), d.toString().length > ys) {
    Vt.clear();
    return;
  }
  let p;
  try {
    let g = await fetch(d, { signal: u });
    if (g.ok) {
      if (g.status === 204 && g.headers.has("X-Remix-Reload-Document")) {
        if (!t) {
          console.warn(
            "Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest."
          );
          return;
        }
        if (sessionStorage.getItem(_r) === r.version) {
          console.error(
            "Unable to discover routes due to manifest version mismatch."
          );
          return;
        }
        sessionStorage.setItem(_r, r.version), window.location.href = t, console.warn("Detected manifest version mismatch, reloading..."), await new Promise(() => {
        });
      } else if (g.status >= 400)
        throw new Error(await g.text());
    } else throw new Error(`${g.status} ${g.statusText}`);
    sessionStorage.removeItem(_r), p = await g.json();
  } catch (g) {
    if (u != null && u.aborted) return;
    throw g;
  }
  let f = new Set(Object.keys(r.routes)), h = Object.values(p).reduce((g, E) => (E && !f.has(E.id) && (g[E.id] = E), g), {});
  Object.assign(r.routes, h), e.forEach((g) => Es(g, er));
  let m = /* @__PURE__ */ new Set();
  Object.values(h).forEach((g) => {
    g && (!g.parentId || !h[g.parentId]) && m.add(g.parentId);
  }), m.forEach(
    (g) => l(
      g || null,
      mr(h, n, null, a, o, g)
    )
  );
}
function Es(e, t) {
  if (t.size >= ps) {
    let r = t.values().next().value;
    t.delete(r);
  }
  t.add(e);
}
function bs(e, t) {
  let r;
  return (...n) => {
    window.clearTimeout(r), r = window.setTimeout(() => e(...n), t);
  };
}
function ma() {
  let e = c.useContext(Ue);
  return le(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function pr() {
  let e = c.useContext(qe);
  return le(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var rt = c.createContext(void 0);
rt.displayName = "FrameworkContext";
function ft() {
  let e = c.useContext(rt);
  return le(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function Rs(e, t) {
  let r = c.useContext(rt), [n, a] = c.useState(!1), [o, i] = c.useState(!1), { onFocus: s, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: p } = t, f = c.useRef(null);
  c.useEffect(() => {
    if (e === "render" && i(!0), e === "viewport") {
      let g = (w) => {
        w.forEach((C) => {
          i(C.isIntersecting);
        });
      }, E = new IntersectionObserver(g, { threshold: 0.5 });
      return f.current && E.observe(f.current), () => {
        E.disconnect();
      };
    }
  }, [e]), c.useEffect(() => {
    if (n) {
      let g = setTimeout(() => {
        i(!0);
      }, 100);
      return () => {
        clearTimeout(g);
      };
    }
  }, [n]);
  let h = () => {
    a(!0);
  }, m = () => {
    a(!1), i(!1);
  };
  return r ? e !== "intent" ? [o, f, {}] : [
    o,
    f,
    {
      onFocus: Et(s, h),
      onBlur: Et(l, m),
      onMouseEnter: Et(u, h),
      onMouseLeave: Et(d, m),
      onTouchStart: Et(p, h)
    }
  ] : [!1, f, {}];
}
function Et(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function pa(e, t, r) {
  if (r && !Jt)
    return [e[0]];
  if (t) {
    let n = e.findIndex((a) => t[a.route.id] !== void 0);
    return e.slice(0, n + 1);
  }
  return e;
}
function ju() {
  let { isSpaMode: e, manifest: t, routeModules: r, criticalCss: n } = ft(), { errors: a, matches: o } = pr(), i = pa(o, a, e), s = c.useMemo(
    () => $l(i, r, t),
    [i, r, t]
  );
  return /* @__PURE__ */ c.createElement(c.Fragment, null, typeof n == "string" ? /* @__PURE__ */ c.createElement("style", { dangerouslySetInnerHTML: { __html: n } }) : null, typeof n == "object" ? /* @__PURE__ */ c.createElement("link", { rel: "stylesheet", href: n.href }) : null, s.map(
    ({ key: l, link: u }) => la(u) ? /* @__PURE__ */ c.createElement(wo, { key: l, ...u }) : /* @__PURE__ */ c.createElement("link", { key: l, ...u })
  ));
}
function wo({
  page: e,
  ...t
}) {
  let { router: r } = ma(), n = c.useMemo(
    () => ve(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return n ? /* @__PURE__ */ c.createElement(Cs, { page: e, matches: n, ...t }) : null;
}
function Ss(e) {
  let { manifest: t, routeModules: r } = ft(), [n, a] = c.useState([]);
  return c.useEffect(() => {
    let o = !1;
    return jl(e, t, r).then(
      (i) => {
        o || a(i);
      }
    ), () => {
      o = !0;
    };
  }, [e, t, r]), n;
}
function Cs({
  page: e,
  matches: t,
  ...r
}) {
  let n = Ee(), { manifest: a, routeModules: o } = ft(), { basename: i } = ma(), { loaderData: s, matches: l } = pr(), u = c.useMemo(
    () => Za(
      e,
      t,
      l,
      a,
      n,
      "data"
    ),
    [e, t, l, a, n]
  ), d = c.useMemo(
    () => Za(
      e,
      t,
      l,
      a,
      n,
      "assets"
    ),
    [e, t, l, a, n]
  ), p = c.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let m = /* @__PURE__ */ new Set(), g = !1;
    if (t.forEach((w) => {
      var x;
      let C = a.routes[w.route.id];
      !C || !C.hasLoader || (!u.some((L) => L.route.id === w.route.id) && w.route.id in s && ((x = o[w.route.id]) != null && x.shouldRevalidate) || C.hasClientLoader ? g = !0 : m.add(w.route.id));
    }), m.size === 0)
      return [];
    let E = co(e, i);
    return g && m.size > 0 && E.searchParams.set(
      "_routes",
      t.filter((w) => m.has(w.route.id)).map((w) => w.route.id).join(",")
    ), [E.pathname + E.search];
  }, [
    i,
    s,
    n,
    a,
    u,
    t,
    e,
    o
  ]), f = c.useMemo(
    () => sa(d, a),
    [d, a]
  ), h = Ss(d);
  return /* @__PURE__ */ c.createElement(c.Fragment, null, p.map((m) => /* @__PURE__ */ c.createElement("link", { key: m, rel: "prefetch", as: "fetch", href: m, ...r })), f.map((m) => /* @__PURE__ */ c.createElement("link", { key: m, rel: "modulepreload", href: m, ...r })), h.map(({ key: m, link: g }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ c.createElement("link", { key: m, ...g })
  )));
}
function Uu() {
  let { isSpaMode: e, routeModules: t } = ft(), {
    errors: r,
    matches: n,
    loaderData: a
  } = pr(), o = Ee(), i = pa(n, r, e), s = null;
  r && (s = r[i[i.length - 1].route.id]);
  let l = [], u = null, d = [];
  for (let p = 0; p < i.length; p++) {
    let f = i[p], h = f.route.id, m = a[h], g = f.params, E = t[h], w = [], C = {
      id: h,
      data: m,
      meta: [],
      params: f.params,
      pathname: f.pathname,
      handle: f.route.handle,
      error: s
    };
    if (d[p] = C, E != null && E.meta ? w = typeof E.meta == "function" ? E.meta({
      data: m,
      params: g,
      location: o,
      matches: d,
      error: s
    }) : Array.isArray(E.meta) ? [...E.meta] : E.meta : u && (w = [...u]), w = w || [], !Array.isArray(w))
      throw new Error(
        "The route at " + f.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    C.meta = w, d[p] = C, l = [...w], u = l;
  }
  return /* @__PURE__ */ c.createElement(c.Fragment, null, l.flat().map((p) => {
    if (!p)
      return null;
    if ("tagName" in p) {
      let { tagName: f, ...h } = p;
      if (!xs(f))
        return console.warn(
          `A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`
        ), null;
      let m = f;
      return /* @__PURE__ */ c.createElement(m, { key: JSON.stringify(h), ...h });
    }
    if ("title" in p)
      return /* @__PURE__ */ c.createElement("title", { key: "title" }, String(p.title));
    if ("charset" in p && (p.charSet ?? (p.charSet = p.charset), delete p.charset), "charSet" in p && p.charSet != null)
      return typeof p.charSet == "string" ? /* @__PURE__ */ c.createElement("meta", { key: "charSet", charSet: p.charSet }) : null;
    if ("script:ld+json" in p)
      try {
        let f = JSON.stringify(p["script:ld+json"]);
        return /* @__PURE__ */ c.createElement(
          "script",
          {
            key: `script:ld+json:${f}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: f }
          }
        );
      } catch {
        return null;
      }
    return /* @__PURE__ */ c.createElement("meta", { key: JSON.stringify(p), ...p });
  }));
}
function xs(e) {
  return typeof e == "string" && /^(meta|link)$/.test(e);
}
var Jt = !1;
function Ps(e) {
  let {
    manifest: t,
    serverHandoffString: r,
    isSpaMode: n,
    renderMeta: a,
    routeDiscovery: o,
    ssr: i
  } = ft(), { router: s, static: l, staticContext: u } = ma(), { matches: d } = pr(), p = ha(o, i);
  a && (a.didRenderScripts = !0);
  let f = pa(d, null, n);
  c.useEffect(() => {
    Jt = !0;
  }, []);
  let h = c.useMemo(() => {
    var x;
    let w = u ? `window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());` : " ", C = l ? `${(x = t.hmr) != null && x.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${p ? "" : `import ${JSON.stringify(t.url)}`};
${f.map((L, R) => {
      let v = `route${R}`, D = t.routes[L.route.id];
      le(D, `Route ${L.route.id} not found in manifest`);
      let {
        clientActionModule: P,
        clientLoaderModule: T,
        clientMiddlewareModule: I,
        hydrateFallbackModule: B,
        module: oe
      } = D, ee = [
        ...P ? [
          {
            module: P,
            varName: `${v}_clientAction`
          }
        ] : [],
        ...T ? [
          {
            module: T,
            varName: `${v}_clientLoader`
          }
        ] : [],
        ...I ? [
          {
            module: I,
            varName: `${v}_clientMiddleware`
          }
        ] : [],
        ...B ? [
          {
            module: B,
            varName: `${v}_HydrateFallback`
          }
        ] : [],
        { module: oe, varName: `${v}_main` }
      ];
      if (ee.length === 1)
        return `import * as ${v} from ${JSON.stringify(oe)};`;
      let W = ee.map((J) => `import * as ${J.varName} from "${J.module}";`).join(`
`), G = `const ${v} = {${ee.map((J) => `...${J.varName}`).join(",")}};`;
      return [W, G].join(`
`);
    }).join(`
`)}
  ${p ? (
      // Inline a minimal manifest with the SSR matches
      `window.__reactRouterManifest = ${JSON.stringify(
        vs(t, s),
        null,
        2
      )};`
    ) : ""}
  window.__reactRouterRouteModules = {${f.map((L, R) => `${JSON.stringify(L.route.id)}:route${R}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
    return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
      "script",
      {
        ...e,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: qa(w),
        type: void 0
      }
    ), /* @__PURE__ */ c.createElement(
      "script",
      {
        ...e,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: qa(C),
        type: "module",
        async: !0
      }
    ));
  }, []), m = Jt ? [] : Ls(
    t.entry.imports.concat(
      sa(f, t, {
        includeHydrateFallback: !0
      })
    )
  ), g = typeof t.sri == "object" ? t.sri : {};
  return Jt ? null : /* @__PURE__ */ c.createElement(c.Fragment, null, typeof t.sri == "object" ? /* @__PURE__ */ c.createElement(
    "script",
    {
      "rr-importmap": "",
      type: "importmap",
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          integrity: g
        })
      }
    }
  ) : null, p ? null : /* @__PURE__ */ c.createElement(
    "link",
    {
      rel: "modulepreload",
      href: t.url,
      crossOrigin: e.crossOrigin,
      integrity: g[t.url],
      suppressHydrationWarning: !0
    }
  ), /* @__PURE__ */ c.createElement(
    "link",
    {
      rel: "modulepreload",
      href: t.entry.module,
      crossOrigin: e.crossOrigin,
      integrity: g[t.entry.module],
      suppressHydrationWarning: !0
    }
  ), m.map((E) => /* @__PURE__ */ c.createElement(
    "link",
    {
      key: E,
      rel: "modulepreload",
      href: E,
      crossOrigin: e.crossOrigin,
      integrity: g[E],
      suppressHydrationWarning: !0
    }
  )), h);
}
function Ls(e) {
  return [...new Set(e)];
}
function Ds(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var Eo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Eo && (window.__reactRouterVersion = "7.6.2");
} catch {
}
function zu(e, t) {
  return lr({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: Jr({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || bo(),
    routes: e,
    mapRouteProperties: dt,
    hydrationRouteProperties: fr,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function Bu(e, t) {
  return lr({
    basename: t == null ? void 0 : t.basename,
    unstable_getContext: t == null ? void 0 : t.unstable_getContext,
    future: t == null ? void 0 : t.future,
    history: fn({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || bo(),
    routes: e,
    mapRouteProperties: dt,
    hydrationRouteProperties: fr,
    dataStrategy: t == null ? void 0 : t.dataStrategy,
    patchRoutesOnNavigation: t == null ? void 0 : t.patchRoutesOnNavigation,
    window: t == null ? void 0 : t.window
  }).initialize();
}
function bo() {
  let e = window == null ? void 0 : window.__staticRouterHydrationData;
  return e && e.errors && (e = {
    ...e,
    errors: _s(e.errors)
  }), e;
}
function _s(e) {
  if (!e) return null;
  let t = Object.entries(e), r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Ce(
        a.status,
        a.statusText,
        a.data,
        a.internal === !0
      );
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let o = window[a.__subType];
        if (typeof o == "function")
          try {
            let i = new o(a.message);
            i.stack = "", r[n] = i;
          } catch {
          }
      }
      if (r[n] == null) {
        let o = new Error(a.message);
        o.stack = "", r[n] = o;
      }
    } else
      r[n] = a;
  return r;
}
function Wu({
  basename: e,
  children: t,
  window: r
}) {
  let n = c.useRef();
  n.current == null && (n.current = Jr({ window: r, v5Compat: !0 }));
  let a = n.current, [o, i] = c.useState({
    action: a.action,
    location: a.location
  }), s = c.useCallback(
    (l) => {
      c.startTransition(() => i(l));
    },
    [i]
  );
  return c.useLayoutEffect(() => a.listen(s), [a, s]), /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a
    }
  );
}
function Vu({ basename: e, children: t, window: r }) {
  let n = c.useRef();
  n.current == null && (n.current = fn({ window: r, v5Compat: !0 }));
  let a = n.current, [o, i] = c.useState({
    action: a.action,
    location: a.location
  }), s = c.useCallback(
    (l) => {
      c.startTransition(() => i(l));
    },
    [i]
  );
  return c.useLayoutEffect(() => a.listen(s), [a, s]), /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a
    }
  );
}
function Ts({
  basename: e,
  children: t,
  history: r
}) {
  let [n, a] = c.useState({
    action: r.action,
    location: r.location
  }), o = c.useCallback(
    (i) => {
      c.startTransition(() => a(i));
    },
    [a]
  );
  return c.useLayoutEffect(() => r.listen(o), [r, o]), /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: e,
      children: t,
      location: n.location,
      navigationType: n.action,
      navigator: r
    }
  );
}
Ts.displayName = "unstable_HistoryRouter";
var Ro = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, So = c.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: n = "none",
    relative: a,
    reloadDocument: o,
    replace: i,
    state: s,
    target: l,
    to: u,
    preventScrollReset: d,
    viewTransition: p,
    ...f
  }, h) {
    let { basename: m } = c.useContext(ge), g = typeof u == "string" && Ro.test(u), E, w = !1;
    if (typeof u == "string" && g && (E = u, Eo))
      try {
        let T = new URL(window.location.href), I = u.startsWith("//") ? new URL(T.protocol + u) : new URL(u), B = ne(I.pathname, m);
        I.origin === T.origin && B != null ? u = B + I.search + I.hash : w = !0;
      } catch {
        K(
          !1,
          `<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let C = rl(u, { relative: a }), [x, L, R] = Rs(
      n,
      f
    ), v = Fs(u, {
      replace: i,
      state: s,
      target: l,
      preventScrollReset: d,
      relative: a,
      viewTransition: p
    });
    function D(T) {
      t && t(T), T.defaultPrevented || v(T);
    }
    let P = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ c.createElement(
        "a",
        {
          ...f,
          ...R,
          href: E || C,
          onClick: w || o ? t : D,
          ref: Ds(h, L),
          target: l,
          "data-discover": !g && r === "render" ? "true" : void 0
        }
      )
    );
    return x && !g ? /* @__PURE__ */ c.createElement(c.Fragment, null, P, /* @__PURE__ */ c.createElement(wo, { page: C })) : P;
  }
);
So.displayName = "Link";
var Ms = c.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: a = !1,
    style: o,
    to: i,
    viewTransition: s,
    children: l,
    ...u
  }, d) {
    let p = Dt(i, { relative: u.relative }), f = Ee(), h = c.useContext(qe), { navigator: m, basename: g } = c.useContext(ge), E = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Is(p) && s === !0, w = m.encodeLocation ? m.encodeLocation(p).pathname : p.pathname, C = f.pathname, x = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    r || (C = C.toLowerCase(), x = x ? x.toLowerCase() : null, w = w.toLowerCase()), x && g && (x = ne(x, g) || x);
    const L = w !== "/" && w.endsWith("/") ? w.length - 1 : w.length;
    let R = C === w || !a && C.startsWith(w) && C.charAt(L) === "/", v = x != null && (x === w || !a && x.startsWith(w) && x.charAt(w.length) === "/"), D = {
      isActive: R,
      isPending: v,
      isTransitioning: E
    }, P = R ? t : void 0, T;
    typeof n == "function" ? T = n(D) : T = [
      n,
      R ? "active" : null,
      v ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let I = typeof o == "function" ? o(D) : o;
    return /* @__PURE__ */ c.createElement(
      So,
      {
        ...u,
        "aria-current": P,
        className: T,
        ref: d,
        style: I,
        to: i,
        viewTransition: s
      },
      typeof l == "function" ? l(D) : l
    );
  }
);
Ms.displayName = "NavLink";
var Co = c.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: a,
    state: o,
    method: i = Bt,
    action: s,
    onSubmit: l,
    relative: u,
    preventScrollReset: d,
    viewTransition: p,
    ...f
  }, h) => {
    let m = Po(), g = As(s, { relative: u }), E = i.toLowerCase() === "get" ? "get" : "post", w = typeof s == "string" && Ro.test(s), C = (x) => {
      if (l && l(x), x.defaultPrevented) return;
      x.preventDefault();
      let L = x.nativeEvent.submitter, R = (L == null ? void 0 : L.getAttribute("formmethod")) || i;
      m(L || x.currentTarget, {
        fetcherKey: t,
        method: R,
        navigate: r,
        replace: a,
        state: o,
        relative: u,
        preventScrollReset: d,
        viewTransition: p
      });
    };
    return /* @__PURE__ */ c.createElement(
      "form",
      {
        ref: h,
        method: E,
        action: g,
        onSubmit: n ? l : C,
        ...f,
        "data-discover": !w && e === "render" ? "true" : void 0
      }
    );
  }
);
Co.displayName = "Form";
function Os({
  getKey: e,
  storageKey: t,
  ...r
}) {
  let n = c.useContext(rt), { basename: a } = c.useContext(ge), o = Ee(), i = aa();
  $s({ getKey: e, storageKey: t });
  let s = c.useMemo(
    () => {
      if (!n || !e) return null;
      let u = Wr(
        o,
        i,
        a,
        e
      );
      return u !== o.key ? u : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!n || n.isSpaMode)
    return null;
  let l = ((u, d) => {
    if (!window.history.state || !window.history.state.key) {
      let p = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: p }, "");
    }
    try {
      let f = JSON.parse(sessionStorage.getItem(u) || "{}")[d || window.history.state.key];
      typeof f == "number" && window.scrollTo(0, f);
    } catch (p) {
      console.error(p), sessionStorage.removeItem(u);
    }
  }).toString();
  return /* @__PURE__ */ c.createElement(
    "script",
    {
      ...r,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${l})(${JSON.stringify(
          t || Br
        )}, ${JSON.stringify(s)})`
      }
    }
  );
}
Os.displayName = "ScrollRestoration";
function xo(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yr(e) {
  let t = c.useContext(Ue);
  return k(t, xo(e)), t;
}
function ya(e) {
  let t = c.useContext(qe);
  return k(t, xo(e)), t;
}
function Fs(e, {
  target: t,
  replace: r,
  state: n,
  preventScrollReset: a,
  relative: o,
  viewTransition: i
} = {}) {
  let s = Zr(), l = Ee(), u = Dt(e, { relative: o });
  return c.useCallback(
    (d) => {
      if (Ol(d, t)) {
        d.preventDefault();
        let p = r !== void 0 ? r : me(l) === me(u);
        s(e, {
          replace: p,
          state: n,
          preventScrollReset: a,
          relative: o,
          viewTransition: i
        });
      }
    },
    [
      l,
      s,
      u,
      r,
      n,
      t,
      e,
      a,
      o,
      i
    ]
  );
}
function Ju(e) {
  K(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params."
  );
  let t = c.useRef($r(e)), r = c.useRef(!1), n = Ee(), a = c.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      Fl(
        n.search,
        r.current ? null : t.current
      )
    ),
    [n.search]
  ), o = Zr(), i = c.useCallback(
    (s, l) => {
      const u = $r(
        typeof s == "function" ? s(a) : s
      );
      r.current = !0, o("?" + u, l);
    },
    [o, a]
  );
  return [a, i];
}
var ks = 0, Ns = () => `__${String(++ks)}__`;
function Po() {
  let { router: e } = yr(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = c.useContext(ge), r = dl();
  return c.useCallback(
    async (n, a = {}) => {
      let { action: o, method: i, encType: s, formData: l, body: u } = Al(
        n,
        t
      );
      if (a.navigate === !1) {
        let d = a.fetcherKey || Ns();
        await e.fetch(d, r, a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || s,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || o, {
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || i,
          formEncType: a.encType || s,
          replace: a.replace,
          state: a.state,
          fromRouteId: r,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, t, r]
  );
}
function As(e, { relative: t } = {}) {
  let { basename: r } = c.useContext(ge), n = c.useContext(we);
  k(n, "useFormAction must be used inside a RouteContext");
  let [a] = n.matches.slice(-1), o = { ...Dt(e || ".", { relative: t }) }, i = Ee();
  if (e == null) {
    o.search = i.search;
    let s = new URLSearchParams(o.search), l = s.getAll("index");
    if (l.some((d) => d === "")) {
      s.delete("index"), l.filter((p) => p).forEach((p) => s.append("index", p));
      let d = s.toString();
      o.search = d ? `?${d}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (o.pathname = o.pathname === "/" ? r : _e([r, o.pathname])), me(o);
}
function Yu({
  key: e
} = {}) {
  var E;
  let { router: t } = yr(
    "useFetcher"
    /* UseFetcher */
  ), r = ya(
    "useFetcher"
    /* UseFetcher */
  ), n = c.useContext(dr), a = c.useContext(we), o = (E = a.matches[a.matches.length - 1]) == null ? void 0 : E.route.id;
  k(n, "useFetcher must be used inside a FetchersContext"), k(a, "useFetcher must be used inside a RouteContext"), k(
    o != null,
    'useFetcher can only be used on routes that contain a unique "id"'
  );
  let i = c.useId(), [s, l] = c.useState(e || i);
  e && e !== s && l(e), c.useEffect(() => (t.getFetcher(s), () => t.deleteFetcher(s)), [t, s]);
  let u = c.useCallback(
    async (w, C) => {
      k(o, "No routeId available for fetcher.load()"), await t.fetch(s, o, w, C);
    },
    [s, o, t]
  ), d = Po(), p = c.useCallback(
    async (w, C) => {
      await d(w, {
        ...C,
        navigate: !1,
        fetcherKey: s
      });
    },
    [s, d]
  ), f = c.useMemo(() => {
    let w = c.forwardRef(
      (C, x) => /* @__PURE__ */ c.createElement(Co, { ...C, navigate: !1, fetcherKey: s, ref: x })
    );
    return w.displayName = "fetcher.Form", w;
  }, [s]), h = r.fetchers.get(s) || Yr, m = n.get(s);
  return c.useMemo(
    () => ({
      Form: f,
      submit: p,
      load: u,
      ...h,
      data: m
    }),
    [f, p, u, h, m]
  );
}
function Xu() {
  let e = ya(
    "useFetchers"
    /* UseFetchers */
  );
  return Array.from(e.fetchers.entries()).map(([t, r]) => ({
    ...r,
    key: t
  }));
}
var Br = "react-router-scroll-positions", jt = {};
function Wr(e, t, r, n) {
  let a = null;
  return n && (r !== "/" ? a = n(
    {
      ...e,
      pathname: ne(e.pathname, r) || e.pathname
    },
    t
  ) : a = n(e, t)), a == null && (a = e.key), a;
}
function $s({
  getKey: e,
  storageKey: t
} = {}) {
  let { router: r } = yr(
    "useScrollRestoration"
    /* UseScrollRestoration */
  ), { restoreScrollPosition: n, preventScrollReset: a } = ya(
    "useScrollRestoration"
    /* UseScrollRestoration */
  ), { basename: o } = c.useContext(ge), i = Ee(), s = aa(), l = fl();
  c.useEffect(() => (window.history.scrollRestoration = "manual", () => {
    window.history.scrollRestoration = "auto";
  }), []), Hs(
    c.useCallback(() => {
      if (l.state === "idle") {
        let u = Wr(i, s, o, e);
        jt[u] = window.scrollY;
      }
      try {
        sessionStorage.setItem(
          t || Br,
          JSON.stringify(jt)
        );
      } catch (u) {
        K(
          !1,
          `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${u}).`
        );
      }
      window.history.scrollRestoration = "auto";
    }, [l.state, e, o, i, s, t])
  ), typeof document < "u" && (c.useLayoutEffect(() => {
    try {
      let u = sessionStorage.getItem(
        t || Br
      );
      u && (jt = JSON.parse(u));
    } catch {
    }
  }, [t]), c.useLayoutEffect(() => {
    let u = r == null ? void 0 : r.enableScrollRestoration(
      jt,
      () => window.scrollY,
      e ? (d, p) => Wr(d, p, o, e) : void 0
    );
    return () => u && u();
  }, [r, o, e]), c.useLayoutEffect(() => {
    if (n !== !1) {
      if (typeof n == "number") {
        window.scrollTo(0, n);
        return;
      }
      if (i.hash) {
        let u = document.getElementById(
          decodeURIComponent(i.hash.slice(1))
        );
        if (u) {
          u.scrollIntoView();
          return;
        }
      }
      a !== !0 && window.scrollTo(0, 0);
    }
  }, [i, n, a]));
}
function Ku(e, t) {
  let { capture: r } = t || {};
  c.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return window.addEventListener("beforeunload", e, n), () => {
      window.removeEventListener("beforeunload", e, n);
    };
  }, [e, r]);
}
function Hs(e, t) {
  let { capture: r } = {};
  c.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return window.addEventListener("pagehide", e, n), () => {
      window.removeEventListener("pagehide", e, n);
    };
  }, [e, r]);
}
function Gu({
  when: e,
  message: t
}) {
  let r = pl(e);
  c.useEffect(() => {
    r.state === "blocked" && (window.confirm(t) ? setTimeout(r.proceed, 0) : r.reset());
  }, [r, t]), c.useEffect(() => {
    r.state === "blocked" && !e && r.reset();
  }, [r, e]);
}
function Is(e, t = {}) {
  let r = c.useContext(cr);
  k(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = yr(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = Dt(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let o = ne(r.currentLocation.pathname, n) || r.currentLocation.pathname, i = ne(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return St(a.pathname, i) != null || St(a.pathname, o) != null;
}
function Qu({
  basename: e,
  children: t,
  location: r = "/"
}) {
  typeof r == "string" && (r = xe(r));
  let n = "POP", a = {
    pathname: r.pathname || "/",
    search: r.search || "",
    hash: r.hash || "",
    state: r.state != null ? r.state : null,
    key: r.key || "default"
  }, o = Lo();
  return /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: e,
      children: t,
      location: a,
      navigationType: n,
      navigator: o,
      static: !0
    }
  );
}
function js({
  context: e,
  router: t,
  hydrate: r = !0,
  nonce: n
}) {
  k(
    t && e,
    "You must provide `router` and `context` to <StaticRouterProvider>"
  );
  let a = {
    router: t,
    navigator: Lo(),
    static: !0,
    staticContext: e,
    basename: e.basename || "/"
  }, o = /* @__PURE__ */ new Map(), i = "";
  if (r !== !1) {
    let l = {
      loaderData: e.loaderData,
      actionData: e.actionData,
      errors: zs(e.errors)
    };
    i = `window.__staticRouterHydrationData = JSON.parse(${Ys(JSON.stringify(JSON.stringify(l)))});`;
  }
  let { state: s } = a.router;
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(Ue.Provider, { value: a }, /* @__PURE__ */ c.createElement(qe.Provider, { value: s }, /* @__PURE__ */ c.createElement(dr.Provider, { value: o }, /* @__PURE__ */ c.createElement(cr.Provider, { value: { isTransitioning: !1 } }, /* @__PURE__ */ c.createElement(
    tt,
    {
      basename: a.basename,
      location: s.location,
      navigationType: s.historyAction,
      navigator: a.navigator,
      static: a.static
    },
    /* @__PURE__ */ c.createElement(
      Us,
      {
        routes: t.routes,
        future: t.future,
        state: s
      }
    )
  ))))), i ? /* @__PURE__ */ c.createElement(
    "script",
    {
      suppressHydrationWarning: !0,
      nonce: n,
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : null);
}
function Us({
  routes: e,
  future: t,
  state: r
}) {
  return ea(e, void 0, r, t);
}
function zs(e) {
  if (!e) return null;
  let t = Object.entries(e), r = {};
  for (let [n, a] of t)
    ae(a) ? r[n] = { ...a, __type: "RouteErrorResponse" } : a instanceof Error ? r[n] = {
      message: a.message,
      __type: "Error",
      // If this is a subclass (i.e., ReferenceError), send up the type so we
      // can re-create the same type during hydration.
      ...a.name !== "Error" ? {
        __subType: a.name
      } : {}
    } : r[n] = a;
  return r;
}
function Lo() {
  return {
    createHref: Do,
    encodeLocation: _o,
    push(e) {
      throw new Error(
        `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`
      );
    },
    replace(e) {
      throw new Error(
        `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`
      );
    },
    go(e) {
      throw new Error(
        `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`
      );
    },
    back() {
      throw new Error(
        "You cannot use navigator.back() on the server because it is a stateless environment."
      );
    },
    forward() {
      throw new Error(
        "You cannot use navigator.forward() on the server because it is a stateless environment."
      );
    }
  };
}
function Zu(e, t) {
  return Pn(e, {
    ...t,
    mapRouteProperties: dt
  });
}
function Bs(e, t, r = {}) {
  let n = {}, a = Ze(
    e,
    dt,
    void 0,
    n
  ), o = t.matches.map((s) => {
    let l = n[s.route.id] || s.route;
    return {
      ...s,
      route: l
    };
  }), i = (s) => `You cannot use router.${s}() on the server because it is a stateless environment`;
  return {
    get basename() {
      return t.basename;
    },
    get future() {
      return {
        unstable_middleware: !1,
        ...r == null ? void 0 : r.future
      };
    },
    get state() {
      return {
        historyAction: "POP",
        location: t.location,
        matches: o,
        loaderData: t.loaderData,
        actionData: t.actionData,
        errors: t.errors,
        initialized: !0,
        navigation: zt,
        restoreScrollPosition: null,
        preventScrollReset: !1,
        revalidation: "idle",
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
    },
    get routes() {
      return a;
    },
    get window() {
    },
    initialize() {
      throw i("initialize");
    },
    subscribe() {
      throw i("subscribe");
    },
    enableScrollRestoration() {
      throw i("enableScrollRestoration");
    },
    navigate() {
      throw i("navigate");
    },
    fetch() {
      throw i("fetch");
    },
    revalidate() {
      throw i("revalidate");
    },
    createHref: Do,
    encodeLocation: _o,
    getFetcher() {
      return Yr;
    },
    deleteFetcher() {
      throw i("deleteFetcher");
    },
    dispose() {
      throw i("dispose");
    },
    getBlocker() {
      return Ge;
    },
    deleteBlocker() {
      throw i("deleteBlocker");
    },
    patchRoutes() {
      throw i("patchRoutes");
    },
    _internalFetchControllers: /* @__PURE__ */ new Map(),
    _internalSetRoutes() {
      throw i("_internalSetRoutes");
    }
  };
}
function Do(e) {
  return typeof e == "string" ? e : me(e);
}
function _o(e) {
  let t = typeof e == "string" ? e : me(e);
  t = t.replace(/ $/, "%20");
  let r = Ws.test(t) ? new URL(t) : new URL(t, "http://localhost");
  return {
    pathname: r.pathname,
    search: r.search,
    hash: r.hash
  };
}
var Ws = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Vs = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, Js = /[&><\u2028\u2029]/g;
function Ys(e) {
  return e.replace(Js, (t) => Vs[t]);
}
function qu({
  context: e,
  url: t,
  nonce: r
}) {
  typeof t == "string" && (t = new URL(t));
  let { manifest: n, routeModules: a, criticalCss: o, serverHandoffString: i } = e, s = po(
    n.routes,
    a,
    e.future,
    e.isSpaMode
  );
  e.staticHandlerContext.loaderData = {
    ...e.staticHandlerContext.loaderData
  };
  for (let u of e.staticHandlerContext.matches) {
    let d = u.route.id, p = a[d], f = e.manifest.routes[d];
    p && f && fa(
      d,
      p.clientLoader,
      f.hasLoader,
      e.isSpaMode
    ) && (p.HydrateFallback || !f.hasLoader) && delete e.staticHandlerContext.loaderData[d];
  }
  let l = Bs(s, e.staticHandlerContext);
  return /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    rt.Provider,
    {
      value: {
        manifest: n,
        routeModules: a,
        criticalCss: o,
        serverHandoffString: i,
        future: e.future,
        ssr: e.ssr,
        isSpaMode: e.isSpaMode,
        routeDiscovery: e.routeDiscovery,
        serializeError: e.serializeError,
        renderMeta: e.renderMeta
      }
    },
    /* @__PURE__ */ c.createElement(fo, { location: l.state.location }, /* @__PURE__ */ c.createElement(
      js,
      {
        router: l,
        context: e.staticHandlerContext,
        hydrate: !1
      }
    ))
  ), e.serverHandoffStream ? /* @__PURE__ */ c.createElement(c.Suspense, null, /* @__PURE__ */ c.createElement(
    uo,
    {
      context: e,
      identifier: 0,
      reader: e.serverHandoffStream.getReader(),
      textDecoder: new TextDecoder(),
      nonce: r
    }
  )) : null);
}
function ec(e, t) {
  return function({
    initialEntries: n,
    initialIndex: a,
    hydrationData: o,
    future: i
  }) {
    let s = c.useRef(), l = c.useRef();
    if (s.current == null) {
      l.current = {
        future: {
          unstable_subResourceIntegrity: (i == null ? void 0 : i.unstable_subResourceIntegrity) === !0,
          unstable_middleware: (i == null ? void 0 : i.unstable_middleware) === !0
        },
        manifest: {
          routes: {},
          entry: { imports: [], module: "" },
          url: "",
          version: ""
        },
        routeModules: {},
        ssr: !1,
        isSpaMode: !1,
        routeDiscovery: { mode: "lazy", manifestPath: "/__manifest" }
      };
      let u = To(
        // @ts-expect-error `StubRouteObject` is stricter about `loader`/`action`
        // types compared to `AgnosticRouteObject`
        Ze(e, (d) => d),
        l.current.manifest,
        l.current.routeModules
      );
      s.current = vl(u, {
        unstable_getContext: t,
        initialEntries: n,
        initialIndex: a,
        hydrationData: o
      });
    }
    return /* @__PURE__ */ c.createElement(rt.Provider, { value: l.current }, /* @__PURE__ */ c.createElement(zn, { router: s.current }));
  };
}
function To(e, t, r, n) {
  return e.map((a) => {
    if (!a.id)
      throw new Error(
        "Expected a route.id in @remix-run/testing processRoutes() function"
      );
    let o = {
      id: a.id,
      path: a.path,
      index: a.index,
      Component: a.Component ? xl(a.Component) : void 0,
      HydrateFallback: a.HydrateFallback ? Pl(a.HydrateFallback) : void 0,
      ErrorBoundary: a.ErrorBoundary ? Ll(a.ErrorBoundary) : void 0,
      action: a.action,
      loader: a.loader,
      handle: a.handle,
      shouldRevalidate: a.shouldRevalidate
    }, i = {
      id: a.id,
      path: a.path,
      index: a.index,
      parentId: n,
      hasAction: a.action != null,
      hasLoader: a.loader != null,
      // When testing routes, you should be stubbing loader/action/middleware,
      // not trying to re-implement the full loader/clientLoader/SSR/hydration
      // flow. That is better tested via E2E tests.
      hasClientAction: !1,
      hasClientLoader: !1,
      hasClientMiddleware: !1,
      hasErrorBoundary: a.ErrorBoundary != null,
      // any need for these?
      module: "build/stub-path-to-module.js",
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      clientMiddlewareModule: void 0,
      hydrateFallbackModule: void 0
    };
    return t.routes[o.id] = i, r[a.id] = {
      default: o.Component || bl,
      ErrorBoundary: o.ErrorBoundary || void 0,
      handle: a.handle,
      links: a.links,
      meta: a.meta,
      shouldRevalidate: a.shouldRevalidate
    }, a.children && (o.children = To(
      a.children,
      t,
      r,
      o.id
    )), o;
  });
}
var va = /* @__PURE__ */ new TextEncoder(), Xs = async (e, t) => {
  let r = va.encode(e), n = await Mo(t, ["sign"]), a = await crypto.subtle.sign("HMAC", n, r), o = btoa(String.fromCharCode(...new Uint8Array(a))).replace(
    /=+$/,
    ""
  );
  return e + "." + o;
}, Ks = async (e, t) => {
  let r = e.lastIndexOf("."), n = e.slice(0, r), a = e.slice(r + 1), o = va.encode(n), i = await Mo(t, ["verify"]), s = Gs(atob(a));
  return await crypto.subtle.verify("HMAC", i, s, o) ? n : !1;
}, Mo = async (e, t) => crypto.subtle.importKey(
  "raw",
  va.encode(e),
  { name: "HMAC", hash: "SHA-256" },
  !1,
  t
);
function Gs(e) {
  let t = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++)
    t[r] = e.charCodeAt(r);
  return t;
}
var Oo = (e, t = {}) => {
  let { secrets: r = [], ...n } = {
    path: "/",
    sameSite: "lax",
    ...t
  };
  return ru(e, n.expires), {
    get name() {
      return e;
    },
    get isSigned() {
      return r.length > 0;
    },
    get expires() {
      return typeof n.maxAge < "u" ? new Date(Date.now() + n.maxAge * 1e3) : n.expires;
    },
    async parse(a, o) {
      if (!a) return null;
      let i = Oa.parse(a, { ...n, ...o });
      if (e in i) {
        let s = i[e];
        return typeof s == "string" && s !== "" ? await Zs(s, r) : "";
      } else
        return null;
    },
    async serialize(a, o) {
      return Oa.serialize(
        e,
        a === "" ? "" : await Qs(a, r),
        {
          ...n,
          ...o
        }
      );
    }
  };
}, Fo = (e) => e != null && typeof e.name == "string" && typeof e.isSigned == "boolean" && typeof e.parse == "function" && typeof e.serialize == "function";
async function Qs(e, t) {
  let r = qs(e);
  return t.length > 0 && (r = await Xs(r, t[0])), r;
}
async function Zs(e, t) {
  if (t.length > 0) {
    for (let r of t) {
      let n = await Ks(e, r);
      if (n !== !1)
        return an(n);
    }
    return null;
  }
  return an(e);
}
function qs(e) {
  return btoa(tu(encodeURIComponent(JSON.stringify(e))));
}
function an(e) {
  try {
    return JSON.parse(decodeURIComponent(eu(atob(e))));
  } catch {
    return {};
  }
}
function eu(e) {
  let t = e.toString(), r = "", n = 0, a, o;
  for (; n < t.length; )
    a = t.charAt(n++), /[\w*+\-./@]/.exec(a) ? r += a : (o = a.charCodeAt(0), o < 256 ? r += "%" + nn(o, 2) : r += "%u" + nn(o, 4).toUpperCase());
  return r;
}
function nn(e, t) {
  let r = e.toString(16);
  for (; r.length < t; ) r = "0" + r;
  return r;
}
function tu(e) {
  let t = e.toString(), r = "", n = 0, a, o;
  for (; n < t.length; ) {
    if (a = t.charAt(n++), a === "%") {
      if (t.charAt(n) === "u") {
        if (o = t.slice(n + 1, n + 5), /^[\da-f]{4}$/i.exec(o)) {
          r += String.fromCharCode(parseInt(o, 16)), n += 5;
          continue;
        }
      } else if (o = t.slice(n, n + 2), /^[\da-f]{2}$/i.exec(o)) {
        r += String.fromCharCode(parseInt(o, 16)), n += 2;
        continue;
      }
    }
    r += a;
  }
  return r;
}
function ru(e, t) {
  Zt(
    !t,
    `The "${e}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
  );
}
function au(e) {
  return Object.keys(e).reduce((t, r) => {
    let n = e[r];
    return n && (t[r] = n.module), t;
  }, {});
}
var nu = /* @__PURE__ */ ((e) => (e.Development = "development", e.Production = "production", e.Test = "test", e))(nu || {});
function ou(e) {
  return e === "development" || e === "production" || e === "test";
}
function vr(e, t) {
  if (e instanceof Error && t !== "development") {
    let r = new Error("Unexpected Server Error");
    return r.stack = void 0, r;
  }
  return e;
}
function tr(e, t) {
  return Object.entries(e).reduce((r, [n, a]) => Object.assign(r, { [n]: vr(a, t) }), {});
}
function ko(e, t) {
  let r = vr(e, t);
  return {
    message: r.message,
    stack: r.stack
  };
}
function on(e, t) {
  if (!e) return null;
  let r = Object.entries(e), n = {};
  for (let [a, o] of r)
    if (ae(o))
      n[a] = { ...o, __type: "RouteErrorResponse" };
    else if (o instanceof Error) {
      let i = vr(o, t);
      n[a] = {
        message: i.message,
        stack: i.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...i.name !== "Error" ? {
          __subType: i.name
        } : {}
      };
    } else
      n[a] = o;
  return n;
}
function Vr(e, t, r) {
  let n = ve(
    e,
    t,
    r
  );
  return n ? n.map((a) => ({
    params: a.params,
    pathname: a.pathname,
    route: a.route
  })) : null;
}
async function ln(e, t) {
  let r = await e({
    request: lu(iu(t.request)),
    params: t.params,
    context: t.context
  });
  if (Qt(r) && r.init && r.init.status && sr(r.init.status))
    throw new Response(null, r.init);
  return r;
}
function iu(e) {
  let t = new URL(e.url), r = t.searchParams.getAll("index");
  t.searchParams.delete("index");
  let n = [];
  for (let o of r)
    o && n.push(o);
  for (let o of n)
    t.searchParams.append("index", o);
  let a = {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.signal
  };
  return a.body && (a.duplex = "half"), new Request(t.href, a);
}
function lu(e) {
  let t = new URL(e.url);
  t.searchParams.delete("_routes");
  let r = {
    method: e.method,
    body: e.body,
    headers: e.headers,
    signal: e.signal
  };
  return r.body && (r.duplex = "half"), new Request(t.href, r);
}
function Yt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw console.error(
      "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
    ), new Error(t);
}
var No = "__reactRouterDevServerHooks";
function tc(e) {
  globalThis[No] = e;
}
function Tr() {
  return globalThis[No];
}
function Ao(e, t) {
  var r;
  if (typeof process < "u")
    try {
      if (((r = process.env) == null ? void 0 : r.IS_RR_BUILD_REQUEST) === "yes")
        return e.headers.get(t);
    } catch {
    }
  return null;
}
function $o(e) {
  let t = {};
  return Object.values(e).forEach((r) => {
    if (r) {
      let n = r.parentId || "";
      t[n] || (t[n] = []), t[n].push(r);
    }
  }), t;
}
function Ho(e, t = "", r = $o(e)) {
  return (r[t] || []).map((n) => ({
    ...n,
    children: Ho(e, n.id, r)
  }));
}
function Io(e, t, r = "", n = $o(e)) {
  return (n[r] || []).map((a) => {
    let o = {
      // Always include root due to default boundaries
      hasErrorBoundary: a.id === "root" || a.module.ErrorBoundary != null,
      id: a.id,
      path: a.path,
      unstable_middleware: a.module.unstable_middleware,
      // Need to use RR's version in the param typed here to permit the optional
      // context even though we know it'll always be provided in remix
      loader: a.module.loader ? async (i) => {
        let s = Ao(
          i.request,
          "X-React-Router-Prerender-Data"
        );
        if (s != null) {
          let u = s && decodeURI(s);
          Yt(u, "Missing prerendered data for route");
          let d = new TextEncoder().encode(u), p = new ReadableStream({
            start(m) {
              m.enqueue(d), m.close();
            }
          }), h = (await ca(p, global)).value;
          if (h && Te in h) {
            let m = h[Te], g = { status: m.status };
            throw m.reload ? Ai(m.redirect, g) : m.replace ? $i(m.redirect, g) : ir(m.redirect, g);
          } else {
            Yt(
              h && a.id in h,
              "Unable to decode prerendered data"
            );
            let m = h[a.id];
            return Yt(
              "data" in m,
              "Unable to process prerendered data"
            ), m.data;
          }
        }
        return await ln(a.module.loader, i);
      } : void 0,
      action: a.module.action ? (i) => ln(a.module.action, i) : void 0,
      handle: a.module.handle
    };
    return a.index ? {
      index: !0,
      ...o
    } : {
      caseSensitive: a.caseSensitive,
      children: Io(
        e,
        t,
        a.id,
        n
      ),
      ...o
    };
  });
}
var su = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
}, uu = /[&><\u2028\u2029]/g;
function cu(e) {
  return e.replace(uu, (t) => su[t]);
}
function sn(e) {
  return cu(JSON.stringify(e));
}
function ga(e, t) {
  return du(t, (r) => {
    let n = e.routes[r.route.id];
    return Yt(n, `Route with id "${r.route.id}" not found in build`), n.module.headers;
  });
}
function du(e, t) {
  let r = e.errors ? e.matches.findIndex((o) => e.errors[o.route.id]) : -1, n = r >= 0 ? e.matches.slice(0, r + 1) : e.matches, a;
  if (r >= 0) {
    let { actionHeaders: o, actionData: i, loaderHeaders: s, loaderData: l } = e;
    e.matches.slice(r).some((u) => {
      let d = u.route.id;
      return o[d] && (!i || !i.hasOwnProperty(d)) ? a = o[d] : s[d] && !l.hasOwnProperty(d) && (a = s[d]), a != null;
    });
  }
  return n.reduce((o, i, s) => {
    let { id: l } = i.route, u = e.loaderHeaders[l] || new Headers(), d = e.actionHeaders[l] || new Headers(), p = a != null && s === n.length - 1, f = p && a !== u && a !== d, h = t(i);
    if (h == null) {
      let g = new Headers(o);
      return f && Ke(a, g), Ke(d, g), Ke(u, g), g;
    }
    let m = new Headers(
      typeof h == "function" ? h({
        loaderHeaders: u,
        parentHeaders: o,
        actionHeaders: d,
        errorHeaders: p ? a : void 0
      }) : h
    );
    return f && Ke(a, m), Ke(d, m), Ke(u, m), Ke(o, m), m;
  }, new Headers());
}
function Ke(e, t) {
  let r = e.get("Set-Cookie");
  if (r) {
    let n = ui.splitCookiesString(r), a = new Set(t.getSetCookie());
    n.forEach((o) => {
      a.has(o) || t.append("Set-Cookie", o);
    });
  }
}
var jo = /* @__PURE__ */ new Set([
  ...so,
  304
]);
async function fu(e, t, r, n, a, o, i) {
  try {
    let l = function(p) {
      let f = ga(e, p);
      if (sr(p.statusCode) && f.has("Location"))
        return Ie(n, e, t, {
          result: Lt(
            p.statusCode,
            f,
            e.basename
          ),
          headers: f,
          status: ut
        });
      p.errors && (Object.values(p.errors).forEach((m) => {
        (!ae(m) || m.error) && i(m);
      }), p.errors = tr(p.errors, t));
      let h;
      return p.errors ? h = { error: Object.values(p.errors)[0] } : h = {
        data: Object.values(p.actionData || {})[0]
      }, Ie(n, e, t, {
        result: h,
        headers: f,
        status: p.statusCode
      });
    };
    var s = l;
    let u = new Request(a, {
      method: n.method,
      body: n.body,
      headers: n.headers,
      signal: n.signal,
      ...n.body ? { duplex: "half" } : void 0
    }), d = await r.query(u, {
      requestContext: o,
      skipLoaderErrorBubbling: !0,
      skipRevalidation: !0,
      unstable_respond: l
    });
    return Q(d) || (d = l(d)), ur(d) ? Ie(n, e, t, {
      result: Lt(
        d.status,
        d.headers,
        e.basename
      ),
      headers: d.headers,
      status: ut
    }) : d;
  } catch (l) {
    return i(l), Ie(n, e, t, {
      result: { error: l },
      headers: new Headers(),
      status: 500
    });
  }
}
async function hu(e, t, r, n, a, o, i) {
  try {
    let l = function(h) {
      let m = ga(e, h);
      if (sr(h.statusCode) && m.has("Location"))
        return Ie(n, e, t, {
          result: {
            [Te]: Lt(
              h.statusCode,
              m,
              e.basename
            )
          },
          headers: m,
          status: ut
        });
      h.errors && (Object.values(h.errors).forEach((w) => {
        (!ae(w) || w.error) && i(w);
      }), h.errors = tr(h.errors, t));
      let g = {}, E = new Set(
        h.matches.filter(
          (w) => p ? p.has(w.route.id) : w.route.loader != null
        ).map((w) => w.route.id)
      );
      if (h.errors)
        for (let [w, C] of Object.entries(h.errors))
          g[w] = { error: C };
      for (let [w, C] of Object.entries(h.loaderData))
        !(w in g) && E.has(w) && (g[w] = { data: C });
      return Ie(n, e, t, {
        result: g,
        headers: m,
        status: h.statusCode
      });
    };
    var s = l;
    let u = new Request(a, {
      headers: n.headers,
      signal: n.signal
    }), d = new URL(n.url).searchParams.get("_routes"), p = d ? new Set(d.split(",")) : null, f = await r.query(u, {
      requestContext: o,
      filterMatchesToLoad: (h) => !p || p.has(h.route.id),
      skipLoaderErrorBubbling: !0,
      unstable_respond: l
    });
    return Q(f) || (f = l(f)), ur(f) ? Ie(n, e, t, {
      result: {
        [Te]: Lt(
          f.status,
          f.headers,
          e.basename
        )
      },
      headers: f.headers,
      status: ut
    }) : f;
  } catch (l) {
    return i(l), Ie(n, e, t, {
      result: { root: { error: l } },
      headers: new Headers(),
      status: 500
    });
  }
}
function Ie(e, t, r, {
  result: n,
  headers: a,
  status: o
}) {
  let i = new Headers(a);
  return i.set("X-Remix-Response", "yes"), jo.has(o) ? new Response(null, { status: o, headers: i }) : (i.set("Content-Type", "text/x-script"), new Response(
    rr(
      n,
      e.signal,
      t.entry.module.streamTimeout,
      r
    ),
    {
      status: o || 200,
      headers: i
    }
  ));
}
function Lt(e, t, r) {
  let n = t.get("Location");
  return r && (n = ne(n, r) || n), {
    redirect: n,
    status: e,
    revalidate: (
      // Technically X-Remix-Revalidate isn't needed here - that was an implementation
      // detail of ?_data requests as our way to tell the front end to revalidate when
      // we didn't have a response body to include that information in.
      // With single fetch, we tell the front end via this revalidate boolean field.
      // However, we're respecting it for now because it may be something folks have
      // used in their own responses
      // TODO(v3): Consider removing or making this official public API
      t.has("X-Remix-Revalidate") || t.has("Set-Cookie")
    ),
    reload: t.has("X-Remix-Reload-Document"),
    replace: t.has("X-Remix-Replace")
  };
}
function rr(e, t, r, n) {
  let a = new AbortController(), o = setTimeout(
    () => a.abort(new Error("Server Timeout")),
    typeof r == "number" ? r : 4950
  );
  return t.addEventListener("abort", () => clearTimeout(o)), es(e, {
    signal: a.signal,
    plugins: [
      (i) => {
        if (i instanceof Error) {
          let { name: s, message: l, stack: u } = n === "production" ? vr(i, n) : i;
          return ["SanitizedError", s, l, u];
        }
        if (i instanceof Ce) {
          let { data: s, status: l, statusText: u } = i;
          return ["ErrorResponse", s, l, u];
        }
        if (i && typeof i == "object" && Te in i)
          return ["SingleFetchRedirect", i[Te]];
      }
    ],
    postPlugins: [
      (i) => {
        if (i && typeof i == "object")
          return [
            "SingleFetchClassInstance",
            Object.fromEntries(Object.entries(i))
          ];
      },
      () => ["SingleFetchFallback"]
    ]
  });
}
function un(e, t) {
  let r = Ho(e.routes), n = Io(e.routes, e.future), a = ou(t) ? t : "production", o = Pn(n, {
    basename: e.basename
  }), i = e.entry.module.handleError || ((s, { request: l }) => {
    a !== "test" && !l.signal.aborted && console.error(
      // @ts-expect-error This is "private" from users but intended for internal use
      ae(s) && s.error ? s.error : s
    );
  });
  return {
    routes: r,
    dataRoutes: n,
    serverMode: a,
    staticHandler: o,
    errorHandler: i
  };
}
var rc = (e, t) => {
  let r, n, a, o, i;
  return async function(l, u) {
    var L, R, v;
    if (r = typeof e == "function" ? await e() : e, typeof e == "function") {
      let D = un(r, t);
      n = D.routes, a = D.serverMode, o = D.staticHandler, i = D.errorHandler;
    } else if (!n || !a || !o || !i) {
      let D = un(r, t);
      n = D.routes, a = D.serverMode, o = D.staticHandler, i = D.errorHandler;
    }
    let d = {}, p, f = (D) => {
      var P, T;
      t === "development" && ((T = (P = Tr()) == null ? void 0 : P.processRequestError) == null || T.call(P, D)), i(D, {
        context: p,
        params: d,
        request: l
      });
    };
    if (r.future.unstable_middleware)
      if (u == null)
        p = new $e();
      else
        try {
          p = new $e(
            u
          );
        } catch (D) {
          let P = new Error(
            `Unable to create initial \`unstable_RouterContextProvider\` instance. Please confirm you are returning an instance of \`Map<unstable_routerContext, unknown>\` from your \`getLoadContext\` function.

Error: ${D instanceof Error ? D.toString() : D}`
          );
          return f(P), ar(P, a);
        }
    else
      p = u || {};
    let h = new URL(l.url), m = r.basename || "/", g = h.pathname;
    ne(g, m) === "/_root.data" ? g = m : g.endsWith(".data") && (g = g.replace(/\.data$/, "")), ne(g, m) !== "/" && g.endsWith("/") && (g = g.slice(0, -1));
    let E = Ao(l, "X-React-Router-SPA-Mode") === "yes";
    if (!r.ssr) {
      if (r.prerender.length === 0)
        E = !0;
      else if (!r.prerender.includes(g) && !r.prerender.includes(g + "/")) {
        if (h.pathname.endsWith(".data"))
          return i(
            new Ce(
              404,
              "Not Found",
              `Refusing to SSR the path \`${g}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`
            ),
            {
              context: p,
              params: d,
              request: l
            }
          ), new Response("Not Found", {
            status: 404,
            statusText: "Not Found"
          });
        E = !0;
      }
    }
    let w = vo(
      r.routeDiscovery.manifestPath,
      m
    );
    if (h.pathname === w)
      try {
        return await mu(r, n, h);
      } catch (D) {
        return f(D), new Response("Unknown Server Error", { status: 500 });
      }
    let C = Vr(n, g, r.basename);
    C && C.length > 0 && Object.assign(d, C[0].params);
    let x;
    if (h.pathname.endsWith(".data")) {
      let D = new URL(l.url);
      D.pathname = g;
      let P = Vr(
        n,
        D.pathname,
        r.basename
      );
      if (x = await pu(
        a,
        r,
        o,
        l,
        D,
        p,
        f
      ), r.entry.module.handleDataRequest && (x = await r.entry.module.handleDataRequest(x, {
        context: p,
        params: P ? P[0].params : {},
        request: l
      }), ur(x))) {
        let T = Lt(
          x.status,
          x.headers,
          r.basename
        );
        l.method === "GET" && (T = {
          [Te]: T
        });
        let I = new Headers(x.headers);
        return I.set("Content-Type", "text/x-script"), new Response(
          rr(
            T,
            l.signal,
            r.entry.module.streamTimeout,
            a
          ),
          {
            status: ut,
            headers: I
          }
        );
      }
    } else if (!E && C && C[C.length - 1].route.module.default == null && C[C.length - 1].route.module.ErrorBoundary == null)
      x = await vu(
        a,
        r,
        o,
        C.slice(-1)[0].route.id,
        l,
        p,
        f
      );
    else {
      let { pathname: D } = h, P;
      r.unstable_getCriticalCss ? P = await r.unstable_getCriticalCss({ pathname: D }) : t === "development" && ((L = Tr()) != null && L.getCriticalCss) && (P = await ((v = (R = Tr()) == null ? void 0 : R.getCriticalCss) == null ? void 0 : v.call(R, D))), x = await yu(
        a,
        r,
        o,
        l,
        p,
        f,
        E,
        P
      );
    }
    return l.method === "HEAD" ? new Response(null, {
      headers: x.headers,
      status: x.status,
      statusText: x.statusText
    }) : x;
  };
};
async function mu(e, t, r) {
  if (e.assets.version !== r.searchParams.get("version"))
    return new Response(null, {
      status: 204,
      headers: {
        "X-Remix-Reload-Document": "true"
      }
    });
  let n = {};
  if (r.searchParams.has("p")) {
    let a = /* @__PURE__ */ new Set();
    r.searchParams.getAll("p").forEach((o) => {
      o.startsWith("/") || (o = `/${o}`);
      let i = o.split("/").slice(1);
      i.forEach((s, l) => {
        let u = i.slice(0, l + 1).join("/");
        a.add(`/${u}`);
      });
    });
    for (let o of a) {
      let i = Vr(t, o, e.basename);
      if (i)
        for (let s of i) {
          let l = s.route.id, u = e.assets.routes[l];
          u && (n[l] = u);
        }
    }
    return Response.json(n, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }
  return new Response("Invalid Request", { status: 400 });
}
async function pu(e, t, r, n, a, o, i) {
  return n.method !== "GET" ? await fu(
    t,
    e,
    r,
    n,
    a,
    o,
    i
  ) : await hu(
    t,
    e,
    r,
    n,
    a,
    o,
    i
  );
}
async function yu(e, t, r, n, a, o, i, s) {
  try {
    let u = await r.query(n, {
      requestContext: a,
      unstable_respond: t.future.unstable_middleware ? (d) => l(d, i) : void 0
    });
    return Q(u) ? u : l(u, i);
  } catch (u) {
    return o(u), new Response(null, { status: 500 });
  }
  async function l(u, d) {
    if (Q(u))
      return u;
    let p = ga(t, u);
    if (jo.has(u.statusCode))
      return new Response(null, { status: u.statusCode, headers: p });
    u.errors && (Object.values(u.errors).forEach((E) => {
      (!ae(E) || E.error) && o(E);
    }), u.errors = tr(u.errors, e));
    let f = {
      loaderData: u.loaderData,
      actionData: u.actionData,
      errors: on(u.errors, e)
    }, h = {
      basename: t.basename,
      future: t.future,
      routeDiscovery: t.routeDiscovery,
      ssr: t.ssr,
      isSpaMode: d
    }, m = {
      manifest: t.assets,
      routeModules: au(t.routes),
      staticHandlerContext: u,
      criticalCss: s,
      serverHandoffString: sn({
        ...h,
        criticalCss: s
      }),
      serverHandoffStream: rr(
        f,
        n.signal,
        t.entry.module.streamTimeout,
        e
      ),
      renderMeta: {},
      future: t.future,
      ssr: t.ssr,
      routeDiscovery: t.routeDiscovery,
      isSpaMode: d,
      serializeError: (E) => ko(E, e)
    }, g = t.entry.module.default;
    try {
      return await g(
        n,
        u.statusCode,
        p,
        m,
        a
      );
    } catch (E) {
      o(E);
      let w = E;
      if (Q(E))
        try {
          let x = await wu(E);
          w = new Ce(
            E.status,
            E.statusText,
            x
          );
        } catch {
        }
      u = Ln(
        r.dataRoutes,
        u,
        w
      ), u.errors && (u.errors = tr(u.errors, e));
      let C = {
        loaderData: u.loaderData,
        actionData: u.actionData,
        errors: on(u.errors, e)
      };
      m = {
        ...m,
        staticHandlerContext: u,
        serverHandoffString: sn(h),
        serverHandoffStream: rr(
          C,
          n.signal,
          t.entry.module.streamTimeout,
          e
        ),
        renderMeta: {}
      };
      try {
        return await g(
          n,
          u.statusCode,
          p,
          m,
          a
        );
      } catch (x) {
        return o(x), ar(x, e);
      }
    }
  }
}
async function vu(e, t, r, n, a, o, i) {
  try {
    let s = await r.queryRoute(a, {
      routeId: n,
      requestContext: o,
      unstable_respond: t.future.unstable_middleware ? (l) => l : void 0
    });
    return Q(s) ? s : typeof s == "string" ? new Response(s) : Response.json(s);
  } catch (s) {
    if (Q(s))
      return s.headers.set("X-Remix-Catch", "yes"), s;
    if (ae(s))
      return s && i(s), gu(s, e);
    if (s instanceof Error && s.message === "Expected a response from queryRoute") {
      let l = new Error(
        "Expected a Response to be returned from resource route handler"
      );
      return i(l), ar(l, e);
    }
    return i(s), ar(s, e);
  }
}
function gu(e, t) {
  return Response.json(
    ko(
      // @ts-expect-error This is "private" from users but intended for internal use
      e.error || new Error("Unexpected Server Error"),
      t
    ),
    {
      status: e.status,
      statusText: e.statusText,
      headers: {
        "X-Remix-Error": "yes"
      }
    }
  );
}
function ar(e, t) {
  let r = "Unexpected Server Error";
  return t !== "production" && (r += `

${String(e)}`), new Response(r, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
function wu(e) {
  let t = e.headers.get("Content-Type");
  return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
function Mr(e) {
  return `__flash_${e}__`;
}
var Uo = (e = {}, t = "") => {
  let r = new Map(Object.entries(e));
  return {
    get id() {
      return t;
    },
    get data() {
      return Object.fromEntries(r);
    },
    has(n) {
      return r.has(n) || r.has(Mr(n));
    },
    get(n) {
      if (r.has(n)) return r.get(n);
      let a = Mr(n);
      if (r.has(a)) {
        let o = r.get(a);
        return r.delete(a), o;
      }
    },
    set(n, a) {
      r.set(n, a);
    },
    flash(n, a) {
      r.set(Mr(n), a);
    },
    unset(n) {
      r.delete(n);
    }
  };
}, ac = (e) => e != null && typeof e.id == "string" && typeof e.data < "u" && typeof e.has == "function" && typeof e.get == "function" && typeof e.set == "function" && typeof e.flash == "function" && typeof e.unset == "function";
function Eu({
  cookie: e,
  createData: t,
  readData: r,
  updateData: n,
  deleteData: a
}) {
  let o = Fo(e) ? e : Oo((e == null ? void 0 : e.name) || "__session", e);
  return zo(o), {
    async getSession(i, s) {
      let l = i && await o.parse(i, s), u = l && await r(l);
      return Uo(u || {}, l || "");
    },
    async commitSession(i, s) {
      let { id: l, data: u } = i, d = (s == null ? void 0 : s.maxAge) != null ? new Date(Date.now() + s.maxAge * 1e3) : (s == null ? void 0 : s.expires) != null ? s.expires : o.expires;
      return l ? await n(l, u, d) : l = await t(u, d), o.serialize(l, s);
    },
    async destroySession(i, s) {
      return await a(i.id), o.serialize("", {
        ...s,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function zo(e) {
  Zt(
    e.isSigned,
    `The "${e.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://reactrouter.com/explanation/sessions-and-cookies#signing-cookies for more information.`
  );
}
function nc({ cookie: e } = {}) {
  let t = Fo(e) ? e : Oo((e == null ? void 0 : e.name) || "__session", e);
  return zo(t), {
    async getSession(r, n) {
      return Uo(
        r && await t.parse(r, n) || {}
      );
    },
    async commitSession(r, n) {
      let a = await t.serialize(r.data, n);
      if (a.length > 4096)
        throw new Error(
          "Cookie length will exceed browser maximum. Length: " + a.length
        );
      return a;
    },
    async destroySession(r, n) {
      return t.serialize("", {
        ...n,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function oc({ cookie: e } = {}) {
  let t = /* @__PURE__ */ new Map();
  return Eu({
    cookie: e,
    async createData(r, n) {
      let a = Math.random().toString(36).substring(2, 10);
      return t.set(a, { data: r, expires: n }), a;
    },
    async readData(r) {
      if (t.has(r)) {
        let { data: n, expires: a } = t.get(r);
        if (!a || a > /* @__PURE__ */ new Date())
          return n;
        a && t.delete(r);
      }
      return null;
    },
    async updateData(r, n, a) {
      t.set(r, { data: n, expires: a });
    },
    async deleteData(r) {
      t.delete(r);
    }
  });
}
function ic(e, ...t) {
  let r = t[0];
  return e.split("/").map((n) => {
    if (n === "*")
      return r ? r["*"] : void 0;
    const a = n.match(/^:([\w-]+)(\?)?/);
    if (!a) return n;
    const o = a[1], i = r ? r[o] : void 0;
    if (a[2] === void 0 && i === void 0)
      throw Error(
        `Path '${e}' requires param '${o}' but it was not provided`
      );
    return i;
  }).filter((n) => n !== void 0).join("/");
}
function bu(e) {
  if (!e) return null;
  let t = Object.entries(e), r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new Ce(
        a.status,
        a.statusText,
        a.data,
        a.internal === !0
      );
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let o = window[a.__subType];
        if (typeof o == "function")
          try {
            let i = new o(a.message);
            i.stack = a.stack, r[n] = i;
          } catch {
          }
      }
      if (r[n] == null) {
        let o = new Error(a.message);
        o.stack = a.stack, r[n] = o;
      }
    } else
      r[n] = a;
  return r;
}
function Ru(e, t, r, n, a, o) {
  let i = {
    ...e,
    loaderData: { ...e.loaderData }
  }, s = ve(t, n, a);
  if (s)
    for (let l of s) {
      let u = l.route.id, d = r(u);
      fa(
        u,
        d.clientLoader,
        d.hasLoader,
        o
      ) && (d.hasHydrateFallback || !d.hasLoader) ? delete i.loaderData[u] : d.hasLoader || (i.loaderData[u] = null);
    }
  return i;
}
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
function Su(e) {
  return /* @__PURE__ */ c.createElement(zn, { flushSync: ii.flushSync, ...e });
}
var O = null, bt = null;
function Cu() {
  if (!O && window.__reactRouterContext && window.__reactRouterManifest && window.__reactRouterRouteModules) {
    if (window.__reactRouterManifest.sri === !0) {
      const e = document.querySelector("script[rr-importmap]");
      if (e != null && e.textContent)
        try {
          window.__reactRouterManifest.sri = JSON.parse(
            e.textContent
          ).integrity;
        } catch (t) {
          console.error("Failed to parse import map", t);
        }
    }
    O = {
      context: window.__reactRouterContext,
      manifest: window.__reactRouterManifest,
      routeModules: window.__reactRouterRouteModules,
      stateDecodingPromise: void 0,
      router: void 0,
      routerInitialized: !1
    };
  }
}
function xu({
  unstable_getContext: e
}) {
  var o, i;
  if (Cu(), !O)
    throw new Error(
      "You must be using the SSR features of React Router in order to skip passing a `router` prop to `<RouterProvider>`"
    );
  let t = O;
  if (!O.stateDecodingPromise) {
    let s = O.context.stream;
    k(s, "No stream found for single fetch decoding"), O.context.stream = void 0, O.stateDecodingPromise = ca(s, window).then((l) => {
      O.context.state = l.value, t.stateDecodingPromise.value = !0;
    }).catch((l) => {
      t.stateDecodingPromise.error = l;
    });
  }
  if (O.stateDecodingPromise.error)
    throw O.stateDecodingPromise.error;
  if (!O.stateDecodingPromise.value)
    throw O.stateDecodingPromise;
  let r = mr(
    O.manifest.routes,
    O.routeModules,
    O.context.state,
    O.context.ssr,
    O.context.isSpaMode
  ), n;
  if (O.context.isSpaMode) {
    let { loaderData: s } = O.context.state;
    (o = O.manifest.routes.root) != null && o.hasLoader && s && "root" in s && (n = {
      loaderData: {
        root: s.root
      }
    });
  } else
    n = Ru(
      O.context.state,
      r,
      (s) => {
        var l, u, d;
        return {
          clientLoader: (l = O.routeModules[s]) == null ? void 0 : l.clientLoader,
          hasLoader: ((u = O.manifest.routes[s]) == null ? void 0 : u.hasLoader) === !0,
          hasHydrateFallback: ((d = O.routeModules[s]) == null ? void 0 : d.HydrateFallback) != null
        };
      },
      window.location,
      (i = window.__reactRouterContext) == null ? void 0 : i.basename,
      O.context.isSpaMode
    ), n && n.errors && (n.errors = bu(n.errors));
  let a = lr({
    routes: r,
    history: Jr(),
    basename: O.context.basename,
    unstable_getContext: e,
    hydrationData: n,
    hydrationRouteProperties: fr,
    mapRouteProperties: dt,
    future: {
      unstable_middleware: O.context.future.unstable_middleware
    },
    dataStrategy: rs(
      () => a,
      O.manifest,
      O.routeModules,
      O.context.ssr,
      O.context.basename
    ),
    patchRoutesOnNavigation: gs(
      O.manifest,
      O.routeModules,
      O.context.ssr,
      O.context.routeDiscovery,
      O.context.isSpaMode,
      O.context.basename
    )
  });
  return O.router = a, a.state.initialized && (O.routerInitialized = !0, a.initialize()), a.createRoutesForHMR = /* spacer so ts-ignore does not affect the right hand of the assignment */
  fs, window.__reactRouterDataRouter = a, a;
}
function lc(e) {
  bt || (bt = xu({
    unstable_getContext: e.unstable_getContext
  }));
  let [t, r] = c.useState(
    process.env.NODE_ENV === "development" ? O == null ? void 0 : O.context.criticalCss : void 0
  );
  process.env.NODE_ENV === "development" && O && (window.__reactRouterClearCriticalCss = () => r(void 0));
  let [n, a] = c.useState(bt.state.location);
  return c.useLayoutEffect(() => {
    O && O.router && !O.routerInitialized && (O.routerInitialized = !0, O.router.initialize());
  }, []), c.useLayoutEffect(() => {
    if (O && O.router)
      return O.router.subscribe((o) => {
        o.location !== n && a(o.location);
      });
  }, [n]), k(O, "ssrInfo unavailable for HydratedRouter"), ws(
    bt,
    O.manifest,
    O.routeModules,
    O.context.ssr,
    O.context.routeDiscovery,
    O.context.isSpaMode
  ), // This fragment is important to ensure we match the <ServerRouter> JSX
  // structure so that useId values hydrate correctly
  /* @__PURE__ */ c.createElement(c.Fragment, null, /* @__PURE__ */ c.createElement(
    rt.Provider,
    {
      value: {
        manifest: O.manifest,
        routeModules: O.routeModules,
        future: O.context.future,
        criticalCss: t,
        ssr: O.context.ssr,
        isSpaMode: O.context.isSpaMode,
        routeDiscovery: O.context.routeDiscovery
      }
    },
    /* @__PURE__ */ c.createElement(fo, { location: n }, /* @__PURE__ */ c.createElement(Su, { router: bt }))
  ), /* @__PURE__ */ c.createElement(c.Fragment, null));
}
export {
  $u as Await,
  Wu as BrowserRouter,
  Co as Form,
  Vu as HashRouter,
  lc as HydratedRouter,
  Ge as IDLE_BLOCKER,
  Yr as IDLE_FETCHER,
  zt as IDLE_NAVIGATION,
  So as Link,
  ju as Links,
  ku as MemoryRouter,
  Uu as Meta,
  Ms as NavLink,
  Nu as Navigate,
  fi as NavigationType,
  bl as Outlet,
  wo as PrefetchPageLinks,
  Rl as Route,
  tt as Router,
  Su as RouterProvider,
  Au as Routes,
  Ps as Scripts,
  Os as ScrollRestoration,
  qu as ServerRouter,
  Qu as StaticRouter,
  js as StaticRouterProvider,
  Ue as UNSAFE_DataRouterContext,
  qe as UNSAFE_DataRouterStateContext,
  Ce as UNSAFE_ErrorResponseImpl,
  dr as UNSAFE_FetchersContext,
  rt as UNSAFE_FrameworkContext,
  ct as UNSAFE_LocationContext,
  ge as UNSAFE_NavigationContext,
  fo as UNSAFE_RemixErrorBoundary,
  we as UNSAFE_RouteContext,
  nu as UNSAFE_ServerMode,
  Te as UNSAFE_SingleFetchRedirectSymbol,
  cr as UNSAFE_ViewTransitionContext,
  Jr as UNSAFE_createBrowserHistory,
  mr as UNSAFE_createClientRoutes,
  fs as UNSAFE_createClientRoutesWithHMRRevalidationOptOut,
  lr as UNSAFE_createRouter,
  ca as UNSAFE_decodeViaTurboStream,
  bu as UNSAFE_deserializeErrors,
  Ru as UNSAFE_getHydrationData,
  gs as UNSAFE_getPatchRoutesOnNavigationFunction,
  rs as UNSAFE_getTurboStreamSingleFetchDataStrategy,
  fr as UNSAFE_hydrationRouteProperties,
  k as UNSAFE_invariant,
  dt as UNSAFE_mapRouteProperties,
  fa as UNSAFE_shouldHydrateRouteLoader,
  ws as UNSAFE_useFogOFWarDiscovery,
  $s as UNSAFE_useScrollRestoration,
  xl as UNSAFE_withComponentProps,
  Ll as UNSAFE_withErrorBoundaryProps,
  Pl as UNSAFE_withHydrateFallbackProps,
  zu as createBrowserRouter,
  Oo as createCookie,
  nc as createCookieSessionStorage,
  Bu as createHashRouter,
  vl as createMemoryRouter,
  oc as createMemorySessionStorage,
  me as createPath,
  rc as createRequestHandler,
  qt as createRoutesFromChildren,
  Hu as createRoutesFromElements,
  ec as createRoutesStub,
  $r as createSearchParams,
  Uo as createSession,
  Eu as createSessionStorage,
  Zu as createStaticHandler,
  Bs as createStaticRouter,
  Ni as data,
  Lu as generatePath,
  ic as href,
  Fo as isCookie,
  ae as isRouteErrorResponse,
  ac as isSession,
  St as matchPath,
  ve as matchRoutes,
  xe as parsePath,
  ir as redirect,
  Ai as redirectDocument,
  Iu as renderMatches,
  $i as replace,
  _i as resolvePath,
  Ts as unstable_HistoryRouter,
  $e as unstable_RouterContextProvider,
  Pu as unstable_createContext,
  tc as unstable_setDevServerHooks,
  Gu as unstable_usePrompt,
  oa as useActionData,
  Fu as useAsyncError,
  hl as useAsyncValue,
  Ku as useBeforeUnload,
  pl as useBlocker,
  Yu as useFetcher,
  Xu as useFetchers,
  As as useFormAction,
  rl as useHref,
  et as useInRouterContext,
  Fs as useLinkClickHandler,
  na as useLoaderData,
  Ee as useLocation,
  _u as useMatch,
  aa as useMatches,
  Zr as useNavigate,
  fl as useNavigation,
  Du as useNavigationType,
  nl as useOutlet,
  Tu as useOutletContext,
  qr as useParams,
  Dt as useResolvedPath,
  Mu as useRevalidator,
  ia as useRouteError,
  Ou as useRouteLoaderData,
  ol as useRoutes,
  Ju as useSearchParams,
  Po as useSubmit,
  Is as useViewTransitionState
};
