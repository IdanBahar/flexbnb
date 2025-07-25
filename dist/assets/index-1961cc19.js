function Nm(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const s of o.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && r(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function Lf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Af = { exports: {} },
  ko = {},
  jf = { exports: {} },
  D = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jr = Symbol.for('react.element'),
  Pm = Symbol.for('react.portal'),
  Lm = Symbol.for('react.fragment'),
  Am = Symbol.for('react.strict_mode'),
  jm = Symbol.for('react.profiler'),
  Um = Symbol.for('react.provider'),
  Dm = Symbol.for('react.context'),
  Im = Symbol.for('react.forward_ref'),
  Mm = Symbol.for('react.suspense'),
  $m = Symbol.for('react.memo'),
  Bm = Symbol.for('react.lazy'),
  Da = Symbol.iterator
function Fm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Da && e[Da]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Uf = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Df = Object.assign,
  If = {}
function Qn(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = If),
    (this.updater = n || Uf)
}
Qn.prototype.isReactComponent = {}
Qn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Mf() {}
Mf.prototype = Qn.prototype
function pu(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = If),
    (this.updater = n || Uf)
}
var hu = (pu.prototype = new Mf())
hu.constructor = pu
Df(hu, Qn.prototype)
hu.isPureReactComponent = !0
var Ia = Array.isArray,
  $f = Object.prototype.hasOwnProperty,
  mu = { current: null },
  Bf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ff(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      $f.call(t, r) && !Bf.hasOwnProperty(r) && (i[r] = t[r])
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2]
    i.children = u
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r])
  return { $$typeof: Jr, type: e, key: o, ref: s, props: i, _owner: mu.current }
}
function zm(e, t) {
  return {
    $$typeof: Jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function yu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Jr
}
function Vm(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ma = /\/+/g
function xs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Vm('' + e.key)
    : t.toString(36)
}
function Ti(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case Jr:
          case Pm:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === '' ? '.' + xs(s, 0) : r),
      Ia(i)
        ? ((n = ''),
          e != null && (n = e.replace(Ma, '$&/') + '/'),
          Ti(i, t, n, '', function (a) {
            return a
          }))
        : i != null &&
          (yu(i) &&
            (i = zm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ''
                  : ('' + i.key).replace(Ma, '$&/') + '/') +
                e
            )),
          t.push(i)),
      1
    )
  if (((s = 0), (r = r === '' ? '.' : r + ':'), Ia(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l]
      var u = r + xs(o, l)
      s += Ti(o, t, n, u, i)
    }
  else if (((u = Fm(e)), typeof u == 'function'))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + xs(o, l++)), (s += Ti(o, t, n, u, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return s
}
function oi(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Ti(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function bm(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Ce = { current: null },
  Oi = { transition: null },
  Wm = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: Oi,
    ReactCurrentOwner: mu,
  }
function zf() {
  throw Error('act(...) is not supported in production builds of React.')
}
D.Children = {
  map: oi,
  forEach: function (e, t, n) {
    oi(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      oi(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      oi(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!yu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      )
    return e
  },
}
D.Component = Qn
D.Fragment = Lm
D.Profiler = jm
D.PureComponent = pu
D.StrictMode = Am
D.Suspense = Mm
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wm
D.act = zf
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    )
  var r = Df({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = mu.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps
    for (u in t)
      $f.call(t, u) &&
        !Bf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u])
  }
  var u = arguments.length - 2
  if (u === 1) r.children = n
  else if (1 < u) {
    l = Array(u)
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2]
    r.children = l
  }
  return { $$typeof: Jr, type: e.type, key: i, ref: o, props: r, _owner: s }
}
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Dm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Um, _context: e }),
    (e.Consumer = e)
  )
}
D.createElement = Ff
D.createFactory = function (e) {
  var t = Ff.bind(null, e)
  return (t.type = e), t
}
D.createRef = function () {
  return { current: null }
}
D.forwardRef = function (e) {
  return { $$typeof: Im, render: e }
}
D.isValidElement = yu
D.lazy = function (e) {
  return { $$typeof: Bm, _payload: { _status: -1, _result: e }, _init: bm }
}
D.memo = function (e, t) {
  return { $$typeof: $m, type: e, compare: t === void 0 ? null : t }
}
D.startTransition = function (e) {
  var t = Oi.transition
  Oi.transition = {}
  try {
    e()
  } finally {
    Oi.transition = t
  }
}
D.unstable_act = zf
D.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t)
}
D.useContext = function (e) {
  return Ce.current.useContext(e)
}
D.useDebugValue = function () {}
D.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e)
}
D.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t)
}
D.useId = function () {
  return Ce.current.useId()
}
D.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n)
}
D.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t)
}
D.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t)
}
D.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t)
}
D.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n)
}
D.useRef = function (e) {
  return Ce.current.useRef(e)
}
D.useState = function (e) {
  return Ce.current.useState(e)
}
D.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n)
}
D.useTransition = function () {
  return Ce.current.useTransition()
}
D.version = '18.3.1'
jf.exports = D
var x = jf.exports
const Hm = Lf(x),
  qm = Nm({ __proto__: null, default: Hm }, [x])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Km = x,
  Qm = Symbol.for('react.element'),
  Jm = Symbol.for('react.fragment'),
  Gm = Object.prototype.hasOwnProperty,
  Ym = Km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Xm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Vf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (r in t) Gm.call(t, r) && !Xm.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: Qm, type: e, key: o, ref: s, props: i, _owner: Ym.current }
}
ko.Fragment = Jm
ko.jsx = Vf
ko.jsxs = Vf
Af.exports = ko
var p = Af.exports,
  rl = {},
  bf = { exports: {} },
  Ie = {},
  Wf = { exports: {} },
  Hf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, A) {
    var U = N.length
    N.push(A)
    e: for (; 0 < U; ) {
      var Y = (U - 1) >>> 1,
        se = N[Y]
      if (0 < i(se, A)) (N[Y] = A), (N[U] = se), (U = Y)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var A = N[0],
      U = N.pop()
    if (U !== A) {
      N[0] = U
      e: for (var Y = 0, se = N.length, ri = se >>> 1; Y < ri; ) {
        var Zt = 2 * (Y + 1) - 1,
          Es = N[Zt],
          en = Zt + 1,
          ii = N[en]
        if (0 > i(Es, U))
          en < se && 0 > i(ii, Es)
            ? ((N[Y] = ii), (N[en] = U), (Y = en))
            : ((N[Y] = Es), (N[Zt] = U), (Y = Zt))
        else if (en < se && 0 > i(ii, U)) (N[Y] = ii), (N[en] = U), (Y = en)
        else break e
      }
    }
    return A
  }
  function i(N, A) {
    var U = N.sortIndex - A.sortIndex
    return U !== 0 ? U : N.id - A.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date,
      l = s.now()
    e.unstable_now = function () {
      return s.now() - l
    }
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    y = 3,
    w = !1,
    g = !1,
    v = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    d = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(N) {
    for (var A = n(a); A !== null; ) {
      if (A.callback === null) r(a)
      else if (A.startTime <= N) r(a), (A.sortIndex = A.expirationTime), t(u, A)
      else break
      A = n(a)
    }
  }
  function E(N) {
    if (((v = !1), m(N), !g))
      if (n(u) !== null) (g = !0), ws(_)
      else {
        var A = n(a)
        A !== null && Ss(E, A.startTime - N)
      }
  }
  function _(N, A) {
    ;(g = !1), v && ((v = !1), h(P), (P = -1)), (w = !0)
    var U = y
    try {
      for (
        m(A), f = n(u);
        f !== null && (!(f.expirationTime > A) || (N && !Le()));

      ) {
        var Y = f.callback
        if (typeof Y == 'function') {
          ;(f.callback = null), (y = f.priorityLevel)
          var se = Y(f.expirationTime <= A)
          ;(A = e.unstable_now()),
            typeof se == 'function' ? (f.callback = se) : f === n(u) && r(u),
            m(A)
        } else r(u)
        f = n(u)
      }
      if (f !== null) var ri = !0
      else {
        var Zt = n(a)
        Zt !== null && Ss(E, Zt.startTime - A), (ri = !1)
      }
      return ri
    } finally {
      ;(f = null), (y = U), (w = !1)
    }
  }
  var R = !1,
    T = null,
    P = -1,
    H = 5,
    j = -1
  function Le() {
    return !(e.unstable_now() - j < H)
  }
  function rr() {
    if (T !== null) {
      var N = e.unstable_now()
      j = N
      var A = !0
      try {
        A = T(!0, N)
      } finally {
        A ? ir() : ((R = !1), (T = null))
      }
    } else R = !1
  }
  var ir
  if (typeof d == 'function')
    ir = function () {
      d(rr)
    }
  else if (typeof MessageChannel < 'u') {
    var Ua = new MessageChannel(),
      Om = Ua.port2
    ;(Ua.port1.onmessage = rr),
      (ir = function () {
        Om.postMessage(null)
      })
  } else
    ir = function () {
      C(rr, 0)
    }
  function ws(N) {
    ;(T = N), R || ((R = !0), ir())
  }
  function Ss(N, A) {
    P = C(function () {
      N(e.unstable_now())
    }, A)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      g || w || ((g = !0), ws(_))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return y
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u)
    }),
    (e.unstable_next = function (N) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var A = 3
          break
        default:
          A = y
      }
      var U = y
      y = A
      try {
        return N()
      } finally {
        y = U
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, A) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var U = y
      y = N
      try {
        return A()
      } finally {
        y = U
      }
    }),
    (e.unstable_scheduleCallback = function (N, A, U) {
      var Y = e.unstable_now()
      switch (
        (typeof U == 'object' && U !== null
          ? ((U = U.delay), (U = typeof U == 'number' && 0 < U ? Y + U : Y))
          : (U = Y),
        N)
      ) {
        case 1:
          var se = -1
          break
        case 2:
          se = 250
          break
        case 5:
          se = 1073741823
          break
        case 4:
          se = 1e4
          break
        default:
          se = 5e3
      }
      return (
        (se = U + se),
        (N = {
          id: c++,
          callback: A,
          priorityLevel: N,
          startTime: U,
          expirationTime: se,
          sortIndex: -1,
        }),
        U > Y
          ? ((N.sortIndex = U),
            t(a, N),
            n(u) === null &&
              N === n(a) &&
              (v ? (h(P), (P = -1)) : (v = !0), Ss(E, U - Y)))
          : ((N.sortIndex = se), t(u, N), g || w || ((g = !0), ws(_))),
        N
      )
    }),
    (e.unstable_shouldYield = Le),
    (e.unstable_wrapCallback = function (N) {
      var A = y
      return function () {
        var U = y
        y = A
        try {
          return N.apply(this, arguments)
        } finally {
          y = U
        }
      }
    })
})(Hf)
Wf.exports = Hf
var Zm = Wf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ey = x,
  De = Zm
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var qf = new Set(),
  Nr = {}
function mn(e, t) {
  $n(e, t), $n(e + 'Capture', t)
}
function $n(e, t) {
  for (Nr[e] = t, e = 0; e < t.length; e++) qf.add(t[e])
}
var St = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  il = Object.prototype.hasOwnProperty,
  ty =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $a = {},
  Ba = {}
