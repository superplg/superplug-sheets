var kn = Object.defineProperty;
var lr = (t) => {
  throw TypeError(t);
};
var En = (t, e, r) => e in t ? kn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var he = (t, e, r) => En(t, typeof e != "symbol" ? e + "" : e, r), ar = (t, e, r) => e.has(t) || lr("Cannot " + r);
var ie = (t, e, r) => (ar(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Nt = (t, e, r) => e.has(t) ? lr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Tt = (t, e, r, n) => (ar(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Sn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sn);
const Pt = 1, Vt = 2, mr = 4, Cn = 8, $n = 16, qn = 1, In = 4, Nn = 8, Tn = 16, An = 4, zn = 1, On = 2, br = "[", Jt = "[!", Gt = "]", je = {}, ae = Symbol(), xr = !1;
function mt(t) {
  console.warn("hydration_mismatch");
}
var Yt = Array.isArray, Kt = Array.from, ct = Object.keys, dt = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Hn = Object.prototype, Mn = Array.prototype, zt = Object.getPrototypeOf;
function Un(t) {
  return typeof t == "function";
}
const Ye = () => {
};
function yr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Ee = 2, wr = 4, bt = 8, xt = 16, me = 32, et = 64, Ge = 128, ft = 256, oe = 512, Te = 1024, tt = 2048, pe = 4096, rt = 8192, kr = 16384, yt = 32768, Ln = 1 << 18, Er = 1 << 19, De = Symbol("$state"), jn = Symbol("");
function Sr(t) {
  return t === this.v;
}
function Dn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Cr(t) {
  return !Dn(t, this.v);
}
function Bn() {
  throw new Error("effect_update_depth_exceeded");
}
function Fn() {
  throw new Error("hydration_failed");
}
function Pn(t) {
  throw new Error("props_invalid_value");
}
function Vn() {
  throw new Error("state_descriptors_fixed");
}
function Jn() {
  throw new Error("state_prototype_fixed");
}
function Gn() {
  throw new Error("state_unsafe_local_read");
}
function Yn() {
  throw new Error("state_unsafe_mutation");
}
let $r = !1;
function ce(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Sr,
    version: 0
  };
}
function ke(t) {
  return /* @__PURE__ */ Kn(ce(t));
}
// @__NO_SIDE_EFFECTS__
function Wt(t, e = !1) {
  const r = ce(t);
  return e || (r.equals = Cr), r;
}
// @__NO_SIDE_EFFECTS__
function Kn(t) {
  return B !== null && B.f & Ee && (_e === null ? ri([t]) : _e.push(t)), t;
}
function J(t, e) {
  return B !== null && ii() && B.f & (Ee | xt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (_e === null || !_e.includes(t)) && Yn(), Ot(t, e);
}
function Ot(t, e) {
  return t.equals(e) || (t.v = e, t.version = Fr(), qr(t, Te), R !== null && R.f & oe && !(R.f & me) && (X !== null && X.includes(t) ? (Se(R, Te), St(R)) : Ie === null ? ni([t]) : Ie.push(t))), e;
}
function qr(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var l = r[i], a = l.f;
      a & Te || (Se(l, e), a & (oe | Ge) && (a & Ee ? qr(
        /** @type {Derived} */
        l,
        tt
      ) : St(
        /** @type {Effect} */
        l
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  var e = Ee | Te;
  R === null ? e |= Ge : R.f |= Er;
  const r = {
    children: null,
    ctx: ge,
    deps: null,
    equals: Sr,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: R
  };
  if (B !== null && B.f & Ee) {
    var n = (
      /** @type {Derived} */
      B
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function Ir(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & Ee ? Zt(
        /** @type {Derived} */
        n
      ) : ze(
        /** @type {Effect} */
        n
      );
    }
  }
}
function Nr(t) {
  var e, r = R;
  le(t.parent);
  try {
    Ir(t), e = Pr(t);
  } finally {
    le(r);
  }
  return e;
}
function Tr(t) {
  var e = Nr(t), r = (Le || t.f & Ge) && t.deps !== null ? tt : oe;
  Se(t, r), t.equals(e) || (t.v = e, t.version = Fr());
}
function Zt(t) {
  Ir(t), Qe(t, 0), Se(t, rt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Wn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function nt(t, e, r, n = !0) {
  var i = (t & et) !== 0, l = R, a = {
    ctx: ge,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Te,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : l,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var s = Be;
    try {
      sr(!0), Et(a), a.f |= kr;
    } catch (d) {
      throw ze(a), d;
    } finally {
      sr(s);
    }
  } else e !== null && St(a);
  var o = r && a.deps === null && a.first === null && a.nodes_start === null && a.teardown === null && (a.f & Er) === 0;
  if (!o && !i && n && (l !== null && Wn(a, l), B !== null && B.f & Ee)) {
    var u = (
      /** @type {Derived} */
      B
    );
    (u.children ?? (u.children = [])).push(a);
  }
  return a;
}
function Ar(t) {
  const e = nt(et, t, !0);
  return () => {
    ze(e);
  };
}
function it(t) {
  return nt(wr, t, !1);
}
function Xt(t) {
  return nt(bt, t, !0);
}
function N(t) {
  return wt(t);
}
function wt(t, e = 0) {
  return nt(bt | xt | e, t, !0);
}
function Ve(t, e = !0) {
  return nt(bt | me, t, !0, e);
}
function zr(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = B;
    fe(null);
    try {
      e.call(null);
    } finally {
      fe(r);
    }
  }
}
function Or(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Zt(e[r]);
  }
}
function Rr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    ze(r, e), r = n;
  }
}
function Zn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & me || ze(e), e = r;
  }
}
function ze(t, e = !0) {
  var r = !1;
  if ((e || t.f & Ln) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var l = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(n)
      );
      n.remove(), n = l;
    }
    r = !0;
  }
  Rr(t, e && !r), Or(t), Qe(t, 0), Se(t, rt);
  var a = t.transitions;
  if (a !== null)
    for (const o of a)
      o.stop();
  zr(t);
  var s = t.parent;
  s !== null && s.first !== null && Hr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Hr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Rt(t, e) {
  var r = [];
  Qt(t, r, !0), Mr(r, () => {
    ze(t), e && e();
  });
}
function Mr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function Qt(t, e, r) {
  if (!(t.f & pe)) {
    if (t.f ^= pe, t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || r) && e.push(a);
    for (var n = t.first; n !== null; ) {
      var i = n.next, l = (n.f & yt) !== 0 || (n.f & me) !== 0;
      Qt(n, e, l ? r : !1), n = i;
    }
  }
}
function ht(t) {
  Ur(t, !0);
}
function Ur(t, e) {
  if (t.f & pe) {
    lt(t) && Et(t), t.f ^= pe;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & yt) !== 0 || (r.f & me) !== 0;
      Ur(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || e) && l.in();
  }
}
const Xn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let pt = !1, _t = !1, Ht = [], Mt = [];
function Lr() {
  pt = !1;
  const t = Ht.slice();
  Ht = [], yr(t);
}
function jr() {
  _t = !1;
  const t = Mt.slice();
  Mt = [], yr(t);
}
function kt(t) {
  pt || (pt = !0, queueMicrotask(Lr)), Ht.push(t);
}
function Qn(t) {
  _t || (_t = !0, Xn(jr)), Mt.push(t);
}
function ei() {
  pt && Lr(), _t && jr();
}
const Dr = 0, ti = 1;
let ut = Dr, Xe = !1, Be = !1;
function sr(t) {
  Be = t;
}
let Re = [], Fe = 0;
let B = null;
function fe(t) {
  B = t;
}
let R = null;
function le(t) {
  R = t;
}
let _e = null;
function ri(t) {
  _e = t;
}
let X = null, se = 0, Ie = null;
function ni(t) {
  Ie = t;
}
let Br = 0, Le = !1, ge = null;
function Fr() {
  return ++Br;
}
function ii() {
  return !$r;
}
function lt(t) {
  var a, s;
  var e = t.f;
  if (e & Te)
    return !0;
  if (e & tt) {
    var r = t.deps, n = (e & Ge) !== 0;
    if (r !== null) {
      var i;
      if (e & ft) {
        for (i = 0; i < r.length; i++)
          ((a = r[i]).reactions ?? (a.reactions = [])).push(t);
        t.f ^= ft;
      }
      for (i = 0; i < r.length; i++) {
        var l = r[i];
        if (lt(
          /** @type {Derived} */
          l
        ) && Tr(
          /** @type {Derived} */
          l
        ), n && R !== null && !Le && !((s = l == null ? void 0 : l.reactions) != null && s.includes(t)) && (l.reactions ?? (l.reactions = [])).push(t), l.version > t.version)
          return !0;
      }
    }
    n || Se(t, oe);
  }
  return !1;
}
function li(t, e, r) {
  throw t;
}
function Pr(t) {
  var v;
  var e = X, r = se, n = Ie, i = B, l = Le, a = _e, s = ge, o = t.f;
  X = /** @type {null | Value[]} */
  null, se = 0, Ie = null, B = o & (me | et) ? null : t, Le = !Be && (o & Ge) !== 0, _e = null, ge = t.ctx;
  try {
    var u = (
      /** @type {Function} */
      (0, t.fn)()
    ), d = t.deps;
    if (X !== null) {
      var c;
      if (Qe(t, se), d !== null && se > 0)
        for (d.length = se + X.length, c = 0; c < X.length; c++)
          d[se + c] = X[c];
      else
        t.deps = d = X;
      if (!Le)
        for (c = se; c < d.length; c++)
          ((v = d[c]).reactions ?? (v.reactions = [])).push(t);
    } else d !== null && se < d.length && (Qe(t, se), d.length = se);
    return u;
  } finally {
    X = e, se = r, Ie = n, B = i, Le = l, _e = a, ge = s;
  }
}
function ai(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = r.indexOf(t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && e.f & Ee && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (X === null || !X.includes(e)) && (Se(e, tt), e.f & (Ge | ft) || (e.f ^= ft), Qe(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Qe(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      ai(t, r[n]);
}
function Et(t) {
  var e = t.f;
  if (!(e & rt)) {
    Se(t, oe);
    var r = R;
    R = t;
    try {
      e & xt ? Zn(t) : Rr(t), Or(t), zr(t);
      var n = Pr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Br;
    } catch (i) {
      li(
        /** @type {Error} */
        i
      );
    } finally {
      R = r;
    }
  }
}
function Vr() {
  Fe > 1e3 && (Fe = 0, Bn()), Fe++;
}
function Jr(t) {
  var e = t.length;
  if (e !== 0) {
    Vr();
    var r = Be;
    Be = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & oe || (i.f ^= oe);
        var l = [];
        Gr(i, l), si(l);
      }
    } finally {
      Be = r;
    }
  }
}
function si(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (rt | pe)) && lt(n) && (Et(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Hr(n) : n.fn = null));
    }
}
function oi() {
  if (Xe = !1, Fe > 1001)
    return;
  const t = Re;
  Re = [], Jr(t), Xe || (Fe = 0);
}
function St(t) {
  ut === Dr && (Xe || (Xe = !0, queueMicrotask(oi)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (et | me)) {
      if (!(r & oe)) return;
      e.f ^= oe;
    }
  }
  Re.push(e);
}
function Gr(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, l = (i & me) !== 0, a = l && (i & oe) !== 0;
    if (!a && !(i & pe))
      if (i & bt) {
        l ? r.f ^= oe : lt(r) && Et(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & wr && n.push(r);
    var o = r.next;
    if (o === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (t === c)
          break e;
        var u = c.next;
        if (u !== null) {
          r = u;
          continue e;
        }
        c = c.parent;
      }
    }
    r = o;
  }
  for (var d = 0; d < n.length; d++)
    s = n[d], e.push(s), Gr(s, e);
}
function Yr(t) {
  var e = ut, r = Re;
  try {
    Vr();
    const i = [];
    ut = ti, Re = i, Xe = !1, Jr(r);
    var n = t == null ? void 0 : t();
    return ei(), (Re.length > 0 || i.length > 0) && Yr(), Fe = 0, n;
  } finally {
    ut = e, Re = r;
  }
}
function p(t) {
  var s;
  var e = t.f, r = (e & Ee) !== 0;
  if (r && e & rt) {
    var n = Nr(
      /** @type {Derived} */
      t
    );
    return Zt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (B !== null) {
    _e !== null && _e.includes(t) && Gn();
    var i = B.deps;
    X === null && i !== null && i[se] === t ? se++ : X === null ? X = [t] : X.push(t), Ie !== null && R !== null && R.f & oe && !(R.f & me) && Ie.includes(t) && (Se(R, Te), St(R));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var l = (
      /** @type {Derived} */
      t
    ), a = l.parent;
    a !== null && !((s = a.deriveds) != null && s.includes(l)) && (a.deriveds ?? (a.deriveds = [])).push(l);
  }
  return r && (l = /** @type {Derived} */
  t, lt(l) && Tr(l)), t.v;
}
function gt(t) {
  const e = B;
  try {
    return B = null, t();
  } finally {
    B = e;
  }
}
const ui = ~(Te | tt | oe);
function Se(t, e) {
  t.f = t.f & ui | e;
}
function Q(t, e = !1, r) {
  ge = {
    p: ge,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function ee(t) {
  const e = ge;
  if (e !== null) {
    const a = e.e;
    if (a !== null) {
      var r = R, n = B;
      e.e = null;
      try {
        for (var i = 0; i < a.length; i++) {
          var l = a[i];
          le(l.effect), fe(l.reaction), it(l.fn);
        }
      } finally {
        le(r), fe(n);
      }
    }
    ge = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function V(t, e = null, r) {
  if (typeof t != "object" || t === null || De in t)
    return t;
  const n = zt(t);
  if (n !== Hn && n !== Mn)
    return t;
  var i = /* @__PURE__ */ new Map(), l = Yt(t), a = ce(0);
  l && i.set("length", ce(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Vn();
        var c = i.get(u);
        return c === void 0 ? (c = ce(d.value), i.set(u, c)) : J(c, V(d.value, s)), !0;
      },
      deleteProperty(o, u) {
        var d = i.get(u);
        if (d === void 0)
          u in o && i.set(u, ce(ae));
        else {
          if (l && typeof u == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(u);
            Number.isInteger(v) && v < c.v && J(c, v);
          }
          J(d, ae), or(a);
        }
        return !0;
      },
      get(o, u, d) {
        var f;
        if (u === De)
          return t;
        var c = i.get(u), v = u in o;
        if (c === void 0 && (!v || (f = He(o, u)) != null && f.writable) && (c = ce(V(v ? o[u] : ae, s)), i.set(u, c)), c !== void 0) {
          var h = p(c);
          return h === ae ? void 0 : h;
        }
        return Reflect.get(o, u, d);
      },
      getOwnPropertyDescriptor(o, u) {
        var d = Reflect.getOwnPropertyDescriptor(o, u);
        if (d && "value" in d) {
          var c = i.get(u);
          c && (d.value = p(c));
        } else if (d === void 0) {
          var v = i.get(u), h = v == null ? void 0 : v.v;
          if (v !== void 0 && h !== ae)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return d;
      },
      has(o, u) {
        var h;
        if (u === De)
          return !0;
        var d = i.get(u), c = d !== void 0 && d.v !== ae || Reflect.has(o, u);
        if (d !== void 0 || R !== null && (!c || (h = He(o, u)) != null && h.writable)) {
          d === void 0 && (d = ce(c ? V(o[u], s) : ae), i.set(u, d));
          var v = p(d);
          if (v === ae)
            return !1;
        }
        return c;
      },
      set(o, u, d, c) {
        var b;
        var v = i.get(u), h = u in o;
        if (l && u === "length")
          for (var f = d; f < /** @type {Source<number>} */
          v.v; f += 1) {
            var g = i.get(f + "");
            g !== void 0 ? J(g, ae) : f in o && (g = ce(ae), i.set(f + "", g));
          }
        v === void 0 ? (!h || (b = He(o, u)) != null && b.writable) && (v = ce(void 0), J(v, V(d, s)), i.set(u, v)) : (h = v.v !== ae, J(v, V(d, s)));
        var _ = Reflect.getOwnPropertyDescriptor(o, u);
        if (_ != null && _.set && _.set.call(c, d), !h) {
          if (l && typeof u == "string") {
            var x = (
              /** @type {Source<number>} */
              i.get("length")
            ), w = Number(u);
            Number.isInteger(w) && w >= x.v && J(x, w + 1);
          }
          or(a);
        }
        return !0;
      },
      ownKeys(o) {
        p(a);
        var u = Reflect.ownKeys(o).filter((v) => {
          var h = i.get(v);
          return h === void 0 || h.v !== ae;
        });
        for (var [d, c] of i)
          c.v !== ae && !(d in o) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        Jn();
      }
    }
  );
}
function or(t, e = 1) {
  J(t, t.v + e);
}
function ur(t) {
  return t !== null && typeof t == "object" && De in t ? t[De] : t;
}
function vi(t, e) {
  return Object.is(ur(t), ur(e));
}
var vr, Kr, Wr;
function Ut() {
  if (vr === void 0) {
    vr = window;
    var t = Element.prototype, e = Node.prototype;
    Kr = He(e, "firstChild").get, Wr = He(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Je(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ae(t) {
  return Kr.call(t);
}
// @__NO_SIDE_EFFECTS__
function be(t) {
  return Wr.call(t);
}
function y(t, e) {
  if (!U)
    return /* @__PURE__ */ Ae(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ae(j)
  );
  if (r === null)
    r = j.appendChild(Je());
  else if (e && r.nodeType !== 3) {
    var n = Je();
    return r == null || r.before(n), de(n), n;
  }
  return de(r), r;
}
function P(t, e) {
  if (!U) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ae(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ be(r) : r;
  }
  return j;
}
function I(t, e = 1, r = !1) {
  let n = U ? j : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ be(n);
  if (!U)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var l = Je();
    return n == null || n.before(l), de(l), l;
  }
  return de(n), /** @type {TemplateNode} */
  n;
}
function Zr(t) {
  t.textContent = "";
}
let U = !1;
function we(t) {
  U = t;
}
let j;
function de(t) {
  if (t === null)
    throw mt(), je;
  return j = t;
}
function Me() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(j)
  );
}
function m(t) {
  if (U) {
    if (/* @__PURE__ */ be(j) !== null)
      throw mt(), je;
    j = t;
  }
}
function ci(t = 1) {
  if (U) {
    for (var e = t, r = j; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ be(r);
    j = r;
  }
}
function Lt() {
  for (var t = 0, e = j; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Gt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === br || r === Jt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(e)
    );
    e.remove(), e = n;
  }
}
let cr = !1;
function Xr() {
  cr || (cr = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        var e;
        if (!t.defaultPrevented)
          for (
            const r of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            (e = r.__on_r) == null || e.call(r);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function di(t) {
  var e = B, r = R;
  fe(null), le(null);
  try {
    return t();
  } finally {
    fe(e), le(r);
  }
}
function Qr(t, e, r, n = r) {
  t.addEventListener(e, () => di(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, Xr();
}
const en = /* @__PURE__ */ new Set(), jt = /* @__PURE__ */ new Set();
function te(t) {
  for (var e = 0; e < t.length; e++)
    en.add(t[e]);
  for (var r of jt)
    r(t);
}
function at(t) {
  var w;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((w = t.composedPath) == null ? void 0 : w.call(t)) || [], l = (
    /** @type {null | Element} */
    i[0] || t.target
  ), a = 0, s = t.__root;
  if (s) {
    var o = i.indexOf(s);
    if (o !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    o <= u && (a = o);
  }
  if (l = /** @type {Element} */
  i[a] || t.target, l !== e) {
    dt(t, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var d = B, c = R;
    fe(null), le(null);
    try {
      for (var v, h = []; l !== null; ) {
        var f = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var g = l["__" + n];
          if (g !== void 0 && !/** @type {any} */
          l.disabled)
            if (Yt(g)) {
              var [_, ...x] = g;
              _.apply(l, [t, ...x]);
            } else
              g.call(l, t);
        } catch (b) {
          v ? h.push(b) : v = b;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        l = f;
      }
      if (v) {
        for (let b of h)
          queueMicrotask(() => {
            throw b;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fe(d), le(c);
    }
  }
}
function tn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ne(t, e) {
  var r = (
    /** @type {Effect} */
    R
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function $(t, e) {
  var r = (e & zn) !== 0, n = (e & On) !== 0, i, l = !t.startsWith("<!>");
  return () => {
    if (U)
      return Ne(j, null), j;
    i === void 0 && (i = tn(l ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ae(i)));
    var a = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(a)
      ), o = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ne(s, o);
    } else
      Ne(a, a);
    return a;
  };
}
function ne() {
  if (U)
    return Ne(j, null), j;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Je();
  return t.append(e, r), Ne(e, r), t;
}
function E(t, e) {
  if (U) {
    R.nodes_end = j, Me();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const fi = ["touchstart", "touchmove"];
function hi(t) {
  return fi.includes(t);
}
let Dt = !0;
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function rn(t, e) {
  return nn(t, e);
}
function pi(t, e) {
  Ut(), e.intro = e.intro ?? !1;
  const r = e.target, n = U, i = j;
  try {
    for (var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(r)
    ); l && (l.nodeType !== 8 || /** @type {Comment} */
    l.data !== br); )
      l = /** @type {TemplateNode} */
      /* @__PURE__ */ be(l);
    if (!l)
      throw je;
    we(!0), de(
      /** @type {Comment} */
      l
    ), Me();
    const a = nn(t, { ...e, anchor: l });
    if (j === null || j.nodeType !== 8 || /** @type {Comment} */
    j.data !== Gt)
      throw mt(), je;
    return we(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === je)
      return e.recover === !1 && Fn(), Ut(), Zr(r), we(!1), rn(t, e);
    throw a;
  } finally {
    we(n), de(i);
  }
}
const Ue = /* @__PURE__ */ new Map();
function nn(t, { target: e, anchor: r, props: n = {}, events: i, context: l, intro: a = !0 }) {
  Ut();
  var s = /* @__PURE__ */ new Set(), o = (c) => {
    for (var v = 0; v < c.length; v++) {
      var h = c[v];
      if (!s.has(h)) {
        s.add(h);
        var f = hi(h);
        e.addEventListener(h, at, { passive: f });
        var g = Ue.get(h);
        g === void 0 ? (document.addEventListener(h, at, { passive: f }), Ue.set(h, 1)) : Ue.set(h, g + 1);
      }
    }
  };
  o(Kt(en)), jt.add(o);
  var u = void 0, d = Ar(() => {
    var c = r ?? e.appendChild(Je());
    return Ve(() => {
      if (l) {
        Q({});
        var v = (
          /** @type {ComponentContext} */
          ge
        );
        v.c = l;
      }
      i && (n.$$events = i), U && Ne(
        /** @type {TemplateNode} */
        c,
        null
      ), Dt = a, u = t(c, n) || {}, Dt = !0, U && (R.nodes_end = j), l && ee();
    }), () => {
      var f;
      for (var v of s) {
        e.removeEventListener(v, at);
        var h = (
          /** @type {number} */
          Ue.get(v)
        );
        --h === 0 ? (document.removeEventListener(v, at), Ue.delete(v)) : Ue.set(v, h);
      }
      jt.delete(o), Bt.delete(u), c !== r && ((f = c.parentNode) == null || f.removeChild(c));
    };
  });
  return Bt.set(u, d), u;
}
let Bt = /* @__PURE__ */ new WeakMap();
function _i(t) {
  const e = Bt.get(t);
  e && e();
}
function z(t, e, r, n = null, i = !1) {
  U && Me();
  var l = t, a = null, s = null, o = null, u = i ? yt : 0;
  wt(() => {
    if (o === (o = !!e())) return;
    let d = !1;
    if (U) {
      const c = (
        /** @type {Comment} */
        l.data === Jt
      );
      o === c && (l = Lt(), de(l), we(!1), d = !0);
    }
    o ? (a ? ht(a) : a = Ve(() => r(l)), s && Rt(s, () => {
      s = null;
    })) : (s ? ht(s) : n && (s = Ve(() => n(l))), a && Rt(a, () => {
      a = null;
    })), d && we(!0);
  }, u), U && (l = j);
}
function K(t, e) {
  return e;
}
function gi(t, e, r, n) {
  for (var i = [], l = e.length, a = 0; a < l; a++)
    Qt(e[a].e, i, !0);
  var s = l > 0 && i.length === 0 && r !== null;
  if (s) {
    var o = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Zr(o), o.append(
      /** @type {Element} */
      r
    ), n.clear(), $e(t, e[0].prev, e[l - 1].next);
  }
  Mr(i, () => {
    for (var u = 0; u < l; u++) {
      var d = e[u];
      s || (n.delete(d.k), $e(t, d.prev, d.next)), ze(d.e, !s);
    }
  });
}
function W(t, e, r, n, i, l = null) {
  var a = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, o = (e & mr) !== 0;
  if (o) {
    var u = (
      /** @type {Element} */
      t
    );
    a = U ? de(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ae(u)
    ) : u.appendChild(Je());
  }
  U && Me();
  var d = null, c = !1;
  wt(() => {
    var v = r(), h = Yt(v) ? v : v == null ? [] : Kt(v), f = h.length;
    if (c && f === 0)
      return;
    c = f === 0;
    let g = !1;
    if (U) {
      var _ = (
        /** @type {Comment} */
        a.data === Jt
      );
      _ !== (f === 0) && (a = Lt(), de(a), we(!1), g = !0);
    }
    if (U) {
      for (var x = null, w, b = 0; b < f; b++) {
        if (j.nodeType === 8 && /** @type {Comment} */
        j.data === Gt) {
          a = /** @type {Comment} */
          j, g = !0, we(!1);
          break;
        }
        var S = h[b], k = n(S, b);
        w = ln(j, s, x, null, S, k, b, i, e), s.items.set(k, w), x = w;
      }
      f > 0 && de(Lt());
    }
    if (!U) {
      var q = (
        /** @type {Effect} */
        B
      );
      mi(h, s, a, i, e, (q.f & pe) !== 0, n);
    }
    l !== null && (f === 0 ? d ? ht(d) : d = Ve(() => l(a)) : d !== null && Rt(d, () => {
      d = null;
    })), g && we(!0), r();
  }), U && (a = j);
}
function mi(t, e, r, n, i, l, a) {
  var Z, ue, Ce, Oe;
  var s = (i & Cn) !== 0, o = (i & (Pt | Vt)) !== 0, u = t.length, d = e.items, c = e.first, v = c, h, f = null, g, _ = [], x = [], w, b, S, k;
  if (s)
    for (k = 0; k < u; k += 1)
      w = t[k], b = a(w, k), S = d.get(b), S !== void 0 && ((Z = S.a) == null || Z.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(S));
  for (k = 0; k < u; k += 1) {
    if (w = t[k], b = a(w, k), S = d.get(b), S === void 0) {
      var q = v ? (
        /** @type {TemplateNode} */
        v.e.nodes_start
      ) : r;
      f = ln(
        q,
        e,
        f,
        f === null ? e.first : f.next,
        w,
        b,
        k,
        n,
        i
      ), d.set(b, f), _ = [], x = [], v = f.next;
      continue;
    }
    if (o && bi(S, w, k, i), S.e.f & pe && (ht(S.e), s && ((ue = S.a) == null || ue.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(S))), S !== v) {
      if (h !== void 0 && h.has(S)) {
        if (_.length < x.length) {
          var O = x[0], A;
          f = O.prev;
          var H = _[0], F = _[_.length - 1];
          for (A = 0; A < _.length; A += 1)
            dr(_[A], O, r);
          for (A = 0; A < x.length; A += 1)
            h.delete(x[A]);
          $e(e, H.prev, F.next), $e(e, f, H), $e(e, F, O), v = O, f = F, k -= 1, _ = [], x = [];
        } else
          h.delete(S), dr(S, v, r), $e(e, S.prev, S.next), $e(e, S, f === null ? e.first : f.next), $e(e, f, S), f = S;
        continue;
      }
      for (_ = [], x = []; v !== null && v.k !== b; )
        (l || !(v.e.f & pe)) && (h ?? (h = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      S = v;
    }
    _.push(S), f = S, v = S.next;
  }
  if (v !== null || h !== void 0) {
    for (var D = h === void 0 ? [] : Kt(h); v !== null; )
      (l || !(v.e.f & pe)) && D.push(v), v = v.next;
    var L = D.length;
    if (L > 0) {
      var re = i & mr && u === 0 ? r : null;
      if (s) {
        for (k = 0; k < L; k += 1)
          (Ce = D[k].a) == null || Ce.measure();
        for (k = 0; k < L; k += 1)
          (Oe = D[k].a) == null || Oe.fix();
      }
      gi(e, D, re, d);
    }
  }
  s && kt(() => {
    var xe;
    if (g !== void 0)
      for (S of g)
        (xe = S.a) == null || xe.apply();
  }), R.first = e.first && e.first.e, R.last = f && f.e;
}
function bi(t, e, r, n) {
  n & Pt && Ot(t.v, e), n & Vt ? Ot(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function ln(t, e, r, n, i, l, a, s, o) {
  var u = (o & Pt) !== 0, d = (o & $n) === 0, c = u ? d ? /* @__PURE__ */ Wt(i) : ce(i) : i, v = o & Vt ? ce(a) : a, h = {
    i: v,
    v: c,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return h.e = Ve(() => s(t, c, v), U), h.e.prev = r && r.e, h.e.next = n && n.e, r === null ? e.first = h : (r.next = h, r.e.next = h.e), n !== null && (n.prev = h, n.e.prev = h.e), h;
  } finally {
  }
}
function dr(t, e, r) {
  for (var n = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : r, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); l !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(l)
    );
    i.before(l), l = a;
  }
}
function $e(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function xi(t, e, r, n, i) {
  var l = t, a = "", s;
  wt(() => {
    if (a === (a = e() ?? "")) {
      U && Me();
      return;
    }
    s !== void 0 && (ze(s), s = void 0), a !== "" && (s = Ve(() => {
      if (U) {
        j.data;
        for (var o = Me(), u = o; o !== null && (o.nodeType !== 8 || /** @type {Comment} */
        o.data !== ""); )
          u = o, o = /** @type {TemplateNode} */
          /* @__PURE__ */ be(o);
        if (o === null)
          throw mt(), je;
        Ne(j, u), l = de(o);
        return;
      }
      var d = a + "", c = tn(d);
      Ne(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), l.before(c);
    }));
  });
}
function er(t, e, r, n, i) {
  var s;
  U && Me();
  var l = (s = e.$$slots) == null ? void 0 : s[r], a = !1;
  l === !0 && (l = e.children, a = !0), l === void 0 || l(t, a ? () => n : n);
}
function G(t, e) {
  kt(() => {
    var r = t.getRootNode(), n = (
      /** @type {ShadowRoot} */
      r.host ? (
        /** @type {ShadowRoot} */
        r
      ) : (
        /** @type {Document} */
        r.head ?? /** @type {Document} */
        r.ownerDocument.head
      )
    );
    if (!n.querySelector("#" + e.hash)) {
      const i = document.createElement("style");
      i.id = e.hash, i.textContent = e.code, n.appendChild(i);
    }
  });
}
function Ct(t) {
  if (U) {
    var e = !1, r = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var n = t.value;
          T(t, "value", null), t.value = n;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          T(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = r, Qn(r), Xr();
  }
}
function T(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  U && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[jn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && an(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function At(t, e, r) {
  var n = B, i = R;
  fe(null), le(null);
  try {
    an(t).includes(e) ? t[e] = r : T(t, e, r);
  } finally {
    fe(n), le(i);
  }
}
var fr = /* @__PURE__ */ new Map();
function an(t) {
  var e = fr.get(t.nodeName);
  if (e) return e;
  fr.set(t.nodeName, e = []);
  for (var r, n = zt(t), i = Element.prototype; i !== n; ) {
    r = Rn(n);
    for (var l in r)
      r[l].set && e.push(l);
    n = zt(n);
  }
  return e;
}
function Ke(t, e) {
  var r = t.__className, n = yi(e);
  U && t.className === n ? t.__className = n : (r !== n || U && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function yi(t) {
  return t ?? "";
}
function Pe(t, e, r) {
  if (r) {
    if (t.classList.contains(e)) return;
    t.classList.add(e);
  } else {
    if (!t.classList.contains(e)) return;
    t.classList.remove(e);
  }
}
const wi = () => performance.now(), qe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => wi(),
  tasks: /* @__PURE__ */ new Set()
};
function sn(t) {
  qe.tasks.forEach((e) => {
    e.c(t) || (qe.tasks.delete(e), e.f());
  }), qe.tasks.size !== 0 && qe.tick(sn);
}
function ki(t) {
  let e;
  return qe.tasks.size === 0 && qe.tick(sn), {
    promise: new Promise((r) => {
      qe.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      qe.tasks.delete(e);
    }
  };
}
function st(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ei(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function hr(t) {
  const e = {}, r = t.split(";");
  for (const n of r) {
    const [i, l] = n.split(":");
    if (!i || l === void 0) break;
    const a = Ei(i.trim());
    e[a] = l.trim();
  }
  return e;
}
const Si = (t) => t;
function Ci(t, e, r, n) {
  var i = (t & An) !== 0, l = "both", a, s = e.inert, o, u;
  function d() {
    var g = B, _ = R;
    fe(null), le(null);
    try {
      return a ?? (a = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: l
      }));
    } finally {
      fe(g), le(_);
    }
  }
  var c = {
    is_global: i,
    in() {
      e.inert = s, st(e, "introstart"), o = Ft(e, d(), u, 1, () => {
        st(e, "introend"), o == null || o.abort(), o = a = void 0;
      });
    },
    out(g) {
      e.inert = !0, st(e, "outrostart"), u = Ft(e, d(), o, 0, () => {
        st(e, "outroend"), g == null || g();
      });
    },
    stop: () => {
      o == null || o.abort(), u == null || u.abort();
    }
  }, v = (
    /** @type {Effect} */
    R
  );
  if ((v.transitions ?? (v.transitions = [])).push(c), Dt) {
    var h = i;
    if (!h) {
      for (var f = (
        /** @type {Effect | null} */
        v.parent
      ); f && f.f & yt; )
        for (; (f = f.parent) && !(f.f & xt); )
          ;
      h = !f || (f.f & kr) !== 0;
    }
    h && it(() => {
      gt(() => c.in());
    });
  }
}
function Ft(t, e, r, n, i) {
  var l = n === 1;
  if (Un(e)) {
    var a, s = !1;
    return kt(() => {
      if (!s) {
        var _ = e({ direction: l ? "in" : "out" });
        a = Ft(t, _, r, n, i);
      }
    }), {
      abort: () => {
        s = !0, a == null || a.abort();
      },
      deactivate: () => a.deactivate(),
      reset: () => a.reset(),
      t: () => a.t()
    };
  }
  if (r == null || r.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: Ye,
      deactivate: Ye,
      reset: Ye,
      t: () => n
    };
  const { delay: o = 0, css: u, tick: d, easing: c = Si } = e;
  var v = [];
  if (l && r === void 0 && (d && d(0, 1), u)) {
    var h = hr(u(0, 1));
    v.push(h, h);
  }
  var f = () => 1 - n, g = t.animate(v, { duration: o });
  return g.onfinish = () => {
    var _ = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var x = n - _, w = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), b = [];
    if (w > 0) {
      if (u)
        for (var S = Math.ceil(w / 16.666666666666668), k = 0; k <= S; k += 1) {
          var q = _ + x * c(k / S), O = u(q, 1 - q);
          b.push(hr(O));
        }
      f = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return _ + x * c(A / w);
      }, d && ki(() => {
        if (g.playState !== "running") return !1;
        var A = f();
        return d(A, 1 - A), !0;
      });
    }
    g = t.animate(b, { duration: w, fill: "forwards" }), g.onfinish = () => {
      f = () => n, d == null || d(n, 1 - n), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = Ye);
    },
    deactivate: () => {
      i = Ye;
    },
    reset: () => {
      n === 0 && (d == null || d(1, 0));
    },
    t: () => f()
  };
}
function $t(t, e, r = e) {
  Qr(t, "input", () => {
    var n = pr(t) ? _r(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Xt(() => {
    var n = e();
    if (U && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    pr(t) && n === _r(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function pr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function _r(t) {
  return t === "" ? null : +t;
}
function on(t, e, r) {
  if (t.multiple)
    return qi(t, e);
  for (var n of t.options) {
    var i = We(n);
    if (vi(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function $i(t, e) {
  it(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      on(t, n);
    });
    return r.observe(t, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      r.disconnect();
    };
  });
}
function un(t, e, r = e) {
  var n = !0;
  Qr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), We);
    else {
      var l = t.querySelector(":checked");
      i = l && We(l);
    }
    r(i);
  }), it(() => {
    var i = e();
    if (on(t, i, n), n && i === void 0) {
      var l = t.querySelector(":checked");
      l !== null && (i = We(l), r(i));
    }
    t.__value = i, n = !1;
  }), $i(t);
}
function qi(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(We(r));
}
function We(t) {
  return "__value" in t ? t.__value : t.value;
}
function gr(t, e) {
  return t === e || (t == null ? void 0 : t[De]) === e;
}
function vn(t = {}, e, r, n) {
  return it(() => {
    var i, l;
    return Xt(() => {
      i = l, l = (n == null ? void 0 : n()) || [], gt(() => {
        t !== r(...l) && (e(t, ...l), i && gr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      kt(() => {
        l && gr(r(...l), t) && e(null, ...l);
      });
    };
  }), t;
}
let ot = !1;
function Ii(t) {
  var e = ot;
  try {
    return ot = !1, [t(), ot];
  } finally {
    ot = e;
  }
}
function Ni(t) {
  for (var e = R, r = R; e !== null && !(e.f & (me | et)); )
    e = e.parent;
  try {
    return le(e), t();
  } finally {
    le(r);
  }
}
function C(t, e, r, n) {
  var k;
  var i = (r & qn) !== 0, l = !$r, a = (r & Nn) !== 0, s = (r & Tn) !== 0, o = !1, u;
  a ? [u, o] = Ii(() => (
    /** @type {V} */
    t[e]
  )) : u = /** @type {V} */
  t[e];
  var d = (k = He(t, e)) == null ? void 0 : k.set, c = (
    /** @type {V} */
    n
  ), v = !0, h = !1, f = () => (h = !0, v && (v = !1, s ? c = gt(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  u === void 0 && n !== void 0 && (d && l && Pn(), u = f(), d && d(u));
  var g;
  if (g = () => {
    var q = (
      /** @type {V} */
      t[e]
    );
    return q === void 0 ? f() : (v = !0, h = !1, q);
  }, !(r & In))
    return g;
  if (d) {
    var _ = t.$$legacy;
    return function(q, O) {
      return arguments.length > 0 ? ((!O || _ || o) && d(O ? g() : q), q) : g();
    };
  }
  var x = !1, w = !1, b = /* @__PURE__ */ Wt(u), S = Ni(
    () => /* @__PURE__ */ Ze(() => {
      var q = g(), O = p(b);
      return x ? (x = !1, w = !0, O) : (w = !1, b.v = q);
    })
  );
  return i || (S.equals = Cr), function(q, O) {
    if (arguments.length > 0) {
      const A = O ? p(S) : a ? V(q) : q;
      return S.equals(A) || (x = !0, J(b, A), h && c !== void 0 && (c = A), gt(() => p(S))), q;
    }
    return p(S);
  };
}
function Ti(t) {
  return new Ai(t);
}
var ye, ve;
class Ai {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    Nt(this, ye);
    /** @type {Record<string, any>} */
    Nt(this, ve);
    var l;
    var r = /* @__PURE__ */ new Map(), n = (a, s) => {
      var o = /* @__PURE__ */ Wt(s);
      return r.set(a, o), o;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(a, s) {
          return p(r.get(s) ?? n(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return p(r.get(s) ?? n(s, Reflect.get(a, s))), Reflect.has(a, s);
        },
        set(a, s, o) {
          return J(r.get(s) ?? n(s, o), o), Reflect.set(a, s, o);
        }
      }
    );
    Tt(this, ve, (e.hydrate ? pi : rn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((l = e == null ? void 0 : e.props) != null && l.$$host) || e.sync === !1) && Yr(), Tt(this, ye, i.$$events);
    for (const a of Object.keys(ie(this, ve)))
      a === "$set" || a === "$destroy" || a === "$on" || dt(this, a, {
        get() {
          return ie(this, ve)[a];
        },
        /** @param {any} value */
        set(s) {
          ie(this, ve)[a] = s;
        },
        enumerable: !0
      });
    ie(this, ve).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(i, a);
    }, ie(this, ve).$destroy = () => {
      _i(ie(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ie(this, ve).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    ie(this, ye)[e] = ie(this, ye)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return ie(this, ye)[e].push(n), () => {
      ie(this, ye)[e] = ie(this, ye)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    ie(this, ve).$destroy();
  }
}
ye = new WeakMap(), ve = new WeakMap();
let cn;
typeof HTMLElement == "function" && (cn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    he(this, "$$ctor");
    /** Slots */
    he(this, "$$s");
    /** @type {any} The Svelte component instance */
    he(this, "$$c");
    /** Whether or not the custom element is connected */
    he(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    he(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    he(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    he(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    he(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    he(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    he(this, "$$me");
    this.$$ctor = e, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(e, r, n) {
    if (this.$$l[e] = this.$$l[e] || [], this.$$l[e].push(r), this.$$c) {
      const i = this.$$c.$on(e, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(e, r, n);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(e, r, n) {
    if (super.removeEventListener(e, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let e = function(i) {
        return (l) => {
          const a = document.createElement("slot");
          i !== "default" && (a.name = i), E(l, a);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = zi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const l = this.$$g_p(i.name);
        l in this.$$d || (this.$$d[l] = vt(l, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Ti({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Ar(() => {
        Xt(() => {
          var i;
          this.$$r = !0;
          for (const l of ct(this.$$c)) {
            if (!((i = this.$$p_d[l]) != null && i.reflect)) continue;
            this.$$d[l] = this.$$c[l];
            const a = vt(
              l,
              this.$$d[l],
              this.$$p_d,
              "toAttribute"
            );
            a == null ? this.removeAttribute(this.$$p_d[l].attribute || l) : this.setAttribute(this.$$p_d[l].attribute || l, a);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const l of this.$$l[i]) {
          const a = this.$$c.$on(i, l);
          this.$$l_u.set(l, a);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(e, r, n) {
    var i;
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = vt(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(e) {
    return ct(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function vt(t, e, r, n) {
  var l;
  const i = (l = r[t]) == null ? void 0 : l.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !n || !r[t])
    return e;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function zi(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Y(t, e, r, n, i, l) {
  let a = class extends cn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ct(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return ct(e).forEach((s) => {
    dt(a.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(o) {
        var c;
        o = vt(s, o, e), this.$$d[s] = o;
        var u = this.$$c;
        if (u) {
          var d = (c = He(u, s)) == null ? void 0 : c.get;
          d ? u[s] = o : u.$set({ [s]: o });
        }
      }
    });
  }), n.forEach((s) => {
    dt(a.prototype, s, {
      get() {
        var o;
        return (o = this.$$c) == null ? void 0 : o[s];
      }
    });
  }), t.element = /** @type {any} */
  a, a;
}
var Oi = /* @__PURE__ */ $('<button type="button"><!></button>');
const Ri = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Hi(t, e) {
  G(t, Ri);
  const r = C(e, "type", 3, "primary"), n = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const i = C(e, "onClick", 3, void 0);
  var l = Oi();
  l.__click = function(...s) {
    var o;
    (o = i()) == null || o.apply(this, s);
  };
  var a = y(l);
  er(a, e, "default", {}), m(l), N(() => Ke(l, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), E(t, l);
}
te(["click"]);
customElements.define("ing-button", Y(Hi, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Mi = /* @__PURE__ */ $('<button type="button"><!></button>');
const Ui = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Li(t, e) {
  G(t, Ui), C(e, "type", 3, "primary");
  const r = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const n = C(e, "onClick", 3, void 0);
  var i = Mi();
  i.__click = function(...a) {
    var s;
    (s = n()) == null || s.apply(this, a);
  };
  var l = y(i);
  er(l, e, "default", {}), m(i), N(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), E(t, i);
}
te(["click"]);
customElements.define("ing-button-gray", Y(Li, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var ji = /* @__PURE__ */ $('<div class="input_label svelte-1hyy719"> </div>'), Di = /* @__PURE__ */ $('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Bi = (t, e) => {
  e(t);
}, Fi = /* @__PURE__ */ $('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Pi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function qt(t, e) {
  Q(e, !0), G(t, Pi);
  let r = C(e, "inputId", 3, ""), n = C(e, "label", 3, ""), i = C(e, "icon", 3, ""), l = C(e, "type", 3, "text"), a = C(e, "placeholder", 3, ""), s = C(e, "input", 15, ""), o = C(e, "inputStyle", 3, "");
  const u = (g) => {
    if (g && g.target && e.$$host) {
      let _ = "";
      g.target.value && (_ = g.target.value), e.$$host.innerText = _, document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: e.$$host.id, input: _ }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: _ } }));
    }
  };
  var d = Fi(), c = y(d);
  z(c, n, (g) => {
    var _ = ji(), x = y(_, !0);
    m(_), N(() => M(x, n())), E(g, _);
  });
  var v = I(c, 2), h = y(v);
  z(h, i, (g) => {
    var _ = Di(), x = y(_);
    m(_), N(() => T(x, "src", i())), E(g, _);
  });
  var f = I(h, 2);
  Ct(f), f.__input = [Bi, u], m(v), m(d), N(() => {
    T(d, "style", o()), T(f, "id", r()), T(f, "type", l()), T(f, "placeholder", a());
  }), $t(f, s), E(t, d), ee();
}
te(["input"]);
customElements.define("ing-input", Y(
  qt,
  {
    input: { reflect: !0 },
    inputId: {},
    label: {},
    icon: {},
    type: {},
    placeholder: {},
    inputStyle: {}
  },
  [],
  [],
  !0
));
var Vi = /* @__PURE__ */ $('<a class="svelte-hcumdc"> </a>'), Ji = (t, e, r) => e(p(r).title), Gi = /* @__PURE__ */ $('<button class="menu_item_button svelte-hcumdc"> </button>'), Yi = /* @__PURE__ */ $('<div class="menu_item svelte-hcumdc"><!></div>'), Ki = /* @__PURE__ */ $('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const Wi = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function tr(t, e) {
  Q(e, !0), G(t, Wi);
  let r = C(e, "position", 19, () => ({})), n = C(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var l = Ki(), a = I(y(l), 2);
  W(a, 21, n, K, (s, o) => {
    var u = Yi(), d = y(u);
    z(
      d,
      () => p(o).url,
      (c) => {
        var v = Vi(), h = y(v, !0);
        m(v), N(() => {
          T(v, "href", p(o).url), M(h, p(o).title);
        }), E(c, v);
      },
      (c) => {
        var v = Gi();
        v.__click = [Ji, i, o];
        var h = y(v, !0);
        m(v), N(() => M(h, p(o).title)), E(c, v);
      }
    ), m(u), E(s, u);
  }), m(a), m(l), N(() => T(l, "style", `top: ${r().top}; left: ${r().left};`)), E(t, l), ee();
}
te(["click"]);
customElements.define("mv-elegant-dropdown", Y(tr, { position: {}, menuItems: {} }, [], [], !0));
var Zi = /* @__PURE__ */ $('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), Xi = (t, e) => {
  J(e, !p(e));
}, Qi = /* @__PURE__ */ $('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), el = /* @__PURE__ */ $("<span></span>"), tl = /* @__PURE__ */ $('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const rl = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function dn(t, e) {
  Q(e, !0), G(t, rl), C(e, "title", 3, "Apint.org");
  const r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !1), l = C(e, "username", 3, ""), a = C(e, "userpic", 3, "");
  let s = "", o = ke(!1), u = ke(void 0);
  function d() {
    let x = {}, w;
    if (p(u) && (w = p(u)), w) {
      var b = w.getBoundingClientRect();
      x.top = (b.top + b.height + 12).toString() + "px", x.left = (b.left - 115).toString() + "px", console.log(x);
    }
    return x;
  }
  var c = tl(), v = y(c), h = y(v);
  qt(h, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var f = I(h, 2);
  f.textContent = s, m(v);
  var g = I(v, 2), _ = y(g);
  z(
    _,
    i,
    (x) => {
      var w = Qi(), b = P(w), S = y(b);
      z(S, n, (F) => {
        var D = Zi(), L = P(D);
        ci(2), N(() => T(L, "src", n())), E(F, D);
      });
      var k = I(S, 2);
      k.__click = [Xi, o];
      var q = y(k), O = I(q, 2), A = y(O, !0);
      m(O), m(k), vn(k, (F) => J(u, F), () => p(u)), m(b);
      var H = I(b, 2);
      z(H, () => p(o), (F) => {
        var D = /* @__PURE__ */ Ze(d);
        tr(F, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return p(D);
          }
        });
      }), N(() => {
        T(q, "src", a()), M(A, l());
      }), E(x, w);
    },
    (x) => {
      var w = ne(), b = P(w);
      z(
        b,
        i,
        (S) => {
          var k = el();
          E(S, k);
        },
        null,
        !0
      ), E(x, w);
    }
  ), m(g), m(c), E(t, c), ee();
}
te(["click"]);
customElements.define("ing-headerlite", Y(
  dn,
  {
    title: {},
    searchicon: {},
    notificationicon: {},
    supportuser: {},
    username: {},
    userpic: {}
  },
  [],
  [],
  !0
));
function nl(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function il(t, { delay: e = 0, duration: r = 400, easing: n = nl, axis: i = "y" } = {}) {
  const l = getComputedStyle(t), a = +l.opacity, s = i === "y" ? "height" : "width", o = parseFloat(l[s]), u = i === "y" ? ["top", "bottom"] : ["left", "right"], d = u.map(
    (x) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${x[0].toUpperCase()}${x.slice(1)}`
    )
  ), c = parseFloat(l[`padding${d[0]}`]), v = parseFloat(l[`padding${d[1]}`]), h = parseFloat(l[`margin${d[0]}`]), f = parseFloat(l[`margin${d[1]}`]), g = parseFloat(
    l[`border${d[0]}Width`]
  ), _ = parseFloat(
    l[`border${d[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (x) => `overflow: hidden;opacity: ${Math.min(x * 20, 1) * a};${s}: ${x * o}px;padding-${u[0]}: ${x * c}px;padding-${u[1]}: ${x * v}px;margin-${u[0]}: ${x * h}px;margin-${u[1]}: ${x * f}px;border-${u[0]}-width: ${x * g}px;border-${u[1]}-width: ${x * _}px;`
  };
}
function ll(t) {
  return t;
}
var al = (t, e, r) => e(p(r).title), sl = /* @__PURE__ */ $('<img alt="option" width="18px">'), ol = /* @__PURE__ */ $('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ul = /* @__PURE__ */ $('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), vl = (t, e, r) => e(p(r).title), cl = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), dl = /* @__PURE__ */ $('<div class="menu_item_frame svelte-v1mgvt"></div>'), fl = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), hl = /* @__PURE__ */ $('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const pl = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function _l(t, e) {
  Q(e, !0), G(t, pl), C(e, "title", 3, "Mapp"), C(e, "icon", 3, "");
  let r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !0), l = C(e, "username", 3, ""), a = C(e, "userpic", 3, ""), s = C(e, "activeitem", 3, ""), o = C(e, "menuconfig", 7, void 0);
  typeof o() == "string" && o(JSON.parse(o()));
  let u = V({});
  if (s()) {
    u[s()] = !0;
    for (let w of o().items)
      if (w.subitems) {
        for (let b of w.subitems)
          if (b.title == s()) {
            u[w.title] = !0;
            break;
          }
      }
  }
  let d = (w) => {
    let b = o().items.find((S) => S.title === w);
    u[w] ? b && (!b.url || b.url === "#") && (u[w] = !u[w]) : u[w] = !0;
  };
  var c = hl(), v = y(c), h = y(v);
  W(h, 21, () => o().items, K, (w, b) => {
    var S = fl(), k = P(S);
    k.__click = [al, d, b];
    var q = y(k), O = y(q), A = y(O);
    z(
      A,
      () => p(b).icon,
      (re) => {
        var Z = sl();
        N(() => T(Z, "src", p(b).icon)), E(re, Z);
      },
      (re) => {
        var Z = ol();
        E(re, Z);
      }
    ), m(O);
    var H = I(O, 2), F = y(H, !0);
    m(H);
    var D = I(H, 2);
    z(D, () => p(b).subitems, (re) => {
      var Z = ul();
      N(() => Ke(Z, `${(u[p(b).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), E(re, Z);
    }), m(q), m(k);
    var L = I(k, 2);
    z(L, () => u[p(b).title] && p(b).subitems, (re) => {
      var Z = dl();
      W(Z, 21, () => p(b).subitems, K, (Ce, Oe) => {
        var xe = cl();
        xe.__click = [vl, d, Oe];
        var nr = y(xe), ir = I(y(nr), 2), wn = y(ir, !0);
        m(ir), m(nr), m(xe), N(() => {
          T(xe, "href", p(Oe).url), Ke(xe, `${(p(Oe).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(wn, p(Oe).title);
        }), E(Ce, xe);
      }), m(Z), Ci(3, Z, () => il, () => ({ duration: 300, easing: ll })), E(re, Z);
    }), N(() => {
      T(k, "href", p(b).url), Ke(k, `${(p(b).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(F, p(b).title);
    }), E(w, S);
  }), m(h), m(v);
  var f = I(v, 2), g = y(f);
  dn(g, {
    get searchicon() {
      return r();
    },
    get notificationicon() {
      return n();
    },
    get supportuser() {
      return i();
    },
    get username() {
      return l();
    },
    get userpic() {
      return a();
    }
  });
  var _ = I(g, 2), x = y(_);
  er(x, e, "default", {}), m(_), m(f), m(c), E(t, c), ee();
}
te(["click"]);
customElements.define("ing-buffet", Y(
  _l,
  {
    title: {},
    icon: {},
    searchicon: {},
    notificationicon: {},
    supportuser: {},
    username: {},
    userpic: {},
    activeitem: {},
    menuconfig: {}
  },
  ["default"],
  [],
  !0
));
var gl = /* @__PURE__ */ $('<div class="input_label svelte-18z4bwo"> </div>'), ml = /* @__PURE__ */ $('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), bl = (t, e) => {
  e(t);
}, xl = /* @__PURE__ */ $("<option> </option>"), yl = /* @__PURE__ */ $('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo"></select></div></div>');
const wl = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function rr(t, e) {
  Q(e, !0), G(t, wl);
  let r = C(e, "label", 3, ""), n = C(e, "icon", 3, ""), i = C(e, "placeholder", 3, ""), l = C(e, "items", 3, ""), a = C(e, "input", 15, ""), s = C(e, "selectStyle", 3, ""), o = l().split(",");
  const u = (g) => {
    if (g && g.target && e.$$host) {
      let _ = "";
      g.target.value && (_ = g.target.value), e.$$host.innerText = _, document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: e.$$host.id, input: _ }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: _ } }));
    }
  };
  var d = yl(), c = y(d);
  z(c, r, (g) => {
    var _ = gl(), x = y(_, !0);
    m(_), N(() => M(x, r())), E(g, _);
  });
  var v = I(c, 2), h = y(v);
  z(h, n, (g) => {
    var _ = ml(), x = y(_);
    m(_), N(() => T(x, "src", n())), E(g, _);
  });
  var f = I(h, 2);
  f.__input = [bl, u], W(f, 21, () => o, K, (g, _) => {
    var x = xl(), w = {}, b = y(x, !0);
    m(x), N(() => {
      w !== (w = p(_)) && (x.value = (x.__value = p(_)) == null ? "" : p(_)), M(b, p(_));
    }), E(g, x);
  }), m(f), m(v), m(d), N(() => {
    T(d, "style", s()), T(f, "placeholder", i());
  }), un(f, a), E(t, d), ee();
}
te(["input"]);
customElements.define("ing-select", Y(
  rr,
  {
    label: {},
    icon: {},
    placeholder: {},
    items: {},
    input: {},
    selectStyle: {}
  },
  [],
  [],
  !0
));
var kl = /* @__PURE__ */ $('<div style="width: 100%;"><h3> </h3></div>'), El = /* @__PURE__ */ $('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Sl = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Cl(t, e) {
  Q(e, !0), G(t, Sl);
  let r = C(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let o = {};
    for (const [u, d] of Object.entries(r().properties))
      o[u] = d.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: o } }));
  }
  var i = El(), l = y(i);
  z(l, r, (o) => {
    var u = ne(), d = P(u);
    W(d, 17, () => Object.entries(r().properties), K, (c, v) => {
      let h = () => p(v)[0], f = () => p(v)[1];
      var g = ne(), _ = P(g);
      z(
        _,
        () => f().format == "header",
        (x) => {
          var w = kl(), b = y(w), S = y(b, !0);
          m(b), m(w), N(() => M(S, f().value)), E(x, w);
        },
        (x) => {
          var w = ne(), b = P(w);
          z(
            b,
            () => f().format == "select",
            (S) => {
              var k = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
              rr(S, {
                get input() {
                  return f().value;
                },
                set input(q) {
                  f().value = q;
                },
                get selectStyle() {
                  return p(k);
                },
                get label() {
                  return f().description;
                },
                get items() {
                  return f().value;
                }
              });
            },
            (S) => {
              var k = ne(), q = P(k);
              z(
                q,
                () => f().type == "string",
                (O) => {
                  var A = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
                  qt(O, {
                    get inputId() {
                      return h();
                    },
                    get inputStyle() {
                      return p(A);
                    },
                    get label() {
                      return f().description;
                    },
                    get type() {
                      return f().format;
                    },
                    get placeholder() {
                      return f().placeholder;
                    },
                    get input() {
                      return f().value;
                    },
                    set input(H) {
                      f().value = H;
                    }
                  });
                },
                null,
                !0
              ), E(S, k);
            },
            !0
          ), E(x, w);
        }
      ), E(c, g);
    }), E(o, u);
  });
  var a = I(l, 2), s = y(a);
  At(s, "size", "small"), At(s, "id", "submit-button"), At(s, "type", "secondary"), s.__click = n, m(a), m(i), E(t, i), ee();
}
te(["click"]);
customElements.define("ing-form", Y(Cl, { schema: {} }, [], [], !0));
function $l(t, e, r, n, i, l) {
  if (p(e)) {
    let a = [];
    for (let s of r()) {
      let o = !1;
      for (let u of n())
        if ((i().length === 0 || i().includes(u)) && s[u].toString().toLowerCase().includes(p(e).toLowerCase())) {
          o = !0;
          break;
        }
      o && a.push(s);
    }
    J(l, V(a));
  } else
    J(l, V(r()));
}
var ql = /* @__PURE__ */ $('<th class="svelte-15ql2st"> </th>'), Il = /* @__PURE__ */ $('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Nl = /* @__PURE__ */ $('<tr class="svelte-15ql2st"></tr>'), Tl = /* @__PURE__ */ $('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Al = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function zl(t, e) {
  Q(e, !0), G(t, Al);
  let r = C(e, "headers", 23, () => []), n = C(e, "headerssearchable", 23, () => []), i = C(e, "rows", 23, () => []), l = C(e, "linkprefix", 3, ""), a = C(e, "linkcolumnname", 3, ""), s = C(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let o = ke(V(i())), u = ke("");
  const d = (b) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: b } })), s() && s()({ detail: { rowIndex: b } });
  };
  var c = Tl(), v = y(c), h = I(y(v), 2), f = I(y(h));
  Ct(f), f.__keyup = [
    $l,
    u,
    i,
    r,
    n,
    o
  ], m(h), m(v);
  var g = I(v, 2), _ = y(g), x = y(_);
  W(x, 21, r, K, (b, S) => {
    var k = ql(), q = y(k, !0);
    m(k), N(() => M(q, p(S))), E(b, k);
  }), m(x), m(_);
  var w = I(_);
  W(w, 21, () => p(o), K, (b, S, k) => {
    var q = Nl();
    q.__click = () => {
      d(k);
    }, W(q, 21, () => Object.entries(p(S)), K, (A, H) => {
      var F = Il(), D = y(F), L = y(D, !0);
      m(D), m(F), N(() => {
        T(D, "href", l() + p(S)[a()]), M(L, p(H)[1]);
      }), E(A, F);
    }), m(q), E(b, q);
  }), m(w), m(g), m(c), $t(f, () => p(u), (b) => J(u, b)), E(t, c), ee();
}
te(["keyup", "click"]);
customElements.define("ing-table", Y(
  zl,
  {
    headers: {},
    headerssearchable: {},
    rows: {},
    linkprefix: {},
    linkcolumnname: {},
    update: {}
  },
  [],
  [],
  !0
));
var Ol = /* @__PURE__ */ $('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), Rl = /* @__PURE__ */ $('<span class="title_text svelte-hi9ips"> </span>'), Hl = /* @__PURE__ */ $('<a class="title svelte-hi9ips"><!> <!></a>'), Ml = (t, e, r) => e(t, p(r).title), Ul = /* @__PURE__ */ $('<img class="menu_icon svelte-hi9ips">'), Ll = (t, e, r) => e(t, p(r)), jl = /* @__PURE__ */ $('<span class="menu_text svelte-hi9ips"> </span>'), Dl = /* @__PURE__ */ $('<button class="menu_button svelte-hi9ips"><!></button> <!>', 1), Bl = /* @__PURE__ */ $('<div class="header svelte-hi9ips"><!> <div class="right_menus svelte-hi9ips"></div></div>');
const Fl = {
  hash: "svelte-hi9ips",
  code: ".header.svelte-hi9ips {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-hi9ips {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-hi9ips:link {text-decoration:none;}.title.svelte-hi9ips:visited {text-decoration:none;color:#222;}.title.svelte-hi9ips:hover {text-decoration:none;color:darkgray}.title.svelte-hi9ips:active {text-decoration:none;}.title_text.svelte-hi9ips {display:flex;align-items:center;}.right_menus.svelte-hi9ips {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-hi9ips {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-hi9ips {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-hi9ips:hover {cursor:pointer;}.menu_text.svelte-hi9ips {font-weight:700;}.round.svelte-hi9ips {height:40px;width:40px;border-radius:50%;}"
};
function It(t, e) {
  Q(e, !0), G(t, Fl);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), l = C(e, "headerMenus", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  let a = V({}), s = V({});
  function o(g, _) {
    g && g.stopPropagation();
    for (const x of Object.keys(a))
      x != _ && (a[x] = !1);
    a[_] ? a[_] = !1 : a[_] = !0;
  }
  function u(g, _) {
    g.stopPropagation(), _.url ? window.location.href = _.url : document.dispatchEvent(new CustomEvent(_.title, { detail: {} }));
  }
  function d(g) {
    let _ = {}, x;
    if (s[g] && (x = s[g]), x) {
      var w = x.getBoundingClientRect();
      _.top = (w.top + w.height + 12).toString() + "px", _.left = (w.left - 150).toString() + "px", console.log(_);
    } else
      console.log("Could not find element with id: " + g);
    return _;
  }
  function c(g) {
    return g.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const _ of Object.keys(a))
      a[_] = !1;
  };
  var v = Bl(), h = y(v);
  z(h, () => r() || i(), (g) => {
    var _ = Hl(), x = y(_);
    z(x, i, (b) => {
      var S = Ol();
      N(() => T(S, "src", i())), E(b, S);
    });
    var w = I(x, 2);
    z(w, r, (b) => {
      var S = Rl(), k = y(S, !0);
      m(S), N(() => M(k, r())), E(b, S);
    }), m(_), N(() => T(_, "href", n())), E(g, _);
  });
  var f = I(h, 2);
  W(f, 21, l, K, (g, _) => {
    var x = Dl(), w = P(x);
    N(() => T(w, "id", c(p(_).title + "_button"))), w.__click = [Ml, o, _];
    var b = y(w);
    z(
      b,
      () => p(_).imageUrl,
      (k) => {
        var q = Ul();
        vn(q, (O, A) => s[c(A.title + "_button")] = O, (O) => s == null ? void 0 : s[c(O.title + "_button")], () => [p(_)]), N(() => {
          T(q, "alt", p(_).title), T(q, "src", p(_).imageUrl), Pe(q, "round", p(_).imageShape === "round");
        }), E(k, q);
      },
      (k) => {
        var q = jl();
        q.__click = [Ll, u, _];
        var O = y(q, !0);
        m(q), N(() => M(O, p(_).title)), E(k, q);
      }
    ), m(w);
    var S = I(w, 2);
    z(S, () => a[p(_).title], (k) => {
      var q = /* @__PURE__ */ Ze(() => d(c(p(_).title + "_button")));
      tr(k, {
        get menuItems() {
          return p(_).items;
        },
        get position() {
          return p(q);
        }
      });
    }), E(g, x);
  }), m(f), m(v), E(t, v), ee();
}
te(["click"]);
customElements.define("mv-elegant-header", Y(
  It,
  {
    title: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {}
  },
  [],
  [],
  !0
));
function Pl(t, e, r, n) {
  e.searchloadresults && J(r, V(e.searchloadresults(n())));
}
function Vl(t, e, r, n) {
  t.key === "Escape" ? J(e, V([])) : t.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n(""));
}
var Jl = /* @__PURE__ */ $('<div class="result svelte-ihhy65"> </div>'), Gl = /* @__PURE__ */ $('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Yl = /* @__PURE__ */ $('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const Kl = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function fn(t, e) {
  Q(e, !0), G(t, Kl);
  let r = C(e, "searchtext", 15), n = ke(V([]));
  document.addEventListener("SearchResults", (u) => {
    u.detail.results && J(n, V(u.detail.results));
  });
  var i = Yl(), l = P(i), a = y(l), s = I(y(a), 2);
  Ct(s), s.__input = [Pl, e, n, r], s.__keyup = [Vl, n, e, r], m(a), m(l);
  var o = I(l, 2);
  z(o, () => p(n).length > 0, (u) => {
    var d = Gl(), c = y(d), v = y(c);
    W(v, 21, () => p(n), K, (h, f) => {
      var g = Jl(), _ = y(g, !0);
      m(g), N(() => M(_, p(f))), E(h, g);
    }), m(v), m(c), m(d), E(u, d);
  }), $t(s, r), E(t, i), ee();
}
te(["input", "keyup"]);
customElements.define("mv-elegant-search", Y(
  fn,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var Wl = /* @__PURE__ */ $('<img class="hero_image svelte-e621nb" alt="logo">'), Zl = /* @__PURE__ */ $('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const Xl = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function hn(t, e) {
  G(t, Xl);
  let r = C(e, "height", 3, "80px"), n = C(e, "title", 3, ""), i = C(e, "titleImageUrl", 3, ""), l = C(e, "searchtext", 15);
  var a = Zl(), s = y(a), o = y(s);
  z(o, i, (h) => {
    var f = Wl();
    N(() => {
      T(f, "height", `${r()}`), T(f, "src", i());
    }), E(h, f);
  });
  var u = I(o, 2), d = y(u, !0);
  m(u), m(s);
  var c = I(s, 2), v = y(c);
  fn(v, {
    get searchtext() {
      return l();
    },
    set searchtext(h) {
      l(h);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), m(c), m(a), N(() => {
    T(s, "style", `height: ${r()};`), M(d, n());
  }), E(t, a);
}
customElements.define("mv-elegant-hero-search", Y(
  hn,
  {
    text: { reflect: !0 },
    height: {},
    title: {},
    titleImageUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
function Ql(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var ea = /* @__PURE__ */ $('<option class="svelte-1im86kb"> </option>'), ta = /* @__PURE__ */ $('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const ra = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function pn(t, e) {
  Q(e, !0), G(t, ra);
  let r = C(e, "input", 15), n = C(e, "options", 19, () => []);
  var i = ta(), l = y(i);
  l.__input = [Ql, r, e], W(l, 21, n, K, (a, s) => {
    var o = ea(), u = {}, d = y(o, !0);
    m(o), N(() => {
      u !== (u = p(s)) && (o.value = (o.__value = p(s)) == null ? "" : p(s)), M(d, p(s));
    }), E(a, o);
  }), m(l), m(i), un(l, r), E(t, i), ee();
}
te(["input"]);
customElements.define("mv-elegant-select", Y(pn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function na(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var ia = (t, e, r) => e(p(r).name), la = /* @__PURE__ */ $('<div class="icon svelte-lvweti">✓</div>'), aa = /* @__PURE__ */ $('<div class="icon svelte-lvweti"> </div>'), sa = /* @__PURE__ */ $('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), oa = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), ua = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), va = /* @__PURE__ */ $('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const ca = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function _n(t, e) {
  Q(e, !0), G(t, ca);
  let r = C(e, "view", 15, "card"), n = V({});
  function i(v) {
    n[v] ? n[v] = !1 : n[v] = !0, e.typeselect && e.typeselect(n);
  }
  function l(v) {
    e.sortselect && e.sortselect(v);
  }
  var a = va(), s = y(a);
  W(s, 21, () => e.types, K, (v, h) => {
    var f = sa();
    f.__click = [ia, i, h];
    var g = y(f);
    z(
      g,
      () => n[p(h).name] === !0,
      (w) => {
        var b = la();
        E(w, b);
      },
      (w) => {
        var b = aa(), S = y(b, !0);
        m(b), N(() => M(S, p(h).icon)), E(w, b);
      }
    );
    var _ = I(g, 2), x = y(_, !0);
    m(_), m(f), N(() => {
      Pe(f, "filterbar_option_selected", n[p(h).name]), M(x, p(h).name);
    }), E(v, f);
  }), m(s);
  var o = I(s, 2), u = y(o);
  u.__click = [na, r, e];
  var d = y(u);
  z(
    d,
    () => r() === "CARD",
    (v) => {
      var h = oa();
      E(v, h);
    },
    (v) => {
      var h = ua();
      E(v, h);
    }
  ), m(u);
  var c = I(u, 2);
  pn(c, {
    input: "Latest",
    get options() {
      return e.sorts;
    },
    onInput: l
  }), m(o), m(a), E(t, a), ee();
}
te(["click"]);
customElements.define("mv-elegant-filtertypes", Y(
  _n,
  {
    types: {},
    sorts: {},
    typeselect: {},
    sortselect: {},
    view: {},
    viewselect: {}
  },
  [],
  [],
  !0
));
var da = /* @__PURE__ */ $('<img alt="category icon" class="svelte-1yyvu4g">'), fa = /* @__PURE__ */ $('<span class="card_symbol svelte-1yyvu4g"> </span>'), ha = /* @__PURE__ */ $('<img class="header_image svelte-1yyvu4g" alt="header preview">'), pa = /* @__PURE__ */ $('<img alt="profile" class="svelte-1yyvu4g">'), _a = /* @__PURE__ */ $('<img alt="category icon" class="svelte-1yyvu4g">'), ga = /* @__PURE__ */ $('<span class="card_symbol svelte-1yyvu4g"> </span>'), ma = /* @__PURE__ */ $('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><!> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
const ba = {
  hash: "svelte-1yyvu4g",
  code: ".card_frame.svelte-1yyvu4g {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1yyvu4g {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1yyvu4g span:where(.svelte-1yyvu4g) {white-space:nowrap;}.top_right_icons.svelte-1yyvu4g {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1yyvu4g {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1yyvu4g {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1yyvu4g:hover {color:#7c7c7c;}.author.svelte-1yyvu4g {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1yyvu4g:hover {color:#757a79;}.card_symbol.svelte-1yyvu4g {padding-left:6px;}.card_symbol.svelte-1yyvu4g:hover {cursor:default;}.footer.svelte-1yyvu4g {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1yyvu4g {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1yyvu4g {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g):hover {color:#82aae9;}.type_box.svelte-1yyvu4g {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function gn(t, e) {
  Q(e, !0), G(t, ba);
  let r = C(e, "item", 19, () => ({
    dateTime: "",
    categories: [],
    imageUrl: "",
    title: "",
    authorImageUrl: "",
    authorName: "",
    authorUrl: "",
    description: "",
    link: "",
    types: []
  }));
  var n = ma(), i = y(n), l = y(i), a = y(l, !0);
  m(l);
  var s = I(l, 2);
  W(s, 21, () => r().categories, K, (S, k) => {
    var q = ne(), O = P(q);
    z(
      O,
      () => p(k).imageUrl,
      (A) => {
        var H = da();
        N(() => {
          T(H, "src", p(k).imageUrl), T(H, "title", p(k).name);
        }), E(A, H);
      },
      (A) => {
        var H = ne(), F = P(H);
        z(
          F,
          () => p(k).symbol,
          (D) => {
            var L = fa(), re = y(L, !0);
            m(L), N(() => {
              T(L, "title", p(k).name), M(re, p(k).symbol);
            }), E(D, L);
          },
          null,
          !0
        ), E(A, H);
      }
    ), E(S, q);
  }), m(s), m(i);
  var o = I(i, 2);
  z(o, () => r().imageUrl, (S) => {
    var k = ha();
    N(() => T(k, "src", r().imageUrl)), E(S, k);
  });
  var u = I(o, 2), d = y(u, !0);
  m(u);
  var c = I(u, 2), v = y(c);
  z(v, () => r().authorImageUrl, (S) => {
    var k = pa();
    N(() => T(k, "src", r().authorImageUrl)), E(S, k);
  });
  var h = I(v);
  m(c);
  var f = I(c, 2), g = y(f), _ = y(g, !0);
  m(g);
  var x = I(g, 2), w = y(x), b = I(w, 2);
  W(b, 21, () => r().types, K, (S, k) => {
    var q = ne(), O = P(q);
    z(
      O,
      () => p(k).imageUrl,
      (A) => {
        var H = _a();
        N(() => {
          T(H, "src", p(k).imageUrl), T(H, "title", p(k).name);
        }), E(A, H);
      },
      (A) => {
        var H = ne(), F = P(H);
        z(
          F,
          () => p(k).symbol,
          (D) => {
            var L = ga(), re = y(L, !0);
            m(L), N(() => {
              T(L, "title", p(k).name), M(re, p(k).symbol);
            }), E(D, L);
          },
          null,
          !0
        ), E(A, H);
      }
    ), E(S, q);
  }), m(b), m(x), m(f), m(n), N(() => {
    M(a, r().dateTime), T(u, "href", r().link), M(d, r().title), T(c, "href", r().authorUrl), M(h, ` ${r().authorName ?? ""}`), M(_, r().description), T(w, "href", r().link);
  }), E(t, n), ee();
}
customElements.define("mv-elegant-card", Y(gn, { item: {} }, [], [], !0));
var xa = /* @__PURE__ */ $('<div class="menu_frame svelte-1dvvvu9"></div>');
const ya = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function mn(t, e) {
  G(t, ya);
  let r = C(e, "items", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  var n = xa();
  W(n, 21, r, K, (i, l) => {
    gn(i, {
      get item() {
        return p(l);
      }
    });
  }), m(n), E(t, n);
}
customElements.define("mv-elegant-cardpage", Y(mn, { items: {} }, [], [], !0));
var wa = (t, e, r) => e(p(r).name), ka = /* @__PURE__ */ $('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), Ea = /* @__PURE__ */ $('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const Sa = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function bn(t, e) {
  Q(e, !0), G(t, Sa);
  let r = V({});
  function n(l) {
    r[l] ? r[l] = !1 : r[l] = !0, e.categoryselect && e.categoryselect(r);
  }
  var i = Ea();
  W(i, 21, () => e.categories, K, (l, a) => {
    var s = ka(), o = y(s);
    o.__click = [wa, n, a];
    var u = y(o, !0);
    m(o);
    var d = I(o, 2), c = y(d, !0);
    m(d), m(s), N(() => {
      Pe(o, "letter_selected", r[p(a).name]), M(u, p(a).letter), M(c, p(a).name);
    }), E(l, s);
  }), m(i), E(t, i), ee();
}
te(["click"]);
customElements.define("mv-elegant-filtercats", Y(bn, { categories: {}, categoryselect: {} }, [], [], !0));
function Ca(t, e, r, n, i) {
  if (p(e)) {
    let l = [];
    for (let a of r()) {
      let s = !1;
      for (let o of n())
        if (o.searchable && a[o.name] && a[o.name].toString().toLowerCase().includes(p(e).toLowerCase())) {
          s = !0;
          break;
        }
      s && l.push(a);
    }
    J(i, V(l));
  } else
    J(i, V(r()));
}
var $a = /* @__PURE__ */ $('<th class="svelte-1nbcvq9"> </th>'), qa = /* @__PURE__ */ $('<a class="table_row svelte-1nbcvq9"> </a>'), Ia = /* @__PURE__ */ $('<span class="table_row svelte-1nbcvq9"> </span>'), Na = /* @__PURE__ */ $('<td class="svelte-1nbcvq9"><!></td>'), Ta = /* @__PURE__ */ $("<td></td>"), Aa = /* @__PURE__ */ $('<tr class="svelte-1nbcvq9"></tr>'), za = /* @__PURE__ */ $('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const Oa = {
  hash: "svelte-1nbcvq9",
  code: `.frame.svelte-1nbcvq9 {
    /* border-color: #eaedf2 !important; */
    /* box-shadow: 0 2px 18px rgba(0, 0, 0, 0.02) !important; */min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;
    /* border: 0.0625rem solid rgba(46, 54, 80, 0.125); */border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-1nbcvq9 {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-1nbcvq9 thead:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9) th:where(.svelte-1nbcvq9) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-1nbcvq9 {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;display:block;}table.svelte-1nbcvq9 tbody:where(.svelte-1nbcvq9) tr:where(.svelte-1nbcvq9):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}.table_row_selected.svelte-1nbcvq9 {background-color:#eff0f2;border-radius:0.5rem;}

  @container (width <= 768px) {.column_sm.svelte-1nbcvq9 {display:none;}
  }a.svelte-1nbcvq9:link {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:visited {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:hover {text-decoration:none;color:#4a5073;}a.svelte-1nbcvq9:active {text-decoration:none;}td.svelte-1nbcvq9 a:where(.svelte-1nbcvq9) {display:block;}.filter.svelte-1nbcvq9 {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-1nbcvq9 {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-1nbcvq9 {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function xn(t, e) {
  Q(e, !0), G(t, Oa);
  let r = C(e, "tableHeaders", 23, () => []), n = C(e, "tableRows", 23, () => []), i = C(e, "linkprefix", 3, ""), l = C(e, "linkcolumnname", 3, ""), a = C(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let b of Object.keys(n()[0]))
      r().push({
        name: b,
        displayName: b,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = ke(V(n())), o = ke(""), u = ke(-1);
  const d = (b) => {
    J(u, V(b)), a() && a()({ detail: { rowIndex: b } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: b } }));
  };
  var c = za(), v = y(c), h = I(y(v), 2), f = I(y(h));
  Ct(f), f.__keyup = [
    Ca,
    o,
    n,
    r,
    s
  ], m(h), m(v);
  var g = I(v, 2), _ = y(g), x = y(_);
  W(x, 21, r, K, (b, S) => {
    var k = $a(), q = y(k, !0);
    m(k), N(() => {
      Pe(k, "column_sm", p(S).hideNarrow), M(q, p(S).displayName);
    }), E(b, k);
  }), m(x), m(_);
  var w = I(_);
  W(w, 21, () => p(s), K, (b, S, k) => {
    var q = Aa();
    q.__click = () => {
      d(k);
    }, W(q, 21, r, K, (O, A) => {
      var H = ne(), F = P(H);
      z(
        F,
        () => p(S)[p(A).name],
        (D) => {
          var L = Na(), re = y(L);
          z(
            re,
            l,
            (Z) => {
              var ue = qa(), Ce = y(ue, !0);
              m(ue), N(() => {
                T(ue, "href", i() + p(S)[l()]), M(Ce, p(S)[p(A).name]);
              }), E(Z, ue);
            },
            (Z) => {
              var ue = Ia(), Ce = y(ue, !0);
              m(ue), N(() => M(Ce, p(S)[p(A).name])), E(Z, ue);
            }
          ), m(L), N(() => Pe(L, "column_sm", p(A).hideNarrow)), E(D, L);
        },
        (D) => {
          var L = Ta();
          E(D, L);
        }
      ), E(O, H);
    }), m(q), N(() => Pe(q, "table_row_selected", k === p(u))), E(b, q);
  }), m(w), m(g), m(c), $t(f, () => p(o), (b) => J(o, b)), E(t, c), ee();
}
te(["keyup", "click"]);
customElements.define("mv-elegant-table", Y(
  xn,
  {
    tableHeaders: {},
    tableRows: {},
    linkprefix: {},
    linkcolumnname: {},
    tableRowClick: {}
  },
  [],
  [],
  !0
));
var Ra = /* @__PURE__ */ $("<!> <!> <!> <!> <!>", 1);
const Ha = { hash: "svelte-32ttx", code: "" };
function Ma(t, e) {
  G(t, Ha);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), l = C(e, "headerMenus", 19, () => []), a = C(e, "searchtext", 7, ""), s = C(e, "categories", 19, () => []), o = C(e, "types", 19, () => []), u = C(e, "sorts", 19, () => []), d = ke("CARD"), c = V([
    {
      name: "dateTime",
      displayName: "Date",
      searchable: !1
    },
    {
      name: "authorName",
      displayName: "Author",
      searchable: !0
    },
    {
      name: "title",
      displayName: "Title",
      searchable: !0
    }
  ]);
  var v = Ra(), h = P(v);
  It(h, {
    get title() {
      return r();
    },
    get titleUrl() {
      return n();
    },
    get titleImageUrl() {
      return i();
    },
    get headerMenus() {
      return l();
    }
  });
  var f = I(h, 2);
  hn(f, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return i();
    },
    get searchtext() {
      return a();
    },
    set searchtext(w) {
      a(w);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  });
  var g = I(f, 2);
  bn(g, {
    get categories() {
      return s();
    },
    get categoryselect() {
      return e.categoryselect;
    }
  });
  var _ = I(g, 2);
  _n(_, {
    get types() {
      return o();
    },
    get sorts() {
      return u();
    },
    get typeselect() {
      return e.typeselect;
    },
    get sortselect() {
      return e.sortselect;
    },
    get view() {
      return p(d);
    },
    set view(w) {
      J(d, V(w));
    }
  });
  var x = I(_, 2);
  z(
    x,
    () => p(d) === "CARD",
    (w) => {
      mn(w, {
        get items() {
          return e.items;
        }
      });
    },
    (w) => {
      xn(w, {
        get tableHeaders() {
          return c;
        },
        get tableRows() {
          return e.items;
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), E(t, v);
}
customElements.define("mv-elegant-buffet", Y(
  Ma,
  {
    title: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {},
    categories: {},
    categoryselect: {},
    types: {},
    typeselect: {},
    sorts: {},
    sortselect: {},
    items: {}
  },
  [],
  [],
  !0
));
var Ua = /* @__PURE__ */ $('<!> <div class="view_frame svelte-u4tv0q"></div>', 1);
const La = {
  hash: "svelte-u4tv0q",
  code: ".view_frame.svelte-u4tv0q {margin:auto;padding:24px 12px;max-width:700px;}"
};
function ja(t, e) {
  G(t, La);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), l = C(e, "headerMenus", 19, () => []), a = C(e, "items", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  function s(c) {
    let v = "";
    if (c.labelType && (v += `<${c.labelType}>${c.label}</${c.labelType}>`), c.type == "link_blank")
      v += `<a href="${c.link}" target="_blank">${c.value}</a>`;
    else if (c.type == "ul_link_blank") {
      let h = c.value.split(",");
      v += "<ul>";
      for (let f of h)
        v += `<li><a href="${f}" target="_blank">${f}</a></li>`;
      v += "</ul>";
    } else if (c.type == "ul") {
      let h = c.value.split(",");
      v += "<ul>";
      for (let f of h)
        v += `<li>${f}</li>`;
      v += "</ul>";
    } else
      v += `<${c.type}>${c.value}</${c.type}>`;
    return v;
  }
  var o = Ua(), u = P(o);
  It(u, {
    get title() {
      return r();
    },
    get titleUrl() {
      return n();
    },
    get titleImageUrl() {
      return i();
    },
    get headerMenus() {
      return l();
    }
  });
  var d = I(u, 2);
  W(d, 21, a, K, (c, v) => {
    var h = ne(), f = P(h);
    xi(f, () => s(p(v))), E(c, h);
  }), m(d), E(t, o);
}
customElements.define("mv-elegant-buffet-view", Y(
  ja,
  {
    title: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var Da = /* @__PURE__ */ $('<div class="input_label"> </div>'), Ba = /* @__PURE__ */ $('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Fa = (t, e) => {
  e(t);
}, Pa = /* @__PURE__ */ $('<div><input type="checkbox"> <label> </label></div>'), Va = /* @__PURE__ */ $('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Ja = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function yn(t, e) {
  Q(e, !0), G(t, Ja);
  let r = C(e, "label", 3, ""), n = C(e, "icon", 3, "");
  C(e, "placeholder", 3, "");
  let i = C(e, "items", 3, "");
  C(e, "input", 11, "");
  let l = C(e, "selectStyle", 3, ""), a = i().split(",");
  const s = (h) => {
    if (h && h.target) {
      let f = "";
      f = h.target.checked, console.log(h.target.id), console.log(f), document.dispatchEvent(new CustomEvent("SelectChangedEvent", { detail: { id: "hh", input: f } }));
    }
  };
  var o = Va(), u = y(o);
  z(u, r, (h) => {
    var f = Da(), g = y(f, !0);
    m(f), N(() => M(g, r())), E(h, f);
  });
  var d = I(u, 2), c = y(d);
  z(c, n, (h) => {
    var f = Ba(), g = y(f);
    m(f), N(() => T(g, "src", n())), E(h, f);
  });
  var v = I(c, 2);
  W(v, 21, () => a, K, (h, f) => {
    var g = Pa(), _ = y(g);
    _.__input = [Fa, s];
    var x = I(_, 2), w = y(x, !0);
    m(x), m(g), N(() => {
      T(_, "id", p(f)), T(_, "name", p(f)), T(x, "for", p(f)), M(w, p(f));
    }), E(h, g);
  }), m(v), m(d), m(o), N(() => T(o, "style", l())), E(t, o), ee();
}
te(["input"]);
customElements.define("ing-multi-select", Y(
  yn,
  {
    label: {},
    icon: {},
    placeholder: {},
    items: {},
    input: {},
    selectStyle: {}
  },
  [],
  [],
  !0
));
var Ga = /* @__PURE__ */ $('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-1cozt5v" type="file" accept="image/png, image/jpeg">', 1), Ya = /* @__PURE__ */ $('<!> <form class="edit_frame svelte-1cozt5v"></form>', 1);
const Ka = {
  hash: "svelte-1cozt5v",
  code: ".edit_frame.svelte-1cozt5v {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-1cozt5v::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}"
};
function Wa(t, e) {
  G(t, Ka);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), l = C(e, "headerMenus", 19, () => []), a = C(e, "items", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  var s = Ya(), o = P(s);
  It(o, {
    get title() {
      return r();
    },
    get titleUrl() {
      return n();
    },
    get titleImageUrl() {
      return i();
    },
    get headerMenus() {
      return l();
    }
  });
  var u = I(o, 2);
  W(u, 21, a, K, (d, c) => {
    var v = ne(), h = P(v);
    z(
      h,
      () => p(c).type == "input",
      (f) => {
        qt(f, {
          get label() {
            return p(c).label;
          },
          get input() {
            return p(c).initialValue;
          }
        });
      },
      (f) => {
        var g = ne(), _ = P(g);
        z(
          _,
          () => p(c).type == "select",
          (x) => {
            rr(x, {
              get label() {
                return p(c).label;
              },
              get items() {
                return p(c).options;
              },
              get input() {
                return p(c).initialValue;
              }
            });
          },
          (x) => {
            var w = ne(), b = P(w);
            z(
              b,
              () => p(c).type == "multiselect",
              (S) => {
                yn(S, {
                  get label() {
                    return p(c).label;
                  },
                  get items() {
                    return p(c).options;
                  }
                });
              },
              (S) => {
                var k = ne(), q = P(k);
                z(
                  q,
                  () => p(c).type == "file",
                  (O) => {
                    var A = Ga(), H = P(A), F = y(H), D = y(F, !0);
                    m(F), m(H);
                    var L = I(H, 2);
                    N(() => {
                      T(F, "for", p(c).id), M(D, p(c).label), T(L, "id", p(c).id), T(L, "name", p(c).label);
                    }), E(O, A);
                  },
                  null,
                  !0
                ), E(S, k);
              },
              !0
            ), E(x, w);
          },
          !0
        ), E(f, g);
      }
    ), E(d, v);
  }), m(u), E(t, s);
}
customElements.define("mv-elegant-buffet-edit", Y(
  Wa,
  {
    title: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var Za = /* @__PURE__ */ $('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const Xa = {
  hash: "svelte-nag87b",
  code: `.lds-ring.svelte-nag87b {
  /* display: inline-block;
  position: relative; */display:inline-block;position:absolute;width:99%;text-align:center;height:80px;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b) {box-sizing:border-box;position:absolute;left:48%;top:42%;width:32px;height:32px;margin:8px;border:4px solid #3367d6;border-radius:50%;
  animation: svelte-nag87b-lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;border-color:#3367d6 transparent transparent transparent;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(1) {animation-delay:-0.45s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(2) {animation-delay:-0.3s;}.lds-ring.svelte-nag87b div:where(.svelte-nag87b):nth-child(3) {animation-delay:-0.15s;}
@keyframes svelte-nag87b-lds-ring {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}`
};
function Qa(t, e) {
  G(t, Xa);
  var r = Za();
  E(t, r);
}
customElements.define("mv-elegant-spinner", Y(Qa, {}, [], [], !0));
export {
  Ma as ElegantBuffet,
  Wa as ElegantBuffetEdit,
  ja as ElegantBuffetView,
  It as ElegantHeader,
  hn as ElegantHeroSearch,
  fn as ElegantSearch,
  Qa as ElegantSpinner,
  xn as ElegantTable,
  _l as IngBuffet,
  Hi as IngButton,
  Li as IngButtonGray,
  Cl as IngForm,
  dn as IngHeaderLite,
  qt as IngInput,
  rr as IngSelect,
  zl as IngTable
};
