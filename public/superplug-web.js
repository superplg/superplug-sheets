var En = Object.defineProperty;
var dr = (t) => {
  throw TypeError(t);
};
var Sn = (t, e, r) => e in t ? En(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var _e = (t, e, r) => Sn(t, typeof e != "symbol" ? e + "" : e, r), ur = (t, e, r) => e.has(t) || dr("Cannot " + r);
var le = (t, e, r) => (ur(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $t = (t, e, r) => e.has(t) ? dr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Ot = (t, e, r, n) => (ur(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const qn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(qn);
const Jt = 1, Yt = 2, yr = 4, Cn = 8, In = 16, Tn = 1, Nn = 4, An = 8, zn = 16, $n = 4, On = 1, Mn = 2, kr = "[", Wt = "[!", Kt = "]", De = {}, de = Symbol(), Er = !1;
function kt(t) {
  console.warn("hydration_mismatch");
}
var Zt = Array.isArray, Xt = Array.from, ht = Object.keys, _t = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Hn = Object.getOwnPropertyDescriptors, Rn = Object.prototype, Un = Array.prototype, Ht = Object.getPrototypeOf;
function jn(t) {
  return typeof t == "function";
}
const We = () => {
};
function Sr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const qe = 2, qr = 4, Et = 8, St = 16, we = 32, rt = 64, Je = 128, mt = 256, ce = 512, $e = 1024, nt = 2048, me = 4096, it = 8192, Cr = 16384, qt = 32768, Dn = 1 << 18, Ir = 1 << 19, Le = Symbol("$state"), Ln = Symbol("");
function Tr(t) {
  return t === this.v;
}
function Bn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nr(t) {
  return !Bn(t, this.v);
}
function Fn() {
  throw new Error("effect_update_depth_exceeded");
}
function Vn() {
  throw new Error("hydration_failed");
}
function Pn(t) {
  throw new Error("props_invalid_value");
}
function Gn() {
  throw new Error("state_descriptors_fixed");
}
function Jn() {
  throw new Error("state_prototype_fixed");
}
function Yn() {
  throw new Error("state_unsafe_local_read");
}
function Wn() {
  throw new Error("state_unsafe_mutation");
}
let Ar = !1;
function fe(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Tr,
    version: 0
  };
}
function Se(t) {
  return /* @__PURE__ */ Kn(fe(t));
}
// @__NO_SIDE_EFFECTS__
function Qt(t, e = !1) {
  const r = fe(t);
  return e || (r.equals = Nr), r;
}
// @__NO_SIDE_EFFECTS__
function Kn(t) {
  return Y !== null && Y.f & qe && (be === null ? ni([t]) : be.push(t)), t;
}
function Z(t, e) {
  return Y !== null && ai() && Y.f & (qe | St) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (be === null || !be.includes(t)) && Wn(), Rt(t, e);
}
function Rt(t, e) {
  return t.equals(e) || (t.v = e, t.version = Jr(), zr(t, $e), U !== null && U.f & ce && !(U.f & we) && (ie !== null && ie.includes(t) ? (Ie(U, $e), At(U)) : Ae === null ? ii([t]) : Ae.push(t))), e;
}
function zr(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & $e || (Ie(a, e), l & (ce | Je) && (l & qe ? zr(
        /** @type {Derived} */
        a,
        nt
      ) : At(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Xe(t) {
  var e = qe | $e;
  U === null ? e |= Je : U.f |= Ir;
  const r = {
    children: null,
    ctx: xe,
    deps: null,
    equals: Tr,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: U
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
function $r(t) {
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
function Or(t) {
  var e, r = U;
  se(t.parent);
  try {
    $r(t), e = Yr(t);
  } finally {
    se(r);
  }
  return e;
}
function Mr(t) {
  var e = Or(t), r = (je || t.f & Je) && t.deps !== null ? nt : ce;
  Ie(t, r), t.equals(e) || (t.v = e, t.version = Jr());
}
function er(t) {
  $r(t), et(t, 0), Ie(t, it), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Zn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function at(t, e, r, n = !0) {
  var i = (t & rt) !== 0, a = U, l = {
    ctx: xe,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | $e,
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
    var s = Be;
    try {
      cr(!0), Nt(l), l.f |= Cr;
    } catch (f) {
      throw Oe(l), f;
    } finally {
      cr(s);
    }
  } else e !== null && At(l);
  var d = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Ir) === 0;
  if (!d && !i && n && (a !== null && Zn(l, a), Y !== null && Y.f & qe)) {
    var o = (
      /** @type {Derived} */
      Y
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Hr(t) {
  const e = at(rt, t, !0);
  return () => {
    Oe(e);
  };
}
function lt(t) {
  return at(qr, t, !1);
}
function Ct(t) {
  return at(Et, t, !0);
}
function N(t) {
  return It(t);
}
function It(t, e = 0) {
  return at(Et | St | e, t, !0);
}
function Pe(t, e = !0) {
  return at(Et | we, t, !0, e);
}
function Rr(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = Y;
    ge(null);
    try {
      e.call(null);
    } finally {
      ge(r);
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
function jr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Oe(r, e), r = n;
  }
}
function Xn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & we || Oe(e), e = r;
  }
}
function Oe(t, e = !0) {
  var r = !1;
  if ((e || t.f & Dn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ye(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  jr(t, e && !r), Ur(t), et(t, 0), Ie(t, it);
  var l = t.transitions;
  if (l !== null)
    for (const d of l)
      d.stop();
  Rr(t);
  var s = t.parent;
  s !== null && s.first !== null && Dr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Dr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Ut(t, e) {
  var r = [];
  tr(t, r, !0), Lr(r, () => {
    Oe(t), e && e();
  });
}
function Lr(t, e) {
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
      var i = n.next, a = (n.f & qt) !== 0 || (n.f & we) !== 0;
      tr(n, e, a ? r : !1), n = i;
    }
  }
}
function bt(t) {
  Br(t, !0);
}
function Br(t, e) {
  if (t.f & me) {
    st(t) && Nt(t), t.f ^= me;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & qt) !== 0 || (r.f & we) !== 0;
      Br(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const Qn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let xt = !1, wt = !1, jt = [], Dt = [];
function Fr() {
  xt = !1;
  const t = jt.slice();
  jt = [], Sr(t);
}
function Vr() {
  wt = !1;
  const t = Dt.slice();
  Dt = [], Sr(t);
}
function Tt(t) {
  xt || (xt = !0, queueMicrotask(Fr)), jt.push(t);
}
function ei(t) {
  wt || (wt = !0, Qn(Vr)), Dt.push(t);
}
function ti() {
  xt && Fr(), wt && Vr();
}
const Pr = 0, ri = 1;
let pt = Pr, Qe = !1, Be = !1;
function cr(t) {
  Be = t;
}
let Me = [], Fe = 0;
let Y = null;
function ge(t) {
  Y = t;
}
let U = null;
function se(t) {
  U = t;
}
let be = null;
function ni(t) {
  be = t;
}
let ie = null, ue = 0, Ae = null;
function ii(t) {
  Ae = t;
}
let Gr = 0, je = !1, xe = null;
function Jr() {
  return ++Gr;
}
function ai() {
  return !Ar;
}
function st(t) {
  var l, s;
  var e = t.f;
  if (e & $e)
    return !0;
  if (e & nt) {
    var r = t.deps, n = (e & Je) !== 0;
    if (r !== null) {
      var i;
      if (e & mt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= mt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (st(
          /** @type {Derived} */
          a
        ) && Mr(
          /** @type {Derived} */
          a
        ), n && U !== null && !je && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
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
function Yr(t) {
  var v;
  var e = ie, r = ue, n = Ae, i = Y, a = je, l = be, s = xe, d = t.f;
  ie = /** @type {null | Value[]} */
  null, ue = 0, Ae = null, Y = d & (we | rt) ? null : t, je = !Be && (d & Je) !== 0, be = null, xe = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), f = t.deps;
    if (ie !== null) {
      var u;
      if (et(t, ue), f !== null && ue > 0)
        for (f.length = ue + ie.length, u = 0; u < ie.length; u++)
          f[ue + u] = ie[u];
      else
        t.deps = f = ie;
      if (!je)
        for (u = ue; u < f.length; u++)
          ((v = f[u]).reactions ?? (v.reactions = [])).push(t);
    } else f !== null && ue < f.length && (et(t, ue), f.length = ue);
    return o;
  } finally {
    ie = e, ue = r, Ae = n, Y = i, je = a, be = l, xe = s;
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
  (ie === null || !ie.includes(e)) && (Ie(e, nt), e.f & (Je | mt) || (e.f ^= mt), et(
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
function Nt(t) {
  var e = t.f;
  if (!(e & it)) {
    Ie(t, ce);
    var r = U;
    U = t;
    try {
      e & St ? Xn(t) : jr(t), Ur(t), Rr(t);
      var n = Yr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Gr;
    } catch (i) {
      li(
        /** @type {Error} */
        i
      );
    } finally {
      U = r;
    }
  }
}
function Wr() {
  Fe > 1e3 && (Fe = 0, Fn()), Fe++;
}
function Kr(t) {
  var e = t.length;
  if (e !== 0) {
    Wr();
    var r = Be;
    Be = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & ce || (i.f ^= ce);
        var a = [];
        Zr(i, a), oi(a);
      }
    } finally {
      Be = r;
    }
  }
}
function oi(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (it | me)) && st(n) && (Nt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Dr(n) : n.fn = null));
    }
}
function di() {
  if (Qe = !1, Fe > 1001)
    return;
  const t = Me;
  Me = [], Kr(t), Qe || (Fe = 0);
}
function At(t) {
  pt === Pr && (Qe || (Qe = !0, queueMicrotask(di)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (rt | we)) {
      if (!(r & ce)) return;
      e.f ^= ce;
    }
  }
  Me.push(e);
}
function Zr(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & we) !== 0, l = a && (i & ce) !== 0;
    if (!l && !(i & me))
      if (i & Et) {
        a ? r.f ^= ce : st(r) && Nt(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & qr && n.push(r);
    var d = r.next;
    if (d === null) {
      let u = r.parent;
      for (; u !== null; ) {
        if (t === u)
          break e;
        var o = u.next;
        if (o !== null) {
          r = o;
          continue e;
        }
        u = u.parent;
      }
    }
    r = d;
  }
  for (var f = 0; f < n.length; f++)
    s = n[f], e.push(s), Zr(s, e);
}
function Xr(t) {
  var e = pt, r = Me;
  try {
    Wr();
    const i = [];
    pt = ri, Me = i, Qe = !1, Kr(r);
    var n = t == null ? void 0 : t();
    return ti(), (Me.length > 0 || i.length > 0) && Xr(), Fe = 0, n;
  } finally {
    pt = e, Me = r;
  }
}
function p(t) {
  var s;
  var e = t.f, r = (e & qe) !== 0;
  if (r && e & it) {
    var n = Or(
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
    ie === null && i !== null && i[ue] === t ? ue++ : ie === null ? ie = [t] : ie.push(t), Ae !== null && U !== null && U.f & ce && !(U.f & we) && Ae.includes(t) && (Ie(U, $e), At(U));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, st(a) && Mr(a)), t.v;
}
function yt(t) {
  const e = Y;
  try {
    return Y = null, t();
  } finally {
    Y = e;
  }
}
const ui = ~($e | nt | ce);
function Ie(t, e) {
  t.f = t.f & ui | e;
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
      var r = U, n = Y;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          se(a.effect), ge(a.reaction), lt(a.fn);
        }
      } finally {
        se(r), ge(n);
      }
    }
    xe = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || Le in t)
    return t;
  const n = Ht(t);
  if (n !== Rn && n !== Un)
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
      defineProperty(d, o, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Gn();
        var u = i.get(o);
        return u === void 0 ? (u = fe(f.value), i.set(o, u)) : Z(u, G(f.value, s)), !0;
      },
      deleteProperty(d, o) {
        var f = i.get(o);
        if (f === void 0)
          o in d && i.set(o, fe(de));
        else {
          if (a && typeof o == "string") {
            var u = (
              /** @type {Source<number>} */
              i.get("length")
            ), v = Number(o);
            Number.isInteger(v) && v < u.v && Z(u, v);
          }
          Z(f, de), vr(l);
        }
        return !0;
      },
      get(d, o, f) {
        var c;
        if (o === Le)
          return t;
        var u = i.get(o), v = o in d;
        if (u === void 0 && (!v || (c = He(d, o)) != null && c.writable) && (u = fe(G(v ? d[o] : de, s)), i.set(o, u)), u !== void 0) {
          var m = p(u);
          return m === de ? void 0 : m;
        }
        return Reflect.get(d, o, f);
      },
      getOwnPropertyDescriptor(d, o) {
        var f = Reflect.getOwnPropertyDescriptor(d, o);
        if (f && "value" in f) {
          var u = i.get(o);
          u && (f.value = p(u));
        } else if (f === void 0) {
          var v = i.get(o), m = v == null ? void 0 : v.v;
          if (v !== void 0 && m !== de)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return f;
      },
      has(d, o) {
        var m;
        if (o === Le)
          return !0;
        var f = i.get(o), u = f !== void 0 && f.v !== de || Reflect.has(d, o);
        if (f !== void 0 || U !== null && (!u || (m = He(d, o)) != null && m.writable)) {
          f === void 0 && (f = fe(u ? G(d[o], s) : de), i.set(o, f));
          var v = p(f);
          if (v === de)
            return !1;
        }
        return u;
      },
      set(d, o, f, u) {
        var h;
        var v = i.get(o), m = o in d;
        if (a && o === "length")
          for (var c = f; c < /** @type {Source<number>} */
          v.v; c += 1) {
            var g = i.get(c + "");
            g !== void 0 ? Z(g, de) : c in d && (g = fe(de), i.set(c + "", g));
          }
        v === void 0 ? (!m || (h = He(d, o)) != null && h.writable) && (v = fe(void 0), Z(v, G(f, s)), i.set(o, v)) : (m = v.v !== de, Z(v, G(f, s)));
        var y = Reflect.getOwnPropertyDescriptor(d, o);
        if (y != null && y.set && y.set.call(u, f), !m) {
          if (a && typeof o == "string") {
            var _ = (
              /** @type {Source<number>} */
              i.get("length")
            ), b = Number(o);
            Number.isInteger(b) && b >= _.v && Z(_, b + 1);
          }
          vr(l);
        }
        return !0;
      },
      ownKeys(d) {
        p(l);
        var o = Reflect.ownKeys(d).filter((v) => {
          var m = i.get(v);
          return m === void 0 || m.v !== de;
        });
        for (var [f, u] of i)
          u.v !== de && !(f in d) && o.push(f);
        return o;
      },
      setPrototypeOf() {
        Jn();
      }
    }
  );
}
function vr(t, e = 1) {
  Z(t, t.v + e);
}
function fr(t) {
  return t !== null && typeof t == "object" && Le in t ? t[Le] : t;
}
function ci(t, e) {
  return Object.is(fr(t), fr(e));
}
var pr, Qr, en;
function Lt() {
  if (pr === void 0) {
    pr = window;
    var t = Element.prototype, e = Node.prototype;
    Qr = He(e, "firstChild").get, en = He(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Ge(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ce(t) {
  return Qr.call(t);
}
// @__NO_SIDE_EFFECTS__
function ye(t) {
  return en.call(t);
}
function S(t, e) {
  if (!L)
    return /* @__PURE__ */ Ce(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(F)
  );
  if (r === null)
    r = F.appendChild(Ge());
  else if (e && r.nodeType !== 3) {
    var n = Ge();
    return r == null || r.before(n), pe(n), n;
  }
  return pe(r), r;
}
function P(t, e) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ce(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ye(r) : r;
  }
  return F;
}
function T(t, e = 1, r = !1) {
  let n = L ? F : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ye(n);
  if (!L)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Ge();
    return n == null || n.before(a), pe(a), a;
  }
  return pe(n), /** @type {TemplateNode} */
  n;
}
function rr(t) {
  t.textContent = "";
}
let L = !1;
function Ee(t) {
  L = t;
}
let F;
function pe(t) {
  if (t === null)
    throw kt(), De;
  return F = t;
}
function Re() {
  return pe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ye(F)
  );
}
function w(t) {
  if (L) {
    if (/* @__PURE__ */ ye(F) !== null)
      throw kt(), De;
    F = t;
  }
}
function nr(t = 1) {
  if (L) {
    for (var e = t, r = F; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(r);
    F = r;
  }
}
function Bt() {
  for (var t = 0, e = F; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Kt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === kr || r === Wt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ye(e)
    );
    e.remove(), e = n;
  }
}
function vi(t) {
  L && /* @__PURE__ */ Ce(t) !== null && rr(t);
}
let gr = !1;
function tn() {
  gr || (gr = !0, document.addEventListener(
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
  var e = Y, r = U;
  ge(null), se(null);
  try {
    return t();
  } finally {
    ge(e), se(r);
  }
}
function ir(t, e, r, n = r) {
  t.addEventListener(e, () => fi(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, tn();
}
const rn = /* @__PURE__ */ new Set(), Ft = /* @__PURE__ */ new Set();
function re(t) {
  for (var e = 0; e < t.length; e++)
    rn.add(t[e]);
  for (var r of Ft)
    r(t);
}
function ct(t) {
  var b;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  ), l = 0, s = t.__root;
  if (s) {
    var d = i.indexOf(s);
    if (d !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    d <= o && (l = d);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    _t(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var f = Y, u = U;
    ge(null), se(null);
    try {
      for (var v, m = []; a !== null; ) {
        var c = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var g = a["__" + n];
          if (g !== void 0 && !/** @type {any} */
          a.disabled)
            if (Zt(g)) {
              var [y, ..._] = g;
              y.apply(a, [t, ..._]);
            } else
              g.call(a, t);
        } catch (h) {
          v ? m.push(h) : v = h;
        }
        if (t.cancelBubble || c === e || c === null)
          break;
        a = c;
      }
      if (v) {
        for (let h of m)
          queueMicrotask(() => {
            throw h;
          });
        throw v;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ge(f), se(u);
    }
  }
}
function nn(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function ze(t, e) {
  var r = (
    /** @type {Effect} */
    U
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function C(t, e) {
  var r = (e & On) !== 0, n = (e & Mn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (L)
      return ze(F, null), F;
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
      ), d = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      ze(s, d);
    } else
      ze(l, l);
    return l;
  };
}
function ae() {
  if (L)
    return ze(F, null), F;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Ge();
  return t.append(e, r), ze(e, r), t;
}
function q(t, e) {
  if (L) {
    U.nodes_end = F, Re();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const pi = ["touchstart", "touchmove"];
function gi(t) {
  return pi.includes(t);
}
let Vt = !0;
function j(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function an(t, e) {
  return ln(t, e);
}
function hi(t, e) {
  Lt(), e.intro = e.intro ?? !1;
  const r = e.target, n = L, i = F;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== kr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ye(a);
    if (!a)
      throw De;
    Ee(!0), pe(
      /** @type {Comment} */
      a
    ), Re();
    const l = ln(t, { ...e, anchor: a });
    if (F === null || F.nodeType !== 8 || /** @type {Comment} */
    F.data !== Kt)
      throw kt(), De;
    return Ee(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === De)
      return e.recover === !1 && Vn(), Lt(), rr(r), Ee(!1), an(t, e);
    throw l;
  } finally {
    Ee(n), pe(i);
  }
}
const Ue = /* @__PURE__ */ new Map();
function ln(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Lt();
  var s = /* @__PURE__ */ new Set(), d = (u) => {
    for (var v = 0; v < u.length; v++) {
      var m = u[v];
      if (!s.has(m)) {
        s.add(m);
        var c = gi(m);
        e.addEventListener(m, ct, { passive: c });
        var g = Ue.get(m);
        g === void 0 ? (document.addEventListener(m, ct, { passive: c }), Ue.set(m, 1)) : Ue.set(m, g + 1);
      }
    }
  };
  d(Xt(rn)), Ft.add(d);
  var o = void 0, f = Hr(() => {
    var u = r ?? e.appendChild(Ge());
    return Pe(() => {
      if (a) {
        ee({});
        var v = (
          /** @type {ComponentContext} */
          xe
        );
        v.c = a;
      }
      i && (n.$$events = i), L && ze(
        /** @type {TemplateNode} */
        u,
        null
      ), Vt = l, o = t(u, n) || {}, Vt = !0, L && (U.nodes_end = F), a && te();
    }), () => {
      var c;
      for (var v of s) {
        e.removeEventListener(v, ct);
        var m = (
          /** @type {number} */
          Ue.get(v)
        );
        --m === 0 ? (document.removeEventListener(v, ct), Ue.delete(v)) : Ue.set(v, m);
      }
      Ft.delete(d), Pt.delete(o), u !== r && ((c = u.parentNode) == null || c.removeChild(u));
    };
  });
  return Pt.set(o, f), o;
}
let Pt = /* @__PURE__ */ new WeakMap();
function _i(t) {
  const e = Pt.get(t);
  e && e();
}
function O(t, e, r, n = null, i = !1) {
  L && Re();
  var a = t, l = null, s = null, d = null, o = i ? qt : 0;
  It(() => {
    if (d === (d = !!e())) return;
    let f = !1;
    if (L) {
      const u = (
        /** @type {Comment} */
        a.data === Wt
      );
      d === u && (a = Bt(), pe(a), Ee(!1), f = !0);
    }
    d ? (l ? bt(l) : l = Pe(() => r(a)), s && Ut(s, () => {
      s = null;
    })) : (s ? bt(s) : n && (s = Pe(() => n(a))), l && Ut(l, () => {
      l = null;
    })), f && Ee(!0);
  }, o), L && (a = F);
}
function X(t, e) {
  return e;
}
function mi(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    tr(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    rr(d), d.append(
      /** @type {Element} */
      r
    ), n.clear(), Te(t, e[0].prev, e[a - 1].next);
  }
  Lr(i, () => {
    for (var o = 0; o < a; o++) {
      var f = e[o];
      s || (n.delete(f.k), Te(t, f.prev, f.next)), Oe(f.e, !s);
    }
  });
}
function Q(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, d = (e & yr) !== 0;
  if (d) {
    var o = (
      /** @type {Element} */
      t
    );
    l = L ? pe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ce(o)
    ) : o.appendChild(Ge());
  }
  L && Re();
  var f = null, u = !1;
  It(() => {
    var v = r(), m = Zt(v) ? v : v == null ? [] : Xt(v), c = m.length;
    if (u && c === 0)
      return;
    u = c === 0;
    let g = !1;
    if (L) {
      var y = (
        /** @type {Comment} */
        l.data === Wt
      );
      y !== (c === 0) && (l = Bt(), pe(l), Ee(!1), g = !0);
    }
    if (L) {
      for (var _ = null, b, h = 0; h < c; h++) {
        if (F.nodeType === 8 && /** @type {Comment} */
        F.data === Kt) {
          l = /** @type {Comment} */
          F, g = !0, Ee(!1);
          break;
        }
        var k = m[h], x = n(k, h);
        b = sn(F, s, _, null, k, x, h, i, e), s.items.set(x, b), _ = b;
      }
      c > 0 && pe(Bt());
    }
    if (!L) {
      var I = (
        /** @type {Effect} */
        Y
      );
      bi(m, s, l, i, e, (I.f & me) !== 0, n);
    }
    a !== null && (c === 0 ? f ? bt(f) : f = Pe(() => a(l)) : f !== null && Ut(f, () => {
      f = null;
    })), g && Ee(!0), r();
  }), L && (l = F);
}
function bi(t, e, r, n, i, a, l) {
  var H, V, ne, oe;
  var s = (i & Cn) !== 0, d = (i & (Jt | Yt)) !== 0, o = t.length, f = e.items, u = e.first, v = u, m, c = null, g, y = [], _ = [], b, h, k, x;
  if (s)
    for (x = 0; x < o; x += 1)
      b = t[x], h = l(b, x), k = f.get(h), k !== void 0 && ((H = k.a) == null || H.measure(), (g ?? (g = /* @__PURE__ */ new Set())).add(k));
  for (x = 0; x < o; x += 1) {
    if (b = t[x], h = l(b, x), k = f.get(h), k === void 0) {
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
        h,
        x,
        n,
        i
      ), f.set(h, c), y = [], _ = [], v = c.next;
      continue;
    }
    if (d && xi(k, b, x, i), k.e.f & me && (bt(k.e), s && ((V = k.a) == null || V.unfix(), (g ?? (g = /* @__PURE__ */ new Set())).delete(k))), k !== v) {
      if (m !== void 0 && m.has(k)) {
        if (y.length < _.length) {
          var M = _[0], $;
          c = M.prev;
          var R = y[0], J = y[y.length - 1];
          for ($ = 0; $ < y.length; $ += 1)
            hr(y[$], M, r);
          for ($ = 0; $ < _.length; $ += 1)
            m.delete(_[$]);
          Te(e, R.prev, J.next), Te(e, c, R), Te(e, J, M), v = M, c = J, x -= 1, y = [], _ = [];
        } else
          m.delete(k), hr(k, v, r), Te(e, k.prev, k.next), Te(e, k, c === null ? e.first : c.next), Te(e, c, k), c = k;
        continue;
      }
      for (y = [], _ = []; v !== null && v.k !== h; )
        (a || !(v.e.f & me)) && (m ?? (m = /* @__PURE__ */ new Set())).add(v), _.push(v), v = v.next;
      if (v === null)
        continue;
      k = v;
    }
    y.push(k), c = k, v = k.next;
  }
  if (v !== null || m !== void 0) {
    for (var B = m === void 0 ? [] : Xt(m); v !== null; )
      (a || !(v.e.f & me)) && B.push(v), v = v.next;
    var D = B.length;
    if (D > 0) {
      var z = i & yr && o === 0 ? r : null;
      if (s) {
        for (x = 0; x < D; x += 1)
          (ne = B[x].a) == null || ne.measure();
        for (x = 0; x < D; x += 1)
          (oe = B[x].a) == null || oe.fix();
      }
      mi(e, B, z, f);
    }
  }
  s && Tt(() => {
    var he;
    if (g !== void 0)
      for (k of g)
        (he = k.a) == null || he.apply();
  }), U.first = e.first && e.first.e, U.last = c && c.e;
}
function xi(t, e, r, n) {
  n & Jt && Rt(t.v, e), n & Yt ? Rt(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function sn(t, e, r, n, i, a, l, s, d) {
  var o = (d & Jt) !== 0, f = (d & In) === 0, u = o ? f ? /* @__PURE__ */ Qt(i) : fe(i) : i, v = d & Yt ? fe(l) : l, m = {
    i: v,
    v: u,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return m.e = Pe(() => s(t, u, v), L), m.e.prev = r && r.e, m.e.next = n && n.e, r === null ? e.first = m : (r.next = m, r.e.next = m.e), n !== null && (n.prev = m, n.e.prev = m.e), m;
  } finally {
  }
}
function hr(t, e, r) {
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
      /* @__PURE__ */ ye(a)
    );
    i.before(a), a = l;
  }
}
function Te(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function wi(t, e, r, n, i) {
  var a = t, l = "", s;
  It(() => {
    if (l === (l = e() ?? "")) {
      L && Re();
      return;
    }
    s !== void 0 && (Oe(s), s = void 0), l !== "" && (s = Pe(() => {
      if (L) {
        F.data;
        for (var d = Re(), o = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          o = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ ye(d);
        if (d === null)
          throw kt(), De;
        ze(F, o), a = pe(d);
        return;
      }
      var f = l + "", u = nn(f);
      ze(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(u),
        /** @type {TemplateNode} */
        u.lastChild
      ), a.before(u);
    }));
  });
}
function ar(t, e, r, n, i) {
  var s;
  L && Re();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function W(t, e) {
  Tt(() => {
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
  if (L) {
    var e = !1, r = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var n = t.value;
          A(t, "value", null), t.value = n;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          A(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = r, ei(r), tn();
  }
}
function A(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  L && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Ln] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && on(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Mt(t, e, r) {
  var n = Y, i = U;
  ge(null), se(null);
  try {
    on(t).includes(e) ? t[e] = r : A(t, e, r);
  } finally {
    ge(n), se(i);
  }
}
var _r = /* @__PURE__ */ new Map();
function on(t) {
  var e = _r.get(t.nodeName);
  if (e) return e;
  _r.set(t.nodeName, e = []);
  for (var r, n = Ht(t), i = Element.prototype; i !== n; ) {
    r = Hn(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = Ht(n);
  }
  return e;
}
function Ke(t, e) {
  var r = t.__className, n = yi(e);
  L && t.className === n ? t.__className = n : (r !== n || L && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function yi(t) {
  return t ?? "";
}
function Ve(t, e, r) {
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
function dn(t) {
  Ne.tasks.forEach((e) => {
    e.c(t) || (Ne.tasks.delete(e), e.f());
  }), Ne.tasks.size !== 0 && Ne.tick(dn);
}
function Ei(t) {
  let e;
  return Ne.tasks.size === 0 && Ne.tick(dn), {
    promise: new Promise((r) => {
      Ne.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Ne.tasks.delete(e);
    }
  };
}
function vt(t, e) {
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
function mr(t) {
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
  var i = (t & $n) !== 0, a = "both", l, s = e.inert, d, o;
  function f() {
    var g = Y, y = U;
    ge(null), se(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ge(g), se(y);
    }
  }
  var u = {
    is_global: i,
    in() {
      e.inert = s, vt(e, "introstart"), d = Gt(e, f(), o, 1, () => {
        vt(e, "introend"), d == null || d.abort(), d = l = void 0;
      });
    },
    out(g) {
      e.inert = !0, vt(e, "outrostart"), o = Gt(e, f(), d, 0, () => {
        vt(e, "outroend"), g == null || g();
      });
    },
    stop: () => {
      d == null || d.abort(), o == null || o.abort();
    }
  }, v = (
    /** @type {Effect} */
    U
  );
  if ((v.transitions ?? (v.transitions = [])).push(u), Vt) {
    var m = i;
    if (!m) {
      for (var c = (
        /** @type {Effect | null} */
        v.parent
      ); c && c.f & qt; )
        for (; (c = c.parent) && !(c.f & St); )
          ;
      m = !c || (c.f & Cr) !== 0;
    }
    m && lt(() => {
      yt(() => u.in());
    });
  }
}
function Gt(t, e, r, n, i) {
  var a = n === 1;
  if (jn(e)) {
    var l, s = !1;
    return Tt(() => {
      if (!s) {
        var y = e({ direction: a ? "in" : "out" });
        l = Gt(t, y, r, n, i);
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
  const { delay: d = 0, css: o, tick: f, easing: u = qi } = e;
  var v = [];
  if (a && r === void 0 && (f && f(0, 1), o)) {
    var m = mr(o(0, 1));
    v.push(m, m);
  }
  var c = () => 1 - n, g = t.animate(v, { duration: d });
  return g.onfinish = () => {
    var y = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var _ = n - y, b = (
      /** @type {number} */
      e.duration * Math.abs(_)
    ), h = [];
    if (b > 0) {
      if (o)
        for (var k = Math.ceil(b / 16.666666666666668), x = 0; x <= k; x += 1) {
          var I = y + _ * u(x / k), M = o(I, 1 - I);
          h.push(mr(M));
        }
      c = () => {
        var $ = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          g.currentTime
        );
        return y + _ * u($ / b);
      }, f && Ei(() => {
        if (g.playState !== "running") return !1;
        var $ = c();
        return f($, 1 - $), !0;
      });
    }
    g = t.animate(h, { duration: b, fill: "forwards" }), g.onfinish = () => {
      c = () => n, f == null || f(n, 1 - n), i();
    };
  }, {
    abort: () => {
      g && (g.cancel(), g.effect = null, g.onfinish = We);
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
  ir(t, "input", () => {
    var n = br(t) ? xr(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Ct(() => {
    var n = e();
    if (L && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    br(t) && n === xr(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function Ii(t, e, r = e) {
  ir(t, "change", () => {
    var n = t.checked;
    r(n);
  }), e() == null && r(!1), Ct(() => {
    var n = e();
    t.checked = !!n;
  });
}
function br(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function xr(t) {
  return t === "" ? null : +t;
}
function un(t, e, r) {
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
      un(t, n);
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
  ir(t, "change", () => {
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
    if (un(t, i, n), n && i === void 0) {
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
function wr(t, e) {
  return t === e || (t == null ? void 0 : t[Le]) === e;
}
function lr(t = {}, e, r, n) {
  return lt(() => {
    var i, a;
    return Ct(() => {
      i = a, a = (n == null ? void 0 : n()) || [], yt(() => {
        t !== r(...a) && (e(t, ...a), i && wr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      Tt(() => {
        a && wr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let ft = !1;
function Ai(t) {
  var e = ft;
  try {
    return ft = !1, [t(), ft];
  } finally {
    ft = e;
  }
}
function zi(t) {
  for (var e = U, r = U; e !== null && !(e.f & (we | rt)); )
    e = e.parent;
  try {
    return se(e), t();
  } finally {
    se(r);
  }
}
function E(t, e, r, n) {
  var x;
  var i = (r & Tn) !== 0, a = !Ar, l = (r & An) !== 0, s = (r & zn) !== 0, d = !1, o;
  l ? [o, d] = Ai(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var f = (x = He(t, e)) == null ? void 0 : x.set, u = (
    /** @type {V} */
    n
  ), v = !0, m = !1, c = () => (m = !0, v && (v = !1, s ? u = yt(
    /** @type {() => V} */
    n
  ) : u = /** @type {V} */
  n), u);
  o === void 0 && n !== void 0 && (f && a && Pn(), o = c(), f && f(o));
  var g;
  if (g = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? c() : (v = !0, m = !1, I);
  }, !(r & Nn))
    return g;
  if (f) {
    var y = t.$$legacy;
    return function(I, M) {
      return arguments.length > 0 ? ((!M || y || d) && f(M ? g() : I), I) : g();
    };
  }
  var _ = !1, b = !1, h = /* @__PURE__ */ Qt(o), k = zi(
    () => /* @__PURE__ */ Xe(() => {
      var I = g(), M = p(h);
      return _ ? (_ = !1, b = !0, M) : (b = !1, h.v = I);
    })
  );
  return i || (k.equals = Nr), function(I, M) {
    if (arguments.length > 0) {
      const $ = M ? p(k) : l ? G(I) : I;
      return k.equals($) || (_ = !0, Z(h, $), m && u !== void 0 && (u = $), yt(() => p(k))), I;
    }
    return p(k);
  };
}
function $i(t) {
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
    $t(this, ke);
    /** @type {Record<string, any>} */
    $t(this, ve);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var d = /* @__PURE__ */ Qt(s);
      return r.set(l, d), d;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, s) {
          return p(r.get(s) ?? n(s, Reflect.get(l, s)));
        },
        has(l, s) {
          return p(r.get(s) ?? n(s, Reflect.get(l, s))), Reflect.has(l, s);
        },
        set(l, s, d) {
          return Z(r.get(s) ?? n(s, d), d), Reflect.set(l, s, d);
        }
      }
    );
    Ot(this, ve, (e.hydrate ? hi : an)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Xr(), Ot(this, ke, i.$$events);
    for (const l of Object.keys(le(this, ve)))
      l === "$set" || l === "$destroy" || l === "$on" || _t(this, l, {
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
      const r = {}, n = Mi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = gt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = $i({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Hr(() => {
        Ct(() => {
          var i;
          this.$$r = !0;
          for (const a of ht(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = gt(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = gt(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return ht(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function gt(t, e, r, n) {
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
function Mi(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function K(t, e, r, n, i, a) {
  let l = class extends vn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ht(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return ht(e).forEach((s) => {
    _t(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(d) {
        var u;
        d = gt(s, d, e), this.$$d[s] = d;
        var o = this.$$c;
        if (o) {
          var f = (u = He(o, s)) == null ? void 0 : u.get;
          f ? o[s] = d : o.$set({ [s]: d });
        }
      }
    });
  }), n.forEach((s) => {
    _t(l.prototype, s, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var Hi = /* @__PURE__ */ C('<button type="button"><!></button>');
const Ri = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Ui(t, e) {
  W(t, Ri);
  const r = E(e, "type", 3, "primary"), n = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const i = E(e, "onClick", 3, void 0);
  var a = Hi();
  a.__click = function(...s) {
    var d;
    (d = i()) == null || d.apply(this, s);
  };
  var l = S(a);
  ar(l, e, "default", {}), w(a), N(() => Ke(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), q(t, a);
}
re(["click"]);
customElements.define("ing-button", K(Ui, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var ji = /* @__PURE__ */ C('<button type="button"><!></button>');
const Di = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Li(t, e) {
  W(t, Di), E(e, "type", 3, "primary");
  const r = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const n = E(e, "onClick", 3, void 0);
  var i = ji();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = S(i);
  ar(a, e, "default", {}), w(i), N(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), q(t, i);
}
re(["click"]);
customElements.define("ing-button-gray", K(Li, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Bi = /* @__PURE__ */ C('<div class="input_label svelte-1485t9m"> </div>'), Fi = /* @__PURE__ */ C('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Vi = (t, e) => {
  e(t);
}, Pi = /* @__PURE__ */ C('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Gi = (t, e) => {
  e(t);
}, Ji = /* @__PURE__ */ C('<input class="input_field svelte-1485t9m" form="">'), Yi = /* @__PURE__ */ C('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const Wi = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function zt(t, e) {
  ee(e, !0), W(t, Wi);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "type", 3, "text"), l = E(e, "placeholder", 3, ""), s = E(e, "input", 15, ""), d = E(e, "inputStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const f = (y) => {
    if (y && y.target) {
      let _ = "";
      y.target.value && (_ = y.target.value), o() && o()(r(), _), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: _ }
      }));
    }
  };
  var u = Yi(), v = S(u);
  O(v, n, (y) => {
    var _ = Bi(), b = S(_, !0);
    w(_), N(() => j(b, n())), q(y, _);
  });
  var m = T(v, 2), c = S(m);
  O(c, i, (y) => {
    var _ = Fi(), b = P(_), h = S(b);
    w(b), nr(), N(() => A(h, "src", i())), q(y, _);
  });
  var g = T(c, 2);
  O(
    g,
    () => a() == "textarea",
    (y) => {
      var _ = Pi();
      vi(_), _.__input = [Vi, f], N(() => {
        A(_, "id", r()), A(_, "name", r()), A(_, "placeholder", l());
      }), tt(_, s), q(y, _);
    },
    (y) => {
      var _ = Ji();
      ot(_), _.__input = [Gi, f], N(() => {
        A(_, "id", r()), A(_, "name", r()), A(_, "type", a()), A(_, "placeholder", l());
      }), tt(_, s), q(y, _);
    }
  ), w(m), w(u), N(() => A(u, "style", d())), q(t, u), te();
}
re(["input"]);
customElements.define("ing-input", K(
  zt,
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
var Ki = /* @__PURE__ */ C('<a class="svelte-hcumdc"> </a>'), Zi = (t, e, r) => e(p(r).title), Xi = /* @__PURE__ */ C('<button class="menu_item_button svelte-hcumdc"> </button>'), Qi = /* @__PURE__ */ C('<div class="menu_item svelte-hcumdc"><!></div>'), ea = /* @__PURE__ */ C('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const ta = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function sr(t, e) {
  ee(e, !0), W(t, ta);
  let r = E(e, "position", 19, () => ({})), n = E(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = ea(), l = T(S(a), 2);
  Q(l, 21, n, X, (s, d) => {
    var o = Qi(), f = S(o);
    O(
      f,
      () => p(d).url,
      (u) => {
        var v = Ki(), m = S(v, !0);
        w(v), N(() => {
          A(v, "href", p(d).url), j(m, p(d).title);
        }), q(u, v);
      },
      (u) => {
        var v = Xi();
        v.__click = [Zi, i, d];
        var m = S(v, !0);
        w(v), N(() => j(m, p(d).title)), q(u, v);
      }
    ), w(o), q(s, o);
  }), w(l), w(a), N(() => A(a, "style", `top: ${r().top}; left: ${r().left};`)), q(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-dropdown", K(sr, { position: {}, menuItems: {} }, [], [], !0));
var ra = /* @__PURE__ */ C('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), na = (t, e) => {
  Z(e, !p(e));
}, ia = /* @__PURE__ */ C('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), aa = /* @__PURE__ */ C("<span></span>"), la = /* @__PURE__ */ C('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const sa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function fn(t, e) {
  ee(e, !0), W(t, sa), E(e, "title", 3, "Apint.org");
  const r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !1), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, "");
  let s = "", d = Se(!1), o = Se(void 0);
  function f() {
    let _ = {}, b;
    if (p(o) && (b = p(o)), b) {
      var h = b.getBoundingClientRect();
      _.top = (h.top + h.height + 12).toString() + "px", _.left = (h.left - 115).toString() + "px", console.log(_);
    }
    return _;
  }
  var u = la(), v = S(u), m = S(v);
  zt(m, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var c = T(m, 2);
  c.textContent = s, w(v);
  var g = T(v, 2), y = S(g);
  O(
    y,
    i,
    (_) => {
      var b = ia(), h = P(b), k = S(h);
      O(k, n, (J) => {
        var B = ra(), D = P(B);
        nr(2), N(() => A(D, "src", n())), q(J, B);
      });
      var x = T(k, 2);
      x.__click = [na, d];
      var I = S(x), M = T(I, 2), $ = S(M, !0);
      w(M), w(x), lr(x, (J) => Z(o, J), () => p(o)), w(h);
      var R = T(h, 2);
      O(R, () => p(d), (J) => {
        var B = /* @__PURE__ */ Xe(f);
        sr(J, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return p(B);
          }
        });
      }), N(() => {
        A(I, "src", l()), j($, a());
      }), q(_, b);
    },
    (_) => {
      var b = ae(), h = P(b);
      O(
        h,
        i,
        (k) => {
          var x = aa();
          q(k, x);
        },
        null,
        !0
      ), q(_, b);
    }
  ), w(g), w(u), q(t, u), te();
}
re(["click"]);
customElements.define("ing-headerlite", K(
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
function da(t, { delay: e = 0, duration: r = 400, easing: n = oa, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", d = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], f = o.map(
    (_) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${_[0].toUpperCase()}${_.slice(1)}`
    )
  ), u = parseFloat(a[`padding${f[0]}`]), v = parseFloat(a[`padding${f[1]}`]), m = parseFloat(a[`margin${f[0]}`]), c = parseFloat(a[`margin${f[1]}`]), g = parseFloat(
    a[`border${f[0]}Width`]
  ), y = parseFloat(
    a[`border${f[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * l};${s}: ${_ * d}px;padding-${o[0]}: ${_ * u}px;padding-${o[1]}: ${_ * v}px;margin-${o[0]}: ${_ * m}px;margin-${o[1]}: ${_ * c}px;border-${o[0]}-width: ${_ * g}px;border-${o[1]}-width: ${_ * y}px;`
  };
}
function ua(t) {
  return t;
}
var ca = (t, e, r) => e(p(r).title), va = /* @__PURE__ */ C('<img alt="option" width="18px">'), fa = /* @__PURE__ */ C('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), pa = /* @__PURE__ */ C('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), ga = (t, e, r) => e(p(r).title), ha = /* @__PURE__ */ C('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), _a = /* @__PURE__ */ C('<div class="menu_item_frame svelte-v1mgvt"></div>'), ma = /* @__PURE__ */ C('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), ba = /* @__PURE__ */ C('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const xa = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function wa(t, e) {
  ee(e, !0), W(t, xa), E(e, "title", 3, "Mapp"), E(e, "icon", 3, "");
  let r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !0), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, ""), s = E(e, "activeitem", 3, ""), d = E(e, "menuconfig", 7, void 0);
  typeof d() == "string" && d(JSON.parse(d()));
  let o = G({});
  if (s()) {
    o[s()] = !0;
    for (let b of d().items)
      if (b.subitems) {
        for (let h of b.subitems)
          if (h.title == s()) {
            o[b.title] = !0;
            break;
          }
      }
  }
  let f = (b) => {
    let h = d().items.find((k) => k.title === b);
    o[b] ? h && (!h.url || h.url === "#") && (o[b] = !o[b]) : o[b] = !0;
  };
  var u = ba(), v = S(u), m = S(v);
  Q(m, 21, () => d().items, X, (b, h) => {
    var k = ma(), x = P(k);
    x.__click = [ca, f, h];
    var I = S(x), M = S(I), $ = S(M);
    O(
      $,
      () => p(h).icon,
      (z) => {
        var H = va();
        N(() => A(H, "src", p(h).icon)), q(z, H);
      },
      (z) => {
        var H = fa();
        q(z, H);
      }
    ), w(M);
    var R = T(M, 2), J = S(R, !0);
    w(R);
    var B = T(R, 2);
    O(B, () => p(h).subitems, (z) => {
      var H = pa();
      N(() => Ke(H, `${(o[p(h).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), q(z, H);
    }), w(I), w(x);
    var D = T(x, 2);
    O(D, () => o[p(h).title] && p(h).subitems, (z) => {
      var H = _a();
      Q(H, 21, () => p(h).subitems, X, (ne, oe) => {
        var he = ha();
        he.__click = [ga, f, oe];
        var ut = S(he), Ye = T(S(ut), 2), kn = S(Ye, !0);
        w(Ye), w(ut), w(he), N(() => {
          A(he, "href", p(oe).url), Ke(he, `${(p(oe).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), j(kn, p(oe).title);
        }), q(ne, he);
      }), w(H), Ci(3, H, () => da, () => ({ duration: 300, easing: ua })), q(z, H);
    }), N(() => {
      A(x, "href", p(h).url), Ke(x, `${(p(h).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), j(J, p(h).title);
    }), q(b, k);
  }), w(m), w(v);
  var c = T(v, 2), g = S(c);
  fn(g, {
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
  var y = T(g, 2), _ = S(y);
  ar(_, e, "default", {}), w(y), w(c), w(u), q(t, u), te();
}
re(["click"]);
customElements.define("ing-buffet", K(
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
var ya = /* @__PURE__ */ C('<div class="input_label svelte-18z4bwo"> </div>'), ka = /* @__PURE__ */ C('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Ea = (t, e) => {
  e(t);
}, Sa = /* @__PURE__ */ C("<option> </option>"), qa = /* @__PURE__ */ C('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const Ca = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function or(t, e) {
  ee(e, !0), W(t, Ca);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "placeholder", 3, ""), l = E(e, "items", 3, ""), s = E(e, "value", 15, ""), d = E(e, "selectStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let f = l().split(",");
  const u = (_) => {
    if (_ && _.target) {
      let b = "";
      _.target.value && (b = _.target.value), o() && o()(r(), b), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: b }
      }));
    }
  };
  var v = qa(), m = S(v);
  O(m, n, (_) => {
    var b = ya(), h = S(b, !0);
    w(b), N(() => j(h, n())), q(_, b);
  });
  var c = T(m, 2), g = S(c);
  O(g, i, (_) => {
    var b = ka(), h = S(b);
    w(b), N(() => A(h, "src", i())), q(_, b);
  });
  var y = T(g, 2);
  y.__input = [Ea, u], Q(y, 21, () => f, X, (_, b) => {
    var h = Sa(), k = {}, x = S(h, !0);
    w(h), N(() => {
      k !== (k = p(b)) && (h.value = (h.__value = p(b)) == null ? "" : p(b)), j(x, p(b));
    }), q(_, h);
  }), w(y), w(c), w(v), N(() => {
    A(v, "style", d()), A(y, "placeholder", a());
  }), cn(y, s), q(t, v), te();
}
re(["input"]);
customElements.define("ing-select", K(
  or,
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
function Aa(t, e) {
  ee(e, !0), W(t, Na);
  let r = E(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let d = {};
    for (const [o, f] of Object.entries(r().properties))
      d[o] = f.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: d } }));
  }
  var i = Ta(), a = S(i);
  O(a, r, (d) => {
    var o = ae(), f = P(o);
    Q(f, 17, () => Object.entries(r().properties), X, (u, v) => {
      let m = () => p(v)[0], c = () => p(v)[1];
      var g = ae(), y = P(g);
      O(
        y,
        () => c().format == "header",
        (_) => {
          var b = Ia(), h = S(b), k = S(h, !0);
          w(h), w(b), N(() => j(k, c().value)), q(_, b);
        },
        (_) => {
          var b = ae(), h = P(b);
          O(
            h,
            () => c().format == "select",
            (k) => {
              var x = /* @__PURE__ */ Xe(() => "width: " + c().length + ";");
              or(k, {
                get input() {
                  return c().value;
                },
                set input(I) {
                  c().value = I;
                },
                get selectStyle() {
                  return p(x);
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
              var x = ae(), I = P(x);
              O(
                I,
                () => c().type == "string",
                (M) => {
                  var $ = /* @__PURE__ */ Xe(() => "width: " + c().length + ";");
                  zt(M, {
                    get inputId() {
                      return m();
                    },
                    get inputStyle() {
                      return p($);
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
                    set input(R) {
                      c().value = R;
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
      ), q(u, g);
    }), q(d, o);
  });
  var l = T(a, 2), s = S(l);
  Mt(s, "size", "small"), Mt(s, "id", "submit-button"), Mt(s, "type", "secondary"), s.__click = n, w(l), w(i), q(t, i), te();
}
re(["click"]);
customElements.define("ing-form", K(Aa, { schema: {} }, [], [], !0));
function za(t, e, r, n, i, a) {
  if (p(e)) {
    let l = [];
    for (let s of r()) {
      let d = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && s[o].toString().toLowerCase().includes(p(e).toLowerCase())) {
          d = !0;
          break;
        }
      d && l.push(s);
    }
    Z(a, G(l));
  } else
    Z(a, G(r()));
}
var $a = /* @__PURE__ */ C('<th class="svelte-15ql2st"> </th>'), Oa = /* @__PURE__ */ C('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Ma = /* @__PURE__ */ C('<tr class="svelte-15ql2st"></tr>'), Ha = /* @__PURE__ */ C('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Ra = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function Ua(t, e) {
  ee(e, !0), W(t, Ra);
  let r = E(e, "headers", 23, () => []), n = E(e, "headerssearchable", 23, () => []), i = E(e, "rows", 23, () => []), a = E(e, "linkprefix", 3, ""), l = E(e, "linkcolumnname", 3, ""), s = E(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let d = Se(G(i())), o = Se("");
  const f = (h) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: h } })), s() && s()({ detail: { rowIndex: h } });
  };
  var u = Ha(), v = S(u), m = T(S(v), 2), c = T(S(m));
  ot(c), c.__keyup = [
    za,
    o,
    i,
    r,
    n,
    d
  ], w(m), w(v);
  var g = T(v, 2), y = S(g), _ = S(y);
  Q(_, 21, r, X, (h, k) => {
    var x = $a(), I = S(x, !0);
    w(x), N(() => j(I, p(k))), q(h, x);
  }), w(_), w(y);
  var b = T(y);
  Q(b, 21, () => p(d), X, (h, k, x) => {
    var I = Ma();
    I.__click = () => {
      f(x);
    }, Q(I, 21, () => Object.entries(p(k)), X, ($, R) => {
      var J = Oa(), B = S(J), D = S(B, !0);
      w(B), w(J), N(() => {
        A(B, "href", a() + p(k)[l()]), j(D, p(R)[1]);
      }), q($, J);
    }), w(I), q(h, I);
  }), w(b), w(g), w(u), tt(c, () => p(o), (h) => Z(o, h)), q(t, u), te();
}
re(["keyup", "click"]);
customElements.define("ing-table", K(
  Ua,
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
var ja = /* @__PURE__ */ C('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), Da = /* @__PURE__ */ C('<span class="title_text svelte-7cq7b1"> </span>'), La = /* @__PURE__ */ C('<a class="title svelte-7cq7b1"><!> <!></a>'), Ba = (t, e, r) => e(t, p(r)), Fa = /* @__PURE__ */ C('<img class="menu_icon svelte-7cq7b1">'), Va = /* @__PURE__ */ C('<span class="menu_top_button svelte-7cq7b1"> </span>'), Pa = /* @__PURE__ */ C('<button class="menu_button svelte-7cq7b1"><!></button> <!>', 1), Ga = /* @__PURE__ */ C('<div class="header svelte-7cq7b1"><!> <div class="right_menus svelte-7cq7b1"></div></div>');
const Ja = {
  hash: "svelte-7cq7b1",
  code: '.header.svelte-7cq7b1 {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-7cq7b1 {height:100%;display:flex;margin-left:12px;color:#111;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.title.svelte-7cq7b1:link {text-decoration:none;}.title.svelte-7cq7b1:visited {text-decoration:none;color:#222;}.title.svelte-7cq7b1:hover {text-decoration:none;color:darkgray;}.title.svelte-7cq7b1:active {text-decoration:none;}.title_text.svelte-7cq7b1 {display:flex;align-items:center;}.right_menus.svelte-7cq7b1 {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-7cq7b1 {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-7cq7b1 {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-7cq7b1:hover {cursor:pointer;}.menu_top_button.svelte-7cq7b1 {padding:12px 18px;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;background-color:#1ea7fd;color:white;}.round.svelte-7cq7b1 {height:40px;width:40px;border-radius:50%;}'
};
function dt(t, e) {
  ee(e, !0), W(t, Ja);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = G({}), s = G({});
  function d(c, g) {
    c && c.stopPropagation();
    for (const y of Object.keys(l))
      y != g.title && (l[y] = !1);
    g.items && g.items.length > 0 ? l[g.title] ? l[g.title] = !1 : l[g.title] = !0 : g.titleUrl ? window.location.href = g.titleUrl : document.dispatchEvent(new CustomEvent(g.title, { detail: {} }));
  }
  function o(c) {
    let g = {}, y;
    if (s[c] && (y = s[c]), y) {
      var _ = y.getBoundingClientRect();
      g.top = (_.top + _.height + 12).toString() + "px", g.left = (_.left - 150).toString() + "px", console.log(g);
    } else
      console.log("Could not find element with id: " + c);
    return g;
  }
  function f(c) {
    return c.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const g of Object.keys(l))
      l[g] = !1;
  };
  var u = Ga(), v = S(u);
  O(v, () => r() || i(), (c) => {
    var g = La(), y = S(g);
    O(y, i, (b) => {
      var h = ja();
      N(() => A(h, "src", i())), q(b, h);
    });
    var _ = T(y, 2);
    O(_, r, (b) => {
      var h = Da(), k = S(h, !0);
      w(h), N(() => j(k, r())), q(b, h);
    }), w(g), N(() => A(g, "href", n())), q(c, g);
  });
  var m = T(v, 2);
  Q(m, 21, a, X, (c, g) => {
    var y = Pa(), _ = P(y);
    N(() => A(_, "id", f(p(g).title + "_button"))), _.__click = [Ba, d, g];
    var b = S(_);
    O(
      b,
      () => p(g).imageUrl,
      (k) => {
        var x = Fa();
        lr(x, (I, M) => s[f(M.title + "_button")] = I, (I) => s == null ? void 0 : s[f(I.title + "_button")], () => [p(g)]), N(() => {
          A(x, "alt", p(g).title), A(x, "src", p(g).imageUrl), Ve(x, "round", p(g).imageShape === "round");
        }), q(k, x);
      },
      (k) => {
        var x = Va(), I = S(x, !0);
        w(x), N(() => {
          A(x, "style", "background-color: " + p(g).titleColor), j(I, p(g).title);
        }), q(k, x);
      }
    ), w(_);
    var h = T(_, 2);
    O(h, () => l[p(g).title] && p(g).items, (k) => {
      var x = /* @__PURE__ */ Xe(() => o(f(p(g).title + "_button")));
      sr(k, {
        get menuItems() {
          return p(g).items;
        },
        get position() {
          return p(x);
        }
      });
    }), q(c, y);
  }), w(m), w(u), q(t, u), te();
}
re(["click"]);
customElements.define("mv-elegant-header", K(
  dt,
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
  e.searchloadresults && Z(r, G(e.searchloadresults(n())));
}
function Wa(t, e, r, n) {
  t.key === "Escape" ? Z(e, G([])) : t.key === "Enter" ? (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n("")) : (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })));
}
var Ka = /* @__PURE__ */ C('<div class="result svelte-ihhy65"> </div>'), Za = /* @__PURE__ */ C('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Xa = /* @__PURE__ */ C('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const Qa = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function pn(t, e) {
  ee(e, !0), W(t, Qa);
  let r = E(e, "searchtext", 15), n = Se(G([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && Z(n, G(o.detail.results));
  });
  var i = Xa(), a = P(i), l = S(a), s = T(S(l), 2);
  ot(s), s.__input = [Ya, e, n, r], s.__keyup = [Wa, n, e, r], w(l), w(a);
  var d = T(a, 2);
  O(d, () => p(n).length > 0, (o) => {
    var f = Za(), u = S(f), v = S(u);
    Q(v, 21, () => p(n), X, (m, c) => {
      var g = Ka(), y = S(g, !0);
      w(g), N(() => j(y, p(c))), q(m, g);
    }), w(v), w(u), w(f), q(o, f);
  }), tt(s, r), q(t, i), te();
}
re(["input", "keyup"]);
customElements.define("mv-elegant-search", K(
  pn,
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
function gn(t, e) {
  W(t, rl);
  let r = E(e, "height", 3, "80px"), n = E(e, "titleText", 3, ""), i = E(e, "titleImageUrl", 3, ""), a = E(e, "searchtext", 15);
  var l = tl(), s = S(l), d = S(s);
  O(d, i, (m) => {
    var c = el();
    N(() => {
      A(c, "height", `${r()}`), A(c, "src", i());
    }), q(m, c);
  });
  var o = T(d, 2), f = S(o, !0);
  w(o), w(s);
  var u = T(s, 2), v = S(u);
  pn(v, {
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
  }), w(u), w(l), N(() => {
    A(s, "style", `height: ${r()};`), j(f, n());
  }), q(t, l);
}
customElements.define("mv-elegant-hero-search", K(
  gn,
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
var nl = /* @__PURE__ */ C('<img alt="category icon" class="svelte-1yyvu4g">'), il = /* @__PURE__ */ C('<span class="card_symbol svelte-1yyvu4g"> </span>'), al = /* @__PURE__ */ C('<img class="header_image svelte-1yyvu4g" alt="header preview">'), ll = /* @__PURE__ */ C('<img alt="profile" class="svelte-1yyvu4g">'), sl = /* @__PURE__ */ C('<img alt="category icon" class="svelte-1yyvu4g">'), ol = /* @__PURE__ */ C('<span class="card_symbol svelte-1yyvu4g"> </span>'), dl = /* @__PURE__ */ C('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><!> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
const ul = {
  hash: "svelte-1yyvu4g",
  code: ".card_frame.svelte-1yyvu4g {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1yyvu4g {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1yyvu4g span:where(.svelte-1yyvu4g) {white-space:nowrap;}.top_right_icons.svelte-1yyvu4g {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1yyvu4g {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1yyvu4g {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1yyvu4g:hover {color:#7c7c7c;}.author.svelte-1yyvu4g {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1yyvu4g:hover {color:#757a79;}.card_symbol.svelte-1yyvu4g {padding-left:6px;}.card_symbol.svelte-1yyvu4g:hover {cursor:default;}.footer.svelte-1yyvu4g {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1yyvu4g {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1yyvu4g {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g):hover {color:#82aae9;}.type_box.svelte-1yyvu4g {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function hn(t, e) {
  ee(e, !0), W(t, ul);
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
  var n = dl(), i = S(n), a = S(i), l = S(a, !0);
  w(a);
  var s = T(a, 2);
  Q(s, 21, () => r().categories, X, (k, x) => {
    var I = ae(), M = P(I);
    O(
      M,
      () => p(x).imageUrl,
      ($) => {
        var R = nl();
        N(() => {
          A(R, "src", p(x).imageUrl), A(R, "title", p(x).name);
        }), q($, R);
      },
      ($) => {
        var R = ae(), J = P(R);
        O(
          J,
          () => p(x).symbol,
          (B) => {
            var D = il(), z = S(D, !0);
            w(D), N(() => {
              A(D, "title", p(x).name), j(z, p(x).symbol);
            }), q(B, D);
          },
          null,
          !0
        ), q($, R);
      }
    ), q(k, I);
  }), w(s), w(i);
  var d = T(i, 2);
  O(d, () => r().imageUrl, (k) => {
    var x = al();
    N(() => A(x, "src", r().imageUrl)), q(k, x);
  });
  var o = T(d, 2), f = S(o, !0);
  w(o);
  var u = T(o, 2), v = S(u);
  O(v, () => r().authorImageUrl, (k) => {
    var x = ll();
    N(() => A(x, "src", r().authorImageUrl)), q(k, x);
  });
  var m = T(v);
  w(u);
  var c = T(u, 2), g = S(c), y = S(g, !0);
  w(g);
  var _ = T(g, 2), b = S(_), h = T(b, 2);
  Q(h, 21, () => r().types, X, (k, x) => {
    var I = ae(), M = P(I);
    O(
      M,
      () => p(x).imageUrl,
      ($) => {
        var R = sl();
        N(() => {
          A(R, "src", p(x).imageUrl), A(R, "title", p(x).name);
        }), q($, R);
      },
      ($) => {
        var R = ae(), J = P(R);
        O(
          J,
          () => p(x).symbol,
          (B) => {
            var D = ol(), z = S(D, !0);
            w(D), N(() => {
              A(D, "title", p(x).name), j(z, p(x).symbol);
            }), q(B, D);
          },
          null,
          !0
        ), q($, R);
      }
    ), q(k, I);
  }), w(h), w(_), w(c), w(n), N(() => {
    j(l, r().dateTime), A(o, "href", r().link), j(f, r().title), A(u, "href", r().authorUrl), j(m, ` ${r().authorName ?? ""}`), j(y, r().description), A(b, "href", r().link);
  }), q(t, n), te();
}
customElements.define("mv-elegant-card", K(hn, { item: {} }, [], [], !0));
var cl = /* @__PURE__ */ C('<div class="menu_frame svelte-1dvvvu9"></div>');
const vl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function _n(t, e) {
  W(t, vl);
  let r = E(e, "items", 31, () => G([]));
  typeof r() == "string" && r(JSON.parse(r()));
  var n = cl();
  Q(n, 21, r, X, (i, a) => {
    var l = ae(), s = P(l);
    O(s, () => !p(a).hidden, (d) => {
      hn(d, {
        get item() {
          return p(a);
        }
      });
    }), q(i, l);
  }), w(n), q(t, n);
}
customElements.define("mv-elegant-cardpage", K(_n, { items: {} }, [], [], !0));
var fl = (t, e, r) => e(p(r).name), pl = /* @__PURE__ */ C('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), gl = /* @__PURE__ */ C('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const hl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function mn(t, e) {
  ee(e, !0), W(t, hl);
  let r = E(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = G({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = gl();
  Q(a, 21, r, X, (l, s) => {
    var d = pl(), o = S(d);
    o.__click = [fl, i, s];
    var f = S(o, !0);
    w(o);
    var u = T(o, 2), v = S(u, !0);
    w(u), w(d), N(() => {
      Ve(o, "letter_selected", n[p(s).name]), j(f, p(s).symbol), j(v, p(s).name);
    }), q(l, d);
  }), w(a), q(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-filtercats", K(mn, { categories: {}, categoryselect: {} }, [], [], !0));
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
  ee(e, !0), W(t, xl);
  let r = E(e, "input", 15), n = E(e, "options", 19, () => []);
  var i = bl(), a = S(i);
  a.__input = [_l, r, e], Q(a, 21, n, X, (l, s) => {
    var d = ml(), o = {}, f = S(d, !0);
    w(d), N(() => {
      o !== (o = p(s)) && (d.value = (d.__value = p(s)) == null ? "" : p(s)), j(f, p(s));
    }), q(l, d);
  }), w(a), w(i), cn(a, r), q(t, i), te();
}
re(["input"]);
customElements.define("mv-elegant-select", K(bn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function wl(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var yl = (t, e, r) => e(p(r).name), kl = /* @__PURE__ */ C('<div class="icon svelte-lvweti">✓</div>'), El = /* @__PURE__ */ C('<div class="icon svelte-lvweti"> </div>'), Sl = /* @__PURE__ */ C('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), ql = /* @__PURE__ */ C('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Cl = /* @__PURE__ */ C('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Il = /* @__PURE__ */ C('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Tl = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function xn(t, e) {
  ee(e, !0), W(t, Tl);
  let r = E(e, "types", 7), n = E(e, "sortSelected", 15, ""), i = E(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let a = e.sortTypes.split(",").map((g) => g.trim());
  n() || n(a[0]);
  let l = G({});
  function s(g) {
    l[g] ? l[g] = !1 : l[g] = !0, e.onTypeSelect && (console.log("sending type selected data: " + JSON.stringify(l)), e.onTypeSelect(l));
  }
  function d(g) {
    e.onSortSelect && e.onSortSelect(g);
  }
  var o = Il(), f = S(o);
  Q(f, 21, r, X, (g, y) => {
    var _ = Sl();
    _.__click = [yl, s, y];
    var b = S(_);
    O(
      b,
      () => l[p(y).name] === !0,
      (x) => {
        var I = kl();
        q(x, I);
      },
      (x) => {
        var I = El(), M = S(I, !0);
        w(I), N(() => j(M, p(y).symbol)), q(x, I);
      }
    );
    var h = T(b, 2), k = S(h, !0);
    w(h), w(_), N(() => {
      Ve(_, "filterbar_option_selected", l[p(y).name]), j(k, p(y).name);
    }), q(g, _);
  }), w(f);
  var u = T(f, 2), v = S(u);
  v.__click = [wl, i, e];
  var m = S(v);
  O(
    m,
    () => i() === "CARD",
    (g) => {
      var y = ql();
      q(g, y);
    },
    (g) => {
      var y = Cl();
      q(g, y);
    }
  ), w(v);
  var c = T(v, 2);
  bn(c, {
    get input() {
      return n();
    },
    options: a,
    onInput: d
  }), w(u), w(o), q(t, o), te();
}
re(["click"]);
customElements.define("mv-elegant-filtertypes", K(
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
  if (p(e)) {
    let a = [];
    for (let l of r()) {
      let s = !1;
      for (let d of n())
        if (d.searchable && l[d.name] && l[d.name].toString().toLowerCase().includes(p(e).toLowerCase())) {
          s = !0;
          break;
        }
      s && a.push(l);
    }
    Z(i, G(a));
  } else
    Z(i, G(r()));
}
var Al = /* @__PURE__ */ C('<th class="svelte-1nbcvq9"> </th>'), zl = /* @__PURE__ */ C('<a class="table_row svelte-1nbcvq9"> </a>'), $l = /* @__PURE__ */ C('<span class="table_row svelte-1nbcvq9"> </span>'), Ol = /* @__PURE__ */ C('<td class="svelte-1nbcvq9"><!></td>'), Ml = /* @__PURE__ */ C("<td></td>"), Hl = /* @__PURE__ */ C('<tr class="svelte-1nbcvq9"></tr>'), Rl = /* @__PURE__ */ C('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const Ul = {
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
  ee(e, !0), W(t, Ul);
  let r = E(e, "tableHeaders", 23, () => []), n = E(e, "tableRows", 31, () => G([])), i = E(e, "linkprefix", 3, ""), a = E(e, "linkcolumnname", 3, ""), l = E(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let h of Object.keys(n()[0]))
      r().push({
        name: h,
        displayName: h,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = Se(G(n())), d = Se(""), o = Se(-1);
  const f = (h) => {
    Z(o, G(h)), l() && l()({ detail: { rowIndex: h } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: h } }));
  };
  var u = Rl(), v = S(u), m = T(S(v), 2), c = T(S(m));
  ot(c), c.__keyup = [
    Nl,
    d,
    n,
    r,
    s
  ], w(m), w(v);
  var g = T(v, 2), y = S(g), _ = S(y);
  Q(_, 21, r, X, (h, k) => {
    var x = Al(), I = S(x, !0);
    w(x), N(() => {
      Ve(x, "column_sm", p(k).hideNarrow), j(I, p(k).displayName);
    }), q(h, x);
  }), w(_), w(y);
  var b = T(y);
  Q(b, 21, () => p(s), X, (h, k, x) => {
    var I = Hl();
    I.__click = () => {
      f(x);
    }, Q(I, 21, r, X, (M, $) => {
      var R = ae(), J = P(R);
      O(
        J,
        () => p(k)[p($).name],
        (B) => {
          var D = Ol(), z = S(D);
          O(
            z,
            a,
            (H) => {
              var V = zl(), ne = S(V, !0);
              w(V), N(() => {
                A(V, "href", i() + p(k)[a()]), j(ne, p(k)[p($).name]);
              }), q(H, V);
            },
            (H) => {
              var V = $l(), ne = S(V, !0);
              w(V), N(() => j(ne, p(k)[p($).name])), q(H, V);
            }
          ), w(D), N(() => Ve(D, "column_sm", p($).hideNarrow)), q(B, D);
        },
        (B) => {
          var D = Ml();
          q(B, D);
        }
      ), q(M, R);
    }), w(I), N(() => Ve(I, "table_row_selected", x === p(o))), q(h, I);
  }), w(b), w(g), w(u), tt(c, () => p(d), (h) => Z(d, h)), q(t, u), te();
}
re(["keyup", "click"]);
customElements.define("mv-elegant-table", K(
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
var jl = /* @__PURE__ */ C("<!> <!> <!> <!> <!>", 1);
const Dl = { hash: "svelte-3kpd", code: "" };
function Ll(t, e) {
  ee(e, !0), W(t, Dl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "searchtext", 7, ""), s = E(e, "categories", 19, () => []), d = E(e, "types", 19, () => []), o = E(e, "sortTypes", 3, ""), f = E(e, "sortSelected", 11, ""), u = E(e, "items", 31, () => G([]));
  typeof u() == "string" && u(JSON.parse(u()));
  let v = Se("CARD"), m = G([
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
  ]), c = "", g = {}, y = !1, _ = {}, b = !1;
  function h(z) {
    c = z, e.searchsubmit ? e.searchsubmit(z) : I();
  }
  function k(z) {
    g = z, y = !1;
    for (const [H, V] of Object.entries(g))
      if (V) {
        y = !0;
        break;
      }
    e.categoryselect ? e.categoryselect(z) : I();
  }
  function x(z) {
    _ = z, b = !1;
    for (const [H, V] of Object.entries(_))
      if (V) {
        b = !0;
        break;
      }
    e.onTypeSelect ? e.onTypeSelect(z) : I();
  }
  function I() {
    for (let z of u()) {
      let H = !1;
      if ((c != "" && z.description && z.title && z.authorName && !z.title.toLowerCase().includes(c.toLowerCase()) && !z.description.toLowerCase().includes(c.toLowerCase()) && !z.authorName.toLowerCase().includes(c.toLowerCase()) || c != "" && z.description == "") && (H = !0), !H && (!z.categories || z.categories.length === 0) && y) H = !0;
      else if (!H && z.categories)
        for (let V of Object.keys(g)) {
          const ne = z.categories.find((oe) => oe.name === V);
          if (g[V] && !ne) {
            H = !0;
            break;
          }
        }
      if (!H && (!z.types || z.types.length === 0) && b) H = !0;
      else if (!H && z.types)
        for (let V of Object.keys(_)) {
          const ne = z.types.find((oe) => oe.name === V);
          if (_[V] && !ne) {
            H = !0;
            break;
          }
        }
      z.hidden = H;
    }
  }
  var M = jl(), $ = P(M);
  dt($, {
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
  var R = T($, 2);
  gn(R, {
    get titleText() {
      return r();
    },
    get titleImageUrl() {
      return i();
    },
    get searchtext() {
      return l();
    },
    set searchtext(z) {
      l(z);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    searchsubmit: h
  });
  var J = T(R, 2);
  mn(J, {
    get categories() {
      return s();
    },
    categoryselect: k
  });
  var B = T(J, 2);
  xn(B, {
    get types() {
      return d();
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
      return p(v);
    },
    set view(z) {
      Z(v, G(z));
    }
  });
  var D = T(B, 2);
  O(
    D,
    () => p(v) === "CARD",
    (z) => {
      _n(z, {
        get items() {
          return u();
        },
        set items(H) {
          u(H);
        }
      });
    },
    (z) => {
      wn(z, {
        get tableHeaders() {
          return m;
        },
        get tableRows() {
          return u();
        },
        set tableRows(H) {
          u(H);
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), q(t, M), te();
}
customElements.define("mv-elegant-buffet", K(
  Ll,
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
var Bl = /* @__PURE__ */ C('<!> <div class="view_frame svelte-qzg12u"></div>', 1);
const Fl = {
  hash: "svelte-qzg12u",
  code: ".view_frame.svelte-qzg12u {margin:auto;padding:24px 12px;max-width:700px;}.view_image {margin:8px 0px;width:100%;border-radius:24px;filter:drop-shadow(0 0 0.75rem gray);}"
};
function Vl(t, e) {
  W(t, Fl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(u) {
    let v = "";
    if (u.labelType && (v += `<${u.labelType}>${u.label}</${u.labelType}>`), u.type == "link_blank")
      v += `<a href="${u.link}" target="_blank">${u.value}</a>`;
    else if (u.type == "ul_link_blank") {
      let m = u.value.split(",");
      v += "<ul>";
      for (let c of m)
        v += `<li><a href="${c}" target="_blank">${c}</a></li>`;
      v += "</ul>";
    } else if (u.type == "ul") {
      let m = u.value.split(",");
      v += "<ul>";
      for (let c of m)
        v += `<li>${c}</li>`;
      v += "</ul>";
    } else if (u.type == "img" && u.value)
      v += `<${u.type} class="view_image" src="${u.value}"></${u.type}>`;
    else if (u.type == "preview_iframe" && u.value) {
      let m = u.value.split(","), c = "";
      for (let g of m)
        if (g.startsWith("https://youtu.be")) {
          let y = g.split("/");
          c = "https://www.youtube.com/embed/" + y[y.length - 1];
          break;
        } else if (g.includes("/presentation/")) {
          g.includes("/edit") ? c = g.replace("/edit", "/embed") : c = g + "/embed";
          break;
        }
      c && (v += `<div style="margin: 24px 0px;">
          <iframe
            class="view_image"
            width="100%"
            height="374"
            src=${c}
            title="Embedded content preview"
          ></iframe>
        </div>`);
    } else u.value && (v += `<${u.type}>${u.value}</${u.type}>`);
    return v;
  }
  var d = Bl(), o = P(d);
  dt(o, {
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
  Q(f, 21, l, X, (u, v) => {
    var m = ae(), c = P(m);
    wi(c, () => s(p(v))), q(u, m);
  }), w(f), q(t, d);
}
customElements.define("mv-elegant-buffet-view", K(
  Vl,
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
var Pl = /* @__PURE__ */ C('<div class="input_label"> </div>'), Gl = /* @__PURE__ */ C('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Jl = (t, e) => {
  e(t);
}, Yl = /* @__PURE__ */ C('<div><input type="checkbox" form=""> <label> </label></div>'), Wl = /* @__PURE__ */ C('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Kl = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function yn(t, e) {
  ee(e, !0), W(t, Kl);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, "");
  E(e, "placeholder", 3, "");
  let a = E(e, "items", 3, ""), l = E(e, "value", 15, ""), s = E(e, "selectStyle", 3, ""), d = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((b) => b.trim()), f = [];
  l() && (f = l().split(",").map((b) => b.trim()));
  let u = {};
  for (let b of o)
    f.includes(b) ? u[b] = !0 : u[b] = !1;
  const v = (b) => {
    if (b && b.target) {
      let h = b.target.id, k = b.target.checked;
      if (k && !f.includes(h))
        f.push(h);
      else if (!k && f.includes(h)) {
        let x = f.indexOf(h);
        f.splice(x, 1);
      }
      l(f.join(",")), d() && d()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var m = Wl(), c = S(m);
  O(c, n, (b) => {
    var h = Pl(), k = S(h, !0);
    w(h), N(() => j(k, n())), q(b, h);
  });
  var g = T(c, 2), y = S(g);
  O(y, i, (b) => {
    var h = Gl(), k = S(h);
    w(h), N(() => A(k, "src", i())), q(b, h);
  });
  var _ = T(y, 2);
  Q(_, 21, () => o, X, (b, h) => {
    var k = Yl(), x = S(k);
    ot(x), x.__change = [Jl, v];
    var I = T(x, 2), M = S(I, !0);
    w(I), w(k), N(() => {
      A(x, "id", p(h)), A(x, "name", p(h)), A(I, "for", p(h)), j(M, p(h));
    }), Ii(x, () => u[p(h)], ($) => u[p(h)] = $), q(b, k);
  }), w(_), w(g), w(m), N(() => A(m, "style", s())), q(t, m), te();
}
re(["change"]);
customElements.define("ing-multi-select", K(
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
function Zl(t, e) {
  e("", "");
}
var Xl = /* @__PURE__ */ C('<img class="image_preview svelte-1a3rnn">'), Ql = /* @__PURE__ */ C('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-1a3rnn" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-1a3rnn"> </div> <!>', 1), es = /* @__PURE__ */ C('<!> <form class="edit_frame svelte-1a3rnn"></form>', 1);
const ts = {
  hash: "svelte-1a3rnn",
  code: ".edit_frame.svelte-1a3rnn {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-1a3rnn::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-1a3rnn {margin-top:10px;margin-bottom:12px;font-size:14px;}.image_preview.svelte-1a3rnn {width:244px;margin-bottom:14px;}"
};
function rs(t, e) {
  ee(e, !0), W(t, ts);
  let r = E(e, "formId", 7, ""), n = E(e, "titleText", 3, ""), i = E(e, "titleUrl", 3, "/"), a = E(e, "titleImageUrl", 3, ""), l = E(e, "headerMenus", 19, () => []), s = E(e, "items", 23, () => []), d;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  function o(m, c) {
    const g = new FormData(d);
    for (let y of s())
      y.type != "file" && g.set(y.id, y.value);
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: g
      }
    }));
  }
  var f = es(), u = P(f);
  dt(u, {
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
  var v = T(u, 2);
  Q(v, 21, s, X, (m, c) => {
    var g = ae(), y = P(g);
    O(
      y,
      () => p(c).type == "input" || p(c).type == "textarea",
      (_) => {
        zt(_, {
          get label() {
            return p(c).label;
          },
          get input() {
            return p(c).value;
          },
          set input(b) {
            p(c).value = b;
          },
          get type() {
            return p(c).type;
          },
          inputChanged: o
        });
      },
      (_) => {
        var b = ae(), h = P(b);
        O(
          h,
          () => p(c).type == "select",
          (k) => {
            or(k, {
              get label() {
                return p(c).label;
              },
              get items() {
                return p(c).options;
              },
              get value() {
                return p(c).value;
              },
              set value(x) {
                p(c).value = x;
              },
              inputChanged: o
            });
          },
          (k) => {
            var x = ae(), I = P(x);
            O(
              I,
              () => p(c).type == "multiselect",
              (M) => {
                yn(M, {
                  get label() {
                    return p(c).label;
                  },
                  get items() {
                    return p(c).options;
                  },
                  get value() {
                    return p(c).value;
                  },
                  set value($) {
                    p(c).value = $;
                  },
                  inputChanged: o
                });
              },
              (M) => {
                var $ = ae(), R = P($);
                O(
                  R,
                  () => p(c).type == "file",
                  (J) => {
                    var B = Ql(), D = P(B), z = S(D), H = S(z, !0);
                    w(z), w(D);
                    var V = T(D, 2);
                    V.__change = [Zl, o];
                    var ne = T(V, 2), oe = S(ne, !0);
                    w(ne);
                    var he = T(ne, 2);
                    O(he, () => p(c).value && (p(c).value.endsWith("png") || p(c).value.endsWith("jpg")), (ut) => {
                      var Ye = Xl();
                      N(() => A(Ye, "src", p(c).value)), q(ut, Ye);
                    }), N(() => {
                      A(z, "for", p(c).id), j(H, p(c).label), A(V, "id", p(c).id), A(V, "name", p(c).id), j(oe, p(c).value);
                    }), q(J, B);
                  },
                  null,
                  !0
                ), q(M, $);
              },
              !0
            ), q(k, x);
          },
          !0
        ), q(_, b);
      }
    ), q(m, g);
  }), w(v), lr(v, (m) => d = m, () => d), N(() => A(v, "id", r())), q(t, f), te();
}
re(["change"]);
customElements.define("mv-elegant-buffet-edit", K(
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
var ns = /* @__PURE__ */ C(
  `<!> <div class="background_left svelte-12p3ao5"><svg class="g-h-swoop-image" role="presentation" width="289" height="208" viewBox="0 0 315 222" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_228_2286)"><path d="M312.433 -0.753784C312.912 1.10786 313.214 3.26622 313.397 5.75039C315.766 43.4191 313.397 80.2612 297.105 114.978C266.832 180.101 212.21 210.124 143.637 218.95C94.2485 225.333 46.4444 217.558 0.000188589 201.267C-0.27401 201.17 -0.548162 201.074 -0.822266 200.977" stroke="#4285F4" stroke-width="2" stroke-linejoin="round"></path></g></svg></div> <div class="background_right svelte-12p3ao5"><svg class="g-h-swoop-image" role="presentation" width="192" height="618" viewBox="0 0 192 618" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2884 -0.999986C11.8162 21.3558 1.00001 48.7302 1.00001 77.9528C1.00003 229.64 178.083 265.688 178.083 415.406C178.083 477.349 135.321 488.804 135.321 550.137C135.321 583.574 163.684 611.749 193 617" stroke="#FBBC04" stroke-width="2" stroke-linejoin="round"></path></svg></div> <div class="landing_main_panel svelte-12p3ao5"><div id="overview" class="landing_heading svelte-12p3ao5">Let's achieve more with our data & AI assets</div> <div class="landing_content svelte-12p3ao5"><div>Apigee Marketplace is a specialized online hub designed to connect data
      providers and consumers within various industrial sectors. Its focus is on
      facilitating the exchange of highly valuable industrial datasets,
      empowering businesses to optimize operations, accelerate innovation, and
      gain a competitive edge.</div></div> <div class="landing_heading_small svelte-12p3ao5"><span><a href="/sign-in" class="rounded_button_filled">Sign In</a> <a href="/register" class="rounded_button_outlined">Register</a></span></div> <div class="landing_content_gray svelte-12p3ao5"><div class="landing_sub_heading svelte-12p3ao5">Our mission is data & AI collaboration at scale</div> <div class="landing_content_divided svelte-12p3ao5"><div class="landing_content_half svelte-12p3ao5"><img class="landing_content_half_image svelte-12p3ao5" alt="frankfurt" src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&amp;w=1932&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div> <div id="mission" class="landing_content_half_text svelte-12p3ao5">Apigee Marketplace is a specialized online hub designed to connect data
        providers and consumers within and across industries. Its focus is on
        facilitating the exchange of highly valuable industrial datasets,
        empowering businesses to optimize operations, accelerate innovation, and
        gain a competitive edge.</div></div></div> <div class="landing_content_white svelte-12p3ao5"><div class="landing_sub_heading svelte-12p3ao5">Transparent & simple pricing for first, second and third-party data</div> <div class="landing_content_divided svelte-12p3ao5"><div id="pricing" class="landing_content_half_text svelte-12p3ao5">Our data marketplace puts simplicity at the forefront. Pricing
        structures are clear and concise, with no hidden fees or complicated
        calculations. You'll find tiered subscription options based on your
        needs, or the ability to pay-as-you-go for individual datasets.</div> <div class="landing_content_half svelte-12p3ao5"><img class="landing_content_half_image svelte-12p3ao5" alt="frankfurt" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&amp;w=1770&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div> <div class="landing_content_gray svelte-12p3ao5"><div class="landing_sub_heading svelte-12p3ao5">Verified & curated data from a network of high-quality partners</div> <div class="landing_content_divided svelte-12p3ao5"><div class="landing_content_half svelte-12p3ao5"><img class="landing_content_half_image svelte-12p3ao5" alt="frankfurt" src="https://images.unsplash.com/photo-1540646794357-6cbbd6f3501e?q=80&amp;w=1548&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div> <div id="partners" class="landing_content_half_text svelte-12p3ao5">Data Marketplace is a specialized online hub designed to connect data
        providers and consumers within various industrial sectors. Its focus is
        on facilitating the exchange of highly valuable industrial datasets,
        empowering businesses to optimize operations, accelerate innovation, and
        gain a competitive edge.</div></div></div> <div class="landing_content_white svelte-12p3ao5"><div class="landing_sub_heading svelte-12p3ao5">Security & privacy built-in</div> <div class="landing_content_divided svelte-12p3ao5"><div id="privacy" class="landing_content_half_text svelte-12p3ao5">Apigee Marketplace prioritizes security by providing a multi-layered
        approach to protect customer data and infrastructure. Built-in
        safeguards, like encryption and access control, are foundational to the
        platform. The global network, equipped with custom-designed hardware and
        a hardened operating system, ensures high availability and resilience
        against attacks.</div> <div class="landing_content_half svelte-12p3ao5"><img class="landing_content_half_image svelte-12p3ao5" alt="frankfurt" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></div></div></div> <div class="footer svelte-12p3ao5"></div></div>`,
  1
);
const is = {
  hash: "svelte-12p3ao5",
  code: `.background_left.svelte-12p3ao5 {position:absolute;top:72px;}.background_right.svelte-12p3ao5 {position:absolute;top:72px;right:0px;}.landing_main_panel.svelte-12p3ao5 {background:var(--primary-background-color);left:0px;width:100%;bottom:0px;padding-top:104px;text-align:center;}.landing_heading.svelte-12p3ao5 {margin:auto;margin-top:75px;width:60vw;font-size:72px;font-style:normal;}.landing_content_divided.svelte-12p3ao5 {width:60vw;margin:auto;display:flex;}.landing_content.svelte-12p3ao5 {margin:auto;margin-top:46px;color:#555;line-height:24px;width:60vw;}.landing_content_half.svelte-12p3ao5 {margin:auto;margin-top:46px;color:#555;line-height:24px;width:50%;text-align:center;}.landing_content_half_image.svelte-12p3ao5 {width:80%;border-radius:45px;}.landing_content_half_text.svelte-12p3ao5 {margin:auto;margin-top:98px;color:#555;line-height:24px;width:50%;text-align:left;}.landing_heading_small.svelte-12p3ao5 {margin:auto;margin-top:35px;width:60vw;}.landing_content_gray.svelte-12p3ao5 {background-color:rgb(248, 249, 250);margin-top:74px;min-height:400px;
    /* margin-bottom: 400px; */padding-bottom:110px;}.landing_content_white.svelte-12p3ao5 {background-color:rgb(255, 255, 255);
    /* margin-top: 74px; */min-height:400px;
    /* margin-bottom: 400px; */
    /* padding-bottom: 110px; */}.landing_sub_heading.svelte-12p3ao5 {margin:auto;padding-top:124px;width:50vw;font-size:48px;font-style:normal;padding-bottom:22px;}.footer.svelte-12p3ao5 {height:200px;width:100%;}`
};
function as(t, e) {
  W(t, is);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  var s = ns(), d = P(s);
  dt(d, {
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
  }), nr(6), q(t, s);
}
customElements.define("mv-elegant-landing", K(
  as,
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
var ls = /* @__PURE__ */ C('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const ss = {
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
function os(t, e) {
  W(t, ss);
  var r = ls();
  q(t, r);
}
customElements.define("mv-elegant-spinner", K(os, {}, [], [], !0));
export {
  Ll as ElegantBuffet,
  rs as ElegantBuffetEdit,
  Vl as ElegantBuffetView,
  dt as ElegantHeader,
  gn as ElegantHeroSearch,
  as as ElegantLanding,
  pn as ElegantSearch,
  os as ElegantSpinner,
  wn as ElegantTable,
  wa as IngBuffet,
  Ui as IngButton,
  Li as IngButtonGray,
  Aa as IngForm,
  fn as IngHeaderLite,
  zt as IngInput,
  or as IngSelect,
  Ua as IngTable
};