function ny(e) {
  return il.call(Ba, e)
    ? !0
    : il.call($a, e)
    ? !1
    : ty.test(e)
    ? (Ba[e] = !0)
    : (($a[e] = !0), !1)
}
function ry(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function iy(e, t, n, r) {
  if (t === null || typeof t > 'u' || ry(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ke(e, t, n, r, i, o, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s)
}
var pe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new ke(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  pe[t] = new ke(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  pe[e] = new ke(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    pe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  pe[e] = new ke(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  pe[e] = new ke(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  pe[e] = new ke(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  pe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var gu = /[\-:]([a-z])/g
function vu(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gu, vu)
    pe[t] = new ke(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gu, vu)
    pe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(gu, vu)
  pe[t] = new ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
pe.xlinkHref = new ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  pe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function wu(e, t, n, r) {
  var i = pe.hasOwnProperty(t) ? pe[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (iy(t, n, i, r) && (n = null),
    r || i === null
      ? ny(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var _t = ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  si = Symbol.for('react.element'),
  wn = Symbol.for('react.portal'),
  Sn = Symbol.for('react.fragment'),
  Su = Symbol.for('react.strict_mode'),
  ol = Symbol.for('react.profiler'),
  Kf = Symbol.for('react.provider'),
  Qf = Symbol.for('react.context'),
  Eu = Symbol.for('react.forward_ref'),
  sl = Symbol.for('react.suspense'),
  ll = Symbol.for('react.suspense_list'),
  xu = Symbol.for('react.memo'),
  Nt = Symbol.for('react.lazy'),
  Jf = Symbol.for('react.offscreen'),
  Fa = Symbol.iterator
function or(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Fa && e[Fa]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var J = Object.assign,
  Cs
function mr(e) {
  if (Cs === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Cs = (t && t[1]) || ''
    }
  return (
    `
` +
    Cs +
    e
  )
}
var ks = !1
function _s(e, t) {
  if (!e || ks) return ''
  ks = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (a) {
          var r = a
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (a) {
          r = a
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (a) {
        r = a
      }
      e()
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                )
              }
            while (1 <= s && 0 <= l)
          break
        }
    }
  } finally {
    ;(ks = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? mr(e) : ''
}
function oy(e) {
  switch (e.tag) {
    case 5:
      return mr(e.type)
    case 16:
      return mr('Lazy')
    case 13:
      return mr('Suspense')
    case 19:
      return mr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = _s(e.type, !1)), e
    case 11:
      return (e = _s(e.type.render, !1)), e
    case 1:
      return (e = _s(e.type, !0)), e
    default:
      return ''
  }
}
function ul(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Sn:
      return 'Fragment'
    case wn:
      return 'Portal'
    case ol:
      return 'Profiler'
    case Su:
      return 'StrictMode'
    case sl:
      return 'Suspense'
    case ll:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Qf:
        return (e.displayName || 'Context') + '.Consumer'
      case Kf:
        return (e._context.displayName || 'Context') + '.Provider'
      case Eu:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case xu:
        return (
          (t = e.displayName || null), t !== null ? t : ul(e.type) || 'Memo'
        )
      case Nt:
        ;(t = e._payload), (e = e._init)
        try {
          return ul(e(t))
        } catch {}
    }
  return null
}
function sy(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return ul(t)
    case 8:
      return t === Su ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function qt(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Gf(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function ly(e) {
  var t = Gf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (s) {
          ;(r = '' + s), o.call(this, s)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (s) {
          r = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function li(e) {
  e._valueTracker || (e._valueTracker = ly(e))
}
function Yf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = Gf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function qi(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function al(e, t) {
  var n = t.checked
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function za(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = qt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function Xf(e, t) {
  ;(t = t.checked), t != null && wu(e, 'checked', t, !1)
}
function cl(e, t) {
  Xf(e, t)
  var n = qt(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? fl(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && fl(e, t.type, qt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function Va(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function fl(e, t, n) {
  ;(t !== 'number' || qi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var yr = Array.isArray
function Ln(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + qt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function dl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91))
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function ba(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92))
      if (yr(n)) {
        if (1 < n.length) throw Error(k(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: qt(n) }
}
function Zf(e, t) {
  var n = qt(t.value),
    r = qt(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Wa(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function ed(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function pl(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? ed(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var ui,
  td = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ui = ui || document.createElement('div'),
          ui.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ui.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function Pr(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Sr = {
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
  uy = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Sr).forEach(function (e) {
  uy.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Sr[t] = Sr[e])
  })
})
function nd(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Sr.hasOwnProperty(e) && Sr[e])
    ? ('' + t).trim()
    : t + 'px'
}
function rd(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = nd(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var ay = J(
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
)
function hl(e, t) {
  if (t) {
    if (ay[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62))
  }
}
function ml(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var yl = null
function Cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var gl = null,
  An = null,
  jn = null
function Ha(e) {
  if ((e = Xr(e))) {
    if (typeof gl != 'function') throw Error(k(280))
    var t = e.stateNode
    t && ((t = No(t)), gl(e.stateNode, e.type, t))
  }
}
function id(e) {
  An ? (jn ? jn.push(e) : (jn = [e])) : (An = e)
}
function od() {
  if (An) {
    var e = An,
      t = jn
    if (((jn = An = null), Ha(e), t)) for (e = 0; e < t.length; e++) Ha(t[e])
  }
}
function sd(e, t) {
  return e(t)
}
function ld() {}
var Rs = !1
function ud(e, t, n) {
  if (Rs) return e(t, n)
  Rs = !0
  try {
    return sd(e, t, n)
  } finally {
    ;(Rs = !1), (An !== null || jn !== null) && (ld(), od())
  }
}
function Lr(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = No(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n))
  return n
}
var vl = !1
if (St)
  try {
    var sr = {}
    Object.defineProperty(sr, 'passive', {
      get: function () {
        vl = !0
      },
    }),
      window.addEventListener('test', sr, sr),
      window.removeEventListener('test', sr, sr)
  } catch {
    vl = !1
  }
function cy(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, a)
  } catch (c) {
    this.onError(c)
  }
}
var Er = !1,
  Ki = null,
  Qi = !1,
  wl = null,
  fy = {
    onError: function (e) {
      ;(Er = !0), (Ki = e)
    },
  }
function dy(e, t, n, r, i, o, s, l, u) {
  ;(Er = !1), (Ki = null), cy.apply(fy, arguments)
}
function py(e, t, n, r, i, o, s, l, u) {
  if ((dy.apply(this, arguments), Er)) {
    if (Er) {
      var a = Ki
      ;(Er = !1), (Ki = null)
    } else throw Error(k(198))
    Qi || ((Qi = !0), (wl = a))
  }
}
function yn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function ad(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function qa(e) {
  if (yn(e) !== e) throw Error(k(188))
}
function hy(e) {
  var t = e.alternate
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(k(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return qa(i), e
        if (o === r) return qa(i), t
        o = o.sibling
      }
      throw Error(k(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          ;(s = !0), (n = i), (r = o)
          break
        }
        if (l === r) {
          ;(s = !0), (r = i), (n = o)
          break
        }
        l = l.sibling
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            ;(s = !0), (n = o), (r = i)
            break
          }
          if (l === r) {
            ;(s = !0), (r = o), (n = i)
            break
          }
          l = l.sibling
        }
        if (!s) throw Error(k(189))
      }
    }
    if (n.alternate !== r) throw Error(k(190))
  }
  if (n.tag !== 3) throw Error(k(188))
  return n.stateNode.current === n ? e : t
}
function cd(e) {
  return (e = hy(e)), e !== null ? fd(e) : null
}
function fd(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = fd(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var dd = De.unstable_scheduleCallback,
  Ka = De.unstable_cancelCallback,
  my = De.unstable_shouldYield,
  yy = De.unstable_requestPaint,
  X = De.unstable_now,
  gy = De.unstable_getCurrentPriorityLevel,
  ku = De.unstable_ImmediatePriority,
  pd = De.unstable_UserBlockingPriority,
  Ji = De.unstable_NormalPriority,
  vy = De.unstable_LowPriority,
  hd = De.unstable_IdlePriority,
  _o = null,
  ct = null
function wy(e) {
  if (ct && typeof ct.onCommitFiberRoot == 'function')
    try {
      ct.onCommitFiberRoot(_o, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var et = Math.clz32 ? Math.clz32 : xy,
  Sy = Math.log,
  Ey = Math.LN2
function xy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Sy(e) / Ey) | 0)) | 0
}
var ai = 64,
  ci = 4194304
function gr(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Gi(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var l = s & ~i
    l !== 0 ? (r = gr(l)) : ((o &= s), o !== 0 && (r = gr(o)))
  } else (s = n & ~i), s !== 0 ? (r = gr(s)) : o !== 0 && (r = gr(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function Cy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function ky(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - et(o),
      l = 1 << s,
      u = i[s]
    u === -1
      ? (!(l & n) || l & r) && (i[s] = Cy(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l)
  }
}
function Sl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function md() {
  var e = ai
  return (ai <<= 1), !(ai & 4194240) && (ai = 64), e
}
function Ts(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Gr(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - et(t)),
    (e[t] = n)
}
function _y(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - et(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function _u(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var $ = 0
function yd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var gd,
  Ru,
  vd,
  wd,
  Sd,
  El = !1,
  fi = [],
  It = null,
  Mt = null,
  $t = null,
  Ar = new Map(),
  jr = new Map(),
  Lt = [],
  Ry =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Qa(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      It = null
      break
    case 'dragenter':
    case 'dragleave':
      Mt = null
      break
    case 'mouseover':
    case 'mouseout':
      $t = null
      break
    case 'pointerover':
    case 'pointerout':
      Ar.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      jr.delete(t.pointerId)
  }
}
function lr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Xr(t)), t !== null && Ru(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function Ty(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (It = lr(It, e, t, n, r, i)), !0
    case 'dragenter':
      return (Mt = lr(Mt, e, t, n, r, i)), !0
    case 'mouseover':
      return ($t = lr($t, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return Ar.set(o, lr(Ar.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), jr.set(o, lr(jr.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function Ed(e) {
  var t = rn(e.target)
  if (t !== null) {
    var n = yn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ad(n)), t !== null)) {
          ;(e.blockedOn = t),
            Sd(e.priority, function () {
              vd(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Ni(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(yl = r), n.target.dispatchEvent(r), (yl = null)
    } else return (t = Xr(n)), t !== null && Ru(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Ja(e, t, n) {
  Ni(e) && n.delete(t)
}
function Oy() {
  ;(El = !1),
    It !== null && Ni(It) && (It = null),
    Mt !== null && Ni(Mt) && (Mt = null),
    $t !== null && Ni($t) && ($t = null),
    Ar.forEach(Ja),
    jr.forEach(Ja)
}
function ur(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    El ||
      ((El = !0), De.unstable_scheduleCallback(De.unstable_NormalPriority, Oy)))
}
function Ur(e) {
  function t(i) {
    return ur(i, e)
  }
  if (0 < fi.length) {
    ur(fi[0], e)
    for (var n = 1; n < fi.length; n++) {
      var r = fi[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    It !== null && ur(It, e),
      Mt !== null && ur(Mt, e),
      $t !== null && ur($t, e),
      Ar.forEach(t),
      jr.forEach(t),
      n = 0;
    n < Lt.length;
    n++
  )
    (r = Lt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Lt.length && ((n = Lt[0]), n.blockedOn === null); )
    Ed(n), n.blockedOn === null && Lt.shift()
}
var Un = _t.ReactCurrentBatchConfig,
  Yi = !0
function Ny(e, t, n, r) {
  var i = $,
    o = Un.transition
  Un.transition = null
  try {
    ;($ = 1), Tu(e, t, n, r)
  } finally {
    ;($ = i), (Un.transition = o)
  }
}
function Py(e, t, n, r) {
  var i = $,
    o = Un.transition
  Un.transition = null
  try {
    ;($ = 4), Tu(e, t, n, r)
  } finally {
    ;($ = i), (Un.transition = o)
  }
}
function Tu(e, t, n, r) {
  if (Yi) {
    var i = xl(e, t, n, r)
    if (i === null) Ms(e, t, r, Xi, n), Qa(e, r)
    else if (Ty(i, e, t, n, r)) r.stopPropagation()
    else if ((Qa(e, r), t & 4 && -1 < Ry.indexOf(e))) {
      for (; i !== null; ) {
        var o = Xr(i)
        if (
          (o !== null && gd(o),
          (o = xl(e, t, n, r)),
          o === null && Ms(e, t, r, Xi, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else Ms(e, t, r, null, n)
  }
}
var Xi = null
function xl(e, t, n, r) {
  if (((Xi = null), (e = Cu(r)), (e = rn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = ad(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Xi = e), null
}
function xd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (gy()) {
        case ku:
          return 1
        case pd:
          return 4
        case Ji:
        case vy:
          return 16
        case hd:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var jt = null,
  Ou = null,
  Pi = null
function Cd() {
  if (Pi) return Pi
  var e,
    t = Ou,
    n = t.length,
    r,
    i = 'value' in jt ? jt.value : jt.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Pi = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Li(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function di() {
  return !0
}
function Ga() {
  return !1
}
function Me(e) {
  function t(n, r, i, o, s) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null)
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? di
        : Ga),
      (this.isPropagationStopped = Ga),
      this
    )
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = di))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = di))
      },
      persist: function () {},
      isPersistent: di,
    }),
    t
  )
}
var Jn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Nu = Me(Jn),
  Yr = J({}, Jn, { view: 0, detail: 0 }),
  Ly = Me(Yr),
  Os,
  Ns,
  ar,
  Ro = J({}, Yr, {
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
    getModifierState: Pu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ar &&
            (ar && e.type === 'mousemove'
              ? ((Os = e.screenX - ar.screenX), (Ns = e.screenY - ar.screenY))
              : (Ns = Os = 0),
            (ar = e)),
          Os)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ns
    },
  }),
  Ya = Me(Ro),
  Ay = J({}, Ro, { dataTransfer: 0 }),
  jy = Me(Ay),
  Uy = J({}, Yr, { relatedTarget: 0 }),
  Ps = Me(Uy),
  Dy = J({}, Jn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Iy = Me(Dy),
  My = J({}, Jn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  $y = Me(My),
  By = J({}, Jn, { data: 0 }),
  Xa = Me(By),
  Fy = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  zy = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Vy = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function by(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = Vy[e]) ? !!t[e] : !1
}
function Pu() {
  return by
}
var Wy = J({}, Yr, {
    key: function (e) {
      if (e.key) {
        var t = Fy[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Li(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? zy[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pu,
    charCode: function (e) {
      return e.type === 'keypress' ? Li(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Li(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    },
  }),
  Hy = Me(Wy),
  qy = J({}, Ro, {
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
  Za = Me(qy),
  Ky = J({}, Yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu,
  }),
  Qy = Me(Ky),
  Jy = J({}, Jn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gy = Me(Jy),
  Yy = J({}, Ro, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Xy = Me(Yy),
  Zy = [9, 13, 27, 32],
  Lu = St && 'CompositionEvent' in window,
  xr = null
St && 'documentMode' in document && (xr = document.documentMode)
var eg = St && 'TextEvent' in window && !xr,
  kd = St && (!Lu || (xr && 8 < xr && 11 >= xr)),
  ec = String.fromCharCode(32),
  tc = !1
function _d(e, t) {
  switch (e) {
    case 'keyup':
      return Zy.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Rd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var En = !1
function tg(e, t) {
  switch (e) {
    case 'compositionend':
      return Rd(t)
    case 'keypress':
      return t.which !== 32 ? null : ((tc = !0), ec)
    case 'textInput':
      return (e = t.data), e === ec && tc ? null : e
    default:
      return null
  }
}
function ng(e, t) {
  if (En)
    return e === 'compositionend' || (!Lu && _d(e, t))
      ? ((e = Cd()), (Pi = Ou = jt = null), (En = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return kd && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var rg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
}
function nc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!rg[e.type] : t === 'textarea'
}
function Td(e, t, n, r) {
  id(r),
    (t = Zi(t, 'onChange')),
    0 < t.length &&
      ((n = new Nu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Cr = null,
  Dr = null
function ig(e) {
  $d(e, 0)
}
function To(e) {
  var t = kn(e)
  if (Yf(t)) return e
}
function og(e, t) {
  if (e === 'change') return t
}
var Od = !1
if (St) {
  var Ls
  if (St) {
    var As = 'oninput' in document
    if (!As) {
      var rc = document.createElement('div')
      rc.setAttribute('oninput', 'return;'),
        (As = typeof rc.oninput == 'function')
    }
    Ls = As
  } else Ls = !1
  Od = Ls && (!document.documentMode || 9 < document.documentMode)
}
function ic() {
  Cr && (Cr.detachEvent('onpropertychange', Nd), (Dr = Cr = null))
}
function Nd(e) {
  if (e.propertyName === 'value' && To(Dr)) {
    var t = []
    Td(t, Dr, e, Cu(e)), ud(ig, t)
  }
}
function sg(e, t, n) {
  e === 'focusin'
    ? (ic(), (Cr = t), (Dr = n), Cr.attachEvent('onpropertychange', Nd))
    : e === 'focusout' && ic()
}
function lg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return To(Dr)
}
function ug(e, t) {
  if (e === 'click') return To(t)
}
function ag(e, t) {
  if (e === 'input' || e === 'change') return To(t)
}
function cg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var it = typeof Object.is == 'function' ? Object.is : cg
function Ir(e, t) {
  if (it(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!il.call(t, i) || !it(e[i], t[i])) return !1
  }
  return !0
}
function oc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function sc(e, t) {
  var n = oc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = oc(n)
  }
}
function Pd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Pd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function Ld() {
  for (var e = window, t = qi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = qi(e.document)
  }
  return t
}
function Au(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function fg(e) {
  var t = Ld(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Pd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Au(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = sc(n, o))
        var s = sc(n, r)
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var dg = St && 'documentMode' in document && 11 >= document.documentMode,
  xn = null,
  Cl = null,
  kr = null,
  kl = !1
function lc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  kl ||
    xn == null ||
    xn !== qi(r) ||
    ((r = xn),
    'selectionStart' in r && Au(r)
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
    (kr && Ir(kr, r)) ||
      ((kr = r),
      (r = Zi(Cl, 'onSelect')),
      0 < r.length &&
        ((t = new Nu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))))
}
function pi(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Cn = {
    animationend: pi('Animation', 'AnimationEnd'),
    animationiteration: pi('Animation', 'AnimationIteration'),
    animationstart: pi('Animation', 'AnimationStart'),
    transitionend: pi('Transition', 'TransitionEnd'),
  },
  js = {},
  Ad = {}
St &&
  ((Ad = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  'TransitionEvent' in window || delete Cn.transitionend.transition)
function Oo(e) {
  if (js[e]) return js[e]
  if (!Cn[e]) return e
  var t = Cn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Ad) return (js[e] = t[n])
  return e
}
var jd = Oo('animationend'),
  Ud = Oo('animationiteration'),
  Dd = Oo('animationstart'),
  Id = Oo('transitionend'),
  Md = new Map(),
  uc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Gt(e, t) {
  Md.set(e, t), mn(t, [e])
}
for (var Us = 0; Us < uc.length; Us++) {
  var Ds = uc[Us],
    pg = Ds.toLowerCase(),
    hg = Ds[0].toUpperCase() + Ds.slice(1)
  Gt(pg, 'on' + hg)
}
Gt(jd, 'onAnimationEnd')
Gt(Ud, 'onAnimationIteration')
Gt(Dd, 'onAnimationStart')
Gt('dblclick', 'onDoubleClick')
Gt('focusin', 'onFocus')
Gt('focusout', 'onBlur')
Gt(Id, 'onTransitionEnd')
$n('onMouseEnter', ['mouseout', 'mouseover'])
$n('onMouseLeave', ['mouseout', 'mouseover'])
$n('onPointerEnter', ['pointerout', 'pointerover'])
$n('onPointerLeave', ['pointerout', 'pointerover'])
mn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
)
mn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
)
mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
mn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
mn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
mn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var vr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vr))
function ac(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), py(r, t, void 0, e), (e.currentTarget = null)
}
function $d(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e
          ac(i, l, a), (o = u)
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e
          ac(i, l, a), (o = u)
        }
    }
  }
  if (Qi) throw ((e = wl), (Qi = !1), (wl = null), e)
}
function V(e, t) {
  var n = t[Nl]
  n === void 0 && (n = t[Nl] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Bd(t, e, 2, !1), n.add(r))
}
function Is(e, t, n) {
  var r = 0
  t && (r |= 4), Bd(n, e, r, t)
}
var hi = '_reactListening' + Math.random().toString(36).slice(2)
function Mr(e) {
  if (!e[hi]) {
    ;(e[hi] = !0),
      qf.forEach(function (n) {
        n !== 'selectionchange' && (mg.has(n) || Is(n, !1, e), Is(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[hi] || ((t[hi] = !0), Is('selectionchange', !1, t))
  }
}
function Bd(e, t, n, r) {
  switch (xd(t)) {
    case 1:
      var i = Ny
      break
    case 4:
      i = Py
      break
    default:
      i = Tu
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !vl ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function Ms(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var s = r.tag
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return
            s = s.return
          }
        for (; l !== null; ) {
          if (((s = rn(l)), s === null)) return
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s
            continue e
          }
          l = l.parentNode
        }
      }
      r = r.return
    }
  ud(function () {
    var a = o,
      c = Cu(n),
      f = []
    e: {
      var y = Md.get(e)
      if (y !== void 0) {
        var w = Nu,
          g = e
        switch (e) {
          case 'keypress':
            if (Li(n) === 0) break e
          case 'keydown':
          case 'keyup':
            w = Hy
            break
          case 'focusin':
            ;(g = 'focus'), (w = Ps)
            break
          case 'focusout':
            ;(g = 'blur'), (w = Ps)
            break
          case 'beforeblur':
          case 'afterblur':
            w = Ps
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = Ya
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = jy
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = Qy
            break
          case jd:
          case Ud:
          case Dd:
            w = Iy
            break
          case Id:
            w = Gy
            break
          case 'scroll':
            w = Ly
            break
          case 'wheel':
            w = Xy
            break
          case 'copy':
          case 'cut':
          case 'paste':
            w = $y
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Za
        }
        var v = (t & 4) !== 0,
          C = !v && e === 'scroll',
          h = v ? (y !== null ? y + 'Capture' : null) : y
        v = []
        for (var d = a, m; d !== null; ) {
          m = d
          var E = m.stateNode
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              h !== null && ((E = Lr(d, h)), E != null && v.push($r(d, E, m)))),
            C)
          )
            break
          d = d.return
        }
        0 < v.length &&
          ((y = new w(y, g, null, n, c)), f.push({ event: y, listeners: v }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((y = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          y &&
            n !== yl &&
            (g = n.relatedTarget || n.fromElement) &&
            (rn(g) || g[Et]))
        )
          break e
        if (
          (w || y) &&
          ((y =
            c.window === c
              ? c
              : (y = c.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          w
            ? ((g = n.relatedTarget || n.toElement),
              (w = a),
              (g = g ? rn(g) : null),
              g !== null &&
                ((C = yn(g)), g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((w = null), (g = a)),
          w !== g)
        ) {
          if (
            ((v = Ya),
            (E = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (d = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((v = Za),
              (E = 'onPointerLeave'),
              (h = 'onPointerEnter'),
              (d = 'pointer')),
            (C = w == null ? y : kn(w)),
            (m = g == null ? y : kn(g)),
            (y = new v(E, d + 'leave', w, n, c)),
            (y.target = C),
            (y.relatedTarget = m),
            (E = null),
            rn(c) === a &&
              ((v = new v(h, d + 'enter', g, n, c)),
              (v.target = m),
              (v.relatedTarget = C),
              (E = v)),
            (C = E),
            w && g)
          )
            t: {
              for (v = w, h = g, d = 0, m = v; m; m = gn(m)) d++
              for (m = 0, E = h; E; E = gn(E)) m++
              for (; 0 < d - m; ) (v = gn(v)), d--
              for (; 0 < m - d; ) (h = gn(h)), m--
              for (; d--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t
                ;(v = gn(v)), (h = gn(h))
              }
              v = null
            }
          else v = null
          w !== null && cc(f, y, w, v, !1),
            g !== null && C !== null && cc(f, C, g, v, !0)
        }
      }
      e: {
        if (
          ((y = a ? kn(a) : window),
          (w = y.nodeName && y.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && y.type === 'file'))
        )
          var _ = og
        else if (nc(y))
          if (Od) _ = ag
          else {
            _ = lg
            var R = sg
          }
        else
          (w = y.nodeName) &&
            w.toLowerCase() === 'input' &&
            (y.type === 'checkbox' || y.type === 'radio') &&
            (_ = ug)
        if (_ && (_ = _(e, a))) {
          Td(f, _, n, c)
          break e
        }
        R && R(e, y, a),
          e === 'focusout' &&
            (R = y._wrapperState) &&
            R.controlled &&
            y.type === 'number' &&
            fl(y, 'number', y.value)
      }
      switch (((R = a ? kn(a) : window), e)) {
        case 'focusin':
          ;(nc(R) || R.contentEditable === 'true') &&
            ((xn = R), (Cl = a), (kr = null))
          break
        case 'focusout':
          kr = Cl = xn = null
          break
        case 'mousedown':
          kl = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(kl = !1), lc(f, n, c)
          break
        case 'selectionchange':
          if (dg) break
        case 'keydown':
        case 'keyup':
          lc(f, n, c)
      }
      var T
      if (Lu)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        En
          ? _d(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (kd &&
          n.locale !== 'ko' &&
          (En || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && En && (T = Cd())
            : ((jt = c),
              (Ou = 'value' in jt ? jt.value : jt.textContent),
              (En = !0))),
        (R = Zi(a, P)),
        0 < R.length &&
          ((P = new Xa(P, e, null, n, c)),
          f.push({ event: P, listeners: R }),
          T ? (P.data = T) : ((T = Rd(n)), T !== null && (P.data = T)))),
        (T = eg ? tg(e, n) : ng(e, n)) &&
          ((a = Zi(a, 'onBeforeInput')),
          0 < a.length &&
            ((c = new Xa('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = T)))
    }
    $d(f, t)
  })
}
function $r(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Zi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Lr(e, n)),
      o != null && r.unshift($r(e, o, i)),
      (o = Lr(e, t)),
      o != null && r.push($r(e, o, i))),
      (e = e.return)
  }
  return r
}
function gn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function cc(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode
    if (u !== null && u === r) break
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = Lr(n, o)), u != null && s.unshift($r(n, u, l)))
        : i || ((u = Lr(n, o)), u != null && s.push($r(n, u, l)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var yg = /\r\n?/g,
  gg = /\u0000|\uFFFD/g
function fc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      yg,
      `
`
    )
    .replace(gg, '')
}
function mi(e, t, n) {
  if (((t = fc(t)), fc(e) !== t && n)) throw Error(k(425))
}
function eo() {}
var _l = null,
  Rl = null
function Tl(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ol = typeof setTimeout == 'function' ? setTimeout : void 0,
  vg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  dc = typeof Promise == 'function' ? Promise : void 0,
  wg =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof dc < 'u'
      ? function (e) {
          return dc.resolve(null).then(e).catch(Sg)
        }
      : Ol
function Sg(e) {
  setTimeout(function () {
    throw e
  })
}
function $s(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), Ur(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  Ur(t)
}
function Bt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function pc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Gn = Math.random().toString(36).slice(2),
  at = '__reactFiber$' + Gn,
  Br = '__reactProps$' + Gn,
  Et = '__reactContainer$' + Gn,
  Nl = '__reactEvents$' + Gn,
  Eg = '__reactListeners$' + Gn,
  xg = '__reactHandles$' + Gn
function rn(e) {
  var t = e[at]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[at])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pc(e); e !== null; ) {
          if ((n = e[at])) return n
          e = pc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Xr(e) {
  return (
    (e = e[at] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(k(33))
}
function No(e) {
  return e[Br] || null
}
var Pl = [],
  _n = -1
function Yt(e) {
  return { current: e }
}
function b(e) {
  0 > _n || ((e.current = Pl[_n]), (Pl[_n] = null), _n--)
}
function z(e, t) {
  _n++, (Pl[_n] = e.current), (e.current = t)
}
var Kt = {},
  ge = Yt(Kt),
  Oe = Yt(!1),
  an = Kt
function Bn(e, t) {
  var n = e.type.contextTypes
  if (!n) return Kt
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function Ne(e) {
  return (e = e.childContextTypes), e != null
}
function to() {
  b(Oe), b(ge)
}
function hc(e, t, n) {
  if (ge.current !== Kt) throw Error(k(168))
  z(ge, t), z(Oe, n)
}
function Fd(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(k(108, sy(e) || 'Unknown', i))
  return J({}, n, r)
}
function no(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Kt),
    (an = ge.current),
    z(ge, e),
    z(Oe, Oe.current),
    !0
  )
}
function mc(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(k(169))
  n
    ? ((e = Fd(e, t, an)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      b(Oe),
      b(ge),
      z(ge, e))
    : b(Oe),
    z(Oe, n)
}
var mt = null,
  Po = !1,
  Bs = !1
function zd(e) {
  mt === null ? (mt = [e]) : mt.push(e)
}
function Cg(e) {
  ;(Po = !0), zd(e)
}
function Xt() {
  if (!Bs && mt !== null) {
    Bs = !0
    var e = 0,
      t = $
    try {
      var n = mt
      for ($ = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(mt = null), (Po = !1)
    } catch (i) {
      throw (mt !== null && (mt = mt.slice(e + 1)), dd(ku, Xt), i)
    } finally {
      ;($ = t), (Bs = !1)
    }
  }
  return null
}
var Rn = [],
  Tn = 0,
  ro = null,
  io = 0,
  Be = [],
  Fe = 0,
  cn = null,
  yt = 1,
  gt = ''
function tn(e, t) {
  ;(Rn[Tn++] = io), (Rn[Tn++] = ro), (ro = e), (io = t)
}
function Vd(e, t, n) {
  ;(Be[Fe++] = yt), (Be[Fe++] = gt), (Be[Fe++] = cn), (cn = e)
  var r = yt
  e = gt
  var i = 32 - et(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - et(t) + i
  if (30 < o) {
    var s = i - (i % 5)
    ;(o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (yt = (1 << (32 - et(t) + i)) | (n << i) | r),
      (gt = o + e)
  } else (yt = (1 << o) | (n << i) | r), (gt = e)
}
function ju(e) {
  e.return !== null && (tn(e, 1), Vd(e, 1, 0))
}
function Uu(e) {
  for (; e === ro; )
    (ro = Rn[--Tn]), (Rn[Tn] = null), (io = Rn[--Tn]), (Rn[Tn] = null)
  for (; e === cn; )
    (cn = Be[--Fe]),
      (Be[Fe] = null),
      (gt = Be[--Fe]),
      (Be[Fe] = null),
      (yt = Be[--Fe]),
      (Be[Fe] = null)
}
var Ue = null,
  je = null,
  W = !1,
  Ze = null
function bd(e, t) {
  var n = Ve(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function yc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (je = Bt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (je = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = cn !== null ? { id: yt, overflow: gt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (je = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ll(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Al(e) {
  if (W) {
    var t = je
    if (t) {
      var n = t
      if (!yc(e, t)) {
        if (Ll(e)) throw Error(k(418))
        t = Bt(n.nextSibling)
        var r = Ue
        t && yc(e, t)
          ? bd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Ue = e))
      }
    } else {
      if (Ll(e)) throw Error(k(418))
      ;(e.flags = (e.flags & -4097) | 2), (W = !1), (Ue = e)
    }
  }
}
function gc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ue = e
}
function yi(e) {
  if (e !== Ue) return !1
  if (!W) return gc(e), (W = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Tl(e.type, e.memoizedProps))),
    t && (t = je))
  ) {
    if (Ll(e)) throw (Wd(), Error(k(418)))
    for (; t; ) bd(e, t), (t = Bt(t.nextSibling))
  }
  if ((gc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              je = Bt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      je = null
    }
  } else je = Ue ? Bt(e.stateNode.nextSibling) : null
  return !0
}
function Wd() {
  for (var e = je; e; ) e = Bt(e.nextSibling)
}
function Fn() {
  ;(je = Ue = null), (W = !1)
}
function Du(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e)
}
var kg = _t.ReactCurrentBatchConfig
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309))
        var r = n.stateNode
      }
      if (!r) throw Error(k(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs
            s === null ? delete l[o] : (l[o] = s)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(k(284))
    if (!n._owner) throw Error(k(290, e))
  }
  return e
}
function gi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  )
}
function vc(e) {
  var t = e._init
  return t(e._payload)
}
function Hd(e) {
  function t(h, d) {
    if (e) {
      var m = h.deletions
      m === null ? ((h.deletions = [d]), (h.flags |= 16)) : m.push(d)
    }
  }
  function n(h, d) {
    if (!e) return null
    for (; d !== null; ) t(h, d), (d = d.sibling)
    return null
  }
  function r(h, d) {
    for (h = new Map(); d !== null; )
      d.key !== null ? h.set(d.key, d) : h.set(d.index, d), (d = d.sibling)
    return h
  }
  function i(h, d) {
    return (h = bt(h, d)), (h.index = 0), (h.sibling = null), h
  }
  function o(h, d, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((h.flags |= 2), d) : m)
            : ((h.flags |= 2), d))
        : ((h.flags |= 1048576), d)
    )
  }
  function s(h) {
    return e && h.alternate === null && (h.flags |= 2), h
  }
  function l(h, d, m, E) {
    return d === null || d.tag !== 6
      ? ((d = qs(m, h.mode, E)), (d.return = h), d)
      : ((d = i(d, m)), (d.return = h), d)
  }
  function u(h, d, m, E) {
    var _ = m.type
    return _ === Sn
      ? c(h, d, m.props.children, E, m.key)
      : d !== null &&
        (d.elementType === _ ||
          (typeof _ == 'object' &&
            _ !== null &&
            _.$$typeof === Nt &&
            vc(_) === d.type))
      ? ((E = i(d, m.props)), (E.ref = cr(h, d, m)), (E.return = h), E)
      : ((E = $i(m.type, m.key, m.props, null, h.mode, E)),
        (E.ref = cr(h, d, m)),
        (E.return = h),
        E)
  }
  function a(h, d, m, E) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Ks(m, h.mode, E)), (d.return = h), d)
      : ((d = i(d, m.children || [])), (d.return = h), d)
  }
  function c(h, d, m, E, _) {
    return d === null || d.tag !== 7
      ? ((d = un(m, h.mode, E, _)), (d.return = h), d)
      : ((d = i(d, m)), (d.return = h), d)
  }
  function f(h, d, m) {
    if ((typeof d == 'string' && d !== '') || typeof d == 'number')
      return (d = qs('' + d, h.mode, m)), (d.return = h), d
    if (typeof d == 'object' && d !== null) {
      switch (d.$$typeof) {
        case si:
          return (
            (m = $i(d.type, d.key, d.props, null, h.mode, m)),
            (m.ref = cr(h, null, d)),
            (m.return = h),
            m
          )
        case wn:
          return (d = Ks(d, h.mode, m)), (d.return = h), d
        case Nt:
          var E = d._init
          return f(h, E(d._payload), m)
      }
      if (yr(d) || or(d)) return (d = un(d, h.mode, m, null)), (d.return = h), d
      gi(h, d)
    }
    return null
  }
  function y(h, d, m, E) {
    var _ = d !== null ? d.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return _ !== null ? null : l(h, d, '' + m, E)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case si:
          return m.key === _ ? u(h, d, m, E) : null
        case wn:
          return m.key === _ ? a(h, d, m, E) : null
        case Nt:
          return (_ = m._init), y(h, d, _(m._payload), E)
      }
      if (yr(m) || or(m)) return _ !== null ? null : c(h, d, m, E, null)
      gi(h, m)
    }
    return null
  }
  function w(h, d, m, E, _) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (h = h.get(m) || null), l(d, h, '' + E, _)
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case si:
          return (h = h.get(E.key === null ? m : E.key) || null), u(d, h, E, _)
        case wn:
          return (h = h.get(E.key === null ? m : E.key) || null), a(d, h, E, _)
        case Nt:
          var R = E._init
          return w(h, d, m, R(E._payload), _)
      }
      if (yr(E) || or(E)) return (h = h.get(m) || null), c(d, h, E, _, null)
      gi(d, E)
    }
    return null
  }
  function g(h, d, m, E) {
    for (
      var _ = null, R = null, T = d, P = (d = 0), H = null;
      T !== null && P < m.length;
      P++
    ) {
      T.index > P ? ((H = T), (T = null)) : (H = T.sibling)
      var j = y(h, T, m[P], E)
      if (j === null) {
        T === null && (T = H)
        break
      }
      e && T && j.alternate === null && t(h, T),
        (d = o(j, d, P)),
        R === null ? (_ = j) : (R.sibling = j),
        (R = j),
        (T = H)
    }
    if (P === m.length) return n(h, T), W && tn(h, P), _
    if (T === null) {
      for (; P < m.length; P++)
        (T = f(h, m[P], E)),
          T !== null &&
            ((d = o(T, d, P)), R === null ? (_ = T) : (R.sibling = T), (R = T))
      return W && tn(h, P), _
    }
    for (T = r(h, T); P < m.length; P++)
      (H = w(T, h, P, m[P], E)),
        H !== null &&
          (e && H.alternate !== null && T.delete(H.key === null ? P : H.key),
          (d = o(H, d, P)),
          R === null ? (_ = H) : (R.sibling = H),
          (R = H))
    return (
      e &&
        T.forEach(function (Le) {
          return t(h, Le)
        }),
      W && tn(h, P),
      _
    )
  }
  function v(h, d, m, E) {
    var _ = or(m)
    if (typeof _ != 'function') throw Error(k(150))
    if (((m = _.call(m)), m == null)) throw Error(k(151))
    for (
      var R = (_ = null), T = d, P = (d = 0), H = null, j = m.next();
      T !== null && !j.done;
      P++, j = m.next()
    ) {
      T.index > P ? ((H = T), (T = null)) : (H = T.sibling)
      var Le = y(h, T, j.value, E)
      if (Le === null) {
        T === null && (T = H)
        break
      }
      e && T && Le.alternate === null && t(h, T),
        (d = o(Le, d, P)),
        R === null ? (_ = Le) : (R.sibling = Le),
        (R = Le),
        (T = H)
    }
    if (j.done) return n(h, T), W && tn(h, P), _
    if (T === null) {
      for (; !j.done; P++, j = m.next())
        (j = f(h, j.value, E)),
          j !== null &&
            ((d = o(j, d, P)), R === null ? (_ = j) : (R.sibling = j), (R = j))
      return W && tn(h, P), _
    }
    for (T = r(h, T); !j.done; P++, j = m.next())
      (j = w(T, h, P, j.value, E)),
        j !== null &&
          (e && j.alternate !== null && T.delete(j.key === null ? P : j.key),
          (d = o(j, d, P)),
          R === null ? (_ = j) : (R.sibling = j),
          (R = j))
    return (
      e &&
        T.forEach(function (rr) {
          return t(h, rr)
        }),
      W && tn(h, P),
      _
    )
  }
  function C(h, d, m, E) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === Sn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case si:
          e: {
            for (var _ = m.key, R = d; R !== null; ) {
              if (R.key === _) {
                if (((_ = m.type), _ === Sn)) {
                  if (R.tag === 7) {
                    n(h, R.sibling),
                      (d = i(R, m.props.children)),
                      (d.return = h),
                      (h = d)
                    break e
                  }
                } else if (
                  R.elementType === _ ||
                  (typeof _ == 'object' &&
                    _ !== null &&
                    _.$$typeof === Nt &&
                    vc(_) === R.type)
                ) {
                  n(h, R.sibling),
                    (d = i(R, m.props)),
                    (d.ref = cr(h, R, m)),
                    (d.return = h),
                    (h = d)
                  break e
                }
                n(h, R)
                break
              } else t(h, R)
              R = R.sibling
            }
            m.type === Sn
              ? ((d = un(m.props.children, h.mode, E, m.key)),
                (d.return = h),
                (h = d))
              : ((E = $i(m.type, m.key, m.props, null, h.mode, E)),
                (E.ref = cr(h, d, m)),
                (E.return = h),
                (h = E))
          }
          return s(h)
        case wn:
          e: {
            for (R = m.key; d !== null; ) {
              if (d.key === R)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(h, d.sibling),
                    (d = i(d, m.children || [])),
                    (d.return = h),
                    (h = d)
                  break e
                } else {
                  n(h, d)
                  break
                }
              else t(h, d)
              d = d.sibling
            }
            ;(d = Ks(m, h.mode, E)), (d.return = h), (h = d)
          }
          return s(h)
        case Nt:
          return (R = m._init), C(h, d, R(m._payload), E)
      }
      if (yr(m)) return g(h, d, m, E)
      if (or(m)) return v(h, d, m, E)
      gi(h, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        d !== null && d.tag === 6
          ? (n(h, d.sibling), (d = i(d, m)), (d.return = h), (h = d))
          : (n(h, d), (d = qs(m, h.mode, E)), (d.return = h), (h = d)),
        s(h))
      : n(h, d)
  }
  return C
}
var zn = Hd(!0),
  qd = Hd(!1),
  oo = Yt(null),
  so = null,
  On = null,
  Iu = null
function Mu() {
  Iu = On = so = null
}
function $u(e) {
  var t = oo.current
  b(oo), (e._currentValue = t)
}
function jl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Dn(e, t) {
  ;(so = e),
    (Iu = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Te = !0), (e.firstContext = null))
}
function He(e) {
  var t = e._currentValue
  if (Iu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (so === null) throw Error(k(308))
      ;(On = e), (so.dependencies = { lanes: 0, firstContext: e })
    } else On = On.next = e
  return t
}
var on = null
function Bu(e) {
  on === null ? (on = [e]) : on.push(e)
}
function Kd(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), Bu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    xt(e, r)
  )
}
function xt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Pt = !1
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Qd(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function Ft(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), M & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      xt(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    xt(e, n)
  )
}
function Ai(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n)
  }
}
function wc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function lo(e, t, n, r) {
  var i = e.updateQueue
  Pt = !1
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending
  if (l !== null) {
    i.shared.pending = null
    var u = l,
      a = u.next
    ;(u.next = null), s === null ? (o = a) : (s.next = a), (s = u)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = a) : (l.next = a),
        (c.lastBaseUpdate = u)))
  }
  if (o !== null) {
    var f = i.baseState
    ;(s = 0), (c = a = u = null), (l = o)
    do {
      var y = l.lane,
        w = l.eventTime
      if ((r & y) === y) {
        c !== null &&
          (c = c.next =
            {
              eventTime: w,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            })
        e: {
          var g = e,
            v = l
          switch (((y = t), (w = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == 'function')) {
                f = g.call(w, f, y)
                break e
              }
              f = g
              break e
            case 3:
              g.flags = (g.flags & -65537) | 128
            case 0:
              if (
                ((g = v.payload),
                (y = typeof g == 'function' ? g.call(w, f, y) : g),
                y == null)
              )
                break e
              f = J({}, f, y)
              break e
            case 2:
              Pt = !0
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [l]) : y.push(l))
      } else
        (w = {
          eventTime: w,
          lane: y,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = w), (u = f)) : (c = c.next = w),
          (s |= y)
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break
        ;(y = l),
          (l = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (s |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(dn |= s), (e.lanes = s), (e.memoizedState = f)
  }
}
function Sc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(k(191, i))
        i.call(r)
      }
    }
}
var Zr = {},
  ft = Yt(Zr),
  Fr = Yt(Zr),
  zr = Yt(Zr)
function sn(e) {
  if (e === Zr) throw Error(k(174))
  return e
}
function zu(e, t) {
  switch ((z(zr, t), z(Fr, e), z(ft, Zr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pl(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pl(t, e))
  }
  b(ft), z(ft, t)
}
function Vn() {
  b(ft), b(Fr), b(zr)
}
function Jd(e) {
  sn(zr.current)
  var t = sn(ft.current),
    n = pl(t, e.type)
  t !== n && (z(Fr, e), z(ft, n))
}
function Vu(e) {
  Fr.current === e && (b(ft), b(Fr))
}
var q = Yt(0)
function uo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Fs = []
function bu() {
  for (var e = 0; e < Fs.length; e++) Fs[e]._workInProgressVersionPrimary = null
  Fs.length = 0
}
var ji = _t.ReactCurrentDispatcher,
  zs = _t.ReactCurrentBatchConfig,
  fn = 0,
  K = null,
  ie = null,
  le = null,
  ao = !1,
  _r = !1,
  Vr = 0,
  _g = 0
function he() {
  throw Error(k(321))
}
function Wu(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!it(e[n], t[n])) return !1
  return !0
}
function Hu(e, t, n, r, i, o) {
  if (
    ((fn = o),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ji.current = e === null || e.memoizedState === null ? Ng : Pg),
    (e = n(r, i)),
    _r)
  ) {
    o = 0
    do {
      if (((_r = !1), (Vr = 0), 25 <= o)) throw Error(k(301))
      ;(o += 1),
        (le = ie = null),
        (t.updateQueue = null),
        (ji.current = Lg),
        (e = n(r, i))
    } while (_r)
  }
  if (
    ((ji.current = co),
    (t = ie !== null && ie.next !== null),
    (fn = 0),
    (le = ie = K = null),
    (ao = !1),
    t)
  )
    throw Error(k(300))
  return e
}
function qu() {
  var e = Vr !== 0
  return (Vr = 0), e
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le
}
function qe() {
  if (ie === null) {
    var e = K.alternate
    e = e !== null ? e.memoizedState : null
  } else e = ie.next
  var t = le === null ? K.memoizedState : le.next
  if (t !== null) (le = t), (ie = e)
  else {
    if (e === null) throw Error(k(310))
    ;(ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e)
  }
  return le
}
function br(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Vs(e) {
  var t = qe(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = ie,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var s = i.next
      ;(i.next = o.next), (o.next = s)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var l = (s = null),
      u = null,
      a = o
    do {
      var c = a.lane
      if ((fn & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action))
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        }
        u === null ? ((l = u = f), (s = r)) : (u = u.next = f),
          (K.lanes |= c),
          (dn |= c)
      }
      a = a.next
    } while (a !== null && a !== o)
    u === null ? (s = r) : (u.next = l),
      it(r, t.memoizedState) || (Te = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (K.lanes |= o), (dn |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function bs(e) {
  var t = qe(),
    n = t.queue
  if (n === null) throw Error(k(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var s = (i = i.next)
    do (o = e(o, s.action)), (s = s.next)
    while (s !== i)
    it(o, t.memoizedState) || (Te = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function Gd() {}
function Yd(e, t) {
  var n = K,
    r = qe(),
    i = t(),
    o = !it(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (Te = !0)),
    (r = r.queue),
    Ku(ep.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Wr(9, Zd.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(k(349))
    fn & 30 || Xd(n, t, i)
  }
  return i
}
function Xd(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function Zd(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), tp(t) && np(e)
}
function ep(e, t, n) {
  return n(function () {
    tp(t) && np(e)
  })
}
function tp(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !it(e, n)
  } catch {
    return !0
  }
}
function np(e) {
  var t = xt(e, 1)
  t !== null && tt(t, e, 1, -1)
}
function Ec(e) {
  var t = ut()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: br,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Og.bind(null, K, e)),
    [t.memoizedState, e]
  )
}
function Wr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function rp() {
  return qe().memoizedState
}
function Ui(e, t, n, r) {
  var i = ut()
  ;(K.flags |= e),
    (i.memoizedState = Wr(1 | t, n, void 0, r === void 0 ? null : r))
}
function Lo(e, t, n, r) {
  var i = qe()
  r = r === void 0 ? null : r
  var o = void 0
  if (ie !== null) {
    var s = ie.memoizedState
    if (((o = s.destroy), r !== null && Wu(r, s.deps))) {
      i.memoizedState = Wr(t, n, o, r)
      return
    }
  }
  ;(K.flags |= e), (i.memoizedState = Wr(1 | t, n, o, r))
}
function xc(e, t) {
  return Ui(8390656, 8, e, t)
}
function Ku(e, t) {
  return Lo(2048, 8, e, t)
}
function ip(e, t) {
  return Lo(4, 2, e, t)
}
function op(e, t) {
  return Lo(4, 4, e, t)
}
function sp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function lp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Lo(4, 4, sp.bind(null, t, e), n)
  )
}
function Qu() {}
function up(e, t) {
  var n = qe()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function ap(e, t) {
  var n = qe()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function cp(e, t, n) {
  return fn & 21
    ? (it(n, t) || ((n = md()), (K.lanes |= n), (dn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Te = !0)), (e.memoizedState = n))
}
function Rg(e, t) {
  var n = $
  ;($ = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = zs.transition
  zs.transition = {}
  try {
    e(!1), t()
  } finally {
    ;($ = n), (zs.transition = r)
  }
}
function fp() {
  return qe().memoizedState
}
function Tg(e, t, n) {
  var r = Vt(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    dp(e))
  )
    pp(t, n)
  else if (((n = Kd(e, t, n, r)), n !== null)) {
    var i = xe()
    tt(n, e, r, i), hp(n, t, r)
  }
}
function Og(e, t, n) {
  var r = Vt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (dp(e)) pp(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n)
        if (((i.hasEagerState = !0), (i.eagerState = l), it(l, s))) {
          var u = t.interleaved
          u === null
            ? ((i.next = i), Bu(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Kd(e, t, i, r)),
      n !== null && ((i = xe()), tt(n, e, r, i), hp(n, t, r))
  }
}
function dp(e) {
  var t = e.alternate
  return e === K || (t !== null && t === K)
}
function pp(e, t) {
  _r = ao = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function hp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n)
  }
}
var co = {
    readContext: He,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1,
  },
  Ng = {
    readContext: He,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: He,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ui(4194308, 4, sp.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Ui(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ui(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = ut()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = ut()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tg.bind(null, K, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = ut()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ec,
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e)
    },
    useTransition: function () {
      var e = Ec(!1),
        t = e[0]
      return (e = Rg.bind(null, e[1])), (ut().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = ut()
      if (W) {
        if (n === void 0) throw Error(k(407))
        n = n()
      } else {
        if (((n = t()), ae === null)) throw Error(k(349))
        fn & 30 || Xd(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        xc(ep.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Wr(9, Zd.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = ut(),
        t = ae.identifierPrefix
      if (W) {
        var n = gt,
          r = yt
        ;(n = (r & ~(1 << (32 - et(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Vr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = _g++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  Pg = {
    readContext: He,
    useCallback: up,
    useContext: He,
    useEffect: Ku,
    useImperativeHandle: lp,
    useInsertionEffect: ip,
    useLayoutEffect: op,
    useMemo: ap,
    useReducer: Vs,
    useRef: rp,
    useState: function () {
      return Vs(br)
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = qe()
      return cp(t, ie.memoizedState, e)
    },
    useTransition: function () {
      var e = Vs(br)[0],
        t = qe().memoizedState
      return [e, t]
    },
    useMutableSource: Gd,
    useSyncExternalStore: Yd,
    useId: fp,
    unstable_isNewReconciler: !1,
  },
  Lg = {
    readContext: He,
    useCallback: up,
    useContext: He,
    useEffect: Ku,
    useImperativeHandle: lp,
    useInsertionEffect: ip,
    useLayoutEffect: op,
    useMemo: ap,
    useReducer: bs,
    useRef: rp,
    useState: function () {
      return bs(br)
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = qe()
      return ie === null ? (t.memoizedState = e) : cp(t, ie.memoizedState, e)
    },
    useTransition: function () {
      var e = bs(br)[0],
        t = qe().memoizedState
      return [e, t]
    },
    useMutableSource: Gd,
    useSyncExternalStore: Yd,
    useId: fp,
    unstable_isNewReconciler: !1,
  }
function Je(e, t) {
  if (e && e.defaultProps) {
    ;(t = J({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Ul(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ao = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = xe(),
      i = Vt(e),
      o = vt(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, i)),
      t !== null && (tt(t, e, i, r), Ai(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = xe(),
      i = Vt(e),
      o = vt(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ft(e, o, i)),
      t !== null && (tt(t, e, i, r), Ai(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = xe(),
      r = Vt(e),
      i = vt(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = Ft(e, i, r)),
      t !== null && (tt(t, e, r, n), Ai(t, e, r))
  },
}
function Cc(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ir(n, r) || !Ir(i, o)
      : !0
  )
}
function mp(e, t, n) {
  var r = !1,
    i = Kt,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = He(o))
      : ((i = Ne(t) ? an : ge.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Bn(e, i) : Kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ao),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function kc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ao.enqueueReplaceState(t, t.state, null)
}
function Dl(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fu(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = He(o))
    : ((o = Ne(t) ? an : ge.current), (i.context = Bn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ul(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ao.enqueueReplaceState(i, i.state, null),
      lo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function bn(e, t) {
  try {
    var n = '',
      r = t
    do (n += oy(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function Ws(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Il(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Ag = typeof WeakMap == 'function' ? WeakMap : Map
function yp(e, t, n) {
  ;(n = vt(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      po || ((po = !0), (ql = r)), Il(e, t)
    }),
    n
  )
}
function gp(e, t, n) {
  ;(n = vt(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Il(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Il(e, t),
          typeof r != 'function' &&
            (zt === null ? (zt = new Set([this])) : zt.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function _c(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new Ag()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = qg.bind(null, e, t, n)), t.then(e, e))
}
function Rc(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Tc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = vt(-1, 1)), (t.tag = 2), Ft(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var jg = _t.ReactCurrentOwner,
  Te = !1
function Ee(e, t, n, r) {
  t.child = e === null ? qd(t, null, n, r) : zn(t, e.child, n, r)
}
function Oc(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Dn(t, i),
    (r = Hu(e, t, n, r, o, i)),
    (n = qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (W && n && ju(t), (t.flags |= 1), Ee(e, t, r, i), t.child)
  )
}
function Nc(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !na(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vp(e, t, o, r, i))
      : ((e = $i(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : Ir), n(s, r) && e.ref === t.ref)
    )
      return Ct(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = bt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function vp(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (Ir(o, r) && e.ref === t.ref)
      if (((Te = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Te = !0)
      else return (t.lanes = e.lanes), Ct(e, t, i)
  }
  return Ml(e, t, n, r, i)
}
function wp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Pn, Ae),
        (Ae |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(Pn, Ae),
          (Ae |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        z(Pn, Ae),
        (Ae |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Pn, Ae),
      (Ae |= r)
  return Ee(e, t, i, n), t.child
}
function Sp(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Ml(e, t, n, r, i) {
  var o = Ne(n) ? an : ge.current
  return (
    (o = Bn(t, o)),
    Dn(t, i),
    (n = Hu(e, t, n, r, o, i)),
    (r = qu()),
    e !== null && !Te
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Ct(e, t, i))
      : (W && r && ju(t), (t.flags |= 1), Ee(e, t, n, i), t.child)
  )
}
function Pc(e, t, n, r, i) {
  if (Ne(n)) {
    var o = !0
    no(t)
  } else o = !1
  if ((Dn(t, i), t.stateNode === null))
    Di(e, t), mp(t, n, r), Dl(t, n, r, i), (r = !0)
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps
    s.props = l
    var u = s.context,
      a = n.contextType
    typeof a == 'object' && a !== null
      ? (a = He(a))
      : ((a = Ne(n) ? an : ge.current), (a = Bn(t, a)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== r || u !== a) && kc(t, s, r, a)),
      (Pt = !1)
    var y = t.memoizedState
    ;(s.state = y),
      lo(t, r, s, i),
      (u = t.memoizedState),
      l !== r || y !== u || Oe.current || Pt
        ? (typeof c == 'function' && (Ul(t, n, c, r), (u = t.memoizedState)),
          (l = Pt || Cc(t, n, l, r, y, u, a))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(s = t.stateNode),
      Qd(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Je(t.type, l)),
      (s.props = a),
      (f = t.pendingProps),
      (y = s.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = He(u))
        : ((u = Ne(n) ? an : ge.current), (u = Bn(t, u)))
    var w = n.getDerivedStateFromProps
    ;(c =
      typeof w == 'function' ||
      typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((l !== f || y !== u) && kc(t, s, r, u)),
      (Pt = !1),
      (y = t.memoizedState),
      (s.state = y),
      lo(t, r, s, i)
    var g = t.memoizedState
    l !== f || y !== g || Oe.current || Pt
      ? (typeof w == 'function' && (Ul(t, n, w, r), (g = t.memoizedState)),
        (a = Pt || Cc(t, n, a, r, y, g, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' &&
                s.componentWillUpdate(r, g, u),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(r, g, u)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && y === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && y === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return $l(e, t, n, r, o, i)
}
function $l(e, t, n, r, i, o) {
  Sp(e, t)
  var s = (t.flags & 128) !== 0
  if (!r && !s) return i && mc(t, n, !1), Ct(e, t, o)
  ;(r = t.stateNode), (jg.current = t)
  var l =
    s && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = zn(t, e.child, null, o)), (t.child = zn(t, null, l, o)))
      : Ee(e, t, l, o),
    (t.memoizedState = r.state),
    i && mc(t, n, !0),
    t.child
  )
}
function Ep(e) {
  var t = e.stateNode
  t.pendingContext
    ? hc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && hc(e, t.context, !1),
    zu(e, t.containerInfo)
}
function Lc(e, t, n, r, i) {
  return Fn(), Du(i), (t.flags |= 256), Ee(e, t, n, r), t.child
}
var Bl = { dehydrated: null, treeContext: null, retryLane: 0 }
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function xp(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(q, i & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: 'hidden', children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Do(s, r, 0, null)),
              (e = un(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = Bl),
              e)
            : Ju(t, s))
    )
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Ug(e, t, s, r, l, i, n)
  if (o) {
    ;(o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling)
    var u = { mode: 'hidden', children: r.children }
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = bt(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = bt(l, o)) : ((o = un(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Fl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bl),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = bt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Ju(e, t) {
  return (
    (t = Do({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function vi(e, t, n, r) {
  return (
    r !== null && Du(r),
    zn(t, e.child, null, n),
    (e = Ju(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function Ug(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ws(Error(k(422)))), vi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Do({ mode: 'visible', children: r.children }, i, 0, null)),
        (o = un(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && zn(t, e.child, null, s),
        (t.child.memoizedState = Fl(s)),
        (t.memoizedState = Bl),
        o)
  if (!(t.mode & 1)) return vi(e, t, s, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst
    return (r = l), (o = Error(k(419))), (r = Ws(o, r, void 0)), vi(e, t, s, r)
  }
  if (((l = (s & e.childLanes) !== 0), Te || l)) {
    if (((r = ae), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
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
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), xt(e, i), tt(r, e, i, -1))
    }
    return ta(), (r = Ws(Error(k(421)))), vi(e, t, s, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kg.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (je = Bt(i.nextSibling)),
      (Ue = t),
      (W = !0),
      (Ze = null),
      e !== null &&
        ((Be[Fe++] = yt),
        (Be[Fe++] = gt),
        (Be[Fe++] = cn),
        (yt = e.id),
        (gt = e.overflow),
        (cn = t)),
      (t = Ju(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Ac(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), jl(e.return, t, n)
}
function Hs(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function Cp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Ee(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ac(e, n, t)
        else if (e.tag === 19) Ac(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((z(q, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && uo(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Hs(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && uo(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Hs(t, !0, n, null, o)
        break
      case 'together':
        Hs(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Di(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Ct(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (dn |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(k(153))
  if (t.child !== null) {
    for (
      e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bt(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Dg(e, t, n) {
  switch (t.tag) {
    case 3:
      Ep(t), Fn()
      break
    case 5:
      Jd(t)
      break
    case 1:
      Ne(t.type) && no(t)
      break
    case 4:
      zu(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      z(oo, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? xp(e, t, n)
          : (z(q, q.current & 1),
            (e = Ct(e, t, n)),
            e !== null ? e.sibling : null)
      z(q, q.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Cp(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(q, q.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), wp(e, t, n)
  }
  return Ct(e, t, n)
}
var kp, zl, _p, Rp
kp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
zl = function () {}
_p = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), sn(ft.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = al(e, i)), (r = al(e, r)), (o = [])
        break
      case 'select':
        ;(i = J({}, i, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = dl(e, i)), (r = dl(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = eo)
    }
    hl(n, r)
    var s
    n = null
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === 'style') {
          var l = i[a]
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Nr.hasOwnProperty(a) ? o || (o = []) : (o = o || []).push(a, null))
    for (a in r) {
      var u = r[a]
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === 'style')
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ''))
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]))
          } else n || (o || (o = []), o.push(a, n)), (n = u)
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(a, '' + u)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Nr.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && V('scroll', e),
                  o || l === u || (o = []))
                : (o = o || []).push(a, u))
    }
    n && (o = o || []).push('style', n)
    var a = o
    ;(t.updateQueue = a) && (t.flags |= 4)
  }
}
Rp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function fr(e, t) {
  if (!W)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function Ig(e, t, n) {
  var r = t.pendingProps
  switch ((Uu(t), t.tag)) {
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
      return me(t), null
    case 1:
      return Ne(t.type) && to(), me(t), null
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        b(Oe),
        b(ge),
        bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Jl(Ze), (Ze = null)))),
        zl(e, t),
        me(t),
        null
      )
    case 5:
      Vu(t)
      var i = sn(zr.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        _p(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166))
          return me(t), null
        }
        if (((e = sn(ft.current)), yi(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[at] = t), (r[Br] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              V('cancel', r), V('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              V('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < vr.length; i++) V(vr[i], r)
              break
            case 'source':
              V('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              V('error', r), V('load', r)
              break
            case 'details':
              V('toggle', r)
              break
            case 'input':
              za(r, o), V('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                V('invalid', r)
              break
            case 'textarea':
              ba(r, o), V('invalid', r)
          }
          hl(n, o), (i = null)
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s]
              s === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, l, e),
                    (i = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      mi(r.textContent, l, e),
                    (i = ['children', '' + l]))
                : Nr.hasOwnProperty(s) &&
                  l != null &&
                  s === 'onScroll' &&
                  V('scroll', r)
            }
          switch (n) {
            case 'input':
              li(r), Va(r, o, !0)
              break
            case 'textarea':
              li(r), Wa(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = eo)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(s = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = ed(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[at] = t),
            (e[Br] = r),
            kp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = ml(n, r)), n)) {
              case 'dialog':
                V('cancel', e), V('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                V('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < vr.length; i++) V(vr[i], e)
                i = r
                break
              case 'source':
                V('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                V('error', e), V('load', e), (i = r)
                break
              case 'details':
                V('toggle', e), (i = r)
                break
              case 'input':
                za(e, r), (i = al(e, r)), V('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = J({}, r, { value: void 0 })),
                  V('invalid', e)
                break
              case 'textarea':
                ba(e, r), (i = dl(e, r)), V('invalid', e)
                break
              default:
                i = r
            }
            hl(n, i), (l = i)
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o]
                o === 'style'
                  ? rd(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && td(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Pr(e, u)
                    : typeof u == 'number' && Pr(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Nr.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && V('scroll', e)
                      : u != null && wu(e, o, u, s))
              }
            switch (n) {
              case 'input':
                li(e), Va(e, r, !1)
                break
              case 'textarea':
                li(e), Wa(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + qt(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Ln(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Ln(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = eo)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return me(t), null
    case 6:
      if (e && t.stateNode != null) Rp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166))
        if (((n = sn(zr.current)), sn(ft.current), yi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[at] = t),
            (o = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                mi(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  mi(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[at] = t),
            (t.stateNode = r)
      }
      return me(t), null
    case 13:
      if (
        (b(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && je !== null && t.mode & 1 && !(t.flags & 128))
          Wd(), Fn(), (t.flags |= 98560), (o = !1)
        else if (((o = yi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317))
            o[at] = t
          } else
            Fn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          me(t), (o = !1)
        } else Ze !== null && (Jl(Ze), (Ze = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? oe === 0 && (oe = 3) : ta())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null)
    case 4:
      return (
        Vn(), zl(e, t), e === null && Mr(t.stateNode.containerInfo), me(t), null
      )
    case 10:
      return $u(t.type._context), me(t), null
    case 17:
      return Ne(t.type) && to(), me(t), null
    case 19:
      if ((b(q), (o = t.memoizedState), o === null)) return me(t), null
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) fr(o, !1)
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = uo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    fr(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return z(q, (q.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            X() > Wn &&
            ((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = uo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !W)
            )
              return me(t), null
          } else
            2 * X() - o.renderingStartTime > Wn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = X()),
          (t.sibling = null),
          (n = q.current),
          z(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null)
    case 22:
    case 23:
      return (
        ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ae & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(k(156, t.tag))
}
function Mg(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && to(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Vn(),
        b(Oe),
        b(ge),
        bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return Vu(t), null
    case 13:
      if ((b(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340))
        Fn()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return b(q), null
    case 4:
      return Vn(), null
    case 10:
      return $u(t.type._context), null
    case 22:
    case 23:
      return ea(), null
    case 24:
      return null
    default:
      return null
  }
}
var wi = !1,
  ye = !1,
  $g = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null
function Nn(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        G(e, t, r)
      }
    else n.current = null
}
function Vl(e, t, n) {
  try {
    n()
  } catch (r) {
    G(e, t, r)
  }
}
var jc = !1
function Bg(e, t) {
  if (((_l = Yi), (e = Ld()), Au(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            y = null
          t: for (;;) {
            for (
              var w;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (w = f.firstChild) !== null;

            )
              (y = f), (f = w)
            for (;;) {
              if (f === e) break t
              if (
                (y === n && ++a === i && (l = s),
                y === o && ++c === r && (u = s),
                (w = f.nextSibling) !== null)
              )
                break
              ;(f = y), (y = f.parentNode)
            }
            f = w
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Rl = { focusedElem: e, selectionRange: n }, Yi = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e)
    else
      for (; O !== null; ) {
        t = O
        try {
          var g = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    C = g.memoizedState,
                    h = t.stateNode,
                    d = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Je(t.type, v),
                      C
                    )
                  h.__reactInternalSnapshotBeforeUpdate = d
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(k(163))
            }
        } catch (E) {
          G(t, t.return, E)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (O = e)
          break
        }
        O = t.return
      }
  return (g = jc), (jc = !1), g
}
function Rr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Vl(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function jo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function bl(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Tp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Tp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[at], delete t[Br], delete t[Nl], delete t[Eg], delete t[xg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Op(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Op(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Wl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = eo))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wl(e, t, n), e = e.sibling; e !== null; ) Wl(e, t, n), (e = e.sibling)
}
function Hl(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Hl(e, t, n), e = e.sibling; e !== null; ) Hl(e, t, n), (e = e.sibling)
}
var fe = null,
  Ge = !1
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Np(e, t, n), (n = n.sibling)
}
function Np(e, t, n) {
  if (ct && typeof ct.onCommitFiberUnmount == 'function')
    try {
      ct.onCommitFiberUnmount(_o, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ye || Nn(n, t)
    case 6:
      var r = fe,
        i = Ge
      ;(fe = null),
        Tt(e, t, n),
        (fe = r),
        (Ge = i),
        fe !== null &&
          (Ge
            ? ((e = fe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : fe.removeChild(n.stateNode))
      break
    case 18:
      fe !== null &&
        (Ge
          ? ((e = fe),
            (n = n.stateNode),
            e.nodeType === 8
              ? $s(e.parentNode, n)
              : e.nodeType === 1 && $s(e, n),
            Ur(e))
          : $s(fe, n.stateNode))
      break
    case 4:
      ;(r = fe),
        (i = Ge),
        (fe = n.stateNode.containerInfo),
        (Ge = !0),
        Tt(e, t, n),
        (fe = r),
        (Ge = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ye &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            s = o.destroy
          ;(o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Vl(n, t, s),
            (i = i.next)
        } while (i !== r)
      }
      Tt(e, t, n)
      break
    case 1:
      if (
        !ye &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (l) {
          G(n, t, l)
        }
      Tt(e, t, n)
      break
    case 21:
      Tt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ye = (r = ye) || n.memoizedState !== null), Tt(e, t, n), (ye = r))
        : Tt(e, t, n)
      break
    default:
      Tt(e, t, n)
  }
}
function Dc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new $g()),
      t.forEach(function (r) {
        var i = Qg.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function Qe(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          s = t,
          l = s
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              ;(fe = l.stateNode), (Ge = !1)
              break e
            case 3:
              ;(fe = l.stateNode.containerInfo), (Ge = !0)
              break e
            case 4:
              ;(fe = l.stateNode.containerInfo), (Ge = !0)
              break e
          }
          l = l.return
        }
        if (fe === null) throw Error(k(160))
        Np(o, s, i), (fe = null), (Ge = !1)
        var u = i.alternate
        u !== null && (u.return = null), (i.return = null)
      } catch (a) {
        G(i, t, a)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Pp(t, e), (t = t.sibling)
}
function Pp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Qe(t, e), lt(e), r & 4)) {
        try {
          Rr(3, e, e.return), jo(3, e)
        } catch (v) {
          G(e, e.return, v)
        }
        try {
          Rr(5, e, e.return)
        } catch (v) {
          G(e, e.return, v)
        }
      }
      break
    case 1:
      Qe(t, e), lt(e), r & 512 && n !== null && Nn(n, n.return)
      break
    case 5:
      if (
        (Qe(t, e),
        lt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          Pr(i, '')
        } catch (v) {
          G(e, e.return, v)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue
        if (((e.updateQueue = null), u !== null))
          try {
            l === 'input' && o.type === 'radio' && o.name != null && Xf(i, o),
              ml(l, s)
            var a = ml(l, o)
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                f = u[s + 1]
              c === 'style'
                ? rd(i, f)
                : c === 'dangerouslySetInnerHTML'
                ? td(i, f)
                : c === 'children'
                ? Pr(i, f)
                : wu(i, c, f, a)
            }
            switch (l) {
              case 'input':
                cl(i, o)
                break
              case 'textarea':
                Zf(i, o)
                break
              case 'select':
                var y = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var w = o.value
                w != null
                  ? Ln(i, !!o.multiple, w, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Ln(i, !!o.multiple, o.defaultValue, !0)
                      : Ln(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[Br] = o
          } catch (v) {
            G(e, e.return, v)
          }
      }
      break
    case 6:
      if ((Qe(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (v) {
          G(e, e.return, v)
        }
      }
      break
    case 3:
      if (
        (Qe(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ur(t.containerInfo)
        } catch (v) {
          G(e, e.return, v)
        }
      break
    case 4:
      Qe(t, e), lt(e)
      break
    case 13:
      Qe(t, e),
        lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Xu = X())),
        r & 4 && Dc(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ye = (a = ye) || c), Qe(t, e), (ye = a)) : Qe(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (O = e, c = e.child; c !== null; ) {
            for (f = O = c; O !== null; ) {
              switch (((y = O), (w = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, y, y.return)
                  break
                case 1:
                  Nn(y, y.return)
                  var g = y.stateNode
                  if (typeof g.componentWillUnmount == 'function') {
                    ;(r = y), (n = y.return)
                    try {
                      ;(t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount()
                    } catch (v) {
                      G(r, n, v)
                    }
                  }
                  break
                case 5:
                  Nn(y, y.return)
                  break
                case 22:
                  if (y.memoizedState !== null) {
                    Mc(f)
                    continue
                  }
              }
              w !== null ? ((w.return = y), (O = w)) : Mc(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (l.style.display = nd('display', s)))
              } catch (v) {
                G(e, e.return, v)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps
              } catch (v) {
                G(e, e.return, v)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      Qe(t, e), lt(e), r & 4 && Dc(e)
      break
    case 21:
      break
    default:
      Qe(t, e), lt(e)
  }
}
function lt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Op(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(k(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (Pr(i, ''), (r.flags &= -33))
          var o = Uc(e)
          Hl(e, o, i)
          break
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Uc(e)
          Wl(e, l, s)
          break
        default:
          throw Error(k(161))
      }
    } catch (u) {
      G(e, e.return, u)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function Fg(e, t, n) {
  ;(O = e), Lp(e)
}
function Lp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || wi
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || ye
        l = wi
        var a = ye
        if (((wi = s), (ye = u) && !a))
          for (O = i; O !== null; )
            (s = O),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? $c(i)
                : u !== null
                ? ((u.return = s), (O = u))
                : $c(i)
        for (; o !== null; ) (O = o), Lp(o), (o = o.sibling)
        ;(O = i), (wi = l), (ye = a)
      }
      Ic(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : Ic(e)
  }
}
function Ic(e) {
  for (; O !== null; ) {
    var t = O
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ye || jo(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ye)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Je(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  )
                }
              var o = t.updateQueue
              o !== null && Sc(t, o, r)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Sc(t, s, n)
              }
              break
            case 5:
              var l = t.stateNode
              if (n === null && t.flags & 4) {
                n = l
                var u = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus()
                    break
                  case 'img':
                    u.src && (n.src = u.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate
                if (a !== null) {
                  var c = a.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && Ur(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(k(163))
          }
        ye || (t.flags & 512 && bl(t))
      } catch (y) {
        G(t, t.return, y)
      }
    }
    if (t === e) {
      O = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function Mc(e) {
  for (; O !== null; ) {
    var t = O
    if (t === e) {
      O = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function $c(e) {
  for (; O !== null; ) {
    var t = O
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            jo(4, t)
          } catch (u) {
            G(t, n, u)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (u) {
              G(t, i, u)
            }
          }
          var o = t.return
          try {
            bl(t)
          } catch (u) {
            G(t, o, u)
          }
          break
        case 5:
          var s = t.return
          try {
            bl(t)
          } catch (u) {
            G(t, s, u)
          }
      }
    } catch (u) {
      G(t, t.return, u)
    }
    if (t === e) {
      O = null
      break
    }
    var l = t.sibling
    if (l !== null) {
      ;(l.return = t.return), (O = l)
      break
    }
    O = t.return
  }
}
var zg = Math.ceil,
  fo = _t.ReactCurrentDispatcher,
  Gu = _t.ReactCurrentOwner,
  be = _t.ReactCurrentBatchConfig,
  M = 0,
  ae = null,
  Z = null,
  de = 0,
  Ae = 0,
  Pn = Yt(0),
  oe = 0,
  Hr = null,
  dn = 0,
  Uo = 0,
  Yu = 0,
  Tr = null,
  Re = null,
  Xu = 0,
  Wn = 1 / 0,
  ht = null,
  po = !1,
  ql = null,
  zt = null,
  Si = !1,
  Ut = null,
  ho = 0,
  Or = 0,
  Kl = null,
  Ii = -1,
  Mi = 0
function xe() {
  return M & 6 ? X() : Ii !== -1 ? Ii : (Ii = X())
}
function Vt(e) {
  return e.mode & 1
    ? M & 2 && de !== 0
      ? de & -de
      : kg.transition !== null
      ? (Mi === 0 && (Mi = md()), Mi)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xd(e.type))),
        e)
    : 1
}
function tt(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (Kl = null), Error(k(185)))
  Gr(e, n, r),
    (!(M & 2) || e !== ae) &&
      (e === ae && (!(M & 2) && (Uo |= n), oe === 4 && At(e, de)),
      Pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((Wn = X() + 500), Po && Xt()))
}
function Pe(e, t) {
  var n = e.callbackNode
  ky(e, t)
  var r = Gi(e, e === ae ? de : 0)
  if (r === 0)
    n !== null && Ka(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ka(n), t === 1))
      e.tag === 0 ? Cg(Bc.bind(null, e)) : zd(Bc.bind(null, e)),
        wg(function () {
          !(M & 6) && Xt()
        }),
        (n = null)
    else {
      switch (yd(r)) {
        case 1:
          n = ku
          break
        case 4:
          n = pd
          break
        case 16:
          n = Ji
          break
        case 536870912:
          n = hd
          break
        default:
          n = Ji
      }
      n = Bp(n, Ap.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Ap(e, t) {
  if (((Ii = -1), (Mi = 0), M & 6)) throw Error(k(327))
  var n = e.callbackNode
  if (In() && e.callbackNode !== n) return null
  var r = Gi(e, e === ae ? de : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = mo(e, r)
  else {
    t = r
    var i = M
    M |= 2
    var o = Up()
    ;(ae !== e || de !== t) && ((ht = null), (Wn = X() + 500), ln(e, t))
    do
      try {
        Wg()
        break
      } catch (l) {
        jp(e, l)
      }
    while (1)
    Mu(),
      (fo.current = o),
      (M = i),
      Z !== null ? (t = 0) : ((ae = null), (de = 0), (t = oe))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Sl(e)), i !== 0 && ((r = i), (t = Ql(e, i)))), t === 1)
    )
      throw ((n = Hr), ln(e, 0), At(e, r), Pe(e, X()), n)
    if (t === 6) At(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Vg(i) &&
          ((t = mo(e, r)),
          t === 2 && ((o = Sl(e)), o !== 0 && ((r = o), (t = Ql(e, o)))),
          t === 1))
      )
        throw ((n = Hr), ln(e, 0), At(e, r), Pe(e, X()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345))
        case 2:
          nn(e, Re, ht)
          break
        case 3:
          if (
            (At(e, r), (r & 130023424) === r && ((t = Xu + 500 - X()), 10 < t))
          ) {
            if (Gi(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = Ol(nn.bind(null, e, Re, ht), t)
            break
          }
          nn(e, Re, ht)
          break
        case 4:
          if ((At(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - et(r)
            ;(o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o)
          }
          if (
            ((r = i),
            (r = X() - r),
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
                : 1960 * zg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ol(nn.bind(null, e, Re, ht), r)
            break
          }
          nn(e, Re, ht)
          break
        case 5:
          nn(e, Re, ht)
          break
        default:
          throw Error(k(329))
      }
    }
  }
  return Pe(e, X()), e.callbackNode === n ? Ap.bind(null, e) : null
}
function Ql(e, t) {
  var n = Tr
  return (
    e.current.memoizedState.isDehydrated && (ln(e, t).flags |= 256),
    (e = mo(e, t)),
    e !== 2 && ((t = Re), (Re = n), t !== null && Jl(t)),
    e
  )
}
function Jl(e) {
  Re === null ? (Re = e) : Re.push.apply(Re, e)
}
function Vg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!it(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function At(e, t) {
  for (
    t &= ~Yu,
      t &= ~Uo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - et(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function Bc(e) {
  if (M & 6) throw Error(k(327))
  In()
  var t = Gi(e, 0)
  if (!(t & 1)) return Pe(e, X()), null
  var n = mo(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Sl(e)
    r !== 0 && ((t = r), (n = Ql(e, r)))
  }
  if (n === 1) throw ((n = Hr), ln(e, 0), At(e, t), Pe(e, X()), n)
  if (n === 6) throw Error(k(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Re, ht),
    Pe(e, X()),
    null
  )
}
function Zu(e, t) {
  var n = M
  M |= 1
  try {
    return e(t)
  } finally {
    ;(M = n), M === 0 && ((Wn = X() + 500), Po && Xt())
  }
}
function pn(e) {
  Ut !== null && Ut.tag === 0 && !(M & 6) && In()
  var t = M
  M |= 1
  var n = be.transition,
    r = $
  try {
    if (((be.transition = null), ($ = 1), e)) return e()
  } finally {
    ;($ = r), (be.transition = n), (M = t), !(M & 6) && Xt()
  }
}
function ea() {
  ;(Ae = Pn.current), b(Pn)
}
function ln(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), vg(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n
      switch ((Uu(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && to()
          break
        case 3:
          Vn(), b(Oe), b(ge), bu()
          break
        case 5:
          Vu(r)
          break
        case 4:
          Vn()
          break
        case 13:
          b(q)
          break
        case 19:
          b(q)
          break
        case 10:
          $u(r.type._context)
          break
        case 22:
        case 23:
          ea()
      }
      n = n.return
    }
  if (
    ((ae = e),
    (Z = e = bt(e.current, null)),
    (de = Ae = t),
    (oe = 0),
    (Hr = null),
    (Yu = Uo = dn = 0),
    (Re = Tr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var s = o.next
          ;(o.next = i), (r.next = s)
        }
        n.pending = r
      }
    on = null
  }
  return e
}
function jp(e, t) {
  do {
    var n = Z
    try {
      if ((Mu(), (ji.current = co), ao)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        ao = !1
      }
      if (
        ((fn = 0),
        (le = ie = K = null),
        (_r = !1),
        (Vr = 0),
        (Gu.current = null),
        n === null || n.return === null)
      ) {
        ;(oe = 1), (Hr = t), (Z = null)
        break
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t
        if (
          ((t = de),
          (l.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            c = l,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var y = c.alternate
            y
              ? ((c.updateQueue = y.updateQueue),
                (c.memoizedState = y.memoizedState),
                (c.lanes = y.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var w = Rc(s)
          if (w !== null) {
            ;(w.flags &= -257),
              Tc(w, s, l, o, t),
              w.mode & 1 && _c(o, a, t),
              (t = w),
              (u = a)
            var g = t.updateQueue
            if (g === null) {
              var v = new Set()
              v.add(u), (t.updateQueue = v)
            } else g.add(u)
            break e
          } else {
            if (!(t & 1)) {
              _c(o, a, t), ta()
              break e
            }
            u = Error(k(426))
          }
        } else if (W && l.mode & 1) {
          var C = Rc(s)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Tc(C, s, l, o, t),
              Du(bn(u, l))
            break e
          }
        }
        ;(o = u = bn(u, l)),
          oe !== 4 && (oe = 2),
          Tr === null ? (Tr = [o]) : Tr.push(o),
          (o = s)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var h = yp(o, u, t)
              wc(o, h)
              break e
            case 1:
              l = u
              var d = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (zt === null || !zt.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var E = gp(o, l, t)
                wc(o, E)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      Ip(n)
    } catch (_) {
      ;(t = _), Z === n && n !== null && (Z = n = n.return)
      continue
    }
    break
  } while (1)
}
function Up() {
  var e = fo.current
  return (fo.current = co), e === null ? co : e
}
function ta() {
  ;(oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || (!(dn & 268435455) && !(Uo & 268435455)) || At(ae, de)
}
function mo(e, t) {
  var n = M
  M |= 2
  var r = Up()
  ;(ae !== e || de !== t) && ((ht = null), ln(e, t))
  do
    try {
      bg()
      break
    } catch (i) {
      jp(e, i)
    }
  while (1)
  if ((Mu(), (M = n), (fo.current = r), Z !== null)) throw Error(k(261))
  return (ae = null), (de = 0), oe
}
function bg() {
  for (; Z !== null; ) Dp(Z)
}
function Wg() {
  for (; Z !== null && !my(); ) Dp(Z)
}
function Dp(e) {
  var t = $p(e.alternate, e, Ae)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Ip(e) : (Z = t),
    (Gu.current = null)
}
function Ip(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Mg(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Z = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(oe = 6), (Z = null)
        return
      }
    } else if (((n = Ig(n, t, Ae)), n !== null)) {
      Z = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Z = t
      return
    }
    Z = t = e
  } while (t !== null)
  oe === 0 && (oe = 5)
}
function nn(e, t, n) {
  var r = $,
    i = be.transition
  try {
    ;(be.transition = null), ($ = 1), Hg(e, t, n, r)
  } finally {
    ;(be.transition = i), ($ = r)
  }
  return null
}
function Hg(e, t, n, r) {
  do In()
  while (Ut !== null)
  if (M & 6) throw Error(k(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (_y(e, o),
    e === ae && ((Z = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Si ||
      ((Si = !0),
      Bp(Ji, function () {
        return In(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = be.transition), (be.transition = null)
    var s = $
    $ = 1
    var l = M
    ;(M |= 4),
      (Gu.current = null),
      Bg(e, n),
      Pp(n, e),
      fg(Rl),
      (Yi = !!_l),
      (Rl = _l = null),
      (e.current = n),
      Fg(n),
      yy(),
      (M = l),
      ($ = s),
      (be.transition = o)
  } else e.current = n
  if (
    (Si && ((Si = !1), (Ut = e), (ho = i)),
    (o = e.pendingLanes),
    o === 0 && (zt = null),
    wy(n.stateNode),
    Pe(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (po) throw ((po = !1), (e = ql), (ql = null), e)
  return (
    ho & 1 && e.tag !== 0 && In(),
    (o = e.pendingLanes),
    o & 1 ? (e === Kl ? Or++ : ((Or = 0), (Kl = e))) : (Or = 0),
    Xt(),
    null
  )
}
function In() {
  if (Ut !== null) {
    var e = yd(ho),
      t = be.transition,
      n = $
    try {
      if (((be.transition = null), ($ = 16 > e ? 16 : e), Ut === null))
        var r = !1
      else {
        if (((e = Ut), (Ut = null), (ho = 0), M & 6)) throw Error(k(331))
        var i = M
        for (M |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child
          if (O.flags & 16) {
            var l = o.deletions
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u]
                for (O = a; O !== null; ) {
                  var c = O
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (O = f)
                  else
                    for (; O !== null; ) {
                      c = O
                      var y = c.sibling,
                        w = c.return
                      if ((Tp(c), c === a)) {
                        O = null
                        break
                      }
                      if (y !== null) {
                        ;(y.return = w), (O = y)
                        break
                      }
                      O = w
                    }
                }
              }
              var g = o.alternate
              if (g !== null) {
                var v = g.child
                if (v !== null) {
                  g.child = null
                  do {
                    var C = v.sibling
                    ;(v.sibling = null), (v = C)
                  } while (v !== null)
                }
              }
              O = o
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s)
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, o, o.return)
                }
              var h = o.sibling
              if (h !== null) {
                ;(h.return = o.return), (O = h)
                break e
              }
              O = o.return
            }
        }
        var d = e.current
        for (O = d; O !== null; ) {
          s = O
          var m = s.child
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (O = m)
          else
            e: for (s = d; O !== null; ) {
              if (((l = O), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jo(9, l)
                  }
                } catch (_) {
                  G(l, l.return, _)
                }
              if (l === s) {
                O = null
                break e
              }
              var E = l.sibling
              if (E !== null) {
                ;(E.return = l.return), (O = E)
                break e
              }
              O = l.return
            }
        }
        if (
          ((M = i), Xt(), ct && typeof ct.onPostCommitFiberRoot == 'function')
        )
          try {
            ct.onPostCommitFiberRoot(_o, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;($ = n), (be.transition = t)
    }
  }
  return !1
}
function Fc(e, t, n) {
  ;(t = bn(n, t)),
    (t = yp(e, t, 1)),
    (e = Ft(e, t, 1)),
    (t = xe()),
    e !== null && (Gr(e, 1, t), Pe(e, t))
}
function G(e, t, n) {
  if (e.tag === 3) Fc(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fc(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (zt === null || !zt.has(r)))
        ) {
          ;(e = bn(n, e)),
            (e = gp(t, e, 1)),
            (t = Ft(t, e, 1)),
            (e = xe()),
            t !== null && (Gr(t, 1, e), Pe(t, e))
          break
        }
      }
      t = t.return
    }
}
function qg(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > X() - Xu)
        ? ln(e, 0)
        : (Yu |= n)),
    Pe(e, t)
}
function Mp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ci), (ci <<= 1), !(ci & 130023424) && (ci = 4194304))
      : (t = 1))
  var n = xe()
  ;(e = xt(e, t)), e !== null && (Gr(e, t, n), Pe(e, n))
}
function Kg(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Mp(e, n)
}
function Qg(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(k(314))
  }
  r !== null && r.delete(t), Mp(e, n)
}
var $p
$p = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Oe.current) Te = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Te = !1), Dg(e, t, n)
      Te = !!(e.flags & 131072)
    }
  else (Te = !1), W && t.flags & 1048576 && Vd(t, io, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Di(e, t), (e = t.pendingProps)
      var i = Bn(t, ge.current)
      Dn(t, n), (i = Hu(null, t, r, e, i, n))
      var o = qu()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((o = !0), no(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fu(t),
            (i.updater = Ao),
            (t.stateNode = i),
            (i._reactInternals = t),
            Dl(t, r, e, n),
            (t = $l(null, t, r, !0, o, n)))
          : ((t.tag = 0), W && o && ju(t), Ee(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Di(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Gg(r)),
          (e = Je(r, e)),
          i)
        ) {
          case 0:
            t = Ml(null, t, r, e, n)
            break e
          case 1:
            t = Pc(null, t, r, e, n)
            break e
          case 11:
            t = Oc(null, t, r, e, n)
            break e
          case 14:
            t = Nc(null, t, r, Je(r.type, e), n)
            break e
        }
        throw Error(k(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Ml(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Pc(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((Ep(t), e === null)) throw Error(k(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Qd(e, t),
          lo(t, r, null, n)
        var s = t.memoizedState
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = bn(Error(k(423)), t)), (t = Lc(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = bn(Error(k(424)), t)), (t = Lc(e, t, r, n, i))
            break e
          } else
            for (
              je = Bt(t.stateNode.containerInfo.firstChild),
                Ue = t,
                W = !0,
                Ze = null,
                n = qd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Fn(), r === i)) {
            t = Ct(e, t, n)
            break e
          }
          Ee(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        Jd(t),
        e === null && Al(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Tl(r, i) ? (s = null) : o !== null && Tl(r, o) && (t.flags |= 32),
        Sp(e, t),
        Ee(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && Al(t), null
    case 13:
      return xp(e, t, n)
    case 4:
      return (
        zu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = zn(t, null, r, n)) : Ee(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Oc(e, t, r, i, n)
      )
    case 7:
      return Ee(e, t, t.pendingProps, n), t.child
    case 8:
      return Ee(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ee(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          z(oo, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (it(o.value, s)) {
            if (o.children === i.children && !Oe.current) {
              t = Ct(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies
              if (l !== null) {
                s = o.child
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ;(u = vt(-1, n & -n)), (u.tag = 2)
                      var a = o.updateQueue
                      if (a !== null) {
                        a = a.shared
                        var c = a.pending
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u)
                      }
                    }
                    ;(o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      jl(o.return, n, t),
                      (l.lanes |= n)
                    break
                  }
                  u = u.next
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341))
                ;(s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  jl(s, n, t),
                  (s = o.sibling)
              } else s = o.child
              if (s !== null) s.return = o
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((o = s.sibling), o !== null)) {
                    ;(o.return = s.return), (s = o)
                    break
                  }
                  s = s.return
                }
              o = s
            }
        Ee(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ee(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = Je(r, t.pendingProps)),
        (i = Je(r.type, i)),
        Nc(e, t, r, i, n)
      )
    case 15:
      return vp(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Je(r, i)),
        Di(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), no(t)) : (e = !1),
        Dn(t, n),
        mp(t, r, i),
        Dl(t, r, i, n),
        $l(null, t, r, !0, e, n)
      )
    case 19:
      return Cp(e, t, n)
    case 22:
      return wp(e, t, n)
  }
  throw Error(k(156, t.tag))
}
function Bp(e, t) {
  return dd(e, t)
}
function Jg(e, t, n, r) {
  ;(this.tag = e),
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
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Ve(e, t, n, r) {
  return new Jg(e, t, n, r)
}
function na(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Gg(e) {
  if (typeof e == 'function') return na(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Eu)) return 11
    if (e === xu) return 14
  }
  return 2
}
function bt(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function $i(e, t, n, r, i, o) {
  var s = 2
  if (((r = e), typeof e == 'function')) na(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case Sn:
        return un(n.children, i, o, t)
      case Su:
        ;(s = 8), (i |= 8)
        break
      case ol:
        return (e = Ve(12, n, t, i | 2)), (e.elementType = ol), (e.lanes = o), e
      case sl:
        return (e = Ve(13, n, t, i)), (e.elementType = sl), (e.lanes = o), e
      case ll:
        return (e = Ve(19, n, t, i)), (e.elementType = ll), (e.lanes = o), e
      case Jf:
        return Do(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Kf:
              s = 10
              break e
            case Qf:
              s = 9
              break e
            case Eu:
              s = 11
              break e
            case xu:
              s = 14
              break e
            case Nt:
              ;(s = 16), (r = null)
              break e
          }
        throw Error(k(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ve(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function un(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e
}
function Do(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = Jf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function qs(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e
}
function Ks(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Yg(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ts(0)),
    (this.expirationTimes = Ts(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ts(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function ra(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new Yg(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ve(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fu(o),
    e
  )
}
function Xg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: wn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Fp(e) {
  if (!e) return Kt
  e = e._reactInternals
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(k(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(k(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Ne(n)) return Fd(e, n, t)
  }
  return t
}
function zp(e, t, n, r, i, o, s, l, u) {
  return (
    (e = ra(n, r, !0, e, i, o, s, l, u)),
    (e.context = Fp(null)),
    (n = e.current),
    (r = xe()),
    (i = Vt(n)),
    (o = vt(r, i)),
    (o.callback = t ?? null),
    Ft(n, o, i),
    (e.current.lanes = i),
    Gr(e, i, r),
    Pe(e, r),
    e
  )
}
function Io(e, t, n, r) {
  var i = t.current,
    o = xe(),
    s = Vt(i)
  return (
    (n = Fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = vt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ft(i, t, s)),
    e !== null && (tt(e, i, s, o), Ai(e, i, s)),
    s
  )
}
function yo(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function zc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function ia(e, t) {
  zc(e, t), (e = e.alternate) && zc(e, t)
}
function Zg() {
  return null
}
var Vp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function oa(e) {
  this._internalRoot = e
}
Mo.prototype.render = oa.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(k(409))
  Io(e, t, null, null)
}
Mo.prototype.unmount = oa.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    pn(function () {
      Io(null, e, null, null)
    }),
      (t[Et] = null)
  }
}
function Mo(e) {
  this._internalRoot = e
}
Mo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wd()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++);
    Lt.splice(n, 0, e), n === 0 && Ed(e)
  }
}
function sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function $o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Vc() {}
function ev(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var a = yo(s)
        o.call(a)
      }
    }
    var s = zp(t, r, e, 0, null, !1, !1, '', Vc)
    return (
      (e._reactRootContainer = s),
      (e[Et] = s.current),
      Mr(e.nodeType === 8 ? e.parentNode : e),
      pn(),
      s
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var l = r
    r = function () {
      var a = yo(u)
      l.call(a)
    }
  }
  var u = ra(e, 0, !1, null, null, !1, !1, '', Vc)
  return (
    (e._reactRootContainer = u),
    (e[Et] = u.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    pn(function () {
      Io(t, u, n, r)
    }),
    u
  )
}
function Bo(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var s = o
    if (typeof i == 'function') {
      var l = i
      i = function () {
        var u = yo(s)
        l.call(u)
      }
    }
    Io(t, s, e, i)
  } else s = ev(n, t, e, i, r)
  return yo(s)
}
gd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = gr(t.pendingLanes)
        n !== 0 &&
          (_u(t, n | 1), Pe(t, X()), !(M & 6) && ((Wn = X() + 500), Xt()))
      }
      break
    case 13:
      pn(function () {
        var r = xt(e, 1)
        if (r !== null) {
          var i = xe()
          tt(r, e, 1, i)
        }
      }),
        ia(e, 1)
  }
}
Ru = function (e) {
  if (e.tag === 13) {
    var t = xt(e, 134217728)
    if (t !== null) {
      var n = xe()
      tt(t, e, 134217728, n)
    }
    ia(e, 134217728)
  }
}
vd = function (e) {
  if (e.tag === 13) {
    var t = Vt(e),
      n = xt(e, t)
    if (n !== null) {
      var r = xe()
      tt(n, e, t, r)
    }
    ia(e, t)
  }
}
wd = function () {
  return $
}
Sd = function (e, t) {
  var n = $
  try {
    return ($ = e), t()
  } finally {
    $ = n
  }
}
gl = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((cl(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = No(r)
            if (!i) throw Error(k(90))
            Yf(r), cl(r, i)
          }
        }
      }
      break
    case 'textarea':
      Zf(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Ln(e, !!n.multiple, t, !1)
  }
}
sd = Zu
ld = pn
var tv = { usingClientEntryPoint: !1, Events: [Xr, kn, No, id, od, Zu] },
  dr = {
    findFiberByHostInstance: rn,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  nv = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cd(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || Zg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Ei.isDisabled && Ei.supportsFiber)
    try {
      ;(_o = Ei.inject(nv)), (ct = Ei)
    } catch {}
}
Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tv
Ie.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!sa(t)) throw Error(k(200))
  return Xg(e, t, null, n)
}
Ie.createRoot = function (e, t) {
  if (!sa(e)) throw Error(k(299))
  var n = !1,
    r = '',
    i = Vp
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, r, i)),
    (e[Et] = t.current),
    Mr(e.nodeType === 8 ? e.parentNode : e),
    new oa(t)
  )
}
Ie.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)))
  return (e = cd(t)), (e = e === null ? null : e.stateNode), e
}
Ie.flushSync = function (e) {
  return pn(e)
}
Ie.hydrate = function (e, t, n) {
  if (!$o(t)) throw Error(k(200))
  return Bo(null, e, t, !0, n)
}
Ie.hydrateRoot = function (e, t, n) {
  if (!sa(e)) throw Error(k(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    s = Vp
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = zp(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Et] = t.current),
    Mr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new Mo(t)
}
Ie.render = function (e, t, n) {
  if (!$o(t)) throw Error(k(200))
  return Bo(null, e, t, !1, n)
}
Ie.unmountComponentAtNode = function (e) {
  if (!$o(e)) throw Error(k(40))
  return e._reactRootContainer
    ? (pn(function () {
        Bo(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Et] = null)
        })
      }),
      !0)
    : !1
}
Ie.unstable_batchedUpdates = Zu
Ie.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!$o(n)) throw Error(k(200))
  if (e == null || e._reactInternals === void 0) throw Error(k(38))
  return Bo(e, t, n, !1, r)
}
Ie.version = '18.3.1-next-f1338f8080-20240426'
function bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bp)
    } catch (e) {
      console.error(e)
    }
}
bp(), (bf.exports = Ie)
var Wp = bf.exports,
  bc = Wp
;(rl.createRoot = bc.createRoot), (rl.hydrateRoot = bc.hydrateRoot)
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qr() {
  return (
    (qr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    qr.apply(this, arguments)
  )
}
var Dt
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Dt || (Dt = {}))
const Wc = 'popstate'
function rv(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location
    return Gl(
      '',
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : go(i)
  }
  return ov(t, n, null, e)
}
function Q(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Hp(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function iv() {
  return Math.random().toString(36).substr(2, 8)
}
function Hc(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    qr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Yn(t) : t,
      { state: n, key: (t && t.key) || r || iv() }
    )
  )
}
function go(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function Yn(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function ov(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Dt.Pop,
    u = null,
    a = c()
  a == null && ((a = 0), s.replaceState(qr({}, s.state, { idx: a }), ''))
  function c() {
    return (s.state || { idx: null }).idx
  }
  function f() {
    l = Dt.Pop
    let C = c(),
      h = C == null ? null : C - a
    ;(a = C), u && u({ action: l, location: v.location, delta: h })
  }
  function y(C, h) {
    l = Dt.Push
    let d = Gl(v.location, C, h)
    n && n(d, C), (a = c() + 1)
    let m = Hc(d, a),
      E = v.createHref(d)
    try {
      s.pushState(m, '', E)
    } catch (_) {
      if (_ instanceof DOMException && _.name === 'DataCloneError') throw _
      i.location.assign(E)
    }
    o && u && u({ action: l, location: v.location, delta: 1 })
  }
  function w(C, h) {
    l = Dt.Replace
    let d = Gl(v.location, C, h)
    n && n(d, C), (a = c())
    let m = Hc(d, a),
      E = v.createHref(d)
    s.replaceState(m, '', E),
      o && u && u({ action: l, location: v.location, delta: 0 })
  }
  function g(C) {
    let h = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      d = typeof C == 'string' ? C : go(C)
    return (
      (d = d.replace(/ $/, '%20')),
      Q(
        h,
        'No window.location.(origin|href) available to create URL for href: ' +
          d
      ),
      new URL(d, h)
    )
  }
  let v = {
    get action() {
      return l
    },
    get location() {
      return e(i, s)
    },
    listen(C) {
      if (u) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(Wc, f),
        (u = C),
        () => {
          i.removeEventListener(Wc, f), (u = null)
        }
      )
    },
    createHref(C) {
      return t(i, C)
    },
    createURL: g,
    encodeLocation(C) {
      let h = g(C)
      return { pathname: h.pathname, search: h.search, hash: h.hash }
    },
    push: y,
    replace: w,
    go(C) {
      return s.go(C)
    },
  }
  return v
}
var qc
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(qc || (qc = {}))
function sv(e, t, n) {
  n === void 0 && (n = '/')
  let r = typeof t == 'string' ? Yn(t) : t,
    i = Hn(r.pathname || '/', n)
  if (i == null) return null
  let o = qp(e)
  lv(o)
  let s = null
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = vv(i)
    s = yv(o[l], u)
  }
  return s
}
function qp(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || '' : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    }
    u.relativePath.startsWith('/') &&
      (Q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)))
    let a = Wt([r, u.relativePath]),
      c = n.concat(u)
    o.children &&
      o.children.length > 0 &&
      (Q(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      qp(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: hv(a, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, s) => {
      var l
      if (o.path === '' || !((l = o.path) != null && l.includes('?'))) i(o, s)
      else for (let u of Kp(o.path)) i(o, s, u)
    }),
    t
  )
}
function Kp(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let s = Kp(r.join('/')),
    l = []
  return (
    l.push(...s.map((u) => (u === '' ? o : [o, u].join('/')))),
    i && l.push(...s),
    l.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  )
}
function lv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : mv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  )
}
const uv = /^:[\w-]+$/,
  av = 3,
  cv = 2,
  fv = 1,
  dv = 10,
  pv = -2,
  Kc = (e) => e === '*'
function hv(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(Kc) && (r += pv),
    t && (r += cv),
    n
      .filter((i) => !Kc(i))
      .reduce((i, o) => i + (uv.test(o) ? av : o === '' ? fv : dv), r)
  )
}
function mv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function yv(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = '/',
    o = []
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      a = i === '/' ? t : t.slice(i.length) || '/',
      c = Yl(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        a
      )
    if (!c) return null
    Object.assign(r, c.params)
    let f = l.route
    o.push({
      params: r,
      pathname: Wt([i, c.pathname]),
      pathnameBase: xv(Wt([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== '/' && (i = Wt([i, c.pathnameBase]))
  }
  return o
}
function Yl(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = gv(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    s = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1)
  return {
    params: r.reduce((a, c, f) => {
      let { paramName: y, isOptional: w } = c
      if (y === '*') {
        let v = l[f] || ''
        s = o.slice(0, o.length - v.length).replace(/(.)\/+$/, '$1')
      }
      const g = l[f]
      return (
        w && !g ? (a[y] = void 0) : (a[y] = (g || '').replace(/%2F/g, '/')), a
      )
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  }
}
function gv(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Hp(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (i += '\\/*$')
      : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function vv(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Hp(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function Hn(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function wv(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? Yn(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : Sv(n, t)) : t,
    search: Cv(r),
    hash: kv(i),
  }
}
function Sv(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function Qs(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function Ev(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  )
}
function la(e, t) {
  let n = Ev(e)
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function ua(e, t, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof e == 'string'
    ? (i = Yn(e))
    : ((i = qr({}, e)),
      Q(
        !i.pathname || !i.pathname.includes('?'),
        Qs('?', 'pathname', 'search', i)
      ),
      Q(
        !i.pathname || !i.pathname.includes('#'),
        Qs('#', 'pathname', 'hash', i)
      ),
      Q(!i.search || !i.search.includes('#'), Qs('#', 'search', 'hash', i)))
  let o = e === '' || i.pathname === '',
    s = o ? '/' : i.pathname,
    l
  if (s == null) l = n
  else {
    let f = t.length - 1
    if (!r && s.startsWith('..')) {
      let y = s.split('/')
      for (; y[0] === '..'; ) y.shift(), (f -= 1)
      i.pathname = y.join('/')
    }
    l = f >= 0 ? t[f] : '/'
  }
  let u = wv(i, l),
    a = s && s !== '/' && s.endsWith('/'),
    c = (o || s === '.') && n.endsWith('/')
  return !u.pathname.endsWith('/') && (a || c) && (u.pathname += '/'), u
}
const Wt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  xv = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Cv = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  kv = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function _v(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Qp = ['post', 'put', 'patch', 'delete']
new Set(Qp)
const Rv = ['get', ...Qp]
new Set(Rv)
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Kr() {
  return (
    (Kr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Kr.apply(this, arguments)
  )
}
const Fo = x.createContext(null),
  Jp = x.createContext(null),
  Rt = x.createContext(null),
  zo = x.createContext(null),
  pt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gp = x.createContext(null)
function Tv(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  Xn() || Q(!1)
  let { basename: r, navigator: i } = x.useContext(Rt),
    { hash: o, pathname: s, search: l } = Vo(e, { relative: n }),
    u = s
  return (
    r !== '/' && (u = s === '/' ? r : Wt([r, s])),
    i.createHref({ pathname: u, search: l, hash: o })
  )
}
function Xn() {
  return x.useContext(zo) != null
}
function Zn() {
  return Xn() || Q(!1), x.useContext(zo).location
}
function Yp(e) {
  x.useContext(Rt).static || x.useLayoutEffect(e)
}
function ei() {
  let { isDataRoute: e } = x.useContext(pt)
  return e ? Vv() : Ov()
}
function Ov() {
  Xn() || Q(!1)
  let e = x.useContext(Fo),
    { basename: t, future: n, navigator: r } = x.useContext(Rt),
    { matches: i } = x.useContext(pt),
    { pathname: o } = Zn(),
    s = JSON.stringify(la(i, n.v7_relativeSplatPath)),
    l = x.useRef(!1)
  return (
    Yp(() => {
      l.current = !0
    }),
    x.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !l.current)) return
        if (typeof a == 'number') {
          r.go(a)
          return
        }
        let f = ua(a, JSON.parse(s), o, c.relative === 'path')
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : Wt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c)
      },
      [t, r, s, o, e]
    )
  )
}
const Nv = x.createContext(null)
function Pv(e) {
  let t = x.useContext(pt).outlet
  return t && x.createElement(Nv.Provider, { value: e }, t)
}
function Xp() {
  let { matches: e } = x.useContext(pt),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function Vo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(Rt),
    { matches: i } = x.useContext(pt),
    { pathname: o } = Zn(),
    s = JSON.stringify(la(i, r.v7_relativeSplatPath))
  return x.useMemo(() => ua(e, JSON.parse(s), o, n === 'path'), [e, s, o, n])
}
function Lv(e, t) {
  return Av(e, t)
}
function Av(e, t, n, r) {
  Xn() || Q(!1)
  let { navigator: i } = x.useContext(Rt),
    { matches: o } = x.useContext(pt),
    s = o[o.length - 1],
    l = s ? s.params : {}
  s && s.pathname
  let u = s ? s.pathnameBase : '/'
  s && s.route
  let a = Zn(),
    c
  if (t) {
    var f
    let C = typeof t == 'string' ? Yn(t) : t
    u === '/' || ((f = C.pathname) != null && f.startsWith(u)) || Q(!1), (c = C)
  } else c = a
  let y = c.pathname || '/',
    w = y
  if (u !== '/') {
    let C = u.replace(/^\//, '').split('/')
    w = '/' + y.replace(/^\//, '').split('/').slice(C.length).join('/')
  }
  let g = sv(e, { pathname: w }),
    v = Mv(
      g &&
        g.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, l, C.params),
            pathname: Wt([
              u,
              i.encodeLocation
                ? i.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === '/'
                ? u
                : Wt([
                    u,
                    i.encodeLocation
                      ? i.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    )
  return t && v
    ? x.createElement(
        zo.Provider,
        {
          value: {
            location: Kr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c
            ),
            navigationType: Dt.Pop,
          },
        },
        v
      )
    : v
}
function jv() {
  let e = zv(),
    t = _v(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null
  return x.createElement(
    x.Fragment,
    null,
    x.createElement('h2', null, 'Unexpected Application Error!'),
    x.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? x.createElement('pre', { style: i }, n) : null,
    o
  )
}
const Uv = x.createElement(jv, null)
class Dv extends x.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          pt.Provider,
          { value: this.props.routeContext },
          x.createElement(Gp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children
  }
}
function Iv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(Fo)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(pt.Provider, { value: t }, r)
  )
}
function Mv(e, t, n, r) {
  var i
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if ((o = n) != null && o.errors) e = n.matches
    else return null
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    )
    c >= 0 || Q(!1), (s = s.slice(0, Math.min(s.length, c + 1)))
  }
  let u = !1,
    a = -1
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c]
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = c),
        f.route.id)
      ) {
        let { loaderData: y, errors: w } = n,
          g =
            f.route.loader &&
            y[f.route.id] === void 0 &&
            (!w || w[f.route.id] === void 0)
        if (f.route.lazy || g) {
          ;(u = !0), a >= 0 ? (s = s.slice(0, a + 1)) : (s = [s[0]])
          break
        }
      }
    }
  return s.reduceRight((c, f, y) => {
    let w,
      g = !1,
      v = null,
      C = null
    n &&
      ((w = l && f.route.id ? l[f.route.id] : void 0),
      (v = f.route.errorElement || Uv),
      u &&
        (a < 0 && y === 0
          ? (bv('route-fallback', !1), (g = !0), (C = null))
          : a === y &&
            ((g = !0), (C = f.route.hydrateFallbackElement || null))))
    let h = t.concat(s.slice(0, y + 1)),
      d = () => {
        let m
        return (
          w
            ? (m = v)
            : g
            ? (m = C)
            : f.route.Component
            ? (m = x.createElement(f.route.Component, null))
            : f.route.element
            ? (m = f.route.element)
            : (m = c),
          x.createElement(Iv, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || y === 0)
      ? x.createElement(Dv, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: w,
          children: d(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : d()
  }, null)
}
var Zp = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(Zp || {}),
  vo = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(vo || {})
function $v(e) {
  let t = x.useContext(Fo)
  return t || Q(!1), t
}
function Bv(e) {
  let t = x.useContext(Jp)
  return t || Q(!1), t
}
function Fv(e) {
  let t = x.useContext(pt)
  return t || Q(!1), t
}
function eh(e) {
  let t = Fv(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || Q(!1), n.route.id
}
function zv() {
  var e
  let t = x.useContext(Gp),
    n = Bv(vo.UseRouteError),
    r = eh(vo.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function Vv() {
  let { router: e } = $v(Zp.UseNavigateStable),
    t = eh(vo.UseNavigateStable),
    n = x.useRef(!1)
  return (
    Yp(() => {
      n.current = !0
    }),
    x.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, Kr({ fromRouteId: t }, o)))
      },
      [e, t]
    )
  )
}
const Qc = {}
function bv(e, t, n) {
  !t && !Qc[e] && (Qc[e] = !0)
}
function Wv(e) {
  let { to: t, replace: n, state: r, relative: i } = e
  Xn() || Q(!1)
  let { future: o, static: s } = x.useContext(Rt),
    { matches: l } = x.useContext(pt),
    { pathname: u } = Zn(),
    a = ei(),
    c = ua(t, la(l, o.v7_relativeSplatPath), u, i === 'path'),
    f = JSON.stringify(c)
  return (
    x.useEffect(
      () => a(JSON.parse(f), { replace: n, state: r, relative: i }),
      [a, f, i, n, r]
    ),
    null
  )
}
function th(e) {
  return Pv(e.context)
}
function _e(e) {
  Q(!1)
}
function Hv(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = Dt.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e
  Xn() && Q(!1)
  let u = t.replace(/^\/*/, '/'),
    a = x.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Kr({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, o, s]
    )
  typeof r == 'string' && (r = Yn(r))
  let {
      pathname: c = '/',
      search: f = '',
      hash: y = '',
      state: w = null,
      key: g = 'default',
    } = r,
    v = x.useMemo(() => {
      let C = Hn(c, u)
      return C == null
        ? null
        : {
            location: { pathname: C, search: f, hash: y, state: w, key: g },
            navigationType: i,
          }
    }, [u, c, f, y, w, g, i])
  return v == null
    ? null
    : x.createElement(
        Rt.Provider,
        { value: a },
        x.createElement(zo.Provider, { children: n, value: v })
      )
}
function qv(e) {
  let { children: t, location: n } = e
  return Lv(Xl(t), n)
}
new Promise(() => {})
function Xl(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return
      let o = [...t, i]
      if (r.type === x.Fragment) {
        n.push.apply(n, Xl(r.props.children, o))
        return
      }
      r.type !== _e && Q(!1), !r.props.index || !r.props.children || Q(!1)
      let s = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (s.children = Xl(r.props.children, o)), n.push(s)
    }),
    n
  )
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function wo() {
  return (
    (wo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    wo.apply(this, arguments)
  )
}
function nh(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function Kv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Qv(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Kv(e)
}
const Jv = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Gv = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  Yv = '6'
try {
  window.__reactRouterVersion = Yv
} catch {}
const Xv = x.createContext({ isTransitioning: !1 }),
  Zv = 'startTransition',
  Jc = qm[Zv]
function e0(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef()
  o.current == null && (o.current = rv({ window: i, v5Compat: !0 }))
  let s = o.current,
    [l, u] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: a } = r || {},
    c = x.useCallback(
      (f) => {
        a && Jc ? Jc(() => u(f)) : u(f)
      },
      [u, a]
    )
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.createElement(Hv, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  )
}
const t0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  n0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qt = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: a,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      y = nh(t, Jv),
      { basename: w } = x.useContext(Rt),
      g,
      v = !1
    if (typeof a == 'string' && n0.test(a) && ((g = a), t0))
      try {
        let m = new URL(window.location.href),
          E = a.startsWith('//') ? new URL(m.protocol + a) : new URL(a),
          _ = Hn(E.pathname, w)
        E.origin === m.origin && _ != null
          ? (a = _ + E.search + E.hash)
          : (v = !0)
      } catch {}
    let C = Tv(a, { relative: i }),
      h = i0(a, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      })
    function d(m) {
      r && r(m), m.defaultPrevented || h(m)
    }
    return x.createElement(
      'a',
      wo({}, y, { href: g || C, onClick: v || o ? r : d, ref: n, target: u })
    )
  }),
  Ye = x.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: i = !1,
        className: o = '',
        end: s = !1,
        style: l,
        to: u,
        unstable_viewTransition: a,
        children: c,
      } = t,
      f = nh(t, Gv),
      y = Vo(u, { relative: f.relative }),
      w = Zn(),
      g = x.useContext(Jp),
      { navigator: v, basename: C } = x.useContext(Rt),
      h = g != null && o0(y) && a === !0,
      d = v.encodeLocation ? v.encodeLocation(y).pathname : y.pathname,
      m = w.pathname,
      E =
        g && g.navigation && g.navigation.location
          ? g.navigation.location.pathname
          : null
    i ||
      ((m = m.toLowerCase()),
      (E = E ? E.toLowerCase() : null),
      (d = d.toLowerCase())),
      E && C && (E = Hn(E, C) || E)
    const _ = d !== '/' && d.endsWith('/') ? d.length - 1 : d.length
    let R = m === d || (!s && m.startsWith(d) && m.charAt(_) === '/'),
      T =
        E != null &&
        (E === d || (!s && E.startsWith(d) && E.charAt(d.length) === '/')),
      P = { isActive: R, isPending: T, isTransitioning: h },
      H = R ? r : void 0,
      j
    typeof o == 'function'
      ? (j = o(P))
      : (j = [
          o,
          R ? 'active' : null,
          T ? 'pending' : null,
          h ? 'transitioning' : null,
        ]
          .filter(Boolean)
          .join(' '))
    let Le = typeof l == 'function' ? l(P) : l
    return x.createElement(
      Qt,
      wo({}, f, {
        'aria-current': H,
        className: j,
        ref: n,
        style: Le,
        to: u,
        unstable_viewTransition: a,
      }),
      typeof c == 'function' ? c(P) : c
    )
  })
var Zl
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Zl || (Zl = {}))
var Gc
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Gc || (Gc = {}))
function r0(e) {
  let t = x.useContext(Fo)
  return t || Q(!1), t
}
function i0(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = ei(),
    a = Zn(),
    c = Vo(e, { relative: s })
  return x.useCallback(
    (f) => {
      if (Qv(f, n)) {
        f.preventDefault()
        let y = r !== void 0 ? r : go(a) === go(c)
        u(e, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        })
      }
    },
    [a, u, c, r, i, n, e, o, s, l]
  )
}
function o0(e, t) {
  t === void 0 && (t = {})
  let n = x.useContext(Xv)
  n == null && Q(!1)
  let { basename: r } = r0(Zl.useViewTransitionState),
    i = Vo(e, { relative: t.relative })
  if (!n.isTransitioning) return !1
  let o = Hn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    s = Hn(n.nextLocation.pathname, r) || n.nextLocation.pathname
  return Yl(i.pathname, s) != null || Yl(i.pathname, o) != null
}
var rh = { exports: {} },
  ih = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qn = x
function s0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var l0 = typeof Object.is == 'function' ? Object.is : s0,
  u0 = qn.useState,
  a0 = qn.useEffect,
  c0 = qn.useLayoutEffect,
  f0 = qn.useDebugValue
function d0(e, t) {
  var n = t(),
    r = u0({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1]
  return (
    c0(
      function () {
        ;(i.value = n), (i.getSnapshot = t), Js(i) && o({ inst: i })
      },
      [e, n, t]
    ),
    a0(
      function () {
        return (
          Js(i) && o({ inst: i }),
          e(function () {
            Js(i) && o({ inst: i })
          })
        )
      },
      [e]
    ),
    f0(n),
    n
  )
}
function Js(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !l0(e, n)
  } catch {
    return !0
  }
}
function p0(e, t) {
  return t()
}
var h0 =
  typeof window > 'u' ||
  typeof window.document > 'u' ||
  typeof window.document.createElement > 'u'
    ? p0
    : d0
ih.useSyncExternalStore =
  qn.useSyncExternalStore !== void 0 ? qn.useSyncExternalStore : h0
rh.exports = ih
var m0 = rh.exports,
  oh = { exports: {} },
  sh = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bo = x,
  y0 = m0
function g0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var v0 = typeof Object.is == 'function' ? Object.is : g0,
  w0 = y0.useSyncExternalStore,
  S0 = bo.useRef,
  E0 = bo.useEffect,
  x0 = bo.useMemo,
  C0 = bo.useDebugValue
sh.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = S0(null)
  if (o.current === null) {
    var s = { hasValue: !1, value: null }
    o.current = s
  } else s = o.current
  o = x0(
    function () {
      function u(w) {
        if (!a) {
          if (((a = !0), (c = w), (w = r(w)), i !== void 0 && s.hasValue)) {
            var g = s.value
            if (i(g, w)) return (f = g)
          }
          return (f = w)
        }
        if (((g = f), v0(c, w))) return g
        var v = r(w)
        return i !== void 0 && i(g, v) ? g : ((c = w), (f = v))
      }
      var a = !1,
        c,
        f,
        y = n === void 0 ? null : n
      return [
        function () {
          return u(t())
        },
        y === null
          ? void 0
          : function () {
              return u(y())
            },
      ]
    },
    [t, n, r, i]
  )
  var l = w0(e, o[0], o[1])
  return (
    E0(
      function () {
        ;(s.hasValue = !0), (s.value = l)
      },
      [l]
    ),
    C0(l),
    l
  )
}
oh.exports = sh
var k0 = oh.exports
function _0(e) {
  e()
}
let lh = _0
const R0 = (e) => (lh = e),
  T0 = () => lh,
  Yc = Symbol.for('react-redux-context'),
  Xc = typeof globalThis < 'u' ? globalThis : {}
function O0() {
  var e
  if (!x.createContext) return {}
  const t = (e = Xc[Yc]) != null ? e : (Xc[Yc] = new Map())
  let n = t.get(x.createContext)
  return n || ((n = x.createContext(null)), t.set(x.createContext, n)), n
}
const Jt = O0()
function aa(e = Jt) {
  return function () {
    return x.useContext(e)
  }
}
const uh = aa(),
  N0 = () => {
    throw new Error('uSES not initialized!')
  }
let ah = N0
const P0 = (e) => {
    ah = e
  },
  L0 = (e, t) => e === t
function A0(e = Jt) {
  const t = e === Jt ? uh : aa(e)
  return function (r, i = {}) {
    const {
        equalityFn: o = L0,
        stabilityCheck: s = void 0,
        noopCheck: l = void 0,
      } = typeof i == 'function' ? { equalityFn: i } : i,
      {
        store: u,
        subscription: a,
        getServerState: c,
        stabilityCheck: f,
        noopCheck: y,
      } = t()
    x.useRef(!0)
    const w = x.useCallback(
        {
          [r.name](v) {
            return r(v)
          },
        }[r.name],
        [r, f, s]
      ),
      g = ah(a.addNestedSub, u.getState, c || u.getState, w, o)
    return x.useDebugValue(g), g
  }
}
const ot = A0()
var ch = { exports: {} },
  B = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ce = typeof Symbol == 'function' && Symbol.for,
  ca = ce ? Symbol.for('react.element') : 60103,
  fa = ce ? Symbol.for('react.portal') : 60106,
  Wo = ce ? Symbol.for('react.fragment') : 60107,
  Ho = ce ? Symbol.for('react.strict_mode') : 60108,
  qo = ce ? Symbol.for('react.profiler') : 60114,
  Ko = ce ? Symbol.for('react.provider') : 60109,
  Qo = ce ? Symbol.for('react.context') : 60110,
  da = ce ? Symbol.for('react.async_mode') : 60111,
  Jo = ce ? Symbol.for('react.concurrent_mode') : 60111,
  Go = ce ? Symbol.for('react.forward_ref') : 60112,
  Yo = ce ? Symbol.for('react.suspense') : 60113,
  j0 = ce ? Symbol.for('react.suspense_list') : 60120,
  Xo = ce ? Symbol.for('react.memo') : 60115,
  Zo = ce ? Symbol.for('react.lazy') : 60116,
  U0 = ce ? Symbol.for('react.block') : 60121,
  D0 = ce ? Symbol.for('react.fundamental') : 60117,
  I0 = ce ? Symbol.for('react.responder') : 60118,
  M0 = ce ? Symbol.for('react.scope') : 60119
function $e(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case ca:
        switch (((e = e.type), e)) {
          case da:
          case Jo:
          case Wo:
          case qo:
          case Ho:
          case Yo:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qo:
              case Go:
              case Zo:
              case Xo:
              case Ko:
                return e
              default:
                return t
            }
        }
      case fa:
        return t
    }
  }
}
function fh(e) {
  return $e(e) === Jo
}
B.AsyncMode = da
B.ConcurrentMode = Jo
B.ContextConsumer = Qo
B.ContextProvider = Ko
B.Element = ca
B.ForwardRef = Go
B.Fragment = Wo
B.Lazy = Zo
B.Memo = Xo
B.Portal = fa
B.Profiler = qo
B.StrictMode = Ho
B.Suspense = Yo
B.isAsyncMode = function (e) {
  return fh(e) || $e(e) === da
}
B.isConcurrentMode = fh
B.isContextConsumer = function (e) {
  return $e(e) === Qo
}
B.isContextProvider = function (e) {
  return $e(e) === Ko
}
B.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ca
}
B.isForwardRef = function (e) {
  return $e(e) === Go
}
B.isFragment = function (e) {
  return $e(e) === Wo
}
B.isLazy = function (e) {
  return $e(e) === Zo
}
B.isMemo = function (e) {
  return $e(e) === Xo
}
B.isPortal = function (e) {
  return $e(e) === fa
}
B.isProfiler = function (e) {
  return $e(e) === qo
}
B.isStrictMode = function (e) {
  return $e(e) === Ho
}
B.isSuspense = function (e) {
  return $e(e) === Yo
}
B.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Wo ||
    e === Jo ||
    e === qo ||
    e === Ho ||
    e === Yo ||
    e === j0 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Zo ||
        e.$$typeof === Xo ||
        e.$$typeof === Ko ||
        e.$$typeof === Qo ||
        e.$$typeof === Go ||
        e.$$typeof === D0 ||
        e.$$typeof === I0 ||
        e.$$typeof === M0 ||
        e.$$typeof === U0))
  )
}
B.typeOf = $e
ch.exports = B
var $0 = ch.exports,
  dh = $0,
  B0 = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  F0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ph = {}
ph[dh.ForwardRef] = B0
ph[dh.Memo] = F0
var F = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pa = Symbol.for('react.element'),
  ha = Symbol.for('react.portal'),
  es = Symbol.for('react.fragment'),
  ts = Symbol.for('react.strict_mode'),
  ns = Symbol.for('react.profiler'),
  rs = Symbol.for('react.provider'),
  is = Symbol.for('react.context'),
  z0 = Symbol.for('react.server_context'),
  os = Symbol.for('react.forward_ref'),
  ss = Symbol.for('react.suspense'),
  ls = Symbol.for('react.suspense_list'),
  us = Symbol.for('react.memo'),
  as = Symbol.for('react.lazy'),
  V0 = Symbol.for('react.offscreen'),
  hh
hh = Symbol.for('react.module.reference')
function Ke(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case pa:
        switch (((e = e.type), e)) {
          case es:
          case ns:
          case ts:
          case ss:
          case ls:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case z0:
              case is:
              case os:
              case as:
              case us:
              case rs:
                return e
              default:
                return t
            }
        }
      case ha:
        return t
    }
  }
}
F.ContextConsumer = is
F.ContextProvider = rs
F.Element = pa
F.ForwardRef = os
F.Fragment = es
F.Lazy = as
F.Memo = us
F.Portal = ha
F.Profiler = ns
F.StrictMode = ts
F.Suspense = ss
F.SuspenseList = ls
F.isAsyncMode = function () {
  return !1
}
F.isConcurrentMode = function () {
  return !1
}
F.isContextConsumer = function (e) {
  return Ke(e) === is
}
F.isContextProvider = function (e) {
  return Ke(e) === rs
}
F.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === pa
}
F.isForwardRef = function (e) {
  return Ke(e) === os
}
F.isFragment = function (e) {
  return Ke(e) === es
}
F.isLazy = function (e) {
  return Ke(e) === as
}
F.isMemo = function (e) {
  return Ke(e) === us
}
F.isPortal = function (e) {
  return Ke(e) === ha
}
F.isProfiler = function (e) {
  return Ke(e) === ns
}
F.isStrictMode = function (e) {
  return Ke(e) === ts
}
F.isSuspense = function (e) {
  return Ke(e) === ss
}
F.isSuspenseList = function (e) {
  return Ke(e) === ls
}
F.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === es ||
    e === ns ||
    e === ts ||
    e === ss ||
    e === ls ||
    e === V0 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === as ||
        e.$$typeof === us ||
        e.$$typeof === rs ||
        e.$$typeof === is ||
        e.$$typeof === os ||
        e.$$typeof === hh ||
        e.getModuleId !== void 0))
  )
}
F.typeOf = Ke
function b0() {
  const e = T0()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let r = t
        for (; r; ) r.callback(), (r = r.next)
      })
    },
    get() {
      let r = [],
        i = t
      for (; i; ) r.push(i), (i = i.next)
      return r
    },
    subscribe(r) {
      let i = !0,
        o = (n = { callback: r, next: null, prev: n })
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !i ||
            t === null ||
            ((i = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next))
        }
      )
    },
  }
}
const Zc = { notify() {}, get: () => [] }
function W0(e, t) {
  let n,
    r = Zc,
    i = 0,
    o = !1
  function s(v) {
    c()
    const C = r.subscribe(v)
    let h = !1
    return () => {
      h || ((h = !0), C(), f())
    }
  }
  function l() {
    r.notify()
  }
  function u() {
    g.onStateChange && g.onStateChange()
  }
  function a() {
    return o
  }
  function c() {
    i++, n || ((n = t ? t.addNestedSub(u) : e.subscribe(u)), (r = b0()))
  }
  function f() {
    i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = Zc))
  }
  function y() {
    o || ((o = !0), c())
  }
  function w() {
    o && ((o = !1), f())
  }
  const g = {
    addNestedSub: s,
    notifyNestedSubs: l,
    handleChangeWrapper: u,
    isSubscribed: a,
    trySubscribe: y,
    tryUnsubscribe: w,
    getListeners: () => r,
  }
  return g
}
const H0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  q0 = H0 ? x.useLayoutEffect : x.useEffect
function K0({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = 'once',
  noopCheck: o = 'once',
}) {
  const s = x.useMemo(() => {
      const a = W0(e)
      return {
        store: e,
        subscription: a,
        getServerState: r ? () => r : void 0,
        stabilityCheck: i,
        noopCheck: o,
      }
    }, [e, r, i, o]),
    l = x.useMemo(() => e.getState(), [e])
  q0(() => {
    const { subscription: a } = s
    return (
      (a.onStateChange = a.notifyNestedSubs),
      a.trySubscribe(),
      l !== e.getState() && a.notifyNestedSubs(),
      () => {
        a.tryUnsubscribe(), (a.onStateChange = void 0)
      }
    )
  }, [s, l])
  const u = t || Jt
  return x.createElement(u.Provider, { value: s }, n)
}
function mh(e = Jt) {
  const t = e === Jt ? uh : aa(e)
  return function () {
    const { store: r } = t()
    return r
  }
}
const Q0 = mh()
function J0(e = Jt) {
  const t = e === Jt ? Q0 : mh(e)
  return function () {
    return t().dispatch
  }
}
const G0 = J0()
P0(k0.useSyncExternalStoreWithSelector)
R0(Wp.unstable_batchedUpdates)
function Se(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var ef = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  Gs = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  So = {
    INIT: '@@redux/INIT' + Gs(),
    REPLACE: '@@redux/REPLACE' + Gs(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + Gs()
    },
  }
function Y0(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function yh(e, t, n) {
  var r
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(Se(0))
  if (
    (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
    typeof n < 'u')
  ) {
    if (typeof n != 'function') throw new Error(Se(1))
    return n(yh)(e, t)
  }
  if (typeof e != 'function') throw new Error(Se(2))
  var i = e,
    o = t,
    s = [],
    l = s,
    u = !1
  function a() {
    l === s && (l = s.slice())
  }
  function c() {
    if (u) throw new Error(Se(3))
    return o
  }
  function f(v) {
    if (typeof v != 'function') throw new Error(Se(4))
    if (u) throw new Error(Se(5))
    var C = !0
    return (
      a(),
      l.push(v),
      function () {
        if (C) {
          if (u) throw new Error(Se(6))
          ;(C = !1), a()
          var d = l.indexOf(v)
          l.splice(d, 1), (s = null)
        }
      }
    )
  }
  function y(v) {
    if (!Y0(v)) throw new Error(Se(7))
    if (typeof v.type > 'u') throw new Error(Se(8))
    if (u) throw new Error(Se(9))
    try {
      ;(u = !0), (o = i(o, v))
    } finally {
      u = !1
    }
    for (var C = (s = l), h = 0; h < C.length; h++) {
      var d = C[h]
      d()
    }
    return v
  }
  function w(v) {
    if (typeof v != 'function') throw new Error(Se(10))
    ;(i = v), y({ type: So.REPLACE })
  }
  function g() {
    var v,
      C = f
    return (
      (v = {
        subscribe: function (d) {
          if (typeof d != 'object' || d === null) throw new Error(Se(11))
          function m() {
            d.next && d.next(c())
          }
          m()
          var E = C(m)
          return { unsubscribe: E }
        },
      }),
      (v[ef] = function () {
        return this
      }),
      v
    )
  }
  return (
    y({ type: So.INIT }),
    (r = { dispatch: y, subscribe: f, getState: c, replaceReducer: w }),
    (r[ef] = g),
    r
  )
}
var X0 = yh
function Z0(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      r = n(void 0, { type: So.INIT })
    if (typeof r > 'u') throw new Error(Se(12))
    if (typeof n(void 0, { type: So.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(Se(13))
  })
}
function e1(e) {
  for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
    var i = t[r]
    typeof e[i] == 'function' && (n[i] = e[i])
  }
  var o = Object.keys(n),
    s
  try {
    Z0(n)
  } catch (l) {
    s = l
  }
  return function (u, a) {
    if ((u === void 0 && (u = {}), s)) throw s
    for (var c = !1, f = {}, y = 0; y < o.length; y++) {
      var w = o[y],
        g = n[w],
        v = u[w],
        C = g(v, a)
      if (typeof C > 'u') throw (a && a.type, new Error(Se(14)))
      ;(f[w] = C), (c = c || C !== v)
    }
    return (c = c || o.length !== Object.keys(u).length), c ? f : u
  }
}
const gh = 'SET_homeS',
  vh = 'SET_home',
  wh = 'REMOVE_home',
  Sh = 'ADD_home',
  Eh = 'UPDATE_home',
  xh = 'ADD_home_MSG',
  t1 = { homes: [], home: null }
function n1(e = t1, t) {
  var n = e,
    r
  switch (t.type) {
    case gh:
      n = { ...e, homes: t.homes }
      break
    case vh:
      n = { ...e, home: t.home }
      break
    case wh:
      const i = e.homes.find((o) => o._id === t.homeId)
      ;(r = e.homes.filter((o) => o._id !== t.homeId)),
        (n = { ...e, homes: r, lastRemovedhome: i })
      break
    case Sh:
      n = { ...e, homes: [...e.homes, t.home] }
      break
    case Eh:
      ;(r = e.homes.map((o) => (o._id === t.home._id ? t.home : o))),
        (n = { ...e, homes: r })
      break
    case xh:
      n = { ...e, home: { ...e.home, msgs: [...(e.home.msgs || []), t.msg] } }
      break
  }
  return n
}
const ve = { query: ti, get: r1, post: i1, put: o1, remove: s1 }
function ti(e, t = 500) {
  var n = JSON.parse(localStorage.getItem(e)) || []
  return new Promise((r) => setTimeout(() => r(n), t))
}
function r1(e, t) {
  return ti(e).then((n) => {
    const r = n.find((i) => i._id === t)
    if (!r)
      throw new Error(`Get failed, cannot find entity with id: ${t} in: ${e}`)
    return r
  })
}
function i1(e, t) {
  return (t._id = l1()), ti(e).then((n) => (n.push(t), ma(e, n), t))
}
function o1(e, t) {
  return ti(e).then((n) => {
    const r = n.findIndex((o) => o._id === t._id)
    if (r < 0)
      throw new Error(
        `Update failed, cannot find entity with id: ${t._id} in: ${e}`
      )
    const i = { ...n[r], ...t }
    return n.splice(r, 1, i), ma(e, n), i
  })
}
function s1(e, t) {
  return ti(e).then((n) => {
    const r = n.findIndex((i) => i._id === t)
    if (r < 0)
      throw new Error(
        `Remove failed, cannot find entity with id: ${t} in: ${e}`
      )
    n.splice(r, 1), ma(e, n)
  })
}
function ma(e, t) {
  localStorage.setItem(e, JSON.stringify(t))
}
function l1(e = 5) {
  for (
    var t = '',
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      r = 0;
    r < e;
    r++
  )
    t += n.charAt(Math.floor(Math.random() * n.length))
  return t
}
const ya = 'loggedinUser',
  u1 = {
    login: p1,
    logout: m1,
    signup: h1,
    getUsers: a1,
    getById: c1,
    remove: f1,
    update: d1,
    getLoggedinUser: Ch,
  }
function a1() {
  return ve.query('user')
}
async function c1(e) {
  return await ve.get('user', e)
}
function f1(e) {
  return ve.remove('user', e)
}
async function d1({ _id: e, score: t }) {
  const n = await ve.get('user', e)
  return (n.score = t), await ve.put('user', n), Ch()._id === n._id && ga(n), n
}
async function p1(e) {
  const n = (await ve.query('user')).find((r) => r.username === e.username)
  if (n) return ga(n)
}
async function h1(e) {
  e.imgUrl ||
    (e.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'),
    (e.score = 1e4)
  const t = await ve.post('user', e)
  return ga(t)
}
async function m1() {
  sessionStorage.removeItem(ya)
}
function Ch() {
  return JSON.parse(sessionStorage.getItem(ya))
}
function ga(e) {
  return (
    (e = {
      _id: e._id,
      fullname: e.fullname,
      imgUrl: e.imgUrl,
      score: e.score,
      isAdmin: e.isAdmin,
    }),
    sessionStorage.setItem(ya, JSON.stringify(e)),
    e
  )
}
function kh(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: y1 } = Object.prototype,
  { getPrototypeOf: va } = Object,
  cs = ((e) => (t) => {
    const n = y1.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  st = (e) => ((e = e.toLowerCase()), (t) => cs(t) === e),
  fs = (e) => (t) => typeof t === e,
  { isArray: er } = Array,
  Qr = fs('undefined')
function g1(e) {
  return (
    e !== null &&
    !Qr(e) &&
    e.constructor !== null &&
    !Qr(e.constructor) &&
    We(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const _h = st('ArrayBuffer')
function v1(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && _h(e.buffer)),
    t
  )
}
const w1 = fs('string'),
  We = fs('function'),
  Rh = fs('number'),
  ds = (e) => e !== null && typeof e == 'object',
  S1 = (e) => e === !0 || e === !1,
  Bi = (e) => {
    if (cs(e) !== 'object') return !1
    const t = va(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  E1 = st('Date'),
  x1 = st('File'),
  C1 = st('Blob'),
  k1 = st('FileList'),
  _1 = (e) => ds(e) && We(e.pipe),
  R1 = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (We(e.append) &&
          ((t = cs(e)) === 'formdata' ||
            (t === 'object' &&
              We(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  T1 = st('URLSearchParams'),
  [O1, N1, P1, L1] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(
    st
  ),
  A1 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function ni(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let r, i
  if ((typeof e != 'object' && (e = [e]), er(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length
    let l
    for (r = 0; r < s; r++) (l = o[r]), t.call(null, e[l], l, e)
  }
}
function Th(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    i
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i
  return null
}
const Oh = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  Nh = (e) => !Qr(e) && e !== Oh
function eu() {
  const { caseless: e } = (Nh(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Th(t, i)) || i
      Bi(t[o]) && Bi(r)
        ? (t[o] = eu(t[o], r))
        : Bi(r)
        ? (t[o] = eu({}, r))
        : er(r)
        ? (t[o] = r.slice())
        : (t[o] = r)
    }
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && ni(arguments[r], n)
  return t
}
const j1 = (e, t, n, { allOwnKeys: r } = {}) => (
    ni(
      t,
      (i, o) => {
        n && We(i) ? (e[o] = kh(i, n)) : (e[o] = i)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  U1 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  D1 = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  I1 = (e, t, n, r) => {
    let i, o, s
    const l = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !l[s] && ((t[s] = e[s]), (l[s] = !0))
      e = n !== !1 && va(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  M1 = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  $1 = (e) => {
    if (!e) return null
    if (er(e)) return e
    let t = e.length
    if (!Rh(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  B1 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && va(Uint8Array)),
  F1 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let i
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value
      t.call(e, o[0], o[1])
    }
  },
  z1 = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  V1 = st('HTMLFormElement'),
  b1 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i
    }),
  tf = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  W1 = st('RegExp'),
  Ph = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    ni(n, (i, o) => {
      let s
      ;(s = t(i, o, e)) !== !1 && (r[o] = s || i)
    }),
      Object.defineProperties(e, r)
  },
  H1 = (e) => {
    Ph(e, (t, n) => {
      if (We(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const r = e[n]
      if (We(r)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  q1 = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0
        })
      }
    return er(e) ? r(e) : r(String(e).split(t)), n
  },
  K1 = () => {},
  Q1 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ys = 'abcdefghijklmnopqrstuvwxyz',
  nf = '0123456789',
  Lh = { DIGIT: nf, ALPHA: Ys, ALPHA_DIGIT: Ys + Ys.toUpperCase() + nf },
  J1 = (e = 16, t = Lh.ALPHA_DIGIT) => {
    let n = ''
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function G1(e) {
  return !!(
    e &&
    We(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const Y1 = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (ds(r)) {
          if (t.indexOf(r) >= 0) return
          if (!('toJSON' in r)) {
            t[i] = r
            const o = er(r) ? [] : {}
            return (
              ni(r, (s, l) => {
                const u = n(s, i + 1)
                !Qr(u) && (o[l] = u)
              }),
              (t[i] = void 0),
              o
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  X1 = st('AsyncFunction'),
  Z1 = (e) => e && (ds(e) || We(e)) && We(e.then) && We(e.catch),
  S = {
    isArray: er,
    isArrayBuffer: _h,
    isBuffer: g1,
    isFormData: R1,
    isArrayBufferView: v1,
    isString: w1,
    isNumber: Rh,
    isBoolean: S1,
    isObject: ds,
    isPlainObject: Bi,
    isReadableStream: O1,
    isRequest: N1,
    isResponse: P1,
    isHeaders: L1,
    isUndefined: Qr,
    isDate: E1,
    isFile: x1,
    isBlob: C1,
    isRegExp: W1,
    isFunction: We,
    isStream: _1,
    isURLSearchParams: T1,
    isTypedArray: B1,
    isFileList: k1,
    forEach: ni,
    merge: eu,
    extend: j1,
    trim: A1,
    stripBOM: U1,
    inherits: D1,
    toFlatObject: I1,
    kindOf: cs,
    kindOfTest: st,
    endsWith: M1,
    toArray: $1,
    forEachEntry: F1,
    matchAll: z1,
    isHTMLForm: V1,
    hasOwnProperty: tf,
    hasOwnProp: tf,
    reduceDescriptors: Ph,
    freezeMethods: H1,
    toObjectSet: q1,
    toCamelCase: b1,
    noop: K1,
    toFiniteNumber: Q1,
    findKey: Th,
    global: Oh,
    isContextDefined: Nh,
    ALPHABET: Lh,
    generateString: J1,
    isSpecCompliantForm: G1,
    toJSONObject: Y1,
    isAsyncFn: X1,
    isThenable: Z1,
  }
function L(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
S.inherits(L, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: S.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    }
  },
})
const Ah = L.prototype,
  jh = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL',
].forEach((e) => {
  jh[e] = { value: e }
})
Object.defineProperties(L, jh)
Object.defineProperty(Ah, 'isAxiosError', { value: !0 })
L.from = (e, t, n, r, i, o) => {
  const s = Object.create(Ah)
  return (
    S.toFlatObject(
      e,
      s,
      function (u) {
        return u !== Error.prototype
      },
      (l) => l !== 'isAxiosError'
    ),
    L.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  )
}
const ew = null
function tu(e) {
  return S.isPlainObject(e) || S.isArray(e)
}
function Uh(e) {
  return S.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function rf(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Uh(i)), !n && o ? '[' + i + ']' : i
        })
        .join(n ? '.' : '')
    : t
}
function tw(e) {
  return S.isArray(e) && !e.some(tu)
}
const nw = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function ps(e, t, n) {
  if (!S.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, C) {
        return !S.isUndefined(C[v])
      }
    ))
  const r = n.metaTokens,
    i = n.visitor || c,
    o = n.dots,
    s = n.indexes,
    u = (n.Blob || (typeof Blob < 'u' && Blob)) && S.isSpecCompliantForm(t)
  if (!S.isFunction(i)) throw new TypeError('visitor must be a function')
  function a(g) {
    if (g === null) return ''
    if (S.isDate(g)) return g.toISOString()
    if (!u && S.isBlob(g))
      throw new L('Blob is not supported. Use a Buffer instead.')
    return S.isArrayBuffer(g) || S.isTypedArray(g)
      ? u && typeof Blob == 'function'
        ? new Blob([g])
        : Buffer.from(g)
      : g
  }
  function c(g, v, C) {
    let h = g
    if (g && !C && typeof g == 'object') {
      if (S.endsWith(v, '{}'))
        (v = r ? v : v.slice(0, -2)), (g = JSON.stringify(g))
      else if (
        (S.isArray(g) && tw(g)) ||
        ((S.isFileList(g) || S.endsWith(v, '[]')) && (h = S.toArray(g)))
      )
        return (
          (v = Uh(v)),
          h.forEach(function (m, E) {
            !(S.isUndefined(m) || m === null) &&
              t.append(
                s === !0 ? rf([v], E, o) : s === null ? v : v + '[]',
                a(m)
              )
          }),
          !1
        )
    }
    return tu(g) ? !0 : (t.append(rf(C, v, o), a(g)), !1)
  }
  const f = [],
    y = Object.assign(nw, {
      defaultVisitor: c,
      convertValue: a,
      isVisitable: tu,
    })
  function w(g, v) {
    if (!S.isUndefined(g)) {
      if (f.indexOf(g) !== -1)
        throw Error('Circular reference detected in ' + v.join('.'))
      f.push(g),
        S.forEach(g, function (h, d) {
          ;(!(S.isUndefined(h) || h === null) &&
            i.call(t, h, S.isString(d) ? d.trim() : d, v, y)) === !0 &&
            w(h, v ? v.concat(d) : [d])
        }),
        f.pop()
    }
  }
  if (!S.isObject(e)) throw new TypeError('data must be an object')
  return w(e), t
}
function of(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0',
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function wa(e, t) {
  ;(this._pairs = []), e && ps(e, this, t)
}
const Dh = wa.prototype
Dh.append = function (t, n) {
  this._pairs.push([t, n])
}
Dh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, of)
      }
    : of
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1])
    }, '')
    .join('&')
}
function rw(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Ih(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || rw,
    i = n && n.serialize
  let o
  if (
    (i
      ? (o = i(t, n))
      : (o = S.isURLSearchParams(t) ? t.toString() : new wa(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf('#')
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class iw {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const sf = iw,
  Mh = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  ow = typeof URLSearchParams < 'u' ? URLSearchParams : wa,
  sw = typeof FormData < 'u' ? FormData : null,
  lw = typeof Blob < 'u' ? Blob : null,
  uw = {
    isBrowser: !0,
    classes: { URLSearchParams: ow, FormData: sw, Blob: lw },
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  },
  Sa = typeof window < 'u' && typeof document < 'u',
  aw = ((e) => Sa && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
    typeof navigator < 'u' && navigator.product
  ),
  cw = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  fw = (Sa && window.location.href) || 'http://localhost',
  dw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Sa,
        hasStandardBrowserEnv: aw,
        hasStandardBrowserWebWorkerEnv: cw,
        origin: fw,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  nt = { ...dw, ...uw }
function pw(e, t) {
  return ps(
    e,
    new nt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return nt.isNode && S.isBuffer(n)
            ? (this.append(r, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function hw(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === '[]' ? '' : t[1] || t[0]
  )
}
function mw(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const i = n.length
  let o
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o])
  return t
}
function $h(e) {
  function t(n, r, i, o) {
    let s = n[o++]
    if (s === '__proto__') return !0
    const l = Number.isFinite(+s),
      u = o >= n.length
    return (
      (s = !s && S.isArray(i) ? i.length : s),
      u
        ? (S.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !l)
        : ((!i[s] || !S.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && S.isArray(i[s]) && (i[s] = mw(i[s])),
          !l)
    )
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {}
    return (
      S.forEachEntry(e, (r, i) => {
        t(hw(r), i, n, 0)
      }),
      n
    )
  }
  return null
}
function yw(e, t, n) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e)
    } catch (r) {
      if (r.name !== 'SyntaxError') throw r
    }
  return (n || JSON.stringify)(e)
}
const Ea = {
  transitional: Mh,
  adapter: ['xhr', 'http', 'fetch'],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || '',
        i = r.indexOf('application/json') > -1,
        o = S.isObject(t)
      if ((o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i ? JSON.stringify($h(t)) : t
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t
      if (S.isArrayBufferView(t)) return t.buffer
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let l
      if (o) {
        if (r.indexOf('application/x-www-form-urlencoded') > -1)
          return pw(t, this.formSerializer).toString()
        if ((l = S.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
          const u = this.env && this.env.FormData
          return ps(l ? { 'files[]': t } : t, u && new u(), this.formSerializer)
        }
      }
      return o || i ? (n.setContentType('application/json', !1), yw(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Ea.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === 'json'
      if (S.isResponse(t) || S.isReadableStream(t)) return t
      if (t && S.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i
        try {
          return JSON.parse(t)
        } catch (l) {
          if (s)
            throw l.name === 'SyntaxError'
              ? L.from(l, L.ERR_BAD_RESPONSE, this, null, this.response)
              : l
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: nt.classes.FormData, Blob: nt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': void 0,
    },
  },
}
S.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
  Ea.headers[e] = {}
})
const xa = Ea,
  gw = S.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]),
  vw = (e) => {
    const t = {}
    let n, r, i
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            ;(i = s.indexOf(':')),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && gw[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ', ' + r : r))
          }),
      t
    )
  },
  lf = Symbol('internals')
function pr(e) {
  return e && String(e).trim().toLowerCase()
}
function Fi(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Fi) : String(e)
}
function ww(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const Sw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Xs(e, t, n, r, i) {
  if (S.isFunction(r)) return r.call(this, t, n)
  if ((i && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1
    if (S.isRegExp(r)) return r.test(t)
  }
}
function Ew(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function xw(e, t) {
  const n = S.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s)
      },
      configurable: !0,
    })
  })
}
class hs {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const i = this
    function o(l, u, a) {
      const c = pr(u)
      if (!c) throw new Error('header name must be a non-empty string')
      const f = S.findKey(i, c)
      ;(!f || i[f] === void 0 || a === !0 || (a === void 0 && i[f] !== !1)) &&
        (i[f || u] = Fi(l))
    }
    const s = (l, u) => S.forEach(l, (a, c) => o(a, c, u))
    if (S.isPlainObject(t) || t instanceof this.constructor) s(t, n)
    else if (S.isString(t) && (t = t.trim()) && !Sw(t)) s(vw(t), n)
    else if (S.isHeaders(t)) for (const [l, u] of t.entries()) o(u, l, r)
    else t != null && o(n, t, r)
    return this
  }
  get(t, n) {
    if (((t = pr(t)), t)) {
      const r = S.findKey(this, t)
      if (r) {
        const i = this[r]
        if (!n) return i
        if (n === !0) return ww(i)
        if (S.isFunction(n)) return n.call(this, i, r)
        if (S.isRegExp(n)) return n.exec(i)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = pr(t)), t)) {
      const r = S.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Xs(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let i = !1
    function o(s) {
      if (((s = pr(s)), s)) {
        const l = S.findKey(r, s)
        l && (!n || Xs(r, r[l], l, n)) && (delete r[l], (i = !0))
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), i
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      i = !1
    for (; r--; ) {
      const o = n[r]
      ;(!t || Xs(this, this[o], o, t, !0)) && (delete this[o], (i = !0))
    }
    return i
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      S.forEach(this, (i, o) => {
        const s = S.findKey(r, o)
        if (s) {
          ;(n[s] = Fi(i)), delete n[o]
          return
        }
        const l = t ? Ew(o) : String(o).trim()
        l !== o && delete n[o], (n[l] = Fi(i)), (r[l] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      S.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(', ') : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((i) => r.set(i)), r
  }
  static accessor(t) {
    const r = (this[lf] = this[lf] = { accessors: {} }).accessors,
      i = this.prototype
    function o(s) {
      const l = pr(s)
      r[l] || (xw(i, s), (r[l] = !0))
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this
  }
}
hs.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization',
])
S.reduceDescriptors(hs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1)
  return {
    get: () => e,
    set(r) {
      this[n] = r
    },
  }
})
S.freezeMethods(hs)
const rt = hs
function Zs(e, t) {
  const n = this || xa,
    r = t || n,
    i = rt.from(r.headers)
  let o = r.data
  return (
    S.forEach(e, function (l) {
      o = l.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
  )
}
function Bh(e) {
  return !!(e && e.__CANCEL__)
}
function tr(e, t, n) {
  L.call(this, e ?? 'canceled', L.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
S.inherits(tr, L, { __CANCEL__: !0 })
function Fh(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new L(
          'Request failed with status code ' + n.status,
          [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
function Cw(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function kw(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let i = 0,
    o = 0,
    s
  return (
    (t = t !== void 0 ? t : 1e3),
    function (u) {
      const a = Date.now(),
        c = r[o]
      s || (s = a), (n[i] = u), (r[i] = a)
      let f = o,
        y = 0
      for (; f !== i; ) (y += n[f++]), (f = f % e)
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), a - s < t)) return
      const w = c && a - c
      return w ? Math.round((y * 1e3) / w) : void 0
    }
  )
}
function _w(e, t) {
  let n = 0
  const r = 1e3 / t
  let i = null
  return function () {
    const s = this === !0,
      l = Date.now()
    if (s || l - n > r)
      return (
        i && (clearTimeout(i), (i = null)), (n = l), e.apply(null, arguments)
      )
    i ||
      (i = setTimeout(
        () => ((i = null), (n = Date.now()), e.apply(null, arguments)),
        r - (l - n)
      ))
  }
}
const Eo = (e, t, n = 3) => {
    let r = 0
    const i = kw(50, 250)
    return _w((o) => {
      const s = o.loaded,
        l = o.lengthComputable ? o.total : void 0,
        u = s - r,
        a = i(u),
        c = s <= l
      r = s
      const f = {
        loaded: s,
        total: l,
        progress: l ? s / l : void 0,
        bytes: u,
        rate: a || void 0,
        estimated: a && l && c ? (l - s) / a : void 0,
        event: o,
        lengthComputable: l != null,
      }
      ;(f[t ? 'download' : 'upload'] = !0), e(f)
    }, n)
  },
  Rw = nt.hasStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          n = document.createElement('a')
        let r
        function i(o) {
          let s = o
          return (
            t && (n.setAttribute('href', s), (s = n.href)),
            n.setAttribute('href', s),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, '') : '',
              hash: n.hash ? n.hash.replace(/^#/, '') : '',
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname,
            }
          )
        }
        return (
          (r = i(window.location.href)),
          function (s) {
            const l = S.isString(s) ? i(s) : s
            return l.protocol === r.protocol && l.host === r.host
          }
        )
      })()
    : (function () {
        return function () {
          return !0
        }
      })(),
  Tw = nt.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, o) {
          const s = [e + '=' + encodeURIComponent(t)]
          S.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
            S.isString(r) && s.push('path=' + r),
            S.isString(i) && s.push('domain=' + i),
            o === !0 && s.push('secure'),
            (document.cookie = s.join('; '))
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
          )
          return t ? decodeURIComponent(t[3]) : null
        },
        remove(e) {
          this.write(e, '', Date.now() - 864e5)
        },
      }
    : {
        write() {},
        read() {
          return null
        },
        remove() {},
      }
function Ow(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Nw(e, t) {
  return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function zh(e, t) {
  return e && !Ow(t) ? Nw(e, t) : t
}
const uf = (e) => (e instanceof rt ? { ...e } : e)
function hn(e, t) {
  t = t || {}
  const n = {}
  function r(a, c, f) {
    return S.isPlainObject(a) && S.isPlainObject(c)
      ? S.merge.call({ caseless: f }, a, c)
      : S.isPlainObject(c)
      ? S.merge({}, c)
      : S.isArray(c)
      ? c.slice()
      : c
  }
  function i(a, c, f) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a, f)
    } else return r(a, c, f)
  }
  function o(a, c) {
    if (!S.isUndefined(c)) return r(void 0, c)
  }
  function s(a, c) {
    if (S.isUndefined(c)) {
      if (!S.isUndefined(a)) return r(void 0, a)
    } else return r(void 0, c)
  }
  function l(a, c, f) {
    if (f in t) return r(a, c)
    if (f in e) return r(void 0, a)
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: l,
    headers: (a, c) => i(uf(a), uf(c), !0),
  }
  return (
    S.forEach(Object.keys(Object.assign({}, e, t)), function (c) {
      const f = u[c] || i,
        y = f(e[c], t[c], c)
      ;(S.isUndefined(y) && f !== l) || (n[c] = y)
    }),
    n
  )
}
const Vh = (e) => {
    const t = hn({}, e)
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: i,
      xsrfCookieName: o,
      headers: s,
      auth: l,
    } = t
    ;(t.headers = s = rt.from(s)),
      (t.url = Ih(zh(t.baseURL, t.url), e.params, e.paramsSerializer)),
      l &&
        s.set(
          'Authorization',
          'Basic ' +
            btoa(
              (l.username || '') +
                ':' +
                (l.password ? unescape(encodeURIComponent(l.password)) : '')
            )
        )
    let u
    if (S.isFormData(n)) {
      if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
        s.setContentType(void 0)
      else if ((u = s.getContentType()) !== !1) {
        const [a, ...c] = u
          ? u
              .split(';')
              .map((f) => f.trim())
              .filter(Boolean)
          : []
        s.setContentType([a || 'multipart/form-data', ...c].join('; '))
      }
    }
    if (
      nt.hasStandardBrowserEnv &&
      (r && S.isFunction(r) && (r = r(t)), r || (r !== !1 && Rw(t.url)))
    ) {
      const a = i && o && Tw.read(o)
      a && s.set(i, a)
    }
    return t
  },
  Pw = typeof XMLHttpRequest < 'u',
  Lw =
    Pw &&
    function (e) {
      return new Promise(function (n, r) {
        const i = Vh(e)
        let o = i.data
        const s = rt.from(i.headers).normalize()
        let { responseType: l } = i,
          u
        function a() {
          i.cancelToken && i.cancelToken.unsubscribe(u),
            i.signal && i.signal.removeEventListener('abort', u)
        }
        let c = new XMLHttpRequest()
        c.open(i.method.toUpperCase(), i.url, !0), (c.timeout = i.timeout)
        function f() {
          if (!c) return
          const w = rt.from(
              'getAllResponseHeaders' in c && c.getAllResponseHeaders()
            ),
            v = {
              data:
                !l || l === 'text' || l === 'json'
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: w,
              config: e,
              request: c,
            }
          Fh(
            function (h) {
              n(h), a()
            },
            function (h) {
              r(h), a()
            },
            v
          ),
            (c = null)
        }
        'onloadend' in c
          ? (c.onloadend = f)
          : (c.onreadystatechange = function () {
              !c ||
                c.readyState !== 4 ||
                (c.status === 0 &&
                  !(c.responseURL && c.responseURL.indexOf('file:') === 0)) ||
                setTimeout(f)
            }),
          (c.onabort = function () {
            c && (r(new L('Request aborted', L.ECONNABORTED, i, c)), (c = null))
          }),
          (c.onerror = function () {
            r(new L('Network Error', L.ERR_NETWORK, i, c)), (c = null)
          }),
          (c.ontimeout = function () {
            let g = i.timeout
              ? 'timeout of ' + i.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const v = i.transitional || Mh
            i.timeoutErrorMessage && (g = i.timeoutErrorMessage),
              r(
                new L(
                  g,
                  v.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
                  i,
                  c
                )
              ),
              (c = null)
          }),
          o === void 0 && s.setContentType(null),
          'setRequestHeader' in c &&
            S.forEach(s.toJSON(), function (g, v) {
              c.setRequestHeader(v, g)
            }),
          S.isUndefined(i.withCredentials) ||
            (c.withCredentials = !!i.withCredentials),
          l && l !== 'json' && (c.responseType = i.responseType),
          typeof i.onDownloadProgress == 'function' &&
            c.addEventListener('progress', Eo(i.onDownloadProgress, !0)),
          typeof i.onUploadProgress == 'function' &&
            c.upload &&
            c.upload.addEventListener('progress', Eo(i.onUploadProgress)),
          (i.cancelToken || i.signal) &&
            ((u = (w) => {
              c &&
                (r(!w || w.type ? new tr(null, e, c) : w),
                c.abort(),
                (c = null))
            }),
            i.cancelToken && i.cancelToken.subscribe(u),
            i.signal &&
              (i.signal.aborted ? u() : i.signal.addEventListener('abort', u)))
        const y = Cw(i.url)
        if (y && nt.protocols.indexOf(y) === -1) {
          r(new L('Unsupported protocol ' + y + ':', L.ERR_BAD_REQUEST, e))
          return
        }
        c.send(o || null)
      })
    },
  Aw = (e, t) => {
    let n = new AbortController(),
      r
    const i = function (u) {
      if (!r) {
        ;(r = !0), s()
        const a = u instanceof Error ? u : this.reason
        n.abort(a instanceof L ? a : new tr(a instanceof Error ? a.message : a))
      }
    }
    let o =
      t &&
      setTimeout(() => {
        i(new L(`timeout ${t} of ms exceeded`, L.ETIMEDOUT))
      }, t)
    const s = () => {
      e &&
        (o && clearTimeout(o),
        (o = null),
        e.forEach((u) => {
          u &&
            (u.removeEventListener
              ? u.removeEventListener('abort', i)
              : u.unsubscribe(i))
        }),
        (e = null))
    }
    e.forEach((u) => u && u.addEventListener && u.addEventListener('abort', i))
    const { signal: l } = n
    return (
      (l.unsubscribe = s),
      [
        l,
        () => {
          o && clearTimeout(o), (o = null)
        },
      ]
    )
  },
  jw = Aw,
  Uw = function* (e, t) {
    let n = e.byteLength
    if (!t || n < t) {
      yield e
      return
    }
    let r = 0,
      i
    for (; r < n; ) (i = r + t), yield e.slice(r, i), (r = i)
  },
  Dw = async function* (e, t, n) {
    for await (const r of e)
      yield* Uw(ArrayBuffer.isView(r) ? r : await n(String(r)), t)
  },
  af = (e, t, n, r, i) => {
    const o = Dw(e, t, i)
    let s = 0
    return new ReadableStream(
      {
        type: 'bytes',
        async pull(l) {
          const { done: u, value: a } = await o.next()
          if (u) {
            l.close(), r()
            return
          }
          let c = a.byteLength
          n && n((s += c)), l.enqueue(new Uint8Array(a))
        },
        cancel(l) {
          return r(l), o.return()
        },
      },
      { highWaterMark: 2 }
    )
  },
  cf = (e, t) => {
    const n = e != null
    return (r) =>
      setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }))
  },
  ms =
    typeof fetch == 'function' &&
    typeof Request == 'function' &&
    typeof Response == 'function',
  bh = ms && typeof ReadableStream == 'function',
  nu =
    ms &&
    (typeof TextEncoder == 'function'
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Iw =
    bh &&
    (() => {
      let e = !1
      const t = new Request(nt.origin, {
        body: new ReadableStream(),
        method: 'POST',
        get duplex() {
          return (e = !0), 'half'
        },
      }).headers.has('Content-Type')
      return e && !t
    })(),
  ff = 64 * 1024,
  ru =
    bh &&
    !!(() => {
      try {
        return S.isReadableStream(new Response('').body)
      } catch {}
    })(),
  xo = { stream: ru && ((e) => e.body) }
ms &&
  ((e) => {
    ;['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach((t) => {
      !xo[t] &&
        (xo[t] = S.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new L(
                `Response type '${t}' is not supported`,
                L.ERR_NOT_SUPPORT,
                r
              )
            })
    })
  })(new Response())
const Mw = async (e) => {
    if (e == null) return 0
    if (S.isBlob(e)) return e.size
    if (S.isSpecCompliantForm(e))
      return (await new Request(e).arrayBuffer()).byteLength
    if (S.isArrayBufferView(e)) return e.byteLength
    if ((S.isURLSearchParams(e) && (e = e + ''), S.isString(e)))
      return (await nu(e)).byteLength
  },
  $w = async (e, t) => {
    const n = S.toFiniteNumber(e.getContentLength())
    return n ?? Mw(t)
  },
  Bw =
    ms &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: i,
        cancelToken: o,
        timeout: s,
        onDownloadProgress: l,
        onUploadProgress: u,
        responseType: a,
        headers: c,
        withCredentials: f = 'same-origin',
        fetchOptions: y,
      } = Vh(e)
      a = a ? (a + '').toLowerCase() : 'text'
      let [w, g] = i || o || s ? jw([i, o], s) : [],
        v,
        C
      const h = () => {
        !v &&
          setTimeout(() => {
            w && w.unsubscribe()
          }),
          (v = !0)
      }
      let d
      try {
        if (
          u &&
          Iw &&
          n !== 'get' &&
          n !== 'head' &&
          (d = await $w(c, r)) !== 0
        ) {
          let R = new Request(t, { method: 'POST', body: r, duplex: 'half' }),
            T
          S.isFormData(r) &&
            (T = R.headers.get('content-type')) &&
            c.setContentType(T),
            R.body && (r = af(R.body, ff, cf(d, Eo(u)), null, nu))
        }
        S.isString(f) || (f = f ? 'cors' : 'omit'),
          (C = new Request(t, {
            ...y,
            signal: w,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: 'half',
            withCredentials: f,
          }))
        let m = await fetch(C)
        const E = ru && (a === 'stream' || a === 'response')
        if (ru && (l || E)) {
          const R = {}
          ;['status', 'statusText', 'headers'].forEach((P) => {
            R[P] = m[P]
          })
          const T = S.toFiniteNumber(m.headers.get('content-length'))
          m = new Response(af(m.body, ff, l && cf(T, Eo(l, !0)), E && h, nu), R)
        }
        a = a || 'text'
        let _ = await xo[S.findKey(xo, a) || 'text'](m, e)
        return (
          !E && h(),
          g && g(),
          await new Promise((R, T) => {
            Fh(R, T, {
              data: _,
              headers: rt.from(m.headers),
              status: m.status,
              statusText: m.statusText,
              config: e,
              request: C,
            })
          })
        )
      } catch (m) {
        throw (
          (h(),
          m && m.name === 'TypeError' && /fetch/i.test(m.message)
            ? Object.assign(new L('Network Error', L.ERR_NETWORK, e, C), {
                cause: m.cause || m,
              })
            : L.from(m, m && m.code, e, C))
        )
      }
    }),
  iu = { http: ew, xhr: Lw, fetch: Bw }
S.forEach(iu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const df = (e) => `- ${e}`,
  Fw = (e) => S.isFunction(e) || e === null || e === !1,
  Wh = {
    getAdapter: (e) => {
      e = S.isArray(e) ? e : [e]
      const { length: t } = e
      let n, r
      const i = {}
      for (let o = 0; o < t; o++) {
        n = e[o]
        let s
        if (
          ((r = n),
          !Fw(n) && ((r = iu[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new L(`Unknown adapter '${s}'`)
        if (r) break
        i[s || '#' + o] = r
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([l, u]) =>
            `adapter ${l} ` +
            (u === !1
              ? 'is not supported by the environment'
              : 'is not available in the build')
        )
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(df).join(`
`)
            : ' ' + df(o[0])
          : 'as no adapter specified'
        throw new L(
          'There is no suitable adapter to dispatch the request ' + s,
          'ERR_NOT_SUPPORT'
        )
      }
      return r
    },
    adapters: iu,
  }
function el(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new tr(null, e)
}
function pf(e) {
  return (
    el(e),
    (e.headers = rt.from(e.headers)),
    (e.data = Zs.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Wh.getAdapter(e.adapter || xa.adapter)(e).then(
      function (r) {
        return (
          el(e),
          (r.data = Zs.call(e, e.transformResponse, r)),
          (r.headers = rt.from(r.headers)),
          r
        )
      },
      function (r) {
        return (
          Bh(r) ||
            (el(e),
            r &&
              r.response &&
              ((r.response.data = Zs.call(e, e.transformResponse, r.response)),
              (r.response.headers = rt.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const Hh = '1.7.2',
  Ca = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    Ca[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const hf = {}
Ca.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      '[Axios v' +
      Hh +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? '. ' + r : '')
    )
  }
  return (o, s, l) => {
    if (t === !1)
      throw new L(
        i(s, ' has been removed' + (n ? ' in ' + n : '')),
        L.ERR_DEPRECATED
      )
    return (
      n &&
        !hf[s] &&
        ((hf[s] = !0),
        console.warn(
          i(
            s,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, s, l) : !0
    )
  }
}
function zw(e, t, n) {
  if (typeof e != 'object')
    throw new L('options must be an object', L.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let i = r.length
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o]
    if (s) {
      const l = e[o],
        u = l === void 0 || s(l, o, e)
      if (u !== !0)
        throw new L('option ' + o + ' must be ' + u, L.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new L('Unknown option ' + o, L.ERR_BAD_OPTION)
  }
}
const ou = { assertOptions: zw, validators: Ca },
  Ot = ou.validators
let Co = class {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new sf(), response: new sf() })
  }
  async request(t, n) {
    try {
      return await this._request(t, n)
    } catch (r) {
      if (r instanceof Error) {
        let i
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error())
        const o = i.stack ? i.stack.replace(/^.+\n/, '') : ''
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o)
        } catch {}
      }
      throw r
    }
  }
  _request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = hn(this.defaults, n))
    const { transitional: r, paramsSerializer: i, headers: o } = n
    r !== void 0 &&
      ou.assertOptions(
        r,
        {
          silentJSONParsing: Ot.transitional(Ot.boolean),
          forcedJSONParsing: Ot.transitional(Ot.boolean),
          clarifyTimeoutError: Ot.transitional(Ot.boolean),
        },
        !1
      ),
      i != null &&
        (S.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : ou.assertOptions(
              i,
              { encode: Ot.function, serialize: Ot.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let s = o && S.merge(o.common, o[n.method])
    o &&
      S.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        (g) => {
          delete o[g]
        }
      ),
      (n.headers = rt.concat(s, o))
    const l = []
    let u = !0
    this.interceptors.request.forEach(function (v) {
      ;(typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
        ((u = u && v.synchronous), l.unshift(v.fulfilled, v.rejected))
    })
    const a = []
    this.interceptors.response.forEach(function (v) {
      a.push(v.fulfilled, v.rejected)
    })
    let c,
      f = 0,
      y
    if (!u) {
      const g = [pf.bind(this), void 0]
      for (
        g.unshift.apply(g, l),
          g.push.apply(g, a),
          y = g.length,
          c = Promise.resolve(n);
        f < y;

      )
        c = c.then(g[f++], g[f++])
      return c
    }
    y = l.length
    let w = n
    for (f = 0; f < y; ) {
      const g = l[f++],
        v = l[f++]
      try {
        w = g(w)
      } catch (C) {
        v.call(this, C)
        break
      }
    }
    try {
      c = pf.call(this, w)
    } catch (g) {
      return Promise.reject(g)
    }
    for (f = 0, y = a.length; f < y; ) c = c.then(a[f++], a[f++])
    return c
  }
  getUri(t) {
    t = hn(this.defaults, t)
    const n = zh(t.baseURL, t.url)
    return Ih(n, t.params, t.paramsSerializer)
  }
}
S.forEach(['delete', 'get', 'head', 'options'], function (t) {
  Co.prototype[t] = function (n, r) {
    return this.request(
      hn(r || {}, { method: t, url: n, data: (r || {}).data })
    )
  }
})
S.forEach(['post', 'put', 'patch'], function (t) {
  function n(r) {
    return function (o, s, l) {
      return this.request(
        hn(l || {}, {
          method: t,
          headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: s,
        })
      )
    }
  }
  ;(Co.prototype[t] = n()), (Co.prototype[t + 'Form'] = n(!0))
})
const zi = Co
class ka {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const r = this
    this.promise.then((i) => {
      if (!r._listeners) return
      let o = r._listeners.length
      for (; o-- > 0; ) r._listeners[o](i)
      r._listeners = null
    }),
      (this.promise.then = (i) => {
        let o
        const s = new Promise((l) => {
          r.subscribe(l), (o = l)
        }).then(i)
        return (
          (s.cancel = function () {
            r.unsubscribe(o)
          }),
          s
        )
      }),
      t(function (o, s, l) {
        r.reason || ((r.reason = new tr(o, s, l)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new ka(function (i) {
        t = i
      }),
      cancel: t,
    }
  }
}
const Vw = ka
function bw(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function Ww(e) {
  return S.isObject(e) && e.isAxiosError === !0
}
const su = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(su).forEach(([e, t]) => {
  su[t] = e
})
const Hw = su
function qh(e) {
  const t = new zi(e),
    n = kh(zi.prototype.request, t)
  return (
    S.extend(n, zi.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return qh(hn(e, i))
    }),
    n
  )
}
const re = qh(xa)
re.Axios = zi
re.CanceledError = tr
re.CancelToken = Vw
re.isCancel = Bh
re.VERSION = Hh
re.toFormData = ps
re.AxiosError = L
re.Cancel = re.CanceledError
re.all = function (t) {
  return Promise.all(t)
}
re.spread = bw
re.isAxiosError = Ww
re.mergeConfig = hn
re.AxiosHeaders = rt
re.formToJSON = (e) => $h(S.isHTMLForm(e) ? new FormData(e) : e)
re.getAdapter = Wh.getAdapter
re.HttpStatusCode = Hw
re.default = re
const qw = re,
  Kw = '/api/',
  Qw = qw.create({ withCredentials: !0 }),
  we = {
    get(e, t) {
      return xi(e, 'GET', t)
    },
    post(e, t) {
      return xi(e, 'POST', t)
    },
    put(e, t) {
      return xi(e, 'PUT', t)
    },
    delete(e, t) {
      return xi(e, 'DELETE', t)
    },
  }
async function xi(e, t = 'GET', n = null) {
  const o = {
    url: `${Kw}${e}`,
    method: t,
    data: n,
    params: t === 'GET' ? n : null,
  }
  try {
    return (await Qw(o)).data
  } catch (s) {
    throw (
      (console.error(
        `Had Issues ${t}ing to the backend, endpoint: ${e}, with data: `,
        n
      ),
      console.dir(s),
      s.response && s.response.status === 401 && sessionStorage.clear(),
      s)
    )
  }
}
const _a = 'loggedinUser',
  Jw = {
    login: eS,
    logout: nS,
    signup: tS,
    getUsers: Gw,
    getById: Yw,
    remove: Xw,
    update: Zw,
    getLoggedinUser: Kh,
  }
function Gw() {
  return we.get('user')
}
async function Yw(e) {
  return await we.get(`user/${e}`)
}
function Xw(e) {
  return we.delete(`user/${e}`)
}
async function Zw({ _id: e, score: t }) {
  const n = await we.put(`user/${e}`, { _id: e, score: t })
  return Kh()._id === n._id && Ra(n), n
}
async function eS(e) {
  const t = await we.post('auth/login', e)
  if (t) return Ra(t)
}
async function tS(e) {
  e.imgUrl ||
    (e.imgUrl =
      'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'),
    (e.score = 1e4)
  const t = await we.post('auth/signup', e)
  return Ra(t)
}
async function nS() {
  return sessionStorage.removeItem(_a), await we.post('auth/logout')
}
function Kh() {
  return JSON.parse(sessionStorage.getItem(_a))
}
function Ra(e) {
  return (
    (e = {
      _id: e._id,
      fullname: e.fullname,
      imgUrl: e.imgUrl,
      score: e.score,
      isAdmin: e.isAdmin,
    }),
    sessionStorage.setItem(_a, JSON.stringify(e)),
    e
  )
}
const { DEV: rS, VITE_LOCAL: iS } = {
  VITE_TEST_VAR: '123',
  BASE_URL: '/',
  MODE: 'production',
  DEV: !1,
  PROD: !0,
  SSR: !1,
}
function oS() {
  return { username: '', password: '', fullname: '', isAdmin: !1, score: 100 }
}
const sS = iS === 'true' ? u1 : Jw,
  te = { ...sS, getEmptyUser: oS }
rS && (window.userService = te)
const lS = 'INCREMENT',
  uS = 'DECREMENT',
  aS = 'CHANGE_COUNT',
  ys = 'SET_USER',
  Qh = 'SET_WATCHED_USER',
  Jh = 'REMOVE_USER',
  Gh = 'SET_USERS',
  Yh = 'SET_SCORE',
  cS = { count: 10, user: te.getLoggedinUser(), users: [], watchedUser: null }
function fS(e = cS, t) {
  var n = e
  switch (t.type) {
    case lS:
      n = { ...e, count: e.count + 1 }
      break
    case uS:
      n = { ...e, count: e.count - 1 }
      break
    case aS:
      n = { ...e, count: e.count + t.diff }
      break
    case ys:
      n = { ...e, user: t.user }
      break
    case Qh:
      n = { ...e, watchedUser: t.user }
      break
    case Jh:
      n = { ...e, users: e.users.filter((r) => r._id !== t.userId) }
      break
    case Gh:
      n = { ...e, users: t.users }
      break
    case Yh:
      n = { ...e, user: { ...e.user, score: t.score } }
      break
  }
  return n
}
const Xh = 'SET_REVIEWS',
  Zh = 'ADD_REVIEW',
  em = 'REMOVE_REVIEW',
  dS = 'UPDATE_REVIEW',
  pS = { reviews: [] }
function hS(e = pS, t = {}) {
  switch (t.type) {
    case Xh:
      return { ...e, reviews: t.reviews }
    case Zh:
      return { ...e, reviews: [...e.reviews, t.review] }
    case em:
      return { ...e, reviews: e.reviews.filter((n) => n._id !== t.reviewId) }
    case dS:
      return {
        ...e,
        reviews: e.reviews.map((n) => (n._id === t.review._id ? t.review : n)),
      }
    default:
      return e
  }
}
const tm = 'LOADING_START',
  nm = 'LOADING_DONE',
  mS = { isLoading: !1 }
function yS(e = mS, t = {}) {
  switch (t.type) {
    case tm:
      return { ...e, isLoading: !0 }
    case nm:
      return { ...e, isLoading: !1 }
    default:
      return e
  }
}
const gS = e1({
    homeModule: n1,
    userModule: fS,
    systemModule: yS,
    reviewModule: hS,
  }),
  vS = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : void 0,
  ne = X0(gS, vS)
function wS() {
  return p.jsxs('section', {
    children: [
      p.jsx('h1', { children: 'Home sweet Home' }),
      p.jsx('p', {
        children:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ea omnis blanditiis deleniti impedit illo ullam, magnam aut minus veritatis corporis quos iure fugiat repellat assumenda fugit mollitia illum! Delectus velit fugit dolores maiores quam laudantium minima similique sapiente minus deserunt vel cum tenetur molestias commodi eos distinctio, consequatur ducimus dolorum odio itaque natus soluta fuga! Deserunt in hic harum magnam quos. Expedita, quis corrupti quia esse excepturi alias aperiam repudiandae soluta animi modi temporibus veniam vero eveniet nemo ipsa?',
      }),
      p.jsx(Qt, { to: '/home', children: 'Check Our homes!' }),
    ],
  })
}
var rm = { exports: {} },
  SS = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  ES = SS,
  xS = ES
function im() {}
function om() {}
om.resetWarningCache = im
var CS = function () {
  function e(r, i, o, s, l, u) {
    if (u !== xS) {
      var a = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      )
      throw ((a.name = 'Invariant Violation'), a)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: om,
    resetWarningCache: im,
  }
  return (n.PropTypes = n), n
}
rm.exports = CS()
var kS = rm.exports
const _S = Lf(kS)
function RS() {
  const [e, t] = x.useState(100)
  function n() {
    console.log('Telling you more')
  }
  return p.jsxs('section', {
    children: [
      p.jsx('h2', { children: 'About Us' }),
      p.jsxs('nav', {
        children: [
          p.jsx(Ye, { to: 'team', children: 'Team' }),
          ' |',
          p.jsx(Ye, { to: 'vision', children: 'Vision' }),
        ],
      }),
      p.jsx('section', { children: p.jsx(th, {}) }),
      p.jsx(LS, { left: p.jsx(NS, {}), right: p.jsx(PS, {}) }),
      p.jsxs(sm, {
        onClose: () => console.log('ok, closing'),
        children: [
          p.jsxs('h3', { children: [e.toLocaleString(), ' Followers'] }),
          p.jsx('button', { onClick: n, children: 'Tell me More' }),
        ],
      }),
      p.jsx('p', {
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.',
      }),
    ],
  })
}
function TS() {
  return p.jsxs('section', {
    children: [
      p.jsx('h2', { children: 'Best Team' }),
      p.jsxs('ul', {
        children: [
          p.jsx('li', { children: 'Popo Decaprio ' }),
          p.jsx('li', { children: 'Jini Baba' }),
        ],
      }),
    ],
  })
}
function OS() {
  return p.jsxs('section', {
    children: [
      p.jsx('h2', { children: 'Vision' }),
      p.jsxs('ul', {
        children: [
          p.jsx('li', { children: 'Save the day' }),
          p.jsx('li', { children: 'Spread some love' }),
          p.jsx('li', { children: 'Take over the world' }),
        ],
      }),
    ],
  })
}
function sm(e) {
  return p.jsxs('div', {
    className: 'fancy-box',
    children: [
      p.jsx('button', {
        style: { float: 'right' },
        onClick: e.onClose,
        children: 'x',
      }),
      e.children,
    ],
  })
}
sm.propTypes = { onClose: _S.func.isRequired }
function NS() {
  return p.jsxs('section', {
    style: { height: '50vh', backgroundColor: 'pink' },
    children: [
      p.jsx('h2', { children: 'Contacts' }),
      p.jsx('p', { children: 'Click me' }),
    ],
  })
}
function PS() {
  const [e, t] = x.useState(['Puki Proj', 'Muki Proj']),
    n = e.map((r, i) =>
      p.jsx(
        'article',
        {
          className: 'proj-preview',
          onClick: (o) => {
            o.stopPropagation(), t(e.filter((s) => s !== r))
          },
          children: r,
        },
        r
      )
    )
  return p.jsxs('section', {
    style: { minHeight: '50vh', backgroundColor: 'lightblue' },
    children: [
      p.jsx('h2', { children: 'Projects' }),
      n,
      p.jsx('button', {
        onClick: (r) => {
          r.stopPropagation(), t([...e, 'Babu Proj' + (Date.now() % 100)])
        },
        children: 'Add',
      }),
    ],
  })
}
function LS(e) {
  const [t, n] = x.useState(30)
  return p.jsxs('div', {
    className: 'split-pane',
    style: { display: 'flex' },
    children: [
      p.jsx('div', {
        style: { width: t + '%' },
        onClick: () => {
          t + 10 <= 100 && n(t + 10)
        },
        children: e.left,
      }),
      p.jsx('div', {
        style: { flex: 1 },
        onClick: () => {
          t > 10 && n(t - 10)
        },
        children: e.right,
      }),
    ],
  })
}
function lm(e = 6) {
  for (
    var t = '',
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      r = 0;
    r < e;
    r++
  )
    t += n.charAt(Math.floor(Math.random() * n.length))
  return t
}
function mf(e, t) {
  return (
    (e = Math.ceil(e)),
    (t = Math.floor(t)),
    Math.floor(Math.random() * (t - e + 1)) + e
  )
}
const Kn = 'home',
  um = { query: AS, getById: am, save: US, remove: jS, addhomeMsg: DS }
window.cs = um
async function AS(e = { txt: '', price: 0 }) {
  var t = await ve.query(Kn)
  const { txt: n, minSpeed: r, maxPrice: i, sortField: o, sortDir: s } = e
  if (n) {
    const l = new RegExp(e.txt, 'i')
    t = t.filter((u) => l.test(u.vendor) || l.test(u.description))
  }
  return (
    r && (t = t.filter((l) => l.speed <= r)),
    i && (t = t.filter((l) => l.price <= i)),
    (o === 'vendor' || o === 'owner') &&
      t.sort((l, u) => l[o].localeCompare(u[o]) * +s),
    (o === 'price' || o === 'speed') && t.sort((l, u) => (l[o] - u[o]) * +s),
    (t = t.map(({ _id: l, vendor: u, price: a, speed: c, owner: f }) => ({
      _id: l,
      vendor: u,
      price: a,
      speed: c,
      owner: f,
    }))),
    t
  )
}
function am(e) {
  return ve.get(Kn, e)
}
async function jS(e) {
  await ve.remove(Kn, e)
}
async function US(e) {
  var t
  if (e._id) {
    const n = { _id: e._id, price: e.price, speed: e.speed }
    t = await ve.put(Kn, n)
  } else {
    const n = {
      vendor: e.vendor,
      price: e.price,
      speed: e.speed,
      owner: te.getLoggedinUser(),
      msgs: [],
    }
    t = await ve.post(Kn, n)
  }
  return t
}
async function DS(e, t) {
  const n = await am(e),
    r = { id: lm(), by: te.getLoggedinUser(), txt: t }
  return n.msgs.push(r), await ve.put(Kn, n), r
}
const IS = { query: MS, getById: $S, save: FS, remove: BS, addhomeMsg: zS }
async function MS(e = { txt: '', price: 0 }) {
  return we.get('home', e)
}
function $S(e) {
  return we.get(`home/${e}`)
}
async function BS(e) {
  return we.delete(`home/${e}`)
}
async function FS(e) {
  var t
  return (
    e._id
      ? (t = await we.put(`home/${e._id}`, e))
      : (t = await we.post('home', e)),
    t
  )
}
async function zS(e, t) {
  return await we.post(`home/${e}/msg`, { txt: t })
}
const { DEV: VS, VITE_LOCAL: bS } = {
  VITE_TEST_VAR: '123',
  BASE_URL: '/',
  MODE: 'production',
  DEV: !1,
  PROD: !0,
  SSR: !1,
}
function WS() {
  return { vendor: lm(), price: mf(1e3, 9e3), speed: mf(80, 240), msgs: [] }
}
function HS() {
  return { txt: '', maxPrice: '', minSpeed: '', sortField: '', sortDir: '' }
}
const qS = bS === 'true' ? um : IS,
  kt = { getEmptyhome: WS, getDefaultFilter: HS, ...qS }
VS && (window.homeService = kt)
async function KS(e) {
  try {
    const t = await kt.query(e)
    ne.dispatch(ZS(t))
  } catch (t) {
    throw (console.log('Cannot load homes', t), t)
  }
}
async function QS(e) {
  try {
    const t = await kt.getById(e)
    ne.dispatch(eE(t))
  } catch (t) {
    throw (console.log('Cannot load home', t), t)
  }
}
async function JS(e) {
  try {
    await kt.remove(e), ne.dispatch(tE(e))
  } catch (t) {
    throw (console.log('Cannot remove home', t), t)
  }
}
async function GS(e) {
  try {
    const t = await kt.save(e)
    return ne.dispatch(nE(t)), t
  } catch (t) {
    throw (console.log('Cannot add home', t), t)
  }
}
async function YS(e) {
  try {
    const t = await kt.save(e)
    return ne.dispatch(rE(t)), t
  } catch (t) {
    throw (console.log('Cannot save home', t), t)
  }
}
async function XS(e, t) {
  try {
    const n = await kt.addhomeMsg(e, t)
    return ne.dispatch(iE(n)), n
  } catch (n) {
    throw (console.log('Cannot add home msg', n), n)
  }
}
function ZS(e) {
  return { type: gh, homes: e }
}
function eE(e) {
  return { type: vh, home: e }
}
function tE(e) {
  return { type: wh, homeId: e }
}
function nE(e) {
  return { type: Sh, home: e }
}
function rE(e) {
  return { type: Eh, home: e }
}
function iE(e) {
  return { type: xh, msg: e }
}
const oE = 'show-msg'
function sE() {
  const e = {}
  return {
    on(t, n) {
      return (
        (e[t] = e[t] ? [...e[t], n] : [n]),
        () => {
          e[t] = e[t].filter((r) => r !== n)
        }
      )
    },
    emit(t, n) {
      e[t] && e[t].forEach((r) => r(n))
    },
  }
}
const cm = sE()
function Ta(e) {
  cm.emit(oE, e)
}
function wt(e) {
  Ta({ txt: e, type: 'success' })
}
function Ht(e) {
  Ta({ txt: e, type: 'error' })
}
window.showUserMsg = Ta
function lE({ home: e }) {
  return p.jsxs('article', {
    className: 'preview',
    children: [
      p.jsx('header', {
        children: p.jsx(Qt, { to: `/home/${e._id}`, children: e.vendor }),
      }),
      p.jsxs('p', {
        children: [
          'Speed: ',
          p.jsxs('span', { children: [e.speed.toLocaleString(), ' Km/h'] }),
        ],
      }),
      e.owner &&
        p.jsxs('p', {
          children: [
            'Owner: ',
            p.jsx(Qt, {
              to: `/user/${e.owner._id}`,
              children: e.owner.fullname,
            }),
          ],
        }),
    ],
  })
}
function uE({ homes: e, onRemovehome: t, onUpdatehome: n }) {
  function r(i) {
    var s
    const o = te.getLoggedinUser()
    return o
      ? o.isAdmin
        ? !0
        : ((s = i.owner) == null ? void 0 : s._id) === o._id
      : !1
  }
  return p.jsx('section', {
    children: p.jsx('ul', {
      className: 'list',
      children: e.map((i) =>
        p.jsxs(
          'li',
          {
            children: [
              p.jsx(lE, { home: i }),
              r(i) &&
                p.jsxs('div', {
                  className: 'actions',
                  children: [
                    p.jsx('button', { onClick: () => n(i), children: 'Edit' }),
                    p.jsx('button', { onClick: () => t(i._id), children: 'x' }),
                  ],
                }),
            ],
          },
          i._id
        )
      ),
    }),
  })
}
function aE({ filterBy: e, onSetFilterBy: t }) {
  const [n, r] = x.useState(structuredClone(e))
  x.useEffect(() => {
    t(n)
  }, [n])
  function i(l) {
    const u = l.target.type,
      a = l.target.name
    let c
    switch (u) {
      case 'text':
      case 'radio':
        ;(c = a === 'sortDir' ? +l.target.value : l.target.value),
          n.sortDir || (n.sortDir = 1)
        break
      case 'number':
      case 'range':
        c = +l.target.value
        break
    }
    r({ ...n, [a]: c })
  }
  function o() {
    r({ ...n, txt: '', minSpeed: '', maxPrice: '' })
  }
  function s() {
    r({ ...n, sortField: '', sortDir: '' })
  }
  return p.jsxs('section', {
    className: 'home-filter',
    children: [
      p.jsx('h3', { children: 'Filter:' }),
      p.jsx('input', {
        type: 'text',
        name: 'txt',
        value: n.txt,
        placeholder: 'Free text',
        onChange: i,
        required: !0,
      }),
      p.jsx('input', {
        type: 'number',
        min: '0',
        name: 'minSpeed',
        value: n.minSpeed,
        placeholder: 'min. speed',
        onChange: i,
        required: !0,
      }),
      p.jsx('button', {
        className: 'btn-clear',
        onClick: o,
        children: 'Clear',
      }),
      p.jsx('h3', { children: 'Sort:' }),
      p.jsxs('div', {
        className: 'sort-field',
        children: [
          p.jsxs('label', {
            children: [
              p.jsx('span', { children: 'Speed' }),
              p.jsx('input', {
                type: 'radio',
                name: 'sortField',
                value: 'speed',
                checked: n.sortField === 'speed',
                onChange: i,
              }),
            ],
          }),
          p.jsxs('label', {
            children: [
              p.jsx('span', { children: 'Vendor' }),
              p.jsx('input', {
                type: 'radio',
                name: 'sortField',
                value: 'vendor',
                checked: n.sortField === 'vendor',
                onChange: i,
              }),
            ],
          }),
          p.jsxs('label', {
            children: [
              p.jsx('span', { children: 'Owner' }),
              p.jsx('input', {
                type: 'radio',
                name: 'sortField',
                value: 'owner',
                checked: n.sortField === 'owner',
                onChange: i,
              }),
            ],
          }),
        ],
      }),
      p.jsxs('div', {
        className: 'sort-dir',
        children: [
          p.jsxs('label', {
            children: [
              p.jsx('span', { children: 'Asce' }),
              p.jsx('input', {
                type: 'radio',
                name: 'sortDir',
                value: '1',
                checked: n.sortDir === 1,
                onChange: i,
              }),
            ],
          }),
          p.jsxs('label', {
            children: [
              p.jsx('span', { children: 'Desc' }),
              p.jsx('input', {
                type: 'radio',
                name: 'sortDir',
                value: '-1',
                onChange: i,
                checked: n.sortDir === -1,
              }),
            ],
          }),
        ],
      }),
      p.jsx('button', {
        className: 'btn-clear',
        onClick: s,
        children: 'Clear',
      }),
    ],
  })
}
function cE() {
  const [e, t] = x.useState(kt.getDefaultFilter()),
    n = ot((l) => l.homeModule.homes)
  x.useEffect(() => {
    KS(e)
  }, [e])
  function r(l) {
    t((u) => ({ ...u, ...l }))
  }
  async function i(l) {
    try {
      await JS(l), wt('home removed')
    } catch {
      Ht('Cannot remove home')
    }
  }
  async function o() {
    const l = kt.getEmptyhome()
    l.vendor = prompt('Vendor?')
    try {
      const u = await GS(l)
      wt(`home added (id: ${u._id})`)
    } catch {
      Ht('Cannot add home')
    }
  }
  async function s(l) {
    const u = +prompt('New speed?', l.speed)
    if (!u) return
    const a = { ...l, speed: u }
    try {
      const c = await YS(a)
      wt(`home updated, new speed: ${c.speed}`)
    } catch {
      Ht('Cannot update home')
    }
  }
  return p.jsxs('main', {
    className: 'home-index',
    children: [
      p.jsxs('header', {
        children: [
          p.jsx('h2', { children: 'homes' }),
          te.getLoggedinUser() &&
            p.jsx('button', { onClick: o, children: 'Add a home' }),
        ],
      }),
      p.jsx(aE, { filterBy: e, onSetFilterBy: r }),
      p.jsx(uE, { homes: n, onRemovehome: i, onUpdatehome: s }),
    ],
  })
}
const fE = { add: hE, query: dE, remove: pE }
function dE(e) {
  return ve.query('review')
}
async function pE(e) {
  await ve.remove('review', e)
}
async function hE({ txt: e, aboutUserId: t }) {
  const n = await te.getById(t),
    r = {
      txt: e,
      byUser: te.getLoggedinUser(),
      aboutUser: { _id: n._id, fullname: n.fullname, imgUrl: n.imgUrl },
    }
  return (
    (r.byUser.score += 10),
    await te.update(r.byUser),
    await ve.post('review', r)
  )
}
const mE = { add: vE, query: yE, remove: gE }
function yE(e) {
  var t = e ? `?name=${e.name}&sort=anaAref` : ''
  return we.get(`review${t}`)
}
async function gE(e) {
  await we.delete(`review/${e}`)
}
async function vE({ txt: e, aboutUserId: t }) {
  return await we.post('review', { txt: e, aboutUserId: t })
}
const { DEV: wE, VITE_LOCAL: SE } = {
    VITE_TEST_VAR: '123',
    BASE_URL: '/',
    MODE: 'production',
    DEV: !1,
    PROD: !0,
    SSR: !1,
  },
  gs = SE === 'true' ? fE : mE
wE && (window.reviewService = gs)
async function EE() {
  try {
    const e = await gs.query()
    ne.dispatch({ type: Xh, reviews: e })
  } catch (e) {
    throw (console.log('ReviewActions: err in loadReviews', e), e)
  }
}
async function xE(e) {
  console.log('add review:', e)
  try {
    const t = await gs.add(e)
    ne.dispatch(dm(t))
    const { score: n } = t.byUser
    ne.dispatch({ type: Yh, score: n })
  } catch (t) {
    throw (console.log('ReviewActions: err in addReview', t), t)
  }
}
async function CE(e) {
  try {
    await gs.remove(e), ne.dispatch(fm(e))
  } catch (t) {
    throw (console.log('ReviewActions: err in removeReview', t), t)
  }
}
function fm(e) {
  return { type: em, reviewId: e }
}
function dm(e) {
  return { type: Zh, review: e }
}
const dt = Object.create(null)
dt.open = '0'
dt.close = '1'
dt.ping = '2'
dt.pong = '3'
dt.message = '4'
dt.upgrade = '5'
dt.noop = '6'
const Vi = Object.create(null)
Object.keys(dt).forEach((e) => {
  Vi[dt[e]] = e
})
const lu = { type: 'error', data: 'parser error' },
  pm =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' &&
      Object.prototype.toString.call(Blob) === '[object BlobConstructor]'),
  hm = typeof ArrayBuffer == 'function',
  mm = (e) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(e)
      : e && e.buffer instanceof ArrayBuffer,
  Oa = ({ type: e, data: t }, n, r) =>
    pm && t instanceof Blob
      ? n
        ? r(t)
        : yf(t, r)
      : hm && (t instanceof ArrayBuffer || mm(t))
      ? n
        ? r(t)
        : yf(new Blob([t]), r)
      : r(dt[e] + (t || '')),
  yf = (e, t) => {
    const n = new FileReader()
    return (
      (n.onload = function () {
        const r = n.result.split(',')[1]
        t('b' + (r || ''))
      }),
      n.readAsDataURL(e)
    )
  }
function gf(e) {
  return e instanceof Uint8Array
    ? e
    : e instanceof ArrayBuffer
    ? new Uint8Array(e)
    : new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
}
let tl
function kE(e, t) {
  if (pm && e.data instanceof Blob) return e.data.arrayBuffer().then(gf).then(t)
  if (hm && (e.data instanceof ArrayBuffer || mm(e.data))) return t(gf(e.data))
  Oa(e, !1, (n) => {
    tl || (tl = new TextEncoder()), t(tl.encode(n))
  })
}
const vf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  wr = typeof Uint8Array > 'u' ? [] : new Uint8Array(256)
for (let e = 0; e < vf.length; e++) wr[vf.charCodeAt(e)] = e
const _E = (e) => {
    let t = e.length * 0.75,
      n = e.length,
      r,
      i = 0,
      o,
      s,
      l,
      u
    e[e.length - 1] === '=' && (t--, e[e.length - 2] === '=' && t--)
    const a = new ArrayBuffer(t),
      c = new Uint8Array(a)
    for (r = 0; r < n; r += 4)
      (o = wr[e.charCodeAt(r)]),
        (s = wr[e.charCodeAt(r + 1)]),
        (l = wr[e.charCodeAt(r + 2)]),
        (u = wr[e.charCodeAt(r + 3)]),
        (c[i++] = (o << 2) | (s >> 4)),
        (c[i++] = ((s & 15) << 4) | (l >> 2)),
        (c[i++] = ((l & 3) << 6) | (u & 63))
    return a
  },
  RE = typeof ArrayBuffer == 'function',
  Na = (e, t) => {
    if (typeof e != 'string') return { type: 'message', data: ym(e, t) }
    const n = e.charAt(0)
    return n === 'b'
      ? { type: 'message', data: TE(e.substring(1), t) }
      : Vi[n]
      ? e.length > 1
        ? { type: Vi[n], data: e.substring(1) }
        : { type: Vi[n] }
      : lu
  },
  TE = (e, t) => {
    if (RE) {
      const n = _E(e)
      return ym(n, t)
    } else return { base64: !0, data: e }
  },
  ym = (e, t) => {
    switch (t) {
      case 'blob':
        return e instanceof Blob ? e : new Blob([e])
      case 'arraybuffer':
      default:
        return e instanceof ArrayBuffer ? e : e.buffer
    }
  },
  gm = String.fromCharCode(30),
  OE = (e, t) => {
    const n = e.length,
      r = new Array(n)
    let i = 0
    e.forEach((o, s) => {
      Oa(o, !1, (l) => {
        ;(r[s] = l), ++i === n && t(r.join(gm))
      })
    })
  },
  NE = (e, t) => {
    const n = e.split(gm),
      r = []
    for (let i = 0; i < n.length; i++) {
      const o = Na(n[i], t)
      if ((r.push(o), o.type === 'error')) break
    }
    return r
  }
function PE() {
  return new TransformStream({
    transform(e, t) {
      kE(e, (n) => {
        const r = n.length
        let i
        if (r < 126)
          (i = new Uint8Array(1)), new DataView(i.buffer).setUint8(0, r)
        else if (r < 65536) {
          i = new Uint8Array(3)
          const o = new DataView(i.buffer)
          o.setUint8(0, 126), o.setUint16(1, r)
        } else {
          i = new Uint8Array(9)
          const o = new DataView(i.buffer)
          o.setUint8(0, 127), o.setBigUint64(1, BigInt(r))
        }
        e.data && typeof e.data != 'string' && (i[0] |= 128),
          t.enqueue(i),
          t.enqueue(n)
      })
    },
  })
}
let nl
function Ci(e) {
  return e.reduce((t, n) => t + n.length, 0)
}
function ki(e, t) {
  if (e[0].length === t) return e.shift()
  const n = new Uint8Array(t)
  let r = 0
  for (let i = 0; i < t; i++)
    (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0))
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n
}
function LE(e, t) {
  nl || (nl = new TextDecoder())
  const n = []
  let r = 0,
    i = -1,
    o = !1
  return new TransformStream({
    transform(s, l) {
      for (n.push(s); ; ) {
        if (r === 0) {
          if (Ci(n) < 1) break
          const u = ki(n, 1)
          ;(o = (u[0] & 128) === 128),
            (i = u[0] & 127),
            i < 126 ? (r = 3) : i === 126 ? (r = 1) : (r = 2)
        } else if (r === 1) {
          if (Ci(n) < 2) break
          const u = ki(n, 2)
          ;(i = new DataView(u.buffer, u.byteOffset, u.length).getUint16(0)),
            (r = 3)
        } else if (r === 2) {
          if (Ci(n) < 8) break
          const u = ki(n, 8),
            a = new DataView(u.buffer, u.byteOffset, u.length),
            c = a.getUint32(0)
          if (c > Math.pow(2, 53 - 32) - 1) {
            l.enqueue(lu)
            break
          }
          ;(i = c * Math.pow(2, 32) + a.getUint32(4)), (r = 3)
        } else {
          if (Ci(n) < i) break
          const u = ki(n, i)
          l.enqueue(Na(o ? u : nl.decode(u), t)), (r = 0)
        }
        if (i === 0 || i > e) {
          l.enqueue(lu)
          break
        }
      }
    },
  })
}
const vm = 4
function ee(e) {
  if (e) return AE(e)
}
function AE(e) {
  for (var t in ee.prototype) e[t] = ee.prototype[t]
  return e
}
ee.prototype.on = ee.prototype.addEventListener = function (e, t) {
  return (
    (this._callbacks = this._callbacks || {}),
    (this._callbacks['$' + e] = this._callbacks['$' + e] || []).push(t),
    this
  )
}
ee.prototype.once = function (e, t) {
  function n() {
    this.off(e, n), t.apply(this, arguments)
  }
  return (n.fn = t), this.on(e, n), this
}
ee.prototype.off =
  ee.prototype.removeListener =
  ee.prototype.removeAllListeners =
  ee.prototype.removeEventListener =
    function (e, t) {
      if (((this._callbacks = this._callbacks || {}), arguments.length == 0))
        return (this._callbacks = {}), this
      var n = this._callbacks['$' + e]
      if (!n) return this
      if (arguments.length == 1) return delete this._callbacks['$' + e], this
      for (var r, i = 0; i < n.length; i++)
        if (((r = n[i]), r === t || r.fn === t)) {
          n.splice(i, 1)
          break
        }
      return n.length === 0 && delete this._callbacks['$' + e], this
    }
ee.prototype.emit = function (e) {
  this._callbacks = this._callbacks || {}
  for (
    var t = new Array(arguments.length - 1),
      n = this._callbacks['$' + e],
      r = 1;
    r < arguments.length;
    r++
  )
    t[r - 1] = arguments[r]
  if (n) {
    n = n.slice(0)
    for (var r = 0, i = n.length; r < i; ++r) n[r].apply(this, t)
  }
  return this
}
ee.prototype.emitReserved = ee.prototype.emit
ee.prototype.listeners = function (e) {
  return (
    (this._callbacks = this._callbacks || {}), this._callbacks['$' + e] || []
  )
}
ee.prototype.hasListeners = function (e) {
  return !!this.listeners(e).length
}
const ze = (() =>
  typeof self < 'u'
    ? self
    : typeof window < 'u'
    ? window
    : Function('return this')())()
function wm(e, ...t) {
  return t.reduce((n, r) => (e.hasOwnProperty(r) && (n[r] = e[r]), n), {})
}
const jE = ze.setTimeout,
  UE = ze.clearTimeout
function vs(e, t) {
  t.useNativeTimers
    ? ((e.setTimeoutFn = jE.bind(ze)), (e.clearTimeoutFn = UE.bind(ze)))
    : ((e.setTimeoutFn = ze.setTimeout.bind(ze)),
      (e.clearTimeoutFn = ze.clearTimeout.bind(ze)))
}
const DE = 1.33
function IE(e) {
  return typeof e == 'string' ? ME(e) : Math.ceil((e.byteLength || e.size) * DE)
}
function ME(e) {
  let t = 0,
    n = 0
  for (let r = 0, i = e.length; r < i; r++)
    (t = e.charCodeAt(r)),
      t < 128
        ? (n += 1)
        : t < 2048
        ? (n += 2)
        : t < 55296 || t >= 57344
        ? (n += 3)
        : (r++, (n += 4))
  return n
}
function $E(e) {
  let t = ''
  for (let n in e)
    e.hasOwnProperty(n) &&
      (t.length && (t += '&'),
      (t += encodeURIComponent(n) + '=' + encodeURIComponent(e[n])))
  return t
}
function BE(e) {
  let t = {},
    n = e.split('&')
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r].split('=')
    t[decodeURIComponent(o[0])] = decodeURIComponent(o[1])
  }
  return t
}
class FE extends Error {
  constructor(t, n, r) {
    super(t),
      (this.description = n),
      (this.context = r),
      (this.type = 'TransportError')
  }
}
class Pa extends ee {
  constructor(t) {
    super(),
      (this.writable = !1),
      vs(this, t),
      (this.opts = t),
      (this.query = t.query),
      (this.socket = t.socket)
  }
  onError(t, n, r) {
    return super.emitReserved('error', new FE(t, n, r)), this
  }
  open() {
    return (this.readyState = 'opening'), this.doOpen(), this
  }
  close() {
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        (this.doClose(), this.onClose()),
      this
    )
  }
  send(t) {
    this.readyState === 'open' && this.write(t)
  }
  onOpen() {
    ;(this.readyState = 'open'),
      (this.writable = !0),
      super.emitReserved('open')
  }
  onData(t) {
    const n = Na(t, this.socket.binaryType)
    this.onPacket(n)
  }
  onPacket(t) {
    super.emitReserved('packet', t)
  }
  onClose(t) {
    ;(this.readyState = 'closed'), super.emitReserved('close', t)
  }
  pause(t) {}
  createUri(t, n = {}) {
    return (
      t +
      '://' +
      this._hostname() +
      this._port() +
      this.opts.path +
      this._query(n)
    )
  }
  _hostname() {
    const t = this.opts.hostname
    return t.indexOf(':') === -1 ? t : '[' + t + ']'
  }
  _port() {
    return this.opts.port &&
      ((this.opts.secure && +(this.opts.port !== 443)) ||
        (!this.opts.secure && Number(this.opts.port) !== 80))
      ? ':' + this.opts.port
      : ''
  }
  _query(t) {
    const n = $E(t)
    return n.length ? '?' + n : ''
  }
}
const Sm =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(
      ''
    ),
  uu = 64,
  zE = {}
let wf = 0,
  _i = 0,
  Sf
function Ef(e) {
  let t = ''
  do (t = Sm[e % uu] + t), (e = Math.floor(e / uu))
  while (e > 0)
  return t
}
function Em() {
  const e = Ef(+new Date())
  return e !== Sf ? ((wf = 0), (Sf = e)) : e + '.' + Ef(wf++)
}
for (; _i < uu; _i++) zE[Sm[_i]] = _i
let xm = !1
try {
  xm = typeof XMLHttpRequest < 'u' && 'withCredentials' in new XMLHttpRequest()
} catch {}
const VE = xm
function Cm(e) {
  const t = e.xdomain
  try {
    if (typeof XMLHttpRequest < 'u' && (!t || VE)) return new XMLHttpRequest()
  } catch {}
  if (!t)
    try {
      return new ze[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP')
    } catch {}
}
function bE() {}
const WE = (function () {
  return new Cm({ xdomain: !1 }).responseType != null
})()
class HE extends Pa {
  constructor(t) {
    if ((super(t), (this.polling = !1), typeof location < 'u')) {
      const r = location.protocol === 'https:'
      let i = location.port
      i || (i = r ? '443' : '80'),
        (this.xd =
          (typeof location < 'u' && t.hostname !== location.hostname) ||
          i !== t.port)
    }
    const n = t && t.forceBase64
    ;(this.supportsBinary = WE && !n),
      this.opts.withCredentials && (this.cookieJar = void 0)
  }
  get name() {
    return 'polling'
  }
  doOpen() {
    this.poll()
  }
  pause(t) {
    this.readyState = 'pausing'
    const n = () => {
      ;(this.readyState = 'paused'), t()
    }
    if (this.polling || !this.writable) {
      let r = 0
      this.polling &&
        (r++,
        this.once('pollComplete', function () {
          --r || n()
        })),
        this.writable ||
          (r++,
          this.once('drain', function () {
            --r || n()
          }))
    } else n()
  }
  poll() {
    ;(this.polling = !0), this.doPoll(), this.emitReserved('poll')
  }
  onData(t) {
    const n = (r) => {
      if (
        (this.readyState === 'opening' && r.type === 'open' && this.onOpen(),
        r.type === 'close')
      )
        return (
          this.onClose({ description: 'transport closed by the server' }), !1
        )
      this.onPacket(r)
    }
    NE(t, this.socket.binaryType).forEach(n),
      this.readyState !== 'closed' &&
        ((this.polling = !1),
        this.emitReserved('pollComplete'),
        this.readyState === 'open' && this.poll())
  }
  doClose() {
    const t = () => {
      this.write([{ type: 'close' }])
    }
    this.readyState === 'open' ? t() : this.once('open', t)
  }
  write(t) {
    ;(this.writable = !1),
      OE(t, (n) => {
        this.doWrite(n, () => {
          ;(this.writable = !0), this.emitReserved('drain')
        })
      })
  }
  uri() {
    const t = this.opts.secure ? 'https' : 'http',
      n = this.query || {}
    return (
      this.opts.timestampRequests !== !1 &&
        (n[this.opts.timestampParam] = Em()),
      !this.supportsBinary && !n.sid && (n.b64 = 1),
      this.createUri(t, n)
    )
  }
  request(t = {}) {
    return (
      Object.assign(t, { xd: this.xd, cookieJar: this.cookieJar }, this.opts),
      new Mn(this.uri(), t)
    )
  }
  doWrite(t, n) {
    const r = this.request({ method: 'POST', data: t })
    r.on('success', n),
      r.on('error', (i, o) => {
        this.onError('xhr post error', i, o)
      })
  }
  doPoll() {
    const t = this.request()
    t.on('data', this.onData.bind(this)),
      t.on('error', (n, r) => {
        this.onError('xhr poll error', n, r)
      }),
      (this.pollXhr = t)
  }
}
let Mn = class bi extends ee {
  constructor(t, n) {
    super(),
      vs(this, n),
      (this.opts = n),
      (this.method = n.method || 'GET'),
      (this.uri = t),
      (this.data = n.data !== void 0 ? n.data : null),
      this.create()
  }
  create() {
    var t
    const n = wm(
      this.opts,
      'agent',
      'pfx',
      'key',
      'passphrase',
      'cert',
      'ca',
      'ciphers',
      'rejectUnauthorized',
      'autoUnref'
    )
    n.xdomain = !!this.opts.xd
    const r = (this.xhr = new Cm(n))
    try {
      r.open(this.method, this.uri, !0)
      try {
        if (this.opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0)
          for (let i in this.opts.extraHeaders)
            this.opts.extraHeaders.hasOwnProperty(i) &&
              r.setRequestHeader(i, this.opts.extraHeaders[i])
        }
      } catch {}
      if (this.method === 'POST')
        try {
          r.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
        } catch {}
      try {
        r.setRequestHeader('Accept', '*/*')
      } catch {}
      ;(t = this.opts.cookieJar) === null || t === void 0 || t.addCookies(r),
        'withCredentials' in r &&
          (r.withCredentials = this.opts.withCredentials),
        this.opts.requestTimeout && (r.timeout = this.opts.requestTimeout),
        (r.onreadystatechange = () => {
          var i
          r.readyState === 3 &&
            ((i = this.opts.cookieJar) === null ||
              i === void 0 ||
              i.parseCookies(r)),
            r.readyState === 4 &&
              (r.status === 200 || r.status === 1223
                ? this.onLoad()
                : this.setTimeoutFn(() => {
                    this.onError(typeof r.status == 'number' ? r.status : 0)
                  }, 0))
        }),
        r.send(this.data)
    } catch (i) {
      this.setTimeoutFn(() => {
        this.onError(i)
      }, 0)
      return
    }
    typeof document < 'u' &&
      ((this.index = bi.requestsCount++), (bi.requests[this.index] = this))
  }
  onError(t) {
    this.emitReserved('error', t, this.xhr), this.cleanup(!0)
  }
  cleanup(t) {
    if (!(typeof this.xhr > 'u' || this.xhr === null)) {
      if (((this.xhr.onreadystatechange = bE), t))
        try {
          this.xhr.abort()
        } catch {}
      typeof document < 'u' && delete bi.requests[this.index], (this.xhr = null)
    }
  }
  onLoad() {
    const t = this.xhr.responseText
    t !== null &&
      (this.emitReserved('data', t),
      this.emitReserved('success'),
      this.cleanup())
  }
  abort() {
    this.cleanup()
  }
}
Mn.requestsCount = 0
Mn.requests = {}
if (typeof document < 'u') {
  if (typeof attachEvent == 'function') attachEvent('onunload', xf)
  else if (typeof addEventListener == 'function') {
    const e = 'onpagehide' in ze ? 'pagehide' : 'unload'
    addEventListener(e, xf, !1)
  }
}
function xf() {
  for (let e in Mn.requests)
    Mn.requests.hasOwnProperty(e) && Mn.requests[e].abort()
}
const La = (() =>
    typeof Promise == 'function' && typeof Promise.resolve == 'function'
      ? (t) => Promise.resolve().then(t)
      : (t, n) => n(t, 0))(),
  Ri = ze.WebSocket || ze.MozWebSocket,
  Cf = !0,
  qE = 'arraybuffer',
  kf =
    typeof navigator < 'u' &&
    typeof navigator.product == 'string' &&
    navigator.product.toLowerCase() === 'reactnative'
class KE extends Pa {
  constructor(t) {
    super(t), (this.supportsBinary = !t.forceBase64)
  }
  get name() {
    return 'websocket'
  }
  doOpen() {
    if (!this.check()) return
    const t = this.uri(),
      n = this.opts.protocols,
      r = kf
        ? {}
        : wm(
            this.opts,
            'agent',
            'perMessageDeflate',
            'pfx',
            'key',
            'passphrase',
            'cert',
            'ca',
            'ciphers',
            'rejectUnauthorized',
            'localAddress',
            'protocolVersion',
            'origin',
            'maxPayload',
            'family',
            'checkServerIdentity'
          )
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders)
    try {
      this.ws = Cf && !kf ? (n ? new Ri(t, n) : new Ri(t)) : new Ri(t, n, r)
    } catch (i) {
      return this.emitReserved('error', i)
    }
    ;(this.ws.binaryType = this.socket.binaryType), this.addEventListeners()
  }
  addEventListeners() {
    ;(this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen()
    }),
      (this.ws.onclose = (t) =>
        this.onClose({
          description: 'websocket connection closed',
          context: t,
        })),
      (this.ws.onmessage = (t) => this.onData(t.data)),
      (this.ws.onerror = (t) => this.onError('websocket error', t))
  }
  write(t) {
    this.writable = !1
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1
      Oa(r, this.supportsBinary, (o) => {
        const s = {}
        try {
          Cf && this.ws.send(o)
        } catch {}
        i &&
          La(() => {
            ;(this.writable = !0), this.emitReserved('drain')
          }, this.setTimeoutFn)
      })
    }
  }
  doClose() {
    typeof this.ws < 'u' && (this.ws.close(), (this.ws = null))
  }
  uri() {
    const t = this.opts.secure ? 'wss' : 'ws',
      n = this.query || {}
    return (
      this.opts.timestampRequests && (n[this.opts.timestampParam] = Em()),
      this.supportsBinary || (n.b64 = 1),
      this.createUri(t, n)
    )
  }
  check() {
    return !!Ri
  }
}
class QE extends Pa {
  get name() {
    return 'webtransport'
  }
  doOpen() {
    typeof WebTransport == 'function' &&
      ((this.transport = new WebTransport(
        this.createUri('https'),
        this.opts.transportOptions[this.name]
      )),
      this.transport.closed
        .then(() => {
          this.onClose()
        })
        .catch((t) => {
          this.onError('webtransport error', t)
        }),
      this.transport.ready.then(() => {
        this.transport.createBidirectionalStream().then((t) => {
          const n = LE(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
            r = t.readable.pipeThrough(n).getReader(),
            i = PE()
          i.readable.pipeTo(t.writable), (this.writer = i.writable.getWriter())
          const o = () => {
            r.read()
              .then(({ done: l, value: u }) => {
                l || (this.onPacket(u), o())
              })
              .catch((l) => {})
          }
          o()
          const s = { type: 'open' }
          this.query.sid && (s.data = `{"sid":"${this.query.sid}"}`),
            this.writer.write(s).then(() => this.onOpen())
        })
      }))
  }
  write(t) {
    this.writable = !1
    for (let n = 0; n < t.length; n++) {
      const r = t[n],
        i = n === t.length - 1
      this.writer.write(r).then(() => {
        i &&
          La(() => {
            ;(this.writable = !0), this.emitReserved('drain')
          }, this.setTimeoutFn)
      })
    }
  }
  doClose() {
    var t
    ;(t = this.transport) === null || t === void 0 || t.close()
  }
}
const JE = { websocket: KE, webtransport: QE, polling: HE },
  GE =
    /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
  YE = [
    'source',
    'protocol',
    'authority',
    'userInfo',
    'user',
    'password',
    'host',
    'port',
    'relative',
    'path',
    'directory',
    'file',
    'query',
    'anchor',
  ]
function au(e) {
  if (e.length > 2e3) throw 'URI too long'
  const t = e,
    n = e.indexOf('['),
    r = e.indexOf(']')
  n != -1 &&
    r != -1 &&
    (e =
      e.substring(0, n) +
      e.substring(n, r).replace(/:/g, ';') +
      e.substring(r, e.length))
  let i = GE.exec(e || ''),
    o = {},
    s = 14
  for (; s--; ) o[YE[s]] = i[s] || ''
  return (
    n != -1 &&
      r != -1 &&
      ((o.source = t),
      (o.host = o.host.substring(1, o.host.length - 1).replace(/;/g, ':')),
      (o.authority = o.authority
        .replace('[', '')
        .replace(']', '')
        .replace(/;/g, ':')),
      (o.ipv6uri = !0)),
    (o.pathNames = XE(o, o.path)),
    (o.queryKey = ZE(o, o.query)),
    o
  )
}
function XE(e, t) {
  const n = /\/{2,9}/g,
    r = t.replace(n, '/').split('/')
  return (
    (t.slice(0, 1) == '/' || t.length === 0) && r.splice(0, 1),
    t.slice(-1) == '/' && r.splice(r.length - 1, 1),
    r
  )
}
function ZE(e, t) {
  const n = {}
  return (
    t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (r, i, o) {
      i && (n[i] = o)
    }),
    n
  )
}
let km = class vn extends ee {
  constructor(t, n = {}) {
    super(),
      (this.binaryType = qE),
      (this.writeBuffer = []),
      t && typeof t == 'object' && ((n = t), (t = null)),
      t
        ? ((t = au(t)),
          (n.hostname = t.host),
          (n.secure = t.protocol === 'https' || t.protocol === 'wss'),
          (n.port = t.port),
          t.query && (n.query = t.query))
        : n.host && (n.hostname = au(n.host).host),
      vs(this, n),
      (this.secure =
        n.secure != null
          ? n.secure
          : typeof location < 'u' && location.protocol === 'https:'),
      n.hostname && !n.port && (n.port = this.secure ? '443' : '80'),
      (this.hostname =
        n.hostname ||
        (typeof location < 'u' ? location.hostname : 'localhost')),
      (this.port =
        n.port ||
        (typeof location < 'u' && location.port
          ? location.port
          : this.secure
          ? '443'
          : '80')),
      (this.transports = n.transports || [
        'polling',
        'websocket',
        'webtransport',
      ]),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0),
      (this.opts = Object.assign(
        {
          path: '/engine.io',
          agent: !1,
          withCredentials: !1,
          upgrade: !0,
          timestampParam: 't',
          rememberUpgrade: !1,
          addTrailingSlash: !0,
          rejectUnauthorized: !0,
          perMessageDeflate: { threshold: 1024 },
          transportOptions: {},
          closeOnBeforeunload: !1,
        },
        n
      )),
      (this.opts.path =
        this.opts.path.replace(/\/$/, '') +
        (this.opts.addTrailingSlash ? '/' : '')),
      typeof this.opts.query == 'string' &&
        (this.opts.query = BE(this.opts.query)),
      (this.id = null),
      (this.upgrades = null),
      (this.pingInterval = null),
      (this.pingTimeout = null),
      (this.pingTimeoutTimer = null),
      typeof addEventListener == 'function' &&
        (this.opts.closeOnBeforeunload &&
          ((this.beforeunloadEventListener = () => {
            this.transport &&
              (this.transport.removeAllListeners(), this.transport.close())
          }),
          addEventListener('beforeunload', this.beforeunloadEventListener, !1)),
        this.hostname !== 'localhost' &&
          ((this.offlineEventListener = () => {
            this.onClose('transport close', {
              description: 'network connection lost',
            })
          }),
          addEventListener('offline', this.offlineEventListener, !1))),
      this.open()
  }
  createTransport(t) {
    const n = Object.assign({}, this.opts.query)
    ;(n.EIO = vm), (n.transport = t), this.id && (n.sid = this.id)
    const r = Object.assign(
      {},
      this.opts,
      {
        query: n,
        socket: this,
        hostname: this.hostname,
        secure: this.secure,
        port: this.port,
      },
      this.opts.transportOptions[t]
    )
    return new JE[t](r)
  }
  open() {
    let t
    if (
      this.opts.rememberUpgrade &&
      vn.priorWebsocketSuccess &&
      this.transports.indexOf('websocket') !== -1
    )
      t = 'websocket'
    else if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved('error', 'No transports available')
      }, 0)
      return
    } else t = this.transports[0]
    this.readyState = 'opening'
    try {
      t = this.createTransport(t)
    } catch {
      this.transports.shift(), this.open()
      return
    }
    t.open(), this.setTransport(t)
  }
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(),
      (this.transport = t),
      t
        .on('drain', this.onDrain.bind(this))
        .on('packet', this.onPacket.bind(this))
        .on('error', this.onError.bind(this))
        .on('close', (n) => this.onClose('transport close', n))
  }
  probe(t) {
    let n = this.createTransport(t),
      r = !1
    vn.priorWebsocketSuccess = !1
    const i = () => {
      r ||
        (n.send([{ type: 'ping', data: 'probe' }]),
        n.once('packet', (f) => {
          if (!r)
            if (f.type === 'pong' && f.data === 'probe') {
              if (
                ((this.upgrading = !0), this.emitReserved('upgrading', n), !n)
              )
                return
              ;(vn.priorWebsocketSuccess = n.name === 'websocket'),
                this.transport.pause(() => {
                  r ||
                    (this.readyState !== 'closed' &&
                      (c(),
                      this.setTransport(n),
                      n.send([{ type: 'upgrade' }]),
                      this.emitReserved('upgrade', n),
                      (n = null),
                      (this.upgrading = !1),
                      this.flush()))
                })
            } else {
              const y = new Error('probe error')
              ;(y.transport = n.name), this.emitReserved('upgradeError', y)
            }
        }))
    }
    function o() {
      r || ((r = !0), c(), n.close(), (n = null))
    }
    const s = (f) => {
      const y = new Error('probe error: ' + f)
      ;(y.transport = n.name), o(), this.emitReserved('upgradeError', y)
    }
    function l() {
      s('transport closed')
    }
    function u() {
      s('socket closed')
    }
    function a(f) {
      n && f.name !== n.name && o()
    }
    const c = () => {
      n.removeListener('open', i),
        n.removeListener('error', s),
        n.removeListener('close', l),
        this.off('close', u),
        this.off('upgrading', a)
    }
    n.once('open', i),
      n.once('error', s),
      n.once('close', l),
      this.once('close', u),
      this.once('upgrading', a),
      this.upgrades.indexOf('webtransport') !== -1 && t !== 'webtransport'
        ? this.setTimeoutFn(() => {
            r || n.open()
          }, 200)
        : n.open()
  }
  onOpen() {
    if (
      ((this.readyState = 'open'),
      (vn.priorWebsocketSuccess = this.transport.name === 'websocket'),
      this.emitReserved('open'),
      this.flush(),
      this.readyState === 'open' && this.opts.upgrade)
    ) {
      let t = 0
      const n = this.upgrades.length
      for (; t < n; t++) this.probe(this.upgrades[t])
    }
  }
  onPacket(t) {
    if (
      this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing'
    )
      switch (
        (this.emitReserved('packet', t),
        this.emitReserved('heartbeat'),
        this.resetPingTimeout(),
        t.type)
      ) {
        case 'open':
          this.onHandshake(JSON.parse(t.data))
          break
        case 'ping':
          this.sendPacket('pong'),
            this.emitReserved('ping'),
            this.emitReserved('pong')
          break
        case 'error':
          const n = new Error('server error')
          ;(n.code = t.data), this.onError(n)
          break
        case 'message':
          this.emitReserved('data', t.data),
            this.emitReserved('message', t.data)
          break
      }
  }
  onHandshake(t) {
    this.emitReserved('handshake', t),
      (this.id = t.sid),
      (this.transport.query.sid = t.sid),
      (this.upgrades = this.filterUpgrades(t.upgrades)),
      (this.pingInterval = t.pingInterval),
      (this.pingTimeout = t.pingTimeout),
      (this.maxPayload = t.maxPayload),
      this.onOpen(),
      this.readyState !== 'closed' && this.resetPingTimeout()
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer),
      (this.pingTimeoutTimer = this.setTimeoutFn(() => {
        this.onClose('ping timeout')
      }, this.pingInterval + this.pingTimeout)),
      this.opts.autoUnref && this.pingTimeoutTimer.unref()
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen),
      (this.prevBufferLen = 0),
      this.writeBuffer.length === 0 ? this.emitReserved('drain') : this.flush()
  }
  flush() {
    if (
      this.readyState !== 'closed' &&
      this.transport.writable &&
      !this.upgrading &&
      this.writeBuffer.length
    ) {
      const t = this.getWritablePackets()
      this.transport.send(t),
        (this.prevBufferLen = t.length),
        this.emitReserved('flush')
    }
  }
  getWritablePackets() {
    if (
      !(
        this.maxPayload &&
        this.transport.name === 'polling' &&
        this.writeBuffer.length > 1
      )
    )
      return this.writeBuffer
    let n = 1
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const i = this.writeBuffer[r].data
      if ((i && (n += IE(i)), r > 0 && n > this.maxPayload))
        return this.writeBuffer.slice(0, r)
      n += 2
    }
    return this.writeBuffer
  }
  write(t, n, r) {
    return this.sendPacket('message', t, n, r), this
  }
  send(t, n, r) {
    return this.sendPacket('message', t, n, r), this
  }
  sendPacket(t, n, r, i) {
    if (
      (typeof n == 'function' && ((i = n), (n = void 0)),
      typeof r == 'function' && ((i = r), (r = null)),
      this.readyState === 'closing' || this.readyState === 'closed')
    )
      return
    ;(r = r || {}), (r.compress = r.compress !== !1)
    const o = { type: t, data: n, options: r }
    this.emitReserved('packetCreate', o),
      this.writeBuffer.push(o),
      i && this.once('flush', i),
      this.flush()
  }
  close() {
    const t = () => {
        this.onClose('forced close'), this.transport.close()
      },
      n = () => {
        this.off('upgrade', n), this.off('upgradeError', n), t()
      },
      r = () => {
        this.once('upgrade', n), this.once('upgradeError', n)
      }
    return (
      (this.readyState === 'opening' || this.readyState === 'open') &&
        ((this.readyState = 'closing'),
        this.writeBuffer.length
          ? this.once('drain', () => {
              this.upgrading ? r() : t()
            })
          : this.upgrading
          ? r()
          : t()),
      this
    )
  }
  onError(t) {
    ;(vn.priorWebsocketSuccess = !1),
      this.emitReserved('error', t),
      this.onClose('transport error', t)
  }
  onClose(t, n) {
    ;(this.readyState === 'opening' ||
      this.readyState === 'open' ||
      this.readyState === 'closing') &&
      (this.clearTimeoutFn(this.pingTimeoutTimer),
      this.transport.removeAllListeners('close'),
      this.transport.close(),
      this.transport.removeAllListeners(),
      typeof removeEventListener == 'function' &&
        (removeEventListener(
          'beforeunload',
          this.beforeunloadEventListener,
          !1
        ),
        removeEventListener('offline', this.offlineEventListener, !1)),
      (this.readyState = 'closed'),
      (this.id = null),
      this.emitReserved('close', t, n),
      (this.writeBuffer = []),
      (this.prevBufferLen = 0))
  }
  filterUpgrades(t) {
    const n = []
    let r = 0
    const i = t.length
    for (; r < i; r++) ~this.transports.indexOf(t[r]) && n.push(t[r])
    return n
  }
}
km.protocol = vm
function ex(e, t = '', n) {
  let r = e
  ;(n = n || (typeof location < 'u' && location)),
    e == null && (e = n.protocol + '//' + n.host),
    typeof e == 'string' &&
      (e.charAt(0) === '/' &&
        (e.charAt(1) === '/' ? (e = n.protocol + e) : (e = n.host + e)),
      /^(https?|wss?):\/\//.test(e) ||
        (typeof n < 'u' ? (e = n.protocol + '//' + e) : (e = 'https://' + e)),
      (r = au(e))),
    r.port ||
      (/^(http|ws)$/.test(r.protocol)
        ? (r.port = '80')
        : /^(http|ws)s$/.test(r.protocol) && (r.port = '443')),
    (r.path = r.path || '/')
  const o = r.host.indexOf(':') !== -1 ? '[' + r.host + ']' : r.host
  return (
    (r.id = r.protocol + '://' + o + ':' + r.port + t),
    (r.href =
      r.protocol + '://' + o + (n && n.port === r.port ? '' : ':' + r.port)),
    r
  )
}
const tx = typeof ArrayBuffer == 'function',
  nx = (e) =>
    typeof ArrayBuffer.isView == 'function'
      ? ArrayBuffer.isView(e)
      : e.buffer instanceof ArrayBuffer,
  _m = Object.prototype.toString,
  rx =
    typeof Blob == 'function' ||
    (typeof Blob < 'u' && _m.call(Blob) === '[object BlobConstructor]'),
  ix =
    typeof File == 'function' ||
    (typeof File < 'u' && _m.call(File) === '[object FileConstructor]')
function Aa(e) {
  return (
    (tx && (e instanceof ArrayBuffer || nx(e))) ||
    (rx && e instanceof Blob) ||
    (ix && e instanceof File)
  )
}
function Wi(e, t) {
  if (!e || typeof e != 'object') return !1
  if (Array.isArray(e)) {
    for (let n = 0, r = e.length; n < r; n++) if (Wi(e[n])) return !0
    return !1
  }
  if (Aa(e)) return !0
  if (e.toJSON && typeof e.toJSON == 'function' && arguments.length === 1)
    return Wi(e.toJSON(), !0)
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && Wi(e[n])) return !0
  return !1
}
function ox(e) {
  const t = [],
    n = e.data,
    r = e
  return (
    (r.data = cu(n, t)), (r.attachments = t.length), { packet: r, buffers: t }
  )
}
function cu(e, t) {
  if (!e) return e
  if (Aa(e)) {
    const n = { _placeholder: !0, num: t.length }
    return t.push(e), n
  } else if (Array.isArray(e)) {
    const n = new Array(e.length)
    for (let r = 0; r < e.length; r++) n[r] = cu(e[r], t)
    return n
  } else if (typeof e == 'object' && !(e instanceof Date)) {
    const n = {}
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (n[r] = cu(e[r], t))
    return n
  }
  return e
}
function sx(e, t) {
  return (e.data = fu(e.data, t)), delete e.attachments, e
}
function fu(e, t) {
  if (!e) return e
  if (e && e._placeholder === !0) {
    if (typeof e.num == 'number' && e.num >= 0 && e.num < t.length)
      return t[e.num]
    throw new Error('illegal attachments')
  } else if (Array.isArray(e))
    for (let n = 0; n < e.length; n++) e[n] = fu(e[n], t)
  else if (typeof e == 'object')
    for (const n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (e[n] = fu(e[n], t))
  return e
}
const lx = [
    'connect',
    'connect_error',
    'disconnect',
    'disconnecting',
    'newListener',
    'removeListener',
  ],
  ux = 5
var I
;(function (e) {
  ;(e[(e.CONNECT = 0)] = 'CONNECT'),
    (e[(e.DISCONNECT = 1)] = 'DISCONNECT'),
    (e[(e.EVENT = 2)] = 'EVENT'),
    (e[(e.ACK = 3)] = 'ACK'),
    (e[(e.CONNECT_ERROR = 4)] = 'CONNECT_ERROR'),
    (e[(e.BINARY_EVENT = 5)] = 'BINARY_EVENT'),
    (e[(e.BINARY_ACK = 6)] = 'BINARY_ACK')
})(I || (I = {}))
class ax {
  constructor(t) {
    this.replacer = t
  }
  encode(t) {
    return (t.type === I.EVENT || t.type === I.ACK) && Wi(t)
      ? this.encodeAsBinary({
          type: t.type === I.EVENT ? I.BINARY_EVENT : I.BINARY_ACK,
          nsp: t.nsp,
          data: t.data,
          id: t.id,
        })
      : [this.encodeAsString(t)]
  }
  encodeAsString(t) {
    let n = '' + t.type
    return (
      (t.type === I.BINARY_EVENT || t.type === I.BINARY_ACK) &&
        (n += t.attachments + '-'),
      t.nsp && t.nsp !== '/' && (n += t.nsp + ','),
      t.id != null && (n += t.id),
      t.data != null && (n += JSON.stringify(t.data, this.replacer)),
      n
    )
  }
  encodeAsBinary(t) {
    const n = ox(t),
      r = this.encodeAsString(n.packet),
      i = n.buffers
    return i.unshift(r), i
  }
}
function _f(e) {
  return Object.prototype.toString.call(e) === '[object Object]'
}
class ja extends ee {
  constructor(t) {
    super(), (this.reviver = t)
  }
  add(t) {
    let n
    if (typeof t == 'string') {
      if (this.reconstructor)
        throw new Error('got plaintext data when reconstructing a packet')
      n = this.decodeString(t)
      const r = n.type === I.BINARY_EVENT
      r || n.type === I.BINARY_ACK
        ? ((n.type = r ? I.EVENT : I.ACK),
          (this.reconstructor = new cx(n)),
          n.attachments === 0 && super.emitReserved('decoded', n))
        : super.emitReserved('decoded', n)
    } else if (Aa(t) || t.base64)
      if (this.reconstructor)
        (n = this.reconstructor.takeBinaryData(t)),
          n && ((this.reconstructor = null), super.emitReserved('decoded', n))
      else throw new Error('got binary data when not reconstructing a packet')
    else throw new Error('Unknown type: ' + t)
  }
  decodeString(t) {
    let n = 0
    const r = { type: Number(t.charAt(0)) }
    if (I[r.type] === void 0) throw new Error('unknown packet type ' + r.type)
    if (r.type === I.BINARY_EVENT || r.type === I.BINARY_ACK) {
      const o = n + 1
      for (; t.charAt(++n) !== '-' && n != t.length; );
      const s = t.substring(o, n)
      if (s != Number(s) || t.charAt(n) !== '-')
        throw new Error('Illegal attachments')
      r.attachments = Number(s)
    }
    if (t.charAt(n + 1) === '/') {
      const o = n + 1
      for (; ++n && !(t.charAt(n) === ',' || n === t.length); );
      r.nsp = t.substring(o, n)
    } else r.nsp = '/'
    const i = t.charAt(n + 1)
    if (i !== '' && Number(i) == i) {
      const o = n + 1
      for (; ++n; ) {
        const s = t.charAt(n)
        if (s == null || Number(s) != s) {
          --n
          break
        }
        if (n === t.length) break
      }
      r.id = Number(t.substring(o, n + 1))
    }
    if (t.charAt(++n)) {
      const o = this.tryParse(t.substr(n))
      if (ja.isPayloadValid(r.type, o)) r.data = o
      else throw new Error('invalid payload')
    }
    return r
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver)
    } catch {
      return !1
    }
  }
  static isPayloadValid(t, n) {
    switch (t) {
      case I.CONNECT:
        return _f(n)
      case I.DISCONNECT:
        return n === void 0
      case I.CONNECT_ERROR:
        return typeof n == 'string' || _f(n)
      case I.EVENT:
      case I.BINARY_EVENT:
        return (
          Array.isArray(n) &&
          (typeof n[0] == 'number' ||
            (typeof n[0] == 'string' && lx.indexOf(n[0]) === -1))
        )
      case I.ACK:
      case I.BINARY_ACK:
        return Array.isArray(n)
    }
  }
  destroy() {
    this.reconstructor &&
      (this.reconstructor.finishedReconstruction(), (this.reconstructor = null))
  }
}
class cx {
  constructor(t) {
    ;(this.packet = t), (this.buffers = []), (this.reconPack = t)
  }
  takeBinaryData(t) {
    if (
      (this.buffers.push(t), this.buffers.length === this.reconPack.attachments)
    ) {
      const n = sx(this.reconPack, this.buffers)
      return this.finishedReconstruction(), n
    }
    return null
  }
  finishedReconstruction() {
    ;(this.reconPack = null), (this.buffers = [])
  }
}
const fx = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      Decoder: ja,
      Encoder: ax,
      get PacketType() {
        return I
      },
      protocol: ux,
    },
    Symbol.toStringTag,
    { value: 'Module' }
  )
)
function Xe(e, t, n) {
  return (
    e.on(t, n),
    function () {
      e.off(t, n)
    }
  )
}
const dx = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  newListener: 1,
  removeListener: 1,
})
class Rm extends ee {
  constructor(t, n, r) {
    super(),
      (this.connected = !1),
      (this.recovered = !1),
      (this.receiveBuffer = []),
      (this.sendBuffer = []),
      (this._queue = []),
      (this._queueSeq = 0),
      (this.ids = 0),
      (this.acks = {}),
      (this.flags = {}),
      (this.io = t),
      (this.nsp = n),
      r && r.auth && (this.auth = r.auth),
      (this._opts = Object.assign({}, r)),
      this.io._autoConnect && this.open()
  }
  get disconnected() {
    return !this.connected
  }
  subEvents() {
    if (this.subs) return
    const t = this.io
    this.subs = [
      Xe(t, 'open', this.onopen.bind(this)),
      Xe(t, 'packet', this.onpacket.bind(this)),
      Xe(t, 'error', this.onerror.bind(this)),
      Xe(t, 'close', this.onclose.bind(this)),
    ]
  }
  get active() {
    return !!this.subs
  }
  connect() {
    return this.connected
      ? this
      : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === 'open' && this.onopen(),
        this)
  }
  open() {
    return this.connect()
  }
  send(...t) {
    return t.unshift('message'), this.emit.apply(this, t), this
  }
  emit(t, ...n) {
    if (dx.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name')
    if (
      (n.unshift(t),
      this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
    )
      return this._addToQueue(n), this
    const r = { type: I.EVENT, data: n }
    if (
      ((r.options = {}),
      (r.options.compress = this.flags.compress !== !1),
      typeof n[n.length - 1] == 'function')
    ) {
      const s = this.ids++,
        l = n.pop()
      this._registerAckCallback(s, l), (r.id = s)
    }
    const i =
      this.io.engine &&
      this.io.engine.transport &&
      this.io.engine.transport.writable
    return (
      (this.flags.volatile && (!i || !this.connected)) ||
        (this.connected
          ? (this.notifyOutgoingListeners(r), this.packet(r))
          : this.sendBuffer.push(r)),
      (this.flags = {}),
      this
    )
  }
  _registerAckCallback(t, n) {
    var r
    const i =
      (r = this.flags.timeout) !== null && r !== void 0
        ? r
        : this._opts.ackTimeout
    if (i === void 0) {
      this.acks[t] = n
      return
    }
    const o = this.io.setTimeoutFn(() => {
        delete this.acks[t]
        for (let l = 0; l < this.sendBuffer.length; l++)
          this.sendBuffer[l].id === t && this.sendBuffer.splice(l, 1)
        n.call(this, new Error('operation has timed out'))
      }, i),
      s = (...l) => {
        this.io.clearTimeoutFn(o), n.apply(this, l)
      }
    ;(s.withError = !0), (this.acks[t] = s)
  }
  emitWithAck(t, ...n) {
    return new Promise((r, i) => {
      const o = (s, l) => (s ? i(s) : r(l))
      ;(o.withError = !0), n.push(o), this.emit(t, ...n)
    })
  }
  _addToQueue(t) {
    let n
    typeof t[t.length - 1] == 'function' && (n = t.pop())
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags),
    }
    t.push((i, ...o) =>
      r !== this._queue[0]
        ? void 0
        : (i !== null
            ? r.tryCount > this._opts.retries &&
              (this._queue.shift(), n && n(i))
            : (this._queue.shift(), n && n(null, ...o)),
          (r.pending = !1),
          this._drainQueue())
    ),
      this._queue.push(r),
      this._drainQueue()
  }
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0) return
    const n = this._queue[0]
    ;(n.pending && !t) ||
      ((n.pending = !0),
      n.tryCount++,
      (this.flags = n.flags),
      this.emit.apply(this, n.args))
  }
  packet(t) {
    ;(t.nsp = this.nsp), this.io._packet(t)
  }
  onopen() {
    typeof this.auth == 'function'
      ? this.auth((t) => {
          this._sendConnectPacket(t)
        })
      : this._sendConnectPacket(this.auth)
  }
  _sendConnectPacket(t) {
    this.packet({
      type: I.CONNECT,
      data: this._pid
        ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t)
        : t,
    })
  }
  onerror(t) {
    this.connected || this.emitReserved('connect_error', t)
  }
  onclose(t, n) {
    ;(this.connected = !1),
      delete this.id,
      this.emitReserved('disconnect', t, n),
      this._clearAcks()
  }
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t]
        delete this.acks[t],
          r.withError && r.call(this, new Error('socket has been disconnected'))
      }
    })
  }
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case I.CONNECT:
          t.data && t.data.sid
            ? this.onconnect(t.data.sid, t.data.pid)
            : this.emitReserved(
                'connect_error',
                new Error(
                  'It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)'
                )
              )
          break
        case I.EVENT:
        case I.BINARY_EVENT:
          this.onevent(t)
          break
        case I.ACK:
        case I.BINARY_ACK:
          this.onack(t)
          break
        case I.DISCONNECT:
          this.ondisconnect()
          break
        case I.CONNECT_ERROR:
          this.destroy()
          const r = new Error(t.data.message)
          ;(r.data = t.data.data), this.emitReserved('connect_error', r)
          break
      }
  }
  onevent(t) {
    const n = t.data || []
    t.id != null && n.push(this.ack(t.id)),
      this.connected
        ? this.emitEvent(n)
        : this.receiveBuffer.push(Object.freeze(n))
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const n = this._anyListeners.slice()
      for (const r of n) r.apply(this, t)
    }
    super.emit.apply(this, t),
      this._pid &&
        t.length &&
        typeof t[t.length - 1] == 'string' &&
        (this._lastOffset = t[t.length - 1])
  }
  ack(t) {
    const n = this
    let r = !1
    return function (...i) {
      r || ((r = !0), n.packet({ type: I.ACK, id: t, data: i }))
    }
  }
  onack(t) {
    const n = this.acks[t.id]
    typeof n == 'function' &&
      (delete this.acks[t.id],
      n.withError && t.data.unshift(null),
      n.apply(this, t.data))
  }
  onconnect(t, n) {
    ;(this.id = t),
      (this.recovered = n && this._pid === n),
      (this._pid = n),
      (this.connected = !0),
      this.emitBuffered(),
      this.emitReserved('connect'),
      this._drainQueue(!0)
  }
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)),
      (this.receiveBuffer = []),
      this.sendBuffer.forEach((t) => {
        this.notifyOutgoingListeners(t), this.packet(t)
      }),
      (this.sendBuffer = [])
  }
  ondisconnect() {
    this.destroy(), this.onclose('io server disconnect')
  }
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)),
      this.io._destroy(this)
  }
  disconnect() {
    return (
      this.connected && this.packet({ type: I.DISCONNECT }),
      this.destroy(),
      this.connected && this.onclose('io client disconnect'),
      this
    )
  }
  close() {
    return this.disconnect()
  }
  compress(t) {
    return (this.flags.compress = t), this
  }
  get volatile() {
    return (this.flags.volatile = !0), this
  }
  timeout(t) {
    return (this.flags.timeout = t), this
  }
  onAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.push(t),
      this
    )
  }
  prependAny(t) {
    return (
      (this._anyListeners = this._anyListeners || []),
      this._anyListeners.unshift(t),
      this
    )
  }
  offAny(t) {
    if (!this._anyListeners) return this
    if (t) {
      const n = this._anyListeners
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this
    } else this._anyListeners = []
    return this
  }
  listenersAny() {
    return this._anyListeners || []
  }
  onAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.push(t),
      this
    )
  }
  prependAnyOutgoing(t) {
    return (
      (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
      this._anyOutgoingListeners.unshift(t),
      this
    )
  }
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners) return this
    if (t) {
      const n = this._anyOutgoingListeners
      for (let r = 0; r < n.length; r++)
        if (t === n[r]) return n.splice(r, 1), this
    } else this._anyOutgoingListeners = []
    return this
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || []
  }
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const n = this._anyOutgoingListeners.slice()
      for (const r of n) r.apply(this, t.data)
    }
  }
}
function nr(e) {
  ;(e = e || {}),
    (this.ms = e.min || 100),
    (this.max = e.max || 1e4),
    (this.factor = e.factor || 2),
    (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
    (this.attempts = 0)
}
nr.prototype.duration = function () {
  var e = this.ms * Math.pow(this.factor, this.attempts++)
  if (this.jitter) {
    var t = Math.random(),
      n = Math.floor(t * this.jitter * e)
    e = Math.floor(t * 10) & 1 ? e + n : e - n
  }
  return Math.min(e, this.max) | 0
}
nr.prototype.reset = function () {
  this.attempts = 0
}
nr.prototype.setMin = function (e) {
  this.ms = e
}
nr.prototype.setMax = function (e) {
  this.max = e
}
nr.prototype.setJitter = function (e) {
  this.jitter = e
}
class du extends ee {
  constructor(t, n) {
    var r
    super(),
      (this.nsps = {}),
      (this.subs = []),
      t && typeof t == 'object' && ((n = t), (t = void 0)),
      (n = n || {}),
      (n.path = n.path || '/socket.io'),
      (this.opts = n),
      vs(this, n),
      this.reconnection(n.reconnection !== !1),
      this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
      this.reconnectionDelay(n.reconnectionDelay || 1e3),
      this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
      this.randomizationFactor(
        (r = n.randomizationFactor) !== null && r !== void 0 ? r : 0.5
      ),
      (this.backoff = new nr({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor(),
      })),
      this.timeout(n.timeout == null ? 2e4 : n.timeout),
      (this._readyState = 'closed'),
      (this.uri = t)
    const i = n.parser || fx
    ;(this.encoder = new i.Encoder()),
      (this.decoder = new i.Decoder()),
      (this._autoConnect = n.autoConnect !== !1),
      this._autoConnect && this.open()
  }
  reconnection(t) {
    return arguments.length
      ? ((this._reconnection = !!t), this)
      : this._reconnection
  }
  reconnectionAttempts(t) {
    return t === void 0
      ? this._reconnectionAttempts
      : ((this._reconnectionAttempts = t), this)
  }
  reconnectionDelay(t) {
    var n
    return t === void 0
      ? this._reconnectionDelay
      : ((this._reconnectionDelay = t),
        (n = this.backoff) === null || n === void 0 || n.setMin(t),
        this)
  }
  randomizationFactor(t) {
    var n
    return t === void 0
      ? this._randomizationFactor
      : ((this._randomizationFactor = t),
        (n = this.backoff) === null || n === void 0 || n.setJitter(t),
        this)
  }
  reconnectionDelayMax(t) {
    var n
    return t === void 0
      ? this._reconnectionDelayMax
      : ((this._reconnectionDelayMax = t),
        (n = this.backoff) === null || n === void 0 || n.setMax(t),
        this)
  }
  timeout(t) {
    return arguments.length ? ((this._timeout = t), this) : this._timeout
  }
  maybeReconnectOnOpen() {
    !this._reconnecting &&
      this._reconnection &&
      this.backoff.attempts === 0 &&
      this.reconnect()
  }
  open(t) {
    if (~this._readyState.indexOf('open')) return this
    this.engine = new km(this.uri, this.opts)
    const n = this.engine,
      r = this
    ;(this._readyState = 'opening'), (this.skipReconnect = !1)
    const i = Xe(n, 'open', function () {
        r.onopen(), t && t()
      }),
      o = (l) => {
        this.cleanup(),
          (this._readyState = 'closed'),
          this.emitReserved('error', l),
          t ? t(l) : this.maybeReconnectOnOpen()
      },
      s = Xe(n, 'error', o)
    if (this._timeout !== !1) {
      const l = this._timeout,
        u = this.setTimeoutFn(() => {
          i(), o(new Error('timeout')), n.close()
        }, l)
      this.opts.autoUnref && u.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(u)
        })
    }
    return this.subs.push(i), this.subs.push(s), this
  }
  connect(t) {
    return this.open(t)
  }
  onopen() {
    this.cleanup(), (this._readyState = 'open'), this.emitReserved('open')
    const t = this.engine
    this.subs.push(
      Xe(t, 'ping', this.onping.bind(this)),
      Xe(t, 'data', this.ondata.bind(this)),
      Xe(t, 'error', this.onerror.bind(this)),
      Xe(t, 'close', this.onclose.bind(this)),
      Xe(this.decoder, 'decoded', this.ondecoded.bind(this))
    )
  }
  onping() {
    this.emitReserved('ping')
  }
  ondata(t) {
    try {
      this.decoder.add(t)
    } catch (n) {
      this.onclose('parse error', n)
    }
  }
  ondecoded(t) {
    La(() => {
      this.emitReserved('packet', t)
    }, this.setTimeoutFn)
  }
  onerror(t) {
    this.emitReserved('error', t)
  }
  socket(t, n) {
    let r = this.nsps[t]
    return (
      r
        ? this._autoConnect && !r.active && r.connect()
        : ((r = new Rm(this, t, n)), (this.nsps[t] = r)),
      r
    )
  }
  _destroy(t) {
    const n = Object.keys(this.nsps)
    for (const r of n) if (this.nsps[r].active) return
    this._close()
  }
  _packet(t) {
    const n = this.encoder.encode(t)
    for (let r = 0; r < n.length; r++) this.engine.write(n[r], t.options)
  }
  cleanup() {
    this.subs.forEach((t) => t()),
      (this.subs.length = 0),
      this.decoder.destroy()
  }
  _close() {
    ;(this.skipReconnect = !0),
      (this._reconnecting = !1),
      this.onclose('forced close'),
      this.engine && this.engine.close()
  }
  disconnect() {
    return this._close()
  }
  onclose(t, n) {
    this.cleanup(),
      this.backoff.reset(),
      (this._readyState = 'closed'),
      this.emitReserved('close', t, n),
      this._reconnection && !this.skipReconnect && this.reconnect()
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this
    const t = this
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(),
        this.emitReserved('reconnect_failed'),
        (this._reconnecting = !1)
    else {
      const n = this.backoff.duration()
      this._reconnecting = !0
      const r = this.setTimeoutFn(() => {
        t.skipReconnect ||
          (this.emitReserved('reconnect_attempt', t.backoff.attempts),
          !t.skipReconnect &&
            t.open((i) => {
              i
                ? ((t._reconnecting = !1),
                  t.reconnect(),
                  this.emitReserved('reconnect_error', i))
                : t.onreconnect()
            }))
      }, n)
      this.opts.autoUnref && r.unref(),
        this.subs.push(() => {
          this.clearTimeoutFn(r)
        })
    }
  }
  onreconnect() {
    const t = this.backoff.attempts
    ;(this._reconnecting = !1),
      this.backoff.reset(),
      this.emitReserved('reconnect', t)
  }
}
const hr = {}
function Hi(e, t) {
  typeof e == 'object' && ((t = e), (e = void 0)), (t = t || {})
  const n = ex(e, t.path || '/socket.io'),
    r = n.source,
    i = n.id,
    o = n.path,
    s = hr[i] && o in hr[i].nsps,
    l = t.forceNew || t['force new connection'] || t.multiplex === !1 || s
  let u
  return (
    l ? (u = new du(r, t)) : (hr[i] || (hr[i] = new du(r, t)), (u = hr[i])),
    n.query && !t.query && (t.query = n.queryKey),
    u.socket(n.path, t)
  )
}
Object.assign(Hi, { Manager: du, Socket: Rm, io: Hi, connect: Hi })
const Rf = 'chat-add-msg',
  px = 'chat-send-msg',
  hx = 'chat-set-topic',
  mx = 'user-watch',
  Tf = 'user-updated',
  Of = 'review-added',
  Nf = 'review-removed',
  Pf = 'review-about-you',
  yx = 'set-user-socket',
  gx = 'unset-user-socket',
  vx = '',
  ue = wx()
window.socketService = ue
ue.setup()
function wx() {
  var e = null
  return {
    setup() {
      e = Hi(vx)
      const n = te.getLoggedinUser()
      n && this.login(n._id)
    },
    on(n, r) {
      e.on(n, r)
    },
    off(n, r = null) {
      e && (r ? e.off(n, r) : e.removeAllListeners(n))
    },
    emit(n, r) {
      e.emit(n, r)
    },
    login(n) {
      e.emit(yx, n)
    },
    logout() {
      e.emit(gx)
    },
    terminate() {
      e = null
    },
  }
}
async function Tm() {
  try {
    ne.dispatch({ type: tm })
    const e = await te.getUsers()
    ne.dispatch({ type: Gh, users: e })
  } catch (e) {
    console.log('UserActions: err in loadUsers', e)
  } finally {
    ne.dispatch({ type: nm })
  }
}
async function Sx(e) {
  try {
    await te.remove(e), ne.dispatch({ type: Jh, userId: e })
  } catch (t) {
    console.log('UserActions: err in removeUser', t)
  }
}
async function Ex(e) {
  try {
    const t = await te.login(e)
    return ne.dispatch({ type: ys, user: t }), ue.login(t._id), t
  } catch (t) {
    throw (console.log('Cannot login', t), t)
  }
}
async function xx(e) {
  try {
    const t = await te.signup(e)
    return ne.dispatch({ type: ys, user: t }), ue.login(t), t
  } catch (t) {
    throw (console.log('Cannot signup', t), t)
  }
}
async function Cx() {
  try {
    await te.logout(), ne.dispatch({ type: ys, user: null }), ue.logout()
  } catch (e) {
    throw (console.log('Cannot logout', e), e)
  }
}
async function kx(e) {
  try {
    const t = await te.getById(e)
    ne.dispatch({ type: Qh, user: t })
  } catch (t) {
    Ht('Cannot load user'), console.log('Cannot load user', t)
  }
}
function _x({ review: e }) {
  const { byUser: t, aboutUser: n } = e
  return p.jsxs('article', {
    className: 'preview review-preview',
    children: [
      p.jsxs('p', {
        children: [
          'About: ',
          p.jsx(Qt, { to: `/user/${n._id}`, children: n.fullname }),
        ],
      }),
      p.jsxs('p', {
        className: 'review-by',
        children: [
          'By: ',
          p.jsx(Qt, { to: `/user/${t._id}`, children: t.fullname }),
        ],
      }),
      p.jsx('pre', { className: 'review-txt', children: e.txt }),
      e.createdAt &&
        p.jsxs('section', {
          className: 'created-at',
          children: [
            p.jsx('h4', { children: 'Created At:' }),
            new Date(e.createdAt).toLocaleString('he'),
          ],
        }),
    ],
  })
}
function Rx({ reviews: e, onRemoveReview: t }) {
  function n(r) {
    var o
    const i = te.getLoggedinUser()
    return i
      ? i.isAdmin
        ? !0
        : ((o = r.byUser) == null ? void 0 : o._id) === i._id
      : !1
  }
  return p.jsx('section', {
    children: p.jsx('ul', {
      className: 'list review-list',
      children: e.map((r) =>
        p.jsxs(
          'li',
          {
            children: [
              p.jsx(_x, { review: r }),
              n(r) &&
                p.jsx('div', {
                  className: 'actions',
                  children: p.jsx('button', {
                    onClick: () => t(r._id),
                    children: 'x',
                  }),
                }),
            ],
          },
          r._id
        )
      ),
    }),
  })
}
function Tx() {
  const e = ot((o) => o.userModule.users),
    [t, n] = x.useState({ txt: '', aboutUserId: '' })
  function r(o) {
    const { name: s, value: l } = o.target
    n({ ...t, [s]: l })
  }
  async function i(o) {
    if ((o.preventDefault(), !t.txt || !t.aboutUserId))
      return alert('All fields are required')
    try {
      await xE(t), wt('Review added'), n({ txt: '', aboutUserId: '' })
    } catch {
      Ht('Cannot add review')
    }
  }
  return p.jsxs('form', {
    className: 'review-edit',
    onSubmit: i,
    children: [
      p.jsxs('select', {
        onChange: r,
        value: t.aboutUserId,
        name: 'aboutUserId',
        children: [
          p.jsx('option', { value: '', children: 'Review about...' }),
          e.map((o) =>
            p.jsx('option', { value: o._id, children: o.fullname }, o._id)
          ),
        ],
      }),
      p.jsx('textarea', { name: 'txt', onChange: r, value: t.txt }),
      p.jsx('button', { children: 'Add' }),
    ],
  })
}
function Ox() {
  const e = ot((i) => i.userModule.user),
    t = ot((i) => i.reviewModule.reviews)
  console.log('reviews:', t)
  const n = G0()
  x.useEffect(
    () => (
      EE(),
      Tm(),
      ue.on(Of, (i) => {
        console.log('GOT from socket', i), n(dm(i))
      }),
      ue.on(Nf, (i) => {
        console.log('GOT from socket', i), n(fm(i))
      }),
      () => {
        ue.off(Of), ue.off(Nf)
      }
    ),
    []
  )
  async function r(i) {
    try {
      await CE(i), wt('Review removed')
    } catch {
      Ht('Cannot remove')
    }
  }
  return p.jsxs('div', {
    className: 'review-index',
    children: [
      p.jsx('h2', { children: 'Reviews and Gossip' }),
      e && p.jsx(Tx, {}),
      p.jsx(Rx, { reviews: t, onRemoveReview: r }),
    ],
  })
}
function Nx() {
  const [e, t] = x.useState({ txt: '' }),
    [n, r] = x.useState([]),
    [i, o] = x.useState('Love'),
    [s, l] = x.useState(!1),
    u = ot((g) => g.userModule.user),
    a = x.useRef()
  x.useEffect(
    () => (
      ue.on(Rf, c),
      () => {
        ue.off(Rf, c), a.current && clearTimeout(a.current)
      }
    ),
    []
  ),
    x.useEffect(() => {
      ue.emit(hx, i)
    }, [i])
  function c(g) {
    r((v) => [...v, g])
  }
  function f() {
    a.current && clearTimeout(a.current),
      (a.current = setTimeout(() => {
        r((g) => [...g, { from: 'Bot', txt: 'You are amazing!' }])
      }, 1250))
  }
  function y(g) {
    g.preventDefault()
    const C = { from: (u == null ? void 0 : u.fullname) || 'Me', txt: e.txt }
    ue.emit(px, C), s && f(), t({ txt: '' })
  }
  function w(g) {
    const { name: v, value: C } = g.target
    t((h) => ({ ...h, [v]: C }))
  }
  return p.jsxs('section', {
    className: 'chat',
    children: [
      p.jsxs('h2', { children: ['Lets Chat about ', i] }),
      p.jsxs('section', {
        className: 'chat-options',
        children: [
          p.jsxs('label', {
            children: [
              p.jsx('input', {
                type: 'radio',
                name: 'topic',
                value: 'Love',
                checked: i === 'Love',
                onChange: ({ target: g }) => o(g.value),
              }),
              'Love',
            ],
          }),
          p.jsxs('label', {
            children: [
              p.jsx('input', {
                type: 'radio',
                name: 'topic',
                value: 'Politics',
                checked: i === 'Politics',
                onChange: ({ target: g }) => o(g.value),
              }),
              'Politics',
            ],
          }),
          p.jsxs('label', {
            children: [
              p.jsx('input', {
                type: 'checkbox',
                name: 'isBotMode',
                checked: s,
                onChange: ({ target: g }) => l(g.checked),
              }),
              'Bot Mode',
            ],
          }),
        ],
      }),
      p.jsxs('form', {
        onSubmit: y,
        children: [
          p.jsx('input', {
            type: 'text',
            value: e.txt,
            onChange: w,
            name: 'txt',
            autoComplete: 'off',
          }),
          p.jsx('button', { children: 'Send' }),
        ],
      }),
      p.jsx('ul', {
        children: n.map((g, v) =>
          p.jsxs('li', { children: [g.from, ': ', g.txt] }, v)
        ),
      }),
    ],
  })
}
function Px() {
  const e = ot((n) => n.userModule.users),
    t = ot((n) => n.userModule.isLoading)
  return (
    x.useEffect(() => {
      Tm()
    }, []),
    p.jsxs('section', {
      className: 'admin',
      children: [
        t && 'Loading...',
        e &&
          p.jsx('ul', {
            children: e.map((n) =>
              p.jsxs(
                'li',
                {
                  className: 'user',
                  children: [
                    p.jsx('pre', { children: JSON.stringify(n, null, 2) }),
                    p.jsxs('button', {
                      onClick: () => {
                        Sx(n._id)
                      },
                      children: ['Remove ', n.fullname],
                    }),
                  ],
                },
                n._id
              )
            ),
          }),
      ],
    })
  )
}
function Lx() {
  const { homeId: e } = Xp(),
    t = ot((r) => r.homeModule.home)
  x.useEffect(() => {
    QS(e)
  }, [e])
  async function n(r) {
    try {
      await XS(r, 'bla bla ' + parseInt(Math.random() * 10)),
        wt('home msg added')
    } catch {
      Ht('Cannot add home msg')
    }
  }
  return p.jsxs('section', {
    className: 'home-details',
    children: [
      p.jsx(Qt, { to: '/home', children: 'Back to list' }),
      p.jsx('h1', { children: 'home Details' }),
      t &&
        p.jsxs('div', {
          children: [
            p.jsx('h3', { children: t.vendor }),
            p.jsxs('h4', { children: ['$', t.price] }),
            p.jsxs('pre', { children: [' ', JSON.stringify(t, null, 2), ' '] }),
          ],
        }),
      p.jsx('button', {
        onClick: () => {
          n(t._id)
        },
        children: 'Add home msg',
      }),
    ],
  })
}
function Ax() {
  const e = Xp(),
    t = ot((r) => r.userModule.watchedUser)
  x.useEffect(
    () => (
      kx(e.id),
      ue.emit(mx, e.id),
      ue.on(Tf, n),
      () => {
        ue.off(Tf, n)
      }
    ),
    [e.id]
  )
  function n(r) {
    wt(
      `This user ${r.fullname} just got updated from socket, new score: ${r.score}`
    ),
      ne.dispatch({ type: 'SET_WATCHED_USER', user: r })
  }
  return p.jsxs('main', {
    className: 'user-details',
    children: [
      p.jsx('h1', { children: 'User Details' }),
      t &&
        p.jsxs('div', {
          children: [
            p.jsx('h3', { children: t.fullname }),
            p.jsx('img', { src: t.imgUrl, style: { width: '100px' } }),
            p.jsxs('pre', { children: [' ', JSON.stringify(t, null, 4), ' '] }),
          ],
        }),
    ],
  })
}
function jx() {
  const e = ot((r) => r.userModule.user),
    t = ei()
  async function n() {
    try {
      await Cx(), t('/'), wt('Bye now')
    } catch {
      Ht('Cannot logout')
    }
  }
  return p.jsx('header', {
    className: 'app-header main-container full',
    children: p.jsxs('nav', {
      className: '',
      children: [
        p.jsx(Ye, { to: '/', className: '/logo', children: 'E2E Demo' }),
        p.jsx(Ye, { to: '/about', children: 'About' }),
        p.jsx(Ye, { to: '/home', children: 'homes' }),
        p.jsx(Ye, { to: '/chat', children: 'Chat' }),
        p.jsx(Ye, { to: '/review', children: 'Review' }),
        (e == null ? void 0 : e.isAdmin) &&
          p.jsx(Ye, { to: '/admin', children: 'Admin' }),
        !e &&
          p.jsx(Ye, {
            to: 'login',
            className: 'login-link',
            children: 'Login',
          }),
        e &&
          p.jsxs('div', {
            className: 'user-info',
            children: [
              p.jsxs(Qt, {
                to: `user/${e._id}`,
                children: [
                  e.imgUrl && p.jsx('img', { src: e.imgUrl }),
                  e.fullname,
                ],
              }),
              p.jsx('button', { onClick: n, children: 'logout' }),
            ],
          }),
      ],
    }),
  })
}
function Ux() {
  const e = ot((t) => t.userModule.count)
  return p.jsx('footer', {
    className: 'app-footer main-container full',
    children: p.jsxs('section', {
      children: [
        p.jsx('p', { children: 'Coffeerights © 2024' }),
        p.jsxs('p', { children: ['Count: ', e] }),
      ],
    }),
  })
}
function Dx() {
  const [e, t] = x.useState(null),
    n = x.useRef()
  x.useEffect(() => {
    const o = cm.on('show-msg', (s) => {
      t(s),
        n.current && ((n.current = null), clearTimeout(n.current)),
        (n.current = setTimeout(r, 3e3))
    })
    return (
      ue.on(Pf, (s) => {
        wt(`New review about me ${s.txt}`)
      }),
      () => {
        o(), ue.off(Pf)
      }
    )
  }, [])
  function r() {
    t(null)
  }
  function i() {
    return e ? 'visible' : ''
  }
  return p.jsxs('section', {
    className: `user-msg ${e == null ? void 0 : e.type} ${i()}`,
    children: [
      p.jsx('button', { onClick: r, children: 'x' }),
      e == null ? void 0 : e.txt,
    ],
  })
}
function Ix() {
  return p.jsxs('div', {
    className: 'login-page',
    children: [
      p.jsxs('nav', {
        children: [
          p.jsx(Ye, { to: '.', children: 'Login' }),
          p.jsx(Ye, { to: 'signup', children: 'Signup' }),
        ],
      }),
      p.jsx(th, {}),
    ],
  })
}
function Mx() {
  const [e, t] = x.useState([]),
    [n, r] = x.useState({ username: '', password: '', fullname: '' }),
    i = ei()
  x.useEffect(() => {
    o()
  }, [])
  async function o() {
    const u = await te.getUsers()
    t(u)
  }
  async function s(u = null) {
    u && u.preventDefault(), n.username && (await Ex(n), i('/'))
  }
  function l(u) {
    const a = u.target.name,
      c = u.target.value
    r({ ...n, [a]: c })
  }
  return p.jsxs('form', {
    className: 'login-form',
    onSubmit: s,
    children: [
      p.jsxs('select', {
        name: 'username',
        value: n.username,
        onChange: l,
        children: [
          p.jsx('option', { value: '', children: 'Select User' }),
          e.map((u) =>
            p.jsx('option', { value: u.username, children: u.fullname }, u._id)
          ),
        ],
      }),
      p.jsx('button', { children: 'Login' }),
    ],
  })
}
const $x = { uploadImg: Bx }
async function Bx(e) {
  const t = 'vanilla-test-images',
    n = 'stavs_preset',
    r = `https://api.cloudinary.com/v1_1/${t}/image/upload`,
    i = new FormData()
  i.append('file', e.target.files[0]), i.append('upload_preset', n)
  try {
    return await (await fetch(r, { method: 'POST', body: i })).json()
  } catch (o) {
    throw (console.error(o), o)
  }
}
function Fx({ onUploaded: e }) {
  const [t, n] = x.useState({ imgUrl: null, height: 500, width: 500 }),
    [r, i] = x.useState(!1)
  async function o(l) {
    i(!0)
    const { secure_url: u, height: a, width: c } = await $x.uploadImg(l)
    console.log(u), n({ imgUrl: u, width: c, height: a }), i(!1), e && e(u)
  }
  function s() {
    return t.imgUrl ? 'Upload Another?' : r ? 'Uploading....' : 'Upload Image'
  }
  return p.jsxs('div', {
    className: 'upload-preview',
    children: [
      t.imgUrl &&
        p.jsx('img', {
          src: t.imgUrl,
          style: { maxWidth: '50px', float: 'right' },
        }),
      p.jsx('label', { htmlFor: 'imgUpload', children: s() }),
      p.jsx('input', {
        type: 'file',
        onChange: o,
        accept: 'img/*',
        id: 'imgUpload',
      }),
    ],
  })
}
function zx() {
  const [e, t] = x.useState(te.getEmptyUser()),
    n = ei()
  function r() {
    t({ username: '', password: '', fullname: '', imgUrl: '', score: 100 })
  }
  function i(l) {
    const u = l.target.name,
      a = l.target.value
    t((c) => ({ ...c, [u]: a }))
  }
  async function o(l = null) {
    l && l.preventDefault(),
      !(!e.username || !e.password || !e.fullname) && (await xx(e), r(), n('/'))
  }
  function s(l) {
    t((u) => ({ ...u, imgUrl: l }))
  }
  return p.jsxs('form', {
    className: 'signup-form',
    onSubmit: o,
    children: [
      p.jsx('input', {
        type: 'text',
        name: 'fullname',
        value: e.fullname,
        placeholder: 'Fullname',
        onChange: i,
        required: !0,
      }),
      p.jsx('input', {
        type: 'text',
        name: 'username',
        value: e.username,
        placeholder: 'Username',
        onChange: i,
        required: !0,
      }),
      p.jsx('input', {
        type: 'password',
        name: 'password',
        value: e.password,
        placeholder: 'Password',
        onChange: i,
        required: !0,
      }),
      p.jsx(Fx, { onUploaded: s }),
      p.jsx('button', { children: 'Signup' }),
    ],
  })
}
function Vx() {
  return p.jsxs('div', {
    className: 'main-container',
    children: [
      p.jsx(jx, {}),
      p.jsx(Dx, {}),
      p.jsx('main', {
        children: p.jsxs(qv, {
          children: [
            p.jsx(_e, { path: '', element: p.jsx(wS, {}) }),
            p.jsxs(_e, {
              path: 'about',
              element: p.jsx(RS, {}),
              children: [
                p.jsx(_e, { path: 'team', element: p.jsx(TS, {}) }),
                p.jsx(_e, { path: 'vision', element: p.jsx(OS, {}) }),
              ],
            }),
            p.jsx(_e, { path: 'home', element: p.jsx(cE, {}) }),
            p.jsx(_e, { path: 'home/:homeId', element: p.jsx(Lx, {}) }),
            p.jsx(_e, { path: 'user/:id', element: p.jsx(Ax, {}) }),
            p.jsx(_e, { path: 'review', element: p.jsx(Ox, {}) }),
            p.jsx(_e, { path: 'chat', element: p.jsx(Nx, {}) }),
            p.jsx(_e, {
              path: 'admin',
              element: p.jsx(bx, { checkAdmin: !0, children: p.jsx(Px, {}) }),
            }),
            p.jsxs(_e, {
              path: 'login',
              element: p.jsx(Ix, {}),
              children: [
                p.jsx(_e, { index: !0, element: p.jsx(Mx, {}) }),
                p.jsx(_e, { path: 'signup', element: p.jsx(zx, {}) }),
              ],
            }),
          ],
        }),
      }),
      p.jsx(Ux, {}),
    ],
  })
}
function bx({ children: e, checkAdmin: t = !1 }) {
  const n = te.getLoggedinUser()
  return !n || (t && !n.isAdmin)
    ? (console.log('Not Authenticated!'), p.jsx(Wv, { to: '/' }))
    : e
}
const Wx = rl.createRoot(document.getElementById('root'))
Wx.render(
  p.jsx(K0, { store: ne, children: p.jsx(e0, { children: p.jsx(Vx, {}) }) })
)
