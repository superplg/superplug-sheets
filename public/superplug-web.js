var Tn = Object.defineProperty;
var vr = (t) => {
  throw TypeError(t);
};
var Nn = (t, e, r) => e in t ? Tn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var _e = (t, e, r) => Nn(t, typeof e != "symbol" ? e + "" : e, r), fr = (t, e, r) => e.has(t) || vr("Cannot " + r);
var oe = (t, e, r) => (fr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $t = (t, e, r) => e.has(t) ? vr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Mt = (t, e, r, n) => (fr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const An = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(An);
const Wt = 1, Kt = 2, Cr = 4, zn = 8, On = 16, $n = 1, Mn = 4, Un = 8, Hn = 16, Rn = 4, jn = 1, Dn = 2, qr = "[", Zt = "[!", Xt = "]", Fe = {}, ce = Symbol(), Ir = !1;
function St(t) {
  console.warn("hydration_mismatch");
}
var Qt = Array.isArray, er = Array.from, mt = Object.keys, xt = Object.defineProperty, Re = Object.getOwnPropertyDescriptor, Ln = Object.getOwnPropertyDescriptors, Bn = Object.prototype, Fn = Array.prototype, Ht = Object.getPrototypeOf;
function Vn(t) {
  return typeof t == "function";
}
const Ze = () => {
};
function Tr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const qe = 2, Nr = 4, Ct = 8, qt = 16, ye = 32, nt = 64, Ke = 128, bt = 256, fe = 512, Oe = 1024, it = 2048, me = 4096, at = 8192, Ar = 16384, It = 32768, Pn = 1 << 18, zr = 1 << 19, Ve = Symbol("$state"), Gn = Symbol("");
function Or(t) {
  return t === this.v;
}
function Jn(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function $r(t) {
  return !Jn(t, this.v);
}
function Yn() {
  throw new Error("effect_update_depth_exceeded");
}
function Wn() {
  throw new Error("hydration_failed");
}
function Kn(t) {
  throw new Error("props_invalid_value");
}
function Zn() {
  throw new Error("state_descriptors_fixed");
}
function Xn() {
  throw new Error("state_prototype_fixed");
}
function Qn() {
  throw new Error("state_unsafe_local_read");
}
function ei() {
  throw new Error("state_unsafe_mutation");
}
let Mr = !1;
function pe(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Or,
    version: 0
  };
}
function Ce(t) {
  return /* @__PURE__ */ ti(pe(t));
}
// @__NO_SIDE_EFFECTS__
function tr(t, e = !1) {
  const r = pe(t);
  return e || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function ti(t) {
  return Y !== null && Y.f & qe && (xe === null ? oi([t]) : xe.push(t)), t;
}
function Z(t, e) {
  return Y !== null && ci() && Y.f & (qe | qt) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(t)) && ei(), Rt(t, e);
}
function Rt(t, e) {
  return t.equals(e) || (t.v = e, t.version = Zr(), Ur(t, Oe), D !== null && D.f & fe && !(D.f & ye) && (se !== null && se.includes(t) ? (Te(D, Oe), zt(D)) : ze === null ? di([t]) : ze.push(t))), e;
}
function Ur(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & Oe || (Te(a, e), l & (fe | Ke) && (l & qe ? Ur(
        /** @type {Derived} */
        a,
        it
      ) : zt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function Qe(t) {
  var e = qe | Oe;
  D === null ? e |= Ke : D.f |= zr;
  const r = {
    children: null,
    ctx: be,
    deps: null,
    equals: Or,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: D
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
function Hr(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var r = 0; r < e.length; r += 1) {
      var n = e[r];
      n.f & qe ? rr(
        /** @type {Derived} */
        n
      ) : Me(
        /** @type {Effect} */
        n
      );
    }
  }
}
function Rr(t) {
  var e, r = D;
  de(t.parent);
  try {
    Hr(t), e = Xr(t);
  } finally {
    de(r);
  }
  return e;
}
function jr(t) {
  var e = Rr(t), r = (Be || t.f & Ke) && t.deps !== null ? it : fe;
  Te(t, r), t.equals(e) || (t.v = e, t.version = Zr());
}
function rr(t) {
  Hr(t), tt(t, 0), Te(t, at), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function ri(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function lt(t, e, r, n = !0) {
  var i = (t & nt) !== 0, a = D, l = {
    ctx: be,
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
    var s = Pe;
    try {
      hr(!0), At(l), l.f |= Ar;
    } catch (v) {
      throw Me(l), v;
    } finally {
      hr(s);
    }
  } else e !== null && zt(l);
  var d = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & zr) === 0;
  if (!d && !i && n && (a !== null && ri(l, a), Y !== null && Y.f & qe)) {
    var o = (
      /** @type {Derived} */
      Y
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function Dr(t) {
  const e = lt(nt, t, !0);
  return () => {
    Me(e);
  };
}
function st(t) {
  return lt(Nr, t, !1);
}
function Tt(t) {
  return lt(Ct, t, !0);
}
function N(t) {
  return Nt(t);
}
function Nt(t, e = 0) {
  return lt(Ct | qt | e, t, !0);
}
function We(t, e = !0) {
  return lt(Ct | ye, t, !0, e);
}
function Lr(t) {
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
function Br(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var r = 0; r < e.length; r += 1)
      rr(e[r]);
  }
}
function Fr(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    var n = r.next;
    Me(r, e), r = n;
  }
}
function ni(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & ye || Me(e), e = r;
  }
}
function Me(t, e = !0) {
  var r = !1;
  if ((e || t.f & Pn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ke(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Fr(t, e && !r), Br(t), tt(t, 0), Te(t, at);
  var l = t.transitions;
  if (l !== null)
    for (const d of l)
      d.stop();
  Lr(t);
  var s = t.parent;
  s !== null && s.first !== null && Vr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Vr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function jt(t, e) {
  var r = [];
  nr(t, r, !0), Pr(r, () => {
    Me(t), e && e();
  });
}
function Pr(t, e) {
  var r = t.length;
  if (r > 0) {
    var n = () => --r || e();
    for (var i of t)
      i.out(n);
  } else
    e();
}
function nr(t, e, r) {
  if (!(t.f & me)) {
    if (t.f ^= me, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & It) !== 0 || (n.f & ye) !== 0;
      nr(n, e, a ? r : !1), n = i;
    }
  }
}
function wt(t) {
  Gr(t, !0);
}
function Gr(t, e) {
  if (t.f & me) {
    dt(t) && At(t), t.f ^= me;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & It) !== 0 || (r.f & ye) !== 0;
      Gr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const ii = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let yt = !1, kt = !1, Dt = [], Lt = [];
function Jr() {
  yt = !1;
  const t = Dt.slice();
  Dt = [], Tr(t);
}
function Yr() {
  kt = !1;
  const t = Lt.slice();
  Lt = [], Tr(t);
}
function ot(t) {
  yt || (yt = !0, queueMicrotask(Jr)), Dt.push(t);
}
function ai(t) {
  kt || (kt = !0, ii(Yr)), Lt.push(t);
}
function li() {
  yt && Jr(), kt && Yr();
}
const Wr = 0, si = 1;
let gt = Wr, et = !1, Pe = !1;
function hr(t) {
  Pe = t;
}
let He = [], Ge = 0;
let Y = null;
function ge(t) {
  Y = t;
}
let D = null;
function de(t) {
  D = t;
}
let xe = null;
function oi(t) {
  xe = t;
}
let se = null, ue = 0, ze = null;
function di(t) {
  ze = t;
}
let Kr = 0, Be = !1, be = null;
function Zr() {
  return ++Kr;
}
function ci() {
  return !Mr;
}
function dt(t) {
  var l, s;
  var e = t.f;
  if (e & Oe)
    return !0;
  if (e & it) {
    var r = t.deps, n = (e & Ke) !== 0;
    if (r !== null) {
      var i;
      if (e & bt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= bt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (dt(
          /** @type {Derived} */
          a
        ) && jr(
          /** @type {Derived} */
          a
        ), n && D !== null && !Be && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || Te(t, fe);
  }
  return !1;
}
function ui(t, e, r) {
  throw t;
}
function Xr(t) {
  var f;
  var e = se, r = ue, n = ze, i = Y, a = Be, l = xe, s = be, d = t.f;
  se = /** @type {null | Value[]} */
  null, ue = 0, ze = null, Y = d & (ye | nt) ? null : t, Be = !Pe && (d & Ke) !== 0, xe = null, be = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), v = t.deps;
    if (se !== null) {
      var c;
      if (tt(t, ue), v !== null && ue > 0)
        for (v.length = ue + se.length, c = 0; c < se.length; c++)
          v[ue + c] = se[c];
      else
        t.deps = v = se;
      if (!Be)
        for (c = ue; c < v.length; c++)
          ((f = v[c]).reactions ?? (f.reactions = [])).push(t);
    } else v !== null && ue < v.length && (tt(t, ue), v.length = ue);
    return o;
  } finally {
    se = e, ue = r, ze = n, Y = i, Be = a, xe = l, be = s;
  }
}
function vi(t, e) {
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
  (se === null || !se.includes(e)) && (Te(e, it), e.f & (Ke | bt) || (e.f ^= bt), tt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function tt(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      vi(t, r[n]);
}
function At(t) {
  var e = t.f;
  if (!(e & at)) {
    Te(t, fe);
    var r = D;
    D = t;
    try {
      e & qt ? ni(t) : Fr(t), Br(t), Lr(t);
      var n = Xr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Kr;
    } catch (i) {
      ui(
        /** @type {Error} */
        i
      );
    } finally {
      D = r;
    }
  }
}
function Qr() {
  Ge > 1e3 && (Ge = 0, Yn()), Ge++;
}
function en(t) {
  var e = t.length;
  if (e !== 0) {
    Qr();
    var r = Pe;
    Pe = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & fe || (i.f ^= fe);
        var a = [];
        tn(i, a), fi(a);
      }
    } finally {
      Pe = r;
    }
  }
}
function fi(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (at | me)) && dt(n) && (At(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Vr(n) : n.fn = null));
    }
}
function hi() {
  if (et = !1, Ge > 1001)
    return;
  const t = He;
  He = [], en(t), et || (Ge = 0);
}
function zt(t) {
  gt === Wr && (et || (et = !0, queueMicrotask(hi)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (nt | ye)) {
      if (!(r & fe)) return;
      e.f ^= fe;
    }
  }
  He.push(e);
}
function tn(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & ye) !== 0, l = a && (i & fe) !== 0;
    if (!l && !(i & me))
      if (i & Ct) {
        a ? r.f ^= fe : dt(r) && At(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & Nr && n.push(r);
    var d = r.next;
    if (d === null) {
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
    r = d;
  }
  for (var v = 0; v < n.length; v++)
    s = n[v], e.push(s), tn(s, e);
}
function rn(t) {
  var e = gt, r = He;
  try {
    Qr();
    const i = [];
    gt = si, He = i, et = !1, en(r);
    var n = t == null ? void 0 : t();
    return li(), (He.length > 0 || i.length > 0) && rn(), Ge = 0, n;
  } finally {
    gt = e, He = r;
  }
}
function h(t) {
  var s;
  var e = t.f, r = (e & qe) !== 0;
  if (r && e & at) {
    var n = Rr(
      /** @type {Derived} */
      t
    );
    return rr(
      /** @type {Derived} */
      t
    ), n;
  }
  if (Y !== null) {
    xe !== null && xe.includes(t) && Qn();
    var i = Y.deps;
    se === null && i !== null && i[ue] === t ? ue++ : se === null ? se = [t] : se.push(t), ze !== null && D !== null && D.f & fe && !(D.f & ye) && ze.includes(t) && (Te(D, Oe), zt(D));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, dt(a) && jr(a)), t.v;
}
function Et(t) {
  const e = Y;
  try {
    return Y = null, t();
  } finally {
    Y = e;
  }
}
const pi = ~(Oe | it | fe);
function Te(t, e) {
  t.f = t.f & pi | e;
}
function re(t, e = !1, r) {
  be = {
    p: be,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function ne(t) {
  const e = be;
  if (e !== null) {
    const l = e.e;
    if (l !== null) {
      var r = D, n = Y;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          de(a.effect), ge(a.reaction), st(a.fn);
        }
      } finally {
        de(r), ge(n);
      }
    }
    be = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function G(t, e = null, r) {
  if (typeof t != "object" || t === null || Ve in t)
    return t;
  const n = Ht(t);
  if (n !== Bn && n !== Fn)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Qt(t), l = pe(0);
  a && i.set("length", pe(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(d, o, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Zn();
        var c = i.get(o);
        return c === void 0 ? (c = pe(v.value), i.set(o, c)) : Z(c, G(v.value, s)), !0;
      },
      deleteProperty(d, o) {
        var v = i.get(o);
        if (v === void 0)
          o in d && i.set(o, pe(ce));
        else {
          if (a && typeof o == "string") {
            var c = (
              /** @type {Source<number>} */
              i.get("length")
            ), f = Number(o);
            Number.isInteger(f) && f < c.v && Z(c, f);
          }
          Z(v, ce), pr(l);
        }
        return !0;
      },
      get(d, o, v) {
        var g;
        if (o === Ve)
          return t;
        var c = i.get(o), f = o in d;
        if (c === void 0 && (!f || (g = Re(d, o)) != null && g.writable) && (c = pe(G(f ? d[o] : ce, s)), i.set(o, c)), c !== void 0) {
          var x = h(c);
          return x === ce ? void 0 : x;
        }
        return Reflect.get(d, o, v);
      },
      getOwnPropertyDescriptor(d, o) {
        var v = Reflect.getOwnPropertyDescriptor(d, o);
        if (v && "value" in v) {
          var c = i.get(o);
          c && (v.value = h(c));
        } else if (v === void 0) {
          var f = i.get(o), x = f == null ? void 0 : f.v;
          if (f !== void 0 && x !== ce)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return v;
      },
      has(d, o) {
        var x;
        if (o === Ve)
          return !0;
        var v = i.get(o), c = v !== void 0 && v.v !== ce || Reflect.has(d, o);
        if (v !== void 0 || D !== null && (!c || (x = Re(d, o)) != null && x.writable)) {
          v === void 0 && (v = pe(c ? G(d[o], s) : ce), i.set(o, v));
          var f = h(v);
          if (f === ce)
            return !1;
        }
        return c;
      },
      set(d, o, v, c) {
        var _;
        var f = i.get(o), x = o in d;
        if (a && o === "length")
          for (var g = v; g < /** @type {Source<number>} */
          f.v; g += 1) {
            var u = i.get(g + "");
            u !== void 0 ? Z(u, ce) : g in d && (u = pe(ce), i.set(g + "", u));
          }
        f === void 0 ? (!x || (_ = Re(d, o)) != null && _.writable) && (f = pe(void 0), Z(f, G(v, s)), i.set(o, f)) : (x = f.v !== ce, Z(f, G(v, s)));
        var C = Reflect.getOwnPropertyDescriptor(d, o);
        if (C != null && C.set && C.set.call(c, v), !x) {
          if (a && typeof o == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), p = Number(o);
            Number.isInteger(p) && p >= w.v && Z(w, p + 1);
          }
          pr(l);
        }
        return !0;
      },
      ownKeys(d) {
        h(l);
        var o = Reflect.ownKeys(d).filter((f) => {
          var x = i.get(f);
          return x === void 0 || x.v !== ce;
        });
        for (var [v, c] of i)
          c.v !== ce && !(v in d) && o.push(v);
        return o;
      },
      setPrototypeOf() {
        Xn();
      }
    }
  );
}
function pr(t, e = 1) {
  Z(t, t.v + e);
}
function gr(t) {
  return t !== null && typeof t == "object" && Ve in t ? t[Ve] : t;
}
function gi(t, e) {
  return Object.is(gr(t), gr(e));
}
var _r, nn, an;
function Bt() {
  if (_r === void 0) {
    _r = window;
    var t = Element.prototype, e = Node.prototype;
    nn = Re(e, "firstChild").get, an = Re(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function $e(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ie(t) {
  return nn.call(t);
}
// @__NO_SIDE_EFFECTS__
function ke(t) {
  return an.call(t);
}
function y(t, e) {
  if (!L)
    return /* @__PURE__ */ Ie(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ie(P)
  );
  if (r === null)
    r = P.appendChild($e());
  else if (e && r.nodeType !== 3) {
    var n = $e();
    return r == null || r.before(n), ve(n), n;
  }
  return ve(r), r;
}
function V(t, e) {
  if (!L) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ie(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ ke(r) : r;
  }
  return P;
}
function T(t, e = 1, r = !1) {
  let n = L ? P : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ ke(n);
  if (!L)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = $e();
    return n == null || n.before(a), ve(a), a;
  }
  return ve(n), /** @type {TemplateNode} */
  n;
}
function ir(t) {
  t.textContent = "";
}
let L = !1;
function Se(t) {
  L = t;
}
let P;
function ve(t) {
  if (t === null)
    throw St(), Fe;
  return P = t;
}
function je() {
  return ve(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ke(P)
  );
}
function m(t) {
  if (L) {
    if (/* @__PURE__ */ ke(P) !== null)
      throw St(), Fe;
    P = t;
  }
}
function ar(t = 1) {
  if (L) {
    for (var e = t, r = P; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(r);
    P = r;
  }
}
function Ft() {
  for (var t = 0, e = P; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Xt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === qr || r === Zt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ke(e)
    );
    e.remove(), e = n;
  }
}
function mr(t, e) {
  if (e) {
    const r = document.body;
    t.autofocus = !0, ot(() => {
      document.activeElement === r && t.focus();
    });
  }
}
function _i(t) {
  L && /* @__PURE__ */ Ie(t) !== null && ir(t);
}
let xr = !1;
function ln() {
  xr || (xr = !0, document.addEventListener(
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
function mi(t) {
  var e = Y, r = D;
  ge(null), de(null);
  try {
    return t();
  } finally {
    ge(e), de(r);
  }
}
function lr(t, e, r, n = r) {
  t.addEventListener(e, () => mi(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, ln();
}
const sn = /* @__PURE__ */ new Set(), Vt = /* @__PURE__ */ new Set();
function ae(t) {
  for (var e = 0; e < t.length; e++)
    sn.add(t[e]);
  for (var r of Vt)
    r(t);
}
function ft(t) {
  var p;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((p = t.composedPath) == null ? void 0 : p.call(t)) || [], a = (
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
    xt(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = Y, c = D;
    ge(null), de(null);
    try {
      for (var f, x = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var u = a["__" + n];
          if (u !== void 0 && !/** @type {any} */
          a.disabled)
            if (Qt(u)) {
              var [C, ...w] = u;
              C.apply(a, [t, ...w]);
            } else
              u.call(a, t);
        } catch (_) {
          f ? x.push(_) : f = _;
        }
        if (t.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let _ of x)
          queueMicrotask(() => {
            throw _;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, ge(v), de(c);
    }
  }
}
function on(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function we(t, e) {
  var r = (
    /** @type {Effect} */
    D
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function q(t, e) {
  var r = (e & jn) !== 0, n = (e & Dn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (L)
      return we(P, null), P;
    i === void 0 && (i = on(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ie(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(l)
      ), d = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      we(s, d);
    } else
      we(l, l);
    return l;
  };
}
function xi(t = "") {
  if (!L) {
    var e = $e(t + "");
    return we(e, e), e;
  }
  var r = P;
  return r.nodeType !== 3 && (r.before(r = $e()), ve(r)), we(r, r), r;
}
function ie() {
  if (L)
    return we(P, null), P;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = $e();
  return t.append(e, r), we(e, r), t;
}
function S(t, e) {
  if (L) {
    D.nodes_end = P, je();
    return;
  }
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
const bi = ["touchstart", "touchmove"];
function wi(t) {
  return bi.includes(t);
}
let Pt = !0;
function R(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function dn(t, e) {
  return cn(t, e);
}
function yi(t, e) {
  Bt(), e.intro = e.intro ?? !1;
  const r = e.target, n = L, i = P;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ie(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== qr); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ ke(a);
    if (!a)
      throw Fe;
    Se(!0), ve(
      /** @type {Comment} */
      a
    ), je();
    const l = cn(t, { ...e, anchor: a });
    if (P === null || P.nodeType !== 8 || /** @type {Comment} */
    P.data !== Xt)
      throw St(), Fe;
    return Se(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Fe)
      return e.recover === !1 && Wn(), Bt(), ir(r), Se(!1), dn(t, e);
    throw l;
  } finally {
    Se(n), ve(i);
  }
}
const Le = /* @__PURE__ */ new Map();
function cn(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Bt();
  var s = /* @__PURE__ */ new Set(), d = (c) => {
    for (var f = 0; f < c.length; f++) {
      var x = c[f];
      if (!s.has(x)) {
        s.add(x);
        var g = wi(x);
        e.addEventListener(x, ft, { passive: g });
        var u = Le.get(x);
        u === void 0 ? (document.addEventListener(x, ft, { passive: g }), Le.set(x, 1)) : Le.set(x, u + 1);
      }
    }
  };
  d(er(sn)), Vt.add(d);
  var o = void 0, v = Dr(() => {
    var c = r ?? e.appendChild($e());
    return We(() => {
      if (a) {
        re({});
        var f = (
          /** @type {ComponentContext} */
          be
        );
        f.c = a;
      }
      i && (n.$$events = i), L && we(
        /** @type {TemplateNode} */
        c,
        null
      ), Pt = l, o = t(c, n) || {}, Pt = !0, L && (D.nodes_end = P), a && ne();
    }), () => {
      var g;
      for (var f of s) {
        e.removeEventListener(f, ft);
        var x = (
          /** @type {number} */
          Le.get(f)
        );
        --x === 0 ? (document.removeEventListener(f, ft), Le.delete(f)) : Le.set(f, x);
      }
      Vt.delete(d), Gt.delete(o), c !== r && ((g = c.parentNode) == null || g.removeChild(c));
    };
  });
  return Gt.set(o, v), o;
}
let Gt = /* @__PURE__ */ new WeakMap();
function ki(t) {
  const e = Gt.get(t);
  e && e();
}
function $(t, e, r, n = null, i = !1) {
  L && je();
  var a = t, l = null, s = null, d = null, o = i ? It : 0;
  Nt(() => {
    if (d === (d = !!e())) return;
    let v = !1;
    if (L) {
      const c = (
        /** @type {Comment} */
        a.data === Zt
      );
      d === c && (a = Ft(), ve(a), Se(!1), v = !0);
    }
    d ? (l ? wt(l) : l = We(() => r(a)), s && jt(s, () => {
      s = null;
    })) : (s ? wt(s) : n && (s = We(() => n(a))), l && jt(l, () => {
      l = null;
    })), v && Se(!0);
  }, o), L && (a = P);
}
function X(t, e) {
  return e;
}
function Ei(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    nr(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var d = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    ir(d), d.append(
      /** @type {Element} */
      r
    ), n.clear(), Ne(t, e[0].prev, e[a - 1].next);
  }
  Pr(i, () => {
    for (var o = 0; o < a; o++) {
      var v = e[o];
      s || (n.delete(v.k), Ne(t, v.prev, v.next)), Me(v.e, !s);
    }
  });
}
function Q(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, d = (e & Cr) !== 0;
  if (d) {
    var o = (
      /** @type {Element} */
      t
    );
    l = L ? ve(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ie(o)
    ) : o.appendChild($e());
  }
  L && je();
  var v = null, c = !1;
  Nt(() => {
    var f = r(), x = Qt(f) ? f : f == null ? [] : er(f), g = x.length;
    if (c && g === 0)
      return;
    c = g === 0;
    let u = !1;
    if (L) {
      var C = (
        /** @type {Comment} */
        l.data === Zt
      );
      C !== (g === 0) && (l = Ft(), ve(l), Se(!1), u = !0);
    }
    if (L) {
      for (var w = null, p, _ = 0; _ < g; _++) {
        if (P.nodeType === 8 && /** @type {Comment} */
        P.data === Xt) {
          l = /** @type {Comment} */
          P, u = !0, Se(!1);
          break;
        }
        var k = x[_], b = n(k, _);
        p = un(P, s, w, null, k, b, _, i, e), s.items.set(b, p), w = p;
      }
      g > 0 && ve(Ft());
    }
    if (!L) {
      var I = (
        /** @type {Effect} */
        Y
      );
      Si(x, s, l, i, e, (I.f & me) !== 0, n);
    }
    a !== null && (g === 0 ? v ? wt(v) : v = We(() => a(l)) : v !== null && jt(v, () => {
      v = null;
    })), u && Se(!0), r();
  }), L && (l = P);
}
function Si(t, e, r, n, i, a, l) {
  var M, F, ee, te;
  var s = (i & zn) !== 0, d = (i & (Wt | Kt)) !== 0, o = t.length, v = e.items, c = e.first, f = c, x, g = null, u, C = [], w = [], p, _, k, b;
  if (s)
    for (b = 0; b < o; b += 1)
      p = t[b], _ = l(p, b), k = v.get(_), k !== void 0 && ((M = k.a) == null || M.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(k));
  for (b = 0; b < o; b += 1) {
    if (p = t[b], _ = l(p, b), k = v.get(_), k === void 0) {
      var I = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      g = un(
        I,
        e,
        g,
        g === null ? e.first : g.next,
        p,
        _,
        b,
        n,
        i
      ), v.set(_, g), C = [], w = [], f = g.next;
      continue;
    }
    if (d && Ci(k, p, b, i), k.e.f & me && (wt(k.e), s && ((F = k.a) == null || F.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(k))), k !== f) {
      if (x !== void 0 && x.has(k)) {
        if (C.length < w.length) {
          var U = w[0], O;
          g = U.prev;
          var H = C[0], J = C[C.length - 1];
          for (O = 0; O < C.length; O += 1)
            br(C[O], U, r);
          for (O = 0; O < w.length; O += 1)
            x.delete(w[O]);
          Ne(e, H.prev, J.next), Ne(e, g, H), Ne(e, J, U), f = U, g = J, b -= 1, C = [], w = [];
        } else
          x.delete(k), br(k, f, r), Ne(e, k.prev, k.next), Ne(e, k, g === null ? e.first : g.next), Ne(e, g, k), g = k;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== _; )
        (a || !(f.e.f & me)) && (x ?? (x = /* @__PURE__ */ new Set())).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      k = f;
    }
    C.push(k), g = k, f = k.next;
  }
  if (f !== null || x !== void 0) {
    for (var B = x === void 0 ? [] : er(x); f !== null; )
      (a || !(f.e.f & me)) && B.push(f), f = f.next;
    var j = B.length;
    if (j > 0) {
      var z = i & Cr && o === 0 ? r : null;
      if (s) {
        for (b = 0; b < j; b += 1)
          (ee = B[b].a) == null || ee.measure();
        for (b = 0; b < j; b += 1)
          (te = B[b].a) == null || te.fix();
      }
      Ei(e, B, z, v);
    }
  }
  s && ot(() => {
    var le;
    if (u !== void 0)
      for (k of u)
        (le = k.a) == null || le.apply();
  }), D.first = e.first && e.first.e, D.last = g && g.e;
}
function Ci(t, e, r, n) {
  n & Wt && Rt(t.v, e), n & Kt ? Rt(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function un(t, e, r, n, i, a, l, s, d) {
  var o = (d & Wt) !== 0, v = (d & On) === 0, c = o ? v ? /* @__PURE__ */ tr(i) : pe(i) : i, f = d & Kt ? pe(l) : l, x = {
    i: f,
    v: c,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return x.e = We(() => s(t, c, f), L), x.e.prev = r && r.e, x.e.next = n && n.e, r === null ? e.first = x : (r.next = x, r.e.next = x.e), n !== null && (n.prev = x, n.e.prev = x.e), x;
  } finally {
  }
}
function br(t, e, r) {
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
      /* @__PURE__ */ ke(a)
    );
    i.before(a), a = l;
  }
}
function Ne(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function qi(t, e, r, n, i) {
  var a = t, l = "", s;
  Nt(() => {
    if (l === (l = e() ?? "")) {
      L && je();
      return;
    }
    s !== void 0 && (Me(s), s = void 0), l !== "" && (s = We(() => {
      if (L) {
        P.data;
        for (var d = je(), o = d; d !== null && (d.nodeType !== 8 || /** @type {Comment} */
        d.data !== ""); )
          o = d, d = /** @type {TemplateNode} */
          /* @__PURE__ */ ke(d);
        if (d === null)
          throw St(), Fe;
        we(P, o), a = ve(d);
        return;
      }
      var v = l + "", c = on(v);
      we(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ie(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), a.before(c);
    }));
  });
}
function sr(t, e, r, n, i) {
  var s;
  L && je();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function W(t, e) {
  ot(() => {
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
function ct(t) {
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
    t.__on_r = r, ai(r), ln();
  }
}
function A(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  L && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Gn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && vn(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Ut(t, e, r) {
  var n = Y, i = D;
  ge(null), de(null);
  try {
    vn(t).includes(e) ? t[e] = r : A(t, e, r);
  } finally {
    ge(n), de(i);
  }
}
var wr = /* @__PURE__ */ new Map();
function vn(t) {
  var e = wr.get(t.nodeName);
  if (e) return e;
  wr.set(t.nodeName, e = []);
  for (var r, n = Ht(t), i = Element.prototype; i !== n; ) {
    r = Ln(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = Ht(n);
  }
  return e;
}
function Je(t, e) {
  var r = t.__className, n = Ii(e);
  L && t.className === n ? t.__className = n : (r !== n || L && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function Ii(t) {
  return t ?? "";
}
function Ye(t, e, r) {
  if (r) {
    if (t.classList.contains(e)) return;
    t.classList.add(e);
  } else {
    if (!t.classList.contains(e)) return;
    t.classList.remove(e);
  }
}
const Ti = () => performance.now(), Ae = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => Ti(),
  tasks: /* @__PURE__ */ new Set()
};
function fn(t) {
  Ae.tasks.forEach((e) => {
    e.c(t) || (Ae.tasks.delete(e), e.f());
  }), Ae.tasks.size !== 0 && Ae.tick(fn);
}
function Ni(t) {
  let e;
  return Ae.tasks.size === 0 && Ae.tick(fn), {
    promise: new Promise((r) => {
      Ae.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Ae.tasks.delete(e);
    }
  };
}
function ht(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ai(t) {
  if (t === "float") return "cssFloat";
  if (t === "offset") return "cssOffset";
  if (t.startsWith("--")) return t;
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (r) => r[0].toUpperCase() + r.slice(1)
  ).join("");
}
function yr(t) {
  const e = {}, r = t.split(";");
  for (const n of r) {
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = Ai(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const zi = (t) => t;
function Oi(t, e, r, n) {
  var i = (t & Rn) !== 0, a = "both", l, s = e.inert, d, o;
  function v() {
    var u = Y, C = D;
    ge(null), de(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      ge(u), de(C);
    }
  }
  var c = {
    is_global: i,
    in() {
      e.inert = s, ht(e, "introstart"), d = Jt(e, v(), o, 1, () => {
        ht(e, "introend"), d == null || d.abort(), d = l = void 0;
      });
    },
    out(u) {
      e.inert = !0, ht(e, "outrostart"), o = Jt(e, v(), d, 0, () => {
        ht(e, "outroend"), u == null || u();
      });
    },
    stop: () => {
      d == null || d.abort(), o == null || o.abort();
    }
  }, f = (
    /** @type {Effect} */
    D
  );
  if ((f.transitions ?? (f.transitions = [])).push(c), Pt) {
    var x = i;
    if (!x) {
      for (var g = (
        /** @type {Effect | null} */
        f.parent
      ); g && g.f & It; )
        for (; (g = g.parent) && !(g.f & qt); )
          ;
      x = !g || (g.f & Ar) !== 0;
    }
    x && st(() => {
      Et(() => c.in());
    });
  }
}
function Jt(t, e, r, n, i) {
  var a = n === 1;
  if (Vn(e)) {
    var l, s = !1;
    return ot(() => {
      if (!s) {
        var C = e({ direction: a ? "in" : "out" });
        l = Jt(t, C, r, n, i);
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
      abort: Ze,
      deactivate: Ze,
      reset: Ze,
      t: () => n
    };
  const { delay: d = 0, css: o, tick: v, easing: c = zi } = e;
  var f = [];
  if (a && r === void 0 && (v && v(0, 1), o)) {
    var x = yr(o(0, 1));
    f.push(x, x);
  }
  var g = () => 1 - n, u = t.animate(f, { duration: d });
  return u.onfinish = () => {
    var C = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var w = n - C, p = (
      /** @type {number} */
      e.duration * Math.abs(w)
    ), _ = [];
    if (p > 0) {
      if (o)
        for (var k = Math.ceil(p / 16.666666666666668), b = 0; b <= k; b += 1) {
          var I = C + w * c(b / k), U = o(I, 1 - I);
          _.push(yr(U));
        }
      g = () => {
        var O = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          u.currentTime
        );
        return C + w * c(O / p);
      }, v && Ni(() => {
        if (u.playState !== "running") return !1;
        var O = g();
        return v(O, 1 - O), !0;
      });
    }
    u = t.animate(_, { duration: p, fill: "forwards" }), u.onfinish = () => {
      g = () => n, v == null || v(n, 1 - n), i();
    };
  }, {
    abort: () => {
      u && (u.cancel(), u.effect = null, u.onfinish = Ze);
    },
    deactivate: () => {
      i = Ze;
    },
    reset: () => {
      n === 0 && (v == null || v(1, 0));
    },
    t: () => g()
  };
}
function rt(t, e, r = e) {
  lr(t, "input", () => {
    var n = kr(t) ? Er(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Tt(() => {
    var n = e();
    if (L && t.defaultValue !== t.value) {
      r(t.value);
      return;
    }
    kr(t) && n === Er(t.value) || t.type === "date" && !n && !t.value || n !== t.value && (t.value = n ?? "");
  });
}
function $i(t, e, r = e) {
  lr(t, "change", () => {
    var n = t.checked;
    r(n);
  }), e() == null && r(!1), Tt(() => {
    var n = e();
    t.checked = !!n;
  });
}
function kr(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Er(t) {
  return t === "" ? null : +t;
}
function hn(t, e, r) {
  if (t.multiple)
    return Ui(t, e);
  for (var n of t.options) {
    var i = Xe(n);
    if (gi(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Mi(t, e) {
  st(() => {
    var r = new MutationObserver(() => {
      var n = t.__value;
      hn(t, n);
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
function pn(t, e, r = e) {
  var n = !0;
  lr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), Xe);
    else {
      var a = t.querySelector(":checked");
      i = a && Xe(a);
    }
    r(i);
  }), st(() => {
    var i = e();
    if (hn(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = Xe(a), r(i));
    }
    t.__value = i, n = !1;
  }), Mi(t);
}
function Ui(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(Xe(r));
}
function Xe(t) {
  return "__value" in t ? t.__value : t.value;
}
function Sr(t, e) {
  return t === e || (t == null ? void 0 : t[Ve]) === e;
}
function or(t = {}, e, r, n) {
  return st(() => {
    var i, a;
    return Tt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], Et(() => {
        t !== r(...a) && (e(t, ...a), i && Sr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      ot(() => {
        a && Sr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let pt = !1;
function Hi(t) {
  var e = pt;
  try {
    return pt = !1, [t(), pt];
  } finally {
    pt = e;
  }
}
function Ri(t) {
  for (var e = D, r = D; e !== null && !(e.f & (ye | nt)); )
    e = e.parent;
  try {
    return de(e), t();
  } finally {
    de(r);
  }
}
function E(t, e, r, n) {
  var b;
  var i = (r & $n) !== 0, a = !Mr, l = (r & Un) !== 0, s = (r & Hn) !== 0, d = !1, o;
  l ? [o, d] = Hi(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var v = (b = Re(t, e)) == null ? void 0 : b.set, c = (
    /** @type {V} */
    n
  ), f = !0, x = !1, g = () => (x = !0, f && (f = !1, s ? c = Et(
    /** @type {() => V} */
    n
  ) : c = /** @type {V} */
  n), c);
  o === void 0 && n !== void 0 && (v && a && Kn(), o = g(), v && v(o));
  var u;
  if (u = () => {
    var I = (
      /** @type {V} */
      t[e]
    );
    return I === void 0 ? g() : (f = !0, x = !1, I);
  }, !(r & Mn))
    return u;
  if (v) {
    var C = t.$$legacy;
    return function(I, U) {
      return arguments.length > 0 ? ((!U || C || d) && v(U ? u() : I), I) : u();
    };
  }
  var w = !1, p = !1, _ = /* @__PURE__ */ tr(o), k = Ri(
    () => /* @__PURE__ */ Qe(() => {
      var I = u(), U = h(_);
      return w ? (w = !1, p = !0, U) : (p = !1, _.v = I);
    })
  );
  return i || (k.equals = $r), function(I, U) {
    if (arguments.length > 0) {
      const O = U ? h(k) : l ? G(I) : I;
      return k.equals(O) || (w = !0, Z(_, O), x && c !== void 0 && (c = O), Et(() => h(k))), I;
    }
    return h(k);
  };
}
function ji(t) {
  return new Di(t);
}
var Ee, he;
class Di {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    $t(this, Ee);
    /** @type {Record<string, any>} */
    $t(this, he);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var d = /* @__PURE__ */ tr(s);
      return r.set(l, d), d;
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
        set(l, s, d) {
          return Z(r.get(s) ?? n(s, d), d), Reflect.set(l, s, d);
        }
      }
    );
    Mt(this, he, (e.hydrate ? yi : dn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && rn(), Mt(this, Ee, i.$$events);
    for (const l of Object.keys(oe(this, he)))
      l === "$set" || l === "$destroy" || l === "$on" || xt(this, l, {
        get() {
          return oe(this, he)[l];
        },
        /** @param {any} value */
        set(s) {
          oe(this, he)[l] = s;
        },
        enumerable: !0
      });
    oe(this, he).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, oe(this, he).$destroy = () => {
      ki(oe(this, he));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    oe(this, he).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    oe(this, Ee)[e] = oe(this, Ee)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return oe(this, Ee)[e].push(n), () => {
      oe(this, Ee)[e] = oe(this, Ee)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    oe(this, he).$destroy();
  }
}
Ee = new WeakMap(), he = new WeakMap();
let gn;
typeof HTMLElement == "function" && (gn = class extends HTMLElement {
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
          i !== "default" && (l.name = i), S(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = Li(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = _t(a, i.value, this.$$p_d, "toProp"));
      }
      for (const i in this.$$p_d)
        !(i in this.$$d) && this[i] !== void 0 && (this.$$d[i] = this[i], delete this[i]);
      this.$$c = ji({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = Dr(() => {
        Tt(() => {
          var i;
          this.$$r = !0;
          for (const a of mt(this.$$c)) {
            if (!((i = this.$$p_d[a]) != null && i.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const l = _t(
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
    this.$$r || (e = this.$$g_p(e), this.$$d[e] = _t(e, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [e]: this.$$d[e] }));
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
    return mt(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === e || !this.$$p_d[r].attribute && r.toLowerCase() === e
    ) || e;
  }
});
function _t(t, e, r, n) {
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
function Li(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function K(t, e, r, n, i, a) {
  let l = class extends gn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return mt(e).map(
        (s) => (e[s].attribute || s).toLowerCase()
      );
    }
  };
  return mt(e).forEach((s) => {
    xt(l.prototype, s, {
      get() {
        return this.$$c && s in this.$$c ? this.$$c[s] : this.$$d[s];
      },
      set(d) {
        var c;
        d = _t(s, d, e), this.$$d[s] = d;
        var o = this.$$c;
        if (o) {
          var v = (c = Re(o, s)) == null ? void 0 : c.get;
          v ? o[s] = d : o.$set({ [s]: d });
        }
      }
    });
  }), n.forEach((s) => {
    xt(l.prototype, s, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
function Bi(t, e, r) {
  e() && e()(t), r() && document.dispatchEvent(new CustomEvent(r(), { detail: {} }));
}
var Fi = /* @__PURE__ */ q('<button type="button"><!></button>');
const Vi = {
  hash: "svelte-jcodks",
  code: '.button.svelte-jcodks {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.button--primary.svelte-jcodks {background-color:#1ea7fd;color:white;}.button--secondary.svelte-jcodks {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-jcodks {padding:10px 16px;font-size:12px;}.button--medium.svelte-jcodks {padding:11px 20px;font-size:14px;}.button--large.svelte-jcodks {padding:12px 24px;font-size:16px;}'
};
function Yt(t, e) {
  re(e, !0), W(t, Vi);
  const r = E(e, "buttonTitle", 3, ""), n = E(e, "type", 3, "primary"), i = E(e, "size", 3, "medium"), a = E(e, "onClick", 3, void 0);
  var l = Fi();
  l.__click = [Bi, a, r];
  var s = y(l);
  $(
    s,
    r,
    (d) => {
      var o = xi();
      N(() => R(o, r())), S(d, o);
    },
    (d) => {
      var o = ie(), v = V(o);
      sr(v, e, "default", {}), S(d, o);
    }
  ), m(l), N(() => Je(l, `${"button button--" + i() + " button--" + n()} svelte-jcodks`)), S(t, l), ne();
}
ae(["click"]);
customElements.define("ing-button", K(
  Yt,
  {
    buttonTitle: {},
    type: {},
    size: {},
    onClick: {}
  },
  ["default"],
  [],
  !0
));
var Pi = /* @__PURE__ */ q('<button type="button"><!></button>');
const Gi = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Ji(t, e) {
  W(t, Gi), E(e, "type", 3, "primary");
  const r = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const n = E(e, "onClick", 3, void 0);
  var i = Pi();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = y(i);
  sr(a, e, "default", {}), m(i), N(() => Je(i, `${"button button--" + r()} svelte-1c7d33o`)), S(t, i);
}
ae(["click"]);
customElements.define("ing-button-gray", K(Ji, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Yi = /* @__PURE__ */ q('<div class="input_label svelte-1485t9m"> </div>'), Wi = /* @__PURE__ */ q('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Ki = (t, e) => {
  e(t);
}, Zi = /* @__PURE__ */ q('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Xi = (t, e) => {
  e(t);
}, Qi = /* @__PURE__ */ q('<input class="input_field svelte-1485t9m" form="">'), ea = /* @__PURE__ */ q('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const ta = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function Ot(t, e) {
  re(e, !0), W(t, ta);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "type", 3, "text"), l = E(e, "placeholder", 3, ""), s = E(e, "input", 15, ""), d = E(e, "inputStyle", 3, ""), o = E(e, "focus", 3, !1), v = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const c = (w) => {
    if (w && w.target) {
      let p = "";
      w.target.value && (p = w.target.value), v() && v()(r(), p), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: p }
      }));
    }
  };
  var f = ea(), x = y(f);
  $(x, n, (w) => {
    var p = Yi(), _ = y(p, !0);
    m(p), N(() => R(_, n())), S(w, p);
  });
  var g = T(x, 2), u = y(g);
  $(u, i, (w) => {
    var p = Wi(), _ = V(p), k = y(_);
    m(_), ar(), N(() => A(k, "src", i())), S(w, p);
  });
  var C = T(u, 2);
  $(
    C,
    () => a() == "textarea",
    (w) => {
      var p = Zi();
      _i(p), mr(p, o()), p.__input = [Ki, c], N(() => {
        A(p, "id", r()), A(p, "name", r()), A(p, "placeholder", l());
      }), rt(p, s), S(w, p);
    },
    (w) => {
      var p = Qi();
      ct(p), mr(p, o()), p.__input = [Xi, c], N(() => {
        A(p, "id", r()), A(p, "name", r()), A(p, "type", a()), A(p, "placeholder", l());
      }), rt(p, s), S(w, p);
    }
  ), m(g), m(f), N(() => A(f, "style", d())), S(t, f), ne();
}
ae(["input"]);
customElements.define("ing-input", K(
  Ot,
  {
    input: { reflect: !0 },
    inputId: {},
    label: {},
    icon: {},
    type: {},
    placeholder: {},
    inputStyle: {},
    focus: {},
    inputChanged: {}
  },
  [],
  [],
  !0
));
var ra = /* @__PURE__ */ q('<a class="svelte-hcumdc"> </a>'), na = (t, e, r) => e(h(r).title), ia = /* @__PURE__ */ q('<button class="menu_item_button svelte-hcumdc"> </button>'), aa = /* @__PURE__ */ q('<div class="menu_item svelte-hcumdc"><!></div>'), la = /* @__PURE__ */ q('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const sa = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function dr(t, e) {
  re(e, !0), W(t, sa);
  let r = E(e, "position", 19, () => ({})), n = E(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = la(), l = T(y(a), 2);
  Q(l, 21, n, X, (s, d) => {
    var o = aa(), v = y(o);
    $(
      v,
      () => h(d).url,
      (c) => {
        var f = ra(), x = y(f, !0);
        m(f), N(() => {
          A(f, "href", h(d).url), R(x, h(d).title);
        }), S(c, f);
      },
      (c) => {
        var f = ia();
        f.__click = [na, i, d];
        var x = y(f, !0);
        m(f), N(() => R(x, h(d).title)), S(c, f);
      }
    ), m(o), S(s, o);
  }), m(l), m(a), N(() => A(a, "style", `top: ${r().top}; left: ${r().left};`)), S(t, a), ne();
}
ae(["click"]);
customElements.define("mv-elegant-dropdown", K(dr, { position: {}, menuItems: {} }, [], [], !0));
var oa = /* @__PURE__ */ q('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), da = (t, e) => {
  Z(e, !h(e));
}, ca = /* @__PURE__ */ q('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), ua = /* @__PURE__ */ q("<span></span>"), va = /* @__PURE__ */ q('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const fa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function _n(t, e) {
  re(e, !0), W(t, fa), E(e, "title", 3, "Apint.org");
  const r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !1), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, "");
  let s = "", d = Ce(!1), o = Ce(void 0);
  function v() {
    let w = {}, p;
    if (h(o) && (p = h(o)), p) {
      var _ = p.getBoundingClientRect();
      w.top = (_.top + _.height + 12).toString() + "px", w.left = (_.left - 115).toString() + "px", console.log(w);
    }
    return w;
  }
  var c = va(), f = y(c), x = y(f);
  Ot(x, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var g = T(x, 2);
  g.textContent = s, m(f);
  var u = T(f, 2), C = y(u);
  $(
    C,
    i,
    (w) => {
      var p = ca(), _ = V(p), k = y(_);
      $(k, n, (J) => {
        var B = oa(), j = V(B);
        ar(2), N(() => A(j, "src", n())), S(J, B);
      });
      var b = T(k, 2);
      b.__click = [da, d];
      var I = y(b), U = T(I, 2), O = y(U, !0);
      m(U), m(b), or(b, (J) => Z(o, J), () => h(o)), m(_);
      var H = T(_, 2);
      $(H, () => h(d), (J) => {
        var B = /* @__PURE__ */ Qe(v);
        dr(J, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return h(B);
          }
        });
      }), N(() => {
        A(I, "src", l()), R(O, a());
      }), S(w, p);
    },
    (w) => {
      var p = ie(), _ = V(p);
      $(
        _,
        i,
        (k) => {
          var b = ua();
          S(k, b);
        },
        null,
        !0
      ), S(w, p);
    }
  ), m(u), m(c), S(t, c), ne();
}
ae(["click"]);
customElements.define("ing-headerlite", K(
  _n,
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
function ha(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function pa(t, { delay: e = 0, duration: r = 400, easing: n = ha, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", d = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], v = o.map(
    (w) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${w[0].toUpperCase()}${w.slice(1)}`
    )
  ), c = parseFloat(a[`padding${v[0]}`]), f = parseFloat(a[`padding${v[1]}`]), x = parseFloat(a[`margin${v[0]}`]), g = parseFloat(a[`margin${v[1]}`]), u = parseFloat(
    a[`border${v[0]}Width`]
  ), C = parseFloat(
    a[`border${v[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * l};${s}: ${w * d}px;padding-${o[0]}: ${w * c}px;padding-${o[1]}: ${w * f}px;margin-${o[0]}: ${w * x}px;margin-${o[1]}: ${w * g}px;border-${o[0]}-width: ${w * u}px;border-${o[1]}-width: ${w * C}px;`
  };
}
function ga(t) {
  return t;
}
var _a = (t, e, r) => e(h(r).title), ma = /* @__PURE__ */ q('<img alt="option" width="18px">'), xa = /* @__PURE__ */ q('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ba = /* @__PURE__ */ q('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), wa = (t, e, r) => e(h(r).title), ya = /* @__PURE__ */ q('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), ka = /* @__PURE__ */ q('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ea = /* @__PURE__ */ q('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Sa = /* @__PURE__ */ q('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Ca = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function qa(t, e) {
  re(e, !0), W(t, Ca), E(e, "title", 3, "Mapp"), E(e, "icon", 3, "");
  let r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !0), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, ""), s = E(e, "activeitem", 3, ""), d = E(e, "menuconfig", 7, void 0);
  typeof d() == "string" && d(JSON.parse(d()));
  let o = G({});
  if (s()) {
    o[s()] = !0;
    for (let p of d().items)
      if (p.subitems) {
        for (let _ of p.subitems)
          if (_.title == s()) {
            o[p.title] = !0;
            break;
          }
      }
  }
  let v = (p) => {
    let _ = d().items.find((k) => k.title === p);
    o[p] ? _ && (!_.url || _.url === "#") && (o[p] = !o[p]) : o[p] = !0;
  };
  var c = Sa(), f = y(c), x = y(f);
  Q(x, 21, () => d().items, X, (p, _) => {
    var k = Ea(), b = V(k);
    b.__click = [_a, v, _];
    var I = y(b), U = y(I), O = y(U);
    $(
      O,
      () => h(_).icon,
      (z) => {
        var M = ma();
        N(() => A(M, "src", h(_).icon)), S(z, M);
      },
      (z) => {
        var M = xa();
        S(z, M);
      }
    ), m(U);
    var H = T(U, 2), J = y(H, !0);
    m(H);
    var B = T(H, 2);
    $(B, () => h(_).subitems, (z) => {
      var M = ba();
      N(() => Je(M, `${(o[h(_).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), S(z, M);
    }), m(I), m(b);
    var j = T(b, 2);
    $(j, () => o[h(_).title] && h(_).subitems, (z) => {
      var M = ka();
      Q(M, 21, () => h(_).subitems, X, (ee, te) => {
        var le = ya();
        le.__click = [wa, v, te];
        var vt = y(le), De = T(y(vt), 2), Ue = y(De, !0);
        m(De), m(vt), m(le), N(() => {
          A(le, "href", h(te).url), Je(le, `${(h(te).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), R(Ue, h(te).title);
        }), S(ee, le);
      }), m(M), Oi(3, M, () => pa, () => ({ duration: 300, easing: ga })), S(z, M);
    }), N(() => {
      A(b, "href", h(_).url), Je(b, `${(h(_).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), R(J, h(_).title);
    }), S(p, k);
  }), m(x), m(f);
  var g = T(f, 2), u = y(g);
  _n(u, {
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
  var C = T(u, 2), w = y(C);
  sr(w, e, "default", {}), m(C), m(g), m(c), S(t, c), ne();
}
ae(["click"]);
customElements.define("ing-buffet", K(
  qa,
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
var Ia = /* @__PURE__ */ q('<div class="input_label svelte-18z4bwo"> </div>'), Ta = /* @__PURE__ */ q('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Na = (t, e) => {
  e(t);
}, Aa = /* @__PURE__ */ q("<option> </option>"), za = /* @__PURE__ */ q('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const Oa = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function cr(t, e) {
  re(e, !0), W(t, Oa);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "placeholder", 3, ""), l = E(e, "items", 3, ""), s = E(e, "value", 15, ""), d = E(e, "selectStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let v = l().split(",");
  const c = (w) => {
    if (w && w.target) {
      let p = "";
      w.target.value && (p = w.target.value), o() && o()(r(), p), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: p }
      }));
    }
  };
  var f = za(), x = y(f);
  $(x, n, (w) => {
    var p = Ia(), _ = y(p, !0);
    m(p), N(() => R(_, n())), S(w, p);
  });
  var g = T(x, 2), u = y(g);
  $(u, i, (w) => {
    var p = Ta(), _ = y(p);
    m(p), N(() => A(_, "src", i())), S(w, p);
  });
  var C = T(u, 2);
  C.__input = [Na, c], Q(C, 21, () => v, X, (w, p) => {
    var _ = Aa(), k = {}, b = y(_, !0);
    m(_), N(() => {
      k !== (k = h(p)) && (_.value = (_.__value = h(p)) == null ? "" : h(p)), R(b, h(p));
    }), S(w, _);
  }), m(C), m(g), m(f), N(() => {
    A(f, "style", d()), A(C, "placeholder", a());
  }), pn(C, s), S(t, f), ne();
}
ae(["input"]);
customElements.define("ing-select", K(
  cr,
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
var $a = /* @__PURE__ */ q('<div style="width: 100%;"><h3> </h3></div>'), Ma = /* @__PURE__ */ q('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Ua = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Ha(t, e) {
  re(e, !0), W(t, Ua);
  let r = E(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let d = {};
    for (const [o, v] of Object.entries(r().properties))
      d[o] = v.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: d } }));
  }
  var i = Ma(), a = y(i);
  $(a, r, (d) => {
    var o = ie(), v = V(o);
    Q(v, 17, () => Object.entries(r().properties), X, (c, f) => {
      let x = () => h(f)[0], g = () => h(f)[1];
      var u = ie(), C = V(u);
      $(
        C,
        () => g().format == "header",
        (w) => {
          var p = $a(), _ = y(p), k = y(_, !0);
          m(_), m(p), N(() => R(k, g().value)), S(w, p);
        },
        (w) => {
          var p = ie(), _ = V(p);
          $(
            _,
            () => g().format == "select",
            (k) => {
              var b = /* @__PURE__ */ Qe(() => "width: " + g().length + ";");
              cr(k, {
                get input() {
                  return g().value;
                },
                set input(I) {
                  g().value = I;
                },
                get selectStyle() {
                  return h(b);
                },
                get label() {
                  return g().description;
                },
                get items() {
                  return g().value;
                }
              });
            },
            (k) => {
              var b = ie(), I = V(b);
              $(
                I,
                () => g().type == "string",
                (U) => {
                  var O = /* @__PURE__ */ Qe(() => "width: " + g().length + ";");
                  Ot(U, {
                    get inputId() {
                      return x();
                    },
                    get inputStyle() {
                      return h(O);
                    },
                    get label() {
                      return g().description;
                    },
                    get type() {
                      return g().format;
                    },
                    get placeholder() {
                      return g().placeholder;
                    },
                    get input() {
                      return g().value;
                    },
                    set input(H) {
                      g().value = H;
                    }
                  });
                },
                null,
                !0
              ), S(k, b);
            },
            !0
          ), S(w, p);
        }
      ), S(c, u);
    }), S(d, o);
  });
  var l = T(a, 2), s = y(l);
  Ut(s, "size", "small"), Ut(s, "id", "submit-button"), Ut(s, "type", "secondary"), s.__click = n, m(l), m(i), S(t, i), ne();
}
ae(["click"]);
customElements.define("ing-form", K(Ha, { schema: {} }, [], [], !0));
function Ra(t, e, r, n, i, a) {
  if (h(e)) {
    let l = [];
    for (let s of r()) {
      let d = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && s[o].toString().toLowerCase().includes(h(e).toLowerCase())) {
          d = !0;
          break;
        }
      d && l.push(s);
    }
    Z(a, G(l));
  } else
    Z(a, G(r()));
}
var ja = /* @__PURE__ */ q('<th class="svelte-15ql2st"> </th>'), Da = /* @__PURE__ */ q('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), La = /* @__PURE__ */ q('<tr class="svelte-15ql2st"></tr>'), Ba = /* @__PURE__ */ q('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Fa = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function Va(t, e) {
  re(e, !0), W(t, Fa);
  let r = E(e, "headers", 23, () => []), n = E(e, "headerssearchable", 23, () => []), i = E(e, "rows", 23, () => []), a = E(e, "linkprefix", 3, ""), l = E(e, "linkcolumnname", 3, ""), s = E(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let d = Ce(G(i())), o = Ce("");
  const v = (_) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: _ } })), s() && s()({ detail: { rowIndex: _ } });
  };
  var c = Ba(), f = y(c), x = T(y(f), 2), g = T(y(x));
  ct(g), g.__keyup = [
    Ra,
    o,
    i,
    r,
    n,
    d
  ], m(x), m(f);
  var u = T(f, 2), C = y(u), w = y(C);
  Q(w, 21, r, X, (_, k) => {
    var b = ja(), I = y(b, !0);
    m(b), N(() => R(I, h(k))), S(_, b);
  }), m(w), m(C);
  var p = T(C);
  Q(p, 21, () => h(d), X, (_, k, b) => {
    var I = La();
    I.__click = () => {
      v(b);
    }, Q(I, 21, () => Object.entries(h(k)), X, (O, H) => {
      var J = Da(), B = y(J), j = y(B, !0);
      m(B), m(J), N(() => {
        A(B, "href", a() + h(k)[l()]), R(j, h(H)[1]);
      }), S(O, J);
    }), m(I), S(_, I);
  }), m(p), m(u), m(c), rt(g, () => h(o), (_) => Z(o, _)), S(t, c), ne();
}
ae(["keyup", "click"]);
customElements.define("ing-table", K(
  Va,
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
var Pa = /* @__PURE__ */ q('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), Ga = /* @__PURE__ */ q('<span class="title_text svelte-1fbvnm"> </span>'), Ja = /* @__PURE__ */ q('<a class="title svelte-1fbvnm"><!> <!></a>'), Ya = (t, e, r) => e(t, h(r)), Wa = /* @__PURE__ */ q('<img class="menu_icon svelte-1fbvnm">'), Ka = /* @__PURE__ */ q('<span class="menu_top_button svelte-1fbvnm"> </span>'), Za = /* @__PURE__ */ q('<button class="menu_button svelte-1fbvnm"><!></button> <!>', 1), Xa = /* @__PURE__ */ q('<div class="header svelte-1fbvnm"><!> <div class="right_menus svelte-1fbvnm"></div></div>');
const Qa = {
  hash: "svelte-1fbvnm",
  code: `.header.svelte-1fbvnm {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;
    /* background-color: rgba(255, 255, 255, 1); */background-color:rgba(255, 255, 255, .6);backdrop-filter:blur(10px);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-1fbvnm {height:100%;display:flex;margin-left:12px;color:#111;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.title.svelte-1fbvnm:link {text-decoration:none;}.title.svelte-1fbvnm:visited {text-decoration:none;color:#222;}.title.svelte-1fbvnm:hover {text-decoration:none;color:darkgray;}.title.svelte-1fbvnm:active {text-decoration:none;}.title_text.svelte-1fbvnm {display:flex;align-items:center;}.right_menus.svelte-1fbvnm {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-1fbvnm {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-1fbvnm {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-1fbvnm:hover {cursor:pointer;}.menu_top_button.svelte-1fbvnm {padding:12px 18px;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;background-color:#1ea7fd;color:white;}.round.svelte-1fbvnm {height:40px;width:40px;border-radius:50%;}`
};
function ut(t, e) {
  re(e, !0), W(t, Qa);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = G({}), s = G({});
  function d(g, u) {
    g && g.stopPropagation();
    for (const C of Object.keys(l))
      C != u.title && (l[C] = !1);
    u.items && u.items.length > 0 ? l[u.title] ? l[u.title] = !1 : l[u.title] = !0 : u.titleUrl ? window.location.href = u.titleUrl : document.dispatchEvent(new CustomEvent(u.title, { detail: {} }));
  }
  function o(g) {
    let u = {}, C;
    if (s[g] && (C = s[g]), C) {
      var w = C.getBoundingClientRect();
      u.top = (w.top + w.height + 12).toString() + "px", u.left = (w.left - 150).toString() + "px", console.log(u);
    } else
      console.log("Could not find element with id: " + g);
    return u;
  }
  function v(g) {
    return g.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const u of Object.keys(l))
      l[u] = !1;
  };
  var c = Xa(), f = y(c);
  $(f, () => r() || i(), (g) => {
    var u = Ja(), C = y(u);
    $(C, i, (p) => {
      var _ = Pa();
      N(() => A(_, "src", i())), S(p, _);
    });
    var w = T(C, 2);
    $(w, r, (p) => {
      var _ = Ga(), k = y(_, !0);
      m(_), N(() => R(k, r())), S(p, _);
    }), m(u), N(() => A(u, "href", n())), S(g, u);
  });
  var x = T(f, 2);
  Q(x, 21, a, X, (g, u) => {
    var C = Za(), w = V(C);
    N(() => A(w, "id", v(h(u).title + "_button"))), w.__click = [Ya, d, u];
    var p = y(w);
    $(
      p,
      () => h(u).imageUrl,
      (k) => {
        var b = Wa();
        or(b, (I, U) => s[v(U.title + "_button")] = I, (I) => s == null ? void 0 : s[v(I.title + "_button")], () => [h(u)]), N(() => {
          A(b, "alt", h(u).title), A(b, "src", h(u).imageUrl), Ye(b, "round", h(u).imageShape === "round");
        }), S(k, b);
      },
      (k) => {
        var b = Ka(), I = y(b, !0);
        m(b), N(() => {
          A(b, "style", "background-color: " + h(u).titleColor), R(I, h(u).title);
        }), S(k, b);
      }
    ), m(w);
    var _ = T(w, 2);
    $(_, () => l[h(u).title] && h(u).items, (k) => {
      var b = /* @__PURE__ */ Qe(() => o(v(h(u).title + "_button")));
      dr(k, {
        get menuItems() {
          return h(u).items;
        },
        get position() {
          return h(b);
        }
      });
    }), S(g, C);
  }), m(x), m(c), S(t, c), ne();
}
ae(["click"]);
customElements.define("mv-elegant-header", K(
  ut,
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
function el(t, e, r, n) {
  e.searchloadresults && Z(r, G(e.searchloadresults(n())));
}
function tl(t, e, r, n) {
  t.key === "Escape" ? Z(e, G([])) : t.key === "Enter" ? (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n("")) : (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })));
}
var rl = /* @__PURE__ */ q('<div class="result svelte-ihhy65"> </div>'), nl = /* @__PURE__ */ q('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), il = /* @__PURE__ */ q('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const al = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function mn(t, e) {
  re(e, !0), W(t, al);
  let r = E(e, "searchtext", 15), n = Ce(G([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && Z(n, G(o.detail.results));
  });
  var i = il(), a = V(i), l = y(a), s = T(y(l), 2);
  ct(s), s.__input = [el, e, n, r], s.__keyup = [tl, n, e, r], m(l), m(a);
  var d = T(a, 2);
  $(d, () => h(n).length > 0, (o) => {
    var v = nl(), c = y(v), f = y(c);
    Q(f, 21, () => h(n), X, (x, g) => {
      var u = rl(), C = y(u, !0);
      m(u), N(() => R(C, h(g))), S(x, u);
    }), m(f), m(c), m(v), S(o, v);
  }), rt(s, r), S(t, i), ne();
}
ae(["input", "keyup"]);
customElements.define("mv-elegant-search", K(
  mn,
  {
    searchtext: {},
    searchloadresults: {},
    searchsubmit: {}
  },
  [],
  [],
  !0
));
var ll = /* @__PURE__ */ q('<img class="hero_image svelte-e621nb" alt="logo">'), sl = /* @__PURE__ */ q('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const ol = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function xn(t, e) {
  W(t, ol);
  let r = E(e, "height", 3, "80px"), n = E(e, "titleText", 3, ""), i = E(e, "titleImageUrl", 3, ""), a = E(e, "searchtext", 15);
  var l = sl(), s = y(l), d = y(s);
  $(d, i, (x) => {
    var g = ll();
    N(() => {
      A(g, "height", `${r()}`), A(g, "src", i());
    }), S(x, g);
  });
  var o = T(d, 2), v = y(o, !0);
  m(o), m(s);
  var c = T(s, 2), f = y(c);
  mn(f, {
    get searchtext() {
      return a();
    },
    set searchtext(x) {
      a(x);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), m(c), m(l), N(() => {
    A(s, "style", `height: ${r()};`), R(v, n());
  }), S(t, l);
}
customElements.define("mv-elegant-hero-search", K(
  xn,
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
var dl = /* @__PURE__ */ q('<img alt="category icon" class="svelte-yh1dxk">'), cl = /* @__PURE__ */ q('<span class="card_symbol svelte-yh1dxk"> </span>'), ul = /* @__PURE__ */ q('<img class="header_image svelte-yh1dxk" alt="header preview">'), vl = /* @__PURE__ */ q('<img alt="profile" class="svelte-yh1dxk">'), fl = /* @__PURE__ */ q('<img alt="category icon" class="svelte-yh1dxk">'), hl = /* @__PURE__ */ q('<span class="card_symbol svelte-yh1dxk"> </span>'), pl = /* @__PURE__ */ q('<div class="card_frame svelte-yh1dxk"><div class="top_left_label svelte-yh1dxk"><span class="svelte-yh1dxk"> </span> <div class="top_right_icons svelte-yh1dxk"></div></div> <!> <a class="title svelte-yh1dxk"> </a> <a class="author svelte-yh1dxk" target="_blank"><!> </a> <div class="footer svelte-yh1dxk"><div class="description svelte-yh1dxk"> </div> <div class="link svelte-yh1dxk"><a target="_blank" class="svelte-yh1dxk">Open asset ↗</a> <div class="type_box svelte-yh1dxk"></div></div></div></div>');
const gl = {
  hash: "svelte-yh1dxk",
  code: ".card_frame.svelte-yh1dxk {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-yh1dxk {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-yh1dxk span:where(.svelte-yh1dxk) {white-space:nowrap;}.top_right_icons.svelte-yh1dxk {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-yh1dxk img:where(.svelte-yh1dxk) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-yh1dxk {width:calc(100% - 18px);max-width:88%;margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-yh1dxk {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;width:100%;}.title.svelte-yh1dxk:hover {color:#7c7c7c;}.author.svelte-yh1dxk {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-yh1dxk img:where(.svelte-yh1dxk) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-yh1dxk:hover {color:#757a79;}.card_symbol.svelte-yh1dxk {padding-left:6px;}.card_symbol.svelte-yh1dxk:hover {cursor:default;}.footer.svelte-yh1dxk {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-yh1dxk {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-yh1dxk {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-yh1dxk a:where(.svelte-yh1dxk) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-yh1dxk a:where(.svelte-yh1dxk):hover {color:#82aae9;}.type_box.svelte-yh1dxk {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-yh1dxk img:where(.svelte-yh1dxk) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function bn(t, e) {
  re(e, !0), W(t, gl);
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
  var n = pl(), i = y(n), a = y(i), l = y(a, !0);
  m(a);
  var s = T(a, 2);
  Q(s, 21, () => r().categories, X, (k, b) => {
    var I = ie(), U = V(I);
    $(
      U,
      () => h(b).imageUrl,
      (O) => {
        var H = dl();
        N(() => {
          A(H, "src", h(b).imageUrl), A(H, "title", h(b).name);
        }), S(O, H);
      },
      (O) => {
        var H = ie(), J = V(H);
        $(
          J,
          () => h(b).symbol,
          (B) => {
            var j = cl(), z = y(j, !0);
            m(j), N(() => {
              A(j, "title", h(b).name), R(z, h(b).symbol);
            }), S(B, j);
          },
          null,
          !0
        ), S(O, H);
      }
    ), S(k, I);
  }), m(s), m(i);
  var d = T(i, 2);
  $(d, () => r().imageUrl, (k) => {
    var b = ul();
    N(() => A(b, "src", r().imageUrl)), S(k, b);
  });
  var o = T(d, 2), v = y(o, !0);
  m(o);
  var c = T(o, 2), f = y(c);
  $(f, () => r().authorImageUrl, (k) => {
    var b = vl();
    N(() => A(b, "src", r().authorImageUrl)), S(k, b);
  });
  var x = T(f);
  m(c);
  var g = T(c, 2), u = y(g), C = y(u, !0);
  m(u);
  var w = T(u, 2), p = y(w), _ = T(p, 2);
  Q(_, 21, () => r().types, X, (k, b) => {
    var I = ie(), U = V(I);
    $(
      U,
      () => h(b).imageUrl,
      (O) => {
        var H = fl();
        N(() => {
          A(H, "src", h(b).imageUrl), A(H, "title", h(b).name);
        }), S(O, H);
      },
      (O) => {
        var H = ie(), J = V(H);
        $(
          J,
          () => h(b).symbol,
          (B) => {
            var j = hl(), z = y(j, !0);
            m(j), N(() => {
              A(j, "title", h(b).name), R(z, h(b).symbol);
            }), S(B, j);
          },
          null,
          !0
        ), S(O, H);
      }
    ), S(k, I);
  }), m(_), m(w), m(g), m(n), N(() => {
    R(l, r().dateTime), A(o, "href", r().link), R(v, r().title), A(c, "href", r().authorUrl), R(x, ` ${r().authorName ?? ""}`), R(C, r().description), A(p, "href", r().link);
  }), S(t, n), ne();
}
customElements.define("mv-elegant-card", K(bn, { item: {} }, [], [], !0));
var _l = /* @__PURE__ */ q('<div class="menu_frame svelte-1dvvvu9"></div>');
const ml = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function wn(t, e) {
  W(t, ml);
  let r = E(e, "items", 31, () => G([]));
  typeof r() == "string" && r(JSON.parse(r()));
  var n = _l();
  Q(n, 21, r, X, (i, a) => {
    var l = ie(), s = V(l);
    $(s, () => !h(a).hidden, (d) => {
      bn(d, {
        get item() {
          return h(a);
        }
      });
    }), S(i, l);
  }), m(n), S(t, n);
}
customElements.define("mv-elegant-cardpage", K(wn, { items: {} }, [], [], !0));
var xl = (t, e, r) => e(h(r).name), bl = /* @__PURE__ */ q('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), wl = /* @__PURE__ */ q('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const yl = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function yn(t, e) {
  re(e, !0), W(t, yl);
  let r = E(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = G({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = wl();
  Q(a, 21, r, X, (l, s) => {
    var d = bl(), o = y(d);
    o.__click = [xl, i, s];
    var v = y(o, !0);
    m(o);
    var c = T(o, 2), f = y(c, !0);
    m(c), m(d), N(() => {
      Ye(o, "letter_selected", n[h(s).name]), R(v, h(s).symbol), R(f, h(s).name);
    }), S(l, d);
  }), m(a), S(t, a), ne();
}
ae(["click"]);
customElements.define("mv-elegant-filtercats", K(yn, { categories: {}, categoryselect: {} }, [], [], !0));
function kl(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var El = /* @__PURE__ */ q('<option class="svelte-3qfq5d"> </option>'), Sl = /* @__PURE__ */ q('<div class="select svelte-3qfq5d"><select name="source" id="source" class="svelte-3qfq5d"></select></div>');
const Cl = {
  hash: "svelte-3qfq5d",
  code: `.select.svelte-3qfq5d,
	.select.svelte-3qfq5d :where(.svelte-3qfq5d) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-3qfq5d {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d):active,
	.select.svelte-3qfq5d select:where(.svelte-3qfq5d):focus {outline:none;box-shadow:none;}.select.svelte-3qfq5d:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function kn(t, e) {
  re(e, !0), W(t, Cl);
  let r = E(e, "input", 15), n = E(e, "options", 19, () => []);
  var i = Sl(), a = y(i);
  a.__input = [kl, r, e], Q(a, 21, n, X, (l, s) => {
    var d = El(), o = {}, v = y(d, !0);
    m(d), N(() => {
      o !== (o = h(s)) && (d.value = (d.__value = h(s)) == null ? "" : h(s)), R(v, h(s));
    }), S(l, d);
  }), m(a), m(i), pn(a, r), S(t, i), ne();
}
ae(["input"]);
customElements.define("mv-elegant-select", K(kn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function ql(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var Il = (t, e, r) => e(h(r).name), Tl = /* @__PURE__ */ q('<div class="icon svelte-lvweti">✓</div>'), Nl = /* @__PURE__ */ q('<div class="icon svelte-lvweti"> </div>'), Al = /* @__PURE__ */ q('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), zl = /* @__PURE__ */ q('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Ol = /* @__PURE__ */ q('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), $l = /* @__PURE__ */ q('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const Ml = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function En(t, e) {
  re(e, !0), W(t, Ml);
  let r = E(e, "types", 7), n = E(e, "sortSelected", 15, ""), i = E(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let a = e.sortTypes.split(",").map((u) => u.trim());
  n() || n(a[0]);
  let l = G({});
  function s(u) {
    l[u] ? l[u] = !1 : l[u] = !0, e.onTypeSelect && (console.log("sending type selected data: " + JSON.stringify(l)), e.onTypeSelect(l));
  }
  function d(u) {
    e.onSortSelect && e.onSortSelect(u);
  }
  var o = $l(), v = y(o);
  Q(v, 21, r, X, (u, C) => {
    var w = Al();
    w.__click = [Il, s, C];
    var p = y(w);
    $(
      p,
      () => l[h(C).name] === !0,
      (b) => {
        var I = Tl();
        S(b, I);
      },
      (b) => {
        var I = Nl(), U = y(I, !0);
        m(I), N(() => R(U, h(C).symbol)), S(b, I);
      }
    );
    var _ = T(p, 2), k = y(_, !0);
    m(_), m(w), N(() => {
      Ye(w, "filterbar_option_selected", l[h(C).name]), R(k, h(C).name);
    }), S(u, w);
  }), m(v);
  var c = T(v, 2), f = y(c);
  f.__click = [ql, i, e];
  var x = y(f);
  $(
    x,
    () => i() === "CARD",
    (u) => {
      var C = zl();
      S(u, C);
    },
    (u) => {
      var C = Ol();
      S(u, C);
    }
  ), m(f);
  var g = T(f, 2);
  kn(g, {
    get input() {
      return n();
    },
    options: a,
    onInput: d
  }), m(c), m(o), S(t, o), ne();
}
ae(["click"]);
customElements.define("mv-elegant-filtertypes", K(
  En,
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
function Ul(t, e, r, n, i) {
  if (h(e)) {
    let a = [];
    for (let l of r()) {
      let s = !1;
      for (let d of n())
        if (d.searchable && l[d.name] && l[d.name].toString().toLowerCase().includes(h(e).toLowerCase())) {
          s = !0;
          break;
        }
      s && a.push(l);
    }
    Z(i, G(a));
  } else
    Z(i, G(r()));
}
var Hl = /* @__PURE__ */ q('<th class="svelte-1nbcvq9"> </th>'), Rl = /* @__PURE__ */ q('<a class="table_row svelte-1nbcvq9"> </a>'), jl = /* @__PURE__ */ q('<span class="table_row svelte-1nbcvq9"> </span>'), Dl = /* @__PURE__ */ q('<td class="svelte-1nbcvq9"><!></td>'), Ll = /* @__PURE__ */ q("<td></td>"), Bl = /* @__PURE__ */ q('<tr class="svelte-1nbcvq9"></tr>'), Fl = /* @__PURE__ */ q('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const Vl = {
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
function Sn(t, e) {
  re(e, !0), W(t, Vl);
  let r = E(e, "tableHeaders", 23, () => []), n = E(e, "tableRows", 31, () => G([])), i = E(e, "linkprefix", 3, ""), a = E(e, "linkcolumnname", 3, ""), l = E(e, "tableRowClick", 3, void 0);
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
  let s = Ce(G(n())), d = Ce(""), o = Ce(-1);
  const v = (_) => {
    Z(o, G(_)), l() && l()({ detail: { rowIndex: _ } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: _ } }));
  };
  var c = Fl(), f = y(c), x = T(y(f), 2), g = T(y(x));
  ct(g), g.__keyup = [
    Ul,
    d,
    n,
    r,
    s
  ], m(x), m(f);
  var u = T(f, 2), C = y(u), w = y(C);
  Q(w, 21, r, X, (_, k) => {
    var b = Hl(), I = y(b, !0);
    m(b), N(() => {
      Ye(b, "column_sm", h(k).hideNarrow), R(I, h(k).displayName);
    }), S(_, b);
  }), m(w), m(C);
  var p = T(C);
  Q(p, 21, () => h(s), X, (_, k, b) => {
    var I = Bl();
    I.__click = () => {
      v(b);
    }, Q(I, 21, r, X, (U, O) => {
      var H = ie(), J = V(H);
      $(
        J,
        () => h(k)[h(O).name],
        (B) => {
          var j = Dl(), z = y(j);
          $(
            z,
            a,
            (M) => {
              var F = Rl(), ee = y(F, !0);
              m(F), N(() => {
                A(F, "href", i() + h(k)[a()]), R(ee, h(k)[h(O).name]);
              }), S(M, F);
            },
            (M) => {
              var F = jl(), ee = y(F, !0);
              m(F), N(() => R(ee, h(k)[h(O).name])), S(M, F);
            }
          ), m(j), N(() => Ye(j, "column_sm", h(O).hideNarrow)), S(B, j);
        },
        (B) => {
          var j = Ll();
          S(B, j);
        }
      ), S(U, H);
    }), m(I), N(() => Ye(I, "table_row_selected", b === h(o))), S(_, I);
  }), m(p), m(u), m(c), rt(g, () => h(d), (_) => Z(d, _)), S(t, c), ne();
}
ae(["keyup", "click"]);
customElements.define("mv-elegant-table", K(
  Sn,
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
var Pl = /* @__PURE__ */ q("<!> <!> <!> <!> <!>", 1);
const Gl = { hash: "svelte-3kpd", code: "" };
function Jl(t, e) {
  re(e, !0), W(t, Gl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "searchtext", 7, ""), s = E(e, "categories", 19, () => []), d = E(e, "types", 19, () => []), o = E(e, "sortTypes", 3, ""), v = E(e, "sortSelected", 11, ""), c = E(e, "items", 31, () => G([]));
  typeof c() == "string" && c(JSON.parse(c()));
  let f = Ce("CARD"), x = G([
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
  ]), g = "", u = {}, C = !1, w = {}, p = !1;
  function _(z) {
    g = z, e.searchsubmit ? e.searchsubmit(z) : I();
  }
  function k(z) {
    u = z, C = !1;
    for (const [M, F] of Object.entries(u))
      if (F) {
        C = !0;
        break;
      }
    e.categoryselect ? e.categoryselect(z) : I();
  }
  function b(z) {
    w = z, p = !1;
    for (const [M, F] of Object.entries(w))
      if (F) {
        p = !0;
        break;
      }
    e.onTypeSelect ? e.onTypeSelect(z) : I();
  }
  function I() {
    for (let z of c()) {
      let M = !1;
      if ((g != "" && z.description && z.title && z.authorName && !z.title.toLowerCase().includes(g.toLowerCase()) && !z.description.toLowerCase().includes(g.toLowerCase()) && !z.authorName.toLowerCase().includes(g.toLowerCase()) || g != "" && z.description == "") && (M = !0), !M && (!z.categories || z.categories.length === 0) && C) M = !0;
      else if (!M && z.categories)
        for (let F of Object.keys(u)) {
          const ee = z.categories.find((te) => te.name === F);
          if (u[F] && !ee) {
            M = !0;
            break;
          }
        }
      if (!M && (!z.types || z.types.length === 0) && p) M = !0;
      else if (!M && z.types)
        for (let F of Object.keys(w)) {
          const ee = z.types.find((te) => te.name === F);
          if (w[F] && !ee) {
            M = !0;
            break;
          }
        }
      z.hidden = M;
    }
  }
  var U = Pl(), O = V(U);
  ut(O, {
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
  var H = T(O, 2);
  xn(H, {
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
    searchsubmit: _
  });
  var J = T(H, 2);
  yn(J, {
    get categories() {
      return s();
    },
    categoryselect: k
  });
  var B = T(J, 2);
  En(B, {
    get types() {
      return d();
    },
    get sortTypes() {
      return o();
    },
    get sortSelected() {
      return v();
    },
    onTypeSelect: b,
    get onSortSelect() {
      return e.onSortSelect;
    },
    get view() {
      return h(f);
    },
    set view(z) {
      Z(f, G(z));
    }
  });
  var j = T(B, 2);
  $(
    j,
    () => h(f) === "CARD",
    (z) => {
      wn(z, {
        get items() {
          return c();
        },
        set items(M) {
          c(M);
        }
      });
    },
    (z) => {
      Sn(z, {
        get tableHeaders() {
          return x;
        },
        get tableRows() {
          return c();
        },
        set tableRows(M) {
          c(M);
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), S(t, U), ne();
}
customElements.define("mv-elegant-buffet", K(
  Jl,
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
var Yl = /* @__PURE__ */ q('<!> <div class="view_frame svelte-qzg12u"></div>', 1);
const Wl = {
  hash: "svelte-qzg12u",
  code: ".view_frame.svelte-qzg12u {margin:auto;padding:24px 12px;max-width:700px;}.view_image {margin:8px 0px;width:100%;border-radius:24px;filter:drop-shadow(0 0 0.75rem gray);}"
};
function Kl(t, e) {
  W(t, Wl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(c) {
    let f = "";
    if (c.labelType && (f += `<${c.labelType}>${c.label}</${c.labelType}>`), c.type == "link_blank")
      f += `<a href="${c.link}" target="_blank">${c.value}</a>`;
    else if (c.type == "ul_link_blank") {
      let x = c.value.split(",");
      f += "<ul>";
      for (let g of x)
        f += `<li><a href="${g}" target="_blank">${g}</a></li>`;
      f += "</ul>";
    } else if (c.type == "ul") {
      let x = c.value.split(",");
      f += "<ul>";
      for (let g of x)
        f += `<li>${g}</li>`;
      f += "</ul>";
    } else if (c.type == "img" && c.value)
      f += `<${c.type} class="view_image" src="${c.value}"></${c.type}>`;
    else if (c.type == "preview_iframe" && c.value) {
      let x = c.value.split(","), g = "";
      for (let u of x)
        if (u.startsWith("https://youtu.be")) {
          let C = u.split("/");
          g = "https://www.youtube.com/embed/" + C[C.length - 1];
          break;
        } else if (u.includes("/presentation/")) {
          u.includes("/edit") ? g = u.replace("/edit", "/embed") : g = u + "/embed";
          break;
        }
      g && (f += `<div style="margin: 24px 0px;">
          <iframe
            class="view_image"
            width="100%"
            height="374"
            src=${g}
            title="Embedded content preview"
          ></iframe>
        </div>`);
    } else c.value && (f += `<${c.type}>${c.value}</${c.type}>`);
    return f;
  }
  var d = Yl(), o = V(d);
  ut(o, {
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
  var v = T(o, 2);
  Q(v, 21, l, X, (c, f) => {
    var x = ie(), g = V(x);
    qi(g, () => s(h(f))), S(c, x);
  }), m(v), S(t, d);
}
customElements.define("mv-elegant-buffet-view", K(
  Kl,
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
var Zl = /* @__PURE__ */ q('<div class="input_label"> </div>'), Xl = /* @__PURE__ */ q('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Ql = (t, e) => {
  e(t);
}, es = /* @__PURE__ */ q('<div><input type="checkbox" form=""> <label> </label></div>'), ts = /* @__PURE__ */ q('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const rs = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function Cn(t, e) {
  re(e, !0), W(t, rs);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, "");
  E(e, "placeholder", 3, "");
  let a = E(e, "items", 3, ""), l = E(e, "value", 15, ""), s = E(e, "selectStyle", 3, ""), d = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((p) => p.trim()), v = [];
  l() && (v = l().split(",").map((p) => p.trim()));
  let c = {};
  for (let p of o)
    v.includes(p) ? c[p] = !0 : c[p] = !1;
  const f = (p) => {
    if (p && p.target) {
      let _ = p.target.id, k = p.target.checked;
      if (k && !v.includes(_))
        v.push(_);
      else if (!k && v.includes(_)) {
        let b = v.indexOf(_);
        v.splice(b, 1);
      }
      l(v.join(",")), d() && d()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var x = ts(), g = y(x);
  $(g, n, (p) => {
    var _ = Zl(), k = y(_, !0);
    m(_), N(() => R(k, n())), S(p, _);
  });
  var u = T(g, 2), C = y(u);
  $(C, i, (p) => {
    var _ = Xl(), k = y(_);
    m(_), N(() => A(k, "src", i())), S(p, _);
  });
  var w = T(C, 2);
  Q(w, 21, () => o, X, (p, _) => {
    var k = es(), b = y(k);
    ct(b), b.__change = [Ql, f];
    var I = T(b, 2), U = y(I, !0);
    m(I), m(k), N(() => {
      A(b, "id", h(_)), A(b, "name", h(_)), A(I, "for", h(_)), R(U, h(_));
    }), $i(b, () => c[h(_)], (O) => c[h(_)] = O), S(p, k);
  }), m(w), m(u), m(x), N(() => A(x, "style", s())), S(t, x), ne();
}
ae(["change"]);
customElements.define("ing-multi-select", K(
  Cn,
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
function ns(t, e) {
  e("", "");
}
var is = /* @__PURE__ */ q('<img class="image_preview svelte-15ctm06">'), as = /* @__PURE__ */ q('<img class="image_preview svelte-15ctm06">'), ls = /* @__PURE__ */ q('<div><div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-15ctm06" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-15ctm06"> </div> <!></div>'), ss = /* @__PURE__ */ q('<!> <form class="edit_frame svelte-15ctm06"></form>', 1);
const os = {
  hash: "svelte-15ctm06",
  code: ".edit_frame.svelte-15ctm06 {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-15ctm06::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-15ctm06 {margin-top:10px;margin-bottom:12px;font-size:14px;}.image_preview.svelte-15ctm06 {width:244px;margin-bottom:14px;border-radius:7px;}"
};
function ds(t, e) {
  re(e, !0), W(t, os);
  let r = E(e, "formId", 7, ""), n = E(e, "titleText", 3, ""), i = E(e, "titleUrl", 3, "/"), a = E(e, "titleImageUrl", 3, ""), l = E(e, "headerMenus", 19, () => []), s = E(e, "items", 31, () => G([])), d;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  let o = G({});
  function v(g, u) {
    const C = new FormData(d);
    for (let w of s()) {
      let p = !0, _ = C.get(w.id);
      _ && _.name && (p = !1, o[w.id] = URL.createObjectURL(_)), p && C.set(w.id, w.value);
    }
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: C
      }
    }));
  }
  var c = ss(), f = V(c);
  ut(f, {
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
  var x = T(f, 2);
  Q(x, 21, s, X, (g, u) => {
    var C = ie(), w = V(C);
    $(
      w,
      () => h(u).type == "input" || h(u).type == "textarea",
      (p) => {
        Ot(p, {
          get label() {
            return h(u).label;
          },
          get input() {
            return h(u).value;
          },
          set input(_) {
            h(u).value = _;
          },
          get type() {
            return h(u).type;
          },
          get focus() {
            return h(u).focus;
          },
          inputChanged: v
        });
      },
      (p) => {
        var _ = ie(), k = V(_);
        $(
          k,
          () => h(u).type == "select",
          (b) => {
            cr(b, {
              get label() {
                return h(u).label;
              },
              get items() {
                return h(u).options;
              },
              get value() {
                return h(u).value;
              },
              set value(I) {
                h(u).value = I;
              },
              inputChanged: v
            });
          },
          (b) => {
            var I = ie(), U = V(I);
            $(
              U,
              () => h(u).type == "multiselect",
              (O) => {
                Cn(O, {
                  get label() {
                    return h(u).label;
                  },
                  get items() {
                    return h(u).options;
                  },
                  get value() {
                    return h(u).value;
                  },
                  set value(H) {
                    h(u).value = H;
                  },
                  inputChanged: v
                });
              },
              (O) => {
                var H = ie(), J = V(H);
                $(
                  J,
                  () => h(u).type == "file",
                  (B) => {
                    var j = ls(), z = y(j), M = y(z), F = y(M, !0);
                    m(M), m(z);
                    var ee = T(z, 2);
                    ee.__change = [ns, v];
                    var te = T(ee, 2), le = y(te, !0);
                    m(te);
                    var vt = T(te, 2);
                    $(
                      vt,
                      () => o[h(u).id],
                      (De) => {
                        var Ue = is();
                        N(() => A(Ue, "src", o[h(u).id])), S(De, Ue);
                      },
                      (De) => {
                        var Ue = ie(), qn = V(Ue);
                        $(
                          qn,
                          () => h(u).value && (h(u).value.endsWith("png") || h(u).value.endsWith("jpg")),
                          (In) => {
                            var ur = as();
                            N(() => A(ur, "src", h(u).value)), S(In, ur);
                          },
                          null,
                          !0
                        ), S(De, Ue);
                      }
                    ), m(j), N(() => {
                      A(j, "id", h(u).id + "_container"), A(M, "for", h(u).id), R(F, h(u).label), A(ee, "id", h(u).id), A(ee, "name", h(u).id), R(le, h(u).value);
                    }), S(B, j);
                  },
                  null,
                  !0
                ), S(O, H);
              },
              !0
            ), S(b, I);
          },
          !0
        ), S(p, _);
      }
    ), S(g, C);
  }), m(x), or(x, (g) => d = g, () => d), N(() => A(x, "id", r())), S(t, c), ne();
}
ae(["change"]);
customElements.define("mv-elegant-buffet-edit", K(
  ds,
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
var cs = /* @__PURE__ */ q('<div class="landing_content_half svelte-695cfd"><img class="landing_content_half_image svelte-695cfd"></div> <div id="mission" class="landing_content_half_text svelte-695cfd"> </div>', 1), us = /* @__PURE__ */ q('<div id="mission" class="landing_content_half_text svelte-695cfd"> </div> <div class="landing_content_half svelte-695cfd"><img class="landing_content_half_image svelte-695cfd"></div>', 1), vs = /* @__PURE__ */ q('<div><div class="landing_sub_heading svelte-695cfd"> </div> <div class="landing_content_divided svelte-695cfd"><!></div></div>'), fs = /* @__PURE__ */ q('<!> <div class="background_left svelte-695cfd"><svg class="g-h-swoop-image" role="presentation" width="289" height="208" viewBox="0 0 315 222" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_228_2286)"><path d="M312.433 -0.753784C312.912 1.10786 313.214 3.26622 313.397 5.75039C315.766 43.4191 313.397 80.2612 297.105 114.978C266.832 180.101 212.21 210.124 143.637 218.95C94.2485 225.333 46.4444 217.558 0.000188589 201.267C-0.27401 201.17 -0.548162 201.074 -0.822266 200.977" stroke="#4285F4" stroke-width="2" stroke-linejoin="round"></path></g></svg></div> <div class="background_right svelte-695cfd"><svg class="g-h-swoop-image" role="presentation" width="192" height="618" viewBox="0 0 192 618" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2884 -0.999986C11.8162 21.3558 1.00001 48.7302 1.00001 77.9528C1.00003 229.64 178.083 265.688 178.083 415.406C178.083 477.349 135.321 488.804 135.321 550.137C135.321 583.574 163.684 611.749 193 617" stroke="#FBBC04" stroke-width="2" stroke-linejoin="round"></path></svg></div> <div class="landing_main_panel svelte-695cfd"><div id="overview" class="landing_heading svelte-695cfd"> </div> <div class="landing_content svelte-695cfd"><div> </div></div> <div class="landing_heading_small svelte-695cfd"><span><!> <!></span></div> <!> <div class="footer svelte-695cfd"></div></div>', 1);
const hs = {
  hash: "svelte-695cfd",
  code: `.background_left.svelte-695cfd {position:absolute;
    /* top: 72px; */}.background_right.svelte-695cfd {position:absolute;
    /* top: 72px; */right:0px;}.landing_main_panel.svelte-695cfd {background:var(--primary-background-color);left:0px;width:100%;bottom:0px;padding-top:104px;text-align:center;}.landing_heading.svelte-695cfd {margin:auto;margin-top:75px;width:60vw;font-size:72px;font-style:normal;}.landing_content_divided.svelte-695cfd {width:60vw;margin:auto;display:flex;}.landing_content.svelte-695cfd {margin:auto;margin-top:46px;color:#555;line-height:24px;width:60vw;}.landing_content_half.svelte-695cfd {margin:auto;margin-top:46px;color:#555;line-height:24px;width:50%;text-align:center;}.landing_content_half_image.svelte-695cfd {width:80%;border-radius:45px;}.landing_content_half_text.svelte-695cfd {margin:auto;margin-top:98px;color:#555;line-height:24px;width:50%;text-align:left;}.landing_heading_small.svelte-695cfd {margin:auto;margin-top:35px;width:60vw;}.landing_content_gray.svelte-695cfd {background-color:rgb(248, 249, 250);margin-top:74px;min-height:400px;
    /* margin-bottom: 400px; */padding-bottom:110px;}.landing_content_white.svelte-695cfd {background-color:rgb(255, 255, 255);
    /* margin-top: 74px; */min-height:400px;
    /* margin-bottom: 400px; */
    /* padding-bottom: 110px; */}.landing_sub_heading.svelte-695cfd {margin:auto;padding-top:124px;width:50vw;font-size:48px;font-style:normal;padding-bottom:22px;}.footer.svelte-695cfd {height:200px;width:100%;}`
};
function ps(t, e) {
  re(e, !0), W(t, hs);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "hero", 23, () => ({
    heroTitle: "Let's achieve more with our data & AI assets",
    heroDescription: "Apigee Marketplace is a specialized online hub designed to connect data providers and consumers within various industrial sectors. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
    heroButton1: "Sign in",
    heroButton2: "Register"
  })), s = E(e, "sections", 19, () => [
    {
      sectionTitle: "Our mission is data & AI collaboration at scale",
      sectionDescription: "Apigee Marketplace is a specialized online hub designed to connect data providers and consumers within and across industries. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
      sectionImageUrl: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sectionTitle: "Transparent & simple pricing for first, second and third-party data",
      sectionDescription: "Our data marketplace puts simplicity at the forefront. Pricing structures are clear and concise, with no hidden fees or complicated calculations. You'll find tiered subscription options based on your needs, or the ability to pay-as-you-go for individual datasets.",
      sectionImageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sectionTitle: "Verified & curated data from a network of high-quality partners",
      sectionDescription: "Data Marketplace is a specialized online hub designed to connect data providers and consumers within various industrial sectors. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
      sectionImageUrl: "https://images.unsplash.com/photo-1540646794357-6cbbd6f3501e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      sectionTitle: "Security & privacy built-in",
      sectionDescription: "Apigee Marketplace prioritizes security by providing a multi-layered approach to protect customer data and infrastructure. Built-in safeguards, like encryption and access control, are foundational to the platform. The global network, equipped with custom-designed hardware and a hardened operating system, ensures high availability and resilience against attacks.",
      sectionImageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]);
  typeof l() == "string" && l(JSON.parse(l())), typeof s() == "string" && l(JSON.parse(s()));
  var d = fs(), o = V(d);
  ut(o, {
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
  var v = T(o, 6), c = y(v), f = y(c, !0);
  m(c);
  var x = T(c, 2), g = y(x), u = y(g, !0);
  m(g), m(x);
  var C = T(x, 2), w = y(C), p = y(w);
  $(p, () => l().heroButton1, (b) => {
    Yt(b, {
      get buttonTitle() {
        return l().heroButton1;
      },
      type: "primary"
    });
  });
  var _ = T(p, 2);
  $(_, () => l().heroButton2, (b) => {
    Yt(b, {
      get buttonTitle() {
        return l().heroButton2;
      },
      type: "secondary"
    });
  }), m(w), m(C);
  var k = T(C, 2);
  Q(k, 17, s, X, (b, I, U) => {
    var O = vs();
    Je(O, `${(U & 1 ? "landing_content_gray" : "landing_content_white") ?? ""} svelte-695cfd`);
    var H = y(O), J = y(H, !0);
    m(H);
    var B = T(H, 2), j = y(B);
    $(
      j,
      () => !(U & 1),
      (z) => {
        var M = cs(), F = V(M), ee = y(F);
        A(ee, "alt", "image for section " + U), m(F);
        var te = T(F, 2), le = y(te, !0);
        m(te), N(() => {
          A(ee, "src", h(I).sectionImageUrl), R(le, h(I).sectionDescription);
        }), S(z, M);
      },
      (z) => {
        var M = us(), F = V(M), ee = y(F, !0);
        m(F);
        var te = T(F, 2), le = y(te);
        A(le, "alt", "image for section " + U), m(te), N(() => {
          R(ee, h(I).sectionDescription), A(le, "src", h(I).sectionImageUrl);
        }), S(z, M);
      }
    ), m(B), m(O), N(() => R(J, h(I).sectionTitle)), S(b, O);
  }), ar(2), m(v), N(() => {
    R(f, l().heroTitle), R(u, l().heroDescription);
  }), S(t, d), ne();
}
customElements.define("mv-elegant-landing", K(
  ps,
  {
    titleText: {},
    titleUrl: {},
    titleImageUrl: {},
    headerMenus: {},
    hero: {},
    sections: {}
  },
  [],
  [],
  !0
));
var gs = /* @__PURE__ */ q('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const _s = {
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
function ms(t, e) {
  W(t, _s);
  var r = gs();
  S(t, r);
}
customElements.define("mv-elegant-spinner", K(ms, {}, [], [], !0));
export {
  Jl as ElegantBuffet,
  ds as ElegantBuffetEdit,
  Kl as ElegantBuffetView,
  ut as ElegantHeader,
  xn as ElegantHeroSearch,
  ps as ElegantLanding,
  mn as ElegantSearch,
  ms as ElegantSpinner,
  Sn as ElegantTable,
  qa as IngBuffet,
  Yt as IngButton,
  Ji as IngButtonGray,
  Ha as IngForm,
  _n as IngHeaderLite,
  Ot as IngInput,
  cr as IngSelect,
  Va as IngTable
};
