var En = Object.defineProperty;
var or = (t) => {
  throw TypeError(t);
};
var Sn = (t, e, r) => e in t ? En(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var pe = (t, e, r) => Sn(t, typeof e != "symbol" ? e + "" : e, r), ur = (t, e, r) => e.has(t) || or("Cannot " + r);
var ae = (t, e, r) => (ur(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $t = (t, e, r) => e.has(t) ? or("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), At = (t, e, r, n) => (ur(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Cn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Cn);
const Vt = 1, Jt = 2, yr = 4, qn = 8, In = 16, Nn = 1, Tn = 4, $n = 8, An = 16, On = 4, zn = 1, Rn = 2, wr = "[", Gt = "[!", Yt = "]", je = {}, se = Symbol(), kr = !1;
function xt(t) {
  console.warn("hydration_mismatch");
}
var Kt = Array.isArray, Wt = Array.from, ft = Object.keys, ht = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Hn = Object.getOwnPropertyDescriptors, Un = Object.prototype, Ln = Array.prototype, zt = Object.getPrototypeOf;
function Mn(t) {
  return typeof t == "function";
}
const Ye = () => {
};
function Er(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Ce = 2, Sr = 4, yt = 8, wt = 16, be = 32, tt = 64, Ge = 128, pt = 256, ue = 512, Oe = 1024, rt = 2048, ge = 4096, nt = 8192, Cr = 16384, kt = 32768, jn = 1 << 18, qr = 1 << 19, De = Symbol("$state"), Dn = Symbol("");
function Ir(t) {
  return t === this.v;
}
function Fn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Nr(t) {
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
let Tr = !1;
function de(t) {
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
  return /* @__PURE__ */ Wn(de(t));
}
// @__NO_SIDE_EFFECTS__
function Zt(t, e = !1) {
  const r = de(t);
  return e || (r.equals = Nr), r;
}
// @__NO_SIDE_EFFECTS__
function Wn(t) {
  return P !== null && P.f & Ce && (_e === null ? ni([t]) : _e.push(t)), t;
}
function Y(t, e) {
  return P !== null && ai() && P.f & (Ce | wt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (_e === null || !_e.includes(t)) && Kn(), Rt(t, e);
}
function Rt(t, e) {
  return t.equals(e) || (t.v = e, t.version = Jr(), $r(t, Oe), L !== null && L.f & ue && !(L.f & be) && (ne !== null && ne.includes(t) ? (Ie(L, Oe), It(L)) : $e === null ? ii([t]) : $e.push(t))), e;
}
function $r(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & Oe || (Ie(a, e), l & (ue | Ge) && (l & Ce ? $r(
        /** @type {Derived} */
        a,
        rt
      ) : It(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  var e = Ce | Oe;
  L === null ? e |= Ge : L.f |= qr;
  const r = {
    children: null,
    ctx: me,
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
  if (P !== null && P.f & Ce) {
    var n = (
      /** @type {Derived} */
      P
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
      n.f & Ce ? Xt(
        /** @type {Derived} */
        n
      ) : ze(
        /** @type {Effect} */
        n
      );
    }
  }
}
function Or(t) {
  var e, r = L;
  le(t.parent);
  try {
    Ar(t), e = Gr(t);
  } finally {
    le(r);
  }
  return e;
}
function zr(t) {
  var e = Or(t), r = (Me || t.f & Ge) && t.deps !== null ? rt : ue;
  Ie(t, r), t.equals(e) || (t.v = e, t.version = Jr());
}
function Xt(t) {
  Ar(t), Qe(t, 0), Ie(t, nt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function Zn(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function it(t, e, r, n = !0) {
  var i = (t & tt) !== 0, a = L, l = {
    ctx: me,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Oe,
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
      cr(!0), qt(l), l.f |= Cr;
    } catch (v) {
      throw ze(l), v;
    } finally {
      cr(s);
    }
  } else e !== null && It(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & qr) === 0;
  if (!u && !i && n && (a !== null && Zn(l, a), P !== null && P.f & Ce)) {
    var o = (
      /** @type {Derived} */
      P
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Rr(t) {
  const e = it(tt, t, !0);
  return () => {
    ze(e);
  };
}
function at(t) {
  return it(Sr, t, !1);
}
function Et(t) {
  return it(yt, t, !0);
}
function $(t) {
  return St(t);
}
function St(t, e = 0) {
  return it(yt | wt | e, t, !0);
}
function Ve(t, e = !0) {
  return it(yt | be, t, !0, e);
}
function Hr(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = P;
    fe(null);
    try {
      e.call(null);
    } finally {
      fe(r);
    }
  }
}
function Ur(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      Xt(e[r]);
  }
}
function Lr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    ze(r, e), r = n;
  }
}
function Xn(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & be || ze(e), e = r;
  }
}
function ze(t, e = !0) {
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
  Lr(t, e && !r), Ur(t), Qe(t, 0), Ie(t, nt);
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
function Ht(t, e) {
  var r = [];
  Qt(t, r, !0), jr(r, () => {
    ze(t), e && e();
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
  if (!(t.f & ge)) {
    if (t.f ^= ge, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & kt) !== 0 || (n.f & be) !== 0;
      Qt(n, e, a ? r : !1), n = i;
    }
  }
}
function gt(t) {
  Dr(t, !0);
}
function Dr(t, e) {
  if (t.f & ge) {
    lt(t) && qt(t), t.f ^= ge;
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
let _t = !1, mt = !1, Ut = [], Lt = [];
function Fr() {
  _t = !1;
  const t = Ut.slice();
  Ut = [], Er(t);
}
function Br() {
  mt = !1;
  const t = Lt.slice();
  Lt = [], Er(t);
}
function Ct(t) {
  _t || (_t = !0, queueMicrotask(Fr)), Ut.push(t);
}
function ei(t) {
  mt || (mt = !0, Qn(Br)), Lt.push(t);
}
function ti() {
  _t && Fr(), mt && Br();
}
const Pr = 0, ri = 1;
let dt = Pr, Xe = !1, Fe = !1;
function cr(t) {
  Fe = t;
}
let Re = [], Be = 0;
let P = null;
function fe(t) {
  P = t;
}
let L = null;
function le(t) {
  L = t;
}
let _e = null;
function ni(t) {
  _e = t;
}
let ne = null, oe = 0, $e = null;
function ii(t) {
  $e = t;
}
let Vr = 0, Me = !1, me = null;
function Jr() {
  return ++Vr;
}
function ai() {
  return !Tr;
}
function lt(t) {
  var l, s;
  var e = t.f;
  if (e & Oe)
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
        ) && zr(
          /** @type {Derived} */
          a
        ), n && L !== null && !Me && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || Ie(t, ue);
  }
  return !1;
}
function li(t, e, r) {
  throw t;
}
function Gr(t) {
  var d;
  var e = ne, r = oe, n = $e, i = P, a = Me, l = _e, s = me, u = t.f;
  ne = /** @type {null | Value[]} */
  null, oe = 0, $e = null, P = u & (be | tt) ? null : t, Me = !Fe && (u & Ge) !== 0, _e = null, me = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), v = t.deps;
    if (ne !== null) {
      var c;
      if (Qe(t, oe), v !== null && oe > 0)
        for (v.length = oe + ne.length, c = 0; c < ne.length; c++)
          v[oe + c] = ne[c];
      else
        t.deps = v = ne;
      if (!Me)
        for (c = oe; c < v.length; c++)
          ((d = v[c]).reactions ?? (d.reactions = [])).push(t);
    } else v !== null && oe < v.length && (Qe(t, oe), v.length = oe);
    return o;
  } finally {
    ne = e, oe = r, $e = n, P = i, Me = a, _e = l, me = s;
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
  r === null && e.f & Ce && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ne === null || !ne.includes(e)) && (Ie(e, rt), e.f & (Ge | pt) || (e.f ^= pt), Qe(
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
function qt(t) {
  var e = t.f;
  if (!(e & nt)) {
    Ie(t, ue);
    var r = L;
    L = t;
    try {
      e & wt ? Xn(t) : Lr(t), Ur(t), Hr(t);
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
      !(n.f & (nt | ge)) && lt(n) && (qt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Mr(n) : n.fn = null));
    }
}
function ui() {
  if (Xe = !1, Be > 1001)
    return;
  const t = Re;
  Re = [], Kr(t), Xe || (Be = 0);
}
function It(t) {
  dt === Pr && (Xe || (Xe = !0, queueMicrotask(ui)));
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
    if (!l && !(i & ge))
      if (i & yt) {
        a ? r.f ^= ue : lt(r) && qt(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & Sr && n.push(r);
    var u = r.next;
    if (u === null) {
      let c = r.parent;
      for (; c !== null; ) {
        if (t === c)
          break e;
        var o = c.next;
        if (o !== null) {
          r = o;
          continue e;
        }
        c = c.parent;
      }
    }
    r = u;
  }
  for (var v = 0; v < n.length; v++)
    s = n[v], e.push(s), Wr(s, e);
}
function Zr(t) {
  var e = dt, r = Re;
  try {
    Yr();
    const i = [];
    dt = ri, Re = i, Xe = !1, Kr(r);
    var n = t == null ? void 0 : t();
    return ti(), (Re.length > 0 || i.length > 0) && Zr(), Be = 0, n;
  } finally {
    dt = e, Re = r;
  }
}
function h(t) {
  var s;
  var e = t.f, r = (e & Ce) !== 0;
  if (r && e & nt) {
    var n = Or(
      /** @type {Derived} */
      t
    );
    return Xt(
      /** @type {Derived} */
      t
    ), n;
  }
  if (P !== null) {
    _e !== null && _e.includes(t) && Yn();
    var i = P.deps;
    ne === null && i !== null && i[oe] === t ? oe++ : ne === null ? ne = [t] : ne.push(t), $e !== null && L !== null && L.f & ue && !(L.f & be) && $e.includes(t) && (Ie(L, Oe), It(L));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, lt(a) && zr(a)), t.v;
}
function bt(t) {
  const e = P;
  try {
    return P = null, t();
  } finally {
    P = e;
  }
}
const ci = ~(Oe | rt | ue);
function Ie(t, e) {
  t.f = t.f & ci | e;
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
      var r = L, n = P;
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
function B(t, e = null, r) {
  if (typeof t != "object" || t === null || De in t)
    return t;
  const n = zt(t);
  if (n !== Un && n !== Ln)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Kt(t), l = de(0);
  a && i.set("length", de(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, o, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Jn();
        var c = i.get(o);
        return c === void 0 ? (c = de(v.value), i.set(o, c)) : Y(c, B(v.value, s)), !0;
      },
      deleteProperty(u, o) {
        var v = i.get(o);
        if (v === void 0)
          o in u && i.set(o, de(se));
        else {
          if (a && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(o);
            Number.isInteger(d) && d < c.v && Y(c, d);
          }
          Y(v, se), dr(l);
        }
        return !0;
      },
      get(u, o, v) {
        var f;
        if (o === De)
          return t;
        var c = i.get(o), d = o in u;
        if (c === void 0 && (!d || (f = He(u, o)) != null && f.writable) && (c = de(B(d ? u[o] : se, s)), i.set(o, c)), c !== void 0) {
          var b = h(c);
          return b === se ? void 0 : b;
        }
        return Reflect.get(u, o, v);
      },
      getOwnPropertyDescriptor(u, o) {
        var v = Reflect.getOwnPropertyDescriptor(u, o);
        if (v && "value" in v) {
          var c = i.get(o);
          c && (v.value = h(c));
        } else if (v === void 0) {
          var d = i.get(o), b = d == null ? void 0 : d.v;
          if (d !== void 0 && b !== se)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return v;
      },
      has(u, o) {
        var b;
        if (o === De)
          return !0;
        var v = i.get(o), c = v !== void 0 && v.v !== se || Reflect.has(u, o);
        if (v !== void 0 || L !== null && (!c || (b = He(u, o)) != null && b.writable)) {
          v === void 0 && (v = de(c ? B(u[o], s) : se), i.set(o, v));
          var d = h(v);
          if (d === se)
            return !1;
        }
        return c;
      },
      set(u, o, v, c) {
        var p;
        var d = i.get(o), b = o in u;
        if (a && o === "length")
          for (var f = v; f < /** @type {Source<number>} */
          d.v; f += 1) {
            var y = i.get(f + "");
            y !== void 0 ? Y(y, se) : f in u && (y = de(se), i.set(f + "", y));
          }
        d === void 0 ? (!b || (p = He(u, o)) != null && p.writable) && (d = de(void 0), Y(d, B(v, s)), i.set(o, d)) : (b = d.v !== se, Y(d, B(v, s)));
        var m = Reflect.getOwnPropertyDescriptor(u, o);
        if (m != null && m.set && m.set.call(c, v), !b) {
          if (a && typeof o == "string") {
            var g = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(o);
            Number.isInteger(_) && _ >= g.v && Y(g, _ + 1);
          }
          dr(l);
        }
        return !0;
      },
      ownKeys(u) {
        h(l);
        var o = Reflect.ownKeys(u).filter((d) => {
          var b = i.get(d);
          return b === void 0 || b.v !== se;
        });
        for (var [v, c] of i)
          c.v !== se && !(v in u) && o.push(v);
        return o;
      },
      setPrototypeOf() {
        Gn();
      }
    }
  );
}
function dr(t, e = 1) {
  Y(t, t.v + e);
}
function vr(t) {
  return t !== null && typeof t == "object" && De in t ? t[De] : t;
}
function di(t, e) {
  return Object.is(vr(t), vr(e));
}
var fr, Xr, Qr;
function Mt() {
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
function qe(t) {
  return Xr.call(t);
}
// @__NO_SIDE_EFFECTS__
function xe(t) {
  return Qr.call(t);
}
function S(t, e) {
  if (!j)
    return /* @__PURE__ */ qe(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ qe(D)
  );
  if (r === null)
    r = D.appendChild(Je());
  else if (e && r.nodeType !== 3) {
    var n = Je();
    return r == null || r.before(n), ve(n), n;
  }
  return ve(r), r;
}
function F(t, e) {
  if (!j) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ qe(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ xe(r) : r;
  }
  return D;
}
function T(t, e = 1, r = !1) {
  let n = j ? D : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ xe(n);
  if (!j)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Je();
    return n == null || n.before(a), ve(a), a;
  }
  return ve(n), /** @type {TemplateNode} */
  n;
}
function er(t) {
  t.textContent = "";
}
let j = !1;
function Ee(t) {
  j = t;
}
let D;
function ve(t) {
  if (t === null)
    throw xt(), je;
  return D = t;
}
function Ue() {
  return ve(
    /** @type {TemplateNode} */
    /* @__PURE__ */ xe(D)
  );
}
function x(t) {
  if (j) {
    if (/* @__PURE__ */ xe(D) !== null)
      throw xt(), je;
    D = t;
  }
}
function en(t = 1) {
  if (j) {
    for (var e = t, r = D; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ xe(r);
    D = r;
  }
}
function jt() {
  for (var t = 0, e = D; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Yt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === wr || r === Gt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ xe(e)
    );
    e.remove(), e = n;
  }
}
function vi(t) {
  j && /* @__PURE__ */ qe(t) !== null && er(t);
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
  var e = P, r = L;
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
  var _;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((_ = t.composedPath) == null ? void 0 : _.call(t)) || [], a = (
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
    var v = P, c = L;
    fe(null), le(null);
    try {
      for (var d, b = []; a !== null; ) {
        var f = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var y = a["__" + n];
          if (y !== void 0 && !/** @type {any} */
          a.disabled)
            if (Kt(y)) {
              var [m, ...g] = y;
              m.apply(a, [t, ...g]);
            } else
              y.call(a, t);
        } catch (p) {
          d ? b.push(p) : d = p;
        }
        if (t.cancelBubble || f === e || f === null)
          break;
        a = f;
      }
      if (d) {
        for (let p of b)
          queueMicrotask(() => {
            throw p;
          });
        throw d;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fe(v), le(c);
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
function q(t, e) {
  var r = (e & zn) !== 0, n = (e & Rn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (j)
      return Ae(D, null), D;
    i === void 0 && (i = nn(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ qe(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(l)
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
  if (j)
    return Ae(D, null), D;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Je();
  return t.append(e, r), Ae(e, r), t;
}
function C(t, e) {
  if (j) {
    L.nodes_end = D, Ue();
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
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function an(t, e) {
  return ln(t, e);
}
function gi(t, e) {
  Mt(), e.intro = e.intro ?? !1;
  const r = e.target, n = j, i = D;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ qe(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== wr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ xe(a);
    if (!a)
      throw je;
    Ee(!0), ve(
      /** @type {Comment} */
      a
    ), Ue();
    const l = ln(t, { ...e, anchor: a });
    if (D === null || D.nodeType !== 8 || /** @type {Comment} */
    D.data !== Yt)
      throw xt(), je;
    return Ee(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === je)
      return e.recover === !1 && Pn(), Mt(), er(r), Ee(!1), an(t, e);
    throw l;
  } finally {
    Ee(n), ve(i);
  }
}
const Le = /* @__PURE__ */ new Map();
function ln(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Mt();
  var s = /* @__PURE__ */ new Set(), u = (c) => {
    for (var d = 0; d < c.length; d++) {
      var b = c[d];
      if (!s.has(b)) {
        s.add(b);
        var f = pi(b);
        e.addEventListener(b, ot, { passive: f });
        var y = Le.get(b);
        y === void 0 ? (document.addEventListener(b, ot, { passive: f }), Le.set(b, 1)) : Le.set(b, y + 1);
      }
    }
  };
  u(Wt(rn)), Dt.add(u);
  var o = void 0, v = Rr(() => {
    var c = r ?? e.appendChild(Je());
    return Ve(() => {
      if (a) {
        ee({});
        var d = (
          /** @type {ComponentContext} */
          me
        );
        d.c = a;
      }
      i && (n.$$events = i), j && Ae(
        /** @type {TemplateNode} */
        c,
        null
      ), Ft = l, o = t(c, n) || {}, Ft = !0, j && (L.nodes_end = D), a && te();
    }), () => {
      var f;
      for (var d of s) {
        e.removeEventListener(d, ot);
        var b = (
          /** @type {number} */
          Le.get(d)
        );
        --b === 0 ? (document.removeEventListener(d, ot), Le.delete(d)) : Le.set(d, b);
      }
      Dt.delete(u), Bt.delete(o), c !== r && ((f = c.parentNode) == null || f.removeChild(c));
    };
  });
  return Bt.set(o, v), o;
}
let Bt = /* @__PURE__ */ new WeakMap();
function _i(t) {
  const e = Bt.get(t);
  e && e();
}
function R(t, e, r, n = null, i = !1) {
  j && Ue();
  var a = t, l = null, s = null, u = null, o = i ? kt : 0;
  St(() => {
    if (u === (u = !!e())) return;
    let v = !1;
    if (j) {
      const c = (
        /** @type {Comment} */
        a.data === Gt
      );
      u === c && (a = jt(), ve(a), Ee(!1), v = !0);
    }
    u ? (l ? gt(l) : l = Ve(() => r(a)), s && Ht(s, () => {
      s = null;
    })) : (s ? gt(s) : n && (s = Ve(() => n(a))), l && Ht(l, () => {
      l = null;
    })), v && Ee(!0);
  }, o), j && (a = D);
}
function Z(t, e) {
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
    ), n.clear(), Ne(t, e[0].prev, e[a - 1].next);
  }
  jr(i, () => {
    for (var o = 0; o < a; o++) {
      var v = e[o];
      s || (n.delete(v.k), Ne(t, v.prev, v.next)), ze(v.e, !s);
    }
  });
}
function X(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & yr) !== 0;
  if (u) {
    var o = (
      /** @type {Element} */
      t
    );
    l = j ? ve(
      /** @type {Comment | Text} */
      /* @__PURE__ */ qe(o)
    ) : o.appendChild(Je());
  }
  j && Ue();
  var v = null, c = !1;
  St(() => {
    var d = r(), b = Kt(d) ? d : d == null ? [] : Wt(d), f = b.length;
    if (c && f === 0)
      return;
    c = f === 0;
    let y = !1;
    if (j) {
      var m = (
        /** @type {Comment} */
        l.data === Gt
      );
      m !== (f === 0) && (l = jt(), ve(l), Ee(!1), y = !0);
    }
    if (j) {
      for (var g = null, _, p = 0; p < f; p++) {
        if (D.nodeType === 8 && /** @type {Comment} */
        D.data === Yt) {
          l = /** @type {Comment} */
          D, y = !0, Ee(!1);
          break;
        }
        var k = b[p], w = n(k, p);
        _ = sn(D, s, g, null, k, w, p, i, e), s.items.set(w, _), g = _;
      }
      f > 0 && ve(jt());
    }
    if (!j) {
      var I = (
        /** @type {Effect} */
        P
      );
      bi(b, s, l, i, e, (I.f & ge) !== 0, n);
    }
    a !== null && (f === 0 ? v ? gt(v) : v = Ve(() => a(l)) : v !== null && Ht(v, () => {
      v = null;
    })), y && Ee(!0), r();
  }), j && (l = D);
}
function bi(t, e, r, n, i, a, l) {
  var G, Q, he, ye;
  var s = (i & qn) !== 0, u = (i & (Vt | Jt)) !== 0, o = t.length, v = e.items, c = e.first, d = c, b, f = null, y, m = [], g = [], _, p, k, w;
  if (s)
    for (w = 0; w < o; w += 1)
      _ = t[w], p = l(_, w), k = v.get(p), k !== void 0 && ((G = k.a) == null || G.measure(), (y ?? (y = /* @__PURE__ */ new Set())).add(k));
  for (w = 0; w < o; w += 1) {
    if (_ = t[w], p = l(_, w), k = v.get(p), k === void 0) {
      var I = d ? (
        /** @type {TemplateNode} */
        d.e.nodes_start
      ) : r;
      f = sn(
        I,
        e,
        f,
        f === null ? e.first : f.next,
        _,
        p,
        w,
        n,
        i
      ), v.set(p, f), m = [], g = [], d = f.next;
      continue;
    }
    if (u && xi(k, _, w, i), k.e.f & ge && (gt(k.e), s && ((Q = k.a) == null || Q.unfix(), (y ?? (y = /* @__PURE__ */ new Set())).delete(k))), k !== d) {
      if (b !== void 0 && b.has(k)) {
        if (m.length < g.length) {
          var z = g[0], O;
          f = z.prev;
          var U = m[0], V = m[m.length - 1];
          for (O = 0; O < m.length; O += 1)
            pr(m[O], z, r);
          for (O = 0; O < g.length; O += 1)
            b.delete(g[O]);
          Ne(e, U.prev, V.next), Ne(e, f, U), Ne(e, V, z), d = z, f = V, w -= 1, m = [], g = [];
        } else
          b.delete(k), pr(k, d, r), Ne(e, k.prev, k.next), Ne(e, k, f === null ? e.first : f.next), Ne(e, f, k), f = k;
        continue;
      }
      for (m = [], g = []; d !== null && d.k !== p; )
        (a || !(d.e.f & ge)) && (b ?? (b = /* @__PURE__ */ new Set())).add(d), g.push(d), d = d.next;
      if (d === null)
        continue;
      k = d;
    }
    m.push(k), f = k, d = k.next;
  }
  if (d !== null || b !== void 0) {
    for (var N = b === void 0 ? [] : Wt(b); d !== null; )
      (a || !(d.e.f & ge)) && N.push(d), d = d.next;
    var H = N.length;
    if (H > 0) {
      var J = i & yr && o === 0 ? r : null;
      if (s) {
        for (w = 0; w < H; w += 1)
          (he = N[w].a) == null || he.measure();
        for (w = 0; w < H; w += 1)
          (ye = N[w].a) == null || ye.fix();
      }
      mi(e, N, J, v);
    }
  }
  s && Ct(() => {
    var we;
    if (y !== void 0)
      for (k of y)
        (we = k.a) == null || we.apply();
  }), L.first = e.first && e.first.e, L.last = f && f.e;
}
function xi(t, e, r, n) {
  n & Vt && Rt(t.v, e), n & Jt ? Rt(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function sn(t, e, r, n, i, a, l, s, u) {
  var o = (u & Vt) !== 0, v = (u & In) === 0, c = o ? v ? /* @__PURE__ */ Zt(i) : de(i) : i, d = u & Jt ? de(l) : l, b = {
    i: d,
    v: c,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return b.e = Ve(() => s(t, c, d), j), b.e.prev = r && r.e, b.e.next = n && n.e, r === null ? e.first = b : (r.next = b, r.e.next = b.e), n !== null && (n.prev = b, n.e.prev = b.e), b;
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
function Ne(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function yi(t, e, r, n, i) {
  var a = t, l = "", s;
  St(() => {
    if (l === (l = e() ?? "")) {
      j && Ue();
      return;
    }
    s !== void 0 && (ze(s), s = void 0), l !== "" && (s = Ve(() => {
      if (j) {
        D.data;
        for (var u = Ue(), o = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          o = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ xe(u);
        if (u === null)
          throw xt(), je;
        Ae(D, o), a = ve(u);
        return;
      }
      var v = l + "", c = nn(v);
      Ae(
        /** @type {TemplateNode} */
        /* @__PURE__ */ qe(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), a.before(c);
    }));
  });
}
function rr(t, e, r, n, i) {
  var s;
  j && Ue();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function K(t, e) {
  Ct(() => {
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
  if (j) {
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
  j && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Dn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && on(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Ot(t, e, r) {
  var n = P, i = L;
  fe(null), le(null);
  try {
    on(t).includes(e) ? t[e] = r : A(t, e, r);
  } finally {
    fe(n), le(i);
  }
}
var gr = /* @__PURE__ */ new Map();
function on(t) {
  var e = gr.get(t.nodeName);
  if (e) return e;
  gr.set(t.nodeName, e = []);
  for (var r, n = zt(t), i = Element.prototype; i !== n; ) {
    r = Hn(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = zt(n);
  }
  return e;
}
function Ke(t, e) {
  var r = t.__className, n = wi(e);
  j && t.className === n ? t.__className = n : (r !== n || j && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
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
const ki = () => performance.now(), Te = {
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
  Te.tasks.forEach((e) => {
    e.c(t) || (Te.tasks.delete(e), e.f());
  }), Te.tasks.size !== 0 && Te.tick(un);
}
function Ei(t) {
  let e;
  return Te.tasks.size === 0 && Te.tick(un), {
    promise: new Promise((r) => {
      Te.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Te.tasks.delete(e);
    }
  };
}
function ut(t, e) {
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
const Ci = (t) => t;
function qi(t, e, r, n) {
  var i = (t & On) !== 0, a = "both", l, s = e.inert, u, o;
  function v() {
    var y = P, m = L;
    fe(null), le(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      fe(y), le(m);
    }
  }
  var c = {
    is_global: i,
    in() {
      e.inert = s, ut(e, "introstart"), u = Pt(e, v(), o, 1, () => {
        ut(e, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(y) {
      e.inert = !0, ut(e, "outrostart"), o = Pt(e, v(), u, 0, () => {
        ut(e, "outroend"), y == null || y();
      });
    },
    stop: () => {
      u == null || u.abort(), o == null || o.abort();
    }
  }, d = (
    /** @type {Effect} */
    L
  );
  if ((d.transitions ?? (d.transitions = [])).push(c), Ft) {
    var b = i;
    if (!b) {
      for (var f = (
        /** @type {Effect | null} */
        d.parent
      ); f && f.f & kt; )
        for (; (f = f.parent) && !(f.f & wt); )
          ;
      b = !f || (f.f & Cr) !== 0;
    }
    b && at(() => {
      bt(() => c.in());
    });
  }
}
function Pt(t, e, r, n, i) {
  var a = n === 1;
  if (Mn(e)) {
    var l, s = !1;
    return Ct(() => {
      if (!s) {
        var m = e({ direction: a ? "in" : "out" });
        l = Pt(t, m, r, n, i);
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
  const { delay: u = 0, css: o, tick: v, easing: c = Ci } = e;
  var d = [];
  if (a && r === void 0 && (v && v(0, 1), o)) {
    var b = _r(o(0, 1));
    d.push(b, b);
  }
  var f = () => 1 - n, y = t.animate(d, { duration: u });
  return y.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var g = n - m, _ = (
      /** @type {number} */
      e.duration * Math.abs(g)
    ), p = [];
    if (_ > 0) {
      if (o)
        for (var k = Math.ceil(_ / 16.666666666666668), w = 0; w <= k; w += 1) {
          var I = m + g * c(w / k), z = o(I, 1 - I);
          p.push(_r(z));
        }
      f = () => {
        var O = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          y.currentTime
        );
        return m + g * c(O / _);
      }, v && Ei(() => {
        if (y.playState !== "running") return !1;
        var O = f();
        return v(O, 1 - O), !0;
      });
    }
    y = t.animate(p, { duration: _, fill: "forwards" }), y.onfinish = () => {
      f = () => n, v == null || v(n, 1 - n), i();
    };
  }, {
    abort: () => {
      y && (y.cancel(), y.effect = null, y.onfinish = Ye);
    },
    deactivate: () => {
      i = Ye;
    },
    reset: () => {
      n === 0 && (v == null || v(1, 0));
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
    if (j && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    mr(t) && n === br(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function Ii(t, e, r = e) {
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
function cn(t, e, r) {
  if (t.multiple)
    return Ti(t, e);
  for (var n of t.options) {
    var i = We(n);
    if (di(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Ni(t, e) {
  at(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      cn(t, n);
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
function dn(t, e, r = e) {
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
    if (cn(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = We(a), r(i));
    }
    t.__value = i, n = !1;
  }), Ni(t);
}
function Ti(t, e) {
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
      Ct(() => {
        a && xr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let ct = !1;
function $i(t) {
  var e = ct;
  try {
    return ct = !1, [t(), ct];
  } finally {
    ct = e;
  }
}
function Ai(t) {
  for (var e = L, r = L; e !== null && !(e.f & (be | tt)); )
    e = e.parent;
  try {
    return le(e), t();
  } finally {
    le(r);
  }
}
function E(t, e, r, n) {
  var w;
  var i = (r & Nn) !== 0, a = !Tr, l = (r & $n) !== 0, s = (r & An) !== 0, u = !1, o;
  l ? [o, u] = $i(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var v = (w = He(t, e)) == null ? void 0 : w.set, c = (
    /** @type {V} */
    n
  ), d = !0, b = !1, f = () => (b = !0, d && (d = !1, s ? c = bt(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  o === void 0 && n !== void 0 && (v && a && Vn(), o = f(), v && v(o));
  var y;
  if (y = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? f() : (d = !0, b = !1, I);
  }, !(r & Tn))
    return y;
  if (v) {
    var m = t.$$legacy;
    return function(I, z) {
      return arguments.length > 0 ? ((!z || m || u) && v(z ? y() : I), I) : y();
    };
  }
  var g = !1, _ = !1, p = /* @__PURE__ */ Zt(o), k = Ai(
    () => /* @__PURE__ */ Ze(() => {
      var I = y(), z = h(p);
      return g ? (g = !1, _ = !0, z) : (_ = !1, p.v = I);
    })
  );
  return i || (k.equals = Nr), function(I, z) {
    if (arguments.length > 0) {
      const O = z ? h(k) : l ? B(I) : I;
      return k.equals(O) || (g = !0, Y(p, O), b && c !== void 0 && (c = O), bt(() => h(k))), I;
    }
    return h(k);
  };
}
function Oi(t) {
  return new zi(t);
}
var ke, ce;
class zi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    $t(this, ke);
    /** @type {Record<string, any>} */
    $t(this, ce);
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
          return Y(r.get(s) ?? n(s, u), u), Reflect.set(l, s, u);
        }
      }
    );
    At(this, ce, (e.hydrate ? gi : an)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Zr(), At(this, ke, i.$$events);
    for (const l of Object.keys(ae(this, ce)))
      l === "$set" || l === "$destroy" || l === "$on" || ht(this, l, {
        get() {
          return ae(this, ce)[l];
        },
        /** @param {any} value */
        set(s) {
          ae(this, ce)[l] = s;
        },
        enumerable: !0
      });
    ae(this, ce).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, ae(this, ce).$destroy = () => {
      _i(ae(this, ce));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ae(this, ce).$set(e);
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
    ae(this, ce).$destroy();
  }
}
ke = new WeakMap(), ce = new WeakMap();
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
          i !== "default" && (l.name = i), C(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Ri(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = vt(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = Oi({
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
            const l = vt(
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
    return ft(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function vt(t, e, r, n) {
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
function W(t, e, r, n, i, a) {
  let l = class extends vn {
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
        var c;
        u = vt(s, u, e), this.$$d[s] = u;
        var o = this.$$c;
        if (o) {
          var v = (c = He(o, s)) == null ? void 0 : c.get;
          v ? o[s] = u : o.$set({ [s]: u });
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
var Hi = /* @__PURE__ */ q('<button type="button"><!></button>');
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
  rr(l, e, "default", {}), x(a), $(() => Ke(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), C(t, a);
}
re(["click"]);
customElements.define("ing-button", W(Li, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Mi = /* @__PURE__ */ q('<button type="button"><!></button>');
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
  rr(a, e, "default", {}), x(i), $(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), C(t, i);
}
re(["click"]);
customElements.define("ing-button-gray", W(Di, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Fi = /* @__PURE__ */ q('<div class="input_label svelte-1485t9m"> </div>'), Bi = /* @__PURE__ */ q('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Pi = (t, e) => {
  e(t);
}, Vi = /* @__PURE__ */ q('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Ji = (t, e) => {
  e(t);
}, Gi = /* @__PURE__ */ q('<input class="input_field svelte-1485t9m" form="">'), Yi = /* @__PURE__ */ q('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const Ki = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function Nt(t, e) {
  ee(e, !0), K(t, Ki);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "type", 3, "text"), l = E(e, "placeholder", 3, ""), s = E(e, "input", 15, ""), u = E(e, "inputStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const v = (m) => {
    if (m && m.target) {
      let g = "";
      m.target.value && (g = m.target.value), o() && o()(r(), g), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: g }
      }));
    }
  };
  var c = Yi(), d = S(c);
  R(d, n, (m) => {
    var g = Fi(), _ = S(g, !0);
    x(g), $(() => M(_, n())), C(m, g);
  });
  var b = T(d, 2), f = S(b);
  R(f, i, (m) => {
    var g = Bi(), _ = F(g), p = S(_);
    x(_), en(), $(() => A(p, "src", i())), C(m, g);
  });
  var y = T(f, 2);
  R(
    y,
    () => a() == "textarea",
    (m) => {
      var g = Vi();
      vi(g), g.__input = [Pi, v], $(() => {
        A(g, "id", r()), A(g, "name", r()), A(g, "placeholder", l());
      }), et(g, s), C(m, g);
    },
    (m) => {
      var g = Gi();
      st(g), g.__input = [Ji, v], $(() => {
        A(g, "id", r()), A(g, "name", r()), A(g, "type", a()), A(g, "placeholder", l());
      }), et(g, s), C(m, g);
    }
  ), x(b), x(c), $(() => A(c, "style", u())), C(t, c), te();
}
re(["input"]);
customElements.define("ing-input", W(
  Nt,
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
var Wi = /* @__PURE__ */ q('<a class="svelte-hcumdc"> </a>'), Zi = (t, e, r) => e(h(r).title), Xi = /* @__PURE__ */ q('<button class="menu_item_button svelte-hcumdc"> </button>'), Qi = /* @__PURE__ */ q('<div class="menu_item svelte-hcumdc"><!></div>'), ea = /* @__PURE__ */ q('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const ta = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function ir(t, e) {
  ee(e, !0), K(t, ta);
  let r = E(e, "position", 19, () => ({})), n = E(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = ea(), l = T(S(a), 2);
  X(l, 21, n, Z, (s, u) => {
    var o = Qi(), v = S(o);
    R(
      v,
      () => h(u).url,
      (c) => {
        var d = Wi(), b = S(d, !0);
        x(d), $(() => {
          A(d, "href", h(u).url), M(b, h(u).title);
        }), C(c, d);
      },
      (c) => {
        var d = Xi();
        d.__click = [Zi, i, u];
        var b = S(d, !0);
        x(d), $(() => M(b, h(u).title)), C(c, d);
      }
    ), x(o), C(s, o);
  }), x(l), x(a), $(() => A(a, "style", `top: ${r().top}; left: ${r().left};`)), C(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-dropdown", W(ir, { position: {}, menuItems: {} }, [], [], !0));
var ra = /* @__PURE__ */ q('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), na = (t, e) => {
  Y(e, !h(e));
}, ia = /* @__PURE__ */ q('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), aa = /* @__PURE__ */ q("<span></span>"), la = /* @__PURE__ */ q('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const sa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function fn(t, e) {
  ee(e, !0), K(t, sa), E(e, "title", 3, "Apint.org");
  const r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !1), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, "");
  let s = "", u = Se(!1), o = Se(void 0);
  function v() {
    let g = {}, _;
    if (h(o) && (_ = h(o)), _) {
      var p = _.getBoundingClientRect();
      g.top = (p.top + p.height + 12).toString() + "px", g.left = (p.left - 115).toString() + "px", console.log(g);
    }
    return g;
  }
  var c = la(), d = S(c), b = S(d);
  Nt(b, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var f = T(b, 2);
  f.textContent = s, x(d);
  var y = T(d, 2), m = S(y);
  R(
    m,
    i,
    (g) => {
      var _ = ia(), p = F(_), k = S(p);
      R(k, n, (V) => {
        var N = ra(), H = F(N);
        en(2), $(() => A(H, "src", n())), C(V, N);
      });
      var w = T(k, 2);
      w.__click = [na, u];
      var I = S(w), z = T(I, 2), O = S(z, !0);
      x(z), x(w), nr(w, (V) => Y(o, V), () => h(o)), x(p);
      var U = T(p, 2);
      R(U, () => h(u), (V) => {
        var N = /* @__PURE__ */ Ze(v);
        ir(V, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return h(N);
          }
        });
      }), $(() => {
        A(I, "src", l()), M(O, a());
      }), C(g, _);
    },
    (g) => {
      var _ = ie(), p = F(_);
      R(
        p,
        i,
        (k) => {
          var w = aa();
          C(k, w);
        },
        null,
        !0
      ), C(g, _);
    }
  ), x(y), x(c), C(t, c), te();
}
re(["click"]);
customElements.define("ing-headerlite", W(
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
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", u = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], v = o.map(
    (g) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${g[0].toUpperCase()}${g.slice(1)}`
    )
  ), c = parseFloat(a[`padding${v[0]}`]), d = parseFloat(a[`padding${v[1]}`]), b = parseFloat(a[`margin${v[0]}`]), f = parseFloat(a[`margin${v[1]}`]), y = parseFloat(
    a[`border${v[0]}Width`]
  ), m = parseFloat(
    a[`border${v[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (g) => `overflow: hidden;opacity: ${Math.min(g * 20, 1) * l};${s}: ${g * u}px;padding-${o[0]}: ${g * c}px;padding-${o[1]}: ${g * d}px;margin-${o[0]}: ${g * b}px;margin-${o[1]}: ${g * f}px;border-${o[0]}-width: ${g * y}px;border-${o[1]}-width: ${g * m}px;`
  };
}
function ca(t) {
  return t;
}
var da = (t, e, r) => e(h(r).title), va = /* @__PURE__ */ q('<img alt="option" width="18px">'), fa = /* @__PURE__ */ q('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ha = /* @__PURE__ */ q('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), pa = (t, e, r) => e(h(r).title), ga = /* @__PURE__ */ q('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), _a = /* @__PURE__ */ q('<div class="menu_item_frame svelte-v1mgvt"></div>'), ma = /* @__PURE__ */ q('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), ba = /* @__PURE__ */ q('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
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
  let o = B({});
  if (s()) {
    o[s()] = !0;
    for (let _ of u().items)
      if (_.subitems) {
        for (let p of _.subitems)
          if (p.title == s()) {
            o[_.title] = !0;
            break;
          }
      }
  }
  let v = (_) => {
    let p = u().items.find((k) => k.title === _);
    o[_] ? p && (!p.url || p.url === "#") && (o[_] = !o[_]) : o[_] = !0;
  };
  var c = ba(), d = S(c), b = S(d);
  X(b, 21, () => u().items, Z, (_, p) => {
    var k = ma(), w = F(k);
    w.__click = [da, v, p];
    var I = S(w), z = S(I), O = S(z);
    R(
      O,
      () => h(p).icon,
      (J) => {
        var G = va();
        $(() => A(G, "src", h(p).icon)), C(J, G);
      },
      (J) => {
        var G = fa();
        C(J, G);
      }
    ), x(z);
    var U = T(z, 2), V = S(U, !0);
    x(U);
    var N = T(U, 2);
    R(N, () => h(p).subitems, (J) => {
      var G = ha();
      $(() => Ke(G, `${(o[h(p).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), C(J, G);
    }), x(I), x(w);
    var H = T(w, 2);
    R(H, () => o[h(p).title] && h(p).subitems, (J) => {
      var G = _a();
      X(G, 21, () => h(p).subitems, Z, (he, ye) => {
        var we = ga();
        we.__click = [pa, v, ye];
        var lr = S(we), sr = T(S(lr), 2), kn = S(sr, !0);
        x(sr), x(lr), x(we), $(() => {
          A(we, "href", h(ye).url), Ke(we, `${(h(ye).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(kn, h(ye).title);
        }), C(he, we);
      }), x(G), qi(3, G, () => ua, () => ({ duration: 300, easing: ca })), C(J, G);
    }), $(() => {
      A(w, "href", h(p).url), Ke(w, `${(h(p).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(V, h(p).title);
    }), C(_, k);
  }), x(b), x(d);
  var f = T(d, 2), y = S(f);
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
  var m = T(y, 2), g = S(m);
  rr(g, e, "default", {}), x(m), x(f), x(c), C(t, c), te();
}
re(["click"]);
customElements.define("ing-buffet", W(
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
var wa = /* @__PURE__ */ q('<div class="input_label svelte-18z4bwo"> </div>'), ka = /* @__PURE__ */ q('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Ea = (t, e) => {
  e(t);
}, Sa = /* @__PURE__ */ q("<option> </option>"), Ca = /* @__PURE__ */ q('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const qa = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function ar(t, e) {
  ee(e, !0), K(t, qa);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "placeholder", 3, ""), l = E(e, "items", 3, ""), s = E(e, "value", 15, ""), u = E(e, "selectStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let v = l().split(",");
  const c = (g) => {
    if (g && g.target) {
      let _ = "";
      g.target.value && (_ = g.target.value), o() && o()(r(), _), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: _ }
      }));
    }
  };
  var d = Ca(), b = S(d);
  R(b, n, (g) => {
    var _ = wa(), p = S(_, !0);
    x(_), $(() => M(p, n())), C(g, _);
  });
  var f = T(b, 2), y = S(f);
  R(y, i, (g) => {
    var _ = ka(), p = S(_);
    x(_), $(() => A(p, "src", i())), C(g, _);
  });
  var m = T(y, 2);
  m.__input = [Ea, c], X(m, 21, () => v, Z, (g, _) => {
    var p = Sa(), k = {}, w = S(p, !0);
    x(p), $(() => {
      k !== (k = h(_)) && (p.value = (p.__value = h(_)) == null ? "" : h(_)), M(w, h(_));
    }), C(g, p);
  }), x(m), x(f), x(d), $(() => {
    A(d, "style", u()), A(m, "placeholder", a());
  }), dn(m, s), C(t, d), te();
}
re(["input"]);
customElements.define("ing-select", W(
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
var Ia = /* @__PURE__ */ q('<div style="width: 100%;"><h3> </h3></div>'), Na = /* @__PURE__ */ q('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Ta = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function $a(t, e) {
  ee(e, !0), K(t, Ta);
  let r = E(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let u = {};
    for (const [o, v] of Object.entries(r().properties))
      u[o] = v.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: u } }));
  }
  var i = Na(), a = S(i);
  R(a, r, (u) => {
    var o = ie(), v = F(o);
    X(v, 17, () => Object.entries(r().properties), Z, (c, d) => {
      let b = () => h(d)[0], f = () => h(d)[1];
      var y = ie(), m = F(y);
      R(
        m,
        () => f().format == "header",
        (g) => {
          var _ = Ia(), p = S(_), k = S(p, !0);
          x(p), x(_), $(() => M(k, f().value)), C(g, _);
        },
        (g) => {
          var _ = ie(), p = F(_);
          R(
            p,
            () => f().format == "select",
            (k) => {
              var w = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
              ar(k, {
                get input() {
                  return f().value;
                },
                set input(I) {
                  f().value = I;
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
              var w = ie(), I = F(w);
              R(
                I,
                () => f().type == "string",
                (z) => {
                  var O = /* @__PURE__ */ Ze(() => "width: " + f().length + ";");
                  Nt(z, {
                    get inputId() {
                      return b();
                    },
                    get inputStyle() {
                      return h(O);
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
                    set input(U) {
                      f().value = U;
                    }
                  });
                },
                null,
                !0
              ), C(k, w);
            },
            !0
          ), C(g, _);
        }
      ), C(c, y);
    }), C(u, o);
  });
  var l = T(a, 2), s = S(l);
  Ot(s, "size", "small"), Ot(s, "id", "submit-button"), Ot(s, "type", "secondary"), s.__click = n, x(l), x(i), C(t, i), te();
}
re(["click"]);
customElements.define("ing-form", W($a, { schema: {} }, [], [], !0));
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
    Y(a, B(l));
  } else
    Y(a, B(r()));
}
var Oa = /* @__PURE__ */ q('<th class="svelte-15ql2st"> </th>'), za = /* @__PURE__ */ q('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Ra = /* @__PURE__ */ q('<tr class="svelte-15ql2st"></tr>'), Ha = /* @__PURE__ */ q('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
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
  let u = Se(B(i())), o = Se("");
  const v = (p) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: p } })), s() && s()({ detail: { rowIndex: p } });
  };
  var c = Ha(), d = S(c), b = T(S(d), 2), f = T(S(b));
  st(f), f.__keyup = [
    Aa,
    o,
    i,
    r,
    n,
    u
  ], x(b), x(d);
  var y = T(d, 2), m = S(y), g = S(m);
  X(g, 21, r, Z, (p, k) => {
    var w = Oa(), I = S(w, !0);
    x(w), $(() => M(I, h(k))), C(p, w);
  }), x(g), x(m);
  var _ = T(m);
  X(_, 21, () => h(u), Z, (p, k, w) => {
    var I = Ra();
    I.__click = () => {
      v(w);
    }, X(I, 21, () => Object.entries(h(k)), Z, (O, U) => {
      var V = za(), N = S(V), H = S(N, !0);
      x(N), x(V), $(() => {
        A(N, "href", a() + h(k)[l()]), M(H, h(U)[1]);
      }), C(O, V);
    }), x(I), C(p, I);
  }), x(_), x(y), x(c), et(f, () => h(o), (p) => Y(o, p)), C(t, c), te();
}
re(["keyup", "click"]);
customElements.define("ing-table", W(
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
var Ma = /* @__PURE__ */ q('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), ja = /* @__PURE__ */ q('<span class="title_text svelte-hi9ips"> </span>'), Da = /* @__PURE__ */ q('<a class="title svelte-hi9ips"><!> <!></a>'), Fa = (t, e, r) => e(t, h(r).title), Ba = /* @__PURE__ */ q('<img class="menu_icon svelte-hi9ips">'), Pa = (t, e, r) => e(t, h(r)), Va = /* @__PURE__ */ q('<span class="menu_text svelte-hi9ips"> </span>'), Ja = /* @__PURE__ */ q('<button class="menu_button svelte-hi9ips"><!></button> <!>', 1), Ga = /* @__PURE__ */ q('<div class="header svelte-hi9ips"><!> <div class="right_menus svelte-hi9ips"></div></div>');
const Ya = {
  hash: "svelte-hi9ips",
  code: ".header.svelte-hi9ips {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-hi9ips {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-hi9ips:link {text-decoration:none;}.title.svelte-hi9ips:visited {text-decoration:none;color:#222;}.title.svelte-hi9ips:hover {text-decoration:none;color:darkgray}.title.svelte-hi9ips:active {text-decoration:none;}.title_text.svelte-hi9ips {display:flex;align-items:center;}.right_menus.svelte-hi9ips {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-hi9ips {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-hi9ips {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-hi9ips:hover {cursor:pointer;}.menu_text.svelte-hi9ips {font-weight:700;}.round.svelte-hi9ips {height:40px;width:40px;border-radius:50%;}"
};
function Tt(t, e) {
  ee(e, !0), K(t, Ya);
  let r = E(e, "title", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = B({}), s = B({});
  function u(y, m) {
    y && y.stopPropagation();
    for (const g of Object.keys(l))
      g != m && (l[g] = !1);
    l[m] ? l[m] = !1 : l[m] = !0;
  }
  function o(y, m) {
    y.stopPropagation(), m.titleUrl ? window.location.href = m.titleUrl : document.dispatchEvent(new CustomEvent(m.title, { detail: {} }));
  }
  function v(y) {
    let m = {}, g;
    if (s[y] && (g = s[y]), g) {
      var _ = g.getBoundingClientRect();
      m.top = (_.top + _.height + 12).toString() + "px", m.left = (_.left - 150).toString() + "px", console.log(m);
    } else
      console.log("Could not find element with id: " + y);
    return m;
  }
  function c(y) {
    return y.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const m of Object.keys(l))
      l[m] = !1;
  };
  var d = Ga(), b = S(d);
  R(b, () => r() || i(), (y) => {
    var m = Da(), g = S(m);
    R(g, i, (p) => {
      var k = Ma();
      $(() => A(k, "src", i())), C(p, k);
    });
    var _ = T(g, 2);
    R(_, r, (p) => {
      var k = ja(), w = S(k, !0);
      x(k), $(() => M(w, r())), C(p, k);
    }), x(m), $(() => A(m, "href", n())), C(y, m);
  });
  var f = T(b, 2);
  X(f, 21, a, Z, (y, m) => {
    var g = Ja(), _ = F(g);
    $(() => A(_, "id", c(h(m).title + "_button"))), _.__click = [Fa, u, m];
    var p = S(_);
    R(
      p,
      () => h(m).imageUrl,
      (w) => {
        var I = Ba();
        nr(I, (z, O) => s[c(O.title + "_button")] = z, (z) => s == null ? void 0 : s[c(z.title + "_button")], () => [h(m)]), $(() => {
          A(I, "alt", h(m).title), A(I, "src", h(m).imageUrl), Pe(I, "round", h(m).imageShape === "round");
        }), C(w, I);
      },
      (w) => {
        var I = Va();
        I.__click = [Pa, o, m];
        var z = S(I, !0);
        x(I), $(() => M(z, h(m).title)), C(w, I);
      }
    ), x(_);
    var k = T(_, 2);
    R(k, () => l[h(m).title], (w) => {
      var I = /* @__PURE__ */ Ze(() => v(c(h(m).title + "_button")));
      ir(w, {
        get menuItems() {
          return h(m).items;
        },
        get position() {
          return h(I);
        }
      });
    }), C(y, g);
  }), x(f), x(d), C(t, d), te();
}
re(["click"]);
customElements.define("mv-elegant-header", W(
  Tt,
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
  e.searchloadresults && Y(r, B(e.searchloadresults(n())));
}
function Wa(t, e, r, n) {
  t.key === "Escape" ? Y(e, B([])) : t.key === "Enter" ? (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n("")) : (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })));
}
var Za = /* @__PURE__ */ q('<div class="result svelte-ihhy65"> </div>'), Xa = /* @__PURE__ */ q('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Qa = /* @__PURE__ */ q('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const el = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function hn(t, e) {
  ee(e, !0), K(t, el);
  let r = E(e, "searchtext", 15), n = Se(B([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && Y(n, B(o.detail.results));
  });
  var i = Qa(), a = F(i), l = S(a), s = T(S(l), 2);
  st(s), s.__input = [Ka, e, n, r], s.__keyup = [Wa, n, e, r], x(l), x(a);
  var u = T(a, 2);
  R(u, () => h(n).length > 0, (o) => {
    var v = Xa(), c = S(v), d = S(c);
    X(d, 21, () => h(n), Z, (b, f) => {
      var y = Za(), m = S(y, !0);
      x(y), $(() => M(m, h(f))), C(b, y);
    }), x(d), x(c), x(v), C(o, v);
  }), et(s, r), C(t, i), te();
}
re(["input", "keyup"]);
customElements.define("mv-elegant-search", W(
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
var tl = /* @__PURE__ */ q('<img class="hero_image svelte-e621nb" alt="logo">'), rl = /* @__PURE__ */ q('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const nl = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function pn(t, e) {
  K(t, nl);
  let r = E(e, "height", 3, "80px"), n = E(e, "title", 3, ""), i = E(e, "titleImageUrl", 3, ""), a = E(e, "searchtext", 15);
  var l = rl(), s = S(l), u = S(s);
  R(u, i, (b) => {
    var f = tl();
    $(() => {
      A(f, "height", `${r()}`), A(f, "src", i());
    }), C(b, f);
  });
  var o = T(u, 2), v = S(o, !0);
  x(o), x(s);
  var c = T(s, 2), d = S(c);
  hn(d, {
    get searchtext() {
      return a();
    },
    set searchtext(b) {
      a(b);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), x(c), x(l), $(() => {
    A(s, "style", `height: ${r()};`), M(v, n());
  }), C(t, l);
}
customElements.define("mv-elegant-hero-search", W(
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
var il = /* @__PURE__ */ q('<img alt="category icon" class="svelte-1yyvu4g">'), al = /* @__PURE__ */ q('<span class="card_symbol svelte-1yyvu4g"> </span>'), ll = /* @__PURE__ */ q('<img class="header_image svelte-1yyvu4g" alt="header preview">'), sl = /* @__PURE__ */ q('<img alt="profile" class="svelte-1yyvu4g">'), ol = /* @__PURE__ */ q('<img alt="category icon" class="svelte-1yyvu4g">'), ul = /* @__PURE__ */ q('<span class="card_symbol svelte-1yyvu4g"> </span>'), cl = /* @__PURE__ */ q('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><!> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
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
  var n = cl(), i = S(n), a = S(i), l = S(a, !0);
  x(a);
  var s = T(a, 2);
  X(s, 21, () => r().categories, Z, (k, w) => {
    var I = ie(), z = F(I);
    R(
      z,
      () => h(w).imageUrl,
      (O) => {
        var U = il();
        $(() => {
          A(U, "src", h(w).imageUrl), A(U, "title", h(w).name);
        }), C(O, U);
      },
      (O) => {
        var U = ie(), V = F(U);
        R(
          V,
          () => h(w).symbol,
          (N) => {
            var H = al(), J = S(H, !0);
            x(H), $(() => {
              A(H, "title", h(w).name), M(J, h(w).symbol);
            }), C(N, H);
          },
          null,
          !0
        ), C(O, U);
      }
    ), C(k, I);
  }), x(s), x(i);
  var u = T(i, 2);
  R(u, () => r().imageUrl, (k) => {
    var w = ll();
    $(() => A(w, "src", r().imageUrl)), C(k, w);
  });
  var o = T(u, 2), v = S(o, !0);
  x(o);
  var c = T(o, 2), d = S(c);
  R(d, () => r().authorImageUrl, (k) => {
    var w = sl();
    $(() => A(w, "src", r().authorImageUrl)), C(k, w);
  });
  var b = T(d);
  x(c);
  var f = T(c, 2), y = S(f), m = S(y, !0);
  x(y);
  var g = T(y, 2), _ = S(g), p = T(_, 2);
  X(p, 21, () => r().types, Z, (k, w) => {
    var I = ie(), z = F(I);
    R(
      z,
      () => h(w).imageUrl,
      (O) => {
        var U = ol();
        $(() => {
          A(U, "src", h(w).imageUrl), A(U, "title", h(w).name);
        }), C(O, U);
      },
      (O) => {
        var U = ie(), V = F(U);
        R(
          V,
          () => h(w).symbol,
          (N) => {
            var H = ul(), J = S(H, !0);
            x(H), $(() => {
              A(H, "title", h(w).name), M(J, h(w).symbol);
            }), C(N, H);
          },
          null,
          !0
        ), C(O, U);
      }
    ), C(k, I);
  }), x(p), x(g), x(f), x(n), $(() => {
    M(l, r().dateTime), A(o, "href", r().link), M(v, r().title), A(c, "href", r().authorUrl), M(b, ` ${r().authorName ?? ""}`), M(m, r().description), A(_, "href", r().link);
  }), C(t, n), te();
}
customElements.define("mv-elegant-card", W(gn, { item: {} }, [], [], !0));
var vl = /* @__PURE__ */ q('<div class="menu_frame svelte-1dvvvu9"></div>');
const fl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function _n(t, e) {
  K(t, fl);
  let r = E(e, "items", 31, () => B([]));
  typeof r() == "string" && r(JSON.parse(r()));
  var n = vl();
  X(n, 21, r, Z, (i, a) => {
    var l = ie(), s = F(l);
    R(s, () => !h(a).hidden, (u) => {
      gn(u, {
        get item() {
          return h(a);
        }
      });
    }), C(i, l);
  }), x(n), C(t, n);
}
customElements.define("mv-elegant-cardpage", W(_n, { items: {} }, [], [], !0));
var hl = (t, e, r) => e(h(r).name), pl = /* @__PURE__ */ q('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), gl = /* @__PURE__ */ q('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const _l = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function mn(t, e) {
  ee(e, !0), K(t, _l);
  let r = E(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = B({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = gl();
  X(a, 21, r, Z, (l, s) => {
    var u = pl(), o = S(u);
    o.__click = [hl, i, s];
    var v = S(o, !0);
    x(o);
    var c = T(o, 2), d = S(c, !0);
    x(c), x(u), $(() => {
      Pe(o, "letter_selected", n[h(s).name]), M(v, h(s).symbol), M(d, h(s).name);
    }), C(l, u);
  }), x(a), C(t, a), te();
}
re(["click"]);
customElements.define("mv-elegant-filtercats", W(mn, { categories: {}, categoryselect: {} }, [], [], !0));
function ml(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var bl = /* @__PURE__ */ q('<option class="svelte-3qfq5d"> </option>'), xl = /* @__PURE__ */ q('<div class="select svelte-3qfq5d"><select name="source" id="source" class="svelte-3qfq5d"></select></div>');
const yl = {
  hash: "svelte-3qfq5d",
  code: `.select.svelte-3qfq5d,
	.select.svelte-3qfq5d :where(.svelte-3qfq5d) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-3qfq5d {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d):active,
	.select.svelte-3qfq5d select:where(.svelte-3qfq5d):focus {outline:none;box-shadow:none;}.select.svelte-3qfq5d:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function bn(t, e) {
  ee(e, !0), K(t, yl);
  let r = E(e, "input", 15), n = E(e, "options", 19, () => []);
  var i = xl(), a = S(i);
  a.__input = [ml, r, e], X(a, 21, n, Z, (l, s) => {
    var u = bl(), o = {}, v = S(u, !0);
    x(u), $(() => {
      o !== (o = h(s)) && (u.value = (u.__value = h(s)) == null ? "" : h(s)), M(v, h(s));
    }), C(l, u);
  }), x(a), x(i), dn(a, r), C(t, i), te();
}
re(["input"]);
customElements.define("mv-elegant-select", W(bn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function wl(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var kl = (t, e, r) => e(h(r).name), El = /* @__PURE__ */ q('<div class="icon svelte-lvweti">✓</div>'), Sl = /* @__PURE__ */ q('<div class="icon svelte-lvweti"> </div>'), Cl = /* @__PURE__ */ q('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), ql = /* @__PURE__ */ q('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Il = /* @__PURE__ */ q('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), Nl = /* @__PURE__ */ q('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Tl = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function xn(t, e) {
  ee(e, !0), K(t, Tl);
  let r = E(e, "types", 7), n = E(e, "sortSelected", 15, ""), i = E(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let a = e.sortTypes.split(",").map((y) => y.trim());
  n() || n(a[0]);
  let l = B({});
  function s(y) {
    l[y] ? l[y] = !1 : l[y] = !0, e.onTypeSelect && (console.log("sending type selected data: " + JSON.stringify(l)), e.onTypeSelect(l));
  }
  function u(y) {
    e.onSortSelect && e.onSortSelect(y);
  }
  var o = Nl(), v = S(o);
  X(v, 21, r, Z, (y, m) => {
    var g = Cl();
    g.__click = [kl, s, m];
    var _ = S(g);
    R(
      _,
      () => l[h(m).name] === !0,
      (w) => {
        var I = El();
        C(w, I);
      },
      (w) => {
        var I = Sl(), z = S(I, !0);
        x(I), $(() => M(z, h(m).symbol)), C(w, I);
      }
    );
    var p = T(_, 2), k = S(p, !0);
    x(p), x(g), $(() => {
      Pe(g, "filterbar_option_selected", l[h(m).name]), M(k, h(m).name);
    }), C(y, g);
  }), x(v);
  var c = T(v, 2), d = S(c);
  d.__click = [wl, i, e];
  var b = S(d);
  R(
    b,
    () => i() === "CARD",
    (y) => {
      var m = ql();
      C(y, m);
    },
    (y) => {
      var m = Il();
      C(y, m);
    }
  ), x(d);
  var f = T(d, 2);
  bn(f, {
    get input() {
      return n();
    },
    options: a,
    onInput: u
  }), x(c), x(o), C(t, o), te();
}
re(["click"]);
customElements.define("mv-elegant-filtertypes", W(
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
function $l(t, e, r, n, i) {
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
    Y(i, B(a));
  } else
    Y(i, B(r()));
}
var Al = /* @__PURE__ */ q('<th class="svelte-1nbcvq9"> </th>'), Ol = /* @__PURE__ */ q('<a class="table_row svelte-1nbcvq9"> </a>'), zl = /* @__PURE__ */ q('<span class="table_row svelte-1nbcvq9"> </span>'), Rl = /* @__PURE__ */ q('<td class="svelte-1nbcvq9"><!></td>'), Hl = /* @__PURE__ */ q("<td></td>"), Ul = /* @__PURE__ */ q('<tr class="svelte-1nbcvq9"></tr>'), Ll = /* @__PURE__ */ q('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const Ml = {
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
  ee(e, !0), K(t, Ml);
  let r = E(e, "tableHeaders", 23, () => []), n = E(e, "tableRows", 31, () => B([])), i = E(e, "linkprefix", 3, ""), a = E(e, "linkcolumnname", 3, ""), l = E(e, "tableRowClick", 3, void 0);
  if (typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), (!r() || r().length === 0) && n() && n().length > 0) {
    r([]);
    for (let p of Object.keys(n()[0]))
      r().push({
        name: p,
        displayName: p,
        searchable: !0,
        hideNarrow: !1
      });
  }
  let s = Se(B(n())), u = Se(""), o = Se(-1);
  const v = (p) => {
    Y(o, B(p)), l() && l()({ detail: { rowIndex: p } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: p } }));
  };
  var c = Ll(), d = S(c), b = T(S(d), 2), f = T(S(b));
  st(f), f.__keyup = [
    $l,
    u,
    n,
    r,
    s
  ], x(b), x(d);
  var y = T(d, 2), m = S(y), g = S(m);
  X(g, 21, r, Z, (p, k) => {
    var w = Al(), I = S(w, !0);
    x(w), $(() => {
      Pe(w, "column_sm", h(k).hideNarrow), M(I, h(k).displayName);
    }), C(p, w);
  }), x(g), x(m);
  var _ = T(m);
  X(_, 21, () => h(s), Z, (p, k, w) => {
    var I = Ul();
    I.__click = () => {
      v(w);
    }, X(I, 21, r, Z, (z, O) => {
      var U = ie(), V = F(U);
      R(
        V,
        () => h(k)[h(O).name],
        (N) => {
          var H = Rl(), J = S(H);
          R(
            J,
            a,
            (G) => {
              var Q = Ol(), he = S(Q, !0);
              x(Q), $(() => {
                A(Q, "href", i() + h(k)[a()]), M(he, h(k)[h(O).name]);
              }), C(G, Q);
            },
            (G) => {
              var Q = zl(), he = S(Q, !0);
              x(Q), $(() => M(he, h(k)[h(O).name])), C(G, Q);
            }
          ), x(H), $(() => Pe(H, "column_sm", h(O).hideNarrow)), C(N, H);
        },
        (N) => {
          var H = Hl();
          C(N, H);
        }
      ), C(z, U);
    }), x(I), $(() => Pe(I, "table_row_selected", w === h(o))), C(p, I);
  }), x(_), x(y), x(c), et(f, () => h(u), (p) => Y(u, p)), C(t, c), te();
}
re(["keyup", "click"]);
customElements.define("mv-elegant-table", W(
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
var jl = /* @__PURE__ */ q("<!> <!> <!> <!> <!>", 1);
const Dl = { hash: "svelte-32ttx", code: "" };
function Fl(t, e) {
  ee(e, !0), K(t, Dl);
  let r = E(e, "title", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "searchtext", 7, ""), s = E(e, "categories", 19, () => []), u = E(e, "types", 19, () => []), o = E(e, "sortTypes", 3, ""), v = E(e, "sortSelected", 11, ""), c = E(e, "items", 7);
  typeof c() == "string" && c(JSON.parse(c()));
  let d = Se("CARD"), b = B([
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
  ]), f = "", y = {}, m = {};
  function g(N) {
    f = N, e.searchsubmit ? e.searchsubmit(N) : k();
  }
  function _(N) {
    y = N, e.categoryselect ? e.categoryselect(N) : k();
  }
  function p(N) {
    m = N, e.onTypeSelect ? e.onTypeSelect(N) : k();
  }
  function k() {
    for (let N of c()) {
      let H = !1;
      if (f != "" && N.description && N.title && N.authorName && (!N.title.toLowerCase().includes(f.toLowerCase()) || !N.description.toLowerCase().includes(f.toLowerCase()) || !N.authorName.toLowerCase().includes(f.toLowerCase())) && (H = !0), !H && N.categories)
        for (let J of Object.keys(y)) {
          const G = N.categories.find((Q) => Q.name === J);
          if (y[J] && !G) {
            H = !0;
            break;
          }
        }
      if (!H && N.types)
        for (let J of Object.keys(m)) {
          const G = N.types.find((Q) => Q.name === J);
          if (m[J] && !G) {
            H = !0;
            break;
          }
        }
      N.hidden = H;
    }
    c(c());
  }
  var w = jl(), I = F(w);
  Tt(I, {
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
  var z = T(I, 2);
  pn(z, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return i();
    },
    get searchtext() {
      return l();
    },
    set searchtext(N) {
      l(N);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    searchsubmit: g
  });
  var O = T(z, 2);
  mn(O, {
    get categories() {
      return s();
    },
    categoryselect: _
  });
  var U = T(O, 2);
  xn(U, {
    get types() {
      return u();
    },
    get sortTypes() {
      return o();
    },
    get sortSelected() {
      return v();
    },
    onTypeSelect: p,
    get onSortSelect() {
      return e.onSortSelect;
    },
    get view() {
      return h(d);
    },
    set view(N) {
      Y(d, B(N));
    }
  });
  var V = T(U, 2);
  R(
    V,
    () => h(d) === "CARD",
    (N) => {
      _n(N, {
        get items() {
          return c();
        },
        set items(H) {
          c(H);
        }
      });
    },
    (N) => {
      yn(N, {
        get tableHeaders() {
          return b;
        },
        get tableRows() {
          return c();
        },
        set tableRows(H) {
          c(H);
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), C(t, w), te();
}
customElements.define("mv-elegant-buffet", W(
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
var Bl = /* @__PURE__ */ q('<!> <div class="view_frame svelte-u4tv0q"></div>', 1);
const Pl = {
  hash: "svelte-u4tv0q",
  code: ".view_frame.svelte-u4tv0q {margin:auto;padding:24px 12px;max-width:700px;}"
};
function Vl(t, e) {
  K(t, Pl);
  let r = E(e, "title", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(c) {
    let d = "";
    if (c.labelType && (d += `<${c.labelType}>${c.label}</${c.labelType}>`), c.type == "link_blank")
      d += `<a href="${c.link}" target="_blank">${c.value}</a>`;
    else if (c.type == "ul_link_blank") {
      let b = c.value.split(",");
      d += "<ul>";
      for (let f of b)
        d += `<li><a href="${f}" target="_blank">${f}</a></li>`;
      d += "</ul>";
    } else if (c.type == "ul") {
      let b = c.value.split(",");
      d += "<ul>";
      for (let f of b)
        d += `<li>${f}</li>`;
      d += "</ul>";
    } else
      d += `<${c.type}>${c.value}</${c.type}>`;
    return d;
  }
  var u = Bl(), o = F(u);
  Tt(o, {
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
  var v = T(o, 2);
  X(v, 21, l, Z, (c, d) => {
    var b = ie(), f = F(b);
    yi(f, () => s(h(d))), C(c, b);
  }), x(v), C(t, u);
}
customElements.define("mv-elegant-buffet-view", W(
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
var Jl = /* @__PURE__ */ q('<div class="input_label"> </div>'), Gl = /* @__PURE__ */ q('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Yl = (t, e) => {
  e(t);
}, Kl = /* @__PURE__ */ q('<div><input type="checkbox" form=""> <label> </label></div>'), Wl = /* @__PURE__ */ q('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Zl = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function wn(t, e) {
  ee(e, !0), K(t, Zl);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, "");
  E(e, "placeholder", 3, "");
  let a = E(e, "items", 3, ""), l = E(e, "value", 15, ""), s = E(e, "selectStyle", 3, ""), u = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((_) => _.trim()), v = [];
  l() && (v = l().split(",").map((_) => _.trim()));
  let c = {};
  for (let _ of o)
    v.includes(_) ? c[_] = !0 : c[_] = !1;
  const d = (_) => {
    if (_ && _.target) {
      let p = _.target.id, k = _.target.checked;
      if (k && !v.includes(p))
        v.push(p);
      else if (!k && v.includes(p)) {
        let w = v.indexOf(p);
        v.splice(w, 1);
      }
      l(v.join(",")), u() && u()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var b = Wl(), f = S(b);
  R(f, n, (_) => {
    var p = Jl(), k = S(p, !0);
    x(p), $(() => M(k, n())), C(_, p);
  });
  var y = T(f, 2), m = S(y);
  R(m, i, (_) => {
    var p = Gl(), k = S(p);
    x(p), $(() => A(k, "src", i())), C(_, p);
  });
  var g = T(m, 2);
  X(g, 21, () => o, Z, (_, p) => {
    var k = Kl(), w = S(k);
    st(w), w.__change = [Yl, d];
    var I = T(w, 2), z = S(I, !0);
    x(I), x(k), $(() => {
      A(w, "id", h(p)), A(w, "name", h(p)), A(I, "for", h(p)), M(z, h(p));
    }), Ii(w, () => c[h(p)], (O) => c[h(p)] = O), C(_, k);
  }), x(g), x(y), x(b), $(() => A(b, "style", s())), C(t, b), te();
}
re(["change"]);
customElements.define("ing-multi-select", W(
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
function Xl(t, e) {
  e("", "");
}
var Ql = /* @__PURE__ */ q('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-snc1cn" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-snc1cn"> </div>', 1), es = /* @__PURE__ */ q('<!> <form class="edit_frame svelte-snc1cn"></form>', 1);
const ts = {
  hash: "svelte-snc1cn",
  code: ".edit_frame.svelte-snc1cn {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-snc1cn::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-snc1cn {margin-bottom:12px;}"
};
function rs(t, e) {
  ee(e, !0), K(t, ts);
  let r = E(e, "formId", 7, ""), n = E(e, "title", 3, ""), i = E(e, "titleUrl", 3, "/"), a = E(e, "titleImageUrl", 3, ""), l = E(e, "headerMenus", 19, () => []), s = E(e, "items", 23, () => []), u;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  function o(b, f) {
    const y = new FormData(u);
    for (let m of s())
      y.set(m.id, m.value);
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: y
      }
    }));
  }
  var v = es(), c = F(v);
  Tt(c, {
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
  var d = T(c, 2);
  X(d, 21, s, Z, (b, f) => {
    var y = ie(), m = F(y);
    R(
      m,
      () => h(f).type == "input" || h(f).type == "textarea",
      (g) => {
        Nt(g, {
          get label() {
            return h(f).label;
          },
          get input() {
            return h(f).value;
          },
          set input(_) {
            h(f).value = _;
          },
          get type() {
            return h(f).type;
          },
          inputChanged: o
        });
      },
      (g) => {
        var _ = ie(), p = F(_);
        R(
          p,
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
            var w = ie(), I = F(w);
            R(
              I,
              () => h(f).type == "multiselect",
              (z) => {
                wn(z, {
                  get label() {
                    return h(f).label;
                  },
                  get items() {
                    return h(f).options;
                  },
                  get value() {
                    return h(f).value;
                  },
                  set value(O) {
                    h(f).value = O;
                  },
                  inputChanged: o
                });
              },
              (z) => {
                var O = ie(), U = F(O);
                R(
                  U,
                  () => h(f).type == "file",
                  (V) => {
                    var N = Ql(), H = F(N), J = S(H), G = S(J, !0);
                    x(J), x(H);
                    var Q = T(H, 2);
                    Q.__change = [Xl, o];
                    var he = T(Q, 2), ye = S(he, !0);
                    x(he), $(() => {
                      A(J, "for", h(f).id), M(G, h(f).label), A(Q, "id", h(f).id), A(Q, "name", h(f).label), M(ye, h(f).value);
                    }), C(V, N);
                  },
                  null,
                  !0
                ), C(z, O);
              },
              !0
            ), C(k, w);
          },
          !0
        ), C(g, _);
      }
    ), C(b, y);
  }), x(d), nr(d, (b) => u = b, () => u), $(() => A(d, "id", r())), C(t, v), te();
}
re(["change"]);
customElements.define("mv-elegant-buffet-edit", W(
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
var ns = /* @__PURE__ */ q('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
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
  C(t, r);
}
customElements.define("mv-elegant-spinner", W(as, {}, [], [], !0));
export {
  Fl as ElegantBuffet,
  rs as ElegantBuffetEdit,
  Vl as ElegantBuffetView,
  Tt as ElegantHeader,
  pn as ElegantHeroSearch,
  hn as ElegantSearch,
  as as ElegantSpinner,
  yn as ElegantTable,
  ya as IngBuffet,
  Li as IngButton,
  Di as IngButtonGray,
  $a as IngForm,
  fn as IngHeaderLite,
  Nt as IngInput,
  ar as IngSelect,
  La as IngTable
};
