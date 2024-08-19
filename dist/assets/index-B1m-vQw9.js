(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var nv =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function om(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var lm = { exports: {} },
  pu = {},
  sm = { exports: {} },
  J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ws = Symbol.for("react.element"),
  rv = Symbol.for("react.portal"),
  iv = Symbol.for("react.fragment"),
  ov = Symbol.for("react.strict_mode"),
  lv = Symbol.for("react.profiler"),
  sv = Symbol.for("react.provider"),
  av = Symbol.for("react.context"),
  uv = Symbol.for("react.forward_ref"),
  cv = Symbol.for("react.suspense"),
  fv = Symbol.for("react.memo"),
  dv = Symbol.for("react.lazy"),
  ch = Symbol.iterator;
function hv(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (ch && t[ch]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var am = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  um = Object.assign,
  cm = {};
function Zo(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = cm),
    (this.updater = n || am);
}
Zo.prototype.isReactComponent = {};
Zo.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
Zo.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function fm() {}
fm.prototype = Zo.prototype;
function Wf(t, e, n) {
  (this.props = t),
    (this.context = e),
    (this.refs = cm),
    (this.updater = n || am);
}
var Hf = (Wf.prototype = new fm());
Hf.constructor = Wf;
um(Hf, Zo.prototype);
Hf.isPureReactComponent = !0;
var fh = Array.isArray,
  dm = Object.prototype.hasOwnProperty,
  Yf = { current: null },
  hm = { key: !0, ref: !0, __self: !0, __source: !0 };
function pm(t, e, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (e != null)
    for (r in (e.ref !== void 0 && (l = e.ref),
    e.key !== void 0 && (o = "" + e.key),
    e))
      dm.call(e, r) && !hm.hasOwnProperty(r) && (i[r] = e[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (r in ((s = t.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: ws,
    type: t,
    key: o,
    ref: l,
    props: i,
    _owner: Yf.current,
  };
}
function pv(t, e) {
  return {
    $$typeof: ws,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Xf(t) {
  return typeof t == "object" && t !== null && t.$$typeof === ws;
}
function mv(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var dh = /\/+/g;
function Lu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? mv("" + t.key)
    : e.toString(36);
}
function aa(t, e, n, r, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var l = !1;
  if (t === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case ws:
          case rv:
            l = !0;
        }
    }
  if (l)
    return (
      (l = t),
      (i = i(l)),
      (t = r === "" ? "." + Lu(l, 0) : r),
      fh(i)
        ? ((n = ""),
          t != null && (n = t.replace(dh, "$&/") + "/"),
          aa(i, e, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Xf(i) &&
            (i = pv(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(dh, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), fh(t)))
    for (var s = 0; s < t.length; s++) {
      o = t[s];
      var a = r + Lu(o, s);
      l += aa(o, e, n, a, i);
    }
  else if (((a = hv(t)), typeof a == "function"))
    for (t = a.call(t), s = 0; !(o = t.next()).done; )
      (o = o.value), (a = r + Lu(o, s++)), (l += aa(o, e, n, a, i));
  else if (o === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function Rs(t, e, n) {
  if (t == null) return t;
  var r = [],
    i = 0;
  return (
    aa(t, r, "", "", function (o) {
      return e.call(n, o, i++);
    }),
    r
  );
}
function gv(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = n));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var At = { current: null },
  ua = { transition: null },
  vv = {
    ReactCurrentDispatcher: At,
    ReactCurrentBatchConfig: ua,
    ReactCurrentOwner: Yf,
  };
J.Children = {
  map: Rs,
  forEach: function (t, e, n) {
    Rs(
      t,
      function () {
        e.apply(this, arguments);
      },
      n
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Rs(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Rs(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Xf(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
J.Component = Zo;
J.Fragment = iv;
J.Profiler = lv;
J.PureComponent = Wf;
J.StrictMode = ov;
J.Suspense = cv;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vv;
J.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var r = um({}, t.props),
    i = t.key,
    o = t.ref,
    l = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (l = Yf.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var s = t.type.defaultProps;
    for (a in e)
      dm.call(e, a) &&
        !hm.hasOwnProperty(a) &&
        (r[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ws, type: t.type, key: i, ref: o, props: r, _owner: l };
};
J.createContext = function (t) {
  return (
    (t = {
      $$typeof: av,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: sv, _context: t }),
    (t.Consumer = t)
  );
};
J.createElement = pm;
J.createFactory = function (t) {
  var e = pm.bind(null, t);
  return (e.type = t), e;
};
J.createRef = function () {
  return { current: null };
};
J.forwardRef = function (t) {
  return { $$typeof: uv, render: t };
};
J.isValidElement = Xf;
J.lazy = function (t) {
  return { $$typeof: dv, _payload: { _status: -1, _result: t }, _init: gv };
};
J.memo = function (t, e) {
  return { $$typeof: fv, type: t, compare: e === void 0 ? null : e };
};
J.startTransition = function (t) {
  var e = ua.transition;
  ua.transition = {};
  try {
    t();
  } finally {
    ua.transition = e;
  }
};
J.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
J.useCallback = function (t, e) {
  return At.current.useCallback(t, e);
};
J.useContext = function (t) {
  return At.current.useContext(t);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (t) {
  return At.current.useDeferredValue(t);
};
J.useEffect = function (t, e) {
  return At.current.useEffect(t, e);
};
J.useId = function () {
  return At.current.useId();
};
J.useImperativeHandle = function (t, e, n) {
  return At.current.useImperativeHandle(t, e, n);
};
J.useInsertionEffect = function (t, e) {
  return At.current.useInsertionEffect(t, e);
};
J.useLayoutEffect = function (t, e) {
  return At.current.useLayoutEffect(t, e);
};
J.useMemo = function (t, e) {
  return At.current.useMemo(t, e);
};
J.useReducer = function (t, e, n) {
  return At.current.useReducer(t, e, n);
};
J.useRef = function (t) {
  return At.current.useRef(t);
};
J.useState = function (t) {
  return At.current.useState(t);
};
J.useSyncExternalStore = function (t, e, n) {
  return At.current.useSyncExternalStore(t, e, n);
};
J.useTransition = function () {
  return At.current.useTransition();
};
J.version = "18.2.0";
sm.exports = J;
var fe = sm.exports;
const Gr = om(fe);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yv = fe,
  _v = Symbol.for("react.element"),
  xv = Symbol.for("react.fragment"),
  wv = Object.prototype.hasOwnProperty,
  kv = yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sv = { key: !0, ref: !0, __self: !0, __source: !0 };
function mm(t, e, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (l = e.ref);
  for (r in e) wv.call(e, r) && !Sv.hasOwnProperty(r) && (i[r] = e[r]);
  if (t && t.defaultProps)
    for (r in ((e = t.defaultProps), e)) i[r] === void 0 && (i[r] = e[r]);
  return {
    $$typeof: _v,
    type: t,
    key: o,
    ref: l,
    props: i,
    _owner: kv.current,
  };
}
pu.Fragment = xv;
pu.jsx = mm;
pu.jsxs = mm;
lm.exports = pu;
var S = lm.exports,
  Sc = {},
  gm = { exports: {} },
  pn = {},
  vm = { exports: {} },
  ym = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(j, D) {
    var x = j.length;
    j.push(D);
    e: for (; 0 < x; ) {
      var V = (x - 1) >>> 1,
        re = j[V];
      if (0 < i(re, D)) (j[V] = D), (j[x] = re), (x = V);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var D = j[0],
      x = j.pop();
    if (x !== D) {
      j[0] = x;
      e: for (var V = 0, re = j.length, dt = re >>> 1; V < dt; ) {
        var se = 2 * (V + 1) - 1,
          ze = j[se],
          ke = se + 1,
          me = j[ke];
        if (0 > i(ze, x))
          ke < re && 0 > i(me, ze)
            ? ((j[V] = me), (j[ke] = x), (V = ke))
            : ((j[V] = ze), (j[se] = x), (V = se));
        else if (ke < re && 0 > i(me, x)) (j[V] = me), (j[ke] = x), (V = ke);
        else break e;
      }
    }
    return D;
  }
  function i(j, D) {
    var x = j.sortIndex - D.sortIndex;
    return x !== 0 ? x : j.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    t.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    h = !1,
    y = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(j) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= j)
        r(u), (D.sortIndex = D.expirationTime), e(a, D);
      else break;
      D = n(u);
    }
  }
  function _(j) {
    if (((g = !1), v(j), !y))
      if (n(a) !== null) (y = !0), X(P);
      else {
        var D = n(u);
        D !== null && B(_, D.startTime - j);
      }
  }
  function P(j, D) {
    (y = !1), g && ((g = !1), m(k), (k = -1)), (h = !0);
    var x = d;
    try {
      for (
        v(D), f = n(a);
        f !== null && (!(f.expirationTime > D) || (j && !b()));

      ) {
        var V = f.callback;
        if (typeof V == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var re = V(f.expirationTime <= D);
          (D = t.unstable_now()),
            typeof re == "function" ? (f.callback = re) : f === n(a) && r(a),
            v(D);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var dt = !0;
      else {
        var se = n(u);
        se !== null && B(_, se.startTime - D), (dt = !1);
      }
      return dt;
    } finally {
      (f = null), (d = x), (h = !1);
    }
  }
  var C = !1,
    T = null,
    k = -1,
    E = 5,
    O = -1;
  function b() {
    return !(t.unstable_now() - O < E);
  }
  function M() {
    if (T !== null) {
      var j = t.unstable_now();
      O = j;
      var D = !0;
      try {
        D = T(!0, j);
      } finally {
        D ? A() : ((C = !1), (T = null));
      }
    } else C = !1;
  }
  var A;
  if (typeof p == "function")
    A = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var $ = new MessageChannel(),
      Q = $.port2;
    ($.port1.onmessage = M),
      (A = function () {
        Q.postMessage(null);
      });
  } else
    A = function () {
      w(M, 0);
    };
  function X(j) {
    (T = j), C || ((C = !0), A());
  }
  function B(j, D) {
    k = w(function () {
      j(t.unstable_now());
    }, D);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      y || h || ((y = !0), X(P));
    }),
    (t.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (E = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (t.unstable_next = function (j) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var x = d;
      d = D;
      try {
        return j();
      } finally {
        d = x;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var x = d;
      d = j;
      try {
        return D();
      } finally {
        d = x;
      }
    }),
    (t.unstable_scheduleCallback = function (j, D, x) {
      var V = t.unstable_now();
      switch (
        (typeof x == "object" && x !== null
          ? ((x = x.delay), (x = typeof x == "number" && 0 < x ? V + x : V))
          : (x = V),
        j)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = x + re),
        (j = {
          id: c++,
          callback: D,
          priorityLevel: j,
          startTime: x,
          expirationTime: re,
          sortIndex: -1,
        }),
        x > V
          ? ((j.sortIndex = x),
            e(u, j),
            n(a) === null &&
              j === n(u) &&
              (g ? (m(k), (k = -1)) : (g = !0), B(_, x - V)))
          : ((j.sortIndex = re), e(a, j), y || h || ((y = !0), X(P))),
        j
      );
    }),
    (t.unstable_shouldYield = b),
    (t.unstable_wrapCallback = function (j) {
      var D = d;
      return function () {
        var x = d;
        d = D;
        try {
          return j.apply(this, arguments);
        } finally {
          d = x;
        }
      };
    });
})(ym);
vm.exports = ym;
var Tv = vm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m = fe,
  dn = Tv;
function R(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1;
    n < arguments.length;
    n++
  )
    e += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var xm = new Set(),
  Ql = {};
function qi(t, e) {
  Fo(t, e), Fo(t + "Capture", e);
}
function Fo(t, e) {
  for (Ql[t] = e, t = 0; t < e.length; t++) xm.add(e[t]);
}
var wr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Tc = Object.prototype.hasOwnProperty,
  Pv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hh = {},
  ph = {};
function Cv(t) {
  return Tc.call(ph, t)
    ? !0
    : Tc.call(hh, t)
    ? !1
    : Pv.test(t)
    ? (ph[t] = !0)
    : ((hh[t] = !0), !1);
}
function Ev(t, e, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Ov(t, e, n, r) {
  if (e === null || typeof e > "u" || Ev(t, e, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Ft(t, e, n, r, i, o, l) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var ft = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    ft[t] = new Ft(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  ft[e] = new Ft(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  ft[t] = new Ft(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  ft[t] = new Ft(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    ft[t] = new Ft(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  ft[t] = new Ft(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  ft[t] = new Ft(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  ft[t] = new Ft(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  ft[t] = new Ft(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Gf = /[\-:]([a-z])/g;
function Qf(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Gf, Qf);
    ft[e] = new Ft(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Gf, Qf);
    ft[e] = new Ft(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Gf, Qf);
  ft[e] = new Ft(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  ft[t] = new Ft(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
ft.xlinkHref = new Ft(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  ft[t] = new Ft(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Kf(t, e, n, r) {
  var i = ft.hasOwnProperty(e) ? ft[e] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Ov(e, n, i, r) && (n = null),
    r || i === null
      ? Cv(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, "" + n))
      : i.mustUseProperty
      ? (t[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((e = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))));
}
var Er = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ms = Symbol.for("react.element"),
  fo = Symbol.for("react.portal"),
  ho = Symbol.for("react.fragment"),
  qf = Symbol.for("react.strict_mode"),
  Pc = Symbol.for("react.profiler"),
  wm = Symbol.for("react.provider"),
  km = Symbol.for("react.context"),
  Zf = Symbol.for("react.forward_ref"),
  Cc = Symbol.for("react.suspense"),
  Ec = Symbol.for("react.suspense_list"),
  Jf = Symbol.for("react.memo"),
  br = Symbol.for("react.lazy"),
  Sm = Symbol.for("react.offscreen"),
  mh = Symbol.iterator;
function ll(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (mh && t[mh]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Ne = Object.assign,
  Iu;
function vl(t) {
  if (Iu === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Iu = (e && e[1]) || "";
    }
  return (
    `
` +
    Iu +
    t
  );
}
var bu = !1;
function Au(t, e) {
  if (!t || bu) return "";
  bu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          r = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      t();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (bu = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : "") ? vl(t) : "";
}
function Nv(t) {
  switch (t.tag) {
    case 5:
      return vl(t.type);
    case 16:
      return vl("Lazy");
    case 13:
      return vl("Suspense");
    case 19:
      return vl("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Au(t.type, !1)), t;
    case 11:
      return (t = Au(t.type.render, !1)), t;
    case 1:
      return (t = Au(t.type, !0)), t;
    default:
      return "";
  }
}
function Oc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case ho:
      return "Fragment";
    case fo:
      return "Portal";
    case Pc:
      return "Profiler";
    case qf:
      return "StrictMode";
    case Cc:
      return "Suspense";
    case Ec:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case km:
        return (t.displayName || "Context") + ".Consumer";
      case wm:
        return (t._context.displayName || "Context") + ".Provider";
      case Zf:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case Jf:
        return (
          (e = t.displayName || null), e !== null ? e : Oc(t.type) || "Memo"
        );
      case br:
        (e = t._payload), (t = t._init);
        try {
          return Oc(t(e));
        } catch {}
    }
  return null;
}
function jv(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Oc(e);
    case 8:
      return e === qf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function li(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function Tm(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Rv(t) {
  var e = Tm(t) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    r = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function zs(t) {
  t._valueTracker || (t._valueTracker = Rv(t));
}
function Pm(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    r = "";
  return (
    t && (r = Tm(t) ? (t.checked ? "true" : "false") : t.value),
    (t = r),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Na(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Nc(t, e) {
  var n = e.checked;
  return Ne({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function gh(t, e) {
  var n = e.defaultValue == null ? "" : e.defaultValue,
    r = e.checked != null ? e.checked : e.defaultChecked;
  (n = li(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Cm(t, e) {
  (e = e.checked), e != null && Kf(t, "checked", e, !1);
}
function jc(t, e) {
  Cm(t, e);
  var n = li(e.value),
    r = e.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && t.value === "") || t.value != n) && (t.value = "" + n)
      : t.value !== "" + n && (t.value = "" + n);
  else if (r === "submit" || r === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Rc(t, e.type, n)
    : e.hasOwnProperty("defaultValue") && Rc(t, e.type, li(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function vh(t, e, n) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var r = e.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== "" && (t.name = n);
}
function Rc(t, e, n) {
  (e !== "number" || Na(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + n && (t.defaultValue = "" + n));
}
var yl = Array.isArray;
function Eo(t, e, n, r) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
    for (n = 0; n < t.length; n++)
      (i = e.hasOwnProperty("$" + t[n].value)),
        t[n].selected !== i && (t[n].selected = i),
        i && r && (t[n].defaultSelected = !0);
  } else {
    for (n = "" + li(n), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === n) {
        (t[i].selected = !0), r && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Mc(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(R(91));
  return Ne({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function yh(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(R(92));
      if (yl(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ""), (n = e);
  }
  t._wrapperState = { initialValue: li(n) };
}
function Em(t, e) {
  var n = li(e.value),
    r = li(e.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    r != null && (t.defaultValue = "" + r);
}
function _h(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function Om(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function zc(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? Om(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Ds,
  Nm = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, r, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Ds = Ds || document.createElement("div"),
          Ds.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Ds.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Kl(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ol = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ol).forEach(function (t) {
  Mv.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ol[e] = Ol[t]);
  });
});
function jm(t, e, n) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : n || typeof e != "number" || e === 0 || (Ol.hasOwnProperty(t) && Ol[t])
    ? ("" + e).trim()
    : e + "px";
}
function Rm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = jm(n, e[n], r);
      n === "float" && (n = "cssFloat"), r ? t.setProperty(n, i) : (t[n] = i);
    }
}
var zv = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Dc(t, e) {
  if (e) {
    if (zv[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(R(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(R(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(R(62));
  }
}
function Lc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Ic = null;
function ed(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var bc = null,
  Oo = null,
  No = null;
function xh(t) {
  if ((t = Ts(t))) {
    if (typeof bc != "function") throw Error(R(280));
    var e = t.stateNode;
    e && ((e = _u(e)), bc(t.stateNode, t.type, e));
  }
}
function Mm(t) {
  Oo ? (No ? No.push(t) : (No = [t])) : (Oo = t);
}
function zm() {
  if (Oo) {
    var t = Oo,
      e = No;
    if (((No = Oo = null), xh(t), e)) for (t = 0; t < e.length; t++) xh(e[t]);
  }
}
function Dm(t, e) {
  return t(e);
}
function Lm() {}
var Fu = !1;
function Im(t, e, n) {
  if (Fu) return t(e, n);
  Fu = !0;
  try {
    return Dm(t, e, n);
  } finally {
    (Fu = !1), (Oo !== null || No !== null) && (Lm(), zm());
  }
}
function ql(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var r = _u(n);
  if (r === null) return null;
  n = r[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((t = t.type),
        (r = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !r);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != "function") throw Error(R(231, e, typeof n));
  return n;
}
var Ac = !1;
if (wr)
  try {
    var sl = {};
    Object.defineProperty(sl, "passive", {
      get: function () {
        Ac = !0;
      },
    }),
      window.addEventListener("test", sl, sl),
      window.removeEventListener("test", sl, sl);
  } catch {
    Ac = !1;
  }
function Dv(t, e, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Nl = !1,
  ja = null,
  Ra = !1,
  Fc = null,
  Lv = {
    onError: function (t) {
      (Nl = !0), (ja = t);
    },
  };
function Iv(t, e, n, r, i, o, l, s, a) {
  (Nl = !1), (ja = null), Dv.apply(Lv, arguments);
}
function bv(t, e, n, r, i, o, l, s, a) {
  if ((Iv.apply(this, arguments), Nl)) {
    if (Nl) {
      var u = ja;
      (Nl = !1), (ja = null);
    } else throw Error(R(198));
    Ra || ((Ra = !0), (Fc = u));
  }
}
function Zi(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function bm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function wh(t) {
  if (Zi(t) !== t) throw Error(R(188));
}
function Av(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = Zi(t)), e === null)) throw Error(R(188));
    return e !== t ? null : t;
  }
  for (var n = t, r = e; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return wh(i), t;
        if (o === r) return wh(i), e;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? t : e;
}
function Am(t) {
  return (t = Av(t)), t !== null ? Fm(t) : null;
}
function Fm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Fm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Bm = dn.unstable_scheduleCallback,
  kh = dn.unstable_cancelCallback,
  Fv = dn.unstable_shouldYield,
  Bv = dn.unstable_requestPaint,
  Ae = dn.unstable_now,
  Uv = dn.unstable_getCurrentPriorityLevel,
  td = dn.unstable_ImmediatePriority,
  Um = dn.unstable_UserBlockingPriority,
  Ma = dn.unstable_NormalPriority,
  Vv = dn.unstable_LowPriority,
  Vm = dn.unstable_IdlePriority,
  mu = null,
  nr = null;
function $v(t) {
  if (nr && typeof nr.onCommitFiberRoot == "function")
    try {
      nr.onCommitFiberRoot(mu, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Vn = Math.clz32 ? Math.clz32 : Yv,
  Wv = Math.log,
  Hv = Math.LN2;
function Yv(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Wv(t) / Hv) | 0)) | 0;
}
var Ls = 64,
  Is = 4194304;
function _l(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function za(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = _l(s)) : ((o &= l), o !== 0 && (r = _l(o)));
  } else (l = n & ~i), l !== 0 ? (r = _l(l)) : o !== 0 && (r = _l(o));
  if (r === 0) return 0;
  if (
    e !== 0 &&
    e !== r &&
    !(e & i) &&
    ((i = r & -r), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((r & 4 && (r |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= r; 0 < e; )
      (n = 31 - Vn(e)), (i = 1 << n), (r |= t[n]), (e &= ~i);
  return r;
}
function Xv(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Gv(t, e) {
  for (
    var n = t.suspendedLanes,
      r = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Vn(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = Xv(s, e))
      : a <= e && (t.expiredLanes |= s),
      (o &= ~s);
  }
}
function Bc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function $m() {
  var t = Ls;
  return (Ls <<= 1), !(Ls & 4194240) && (Ls = 64), t;
}
function Bu(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function ks(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Vn(e)),
    (t[e] = n);
}
function Qv(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var r = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var i = 31 - Vn(n),
      o = 1 << i;
    (e[i] = 0), (r[i] = -1), (t[i] = -1), (n &= ~o);
  }
}
function nd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var r = 31 - Vn(n),
      i = 1 << r;
    (i & e) | (t[r] & e) && (t[r] |= e), (n &= ~i);
  }
}
var ae = 0;
function Wm(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Hm,
  rd,
  Ym,
  Xm,
  Gm,
  Uc = !1,
  bs = [],
  Qr = null,
  Kr = null,
  qr = null,
  Zl = new Map(),
  Jl = new Map(),
  Fr = [],
  Kv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Sh(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      Qr = null;
      break;
    case "dragenter":
    case "dragleave":
      Kr = null;
      break;
    case "mouseover":
    case "mouseout":
      qr = null;
      break;
    case "pointerover":
    case "pointerout":
      Zl.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Jl.delete(e.pointerId);
  }
}
function al(t, e, n, r, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      e !== null && ((e = Ts(e)), e !== null && rd(e)),
      t)
    : ((t.eventSystemFlags |= r),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function qv(t, e, n, r, i) {
  switch (e) {
    case "focusin":
      return (Qr = al(Qr, t, e, n, r, i)), !0;
    case "dragenter":
      return (Kr = al(Kr, t, e, n, r, i)), !0;
    case "mouseover":
      return (qr = al(qr, t, e, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Zl.set(o, al(Zl.get(o) || null, t, e, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Jl.set(o, al(Jl.get(o) || null, t, e, n, r, i)), !0
      );
  }
  return !1;
}
function Qm(t) {
  var e = Ei(t.target);
  if (e !== null) {
    var n = Zi(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = bm(n)), e !== null)) {
          (t.blockedOn = e),
            Gm(t.priority, function () {
              Ym(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function ca(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = Vc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ic = r), n.target.dispatchEvent(r), (Ic = null);
    } else return (e = Ts(n)), e !== null && rd(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Th(t, e, n) {
  ca(t) && n.delete(e);
}
function Zv() {
  (Uc = !1),
    Qr !== null && ca(Qr) && (Qr = null),
    Kr !== null && ca(Kr) && (Kr = null),
    qr !== null && ca(qr) && (qr = null),
    Zl.forEach(Th),
    Jl.forEach(Th);
}
function ul(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Uc ||
      ((Uc = !0),
      dn.unstable_scheduleCallback(dn.unstable_NormalPriority, Zv)));
}
function es(t) {
  function e(i) {
    return ul(i, t);
  }
  if (0 < bs.length) {
    ul(bs[0], t);
    for (var n = 1; n < bs.length; n++) {
      var r = bs[n];
      r.blockedOn === t && (r.blockedOn = null);
    }
  }
  for (
    Qr !== null && ul(Qr, t),
      Kr !== null && ul(Kr, t),
      qr !== null && ul(qr, t),
      Zl.forEach(e),
      Jl.forEach(e),
      n = 0;
    n < Fr.length;
    n++
  )
    (r = Fr[n]), r.blockedOn === t && (r.blockedOn = null);
  for (; 0 < Fr.length && ((n = Fr[0]), n.blockedOn === null); )
    Qm(n), n.blockedOn === null && Fr.shift();
}
var jo = Er.ReactCurrentBatchConfig,
  Da = !0;
function Jv(t, e, n, r) {
  var i = ae,
    o = jo.transition;
  jo.transition = null;
  try {
    (ae = 1), id(t, e, n, r);
  } finally {
    (ae = i), (jo.transition = o);
  }
}
function ey(t, e, n, r) {
  var i = ae,
    o = jo.transition;
  jo.transition = null;
  try {
    (ae = 4), id(t, e, n, r);
  } finally {
    (ae = i), (jo.transition = o);
  }
}
function id(t, e, n, r) {
  if (Da) {
    var i = Vc(t, e, n, r);
    if (i === null) Ku(t, e, r, La, n), Sh(t, r);
    else if (qv(i, t, e, n, r)) r.stopPropagation();
    else if ((Sh(t, r), e & 4 && -1 < Kv.indexOf(t))) {
      for (; i !== null; ) {
        var o = Ts(i);
        if (
          (o !== null && Hm(o),
          (o = Vc(t, e, n, r)),
          o === null && Ku(t, e, r, La, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ku(t, e, r, null, n);
  }
}
var La = null;
function Vc(t, e, n, r) {
  if (((La = null), (t = ed(r)), (t = Ei(t)), t !== null))
    if (((e = Zi(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = bm(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (La = t), null;
}
function Km(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Uv()) {
        case td:
          return 1;
        case Um:
          return 4;
        case Ma:
        case Vv:
          return 16;
        case Vm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ur = null,
  od = null,
  fa = null;
function qm() {
  if (fa) return fa;
  var t,
    e = od,
    n = e.length,
    r,
    i = "value" in Ur ? Ur.value : Ur.textContent,
    o = i.length;
  for (t = 0; t < n && e[t] === i[t]; t++);
  var l = n - t;
  for (r = 1; r <= l && e[n - r] === i[o - r]; r++);
  return (fa = i.slice(t, 1 < r ? 1 - r : void 0));
}
function da(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function As() {
  return !0;
}
function Ph() {
  return !1;
}
function mn(t) {
  function e(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in t)
      t.hasOwnProperty(s) && ((n = t[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? As
        : Ph),
      (this.isPropagationStopped = Ph),
      this
    );
  }
  return (
    Ne(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = As));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = As));
      },
      persist: function () {},
      isPersistent: As,
    }),
    e
  );
}
var Jo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ld = mn(Jo),
  Ss = Ne({}, Jo, { view: 0, detail: 0 }),
  ty = mn(Ss),
  Uu,
  Vu,
  cl,
  gu = Ne({}, Ss, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: sd,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== cl &&
            (cl && t.type === "mousemove"
              ? ((Uu = t.screenX - cl.screenX), (Vu = t.screenY - cl.screenY))
              : (Vu = Uu = 0),
            (cl = t)),
          Uu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : Vu;
    },
  }),
  Ch = mn(gu),
  ny = Ne({}, gu, { dataTransfer: 0 }),
  ry = mn(ny),
  iy = Ne({}, Ss, { relatedTarget: 0 }),
  $u = mn(iy),
  oy = Ne({}, Jo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ly = mn(oy),
  sy = Ne({}, Jo, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  ay = mn(sy),
  uy = Ne({}, Jo, { data: 0 }),
  Eh = mn(uy),
  cy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  fy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  dy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function hy(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = dy[t]) ? !!e[t] : !1;
}
function sd() {
  return hy;
}
var py = Ne({}, Ss, {
    key: function (t) {
      if (t.key) {
        var e = cy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = da(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? fy[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: sd,
    charCode: function (t) {
      return t.type === "keypress" ? da(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? da(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  my = mn(py),
  gy = Ne({}, gu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Oh = mn(gy),
  vy = Ne({}, Ss, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: sd,
  }),
  yy = mn(vy),
  _y = Ne({}, Jo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  xy = mn(_y),
  wy = Ne({}, gu, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ky = mn(wy),
  Sy = [9, 13, 27, 32],
  ad = wr && "CompositionEvent" in window,
  jl = null;
wr && "documentMode" in document && (jl = document.documentMode);
var Ty = wr && "TextEvent" in window && !jl,
  Zm = wr && (!ad || (jl && 8 < jl && 11 >= jl)),
  Nh = " ",
  jh = !1;
function Jm(t, e) {
  switch (t) {
    case "keyup":
      return Sy.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function eg(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var po = !1;
function Py(t, e) {
  switch (t) {
    case "compositionend":
      return eg(e);
    case "keypress":
      return e.which !== 32 ? null : ((jh = !0), Nh);
    case "textInput":
      return (t = e.data), t === Nh && jh ? null : t;
    default:
      return null;
  }
}
function Cy(t, e) {
  if (po)
    return t === "compositionend" || (!ad && Jm(t, e))
      ? ((t = qm()), (fa = od = Ur = null), (po = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return Zm && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Ey = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Rh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Ey[t.type] : e === "textarea";
}
function tg(t, e, n, r) {
  Mm(r),
    (e = Ia(e, "onChange")),
    0 < e.length &&
      ((n = new ld("onChange", "change", null, n, r)),
      t.push({ event: n, listeners: e }));
}
var Rl = null,
  ts = null;
function Oy(t) {
  dg(t, 0);
}
function vu(t) {
  var e = vo(t);
  if (Pm(e)) return t;
}
function Ny(t, e) {
  if (t === "change") return e;
}
var ng = !1;
if (wr) {
  var Wu;
  if (wr) {
    var Hu = "oninput" in document;
    if (!Hu) {
      var Mh = document.createElement("div");
      Mh.setAttribute("oninput", "return;"),
        (Hu = typeof Mh.oninput == "function");
    }
    Wu = Hu;
  } else Wu = !1;
  ng = Wu && (!document.documentMode || 9 < document.documentMode);
}
function zh() {
  Rl && (Rl.detachEvent("onpropertychange", rg), (ts = Rl = null));
}
function rg(t) {
  if (t.propertyName === "value" && vu(ts)) {
    var e = [];
    tg(e, ts, t, ed(t)), Im(Oy, e);
  }
}
function jy(t, e, n) {
  t === "focusin"
    ? (zh(), (Rl = e), (ts = n), Rl.attachEvent("onpropertychange", rg))
    : t === "focusout" && zh();
}
function Ry(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return vu(ts);
}
function My(t, e) {
  if (t === "click") return vu(e);
}
function zy(t, e) {
  if (t === "input" || t === "change") return vu(e);
}
function Dy(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Wn = typeof Object.is == "function" ? Object.is : Dy;
function ns(t, e) {
  if (Wn(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var n = Object.keys(t),
    r = Object.keys(e);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Tc.call(e, i) || !Wn(t[i], e[i])) return !1;
  }
  return !0;
}
function Dh(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Lh(t, e) {
  var n = Dh(t);
  t = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = t + n.textContent.length), t <= e && r >= e))
        return { node: n, offset: e - t };
      t = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Dh(n);
  }
}
function ig(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? ig(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function og() {
  for (var t = window, e = Na(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Na(t.document);
  }
  return e;
}
function ud(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function Ly(t) {
  var e = og(),
    n = t.focusedElem,
    r = t.selectionRange;
  if (
    e !== n &&
    n &&
    n.ownerDocument &&
    ig(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ud(n)) {
      if (
        ((e = r.start),
        (t = r.end),
        t === void 0 && (t = e),
        "selectionStart" in n)
      )
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !t.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Lh(n, o));
        var l = Lh(n, r);
        i &&
          l &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== l.node ||
            t.focusOffset !== l.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > r
            ? (t.addRange(e), t.extend(l.node, l.offset))
            : (e.setEnd(l.node, l.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var Iy = wr && "documentMode" in document && 11 >= document.documentMode,
  mo = null,
  $c = null,
  Ml = null,
  Wc = !1;
function Ih(t, e, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wc ||
    mo == null ||
    mo !== Na(r) ||
    ((r = mo),
    "selectionStart" in r && ud(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ml && ns(Ml, r)) ||
      ((Ml = r),
      (r = Ia($c, "onSelect")),
      0 < r.length &&
        ((e = new ld("onSelect", "select", null, e, n)),
        t.push({ event: e, listeners: r }),
        (e.target = mo))));
}
function Fs(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n["Webkit" + t] = "webkit" + e),
    (n["Moz" + t] = "moz" + e),
    n
  );
}
var go = {
    animationend: Fs("Animation", "AnimationEnd"),
    animationiteration: Fs("Animation", "AnimationIteration"),
    animationstart: Fs("Animation", "AnimationStart"),
    transitionend: Fs("Transition", "TransitionEnd"),
  },
  Yu = {},
  lg = {};
wr &&
  ((lg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete go.animationend.animation,
    delete go.animationiteration.animation,
    delete go.animationstart.animation),
  "TransitionEvent" in window || delete go.transitionend.transition);
function yu(t) {
  if (Yu[t]) return Yu[t];
  if (!go[t]) return t;
  var e = go[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in lg) return (Yu[t] = e[n]);
  return t;
}
var sg = yu("animationend"),
  ag = yu("animationiteration"),
  ug = yu("animationstart"),
  cg = yu("transitionend"),
  fg = new Map(),
  bh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function fi(t, e) {
  fg.set(t, e), qi(e, [t]);
}
for (var Xu = 0; Xu < bh.length; Xu++) {
  var Gu = bh[Xu],
    by = Gu.toLowerCase(),
    Ay = Gu[0].toUpperCase() + Gu.slice(1);
  fi(by, "on" + Ay);
}
fi(sg, "onAnimationEnd");
fi(ag, "onAnimationIteration");
fi(ug, "onAnimationStart");
fi("dblclick", "onDoubleClick");
fi("focusin", "onFocus");
fi("focusout", "onBlur");
fi(cg, "onTransitionEnd");
Fo("onMouseEnter", ["mouseout", "mouseover"]);
Fo("onMouseLeave", ["mouseout", "mouseover"]);
Fo("onPointerEnter", ["pointerout", "pointerover"]);
Fo("onPointerLeave", ["pointerout", "pointerover"]);
qi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
qi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
qi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
qi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
qi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
qi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xl =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Fy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xl));
function Ah(t, e, n) {
  var r = t.type || "unknown-event";
  (t.currentTarget = n), bv(r, e, void 0, t), (t.currentTarget = null);
}
function dg(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var r = t[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          Ah(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Ah(i, s, u), (o = a);
        }
    }
  }
  if (Ra) throw ((t = Fc), (Ra = !1), (Fc = null), t);
}
function ge(t, e) {
  var n = e[Qc];
  n === void 0 && (n = e[Qc] = new Set());
  var r = t + "__bubble";
  n.has(r) || (hg(e, t, 2, !1), n.add(r));
}
function Qu(t, e, n) {
  var r = 0;
  e && (r |= 4), hg(n, t, r, e);
}
var Bs = "_reactListening" + Math.random().toString(36).slice(2);
function rs(t) {
  if (!t[Bs]) {
    (t[Bs] = !0),
      xm.forEach(function (n) {
        n !== "selectionchange" && (Fy.has(n) || Qu(n, !1, t), Qu(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Bs] || ((e[Bs] = !0), Qu("selectionchange", !1, e));
  }
}
function hg(t, e, n, r) {
  switch (Km(e)) {
    case 1:
      var i = Jv;
      break;
    case 4:
      i = ey;
      break;
    default:
      i = id;
  }
  (n = i.bind(null, e, n, t)),
    (i = void 0),
    !Ac ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: i })
        : t.addEventListener(e, n, !0)
      : i !== void 0
      ? t.addEventListener(e, n, { passive: i })
      : t.addEventListener(e, n, !1);
}
function Ku(t, e, n, r, i) {
  var o = r;
  if (!(e & 1) && !(e & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Ei(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Im(function () {
    var u = o,
      c = ed(n),
      f = [];
    e: {
      var d = fg.get(t);
      if (d !== void 0) {
        var h = ld,
          y = t;
        switch (t) {
          case "keypress":
            if (da(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = my;
            break;
          case "focusin":
            (y = "focus"), (h = $u);
            break;
          case "focusout":
            (y = "blur"), (h = $u);
            break;
          case "beforeblur":
          case "afterblur":
            h = $u;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = Ch;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = ry;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = yy;
            break;
          case sg:
          case ag:
          case ug:
            h = ly;
            break;
          case cg:
            h = xy;
            break;
          case "scroll":
            h = ty;
            break;
          case "wheel":
            h = ky;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = ay;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = Oh;
        }
        var g = (e & 4) !== 0,
          w = !g && t === "scroll",
          m = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var p = u, v; p !== null; ) {
          v = p;
          var _ = v.stateNode;
          if (
            (v.tag === 5 &&
              _ !== null &&
              ((v = _),
              m !== null && ((_ = ql(p, m)), _ != null && g.push(is(p, _, v)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new h(d, y, null, n, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((d = t === "mouseover" || t === "pointerover"),
          (h = t === "mouseout" || t === "pointerout"),
          d &&
            n !== Ic &&
            (y = n.relatedTarget || n.fromElement) &&
            (Ei(y) || y[kr]))
        )
          break e;
        if (
          (h || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          h
            ? ((y = n.relatedTarget || n.toElement),
              (h = u),
              (y = y ? Ei(y) : null),
              y !== null &&
                ((w = Zi(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((h = null), (y = u)),
          h !== y)
        ) {
          if (
            ((g = Ch),
            (_ = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((g = Oh),
              (_ = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (w = h == null ? d : vo(h)),
            (v = y == null ? d : vo(y)),
            (d = new g(_, p + "leave", h, n, c)),
            (d.target = w),
            (d.relatedTarget = v),
            (_ = null),
            Ei(c) === u &&
              ((g = new g(m, p + "enter", y, n, c)),
              (g.target = v),
              (g.relatedTarget = w),
              (_ = g)),
            (w = _),
            h && y)
          )
            t: {
              for (g = h, m = y, p = 0, v = g; v; v = io(v)) p++;
              for (v = 0, _ = m; _; _ = io(_)) v++;
              for (; 0 < p - v; ) (g = io(g)), p--;
              for (; 0 < v - p; ) (m = io(m)), v--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = io(g)), (m = io(m));
              }
              g = null;
            }
          else g = null;
          h !== null && Fh(f, d, h, g, !1),
            y !== null && w !== null && Fh(f, w, y, g, !0);
        }
      }
      e: {
        if (
          ((d = u ? vo(u) : window),
          (h = d.nodeName && d.nodeName.toLowerCase()),
          h === "select" || (h === "input" && d.type === "file"))
        )
          var P = Ny;
        else if (Rh(d))
          if (ng) P = zy;
          else {
            P = Ry;
            var C = jy;
          }
        else
          (h = d.nodeName) &&
            h.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = My);
        if (P && (P = P(t, u))) {
          tg(f, P, n, c);
          break e;
        }
        C && C(t, d, u),
          t === "focusout" &&
            (C = d._wrapperState) &&
            C.controlled &&
            d.type === "number" &&
            Rc(d, "number", d.value);
      }
      switch (((C = u ? vo(u) : window), t)) {
        case "focusin":
          (Rh(C) || C.contentEditable === "true") &&
            ((mo = C), ($c = u), (Ml = null));
          break;
        case "focusout":
          Ml = $c = mo = null;
          break;
        case "mousedown":
          Wc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wc = !1), Ih(f, n, c);
          break;
        case "selectionchange":
          if (Iy) break;
        case "keydown":
        case "keyup":
          Ih(f, n, c);
      }
      var T;
      if (ad)
        e: {
          switch (t) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        po
          ? Jm(t, n) && (k = "onCompositionEnd")
          : t === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Zm &&
          n.locale !== "ko" &&
          (po || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && po && (T = qm())
            : ((Ur = c),
              (od = "value" in Ur ? Ur.value : Ur.textContent),
              (po = !0))),
        (C = Ia(u, k)),
        0 < C.length &&
          ((k = new Eh(k, t, null, n, c)),
          f.push({ event: k, listeners: C }),
          T ? (k.data = T) : ((T = eg(n)), T !== null && (k.data = T)))),
        (T = Ty ? Py(t, n) : Cy(t, n)) &&
          ((u = Ia(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Eh("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    dg(f, e);
  });
}
function is(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function Ia(t, e) {
  for (var n = e + "Capture", r = []; t !== null; ) {
    var i = t,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ql(t, n)),
      o != null && r.unshift(is(t, o, i)),
      (o = ql(t, e)),
      o != null && r.push(is(t, o, i))),
      (t = t.return);
  }
  return r;
}
function io(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Fh(t, e, n, r, i) {
  for (var o = e._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = ql(n, o)), a != null && l.unshift(is(n, a, s)))
        : i || ((a = ql(n, o)), a != null && l.push(is(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && t.push({ event: e, listeners: l });
}
var By = /\r\n?/g,
  Uy = /\u0000|\uFFFD/g;
function Bh(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      By,
      `
`
    )
    .replace(Uy, "");
}
function Us(t, e, n) {
  if (((e = Bh(e)), Bh(t) !== e && n)) throw Error(R(425));
}
function ba() {}
var Hc = null,
  Yc = null;
function Xc(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Gc = typeof setTimeout == "function" ? setTimeout : void 0,
  Vy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Uh = typeof Promise == "function" ? Promise : void 0,
  $y =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Uh < "u"
      ? function (t) {
          return Uh.resolve(null).then(t).catch(Wy);
        }
      : Gc;
function Wy(t) {
  setTimeout(function () {
    throw t;
  });
}
function qu(t, e) {
  var n = e,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((t.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          t.removeChild(i), es(e);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  es(e);
}
function Zr(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Vh(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (e === 0) return t;
        e--;
      } else n === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var el = Math.random().toString(36).slice(2),
  Zn = "__reactFiber$" + el,
  os = "__reactProps$" + el,
  kr = "__reactContainer$" + el,
  Qc = "__reactEvents$" + el,
  Hy = "__reactListeners$" + el,
  Yy = "__reactHandles$" + el;
function Ei(t) {
  var e = t[Zn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[kr] || n[Zn])) {
      if (
        ((n = e.alternate),
        e.child !== null || (n !== null && n.child !== null))
      )
        for (t = Vh(t); t !== null; ) {
          if ((n = t[Zn])) return n;
          t = Vh(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ts(t) {
  return (
    (t = t[Zn] || t[kr]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function vo(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(R(33));
}
function _u(t) {
  return t[os] || null;
}
var Kc = [],
  yo = -1;
function di(t) {
  return { current: t };
}
function ye(t) {
  0 > yo || ((t.current = Kc[yo]), (Kc[yo] = null), yo--);
}
function he(t, e) {
  yo++, (Kc[yo] = t.current), (t.current = e);
}
var si = {},
  Pt = di(si),
  Wt = di(!1),
  Ui = si;
function Bo(t, e) {
  var n = t.type.contextTypes;
  if (!n) return si;
  var r = t.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === e)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = e[o];
  return (
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ht(t) {
  return (t = t.childContextTypes), t != null;
}
function Aa() {
  ye(Wt), ye(Pt);
}
function $h(t, e, n) {
  if (Pt.current !== si) throw Error(R(168));
  he(Pt, e), he(Wt, n);
}
function pg(t, e, n) {
  var r = t.stateNode;
  if (((e = e.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in e)) throw Error(R(108, jv(t) || "Unknown", i));
  return Ne({}, n, r);
}
function Fa(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || si),
    (Ui = Pt.current),
    he(Pt, t),
    he(Wt, Wt.current),
    !0
  );
}
function Wh(t, e, n) {
  var r = t.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((t = pg(t, e, Ui)),
      (r.__reactInternalMemoizedMergedChildContext = t),
      ye(Wt),
      ye(Pt),
      he(Pt, t))
    : ye(Wt),
    he(Wt, n);
}
var hr = null,
  xu = !1,
  Zu = !1;
function mg(t) {
  hr === null ? (hr = [t]) : hr.push(t);
}
function Xy(t) {
  (xu = !0), mg(t);
}
function hi() {
  if (!Zu && hr !== null) {
    Zu = !0;
    var t = 0,
      e = ae;
    try {
      var n = hr;
      for (ae = 1; t < n.length; t++) {
        var r = n[t];
        do r = r(!0);
        while (r !== null);
      }
      (hr = null), (xu = !1);
    } catch (i) {
      throw (hr !== null && (hr = hr.slice(t + 1)), Bm(td, hi), i);
    } finally {
      (ae = e), (Zu = !1);
    }
  }
  return null;
}
var _o = [],
  xo = 0,
  Ba = null,
  Ua = 0,
  yn = [],
  _n = 0,
  Vi = null,
  gr = 1,
  vr = "";
function ki(t, e) {
  (_o[xo++] = Ua), (_o[xo++] = Ba), (Ba = t), (Ua = e);
}
function gg(t, e, n) {
  (yn[_n++] = gr), (yn[_n++] = vr), (yn[_n++] = Vi), (Vi = t);
  var r = gr;
  t = vr;
  var i = 32 - Vn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Vn(e) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (gr = (1 << (32 - Vn(e) + i)) | (n << i) | r),
      (vr = o + t);
  } else (gr = (1 << o) | (n << i) | r), (vr = t);
}
function cd(t) {
  t.return !== null && (ki(t, 1), gg(t, 1, 0));
}
function fd(t) {
  for (; t === Ba; )
    (Ba = _o[--xo]), (_o[xo] = null), (Ua = _o[--xo]), (_o[xo] = null);
  for (; t === Vi; )
    (Vi = yn[--_n]),
      (yn[_n] = null),
      (vr = yn[--_n]),
      (yn[_n] = null),
      (gr = yn[--_n]),
      (yn[_n] = null);
}
var cn = null,
  an = null,
  xe = !1,
  Bn = null;
function vg(t, e) {
  var n = kn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Hh(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e =
          e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (cn = t), (an = Zr(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (cn = t), (an = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = Vi !== null ? { id: gr, overflow: vr } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = kn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (cn = t),
            (an = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function qc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Zc(t) {
  if (xe) {
    var e = an;
    if (e) {
      var n = e;
      if (!Hh(t, e)) {
        if (qc(t)) throw Error(R(418));
        e = Zr(n.nextSibling);
        var r = cn;
        e && Hh(t, e)
          ? vg(r, n)
          : ((t.flags = (t.flags & -4097) | 2), (xe = !1), (cn = t));
      }
    } else {
      if (qc(t)) throw Error(R(418));
      (t.flags = (t.flags & -4097) | 2), (xe = !1), (cn = t);
    }
  }
}
function Yh(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  cn = t;
}
function Vs(t) {
  if (t !== cn) return !1;
  if (!xe) return Yh(t), (xe = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Xc(t.type, t.memoizedProps))),
    e && (e = an))
  ) {
    if (qc(t)) throw (yg(), Error(R(418)));
    for (; e; ) vg(t, e), (e = Zr(e.nextSibling));
  }
  if ((Yh(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(R(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === "/$") {
            if (e === 0) {
              an = Zr(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      an = null;
    }
  } else an = cn ? Zr(t.stateNode.nextSibling) : null;
  return !0;
}
function yg() {
  for (var t = an; t; ) t = Zr(t.nextSibling);
}
function Uo() {
  (an = cn = null), (xe = !1);
}
function dd(t) {
  Bn === null ? (Bn = [t]) : Bn.push(t);
}
var Gy = Er.ReactCurrentBatchConfig;
function An(t, e) {
  if (t && t.defaultProps) {
    (e = Ne({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
var Va = di(null),
  $a = null,
  wo = null,
  hd = null;
function pd() {
  hd = wo = $a = null;
}
function md(t) {
  var e = Va.current;
  ye(Va), (t._currentValue = e);
}
function Jc(t, e, n) {
  for (; t !== null; ) {
    var r = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), r !== null && (r.childLanes |= e))
        : r !== null && (r.childLanes & e) !== e && (r.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function Ro(t, e) {
  ($a = t),
    (hd = wo = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && ($t = !0), (t.firstContext = null));
}
function En(t) {
  var e = t._currentValue;
  if (hd !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), wo === null)) {
      if ($a === null) throw Error(R(308));
      (wo = t), ($a.dependencies = { lanes: 0, firstContext: t });
    } else wo = wo.next = t;
  return e;
}
var Oi = null;
function gd(t) {
  Oi === null ? (Oi = [t]) : Oi.push(t);
}
function _g(t, e, n, r) {
  var i = e.interleaved;
  return (
    i === null ? ((n.next = n), gd(e)) : ((n.next = i.next), (i.next = n)),
    (e.interleaved = n),
    Sr(t, r)
  );
}
function Sr(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ar = !1;
function vd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function xg(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function _r(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jr(t, e, n) {
  var r = t.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var i = r.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (r.pending = e),
      Sr(t, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((e.next = e), gd(r)) : ((e.next = i.next), (i.next = e)),
    (r.interleaved = e),
    Sr(t, n)
  );
}
function ha(t, e, n) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))
  ) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), nd(t, n);
  }
}
function Xh(t, e) {
  var n = t.updateQueue,
    r = t.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function Wa(t, e, n, r) {
  var i = t.updateQueue;
  Ar = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== l &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (l = 0), (c = u = a = null), (s = o);
    do {
      var d = s.lane,
        h = s.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = t,
            g = s;
          switch (((d = e), (h = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == "function")) {
                f = y.call(h, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(h, f, d) : y),
                d == null)
              )
                break e;
              f = Ne({}, f, d);
              break e;
            case 2:
              Ar = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((t.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s));
      } else
        (h = {
          eventTime: h,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (a = f)) : (c = c.next = h),
          (l |= d);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (l |= i.lane), (i = i.next);
      while (i !== e);
    } else o === null && (i.shared.lanes = 0);
    (Wi |= l), (t.lanes = l), (t.memoizedState = f);
  }
}
function Gh(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var r = t[e],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var wg = new _m.Component().refs;
function ef(t, e, n, r) {
  (e = t.memoizedState),
    (n = n(r, e)),
    (n = n == null ? e : Ne({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var wu = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? Zi(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var r = bt(),
      i = ti(t),
      o = _r(r, i);
    (o.payload = e),
      n != null && (o.callback = n),
      (e = Jr(t, o, i)),
      e !== null && ($n(e, t, i, r), ha(e, t, i));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var r = bt(),
      i = ti(t),
      o = _r(r, i);
    (o.tag = 1),
      (o.payload = e),
      n != null && (o.callback = n),
      (e = Jr(t, o, i)),
      e !== null && ($n(e, t, i, r), ha(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = bt(),
      r = ti(t),
      i = _r(n, r);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = Jr(t, i, r)),
      e !== null && ($n(e, t, r, n), ha(e, t, r));
  },
};
function Qh(t, e, n, r, i, o, l) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(r, o, l)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ns(n, r) || !ns(i, o)
      : !0
  );
}
function kg(t, e, n) {
  var r = !1,
    i = si,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = En(o))
      : ((i = Ht(e) ? Ui : Pt.current),
        (r = e.contextTypes),
        (o = (r = r != null) ? Bo(t, i) : si)),
    (e = new e(n, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = wu),
    (t.stateNode = e),
    (e._reactInternals = t),
    r &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function Kh(t, e, n, r) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(n, r),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(n, r),
    e.state !== t && wu.enqueueReplaceState(e, e.state, null);
}
function tf(t, e, n, r) {
  var i = t.stateNode;
  (i.props = n), (i.state = t.memoizedState), (i.refs = wg), vd(t);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (i.context = En(o))
    : ((o = Ht(e) ? Ui : Pt.current), (i.context = Bo(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && (ef(t, e, o, n), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && wu.enqueueReplaceState(i, i.state, null),
      Wa(t, n, i, r),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function fl(t, e, n) {
  if (
    ((t = n.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, t));
      var i = r,
        o = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (l) {
            var s = i.refs;
            s === wg && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (e._stringRef = o),
          e);
    }
    if (typeof t != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, t));
  }
  return t;
}
function $s(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      R(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function qh(t) {
  var e = t._init;
  return e(t._payload);
}
function Sg(t) {
  function e(m, p) {
    if (t) {
      var v = m.deletions;
      v === null ? ((m.deletions = [p]), (m.flags |= 16)) : v.push(p);
    }
  }
  function n(m, p) {
    if (!t) return null;
    for (; p !== null; ) e(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = ni(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, v) {
    return (
      (m.index = v),
      t
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < p ? ((m.flags |= 2), p) : v)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function l(m) {
    return t && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, p, v, _) {
    return p === null || p.tag !== 6
      ? ((p = oc(v, m.mode, _)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function a(m, p, v, _) {
    var P = v.type;
    return P === ho
      ? c(m, p, v.props.children, _, v.key)
      : p !== null &&
        (p.elementType === P ||
          (typeof P == "object" &&
            P !== null &&
            P.$$typeof === br &&
            qh(P) === p.type))
      ? ((_ = i(p, v.props)), (_.ref = fl(m, p, v)), (_.return = m), _)
      : ((_ = _a(v.type, v.key, v.props, null, m.mode, _)),
        (_.ref = fl(m, p, v)),
        (_.return = m),
        _);
  }
  function u(m, p, v, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = lc(v, m.mode, _)), (p.return = m), p)
      : ((p = i(p, v.children || [])), (p.return = m), p);
  }
  function c(m, p, v, _, P) {
    return p === null || p.tag !== 7
      ? ((p = zi(v, m.mode, _, P)), (p.return = m), p)
      : ((p = i(p, v)), (p.return = m), p);
  }
  function f(m, p, v) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = oc("" + p, m.mode, v)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ms:
          return (
            (v = _a(p.type, p.key, p.props, null, m.mode, v)),
            (v.ref = fl(m, null, p)),
            (v.return = m),
            v
          );
        case fo:
          return (p = lc(p, m.mode, v)), (p.return = m), p;
        case br:
          var _ = p._init;
          return f(m, _(p._payload), v);
      }
      if (yl(p) || ll(p))
        return (p = zi(p, m.mode, v, null)), (p.return = m), p;
      $s(m, p);
    }
    return null;
  }
  function d(m, p, v, _) {
    var P = p !== null ? p.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return P !== null ? null : s(m, p, "" + v, _);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Ms:
          return v.key === P ? a(m, p, v, _) : null;
        case fo:
          return v.key === P ? u(m, p, v, _) : null;
        case br:
          return (P = v._init), d(m, p, P(v._payload), _);
      }
      if (yl(v) || ll(v)) return P !== null ? null : c(m, p, v, _, null);
      $s(m, v);
    }
    return null;
  }
  function h(m, p, v, _, P) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (m = m.get(v) || null), s(p, m, "" + _, P);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Ms:
          return (m = m.get(_.key === null ? v : _.key) || null), a(p, m, _, P);
        case fo:
          return (m = m.get(_.key === null ? v : _.key) || null), u(p, m, _, P);
        case br:
          var C = _._init;
          return h(m, p, v, C(_._payload), P);
      }
      if (yl(_) || ll(_)) return (m = m.get(v) || null), c(p, m, _, P, null);
      $s(p, _);
    }
    return null;
  }
  function y(m, p, v, _) {
    for (
      var P = null, C = null, T = p, k = (p = 0), E = null;
      T !== null && k < v.length;
      k++
    ) {
      T.index > k ? ((E = T), (T = null)) : (E = T.sibling);
      var O = d(m, T, v[k], _);
      if (O === null) {
        T === null && (T = E);
        break;
      }
      t && T && O.alternate === null && e(m, T),
        (p = o(O, p, k)),
        C === null ? (P = O) : (C.sibling = O),
        (C = O),
        (T = E);
    }
    if (k === v.length) return n(m, T), xe && ki(m, k), P;
    if (T === null) {
      for (; k < v.length; k++)
        (T = f(m, v[k], _)),
          T !== null &&
            ((p = o(T, p, k)), C === null ? (P = T) : (C.sibling = T), (C = T));
      return xe && ki(m, k), P;
    }
    for (T = r(m, T); k < v.length; k++)
      (E = h(T, m, k, v[k], _)),
        E !== null &&
          (t && E.alternate !== null && T.delete(E.key === null ? k : E.key),
          (p = o(E, p, k)),
          C === null ? (P = E) : (C.sibling = E),
          (C = E));
    return (
      t &&
        T.forEach(function (b) {
          return e(m, b);
        }),
      xe && ki(m, k),
      P
    );
  }
  function g(m, p, v, _) {
    var P = ll(v);
    if (typeof P != "function") throw Error(R(150));
    if (((v = P.call(v)), v == null)) throw Error(R(151));
    for (
      var C = (P = null), T = p, k = (p = 0), E = null, O = v.next();
      T !== null && !O.done;
      k++, O = v.next()
    ) {
      T.index > k ? ((E = T), (T = null)) : (E = T.sibling);
      var b = d(m, T, O.value, _);
      if (b === null) {
        T === null && (T = E);
        break;
      }
      t && T && b.alternate === null && e(m, T),
        (p = o(b, p, k)),
        C === null ? (P = b) : (C.sibling = b),
        (C = b),
        (T = E);
    }
    if (O.done) return n(m, T), xe && ki(m, k), P;
    if (T === null) {
      for (; !O.done; k++, O = v.next())
        (O = f(m, O.value, _)),
          O !== null &&
            ((p = o(O, p, k)), C === null ? (P = O) : (C.sibling = O), (C = O));
      return xe && ki(m, k), P;
    }
    for (T = r(m, T); !O.done; k++, O = v.next())
      (O = h(T, m, k, O.value, _)),
        O !== null &&
          (t && O.alternate !== null && T.delete(O.key === null ? k : O.key),
          (p = o(O, p, k)),
          C === null ? (P = O) : (C.sibling = O),
          (C = O));
    return (
      t &&
        T.forEach(function (M) {
          return e(m, M);
        }),
      xe && ki(m, k),
      P
    );
  }
  function w(m, p, v, _) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === ho &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case Ms:
          e: {
            for (var P = v.key, C = p; C !== null; ) {
              if (C.key === P) {
                if (((P = v.type), P === ho)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = i(C, v.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === br &&
                    qh(P) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, v.props)),
                    (p.ref = fl(m, C, v)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else e(m, C);
              C = C.sibling;
            }
            v.type === ho
              ? ((p = zi(v.props.children, m.mode, _, v.key)),
                (p.return = m),
                (m = p))
              : ((_ = _a(v.type, v.key, v.props, null, m.mode, _)),
                (_.ref = fl(m, p, v)),
                (_.return = m),
                (m = _));
          }
          return l(m);
        case fo:
          e: {
            for (C = v.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, v.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else e(m, p);
              p = p.sibling;
            }
            (p = lc(v, m.mode, _)), (p.return = m), (m = p);
          }
          return l(m);
        case br:
          return (C = v._init), w(m, p, C(v._payload), _);
      }
      if (yl(v)) return y(m, p, v, _);
      if (ll(v)) return g(m, p, v, _);
      $s(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, v)), (p.return = m), (m = p))
          : (n(m, p), (p = oc(v, m.mode, _)), (p.return = m), (m = p)),
        l(m))
      : n(m, p);
  }
  return w;
}
var Vo = Sg(!0),
  Tg = Sg(!1),
  Ps = {},
  rr = di(Ps),
  ls = di(Ps),
  ss = di(Ps);
function Ni(t) {
  if (t === Ps) throw Error(R(174));
  return t;
}
function yd(t, e) {
  switch ((he(ss, e), he(ls, t), he(rr, Ps), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : zc(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = zc(e, t));
  }
  ye(rr), he(rr, e);
}
function $o() {
  ye(rr), ye(ls), ye(ss);
}
function Pg(t) {
  Ni(ss.current);
  var e = Ni(rr.current),
    n = zc(e, t.type);
  e !== n && (he(ls, t), he(rr, n));
}
function _d(t) {
  ls.current === t && (ye(rr), ye(ls));
}
var Pe = di(0);
function Ha(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Ju = [];
function xd() {
  for (var t = 0; t < Ju.length; t++)
    Ju[t]._workInProgressVersionPrimary = null;
  Ju.length = 0;
}
var pa = Er.ReactCurrentDispatcher,
  ec = Er.ReactCurrentBatchConfig,
  $i = 0,
  Oe = null,
  Xe = null,
  et = null,
  Ya = !1,
  zl = !1,
  as = 0,
  Qy = 0;
function vt() {
  throw Error(R(321));
}
function wd(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++)
    if (!Wn(t[n], e[n])) return !1;
  return !0;
}
function kd(t, e, n, r, i, o) {
  if (
    (($i = o),
    (Oe = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (pa.current = t === null || t.memoizedState === null ? Jy : e_),
    (t = n(r, i)),
    zl)
  ) {
    o = 0;
    do {
      if (((zl = !1), (as = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (et = Xe = null),
        (e.updateQueue = null),
        (pa.current = t_),
        (t = n(r, i));
    } while (zl);
  }
  if (
    ((pa.current = Xa),
    (e = Xe !== null && Xe.next !== null),
    ($i = 0),
    (et = Xe = Oe = null),
    (Ya = !1),
    e)
  )
    throw Error(R(300));
  return t;
}
function Sd() {
  var t = as !== 0;
  return (as = 0), t;
}
function Qn() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return et === null ? (Oe.memoizedState = et = t) : (et = et.next = t), et;
}
function On() {
  if (Xe === null) {
    var t = Oe.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = Xe.next;
  var e = et === null ? Oe.memoizedState : et.next;
  if (e !== null) (et = e), (Xe = t);
  else {
    if (t === null) throw Error(R(310));
    (Xe = t),
      (t = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null,
      }),
      et === null ? (Oe.memoizedState = et = t) : (et = et.next = t);
  }
  return et;
}
function us(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function tc(t) {
  var e = On(),
    n = e.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = Xe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if (($i & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : t(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (Oe.lanes |= c),
          (Wi |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      Wn(r, e.memoizedState) || ($t = !0),
      (e.memoizedState = r),
      (e.baseState = l),
      (e.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((t = n.interleaved), t !== null)) {
    i = t;
    do (o = i.lane), (Oe.lanes |= o), (Wi |= o), (i = i.next);
    while (i !== t);
  } else i === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function nc(t) {
  var e = On(),
    n = e.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = t;
  var r = n.dispatch,
    i = n.pending,
    o = e.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = t(o, l.action)), (l = l.next);
    while (l !== i);
    Wn(o, e.memoizedState) || ($t = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Cg() {}
function Eg(t, e) {
  var n = Oe,
    r = On(),
    i = e(),
    o = !Wn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), ($t = !0)),
    (r = r.queue),
    Td(jg.bind(null, n, r, t), [t]),
    r.getSnapshot !== e || o || (et !== null && et.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      cs(9, Ng.bind(null, n, r, i, e), void 0, null),
      nt === null)
    )
      throw Error(R(349));
    $i & 30 || Og(n, e, i);
  }
  return i;
}
function Og(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = Oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Oe.updateQueue = e),
        (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function Ng(t, e, n, r) {
  (e.value = n), (e.getSnapshot = r), Rg(e) && Mg(t);
}
function jg(t, e, n) {
  return n(function () {
    Rg(e) && Mg(t);
  });
}
function Rg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Wn(t, n);
  } catch {
    return !0;
  }
}
function Mg(t) {
  var e = Sr(t, 1);
  e !== null && $n(e, t, 1, -1);
}
function Zh(t) {
  var e = Qn();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: us,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = Zy.bind(null, Oe, t)),
    [e.memoizedState, t]
  );
}
function cs(t, e, n, r) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: r, next: null }),
    (e = Oe.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (Oe.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((r = n.next), (n.next = t), (t.next = r), (e.lastEffect = t))),
    t
  );
}
function zg() {
  return On().memoizedState;
}
function ma(t, e, n, r) {
  var i = Qn();
  (Oe.flags |= t),
    (i.memoizedState = cs(1 | e, n, void 0, r === void 0 ? null : r));
}
function ku(t, e, n, r) {
  var i = On();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Xe !== null) {
    var l = Xe.memoizedState;
    if (((o = l.destroy), r !== null && wd(r, l.deps))) {
      i.memoizedState = cs(e, n, o, r);
      return;
    }
  }
  (Oe.flags |= t), (i.memoizedState = cs(1 | e, n, o, r));
}
function Jh(t, e) {
  return ma(8390656, 8, t, e);
}
function Td(t, e) {
  return ku(2048, 8, t, e);
}
function Dg(t, e) {
  return ku(4, 2, t, e);
}
function Lg(t, e) {
  return ku(4, 4, t, e);
}
function Ig(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function bg(t, e, n) {
  return (
    (n = n != null ? n.concat([t]) : null), ku(4, 4, Ig.bind(null, e, t), n)
  );
}
function Pd() {}
function Ag(t, e) {
  var n = On();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && wd(e, r[1])
    ? r[0]
    : ((n.memoizedState = [t, e]), t);
}
function Fg(t, e) {
  var n = On();
  e = e === void 0 ? null : e;
  var r = n.memoizedState;
  return r !== null && e !== null && wd(e, r[1])
    ? r[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Bg(t, e, n) {
  return $i & 21
    ? (Wn(n, e) || ((n = $m()), (Oe.lanes |= n), (Wi |= n), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), ($t = !0)), (t.memoizedState = n));
}
function Ky(t, e) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), t(!0);
  var r = ec.transition;
  ec.transition = {};
  try {
    t(!1), e();
  } finally {
    (ae = n), (ec.transition = r);
  }
}
function Ug() {
  return On().memoizedState;
}
function qy(t, e, n) {
  var r = ti(t);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Vg(t))
  )
    $g(e, n);
  else if (((n = _g(t, e, n, r)), n !== null)) {
    var i = bt();
    $n(n, t, r, i), Wg(n, e, r);
  }
}
function Zy(t, e, n) {
  var r = ti(t),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Vg(t)) $g(e, i);
  else {
    var o = t.alternate;
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var l = e.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), Wn(s, l))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), gd(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = _g(t, e, i, r)),
      n !== null && ((i = bt()), $n(n, t, r, i), Wg(n, e, r));
  }
}
function Vg(t) {
  var e = t.alternate;
  return t === Oe || (e !== null && e === Oe);
}
function $g(t, e) {
  zl = Ya = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
    (t.pending = e);
}
function Wg(t, e, n) {
  if (n & 4194240) {
    var r = e.lanes;
    (r &= t.pendingLanes), (n |= r), (e.lanes = n), nd(t, n);
  }
}
var Xa = {
    readContext: En,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useInsertionEffect: vt,
    useLayoutEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useMutableSource: vt,
    useSyncExternalStore: vt,
    useId: vt,
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: En,
    useCallback: function (t, e) {
      return (Qn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: En,
    useEffect: Jh,
    useImperativeHandle: function (t, e, n) {
      return (
        (n = n != null ? n.concat([t]) : null),
        ma(4194308, 4, Ig.bind(null, e, t), n)
      );
    },
    useLayoutEffect: function (t, e) {
      return ma(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return ma(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = Qn();
      return (
        (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, n) {
      var r = Qn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (r.memoizedState = r.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (r.queue = t),
        (t = t.dispatch = qy.bind(null, Oe, t)),
        [r.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Qn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Zh,
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      return (Qn().memoizedState = t);
    },
    useTransition: function () {
      var t = Zh(!1),
        e = t[0];
      return (t = Ky.bind(null, t[1])), (Qn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var r = Oe,
        i = Qn();
      if (xe) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = e()), nt === null)) throw Error(R(349));
        $i & 30 || Og(r, e, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: e };
      return (
        (i.queue = o),
        Jh(jg.bind(null, r, o, t), [t]),
        (r.flags |= 2048),
        cs(9, Ng.bind(null, r, o, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = Qn(),
        e = nt.identifierPrefix;
      if (xe) {
        var n = vr,
          r = gr;
        (n = (r & ~(1 << (32 - Vn(r) - 1))).toString(32) + n),
          (e = ":" + e + "R" + n),
          (n = as++),
          0 < n && (e += "H" + n.toString(32)),
          (e += ":");
      } else (n = Qy++), (e = ":" + e + "r" + n.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  e_ = {
    readContext: En,
    useCallback: Ag,
    useContext: En,
    useEffect: Td,
    useImperativeHandle: bg,
    useInsertionEffect: Dg,
    useLayoutEffect: Lg,
    useMemo: Fg,
    useReducer: tc,
    useRef: zg,
    useState: function () {
      return tc(us);
    },
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      var e = On();
      return Bg(e, Xe.memoizedState, t);
    },
    useTransition: function () {
      var t = tc(us)[0],
        e = On().memoizedState;
      return [t, e];
    },
    useMutableSource: Cg,
    useSyncExternalStore: Eg,
    useId: Ug,
    unstable_isNewReconciler: !1,
  },
  t_ = {
    readContext: En,
    useCallback: Ag,
    useContext: En,
    useEffect: Td,
    useImperativeHandle: bg,
    useInsertionEffect: Dg,
    useLayoutEffect: Lg,
    useMemo: Fg,
    useReducer: nc,
    useRef: zg,
    useState: function () {
      return nc(us);
    },
    useDebugValue: Pd,
    useDeferredValue: function (t) {
      var e = On();
      return Xe === null ? (e.memoizedState = t) : Bg(e, Xe.memoizedState, t);
    },
    useTransition: function () {
      var t = nc(us)[0],
        e = On().memoizedState;
      return [t, e];
    },
    useMutableSource: Cg,
    useSyncExternalStore: Eg,
    useId: Ug,
    unstable_isNewReconciler: !1,
  };
function Wo(t, e) {
  try {
    var n = "",
      r = e;
    do (n += Nv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function rc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function nf(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var n_ = typeof WeakMap == "function" ? WeakMap : Map;
function Hg(t, e, n) {
  (n = _r(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = e.value;
  return (
    (n.callback = function () {
      Qa || ((Qa = !0), (hf = r)), nf(t, e);
    }),
    n
  );
}
function Yg(t, e, n) {
  (n = _r(-1, n)), (n.tag = 3);
  var r = t.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = e.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        nf(t, e);
      });
  }
  var o = t.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        nf(t, e),
          typeof r != "function" &&
            (ei === null ? (ei = new Set([this])) : ei.add(this));
        var l = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ep(t, e, n) {
  var r = t.pingCache;
  if (r === null) {
    r = t.pingCache = new n_();
    var i = new Set();
    r.set(e, i);
  } else (i = r.get(e)), i === void 0 && ((i = new Set()), r.set(e, i));
  i.has(n) || (i.add(n), (t = g_.bind(null, t, e, n)), e.then(t, t));
}
function tp(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function np(t, e, n, r, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((e = _r(-1, 1)), (e.tag = 2), Jr(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var r_ = Er.ReactCurrentOwner,
  $t = !1;
function Rt(t, e, n, r) {
  e.child = t === null ? Tg(e, null, n, r) : Vo(e, t.child, n, r);
}
function rp(t, e, n, r, i) {
  n = n.render;
  var o = e.ref;
  return (
    Ro(e, i),
    (r = kd(t, e, n, r, o, i)),
    (n = Sd()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Tr(t, e, i))
      : (xe && n && cd(e), (e.flags |= 1), Rt(t, e, r, i), e.child)
  );
}
function ip(t, e, n, r, i) {
  if (t === null) {
    var o = n.type;
    return typeof o == "function" &&
      !zd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Xg(t, e, o, r, i))
      : ((t = _a(n.type, null, r, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ns), n(l, r) && t.ref === e.ref)
    )
      return Tr(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = ni(o, r)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Xg(t, e, n, r, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (ns(o, r) && t.ref === e.ref)
      if ((($t = !1), (e.pendingProps = r = o), (t.lanes & i) !== 0))
        t.flags & 131072 && ($t = !0);
      else return (e.lanes = t.lanes), Tr(t, e, i);
  }
  return rf(t, e, n, r, i);
}
function Gg(t, e, n) {
  var r = e.pendingProps,
    i = r.children,
    o = t !== null ? t.memoizedState : null;
  if (r.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        he(So, nn),
        (nn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          he(So, nn),
          (nn |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        he(So, nn),
        (nn |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (e.memoizedState = null)) : (r = n),
      he(So, nn),
      (nn |= r);
  return Rt(t, e, i, n), e.child;
}
function Qg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function rf(t, e, n, r, i) {
  var o = Ht(n) ? Ui : Pt.current;
  return (
    (o = Bo(e, o)),
    Ro(e, i),
    (n = kd(t, e, n, r, o, i)),
    (r = Sd()),
    t !== null && !$t
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Tr(t, e, i))
      : (xe && r && cd(e), (e.flags |= 1), Rt(t, e, n, i), e.child)
  );
}
function op(t, e, n, r, i) {
  if (Ht(n)) {
    var o = !0;
    Fa(e);
  } else o = !1;
  if ((Ro(e, i), e.stateNode === null))
    ga(t, e), kg(e, n, r), tf(e, n, r, i), (r = !0);
  else if (t === null) {
    var l = e.stateNode,
      s = e.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = En(u))
      : ((u = Ht(n) ? Ui : Pt.current), (u = Bo(e, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Kh(e, l, r, u)),
      (Ar = !1);
    var d = e.memoizedState;
    (l.state = d),
      Wa(e, r, l, i),
      (a = e.memoizedState),
      s !== r || d !== a || Wt.current || Ar
        ? (typeof c == "function" && (ef(e, n, c, r), (a = e.memoizedState)),
          (s = Ar || Qh(e, n, s, r, d, a, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = r),
              (e.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (e.flags |= 4194308),
          (r = !1));
  } else {
    (l = e.stateNode),
      xg(t, e),
      (s = e.memoizedProps),
      (u = e.type === e.elementType ? s : An(e.type, s)),
      (l.props = u),
      (f = e.pendingProps),
      (d = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = En(a))
        : ((a = Ht(n) ? Ui : Pt.current), (a = Bo(e, a)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== f || d !== a) && Kh(e, l, r, a)),
      (Ar = !1),
      (d = e.memoizedState),
      (l.state = d),
      Wa(e, r, l, i);
    var y = e.memoizedState;
    s !== f || d !== y || Wt.current || Ar
      ? (typeof h == "function" && (ef(e, n, h, r), (y = e.memoizedState)),
        (u = Ar || Qh(e, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, a)),
            typeof l.componentDidUpdate == "function" && (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === t.memoizedProps && d === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = r),
            (e.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === t.memoizedProps && d === t.memoizedState) ||
          (e.flags |= 1024),
        (r = !1));
  }
  return of(t, e, n, r, o, i);
}
function of(t, e, n, r, i, o) {
  Qg(t, e);
  var l = (e.flags & 128) !== 0;
  if (!r && !l) return i && Wh(e, n, !1), Tr(t, e, o);
  (r = e.stateNode), (r_.current = e);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (e.flags |= 1),
    t !== null && l
      ? ((e.child = Vo(e, t.child, null, o)), (e.child = Vo(e, null, s, o)))
      : Rt(t, e, s, o),
    (e.memoizedState = r.state),
    i && Wh(e, n, !0),
    e.child
  );
}
function Kg(t) {
  var e = t.stateNode;
  e.pendingContext
    ? $h(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && $h(t, e.context, !1),
    yd(t, e.containerInfo);
}
function lp(t, e, n, r, i) {
  return Uo(), dd(i), (e.flags |= 256), Rt(t, e, n, r), e.child;
}
var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
function sf(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function qg(t, e, n) {
  var r = e.pendingProps,
    i = Pe.current,
    o = !1,
    l = (e.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    he(Pe, i & 1),
    t === null)
  )
    return (
      Zc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((l = r.children),
          (t = r.fallback),
          o
            ? ((r = e.mode),
              (o = e.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Pu(l, r, 0, null)),
              (t = zi(t, r, n, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = sf(n)),
              (e.memoizedState = lf),
              t)
            : Cd(e, l))
    );
  if (((i = t.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return i_(t, e, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = e.mode), (i = t.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && e.child !== i
        ? ((r = e.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (e.deletions = null))
        : ((r = ni(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = ni(s, o)) : ((o = zi(o, l, n, null)), (o.flags |= 2)),
      (o.return = e),
      (r.return = e),
      (r.sibling = o),
      (e.child = r),
      (r = o),
      (o = e.child),
      (l = t.child.memoizedState),
      (l =
        l === null
          ? sf(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = t.childLanes & ~n),
      (e.memoizedState = lf),
      r
    );
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (r = ni(o, { mode: "visible", children: r.children })),
    !(e.mode & 1) && (r.lanes = n),
    (r.return = e),
    (r.sibling = null),
    t !== null &&
      ((n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = r),
    (e.memoizedState = null),
    r
  );
}
function Cd(t, e) {
  return (
    (e = Pu({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Ws(t, e, n, r) {
  return (
    r !== null && dd(r),
    Vo(e, t.child, null, n),
    (t = Cd(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function i_(t, e, n, r, i, o, l) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (r = rc(Error(R(422)))), Ws(t, e, l, r))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = r.fallback),
        (i = e.mode),
        (r = Pu({ mode: "visible", children: r.children }, i, 0, null)),
        (o = zi(o, i, l, null)),
        (o.flags |= 2),
        (r.return = e),
        (o.return = e),
        (r.sibling = o),
        (e.child = r),
        e.mode & 1 && Vo(e, t.child, null, l),
        (e.child.memoizedState = sf(l)),
        (e.memoizedState = lf),
        o);
  if (!(e.mode & 1)) return Ws(t, e, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(R(419))), (r = rc(o, r, void 0)), Ws(t, e, l, r);
  }
  if (((s = (l & t.childLanes) !== 0), $t || s)) {
    if (((r = nt), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Sr(t, i), $n(r, t, i, -1));
    }
    return Md(), (r = rc(Error(R(421)))), Ws(t, e, l, r);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = v_.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (an = Zr(i.nextSibling)),
      (cn = e),
      (xe = !0),
      (Bn = null),
      t !== null &&
        ((yn[_n++] = gr),
        (yn[_n++] = vr),
        (yn[_n++] = Vi),
        (gr = t.id),
        (vr = t.overflow),
        (Vi = e)),
      (e = Cd(e, r.children)),
      (e.flags |= 4096),
      e);
}
function sp(t, e, n) {
  t.lanes |= e;
  var r = t.alternate;
  r !== null && (r.lanes |= e), Jc(t.return, e, n);
}
function ic(t, e, n, r, i) {
  var o = t.memoizedState;
  o === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Zg(t, e, n) {
  var r = e.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Rt(t, e, r.children, n), (r = Pe.current), r & 2))
    (r = (r & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && sp(t, n, e);
        else if (t.tag === 19) sp(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    r &= 1;
  }
  if ((he(Pe, r), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = e.child, i = null; n !== null; )
          (t = n.alternate),
            t !== null && Ha(t) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = e.child), (e.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          ic(e, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Ha(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = n), (n = i), (i = t);
        }
        ic(e, !0, n, null, o);
        break;
      case "together":
        ic(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ga(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Tr(t, e, n) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Wi |= e.lanes),
    !(n & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(R(153));
  if (e.child !== null) {
    for (
      t = e.child, n = ni(t, t.pendingProps), e.child = n, n.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (n = n.sibling = ni(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function o_(t, e, n) {
  switch (e.tag) {
    case 3:
      Kg(e), Uo();
      break;
    case 5:
      Pg(e);
      break;
    case 1:
      Ht(e.type) && Fa(e);
      break;
    case 4:
      yd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var r = e.type._context,
        i = e.memoizedProps.value;
      he(Va, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = e.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (he(Pe, Pe.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? qg(t, e, n)
          : (he(Pe, Pe.current & 1),
            (t = Tr(t, e, n)),
            t !== null ? t.sibling : null);
      he(Pe, Pe.current & 1);
      break;
    case 19:
      if (((r = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (r) return Zg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        he(Pe, Pe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Gg(t, e, n);
  }
  return Tr(t, e, n);
}
var Jg, af, e0, t0;
Jg = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
af = function () {};
e0 = function (t, e, n, r) {
  var i = t.memoizedProps;
  if (i !== r) {
    (t = e.stateNode), Ni(rr.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Nc(t, i)), (r = Nc(t, r)), (o = []);
        break;
      case "select":
        (i = Ne({}, i, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Mc(t, i)), (r = Mc(t, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (t.onclick = ba);
    }
    Dc(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ql.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ql.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && ge("scroll", t),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
t0 = function (t, e, n, r) {
  n !== r && (e.flags |= 4);
};
function dl(t, e) {
  if (!xe)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var n = null; e !== null; )
          e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = t.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (r.sibling = null);
    }
}
function yt(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    r = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= r), (t.childLanes = n), e;
}
function l_(t, e, n) {
  var r = e.pendingProps;
  switch ((fd(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return yt(e), null;
    case 1:
      return Ht(e.type) && Aa(), yt(e), null;
    case 3:
      return (
        (r = e.stateNode),
        $o(),
        ye(Wt),
        ye(Pt),
        xd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (t === null || t.child === null) &&
          (Vs(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Bn !== null && (gf(Bn), (Bn = null)))),
        af(t, e),
        yt(e),
        null
      );
    case 5:
      _d(e);
      var i = Ni(ss.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        e0(t, e, n, r, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!r) {
          if (e.stateNode === null) throw Error(R(166));
          return yt(e), null;
        }
        if (((t = Ni(rr.current)), Vs(e))) {
          (r = e.stateNode), (n = e.type);
          var o = e.memoizedProps;
          switch (((r[Zn] = e), (r[os] = o), (t = (e.mode & 1) !== 0), n)) {
            case "dialog":
              ge("cancel", r), ge("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ge("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < xl.length; i++) ge(xl[i], r);
              break;
            case "source":
              ge("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ge("error", r), ge("load", r);
              break;
            case "details":
              ge("toggle", r);
              break;
            case "input":
              gh(r, o), ge("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ge("invalid", r);
              break;
            case "textarea":
              yh(r, o), ge("invalid", r);
          }
          Dc(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Us(r.textContent, s, t),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      Us(r.textContent, s, t),
                    (i = ["children", "" + s]))
                : Ql.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  ge("scroll", r);
            }
          switch (n) {
            case "input":
              zs(r), vh(r, o, !0);
              break;
            case "textarea":
              zs(r), _h(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ba);
          }
          (r = i), (e.updateQueue = r), r !== null && (e.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = Om(n)),
            t === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((t = l.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof r.is == "string"
                ? (t = l.createElement(n, { is: r.is }))
                : ((t = l.createElement(n)),
                  n === "select" &&
                    ((l = t),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (t = l.createElementNS(t, n)),
            (t[Zn] = e),
            (t[os] = r),
            Jg(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((l = Lc(n, r)), n)) {
              case "dialog":
                ge("cancel", t), ge("close", t), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", t), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < xl.length; i++) ge(xl[i], t);
                i = r;
                break;
              case "source":
                ge("error", t), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", t), ge("load", t), (i = r);
                break;
              case "details":
                ge("toggle", t), (i = r);
                break;
              case "input":
                gh(t, r), (i = Nc(t, r)), ge("invalid", t);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Ne({}, r, { value: void 0 })),
                  ge("invalid", t);
                break;
              case "textarea":
                yh(t, r), (i = Mc(t, r)), ge("invalid", t);
                break;
              default:
                i = r;
            }
            Dc(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Rm(t, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Nm(t, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Kl(t, a)
                    : typeof a == "number" && Kl(t, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ql.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && ge("scroll", t)
                      : a != null && Kf(t, o, a, l));
              }
            switch (n) {
              case "input":
                zs(t), vh(t, r, !1);
                break;
              case "textarea":
                zs(t), _h(t);
                break;
              case "option":
                r.value != null && t.setAttribute("value", "" + li(r.value));
                break;
              case "select":
                (t.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Eo(t, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Eo(t, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = ba);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return yt(e), null;
    case 6:
      if (t && e.stateNode != null) t0(t, e, t.memoizedProps, r);
      else {
        if (typeof r != "string" && e.stateNode === null) throw Error(R(166));
        if (((n = Ni(ss.current)), Ni(rr.current), Vs(e))) {
          if (
            ((r = e.stateNode),
            (n = e.memoizedProps),
            (r[Zn] = e),
            (o = r.nodeValue !== n) && ((t = cn), t !== null))
          )
            switch (t.tag) {
              case 3:
                Us(r.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Us(r.nodeValue, n, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Zn] = e),
            (e.stateNode = r);
      }
      return yt(e), null;
    case 13:
      if (
        (ye(Pe),
        (r = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (xe && an !== null && e.mode & 1 && !(e.flags & 128))
          yg(), Uo(), (e.flags |= 98560), (o = !1);
        else if (((o = Vs(e)), r !== null && r.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(R(318));
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(R(317));
            o[Zn] = e;
          } else
            Uo(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          yt(e), (o = !1);
        } else Bn !== null && (gf(Bn), (Bn = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((r = r !== null),
          r !== (t !== null && t.memoizedState !== null) &&
            r &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || Pe.current & 1 ? Qe === 0 && (Qe = 3) : Md())),
          e.updateQueue !== null && (e.flags |= 4),
          yt(e),
          null);
    case 4:
      return (
        $o(), af(t, e), t === null && rs(e.stateNode.containerInfo), yt(e), null
      );
    case 10:
      return md(e.type._context), yt(e), null;
    case 17:
      return Ht(e.type) && Aa(), yt(e), null;
    case 19:
      if ((ye(Pe), (o = e.memoizedState), o === null)) return yt(e), null;
      if (((r = (e.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) dl(o, !1);
        else {
          if (Qe !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((l = Ha(t)), l !== null)) {
                for (
                  e.flags |= 128,
                    dl(o, !1),
                    r = l.updateQueue,
                    r !== null && ((e.updateQueue = r), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    r = n,
                    n = e.child;
                  n !== null;

                )
                  (o = n),
                    (t = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (t = l.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (n = n.sibling);
                return he(Pe, (Pe.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null &&
            Ae() > Ho &&
            ((e.flags |= 128), (r = !0), dl(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!r)
          if (((t = Ha(l)), t !== null)) {
            if (
              ((e.flags |= 128),
              (r = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              dl(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !xe)
            )
              return yt(e), null;
          } else
            2 * Ae() - o.renderingStartTime > Ho &&
              n !== 1073741824 &&
              ((e.flags |= 128), (r = !0), dl(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = e.child), (e.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (e.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = Ae()),
          (e.sibling = null),
          (n = Pe.current),
          he(Pe, r ? (n & 1) | 2 : n & 1),
          e)
        : (yt(e), null);
    case 22:
    case 23:
      return (
        Rd(),
        (r = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== r && (e.flags |= 8192),
        r && e.mode & 1
          ? nn & 1073741824 && (yt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : yt(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, e.tag));
}
function s_(t, e) {
  switch ((fd(e), e.tag)) {
    case 1:
      return (
        Ht(e.type) && Aa(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        $o(),
        ye(Wt),
        ye(Pt),
        xd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return _d(e), null;
    case 13:
      if (
        (ye(Pe), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(R(340));
        Uo();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return ye(Pe), null;
    case 4:
      return $o(), null;
    case 10:
      return md(e.type._context), null;
    case 22:
    case 23:
      return Rd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hs = !1,
  wt = !1,
  a_ = typeof WeakSet == "function" ? WeakSet : Set,
  L = null;
function ko(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Re(t, e, r);
      }
    else n.current = null;
}
function uf(t, e, n) {
  try {
    n();
  } catch (r) {
    Re(t, e, r);
  }
}
var ap = !1;
function u_(t, e) {
  if (((Hc = Da), (t = og()), ud(t))) {
    if ("selectionStart" in t)
      var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            c = 0,
            f = t,
            d = null;
          t: for (;;) {
            for (
              var h;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = l + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (h = f.firstChild) !== null;

            )
              (d = f), (f = h);
            for (;;) {
              if (f === t) break t;
              if (
                (d === n && ++u === i && (s = l),
                d === o && ++c === r && (a = l),
                (h = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = h;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yc = { focusedElem: t, selectionRange: n }, Da = !1, L = e; L !== null; )
    if (((e = L), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (L = t);
    else
      for (; L !== null; ) {
        e = L;
        try {
          var y = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    w = y.memoizedState,
                    m = e.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : An(e.type, g),
                      w
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = e.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (_) {
          Re(e, e.return, _);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (L = t);
          break;
        }
        L = e.return;
      }
  return (y = ap), (ap = !1), y;
}
function Dl(t, e, n) {
  var r = e.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && uf(e, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Su(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== e);
  }
}
function cf(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function n0(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), n0(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Zn], delete e[os], delete e[Qc], delete e[Hy], delete e[Yy])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function r0(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function up(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || r0(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function ff(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = ba));
  else if (r !== 4 && ((t = t.child), t !== null))
    for (ff(t, e, n), t = t.sibling; t !== null; ) ff(t, e, n), (t = t.sibling);
}
function df(t, e, n) {
  var r = t.tag;
  if (r === 5 || r === 6)
    (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (r !== 4 && ((t = t.child), t !== null))
    for (df(t, e, n), t = t.sibling; t !== null; ) df(t, e, n), (t = t.sibling);
}
var lt = null,
  Fn = !1;
function Dr(t, e, n) {
  for (n = n.child; n !== null; ) i0(t, e, n), (n = n.sibling);
}
function i0(t, e, n) {
  if (nr && typeof nr.onCommitFiberUnmount == "function")
    try {
      nr.onCommitFiberUnmount(mu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      wt || ko(n, e);
    case 6:
      var r = lt,
        i = Fn;
      (lt = null),
        Dr(t, e, n),
        (lt = r),
        (Fn = i),
        lt !== null &&
          (Fn
            ? ((t = lt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : lt.removeChild(n.stateNode));
      break;
    case 18:
      lt !== null &&
        (Fn
          ? ((t = lt),
            (n = n.stateNode),
            t.nodeType === 8
              ? qu(t.parentNode, n)
              : t.nodeType === 1 && qu(t, n),
            es(t))
          : qu(lt, n.stateNode));
      break;
    case 4:
      (r = lt),
        (i = Fn),
        (lt = n.stateNode.containerInfo),
        (Fn = !0),
        Dr(t, e, n),
        (lt = r),
        (Fn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !wt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && uf(n, e, l),
            (i = i.next);
        } while (i !== r);
      }
      Dr(t, e, n);
      break;
    case 1:
      if (
        !wt &&
        (ko(n, e),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          Re(n, e, s);
        }
      Dr(t, e, n);
      break;
    case 21:
      Dr(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((wt = (r = wt) || n.memoizedState !== null), Dr(t, e, n), (wt = r))
        : Dr(t, e, n);
      break;
    default:
      Dr(t, e, n);
  }
}
function cp(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new a_()),
      e.forEach(function (r) {
        var i = y_.bind(null, t, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function In(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = t,
          l = e,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (lt = s.stateNode), (Fn = !1);
              break e;
            case 3:
              (lt = s.stateNode.containerInfo), (Fn = !0);
              break e;
            case 4:
              (lt = s.stateNode.containerInfo), (Fn = !0);
              break e;
          }
          s = s.return;
        }
        if (lt === null) throw Error(R(160));
        i0(o, l, i), (lt = null), (Fn = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        Re(i, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) o0(e, t), (e = e.sibling);
}
function o0(t, e) {
  var n = t.alternate,
    r = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((In(e, t), Gn(t), r & 4)) {
        try {
          Dl(3, t, t.return), Su(3, t);
        } catch (g) {
          Re(t, t.return, g);
        }
        try {
          Dl(5, t, t.return);
        } catch (g) {
          Re(t, t.return, g);
        }
      }
      break;
    case 1:
      In(e, t), Gn(t), r & 512 && n !== null && ko(n, n.return);
      break;
    case 5:
      if (
        (In(e, t),
        Gn(t),
        r & 512 && n !== null && ko(n, n.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          Kl(i, "");
        } catch (g) {
          Re(t, t.return, g);
        }
      }
      if (r & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Cm(i, o),
              Lc(s, l);
            var u = Lc(s, o);
            for (l = 0; l < a.length; l += 2) {
              var c = a[l],
                f = a[l + 1];
              c === "style"
                ? Rm(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Nm(i, f)
                : c === "children"
                ? Kl(i, f)
                : Kf(i, c, f, u);
            }
            switch (s) {
              case "input":
                jc(i, o);
                break;
              case "textarea":
                Em(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? Eo(i, !!o.multiple, h, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Eo(i, !!o.multiple, o.defaultValue, !0)
                      : Eo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[os] = o;
          } catch (g) {
            Re(t, t.return, g);
          }
      }
      break;
    case 6:
      if ((In(e, t), Gn(t), r & 4)) {
        if (t.stateNode === null) throw Error(R(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          Re(t, t.return, g);
        }
      }
      break;
    case 3:
      if (
        (In(e, t), Gn(t), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          es(e.containerInfo);
        } catch (g) {
          Re(t, t.return, g);
        }
      break;
    case 4:
      In(e, t), Gn(t);
      break;
    case 13:
      In(e, t),
        Gn(t),
        (i = t.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Nd = Ae())),
        r & 4 && cp(t);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((wt = (u = wt) || c), In(e, t), (wt = u)) : In(e, t),
        Gn(t),
        r & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (L = t, c = t.child; c !== null; ) {
            for (f = L = c; L !== null; ) {
              switch (((d = L), (h = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Dl(4, d, d.return);
                  break;
                case 1:
                  ko(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (e = r),
                        (y.props = e.memoizedProps),
                        (y.state = e.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      Re(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ko(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    dp(f);
                    continue;
                  }
              }
              h !== null ? ((h.return = d), (L = h)) : dp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = t; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = jm("display", l)));
              } catch (g) {
                Re(t, t.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (g) {
                Re(t, t.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === t) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      In(e, t), Gn(t), r & 4 && cp(t);
      break;
    case 21:
      break;
    default:
      In(e, t), Gn(t);
  }
}
function Gn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (r0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Kl(i, ""), (r.flags &= -33));
          var o = up(t);
          df(t, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = up(t);
          ff(t, s, l);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      Re(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function c_(t, e, n) {
  (L = t), l0(t);
}
function l0(t, e, n) {
  for (var r = (t.mode & 1) !== 0; L !== null; ) {
    var i = L,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || Hs;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || wt;
        s = Hs;
        var u = wt;
        if (((Hs = l), (wt = a) && !u))
          for (L = i; L !== null; )
            (l = L),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? hp(i)
                : a !== null
                ? ((a.return = l), (L = a))
                : hp(i);
        for (; o !== null; ) (L = o), l0(o), (o = o.sibling);
        (L = i), (Hs = s), (wt = u);
      }
      fp(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (L = o)) : fp(t);
  }
}
function fp(t) {
  for (; L !== null; ) {
    var e = L;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              wt || Su(5, e);
              break;
            case 1:
              var r = e.stateNode;
              if (e.flags & 4 && !wt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? n.memoizedProps
                      : An(e.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && Gh(e, o, r);
              break;
            case 3:
              var l = e.updateQueue;
              if (l !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                Gh(e, l, n);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (n === null && e.flags & 4) {
                n = s;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && es(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        wt || (e.flags & 512 && cf(e));
      } catch (d) {
        Re(e, e.return, d);
      }
    }
    if (e === t) {
      L = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (L = n);
      break;
    }
    L = e.return;
  }
}
function dp(t) {
  for (; L !== null; ) {
    var e = L;
    if (e === t) {
      L = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (L = n);
      break;
    }
    L = e.return;
  }
}
function hp(t) {
  for (; L !== null; ) {
    var e = L;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Su(4, e);
          } catch (a) {
            Re(e, n, a);
          }
          break;
        case 1:
          var r = e.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = e.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Re(e, i, a);
            }
          }
          var o = e.return;
          try {
            cf(e);
          } catch (a) {
            Re(e, o, a);
          }
          break;
        case 5:
          var l = e.return;
          try {
            cf(e);
          } catch (a) {
            Re(e, l, a);
          }
      }
    } catch (a) {
      Re(e, e.return, a);
    }
    if (e === t) {
      L = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      (s.return = e.return), (L = s);
      break;
    }
    L = e.return;
  }
}
var f_ = Math.ceil,
  Ga = Er.ReactCurrentDispatcher,
  Ed = Er.ReactCurrentOwner,
  Pn = Er.ReactCurrentBatchConfig,
  ie = 0,
  nt = null,
  We = null,
  ut = 0,
  nn = 0,
  So = di(0),
  Qe = 0,
  fs = null,
  Wi = 0,
  Tu = 0,
  Od = 0,
  Ll = null,
  Vt = null,
  Nd = 0,
  Ho = 1 / 0,
  fr = null,
  Qa = !1,
  hf = null,
  ei = null,
  Ys = !1,
  Vr = null,
  Ka = 0,
  Il = 0,
  pf = null,
  va = -1,
  ya = 0;
function bt() {
  return ie & 6 ? Ae() : va !== -1 ? va : (va = Ae());
}
function ti(t) {
  return t.mode & 1
    ? ie & 2 && ut !== 0
      ? ut & -ut
      : Gy.transition !== null
      ? (ya === 0 && (ya = $m()), ya)
      : ((t = ae),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Km(t.type))),
        t)
    : 1;
}
function $n(t, e, n, r) {
  if (50 < Il) throw ((Il = 0), (pf = null), Error(R(185)));
  ks(t, n, r),
    (!(ie & 2) || t !== nt) &&
      (t === nt && (!(ie & 2) && (Tu |= n), Qe === 4 && Br(t, ut)),
      Yt(t, r),
      n === 1 && ie === 0 && !(e.mode & 1) && ((Ho = Ae() + 500), xu && hi()));
}
function Yt(t, e) {
  var n = t.callbackNode;
  Gv(t, e);
  var r = za(t, t === nt ? ut : 0);
  if (r === 0)
    n !== null && kh(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = r & -r), t.callbackPriority !== e)) {
    if ((n != null && kh(n), e === 1))
      t.tag === 0 ? Xy(pp.bind(null, t)) : mg(pp.bind(null, t)),
        $y(function () {
          !(ie & 6) && hi();
        }),
        (n = null);
    else {
      switch (Wm(r)) {
        case 1:
          n = td;
          break;
        case 4:
          n = Um;
          break;
        case 16:
          n = Ma;
          break;
        case 536870912:
          n = Vm;
          break;
        default:
          n = Ma;
      }
      n = p0(n, s0.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function s0(t, e) {
  if (((va = -1), (ya = 0), ie & 6)) throw Error(R(327));
  var n = t.callbackNode;
  if (Mo() && t.callbackNode !== n) return null;
  var r = za(t, t === nt ? ut : 0);
  if (r === 0) return null;
  if (r & 30 || r & t.expiredLanes || e) e = qa(t, r);
  else {
    e = r;
    var i = ie;
    ie |= 2;
    var o = u0();
    (nt !== t || ut !== e) && ((fr = null), (Ho = Ae() + 500), Mi(t, e));
    do
      try {
        p_();
        break;
      } catch (s) {
        a0(t, s);
      }
    while (!0);
    pd(),
      (Ga.current = o),
      (ie = i),
      We !== null ? (e = 0) : ((nt = null), (ut = 0), (e = Qe));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Bc(t)), i !== 0 && ((r = i), (e = mf(t, i)))), e === 1)
    )
      throw ((n = fs), Mi(t, 0), Br(t, r), Yt(t, Ae()), n);
    if (e === 6) Br(t, r);
    else {
      if (
        ((i = t.current.alternate),
        !(r & 30) &&
          !d_(i) &&
          ((e = qa(t, r)),
          e === 2 && ((o = Bc(t)), o !== 0 && ((r = o), (e = mf(t, o)))),
          e === 1))
      )
        throw ((n = fs), Mi(t, 0), Br(t, r), Yt(t, Ae()), n);
      switch (((t.finishedWork = i), (t.finishedLanes = r), e)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          Si(t, Vt, fr);
          break;
        case 3:
          if (
            (Br(t, r), (r & 130023424) === r && ((e = Nd + 500 - Ae()), 10 < e))
          ) {
            if (za(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & r) !== r)) {
              bt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = Gc(Si.bind(null, t, Vt, fr), e);
            break;
          }
          Si(t, Vt, fr);
          break;
        case 4:
          if ((Br(t, r), (r & 4194240) === r)) break;
          for (e = t.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Vn(r);
            (o = 1 << l), (l = e[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = Ae() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * f_(r / 1960)) - r),
            10 < r)
          ) {
            t.timeoutHandle = Gc(Si.bind(null, t, Vt, fr), r);
            break;
          }
          Si(t, Vt, fr);
          break;
        case 5:
          Si(t, Vt, fr);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return Yt(t, Ae()), t.callbackNode === n ? s0.bind(null, t) : null;
}
function mf(t, e) {
  var n = Ll;
  return (
    t.current.memoizedState.isDehydrated && (Mi(t, e).flags |= 256),
    (t = qa(t, e)),
    t !== 2 && ((e = Vt), (Vt = n), e !== null && gf(e)),
    t
  );
}
function gf(t) {
  Vt === null ? (Vt = t) : Vt.push.apply(Vt, t);
}
function d_(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Wn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
      (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Br(t, e) {
  for (
    e &= ~Od,
      e &= ~Tu,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Vn(e),
      r = 1 << n;
    (t[n] = -1), (e &= ~r);
  }
}
function pp(t) {
  if (ie & 6) throw Error(R(327));
  Mo();
  var e = za(t, 0);
  if (!(e & 1)) return Yt(t, Ae()), null;
  var n = qa(t, e);
  if (t.tag !== 0 && n === 2) {
    var r = Bc(t);
    r !== 0 && ((e = r), (n = mf(t, r)));
  }
  if (n === 1) throw ((n = fs), Mi(t, 0), Br(t, e), Yt(t, Ae()), n);
  if (n === 6) throw Error(R(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Si(t, Vt, fr),
    Yt(t, Ae()),
    null
  );
}
function jd(t, e) {
  var n = ie;
  ie |= 1;
  try {
    return t(e);
  } finally {
    (ie = n), ie === 0 && ((Ho = Ae() + 500), xu && hi());
  }
}
function Hi(t) {
  Vr !== null && Vr.tag === 0 && !(ie & 6) && Mo();
  var e = ie;
  ie |= 1;
  var n = Pn.transition,
    r = ae;
  try {
    if (((Pn.transition = null), (ae = 1), t)) return t();
  } finally {
    (ae = r), (Pn.transition = n), (ie = e), !(ie & 6) && hi();
  }
}
function Rd() {
  (nn = So.current), ye(So);
}
function Mi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), Vy(n)), We !== null))
    for (n = We.return; n !== null; ) {
      var r = n;
      switch ((fd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Aa();
          break;
        case 3:
          $o(), ye(Wt), ye(Pt), xd();
          break;
        case 5:
          _d(r);
          break;
        case 4:
          $o();
          break;
        case 13:
          ye(Pe);
          break;
        case 19:
          ye(Pe);
          break;
        case 10:
          md(r.type._context);
          break;
        case 22:
        case 23:
          Rd();
      }
      n = n.return;
    }
  if (
    ((nt = t),
    (We = t = ni(t.current, null)),
    (ut = nn = e),
    (Qe = 0),
    (fs = null),
    (Od = Tu = Wi = 0),
    (Vt = Ll = null),
    Oi !== null)
  ) {
    for (e = 0; e < Oi.length; e++)
      if (((n = Oi[e]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Oi = null;
  }
  return t;
}
function a0(t, e) {
  do {
    var n = We;
    try {
      if ((pd(), (pa.current = Xa), Ya)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ya = !1;
      }
      if (
        (($i = 0),
        (et = Xe = Oe = null),
        (zl = !1),
        (as = 0),
        (Ed.current = null),
        n === null || n.return === null)
      ) {
        (Qe = 1), (fs = e), (We = null);
        break;
      }
      e: {
        var o = t,
          l = n.return,
          s = n,
          a = e;
        if (
          ((e = ut),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = tp(l);
          if (h !== null) {
            (h.flags &= -257),
              np(h, l, s, o, e),
              h.mode & 1 && ep(o, u, e),
              (e = h),
              (a = u);
            var y = e.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(a), (e.updateQueue = g);
            } else y.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              ep(o, u, e), Md();
              break e;
            }
            a = Error(R(426));
          }
        } else if (xe && s.mode & 1) {
          var w = tp(l);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              np(w, l, s, o, e),
              dd(Wo(a, s));
            break e;
          }
        }
        (o = a = Wo(a, s)),
          Qe !== 4 && (Qe = 2),
          Ll === null ? (Ll = [o]) : Ll.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var m = Hg(o, a, e);
              Xh(o, m);
              break e;
            case 1:
              s = a;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (ei === null || !ei.has(v))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var _ = Yg(o, s, e);
                Xh(o, _);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      f0(n);
    } catch (P) {
      (e = P), We === n && n !== null && (We = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function u0() {
  var t = Ga.current;
  return (Ga.current = Xa), t === null ? Xa : t;
}
function Md() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    nt === null || (!(Wi & 268435455) && !(Tu & 268435455)) || Br(nt, ut);
}
function qa(t, e) {
  var n = ie;
  ie |= 2;
  var r = u0();
  (nt !== t || ut !== e) && ((fr = null), Mi(t, e));
  do
    try {
      h_();
      break;
    } catch (i) {
      a0(t, i);
    }
  while (!0);
  if ((pd(), (ie = n), (Ga.current = r), We !== null)) throw Error(R(261));
  return (nt = null), (ut = 0), Qe;
}
function h_() {
  for (; We !== null; ) c0(We);
}
function p_() {
  for (; We !== null && !Fv(); ) c0(We);
}
function c0(t) {
  var e = h0(t.alternate, t, nn);
  (t.memoizedProps = t.pendingProps),
    e === null ? f0(t) : (We = e),
    (Ed.current = null);
}
function f0(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = s_(n, e)), n !== null)) {
        (n.flags &= 32767), (We = n);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Qe = 6), (We = null);
        return;
      }
    } else if (((n = l_(n, e, nn)), n !== null)) {
      We = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      We = e;
      return;
    }
    We = e = t;
  } while (e !== null);
  Qe === 0 && (Qe = 5);
}
function Si(t, e, n) {
  var r = ae,
    i = Pn.transition;
  try {
    (Pn.transition = null), (ae = 1), m_(t, e, n, r);
  } finally {
    (Pn.transition = i), (ae = r);
  }
  return null;
}
function m_(t, e, n, r) {
  do Mo();
  while (Vr !== null);
  if (ie & 6) throw Error(R(327));
  n = t.finishedWork;
  var i = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current))
    throw Error(R(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Qv(t, o),
    t === nt && ((We = nt = null), (ut = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ys ||
      ((Ys = !0),
      p0(Ma, function () {
        return Mo(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Pn.transition), (Pn.transition = null);
    var l = ae;
    ae = 1;
    var s = ie;
    (ie |= 4),
      (Ed.current = null),
      u_(t, n),
      o0(n, t),
      Ly(Yc),
      (Da = !!Hc),
      (Yc = Hc = null),
      (t.current = n),
      c_(n),
      Bv(),
      (ie = s),
      (ae = l),
      (Pn.transition = o);
  } else t.current = n;
  if (
    (Ys && ((Ys = !1), (Vr = t), (Ka = i)),
    (o = t.pendingLanes),
    o === 0 && (ei = null),
    $v(n.stateNode),
    Yt(t, Ae()),
    e !== null)
  )
    for (r = t.onRecoverableError, n = 0; n < e.length; n++)
      (i = e[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Qa) throw ((Qa = !1), (t = hf), (hf = null), t);
  return (
    Ka & 1 && t.tag !== 0 && Mo(),
    (o = t.pendingLanes),
    o & 1 ? (t === pf ? Il++ : ((Il = 0), (pf = t))) : (Il = 0),
    hi(),
    null
  );
}
function Mo() {
  if (Vr !== null) {
    var t = Wm(Ka),
      e = Pn.transition,
      n = ae;
    try {
      if (((Pn.transition = null), (ae = 16 > t ? 16 : t), Vr === null))
        var r = !1;
      else {
        if (((t = Vr), (Vr = null), (Ka = 0), ie & 6)) throw Error(R(331));
        var i = ie;
        for (ie |= 4, L = t.current; L !== null; ) {
          var o = L,
            l = o.child;
          if (L.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (L = u; L !== null; ) {
                  var c = L;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Dl(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (L = f);
                  else
                    for (; L !== null; ) {
                      c = L;
                      var d = c.sibling,
                        h = c.return;
                      if ((n0(c), c === u)) {
                        L = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = h), (L = d);
                        break;
                      }
                      L = h;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              L = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (L = l);
          else
            e: for (; L !== null; ) {
              if (((o = L), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Dl(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (L = m);
                break e;
              }
              L = o.return;
            }
        }
        var p = t.current;
        for (L = p; L !== null; ) {
          l = L;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (L = v);
          else
            e: for (l = p; L !== null; ) {
              if (((s = L), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Su(9, s);
                  }
                } catch (P) {
                  Re(s, s.return, P);
                }
              if (s === l) {
                L = null;
                break e;
              }
              var _ = s.sibling;
              if (_ !== null) {
                (_.return = s.return), (L = _);
                break e;
              }
              L = s.return;
            }
        }
        if (
          ((ie = i), hi(), nr && typeof nr.onPostCommitFiberRoot == "function")
        )
          try {
            nr.onPostCommitFiberRoot(mu, t);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (Pn.transition = e);
    }
  }
  return !1;
}
function mp(t, e, n) {
  (e = Wo(n, e)),
    (e = Hg(t, e, 1)),
    (t = Jr(t, e, 1)),
    (e = bt()),
    t !== null && (ks(t, 1, e), Yt(t, e));
}
function Re(t, e, n) {
  if (t.tag === 3) mp(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        mp(e, t, n);
        break;
      } else if (e.tag === 1) {
        var r = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ei === null || !ei.has(r)))
        ) {
          (t = Wo(n, t)),
            (t = Yg(e, t, 1)),
            (e = Jr(e, t, 1)),
            (t = bt()),
            e !== null && (ks(e, 1, t), Yt(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function g_(t, e, n) {
  var r = t.pingCache;
  r !== null && r.delete(e),
    (e = bt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    nt === t &&
      (ut & n) === n &&
      (Qe === 4 || (Qe === 3 && (ut & 130023424) === ut && 500 > Ae() - Nd)
        ? Mi(t, 0)
        : (Od |= n)),
    Yt(t, e);
}
function d0(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Is), (Is <<= 1), !(Is & 130023424) && (Is = 4194304))
      : (e = 1));
  var n = bt();
  (t = Sr(t, e)), t !== null && (ks(t, e, n), Yt(t, n));
}
function v_(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), d0(t, n);
}
function y_(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var r = t.stateNode,
        i = t.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = t.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(e), d0(t, n);
}
var h0;
h0 = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Wt.current) $t = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return ($t = !1), o_(t, e, n);
      $t = !!(t.flags & 131072);
    }
  else ($t = !1), xe && e.flags & 1048576 && gg(e, Ua, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var r = e.type;
      ga(t, e), (t = e.pendingProps);
      var i = Bo(e, Pt.current);
      Ro(e, n), (i = kd(null, e, r, t, i, n));
      var o = Sd();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            Ht(r) ? ((o = !0), Fa(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            vd(e),
            (i.updater = wu),
            (e.stateNode = i),
            (i._reactInternals = e),
            tf(e, r, t, n),
            (e = of(null, e, r, !0, o, n)))
          : ((e.tag = 0), xe && o && cd(e), Rt(null, e, i, n), (e = e.child)),
        e
      );
    case 16:
      r = e.elementType;
      e: {
        switch (
          (ga(t, e),
          (t = e.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (e.type = r),
          (i = e.tag = x_(r)),
          (t = An(r, t)),
          i)
        ) {
          case 0:
            e = rf(null, e, r, t, n);
            break e;
          case 1:
            e = op(null, e, r, t, n);
            break e;
          case 11:
            e = rp(null, e, r, t, n);
            break e;
          case 14:
            e = ip(null, e, r, An(r.type, t), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return e;
    case 0:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : An(r, i)),
        rf(t, e, r, i, n)
      );
    case 1:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : An(r, i)),
        op(t, e, r, i, n)
      );
    case 3:
      e: {
        if ((Kg(e), t === null)) throw Error(R(387));
        (r = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          xg(t, e),
          Wa(e, r, null, n);
        var l = e.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            (i = Wo(Error(R(423)), e)), (e = lp(t, e, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Wo(Error(R(424)), e)), (e = lp(t, e, r, n, i));
            break e;
          } else
            for (
              an = Zr(e.stateNode.containerInfo.firstChild),
                cn = e,
                xe = !0,
                Bn = null,
                n = Tg(e, null, r, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Uo(), r === i)) {
            e = Tr(t, e, n);
            break e;
          }
          Rt(t, e, r, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Pg(e),
        t === null && Zc(e),
        (r = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (l = i.children),
        Xc(r, i) ? (l = null) : o !== null && Xc(r, o) && (e.flags |= 32),
        Qg(t, e),
        Rt(t, e, l, n),
        e.child
      );
    case 6:
      return t === null && Zc(e), null;
    case 13:
      return qg(t, e, n);
    case 4:
      return (
        yd(e, e.stateNode.containerInfo),
        (r = e.pendingProps),
        t === null ? (e.child = Vo(e, null, r, n)) : Rt(t, e, r, n),
        e.child
      );
    case 11:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : An(r, i)),
        rp(t, e, r, i, n)
      );
    case 7:
      return Rt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Rt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Rt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((r = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (l = i.value),
          he(Va, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (Wn(o.value, l)) {
            if (o.children === i.children && !Wt.current) {
              e = Tr(t, e, n);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = _r(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Jc(o.return, n, e),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(R(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Jc(l, n, e),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === e) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Rt(t, e, i.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (r = e.pendingProps.children),
        Ro(e, n),
        (i = En(i)),
        (r = r(i)),
        (e.flags |= 1),
        Rt(t, e, r, n),
        e.child
      );
    case 14:
      return (
        (r = e.type),
        (i = An(r, e.pendingProps)),
        (i = An(r.type, i)),
        ip(t, e, r, i, n)
      );
    case 15:
      return Xg(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (r = e.type),
        (i = e.pendingProps),
        (i = e.elementType === r ? i : An(r, i)),
        ga(t, e),
        (e.tag = 1),
        Ht(r) ? ((t = !0), Fa(e)) : (t = !1),
        Ro(e, n),
        kg(e, r, i),
        tf(e, r, i, n),
        of(null, e, r, !0, t, n)
      );
    case 19:
      return Zg(t, e, n);
    case 22:
      return Gg(t, e, n);
  }
  throw Error(R(156, e.tag));
};
function p0(t, e) {
  return Bm(t, e);
}
function __(t, e, n, r) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function kn(t, e, n, r) {
  return new __(t, e, n, r);
}
function zd(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function x_(t) {
  if (typeof t == "function") return zd(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Zf)) return 11;
    if (t === Jf) return 14;
  }
  return 2;
}
function ni(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = kn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function _a(t, e, n, r, i, o) {
  var l = 2;
  if (((r = t), typeof t == "function")) zd(t) && (l = 1);
  else if (typeof t == "string") l = 5;
  else
    e: switch (t) {
      case ho:
        return zi(n.children, i, o, e);
      case qf:
        (l = 8), (i |= 8);
        break;
      case Pc:
        return (
          (t = kn(12, n, e, i | 2)), (t.elementType = Pc), (t.lanes = o), t
        );
      case Cc:
        return (t = kn(13, n, e, i)), (t.elementType = Cc), (t.lanes = o), t;
      case Ec:
        return (t = kn(19, n, e, i)), (t.elementType = Ec), (t.lanes = o), t;
      case Sm:
        return Pu(n, i, o, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case wm:
              l = 10;
              break e;
            case km:
              l = 9;
              break e;
            case Zf:
              l = 11;
              break e;
            case Jf:
              l = 14;
              break e;
            case br:
              (l = 16), (r = null);
              break e;
          }
        throw Error(R(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = kn(l, n, e, i)), (e.elementType = t), (e.type = r), (e.lanes = o), e
  );
}
function zi(t, e, n, r) {
  return (t = kn(7, t, r, e)), (t.lanes = n), t;
}
function Pu(t, e, n, r) {
  return (
    (t = kn(22, t, r, e)),
    (t.elementType = Sm),
    (t.lanes = n),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function oc(t, e, n) {
  return (t = kn(6, t, null, e)), (t.lanes = n), t;
}
function lc(t, e, n) {
  return (
    (e = kn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function w_(t, e, n, r, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bu(0)),
    (this.expirationTimes = Bu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Dd(t, e, n, r, i, o, l, s, a) {
  return (
    (t = new w_(t, e, n, s, a)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = kn(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    vd(o),
    t
  );
}
function k_(t, e, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: fo,
    key: r == null ? null : "" + r,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function m0(t) {
  if (!t) return si;
  t = t._reactInternals;
  e: {
    if (Zi(t) !== t || t.tag !== 1) throw Error(R(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (Ht(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(R(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (Ht(n)) return pg(t, n, e);
  }
  return e;
}
function g0(t, e, n, r, i, o, l, s, a) {
  return (
    (t = Dd(n, r, !0, t, i, o, l, s, a)),
    (t.context = m0(null)),
    (n = t.current),
    (r = bt()),
    (i = ti(n)),
    (o = _r(r, i)),
    (o.callback = e ?? null),
    Jr(n, o, i),
    (t.current.lanes = i),
    ks(t, i, r),
    Yt(t, r),
    t
  );
}
function Cu(t, e, n, r) {
  var i = e.current,
    o = bt(),
    l = ti(i);
  return (
    (n = m0(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = _r(o, l)),
    (e.payload = { element: t }),
    (r = r === void 0 ? null : r),
    r !== null && (e.callback = r),
    (t = Jr(i, e, l)),
    t !== null && ($n(t, i, l, o), ha(t, i, l)),
    l
  );
}
function Za(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function gp(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Ld(t, e) {
  gp(t, e), (t = t.alternate) && gp(t, e);
}
function S_() {
  return null;
}
var v0 =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Id(t) {
  this._internalRoot = t;
}
Eu.prototype.render = Id.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(R(409));
  Cu(t, e, null, null);
};
Eu.prototype.unmount = Id.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Hi(function () {
      Cu(null, t, null, null);
    }),
      (e[kr] = null);
  }
};
function Eu(t) {
  this._internalRoot = t;
}
Eu.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Xm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Fr.length && e !== 0 && e < Fr[n].priority; n++);
    Fr.splice(n, 0, t), n === 0 && Qm(t);
  }
};
function bd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Ou(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function vp() {}
function T_(t, e, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Za(l);
        o.call(u);
      };
    }
    var l = g0(e, r, t, 0, null, !1, !1, "", vp);
    return (
      (t._reactRootContainer = l),
      (t[kr] = l.current),
      rs(t.nodeType === 8 ? t.parentNode : t),
      Hi(),
      l
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = Za(a);
      s.call(u);
    };
  }
  var a = Dd(t, 0, !1, null, null, !1, !1, "", vp);
  return (
    (t._reactRootContainer = a),
    (t[kr] = a.current),
    rs(t.nodeType === 8 ? t.parentNode : t),
    Hi(function () {
      Cu(e, a, n, r);
    }),
    a
  );
}
function Nu(t, e, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = Za(l);
        s.call(a);
      };
    }
    Cu(e, l, t, i);
  } else l = T_(n, e, t, i, r);
  return Za(l);
}
Hm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = _l(e.pendingLanes);
        n !== 0 &&
          (nd(e, n | 1), Yt(e, Ae()), !(ie & 6) && ((Ho = Ae() + 500), hi()));
      }
      break;
    case 13:
      Hi(function () {
        var r = Sr(t, 1);
        if (r !== null) {
          var i = bt();
          $n(r, t, 1, i);
        }
      }),
        Ld(t, 1);
  }
};
rd = function (t) {
  if (t.tag === 13) {
    var e = Sr(t, 134217728);
    if (e !== null) {
      var n = bt();
      $n(e, t, 134217728, n);
    }
    Ld(t, 134217728);
  }
};
Ym = function (t) {
  if (t.tag === 13) {
    var e = ti(t),
      n = Sr(t, e);
    if (n !== null) {
      var r = bt();
      $n(n, t, e, r);
    }
    Ld(t, e);
  }
};
Xm = function () {
  return ae;
};
Gm = function (t, e) {
  var n = ae;
  try {
    return (ae = t), e();
  } finally {
    ae = n;
  }
};
bc = function (t, e, n) {
  switch (e) {
    case "input":
      if ((jc(t, n), (e = n.name), n.type === "radio" && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < n.length;
          e++
        ) {
          var r = n[e];
          if (r !== t && r.form === t.form) {
            var i = _u(r);
            if (!i) throw Error(R(90));
            Pm(r), jc(r, i);
          }
        }
      }
      break;
    case "textarea":
      Em(t, n);
      break;
    case "select":
      (e = n.value), e != null && Eo(t, !!n.multiple, e, !1);
  }
};
Dm = jd;
Lm = Hi;
var P_ = { usingClientEntryPoint: !1, Events: [Ts, vo, _u, Mm, zm, jd] },
  hl = {
    findFiberByHostInstance: Ei,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  C_ = {
    bundleType: hl.bundleType,
    version: hl.version,
    rendererPackageName: hl.rendererPackageName,
    rendererConfig: hl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Er.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Am(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: hl.findFiberByHostInstance || S_,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xs.isDisabled && Xs.supportsFiber)
    try {
      (mu = Xs.inject(C_)), (nr = Xs);
    } catch {}
}
pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P_;
pn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bd(e)) throw Error(R(200));
  return k_(t, e, null, n);
};
pn.createRoot = function (t, e) {
  if (!bd(t)) throw Error(R(299));
  var n = !1,
    r = "",
    i = v0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (r = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = Dd(t, 1, !1, null, null, n, !1, r, i)),
    (t[kr] = e.current),
    rs(t.nodeType === 8 ? t.parentNode : t),
    new Id(e)
  );
};
pn.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(R(188))
      : ((t = Object.keys(t).join(",")), Error(R(268, t)));
  return (t = Am(e)), (t = t === null ? null : t.stateNode), t;
};
pn.flushSync = function (t) {
  return Hi(t);
};
pn.hydrate = function (t, e, n) {
  if (!Ou(e)) throw Error(R(200));
  return Nu(null, t, e, !0, n);
};
pn.hydrateRoot = function (t, e, n) {
  if (!bd(t)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = v0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (e = g0(e, null, t, 1, n ?? null, i, !1, o, l)),
    (t[kr] = e.current),
    rs(t),
    r)
  )
    for (t = 0; t < r.length; t++)
      (n = r[t]),
        (i = n._getVersion),
        (i = i(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, i])
          : e.mutableSourceEagerHydrationData.push(n, i);
  return new Eu(e);
};
pn.render = function (t, e, n) {
  if (!Ou(e)) throw Error(R(200));
  return Nu(null, t, e, !1, n);
};
pn.unmountComponentAtNode = function (t) {
  if (!Ou(t)) throw Error(R(40));
  return t._reactRootContainer
    ? (Hi(function () {
        Nu(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[kr] = null);
        });
      }),
      !0)
    : !1;
};
pn.unstable_batchedUpdates = jd;
pn.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
  if (!Ou(n)) throw Error(R(200));
  if (t == null || t._reactInternals === void 0) throw Error(R(38));
  return Nu(t, e, n, !1, r);
};
pn.version = "18.2.0-next-9e3b772b8-20220608";
function y0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y0);
    } catch (t) {
      console.error(t);
    }
}
y0(), (gm.exports = pn);
var E_ = gm.exports,
  yp = E_;
(Sc.createRoot = yp.createRoot), (Sc.hydrateRoot = yp.hydrateRoot);
var _0 = { exports: {} };
(function (t, e) {
  (function (r, i) {
    t.exports = i(fe);
  })(typeof self < "u" ? self : nv, function (n) {
    return (function (r) {
      var i = {};
      function o(l) {
        if (i[l]) return i[l].exports;
        var s = (i[l] = { i: l, l: !1, exports: {} });
        return r[l].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
      }
      return (
        (o.m = r),
        (o.c = i),
        (o.d = function (l, s, a) {
          o.o(l, s) ||
            Object.defineProperty(l, s, {
              configurable: !1,
              enumerable: !0,
              get: a,
            });
        }),
        (o.n = function (l) {
          var s =
            l && l.__esModule
              ? function () {
                  return l.default;
                }
              : function () {
                  return l;
                };
          return o.d(s, "a", s), s;
        }),
        (o.o = function (l, s) {
          return Object.prototype.hasOwnProperty.call(l, s);
        }),
        (o.p = ""),
        o((o.s = 0))
      );
    })([
      function (r, i, o) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var l = o(1),
          s = a(l);
        function a(u) {
          return u && u.__esModule ? u : { default: u };
        }
        i.default = s.default;
      },
      function (r, i, o) {
        Object.defineProperty(i, "__esModule", { value: !0 });
        var l =
            Object.assign ||
            function (w) {
              for (var m = 1; m < arguments.length; m++) {
                var p = arguments[m];
                for (var v in p)
                  Object.prototype.hasOwnProperty.call(p, v) && (w[v] = p[v]);
              }
              return w;
            },
          s = (function () {
            function w(m, p) {
              for (var v = 0; v < p.length; v++) {
                var _ = p[v];
                (_.enumerable = _.enumerable || !1),
                  (_.configurable = !0),
                  "value" in _ && (_.writable = !0),
                  Object.defineProperty(m, _.key, _);
              }
            }
            return function (m, p, v) {
              return p && w(m.prototype, p), v && w(m, v), m;
            };
          })(),
          a = o(2),
          u = c(a);
        function c(w) {
          return w && w.__esModule ? w : { default: w };
        }
        function f(w, m) {
          var p = {};
          for (var v in w)
            m.indexOf(v) >= 0 ||
              (Object.prototype.hasOwnProperty.call(w, v) && (p[v] = w[v]));
          return p;
        }
        function d(w, m) {
          if (!(w instanceof m))
            throw new TypeError("Cannot call a class as a function");
        }
        function h(w, m) {
          if (!w)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return m && (typeof m == "object" || typeof m == "function") ? m : w;
        }
        function y(w, m) {
          if (typeof m != "function" && m !== null)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof m
            );
          (w.prototype = Object.create(m && m.prototype, {
            constructor: {
              value: w,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            m &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(w, m)
                : (w.__proto__ = m));
        }
        var g = (function (w) {
          y(m, w);
          function m(p) {
            d(this, m);
            var v = h(
              this,
              (m.__proto__ || Object.getPrototypeOf(m)).call(this, p)
            );
            return (v.smoothScroll = v.smoothScroll.bind(v)), v;
          }
          return (
            s(m, [
              {
                key: "componentDidMount",
                value: function () {
                  o(3).polyfill();
                },
              },
              {
                key: "smoothScroll",
                value: function (v) {
                  var _ = this;
                  v.preventDefault();
                  var P = function () {
                    return 0;
                  };
                  typeof this.props.offset < "u" &&
                    (this.props.offset &&
                    this.props.offset.constructor &&
                    this.props.offset.apply
                      ? (P = this.props.offset)
                      : (P = function () {
                          return parseInt(_.props.offset);
                        }));
                  var C = v.currentTarget.getAttribute("href").slice(1),
                    T = document.getElementById(C),
                    k = T.getBoundingClientRect().top + window.pageYOffset;
                  window.scroll({ top: k - P(), behavior: "smooth" }),
                    this.props.onClick && this.props.onClick(v);
                },
              },
              {
                key: "render",
                value: function () {
                  var v = this.props;
                  v.offset;
                  var _ = f(v, ["offset"]);
                  return u.default.createElement(
                    "a",
                    l({}, _, { onClick: this.smoothScroll })
                  );
                },
              },
            ]),
            m
          );
        })(a.Component);
        i.default = g;
      },
      function (r, i) {
        r.exports = n;
      },
      function (r, i, o) {
        (function () {
          function l() {
            var s = window,
              a = document;
            if (
              "scrollBehavior" in a.documentElement.style &&
              s.__forceSmoothScrollPolyfill__ !== !0
            )
              return;
            var u = s.HTMLElement || s.Element,
              c = 468,
              f = {
                scroll: s.scroll || s.scrollTo,
                scrollBy: s.scrollBy,
                elementScroll: u.prototype.scroll || g,
                scrollIntoView: u.prototype.scrollIntoView,
              },
              d =
                s.performance && s.performance.now
                  ? s.performance.now.bind(s.performance)
                  : Date.now;
            function h(k) {
              var E = ["MSIE ", "Trident/", "Edge/"];
              return new RegExp(E.join("|")).test(k);
            }
            var y = h(s.navigator.userAgent) ? 1 : 0;
            function g(k, E) {
              (this.scrollLeft = k), (this.scrollTop = E);
            }
            function w(k) {
              return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            function m(k) {
              if (
                k === null ||
                typeof k != "object" ||
                k.behavior === void 0 ||
                k.behavior === "auto" ||
                k.behavior === "instant"
              )
                return !0;
              if (typeof k == "object" && k.behavior === "smooth") return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  k.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function p(k, E) {
              if (E === "Y") return k.clientHeight + y < k.scrollHeight;
              if (E === "X") return k.clientWidth + y < k.scrollWidth;
            }
            function v(k, E) {
              var O = s.getComputedStyle(k, null)["overflow" + E];
              return O === "auto" || O === "scroll";
            }
            function _(k) {
              var E = p(k, "Y") && v(k, "Y"),
                O = p(k, "X") && v(k, "X");
              return E || O;
            }
            function P(k) {
              var E;
              do (k = k.parentNode), (E = k === a.body);
              while (E === !1 && _(k) === !1);
              return (E = null), k;
            }
            function C(k) {
              var E = d(),
                O,
                b,
                M,
                A = (E - k.startTime) / c;
              (A = A > 1 ? 1 : A),
                (O = w(A)),
                (b = k.startX + (k.x - k.startX) * O),
                (M = k.startY + (k.y - k.startY) * O),
                k.method.call(k.scrollable, b, M),
                (b !== k.x || M !== k.y) &&
                  s.requestAnimationFrame(C.bind(s, k));
            }
            function T(k, E, O) {
              var b,
                M,
                A,
                $,
                Q = d();
              k === a.body
                ? ((b = s),
                  (M = s.scrollX || s.pageXOffset),
                  (A = s.scrollY || s.pageYOffset),
                  ($ = f.scroll))
                : ((b = k), (M = k.scrollLeft), (A = k.scrollTop), ($ = g)),
                C({
                  scrollable: b,
                  method: $,
                  startTime: Q,
                  startX: M,
                  startY: A,
                  x: E,
                  y: O,
                });
            }
            (s.scroll = s.scrollTo =
              function () {
                if (arguments[0] !== void 0) {
                  if (m(arguments[0]) === !0) {
                    f.scroll.call(
                      s,
                      arguments[0].left !== void 0
                        ? arguments[0].left
                        : typeof arguments[0] != "object"
                        ? arguments[0]
                        : s.scrollX || s.pageXOffset,
                      arguments[0].top !== void 0
                        ? arguments[0].top
                        : arguments[1] !== void 0
                        ? arguments[1]
                        : s.scrollY || s.pageYOffset
                    );
                    return;
                  }
                  T.call(
                    s,
                    a.body,
                    arguments[0].left !== void 0
                      ? ~~arguments[0].left
                      : s.scrollX || s.pageXOffset,
                    arguments[0].top !== void 0
                      ? ~~arguments[0].top
                      : s.scrollY || s.pageYOffset
                  );
                }
              }),
              (s.scrollBy = function () {
                if (arguments[0] !== void 0) {
                  if (m(arguments[0])) {
                    f.scrollBy.call(
                      s,
                      arguments[0].left !== void 0
                        ? arguments[0].left
                        : typeof arguments[0] != "object"
                        ? arguments[0]
                        : 0,
                      arguments[0].top !== void 0
                        ? arguments[0].top
                        : arguments[1] !== void 0
                        ? arguments[1]
                        : 0
                    );
                    return;
                  }
                  T.call(
                    s,
                    a.body,
                    ~~arguments[0].left + (s.scrollX || s.pageXOffset),
                    ~~arguments[0].top + (s.scrollY || s.pageYOffset)
                  );
                }
              }),
              (u.prototype.scroll = u.prototype.scrollTo =
                function () {
                  if (arguments[0] !== void 0) {
                    if (m(arguments[0]) === !0) {
                      if (
                        typeof arguments[0] == "number" &&
                        arguments[1] === void 0
                      )
                        throw new SyntaxError("Value could not be converted");
                      f.elementScroll.call(
                        this,
                        arguments[0].left !== void 0
                          ? ~~arguments[0].left
                          : typeof arguments[0] != "object"
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        arguments[0].top !== void 0
                          ? ~~arguments[0].top
                          : arguments[1] !== void 0
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                      return;
                    }
                    var k = arguments[0].left,
                      E = arguments[0].top;
                    T.call(
                      this,
                      this,
                      typeof k > "u" ? this.scrollLeft : ~~k,
                      typeof E > "u" ? this.scrollTop : ~~E
                    );
                  }
                }),
              (u.prototype.scrollBy = function () {
                if (arguments[0] !== void 0) {
                  if (m(arguments[0]) === !0) {
                    f.elementScroll.call(
                      this,
                      arguments[0].left !== void 0
                        ? ~~arguments[0].left + this.scrollLeft
                        : ~~arguments[0] + this.scrollLeft,
                      arguments[0].top !== void 0
                        ? ~~arguments[0].top + this.scrollTop
                        : ~~arguments[1] + this.scrollTop
                    );
                    return;
                  }
                  this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior,
                  });
                }
              }),
              (u.prototype.scrollIntoView = function () {
                if (m(arguments[0]) === !0) {
                  f.scrollIntoView.call(
                    this,
                    arguments[0] === void 0 ? !0 : arguments[0]
                  );
                  return;
                }
                var k = P(this),
                  E = k.getBoundingClientRect(),
                  O = this.getBoundingClientRect();
                k !== a.body
                  ? (T.call(
                      this,
                      k,
                      k.scrollLeft + O.left - E.left,
                      k.scrollTop + O.top - E.top
                    ),
                    s.getComputedStyle(k).position !== "fixed" &&
                      s.scrollBy({
                        left: E.left,
                        top: E.top,
                        behavior: "smooth",
                      }))
                  : s.scrollBy({
                      left: O.left,
                      top: O.top,
                      behavior: "smooth",
                    });
              });
          }
          r.exports = { polyfill: l };
        })();
      },
    ]);
  });
})(_0);
var O_ = _0.exports;
const Lr = om(O_);
var x0 = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  _p = Gr.createContext && Gr.createContext(x0),
  N_ = ["attr", "size", "title"];
function j_(t, e) {
  if (t == null) return {};
  var n = R_(t, e),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(e.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(t, r) &&
          (n[r] = t[r]);
  }
  return n;
}
function R_(t, e) {
  if (t == null) return {};
  var n = {},
    r = Object.keys(t),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Ja() {
  return (
    (Ja = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        }),
    Ja.apply(this, arguments)
  );
}
function xp(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function eu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? xp(Object(n), !0).forEach(function (r) {
          M_(t, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
      : xp(Object(n)).forEach(function (r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return t;
}
function M_(t, e, n) {
  return (
    (e = z_(e)),
    e in t
      ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = n),
    t
  );
}
function z_(t) {
  var e = D_(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
function D_(t, e) {
  if (typeof t != "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function w0(t) {
  return (
    t &&
    t.map((e, n) =>
      Gr.createElement(e.tag, eu({ key: n }, e.attr), w0(e.child))
    )
  );
}
function sr(t) {
  return (e) =>
    Gr.createElement(L_, Ja({ attr: eu({}, t.attr) }, e), w0(t.child));
}
function L_(t) {
  var e = (n) => {
    var { attr: r, size: i, title: o } = t,
      l = j_(t, N_),
      s = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      t.className && (a = (a ? a + " " : "") + t.className),
      Gr.createElement(
        "svg",
        Ja(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: a,
            style: eu(eu({ color: t.color || n.color }, n.style), t.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Gr.createElement("title", null, o),
        t.children
      )
    );
  };
  return _p !== void 0
    ? Gr.createElement(_p.Consumer, null, (n) => e(n))
    : e(x0);
}
function vf(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z",
        },
        child: [],
      },
    ],
  })(t);
}
function I_(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32 32v448h448V32zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64z",
        },
        child: [],
      },
    ],
  })(t);
}
function b_(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          fill: "none",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          strokeWidth: "32",
          d: "M80 160h352M80 256h352M80 352h352",
        },
        child: [],
      },
    ],
  })(t);
}
const A_ = () => {
  const [t, e] = fe.useState(!1),
    n = () => {
      e(!t);
    };
  return S.jsx("nav", {
    className: "flex w-full justify-between items-center fixed top-0 z-20",
    children: S.jsxs("div", {
      className:
        "w-full flex justify-between items-center sm:px-16 px-6 py-5 bg-black",
      children: [
        S.jsx("p", {
          className: "font-main text-primary_text font-bold text-2xl",
          children: "Nathan Van Utrecht",
        }),
        S.jsxs("ul", {
          className:
            "hidden sm:flex gap-9 items-center font-main text-secondary_text text-lg font-medium",
          children: [
            S.jsx("li", {
              className: "hover-default",
              children: S.jsx(Lr, { href: "#about", children: "About" }),
            }),
            S.jsx("li", {
              className: "hover-default",
              children: S.jsx(Lr, { href: "#work", children: "Work" }),
            }),
            S.jsx("li", {
              className: "hover-default",
              children: S.jsx(Lr, { href: "#projects", children: "Projects" }),
            }),
            S.jsx("li", {
              className: "hover-default",
              children: S.jsx(Lr, { href: "#contact", children: "Contact" }),
            }),
          ],
        }),
        S.jsxs("div", {
          className: "sm:hidden",
          children: [
            t
              ? S.jsx(vf, {
                  className: "text-secondary_text text-4xl hover-default",
                  onClick: n,
                })
              : S.jsx(b_, {
                  className: "text-secondary_text text-4xl hover-default",
                  onClick: n,
                }),
            t &&
              S.jsx("div", {
                className:
                  "absolute top-20 right-0 p-6 mx-4 my-2 bg-secondary rounded-xl min-w-[200px]",
                children: S.jsxs("ul", {
                  className:
                    "flex flex-col gap-4 font-main text-secondary_text text-lg font-medium",
                  children: [
                    S.jsx("li", {
                      className: "hover-default",
                      children: S.jsx(Lr, {
                        href: "#about",
                        children: "About",
                      }),
                    }),
                    S.jsx("li", {
                      className: "hover-default",
                      children: S.jsx(Lr, { href: "#work", children: "Work" }),
                    }),
                    S.jsx("li", {
                      className: "hover-default",
                      children: S.jsx(Lr, {
                        href: "#projects",
                        children: "Projects",
                      }),
                    }),
                    S.jsx("li", {
                      className: "hover-default",
                      children: S.jsx(Lr, {
                        href: "#contact",
                        children: "Contact",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        }),
      ],
    }),
  });
};
function wp(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(t, r.key, r);
  }
}
function F_(t, e, n) {
  return e && wp(t.prototype, e), n && wp(t, n), t;
}
/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var at,
  xa,
  ln,
  $r,
  Wr,
  zo,
  k0,
  Ti,
  bl,
  S0,
  yr,
  bn,
  T0,
  P0 = function () {
    return (
      at ||
      (typeof window < "u" && (at = window.gsap) && at.registerPlugin && at)
    );
  },
  C0 = 1,
  To = [],
  Z = [],
  ir = [],
  Al = Date.now,
  yf = function (e, n) {
    return n;
  },
  B_ = function () {
    var e = bl.core,
      n = e.bridge || {},
      r = e._scrollers,
      i = e._proxies;
    r.push.apply(r, Z),
      i.push.apply(i, ir),
      (Z = r),
      (ir = i),
      (yf = function (l, s) {
        return n[l](s);
      });
  },
  ri = function (e, n) {
    return ~ir.indexOf(e) && ir[ir.indexOf(e) + 1][n];
  },
  Fl = function (e) {
    return !!~S0.indexOf(e);
  },
  Nt = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: i !== !1, capture: !!o });
  },
  Ot = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  Gs = "scrollLeft",
  Qs = "scrollTop",
  _f = function () {
    return (yr && yr.isPressed) || Z.cache++;
  },
  tu = function (e, n) {
    var r = function i(o) {
      if (o || o === 0) {
        C0 && (ln.history.scrollRestoration = "manual");
        var l = yr && yr.isPressed;
        (o = i.v = Math.round(o) || (yr && yr.iOS ? 1 : 0)),
          e(o),
          (i.cacheID = Z.cache),
          l && yf("ss", o);
      } else
        (n || Z.cache !== i.cacheID || yf("ref")) &&
          ((i.cacheID = Z.cache), (i.v = e()));
      return i.v + i.offset;
    };
    return (r.offset = 0), e && r;
  },
  Dt = {
    s: Gs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: tu(function (t) {
      return arguments.length
        ? ln.scrollTo(t, Ge.sc())
        : ln.pageXOffset || $r[Gs] || Wr[Gs] || zo[Gs] || 0;
    }),
  },
  Ge = {
    s: Qs,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Dt,
    sc: tu(function (t) {
      return arguments.length
        ? ln.scrollTo(Dt.sc(), t)
        : ln.pageYOffset || $r[Qs] || Wr[Qs] || zo[Qs] || 0;
    }),
  },
  Ut = function (e, n) {
    return (
      ((n && n._ctx && n._ctx.selector) || at.utils.toArray)(e)[0] ||
      (typeof e == "string" && at.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", e)
        : null)
    );
  },
  ai = function (e, n) {
    var r = n.s,
      i = n.sc;
    Fl(e) && (e = $r.scrollingElement || Wr);
    var o = Z.indexOf(e),
      l = i === Ge.sc ? 1 : 2;
    !~o && (o = Z.push(e) - 1), Z[o + l] || Nt(e, "scroll", _f);
    var s = Z[o + l],
      a =
        s ||
        (Z[o + l] =
          tu(ri(e, r), !0) ||
          (Fl(e)
            ? i
            : tu(function (u) {
                return arguments.length ? (e[r] = u) : e[r];
              })));
    return (
      (a.target = e),
      s || (a.smooth = at.getProperty(e, "scrollBehavior") === "smooth"),
      a
    );
  },
  xf = function (e, n, r) {
    var i = e,
      o = e,
      l = Al(),
      s = l,
      a = n || 50,
      u = Math.max(500, a * 3),
      c = function (y, g) {
        var w = Al();
        g || w - l > a
          ? ((o = i), (i = y), (s = l), (l = w))
          : r
          ? (i += y)
          : (i = o + ((y - o) / (w - s)) * (l - s));
      },
      f = function () {
        (o = i = r ? 0 : i), (s = l = 0);
      },
      d = function (y) {
        var g = s,
          w = o,
          m = Al();
        return (
          (y || y === 0) && y !== i && c(y),
          l === s || m - s > u
            ? 0
            : ((i + (r ? w : -w)) / ((r ? m : l) - g)) * 1e3
        );
      };
    return { update: c, reset: f, getVelocity: d };
  },
  pl = function (e, n) {
    return (
      n && !e._gsapAllow && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  kp = function (e) {
    var n = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(n) >= Math.abs(r) ? n : r;
  },
  E0 = function () {
    (bl = at.core.globals().ScrollTrigger), bl && bl.core && B_();
  },
  O0 = function (e) {
    return (
      (at = e || P0()),
      !xa &&
        at &&
        typeof document < "u" &&
        document.body &&
        ((ln = window),
        ($r = document),
        (Wr = $r.documentElement),
        (zo = $r.body),
        (S0 = [ln, $r, Wr, zo]),
        at.utils.clamp,
        (T0 = at.core.context || function () {}),
        (Ti = "onpointerenter" in zo ? "pointer" : "mouse"),
        (k0 = Fe.isTouch =
          ln.matchMedia &&
          ln.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in ln ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ? 2
            : 0),
        (bn = Fe.eventTypes =
          (
            "ontouchstart" in Wr
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in Wr
              ? "pointerdown,pointermove,pointercancel,pointerup"
              : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (C0 = 0);
        }, 500),
        E0(),
        (xa = 1)),
      xa
    );
  };
Dt.op = Ge;
Z.cache = 0;
var Fe = (function () {
  function t(n) {
    this.init(n);
  }
  var e = t.prototype;
  return (
    (e.init = function (r) {
      xa || O0(at) || console.warn("Please gsap.registerPlugin(Observer)"),
        bl || E0();
      var i = r.tolerance,
        o = r.dragMinimum,
        l = r.type,
        s = r.target,
        a = r.lineHeight,
        u = r.debounce,
        c = r.preventDefault,
        f = r.onStop,
        d = r.onStopDelay,
        h = r.ignore,
        y = r.wheelSpeed,
        g = r.event,
        w = r.onDragStart,
        m = r.onDragEnd,
        p = r.onDrag,
        v = r.onPress,
        _ = r.onRelease,
        P = r.onRight,
        C = r.onLeft,
        T = r.onUp,
        k = r.onDown,
        E = r.onChangeX,
        O = r.onChangeY,
        b = r.onChange,
        M = r.onToggleX,
        A = r.onToggleY,
        $ = r.onHover,
        Q = r.onHoverEnd,
        X = r.onMove,
        B = r.ignoreCheck,
        j = r.isNormalizer,
        D = r.onGestureStart,
        x = r.onGestureEnd,
        V = r.onWheel,
        re = r.onEnable,
        dt = r.onDisable,
        se = r.onClick,
        ze = r.scrollSpeed,
        ke = r.capture,
        me = r.allowClicks,
        Ct = r.lockAxis,
        ht = r.onLockAxis;
      (this.target = s = Ut(s) || Wr),
        (this.vars = r),
        h && (h = at.utils.toArray(h)),
        (i = i || 1e-9),
        (o = o || 0),
        (y = y || 1),
        (ze = ze || 1),
        (l = l || "wheel,touch,pointer"),
        (u = u !== !1),
        a || (a = parseFloat(ln.getComputedStyle(zo).lineHeight) || 22);
      var Or,
        Et,
        jn,
        oe,
        De,
        Bt,
        Zt,
        N = this,
        Jt = 0,
        ar = 0,
        Nr = r.passive || !c,
        Be = ai(s, Dt),
        jr = ai(s, Ge),
        mi = Be(),
        eo = jr(),
        Ke =
          ~l.indexOf("touch") &&
          !~l.indexOf("pointer") &&
          bn[0] === "pointerdown",
        Rr = Fl(s),
        Le = s.ownerDocument || $r,
        Rn = [0, 0, 0],
        gn = [0, 0, 0],
        ur = 0,
        tl = function () {
          return (ur = Al());
        },
        Ue = function (U, le) {
          return (
            ((N.event = U) && h && ~h.indexOf(U.target)) ||
            (le && Ke && U.pointerType !== "touch") ||
            (B && B(U, le))
          );
        },
        Os = function () {
          N._vx.reset(), N._vy.reset(), Et.pause(), f && f(N);
        },
        Mr = function () {
          var U = (N.deltaX = kp(Rn)),
            le = (N.deltaY = kp(gn)),
            z = Math.abs(U) >= i,
            Y = Math.abs(le) >= i;
          b && (z || Y) && b(N, U, le, Rn, gn),
            z &&
              (P && N.deltaX > 0 && P(N),
              C && N.deltaX < 0 && C(N),
              E && E(N),
              M && N.deltaX < 0 != Jt < 0 && M(N),
              (Jt = N.deltaX),
              (Rn[0] = Rn[1] = Rn[2] = 0)),
            Y &&
              (k && N.deltaY > 0 && k(N),
              T && N.deltaY < 0 && T(N),
              O && O(N),
              A && N.deltaY < 0 != ar < 0 && A(N),
              (ar = N.deltaY),
              (gn[0] = gn[1] = gn[2] = 0)),
            (oe || jn) && (X && X(N), jn && (p(N), (jn = !1)), (oe = !1)),
            Bt && !(Bt = !1) && ht && ht(N),
            De && (V(N), (De = !1)),
            (Or = 0);
        },
        to = function (U, le, z) {
          (Rn[z] += U),
            (gn[z] += le),
            N._vx.update(U),
            N._vy.update(le),
            u ? Or || (Or = requestAnimationFrame(Mr)) : Mr();
        },
        no = function (U, le) {
          Ct &&
            !Zt &&
            ((N.axis = Zt = Math.abs(U) > Math.abs(le) ? "x" : "y"), (Bt = !0)),
            Zt !== "y" && ((Rn[2] += U), N._vx.update(U, !0)),
            Zt !== "x" && ((gn[2] += le), N._vy.update(le, !0)),
            u ? Or || (Or = requestAnimationFrame(Mr)) : Mr();
        },
        zr = function (U) {
          if (!Ue(U, 1)) {
            U = pl(U, c);
            var le = U.clientX,
              z = U.clientY,
              Y = le - N.x,
              F = z - N.y,
              W = N.isDragging;
            (N.x = le),
              (N.y = z),
              (W ||
                Math.abs(N.startX - le) >= o ||
                Math.abs(N.startY - z) >= o) &&
                (p && (jn = !0),
                W || (N.isDragging = !0),
                no(Y, F),
                W || (w && w(N)));
          }
        },
        gi = (N.onPress = function (H) {
          Ue(H, 1) ||
            (H && H.button) ||
            ((N.axis = Zt = null),
            Et.pause(),
            (N.isPressed = !0),
            (H = pl(H)),
            (Jt = ar = 0),
            (N.startX = N.x = H.clientX),
            (N.startY = N.y = H.clientY),
            N._vx.reset(),
            N._vy.reset(),
            Nt(j ? s : Le, bn[1], zr, Nr, !0),
            (N.deltaX = N.deltaY = 0),
            v && v(N));
        }),
        q = (N.onRelease = function (H) {
          if (!Ue(H, 1)) {
            Ot(j ? s : Le, bn[1], zr, !0);
            var U = !isNaN(N.y - N.startY),
              le = N.isDragging,
              z =
                le &&
                (Math.abs(N.x - N.startX) > 3 || Math.abs(N.y - N.startY) > 3),
              Y = pl(H);
            !z &&
              U &&
              (N._vx.reset(),
              N._vy.reset(),
              c &&
                me &&
                at.delayedCall(0.08, function () {
                  if (Al() - ur > 300 && !H.defaultPrevented) {
                    if (H.target.click) H.target.click();
                    else if (Le.createEvent) {
                      var F = Le.createEvent("MouseEvents");
                      F.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        ln,
                        1,
                        Y.screenX,
                        Y.screenY,
                        Y.clientX,
                        Y.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null
                      ),
                        H.target.dispatchEvent(F);
                    }
                  }
                })),
              (N.isDragging = N.isGesturing = N.isPressed = !1),
              f && le && !j && Et.restart(!0),
              m && le && m(N),
              _ && _(N, z);
          }
        }),
        vi = function (U) {
          return (
            U.touches &&
            U.touches.length > 1 &&
            (N.isGesturing = !0) &&
            D(U, N.isDragging)
          );
        },
        Mn = function () {
          return (N.isGesturing = !1) || x(N);
        },
        zn = function (U) {
          if (!Ue(U)) {
            var le = Be(),
              z = jr();
            to((le - mi) * ze, (z - eo) * ze, 1),
              (mi = le),
              (eo = z),
              f && Et.restart(!0);
          }
        },
        Dn = function (U) {
          if (!Ue(U)) {
            (U = pl(U, c)), V && (De = !0);
            var le =
              (U.deltaMode === 1 ? a : U.deltaMode === 2 ? ln.innerHeight : 1) *
              y;
            to(U.deltaX * le, U.deltaY * le, 0), f && !j && Et.restart(!0);
          }
        },
        yi = function (U) {
          if (!Ue(U)) {
            var le = U.clientX,
              z = U.clientY,
              Y = le - N.x,
              F = z - N.y;
            (N.x = le),
              (N.y = z),
              (oe = !0),
              f && Et.restart(!0),
              (Y || F) && no(Y, F);
          }
        },
        ro = function (U) {
          (N.event = U), $(N);
        },
        cr = function (U) {
          (N.event = U), Q(N);
        },
        nl = function (U) {
          return Ue(U) || (pl(U, c) && se(N));
        };
      (Et = N._dc = at.delayedCall(d || 0.25, Os).pause()),
        (N.deltaX = N.deltaY = 0),
        (N._vx = xf(0, 50, !0)),
        (N._vy = xf(0, 50, !0)),
        (N.scrollX = Be),
        (N.scrollY = jr),
        (N.isDragging = N.isGesturing = N.isPressed = !1),
        T0(this),
        (N.enable = function (H) {
          return (
            N.isEnabled ||
              (Nt(Rr ? Le : s, "scroll", _f),
              l.indexOf("scroll") >= 0 && Nt(Rr ? Le : s, "scroll", zn, Nr, ke),
              l.indexOf("wheel") >= 0 && Nt(s, "wheel", Dn, Nr, ke),
              ((l.indexOf("touch") >= 0 && k0) || l.indexOf("pointer") >= 0) &&
                (Nt(s, bn[0], gi, Nr, ke),
                Nt(Le, bn[2], q),
                Nt(Le, bn[3], q),
                me && Nt(s, "click", tl, !0, !0),
                se && Nt(s, "click", nl),
                D && Nt(Le, "gesturestart", vi),
                x && Nt(Le, "gestureend", Mn),
                $ && Nt(s, Ti + "enter", ro),
                Q && Nt(s, Ti + "leave", cr),
                X && Nt(s, Ti + "move", yi)),
              (N.isEnabled = !0),
              H && H.type && gi(H),
              re && re(N)),
            N
          );
        }),
        (N.disable = function () {
          N.isEnabled &&
            (To.filter(function (H) {
              return H !== N && Fl(H.target);
            }).length || Ot(Rr ? Le : s, "scroll", _f),
            N.isPressed &&
              (N._vx.reset(), N._vy.reset(), Ot(j ? s : Le, bn[1], zr, !0)),
            Ot(Rr ? Le : s, "scroll", zn, ke),
            Ot(s, "wheel", Dn, ke),
            Ot(s, bn[0], gi, ke),
            Ot(Le, bn[2], q),
            Ot(Le, bn[3], q),
            Ot(s, "click", tl, !0),
            Ot(s, "click", nl),
            Ot(Le, "gesturestart", vi),
            Ot(Le, "gestureend", Mn),
            Ot(s, Ti + "enter", ro),
            Ot(s, Ti + "leave", cr),
            Ot(s, Ti + "move", yi),
            (N.isEnabled = N.isPressed = N.isDragging = !1),
            dt && dt(N));
        }),
        (N.kill = N.revert =
          function () {
            N.disable();
            var H = To.indexOf(N);
            H >= 0 && To.splice(H, 1), yr === N && (yr = 0);
          }),
        To.push(N),
        j && Fl(s) && (yr = N),
        N.enable(g);
    }),
    F_(t, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    t
  );
})();
Fe.version = "3.12.5";
Fe.create = function (t) {
  return new Fe(t);
};
Fe.register = O0;
Fe.getAll = function () {
  return To.slice();
};
Fe.getById = function (t) {
  return To.filter(function (e) {
    return e.vars.id === t;
  })[0];
};
P0() && at.registerPlugin(Fe);
/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var I,
  uo,
  te,
  Te,
  Un,
  ve,
  N0,
  nu,
  ds,
  Bl,
  wl,
  Ks,
  _t,
  ju,
  wf,
  Mt,
  Sp,
  Tp,
  co,
  j0,
  sc,
  R0,
  jt,
  kf,
  M0,
  z0,
  Ir,
  Sf,
  Ad,
  Do,
  Fd,
  ru,
  Tf,
  ac,
  qs = 1,
  xt = Date.now,
  uc = xt(),
  Cn = 0,
  kl = 0,
  Pp = function (e, n, r) {
    var i = rn(e) && (e.substr(0, 6) === "clamp(" || e.indexOf("max") > -1);
    return (r["_" + n + "Clamp"] = i), i ? e.substr(6, e.length - 7) : e;
  },
  Cp = function (e, n) {
    return n && (!rn(e) || e.substr(0, 6) !== "clamp(")
      ? "clamp(" + e + ")"
      : e;
  },
  U_ = function t() {
    return kl && requestAnimationFrame(t);
  },
  Ep = function () {
    return (ju = 1);
  },
  Op = function () {
    return (ju = 0);
  },
  Kn = function (e) {
    return e;
  },
  Sl = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  D0 = function () {
    return typeof window < "u";
  },
  L0 = function () {
    return I || (D0() && (I = window.gsap) && I.registerPlugin && I);
  },
  Yi = function (e) {
    return !!~N0.indexOf(e);
  },
  I0 = function (e) {
    return (
      (e === "Height" ? Fd : te["inner" + e]) ||
      Un["client" + e] ||
      ve["client" + e]
    );
  },
  b0 = function (e) {
    return (
      ri(e, "getBoundingClientRect") ||
      (Yi(e)
        ? function () {
            return (Pa.width = te.innerWidth), (Pa.height = Fd), Pa;
          }
        : function () {
            return mr(e);
          })
    );
  },
  V_ = function (e, n, r) {
    var i = r.d,
      o = r.d2,
      l = r.a;
    return (l = ri(e, "getBoundingClientRect"))
      ? function () {
          return l()[i];
        }
      : function () {
          return (n ? I0(o) : e["client" + o]) || 0;
        };
  },
  $_ = function (e, n) {
    return !n || ~ir.indexOf(e)
      ? b0(e)
      : function () {
          return Pa;
        };
  },
  er = function (e, n) {
    var r = n.s,
      i = n.d2,
      o = n.d,
      l = n.a;
    return Math.max(
      0,
      (r = "scroll" + i) && (l = ri(e, r))
        ? l() - b0(e)()[o]
        : Yi(e)
        ? (Un[r] || ve[r]) - I0(i)
        : e[r] - e["offset" + i]
    );
  },
  Zs = function (e, n) {
    for (var r = 0; r < co.length; r += 3)
      (!n || ~n.indexOf(co[r + 1])) && e(co[r], co[r + 1], co[r + 2]);
  },
  rn = function (e) {
    return typeof e == "string";
  },
  Lt = function (e) {
    return typeof e == "function";
  },
  Tl = function (e) {
    return typeof e == "number";
  },
  Pi = function (e) {
    return typeof e == "object";
  },
  ml = function (e, n, r) {
    return e && e.progress(n ? 0 : 1) && r && e.pause();
  },
  cc = function (e, n) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return n(e);
          })
        : n(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  oo = Math.abs,
  A0 = "left",
  F0 = "top",
  Bd = "right",
  Ud = "bottom",
  Di = "width",
  Li = "height",
  Ul = "Right",
  Vl = "Left",
  $l = "Top",
  Wl = "Bottom",
  Ve = "padding",
  xn = "margin",
  Yo = "Width",
  Vd = "Height",
  Ye = "px",
  wn = function (e) {
    return te.getComputedStyle(e);
  },
  W_ = function (e) {
    var n = wn(e).position;
    e.style.position = n === "absolute" || n === "fixed" ? n : "relative";
  },
  Np = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  mr = function (e, n) {
    var r =
        n &&
        wn(e)[wf] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        I.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  iu = function (e, n) {
    var r = n.d2;
    return e["offset" + r] || e["client" + r] || 0;
  },
  B0 = function (e) {
    var n = [],
      r = e.labels,
      i = e.duration(),
      o;
    for (o in r) n.push(r[o] / i);
    return n;
  },
  H_ = function (e) {
    return function (n) {
      return I.utils.snap(B0(e), n);
    };
  },
  $d = function (e) {
    var n = I.utils.snap(e),
      r =
        Array.isArray(e) &&
        e.slice(0).sort(function (i, o) {
          return i - o;
        });
    return r
      ? function (i, o, l) {
          l === void 0 && (l = 0.001);
          var s;
          if (!o) return n(i);
          if (o > 0) {
            for (i -= l, s = 0; s < r.length; s++) if (r[s] >= i) return r[s];
            return r[s - 1];
          } else for (s = r.length, i += l; s--; ) if (r[s] <= i) return r[s];
          return r[0];
        }
      : function (i, o, l) {
          l === void 0 && (l = 0.001);
          var s = n(i);
          return !o || Math.abs(s - i) < l || s - i < 0 == o < 0
            ? s
            : n(o < 0 ? i - e : i + e);
        };
  },
  Y_ = function (e) {
    return function (n, r) {
      return $d(B0(e))(n, r.direction);
    };
  },
  Js = function (e, n, r, i) {
    return r.split(",").forEach(function (o) {
      return e(n, o, i);
    });
  },
  Je = function (e, n, r, i, o) {
    return e.addEventListener(n, r, { passive: !i, capture: !!o });
  },
  Ze = function (e, n, r, i) {
    return e.removeEventListener(n, r, !!i);
  },
  ea = function (e, n, r) {
    (r = r && r.wheelHandler), r && (e(n, "wheel", r), e(n, "touchmove", r));
  },
  jp = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  ta = { toggleActions: "play", anticipatePin: 0 },
  ou = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  wa = function (e, n) {
    if (rn(e)) {
      var r = e.indexOf("="),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (i *= n / 100), (e = e.substr(0, r - 1))),
        (e =
          i +
          (e in ou
            ? ou[e] * n
            : ~e.indexOf("%")
            ? (parseFloat(e) * n) / 100
            : parseFloat(e) || 0));
    }
    return e;
  },
  na = function (e, n, r, i, o, l, s, a) {
    var u = o.startColor,
      c = o.endColor,
      f = o.fontSize,
      d = o.indent,
      h = o.fontWeight,
      y = Te.createElement("div"),
      g = Yi(r) || ri(r, "pinType") === "fixed",
      w = e.indexOf("scroller") !== -1,
      m = g ? ve : r,
      p = e.indexOf("start") !== -1,
      v = p ? u : c,
      _ =
        "border-color:" +
        v +
        ";font-size:" +
        f +
        ";color:" +
        v +
        ";font-weight:" +
        h +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (_ += "position:" + ((w || a) && g ? "fixed;" : "absolute;")),
      (w || a || !g) &&
        (_ += (i === Ge ? Bd : Ud) + ":" + (l + parseFloat(d)) + "px;"),
      s &&
        (_ +=
          "box-sizing:border-box;text-align:left;width:" +
          s.offsetWidth +
          "px;"),
      (y._isStart = p),
      y.setAttribute("class", "gsap-marker-" + e + (n ? " marker-" + n : "")),
      (y.style.cssText = _),
      (y.innerText = n || n === 0 ? e + "-" + n : e),
      m.children[0] ? m.insertBefore(y, m.children[0]) : m.appendChild(y),
      (y._offset = y["offset" + i.op.d2]),
      ka(y, 0, i, p),
      y
    );
  },
  ka = function (e, n, r, i) {
    var o = { display: "block" },
      l = r[i ? "os2" : "p2"],
      s = r[i ? "p2" : "os2"];
    (e._isFlipped = i),
      (o[r.a + "Percent"] = i ? -100 : 0),
      (o[r.a] = i ? "1px" : 0),
      (o["border" + l + Yo] = 1),
      (o["border" + s + Yo] = 0),
      (o[r.p] = n + "px"),
      I.set(e, o);
  },
  K = [],
  Pf = {},
  hs,
  Rp = function () {
    return xt() - Cn > 34 && (hs || (hs = requestAnimationFrame(xr)));
  },
  lo = function () {
    (!jt || !jt.isPressed || jt.startX > ve.clientWidth) &&
      (Z.cache++,
      jt ? hs || (hs = requestAnimationFrame(xr)) : xr(),
      Cn || Gi("scrollStart"),
      (Cn = xt()));
  },
  fc = function () {
    (z0 = te.innerWidth), (M0 = te.innerHeight);
  },
  Pl = function () {
    Z.cache++,
      !_t &&
        !R0 &&
        !Te.fullscreenElement &&
        !Te.webkitFullscreenElement &&
        (!kf ||
          z0 !== te.innerWidth ||
          Math.abs(te.innerHeight - M0) > te.innerHeight * 0.25) &&
        nu.restart(!0);
  },
  Xi = {},
  X_ = [],
  U0 = function t() {
    return Ze(G, "scrollEnd", t) || ji(!0);
  },
  Gi = function (e) {
    return (
      (Xi[e] &&
        Xi[e].map(function (n) {
          return n();
        })) ||
      X_
    );
  },
  tn = [],
  V0 = function (e) {
    for (var n = 0; n < tn.length; n += 5)
      (!e || (tn[n + 4] && tn[n + 4].query === e)) &&
        ((tn[n].style.cssText = tn[n + 1]),
        tn[n].getBBox && tn[n].setAttribute("transform", tn[n + 2] || ""),
        (tn[n + 3].uncache = 1));
  },
  Wd = function (e, n) {
    var r;
    for (Mt = 0; Mt < K.length; Mt++)
      (r = K[Mt]),
        r && (!n || r._ctx === n) && (e ? r.kill(1) : r.revert(!0, !0));
    (ru = !0), n && V0(n), n || Gi("revert");
  },
  $0 = function (e, n) {
    Z.cache++,
      (n || !zt) &&
        Z.forEach(function (r) {
          return Lt(r) && r.cacheID++ && (r.rec = 0);
        }),
      rn(e) && (te.history.scrollRestoration = Ad = e);
  },
  zt,
  Ii = 0,
  Mp,
  G_ = function () {
    if (Mp !== Ii) {
      var e = (Mp = Ii);
      requestAnimationFrame(function () {
        return e === Ii && ji(!0);
      });
    }
  },
  W0 = function () {
    ve.appendChild(Do),
      (Fd = (!jt && Do.offsetHeight) || te.innerHeight),
      ve.removeChild(Do);
  },
  zp = function (e) {
    return ds(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
    ).forEach(function (n) {
      return (n.style.display = e ? "none" : "block");
    });
  },
  ji = function (e, n) {
    if (Cn && !e && !ru) {
      Je(G, "scrollEnd", U0);
      return;
    }
    W0(),
      (zt = G.isRefreshing = !0),
      Z.forEach(function (i) {
        return Lt(i) && ++i.cacheID && (i.rec = i());
      });
    var r = Gi("refreshInit");
    j0 && G.sort(),
      n || Wd(),
      Z.forEach(function (i) {
        Lt(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
      }),
      K.slice(0).forEach(function (i) {
        return i.refresh();
      }),
      (ru = !1),
      K.forEach(function (i) {
        if (i._subPinOffset && i.pin) {
          var o = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
            l = i.pin[o];
          i.revert(!0, 1), i.adjustPinSpacing(i.pin[o] - l), i.refresh();
        }
      }),
      (Tf = 1),
      zp(!0),
      K.forEach(function (i) {
        var o = er(i.scroller, i._dir),
          l = i.vars.end === "max" || (i._endClamp && i.end > o),
          s = i._startClamp && i.start >= o;
        (l || s) &&
          i.setPositions(
            s ? o - 1 : i.start,
            l ? Math.max(s ? o : i.start + 1, o) : i.end,
            !0
          );
      }),
      zp(!1),
      (Tf = 0),
      r.forEach(function (i) {
        return i && i.render && i.render(-1);
      }),
      Z.forEach(function (i) {
        Lt(i) &&
          (i.smooth &&
            requestAnimationFrame(function () {
              return (i.target.style.scrollBehavior = "smooth");
            }),
          i.rec && i(i.rec));
      }),
      $0(Ad, 1),
      nu.pause(),
      Ii++,
      (zt = 2),
      xr(2),
      K.forEach(function (i) {
        return Lt(i.vars.onRefresh) && i.vars.onRefresh(i);
      }),
      (zt = G.isRefreshing = !1),
      Gi("refresh");
  },
  Cf = 0,
  Sa = 1,
  Hl,
  xr = function (e) {
    if (e === 2 || (!zt && !ru)) {
      (G.isUpdating = !0), Hl && Hl.update(0);
      var n = K.length,
        r = xt(),
        i = r - uc >= 50,
        o = n && K[0].scroll();
      if (
        ((Sa = Cf > o ? -1 : 1),
        zt || (Cf = o),
        i &&
          (Cn && !ju && r - Cn > 200 && ((Cn = 0), Gi("scrollEnd")),
          (wl = uc),
          (uc = r)),
        Sa < 0)
      ) {
        for (Mt = n; Mt-- > 0; ) K[Mt] && K[Mt].update(0, i);
        Sa = 1;
      } else for (Mt = 0; Mt < n; Mt++) K[Mt] && K[Mt].update(0, i);
      G.isUpdating = !1;
    }
    hs = 0;
  },
  Ef = [
    A0,
    F0,
    Ud,
    Bd,
    xn + Wl,
    xn + Ul,
    xn + $l,
    xn + Vl,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Ta = Ef.concat([
    Di,
    Li,
    "boxSizing",
    "max" + Yo,
    "max" + Vd,
    "position",
    xn,
    Ve,
    Ve + $l,
    Ve + Ul,
    Ve + Wl,
    Ve + Vl,
  ]),
  Q_ = function (e, n, r) {
    Lo(r);
    var i = e._gsap;
    if (i.spacerIsNative) Lo(i.spacerState);
    else if (e._gsap.swappedIn) {
      var o = n.parentNode;
      o && (o.insertBefore(e, n), o.removeChild(n));
    }
    e._gsap.swappedIn = !1;
  },
  dc = function (e, n, r, i) {
    if (!e._gsap.swappedIn) {
      for (var o = Ef.length, l = n.style, s = e.style, a; o--; )
        (a = Ef[o]), (l[a] = r[a]);
      (l.position = r.position === "absolute" ? "absolute" : "relative"),
        r.display === "inline" && (l.display = "inline-block"),
        (s[Ud] = s[Bd] = "auto"),
        (l.flexBasis = r.flexBasis || "auto"),
        (l.overflow = "visible"),
        (l.boxSizing = "border-box"),
        (l[Di] = iu(e, Dt) + Ye),
        (l[Li] = iu(e, Ge) + Ye),
        (l[Ve] = s[xn] = s[F0] = s[A0] = "0"),
        Lo(i),
        (s[Di] = s["max" + Yo] = r[Di]),
        (s[Li] = s["max" + Vd] = r[Li]),
        (s[Ve] = r[Ve]),
        e.parentNode !== n &&
          (e.parentNode.insertBefore(n, e), n.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  K_ = /([A-Z])/g,
  Lo = function (e) {
    if (e) {
      var n = e.t.style,
        r = e.length,
        i = 0,
        o,
        l;
      for ((e.t._gsap || I.core.getCache(e.t)).uncache = 1; i < r; i += 2)
        (l = e[i + 1]),
          (o = e[i]),
          l
            ? (n[o] = l)
            : n[o] && n.removeProperty(o.replace(K_, "-$1").toLowerCase());
    }
  },
  ra = function (e) {
    for (var n = Ta.length, r = e.style, i = [], o = 0; o < n; o++)
      i.push(Ta[o], r[Ta[o]]);
    return (i.t = e), i;
  },
  q_ = function (e, n, r) {
    for (var i = [], o = e.length, l = r ? 8 : 0, s; l < o; l += 2)
      (s = e[l]), i.push(s, s in n ? n[s] : e[l + 1]);
    return (i.t = e.t), i;
  },
  Pa = { left: 0, top: 0 },
  Dp = function (e, n, r, i, o, l, s, a, u, c, f, d, h, y) {
    Lt(e) && (e = e(a)),
      rn(e) &&
        e.substr(0, 3) === "max" &&
        (e = d + (e.charAt(4) === "=" ? wa("0" + e.substr(3), r) : 0));
    var g = h ? h.time() : 0,
      w,
      m,
      p;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Tl(e)))
      h &&
        (e = I.utils.mapRange(
          h.scrollTrigger.start,
          h.scrollTrigger.end,
          0,
          d,
          e
        )),
        s && ka(s, r, i, !0);
    else {
      Lt(n) && (n = n(a));
      var v = (e || "0").split(" "),
        _,
        P,
        C,
        T;
      (p = Ut(n, a) || ve),
        (_ = mr(p) || {}),
        (!_ || (!_.left && !_.top)) &&
          wn(p).display === "none" &&
          ((T = p.style.display),
          (p.style.display = "block"),
          (_ = mr(p)),
          T ? (p.style.display = T) : p.style.removeProperty("display")),
        (P = wa(v[0], _[i.d])),
        (C = wa(v[1] || "0", r)),
        (e = _[i.p] - u[i.p] - c + P + o - C),
        s && ka(s, C, i, r - C < 20 || (s._isStart && C > 20)),
        (r -= r - C);
    }
    if ((y && ((a[y] = e || -0.001), e < 0 && (e = 0)), l)) {
      var k = e + r,
        E = l._isStart;
      (w = "scroll" + i.d2),
        ka(
          l,
          k,
          i,
          (E && k > 20) ||
            (!E && (f ? Math.max(ve[w], Un[w]) : l.parentNode[w]) <= k + 1)
        ),
        f &&
          ((u = mr(s)),
          f && (l.style[i.op.p] = u[i.op.p] - i.op.m - l._offset + Ye));
    }
    return (
      h &&
        p &&
        ((w = mr(p)),
        h.seek(d),
        (m = mr(p)),
        (h._caScrollDist = w[i.p] - m[i.p]),
        (e = (e / h._caScrollDist) * d)),
      h && h.seek(g),
      h ? e : Math.round(e)
    );
  },
  Z_ = /(webkit|moz|length|cssText|inset)/i,
  Lp = function (e, n, r, i) {
    if (e.parentNode !== n) {
      var o = e.style,
        l,
        s;
      if (n === ve) {
        (e._stOrig = o.cssText), (s = wn(e));
        for (l in s)
          !+l &&
            !Z_.test(l) &&
            s[l] &&
            typeof o[l] == "string" &&
            l !== "0" &&
            (o[l] = s[l]);
        (o.top = r), (o.left = i);
      } else o.cssText = e._stOrig;
      (I.core.getCache(e).uncache = 1), n.appendChild(e);
    }
  },
  H0 = function (e, n, r) {
    var i = n,
      o = i;
    return function (l) {
      var s = Math.round(e());
      return (
        s !== i &&
          s !== o &&
          Math.abs(s - i) > 3 &&
          Math.abs(s - o) > 3 &&
          ((l = s), r && r()),
        (o = i),
        (i = l),
        l
      );
    };
  },
  ia = function (e, n, r) {
    var i = {};
    (i[n.p] = "+=" + r), I.set(e, i);
  },
  Ip = function (e, n) {
    var r = ai(e, n),
      i = "_scroll" + n.p2,
      o = function l(s, a, u, c, f) {
        var d = l.tween,
          h = a.onComplete,
          y = {};
        u = u || r();
        var g = H0(r, u, function () {
          d.kill(), (l.tween = 0);
        });
        return (
          (f = (c && f) || 0),
          (c = c || s - u),
          d && d.kill(),
          (a[i] = s),
          (a.inherit = !1),
          (a.modifiers = y),
          (y[i] = function () {
            return g(u + c * d.ratio + f * d.ratio * d.ratio);
          }),
          (a.onUpdate = function () {
            Z.cache++, l.tween && xr();
          }),
          (a.onComplete = function () {
            (l.tween = 0), h && h.call(d);
          }),
          (d = l.tween = I.to(e, a)),
          d
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = function () {
        return o.tween && o.tween.kill() && (o.tween = 0);
      }),
      Je(e, "wheel", r.wheelHandler),
      G.isTouch && Je(e, "touchmove", r.wheelHandler),
      o
    );
  },
  G = (function () {
    function t(n, r) {
      uo ||
        t.register(I) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        Sf(this),
        this.init(n, r);
    }
    var e = t.prototype;
    return (
      (e.init = function (r, i) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !kl)
        ) {
          this.update = this.refresh = this.kill = Kn;
          return;
        }
        r = Np(rn(r) || Tl(r) || r.nodeType ? { trigger: r } : r, ta);
        var o = r,
          l = o.onUpdate,
          s = o.toggleClass,
          a = o.id,
          u = o.onToggle,
          c = o.onRefresh,
          f = o.scrub,
          d = o.trigger,
          h = o.pin,
          y = o.pinSpacing,
          g = o.invalidateOnRefresh,
          w = o.anticipatePin,
          m = o.onScrubComplete,
          p = o.onSnapComplete,
          v = o.once,
          _ = o.snap,
          P = o.pinReparent,
          C = o.pinSpacer,
          T = o.containerAnimation,
          k = o.fastScrollEnd,
          E = o.preventOverlaps,
          O =
            r.horizontal || (r.containerAnimation && r.horizontal !== !1)
              ? Dt
              : Ge,
          b = !f && f !== 0,
          M = Ut(r.scroller || te),
          A = I.core.getCache(M),
          $ = Yi(M),
          Q =
            ("pinType" in r
              ? r.pinType
              : ri(M, "pinType") || ($ && "fixed")) === "fixed",
          X = [r.onEnter, r.onLeave, r.onEnterBack, r.onLeaveBack],
          B = b && r.toggleActions.split(" "),
          j = "markers" in r ? r.markers : ta.markers,
          D = $ ? 0 : parseFloat(wn(M)["border" + O.p2 + Yo]) || 0,
          x = this,
          V =
            r.onRefreshInit &&
            function () {
              return r.onRefreshInit(x);
            },
          re = V_(M, $, O),
          dt = $_(M, $),
          se = 0,
          ze = 0,
          ke = 0,
          me = ai(M, O),
          Ct,
          ht,
          Or,
          Et,
          jn,
          oe,
          De,
          Bt,
          Zt,
          N,
          Jt,
          ar,
          Nr,
          Be,
          jr,
          mi,
          eo,
          Ke,
          Rr,
          Le,
          Rn,
          gn,
          ur,
          tl,
          Ue,
          Os,
          Mr,
          to,
          no,
          zr,
          gi,
          q,
          vi,
          Mn,
          zn,
          Dn,
          yi,
          ro,
          cr;
        if (
          ((x._startClamp = x._endClamp = !1),
          (x._dir = O),
          (w *= 45),
          (x.scroller = M),
          (x.scroll = T ? T.time.bind(T) : me),
          (Et = me()),
          (x.vars = r),
          (i = i || r.animation),
          "refreshPriority" in r &&
            ((j0 = 1), r.refreshPriority === -9999 && (Hl = x)),
          (A.tweenScroll = A.tweenScroll || {
            top: Ip(M, Ge),
            left: Ip(M, Dt),
          }),
          (x.tweenTo = Ct = A.tweenScroll[O.p]),
          (x.scrubDuration = function (z) {
            (vi = Tl(z) && z),
              vi
                ? q
                  ? q.duration(z)
                  : (q = I.to(i, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: vi,
                      paused: !0,
                      onComplete: function () {
                        return m && m(x);
                      },
                    }))
                : (q && q.progress(1).kill(), (q = 0));
          }),
          i &&
            ((i.vars.lazy = !1),
            (i._initted && !x.isReverted) ||
              (i.vars.immediateRender !== !1 &&
                r.immediateRender !== !1 &&
                i.duration() &&
                i.render(0, !0, !0)),
            (x.animation = i.pause()),
            (i.scrollTrigger = x),
            x.scrubDuration(f),
            (zr = 0),
            a || (a = i.vars.id)),
          _ &&
            ((!Pi(_) || _.push) && (_ = { snapTo: _ }),
            "scrollBehavior" in ve.style &&
              I.set($ ? [ve, Un] : M, { scrollBehavior: "auto" }),
            Z.forEach(function (z) {
              return (
                Lt(z) &&
                z.target === ($ ? Te.scrollingElement || Un : M) &&
                (z.smooth = !1)
              );
            }),
            (Or = Lt(_.snapTo)
              ? _.snapTo
              : _.snapTo === "labels"
              ? H_(i)
              : _.snapTo === "labelsDirectional"
              ? Y_(i)
              : _.directional !== !1
              ? function (z, Y) {
                  return $d(_.snapTo)(z, xt() - ze < 500 ? 0 : Y.direction);
                }
              : I.utils.snap(_.snapTo)),
            (Mn = _.duration || { min: 0.1, max: 2 }),
            (Mn = Pi(Mn) ? Bl(Mn.min, Mn.max) : Bl(Mn, Mn)),
            (zn = I.delayedCall(_.delay || vi / 2 || 0.1, function () {
              var z = me(),
                Y = xt() - ze < 500,
                F = Ct.tween;
              if (
                (Y || Math.abs(x.getVelocity()) < 10) &&
                !F &&
                !ju &&
                se !== z
              ) {
                var W = (z - oe) / Be,
                  qe = i && !b ? i.totalProgress() : W,
                  ee = Y ? 0 : ((qe - gi) / (xt() - wl)) * 1e3 || 0,
                  Ie = I.utils.clamp(-W, 1 - W, (oo(ee / 2) * ee) / 0.185),
                  pt = W + (_.inertia === !1 ? 0 : Ie),
                  je,
                  _e,
                  ue = _,
                  Ln = ue.onStart,
                  Se = ue.onInterrupt,
                  en = ue.onComplete;
                if (
                  ((je = Or(pt, x)),
                  Tl(je) || (je = pt),
                  (_e = Math.round(oe + je * Be)),
                  z <= De && z >= oe && _e !== z)
                ) {
                  if (F && !F._initted && F.data <= oo(_e - z)) return;
                  _.inertia === !1 && (Ie = je - W),
                    Ct(
                      _e,
                      {
                        duration: Mn(
                          oo(
                            (Math.max(oo(pt - qe), oo(je - qe)) * 0.185) /
                              ee /
                              0.05 || 0
                          )
                        ),
                        ease: _.ease || "power3",
                        data: oo(_e - z),
                        onInterrupt: function () {
                          return zn.restart(!0) && Se && Se(x);
                        },
                        onComplete: function () {
                          x.update(),
                            (se = me()),
                            i &&
                              (q
                                ? q.resetTo(
                                    "totalProgress",
                                    je,
                                    i._tTime / i._tDur
                                  )
                                : i.progress(je)),
                            (zr = gi =
                              i && !b ? i.totalProgress() : x.progress),
                            p && p(x),
                            en && en(x);
                        },
                      },
                      z,
                      Ie * Be,
                      _e - z - Ie * Be
                    ),
                    Ln && Ln(x, Ct.tween);
                }
              } else x.isActive && se !== z && zn.restart(!0);
            }).pause())),
          a && (Pf[a] = x),
          (d = x.trigger = Ut(d || (h !== !0 && h))),
          (cr = d && d._gsap && d._gsap.stRevert),
          cr && (cr = cr(x)),
          (h = h === !0 ? d : Ut(h)),
          rn(s) && (s = { targets: d, className: s }),
          h &&
            (y === !1 ||
              y === xn ||
              (y =
                !y &&
                h.parentNode &&
                h.parentNode.style &&
                wn(h.parentNode).display === "flex"
                  ? !1
                  : Ve),
            (x.pin = h),
            (ht = I.core.getCache(h)),
            ht.spacer
              ? (jr = ht.pinState)
              : (C &&
                  ((C = Ut(C)),
                  C && !C.nodeType && (C = C.current || C.nativeElement),
                  (ht.spacerIsNative = !!C),
                  C && (ht.spacerState = ra(C))),
                (ht.spacer = Ke = C || Te.createElement("div")),
                Ke.classList.add("pin-spacer"),
                a && Ke.classList.add("pin-spacer-" + a),
                (ht.pinState = jr = ra(h))),
            r.force3D !== !1 && I.set(h, { force3D: !0 }),
            (x.spacer = Ke = ht.spacer),
            (no = wn(h)),
            (tl = no[y + O.os2]),
            (Le = I.getProperty(h)),
            (Rn = I.quickSetter(h, O.a, Ye)),
            dc(h, Ke, no),
            (eo = ra(h))),
          j)
        ) {
          (ar = Pi(j) ? Np(j, jp) : jp),
            (N = na("scroller-start", a, M, O, ar, 0)),
            (Jt = na("scroller-end", a, M, O, ar, 0, N)),
            (Rr = N["offset" + O.op.d2]);
          var nl = Ut(ri(M, "content") || M);
          (Bt = this.markerStart = na("start", a, nl, O, ar, Rr, 0, T)),
            (Zt = this.markerEnd = na("end", a, nl, O, ar, Rr, 0, T)),
            T && (ro = I.quickSetter([Bt, Zt], O.a, Ye)),
            !Q &&
              !(ir.length && ri(M, "fixedMarkers") === !0) &&
              (W_($ ? ve : M),
              I.set([N, Jt], { force3D: !0 }),
              (Os = I.quickSetter(N, O.a, Ye)),
              (to = I.quickSetter(Jt, O.a, Ye)));
        }
        if (T) {
          var H = T.vars.onUpdate,
            U = T.vars.onUpdateParams;
          T.eventCallback("onUpdate", function () {
            x.update(0, 0, 1), H && H.apply(T, U || []);
          });
        }
        if (
          ((x.previous = function () {
            return K[K.indexOf(x) - 1];
          }),
          (x.next = function () {
            return K[K.indexOf(x) + 1];
          }),
          (x.revert = function (z, Y) {
            if (!Y) return x.kill(!0);
            var F = z !== !1 || !x.enabled,
              W = _t;
            F !== x.isReverted &&
              (F &&
                ((Dn = Math.max(me(), x.scroll.rec || 0)),
                (ke = x.progress),
                (yi = i && i.progress())),
              Bt &&
                [Bt, Zt, N, Jt].forEach(function (qe) {
                  return (qe.style.display = F ? "none" : "block");
                }),
              F && ((_t = x), x.update(F)),
              h &&
                (!P || !x.isActive) &&
                (F ? Q_(h, Ke, jr) : dc(h, Ke, wn(h), Ue)),
              F || x.update(F),
              (_t = W),
              (x.isReverted = F));
          }),
          (x.refresh = function (z, Y, F, W) {
            if (!((_t || !x.enabled) && !Y)) {
              if (h && z && Cn) {
                Je(t, "scrollEnd", U0);
                return;
              }
              !zt && V && V(x),
                (_t = x),
                Ct.tween && !F && (Ct.tween.kill(), (Ct.tween = 0)),
                q && q.pause(),
                g && i && i.revert({ kill: !1 }).invalidate(),
                x.isReverted || x.revert(!0, !0),
                (x._subPinOffset = !1);
              var qe = re(),
                ee = dt(),
                Ie = T ? T.duration() : er(M, O),
                pt = Be <= 0.01,
                je = 0,
                _e = W || 0,
                ue = Pi(F) ? F.end : r.end,
                Ln = r.endTrigger || d,
                Se = Pi(F)
                  ? F.start
                  : r.start || (r.start === 0 || !d ? 0 : h ? "0 0" : "0 100%"),
                en = (x.pinnedContainer =
                  r.pinnedContainer && Ut(r.pinnedContainer, x)),
                Hn = (d && Math.max(0, K.indexOf(x))) || 0,
                it = Hn,
                ot,
                mt,
                _i,
                Ns,
                gt,
                He,
                Yn,
                Du,
                uh,
                rl,
                Xn,
                il,
                js;
              for (
                j &&
                Pi(F) &&
                ((il = I.getProperty(N, O.p)), (js = I.getProperty(Jt, O.p)));
                it--;

              )
                (He = K[it]),
                  He.end || He.refresh(0, 1) || (_t = x),
                  (Yn = He.pin),
                  Yn &&
                    (Yn === d || Yn === h || Yn === en) &&
                    !He.isReverted &&
                    (rl || (rl = []), rl.unshift(He), He.revert(!0, !0)),
                  He !== K[it] && (Hn--, it--);
              for (
                Lt(Se) && (Se = Se(x)),
                  Se = Pp(Se, "start", x),
                  oe =
                    Dp(
                      Se,
                      d,
                      qe,
                      O,
                      me(),
                      Bt,
                      N,
                      x,
                      ee,
                      D,
                      Q,
                      Ie,
                      T,
                      x._startClamp && "_startClamp"
                    ) || (h ? -0.001 : 0),
                  Lt(ue) && (ue = ue(x)),
                  rn(ue) &&
                    !ue.indexOf("+=") &&
                    (~ue.indexOf(" ")
                      ? (ue = (rn(Se) ? Se.split(" ")[0] : "") + ue)
                      : ((je = wa(ue.substr(2), qe)),
                        (ue = rn(Se)
                          ? Se
                          : (T
                              ? I.utils.mapRange(
                                  0,
                                  T.duration(),
                                  T.scrollTrigger.start,
                                  T.scrollTrigger.end,
                                  oe
                                )
                              : oe) + je),
                        (Ln = d))),
                  ue = Pp(ue, "end", x),
                  De =
                    Math.max(
                      oe,
                      Dp(
                        ue || (Ln ? "100% 0" : Ie),
                        Ln,
                        qe,
                        O,
                        me() + je,
                        Zt,
                        Jt,
                        x,
                        ee,
                        D,
                        Q,
                        Ie,
                        T,
                        x._endClamp && "_endClamp"
                      )
                    ) || -0.001,
                  je = 0,
                  it = Hn;
                it--;

              )
                (He = K[it]),
                  (Yn = He.pin),
                  Yn &&
                    He.start - He._pinPush <= oe &&
                    !T &&
                    He.end > 0 &&
                    ((ot =
                      He.end -
                      (x._startClamp ? Math.max(0, He.start) : He.start)),
                    ((Yn === d && He.start - He._pinPush < oe) || Yn === en) &&
                      isNaN(Se) &&
                      (je += ot * (1 - He.progress)),
                    Yn === h && (_e += ot));
              if (
                ((oe += je),
                (De += je),
                x._startClamp && (x._startClamp += je),
                x._endClamp &&
                  !zt &&
                  ((x._endClamp = De || -0.001), (De = Math.min(De, er(M, O)))),
                (Be = De - oe || ((oe -= 0.01) && 0.001)),
                pt && (ke = I.utils.clamp(0, 1, I.utils.normalize(oe, De, Dn))),
                (x._pinPush = _e),
                Bt &&
                  je &&
                  ((ot = {}),
                  (ot[O.a] = "+=" + je),
                  en && (ot[O.p] = "-=" + me()),
                  I.set([Bt, Zt], ot)),
                h && !(Tf && x.end >= er(M, O)))
              )
                (ot = wn(h)),
                  (Ns = O === Ge),
                  (_i = me()),
                  (gn = parseFloat(Le(O.a)) + _e),
                  !Ie &&
                    De > 1 &&
                    ((Xn = ($ ? Te.scrollingElement || Un : M).style),
                    (Xn = {
                      style: Xn,
                      value: Xn["overflow" + O.a.toUpperCase()],
                    }),
                    $ &&
                      wn(ve)["overflow" + O.a.toUpperCase()] !== "scroll" &&
                      (Xn.style["overflow" + O.a.toUpperCase()] = "scroll")),
                  dc(h, Ke, ot),
                  (eo = ra(h)),
                  (mt = mr(h, !0)),
                  (Du = Q && ai(M, Ns ? Dt : Ge)()),
                  y
                    ? ((Ue = [y + O.os2, Be + _e + Ye]),
                      (Ue.t = Ke),
                      (it = y === Ve ? iu(h, O) + Be + _e : 0),
                      it &&
                        (Ue.push(O.d, it + Ye),
                        Ke.style.flexBasis !== "auto" &&
                          (Ke.style.flexBasis = it + Ye)),
                      Lo(Ue),
                      en &&
                        K.forEach(function (ol) {
                          ol.pin === en &&
                            ol.vars.pinSpacing !== !1 &&
                            (ol._subPinOffset = !0);
                        }),
                      Q && me(Dn))
                    : ((it = iu(h, O)),
                      it &&
                        Ke.style.flexBasis !== "auto" &&
                        (Ke.style.flexBasis = it + Ye)),
                  Q &&
                    ((gt = {
                      top: mt.top + (Ns ? _i - oe : Du) + Ye,
                      left: mt.left + (Ns ? Du : _i - oe) + Ye,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (gt[Di] = gt["max" + Yo] = Math.ceil(mt.width) + Ye),
                    (gt[Li] = gt["max" + Vd] = Math.ceil(mt.height) + Ye),
                    (gt[xn] =
                      gt[xn + $l] =
                      gt[xn + Ul] =
                      gt[xn + Wl] =
                      gt[xn + Vl] =
                        "0"),
                    (gt[Ve] = ot[Ve]),
                    (gt[Ve + $l] = ot[Ve + $l]),
                    (gt[Ve + Ul] = ot[Ve + Ul]),
                    (gt[Ve + Wl] = ot[Ve + Wl]),
                    (gt[Ve + Vl] = ot[Ve + Vl]),
                    (mi = q_(jr, gt, P)),
                    zt && me(0)),
                  i
                    ? ((uh = i._initted),
                      sc(1),
                      i.render(i.duration(), !0, !0),
                      (ur = Le(O.a) - gn + Be + _e),
                      (Mr = Math.abs(Be - ur) > 1),
                      Q && Mr && mi.splice(mi.length - 2, 2),
                      i.render(0, !0, !0),
                      uh || i.invalidate(!0),
                      i.parent || i.totalTime(i.totalTime()),
                      sc(0))
                    : (ur = Be),
                  Xn &&
                    (Xn.value
                      ? (Xn.style["overflow" + O.a.toUpperCase()] = Xn.value)
                      : Xn.style.removeProperty("overflow-" + O.a));
              else if (d && me() && !T)
                for (mt = d.parentNode; mt && mt !== ve; )
                  mt._pinOffset &&
                    ((oe -= mt._pinOffset), (De -= mt._pinOffset)),
                    (mt = mt.parentNode);
              rl &&
                rl.forEach(function (ol) {
                  return ol.revert(!1, !0);
                }),
                (x.start = oe),
                (x.end = De),
                (Et = jn = zt ? Dn : me()),
                !T && !zt && (Et < Dn && me(Dn), (x.scroll.rec = 0)),
                x.revert(!1, !0),
                (ze = xt()),
                zn && ((se = -1), zn.restart(!0)),
                (_t = 0),
                i &&
                  b &&
                  (i._initted || yi) &&
                  i.progress() !== yi &&
                  i.progress(yi || 0, !0).render(i.time(), !0, !0),
                (pt || ke !== x.progress || T || g) &&
                  (i &&
                    !b &&
                    i.totalProgress(
                      T && oe < -0.001 && !ke
                        ? I.utils.normalize(oe, De, 0)
                        : ke,
                      !0
                    ),
                  (x.progress = pt || (Et - oe) / Be === ke ? 0 : ke)),
                h && y && (Ke._pinOffset = Math.round(x.progress * ur)),
                q && q.invalidate(),
                isNaN(il) ||
                  ((il -= I.getProperty(N, O.p)),
                  (js -= I.getProperty(Jt, O.p)),
                  ia(N, O, il),
                  ia(Bt, O, il - (W || 0)),
                  ia(Jt, O, js),
                  ia(Zt, O, js - (W || 0))),
                pt && !zt && x.update(),
                c && !zt && !Nr && ((Nr = !0), c(x), (Nr = !1));
            }
          }),
          (x.getVelocity = function () {
            return ((me() - jn) / (xt() - wl)) * 1e3 || 0;
          }),
          (x.endAnimation = function () {
            ml(x.callbackAnimation),
              i &&
                (q
                  ? q.progress(1)
                  : i.paused()
                  ? b || ml(i, x.direction < 0, 1)
                  : ml(i, i.reversed()));
          }),
          (x.labelToScroll = function (z) {
            return (
              (i &&
                i.labels &&
                (oe || x.refresh() || oe) +
                  (i.labels[z] / i.duration()) * Be) ||
              0
            );
          }),
          (x.getTrailing = function (z) {
            var Y = K.indexOf(x),
              F = x.direction > 0 ? K.slice(0, Y).reverse() : K.slice(Y + 1);
            return (
              rn(z)
                ? F.filter(function (W) {
                    return W.vars.preventOverlaps === z;
                  })
                : F
            ).filter(function (W) {
              return x.direction > 0 ? W.end <= oe : W.start >= De;
            });
          }),
          (x.update = function (z, Y, F) {
            if (!(T && !F && !z)) {
              var W = zt === !0 ? Dn : x.scroll(),
                qe = z ? 0 : (W - oe) / Be,
                ee = qe < 0 ? 0 : qe > 1 ? 1 : qe || 0,
                Ie = x.progress,
                pt,
                je,
                _e,
                ue,
                Ln,
                Se,
                en,
                Hn;
              if (
                (Y &&
                  ((jn = Et),
                  (Et = T ? me() : W),
                  _ && ((gi = zr), (zr = i && !b ? i.totalProgress() : ee))),
                w &&
                  h &&
                  !_t &&
                  !qs &&
                  Cn &&
                  (!ee && oe < W + ((W - jn) / (xt() - wl)) * w
                    ? (ee = 1e-4)
                    : ee === 1 &&
                      De > W + ((W - jn) / (xt() - wl)) * w &&
                      (ee = 0.9999)),
                ee !== Ie && x.enabled)
              ) {
                if (
                  ((pt = x.isActive = !!ee && ee < 1),
                  (je = !!Ie && Ie < 1),
                  (Se = pt !== je),
                  (Ln = Se || !!ee != !!Ie),
                  (x.direction = ee > Ie ? 1 : -1),
                  (x.progress = ee),
                  Ln &&
                    !_t &&
                    ((_e = ee && !Ie ? 0 : ee === 1 ? 1 : Ie === 1 ? 2 : 3),
                    b &&
                      ((ue =
                        (!Se && B[_e + 1] !== "none" && B[_e + 1]) || B[_e]),
                      (Hn =
                        i &&
                        (ue === "complete" || ue === "reset" || ue in i)))),
                  E &&
                    (Se || Hn) &&
                    (Hn || f || !i) &&
                    (Lt(E)
                      ? E(x)
                      : x.getTrailing(E).forEach(function (_i) {
                          return _i.endAnimation();
                        })),
                  b ||
                    (q && !_t && !qs
                      ? (q._dp._time - q._start !== q._time &&
                          q.render(q._dp._time - q._start),
                        q.resetTo
                          ? q.resetTo("totalProgress", ee, i._tTime / i._tDur)
                          : ((q.vars.totalProgress = ee),
                            q.invalidate().restart()))
                      : i && i.totalProgress(ee, !!(_t && (ze || z)))),
                  h)
                ) {
                  if ((z && y && (Ke.style[y + O.os2] = tl), !Q))
                    Rn(Sl(gn + ur * ee));
                  else if (Ln) {
                    if (
                      ((en = !z && ee > Ie && De + 1 > W && W + 1 >= er(M, O)),
                      P)
                    )
                      if (!z && (pt || en)) {
                        var it = mr(h, !0),
                          ot = W - oe;
                        Lp(
                          h,
                          ve,
                          it.top + (O === Ge ? ot : 0) + Ye,
                          it.left + (O === Ge ? 0 : ot) + Ye
                        );
                      } else Lp(h, Ke);
                    Lo(pt || en ? mi : eo),
                      (Mr && ee < 1 && pt) ||
                        Rn(gn + (ee === 1 && !en ? ur : 0));
                  }
                }
                _ && !Ct.tween && !_t && !qs && zn.restart(!0),
                  s &&
                    (Se || (v && ee && (ee < 1 || !ac))) &&
                    ds(s.targets).forEach(function (_i) {
                      return _i.classList[pt || v ? "add" : "remove"](
                        s.className
                      );
                    }),
                  l && !b && !z && l(x),
                  Ln && !_t
                    ? (b &&
                        (Hn &&
                          (ue === "complete"
                            ? i.pause().totalProgress(1)
                            : ue === "reset"
                            ? i.restart(!0).pause()
                            : ue === "restart"
                            ? i.restart(!0)
                            : i[ue]()),
                        l && l(x)),
                      (Se || !ac) &&
                        (u && Se && cc(x, u),
                        X[_e] && cc(x, X[_e]),
                        v && (ee === 1 ? x.kill(!1, 1) : (X[_e] = 0)),
                        Se || ((_e = ee === 1 ? 1 : 3), X[_e] && cc(x, X[_e]))),
                      k &&
                        !pt &&
                        Math.abs(x.getVelocity()) > (Tl(k) ? k : 2500) &&
                        (ml(x.callbackAnimation),
                        q
                          ? q.progress(1)
                          : ml(i, ue === "reverse" ? 1 : !ee, 1)))
                    : b && l && !_t && l(x);
              }
              if (to) {
                var mt = T ? (W / T.duration()) * (T._caScrollDist || 0) : W;
                Os(mt + (N._isFlipped ? 1 : 0)), to(mt);
              }
              ro && ro((-W / T.duration()) * (T._caScrollDist || 0));
            }
          }),
          (x.enable = function (z, Y) {
            x.enabled ||
              ((x.enabled = !0),
              Je(M, "resize", Pl),
              $ || Je(M, "scroll", lo),
              V && Je(t, "refreshInit", V),
              z !== !1 && ((x.progress = ke = 0), (Et = jn = se = me())),
              Y !== !1 && x.refresh());
          }),
          (x.getTween = function (z) {
            return z && Ct ? Ct.tween : q;
          }),
          (x.setPositions = function (z, Y, F, W) {
            if (T) {
              var qe = T.scrollTrigger,
                ee = T.duration(),
                Ie = qe.end - qe.start;
              (z = qe.start + (Ie * z) / ee), (Y = qe.start + (Ie * Y) / ee);
            }
            x.refresh(
              !1,
              !1,
              {
                start: Cp(z, F && !!x._startClamp),
                end: Cp(Y, F && !!x._endClamp),
              },
              W
            ),
              x.update();
          }),
          (x.adjustPinSpacing = function (z) {
            if (Ue && z) {
              var Y = Ue.indexOf(O.d) + 1;
              (Ue[Y] = parseFloat(Ue[Y]) + z + Ye),
                (Ue[1] = parseFloat(Ue[1]) + z + Ye),
                Lo(Ue);
            }
          }),
          (x.disable = function (z, Y) {
            if (
              x.enabled &&
              (z !== !1 && x.revert(!0, !0),
              (x.enabled = x.isActive = !1),
              Y || (q && q.pause()),
              (Dn = 0),
              ht && (ht.uncache = 1),
              V && Ze(t, "refreshInit", V),
              zn && (zn.pause(), Ct.tween && Ct.tween.kill() && (Ct.tween = 0)),
              !$)
            ) {
              for (var F = K.length; F--; )
                if (K[F].scroller === M && K[F] !== x) return;
              Ze(M, "resize", Pl), $ || Ze(M, "scroll", lo);
            }
          }),
          (x.kill = function (z, Y) {
            x.disable(z, Y), q && !Y && q.kill(), a && delete Pf[a];
            var F = K.indexOf(x);
            F >= 0 && K.splice(F, 1),
              F === Mt && Sa > 0 && Mt--,
              (F = 0),
              K.forEach(function (W) {
                return W.scroller === x.scroller && (F = 1);
              }),
              F || zt || (x.scroll.rec = 0),
              i &&
                ((i.scrollTrigger = null),
                z && i.revert({ kill: !1 }),
                Y || i.kill()),
              Bt &&
                [Bt, Zt, N, Jt].forEach(function (W) {
                  return W.parentNode && W.parentNode.removeChild(W);
                }),
              Hl === x && (Hl = 0),
              h &&
                (ht && (ht.uncache = 1),
                (F = 0),
                K.forEach(function (W) {
                  return W.pin === h && F++;
                }),
                F || (ht.spacer = 0)),
              r.onKill && r.onKill(x);
          }),
          K.push(x),
          x.enable(!1, !1),
          cr && cr(x),
          i && i.add && !Be)
        ) {
          var le = x.update;
          (x.update = function () {
            (x.update = le), oe || De || x.refresh();
          }),
            I.delayedCall(0.01, x.update),
            (Be = 0.01),
            (oe = De = 0);
        } else x.refresh();
        h && G_();
      }),
      (t.register = function (r) {
        return (
          uo ||
            ((I = r || L0()), D0() && window.document && t.enable(), (uo = kl)),
          uo
        );
      }),
      (t.defaults = function (r) {
        if (r) for (var i in r) ta[i] = r[i];
        return ta;
      }),
      (t.disable = function (r, i) {
        (kl = 0),
          K.forEach(function (l) {
            return l[i ? "kill" : "disable"](r);
          }),
          Ze(te, "wheel", lo),
          Ze(Te, "scroll", lo),
          clearInterval(Ks),
          Ze(Te, "touchcancel", Kn),
          Ze(ve, "touchstart", Kn),
          Js(Ze, Te, "pointerdown,touchstart,mousedown", Ep),
          Js(Ze, Te, "pointerup,touchend,mouseup", Op),
          nu.kill(),
          Zs(Ze);
        for (var o = 0; o < Z.length; o += 3)
          ea(Ze, Z[o], Z[o + 1]), ea(Ze, Z[o], Z[o + 2]);
      }),
      (t.enable = function () {
        if (
          ((te = window),
          (Te = document),
          (Un = Te.documentElement),
          (ve = Te.body),
          I &&
            ((ds = I.utils.toArray),
            (Bl = I.utils.clamp),
            (Sf = I.core.context || Kn),
            (sc = I.core.suppressOverwrites || Kn),
            (Ad = te.history.scrollRestoration || "auto"),
            (Cf = te.pageYOffset),
            I.core.globals("ScrollTrigger", t),
            ve))
        ) {
          (kl = 1),
            (Do = document.createElement("div")),
            (Do.style.height = "100vh"),
            (Do.style.position = "absolute"),
            W0(),
            U_(),
            Fe.register(I),
            (t.isTouch = Fe.isTouch),
            (Ir =
              Fe.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (kf = Fe.isTouch === 1),
            Je(te, "wheel", lo),
            (N0 = [te, Te, Un, ve]),
            I.matchMedia
              ? ((t.matchMedia = function (a) {
                  var u = I.matchMedia(),
                    c;
                  for (c in a) u.add(c, a[c]);
                  return u;
                }),
                I.addEventListener("matchMediaInit", function () {
                  return Wd();
                }),
                I.addEventListener("matchMediaRevert", function () {
                  return V0();
                }),
                I.addEventListener("matchMedia", function () {
                  ji(0, 1), Gi("matchMedia");
                }),
                I.matchMedia("(orientation: portrait)", function () {
                  return fc(), fc;
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            fc(),
            Je(Te, "scroll", lo);
          var r = ve.style,
            i = r.borderTopStyle,
            o = I.core.Animation.prototype,
            l,
            s;
          for (
            o.revert ||
              Object.defineProperty(o, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              l = mr(ve),
              Ge.m = Math.round(l.top + Ge.sc()) || 0,
              Dt.m = Math.round(l.left + Dt.sc()) || 0,
              i ? (r.borderTopStyle = i) : r.removeProperty("border-top-style"),
              Ks = setInterval(Rp, 250),
              I.delayedCall(0.5, function () {
                return (qs = 0);
              }),
              Je(Te, "touchcancel", Kn),
              Je(ve, "touchstart", Kn),
              Js(Je, Te, "pointerdown,touchstart,mousedown", Ep),
              Js(Je, Te, "pointerup,touchend,mouseup", Op),
              wf = I.utils.checkPrefix("transform"),
              Ta.push(wf),
              uo = xt(),
              nu = I.delayedCall(0.2, ji).pause(),
              co = [
                Te,
                "visibilitychange",
                function () {
                  var a = te.innerWidth,
                    u = te.innerHeight;
                  Te.hidden
                    ? ((Sp = a), (Tp = u))
                    : (Sp !== a || Tp !== u) && Pl();
                },
                Te,
                "DOMContentLoaded",
                ji,
                te,
                "load",
                ji,
                te,
                "resize",
                Pl,
              ],
              Zs(Je),
              K.forEach(function (a) {
                return a.enable(0, 1);
              }),
              s = 0;
            s < Z.length;
            s += 3
          )
            ea(Ze, Z[s], Z[s + 1]), ea(Ze, Z[s], Z[s + 2]);
        }
      }),
      (t.config = function (r) {
        "limitCallbacks" in r && (ac = !!r.limitCallbacks);
        var i = r.syncInterval;
        (i && clearInterval(Ks)) || ((Ks = i) && setInterval(Rp, i)),
          "ignoreMobileResize" in r &&
            (kf = t.isTouch === 1 && r.ignoreMobileResize),
          "autoRefreshEvents" in r &&
            (Zs(Ze) || Zs(Je, r.autoRefreshEvents || "none"),
            (R0 = (r.autoRefreshEvents + "").indexOf("resize") === -1));
      }),
      (t.scrollerProxy = function (r, i) {
        var o = Ut(r),
          l = Z.indexOf(o),
          s = Yi(o);
        ~l && Z.splice(l, s ? 6 : 2),
          i && (s ? ir.unshift(te, i, ve, i, Un, i) : ir.unshift(o, i));
      }),
      (t.clearMatchMedia = function (r) {
        K.forEach(function (i) {
          return i._ctx && i._ctx.query === r && i._ctx.kill(!0, !0);
        });
      }),
      (t.isInViewport = function (r, i, o) {
        var l = (rn(r) ? Ut(r) : r).getBoundingClientRect(),
          s = l[o ? Di : Li] * i || 0;
        return o
          ? l.right - s > 0 && l.left + s < te.innerWidth
          : l.bottom - s > 0 && l.top + s < te.innerHeight;
      }),
      (t.positionInViewport = function (r, i, o) {
        rn(r) && (r = Ut(r));
        var l = r.getBoundingClientRect(),
          s = l[o ? Di : Li],
          a =
            i == null
              ? s / 2
              : i in ou
              ? ou[i] * s
              : ~i.indexOf("%")
              ? (parseFloat(i) * s) / 100
              : parseFloat(i) || 0;
        return o ? (l.left + a) / te.innerWidth : (l.top + a) / te.innerHeight;
      }),
      (t.killAll = function (r) {
        if (
          (K.slice(0).forEach(function (o) {
            return o.vars.id !== "ScrollSmoother" && o.kill();
          }),
          r !== !0)
        ) {
          var i = Xi.killAll || [];
          (Xi = {}),
            i.forEach(function (o) {
              return o();
            });
        }
      }),
      t
    );
  })();
G.version = "3.12.5";
G.saveStyles = function (t) {
  return t
    ? ds(t).forEach(function (e) {
        if (e && e.style) {
          var n = tn.indexOf(e);
          n >= 0 && tn.splice(n, 5),
            tn.push(
              e,
              e.style.cssText,
              e.getBBox && e.getAttribute("transform"),
              I.core.getCache(e),
              Sf()
            );
        }
      })
    : tn;
};
G.revert = function (t, e) {
  return Wd(!t, e);
};
G.create = function (t, e) {
  return new G(t, e);
};
G.refresh = function (t) {
  return t ? Pl() : (uo || G.register()) && ji(!0);
};
G.update = function (t) {
  return ++Z.cache && xr(t === !0 ? 2 : 0);
};
G.clearScrollMemory = $0;
G.maxScroll = function (t, e) {
  return er(t, e ? Dt : Ge);
};
G.getScrollFunc = function (t, e) {
  return ai(Ut(t), e ? Dt : Ge);
};
G.getById = function (t) {
  return Pf[t];
};
G.getAll = function () {
  return K.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
G.isScrolling = function () {
  return !!Cn;
};
G.snapDirectional = $d;
G.addEventListener = function (t, e) {
  var n = Xi[t] || (Xi[t] = []);
  ~n.indexOf(e) || n.push(e);
};
G.removeEventListener = function (t, e) {
  var n = Xi[t],
    r = n && n.indexOf(e);
  r >= 0 && n.splice(r, 1);
};
G.batch = function (t, e) {
  var n = [],
    r = {},
    i = e.interval || 0.016,
    o = e.batchMax || 1e9,
    l = function (u, c) {
      var f = [],
        d = [],
        h = I.delayedCall(i, function () {
          c(f, d), (f = []), (d = []);
        }).pause();
      return function (y) {
        f.length || h.restart(!0),
          f.push(y.trigger),
          d.push(y),
          o <= f.length && h.progress(1);
      };
    },
    s;
  for (s in e)
    r[s] =
      s.substr(0, 2) === "on" && Lt(e[s]) && s !== "onRefreshInit"
        ? l(s, e[s])
        : e[s];
  return (
    Lt(o) &&
      ((o = o()),
      Je(G, "refresh", function () {
        return (o = e.batchMax());
      })),
    ds(t).forEach(function (a) {
      var u = {};
      for (s in r) u[s] = r[s];
      (u.trigger = a), n.push(G.create(u));
    }),
    n
  );
};
var bp = function (e, n, r, i) {
    return (
      n > i ? e(i) : n < 0 && e(0),
      r > i ? (i - n) / (r - n) : r < 0 ? n / (n - r) : 1
    );
  },
  hc = function t(e, n) {
    n === !0
      ? e.style.removeProperty("touch-action")
      : (e.style.touchAction =
          n === !0
            ? "auto"
            : n
            ? "pan-" + n + (Fe.isTouch ? " pinch-zoom" : "")
            : "none"),
      e === Un && t(ve, n);
  },
  oa = { auto: 1, scroll: 1 },
  J_ = function (e) {
    var n = e.event,
      r = e.target,
      i = e.axis,
      o = (n.changedTouches ? n.changedTouches[0] : n).target,
      l = o._gsap || I.core.getCache(o),
      s = xt(),
      a;
    if (!l._isScrollT || s - l._isScrollT > 2e3) {
      for (
        ;
        o &&
        o !== ve &&
        ((o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth) ||
          !(oa[(a = wn(o)).overflowY] || oa[a.overflowX]));

      )
        o = o.parentNode;
      (l._isScroll =
        o &&
        o !== r &&
        !Yi(o) &&
        (oa[(a = wn(o)).overflowY] || oa[a.overflowX])),
        (l._isScrollT = s);
    }
    (l._isScroll || i === "x") && (n.stopPropagation(), (n._gsapAllow = !0));
  },
  Y0 = function (e, n, r, i) {
    return Fe.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: n,
      onWheel: (i = i && J_),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: function () {
        return r && Je(Te, Fe.eventTypes[0], Fp, !1, !0);
      },
      onDisable: function () {
        return Ze(Te, Fe.eventTypes[0], Fp, !0);
      },
    });
  },
  ex = /(input|label|select|textarea)/i,
  Ap,
  Fp = function (e) {
    var n = ex.test(e.target.tagName);
    (n || Ap) && ((e._gsapAllow = !0), (Ap = n));
  },
  tx = function (e) {
    Pi(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = "wheel,touch"),
      (e.debounce = !!e.debounce),
      (e.id = e.id || "normalizer");
    var n = e,
      r = n.normalizeScrollX,
      i = n.momentum,
      o = n.allowNestedScroll,
      l = n.onRelease,
      s,
      a,
      u = Ut(e.target) || Un,
      c = I.core.globals().ScrollSmoother,
      f = c && c.get(),
      d =
        Ir &&
        ((e.content && Ut(e.content)) ||
          (f && e.content !== !1 && !f.smooth() && f.content())),
      h = ai(u, Ge),
      y = ai(u, Dt),
      g = 1,
      w =
        (Fe.isTouch && te.visualViewport
          ? te.visualViewport.scale * te.visualViewport.width
          : te.outerWidth) / te.innerWidth,
      m = 0,
      p = Lt(i)
        ? function () {
            return i(s);
          }
        : function () {
            return i || 2.8;
          },
      v,
      _,
      P = Y0(u, e.type, !0, o),
      C = function () {
        return (_ = !1);
      },
      T = Kn,
      k = Kn,
      E = function () {
        (a = er(u, Ge)),
          (k = Bl(Ir ? 1 : 0, a)),
          r && (T = Bl(0, er(u, Dt))),
          (v = Ii);
      },
      O = function () {
        (d._gsap.y = Sl(parseFloat(d._gsap.y) + h.offset) + "px"),
          (d.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(d._gsap.y) +
            ", 0, 1)"),
          (h.offset = h.cacheID = 0);
      },
      b = function () {
        if (_) {
          requestAnimationFrame(C);
          var j = Sl(s.deltaY / 2),
            D = k(h.v - j);
          if (d && D !== h.v + h.offset) {
            h.offset = D - h.v;
            var x = Sl((parseFloat(d && d._gsap.y) || 0) - h.offset);
            (d.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              x +
              ", 0, 1)"),
              (d._gsap.y = x + "px"),
              (h.cacheID = Z.cache),
              xr();
          }
          return !0;
        }
        h.offset && O(), (_ = !0);
      },
      M,
      A,
      $,
      Q,
      X = function () {
        E(),
          M.isActive() &&
            M.vars.scrollY > a &&
            (h() > a ? M.progress(1) && h(a) : M.resetTo("scrollY", a));
      };
    return (
      d && I.set(d, { y: "+=0" }),
      (e.ignoreCheck = function (B) {
        return (
          (Ir && B.type === "touchmove" && b()) ||
          (g > 1.05 && B.type !== "touchstart") ||
          s.isGesturing ||
          (B.touches && B.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        _ = !1;
        var B = g;
        (g = Sl(((te.visualViewport && te.visualViewport.scale) || 1) / w)),
          M.pause(),
          B !== g && hc(u, g > 1.01 ? !0 : r ? !1 : "x"),
          (A = y()),
          ($ = h()),
          E(),
          (v = Ii);
      }),
      (e.onRelease = e.onGestureStart =
        function (B, j) {
          if ((h.offset && O(), !j)) Q.restart(!0);
          else {
            Z.cache++;
            var D = p(),
              x,
              V;
            r &&
              ((x = y()),
              (V = x + (D * 0.05 * -B.velocityX) / 0.227),
              (D *= bp(y, x, V, er(u, Dt))),
              (M.vars.scrollX = T(V))),
              (x = h()),
              (V = x + (D * 0.05 * -B.velocityY) / 0.227),
              (D *= bp(h, x, V, er(u, Ge))),
              (M.vars.scrollY = k(V)),
              M.invalidate().duration(D).play(0.01),
              ((Ir && M.vars.scrollY >= a) || x >= a - 1) &&
                I.to({}, { onUpdate: X, duration: D });
          }
          l && l(B);
        }),
      (e.onWheel = function () {
        M._ts && M.pause(), xt() - m > 1e3 && ((v = 0), (m = xt()));
      }),
      (e.onChange = function (B, j, D, x, V) {
        if (
          (Ii !== v && E(),
          j && r && y(T(x[2] === j ? A + (B.startX - B.x) : y() + j - x[1])),
          D)
        ) {
          h.offset && O();
          var re = V[2] === D,
            dt = re ? $ + B.startY - B.y : h() + D - V[1],
            se = k(dt);
          re && dt !== se && ($ += se - dt), h(se);
        }
        (D || j) && xr();
      }),
      (e.onEnable = function () {
        hc(u, r ? !1 : "x"),
          G.addEventListener("refresh", X),
          Je(te, "resize", X),
          h.smooth &&
            ((h.target.style.scrollBehavior = "auto"),
            (h.smooth = y.smooth = !1)),
          P.enable();
      }),
      (e.onDisable = function () {
        hc(u, !0),
          Ze(te, "resize", X),
          G.removeEventListener("refresh", X),
          P.kill();
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (s = new Fe(e)),
      (s.iOS = Ir),
      Ir && !h() && h(1),
      Ir && I.ticker.add(Kn),
      (Q = s._dc),
      (M = I.to(s, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: r ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: H0(h, h(), function () {
            return M.pause();
          }),
        },
        onUpdate: xr,
        onComplete: Q.vars.onComplete,
      })),
      s
    );
  };
G.sort = function (t) {
  return K.sort(
    t ||
      function (e, n) {
        return (
          (e.vars.refreshPriority || 0) * -1e6 +
          e.start -
          (n.start + (n.vars.refreshPriority || 0) * -1e6)
        );
      }
  );
};
G.observe = function (t) {
  return new Fe(t);
};
G.normalizeScroll = function (t) {
  if (typeof t > "u") return jt;
  if (t === !0 && jt) return jt.enable();
  if (t === !1) {
    jt && jt.kill(), (jt = t);
    return;
  }
  var e = t instanceof Fe ? t : tx(t);
  return jt && jt.target === e.target && jt.kill(), Yi(e.target) && (jt = e), e;
};
G.core = {
  _getVelocityProp: xf,
  _inputObserver: Y0,
  _scrollers: Z,
  _proxies: ir,
  bridge: {
    ss: function () {
      Cn || Gi("scrollStart"), (Cn = xt());
    },
    ref: function () {
      return _t;
    },
  },
};
L0() && I.registerPlugin(G);
function dr(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function X0(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var fn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Xo = { duration: 0.5, overwrite: !1, delay: 0 },
  Hd,
  St,
  we,
  Sn = 1e8,
  de = 1 / Sn,
  Of = Math.PI * 2,
  nx = Of / 4,
  rx = 0,
  G0 = Math.sqrt,
  ix = Math.cos,
  ox = Math.sin,
  rt = function (e) {
    return typeof e == "string";
  },
  Me = function (e) {
    return typeof e == "function";
  },
  Pr = function (e) {
    return typeof e == "number";
  },
  Yd = function (e) {
    return typeof e > "u";
  },
  lr = function (e) {
    return typeof e == "object";
  },
  Xt = function (e) {
    return e !== !1;
  },
  Xd = function () {
    return typeof window < "u";
  },
  la = function (e) {
    return Me(e) || rt(e);
  },
  Q0 =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Tt = Array.isArray,
  Nf = /(?:-?\.?\d|\.)+/gi,
  K0 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Po = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  pc = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  q0 = /[+-]=-?[.\d]+/,
  Z0 = /[^,'"\[\]\s]+/gi,
  lx = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  Ce,
  qn,
  jf,
  Gd,
  hn = {},
  lu = {},
  J0,
  e1 = function (e) {
    return (lu = Qi(e, hn)) && qt;
  },
  Qd = function (e, n) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      n,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ps = function (e, n) {
    return !n && console.warn(e);
  },
  t1 = function (e, n) {
    return (e && (hn[e] = n) && lu && (lu[e] = n)) || hn;
  },
  ms = function () {
    return 0;
  },
  sx = { suppressEvents: !0, isStart: !0, kill: !1 },
  Ca = { suppressEvents: !0, kill: !1 },
  ax = { suppressEvents: !0 },
  Kd = {},
  ii = [],
  Rf = {},
  n1,
  on = {},
  mc = {},
  Bp = 30,
  Ea = [],
  qd = "",
  Zd = function (e) {
    var n = e[0],
      r,
      i;
    if ((lr(n) || Me(n) || (e = [e]), !(r = (n._gsap || {}).harness))) {
      for (i = Ea.length; i-- && !Ea[i].targetTest(n); );
      r = Ea[i];
    }
    for (i = e.length; i--; )
      (e[i] && (e[i]._gsap || (e[i]._gsap = new C1(e[i], r)))) ||
        e.splice(i, 1);
    return e;
  },
  bi = function (e) {
    return e._gsap || Zd(Tn(e))[0]._gsap;
  },
  r1 = function (e, n, r) {
    return (r = e[n]) && Me(r)
      ? e[n]()
      : (Yd(r) && e.getAttribute && e.getAttribute(n)) || r;
  },
  Gt = function (e, n) {
    return (e = e.split(",")).forEach(n) || e;
  },
  be = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  tt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Io = function (e, n) {
    var r = n.charAt(0),
      i = parseFloat(n.substr(2));
    return (
      (e = parseFloat(e)),
      r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    );
  },
  ux = function (e, n) {
    for (var r = n.length, i = 0; e.indexOf(n[i]) < 0 && ++i < r; );
    return i < r;
  },
  su = function () {
    var e = ii.length,
      n = ii.slice(0),
      r,
      i;
    for (Rf = {}, ii.length = 0, r = 0; r < e; r++)
      (i = n[r]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
  },
  i1 = function (e, n, r, i) {
    ii.length && !St && su(),
      e.render(n, r, i || (St && n < 0 && (e._initted || e._startAt))),
      ii.length && !St && su();
  },
  o1 = function (e) {
    var n = parseFloat(e);
    return (n || n === 0) && (e + "").match(Z0).length < 2
      ? n
      : rt(e)
      ? e.trim()
      : e;
  },
  l1 = function (e) {
    return e;
  },
  Nn = function (e, n) {
    for (var r in n) r in e || (e[r] = n[r]);
    return e;
  },
  cx = function (e) {
    return function (n, r) {
      for (var i in r)
        i in n || (i === "duration" && e) || i === "ease" || (n[i] = r[i]);
    };
  },
  Qi = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  Up = function t(e, n) {
    for (var r in n)
      r !== "__proto__" &&
        r !== "constructor" &&
        r !== "prototype" &&
        (e[r] = lr(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
    return e;
  },
  au = function (e, n) {
    var r = {},
      i;
    for (i in e) i in n || (r[i] = e[i]);
    return r;
  },
  Yl = function (e) {
    var n = e.parent || Ce,
      r = e.keyframes ? cx(Tt(e.keyframes)) : Nn;
    if (Xt(e.inherit))
      for (; n; ) r(e, n.vars.defaults), (n = n.parent || n._dp);
    return e;
  },
  fx = function (e, n) {
    for (var r = e.length, i = r === n.length; i && r-- && e[r] === n[r]; );
    return r < 0;
  },
  s1 = function (e, n, r, i, o) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var l = e[i],
      s;
    if (o) for (s = n[o]; l && l[o] > s; ) l = l._prev;
    return (
      l ? ((n._next = l._next), (l._next = n)) : ((n._next = e[r]), (e[r] = n)),
      n._next ? (n._next._prev = n) : (e[i] = n),
      (n._prev = l),
      (n.parent = n._dp = e),
      n
    );
  },
  Ru = function (e, n, r, i) {
    r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
    var o = n._prev,
      l = n._next;
    o ? (o._next = l) : e[r] === n && (e[r] = l),
      l ? (l._prev = o) : e[i] === n && (e[i] = o),
      (n._next = n._prev = n.parent = null);
  },
  ui = function (e, n) {
    e.parent &&
      (!n || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0);
  },
  Ai = function (e, n) {
    if (e && (!n || n._end > e._dur || n._start < 0))
      for (var r = e; r; ) (r._dirty = 1), (r = r.parent);
    return e;
  },
  dx = function (e) {
    for (var n = e.parent; n && n.parent; )
      (n._dirty = 1), n.totalDuration(), (n = n.parent);
    return e;
  },
  Mf = function (e, n, r, i) {
    return (
      e._startAt &&
      (St
        ? e._startAt.revert(Ca)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(n, !0, i))
    );
  },
  hx = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Vp = function (e) {
    return e._repeat ? Go(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Go = function (e, n) {
    var r = Math.floor((e /= n));
    return e && r === e ? r - 1 : r;
  },
  uu = function (e, n) {
    return (
      (e - n._start) * n._ts +
      (n._ts >= 0 ? 0 : n._dirty ? n.totalDuration() : n._tDur)
    );
  },
  Mu = function (e) {
    return (e._end = tt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || de) || 0)
    ));
  },
  zu = function (e, n) {
    var r = e._dp;
    return (
      r &&
        r.smoothChildTiming &&
        e._ts &&
        ((e._start = tt(
          r._time -
            (e._ts > 0
              ? n / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - n) / -e._ts)
        )),
        Mu(e),
        r._dirty || Ai(r, e)),
      e
    );
  },
  a1 = function (e, n) {
    var r;
    if (
      ((n._time ||
        (!n._dur && n._initted) ||
        (n._start < e._time && (n._dur || !n.add))) &&
        ((r = uu(e.rawTime(), n)),
        (!n._dur || Cs(0, n.totalDuration(), r) - n._tTime > de) &&
          n.render(r, !0)),
      Ai(e, n)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (r = e; r._dp; )
          r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
      e._zTime = -de;
    }
  },
  Jn = function (e, n, r, i) {
    return (
      n.parent && ui(n),
      (n._start = tt(
        (Pr(r) ? r : r || e !== Ce ? vn(e, r, n) : e._time) + n._delay
      )),
      (n._end = tt(
        n._start + (n.totalDuration() / Math.abs(n.timeScale()) || 0)
      )),
      s1(e, n, "_first", "_last", e._sort ? "_start" : 0),
      zf(n) || (e._recent = n),
      i || a1(e, n),
      e._ts < 0 && zu(e, e._tTime),
      e
    );
  },
  u1 = function (e, n) {
    return (
      (hn.ScrollTrigger || Qd("scrollTrigger", n)) &&
      hn.ScrollTrigger.create(n, e)
    );
  },
  c1 = function (e, n, r, i, o) {
    if ((eh(e, n, o), !e._initted)) return 1;
    if (
      !r &&
      e._pt &&
      !St &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      n1 !== sn.frame
    )
      return ii.push(e), (e._lazy = [o, i]), 1;
  },
  px = function t(e) {
    var n = e.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n));
  },
  zf = function (e) {
    var n = e.data;
    return n === "isFromStart" || n === "isStart";
  },
  mx = function (e, n, r, i) {
    var o = e.ratio,
      l =
        n < 0 ||
        (!n &&
          ((!e._start && px(e) && !(!e._initted && zf(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !zf(e))))
          ? 0
          : 1,
      s = e._rDelay,
      a = 0,
      u,
      c,
      f;
    if (
      (s &&
        e._repeat &&
        ((a = Cs(0, e._tDur, n)),
        (c = Go(a, s)),
        e._yoyo && c & 1 && (l = 1 - l),
        c !== Go(e._tTime, s) &&
          ((o = 1 - l), e.vars.repeatRefresh && e._initted && e.invalidate())),
      l !== o || St || i || e._zTime === de || (!n && e._zTime))
    ) {
      if (!e._initted && c1(e, n, i, r, a)) return;
      for (
        f = e._zTime,
          e._zTime = n || (r ? de : 0),
          r || (r = n && !f),
          e.ratio = l,
          e._from && (l = 1 - l),
          e._time = 0,
          e._tTime = a,
          u = e._pt;
        u;

      )
        u.r(l, u.d), (u = u._next);
      n < 0 && Mf(e, n, r, !0),
        e._onUpdate && !r && un(e, "onUpdate"),
        a && e._repeat && !r && e.parent && un(e, "onRepeat"),
        (n >= e._tDur || n < 0) &&
          e.ratio === l &&
          (l && ui(e, 1),
          !r &&
            !St &&
            (un(e, l ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom()));
    } else e._zTime || (e._zTime = n);
  },
  gx = function (e, n, r) {
    var i;
    if (r > n)
      for (i = e._first; i && i._start <= r; ) {
        if (i.data === "isPause" && i._start > n) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= r; ) {
        if (i.data === "isPause" && i._start < n) return i;
        i = i._prev;
      }
  },
  Qo = function (e, n, r, i) {
    var o = e._repeat,
      l = tt(n) || 0,
      s = e._tTime / e._tDur;
    return (
      s && !i && (e._time *= l / e._dur),
      (e._dur = l),
      (e._tDur = o ? (o < 0 ? 1e10 : tt(l * (o + 1) + e._rDelay * o)) : l),
      s > 0 && !i && zu(e, (e._tTime = e._tDur * s)),
      e.parent && Mu(e),
      r || Ai(e.parent, e),
      e
    );
  },
  $p = function (e) {
    return e instanceof It ? Ai(e) : Qo(e, e._dur);
  },
  vx = { _start: 0, endTime: ms, totalDuration: ms },
  vn = function t(e, n, r) {
    var i = e.labels,
      o = e._recent || vx,
      l = e.duration() >= Sn ? o.endTime(!1) : e._dur,
      s,
      a,
      u;
    return rt(n) && (isNaN(n) || n in i)
      ? ((a = n.charAt(0)),
        (u = n.substr(-1) === "%"),
        (s = n.indexOf("=")),
        a === "<" || a === ">"
          ? (s >= 0 && (n = n.replace(/=/, "")),
            (a === "<" ? o._start : o.endTime(o._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) *
                (u ? (s < 0 ? o : r).totalDuration() / 100 : 1))
          : s < 0
          ? (n in i || (i[n] = l), i[n])
          : ((a = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
            u && r && (a = (a / 100) * (Tt(r) ? r[0] : r).totalDuration()),
            s > 1 ? t(e, n.substr(0, s - 1), r) + a : l + a))
      : n == null
      ? l
      : +n;
  },
  Xl = function (e, n, r) {
    var i = Pr(n[1]),
      o = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      l = n[o],
      s,
      a;
    if ((i && (l.duration = n[1]), (l.parent = r), e)) {
      for (s = l, a = r; a && !("immediateRender" in s); )
        (s = a.vars.defaults || {}), (a = Xt(a.vars.inherit) && a.parent);
      (l.immediateRender = Xt(s.immediateRender)),
        e < 2 ? (l.runBackwards = 1) : (l.startAt = n[o - 1]);
    }
    return new $e(n[0], l, n[o + 1]);
  },
  pi = function (e, n) {
    return e || e === 0 ? n(e) : n;
  },
  Cs = function (e, n, r) {
    return r < e ? e : r > n ? n : r;
  },
  kt = function (e, n) {
    return !rt(e) || !(n = lx.exec(e)) ? "" : n[1];
  },
  yx = function (e, n, r) {
    return pi(r, function (i) {
      return Cs(e, n, i);
    });
  },
  Df = [].slice,
  f1 = function (e, n) {
    return (
      e &&
      lr(e) &&
      "length" in e &&
      ((!n && !e.length) || (e.length - 1 in e && lr(e[0]))) &&
      !e.nodeType &&
      e !== qn
    );
  },
  _x = function (e, n, r) {
    return (
      r === void 0 && (r = []),
      e.forEach(function (i) {
        var o;
        return (rt(i) && !n) || f1(i, 1)
          ? (o = r).push.apply(o, Tn(i))
          : r.push(i);
      }) || r
    );
  },
  Tn = function (e, n, r) {
    return we && !n && we.selector
      ? we.selector(e)
      : rt(e) && !r && (jf || !Ko())
      ? Df.call((n || Gd).querySelectorAll(e), 0)
      : Tt(e)
      ? _x(e, r)
      : f1(e)
      ? Df.call(e, 0)
      : e
      ? [e]
      : [];
  },
  Lf = function (e) {
    return (
      (e = Tn(e)[0] || ps("Invalid scope") || {}),
      function (n) {
        var r = e.current || e.nativeElement || e;
        return Tn(
          n,
          r.querySelectorAll
            ? r
            : r === e
            ? ps("Invalid scope") || Gd.createElement("div")
            : e
        );
      }
    );
  },
  d1 = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  h1 = function (e) {
    if (Me(e)) return e;
    var n = lr(e) ? e : { each: e },
      r = Fi(n.ease),
      i = n.from || 0,
      o = parseFloat(n.base) || 0,
      l = {},
      s = i > 0 && i < 1,
      a = isNaN(i) || s,
      u = n.axis,
      c = i,
      f = i;
    return (
      rt(i)
        ? (c = f = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !s && a && ((c = i[0]), (f = i[1])),
      function (d, h, y) {
        var g = (y || n).length,
          w = l[g],
          m,
          p,
          v,
          _,
          P,
          C,
          T,
          k,
          E;
        if (!w) {
          if (((E = n.grid === "auto" ? 0 : (n.grid || [1, Sn])[1]), !E)) {
            for (
              T = -Sn;
              T < (T = y[E++].getBoundingClientRect().left) && E < g;

            );
            E < g && E--;
          }
          for (
            w = l[g] = [],
              m = a ? Math.min(E, g) * c - 0.5 : i % E,
              p = E === Sn ? 0 : a ? (g * f) / E - 0.5 : (i / E) | 0,
              T = 0,
              k = Sn,
              C = 0;
            C < g;
            C++
          )
            (v = (C % E) - m),
              (_ = p - ((C / E) | 0)),
              (w[C] = P = u ? Math.abs(u === "y" ? _ : v) : G0(v * v + _ * _)),
              P > T && (T = P),
              P < k && (k = P);
          i === "random" && d1(w),
            (w.max = T - k),
            (w.min = k),
            (w.v = g =
              (parseFloat(n.amount) ||
                parseFloat(n.each) *
                  (E > g
                    ? g - 1
                    : u
                    ? u === "y"
                      ? g / E
                      : E
                    : Math.max(E, g / E)) ||
                0) * (i === "edges" ? -1 : 1)),
            (w.b = g < 0 ? o - g : o),
            (w.u = kt(n.amount || n.each) || 0),
            (r = r && g < 0 ? S1(r) : r);
        }
        return (
          (g = (w[d] - w.min) / w.max || 0),
          tt(w.b + (r ? r(g) : g) * w.v) + w.u
        );
      }
    );
  },
  If = function (e) {
    var n = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (r) {
      var i = tt(Math.round(parseFloat(r) / e) * e * n);
      return (i - (i % 1)) / n + (Pr(r) ? 0 : kt(r));
    };
  },
  p1 = function (e, n) {
    var r = Tt(e),
      i,
      o;
    return (
      !r &&
        lr(e) &&
        ((i = r = e.radius || Sn),
        e.values
          ? ((e = Tn(e.values)), (o = !Pr(e[0])) && (i *= i))
          : (e = If(e.increment))),
      pi(
        n,
        r
          ? Me(e)
            ? function (l) {
                return (o = e(l)), Math.abs(o - l) <= i ? o : l;
              }
            : function (l) {
                for (
                  var s = parseFloat(o ? l.x : l),
                    a = parseFloat(o ? l.y : 0),
                    u = Sn,
                    c = 0,
                    f = e.length,
                    d,
                    h;
                  f--;

                )
                  o
                    ? ((d = e[f].x - s), (h = e[f].y - a), (d = d * d + h * h))
                    : (d = Math.abs(e[f] - s)),
                    d < u && ((u = d), (c = f));
                return (
                  (c = !i || u <= i ? e[c] : l),
                  o || c === l || Pr(l) ? c : c + kt(l)
                );
              }
          : If(e)
      )
    );
  },
  m1 = function (e, n, r, i) {
    return pi(Tt(e) ? !n : r === !0 ? !!(r = 0) : !i, function () {
      return Tt(e)
        ? e[~~(Math.random() * e.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - r / 2 + Math.random() * (n - e + r * 0.99)) / r) *
                r *
                i
            ) / i;
    });
  },
  xx = function () {
    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
      n[r] = arguments[r];
    return function (i) {
      return n.reduce(function (o, l) {
        return l(o);
      }, i);
    };
  },
  wx = function (e, n) {
    return function (r) {
      return e(parseFloat(r)) + (n || kt(r));
    };
  },
  kx = function (e, n, r) {
    return v1(e, n, 0, 1, r);
  },
  g1 = function (e, n, r) {
    return pi(r, function (i) {
      return e[~~n(i)];
    });
  },
  Sx = function t(e, n, r) {
    var i = n - e;
    return Tt(e)
      ? g1(e, t(0, e.length), n)
      : pi(r, function (o) {
          return ((i + ((o - e) % i)) % i) + e;
        });
  },
  Tx = function t(e, n, r) {
    var i = n - e,
      o = i * 2;
    return Tt(e)
      ? g1(e, t(0, e.length - 1), n)
      : pi(r, function (l) {
          return (l = (o + ((l - e) % o)) % o || 0), e + (l > i ? o - l : l);
        });
  },
  gs = function (e) {
    for (var n = 0, r = "", i, o, l, s; ~(i = e.indexOf("random(", n)); )
      (l = e.indexOf(")", i)),
        (s = e.charAt(i + 7) === "["),
        (o = e.substr(i + 7, l - i - 7).match(s ? Z0 : Nf)),
        (r +=
          e.substr(n, i - n) + m1(s ? o : +o[0], s ? 0 : +o[1], +o[2] || 1e-5)),
        (n = l + 1);
    return r + e.substr(n, e.length - n);
  },
  v1 = function (e, n, r, i, o) {
    var l = n - e,
      s = i - r;
    return pi(o, function (a) {
      return r + (((a - e) / l) * s || 0);
    });
  },
  Px = function t(e, n, r, i) {
    var o = isNaN(e + n)
      ? 0
      : function (h) {
          return (1 - h) * e + h * n;
        };
    if (!o) {
      var l = rt(e),
        s = {},
        a,
        u,
        c,
        f,
        d;
      if ((r === !0 && (i = 1) && (r = null), l))
        (e = { p: e }), (n = { p: n });
      else if (Tt(e) && !Tt(n)) {
        for (c = [], f = e.length, d = f - 2, u = 1; u < f; u++)
          c.push(t(e[u - 1], e[u]));
        f--,
          (o = function (y) {
            y *= f;
            var g = Math.min(d, ~~y);
            return c[g](y - g);
          }),
          (r = n);
      } else i || (e = Qi(Tt(e) ? [] : {}, e));
      if (!c) {
        for (a in n) Jd.call(s, e, a, "get", n[a]);
        o = function (y) {
          return rh(y, s) || (l ? e.p : e);
        };
      }
    }
    return pi(r, o);
  },
  Wp = function (e, n, r) {
    var i = e.labels,
      o = Sn,
      l,
      s,
      a;
    for (l in i)
      (s = i[l] - n),
        s < 0 == !!r && s && o > (s = Math.abs(s)) && ((a = l), (o = s));
    return a;
  },
  un = function (e, n, r) {
    var i = e.vars,
      o = i[n],
      l = we,
      s = e._ctx,
      a,
      u,
      c;
    if (o)
      return (
        (a = i[n + "Params"]),
        (u = i.callbackScope || e),
        r && ii.length && su(),
        s && (we = s),
        (c = a ? o.apply(u, a) : o.call(u)),
        (we = l),
        c
      );
  },
  Cl = function (e) {
    return (
      ui(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!St),
      e.progress() < 1 && un(e, "onInterrupt"),
      e
    );
  },
  Co,
  y1 = [],
  _1 = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Xd() || e.headless)) {
        var n = e.name,
          r = Me(e),
          i =
            n && !r && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          o = {
            init: ms,
            render: rh,
            add: Jd,
            kill: Ux,
            modifier: Bx,
            rawVars: 0,
          },
          l = {
            targetTest: 0,
            get: 0,
            getSetter: nh,
            aliases: {},
            register: 0,
          };
        if ((Ko(), e !== i)) {
          if (on[n]) return;
          Nn(i, Nn(au(e, o), l)),
            Qi(i.prototype, Qi(o, au(e, l))),
            (on[(i.prop = n)] = i),
            e.targetTest && (Ea.push(i), (Kd[n] = 1)),
            (n =
              (n === "css" ? "CSS" : n.charAt(0).toUpperCase() + n.substr(1)) +
              "Plugin");
        }
        t1(n, i), e.register && e.register(qt, i, Qt);
      } else y1.push(e);
  },
  ce = 255,
  El = {
    aqua: [0, ce, ce],
    lime: [0, ce, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ce],
    navy: [0, 0, 128],
    white: [ce, ce, ce],
    olive: [128, 128, 0],
    yellow: [ce, ce, 0],
    orange: [ce, 165, 0],
    secondary: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ce, 0, 0],
    pink: [ce, 192, 203],
    cyan: [0, ce, ce],
    transparent: [ce, ce, ce, 0],
  },
  gc = function (e, n, r) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? n + (r - n) * e * 6
        : e < 0.5
        ? r
        : e * 3 < 2
        ? n + (r - n) * (2 / 3 - e) * 6
        : n) *
        ce +
        0.5) |
        0
    );
  },
  x1 = function (e, n, r) {
    var i = e ? (Pr(e) ? [e >> 16, (e >> 8) & ce, e & ce] : 0) : El.black,
      o,
      l,
      s,
      a,
      u,
      c,
      f,
      d,
      h,
      y;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), El[e]))
        i = El[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((o = e.charAt(1)),
            (l = e.charAt(2)),
            (s = e.charAt(3)),
            (e =
              "#" +
              o +
              o +
              l +
              l +
              s +
              s +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & ce, i & ce, parseInt(e.substr(7), 16) / 255]
          );
        (e = parseInt(e.substr(1), 16)), (i = [e >> 16, (e >> 8) & ce, e & ce]);
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = y = e.match(Nf)), !n))
          (a = (+i[0] % 360) / 360),
            (u = +i[1] / 100),
            (c = +i[2] / 100),
            (l = c <= 0.5 ? c * (u + 1) : c + u - c * u),
            (o = c * 2 - l),
            i.length > 3 && (i[3] *= 1),
            (i[0] = gc(a + 1 / 3, o, l)),
            (i[1] = gc(a, o, l)),
            (i[2] = gc(a - 1 / 3, o, l));
        else if (~e.indexOf("="))
          return (i = e.match(K0)), r && i.length < 4 && (i[3] = 1), i;
      } else i = e.match(Nf) || El.transparent;
      i = i.map(Number);
    }
    return (
      n &&
        !y &&
        ((o = i[0] / ce),
        (l = i[1] / ce),
        (s = i[2] / ce),
        (f = Math.max(o, l, s)),
        (d = Math.min(o, l, s)),
        (c = (f + d) / 2),
        f === d
          ? (a = u = 0)
          : ((h = f - d),
            (u = c > 0.5 ? h / (2 - f - d) : h / (f + d)),
            (a =
              f === o
                ? (l - s) / h + (l < s ? 6 : 0)
                : f === l
                ? (s - o) / h + 2
                : (o - l) / h + 4),
            (a *= 60)),
        (i[0] = ~~(a + 0.5)),
        (i[1] = ~~(u * 100 + 0.5)),
        (i[2] = ~~(c * 100 + 0.5))),
      r && i.length < 4 && (i[3] = 1),
      i
    );
  },
  w1 = function (e) {
    var n = [],
      r = [],
      i = -1;
    return (
      e.split(oi).forEach(function (o) {
        var l = o.match(Po) || [];
        n.push.apply(n, l), r.push((i += l.length + 1));
      }),
      (n.c = r),
      n
    );
  },
  Hp = function (e, n, r) {
    var i = "",
      o = (e + i).match(oi),
      l = n ? "hsla(" : "rgba(",
      s = 0,
      a,
      u,
      c,
      f;
    if (!o) return e;
    if (
      ((o = o.map(function (d) {
        return (
          (d = x1(d, n, 1)) &&
          l +
            (n ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      r && ((c = w1(e)), (a = r.c), a.join(i) !== c.c.join(i)))
    )
      for (u = e.replace(oi, "1").split(Po), f = u.length - 1; s < f; s++)
        i +=
          u[s] +
          (~a.indexOf(s)
            ? o.shift() || l + "0,0,0,0)"
            : (c.length ? c : o.length ? o : r).shift());
    if (!u)
      for (u = e.split(oi), f = u.length - 1; s < f; s++) i += u[s] + o[s];
    return i + u[f];
  },
  oi = (function () {
    var t =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in El) t += "|" + e + "\\b";
    return new RegExp(t + ")", "gi");
  })(),
  Cx = /hsl[a]?\(/,
  k1 = function (e) {
    var n = e.join(" "),
      r;
    if (((oi.lastIndex = 0), oi.test(n)))
      return (
        (r = Cx.test(n)),
        (e[1] = Hp(e[1], r)),
        (e[0] = Hp(e[0], r, w1(e[1]))),
        !0
      );
  },
  vs,
  sn = (function () {
    var t = Date.now,
      e = 500,
      n = 33,
      r = t(),
      i = r,
      o = 1e3 / 240,
      l = o,
      s = [],
      a,
      u,
      c,
      f,
      d,
      h,
      y = function g(w) {
        var m = t() - i,
          p = w === !0,
          v,
          _,
          P,
          C;
        if (
          ((m > e || m < 0) && (r += m - n),
          (i += m),
          (P = i - r),
          (v = P - l),
          (v > 0 || p) &&
            ((C = ++f.frame),
            (d = P - f.time * 1e3),
            (f.time = P = P / 1e3),
            (l += v + (v >= o ? 4 : o - v)),
            (_ = 1)),
          p || (a = u(g)),
          _)
        )
          for (h = 0; h < s.length; h++) s[h](P, d, C, w);
      };
    return (
      (f = {
        time: 0,
        frame: 0,
        tick: function () {
          y(!0);
        },
        deltaRatio: function (w) {
          return d / (1e3 / (w || 60));
        },
        wake: function () {
          J0 &&
            (!jf &&
              Xd() &&
              ((qn = jf = window),
              (Gd = qn.document || {}),
              (hn.gsap = qt),
              (qn.gsapVersions || (qn.gsapVersions = [])).push(qt.version),
              e1(lu || qn.GreenSockGlobals || (!qn.gsap && qn) || {}),
              y1.forEach(_1)),
            (c = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            a && f.sleep(),
            (u =
              c ||
              function (w) {
                return setTimeout(w, (l - f.time * 1e3 + 1) | 0);
              }),
            (vs = 1),
            y(2));
        },
        sleep: function () {
          (c ? cancelAnimationFrame : clearTimeout)(a), (vs = 0), (u = ms);
        },
        lagSmoothing: function (w, m) {
          (e = w || 1 / 0), (n = Math.min(m || 33, e));
        },
        fps: function (w) {
          (o = 1e3 / (w || 240)), (l = f.time * 1e3 + o);
        },
        add: function (w, m, p) {
          var v = m
            ? function (_, P, C, T) {
                w(_, P, C, T), f.remove(v);
              }
            : w;
          return f.remove(w), s[p ? "unshift" : "push"](v), Ko(), v;
        },
        remove: function (w, m) {
          ~(m = s.indexOf(w)) && s.splice(m, 1) && h >= m && h--;
        },
        _listeners: s,
      }),
      f
    );
  })(),
  Ko = function () {
    return !vs && sn.wake();
  },
  ne = {},
  Ex = /^[\d.\-M][\d.\-,\s]/,
  Ox = /["']/g,
  Nx = function (e) {
    for (
      var n = {},
        r = e.substr(1, e.length - 3).split(":"),
        i = r[0],
        o = 1,
        l = r.length,
        s,
        a,
        u;
      o < l;
      o++
    )
      (a = r[o]),
        (s = o !== l - 1 ? a.lastIndexOf(",") : a.length),
        (u = a.substr(0, s)),
        (n[i] = isNaN(u) ? u.replace(Ox, "").trim() : +u),
        (i = a.substr(s + 1).trim());
    return n;
  },
  jx = function (e) {
    var n = e.indexOf("(") + 1,
      r = e.indexOf(")"),
      i = e.indexOf("(", n);
    return e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r);
  },
  Rx = function (e) {
    var n = (e + "").split("("),
      r = ne[n[0]];
    return r && n.length > 1 && r.config
      ? r.config.apply(
          null,
          ~e.indexOf("{") ? [Nx(n[1])] : jx(e).split(",").map(o1)
        )
      : ne._CE && Ex.test(e)
      ? ne._CE("", e)
      : r;
  },
  S1 = function (e) {
    return function (n) {
      return 1 - e(1 - n);
    };
  },
  T1 = function t(e, n) {
    for (var r = e._first, i; r; )
      r instanceof It
        ? t(r, n)
        : r.vars.yoyoEase &&
          (!r._yoyo || !r._repeat) &&
          r._yoyo !== n &&
          (r.timeline
            ? t(r.timeline, n)
            : ((i = r._ease),
              (r._ease = r._yEase),
              (r._yEase = i),
              (r._yoyo = n))),
        (r = r._next);
  },
  Fi = function (e, n) {
    return (e && (Me(e) ? e : ne[e] || Rx(e))) || n;
  },
  Ji = function (e, n, r, i) {
    r === void 0 &&
      (r = function (a) {
        return 1 - n(1 - a);
      }),
      i === void 0 &&
        (i = function (a) {
          return a < 0.5 ? n(a * 2) / 2 : 1 - n((1 - a) * 2) / 2;
        });
    var o = { easeIn: n, easeOut: r, easeInOut: i },
      l;
    return (
      Gt(e, function (s) {
        (ne[s] = hn[s] = o), (ne[(l = s.toLowerCase())] = r);
        for (var a in o)
          ne[
            l + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")
          ] = ne[s + "." + a] = o[a];
      }),
      o
    );
  },
  P1 = function (e) {
    return function (n) {
      return n < 0.5 ? (1 - e(1 - n * 2)) / 2 : 0.5 + e((n - 0.5) * 2) / 2;
    };
  },
  vc = function t(e, n, r) {
    var i = n >= 1 ? n : 1,
      o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      l = (o / Of) * (Math.asin(1 / i) || 0),
      s = function (c) {
        return c === 1 ? 1 : i * Math.pow(2, -10 * c) * ox((c - l) * o) + 1;
      },
      a =
        e === "out"
          ? s
          : e === "in"
          ? function (u) {
              return 1 - s(1 - u);
            }
          : P1(s);
    return (
      (o = Of / o),
      (a.config = function (u, c) {
        return t(e, u, c);
      }),
      a
    );
  },
  yc = function t(e, n) {
    n === void 0 && (n = 1.70158);
    var r = function (l) {
        return l ? --l * l * ((n + 1) * l + n) + 1 : 0;
      },
      i =
        e === "out"
          ? r
          : e === "in"
          ? function (o) {
              return 1 - r(1 - o);
            }
          : P1(r);
    return (
      (i.config = function (o) {
        return t(e, o);
      }),
      i
    );
  };
Gt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var n = e < 5 ? e + 1 : e;
  Ji(
    t + ",Power" + (n - 1),
    e
      ? function (r) {
          return Math.pow(r, n);
        }
      : function (r) {
          return r;
        },
    function (r) {
      return 1 - Math.pow(1 - r, n);
    },
    function (r) {
      return r < 0.5
        ? Math.pow(r * 2, n) / 2
        : 1 - Math.pow((1 - r) * 2, n) / 2;
    }
  );
});
ne.Linear.easeNone = ne.none = ne.Linear.easeIn;
Ji("Elastic", vc("in"), vc("out"), vc());
(function (t, e) {
  var n = 1 / e,
    r = 2 * n,
    i = 2.5 * n,
    o = function (s) {
      return s < n
        ? t * s * s
        : s < r
        ? t * Math.pow(s - 1.5 / e, 2) + 0.75
        : s < i
        ? t * (s -= 2.25 / e) * s + 0.9375
        : t * Math.pow(s - 2.625 / e, 2) + 0.984375;
    };
  Ji(
    "Bounce",
    function (l) {
      return 1 - o(1 - l);
    },
    o
  );
})(7.5625, 2.75);
Ji("Expo", function (t) {
  return t ? Math.pow(2, 10 * (t - 1)) : 0;
});
Ji("Circ", function (t) {
  return -(G0(1 - t * t) - 1);
});
Ji("Sine", function (t) {
  return t === 1 ? 1 : -ix(t * nx) + 1;
});
Ji("Back", yc("in"), yc("out"), yc());
ne.SteppedEase =
  ne.steps =
  hn.SteppedEase =
    {
      config: function (e, n) {
        e === void 0 && (e = 1);
        var r = 1 / e,
          i = e + (n ? 0 : 1),
          o = n ? 1 : 0,
          l = 1 - de;
        return function (s) {
          return (((i * Cs(0, l, s)) | 0) + o) * r;
        };
      },
    };
Xo.ease = ne["quad.out"];
Gt(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (t) {
    return (qd += t + "," + t + "Params,");
  }
);
var C1 = function (e, n) {
    (this.id = rx++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = n),
      (this.get = n ? n.get : r1),
      (this.set = n ? n.getSetter : nh);
  },
  ys = (function () {
    function t(n) {
      (this.vars = n),
        (this._delay = +n.delay || 0),
        (this._repeat = n.repeat === 1 / 0 ? -2 : n.repeat || 0) &&
          ((this._rDelay = n.repeatDelay || 0),
          (this._yoyo = !!n.yoyo || !!n.yoyoEase)),
        (this._ts = 1),
        Qo(this, +n.duration, 1, 1),
        (this.data = n.data),
        we && ((this._ctx = we), we.data.push(this)),
        vs || sn.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (r) {
        return r || r === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + r - this._delay),
            (this._delay = r),
            this)
          : this._delay;
      }),
      (e.duration = function (r) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (r) {
        return arguments.length
          ? ((this._dirty = 0),
            Qo(
              this,
              this._repeat < 0
                ? r
                : (r - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (r, i) {
        if ((Ko(), !arguments.length)) return this._tTime;
        var o = this._dp;
        if (o && o.smoothChildTiming && this._ts) {
          for (zu(this, r), !o._dp || o.parent || a1(o, this); o && o.parent; )
            o.parent._time !==
              o._start +
                (o._ts >= 0
                  ? o._tTime / o._ts
                  : (o.totalDuration() - o._tTime) / -o._ts) &&
              o.totalTime(o._tTime, !0),
              (o = o.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && r < this._tDur) ||
              (this._ts < 0 && r > 0) ||
              (!this._tDur && !r)) &&
            Jn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== r ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === de) ||
            (!r && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = r), i1(this, r, i)),
          this
        );
      }),
      (e.time = function (r, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), r + Vp(this)) %
                (this._dur + this._rDelay) || (r ? this._dur : 0),
              i
            )
          : this._time;
      }),
      (e.totalProgress = function (r, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * r, i)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.progress = function (r, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) +
                Vp(this),
              i
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (e.iteration = function (r, i) {
        var o = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (r - 1) * o, i)
          : this._repeat
          ? Go(this._tTime, o) + 1
          : 1;
      }),
      (e.timeScale = function (r, i) {
        if (!arguments.length) return this._rts === -de ? 0 : this._rts;
        if (this._rts === r) return this;
        var o =
          this.parent && this._ts ? uu(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +r || 0),
          (this._ts = this._ps || r === -de ? 0 : this._rts),
          this.totalTime(Cs(-Math.abs(this._delay), this._tDur, o), i !== !1),
          Mu(this),
          dx(this)
        );
      }),
      (e.paused = function (r) {
        return arguments.length
          ? (this._ps !== r &&
              ((this._ps = r),
              r
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ko(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== de &&
                      (this._tTime -= de)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (r) {
        if (arguments.length) {
          this._start = r;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && Jn(i, this, r - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (r) {
        return (
          this._start +
          (Xt(r) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (r) {
        var i = this.parent || this._dp;
        return i
          ? r &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? uu(i.rawTime(r), this)
            : this._tTime
          : this._tTime;
      }),
      (e.revert = function (r) {
        r === void 0 && (r = ax);
        var i = St;
        return (
          (St = r),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(r),
            this.totalTime(-0.01, r.suppressEvents)),
          this.data !== "nested" && r.kill !== !1 && this.kill(),
          (St = i),
          this
        );
      }),
      (e.globalTime = function (r) {
        for (var i = this, o = arguments.length ? r : i.rawTime(); i; )
          (o = i._start + o / (Math.abs(i._ts) || 1)), (i = i._dp);
        return !this.parent && this._sat ? this._sat.globalTime(r) : o;
      }),
      (e.repeat = function (r) {
        return arguments.length
          ? ((this._repeat = r === 1 / 0 ? -2 : r), $p(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (r) {
        if (arguments.length) {
          var i = this._time;
          return (this._rDelay = r), $p(this), i ? this.time(i) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (r) {
        return arguments.length ? ((this._yoyo = r), this) : this._yoyo;
      }),
      (e.seek = function (r, i) {
        return this.totalTime(vn(this, r), Xt(i));
      }),
      (e.restart = function (r, i) {
        return this.play().totalTime(r ? -this._delay : 0, Xt(i));
      }),
      (e.play = function (r, i) {
        return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (r, i) {
        return (
          r != null && this.seek(r || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (r, i) {
        return r != null && this.seek(r, i), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (r) {
        return arguments.length
          ? (!!r !== this.reversed() &&
              this.timeScale(-this._rts || (r ? -de : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -de), this;
      }),
      (e.isActive = function () {
        var r = this.parent || this._dp,
          i = this._start,
          o;
        return !!(
          !r ||
          (this._ts &&
            this._initted &&
            r.isActive() &&
            (o = r.rawTime(!0)) >= i &&
            o < this.endTime(!0) - de)
        );
      }),
      (e.eventCallback = function (r, i, o) {
        var l = this.vars;
        return arguments.length > 1
          ? (i
              ? ((l[r] = i),
                o && (l[r + "Params"] = o),
                r === "onUpdate" && (this._onUpdate = i))
              : delete l[r],
            this)
          : l[r];
      }),
      (e.then = function (r) {
        var i = this;
        return new Promise(function (o) {
          var l = Me(r) ? r : l1,
            s = function () {
              var u = i.then;
              (i.then = null),
                Me(l) && (l = l(i)) && (l.then || l === i) && (i.then = u),
                o(l),
                (i.then = u);
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? s()
            : (i._prom = s);
        });
      }),
      (e.kill = function () {
        Cl(this);
      }),
      t
    );
  })();
Nn(ys.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -de,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var It = (function (t) {
  X0(e, t);
  function e(r, i) {
    var o;
    return (
      r === void 0 && (r = {}),
      (o = t.call(this, r) || this),
      (o.labels = {}),
      (o.smoothChildTiming = !!r.smoothChildTiming),
      (o.autoRemoveChildren = !!r.autoRemoveChildren),
      (o._sort = Xt(r.sortChildren)),
      Ce && Jn(r.parent || Ce, dr(o), i),
      r.reversed && o.reverse(),
      r.paused && o.paused(!0),
      r.scrollTrigger && u1(dr(o), r.scrollTrigger),
      o
    );
  }
  var n = e.prototype;
  return (
    (n.to = function (i, o, l) {
      return Xl(0, arguments, this), this;
    }),
    (n.from = function (i, o, l) {
      return Xl(1, arguments, this), this;
    }),
    (n.fromTo = function (i, o, l, s) {
      return Xl(2, arguments, this), this;
    }),
    (n.set = function (i, o, l) {
      return (
        (o.duration = 0),
        (o.parent = this),
        Yl(o).repeatDelay || (o.repeat = 0),
        (o.immediateRender = !!o.immediateRender),
        new $e(i, o, vn(this, l), 1),
        this
      );
    }),
    (n.call = function (i, o, l) {
      return Jn(this, $e.delayedCall(0, i, o), l);
    }),
    (n.staggerTo = function (i, o, l, s, a, u, c) {
      return (
        (l.duration = o),
        (l.stagger = l.stagger || s),
        (l.onComplete = u),
        (l.onCompleteParams = c),
        (l.parent = this),
        new $e(i, l, vn(this, a)),
        this
      );
    }),
    (n.staggerFrom = function (i, o, l, s, a, u, c) {
      return (
        (l.runBackwards = 1),
        (Yl(l).immediateRender = Xt(l.immediateRender)),
        this.staggerTo(i, o, l, s, a, u, c)
      );
    }),
    (n.staggerFromTo = function (i, o, l, s, a, u, c, f) {
      return (
        (s.startAt = l),
        (Yl(s).immediateRender = Xt(s.immediateRender)),
        this.staggerTo(i, o, s, a, u, c, f)
      );
    }),
    (n.render = function (i, o, l) {
      var s = this._time,
        a = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        c = i <= 0 ? 0 : tt(i),
        f = this._zTime < 0 != i < 0 && (this._initted || !u),
        d,
        h,
        y,
        g,
        w,
        m,
        p,
        v,
        _,
        P,
        C,
        T;
      if (
        (this !== Ce && c > a && i >= 0 && (c = a), c !== this._tTime || l || f)
      ) {
        if (
          (s !== this._time &&
            u &&
            ((c += this._time - s), (i += this._time - s)),
          (d = c),
          (_ = this._start),
          (v = this._ts),
          (m = !v),
          f && (u || (s = this._zTime), (i || !o) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((C = this._yoyo),
            (w = u + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(w * 100 + i, o, l);
          if (
            ((d = tt(c % w)),
            c === a
              ? ((g = this._repeat), (d = u))
              : ((g = ~~(c / w)),
                g && g === c / w && ((d = u), g--),
                d > u && (d = u)),
            (P = Go(this._tTime, w)),
            !s &&
              this._tTime &&
              P !== g &&
              this._tTime - P * w - this._dur <= 0 &&
              (P = g),
            C && g & 1 && ((d = u - d), (T = 1)),
            g !== P && !this._lock)
          ) {
            var k = C && P & 1,
              E = k === (C && g & 1);
            if (
              (g < P && (k = !k),
              (s = k ? 0 : c % u ? u : c),
              (this._lock = 1),
              (this.render(s || (T ? 0 : tt(g * w)), o, !u)._lock = 0),
              (this._tTime = c),
              !o && this.parent && un(this, "onRepeat"),
              this.vars.repeatRefresh && !T && (this.invalidate()._lock = 1),
              (s && s !== this._time) ||
                m !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (a = this._tDur),
              E &&
                ((this._lock = 2),
                (s = k ? u : -1e-4),
                this.render(s, !0),
                this.vars.repeatRefresh && !T && this.invalidate()),
              (this._lock = 0),
              !this._ts && !m)
            )
              return this;
            T1(this, T);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((p = gx(this, tt(s), tt(d))), p && (c -= d - (d = p._start))),
          (this._tTime = c),
          (this._time = d),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (s = 0)),
          !s && d && !o && !g && (un(this, "onStart"), this._tTime !== c))
        )
          return this;
        if (d >= s && i >= 0)
          for (h = this._first; h; ) {
            if (
              ((y = h._next), (h._act || d >= h._start) && h._ts && p !== h)
            ) {
              if (h.parent !== this) return this.render(i, o, l);
              if (
                (h.render(
                  h._ts > 0
                    ? (d - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (d - h._start) * h._ts,
                  o,
                  l
                ),
                d !== this._time || (!this._ts && !m))
              ) {
                (p = 0), y && (c += this._zTime = -de);
                break;
              }
            }
            h = y;
          }
        else {
          h = this._last;
          for (var O = i < 0 ? i : d; h; ) {
            if (((y = h._prev), (h._act || O <= h._end) && h._ts && p !== h)) {
              if (h.parent !== this) return this.render(i, o, l);
              if (
                (h.render(
                  h._ts > 0
                    ? (O - h._start) * h._ts
                    : (h._dirty ? h.totalDuration() : h._tDur) +
                        (O - h._start) * h._ts,
                  o,
                  l || (St && (h._initted || h._startAt))
                ),
                d !== this._time || (!this._ts && !m))
              ) {
                (p = 0), y && (c += this._zTime = O ? -de : de);
                break;
              }
            }
            h = y;
          }
        }
        if (
          p &&
          !o &&
          (this.pause(),
          (p.render(d >= s ? 0 : -de)._zTime = d >= s ? 1 : -1),
          this._ts)
        )
          return (this._start = _), Mu(this), this.render(i, o, l);
        this._onUpdate && !o && un(this, "onUpdate", !0),
          ((c === a && this._tTime >= this.totalDuration()) || (!c && s)) &&
            (_ === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !u) &&
                ((c === a && this._ts > 0) || (!c && this._ts < 0)) &&
                ui(this, 1),
              !o &&
                !(i < 0 && !s) &&
                (c || s || !a) &&
                (un(
                  this,
                  c === a && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(c < a && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (n.add = function (i, o) {
      var l = this;
      if ((Pr(o) || (o = vn(this, o, i)), !(i instanceof ys))) {
        if (Tt(i))
          return (
            i.forEach(function (s) {
              return l.add(s, o);
            }),
            this
          );
        if (rt(i)) return this.addLabel(i, o);
        if (Me(i)) i = $e.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Jn(this, i, o) : this;
    }),
    (n.getChildren = function (i, o, l, s) {
      i === void 0 && (i = !0),
        o === void 0 && (o = !0),
        l === void 0 && (l = !0),
        s === void 0 && (s = -Sn);
      for (var a = [], u = this._first; u; )
        u._start >= s &&
          (u instanceof $e
            ? o && a.push(u)
            : (l && a.push(u), i && a.push.apply(a, u.getChildren(!0, o, l)))),
          (u = u._next);
      return a;
    }),
    (n.getById = function (i) {
      for (var o = this.getChildren(1, 1, 1), l = o.length; l--; )
        if (o[l].vars.id === i) return o[l];
    }),
    (n.remove = function (i) {
      return rt(i)
        ? this.removeLabel(i)
        : Me(i)
        ? this.killTweensOf(i)
        : (Ru(this, i),
          i === this._recent && (this._recent = this._last),
          Ai(this));
    }),
    (n.totalTime = function (i, o) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = tt(
              sn.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts)
            )),
          t.prototype.totalTime.call(this, i, o),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (i, o) {
      return (this.labels[i] = vn(this, o)), this;
    }),
    (n.removeLabel = function (i) {
      return delete this.labels[i], this;
    }),
    (n.addPause = function (i, o, l) {
      var s = $e.delayedCall(0, o || ms, l);
      return (
        (s.data = "isPause"), (this._hasPause = 1), Jn(this, s, vn(this, i))
      );
    }),
    (n.removePause = function (i) {
      var o = this._first;
      for (i = vn(this, i); o; )
        o._start === i && o.data === "isPause" && ui(o), (o = o._next);
    }),
    (n.killTweensOf = function (i, o, l) {
      for (var s = this.getTweensOf(i, l), a = s.length; a--; )
        Hr !== s[a] && s[a].kill(i, o);
      return this;
    }),
    (n.getTweensOf = function (i, o) {
      for (var l = [], s = Tn(i), a = this._first, u = Pr(o), c; a; )
        a instanceof $e
          ? ux(a._targets, s) &&
            (u
              ? (!Hr || (a._initted && a._ts)) &&
                a.globalTime(0) <= o &&
                a.globalTime(a.totalDuration()) > o
              : !o || a.isActive()) &&
            l.push(a)
          : (c = a.getTweensOf(s, o)).length && l.push.apply(l, c),
          (a = a._next);
      return l;
    }),
    (n.tweenTo = function (i, o) {
      o = o || {};
      var l = this,
        s = vn(l, i),
        a = o,
        u = a.startAt,
        c = a.onStart,
        f = a.onStartParams,
        d = a.immediateRender,
        h,
        y = $e.to(
          l,
          Nn(
            {
              ease: o.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: s,
              overwrite: "auto",
              duration:
                o.duration ||
                Math.abs(
                  (s - (u && "time" in u ? u.time : l._time)) / l.timeScale()
                ) ||
                de,
              onStart: function () {
                if ((l.pause(), !h)) {
                  var w =
                    o.duration ||
                    Math.abs(
                      (s - (u && "time" in u ? u.time : l._time)) /
                        l.timeScale()
                    );
                  y._dur !== w && Qo(y, w, 0, 1).render(y._time, !0, !0),
                    (h = 1);
                }
                c && c.apply(y, f || []);
              },
            },
            o
          )
        );
      return d ? y.render(0) : y;
    }),
    (n.tweenFromTo = function (i, o, l) {
      return this.tweenTo(o, Nn({ startAt: { time: vn(this, i) } }, l));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (i) {
      return i === void 0 && (i = this._time), Wp(this, vn(this, i));
    }),
    (n.previousLabel = function (i) {
      return i === void 0 && (i = this._time), Wp(this, vn(this, i), 1);
    }),
    (n.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + de);
    }),
    (n.shiftChildren = function (i, o, l) {
      l === void 0 && (l = 0);
      for (var s = this._first, a = this.labels, u; s; )
        s._start >= l && ((s._start += i), (s._end += i)), (s = s._next);
      if (o) for (u in a) a[u] >= l && (a[u] += i);
      return Ai(this);
    }),
    (n.invalidate = function (i) {
      var o = this._first;
      for (this._lock = 0; o; ) o.invalidate(i), (o = o._next);
      return t.prototype.invalidate.call(this, i);
    }),
    (n.clear = function (i) {
      i === void 0 && (i = !0);
      for (var o = this._first, l; o; ) (l = o._next), this.remove(o), (o = l);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        Ai(this)
      );
    }),
    (n.totalDuration = function (i) {
      var o = 0,
        l = this,
        s = l._last,
        a = Sn,
        u,
        c,
        f;
      if (arguments.length)
        return l.timeScale(
          (l._repeat < 0 ? l.duration() : l.totalDuration()) /
            (l.reversed() ? -i : i)
        );
      if (l._dirty) {
        for (f = l.parent; s; )
          (u = s._prev),
            s._dirty && s.totalDuration(),
            (c = s._start),
            c > a && l._sort && s._ts && !l._lock
              ? ((l._lock = 1), (Jn(l, s, c - s._delay, 1)._lock = 0))
              : (a = c),
            c < 0 &&
              s._ts &&
              ((o -= c),
              ((!f && !l._dp) || (f && f.smoothChildTiming)) &&
                ((l._start += c / l._ts), (l._time -= c), (l._tTime -= c)),
              l.shiftChildren(-c, !1, -1 / 0),
              (a = 0)),
            s._end > o && s._ts && (o = s._end),
            (s = u);
        Qo(l, l === Ce && l._time > o ? l._time : o, 1, 1), (l._dirty = 0);
      }
      return l._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((Ce._ts && (i1(Ce, uu(i, Ce)), (n1 = sn.frame)), sn.frame >= Bp)) {
        Bp += fn.autoSleep || 120;
        var o = Ce._first;
        if ((!o || !o._ts) && fn.autoSleep && sn._listeners.length < 2) {
          for (; o && !o._ts; ) o = o._next;
          o || sn.sleep();
        }
      }
    }),
    e
  );
})(ys);
Nn(It.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Mx = function (e, n, r, i, o, l, s) {
    var a = new Qt(this._pt, e, n, 0, 1, M1, null, o),
      u = 0,
      c = 0,
      f,
      d,
      h,
      y,
      g,
      w,
      m,
      p;
    for (
      a.b = r,
        a.e = i,
        r += "",
        i += "",
        (m = ~i.indexOf("random(")) && (i = gs(i)),
        l && ((p = [r, i]), l(p, e, n), (r = p[0]), (i = p[1])),
        d = r.match(pc) || [];
      (f = pc.exec(i));

    )
      (y = f[0]),
        (g = i.substring(u, f.index)),
        h ? (h = (h + 1) % 5) : g.substr(-5) === "rgba(" && (h = 1),
        y !== d[c++] &&
          ((w = parseFloat(d[c - 1]) || 0),
          (a._pt = {
            _next: a._pt,
            p: g || c === 1 ? g : ",",
            s: w,
            c: y.charAt(1) === "=" ? Io(w, y) - w : parseFloat(y) - w,
            m: h && h < 4 ? Math.round : 0,
          }),
          (u = pc.lastIndex));
    return (
      (a.c = u < i.length ? i.substring(u, i.length) : ""),
      (a.fp = s),
      (q0.test(i) || m) && (a.e = 0),
      (this._pt = a),
      a
    );
  },
  Jd = function (e, n, r, i, o, l, s, a, u, c) {
    Me(i) && (i = i(o || 0, e, l));
    var f = e[n],
      d =
        r !== "get"
          ? r
          : Me(f)
          ? u
            ? e[
                n.indexOf("set") || !Me(e["get" + n.substr(3)])
                  ? n
                  : "get" + n.substr(3)
              ](u)
            : e[n]()
          : f,
      h = Me(f) ? (u ? bx : j1) : th,
      y;
    if (
      (rt(i) &&
        (~i.indexOf("random(") && (i = gs(i)),
        i.charAt(1) === "=" &&
          ((y = Io(d, i) + (kt(d) || 0)), (y || y === 0) && (i = y))),
      !c || d !== i || bf)
    )
      return !isNaN(d * i) && i !== ""
        ? ((y = new Qt(
            this._pt,
            e,
            n,
            +d || 0,
            i - (d || 0),
            typeof f == "boolean" ? Fx : R1,
            0,
            h
          )),
          u && (y.fp = u),
          s && y.modifier(s, this, e),
          (this._pt = y))
        : (!f && !(n in e) && Qd(n, i),
          Mx.call(this, e, n, d, i, h, a || fn.stringFilter, u));
  },
  zx = function (e, n, r, i, o) {
    if (
      (Me(e) && (e = Gl(e, o, n, r, i)),
      !lr(e) || (e.style && e.nodeType) || Tt(e) || Q0(e))
    )
      return rt(e) ? Gl(e, o, n, r, i) : e;
    var l = {},
      s;
    for (s in e) l[s] = Gl(e[s], o, n, r, i);
    return l;
  },
  E1 = function (e, n, r, i, o, l) {
    var s, a, u, c;
    if (
      on[e] &&
      (s = new on[e]()).init(
        o,
        s.rawVars ? n[e] : zx(n[e], i, o, l, r),
        r,
        i,
        l
      ) !== !1 &&
      ((r._pt = a = new Qt(r._pt, o, e, 0, 1, s.render, s, 0, s.priority)),
      r !== Co)
    )
      for (u = r._ptLookup[r._targets.indexOf(o)], c = s._props.length; c--; )
        u[s._props[c]] = a;
    return s;
  },
  Hr,
  bf,
  eh = function t(e, n, r) {
    var i = e.vars,
      o = i.ease,
      l = i.startAt,
      s = i.immediateRender,
      a = i.lazy,
      u = i.onUpdate,
      c = i.runBackwards,
      f = i.yoyoEase,
      d = i.keyframes,
      h = i.autoRevert,
      y = e._dur,
      g = e._startAt,
      w = e._targets,
      m = e.parent,
      p = m && m.data === "nested" ? m.vars.targets : w,
      v = e._overwrite === "auto" && !Hd,
      _ = e.timeline,
      P,
      C,
      T,
      k,
      E,
      O,
      b,
      M,
      A,
      $,
      Q,
      X,
      B;
    if (
      (_ && (!d || !o) && (o = "none"),
      (e._ease = Fi(o, Xo.ease)),
      (e._yEase = f ? S1(Fi(f === !0 ? o : f, Xo.ease)) : 0),
      f &&
        e._yoyo &&
        !e._repeat &&
        ((f = e._yEase), (e._yEase = e._ease), (e._ease = f)),
      (e._from = !_ && !!i.runBackwards),
      !_ || (d && !i.stagger))
    ) {
      if (
        ((M = w[0] ? bi(w[0]).harness : 0),
        (X = M && i[M.prop]),
        (P = au(i, Kd)),
        g &&
          (g._zTime < 0 && g.progress(1),
          n < 0 && c && s && !h ? g.render(-1, !0) : g.revert(c && y ? Ca : sx),
          (g._lazy = 0)),
        l)
      ) {
        if (
          (ui(
            (e._startAt = $e.set(
              w,
              Nn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: m,
                  immediateRender: !0,
                  lazy: !g && Xt(a),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return un(e, "onUpdate");
                    },
                  stagger: 0,
                },
                l
              )
            ))
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (St || (!s && !h)) && e._startAt.revert(Ca),
          s && y && n <= 0 && r <= 0)
        ) {
          n && (e._zTime = n);
          return;
        }
      } else if (c && y && !g) {
        if (
          (n && (s = !1),
          (T = Nn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: s && !g && Xt(a),
              immediateRender: s,
              stagger: 0,
              parent: m,
            },
            P
          )),
          X && (T[M.prop] = X),
          ui((e._startAt = $e.set(w, T))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          n < 0 && (St ? e._startAt.revert(Ca) : e._startAt.render(-1, !0)),
          (e._zTime = n),
          !s)
        )
          t(e._startAt, de, de);
        else if (!n) return;
      }
      for (
        e._pt = e._ptCache = 0, a = (y && Xt(a)) || (a && !y), C = 0;
        C < w.length;
        C++
      ) {
        if (
          ((E = w[C]),
          (b = E._gsap || Zd(w)[C]._gsap),
          (e._ptLookup[C] = $ = {}),
          Rf[b.id] && ii.length && su(),
          (Q = p === w ? C : p.indexOf(E)),
          M &&
            (A = new M()).init(E, X || P, e, Q, p) !== !1 &&
            ((e._pt = k =
              new Qt(e._pt, E, A.name, 0, 1, A.render, A, 0, A.priority)),
            A._props.forEach(function (j) {
              $[j] = k;
            }),
            A.priority && (O = 1)),
          !M || X)
        )
          for (T in P)
            on[T] && (A = E1(T, P, e, Q, E, p))
              ? A.priority && (O = 1)
              : ($[T] = k =
                  Jd.call(e, E, T, "get", P[T], Q, p, 0, i.stringFilter));
        e._op && e._op[C] && e.kill(E, e._op[C]),
          v &&
            e._pt &&
            ((Hr = e),
            Ce.killTweensOf(E, $, e.globalTime(n)),
            (B = !e.parent),
            (Hr = 0)),
          e._pt && a && (Rf[b.id] = 1);
      }
      O && z1(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = u),
      (e._initted = (!e._op || e._pt) && !B),
      d && n <= 0 && _.render(Sn, !0, !0);
  },
  Dx = function (e, n, r, i, o, l, s, a) {
    var u = ((e._pt && e._ptCache) || (e._ptCache = {}))[n],
      c,
      f,
      d,
      h;
    if (!u)
      for (
        u = e._ptCache[n] = [], d = e._ptLookup, h = e._targets.length;
        h--;

      ) {
        if (((c = d[h][n]), c && c.d && c.d._pt))
          for (c = c.d._pt; c && c.p !== n && c.fp !== n; ) c = c._next;
        if (!c)
          return (
            (bf = 1),
            (e.vars[n] = "+=0"),
            eh(e, s),
            (bf = 0),
            a ? ps(n + " not eligible for reset") : 1
          );
        u.push(c);
      }
    for (h = u.length; h--; )
      (f = u[h]),
        (c = f._pt || f),
        (c.s = (i || i === 0) && !o ? i : c.s + (i || 0) + l * c.c),
        (c.c = r - c.s),
        f.e && (f.e = be(r) + kt(f.e)),
        f.b && (f.b = c.s + kt(f.b));
  },
  Lx = function (e, n) {
    var r = e[0] ? bi(e[0]).harness : 0,
      i = r && r.aliases,
      o,
      l,
      s,
      a;
    if (!i) return n;
    o = Qi({}, n);
    for (l in i)
      if (l in o) for (a = i[l].split(","), s = a.length; s--; ) o[a[s]] = o[l];
    return o;
  },
  Ix = function (e, n, r, i) {
    var o = n.ease || i || "power1.inOut",
      l,
      s;
    if (Tt(n))
      (s = r[e] || (r[e] = [])),
        n.forEach(function (a, u) {
          return s.push({ t: (u / (n.length - 1)) * 100, v: a, e: o });
        });
    else
      for (l in n)
        (s = r[l] || (r[l] = [])),
          l === "ease" || s.push({ t: parseFloat(e), v: n[l], e: o });
  },
  Gl = function (e, n, r, i, o) {
    return Me(e)
      ? e.call(n, r, i, o)
      : rt(e) && ~e.indexOf("random(")
      ? gs(e)
      : e;
  },
  O1 = qd + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  N1 = {};
Gt(O1 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
  return (N1[t] = 1);
});
var $e = (function (t) {
  X0(e, t);
  function e(r, i, o, l) {
    var s;
    typeof i == "number" && ((o.duration = i), (i = o), (o = null)),
      (s = t.call(this, l ? i : Yl(i)) || this);
    var a = s.vars,
      u = a.duration,
      c = a.delay,
      f = a.immediateRender,
      d = a.stagger,
      h = a.overwrite,
      y = a.keyframes,
      g = a.defaults,
      w = a.scrollTrigger,
      m = a.yoyoEase,
      p = i.parent || Ce,
      v = (Tt(r) || Q0(r) ? Pr(r[0]) : "length" in i) ? [r] : Tn(r),
      _,
      P,
      C,
      T,
      k,
      E,
      O,
      b;
    if (
      ((s._targets = v.length
        ? Zd(v)
        : ps(
            "GSAP target " + r + " not found. https://gsap.com",
            !fn.nullTargetWarn
          ) || []),
      (s._ptLookup = []),
      (s._overwrite = h),
      y || d || la(u) || la(c))
    ) {
      if (
        ((i = s.vars),
        (_ = s.timeline =
          new It({
            data: "nested",
            defaults: g || {},
            targets: p && p.data === "nested" ? p.vars.targets : v,
          })),
        _.kill(),
        (_.parent = _._dp = dr(s)),
        (_._start = 0),
        d || la(u) || la(c))
      ) {
        if (((T = v.length), (O = d && h1(d)), lr(d)))
          for (k in d) ~O1.indexOf(k) && (b || (b = {}), (b[k] = d[k]));
        for (P = 0; P < T; P++)
          (C = au(i, N1)),
            (C.stagger = 0),
            m && (C.yoyoEase = m),
            b && Qi(C, b),
            (E = v[P]),
            (C.duration = +Gl(u, dr(s), P, E, v)),
            (C.delay = (+Gl(c, dr(s), P, E, v) || 0) - s._delay),
            !d &&
              T === 1 &&
              C.delay &&
              ((s._delay = c = C.delay), (s._start += c), (C.delay = 0)),
            _.to(E, C, O ? O(P, E, v) : 0),
            (_._ease = ne.none);
        _.duration() ? (u = c = 0) : (s.timeline = 0);
      } else if (y) {
        Yl(Nn(_.vars.defaults, { ease: "none" })),
          (_._ease = Fi(y.ease || i.ease || "none"));
        var M = 0,
          A,
          $,
          Q;
        if (Tt(y))
          y.forEach(function (X) {
            return _.to(v, X, ">");
          }),
            _.duration();
        else {
          C = {};
          for (k in y)
            k === "ease" || k === "easeEach" || Ix(k, y[k], C, y.easeEach);
          for (k in C)
            for (
              A = C[k].sort(function (X, B) {
                return X.t - B.t;
              }),
                M = 0,
                P = 0;
              P < A.length;
              P++
            )
              ($ = A[P]),
                (Q = {
                  ease: $.e,
                  duration: (($.t - (P ? A[P - 1].t : 0)) / 100) * u,
                }),
                (Q[k] = $.v),
                _.to(v, Q, M),
                (M += Q.duration);
          _.duration() < u && _.to({}, { duration: u - _.duration() });
        }
      }
      u || s.duration((u = _.duration()));
    } else s.timeline = 0;
    return (
      h === !0 && !Hd && ((Hr = dr(s)), Ce.killTweensOf(v), (Hr = 0)),
      Jn(p, dr(s), o),
      i.reversed && s.reverse(),
      i.paused && s.paused(!0),
      (f ||
        (!u &&
          !y &&
          s._start === tt(p._time) &&
          Xt(f) &&
          hx(dr(s)) &&
          p.data !== "nested")) &&
        ((s._tTime = -de), s.render(Math.max(0, -c) || 0)),
      w && u1(dr(s), w),
      s
    );
  }
  var n = e.prototype;
  return (
    (n.render = function (i, o, l) {
      var s = this._time,
        a = this._tDur,
        u = this._dur,
        c = i < 0,
        f = i > a - de && !c ? a : i < de ? 0 : i,
        d,
        h,
        y,
        g,
        w,
        m,
        p,
        v,
        _;
      if (!u) mx(this, i, o, l);
      else if (
        f !== this._tTime ||
        !i ||
        l ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== c)
      ) {
        if (((d = f), (v = this.timeline), this._repeat)) {
          if (((g = u + this._rDelay), this._repeat < -1 && c))
            return this.totalTime(g * 100 + i, o, l);
          if (
            ((d = tt(f % g)),
            f === a
              ? ((y = this._repeat), (d = u))
              : ((y = ~~(f / g)),
                y && y === tt(f / g) && ((d = u), y--),
                d > u && (d = u)),
            (m = this._yoyo && y & 1),
            m && ((_ = this._yEase), (d = u - d)),
            (w = Go(this._tTime, g)),
            d === s && !l && this._initted && y === w)
          )
            return (this._tTime = f), this;
          y !== w &&
            (v && this._yEase && T1(v, m),
            this.vars.repeatRefresh &&
              !m &&
              !this._lock &&
              this._time !== g &&
              this._initted &&
              ((this._lock = l = 1),
              (this.render(tt(g * y), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (c1(this, c ? i : d, l, o, f)) return (this._tTime = 0), this;
          if (s !== this._time && !(l && this.vars.repeatRefresh && y !== w))
            return this;
          if (u !== this._dur) return this.render(i, o, l);
        }
        if (
          ((this._tTime = f),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = p = (_ || this._ease)(d / u)),
          this._from && (this.ratio = p = 1 - p),
          d && !s && !o && !y && (un(this, "onStart"), this._tTime !== f))
        )
          return this;
        for (h = this._pt; h; ) h.r(p, h.d), (h = h._next);
        (v && v.render(i < 0 ? i : v._dur * v._ease(d / this._dur), o, l)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !o &&
            (c && Mf(this, i, o, l), un(this, "onUpdate")),
          this._repeat &&
            y !== w &&
            this.vars.onRepeat &&
            !o &&
            this.parent &&
            un(this, "onRepeat"),
          (f === this._tDur || !f) &&
            this._tTime === f &&
            (c && !this._onUpdate && Mf(this, i, !0, !0),
            (i || !u) &&
              ((f === this._tDur && this._ts > 0) || (!f && this._ts < 0)) &&
              ui(this, 1),
            !o &&
              !(c && !s) &&
              (f || s || m) &&
              (un(this, f === a ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(f < a && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        t.prototype.invalidate.call(this, i)
      );
    }),
    (n.resetTo = function (i, o, l, s, a) {
      vs || sn.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        c;
      return (
        this._initted || eh(this, u),
        (c = this._ease(u / this._dur)),
        Dx(this, i, o, l, s, c, u, a)
          ? this.resetTo(i, o, l, s, 1)
          : (zu(this, 0),
            this.parent ||
              s1(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (n.kill = function (i, o) {
      if ((o === void 0 && (o = "all"), !i && (!o || o === "all")))
        return (this._lazy = this._pt = 0), this.parent ? Cl(this) : this;
      if (this.timeline) {
        var l = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, o, Hr && Hr.vars.overwrite !== !0)
            ._first || Cl(this),
          this.parent &&
            l !== this.timeline.totalDuration() &&
            Qo(this, (this._dur * this.timeline._tDur) / l, 0, 1),
          this
        );
      }
      var s = this._targets,
        a = i ? Tn(i) : s,
        u = this._ptLookup,
        c = this._pt,
        f,
        d,
        h,
        y,
        g,
        w,
        m;
      if ((!o || o === "all") && fx(s, a))
        return o === "all" && (this._pt = 0), Cl(this);
      for (
        f = this._op = this._op || [],
          o !== "all" &&
            (rt(o) &&
              ((g = {}),
              Gt(o, function (p) {
                return (g[p] = 1);
              }),
              (o = g)),
            (o = Lx(s, o))),
          m = s.length;
        m--;

      )
        if (~a.indexOf(s[m])) {
          (d = u[m]),
            o === "all"
              ? ((f[m] = o), (y = d), (h = {}))
              : ((h = f[m] = f[m] || {}), (y = o));
          for (g in y)
            (w = d && d[g]),
              w &&
                ((!("kill" in w.d) || w.d.kill(g) === !0) && Ru(this, w, "_pt"),
                delete d[g]),
              h !== "all" && (h[g] = 1);
        }
      return this._initted && !this._pt && c && Cl(this), this;
    }),
    (e.to = function (i, o) {
      return new e(i, o, arguments[2]);
    }),
    (e.from = function (i, o) {
      return Xl(1, arguments);
    }),
    (e.delayedCall = function (i, o, l, s) {
      return new e(o, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: o,
        onReverseComplete: o,
        onCompleteParams: l,
        onReverseCompleteParams: l,
        callbackScope: s,
      });
    }),
    (e.fromTo = function (i, o, l) {
      return Xl(2, arguments);
    }),
    (e.set = function (i, o) {
      return (o.duration = 0), o.repeatDelay || (o.repeat = 0), new e(i, o);
    }),
    (e.killTweensOf = function (i, o, l) {
      return Ce.killTweensOf(i, o, l);
    }),
    e
  );
})(ys);
Nn($e.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Gt("staggerTo,staggerFrom,staggerFromTo", function (t) {
  $e[t] = function () {
    var e = new It(),
      n = Df.call(arguments, 0);
    return n.splice(t === "staggerFromTo" ? 5 : 4, 0, 0), e[t].apply(e, n);
  };
});
var th = function (e, n, r) {
    return (e[n] = r);
  },
  j1 = function (e, n, r) {
    return e[n](r);
  },
  bx = function (e, n, r, i) {
    return e[n](i.fp, r);
  },
  Ax = function (e, n, r) {
    return e.setAttribute(n, r);
  },
  nh = function (e, n) {
    return Me(e[n]) ? j1 : Yd(e[n]) && e.setAttribute ? Ax : th;
  },
  R1 = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e6) / 1e6, n);
  },
  Fx = function (e, n) {
    return n.set(n.t, n.p, !!(n.s + n.c * e), n);
  },
  M1 = function (e, n) {
    var r = n._pt,
      i = "";
    if (!e && n.b) i = n.b;
    else if (e === 1 && n.e) i = n.e;
    else {
      for (; r; )
        (i =
          r.p +
          (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) +
          i),
          (r = r._next);
      i += n.c;
    }
    n.set(n.t, n.p, i, n);
  },
  rh = function (e, n) {
    for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
  },
  Bx = function (e, n, r, i) {
    for (var o = this._pt, l; o; )
      (l = o._next), o.p === i && o.modifier(e, n, r), (o = l);
  },
  Ux = function (e) {
    for (var n = this._pt, r, i; n; )
      (i = n._next),
        (n.p === e && !n.op) || n.op === e
          ? Ru(this, n, "_pt")
          : n.dep || (r = 1),
        (n = i);
    return !r;
  },
  Vx = function (e, n, r, i) {
    i.mSet(e, n, i.m.call(i.tween, r, i.mt), i);
  },
  z1 = function (e) {
    for (var n = e._pt, r, i, o, l; n; ) {
      for (r = n._next, i = o; i && i.pr > n.pr; ) i = i._next;
      (n._prev = i ? i._prev : l) ? (n._prev._next = n) : (o = n),
        (n._next = i) ? (i._prev = n) : (l = n),
        (n = r);
    }
    e._pt = o;
  },
  Qt = (function () {
    function t(n, r, i, o, l, s, a, u, c) {
      (this.t = r),
        (this.s = o),
        (this.c = l),
        (this.p = i),
        (this.r = s || R1),
        (this.d = a || this),
        (this.set = u || th),
        (this.pr = c || 0),
        (this._next = n),
        n && (n._prev = this);
    }
    var e = t.prototype;
    return (
      (e.modifier = function (r, i, o) {
        (this.mSet = this.mSet || this.set),
          (this.set = Vx),
          (this.m = r),
          (this.mt = o),
          (this.tween = i);
      }),
      t
    );
  })();
Gt(
  qd +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (Kd[t] = 1);
  }
);
hn.TweenMax = hn.TweenLite = $e;
hn.TimelineLite = hn.TimelineMax = It;
Ce = new It({
  sortChildren: !1,
  defaults: Xo,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
fn.stringFilter = k1;
var Bi = [],
  Oa = {},
  $x = [],
  Yp = 0,
  Wx = 0,
  _c = function (e) {
    return (Oa[e] || $x).map(function (n) {
      return n();
    });
  },
  Af = function () {
    var e = Date.now(),
      n = [];
    e - Yp > 2 &&
      (_c("matchMediaInit"),
      Bi.forEach(function (r) {
        var i = r.queries,
          o = r.conditions,
          l,
          s,
          a,
          u;
        for (s in i)
          (l = qn.matchMedia(i[s]).matches),
            l && (a = 1),
            l !== o[s] && ((o[s] = l), (u = 1));
        u && (r.revert(), a && n.push(r));
      }),
      _c("matchMediaRevert"),
      n.forEach(function (r) {
        return r.onMatch(r, function (i) {
          return r.add(null, i);
        });
      }),
      (Yp = e),
      _c("matchMedia"));
  },
  D1 = (function () {
    function t(n, r) {
      (this.selector = r && Lf(r)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Wx++),
        n && this.add(n);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        Me(r) && ((o = i), (i = r), (r = Me));
        var l = this,
          s = function () {
            var u = we,
              c = l.selector,
              f;
            return (
              u && u !== l && u.data.push(l),
              o && (l.selector = Lf(o)),
              (we = l),
              (f = i.apply(l, arguments)),
              Me(f) && l._r.push(f),
              (we = u),
              (l.selector = c),
              (l.isReverted = !1),
              f
            );
          };
        return (
          (l.last = s),
          r === Me
            ? s(l, function (a) {
                return l.add(null, a);
              })
            : r
            ? (l[r] = s)
            : s
        );
      }),
      (e.ignore = function (r) {
        var i = we;
        (we = null), r(this), (we = i);
      }),
      (e.getTweens = function () {
        var r = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof t
              ? r.push.apply(r, i.getTweens())
              : i instanceof $e &&
                  !(i.parent && i.parent.data === "nested") &&
                  r.push(i);
          }),
          r
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (r, i) {
        var o = this;
        if (
          (r
            ? (function () {
                for (var s = o.getTweens(), a = o.data.length, u; a--; )
                  (u = o.data[a]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (c) {
                        return s.splice(s.indexOf(c), 1);
                      }));
                for (
                  s
                    .map(function (c) {
                      return {
                        g:
                          c._dur ||
                          c._delay ||
                          (c._sat && !c._sat.vars.immediateRender)
                            ? c.globalTime(0)
                            : -1 / 0,
                        t: c,
                      };
                    })
                    .sort(function (c, f) {
                      return f.g - c.g || -1 / 0;
                    })
                    .forEach(function (c) {
                      return c.t.revert(r);
                    }),
                    a = o.data.length;
                  a--;

                )
                  (u = o.data[a]),
                    u instanceof It
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof $e) && u.revert && u.revert(r);
                o._r.forEach(function (c) {
                  return c(r, o);
                }),
                  (o.isReverted = !0);
              })()
            : this.data.forEach(function (s) {
                return s.kill && s.kill();
              }),
          this.clear(),
          i)
        )
          for (var l = Bi.length; l--; )
            Bi[l].id === this.id && Bi.splice(l, 1);
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      t
    );
  })(),
  Hx = (function () {
    function t(n) {
      (this.contexts = []), (this.scope = n), we && we.data.push(this);
    }
    var e = t.prototype;
    return (
      (e.add = function (r, i, o) {
        lr(r) || (r = { matches: r });
        var l = new D1(0, o || this.scope),
          s = (l.conditions = {}),
          a,
          u,
          c;
        we && !l.selector && (l.selector = we.selector),
          this.contexts.push(l),
          (i = l.add("onMatch", i)),
          (l.queries = r);
        for (u in r)
          u === "all"
            ? (c = 1)
            : ((a = qn.matchMedia(r[u])),
              a &&
                (Bi.indexOf(l) < 0 && Bi.push(l),
                (s[u] = a.matches) && (c = 1),
                a.addListener
                  ? a.addListener(Af)
                  : a.addEventListener("change", Af)));
        return (
          c &&
            i(l, function (f) {
              return l.add(null, f);
            }),
          this
        );
      }),
      (e.revert = function (r) {
        this.kill(r || {});
      }),
      (e.kill = function (r) {
        this.contexts.forEach(function (i) {
          return i.kill(r, !0);
        });
      }),
      t
    );
  })(),
  cu = {
    registerPlugin: function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r];
      n.forEach(function (i) {
        return _1(i);
      });
    },
    timeline: function (e) {
      return new It(e);
    },
    getTweensOf: function (e, n) {
      return Ce.getTweensOf(e, n);
    },
    getProperty: function (e, n, r, i) {
      rt(e) && (e = Tn(e)[0]);
      var o = bi(e || {}).get,
        l = r ? l1 : o1;
      return (
        r === "native" && (r = ""),
        e &&
          (n
            ? l(((on[n] && on[n].get) || o)(e, n, r, i))
            : function (s, a, u) {
                return l(((on[s] && on[s].get) || o)(e, s, a, u));
              })
      );
    },
    quickSetter: function (e, n, r) {
      if (((e = Tn(e)), e.length > 1)) {
        var i = e.map(function (c) {
            return qt.quickSetter(c, n, r);
          }),
          o = i.length;
        return function (c) {
          for (var f = o; f--; ) i[f](c);
        };
      }
      e = e[0] || {};
      var l = on[n],
        s = bi(e),
        a = (s.harness && (s.harness.aliases || {})[n]) || n,
        u = l
          ? function (c) {
              var f = new l();
              (Co._pt = 0),
                f.init(e, r ? c + r : c, Co, 0, [e]),
                f.render(1, f),
                Co._pt && rh(1, Co);
            }
          : s.set(e, a);
      return l
        ? u
        : function (c) {
            return u(e, a, r ? c + r : c, s, 1);
          };
    },
    quickTo: function (e, n, r) {
      var i,
        o = qt.to(
          e,
          Qi(((i = {}), (i[n] = "+=0.1"), (i.paused = !0), i), r || {})
        ),
        l = function (a, u, c) {
          return o.resetTo(n, a, u, c);
        };
      return (l.tween = o), l;
    },
    isTweening: function (e) {
      return Ce.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return e && e.ease && (e.ease = Fi(e.ease, Xo.ease)), Up(Xo, e || {});
    },
    config: function (e) {
      return Up(fn, e || {});
    },
    registerEffect: function (e) {
      var n = e.name,
        r = e.effect,
        i = e.plugins,
        o = e.defaults,
        l = e.extendTimeline;
      (i || "").split(",").forEach(function (s) {
        return (
          s && !on[s] && !hn[s] && ps(n + " effect requires " + s + " plugin.")
        );
      }),
        (mc[n] = function (s, a, u) {
          return r(Tn(s), Nn(a || {}, o), u);
        }),
        l &&
          (It.prototype[n] = function (s, a, u) {
            return this.add(mc[n](s, lr(a) ? a : (u = a) && {}, this), u);
          });
    },
    registerEase: function (e, n) {
      ne[e] = Fi(n);
    },
    parseEase: function (e, n) {
      return arguments.length ? Fi(e, n) : ne;
    },
    getById: function (e) {
      return Ce.getById(e);
    },
    exportRoot: function (e, n) {
      e === void 0 && (e = {});
      var r = new It(e),
        i,
        o;
      for (
        r.smoothChildTiming = Xt(e.smoothChildTiming),
          Ce.remove(r),
          r._dp = 0,
          r._time = r._tTime = Ce._time,
          i = Ce._first;
        i;

      )
        (o = i._next),
          (n ||
            !(
              !i._dur &&
              i instanceof $e &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Jn(r, i, i._start - i._delay),
          (i = o);
      return Jn(Ce, r, 0), r;
    },
    context: function (e, n) {
      return e ? new D1(e, n) : we;
    },
    matchMedia: function (e) {
      return new Hx(e);
    },
    matchMediaRefresh: function () {
      return (
        Bi.forEach(function (e) {
          var n = e.conditions,
            r,
            i;
          for (i in n) n[i] && ((n[i] = !1), (r = 1));
          r && e.revert();
        }) || Af()
      );
    },
    addEventListener: function (e, n) {
      var r = Oa[e] || (Oa[e] = []);
      ~r.indexOf(n) || r.push(n);
    },
    removeEventListener: function (e, n) {
      var r = Oa[e],
        i = r && r.indexOf(n);
      i >= 0 && r.splice(i, 1);
    },
    utils: {
      wrap: Sx,
      wrapYoyo: Tx,
      distribute: h1,
      random: m1,
      snap: p1,
      normalize: kx,
      getUnit: kt,
      clamp: yx,
      splitColor: x1,
      toArray: Tn,
      selector: Lf,
      mapRange: v1,
      pipe: xx,
      unitize: wx,
      interpolate: Px,
      shuffle: d1,
    },
    install: e1,
    effects: mc,
    ticker: sn,
    updateRoot: It.updateRoot,
    plugins: on,
    globalTimeline: Ce,
    core: {
      PropTween: Qt,
      globals: t1,
      Tween: $e,
      Timeline: It,
      Animation: ys,
      getCache: bi,
      _removeLinkedListItem: Ru,
      reverting: function () {
        return St;
      },
      context: function (e) {
        return e && we && (we.data.push(e), (e._ctx = we)), we;
      },
      suppressOverwrites: function (e) {
        return (Hd = e);
      },
    },
  };
Gt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (cu[t] = $e[t]);
});
sn.add(It.updateRoot);
Co = cu.to({}, { duration: 0 });
var Yx = function (e, n) {
    for (var r = e._pt; r && r.p !== n && r.op !== n && r.fp !== n; )
      r = r._next;
    return r;
  },
  Xx = function (e, n) {
    var r = e._targets,
      i,
      o,
      l;
    for (i in n)
      for (o = r.length; o--; )
        (l = e._ptLookup[o][i]),
          l &&
            (l = l.d) &&
            (l._pt && (l = Yx(l, i)),
            l && l.modifier && l.modifier(n[i], e, r[o], i));
  },
  xc = function (e, n) {
    return {
      name: e,
      rawVars: 1,
      init: function (i, o, l) {
        l._onInit = function (s) {
          var a, u;
          if (
            (rt(o) &&
              ((a = {}),
              Gt(o, function (c) {
                return (a[c] = 1);
              }),
              (o = a)),
            n)
          ) {
            a = {};
            for (u in o) a[u] = n(o[u]);
            o = a;
          }
          Xx(s, o);
        };
      },
    };
  },
  qt =
    cu.registerPlugin(
      {
        name: "attr",
        init: function (e, n, r, i, o) {
          var l, s, a;
          this.tween = r;
          for (l in n)
            (a = e.getAttribute(l) || ""),
              (s = this.add(
                e,
                "setAttribute",
                (a || 0) + "",
                n[l],
                i,
                o,
                0,
                0,
                l
              )),
              (s.op = l),
              (s.b = a),
              this._props.push(l);
        },
        render: function (e, n) {
          for (var r = n._pt; r; )
            St ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), (r = r._next);
        },
      },
      {
        name: "endArray",
        init: function (e, n) {
          for (var r = n.length; r--; )
            this.add(e, r, e[r] || 0, n[r], 0, 0, 0, 0, 0, 1);
        },
      },
      xc("roundProps", If),
      xc("modifiers"),
      xc("snap", p1)
    ) || cu;
$e.version = It.version = qt.version = "3.12.5";
J0 = 1;
Xd() && Ko();
ne.Power0;
ne.Power1;
ne.Power2;
ne.Power3;
ne.Power4;
ne.Linear;
ne.Quad;
ne.Cubic;
ne.Quart;
ne.Quint;
ne.Strong;
ne.Elastic;
ne.Back;
ne.SteppedEase;
ne.Bounce;
ne.Sine;
ne.Expo;
ne.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Xp,
  Yr,
  bo,
  ih,
  Ri,
  Gp,
  oh,
  Gx = function () {
    return typeof window < "u";
  },
  Cr = {},
  Ci = 180 / Math.PI,
  Ao = Math.PI / 180,
  so = Math.atan2,
  Qp = 1e8,
  lh = /([A-Z])/g,
  Qx = /(left|right|width|margin|padding|x)/i,
  Kx = /[\s,\(]\S/,
  tr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Ff = function (e, n) {
    return n.set(n.t, n.p, Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u, n);
  },
  qx = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e === 1 ? n.e : Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u,
      n
    );
  },
  Zx = function (e, n) {
    return n.set(
      n.t,
      n.p,
      e ? Math.round((n.s + n.c * e) * 1e4) / 1e4 + n.u : n.b,
      n
    );
  },
  Jx = function (e, n) {
    var r = n.s + n.c * e;
    n.set(n.t, n.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + n.u, n);
  },
  L1 = function (e, n) {
    return n.set(n.t, n.p, e ? n.e : n.b, n);
  },
  I1 = function (e, n) {
    return n.set(n.t, n.p, e !== 1 ? n.b : n.e, n);
  },
  ew = function (e, n, r) {
    return (e.style[n] = r);
  },
  tw = function (e, n, r) {
    return e.style.setProperty(n, r);
  },
  nw = function (e, n, r) {
    return (e._gsap[n] = r);
  },
  rw = function (e, n, r) {
    return (e._gsap.scaleX = e._gsap.scaleY = r);
  },
  iw = function (e, n, r, i, o) {
    var l = e._gsap;
    (l.scaleX = l.scaleY = r), l.renderTransform(o, l);
  },
  ow = function (e, n, r, i, o) {
    var l = e._gsap;
    (l[n] = r), l.renderTransform(o, l);
  },
  Ee = "transform",
  Kt = Ee + "Origin",
  lw = function t(e, n) {
    var r = this,
      i = this.target,
      o = i.style,
      l = i._gsap;
    if (e in Cr && o) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        (e = tr[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (s) {
                return (r.tfm[s] = pr(i, s));
              })
            : (this.tfm[e] = l.x ? l[e] : pr(i, e)),
          e === Kt && (this.tfm.zOrigin = l.zOrigin);
      else
        return tr.transform.split(",").forEach(function (s) {
          return t.call(r, s, n);
        });
      if (this.props.indexOf(Ee) >= 0) return;
      l.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(Kt, n, "")),
        (e = Ee);
    }
    (o || n) && this.props.push(e, n, o[e]);
  },
  b1 = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  sw = function () {
    var e = this.props,
      n = this.target,
      r = n.style,
      i = n._gsap,
      o,
      l;
    for (o = 0; o < e.length; o += 3)
      e[o + 1]
        ? (n[e[o]] = e[o + 2])
        : e[o + 2]
        ? (r[e[o]] = e[o + 2])
        : r.removeProperty(
            e[o].substr(0, 2) === "--"
              ? e[o]
              : e[o].replace(lh, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (l in this.tfm) i[l] = this.tfm[l];
      i.svg &&
        (i.renderTransform(),
        n.setAttribute("data-svg-origin", this.svgo || "")),
        (o = oh()),
        (!o || !o.isStart) &&
          !r[Ee] &&
          (b1(r),
          i.zOrigin &&
            r[Kt] &&
            ((r[Kt] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1));
    }
  },
  A1 = function (e, n) {
    var r = { target: e, props: [], revert: sw, save: lw };
    return (
      e._gsap || qt.core.getCache(e),
      n &&
        n.split(",").forEach(function (i) {
          return r.save(i);
        }),
      r
    );
  },
  F1,
  Bf = function (e, n) {
    var r = Yr.createElementNS
      ? Yr.createElementNS(
          (n || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e
        )
      : Yr.createElement(e);
    return r && r.style ? r : Yr.createElement(e);
  },
  or = function t(e, n, r) {
    var i = getComputedStyle(e);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(lh, "-$1").toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && t(e, qo(n) || n, 1)) ||
      ""
    );
  },
  Kp = "O,Moz,ms,Ms,Webkit".split(","),
  qo = function (e, n, r) {
    var i = n || Ri,
      o = i.style,
      l = 5;
    if (e in o && !r) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      l-- && !(Kp[l] + e in o);

    );
    return l < 0 ? null : (l === 3 ? "ms" : l >= 0 ? Kp[l] : "") + e;
  },
  Uf = function () {
    Gx() &&
      window.document &&
      ((Xp = window),
      (Yr = Xp.document),
      (bo = Yr.documentElement),
      (Ri = Bf("div") || { style: {} }),
      Bf("div"),
      (Ee = qo(Ee)),
      (Kt = Ee + "Origin"),
      (Ri.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (F1 = !!qo("perspective")),
      (oh = qt.core.reverting),
      (ih = 1));
  },
  wc = function t(e) {
    var n = Bf(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      i = this.nextSibling,
      o = this.style.cssText,
      l;
    if (
      (bo.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (l = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch {}
    else this._gsapBBox && (l = this._gsapBBox());
    return (
      r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
      bo.removeChild(n),
      (this.style.cssText = o),
      l
    );
  },
  qp = function (e, n) {
    for (var r = n.length; r--; )
      if (e.hasAttribute(n[r])) return e.getAttribute(n[r]);
  },
  B1 = function (e) {
    var n;
    try {
      n = e.getBBox();
    } catch {
      n = wc.call(e, !0);
    }
    return (
      (n && (n.width || n.height)) || e.getBBox === wc || (n = wc.call(e, !0)),
      n && !n.width && !n.x && !n.y
        ? {
            x: +qp(e, ["x", "cx", "x1"]) || 0,
            y: +qp(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : n
    );
  },
  U1 = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && B1(e));
  },
  Ki = function (e, n) {
    if (n) {
      var r = e.style,
        i;
      n in Cr && n !== Kt && (n = Ee),
        r.removeProperty
          ? ((i = n.substr(0, 2)),
            (i === "ms" || n.substr(0, 6) === "webkit") && (n = "-" + n),
            r.removeProperty(
              i === "--" ? n : n.replace(lh, "-$1").toLowerCase()
            ))
          : r.removeAttribute(n);
    }
  },
  Xr = function (e, n, r, i, o, l) {
    var s = new Qt(e._pt, n, r, 0, 1, l ? I1 : L1);
    return (e._pt = s), (s.b = i), (s.e = o), e._props.push(r), s;
  },
  Zp = { deg: 1, rad: 1, turn: 1 },
  aw = { grid: 1, flex: 1 },
  ci = function t(e, n, r, i) {
    var o = parseFloat(r) || 0,
      l = (r + "").trim().substr((o + "").length) || "px",
      s = Ri.style,
      a = Qx.test(n),
      u = e.tagName.toLowerCase() === "svg",
      c = (u ? "client" : "offset") + (a ? "Width" : "Height"),
      f = 100,
      d = i === "px",
      h = i === "%",
      y,
      g,
      w,
      m;
    if (i === l || !o || Zp[i] || Zp[l]) return o;
    if (
      (l !== "px" && !d && (o = t(e, n, r, "px")),
      (m = e.getCTM && U1(e)),
      (h || l === "%") && (Cr[n] || ~n.indexOf("adius")))
    )
      return (
        (y = m ? e.getBBox()[a ? "width" : "height"] : e[c]),
        be(h ? (o / y) * f : (o / 100) * y)
      );
    if (
      ((s[a ? "width" : "height"] = f + (d ? l : i)),
      (g =
        ~n.indexOf("adius") || (i === "em" && e.appendChild && !u)
          ? e
          : e.parentNode),
      m && (g = (e.ownerSVGElement || {}).parentNode),
      (!g || g === Yr || !g.appendChild) && (g = Yr.body),
      (w = g._gsap),
      w && h && w.width && a && w.time === sn.time && !w.uncache)
    )
      return be((o / w.width) * f);
    if (h && (n === "height" || n === "width")) {
      var p = e.style[n];
      (e.style[n] = f + i), (y = e[c]), p ? (e.style[n] = p) : Ki(e, n);
    } else
      (h || l === "%") &&
        !aw[or(g, "display")] &&
        (s.position = or(e, "position")),
        g === e && (s.position = "static"),
        g.appendChild(Ri),
        (y = Ri[c]),
        g.removeChild(Ri),
        (s.position = "absolute");
    return (
      a && h && ((w = bi(g)), (w.time = sn.time), (w.width = g[c])),
      be(d ? (y * o) / f : y && o ? (f / y) * o : 0)
    );
  },
  pr = function (e, n, r, i) {
    var o;
    return (
      ih || Uf(),
      n in tr &&
        n !== "transform" &&
        ((n = tr[n]), ~n.indexOf(",") && (n = n.split(",")[0])),
      Cr[n] && n !== "transform"
        ? ((o = xs(e, i)),
          (o =
            n !== "transformOrigin"
              ? o[n]
              : o.svg
              ? o.origin
              : du(or(e, Kt)) + " " + o.zOrigin + "px"))
        : ((o = e.style[n]),
          (!o || o === "auto" || i || ~(o + "").indexOf("calc(")) &&
            (o =
              (fu[n] && fu[n](e, n, r)) ||
              or(e, n) ||
              r1(e, n) ||
              (n === "opacity" ? 1 : 0))),
      r && !~(o + "").trim().indexOf(" ") ? ci(e, n, o, r) + r : o
    );
  },
  uw = function (e, n, r, i) {
    if (!r || r === "none") {
      var o = qo(n, e, 1),
        l = o && or(e, o, 1);
      l && l !== r
        ? ((n = o), (r = l))
        : n === "borderColor" && (r = or(e, "borderTopColor"));
    }
    var s = new Qt(this._pt, e.style, n, 0, 1, M1),
      a = 0,
      u = 0,
      c,
      f,
      d,
      h,
      y,
      g,
      w,
      m,
      p,
      v,
      _,
      P;
    if (
      ((s.b = r),
      (s.e = i),
      (r += ""),
      (i += ""),
      i === "auto" &&
        ((g = e.style[n]),
        (e.style[n] = i),
        (i = or(e, n) || i),
        g ? (e.style[n] = g) : Ki(e, n)),
      (c = [r, i]),
      k1(c),
      (r = c[0]),
      (i = c[1]),
      (d = r.match(Po) || []),
      (P = i.match(Po) || []),
      P.length)
    ) {
      for (; (f = Po.exec(i)); )
        (w = f[0]),
          (p = i.substring(a, f.index)),
          y
            ? (y = (y + 1) % 5)
            : (p.substr(-5) === "rgba(" || p.substr(-5) === "hsla(") && (y = 1),
          w !== (g = d[u++] || "") &&
            ((h = parseFloat(g) || 0),
            (_ = g.substr((h + "").length)),
            w.charAt(1) === "=" && (w = Io(h, w) + _),
            (m = parseFloat(w)),
            (v = w.substr((m + "").length)),
            (a = Po.lastIndex - v.length),
            v ||
              ((v = v || fn.units[n] || _),
              a === i.length && ((i += v), (s.e += v))),
            _ !== v && (h = ci(e, n, g, v) || 0),
            (s._pt = {
              _next: s._pt,
              p: p || u === 1 ? p : ",",
              s: h,
              c: m - h,
              m: (y && y < 4) || n === "zIndex" ? Math.round : 0,
            }));
      s.c = a < i.length ? i.substring(a, i.length) : "";
    } else s.r = n === "display" && i === "none" ? I1 : L1;
    return q0.test(i) && (s.e = 0), (this._pt = s), s;
  },
  Jp = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  cw = function (e) {
    var n = e.split(" "),
      r = n[0],
      i = n[1] || "50%";
    return (
      (r === "top" || r === "bottom" || i === "left" || i === "right") &&
        ((e = r), (r = i), (i = e)),
      (n[0] = Jp[r] || r),
      (n[1] = Jp[i] || i),
      n.join(" ")
    );
  },
  fw = function (e, n) {
    if (n.tween && n.tween._time === n.tween._dur) {
      var r = n.t,
        i = r.style,
        o = n.u,
        l = r._gsap,
        s,
        a,
        u;
      if (o === "all" || o === !0) (i.cssText = ""), (a = 1);
      else
        for (o = o.split(","), u = o.length; --u > -1; )
          (s = o[u]),
            Cr[s] && ((a = 1), (s = s === "transformOrigin" ? Kt : Ee)),
            Ki(r, s);
      a &&
        (Ki(r, Ee),
        l &&
          (l.svg && r.removeAttribute("transform"),
          xs(r, 1),
          (l.uncache = 1),
          b1(i)));
    }
  },
  fu = {
    clearProps: function (e, n, r, i, o) {
      if (o.data !== "isFromStart") {
        var l = (e._pt = new Qt(e._pt, n, r, 0, 0, fw));
        return (l.u = i), (l.pr = -10), (l.tween = o), e._props.push(r), 1;
      }
    },
  },
  _s = [1, 0, 0, 1, 0, 0],
  V1 = {},
  $1 = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  em = function (e) {
    var n = or(e, Ee);
    return $1(n) ? _s : n.substr(7).match(K0).map(be);
  },
  sh = function (e, n) {
    var r = e._gsap || bi(e),
      i = e.style,
      o = em(e),
      l,
      s,
      a,
      u;
    return r.svg && e.getAttribute("transform")
      ? ((a = e.transform.baseVal.consolidate().matrix),
        (o = [a.a, a.b, a.c, a.d, a.e, a.f]),
        o.join(",") === "1,0,0,1,0,0" ? _s : o)
      : (o === _s &&
          !e.offsetParent &&
          e !== bo &&
          !r.svg &&
          ((a = i.display),
          (i.display = "block"),
          (l = e.parentNode),
          (!l || !e.offsetParent) &&
            ((u = 1), (s = e.nextElementSibling), bo.appendChild(e)),
          (o = em(e)),
          a ? (i.display = a) : Ki(e, "display"),
          u &&
            (s
              ? l.insertBefore(e, s)
              : l
              ? l.appendChild(e)
              : bo.removeChild(e))),
        n && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o);
  },
  Vf = function (e, n, r, i, o, l) {
    var s = e._gsap,
      a = o || sh(e, !0),
      u = s.xOrigin || 0,
      c = s.yOrigin || 0,
      f = s.xOffset || 0,
      d = s.yOffset || 0,
      h = a[0],
      y = a[1],
      g = a[2],
      w = a[3],
      m = a[4],
      p = a[5],
      v = n.split(" "),
      _ = parseFloat(v[0]) || 0,
      P = parseFloat(v[1]) || 0,
      C,
      T,
      k,
      E;
    r
      ? a !== _s &&
        (T = h * w - y * g) &&
        ((k = _ * (w / T) + P * (-g / T) + (g * p - w * m) / T),
        (E = _ * (-y / T) + P * (h / T) - (h * p - y * m) / T),
        (_ = k),
        (P = E))
      : ((C = B1(e)),
        (_ = C.x + (~v[0].indexOf("%") ? (_ / 100) * C.width : _)),
        (P = C.y + (~(v[1] || v[0]).indexOf("%") ? (P / 100) * C.height : P))),
      i || (i !== !1 && s.smooth)
        ? ((m = _ - u),
          (p = P - c),
          (s.xOffset = f + (m * h + p * g) - m),
          (s.yOffset = d + (m * y + p * w) - p))
        : (s.xOffset = s.yOffset = 0),
      (s.xOrigin = _),
      (s.yOrigin = P),
      (s.smooth = !!i),
      (s.origin = n),
      (s.originIsAbsolute = !!r),
      (e.style[Kt] = "0px 0px"),
      l &&
        (Xr(l, s, "xOrigin", u, _),
        Xr(l, s, "yOrigin", c, P),
        Xr(l, s, "xOffset", f, s.xOffset),
        Xr(l, s, "yOffset", d, s.yOffset)),
      e.setAttribute("data-svg-origin", _ + " " + P);
  },
  xs = function (e, n) {
    var r = e._gsap || new C1(e);
    if ("x" in r && !n && !r.uncache) return r;
    var i = e.style,
      o = r.scaleX < 0,
      l = "px",
      s = "deg",
      a = getComputedStyle(e),
      u = or(e, Kt) || "0",
      c,
      f,
      d,
      h,
      y,
      g,
      w,
      m,
      p,
      v,
      _,
      P,
      C,
      T,
      k,
      E,
      O,
      b,
      M,
      A,
      $,
      Q,
      X,
      B,
      j,
      D,
      x,
      V,
      re,
      dt,
      se,
      ze;
    return (
      (c = f = d = g = w = m = p = v = _ = 0),
      (h = y = 1),
      (r.svg = !!(e.getCTM && U1(e))),
      a.translate &&
        ((a.translate !== "none" ||
          a.scale !== "none" ||
          a.rotate !== "none") &&
          (i[Ee] =
            (a.translate !== "none"
              ? "translate3d(" +
                (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") +
            (a.scale !== "none"
              ? "scale(" + a.scale.split(" ").join(",") + ") "
              : "") +
            (a[Ee] !== "none" ? a[Ee] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (T = sh(e, r.svg)),
      r.svg &&
        (r.uncache
          ? ((j = e.getBBox()),
            (u = r.xOrigin - j.x + "px " + (r.yOrigin - j.y) + "px"),
            (B = ""))
          : (B = !n && e.getAttribute("data-svg-origin")),
        Vf(e, B || u, !!B || r.originIsAbsolute, r.smooth !== !1, T)),
      (P = r.xOrigin || 0),
      (C = r.yOrigin || 0),
      T !== _s &&
        ((b = T[0]),
        (M = T[1]),
        (A = T[2]),
        ($ = T[3]),
        (c = Q = T[4]),
        (f = X = T[5]),
        T.length === 6
          ? ((h = Math.sqrt(b * b + M * M)),
            (y = Math.sqrt($ * $ + A * A)),
            (g = b || M ? so(M, b) * Ci : 0),
            (p = A || $ ? so(A, $) * Ci + g : 0),
            p && (y *= Math.abs(Math.cos(p * Ao))),
            r.svg && ((c -= P - (P * b + C * A)), (f -= C - (P * M + C * $))))
          : ((ze = T[6]),
            (dt = T[7]),
            (x = T[8]),
            (V = T[9]),
            (re = T[10]),
            (se = T[11]),
            (c = T[12]),
            (f = T[13]),
            (d = T[14]),
            (k = so(ze, re)),
            (w = k * Ci),
            k &&
              ((E = Math.cos(-k)),
              (O = Math.sin(-k)),
              (B = Q * E + x * O),
              (j = X * E + V * O),
              (D = ze * E + re * O),
              (x = Q * -O + x * E),
              (V = X * -O + V * E),
              (re = ze * -O + re * E),
              (se = dt * -O + se * E),
              (Q = B),
              (X = j),
              (ze = D)),
            (k = so(-A, re)),
            (m = k * Ci),
            k &&
              ((E = Math.cos(-k)),
              (O = Math.sin(-k)),
              (B = b * E - x * O),
              (j = M * E - V * O),
              (D = A * E - re * O),
              (se = $ * O + se * E),
              (b = B),
              (M = j),
              (A = D)),
            (k = so(M, b)),
            (g = k * Ci),
            k &&
              ((E = Math.cos(k)),
              (O = Math.sin(k)),
              (B = b * E + M * O),
              (j = Q * E + X * O),
              (M = M * E - b * O),
              (X = X * E - Q * O),
              (b = B),
              (Q = j)),
            w &&
              Math.abs(w) + Math.abs(g) > 359.9 &&
              ((w = g = 0), (m = 180 - m)),
            (h = be(Math.sqrt(b * b + M * M + A * A))),
            (y = be(Math.sqrt(X * X + ze * ze))),
            (k = so(Q, X)),
            (p = Math.abs(k) > 2e-4 ? k * Ci : 0),
            (_ = se ? 1 / (se < 0 ? -se : se) : 0)),
        r.svg &&
          ((B = e.getAttribute("transform")),
          (r.forceCSS = e.setAttribute("transform", "") || !$1(or(e, Ee))),
          B && e.setAttribute("transform", B))),
      Math.abs(p) > 90 &&
        Math.abs(p) < 270 &&
        (o
          ? ((h *= -1), (p += g <= 0 ? 180 : -180), (g += g <= 0 ? 180 : -180))
          : ((y *= -1), (p += p <= 0 ? 180 : -180))),
      (n = n || r.uncache),
      (r.x =
        c -
        ((r.xPercent =
          c &&
          ((!n && r.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
          ? (e.offsetWidth * r.xPercent) / 100
          : 0) +
        l),
      (r.y =
        f -
        ((r.yPercent =
          f &&
          ((!n && r.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-f) ? -50 : 0)))
          ? (e.offsetHeight * r.yPercent) / 100
          : 0) +
        l),
      (r.z = d + l),
      (r.scaleX = be(h)),
      (r.scaleY = be(y)),
      (r.rotation = be(g) + s),
      (r.rotationX = be(w) + s),
      (r.rotationY = be(m) + s),
      (r.skewX = p + s),
      (r.skewY = v + s),
      (r.transformPerspective = _ + l),
      (r.zOrigin = parseFloat(u.split(" ")[2]) || (!n && r.zOrigin) || 0) &&
        (i[Kt] = du(u)),
      (r.xOffset = r.yOffset = 0),
      (r.force3D = fn.force3D),
      (r.renderTransform = r.svg ? hw : F1 ? W1 : dw),
      (r.uncache = 0),
      r
    );
  },
  du = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  kc = function (e, n, r) {
    var i = kt(n);
    return be(parseFloat(n) + parseFloat(ci(e, "x", r + "px", i))) + i;
  },
  dw = function (e, n) {
    (n.z = "0px"),
      (n.rotationY = n.rotationX = "0deg"),
      (n.force3D = 0),
      W1(e, n);
  },
  xi = "0deg",
  gl = "0px",
  wi = ") ",
  W1 = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      l = r.x,
      s = r.y,
      a = r.z,
      u = r.rotation,
      c = r.rotationY,
      f = r.rotationX,
      d = r.skewX,
      h = r.skewY,
      y = r.scaleX,
      g = r.scaleY,
      w = r.transformPerspective,
      m = r.force3D,
      p = r.target,
      v = r.zOrigin,
      _ = "",
      P = (m === "auto" && e && e !== 1) || m === !0;
    if (v && (f !== xi || c !== xi)) {
      var C = parseFloat(c) * Ao,
        T = Math.sin(C),
        k = Math.cos(C),
        E;
      (C = parseFloat(f) * Ao),
        (E = Math.cos(C)),
        (l = kc(p, l, T * E * -v)),
        (s = kc(p, s, -Math.sin(C) * -v)),
        (a = kc(p, a, k * E * -v + v));
    }
    w !== gl && (_ += "perspective(" + w + wi),
      (i || o) && (_ += "translate(" + i + "%, " + o + "%) "),
      (P || l !== gl || s !== gl || a !== gl) &&
        (_ +=
          a !== gl || P
            ? "translate3d(" + l + ", " + s + ", " + a + ") "
            : "translate(" + l + ", " + s + wi),
      u !== xi && (_ += "rotate(" + u + wi),
      c !== xi && (_ += "rotateY(" + c + wi),
      f !== xi && (_ += "rotateX(" + f + wi),
      (d !== xi || h !== xi) && (_ += "skew(" + d + ", " + h + wi),
      (y !== 1 || g !== 1) && (_ += "scale(" + y + ", " + g + wi),
      (p.style[Ee] = _ || "translate(0, 0)");
  },
  hw = function (e, n) {
    var r = n || this,
      i = r.xPercent,
      o = r.yPercent,
      l = r.x,
      s = r.y,
      a = r.rotation,
      u = r.skewX,
      c = r.skewY,
      f = r.scaleX,
      d = r.scaleY,
      h = r.target,
      y = r.xOrigin,
      g = r.yOrigin,
      w = r.xOffset,
      m = r.yOffset,
      p = r.forceCSS,
      v = parseFloat(l),
      _ = parseFloat(s),
      P,
      C,
      T,
      k,
      E;
    (a = parseFloat(a)),
      (u = parseFloat(u)),
      (c = parseFloat(c)),
      c && ((c = parseFloat(c)), (u += c), (a += c)),
      a || u
        ? ((a *= Ao),
          (u *= Ao),
          (P = Math.cos(a) * f),
          (C = Math.sin(a) * f),
          (T = Math.sin(a - u) * -d),
          (k = Math.cos(a - u) * d),
          u &&
            ((c *= Ao),
            (E = Math.tan(u - c)),
            (E = Math.sqrt(1 + E * E)),
            (T *= E),
            (k *= E),
            c &&
              ((E = Math.tan(c)),
              (E = Math.sqrt(1 + E * E)),
              (P *= E),
              (C *= E))),
          (P = be(P)),
          (C = be(C)),
          (T = be(T)),
          (k = be(k)))
        : ((P = f), (k = d), (C = T = 0)),
      ((v && !~(l + "").indexOf("px")) || (_ && !~(s + "").indexOf("px"))) &&
        ((v = ci(h, "x", l, "px")), (_ = ci(h, "y", s, "px"))),
      (y || g || w || m) &&
        ((v = be(v + y - (y * P + g * T) + w)),
        (_ = be(_ + g - (y * C + g * k) + m))),
      (i || o) &&
        ((E = h.getBBox()),
        (v = be(v + (i / 100) * E.width)),
        (_ = be(_ + (o / 100) * E.height))),
      (E =
        "matrix(" + P + "," + C + "," + T + "," + k + "," + v + "," + _ + ")"),
      h.setAttribute("transform", E),
      p && (h.style[Ee] = E);
  },
  pw = function (e, n, r, i, o) {
    var l = 360,
      s = rt(o),
      a = parseFloat(o) * (s && ~o.indexOf("rad") ? Ci : 1),
      u = a - i,
      c = i + u + "deg",
      f,
      d;
    return (
      s &&
        ((f = o.split("_")[1]),
        f === "short" && ((u %= l), u !== u % (l / 2) && (u += u < 0 ? l : -l)),
        f === "cw" && u < 0
          ? (u = ((u + l * Qp) % l) - ~~(u / l) * l)
          : f === "ccw" && u > 0 && (u = ((u - l * Qp) % l) - ~~(u / l) * l)),
      (e._pt = d = new Qt(e._pt, n, r, i, u, qx)),
      (d.e = c),
      (d.u = "deg"),
      e._props.push(r),
      d
    );
  },
  tm = function (e, n) {
    for (var r in n) e[r] = n[r];
    return e;
  },
  mw = function (e, n, r) {
    var i = tm({}, r._gsap),
      o = "perspective,force3D,transformOrigin,svgOrigin",
      l = r.style,
      s,
      a,
      u,
      c,
      f,
      d,
      h,
      y;
    i.svg
      ? ((u = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (l[Ee] = n),
        (s = xs(r, 1)),
        Ki(r, Ee),
        r.setAttribute("transform", u))
      : ((u = getComputedStyle(r)[Ee]),
        (l[Ee] = n),
        (s = xs(r, 1)),
        (l[Ee] = u));
    for (a in Cr)
      (u = i[a]),
        (c = s[a]),
        u !== c &&
          o.indexOf(a) < 0 &&
          ((h = kt(u)),
          (y = kt(c)),
          (f = h !== y ? ci(r, a, u, y) : parseFloat(u)),
          (d = parseFloat(c)),
          (e._pt = new Qt(e._pt, s, a, f, d - f, Ff)),
          (e._pt.u = y || 0),
          e._props.push(a));
    tm(s, i);
  };
Gt("padding,margin,Width,Radius", function (t, e) {
  var n = "Top",
    r = "Right",
    i = "Bottom",
    o = "Left",
    l = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(function (s) {
      return e < 2 ? t + s : "border" + s + t;
    });
  fu[e > 1 ? "border" + t : t] = function (s, a, u, c, f) {
    var d, h;
    if (arguments.length < 4)
      return (
        (d = l.map(function (y) {
          return pr(s, y, u);
        })),
        (h = d.join(" ")),
        h.split(d[0]).length === 5 ? d[0] : h
      );
    (d = (c + "").split(" ")),
      (h = {}),
      l.forEach(function (y, g) {
        return (h[y] = d[g] = d[g] || d[((g - 1) / 2) | 0]);
      }),
      s.init(a, h, f);
  };
});
var H1 = {
  name: "css",
  register: Uf,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, n, r, i, o) {
    var l = this._props,
      s = e.style,
      a = r.vars.startAt,
      u,
      c,
      f,
      d,
      h,
      y,
      g,
      w,
      m,
      p,
      v,
      _,
      P,
      C,
      T,
      k;
    ih || Uf(),
      (this.styles = this.styles || A1(e)),
      (k = this.styles.props),
      (this.tween = r);
    for (g in n)
      if (g !== "autoRound" && ((c = n[g]), !(on[g] && E1(g, n, r, i, e, o)))) {
        if (
          ((h = typeof c),
          (y = fu[g]),
          h === "function" && ((c = c.call(r, i, e, o)), (h = typeof c)),
          h === "string" && ~c.indexOf("random(") && (c = gs(c)),
          y)
        )
          y(this, e, g, c, r) && (T = 1);
        else if (g.substr(0, 2) === "--")
          (u = (getComputedStyle(e).getPropertyValue(g) + "").trim()),
            (c += ""),
            (oi.lastIndex = 0),
            oi.test(u) || ((w = kt(u)), (m = kt(c))),
            m ? w !== m && (u = ci(e, g, u, m) + m) : w && (c += w),
            this.add(s, "setProperty", u, c, i, o, 0, 0, g),
            l.push(g),
            k.push(g, 0, s[g]);
        else if (h !== "undefined") {
          if (
            (a && g in a
              ? ((u = typeof a[g] == "function" ? a[g].call(r, i, e, o) : a[g]),
                rt(u) && ~u.indexOf("random(") && (u = gs(u)),
                kt(u + "") ||
                  u === "auto" ||
                  (u += fn.units[g] || kt(pr(e, g)) || ""),
                (u + "").charAt(1) === "=" && (u = pr(e, g)))
              : (u = pr(e, g)),
            (d = parseFloat(u)),
            (p = h === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
            p && (c = c.substr(2)),
            (f = parseFloat(c)),
            g in tr &&
              (g === "autoAlpha" &&
                (d === 1 && pr(e, "visibility") === "hidden" && f && (d = 0),
                k.push("visibility", 0, s.visibility),
                Xr(
                  this,
                  s,
                  "visibility",
                  d ? "inherit" : "hidden",
                  f ? "inherit" : "hidden",
                  !f
                )),
              g !== "scale" &&
                g !== "transform" &&
                ((g = tr[g]), ~g.indexOf(",") && (g = g.split(",")[0]))),
            (v = g in Cr),
            v)
          ) {
            if (
              (this.styles.save(g),
              _ ||
                ((P = e._gsap),
                (P.renderTransform && !n.parseTransform) ||
                  xs(e, n.parseTransform),
                (C = n.smoothOrigin !== !1 && P.smooth),
                (_ = this._pt =
                  new Qt(this._pt, s, Ee, 0, 1, P.renderTransform, P, 0, -1)),
                (_.dep = 1)),
              g === "scale")
            )
              (this._pt = new Qt(
                this._pt,
                P,
                "scaleY",
                P.scaleY,
                (p ? Io(P.scaleY, p + f) : f) - P.scaleY || 0,
                Ff
              )),
                (this._pt.u = 0),
                l.push("scaleY", g),
                (g += "X");
            else if (g === "transformOrigin") {
              k.push(Kt, 0, s[Kt]),
                (c = cw(c)),
                P.svg
                  ? Vf(e, c, 0, C, 0, this)
                  : ((m = parseFloat(c.split(" ")[2]) || 0),
                    m !== P.zOrigin && Xr(this, P, "zOrigin", P.zOrigin, m),
                    Xr(this, s, g, du(u), du(c)));
              continue;
            } else if (g === "svgOrigin") {
              Vf(e, c, 1, C, 0, this);
              continue;
            } else if (g in V1) {
              pw(this, P, g, d, p ? Io(d, p + c) : c);
              continue;
            } else if (g === "smoothOrigin") {
              Xr(this, P, "smooth", P.smooth, c);
              continue;
            } else if (g === "force3D") {
              P[g] = c;
              continue;
            } else if (g === "transform") {
              mw(this, c, e);
              continue;
            }
          } else g in s || (g = qo(g) || g);
          if (v || ((f || f === 0) && (d || d === 0) && !Kx.test(c) && g in s))
            (w = (u + "").substr((d + "").length)),
              f || (f = 0),
              (m = kt(c) || (g in fn.units ? fn.units[g] : w)),
              w !== m && (d = ci(e, g, u, m)),
              (this._pt = new Qt(
                this._pt,
                v ? P : s,
                g,
                d,
                (p ? Io(d, p + f) : f) - d,
                !v && (m === "px" || g === "zIndex") && n.autoRound !== !1
                  ? Jx
                  : Ff
              )),
              (this._pt.u = m || 0),
              w !== m && m !== "%" && ((this._pt.b = u), (this._pt.r = Zx));
          else if (g in s) uw.call(this, e, g, u, p ? p + c : c);
          else if (g in e) this.add(e, g, u || e[g], p ? p + c : c, i, o);
          else if (g !== "parseTransform") {
            Qd(g, c);
            continue;
          }
          v || (g in s ? k.push(g, 0, s[g]) : k.push(g, 1, u || e[g])),
            l.push(g);
        }
      }
    T && z1(this);
  },
  render: function (e, n) {
    if (n.tween._time || !oh())
      for (var r = n._pt; r; ) r.r(e, r.d), (r = r._next);
    else n.styles.revert();
  },
  get: pr,
  aliases: tr,
  getSetter: function (e, n, r) {
    var i = tr[n];
    return (
      i && i.indexOf(",") < 0 && (n = i),
      n in Cr && n !== Kt && (e._gsap.x || pr(e, "x"))
        ? r && Gp === r
          ? n === "scale"
            ? rw
            : nw
          : (Gp = r || {}) && (n === "scale" ? iw : ow)
        : e.style && !Yd(e.style[n])
        ? ew
        : ~n.indexOf("-")
        ? tw
        : nh(e, n)
    );
  },
  core: { _removeProperty: Ki, _getMatrix: sh },
};
qt.utils.checkPrefix = qo;
qt.core.getStyleSaver = A1;
(function (t, e, n, r) {
  var i = Gt(t + "," + e + "," + n, function (o) {
    Cr[o] = 1;
  });
  Gt(e, function (o) {
    (fn.units[o] = "deg"), (V1[o] = 1);
  }),
    (tr[i[13]] = t + "," + e),
    Gt(r, function (o) {
      var l = o.split(":");
      tr[l[1]] = i[l[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
Gt(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (t) {
    fn.units[t] = "px";
  }
);
qt.registerPlugin(H1);
var pe = qt.registerPlugin(H1) || qt;
pe.core.Tween;
/*!
 * @gsap/react 2.1.0
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ let nm = typeof window < "u" ? fe.useLayoutEffect : fe.useEffect,
  rm = (t) => t && !Array.isArray(t) && typeof t == "object",
  sa = [],
  gw = {},
  Y1 = pe;
const ct = (t, e = sa) => {
  let n = gw;
  rm(t)
    ? ((n = t), (t = null), (e = "dependencies" in n ? n.dependencies : sa))
    : rm(e) && ((n = e), (e = "dependencies" in n ? n.dependencies : sa));
  let { scope: r, revertOnUpdate: i } = n,
    [o, l] = fe.useState(!1);
  t &&
    typeof t != "function" &&
    console.warn("First parameter must be a function or config object");
  const s = Y1.context(() => {}, r),
    a = (f) => s.add(null, f),
    u = () => s.revert(),
    c = e && e.length && !i;
  return (
    nm(() => {
      if ((t && s.add(t, r), !c || !o)) return u;
    }, e),
    c && nm(() => (l(!0), u), sa),
    { context: s, contextSafe: a }
  );
};
ct.register = (t) => {
  Y1 = t;
};
ct.headless = !0;
function $f(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z",
        },
        child: [],
      },
    ],
  })(t);
}
function X1(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z",
        },
        child: [],
      },
    ],
  })(t);
}
function vw(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
        child: [],
      },
    ],
  })(t);
}
function yw(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z",
        },
        child: [],
      },
    ],
  })(t);
}
pe.registerPlugin(ct);
pe.registerPlugin(G);
const _w = "https://github.com/nvan21",
  xw = "https://www.linkedin.com/in/nathan-van-utrecht",
  ww = () => {
    const t = fe.useRef(null),
      e = fe.useRef(null),
      n = fe.useRef(null);
    ct(() => {
      const i = t.current,
        o = e.current,
        l = n.current;
      pe.fromTo(
        i,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power1.inOut" }
      ),
        pe.fromTo(
          o,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power1.inOut" }
        ),
        pe.fromTo(
          l,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power1.inOut" }
        );
    });
    const r = (i) => {
      window.open(i, "_blank");
    };
    return S.jsx("section", {
      className:
        "relative flex w-full h-screen mx-auto justify-center items-center",
      children: S.jsxs("div", {
        className:
          "max-w-7xl gap-5 flex items-start px-6 inset-0 sm:px-16 mx-auto",
        children: [
          S.jsxs("div", {
            className: "flex flex-col items-center",
            children: [
              S.jsx("div", {
                ref: e,
                children: S.jsx($f, { className: "text-tertiary text-xl" }),
              }),
              S.jsx("div", {
                className: "w-1 h-40 bg-gradient-to-b from-tertiary",
                ref: t,
              }),
            ],
          }),
          S.jsxs("div", {
            className: "flex flex-col gap-4",
            ref: n,
            children: [
              S.jsxs("h1", {
                className:
                  "text-primary_text text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main items-center mt-2",
                children: [
                  "Hello, I'm ",
                  S.jsx("span", {
                    className: "text-tertiary",
                    children: "Nathan Van Utrecht",
                  }),
                ],
              }),
              S.jsxs("p", {
                className:
                  "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main",
                children: [
                  "Mechanical Engineering Student ",
                  S.jsx("br", {}),
                  " Artificial Intelligence Researcher ",
                  S.jsx("br", {}),
                  " Undergraduate at Iowa State University",
                ],
              }),
              S.jsxs("div", {
                className: "flex flex-row gap-3 text-tertiary text-3xl",
                children: [
                  S.jsx("button", {
                    className: "hover-default",
                    onClick: () => r(_w),
                    children: S.jsx(X1, {}),
                  }),
                  S.jsx("button", {
                    className: "hover-default",
                    onClick: () => r(xw),
                    children: S.jsx(vw, {}),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  ao = (t) =>
    S.jsxs("div", {
      className:
        "bg-secondary flex flex-col rounded-lg items-center gap-5 px-3 py-5 border-b-2 border-primary_text w-full shadow-xl hover:scale-105 duration-500 transition-all",
      children: [
        t.icon,
        S.jsx("p", {
          className: "text-primary_text font-bold text-xl",
          children: t.text,
        }),
        S.jsx("div", {
          className: "w-full bg-metal rounded-full h-2",
          children: S.jsx("div", {
            className: "bg-tertiary rounded-full h-full",
            style: { width: `${t.level}%` },
          }),
        }),
      ],
    });
function kw(t) {
  return sr({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626",
        },
        child: [],
      },
    ],
  })(t);
}
function Sw(t) {
  return sr({
    tag: "svg",
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z",
        },
        child: [],
      },
    ],
  })(t);
}
function im(t) {
  return sr({
    tag: "svg",
    attr: { viewBox: "0 0 256 256", fill: "currentColor" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,128,115.4,56,76ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l72-39.4v76.65Z",
        },
        child: [],
      },
    ],
  })(t);
}
pe.registerPlugin(ct);
pe.registerPlugin(G);
const Tw = () => {
    const t = fe.useRef(null),
      e = fe.useRef(null),
      n = fe.useRef(null),
      r = new Date(2002, 10, 2, 0, 0, 0, 0),
      i = new Date(),
      o = () => {
        let l = i.getFullYear() - r.getFullYear();
        const s = i.getMonth() - r.getMonth(),
          a = i.getDate() - r.getDate();
        return (
          (s < 0 || (s == 0 && a < 0)) && (l -= 1),
          S.jsx("span", { children: l })
        );
      };
    return (
      ct(
        () => {
          const l = t.current;
          pe.fromTo(
            l,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.5,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: l,
                toggleActions: "play none none reset",
              },
            }
          );
        },
        { scope: t }
      ),
      ct(
        () => {
          const l = n.current;
          pe.fromTo(
            l,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: l,
                toggleActions: "play none none reset",
              },
            }
          );
        },
        { scope: n }
      ),
      ct(
        () => {
          const l = e.current;
          pe.fromTo(
            l,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1,
              ease: "power1.inOut",
              scrollTrigger: {
                trigger: l,
                toggleActions: "play none none reset",
              },
            }
          );
        },
        { scope: e }
      ),
      S.jsx("section", {
        className:
          "px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal",
        id: "about",
        children: S.jsxs("div", {
          className: "flex flex-col gap-1",
          children: [
            S.jsxs("div", {
              ref: t,
              children: [
                S.jsx("p", {
                  className:
                    "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main",
                  children: "Overview",
                }),
                S.jsx("h1", {
                  className:
                    "text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary mt-2",
                  children: "About Me.",
                }),
              ],
            }),
            S.jsxs("p", {
              className:
                "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main mt-2",
              ref: n,
              children: [
                "I am a ",
                o(),
                " year old mechanical engineering student with a passion for everything from machine learning to advanced 3D modeling. I am a quick, meticulous learner with an intrinsic desire to excel. This blend, coupled with my aptitude for collaboration, helps me adapt to new problems and develop innovative solutions.",
              ],
            }),
            S.jsxs("div", {
              className: "flex flex-wrap mt-12 gap-9",
              ref: e,
              children: [
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(im, { className: "text-tertiary text-9xl" }),
                    text: "Solidworks",
                    level: 90,
                  }),
                }),
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(yw, { className: "text-tertiary text-9xl" }),
                    text: "Python",
                    level: 90,
                  }),
                }),
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(im, { className: "text-tertiary text-9xl" }),
                    text: "PTC Creo",
                    level: 80,
                  }),
                }),
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(Sw, { className: "text-tertiary text-9xl" }),
                    text: "PyTorch",
                    level: 80,
                  }),
                }),
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(I_, { className: "text-tertiary text-9xl" }),
                    text: "JavaScript",
                    level: 50,
                  }),
                }),
                S.jsx("div", {
                  className: "sm:w-[250px] w-full",
                  children: S.jsx(ao, {
                    icon: S.jsx(kw, { className: "text-tertiary text-9xl" }),
                    text: "Blender",
                    level: 40,
                  }),
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Pw = {
    tracREU: {
      title: "REU Research Intern",
      company: "Translational AI Center at Iowa State University",
      experiences: [
        "Investigated the effectiveness of model-free vs model-based reinforcement learning algorithms in solving the simulation to real gap",
        "Presented my research on a poster at Iowa State’s Summer Undergraduate Research Symposium, where I explained my findings to fellow researchers and engaged in idea exchanges with graduate students and professors",
        "Reimplemented popular reinforcement learning environments in PyTorch to transform them into differentiable simulators, facilitating research on short horizon actor-critic methods",
      ],
      skills: ["Reinforcement Learning", "PyTorch"],
      date: "May 2024 - August 2024",
    },
    csl: {
      title: "Research Assistant",
      company: "Coordinated Systems Lab",
      experiences: [
        "Utilized various resources to learn the fundamentals of machine learning",
        "Applied machine learning knowledge with PyTorch to write various reinforcement learning algorithms for toy Gymnasium environments",
        "Assisted in developing code for autonomous UAV simulation",
      ],
      skills: ["Python", "Pytorch"],
      date: "November 2023 - Present",
    },
    johnDeere: {
      title: "Engineering Intern on Implements and Attachments",
      company: "John Deere",
      experiences: [
        "Leveraged CAD and manufacturing process knowledge to develop a functional prototype of a lawnmower tool storage bracket for the select series lawnmowers",
        "Laid the groundwork for future tractor cab redesigns by integrating market research, homologation investigation, and product design strategies to develop initial prototypes for feature adds which bolster the company’s business portfolio",
      ],
      skills: ["PTC Creo"],
      date: "May 2023 - August 2023",
    },
    graceTechnologies: {
      title: "IIoT Engineering Intern",
      company: "Grace Technologies",
      experiences: [
        "Developed a field debugger application using python which queries an SQL database and returns various types of data in a succinct user interface",
        "Collaborated with senior engineers to design test fixtures and write python scripts which automatically validate the functionality of production-ready predictive maintenance equipment.",
      ],
      skills: ["Python"],
      date: "May 2022 - May 2023",
    },
  },
  Cw = {
    basketballShotTracker: {
      title: "Basketball Shot Detection",
      introduction:
        "This project combines my interests in sports and technology to create a tool that tracks basketball shots and predicts their outcomes using advanced machine learning techniques. By leveraging the power of YOLO and image segmentation, I aim to improve my shooting skills while deepening my understanding of computer vision.",
      description:
        "This project uses YOLO and image segmentation to analyze basketball shots and predict their success. At its core, it’s a tool that watches basketball videos, tracks the ball, and makes predictions about whether the shot will make it through the hoop. The project involves three main components. First, there’s the model training. Initially, I tried using a dataset from Roboflow for transfer learning to teach the model to recognize basketballs and hoops, but it turned out that the performance was worse compared to using a standard YOLO model. Next, there's the detection part, where YOLOv8l scans each frame of a video, identifies where the basketball is, and draws bounding boxes around it. This detection process is crucial for analyzing how the ball moves during each shot. Finally, the trajectory analysis combines physics-based models and parabolic curve-fitting to predict the ball’s path. This part of the project aims to accurately map out how the ball travels and determine if it will land in the basket. By integrating machine learning and computer vision, the project offers insights that can help improve basketball performance.",
      motivation:
        "As someone who spends a lot of time on the basketball court, I wanted a simple way to track my shooting stats without having to do it manually. I thought, why not use technology to make this easier and more insightful? This project was born out of that idea. On top of that, it was a great way for me to get better at computer vision, something I've been keen to learn more about. Working on this project has allowed me to apply what I've been learning in a practical and fun way.",
      roadblocks:
        "Working on this project wasn't without its challenges. Finding the right data to train the model was tricky at first. I tried using Roboflow for transfer learning, hoping it would enhance model performance, but it ended up being less effective than sticking with a standard YOLO model. Another challenge was getting the model to accurately predict shot outcomes, which took a lot of tweaking and experimenting with different settings to get just right. Making sure the system could analyze video frames in real-time without losing accuracy was also a tough technical challenge, but tackling it taught me a lot.",
      lessons:
        "This project has been a fantastic learning journey. I've learned a lot about how different technologies can work together to solve a problem. Working on model training and evaluation has given me a better understanding of how machine learning models work and the importance of testing them thoroughly. I've also improved my problem-solving skills by figuring out how to handle real-time video processing and fine-tuning the model's accuracy. Overall, this project has been an awesome way to improve both my basketball skills and my computer vision expertise.",
      extra: { github: "https://github.com/nvan21/Basketball-Shot-Detection" },
      skills: ["YOLOv8", "Computer Vision", "Image Segmentation"],
      thumbnail: "./basketball_tracker_thumbnail.png",
    },
    computerVisionBasics: {
      title: "Computer Vision Basics",
      introduction:
        "I recently explored image classification using PyTorch by working with the MNIST and CIFAR-10 datasets. PyTorch’s intuitive framework made it easy to build and train convolutional neural networks. By experimenting with different architectures and hyperparameters, I gained a deeper understanding of how models learn to recognize patterns in images.",
      description:
        "I learned the basics of computer vision by training feed-forward and convolutional neural networks on standard toy datasets like CIFAR and MNIST. This hands-on approach allowed me to dive into the fundamentals of image processing and pattern recognition, providing a solid foundation in computer vision techniques. I chose these datasets because they are well-known benchmarks in the field, providing a clear and structured way to evaluate my models’ performance and compare them to existing solutions. Documenting my learning process in Jupyter notebooks was a crucial part of this journey, as it allowed me to record my experiments, visualize data and results, and iterate on my models efficiently. By writing down my thought process, code, and findings, I created a comprehensive resource that I could reference in the future. This experience taught me not only how to implement these powerful models but also how to troubleshoot issues and optimize their performance. It was a rewarding process that demonstrated my ability to apply theoretical knowledge to practical problems, and it laid the groundwork for more advanced projects in computer vision and machine learning.",
      motivation:
        "My motivation to learn image classification with PyTorch stemmed from a personal project idea: creating an app that can track basketball shots and determine if they go in. This concept intrigued me because I've always wanted a cheap way to track my practice statistics. I realized that mastering image classification would be a crucial step in understanding how to analyze video frames and detect specific events. By learning how to work with datasets like MNIST and CIFAR-10, I built the foundational skills necessary to bring my app idea to life.",
      roadblocks:
        "Learning image classification with PyTorch came with its fair share of challenges. While getting started with torchvision data loaders was straightforward, I spent a lot of time trying to understand the intuition behind using components like batch normalization and max pooling layers in convolutional neural networks. It wasn’t just about knowing how they worked but figuring out why they were important and how they improved model performance. Visualizing and quantifying results added another layer of complexity. Learning to interpret metrics like accuracy, loss, and confusion matrices was initially overwhelming. Despite these hurdles, the journey was incredibly rewarding and kept me motivated to continue learning.",
      lessons:
        "Working through image classification projects taught me several valuable lessons that are crucial in the computer vision field. I learned the importance of data augmentation for improving model generalization and gained a deep understanding of how convolutional layers function in feature extraction. Recognizing the significance of activation functions for introducing non-linearity was another key takeaway. I also discovered the effectiveness of using techniques like dropout to prevent overfitting. These experiences helped me build a solid foundation in computer vision, preparing me for opportunities where skills in neural networks and deep learning are essential.",
      extra: {
        github: "https://github.com/nvan21/image-classification/tree/main",
      },
      skills: ["PyTorch", "Computer Vision", "CNNs"],
      thumbnail: "./image_classification_thumbnail.webp",
    },
    ppoImplementation: {
      title: "PPO Algorithm Implementation",
      introduction:
        "I implemented the Proximal Policy Optimization (PPO) algorithm while trying to learn the basics of deep reinforcement learning. Using PyTorch for the neural network backend and Gymnasium for the reinforcement learning environments, I was able to train expert level agents on scenarios with both discrete and continuous action spaces.",
      description:
        "While diving into reinforcement learning, I decided to implement the Proximal Policy Optimization (PPO) algorithm to really understand how these advanced techniques work in practice. PPO is a popular algorithm because it balances performance and stability, making it ideal for my learning journey. I took on the challenge of designing and training reinforcement learning models from scratch, learning to balance exploration with exploitation, fine-tuning hyperparameters, and using neural networks to approximate value functions. I trained my models on Gymnasium environments, which provided a variety of scenarios with both discrete and continuous action spaces. These environments helped me understand the complexities and nuances involved in different types of decision-making processes. Throughout the process, I relied heavily on online resources such as tutorials, forums, and research papers to guide me. These resources provided invaluable insights and examples that helped me overcome obstacles and refine my approach. Experimenting and iterating based on this wealth of information allowed me to find the best solutions and solidify my understanding. This hands-on experience demonstrated my ability to effectively apply complex algorithms to solve real-world problems.Working on PPO significantly enhanced my skills in reinforcement learning and PyTorch, preparing me for more advanced projects.",
      motivation:
        "When I joined my research lab, I had no prior experience with reinforcement learning (RL), but I was eager to expand my skill set and contribute to cutting-edge projects. I was drawn to the potential of RL to solve complex decision-making problems and was motivated by the challenge of mastering a new field. To begin my journey, I chose to focus on PPO since it's a widely used RL algorithm known for its stability and effectiveness.",
      roadblocks:
        "As I started learning reinforcement learning with PPO, I encountered several roadblocks that tested my persistence. One major challenge was learning PyTorch, which, despite being a powerful tool, had a steep learning curve with its tensor operations and dynamic computation graphs. Additionally, figuring out the best practices for structuring and formatting RL code was tricky, as I needed to ensure my projects were organized and my experiments were reproducible. Translating the concepts from research papers into working code was another hurdle; it required me to carefully interpret mathematical formulations and apply them accurately. These roadblocks were challenging, but they also pushed me to deepen my understanding and improve my skills as I navigated the complexities of RL.",
      lessons:
        "Through this journey, I gradually developed several skills that helped me better understand reinforcement learning. I learned how to use PyTorch to build neural networks and work with its dynamic computation graphs, which was essential for creating RL models. Working with Gymnasium environments gave me practical experience in setting up and experimenting with different RL scenarios. I also improved my ability to translate complex concepts from research papers into code, which helped bridge the gap between theory and practice. This process not only enhanced my coding skills but also deepened my understanding of RL algorithms. Additionally, I became more comfortable reading research papers, allowing me to keep up with the latest advancements in the field.",
      extra: { github: "https://github.com/nvan21/PPO-Pytorch-Implementation" },
      skills: ["Python", "PyTorch", "RL", "Gymnasium"],
      thumbnail: "./ppo_thumbnail.png",
    },
    f1tenthSimulation: {
      title: "Autonomous Racing Simulation",
      introduction:
        "I developed a dynamic follow the gap algorithm for autonomous driving using the F1TENTH ROS simulator, a platform designed for testing and experimenting with autonomous vehicle technology on a smaller scale. This project involved implementing and refining various path-planning and obstacle-avoidance techniques to navigate the simulator’s virtual racing environment.",
      description:
        "In my autonomous driving project, I explored two major approaches: SLAM with RRT* and a dynamic Follow the Gap algorithm using LiDAR data. Initially, I aimed to develop a dynamic path-planning algorithm by combining Hector mapping with RRT*. This method involved dynamically partitioning a circular track, handling high-resolution mapping, and addressing issues like dynamic starting nodes due to the vehicle’s movement. Despite its promise, the complexity and computational demands of this approach led me to pivot to a different solution. I then focused on the dynamic Follow the Gap algorithm, which uses LiDAR data to navigate by always steering toward the furthest detected point. This approach was computationally efficient and took advantage of the high update rate of LiDAR to maintain a smooth trajectory. It involved filtering LiDAR data to account for the car’s physical dimensions and potential obstacles, ensuring the car could navigate safely and effectively. Despite initial concerns about trajectory smoothness, this method proved surprisingly effective and highlighted the balance between simplicity and performance in autonomous systems. Through this project, I deepened my understanding of the challenges and intricacies of path planning and sensor data interpretation in robotics.",
      motivation:
        "For our final class project, we were told to create an algorithm for autonomous driving using the F1TENTH ROS simulator. The whole idea was to get a feel for how self-driving cars work by actually diving into the technology. I was really excited because it meant I could learn about Robot Operating System (ROS) which is the operating system used for controlling these vehicles. Working with the simulator was a great way to try out different driving strategies and understand the challenges involved in making cars drive themselves.",
      roadblocks:
        "Working on the autonomous driving project came with its fair share of challenges. I had to learn Linux and ROS from scratch, which was a bit overwhelming at first since they’re quite different from what I was used to. Handling the noisy lidar data was another big hurdle, as it required filtering and processing to make it usable for navigation. On top of that, I had to dive into different self-driving algorithms like SLAM (Simultaneous Localization and Mapping), RRT* (Rapidly-exploring Random Tree), and Follow the Gap. Despite these roadblocks, tackling these issues head-on was a great learning experience.",
      lessons:
        "I learned a lot from working on this autonomous driving project. Technically, it taught me how different parts of robotic systems connect and communicate, which was really eye-opening. Parsing lidar data was a big part of the process, and I got a good handle on cleaning up and using that data for navigation. I also got to explore how various autonomous driving algorithms work, like SLAM for mapping and RRT* for path planning. Understanding these concepts and seeing how they fit together in a real system was a huge part of what made this project so rewarding.",
      extra: { github: "https://github.com/nvan21/F1Tenth-Autonomous-Racing" },
      skills: ["Python", "ROS", "F1Tenth"],
      thumbnail: "./f1tenth_thumbnail.png",
    },
    portfolioWebsite: {
      title: "React Portfolio Website",
      introduction:
        "I wanted a place where I had more control over how I presented myself, so I learned how to implement popular frameworks like React, Tailwind, and GSAP to create an interactive, animated website. It gives me a place to explain what my projects are, why I did them, and what I learned from them.",
      description:
        "Creating a portfolio website was an important step for me to showcase my work and skills in a way that I could fully control and personalize. I wanted a platform where I could effectively present myself and my projects, allowing potential employers or collaborators to see not just what I’ve learned, but how I apply that knowledge in real-world scenarios. By developing my own website, I aimed to stand out from others who might only list their skills on a resume. It was essential for me to demonstrate my capabilities and creativity through a tangible example of my work. For the development of the site, I chose to use React for its powerful component-based architecture, which made it easy to build a dynamic and responsive user interface. I paired React with Tailwind CSS to style the site, taking advantage of its utility-first approach to create a clean and modern design. To enhance the visual appeal and interactivity of the site, I integrated GSAP for animations, bringing my projects and skills to life with smooth transitions and engaging effects. This combination of tools allowed me to build a portfolio that not only highlights my technical abilities but also reflects my personal style and attention to detail. Overall, creating a portfolio website was a way for me to take control of my personal brand, showcasing my dedication to applying what I’ve learned in meaningful and impactful ways.",
      motivation:
        "As previously mentioned, my motivation for this project was to give myself a place to present my work in a visually appealing, widely accessible way. I've always been interested in user interaction, so it was also an excuse to teach myself new skills commonly used for UX.",
      roadblocks:
        "Before starting this website, I had zero experience with JavaScript, CSS, or HTML, and did not know how they interacted to form a website. Luckily, the internet is chalked full of useful graphics, tutorials, and examples that helped guide me through the learning process. After watching a few videos that explained the basics of the dynamics between these three languages and following a few tutorials on the development frameworks React, Tailwind, and GSAP, I decided to start implementing my knowledge to create this website. There were struggles as I learned how to interface between the different frameworks, but I was able to overcome them by reading through the documentation and searching through online forums for answers.",
      lessons:
        "While not the most technically challenging, this project reminded me of the importance of starting. I often struggle with scope creep, and it causes me to give up on a project during the brainstorming phase because I get overwhelmed by everything I want to do. Understanding that the first version is not the last and that you can always revise is an important concept in engineering that this project reminded me of.",
      extra: { github: "https://github.com/nvan21/personal-portfolio-v2" },
      skills: ["JavaScript", "React", "CSS"],
      thumbnail: "./portfolio_website.png",
    },
    gravityGenerator: {
      title: "Gravity Powered Generator",
      introduction:
        "In a class project, we created a gravity-powered generator to provide sustainable lighting for developing countries. This device uses gravity to power reading lights, offering a reliable solution for areas with limited electricity access.",
      description:
        "For a semester-long class project, our team set out to tackle energy access issues in developing regions. We focused on South Sudan, where only a small fraction of the population has electricity. Our goal was to design a sustainable product that could be built using local materials and support the local economy by being manufactured and serviced by local artisans. We created a gravity-powered generator that provides low-cost power for reading lights, benefiting people without electricity and supporting local entrepreneurs. The generator design includes a drivetrain to convert potential energy into rotational energy, a winch to lift the weight, and a sturdy plywood frame to handle stress. We optimized the design for brightness by maximizing rotational velocity. After prototyping, we improved the design by addressing gear slipping with skateboard tape, which increased friction but slightly reduced the duration the light stays on. We plan to enhance this with sprockets and chains in the future. The project was a great learning experience in combining engineering, sustainability, and social impact, and while we met most of our goals, we learned valuable lessons about balancing cost and functionality. Overall, this project was about creating an innovative solution that makes a real difference in people’s lives.",
      motivation:
        "The gravity-powered generator project was a class assignment, but it really clicked with my personal goals. I wanted to dive into real-world design processes and get better at project management. This project was a chance to take an idea from start to finish, tackling challenges that people in developing regions face. I was motivated to learn how to go from brainstorming to prototyping to testing, all while working with a team to hit deadlines and meet our goals. It was a great way to combine my technical skills with a desire to create something that could make a difference, and it helped me see how I can use engineering to solve real problems.",
      roadblocks:
        "One of the biggest roadblocks was collaborating effectively as a team. We had to navigate different ideas and perspectives to reach a consensus on the design. Technical difficulties also played a big role, as our original designs didn’t always work as intended. We had to go back to the drawing board several times to troubleshoot and refine our approach, which taught us a lot about perseverance and problem-solving. Thoroughly documenting our process was another challenge but ultimately essential. Keeping detailed records of our trials, errors, and eventual solutions helped us track progress and make informed decisions. It also ensured that we learned from our mistakes and could share our insights with others. These challenges tested our skills and teamwork, but they were crucial in helping us develop a functional and impactful product.",
      lessons:
        "The gravity-powered generator project taught me several valuable lessons. Working closely with my team, I learned the importance of communication and collaboration, as we had to blend our ideas and skills to overcome challenges. Facing technical difficulties, such as initial designs not working as expected, taught me the importance of resilience and creativity in problem-solving. We learned that trial and error is a crucial part of the engineering process, and each setback provided an opportunity to refine our approach and improve the design. Documenting our process thoroughly highlighted the importance of keeping detailed records, which not only helped us track our progress but also ensured that our insights and solutions could be shared with others. Overall, this project reinforced the value of teamwork, adaptability, and meticulous documentation in bringing a complex idea to life.",
      extra: { github: "" },
      skills: ["Solidworks", "Project Management", "Six Sigma Design"],
      thumbnail: "./gravity_generator_thumbnail.png",
    },
  },
  hu = { workPage: Pw, projectPage: Cw };
pe.registerPlugin(ct);
pe.registerPlugin(G);
const Ew = (t) => {
    const e = t.title,
      n = t.company,
      r = t.experiences,
      i = t.skills,
      o = t.date,
      l = t.left,
      s = fe.useRef(null),
      a = fe.useRef(null),
      u = fe.useRef(null),
      c = fe.useRef(null);
    return (
      ct(() => {
        const f = s.current,
          d = a.current,
          h = u.current;
        c.current,
          pe.fromTo(
            f,
            { x: "-70%", opacity: 0 },
            {
              x: "0%",
              opacity: 1,
              duration: 0.75,
              ease: "power4.out",
              scrollTrigger: {
                start: "top 80%",
                end: "bottom 20%",
                trigger: d,
                toggleActions: "play reverse play reverse",
              },
            }
          ),
          pe.fromTo(
            d,
            { x: "70%", opacity: 0 },
            {
              x: "0%",
              opacity: 1,
              duration: 0.75,
              ease: "power4.out",
              scrollTrigger: {
                start: "top 80%",
                end: "bottom 20%",
                trigger: d,
                toggleActions: "play reverse play reverse",
              },
            }
          ),
          pe.fromTo(
            h,
            { opacity: 0, rotation: 0 },
            {
              opacity: 1,
              duration: 0.75,
              rotation: 360,
              ease: "power4.out",
              scrollTrigger: {
                start: "top 80%",
                end: "bottom 20%",
                trigger: d,
                toggleActions: "play reverse play reverse",
              },
            }
          );
      }),
      S.jsx("div", {
        className: "w-full",
        children: l
          ? S.jsxs("div", {
              className: "flex flex-row gap-5 w-full overflow-hidden",
              ref: c,
              children: [
                S.jsx("div", {
                  className: "hidden sm:block sm:w-[45%]",
                  children: S.jsx("div", {
                    className: "flex min-h-80 items-center justify-center",
                    children: S.jsxs("div", {
                      className:
                        "items-start bg-secondary rounded-lg border-primary_text border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]",
                      ref: s,
                      children: [
                        S.jsx("h2", {
                          className:
                            "text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-tertiary",
                          children: n,
                        }),
                        S.jsx("p", {
                          className:
                            "text-primary_text text-base md:text-xl sm:text-l font-medium font-main italic",
                          children: e,
                        }),
                        S.jsx("ul", {
                          className: "list-disc pl-4",
                          children: r.map((f, d) =>
                            S.jsx(
                              "li",
                              {
                                className:
                                  "text-primary_text text-base md:text-xl sm:text-l font-medium font-main p-1",
                                children: f,
                              },
                              d
                            )
                          ),
                        }),
                        S.jsx("div", {
                          className: "flex gap-3",
                          children: i.map((f, d) =>
                            S.jsxs(
                              "span",
                              {
                                className:
                                  "text-secondary_text text-base md:text-xl sm:text-l font-medium font-main",
                                children: ["#", f],
                              },
                              d
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
                S.jsxs("div", {
                  className: "flex flex-col w-[10%] items-center",
                  children: [
                    S.jsx("div", { className: "w-1.5 h-[50%] bg-tertiary" }),
                    S.jsx("div", {
                      className:
                        "h-[40px] md:h-[50px] aspect-square rounded-full bg-tertiary flex items-center justify-center",
                      children: S.jsx("div", {
                        ref: u,
                        children: S.jsx($f, {
                          className: "text-2xl md:text-3xl text-secondary",
                        }),
                      }),
                    }),
                    S.jsx("div", { className: "w-1.5 h-[50%] bg-tertiary" }),
                  ],
                }),
                S.jsxs("div", {
                  className: "w-[70%] sm:w-[45%]",
                  ref: a,
                  children: [
                    S.jsx("div", {
                      className:
                        "sm:hidden flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center",
                      children: S.jsxs("div", {
                        className:
                          "items-start bg-secondary rounded-lg border-primary_text border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]",
                        children: [
                          S.jsx("h2", {
                            className:
                              "text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-tertiary",
                            children: n,
                          }),
                          S.jsx("p", {
                            className:
                              "text-primary_text text-base md:text-xl sm:text-l font-medium font-main italic",
                            children: e,
                          }),
                          S.jsx("ul", {
                            className: "list-disc pl-4",
                            children: r.map((f, d) =>
                              S.jsx(
                                "li",
                                {
                                  className:
                                    "text-primary_text text-base md:text-xl sm:text-l font-medium font-main p-1",
                                  children: f,
                                },
                                d
                              )
                            ),
                          }),
                          S.jsx("p", {
                            className: "text-primary_text text-xl font-medium",
                            children: o,
                          }),
                          S.jsx("div", {
                            className: "flex gap-3",
                            children: i.map((f, d) =>
                              S.jsxs(
                                "span",
                                {
                                  className:
                                    "text-secondary_text text-base md:text-xl sm:text-l font-medium font-main",
                                  children: ["#", f],
                                },
                                d
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    S.jsx("div", {
                      className:
                        "hidden sm:flex flex-col h-full gap-2 justify-center items-start",
                      children: S.jsx("p", {
                        className: "text-primary_text text-xl font-medium",
                        children: o,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : S.jsxs("div", {
              className: "flex flex-row gap-5 w-full overflow-hidden",
              ref: c,
              children: [
                S.jsx("div", {
                  className:
                    "hidden w-0 sm:flex sm:w-[45%] sm:flex-col sm:min-h-80 sm:gap-2 sm:justify-center sm:items-end",
                  ref: s,
                  children: S.jsx("p", {
                    className: "text-primary_text text-xl font-medium",
                    children: o,
                  }),
                }),
                S.jsxs("div", {
                  className: "flex flex-col w-[10%] items-center",
                  children: [
                    S.jsx("div", { className: "w-1.5 h-[50%] bg-tertiary" }),
                    S.jsx("div", {
                      className:
                        "h-[40px] md:h-[50px] aspect-square rounded-full bg-tertiary flex items-center justify-center ",
                      children: S.jsx("div", {
                        ref: u,
                        children: S.jsx($f, {
                          className: "text-2xl md:text-3xl text-secondary",
                        }),
                      }),
                    }),
                    S.jsx("div", { className: "w-1.5 h-[50%] bg-tertiary" }),
                  ],
                }),
                S.jsx("div", {
                  className: "w-[70%] sm:w-[45%]",
                  children: S.jsx("div", {
                    className:
                      "flex flex-col min-h-80 gap-2 justify-center items-start sm:items-center",
                    ref: a,
                    children: S.jsxs("div", {
                      className:
                        "items-start bg-secondary rounded-lg border-primary_text border-b-2 p-5 flex flex-col gap-3 shadow-xl w-[90%]",
                      children: [
                        S.jsx("h2", {
                          className:
                            "text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-tertiary",
                          children: n,
                        }),
                        S.jsx("p", {
                          className:
                            "text-primary_text text-base md:text-xl sm:text-l font-medium font-main italic",
                          children: e,
                        }),
                        S.jsx("ul", {
                          className: "list-disc pl-4",
                          children: r.map((f, d) =>
                            S.jsx(
                              "li",
                              {
                                className:
                                  "text-primary_text text-base md:text-xl sm:text-l font-medium font-main p-1",
                                children: f,
                              },
                              d
                            )
                          ),
                        }),
                        S.jsx("p", {
                          className:
                            "block sm:hidden text-primary_text text-xl font-medium",
                          children: o,
                        }),
                        S.jsx("div", {
                          className: "flex gap-3",
                          children: i.map((f, d) =>
                            S.jsxs(
                              "span",
                              {
                                className:
                                  "text-secondary_text text-base md:text-xl sm:text-l font-medium font-main",
                                children: ["#", f],
                              },
                              d
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
      })
    );
  },
  Ow = () => {
    let t = !0;
    return S.jsxs("section", {
      className:
        "px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal",
      id: "work",
      children: [
        S.jsxs("div", {
          className: "flex flex-col gap-1 mt-2",
          children: [
            S.jsx("p", {
              className:
                "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main",
              children: "Work experience",
            }),
            S.jsx("h1", {
              className:
                "text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary mt-2",
              children: "Professional Experiences.",
            }),
          ],
        }),
        S.jsx("div", {
          className: "flex flex-col mt-12 w-max-7xl items-center",
          children: Object.keys(hu.workPage).map((e, n) => {
            const r = hu.workPage[e],
              i = S.jsx(
                Ew,
                {
                  title: r.title,
                  company: r.company,
                  experiences: r.experiences,
                  date: r.date,
                  skills: r.skills,
                  left: t,
                },
                n
              );
            return (t = !t), i;
          }),
        }),
      ],
    });
  };
pe.registerPlugin(ct);
const Nw = (t) => {
  const e = t.title,
    n = t.thumbnail,
    r = t.skills,
    i = t.introduction,
    o = t.description,
    l = t.motivation,
    s = t.lessons,
    a = t.roadblocks,
    u = t.extra,
    [c, f] = fe.useState(!1);
  fe.useEffect(() => {
    c
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [c]);
  const d = (h) => {
    window.open(h, "_blank");
  };
  return S.jsx("div", {
    className: `${c ? "overflow-hidden" : ""}`,
    children: c
      ? S.jsx("div", {
          className:
            "fixed inset-0 z-10 flex items-center justify-center backdrop-blur-lg",
          children: S.jsxs("div", {
            className:
              "w-5/6 h-2/3 relative overflow-auto flex flex-col xl:flex-row rounded-lg bg-secondary",
            children: [
              S.jsx("div", {
                className:
                  "flex xl:hidden justify-end items-end sticky top-0 p-2",
                children: S.jsx("button", {
                  className: "hover:scale-110 transition-all duration-500",
                  onClick: () => f(!c),
                  children: S.jsx(vf, {
                    className: "text-3xl text-black xl:text-secondary",
                  }),
                }),
              }),
              S.jsxs("div", {
                className:
                  "flex flex-col w-full xl:w-2/5 h-fill gap-5 p-10 xl:p-7 justify-center xl:sticky xl:overflow-hidden",
                children: [
                  S.jsx("h2", {
                    className:
                      "text-3xl md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary flex flex-wrap",
                    children: e,
                  }),
                  S.jsx("img", { src: n, className: "rounded-lg" }),
                  S.jsx("div", {
                    className: "flex gap-3 flex-wrap",
                    children: r.map((h, y) =>
                      S.jsxs(
                        "span",
                        {
                          className:
                            "text-secondary_text text-base md:text-2xl sm:text-xl font-medium font-main",
                          children: ["#", h],
                        },
                        y
                      )
                    ),
                  }),
                ],
              }),
              S.jsxs("div", {
                className:
                  "flex flex-row w-full h-max xl:h-full xl:w-3/5 bg-primary_text p-10 xl:p-7 xl:overflow-auto",
                children: [
                  S.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      S.jsx("h1", {
                        className:
                          "font-main text-secondary font-bold text-3xl mt-3",
                        children: "Project Description",
                      }),
                      S.jsx("p", {
                        className: "font-main text-lg font-light text-metal",
                        children: o,
                      }),
                      S.jsx("h1", {
                        className:
                          "font-main text-secondary font-bold text-3xl mt-3",
                        children: "Motivation",
                      }),
                      S.jsx("p", {
                        className: "font-main text-lg font-light text-metal",
                        children: l,
                      }),
                      S.jsx("h1", {
                        className:
                          "font-main text-secondary font-bold text-3xl mt-3",
                        children: "Roadblocks",
                      }),
                      S.jsx("p", {
                        className: "font-main text-lg font-light text-metal",
                        children: a,
                      }),
                      S.jsx("h1", {
                        className:
                          "font-main text-secondary font-bold text-3xl mt-3",
                        children: "What I Learned",
                      }),
                      S.jsx("p", {
                        className: "font-main text-lg font-light text-metal",
                        children: s,
                      }),
                      S.jsx("h1", {
                        className:
                          "font-main text-secondary font-bold text-3xl mt-3",
                        children: "Extra Information",
                      }),
                      S.jsx("div", {
                        className: "flex flex-row gap-4 pb-2",
                        children:
                          u.github &&
                          S.jsx("button", {
                            onClick: () => d(u.github),
                            children: S.jsx(X1, {
                              className:
                                "text-5xl text-tertiary hover:scale-110 duration-500 transition-all",
                            }),
                          }),
                      }),
                    ],
                  }),
                  S.jsx("div", {
                    className:
                      "hidden xl:flex h-fill justify-end items-start sticky top-0",
                    children: S.jsx("button", {
                      className: "hover:scale-110 transition-all duration-500",
                      onClick: () => f(!c),
                      children: S.jsx(vf, { className: "text-3xl text-black" }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        })
      : S.jsxs("button", {
          className:
            "w-full h-full sm:max-w-[350px] bg-secondary rounded-lg shadow-xl border-primary_text border-b-2 p-5 hover-default flex flex-col gap-5 text-left",
          onClick: () => f(!c),
          children: [
            S.jsx("h2", {
              className:
                "text-xl md:text-3xl sm:text-2xl font-extrabold font-main text-tertiary",
              children: e,
            }),
            S.jsx("img", { src: n, className: "rounded-lg" }),
            S.jsx("p", {
              className:
                "text-primary_text text-base md:text-xl sm:text-l font-medium font-main",
              children: i,
            }),
            S.jsx("div", {
              className: "flex flex-wrap gap-x-3",
              children: r.map((h, y) =>
                S.jsxs(
                  "span",
                  {
                    className:
                      "text-secondary_text text-base md:text-xl sm:text-l font-medium font-main",
                    children: ["#", h],
                  },
                  y
                )
              ),
            }),
          ],
        }),
  });
};
pe.registerPlugin(ct);
pe.registerPlugin(G);
const jw = () => {
  const t = fe.useRef(null),
    e = fe.useRef(null);
  return (
    ct(
      () => {
        const n = t.current;
        pe.fromTo(
          n,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: n,
              toggleActions: "play none none reset",
            },
          }
        );
      },
      { scope: t }
    ),
    ct(
      () => {
        const n = e.current;
        pe.fromTo(
          n,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: n,
              toggleActions: "play none none reset",
            },
          }
        );
      },
      { scope: e }
    ),
    S.jsx("section", {
      className:
        "px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal",
      id: "projects",
      children: S.jsxs("div", {
        className: "flex flex-col gap-1",
        children: [
          S.jsxs("div", {
            ref: t,
            children: [
              S.jsx("p", {
                className:
                  "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main",
                children: "My projects",
              }),
              S.jsx("h1", {
                className:
                  "text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary mt-2",
                children: "Personal Projects.",
              }),
              S.jsx("p", {
                className:
                  "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main mt-2",
                children:
                  "The following is a showcase of my personal projects. Clicking on a card will show more information about the project with links to code/documents at the bottom of each card.",
              }),
            ],
          }),
          S.jsx("div", {
            className: "flex flex-wrap mt-12 gap-9",
            ref: e,
            children: Object.keys(hu.projectPage).map((n, r) => {
              const i = hu.projectPage[n];
              return S.jsx(
                Nw,
                {
                  title: i.title,
                  thumbnail: i.thumbnail,
                  introduction: i.introduction,
                  description: i.description,
                  motivation: i.motivation,
                  lessons: i.lessons,
                  roadblocks: i.roadblocks,
                  extra: i.extra,
                  skills: i.skills,
                },
                r
              );
            }),
          }),
        ],
      }),
    })
  );
};
class Es {
  constructor(e = 0, n = "Network Error") {
    (this.status = e), (this.text = n);
  }
}
const Rw = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (t) => Promise.resolve(localStorage.getItem(t)),
        set: (t, e) => Promise.resolve(localStorage.setItem(t, e)),
        remove: (t) => Promise.resolve(localStorage.removeItem(t)),
      };
  },
  st = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: Rw(),
  },
  ah = (t) =>
    t
      ? typeof t == "string"
        ? { publicKey: t }
        : t.toString() === "[object Object]"
        ? t
        : {}
      : {},
  Mw = (t, e = "https://api.emailjs.com") => {
    if (!t) return;
    const n = ah(t);
    (st.publicKey = n.publicKey),
      (st.blockHeadless = n.blockHeadless),
      (st.storageProvider = n.storageProvider),
      (st.blockList = n.blockList),
      (st.limitRate = n.limitRate),
      (st.origin = n.origin || e);
  },
  G1 = async (t, e, n = {}) => {
    const r = await fetch(st.origin + t, {
        method: "POST",
        headers: n,
        body: e,
      }),
      i = await r.text(),
      o = new Es(r.status, i);
    if (r.ok) return o;
    throw o;
  },
  Q1 = (t, e, n) => {
    if (!t || typeof t != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!e || typeof e != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  zw = (t) => {
    if (t && t.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  K1 = (t) => t.webdriver || !t.languages || t.languages.length === 0,
  q1 = () => new Es(451, "Unavailable For Headless Browser"),
  Dw = (t, e) => {
    if (!Array.isArray(t)) throw "The BlockList list has to be an array";
    if (typeof e != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  Lw = (t) => {
    var e;
    return !((e = t.list) != null && e.length) || !t.watchVariable;
  },
  Iw = (t, e) => (t instanceof FormData ? t.get(e) : t[e]),
  Z1 = (t, e) => {
    if (Lw(t)) return !1;
    Dw(t.list, t.watchVariable);
    const n = Iw(e, t.watchVariable);
    return typeof n != "string" ? !1 : t.list.includes(n);
  },
  J1 = () => new Es(403, "Forbidden"),
  bw = (t, e) => {
    if (typeof t != "number" || t < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (e && typeof e != "string") throw "The LimitRate ID has to be a string";
  },
  Aw = async (t, e, n) => {
    const r = Number((await n.get(t)) || 0);
    return e - Date.now() + r;
  },
  ev = async (t, e, n) => {
    if (!e.throttle || !n) return !1;
    bw(e.throttle, e.id);
    const r = e.id || t;
    return (await Aw(r, e.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  tv = () => new Es(429, "Too Many Requests"),
  Fw = async (t, e, n, r) => {
    const i = ah(r),
      o = i.publicKey || st.publicKey,
      l = i.blockHeadless || st.blockHeadless,
      s = st.storageProvider || i.storageProvider,
      a = { ...st.blockList, ...i.blockList },
      u = { ...st.limitRate, ...i.limitRate };
    return l && K1(navigator)
      ? Promise.reject(q1())
      : (Q1(o, t, e),
        zw(n),
        n && Z1(a, n)
          ? Promise.reject(J1())
          : (await ev(location.pathname, u, s))
          ? Promise.reject(tv())
          : G1(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.3.3",
                user_id: o,
                service_id: t,
                template_id: e,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  Bw = (t) => {
    if (!t || t.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  Uw = (t) => (typeof t == "string" ? document.querySelector(t) : t),
  Vw = async (t, e, n, r) => {
    const i = ah(r),
      o = i.publicKey || st.publicKey,
      l = i.blockHeadless || st.blockHeadless,
      s = st.storageProvider || i.storageProvider,
      a = { ...st.blockList, ...i.blockList },
      u = { ...st.limitRate, ...i.limitRate };
    if (l && K1(navigator)) return Promise.reject(q1());
    const c = Uw(n);
    Q1(o, t, e), Bw(c);
    const f = new FormData(c);
    return Z1(a, f)
      ? Promise.reject(J1())
      : (await ev(location.pathname, u, s))
      ? Promise.reject(tv())
      : (f.append("lib_version", "4.3.3"),
        f.append("service_id", t),
        f.append("template_id", e),
        f.append("user_id", o),
        G1("/api/v1.0/email/send-form", f));
  },
  $w = { init: Mw, send: Fw, sendForm: Vw, EmailJSResponseStatus: Es },
  Ww = () => {
    const [t, e] = fe.useState(""),
      [n, r] = fe.useState(""),
      [i, o] = fe.useState(""),
      l = (s) => {
        s.preventDefault();
        const a = "service_eq9myv4",
          u = "template_29qovrd",
          c = "4VyN11h5DLqWeE6wm",
          f = {
            from_name: t,
            from_email: n,
            to_name: "Nathan Van Utrecht",
            message: i,
          };
        $w.send(a, u, f, c)
          .then((d) => {
            console.log("Email sent successfully!", d), e(""), r(""), o("");
          })
          .catch((d) => {
            console.error("Error sending email: ", d);
          });
      };
    return S.jsxs("form", {
      onSubmit: l,
      className:
        "flex flex-col gap-3 w-full md:w-1/2 bg-secondary p-5 rounded-lg mt-12",
      children: [
        S.jsx("h1", {
          className: "text-3xl text-tertiary font-bold",
          children: "Name",
        }),
        S.jsx("input", {
          className:
            "rounded-lg px-3 bg-primary_text text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl",
          type: "text",
          id: "name",
          autoComplete: "name",
          placeholder: "Your Name",
          value: t,
          onChange: (s) => e(s.target.value),
        }),
        S.jsx("h1", {
          className: "text-3xl text-tertiary font-bold mt-3",
          children: "Email",
        }),
        S.jsx("input", {
          className:
            "rounded-lg px-3 bg-primary_text text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl",
          type: "email",
          id: "email",
          autoComplete: "email",
          placeholder: "Your Email",
          value: n,
          onChange: (s) => r(s.target.value),
        }),
        S.jsx("h1", {
          className: "text-3xl text-tertiary font-bold",
          children: "Message",
        }),
        S.jsx("textarea", {
          className:
            "rounded-lg px-3 bg-primary_text text-metal w-full font-medium placeholder-metal placeholder:italic placeholder:font-normal shadow-xl",
          cols: "30",
          rows: "10",
          id: "message",
          value: i,
          placeholder: "Your Message",
          onChange: (s) => o(s.target.value),
        }),
        S.jsx("button", {
          className:
            "bg-tertiary w-1/2 mx-auto rounded-lg text-primary_text font-bold text-xl p-2 shadow-xl mt-3",
          type: "submit",
          children: "Send Email",
        }),
      ],
    });
  };
pe.registerPlugin(ct);
pe.registerPlugin(G);
const Hw = () => {
  const t = fe.useRef(null),
    e = fe.useRef(null);
  return (
    ct(
      () => {
        const n = t.current;
        pe.fromTo(
          n,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: n,
              toggleActions: "play none none reset",
            },
          }
        );
      },
      { scope: t }
    ),
    ct(
      () => {
        const n = e.current;
        pe.fromTo(
          n,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: n,
              toggleActions: "play none none reset",
            },
          }
        );
      },
      { scope: e }
    ),
    S.jsx("section", {
      className:
        "px-6 py-10 sm:px-16 sm:py-16 max-w-7xl mx-auto relative z=0 bg-metal",
      id: "contact",
      children: S.jsxs("div", {
        className: "flex flex-col gap-1",
        children: [
          S.jsxs("div", {
            ref: t,
            children: [
              S.jsx("p", {
                className:
                  "text-primary_text text-l md:text-2xl sm:text-xl font-medium font-main",
                children: "Contact me",
              }),
              S.jsx("h1", {
                className:
                  "text-3xl lg:text-[3.5rem] md:text-5xl sm:text-4xl font-extrabold font-main text-tertiary mt-2",
                children: "My Contact Information.",
              }),
            ],
          }),
          S.jsxs("div", {
            className: "flex flex-col md:flex-row gap-5",
            ref: e,
            children: [
              S.jsx(Ww, {}),
              S.jsx("div", {
                className:
                  "flex w-3/5 md:w-2/5 mx-auto items-center justify-center",
                children: S.jsx("img", {
                  src: "./astronaut.png",
                  alt: "Cartoon astronaut waving on a rocket.",
                  title: "Image by catalyst stuff on Freepik",
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
};
function Yw() {
  return S.jsxs("div", {
    className: "relative z-0 bg-metal",
    children: [
      S.jsx(A_, {}),
      S.jsx(ww, {}),
      S.jsx(Tw, {}),
      S.jsx(Ow, {}),
      S.jsx(jw, {}),
      S.jsx(Hw, {}),
    ],
  });
}
Sc.createRoot(document.getElementById("root")).render(
  S.jsx(Gr.StrictMode, { children: S.jsx(Yw, {}) })
);
