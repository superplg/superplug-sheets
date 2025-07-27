var qn = Object.defineProperty;
var vr = (t) => {
  throw TypeError(t);
};
var Nn = (t, e, r) => e in t ? qn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var be = (t, e, r) => Nn(t, typeof e != "symbol" ? e + "" : e, r), fr = (t, e, r) => e.has(t) || vr("Cannot " + r);
var ce = (t, e, r) => (fr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), $t = (t, e, r) => e.has(t) ? vr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Mt = (t, e, r, n) => (fr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const An = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(An);
const Wt = 1, Kt = 2, Cr = 4, zn = 8, On = 16, $n = 1, Mn = 4, Dn = 8, Hn = 16, Un = 4, Rn = 1, jn = 2, Ir = "[", Zt = "[!", Xt = "]", Ve = {}, ve = Symbol(), Tr = !1;
function St(t) {
  console.warn("hydration_mismatch");
}
var Qt = Array.isArray, er = Array.from, mt = Object.keys, xt = Object.defineProperty, je = Object.getOwnPropertyDescriptor, Ln = Object.getOwnPropertyDescriptors, Bn = Object.prototype, Fn = Array.prototype, Ht = Object.getPrototypeOf;
function Vn(t) {
  return typeof t == "function";
}
const Xe = () => {
};
function qr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const qe = 2, Nr = 4, Ct = 8, It = 16, Se = 32, it = 64, Ze = 128, bt = 256, ge = 512, Me = 1024, at = 2048, we = 4096, lt = 8192, Ar = 16384, Tt = 32768, Pn = 1 << 18, zr = 1 << 19, Pe = Symbol("$state"), Gn = Symbol("");
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
function _e(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Or,
    version: 0
  };
}
function De(t) {
  return /* @__PURE__ */ ti(_e(t));
}
// @__NO_SIDE_EFFECTS__
function tr(t, e = !1) {
  const r = _e(t);
  return e || (r.equals = $r), r;
}
// @__NO_SIDE_EFFECTS__
function ti(t) {
  return K !== null && K.f & qe && (ye === null ? oi([t]) : ye.push(t)), t;
}
function re(t, e) {
  return K !== null && ci() && K.f & (qe | It) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (ye === null || !ye.includes(t)) && ei(), Ut(t, e);
}
function Ut(t, e) {
  return t.equals(e) || (t.v = e, t.version = Zr(), Dr(t, Me), j !== null && j.f & ge && !(j.f & Se) && (oe !== null && oe.includes(t) ? (Ae(j, Me), zt(j)) : $e === null ? di([t]) : $e.push(t))), e;
}
function Dr(t, e) {
  var r = t.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var a = r[i], l = a.f;
      l & Me || (Ae(a, e), l & (ge | Ze) && (l & qe ? Dr(
        /** @type {Derived} */
        a,
        at
      ) : zt(
        /** @type {Effect} */
        a
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function et(t) {
  var e = qe | Me;
  j === null ? e |= Ze : j.f |= zr;
  const r = {
    children: null,
    ctx: ke,
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
    parent: j
  };
  if (K !== null && K.f & qe) {
    var n = (
      /** @type {Derived} */
      K
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
      ) : Ue(
        /** @type {Effect} */
        n
      );
    }
  }
}
function Ur(t) {
  var e, r = j;
  ue(t.parent);
  try {
    Hr(t), e = Xr(t);
  } finally {
    ue(r);
  }
  return e;
}
function Rr(t) {
  var e = Ur(t), r = (Fe || t.f & Ze) && t.deps !== null ? at : ge;
  Ae(t, r), t.equals(e) || (t.v = e, t.version = Zr());
}
function rr(t) {
  Hr(t), rt(t, 0), Ae(t, lt), t.v = t.children = t.deps = t.ctx = t.reactions = null;
}
function ri(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function st(t, e, r, n = !0) {
  var i = (t & it) !== 0, a = j, l = {
    ctx: ke,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | Me,
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
    var s = Ge;
    try {
      hr(!0), At(l), l.f |= Ar;
    } catch (v) {
      throw Ue(l), v;
    } finally {
      hr(s);
    }
  } else e !== null && zt(l);
  var c = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & zr) === 0;
  if (!c && !i && n && (a !== null && ri(l, a), K !== null && K.f & qe)) {
    var o = (
      /** @type {Derived} */
      K
    );
    (o.children ?? (o.children = [])).push(l);
  }
  return l;
}
function jr(t) {
  const e = st(it, t, !0);
  return () => {
    Ue(e);
  };
}
function ot(t) {
  return st(Nr, t, !1);
}
function qt(t) {
  return st(Ct, t, !0);
}
function A(t) {
  return Nt(t);
}
function Nt(t, e = 0) {
  return st(Ct | It | e, t, !0);
}
function Ke(t, e = !0) {
  return st(Ct | Se, t, !0, e);
}
function Lr(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = K;
    me(null);
    try {
      e.call(null);
    } finally {
      me(r);
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
    Ue(r, e), r = n;
  }
}
function ni(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    e.f & Se || Ue(e), e = r;
  }
}
function Ue(t, e = !0) {
  var r = !1;
  if ((e || t.f & Pn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ce(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Fr(t, e && !r), Br(t), rt(t, 0), Ae(t, lt);
  var l = t.transitions;
  if (l !== null)
    for (const c of l)
      c.stop();
  Lr(t);
  var s = t.parent;
  s !== null && s.first !== null && Vr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Vr(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function Rt(t, e) {
  var r = [];
  nr(t, r, !0), Pr(r, () => {
    Ue(t), e && e();
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
  if (!(t.f & we)) {
    if (t.f ^= we, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & Tt) !== 0 || (n.f & Se) !== 0;
      nr(n, e, a ? r : !1), n = i;
    }
  }
}
function wt(t) {
  Gr(t, !0);
}
function Gr(t, e) {
  if (t.f & we) {
    ct(t) && At(t), t.f ^= we;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & Tt) !== 0 || (r.f & Se) !== 0;
      Gr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const ii = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let yt = !1, kt = !1, jt = [], Lt = [];
function Jr() {
  yt = !1;
  const t = jt.slice();
  jt = [], qr(t);
}
function Yr() {
  kt = !1;
  const t = Lt.slice();
  Lt = [], qr(t);
}
function dt(t) {
  yt || (yt = !0, queueMicrotask(Jr)), jt.push(t);
}
function ai(t) {
  kt || (kt = !0, ii(Yr)), Lt.push(t);
}
function li() {
  yt && Jr(), kt && Yr();
}
const Wr = 0, si = 1;
let pt = Wr, tt = !1, Ge = !1;
function hr(t) {
  Ge = t;
}
let Re = [], Je = 0;
let K = null;
function me(t) {
  K = t;
}
let j = null;
function ue(t) {
  j = t;
}
let ye = null;
function oi(t) {
  ye = t;
}
let oe = null, fe = 0, $e = null;
function di(t) {
  $e = t;
}
let Kr = 0, Fe = !1, ke = null;
function Zr() {
  return ++Kr;
}
function ci() {
  return !Mr;
}
function ct(t) {
  var l, s;
  var e = t.f;
  if (e & Me)
    return !0;
  if (e & at) {
    var r = t.deps, n = (e & Ze) !== 0;
    if (r !== null) {
      var i;
      if (e & bt) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= bt;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (ct(
          /** @type {Derived} */
          a
        ) && Rr(
          /** @type {Derived} */
          a
        ), n && j !== null && !Fe && !((s = a == null ? void 0 : a.reactions) != null && s.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || Ae(t, ge);
  }
  return !1;
}
function ui(t, e, r) {
  throw t;
}
function Xr(t) {
  var f;
  var e = oe, r = fe, n = $e, i = K, a = Fe, l = ye, s = ke, c = t.f;
  oe = /** @type {null | Value[]} */
  null, fe = 0, $e = null, K = c & (Se | it) ? null : t, Fe = !Ge && (c & Ze) !== 0, ye = null, ke = t.ctx;
  try {
    var o = (
      /** @type {Function} */
      (0, t.fn)()
    ), v = t.deps;
    if (oe !== null) {
      var d;
      if (rt(t, fe), v !== null && fe > 0)
        for (v.length = fe + oe.length, d = 0; d < oe.length; d++)
          v[fe + d] = oe[d];
      else
        t.deps = v = oe;
      if (!Fe)
        for (d = fe; d < v.length; d++)
          ((f = v[d]).reactions ?? (f.reactions = [])).push(t);
    } else v !== null && fe < v.length && (rt(t, fe), v.length = fe);
    return o;
  } finally {
    oe = e, fe = r, $e = n, K = i, Fe = a, ye = l, ke = s;
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
  (oe === null || !oe.includes(e)) && (Ae(e, at), e.f & (Ze | bt) || (e.f ^= bt), rt(
    /** @type {Derived} **/
    e,
    0
  ));
}
function rt(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      vi(t, r[n]);
}
function At(t) {
  var e = t.f;
  if (!(e & lt)) {
    Ae(t, ge);
    var r = j;
    j = t;
    try {
      e & It ? ni(t) : Fr(t), Br(t), Lr(t);
      var n = Xr(t);
      t.teardown = typeof n == "function" ? n : null, t.version = Kr;
    } catch (i) {
      ui(
        /** @type {Error} */
        i
      );
    } finally {
      j = r;
    }
  }
}
function Qr() {
  Je > 1e3 && (Je = 0, Yn()), Je++;
}
function en(t) {
  var e = t.length;
  if (e !== 0) {
    Qr();
    var r = Ge;
    Ge = !0;
    try {
      for (var n = 0; n < e; n++) {
        var i = t[n];
        i.f & ge || (i.f ^= ge);
        var a = [];
        tn(i, a), fi(a);
      }
    } finally {
      Ge = r;
    }
  }
}
function fi(t) {
  var e = t.length;
  if (e !== 0)
    for (var r = 0; r < e; r++) {
      var n = t[r];
      !(n.f & (lt | we)) && ct(n) && (At(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Vr(n) : n.fn = null));
    }
}
function hi() {
  if (tt = !1, Je > 1001)
    return;
  const t = Re;
  Re = [], en(t), tt || (Je = 0);
}
function zt(t) {
  pt === Wr && (tt || (tt = !0, queueMicrotask(hi)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (r & (it | Se)) {
      if (!(r & ge)) return;
      e.f ^= ge;
    }
  }
  Re.push(e);
}
function tn(t, e) {
  var r = t.first, n = [];
  e: for (; r !== null; ) {
    var i = r.f, a = (i & Se) !== 0, l = a && (i & ge) !== 0;
    if (!l && !(i & we))
      if (i & Ct) {
        a ? r.f ^= ge : ct(r) && At(r);
        var s = r.first;
        if (s !== null) {
          r = s;
          continue;
        }
      } else i & Nr && n.push(r);
    var c = r.next;
    if (c === null) {
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
    r = c;
  }
  for (var v = 0; v < n.length; v++)
    s = n[v], e.push(s), tn(s, e);
}
function rn(t) {
  var e = pt, r = Re;
  try {
    Qr();
    const i = [];
    pt = si, Re = i, tt = !1, en(r);
    var n = t == null ? void 0 : t();
    return li(), (Re.length > 0 || i.length > 0) && rn(), Je = 0, n;
  } finally {
    pt = e, Re = r;
  }
}
function h(t) {
  var s;
  var e = t.f, r = (e & qe) !== 0;
  if (r && e & lt) {
    var n = Ur(
      /** @type {Derived} */
      t
    );
    return rr(
      /** @type {Derived} */
      t
    ), n;
  }
  if (K !== null) {
    ye !== null && ye.includes(t) && Qn();
    var i = K.deps;
    oe === null && i !== null && i[fe] === t ? fe++ : oe === null ? oe = [t] : oe.push(t), $e !== null && j !== null && j.f & ge && !(j.f & Se) && $e.includes(t) && (Ae(j, Me), zt(j));
  } else if (r && /** @type {Derived} */
  t.deps === null) {
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((s = l.deriveds) != null && s.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, ct(a) && Rr(a)), t.v;
}
function Et(t) {
  const e = K;
  try {
    return K = null, t();
  } finally {
    K = e;
  }
}
const gi = ~(Me | at | ge);
function Ae(t, e) {
  t.f = t.f & gi | e;
}
function ne(t, e = !1, r) {
  ke = {
    p: ke,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  };
}
function ie(t) {
  const e = ke;
  if (e !== null) {
    const l = e.e;
    if (l !== null) {
      var r = j, n = K;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          ue(a.effect), me(a.reaction), ot(a.fn);
        }
      } finally {
        ue(r), me(n);
      }
    }
    ke = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Y(t, e = null, r) {
  if (typeof t != "object" || t === null || Pe in t)
    return t;
  const n = Ht(t);
  if (n !== Bn && n !== Fn)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Qt(t), l = _e(0);
  a && i.set("length", _e(
    /** @type {any[]} */
    t.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(c, o, v) {
        (!("value" in v) || v.configurable === !1 || v.enumerable === !1 || v.writable === !1) && Zn();
        var d = i.get(o);
        return d === void 0 ? (d = _e(v.value), i.set(o, d)) : re(d, Y(v.value, s)), !0;
      },
      deleteProperty(c, o) {
        var v = i.get(o);
        if (v === void 0)
          o in c && i.set(o, _e(ve));
        else {
          if (a && typeof o == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), f = Number(o);
            Number.isInteger(f) && f < d.v && re(d, f);
          }
          re(v, ve), gr(l);
        }
        return !0;
      },
      get(c, o, v) {
        var p;
        if (o === Pe)
          return t;
        var d = i.get(o), f = o in c;
        if (d === void 0 && (!f || (p = je(c, o)) != null && p.writable) && (d = _e(Y(f ? c[o] : ve, s)), i.set(o, d)), d !== void 0) {
          var x = h(d);
          return x === ve ? void 0 : x;
        }
        return Reflect.get(c, o, v);
      },
      getOwnPropertyDescriptor(c, o) {
        var v = Reflect.getOwnPropertyDescriptor(c, o);
        if (v && "value" in v) {
          var d = i.get(o);
          d && (v.value = h(d));
        } else if (v === void 0) {
          var f = i.get(o), x = f == null ? void 0 : f.v;
          if (f !== void 0 && x !== ve)
            return {
              enumerable: !0,
              configurable: !0,
              value: x,
              writable: !0
            };
        }
        return v;
      },
      has(c, o) {
        var x;
        if (o === Pe)
          return !0;
        var v = i.get(o), d = v !== void 0 && v.v !== ve || Reflect.has(c, o);
        if (v !== void 0 || j !== null && (!d || (x = je(c, o)) != null && x.writable)) {
          v === void 0 && (v = _e(d ? Y(c[o], s) : ve), i.set(o, v));
          var f = h(v);
          if (f === ve)
            return !1;
        }
        return d;
      },
      set(c, o, v, d) {
        var _;
        var f = i.get(o), x = o in c;
        if (a && o === "length")
          for (var p = v; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var u = i.get(p + "");
            u !== void 0 ? re(u, ve) : p in c && (u = _e(ve), i.set(p + "", u));
          }
        f === void 0 ? (!x || (_ = je(c, o)) != null && _.writable) && (f = _e(void 0), re(f, Y(v, s)), i.set(o, f)) : (x = f.v !== ve, re(f, Y(v, s)));
        var C = Reflect.getOwnPropertyDescriptor(c, o);
        if (C != null && C.set && C.set.call(d, v), !x) {
          if (a && typeof o == "string") {
            var w = (
              /** @type {Source<number>} */
              i.get("length")
            ), g = Number(o);
            Number.isInteger(g) && g >= w.v && re(w, g + 1);
          }
          gr(l);
        }
        return !0;
      },
      ownKeys(c) {
        h(l);
        var o = Reflect.ownKeys(c).filter((f) => {
          var x = i.get(f);
          return x === void 0 || x.v !== ve;
        });
        for (var [v, d] of i)
          d.v !== ve && !(v in c) && o.push(v);
        return o;
      },
      setPrototypeOf() {
        Xn();
      }
    }
  );
}
function gr(t, e = 1) {
  re(t, t.v + e);
}
function pr(t) {
  return t !== null && typeof t == "object" && Pe in t ? t[Pe] : t;
}
function pi(t, e) {
  return Object.is(pr(t), pr(e));
}
var _r, nn, an;
function Bt() {
  if (_r === void 0) {
    _r = window;
    var t = Element.prototype, e = Node.prototype;
    nn = je(e, "firstChild").get, an = je(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__styles = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function He(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ne(t) {
  return nn.call(t);
}
// @__NO_SIDE_EFFECTS__
function Ce(t) {
  return an.call(t);
}
function y(t, e) {
  if (!B)
    return /* @__PURE__ */ Ne(t);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ne(G)
  );
  if (r === null)
    r = G.appendChild(He());
  else if (e && r.nodeType !== 3) {
    var n = He();
    return r == null || r.before(n), he(n), n;
  }
  return he(r), r;
}
function P(t, e) {
  if (!B) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Ne(
        /** @type {Node} */
        t
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Ce(r) : r;
  }
  return G;
}
function q(t, e = 1, r = !1) {
  let n = B ? G : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(n);
  if (!B)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = He();
    return n == null || n.before(a), he(a), a;
  }
  return he(n), /** @type {TemplateNode} */
  n;
}
function ir(t) {
  t.textContent = "";
}
let B = !1;
function Te(t) {
  B = t;
}
let G;
function he(t) {
  if (t === null)
    throw St(), Ve;
  return G = t;
}
function Le() {
  return he(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Ce(G)
  );
}
function m(t) {
  if (B) {
    if (/* @__PURE__ */ Ce(G) !== null)
      throw St(), Ve;
    G = t;
  }
}
function ar(t = 1) {
  if (B) {
    for (var e = t, r = G; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(r);
    G = r;
  }
}
function Ft() {
  for (var t = 0, e = G; ; ) {
    if (e.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        e.data
      );
      if (r === Xt) {
        if (t === 0) return e;
        t -= 1;
      } else (r === Ir || r === Zt) && (t += 1);
    }
    var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(e)
    );
    e.remove(), e = n;
  }
}
function mr(t, e) {
  if (e) {
    const r = document.body;
    t.autofocus = !0, dt(() => {
      document.activeElement === r && t.focus();
    });
  }
}
function _i(t) {
  B && /* @__PURE__ */ Ne(t) !== null && ir(t);
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
  var e = K, r = j;
  me(null), ue(null);
  try {
    return t();
  } finally {
    me(e), ue(r);
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
function le(t) {
  for (var e = 0; e < t.length; e++)
    sn.add(t[e]);
  for (var r of Vt)
    r(t);
}
function ft(t) {
  var g;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((g = t.composedPath) == null ? void 0 : g.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  ), l = 0, s = t.__root;
  if (s) {
    var c = i.indexOf(s);
    if (c !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = i.indexOf(e);
    if (o === -1)
      return;
    c <= o && (l = c);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    xt(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var v = K, d = j;
    me(null), ue(null);
    try {
      for (var f, x = []; a !== null; ) {
        var p = a.assignedSlot || a.parentNode || /** @type {any} */
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
        if (t.cancelBubble || p === e || p === null)
          break;
        a = p;
      }
      if (f) {
        for (let _ of x)
          queueMicrotask(() => {
            throw _;
          });
        throw f;
      }
    } finally {
      t.__root = e, delete t.currentTarget, me(v), ue(d);
    }
  }
}
function on(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Ee(t, e) {
  var r = (
    /** @type {Effect} */
    j
  );
  r.nodes_start === null && (r.nodes_start = t, r.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function I(t, e) {
  var r = (e & Rn) !== 0, n = (e & jn) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (B)
      return Ee(G, null), G;
    i === void 0 && (i = on(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ne(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(l)
      ), c = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ee(s, c);
    } else
      Ee(l, l);
    return l;
  };
}
function xi(t = "") {
  if (!B) {
    var e = He(t + "");
    return Ee(e, e), e;
  }
  var r = G;
  return r.nodeType !== 3 && (r.before(r = He()), he(r)), Ee(r, r), r;
}
function ae() {
  if (B)
    return Ee(G, null), G;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = He();
  return t.append(e, r), Ee(e, r), t;
}
function S(t, e) {
  if (B) {
    j.nodes_end = G, Le();
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
  const r = e.target, n = B, i = G;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ne(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== Ir); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ Ce(a);
    if (!a)
      throw Ve;
    Te(!0), he(
      /** @type {Comment} */
      a
    ), Le();
    const l = cn(t, { ...e, anchor: a });
    if (G === null || G.nodeType !== 8 || /** @type {Comment} */
    G.data !== Xt)
      throw St(), Ve;
    return Te(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === Ve)
      return e.recover === !1 && Wn(), Bt(), ir(r), Te(!1), dn(t, e);
    throw l;
  } finally {
    Te(n), he(i);
  }
}
const Be = /* @__PURE__ */ new Map();
function cn(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Bt();
  var s = /* @__PURE__ */ new Set(), c = (d) => {
    for (var f = 0; f < d.length; f++) {
      var x = d[f];
      if (!s.has(x)) {
        s.add(x);
        var p = wi(x);
        e.addEventListener(x, ft, { passive: p });
        var u = Be.get(x);
        u === void 0 ? (document.addEventListener(x, ft, { passive: p }), Be.set(x, 1)) : Be.set(x, u + 1);
      }
    }
  };
  c(er(sn)), Vt.add(c);
  var o = void 0, v = jr(() => {
    var d = r ?? e.appendChild(He());
    return Ke(() => {
      if (a) {
        ne({});
        var f = (
          /** @type {ComponentContext} */
          ke
        );
        f.c = a;
      }
      i && (n.$$events = i), B && Ee(
        /** @type {TemplateNode} */
        d,
        null
      ), Pt = l, o = t(d, n) || {}, Pt = !0, B && (j.nodes_end = G), a && ie();
    }), () => {
      var p;
      for (var f of s) {
        e.removeEventListener(f, ft);
        var x = (
          /** @type {number} */
          Be.get(f)
        );
        --x === 0 ? (document.removeEventListener(f, ft), Be.delete(f)) : Be.set(f, x);
      }
      Vt.delete(c), Gt.delete(o), d !== r && ((p = d.parentNode) == null || p.removeChild(d));
    };
  });
  return Gt.set(o, v), o;
}
let Gt = /* @__PURE__ */ new WeakMap();
function ki(t) {
  const e = Gt.get(t);
  e && e();
}
function O(t, e, r, n = null, i = !1) {
  B && Le();
  var a = t, l = null, s = null, c = null, o = i ? Tt : 0;
  Nt(() => {
    if (c === (c = !!e())) return;
    let v = !1;
    if (B) {
      const d = (
        /** @type {Comment} */
        a.data === Zt
      );
      c === d && (a = Ft(), he(a), Te(!1), v = !0);
    }
    c ? (l ? wt(l) : l = Ke(() => r(a)), s && Rt(s, () => {
      s = null;
    })) : (s ? wt(s) : n && (s = Ke(() => n(a))), l && Rt(l, () => {
      l = null;
    })), v && Te(!0);
  }, o), B && (a = G);
}
function Q(t, e) {
  return e;
}
function Ei(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    nr(e[l].e, i, !0);
  var s = a > 0 && i.length === 0 && r !== null;
  if (s) {
    var c = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    ir(c), c.append(
      /** @type {Element} */
      r
    ), n.clear(), ze(t, e[0].prev, e[a - 1].next);
  }
  Pr(i, () => {
    for (var o = 0; o < a; o++) {
      var v = e[o];
      s || (n.delete(v.k), ze(t, v.prev, v.next)), Ue(v.e, !s);
    }
  });
}
function ee(t, e, r, n, i, a = null) {
  var l = t, s = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, c = (e & Cr) !== 0;
  if (c) {
    var o = (
      /** @type {Element} */
      t
    );
    l = B ? he(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ne(o)
    ) : o.appendChild(He());
  }
  B && Le();
  var v = null, d = !1;
  Nt(() => {
    var f = r(), x = Qt(f) ? f : f == null ? [] : er(f), p = x.length;
    if (d && p === 0)
      return;
    d = p === 0;
    let u = !1;
    if (B) {
      var C = (
        /** @type {Comment} */
        l.data === Zt
      );
      C !== (p === 0) && (l = Ft(), he(l), Te(!1), u = !0);
    }
    if (B) {
      for (var w = null, g, _ = 0; _ < p; _++) {
        if (G.nodeType === 8 && /** @type {Comment} */
        G.data === Xt) {
          l = /** @type {Comment} */
          G, u = !0, Te(!1);
          break;
        }
        var k = x[_], b = n(k, _);
        g = un(G, s, w, null, k, b, _, i, e), s.items.set(b, g), w = g;
      }
      p > 0 && he(Ft());
    }
    if (!B) {
      var T = (
        /** @type {Effect} */
        K
      );
      Si(x, s, l, i, e, (T.f & we) !== 0, n);
    }
    a !== null && (p === 0 ? v ? wt(v) : v = Ke(() => a(l)) : v !== null && Rt(v, () => {
      v = null;
    })), u && Te(!0), r();
  }), B && (l = G);
}
function Si(t, e, r, n, i, a, l) {
  var V, te, N, H;
  var s = (i & zn) !== 0, c = (i & (Wt | Kt)) !== 0, o = t.length, v = e.items, d = e.first, f = d, x, p = null, u, C = [], w = [], g, _, k, b;
  if (s)
    for (b = 0; b < o; b += 1)
      g = t[b], _ = l(g, b), k = v.get(_), k !== void 0 && ((V = k.a) == null || V.measure(), (u ?? (u = /* @__PURE__ */ new Set())).add(k));
  for (b = 0; b < o; b += 1) {
    if (g = t[b], _ = l(g, b), k = v.get(_), k === void 0) {
      var T = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      p = un(
        T,
        e,
        p,
        p === null ? e.first : p.next,
        g,
        _,
        b,
        n,
        i
      ), v.set(_, p), C = [], w = [], f = p.next;
      continue;
    }
    if (c && Ci(k, g, b, i), k.e.f & we && (wt(k.e), s && ((te = k.a) == null || te.unfix(), (u ?? (u = /* @__PURE__ */ new Set())).delete(k))), k !== f) {
      if (x !== void 0 && x.has(k)) {
        if (C.length < w.length) {
          var D = w[0], $;
          p = D.prev;
          var M = C[0], J = C[C.length - 1];
          for ($ = 0; $ < C.length; $ += 1)
            br(C[$], D, r);
          for ($ = 0; $ < w.length; $ += 1)
            x.delete(w[$]);
          ze(e, M.prev, J.next), ze(e, p, M), ze(e, J, D), f = D, p = J, b -= 1, C = [], w = [];
        } else
          x.delete(k), br(k, f, r), ze(e, k.prev, k.next), ze(e, k, p === null ? e.first : p.next), ze(e, p, k), p = k;
        continue;
      }
      for (C = [], w = []; f !== null && f.k !== _; )
        (a || !(f.e.f & we)) && (x ?? (x = /* @__PURE__ */ new Set())).add(f), w.push(f), f = f.next;
      if (f === null)
        continue;
      k = f;
    }
    C.push(k), p = k, f = k.next;
  }
  if (f !== null || x !== void 0) {
    for (var L = x === void 0 ? [] : er(x); f !== null; )
      (a || !(f.e.f & we)) && L.push(f), f = f.next;
    var F = L.length;
    if (F > 0) {
      var W = i & Cr && o === 0 ? r : null;
      if (s) {
        for (b = 0; b < F; b += 1)
          (N = L[b].a) == null || N.measure();
        for (b = 0; b < F; b += 1)
          (H = L[b].a) == null || H.fix();
      }
      Ei(e, L, W, v);
    }
  }
  s && dt(() => {
    var U;
    if (u !== void 0)
      for (k of u)
        (U = k.a) == null || U.apply();
  }), j.first = e.first && e.first.e, j.last = p && p.e;
}
function Ci(t, e, r, n) {
  n & Wt && Ut(t.v, e), n & Kt ? Ut(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function un(t, e, r, n, i, a, l, s, c) {
  var o = (c & Wt) !== 0, v = (c & On) === 0, d = o ? v ? /* @__PURE__ */ tr(i) : _e(i) : i, f = c & Kt ? _e(l) : l, x = {
    i: f,
    v: d,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return x.e = Ke(() => s(t, d, f), B), x.e.prev = r && r.e, x.e.next = n && n.e, r === null ? e.first = x : (r.next = x, r.e.next = x.e), n !== null && (n.prev = x, n.e.prev = x.e), x;
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
      /* @__PURE__ */ Ce(a)
    );
    i.before(a), a = l;
  }
}
function ze(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function Ii(t, e, r, n, i) {
  var a = t, l = "", s;
  Nt(() => {
    if (l === (l = e() ?? "")) {
      B && Le();
      return;
    }
    s !== void 0 && (Ue(s), s = void 0), l !== "" && (s = Ke(() => {
      if (B) {
        G.data;
        for (var c = Le(), o = c; c !== null && (c.nodeType !== 8 || /** @type {Comment} */
        c.data !== ""); )
          o = c, c = /** @type {TemplateNode} */
          /* @__PURE__ */ Ce(c);
        if (c === null)
          throw St(), Ve;
        Ee(G, o), a = he(c);
        return;
      }
      var v = l + "", d = on(v);
      Ee(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ne(d),
        /** @type {TemplateNode} */
        d.lastChild
      ), a.before(d);
    }));
  });
}
function sr(t, e, r, n, i) {
  var s;
  B && Le();
  var a = (s = e.$$slots) == null ? void 0 : s[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
}
function Z(t, e) {
  dt(() => {
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
function ut(t) {
  if (B) {
    var e = !1, r = () => {
      if (!e) {
        if (e = !0, t.hasAttribute("value")) {
          var n = t.value;
          z(t, "value", null), t.value = n;
        }
        if (t.hasAttribute("checked")) {
          var i = t.checked;
          z(t, "checked", null), t.checked = i;
        }
      }
    };
    t.__on_r = r, ai(r), ln();
  }
}
function z(t, e, r, n) {
  var i = t.__attributes ?? (t.__attributes = {});
  B && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Gn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && vn(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function Dt(t, e, r) {
  var n = K, i = j;
  me(null), ue(null);
  try {
    vn(t).includes(e) ? t[e] = r : z(t, e, r);
  } finally {
    me(n), ue(i);
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
function Ye(t, e) {
  var r = t.__className, n = Ti(e);
  B && t.className === n ? t.__className = n : (r !== n || B && t.className !== n) && (e == null ? t.removeAttribute("class") : t.className = n, t.__className = n);
}
function Ti(t) {
  return t ?? "";
}
function We(t, e, r) {
  if (r) {
    if (t.classList.contains(e)) return;
    t.classList.add(e);
  } else {
    if (!t.classList.contains(e)) return;
    t.classList.remove(e);
  }
}
const qi = () => performance.now(), Oe = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (t) => requestAnimationFrame(t)
  ),
  now: () => qi(),
  tasks: /* @__PURE__ */ new Set()
};
function fn(t) {
  Oe.tasks.forEach((e) => {
    e.c(t) || (Oe.tasks.delete(e), e.f());
  }), Oe.tasks.size !== 0 && Oe.tick(fn);
}
function Ni(t) {
  let e;
  return Oe.tasks.size === 0 && Oe.tick(fn), {
    promise: new Promise((r) => {
      Oe.tasks.add(e = { c: t, f: r });
    }),
    abort() {
      Oe.tasks.delete(e);
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
  var i = (t & Un) !== 0, a = "both", l, s = e.inert, c, o;
  function v() {
    var u = K, C = j;
    me(null), ue(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      me(u), ue(C);
    }
  }
  var d = {
    is_global: i,
    in() {
      e.inert = s, ht(e, "introstart"), c = Jt(e, v(), o, 1, () => {
        ht(e, "introend"), c == null || c.abort(), c = l = void 0;
      });
    },
    out(u) {
      e.inert = !0, ht(e, "outrostart"), o = Jt(e, v(), c, 0, () => {
        ht(e, "outroend"), u == null || u();
      });
    },
    stop: () => {
      c == null || c.abort(), o == null || o.abort();
    }
  }, f = (
    /** @type {Effect} */
    j
  );
  if ((f.transitions ?? (f.transitions = [])).push(d), Pt) {
    var x = i;
    if (!x) {
      for (var p = (
        /** @type {Effect | null} */
        f.parent
      ); p && p.f & Tt; )
        for (; (p = p.parent) && !(p.f & It); )
          ;
      x = !p || (p.f & Ar) !== 0;
    }
    x && ot(() => {
      Et(() => d.in());
    });
  }
}
function Jt(t, e, r, n, i) {
  var a = n === 1;
  if (Vn(e)) {
    var l, s = !1;
    return dt(() => {
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
      abort: Xe,
      deactivate: Xe,
      reset: Xe,
      t: () => n
    };
  const { delay: c = 0, css: o, tick: v, easing: d = zi } = e;
  var f = [];
  if (a && r === void 0 && (v && v(0, 1), o)) {
    var x = yr(o(0, 1));
    f.push(x, x);
  }
  var p = () => 1 - n, u = t.animate(f, { duration: c });
  return u.onfinish = () => {
    var C = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var w = n - C, g = (
      /** @type {number} */
      e.duration * Math.abs(w)
    ), _ = [];
    if (g > 0) {
      if (o)
        for (var k = Math.ceil(g / 16.666666666666668), b = 0; b <= k; b += 1) {
          var T = C + w * d(b / k), D = o(T, 1 - T);
          _.push(yr(D));
        }
      p = () => {
        var $ = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          u.currentTime
        );
        return C + w * d($ / g);
      }, v && Ni(() => {
        if (u.playState !== "running") return !1;
        var $ = p();
        return v($, 1 - $), !0;
      });
    }
    u = t.animate(_, { duration: g, fill: "forwards" }), u.onfinish = () => {
      p = () => n, v == null || v(n, 1 - n), i();
    };
  }, {
    abort: () => {
      u && (u.cancel(), u.effect = null, u.onfinish = Xe);
    },
    deactivate: () => {
      i = Xe;
    },
    reset: () => {
      n === 0 && (v == null || v(1, 0));
    },
    t: () => p()
  };
}
function nt(t, e, r = e) {
  lr(t, "input", () => {
    var n = kr(t) ? Er(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), qt(() => {
    var n = e();
    if (B && t.defaultValue !== t.value) {
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
  }), e() == null && r(!1), qt(() => {
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
    return Di(t, e);
  for (var n of t.options) {
    var i = Qe(n);
    if (pi(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Mi(t, e) {
  ot(() => {
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
function gn(t, e, r = e) {
  var n = !0;
  lr(t, "change", () => {
    var i;
    if (t.multiple)
      i = [].map.call(t.querySelectorAll(":checked"), Qe);
    else {
      var a = t.querySelector(":checked");
      i = a && Qe(a);
    }
    r(i);
  }), ot(() => {
    var i = e();
    if (hn(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = Qe(a), r(i));
    }
    t.__value = i, n = !1;
  }), Mi(t);
}
function Di(t, e) {
  for (var r of t.options)
    r.selected = ~e.indexOf(Qe(r));
}
function Qe(t) {
  return "__value" in t ? t.__value : t.value;
}
function Sr(t, e) {
  return t === e || (t == null ? void 0 : t[Pe]) === e;
}
function or(t = {}, e, r, n) {
  return ot(() => {
    var i, a;
    return qt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], Et(() => {
        t !== r(...a) && (e(t, ...a), i && Sr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      dt(() => {
        a && Sr(r(...a), t) && e(null, ...a);
      });
    };
  }), t;
}
let gt = !1;
function Hi(t) {
  var e = gt;
  try {
    return gt = !1, [t(), gt];
  } finally {
    gt = e;
  }
}
function Ui(t) {
  for (var e = j, r = j; e !== null && !(e.f & (Se | it)); )
    e = e.parent;
  try {
    return ue(e), t();
  } finally {
    ue(r);
  }
}
function E(t, e, r, n) {
  var b;
  var i = (r & $n) !== 0, a = !Mr, l = (r & Dn) !== 0, s = (r & Hn) !== 0, c = !1, o;
  l ? [o, c] = Hi(() => (
    /** @type {V} */
    t[e]
  )) : o = /** @type {V} */
  t[e];
  var v = (b = je(t, e)) == null ? void 0 : b.set, d = (
    /** @type {V} */
    n
  ), f = !0, x = !1, p = () => (x = !0, f && (f = !1, s ? d = Et(
    /** @type {() => V} */
    n
  ) : d = /** @type {V} */
  n), d);
  o === void 0 && n !== void 0 && (v && a && Kn(), o = p(), v && v(o));
  var u;
  if (u = () => {
    var T = (
      /** @type {V} */
      t[e]
    );
    return T === void 0 ? p() : (f = !0, x = !1, T);
  }, !(r & Mn))
    return u;
  if (v) {
    var C = t.$$legacy;
    return function(T, D) {
      return arguments.length > 0 ? ((!D || C || c) && v(D ? u() : T), T) : u();
    };
  }
  var w = !1, g = !1, _ = /* @__PURE__ */ tr(o), k = Ui(
    () => /* @__PURE__ */ et(() => {
      var T = u(), D = h(_);
      return w ? (w = !1, g = !0, D) : (g = !1, _.v = T);
    })
  );
  return i || (k.equals = $r), function(T, D) {
    if (arguments.length > 0) {
      const $ = D ? h(k) : l ? Y(T) : T;
      return k.equals($) || (w = !0, re(_, $), x && d !== void 0 && (d = $), Et(() => h(k))), T;
    }
    return h(k);
  };
}
function Ri(t) {
  return new ji(t);
}
var Ie, pe;
class ji {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    /** @type {any} */
    $t(this, Ie);
    /** @type {Record<string, any>} */
    $t(this, pe);
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, s) => {
      var c = /* @__PURE__ */ tr(s);
      return r.set(l, c), c;
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
        set(l, s, c) {
          return re(r.get(s) ?? n(s, c), c), Reflect.set(l, s, c);
        }
      }
    );
    Mt(this, pe, (e.hydrate ? yi : dn)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && rn(), Mt(this, Ie, i.$$events);
    for (const l of Object.keys(ce(this, pe)))
      l === "$set" || l === "$destroy" || l === "$on" || xt(this, l, {
        get() {
          return ce(this, pe)[l];
        },
        /** @param {any} value */
        set(s) {
          ce(this, pe)[l] = s;
        },
        enumerable: !0
      });
    ce(this, pe).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
    }, ce(this, pe).$destroy = () => {
      ki(ce(this, pe));
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    ce(this, pe).$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, r) {
    ce(this, Ie)[e] = ce(this, Ie)[e] || [];
    const n = (...i) => r.call(this, ...i);
    return ce(this, Ie)[e].push(n), () => {
      ce(this, Ie)[e] = ce(this, Ie)[e].filter(
        /** @param {any} fn */
        (i) => i !== n
      );
    };
  }
  $destroy() {
    ce(this, pe).$destroy();
  }
}
Ie = new WeakMap(), pe = new WeakMap();
let pn;
typeof HTMLElement == "function" && (pn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(e, r, n) {
    super();
    /** The Svelte component constructor */
    be(this, "$$ctor");
    /** Slots */
    be(this, "$$s");
    /** @type {any} The Svelte component instance */
    be(this, "$$c");
    /** Whether or not the custom element is connected */
    be(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    be(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    be(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    be(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    be(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    be(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    be(this, "$$me");
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
      this.$$c = Ri({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$host: this
        }
      }), this.$$me = jr(() => {
        qt(() => {
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
function X(t, e, r, n, i, a) {
  let l = class extends pn {
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
      set(c) {
        var d;
        c = _t(s, c, e), this.$$d[s] = c;
        var o = this.$$c;
        if (o) {
          var v = (d = je(o, s)) == null ? void 0 : d.get;
          v ? o[s] = c : o.$set({ [s]: c });
        }
      }
    });
  }), n.forEach((s) => {
    xt(l.prototype, s, {
      get() {
        var c;
        return (c = this.$$c) == null ? void 0 : c[s];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
function Bi(t, e, r) {
  e() && e()(t), r() && document.dispatchEvent(new CustomEvent(r(), { detail: {} }));
}
var Fi = /* @__PURE__ */ I('<button type="button"><!></button>');
const Vi = {
  hash: "svelte-jcodks",
  code: '.button.svelte-jcodks {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.button--primary.svelte-jcodks {background-color:#1ea7fd;color:white;}.button--secondary.svelte-jcodks {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-jcodks {padding:10px 16px;font-size:12px;}.button--medium.svelte-jcodks {padding:11px 20px;font-size:14px;}.button--large.svelte-jcodks {padding:12px 24px;font-size:16px;}'
};
function Yt(t, e) {
  ne(e, !0), Z(t, Vi);
  const r = E(e, "buttonTitle", 3, ""), n = E(e, "type", 3, "primary"), i = E(e, "size", 3, "medium"), a = E(e, "onClick", 3, void 0);
  var l = Fi();
  l.__click = [Bi, a, r];
  var s = y(l);
  O(
    s,
    r,
    (c) => {
      var o = xi();
      A(() => R(o, r())), S(c, o);
    },
    (c) => {
      var o = ae(), v = P(o);
      sr(v, e, "default", {}), S(c, o);
    }
  ), m(l), A(() => Ye(l, `${"button button--" + i() + " button--" + n()} svelte-jcodks`)), S(t, l), ie();
}
le(["click"]);
customElements.define("ing-button", X(
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
var Pi = /* @__PURE__ */ I('<button type="button"><!></button>');
const Gi = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function Ji(t, e) {
  Z(t, Gi), E(e, "type", 3, "primary");
  const r = E(e, "size", 3, "medium");
  E(e, "label", 3, "Button");
  const n = E(e, "onClick", 3, void 0);
  var i = Pi();
  i.__click = function(...l) {
    var s;
    (s = n()) == null || s.apply(this, l);
  };
  var a = y(i);
  sr(a, e, "default", {}), m(i), A(() => Ye(i, `${"button button--" + r()} svelte-1c7d33o`)), S(t, i);
}
le(["click"]);
customElements.define("ing-button-gray", X(Ji, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Yi = /* @__PURE__ */ I('<div class="input_label svelte-1485t9m"> </div>'), Wi = /* @__PURE__ */ I('<span class="input_icon svelte-1485t9m"><img width="16px" alt="in"></span>""', 1), Ki = (t, e) => {
  e(t);
}, Zi = /* @__PURE__ */ I('<textarea class="input_field svelte-1485t9m" rows="10" style="height: auto;" form=""></textarea>'), Xi = (t, e) => {
  e(t);
}, Qi = /* @__PURE__ */ I('<input class="input_field svelte-1485t9m" form="">'), ea = /* @__PURE__ */ I('<div class="input_frame svelte-1485t9m"><!> <div class="input_box svelte-1485t9m"><!> <!></div></div>');
const ta = {
  hash: "svelte-1485t9m",
  code: `.input_frame.svelte-1485t9m {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1485t9m {margin-bottom:6px;}.input_box.svelte-1485t9m {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1485t9m {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1485t9m {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;
    /* color: #66799e; */color:#000;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1485t9m:focus {outline:none;}`
};
function Ot(t, e) {
  ne(e, !0), Z(t, ta);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "type", 3, "text"), l = E(e, "placeholder", 3, ""), s = E(e, "input", 15, ""), c = E(e, "inputStyle", 3, ""), o = E(e, "focus", 3, !1), v = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  const d = (w) => {
    if (w && w.target) {
      let g = "";
      w.target.value && (g = w.target.value), v() && v()(r(), g), document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: r(), input: g }
      }));
    }
  };
  var f = ea(), x = y(f);
  O(x, n, (w) => {
    var g = Yi(), _ = y(g, !0);
    m(g), A(() => R(_, n())), S(w, g);
  });
  var p = q(x, 2), u = y(p);
  O(u, i, (w) => {
    var g = Wi(), _ = P(g), k = y(_);
    m(_), ar(), A(() => z(k, "src", i())), S(w, g);
  });
  var C = q(u, 2);
  O(
    C,
    () => a() == "textarea",
    (w) => {
      var g = Zi();
      _i(g), mr(g, o()), g.__input = [Ki, d], A(() => {
        z(g, "id", r()), z(g, "name", r()), z(g, "placeholder", l());
      }), nt(g, s), S(w, g);
    },
    (w) => {
      var g = Qi();
      ut(g), mr(g, o()), g.__input = [Xi, d], A(() => {
        z(g, "id", r()), z(g, "name", r()), z(g, "type", a()), z(g, "placeholder", l());
      }), nt(g, s), S(w, g);
    }
  ), m(p), m(f), A(() => z(f, "style", c())), S(t, f), ie();
}
le(["input"]);
customElements.define("ing-input", X(
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
var ra = /* @__PURE__ */ I('<a class="svelte-hcumdc"> </a>'), na = (t, e, r) => e(h(r).title), ia = /* @__PURE__ */ I('<button class="menu_item_button svelte-hcumdc"> </button>'), aa = /* @__PURE__ */ I('<div class="menu_item svelte-hcumdc"><!></div>'), la = /* @__PURE__ */ I('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const sa = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function dr(t, e) {
  ne(e, !0), Z(t, sa);
  let r = E(e, "position", 19, () => ({})), n = E(e, "menuItems", 19, () => []);
  function i(s) {
    document.dispatchEvent(new CustomEvent(s, { detail: {} }));
  }
  var a = la(), l = q(y(a), 2);
  ee(l, 21, n, Q, (s, c) => {
    var o = aa(), v = y(o);
    O(
      v,
      () => h(c).url,
      (d) => {
        var f = ra(), x = y(f, !0);
        m(f), A(() => {
          z(f, "href", h(c).url), R(x, h(c).title);
        }), S(d, f);
      },
      (d) => {
        var f = ia();
        f.__click = [na, i, c];
        var x = y(f, !0);
        m(f), A(() => R(x, h(c).title)), S(d, f);
      }
    ), m(o), S(s, o);
  }), m(l), m(a), A(() => z(a, "style", `top: ${r().top}; left: ${r().left};`)), S(t, a), ie();
}
le(["click"]);
customElements.define("mv-elegant-dropdown", X(dr, { position: {}, menuItems: {} }, [], [], !0));
var oa = /* @__PURE__ */ I('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), da = (t, e) => {
  re(e, !h(e));
}, ca = /* @__PURE__ */ I('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), ua = /* @__PURE__ */ I("<span></span>"), va = /* @__PURE__ */ I('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const fa = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function _n(t, e) {
  ne(e, !0), Z(t, fa), E(e, "title", 3, "Apint.org");
  const r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !1), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, "");
  let s = "", c = De(!1), o = De(void 0);
  function v() {
    let w = {}, g;
    if (h(o) && (g = h(o)), g) {
      var _ = g.getBoundingClientRect();
      w.top = (_.top + _.height + 12).toString() + "px", w.left = (_.left - 115).toString() + "px", console.log(w);
    }
    return w;
  }
  var d = va(), f = y(d), x = y(f);
  Ot(x, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: s
  });
  var p = q(x, 2);
  p.textContent = s, m(f);
  var u = q(f, 2), C = y(u);
  O(
    C,
    i,
    (w) => {
      var g = ca(), _ = P(g), k = y(_);
      O(k, n, (J) => {
        var L = oa(), F = P(L);
        ar(2), A(() => z(F, "src", n())), S(J, L);
      });
      var b = q(k, 2);
      b.__click = [da, c];
      var T = y(b), D = q(T, 2), $ = y(D, !0);
      m(D), m(b), or(b, (J) => re(o, J), () => h(o)), m(_);
      var M = q(_, 2);
      O(M, () => h(c), (J) => {
        var L = /* @__PURE__ */ et(v);
        dr(J, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return h(L);
          }
        });
      }), A(() => {
        z(T, "src", l()), R($, a());
      }), S(w, g);
    },
    (w) => {
      var g = ae(), _ = P(g);
      O(
        _,
        i,
        (k) => {
          var b = ua();
          S(k, b);
        },
        null,
        !0
      ), S(w, g);
    }
  ), m(u), m(d), S(t, d), ie();
}
le(["click"]);
customElements.define("ing-headerlite", X(
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
function ga(t, { delay: e = 0, duration: r = 400, easing: n = ha, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, s = i === "y" ? "height" : "width", c = parseFloat(a[s]), o = i === "y" ? ["top", "bottom"] : ["left", "right"], v = o.map(
    (w) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${w[0].toUpperCase()}${w.slice(1)}`
    )
  ), d = parseFloat(a[`padding${v[0]}`]), f = parseFloat(a[`padding${v[1]}`]), x = parseFloat(a[`margin${v[0]}`]), p = parseFloat(a[`margin${v[1]}`]), u = parseFloat(
    a[`border${v[0]}Width`]
  ), C = parseFloat(
    a[`border${v[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (w) => `overflow: hidden;opacity: ${Math.min(w * 20, 1) * l};${s}: ${w * c}px;padding-${o[0]}: ${w * d}px;padding-${o[1]}: ${w * f}px;margin-${o[0]}: ${w * x}px;margin-${o[1]}: ${w * p}px;border-${o[0]}-width: ${w * u}px;border-${o[1]}-width: ${w * C}px;`
  };
}
function pa(t) {
  return t;
}
var _a = (t, e, r) => e(h(r).title), ma = /* @__PURE__ */ I('<img alt="option" width="18px">'), xa = /* @__PURE__ */ I('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ba = /* @__PURE__ */ I('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), wa = (t, e, r) => e(h(r).title), ya = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), ka = /* @__PURE__ */ I('<div class="menu_item_frame svelte-v1mgvt"></div>'), Ea = /* @__PURE__ */ I('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), Sa = /* @__PURE__ */ I('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const Ca = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function Ia(t, e) {
  ne(e, !0), Z(t, Ca), E(e, "title", 3, "Mapp"), E(e, "icon", 3, "");
  let r = E(e, "searchicon", 3, ""), n = E(e, "notificationicon", 3, ""), i = E(e, "supportuser", 3, !0), a = E(e, "username", 3, ""), l = E(e, "userpic", 3, ""), s = E(e, "activeitem", 3, ""), c = E(e, "menuconfig", 7, void 0);
  typeof c() == "string" && c(JSON.parse(c()));
  let o = Y({});
  if (s()) {
    o[s()] = !0;
    for (let g of c().items)
      if (g.subitems) {
        for (let _ of g.subitems)
          if (_.title == s()) {
            o[g.title] = !0;
            break;
          }
      }
  }
  let v = (g) => {
    let _ = c().items.find((k) => k.title === g);
    o[g] ? _ && (!_.url || _.url === "#") && (o[g] = !o[g]) : o[g] = !0;
  };
  var d = Sa(), f = y(d), x = y(f);
  ee(x, 21, () => c().items, Q, (g, _) => {
    var k = Ea(), b = P(k);
    b.__click = [_a, v, _];
    var T = y(b), D = y(T), $ = y(D);
    O(
      $,
      () => h(_).icon,
      (W) => {
        var V = ma();
        A(() => z(V, "src", h(_).icon)), S(W, V);
      },
      (W) => {
        var V = xa();
        S(W, V);
      }
    ), m(D);
    var M = q(D, 2), J = y(M, !0);
    m(M);
    var L = q(M, 2);
    O(L, () => h(_).subitems, (W) => {
      var V = ba();
      A(() => Ye(V, `${(o[h(_).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), S(W, V);
    }), m(T), m(b);
    var F = q(b, 2);
    O(F, () => o[h(_).title] && h(_).subitems, (W) => {
      var V = ka();
      ee(V, 21, () => h(_).subitems, Q, (N, H) => {
        var U = ya();
        U.__click = [wa, v, H];
        var se = y(U), de = q(y(se), 2), xe = y(de, !0);
        m(de), m(se), m(U), A(() => {
          z(U, "href", h(H).url), Ye(U, `${(h(H).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), R(xe, h(H).title);
        }), S(N, U);
      }), m(V), Oi(3, V, () => ga, () => ({ duration: 300, easing: pa })), S(W, V);
    }), A(() => {
      z(b, "href", h(_).url), Ye(b, `${(h(_).title == s() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), R(J, h(_).title);
    }), S(g, k);
  }), m(x), m(f);
  var p = q(f, 2), u = y(p);
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
  var C = q(u, 2), w = y(C);
  sr(w, e, "default", {}), m(C), m(p), m(d), S(t, d), ie();
}
le(["click"]);
customElements.define("ing-buffet", X(
  Ia,
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
var Ta = /* @__PURE__ */ I('<div class="input_label svelte-18z4bwo"> </div>'), qa = /* @__PURE__ */ I('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), Na = (t, e) => {
  e(t);
}, Aa = /* @__PURE__ */ I("<option> </option>"), za = /* @__PURE__ */ I('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo" form=""></select></div></div>');
const Oa = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function cr(t, e) {
  ne(e, !0), Z(t, Oa);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, ""), a = E(e, "placeholder", 3, ""), l = E(e, "items", 3, ""), s = E(e, "value", 15, ""), c = E(e, "selectStyle", 3, ""), o = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let v = l().split(",");
  const d = (w) => {
    if (w && w.target) {
      let g = "";
      w.target.value && (g = w.target.value), o() && o()(r(), g), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: g }
      }));
    }
  };
  var f = za(), x = y(f);
  O(x, n, (w) => {
    var g = Ta(), _ = y(g, !0);
    m(g), A(() => R(_, n())), S(w, g);
  });
  var p = q(x, 2), u = y(p);
  O(u, i, (w) => {
    var g = qa(), _ = y(g);
    m(g), A(() => z(_, "src", i())), S(w, g);
  });
  var C = q(u, 2);
  C.__input = [Na, d], ee(C, 21, () => v, Q, (w, g) => {
    var _ = Aa(), k = {}, b = y(_, !0);
    m(_), A(() => {
      k !== (k = h(g)) && (_.value = (_.__value = h(g)) == null ? "" : h(g)), R(b, h(g));
    }), S(w, _);
  }), m(C), m(p), m(f), A(() => {
    z(f, "style", c()), z(C, "placeholder", a());
  }), gn(C, s), S(t, f), ie();
}
le(["input"]);
customElements.define("ing-select", X(
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
var $a = /* @__PURE__ */ I('<div style="width: 100%;"><h3> </h3></div>'), Ma = /* @__PURE__ */ I('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Da = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Ha(t, e) {
  ne(e, !0), Z(t, Da);
  let r = E(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let c = {};
    for (const [o, v] of Object.entries(r().properties))
      c[o] = v.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: c } }));
  }
  var i = Ma(), a = y(i);
  O(a, r, (c) => {
    var o = ae(), v = P(o);
    ee(v, 17, () => Object.entries(r().properties), Q, (d, f) => {
      let x = () => h(f)[0], p = () => h(f)[1];
      var u = ae(), C = P(u);
      O(
        C,
        () => p().format == "header",
        (w) => {
          var g = $a(), _ = y(g), k = y(_, !0);
          m(_), m(g), A(() => R(k, p().value)), S(w, g);
        },
        (w) => {
          var g = ae(), _ = P(g);
          O(
            _,
            () => p().format == "select",
            (k) => {
              var b = /* @__PURE__ */ et(() => "width: " + p().length + ";");
              cr(k, {
                get input() {
                  return p().value;
                },
                set input(T) {
                  p().value = T;
                },
                get selectStyle() {
                  return h(b);
                },
                get label() {
                  return p().description;
                },
                get items() {
                  return p().value;
                }
              });
            },
            (k) => {
              var b = ae(), T = P(b);
              O(
                T,
                () => p().type == "string",
                (D) => {
                  var $ = /* @__PURE__ */ et(() => "width: " + p().length + ";");
                  Ot(D, {
                    get inputId() {
                      return x();
                    },
                    get inputStyle() {
                      return h($);
                    },
                    get label() {
                      return p().description;
                    },
                    get type() {
                      return p().format;
                    },
                    get placeholder() {
                      return p().placeholder;
                    },
                    get input() {
                      return p().value;
                    },
                    set input(M) {
                      p().value = M;
                    }
                  });
                },
                null,
                !0
              ), S(k, b);
            },
            !0
          ), S(w, g);
        }
      ), S(d, u);
    }), S(c, o);
  });
  var l = q(a, 2), s = y(l);
  Dt(s, "size", "small"), Dt(s, "id", "submit-button"), Dt(s, "type", "secondary"), s.__click = n, m(l), m(i), S(t, i), ie();
}
le(["click"]);
customElements.define("ing-form", X(Ha, { schema: {} }, [], [], !0));
function Ua(t, e, r, n, i, a) {
  if (h(e)) {
    let l = [];
    for (let s of r()) {
      let c = !1;
      for (let o of n())
        if ((i().length === 0 || i().includes(o)) && s[o].toString().toLowerCase().includes(h(e).toLowerCase())) {
          c = !0;
          break;
        }
      c && l.push(s);
    }
    re(a, Y(l));
  } else
    re(a, Y(r()));
}
var Ra = /* @__PURE__ */ I('<th class="svelte-15ql2st"> </th>'), ja = /* @__PURE__ */ I('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), La = /* @__PURE__ */ I('<tr class="svelte-15ql2st"></tr>'), Ba = /* @__PURE__ */ I('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
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
  ne(e, !0), Z(t, Fa);
  let r = E(e, "headers", 23, () => []), n = E(e, "headerssearchable", 23, () => []), i = E(e, "rows", 23, () => []), a = E(e, "linkprefix", 3, ""), l = E(e, "linkcolumnname", 3, ""), s = E(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let c = De(Y(i())), o = De("");
  const v = (_) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: _ } })), s() && s()({ detail: { rowIndex: _ } });
  };
  var d = Ba(), f = y(d), x = q(y(f), 2), p = q(y(x));
  ut(p), p.__keyup = [
    Ua,
    o,
    i,
    r,
    n,
    c
  ], m(x), m(f);
  var u = q(f, 2), C = y(u), w = y(C);
  ee(w, 21, r, Q, (_, k) => {
    var b = Ra(), T = y(b, !0);
    m(b), A(() => R(T, h(k))), S(_, b);
  }), m(w), m(C);
  var g = q(C);
  ee(g, 21, () => h(c), Q, (_, k, b) => {
    var T = La();
    T.__click = () => {
      v(b);
    }, ee(T, 21, () => Object.entries(h(k)), Q, ($, M) => {
      var J = ja(), L = y(J), F = y(L, !0);
      m(L), m(J), A(() => {
        z(L, "href", a() + h(k)[l()]), R(F, h(M)[1]);
      }), S($, J);
    }), m(T), S(_, T);
  }), m(g), m(u), m(d), nt(p, () => h(o), (_) => re(o, _)), S(t, d), ie();
}
le(["keyup", "click"]);
customElements.define("ing-table", X(
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
var Pa = /* @__PURE__ */ I('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), Ga = /* @__PURE__ */ I('<span class="title_text svelte-106xg5t"> </span>'), Ja = /* @__PURE__ */ I('<a class="title svelte-106xg5t"><!> <!></a>'), Ya = (t, e, r) => e(t, h(r)), Wa = /* @__PURE__ */ I('<img class="menu_icon svelte-106xg5t">'), Ka = /* @__PURE__ */ I('<span class="menu_top_button svelte-106xg5t"> </span>'), Za = /* @__PURE__ */ I('<button class="menu_button svelte-106xg5t"><!></button> <!>', 1), Xa = /* @__PURE__ */ I('<div class="header svelte-106xg5t"><!> <div class="right_menus svelte-106xg5t"></div></div>');
const Qa = {
  hash: "svelte-106xg5t",
  code: `.header.svelte-106xg5t {display:flex;
    /* flex-flow: row wrap; */justify-content:space-between;align-items:flex-start;
    /* background-color: rgba(255, 255, 255, 1); */background-color:rgba(255, 255, 255, .6);backdrop-filter:blur(10px);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-106xg5t {height:100%;display:flex;margin-left:12px;color:#111;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}

  @media (width <= 666px) {.title_text.svelte-106xg5t {display:none;opacity:0;}
  }.title.svelte-106xg5t:link {text-decoration:none;}.title.svelte-106xg5t:visited {text-decoration:none;color:#222;}.title.svelte-106xg5t:hover {text-decoration:none;color:darkgray;}.title.svelte-106xg5t:active {text-decoration:none;}.title_text.svelte-106xg5t {display:flex;align-items:center;}.right_menus.svelte-106xg5t {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-106xg5t {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-106xg5t {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-106xg5t:hover {cursor:pointer;}.menu_top_button.svelte-106xg5t {padding:12px 18px;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;background-color:#1ea7fd;color:white;}.round.svelte-106xg5t {height:40px;width:40px;border-radius:50%;}`
};
function vt(t, e) {
  ne(e, !0), Z(t, Qa);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  let l = Y({}), s = Y({});
  function c(p, u) {
    p && p.stopPropagation();
    for (const C of Object.keys(l))
      C != u.title && (l[C] = !1);
    u.items && u.items.length > 0 ? l[u.title] ? l[u.title] = !1 : l[u.title] = !0 : u.titleUrl ? window.location.href = u.titleUrl : document.dispatchEvent(new CustomEvent(u.title, { detail: {} }));
  }
  function o(p) {
    let u = {}, C;
    if (s[p] && (C = s[p]), C) {
      var w = C.getBoundingClientRect();
      u.top = (w.top + w.height + 12).toString() + "px", u.left = (w.left - 150).toString() + "px", console.log(u);
    } else
      console.log("Could not find element with id: " + p);
    return u;
  }
  function v(p) {
    return p.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const u of Object.keys(l))
      l[u] = !1;
  };
  var d = Xa(), f = y(d);
  O(f, () => r() || i(), (p) => {
    var u = Ja(), C = y(u);
    O(C, i, (g) => {
      var _ = Pa();
      A(() => z(_, "src", i())), S(g, _);
    });
    var w = q(C, 2);
    O(w, r, (g) => {
      var _ = Ga(), k = y(_, !0);
      m(_), A(() => R(k, r())), S(g, _);
    }), m(u), A(() => z(u, "href", n())), S(p, u);
  });
  var x = q(f, 2);
  ee(x, 21, a, Q, (p, u) => {
    var C = Za(), w = P(C);
    A(() => z(w, "id", v(h(u).title + "_button"))), w.__click = [Ya, c, u];
    var g = y(w);
    O(
      g,
      () => h(u).imageUrl,
      (k) => {
        var b = Wa();
        or(b, (T, D) => s[v(D.title + "_button")] = T, (T) => s == null ? void 0 : s[v(T.title + "_button")], () => [h(u)]), A(() => {
          z(b, "alt", h(u).title), z(b, "src", h(u).imageUrl), We(b, "round", h(u).imageShape === "round");
        }), S(k, b);
      },
      (k) => {
        var b = Ka(), T = y(b, !0);
        m(b), A(() => {
          z(b, "style", "background-color: " + h(u).titleColor), R(T, h(u).title);
        }), S(k, b);
      }
    ), m(w);
    var _ = q(w, 2);
    O(_, () => l[h(u).title] && h(u).items, (k) => {
      var b = /* @__PURE__ */ et(() => o(v(h(u).title + "_button")));
      dr(k, {
        get menuItems() {
          return h(u).items;
        },
        get position() {
          return h(b);
        }
      });
    }), S(p, C);
  }), m(x), m(d), S(t, d), ie();
}
le(["click"]);
customElements.define("mv-elegant-header", X(
  vt,
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
  e.searchloadresults && re(r, Y(e.searchloadresults(n())));
}
function tl(t, e, r, n) {
  t.key === "Escape" ? re(e, Y([])) : t.key === "Enter" ? (r.searchItems && r.searchItems(n()), document.dispatchEvent(new CustomEvent("SearchItems", { detail: { text: n() } })), n("")) : (r.searchItems && r.searchItems(n()), document.dispatchEvent(new CustomEvent("SearchItems", { detail: { text: n() } })));
}
var rl = /* @__PURE__ */ I('<div class="result svelte-ihhy65"> </div>'), nl = /* @__PURE__ */ I('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), il = /* @__PURE__ */ I('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const al = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function mn(t, e) {
  ne(e, !0), Z(t, al);
  let r = E(e, "searchtext", 15), n = De(Y([]));
  document.addEventListener("SearchResults", (o) => {
    o.detail.results && re(n, Y(o.detail.results));
  });
  var i = il(), a = P(i), l = y(a), s = q(y(l), 2);
  ut(s), s.__input = [el, e, n, r], s.__keyup = [tl, n, e, r], m(l), m(a);
  var c = q(a, 2);
  O(c, () => h(n).length > 0, (o) => {
    var v = nl(), d = y(v), f = y(d);
    ee(f, 21, () => h(n), Q, (x, p) => {
      var u = rl(), C = y(u, !0);
      m(u), A(() => R(C, h(p))), S(x, u);
    }), m(f), m(d), m(v), S(o, v);
  }), nt(s, r), S(t, i), ie();
}
le(["input", "keyup"]);
customElements.define("mv-elegant-search", X(
  mn,
  {
    searchtext: {},
    searchloadresults: {},
    searchItems: {}
  },
  [],
  [],
  !0
));
var ll = /* @__PURE__ */ I('<img class="hero_image svelte-e621nb" alt="logo">'), sl = /* @__PURE__ */ I('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const ol = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function xn(t, e) {
  Z(t, ol);
  let r = E(e, "height", 3, "80px"), n = E(e, "titleText", 3, ""), i = E(e, "titleImageUrl", 3, ""), a = E(e, "searchtext", 15);
  var l = sl(), s = y(l), c = y(s);
  O(c, i, (x) => {
    var p = ll();
    A(() => {
      z(p, "height", `${r()}`), z(p, "src", i());
    }), S(x, p);
  });
  var o = q(c, 2), v = y(o, !0);
  m(o), m(s);
  var d = q(s, 2), f = y(d);
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
    get searchItems() {
      return e.searchItems;
    }
  }), m(d), m(l), A(() => {
    z(s, "style", `height: ${r()};`), R(v, n());
  }), S(t, l);
}
customElements.define("mv-elegant-hero-search", X(
  xn,
  {
    text: { reflect: !0 },
    height: {},
    titleText: {},
    titleImageUrl: {},
    searchtext: {},
    searchloadresults: {},
    searchItems: {}
  },
  [],
  [],
  !0
));
var dl = /* @__PURE__ */ I('<img alt="category icon" class="svelte-yh1dxk">'), cl = /* @__PURE__ */ I('<span class="card_symbol svelte-yh1dxk"> </span>'), ul = /* @__PURE__ */ I('<img class="header_image svelte-yh1dxk" alt="header preview">'), vl = /* @__PURE__ */ I('<img alt="profile" class="svelte-yh1dxk">'), fl = /* @__PURE__ */ I('<img alt="category icon" class="svelte-yh1dxk">'), hl = /* @__PURE__ */ I('<span class="card_symbol svelte-yh1dxk"> </span>'), gl = /* @__PURE__ */ I('<div class="card_frame svelte-yh1dxk"><div class="top_left_label svelte-yh1dxk"><span class="svelte-yh1dxk"> </span> <div class="top_right_icons svelte-yh1dxk"></div></div> <!> <a class="title svelte-yh1dxk"> </a> <a class="author svelte-yh1dxk" target="_blank"><!> </a> <div class="footer svelte-yh1dxk"><div class="description svelte-yh1dxk"> </div> <div class="link svelte-yh1dxk"><a target="_blank" class="svelte-yh1dxk">Open asset ↗</a> <div class="type_box svelte-yh1dxk"></div></div></div></div>');
const pl = {
  hash: "svelte-yh1dxk",
  code: ".card_frame.svelte-yh1dxk {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-yh1dxk {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-yh1dxk span:where(.svelte-yh1dxk) {white-space:nowrap;}.top_right_icons.svelte-yh1dxk {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-yh1dxk img:where(.svelte-yh1dxk) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-yh1dxk {width:calc(100% - 18px);max-width:88%;margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-yh1dxk {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;width:100%;}.title.svelte-yh1dxk:hover {color:#7c7c7c;}.author.svelte-yh1dxk {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-yh1dxk img:where(.svelte-yh1dxk) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-yh1dxk:hover {color:#757a79;}.card_symbol.svelte-yh1dxk {padding-left:6px;}.card_symbol.svelte-yh1dxk:hover {cursor:default;}.footer.svelte-yh1dxk {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-yh1dxk {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-yh1dxk {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-yh1dxk a:where(.svelte-yh1dxk) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-yh1dxk a:where(.svelte-yh1dxk):hover {color:#82aae9;}.type_box.svelte-yh1dxk {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-yh1dxk img:where(.svelte-yh1dxk) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function bn(t, e) {
  ne(e, !0), Z(t, pl);
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
  var n = gl(), i = y(n), a = y(i), l = y(a, !0);
  m(a);
  var s = q(a, 2);
  ee(s, 21, () => r().categories, Q, (k, b) => {
    var T = ae(), D = P(T);
    O(
      D,
      () => h(b).imageUrl,
      ($) => {
        var M = dl();
        A(() => {
          z(M, "src", h(b).imageUrl), z(M, "title", h(b).name);
        }), S($, M);
      },
      ($) => {
        var M = ae(), J = P(M);
        O(
          J,
          () => h(b).symbol,
          (L) => {
            var F = cl(), W = y(F, !0);
            m(F), A(() => {
              z(F, "title", h(b).name), R(W, h(b).symbol);
            }), S(L, F);
          },
          null,
          !0
        ), S($, M);
      }
    ), S(k, T);
  }), m(s), m(i);
  var c = q(i, 2);
  O(c, () => r().imageUrl, (k) => {
    var b = ul();
    A(() => z(b, "src", r().imageUrl)), S(k, b);
  });
  var o = q(c, 2), v = y(o, !0);
  m(o);
  var d = q(o, 2), f = y(d);
  O(f, () => r().authorImageUrl, (k) => {
    var b = vl();
    A(() => z(b, "src", r().authorImageUrl)), S(k, b);
  });
  var x = q(f);
  m(d);
  var p = q(d, 2), u = y(p), C = y(u, !0);
  m(u);
  var w = q(u, 2), g = y(w), _ = q(g, 2);
  ee(_, 21, () => r().types, Q, (k, b) => {
    var T = ae(), D = P(T);
    O(
      D,
      () => h(b).imageUrl,
      ($) => {
        var M = fl();
        A(() => {
          z(M, "src", h(b).imageUrl), z(M, "title", h(b).name);
        }), S($, M);
      },
      ($) => {
        var M = ae(), J = P(M);
        O(
          J,
          () => h(b).symbol,
          (L) => {
            var F = hl(), W = y(F, !0);
            m(F), A(() => {
              z(F, "title", h(b).name), R(W, h(b).symbol);
            }), S(L, F);
          },
          null,
          !0
        ), S($, M);
      }
    ), S(k, T);
  }), m(_), m(w), m(p), m(n), A(() => {
    R(l, r().dateTime), z(o, "href", r().link), R(v, r().title), z(d, "href", r().authorUrl), R(x, ` ${r().authorName ?? ""}`), R(C, r().description), z(g, "href", r().link);
  }), S(t, n), ie();
}
customElements.define("mv-elegant-card", X(bn, { item: {} }, [], [], !0));
var _l = /* @__PURE__ */ I('<div class="menu_frame svelte-1dvvvu9"></div>');
const ml = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function wn(t, e) {
  Z(t, ml);
  let r = E(e, "items", 31, () => Y([]));
  typeof r() == "string" && r(JSON.parse(r()));
  var n = _l();
  ee(n, 21, r, Q, (i, a) => {
    var l = ae(), s = P(l);
    O(s, () => !h(a).hidden, (c) => {
      bn(c, {
        get item() {
          return h(a);
        }
      });
    }), S(i, l);
  }), m(n), S(t, n);
}
customElements.define("mv-elegant-cardpage", X(wn, { items: {} }, [], [], !0));
var xl = (t, e, r) => e(h(r).name), bl = /* @__PURE__ */ I('<div class="filterbar_option svelte-i3yf33"><div class="letter svelte-i3yf33"> </div> <div class="name svelte-i3yf33"> </div></div>'), wl = /* @__PURE__ */ I('<div class="filterbar_frame svelte-i3yf33"></div>');
const yl = {
  hash: "svelte-i3yf33",
  code: `.filterbar_frame.svelte-i3yf33 {display:flex;flex-wrap:wrap;justify-content:center;}.filterbar_option.svelte-i3yf33 {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-i3yf33 {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-i3yf33 {background-color:rgb(228, 228, 228);}.letter.svelte-i3yf33:hover {cursor:pointer;border-color:lightgray;}.name.svelte-i3yf33 {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function yn(t, e) {
  ne(e, !0), Z(t, yl);
  let r = E(e, "categories", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  let n = Y({});
  function i(l) {
    n[l] ? n[l] = !1 : n[l] = !0, e.categoryselect && e.categoryselect(n);
  }
  var a = wl();
  ee(a, 21, r, Q, (l, s) => {
    var c = bl(), o = y(c);
    o.__click = [xl, i, s];
    var v = y(o, !0);
    m(o);
    var d = q(o, 2), f = y(d, !0);
    m(d), m(c), A(() => {
      We(o, "letter_selected", n[h(s).name]), R(v, h(s).symbol), R(f, h(s).name);
    }), S(l, c);
  }), m(a), S(t, a), ie();
}
le(["click"]);
customElements.define("mv-elegant-filtercats", X(yn, { categories: {}, categoryselect: {} }, [], [], !0));
function kl(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var El = /* @__PURE__ */ I('<option class="svelte-3qfq5d"> </option>'), Sl = /* @__PURE__ */ I('<div class="select svelte-3qfq5d"><select name="source" id="source" class="svelte-3qfq5d"></select></div>');
const Cl = {
  hash: "svelte-3qfq5d",
  code: `.select.svelte-3qfq5d,
	.select.svelte-3qfq5d :where(.svelte-3qfq5d) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-3qfq5d {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-3qfq5d select:where(.svelte-3qfq5d):active,
	.select.svelte-3qfq5d select:where(.svelte-3qfq5d):focus {outline:none;box-shadow:none;}.select.svelte-3qfq5d:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function kn(t, e) {
  ne(e, !0), Z(t, Cl);
  let r = E(e, "input", 15), n = E(e, "options", 19, () => []);
  var i = Sl(), a = y(i);
  a.__input = [kl, r, e], ee(a, 21, n, Q, (l, s) => {
    var c = El(), o = {}, v = y(c, !0);
    m(c), A(() => {
      o !== (o = h(s)) && (c.value = (c.__value = h(s)) == null ? "" : h(s)), R(v, h(s));
    }), S(l, c);
  }), m(a), m(i), gn(a, r), S(t, i), ie();
}
le(["input"]);
customElements.define("mv-elegant-select", X(kn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function Il(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var Tl = (t, e, r) => e(h(r).name), ql = /* @__PURE__ */ I('<div class="icon svelte-1f78lwb">✓</div>'), Nl = /* @__PURE__ */ I('<div class="icon svelte-1f78lwb"> </div>'), Al = /* @__PURE__ */ I('<div class="filterbar_option svelte-1f78lwb"><!> <div class="name svelte-1f78lwb"> </div></div>'), zl = /* @__PURE__ */ I('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), Ol = /* @__PURE__ */ I('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), $l = /* @__PURE__ */ I('<div class="filterbar_frame svelte-1f78lwb"><div class="options svelte-1f78lwb"></div> <div class="filter svelte-1f78lwb"><button class="view_toggle svelte-1f78lwb"><!></button> <!></div></div>');
const Ml = {
  hash: "svelte-1f78lwb",
  code: `.filterbar_frame.svelte-1f78lwb {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-1f78lwb {display:flex;justify-content:left;flex-wrap:wrap;width:100%;margin-left:16px;}.filter.svelte-1f78lwb {display:flex;margin-right:16px;align-self:self-start;}.filterbar_option.svelte-1f78lwb {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-1f78lwb {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-1f78lwb:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-1f78lwb {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-1f78lwb {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-1f78lwb {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-1f78lwb:hover {cursor:pointer;}`
};
function En(t, e) {
  ne(e, !0), Z(t, Ml);
  let r = E(e, "types", 7), n = E(e, "sortSelected", 15, ""), i = E(e, "view", 15, "card");
  typeof r() == "string" && r(JSON.parse(r()));
  let a = e.sortTypes.split(",").map((u) => u.trim());
  n() || n(a[0]);
  let l = Y({});
  function s(u) {
    l[u] ? l[u] = !1 : l[u] = !0, e.onTypeSelect && (console.log("sending type selected data: " + JSON.stringify(l)), e.onTypeSelect(l));
  }
  function c(u) {
    e.onSortSelect && e.onSortSelect(u);
  }
  var o = $l(), v = y(o);
  ee(v, 21, r, Q, (u, C) => {
    var w = Al();
    w.__click = [Tl, s, C];
    var g = y(w);
    O(
      g,
      () => l[h(C).name] === !0,
      (b) => {
        var T = ql();
        S(b, T);
      },
      (b) => {
        var T = Nl(), D = y(T, !0);
        m(T), A(() => R(D, h(C).symbol)), S(b, T);
      }
    );
    var _ = q(g, 2), k = y(_, !0);
    m(_), m(w), A(() => {
      We(w, "filterbar_option_selected", l[h(C).name]), R(k, h(C).name);
    }), S(u, w);
  }), m(v);
  var d = q(v, 2), f = y(d);
  f.__click = [Il, i, e];
  var x = y(f);
  O(
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
  var p = q(f, 2);
  kn(p, {
    get input() {
      return n();
    },
    options: a,
    onInput: c
  }), m(d), m(o), S(t, o), ie();
}
le(["click"]);
customElements.define("mv-elegant-filtertypes", X(
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
function Dl(t, e, r) {
  e() && e()(h(r));
}
var Hl = /* @__PURE__ */ I('<th class="svelte-1nbcvq9"> </th>'), Ul = /* @__PURE__ */ I('<a class="table_row svelte-1nbcvq9"> </a>'), Rl = /* @__PURE__ */ I('<span class="table_row svelte-1nbcvq9"> </span>'), jl = /* @__PURE__ */ I('<td class="svelte-1nbcvq9"><!></td>'), Ll = /* @__PURE__ */ I("<td></td>"), Bl = /* @__PURE__ */ I('<tr class="svelte-1nbcvq9"></tr>'), Fl = /* @__PURE__ */ I('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
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
  ne(e, !0), Z(t, Vl);
  let r = E(e, "tableHeaders", 23, () => []), n = E(e, "items", 31, () => Y([])), i = E(e, "linkprefix", 3, ""), a = E(e, "linkcolumnname", 3, ""), l = E(e, "tableRowClick", 3, void 0), s = E(e, "searchItems", 3, void 0);
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
  let c = De(""), o = De(-1);
  const v = (_) => {
    re(o, Y(_)), l() && l()({ detail: { rowIndex: _ } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: _ } }));
  };
  var d = Fl(), f = y(d), x = q(y(f), 2), p = q(y(x));
  ut(p), p.__keyup = [Dl, s, c], m(x), m(f);
  var u = q(f, 2), C = y(u), w = y(C);
  ee(w, 21, r, Q, (_, k) => {
    var b = Hl(), T = y(b, !0);
    m(b), A(() => {
      We(b, "column_sm", h(k).hideNarrow), R(T, h(k).displayName);
    }), S(_, b);
  }), m(w), m(C);
  var g = q(C);
  ee(g, 21, n, Q, (_, k, b) => {
    var T = ae(), D = P(T);
    O(D, () => !h(k).hidden, ($) => {
      var M = Bl();
      M.__click = () => {
        v(b);
      }, ee(M, 21, r, Q, (J, L) => {
        var F = ae(), W = P(F);
        O(
          W,
          () => h(k)[h(L).name],
          (V) => {
            var te = jl(), N = y(te);
            O(
              N,
              a,
              (H) => {
                var U = Ul(), se = y(U, !0);
                m(U), A(() => {
                  z(U, "href", i() + h(k)[a()]), R(se, h(k)[h(L).name]);
                }), S(H, U);
              },
              (H) => {
                var U = Rl(), se = y(U, !0);
                m(U), A(() => R(se, h(k)[h(L).name])), S(H, U);
              }
            ), m(te), A(() => We(te, "column_sm", h(L).hideNarrow)), S(V, te);
          },
          (V) => {
            var te = Ll();
            S(V, te);
          }
        ), S(J, F);
      }), m(M), A(() => We(M, "table_row_selected", b === h(o))), S($, M);
    }), S(_, T);
  }), m(g), m(u), m(d), nt(p, () => h(c), (_) => re(c, _)), S(t, d), ie();
}
le(["keyup", "click"]);
customElements.define("mv-elegant-table", X(
  Sn,
  {
    tableHeaders: {},
    items: {},
    linkprefix: {},
    linkcolumnname: {},
    tableRowClick: {},
    searchItems: {}
  },
  [],
  [],
  !0
));
var Pl = /* @__PURE__ */ I("<!> <!> <!> <!> <!>", 1);
const Gl = { hash: "svelte-3kpd", code: "" };
function Jl(t, e) {
  ne(e, !0), Z(t, Gl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "searchtext", 7, ""), s = E(e, "categories", 19, () => []), c = E(e, "types", 19, () => []), o = E(e, "sortTypes", 3, "Date descending, Date ascending, Title ascending, Title descending"), v = E(e, "sortSelected", 11, ""), d = E(e, "items", 31, () => Y([]));
  typeof d() == "string" && d(JSON.parse(d()));
  let f = De("CARD"), x = Y([
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
    },
    {
      name: "categoriesText",
      displayName: "Categories",
      searchable: !1
    },
    {
      name: "typesText",
      displayName: "Tags",
      searchable: !1
    }
  ]), p = Y({}), u = "", C = {}, w = !1, g = {}, _ = !1;
  function k(N) {
    u = N, e.searchsubmit ? e.searchsubmit(N) : M();
  }
  function b(N) {
    N == "Date descending" ? T("dateTimeIso", "DESC") : N == "Date ascending" ? T("dateTimeIso", "ASC") : N == "Title ascending" ? T("title", "ASC") : N == "Title descending" && T("title", "DESC");
  }
  function T(N, H = "") {
    H != "" && (p[N] = H), p[N] == "ASC" ? d().sort((U, se) => {
      let de = U, xe = se;
      return de[N] < xe[N] ? -1 : 1;
    }) : d().sort((U, se) => {
      let de = U, xe = se;
      return de[N] > xe[N] ? -1 : 1;
    });
  }
  function D(N) {
    C = N, w = !1;
    for (const [H, U] of Object.entries(C))
      if (U) {
        w = !0;
        break;
      }
    e.categoryselect ? e.categoryselect(N) : M();
  }
  function $(N) {
    g = N, _ = !1;
    for (const [H, U] of Object.entries(g))
      if (U) {
        _ = !0;
        break;
      }
    e.onTypeSelect ? e.onTypeSelect(N) : M();
  }
  function M() {
    for (let N of d()) {
      let H = !1;
      if ((u != "" && N.description && N.title && N.authorName && !N.title.toLowerCase().includes(u.toLowerCase()) && !N.description.toLowerCase().includes(u.toLowerCase()) && !N.authorName.toLowerCase().includes(u.toLowerCase()) || u != "" && N.description == "") && (H = !0), !H && (!N.categories || N.categories.length === 0) && w) H = !0;
      else if (!H && N.categories)
        for (let U of Object.keys(C)) {
          const se = N.categories.find((de) => de.name === U);
          if (C[U] && !se) {
            H = !0;
            break;
          }
        }
      if (!H && (!N.types || N.types.length === 0) && _) H = !0;
      else if (!H && N.types)
        for (let U of Object.keys(g)) {
          const se = N.types.find((de) => de.name === U);
          if (g[U] && !se) {
            H = !0;
            break;
          }
        }
      N.hidden = H;
    }
  }
  var J = Pl(), L = P(J);
  vt(L, {
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
  var F = q(L, 2);
  xn(F, {
    get titleText() {
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
    searchItems: k
  });
  var W = q(F, 2);
  yn(W, {
    get categories() {
      return s();
    },
    categoryselect: D
  });
  var V = q(W, 2);
  En(V, {
    get types() {
      return c();
    },
    get sortTypes() {
      return o();
    },
    get sortSelected() {
      return v();
    },
    onTypeSelect: $,
    onSortSelect: b,
    get view() {
      return h(f);
    },
    set view(N) {
      re(f, Y(N));
    }
  });
  var te = q(V, 2);
  O(
    te,
    () => h(f) === "CARD",
    (N) => {
      wn(N, {
        get items() {
          return d();
        },
        set items(H) {
          d(H);
        }
      });
    },
    (N) => {
      Sn(N, {
        get tableHeaders() {
          return x;
        },
        get items() {
          return d();
        },
        set items(H) {
          d(H);
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0,
        searchItems: k
      });
    }
  ), S(t, J), ie();
}
customElements.define("mv-elegant-buffet", X(
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
    sortSelected: {},
    items: {}
  },
  [],
  [],
  !0
));
var Yl = /* @__PURE__ */ I('<!> <div class="view_frame svelte-qzg12u"></div>', 1);
const Wl = {
  hash: "svelte-qzg12u",
  code: ".view_frame.svelte-qzg12u {margin:auto;padding:24px 12px;max-width:700px;}.view_image {margin:8px 0px;width:100%;border-radius:24px;filter:drop-shadow(0 0 0.75rem gray);}"
};
function Kl(t, e) {
  Z(t, Wl);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "items", 23, () => []);
  typeof l() == "string" && l(JSON.parse(l()));
  function s(d) {
    let f = "";
    if (d.labelType && (f += `<${d.labelType}>${d.label}</${d.labelType}>`), d.type == "link_blank")
      f += `<a href="${d.link}" target="_blank">${d.value}</a>`;
    else if (d.type == "ul_link_blank") {
      let x = d.value.split(",");
      f += "<ul>";
      for (let p of x)
        f += `<li><a href="${p.startsWith("go/") ? "http://" + p : p}" target="_blank">${p}</a></li>`;
      f += "</ul>";
    } else if (d.type == "ul") {
      let x = d.value.split(",");
      f += "<ul>";
      for (let p of x)
        f += `<li>${p}</li>`;
      f += "</ul>";
    } else if (d.type == "img" && d.value)
      f += `<${d.type} class="view_image" src="${d.value}"></${d.type}>`;
    else if (d.type == "preview_iframe" && d.value) {
      let x = d.value.split(","), p = "";
      for (let u of x)
        if (u.startsWith("https://youtu.be")) {
          let C = u.split("/");
          p = "https://www.youtube.com/embed/" + C[C.length - 1];
          break;
        } else if (u.includes("/presentation/")) {
          u.includes("/edit") ? p = u.replace("/edit", "/embed") : p = u + "/embed";
          break;
        }
      p && (f += `<div style="margin: 24px 0px;">
          <iframe
            class="view_image"
            width="100%"
            height="374"
            src=${p}
            title="Embedded content preview"
          ></iframe>
        </div>`);
    } else d.value && (f += `<${d.type}>${d.value}</${d.type}>`);
    return f;
  }
  var c = Yl(), o = P(c);
  vt(o, {
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
  var v = q(o, 2);
  ee(v, 21, l, Q, (d, f) => {
    var x = ae(), p = P(x);
    Ii(p, () => s(h(f))), S(d, x);
  }), m(v), S(t, c);
}
customElements.define("mv-elegant-buffet-view", X(
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
var Zl = /* @__PURE__ */ I('<div class="input_label"> </div>'), Xl = /* @__PURE__ */ I('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Ql = (t, e) => {
  e(t);
}, es = /* @__PURE__ */ I('<div><input type="checkbox" form=""> <label> </label></div>'), ts = /* @__PURE__ */ I('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const rs = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function Cn(t, e) {
  ne(e, !0), Z(t, rs);
  let r = E(e, "inputId", 7, ""), n = E(e, "label", 3, ""), i = E(e, "icon", 3, "");
  E(e, "placeholder", 3, "");
  let a = E(e, "items", 3, ""), l = E(e, "value", 15, ""), s = E(e, "selectStyle", 3, ""), c = E(e, "inputChanged", 3, void 0);
  r() == "" && r(n());
  let o = a().split(",").map((g) => g.trim()), v = [];
  l() && (v = l().split(",").map((g) => g.trim()));
  let d = {};
  for (let g of o)
    v.includes(g) ? d[g] = !0 : d[g] = !1;
  const f = (g) => {
    if (g && g.target) {
      let _ = g.target.id, k = g.target.checked;
      if (k && !v.includes(_))
        v.push(_);
      else if (!k && v.includes(_)) {
        let b = v.indexOf(_);
        v.splice(b, 1);
      }
      l(v.join(",")), c() && c()(r(), l()), document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: r(), input: l() }
      }));
    }
  };
  var x = ts(), p = y(x);
  O(p, n, (g) => {
    var _ = Zl(), k = y(_, !0);
    m(_), A(() => R(k, n())), S(g, _);
  });
  var u = q(p, 2), C = y(u);
  O(C, i, (g) => {
    var _ = Xl(), k = y(_);
    m(_), A(() => z(k, "src", i())), S(g, _);
  });
  var w = q(C, 2);
  ee(w, 21, () => o, Q, (g, _) => {
    var k = es(), b = y(k);
    ut(b), b.__change = [Ql, f];
    var T = q(b, 2), D = y(T, !0);
    m(T), m(k), A(() => {
      z(b, "id", h(_)), z(b, "name", h(_)), z(T, "for", h(_)), R(D, h(_));
    }), $i(b, () => d[h(_)], ($) => d[h(_)] = $), S(g, k);
  }), m(w), m(u), m(x), A(() => z(x, "style", s())), S(t, x), ie();
}
le(["change"]);
customElements.define("ing-multi-select", X(
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
var is = /* @__PURE__ */ I('<img class="image_preview svelte-15ctm06">'), as = /* @__PURE__ */ I('<img class="image_preview svelte-15ctm06">'), ls = /* @__PURE__ */ I('<div><div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-15ctm06" type="file" accept="image/png, image/jpeg"> <div class="file_name svelte-15ctm06"> </div> <!></div>'), ss = /* @__PURE__ */ I('<!> <form class="edit_frame svelte-15ctm06"></form>', 1);
const os = {
  hash: "svelte-15ctm06",
  code: ".edit_frame.svelte-15ctm06 {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-15ctm06::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}.file_name.svelte-15ctm06 {margin-top:10px;margin-bottom:12px;font-size:14px;}.image_preview.svelte-15ctm06 {width:244px;margin-bottom:14px;border-radius:7px;}"
};
function ds(t, e) {
  ne(e, !0), Z(t, os);
  let r = E(e, "formId", 7, ""), n = E(e, "titleText", 3, ""), i = E(e, "titleUrl", 3, "/"), a = E(e, "titleImageUrl", 3, ""), l = E(e, "headerMenus", 19, () => []), s = E(e, "items", 31, () => Y([])), c;
  r() || r(n()), typeof s() == "string" && s(JSON.parse(s()));
  let o = Y({});
  function v(p, u) {
    const C = new FormData(c);
    for (let w of s()) {
      let g = !0, _ = C.get(w.id);
      _ && _.name && (g = !1, o[w.id] = URL.createObjectURL(_)), g && C.set(w.id, w.value);
    }
    document.dispatchEvent(new CustomEvent("FormChangeEvent", {
      detail: {
        id: r(),
        items: s(),
        formData: C
      }
    }));
  }
  var d = ss(), f = P(d);
  vt(f, {
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
  var x = q(f, 2);
  ee(x, 21, s, Q, (p, u) => {
    var C = ae(), w = P(C);
    O(
      w,
      () => h(u).type == "input" || h(u).type == "textarea",
      (g) => {
        Ot(g, {
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
      (g) => {
        var _ = ae(), k = P(_);
        O(
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
              set value(T) {
                h(u).value = T;
              },
              inputChanged: v
            });
          },
          (b) => {
            var T = ae(), D = P(T);
            O(
              D,
              () => h(u).type == "multiselect",
              ($) => {
                Cn($, {
                  get label() {
                    return h(u).label;
                  },
                  get items() {
                    return h(u).options;
                  },
                  get value() {
                    return h(u).value;
                  },
                  set value(M) {
                    h(u).value = M;
                  },
                  inputChanged: v
                });
              },
              ($) => {
                var M = ae(), J = P(M);
                O(
                  J,
                  () => h(u).type == "file",
                  (L) => {
                    var F = ls(), W = y(F), V = y(W), te = y(V, !0);
                    m(V), m(W);
                    var N = q(W, 2);
                    N.__change = [ns, v];
                    var H = q(N, 2), U = y(H, !0);
                    m(H);
                    var se = q(H, 2);
                    O(
                      se,
                      () => o[h(u).id],
                      (de) => {
                        var xe = is();
                        A(() => z(xe, "src", o[h(u).id])), S(de, xe);
                      },
                      (de) => {
                        var xe = ae(), In = P(xe);
                        O(
                          In,
                          () => h(u).value && (h(u).value.endsWith("png") || h(u).value.endsWith("jpg")),
                          (Tn) => {
                            var ur = as();
                            A(() => z(ur, "src", h(u).value)), S(Tn, ur);
                          },
                          null,
                          !0
                        ), S(de, xe);
                      }
                    ), m(F), A(() => {
                      z(F, "id", h(u).id + "_container"), z(V, "for", h(u).id), R(te, h(u).label), z(N, "id", h(u).id), z(N, "name", h(u).id), R(U, h(u).value);
                    }), S(L, F);
                  },
                  null,
                  !0
                ), S($, M);
              },
              !0
            ), S(b, T);
          },
          !0
        ), S(g, _);
      }
    ), S(p, C);
  }), m(x), or(x, (p) => c = p, () => c), A(() => z(x, "id", r())), S(t, d), ie();
}
le(["change"]);
customElements.define("mv-elegant-buffet-edit", X(
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
var cs = /* @__PURE__ */ I('<div class="landing_content_half svelte-695cfd"><img class="landing_content_half_image svelte-695cfd"></div> <div id="mission" class="landing_content_half_text svelte-695cfd"> </div>', 1), us = /* @__PURE__ */ I('<div id="mission" class="landing_content_half_text svelte-695cfd"> </div> <div class="landing_content_half svelte-695cfd"><img class="landing_content_half_image svelte-695cfd"></div>', 1), vs = /* @__PURE__ */ I('<div><div class="landing_sub_heading svelte-695cfd"> </div> <div class="landing_content_divided svelte-695cfd"><!></div></div>'), fs = /* @__PURE__ */ I('<!> <div class="background_left svelte-695cfd"><svg class="g-h-swoop-image" role="presentation" width="289" height="208" viewBox="0 0 315 222" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_228_2286)"><path d="M312.433 -0.753784C312.912 1.10786 313.214 3.26622 313.397 5.75039C315.766 43.4191 313.397 80.2612 297.105 114.978C266.832 180.101 212.21 210.124 143.637 218.95C94.2485 225.333 46.4444 217.558 0.000188589 201.267C-0.27401 201.17 -0.548162 201.074 -0.822266 200.977" stroke="#4285F4" stroke-width="2" stroke-linejoin="round"></path></g></svg></div> <div class="background_right svelte-695cfd"><svg class="g-h-swoop-image" role="presentation" width="192" height="618" viewBox="0 0 192 618" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.2884 -0.999986C11.8162 21.3558 1.00001 48.7302 1.00001 77.9528C1.00003 229.64 178.083 265.688 178.083 415.406C178.083 477.349 135.321 488.804 135.321 550.137C135.321 583.574 163.684 611.749 193 617" stroke="#FBBC04" stroke-width="2" stroke-linejoin="round"></path></svg></div> <div class="landing_main_panel svelte-695cfd"><div id="overview" class="landing_heading svelte-695cfd"> </div> <div class="landing_content svelte-695cfd"><div> </div></div> <div class="landing_heading_small svelte-695cfd"><span><!> <!></span></div> <!> <div class="footer svelte-695cfd"></div></div>', 1);
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
function gs(t, e) {
  ne(e, !0), Z(t, hs);
  let r = E(e, "titleText", 3, ""), n = E(e, "titleUrl", 3, "/"), i = E(e, "titleImageUrl", 3, ""), a = E(e, "headerMenus", 19, () => []), l = E(e, "hero", 23, () => ({
    heroTitle: "Let's achieve more with our data & AI assets",
    heroDescription: "Apigee Marketplace is a specialized online hub designed to connect data providers and consumers within various industrial sectors. Its focus is on facilitating the exchange of highly valuable industrial datasets, empowering businesses to optimize operations, accelerate innovation, and gain a competitive edge.",
    heroButton1: "Sign in",
    heroButton2: "Register"
  })), s = E(e, "sections", 23, () => [
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
  typeof l() == "string" && l(JSON.parse(l())), typeof s() == "string" && s(JSON.parse(s()));
  var c = fs(), o = P(c);
  vt(o, {
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
  var v = q(o, 6), d = y(v), f = y(d, !0);
  m(d);
  var x = q(d, 2), p = y(x), u = y(p, !0);
  m(p), m(x);
  var C = q(x, 2), w = y(C), g = y(w);
  O(g, () => l().heroButton1, (b) => {
    Yt(b, {
      get buttonTitle() {
        return l().heroButton1;
      },
      type: "primary"
    });
  });
  var _ = q(g, 2);
  O(_, () => l().heroButton2, (b) => {
    Yt(b, {
      get buttonTitle() {
        return l().heroButton2;
      },
      type: "secondary"
    });
  }), m(w), m(C);
  var k = q(C, 2);
  ee(k, 17, s, Q, (b, T, D) => {
    var $ = vs();
    Ye($, `${(D & 1 ? "landing_content_gray" : "landing_content_white") ?? ""} svelte-695cfd`);
    var M = y($), J = y(M, !0);
    m(M);
    var L = q(M, 2), F = y(L);
    O(
      F,
      () => !(D & 1),
      (W) => {
        var V = cs(), te = P(V), N = y(te);
        z(N, "alt", "image for section " + D), m(te);
        var H = q(te, 2), U = y(H, !0);
        m(H), A(() => {
          z(N, "src", h(T).sectionImageUrl), R(U, h(T).sectionDescription);
        }), S(W, V);
      },
      (W) => {
        var V = us(), te = P(V), N = y(te, !0);
        m(te);
        var H = q(te, 2), U = y(H);
        z(U, "alt", "image for section " + D), m(H), A(() => {
          R(N, h(T).sectionDescription), z(U, "src", h(T).sectionImageUrl);
        }), S(W, V);
      }
    ), m(L), m($), A(() => R(J, h(T).sectionTitle)), S(b, $);
  }), ar(2), m(v), A(() => {
    R(f, l().heroTitle), R(u, l().heroDescription);
  }), S(t, c), ie();
}
customElements.define("mv-elegant-landing", X(
  gs,
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
var ps = /* @__PURE__ */ I('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
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
  Z(t, _s);
  var r = ps();
  S(t, r);
}
customElements.define("mv-elegant-spinner", X(ms, {}, [], [], !0));
export {
  Jl as ElegantBuffet,
  ds as ElegantBuffetEdit,
  Kl as ElegantBuffetView,
  vt as ElegantHeader,
  xn as ElegantHeroSearch,
  gs as ElegantLanding,
  mn as ElegantSearch,
  ms as ElegantSpinner,
  Sn as ElegantTable,
  Ia as IngBuffet,
  Yt as IngButton,
  Ji as IngButtonGray,
  Ha as IngForm,
  _n as IngHeaderLite,
  Ot as IngInput,
  cr as IngSelect,
  Va as IngTable
};
