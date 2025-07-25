var En = Object.defineProperty;
var or = (t) => {
  throw TypeError(t);
};
var Sn = (t, e, r) => e in t ? En(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var _e = (t, e, r) => Sn(t, typeof e != "symbol" ? e + "" : e, r), ur = (t, e, r) => e.has(t) || or("Cannot " + r);
var le = (t, e, r) => (ur(t, e, "read from private field"), r ? r.call(t) : e.get(t)), zt = (t, e, r) => e.has(t) ? or("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ot = (t, e, r, n) => (ur(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const qn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qn);
const Gt = 1, Yt = 2, yr = 4, Cn = 8, In = 16, Tn = 1, Nn = 4, $n = 8, An = 16, zn = 4, On = 1, Rn = 2, wr = "[", Wt = "[!", Kt = "]", je = {}, ue = Symbol(), kr = !1;
function wt(t) {
  console.warn("hydration_mismatch");
}
var Zt = Array.isArray, Xt = Array.from, pt = Object.keys, gt = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Hn = Object.getOwnPropertyDescriptors, Un = Object.prototype, Ln = Array.prototype, Ht = Object.getPrototypeOf;
function Mn(t) {
  return typeof t == "function";
}
const We = () => {
};
function Er(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const qe = 2, Sr = 4, kt = 8, Et = 16, ye = 32, rt = 64, Ge = 128, _t = 256, ce = 512, ze = 1024, nt = 2048, me = 4096, it = 8192, qr = 16384, St = 32768, jn = 1 << 18, Cr = 1 << 19, De = Symbol("$state"), Dn = Symbol("");
function Ir(t) {
  return t === this.v;
}
function Fn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Tr(t) {
  return !Fn(t, this.v);
}
function Bn() {
  throw new Error("effect_update_depth_exceeded");
}
function Pn() {
  throw new Error("hydration_failed");
}
function Vn(t) {
  throw new Error("props_invalid_value");
}
function Jn() {
  throw new Error("state_descriptors_fixed");
}
function Gn() {
  throw new Error("state_prototype_fixed");
}
function Yn() {
  throw new Error("state_unsafe_local_read");
}
function Wn() {
  throw new Error("state_unsafe_mutation");
}
let Nr = !1;
function fe(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Ir,
    version: 0
  };
}
function Se(t) {
  return /* @__PURE__ */ Kn(fe(t));
}
// @__NO_SIDE_EFFECTS__
function Qt(t, e = !1) {
  const r = fe(t);
  return e || (r.equals = Tr), r;
}
// @__NO_SIDE_EFFECTS__
function Kn(t) {
  return Y !== null && Y.f & qe && (be === null ? ni([t]) : be.push(t)), t;
}
function W(t, e) {
  return Y !== null && ai() && Y.f & (qe | Et) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (be === null || !be.includes(t)) && Wn(), Ut(t, e);
}
function Ut(t, e) {
  return t.equals(e) || (t.v = e, t.version = Jr(), $r(t, ze), L !== null && L.f & ce && !(L.f & ye) && (ie !== null && ie.includes(t) ? (Ie(L, ze), Nt(L)) : $e === null ? ii([t]) : $e.push(t))), e;
}
function $r(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & ze || (Ie(a, e), l & (ce | Ge) && (l & qe ? $r(
        /** @type {Derived} */
        a,
        nt
      ) : Nt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Xe(t) {
  var e = qe | ze;
  L === null ? e |= Ge : L.f |= Cr;
  const r = {
    children: null,
    ctx: xe,
    deps: null,
    equals: Ir,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: L
  };
  if (Y !== null && Y.f & qe) {
    var n = (
      /** @type {Derived} */
      Y
    );
    (n.children ?? (n.children = [])).push(r);
  }
  return r;
}
function Ar(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & qe ? er(
        /** @type {Derived} */
        n
      ) : Oe(
        /** @type {Effect} */
        n
      );
    }
  }
}
function zr(t) {
  var e, r = L;
  se(t.parent);
  try {
    Ar(t), e = Gr(t);
  } finally {
    se(r);
  }
  return e;
}
function Or(t) {
  var e = zr(t), r = (Me || t.f & Ge) && t.deps !== null ? nt : ce;
  Ie(t, r), t.equals(e) || (t.v = e, t.version = Jr());
}
function er(t) {
  Ar(t), et(t, 0), Ie(t, it), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Zn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function at(t, e, r, n = !0) {
  var i = (t & rt) !== 0, a = L, l = {
    ctx: xe,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | ze,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var s = Fe;
    try {
      dr(!0), Tt(l), l.f |= qr;
    } catch (f) {
      throw Oe(l), f;
    } finally {
      dr(s);
    }
  } else e !== null && Nt(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Cr) === 0;
  if (!u && !i && n && (a !== null && Zn(l, a), Y !== null && Y.f & qe)) {
    var o = (
      /** @type {Derived} */
      Y
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Rr(t) {
  const e = at(rt, t, !0);
  return () => {
    Oe(e);
  };
}
function lt(t) {
  return at(Sr, t, !1);
}
function qt(t) {
  return at(kt, t, !0);
}
function N(t) {
  return Ct(t);
}
function Ct(t, e = 0) {
  return at(kt | Et | e, t, !0);
}
function Ve(t, e = !0) {
  return at(kt | ye, t, !0, e);
}
function Hr(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Y;
    pe(null);
    try {
      e.call(null);
    } finally {
      pe(r);
    }
  }
}
function Ur(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      er(e[r]);
  }
}
function Lr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Oe(r, e), r = n;
  }
}
function Xn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & ye || Oe(e), e = r;
  }
}
function Oe(t, e = !0) {
  var r = !1;
  if ((e || t.f & jn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ we(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Lr(t, e && !r), Ur(t), et(t, 0), Ie(t, it);
  var l = t.transitions;
  if (l !== null)
    for (const u of l)
      u.stop();
  Hr(t);
  var s = t.parent;
  s !== null && s.first !== null && Mr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Mr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Lt(t, e) {
  var r = [];
  tr(t, r, !0), jr(r, () => {
    Oe(t), e && e();
  });
}
function jr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function tr(t, e, r) {
  if (!(t.f & me)) {
    if (t.f ^= me, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & St) !== 0 || (n.f & ye) !== 0;
      tr(n, e, a ? r : !1), n = i;
    }
  }
}
function mt(t) {
  Dr(t, !0);
}
function Dr(t, e) {
  if (t.f & me) {
    st(t) && Tt(t), t.f ^= me;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & St) !== 0 || (r.f & ye) !== 0;
      Dr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const Qn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let bt = !1, xt = !1, Mt = [], jt = [];
function Fr() {
  bt = !1;
  const t = Mt.slice();
  Mt = [], Er(t);
}
function Br() {
  xt = !1;
  const t = jt.slice();
  jt = [], Er(t);
}
function It(t) {
  bt || (bt = !0, queueMicrotask(Fr)), Mt.push(t);
}
function ei(t) {
  xt || (xt = !0, Qn(Br)), jt.push(t);
}
function ti() {
  bt && Fr(), xt && Br();
}
const Pr = 0, ri = 1;
let ft = Pr, Qe = !1, Fe = !1;
function dr(t) {
  Fe = t;
}
let Re = [], Be = 0;
let Y = null;
function pe(t) {
  Y = t;
}
let L = null;
function se(t) {
  L = t;
}
let be = null;
function ni(t) {
  be = t;
}
let ie = null, de = 0, $e = null;
function ii(t) {
  $e = t;
}
let Vr = 0, Me = !1, xe = null;
function Jr() {
  return ++Vr;
}
function ai() {
  return !Nr;
}
function st(t) {
  var l, s;
  var e = t.f;
  if (e & ze)
    return !0;
  if (e & nt) {
    var r = t.deps, n = (e & Ge) !== 0;
    if (r !== null) {
      var i;
      if (e & _t) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= _t;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (st(
          /** @type {Derived} */
          a
        ) && Or(
          /** @type {Derived} */
          a
        ), n && L !== null && !Me && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || Ie(t, ce);
  }
  return !1;
}
function li(t, e, r) {
  throw t;
}
function Gr(t) {
  var v;
  var e = ie, r = de, n = $e, i = Y, a = Me, l = be, s = xe, u = t.f;
  ie = /** @type {null | Value[]} */
  null, de = 0, $e = null, Y = u & (ye | rt) ? null : t, Me = !Fe && (u & Ge) !== 0, be = null, xe = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), f = t.deps;
    if (ie !== null) {
      var d;
      if (et(t, de), f !== null && de > 0)
        for (f.length = de + ie.length, d = 0; d < ie.length; d++)
          f[de + d] = ie[d];
      else
        t.deps = f = ie;
      if (!Me)
        for (d = de; d < f.length; d++)
          ((v = f[d]).reactions ?? (v.reactions = [])).push(t);
    } else f !== null && de < f.length && (et(t, de), f.length = de);
    return o;
  } finally {
    ie = e, de = r, $e = n, Y = i, Me = a, be = l, xe = s;
  }
}
function si(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = r.indexOf(t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && e.f & qe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ie === null || !ie.includes(e)) && (Ie(e, nt), e.f & (Ge | _t) || (e.f ^= _t), et(
    /** @type {Derived} **/
    e,
    0
  ));
}
function et(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      si(t, r[n]);
}
function Tt(t) {
  var e = t.f;
  if (!(e & it)) {
    Ie(t, ce);
    var r = L;
    L = t;
    try {
      e & Et ? Xn(t) : Lr(t), Ur(t), Hr(t);
      var n = Gr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Vr;
    } catch (i) {
      li(
        /** @type {Error} */
        i
      );
    } finally {
      L = r;
    }
  }
}
function Yr() {
  Be > 1e3 && (Be = 0, Bn()), Be++;
}
function Wr(t) {
  var e = t.length;
  if (e !== 0) {
    Yr();
    var r = Fe;
    Fe = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & ce || (i.f ^= ce);
        var a = [];
        Kr(i, a), oi(a);
      }
    } finally {
      Fe = r;
    }
  }
}
function oi(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (it | me)) && st(n) && (Tt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Mr(n) : n.fn = null));
    }
}
function ui() {
  if (Qe = !1, Be > 1001)
    return;
  const t = Re;
  Re = [], Wr(t), Qe || (Be = 0);
}
function Nt(t) {
  ft === Pr && (Qe || (Qe = !0, queueMicrotask(ui)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (rt | ye)) {
      if (!(r & ce)) return;
      e.f ^= ce;
    }
  }
  Re.push(e);
}
function Kr(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ye) !== 0, l = a && (i & ce) !== 0;
    if (!l && !(i & me))
      if (i & kt) {
        a ? r.f ^= ce : st(r) && Tt(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & Sr && n.push(r);
    var u = r.next;
    if (u === null) {
      let d = r.parent;
      for (; d !== null; ) {
        if (t === d)
          break e;
        var o = d.next;
        if (o !== null) {
          r = o;
          continue e;
        }
        d = d.parent;
      }
    }
    r = u;
  }
  for (var f = 0; f < n.length; f++)
    s = n[f], e.push(s), Kr(s, e);
}
function Zr(t) {
  var e = ft, r = Re;
  try {
    Yr();
    const i = [];
    ft = ri, Re = i, Qe = !1, Wr(r);
    var n = t == null ? void 0 : t();
    return ti(), (Re.length > 0 || i.length > 0) && Zr(), Be = 0, n;
  } finally {
    ft = e, Re = r;
  }
}
function h(t) {
  var s;
  var e = t.f, r = (e & qe) !== 0;
  if (r && e & it) {
    var n = zr(
      /** @type {Derived} */
      t
    );
    return er(
      /** @type {Derived} */
      t
    ), n;
  }
  if (Y !== null) {
    be !== null && be.includes(t) && Yn();
    var i = Y.deps;
    ie === null && i !== null && i[de] === t ? de++ : ie === null ? ie = [t] : ie.push(t), $e !== null && L !== null && L.f & ce && !(L.f & ye) && $e.includes(t) && (Ie(L, ze), Nt(L));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, st(a) && Or(a)), t.v;
}
function yt(t) {
  const e = Y;
  try {
    return Y = null, t();
  } finally {
    Y = e;
  }
}
const di = ~(ze | nt | ce);
function Ie(t, e) {
  t.f = t.f & di | e;
}
function ee(t, e = !1, r) {
  xe = {
    p: xe,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function te(t) {
  const e = xe;
  if (e !== null) {
    const l = e.e;
    if (l !== null) {
      var r = L, n = Y;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          se(a.effect), pe(a.reaction), lt(a.fn);
        }
      } finally {
        se(r), pe(n);
      }
    }
    xe = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function V(t, e = null, r) {
  if (typeof t != "object" || t === null || De in t)
    return t;
  const n = Ht(t);
  if (n !== Un && n !== Ln)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Zt(t), l = fe(0);
  a && i.set("length", fe(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Jn();
        var d = i.get(o);
        return d === void 0 ? (d = fe(f.value), i.set(o, d)) : W(d, V(f.value, s)), !0;
      },
      deleteProperty(u, o) {
        var f = i.get(o);
        if (f === void 0)
          o in u && i.set(o, fe(ue));
        else {
          if (a && typeof o == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < d.v && W(d, v);
          }
          W(f, ue), cr(l);
        }
        return !0;
      },
      get(u, o, f) {
        var c;
        if (o === De)
          return t;
        var d = i.get(o), v = o in u;
        if (d === void 0 && (!v || (c = He(u, o)) != null && c.writable) && (d = fe(V(v ? u[o] : ue, s)), i.set(o, d)), d !== void 0) {
          var m = h(d);
          return m === ue ? void 0 : m;
        }
        return Reflect.get(u, o, f);
      },
      getOwnPropertyDescriptor(u, o) {
        var f = Reflect.getOwnPropertyDescriptor(u, o);
        if (f && "value" in f) {
          var d = i.get(o);
          d && (f.value = h(d));
        } else if (f === void 0) {
          var v = i.get(o), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== ue)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return f;
      },
      has(u, o) {
        var m;
        if (o === De)
          return !0;
        var f = i.get(o), d = f !== void 0 && f.v !== ue || Reflect.has(u, o);
        if (f !== void 0 || L !== null && (!d || (m = He(u, o)) != null && m.writable)) {
          f === void 0 && (f = fe(d ? V(u[o], s) : ue), i.set(o, f));
          var v = h(f);
          if (v === ue)
            return !1;
        }
        return d;
      },
      set(u, o, f, d) {
        var g;
        var v = i.get(o), m = o in u;
        if (a && o === "length")
          for (var c = f; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var p = i.get(c + "");
            p !== void 0 ? W(p, ue) : c in u && (p = fe(ue), i.set(c + "", p));
          }
        v === void 0 ? (!m || (g = He(u, o)) != null && g.writable) && (v = fe(void 0), W(v, V(f, s)), i.set(o, v)) : (m = v.v !== ue, W(v, V(f, s)));
        var w = Reflect.getOwnPropertyDescriptor(u, o);
        if (w != null && w.set && w.set.call(d, f), !m) {
          if (a && typeof o == "string") {
            var _ = (
              /** @type {Source<number>} */
              i.get("length")
            ), b = Number(o);
            Number.isInteger(b) && b >= _.v && W(_, b + 1);
          }
          cr(l);
        }
        return !0;
      },
      ownKeys(u) {
        h(l);
        var o = Reflect.ownKeys(u).filter((v) => {
          var m = i.get(v);
          return m === void 0 || m.v !== ue;
        });
        for (var [f, d] of i)
          d.v !== ue && !(f in u) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Gn();
      }
    }
  );
}
function cr(t, e = 1) {
  W(t, t.v + e);
}
function vr(t) {
  return t !== null && typeof t == "object" && De in t ? t[De] : t;
}
function ci(t, e) {
  return Object.is(vr(t), vr(e));
}
var fr, Xr, Qr;
function Dt() {
  if (fr === void 0) {
    fr = window;
    var t = Element.prototype, e = Node.prototype;
    Xr = He(e, "firstChild").get, Qr = He(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Je(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ce(t) {
  return Xr.call(t);
}
// @__NO_SIDE_EFFECTS__
function we(t) {
  return Qr.call(t);
}
function S(t, e) {
  if (!D)
    return /* @__PURE__ */ Ce(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(B)
  );
  if (r === null)
    r = B.appendChild(Je());
  else if (e && r.nodeType !== 3) {
    var n = Je();
    return r == null || r.before(n), he(n), n;
  }
  return he(r), r;
}
function G(t, e) {
  if (!D) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ce(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ we(r) : r;
  }
  return B;
}
function T(t, e = 1, r = !1) {
  let n = D ? B : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ we(n);
  if (!D)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Je();
    return n == null || n.before(a), he(a), a;
  }
  return he(n), /** @type {TemplateNode} */
  n;
}
function rr(t) {
  t.textContent = "";
}
let D = !1;
function Ee(t) {
  D = t;
}
let B;
function he(t) {
  if (t === null)
    throw wt(), je;
  return B = t;
}
function Ue() {
  return he(
    /** @type {TemplateNode} */
    /* @__PURE__ */ we(B)
  );
}
function y(t) {
  if (D) {
    if (/* @__PURE__ */ we(B) !== null)
      throw wt(), je;
    B = t;
  }
}
function en(t = 1) {
  if (D) {
    for (var e = t, r = B; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ we(r);
    B = r;
  }
}
function Ft() {
  for (var t = 0, e = B; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Kt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === wr || r === Wt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(e)
    );
    e.remove(), e = n;
  }
}
function vi(t) {
  D && /* @__PURE__ */ Ce(t) !== null && rr(t);
}
let hr = !1;
function tn() {
  hr || (hr = !0, document.addEventListener(
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
function fi(t) {
  var e = Y, r = L;
  pe(null), se(null);
  try {
    return t();
  } finally {
    pe(e), se(r);
  }
}
function nr(t, e, r, n = r) {
  t.addEventListener(e, () => fi(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, tn();
}
const rn = /* @__PURE__ */ new Set(), Bt = /* @__PURE__ */ new Set();
function re(t) {
  for (var e = 0; e < t.length; e++)
    rn.add(t[e]);
  for (var r of Bt)
    r(t);
}
function dt(t) {
  var b;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  ), l = 0, s = t.__root;
  if (s) {
    var u = i.indexOf(s);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    u <= o && (l = u);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    gt(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = Y, d = L;
    pe(null), se(null);
    try {
      for (var v, m = []; a !== null; ) {
        var c = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + n];
          if (p !== void 0 && !/** @type {any} */
          a.disabled)
            if (Zt(p)) {
              var [w, ..._] = p;
              w.apply(a, [t, ..._]);
            } else
              p.call(a, t);
        } catch (g) {
          v ? m.push(g) : v = g;
        }
        if (t.cancelBubble || c === e || c === null)
          break;
        a = c;
      }
      if (v) {
        for (let g of m)
          queueMicrotask(() => {
            throw g;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, pe(f), se(d);
    }
  }
}
function nn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ae(t, e) {
  var r = (
    /** @type {Effect} */
    L
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
  var r = (e & On) !== 0, n = (e & Rn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (D)
      return Ae(B, null), B;
    i === void 0 && (i = nn(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ce(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ae(s, u);
    } else
      Ae(l, l);
    return l;
  };
}
function ae() {
  if (D)
    return Ae(B, null), B;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Je();
  return t.append(e, r), Ae(e, r), t;
}
function q(t, e) {
  if (D) {
    L.nodes_end = B, Ue();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const hi = ["touchstart", "touchmove"];
function pi(t) {
  return hi.includes(t);
}
let Pt = !0;
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function an(t, e) {
  return ln(t, e);
}
function gi(t, e) {
  Dt(), e.intro = e.intro ?? !1;
  const r = e.target, n = D, i = B;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== wr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ we(a);
    if (!a)
      throw je;
    Ee(!0), he(
      /** @type {Comment} */
      a
    ), Ue();
    const l = ln(t, { ...e, anchor: a });
    if (B === null || B.nodeType !== 8 || /** @type {Comment} */
    B.data !== Kt)
      throw wt(), je;
    return Ee(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === je)
      return e.recover === !1 && Pn(), Dt(), rr(r), Ee(!1), an(t, e);
    throw l;
  } finally {
    Ee(n), he(i);
  }
}
const Le = /* @__PURE__ */ new Map();
function ln(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Dt();
  var s = /* @__PURE__ */ new Set(), u = (d) => {
    for (var v = 0; v < d.length; v++) {
      var m = d[v];
      if (!s.has(m)) {
        s.add(m);
        var c = pi(m);
        e.addEventListener(m, dt, { passive: c });
        var p = Le.get(m);
        p === void 0 ? (document.addEventListener(m, dt, { passive: c }), Le.set(m, 1)) : Le.set(m, p + 1);
      }
    }
  };
  u(Xt(rn)), Bt.add(u);
  var o = void 0, f = Rr(() => {
    var d = r ?? e.appendChild(Je());
    return Ve(() => {
      if (a) {
        ee({});
        var v = (
          /** @type {ComponentContext} */
          xe
        );
        v.c = a;
      }
      i && (n.$$events = i), D && Ae(
        /** @type {TemplateNode} */
        d,
        null
      ), Pt = l, o = t(d, n) || {}, Pt = !0, D && (L.nodes_end = B), a && te();
    }), () => {
      var c;
      for (var v of s) {
        e.removeEventListener(v, dt);
        var m = (
          /** @type {number} */
          Le.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, dt), Le.delete(v)) : Le.set(v, m);
      }
      Bt.delete(u), Vt.delete(o), d !== r && ((c = d.parentNode) == null || c.removeChild(d));
    };
  });
  return Vt.set(o, f), o;
}
let Vt = /* @__PURE__ */ new WeakMap();
function _i(t) {
  const e = Vt.get(t);
  e && e();
}
function O(t, e, r, n = null, i = !1) {
  D && Ue();
  var a = t, l = null, s = null, u = null, o = i ? St : 0;
  Ct(() => {
    if (u === (u = !!e())) return;
    let f = !1;
    if (D) {
      const d = (
        /** @type {Comment} */
        a.data === Wt
      );
      u === d && (a = Ft(), he(a), Ee(!1), f = !0);
    }
    u ? (l ? mt(l) : l = Ve(() => r(a)), s && Lt(s, () => {
      s = null;
    })) : (s ? mt(s) : n && (s = Ve(() => n(a))), l && Lt(l, () => {
      l = null;
    })), f && Ee(!0);
  }, o), D && (a = B);
}
function X(t, e) {
  return e;
}
function mi(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    tr(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    rr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), Te(t, e[0].prev, e[a - 1].next);
  }
  jr(i, () => {
    for (var o = 0; o < a; o++) {
      var f = e[o];
      s || (n.delete(f.k), Te(t, f.prev, f.next)), Oe(f.e, !s);
    }
  });
}
function Q(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & yr) !== 0;
  if (u) {
    var o = (
      /** @type {Element} */
      t
    );
    l = D ? he(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ce(o)
    ) : o.appendChild(Je());
  }
  D && Ue();
  var f = null, d = !1;
  Ct(() => {
    var v = r(), m = Zt(v) ? v : v == null ? [] : Xt(v), c = m.length;
    if (d && c === 0)
      return;
    d = c === 0;
    let p = !1;
    if (D) {
      var w = (
        /** @type {Comment} */
        l.data === Wt
      );
      w !== (c === 0) && (l = Ft(), he(l), Ee(!1), p = !0);
    }
    if (D) {
      for (var _ = null, b, g = 0; g < c; g++) {
        if (B.nodeType === 8 && /** @type {Comment} */
        B.data === Kt) {
          l = /** @type {Comment} */
          B, p = !0, Ee(!1);
          break;
        }
        var k = m[g], x = n(k, g);
        b = sn(B, s, _, null, k, x, g, i, e), s.items.set(x, b), _ = b;
      }
      c > 0 && he(Ft());
    }
    if (!D) {
      var I = (
        /** @type {Effect} */
        Y
      );
      bi(m, s, l, i, e, (I.f & me) !== 0, n);
    }
    a !== null && (c === 0 ? f ? mt(f) : f = Ve(() => a(l)) : f !== null && Lt(f, () => {
      f = null;
    })), p && Ee(!0), r();
  }), D && (l = B);
}
function bi(t, e, r, n, i, a, l) {
  var H, P, ne, oe;
  var s = (i & Cn) !== 0, u = (i & (Gt | Yt)) !== 0, o = t.length, f = e.items, d = e.first, v = d, m, c = null, p, w = [], _ = [], b, g, k, x;
  if (s)
    for (x = 0; x < o; x += 1)
      b = t[x], g = l(b, x), k = f.get(g), k !== void 0 && ((H = k.a) == null || H.measure(), (p ?? (p = /* @__PURE__ */ new Set())).add(k));
  for (x = 0; x < o; x += 1) {
    if (b = t[x], g = l(b, x), k = f.get(g), k === void 0) {
      var I = v ? (
        /** @type {TemplateNode} */
        v.e.nodes_start
      ) : r;
      c = sn(
        I,
        e,
        c,
        c === null ? e.first : c.next,
        b,
        g,
        x,
        n,
        i
      ), f.set(g, c), w = [], _ = [], v = c.next;
      continue;
    }
    if (u && xi(k, b, x, i), k.e.f & me && (mt(k.e), s && ((P = k.a) == null || P.unfix(), (p ?? (p = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (m !== void 0 && m.has(k)) {
        if (w.length < _.length) {
          var R = _[0], z;
          c = R.prev;
          var U = w[0], J = w[w.length - 1];
          for (z = 0; z < w.length; z += 1)
            pr(w[z], R, r);
          for (z = 0; z < _.length; z += 1)
            m.delete(_[z]);
          Te(e, U.prev, J.next), Te(e, c, U), Te(e, J, R), v = R, c = J, x -= 1, w = [], _ = [];
        } else
          m.delete(k), pr(k, v, r), Te(e, k.prev, k.next), Te(e, k, c === null ? e.first : c.next), Te(e, c, k), c = k;
        continue;
      }
      for (w = [], _ = []; v !== null && v.k !== g; )
        (a || !(v.e.f & me)) && (m ?? (m = /* @__PURE__ */ new Set())).add(v), _.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    w.push(k), c = k, v = k.next;
  }
  if (v !== null || m !== void 0) {
    for (var F = m === void 0 ? [] : Xt(m); v !== null; )
      (a || !(v.e.f & me)) && F.push(v), v = v.next;
    var j = F.length;
    if (j > 0) {
      var A = i & yr && o === 0 ? r : null;
      if (s) {
        for (x = 0; x < j; x += 1)
          (ne = F[x].a) == null || ne.measure();
        for (x = 0; x < j; x += 1)
          (oe = F[x].a) == null || oe.fix();
      }
      mi(e, F, A, f);
    }
  }
  s && It(() => {
    var ge;
    if (p !== void 0)
      for (k of p)
        (ge = k.a) == null || ge.apply();
  }), L.first = e.first && e.first.e, L.last = c && c.e;
}
function xi(t, e, r, n) {
  n & Gt && Ut(t.v, e), n & Yt ? Ut(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function sn(t, e, r, n, i, a, l, s, u) {
  var o = (u & Gt) !== 0, f = (u & In) === 0, d = o ? f ? /* @__PURE__ */ Qt(i) : fe(i) : i, v = u & Yt ? fe(l) : l, m = {
    i: v,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return m.e = Ve(() => s(t, d, v), D), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? e.first = m : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function pr(t, e, r) {
  for (var n = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : r, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : r, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ we(a)
    );
    i.before(a), a = l;
  }
}
function Te(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function yi(t, e, r, n, i) {
  var a = t, l = "", s;
  Ct(() => {
    if (l === (l = e() ?? "")) {
      D && Ue();
      return;
    }
    s !== void 0 && (Oe(s), s = void 0), l !== "" && (s = Ve(() => {
      if (D) {
        B.data;
        for (var u = Ue(), o = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          o = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ we(u);
        if (u === null)
          throw wt(), je;
        Ae(B, o), a = he(u);
        return;
      }
      var f = l + "", d = nn(f);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function ir(t, e, r, n, i) {
  var s;
  D && Ue();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function K(t, e) {
  It(() => {
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
function ot(t) {
  if (D) {
    var e = !1, r = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var n = t.value;
          $(t, "value", null), t.value = n;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          $(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = r, ei(r), tn();
  }
}
function $(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  D && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Dn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && on(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Rt(t, e, r) {
  var n = Y, i = L;
  pe(null), se(null);
  try {
    on(t).includes(e) ? t[e] = r : $(t, e, r);
  } finally {
    pe(n), se(i);
  }
}
var gr = /* @__PURE__ */ new Map();
function on(t) {
  var e = gr.get(t.nodeName);
  if (e) return e;
  gr.set(t.nodeName, e = []);
  for (var r, n = Ht(t), i = Element.prototype; i !== n; ) {
    r = Hn(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = Ht(n);
  }
  return e;
}
function Ke(t, e) {
  var r = t.__className, n = wi(e);
  D && t.className === n ? t.__className = n : (r !== n || D && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function wi(t) {
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
const ki = () => performance.now(), Ne = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => ki(),
  tasks: /* @__PURE__ */ new Set()
};
function un(t) {
  Ne.tasks.forEach((e) => {
    e.c(t) || (Ne.tasks.delete(e), e.f());
  }), Ne.tasks.size !== 0 && Ne.tick(un);
}
function Ei(t) {
  let e;
  return Ne.tasks.size === 0 && Ne.tick(un), {
    promise: new Promise((r) => {
      Ne.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Ne.tasks.delete(e);
    }
  };
}
function ct(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Si(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function _r(t) {
  const e = {}, r = t.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = Si(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const qi = (t) => t;
function Ci(t, e, r, n) {
  var i = (t & zn) !== 0, a = "both", l, s = e.inert, u, o;
  function f() {
    var p = Y, w = L;
    pe(null), se(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      pe(p), se(w);
    }
  }
  var d = {
    is_global: i,
    in() {
      e.inert = s, ct(e, "introstart"), u = Jt(e, f(), o, 1, () => {
        ct(e, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(p) {
      e.inert = !0, ct(e, "outrostart"), o = Jt(e, f(), u, 0, () => {
        ct(e, "outroend"), p == null || p();
      });
    },
    stop: () => {
      u == null || u.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    L
  );
  if ((v.transitions ?? (v.transitions = [])).push(d), Pt) {
    var m = i;
    if (!m) {
      for (var c = (
        /** @type {Effect | null} */
        v.parent
      ); c && c.f & St; )
        for (; (c = c.parent) && !(c.f & Et); )
          ;
      m = !c || (c.f & qr) !== 0;
    }
    m && lt(() => {
      yt(() => d.in());
    });
  }
}
function Jt(t, e, r, n, i) {
  var a = n === 1;
  if (Mn(e)) {
    var l, s = !1;
    return It(() => {
      if (!s) {
        var w = e({ direction: a ? "in" : "out" });
        l = Jt(t, w, r, n, i);
      }
    }), {
      abort: () => {
        s = !0, l == null || l.abort();
      },
      deactivate: () => l.deactivate(),
      reset: () => l.reset(),
      t: () => l.t()
    };
  }
  if (r == null || r.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: We,
      deactivate: We,
      reset: We,
      t: () => n
    };
  const { delay: u = 0, css: o, tick: f, easing: d = qi } = e;
  var v = [];
  if (a && r === void 0 && (f && f(0, 1), o)) {
    var m = _r(o(0, 1));
    v.push(m, m);
  }
  var c = () => 1 - n, p = t.animate(v, { duration: u });
  return p.onfinish = () => {
    var w = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var _ = n - w, b = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), g = [];
    if (b > 0) {
      if (o)
        for (var k = Math.ceil(b / 16.666666666666668), x = 0; x <= k; x += 1) {
          var I = w + _ * d(x / k), R = o(I, 1 - I);
          g.push(_r(R));
        }
      c = () => {
        var z = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          p.currentTime
        );
        return w + _ * d(z / b);
      }, f && Ei(() => {
        if (p.playState !== "running") return !1;
        var z = c();
        return f(z, 1 - z), !0;
      });
    }
    p = t.animate(g, { duration: b, fill: "forwards" }), p.onfinish = () => {
      c = () => n, f == null || f(n, 1 - n), i();
    };
  }, {
    abort: () => {
      p && (p.cancel(), p.effect = null, p.onfinish = We);
    },
    deactivate: () => {
      i = We;
    },
    reset: () => {
      n === 0 && (f == null || f(1, 0));
    },
    t: () => c()
  };
}
function tt(t, e, r = e) {
  nr(t, "input", () => {
    var n = mr(t) ? br(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), qt(() => {
    var n = e();
    if (D && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    mr(t) && n === br(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function Ii(t, e, r = e) {
  nr(t, "change", () => {
    var n = t.checked;
    r(n);
  }), e() == null && r(!1), qt(() => {
    var n = e();
    t.checked = !!n;
  });
}
function mr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function br(t) {
  return t === "" ? null : +t;
}
function dn(t, e, r) {
  if (t.multiple)
    return Ni(t, e);
  for (var n of t.options) {
    var i = Ze(n);
    if (ci(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Ti(t, e) {
  lt(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      dn(t, n);
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
function cn(t, e, r = e) {
  var n = !0;
  nr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), Ze);
    else {
      var a = t.querySelector(":checked");
      i = a && Ze(a);
    }
    r(i);
  }), lt(() => {
    var i = e();
    if (dn(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = Ze(a), r(i));
    }
    t.__value = i, n = !1;
  }), Ti(t);
}
function Ni(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(Ze(r));
}
function Ze(t) {
  return "__value" in t ? t.__value : t.value;
}
function xr(t, e) {
  return t === e || (t == null ? void 0 : t[De]) === e;
}
function ar(t = {}, e, r, n) {
  return lt(() => {
    var i, a;
    return qt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], yt(() => {
        t !== r(...a) && (e(t, ...a), i && xr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      It(() => {
        a && xr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let vt = !1;
function $i(t) {
  var e = vt;
  try {
    return vt = !1, [t(), vt];
  } finally {
    vt = e;
  }
}
function Ai(t) {
  for (var e = L, r = L; e !== null && !(e.f & (ye | rt)); )
    e = e.parent;
  try {
    return se(e), t();
  } finally {
    se(r);
  }
}
function E(t, e, r, n) {
  var x;
  var i = (r & Tn) !== 0, a = !Nr, l = (r & $n) !== 0, s = (r & An) !== 0, u = !1, o;
  l ? [o, u] = $i(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var f = (x = He(t, e)) == null ? void 0 : x.set, d = (
    /** @type {V} */
    n
  ), v = !0, m = !1, c = () => (m = !0, v && (v = !1, s ? d = yt(
    /** @type {() => V} */
    n
  ) : d = /** @type {V} */
  n), d);
  o === void 0 && n !== void 0 && (f && a && Vn(), o = c(), f && f(o));
  var p;
  if (p = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? c() : (v = !0, m = !1, I);
  }, !(r & Nn))
    return p;
  if (f) {
    var w = t.$$legacy;
    return function(I, R) {
      return arguments.length > 0 ? ((!R || w || u) && f(R ? p() : I), I) : p();
    };
  }
  var _ = !1, b = !1, g = /* @__PURE__ */ Qt(o), k = Ai(
    () => /* @__PURE__ */ Xe(() => {
      var I = p(), R = h(g);
      return _ ? (_ = !1, b = !0, R) : (b = !1, g.v = I);
    })
  );
  return i || (k.equals = Tr), function(I, R) {
    if (arguments.length > 0) {
      const z = R ? h(k) : l ? V(I) : I;
      return k.equals(z) || (_ = !0, W(g, z), m && d !== void 0 && (d = z), yt(() => h(k))), I;
    }
    return h(k);
  };
}
function zi(t) {
  return new Oi(t);
}
var ke, ve;
class Oi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    zt(this, ke);
    /** @type {Record<string, any>} */
    zt(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var u = /* @__PURE__ */ Qt(s);
      return r.set(l, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, s) {
          return h(r.get(s) ?? n(s, Reflect.get(l, s)));
        },
        has(l, s) {
          return h(r.get(s) ?? n(s, Reflect.get(l, s))), Reflect.has(l, s);
        },
        set(l, s, u) {
          return W(r.get(s) ?? n(s, u), u), Reflect.set(l, s, u);
        }
      }
    );
    Ot(this, ve, (e.hydrate ? gi : an)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Zr(), Ot(this, ke, i.$$events);
    for (const l of Object.keys(le(this, ve)))
      l === "$set" || l === "$destroy" || l === "$on" || gt(this, l, {
        get() {
          return le(this, ve)[l];
        },
        /** @param {any} value */
        set(s) {
          le(this, ve)[l] = s;
        },
        enumerable: !0
      });
    le(this, ve).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, le(this, ve).$destroy = () => {
      _i(le(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    le(this, ve).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    le(this, ke)[e] = le(this, ke)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return le(this, ke)[e].push(n), () => {
      le(this, ke)[e] = le(this, ke)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    le(this, ve).$destroy();
  }
}
ke = new WeakMap(), ve = new WeakMap();
let vn;
typeof HTMLElement == "function" && (vn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    _e(this, "$$ctor");
    /** Slots */
    _e(this, "$$s");
    /** @type {any} The Svelte component instance */
    _e(this, "$$c");
    /** Whether or not the custom element is connected */
    _e(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _e(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _e(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _e(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _e(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _e(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _e(this, "$$me");
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
        return (a) => {
          const l = document.createElement("slot");
          i !== "default" && (l.name = i), q(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ri(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = ht(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = zi({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Rr(() => {
        qt(() => {
          var i;
          this.$$r = !0;
          for (const a of pt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = ht(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, l);
          }
          this.$$r = !1;
        });
      });
      for (const i in this.$$l)
        for (const a of this.$$l[i]) {
          const l = this.$$c.$on(i, a);
          this.$$l_u.set(a, l);
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = ht(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return pt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function ht(t, e, r, n) {
  var a;
  const i = (a = r[t]) == null ? void 0 : a.type;
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
function Ri(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Z(t, e, r, n, i, a) {
  let l = class extends vn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return pt(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return pt(e).forEach((s) => {
    gt(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var d;
        u = ht(s, u, e), this.$$d[s] = u;
        var o = this.$$c;
        if (o) {
          var f = (d = He(o, s)) == null ? void 0 : d.get;
          f ? o[s] = u : o.$set({ [s]: u });
        }
      }
    });
  }), n.forEach((s) => {
    gt(l.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var Hi = /* @__PURE__ */ C('<button type="button"><!></button>');
const Ui = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Li(t, e) {
  K(t, Ui);
  const r = E(e, "type", 3, "primary"), n = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const i = E(e, "onClick", 3, void 0);
  var a = Hi();
  a.__click = function(...s) {
    var u;
    (u = i()) == null || u.apply(this, s);
  };
  var l = S(a);
  ir(l, e, "default", {}), y(a), N(() => Ke(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), q(t, a);
}
re(["click"]);
customElements.define("ing-button", Z(Li, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Mi = /* @__PURE__ */ C('<button type="button"><!></button>');
const ji = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Di(t, e) {
  K(t, ji), E(e, "type", 3, "primary");
  const r = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const n = E(e, "onClick", 3, void 0);
  var i = Mi();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = S(i);
  ir(a, e, "default", {}), y(i), N(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), q(t, i);
}
re(["click"]);
customElements.define("ing-button-gray", Z(Di, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Fi = /* @__PURE__ */ C('<div class="input_label svelte-1485t9m"> </div>'), Bi = /* @__PURE__ */ C('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Pi = (t, e) => {
  e(t);
}, Vi = /* @__PURE__ */ C('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Ji = (t, e) => {
  e(t);
}, Gi = /* @__PURE__ */ C('<input class="input_field svelte-1485t9m" form="">'), Yi = /* @__PURE__ */ C('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const Wi = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function $t(t, e) {
  ee(e, !0), K(t, Wi);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "type", 3, "text"), l = E(e, "placeholder", 3, ""), s = E(e, "input", 15, ""), u = E(e, "inputStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const f = (w) => {
    if (w && w.target) {
      let _ = "";
      w.target.value && (_ = w.target.value), o() && o()(r(), _), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: _ }
      }));
    }
  };
  var d = Yi(), v = S(d);
  O(v, n, (w) => {
    var _ = Fi(), b = S(_, !0);
    y(_), N(() => M(b, n())), q(w, _);
  });
  var m = T(v, 2), c = S(m);
  O(c, i, (w) => {
    var _ = Bi(), b = G(_), g = S(b);
    y(b), en(), N(() => $(g, "src", i())), q(w, _);
  });
  var p = T(c, 2);
  O(
    p,
    () => a() == "textarea",
    (w) => {
      var _ = Vi();
      vi(_), _.__input = [Pi, f], N(() => {
        $(_, "id", r()), $(_, "name", r()), $(_, "placeholder", l());
      }), tt(_, s), q(w, _);
    },
    (w) => {
      var _ = Gi();
      ot(_), _.__input = [Ji, f], N(() => {
        $(_, "id", r()), $(_, "name", r()), $(_, "type", a()), $(_, "placeholder", l());
      }), tt(_, s), q(w, _);
    }
  ), y(m), y(d), N(() => $(d, "style", u())), q(t, d), te();
}
re(["input"]);
customElements.define("ing-input", Z(
  $t,
  {
    input: { reflect: !0 },
    inputId: {},
    label: {},
    icon: {},
    type: {},
    placeholder: {},
    inputStyle: {},
    inputChanged: {}
  },
  [],
  [],
  !0
));
var Ki = /* @__PURE__ */ C('<a class="svelte-hcumdc"> </a>'), Zi = (t, e, r) => e(h(r).title), Xi = /* @__PURE__ */ C('<button class="menu_item_button svelte-hcumdc"> </button>'), Qi = /* @__PURE__ */ C('<div class="menu_item svelte-hcumdc"><!></div>'), ea = /* @__PURE__ */ C('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const ta = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function lr(t, e) {
  ee(e, !0), K(t, ta);
  let r = E(e, "position", 19, () => ({})), n = E(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = ea(), l = T(S(a), 2);
  Q(l, 21, n, X, (s, u) => {
    var o = Qi(), f = S(o);
    O(
      f,
      () => h(u).url,
      (d) => {
        var v = Ki(), m = S(v, !0);
        y(v), N(() => {
          $(v, "href", h(u).url), M(m, h(u).title);
        }), q(d, v);
      },
      (d) => {
        var v = Xi();
        v.__click = [Zi, i, u];
        var m = S(v, !0);
        y(v), N(() => M(m, h(u).title)), q(d, v);
      }
    ), y(o), q(s, o);
  }), y(l), y(a), N(() => $(a, "style", `top: ${r().top}; left: ${r().left};`)), q(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-dropdown", Z(lr, { position: {}, menuItems: {} }, [], [], !0));
var ra = /* @__PURE__ */ C('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), na = (t, e) => {
  W(e, !h(e));
}, ia = /* @__PURE__ */ C('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), aa = /* @__PURE__ */ C("<span></span>"), la = /* @__PURE__ */ C('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const sa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function fn(t, e) {
  ee(e, !0), K(t, sa), E(e, "title", 3, "Apint.org");
  const r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !1), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, "");
  let s = "", u = Se(!1), o = Se(void 0);
  function f() {
    let _ = {}, b;
    if (h(o) && (b = h(o)), b) {
      var g = b.getBoundingClientRect();
      _.top = (g.top + g.height + 12).toString() + "px", _.left = (g.left - 115).toString() + "px", console.log(_);
    }
    return _;
  }
  var d = la(), v = S(d), m = S(v);
  $t(m, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var c = T(m, 2);
  c.textContent = s, y(v);
  var p = T(v, 2), w = S(p);
  O(
    w,
    i,
    (_) => {
      var b = ia(), g = G(b), k = S(g);
      O(k, n, (J) => {
        var F = ra(), j = G(F);
        en(2), N(() => $(j, "src", n())), q(J, F);
      });
      var x = T(k, 2);
      x.__click = [na, u];
      var I = S(x), R = T(I, 2), z = S(R, !0);
      y(R), y(x), ar(x, (J) => W(o, J), () => h(o)), y(g);
      var U = T(g, 2);
      O(U, () => h(u), (J) => {
        var F = /* @__PURE__ */ Xe(f);
        lr(J, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return h(F);
          }
        });
      }), N(() => {
        $(I, "src", l()), M(z, a());
      }), q(_, b);
    },
    (_) => {
      var b = ae(), g = G(b);
      O(
        g,
        i,
        (k) => {
          var x = aa();
          q(k, x);
        },
        null,
        !0
      ), q(_, b);
    }
  ), y(p), y(d), q(t, d), te();
}
re(["click"]);
customElements.define("ing-headerlite", Z(
  fn,
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
function oa(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ua(t, { delay: e = 0, duration: r = 400, easing: n = oa, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", u = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], f = o.map(
    (_) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${_[0].toUpperCase()}${_.slice(1)}`
    )
  ), d = parseFloat(a[`padding${f[0]}`]), v = parseFloat(a[`padding${f[1]}`]), m = parseFloat(a[`margin${f[0]}`]), c = parseFloat(a[`margin${f[1]}`]), p = parseFloat(
    a[`border${f[0]}Width`]
  ), w = parseFloat(
    a[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * l};${s}: ${_ * u}px;padding-${o[0]}: ${_ * d}px;padding-${o[1]}: ${_ * v}px;margin-${o[0]}: ${_ * m}px;margin-${o[1]}: ${_ * c}px;border-${o[0]}-width: ${_ * p}px;border-${o[1]}-width: ${_ * w}px;`
  };
}
function da(t) {
  return t;
}
var ca = (t, e, r) => e(h(r).title), va = /* @__PURE__ */ C('<img alt="option" width="18px">'), fa = /* @__PURE__ */ C('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ha = /* @__PURE__ */ C('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), pa = (t, e, r) => e(h(r).title), ga = /* @__PURE__ */ C('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), _a = /* @__PURE__ */ C('<div class="menu_item_frame svelte-v1mgvt"></div>'), ma = /* @__PURE__ */ C('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), ba = /* @__PURE__ */ C('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const xa = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function ya(t, e) {
  ee(e, !0), K(t, xa), E(e, "title", 3, "Mapp"), E(e, "icon", 3, "");
  let r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !0), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, ""), s = E(e, "activeitem", 3, ""), u = E(e, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let o = V({});
  if (s()) {
    o[s()] = !0;
    for (let b of u().items)
      if (b.subitems) {
        for (let g of b.subitems)
          if (g.title == s()) {
            o[b.title] = !0;
            break;
          }
      }
  }
  let f = (b) => {
    let g = u().items.find((k) => k.title === b);
    o[b] ? g && (!g.url || g.url === "#") && (o[b] = !o[b]) : o[b] = !0;
  };
  var d = ba(), v = S(d), m = S(v);
  Q(m, 21, () => u().items, X, (b, g) => {
    var k = ma(), x = G(k);
    x.__click = [ca, f, g];
    var I = S(x), R = S(I), z = S(R);
    O(
      z,
      () => h(g).icon,
      (A) => {
        var H = va();
        N(() => $(H, "src", h(g).icon)), q(A, H);
      },
      (A) => {
        var H = fa();
        q(A, H);
      }
    ), y(R);
    var U = T(R, 2), J = S(U, !0);
    y(U);
    var F = T(U, 2);
    O(F, () => h(g).subitems, (A) => {
      var H = ha();
      N(() => Ke(H, `${(o[h(g).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), q(A, H);
    }), y(I), y(x);
    var j = T(x, 2);
    O(j, () => o[h(g).title] && h(g).subitems, (A) => {
      var H = _a();
      Q(H, 21, () => h(g).subitems, X, (ne, oe) => {
        var ge = ga();
        ge.__click = [pa, f, oe];
        var ut = S(ge), Ye = T(S(ut), 2), kn = S(Ye, !0);
        y(Ye), y(ut), y(ge), N(() => {
          $(ge, "href", h(oe).url), Ke(ge, `${(h(oe).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(kn, h(oe).title);
        }), q(ne, ge);
      }), y(H), Ci(3, H, () => ua, () => ({ duration: 300, easing: da })), q(A, H);
    }), N(() => {
      $(x, "href", h(g).url), Ke(x, `${(h(g).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(J, h(g).title);
    }), q(b, k);
  }), y(m), y(v);
  var c = T(v, 2), p = S(c);
  fn(p, {
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
      return a();
    },
    get userpic() {
      return l();
    }
  });
  var w = T(p, 2), _ = S(w);
  ir(_, e, "default", {}), y(w), y(c), y(d), q(t, d), te();
}
re(["click"]);
customElements.define("ing-buffet", Z(
  ya,
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
var wa = /* @__PURE__ */ C('<div class="input_label svelte-18z4bwo"> </div>'), ka = /* @__PURE__ */ C('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Ea = (t, e) => {
  e(t);
}, Sa = /* @__PURE__ */ C("<option> </option>"), qa = /* @__PURE__ */ C('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const Ca = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function sr(t, e) {
  ee(e, !0), K(t, Ca);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "placeholder", 3, ""), l = E(e, "items", 3, ""), s = E(e, "value", 15, ""), u = E(e, "selectStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let f = l().split(",");
  const d = (_) => {
    if (_ && _.target) {
      let b = "";
      _.target.value && (b = _.target.value), o() && o()(r(), b), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: b }
      }));
    }
  };
  var v = qa(), m = S(v);
  O(m, n, (_) => {
    var b = wa(), g = S(b, !0);
    y(b), N(() => M(g, n())), q(_, b);
  });
  var c = T(m, 2), p = S(c);
  O(p, i, (_) => {
    var b = ka(), g = S(b);
    y(b), N(() => $(g, "src", i())), q(_, b);
  });
  var w = T(p, 2);
  w.__input = [Ea, d], Q(w, 21, () => f, X, (_, b) => {
    var g = Sa(), k = {}, x = S(g, !0);
    y(g), N(() => {
      k !== (k = h(b)) && (g.value = (g.__value = h(b)) == null ? "" : h(b)), M(x, h(b));
    }), q(_, g);
  }), y(w), y(c), y(v), N(() => {
    $(v, "style", u()), $(w, "placeholder", a());
  }), cn(w, s), q(t, v), te();
}
re(["input"]);
customElements.define("ing-select", Z(
  sr,
  {
    inputId: {},
    label: {},
    icon: {},
    placeholder: {},
    items: {},
    value: {},
    selectStyle: {},
    inputChanged: {}
  },
  [],
  [],
  !0
));
var Ia = /* @__PURE__ */ C('<div style="width: 100%;"><h3> </h3></div>'), Ta = /* @__PURE__ */ C('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Na = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function $a(t, e) {
  ee(e, !0), K(t, Na);
  let r = E(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let u = {};
    for (const [o, f] of Object.entries(r().properties))
      u[o] = f.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: u } }));
  }
  var i = Ta(), a = S(i);
  O(a, r, (u) => {
    var o = ae(), f = G(o);
    Q(f, 17, () => Object.entries(r().properties), X, (d, v) => {
      let m = () => h(v)[0], c = () => h(v)[1];
      var p = ae(), w = G(p);
      O(
        w,
        () => c().format == "header",
        (_) => {
          var b = Ia(), g = S(b), k = S(g, !0);
          y(g), y(b), N(() => M(k, c().value)), q(_, b);
        },
        (_) => {
          var b = ae(), g = G(b);
          O(
            g,
            () => c().format == "select",
            (k) => {
              var x = /* @__PURE__ */ Xe(() => "width: " + c().length + ";");
              sr(k, {
                get input() {
                  return c().value;
                },
                set input(I) {
                  c().value = I;
                },
                get selectStyle() {
                  return h(x);
                },
                get label() {
                  return c().description;
                },
                get items() {
                  return c().value;
                }
              });
            },
            (k) => {
              var x = ae(), I = G(x);
              O(
                I,
                () => c().type == "string",
                (R) => {
                  var z = /* @__PURE__ */ Xe(() => "width: " + c().length + ";");
                  $t(R, {
                    get inputId() {
                      return m();
                    },
                    get inputStyle() {
                      return h(z);
                    },
                    get label() {
                      return c().description;
                    },
                    get type() {
                      return c().format;
                    },
                    get placeholder() {
                      return c().placeholder;
                    },
                    get input() {
                      return c().value;
                    },
                    set input(U) {
                      c().value = U;
                    }
                  });
                },
                null,
                !0
              ), q(k, x);
            },
            !0
          ), q(_, b);
        }
      ), q(d, p);
    }), q(u, o);
  });
  var l = T(a, 2), s = S(l);
  Rt(s, "size", "small"), Rt(s, "id", "submit-button"), Rt(s, "type", "secondary"), s.__click = n, y(l), y(i), q(t, i), te();
}
re(["click"]);
customElements.define("ing-form", Z($a, { schema: {} }, [], [], !0));
function Aa(t, e, r, n, i, a) {
  if (h(e)) {
    let l = [];
    for (let s of r()) {
      let u = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && s[o].toString().toLowerCase().includes(h(e).toLowerCase())) {
          u = !0;
          break;
        }
      u && l.push(s);
    }
    W(a, V(l));
  } else
    W(a, V(r()));
}
var za = /* @__PURE__ */ C('<th class="svelte-15ql2st"> </th>'), Oa = /* @__PURE__ */ C('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Ra = /* @__PURE__ */ C('<tr class="svelte-15ql2st"></tr>'), Ha = /* @__PURE__ */ C('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Ua = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function La(t, e) {
  ee(e, !0), K(t, Ua);
  let r = E(e, "headers", 23, () => []), n = E(e, "headerssearchable", 23, () => []), i = E(e, "rows", 23, () => []), a = E(e, "linkprefix", 3, ""), l = E(e, "linkcolumnname", 3, ""), s = E(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = Se(V(i())), o = Se("");
  const f = (g) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: g } })), s() && s()({ detail: { rowIndex: g } });
  };
  var d = Ha(), v = S(d), m = T(S(v), 2), c = T(S(m));
  ot(c), c.__keyup = [
    Aa,
    o,
    i,
    r,
    n,
    u
  ], y(m), y(v);
  var p = T(v, 2), w = S(p), _ = S(w);
  Q(_, 21, r, X, (g, k) => {
    var x = za(), I = S(x, !0);
    y(x), N(() => M(I, h(k))), q(g, x);
  }), y(_), y(w);
  var b = T(w);
  Q(b, 21, () => h(u), X, (g, k, x) => {
    var I = Ra();
    I.__click = () => {
      f(x);
    }, Q(I, 21, () => Object.entries(h(k)), X, (z, U) => {
      var J = Oa(), F = S(J), j = S(F, !0);
      y(F), y(J), N(() => {
        $(F, "href", a() + h(k)[l()]), M(j, h(U)[1]);
      }), q(z, J);
    }), y(I), q(g, I);
  }), y(b), y(p), y(d), tt(c, () => h(o), (g) => W(o, g)), q(t, d), te();
}
re(["keyup", "click"]);
customElements.define("ing-table", Z(
  La,
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
var Ma = /* @__PURE__ */ C('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), ja = /* @__PURE__ */ C('<span class="title_text svelte-7cq7b1"> </span>'), Da = /* @__PURE__ */ C('<a class="title svelte-7cq7b1"><!> <!></a>'), Fa = (t, e, r) => e(t, h(r)), Ba = /* @__PURE__ */ C('<img class="menu_icon svelte-7cq7b1">'), Pa = /* @__PURE__ */ C('<span class="menu_top_button svelte-7cq7b1"> </span>'), Va = /* @__PURE__ */ C('<button class="menu_button svelte-7cq7b1"><!></button> <!>', 1), Ja = /* @__PURE__ */ C('<div class="header svelte-7cq7b1"><!> <div class="right_menus svelte-7cq7b1"></div></div>');
const Ga = {
  hash: "svelte-7cq7b1",
  code: '.header.svelte-7cq7b1 {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-7cq7b1 {height:100%;display:flex;margin-left:12px;color:#111;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.title.svelte-7cq7b1:link {text-decoration:none;}.title.svelte-7cq7b1:visited {text-decoration:none;color:#222;}.title.svelte-7cq7b1:hover {text-decoration:none;color:darkgray;}.title.svelte-7cq7b1:active {text-decoration:none;}.title_text.svelte-7cq7b1 {display:flex;align-items:center;}.right_menus.svelte-7cq7b1 {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-7cq7b1 {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-7cq7b1 {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-7cq7b1:hover {cursor:pointer;}.menu_top_button.svelte-7cq7b1 {padding:12px 18px;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;background-color:#1ea7fd;color:white;}.round.svelte-7cq7b1 {height:40px;width:40px;border-radius:50%;}'
};
function At(t, e) {
  ee(e, !0), K(t, Ga);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = V({}), s = V({});
  function u(c, p) {
    c && c.stopPropagation();
    for (const w of Object.keys(l))
      w != p.title && (l[w] = !1);
    p.items && p.items.length > 0 ? l[p.title] ? l[p.title] = !1 : l[p.title] = !0 : p.titleUrl ? window.location.href = p.titleUrl : document.dispatchEvent(new CustomEvent(p.title, { detail: {} }));
  }
  function o(c) {
    let p = {}, w;
    if (s[c] && (w = s[c]), w) {
      var _ = w.getBoundingClientRect();
      p.top = (_.top + _.height + 12).toString() + "px", p.left = (_.left - 150).toString() + "px", console.log(p);
    } else
      console.log("Could not find element with id: " + c);
    return p;
  }
  function f(c) {
    return c.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const p of Object.keys(l))
      l[p] = !1;
  };
  var d = Ja(), v = S(d);
  O(v, () => r() || i(), (c) => {
    var p = Da(), w = S(p);
    O(w, i, (b) => {
      var g = Ma();
      N(() => $(g, "src", i())), q(b, g);
    });
    var _ = T(w, 2);
    O(_, r, (b) => {
      var g = ja(), k = S(g, !0);
      y(g), N(() => M(k, r())), q(b, g);
    }), y(p), N(() => $(p, "href", n())), q(c, p);
  });
  var m = T(v, 2);
  Q(m, 21, a, X, (c, p) => {
    var w = Va(), _ = G(w);
    N(() => $(_, "id", f(h(p).title + "_button"))), _.__click = [Fa, u, p];
    var b = S(_);
    O(
      b,
      () => h(p).imageUrl,
      (k) => {
        var x = Ba();
        ar(x, (I, R) => s[f(R.title + "_button")] = I, (I) => s == null ? void 0 : s[f(I.title + "_button")], () => [h(p)]), N(() => {
          $(x, "alt", h(p).title), $(x, "src", h(p).imageUrl), Pe(x, "round", h(p).imageShape === "round");
        }), q(k, x);
      },
      (k) => {
        var x = Pa(), I = S(x, !0);
        y(x), N(() => {
          $(x, "style", "background-color: " + h(p).titleColor), M(I, h(p).title);
        }), q(k, x);
      }
    ), y(_);
    var g = T(_, 2);
    O(g, () => l[h(p).title] && h(p).items, (k) => {
      var x = /* @__PURE__ */ Xe(() => o(f(h(p).title + "_button")));
      lr(k, {
        get menuItems() {
          return h(p).items;
        },
        get position() {
          return h(x);
        }
      });
    }), q(c, w);
  }), y(m), y(d), q(t, d), te();
}
re(["click"]);
customElements.define("mv-elegant-header", Z(
  At,
  {
    titleText: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {}
  },
  [],
  [],
  !0
));
function Ya(t, e, r, n) {
  e.searchloadresults && W(r, V(e.searchloadresults(n())));
}
function Wa(t, e, r, n) {
  t.key === "Escape" ? W(e, V([])) : t.key === "Enter" ? (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n("")) : (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })));
}
var Ka = /* @__PURE__ */ C('<div class="result svelte-ihhy65"> </div>'), Za = /* @__PURE__ */ C('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Xa = /* @__PURE__ */ C('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const Qa = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function hn(t, e) {
  ee(e, !0), K(t, Qa);
  let r = E(e, "searchtext", 15), n = Se(V([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && W(n, V(o.detail.results));
  });
  var i = Xa(), a = G(i), l = S(a), s = T(S(l), 2);
  ot(s), s.__input = [Ya, e, n, r], s.__keyup = [Wa, n, e, r], y(l), y(a);
  var u = T(a, 2);
  O(u, () => h(n).length > 0, (o) => {
    var f = Za(), d = S(f), v = S(d);
    Q(v, 21, () => h(n), X, (m, c) => {
      var p = Ka(), w = S(p, !0);
      y(p), N(() => M(w, h(c))), q(m, p);
    }), y(v), y(d), y(f), q(o, f);
  }), tt(s, r), q(t, i), te();
}
re(["input", "keyup"]);
customElements.define("mv-elegant-search", Z(
  hn,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var el = /* @__PURE__ */ C('<img class="hero_image svelte-e621nb" alt="logo">'), tl = /* @__PURE__ */ C('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const rl = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function pn(t, e) {
  K(t, rl);
  let r = E(e, "height", 3, "80px"), n = E(e, "titleText", 3, ""), i = E(e, "titleImageUrl", 3, ""), a = E(e, "searchtext", 15);
  var l = tl(), s = S(l), u = S(s);
  O(u, i, (m) => {
    var c = el();
    N(() => {
      $(c, "height", `${r()}`), $(c, "src", i());
    }), q(m, c);
  });
  var o = T(u, 2), f = S(o, !0);
  y(o), y(s);
  var d = T(s, 2), v = S(d);
  hn(v, {
    get searchtext() {
      return a();
    },
    set searchtext(m) {
      a(m);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), y(d), y(l), N(() => {
    $(s, "style", `height: ${r()};`), M(f, n());
  }), q(t, l);
}
customElements.define("mv-elegant-hero-search", Z(
  pn,
  {
    text: { reflect: !0 },
    height: {},
    titleText: {},
    titleImageUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var nl = /* @__PURE__ */ C('<img alt="category icon" class="svelte-1yyvu4g">'), il = /* @__PURE__ */ C('<span class="card_symbol svelte-1yyvu4g"> </span>'), al = /* @__PURE__ */ C('<img class="header_image svelte-1yyvu4g" alt="header preview">'), ll = /* @__PURE__ */ C('<img alt="profile" class="svelte-1yyvu4g">'), sl = /* @__PURE__ */ C('<img alt="category icon" class="svelte-1yyvu4g">'), ol = /* @__PURE__ */ C('<span class="card_symbol svelte-1yyvu4g"> </span>'), ul = /* @__PURE__ */ C('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><!> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
const dl = {
  hash: "svelte-1yyvu4g",
  code: ".card_frame.svelte-1yyvu4g {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1yyvu4g {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1yyvu4g span:where(.svelte-1yyvu4g) {white-space:nowrap;}.top_right_icons.svelte-1yyvu4g {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1yyvu4g {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1yyvu4g {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1yyvu4g:hover {color:#7c7c7c;}.author.svelte-1yyvu4g {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1yyvu4g:hover {color:#757a79;}.card_symbol.svelte-1yyvu4g {padding-left:6px;}.card_symbol.svelte-1yyvu4g:hover {cursor:default;}.footer.svelte-1yyvu4g {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1yyvu4g {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1yyvu4g {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g):hover {color:#82aae9;}.type_box.svelte-1yyvu4g {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function gn(t, e) {
  ee(e, !0), K(t, dl);
  let r = E(e, "item", 19, () => ({
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
  var n = ul(), i = S(n), a = S(i), l = S(a, !0);
  y(a);
  var s = T(a, 2);
  Q(s, 21, () => r().categories, X, (k, x) => {
    var I = ae(), R = G(I);
    O(
      R,
      () => h(x).imageUrl,
      (z) => {
        var U = nl();
        N(() => {
          $(U, "src", h(x).imageUrl), $(U, "title", h(x).name);
        }), q(z, U);
      },
      (z) => {
        var U = ae(), J = G(U);
        O(
          J,
          () => h(x).symbol,
          (F) => {
            var j = il(), A = S(j, !0);
            y(j), N(() => {
              $(j, "title", h(x).name), M(A, h(x).symbol);
            }), q(F, j);
          },
          null,
          !0
        ), q(z, U);
      }
    ), q(k, I);
  }), y(s), y(i);
  var u = T(i, 2);
  O(u, () => r().imageUrl, (k) => {
    var x = al();
    N(() => $(x, "src", r().imageUrl)), q(k, x);
  });
  var o = T(u, 2), f = S(o, !0);
  y(o);
  var d = T(o, 2), v = S(d);
  O(v, () => r().authorImageUrl, (k) => {
    var x = ll();
    N(() => $(x, "src", r().authorImageUrl)), q(k, x);
  });
  var m = T(v);
  y(d);
  var c = T(d, 2), p = S(c), w = S(p, !0);
  y(p);
  var _ = T(p, 2), b = S(_), g = T(b, 2);
  Q(g, 21, () => r().types, X, (k, x) => {
    var I = ae(), R = G(I);
    O(
      R,
      () => h(x).imageUrl,
      (z) => {
        var U = sl();
        N(() => {
          $(U, "src", h(x).imageUrl), $(U, "title", h(x).name);
        }), q(z, U);
      },
      (z) => {
        var U = ae(), J = G(U);
        O(
          J,
          () => h(x).symbol,
          (F) => {
            var j = ol(), A = S(j, !0);
            y(j), N(() => {
              $(j, "title", h(x).name), M(A, h(x).symbol);
            }), q(F, j);
          },
          null,
          !0
        ), q(z, U);
      }
    ), q(k, I);
  }), y(g), y(_), y(c), y(n), N(() => {
    M(l, r().dateTime), $(o, "href", r().link), M(f, r().title), $(d, "href", r().authorUrl), M(m, ` ${r().authorName ?? ""}`), M(w, r().description), $(b, "href", r().link);
  }), q(t, n), te();
}
customElements.define("mv-elegant-card", Z(gn, { item: {} }, [], [], !0));
var cl = /* @__PURE__ */ C('<div class="menu_frame svelte-1dvvvu9"></div>');
const vl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function _n(t, e) {
  K(t, vl);
  let r = E(e, "items", 31, () => V([]));
  typeof r() == "string" && r(JSON.parse(r()));
  var n = cl();
  Q(n, 21, r, X, (i, a) => {
    var l = ae(), s = G(l);
    O(s, () => !h(a).hidden, (u) => {
      gn(u, {
        get item() {
          return h(a);
        }
      });
    }), q(i, l);
  }), y(n), q(t, n);
}
customElements.define("mv-elegant-cardpage", Z(_n, { items: {} }, [], [], !0));
var fl = (t, e, r) => e(h(r).name), hl = /* @__PURE__ */ C('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), pl = /* @__PURE__ */ C('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const gl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function mn(t, e) {
  ee(e, !0), K(t, gl);
  let r = E(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = V({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = pl();
  Q(a, 21, r, X, (l, s) => {
    var u = hl(), o = S(u);
    o.__click = [fl, i, s];
    var f = S(o, !0);
    y(o);
    var d = T(o, 2), v = S(d, !0);
    y(d), y(u), N(() => {
      Pe(o, "letter_selected", n[h(s).name]), M(f, h(s).symbol), M(v, h(s).name);
    }), q(l, u);
  }), y(a), q(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-filtercats", Z(mn, { categories: {}, categoryselect: {} }, [], [], !0));
function _l(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var ml = /* @__PURE__ */ C('<option class="svelte-3qfq5d"> </option>'), bl = /* @__PURE__ */ C('<div class="select svelte-3qfq5d"><select name="source" id="source" class="svelte-3qfq5d"></select></div>');
const xl = {
  hash: "svelte-3qfq5d",
  code: `.select.svelte-3qfq5d,
	.select.svelte-3qfq5d :where(.svelte-3qfq5d) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-3qfq5d {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d):active,
	.select.svelte-3qfq5d select:where(.svelte-3qfq5d):focus {outline:none;box-shadow:none;}.select.svelte-3qfq5d:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function bn(t, e) {
  ee(e, !0), K(t, xl);
  let r = E(e, "input", 15), n = E(e, "options", 19, () => []);
  var i = bl(), a = S(i);
  a.__input = [_l, r, e], Q(a, 21, n, X, (l, s) => {
    var u = ml(), o = {}, f = S(u, !0);
    y(u), N(() => {
      o !== (o = h(s)) && (u.value = (u.__value = h(s)) == null ? "" : h(s)), M(f, h(s));
    }), q(l, u);
  }), y(a), y(i), cn(a, r), q(t, i), te();
}
re(["input"]);
customElements.define("mv-elegant-select", Z(bn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function yl(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var wl = (t, e, r) => e(h(r).name), kl = /* @__PURE__ */ C('<div class="icon svelte-lvweti">✓</div>'), El = /* @__PURE__ */ C('<div class="icon svelte-lvweti"> </div>'), Sl = /* @__PURE__ */ C('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), ql = /* @__PURE__ */ C('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Cl = /* @__PURE__ */ C('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Il = /* @__PURE__ */ C('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Tl = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function xn(t, e) {
  ee(e, !0), K(t, Tl);
  let r = E(e, "types", 7), n = E(e, "sortSelected", 15, ""), i = E(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let a = e.sortTypes.split(",").map((p) => p.trim());
  n() || n(a[0]);
  let l = V({});
  function s(p) {
    l[p] ? l[p] = !1 : l[p] = !0, e.onTypeSelect && (console.log("sending type selected data: " + JSON.stringify(l)), e.onTypeSelect(l));
  }
  function u(p) {
    e.onSortSelect && e.onSortSelect(p);
  }
  var o = Il(), f = S(o);
  Q(f, 21, r, X, (p, w) => {
    var _ = Sl();
    _.__click = [wl, s, w];
    var b = S(_);
    O(
      b,
      () => l[h(w).name] === !0,
      (x) => {
        var I = kl();
        q(x, I);
      },
      (x) => {
        var I = El(), R = S(I, !0);
        y(I), N(() => M(R, h(w).symbol)), q(x, I);
      }
    );
    var g = T(b, 2), k = S(g, !0);
    y(g), y(_), N(() => {
      Pe(_, "filterbar_option_selected", l[h(w).name]), M(k, h(w).name);
    }), q(p, _);
  }), y(f);
  var d = T(f, 2), v = S(d);
  v.__click = [yl, i, e];
  var m = S(v);
  O(
    m,
    () => i() === "CARD",
    (p) => {
      var w = ql();
      q(p, w);
    },
    (p) => {
      var w = Cl();
      q(p, w);
    }
  ), y(v);
  var c = T(v, 2);
  bn(c, {
    get input() {
      return n();
    },
    options: a,
    onInput: u
  }), y(d), y(o), q(t, o), te();
}
re(["click"]);
customElements.define("mv-elegant-filtertypes", Z(
  xn,
  {
    types: {},
    sortTypes: {},
    sortSelected: {},
    onTypeSelect: {},
    onSortSelect: {},
    view: {},
    viewselect: {}
  },
  [],
  [],
  !0
));
function Nl(t, e, r, n, i) {
  if (h(e)) {
    let a = [];
    for (let l of r()) {
      let s = !1;
      for (let u of n())
        if (u.searchable && l[u.name] && l[u.name].toString().toLowerCase().includes(h(e).toLowerCase())) {
          s = !0;
          break;
        }
      s && a.push(l);
    }
    W(i, V(a));
  } else
    W(i, V(r()));
}
var $l = /* @__PURE__ */ C('<th class="svelte-1nbcvq9"> </th>'), Al = /* @__PURE__ */ C('<a class="table_row svelte-1nbcvq9"> </a>'), zl = /* @__PURE__ */ C('<span class="table_row svelte-1nbcvq9"> </span>'), Ol = /* @__PURE__ */ C('<td class="svelte-1nbcvq9"><!></td>'), Rl = /* @__PURE__ */ C("<td></td>"), Hl = /* @__PURE__ */ C('<tr class="svelte-1nbcvq9"></tr>'), Ul = /* @__PURE__ */ C('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const Ll = {
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
function yn(t, e) {
  ee(e, !0), K(t, Ll);
  let r = E(e, "tableHeaders", 23, () => []), n = E(e, "tableRows", 31, () => V([])), i = E(e, "linkprefix", 3, ""), a = E(e, "linkcolumnname", 3, ""), l = E(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let g of Object.keys(n()[0]))
      r().push({
        name: g,
        displayName: g,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = Se(V(n())), u = Se(""), o = Se(-1);
  const f = (g) => {
    W(o, V(g)), l() && l()({ detail: { rowIndex: g } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: g } }));
  };
  var d = Ul(), v = S(d), m = T(S(v), 2), c = T(S(m));
  ot(c), c.__keyup = [
    Nl,
    u,
    n,
    r,
    s
  ], y(m), y(v);
  var p = T(v, 2), w = S(p), _ = S(w);
  Q(_, 21, r, X, (g, k) => {
    var x = $l(), I = S(x, !0);
    y(x), N(() => {
      Pe(x, "column_sm", h(k).hideNarrow), M(I, h(k).displayName);
    }), q(g, x);
  }), y(_), y(w);
  var b = T(w);
  Q(b, 21, () => h(s), X, (g, k, x) => {
    var I = Hl();
    I.__click = () => {
      f(x);
    }, Q(I, 21, r, X, (R, z) => {
      var U = ae(), J = G(U);
      O(
        J,
        () => h(k)[h(z).name],
        (F) => {
          var j = Ol(), A = S(j);
          O(
            A,
            a,
            (H) => {
              var P = Al(), ne = S(P, !0);
              y(P), N(() => {
                $(P, "href", i() + h(k)[a()]), M(ne, h(k)[h(z).name]);
              }), q(H, P);
            },
            (H) => {
              var P = zl(), ne = S(P, !0);
              y(P), N(() => M(ne, h(k)[h(z).name])), q(H, P);
            }
          ), y(j), N(() => Pe(j, "column_sm", h(z).hideNarrow)), q(F, j);
        },
        (F) => {
          var j = Rl();
          q(F, j);
        }
      ), q(R, U);
    }), y(I), N(() => Pe(I, "table_row_selected", x === h(o))), q(g, I);
  }), y(b), y(p), y(d), tt(c, () => h(u), (g) => W(u, g)), q(t, d), te();
}
re(["keyup", "click"]);
customElements.define("mv-elegant-table", Z(
  yn,
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
var Ml = /* @__PURE__ */ C("<!> <!> <!> <!> <!>", 1);
const jl = { hash: "svelte-3kpd", code: "" };
function Dl(t, e) {
  ee(e, !0), K(t, jl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "searchtext", 7, ""), s = E(e, "categories", 19, () => []), u = E(e, "types", 19, () => []), o = E(e, "sortTypes", 3, ""), f = E(e, "sortSelected", 11, ""), d = E(e, "items", 31, () => V([]));
  typeof d() == "string" && d(JSON.parse(d()));
  let v = Se("CARD"), m = V([
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
  ]), c = "", p = {}, w = !1, _ = {}, b = !1;
  function g(A) {
    c = A, e.searchsubmit ? e.searchsubmit(A) : I();
  }
  function k(A) {
    p = A, w = !1;
    for (const [H, P] of Object.entries(p))
      if (P) {
        w = !0;
        break;
      }
    e.categoryselect ? e.categoryselect(A) : I();
  }
  function x(A) {
    _ = A, b = !1;
    for (const [H, P] of Object.entries(_))
      if (P) {
        b = !0;
        break;
      }
    e.onTypeSelect ? e.onTypeSelect(A) : I();
  }
  function I() {
    for (let A of d()) {
      let H = !1;
      if ((c != "" && A.description && A.title && A.authorName && !A.title.toLowerCase().includes(c.toLowerCase()) && !A.description.toLowerCase().includes(c.toLowerCase()) && !A.authorName.toLowerCase().includes(c.toLowerCase()) || c != "" && A.description == "") && (H = !0), !H && (!A.categories || A.categories.length === 0) && w) H = !0;
      else if (!H && A.categories)
        for (let P of Object.keys(p)) {
          const ne = A.categories.find((oe) => oe.name === P);
          if (p[P] && !ne) {
            H = !0;
            break;
          }
        }
      if (!H && (!A.types || A.types.length === 0) && b) H = !0;
      else if (!H && A.types)
        for (let P of Object.keys(_)) {
          const ne = A.types.find((oe) => oe.name === P);
          if (_[P] && !ne) {
            H = !0;
            break;
          }
        }
      A.hidden = H;
    }
  }
  var R = Ml(), z = G(R);
  At(z, {
    get titleText() {
      return r();
    },
    get titleUrl() {
      return n();
    },
    get titleImageUrl() {
      return i();
    },
    get headerMenus() {
      return a();
    }
  });
  var U = T(z, 2);
  pn(U, {
    get titleText() {
      return r();
    },
    get titleImageUrl() {
      return i();
    },
    get searchtext() {
      return l();
    },
    set searchtext(A) {
      l(A);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    searchsubmit: g
  });
  var J = T(U, 2);
  mn(J, {
    get categories() {
      return s();
    },
    categoryselect: k
  });
  var F = T(J, 2);
  xn(F, {
    get types() {
      return u();
    },
    get sortTypes() {
      return o();
    },
    get sortSelected() {
      return f();
    },
    onTypeSelect: x,
    get onSortSelect() {
      return e.onSortSelect;
    },
    get view() {
      return h(v);
    },
    set view(A) {
      W(v, V(A));
    }
  });
  var j = T(F, 2);
  O(
    j,
    () => h(v) === "CARD",
    (A) => {
      _n(A, {
        get items() {
          return d();
        },
        set items(H) {
          d(H);
        }
      });
    },
    (A) => {
      yn(A, {
        get tableHeaders() {
          return m;
        },
        get tableRows() {
          return d();
        },
        set tableRows(H) {
          d(H);
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), q(t, R), te();
}
customElements.define("mv-elegant-buffet", Z(
  Dl,
  {
    titleText: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {},
    categories: {},
    categoryselect: {},
    types: {},
    onTypeSelect: {},
    sortTypes: {},
    onSortSelect: {},
    sortSelected: {},
    items: {}
  },
  [],
  [],
  !0
));
var Fl = /* @__PURE__ */ C('<!> <div class="view_frame svelte-qzg12u"></div>', 1);
const Bl = {
  hash: "svelte-qzg12u",
  code: ".view_frame.svelte-qzg12u {margin:auto;padding:24px 12px;max-width:700px;}.view_image {margin:8px 0px;width:100%;border-radius:24px;filter:drop-shadow(0 0 0.75rem gray);}"
};
function Pl(t, e) {
  K(t, Bl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(d) {
    let v = "";
    if (d.labelType && (v += `<${d.labelType}>${d.label}</${d.labelType}>`), d.type == "link_blank")
      v += `<a href="${d.link}" target="_blank">${d.value}</a>`;
    else if (d.type == "ul_link_blank") {
      let m = d.value.split(",");
      v += "<ul>";
      for (let c of m)
        v += `<li><a href="${c}" target="_blank">${c}</a></li>`;
      v += "</ul>";
    } else if (d.type == "ul") {
      let m = d.value.split(",");
      v += "<ul>";
      for (let c of m)
        v += `<li>${c}</li>`;
      v += "</ul>";
    } else if (d.type == "img" && d.value)
      v += `<${d.type} class="view_image" src="${d.value}"></${d.type}>`;
    else if (d.type == "preview_iframe" && d.value) {
      let m = d.value.split(","), c = "";
      for (let p of m)
        if (p.startsWith("https://youtu.be")) {
          let w = p.split("/");
          c = "https://www.youtube.com/embed/" + w[w.length - 1];
          break;
        } else if (p.includes("/presentation/")) {
          p.includes("/edit") ? c = p.replace("/edit", "/embed") : c = p + "/embed";
          break;
        }
      c && (v += `<div style="margin: 24px 0px;">
          <iframe
            width="100%"
            height="374"
            src=${c}
            title="Embedded content preview"
          ></iframe>
        </div>`);
    } else d.value && (v += `<${d.type}>${d.value}</${d.type}>`);
    return v;
  }
  var u = Fl(), o = G(u);
  At(o, {
    get titleText() {
      return r();
    },
    get titleUrl() {
      return n();
    },
    get titleImageUrl() {
      return i();
    },
    get headerMenus() {
      return a();
    }
  });
  var f = T(o, 2);
  Q(f, 21, l, X, (d, v) => {
    var m = ae(), c = G(m);
    yi(c, () => s(h(v))), q(d, m);
  }), y(f), q(t, u);
}
customElements.define("mv-elegant-buffet-view", Z(
  Pl,
  {
    titleText: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var Vl = /* @__PURE__ */ C('<div class="input_label"> </div>'), Jl = /* @__PURE__ */ C('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Gl = (t, e) => {
  e(t);
}, Yl = /* @__PURE__ */ C('<div><input type="checkbox" form=""> <label> </label></div>'), Wl = /* @__PURE__ */ C('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Kl = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function wn(t, e) {
  ee(e, !0), K(t, Kl);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, "");
  E(e, "placeholder", 3, "");
  let a = E(e, "items", 3, ""), l = E(e, "value", 15, ""), s = E(e, "selectStyle", 3, ""), u = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((b) => b.trim()), f = [];
  l() && (f = l().split(",").map((b) => b.trim()));
  let d = {};
  for (let b of o)
    f.includes(b) ? d[b] = !0 : d[b] = !1;
  const v = (b) => {
    if (b && b.target) {
      let g = b.target.id, k = b.target.checked;
      if (k && !f.includes(g))
        f.push(g);
      else if (!k && f.includes(g)) {
        let x = f.indexOf(g);
        f.splice(x, 1);
      }
      l(f.join(",")), u() && u()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var m = Wl(), c = S(m);
  O(c, n, (b) => {
    var g = Vl(), k = S(g, !0);
    y(g), N(() => M(k, n())), q(b, g);
  });
  var p = T(c, 2), w = S(p);
  O(w, i, (b) => {
    var g = Jl(), k = S(g);
    y(g), N(() => $(k, "src", i())), q(b, g);
  });
  var _ = T(w, 2);
  Q(_, 21, () => o, X, (b, g) => {
    var k = Yl(), x = S(k);
    ot(x), x.__change = [Gl, v];
    var I = T(x, 2), R = S(I, !0);
    y(I), y(k), N(() => {
      $(x, "id", h(g)), $(x, "name", h(g)), $(I, "for", h(g)), M(R, h(g));
    }), Ii(x, () => d[h(g)], (z) => d[h(g)] = z), q(b, k);
  }), y(_), y(p), y(m), N(() => $(m, "style", s())), q(t, m), te();
}
re(["change"]);
customElements.define("ing-multi-select", Z(
  wn,
  {
    inputId: {},
    label: {},
    icon: {},
    placeholder: {},
    items: {},
    value: {},
    selectStyle: {},
    inputChanged: {}
  },
  [],
  [],
  !0
));
function Zl(t, e) {
  e("", "");
}
var Xl = /* @__PURE__ */ C('<img class="image_preview svelte-1a3rnn">'), Ql = /* @__PURE__ */ C('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-1a3rnn" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-1a3rnn"> </div> <!>', 1), es = /* @__PURE__ */ C('<!> <form class="edit_frame svelte-1a3rnn"></form>', 1);
const ts = {
  hash: "svelte-1a3rnn",
  code: ".edit_frame.svelte-1a3rnn {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-1a3rnn::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-1a3rnn {margin-top:10px;margin-bottom:12px;font-size:14px;}.image_preview.svelte-1a3rnn {width:244px;margin-bottom:14px;}"
};
function rs(t, e) {
  ee(e, !0), K(t, ts);
  let r = E(e, "formId", 7, ""), n = E(e, "titleText", 3, ""), i = E(e, "titleUrl", 3, "/"), a = E(e, "titleImageUrl", 3, ""), l = E(e, "headerMenus", 19, () => []), s = E(e, "items", 23, () => []), u;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  function o(m, c) {
    const p = new FormData(u);
    for (let w of s())
      w.type != "file" && p.set(w.id, w.value);
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: p
      }
    }));
  }
  var f = es(), d = G(f);
  At(d, {
    get titleText() {
      return n();
    },
    get titleUrl() {
      return i();
    },
    get titleImageUrl() {
      return a();
    },
    get headerMenus() {
      return l();
    }
  });
  var v = T(d, 2);
  Q(v, 21, s, X, (m, c) => {
    var p = ae(), w = G(p);
    O(
      w,
      () => h(c).type == "input" || h(c).type == "textarea",
      (_) => {
        $t(_, {
          get label() {
            return h(c).label;
          },
          get input() {
            return h(c).value;
          },
          set input(b) {
            h(c).value = b;
          },
          get type() {
            return h(c).type;
          },
          inputChanged: o
        });
      },
      (_) => {
        var b = ae(), g = G(b);
        O(
          g,
          () => h(c).type == "select",
          (k) => {
            sr(k, {
              get label() {
                return h(c).label;
              },
              get items() {
                return h(c).options;
              },
              get value() {
                return h(c).value;
              },
              set value(x) {
                h(c).value = x;
              },
              inputChanged: o
            });
          },
          (k) => {
            var x = ae(), I = G(x);
            O(
              I,
              () => h(c).type == "multiselect",
              (R) => {
                wn(R, {
                  get label() {
                    return h(c).label;
                  },
                  get items() {
                    return h(c).options;
                  },
                  get value() {
                    return h(c).value;
                  },
                  set value(z) {
                    h(c).value = z;
                  },
                  inputChanged: o
                });
              },
              (R) => {
                var z = ae(), U = G(z);
                O(
                  U,
                  () => h(c).type == "file",
                  (J) => {
                    var F = Ql(), j = G(F), A = S(j), H = S(A, !0);
                    y(A), y(j);
                    var P = T(j, 2);
                    P.__change = [Zl, o];
                    var ne = T(P, 2), oe = S(ne, !0);
                    y(ne);
                    var ge = T(ne, 2);
                    O(ge, () => h(c).value && (h(c).value.endsWith("png") || h(c).value.endsWith("jpg")), (ut) => {
                      var Ye = Xl();
                      N(() => $(Ye, "src", h(c).value)), q(ut, Ye);
                    }), N(() => {
                      $(A, "for", h(c).id), M(H, h(c).label), $(P, "id", h(c).id), $(P, "name", h(c).id), M(oe, h(c).value);
                    }), q(J, F);
                  },
                  null,
                  !0
                ), q(R, z);
              },
              !0
            ), q(k, x);
          },
          !0
        ), q(_, b);
      }
    ), q(m, p);
  }), y(v), ar(v, (m) => u = m, () => u), N(() => $(v, "id", r())), q(t, f), te();
}
re(["change"]);
customElements.define("mv-elegant-buffet-edit", Z(
  rs,
  {
    formId: {},
    titleText: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var ns = /* @__PURE__ */ C('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const is = {
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
function as(t, e) {
  K(t, is);
  var r = ns();
  q(t, r);
}
customElements.define("mv-elegant-spinner", Z(as, {}, [], [], !0));
export {
  Dl as ElegantBuffet,
  rs as ElegantBuffetEdit,
  Pl as ElegantBuffetView,
  At as ElegantHeader,
  pn as ElegantHeroSearch,
  hn as ElegantSearch,
  as as ElegantSpinner,
  yn as ElegantTable,
  ya as IngBuffet,
  Li as IngButton,
  Di as IngButtonGray,
  $a as IngForm,
  fn as IngHeaderLite,
  $t as IngInput,
  sr as IngSelect,
  La as IngTable
};
