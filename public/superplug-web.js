var kn = Object.defineProperty;
var ar = (t) => {
  throw TypeError(t);
};
var En = (t, e, r) => e in t ? kn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var he = (t, e, r) => En(t, typeof e != "symbol" ? e + "" : e, r), lr = (t, e, r) => e.has(t) || ar("Cannot " + r);
var ie = (t, e, r) => (lr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Nt = (t, e, r) => e.has(t) ? ar("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Tt = (t, e, r, n) => (lr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
const Sn = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Sn);
const Pt = 1, Vt = 2, mr = 4, Cn = 8, $n = 16, qn = 1, In = 4, Nn = 8, Tn = 16, An = 4, zn = 1, On = 2, br = "[", Jt = "[!", Gt = "]", De = {}, le = Symbol(), xr = !1;
function mt(t) {
  console.warn("hydration_mismatch");
}
var Yt = Array.isArray, Kt = Array.from, ct = Object.keys, dt = Object.defineProperty, He = Object.getOwnPropertyDescriptor, Rn = Object.getOwnPropertyDescriptors, Hn = Object.prototype, Mn = Array.prototype, zt = Object.getPrototypeOf;
function Ln(t) {
  return typeof t == "function";
}
const Ye = () => {
};
function yr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Ee = 2, wr = 4, bt = 8, xt = 16, me = 32, et = 64, Ge = 128, ft = 256, oe = 512, Te = 1024, tt = 2048, pe = 4096, rt = 8192, kr = 16384, yt = 32768, jn = 1 << 18, Er = 1 << 19, Ue = Symbol("$state"), Dn = Symbol("");
function Sr(t) {
  return t === this.v;
}
function Un(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function Cr(t) {
  return !Un(t, this.v);
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
      var a = r[i], l = a.f;
      l & Te || (Se(a, e), l & (oe | Ge) && (l & Ee ? qr(
        /** @type {Derived} */
        a,
        tt
      ) : St(
        /** @type {Effect} */
        a
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
  ae(t.parent);
  try {
    Ir(t), e = Pr(t);
  } finally {
    ae(r);
  }
  return e;
}
function Tr(t) {
  var e = Nr(t), r = (je || t.f & Ge) && t.deps !== null ? tt : oe;
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
  var i = (t & et) !== 0, a = R, l = {
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
    parent: i ? null : a,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (r) {
    var o = Be;
    try {
      sr(!0), Et(l), l.f |= kr;
    } catch (s) {
      throw ze(l), s;
    } finally {
      sr(o);
    }
  } else e !== null && St(l);
  var u = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & Er) === 0;
  if (!u && !i && n && (a !== null && Wn(l, a), B !== null && B.f & Ee)) {
    var v = (
      /** @type {Derived} */
      B
    );
    (v.children ?? (v.children = [])).push(l);
  }
  return l;
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
  if ((e || t.f & jn) && t.nodes_start !== null) {
    for (var n = t.nodes_start, i = t.nodes_end; n !== null; ) {
      var a = n === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ be(n)
      );
      n.remove(), n = a;
    }
    r = !0;
  }
  Rr(t, e && !r), Or(t), Qe(t, 0), Se(t, rt);
  var l = t.transitions;
  if (l !== null)
    for (const u of l)
      u.stop();
  zr(t);
  var o = t.parent;
  o !== null && o.first !== null && Hr(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
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
      for (const l of t.transitions)
        (l.is_global || r) && e.push(l);
    for (var n = t.first; n !== null; ) {
      var i = n.next, a = (n.f & yt) !== 0 || (n.f & me) !== 0;
      Qt(n, e, a ? r : !1), n = i;
    }
  }
}
function ht(t) {
  Lr(t, !0);
}
function Lr(t, e) {
  if (t.f & pe) {
    at(t) && Et(t), t.f ^= pe;
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & yt) !== 0 || (r.f & me) !== 0;
      Lr(r, i ? e : !1), r = n;
    }
    if (t.transitions !== null)
      for (const a of t.transitions)
        (a.is_global || e) && a.in();
  }
}
const Xn = typeof requestIdleCallback > "u" ? (t) => setTimeout(t, 1) : requestIdleCallback;
let pt = !1, _t = !1, Ht = [], Mt = [];
function jr() {
  pt = !1;
  const t = Ht.slice();
  Ht = [], yr(t);
}
function Dr() {
  _t = !1;
  const t = Mt.slice();
  Mt = [], yr(t);
}
function kt(t) {
  pt || (pt = !0, queueMicrotask(jr)), Ht.push(t);
}
function Qn(t) {
  _t || (_t = !0, Xn(Dr)), Mt.push(t);
}
function ei() {
  pt && jr(), _t && Dr();
}
const Ur = 0, ti = 1;
let ut = Ur, Xe = !1, Be = !1;
function sr(t) {
  Be = t;
}
let Re = [], Fe = 0;
let B = null;
function fe(t) {
  B = t;
}
let R = null;
function ae(t) {
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
let Br = 0, je = !1, ge = null;
function Fr() {
  return ++Br;
}
function ii() {
  return !$r;
}
function at(t) {
  var l, o;
  var e = t.f;
  if (e & Te)
    return !0;
  if (e & tt) {
    var r = t.deps, n = (e & Ge) !== 0;
    if (r !== null) {
      var i;
      if (e & ft) {
        for (i = 0; i < r.length; i++)
          ((l = r[i]).reactions ?? (l.reactions = [])).push(t);
        t.f ^= ft;
      }
      for (i = 0; i < r.length; i++) {
        var a = r[i];
        if (at(
          /** @type {Derived} */
          a
        ) && Tr(
          /** @type {Derived} */
          a
        ), n && R !== null && !je && !((o = a == null ? void 0 : a.reactions) != null && o.includes(t)) && (a.reactions ?? (a.reactions = [])).push(t), a.version > t.version)
          return !0;
      }
    }
    n || Se(t, oe);
  }
  return !1;
}
function ai(t, e, r) {
  throw t;
}
function Pr(t) {
  var c;
  var e = X, r = se, n = Ie, i = B, a = je, l = _e, o = ge, u = t.f;
  X = /** @type {null | Value[]} */
  null, se = 0, Ie = null, B = u & (me | et) ? null : t, je = !Be && (u & Ge) !== 0, _e = null, ge = t.ctx;
  try {
    var v = (
      /** @type {Function} */
      (0, t.fn)()
    ), s = t.deps;
    if (X !== null) {
      var f;
      if (Qe(t, se), s !== null && se > 0)
        for (s.length = se + X.length, f = 0; f < X.length; f++)
          s[se + f] = X[f];
      else
        t.deps = s = X;
      if (!je)
        for (f = se; f < s.length; f++)
          ((c = s[f]).reactions ?? (c.reactions = [])).push(t);
    } else s !== null && se < s.length && (Qe(t, se), s.length = se);
    return v;
  } finally {
    X = e, se = r, Ie = n, B = i, je = a, _e = l, ge = o;
  }
}
function li(t, e) {
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
      li(t, r[n]);
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
      ai(
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
        var a = [];
        Gr(i, a), si(a);
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
      !(n.f & (rt | pe)) && at(n) && (Et(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Hr(n) : n.fn = null));
    }
}
function oi() {
  if (Xe = !1, Fe > 1001)
    return;
  const t = Re;
  Re = [], Jr(t), Xe || (Fe = 0);
}
function St(t) {
  ut === Ur && (Xe || (Xe = !0, queueMicrotask(oi)));
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
    var i = r.f, a = (i & me) !== 0, l = a && (i & oe) !== 0;
    if (!l && !(i & pe))
      if (i & bt) {
        a ? r.f ^= oe : at(r) && Et(r);
        var o = r.first;
        if (o !== null) {
          r = o;
          continue;
        }
      } else i & wr && n.push(r);
    var u = r.next;
    if (u === null) {
      let f = r.parent;
      for (; f !== null; ) {
        if (t === f)
          break e;
        var v = f.next;
        if (v !== null) {
          r = v;
          continue e;
        }
        f = f.parent;
      }
    }
    r = u;
  }
  for (var s = 0; s < n.length; s++)
    o = n[s], e.push(o), Gr(o, e);
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
function _(t) {
  var o;
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
    var a = (
      /** @type {Derived} */
      t
    ), l = a.parent;
    l !== null && !((o = l.deriveds) != null && o.includes(a)) && (l.deriveds ?? (l.deriveds = [])).push(a);
  }
  return r && (a = /** @type {Derived} */
  t, at(a) && Tr(a)), t.v;
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
    const l = e.e;
    if (l !== null) {
      var r = R, n = B;
      e.e = null;
      try {
        for (var i = 0; i < l.length; i++) {
          var a = l[i];
          ae(a.effect), fe(a.reaction), it(a.fn);
        }
      } finally {
        ae(r), fe(n);
      }
    }
    ge = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function P(t, e = null, r) {
  if (typeof t != "object" || t === null || Ue in t)
    return t;
  const n = zt(t);
  if (n !== Hn && n !== Mn)
    return t;
  var i = /* @__PURE__ */ new Map(), a = Yt(t), l = ce(0);
  a && i.set("length", ce(
    /** @type {any[]} */
    t.length
  ));
  var o;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, v, s) {
        (!("value" in s) || s.configurable === !1 || s.enumerable === !1 || s.writable === !1) && Vn();
        var f = i.get(v);
        return f === void 0 ? (f = ce(s.value), i.set(v, f)) : J(f, P(s.value, o)), !0;
      },
      deleteProperty(u, v) {
        var s = i.get(v);
        if (s === void 0)
          v in u && i.set(v, ce(le));
        else {
          if (a && typeof v == "string") {
            var f = (
              /** @type {Source<number>} */
              i.get("length")
            ), c = Number(v);
            Number.isInteger(c) && c < f.v && J(f, c);
          }
          J(s, le), or(l);
        }
        return !0;
      },
      get(u, v, s) {
        var d;
        if (v === Ue)
          return t;
        var f = i.get(v), c = v in u;
        if (f === void 0 && (!c || (d = He(u, v)) != null && d.writable) && (f = ce(P(c ? u[v] : le, o)), i.set(v, f)), f !== void 0) {
          var p = _(f);
          return p === le ? void 0 : p;
        }
        return Reflect.get(u, v, s);
      },
      getOwnPropertyDescriptor(u, v) {
        var s = Reflect.getOwnPropertyDescriptor(u, v);
        if (s && "value" in s) {
          var f = i.get(v);
          f && (s.value = _(f));
        } else if (s === void 0) {
          var c = i.get(v), p = c == null ? void 0 : c.v;
          if (c !== void 0 && p !== le)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return s;
      },
      has(u, v) {
        var p;
        if (v === Ue)
          return !0;
        var s = i.get(v), f = s !== void 0 && s.v !== le || Reflect.has(u, v);
        if (s !== void 0 || R !== null && (!f || (p = He(u, v)) != null && p.writable)) {
          s === void 0 && (s = ce(f ? P(u[v], o) : le), i.set(v, s));
          var c = _(s);
          if (c === le)
            return !1;
        }
        return f;
      },
      set(u, v, s, f) {
        var b;
        var c = i.get(v), p = v in u;
        if (a && v === "length")
          for (var d = s; d < /** @type {Source<number>} */
          c.v; d += 1) {
            var h = i.get(d + "");
            h !== void 0 ? J(h, le) : d in u && (h = ce(le), i.set(d + "", h));
          }
        c === void 0 ? (!p || (b = He(u, v)) != null && b.writable) && (c = ce(void 0), J(c, P(s, o)), i.set(v, c)) : (p = c.v !== le, J(c, P(s, o)));
        var m = Reflect.getOwnPropertyDescriptor(u, v);
        if (m != null && m.set && m.set.call(f, s), !p) {
          if (a && typeof v == "string") {
            var x = (
              /** @type {Source<number>} */
              i.get("length")
            ), C = Number(v);
            Number.isInteger(C) && C >= x.v && J(x, C + 1);
          }
          or(l);
        }
        return !0;
      },
      ownKeys(u) {
        _(l);
        var v = Reflect.ownKeys(u).filter((c) => {
          var p = i.get(c);
          return p === void 0 || p.v !== le;
        });
        for (var [s, f] of i)
          f.v !== le && !(s in u) && v.push(s);
        return v;
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
  return t !== null && typeof t == "object" && Ue in t ? t[Ue] : t;
}
function vi(t, e) {
  return Object.is(ur(t), ur(e));
}
var vr, Kr, Wr;
function Lt() {
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
function w(t, e) {
  if (!L)
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
function F(t, e) {
  if (!L) {
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
  let n = L ? j : t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ be(n);
  if (!L)
    return n;
  var i = n.nodeType;
  if (r && i !== 3) {
    var a = Je();
    return n == null || n.before(a), de(a), a;
  }
  return de(n), /** @type {TemplateNode} */
  n;
}
function Zr(t) {
  t.textContent = "";
}
let L = !1;
function we(t) {
  L = t;
}
let j;
function de(t) {
  if (t === null)
    throw mt(), De;
  return j = t;
}
function Me() {
  return de(
    /** @type {TemplateNode} */
    /* @__PURE__ */ be(j)
  );
}
function g(t) {
  if (L) {
    if (/* @__PURE__ */ be(j) !== null)
      throw mt(), De;
    j = t;
  }
}
function ci(t = 1) {
  if (L) {
    for (var e = t, r = j; e--; )
      r = /** @type {TemplateNode} */
      /* @__PURE__ */ be(r);
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
  fe(null), ae(null);
  try {
    return t();
  } finally {
    fe(e), ae(r);
  }
}
function Qr(t, e, r, n = r) {
  t.addEventListener(e, () => di(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n();
  } : t.__on_r = n, Xr();
}
const en = /* @__PURE__ */ new Set(), Dt = /* @__PURE__ */ new Set();
function te(t) {
  for (var e = 0; e < t.length; e++)
    en.add(t[e]);
  for (var r of Dt)
    r(t);
}
function lt(t) {
  var C;
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = ((C = t.composedPath) == null ? void 0 : C.call(t)) || [], a = (
    /** @type {null | Element} */
    i[0] || t.target
  ), l = 0, o = t.__root;
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var v = i.indexOf(e);
    if (v === -1)
      return;
    u <= v && (l = u);
  }
  if (a = /** @type {Element} */
  i[l] || t.target, a !== e) {
    dt(t, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var s = B, f = R;
    fe(null), ae(null);
    try {
      for (var c, p = []; a !== null; ) {
        var d = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var h = a["__" + n];
          if (h !== void 0 && !/** @type {any} */
          a.disabled)
            if (Yt(h)) {
              var [m, ...x] = h;
              m.apply(a, [t, ...x]);
            } else
              h.call(a, t);
        } catch (b) {
          c ? p.push(b) : c = b;
        }
        if (t.cancelBubble || d === e || d === null)
          break;
        a = d;
      }
      if (c) {
        for (let b of p)
          queueMicrotask(() => {
            throw b;
          });
        throw c;
      }
    } finally {
      t.__root = e, delete t.currentTarget, fe(s), ae(f);
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
  var r = (e & zn) !== 0, n = (e & On) !== 0, i, a = !t.startsWith("<!>");
  return () => {
    if (L)
      return Ne(j, null), j;
    i === void 0 && (i = tn(a ? t : "<!>" + t), r || (i = /** @type {Node} */
    /* @__PURE__ */ Ae(i)));
    var l = (
      /** @type {TemplateNode} */
      n ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(l)
      ), u = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      Ne(o, u);
    } else
      Ne(l, l);
    return l;
  };
}
function ne() {
  if (L)
    return Ne(j, null), j;
  var t = document.createDocumentFragment(), e = document.createComment(""), r = Je();
  return t.append(e, r), Ne(e, r), t;
}
function k(t, e) {
  if (L) {
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
let Ut = !0;
function M(t, e) {
  var r = e == null ? "" : typeof e == "object" ? e + "" : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = r == null ? "" : r + "");
}
function rn(t, e) {
  return nn(t, e);
}
function pi(t, e) {
  Lt(), e.intro = e.intro ?? !1;
  const r = e.target, n = L, i = j;
  try {
    for (var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ae(r)
    ); a && (a.nodeType !== 8 || /** @type {Comment} */
    a.data !== br); )
      a = /** @type {TemplateNode} */
      /* @__PURE__ */ be(a);
    if (!a)
      throw De;
    we(!0), de(
      /** @type {Comment} */
      a
    ), Me();
    const l = nn(t, { ...e, anchor: a });
    if (j === null || j.nodeType !== 8 || /** @type {Comment} */
    j.data !== Gt)
      throw mt(), De;
    return we(!1), /**  @type {Exports} */
    l;
  } catch (l) {
    if (l === De)
      return e.recover === !1 && Fn(), Lt(), Zr(r), we(!1), rn(t, e);
    throw l;
  } finally {
    we(n), de(i);
  }
}
const Le = /* @__PURE__ */ new Map();
function nn(t, { target: e, anchor: r, props: n = {}, events: i, context: a, intro: l = !0 }) {
  Lt();
  var o = /* @__PURE__ */ new Set(), u = (f) => {
    for (var c = 0; c < f.length; c++) {
      var p = f[c];
      if (!o.has(p)) {
        o.add(p);
        var d = hi(p);
        e.addEventListener(p, lt, { passive: d });
        var h = Le.get(p);
        h === void 0 ? (document.addEventListener(p, lt, { passive: d }), Le.set(p, 1)) : Le.set(p, h + 1);
      }
    }
  };
  u(Kt(en)), Dt.add(u);
  var v = void 0, s = Ar(() => {
    var f = r ?? e.appendChild(Je());
    return Ve(() => {
      if (a) {
        Q({});
        var c = (
          /** @type {ComponentContext} */
          ge
        );
        c.c = a;
      }
      i && (n.$$events = i), L && Ne(
        /** @type {TemplateNode} */
        f,
        null
      ), Ut = l, v = t(f, n) || {}, Ut = !0, L && (R.nodes_end = j), a && ee();
    }), () => {
      var d;
      for (var c of o) {
        e.removeEventListener(c, lt);
        var p = (
          /** @type {number} */
          Le.get(c)
        );
        --p === 0 ? (document.removeEventListener(c, lt), Le.delete(c)) : Le.set(c, p);
      }
      Dt.delete(u), Bt.delete(v), f !== r && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return Bt.set(v, s), v;
}
let Bt = /* @__PURE__ */ new WeakMap();
function _i(t) {
  const e = Bt.get(t);
  e && e();
}
function z(t, e, r, n = null, i = !1) {
  L && Me();
  var a = t, l = null, o = null, u = null, v = i ? yt : 0;
  wt(() => {
    if (u === (u = !!e())) return;
    let s = !1;
    if (L) {
      const f = (
        /** @type {Comment} */
        a.data === Jt
      );
      u === f && (a = jt(), de(a), we(!1), s = !0);
    }
    u ? (l ? ht(l) : l = Ve(() => r(a)), o && Rt(o, () => {
      o = null;
    })) : (o ? ht(o) : n && (o = Ve(() => n(a))), l && Rt(l, () => {
      l = null;
    })), s && we(!0);
  }, v), L && (a = j);
}
function K(t, e) {
  return e;
}
function gi(t, e, r, n) {
  for (var i = [], a = e.length, l = 0; l < a; l++)
    Qt(e[l].e, i, !0);
  var o = a > 0 && i.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Zr(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), $e(t, e[0].prev, e[a - 1].next);
  }
  Mr(i, () => {
    for (var v = 0; v < a; v++) {
      var s = e[v];
      o || (n.delete(s.k), $e(t, s.prev, s.next)), ze(s.e, !o);
    }
  });
}
function W(t, e, r, n, i, a = null) {
  var l = t, o = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, u = (e & mr) !== 0;
  if (u) {
    var v = (
      /** @type {Element} */
      t
    );
    l = L ? de(
      /** @type {Comment | Text} */
      /* @__PURE__ */ Ae(v)
    ) : v.appendChild(Je());
  }
  L && Me();
  var s = null, f = !1;
  wt(() => {
    var c = r(), p = Yt(c) ? c : c == null ? [] : Kt(c), d = p.length;
    if (f && d === 0)
      return;
    f = d === 0;
    let h = !1;
    if (L) {
      var m = (
        /** @type {Comment} */
        l.data === Jt
      );
      m !== (d === 0) && (l = jt(), de(l), we(!1), h = !0);
    }
    if (L) {
      for (var x = null, C, b = 0; b < d; b++) {
        if (j.nodeType === 8 && /** @type {Comment} */
        j.data === Gt) {
          l = /** @type {Comment} */
          j, h = !0, we(!1);
          break;
        }
        var E = p[b], y = n(E, b);
        C = an(j, o, x, null, E, y, b, i, e), o.items.set(y, C), x = C;
      }
      d > 0 && de(jt());
    }
    if (!L) {
      var q = (
        /** @type {Effect} */
        B
      );
      mi(p, o, l, i, e, (q.f & pe) !== 0, n);
    }
    a !== null && (d === 0 ? s ? ht(s) : s = Ve(() => a(l)) : s !== null && Rt(s, () => {
      s = null;
    })), h && we(!0), r();
  }), L && (l = j);
}
function mi(t, e, r, n, i, a, l) {
  var Z, ue, Ce, Oe;
  var o = (i & Cn) !== 0, u = (i & (Pt | Vt)) !== 0, v = t.length, s = e.items, f = e.first, c = f, p, d = null, h, m = [], x = [], C, b, E, y;
  if (o)
    for (y = 0; y < v; y += 1)
      C = t[y], b = l(C, y), E = s.get(b), E !== void 0 && ((Z = E.a) == null || Z.measure(), (h ?? (h = /* @__PURE__ */ new Set())).add(E));
  for (y = 0; y < v; y += 1) {
    if (C = t[y], b = l(C, y), E = s.get(b), E === void 0) {
      var q = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : r;
      d = an(
        q,
        e,
        d,
        d === null ? e.first : d.next,
        C,
        b,
        y,
        n,
        i
      ), s.set(b, d), m = [], x = [], c = d.next;
      continue;
    }
    if (u && bi(E, C, y, i), E.e.f & pe && (ht(E.e), o && ((ue = E.a) == null || ue.unfix(), (h ?? (h = /* @__PURE__ */ new Set())).delete(E))), E !== c) {
      if (p !== void 0 && p.has(E)) {
        if (m.length < x.length) {
          var O = x[0], A;
          d = O.prev;
          var H = m[0], V = m[m.length - 1];
          for (A = 0; A < m.length; A += 1)
            dr(m[A], O, r);
          for (A = 0; A < x.length; A += 1)
            p.delete(x[A]);
          $e(e, H.prev, V.next), $e(e, d, H), $e(e, V, O), c = O, d = V, y -= 1, m = [], x = [];
        } else
          p.delete(E), dr(E, c, r), $e(e, E.prev, E.next), $e(e, E, d === null ? e.first : d.next), $e(e, d, E), d = E;
        continue;
      }
      for (m = [], x = []; c !== null && c.k !== b; )
        (a || !(c.e.f & pe)) && (p ?? (p = /* @__PURE__ */ new Set())).add(c), x.push(c), c = c.next;
      if (c === null)
        continue;
      E = c;
    }
    m.push(E), d = E, c = E.next;
  }
  if (c !== null || p !== void 0) {
    for (var D = p === void 0 ? [] : Kt(p); c !== null; )
      (a || !(c.e.f & pe)) && D.push(c), c = c.next;
    var U = D.length;
    if (U > 0) {
      var re = i & mr && v === 0 ? r : null;
      if (o) {
        for (y = 0; y < U; y += 1)
          (Ce = D[y].a) == null || Ce.measure();
        for (y = 0; y < U; y += 1)
          (Oe = D[y].a) == null || Oe.fix();
      }
      gi(e, D, re, s);
    }
  }
  o && kt(() => {
    var xe;
    if (h !== void 0)
      for (E of h)
        (xe = E.a) == null || xe.apply();
  }), R.first = e.first && e.first.e, R.last = d && d.e;
}
function bi(t, e, r, n) {
  n & Pt && Ot(t.v, e), n & Vt ? Ot(
    /** @type {Value<number>} */
    t.i,
    r
  ) : t.i = r;
}
function an(t, e, r, n, i, a, l, o, u) {
  var v = (u & Pt) !== 0, s = (u & $n) === 0, f = v ? s ? /* @__PURE__ */ Wt(i) : ce(i) : i, c = u & Vt ? ce(l) : l, p = {
    i: c,
    v: f,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return p.e = Ve(() => o(t, f, c), L), p.e.prev = r && r.e, p.e.next = n && n.e, r === null ? e.first = p : (r.next = p, r.e.next = p.e), n !== null && (n.prev = p, n.e.prev = p.e), p;
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
  ) : r, a = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); a !== n; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ be(a)
    );
    i.before(a), a = l;
  }
}
function $e(t, e, r) {
  e === null ? t.first = r : (e.next = r, e.e.next = r && r.e), r !== null && (r.prev = e, r.e.prev = e && e.e);
}
function xi(t, e, r, n, i) {
  var a = t, l = "", o;
  wt(() => {
    if (l === (l = e() ?? "")) {
      L && Me();
      return;
    }
    o !== void 0 && (ze(o), o = void 0), l !== "" && (o = Ve(() => {
      if (L) {
        j.data;
        for (var u = Me(), v = u; u !== null && (u.nodeType !== 8 || /** @type {Comment} */
        u.data !== ""); )
          v = u, u = /** @type {TemplateNode} */
          /* @__PURE__ */ be(u);
        if (u === null)
          throw mt(), De;
        Ne(j, v), a = de(u);
        return;
      }
      var s = l + "", f = tn(s);
      Ne(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ae(f),
        /** @type {TemplateNode} */
        f.lastChild
      ), a.before(f);
    }));
  });
}
function er(t, e, r, n, i) {
  var o;
  L && Me();
  var a = (o = e.$$slots) == null ? void 0 : o[r], l = !1;
  a === !0 && (a = e.children, l = !0), a === void 0 || a(t, l ? () => n : n);
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
  if (L) {
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
  L && (i[e] = t.getAttribute(e), e === "src" || e === "srcset" || e === "href" && t.nodeName === "LINK") || i[e] !== (i[e] = r) && (e === "style" && "__styles" in t && (t.__styles = {}), e === "loading" && (t[Dn] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && ln(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function At(t, e, r) {
  var n = B, i = R;
  fe(null), ae(null);
  try {
    ln(t).includes(e) ? t[e] = r : T(t, e, r);
  } finally {
    fe(n), ae(i);
  }
}
var fr = /* @__PURE__ */ new Map();
function ln(t) {
  var e = fr.get(t.nodeName);
  if (e) return e;
  fr.set(t.nodeName, e = []);
  for (var r, n = zt(t), i = Element.prototype; i !== n; ) {
    r = Rn(n);
    for (var a in r)
      r[a].set && e.push(a);
    n = zt(n);
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
    const [i, a] = n.split(":");
    if (!i || a === void 0) break;
    const l = Ei(i.trim());
    e[l] = a.trim();
  }
  return e;
}
const Si = (t) => t;
function Ci(t, e, r, n) {
  var i = (t & An) !== 0, a = "both", l, o = e.inert, u, v;
  function s() {
    var h = B, m = R;
    fe(null), ae(null);
    try {
      return l ?? (l = r()(e, (n == null ? void 0 : n()) ?? /** @type {P} */
      {}, {
        direction: a
      }));
    } finally {
      fe(h), ae(m);
    }
  }
  var f = {
    is_global: i,
    in() {
      e.inert = o, st(e, "introstart"), u = Ft(e, s(), v, 1, () => {
        st(e, "introend"), u == null || u.abort(), u = l = void 0;
      });
    },
    out(h) {
      e.inert = !0, st(e, "outrostart"), v = Ft(e, s(), u, 0, () => {
        st(e, "outroend"), h == null || h();
      });
    },
    stop: () => {
      u == null || u.abort(), v == null || v.abort();
    }
  }, c = (
    /** @type {Effect} */
    R
  );
  if ((c.transitions ?? (c.transitions = [])).push(f), Ut) {
    var p = i;
    if (!p) {
      for (var d = (
        /** @type {Effect | null} */
        c.parent
      ); d && d.f & yt; )
        for (; (d = d.parent) && !(d.f & xt); )
          ;
      p = !d || (d.f & kr) !== 0;
    }
    p && it(() => {
      gt(() => f.in());
    });
  }
}
function Ft(t, e, r, n, i) {
  var a = n === 1;
  if (Ln(e)) {
    var l, o = !1;
    return kt(() => {
      if (!o) {
        var m = e({ direction: a ? "in" : "out" });
        l = Ft(t, m, r, n, i);
      }
    }), {
      abort: () => {
        o = !0, l == null || l.abort();
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
  const { delay: u = 0, css: v, tick: s, easing: f = Si } = e;
  var c = [];
  if (a && r === void 0 && (s && s(0, 1), v)) {
    var p = hr(v(0, 1));
    c.push(p, p);
  }
  var d = () => 1 - n, h = t.animate(c, { duration: u });
  return h.onfinish = () => {
    var m = (r == null ? void 0 : r.t()) ?? 1 - n;
    r == null || r.abort();
    var x = n - m, C = (
      /** @type {number} */
      e.duration * Math.abs(x)
    ), b = [];
    if (C > 0) {
      if (v)
        for (var E = Math.ceil(C / 16.666666666666668), y = 0; y <= E; y += 1) {
          var q = m + x * f(y / E), O = v(q, 1 - q);
          b.push(hr(O));
        }
      d = () => {
        var A = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          h.currentTime
        );
        return m + x * f(A / C);
      }, s && ki(() => {
        if (h.playState !== "running") return !1;
        var A = d();
        return s(A, 1 - A), !0;
      });
    }
    h = t.animate(b, { duration: C, fill: "forwards" }), h.onfinish = () => {
      d = () => n, s == null || s(n, 1 - n), i();
    };
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null, h.onfinish = Ye);
    },
    deactivate: () => {
      i = Ye;
    },
    reset: () => {
      n === 0 && (s == null || s(1, 0));
    },
    t: () => d()
  };
}
function $t(t, e, r = e) {
  Qr(t, "input", () => {
    var n = pr(t) ? _r(t.value) : t.value;
    r(n), n !== (n = e()) && (t.value = n ?? "");
  }), Xt(() => {
    var n = e();
    if (L && t.defaultValue !== t.value) {
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
      var a = t.querySelector(":checked");
      i = a && We(a);
    }
    r(i);
  }), it(() => {
    var i = e();
    if (on(t, i, n), n && i === void 0) {
      var a = t.querySelector(":checked");
      a !== null && (i = We(a), r(i));
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
  return t === e || (t == null ? void 0 : t[Ue]) === e;
}
function vn(t = {}, e, r, n) {
  return it(() => {
    var i, a;
    return Xt(() => {
      i = a, a = (n == null ? void 0 : n()) || [], gt(() => {
        t !== r(...a) && (e(t, ...a), i && gr(r(...i), t) && e(null, ...i));
      });
    }), () => {
      kt(() => {
        a && gr(r(...a), t) && e(null, ...a);
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
    return ae(e), t();
  } finally {
    ae(r);
  }
}
function S(t, e, r, n) {
  var y;
  var i = (r & qn) !== 0, a = !$r, l = (r & Nn) !== 0, o = (r & Tn) !== 0, u = !1, v;
  l ? [v, u] = Ii(() => (
    /** @type {V} */
    t[e]
  )) : v = /** @type {V} */
  t[e];
  var s = (y = He(t, e)) == null ? void 0 : y.set, f = (
    /** @type {V} */
    n
  ), c = !0, p = !1, d = () => (p = !0, c && (c = !1, o ? f = gt(
    /** @type {() => V} */
    n
  ) : f = /** @type {V} */
  n), f);
  v === void 0 && n !== void 0 && (s && a && Pn(), v = d(), s && s(v));
  var h;
  if (h = () => {
    var q = (
      /** @type {V} */
      t[e]
    );
    return q === void 0 ? d() : (c = !0, p = !1, q);
  }, !(r & In))
    return h;
  if (s) {
    var m = t.$$legacy;
    return function(q, O) {
      return arguments.length > 0 ? ((!O || m || u) && s(O ? h() : q), q) : h();
    };
  }
  var x = !1, C = !1, b = /* @__PURE__ */ Wt(v), E = Ni(
    () => /* @__PURE__ */ Ze(() => {
      var q = h(), O = _(b);
      return x ? (x = !1, C = !0, O) : (C = !1, b.v = q);
    })
  );
  return i || (E.equals = Cr), function(q, O) {
    if (arguments.length > 0) {
      const A = O ? _(E) : l ? P(q) : q;
      return E.equals(A) || (x = !0, J(b, A), p && f !== void 0 && (f = A), gt(() => _(E))), q;
    }
    return _(E);
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
    var a;
    var r = /* @__PURE__ */ new Map(), n = (l, o) => {
      var u = /* @__PURE__ */ Wt(o);
      return r.set(l, u), u;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(l, o) {
          return _(r.get(o) ?? n(o, Reflect.get(l, o)));
        },
        has(l, o) {
          return _(r.get(o) ?? n(o, Reflect.get(l, o))), Reflect.has(l, o);
        },
        set(l, o, u) {
          return J(r.get(o) ?? n(o, u), u), Reflect.set(l, o, u);
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
    })), (!((a = e == null ? void 0 : e.props) != null && a.$$host) || e.sync === !1) && Yr(), Tt(this, ye, i.$$events);
    for (const l of Object.keys(ie(this, ve)))
      l === "$set" || l === "$destroy" || l === "$on" || dt(this, l, {
        get() {
          return ie(this, ve)[l];
        },
        /** @param {any} value */
        set(o) {
          ie(this, ve)[l] = o;
        },
        enumerable: !0
      });
    ie(this, ve).$set = /** @param {Record<string, any>} next */
    (l) => {
      Object.assign(i, l);
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
        return (a) => {
          const l = document.createElement("slot");
          i !== "default" && (l.name = i), k(a, l);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const r = {}, n = zi(this);
      for (const i of this.$$s)
        i in n && (i === "default" && !this.$$d.children ? (this.$$d.children = e(i), r.default = !0) : r[i] = e(i));
      for (const i of this.attributes) {
        const a = this.$$g_p(i.name);
        a in this.$$d || (this.$$d[a] = vt(a, i.value, this.$$p_d, "toProp"));
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
          for (const a of ct(this.$$c)) {
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
    return ct(this.$$p_d).find(
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
function zi(t) {
  const e = {};
  return t.childNodes.forEach((r) => {
    e[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), e;
}
function Y(t, e, r, n, i, a) {
  let l = class extends cn {
    constructor() {
      super(t, r, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ct(e).map(
        (o) => (e[o].attribute || o).toLowerCase()
      );
    }
  };
  return ct(e).forEach((o) => {
    dt(l.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var f;
        u = vt(o, u, e), this.$$d[o] = u;
        var v = this.$$c;
        if (v) {
          var s = (f = He(v, o)) == null ? void 0 : f.get;
          s ? v[o] = u : v.$set({ [o]: u });
        }
      }
    });
  }), n.forEach((o) => {
    dt(l.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), t.element = /** @type {any} */
  l, l;
}
var Oi = /* @__PURE__ */ $('<button type="button"><!></button>');
const Ri = {
  hash: "svelte-1bto172",
  code: ".button.svelte-1bto172 {display:inline-block;cursor:pointer;border:0;margin-left:14px;border-radius:3em;font-weight:700;line-height:1;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.button--primary.svelte-1bto172 {background-color:#1ea7fd;color:white;}.button--secondary.svelte-1bto172 {box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;background-color:transparent;color:#333;}.button--small.svelte-1bto172 {padding:10px 16px;font-size:12px;}.button--medium.svelte-1bto172 {padding:11px 20px;font-size:14px;}.button--large.svelte-1bto172 {padding:12px 24px;font-size:16px;}"
};
function Hi(t, e) {
  G(t, Ri);
  const r = S(e, "type", 3, "primary"), n = S(e, "size", 3, "medium");
  S(e, "label", 3, "Button");
  const i = S(e, "onClick", 3, void 0);
  var a = Oi();
  a.__click = function(...o) {
    var u;
    (u = i()) == null || u.apply(this, o);
  };
  var l = w(a);
  er(l, e, "default", {}), g(a), N(() => Ke(a, `${"button button--" + n() + " button--" + r()} svelte-1bto172`)), k(t, a);
}
te(["click"]);
customElements.define("ing-button", Y(Hi, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Mi = /* @__PURE__ */ $('<button type="button"><!></button>');
const Li = {
  hash: "svelte-1c7d33o",
  code: ".button.svelte-1c7d33o {cursor:pointer;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;color:#fff;background-color:#1f2937;border-color:#1f2937;box-shadow:inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 1px rgba(17, 24, 39, .075);font-weight:500;line-height:1.5;text-align:center;vertical-align:middle;user-select:none;border:.0625rem solid transparent;padding:.5rem 1rem;font-size:.875rem 14px;border-radius:.5rem;transition:color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;}.button.svelte-1c7d33o:focus {color:#fff;background-color:#2f3745;border-color:#2c3441;box-shadow:inset 0 1px 0 rgba(255,255,255,.15),0 1px 1px rgba(17,24,39,.075),0 0 0 .18rem rgba(85,94,107,.5);}.button.svelte-1c7d33o:hover {color:#fff;background-color:#1a232f;border-color:#19212c;}.button--small.svelte-1c7d33o {padding:10px 16px;font-size:14px;}.button--medium.svelte-1c7d33o {padding:11px 20px;font-size:14px;}.button--large.svelte-1c7d33o {padding:12px 24px;font-size:16px;}"
};
function ji(t, e) {
  G(t, Li), S(e, "type", 3, "primary");
  const r = S(e, "size", 3, "medium");
  S(e, "label", 3, "Button");
  const n = S(e, "onClick", 3, void 0);
  var i = Mi();
  i.__click = function(...l) {
    var o;
    (o = n()) == null || o.apply(this, l);
  };
  var a = w(i);
  er(a, e, "default", {}), g(i), N(() => Ke(i, `${"button button--" + r()} svelte-1c7d33o`)), k(t, i);
}
te(["click"]);
customElements.define("ing-button-gray", Y(ji, { type: {}, size: {}, label: {}, onClick: {} }, ["default"], [], !0));
var Di = /* @__PURE__ */ $('<div class="input_label svelte-1hyy719"> </div>'), Ui = /* @__PURE__ */ $('<span class="input_icon svelte-1hyy719"><img width="16px" alt="in"></span>'), Bi = (t, e) => {
  e(t);
}, Fi = /* @__PURE__ */ $('<div class="input_frame svelte-1hyy719"><!> <div class="input_box svelte-1hyy719"><!> <input class="input_field svelte-1hyy719"></div></div>');
const Pi = {
  hash: "svelte-1hyy719",
  code: `.input_frame.svelte-1hyy719 {padding-right:24px;margin-bottom:14px;}.input_label.svelte-1hyy719 {margin-bottom:6px;}.input_box.svelte-1hyy719 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;
    /* padding-right: 14px; */}.input_icon.svelte-1hyy719 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1hyy719 {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:transparent;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;width:98%;}.input_field.svelte-1hyy719:focus {outline:none;}`
};
function qt(t, e) {
  Q(e, !0), G(t, Pi);
  let r = S(e, "inputId", 3, ""), n = S(e, "label", 3, ""), i = S(e, "icon", 3, ""), a = S(e, "type", 3, "text"), l = S(e, "placeholder", 3, ""), o = S(e, "input", 15, ""), u = S(e, "inputStyle", 3, "");
  const v = (h) => {
    if (h && h.target && e.$$host) {
      let m = "";
      h.target.value && (m = h.target.value), e.$$host.innerText = m, document.dispatchEvent(new CustomEvent("InputChangedEvent", {
        detail: { id: e.$$host.id, input: m }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: m } }));
    }
  };
  var s = Fi(), f = w(s);
  z(f, n, (h) => {
    var m = Di(), x = w(m, !0);
    g(m), N(() => M(x, n())), k(h, m);
  });
  var c = I(f, 2), p = w(c);
  z(p, i, (h) => {
    var m = Ui(), x = w(m);
    g(m), N(() => T(x, "src", i())), k(h, m);
  });
  var d = I(p, 2);
  Ct(d), d.__input = [Bi, v], g(c), g(s), N(() => {
    T(s, "style", u()), T(d, "id", r()), T(d, "type", a()), T(d, "placeholder", l());
  }), $t(d, o), k(t, s), ee();
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
var Vi = /* @__PURE__ */ $('<a class="svelte-hcumdc"> </a>'), Ji = (t, e, r) => e(_(r).title), Gi = /* @__PURE__ */ $('<button class="menu_item_button svelte-hcumdc"> </button>'), Yi = /* @__PURE__ */ $('<div class="menu_item svelte-hcumdc"><!></div>'), Ki = /* @__PURE__ */ $('<div class="menu_frame svelte-hcumdc"><div class="arrow svelte-hcumdc"></div> <div class="menu svelte-hcumdc"></div></div>');
const Wi = {
  hash: "svelte-hcumdc",
  code: '.menu_frame.svelte-hcumdc {position:fixed;top:"57px";left:calc(100vw-24);min-width:200px;min-height:200px;max-width:180px;background:#fff;box-shadow:#00000026 0 2px 10px;border:1px solid rgb(242, 242, 242);z-index:6;}.arrow.svelte-hcumdc {position:relative;top:-31px;left:163px;border:1px solid rgb(242, 242, 242);box-shadow:#00000026 -1px -1px 1px -1px;transform:rotate(45deg) translate(16px, 16px);background:#fff;height:14px;width:14px;display:block;content:"";pointer-events:none;z-index:1;}.menu.svelte-hcumdc {position:relative;top:-16px;background:#fff;min-height:140px;z-index:2;padding:14px;}.menu_item.svelte-hcumdc {height:14px;width:100%;font-size:18px;padding-bottom:12px;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):link {text-decoration:none;color:gray;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):visited {text-decoration:none;color:#222;}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):hover {text-decoration:none;color:darkgray}.menu_item.svelte-hcumdc a:where(.svelte-hcumdc):active {text-decoration:none;}.menu_item_button.svelte-hcumdc {background-color:transparent;border:0px;font-size:16px;}.menu_item_button.svelte-hcumdc:hover {color:gray;cursor:pointer;}'
};
function tr(t, e) {
  Q(e, !0), G(t, Wi);
  let r = S(e, "position", 19, () => ({})), n = S(e, "menuItems", 19, () => []);
  function i(o) {
    document.dispatchEvent(new CustomEvent(o, { detail: {} }));
  }
  var a = Ki(), l = I(w(a), 2);
  W(l, 21, n, K, (o, u) => {
    var v = Yi(), s = w(v);
    z(
      s,
      () => _(u).url,
      (f) => {
        var c = Vi(), p = w(c, !0);
        g(c), N(() => {
          T(c, "href", _(u).url), M(p, _(u).title);
        }), k(f, c);
      },
      (f) => {
        var c = Gi();
        c.__click = [Ji, i, u];
        var p = w(c, !0);
        g(c), N(() => M(p, _(u).title)), k(f, c);
      }
    ), g(v), k(o, v);
  }), g(l), g(a), N(() => T(a, "style", `top: ${r().top}; left: ${r().left};`)), k(t, a), ee();
}
te(["click"]);
customElements.define("mv-elegant-dropdown", Y(tr, { position: {}, menuItems: {} }, [], [], !0));
var Zi = /* @__PURE__ */ $('<img class="msg_icon svelte-lg722a" alt="alerts"> <span class="msg_new svelte-lg722a"></span>', 1), Xi = (t, e) => {
  J(e, !_(e));
}, Qi = /* @__PURE__ */ $('<span class="user svelte-lg722a"><!> <button class="user_button svelte-lg722a"><img class="user_icon svelte-lg722a" alt="profile"> <span class="user_name svelte-lg722a"> </span></button></span> <!>', 1), ea = /* @__PURE__ */ $("<span></span>"), ta = /* @__PURE__ */ $('<div class="header svelte-lg722a"><div style="width: 364px;"><!> <span></span></div> <div><!></div></div>');
const ra = {
  hash: "svelte-lg722a",
  code: '.header.svelte-lg722a {display:flex;justify-content:space-between;align-items:center;padding:26px 20px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.msg_icon.svelte-lg722a {width:20px;margin-right:22px;}.msg_new.svelte-lg722a {background-color:red;height:7px;width:7px;border-radius:50% !important;position:relative;top:4px;left:-22px;}.user.svelte-lg722a {display:flex;position:relative;top:-6px;}.user_button.svelte-lg722a {display:flex;background-color:transparent;border:0px;}.user_button.svelte-lg722a:hover {cursor:pointer;}.user_name.svelte-lg722a {padding-top:12px;padding-left:8px;}.user_icon.svelte-lg722a {border-radius:50% !important;width:40px;}'
};
function dn(t, e) {
  Q(e, !0), G(t, ra), S(e, "title", 3, "Apint.org");
  const r = S(e, "searchicon", 3, ""), n = S(e, "notificationicon", 3, ""), i = S(e, "supportuser", 3, !1), a = S(e, "username", 3, ""), l = S(e, "userpic", 3, "");
  let o = "", u = ke(!1), v = ke(void 0);
  function s() {
    let x = {}, C;
    if (_(v) && (C = _(v)), C) {
      var b = C.getBoundingClientRect();
      x.top = (b.top + b.height + 12).toString() + "px", x.left = (b.left - 115).toString() + "px", console.log(x);
    }
    return x;
  }
  var f = ta(), c = w(f), p = w(c);
  qt(p, {
    get icon() {
      return r();
    },
    placeholder: "Search",
    input: o
  });
  var d = I(p, 2);
  d.textContent = o, g(c);
  var h = I(c, 2), m = w(h);
  z(
    m,
    i,
    (x) => {
      var C = Qi(), b = F(C), E = w(b);
      z(E, n, (V) => {
        var D = Zi(), U = F(D);
        ci(2), N(() => T(U, "src", n())), k(V, D);
      });
      var y = I(E, 2);
      y.__click = [Xi, u];
      var q = w(y), O = I(q, 2), A = w(O, !0);
      g(O), g(y), vn(y, (V) => J(v, V), () => _(v)), g(b);
      var H = I(b, 2);
      z(H, () => _(u), (V) => {
        var D = /* @__PURE__ */ Ze(s);
        tr(V, {
          menuItems: [
            { title: "Sign out", event: "SignOutEvent" }
          ],
          get position() {
            return _(D);
          }
        });
      }), N(() => {
        T(q, "src", l()), M(A, a());
      }), k(x, C);
    },
    (x) => {
      var C = ne(), b = F(C);
      z(
        b,
        i,
        (E) => {
          var y = ea();
          k(E, y);
        },
        null,
        !0
      ), k(x, C);
    }
  ), g(h), g(f), k(t, f), ee();
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
function na(t) {
  const e = t - 1;
  return e * e * e + 1;
}
function ia(t, { delay: e = 0, duration: r = 400, easing: n = na, axis: i = "y" } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, o = i === "y" ? "height" : "width", u = parseFloat(a[o]), v = i === "y" ? ["top", "bottom"] : ["left", "right"], s = v.map(
    (x) => (
      /** @type {'Left' | 'Right' | 'Top' | 'Bottom'} */
      `${x[0].toUpperCase()}${x.slice(1)}`
    )
  ), f = parseFloat(a[`padding${s[0]}`]), c = parseFloat(a[`padding${s[1]}`]), p = parseFloat(a[`margin${s[0]}`]), d = parseFloat(a[`margin${s[1]}`]), h = parseFloat(
    a[`border${s[0]}Width`]
  ), m = parseFloat(
    a[`border${s[1]}Width`]
  );
  return {
    delay: e,
    duration: r,
    easing: n,
    css: (x) => `overflow: hidden;opacity: ${Math.min(x * 20, 1) * l};${o}: ${x * u}px;padding-${v[0]}: ${x * f}px;padding-${v[1]}: ${x * c}px;margin-${v[0]}: ${x * p}px;margin-${v[1]}: ${x * d}px;border-${v[0]}-width: ${x * h}px;border-${v[1]}-width: ${x * m}px;`
  };
}
function aa(t) {
  return t;
}
var la = (t, e, r) => e(_(r).title), sa = /* @__PURE__ */ $('<img alt="option" width="18px">'), oa = /* @__PURE__ */ $('<svg width="18px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" class="svg-inline--fa fa-chart-pie fa-w-17 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512"><path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path></svg>'), ua = /* @__PURE__ */ $('<span><svg class="icon icon-sm" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>'), va = (t, e, r) => e(_(r).title), ca = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"></span> <span class="menu_item_text"> </span></span></a>'), da = /* @__PURE__ */ $('<div class="menu_item_frame svelte-v1mgvt"></div>'), fa = /* @__PURE__ */ $('<a><span><span class="menu_item_icon svelte-v1mgvt"><!></span> <span class="menu_item_text"> </span> <!></span></a> <!>', 1), ha = /* @__PURE__ */ $('<div class="outer_frame svelte-v1mgvt"><div class="left_menu svelte-v1mgvt"><div class="menu_frame svelte-v1mgvt"></div></div> <div class="right_panel svelte-v1mgvt"><!> <div class="right_panel_content svelte-v1mgvt"><!></div></div></div>');
const pa = {
  hash: "svelte-v1mgvt",
  code: `a.svelte-v1mgvt:link {text-decoration:none;}a.svelte-v1mgvt:visited {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:hover {text-decoration:none;color:#eaedf2;}a.svelte-v1mgvt:active {text-decoration:none;}.outer_frame.svelte-v1mgvt {position:fixed;left:0px;top:0px;display:flex;height:100vh;width:100vw;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}.left_menu.svelte-v1mgvt {display:flex;flex-flow:row nowrap;width:260px !important;min-width:260px;height:100%;background-color:#262b40 !important;color:#eaedf2;}.menu_frame.svelte-v1mgvt {margin:20px 30px 20px 30px;width:100%;}.menu_item.svelte-v1mgvt {display:block;width:100%;text-align:left;padding:10px 0px;color:#eaedf2;border-radius:.5rem;margin-bottom:8px;border:.0625rem solid transparent;}.menu_item.svelte-v1mgvt:hover {background-color:#2e3650;}.menu_item_active.svelte-v1mgvt {background-color:#2e3650;border:.0625rem solid #4c5680;}.menu_item_icon.svelte-v1mgvt {display:inline-block;margin-left:12px;margin-right:.5rem;color:#fff;position:relative;top:3px;width:18px;}.menu_item_expand.svelte-v1mgvt {float:right;width:22px;}.expanded.svelte-v1mgvt {position:relative;
    /* left: -4px; */
    /* top: -2px; */transform:rotate(90deg) translateX(-2px) translateY(4px);transition:all 0.2s ease;}.menu_item_frame.svelte-v1mgvt {width:100%;}.right_panel.svelte-v1mgvt {color:#4a5073;background-color:#f5f8fb;flex:auto;height:100%;overflow-y:auto;}.right_panel_content.svelte-v1mgvt {padding:0px 20px;}`
};
function _a(t, e) {
  Q(e, !0), G(t, pa), S(e, "title", 3, "Mapp"), S(e, "icon", 3, "");
  let r = S(e, "searchicon", 3, ""), n = S(e, "notificationicon", 3, ""), i = S(e, "supportuser", 3, !0), a = S(e, "username", 3, ""), l = S(e, "userpic", 3, ""), o = S(e, "activeitem", 3, ""), u = S(e, "menuconfig", 7, void 0);
  typeof u() == "string" && u(JSON.parse(u()));
  let v = P({});
  if (o()) {
    v[o()] = !0;
    for (let C of u().items)
      if (C.subitems) {
        for (let b of C.subitems)
          if (b.title == o()) {
            v[C.title] = !0;
            break;
          }
      }
  }
  let s = (C) => {
    let b = u().items.find((E) => E.title === C);
    v[C] ? b && (!b.url || b.url === "#") && (v[C] = !v[C]) : v[C] = !0;
  };
  var f = ha(), c = w(f), p = w(c);
  W(p, 21, () => u().items, K, (C, b) => {
    var E = fa(), y = F(E);
    y.__click = [la, s, b];
    var q = w(y), O = w(q), A = w(O);
    z(
      A,
      () => _(b).icon,
      (re) => {
        var Z = sa();
        N(() => T(Z, "src", _(b).icon)), k(re, Z);
      },
      (re) => {
        var Z = oa();
        k(re, Z);
      }
    ), g(O);
    var H = I(O, 2), V = w(H, !0);
    g(H);
    var D = I(H, 2);
    z(D, () => _(b).subitems, (re) => {
      var Z = ua();
      N(() => Ke(Z, `${(v[_(b).title] ? "menu_item_expand expanded" : "menu_item_expand") ?? ""} svelte-v1mgvt`)), k(re, Z);
    }), g(q), g(y);
    var U = I(y, 2);
    z(U, () => v[_(b).title] && _(b).subitems, (re) => {
      var Z = da();
      W(Z, 21, () => _(b).subitems, K, (Ce, Oe) => {
        var xe = ca();
        xe.__click = [va, s, Oe];
        var nr = w(xe), ir = I(w(nr), 2), wn = w(ir, !0);
        g(ir), g(nr), g(xe), N(() => {
          T(xe, "href", _(Oe).url), Ke(xe, `${(_(Oe).title == o() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(wn, _(Oe).title);
        }), k(Ce, xe);
      }), g(Z), Ci(3, Z, () => ia, () => ({ duration: 300, easing: aa })), k(re, Z);
    }), N(() => {
      T(y, "href", _(b).url), Ke(y, `${(_(b).title == o() ? "menu_item menu_item_active" : "menu_item") ?? ""} svelte-v1mgvt`), M(V, _(b).title);
    }), k(C, E);
  }), g(p), g(c);
  var d = I(c, 2), h = w(d);
  dn(h, {
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
  var m = I(h, 2), x = w(m);
  er(x, e, "default", {}), g(m), g(d), g(f), k(t, f), ee();
}
te(["click"]);
customElements.define("ing-buffet", Y(
  _a,
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
var ga = /* @__PURE__ */ $('<div class="input_label svelte-18z4bwo"> </div>'), ma = /* @__PURE__ */ $('<span class="input_icon svelte-18z4bwo"><img width="16px" alt=""></span>'), ba = (t, e) => {
  e(t);
}, xa = /* @__PURE__ */ $("<option> </option>"), ya = /* @__PURE__ */ $('<div class="input_frame svelte-18z4bwo"><!> <div class="input_box svelte-18z4bwo"><!> <select class="input_field svelte-18z4bwo"></select></div></div>');
const wa = {
  hash: "svelte-18z4bwo",
  code: ".input_frame.svelte-18z4bwo {padding-right:24px;margin-bottom:14px;width:280px;}.input_label.svelte-18z4bwo {margin-bottom:6px;}.input_box.svelte-18z4bwo {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;}.input_icon.svelte-18z4bwo {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-18z4bwo {box-shadow:none;width:280px;border:0.0625rem solid #d1d7e0;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;height:40px;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-18z4bwo:focus {outline:none;}"
};
function rr(t, e) {
  Q(e, !0), G(t, wa);
  let r = S(e, "label", 3, ""), n = S(e, "icon", 3, ""), i = S(e, "placeholder", 3, ""), a = S(e, "items", 3, ""), l = S(e, "input", 15, ""), o = S(e, "selectStyle", 3, ""), u = a().split(",");
  const v = (h) => {
    if (h && h.target && e.$$host) {
      let m = "";
      h.target.value && (m = h.target.value), e.$$host.innerText = m, document.dispatchEvent(new CustomEvent("SelectChangedEvent", {
        detail: { id: e.$$host.id, input: m }
      })), e.$$host.dispatchEvent(new CustomEvent("inputchanged", { detail: { input: m } }));
    }
  };
  var s = ya(), f = w(s);
  z(f, r, (h) => {
    var m = ga(), x = w(m, !0);
    g(m), N(() => M(x, r())), k(h, m);
  });
  var c = I(f, 2), p = w(c);
  z(p, n, (h) => {
    var m = ma(), x = w(m);
    g(m), N(() => T(x, "src", n())), k(h, m);
  });
  var d = I(p, 2);
  d.__input = [ba, v], W(d, 21, () => u, K, (h, m) => {
    var x = xa(), C = {}, b = w(x, !0);
    g(x), N(() => {
      C !== (C = _(m)) && (x.value = (x.__value = _(m)) == null ? "" : _(m)), M(b, _(m));
    }), k(h, x);
  }), g(d), g(c), g(s), N(() => {
    T(s, "style", o()), T(d, "placeholder", i());
  }), un(d, l), k(t, s), ee();
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
var ka = /* @__PURE__ */ $('<div style="width: 100%;"><h3> </h3></div>'), Ea = /* @__PURE__ */ $('<div style="display: flex; flex-flow: row wrap;" class="card_frame svelte-nemk61"><!> <div style="width: 100%; margin: 20px 0px 10px 0px"><ing-button-gray>Submit</ing-button-gray></div></div>', 2);
const Sa = {
  hash: "svelte-nemk61",
  code: ".card_frame.svelte-nemk61 {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:12px 32px;}"
};
function Ca(t, e) {
  Q(e, !0), G(t, Sa);
  let r = S(e, "schema", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  function n() {
    console.log(JSON.stringify(r()));
    let u = {};
    for (const [v, s] of Object.entries(r().properties))
      u[v] = s.value;
    document.dispatchEvent(new CustomEvent("FormSubmitEvent", { detail: { schema: r(), object: u } }));
  }
  var i = Ea(), a = w(i);
  z(a, r, (u) => {
    var v = ne(), s = F(v);
    W(s, 17, () => Object.entries(r().properties), K, (f, c) => {
      let p = () => _(c)[0], d = () => _(c)[1];
      var h = ne(), m = F(h);
      z(
        m,
        () => d().format == "header",
        (x) => {
          var C = ka(), b = w(C), E = w(b, !0);
          g(b), g(C), N(() => M(E, d().value)), k(x, C);
        },
        (x) => {
          var C = ne(), b = F(C);
          z(
            b,
            () => d().format == "select",
            (E) => {
              var y = /* @__PURE__ */ Ze(() => "width: " + d().length + ";");
              rr(E, {
                get input() {
                  return d().value;
                },
                set input(q) {
                  d().value = q;
                },
                get selectStyle() {
                  return _(y);
                },
                get label() {
                  return d().description;
                },
                get items() {
                  return d().value;
                }
              });
            },
            (E) => {
              var y = ne(), q = F(y);
              z(
                q,
                () => d().type == "string",
                (O) => {
                  var A = /* @__PURE__ */ Ze(() => "width: " + d().length + ";");
                  qt(O, {
                    get inputId() {
                      return p();
                    },
                    get inputStyle() {
                      return _(A);
                    },
                    get label() {
                      return d().description;
                    },
                    get type() {
                      return d().format;
                    },
                    get placeholder() {
                      return d().placeholder;
                    },
                    get input() {
                      return d().value;
                    },
                    set input(H) {
                      d().value = H;
                    }
                  });
                },
                null,
                !0
              ), k(E, y);
            },
            !0
          ), k(x, C);
        }
      ), k(f, h);
    }), k(u, v);
  });
  var l = I(a, 2), o = w(l);
  At(o, "size", "small"), At(o, "id", "submit-button"), At(o, "type", "secondary"), o.__click = n, g(l), g(i), k(t, i), ee();
}
te(["click"]);
customElements.define("ing-form", Y(Ca, { schema: {} }, [], [], !0));
function $a(t, e, r, n, i, a) {
  if (_(e)) {
    let l = [];
    for (let o of r()) {
      let u = !1;
      for (let v of n())
        if ((i().length === 0 || i().includes(v)) && o[v].toString().toLowerCase().includes(_(e).toLowerCase())) {
          u = !0;
          break;
        }
      u && l.push(o);
    }
    J(a, P(l));
  } else
    J(a, P(r()));
}
var qa = /* @__PURE__ */ $('<th class="svelte-15ql2st"> </th>'), Ia = /* @__PURE__ */ $('<td class="svelte-15ql2st"><a class="table_row svelte-15ql2st"> </a></td>'), Na = /* @__PURE__ */ $('<tr class="svelte-15ql2st"></tr>'), Ta = /* @__PURE__ */ $('<div class="card_frame svelte-15ql2st"><div class="filter svelte-15ql2st"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-15ql2st">Filter <input class="filter_input svelte-15ql2st" placeholder="Value to filter for"></span></div> <table class="svelte-15ql2st"><thead class="svelte-15ql2st"><tr class="svelte-15ql2st"></tr></thead><tbody class="svelte-15ql2st"></tbody></table></div>');
const Aa = {
  hash: "svelte-15ql2st",
  code: `.card_frame.svelte-15ql2st {border-color:#eaedf2 !important;box-shadow:0 2px 18px rgba(0, 0, 0, 0.02) !important;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:0.0625rem solid rgba(46, 54, 80, 0.125);border-radius:0.5rem;padding:22px 32px;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;}table.svelte-15ql2st {width:100%;margin-bottom:1rem;color:#4a5073;vertical-align:top;border-color:#eaedf2;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;border-collapse:collapse;}table.svelte-15ql2st thead:where(.svelte-15ql2st) tr:where(.svelte-15ql2st) th:where(.svelte-15ql2st) {vertical-align:center;text-align:left;border-bottom:1px solid #eaedf2 !important;font-size:12px;font-weight:bold;padding-left:14px;padding-bottom:10px;}.table_row.svelte-15ql2st {padding-left:14px;padding-top:14px;padding-bottom:14px;border-bottom:1px solid #eaedf2 !important;}table.svelte-15ql2st tbody:where(.svelte-15ql2st) tr:where(.svelte-15ql2st):hover {background-color:#eff0f2;cursor:pointer;border-radius:0.5rem;}a.svelte-15ql2st:link {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:visited {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:hover {text-decoration:none;color:#4a5073;}a.svelte-15ql2st:active {text-decoration:none;}td.svelte-15ql2st a:where(.svelte-15ql2st) {display:block;}.filter.svelte-15ql2st {margin-top:20px;margin-bottom:8px;margin-left:8px;}.filter_input_box.svelte-15ql2st {position:relative;top:-3px;font-weight:bold;font-size:14px;}.filter_input.svelte-15ql2st {width:50%;margin-left:8px;font-family:Google Sans,
      Roboto,
      Helvetica,
      Arial,
      sans-serif;padding:var(--padding);
    /* border: 2px solid gray; */border:0px;outline:none;border-radius:0px;
    /* background-color: #f1f3f4; */background-color:rgb(255, 255, 255);}`
};
function za(t, e) {
  Q(e, !0), G(t, Aa);
  let r = S(e, "headers", 23, () => []), n = S(e, "headerssearchable", 23, () => []), i = S(e, "rows", 23, () => []), a = S(e, "linkprefix", 3, ""), l = S(e, "linkcolumnname", 3, ""), o = S(e, "update", 3, void 0);
  typeof r() == "string" && r(JSON.parse(r())), typeof n() == "string" && n(JSON.parse(n())), typeof i() == "string" && i(JSON.parse(i()));
  let u = ke(P(i())), v = ke("");
  const s = (b) => {
    e.$$host.dispatchEvent(new CustomEvent("update", { detail: { rowIndex: b } })), o() && o()({ detail: { rowIndex: b } });
  };
  var f = Ta(), c = w(f), p = I(w(c), 2), d = I(w(p));
  Ct(d), d.__keyup = [
    $a,
    v,
    i,
    r,
    n,
    u
  ], g(p), g(c);
  var h = I(c, 2), m = w(h), x = w(m);
  W(x, 21, r, K, (b, E) => {
    var y = qa(), q = w(y, !0);
    g(y), N(() => M(q, _(E))), k(b, y);
  }), g(x), g(m);
  var C = I(m);
  W(C, 21, () => _(u), K, (b, E, y) => {
    var q = Na();
    q.__click = () => {
      s(y);
    }, W(q, 21, () => Object.entries(_(E)), K, (A, H) => {
      var V = Ia(), D = w(V), U = w(D, !0);
      g(D), g(V), N(() => {
        T(D, "href", a() + _(E)[l()]), M(U, _(H)[1]);
      }), k(A, V);
    }), g(q), k(b, q);
  }), g(C), g(h), g(f), $t(d, () => _(v), (b) => J(v, b)), k(t, f), ee();
}
te(["keyup", "click"]);
customElements.define("ing-table", Y(
  za,
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
var Oa = /* @__PURE__ */ $('<img class="title_logo" alt="logo" width="36px" height="34px" style="padding: 6px; margin-top: 4px;">'), Ra = /* @__PURE__ */ $('<span class="title_text svelte-hi9ips"> </span>'), Ha = /* @__PURE__ */ $('<a href="https://google.com" target="_blank" class="title svelte-hi9ips"><!> <!></a>'), Ma = (t, e, r) => e(t, _(r).title), La = /* @__PURE__ */ $('<img class="menu_icon svelte-hi9ips">'), ja = (t, e, r) => e(t, _(r)), Da = /* @__PURE__ */ $('<span class="menu_text svelte-hi9ips"> </span>'), Ua = /* @__PURE__ */ $('<button class="menu_button svelte-hi9ips"><!></button> <!>', 1), Ba = /* @__PURE__ */ $('<div class="header svelte-hi9ips"><!> <div class="right_menus svelte-hi9ips"></div></div>');
const Fa = {
  hash: "svelte-hi9ips",
  code: ".header.svelte-hi9ips {display:flex;flex-flow:row wrap;justify-content:space-between;align-items:flex-start;background-color:rgba(255, 255, 255, 1);height:57px;font-weight:560;color:#333;font-size:20px;padding:0px;margin:0px;position:sticky;top:0;z-index:22;border-bottom:solid 1px rgba(222, 222, 222, 1);}.title.svelte-hi9ips {height:100%;display:flex;margin-left:12px;color:#111;font-family:'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;}.title.svelte-hi9ips:link {text-decoration:none;}.title.svelte-hi9ips:visited {text-decoration:none;color:#222;}.title.svelte-hi9ips:hover {text-decoration:none;color:darkgray}.title.svelte-hi9ips:active {text-decoration:none;}.title_text.svelte-hi9ips {display:flex;align-items:center;}.right_menus.svelte-hi9ips {display:flex;height:100%;flex:auto;flex-flow:row-reverse;}.menu_button.svelte-hi9ips {height:100%;display:flex;align-items:center;margin-right:18px;cursor:pointer;border:0px;background-color:transparent;}.menu_icon.svelte-hi9ips {height:30px;width:30px;object-fit:cover;}.menu_icon.svelte-hi9ips:hover {cursor:pointer;}.menu_text.svelte-hi9ips {font-weight:700;}.round.svelte-hi9ips {height:40px;width:40px;border-radius:50%;}"
};
function It(t, e) {
  Q(e, !0), G(t, Fa);
  let r = S(e, "title", 3, ""), n = S(e, "titleImageUrl", 3, ""), i = S(e, "headerMenus", 23, () => []);
  typeof i() == "string" && i(JSON.parse(i()));
  let a = P({}), l = P({});
  function o(d, h) {
    d && d.stopPropagation();
    for (const m of Object.keys(a))
      m != h && (a[m] = !1);
    a[h] ? a[h] = !1 : a[h] = !0;
  }
  function u(d, h) {
    d.stopPropagation(), h.url ? window.location.href = h.url : e.$$host && document.dispatchEvent(new CustomEvent(h.title, { detail: {} }));
  }
  function v(d) {
    let h = {}, m;
    if (l[d] && (m = l[d]), m) {
      var x = m.getBoundingClientRect();
      h.top = (x.top + x.height + 12).toString() + "px", h.left = (x.left - 150).toString() + "px", console.log(h);
    } else
      console.log("Could not find element with id: " + d);
    return h;
  }
  function s(d) {
    return d.toLowerCase().replaceAll(" ", "_");
  }
  document.onclick = function() {
    for (const h of Object.keys(a))
      a[h] = !1;
  };
  var f = Ba(), c = w(f);
  z(c, () => r() || n(), (d) => {
    var h = Ha(), m = w(h);
    z(m, n, (C) => {
      var b = Oa();
      N(() => T(b, "src", n())), k(C, b);
    });
    var x = I(m, 2);
    z(x, r, (C) => {
      var b = Ra(), E = w(b, !0);
      g(b), N(() => M(E, r())), k(C, b);
    }), g(h), k(d, h);
  });
  var p = I(c, 2);
  W(p, 21, i, K, (d, h) => {
    var m = Ua(), x = F(m);
    N(() => T(x, "id", s(_(h).title + "_button"))), x.__click = [Ma, o, h];
    var C = w(x);
    z(
      C,
      () => _(h).imageUrl,
      (E) => {
        var y = La();
        vn(y, (q, O) => l[s(O.title + "_button")] = q, (q) => l == null ? void 0 : l[s(q.title + "_button")], () => [_(h)]), N(() => {
          T(y, "alt", _(h).title), T(y, "src", _(h).imageUrl), Pe(y, "round", _(h).imageShape === "round");
        }), k(E, y);
      },
      (E) => {
        var y = Da();
        y.__click = [ja, u, h];
        var q = w(y, !0);
        g(y), N(() => M(q, _(h).title)), k(E, y);
      }
    ), g(x);
    var b = I(x, 2);
    z(b, () => a[_(h).title], (E) => {
      var y = /* @__PURE__ */ Ze(() => v(s(_(h).title + "_button")));
      tr(E, {
        get menuItems() {
          return _(h).items;
        },
        get position() {
          return _(y);
        }
      });
    }), k(d, m);
  }), g(p), g(f), k(t, f), ee();
}
te(["click"]);
customElements.define("mv-elegant-header", Y(
  It,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {}
  },
  [],
  [],
  !0
));
function Pa(t, e, r, n) {
  e.searchloadresults && J(r, P(e.searchloadresults(n())));
}
function Va(t, e, r, n) {
  t.key === "Escape" ? J(e, P([])) : t.key === "Enter" && (r.searchsubmit && r.searchsubmit(n()), document.dispatchEvent(new CustomEvent("SearchSubmit", { detail: { text: n() } })), n(""));
}
var Ja = /* @__PURE__ */ $('<div class="result svelte-ihhy65"> </div>'), Ga = /* @__PURE__ */ $('<div class="results svelte-ihhy65"><div class="results_frame svelte-ihhy65"><div class="results_list svelte-ihhy65"></div></div></div>'), Ya = /* @__PURE__ */ $('<div class="input_frame svelte-ihhy65"><div class="search_frame svelte-ihhy65"><div class="search_icon svelte-ihhy65"><svg width="18px" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></div> <input class="search_input svelte-ihhy65"></div></div> <!>', 1);
const Ka = {
  hash: "svelte-ihhy65",
  code: `.input_frame.svelte-ihhy65 {min-height:44px;background:#fff;border:1px solid #dfe1e5;box-shadow:0px 2px 8px 0px rgba(60, 64, 67, 0.25);border-radius:24px;margin:0 auto;max-width:584px;}.search_frame.svelte-ihhy65 {display:flex;flex-flow:row wrap;width:100%;flex:1;padding:0 8px 0 0;}.search_icon.svelte-ihhy65 {display:flex;align-items:center;padding-right:13px;padding-left:14px;height:46px;color:#9aa0a6;z-index:11;}.search_input.svelte-ihhy65 {display:flex;flex-wrap:wrap;flex:1;border:none;border-radius:24px;font-size:18px;width:100%;z-index:11;background-color:transparent;}.search_input.svelte-ihhy65:focus,
  .search_input.svelte-ihhy65:focus {outline:none;}.results.svelte-ihhy65 {position:absolute;margin:0px 0px 0px 0px;width:398px;border:1px solid #dfe1e5;z-index:10;background:#fff;border-radius:0px 0px 24px 24px;}.results_list.svelte-ihhy65 {margin-top:10px;background:#fff;width:100%;z-index:10;}.results_frame.svelte-ihhy65 {position:relative;top:-22px;background:#fff;border-left:1px solid #dfe1e5;border-right:1px solid #dfe1e5;width:398px;left:-1px;z-index:10;height:300px;overflow-x:hidden;}.result.svelte-ihhy65 {width:100%;padding:4px 0px 4px 16px;}.result.svelte-ihhy65:hover {cursor:pointer;background-color:#dfe1e5;}`
};
function fn(t, e) {
  Q(e, !0), G(t, Ka);
  let r = S(e, "searchtext", 15), n = ke(P([]));
  document.addEventListener("SearchResults", (v) => {
    v.detail.results && J(n, P(v.detail.results));
  });
  var i = Ya(), a = F(i), l = w(a), o = I(w(l), 2);
  Ct(o), o.__input = [Pa, e, n, r], o.__keyup = [Va, n, e, r], g(l), g(a);
  var u = I(a, 2);
  z(u, () => _(n).length > 0, (v) => {
    var s = Ga(), f = w(s), c = w(f);
    W(c, 21, () => _(n), K, (p, d) => {
      var h = Ja(), m = w(h, !0);
      g(h), N(() => M(m, _(d))), k(p, h);
    }), g(c), g(f), g(s), k(v, s);
  }), $t(o, r), k(t, i), ee();
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
var Wa = /* @__PURE__ */ $('<img class="hero_image svelte-e621nb" alt="logo">'), Za = /* @__PURE__ */ $('<div class="hero svelte-e621nb"><div class="hero_logo svelte-e621nb"><!> <div class="hero_logo_text svelte-e621nb"> </div></div> <div class="hero_search svelte-e621nb"><!></div></div>');
const Xa = {
  hash: "svelte-e621nb",
  code: '.hero.svelte-e621nb {width:100%;display:flex;justify-content:center;flex-flow:row wrap;}.hero_logo.svelte-e621nb {display:flex;margin-top:150px;width:100%;justify-content:center;align-items:center;font-family:"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:560;color:#333;font-size:20px;}.hero_image.svelte-e621nb {width:50px;height:50px;}.hero_logo_text.svelte-e621nb {padding-left:12px;padding-right:12px;}.hero_search.svelte-e621nb {width:400px;}'
};
function hn(t, e) {
  G(t, Xa);
  let r = S(e, "height", 3, "80px"), n = S(e, "title", 3, ""), i = S(e, "titleImageUrl", 3, ""), a = S(e, "searchtext", 15);
  var l = Za(), o = w(l), u = w(o);
  z(u, i, (p) => {
    var d = Wa();
    N(() => {
      T(d, "height", `${r()}`), T(d, "src", i());
    }), k(p, d);
  });
  var v = I(u, 2), s = w(v, !0);
  g(v), g(o);
  var f = I(o, 2), c = w(f);
  fn(c, {
    get searchtext() {
      return a();
    },
    set searchtext(p) {
      a(p);
    },
    get searchloadresults() {
      return e.searchloadresults;
    },
    get searchsubmit() {
      return e.searchsubmit;
    }
  }), g(f), g(l), N(() => {
    T(o, "style", `height: ${r()};`), M(s, n());
  }), k(t, l);
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
function Qa(t, e, r) {
  t.srcElement && e(t.srcElement.value), r.onInput && r.onInput(e());
}
var el = /* @__PURE__ */ $('<option class="svelte-1im86kb"> </option>'), tl = /* @__PURE__ */ $('<div class="select svelte-1im86kb"><select name="source" id="source" class="svelte-1im86kb"></select></div>');
const rl = {
  hash: "svelte-1im86kb",
  code: `.select.svelte-1im86kb,
.select.svelte-1im86kb :where(.svelte-1im86kb) {margin:0;padding:0;position:relative;box-sizing:border-box;}.select.svelte-1im86kb {position:relative;background-color:#f0f0f0;border-radius:12px;width:200px;height:40px;}.select.svelte-1im86kb select:where(.svelte-1im86kb) {font-size:1rem;font-weight:normal;width:100%;padding:10px 24px 8px 10px;border:none;background-color:transparent;appearance:none;}.select.svelte-1im86kb select:where(.svelte-1im86kb):active, .select.svelte-1im86kb select:where(.svelte-1im86kb):focus {outline:none;box-shadow:none;}.select.svelte-1im86kb:after {content:"";position:absolute;top:50%;right:8px;width:0;height:0;margin-top:-2px;border-top:5px solid #aaa;border-right:5px solid transparent;border-left:5px solid transparent;}`
};
function pn(t, e) {
  Q(e, !0), G(t, rl);
  let r = S(e, "input", 15), n = S(e, "options", 19, () => []);
  var i = tl(), a = w(i);
  a.__input = [Qa, r, e], W(a, 21, n, K, (l, o) => {
    var u = el(), v = {}, s = w(u, !0);
    g(u), N(() => {
      v !== (v = _(o)) && (u.value = (u.__value = _(o)) == null ? "" : _(o)), M(s, _(o));
    }), k(l, u);
  }), g(a), g(i), un(a, r), k(t, i), ee();
}
te(["input"]);
customElements.define("mv-elegant-select", Y(pn, { input: {}, onInput: {}, options: {} }, [], [], !0));
function nl(t, e, r) {
  e() === "CARD" ? e("TABLE") : e("CARD"), r.viewselect && r.viewselect(e());
}
var il = (t, e, r) => e(_(r).name), al = /* @__PURE__ */ $('<div class="icon svelte-lvweti">✓</div>'), ll = /* @__PURE__ */ $('<div class="icon svelte-lvweti"> </div>'), sl = /* @__PURE__ */ $('<div class="filterbar_option svelte-lvweti"><!> <div class="name svelte-lvweti"> </div></div>'), ol = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z" stroke="#d8d8d8" stroke-width="2"></path></g></svg>'), ul = /* @__PURE__ */ $('<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g id="grid"><g><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="14.5" y="14.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="2.5"></rect><rect fill="none" height="7" stroke="#d8d8d8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="7" x="2.5" y="14.5"></rect></g></g></g></g></svg>'), vl = /* @__PURE__ */ $('<div class="filterbar_frame svelte-lvweti"><div class="options svelte-lvweti"></div> <div class="filter svelte-lvweti"><button class="view_toggle svelte-lvweti"><!></button> <!></div></div>');
const cl = {
  hash: "svelte-lvweti",
  code: `.filterbar_frame.svelte-lvweti {display:flex;max-width:2000px;
    /* margin: 20px 10px 0px 16px; */margin:20px auto 0px auto;}.options.svelte-lvweti {display:flex;justify-content:left;width:100%;margin-left:16px;}.filter.svelte-lvweti {display:flex;margin-right:16px;}.filterbar_option.svelte-lvweti {display:flex;min-width:20px;height:40px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);margin-right:6px;margin-bottom:4px;height:20px;padding:4px 8px 6px;border-radius:44px;border-width:1px;border-style:solid;border-color:lightgray;user-select:none;}.filterbar_option_selected.svelte-lvweti {background-color:rgb(209, 227, 255);}.filterbar_option.svelte-lvweti:hover {cursor:pointer;background-color:rgb(209, 227, 255);}.icon.svelte-lvweti {color:rgb(51, 103, 214);font-size:16px;font-weight:700;display:inline-block;width:18px;margin-right:6px;}.name.svelte-lvweti {float:right;margin-top:2px;font-size:14px;font-weight:700;color:rgb(51, 103, 214);}.view_toggle.svelte-lvweti {margin-right:12px;width:44px;border:0px;background-color:transparent;}.view_toggle.svelte-lvweti:hover {cursor:pointer;}`
};
function _n(t, e) {
  Q(e, !0), G(t, cl);
  let r = S(e, "view", 15, "card"), n = P({});
  function i(c) {
    n[c] ? n[c] = !1 : n[c] = !0, e.typeselect && e.typeselect(n);
  }
  function a(c) {
    e.sortselect && e.sortselect(c);
  }
  var l = vl(), o = w(l);
  W(o, 21, () => e.types, K, (c, p) => {
    var d = sl();
    d.__click = [il, i, p];
    var h = w(d);
    z(
      h,
      () => n[_(p).name] === !0,
      (C) => {
        var b = al();
        k(C, b);
      },
      (C) => {
        var b = ll(), E = w(b, !0);
        g(b), N(() => M(E, _(p).icon)), k(C, b);
      }
    );
    var m = I(h, 2), x = w(m, !0);
    g(m), g(d), N(() => {
      Pe(d, "filterbar_option_selected", n[_(p).name]), M(x, _(p).name);
    }), k(c, d);
  }), g(o);
  var u = I(o, 2), v = w(u);
  v.__click = [nl, r, e];
  var s = w(v);
  z(
    s,
    () => r() === "CARD",
    (c) => {
      var p = ol();
      k(c, p);
    },
    (c) => {
      var p = ul();
      k(c, p);
    }
  ), g(v);
  var f = I(v, 2);
  pn(f, {
    input: "Latest",
    get options() {
      return e.sorts;
    },
    onInput: a
  }), g(u), g(l), k(t, l), ee();
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
var dl = /* @__PURE__ */ $('<img alt="category icon" class="svelte-1yyvu4g">'), fl = /* @__PURE__ */ $('<span class="card_symbol svelte-1yyvu4g"> </span>'), hl = /* @__PURE__ */ $('<img class="header_image svelte-1yyvu4g" alt="header preview">'), pl = /* @__PURE__ */ $('<img alt="category icon" class="svelte-1yyvu4g">'), _l = /* @__PURE__ */ $('<span class="card_symbol svelte-1yyvu4g"> </span>'), gl = /* @__PURE__ */ $('<div class="card_frame svelte-1yyvu4g"><div class="top_left_label svelte-1yyvu4g"><span class="svelte-1yyvu4g"> </span> <div class="top_right_icons svelte-1yyvu4g"></div></div> <!> <a class="title svelte-1yyvu4g"> </a> <a class="author svelte-1yyvu4g" target="_blank"><img alt="profile" class="svelte-1yyvu4g"> </a> <div class="footer svelte-1yyvu4g"><div class="description svelte-1yyvu4g"> </div> <div class="link svelte-1yyvu4g"><a target="_blank" class="svelte-1yyvu4g">Open asset ↗</a> <div class="type_box svelte-1yyvu4g"></div></div></div></div>');
const ml = {
  hash: "svelte-1yyvu4g",
  code: ".card_frame.svelte-1yyvu4g {display:flex;flex-wrap:wrap;width:288px;height:428px;border:1px solid var(--gm3-sys-color-surface-variant, #e1e3e1);border-radius:12px;margin:16px 16px 32px 16px;}.top_left_label.svelte-1yyvu4g {display:flex;padding:12px 18px;color:#444746;width:100%;height:28px;}.top_left_label.svelte-1yyvu4g span:where(.svelte-1yyvu4g) {white-space:nowrap;}.top_right_icons.svelte-1yyvu4g {display:flex;justify-content:right;width:100%;}.top_right_icons.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}.header_image.svelte-1yyvu4g {width:calc(100% - 18px);margin:0px 18px;object-fit:cover;height:144px;border-radius:7px;}.title.svelte-1yyvu4g {padding:12px 18px 4px;height:48px;color:#1f1f1f;font-weight:600;font-size:18px;overflow:hidden;text-overflow:ellipsis;line-height:1.5rem;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}.title.svelte-1yyvu4g:hover {color:#7c7c7c;}.author.svelte-1yyvu4g {display:flex;align-items:start;padding:0px 18px 4px;height:20px;color:#444746;font-size:.875rem;font-weight:400;line-height:1.25rem;overflow:hidden;text-overflow:ellipsis;}.author.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {border-radius:50%;object-fit:cover;width:18px;height:18px;margin-right:8px;}.author.svelte-1yyvu4g:hover {color:#757a79;}.card_symbol.svelte-1yyvu4g {padding-left:6px;}.card_symbol.svelte-1yyvu4g:hover {cursor:default;}.footer.svelte-1yyvu4g {display:flex;flex-direction:column;justify-content:space-between;min-height:134px;padding-top:9px;padding-bottom:3px;width:100%;}.description.svelte-1yyvu4g {padding:3px 18px;height:54px;width:calc(100% - 36px);overflow:hidden;color:#444746;font-size:.875rem;font-weight:400;letter-spacing:0;line-height:1.25rem;outline:none;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;}.link.svelte-1yyvu4g {display:flex;width:calc(100% - 36px);overflow:hidden;padding:0px 16px;padding-bottom:14px;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g) {color:#0b57d0;font-weight:600;font-size:.975rem;letter-spacing:0;line-height:1.25rem;white-space:nowrap;}.link.svelte-1yyvu4g a:where(.svelte-1yyvu4g):hover {color:#82aae9;}.type_box.svelte-1yyvu4g {display:flex;justify-content:right;flex-wrap:wrap;width:100%;}.type_box.svelte-1yyvu4g img:where(.svelte-1yyvu4g) {object-fit:cover;width:24px;height:24px;margin-left:4px;}"
};
function gn(t, e) {
  Q(e, !0), G(t, ml);
  let r = S(e, "item", 19, () => ({
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
  var n = gl(), i = w(n), a = w(i), l = w(a, !0);
  g(a);
  var o = I(a, 2);
  W(o, 21, () => r().categories, K, (E, y) => {
    var q = ne(), O = F(q);
    z(
      O,
      () => _(y).imageUrl,
      (A) => {
        var H = dl();
        N(() => {
          T(H, "src", _(y).imageUrl), T(H, "title", _(y).name);
        }), k(A, H);
      },
      (A) => {
        var H = ne(), V = F(H);
        z(
          V,
          () => _(y).symbol,
          (D) => {
            var U = fl(), re = w(U, !0);
            g(U), N(() => {
              T(U, "title", _(y).name), M(re, _(y).symbol);
            }), k(D, U);
          },
          null,
          !0
        ), k(A, H);
      }
    ), k(E, q);
  }), g(o), g(i);
  var u = I(i, 2);
  z(u, () => r().imageUrl, (E) => {
    var y = hl();
    N(() => T(y, "src", r().imageUrl)), k(E, y);
  });
  var v = I(u, 2), s = w(v, !0);
  g(v);
  var f = I(v, 2), c = w(f), p = I(c);
  g(f);
  var d = I(f, 2), h = w(d), m = w(h, !0);
  g(h);
  var x = I(h, 2), C = w(x), b = I(C, 2);
  W(b, 21, () => r().types, K, (E, y) => {
    var q = ne(), O = F(q);
    z(
      O,
      () => _(y).imageUrl,
      (A) => {
        var H = pl();
        N(() => {
          T(H, "src", _(y).imageUrl), T(H, "title", _(y).name);
        }), k(A, H);
      },
      (A) => {
        var H = ne(), V = F(H);
        z(
          V,
          () => _(y).symbol,
          (D) => {
            var U = _l(), re = w(U, !0);
            g(U), N(() => {
              T(U, "title", _(y).name), M(re, _(y).symbol);
            }), k(D, U);
          },
          null,
          !0
        ), k(A, H);
      }
    ), k(E, q);
  }), g(b), g(x), g(d), g(n), N(() => {
    M(l, r().dateTime), T(v, "href", r().link), M(s, r().title), T(f, "href", r().authorUrl), T(c, "src", r().authorImageUrl), M(p, ` ${r().authorName ?? ""}`), M(m, r().description), T(C, "href", r().link);
  }), k(t, n), ee();
}
customElements.define("mv-elegant-card", Y(gn, { item: {} }, [], [], !0));
var bl = /* @__PURE__ */ $('<div class="menu_frame svelte-1dvvvu9"></div>');
const xl = {
  hash: "svelte-1dvvvu9",
  code: `.menu_frame.svelte-1dvvvu9 {max-width:2000px;margin:0px auto;display:flex;
    /* justify-content: center; */flex-wrap:wrap;}`
};
function mn(t, e) {
  G(t, xl);
  let r = S(e, "items", 7);
  typeof r() == "string" && r(JSON.parse(r()));
  var n = bl();
  W(n, 21, r, K, (i, a) => {
    gn(i, {
      get item() {
        return _(a);
      }
    });
  }), g(n), k(t, n);
}
customElements.define("mv-elegant-cardpage", Y(mn, { items: {} }, [], [], !0));
var yl = (t, e, r) => e(_(r).name), wl = /* @__PURE__ */ $('<div class="filterbar_option svelte-1d4e3jq"><div class="letter svelte-1d4e3jq"> </div> <div class="name svelte-1d4e3jq"> </div></div>'), kl = /* @__PURE__ */ $('<div class="filterbar_frame svelte-1d4e3jq"></div>');
const El = {
  hash: "svelte-1d4e3jq",
  code: `.filterbar_frame.svelte-1d4e3jq {display:flex;justify-content:center;}.filterbar_option.svelte-1d4e3jq {display:flex;flex-flow:row wrap;width:60px;height:100px;margin:8px;user-select:none;
    /* background-color: red; */}.letter.svelte-1d4e3jq {display:flex;align-items:center;justify-content:center;width:100%;height:52px;margin:2px 2px 0px 2px;border-radius:80%;text-align:center;font-size:22px;font-weight:bold;color:#3367d6;border-width:1px;border-style:solid;border-color:transparent;}.letter_selected.svelte-1d4e3jq {background-color:rgb(228, 228, 228);}.letter.svelte-1d4e3jq:hover {cursor:pointer;border-color:lightgray;}.name.svelte-1d4e3jq {width:100%;position:relative;top:-8px;text-align:center;color:gray;font-size:14px;}`
};
function bn(t, e) {
  Q(e, !0), G(t, El);
  let r = P({});
  function n(a) {
    r[a] ? r[a] = !1 : r[a] = !0, e.categoryselect && e.categoryselect(r);
  }
  var i = kl();
  W(i, 21, () => e.categories, K, (a, l) => {
    var o = wl(), u = w(o);
    u.__click = [yl, n, l];
    var v = w(u, !0);
    g(u);
    var s = I(u, 2), f = w(s, !0);
    g(s), g(o), N(() => {
      Pe(u, "letter_selected", r[_(l).name]), M(v, _(l).letter), M(f, _(l).name);
    }), k(a, o);
  }), g(i), k(t, i), ee();
}
te(["click"]);
customElements.define("mv-elegant-filtercats", Y(bn, { categories: {}, categoryselect: {} }, [], [], !0));
function Sl(t, e, r, n, i) {
  if (_(e)) {
    let a = [];
    for (let l of r()) {
      let o = !1;
      for (let u of n())
        if (u.searchable && l[u.name] && l[u.name].toString().toLowerCase().includes(_(e).toLowerCase())) {
          o = !0;
          break;
        }
      o && a.push(l);
    }
    J(i, P(a));
  } else
    J(i, P(r()));
}
var Cl = /* @__PURE__ */ $('<th class="svelte-1nbcvq9"> </th>'), $l = /* @__PURE__ */ $('<a class="table_row svelte-1nbcvq9"> </a>'), ql = /* @__PURE__ */ $('<span class="table_row svelte-1nbcvq9"> </span>'), Il = /* @__PURE__ */ $('<td class="svelte-1nbcvq9"><!></td>'), Nl = /* @__PURE__ */ $("<td></td>"), Tl = /* @__PURE__ */ $('<tr class="svelte-1nbcvq9"></tr>'), Al = /* @__PURE__ */ $('<div class="frame svelte-1nbcvq9" style="container-type: inline-size;"><div class="filter svelte-1nbcvq9"><svg data-icon-name="filterIcon" viewBox="0 0 18 18" width="18" height="18" aria-hidden="true"><path fill-rule="evenodd" d="M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z"></path></svg> <span class="filter_input_box svelte-1nbcvq9">Filter <input class="filter_input svelte-1nbcvq9" placeholder="Value to filter for"></span></div> <table class="svelte-1nbcvq9"><thead class="svelte-1nbcvq9"><tr class="svelte-1nbcvq9"></tr></thead><tbody class="svelte-1nbcvq9"></tbody></table></div>');
const zl = {
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
  Q(e, !0), G(t, zl);
  let r = S(e, "tableHeaders", 23, () => []), n = S(e, "tableRows", 23, () => []), i = S(e, "linkprefix", 3, ""), a = S(e, "linkcolumnname", 3, ""), l = S(e, "tableRowClick", 3, void 0);
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
  let o = ke(P(n())), u = ke(""), v = ke(-1);
  const s = (b) => {
    J(v, P(b)), l() && l()({ detail: { rowIndex: b } }), document.dispatchEvent(new CustomEvent("TableRowClick", { detail: { rowIndex: b } }));
  };
  var f = Al(), c = w(f), p = I(w(c), 2), d = I(w(p));
  Ct(d), d.__keyup = [
    Sl,
    u,
    n,
    r,
    o
  ], g(p), g(c);
  var h = I(c, 2), m = w(h), x = w(m);
  W(x, 21, r, K, (b, E) => {
    var y = Cl(), q = w(y, !0);
    g(y), N(() => {
      Pe(y, "column_sm", _(E).hideNarrow), M(q, _(E).displayName);
    }), k(b, y);
  }), g(x), g(m);
  var C = I(m);
  W(C, 21, () => _(o), K, (b, E, y) => {
    var q = Tl();
    q.__click = () => {
      s(y);
    }, W(q, 21, r, K, (O, A) => {
      var H = ne(), V = F(H);
      z(
        V,
        () => _(E)[_(A).name],
        (D) => {
          var U = Il(), re = w(U);
          z(
            re,
            a,
            (Z) => {
              var ue = $l(), Ce = w(ue, !0);
              g(ue), N(() => {
                T(ue, "href", i() + _(E)[a()]), M(Ce, _(E)[_(A).name]);
              }), k(Z, ue);
            },
            (Z) => {
              var ue = ql(), Ce = w(ue, !0);
              g(ue), N(() => M(Ce, _(E)[_(A).name])), k(Z, ue);
            }
          ), g(U), N(() => Pe(U, "column_sm", _(A).hideNarrow)), k(D, U);
        },
        (D) => {
          var U = Nl();
          k(D, U);
        }
      ), k(O, H);
    }), g(q), N(() => Pe(q, "table_row_selected", y === _(v))), k(b, q);
  }), g(C), g(h), g(f), $t(d, () => _(u), (b) => J(u, b)), k(t, f), ee();
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
var Ol = /* @__PURE__ */ $("<!> <!> <!> <!> <!>", 1);
const Rl = { hash: "svelte-32ttx", code: "" };
function Hl(t, e) {
  G(t, Rl);
  let r = S(e, "title", 3, ""), n = S(e, "titleImageUrl", 3, ""), i = S(e, "headerMenus", 19, () => []), a = S(e, "searchtext", 7, ""), l = S(e, "categories", 19, () => []), o = S(e, "types", 19, () => []), u = S(e, "sorts", 19, () => []), v = ke("CARD"), s = P([
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
  var f = Ol(), c = F(f);
  It(c, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get headerMenus() {
      return i();
    }
  });
  var p = I(c, 2);
  hn(p, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
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
  });
  var d = I(p, 2);
  bn(d, {
    get categories() {
      return l();
    },
    get categoryselect() {
      return e.categoryselect;
    }
  });
  var h = I(d, 2);
  _n(h, {
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
      return _(v);
    },
    set view(x) {
      J(v, P(x));
    }
  });
  var m = I(h, 2);
  z(
    m,
    () => _(v) === "CARD",
    (x) => {
      mn(x, {
        get items() {
          return e.items;
        }
      });
    },
    (x) => {
      xn(x, {
        get tableHeaders() {
          return s;
        },
        get tableRows() {
          return e.items;
        },
        linkprefix: "",
        linkcolumnname: "link",
        tableRowClick: void 0
      });
    }
  ), k(t, f);
}
customElements.define("mv-elegant-buffet", Y(
  Hl,
  {
    title: {},
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
var Ml = /* @__PURE__ */ $('<!> <div class="view_frame svelte-u4tv0q"></div>', 1);
const Ll = {
  hash: "svelte-u4tv0q",
  code: ".view_frame.svelte-u4tv0q {margin:auto;padding:24px 12px;max-width:700px;}"
};
function jl(t, e) {
  G(t, Ll);
  let r = S(e, "title", 3, ""), n = S(e, "titleImageUrl", 3, ""), i = S(e, "headerMenus", 19, () => []), a = S(e, "items", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  function l(s) {
    let f = "";
    if (s.labelType && (f += `<${s.labelType}>${s.label}</${s.labelType}>`), s.type == "link_blank")
      f += `<a href="${s.link}" target="_blank">${s.value}</a>`;
    else if (s.type == "ul_link_blank") {
      let c = s.value.split(",");
      f += "<ul>";
      for (let p of c)
        f += `<li><a href="${p}" target="_blank">${p}</a></li>`;
      f += "</ul>";
    } else if (s.type == "ul") {
      let c = s.value.split(",");
      f += "<ul>";
      for (let p of c)
        f += `<li>${p}</li>`;
      f += "</ul>";
    } else
      f += `<${s.type}>${s.value}</${s.type}>`;
    return f;
  }
  var o = Ml(), u = F(o);
  It(u, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get headerMenus() {
      return i();
    }
  });
  var v = I(u, 2);
  W(v, 21, a, K, (s, f) => {
    var c = ne(), p = F(c);
    xi(p, () => l(_(f))), k(s, c);
  }), g(v), k(t, o);
}
customElements.define("mv-elegant-buffet-view", Y(
  jl,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var Dl = /* @__PURE__ */ $('<div class="input_label"> </div>'), Ul = /* @__PURE__ */ $('<span class="input_icon svelte-1xot148"><img width="16px" alt=""></span>'), Bl = (t, e) => {
  e(t);
}, Fl = /* @__PURE__ */ $('<div><input type="checkbox"> <label> </label></div>'), Pl = /* @__PURE__ */ $('<div class="input_frame svelte-1xot148"><!> <div class="input_box svelte-1xot148"><!> <fieldset class="input_field svelte-1xot148"></fieldset></div></div>');
const Vl = {
  hash: "svelte-1xot148",
  code: ".input_frame.svelte-1xot148 {padding-right:24px;margin-bottom:14px;width:280px;user-select:none;}.input_box.svelte-1xot148 {display:flex;color:#4a5073;background-color:#fff;border:0.0625rem solid #d1d7e0;border-radius:0.5rem;user-select:none;margin-top:6px;}.input_icon.svelte-1xot148 {width:32px;position:relative;top:12px;left:9px;}.input_field.svelte-1xot148 {box-shadow:none;width:280px;color:#66799e;background-color:#fff;background-clip:padding-box;appearance:none;border:transparent;font-size:16px;border-style:none;border-radius:0.5rem;margin-left:4px;margin-right:8px;}.input_field.svelte-1xot148:focus {outline:none;}"
};
function yn(t, e) {
  Q(e, !0), G(t, Vl);
  let r = S(e, "label", 3, ""), n = S(e, "icon", 3, "");
  S(e, "placeholder", 3, "");
  let i = S(e, "items", 3, "");
  S(e, "input", 11, "");
  let a = S(e, "selectStyle", 3, ""), l = i().split(",");
  const o = (p) => {
    if (p && p.target) {
      let d = "";
      d = p.target.checked, console.log(p.target.id), console.log(d), document.dispatchEvent(new CustomEvent("SelectChangedEvent", { detail: { id: "hh", input: d } }));
    }
  };
  var u = Pl(), v = w(u);
  z(v, r, (p) => {
    var d = Dl(), h = w(d, !0);
    g(d), N(() => M(h, r())), k(p, d);
  });
  var s = I(v, 2), f = w(s);
  z(f, n, (p) => {
    var d = Ul(), h = w(d);
    g(d), N(() => T(h, "src", n())), k(p, d);
  });
  var c = I(f, 2);
  W(c, 21, () => l, K, (p, d) => {
    var h = Fl(), m = w(h);
    m.__input = [Bl, o];
    var x = I(m, 2), C = w(x, !0);
    g(x), g(h), N(() => {
      T(m, "id", _(d)), T(m, "name", _(d)), T(x, "for", _(d)), M(C, _(d));
    }), k(p, h);
  }), g(c), g(s), g(u), N(() => T(u, "style", a())), k(t, u), ee();
}
te(["input"]);
customElements.define("ing-select", Y(
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
var Jl = /* @__PURE__ */ $('<div style="margin-bottom: 6px;"><label> </label></div> <input class="file_button svelte-1cozt5v" type="file" accept="image/png, image/jpeg">', 1), Gl = /* @__PURE__ */ $('<!> <form class="edit_frame svelte-1cozt5v"></form>', 1);
const Yl = {
  hash: "svelte-1cozt5v",
  code: ".edit_frame.svelte-1cozt5v {margin:auto;padding:24px 12px;max-width:700px;}.file_button.svelte-1cozt5v::file-selector-button {border:0px;background-color:transparent;box-shadow:rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;padding:6px;border-radius:6px;}"
};
function Kl(t, e) {
  G(t, Yl);
  let r = S(e, "title", 3, ""), n = S(e, "titleImageUrl", 3, ""), i = S(e, "headerMenus", 19, () => []), a = S(e, "items", 23, () => []);
  typeof a() == "string" && a(JSON.parse(a()));
  var l = Gl(), o = F(l);
  It(o, {
    get title() {
      return r();
    },
    get titleImageUrl() {
      return n();
    },
    get headerMenus() {
      return i();
    }
  });
  var u = I(o, 2);
  W(u, 21, a, K, (v, s) => {
    var f = ne(), c = F(f);
    z(
      c,
      () => _(s).type == "input",
      (p) => {
        qt(p, {
          get label() {
            return _(s).label;
          },
          get input() {
            return _(s).initialValue;
          }
        });
      },
      (p) => {
        var d = ne(), h = F(d);
        z(
          h,
          () => _(s).type == "select",
          (m) => {
            rr(m, {
              get label() {
                return _(s).label;
              },
              get items() {
                return _(s).options;
              },
              get input() {
                return _(s).initialValue;
              }
            });
          },
          (m) => {
            var x = ne(), C = F(x);
            z(
              C,
              () => _(s).type == "multiselect",
              (b) => {
                yn(b, {
                  get label() {
                    return _(s).label;
                  },
                  get items() {
                    return _(s).options;
                  }
                });
              },
              (b) => {
                var E = ne(), y = F(E);
                z(
                  y,
                  () => _(s).type == "file",
                  (q) => {
                    var O = Jl(), A = F(O), H = w(A), V = w(H, !0);
                    g(H), g(A);
                    var D = I(A, 2);
                    N(() => {
                      T(H, "for", _(s).id), M(V, _(s).label), T(D, "id", _(s).id), T(D, "name", _(s).label);
                    }), k(q, O);
                  },
                  null,
                  !0
                ), k(b, E);
              },
              !0
            ), k(m, x);
          },
          !0
        ), k(p, d);
      }
    ), k(v, f);
  }), g(u), k(t, l);
}
customElements.define("mv-elegant-buffet-edit", Y(
  Kl,
  {
    title: {},
    titleImageUrl: {},
    headerMenus: {},
    items: {}
  },
  [],
  [],
  !0
));
var Wl = /* @__PURE__ */ $('<div class="lds-ring svelte-nag87b"><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div><div class="svelte-nag87b"></div></div>');
const Zl = {
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
function Xl(t, e) {
  G(t, Zl);
  var r = Wl();
  k(t, r);
}
customElements.define("mv-elegant-spinner", Y(Xl, {}, [], [], !0));
export {
  Hl as ElegantBuffet,
  Kl as ElegantBuffetEdit,
  jl as ElegantBuffetView,
  It as ElegantHeader,
  hn as ElegantHeroSearch,
  fn as ElegantSearch,
  Xl as ElegantSpinner,
  xn as ElegantTable,
  _a as IngBuffet,
  Hi as IngButton,
  ji as IngButtonGray,
  Ca as IngForm,
  dn as IngHeaderLite,
  qt as IngInput,
  rr as IngSelect,
  za as IngTable
};
