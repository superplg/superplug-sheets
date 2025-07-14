var En = Object.defineProperty;
var or = (t) => {
  throw TypeError(t);
};
var Cn = (t, e, r) => e in t ? En(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var pe = (t, e, r) => Cn(t, typeof e != "symbol" ? e + "" : e, r), ur = (t, e, r) => e.has(t) || or("Cannot " + r);
var ae = (t, e, r) => (ur(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Tt = (t, e, r) => e.has(t) ? or("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), At = (t, e, r, n) => (ur(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Sn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sn);
const Vt = 1, Jt = 2, wr = 4, In = 8, qn = 16, $n = 1, Nn = 4, Tn = 8, An = 16, zn = 4, On = 1, Rn = 2, yr = "[", Gt = "[!", Yt = "]", je = {}, se = Symbol(), kr = !1;
function xt(t) {
  console.warn("hydration_mismatch");
}
var Kt = Array.isArray, Wt = Array.from, ft = Object.keys, ht = Object.defineProperty, Ue = Object.getOwnPropertyDescriptor, Un = Object.getOwnPropertyDescriptors, Hn = Object.prototype, Mn = Array.prototype, Ot = Object.getPrototypeOf;
function Ln(t) {
  return typeof t == "function";
}
const Ye = () => {
};
function Er(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Se = 2, Cr = 4, wt = 8, yt = 16, be = 32, tt = 64, Ge = 128, pt = 256, ue = 512, ze = 1024, rt = 2048, _e = 4096, nt = 8192, Sr = 16384, kt = 32768, jn = 1 << 18, Ir = 1 << 19, De = Symbol("$state"), Dn = Symbol("");
function qr(t) {
  return t === this.v;
}
function Fn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $r(t) {
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
function Kn() {
  throw new Error("state_unsafe_mutation");
}
let Nr = !1;
function ce(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: qr,
    version: 0
  };
}
function Ce(t) {
  return /* @__PURE__ */ Wn(ce(t));
}
// @__NO_SIDE_EFFECTS__
function Zt(t, e = !1) {
  const r = ce(t);
  return e || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  return F !== null && F.f & Se && (ge === null ? ni([t]) : ge.push(t)), t;
}
function J(t, e) {
  return F !== null && ai() && F.f & (Se | yt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ge === null || !ge.includes(t)) && Kn(), Rt(t, e);
}
function Rt(t, e) {
  return t.equals(e) || (t.v = e, t.version = Jr(), Tr(t, ze), R !== null && R.f & ue && !(R.f & be) && (ne !== null && ne.includes(t) ? (qe(R, ze), qt(R)) : Te === null ? ii([t]) : Te.push(t))), e;
}
function Tr(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & ze || (qe(a, e), l & (ue | Ge) && (l & Se ? Tr(
        /** @type {Derived} */
        a,
        rt
      ) : qt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  var e = Se | ze;
  R === null ? e |= Ge : R.f |= Ir;
  const r = {
    children: null,
    ctx: me,
    deps: null,
    equals: qr,
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
  if (F !== null && F.f & Se) {
    var n = (
      /** @type {Derived} */
      F
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
      n.f & Se ? Xt(
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
  var e, r = R;
  le(t.parent);
  try {
    Ar(t), e = Gr(t);
  } finally {
    le(r);
  }
  return e;
}
function Or(t) {
  var e = zr(t), r = (Le || t.f & Ge) && t.deps !== null ? rt : ue;
  qe(t, r), t.equals(e) || (t.v = e, t.version = Jr());
}
function Xt(t) {
  Ar(t), Qe(t, 0), qe(t, nt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Zn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function it(t, e, r, n = !0) {
  var i = (t & tt) !== 0, a = R, l = {
    ctx: me,
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
      vr(!0), It(l), l.f |= Sr;
    } catch (c) {
      throw Oe(l), c;
    } finally {
      vr(s);
    }
  } else e !== null && qt(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Ir) === 0;
  if (!u && !i && n && (a !== null && Zn(l, a), F !== null && F.f & Se)) {
    var o = (
      /** @type {Derived} */
      F
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Rr(t) {
  const e = it(tt, t, !0);
  return () => {
    Oe(e);
  };
}
function at(t) {
  return it(Cr, t, !1);
}
function Et(t) {
  return it(wt, t, !0);
}
function N(t) {
  return Ct(t);
}
function Ct(t, e = 0) {
  return it(wt | yt | e, t, !0);
}
function Ve(t, e = !0) {
  return it(wt | be, t, !0, e);
}
function Ur(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = F;
    fe(null);
    try {
      e.call(null);
    } finally {
      fe(r);
    }
  }
}
function Hr(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Xt(e[r]);
  }
}
function Mr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Oe(r, e), r = n;
  }
}
function Xn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & be || Oe(e), e = r;
  }
}
function Oe(t, e = !0) {
  var r = !1;
  if ((e || t.f & jn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xe(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Mr(t, e && !r), Hr(t), Qe(t, 0), qe(t, nt);
  var l = t.transitions;
  if (l !== null)
    for (const u of l)
      u.stop();
  Ur(t);
  var s = t.parent;
  s !== null && s.first !== null && Lr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Lr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Ut(t, e) {
  var r = [];
  Qt(t, r, !0), jr(r, () => {
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
function Qt(t, e, r) {
  if (!(t.f & _e)) {
    if (t.f ^= _e, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & kt) !== 0 || (n.f & be) !== 0;
      Qt(n, e, a ? r : !1), n = i;
    }
  }
}
function _t(t) {
  Dr(t, !0);
}
function Dr(t, e) {
  if (t.f & _e) {
    lt(t) && It(t), t.f ^= _e;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & kt) !== 0 || (r.f & be) !== 0;
      Dr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const Qn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let gt = !1, mt = !1, Ht = [], Mt = [];
function Fr() {
  gt = !1;
  const t = Ht.slice();
  Ht = [], Er(t);
}
function Br() {
  mt = !1;
  const t = Mt.slice();
  Mt = [], Er(t);
}
function St(t) {
  gt || (gt = !0, queueMicrotask(Fr)), Ht.push(t);
}
function ei(t) {
  mt || (mt = !0, Qn(Br)), Mt.push(t);
}
function ti() {
  gt && Fr(), mt && Br();
}
const Pr = 0, ri = 1;
let ct = Pr, Xe = !1, Fe = !1;
function vr(t) {
  Fe = t;
}
let Re = [], Be = 0;
let F = null;
function fe(t) {
  F = t;
}
let R = null;
function le(t) {
  R = t;
}
let ge = null;
function ni(t) {
  ge = t;
}
let ne = null, oe = 0, Te = null;
function ii(t) {
  Te = t;
}
let Vr = 0, Le = !1, me = null;
function Jr() {
  return ++Vr;
}
function ai() {
  return !Nr;
}
function lt(t) {
  var l, s;
  var e = t.f;
  if (e & ze)
    return !0;
  if (e & rt) {
    var r = t.deps, n = (e & Ge) !== 0;
    if (r !== null) {
      var i;
      if (e & pt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= pt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (lt(
          /** @type {Derived} */
          a
        ) && Or(
          /** @type {Derived} */
          a
        ), n && R !== null && !Le && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || qe(t, ue);
  }
  return !1;
}
function li(t, e, r) {
  throw t;
}
function Gr(t) {
  var v;
  var e = ne, r = oe, n = Te, i = F, a = Le, l = ge, s = me, u = t.f;
  ne = /** @type {null | Value[]} */
  null, oe = 0, Te = null, F = u & (be | tt) ? null : t, Le = !Fe && (u & Ge) !== 0, ge = null, me = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), c = t.deps;
    if (ne !== null) {
      var d;
      if (Qe(t, oe), c !== null && oe > 0)
        for (c.length = oe + ne.length, d = 0; d < ne.length; d++)
          c[oe + d] = ne[d];
      else
        t.deps = c = ne;
      if (!Le)
        for (d = oe; d < c.length; d++)
          ((v = c[d]).reactions ?? (v.reactions = [])).push(t);
    } else c !== null && oe < c.length && (Qe(t, oe), c.length = oe);
    return o;
  } finally {
    ne = e, oe = r, Te = n, F = i, Le = a, ge = l, me = s;
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
  r === null && e.f & Se && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(e)) && (qe(e, rt), e.f & (Ge | pt) || (e.f ^= pt), Qe(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Qe(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      si(t, r[n]);
}
function It(t) {
  var e = t.f;
  if (!(e & nt)) {
    qe(t, ue);
    var r = R;
    R = t;
    try {
      e & yt ? Xn(t) : Mr(t), Hr(t), Ur(t);
      var n = Gr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Vr;
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
function Yr() {
  Be > 1e3 && (Be = 0, Bn()), Be++;
}
function Kr(t) {
  var e = t.length;
  if (e !== 0) {
    Yr();
    var r = Fe;
    Fe = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & ue || (i.f ^= ue);
        var a = [];
        Wr(i, a), oi(a);
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
      !(n.f & (nt | _e)) && lt(n) && (It(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Lr(n) : n.fn = null));
    }
}
function ui() {
  if (Xe = !1, Be > 1001)
    return;
  const t = Re;
  Re = [], Kr(t), Xe || (Be = 0);
}
function qt(t) {
  ct === Pr && (Xe || (Xe = !0, queueMicrotask(ui)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (tt | be)) {
      if (!(r & ue)) return;
      e.f ^= ue;
    }
  }
  Re.push(e);
}
function Wr(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & be) !== 0, l = a && (i & ue) !== 0;
    if (!l && !(i & _e))
      if (i & wt) {
        a ? r.f ^= ue : lt(r) && It(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & Cr && n.push(r);
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
  for (var c = 0; c < n.length; c++)
    s = n[c], e.push(s), Wr(s, e);
}
function Zr(t) {
  var e = ct, r = Re;
  try {
    Yr();
    const i = [];
    ct = ri, Re = i, Xe = !1, Kr(r);
    var n = t == null ? void 0 : t();
    return ti(), (Re.length > 0 || i.length > 0) && Zr(), Be = 0, n;
  } finally {
    ct = e, Re = r;
  }
}
function h(t) {
  var s;
  var e = t.f, r = (e & Se) !== 0;
  if (r && e & nt) {
    var n = zr(
      /** @type {Derived} */
      t
    );
    return Xt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (F !== null) {
    ge !== null && ge.includes(t) && Yn();
    var i = F.deps;
    ne === null && i !== null && i[oe] === t ? oe++ : ne === null ? ne = [t] : ne.push(t), Te !== null && R !== null && R.f & ue && !(R.f & be) && Te.includes(t) && (qe(R, ze), qt(R));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, lt(a) && Or(a)), t.v;
}
function bt(t) {
  const e = F;
  try {
    return F = null, t();
  } finally {
    F = e;
  }
}
const vi = ~(ze | rt | ue);
function qe(t, e) {
  t.f = t.f & vi | e;
}
function ee(t, e = !1, r) {
  me = {
    p: me,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function te(t) {
  const e = me;
  if (e !== null) {
    const l = e.e;
    if (l !== null) {
      var r = R, n = F;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          le(a.effect), fe(a.reaction), at(a.fn);
        }
      } finally {
        le(r), fe(n);
      }
    }
    me = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function P(t, e = null, r) {
  if (typeof t != "object" || t === null || De in t)
    return t;
  const n = Ot(t);
  if (n !== Hn && n !== Mn)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Kt(t), l = ce(0);
  a && i.set("length", ce(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, o, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Jn();
        var d = i.get(o);
        return d === void 0 ? (d = ce(c.value), i.set(o, d)) : J(d, P(c.value, s)), !0;
      },
      deleteProperty(u, o) {
        var c = i.get(o);
        if (c === void 0)
          o in u && i.set(o, ce(se));
        else {
          if (a && typeof o == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < d.v && J(d, v);
          }
          J(c, se), cr(l);
        }
        return !0;
      },
      get(u, o, c) {
        var f;
        if (o === De)
          return t;
        var d = i.get(o), v = o in u;
        if (d === void 0 && (!v || (f = Ue(u, o)) != null && f.writable) && (d = ce(P(v ? u[o] : se, s)), i.set(o, d)), d !== void 0) {
          var m = h(d);
          return m === se ? void 0 : m;
        }
        return Reflect.get(u, o, c);
      },
      getOwnPropertyDescriptor(u, o) {
        var c = Reflect.getOwnPropertyDescriptor(u, o);
        if (c && "value" in c) {
          var d = i.get(o);
          d && (c.value = h(d));
        } else if (c === void 0) {
          var v = i.get(o), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(u, o) {
        var m;
        if (o === De)
          return !0;
        var c = i.get(o), d = c !== void 0 && c.v !== se || Reflect.has(u, o);
        if (c !== void 0 || R !== null && (!d || (m = Ue(u, o)) != null && m.writable)) {
          c === void 0 && (c = ce(d ? P(u[o], s) : se), i.set(o, c));
          var v = h(c);
          if (v === se)
            return !1;
        }
        return d;
      },
      set(u, o, c, d) {
        var _;
        var v = i.get(o), m = o in u;
        if (a && o === "length")
          for (var f = c; f < /** @type {Source<number>} */
          v.v; f += 1) {
            var y = i.get(f + "");
            y !== void 0 ? J(y, se) : f in u && (y = ce(se), i.set(f + "", y));
          }
        v === void 0 ? (!m || (_ = Ue(u, o)) != null && _.writable) && (v = ce(void 0), J(v, P(c, s)), i.set(o, v)) : (m = v.v !== se, J(v, P(c, s)));
        var b = Reflect.getOwnPropertyDescriptor(u, o);
        if (b != null && b.set && b.set.call(d, c), !m) {
          if (a && typeof o == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), p = Number(o);
            Number.isInteger(p) && p >= g.v && J(g, p + 1);
          }
          cr(l);
        }
        return !0;
      },
      ownKeys(u) {
        h(l);
        var o = Reflect.ownKeys(u).filter((v) => {
          var m = i.get(v);
          return m === void 0 || m.v !== se;
        });
        for (var [c, d] of i)
          d.v !== se && !(c in u) && o.push(c);
        return o;
      },
      setPrototypeOf() {
        Gn();
      }
    }
  );
}
function cr(t, e = 1) {
  J(t, t.v + e);
}
function dr(t) {
  return t !== null && typeof t == "object" && De in t ? t[De] : t;
}
function ci(t, e) {
  return Object.is(dr(t), dr(e));
}
var fr, Xr, Qr;
function Lt() {
  if (fr === void 0) {
    fr = window;
    var t = Element.prototype, e = Node.prototype;
    Xr = Ue(e, "firstChild").get, Qr = Ue(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Je(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return Xr.call(t);
}
// @__NO_SIDE_EFFECTS__
function xe(t) {
  return Qr.call(t);
}
function E(t, e) {
  if (!H)
    return /* @__PURE__ */ Ie(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(j)
  );
  if (r === null)
    r = j.appendChild(Je());
  else if (e && r.nodeType !== 3) {
    var n = Je();
    return r == null || r.before(n), de(n), n;
  }
  return de(r), r;
}
function B(t, e) {
  if (!H) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ie(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ xe(r) : r;
  }
  return j;
}
function $(t, e = 1, r = !1) {
  let n = H ? j : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ xe(n);
  if (!H)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Je();
    return n == null || n.before(a), de(a), a;
  }
  return de(n), /** @type {TemplateNode} */
  n;
}
function er(t) {
  t.textContent = "";
}
let H = !1;
function Ee(t) {
  H = t;
}
let j;
function de(t) {
  if (t === null)
    throw xt(), je;
  return j = t;
}
function He() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(j)
  );
}
function x(t) {
  if (H) {
    if (/* @__PURE__ */ xe(j) !== null)
      throw xt(), je;
    j = t;
  }
}
function en(t = 1) {
  if (H) {
    for (var e = t, r = j; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r);
    j = r;
  }
}
function jt() {
  for (var t = 0, e = j; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Yt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === yr || r === Gt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(e)
    );
    e.remove(), e = n;
  }
}
function di(t) {
  H && /* @__PURE__ */ Ie(t) !== null && er(t);
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
  var e = F, r = R;
  fe(null), le(null);
  try {
    return t();
  } finally {
    fe(e), le(r);
  }
}
function tr(t, e, r, n = r) {
  t.addEventListener(e, () => fi(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, tn();
}
const rn = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Set();
function re(t) {
  for (var e = 0; e < t.length; e++)
    rn.add(t[e]);
  for (var r of Dt)
    r(t);
}
function ot(t) {
  var p;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((p = t.composedPath) == null ? void 0 : p.call(t)) || [], a = (
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
    ht(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var c = F, d = R;
    fe(null), le(null);
    try {
      for (var v, m = []; a !== null; ) {
        var f = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var y = a["__" + n];
          if (y !== void 0 && !/** @type {any} */
          a.disabled)
            if (Kt(y)) {
              var [b, ...g] = y;
              b.apply(a, [t, ...g]);
            } else
              y.call(a, t);
        } catch (_) {
          v ? m.push(_) : v = _;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        a = f;
      }
      if (v) {
        for (let _ of m)
          queueMicrotask(() => {
            throw _;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fe(c), le(d);
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
    R
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function I(t, e) {
  var r = (e & On) !== 0, n = (e & Rn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (H)
      return Ae(j, null), j;
    i === void 0 && (i = nn(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ie(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(l)
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
function ie() {
  if (H)
    return Ae(j, null), j;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Je();
  return t.append(e, r), Ae(e, r), t;
}
function S(t, e) {
  if (H) {
    R.nodes_end = j, He();
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
let Ft = !0;
function U(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function an(t, e) {
  return ln(t, e);
}
function _i(t, e) {
  Lt(), e.intro = e.intro ?? !1;
  const r = e.target, n = H, i = j;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== yr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ xe(a);
    if (!a)
      throw je;
    Ee(!0), de(
      /** @type {Comment} */
      a
    ), He();
    const l = ln(t, { ...e, anchor: a });
    if (j === null || j.nodeType !== 8 || /** @type {Comment} */
    j.data !== Yt)
      throw xt(), je;
    return Ee(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === je)
      return e.recover === !1 && Pn(), Lt(), er(r), Ee(!1), an(t, e);
    throw l;
  } finally {
    Ee(n), de(i);
  }
}
const Me = /* @__PURE__ */ new Map();
function ln(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Lt();
  var s = /* @__PURE__ */ new Set(), u = (d) => {
    for (var v = 0; v < d.length; v++) {
      var m = d[v];
      if (!s.has(m)) {
        s.add(m);
        var f = pi(m);
        e.addEventListener(m, ot, { passive: f });
        var y = Me.get(m);
        y === void 0 ? (document.addEventListener(m, ot, { passive: f }), Me.set(m, 1)) : Me.set(m, y + 1);
      }
    }
  };
  u(Wt(rn)), Dt.add(u);
  var o = void 0, c = Rr(() => {
    var d = r ?? e.appendChild(Je());
    return Ve(() => {
      if (a) {
        ee({});
        var v = (
          /** @type {ComponentContext} */
          me
        );
        v.c = a;
      }
      i && (n.$$events = i), H && Ae(
        /** @type {TemplateNode} */
        d,
        null
      ), Ft = l, o = t(d, n) || {}, Ft = !0, H && (R.nodes_end = j), a && te();
    }), () => {
      var f;
      for (var v of s) {
        e.removeEventListener(v, ot);
        var m = (
          /** @type {number} */
          Me.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, ot), Me.delete(v)) : Me.set(v, m);
      }
      Dt.delete(u), Bt.delete(o), d !== r && ((f = d.parentNode) == null || f.removeChild(d));
    };
  });
  return Bt.set(o, c), o;
}
let Bt = /* @__PURE__ */ new WeakMap();
function gi(t) {
  const e = Bt.get(t);
  e && e();
}
function O(t, e, r, n = null, i = !1) {
  H && He();
  var a = t, l = null, s = null, u = null, o = i ? kt : 0;
  Ct(() => {
    if (u === (u = !!e())) return;
    let c = !1;
    if (H) {
      const d = (
        /** @type {Comment} */
        a.data === Gt
      );
      u === d && (a = jt(), de(a), Ee(!1), c = !0);
    }
    u ? (l ? _t(l) : l = Ve(() => r(a)), s && Ut(s, () => {
      s = null;
    })) : (s ? _t(s) : n && (s = Ve(() => n(a))), l && Ut(l, () => {
      l = null;
    })), c && Ee(!0);
  }, o), H && (a = j);
}
function K(t, e) {
  return e;
}
function mi(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    Qt(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    er(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), $e(t, e[0].prev, e[a - 1].next);
  }
  jr(i, () => {
    for (var o = 0; o < a; o++) {
      var c = e[o];
      s || (n.delete(c.k), $e(t, c.prev, c.next)), Oe(c.e, !s);
    }
  });
}
function W(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & wr) !== 0;
  if (u) {
    var o = (
      /** @type {Element} */
      t
    );
    l = H ? de(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ie(o)
    ) : o.appendChild(Je());
  }
  H && He();
  var c = null, d = !1;
  Ct(() => {
    var v = r(), m = Kt(v) ? v : v == null ? [] : Wt(v), f = m.length;
    if (d && f === 0)
      return;
    d = f === 0;
    let y = !1;
    if (H) {
      var b = (
        /** @type {Comment} */
        l.data === Gt
      );
      b !== (f === 0) && (l = jt(), de(l), Ee(!1), y = !0);
    }
    if (H) {
      for (var g = null, p, _ = 0; _ < f; _++) {
        if (j.nodeType === 8 && /** @type {Comment} */
        j.data === Yt) {
          l = /** @type {Comment} */
          j, y = !0, Ee(!1);
          break;
        }
        var k = m[_], w = n(k, _);
        p = sn(j, s, g, null, k, w, _, i, e), s.items.set(w, p), g = p;
      }
      f > 0 && de(jt());
    }
    if (!H) {
      var q = (
        /** @type {Effect} */
        F
      );
      bi(m, s, l, i, e, (q.f & _e) !== 0, n);
    }
    a !== null && (f === 0 ? c ? _t(c) : c = Ve(() => a(l)) : c !== null && Ut(c, () => {
      c = null;
    })), y && Ee(!0), r();
  }), H && (l = j);
}
function bi(t, e, r, n, i, a, l) {
  var Z, Q, he, we;
  var s = (i & In) !== 0, u = (i & (Vt | Jt)) !== 0, o = t.length, c = e.items, d = e.first, v = d, m, f = null, y, b = [], g = [], p, _, k, w;
  if (s)
    for (w = 0; w < o; w += 1)
      p = t[w], _ = l(p, w), k = c.get(_), k !== void 0 && ((Z = k.a) == null || Z.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(k));
  for (w = 0; w < o; w += 1) {
    if (p = t[w], _ = l(p, w), k = c.get(_), k === void 0) {
      var q = v ? (
        /** @type {TemplateNode} */
        v.e.nodes_start
      ) : r;
      f = sn(
        q,
        e,
        f,
        f === null ? e.first : f.next,
        p,
        _,
        w,
        n,
        i
      ), c.set(_, f), b = [], g = [], v = f.next;
      continue;
    }
    if (u && xi(k, p, w, i), k.e.f & _e && (_t(k.e), s && ((Q = k.a) == null || Q.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (m !== void 0 && m.has(k)) {
        if (b.length < g.length) {
          var z = g[0], A;
          f = z.prev;
          var M = b[0], V = b[b.length - 1];
          for (A = 0; A < b.length; A += 1)
            pr(b[A], z, r);
          for (A = 0; A < g.length; A += 1)
            m.delete(g[A]);
          $e(e, M.prev, V.next), $e(e, f, M), $e(e, V, z), v = z, f = V, w -= 1, b = [], g = [];
        } else
          m.delete(k), pr(k, v, r), $e(e, k.prev, k.next), $e(e, k, f === null ? e.first : f.next), $e(e, f, k), f = k;
        continue;
      }
      for (b = [], g = []; v !== null && v.k !== _; )
        (a || !(v.e.f & _e)) && (m ?? (m = /* @__PURE__ */ new Set())).add(v), g.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    b.push(k), f = k, v = k.next;
  }
  if (v !== null || m !== void 0) {
    for (var D = m === void 0 ? [] : Wt(m); v !== null; )
      (a || !(v.e.f & _e)) && D.push(v), v = v.next;
    var L = D.length;
    if (L > 0) {
      var X = i & wr && o === 0 ? r : null;
      if (s) {
        for (w = 0; w < L; w += 1)
          (he = D[w].a) == null || he.measure();
        for (w = 0; w < L; w += 1)
          (we = D[w].a) == null || we.fix();
      }
      mi(e, D, X, c);
    }
  }
  s && St(() => {
    var ye;
    if (y !== void 0)
      for (k of y)
        (ye = k.a) == null || ye.apply();
  }), R.first = e.first && e.first.e, R.last = f && f.e;
}
function xi(t, e, r, n) {
  n & Vt && Rt(t.v, e), n & Jt ? Rt(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function sn(t, e, r, n, i, a, l, s, u) {
  var o = (u & Vt) !== 0, c = (u & qn) === 0, d = o ? c ? /* @__PURE__ */ Zt(i) : ce(i) : i, v = u & Jt ? ce(l) : l, m = {
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
    return m.e = Ve(() => s(t, d, v), H), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? e.first = m : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
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
      /* @__PURE__ */ xe(a)
    );
    i.before(a), a = l;
  }
}
function $e(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function wi(t, e, r, n, i) {
  var a = t, l = "", s;
  Ct(() => {
    if (l === (l = e() ?? "")) {
      H && He();
      return;
    }
    s !== void 0 && (Oe(s), s = void 0), l !== "" && (s = Ve(() => {
      if (H) {
        j.data;
        for (var u = He(), o = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          o = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ xe(u);
        if (u === null)
          throw xt(), je;
        Ae(j, o), a = de(u);
        return;
      }
      var c = l + "", d = nn(c);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function rr(t, e, r, n, i) {
  var s;
  H && He();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function G(t, e) {
  St(() => {
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
function st(t) {
  if (H) {
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
    t.__on_r = r, ei(r), tn();
  }
}
function T(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  H && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Dn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && on(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function zt(t, e, r) {
  var n = F, i = R;
  fe(null), le(null);
  try {
    on(t).includes(e) ? t[e] = r : T(t, e, r);
  } finally {
    fe(n), le(i);
  }
}
var _r = /* @__PURE__ */ new Map();
function on(t) {
  var e = _r.get(t.nodeName);
  if (e) return e;
  _r.set(t.nodeName, e = []);
  for (var r, n = Ot(t), i = Element.prototype; i !== n; ) {
    r = Un(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = Ot(n);
  }
  return e;
}
function Ke(t, e) {
  var r = t.__className, n = yi(e);
  H && t.className === n ? t.__className = n : (r !== n || H && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
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
function ut(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ci(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function gr(t) {
  const e = {}, r = t.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = Ci(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const Si = (t) => t;
function Ii(t, e, r, n) {
  var i = (t & zn) !== 0, a = "both", l, s = e.inert, u, o;
  function c() {
    var y = F, b = R;
    fe(null), le(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      fe(y), le(b);
    }
  }
  var d = {
    is_global: i,
    in() {
      e.inert = s, ut(e, "introstart"), u = Pt(e, c(), o, 1, () => {
        ut(e, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(y) {
      e.inert = !0, ut(e, "outrostart"), o = Pt(e, c(), u, 0, () => {
        ut(e, "outroend"), y == null || y();
      });
    },
    stop: () => {
      u == null || u.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    R
  );
  if ((v.transitions ?? (v.transitions = [])).push(d), Ft) {
    var m = i;
    if (!m) {
      for (var f = (
        /** @type {Effect | null} */
        v.parent
      ); f && f.f & kt; )
        for (; (f = f.parent) && !(f.f & yt); )
          ;
      m = !f || (f.f & Sr) !== 0;
    }
    m && at(() => {
      bt(() => d.in());
    });
  }
}
function Pt(t, e, r, n, i) {
  var a = n === 1;
  if (Ln(e)) {
    var l, s = !1;
    return St(() => {
      if (!s) {
        var b = e({ direction: a ? "in" : "out" });
        l = Pt(t, b, r, n, i);
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
      abort: Ye,
      deactivate: Ye,
      reset: Ye,
      t: () => n
    };
  const { delay: u = 0, css: o, tick: c, easing: d = Si } = e;
  var v = [];
  if (a && r === void 0 && (c && c(0, 1), o)) {
    var m = gr(o(0, 1));
    v.push(m, m);
  }
  var f = () => 1 - n, y = t.animate(v, { duration: u });
  return y.onfinish = () => {
    var b = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - b, p = (
      /** @type {number} */
      e.duration * Math.abs(g)
    ), _ = [];
    if (p > 0) {
      if (o)
        for (var k = Math.ceil(p / 16.666666666666668), w = 0; w <= k; w += 1) {
          var q = b + g * d(w / k), z = o(q, 1 - q);
          _.push(gr(z));
        }
      f = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          y.currentTime
        );
        return b + g * d(A / p);
      }, c && Ei(() => {
        if (y.playState !== "running") return !1;
        var A = f();
        return c(A, 1 - A), !0;
      });
    }
    y = t.animate(_, { duration: p, fill: "forwards" }), y.onfinish = () => {
      f = () => n, c == null || c(n, 1 - n), i();
    };
  }, {
    abort: () => {
      y && (y.cancel(), y.effect = null, y.onfinish = Ye);
    },
    deactivate: () => {
      i = Ye;
    },
    reset: () => {
      n === 0 && (c == null || c(1, 0));
    },
    t: () => f()
  };
}
function et(t, e, r = e) {
  tr(t, "input", () => {
    var n = mr(t) ? br(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Et(() => {
    var n = e();
    if (H && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    mr(t) && n === br(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function qi(t, e, r = e) {
  tr(t, "change", () => {
    var n = t.checked;
    r(n);
  }), e() == null && r(!1), Et(() => {
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
function vn(t, e, r) {
  if (t.multiple)
    return Ni(t, e);
  for (var n of t.options) {
    var i = We(n);
    if (ci(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function $i(t, e) {
  at(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      vn(t, n);
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
  tr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), We);
    else {
      var a = t.querySelector(":checked");
      i = a && We(a);
    }
    r(i);
  }), at(() => {
    var i = e();
    if (vn(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = We(a), r(i));
    }
    t.__value = i, n = !1;
  }), $i(t);
}
function Ni(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(We(r));
}
function We(t) {
  return "__value" in t ? t.__value : t.value;
}
function xr(t, e) {
  return t === e || (t == null ? void 0 : t[De]) === e;
}
function nr(t = {}, e, r, n) {
  return at(() => {
    var i, a;
    return Et(() => {
      i = a, a = (n == null ? void 0 : n()) || [], bt(() => {
        t !== r(...a) && (e(t, ...a), i && xr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      St(() => {
        a && xr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let vt = !1;
function Ti(t) {
  var e = vt;
  try {
    return vt = !1, [t(), vt];
  } finally {
    vt = e;
  }
}
function Ai(t) {
  for (var e = R, r = R; e !== null && !(e.f & (be | tt)); )
    e = e.parent;
  try {
    return le(e), t();
  } finally {
    le(r);
  }
}
function C(t, e, r, n) {
  var w;
  var i = (r & $n) !== 0, a = !Nr, l = (r & Tn) !== 0, s = (r & An) !== 0, u = !1, o;
  l ? [o, u] = Ti(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var c = (w = Ue(t, e)) == null ? void 0 : w.set, d = (
    /** @type {V} */
    n
  ), v = !0, m = !1, f = () => (m = !0, v && (v = !1, s ? d = bt(
    /** @type {() => V} */
    n
  ) : d = /** @type {V} */
  n), d);
  o === void 0 && n !== void 0 && (c && a && Vn(), o = f(), c && c(o));
  var y;
  if (y = () => {
    var q = (
      /** @type {V} */
      t[e]
    );
    return q === void 0 ? f() : (v = !0, m = !1, q);
  }, !(r & Nn))
    return y;
  if (c) {
    var b = t.$$legacy;
    return function(q, z) {
      return arguments.length > 0 ? ((!z || b || u) && c(z ? y() : q), q) : y();
    };
  }
  var g = !1, p = !1, _ = /* @__PURE__ */ Zt(o), k = Ai(
    () => /* @__PURE__ */ Ze(() => {
      var q = y(), z = h(_);
      return g ? (g = !1, p = !0, z) : (p = !1, _.v = q);
    })
  );
  return i || (k.equals = $r), function(q, z) {
    if (arguments.length > 0) {
      const A = z ? h(k) : l ? P(q) : q;
      return k.equals(A) || (g = !0, J(_, A), m && d !== void 0 && (d = A), bt(() => h(k))), q;
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
    Tt(this, ke);
    /** @type {Record<string, any>} */
    Tt(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var u = /* @__PURE__ */ Zt(s);
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
          return J(r.get(s) ?? n(s, u), u), Reflect.set(l, s, u);
        }
      }
    );
    At(this, ve, (e.hydrate ? _i : an)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Zr(), At(this, ke, i.$$events);
    for (const l of Object.keys(ae(this, ve)))
      l === "$set" || l === "$destroy" || l === "$on" || ht(this, l, {
        get() {
          return ae(this, ve)[l];
        },
        /** @param {any} value */
        set(s) {
          ae(this, ve)[l] = s;
        },
        enumerable: !0
      });
    ae(this, ve).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, ae(this, ve).$destroy = () => {
      gi(ae(this, ve));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ae(this, ve).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    ae(this, ke)[e] = ae(this, ke)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return ae(this, ke)[e].push(n), () => {
      ae(this, ke)[e] = ae(this, ke)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    ae(this, ve).$destroy();
  }
}
ke = new WeakMap(), ve = new WeakMap();
let dn;
typeof HTMLElement == "function" && (dn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    pe(this, "$$ctor");
    /** Slots */
    pe(this, "$$s");
    /** @type {any} The Svelte component instance */
    pe(this, "$$c");
    /** Whether or not the custom element is connected */
    pe(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    pe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    pe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    pe(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    pe(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    pe(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    pe(this, "$$me");
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
          i !== "default" && (l.name = i), S(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ri(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = dt(a, i.value, this.$$p_d, "toProp"));
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
        Et(() => {
          var i;
          this.$$r = !0;
          for (const a of ft(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = dt(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = dt(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function dt(t, e, r, n) {
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
function Y(t, e, r, n, i, a) {
  let l = class extends dn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ft(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return ft(e).forEach((s) => {
    ht(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(u) {
        var d;
        u = dt(s, u, e), this.$$d[s] = u;
        var o = this.$$c;
        if (o) {
          var c = (d = Ue(o, s)) == null ? void 0 : d.get;
          c ? o[s] = u : o.$set({ [s]: u });
        }
      }
    });
  }), n.forEach((s) => {
    ht(l.prototype, s, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var Ui = /* @__PURE__ */ I('<button type="button"><!></button>');
const Hi = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Mi(t, e) {
  G(t, Hi);
  const r = C(e, "type", 3, "primary"), n = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const i = C(e, "onClick", 3, void 0);
  var a = Ui();
  a.__click = function(...s) {
    var u;
    (u = i()) == null || u.apply(this, s);
  };
  var l = E(a);
  rr(l, e, "default", {}), x(a), N(() => Ke(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), S(t, a);
}
re(["click"]);
customElements.define("ing-button", Y(Mi, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Li = /* @__PURE__ */ I('<button type="button"><!></button>');
const ji = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Di(t, e) {
  G(t, ji), C(e, "type", 3, "primary");
  const r = C(e, "size", 3, "medium");
  C(e, "label", 3, "Button");
  const n = C(e, "onClick", 3, void 0);
  var i = Li();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = E(i);
  rr(a, e, "default", {}), x(i), N(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), S(t, i);
}
re(["click"]);
customElements.define("ing-button-gray", Y(Di, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Fi = /* @__PURE__ */ I('<div class="input_label svelte-1485t9m"> </div>'), Bi = /* @__PURE__ */ I('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Pi = (t, e) => {
  e(t);
}, Vi = /* @__PURE__ */ I('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Ji = (t, e) => {
  e(t);
}, Gi = /* @__PURE__ */ I('<input class="input_field svelte-1485t9m" form="">'), Yi = /* @__PURE__ */ I('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const Ki = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function $t(t, e) {
  ee(e, !0), G(t, Ki);
  let r = C(e, "inputId", 7, ""), n = C(e, "label", 3, ""), i = C(e, "icon", 3, ""), a = C(e, "type", 3, "text"), l = C(e, "placeholder", 3, ""), s = C(e, "input", 15, ""), u = C(e, "inputStyle", 3, ""), o = C(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const c = (b) => {
    if (b && b.target) {
      let g = "";
      b.target.value && (g = b.target.value), o() && o()(r(), g), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: g }
      }));
    }
  };
  var d = Yi(), v = E(d);
  O(v, n, (b) => {
    var g = Fi(), p = E(g, !0);
    x(g), N(() => U(p, n())), S(b, g);
  });
  var m = $(v, 2), f = E(m);
  O(f, i, (b) => {
    var g = Bi(), p = B(g), _ = E(p);
    x(p), en(), N(() => T(_, "src", i())), S(b, g);
  });
  var y = $(f, 2);
  O(
    y,
    () => a() == "textarea",
    (b) => {
      var g = Vi();
      di(g), g.__input = [Pi, c], N(() => {
        T(g, "id", r()), T(g, "name", r()), T(g, "placeholder", l());
      }), et(g, s), S(b, g);
    },
    (b) => {
      var g = Gi();
      st(g), g.__input = [Ji, c], N(() => {
        T(g, "id", r()), T(g, "name", r()), T(g, "type", a()), T(g, "placeholder", l());
      }), et(g, s), S(b, g);
    }
  ), x(m), x(d), N(() => T(d, "style", u())), S(t, d), te();
}
re(["input"]);
customElements.define("ing-input", Y(
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
var Wi = /* @__PURE__ */ I('<a class="svelte-hcumdc"> </a>'), Zi = (t, e, r) => e(h(r).title), Xi = /* @__PURE__ */ I('<button class="menu_item_button svelte-hcumdc"> </button>'), Qi = /* @__PURE__ */ I('<div class="menu_item svelte-hcumdc"><!></div>'), ea = /* @__PURE__ */ I('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const ta = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function ir(t, e) {
  ee(e, !0), G(t, ta);
  let r = C(e, "position", 19, () => ({})), n = C(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = ea(), l = $(E(a), 2);
  W(l, 21, n, K, (s, u) => {
    var o = Qi(), c = E(o);
    O(
      c,
      () => h(u).url,
      (d) => {
        var v = Wi(), m = E(v, !0);
        x(v), N(() => {
          T(v, "href", h(u).url), U(m, h(u).title);
        }), S(d, v);
      },
      (d) => {
        var v = Xi();
        v.__click = [Zi, i, u];
        var m = E(v, !0);
        x(v), N(() => U(m, h(u).title)), S(d, v);
      }
    ), x(o), S(s, o);
  }), x(l), x(a), N(() => T(a, "style", `top: ${r().top}; left: ${r().left};`)), S(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-dropdown", Y(ir, { position: {}, menuItems: {} }, [], [], !0));
var ra = /* @__PURE__ */ I('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), na = (t, e) => {
  J(e, !h(e));
}, ia = /* @__PURE__ */ I('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), aa = /* @__PURE__ */ I("<span></span>"), la = /* @__PURE__ */ I('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const sa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function fn(t, e) {
  ee(e, !0), G(t, sa), C(e, "title", 3, "Apint.org");
  const r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !1), a = C(e, "username", 3, ""), l = C(e, "userpic", 3, "");
  let s = "", u = Ce(!1), o = Ce(void 0);
  function c() {
    let g = {}, p;
    if (h(o) && (p = h(o)), p) {
      var _ = p.getBoundingClientRect();
      g.top = (_.top + _.height + 12).toString() + "px", g.left = (_.left - 115).toString() + "px", console.log(g);
    }
    return g;
  }
  var d = la(), v = E(d), m = E(v);
  $t(m, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var f = $(m, 2);
  f.textContent = s, x(v);
  var y = $(v, 2), b = E(y);
  O(
    b,
    i,
    (g) => {
      var p = ia(), _ = B(p), k = E(_);
      O(k, n, (V) => {
        var D = ra(), L = B(D);
        en(2), N(() => T(L, "src", n())), S(V, D);
      });
      var w = $(k, 2);
      w.__click = [na, u];
      var q = E(w), z = $(q, 2), A = E(z, !0);
      x(z), x(w), nr(w, (V) => J(o, V), () => h(o)), x(_);
      var M = $(_, 2);
      O(M, () => h(u), (V) => {
        var D = /* @__PURE__ */ Ze(c);
        ir(V, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return h(D);
          }
        });
      }), N(() => {
        T(q, "src", l()), U(A, a());
      }), S(g, p);
    },
    (g) => {
      var p = ie(), _ = B(p);
      O(
        _,
        i,
        (k) => {
          var w = aa();
          S(k, w);
        },
        null,
        !0
      ), S(g, p);
    }
  ), x(y), x(d), S(t, d), te();
}
re(["click"]);
customElements.define("ing-headerlite", Y(
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
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", u = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], c = o.map(
    (g) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${g[0].toUpperCase()}${g.slice(1)}`
    )
  ), d = parseFloat(a[`padding${c[0]}`]), v = parseFloat(a[`padding${c[1]}`]), m = parseFloat(a[`margin${c[0]}`]), f = parseFloat(a[`margin${c[1]}`]), y = parseFloat(
    a[`border${c[0]}Width`]
  ), b = parseFloat(
    a[`border${c[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (g) => `overflow: hidden;opacity: ${Math.min(g * 20, 1) * l};${s}: ${g * u}px;padding-${o[0]}: ${g * d}px;padding-${o[1]}: ${g * v}px;margin-${o[0]}: ${g * m}px;margin-${o[1]}: ${g * f}px;border-${o[0]}-width: ${g * y}px;border-${o[1]}-width: ${g * b}px;`
  };
}
function va(t) {
  return t;
}
var ca = (t, e, r) => e(h(r).title), da = /* @__PURE__ */ I('<img alt="option" width="18px">'), fa = /* @__PURE__ */ I('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ha = /* @__PURE__ */ I('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), pa = (t, e, r) => e(h(r).title), _a = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), ga = /* @__PURE__ */ I('<div class="menu_item_frame svelte-v1mgvt"></div>'), ma = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), ba = /* @__PURE__ */ I('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const xa = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function wa(t, e) {
  ee(e, !0), G(t, xa), C(e, "title", 3, "Mapp"), C(e, "icon", 3, "");
  let r = C(e, "searchicon", 3, ""), n = C(e, "notificationicon", 3, ""), i = C(e, "supportuser", 3, !0), a = C(e, "username", 3, ""), l = C(e, "userpic", 3, ""), s = C(e, "activeitem", 3, ""), u = C(e, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let o = P({});
  if (s()) {
    o[s()] = !0;
    for (let p of u().items)
      if (p.subitems) {
        for (let _ of p.subitems)
          if (_.title == s()) {
            o[p.title] = !0;
            break;
          }
      }
  }
  let c = (p) => {
    let _ = u().items.find((k) => k.title === p);
    o[p] ? _ && (!_.url || _.url === "#") && (o[p] = !o[p]) : o[p] = !0;
  };
  var d = ba(), v = E(d), m = E(v);
  W(m, 21, () => u().items, K, (p, _) => {
    var k = ma(), w = B(k);
    w.__click = [ca, c, _];
    var q = E(w), z = E(q), A = E(z);
    O(
      A,
      () => h(_).icon,
      (X) => {
        var Z = da();
        N(() => T(Z, "src", h(_).icon)), S(X, Z);
      },
      (X) => {
        var Z = fa();
        S(X, Z);
      }
    ), x(z);
    var M = $(z, 2), V = E(M, !0);
    x(M);
    var D = $(M, 2);
    O(D, () => h(_).subitems, (X) => {
      var Z = ha();
      N(() => Ke(Z, `${(o[h(_).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), S(X, Z);
    }), x(q), x(w);
    var L = $(w, 2);
    O(L, () => o[h(_).title] && h(_).subitems, (X) => {
      var Z = ga();
      W(Z, 21, () => h(_).subitems, K, (he, we) => {
        var ye = _a();
        ye.__click = [pa, c, we];
        var lr = E(ye), sr = $(E(lr), 2), kn = E(sr, !0);
        x(sr), x(lr), x(ye), N(() => {
          T(ye, "href", h(we).url), Ke(ye, `${(h(we).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), U(kn, h(we).title);
        }), S(he, ye);
      }), x(Z), Ii(3, Z, () => ua, () => ({ duration: 300, easing: va })), S(X, Z);
    }), N(() => {
      T(w, "href", h(_).url), Ke(w, `${(h(_).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), U(V, h(_).title);
    }), S(p, k);
  }), x(m), x(v);
  var f = $(v, 2), y = E(f);
  fn(y, {
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
  var b = $(y, 2), g = E(b);
  rr(g, e, "default", {}), x(b), x(f), x(d), S(t, d), te();
}
re(["click"]);
customElements.define("ing-buffet", Y(
  wa,
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
var ya = /* @__PURE__ */ I('<div class="input_label svelte-18z4bwo"> </div>'), ka = /* @__PURE__ */ I('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Ea = (t, e) => {
  e(t);
}, Ca = /* @__PURE__ */ I("<option> </option>"), Sa = /* @__PURE__ */ I('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const Ia = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function ar(t, e) {
  ee(e, !0), G(t, Ia);
  let r = C(e, "inputId", 7, ""), n = C(e, "label", 3, ""), i = C(e, "icon", 3, ""), a = C(e, "placeholder", 3, ""), l = C(e, "items", 3, ""), s = C(e, "value", 15, ""), u = C(e, "selectStyle", 3, ""), o = C(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let c = l().split(",");
  const d = (g) => {
    if (g && g.target) {
      let p = "";
      g.target.value && (p = g.target.value), o() && o()(r(), p), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: p }
      }));
    }
  };
  var v = Sa(), m = E(v);
  O(m, n, (g) => {
    var p = ya(), _ = E(p, !0);
    x(p), N(() => U(_, n())), S(g, p);
  });
  var f = $(m, 2), y = E(f);
  O(y, i, (g) => {
    var p = ka(), _ = E(p);
    x(p), N(() => T(_, "src", i())), S(g, p);
  });
  var b = $(y, 2);
  b.__input = [Ea, d], W(b, 21, () => c, K, (g, p) => {
    var _ = Ca(), k = {}, w = E(_, !0);
    x(_), N(() => {
      k !== (k = h(p)) && (_.value = (_.__value = h(p)) == null ? "" : h(p)), U(w, h(p));
    }), S(g, _);
  }), x(b), x(f), x(v), N(() => {
    T(v, "style", u()), T(b, "placeholder", a());
  }), cn(b, s), S(t, v), te();
}
re(["input"]);
customElements.define("ing-select", Y(
  ar,
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
var qa = /* @__PURE__ */ I('<div style="width: 100%;"><h3> </h3></div>'), $a = /* @__PURE__ */ I('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Na = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Ta(t, e) {
  ee(e, !0), G(t, Na);
  let r = C(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let u = {};
    for (const [o, c] of Object.entries(r().properties))
      u[o] = c.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: u } }));
  }
  var i = $a(), a = E(i);
  O(a, r, (u) => {
    var o = ie(), c = B(o);
    W(c, 17, () => Object.entries(r().properties), K, (d, v) => {
      let m = () => h(v)[0], f = () => h(v)[1];
      var y = ie(), b = B(y);
      O(
        b,
        () => f().format == "header",
        (g) => {
          var p = qa(), _ = E(p), k = E(_, !0);
          x(_), x(p), N(() => U(k, f().value)), S(g, p);
        },
        (g) => {
          var p = ie(), _ = B(p);
          O(
            _,
            () => f().format == "select",
            (k) => {
              var w = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
              ar(k, {
                get input() {
                  return f().value;
                },
                set input(q) {
                  f().value = q;
                },
                get selectStyle() {
                  return h(w);
                },
                get label() {
                  return f().description;
                },
                get items() {
                  return f().value;
                }
              });
            },
            (k) => {
              var w = ie(), q = B(w);
              O(
                q,
                () => f().type == "string",
                (z) => {
                  var A = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
                  $t(z, {
                    get inputId() {
                      return m();
                    },
                    get inputStyle() {
                      return h(A);
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
                    set input(M) {
                      f().value = M;
                    }
                  });
                },
                null,
                !0
              ), S(k, w);
            },
            !0
          ), S(g, p);
        }
      ), S(d, y);
    }), S(u, o);
  });
  var l = $(a, 2), s = E(l);
  zt(s, "size", "small"), zt(s, "id", "submit-button"), zt(s, "type", "secondary"), s.__click = n, x(l), x(i), S(t, i), te();
}
re(["click"]);
customElements.define("ing-form", Y(Ta, { schema: {} }, [], [], !0));
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
    J(a, P(l));
  } else
    J(a, P(r()));
}
var za = /* @__PURE__ */ I('<th class="svelte-15ql2st"> </th>'), Oa = /* @__PURE__ */ I('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Ra = /* @__PURE__ */ I('<tr class="svelte-15ql2st"></tr>'), Ua = /* @__PURE__ */ I('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Ha = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function Ma(t, e) {
  ee(e, !0), G(t, Ha);
  let r = C(e, "headers", 23, () => []), n = C(e, "headerssearchable", 23, () => []), i = C(e, "rows", 23, () => []), a = C(e, "linkprefix", 3, ""), l = C(e, "linkcolumnname", 3, ""), s = C(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = Ce(P(i())), o = Ce("");
  const c = (_) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: _ } })), s() && s()({ detail: { rowIndex: _ } });
  };
  var d = Ua(), v = E(d), m = $(E(v), 2), f = $(E(m));
  st(f), f.__keyup = [
    Aa,
    o,
    i,
    r,
    n,
    u
  ], x(m), x(v);
  var y = $(v, 2), b = E(y), g = E(b);
  W(g, 21, r, K, (_, k) => {
    var w = za(), q = E(w, !0);
    x(w), N(() => U(q, h(k))), S(_, w);
  }), x(g), x(b);
  var p = $(b);
  W(p, 21, () => h(u), K, (_, k, w) => {
    var q = Ra();
    q.__click = () => {
      c(w);
    }, W(q, 21, () => Object.entries(h(k)), K, (A, M) => {
      var V = Oa(), D = E(V), L = E(D, !0);
      x(D), x(V), N(() => {
        T(D, "href", a() + h(k)[l()]), U(L, h(M)[1]);
      }), S(A, V);
    }), x(q), S(_, q);
  }), x(p), x(y), x(d), et(f, () => h(o), (_) => J(o, _)), S(t, d), te();
}
re(["keyup", "click"]);
customElements.define("ing-table", Y(
  Ma,
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
var La = /* @__PURE__ */ I('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), ja = /* @__PURE__ */ I('<span class="title_text svelte-hi9ips"> </span>'), Da = /* @__PURE__ */ I('<a class="title svelte-hi9ips"><!> <!></a>'), Fa = (t, e, r) => e(t, h(r).title), Ba = /* @__PURE__ */ I('<img class="menu_icon svelte-hi9ips">'), Pa = (t, e, r) => e(t, h(r)), Va = /* @__PURE__ */ I('<span class="menu_text svelte-hi9ips"> </span>'), Ja = /* @__PURE__ */ I('<button class="menu_button svelte-hi9ips"><!></button> <!>', 1), Ga = /* @__PURE__ */ I('<div class="header svelte-hi9ips"><!> <div class="right_menus svelte-hi9ips"></div></div>');
const Ya = {
  hash: "svelte-hi9ips",
  code: ".header.svelte-hi9ips {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-hi9ips {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-hi9ips:link {text-decoration:none;}.title.svelte-hi9ips:visited {text-decoration:none;color:#222;}.title.svelte-hi9ips:hover {text-decoration:none;color:darkgray}.title.svelte-hi9ips:active {text-decoration:none;}.title_text.svelte-hi9ips {display:flex;align-items:center;}.right_menus.svelte-hi9ips {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-hi9ips {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-hi9ips {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-hi9ips:hover {cursor:pointer;}.menu_text.svelte-hi9ips {font-weight:700;}.round.svelte-hi9ips {height:40px;width:40px;border-radius:50%;}"
};
function Nt(t, e) {
  ee(e, !0), G(t, Ya);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), a = C(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = P({}), s = P({});
  function u(y, b) {
    y && y.stopPropagation();
    for (const g of Object.keys(l))
      g != b && (l[g] = !1);
    l[b] ? l[b] = !1 : l[b] = !0;
  }
  function o(y, b) {
    y.stopPropagation(), b.titleUrl ? window.location.href = b.titleUrl : document.dispatchEvent(new CustomEvent(b.title, { detail: {} }));
  }
  function c(y) {
    let b = {}, g;
    if (s[y] && (g = s[y]), g) {
      var p = g.getBoundingClientRect();
      b.top = (p.top + p.height + 12).toString() + "px", b.left = (p.left - 150).toString() + "px", console.log(b);
    } else
      console.log("Could not find element with id: " + y);
    return b;
  }
  function d(y) {
    return y.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const b of Object.keys(l))
      l[b] = !1;
  };
  var v = Ga(), m = E(v);
  O(m, () => r() || i(), (y) => {
    var b = Da(), g = E(b);
    O(g, i, (_) => {
      var k = La();
      N(() => T(k, "src", i())), S(_, k);
    });
    var p = $(g, 2);
    O(p, r, (_) => {
      var k = ja(), w = E(k, !0);
      x(k), N(() => U(w, r())), S(_, k);
    }), x(b), N(() => T(b, "href", n())), S(y, b);
  });
  var f = $(m, 2);
  W(f, 21, a, K, (y, b) => {
    var g = Ja(), p = B(g);
    N(() => T(p, "id", d(h(b).title + "_button"))), p.__click = [Fa, u, b];
    var _ = E(p);
    O(
      _,
      () => h(b).imageUrl,
      (w) => {
        var q = Ba();
        nr(q, (z, A) => s[d(A.title + "_button")] = z, (z) => s == null ? void 0 : s[d(z.title + "_button")], () => [h(b)]), N(() => {
          T(q, "alt", h(b).title), T(q, "src", h(b).imageUrl), Pe(q, "round", h(b).imageShape === "round");
        }), S(w, q);
      },
      (w) => {
        var q = Va();
        q.__click = [Pa, o, b];
        var z = E(q, !0);
        x(q), N(() => U(z, h(b).title)), S(w, q);
      }
    ), x(p);
    var k = $(p, 2);
    O(k, () => l[h(b).title], (w) => {
      var q = /* @__PURE__ */ Ze(() => c(d(h(b).title + "_button")));
      ir(w, {
        get menuItems() {
          return h(b).items;
        },
        get position() {
          return h(q);
        }
      });
    }), S(y, g);
  }), x(f), x(v), S(t, v), te();
}
re(["click"]);
customElements.define("mv-elegant-header", Y(
  Nt,
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
function Ka(t, e, r, n) {
  e.searchloadresults && J(r, P(e.searchloadresults(n())));
}
function Wa(t, e, r, n) {
  t.key === "Escape" ? J(e, P([])) : t.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n(""));
}
var Za = /* @__PURE__ */ I('<div class="result svelte-ihhy65"> </div>'), Xa = /* @__PURE__ */ I('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Qa = /* @__PURE__ */ I('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const el = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function hn(t, e) {
  ee(e, !0), G(t, el);
  let r = C(e, "searchtext", 15), n = Ce(P([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && J(n, P(o.detail.results));
  });
  var i = Qa(), a = B(i), l = E(a), s = $(E(l), 2);
  st(s), s.__input = [Ka, e, n, r], s.__keyup = [Wa, n, e, r], x(l), x(a);
  var u = $(a, 2);
  O(u, () => h(n).length > 0, (o) => {
    var c = Xa(), d = E(c), v = E(d);
    W(v, 21, () => h(n), K, (m, f) => {
      var y = Za(), b = E(y, !0);
      x(y), N(() => U(b, h(f))), S(m, y);
    }), x(v), x(d), x(c), S(o, c);
  }), et(s, r), S(t, i), te();
}
re(["input", "keyup"]);
customElements.define("mv-elegant-search", Y(
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
var tl = /* @__PURE__ */ I('<img class="hero_image svelte-e621nb" alt="logo">'), rl = /* @__PURE__ */ I('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const nl = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function pn(t, e) {
  G(t, nl);
  let r = C(e, "height", 3, "80px"), n = C(e, "title", 3, ""), i = C(e, "titleImageUrl", 3, ""), a = C(e, "searchtext", 15);
  var l = rl(), s = E(l), u = E(s);
  O(u, i, (m) => {
    var f = tl();
    N(() => {
      T(f, "height", `${r()}`), T(f, "src", i());
    }), S(m, f);
  });
  var o = $(u, 2), c = E(o, !0);
  x(o), x(s);
  var d = $(s, 2), v = E(d);
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
  }), x(d), x(l), N(() => {
    T(s, "style", `height: ${r()};`), U(c, n());
  }), S(t, l);
}
customElements.define("mv-elegant-hero-search", Y(
  pn,
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
function il(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var al = /* @__PURE__ */ I('<option class="svelte-1im86kb"> </option>'), ll = /* @__PURE__ */ I('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const sl = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function _n(t, e) {
  ee(e, !0), G(t, sl);
  let r = C(e, "input", 15), n = C(e, "options", 19, () => []);
  var i = ll(), a = E(i);
  a.__input = [il, r, e], W(a, 21, n, K, (l, s) => {
    var u = al(), o = {}, c = E(u, !0);
    x(u), N(() => {
      o !== (o = h(s)) && (u.value = (u.__value = h(s)) == null ? "" : h(s)), U(c, h(s));
    }), S(l, u);
  }), x(a), x(i), cn(a, r), S(t, i), te();
}
re(["input"]);
customElements.define("mv-elegant-select", Y(_n, { input: {}, onInput: {}, options: {} }, [], [], !0));
function ol(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var ul = (t, e, r) => e(h(r).name), vl = /* @__PURE__ */ I('<div class="icon svelte-lvweti">✓</div>'), cl = /* @__PURE__ */ I('<div class="icon svelte-lvweti"> </div>'), dl = /* @__PURE__ */ I('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), fl = /* @__PURE__ */ I('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), hl = /* @__PURE__ */ I('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), pl = /* @__PURE__ */ I('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const _l = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function gn(t, e) {
  ee(e, !0), G(t, _l);
  let r = C(e, "types", 7), n = C(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let i = e.sortTypes.split(",").map((f) => f.trim()), a = P({});
  function l(f) {
    a[f] ? a[f] = !1 : a[f] = !0, e.typeselect && e.typeselect(a);
  }
  function s(f) {
    e.sortselect && e.sortselect(f);
  }
  var u = pl(), o = E(u);
  W(o, 21, r, K, (f, y) => {
    var b = dl();
    b.__click = [ul, l, y];
    var g = E(b);
    O(
      g,
      () => a[h(y).name] === !0,
      (k) => {
        var w = vl();
        S(k, w);
      },
      (k) => {
        var w = cl(), q = E(w, !0);
        x(w), N(() => U(q, h(y).symbol)), S(k, w);
      }
    );
    var p = $(g, 2), _ = E(p, !0);
    x(p), x(b), N(() => {
      Pe(b, "filterbar_option_selected", a[h(y).name]), U(_, h(y).name);
    }), S(f, b);
  }), x(o);
  var c = $(o, 2), d = E(c);
  d.__click = [ol, n, e];
  var v = E(d);
  O(
    v,
    () => n() === "CARD",
    (f) => {
      var y = fl();
      S(f, y);
    },
    (f) => {
      var y = hl();
      S(f, y);
    }
  ), x(d);
  var m = $(d, 2);
  _n(m, {
    input: "Latest",
    options: i,
    onInput: s
  }), x(c), x(u), S(t, u), te();
}
re(["click"]);
customElements.define("mv-elegant-filtertypes", Y(
  gn,
  {
    types: {},
    sortTypes: {},
    typeselect: {},
    sortselect: {},
    view: {},
    viewselect: {}
  },
  [],
  [],
  !0
));
var gl = /* @__PURE__ */ I('<img alt="category icon" class="svelte-1yyvu4g">'), ml = /* @__PURE__ */ I('<span class="card_symbol svelte-1yyvu4g"> </span>'), bl = /* @__PURE__ */ I('<img class="header_image svelte-1yyvu4g" alt="header preview">'), xl = /* @__PURE__ */ I('<img alt="profile" class="svelte-1yyvu4g">'), wl = /* @__PURE__ */ I('<img alt="category icon" class="svelte-1yyvu4g">'), yl = /* @__PURE__ */ I('<span class="card_symbol svelte-1yyvu4g"> </span>'), kl = /* @__PURE__ */ I('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><!> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
const El = {
  hash: "svelte-1yyvu4g",
  code: ".card_frame.svelte-1yyvu4g {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1yyvu4g {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1yyvu4g span:where(.svelte-1yyvu4g) {white-space:nowrap;}.top_right_icons.svelte-1yyvu4g {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1yyvu4g {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1yyvu4g {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1yyvu4g:hover {color:#7c7c7c;}.author.svelte-1yyvu4g {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1yyvu4g:hover {color:#757a79;}.card_symbol.svelte-1yyvu4g {padding-left:6px;}.card_symbol.svelte-1yyvu4g:hover {cursor:default;}.footer.svelte-1yyvu4g {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1yyvu4g {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1yyvu4g {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g):hover {color:#82aae9;}.type_box.svelte-1yyvu4g {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function mn(t, e) {
  ee(e, !0), G(t, El);
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
  var n = kl(), i = E(n), a = E(i), l = E(a, !0);
  x(a);
  var s = $(a, 2);
  W(s, 21, () => r().categories, K, (k, w) => {
    var q = ie(), z = B(q);
    O(
      z,
      () => h(w).imageUrl,
      (A) => {
        var M = gl();
        N(() => {
          T(M, "src", h(w).imageUrl), T(M, "title", h(w).name);
        }), S(A, M);
      },
      (A) => {
        var M = ie(), V = B(M);
        O(
          V,
          () => h(w).symbol,
          (D) => {
            var L = ml(), X = E(L, !0);
            x(L), N(() => {
              T(L, "title", h(w).name), U(X, h(w).symbol);
            }), S(D, L);
          },
          null,
          !0
        ), S(A, M);
      }
    ), S(k, q);
  }), x(s), x(i);
  var u = $(i, 2);
  O(u, () => r().imageUrl, (k) => {
    var w = bl();
    N(() => T(w, "src", r().imageUrl)), S(k, w);
  });
  var o = $(u, 2), c = E(o, !0);
  x(o);
  var d = $(o, 2), v = E(d);
  O(v, () => r().authorImageUrl, (k) => {
    var w = xl();
    N(() => T(w, "src", r().authorImageUrl)), S(k, w);
  });
  var m = $(v);
  x(d);
  var f = $(d, 2), y = E(f), b = E(y, !0);
  x(y);
  var g = $(y, 2), p = E(g), _ = $(p, 2);
  W(_, 21, () => r().types, K, (k, w) => {
    var q = ie(), z = B(q);
    O(
      z,
      () => h(w).imageUrl,
      (A) => {
        var M = wl();
        N(() => {
          T(M, "src", h(w).imageUrl), T(M, "title", h(w).name);
        }), S(A, M);
      },
      (A) => {
        var M = ie(), V = B(M);
        O(
          V,
          () => h(w).symbol,
          (D) => {
            var L = yl(), X = E(L, !0);
            x(L), N(() => {
              T(L, "title", h(w).name), U(X, h(w).symbol);
            }), S(D, L);
          },
          null,
          !0
        ), S(A, M);
      }
    ), S(k, q);
  }), x(_), x(g), x(f), x(n), N(() => {
    U(l, r().dateTime), T(o, "href", r().link), U(c, r().title), T(d, "href", r().authorUrl), U(m, ` ${r().authorName ?? ""}`), U(b, r().description), T(p, "href", r().link);
  }), S(t, n), te();
}
customElements.define("mv-elegant-card", Y(mn, { item: {} }, [], [], !0));
var Cl = /* @__PURE__ */ I('<div class="menu_frame svelte-1dvvvu9"></div>');
const Sl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function bn(t, e) {
  G(t, Sl);
  let r = C(e, "items", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  var n = Cl();
  W(n, 21, r, K, (i, a) => {
    mn(i, {
      get item() {
        return h(a);
      }
    });
  }), x(n), S(t, n);
}
customElements.define("mv-elegant-cardpage", Y(bn, { items: {} }, [], [], !0));
var Il = (t, e, r) => e(h(r).name), ql = /* @__PURE__ */ I('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), $l = /* @__PURE__ */ I('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const Nl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function xn(t, e) {
  ee(e, !0), G(t, Nl);
  let r = C(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = P({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = $l();
  W(a, 21, r, K, (l, s) => {
    var u = ql(), o = E(u);
    o.__click = [Il, i, s];
    var c = E(o, !0);
    x(o);
    var d = $(o, 2), v = E(d, !0);
    x(d), x(u), N(() => {
      Pe(o, "letter_selected", n[h(s).name]), U(c, h(s).symbol), U(v, h(s).name);
    }), S(l, u);
  }), x(a), S(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-filtercats", Y(xn, { categories: {}, categoryselect: {} }, [], [], !0));
function Tl(t, e, r, n, i) {
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
    J(i, P(a));
  } else
    J(i, P(r()));
}
var Al = /* @__PURE__ */ I('<th class="svelte-1nbcvq9"> </th>'), zl = /* @__PURE__ */ I('<a class="table_row svelte-1nbcvq9"> </a>'), Ol = /* @__PURE__ */ I('<span class="table_row svelte-1nbcvq9"> </span>'), Rl = /* @__PURE__ */ I('<td class="svelte-1nbcvq9"><!></td>'), Ul = /* @__PURE__ */ I("<td></td>"), Hl = /* @__PURE__ */ I('<tr class="svelte-1nbcvq9"></tr>'), Ml = /* @__PURE__ */ I('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
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
function wn(t, e) {
  ee(e, !0), G(t, Ll);
  let r = C(e, "tableHeaders", 23, () => []), n = C(e, "tableRows", 23, () => []), i = C(e, "linkprefix", 3, ""), a = C(e, "linkcolumnname", 3, ""), l = C(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let _ of Object.keys(n()[0]))
      r().push({
        name: _,
        displayName: _,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = Ce(P(n())), u = Ce(""), o = Ce(-1);
  const c = (_) => {
    J(o, P(_)), l() && l()({ detail: { rowIndex: _ } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: _ } }));
  };
  var d = Ml(), v = E(d), m = $(E(v), 2), f = $(E(m));
  st(f), f.__keyup = [
    Tl,
    u,
    n,
    r,
    s
  ], x(m), x(v);
  var y = $(v, 2), b = E(y), g = E(b);
  W(g, 21, r, K, (_, k) => {
    var w = Al(), q = E(w, !0);
    x(w), N(() => {
      Pe(w, "column_sm", h(k).hideNarrow), U(q, h(k).displayName);
    }), S(_, w);
  }), x(g), x(b);
  var p = $(b);
  W(p, 21, () => h(s), K, (_, k, w) => {
    var q = Hl();
    q.__click = () => {
      c(w);
    }, W(q, 21, r, K, (z, A) => {
      var M = ie(), V = B(M);
      O(
        V,
        () => h(k)[h(A).name],
        (D) => {
          var L = Rl(), X = E(L);
          O(
            X,
            a,
            (Z) => {
              var Q = zl(), he = E(Q, !0);
              x(Q), N(() => {
                T(Q, "href", i() + h(k)[a()]), U(he, h(k)[h(A).name]);
              }), S(Z, Q);
            },
            (Z) => {
              var Q = Ol(), he = E(Q, !0);
              x(Q), N(() => U(he, h(k)[h(A).name])), S(Z, Q);
            }
          ), x(L), N(() => Pe(L, "column_sm", h(A).hideNarrow)), S(D, L);
        },
        (D) => {
          var L = Ul();
          S(D, L);
        }
      ), S(z, M);
    }), x(q), N(() => Pe(q, "table_row_selected", w === h(o))), S(_, q);
  }), x(p), x(y), x(d), et(f, () => h(u), (_) => J(u, _)), S(t, d), te();
}
re(["keyup", "click"]);
customElements.define("mv-elegant-table", Y(
  wn,
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
var jl = /* @__PURE__ */ I("<!> <!> <!> <!> <!>", 1);
const Dl = { hash: "svelte-32ttx", code: "" };
function Fl(t, e) {
  G(t, Dl);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), a = C(e, "headerMenus", 19, () => []), l = C(e, "searchtext", 7, ""), s = C(e, "categories", 19, () => []), u = C(e, "types", 19, () => []), o = C(e, "sortTypes", 3, ""), c = Ce("CARD"), d = P([
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
  var v = jl(), m = B(v);
  Nt(m, {
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
      return a();
    }
  });
  var f = $(m, 2);
  pn(f, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return i();
    },
    get searchtext() {
      return l();
    },
    set searchtext(p) {
      l(p);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  });
  var y = $(f, 2);
  xn(y, {
    get categories() {
      return s();
    },
    get categoryselect() {
      return e.categoryselect;
    }
  });
  var b = $(y, 2);
  gn(b, {
    get types() {
      return u();
    },
    get sortTypes() {
      return o();
    },
    get typeselect() {
      return e.typeselect;
    },
    get sortselect() {
      return e.sortselect;
    },
    get view() {
      return h(c);
    },
    set view(p) {
      J(c, P(p));
    }
  });
  var g = $(b, 2);
  O(
    g,
    () => h(c) === "CARD",
    (p) => {
      bn(p, {
        get items() {
          return e.items;
        }
      });
    },
    (p) => {
      wn(p, {
        get tableHeaders() {
          return d;
        },
        get tableRows() {
          return e.items;
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), S(t, v);
}
customElements.define("mv-elegant-buffet", Y(
  Fl,
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
    sortTypes: {},
    sortselect: {},
    items: {}
  },
  [],
  [],
  !0
));
var Bl = /* @__PURE__ */ I('<!> <div class="view_frame svelte-u4tv0q"></div>', 1);
const Pl = {
  hash: "svelte-u4tv0q",
  code: ".view_frame.svelte-u4tv0q {margin:auto;padding:24px 12px;max-width:700px;}"
};
function Vl(t, e) {
  G(t, Pl);
  let r = C(e, "title", 3, ""), n = C(e, "titleUrl", 3, "/"), i = C(e, "titleImageUrl", 3, ""), a = C(e, "headerMenus", 19, () => []), l = C(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(d) {
    let v = "";
    if (d.labelType && (v += `<${d.labelType}>${d.label}</${d.labelType}>`), d.type == "link_blank")
      v += `<a href="${d.link}" target="_blank">${d.value}</a>`;
    else if (d.type == "ul_link_blank") {
      let m = d.value.split(",");
      v += "<ul>";
      for (let f of m)
        v += `<li><a href="${f}" target="_blank">${f}</a></li>`;
      v += "</ul>";
    } else if (d.type == "ul") {
      let m = d.value.split(",");
      v += "<ul>";
      for (let f of m)
        v += `<li>${f}</li>`;
      v += "</ul>";
    } else
      v += `<${d.type}>${d.value}</${d.type}>`;
    return v;
  }
  var u = Bl(), o = B(u);
  Nt(o, {
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
      return a();
    }
  });
  var c = $(o, 2);
  W(c, 21, l, K, (d, v) => {
    var m = ie(), f = B(m);
    wi(f, () => s(h(v))), S(d, m);
  }), x(c), S(t, u);
}
customElements.define("mv-elegant-buffet-view", Y(
  Vl,
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
var Jl = /* @__PURE__ */ I('<div class="input_label"> </div>'), Gl = /* @__PURE__ */ I('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Yl = (t, e) => {
  e(t);
}, Kl = /* @__PURE__ */ I('<div><input type="checkbox" form=""> <label> </label></div>'), Wl = /* @__PURE__ */ I('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Zl = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function yn(t, e) {
  ee(e, !0), G(t, Zl);
  let r = C(e, "inputId", 7, ""), n = C(e, "label", 3, ""), i = C(e, "icon", 3, "");
  C(e, "placeholder", 3, "");
  let a = C(e, "items", 3, ""), l = C(e, "value", 15, ""), s = C(e, "selectStyle", 3, ""), u = C(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((p) => p.trim()), c = [];
  l() && (c = l().split(",").map((p) => p.trim()));
  let d = {};
  for (let p of o)
    c.includes(p) ? d[p] = !0 : d[p] = !1;
  const v = (p) => {
    if (p && p.target) {
      let _ = p.target.id, k = p.target.checked;
      if (k && !c.includes(_))
        c.push(_);
      else if (!k && c.includes(_)) {
        let w = c.indexOf(_);
        c.splice(w, 1);
      }
      l(c.join(",")), u() && u()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var m = Wl(), f = E(m);
  O(f, n, (p) => {
    var _ = Jl(), k = E(_, !0);
    x(_), N(() => U(k, n())), S(p, _);
  });
  var y = $(f, 2), b = E(y);
  O(b, i, (p) => {
    var _ = Gl(), k = E(_);
    x(_), N(() => T(k, "src", i())), S(p, _);
  });
  var g = $(b, 2);
  W(g, 21, () => o, K, (p, _) => {
    var k = Kl(), w = E(k);
    st(w), w.__change = [Yl, v];
    var q = $(w, 2), z = E(q, !0);
    x(q), x(k), N(() => {
      T(w, "id", h(_)), T(w, "name", h(_)), T(q, "for", h(_)), U(z, h(_));
    }), qi(w, () => d[h(_)], (A) => d[h(_)] = A), S(p, k);
  }), x(g), x(y), x(m), N(() => T(m, "style", s())), S(t, m), te();
}
re(["change"]);
customElements.define("ing-multi-select", Y(
  yn,
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
function Xl(t, e) {
  e("", "");
}
var Ql = /* @__PURE__ */ I('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-snc1cn" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-snc1cn"> </div>', 1), es = /* @__PURE__ */ I('<!> <form class="edit_frame svelte-snc1cn"></form>', 1);
const ts = {
  hash: "svelte-snc1cn",
  code: ".edit_frame.svelte-snc1cn {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-snc1cn::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-snc1cn {margin-bottom:12px;}"
};
function rs(t, e) {
  ee(e, !0), G(t, ts);
  let r = C(e, "formId", 7, ""), n = C(e, "title", 3, ""), i = C(e, "titleUrl", 3, "/"), a = C(e, "titleImageUrl", 3, ""), l = C(e, "headerMenus", 19, () => []), s = C(e, "items", 23, () => []), u;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  function o(m, f) {
    const y = new FormData(u);
    for (let b of s())
      y.set(b.id, b.value);
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: y
      }
    }));
  }
  var c = es(), d = B(c);
  Nt(d, {
    get title() {
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
  var v = $(d, 2);
  W(v, 21, s, K, (m, f) => {
    var y = ie(), b = B(y);
    O(
      b,
      () => h(f).type == "input" || h(f).type == "textarea",
      (g) => {
        $t(g, {
          get label() {
            return h(f).label;
          },
          get input() {
            return h(f).value;
          },
          set input(p) {
            h(f).value = p;
          },
          get type() {
            return h(f).type;
          },
          inputChanged: o
        });
      },
      (g) => {
        var p = ie(), _ = B(p);
        O(
          _,
          () => h(f).type == "select",
          (k) => {
            ar(k, {
              get label() {
                return h(f).label;
              },
              get items() {
                return h(f).options;
              },
              get value() {
                return h(f).value;
              },
              set value(w) {
                h(f).value = w;
              },
              inputChanged: o
            });
          },
          (k) => {
            var w = ie(), q = B(w);
            O(
              q,
              () => h(f).type == "multiselect",
              (z) => {
                yn(z, {
                  get label() {
                    return h(f).label;
                  },
                  get items() {
                    return h(f).options;
                  },
                  get value() {
                    return h(f).value;
                  },
                  set value(A) {
                    h(f).value = A;
                  },
                  inputChanged: o
                });
              },
              (z) => {
                var A = ie(), M = B(A);
                O(
                  M,
                  () => h(f).type == "file",
                  (V) => {
                    var D = Ql(), L = B(D), X = E(L), Z = E(X, !0);
                    x(X), x(L);
                    var Q = $(L, 2);
                    Q.__change = [Xl, o];
                    var he = $(Q, 2), we = E(he, !0);
                    x(he), N(() => {
                      T(X, "for", h(f).id), U(Z, h(f).label), T(Q, "id", h(f).id), T(Q, "name", h(f).label), U(we, h(f).value);
                    }), S(V, D);
                  },
                  null,
                  !0
                ), S(z, A);
              },
              !0
            ), S(k, w);
          },
          !0
        ), S(g, p);
      }
    ), S(m, y);
  }), x(v), nr(v, (m) => u = m, () => u), N(() => T(v, "id", r())), S(t, c), te();
}
re(["change"]);
customElements.define("mv-elegant-buffet-edit", Y(
  rs,
  {
    formId: {},
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
var ns = /* @__PURE__ */ I('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
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
  G(t, is);
  var r = ns();
  S(t, r);
}
customElements.define("mv-elegant-spinner", Y(as, {}, [], [], !0));
export {
  Fl as ElegantBuffet,
  rs as ElegantBuffetEdit,
  Vl as ElegantBuffetView,
  Nt as ElegantHeader,
  pn as ElegantHeroSearch,
  hn as ElegantSearch,
  as as ElegantSpinner,
  wn as ElegantTable,
  wa as IngBuffet,
  Mi as IngButton,
  Di as IngButtonGray,
  Ta as IngForm,
  fn as IngHeaderLite,
  $t as IngInput,
  ar as IngSelect,
  Ma as IngTable
};
