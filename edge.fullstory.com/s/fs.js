//!This code is part of the Services provided by FullStory, Inc. For license information, please refer to https://www.fullstory.com/legal/terms-and-conditions/
//!Portions of this code are licensed under the following license:
//!  For license information please see fs.js.LICENSE.txt 
!function () {
    "use strict";
    var t = {
        496: function (t, n, i) {
            n.nt = void 0,
                i(910),
                i(473),
                n.nt = function (t, n) {
                    throw void 0 === n && (n = "Reached unexpected case in exhaustive switch"),
                    new Error(n)
                }
        },
        473: function (t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
                n.ExtendedObject = void 0,
                n.ExtendedObject = Object
        },
        910: function (t, n, i) {
            i.r(n),
                i.d(n, {
                    __extends: function () {
                        return e
                    },
                    __assign: function () {
                        return s
                    },
                    __rest: function () {
                        return o
                    },
                    __decorate: function () {
                        return u
                    },
                    __param: function () {
                        return a
                    },
                    __metadata: function () {
                        return c
                    },
                    __awaiter: function () {
                        return h
                    },
                    __generator: function () {
                        return f
                    },
                    __createBinding: function () {
                        return v
                    },
                    __exportStar: function () {
                        return l
                    },
                    __values: function () {
                        return d
                    },
                    __read: function () {
                        return p
                    },
                    __spread: function () {
                        return w
                    },
                    __spreadArrays: function () {
                        return g
                    },
                    __spreadArray: function () {
                        return y
                    },
                    __await: function () {
                        return m
                    },
                    __asyncGenerator: function () {
                        return b
                    },
                    __asyncDelegator: function () {
                        return S
                    },
                    __asyncValues: function () {
                        return k
                    },
                    __makeTemplateObject: function () {
                        return _
                    },
                    __importStar: function () {
                        return T
                    },
                    __importDefault: function () {
                        return E
                    },
                    __classPrivateFieldGet: function () {
                        return C
                    },
                    __classPrivateFieldSet: function () {
                        return I
                    },
                    __classPrivateFieldIn: function () {
                        return j
                    }
                });
            var r = function (t, n) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (t, n) {
                    t.__proto__ = n
                }
                    || function (t, n) {
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    ,
                    r(t, n)
            };
            function e(t, n) {
                if ("function" != typeof n && null !== n)
                    throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
                function i() {
                    this.constructor = t
                }
                r(t, n),
                    t.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype,
                        new i)
            }
            var s = function () {
                return s = Object.assign || function (t) {
                    for (var n, i = 1, r = arguments.length; i < r; i++)
                        for (var e in n = arguments[i])
                            Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
                    return t
                }
                    ,
                    s.apply(this, arguments)
            };
            function o(t, n) {
                var i = {};
                for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (i[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var e = 0;
                    for (r = Object.getOwnPropertySymbols(t); e < r.length; e++)
                        n.indexOf(r[e]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[e]) && (i[r[e]] = t[r[e]])
                }
                return i
            }
            function u(t, n, i, r) {
                var e, s = arguments.length, o = s < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    o = Reflect.decorate(t, n, i, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)
                        (e = t[u]) && (o = (s < 3 ? e(o) : s > 3 ? e(n, i, o) : e(n, i)) || o);
                return s > 3 && o && Object.defineProperty(n, i, o),
                    o
            }
            function a(t, n) {
                return function (i, r) {
                    n(i, r, t)
                }
            }
            function c(t, n) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata)
                    return Reflect.metadata(t, n)
            }
            function h(t, n, i, r) {
                return new (i || (i = Promise))(function (e, s) {
                    function o(t) {
                        try {
                            a(r.next(t))
                        } catch (t) {
                            s(t)
                        }
                    }
                    function u(t) {
                        try {
                            a(r["throw"](t))
                        } catch (t) {
                            s(t)
                        }
                    }
                    function a(t) {
                        var n;
                        t.done ? e(t.value) : (n = t.value,
                            n instanceof i ? n : new i(function (t) {
                                t(n)
                            }
                            )).then(o, u)
                    }
                    a((r = r.apply(t, n || [])).next())
                }
                )
            }
            function f(t, n) {
                var i, r, e, s, o = {
                    label: 0,
                    sent: function () {
                        if (1 & e[0])
                            throw e[1];
                        return e[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: u(0),
                    "throw": u(1),
                    "return": u(2)
                },
                    "function" == typeof Symbol && (s[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    s;
                function u(s) {
                    return function (u) {
                        return function (s) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; o;)
                                try {
                                    if (i = 1,
                                        r && (e = 2 & s[0] ? r["return"] : s[0] ? r["throw"] || ((e = r["return"]) && e.call(r),
                                            0) : r.next) && !(e = e.call(r, s[1])).done)
                                        return e;
                                    switch (r = 0,
                                    e && (s = [2 & s[0], e.value]),
                                    s[0]) {
                                        case 0:
                                        case 1:
                                            e = s;
                                            break;
                                        case 4:
                                            return o.label++,
                                            {
                                                value: s[1],
                                                done: !1
                                            };
                                        case 5:
                                            o.label++,
                                                r = s[1],
                                                s = [0];
                                            continue;
                                        case 7:
                                            s = o.ops.pop(),
                                                o.trys.pop();
                                            continue;
                                        default:
                                            if (!((e = (e = o.trys).length > 0 && e[e.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                o = 0;
                                                continue
                                            }
                                            if (3 === s[0] && (!e || s[1] > e[0] && s[1] < e[3])) {
                                                o.label = s[1];
                                                break
                                            }
                                            if (6 === s[0] && o.label < e[1]) {
                                                o.label = e[1],
                                                    e = s;
                                                break
                                            }
                                            if (e && o.label < e[2]) {
                                                o.label = e[2],
                                                    o.ops.push(s);
                                                break
                                            }
                                            e[2] && o.ops.pop(),
                                                o.trys.pop();
                                            continue;
                                    }
                                    s = n.call(t, o)
                                } catch (t) {
                                    s = [6, t],
                                        r = 0
                                } finally {
                                    i = e = 0
                                }
                            if (5 & s[0])
                                throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, u])
                    }
                }
            }
            var v = Object.create ? function (t, n, i, r) {
                void 0 === r && (r = i);
                var e = Object.getOwnPropertyDescriptor(n, i);
                e && !("get" in e ? !n.__esModule : e.writable || e.configurable) || (e = {
                    enumerable: !0,
                    get: function () {
                        return n[i]
                    }
                }),
                    Object.defineProperty(t, r, e)
            }
                : function (t, n, i, r) {
                    void 0 === r && (r = i),
                        t[r] = n[i]
                }
                ;
            function l(t, n) {
                for (var i in t)
                    "default" === i || Object.prototype.hasOwnProperty.call(n, i) || v(n, t, i)
            }
            function d(t) {
                var n = "function" == typeof Symbol && Symbol.iterator
                    , i = n && t[n]
                    , r = 0;
                if (i)
                    return i.call(t);
                if (t && "number" == typeof t.length)
                    return {
                        next: function () {
                            return t && r >= t.length && (t = void 0),
                            {
                                value: t && t[r++],
                                done: !t
                            }
                        }
                    };
                throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }
            function p(t, n) {
                var i = "function" == typeof Symbol && t[Symbol.iterator];
                if (!i)
                    return t;
                var r, e, s = i.call(t), o = [];
                try {
                    for (; (void 0 === n || n-- > 0) && !(r = s.next()).done;)
                        o.push(r.value)
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (i = s["return"]) && i.call(s)
                    } finally {
                        if (e)
                            throw e.error
                    }
                }
                return o
            }
            function w() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t = t.concat(p(arguments[n]));
                return t
            }
            function g() {
                for (var t = 0, n = 0, i = arguments.length; n < i; n++)
                    t += arguments[n].length;
                var r = Array(t)
                    , e = 0;
                for (n = 0; n < i; n++)
                    for (var s = arguments[n], o = 0, u = s.length; o < u; o++,
                        e++)
                        r[e] = s[o];
                return r
            }
            function y(t, n, i) {
                if (i || 2 === arguments.length)
                    for (var r, e = 0, s = n.length; e < s; e++)
                        !r && e in n || (r || (r = Array.prototype.slice.call(n, 0, e)),
                            r[e] = n[e]);
                return t.concat(r || Array.prototype.slice.call(n))
            }
            function m(t) {
                return this instanceof m ? (this.v = t,
                    this) : new m(t)
            }
            function b(t, n, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, e = i.apply(t, n || []), s = [];
                return r = {},
                    o("next"),
                    o("throw"),
                    o("return"),
                    r[Symbol.asyncIterator] = function () {
                        return this
                    }
                    ,
                    r;
                function o(t) {
                    e[t] && (r[t] = function (n) {
                        return new Promise(function (i, r) {
                            s.push([t, n, i, r]) > 1 || u(t, n)
                        }
                        )
                    }
                    )
                }
                function u(t, n) {
                    try {
                        (i = e[t](n)).value instanceof m ? Promise.resolve(i.value.v).then(a, c) : h(s[0][2], i)
                    } catch (t) {
                        h(s[0][3], t)
                    }
                    var i
                }
                function a(t) {
                    u("next", t)
                }
                function c(t) {
                    u("throw", t)
                }
                function h(t, n) {
                    t(n),
                        s.shift(),
                        s.length && u(s[0][0], s[0][1])
                }
            }
            function S(t) {
                var n, i;
                return n = {},
                    r("next"),
                    r("throw", function (t) {
                        throw t
                    }),
                    r("return"),
                    n[Symbol.iterator] = function () {
                        return this
                    }
                    ,
                    n;
                function r(r, e) {
                    n[r] = t[r] ? function (n) {
                        return (i = !i) ? {
                            value: m(t[r](n)),
                            done: "return" === r
                        } : e ? e(n) : n
                    }
                        : e
                }
            }
            function k(t) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, i = t[Symbol.asyncIterator];
                return i ? i.call(t) : (t = d(t),
                    n = {},
                    r("next"),
                    r("throw"),
                    r("return"),
                    n[Symbol.asyncIterator] = function () {
                        return this
                    }
                    ,
                    n);
                function r(i) {
                    n[i] = t[i] && function (n) {
                        return new Promise(function (r, e) {
                            !function (t, n, i, r) {
                                Promise.resolve(r).then(function (n) {
                                    t({
                                        value: n,
                                        done: i
                                    })
                                }, n)
                            }(r, e, (n = t[i](n)).done, n.value)
                        }
                        )
                    }
                }
            }
            function _(t, n) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: n
                }) : t.raw = n,
                    t
            }
            var A = Object.create ? function (t, n) {
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    value: n
                })
            }
                : function (t, n) {
                    t["default"] = n
                }
                ;
            function T(t) {
                if (t && t.__esModule)
                    return t;
                var n = {};
                if (null != t)
                    for (var i in t)
                        "default" !== i && Object.prototype.hasOwnProperty.call(t, i) && v(n, t, i);
                return A(n, t),
                    n
            }
            function E(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function C(t, n, i, r) {
                if ("a" === i && !r)
                    throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof n ? t !== n || !r : !n.has(t))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? r : "a" === i ? r.call(t) : r ? r.value : n.get(t)
            }
            function I(t, n, i, r, e) {
                if ("m" === r)
                    throw new TypeError("Private method is not writable");
                if ("a" === r && !e)
                    throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof n ? t !== n || !e : !n.has(t))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? e.call(t, i) : e ? e.value = i : n.set(t, i),
                    i
            }
            function j(t, n) {
                if (null === n || "object" != typeof n && "function" != typeof n)
                    throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof t ? n === t : t.has(n)
            }
        },
        201: function (t, n, i) {
            var r, e = i(910);
            function s(t) { }
            !function (t) {
                t[t.Unknown = 0] = "Unknown",
                    t[t.Clean = 1] = "Clean",
                    t[t.UnrecoverableFailure = 2] = "UnrecoverableFailure"
            }(r || (r = {}));
            var o = new (function () {
                function t(t) {
                    this.rebuildFromSnapshot(t)
                }
                return t.prototype.rebuildFromSnapshot = function (t) {
                    var n = this.snapshot;
                    if (this.snapshot = t,
                        !n || n.functions !== t.functions) {
                        var i = t.functions;
                        this.arrayIsArray = i.arrayIsArray,
                            this.clearWindowInterval = a(i.clearWindowInterval),
                            this.clearWindowTimeout = a(i.clearWindowTimeout),
                            this.dateGetTime = a(i.dateGetTime),
                            this.dateNow = i.dateNow,
                            this.docFragQuerySelectorAll = a(i.docFragQuerySelectorAll),
                            this.docQuerySelectorAll = a(i.docQuerySelectorAll),
                            this.elMatches = a(i.elMatches),
                            this.elQuerySelectorAll = a(i.elQuerySelectorAll),
                            this.jsonParse = i.jsonParse,
                            this.jsonStringify = i.jsonStringify,
                            this.matchMedia = c(i.matchMedia),
                            this.mathAbs = i.mathAbs,
                            this.mathFloor = i.mathFloor,
                            this.mathMax = i.mathMax,
                            this.mathMin = i.mathMin,
                            this.mathPow = i.mathPow,
                            this.mathRandom = i.mathRandom,
                            this.mathRound = i.mathRound,
                            this.objectHasOwnProp = a(i.objectHasOwnProp),
                            this.objectKeys = i.objectKeys,
                            this.objectValues = i.objectValues || null,
                            this.requestWindowAnimationFrame = c(i.requestWindowAnimationFrame),
                            this.requestWindowIdleCallback = c(i.requestWindowIdleCallback),
                            this.setWindowInterval = a(i.setWindowInterval),
                            this.setWindowTimeout = a(i.setWindowTimeout)
                    }
                }
                    ,
                    t
            }())(u(window));
            function u(t, n) {
                void 0 === n && (n = r.Unknown);
                var i = n
                    , e = []
                    , s = function (t) {
                        return i = r.UnrecoverableFailure,
                            e.push("Snapshot failed: " + t),
                            function () {
                                throw new Error("Invoked failed snapshot")
                            }
                    }
                    , o = function (t) {
                        try {
                            return t()
                        } catch (t) {
                            return s(t.message)
                        }
                    }
                    , u = function (t) {
                        try {
                            return t() || s("snapshot not found")
                        } catch (t) {
                            return s(t.message)
                        }
                    }
                    , a = {
                        arrayIsArray: o(function () {
                            return t.Array.isArray
                        }),
                        clearWindowInterval: o(function () {
                            return t.clearInterval
                        }),
                        clearWindowTimeout: o(function () {
                            return t.clearTimeout
                        }),
                        dateGetTime: o(function () {
                            return t.Date.prototype.getTime
                        }),
                        dateNow: o(function () {
                            return t.Date.now
                        }),
                        docFragQuerySelectorAll: u(function () {
                            var n;
                            return null === (n = t.DocumentFragment) || void 0 === n ? void 0 : n.prototype.querySelectorAll
                        }),
                        docQuerySelectorAll: u(function () {
                            var n;
                            return null !== (n = t.Document.prototype.querySelectorAll) && void 0 !== n ? n : t.document.querySelectorAll
                        }),
                        elMatches: u(function () {
                            return v(t, h)
                        }),
                        elQuerySelectorAll: u(function () {
                            return v(t, f)
                        }),
                        jsonParse: o(function () {
                            return t.JSON.parse
                        }),
                        jsonStringify: o(function () {
                            return t.JSON.stringify
                        }),
                        matchMedia: o(function () {
                            return t.matchMedia
                        }),
                        mathAbs: o(function () {
                            return t.Math.abs
                        }),
                        mathFloor: o(function () {
                            return t.Math.floor
                        }),
                        mathMax: o(function () {
                            return t.Math.max
                        }),
                        mathMin: o(function () {
                            return t.Math.min
                        }),
                        mathPow: o(function () {
                            return t.Math.pow
                        }),
                        mathRandom: o(function () {
                            return t.Math.random
                        }),
                        mathRound: o(function () {
                            return t.Math.round
                        }),
                        objectHasOwnProp: o(function () {
                            return t.Object.prototype.hasOwnProperty
                        }),
                        objectKeys: o(function () {
                            return t.Object.keys
                        }),
                        objectValues: o(function () {
                            return t.Object.values
                        }),
                        requestWindowAnimationFrame: o(function () {
                            return t.requestAnimationFrame
                        }),
                        requestWindowIdleCallback: o(function () {
                            return t.requestIdleCallback
                        }),
                        setWindowInterval: o(function () {
                            return t.setInterval
                        }),
                        setWindowTimeout: o(function () {
                            return t.setTimeout
                        })
                    }
                    , c = {
                        functionToString: o(function () {
                            return t.Function.prototype.toString
                        }),
                        objectToString: o(function () {
                            return t.Object.prototype.toString
                        })
                    };
                return {
                    status: i,
                    functions: a,
                    helpers: c,
                    errors: e
                }
            }
            function a(t) {
                return function (n) {
                    for (var i = [], r = 1; r < arguments.length; r++)
                        i[r - 1] = arguments[r];
                    return t.apply(n, i)
                }
            }
            function c(t) {
                return t ? a(t) : null
            }
            function h(t) {
                return t.matches || t.webkitMatchesSelector || t.msMatchesSelector || t.mozMatchesSelector
            }
            function f(t) {
                return t.querySelectorAll
            }
            function v(t, n) {
                var i, r, e = (null === (i = t.Element) || void 0 === i ? void 0 : i.prototype) ? n(null === (r = t.Element) || void 0 === r ? void 0 : r.prototype) : void 0, s = t.document ? t.document.documentElement : void 0;
                if (!s || e && s instanceof t.Element || (e = n(s)),
                    !e)
                    throw new Error("Unabled to find Element proto function");
                return e
            }
            function l() {
                var t = function () {
                    return o.dateNow()
                };
                return "number" != typeof t() && (t = function () {
                    return o.dateGetTime(new Date)
                }
                ),
                    t
            }
            var d = function () {
                var t, n = l(), i = null !== (t = function () {
                    var t;
                    if (function () {
                        var t = window.performance;
                        return !(!t || !t.now)
                    }()) {
                        var n = window.performance
                            , i = n.now();
                        if ("number" == typeof i && isFinite(i) && !(i <= 0)) {
                            var r = n.timeOrigin;
                            if ("number" != typeof r) {
                                var e = l()() - n.now()
                                    , s = null === (t = n.timing) || void 0 === t ? void 0 : t.navigationStart;
                                r = s ? Math.min(e, s) : e
                            }
                            var o = Math.round(r);
                            if ("number" == typeof o && isFinite(o) && !(o <= 0))
                                return o
                        }
                    }
                }()) && void 0 !== t ? t : n();
                return {
                    now: n,
                    timeOrigin: i,
                    msSinceDocumentStart: function () {
                        return n() - i
                    }
                }
            }();
            function p() {
                return d.now()
            }
            function w() {
                return d.msSinceDocumentStart()
            }
            var g, y, m, b = ["", "0", "1", "-1", "true", "false", "n/a", "nan", "undefined", "null", "nil", "the_id_that_you_use_in_your_app_for_this_user"], S = ["811c9dc5", "350ca8af", "340ca71c", "14cd0a2b", "4db211e5", "0b069958", "3613e041", "2f8f13ba", "9b61ad43", "77074ba4", "0da3f8ec", "1c750511"], k = function () {
                return o.mathFloor(p() / 1e3)
            }, _ = function () {
                return k() + 31536e3
            };
            function A(t) {
                if (!t)
                    return null;
                var n, i = t.split("#");
                if (i.length < 3)
                    return null;
                for (var r = 2; r < i.length; r++) {
                    var e = i[r];
                    if (e.indexOf("/") >= 0) {
                        var s = e.split("/")
                            , o = s[0]
                            , u = s[1];
                        i[r] = o,
                            n = u;
                        break
                    }
                }
                var a = function (t) {
                    var n = parseInt(null != t ? t : "", 10)
                        , i = k()
                        , r = _();
                    return isNaN(n) ? r : n <= i ? void 0 : n > r ? r : n
                }(n);
                if (!a)
                    return null;
                i[0];
                var c = i[1]
                    , h = i[2]
                    , f = i[3]
                    , v = "";
                f && (v = decodeURIComponent(f),
                    (b.indexOf(v) >= 0 || S.indexOf(v) >= 0) && (v = ""));
                var l = (null != h ? h : "").split(":")
                    , d = l[0]
                    , p = l[1]
                    , w = l[2];
                return l[3],
                {
                    appKeyHash: v,
                    expirationAbsTimeSeconds: a,
                    userId: d,
                    orgId: c,
                    pageCount: E(l[4]),
                    sessionId: null != p ? p : "",
                    sessionStartTime: E(w)
                }
            }
            function T(t) {
                var n = {};
                try {
                    for (var i = t.cookie.split(";"), r = 0; r < i.length; r++) {
                        var e = i[r].replace(/^\s+|\s+$/g, "").split("=");
                        n[e[0]] || (n[e[0]] = e[1])
                    }
                } catch (t) { }
                return n
            }
            function E(t) {
                var n = parseInt(null != t ? t : "", 10);
                return isNaN(n) ? void 0 : n
            }
            function C(t) {
                if (g)
                    return g;
                var n = I(t);
                return n || (n = t._fs_namespace) ? (g = n,
                    n) : g = "FS"
            }
            function I(t) {
                return t._fs_loaded
            }
            function j(t) {
                return t[C(t)]
            }
            function x(t) {
                return "localhost" == t || "127.0.0.1" == t
            }
            !function (t) {
                t.Consent = "consent",
                    t.Log = "log",
                    t.Record = "rec"
            }(y || (y = {})),
                function (t) {
                    t.Event = "event",
                        t.Page = "page",
                        t.Vars = "setVars",
                        t.User = "user"
                }(m || (m = {}));
            var O = /^([^.]+\.)*(fullstory|onfire).[^.]+(\/|$)/;
            function K(t) {
                return R(t, "edge")
            }
            var M = ["rs", "rs-2", "edge", "www", "app"];
            function R(t) {
                for (var n = [], i = 1; i < arguments.length; i++)
                    n[i - 1] = arguments[i];
                if (!t)
                    return t;
                if (!O.test(t))
                    return t;
                if (n.some(function (n) {
                    return 0 === t.lastIndexOf(n + ".", 0)
                }))
                    return t;
                for (var r = n[0], e = 0, s = M; e < s.length; e++) {
                    var o = s[e];
                    if (0 === t.lastIndexOf(o + ".", 0))
                        return r + "." + t.slice((o + ".").length)
                }
                return r + "." + t
            }
            function P(t) {
                return O.test(t)
            }
            function N(t, n, i) {
                void 0 === i && (i = "string");
                var r = t[n];
                if (typeof r === i)
                    return r
            }
            function L(t) {
                return N(t, "_fs_script") || Q(G(t))
            }
            function U(t) {
                var n;
                return null !== (n = N(t, "_fs_rec_settings_host")) && void 0 !== n ? n : K(G(t))
            }
            function H(t) {
                return N(t, "_fs_rec_host") || R(G(t), "rs", "rs-2")
            }
            function D(t) {
                return N(t, "_fs_app_host") || X(G(t))
            }
            function B(t) {
                return N(t, "_fs_ext_org") || N(t, "_fs_org")
            }
            function F(t) {
                var n = N(t, "_fs_capture_on_startup", "boolean")
                    , i = N(t, "_fs_capture_on_start", "boolean");
                return void 0 === n ? void 0 === i || !i : n
            }
            function W(t) {
                return !!N(t, "_fs_is_outer_script", "boolean")
            }
            function z(t) {
                return t._fs_transport
            }
            function V(t) {
                var n = j(t);
                if (!n)
                    return [];
                var i = n.q;
                return i ? (delete n.q,
                    i) : []
            }
            function q(t, n) {
                var i = j(t);
                if (i) {
                    var r = i.q;
                    r || (r = i.q = []),
                        r.push(n)
                }
            }
            function $(t) {
                var n = j(t);
                return (null == n ? void 0 : n._v) || "unknown"
            }
            function G(t) {
                var n = N(t, "_fs_ext_host") || N(t, "_fs_host");
                if (n) {
                    var i = function (t) {
                        var n, i, r = null !== (i = null === (n = B(t)) || void 0 === n ? void 0 : n.split("-")) && void 0 !== i ? i : [];
                        if (!(r.length < 3)) {
                            var e = r[0]
                                , s = r[r.length - 1];
                            if (!("na1" === s || e.length > 1))
                                return s
                        }
                    }(t);
                    if (!i || !P(n))
                        return n;
                    var r = "";
                    return 0 === n.indexOf("www.") && (n = n.slice(4),
                        r = "www."),
                        0 === n.indexOf(i + ".") && (n = n.slice((i + ".").length)),
                        "" + r + i + "." + n
                }
            }
            function X(t) {
                return t ? x(function (t) {
                    var n = t
                        , i = n.indexOf(":");
                    return i >= 0 && (n = n.slice(0, i)),
                        n
                }(t)) ? t : 0 == t.indexOf("www.") ? "app." + t.slice(4) : "app." + t : t
            }
            function Q(t) {
                var n = K(t);
                if (n)
                    return n + "/s/fs.js"
            }
            function Y(t, n) {
                return function () {
                    for (var i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    try {
                        return t.apply(this, i)
                    } catch (t) {
                        try {
                            n && n(t)
                        } catch (t) { }
                    }
                }
            }
            var J = function () { }
                , Z = "_fs_weak_map_key"
                , tt = function () {
                    function t(t) {
                        this.t = new WeakMap(t)
                    }
                    return t.prototype.get = function (t) {
                        var n = this.t.get(t);
                        return void 0 === n ? this.t.get(t[Z] || {}) : n
                    }
                        ,
                        t.prototype.set = function (t, n) {
                            try {
                                this.t.set(t, n)
                            } catch (i) {
                                t[Z] = t[Z] || {},
                                    this.t.set(t[Z], n)
                            }
                            return this
                        }
                        ,
                        t.prototype["delete"] = function (t) {
                            return this.t["delete"](t) || this.t["delete"](t[Z] || {})
                        }
                        ,
                        t.prototype.has = function (t) {
                            return this.t.has(t) || this.t.has(t[Z] || {})
                        }
                        ,
                        t
                }();
            function nt(t) {
                return o.arrayIsArray(t)
            }
            function it(t) {
                return null !== t && "object" == typeof t
            }
            function rt(t) {
                return "string" == typeof t
            }
            var et = "function" == typeof o.objectKeys ? function (t) {
                return o.objectKeys(t)
            }
                : function (t) {
                    var n = [];
                    for (var i in t)
                        o.objectHasOwnProp(t, i) && n.push(i);
                    return n
                }
                ;
            function st(t, n) {
                return 0 == t.lastIndexOf(n, 0)
            }
            function ot(t, n) {
                for (var i in t)
                    o.objectHasOwnProp(t, i) && n(t[i], i, t)
            }
            function ut(t) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n))
                        return t[n]
            }
            function at(t, n) {
                var i = 0;
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r) && ++i > n)
                        return !1;
                return i == n
            }
            function ct(t, n) {
                var i = 0;
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r) && ++i > n)
                        return !0;
                return !1
            }
            function ht(t) {
                var n = t.nextSibling;
                return n && t.parentNode && n === t.parentNode.firstChild ? null : n
            }
            function ft(t) {
                var n = t.previousSibling;
                return n && t.parentNode && n === t.parentNode.lastChild ? null : n
            }
            function vt(t) {
                var n, i;
                return "function" == typeof (null === (i = null === (n = t.Zone) || void 0 === n ? void 0 : n.root) || void 0 === i ? void 0 : i.run)
            }
            function lt(t) {
                return function () {
                    for (var n = this, i = [], r = 0; r < arguments.length; r++)
                        i[r] = arguments[r];
                    return vt(window) ? window.Zone.root.run(function () {
                        return t.apply(n, i)
                    }) : t.apply(this, i)
                }
            }
            function dt(t, n, i) {
                if (void 0 === i && (i = lt),
                    !t)
                    return J;
                var r = i(t);
                return Y(n ? r.bind(n) : r, function (t) { })
            }
            function pt(t) {
                var n, i = Object.getOwnPropertyDescriptor(Array.prototype, "toJSON"), r = Object.getOwnPropertyDescriptor(String.prototype, "toJSON");
                try {
                    i && i.value && i.configurable && delete Array.prototype.toJSON,
                        r && r.value && r.configurable && delete String.prototype.toJSON,
                        n = o.jsonStringify(t)
                } catch (t) {
                    n = wt(t)
                } finally {
                    (null == i ? void 0 : i.value) && Y(function () {
                        return Object.defineProperty(Array.prototype, "toJSON", i)
                    })(),
                        (null == r ? void 0 : r.value) && Y(function () {
                            return Object.defineProperty(String.prototype, "toJSON", r)
                        })()
                }
                return n
            }
            function wt(t) {
                var n = "Internal error: unable to determine what JSON error was";
                try {
                    n = (n = "" + t).replace(/[^a-zA-Z0-9.:!, ]/g, "_")
                } catch (t) { }
                return "\"" + n + "\""
            }
            function gt(t) {
                var n = t.doctype;
                if (!n)
                    return "";
                var i = "<!DOCTYPE ";
                return i += n.name,
                    n.publicId && (i += " PUBLIC \"" + n.publicId + "\""),
                    n.systemId && (i += " \"" + n.systemId + "\""),
                    i + ">"
            }
            function yt(t) {
                return o.jsonParse(t)
            }
            var mt = function () {
                function t(t, n, i) {
                    void 0 === i && (i = !1),
                        this.i = t,
                        this.u = n,
                        this.l = i,
                        this.g = J,
                        this.m = J,
                        this.S = J,
                        this.k = !1
                }
                return t.prototype.before = function (t) {
                    return this.g = dt(t),
                        this
                }
                    ,
                    t.prototype.afterSync = function (t) {
                        return this.m = dt(t),
                            this
                    }
                    ,
                    t.prototype.afterAsync = function (t) {
                        return this.S = dt(function (n) {
                            o.setWindowTimeout(window, Y(function () {
                                t(n)
                            }), 0)
                        }),
                            this
                    }
                    ,
                    t.prototype.disable = function () {
                        if (this.k = !1,
                            this._) {
                            var t = this._
                                , n = t.override
                                , i = t["native"];
                            this.i[this.u] === n && (this.i[this.u] = i,
                                this._ = void 0)
                        }
                    }
                    ,
                    t.prototype.enable = function () {
                        if (this.k = !0,
                            this._)
                            return !0;
                        this._ = this.A();
                        try {
                            this.i[this.u] = this._.override
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }
                    ,
                    t.prototype.getTarget = function () {
                        return this.i
                    }
                    ,
                    t.prototype.A = function () {
                        var t = this
                            , n = this
                            , i = this.i[this.u]
                            , r = function () {
                                for (var t = [], r = 0; r < arguments.length; r++)
                                    t[r] = arguments[r];
                                var e = {
                                    that: this,
                                    args: t,
                                    result: null
                                };
                                n.k && n.g(e);
                                var s = i.apply(this, t);
                                return e.result = s,
                                    n.k && (n.m(e),
                                        n.S(e)),
                                    e.result
                            };
                        return this.l && (r.toString = function () {
                            var n;
                            return "function " + (null !== (n = t.u) && void 0 !== n ? n : "") + "() { [native code] }"
                        }
                        ),
                        {
                            "native": i,
                            override: r
                        }
                    }
                    ,
                    t
            }()
                , bt = {};
            function St(t, n, i) {
                var r;
                if (void 0 === i && (i = !1),
                    !t || "function" != typeof t[n])
                    return null;
                bt[n] = null !== (r = bt[n]) && void 0 !== r ? r : new tt;
                var e = bt[n].get(t);
                return e || (e = new mt(t, n, i),
                    bt[n].set(t, e)),
                    e.enable() ? e : null
            }
            function kt(t, n, i) {
                return _t(null == t ? void 0 : t.prototype, n, i)
            }
            function _t(t, n, i) {
                if (!t)
                    return function () { }
                        ;
                var r = Object.getOwnPropertyDescriptor(t, n);
                if (!r || !r.set)
                    return function () { }
                        ;
                var s = r.set
                    , o = dt(i)
                    , u = !0;
                function a(t) {
                    s.call(this, t),
                        u && o(this, t)
                }
                return Object.defineProperty(t, n, (0,
                    e.__assign)((0,
                        e.__assign)({}, r), {
                        set: a
                    })),
                    function () {
                        u = !1;
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && a === i.set && Object.defineProperty(t, n, (0,
                            e.__assign)((0,
                                e.__assign)({}, i), {
                                set: s
                            }))
                    }
            }
            function At(t) {
                var n = t.navigator.languages;
                return n && nt(n) ? n.join(",") : t.navigator.userLanguage || t.navigator.language
            }
            function Tt(t) {
                if (!t)
                    return !1;
                var n = t.isConnected;
                return "boolean" == typeof n ? n : function (t) {
                    for (var n = t, i = void 0; n; n = i)
                        if (!(i = n.parentNode))
                            return n;
                    return t
                }(t).nodeType === Node.DOCUMENT_NODE
            }
            var Et = "[anonymous]"
                , Ct = /function\s*([\w\-$]+)?\s*\(/i;
            function It(t) {
                return t.stack || t.backtrace || t.stacktrace
            }
            function jt() {
                var t, n;
                try {
                    throw new Error("")
                } catch (i) {
                    t = "<generated>\n",
                        n = It(i)
                }
                if (!n) {
                    t = "<generated-ie>\n";
                    var i = [];
                    try {
                        for (var r = arguments.callee.caller.caller; r && i.length < 10;) {
                            var e = Ct.test(r.toString()) && RegExp.$1 || Et;
                            i.push(e),
                                r = r.caller
                        }
                    } catch (t) {
                        t.toString()
                    }
                    n = i.join("\n")
                }
                return t + n
            }
            function xt() {
                try {
                    return window.self !== window.top
                } catch (t) {
                    return !0
                }
            }
            var Ot = function () {
                function t() { }
                return t.wrap = function (n, i) {
                    return void 0 === i && (i = "error"),
                        Y(n, function (n) {
                            return t.sendToBugsnag(n, i)
                        })
                }
                    ,
                    t.T = 15,
                    t.sendToBugsnag = function (n, i, r) {
                        if (!(t.T <= 0)) {
                            t.T--;
                            var e = n;
                            "string" == typeof e && (e = new Error(e));
                            var s = T(document).fs_uid
                                , o = s ? A(s) : void 0;
                            o && o.orgId != B(window) && (o = void 0);
                            var u = new Date(1683814955e3).toISOString()
                                , a = {
                                    projectRoot: window.location.origin,
                                    deviceTime: p(),
                                    inIframe: xt(),
                                    CompiledVersion: "fb3ed3dc75",
                                    CompiledTimestamp: 1683814955,
                                    CompiledTime: u,
                                    orgId: B(window),
                                    "userId:sessionId": o ? o.userId + ":" + o.sessionId : "NA",
                                    context: document.location && document.location.pathname,
                                    message: e.message,
                                    name: "Recording Error",
                                    releaseStage: "production " + u,
                                    severity: i,
                                    language: At(window),
                                    stacktrace: It(e) || jt()
                                }
                                , c = function (t, n, i) {
                                    var r = encodeURIComponent(n) + "=" + encodeURIComponent(i);
                                    t.push(r)
                                }
                                , h = [];
                            for (var f in a)
                                c(h, f, a[f] || "");
                            if (r)
                                for (var f in r)
                                    c(h, "aux_" + f, Kt(r[f]));
                            new Image().src = "https://" + H(window) + "/rec/except?" + h.join("&")
                        }
                    }
                    ,
                    t
            }();
            function Kt(t) {
                try {
                    var n = typeof t + ": " + pt(t);
                    return "function" == typeof t.toString && (n += " (toString: " + t.toString() + ")"),
                        n
                } catch (t) {
                    return "failed to serialize \"" + (null == t ? void 0 : t.message) + "\""
                }
            }
            var Mt = {};
            function Rt(t, n, i) {
                if (void 0 === i && (i = 1),
                    t)
                    return !0;
                if (Mt[n] = Mt[n] || 0,
                    Mt[n]++,
                    Mt[n] > i)
                    return !1;
                var r = new Error("Assertion failed: " + n);
                return Ot.sendToBugsnag(r, "error"),
                    t
            }
            var Pt, Nt, Lt, Ut, Ht, Dt, Bt = {};
            function Ft(t, n, i) {
                var r;
                Bt[t] = null !== (r = Bt[t]) && void 0 !== r ? r : 0,
                    Bt[t]++,
                    Bt[t] > 1 || Ot.sendToBugsnag(n, "error", i)
            }
            !function (t) {
                t.MUT_INSERT = 2,
                    t.MUT_REMOVE = 3,
                    t.MUT_ATTR = 4,
                    t.MUT_TEXT = 6,
                    t.MOUSEMOVE = 8,
                    t.MOUSEMOVE_CURVE = 9,
                    t.SCROLL_LAYOUT = 10,
                    t.SCROLL_LAYOUT_CURVE = 11,
                    t.MOUSEDOWN = 12,
                    t.MOUSEUP = 13,
                    t.CLICK = 16,
                    t.FOCUS = 17,
                    t.VALUECHANGE = 18,
                    t.RESIZE_LAYOUT = 19,
                    t.DOMLOADED = 20,
                    t.LOAD = 21,
                    t.PLACEHOLDER_SIZE = 22,
                    t.UNLOAD = 23,
                    t.BLUR = 24,
                    t.SET_FRAME_BASE = 25,
                    t.TOUCHSTART = 32,
                    t.TOUCHEND = 33,
                    t.TOUCHCANCEL = 34,
                    t.TOUCHMOVE = 35,
                    t.TOUCHMOVE_CURVE = 36,
                    t.NAVIGATE = 37,
                    t.PLAY = 38,
                    t.PAUSE = 39,
                    t.RESIZE_VISUAL = 40,
                    t.RESIZE_VISUAL_CURVE = 41,
                    t.RESIZE_DOCUMENT_CONTENT = 42,
                    t.RESIZE_SCROLLABLE_ELEMENT_CONTENT = 43,
                    t.LOG = 48,
                    t.ERROR = 49,
                    t.DBL_CLICK = 50,
                    t.FORM_SUBMIT = 51,
                    t.WINDOW_FOCUS = 52,
                    t.WINDOW_BLUR = 53,
                    t.HEARTBEAT = 54,
                    t.WATCHED_ELEM = 56,
                    t.PERF_ENTRY = 57,
                    t.REC_FEAT_SUPPORTED = 58,
                    t.SELECT = 59,
                    t.CSSRULE_INSERT = 60,
                    t.CSSRULE_DELETE = 61,
                    t.FAIL_THROTTLED = 62,
                    t.AJAX_REQUEST = 63,
                    t.SCROLL_VISUAL_OFFSET = 64,
                    t.SCROLL_VISUAL_OFFSET_CURVE = 65,
                    t.MEDIA_QUERY_CHANGE = 66,
                    t.RESOURCE_TIMING_BUFFER_FULL = 67,
                    t.MUT_SHADOW = 68,
                    t.DISABLE_STYLESHEET = 69,
                    t.FULLSCREEN = 70,
                    t.FULLSCREEN_ERROR = 71,
                    t.ADOPTED_STYLESHEETS = 72,
                    t.CUSTOM_ELEMENT_DEFINED = 73,
                    t.MODAL_OPEN = 74,
                    t.MODAL_CLOSE = 75,
                    t.SLOW_INTERACTION = 76,
                    t.LONG_FRAME = 77,
                    t.TIMING = 78,
                    t.STORAGE_WRITE_FAILURE = 79,
                    t.DOCUMENT_PROPERTIES = 80,
                    t.ENTRY_NAVIGATE = 81,
                    t.STATS = 82,
                    t.VIEWPORT_INTERSECTION = 83,
                    t.COPY = 84,
                    t.PASTE = 85,
                    t.URL_SALT = 86,
                    t.URL_ID = 87,
                    t.FRAME_STATUS = 88,
                    t.SCRIPT_COMPILED_VERSION = 89,
                    t.RESET_CSS_SHEET = 90,
                    t.ANIMATION_CREATED = 91,
                    t.ANIMATION_METHOD_CALLED = 92,
                    t.ANIMATION_PROPERTY_SET = 93,
                    t.DOCUMENT_TIMELINE_CREATED = 94,
                    t.KEYFRAME_EFFECT_CREATED = 95,
                    t.KEYFRAME_EFFECT_METHOD_CALLED = 96,
                    t.KEYFRAME_EFFECT_PROPERTY_SET = 97,
                    t.CAPTURE_SOURCE = 98,
                    t.PAGE_DATA = 99,
                    t.VISIBILITY_STATE = 100,
                    t.DIALOG = 101,
                    t.CSSRULE_UPDATE = 102,
                    t.CANVAS = 103,
                    t.CANVAS_DETACHED_DIMENSION = 104,
                    t.INIT_API = 105,
                    t.DEFERRED_RESOLVED = 106,
                    t.DEFERRED_MUT_INSERT = 107,
                    t.DEFERRED_MUT_SHADOW = 108,
                    t.KEEP_ELEMENT = 2e3,
                    t.KEEP_URL = 2001,
                    t.KEEP_BOUNCE = 2002,
                    t.SYS_SETVAR = 8193,
                    t.SYS_RESOURCEHASH = 8195,
                    t.SYS_SETCONSENT = 8196,
                    t.SYS_CUSTOM = 8197,
                    t.SYS_REPORTCONSENT = 8198,
                    t.SYS_LETHE_MOBILE_BUNDLE_SEQ = 8199
            }(Pt || (Pt = {})),
                function (t) {
                    t.Animation = 0,
                        t.CSSAnimation = 1,
                        t.CSSTransition = 2
                }(Nt || (Nt = {})),
                function (t) {
                    t.Internal = 0,
                        t.Public = 1
                }(Lt || (Lt = {})),
                function (t) {
                    t.Unknown = 0,
                        t.Serialization = 1
                }(Ut || (Ut = {})),
                function (t) {
                    t.Unknown = 0,
                        t.DomSnapshot = 1,
                        t.NodeEncoding = 2,
                        t.LzEncoding = 3,
                        t.ApplyRules = 4,
                        t.ProcessMut = 5
                }(Ht || (Ht = {})),
                function (t) {
                    t.Unknown = 0,
                        t.Successful = 1,
                        t.BlocklistedFrame = 2,
                        t.PartiallyLoaded = 3,
                        t.MissingWindowOrDocument = 4,
                        t.MissingDocumentHead = 5,
                        t.MissingBodyOrChildren = 6,
                        t.AlreadyDefined = 7,
                        t.NoNonScriptElement = 8,
                        t.Exception = 9
                }(Dt || (Dt = {}));
            var Wt, zt, Vt, qt, $t, Gt, Xt, Qt, Yt, Jt, Zt, tn, nn, rn, en, sn, on, un, an, cn, hn, fn, vn, ln = ["print", "alert", "confirm"];
            function dn(t) {
                switch (t) {
                    case Pt.MOUSEDOWN:
                    case Pt.MOUSEMOVE:
                    case Pt.MOUSEMOVE_CURVE:
                    case Pt.MOUSEUP:
                    case Pt.TOUCHSTART:
                    case Pt.TOUCHEND:
                    case Pt.TOUCHMOVE:
                    case Pt.TOUCHMOVE_CURVE:
                    case Pt.TOUCHCANCEL:
                    case Pt.CLICK:
                    case Pt.SCROLL_LAYOUT:
                    case Pt.SCROLL_LAYOUT_CURVE:
                    case Pt.SCROLL_VISUAL_OFFSET:
                    case Pt.SCROLL_VISUAL_OFFSET_CURVE:
                    case Pt.NAVIGATE:
                        return !0;
                }
                return !1
            }
            !function (t) {
                t[t.Index = 1] = "Index",
                    t[t.Cached = 2] = "Cached"
            }(Wt || (Wt = {})),
                function (t) {
                    t.GrantConsent = !0,
                        t.RevokeConsent = !1
                }(zt || (zt = {})),
                function (t) {
                    t.Page = 0,
                        t.Document = 1
                }(Vt || (Vt = {})),
                function (t) {
                    t.Unknown = 0,
                        t.Api = 1,
                        t.FsShutdownFrame = 2,
                        t.Hibernation = 3,
                        t.Reidentify = 4,
                        t.SettingsBlocked = 5,
                        t.Size = 6,
                        t.Unload = 7,
                        t.Hidden = 8
                }(qt || (qt = {})),
                function (t) {
                    t.Unknown = 0,
                        t.NotEmpty = 1,
                        t.EmptyBody = 2
                }($t || ($t = {})),
                function (t) {
                    t.Timing = 0,
                        t.Navigation = 1,
                        t.Resource = 2,
                        t.Paint = 3,
                        t.Mark = 4,
                        t.Measure = 5,
                        t.Memory = 6,
                        t.TimeOrigin = 7,
                        t.LayoutShift = 8,
                        t.FirstInput = 9,
                        t.LargestContentfulPaint = 10,
                        t.LongTask = 11
                }(Gt || (Gt = {})),
                function (t) {
                    t.Timing = ["navigationStart", "unloadEventStart", "unloadEventEnd", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "domLoading", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd"],
                        t.Navigation = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "unloadEventStart", "unloadEventEnd", "domInteractive", "domContentLoadedEventStart", "domContentLoadedEventEnd", "domComplete", "loadEventStart", "loadEventEnd", "type", "redirectCount", "decodedBodySize", "encodedBodySize", "transferSize"],
                        t.Resource = ["name", "startTime", "duration", "initiatorType", "redirectStart", "redirectEnd", "fetchStart", "domainLookupStart", "domainLookupEnd", "connectStart", "connectEnd", "secureConnectionStart", "requestStart", "responseStart", "responseEnd", "decodedBodySize", "encodedBodySize", "transferSize"],
                        t.Measure = ["name", "startTime", "duration"],
                        t.Memory = ["jsHeapSizeLimit", "totalJSHeapSize", "usedJSHeapSize"],
                        t.TimeOrigin = ["timeOrigin"],
                        t.LayoutShift = ["startTime", "value", "hadRecentInput"],
                        t.FirstInput = ["name", "startTime", "duration", "processingStart"],
                        t.LargestContentfulPaint = ["name", "startTime", "duration", "renderTime", "loadTime", "size"]
                }(Xt || (Xt = {})),
                function (t) {
                    t.Performance = 0,
                        t.PerformanceEntries = 1,
                        t.PerformanceMemory = 2,
                        t.Console = 3,
                        t.Ajax = 4,
                        t.PerformanceObserver = 5,
                        t.PerformanceTimeOrigin = 7,
                        t.WebAnimation = 8,
                        t.LayoutShift = 9,
                        t.FirstInput = 10,
                        t.LargestContentfulPaint = 11,
                        t.LongTask = 12,
                        t.HTMLDialogElement = 13,
                        t.CaptureOnStartupEnabled = 14,
                        t.CanvasWatcherEnabled = 15,
                        t.CanvasScreenShotMode = 16
                }(Qt || (Qt = {})),
                function (t) {
                    t.Node = 1,
                        t.Sheet = 2
                }(Yt || (Yt = {})),
                function (t) {
                    t.StyleSheetHooks = 0,
                        t.SetPropertyHooks = 1
                }(Jt || (Jt = {})),
                function (t) {
                    t.Document = "document",
                        t.Event = "evt",
                        t.Page = "page",
                        t.User = "user"
                }(Zt || (Zt = {})),
                function (t) {
                    t.FsId = "fsidentity",
                        t.NewUid = "newuid"
                }(tn || (tn = {})),
                function (t) {
                    t.Elide = 0,
                        t.Record = 1,
                        t.Allowlist = 2
                }(nn || (nn = {})),
                function (t) {
                    t.Any = 0,
                        t.Exclude = 1,
                        t.Mask = 2
                }(rn || (rn = {})),
                function (t) {
                    t.Erase = 0,
                        t.MaskText = 1,
                        t.ScrubUrl = 2,
                        t.ScrubCss = 3
                }(en || (en = {})),
                function (t) {
                    t.Static = 0,
                        t.Prefix = 1
                }(sn || (sn = {})),
                function (t) {
                    t.SignalInvalid = 0,
                        t.SignalDeadClick = 1,
                        t.SignalRageClick = 2
                }(on || (on = {})),
                function (t) {
                    t.ReasonNoSuchOrg = 1,
                        t.ReasonOrgDisabled = 2,
                        t.ReasonOrgOverQuota = 3,
                        t.ReasonBlockedDomain = 4,
                        t.ReasonBlockedIp = 5,
                        t.ReasonBlockedUserAgent = 6,
                        t.ReasonBlockedGeo = 7,
                        t.ReasonBlockedTrafficRamping = 8,
                        t.ReasonInvalidURL = 9,
                        t.ReasonUserOptOut = 10,
                        t.ReasonInvalidRecScript = 11,
                        t.ReasonDeletingUser = 12,
                        t.ReasonNativeHookFailure = 13
                }(un || (un = {})),
                function (t) {
                    t.Unset = 0,
                        t.Exclude = 1,
                        t.Mask = 2,
                        t.Unmask = 3,
                        t.Watch = 4,
                        t.Keep = 5,
                        t.Defer = 6
                }(an || (an = {})),
                function (t) {
                    t.Unset = 0,
                        t.Click = 1
                }(cn || (cn = {})),
                function (t) {
                    t[t.Page = 1] = "Page",
                        t[t.Bundle = 2] = "Bundle"
                }(hn || (hn = {})),
                function (t) {
                    t[t.Error = 3] = "Error",
                        t[t.Page = 4] = "Page",
                        t[t.Bundle = 5] = "Bundle",
                        t[t.Settings = 6] = "Settings"
                }(fn || (fn = {})),
                function (t) {
                    t.MaxPerfMarksPerPage = 16384,
                        t.MaxLogsPerPage = 1024,
                        t.MaxUrlLength = 2048,
                        t.MutationProcessingInterval = 250,
                        t.CurveSamplingInterval = 142,
                        t.DefaultBundleUploadInterval = 5e3,
                        t.HeartbeatInitial = 4e3,
                        t.HeartbeatMax = 256200,
                        t.PageInactivityTimeout = 18e5,
                        t.BackoffMax = 3e5,
                        t.ScrollSampleInterval = t.MutationProcessingInterval / 5,
                        t.InactivityThreshold = 4e3,
                        t.MaxAjaxPayloadLength = 16384,
                        t.DefaultOrgSettings = {
                            MaxPerfMarksPerPage: t.MaxPerfMarksPerPage,
                            MaxConsoleLogPerPage: t.MaxLogsPerPage,
                            MaxAjaxPayloadLength: t.MaxAjaxPayloadLength,
                            MaxUrlLength: t.MaxUrlLength,
                            RecordPerformanceResourceImg: !0,
                            RecordPerformanceResourceTiming: !0,
                            HttpRequestHeadersAllowlist: [],
                            HttpResponseHeadersAllowlist: [],
                            UrlPrivacyConfig: [{
                                Exclude: {
                                    Hash: [{
                                        Expression: "#.*"
                                    }],
                                    QueryParam: [{
                                        Expression: "(=)(.*)"
                                    }]
                                }
                            }],
                            AttributeBlocklist: [{
                                Target: rn.Any,
                                Tag: "*",
                                Name: "",
                                Type: sn.Prefix,
                                Action: en.Erase
                            }]
                        },
                        t.DefaultStatsSettings = {
                            MaxPayloadLength: 8192,
                            MaxEventTypeLength: 1024
                        },
                        t.BlockedFieldValue = "__fs__redacted",
                        t.DefaultRecDisabledMessage = "Capture disabled. Turn on debug mode for more information.",
                        t.ShutdownMessage = "Shutdown called."
                }(vn || (vn = {}));
            var pn, wn, gn, yn = "_fs_uid", mn = "_fs_cid", bn = "_fs_lua";
            function Sn(t, n, i, r) {
                void 0 !== i && ("function" == typeof t.addEventListener ? t.addEventListener(n, i, r) : "function" == typeof t.addListener && t.addListener(i))
            }
            function kn(t, n, i, r) {
                void 0 !== i && ("function" == typeof t.removeEventListener ? t.removeEventListener(n, i, r) : "function" == typeof t.removeListener && t.removeListener(i))
            }
            !function (t) {
                t[t.Shutdown = 1] = "Shutdown",
                    t[t.Starting = 2] = "Starting",
                    t[t.Started = 3] = "Started",
                    t[t.Fatal = 4] = "Fatal"
            }(pn || (pn = {})),
                function (t) {
                    t.Set = 0,
                        t.Function = 1
                }(wn || (wn = {})),
                function (t) {
                    t[t.Disabled = 0] = "Disabled",
                        t[t.CaptureCanvasOps = 1] = "CaptureCanvasOps",
                        t[t.ScreenshotCanvas = 2] = "ScreenshotCanvas"
                }(gn || (gn = {}));
            var _n = function () {
                function t() {
                    var t = this;
                    this.C = [],
                        this.I = [],
                        this.j = !0,
                        this.O = !1;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function () {
                                t.j = {
                                    capture: !0,
                                    passive: !0
                                },
                                    t.O = {
                                        capture: !1,
                                        passive: !0
                                    }
                            }
                        });
                        window.addEventListener("test", J, n)
                    } catch (t) { }
                }
                return t.prototype.add = function (t, n, i, r, e) {
                    return void 0 === e && (e = !1),
                        this.addCustom(t, n, i, r, e)
                }
                    ,
                    t.prototype.addCustom = function (t, n, i, r, e) {
                        void 0 === e && (e = !1);
                        var s = {
                            target: t,
                            type: n,
                            fn: Ot.wrap(lt(function (t) {
                                (e || !1 !== t.isTrusted || "message" == n || t._fs_trust_event) && r(t)
                            })),
                            options: i ? this.j : this.O,
                            index: this.C.length
                        };
                        return this.C.push(s),
                            Sn(t, n, s.fn, s.options),
                            s
                    }
                    ,
                    t.prototype.remove = function (t) {
                        t.target && (kn(t.target, t.type, t.fn, t.options),
                            t.target = null,
                            t.fn = void 0)
                    }
                    ,
                    t.prototype.clear = function () {
                        for (var t = 0; t < this.C.length; t++)
                            this.C[t].target && this.remove(this.C[t]);
                        this.C = []
                    }
                    ,
                    t.prototype.createChild = function () {
                        var n = new t;
                        return this.I.push(n),
                            n
                    }
                    ,
                    t.prototype.refresh = function () {
                        for (var t = 0, n = this.C; t < n.length; t++) {
                            var i = n[t];
                            i.target && (kn(i.target, i.type, i.fn, i.options),
                                Sn(i.target, i.type, i.fn, i.options))
                        }
                        for (var r = 0, e = this.I; r < e.length; r++)
                            e[r].refresh()
                    }
                    ,
                    t
            }();
            function An(t, n) {
                return n && t.pageLeft == n.pageLeft && t.pageTop == n.pageTop
            }
            function Tn(t, n) {
                return n && t.width == n.width && t.height == n.height
            }
            function En(t) {
                return {
                    pageLeft: t.pageLeft,
                    pageTop: t.pageTop,
                    width: t.width,
                    height: t.height
                }
            }
            var Cn = [["@import\\s+\"", "\""], ["@import\\s+'", "'"]].concat([["url\\(\\s*\"", "\"\\s*\\)"], ["url\\(\\s*'", "'\\s*\\)"], ["url\\(\\s*", "\\s*\\)"]])
                , In = ".*?" + /(?:[^\\](?:\\\\)*)/.source
                , jn = new RegExp(Cn.map(function (t) {
                    var n = t[0]
                        , i = t[1];
                    return "(" + n + ")(" + In + ")(" + i + ")"
                }).join("|"), "g")
                , xn = /url\(["']?(.+?)["']?\)/g
                , On = /^\s*\/\//;
            function Kn(t) {
                return "BackCompat" == t.compatMode
            }
            function Mn(t) {
                return t && t.body && t.documentElement ? Kn(t) ? [t.body.clientWidth, t.body.clientHeight] : [t.documentElement.clientWidth, t.documentElement.clientHeight] : [0, 0]
            }
            var Rn = function () {
                function t(t, n) {
                    var i, r, e, s;
                    this.hasKnownPosition = !1,
                        this.pageLeft = 0,
                        this.pageTop = 0,
                        this.width = 0,
                        this.height = 0,
                        this.clientWidth = 0,
                        this.clientHeight = 0;
                    var o = t.document;
                    if (o && o.documentElement && o.body) {
                        i = Mn(o),
                            this.clientWidth = i[0],
                            this.clientHeight = i[1];
                        var u = t.visualViewport;
                        if (u) {
                            this.hasKnownPosition = !0,
                                this.pageTop = u.pageTop - u.offsetTop,
                                this.pageLeft = u.pageLeft - u.offsetLeft,
                                0 == this.pageTop && (this.pageTop = 0),
                                0 == this.pageLeft && (this.pageLeft = 0);
                            var a = null !== (e = Ln(t, "innerWidth")) && void 0 !== e ? e : 0
                                , c = null !== (s = Ln(t, "innerHeight")) && void 0 !== s ? s : 0;
                            if (a > 0 && c > 0)
                                return this.width = a,
                                    void (this.height = c)
                        }
                        if (void 0 !== n && this.clientWidth == n.clientWidth && this.clientHeight == n.clientHeight && n.width > 0 && n.height > 0)
                            return this.width = n.width,
                                void (this.height = n.height);
                        r = this.K(t),
                            this.width = r[0],
                            this.height = r[1]
                    }
                }
                return t.prototype.K = function (t) {
                    var n = this.M(t, "width", this.clientWidth, this.clientWidth + 128);
                    void 0 === n && (n = Ln(t, "innerWidth")),
                        void 0 === n && (n = this.clientWidth);
                    var i = this.M(t, "height", this.clientHeight, this.clientHeight + 128);
                    return void 0 === i && (i = Ln(t, "innerHeight")),
                        void 0 === i && (i = this.clientHeight),
                        [n, i]
                }
                    ,
                    t.prototype.M = function (t, n, i, r) {
                        if (o.matchMedia) {
                            var e = i
                                , s = r
                                , u = o.matchMedia(t, "(min-" + n + ": " + e + "px)");
                            if (null != u) {
                                if (u.matches && o.matchMedia(t, "(max-" + n + ": " + e + "px)").matches)
                                    return e;
                                for (; e <= s;) {
                                    var a = o.mathFloor((e + s) / 2);
                                    if (o.matchMedia(t, "(min-" + n + ": " + a + "px)").matches) {
                                        if (o.matchMedia(t, "(max-" + n + ": " + a + "px)").matches)
                                            return a;
                                        e = a + 1
                                    } else
                                        s = a - 1
                                }
                            }
                        }
                    }
                    ,
                    t
            }();
            function Pn(t, n) {
                return new Rn(t, n)
            }
            var Nn = function (t, n) {
                this.offsetLeft = 0,
                    this.offsetTop = 0,
                    this.pageLeft = 0,
                    this.pageTop = 0,
                    this.width = 0,
                    this.height = 0,
                    this.scale = 0;
                var i = t.document;
                if (i.body) {
                    "pageXOffset" in t ? (this.pageLeft = t.pageXOffset,
                        this.pageTop = t.pageYOffset) : i.scrollingElement ? (this.pageLeft = i.scrollingElement.scrollLeft,
                            this.pageTop = i.scrollingElement.scrollTop) : Kn(i) ? (this.pageLeft = i.body.scrollLeft,
                                this.pageTop = i.body.scrollTop) : i.documentElement && (i.documentElement.scrollLeft > 0 || i.documentElement.scrollTop > 0) ? (this.pageLeft = i.documentElement.scrollLeft,
                                    this.pageTop = i.documentElement.scrollTop) : (this.pageLeft = i.body.scrollLeft || 0,
                                        this.pageTop = i.body.scrollTop || 0),
                        this.offsetLeft = this.pageLeft - n.pageLeft,
                        this.offsetTop = this.pageTop - n.pageTop;
                    var r = 0
                        , e = 0;
                    try {
                        r = t.innerWidth,
                            e = t.innerHeight
                    } catch (t) {
                        return
                    }
                    if (0 != r && 0 != e) {
                        this.scale = n.width / r,
                            this.scale < 1 && (this.scale = 1);
                        var s = n.width - n.clientWidth
                            , o = n.height - n.clientHeight;
                        this.width = r - s / this.scale,
                            this.height = e - o / this.scale
                    }
                }
            };
            function Ln(t, n) {
                try {
                    return t[n]
                } catch (t) {
                    return
                }
            }
            function Un(t) {
                var n = t.tagName;
                return n ? "object" == typeof n ? "form" : n.toLowerCase() : null
            }
            var Hn, Dn, Bn = new RegExp("[^\\s]"), Fn = new RegExp("[\\s]*$");
            function Wn(t) {
                var n = Bn.exec(t);
                if (!n)
                    return t;
                for (var i = n.index, r = (n = Fn.exec(t)) ? t.length - n.index : 0, e = "\uFFFF", s = t.slice(i, t.length - r).split(/\r\n?|\n/g), o = 0; o < s.length; o++)
                    e += "" + s[o].length,
                        o != s.length - 1 && (e += ":");
                return (i || r) && (e += " " + i + " " + r),
                    e
            }
            String.prototype,
                function (t) {
                    t[t.Exclude = 2] = "Exclude",
                        t[t.Mask = 4] = "Mask",
                        t[t.Unmask = 8] = "Unmask",
                        t[t.Watch = 16] = "Watch",
                        t[t.Keep = 32] = "Keep",
                        t[t.Defer = 64] = "Defer"
                }(Hn || (Hn = {})),
                function (t) {
                    t[t.Immediate = 1] = "Immediate",
                        t[t.Deferred = 2] = "Deferred"
                }(Dn || (Dn = {}));
            var zn = [Hn.Exclude, Hn.Mask, Hn.Unmask]
                , Vn = [Hn.Watch, Hn.Keep, Hn.Defer]
                , qn = zn.concat(Vn)
                , $n = {}
                , Gn = 1;
            function Xn(t, n) {
                var i, r;
                return void 0 === n && (n = Jn(t)),
                    null !== (r = null === (i = null == n ? void 0 : n.watchKind) || void 0 === i ? void 0 : i.hasKinds()) && void 0 !== r && r
            }
            function Qn(t, n) {
                var i, r;
                return void 0 === n && (n = Jn(t)),
                    null !== (r = null === (i = null == n ? void 0 : n.watchKind) || void 0 === i ? void 0 : i.has(Hn.Exclude)) && void 0 !== r && r
            }
            function Yn(t, n) {
                return void 0 === n && (n = Jn(t)),
                    !!n && !!n.mask
            }
            function Jn(t) {
                var n = t ? t._fs : null;
                return n ? $n[n] : null
            }
            function Zn(t) {
                return $n[t]
            }
            function ti(t) {
                try {
                    return t && t._fs || 0
                } catch (t) {
                    return 0
                }
            }
            function ni(t) {
                return t && !Qn(t) ? ti(t) : 0
            }
            function ii(t, n) {
                t.parent && (n.unobserveSubtree(t.node),
                    t.parent.child == t && (t.parent.child = t.next),
                    t.parent.lastChild == t && (t.parent.lastChild = t.prev),
                    t.prev && (t.prev.next = t.next),
                    t.next && (t.next.prev = t.prev),
                    t.parent = t.prev = t.next = null,
                    delete $n[t.id],
                    t.node._fs == t.id && (t.node._fs = 0),
                    t.id = 0,
                    t.child && ri(t.child))
            }
            function ri(t) {
                for (var n = [t]; n.length > 0 && n.length < 1e4;) {
                    var i = n.pop();
                    delete $n[i.id],
                        i.node._fs == i.id && (i.node._fs = 0),
                        i.id = 0,
                        i.next && n.push(i.next),
                        i.child && n.push(i.child)
                }
                Rt(n.length < 1e4, "clearIds is fast")
            }
            function ei(t) {
                return "function" == typeof t
            }
            var si, oi, ui, ai, ci, hi = Array.isArray ? Array.isArray : function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
                , fi = 0, vi = function (t, n) {
                    li[fi] = t,
                        li[fi + 1] = n,
                        2 === (fi += 2) && si()
                }, li = new Array(1e3);
            function di() {
                for (var t = 0; t < fi; t += 2)
                    (0,
                        li[t])(li[t + 1]),
                        li[t] = void 0,
                        li[t + 1] = void 0;
                fi = 0
            }
            function pi(t, n) {
                var i = arguments
                    , r = this
                    , e = new this.constructor(yi);
                void 0 === e[gi] && Mi(e);
                var s, o = r.R;
                return o ? (s = i[o - 1],
                    vi(function () {
                        return Oi(o, e, s, r.P)
                    })) : Ci(r, e, t, n),
                    e
            }
            function wi(t) {
                if (t && "object" == typeof t && t.constructor === this)
                    return t;
                var n = new this(yi);
                return _i(n, t),
                    n
            }
            window.MutationObserver ? (ui = 0,
                ai = new MutationObserver(di),
                ci = document.createTextNode(""),
                ai.observe(ci, {
                    characterData: !0
                }),
                si = function () {
                    var t = ui = ++ui % 2;
                    ci.data = "" + t
                }
            ) : (oi = setTimeout,
                si = function () {
                    return oi(di, 1)
                }
            );
            var gi = Math.random().toString(36).substring(16);
            function yi() { }
            var mi = void 0
                , bi = new ji;
            function Si(t) {
                try {
                    return t.then
                } catch (t) {
                    return bi.error = t,
                        bi
                }
            }
            function ki(t, n, i) {
                n.constructor === t.constructor && i === pi && n.constructor.resolve === wi ? function (t, n) {
                    1 === n.R ? Ti(t, n.P) : 2 === n.R ? Ei(t, n.P) : Ci(n, void 0, function (n) {
                        return _i(t, n)
                    }, function (n) {
                        return Ei(t, n)
                    })
                }(t, n) : i === bi ? (Ei(t, bi.error),
                    bi.error = null) : void 0 === i ? Ti(t, n) : ei(i) ? function (t, n, i) {
                        vi(function (t) {
                            var r = !1
                                , e = function (i, e, s, o, u) {
                                    try {
                                        i.call(e, function (i) {
                                            r || (r = !0,
                                                n !== i ? _i(t, i) : Ti(t, i))
                                        }, function (n) {
                                            r || (r = !0,
                                                Ei(t, n))
                                        })
                                    } catch (t) {
                                        return t
                                    }
                                }(i, n, 0, 0, t.N);
                            !r && e && (r = !0,
                                Ei(t, e))
                        }, t)
                    }(t, n, i) : Ti(t, n)
            }
            function _i(t, n) {
                var i;
                t === n ? Ei(t, new TypeError("You cannot resolve a promise with itself")) : "function" == typeof (i = n) || "object" == typeof i && null !== i ? ki(t, n, Si(n)) : Ti(t, n)
            }
            function Ai(t) {
                t.L && t.L(t.P),
                    Ii(t)
            }
            function Ti(t, n) {
                t.R === mi && (t.P = n,
                    t.R = 1,
                    0 !== t.U.length && vi(Ii, t))
            }
            function Ei(t, n) {
                t.R === mi && (t.R = 2,
                    t.P = n,
                    vi(Ai, t))
            }
            function Ci(t, n, i, r) {
                var e = t.U
                    , s = e.length;
                t.L = null,
                    e[s] = n,
                    e[s + 1] = i,
                    e[s + 2] = r,
                    0 === s && t.R && vi(Ii, t)
            }
            function Ii(t) {
                var n = t.U
                    , i = t.R;
                if (0 !== n.length) {
                    for (var r, e, s = t.P, o = 0; o < n.length; o += 3)
                        r = n[o],
                            e = n[o + i],
                            r ? Oi(i, r, e, s) : e(s);
                    t.U.length = 0
                }
            }
            function ji() {
                this.error = null
            }
            var xi = new ji;
            function Oi(t, n, i, r) {
                var e, s, o = ei(i), u = !1, a = !1;
                if (o) {
                    if (e = function (t, n) {
                        try {
                            return t(n)
                        } catch (t) {
                            return xi.error = t,
                                xi
                        }
                    }(i, r),
                        e === xi ? (a = !0,
                            s = e.error,
                            e.error = null) : u = !0,
                        n === e)
                        return void Ei(n, new TypeError("A promises callback cannot return that same promise."))
                } else
                    e = r,
                        u = !0;
                n.R !== mi || (o && u ? _i(n, e) : a ? Ei(n, s) : 1 === t ? Ti(n, e) : 2 === t && Ei(n, e))
            }
            var Ki = 0;
            function Mi(t) {
                t[gi] = Ki++,
                    t.R = void 0,
                    t.P = void 0,
                    t.U = []
            }
            function Ri(t, n) {
                this.H = t,
                    this.promise = new t(yi),
                    this.promise[gi] || Mi(this.promise),
                    hi(n) ? (this.D = n,
                        this.length = n.length,
                        this.B = n.length,
                        this.P = new Array(this.length),
                        0 === this.length ? Ti(this.promise, this.P) : (this.length = this.length || 0,
                            this.F(),
                            0 === this.B && Ti(this.promise, this.P))) : Ei(this.promise, new Error("Array Methods must be provided an Array"))
            }
            Ri.prototype.F = function () {
                for (var t = this.length, n = this.D, i = 0; this.R === mi && i < t; i++)
                    this.W(n[i], i)
            }
                ,
                Ri.prototype.W = function (t, n) {
                    var i = this.H
                        , r = i.resolve;
                    if (r === wi) {
                        var e = Si(t);
                        if (e === pi && t.R !== mi)
                            this.V(t.R, n, t.P);
                        else if ("function" != typeof e)
                            this.B--,
                                this.P[n] = t;
                        else if (i === Pi) {
                            var s = new i(yi);
                            ki(s, t, e),
                                this.$(s, n)
                        } else
                            this.$(new i(function (n) {
                                return n(t)
                            }
                            ), n)
                    } else
                        this.$(r(t), n)
                }
                ,
                Ri.prototype.V = function (t, n, i) {
                    var r = this.promise;
                    r.R === mi && (this.B--,
                        2 === t ? Ei(r, i) : this.P[n] = i),
                        0 === this.B && Ti(r, this.P)
                }
                ,
                Ri.prototype.$ = function (t, n) {
                    var i = this;
                    Ci(t, void 0, function (t) {
                        return i.V(1, n, t)
                    }, function (t) {
                        return i.V(2, n, t)
                    })
                }
                ;
            var Pi = function (t) {
                this[gi] = Ki++,
                    this.P = this.R = void 0,
                    this.U = [],
                    yi !== t && ("function" != typeof t && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(),
                        this instanceof Pi ? function (t, n) {
                            try {
                                n(function (n) {
                                    _i(t, n)
                                }, function (n) {
                                    Ei(t, n)
                                })
                            } catch (n) {
                                Ei(t, n)
                            }
                        }(this, t) : function () {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
            };
            Pi.all = function (t) {
                return new Ri(this, t).promise
            }
                ,
                Pi.race = function (t) {
                    var n = this;
                    return hi(t) ? new n(function (i, r) {
                        for (var e = t.length, s = 0; s < e; s++)
                            n.resolve(t[s]).then(i, r)
                    }
                    ) : new n(function (t, n) {
                        return n(new TypeError("You must pass an array to race."))
                    }
                    )
                }
                ,
                Pi.resolve = wi,
                Pi.reject = function (t) {
                    var n = new this(yi);
                    return Ei(n, t),
                        n
                }
                ,
                Pi.G = function (t) {
                    vi = t
                }
                ,
                Pi.X = vi,
                Pi.prototype = {
                    constructor: Pi,
                    then: pi,
                    "catch": function (t) {
                        return this.then(null, t)
                    }
                };
            var Ni = "function" == typeof window.Promise ? window.Promise : Pi;
            function Li(t, n) {
                void 0 === n && (n = 1024);
                try {
                    var i = {
                        tokens: [],
                        opath: [],
                        cyclic: Ui(t, n / 4)
                    };
                    return Di(t, n, 0, i),
                        i.tokens.join("")
                } catch (t) {
                    return wt(t)
                }
            }
            function Ui(t, n) {
                var i = 0;
                try {
                    o.jsonStringify(t, function (t, r) {
                        if (i++ > n)
                            throw "break";
                        if ("object" == typeof r)
                            return r
                    })
                } catch (t) {
                    return "break" != t
                }
                return !1
            }
            var Hi = function (t, n, i) {
                return void 0 === i && (i = "..."),
                    t.length <= n ? t : t.length <= i.length || n <= i.length ? t.substring(0, n) : t.substring(0, n - i.length) + i
            };
            function Di(t, n, i, r) {
                if (n < 1)
                    return 0;
                var e = function (t) {
                    switch (!0) {
                        case function (t) {
                            return !(!t || t.constructor != Date)
                        }(t):
                            return n = t,
                                isNaN(n) ? "Invalid Date" : n.toUTCString();
                        case function (t) {
                            return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && t.nodeType > 0 && "string" == typeof t.nodeName
                        }(t):
                            return function (t) {
                                return t.toString()
                            }(t);
                        case void 0 === t:
                            return "undefined";
                        case "object" != typeof t || null == t:
                            return t;
                        case t instanceof Error:
                            return [t.toString(), t.stack].filter(Boolean).join(",");
                    }
                    var n
                }(t);
                if (void 0 !== e) {
                    var s = function (t, n) {
                        var i = o.jsonStringify(t);
                        return i && "\"" == i[0] ? Hi(i, n, "...\"") : i
                    }(e, n);
                    return "string" == typeof s && s.length <= n ? (r.tokens.push(s),
                        s.length) : 0
                }
                if (r.cyclic) {
                    r.opath.splice(i);
                    var u = r.opath.lastIndexOf(t);
                    if (u > -1) {
                        var a = "<Cycle to ancestor #" + (i - u - 1) + ">";
                        return a = "\"" + Hi(a, n - 2) + "\"",
                            r.tokens.push(a),
                            a.length
                    }
                    r.opath.push(t)
                }
                var c = n
                    , h = function (t) {
                        return c >= t.length && (c -= t.length,
                            r.tokens.push(t),
                            !0)
                    }
                    , f = function (t) {
                        var n = r.tokens.length - 1;
                        "," === r.tokens[n] ? r.tokens[n] = t : h(t)
                    };
                if (c < 2)
                    return 0;
                if (nt(t)) {
                    h("[");
                    for (var v = 0; v < t.length && c > 0; v++) {
                        var l = Di(t[v], c - 1, i + 1, r);
                        if (c -= l,
                            0 == l && !h("null"))
                            break;
                        h(",")
                    }
                    f("]")
                } else {
                    h("{");
                    var d = et(t);
                    for (v = 0; v < d.length && c > 0; v++) {
                        var p = d[v]
                            , w = t[p];
                        if (!h("\"" + p + "\":"))
                            break;
                        if (0 == (l = Di(w, c - 1, i + 1, r))) {
                            r.tokens.pop();
                            break
                        }
                        c -= l,
                            h(",")
                    }
                    f("}")
                }
                return n == 1 / 0 ? 1 : n - c
            }
            var Bi, Fi, Wi = function () {
                function t() {
                    var n = this;
                    this.Y = Ot.wrap(function () {
                        n.J(),
                            n.Z && n.Z()
                    }),
                        this.tt = 0,
                        this.it = t.rt++
                }
                return t.checkForBrokenSchedulers = function () {
                    return (0,
                        e.__awaiter)(this, void 0, Ni, function () {
                            var n, i;
                            return (0,
                                e.__generator)(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return !o.requestWindowAnimationFrame || t.et || (n = p()) - t.st < 100 ? [2, !1] : (t.st = n,
                                                t.et = !0,
                                                [4, new Ni(function (t) {
                                                    return o.requestWindowAnimationFrame(window, t)
                                                }
                                                )]);
                                        case 1:
                                            return r.sent(),
                                                i = [],
                                                ot(t.ot, function (t) {
                                                    var r = t.ut(n);
                                                    r && i.push(r)
                                                }),
                                                [4, Ni.all(i)];
                                        case 2:
                                            return r.sent(),
                                                o.requestWindowAnimationFrame(window, Ot.wrap(function () {
                                                    t.et = !1
                                                })),
                                                [2, !0];
                                    }
                                })
                        })
                }
                    ,
                    t.stopAll = function () {
                        ot(this.ot, function (t) {
                            return t.stop()
                        })
                    }
                    ,
                    t.prototype.ct = function (t) {
                        this.Z = t
                    }
                    ,
                    t.prototype.stop = function () {
                        this.ht(),
                            delete t.ot[this.it]
                    }
                    ,
                    t.prototype.ft = function (n) {
                        this.tt = p() + 100 + 1.5 * n,
                            t.ot[this.it] = this
                    }
                    ,
                    t.prototype.vt = function () {
                        return null != t.ot[this.it]
                    }
                    ,
                    t.prototype.J = function () {
                        delete t.ot[this.it]
                    }
                    ,
                    t.prototype.ut = function (t) {
                        if (t > this.tt)
                            return Ni.resolve().then(this.Y)["catch"](function () { })
                    }
                    ,
                    t.ot = {},
                    t.rt = 0,
                    t.et = !1,
                    t.st = 0,
                    t
            }(), zi = function (t) {
                function n(n) {
                    var i = t.call(this) || this;
                    return i.lt = n,
                        i.dt = -1,
                        i
                }
                return (0,
                    e.__extends)(n, t),
                    n.prototype.start = function (t) {
                        var n = this;
                        -1 == this.dt && (this.ct(function () {
                            t(),
                                n.ft(n.lt)
                        }),
                            this.dt = o.setWindowInterval(window, this.Y, this.lt),
                            this.ft(this.lt))
                    }
                    ,
                    n.prototype.ht = function () {
                        -1 != this.dt && (o.clearWindowInterval(window, this.dt),
                            this.dt = -1,
                            this.ct(function () { }))
                    }
                    ,
                    n
            }(Wi), Vi = function (t) {
                function n(n, i, r) {
                    void 0 === i && (i = 0);
                    for (var e = [], s = 3; s < arguments.length; s++)
                        e[s - 3] = arguments[s];
                    var o = t.call(this) || this;
                    return o.wt = i,
                        o.gt = -1,
                        o.ct(function () {
                            o.stop(),
                                n.apply(void 0 === r ? window : r, e)
                        }),
                        o
                }
                return (0,
                    e.__extends)(n, t),
                    n.prototype.start = function (t) {
                        return void 0 === t && (t = this.wt),
                            this.wt = t,
                            o.clearWindowTimeout(window, this.gt),
                            this.gt = o.setWindowTimeout(window, this.Y, this.wt),
                            this.ft(t),
                            this
                    }
                    ,
                    n.prototype.isRunning = function () {
                        return this.vt()
                    }
                    ,
                    n.prototype.ht = function () {
                        -1 != this.gt && (o.clearWindowTimeout(window, this.gt),
                            this.gt = -1)
                    }
                    ,
                    n
            }(Wi), qi = function () {
                function t(t, n, i) {
                    this.yt = t,
                        this.bt = i,
                        this.B = 0,
                        this.St = new zi(n),
                        this.open()
                }
                return t.prototype.guard = function (t) {
                    var n = this;
                    return function () {
                        for (var i = [], r = 0; r < arguments.length; r++)
                            i[r] = arguments[r];
                        return 0 == n.B ? (n.bt(),
                            void n.B--) : n.B < 0 ? void 0 : (n.B--,
                                t.apply(this, i))
                    }
                }
                    ,
                    t.prototype.close = function () {
                        return this.St.stop(),
                            this
                    }
                    ,
                    t.prototype.open = function () {
                        var t = this;
                        return this.B = this.yt,
                            this.St.start(function () {
                                t.B = t.yt
                            }),
                            this
                    }
                    ,
                    t
            }(), $i = function () {
                function t() {
                    this.kt = 0,
                        this._t = p()
                }
                return t.prototype.wallTime = function () {
                    return p()
                }
                    ,
                    t.prototype.now = function () {
                        var t = this.wallTime() - this._t;
                        return t < 0 && this.At("timekeeper now() is negative"),
                            t
                    }
                    ,
                    t.prototype.startTime = function () {
                        return this._t
                    }
                    ,
                    t.prototype.setStartTime = function (t) {
                        var n = this.wallTime();
                        this._t = t,
                            t > n && (this.kt = t - n,
                                this.kt > 1e3 && this.At("timekeeper set with future ts"))
                    }
                    ,
                    t.prototype.At = function (t) {
                        Li({
                            msg: t,
                            skew: this.kt,
                            startTime: this._t,
                            wallTime: this.wallTime()
                        }, 1024)
                    }
                    ,
                    t
            }(), Gi = function () {
                function t(t, n) {
                    this.Tt = t,
                        this.Et = n,
                        this.Ct = !1,
                        this.It = {},
                        this.jt = {},
                        this.xt = {},
                        this.Ot = !1,
                        this.Kt = !1,
                        Bi = this,
                        this.Mt = t.window.document
                }
                return t.prototype.start = function () {
                    var t;
                    (t = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) && t.set && (Xi || (kt(HTMLInputElement, "value", tr),
                        kt(HTMLInputElement, "checked", tr),
                        kt(HTMLSelectElement, "value", tr),
                        kt(HTMLTextAreaElement, "value", tr),
                        kt(HTMLSelectElement, "selectedIndex", tr),
                        kt(HTMLOptionElement, "selected", tr),
                        Xi = !0),
                        1) || (this.Ct = !0)
                }
                    ,
                    t.prototype.hookInstance = function (t) {
                        if ("input" === Un(t))
                            switch (t.type) {
                                case "checkbox":
                                case "radio":
                                    _t(t, "checked", tr);
                                    break;
                                default:
                                    _t(t, "value", tr);
                            }
                    }
                    ,
                    t.prototype.addInput = function (t) {
                        if (t) {
                            var n = ni(t);
                            if (n) {
                                "input" === Un(t) && this.Rt(t);
                                var i = !1;
                                if (function (t) {
                                    switch (t.type) {
                                        case "checkbox":
                                        case "radio":
                                            return t.checked != t.hasAttribute("checked");
                                        default:
                                            return (t.value || "") != function (t) {
                                                if ("select" != Un(t))
                                                    return t.getAttribute("value") || "";
                                                var n = t
                                                    , i = n.querySelector("option[selected]") || n.querySelector("option");
                                                return i && i.value || ""
                                            }(t);
                                    }
                                }(t) && (this.Pt(t),
                                    i = !0),
                                    this.Ct && (this.It[n] = {
                                        elem: t
                                    }),
                                    !i)
                                    if (ir(t)) {
                                        var r = Ji(t);
                                        t.checked && (this.xt[r] = n)
                                    } else
                                        this.jt[n] = nr(t)
                            }
                        }
                    }
                    ,
                    t.prototype.Rt = function (t) {
                        if (this.Ot)
                            this.Kt && this.hookInstance(t);
                        else {
                            var n = "checkbox" === t.type || "radio" === t.type ? "checked" : "value"
                                , i = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, n)
                                , r = Object.getOwnPropertyDescriptor(t, n);
                            i && r && i !== r && (this.Kt = !0,
                                this.hookInstance(t)),
                                this.Ot = !0
                        }
                    }
                    ,
                    t.prototype.diffValue = function (t, n) {
                        void 0 === n && (n = nr(t));
                        var i = ni(t);
                        if (!t || !i)
                            return !1;
                        if (ir(t)) {
                            var r = Ji(t);
                            return this.xt[r] === i != ("true" === n)
                        }
                        return this.jt[i] !== n
                    }
                    ,
                    t.prototype.onChange = function (t, n, i) {
                        void 0 === i && (i = nr(t));
                        var r = ni(t);
                        t && r && (n || this.diffValue(t, i)) && this.Pt(t, n)
                    }
                    ,
                    t.prototype.onKeyboardChange = function (t) {
                        var n, i = function (t) {
                            for (var n = t.activeElement; n && n.shadowRoot;) {
                                var i = n.shadowRoot.activeElement;
                                if (!i)
                                    return n;
                                n = i
                            }
                            return n
                        }(this.Mt);
                        i && ("value" in (n = i) || "checked" in n) && !Qn(i) && this.diffValue(i) && this.Pt(i, t)
                    }
                    ,
                    t.prototype.tick = function () {
                        for (var t in this.It) {
                            var n = this.It[t]
                                , i = n.elem;
                            if (ni(i))
                                try {
                                    delete this.It[t];
                                    var r = nr(i);
                                    if (this.diffValue(i, r))
                                        this.Pt(i);
                                    else if (n.noFsIdInOption) {
                                        var e = i;
                                        Array.prototype.slice.call(e.options).every(function (t) {
                                            return ni(t)
                                        }) && (n.noFsIdInOption = !1,
                                            this.Pt(i))
                                    }
                                } finally {
                                    this.Ct && (this.It[t] = n)
                                }
                            else
                                delete this.It[t],
                                    delete this.jt[t],
                                    ir(i) && delete this.xt[Ji(i)]
                        }
                    }
                    ,
                    t.prototype.stop = function () {
                        Bi = void 0
                    }
                    ,
                    t.prototype.Pt = function (t, n) {
                        var i = this;
                        void 0 === n && (n = !1);
                        var r = ni(t);
                        if (t && r && !this.Nt(r, t)) {
                            var e = nr(t);
                            if (ir(t)) {
                                var s = Ji(t);
                                "false" === e && this.xt[s] === r ? delete this.xt[s] : "true" === e && (this.xt[s] = r)
                            } else
                                this.jt[r] = e;
                            this.Tt.measurer.enqueue(function () {
                                var s = t.getBoundingClientRect()
                                    , o = s.width > 0 && s.height > 0
                                    , u = Yn(t) ? Wn(e) : e;
                                i.Et.enqueue({
                                    Kind: Pt.VALUECHANGE,
                                    Args: [r, u, n, o]
                                })
                            })
                        }
                    }
                    ,
                    t.prototype.Nt = function (t, n) {
                        if (this.It[t])
                            return !0;
                        if ("select" !== Un(n))
                            return !1;
                        for (var i = n.options, r = 0; r < i.length; r++)
                            if (!ni(i[r]))
                                return this.It[t] = {
                                    elem: n,
                                    noFsIdInOption: !0
                                },
                                    !0;
                        return !1
                    }
                    ,
                    t
            }(), Xi = !1, Qi = {};
            function Yi() {
                try {
                    if (Bi)
                        for (var t in Qi) {
                            var n = Qi[t]
                                , i = n[0]
                                , r = n[1];
                            Bi.onChange(i, !1, r)
                        }
                } finally {
                    Fi = null,
                        Qi = {}
                }
            }
            function Ji(t) {
                if (!t)
                    return "";
                for (var n = t; n && "form" != Un(n);)
                    n = n.parentElement;
                return (n && "form" == Un(n) ? ti(n) : 0) + ":" + (t.name || "_fs_" + ti(t))
            }
            function Zi(t, n) {
                if (void 0 === n && (n = 2),
                    n <= 0)
                    return t;
                var i = Un(t);
                return "option" != i && "optgroup" != i || !t.parentElement ? t : Zi(t.parentElement, n - 1)
            }
            function tr(t, n) {
                if (Bi) {
                    var i = Zi(t)
                        , r = ni(i);
                    r && Bi.diffValue(i, "" + n) && (Qi[r] = [i, "" + n],
                        Fi || (Fi = new Vi(Yi)).start())
                }
            }
            function nr(t) {
                if (!t)
                    return "";
                switch (t.type) {
                    case "checkbox":
                    case "radio":
                        return "" + t.checked;
                    default:
                        var n = t.value;
                        return n || (n = ""),
                            "" + n;
                }
            }
            function ir(t) {
                return t && "radio" == t.type
            }
            var rr = function () {
                function t(t, n, i) {
                    var r = this;
                    this.Lt = new WeakMap,
                        this.Ut = !1,
                        this.Ht = !1,
                        this.rt = 1,
                        this.Dt = [],
                        this.Bt = [],
                        this.Ft = Ot.wrap(function (t) {
                            var n = function (t, n) {
                                void 0 === n && (n = window);
                                var i = n.KeyframeEffect
                                    , r = t.effect;
                                return r && (void 0 === i || r instanceof i) ? r : null
                            }(t, r.Wt)
                                , i = function (t, n) {
                                    void 0 === n && (n = window);
                                    var i = n.DocumentTimeline
                                        , r = t.timeline;
                                    return r && (void 0 === i || r instanceof i) ? r : null
                                }(t, r.Wt)
                                , s = ur(t);
                            if ((null == n ? void 0 : n.target) && 0 !== ni(null == n ? void 0 : n.target) && i === r.Wt.document.timeline && s === Nt.Animation) {
                                var o = ti(n.target);
                                if (r.Lt.has(n)) {
                                    var u = r.Lt.get(n) || []
                                        , a = (c = u[0],
                                            u.slice(1));
                                    -1 === a.indexOf(o) && (r.zt(n, o),
                                        r.Lt.set(n, (0,
                                            e.__spreadArray)((0,
                                                e.__spreadArray)([c], a), [o])))
                                } else {
                                    var c = r.rt++;
                                    r.Lt.set(n, [c, o]),
                                        r.Vt.enqueue({
                                            Kind: Pt.KEYFRAME_EFFECT_CREATED,
                                            Args: [c, o, or(n), sr(n)]
                                        })
                                }
                                if (!r.Lt.has(t)) {
                                    var h = r.rt++
                                        , f = (c = r.qt(n),
                                            r.qt(i));
                                    switch (r.Lt.set(t, [h]),
                                    r.Vt.enqueue({
                                        Kind: Pt.ANIMATION_CREATED,
                                        Args: [h, ur(t), c, f]
                                    }),
                                    t.playState) {
                                        case "finished":
                                            r.Vt.enqueue({
                                                Kind: Pt.ANIMATION_METHOD_CALLED,
                                                Args: [h, ["finish", []]]
                                            });
                                            break;
                                        case "paused":
                                        case "running":
                                            r.Vt.enqueue({
                                                Kind: Pt.ANIMATION_PROPERTY_SET,
                                                Args: [h, ["currentTime", t.currentTime]]
                                            });
                                            var v = "paused" === t.playState ? "pause" : "play";
                                            r.Vt.enqueue({
                                                Kind: Pt.ANIMATION_METHOD_CALLED,
                                                Args: [h, [v, []]]
                                            });
                                    }
                                    r.C.add(t, "cancel", !0, function () {
                                        r.Vt.enqueue({
                                            Kind: Pt.ANIMATION_METHOD_CALLED,
                                            Args: [h, ["cancel", []]]
                                        })
                                    }),
                                        r.C.add(t, "finish", !0, function () {
                                            r.Vt.enqueue({
                                                Kind: Pt.ANIMATION_METHOD_CALLED,
                                                Args: [h, ["finish", []]]
                                            })
                                        })
                                }
                            }
                        }),
                        this.Vt = n,
                        this.Wt = t.window,
                        this.C = i.createChild(),
                        this.Ht = function (t) {
                            void 0 === t && (t = window);
                            var n = t.Animation
                                , i = t.Document
                                , r = t.Element;
                            return void 0 !== n && "effect" in n.prototype && "getAnimations" in i.prototype && "animate" in r.prototype
                        }(this.Wt)
                }
                return Object.defineProperty(t.prototype, "nextId", {
                    get: function () {
                        return this.rt
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                    t.prototype.snapshot = function (t) {
                        var n;
                        if (this.$t(t))
                            for (var i = 0, r = null !== (n = t.getAnimations()) && void 0 !== n ? n : []; i < r.length; i++) {
                                var e = r[i];
                                this.Ft(e)
                            }
                    }
                    ,
                    t.prototype.$t = function (t) {
                        return this.Ut && this.Ht && "getAnimations" in t
                    }
                    ,
                    t.prototype.start = function (t) {
                        var n, i = this;
                        t.CaptureAnimations && (this.Vt.enqueue({
                            Kind: Pt.REC_FEAT_SUPPORTED,
                            Args: [Qt.WebAnimation, this.Ht]
                        }),
                            this.Ht && (this.Ut = !0,
                                this.Gt(null === (n = St(this.Wt.Element.prototype, "animate")) || void 0 === n ? void 0 : n.afterSync(function (t) {
                                    i.Ft(t.result)
                                })),
                                this.Xt("play"),
                                this.Xt("pause"),
                                this.Xt("cancel"),
                                this.Xt("finish"),
                                this.Qt("updateTiming"),
                                this.Qt("setKeyframes"),
                                this.Dt.push(kt(KeyframeEffect, "target", function (t, n) {
                                    i.zt(t, ti(n))
                                }))))
                    }
                    ,
                    t.prototype.stop = function () {
                        this.C.clear(),
                            this.Ut = !1,
                            this.Bt.forEach(function (t) {
                                return t && t.disable()
                            }),
                            this.Bt = [],
                            this.Dt.forEach(function (t) {
                                return t()
                            }),
                            this.Dt = []
                    }
                    ,
                    t.prototype.zt = function (t, n) {
                        var i = this.qt(t);
                        i && this.Vt.enqueue({
                            Kind: Pt.KEYFRAME_EFFECT_PROPERTY_SET,
                            Args: [i, ["target", n]]
                        })
                    }
                    ,
                    t.prototype.qt = function (t) {
                        return (this.Lt.get(t) || [])[0]
                    }
                    ,
                    t.prototype.Gt = function (t) {
                        t && this.Bt.push(t)
                    }
                    ,
                    t.prototype.Xt = function (t) {
                        var n, i = this;
                        this.Gt(null === (n = St(Animation.prototype, t)) || void 0 === n ? void 0 : n.afterSync(function (n) {
                            var r = i.qt(n.that);
                            r && i.Vt.enqueue({
                                Kind: Pt.ANIMATION_METHOD_CALLED,
                                Args: [r, [t, []]]
                            })
                        }))
                    }
                    ,
                    t.prototype.Qt = function (t) {
                        var n, i = this;
                        this.Gt(null === (n = St(KeyframeEffect.prototype, t)) || void 0 === n ? void 0 : n.afterSync(function (n) {
                            var r, e = i.qt(n.that);
                            if (e)
                                switch (t) {
                                    case "updateTiming":
                                        var s = n.args[0];
                                        i.Vt.enqueue({
                                            Kind: Pt.KEYFRAME_EFFECT_METHOD_CALLED,
                                            Args: [e, ["updateTiming", [er(s)]]]
                                        });
                                        break;
                                    case "setKeyframes":
                                        var u = n.args[0];
                                        i.Vt.enqueue({
                                            Kind: Pt.KEYFRAME_EFFECT_METHOD_CALLED,
                                            Args: [e, ["setKeyframes", [(r = u,
                                                (o.arrayIsArray(r) ? r : [r]).map(function (t) {
                                                    var n = [];
                                                    return ot(t, function (t, i) {
                                                        n.push([i, t])
                                                    }),
                                                        [n, null, null, null]
                                                }))]]]
                                        });
                                }
                        }))
                    }
                    ,
                    t
            }();
            function er(t) {
                return [t.delay, t.direction, t.duration, t.easing, t.endDelay, t.fill, t.iterationStart, "" + t.iterations]
            }
            function sr(t) {
                var n = t.getTiming()
                    , i = t.composite
                    , r = void 0 === i ? "replace" : i
                    , s = t.iterationComposite
                    , o = void 0 === s ? "replace" : s;
                return (0,
                    e.__spreadArray)((0,
                        e.__spreadArray)([], er(n)), [r, o])
            }
            function or(t) {
                return t.getKeyframes().map(function (t) {
                    var n = t.composite
                        , i = t.easing
                        , r = t.offset
                        , e = [];
                    return ot(t, function (t, n) {
                        "composite" !== n && "computedOffset" !== n && "easing" !== n && "offset" !== n && e.push([n, t])
                    }),
                        [e, n, i, r]
                })
            }
            function ur(t) {
                return "animationName" in t ? Nt.CSSAnimation : "transitionProperty" in t ? Nt.CSSTransition : Nt.Animation
            }
            var ar = navigator.userAgent
                , cr = ar.indexOf("MSIE ") > -1 || ar.indexOf("Trident/") > -1
                , hr = (cr && ar.indexOf("Trident/5"),
                    cr && ar.indexOf("Trident/6"),
                    cr && ar.indexOf("rv:11") > -1)
                , fr = ar.indexOf("Edge/") > -1
                , vr = (ar.indexOf("CriOS"),
                    ar.indexOf("Snapchat") > -1)
                , lr = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
            function dr() {
                var t = window.navigator.userAgent.match(/Version\/(\d+)/);
                return t && t[1] ? parseInt(t[1], 10) : -1
            }
            function pr(t) {
                if (!lr)
                    return !1;
                var n = dr();
                return n >= 0 && n === t
            }
            function wr(t) {
                if (!lr)
                    return !1;
                var n = dr();
                return n >= 0 && n < t
            }
            pr(9),
                pr(10);
            var gr = wr(8);
            function yr(t, n) {
                for (var i = 0 === n.indexOf("on") ? function (t) {
                    return "on" + t + n.slice(2)
                }
                    : function (t) {
                        return "" + t + n.charAt(0).toUpperCase() + n.slice(1)
                    }
                    , r = 0, e = [function () {
                        return n
                    }
                        , function () {
                            return i("webkit")
                        }
                        , function () {
                            return i("moz")
                        }
                        , function () {
                            return i("ms")
                        }
                    ]; r < e.length; r++) {
                    var s = (0,
                        e[r])();
                    if (s in t)
                        return s
                }
                return n
            }
            function mr(t) {
                return "function" == typeof (n = t.constructor) && Function.prototype.toString.call(n).indexOf("[native code]") > -1;
                var n
            }
            wr(10),
                wr(12);
            var br, Sr, kr = "#polyfillshadow";
            function _r(t) {
                var n;
                return (null === (n = t.childNodes) || void 0 === n ? void 0 : n.length) > 0
            }
            function Ar(t, n) {
                Er(t.childNodes, n)
            }
            function Tr(t, n) {
                Er(t.childNodes, n, !0)
            }
            function Er(t, n, i) {
                void 0 === i && (i = !1);
                for (var r = i ? t.length - 1 : 0, e = i ? -1 : t.length; r !== e;) {
                    var s = t[r];
                    s && "frag" in s && !Tt(s) && Array.isArray(s.frag) ? s.frag.length && Er(s.childNodes, n, i) : n(s),
                        i ? --r : ++r
                }
            }
            function Cr(t, n, i, r) {
                var e;
                try {
                    var s = "invalid: no sanitizers";
                    if (!Rt(t.length > 0, s))
                        throw s;
                    for (var o = 0, u = t; o < u.length; o++)
                        u[o].sanitize(i)
                } catch (t) {
                    i[Sr.Attrs] = void 0,
                        i[Sr.Text] = void 0,
                        Ot.sendToBugsnag("sanitizer failed: " + t, "error", {
                            err: t
                        })
                }
                var a = i;
                if (r)
                    try {
                        r(a)
                    } catch (t) {
                        Ot.sendToBugsnag("visitorPipeline action failed: " + t, "error", {
                            err: t
                        })
                    }
                if (!(null === (e = i[Sr.Mirror].watchKind) || void 0 === e ? void 0 : e.has(Hn.Exclude)))
                    for (var c = 0, h = n; c < h.length; c++) {
                        var f = h[c];
                        try {
                            f.visit(a)
                        } catch (t) {
                            Ot.sendToBugsnag("visitor failed: " + t, "error", {
                                err: t
                            })
                        }
                    }
            }
            function Ir() {
                var t, n;
                return {
                    promise: new Ni(function (i, r) {
                        t = i,
                            n = r
                    }
                    ),
                    resolve: t,
                    reject: n
                }
            }
            function jr(t) {
                return new Ni(function (n) {
                    o.setWindowTimeout(window, Y(n), t)
                }
                )
            }
            !function (t) {
                t[t.New = 0] = "New",
                    t[t.Update = 1] = "Update"
            }(br || (br = {})),
                function (t) {
                    t[t.Context = 0] = "Context",
                        t[t.Mirror = 1] = "Mirror",
                        t[t.Attrs = 2] = "Attrs",
                        t[t.Text = 3] = "Text"
                }(Sr || (Sr = {}));
            var xr = function () {
                try {
                    var t = new MessageChannel;
                    return t.port1.start(),
                        t
                } catch (t) {
                    return null
                }
            }()
                , Or = function () {
                    return xr ? new Ni(function (t) {
                        var n = xr.port1
                            , i = xr.port2
                            , r = function () {
                                t(),
                                    n.removeEventListener("message", r)
                            };
                        n.addEventListener("message", r),
                            i.postMessage(void 0)
                    }
                    ) : jr(0)
                }
                , Kr = function () {
                    return (0,
                        e.__awaiter)(void 0, void 0, Ni, function () {
                            var t;
                            return (0,
                                e.__generator)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return (t = o.requestWindowAnimationFrame) ? [4, new Ni(function (n) {
                                                return t(window, n)
                                            }
                                            )] : [3, 2];
                                        case 1:
                                            n.sent(),
                                                n.label = 2;
                                        case 2:
                                            return [4, Or()];
                                        case 3:
                                            return n.sent(),
                                                [2];
                                    }
                                })
                        })
                };
            function Mr(t) {
                void 0 === t && (t = 16);
                var n = p() + t;
                return {
                    timeRemaining: function () {
                        return Math.max(0, n - p())
                    },
                    didTimeout: !1
                }
            }
            function Rr(t, n) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var i, r, s, o;
                        return (0,
                            e.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return (i = t.ResizeObserver) ? (r = t.document,
                                            s = r.documentElement || r.body || r.head,
                                            o = null != n ? n : s,
                                            [2, new Ni(function (t) {
                                                var n = new i(function () {
                                                    n.unobserve(o),
                                                        t()
                                                }
                                                );
                                                n.observe(o)
                                            }
                                            )]) : [4, Kr()];
                                    case 1:
                                        return e.sent(),
                                            [2];
                                }
                            })
                    })
            }
            var Pr = function () {
                function t() {
                    this.Yt = 0,
                        this.Jt = {},
                        this.Jt.next = this.Jt.prev = this.Jt
                }
                return t.prototype.first = function () {
                    return this.Jt.next.value
                }
                    ,
                    t.prototype.last = function () {
                        return this.Jt.prev.value
                    }
                    ,
                    t.prototype.size = function () {
                        return this.Yt
                    }
                    ,
                    t.prototype.push = function (t) {
                        this.Yt++,
                            Nr(this.Jt.prev, {
                                value: t
                            })
                    }
                    ,
                    t.prototype.unshift = function (t) {
                        this.Yt++,
                            Nr(this.Jt, {
                                value: t
                            })
                    }
                    ,
                    t.prototype.pop = function () {
                        return this.Yt > 0 && this.Yt--,
                            Lr(this.Jt.prev)
                    }
                    ,
                    t.prototype.shift = function () {
                        return this.Yt > 0 && this.Yt--,
                            Lr(this.Jt.next)
                    }
                    ,
                    t
            }();
            function Nr(t, n) {
                var i = t.next;
                n.next = i,
                    n.prev = t,
                    t.next = i.prev = n
            }
            function Lr(t) {
                var n = t.prev
                    , i = t.next;
                return n.next = i,
                    i.prev = n,
                    t.value
            }
            var Ur, Hr = {
                timeRemaining: function () {
                    return 1
                },
                didTimeout: !1
            };
            !function (t) {
                t[t.Idle = 0] = "Idle",
                    t[t.Scheduled = 1] = "Scheduled",
                    t[t.Processing = 2] = "Processing"
            }(Ur || (Ur = {}));
            var Dr = function () {
                function t() {
                    this.rt = 1,
                        this.Zt = Ur.Idle,
                        this.tn = new Pr,
                        this.nn = {},
                        this.rn = 1
                }
                return t.prototype.enqueue = function (t, n) {
                    var i = this;
                    if (void 0 === n && (n = !1),
                        !(this.Zt === Ur.Processing && this.rn > 16)) {
                        var r = {
                            id: this.rt++,
                            isCompleted: !1,
                            process: t,
                            depth: this.rn
                        };
                        return this.tn.push(r),
                            this.en(),
                            n ? function () {
                                return i.sn(r)
                            }
                                : void 0
                    }
                    Ft("recursive", "deep recursive task found")
                }
                    ,
                    t.prototype.sn = function (t) {
                        try {
                            var n = t.id
                                , i = this.nn[n];
                            return i ? (delete this.nn[n],
                                [i.result, i.err]) : (Br(Hr, t),
                                    Rt(t.isCompleted, "failed to complete task"),
                                    [t.result, t.err])
                        } finally {
                            t.result = void 0,
                                t.err = void 0
                        }
                    }
                    ,
                    t.prototype.flush = function () {
                        this.on(Hr)
                    }
                    ,
                    t.prototype.en = function () {
                        this.Zt === Ur.Idle && (this.Zt = Ur.Scheduled,
                            this.un())
                    }
                    ,
                    t.prototype.on = function (t) {
                        if (this.Zt === Ur.Scheduled) {
                            var n = 0;
                            this.Zt = Ur.Processing;
                            for (var i = this.tn.first(); (n < 8 || t.timeRemaining() > 0) && i;)
                                this.rn = i.depth + 1,
                                    Br(t, i),
                                    i.isCompleted && (this.tn.shift(),
                                        void 0 === i.result && void 0 === i.err || (this.nn[i.id] = i)),
                                    i = this.tn.first(),
                                    n++;
                            this.Zt = Ur.Idle,
                                this.rn = 1,
                                this.tn.size() > 0 && this.en()
                        }
                    }
                    ,
                    t
            }();
            function Br(t, n) {
                if (!n.isCompleted)
                    try {
                        var i = n.process(t) || {
                            done: !0
                        };
                        i.done && (n.isCompleted = !0,
                            n.result = i.result)
                    } catch (t) {
                        n.isCompleted = !0,
                            n.err = t
                    }
            }
            var Fr, Wr = function (t) {
                function n() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return (0,
                    e.__extends)(n, t),
                    n.prototype.un = function () {
                        var t = this;
                        Or().then(function () {
                            t.on(Mr(12))
                        })
                    }
                    ,
                    n
            }(Dr), zr = {
                INPUT: !0,
                TEXTAREA: !0,
                NOSCRIPT: !0
            }, Vr = function () {
                function t(t, n, i) {
                    this.an = t,
                        this.cn = n,
                        this.hn = i,
                        $n = {},
                        Gn = 1,
                        Fr = new WeakMap,
                        this.tn = new Wr
                }
                return t.prototype.tokenizeNode = function (t, n, i, r, e, s, o) {
                    var u = this
                        , a = Jn(n)
                        , c = Jn(i)
                        , h = [];
                    return function (n) {
                        var i = Gn;
                        try {
                            return u.vn(t, a, c, r, h, e, s, o),
                                !0
                        } catch (t) {
                            return Gn = i,
                                !1
                        }
                    }() || (h = []),
                        h
                }
                    ,
                    t.prototype.vn = function (t, n, i, r, s, o, u, a) {
                        for (var c, h, f = [{
                            parentMirror: n,
                            nextMirror: i,
                            node: r
                        }], v = function (t, n) {
                            return function (i) {
                                i && t.push({
                                    parentMirror: n,
                                    nextMirror: null,
                                    node: i
                                })
                            }
                        }; f.length;) {
                            var l = f.pop();
                            if (l)
                                if ("string" != typeof l) {
                                    var d = l.node
                                        , p = this.ln(t, l, s, o, u);
                                    if (null != p && !(null === (c = p.watchKind) || void 0 === c ? void 0 : c.has(Hn.Exclude))) {
                                        var w = 1 === p.type ? d.shadowRoot : null
                                            , g = p.shadowRootType === kr && window.HTMLSlotElement && "slot" === p.tag && d.assignedNodes();
                                        if (w || g || _r(d))
                                            if (null === (h = p.watchKind) || void 0 === h ? void 0 : h.has(Hn.Defer))
                                                a(p.node, Dn.Deferred);
                                            else {
                                                if (f.push("]"),
                                                    Tr(d, v(f, p)),
                                                    w)
                                                    f.push({
                                                        parentMirror: p,
                                                        nextMirror: null,
                                                        node: w
                                                    });
                                                else if (g && g.length > 0) {
                                                    for (var y = [], m = !1, b = 0, S = g; b < S.length; b++) {
                                                        var k = ti(S[b]);
                                                        if (!k) {
                                                            m = !0;
                                                            break
                                                        }
                                                        var _ = "<$" + k;
                                                        y.unshift(_)
                                                    }
                                                    m ? Fr.get(d) || (Fr.set(d, !0),
                                                        a(d, Dn.Immediate)) : f.push.apply(f, (0,
                                                            e.__spreadArray)((0,
                                                                e.__spreadArray)(["]"], y), ["[", "<#assigned-nodes"]))
                                                }
                                                f.push("[")
                                            }
                                    }
                                } else
                                    "<" === l[0] && ++Gn,
                                        s.push(l)
                        }
                    }
                    ,
                    t.prototype.ln = function (t, n, i, r, e) {
                        var s, o, u, a, c = n.node, h = n.parentMirror, f = n.nextMirror, v = Un(c), l = c.nodeName, d = c.nodeType;
                        if ("script" === v || 8 === d)
                            return null;
                        var p, w, g, y, m, b = function (t) {
                            if (t.constructor === window.ShadowRoot)
                                return mr(t) ? "#shadow" : kr
                        }(c), S = function (t, n, i, r) {
                            void 0 === n && (n = t.nodeName),
                                void 0 === i && (i = t.nodeType),
                                void 0 === r && (r = Un(t));
                            var e = {
                                id: Gn++,
                                node: t,
                                name: n,
                                type: i,
                                tag: r
                            };
                            return $n[e.id] = e,
                                t._fs = e.id,
                                e
                        }(c, l, d, v);
                        S.shadowRootType = b || (null == h ? void 0 : h.shadowRootType),
                            h && (b ? (h.shadow = S,
                                S.parent = h) : (p = h,
                                    g = f,
                                    ii(w = S, this.cn),
                                    w.parent = p,
                                    w.next = g,
                                    g && (w.prev = g.prev,
                                        g.prev = w),
                                    null == w.next ? (w.prev = p.lastChild,
                                        p.lastChild = w) : w.next.prev = w,
                                    null == w.prev ? p.child = w : w.prev.next = w)),
                            S.mask = null === (s = S.parent) || void 0 === s ? void 0 : s.mask;
                        try {
                            switch (d) {
                                case 3:
                                    void 0 === S.mask && (S.mask = !S.parent || S.parent.mask),
                                        S.mask && this.cn.observe(c.parentElement),
                                        m = null !== (o = c.textContent) && void 0 !== o ? o : "";
                                    break;
                                case 1:
                                    var k = c
                                        , _ = this.getWatchState(k, l, !!S.shadowRootType, t);
                                    if (null != _) {
                                        S.watchKind = _;
                                        var A = !1;
                                        _.has(Hn.Watch) && (A = !0,
                                            null === (u = this.hn) || void 0 === u || u.observe(k)),
                                            _.has(Hn.Unmask) && (S.mask = !1),
                                            _.has(Hn.Mask) && (S.mask = !0),
                                            (_.has(Hn.Exclude) || _.has(Hn.Defer)) && (A = !0),
                                            A && this.cn.observe(k)
                                    }
                                    y = function (t, n) {
                                        var i, r, e;
                                        if (!fr || "output" !== n) {
                                            var s = {};
                                            try {
                                                if (t.hasAttributes())
                                                    if (void 0 !== t.getAttributeNames)
                                                        for (var o = 0, u = null !== (i = t.getAttributeNames()) && void 0 !== i ? i : []; o < u.length; o++) {
                                                            var a = u[o];
                                                            null != a && null != (f = t.getAttribute(a)) && (s[a] = "" + f)
                                                        }
                                                    else
                                                        for (var c = null !== (e = null === (r = t.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== e ? e : 0, h = 0; h < c; h++) {
                                                            var f, v = t.attributes[h];
                                                            null != v && null != (f = v.value) && (s[v.name] = "" + f)
                                                        }
                                            } catch (t) {
                                                Ot.sendToBugsnag("get attrs failed: " + t, "error", {
                                                    err: t
                                                })
                                            }
                                            return s
                                        }
                                    }(k, v);
                            }
                        } catch (t) {
                            Ot.sendToBugsnag(t, "error")
                        }
                        if (!(null === (a = S.watchKind) || void 0 === a ? void 0 : a.has(Hn.Exclude)))
                            for (var T = 0, E = e; T < E.length; T++) {
                                var C = E[T];
                                try {
                                    C.preVisit && C.preVisit(S)
                                } catch (t) {
                                    Ot.sendToBugsnag("per-visitor failed: " + t, "error", {
                                        err: t
                                    })
                                }
                            }
                        var I = [br.New, S, y, m]
                            , j = this.tn.enqueue(function (t) {
                                var n = [];
                                return Cr(r, e, I, function (t) {
                                    !function (t, n) {
                                        var i = n[1]
                                            , r = n[2]
                                            , e = n[3]
                                            , s = i.shadowRootType
                                            , o = i.node
                                            , u = i.watchKind
                                            , a = i.name;
                                        switch (i.type) {
                                            default:
                                                t.push("<" + a);
                                                break;
                                            case 10:
                                                var c = o;
                                                t.push("<!DOCTYPE", ":name", c.name, ":publicId", c.publicId || "", ":systemId", c.systemId || "");
                                                break;
                                            case 11:
                                            case 9:
                                                var h = void 0;
                                                h = s || a,
                                                    t.push("<" + h);
                                                break;
                                            case 3:
                                                t.push("<" + a, null != e ? e : "");
                                                break;
                                            case 1:
                                                if (h = a,
                                                    "http://www.w3.org/2000/svg" === o.namespaceURI && (h = "svg:" + h),
                                                    t.push("<" + h),
                                                    u && (u.has(Hn.Exclude) && t.push(":_fs_excluded", "true"),
                                                        u.has(Hn.Defer) && t.push(":_fs_deferred", "true")),
                                                    i.mask && t.push(":_fs_masked", "true"),
                                                    r)
                                                    for (var f in r)
                                                        t.push(":" + f),
                                                            t.push(r[f]);
                                        }
                                    }(n, t)
                                }),
                                {
                                    done: !0,
                                    result: n
                                }
                            }, !0);
                        return Rt("function" == typeof j, "failed to queue visitor"),
                            j && i.push(function () {
                                var t = j();
                                return t && t[0] || []
                            }),
                            S
                    }
                    ,
                    t.prototype.getWatchState = function (t, n, i, r) {
                        return i || null == r || zr[n] ? this.an.isWatched(t) : r.get(t)
                    }
                    ,
                    t
            }(), qr = JSON.parse("[{\"Selector\":\"input[type=password]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"input[type=hidden]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"[autocomplete^=cc-]\",\"Consent\":false,\"Type\":1},{\"Selector\":\"object:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"embed:not([type^=\\\"image/\\\"])\",\"Consent\":false,\"Type\":1},{\"Selector\":\"noscript\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-hide\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-exclude-without-consent\",\"Consent\":true,\"Type\":1},{\"Selector\":\".fs-mask\",\"Consent\":false,\"Type\":2},{\"Selector\":\".fs-mask-without-consent\",\"Consent\":true,\"Type\":2},{\"Selector\":\".fs-unmask\",\"Consent\":false,\"Type\":3},{\"Selector\":\".fs-unmask-with-consent\",\"Consent\":true,\"Type\":3},{\"Selector\":\".fs-block\",\"Consent\":false,\"Type\":1},{\"Selector\":\".fs-record-with-consent\",\"Consent\":true,\"Type\":1}]"), $r = function (t, n) {
                return t | n
            }, Gr = Vn.reduce($r, 0), Xr = zn.reduce($r, 0), Qr = function () {
                function t(t) {
                    void 0 === t && (t = 0),
                        this.dn = t
                }
                return t.prototype.has = function (t) {
                    return !!(this.dn & t)
                }
                    ,
                    t.prototype.set = function (n) {
                        if (this.dn & Xr && n & Xr) {
                            var i = this.dn | n
                                , r = t.pn(i);
                            this.dn = t.wn(r, this.dn)
                        } else
                            this.dn |= n
                    }
                    ,
                    t.prototype.hasKinds = function () {
                        return 0 !== this.dn
                    }
                    ,
                    t.areEqual = function (t, n) {
                        return null == t && null == n || null != t && null != n && t.equals(n)
                    }
                    ,
                    t.prototype.getStrictestPrivacyKind = function () {
                        return t.pn(this.dn)
                    }
                    ,
                    t.pn = function (t) {
                        for (var n = 0, i = zn; n < i.length; n++) {
                            var r = i[n];
                            if (t & r)
                                return r
                        }
                        return null
                    }
                    ,
                    t.needsToObserve = function (t, n) {
                        var i, r, e = null !== (i = null == t ? void 0 : t.dn) && void 0 !== i ? i : 0;
                        return !!((null !== (r = null == n ? void 0 : n.dn) && void 0 !== r ? r : 0) & ~e & Gr)
                    }
                    ,
                    t.combineKindsPreservePrivacy = function (n, i) {
                        var r, e, s = t.wn(null !== (r = null == n ? void 0 : n.dn) && void 0 !== r ? r : 0, null !== (e = null == i ? void 0 : i.dn) && void 0 !== e ? e : 0);
                        return new t(s)
                    }
                    ,
                    t.wn = function (t, n) {
                        return t & Xr | n & Gr
                    }
                    ,
                    t.prototype.equals = function (t) {
                        return !!t && this.dn === t.dn
                    }
                    ,
                    t
            }(), Yr = i(496);
            function Jr(t) {
                var n = document.documentElement || document.createElement("div");
                try {
                    return o.elMatches(n, t),
                        !0
                } catch (n) {
                    return Ot.sendToBugsnag("Browser rejected rule", "warning", {
                        selector: t,
                        error: n.toString()
                    }),
                        !1
                }
            }
            var Zr = {
                1: "exclude",
                2: "mask",
                3: "unmask",
                4: "watch",
                5: "keep",
                6: "defer"
            }
                , te = function () {
                    function t() {
                        this.gn = ne(),
                            this.yn = ne()
                    }
                    return t.prototype.forConsentState = function (t) {
                        return t ? this.gn : this.yn
                    }
                        ,
                        t.prototype.addElementBlockRules = function (t) {
                            var n = this
                                , i = ne()
                                , r = ne();
                            t.map(re).filter(function (t) {
                                return ie(t.selector)
                            }).forEach(function (t) {
                                if (t.consent)
                                    return t.kind === Hn.Unmask ? void i[t.kind].push(t) : void r[t.kind].push(t);
                                i[t.kind].push(t),
                                    r[t.kind].push(t)
                            });
                            for (var e = document.documentElement || document.createElement("div"), s = function (t, i) {
                                try {
                                    if (0 === t.length)
                                        return;
                                    var r = t.map(function (t) {
                                        return t.selector
                                    }).join(", ");
                                    o.elMatches(e, r),
                                        i.push(r)
                                } catch (i) {
                                    Ot.sendToBugsnag("Browser rejected optimistic merge rule", "warning"),
                                        n.Ct(t)
                                }
                            }, u = 0, a = qn; u < a.length; u++) {
                                var c = a[u];
                                s(i[c], this.gn[c]),
                                    s(r[c], this.yn[c])
                            }
                        }
                        ,
                        t.prototype.addRule = function (t, n, i) {
                            if (this.mn(t, n, i))
                                return !0;
                            switch (t) {
                                case Hn.Watch:
                                case Hn.Unmask:
                                case Hn.Keep:
                                case Hn.Defer:
                                    break;
                                case Hn.Mask:
                                case Hn.Exclude:
                                default:
                                    this.gn[t] = ["*"],
                                        this.yn[t] = ["*"];
                            }
                            return !1
                        }
                        ,
                        t.prototype.mn = function (t, n, i) {
                            try {
                                if (ie(i)) {
                                    if (n) {
                                        var r = this.bn(t);
                                        return this.Sn(t, r, i)
                                    }
                                    return this.Sn(t, this.yn, i) && this.Sn(t, this.gn, i)
                                }
                                return !0
                            } catch (t) {
                                return Ot.sendToBugsnag("Error adding block rule", "error", {
                                    selector: i,
                                    error: t.toString()
                                }),
                                    !1
                            }
                        }
                        ,
                        t.prototype.Sn = function (t, n, i) {
                            var r = document.documentElement || document.createElement("div")
                                , e = t;
                            switch (e) {
                                case Hn.Exclude:
                                case Hn.Mask:
                                case Hn.Unmask:
                                case Hn.Watch:
                                case Hn.Keep:
                                case Hn.Defer:
                                    break;
                                default:
                                    e = Hn.Exclude;
                            }
                            if (0 == n[e].length)
                                return !!Jr(i) && (n[e].push(i),
                                    !0);
                            var s = n[e].length - 1
                                , u = n[e][s].concat(", ", i);
                            try {
                                o.elMatches(r, u)
                            } catch (t) {
                                return !!Jr(i) && (n[e].push(i),
                                    Ot.sendToBugsnag("Browser rejected merged rule", "warning", {
                                        kind: Zr[e],
                                        selector: i,
                                        error: t.toString()
                                    }),
                                    !0)
                            }
                            return n[e][s] = u,
                                !0
                        }
                        ,
                        t.prototype.addElementBlock = function (t) {
                            var n = re(t)
                                , i = n.kind
                                , r = n.consent
                                , e = n.selector;
                            return this.addRule(i, r, e)
                        }
                        ,
                        t.prototype.Ct = function (t) {
                            for (var n = 0, i = t; n < i.length; n++) {
                                var r = i[n]
                                    , e = r.kind
                                    , s = r.consent
                                    , o = r.selector;
                                this.addRule(e, s, o)
                            }
                        }
                        ,
                        t.prototype.bn = function (t) {
                            var n = t === Hn.Unmask;
                            return this.forConsentState(n)
                        }
                        ,
                        t
                }();
            function ne() {
                for (var t = Object.create ? Object.create(null) : {}, n = 0, i = qn; n < i.length; n++)
                    t[i[n]] = [];
                return t
            }
            function ie(t) {
                return !t.match(On) && "" != t.trim()
            }
            function re(t) {
                var n = Hn.Exclude;
                switch (t.Type) {
                    case an.Unset:
                    case an.Exclude:
                        n = Hn.Exclude;
                        break;
                    case an.Mask:
                        n = Hn.Mask;
                        break;
                    case an.Unmask:
                        n = Hn.Unmask;
                        break;
                    case an.Watch:
                        n = Hn.Watch;
                        break;
                    case an.Keep:
                        n = Hn.Keep;
                        break;
                    case an.Defer:
                        n = Hn.Defer;
                        break;
                    default:
                        (0,
                            Yr.nt)(t.Type, "Unexpected block type: " + t.Type);
                }
                return {
                    kind: n,
                    consent: t.Consent,
                    selector: t.Selector
                }
            }
            function ee(t) {
                if (!(null == t ? void 0 : t.hasKinds()))
                    return 0;
                var n = t.getStrictestPrivacyKind();
                return null === n ? 0 : zn.length - zn.indexOf(n)
            }
            var se = function () {
                function t() {
                    this.kn = new te,
                        this._n = !vr
                }
                return t.prototype.initialize = function (t) {
                    var n = t.blocks
                        , i = t.deferreds
                        , r = t.keeps
                        , s = t.watches
                        , o = t.canvasWatcherMode
                        , u = (0,
                            e.__spreadArray)([], qr);
                    if (n)
                        for (var a = 0, c = n; a < c.length; a++) {
                            var h = c[a];
                            u.push(h)
                        }
                    if ((null != o ? o : gn.Disabled) === gn.Disabled && u.push({
                        Consent: !1,
                        Selector: "canvas",
                        Type: an.Exclude
                    }),
                        s)
                        for (var f = 0, v = s; f < v.length; f++) {
                            var l = v[f];
                            u.push({
                                Type: an.Watch,
                                Consent: zt.RevokeConsent,
                                Selector: l.Selector
                            })
                        }
                    if (i)
                        for (var d = 0, p = i; d < p.length; d++) {
                            var w = p[d];
                            u.push({
                                Type: an.Defer,
                                Consent: zt.RevokeConsent,
                                Selector: w.Selector
                            })
                        }
                    if (this.kn.addElementBlockRules(u),
                        r)
                        for (var g = 0, y = r; g < y.length; g++) {
                            var m = y[g];
                            this.addElementKeep(m)
                        }
                }
                    ,
                    t.prototype.isWatched = function (t) {
                        var n, i = new Qr, r = this.kn.forConsentState(null !== (n = this.An) && void 0 !== n && n), e = this.Tn(t, zn, r) | this.En(t, Vn, r);
                        return i.set(e),
                            i.hasKinds() ? i : null
                    }
                    ,
                    t.prototype.Tn = function (t, n, i) {
                        return this.En(t, n, i, !0)
                    }
                    ,
                    t.prototype.En = function (t, n, i, r) {
                        void 0 === r && (r = !1);
                        for (var e = 0, s = 0, u = n; s < u.length; s++) {
                            for (var a = u[s], c = !1, h = 0, f = i[a]; h < f.length; h++) {
                                var v = f[h];
                                if (o.elMatches(t, v)) {
                                    e |= a,
                                        c = !0;
                                    break
                                }
                            }
                            if (c && r)
                                break
                        }
                        return e
                    }
                    ,
                    t.prototype.addElementBlock = function (t) {
                        return this.kn.addElementBlock(t)
                    }
                    ,
                    t.prototype.addElementKeep = function (t) {
                        var n = Hn.Keep;
                        return t.Type === cn.Click && this.Cn(n, t.Consent, t.Selector)
                    }
                    ,
                    t.prototype.Cn = function (t, n, i) {
                        return this.kn.addRule(t, n, i)
                    }
                    ,
                    t.prototype.getConsent = function () {
                        return this.An
                    }
                    ,
                    t.prototype.initializeConsent = function (t) {
                        void 0 === this.An && this.In(t, !1)
                    }
                    ,
                    t.prototype.setConsent = function (t) {
                        this.In(t, !0)
                    }
                    ,
                    t.prototype.In = function (t, n) {
                        void 0 === n && (n = !0),
                            this.An !== t && (this.An = t,
                                n && this.onConsentChange && this.onConsentChange())
                    }
                    ,
                    t.prototype.allWatchedElements = function (t) {
                        var n;
                        if (!this._n)
                            return null;
                        for (var i = new WeakMap, r = !1, e = function (t, n) {
                            var e, s = null !== (e = i.get(t)) && void 0 !== e ? e : new Qr;
                            s.set(n),
                                i.set(t, s),
                                r = !0
                        }, s = this.kn.forConsentState(null !== (n = this.An) && void 0 !== n && n), u = 0, a = qn; u < a.length; u++)
                            for (var c = a[u], h = 0, f = s[c]; h < f.length; h++) {
                                var v = f[h];
                                ue(t) && o.elMatches(t, v) && e(t, c);
                                for (var l = oe(t, v), d = 0; d < l.length; d++)
                                    e(l[d], c)
                            }
                        return r ? i : null
                    }
                    ,
                    t
            }();
            function oe(t, n) {
                return ue(t) ? o.elQuerySelectorAll(t, n) : function (t) {
                    return 9 === t.nodeType
                }(t) ? o.docQuerySelectorAll(t, n) : function (t) {
                    return 11 === t.nodeType
                }(t) ? o.docFragQuerySelectorAll(t, n) : t.querySelectorAll(n)
            }
            function ue(t) {
                return 1 === t.nodeType
            }
            var ae = function () {
                function t(t) {
                    this.Tt = t,
                        this.jn = {},
                        this.xn = {}
                }
                return t.create = function (t) {
                    return ce.isSupported(t.window) ? new ce(t) : new he(t)
                }
                    ,
                    t.prototype.collect = function (t) {
                        var n = [];
                        for (var i in this.xn)
                            this.On(t, n, parseInt(i, 10));
                        return this.xn = {},
                            n
                    }
                    ,
                    t.prototype.isObserved = function (t) {
                        return !!this.jn[t]
                    }
                    ,
                    t.prototype.Kn = function (t, n) {
                        if (1 !== (null == t ? void 0 : t.nodeType))
                            return {
                                width: 0,
                                height: 0
                            };
                        if (!n || o.arrayIsArray(n) && 0 === n.length)
                            return t.getBoundingClientRect();
                        var i = Array.isArray(n) ? n[0] : n;
                        switch (getComputedStyle(t).writingMode) {
                            case "horizontal-tb":
                                return {
                                    width: i.inlineSize,
                                    height: i.blockSize
                                };
                            case "vertical-lr":
                            case "vertical-rl":
                                return {
                                    width: i.blockSize,
                                    height: i.inlineSize
                                };
                            default:
                                return t.getBoundingClientRect();
                        }
                    }
                    ,
                    t.prototype.Mn = function (t, n) {
                        try {
                            var i = ti(t);
                            if (!i)
                                return;
                            if (1 != t.nodeType)
                                return;
                            var r = t
                                , e = this.Kn(r, n);
                            this.xn[i] = e;
                            var s = this.Tt.queue();
                            if (!this.jn[i] && void 0 !== s)
                                for (var o = this.Rn(i), u = 0, a = o; u < a.length; u++) {
                                    var c = a[u];
                                    s.enqueue(c)
                                }
                        } catch (t) { }
                    }
                    ,
                    t.prototype.On = function (t, n, i) {
                        for (var r = 0, s = this.Rn(i); r < s.length; r++) {
                            var o = s[r];
                            n.push((0,
                                e.__assign)((0,
                                    e.__assign)({}, o), {
                                    When: t
                                }))
                        }
                    }
                    ,
                    t.prototype.Rn = function (t) {
                        var n = this.xn[t];
                        if (!n)
                            return [];
                        var i = Zn(t);
                        if (!i)
                            return [];
                        var r = i.watchKind
                            , e = n.width
                            , s = n.height
                            , o = this.jn[t];
                        if (o && o.w == e && o.h == s)
                            return [];
                        this.jn[t] = {
                            w: e,
                            h: s
                        };
                        var u = [];
                        if (null == r ? void 0 : r.has(Hn.Watch)) {
                            var a = 0 != e && 0 != s;
                            (!!o && 0 != o.w && 0 != o.h) != a && u.push({
                                Kind: Pt.WATCHED_ELEM,
                                Args: [t, a]
                            })
                        }
                        var c = i.node
                            , h = ("scrollLeft" in c);
                        return ((null == r ? void 0 : r.has(Hn.Exclude)) || (null == r ? void 0 : r.has(Hn.Defer)) || i.mask || h) && (u.push({
                            Kind: Pt.PLACEHOLDER_SIZE,
                            Args: [t, e, s]
                        }),
                            h && u.push({
                                Kind: Pt.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                Args: [t, c.scrollWidth, c.scrollHeight]
                            })),
                            u
                    }
                    ,
                    t
            }()
                , ce = function (t) {
                    function n(n) {
                        var i = t.call(this, n) || this;
                        return i.Pn = new WeakMap,
                            i.Nn = new WeakMap,
                            i.Ln = new n.window.ResizeObserver(function (t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var e = r[n]
                                        , s = e.target
                                        , o = e.borderBoxSize;
                                    i.Mn(s, o)
                                }
                            }
                            ),
                            i.Un = new n.window.ResizeObserver(function (t) {
                                for (var n = 0, r = t; n < r.length; n++) {
                                    var e = r[n].target;
                                    i.Hn(e)
                                }
                            }
                            ),
                            i
                    }
                    return (0,
                        e.__extends)(n, t),
                        n.isSupported = function (t) {
                            return "function" == typeof t.ResizeObserver
                        }
                        ,
                        n.prototype.observe = function (t) {
                            var n = this;
                            if (t && 1 == t.nodeType) {
                                var i = t;
                                this.Ln.unobserve(i),
                                    this.Ln.observe(i),
                                    this.Tt.measurer.enqueue(function () {
                                        n.Dn(i)
                                    })
                            }
                        }
                        ,
                        n.prototype.unobserveSubtree = function (t) { }
                        ,
                        n.prototype.nodeChanged = function (t) {
                            var n = this
                                , i = this.Nn.get(t);
                            "number" == typeof i && ti(t) === i && this.Tt.measurer.enqueue(function () {
                                n.Mn(t)
                            })
                        }
                        ,
                        n.prototype.Hn = function (t) {
                            var n = this.Pn.get(t);
                            if (n)
                                for (var i in n) {
                                    var r = Zn(n[i]);
                                    r ? this.Mn(r.node) : delete n[i]
                                }
                        }
                        ,
                        n.prototype.Dn = function (t) {
                            var n = this
                                , i = ti(t);
                            if (i) {
                                var r = this.Bn(t);
                                if (r && r !== t) {
                                    this.Nn.set(t, i),
                                        this.Mn(t);
                                    var e = this.Pn.get(r);
                                    e || (e = Object.create(null),
                                        this.Pn.set(r, e)),
                                        e[i] = i,
                                        o.setWindowTimeout(this.Tt.window, Y(function () {
                                            n.Un.observe(r)
                                        }), 0)
                                }
                            }
                        }
                        ,
                        n.prototype.Bn = function (t) {
                            for (var n = 0, i = t; ;) {
                                if (n++ > 1e3)
                                    return null;
                                if (!i || 1 != i.nodeType)
                                    return null;
                                var r = i;
                                if (getComputedStyle(r).display.indexOf("inline") < 0)
                                    return r;
                                i = i.parentNode
                            }
                        }
                        ,
                        n
                }(ae)
                , he = function (t) {
                    function n() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return (0,
                        e.__extends)(n, t),
                        n.prototype.observe = function (t) {
                            var n = this;
                            if (t && 1 == t.nodeType) {
                                var i = t;
                                this.Fn(Jn(t)),
                                    this.Tt.measurer.enqueue(function () {
                                        n.Mn(i)
                                    })
                            }
                        }
                        ,
                        n.prototype.unobserveSubtree = function (t) {
                            var n = Jn(t);
                            n && this.Wn(n)
                        }
                        ,
                        n.prototype.nodeChanged = function (t) {
                            var n = this
                                , i = this.zn(t);
                            this.Tt.measurer.enqueue(function () {
                                for (var t = 0, r = i; t < r.length; t++) {
                                    var e = r[t];
                                    n.Mn(e)
                                }
                            })
                        }
                        ,
                        n.prototype.watchedChildren = function (t) {
                            return t.watchedChildren
                        }
                        ,
                        n.prototype.Fn = function (t) {
                            if (t && Xn(t.node))
                                for (var n = t, i = t.parent; i; i = i.parent) {
                                    if (this.watchedChildren(i) || (i.watchedChildren = {}),
                                        this.watchedChildren(n))
                                        for (var r in this.watchedChildren(n))
                                            delete this.watchedChildren(i)[r];
                                    if (this.watchedChildren(i)[n.id] = n,
                                        at(this.watchedChildren(i), 2))
                                        n = i;
                                    else if (ct(this.watchedChildren(i), 2))
                                        break
                                }
                        }
                        ,
                        n.prototype.zn = function (t) {
                            var n = []
                                , i = Jn(t);
                            if (i)
                                for (var r = [i], e = 0; r.length && ++e < 1e3;) {
                                    var s = r.pop();
                                    Xn(s.node) && n.push(s.node),
                                        this.watchedChildren(s) && ot(this.watchedChildren(s), function (t) {
                                            r.push(t)
                                        })
                                }
                            else {
                                for (var o = t; o && !ti(o);)
                                    o = o.parentNode;
                                o && Xn(o) && n.push(o)
                            }
                            return n
                        }
                        ,
                        n.prototype.Wn = function (t) {
                            if (ct(this.watchedChildren(t), 0) || Xn(t.node))
                                for (var n = this.watchedChildren(t) && ct(this.watchedChildren(t), 1) || Xn(t.node) ? t.id : function (t) {
                                    for (var n in t)
                                        if (Object.prototype.hasOwnProperty.call(t, n))
                                            return n
                                }(this.watchedChildren(t)), i = n ? t.parent : null; i && this.watchedChildren(i) && this.watchedChildren(i)[n];) {
                                    if (delete this.watchedChildren(i)[n],
                                        at(this.watchedChildren(i), 1)) {
                                        var r = i.id
                                            , e = ut(this.watchedChildren(i));
                                        for (i = i.parent; i && this.watchedChildren(i) && this.watchedChildren(i)[r];)
                                            delete this.watchedChildren(i)[r],
                                                this.watchedChildren(i)[e.id] = e,
                                                i = i.parent;
                                        break
                                    }
                                    i = i.parent
                                }
                        }
                        ,
                        n
                }(ae)
                , fe = function (t) {
                    for (var n = [], i = 0, r = t; i < r.length; i++) {
                        var e = r[i]
                            , s = {
                                Exclude: ve(e.Exclude)
                            };
                        if (e.If) {
                            s.If = [];
                            for (var o = 0, u = e.If; o < u.length; o++) {
                                var a = u[o];
                                s.If.push(ve(a, !0))
                            }
                        }
                        n.push(s)
                    }
                    return n
                };
            function ve(t, n) {
                return void 0 === n && (n = !1),
                {
                    Hash: le(t.Hash, n),
                    Host: le(t.Host, n),
                    Path: le(t.Path, n),
                    QueryParam: le(t.QueryParam, n),
                    Query: le(t.Query, n)
                }
            }
            function le(t, n) {
                return t ? n ? [new RegExp(t.map(function (t) {
                    return t.Expression
                }).join("|"), "ig")] : t.map(function (t) {
                    return new RegExp(t.Expression, "ig")
                }) : []
            }
            var de = "--blocked--"
                , pe = function (t, n, i, r) {
                    if (void 0 === i && (i = de),
                        !n || 0 === t.length)
                        return n;
                    for (var e = [], s = 0, o = t; s < o.length; s++)
                        for (var u = o[s], a = 0, c = we(u, n, r); a < c.length; a++) {
                            var h = c[a];
                            e.push(h)
                        }
                    if (0 === e.length)
                        return n;
                    for (var f = "", v = 0, l = 0, d = e = ge(e); l < d.length; l++) {
                        var p = d[l]
                            , w = p[0]
                            , g = p[1];
                        f += "" + n.substring(v, w) + i,
                            v = g
                    }
                    return f + n.slice(v)
                }
                , we = function (t, n, i) {
                    var r, e = [];
                    for (t.lastIndex = 0; null !== (r = t.exec(n));)
                        if (r) {
                            if ("" === r[0])
                                return ".*" !== t.source && i && i("detected possible infinite loop when matching zero-length characters", {
                                    re: t.source
                                }),
                                    [[0, n.length]];
                            if (1 !== r.length)
                                for (var s = r.index, o = 0, u = 1; u < r.length; u++) {
                                    var a = r[u];
                                    if (a && 0 !== a.length)
                                        if (u % 2 != 1) {
                                            var c = s + o
                                                , h = c + a.length;
                                            e.push([c, h]),
                                                o += a.length
                                        } else
                                            o += a.length
                                }
                            else
                                e.push([r.index, t.lastIndex])
                        }
                    return e
                }
                , ge = function (t) {
                    if (t.length <= 1)
                        return t;
                    t.sort(function (t, n) {
                        return t[0] - n[0]
                    });
                    for (var n = [], i = t[0], r = 1; r < t.length; r++) {
                        var e = t[r];
                        i[1] <= e[0] ? (n.push(i),
                            i = e) : i[1] < e[1] && (i[1] = e[1])
                    }
                    return n.push(i),
                        n
                }
                , ye = function (t, n) {
                    if (0 === t.length || !n)
                        return !0;
                    for (var i = 0, r = n.split("?"); i < r.length; i++)
                        for (var e = 0, s = r[i].replace("?", "").split("&"); e < s.length; e++) {
                            var o = s[e];
                            if (be(t, o))
                                return !0
                        }
                    return !1
                }
                , me = function (t, n) {
                    if (!t)
                        return !0;
                    for (var i = ke(n.pathname), r = 0, e = t; r < e.length; r++) {
                        var s = e[r];
                        if (be(s.Hash, n.hash) && be(s.Host, n.host) && be(s.Path, i) && ye(s.QueryParam, n.search) && be(s.Query, n.search))
                            return !0
                    }
                    return !1
                }
                , be = function (t, n) {
                    return 0 === t.length || !n || t.every(function (t) {
                        return t.lastIndex = 0,
                            t.test(n)
                    })
                }
                , Se = function (t, n) {
                    var i, r, e, s, o;
                    (i = t.Hash).push.apply(i, n.Hash),
                        (r = t.Host).push.apply(r, n.Host),
                        (e = t.Path).push.apply(e, n.Path),
                        (s = t.QueryParam).push.apply(s, n.QueryParam),
                        (o = t.Query).push.apply(o, n.Query)
                };
            function ke(t) {
                return "/" !== t.charAt(0) ? "/" + t : t
            }
            var _e = {}
                , Ae = "__default";
            function Te(t) {
                void 0 === t && (t = Ae);
                var n = _e[t];
                return n || (n = function () {
                    var t = document.implementation.createHTMLDocument("");
                    return t.head || t.documentElement.appendChild(t.createElement("head")),
                        t.body || t.documentElement.appendChild(t.createElement("body")),
                        t
                }(),
                    t !== Ae && (n.open(),
                        n.write(t),
                        n.close()),
                    _e[t] = n),
                    n
            }
            var Ee = new (function () {
                function t() {
                    var t = Te()
                        , n = t.getElementById("urlresolver-base");
                    n || ((n = t.createElement("base")).id = "urlresolver-base",
                        t.head.appendChild(n));
                    var i = t.getElementById("urlresolver-parser");
                    i || ((i = t.createElement("a")).id = "urlresolver-parser",
                        t.head.appendChild(i)),
                        this.base = n,
                        this.parser = i
                }
                return t.prototype.parseUrl = function (t, n) {
                    var i = t;
                    if ("undefined" != typeof URL)
                        try {
                            i || (i = document.baseURI);
                            var r = i ? new URL(n, i) : new URL(n);
                            if (r.href)
                                return r
                        } catch (t) { }
                    return this.parseUrlUsingBaseAndAnchor(i, n)
                }
                    ,
                    t.prototype.parseUrlUsingBaseAndAnchor = function (t, n) {
                        this.base.setAttribute("href", t),
                            this.parser.setAttribute("href", n);
                        var i = document.createElement("a");
                        return i.href = this.parser.href,
                            i
                    }
                    ,
                    t.prototype.resolveUrl = function (t, n) {
                        return this.parseUrl(t, n).href
                    }
                    ,
                    t.prototype.resolveToDocument = function (t, n) {
                        var i = Ie(t);
                        return null == i ? n : this.resolveUrl(i, n)
                    }
                    ,
                    t
            }());
            function Ce(t, n) {
                return Ee.parseUrl(t, n)
            }
            function Ie(t) {
                var n = t.document
                    , i = t.location.href;
                if ("string" == typeof n.baseURI)
                    i = n.baseURI;
                else {
                    var r = n.getElementsByTagName("base")[0];
                    r && r.href && (i = r.href)
                }
                return "about:blank" == i && t.parent != t ? Ie(t.parent) : i
            }
            var je = ["allowReorder", "attributeName", "attributeType", "autoReverse", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "contentScriptType", "contentStyleType", "diffuseConstant", "edgeMode", "externalResourcesRequired", "filterRes", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "referrerPolicy", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].reduce(function (t, n) {
                return t[n] = n,
                    t[n.toUpperCase()] = n,
                    t
            }, {})
                , xe = /[-\\^$*+?.()|[\]{}]/g
                , Oe = new RegExp(xe.source)
                , Ke = 16e6
                , Me = /^\s*((prefetch|preload|prerender)\s*)+$/i
                , Re = /^\s*.*((worklet|script|worker|font|fetch)\s*)+$/i;
            function Pe(t, n, i) {
                var r, e, s = t.node, u = t.tag;
                if (null === u || "" === n)
                    return null;
                if ("link" === u && Me.test(null !== (r = s.getAttribute("rel")) && void 0 !== r ? r : "") && !Re.test(null !== (e = s.getAttribute("as")) && void 0 !== e ? e : ""))
                    return null;
                var a, c = "style" === n ? Le(i) : i, h = function (t, n, i) {
                    var r, e, s, u, a, c, h, f, v, l, d, p, w, g = void 0;
                    (null === (r = null == n ? void 0 : n.watchKind) || void 0 === r ? void 0 : r.has(Hn.Exclude)) ? g = rn.Exclude : (null == n ? void 0 : n.mask) && (g = rn.Mask);
                    var y = []
                        , m = null === (u = null === (s = null === (e = Ye.blocklist[rn.Any]) || void 0 === e ? void 0 : e[t]) || void 0 === s ? void 0 : s["static"]) || void 0 === u ? void 0 : u[i]
                        , b = null === (h = null === (c = null === (a = Ye.blocklist[rn.Any]) || void 0 === a ? void 0 : a["*"]) || void 0 === c ? void 0 : c["static"]) || void 0 === h ? void 0 : h[i];
                    if (void 0 !== m && y.push(m),
                        void 0 !== b && y.push(b),
                        g) {
                        var S = null === (l = null === (v = null === (f = Ye.blocklist[g]) || void 0 === f ? void 0 : f[t]) || void 0 === v ? void 0 : v["static"]) || void 0 === l ? void 0 : l[i]
                            , k = null === (w = null === (p = null === (d = Ye.blocklist[g]) || void 0 === d ? void 0 : d["*"]) || void 0 === p ? void 0 : p["static"]) || void 0 === w ? void 0 : w[i];
                        void 0 !== S && y.push(S),
                            void 0 !== k && y.push(k)
                    }
                    if (Ye.hasPrefix) {
                        var _ = ts(rn.Any, t, i)
                            , A = ts(rn.Any, "*", i);
                        if (void 0 !== _ && y.push(_),
                            void 0 !== A && y.push(A),
                            g) {
                            var T = ts(g, t, i)
                                , E = ts(g, "*", i);
                            void 0 !== T && y.push(T),
                                void 0 !== E && y.push(E)
                        }
                    }
                    return function (t) {
                        if (0 !== t.length)
                            return o.mathMin.apply(o, t)
                    }(y)
                }(u, t, n);
                if (void 0 === h && !t)
                    return null;
                switch (h) {
                    case void 0:
                        return c;
                    case en.Erase:
                        return null;
                    case en.MaskText:
                        return Wn(c);
                    case en.ScrubCss:
                        return a = function (t, n, i) {
                            return "" + t + Je + i
                        }
                            ,
                            c.replace(jn, function (t) {
                                for (var n = [], i = 1; i < arguments.length; i++)
                                    n[i - 1] = arguments[i];
                                var r = n[0] || n[3] || n[6] || n[9] || n[12]
                                    , e = (n[1] || n[4] || n[7] || n[10] || n[13],
                                        n[2] || n[5] || n[8] || n[11] || n[14]);
                                return n[15],
                                    a(r, 0, e)
                            });
                    case en.ScrubUrl:
                        var f = He(c, {
                            source: "dom",
                            type: u
                        });
                        if ("#" === c[0]) {
                            var v = f.indexOf("#");
                            if (v > -1)
                                return f.substring(v)
                        }
                        return f;
                    default:
                        return (0,
                            Yr.nt)(h);
                }
            }
            var Ne = {}
                , Le = function (t, n) {
                    void 0 === n && (n = window);
                    try {
                        var i = n.location
                            , r = "" + i.origin + i.pathname + i.search
                            , e = Ne[r];
                        return e ? e.lastIndex = 0 : (e = new RegExp((s = r,
                            (Oe.test(s) ? s.replace(xe, "\\$&") : s) + "/?(#)"), "g"),
                            Ne[r] = e),
                            t.replace(e, "https://fs-currenturl.invalid$1")
                    } catch (n) {
                        return Ft("cleanCSS", n),
                            t
                    }
                    var s
                }
                , Ue = /^data:/i;
            function He(t, n) {
                if (Ue.test(t))
                    return t;
                switch (n.source) {
                    case "dom":
                        switch (i = n.type) {
                            case "frame":
                            case "iframe":
                                return qe(t);
                            default:
                                return De(t);
                        }
                    case "event":
                        switch (i = n.type) {
                            case Pt.AJAX_REQUEST:
                            case Pt.NAVIGATE:
                                return De(t);
                            case Pt.SET_FRAME_BASE:
                                return qe(t);
                            default:
                                return (0,
                                    Yr.nt)(i);
                        }
                    case "log":
                        return qe(t);
                    case "page":
                        var i;
                        switch (i = n.type) {
                            case "base":
                                return qe(t);
                            case "referrer":
                            case "url":
                                return De(t);
                            default:
                                return (0,
                                    Yr.nt)(i);
                        }
                    case "perfEntry":
                        switch (n.type) {
                            case "frame":
                            case "iframe":
                            case "navigation":
                            case "other":
                                return qe(t);
                            default:
                                return De(t);
                        }
                    default:
                        return (0,
                            Yr.nt)(n);
                }
            }
            function De(t) {
                return $e(We, t)
            }
            var Be = vn.DefaultOrgSettings.MaxUrlLength
                , Fe = fe(vn.DefaultOrgSettings.UrlPrivacyConfig)
                , We = fe(vn.DefaultOrgSettings.UrlPrivacyConfig);
            function ze(t, n) {
                Fe = fe(vn.DefaultOrgSettings.UrlPrivacyConfig.concat(t)),
                    We = fe(t),
                    Be = n || vn.DefaultOrgSettings.MaxUrlLength
            }
            function Ve(t, n) {
                Ot.sendToBugsnag(t, "error", n)
            }
            function qe(t) {
                return $e(Fe, t)
            }
            function $e(t, n) {
                return function (t, n, i, r) {
                    void 0 === i && (i = de);
                    for (var e = {
                        Hash: [],
                        Host: [],
                        Path: [],
                        QueryParam: [],
                        Query: []
                    }, s = 0, o = t; s < o.length; s++) {
                        var u = o[s];
                        me(u.If, n) && Se(e, u.Exclude)
                    }
                    var a, c, h = pe(e.Host, n.host, i, r);
                    if (n.host = h,
                        n.port && (a = h,
                            c = n.port,
                            a.substring(a.length - c.length) !== c) && (n.port = ""),
                        n.pathname = pe(e.Path, ke(n.pathname), i),
                        n.hash && (n.hash = pe(e.Hash, n.hash, i)),
                        n.search) {
                        var f = function (t, n, i) {
                            return void 0 === i && (i = de),
                                n.split("?").map(function (n) {
                                    return n.replace("?", "").split("&").map(function (n) {
                                        return pe(t, n, i)
                                    }).join("&")
                                }).join("?")
                        }(e.QueryParam, n.search, i);
                        n.search = pe(e.Query, f, i)
                    }
                    return n.href
                }(t, Ce("", n), de, Ve).substring(0, Be)
            }
            var Ge = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/gi
                , Xe = /(?:(http)|(ftp)|(ws)|(blob)|(file))[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+#]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/gi;
            function Qe(t) {
                return t.replace(Ge, "<email>").replace(Xe, function (t) {
                    return He(t, {
                        source: "log",
                        type: "debug"
                    })
                })
            }
            var Ye, Je = "https://fs-excluded.invalid";
            function Ze(t) {
                var n, i, r, e, s, o, u, a, c, h, f, v, l, d, p, w;
                try {
                    for (var g = (Ye = {
                        blocklist: {},
                        hasPrefix: !1
                    }).blocklist, y = (null !== (r = null == t ? void 0 : t.length) && void 0 !== r ? r : 0) > 0 ? t : vn.DefaultOrgSettings.AttributeBlocklist, m = {}, b = 0, S = y; b < S.length; b++) {
                        var k = S[b]
                            , _ = k.Action;
                        switch (_) {
                            case en.Erase:
                            case en.MaskText:
                            case en.ScrubCss:
                            case en.ScrubUrl:
                                break;
                            default:
                                Ot.sendToBugsnag("Detected unexpected attribute block action " + _, "warning"),
                                    _ = en.Erase;
                        }
                        if (null !== (e = g[h = k.Target]) && void 0 !== e || (g[h] = {}),
                            null !== (s = (f = g[k.Target])[v = k.Tag]) && void 0 !== s || (f[v] = {
                                "static": {},
                                regex: {}
                            }),
                            k.Type === sn.Prefix)
                            null !== (o = m[l = k.Target]) && void 0 !== o || (m[l] = {}),
                                null !== (u = (d = m[k.Target])[p = k.Tag]) && void 0 !== u || (d[p] = {}),
                                null !== (a = (w = m[k.Target][k.Tag])[_]) && void 0 !== a || (w[_] = []),
                                m[k.Target][k.Tag][_].push(null !== (c = k.Name) && void 0 !== c ? c : "");
                        else {
                            if (!k.Name) {
                                Ot.sendToBugsnag("Detected an empty named static attribute " + JSON.stringify(k), "warning");
                                continue
                            }
                            g[k.Target][k.Tag]["static"][k.Name] = _
                        }
                    }
                    for (var A in m)
                        for (var T in m[A])
                            for (var E in m[A][T]) {
                                var C = m[A][T][E];
                                g[A][T].regex[E] = new RegExp("^(?:" + C.join("|") + ")", "i"),
                                    Ye.hasPrefix = !0
                            }
                } catch (t) {
                    Ot.sendToBugsnag(t, "warning"),
                        Ye = {
                            blocklist: (n = {},
                                n[rn.Any] = {
                                    "*": {
                                        "static": {},
                                        regex: (i = {},
                                            i[en.Erase] = /.*/,
                                            i)
                                    }
                                },
                                n),
                            hasPrefix: !0
                        }
                }
            }
            function ts(t, n, i) {
                var r, e, s = null === (e = null === (r = Ye.blocklist[t]) || void 0 === r ? void 0 : r[n]) || void 0 === e ? void 0 : e.regex;
                if (s)
                    for (var o in s)
                        if (s[o].test(i))
                            return Number(o)
            }
            Ze();
            var ns = {
                target: {
                    any: rn.Any,
                    exclude: rn.Exclude,
                    mask: rn.Mask
                },
                action: {
                    erase: en.Erase,
                    maskText: en.MaskText,
                    scrubUrl: en.ScrubUrl,
                    scrubCss: en.ScrubCss
                },
                type: {
                    "static": sn.Static,
                    prefix: sn.Prefix
                }
            };
            function is(t) {
                var n;
                return {
                    Tag: t.tag,
                    Name: t.name,
                    Target: ns.target[t.target],
                    Action: ns.action[t.action],
                    Type: ns.type[null !== (n = t.type) && void 0 !== n ? n : "static"]
                }
            }
            var rs = {
                attributeName: null,
                attributeNamespace: null,
                addedNodes: [],
                removedNodes: [],
                nextSibling: null,
                previousSibling: null,
                oldValue: null
            };
            function es(t) {
                return (0,
                    e.__assign)((0,
                        e.__assign)((0,
                            e.__assign)({}, rs), t), {
                        type: "childList"
                    })
            }
            function ss(t, n) {
                return 0 === n.length ? es({
                    target: t
                }) : es({
                    addedNodes: n,
                    nextSibling: ht(n[n.length - 1]),
                    previousSibling: ft(n[0]),
                    target: t
                })
            }
            function os(t) {
                var n = [];
                return Ar(t, function (t) {
                    n.push(t)
                }),
                    ss(t, n)
            }
            var us = {
                sanitize: function (t) {
                    var n, i = t[1], r = t[2], e = t[3];
                    if (r) {
                        var s = {}
                            , o = i.tag;
                        for (var u in r)
                            if ("dialog" !== o || "open" !== u) {
                                var a = r[u]
                                    , c = je[n = u] || n.toLowerCase()
                                    , h = Pe(i, c, a);
                                null !== h && (s[c] = h)
                            }
                        t[Sr.Attrs] = s
                    }
                    if (e) {
                        var f = function (t, n) {
                            if (!n)
                                return "";
                            var i = n.length;
                            return i > Ke ? (Ot.sendToBugsnag("Ignoring huge text node", "warning", {
                                length: i
                            }),
                                "") : t.parent && "style" === t.parent.tag ? n : t.mask ? Wn(n) : n
                        }(i, e);
                        t[Sr.Text] = f
                    }
                }
            }
                , as = function () {
                    function t(t, n, i, r, e) {
                        var s = this;
                        void 0 === i && (i = function () { }
                        ),
                            void 0 === e && (e = function () { }
                            ),
                            this.an = n,
                            this.Vn = i,
                            this.hn = r,
                            this.qn = e,
                            this.$n = !1,
                            this.Gn = [],
                            this.Xn = [],
                            this.Qn = [],
                            this.Yn = [],
                            this.Jn = [],
                            this.Zn = !1,
                            this.ti = [],
                            this.ni = [],
                            this.ii = t.window,
                            this.acceptSanitizer(us),
                            this.acceptVisitor(this),
                            this.cn = ae.create(t),
                            this.ri = new Vr(n, this.cn, this.hn),
                            Rt(!this.an.onConsentChange, "This is the only consent change listener."),
                            this.an.onConsentChange = function () {
                                return s.updateConsent()
                            }
                    }
                    return t.prototype.start = function (t) {
                        void 0 === t && (t = this.ii.document),
                            this.Jt = t,
                            this.$n = !1;
                        var n = !0;
                        if (cr)
                            try {
                                this.ei()
                            } catch (t) {
                                n = !1
                            }
                        n && (this.si = new MutationObserver(this.oi.bind(this)))
                    }
                        ,
                        t.prototype.oi = function (t) {
                            for (var n = 0, i = t; n < i.length; n++) {
                                var r = i[n];
                                this.Jn.push(r)
                            }
                        }
                        ,
                        t.prototype.resizer = function () {
                            return this.cn
                        }
                        ,
                        t.prototype.stop = function () {
                            this.si && this.si.disconnect();
                            var t = Jn(this.Jt);
                            t && ri(t),
                                this.Jn = [],
                                cr && this.ui(),
                                this.an.onConsentChange = null,
                                this.ai && (this.ai.disable(),
                                    this.ai = null)
                        }
                        ,
                        t.prototype.processMutations = function (t) {
                            var n;
                            if (!this.Jt)
                                return [];
                            var i = [];
                            if (this.ci(t, i),
                                this.Zn && (i.push({
                                    Kind: Pt.FAIL_THROTTLED,
                                    Args: [Jt.SetPropertyHooks],
                                    When: t
                                }),
                                    this.Zn = !1),
                                this.Jn.length > 0 || this.Xn.length > 0) {
                                var r = this.hi(t, i)
                                    , s = r[0]
                                    , o = r[1];
                                for (var u in o)
                                    i.push({
                                        Kind: Pt.MUT_ATTR,
                                        Args: o[u],
                                        When: t
                                    });
                                for (var u in s)
                                    i.push({
                                        Kind: Pt.MUT_TEXT,
                                        Args: s[u],
                                        When: t
                                    })
                            }
                            var a = this.Gn;
                            this.Gn = [];
                            for (var c = 0; c < a.length; c++) {
                                var h = a[c].shadowRoot;
                                h && 0 != ti(a[c]) && 0 == ti(h) && (this.fi(h),
                                    this.vi(null, t, i, a[c], h))
                            }
                            if (i.push.apply(i, this.cn.collect(t)),
                                this.Jn = [],
                                this.Yn.length > 0 && (i.push({
                                    Kind: Pt.DEFERRED_RESOLVED,
                                    Args: (0,
                                        e.__spreadArray)([], this.Yn),
                                    When: t
                                }),
                                    this.Yn = []),
                                this.Qn.length > 0) {
                                for (var f = 0, v = this.Qn; f < v.length; f++) {
                                    var l = v[f];
                                    this.Yn.push(ti(l)),
                                        (null === (n = l.childNodes) || void 0 === n ? void 0 : n.length) > 0 && this.Jn.push(os(l))
                                }
                                this.Qn = []
                            }
                            return i
                        }
                        ,
                        t.prototype.recordingIsDetached = function () {
                            return !!this.Jt && this.Jt != this.ii.document
                        }
                        ,
                        t.prototype.ci = function (t, n) {
                            if (!this.$n && this.Jt) {
                                window;
                                var i = p()
                                    , r = this.an.allWatchedElements(this.Jt)
                                    , e = p() - i;
                                n.push({
                                    Kind: Pt.TIMING,
                                    Args: [[Lt.Internal, Ut.Serialization, Ht.ApplyRules, t, e]],
                                    When: t
                                }),
                                    this.li(r, t, n, null, this.Jt, null),
                                    this.cn.nodeChanged(this.Jt),
                                    this.si && this.fi(this.Jt),
                                    this.$n = !0,
                                    this.di(),
                                    window
                            }
                        }
                        ,
                        t.prototype.di = function () {
                            var t = this;
                            this.ai = St(Element.prototype, "attachShadow", !0),
                                this.ai && this.ai.before(function (n) {
                                    n.that.shadowRoot || t.Gn.push(n.that)
                                })
                        }
                        ,
                        t.prototype.fi = function (t) {
                            var n;
                            try {
                                null === (n = this.si) || void 0 === n || n.observe(t, {
                                    childList: !0,
                                    attributes: !0,
                                    characterData: !0,
                                    subtree: !0,
                                    attributeOldValue: !0,
                                    characterDataOldValue: !0
                                })
                            } catch (t) { }
                        }
                        ,
                        t.prototype.hi = function (t, n) {
                            for (var i, r, e, s = this, o = {}, u = {}, a = {}, c = {}, h = function (i) {
                                if (Jn(i)) {
                                    s.pi(t, n, Jn(i));
                                    var r = Jn(i.parentNode);
                                    r && (c[r.id] = r.node)
                                }
                            }, f = function (s) {
                                var f, l, d;
                                try {
                                    var p = v.Jn[s];
                                    if ("childList" === p.type && 1 === (null === (i = p.target) || void 0 === i ? void 0 : i.nodeType) && "SLOT" === p.target.tagName) {
                                        var w = function (t) {
                                            for (var n = new WeakMap, i = t; i; i = i.parentNode) {
                                                if (n.has(i))
                                                    return null;
                                                if (n.set(i, !0),
                                                    11 === i.nodeType)
                                                    break
                                            }
                                            if (!i)
                                                return null;
                                            var r = Jn(i);
                                            return (null == r ? void 0 : r.shadowRootType) === kr && (null == r ? void 0 : r.parent) ? [r.parent.id, r.parent.node] : null
                                        }(p.target);
                                        if (w) {
                                            var g = w[0]
                                                , y = w[1];
                                            c[g] = y
                                        }
                                    }
                                    var m = ti(p.target);
                                    if (!m)
                                        return "continue";
                                    switch (a[m] = p.target,
                                    p.type) {
                                        case "childList":
                                            if (p.removedNodes.length > 0)
                                                for (var b = 0; b < p.removedNodes.length; ++b)
                                                    (I = Jn(p.removedNodes[b])) && I.id && v.pi(t, n, I);
                                            if (p.addedNodes.length > 0) {
                                                c[m] = p.target;
                                                var S = !(null == (d = p.target) ? void 0 : d.shadowRoot) || mr(d.shadowRoot) ? null : Jn(d.shadowRoot);
                                                S && (c[S.id] = S.node)
                                            }
                                            break;
                                        case "characterData":
                                            if ((I = Jn(p.target)) && !Qn(p.target, I)) {
                                                var k = p.target.textContent;
                                                if (p.oldValue !== k) {
                                                    var _ = [br.Update, I, void 0, null != k ? k : void 0];
                                                    Cr(v.ti, v.ni, _, function (t) {
                                                        var n;
                                                        o[m] = [m, null !== (n = t[Sr.Text]) && void 0 !== n ? n : ""]
                                                    })
                                                }
                                            }
                                            break;
                                        case "attributes":
                                            var A = p.target;
                                            if ("link" === Un(A) && "rel" === p.attributeName && Me.test(null !== (r = p.oldValue) && void 0 !== r ? r : "")) {
                                                h(A);
                                                break
                                            }
                                            var T = function (t, n) {
                                                return void 0 === n && (n = Jn(t)),
                                                    null == n ? void 0 : n.watchKind
                                            }(A)
                                                , E = v.an.isWatched(A);
                                            if (ee(E) > ee(T)) {
                                                h(A);
                                                break
                                            }
                                            if (Qr.needsToObserve(T, E)) {
                                                v.cn.observe(A),
                                                    (null == E ? void 0 : E.has(Hn.Watch)) && (null === (e = v.hn) || void 0 === e || e.observe(A));
                                                var C = Jn(A);
                                                C && (C.watchKind = Qr.combineKindsPreservePrivacy(T, E))
                                            }
                                            var I, j = (void 0 === (l = p.attributeNamespace) && (l = ""),
                                                (null === l ? "" : {
                                                    "http://www.w3.org/1999/xlink": "xlink:",
                                                    "http://www.w3.org/XML/1998/namespace": "xml:",
                                                    "http://www.w3.org/2000/xmlns/": "xmlns:"
                                                }[l] || "") + (p.attributeName || "")), x = p.target.getAttribute(j);
                                            (I = Jn(p.target)) && p.oldValue != x && (_ = [br.Update, I, (f = {},
                                                f[j] = x || "",
                                                f), void 0],
                                                Cr(v.ti, v.ni, _, function (t) {
                                                    var n, i = null !== (n = t[Sr.Attrs]) && void 0 !== n ? n : {};
                                                    for (var r in i) {
                                                        var e = i[r];
                                                        A.hasAttribute(r) || (e = null),
                                                            u[m + " " + r] = [m, r, e]
                                                    }
                                                }));
                                    }
                                } catch (t) { }
                            }, v = this, l = 0; l < this.Jn.length; ++l)
                                f(l);
                            for (var d = 0, p = this.Xn; d < p.length; d++) {
                                var w = p[d];
                                try {
                                    h(w)
                                } catch (t) {
                                    Ot.sendToBugsnag(t, "error")
                                }
                            }
                            for (var g in this.Xn = [],
                                c) {
                                var y = Jn(m = c[g]);
                                y && y.id && this.wi(t, n, m, y)
                            }
                            for (var g in a) {
                                var m = a[g];
                                this.cn.nodeChanged(m)
                            }
                            return [o, u]
                        }
                        ,
                        t.prototype.gi = function (t) {
                            return this.$n && t && this.Jt ? (this.yi(this.Jt),
                                []) : []
                        }
                        ,
                        t.prototype.yi = function (t) {
                            var n = this;
                            ti(t) || null === t.parentNode ? Ar(t, function (t) {
                                n.yi(t)
                            }) : this.Jn.push(ss(t.parentNode, [t]))
                        }
                        ,
                        t.prototype.wi = function (t, n, i, r) {
                            var e = []
                                , s = r.child;
                            for (Ar(i, function (t) {
                                if (s)
                                    for (var n = Jn(t); s;) {
                                        if (!ti(t)) {
                                            e.push({
                                                insert: [i, t, s.node]
                                            });
                                            break
                                        }
                                        if (n && s.id == n.id) {
                                            s = s.next;
                                            break
                                        }
                                        e.push({
                                            remove: s
                                        }),
                                            s = s.next
                                    }
                                else
                                    e.push({
                                        insert: [i, t, null]
                                    })
                            }); s; s = s.next)
                                e.push({
                                    remove: s
                                });
                            for (var o = !1, u = 0; u < e.length; u++) {
                                var a = e[u];
                                a.insert ? this.li(null, t, n, a.insert[0], a.insert[1], a.insert[2]) : a.remove && (o = !0,
                                    this.pi(t, n, a.remove))
                            }
                            Rt(!o, "All remove events should have been generated earlier, in MutationWatcher.processMutations")
                        }
                        ,
                        t.prototype.vi = function (t, n, i, r, e) {
                            var s = ti(r)
                                , o = p()
                                , u = this.mi(t, r, e, null)
                                , a = p() - o;
                            u.length > 0 && i.push({
                                Kind: Pt.DEFERRED_MUT_SHADOW,
                                Args: [s, u],
                                When: n
                            }, {
                                Kind: Pt.TIMING,
                                Args: [[Lt.Internal, Ut.Serialization, Ht.NodeEncoding, n, a]],
                                When: n
                            })
                        }
                        ,
                        t.prototype.li = function (t, n, i, r, e, s) {
                            var o = ti(r) || -1
                                , u = ti(s) || -1
                                , a = -1 === o && -1 === u
                                , c = p();
                            window;
                            var h = this.mi(t, r, e, s);
                            window;
                            var f = p() - c;
                            h.length > 0 && (i.push({
                                Kind: Pt.DEFERRED_MUT_INSERT,
                                Args: [o, u, h],
                                When: n
                            }, {
                                Kind: Pt.TIMING,
                                Args: [[Lt.Internal, Ut.Serialization, a ? Ht.DomSnapshot : Ht.NodeEncoding, n, f]],
                                When: n
                            }),
                                this.qn())
                        }
                        ,
                        t.prototype.mi = function (t, n, i, r) {
                            var e = this;
                            if (n && Qn(n))
                                return [];
                            var s = this.ri.tokenizeNode(t, n, r, i, this.ti, this.ni, function (t, n) {
                                switch (n) {
                                    case Dn.Immediate:
                                        e.refreshElement(t);
                                        break;
                                    case Dn.Deferred:
                                        e.Qn.push(t);
                                }
                            });
                            return s
                        }
                        ,
                        t.prototype.pi = function (t, n, i) {
                            var r = i.id;
                            if (this.Vn(i),
                                ii(i, this.cn),
                                n.length > 0) {
                                var e = n[n.length - 1];
                                if (e.Kind == Pt.MUT_REMOVE)
                                    return void e.Args.push(r)
                            }
                            n.push({
                                Kind: Pt.MUT_REMOVE,
                                Args: [r],
                                When: t
                            })
                        }
                        ,
                        t.prototype.ei = function () {
                            var n = this;
                            if (hr) {
                                var i = Object.getOwnPropertyDescriptor(Node.prototype, "textContent")
                                    , r = i && i.set;
                                if (!i || !r)
                                    throw new Error("Missing textContent setter -- not safe to record mutations.");
                                Object.defineProperty(Element.prototype, "textContent", (0,
                                    e.__assign)((0,
                                        e.__assign)({}, i), {
                                        set: function (t) {
                                            try {
                                                for (var n = void 0; n = this.firstChild;)
                                                    this.removeChild(n);
                                                if (null === t || "" == t)
                                                    return;
                                                var i = (this.ownerDocument || document).createTextNode(t);
                                                this.appendChild(i)
                                            } catch (n) {
                                                r && r.call(this, t)
                                            }
                                        }
                                    }))
                            }
                            this.bi = new qi(t.ThrottleMax, t.ThrottleInterval, function () {
                                return new Vi(function () {
                                    n.Zn = !0,
                                        n.ui()
                                }
                                ).start()
                            }
                            );
                            var s = this.bi.guard(function (t) {
                                var n = t.cssText;
                                t.cssText = n
                            });
                            this.bi.open(),
                                this.Si = St(CSSStyleDeclaration.prototype, "setProperty"),
                                this.Si && this.Si.afterSync(function (t) {
                                    s(t.that)
                                }),
                                this.ki = St(CSSStyleDeclaration.prototype, "removeProperty"),
                                this.ki && this.ki.afterSync(function (t) {
                                    s(t.that)
                                })
                        }
                        ,
                        t.prototype.ui = function () {
                            this.bi && this.bi.close(),
                                this.Si && this.Si.disable(),
                                this.ki && this.ki.disable()
                        }
                        ,
                        t.prototype.updateConsent = function () {
                            var t = this;
                            this.Jt && Ar(this.Jt, function (n) {
                                return t.refreshElement(n)
                            })
                        }
                        ,
                        t.prototype.refreshElement = function (t) {
                            ti(t) && this.Xn.push(t)
                        }
                        ,
                        t.prototype.acceptSanitizer = function (t) {
                            this.ti.push(t)
                        }
                        ,
                        t.prototype.acceptVisitor = function (t) {
                            this.ni.push(t)
                        }
                        ,
                        t.prototype.visit = function (t) { }
                        ,
                        t.prototype.preVisit = function (t) {
                            var n = this
                                , i = t.node
                                , r = t.name;
                            if (1 === t.type && !Qn(i, t)) {
                                var e = i;
                                if (e.shadowRoot && this.fi(e.shadowRoot),
                                    "SLOT" === r) {
                                    var s = Jn(i);
                                    (null == s ? void 0 : s.shadowRootType) === kr && i.addEventListener("slotchange", Ot.wrap(function (t) {
                                        var r;
                                        n.Xn.push(null !== (r = t.target) && void 0 !== r ? r : i)
                                    }))
                                }
                            }
                        }
                        ,
                        t.ThrottleMax = 1024,
                        t.ThrottleInterval = 1e4,
                        t
                }()
                , cs = "navigation"
                , hs = "resource"
                , fs = "paint"
                , vs = "measure"
                , ls = "mark"
                , ds = "layout-shift"
                , ps = "first-input"
                , ws = "largest-contentful-paint"
                , gs = "longtask"
                , ys = function () {
                    function t(t, n, i, r) {
                        this.Tt = t,
                            this.Et = n,
                            this._i = r,
                            this.Ai = !1,
                            this.Ti = !1,
                            this.Ei = !1,
                            this.Ci = !1,
                            this.Ii = !1,
                            this.ji = !1,
                            this.xi = vn.DefaultOrgSettings.MaxPerfMarksPerPage,
                            this.Oi = 0,
                            this.Ki = !1,
                            this.Mi = !1,
                            this.Ri = !1,
                            this.Pi = !1,
                            this.Ni = 0,
                            this.Li = !1,
                            this.si = null,
                            this.Ui = null;
                        var e = window.performance;
                        e && (e.timing && (this.Ei = !0),
                            e.memory && (this.Ii = !0),
                            e.timeOrigin && (this.ji = !0),
                            "function" == typeof e.getEntries && (this.Ci = !0),
                            this.Ki = ms(window, ds),
                            this.Mi = ms(window, ps),
                            this.Ri = ms(window, ws),
                            this.Pi = ms(window, gs),
                            this.C = i.createChild())
                    }
                    return t.prototype.initialize = function (t) {
                        var n = t.resourceUploader
                            , i = t.recTimings
                            , r = t.recImgs
                            , e = t.maxPerfMarksPerPage;
                        this.Hi = n,
                            this.Ti = i,
                            this.Ai = r,
                            this.xi = e || vn.DefaultOrgSettings.MaxPerfMarksPerPage
                    }
                        ,
                        t.prototype.start = function () {
                            var t = this;
                            this.Oi = 0;
                            var n = window.performance;
                            n && (this.Tt.recording.inFrame || this.Et.enqueue({
                                Kind: Pt.REC_FEAT_SUPPORTED,
                                Args: [Qt.Performance, this.Ei, Qt.PerformanceEntries, this.Ci, Qt.PerformanceMemory, this.Ii, Qt.PerformanceObserver, !!window.PerformanceObserver, Qt.PerformanceTimeOrigin, this.ji, Qt.LayoutShift, this.Ki, Qt.FirstInput, this.Mi, Qt.LargestContentfulPaint, this.Ri, Qt.LongTask, this.Pi]
                            }),
                                this.fi(),
                                !this.si && n.addEventListener && n.removeEventListener && this.C && this.C.add(n, "resourcetimingbufferfull", !0, function () {
                                    t.Et.enqueue({
                                        Kind: Pt.RESOURCE_TIMING_BUFFER_FULL,
                                        Args: []
                                    })
                                }),
                                this.Di(),
                                this.Bi())
                        }
                        ,
                        t.prototype.onLoad = function () {
                            this.Li || (this.Li = !0,
                                this.Ei && this.Fi(performance.timing))
                        }
                        ,
                        t.prototype.tick = function () {
                            this.Di()
                        }
                        ,
                        t.prototype.stop = function () {
                            this.C && this.C.clear(),
                                this.Hi = void 0;
                            var t = [];
                            this.si ? t = bs(this.si) : window.performance && window.performance.getEntries && (t = window.performance.getEntries()),
                                this.Ui && t.push.apply(t, bs(this.Ui)),
                                t.length > 300 && (t = t.slice(0, 300),
                                    this.Et.enqueue({
                                        Kind: Pt.RESOURCE_TIMING_BUFFER_FULL,
                                        Args: []
                                    })),
                                this.Di(),
                                this.un(t),
                                this.Tt.taskQueue.flush()
                        }
                        ,
                        t.prototype.un = function (t) {
                            for (var n = this, i = function (t) {
                                r.Tt.taskQueue.enqueue(function () {
                                    return n.Wi(t)
                                })
                            }, r = this, e = 0, s = t; e < s.length; e++)
                                i(s[e])
                        }
                        ,
                        t.prototype.fi = function () {
                            var t = this;
                            if (!this.si && this.Ci && window.PerformanceObserver) {
                                this.un(performance.getEntries()),
                                    this.si = new window.PerformanceObserver(function (n) {
                                        return t.un(n.getEntries())
                                    }
                                    );
                                var n = [cs, hs, vs, ls];
                                if (window.PerformancePaintTiming && n.push(fs),
                                    this.Ki && n.push(ds),
                                    this.Mi && n.push(ps),
                                    this.Pi && n.push(gs),
                                    this.si.observe({
                                        entryTypes: n
                                    }),
                                    this.Ri)
                                    try {
                                        this.Ui = new window.PerformanceObserver(function (n) {
                                            return t.un(n.getEntries())
                                        }
                                        ),
                                            this.Ui.observe({
                                                type: ws,
                                                buffered: !0
                                            })
                                    } catch (t) { }
                            }
                        }
                        ,
                        t.prototype.Di = function () {
                            if (this.Ii && !this.Tt.recording.inFrame) {
                                var t = performance.memory;
                                if (t) {
                                    var n = t.usedJSHeapSize - this.Ni;
                                    (0 == this.Ni || o.mathAbs(n / this.Ni) > .2) && (this.zi(Gt.Memory, t, Xt.Memory),
                                        this.Ni = t.usedJSHeapSize)
                                }
                            }
                        }
                        ,
                        t.prototype.Bi = function () {
                            var t = {
                                timeOrigin: d.timeOrigin
                            };
                            this.zi(Gt.TimeOrigin, t, Xt.TimeOrigin)
                        }
                        ,
                        t.prototype.Wi = function (t) {
                            switch (t.entryType) {
                                case cs:
                                    this.Vi(t);
                                    break;
                                case hs:
                                    this.qi(t);
                                    break;
                                case fs:
                                    this.$i(t);
                                    break;
                                case vs:
                                    this.Gi(t);
                                    break;
                                case ls:
                                    this.Xi(t);
                                    break;
                                case ds:
                                    this.Qi(t);
                                    break;
                                case ps:
                                    this.Yi(t);
                                    break;
                                case ws:
                                    this.Ji(t);
                                    break;
                                case gs:
                                    this.Zi(t);
                            }
                        }
                        ,
                        t.prototype.Fi = function (t) {
                            this.zi(Gt.Timing, t, Xt.Timing)
                        }
                        ,
                        t.prototype.Vi = function (t) {
                            this.zi(Gt.Navigation, t, Xt.Navigation, {
                                name: cs
                            })
                        }
                        ,
                        t.prototype.qi = function (t) {
                            if (this.Ti) {
                                var n = t.initiatorType;
                                (this.Ai || "img" !== n && "image" !== n) && this.zi(Gt.Resource, t, Xt.Resource, {
                                    name: n
                                })
                            }
                        }
                        ,
                        t.prototype.$i = function (t) {
                            this.zi(Gt.Paint, t, Xt.Measure)
                        }
                        ,
                        t.prototype.Xi = function (t) {
                            this.zi(Gt.Mark, t, Xt.Measure)
                        }
                        ,
                        t.prototype.Gi = function (t) {
                            this.zi(Gt.Measure, t, Xt.Measure)
                        }
                        ,
                        t.prototype.Qi = function (t) {
                            this.zi(Gt.LayoutShift, t, Xt.LayoutShift)
                        }
                        ,
                        t.prototype.Yi = function (t) {
                            this.zi(Gt.FirstInput, t, Xt.FirstInput)
                        }
                        ,
                        t.prototype.Ji = function (t) {
                            this.zi(Gt.LargestContentfulPaint, t, Xt.LargestContentfulPaint)
                        }
                        ,
                        t.prototype.Zi = function (t) {
                            this.zi(Gt.LongTask, t, Xt.Measure)
                        }
                        ,
                        t.prototype.zi = function (t, n, i, r) {
                            if (void 0 === r && (r = {}),
                                !this.atLimit(t)) {
                                for (var e = [t], s = 0, o = i; s < o.length; s++) {
                                    var u = o[s]
                                        , a = n[u];
                                    if (void 0 === a && (a = -1),
                                        u in r) {
                                        var c = He(a, {
                                            source: "perfEntry",
                                            type: r[u]
                                        })
                                            , h = a === c;
                                        a = this.tr(t, n, c, h)
                                    }
                                    e.push(a)
                                }
                                this.Et.enqueue({
                                    Kind: Pt.PERF_ENTRY,
                                    Args: e
                                })
                            }
                        }
                        ,
                        t.prototype.tr = function (t, n, i, r) {
                            if (t === Gt.Resource)
                                switch (n.initiatorType) {
                                    case "":
                                    case "xmlhttprequest":
                                    case "fetch":
                                    case "script":
                                    case "beacon":
                                        return i;
                                    case "css":
                                        if (this.Hi && !r) {
                                            var e = Ce("", i);
                                            this.Hi.uploadIfNeeded(this.Tt.window, e)
                                        }
                                        return this._i.obfuscateUrl(i, "css");
                                    default:
                                        return this._i.obfuscateUrl(i);
                                }
                        }
                        ,
                        t.prototype.atLimit = function (t) {
                            switch (t) {
                                case Gt.Mark:
                                case Gt.Measure:
                                    if (this.Oi >= this.xi)
                                        return !0;
                                    this.Oi++;
                            }
                            return !1
                        }
                        ,
                        t
                }();
            function ms(t, n) {
                var i, r;
                return (null !== (r = null === (i = t.PerformanceObserver) || void 0 === i ? void 0 : i.supportedEntryTypes) && void 0 !== r ? r : []).indexOf(n) > -1
            }
            function bs(t) {
                var n = [];
                return t.takeRecords && (n = t.takeRecords()),
                    t.disconnect(),
                    n
            }
            function Ss(t) {
                var n = 0
                    , i = {
                        id: n++,
                        edges: {}
                    };
                return t.split("\n").forEach(function (t) {
                    var r = t.trim();
                    if ("" != r) {
                        if (0 == r.indexOf("/") || r.lastIndexOf("/") == r.length - 1)
                            throw new Error("Leading and trailing slashes are not supported");
                        var e = i
                            , s = r.split("/");
                        s.forEach(function (t, i) {
                            var r = t.trim();
                            if ("" === r)
                                throw new Error("Empty elements are not allowed");
                            if ("**" != r && "*" != r && -1 != r.indexOf("*"))
                                throw new Error("Embedded wildcards are not supported");
                            var o = null;
                            r in e.edges && (o = e.edges[r]),
                                o || (o = {
                                    id: n++,
                                    edges: {}
                                },
                                    e.edges[r] = o),
                                i == s.length - 1 && (o.term = !0),
                                e = o
                        })
                    }
                }),
                    i
            }
            var ks = Ss("**");
            function _s(t, n, i) {
                if (!Rs(i)) {
                    try {
                        for (var r = [], e = 0, s = i; e < s.length; e++) {
                            var u = s[e];
                            if (!u)
                                return;
                            var a = new As(!0 === u ? ks : u);
                            r.push(a)
                        }
                        var c = function (t, n) {
                            for (var i = {}, r = function (n) {
                                i[n] = function () {
                                    for (var i = [], r = 0; r < arguments.length; r++)
                                        i[r] = arguments[r];
                                    for (var e = 0, s = t; e < s.length; e++) {
                                        var o = s[e];
                                        o[n].apply(o, i)
                                    }
                                }
                            }, e = 0, s = ["push", "pop"]; e < s.length; e++)
                                r(s[e]);
                            return i
                        }(r)
                            , h = 0
                            , f = [1]
                            , v = !1;
                        return o.jsonStringify(t, function (t, i) {
                            var e = i
                                , s = e && "object" == typeof e;
                            if ("" == t && 1 == f.length)
                                return f[0]--,
                                    s && f.push(o.objectKeys(e).length),
                                    e;
                            for (c.push(t),
                                r.some(function (t) {
                                    return t.isRedacted(!s)
                                }) && (e = vn.BlockedFieldValue,
                                    s = !1),
                                h += t.length + 2,
                                (h += s ? 2 : null === e ? 4 : e.toString().length) >= n && (v ? e = void 0 : (e = "_fs_trimmed_values",
                                    v = !0)),
                                f[f.length - 1]--,
                                e && e !== vn.BlockedFieldValue && s ? f.push(o.objectKeys(e).length) : c.pop(); f[f.length - 1] <= 0;)
                                f.pop(),
                                    c.pop();
                            for (var u = 0, a = r; u < a.length; u++) {
                                var l = a[u].depth();
                                if (void 0 !== l && f.length > 0 && l !== f.length - 1)
                                    throw new Error("Property matcher depth out of sync")
                            }
                            return e
                        })
                    } catch (t) {
                        Ot.sendToBugsnag(t, "error")
                    }
                    return "[error serializing " + t.constructor.name + "]"
                }
            }
            var As = function () {
                function t(t) {
                    this.nr = 1;
                    var n = [t];
                    t.edges["**"] && n.push(t.edges["**"]),
                        this.ir = [n]
                }
                return t.prototype.rr = function () {
                    if (this.ir.length <= 0)
                        return [];
                    var t = this.ir.length - 1
                        , n = this.ir[t];
                    return "number" == typeof n ? this.ir[t - 1] : n
                }
                    ,
                    t.prototype.depth = function () {
                        return this.nr
                    }
                    ,
                    t.prototype.isRedacted = function (t) {
                        var n = this.rr();
                        return 0 === n.length || t && !n.some(function (t) {
                            return t.term
                        })
                    }
                    ,
                    t.prototype.push = function (t) {
                        var n;
                        this.nr++;
                        var i = this.rr()
                            , r = [];
                        function e(n) {
                            n.edges["**"] && (r.push(n.edges["**"], Ts(n)),
                                e(n.edges["**"])),
                                n.edges["*"] && r.push(n.edges["*"]),
                                n.edges[t] && r.push(n.edges[t])
                        }
                        for (var s = 0, o = i; s < o.length; s++) {
                            var u = o[s];
                            if (null === (n = u.edges["**"]) || void 0 === n ? void 0 : n.term) {
                                r = [Ts(u), u.edges["**"]];
                                break
                            }
                            e(u)
                        }
                        var a = !1;
                        if (r.length !== i.length)
                            a = !0;
                        else
                            for (var c = 0; c < r.length; c++)
                                if (r[c].id !== i[c].id) {
                                    a = !0;
                                    break
                                }
                        a ? this.ir.push(r) : ("number" != typeof this.ir[this.ir.length - 1] && this.ir.push(0),
                            this.ir[this.ir.length - 1]++)
                    }
                    ,
                    t.prototype.pop = function () {
                        this.nr > 0 && this.nr--;
                        var t = this.ir[this.ir.length - 1];
                        "number" == typeof t && t > 1 ? this.ir[this.ir.length - 1]-- : this.ir.pop()
                    }
                    ,
                    t
            }();
            function Ts(t) {
                var n = t.edges["**"];
                if (!n)
                    throw new Error("Node must have double-wildcard edge.");
                return ct(t.edges, 1) ? {
                    id: -n.id,
                    edges: {
                        "**": n
                    }
                } : t
            }
            var Es, Cs, Is, js = function () {
                function t(t) {
                    this.er = t,
                        this.sr = null
                }
                return t.prototype.disable = function () {
                    this.sr && (this.sr.disable(),
                        this.sr = null)
                }
                    ,
                    t.prototype.enable = function (t) {
                        var n, i = this, r = j(t), s = null === (n = null == r ? void 0 : r._w) || void 0 === n ? void 0 : n.fetch;
                        (s || t.fetch) && (this.sr = St(s ? r._w : t, "fetch"),
                            this.sr && this.sr.afterSync(function (t) {
                                var n = t.result;
                                t.result = (0,
                                    e.__awaiter)(i, void 0, void 0, function () {
                                        return (0,
                                            e.__generator)(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return i.trys.push([0, 2, , 3]),
                                                            [4, this.ur(n, t.args[0], t.args[1])];
                                                    case 1:
                                                    case 2:
                                                        return i.sent(),
                                                            [3, 3];
                                                    case 3:
                                                        return [2, n];
                                                }
                                            })
                                    })
                            }))
                    }
                    ,
                    t.prototype.ur = function (t, n, i) {
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var r, s, o, u, a, c;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return r = "GET",
                                                    s = "",
                                                    a = !1,
                                                    "string" == typeof n ? s = n : "url" in n ? (s = n.url,
                                                        r = n.method,
                                                        o = n.body,
                                                        u = n.headers,
                                                        a = !!n.signal) : s = "" + n,
                                                    s ? (i && (r = i.method || r,
                                                        u = zs(i.headers),
                                                        o = i.body || o,
                                                        a = !!i.signal || a),
                                                        c = this.ar(t),
                                                        a && s.search(/\/(graphql|gql)/i) > -1 ? [4, Ni.race([c, jr(5e3)])] : [3, 2]) : [2];
                                            case 1:
                                                e.sent(),
                                                    e.label = 2;
                                            case 2:
                                                return this.er.startRequest(r, s, {
                                                    body: function () {
                                                        return o
                                                    },
                                                    headers: u
                                                }, c),
                                                    [2];
                                        }
                                    })
                            })
                    }
                    ,
                    t.prototype.ar = function (t) {
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var n, i, r, s;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, t];
                                            case 1:
                                                if (n = e.sent(),
                                                    i = n.headers,
                                                    r = (i.get("content-type") || "default").split(";")[0],
                                                    !(["default", "text/plain", "text/json", "application/json"].indexOf(r) > -1))
                                                    return [2, {
                                                        status: n.status,
                                                        data: {
                                                            headers: i,
                                                            body: null
                                                        }
                                                    }];
                                                s = null,
                                                    e.label = 2;
                                            case 2:
                                                return e.trys.push([2, 4, , 5]),
                                                    [4, n.clone().text()];
                                            case 3:
                                                return s = e.sent(),
                                                    [3, 5];
                                            case 4:
                                                return e.sent(),
                                                    [3, 5];
                                            case 5:
                                                return [2, {
                                                    status: n.status,
                                                    data: {
                                                        headers: i,
                                                        body: s
                                                    }
                                                }];
                                        }
                                    })
                            })
                    }
                    ,
                    t
            }(), xs = function () {
                function t(t) {
                    this.er = t,
                        this.cr = new WeakMap
                }
                return t.prototype.disable = function () {
                    this.hr && (this.hr.disable(),
                        this.hr = null),
                        this.vr && (this.vr.disable(),
                            this.vr = null),
                        this.lr && (this.lr.disable(),
                            this.lr = null)
                }
                    ,
                    t.prototype.dr = function (t) {
                        var n = this.cr.get(t);
                        if (n)
                            return n;
                        var i = {};
                        return this.cr.set(t, i),
                            i
                    }
                    ,
                    t.prototype.enable = function (t) {
                        var n, i, r, s, o = this, u = j(t), a = (null === (n = null == u ? void 0 : u._w) || void 0 === n ? void 0 : n.XMLHttpRequest) || t.XMLHttpRequest;
                        if (a) {
                            var c = a.prototype;
                            this.hr = null === (i = St(c, "open")) || void 0 === i ? void 0 : i.before(function (t) {
                                var n = o.dr(t.that);
                                n.method = t.args[0],
                                    n.url = t.args[1]
                            }),
                                this.lr = null === (r = St(c, "setRequestHeader")) || void 0 === r ? void 0 : r.before(function (t) {
                                    var n = t.that
                                        , i = t.args[0]
                                        , r = t.args[1]
                                        , e = o.dr(n);
                                    e.headers || (e.headers = []),
                                        e.headers.push([i, r])
                                }),
                                this.vr = null === (s = St(c, "send")) || void 0 === s ? void 0 : s.before(function (t) {
                                    var n = t.that
                                        , i = t.args[0]
                                        , r = o.dr(n)
                                        , s = r.url
                                        , u = r.method
                                        , a = r.headers;
                                    void 0 !== s && void 0 !== u && (o.cr["delete"](n),
                                        o.er.startRequest(u, s, {
                                            headers: zs(a),
                                            body: i
                                        }, function (t) {
                                            return (0,
                                                e.__awaiter)(this, void 0, Ni, function () {
                                                    var n;
                                                    return (0,
                                                        e.__generator)(this, function (i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return [4, new Ni(function (n) {
                                                                        t.addEventListener("readystatechange", function () {
                                                                            t.readyState === XMLHttpRequest.DONE && n()
                                                                        }),
                                                                            t.addEventListener("load", n),
                                                                            t.addEventListener("error", n)
                                                                    }
                                                                    )];
                                                                case 1:
                                                                    return i.sent(),
                                                                        n = function (t) {
                                                                            if (t)
                                                                                return {
                                                                                    forEach: function (n) {
                                                                                        for (var i, r = /([^:]*):\s+(.*)(?:\r\n|$)/g; i = r.exec(t);)
                                                                                            n(i[2], i[1])
                                                                                    }
                                                                                }
                                                                        }(t.getAllResponseHeaders()),
                                                                        [2, {
                                                                            status: t.status,
                                                                            data: {
                                                                                headers: n,
                                                                                body: function () {
                                                                                    return "text" === t.responseType ? t.responseText : t.response
                                                                                }
                                                                            }
                                                                        }];
                                                            }
                                                        })
                                                })
                                        }(n)))
                                })
                        }
                    }
                    ,
                    t
            }(), Os = /^data:/i, Ks = function () {
                function t(t, n) {
                    this.Tt = t,
                        this.Et = n,
                        this.Ut = !1,
                        this.pr = new Ms(t, n),
                        this.wr = new xs(this.pr),
                        this.gr = new js(this.pr)
                }
                return t.prototype.isEnabled = function () {
                    return this.Ut
                }
                    ,
                    t.prototype.start = function (t) {
                        t.AjaxWatcher && (this.Ut || (this.Ut = !0,
                            this.Et.enqueue({
                                Kind: Pt.REC_FEAT_SUPPORTED,
                                Args: [Qt.Ajax, !0]
                            }),
                            this.wr.enable(this.Tt.window),
                            this.gr.enable(this.Tt.window)))
                    }
                    ,
                    t.prototype.stop = function () {
                        this.Ut && (this.Ut = !1,
                            this.wr.disable(),
                            this.gr.disable())
                    }
                    ,
                    t.prototype.tick = function () {
                        this.pr.tick()
                    }
                    ,
                    t.prototype.setWatches = function (t) {
                        this.pr.setWatches(t)
                    }
                    ,
                    t.prototype.initialize = function (t) {
                        this.pr.initialize(t)
                    }
                    ,
                    t
            }(), Ms = function () {
                function t(t, n) {
                    this.Tt = t,
                        this.Et = n,
                        this.yr = [],
                        this.mr = {},
                        this.br = {},
                        this.Sr = [],
                        this.kr = 0;
                    var i = vn.DefaultOrgSettings;
                    this.initialize({
                        requests: i.HttpRequestHeadersAllowlist,
                        responses: i.HttpResponseHeadersAllowlist,
                        maxAjaxPayloadLength: i.MaxAjaxPayloadLength
                    })
                }
                return t.prototype._r = function (t) {
                    for (var n = !1, i = !1, r = [], e = [], s = 0, o = this.yr; s < o.length; s++) {
                        var u = o[s]
                            , a = u.urlPattern
                            , c = u.reqFields
                            , h = u.rspFields;
                        if (n && i)
                            break;
                        a.test(t) && (!1 === c && (r = [!1],
                            n = !0),
                            n || r.push(c),
                            !1 === h && (e = [!1],
                                i = !0),
                            i || e.push(h))
                    }
                    return [r, e]
                }
                    ,
                    t.prototype.Ar = function (t) {
                        this.Sr.push(t)
                    }
                    ,
                    t.prototype.setWatches = function (t) {
                        this.yr = t.map(function (t) {
                            return {
                                urlPattern: new RegExp(t.URLRegex),
                                reqFields: Bs(t.RecordReq, t.ReqAllowlist),
                                rspFields: Bs(t.RecordRsp, t.RspAllowlist)
                            }
                        })
                    }
                    ,
                    t.prototype.initialize = function (t) {
                        var n = this
                            , i = t.requests
                            , r = t.responses
                            , e = t.maxAjaxPayloadLength;
                        this.mr = {},
                            this.br = {},
                            null == i || i.forEach(function (t) {
                                return n.mr[t] = !0
                            }),
                            null == r || r.forEach(function (t) {
                                return n.br[t] = !0
                            }),
                            this.kr = e || vn.DefaultOrgSettings.MaxAjaxPayloadLength
                    }
                    ,
                    t.prototype.addHeaderAllowlist = function (t, n) {
                        var i = this;
                        null == t || t.forEach(function (t) {
                            return i.mr[t] = !0
                        }),
                            null == n || n.forEach(function (t) {
                                return i.br[t] = !0
                            })
                    }
                    ,
                    t.prototype.tick = function () {
                        for (var t = 0; t < this.Sr.length; t++)
                            this.Et.enqueue({
                                Kind: Pt.AJAX_REQUEST,
                                Args: this.Sr[t]
                            });
                        this.Sr = []
                    }
                    ,
                    t.prototype.startRequest = function (t, n, i, r) {
                        var s, o;
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var u, a, c, h, f, v, l, d, w, g, y, m;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return Os.test(n) ? [2] : (u = p(),
                                                    a = function (t, n) {
                                                        return Ee.resolveToDocument(t, n)
                                                    }(this.Tt.window, n),
                                                    c = this._r(a),
                                                    h = c[0],
                                                    f = c[1],
                                                    [4, this.Tr(h, i)]);
                                            case 1:
                                                return v = e.sent(),
                                                    [4, r["catch"](function () {
                                                        return {
                                                            status: 0,
                                                            data: {
                                                                headers: {
                                                                    forEach: function () { }
                                                                },
                                                                body: void 0
                                                            }
                                                        }
                                                    })];
                                            case 2:
                                                return l = e.sent(),
                                                    d = l.status,
                                                    w = l.data,
                                                    g = p() - u,
                                                    [4, this.Er(f, w)];
                                            case 3:
                                                return y = e.sent(),
                                                    m = [t, He(a, {
                                                        source: "event",
                                                        type: Pt.AJAX_REQUEST
                                                    }), g, d, v.headers, y.headers, u, v.size, y.size, null !== (s = v.text) && void 0 !== s ? s : null, null !== (o = y.text) && void 0 !== o ? o : null, v.legibility, y.legibility],
                                                    this.Ar(m),
                                                    [2];
                                        }
                                    })
                            })
                    }
                    ,
                    t.prototype.Tr = function (t, n) {
                        return Fs(this.mr, t, this.kr, n)
                    }
                    ,
                    t.prototype.Er = function (t, n) {
                        return Fs(this.br, t, this.kr, n)
                    }
                    ,
                    t
            }();
            function Rs(t) {
                return 0 === t.length || t.indexOf(!1) > -1
            }
            function Ps(t, n, i) {
                return [t.length, Ds(t, n, i)]
            }
            function Ns(t, n, i) {
                var r = void 0;
                return Rs(n) || (r = _s(t, i, n)),
                    [Hs(t), r]
            }
            function Ls(t, n) {
                var i = t.byteLength
                    , r = void 0;
                return Rs(n) || (r = "[ArrayBuffer]"),
                    [i, r]
            }
            function Us(t, n, i) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var r, s, o, u, a;
                        return (0,
                            e.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        if (s = (r = t).size,
                                            Rs(n))
                                            return [2, [s, void 0]];
                                        switch (r.type) {
                                            case "application/json":
                                            case "application/vnd.api+json":
                                            case "text/plain":
                                                return [3, 1];
                                        }
                                        return [3, 4];
                                    case 1:
                                        return e.trys.push([1, 3, , 4]),
                                            [4, r.text()["catch"](function (t) {
                                                Ot.sendToBugsnag(t, "warning")
                                            })];
                                    case 2:
                                        return (o = e.sent()) && (u = Ds(o, n, i)) ? [2, [s, u]] : [3, 4];
                                    case 3:
                                        return a = e.sent(),
                                            Ot.sendToBugsnag(a, "warning"),
                                            [3, 4];
                                    case 4:
                                        return [2, [s, "[Blob]"]];
                                }
                            })
                    })
            }
            function Hs(t) {
                try {
                    return o.jsonStringify(t).length
                } catch (t) { }
                return 0
            }
            function Ds(t, n, i) {
                if (!Rs(n))
                    try {
                        return _s(o.jsonParse(t), i, n)
                    } catch (r) {
                        return n.length > 0 && n.every(function (t) {
                            return !0 === t
                        }) ? t.slice(0, i) : void 0
                    }
            }
            function Bs(t, n) {
                switch (t) {
                    default:
                    case nn.Elide:
                        return !1;
                    case nn.Record:
                        return !0;
                    case nn.Allowlist:
                        try {
                            return Ss(n)
                        } catch (t) {
                            return !1
                        }
                }
            }
            function Fs(t, n, i, r) {
                var s;
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var o, u, a, c, h, f, v;
                        return (0,
                            e.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return o = "",
                                            null === (s = r.headers) || void 0 === s || s.forEach(function (n, i) {
                                                var r = i.toLowerCase()
                                                    , e = t[r];
                                                o += r + (e ? ": " + n : "") + "\r\n"
                                            }),
                                            "function" != typeof (u = null == r ? void 0 : r.body) ? [3, 2] : [4, u()];
                                    case 1:
                                        return a = e.sent(),
                                            [3, 3];
                                    case 2:
                                        a = u,
                                            e.label = 3;
                                    case 3:
                                        return [4, Ws(n, a, i)];
                                    case 4:
                                        return c = e.sent(),
                                            h = c[0],
                                            f = c[1],
                                            v = 0 !== h || f ? $t.NotEmpty : $t.Unknown,
                                            [2, {
                                                headers: o,
                                                text: f,
                                                size: h,
                                                legibility: v
                                            }];
                                }
                            })
                    })
            }
            function Ws(t, n, i) {
                return void 0 === i && (i = vn.DefaultOrgSettings.MaxAjaxPayloadLength),
                    (0,
                        e.__awaiter)(this, void 0, Ni, function () {
                            var r;
                            return (0,
                                e.__generator)(this, function (e) {
                                    if (null == n)
                                        return [2, [0, void 0]];
                                    switch (typeof n) {
                                        default:
                                            return [2, [-1, Rs(t) ? void 0 : "[unknown]"]];
                                        case "string":
                                            return [2, Ps(n, t, i)];
                                        case "object":
                                            switch (r = n.constructor) {
                                                case Object:
                                                default:
                                                    return [2, Ns(n, t, i)];
                                                case Blob:
                                                    return [2, Us(n, t, i)];
                                                case ArrayBuffer:
                                                    return [2, Ls(n, t)];
                                                case Document:
                                                case FormData:
                                                case URLSearchParams:
                                                case ReadableStream:
                                                    return [2, [-1, Rs(t) ? void 0 : "" + r.name]];
                                            }
                                    }
                                    return [2]
                                })
                        })
            }
            function zs(t) {
                return t ? nt(t) ? {
                    forEach: function (n) {
                        for (var i = 0, r = t; i < r.length; i++) {
                            var e = r[i]
                                , s = e[0];
                            n(e[1], s)
                        }
                    }
                } : "function" == typeof t.forEach ? t : {
                    forEach: function (n) {
                        for (var i in t)
                            Object.prototype.hasOwnProperty.call(t, i) && n(t[i], i)
                    }
                } : t
            }
            function Vs(t) {
                return t ? t.sheet : void 0
            }
            function qs(t) {
                try {
                    return t ? t.cssRules || t.rules : void 0
                } catch (t) {
                    return
                }
            }
            !function (t) {
                t[t.CSS_INHERIT = 0] = "CSS_INHERIT",
                    t[t.CSS_PRIMITIVE_VALUE = 1] = "CSS_PRIMITIVE_VALUE",
                    t[t.CSS_VALUE_LIST = 2] = "CSS_VALUE_LIST",
                    t[t.CSS_CUSTOM = 3] = "CSS_CUSTOM"
            }(Es || (Es = {})),
                function (t) {
                    t[t.CSS_UNKNOWN = 0] = "CSS_UNKNOWN",
                        t[t.CSS_NUMBER = 1] = "CSS_NUMBER",
                        t[t.CSS_PERCENTAGE = 2] = "CSS_PERCENTAGE",
                        t[t.CSS_EMS = 3] = "CSS_EMS",
                        t[t.CSS_EXS = 4] = "CSS_EXS",
                        t[t.CSS_PX = 5] = "CSS_PX",
                        t[t.CSS_CM = 6] = "CSS_CM",
                        t[t.CSS_MM = 7] = "CSS_MM",
                        t[t.CSS_IN = 8] = "CSS_IN",
                        t[t.CSS_PT = 9] = "CSS_PT",
                        t[t.CSS_PC = 10] = "CSS_PC",
                        t[t.CSS_DEG = 11] = "CSS_DEG",
                        t[t.CSS_RAD = 12] = "CSS_RAD",
                        t[t.CSS_GRAD = 13] = "CSS_GRAD",
                        t[t.CSS_MS = 14] = "CSS_MS",
                        t[t.CSS_S = 15] = "CSS_S",
                        t[t.CSS_HZ = 16] = "CSS_HZ",
                        t[t.CSS_KHZ = 17] = "CSS_KHZ",
                        t[t.CSS_DIMENSION = 18] = "CSS_DIMENSION",
                        t[t.CSS_STRING = 19] = "CSS_STRING",
                        t[t.CSS_URI = 20] = "CSS_URI",
                        t[t.CSS_IDENT = 21] = "CSS_IDENT",
                        t[t.CSS_ATTR = 22] = "CSS_ATTR",
                        t[t.CSS_COUNTER = 23] = "CSS_COUNTER",
                        t[t.CSS_RECT = 24] = "CSS_RECT",
                        t[t.CSS_RGBCOLOR = 25] = "CSS_RGBCOLOR",
                        t[t.CSS_VW = 26] = "CSS_VW",
                        t[t.CSS_VH = 27] = "CSS_VH",
                        t[t.CSS_VMIN = 28] = "CSS_VMIN",
                        t[t.CSS_VMAX = 29] = "CSS_VMAX"
                }(Cs || (Cs = {}));
            var $s = "EventQueue not defined for 'withEventQueueFor', likely caused by holding ref to callback"
                , Gs = "_fs_stylesheet_hooked"
                , Xs = ["CSSMediaRule", "CSSSupportsRule"]
                , Qs = function () {
                    function t(t, n, i) {
                        var r = this;
                        void 0 === i && (i = Vi),
                            this.Tt = t,
                            this.Et = n,
                            this.Bt = [],
                            this.Cr = [],
                            this.Ir = 1,
                            this.jr = !1,
                            this.Or = new Map,
                            this.Kr = new tt,
                            this.Mr = new tt,
                            this.Rr = 0,
                            this.Pr = new tt,
                            this.Nr = new qi(1e4, 1e4, function () {
                                return setTimeout(function () {
                                    r.Et.enqueue({
                                        Kind: Pt.FAIL_THROTTLED,
                                        Args: [Jt.StyleSheetHooks]
                                    }),
                                        r.stop()
                                })
                            }
                            ),
                            this.addInsert = this.Nr.guard(this.addInsert),
                            this.addDelete = this.Nr.guard(this.addDelete),
                            this.Lr = new i(function () {
                                r.Ur()
                            }
                                , 50),
                            this.Hr = dt(function (t, n) {
                                var i, e;
                                if (!(null === (i = t.parentRule) || void 0 === i ? void 0 : i.parentStyleSheet) || !r.jr)
                                    return !0;
                                var s = t.parentRule;
                                return r.Or.has(s) || r.Or.set(s, new Set),
                                    null === (e = r.Or.get(s)) || void 0 === e || e.add(n),
                                    r.Lr.isRunning() || r.Lr.start(),
                                    !0
                            })
                    }
                    return t.prototype.start = function () {
                        var t = this;
                        this.Nr.open();
                        var n = this.Tt.window;
                        if (n.CSSStyleSheet && n.StyleSheet) {
                            var i = n.CSSStyleSheet.prototype;
                            this.sr(i),
                                this.Dr(n),
                                this.Br(n),
                                this.Cr.push(kt(n.StyleSheet, "disabled", function (n, i) {
                                    return t.onDisableSheet(n, i)
                                }), kt(n.Document, "adoptedStyleSheets", function (n, i) {
                                    return t.onSetAdoptedStyleSheets(n)
                                }), kt(n.ShadowRoot, "adoptedStyleSheets", function (n, i) {
                                    return t.onSetAdoptedStyleSheets(n)
                                })),
                                this.jr = !0
                        }
                    }
                        ,
                        t.prototype.Dr = function (t) {
                            var n, i, r = this, e = function (t) {
                                var n = St(t, "insertRule");
                                n && (n.afterSync(function (t) {
                                    r.Fr(t.that, t.args[0], t.args[1])
                                }),
                                    r.Bt.push(n)),
                                    (n = St(t, "deleteRule")) && (n.afterSync(function (t) {
                                        r.Wr(t.that, t.args[0])
                                    }),
                                        r.Bt.push(n))
                            };
                            if ("function" == typeof (null === (n = t.CSSGroupingRule) || void 0 === n ? void 0 : n.prototype.insertRule))
                                e(t.CSSGroupingRule.prototype);
                            else
                                for (var s = 0, o = Xs; s < o.length; s++) {
                                    var u = null === (i = t[o[s]]) || void 0 === i ? void 0 : i.prototype;
                                    u && e(u)
                                }
                        }
                        ,
                        t.prototype.Br = function (t) {
                            var n = this;
                            if (!this.jr) {
                                var i = St(CSSStyleDeclaration.prototype, "setProperty");
                                i && (i.afterSync(function (t) {
                                    n.Hr(t.that, t.args[0])
                                }),
                                    this.Bt.push(i));
                                var r = CSSStyleRule.prototype
                                    , s = Object.getOwnPropertyDescriptor(r, "style");
                                this.zr || (this.zr = null == s ? void 0 : s.get);
                                var o = this;
                                this.Vr = function () {
                                    var t, n = null === (t = null == s ? void 0 : s.get) || void 0 === t ? void 0 : t.apply(this);
                                    return dt(function () {
                                        n = o.qr(n)
                                    })(),
                                        n
                                }
                                    ;
                                try {
                                    Object.defineProperty(r, "style", (0,
                                        e.__assign)((0,
                                            e.__assign)({}, s), {
                                            get: o.Vr
                                        }))
                                } catch (t) { }
                            }
                        }
                        ,
                        t.prototype.qr = function (t) {
                            var n = this.Kr.get(t);
                            if (n)
                                return n;
                            var i = function (t, n, i) {
                                if ("function" != typeof t.Proxy)
                                    return n;
                                var r = new t.Proxy(n, {
                                    get: function (t, n) {
                                        var i = t[n];
                                        return "function" != typeof i ? i : function () {
                                            for (var n = [], e = 0; e < arguments.length; e++)
                                                n[e] = arguments[e];
                                            var s = this;
                                            return s === r && (s = t),
                                                i.apply(s, n)
                                        }
                                    },
                                    set: function (t, n, r) {
                                        var e = t[n];
                                        return t[n] = r,
                                            "function" == typeof e || "symbol" == typeof n || i(t, n),
                                            !0
                                    }
                                });
                                return r
                            }(this.Tt.window, t, Y(this.Hr));
                            return this.Kr.set(t, i),
                                i
                        }
                        ,
                        t.prototype.Ur = function () {
                            var t = this
                                , n = this.Or;
                            this.Or = new Map,
                                n.forEach(function (n, i) {
                                    var r = i.parentStyleSheet;
                                    if (r) {
                                        var e = t.$r(r, i);
                                        if (void 0 !== e) {
                                            var s = {};
                                            n.forEach(function (t) {
                                                s[t] = i.style[t]
                                            }),
                                                t.Gr(r, function (t) {
                                                    t.enqueue({
                                                        Kind: Pt.CSSRULE_UPDATE,
                                                        Args: [e, s]
                                                    })
                                                })
                                        }
                                    }
                                })
                        }
                        ,
                        t.prototype.Fr = function (t, n, i) {
                            var r = this.Xr(t);
                            this.addInsert(t.parentStyleSheet, n, i, r)
                        }
                        ,
                        t.prototype.Wr = function (t, n) {
                            var i = this.Xr(t);
                            this.addDelete(t.parentStyleSheet, n, i)
                        }
                        ,
                        t.prototype.Xr = function (t) {
                            for (var n = [], i = t; i.parentRule || i.parentStyleSheet;) {
                                var r;
                                if (!(null == (r = i.parentRule ? i.parentRule : i.parentStyleSheet) ? void 0 : r.cssRules))
                                    return Ot.sendToBugsnag("Could not find a path to target rule", "warning"),
                                        n;
                                var e = this.Qr(r.cssRules, i);
                                if (e > -1) {
                                    if (n.unshift(e),
                                        r instanceof CSSStyleSheet)
                                        break;
                                    i = r
                                } else
                                    Ot.sendToBugsnag("Could not find intermediate rule in parent", "warning")
                            }
                            return n
                        }
                        ,
                        t.prototype.Qr = function (t, n) {
                            for (var i = 0; i < t.length; i++)
                                if (t[i] === n)
                                    return i;
                            return -1
                        }
                        ,
                        t.prototype.sr = function (t) {
                            var n, i = this;
                            (n = St(t, "insertRule")) && (n.afterSync(function (t) {
                                i.addInsert(t.that, t.args[0], t.args[1])
                            }),
                                this.Bt.push(n)),
                                (n = St(t, "deleteRule")) && (n.afterSync(function (t) {
                                    i.addDelete(t.that, t.args[0])
                                }),
                                    this.Bt.push(n)),
                                (n = St(t, "replaceSync")) && (n.afterSync(function (t) {
                                    i.snapshotConstructedStylesheet(t.that, !0)
                                }),
                                    this.Bt.push(n)),
                                (n = St(t, "replace")) && (n.afterSync(function (t) {
                                    return (0,
                                        e.__awaiter)(i, void 0, Ni, function () {
                                            return (0,
                                                e.__generator)(this, function (n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return "object" != typeof t.result || "function" != typeof t.result.then ? [2] : [4, t.result];
                                                        case 1:
                                                            return n.sent(),
                                                                this.snapshotConstructedStylesheet(t.that, !0),
                                                                [2];
                                                    }
                                                })
                                        })
                                }),
                                    this.Bt.push(n)),
                                Object.defineProperty(t, Gs, {
                                    value: !0,
                                    configurable: !0
                                })
                        }
                        ,
                        t.prototype.onSetAdoptedStyleSheets = function (t) {
                            if (ti(t)) {
                                var n = t.adoptedStyleSheets;
                                if (n) {
                                    for (var i = [], r = 0, e = n; r < e.length; r++) {
                                        var s = e[r]
                                            , o = this.snapshotConstructedStylesheet(s);
                                        i.push(o),
                                            !0 === s.disabled && this.onDisableSheet(s, !0)
                                    }
                                    this.Et.enqueue({
                                        Kind: Pt.ADOPTED_STYLESHEETS,
                                        Args: [ti(t), i]
                                    })
                                }
                            }
                        }
                        ,
                        t.prototype.snapshotEl = function (t, n) {
                            void 0 === n && (n = 0);
                            var i = ti(t);
                            if (i) {
                                var r = Vs(t);
                                r && this.Yr([Yt.Node, i], r, n)
                            }
                        }
                        ,
                        t.prototype.snapshotConstructedStylesheet = function (t, n) {
                            void 0 === n && (n = !1);
                            var i = io(this.Pr, t);
                            return n || void 0 === i ? (void 0 === i && (i = this.Ir++,
                                function (t, n, i) {
                                    t.set(n, i)
                                }(this.Pr, t, i)),
                                this.Yr([Yt.Sheet, i], t),
                                i) : i
                        }
                        ,
                        t.prototype.Yr = function (t, n, i) {
                            void 0 === i && (i = 0),
                                this.Et.enqueue({
                                    Kind: Pt.RESET_CSS_SHEET,
                                    Args: [t]
                                });
                            var r = qs(n);
                            if (r) {
                                for (var e = [], s = i; s < r.length; s++)
                                    try {
                                        var o = ro(Js(r[s]));
                                        e.push(o)
                                    } catch (t) {
                                        e.push("html {}")
                                    }
                                this.Et.enqueue({
                                    Kind: Pt.CSSRULE_INSERT,
                                    Args: [t, e, i]
                                })
                            }
                        }
                        ,
                        t.prototype.addInsert = function (t, n, i, r) {
                            var e = no(this.Pr, t, Yt.Node);
                            if (e && "string" == typeof n) {
                                var s = [e, [ro(n)]];
                                void 0 !== i && (s[2] = i),
                                    void 0 !== r && (s[3] = r),
                                    this.Gr(t, function (t) {
                                        return t.enqueue({
                                            Kind: Pt.CSSRULE_INSERT,
                                            Args: s
                                        })
                                    })
                            }
                        }
                        ,
                        t.prototype.addDelete = function (t, n, i) {
                            var r = no(this.Pr, t, Yt.Node);
                            r && this.Gr(t, function (t) {
                                return t.enqueue({
                                    Kind: Pt.CSSRULE_DELETE,
                                    Args: i ? [r, n, i] : [r, n]
                                })
                            })
                        }
                        ,
                        t.prototype.onDisableSheet = function (t, n) {
                            var i = no(this.Pr, t, Yt.Node);
                            i && this.Gr(t, function (t) {
                                return t.enqueue({
                                    Kind: Pt.DISABLE_STYLESHEET,
                                    Args: [i, !!n]
                                })
                            })
                        }
                        ,
                        t.prototype.Gr = function (t, n) {
                            if (t.ownerNode)
                                return i = this.Tt,
                                    r = t.ownerNode,
                                    e = n,
                                    void ((s = j(function (t) {
                                        var n = t.ownerDocument;
                                        return n && n.defaultView
                                    }(r) || i.window)) && "function" == typeof s._withEventQueue && s._withEventQueue(i.recording.pageSignature(), function (t) {
                                        var n = t;
                                        e({
                                            enqueue: function (t) {
                                                Rt(null != n, $s) && n.enqueue(t)
                                            },
                                            enqueueFirst: function (t) {
                                                Rt(null != n, $s) && n.enqueueFirst(t)
                                            }
                                        }),
                                            n = null
                                    }));
                            var i, r, e, s;
                            n(this.Et)
                        }
                        ,
                        t.prototype.$r = function (t, n) {
                            var i;
                            if (this.Mr.has(n))
                                return [Wt.Cached, this.Mr.get(n)];
                            var r, e = void 0;
                            window.CSSGroupingRule && n.parentRule && n.parentRule instanceof CSSGroupingRule ? (e = this.Xr(n.parentRule),
                                r = n.parentRule.cssRules) : r = t.cssRules;
                            var s = Array.prototype.indexOf.call(r, n);
                            if (-1 !== s) {
                                var o = no(this.Pr, t, Yt.Node);
                                if (o) {
                                    var u = this.Rr++;
                                    return this.Mr.set(n, u),
                                        (null !== (i = null == e ? void 0 : e.length) && void 0 !== i ? i : 0) > 0 ? [Wt.Index, o, s, e] : [Wt.Index, o, s]
                                }
                            }
                        }
                        ,
                        t.prototype.stop = function () {
                            this.jr = !1,
                                this.Nr.close();
                            for (var t = 0, n = this.Bt; t < n.length; t++) {
                                var i = n[t];
                                i.disable(),
                                    Object.defineProperty(i.getTarget(), Gs, {
                                        value: !1,
                                        configurable: !0
                                    })
                            }
                            this.Bt = [];
                            for (var r = 0, s = this.Cr; r < s.length; r++)
                                (0,
                                    s[r])();
                            if (this.Cr = [],
                                this.zr) {
                                this.Lr.stop();
                                try {
                                    var o = CSSStyleRule.prototype
                                        , u = Object.getOwnPropertyDescriptor(o, "style");
                                    if ((null == u ? void 0 : u.get) !== this.Vr)
                                        return;
                                    Object.defineProperty(o, "style", (0,
                                        e.__assign)((0,
                                            e.__assign)({}, u), {
                                            get: this.zr
                                        }))
                                } catch (t) { }
                            }
                        }
                        ,
                        t.prototype.ensureHook = function (t) {
                            this.Jr(t) || t[Gs] || this.sr(t)
                        }
                        ,
                        t.prototype.removeHook = function (t) {
                            if (!this.Jr(t))
                                for (var n = 0; n < this.Bt.length; n++) {
                                    var i = this.Bt[n]
                                        , r = i.getTarget();
                                    if (t === r) {
                                        i.disable(),
                                            this.Bt.splice(n, 1),
                                            Object.defineProperty(r, Gs, {
                                                value: !1,
                                                configurable: !0
                                            });
                                        break
                                    }
                                }
                        }
                        ,
                        t.prototype.Jr = function (t) {
                            return Object.getPrototypeOf(t) === this.Tt.window.CSSStyleSheet
                        }
                        ,
                        t
                }()
                , Ys = document.createElement("div");
            Ys.style.width = "initial";
            var Js = "" != Ys.style.cssText ? function (t) {
                return t.cssText
            }
                : function t(n, i) {
                    if (void 0 === i && (i = 0),
                        !Rt(i <= 20, "No deep recursion for CSS rules"))
                        return "html { /* Depth limit exceeded! */ }";
                    var r = function (t) {
                        switch (t.type) {
                            case CSSRule.PAGE_RULE:
                                var n = t.selectorText || "";
                                return n && st(n, "@page") ? n : "@page " + n;
                            case CSSRule.KEYFRAME_RULE:
                                return t.keyText;
                            case CSSRule.STYLE_RULE:
                                return t.selectorText;
                            case CSSRule.MEDIA_RULE:
                                return "@media " + t.media.mediaText;
                            case CSSRule.KEYFRAMES_RULE:
                                return "@keyframes " + t.name;
                            case CSSRule.SUPPORTS_RULE:
                                return "@supports " + t.conditionText;
                            default:
                                return null;
                        }
                    }(n);
                    if (null == r)
                        return n.cssText;
                    var e = function (n, i) {
                        var r, e, s, o, u = n, a = u.style;
                        if (a) {
                            for (var c = "", h = 0; h < a.length; h++) {
                                var f = a[h]
                                    , v = void 0 !== (o = function (t, n) {
                                        var i = t;
                                        if ("function" == typeof i.getPropertyCSSValue) {
                                            var r = i.getPropertyCSSValue(n);
                                            if (null != r) {
                                                var e;
                                                switch (r.cssValueType) {
                                                    case Es.CSS_PRIMITIVE_VALUE:
                                                        e = r;
                                                        break;
                                                    case Es.CSS_VALUE_LIST:
                                                        if (1 !== r.length)
                                                            return;
                                                        var s = r.item(0);
                                                        if (null == s)
                                                            return;
                                                        if (s.cssValueType !== Es.CSS_PRIMITIVE_VALUE)
                                                            return;
                                                        e = s;
                                                        break;
                                                    default:
                                                        return;
                                                }
                                                if (e.primitiveType === Cs.CSS_STRING) {
                                                    var o = Te();
                                                    Is || (Is = o.createElement("div"));
                                                    var u = e.cssText;
                                                    try {
                                                        Is.style.cssText = n + ": \"" + u + "\";";
                                                        var a = Is.style.getPropertyCSSValue(n);
                                                        if (null == a)
                                                            return;
                                                        if (u !== a.cssText)
                                                            return
                                                    } catch (t) {
                                                        return
                                                    } finally {
                                                        Is.style.cssText = ""
                                                    }
                                                    return "\"" + u + "\""
                                                }
                                            }
                                        }
                                    }(e = a, s = f)) ? o : e.getPropertyValue(s);
                                ("initial" === v || ("\"" === (r = v)[0] || "'" === r[0]) && r[r.length - 1] === r[0]) && (c += f + ": " + v,
                                    "important" === a.getPropertyPriority(f) && (c += " !important"),
                                    c += "; ")
                            }
                            return [a.cssText, c].filter(Boolean).join("\n")
                        }
                        var l = u.cssRules;
                        if (!l)
                            return null;
                        var d = "";
                        for (h = 0; h < l.length; h++)
                            d += t(l[h], i + 1);
                        return d
                    }(n, i);
                    return null == e ? n.cssText : r + " { " + e + "} "
                }
                , Zs = /^\s*$/;
            function to(t) {
                var n = t.textContent || "";
                if (n.length > 5e5)
                    return !1;
                var i = qs(Vs(t));
                return !!i && (!!("style" === Un(t) && i.length > 0 && Zs.test(n)) || function (t) {
                    var n;
                    try {
                        if ((null === (n = t.classList) || void 0 === n ? void 0 : n.contains("fs-css-in-js")) || t.hasAttribute("data-fela-type") || t.hasAttribute("data-aphrodite"))
                            return !0
                    } catch (t) {
                        Ot.sendToBugsnag(t, "error")
                    }
                    return !1
                }(t))
            }
            function no(t, n, i) {
                var r = function (t, n) {
                    var i = io(t, n);
                    if (i)
                        return [Yt.Sheet, i];
                    var r = ti(n.ownerNode);
                    return r ? [Yt.Node, r] : void 0
                }(t, n);
                if (r) {
                    var e = r[0]
                        , s = r[1];
                    return e === i ? s : r
                }
            }
            function io(t, n) {
                return t.get(n)
            }
            function ro(t) {
                return t.length <= Ke ? t : (t.length,
                    ":root { --fs-dropped-large-rule: 0 }")
            }
            var eo = function () {
                function t(t, n, i) {
                    this.Tt = t,
                        this.Zr = n,
                        this.C = i.createChild()
                }
                return t.prototype.start = function () {
                    var t = this
                        , n = this.Tt.window.document;
                    this.C.addCustom(n, this.te(), !0, function (n) {
                        t.onFullscreenChange(n)
                    }),
                        this.C.addCustom(n, this.ne(), !0, function (n) {
                            t.onFullscreenError(n)
                        })
                }
                    ,
                    t.prototype.stop = function () {
                        this.C && this.C.clear()
                    }
                    ,
                    t.prototype.onFullscreenChange = function (t) {
                        var n = this.ie();
                        if (n) {
                            var i = ti(n);
                            this.ee,
                                this.Zr.enqueue({
                                    Kind: Pt.FULLSCREEN,
                                    Args: [i, !0]
                                }),
                                this.ee = i
                        } else
                            this.ee,
                                this.Zr.enqueue({
                                    Kind: Pt.FULLSCREEN,
                                    Args: [this.ee, !1]
                                }),
                                this.ee = void 0
                    }
                    ,
                    t.prototype.onFullscreenError = function (t) {
                        this.Zr.enqueue({
                            Kind: Pt.FULLSCREEN_ERROR,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.ie = function () {
                        var t = this.Tt.window.document;
                        return t[yr(t, "fullscreenElement")]
                    }
                    ,
                    t.prototype.te = function () {
                        return yr(this.Tt.window.document, "onfullscreenchange").slice(2)
                    }
                    ,
                    t.prototype.ne = function () {
                        return yr(this.Tt.window.document, "onfullscreenerror").slice(2)
                    }
                    ,
                    t
            }()
                , so = eo
                , oo = function () {
                    function t(t, n) {
                        this.Et = n,
                            this.ot = null,
                            this.se = {};
                        var i = t.window;
                        "customElements" in i && "get" in i.customElements && "whenDefined" in i.customElements && (this.ot = i.customElements)
                    }
                    return t.prototype.start = function () { }
                        ,
                        t.prototype.stop = function () { }
                        ,
                        t.prototype.onCustomNodeVisited = function (t) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var n, i;
                                    return (0,
                                        e.__generator)(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    if (!this.ot)
                                                        return [2];
                                                    if (n = t.nodeName.toLowerCase(),
                                                        Object.prototype.hasOwnProperty.call(this.se, n))
                                                        return [2];
                                                    r.label = 1;
                                                case 1:
                                                    return r.trys.push([1, 3, , 4]),
                                                        i = !!this.ot.get(n),
                                                        this.se[n] = i,
                                                        [4, this.ot.whenDefined(n)];
                                                case 2:
                                                    return r.sent(),
                                                        this.Et.enqueue({
                                                            Kind: Pt.CUSTOM_ELEMENT_DEFINED,
                                                            Args: [n]
                                                        }),
                                                        [3, 4];
                                                case 3:
                                                    return r.sent(),
                                                        [3, 4];
                                                case 4:
                                                    return [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t
                }()
                , uo = function () {
                    function t(t, n) {
                        this.oe = !1,
                            this.Bt = [],
                            this.Vt = n,
                            this.Wt = t.window,
                            this.oe = ao(this.Wt)
                    }
                    return t.prototype.start = function () {
                        this.Vt.enqueue({
                            Kind: Pt.REC_FEAT_SUPPORTED,
                            Args: [Qt.HTMLDialogElement, this.oe]
                        }),
                            this.oe && (this.Gt("show"),
                                this.Gt("showModal"),
                                this.Gt("close"))
                    }
                        ,
                        t.prototype.stop = function () {
                            this.Bt.forEach(function (t) {
                                return t.disable()
                            }),
                                this.Bt = []
                        }
                        ,
                        t.prototype.Gt = function (t) {
                            var n = this
                                , i = St(this.Wt.HTMLDialogElement.prototype, t);
                            null == i || i.afterSync(function (i) {
                                var r = ti(i.that)
                                    , e = "close" !== t
                                    , s = "showModal" === t;
                                n.Vt.enqueue({
                                    Kind: Pt.DIALOG,
                                    Args: [r, e, s]
                                })
                            }),
                                i && this.Bt.push(i)
                        }
                        ,
                        t
                }()
                , ao = function (t) {
                    return void 0 !== t.HTMLDialogElement
                }
                , co = function (t) {
                    try {
                        return o.elMatches(t, "dialog:modal")
                    } catch (t) {
                        return !0
                    }
                }
                , ho = function () {
                    function t() { }
                    return t.prototype.now = function () {
                        return Date.now()
                    }
                        ,
                        t
                }()
                , fo = new (function () {
                    function t(t, n, i, r) {
                        void 0 === i && (i = n),
                            void 0 === r && (r = new ho),
                            this.ue = t,
                            this.ae = n,
                            this.ce = r,
                            this.he = r.now(),
                            this.fe = i
                    }
                    return t.prototype.hasCapacityFor = function (t) {
                        var n = this.ce.now()
                            , i = (n - this.he) * this.ue;
                        return this.fe = Math.min(this.ae, this.fe + i),
                            this.he = n,
                            this.fe >= t ? (this.fe -= t,
                                [!0, 0]) : [!1, (t - this.fe) / this.ue]
                    }
                        ,
                        t
                }())(2, 2e5)
                , vo = new Set(["measureText", "getImageData", "getError", "getTransform", "isContextLost", "isEnabled", "isFramebuffer", "isProgram", "isRenderbuffer", "isShader", "isTexture"])
                , lo = new Set(["fillText"])
                , po = function () {
                    function t(t, n, i, r) {
                        this.Et = n,
                            this.Hi = i,
                            this._i = r,
                            this.ve = gn.CaptureCanvasOps,
                            this.le = [],
                            this.de = [],
                            this.pe = new WeakMap,
                            this.we = new WeakMap,
                            this.ge = new Set,
                            this.ye = 0,
                            this.me = new WeakMap,
                            this.be = !1,
                            this.Se = new WeakMap,
                            this.ke = new Set,
                            this._e = new WeakMap,
                            this.Ae = 1,
                            this.Te = new WeakMap,
                            this.Ee = 1,
                            this.Ce = 0,
                            this.Ie = !1
                    }
                    return t.prototype.start = function (t) {
                        var n, i = this;
                        if (t.CanvasWatcherMode && (this.Et.enqueue({
                            Kind: Pt.REC_FEAT_SUPPORTED,
                            Args: [Qt.CanvasWatcherEnabled, !0, Qt.CanvasScreenShotMode, t.CanvasWatcherMode === gn.ScreenshotCanvas]
                        }),
                            this.be = !0,
                            this.ve = null !== (n = t.CanvasWatcherMode) && void 0 !== n ? n : gn.CaptureCanvasOps,
                            this.sr("2d", CanvasRenderingContext2D),
                            this.sr("webgl", WebGLRenderingContext),
                            this.ve === gn.ScreenshotCanvas)) {
                            if (!HTMLCanvasElement.prototype.toDataURL)
                                return;
                            this.ye = setInterval(function () {
                                return i.screenshotConnectedCanvases()
                            }, 1e3)
                        }
                    }
                        ,
                        t.prototype.je = function (t, n) {
                            return "object" != typeof n ? [void 0, 0] : (this.Te.has(n) || this.Te.set(n, [t, this.Ee++]),
                                this.Te.get(n))
                        }
                        ,
                        t.prototype.sr = function (t, n) {
                            var i = this;
                            if (n)
                                for (var r = n.prototype, e = function (e) {
                                    if (vo.has(e))
                                        return "continue";
                                    var o = Object.getOwnPropertyDescriptor(r, e);
                                    if ("function" == typeof (null == o ? void 0 : o.value)) {
                                        var u = St(r, e);
                                        u && (u.afterSync(function (n) {
                                            return i.xe(t, e, n.that, n.args, n.result)
                                        }),
                                            s.le.push(u))
                                    } else
                                        "function" == typeof (null == o ? void 0 : o.set) && s.de.push(kt(n, e, s.Oe(t, e)))
                                }, s = this, o = 0, u = Object.keys(r); o < u.length; o++)
                                    e(u[o])
                        }
                        ,
                        t.prototype.Ke = function (t, n) {
                            var i;
                            this.Se.has(t) || this.Se.set(t, []),
                                null === (i = this.Se.get(t)) || void 0 === i || i.push.apply(i, n)
                        }
                        ,
                        t.prototype.Me = function (t) {
                            var n = t instanceof HTMLCanvasElement ? ti(t) : 0;
                            if (n)
                                return n;
                            if (this._e.has(t))
                                return {
                                    id: this._e.get(t)
                                };
                            var i = {
                                id: this.Ae
                            };
                            return this.Re(t, i),
                                this._e.set(t, this.Ae),
                                ++this.Ae,
                                i
                        }
                        ,
                        t.prototype.Re = function (t, n) {
                            this.Et.enqueue({
                                Kind: Pt.CANVAS_DETACHED_DIMENSION,
                                Args: [n, t.width, t.height]
                            })
                        }
                        ,
                        t.prototype.flush = function (t, n) {
                            var i, r;
                            if (this.be) {
                                this.ve === gn.ScreenshotCanvas && t instanceof HTMLCanvasElement && (this.ge.add(t),
                                    this.we.set(t, !0));
                                var e = this.Me(t)
                                    , s = null !== (i = this.Se.get(t)) && void 0 !== i ? i : [];
                                if (this.Se["delete"](t),
                                    s.length > 0) {
                                    var o = n;
                                    if (!o) {
                                        var u = t instanceof HTMLCanvasElement ? Jn(t) : void 0
                                            , a = t instanceof HTMLCanvasElement && Tt(t);
                                        o = null !== (r = null == u ? void 0 : u.mask) && void 0 !== r ? r : a
                                    }
                                    this.Pe(t, e, s, o)
                                }
                                return e
                            }
                        }
                        ,
                        t.prototype.Ne = function (t, n, i, r, e, s, o) {
                            var u;
                            switch (typeof r) {
                                case "string":
                                    return e ? Wn(r) : r;
                                case "number":
                                case "boolean":
                                case "bigint":
                                    return r;
                                case "undefined":
                                    return {
                                        undef: !0
                                    };
                                case "object":
                                    if (!r)
                                        return r;
                                    try {
                                        o.set(r, !0)
                                    } catch (t) { }
                                    var a = null === (u = Object.getPrototypeOf(r)) || void 0 === u ? void 0 : u.constructor
                                        , c = (null == a ? void 0 : a.name) || function (t) {
                                            var n;
                                            if (t) {
                                                var i = t.toString()
                                                    , r = go.exec(i);
                                                return r || (r = yo.exec(i)),
                                                    null === (n = null == r ? void 0 : r[1]) || void 0 === n ? void 0 : n.trim()
                                            }
                                        }(a)
                                        , h = {
                                            ctor: c
                                        };
                                    if (r instanceof Node && (l = ti(r)))
                                        return h.id = l,
                                            h;
                                    switch (c) {
                                        case "Array":
                                            return this.Ce += r.length,
                                                this.Le(t, n, i, r, e, s, o);
                                        case "CanvasGradient":
                                            return h;
                                        case "HTMLImageElement":
                                            var f = He(r.src, {
                                                source: "dom",
                                                type: "canvas"
                                            });
                                            return this._i.record(f),
                                                h.src = f,
                                                h;
                                        case "HTMLCanvasElement":
                                            var v = r
                                                , l = this.flush(v, e);
                                            return h.srcId = l,
                                                h;
                                    }
                                    if (function (t) {
                                        var n;
                                        return !!(null === (n = Object.prototype.toString.call(t)) || void 0 === n ? void 0 : n.match(wo))
                                    }(r))
                                        return this.Te.has(r) ? this.Ue(r, h, e) : (h.typedArray = "[" + r.toString() + "]",
                                            this.Ce += r.length,
                                            h);
                                    if ("object" == typeof r && this.Te.has(r))
                                        return this.Ue(r, h, e);
                                    if (r instanceof WebGLBuffer || r instanceof WebGLTexture) {
                                        var d = void 0;
                                        switch (s) {
                                            case "bindTexture":
                                                d = this.He(t, "createTexture", n, i, r);
                                                break;
                                            case "bindBuffer":
                                                d = this.He(t, "createBuffer", n, i, r);
                                        }
                                        if (void 0 !== d)
                                            return this.Ue(r, h, e)
                                    }
                                    var p = r;
                                    for (var w in h.obj = {},
                                        p) {
                                        try {
                                            switch (typeof p[w]) {
                                                case "function":
                                                    continue;
                                                case "object":
                                                    if (p[w] && o.has(p[w]))
                                                        continue;
                                            }
                                        } catch (t) {
                                            continue
                                        }
                                        ++this.Ce,
                                            h.obj[w] = this.Ne(t, n, i, p[w], e, s, o)
                                    }
                                    return h;
                                default:
                                    return null;
                            }
                        }
                        ,
                        t.prototype.Ue = function (t, n, i) {
                            var r = this.Te.get(t)
                                , e = r[0]
                                , s = r[1];
                            return this.flush(e, i),
                                n.ref = s,
                                delete n.ctor,
                                n
                        }
                        ,
                        t.prototype.He = function (t, n, i, r, e) {
                            var s = this.je(i, e)
                                , o = (s[0],
                                    s[1]);
                            return this.De(r, [[t, wn.Function, n, [], o]]),
                                o
                        }
                        ,
                        t.prototype.Le = function (t, n, i, r, e, s, o) {
                            var u = this;
                            return void 0 === o && (o = new WeakMap),
                                this.Ce += r.length + 1,
                                r.map(function (r) {
                                    return u.Ne(t, n, i, r, e, s, o)
                                })
                        }
                        ,
                        t.prototype.Pe = function (t, n, i, r) {
                            var e = this;
                            if (void 0 === r && (r = !1),
                                !this.Ie) {
                                var s = i.map(function (i) {
                                    var s = i[0]
                                        , o = i[1]
                                        , u = i[2]
                                        , a = i[3]
                                        , c = i[4];
                                    return [s, o, u, e.Le(s, t, n, a, r && lo.has(u), u), c]
                                });
                                if (!this.pe.has(t) && (this.pe.set(t, !0),
                                    i.some(function (t) {
                                        return "2d" === t[0]
                                    }))) {
                                    var o = this.Be(t);
                                    if (o.length > 0)
                                        return o.push.apply(o, s),
                                            void this.De(n, o)
                                }
                                this.De(n, s)
                            }
                        }
                        ,
                        t.prototype.De = function (t, n) {
                            if (!this.Ie) {
                                var i = fo.hasCapacityFor(this.Ce)
                                    , r = i[0];
                                i[1],
                                    this.Ce = 0,
                                    r ? this.Et.enqueue({
                                        Kind: Pt.CANVAS,
                                        Args: [t, n]
                                    }) : this.Ie = !0
                            }
                        }
                        ,
                        t.prototype.Be = function (t) {
                            var n = t.getContext("2d");
                            if (!n)
                                return [];
                            var i = [];
                            if ((n instanceof CanvasRenderingContext2D || n instanceof OffscreenCanvasRenderingContext2D) && "function" == typeof n.getTransform) {
                                var r = n.getTransform();
                                if (!r.isIdentity) {
                                    var e = r.a
                                        , s = r.b
                                        , o = r.c
                                        , u = r.d
                                        , a = r.e
                                        , c = r.f;
                                    i.push(["2d", wn.Function, "transform", [e, s, o, u, a, c], -1])
                                }
                            }
                            return i
                        }
                        ,
                        t.prototype.Fe = function (t, n) {
                            t instanceof HTMLCanvasElement && (this.ve === gn.ScreenshotCanvas ? (this.we.set(t, !0),
                                this.ge.add(t)) : (this.ke.add(t),
                                    this.Ke(t, n)))
                        }
                        ,
                        t.prototype.xe = function (t, n, i, r, e) {
                            for (var s = [], o = 0; o < r.length; o++)
                                s.push(r[o]);
                            var u = this.je(i.canvas, e)
                                , a = (u[0],
                                    u[1]);
                            this.Fe(i.canvas, [[t, wn.Function, n, s, a]])
                        }
                        ,
                        t.prototype.Oe = function (t, n) {
                            var i = this;
                            return function (r, e) {
                                i.Fe(r.canvas, [[t, wn.Set, n, [e], 0]])
                            }
                        }
                        ,
                        t.prototype.stop = function () {
                            this.be = !1,
                                this.le.forEach(function (t) {
                                    return t.disable()
                                }),
                                this.de.forEach(function (t) {
                                    return t()
                                }),
                                this.le = [],
                                this.de = [],
                                this.ye && (clearInterval(this.ye),
                                    this.ye = 0)
                        }
                        ,
                        t.prototype.screenshotConnectedCanvases = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var t, n, i = this;
                                    return (0,
                                        e.__generator)(this, function (r) {
                                            switch (r.label) {
                                                case 0:
                                                    return t = [],
                                                        n = [],
                                                        this.ge.forEach(function (r) {
                                                            var e = ti(r);
                                                            Tt(r) && e ? i.we.has(r) && n.push(i.We(r, e)) : t.push(r)
                                                        }),
                                                        t.forEach(function (t) {
                                                            return i.ge["delete"](t)
                                                        }),
                                                        [4, Ni.all(n)];
                                                case 1:
                                                    return r.sent(),
                                                        [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.We = function (t, n) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var i, r, s, o;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return e.trys.push([0, 2, , 3]),
                                                        i = t.toDataURL(),
                                                        r = this.me.get(t),
                                                        [4, this.Hi.uploadDataUrlIfNeeded(i, function (t) {
                                                            var n;
                                                            return t.url !== r && !!(null === (n = t.contentType) || void 0 === n ? void 0 : n.match(/^image/i))
                                                        })];
                                                case 1:
                                                    return (s = e.sent()) ? (o = s.url,
                                                        this.me.set(t, o),
                                                        s.url === r ? [2] : (this.De(n, [["2d", wn.Function, "drawImage", [{
                                                            ctor: "HTMLImageElement",
                                                            src: o
                                                        }, 0, 0], 0]]),
                                                            [3, 3])) : [2];
                                                case 2:
                                                    return Ft("Ex during screenshot", e.sent()),
                                                        [3, 3];
                                                case 3:
                                                    return [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.ze = function () {
                            var t = this
                                , n = [];
                            this.ke.forEach(function (i) {
                                !ti(i) && Tt(i) && (t.Se["delete"](i),
                                    n.push(i))
                            });
                            for (var i = 0, r = n; i < r.length; i++) {
                                var e = r[i];
                                this.ke["delete"](e)
                            }
                        }
                        ,
                        t.prototype.tick = function () {
                            var t = this;
                            this.be && (this.ze(),
                                this.ve !== gn.ScreenshotCanvas && this.ke.forEach(function (n) {
                                    var i = ti(n);
                                    if (i) {
                                        var r = Jn(n)
                                            , e = t.Se.get(n);
                                        e && 0 !== e.length && (t.Pe(n, i, e, !!(null == r ? void 0 : r.mask)),
                                            t.Se["delete"](n))
                                    }
                                }))
                        }
                        ,
                        t
                }()
                , wo = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/
                , go = /^\[object ([^\]]+?)(?:Constructor)?\]/
                , yo = /^function ([^(]+)/
                , mo = /^\s*at .*(\S+:\d+|native|(<anonymous>))/m
                , bo = /^(eval@)?(\[native code\])?$/;
            function So(t, n, i, r, e) {
                return [n || "", t(i || ""), parseInt(r || "-1", 10), parseInt(e || "-1", 10)]
            }
            function ko(t) {
                if (!t || -1 === t.indexOf(":"))
                    return ["", "", ""];
                var n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
                return n ? [n[1] || "", n[2] || "", n[3] || ""] : ["", "", ""]
            }
            var _o = ["_fs_debug", "assert", "debug", "error", "info", "log", "trace", "warn"]
                , Ao = _o.filter(function (t) {
                    return !/debug/.test(t)
                });
            function To(t, n) {
                return Qe(rt(t) ? t.slice(0, n) : Li(t, n))
            }
            function Eo(t, n) {
                var i = (n ? n + " " : "") + To(function (t) {
                    if (it(t)) {
                        try {
                            if ("function" == typeof t.toString)
                                return t.toString()
                        } catch (t) { }
                        return t.message
                    }
                }(t.error) || t.message, 1e3)
                    , r = To(t.filename, 100)
                    , s = it(t.lineno) ? -1 : t.lineno;
                return (0,
                    e.__spreadArray)([i, r, s], function (t, n) {
                        if (!it(n) || !rt(n.stack))
                            return [];
                        var i = n;
                        return i.stack.match(mo) ? function (t, n) {
                            return n.split("\n").filter(function (t) {
                                return !!t.match(mo)
                            }).map(function (n) {
                                var i = n;
                                i.indexOf("(eval ") > -1 && (i = i.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                                var r = i.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/\(native code\)/, "").split(/\s+/).slice(1)
                                    , e = ko(r.pop())
                                    , s = r.join(" ")
                                    , o = ["eval", "<anonymous>"].indexOf(e[0]) > -1 ? "" : e[0];
                                return So(t, s, o, e[1], e[2])
                            })
                        }(t, i.stack) : function (t, n) {
                            return n.split("\n").filter(function (t) {
                                return !t.match(bo)
                            }).map(function (n) {
                                var i = n;
                                if (i.indexOf(" > eval") > -1 && (i = i.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")),
                                    -1 === i.indexOf("@") && -1 === i.indexOf(":"))
                                    return [i, "", -1, -1];
                                var r = i.split("@")
                                    , e = ko(r.pop())
                                    , s = r.join("@");
                                return So(t, s, e[0], e[1], e[2])
                            })
                        }(t, i.stack)
                    }(Qe, t.error))
            }
            var Co, Io, jo = function () {
                function t(t, n, i) {
                    this.Et = n,
                        this.Ut = !1,
                        this.Ve = !1,
                        this.qe = 0,
                        this.Bt = [],
                        this.$e = vn.DefaultOrgSettings.MaxConsoleLogPerPage,
                        this.ii = t.window,
                        this.C = i.createChild()
                }
                return t.prototype.initializeMaxLogsPerPage = function (t) {
                    this.$e = t || vn.DefaultOrgSettings.MaxConsoleLogPerPage
                }
                    ,
                    t.prototype.Ge = function () {
                        return "\"[received more than " + this.$e + " messages]\""
                    }
                    ,
                    t.prototype.start = function (t) {
                        var n = this;
                        if (t.ConsoleWatcher && (this.C.add(this.ii, "error", !0, function (t) {
                            return n.Xe(t)
                        }),
                            this.C.add(this.ii, "unhandledrejection", !0, function (t) {
                                var i, r = "";
                                t.reason instanceof Error ? i = t.reason : r = Li(t.reason, 1e3),
                                    n.Xe({
                                        error: i,
                                        message: r,
                                        filename: "",
                                        lineno: 0
                                    }, "Uncaught (in promise)")
                            }, !0),
                            !this.Ut))
                            if (this.Ut = !0,
                                this.Et.enqueue({
                                    Kind: Pt.REC_FEAT_SUPPORTED,
                                    Args: [Qt.Console, !0]
                                }),
                                this.ii.console)
                                for (var i = function (t) {
                                    var i = St(r.ii.console, t);
                                    if (!i)
                                        return "continue";
                                    "assert" === t ? i.before(function (i) {
                                        var r = i.args;
                                        r[0] || n.Qe(t, Array.prototype.slice.apply(r, [1]))
                                    }) : i.before(function (i) {
                                        var r = i.args;
                                        return n.Qe(t, r)
                                    }),
                                        r.Bt.push(i)
                                }, r = this, e = 0, s = Ao; e < s.length; e++)
                                    i(s[e]);
                            else
                                this.Qe("log", ["NOTE: Log messages cannot be captured on IE9"])
                    }
                    ,
                    t.prototype.isEnabled = function () {
                        return this.Ut
                    }
                    ,
                    t.prototype.stop = function () {
                        var t;
                        if (this.C && this.C.clear(),
                            this.Ut)
                            for (this.Ut = !1; t = this.Bt.pop();)
                                t.disable()
                    }
                    ,
                    t.prototype.logEvent = function (t, n, i) {
                        if (void 0 === i && (i = "console"),
                            !this.Ye())
                            return null;
                        for (var r = -1 === _o.indexOf(t) ? [i, "log", To(t, 1e3)] : [i, t], e = 0; e < n.length; ++e)
                            r.push(To(n[e], 1e3));
                        return {
                            Kind: Pt.LOG,
                            Args: r
                        }
                    }
                    ,
                    t.prototype.Qe = function (t, n) {
                        var i = this.logEvent(t, n);
                        i && this.Et.enqueue(i)
                    }
                    ,
                    t.prototype.Xe = function (t, n) {
                        void 0 === n && (n = "Uncaught"),
                            (void 0 !== t.error || void 0 !== t.message || t.filename || t.lineno) && this.Ye() && this.Et.enqueue({
                                Kind: Pt.ERROR,
                                Args: Eo(t, n)
                            })
                    }
                    ,
                    t.prototype.Ye = function () {
                        return !this.Ve && (this.qe == this.$e ? (this.Et.enqueue({
                            Kind: Pt.LOG,
                            Args: ["console", "warn", this.Ge()]
                        }),
                            this.Ve = !0,
                            !1) : (this.qe++,
                                !0))
                    }
                    ,
                    t
            }();
            !function (t) {
                t[t.Ajax = 0] = "Ajax",
                    t[t.Animation = 1] = "Animation",
                    t[t.Canvas = 2] = "Canvas",
                    t[t.Console = 3] = "Console",
                    t[t.CustomElement = 4] = "CustomElement",
                    t[t.Dialog = 5] = "Dialog",
                    t[t.Fullscreen = 6] = "Fullscreen",
                    t[t.Input = 7] = "Input",
                    t[t.Perf = 8] = "Perf",
                    t[t.StyleSheet = 9] = "StyleSheet"
            }(Co || (Co = {})),
                function (t) {
                    t[t.Scroll = 1] = "Scroll",
                        t[t.Resize = 2] = "Resize"
                }(Io || (Io = {}));
            var xo = function () {
                function t(t, n, i, r, e, s, o, u, a) {
                    var c = this;
                    this.Tt = t,
                        this.Et = n,
                        this.Je = i,
                        this.Ze = s,
                        this.ts = o,
                        this.Hi = u,
                        this._i = a,
                        this.ns = [],
                        this.rs = {},
                        this.es = !1,
                        this.ss = [],
                        this.os = !1,
                        this.ii = t.window,
                        this.Mt = this.ii.document,
                        this.us = this.ii.location,
                        this.cs = this.ii.history,
                        this.C = e.createChild(),
                        this.hs = this.us.href,
                        this.vs = [new Ks(t, n), new rr(t, n, this.C), new po(t, n, u, this._i), new jo(t, this.Et, this.C), new oo(t, n), new uo(t, n), new so(t, n, this.C), new Gi(t, n), new ys(t, n, this.C, this._i), new Qs(t, n)],
                        this.ls = function (t, n) {
                            void 0 === n && (n = .25);
                            var i = t.window.IntersectionObserver;
                            if (i)
                                return new i(function (n) {
                                    for (var i, r = 0, e = n; r < e.length; r++) {
                                        var s = e[r]
                                            , o = s.target
                                            , u = s.intersectionRatio
                                            , a = ti(o);
                                        a && (null === (i = t.queue()) || void 0 === i || i.enqueue({
                                            Kind: Pt.VIEWPORT_INTERSECTION,
                                            Args: [a, u]
                                        }))
                                    }
                                }
                                    , {
                                        threshold: [n, 1]
                                    })
                        }(t),
                        this.ds = new as(t, r, this.Vn.bind(this), this.ls, function () {
                            c.Tt.measurer.enqueue(function () {
                                return c.vs[Co.Animation].snapshot(c.Mt)
                            })
                        }
                        ),
                        this.ds.acceptVisitor(this)
                }
                return t.prototype.getResourceUploader = function () {
                    return this.Hi
                }
                    ,
                    t.prototype.start = function (t) {
                        this.ds.start();
                        for (var n = 0, i = this.vs; n < i.length; n++)
                            i[n].start(t);
                        this.ps(t)
                    }
                    ,
                    t.prototype.ps = function (t) {
                        var n = this;
                        t.DisableCopyPasteListener || (this.C.add(this.ii, "copy", !1, this.ws.bind(this)),
                            this.C.add(this.ii, "paste", !1, this.gs.bind(this))),
                            this.C.add(this.ii, "mousemove", !0, function (t) {
                                n.ys(t) && n.bs(t)
                            }),
                            this.C.add(this.ii, "mousedown", !0, function (t) {
                                n.ys(t) && n.Ss(t)
                            }),
                            this.C.add(this.ii, "mouseup", !0, function (t) {
                                n.ys(t) && n.ks(t)
                            }),
                            this.C.add(this.ii, "keydown", !0, function (t) {
                                n.vs[Co.Input].onKeyboardChange(Po(t))
                            }),
                            this.C.add(this.ii, "keyup", !0, function (t) {
                                n.vs[Co.Input].onKeyboardChange(Po(t))
                            }),
                            this.C.add(this.ii, "click", !0, function (t) {
                                n.ys(t) && n._s(t)
                            }),
                            this.C.add(this.ii, "dblclick", !0, function (t) {
                                n.As(t)
                            }),
                            this.C.add(this.ii, "focus", !0, function (t) {
                                n.Ts(t, Po(t))
                            }, !0),
                            this.C.add(this.ii, "blur", !0, function (t) {
                                n.Es(t, Po(t))
                            }, !0),
                            this.C.add(this.ii, "change", !0, function (t) {
                                n.Cs(t, Po(t))
                            }, !0),
                            this.C.add(this.ii, "touchstart", !0, function (t) {
                                n.ys(t) && (n.Is(t, Pt.TOUCHSTART),
                                    n.js())
                            }),
                            this.C.add(this.ii, "touchend", !0, function (t) {
                                n.ys(t) && (n.Is(t, Pt.TOUCHEND),
                                    n.js())
                            }),
                            this.C.add(this.ii, "touchmove", !0, function (t) {
                                n.ys(t) && (n.Is(t, Pt.TOUCHMOVE),
                                    n.js())
                            }),
                            this.C.add(this.ii, "touchcancel", !0, function (t) {
                                n.ys(t) && n.Is(t, Pt.TOUCHCANCEL)
                            }),
                            this.C.add(this.ii, "play", !0, function (t) {
                                n.xs(t)
                            }),
                            this.C.add(this.ii, "pause", !0, function (t) {
                                n.Os(t)
                            }),
                            this.C.add(this.ii, "scroll", !0, function (t) {
                                t.bubbles ? n.js() : n.Ks(Ro(t))
                            }),
                            this.C.add(this.ii, "resize", !1, function () {
                                n.Ms()
                            }),
                            this.C.add(this.ii, "submit", !1, function (t) {
                                n.Rs(t)
                            }),
                            this.C.add(this.ii, "focus", !1, function () {
                                n.Ps()
                            }),
                            this.C.add(this.ii, "blur", !1, function () {
                                n.Ns()
                            }),
                            this.C.add(this.ii, "popstate", !1, function () {
                                n.Ls()
                            }),
                            this.C.add(this.ii, "selectstart", !0, function () {
                                n.Us()
                            }),
                            this.C.add(this.Mt, "selectionchange", !0, function () {
                                n.Us()
                            }),
                            this.C.add(this.ii, "visibilitychange", !1, function (t) {
                                n.addVisibilityChangeEvent()
                            });
                        var i = this.ii.visualViewport;
                        i ? (this.C.add(i, "scroll", !0, function () {
                            return n.js()
                        }),
                            this.C.add(i, "resize", !0, function () {
                                return n.Ms()
                            })) : this.C.add(this.ii, "mousewheel", !0, function () {
                                n.js()
                            }),
                            this.Hs = St(this.cs, "pushState", !0),
                            this.Hs && this.Hs.afterSync(function () {
                                return n.Ls()
                            }),
                            this.Ds = St(this.cs, "replaceState", !0),
                            this.Ds && this.Ds.afterSync(function () {
                                return n.Ls()
                            });
                        for (var r = function (t) {
                            var i = St(e.ii, t);
                            if (!i)
                                return "continue";
                            e.ss.push(i),
                                i.before(function () {
                                    n.Et.enqueue({
                                        Kind: Pt.MODAL_OPEN,
                                        Args: [t]
                                    })
                                }).afterSync(function () {
                                    n.Et.enqueue({
                                        Kind: Pt.MODAL_CLOSE,
                                        Args: [t]
                                    })
                                })
                        }, e = this, s = 0, u = ln; s < u.length; s++)
                            r(u[s]);
                        if ("function" == typeof this.ii.document.hasFocus && this.Et.enqueue({
                            Kind: this.ii.document.hasFocus() ? Pt.WINDOW_FOCUS : Pt.WINDOW_BLUR,
                            Args: []
                        }),
                            o.matchMedia)
                            for (var a = function (t, i, r) {
                                var e = o.matchMedia(c.ii, r);
                                if (!e)
                                    return "continue";
                                var s = function () {
                                    e.matches && n.Et.enqueue({
                                        Kind: Pt.MEDIA_QUERY_CHANGE,
                                        Args: [t, i]
                                    })
                                };
                                c.C.add(e, "change", !0, s),
                                    s()
                            }, c = this, h = 0, f = [["any-pointer", "coarse", "not screen and (any-pointer: fine)"], ["any-pointer", "fine", "only screen and (any-pointer: fine)"], ["any-hover", "none", "not screen and (any-hover: hover)"], ["any-hover", "hover", "only screen and (any-hover: hover)"], ["pointer", "none", "(pointer: none)"], ["pointer", "coarse", "(pointer: coarse)"], ["pointer", "fine", "(pointer: fine)"], ["prefers-color-scheme", "no-preference", "(prefers-color-scheme: no-preference)"], ["prefers-color-scheme", "light", "(prefers-color-scheme: light)"], ["prefers-color-scheme", "dark", "(prefers-color-scheme: dark)"]]; h < f.length; h++) {
                                var v = f[h];
                                a(v[0], v[1], v[2])
                            }
                        this.os = !0
                    }
                    ,
                    t.prototype.initResourceUploading = function () {
                        this.Hi.init(),
                            this.es = !0
                    }
                    ,
                    t.prototype.onDomLoad = function () {
                        this.Bs(),
                            this.Fs(!0),
                            this.ds.gi(cr)
                    }
                    ,
                    t.prototype.onLoad = function () {
                        var t = this
                            , n = !1
                            , i = Ot.wrap(function () {
                                n || (n = !0,
                                    t.vs[Co.Perf].onLoad(),
                                    t.Ws(),
                                    t.Fs())
                            }, "error");
                        new Vi(i, 0).start(),
                            o.requestWindowAnimationFrame && o.requestWindowAnimationFrame(this.ii, i)
                    }
                    ,
                    t.prototype.ajaxWatcher = function () {
                        return this.vs[Co.Ajax]
                    }
                    ,
                    t.prototype.consoleWatcher = function () {
                        return this.vs[Co.Console]
                    }
                    ,
                    t.prototype.perfWatcher = function () {
                        return this.vs[Co.Perf]
                    }
                    ,
                    t.prototype.bundleEvents = function () {
                        var t = this;
                        return this.Et.enqueueSimultaneousEventsIn(function (n) {
                            var i, r = p(), e = t.ds.processMutations(n);
                            if (e.length > 0) {
                                var s = p() - r;
                                e.push({
                                    Kind: Pt.TIMING,
                                    Args: [[Lt.Internal, Ut.Serialization, Ht.ProcessMut, n, s]],
                                    When: n
                                })
                            }
                            for (var o = 0, u = t.vs; o < u.length; o++) {
                                var a = u[o];
                                null === (i = a.tick) || void 0 === i || i.call(a)
                            }
                            return t.Fs(),
                                e
                        })
                    }
                    ,
                    t.prototype.stop = function (t) {
                        var n;
                        if (this.os) {
                            this.os = !1,
                                this.C && this.C.clear(),
                                this.Hs && this.Hs.disable(),
                                this.Ds && this.Ds.disable();
                            for (var i = 0, r = this.ss; i < r.length; i++)
                                r[i].disable();
                            this.ss = [],
                                this.vs[Co.Perf].onLoad(),
                                this.Tt.measurer.flush(),
                                this.Et.processEvents(),
                                this.Tt.taskQueue.flush(),
                                this._i.flush(),
                                this.ds.stop();
                            for (var e = 0, s = this.vs; e < s.length; e++)
                                s[e].stop(t);
                            null === (n = this.ls) || void 0 === n || n.disconnect(),
                                this.Et.shutdown(t)
                        }
                    }
                    ,
                    t.prototype.recordingIsDetached = function () {
                        return this.ds.recordingIsDetached()
                    }
                    ,
                    t.prototype.preVisit = function (t) {
                        var n = this
                            , i = t.node;
                        switch (t.name) {
                            case "#document-fragment":
                                this.C.add(i, "scroll", !0, function (t) {
                                    return n.Ks(Ro(t))
                                });
                                break;
                            case "INPUT":
                            case "TEXTAREA":
                            case "SELECT":
                                this.vs[Co.Input].addInput(i);
                                break;
                            case "LINK":
                            case "STYLE":
                                var r = i.sheet;
                                if (!r)
                                    break;
                                this.vs[Co.StyleSheet].ensureHook(r);
                                break;
                            case "BODY":
                                this.Fs(),
                                    this.Us();
                                break;
                            case "FRAME":
                            case "IFRAME":
                                this.Ze(i);
                        }
                    }
                    ,
                    t.prototype.visit = function (t) {
                        var n = t[0]
                            , i = t[1]
                            , r = t[2];
                        this.zs(n, i),
                            this.Vs(n, i, r)
                    }
                    ,
                    t.prototype.zs = function (t, n) {
                        var i = this
                            , r = n.node
                            , e = n.name
                            , s = n.type
                            , o = n.tag;
                        if (t === br.New && 10 !== s) {
                            switch (e) {
                                case "#document":
                                case "#document-fragment":
                                    var u = r;
                                    try {
                                        if (!u.adoptedStyleSheets || 0 === u.adoptedStyleSheets.length)
                                            break
                                    } catch (t) {
                                        break
                                    }
                                    this.vs[Co.StyleSheet].onSetAdoptedStyleSheets(r);
                                    break;
                                case "VIDEO":
                                case "AUDIO":
                                    r.paused || this.Et.enqueue({
                                        Kind: Pt.PLAY,
                                        Args: [ti(r)]
                                    });
                                    break;
                                case "DIALOG":
                                    var a = r;
                                    a.open && this.Et.enqueue({
                                        Kind: Pt.DIALOG,
                                        Args: [ti(a), !0, co(a)]
                                    });
                                    break;
                                case "LINK":
                                case "STYLE":
                                    var c = r
                                        , h = c.sheet;
                                    if (!h)
                                        break;
                                    var f = this.vs[Co.StyleSheet];
                                    !0 === h.disabled && f.onDisableSheet(h, !0),
                                        to(c) && (f.snapshotEl(c),
                                            "link" === o && this.C.add(c, "load", !1, function () {
                                                f.snapshotEl(c)
                                            }));
                                    break;
                                case "CANVAS":
                                    this.vs[Co.Canvas].flush(r);
                                    break;
                                default:
                                    e && "#" !== e[0] && e.indexOf("-") > -1 && this.vs[Co.CustomElement].onCustomNodeVisited(r);
                            }
                            "scrollLeft" in r && "scrollTop" in r && this.Tt.measurer.enqueue(function () {
                                var t = r;
                                0 == t.scrollLeft && 0 == t.scrollTop || i.Ks(t)
                            })
                        }
                    }
                    ,
                    t.prototype.Vs = function (t, n, i) {
                        var r = this
                            , e = n.node
                            , s = n.tag;
                        if (1 === n.type && i && !function (t, n) {
                            return void 0 === n && (n = Jn(t)),
                                Qn(t, n) || Yn(t, n)
                        }(e)) {
                            var o = function (t, n, i) {
                                for (var r, e, s = [], o = 0, u = Mo; o < u.length; o++) {
                                    var a = u[o];
                                    i[a] && Ko[a][t] && s.push(i[a])
                                }
                                if ("link" === t && i.href && (r = i.rel) && r.indexOf("stylesheet") > -1 && s.push(i.href),
                                    ("img" === t || "source" === t) && (e = i.srcset) && null == e.match(/^\s*$/))
                                    for (var c = 0, h = e.split(","); c < h.length; c++) {
                                        var f = h[c];
                                        s.push(f.trim().split(/\s+/)[0])
                                    }
                                var v = n;
                                if (i.style && v.style) {
                                    var l = v.style.backgroundImage;
                                    if (l && l.length <= 300) {
                                        var d = void 0;
                                        for (xn.lastIndex = 0; d = xn.exec(l);) {
                                            var p = d[1];
                                            p && s.push(p.trim())
                                        }
                                    }
                                }
                                return s
                            }(s, e, i);
                            if (0 === o.length) {
                                for (var u = 0, a = Mo; u < a.length; u++) {
                                    var c = i[a[u]];
                                    c && o.push(c)
                                }
                                o.length > 0 && this.Tt.taskQueue.enqueue(function () {
                                    return r.qs(o)
                                })
                            } else
                                this.Tt.taskQueue.enqueue(function () {
                                    return r.qs(o, !0)
                                })
                        }
                    }
                    ,
                    t.prototype.Vn = function (t) {
                        var n, i = t.node, r = t.tag;
                        if ("iframe" === r)
                            this.ts(t.node);
                        else if ("function" == typeof i.getElementsByTagName)
                            for (var e = null !== (n = i.getElementsByTagName("iframe")) && void 0 !== n ? n : [], s = 0; s < e.length; s++) {
                                var o = e[s];
                                this.ts(o)
                            }
                        else if ("link" === r || "style" === r) {
                            var u = i.sheet;
                            if (!u)
                                return;
                            this.vs[Co.StyleSheet].removeHook(u)
                        }
                    }
                    ,
                    t.prototype.qs = function (t, n) {
                        void 0 === n && (n = !1),
                            window;
                        for (var i = Ie(this.ii), r = 0, e = t; r < e.length; r++) {
                            var s = Ce(i, e[r]);
                            this.es && n && this.Hi.uploadIfNeeded(this.ii, s),
                                this._i.record(s.href)
                        }
                        window
                    }
                    ,
                    t.prototype.ys = function (t) {
                        var n = Ro(t);
                        return !!ti(n) && !Qn(n)
                    }
                    ,
                    t.prototype.bs = function (t) {
                        var n = ti(Ro(t));
                        this.Et.enqueue({
                            Kind: Pt.MOUSEMOVE,
                            Args: n ? [t.clientX, t.clientY, n] : [t.clientX, t.clientY]
                        })
                    }
                    ,
                    t.prototype.Ss = function (t) {
                        this.Et.enqueue({
                            Kind: Pt.MOUSEDOWN,
                            Args: [t.clientX, t.clientY]
                        })
                    }
                    ,
                    t.prototype.ks = function (t) {
                        this.Et.enqueue({
                            Kind: Pt.MOUSEUP,
                            Args: [t.clientX, t.clientY]
                        })
                    }
                    ,
                    t.prototype.Is = function (t, n) {
                        if (void 0 !== t.changedTouches)
                            for (var i = 0; i < t.changedTouches.length; ++i) {
                                var r = t.changedTouches[i];
                                isNaN(parseInt(r.identifier, 10)) && (r.identifier = 0);
                                var e = [r.identifier, r.clientX, r.clientY];
                                this.Et.enqueue({
                                    Kind: n,
                                    Args: e
                                })
                            }
                    }
                    ,
                    t.prototype.xs = function (t) {
                        var n = ti(Ro(t));
                        n && this.Et.enqueue({
                            Kind: Pt.PLAY,
                            Args: [n]
                        })
                    }
                    ,
                    t.prototype.Os = function (t) {
                        var n = ti(Ro(t));
                        n && this.Et.enqueue({
                            Kind: Pt.PAUSE,
                            Args: [n]
                        })
                    }
                    ,
                    t.prototype.Ps = function () {
                        this.Et.enqueue({
                            Kind: Pt.WINDOW_FOCUS,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.Ns = function () {
                        this.Et.enqueue({
                            Kind: Pt.WINDOW_BLUR,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.Fs = function (t) {
                        var n = this;
                        void 0 === t && (t = !1),
                            this.Tt.measurer.enqueue(function () {
                                return n.$s(t)
                            })
                    }
                    ,
                    t.prototype.$s = function (t) {
                        void 0 === t && (t = !1);
                        var n, i = (n = this.ii.document).scrollingElement || n.body || n.documentElement, r = ti(i);
                        if (r) {
                            var e = function (t, n) {
                                var i, r = t.documentElement.getBoundingClientRect(), e = null !== (i = t.body) && void 0 !== i ? i : {
                                    scrollHeight: 0,
                                    scrollWidth: 0
                                };
                                return {
                                    width: Math.max(r.width, n.scrollWidth, e.scrollWidth),
                                    height: Math.max(r.height, n.scrollHeight, e.scrollHeight)
                                }
                            }(this.ii.document, i);
                            Tn(e, this.Gs) || (this.Gs = e,
                                this.Et.enqueue({
                                    Kind: Pt.RESIZE_DOCUMENT_CONTENT,
                                    Args: [e.width, e.height]
                                }));
                            var s, o, u, a, c = Pn(this.ii, t ? void 0 : this.Xs), h = function (t, n) {
                                var i = t.visualViewport;
                                if (i)
                                    return i;
                                var r = n;
                                return void 0 === r && (r = Pn(t)),
                                    new Nn(t, r)
                            }(this.ii, c);
                            if (c.hasKnownPosition ? (An(c, this.Xs) || this.Et.enqueue({
                                Kind: Pt.SCROLL_LAYOUT,
                                Args: [r, c.pageLeft, c.pageTop]
                            }),
                                s = h,
                                (o = this.Qs) && s.offsetLeft == o.offsetLeft && s.offsetTop == o.offsetTop || this.Et.enqueue({
                                    Kind: Pt.SCROLL_VISUAL_OFFSET,
                                    Args: [r, h.offsetLeft, h.offsetTop]
                                })) : An(h, this.Qs) || this.Et.enqueue({
                                    Kind: Pt.SCROLL_LAYOUT,
                                    Args: [r, h.pageLeft, h.pageTop]
                                }),
                                !function (t, n) {
                                    return n && t.width == n.width && t.height == n.height && t.clientWidth == n.clientWidth && t.clientHeight == n.clientHeight
                                }(c, this.Xs)) {
                                var f = [c.clientWidth, c.clientHeight];
                                c.width === c.clientWidth && c.height === c.clientHeight || f.push(c.width, c.height),
                                    this.Et.enqueue({
                                        Kind: Pt.RESIZE_LAYOUT,
                                        Args: f
                                    })
                            }
                            Tn(h, this.Qs) || this.Et.enqueue({
                                Kind: Pt.RESIZE_VISUAL,
                                Args: [h.width, h.height]
                            }),
                                this.Xs = ((a = En(u = c)).clientWidth = u.clientWidth,
                                    a.clientHeight = u.clientHeight,
                                    a),
                                this.Qs = function (t) {
                                    var n = En(t);
                                    return n.offsetLeft = t.offsetLeft,
                                        n.offsetTop = t.offsetTop,
                                        n
                                }(h)
                        }
                    }
                    ,
                    t.prototype.Ys = function (t, n) {
                        var i = this;
                        t in this.rs || (this.rs[t] = n,
                            new Vi(function () {
                                i.Tt.measurer.enqueue(function () {
                                    if (t in i.rs) {
                                        var n = i.rs[t];
                                        delete i.rs[t],
                                            n()
                                    }
                                })
                            }
                                , vn.ScrollSampleInterval).start())
                    }
                    ,
                    t.prototype.js = function () {
                        var t = this;
                        this.Ys(Io.Scroll, function () {
                            return t.$s(!1)
                        })
                    }
                    ,
                    t.prototype.Ms = function () {
                        var t = this;
                        this.Ys(Io.Resize, function () {
                            return t.$s(!0)
                        })
                    }
                    ,
                    t.prototype.Ks = function (t) {
                        var n = this
                            , i = ti(t);
                        i && this.Ys(i, function () {
                            if (ti(t) === i) {
                                var r = t;
                                i && "number" == typeof r.scrollLeft && (n.Et.enqueue({
                                    Kind: Pt.RESIZE_SCROLLABLE_ELEMENT_CONTENT,
                                    Args: [i, r.scrollWidth, r.scrollHeight]
                                }),
                                    n.Et.enqueue({
                                        Kind: Pt.SCROLL_LAYOUT,
                                        Args: [i, r.scrollLeft, r.scrollTop]
                                    }),
                                    Or().then(function () {
                                        n.ds.resizer().isObserved(i) || n.ds.resizer().observe(t)
                                    }))
                            }
                        })
                    }
                    ,
                    t.prototype.Bs = function () {
                        this.Et.enqueue({
                            Kind: Pt.DOMLOADED,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.Ws = function () {
                        this.Et.enqueue({
                            Kind: Pt.LOAD,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.getNavigateEvent = function (t, n) {
                        void 0 === n && (n = Pt.NAVIGATE);
                        var i = {
                            Kind: n,
                            Args: [He(t, {
                                source: "event",
                                type: Pt.NAVIGATE
                            })]
                        };
                        return n === Pt.ENTRY_NAVIGATE ? (i.Args.push(this.Js()),
                            i) : i
                    }
                    ,
                    t.prototype.Ls = function () {
                        var t = this.us.href;
                        this.hs != t && (this.hs = t,
                            this.Je.onNavigate(t),
                            this.Et.enqueue(this.getNavigateEvent(t)))
                    }
                    ,
                    t.prototype.Js = function () {
                        try {
                            var t = this.ii.performance;
                            if (!t || !t.navigation)
                                return "unknown";
                            switch (t.navigation.type) {
                                case PerformanceNavigation.TYPE_NAVIGATE:
                                    return "navigate";
                                case PerformanceNavigation.TYPE_RELOAD:
                                    return "reload";
                                case PerformanceNavigation.TYPE_BACK_FORWARD:
                                    return "back_forward";
                                default:
                                    return "unknown";
                            }
                        } catch (t) {
                            return "unknown"
                        }
                    }
                    ,
                    t.prototype._s = function (t) {
                        var n = Ro(t)
                            , i = ti(n);
                        if (i) {
                            var r = 0
                                , e = 0
                                , s = 0
                                , o = 0;
                            if (n && n.getBoundingClientRect) {
                                var u = n.getBoundingClientRect();
                                r = u.left,
                                    e = u.top,
                                    s = u.width,
                                    o = u.height
                            }
                            var a = Jn(n);
                            this.Je.onClick(a),
                                this.Et.enqueue({
                                    Kind: Pt.CLICK,
                                    Args: [i, t.clientX, t.clientY, r, e, s, o]
                                })
                        }
                    }
                    ,
                    t.prototype.As = function (t) {
                        var n = ti(Ro(t));
                        n && this.Et.enqueue({
                            Kind: Pt.DBL_CLICK,
                            Args: [n]
                        })
                    }
                    ,
                    t.prototype.Rs = function (t) {
                        var n = ti(Ro(t));
                        n && this.Et.enqueue({
                            Kind: Pt.FORM_SUBMIT,
                            Args: [n]
                        })
                    }
                    ,
                    t.prototype.Ts = function (t, n) {
                        var i = ti(Ro(t));
                        i && this.Et.enqueue({
                            Kind: Pt.FOCUS,
                            Args: [i, n]
                        })
                    }
                    ,
                    t.prototype.Es = function (t, n) {
                        var i = ti(Ro(t));
                        i && this.Et.enqueue({
                            Kind: Pt.BLUR,
                            Args: [i, n]
                        })
                    }
                    ,
                    t.prototype.Cs = function (t, n) {
                        this.vs[Co.Input].onChange(Ro(t), n)
                    }
                    ,
                    t.prototype.Us = function () {
                        var t = this;
                        this.Tt.measurer.enqueue(function () {
                            var n;
                            try {
                                n = t.selectionArgs()
                            } catch (t) {
                                return
                            }
                            for (var i = !1, r = 0; r < 4; r++)
                                if (t.ns[r] !== n[r]) {
                                    i = !0;
                                    break
                                }
                            i && (t.ns = n,
                                t.Et.enqueue({
                                    Kind: Pt.SELECT,
                                    Args: n
                                }))
                        })
                    }
                    ,
                    t.prototype.selectionArgs = function () {
                        if (!this.ii.getSelection)
                            return [];
                        var t = this.ii.getSelection();
                        if (!t)
                            return [];
                        if ("None" == t.type)
                            return [];
                        if ("Caret" == t.type) {
                            var n = ti(t.anchorNode);
                            return n ? [n, t.anchorOffset] : []
                        }
                        if (!t.anchorNode || !t.focusNode)
                            return [];
                        var i = Oo(t.anchorNode, t.anchorOffset)
                            , r = i[0]
                            , e = i[1]
                            , s = Oo(t.focusNode, t.focusOffset)
                            , o = s[0]
                            , u = s[1]
                            , a = Boolean(r.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_FOLLOWING)
                            , c = a ? [r, o] : [o, r]
                            , h = c[0]
                            , f = c[1]
                            , v = a ? [e, u] : [u, e]
                            , l = v[0]
                            , d = v[1];
                        for (ti(h) || (l = 0); h && !ti(h) && h != f;)
                            h = ht(h) || h.parentNode;
                        for (ti(f) || (d = 0); f && !ti(f) && f != h;)
                            f = ft(f) || f.parentNode;
                        if (h == f && l == d)
                            return [];
                        var p = ti(h)
                            , w = ti(f);
                        return h && f && p && w ? [p, l, w, d, a] : []
                    }
                    ,
                    t.prototype.ws = function () {
                        this.Et.enqueue({
                            Kind: Pt.COPY,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.gs = function () {
                        this.Et.enqueue({
                            Kind: Pt.PASTE,
                            Args: []
                        })
                    }
                    ,
                    t.prototype.addVisibilityChangeEvent = function () {
                        this.Et.enqueue({
                            Kind: Pt.VISIBILITY_STATE,
                            Args: [document.visibilityState]
                        }),
                            "hidden" === document.visibilityState && this.Et.singSwanSong(qt.Hidden)
                    }
                    ,
                    t
            }();
            function Oo(t, n) {
                var i = t;
                if (!i.firstChild)
                    return [i, n];
                i = i.firstChild;
                for (var r = 0; r < n - 1; r++) {
                    var e = ht(i);
                    if (!e)
                        return [i, 0];
                    i = e
                }
                return [i, 0]
            }
            var Ko = {
                src: {
                    img: !0,
                    embed: !0
                },
                href: {
                    use: !0,
                    image: !0
                },
                data: {
                    object: !0
                }
            }
                , Mo = o.objectKeys(Ko);
            function Ro(t) {
                if (t.composed && t.target) {
                    var n = t.target;
                    if (1 == n.nodeType && n.shadowRoot) {
                        var i = t.composedPath();
                        if (i.length > 0)
                            return i[0]
                    }
                }
                return t.target
            }
            function Po(t) {
                var n;
                return !!(null !== (n = t._fs_trust_event) && void 0 !== n && n || t.isTrusted)
            }
            var No, Lo = function () {
                function t(t, n) {
                    this.Zr = t,
                        this.Zs = n,
                        this.no = [],
                        this.io = 0
                }
                return t.prototype.add = function (t) {
                    this.no.length > 0 && this.no[this.no.length - 1].When === t.When && this.no.pop(),
                        0 === this.no.length ? (this.Zr.push(t),
                            this.io = t.When) : t.When > this.io && (this.io = t.When),
                        this.no.push(t)
                }
                    ,
                    t.prototype.finish = function (t, n) {
                        void 0 === n && (n = []);
                        var i = this.no.length;
                        if (i <= 1)
                            return !1;
                        for (var r = [], s = this.no[0].When, o = this.no[i - 1].When, u = o - s != 0 ? o - s : 1, a = 0; a < this.Zs.length; ++a) {
                            var c = this.Zs[a]
                                , h = this.no[0].Args[c]
                                , f = (this.no[1].When - s) / u
                                , v = (this.no[1].Args[c] - h) / f
                                , l = this.no[i - 2].Args[c]
                                , d = (o - this.no[i - 2].When) / u
                                , p = this.no[i - 1].Args[c]
                                , w = (p - l) / d;
                            r.push(h, p, v, w)
                        }
                        return this.no[0].Kind = t,
                            this.no[0].Args = (0,
                                e.__spreadArray)((0,
                                    e.__spreadArray)([this.io], n), r),
                            !0
                    }
                    ,
                    t.prototype.evts = function () {
                        return this.no
                    }
                    ,
                    t
            }();
            !function (t) {
                t[t.rageWindowMillis = 2e3] = "rageWindowMillis",
                    t[t.defaultRageThreshold = 5] = "defaultRageThreshold",
                    t[t.rageThresholdIfPageChanges = 8] = "rageThresholdIfPageChanges",
                    t[t.thresholdChangeQuiescenceMillis = 2e3] = "thresholdChangeQuiescenceMillis"
            }(No || (No = {}));
            var Uo = function () {
                function t(t, n) {
                    var i, r;
                    void 0 === n && (n = w),
                        this.Tt = t,
                        this.ro = n,
                        this.eo = new Pr,
                        this.so = No.defaultRageThreshold,
                        this.oo = -1,
                        this.uo = new WeakMap;
                    var e = t.recording.pageResponse();
                    if (!e)
                        throw new Error("Attempt to construct EasyBake before rec/page response is set.");
                    for (var s = [".fs-ignore-rage-clicks", ".fs-ignore-rage-clicks *"], o = 0, u = null !== (r = null === (i = e.BehaviorSignalSettings) || void 0 === i ? void 0 : i.ElementBlocks) && void 0 !== r ? r : []; o < u.length; o++) {
                        var a = u[o];
                        a.Signals.indexOf(on.SignalRageClick) > -1 && (s.push(a.Selector),
                            s.push(a.Selector + " *"))
                    }
                    var c = s.join(", ");
                    Jr(c) ? this.ao = [c] : this.ao = s
                }
                return t.prototype.co = function (t) {
                    var n = this.uo.get(t);
                    if (void 0 !== n)
                        return n;
                    for (var i = 0, r = this.ao; i < r.length; i++) {
                        var e = r[i];
                        if (o.elMatches(t, e))
                            return this.uo.set(t, !0),
                                !0
                    }
                    return this.uo.set(t, !1),
                        !1
                }
                    ,
                    t.prototype.onEvent = function (t) {
                        var n;
                        if (function (t) {
                            switch (t) {
                                case Pt.VALUECHANGE:
                                case Pt.SCROLL_LAYOUT:
                                case Pt.SCROLL_LAYOUT_CURVE:
                                case Pt.SCROLL_VISUAL_OFFSET:
                                case Pt.SCROLL_VISUAL_OFFSET_CURVE:
                                case Pt.MUT_INSERT:
                                case Pt.MUT_REMOVE:
                                case Pt.MUT_ATTR:
                                case Pt.MUT_SHADOW:
                                case Pt.MUT_TEXT:
                                case Pt.NAVIGATE:
                                case Pt.LOAD:
                                case Pt.FOCUS:
                                case Pt.BLUR:
                                case Pt.SELECT:
                                case Pt.FORM_SUBMIT:
                                case Pt.PLAY:
                                case Pt.PAUSE:
                                case Pt.MODAL_OPEN:
                                case Pt.MODAL_CLOSE:
                                    return !0;
                            }
                            return !1
                        }(t.Kind) && this.so !== No.rageThresholdIfPageChanges)
                            return this.so = No.rageThresholdIfPageChanges,
                                void (this.oo = this.ro());
                        if (t.Kind === Pt.CLICK) {
                            var i = this.ro()
                                , r = null === (n = Zn(t.Args[0])) || void 0 === n ? void 0 : n.node;
                            if (r) {
                                var e = 1 === r.nodeType ? r : r.parentElement;
                                if (!this.co(e)) {
                                    var s = Un(r);
                                    if (!s || "textarea" !== s && "select" !== s && ("input" !== s || "submit" === r.type)) {
                                        this.eo.push(i);
                                        for (var o = i - No.rageWindowMillis; ;) {
                                            var u = this.eo.first();
                                            if (!(void 0 !== u && u < o))
                                                break;
                                            this.eo.shift()
                                        }
                                        if (this.oo < i - No.thresholdChangeQuiescenceMillis && (this.so = No.defaultRageThreshold),
                                            this.eo.size() >= this.so) {
                                            var a = this.Tt.recording.getCurrentSessionURL
                                                , c = {
                                                    eventStartTimeStamp: this.eo.first(),
                                                    eventEndTimeStamp: i,
                                                    eventReplayUrlAtStart: a(),
                                                    eventReplayUrlAtCurrentTime: a(!0)
                                                };
                                            this.dispatchRageClickEvent(r, c),
                                                this.so = No.defaultRageThreshold,
                                                this.eo = new Pr
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ,
                    t.prototype.dispatchRageClickEvent = function (t, n) {
                        var i, r = "fullstory/rageclick";
                        try {
                            i = new CustomEvent(r, {
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            (i = document.createEvent("customevent")).initCustomEvent(r, !0, !0, n)
                        }
                        o.setWindowTimeout(window, Ot.wrap(function () {
                            t.dispatchEvent(i)
                        }), 0)
                    }
                    ,
                    t
            }()
                , Ho = function () {
                    function t(t) {
                        this.Tt = t,
                            this.ho = this.Tt.time.wallTime(),
                            this.fo = !1
                    }
                    return t.prototype.getLastUserAcitivityTS = function () {
                        return this.ho
                    }
                        ,
                        t.prototype.getMsSinceLastUserAcivity = function () {
                            return o.mathFloor(this.Tt.time.wallTime() - this.ho)
                        }
                        ,
                        t.prototype.resetUserActivity = function () {
                            this.ho = this.Tt.time.wallTime()
                        }
                        ,
                        t.prototype.isHibernating = function () {
                            return this.fo
                        }
                        ,
                        t.prototype.setHibernating = function () {
                            this.fo = !0
                        }
                        ,
                        t
                }()
                , Do = function () {
                    function t(t, n, i, r) {
                        void 0 === r && (r = Vi),
                            this.Tt = t,
                            this.vo = n,
                            this.Et = i,
                            this.lo = !1,
                            this["do"] = !1,
                            this.po = vn.HeartbeatInitial,
                            this.wo = vn.PageInactivityTimeout,
                            this.yo = new r(this.mo.bind(this)),
                            this.bo = new r(this.So.bind(this), this.wo)
                    }
                    return t.prototype.getUserActivityModel = function () {
                        return this.vo
                    }
                        ,
                        t.prototype.manualHibernateCheck = function () {
                            this.vo.isHibernating() || this.vo.getMsSinceLastUserAcivity() >= vn.PageInactivityTimeout + 5e3 && this.So()
                        }
                        ,
                        t.prototype.scanEvents = function (t) {
                            if (!this.lo) {
                                this.manualHibernateCheck();
                                for (var n = !1, i = 0, r = t; i < r.length; i++)
                                    if (dn(r[i].Kind)) {
                                        n = !0;
                                        break
                                    }
                                n && (this.vo.isHibernating() ? this.ko() : this.start())
                            }
                        }
                        ,
                        t.prototype.shutdown = function () {
                            this.yo.stop(),
                                this.bo.stop()
                        }
                        ,
                        t.prototype.start = function () {
                            this.vo.resetUserActivity(),
                                this.po = vn.HeartbeatInitial,
                                this.wo = vn.PageInactivityTimeout,
                                this.yo.start(this.po),
                                this.bo.start(this.wo)
                        }
                        ,
                        t.prototype.mo = function () {
                            var t = this.vo.getMsSinceLastUserAcivity();
                            t <= vn.PageInactivityTimeout && this.Et.enqueue({
                                Kind: Pt.HEARTBEAT,
                                Args: [t]
                            }),
                                this.po *= 2,
                                this.po > vn.HeartbeatMax && (this.po = vn.HeartbeatMax),
                                this.yo.start(this.po)
                        }
                        ,
                        t.prototype.So = function () {
                            if (!this.vo.isHibernating()) {
                                var t = !1;
                                this.vo.getMsSinceLastUserAcivity() <= 2 * vn.PageInactivityTimeout ? this.Et.enqueue({
                                    Kind: Pt.UNLOAD,
                                    Args: [qt.Hibernation]
                                }) : t = !0;
                                try {
                                    this.lo = !0,
                                        this.vo.setHibernating(),
                                        this.shutdown(),
                                        this.Et.onHibernate(t)
                                } finally {
                                    this.lo = !1
                                }
                            }
                        }
                        ,
                        t.prototype.ko = function () {
                            this["do"] || (this["do"] = !0,
                                this.Tt.recording.splitPage(qt.Hibernation))
                        }
                        ,
                        t
                }()
                , Bo = function () {
                    function t(t, n, i, r, e, s) {
                        void 0 === r && (r = function () {
                            return []
                        }
                        ),
                            void 0 === e && (e = zi),
                            void 0 === s && (s = Vi),
                            this.Tt = t,
                            this._o = n,
                            this.Ao = r,
                            this.To = e,
                            this.Eo = 0,
                            this.Co = [],
                            this.Io = !1,
                            this.jo = !1,
                            this.xo = 0,
                            this.Oo = -1,
                            this.Ko = !1,
                            this.Vt = [],
                            this.Mo = new this.To(vn.CurveSamplingInterval),
                            this.Ro = new this.To(vn.MutationProcessingInterval),
                            i && (this.Po = new Do(this.Tt, i, this, s))
                    }
                    return t.prototype.startPipeline = function (t) {
                        var n;
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var i, r = this;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return this.jo || this.Io ? [2] : (this.Io = !0,
                                                    t.frameId && (this.Eo = t.frameId),
                                                    t.parentIds && (this.Co = t.parentIds),
                                                    i = !0,
                                                    [4, Or()]);
                                            case 1:
                                                return e.sent(),
                                                    this.processEvents(),
                                                    [4, Or()];
                                            case 2:
                                                return e.sent(),
                                                    window,
                                                    this.Ro.start(function () {
                                                        window,
                                                            r.processEvents(),
                                                            window
                                                    }),
                                                    this.Mo.start(function () {
                                                        window,
                                                            r.processEvents(i),
                                                            window
                                                    }),
                                                    null === (n = this.Po) || void 0 === n || n.start(),
                                                    this._o.startPipeline(t),
                                                    window,
                                                    [2];
                                        }
                                    })
                            })
                    }
                        ,
                        t.prototype.enableEasyBake = function () {
                            this.No = new Uo(this.Tt)
                        }
                        ,
                        t.prototype.enqueueSimultaneousEventsIn = function (t) {
                            if (0 === this.xo) {
                                var n = this.Tt.time.now();
                                this.Oo = n > this.Oo ? n : this.Oo
                            }
                            try {
                                return this.xo++,
                                    t(this.Oo)
                            } finally {
                                this.xo--,
                                    this.xo < 0 && (this.xo = 0)
                            }
                        }
                        ,
                        t.prototype.enqueue = function (t) {
                            var n = this.xo > 0 ? this.Oo : this.Tt.time.now();
                            this.Lo(n, t),
                                Wi.checkForBrokenSchedulers()
                        }
                        ,
                        t.prototype.Lo = function (t, n) {
                            var i;
                            if (!this.jo) {
                                var r = t;
                                r < this.Oo && (r = this.Oo),
                                    this.Oo = r;
                                var e = n;
                                e.When = r,
                                    this.Vt.push(e);
                                try {
                                    null === (i = this.No) || void 0 === i || i.onEvent(e)
                                } catch (t) {
                                    Ot.sendToBugsnag(t, "error")
                                }
                            }
                        }
                        ,
                        t.prototype.enqueueFirst = function (t) {
                            if (this.Vt.length > 0) {
                                var n = t;
                                n.When = this.Vt[0].When,
                                    this.Vt.unshift(n)
                            } else
                                this.enqueue(t)
                        }
                        ,
                        t.prototype.addUnload = function (t) {
                            this.Ko || (this.Ko = !0,
                                this.enqueue({
                                    Kind: Pt.UNLOAD,
                                    Args: [t]
                                }),
                                this.singSwanSong(t))
                        }
                        ,
                        t.prototype.shutdown = function (t) {
                            this.addUnload(t),
                                this.Uo(),
                                this.jo = !0,
                                this.Ho()
                        }
                        ,
                        t.prototype.Uo = function () {
                            this.processEvents(),
                                this._o.flush()
                        }
                        ,
                        t.prototype.singSwanSong = function (t) {
                            this.jo || (window,
                                this.Uo(),
                                t === qt.Hidden && this.Ko || this._o.singSwanSong(),
                                window)
                        }
                        ,
                        t.prototype.rebaseIframe = function (t, n) {
                            for (var i = Math.max(0, n), r = this.Tt.time.startTime(), e = function (n) {
                                var e = r + n - t;
                                return e >= i ? e : i
                            }, s = 0, o = this.Vt; s < o.length; s++) {
                                var u = o[s];
                                u.When = e(u.When)
                            }
                            -1 === this.Oo ? this.Oo = i : this.Oo = e(this.Oo)
                        }
                        ,
                        t.prototype.processEvents = function (t) {
                            if (this.Io) {
                                var n = this.Vt;
                                this.Vt = [];
                                var i = function (t) {
                                    if (0 == t.length)
                                        return t;
                                    for (var n, i = [], r = new Lo(i, [0, 1]), e = {}, s = {}, o = {}, u = 0, a = t; u < a.length; u++) {
                                        var c = a[u];
                                        switch (c.Kind) {
                                            case Pt.MOUSEMOVE:
                                                r.add(c);
                                                break;
                                            case Pt.TOUCHMOVE:
                                                (v = c.Args[0]) in e || (e[v] = new Lo(i, [1, 2])),
                                                    e[v].add(c);
                                                break;
                                            case Pt.SCROLL_LAYOUT:
                                                (v = c.Args[0]) in s || (s[v] = new Lo(i, [1, 2])),
                                                    s[v].add(c);
                                                break;
                                            case Pt.SCROLL_VISUAL_OFFSET:
                                                (v = c.Args[0]) in o || (o[v] = new Lo(i, [1, 2])),
                                                    o[v].add(c);
                                                break;
                                            case Pt.RESIZE_VISUAL:
                                                n || (n = new Lo(i, [0, 1])),
                                                    n.add(c);
                                                break;
                                            default:
                                                i.push(c);
                                        }
                                    }
                                    if (r.finish(Pt.MOUSEMOVE_CURVE)) {
                                        var h = r.evts();
                                        if (h.length > 0) {
                                            var f = h[h.length - 1].Args[2];
                                            f && (h[0].Args[9] = f)
                                        }
                                    }
                                    for (var v in s)
                                        s[l = parseInt(v, 10)].finish(Pt.SCROLL_LAYOUT_CURVE, [l]);
                                    for (var v in o)
                                        o[l = parseInt(v, 10)].finish(Pt.SCROLL_VISUAL_OFFSET_CURVE, [l]);
                                    for (var v in e) {
                                        var l;
                                        e[l = parseInt(v, 10)].finish(Pt.TOUCHMOVE_CURVE, [l])
                                    }
                                    return n && n.finish(Pt.RESIZE_VISUAL_CURVE),
                                        i
                                }(n);
                                t || (i = i.concat(this.Ao())),
                                    this.Do(i),
                                    this.sendEvents(this.Tt.recording.pageSignature(), i)
                            }
                        }
                        ,
                        t.prototype.sendEvents = function (t, n) {
                            var i;
                            0 != n.length && (null === (i = this.Po) || void 0 === i || i.scanEvents(n),
                                this._o.enqueueEvents(t, n))
                        }
                        ,
                        t.prototype.onHibernate = function (t) {
                            t || this.Uo(),
                                this._o.singSwanSong(),
                                this._o.stopPipeline()
                        }
                        ,
                        t.prototype.Do = function (t) {
                            if (this.Eo)
                                for (var n = this.Co, i = n && n.length > 0, r = 0; r < t.length; ++r) {
                                    var e = t[r];
                                    e.FId || (e.FId = this.Eo),
                                        i && !e.PIds && (e.PIds = n)
                                }
                        }
                        ,
                        t.prototype.Ho = function () {
                            var t;
                            this.Io && (this.Mo.stop(),
                                this.Ro.stop(),
                                this.Vt = [],
                                null === (t = this.Po) || void 0 === t || t.shutdown(),
                                this._o.stopPipeline())
                        }
                        ,
                        t
                }()
                , Fo = function () {
                    function t(t) {
                        void 0 === t && (t = 4),
                            this.hashCount = t,
                            this.idx = 0,
                            this.hashMask = t - 1,
                            this.reset()
                    }
                    return t.prototype.reset = function () {
                        this.idx = 0,
                            this.hash = [];
                        for (var t = 0; t < this.hashCount; ++t)
                            this.hash.push(2166136261)
                    }
                        ,
                        t.prototype.write = function (t) {
                            for (var n = this.hashMask, i = this.idx, r = 0; r < t.length; r++)
                                this.hash[i] = this.hash[i] ^ t[r],
                                    this.hash[i] += (this.hash[i] << 1) + (this.hash[i] << 4) + (this.hash[i] << 7) + (this.hash[i] << 8) + (this.hash[i] << 24),
                                    i = i + 1 & n;
                            this.idx = i
                        }
                        ,
                        t.prototype.writeAscii = function (t) {
                            for (var n = this.hashMask, i = this.idx, r = 0; r < t.length; r++)
                                this.hash[i] = this.hash[i] ^ t.charCodeAt(r),
                                    this.hash[i] += (this.hash[i] << 1) + (this.hash[i] << 4) + (this.hash[i] << 7) + (this.hash[i] << 8) + (this.hash[i] << 24),
                                    i = i + 1 & n;
                            this.idx = i
                        }
                        ,
                        t.prototype.sum = function () {
                            var t;
                            return t = this.sumAsHex().replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ").map(Number),
                                Vo(String.fromCharCode.apply(window, t))
                        }
                        ,
                        t.prototype.sumAsHex = function () {
                            for (var t = "", n = 0; n < this.hashCount; ++n)
                                t += ("00000000" + (this.hash[n] >>> 0).toString(16)).slice(-8);
                            return t
                        }
                        ,
                        t
                }();
            function Wo(t) {
                var n = new Fo(1);
                return n.writeAscii(t),
                    n.sumAsHex()
            }
            function zo(t) {
                var n = new Uint8Array(t);
                return Vo(String.fromCharCode.apply(null, n))
            }
            function Vo(t) {
                var n;
                return (null !== (n = window.btoa) && void 0 !== n ? n : qo)(t).replace(/\+/g, "-").replace(/\//g, "_")
            }
            function qo(t) {
                for (var n = String(t), i = [], r = 0, e = 0, s = 0, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; n.charAt(0 | s) || (o = "=",
                    s % 1); i.push(o.charAt(63 & r >> 8 - s % 1 * 8))) {
                    if ((e = n.charCodeAt(s += 3 / 4)) > 255)
                        throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                    r = r << 8 | e
                }
                return i.join("")
            }
            function $o(t, n, i, r) {
                return void 0 === r && (r = new Fo),
                    (0,
                        e.__awaiter)(this, void 0, Ni, function () {
                            var s, o, u, a;
                            return (0,
                                e.__generator)(this, function (e) {
                                    switch (e.label) {
                                        case 0:
                                            s = t.now(),
                                                o = i.byteLength,
                                                u = 0,
                                                e.label = 1;
                                        case 1:
                                            return u < o ? t.now() - s > 25 ? [4, n(100)] : [3, 3] : [3, 5];
                                        case 2:
                                            e.sent(),
                                                s = t.now(),
                                                e.label = 3;
                                        case 3:
                                            a = new Uint8Array(i, u, Math.min(o - u, 1e4)),
                                                r.write(a),
                                                e.label = 4;
                                        case 4:
                                            return u += 1e4,
                                                [3, 1];
                                        case 5:
                                            return [2, {
                                                hash: r.sum(),
                                                hasher: r
                                            }];
                                    }
                                })
                        })
            }
            var Go = 6e6
                , Xo = "resource-uploader"
                , Qo = function () {
                    function t(t, n, i, r, e) {
                        void 0 === r && (r = window.FormData),
                            void 0 === e && (e = Vi),
                            this.Tt = t,
                            this.Et = n,
                            this.Bo = i,
                            this.Fo = r,
                            this.Wo = e,
                            this.be = {},
                            this.zo = {},
                            this.Vo = !1,
                            this.qo = []
                    }
                    return t.prototype.init = function () {
                        this.Fo && this.$o()["catch"](function (t) {
                            Ot.sendToBugsnag(t, "error")
                        })
                    }
                        ,
                        t.prototype.$o = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var t, n, i, r, s, o, u, a, c, h, f, v, l, d, p, w, g, y, m, b, S, k, _, A, T;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    t = this.Tt.options.orgId,
                                                        e.label = 1;
                                                case 1:
                                                    return [4, this.Go()];
                                                case 2:
                                                    for (n = e.sent(),
                                                        i = {
                                                            fsnv: {},
                                                            sha1: {}
                                                        },
                                                        r = {},
                                                        s = 0,
                                                        o = n; s < o.length; s++)
                                                        y = o[s],
                                                            i[y.hashAlgorithm][y.hash] = !0,
                                                            (v = r[y.hash]) ? v.push(y) : r[y.hash] = [y];
                                                    u = {
                                                        fsnv: Object.keys(i.fsnv),
                                                        sha1: Object.keys(i.sha1)
                                                    },
                                                        a = void 0,
                                                        e.label = 3;
                                                case 3:
                                                    return e.trys.push([3, 5, , 6]),
                                                        [4, this.Bo.queryResources({
                                                            OrgId: t,
                                                            HashesByAlgorithm: u
                                                        })];
                                                case 4:
                                                    return a = e.sent(),
                                                        [3, 6];
                                                case 5:
                                                    return e.sent(),
                                                        [3, 1];
                                                case 6:
                                                    c = 0,
                                                        h = a,
                                                        e.label = 7;
                                                case 7:
                                                    if (!(c < h.length))
                                                        return [3, 15];
                                                    if (f = h[c],
                                                        !(null == (v = r[f.QueryHash]) ? void 0 : v.length))
                                                        return Ft(Xo, "No resource found for hash"),
                                                            [3, 14];
                                                    if (!f.Found || !f.CanonicalHash)
                                                        return [3, 8];
                                                    for (l = 0,
                                                        d = v; l < d.length; l++)
                                                        (y = d[l]).blob = y.stringData = null,
                                                            "fsnv" === (p = f.CanonicalHash.Algorithm) ? this.Et.enqueue({
                                                                Kind: Pt.SYS_RESOURCEHASH,
                                                                Args: ["url", y.url, f.CanonicalHash.Hash]
                                                            }) : Ft(Xo, "Unrecognized canonical hash type", {
                                                                hashAlgorithm: p
                                                            });
                                                    return [3, 14];
                                                case 8:
                                                    w = 0,
                                                        g = v,
                                                        e.label = 9;
                                                case 9:
                                                    if (!(w < g.length))
                                                        return [3, 14];
                                                    if (y = g[w],
                                                        m = y.url,
                                                        b = y.contentType,
                                                        !(S = y.blob || y.stringData))
                                                        return Ft(Xo, "Missing resource contents"),
                                                            [3, 13];
                                                    if (k = y.blob || new Blob([S], {
                                                        type: b
                                                    }),
                                                        (_ = new this.Fo).append("orgId", t),
                                                        _.append("baseUrl", m),
                                                        "fsnv" === f.QueryAlgorithm)
                                                        _.append("fsnvHash", f.QueryHash);
                                                    else {
                                                        if ("sha1" !== f.QueryAlgorithm)
                                                            return Ft(Xo, "Unrecognized hash type from resource query", {
                                                                hashAlgorithm: f.QueryAlgorithm
                                                            }),
                                                                [3, 13];
                                                        _.append("sha1Hash", f.QueryHash)
                                                    }
                                                    _.append("contents", k, "blob"),
                                                        y.blob = y.stringData = null,
                                                        e.label = 10;
                                                case 10:
                                                    return e.trys.push([10, 12, , 13]),
                                                        [4, this.Bo.uploadResource(_)];
                                                case 11:
                                                    return A = e.sent(),
                                                        "fsnv" != (T = JSON.parse(A)).Algorithm && Ft(Xo, "Unexpected hash type from resource upload", {
                                                            hashAlgorithm: T.Algorithm
                                                        }),
                                                        this.Et.enqueue({
                                                            Kind: Pt.SYS_RESOURCEHASH,
                                                            Args: ["url", m, T.Hash]
                                                        }),
                                                        [3, 13];
                                                case 12:
                                                    return e.sent(),
                                                        [3, 13];
                                                case 13:
                                                    return w++,
                                                        [3, 9];
                                                case 14:
                                                    return c++,
                                                        [3, 7];
                                                case 15:
                                                    return [3, 1];
                                                case 16:
                                                    return [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.Go = function () {
                            var t = this
                                , n = Ir()
                                , i = n.resolve
                                , r = n.promise
                                , e = function () {
                                    t.Xo = null,
                                        t.Vo = !1;
                                    var n = t.qo;
                                    t.qo = [],
                                        i(n)
                                };
                            return this.Vo ? e() : this.Xo = e,
                                r
                        }
                        ,
                        t.prototype.uploadIfNeeded = function (t, n) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var i, r;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return this.Fo ? (i = n.href,
                                                        this.be[i] ? [2] : function (t, n) {
                                                            switch (n.protocol) {
                                                                case "blob:":
                                                                    return !0;
                                                                case "http:":
                                                                case "https:":
                                                                    switch (n.hostname) {
                                                                        case "localhost":
                                                                        case "127.0.0.1":
                                                                        case "[::1]":
                                                                            return t.location.protocol === n.protocol && t.location.host === n.host;
                                                                        case "::1":
                                                                            var i = n.port ? "[::1]:" + n.port : "[::1]";
                                                                            return t.location.protocol === n.protocol && t.location.host === i;
                                                                        default:
                                                                            return !1;
                                                                    }
                                                                default:
                                                                    return !1;
                                                            }
                                                        }(t, n) ? (this.be[i] = !0,
                                                            [4, this.Qo(i)]) : [2]) : [2];
                                                case 1:
                                                    return (r = e.sent()) ? (this.Yo(r),
                                                        [2]) : [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.Yo = function (t) {
                            var n = this
                                , i = 0 == this.qo.length;
                            this.qo.push(t),
                                i && new this.Wo(function () {
                                    n.Vo = !0,
                                        n.Xo && n.Xo()
                                }
                                    , 50).start()
                        }
                        ,
                        t.prototype.Qo = function (t) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var n, i, r, s, o;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return this.zo[t] ? [2, this.zo[t]] : [4, Yo(t)];
                                                case 1:
                                                    return (n = e.sent()) ? [4, Jo(this.Tt, n.buffer)] : [2, null];
                                                case 2:
                                                    return i = e.sent(),
                                                        r = i.hash,
                                                        s = i.algorithm,
                                                        o = {
                                                            hash: r,
                                                            hashAlgorithm: s,
                                                            url: t,
                                                            blob: n.blob,
                                                            contentType: n.contentType
                                                        },
                                                        this.zo[o.url] = o,
                                                        [2, o];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.uploadDataUrlIfNeeded = function (t, n) {
                            return void 0 === n && (n = function () {
                                return !0
                            }
                            ),
                                (0,
                                    e.__awaiter)(this, void 0, Ni, function () {
                                        var i, r, s, o, u;
                                        return (0,
                                            e.__generator)(this, function (e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return i = function (t) {
                                                            var n, i = t.indexOf(",");
                                                            if (-1 !== i)
                                                                try {
                                                                    var r = t.substring(0, i).match(Zo)
                                                                        , e = void 0
                                                                        , s = void 0;
                                                                    r && (e = r[1],
                                                                        s = null === (n = r[2]) || void 0 === n ? void 0 : n.substring(1));
                                                                    for (var o = atob(t.substring(i + 1)), u = new ArrayBuffer(o.length), a = new Uint8Array(u), c = 0; c < o.length; ++c)
                                                                        a[c] = o.charCodeAt(c);
                                                                    return {
                                                                        blob: new Blob([u], {
                                                                            type: e
                                                                        }),
                                                                        buffer: u,
                                                                        contentType: e,
                                                                        charset: s
                                                                    }
                                                                } catch (n) {
                                                                    return void Ot.sendToBugsnag(tu, "warning", {
                                                                        input: t.substring(0, 100),
                                                                        err: n
                                                                    })
                                                                }
                                                            else
                                                                Ot.sendToBugsnag(tu, "warning", {
                                                                    input: t.substring(0, 100)
                                                                })
                                                        }(t),
                                                            i ? [4, Jo(this.Tt, i.buffer)] : [2, void 0];
                                                    case 1:
                                                        return r = e.sent(),
                                                            s = r.hash,
                                                            o = r.algorithm,
                                                            u = {
                                                                hash: s,
                                                                hashAlgorithm: o,
                                                                url: "https://data-url.fs.invalid/" + o + "/" + s,
                                                                blob: i.blob,
                                                                contentType: i.blob.type || "application/octet-stream"
                                                            },
                                                            n(u) ? (this.zo[u.url] = u,
                                                                this.Yo(u),
                                                                [2, u]) : [2, u];
                                                }
                                            })
                                    })
                        }
                        ,
                        t
                }();
            function Yo(t) {
                var n = Ir()
                    , i = n.resolve
                    , r = n.promise
                    , e = new XMLHttpRequest;
                return "string" != typeof e.responseType ? (i(null),
                    r) : (e.open("GET", t, !0),
                        e.responseType = "blob",
                        e.onerror = function () {
                            i(null)
                        }
                        ,
                        e.onload = function () {
                            if (200 != e.status && 0 !== e.status)
                                return He(t, {
                                    source: "log",
                                    type: "debug"
                                }),
                                    void i(null);
                            var n = e.response;
                            if ((n.size || n.length) > Go) {
                                var r = He(t, {
                                    source: "log",
                                    type: "bugsnag"
                                });
                                return Ot.sendToBugsnag("Size of blob resource exceeds limit", "warning", {
                                    url: r,
                                    MaxResourceSizeBytes: Go
                                }),
                                    void i(null)
                            }
                            (function (t) {
                                var n = Ir()
                                    , i = n.resolve
                                    , r = n.promise
                                    , e = new FileReader;
                                return e.readAsArrayBuffer(t),
                                    e.onload = function () {
                                        i(e.result)
                                    }
                                    ,
                                    e.onerror = function (t) {
                                        Ot.sendToBugsnag(t, "error"),
                                            i(null)
                                    }
                                    ,
                                    r
                            }
                            )(n).then(function (t) {
                                i(t ? {
                                    buffer: t,
                                    blob: n,
                                    contentType: n.type
                                } : null)
                            })
                        }
                        ,
                        e.send(),
                        r)
            }
            function Jo(t, n) {
                var i, r;
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var s;
                        return (0,
                            e.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return s = t.window,
                                            (null === (r = null === (i = s.crypto) || void 0 === i ? void 0 : i.subtle) || void 0 === r ? void 0 : r.digest) ? [4, s.crypto.subtle.digest({
                                                name: "sha-1"
                                            }, n)] : [3, 2];
                                    case 1:
                                        return [2, {
                                            hash: zo(e.sent()),
                                            algorithm: "sha1"
                                        }];
                                    case 2:
                                        return [4, $o(t.time, jr, n)];
                                    case 3:
                                        return [2, {
                                            hash: e.sent().hash,
                                            algorithm: "fsnv"
                                        }];
                                }
                            })
                    })
            }
            var Zo = /^data:([^;,]*)(;?charset=[^;]+)?(?:;base64)?$/i
                , tu = "Could not parse data url"
                , nu = function (t, n, i) {
                    this.name = "ProtocolError",
                        this.message = n,
                        this.status = t,
                        this.data = i
                };
            function iu(t) {
                return t >= 400 && 502 !== t || 202 == t || 206 == t
            }
            var ru = function () {
                function t(t) {
                    this.Jo = 0,
                        this.Zo = t.options.scheme,
                        this.tu = t.options.cdnHost,
                        this.Tt = t
                }
                return t.prototype.page = function (t) {
                    return (0,
                        e.__awaiter)(this, void 0, Ni, function () {
                            return (0,
                                e.__generator)(this, function (n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, ou(this.Zo, fu(this.Tt), "/rec/page", pt(t))];
                                        case 1:
                                            return [2, yt(n.sent().text)];
                                    }
                                })
                        })
                }
                    ,
                    t.prototype.settings = function (t) {
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var n, i;
                                return (0,
                                    e.__generator)(this, function (r) {
                                        switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]),
                                                    n = t.previewMode ? fu(this.Tt) : this.tu,
                                                    [4, hu(this.Zo, n, t)];
                                            case 1:
                                                return [2, r.sent()];
                                            case 2:
                                                if (i = r.sent(),
                                                    t.previewMode)
                                                    throw i;
                                                return [3, 3];
                                            case 3:
                                                return [2, hu(this.Zo, fu(this.Tt), t)];
                                        }
                                    })
                            })
                    }
                    ,
                    t.prototype.bundle = function (t) {
                        var n;
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var i, r, s, o;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, Or()];
                                            case 1:
                                                return e.sent(),
                                                    window,
                                                    i = pt(t.bundle),
                                                    this.Jo += i.length,
                                                    this.Jo,
                                                    window,
                                                    i.length > 2e6 ? [4, Or()] : [3, 3];
                                            case 2:
                                                e.sent(),
                                                    e.label = 3;
                                            case 3:
                                                return window,
                                                    r = su(t.bundle.Seq, t),
                                                    [4, ou(this.Zo, null !== (n = t.recHost) && void 0 !== n ? n : fu(this.Tt), r, i)];
                                            case 4:
                                                return s = e.sent().text,
                                                    o = yt(s),
                                                    window,
                                                    [2, [this.Jo, o]];
                                        }
                                    })
                            })
                    }
                    ,
                    t.prototype.bundleBeacon = function (t) {
                        var n;
                        return cu(this.Zo, null !== (n = t.recHost) && void 0 !== n ? n : fu(this.Tt), t)
                    }
                    ,
                    t.prototype.exponentialBackoffMs = function (t, n) {
                        var i = o.mathMin(vn.BackoffMax, 5e3 * o.mathPow(2, t));
                        return n ? i + .25 * o.mathRandom() * i : i
                    }
                    ,
                    t
            }()
                , eu = function () {
                    function t(t) {
                        this.Zo = t.options.scheme,
                            this.Tt = t
                    }
                    return t.prototype.uploadResource = function (t) {
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                return (0,
                                    e.__generator)(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                return [4, ou(this.Zo, fu(this.Tt), "/rec/uploadResource", t)];
                                            case 1:
                                                return [2, n.sent().text];
                                        }
                                    })
                            })
                    }
                        ,
                        t.prototype.queryResources = function (t) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (n) {
                                            switch (n.label) {
                                                case 0:
                                                    return [4, ou(this.Zo, fu(this.Tt), "/rec/queryResources", pt(t))];
                                                case 1:
                                                    return [2, yt(n.sent().text)];
                                            }
                                        })
                                })
                        }
                        ,
                        t
                }();
            function su(t, n) {
                var i = "/rec/bundle" + ("v2" === n.version ? "/v2" : "") + "?OrgId=" + n.orgId + "&UserId=" + n.userId + "&SessionId=" + n.sessionId + "&PageId=" + n.pageId + "&Seq=" + t;
                return null != n.serverPageStart && (i += "&PageStart=" + n.serverPageStart),
                    null != n.serverBundleTime && (i += "&PrevBundleTime=" + n.serverBundleTime),
                    null != n.lastUserActivity && (i += "&LastActivity=" + n.lastUserActivity),
                    n.isNewSession && (i += "&IsNewSession=true"),
                    null != n.deltaT && (i += "&DeltaT=" + n.deltaT),
                    i
            }
            function ou(t, n, i, r) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        return (0,
                            e.__generator)(this, function (e) {
                                return [2, au("POST", t, n, vu(i), !0, r)]
                            })
                    })
            }
            function uu(t, n, i) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        return (0,
                            e.__generator)(this, function (r) {
                                return [2, au("GET", t, n, vu(i), !1)]
                            })
                    })
            }
            function au(t, n, i, r, s, o) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        return (0,
                            e.__generator)(this, function (e) {
                                return [2, new Ni(function (e, u) {
                                    var a = "//" + i + r
                                        , c = !1
                                        , h = new XMLHttpRequest
                                        , f = ("withCredentials" in h);
                                    Rt(f, "XHR missing CORS support"),
                                        f && (h.onreadystatechange = function () {
                                            if (4 == h.readyState) {
                                                if (c)
                                                    return;
                                                c = !0;
                                                try {
                                                    var t = {
                                                        text: h.responseText
                                                    };
                                                    if (200 == h.status)
                                                        return void e(t);
                                                    var n = void 0;
                                                    try {
                                                        n = yt(t.text)
                                                    } catch (t) { }
                                                    u(new nu(h.status, t.text, n))
                                                } catch (t) {
                                                    Ot.sendToBugsnag(t, "error"),
                                                        u(t)
                                                }
                                            }
                                        }
                                            ,
                                            h.open(t, n + a, !0),
                                            h.withCredentials = s,
                                            o && "function" != typeof o.append && h.setRequestHeader("Content-Type", "text/plain"),
                                            h.send(o))
                                }
                                )]
                            })
                    })
            }
            function cu(t, n, i) {
                if ("function" == typeof navigator.sendBeacon) {
                    var r = t + "//" + n + su(i.bundle.Seq, i) + "&SkipResponseBody=true"
                        , e = pt(i.bundle);
                    try {
                        return navigator.sendBeacon.bind(navigator)(r, e)
                    } catch (t) { }
                }
                return !1
            }
            function hu(t, n, i) {
                var r;
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var s, o;
                        return (0,
                            e.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return s = null !== (r = i.version) && void 0 !== r ? r : "v1",
                                            o = i.previewMode ? "?previewMode=true" : "",
                                            [4, uu(t, n, "/s/settings/" + i.orgId + "/" + s + "/web" + o)];
                                    case 1:
                                        return [2, yt(e.sent().text)];
                                }
                            })
                    })
            }
            function fu(t) {
                var n, i = null === (n = t.recording.pageResponse()) || void 0 === n ? void 0 : n.GCLBSubdomain, r = t.options.recHost;
                return i && P(r) ? r.replace(/^rs\./, i + ".") : r
            }
            function vu(t) {
                if (!window.Zone)
                    return t;
                var n = "?";
                return t.indexOf(n) > -1 && (n = "&"),
                    "" + t + n + "ngsw-bypass=true"
            }
            var lu, du = function () {
                function t(t, n, i) {
                    void 0 === i && (i = new pu),
                        this.Tt = t,
                        this.Zr = n,
                        this.nu = i
                }
                return t.prototype.initialize = function (t) {
                    var n;
                    if (t) {
                        this.iu(t);
                        var i = null === (n = this.Tt.window.location) || void 0 === n ? void 0 : n.href;
                        this.onNavigate(i)
                    }
                }
                    ,
                    t.prototype.onNavigate = function (t) {
                        return !!this.nu.matches(t) && (this.Zr.enqueue({
                            Kind: Pt.KEEP_URL,
                            Args: [this.ru(t)]
                        }),
                            !0)
                    }
                    ,
                    t.prototype.onClick = function (t) {
                        var n;
                        return !!(null === (n = null == t ? void 0 : t.watchKind) || void 0 === n ? void 0 : n.has(Hn.Keep)) && (this.Zr.enqueue({
                            Kind: Pt.KEEP_ELEMENT,
                            Args: [t.id]
                        }),
                            !0)
                    }
                    ,
                    t.prototype.urlMatches = function (t) {
                        return this.nu.matches(t)
                    }
                    ,
                    t.prototype.iu = function (t) {
                        this.nu.setRules(t)
                    }
                    ,
                    t.prototype.ru = function (t) {
                        return He(t, {
                            source: "page",
                            type: "base"
                        })
                    }
                    ,
                    t
            }(), pu = function () {
                function t() {
                    this.eu = null
                }
                return t.prototype.setRules = function (t) {
                    var n = t.map(function (t) {
                        return t.Regex
                    }).filter(this.su);
                    n.length > 0 && (this.eu = this.ou(n))
                }
                    ,
                    t.prototype.matches = function (t) {
                        return !!this.eu && this.eu.test(t)
                    }
                    ,
                    t.prototype.su = function (t) {
                        try {
                            return new RegExp(t),
                                !0
                        } catch (n) {
                            return Ot.sendToBugsnag("Browser rejected UrlKeep.Regex", "error", {
                                expr: t,
                                error: n.toString()
                            }),
                                !1
                        }
                    }
                    ,
                    t.prototype.ou = function (t) {
                        try {
                            return new RegExp("(" + t.join(")|(") + ")", "i")
                        } catch (n) {
                            return Ot.sendToBugsnag("Browser rejected joining UrlKeep.Regexs", "error", {
                                exprs: t,
                                error: n.toString()
                            }),
                                null
                        }
                    }
                    ,
                    t
            }(), wu = function (t) {
                var n = (void 0 === t ? {} : t).wnd
                    , i = void 0 === n ? window : n;
                !function (t, n, i, r, e, s, o, u) {
                    var a, c;
                    function h(t) {
                        var n, i = [];
                        function r() {
                            n && (i.forEach(function (t) {
                                var i;
                                try {
                                    i = t[n[0]] && t[n[0]](n[1])
                                } catch (n) {
                                    return void (t[3] && t[3](n))
                                }
                                i && i.then ? i.then(t[2], t[3]) : t[2] && t[2](i)
                            }),
                                i.length = 0)
                        }
                        function e(t) {
                            return function (i) {
                                n || (n = [t, i],
                                    r())
                            }
                        }
                        return t(e(0), e(1)),
                        {
                            then: function (t, n) {
                                return h(function (e, s) {
                                    i.push([t, n, e, s]),
                                        r()
                                })
                            }
                        }
                    }
                    (!(i in t) || (t.console && t.console.log && t.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"]."),
                        0)) && (o = t[i] = function () {
                            var t = function (t, i, r) {
                                function e(e, s) {
                                    n(t, i, r, e, s)
                                }
                                var s = /Async$/;
                                return s.test(t) ? (t = t.replace(s, ""),
                                    "function" == typeof Promise ? new Promise(e) : h(e)) : n(t, i, r)
                            };
                            function n(n, i, r, e, s) {
                                return t._api ? t._api(n, i, r, e, s) : (t.q && t.q.push([n, i, r, e, s]),
                                    null)
                            }
                            return t.q = [],
                                t
                        }(),
                            function () {
                                function t() { }
                                function n(t, n, i) {
                                    o("setProperties", {
                                        type: t,
                                        properties: n
                                    }, i)
                                }
                                function i(t, i) {
                                    n("user", t, i)
                                }
                                function r(t, n, r) {
                                    i({
                                        uid: t
                                    }, r),
                                        n && i(n, r)
                                }
                                o.identify = r,
                                    o.setUserVars = i,
                                    o.identifyAccount = t,
                                    o.clearUserCookie = t,
                                    o.setVars = n,
                                    o.event = function (t, n, i) {
                                        o("trackEvent", {
                                            name: t,
                                            properties: n
                                        }, i)
                                    }
                                    ,
                                    o.anonymize = function () {
                                        r(!1)
                                    }
                                    ,
                                    o.shutdown = function () {
                                        o("shutdown")
                                    }
                                    ,
                                    o.restart = function () {
                                        o("restart")
                                    }
                                    ,
                                    o.log = function (t, n) {
                                        o("log", {
                                            level: t,
                                            msg: n
                                        })
                                    }
                                    ,
                                    o.consent = function (t) {
                                        o("setIdentity", {
                                            consent: !arguments.length || t
                                        })
                                    }
                            }(),
                            a = "fetch",
                            c = "XMLHttpRequest",
                            o._w = {},
                            o._w[c] = t[c],
                            o._w[a] = t[a],
                            t[a] && (t[a] = function () {
                                return o._w[a].apply(this, arguments)
                            }
                            ),
                            o._v = "2.0.0")
                }(i, i.document, i._fs_namespace, 0, i._fs_script)
            };
            function gu(t, n) {
                if (t && t.postMessage)
                    try {
                        t.postMessage(function (t) {
                            var n;
                            return pt(((n = {}).__fs = t,
                                n))
                        }(n), "*")
                    } catch (t) {
                        Ft("postMessage", t)
                    }
            }
            function yu(t) {
                try {
                    var n = yt(t);
                    if ("__fs" in n)
                        return n.__fs
                } catch (t) { }
                return [lu.Unknown]
            }
            function mu(t, n, i, r) {
                var e = z(t);
                if (!e)
                    return !1;
                try {
                    e.send(n, i, r)
                } catch (t) {
                    e.send(n, i)
                }
                return !0
            }
            !function (t) {
                t.EndPreviewMode = "EndPreviewMode",
                    t.EvtBundle = "EvtBundle",
                    t.GreetFrame = "GreetFrame",
                    t.InitFrameMobile = "InitFrameMobile",
                    t.RequestFrameId = "RequestFrameId",
                    t.RestartFrame = "RestartFrame",
                    t.SetConsent = "SetConsent",
                    t.SetFrameId = "SetFrameId",
                    t.ShutdownFrame = "ShutdownFrame",
                    t.Unknown = "Unknown"
            }(lu || (lu = {}));
            var bu = new RegExp(/^\s+$/)
                , Su = /^fb\d{18}$/
                , ku = function (t) {
                    var n = t.frame
                        , i = t.orgId
                        , r = t.scheme
                        , e = t.script
                        , s = t.recHost
                        , u = t.cdnHost
                        , a = t.appHost
                        , c = t.namespace
                        , h = (t.desc,
                            t.snippetVersion);
                    try {
                        if (function (t) {
                            return t.id == t.name && Su.test(t.id)
                        }(n))
                            return Dt.BlocklistedFrame;
                        if (function (t) {
                            return !(t.contentDocument && t.contentWindow && t.contentWindow.location) || function (t) {
                                return !!t.src && "about:blank" != t.src && t.src.indexOf("javascript:") < 0
                            }(t) && t.src != t.contentWindow.location.href && "loading" == t.contentDocument.readyState
                        }(n))
                            return Dt.PartiallyLoaded;
                        var f = n.contentWindow
                            , v = n.contentDocument;
                        if (!f || !v)
                            return Dt.MissingWindowOrDocument;
                        if (!v.head)
                            return Dt.MissingDocumentHead;
                        if (!v.body || 0 === v.body.childNodes.length)
                            return Dt.MissingBodyOrChildren;
                        for (var l = !1, d = v.body.childNodes, p = 0; p < d.length; p++) {
                            switch (d[p].nodeType) {
                                case Node.ELEMENT_NODE:
                                    if ("SCRIPT" === d[p].tagName)
                                        continue;
                                    break;
                                case Node.TEXT_NODE:
                                    var w = d[p].textContent;
                                    if (null === w || bu.test(w))
                                        continue;
                                    break;
                                case Node.COMMENT_NODE:
                                    continue;
                            }
                            l = !0;
                            break
                        }
                        if (!l)
                            return Dt.NoNonScriptElement;
                        if (j(f))
                            return Dt.AlreadyDefined;
                        var g = f;
                        return g._fs_org = i,
                            g._fs_script = e,
                            g._fs_rec_host = s,
                            g._fs_rec_settings_host = u,
                            g._fs_app_host = a,
                            g._fs_run_in_iframe = !0,
                            g._fs_namespace = c,
                            g._fs_transport = function (t) {
                                return {
                                    send: function (n, i, r) {
                                        if (void 0 !== t.parent) {
                                            var e = j(t.parent);
                                            void 0 !== e && "function" == typeof e._withRecorder && e._withRecorder(r, function (e) {
                                                try {
                                                    e.onMessageReceived(t, [n, o.jsonParse(i), r])
                                                } catch (t) {
                                                    t instanceof SyntaxError && Ot.sendToBugsnag(t, "error", {
                                                        msg: "Received invalid JSON"
                                                    })
                                                }
                                            })
                                        }
                                    }
                                }
                            }(g),
                            function (t, n, i, r, e, s) {
                                /^2\./.test(s) ? wu({
                                    wnd: t
                                }) : function (t) {
                                    var n, i, r, e, s, o = (void 0 === t ? {} : t).wnd, u = void 0 === o ? window : o;
                                    n = u,
                                        u.document,
                                        i = u._fs_namespace,
                                        r = "user",
                                        i in n ? n.console && n.console.log && n.console.log("FullStory namespace conflict. Please set window[\"_fs_namespace\"].") : ((e = n[i] = function (t, n, i) {
                                            e.q ? e.q.push([t, n, i]) : e._api(t, n, i)
                                        }
                                        ).q = [],
                                            e.identify = function (t, n, i) {
                                                e(r, {
                                                    uid: t
                                                }, i),
                                                    n && e(r, n, i)
                                            }
                                            ,
                                            e.setUserVars = function (t, n) {
                                                e(r, t, n)
                                            }
                                            ,
                                            e.event = function (t, n, i) {
                                                e("event", {
                                                    n: t,
                                                    p: n
                                                }, i)
                                            }
                                            ,
                                            e.anonymize = function () {
                                                e.identify(!1)
                                            }
                                            ,
                                            e.shutdown = function () {
                                                e("rec", !1)
                                            }
                                            ,
                                            e.restart = function () {
                                                e("rec", !0)
                                            }
                                            ,
                                            e.log = function (t, n) {
                                                e("log", [t, n])
                                            }
                                            ,
                                            e.consent = function (t) {
                                                e("consent", !arguments.length || t)
                                            }
                                            ,
                                            e.identifyAccount = function (t, n) {
                                                (n = n || {}).acctId = t,
                                                    e("account", n)
                                            }
                                            ,
                                            e.clearUserCookie = function () { }
                                            ,
                                            e.setVars = function (t, n) {
                                                e("setVars", [t, n])
                                            }
                                            ,
                                            e._w = {},
                                            s = "XMLHttpRequest",
                                            e._w[s] = n[s],
                                            s = "fetch",
                                            e._w[s] = n[s],
                                            n[s] && (n[s] = function () {
                                                return e._w[s].apply(this, arguments)
                                            }
                                            ),
                                            e._v = "1.3.0")
                                }({
                                    wnd: t
                                });
                                var o = n.createElement("script");
                                o.async = !0,
                                    o.crossOrigin = "anonymous",
                                    o.src = i + "//" + r,
                                    "testdrive" == e && (o.src += "?allowMoo=true"),
                                    n.head.appendChild(o)
                            }(g, v, r, e, i, h),
                            Dt.Successful
                    } catch (t) {
                        return Dt.Exception
                    }
                };
            function _u(t) {
                var n = "" + ti(t);
                return t.id && (n += "#" + t.id),
                    n + "[src=" + He(t.src, {
                        source: "log",
                        type: "debug"
                    }) + "]"
            }
            var Au, Tu = function () {
                function t(t, n) {
                    var i;
                    this.ii = t,
                        this.Et = [],
                        this.uu = !1,
                        this.lt = null !== (i = n.interval) && void 0 !== i ? i : 1e3,
                        this.au = n.onFlush
                }
                return t.prototype.append = function (t) {
                    this.schedule(),
                        this.Et.push(t)
                }
                    ,
                    t.prototype.flush = function () {
                        this.uu = !1,
                            this.au(this.Et),
                            this.Et = []
                    }
                    ,
                    t.prototype.schedule = function () {
                        this.uu || (o.setWindowTimeout(this.ii, Y(this.flush.bind(this)), this.lt),
                            this.uu = !0)
                    }
                    ,
                    t
            }(), Eu = "https://fs-obfuscated.invalid", Cu = function () {
                function t(t, n) {
                    var i = this;
                    this.ii = t,
                        this.Et = n,
                        this.cu = 0,
                        this.hu = {},
                        this.fu = function (t) {
                            var n;
                            try {
                                if ("function" == typeof (null === (n = t.crypto) || void 0 === n ? void 0 : n.getRandomValues)) {
                                    var i = ""
                                        , r = new Uint32Array(2);
                                    t.crypto.getRandomValues(r);
                                    for (var e = 0; e < r.length; e++)
                                        i += r[e].toString(16);
                                    return i
                                }
                            } catch (t) { }
                            return o.mathFloor(1e20 * (o.mathRandom() + .1)).toString(16)
                        }(this.ii),
                        this.Et.enqueue({
                            Kind: Pt.URL_SALT,
                            Args: [this.fu]
                        }),
                        this.vu = new Tu(this.ii, {
                            interval: 500,
                            onFlush: function (t) {
                                return i.au(t)
                            }
                        })
                }
                return t.prototype.flush = function () {
                    this.vu.flush()
                }
                    ,
                    t.prototype.au = function (t) {
                        0 !== t.length && this.Et.enqueue({
                            Kind: Pt.URL_ID,
                            Args: t
                        })
                    }
                    ,
                    t.prototype.record = function (t) {
                        if (/^(file|http)/i.test(t)) {
                            var n = this.lu(t, !0)
                                , i = n[0];
                            n[1] && this.vu.append([t, i])
                        }
                    }
                    ,
                    t.prototype.seen = function (t) {
                        return this.lu(t, !1)[0]
                    }
                    ,
                    t.prototype.lu = function (t, n) {
                        var i = t.substring(0, 5e3);
                        if (void 0 === this.hu[i]) {
                            var r = this.cu++;
                            return this.hu[i] = {
                                id: r,
                                record: n
                            },
                                [r, n]
                        }
                        var e = !1;
                        return n && (e = !1 === this.hu[i].record,
                            this.hu[i].record = !0),
                            [this.hu[i].id, e]
                    }
                    ,
                    t.prototype.obfuscateUrl = function (t, n) {
                        return "css" === n ? this.du(t) : this.pu(t)
                    }
                    ,
                    t.prototype.du = function (t) {
                        var n = Wo(t.substring(0, 5e3) + this.fu);
                        return Eu + "?hash=" + n + "&algorithm=fnv32"
                    }
                    ,
                    t.prototype.pu = function (t) {
                        var n = this.seen(t);
                        return Eu + "?url-id=" + n
                    }
                    ,
                    t
            }();
            !function (t) {
                t[t.NoInfoYet = 1] = "NoInfoYet",
                    t[t.Enabled = 2] = "Enabled",
                    t[t.Disabled = 3] = "Disabled"
            }(Au || (Au = {}));
            var Iu, ju = function () {
                function t(t, n, i, r, e) {
                    var s = this;
                    this.Tt = t,
                        this.wu = e,
                        this.gu = vn.DefaultOrgSettings,
                        this.yu = !1,
                        this.Eo = null,
                        this.Co = [],
                        this.mu = vn.DefaultBundleUploadInterval,
                        this.bu = [],
                        this.Su = new WeakMap,
                        this.ku = [],
                        this.C = new _n,
                        this._u = Au.NoInfoYet,
                        this.Au = !1,
                        this.Tu = !1,
                        this.Eu = {},
                        this.Et = new Bo(t, r, i, function () {
                            return s.Cu.bundleEvents()
                        }
                            , n);
                    var o = new Qo(t, this.Et, new eu(t))
                        , u = new Cu(t.window, this.Et);
                    this.an = new se,
                        this.Je = new du(t, this.Et),
                        this.Cu = new xo(t, this.Et, this.Je, this.an, this.C, function (t) {
                            return s.Ze(t)
                        }
                            , function (t) {
                                return s.ts(t)
                            }
                            , o, u),
                        this.Zo = t.options.scheme,
                        this.Iu = t.options.script,
                        this.ju = t.options.recHost,
                        this.tu = t.options.cdnHost,
                        this.xu = t.options.appHost,
                        this.Ou = t.options.orgId,
                        this.ii = t.window
                }
                return t.prototype.getPageResponse = function () {
                    return this.Ku
                }
                    ,
                    t.prototype.bundleUploadInterval = function () {
                        return this.mu
                    }
                    ,
                    t.prototype.setInitConfig = function (t) {
                        this.Mu = t
                    }
                    ,
                    t.prototype.start = function (t, n, i) {
                        var r = this;
                        this.Ru = n,
                            this.Pu = i,
                            "onpagehide" in this.ii ? this.C.add(this.ii, "pagehide", !1, function (t) {
                                (null == t ? void 0 : t.persisted) ? r.Et.singSwanSong(qt.Unload) : r.Nu()
                            }) : this.C.add(this.ii, "unload", !1, function (t) {
                                r.Nu()
                            }),
                            this.C.add(this.ii, "message", !1, function (t) {
                                var n = t.data;
                                if ("string" == typeof n) {
                                    var i = t.source;
                                    r.onMessageReceived(i, yu(n))
                                }
                            });
                        var e = this.ii.Document ? this.ii.Document.prototype : this.ii.document;
                        this.Lu = St(e, "close"),
                            this.Lu && this.Lu.afterAsync(function () {
                                r.C.refresh()
                            })
                    }
                    ,
                    t.prototype.tellAllFramesTo = function (t) {
                        for (var n = 0, i = this.bu; n < i.length; n++) {
                            var r = i[n];
                            r.contentWindow && gu(r.contentWindow, t)
                        }
                    }
                    ,
                    t.prototype.queue = function () {
                        return this.Et
                    }
                    ,
                    t.prototype.eventWatcher = function () {
                        return this.Cu
                    }
                    ,
                    t.prototype.console = function () {
                        return this.Cu.consoleWatcher()
                    }
                    ,
                    t.prototype.onDomLoad = function () {
                        this.Cu.onDomLoad()
                    }
                    ,
                    t.prototype.onLoad = function () {
                        this.Cu.onLoad()
                    }
                    ,
                    t.prototype.shutdown = function (t) {
                        this.Tu = !0,
                            this.Cu.stop(t),
                            this.C && this.C.clear(),
                            this.Lu && this.Lu.disable(),
                            this.tellAllFramesTo([lu.ShutdownFrame])
                    }
                    ,
                    t.prototype.getCurrentSessionURL = function (t) {
                        var n = this._u;
                        if (n == Au.NoInfoYet)
                            return null;
                        if (n == Au.Disabled)
                            return this.Zo + "//" + this.xu + "/opt/upgrade";
                        var i = this.getCurrentSession();
                        return i ? (t && (i += ":" + this.Tt.time.wallTime()),
                            this.Zo + "//" + this.xu + "/ui/" + this.Tt.options.orgId + "/" + (this.yu ? "client-" : "") + "session/" + encodeURIComponent(i)) : null
                    }
                    ,
                    t.prototype.getCurrentSession = function () {
                        return this.getIsSessionReady() ? this.Uu + ":" + this.Hu : null
                    }
                    ,
                    t.prototype.getIsSessionReady = function () {
                        var t = this._u;
                        return !(t == Au.NoInfoYet || t == Au.Disabled || !this.Uu || !this.Hu)
                    }
                    ,
                    t.prototype.setConsent = function (t) {
                        var n, i = this;
                        null === (n = this.Tt.recording.identity) || void 0 === n || n.getConsentStore().setConsentState(t);
                        var r = function () {
                            i.an.setConsent(t),
                                i.Et.processEvents()
                        }
                            , e = function () {
                                i.Et.enqueue({
                                    Kind: Pt.SYS_SETCONSENT,
                                    Args: [t, Vt.Document]
                                })
                            };
                        switch (t) {
                            case zt.GrantConsent:
                                e(),
                                    r();
                                break;
                            case zt.RevokeConsent:
                                r(),
                                    e();
                        }
                        this.tellAllFramesTo([lu.SetConsent, t])
                    }
                    ,
                    t.prototype.pageSignature = function () {
                        return this.Uu + ":" + this.Hu + ":" + this.Du
                    }
                    ,
                    t.prototype.getBundleApiVersion = function () {
                        return this.yu ? "v2" : "v1"
                    }
                    ,
                    t.prototype.Bu = function (t) {
                        void 0 === t && (t = !1);
                        var n = N(this.ii, "_fs_ready", "function");
                        if (n)
                            try {
                                t ? n(!0) : n()
                            } catch (t) { }
                    }
                    ,
                    t.prototype.Nu = function () {
                        this.Et.addUnload(qt.Unload),
                            Wi.stopAll()
                    }
                    ,
                    t.prototype.Fu = function (t) {
                        var n, i, r, e, s, o, u, a, c = (null !== (i = null === (n = t.ElementBlocks) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0) > 0 && (null !== (s = null === (e = null === (r = t.OrgSettings) || void 0 === r ? void 0 : r.UrlPrivacyConfig) || void 0 === e ? void 0 : e.length) && void 0 !== s ? s : 0) > 0 && (null !== (a = null === (u = null === (o = t.OrgSettings) || void 0 === o ? void 0 : o.AttributeBlocklist) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0) > 0;
                        return c || Ot.sendToBugsnag("Invalid page response", "error", {
                            rsp: t
                        }),
                            c
                    }
                    ,
                    t.prototype.Wu = function (t, n) {
                        var i, r, e, s, o = t.Flags, u = o.AjaxWatcher, a = o.ClientSideRageClick, c = o.GetCurrentSession, h = o.ResourceUploading, f = o.UseClientSideId;
                        this.Ku = t,
                            this.Uu = t.UserIntId,
                            this.Hu = t.SessionIntId,
                            this.Du = t.PageIntId,
                            this.zu = t.PageStart,
                            this._u = c ? Au.Enabled : Au.Disabled,
                            this.gu = t.OrgSettings,
                            ze(null !== (i = this.gu.UrlPrivacyConfig) && void 0 !== i ? i : vn.DefaultOrgSettings.UrlPrivacyConfig, this.gu.MaxUrlLength);
                        var v = null !== (r = this.gu.AttributeBlocklist) && void 0 !== r ? r : [];
                        (null === (s = null === (e = this.Mu) || void 0 === e ? void 0 : e.privacy) || void 0 === s ? void 0 : s.attributeBlocklist) && (this.Mu.privacy.attributeBlocklist.length,
                            v.push.apply(v, this.Mu.privacy.attributeBlocklist.map(is))),
                            Ze(v),
                            this.Cu.consoleWatcher().initializeMaxLogsPerPage(this.gu.MaxConsoleLogPerPage),
                            this.Cu.ajaxWatcher().initialize({
                                requests: this.gu.HttpRequestHeadersAllowlist,
                                responses: this.gu.HttpResponseHeadersAllowlist,
                                maxAjaxPayloadLength: this.gu.MaxAjaxPayloadLength
                            }),
                            this.Cu.perfWatcher().initialize({
                                resourceUploader: this.Cu.getResourceUploader(),
                                recTimings: !!this.gu.RecordPerformanceResourceTiming,
                                recImgs: !!this.gu.RecordPerformanceResourceImg,
                                maxPerfMarksPerPage: this.gu.MaxPerfMarksPerPage
                            }),
                            this.an.initialize({
                                canvasWatcherMode: t.Flags.CanvasWatcherMode,
                                blocks: t.ElementBlocks,
                                deferreds: t.ElementDeferreds,
                                keeps: t.ElementKeeps,
                                watches: t.ElementWatches
                            }),
                            this.Je.initialize(t.UrlKeeps),
                            this.an.initializeConsent(null != n ? n : !!t.Consented),
                            "number" == typeof t.BundleUploadInterval && (this.mu = t.BundleUploadInterval),
                            h && this.Vu(),
                            u && t.AjaxWatches && this.Cu.ajaxWatcher().setWatches(t.AjaxWatches),
                            a && this.Et.enableEasyBake(),
                            f && (this.yu = !0),
                            this.Cu.start(t.Flags)
                    }
                    ,
                    t.prototype.qu = function () {
                        var t;
                        this.Ru && this.Ru({
                            sessionUrl: null !== (t = this.getCurrentSessionURL()) && void 0 !== t ? t : "",
                            settings: this.gu
                        })
                    }
                    ,
                    t.prototype.$u = function () {
                        this.Pu && this.Pu()
                    }
                    ,
                    t.prototype.Vu = function () {
                        this.Au = !0,
                            this.Cu.initResourceUploading()
                    }
                    ,
                    t.prototype.Gu = function () {
                        if (this.ku.length > 0) {
                            for (var t = 0; t < this.ku.length; t++)
                                this.ku[t]();
                            this.ku = []
                        }
                    }
                    ,
                    t.prototype.Xu = function (t) {
                        var n = this;
                        this.Tt.measurer.enqueue(function () {
                            var i = _u(t)
                                , r = n.wu({
                                    frame: t,
                                    orgId: n.Ou,
                                    scheme: n.Zo,
                                    script: n.Iu,
                                    recHost: n.ju,
                                    cdnHost: n.tu,
                                    appHost: n.xu,
                                    namespace: C(n.ii),
                                    desc: i,
                                    snippetVersion: $(n.ii)
                                });
                            r !== Dt.MissingDocumentHead && r !== Dt.MissingBodyOrChildren && r !== Dt.NoNonScriptElement || !t.contentDocument || new MutationObserver(function (i, r) {
                                n.Xu(t),
                                    r.disconnect()
                            }
                            ).observe(t.contentDocument, {
                                childList: !0,
                                subtree: !0
                            }),
                                n.Et.enqueue({
                                    Kind: Pt.FRAME_STATUS,
                                    Args: [ti(t), i, r]
                                })
                        })
                    }
                    ,
                    t.prototype.Qu = function () {
                        var t, n;
                        (null === (t = this.Mu) || void 0 === t ? void 0 : t.privacy) && this.Et.enqueue({
                            Kind: Pt.INIT_API,
                            Args: ["privacy", ["attributeBlocklist", (null !== (n = this.Mu.privacy.attributeBlocklist) && void 0 !== n ? n : []).map(function (t) {
                                return [t.target, t.tag, t.name, t.action, t.type]
                            })]]
                        })
                    }
                    ,
                    t.prototype.Ze = function (t) {
                        var n = ti(t);
                        if (n) {
                            this.bu.push(t);
                            var i = !1;
                            if (t.contentWindow)
                                try {
                                    i = !!j(t.contentWindow)
                                } catch (t) {
                                    i = !0
                                }
                            var r = function (t) {
                                var n = t.src
                                    , i = location.protocol + "//" + location.host;
                                return !n || "about:blank" == n || st(n, "javascript:") || st(n, i)
                            }(t)
                                , e = t.contentWindow && t.contentWindow.postMessage;
                            r && !i || !e ? r ? this.Yu(t) : _u(t) : this.Ju(t, n)
                        } else
                            _u(t)
                    }
                    ,
                    t.prototype.Ju = function (t, n) {
                        t.contentWindow && t.contentWindow.postMessage ? (_u(t),
                            gu(t.contentWindow, [lu.GreetFrame, n])) : _u(t)
                    }
                    ,
                    t.prototype.Yu = function (t) {
                        var n = this;
                        _u(t),
                            this.Xu(t);
                        var i = this.C.add(t, "load", !1, Ot.wrap(function () {
                            _u(t),
                                n.Xu(t)
                        }));
                        this.Su.set(t, i)
                    }
                    ,
                    t.prototype.ts = function (t) {
                        if (ti(t)) {
                            var n = this.Su.get(t);
                            void 0 !== n && (this.C.remove(n),
                                this.Su["delete"](t)),
                                this.bu = this.bu.filter(function (n) {
                                    return n !== t
                                })
                        }
                    }
                    ,
                    t.prototype.onMessageReceived = function (t, n) {
                        if (!t || t.parent == this.ii)
                            switch (n[0]) {
                                case lu.EvtBundle:
                                    var i = n[1]
                                        , r = n[2]
                                        , e = this.pageSignature();
                                    if (e !== r)
                                        return Li({
                                            msg: "Page signature mismatch",
                                            pageSignature: e,
                                            messageSignature: r
                                        }, 1024),
                                            void (t && gu(t, [lu.ShutdownFrame]));
                                    i.length > 0 && this.Et.sendEvents(e, i);
                                    break;
                                case lu.RequestFrameId:
                                    if (!t)
                                        return;
                                    var s = this.Zu(t);
                                    void 0 === s || (this.Eu[s] = !1,
                                        this.ta(t, s));
                                case lu.Unknown:
                            }
                    }
                    ,
                    t.prototype.Zu = function (t) {
                        for (var n = 0, i = this.bu; n < i.length; n++) {
                            var r = i[n];
                            if (r.contentWindow === t)
                                return ti(r)
                        }
                    }
                    ,
                    t.prototype.ta = function (t, n) {
                        var i = this
                            , r = function () {
                                var r = [];
                                0 != i.Eo && null !== i.Eo && (r = i.Co ? i.Co.concat(i.Eo) : [i.Eo]);
                                var e = i.Tt.time.startTime();
                                gu(t, [lu.SetFrameId, n, r, e, i.Zo, i.Iu, i.xu, i.Ou, i.Mu, i.Ku, i.an.getConsent(), i.Tt.time.now()])
                            };
                        null == this.Eo ? this.ku.push(r) : r()
                    }
                    ,
                    t.prototype.na = function (t) {
                        var n = this;
                        this.Tt.measurer.enqueue(function () {
                            n.Et.enqueue({
                                Kind: Pt.DOCUMENT_PROPERTIES,
                                Args: [ti(t.scrollingElement), t.compatMode]
                            })
                        })
                    }
                    ,
                    t
            }();
            !function (t) {
                t.START = "start",
                    t.SHUTDOWN = "shutdown",
                    t.INTERNAL_BUNDLE = "internal/bundle",
                    t.INTERNAL_ERROR = "internal/error",
                    t.INTERNAL_FS_INIT = "internal/fs-init"
            }(Iu || (Iu = {}));
            var xu, Ou = [Iu.START, Iu.SHUTDOWN, Iu.INTERNAL_BUNDLE, Iu.INTERNAL_ERROR, Iu.INTERNAL_FS_INIT], Ku = function () {
                function t(t, n, i, r) {
                    void 0 === r && (r = Vi),
                        this.Tt = t,
                        this.Bo = n,
                        this.ia = i,
                        this.ra = r,
                        this.sing()
                }
                return t.prototype.store = function (t) {
                    var n;
                    t.bundles.length;
                    var i = pt({
                        Bundles: t.bundles,
                        IsNewSession: t.isNewSession,
                        LastBundleTime: t.lastBundleTime,
                        OrgId: this.ia.getOrgId(),
                        PageId: t.pageId,
                        PageStartTime: this.Tt.time.startTime(),
                        RecHost: fu(this.Tt),
                        ServerBundleTime: t.serverBundleTime,
                        ServerPageStart: t.serverPageStart,
                        SessionId: null !== (n = this.ia.getSessionId()) && void 0 !== n ? n : "",
                        UserId: this.ia.getUserId(),
                        Version: t.version
                    });
                    if (!(i.length > 2e6))
                        try {
                            localStorage._fs_swan_song = i
                        } catch (t) { }
                }
                    ,
                    t.prototype.sing = function () {
                        try {
                            var t = this.purge();
                            if (void 0 === t)
                                return;
                            if (!(t.Bundles && t.UserId && t.SessionId && t.PageId))
                                return;
                            t.OrgId || (t.OrgId = this.ia.getOrgId()),
                                t.Bundles.length > 0 && (t.Bundles.length,
                                    this.ea(t))
                        } catch (t) { }
                    }
                    ,
                    t.prototype.purge = function () {
                        try {
                            if ("_fs_swan_song" in localStorage) {
                                var t = localStorage._fs_swan_song;
                                return delete localStorage._fs_swan_song,
                                    yt(t)
                            }
                        } catch (t) { }
                    }
                    ,
                    t.prototype.ea = function (t, n) {
                        return void 0 === n && (n = 0),
                            (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var i, r, s, o;
                                    return (0,
                                        e.__generator)(this, function (u) {
                                            switch (u.label) {
                                                case 0:
                                                    if (i = null,
                                                        !nt(t.Bundles) || 0 === t.Bundles.length || void 0 === t.Bundles[0])
                                                        return [2];
                                                    1 == t.Bundles.length && (i = this.Tt.time.wallTime() - (t.LastBundleTime || 0)),
                                                        u.label = 1;
                                                case 1:
                                                    return u.trys.push([1, 3, , 4]),
                                                        [4, this.Bo.bundle({
                                                            bundle: t.Bundles[0],
                                                            deltaT: i,
                                                            isNewSession: t.IsNewSession,
                                                            orgId: t.OrgId,
                                                            pageId: t.PageId,
                                                            recHost: t.RecHost,
                                                            serverBundleTime: t.ServerBundleTime,
                                                            serverPageStart: t.ServerPageStart,
                                                            sessionId: t.SessionId,
                                                            userId: t.UserId,
                                                            version: t.Version
                                                        })];
                                                case 2:
                                                    return r = u.sent(),
                                                        s = r[1],
                                                        t.Bundles[0].Evts.length,
                                                        t.Bundles[0].Seq,
                                                        t.Bundles.shift(),
                                                        t.Bundles.length > 0 && this.ea((0,
                                                            e.__assign)((0,
                                                                e.__assign)({}, t), {
                                                                ServerBundleTime: s.BundleTime
                                                            })),
                                                        [3, 4];
                                                case 3:
                                                    return (o = u.sent()) instanceof nu && iu(o.status) ? [2] : (this.sa = new this.ra(this.ea, this.Bo.exponentialBackoffMs(n, !0), this, t, n + 1).start(),
                                                        [3, 4]);
                                                case 4:
                                                    return [2];
                                            }
                                        })
                                })
                    }
                    ,
                    t
            }(), Mu = function () {
                function t() { }
                return t.prototype.encode = function (t) {
                    return t
                }
                    ,
                    t
            }(), Ru = function () {
                function t() {
                    this.dict = {
                        idx: -1,
                        map: {}
                    },
                        this.nodeCount = 1,
                        this.startIdx = 0
                }
                return t.prototype.encode = function (n) {
                    if (0 == n.length)
                        return [];
                    var i, r, e = n[0], s = Object.prototype.hasOwnProperty.call(this.dict.map, e) ? this.dict.map[e] : void 0, o = [], u = 1;
                    function a() {
                        s ? u > 1 ? o.push([s.idx, u]) : o.push(s.idx) : o.push(e)
                    }
                    for (i = 1; i < n.length; i++)
                        if (r = n[i],
                            s && Object.prototype.hasOwnProperty.call(s.map, r))
                            u++,
                                e = r,
                                s = s.map[r];
                        else {
                            a();
                            var c = this.startIdx + i - u;
                            null == s && this.nodeCount < t.MAX_NODES && (s = {
                                idx: c,
                                map: {}
                            },
                                this.dict.map[e] = s,
                                this.nodeCount++),
                                s && this.nodeCount < t.MAX_NODES && (s.map[r] = {
                                    idx: c,
                                    map: {}
                                },
                                    this.nodeCount++),
                                u = 1,
                                e = r,
                                s = Object.prototype.hasOwnProperty.call(this.dict.map, r) ? this.dict.map[r] : void 0
                        }
                    return a(),
                        this.startIdx += n.length,
                        o
                }
                    ,
                    t.MAX_NODES = 1e4,
                    t
            }();
            function Pu(t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    switch (i.Kind) {
                        case Pt.DEFERRED_MUT_SHADOW:
                            t[n].Args[1] = Nu(i.Args[1]),
                                t[n].Kind = Pt.MUT_SHADOW;
                            break;
                        case Pt.DEFERRED_MUT_INSERT:
                            t[n].Args[2] = Nu(i.Args[2]),
                                t[n].Kind = Pt.MUT_INSERT;
                    }
                    Rt(i.Kind !== Pt.DEFERRED_MUT_SHADOW && i.Kind !== Pt.DEFERRED_MUT_INSERT, "client only event escaped")
                }
                return t
            }
            function Nu(t) {
                for (var n = [], i = 0, r = t; i < r.length; i++) {
                    var e = r[i];
                    if ("function" == typeof e)
                        for (var s = 0, o = e(); s < o.length; s++) {
                            var u = o[s];
                            n.push(u)
                        }
                    else
                        n.push(e)
                }
                return n
            }
            var Lu = ((xu = {})[Pt.PERF_ENTRY] = !0,
                xu[Pt.AJAX_REQUEST] = !0,
                xu)
                , Uu = function () {
                    function t(t, n, i, r, e, s) {
                        void 0 === r && (r = !0),
                            void 0 === e && (e = zi),
                            void 0 === s && (s = Vi),
                            this.Tt = t,
                            this.Bo = n,
                            this.vo = i,
                            this.oa = r,
                            this.To = e,
                            this.ua = !1,
                            this.aa = 0,
                            this.ca = 0,
                            this.ha = 1,
                            this.fa = 0,
                            this.va = !1,
                            this.la = {},
                            this.da = 16e6,
                            this.pa = 0,
                            this.wa = new Hu(1),
                            this.ga = [],
                            this.ia = t.recording.identity,
                            this.Zo = t.options.scheme,
                            this.ya = t.time.wallTime(),
                            this.ma = new Ku(t, this.Bo, this.ia, s)
                    }
                    return t.prototype.setPageData = function (t) {
                        this.ba = t
                    }
                        ,
                        t.prototype.onShutdown = function (t) {
                            this.Sa = t
                        }
                        ,
                        t.prototype.scheme = function () {
                            return this.Zo
                        }
                        ,
                        t.prototype.enqueueEvents = function (t, n) {
                            for (var i = 0, r = n; i < r.length; i++) {
                                var e = r[i];
                                this.wa.pushEvent(e)
                            }
                        }
                        ,
                        t.prototype.initUploadTicker = function () {
                            this.ka = new this.To(this.Tt.recording.bundleUploadInterval())
                        }
                        ,
                        t.prototype.startPipeline = function (t) {
                            var n, i = this;
                            this.Du = t.pageId,
                                this.zu = t.serverPageStart,
                                this.va = t.isNewSession,
                                jr(this.Tt.recording.bundleUploadInterval() / 5).then(function () {
                                    return i._a()
                                }),
                                this.ka || this.initUploadTicker(),
                                null === (n = this.ka) || void 0 === n || n.start(function () {
                                    i._a()
                                })
                        }
                        ,
                        t.prototype.stopPipeline = function () {
                            this.ka && this.ka.stop(),
                                this.wa = new Hu(this.wa.bundle.Seq),
                                this.ga = [],
                                this.la = {},
                                this.Du = void 0,
                                this.zu = void 0,
                                this.va = !1
                        }
                        ,
                        t.prototype.flush = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return this.Aa(),
                                                        [4, this.Ta()];
                                                case 1:
                                                    return t.sent(),
                                                        [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.singSwanSong = function () {
                            var t;
                            if (this.Du) {
                                this.Aa();
                                var n = [];
                                this.Ea && n.push(this.Ea);
                                for (var i = 0, r = this.ga; i < r.length; i++) {
                                    var e = r[i];
                                    n.push(e)
                                }
                                if (0 !== n.length) {
                                    void 0 !== this.zu && this.ma.store({
                                        pageId: this.Du,
                                        bundles: n,
                                        lastBundleTime: this.ya,
                                        serverPageStart: this.zu,
                                        serverBundleTime: this.pa,
                                        isNewSession: this.va,
                                        version: this.Tt.recording.bundleApiVersion()
                                    });
                                    for (var s = 0, o = n; s < o.length && (e = o[s],
                                        this.Bo.bundleBeacon({
                                            bundle: e,
                                            deltaT: null,
                                            orgId: this.ia.getOrgId(),
                                            pageId: this.Du,
                                            serverBundleTime: this.pa,
                                            serverPageStart: this.zu,
                                            isNewSession: this.va,
                                            sessionId: null !== (t = this.ia.getSessionId()) && void 0 !== t ? t : "",
                                            userId: this.ia.getUserId(),
                                            version: this.Tt.recording.bundleApiVersion()
                                        })); s++)
                                        ;
                                }
                            }
                        }
                        ,
                        t.prototype._a = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return this.Ea ? (this.ua && this.Ca(),
                                                        [2]) : (this.wa.hasActiveEvents() && this.Aa(),
                                                            [4, this.Ta()]);
                                                case 1:
                                                    return t.sent(),
                                                        [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.Aa = function () {
                            if (this.wa.hasAnyEvents()) {
                                var t = this.Ia(function (t) {
                                    return 0 === t.Evts.length || Pu(t.Evts),
                                        t
                                }(this.wa.bundle));
                                return this.wa = this.wa.createNext(),
                                    this.ga.push(t),
                                    t
                            }
                        }
                        ,
                        t.prototype.Ta = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (t) {
                                            switch (t.label) {
                                                case 0:
                                                    return this.Du && this.zu && !this.Ea && 0 != this.ga.length ? (this.Ea = this.ga.shift(),
                                                        [4, this.Ca()]) : [2];
                                                case 1:
                                                    return t.sent(),
                                                        [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.Ca = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var t, n, i, r;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    if ((t = this.Tt.time.wallTime()) < this.ca)
                                                        return [2];
                                                    if (!(n = this.Ea))
                                                        return [2];
                                                    this.ua = !1,
                                                        this.fa = this.ya = t,
                                                        e.label = 1;
                                                case 1:
                                                    return e.trys.push([1, 5, , 6]),
                                                        [4, this.ja(n)];
                                                case 2:
                                                    return (i = e.sent()) ? (n.Seq,
                                                        n.Evts.length,
                                                        this.pa = i.BundleTime,
                                                        this.Ea = void 0,
                                                        this.ca = 0,
                                                        this.aa = 0,
                                                        this.Tt.time.wallTime() - this.fa > this.Tt.recording.bundleUploadInterval() ? [4, this.Ta()] : [3, 4]) : [2];
                                                case 3:
                                                    e.sent(),
                                                        e.label = 4;
                                                case 4:
                                                    return [3, 6];
                                                case 5:
                                                    if ((r = e.sent()) instanceof nu) {
                                                        if (iu(r.status))
                                                            return 206 == r.status ? Ot.sendToBugsnag("Failed to send bundle, probably because of its large size", "error") : r.status >= 500 && Ot.sendToBugsnag("Failed to send bundle, recording outage likely", "error"),
                                                                this.Sa && this.Sa(),
                                                                [2]
                                                    } else
                                                        Ot.sendToBugsnag("Failed to send bundle, unknown err", "error", {
                                                            err: r
                                                        });
                                                    return this.ua = !0,
                                                        this.ca = this.fa + this.Bo.exponentialBackoffMs(this.aa++, !1),
                                                        [3, 6];
                                                case 6:
                                                    return [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.ja = function (t) {
                            var n, i;
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var r, s, o, u;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return this.Du ? (window,
                                                        r = this.vo.getMsSinceLastUserAcivity(),
                                                        [4, this.Bo.bundle({
                                                            bundle: t,
                                                            deltaT: null,
                                                            lastUserActivity: r,
                                                            orgId: this.ia.getOrgId(),
                                                            pageId: this.Du,
                                                            serverBundleTime: this.pa,
                                                            serverPageStart: this.zu,
                                                            isNewSession: this.va,
                                                            sessionId: null !== (n = this.ia.getSessionId()) && void 0 !== n ? n : "",
                                                            userId: this.ia.getUserId(),
                                                            version: this.Tt.recording.bundleApiVersion()
                                                        })]) : [2];
                                                case 1:
                                                    return s = e.sent(),
                                                        o = s[0],
                                                        u = s[1],
                                                        null === (i = this.Tt.recording.observer) || void 0 === i || i.addEvent({
                                                            type: Iu.INTERNAL_BUNDLE,
                                                            data: {
                                                                size: o
                                                            }
                                                        }),
                                                        o > this.da && this.ha > 16 && this.Tt.recording.splitPage(qt.Size),
                                                        window,
                                                        [2, u];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype.Ia = function (t) {
                            if (0 === t.Evts.length)
                                return t;
                            for (var n = [], i = 0, r = t.Evts; i < r.length; i++) {
                                var s = r[i];
                                switch (s.Kind) {
                                    case Pt.SET_FRAME_BASE:
                                        var o = Du(s.PIds, s.FId);
                                        delete this.la[o];
                                        break;
                                    case Pt.MUT_INSERT:
                                        var u = p();
                                        s.Args[2] = this.xa(s.PIds, s.FId, s.Args[2]),
                                            n.push(p() - u);
                                        break;
                                    case Pt.MUT_SHADOW:
                                        u = p(),
                                            s.Args[1] = this.xa(s.PIds, s.FId, s.Args[1]),
                                            n.push(p() - u);
                                }
                            }
                            var a = t.Evts[t.Evts.length - 1];
                            if (this.ba && t.Evts.push((0,
                                e.__assign)((0,
                                    e.__assign)({}, a), this.ba)),
                                0 === n.length)
                                return t;
                            var c = n[0]
                                , h = n.slice(1);
                            return t.Evts.push((0,
                                e.__assign)((0,
                                    e.__assign)({}, a), {
                                    Kind: Pt.TIMING,
                                    Args: [(0,
                                        e.__spreadArray)([Lt.Internal, Ut.Serialization, Ht.LzEncoding, a.When, c], h.map(function (t) {
                                            return [Ht.LzEncoding, t]
                                        }))]
                                })),
                                t
                        }
                        ,
                        t.prototype.xa = function (t, n, i) {
                            void 0 === t && (t = []),
                                void 0 === n && (n = 0);
                            var r = Du(t, n);
                            return this.la[r] || (this.la[r] = this.oa ? new Ru : new Mu),
                                this.la[r].encode(i)
                        }
                        ,
                        t
                }()
                , Hu = function () {
                    function t(t) {
                        this.Oa = !1,
                            this.Ka = {
                                Seq: t,
                                When: -1,
                                Evts: []
                            }
                    }
                    return Object.defineProperty(t.prototype, "bundle", {
                        get: function () {
                            return this.Ka
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                        t.prototype.createNext = function () {
                            return new t(this.Ka.Seq + 1)
                        }
                        ,
                        t.prototype.hasAnyEvents = function () {
                            return this.Ka.Evts.length > 0
                        }
                        ,
                        t.prototype.hasActiveEvents = function () {
                            return this.Oa
                        }
                        ,
                        t.prototype.pushEvent = function (t) {
                            Lu[t.Kind] || (this.Oa = !0),
                                this.Ka.When < 0 && (this.Ka.When = t.When),
                                this.Ka.Evts.push(t)
                        }
                        ,
                        t
                }();
            function Du(t, n) {
                void 0 === t && (t = []),
                    void 0 === n && (n = 0);
                for (var i = "", r = 0, e = t; r < e.length; r++)
                    i += "/" + e[r];
                return i + "/" + n
            }
            var Bu = new RegExp("(^\\?|&)_fs_preview=(?:true|false)(&|$)")
                , Fu = function () {
                    function t(t, n, i) {
                        this.ii = n,
                            this.Ma = i,
                            this.Ra = "fs_preview_" + t
                    }
                    return t.prototype.isPreviewMode = function () {
                        return this.Pa() || this.Na()
                    }
                        ,
                        t.prototype.clear = function () {
                            this.Ma.setValue(this.Ra, "", new Date(1970, 1, 1).toUTCString())
                        }
                        ,
                        t.prototype.write = function () {
                            var t = this.Pa()
                                , n = this.La();
                            (t || n) && (t ? this.Ma.setValue(this.Ra, "true", new Date(p() + 432e5).toUTCString()) : this.clear(),
                                this.Ua())
                        }
                        ,
                        t.prototype.Ua = function () {
                            if (this.ii.history) {
                                var t = location.search.replace(Bu, function (t, n, i) {
                                    return i ? n : ""
                                });
                                this.ii.history.replaceState({}, "", this.ii.location.href.replace(location.search, t))
                            }
                        }
                        ,
                        t.prototype.Pa = function () {
                            return this.ii.document.location.search.indexOf("_fs_preview=true") > -1
                        }
                        ,
                        t.prototype.La = function () {
                            return this.ii.document.location.search.indexOf("_fs_preview=false") > -1
                        }
                        ,
                        t.prototype.Na = function () {
                            return !!this.Ma.getValue(this.Ra)
                        }
                        ,
                        t
                }();
            function Wu(t) {
                var n, i, r;
                return {
                    Kind: Pt.CAPTURE_SOURCE,
                    Args: [t.type, t.entrypoint, "dom", null === (i = null === (n = t.source) || void 0 === n ? void 0 : n.integration) || void 0 === i ? void 0 : i.slice(0, 1024), !!(null === (r = t.source) || void 0 === r ? void 0 : r.userInitiated)]
                }
            }
            function zu(t) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var n, i, r, s;
                        return (0,
                            e.__generator)(this, function (e) {
                                if (n = function (t) {
                                    return "msCrypto" in t ? t.msCrypto : t.crypto
                                }(t),
                                    "function" == typeof (null == n ? void 0 : n.randomUUID))
                                    return [2, n.randomUUID()];
                                for (i = new Uint8Array(16),
                                    n.getRandomValues(i),
                                    i[6] = 15 & i[6] | 64,
                                    i[8] = 63 & i[8] | 128,
                                    r = [],
                                    s = 0; s < i.length; s++)
                                    r.push(function (t, n, i) {
                                        for (var r = t; r.length < 2;)
                                            r = "0" + r;
                                        return r
                                    }(i[s].toString(16)));
                                return [2, ["" + r[0] + r[1] + r[2] + r[3], "" + r[4] + r[5], "" + r[6] + r[7], "" + r[8] + r[9], "" + r[10] + r[11] + r[12] + r[13] + r[14] + r[15]].join("-")]
                            })
                    })
            }
            var Vu = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
            function qu(t) {
                return 36 === t.length && Vu.test(t)
            }
            var $u = void 0
                , Gu = 18e5
                , Xu = function () {
                    function t(t, n, i, r) {
                        void 0 === r && (r = Vi),
                            this.Tt = t,
                            this.vo = n,
                            this.Ha = i,
                            this.Da = 0,
                            this.Ba = new r(this.Fa.bind(this))
                    }
                    return t.prototype.createUserSessionPage = function () {
                        var t;
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var n, i, r, s, o, u;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return n = this.getExistingSession(),
                                                    i = n === $u,
                                                    r = this.Tt.time.wallTime(),
                                                    i ? [4, this.Wa()] : [3, 3];
                                            case 1:
                                                return s = e.sent(),
                                                    [4, zu(this.Tt.window)];
                                            case 2:
                                                return o = e.sent(),
                                                    this.Ha.create({
                                                        userId: s,
                                                        sessionId: o,
                                                        sessionStartTime: r,
                                                        lastUserActivityTime: r,
                                                        pageCount: 1
                                                    }),
                                                    [3, 4];
                                            case 3:
                                                this.Ha.setLastUserActivityTimeMS(r),
                                                    this.Ha.setPageCount((null !== (t = this.Ha.getPageCount()) && void 0 !== t ? t : 0) + 1),
                                                    e.label = 4;
                                            case 4:
                                                return [4, zu(this.Tt.window)];
                                            case 5:
                                                return u = e.sent(),
                                                    [2, {
                                                        userId: this.Ha.getUserId(),
                                                        sessionId: this.Ha.getSessionId(),
                                                        pageId: u,
                                                        isNewSession: i
                                                    }];
                                        }
                                    })
                            })
                    }
                        ,
                        t.prototype.getExistingSession = function () {
                            var t, n, i, r = this.Ha.getUserId();
                            if (!r || !qu(r))
                                return $u;
                            var e = this.Ha.getSessionId();
                            if (!e || !qu(e))
                                return $u;
                            var s = this.Tt.time.wallTime()
                                , u = null !== (t = this.Ha.getSessionStartTimeMS()) && void 0 !== t ? t : 0
                                , a = o.mathAbs(s - u);
                            if (0 === u || a >= 864e5)
                                return $u;
                            var c = null !== (n = this.Ha.getLastUserActivityTimeMS()) && void 0 !== n ? n : u;
                            return o.mathAbs(s - c) >= Gu || (null !== (i = this.Ha.getPageCount()) && void 0 !== i ? i : 0) >= 250 ? $u : e
                        }
                        ,
                        t.prototype.start = function () {
                            this.Ba.start(3e5)
                        }
                        ,
                        t.prototype.stop = function () {
                            this.Ba.stop()
                        }
                        ,
                        t.prototype.Wa = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var t;
                                    return (0,
                                        e.__generator)(this, function (n) {
                                            return (t = this.Ha.getUserId()) && qu(t) ? [2, t] : [2, zu(this.Tt.window)]
                                        })
                                })
                        }
                        ,
                        t.prototype.Fa = function () {
                            var t = this.vo.getLastUserAcitivityTS();
                            t !== this.Da && (this.Da = t,
                                this.Ha.setLastUserActivityTimeMS(t),
                                this.start())
                        }
                        ,
                        t
                }()
                , Qu = function (t) {
                    function n(n, i, r, e, s, o, u) {
                        void 0 === r && (r = !0),
                            void 0 === e && (e = new Ho(n)),
                            void 0 === s && (s = new Uu(n, i, e, r)),
                            void 0 === o && (o = zi),
                            void 0 === u && (u = ku);
                        var a, c = t.call(this, n, o, e, s, u) || this;
                        c.Bo = i,
                            c._o = s,
                            c.za = !1,
                            c.jo = !1,
                            c.Va = !1,
                            s.onShutdown(function () {
                                return c.shutdown(qt.SettingsBlocked)
                            }),
                            c.Mt = c.ii.document,
                            c.Eo = 0,
                            c.ia = n.recording.identity,
                            c.qa = new Fu(c.Ou, c.ii, c.ia.getClientStore()),
                            c._u = Au.NoInfoYet,
                            c.$a = new Xu(n, e, c.ia),
                            a = function (t) {
                                if (c.Cu.stop(qt.Api),
                                    t) {
                                    var n = c.Mt.getElementById(t);
                                    n && c.Ga && n.setAttribute("_fs_embed_token", c.Ga)
                                }
                            }
                            ,
                            c.ii._fs_shutdown = a;
                        var h = c.qa.isPreviewMode();
                        return c.Xa = c.Bo.settings({
                            orgId: c.Ou,
                            previewMode: h
                        })["catch"](function () { }),
                            c
                    }
                    return (0,
                        e.__extends)(n, t),
                        n.prototype.onDomLoad = function () {
                            var n = this;
                            t.prototype.onDomLoad.call(this),
                                this.za = !0,
                                this.Qa(function () {
                                    n.Bu(n.jo)
                                })
                        }
                        ,
                        n.prototype.Ya = function () {
                            var t = N(this.ii, "_fs_replay_flags");
                            if (/[?&]_fs_force_session=true(&|#|$)/.test(location.search) && (t += ",forceSession",
                                this.ii.history)) {
                                var n = location.search.replace(/(^\?|&)_fs_force_session=true(&|$)/, function (t, n, i) {
                                    return i ? n : ""
                                });
                                this.ii.history.replaceState({}, "", this.ii.location.href.replace(location.search, n))
                            }
                            return t
                        }
                        ,
                        n.prototype.start = function (n, i, r) {
                            var s, o, u, a, c;
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var h, f, v, l, d, p, w, g, y, m, b, S, k, _, A, T, E, C, I, j, x, O;
                                    return (0,
                                        e.__generator)(this, function (e) {
                                            switch (e.label) {
                                                case 0:
                                                    return t.prototype.start.call(this, n, i, r),
                                                        [4, this.Xa];
                                                case 1:
                                                    if (!(h = e.sent()))
                                                        return this.Ja(),
                                                            [2];
                                                    ze(null !== (s = h.OrgSettings.UrlPrivacyConfig) && void 0 !== s ? s : vn.DefaultOrgSettings.UrlPrivacyConfig, h.OrgSettings.MaxUrlLength),
                                                        f = this.Ya(),
                                                        e.label = 2;
                                                case 2:
                                                    return e.trys.push([2, 4, , 5]),
                                                        [4, Ni.race([Rr(this.ii), jr(250)])];
                                                case 3:
                                                case 4:
                                                    return e.sent(),
                                                        [3, 5];
                                                case 5:
                                                    v = Mn(this.Mt),
                                                        l = v[0],
                                                        d = v[1],
                                                        K = this.ii,
                                                        M = 0,
                                                        R = 0,
                                                        p = null == K.screen ? [M, R] : (M = parseInt(String(K.screen.width), 10),
                                                            R = parseInt(String(K.screen.height), 10),
                                                            [M = isNaN(M) ? 0 : M, R = isNaN(R) ? 0 : R]),
                                                        w = p[0],
                                                        g = p[1],
                                                        y = "",
                                                        n || (y = this.ia.getUserId()),
                                                        m = this.qa.isPreviewMode(),
                                                        b = null !== (a = null === (u = null === (o = this.Tt) || void 0 === o ? void 0 : o.recording) || void 0 === u ? void 0 : u.preroll) && void 0 !== a ? a : -1,
                                                        S = He(Ie(this.ii), {
                                                            source: "page",
                                                            type: "base"
                                                        }),
                                                        k = He(this.ii.location.href, {
                                                            source: "page",
                                                            type: "url"
                                                        }),
                                                        _ = "" === this.Mt.referrer ? "" : He(this.Mt.referrer, {
                                                            source: "page",
                                                            type: "referrer"
                                                        }),
                                                        A = gt(this.Mt),
                                                        T = function (t) {
                                                            var n, i = "_fs_tab_id";
                                                            try {
                                                                var r = t.sessionStorage.getItem(i);
                                                                if (r)
                                                                    return r;
                                                                var e = Math.floor(1e17 * Math.random()).toString(16);
                                                                return t.sessionStorage.setItem(i, e),
                                                                    null !== (n = t.sessionStorage.getItem(i)) && void 0 !== n ? n : void 0
                                                            } catch (t) {
                                                                return
                                                            }
                                                        }(this.ii),
                                                        E = {
                                                            OrgId: this.Ou,
                                                            UserId: y,
                                                            Url: k,
                                                            Base: S,
                                                            Width: l,
                                                            Height: d,
                                                            ScreenWidth: w,
                                                            ScreenHeight: g,
                                                            SnippetVersion: $(this.ii),
                                                            Referrer: _,
                                                            Preroll: b,
                                                            Doctype: A,
                                                            CompiledVersion: "fb3ed3dc75",
                                                            CompiledTimestamp: 1683814955,
                                                            AppId: this.ia.getAppId(),
                                                            TabId: T,
                                                            PreviewMode: m || void 0
                                                        },
                                                        f && (E.ReplayFlags = f),
                                                        e.label = 6;
                                                case 6:
                                                    return e.trys.push([6, 12, , 13]),
                                                        [4, this.Bo.page(E)];
                                                case 7:
                                                    return C = e.sent(),
                                                        m || !C.PreviewMode ? [3, 9] : [4, this.Bo.settings({
                                                            orgId: this.Ou,
                                                            previewMode: !0
                                                        })["catch"](function () { })];
                                                case 8:
                                                    if (!(h = e.sent()))
                                                        return this.Ja(),
                                                            [2];
                                                    ze(null !== (c = h.OrgSettings.UrlPrivacyConfig) && void 0 !== c ? c : vn.DefaultOrgSettings.UrlPrivacyConfig, h.OrgSettings.MaxUrlLength),
                                                        e.label = 9;
                                                case 9:
                                                    return [4, this.Za(C, h)];
                                                case 10:
                                                    return O = e.sent(),
                                                        this.Fu(O) ? this.Tu ? [2] : (window,
                                                            this.Wu(O),
                                                            window,
                                                            this.tc(O.CookieDomain, O.UserIntId, O.SessionIntId, O.PageIntId, O.EmbedToken),
                                                            O.Flags.UseStatelessConsent || this.ia.getConsentStore().setConsentState(!!O.Consented),
                                                            this.nc(),
                                                            O.PreviewMode && this.ic(),
                                                            I = function (t) {
                                                                return N(t, "_fs_pagestart", "function")
                                                            }(this.ii),
                                                            I && I(),
                                                            this.Et.enqueueFirst(this.Cu.getNavigateEvent(this.ii.location.href, Pt.ENTRY_NAVIGATE)),
                                                            j = !!O.Consented,
                                                            this.Et.enqueueFirst({
                                                                Kind: Pt.SYS_REPORTCONSENT,
                                                                Args: [j, Vt.Document]
                                                            }),
                                                            this.Et.enqueueFirst({
                                                                Kind: Pt.SET_FRAME_BASE,
                                                                Args: [He(Ie(this.ii), {
                                                                    source: "event",
                                                                    type: Pt.SET_FRAME_BASE
                                                                }), A, k, _]
                                                            }),
                                                            this._o.setPageData({
                                                                Kind: Pt.PAGE_DATA,
                                                                Args: [k, S, l, d, w, g, $(this.ii), _, A, b, y, O.PageStart, At(this.ii), this.ii.navigator.userAgent, T, !!O.IsNewSession]
                                                            }),
                                                            this.Et.enqueue({
                                                                Kind: Pt.SCRIPT_COMPILED_VERSION,
                                                                Args: ["fb3ed3dc75"]
                                                            }),
                                                            this.Et.enqueue(Wu({
                                                                type: "default"
                                                            })),
                                                            this.Cu.addVisibilityChangeEvent(),
                                                            this.Qu(),
                                                            [4, this.Et.startPipeline({
                                                                pageId: O.PageIntId,
                                                                serverPageStart: O.PageStart,
                                                                isNewSession: !!O.IsNewSession
                                                            })]) : [2, this.Ja()];
                                                case 11:
                                                    return e.sent(),
                                                        this.na(this.Mt),
                                                        this.qu(),
                                                        [3, 13];
                                                case 12:
                                                    return (x = e.sent()) instanceof nu && (O = x.data) && O.user_id && O.cookie_domain && O.reason_code === un.ReasonBlockedTrafficRamping && y !== O.user_id && this.tc(O.cookie_domain, O.user_id, "", "", ""),
                                                        this.Ja(),
                                                        [3, 13];
                                                case 13:
                                                    return [2];
                                            }
                                            var K, M, R
                                        })
                                })
                        }
                        ,
                        n.prototype.nc = function () {
                            var t = this;
                            this.Va = !0,
                                this.Qa(function () {
                                    t.Bu(t.jo)
                                })
                        }
                        ,
                        n.prototype.tc = function (t, n, i, r, e) {
                            var s = this.ia;
                            s.setIds(this.ii, t, n, i),
                                this.Ga = e,
                                this.qa.write(),
                                s.getUserId(),
                                s.getSessionId()
                        }
                        ,
                        n.prototype.Qa = function (t) {
                            var n, i;
                            if (this.za && this.Va)
                                if (null === (i = null === (n = this.Ku) || void 0 === n ? void 0 : n.Flags) || void 0 === i ? void 0 : i.FetchIntegrations) {
                                    var r = this.Mt.createElement("script");
                                    r.addEventListener("load", t),
                                        r.addEventListener("error", t),
                                        r.async = !0,
                                        r.src = this.Zo + "//" + this.ju + "/rec/integrations?OrgId=" + this.Ou,
                                        this.Mt.head.appendChild(r)
                                } else
                                    t()
                        }
                        ,
                        n.prototype.ic = function () {
                            var t = "FullStory-preview-script";
                            if (!this.Mt.getElementById(t)) {
                                var n = this.Mt.createElement("script");
                                n.id = t,
                                    n.async = !0,
                                    n.src = this.Zo + "//" + this.xu + "/s/fspreview.js",
                                    this.Mt.head.appendChild(n)
                            }
                        }
                        ,
                        n.prototype.Ja = function () {
                            this.$u(),
                                this.shutdown(qt.SettingsBlocked),
                                this.jo = !0,
                                this.Bu(this.jo)
                        }
                        ,
                        n.prototype.Za = function (t, n) {
                            var i;
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var r, s, o;
                                    return (0,
                                        e.__generator)(this, function (u) {
                                            switch (u.label) {
                                                case 0:
                                                    return (r = (0,
                                                        e.__assign)((0,
                                                            e.__assign)({}, t), n)).Flags.UseClientSideId ? (this.ia.setCookieDomain(this.ii, r.CookieDomain),
                                                                qu(s = null !== (i = r.UserUUID) && void 0 !== i ? i : "") && this.ia.setUserId(s),
                                                                [4, this.$a.createUserSessionPage()]) : [3, 2];
                                                case 1:
                                                    o = u.sent(),
                                                        this.$a.start(),
                                                        r = (0,
                                                            e.__assign)((0,
                                                                e.__assign)({}, r), {
                                                                UserIntId: o.userId,
                                                                SessionIntId: o.sessionId,
                                                                PageIntId: o.pageId,
                                                                IsNewSession: o.isNewSession,
                                                                PageStart: p()
                                                            }),
                                                        u.label = 2;
                                                case 2:
                                                    return r.Flags.UseStatelessConsent && (r = (0,
                                                        e.__assign)((0,
                                                            e.__assign)({}, r), {
                                                            Consented: this.ia.getConsentStore().getConsentState()
                                                        })),
                                                        [2, r];
                                            }
                                        })
                                })
                        }
                        ,
                        n.prototype.onMessageReceived = function (n, i) {
                            t.prototype.onMessageReceived.call(this, n, i),
                                (null == n ? void 0 : n.parent) == this.ii && i[0] === lu.EndPreviewMode && this.qa.clear()
                        }
                        ,
                        n
                }(ju)
                , Yu = function () {
                    function t(t, n) {
                        void 0 === n && (n = new Ju(t)),
                            this.ii = t,
                            this.rc = n
                    }
                    return t.prototype.enqueueEvents = function (t, n) {
                        var i = null != t ? t : void 0;
                        this.rc.postMessage(this.ii.parent, [lu.EvtBundle, Pu(n), i], i)
                    }
                        ,
                        t.prototype.startPipeline = function () { }
                        ,
                        t.prototype.stopPipeline = function () { }
                        ,
                        t.prototype.flush = function () {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (t) {
                                            return [2]
                                        })
                                })
                        }
                        ,
                        t.prototype.singSwanSong = function () { }
                        ,
                        t.prototype.onShutdown = function (t) { }
                        ,
                        t.prototype.setPageData = function (t) { }
                        ,
                        t
                }()
                , Ju = function () {
                    function t(t) {
                        this.ii = t
                    }
                    return t.prototype.postMessage = function (t, n, i) {
                        switch (n[0]) {
                            case lu.EvtBundle:
                                mu(this.ii, n[0], pt(n[1]), i) || gu(t, n);
                                break;
                            case lu.RequestFrameId:
                                mu(this.ii, n[0], "[]", i) || gu(t, n);
                                break;
                            default:
                                n[0];
                        }
                    }
                        ,
                        t
                }()
                , Zu = function (t) {
                    function n(n, i, r, e, s) {
                        void 0 === i && (i = new Ju(n.window)),
                            void 0 === r && (r = new Yu(n.window, i)),
                            void 0 === e && (e = zi),
                            void 0 === s && (s = ku);
                        var o = t.call(this, n, e, void 0, r, s) || this;
                        return o.rc = i,
                            o
                    }
                    return (0,
                        e.__extends)(n, t),
                        n.prototype.start = function (n, i, r) {
                            var e = this;
                            t.prototype.start.call(this, n, i, r),
                                this.ec(),
                                this.C.add(this.ii, "load", !1, function () {
                                    e.Cu.recordingIsDetached() && e.Tt.recording.splitPage(qt.FsShutdownFrame)
                                }),
                                this.Cu.addVisibilityChangeEvent()
                        }
                        ,
                        n.prototype.onMessageReceived = function (n, i) {
                            if (t.prototype.onMessageReceived.call(this, n, i),
                                n === this.ii.parent || n === this.ii)
                                switch (i[0]) {
                                    case lu.GreetFrame:
                                        this.ec(i[1]);
                                        break;
                                    case lu.SetFrameId:
                                        try {
                                            var r = i[1];
                                            if (!r)
                                                return void He(location.href, {
                                                    source: "log",
                                                    type: "debug"
                                                });
                                            this.sc({
                                                frameId: r,
                                                parentIds: i[2],
                                                outerStartTime: i[3],
                                                scheme: i[4],
                                                script: i[5],
                                                appHost: i[6],
                                                orgId: i[7],
                                                initConfig: i[8],
                                                pageRsp: i[9],
                                                consentOverride: i[10],
                                                minimumWhen: i[11]
                                            })
                                        } catch (t) {
                                            pt(i)
                                        }
                                        break;
                                    case lu.SetConsent:
                                        this.setConsent(i[1]);
                                        break;
                                    case lu.InitFrameMobile:
                                        try {
                                            var e = JSON.parse(i[1])
                                                , s = e.StartTime
                                                , o = void 0;
                                            if (i.length > 2 && i[2]) {
                                                var u = i[2];
                                                Object.prototype.hasOwnProperty.call(u, "ProtocolVersion") && u.ProtocolVersion >= 20180723 && Object.prototype.hasOwnProperty.call(u, "OuterStartTime") && (s = u.OuterStartTime),
                                                    Object.prototype.hasOwnProperty.call(u, "MobileScriptPath") && (o = u.MobileScriptPath)
                                            }
                                            var a = e.Host;
                                            this.sc({
                                                frameId: 0,
                                                parentIds: [],
                                                outerStartTime: s,
                                                scheme: "https:",
                                                script: null != o ? o : Q(a),
                                                appHost: X(a),
                                                orgId: e.OrgId,
                                                initConfig: void 0,
                                                pageRsp: e.PageResponse,
                                                consentOverride: this.an.getConsent()
                                            })
                                        } catch (t) {
                                            pt(i)
                                        }
                                }
                        }
                        ,
                        n.prototype.ec = function (t) {
                            this.Eo && this.Eo === t || 0 != this.Eo && this.ii.parent && this.rc.postMessage(this.ii.parent, [lu.RequestFrameId])
                        }
                        ,
                        n.prototype.sc = function (t) {
                            var n, i, r = this;
                            if (this.Eo)
                                this.Eo !== t.frameId ? (this.Eo,
                                    t.frameId,
                                    this.Tt.recording.splitPage(qt.FsShutdownFrame)) : this.Eo;
                            else if (He(location.href, {
                                source: "log",
                                type: "debug"
                            }),
                                t.frameId,
                                this.Zo = t.scheme,
                                this.Iu = t.script,
                                this.xu = t.appHost,
                                this.Ou = t.orgId,
                                this.Mu = t.initConfig,
                                this.Eo = t.frameId,
                                this.Co = t.parentIds,
                                t.pageRsp && this.Fu(t.pageRsp)) {
                                if (!this.Tu) {
                                    var e = null !== (n = t.consentOverride) && void 0 !== n ? n : !!t.pageRsp.Consented;
                                    this.Wu(t.pageRsp, e),
                                        this.Bu(),
                                        this.Et.enqueueFirst({
                                            Kind: Pt.SYS_REPORTCONSENT,
                                            Args: [e, Vt.Document]
                                        }),
                                        this.Et.enqueueFirst({
                                            Kind: Pt.SET_FRAME_BASE,
                                            Args: [He(Ie(this.ii), {
                                                source: "event",
                                                type: Pt.SET_FRAME_BASE
                                            }), gt(this.ii.document)]
                                        }),
                                        this.Et.enqueue({
                                            Kind: Pt.SCRIPT_COMPILED_VERSION,
                                            Args: ["fb3ed3dc75"]
                                        }),
                                        this.Et.enqueue(Wu({
                                            type: "default"
                                        })),
                                        this.Qu(),
                                        this.Et.rebaseIframe(t.outerStartTime, null !== (i = t.minimumWhen) && void 0 !== i ? i : 0),
                                        this.Tt.time.setStartTime(t.outerStartTime),
                                        this.Du && this.Et.startPipeline({
                                            pageId: this.Du,
                                            serverPageStart: t.pageRsp.PageStart,
                                            isNewSession: !!t.pageRsp.IsNewSession,
                                            frameId: t.frameId,
                                            parentIds: t.parentIds
                                        }).then(function () {
                                            r.Gu(),
                                                r.na(r.ii.document),
                                                r.qu()
                                        })
                                }
                            } else
                                this.shutdown(qt.FsShutdownFrame)
                        }
                        ,
                        n
                }(ju)
                , ta = function () {
                    function t(t, n, i) {
                        void 0 === n && (n = function () { }
                        ),
                            void 0 === i && (i = !1),
                            this.Mt = t,
                            this.oc = n,
                            this.uc = i,
                            this._cookies = {},
                            this._cookies = T(this.Mt)
                    }
                    return t.prototype.setDomain = function (t) {
                        this.ac = t
                    }
                        ,
                        t.prototype.getValue = function (t, n) {
                            var i = this._cookies[t];
                            if (!i)
                                try {
                                    i = localStorage[null != n ? n : t]
                                } catch (t) { }
                            return i
                        }
                        ,
                        t.prototype.setValue = function (t, n, i, r) {
                            if (null != this.ac && !this.uc) {
                                var e = [];
                                this._setCookie(t, n, i, e),
                                    this.cc(null != r ? r : t, n, e, t),
                                    e.length > 0 && this.oc(e)
                            }
                        }
                        ,
                        t.prototype.setCookie = function (t, n, i) {
                            this._setCookie(t, n, i, [])
                        }
                        ,
                        Object.defineProperty(t.prototype, "cookies", {
                            get: function () {
                                return this._cookies
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        t.prototype.clearCookie = function (t, n) {
                            if (this._cookies[t] && (this.Mt.cookie = na(this.ac, t, "", "Thu, 01 Jan 1970 00:00:01 GMT"),
                                delete this._cookies[t]),
                                n)
                                try {
                                    delete localStorage[n]
                                } catch (t) { }
                        }
                        ,
                        t.prototype._setCookie = function (t, n, i, r) {
                            try {
                                this.Mt.cookie = na(this.ac, t, n, i),
                                    -1 === this.Mt.cookie.indexOf(n) && r.push([t, "cookie"])
                            } finally {
                                this._cookies = T(this.Mt)
                            }
                        }
                        ,
                        t.prototype.cc = function (t, n, i, r) {
                            try {
                                localStorage[t] = n,
                                    localStorage[t] !== n && i.push([null != r ? r : t, "localStorage"])
                            } catch (n) {
                                i.push([null != r ? r : t, "localStorage", String(n)])
                            }
                        }
                        ,
                        t
                }();
            function na(t, n, i, r) {
                var e = n + "=" + i;
                return e += "; domain=" + function (t) {
                    return t ? "." + encodeURIComponent(t) : ""
                }(t),
                    e += "; Expires=" + r + "; path=/; SameSite=Strict",
                    "https:" === location.protocol && (e += "; Secure"),
                    e
            }
            var ia, ra, ea = "fs_cid", sa = function () {
                function t(t) {
                    this.Ha = t,
                        this.hc = 1;
                    var n = this.Ha.getValue(ea, mn);
                    this.fc = function (t) {
                        var n = {
                            consent: zt.RevokeConsent
                        };
                        if (!t)
                            return n;
                        var i = t.split(".");
                        return i.length < 1 ? n : (i[0],
                            "1" === i[1] ? {
                                consent: zt.GrantConsent
                            } : n)
                    }(n)
                }
                return t.prototype.getConsentState = function () {
                    return this.fc.consent
                }
                    ,
                    t.prototype.setConsentState = function (t) {
                        if (this.fc.consent = t,
                            t !== zt.RevokeConsent) {
                            var n = this.vc()
                                , i = this.lc();
                            this.Ha.setValue(ea, n, i, mn)
                        } else
                            this.Ha.clearCookie(ea, mn)
                    }
                    ,
                    t.prototype.vc = function () {
                        return [this.hc, this.fc.consent === zt.GrantConsent ? 1 : 0].join(".")
                    }
                    ,
                    t.prototype.lc = function () {
                        return new Date(1e3 * _()).toUTCString()
                    }
                    ,
                    t
            }(), oa = "fs_lua", ua = function () {
                function t(t) {
                    this.hc = 1,
                        this.Ha = t;
                    var n = this.Ha.getValue(oa, bn);
                    this.fc = function (t) {
                        var n = {
                            lastUserActivityTime: void 0
                        };
                        if (!t)
                            return n;
                        var i = t.split(".");
                        return i.length < 1 ? n : (i[0],
                        {
                            lastUserActivityTime: E(i[1])
                        })
                    }(n)
                }
                return t.prototype.getLastUserActivityTimeMS = function () {
                    return this.fc.lastUserActivityTime
                }
                    ,
                    t.prototype.setLastUserActivityTimeMS = function (t) {
                        this.fc.lastUserActivityTime = t;
                        var n = this.vc()
                            , i = this.lc();
                        this.Ha.setValue(oa, n, i, bn)
                    }
                    ,
                    t.prototype.vc = function () {
                        var t;
                        return [this.hc, null !== (t = this.fc.lastUserActivityTime) && void 0 !== t ? t : ""].join(".")
                    }
                    ,
                    t.prototype.lc = function () {
                        return new Date(p() + Gu).toUTCString()
                    }
                    ,
                    t
            }(), aa = "fs_uid", ca = function () {
                function t(t, n, i, r) {
                    void 0 === n && (n = document),
                        void 0 === i && (i = function () { }
                        ),
                        void 0 === r && (r = !1),
                        this.dc = void 0,
                        this.Ma = new ta(n, i, r),
                        this.wc = new sa(this.Ma),
                        this.gc = new ua(this.Ma),
                        this.fc = this.yc(t)
                }
                return t.prototype.yc = function (t) {
                    var n = A(this.Ma.getValue(aa, yn));
                    return n && n.orgId == t ? n : {
                        expirationAbsTimeSeconds: _(),
                        orgId: t,
                        userId: "",
                        sessionId: "",
                        appKeyHash: ""
                    }
                }
                    ,
                    t.prototype.getConsentStore = function () {
                        return this.wc
                    }
                    ,
                    t.prototype.clear = function () {
                        this.gc.setLastUserActivityTimeMS(void 0),
                            this.fc.sessionStartTime = this.fc.pageCount = void 0,
                            this.fc.userId = this.fc.sessionId = this.fc.appKeyHash = this.dc = "",
                            this.fc.expirationAbsTimeSeconds = _(),
                            this.mc()
                    }
                    ,
                    t.prototype.create = function (t) {
                        this.gc.setLastUserActivityTimeMS(t.lastUserActivityTime),
                            this.fc = (0,
                                e.__assign)((0,
                                    e.__assign)({}, this.fc), t),
                            this.mc()
                    }
                    ,
                    t.prototype.getOrgId = function () {
                        return this.fc.orgId
                    }
                    ,
                    t.prototype.getUserId = function () {
                        return this.fc.userId
                    }
                    ,
                    t.prototype.setUserId = function (t) {
                        this.fc.userId = t,
                            this.mc()
                    }
                    ,
                    t.prototype.getSessionId = function () {
                        return this.fc.sessionId
                    }
                    ,
                    t.prototype.getAppKeyHash = function () {
                        return this.fc.appKeyHash
                    }
                    ,
                    t.prototype.getCookies = function () {
                        return this.Ma.cookies
                    }
                    ,
                    t.prototype.setAppId = function (t) {
                        this.dc = t,
                            this.fc.appKeyHash = Wo(t),
                            this.mc()
                    }
                    ,
                    t.prototype.getAppId = function () {
                        return this.dc
                    }
                    ,
                    t.prototype.setSessionStartTimeMS = function (t) {
                        this.fc.sessionStartTime = t,
                            this.mc()
                    }
                    ,
                    t.prototype.getSessionStartTimeMS = function () {
                        return this.fc.sessionStartTime
                    }
                    ,
                    t.prototype.setLastUserActivityTimeMS = function (t) {
                        this.gc.setLastUserActivityTimeMS(t)
                    }
                    ,
                    t.prototype.getLastUserActivityTimeMS = function () {
                        return this.gc.getLastUserActivityTimeMS()
                    }
                    ,
                    t.prototype.setPageCount = function (t) {
                        this.fc.pageCount = t,
                            this.mc()
                    }
                    ,
                    t.prototype.getPageCount = function () {
                        return this.fc.pageCount
                    }
                    ,
                    t.prototype.getClientStore = function () {
                        return this.Ma
                    }
                    ,
                    t.prototype.setCookie = function (t, n, i) {
                        void 0 === i && (i = new Date(p() + 6048e5).toUTCString()),
                            this.Ma.setCookie(t, n, i)
                    }
                    ,
                    t.prototype.setCookieDomain = function (t, n) {
                        var i = n;
                        (x(i) || i.match(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/g)) && (i = "");
                        var r = function (t) {
                            return N(t, "_fs_cookie_domain")
                        }(t);
                        "string" == typeof r && (i = r),
                            this.Ma.setDomain(i)
                    }
                    ,
                    t.prototype.setIds = function (t, n, i, r) {
                        this.setCookieDomain(t, n),
                            this.fc.userId = i,
                            this.fc.sessionId = r,
                            this.mc()
                    }
                    ,
                    t.prototype.clearAppId = function () {
                        return !!this.fc.appKeyHash && (this.dc = "",
                            this.fc.appKeyHash = "",
                            this.mc(),
                            !0)
                    }
                    ,
                    t.prototype.encode = function () {
                        var t, n, i, r = [this.fc.userId, null !== (t = this.fc.sessionId) && void 0 !== t ? t : "", "" + (null !== (n = this.fc.sessionStartTime) && void 0 !== n ? n : ""), "", "" + (null !== (i = this.fc.pageCount) && void 0 !== i ? i : "")].join(":"), e = ["", this.fc.orgId, r];
                        return this.fc.appKeyHash && e.push(encodeURIComponent(this.fc.appKeyHash)),
                            e.push("/" + this.fc.expirationAbsTimeSeconds),
                            e.join("#")
                    }
                    ,
                    t.prototype.mc = function () {
                        var t = this.encode()
                            , n = new Date(1e3 * this.fc.expirationAbsTimeSeconds).toUTCString();
                        this.Ma.setValue(aa, t, n, yn)
                    }
                    ,
                    t
            }();
            !function (t) {
                t.TrackEvent = "trackEvent",
                    t.GetSession = "getSession",
                    t.Init = "init",
                    t.Log = "log",
                    t.Source = "source",
                    t.Observe = "observe",
                    t.Restart = "restart",
                    t.SetIdentity = "setIdentity",
                    t.SetConfig = "setConfig",
                    t.SetPage = "setPage",
                    t.SetProperties = "setProperties",
                    t.Shutdown = "shutdown",
                    t.Start = "start",
                    t.Stat = "stat"
            }(ia || (ia = {}));
            var ha = ((ra = {})[Zt.Document] = {
                assetMapId: "str",
                releaseDatetime: "date",
                releaseVersion: "str"
            },
                ra[Zt.Event] = {},
                ra[Zt.Page] = {
                    pageName: "str",
                    releaseVersion: "str",
                    releaseDatetime: "str"
                },
                ra[Zt.User] = {
                    uid: "str",
                    displayName: "str",
                    email: "str"
                },
                ra)
                , fa = {
                    str: va,
                    bool: la,
                    real: da,
                    "int": pa,
                    date: wa,
                    strs: ga(va),
                    bools: ga(la),
                    reals: ga(da),
                    ints: ga(pa),
                    dates: ga(wa),
                    objs: ga(ya),
                    obj: ya
                };
            function va(t) {
                return "string" == typeof t
            }
            function la(t) {
                return "boolean" == typeof t
            }
            function da(t) {
                return "number" == typeof t
            }
            function pa(t) {
                return "number" == typeof t && t - o.mathFloor(t) == 0
            }
            function wa(t) {
                return !(!t || (t.constructor === Date ? isNaN(t) : "number" != typeof t && "string" != typeof t || isNaN(new Date(t))))
            }
            function ga(t) {
                return function (n) {
                    if (!(n instanceof Array))
                        return !1;
                    for (var i = 0; i < n.length; i++)
                        if (!t(n[i]))
                            return !1;
                    return !0
                }
            }
            function ya(t) {
                return !!t && "object" == typeof t
            }
            var ma = /^[a-zA-Z][a-zA-Z0-9_]*$/
                , ba = function () {
                    function t(t) {
                        this.ia = t,
                            this.bc = {}
                    }
                    return t.prototype.setIdentity = function (t) {
                        this.ia = t
                    }
                        ,
                        t.prototype.unloadCrossPageVars = function (t) {
                            switch (t) {
                                case qt.Hibernation:
                                case qt.Size:
                                    break;
                                default:
                                    this.Sc = void 0;
                            }
                        }
                        ,
                        t.prototype.getCrossPageVars = function () {
                            return this.Sc
                        }
                        ,
                        t.prototype.getDocumentVars = function () {
                            var t, n = {}, i = void 0;
                            for (var r in this.bc) {
                                var e = this.bc[r]
                                    , s = e.value;
                                if (void 0 === (h = e.apiSource)) {
                                    var o = null != i ? i : {};
                                    o[r] = s,
                                        i = o
                                } else {
                                    var u = null !== (t = n[h]) && void 0 !== t ? t : {};
                                    u[r] = s,
                                        n[h] = u
                                }
                            }
                            var a = []
                                , c = function (t) {
                                    t && a.push(t)
                                };
                            for (var h in i && c(this.kc(Zt.Document, {
                                PayloadToSend: i,
                                ValidationErrors: []
                            })),
                                n)
                                c(this.kc(Zt.Document, {
                                    PayloadToSend: n[h],
                                    ValidationErrors: []
                                }, h));
                            return a
                        }
                        ,
                        t.prototype.api = function (t) {
                            var n, i = !1, r = [], e = function (t) {
                                t && r.push(t)
                            };
                            try {
                                var s = function (t) {
                                    switch (t.operation) {
                                        case ia.TrackEvent:
                                            return Zt.Event;
                                        case ia.SetPage:
                                            return Zt.Page;
                                        case ia.SetProperties:
                                            var n = t.option.type;
                                            switch (n) {
                                                case Zt.Document:
                                                case Zt.Page:
                                                case Zt.User:
                                                    return n;
                                                default:
                                                    return (0,
                                                        Yr.nt)(n, "Invalid scope: " + n);
                                            }
                                        default:
                                            (0,
                                                Yr.nt)(t, "Unsupported");
                                    }
                                }(t)
                                    , u = null === (n = t.source) || void 0 === n ? void 0 : n.integration;
                                switch (s) {
                                    case Zt.Document:
                                        var a = t.option;
                                        if (!(h = this._c(Sa(s, a.properties), u)))
                                            break;
                                        e(this.kc(s, h, u));
                                        break;
                                    case Zt.Event:
                                        var c = (a = t.option).name;
                                        if ("string" != typeof c)
                                            break;
                                        Ea(t.source, "event", e),
                                            e(this.kc(s, Sa(s, a.properties), u, c));
                                        break;
                                    case Zt.Page:
                                        var h = (a = t.option).properties || a;
                                        this.Sc = this.kc(s, Sa(s, h), u),
                                            e(this.Sc);
                                        break;
                                    case Zt.User:
                                        if ("object" != typeof (a = t.option).properties)
                                            a.properties,
                                                pt(a.properties);
                                        else if ("uid" in a.properties) {
                                            var f = a.properties.uid;
                                            if (!1 === f)
                                                this.ia.clearAppId() && (i = !0),
                                                    delete a.properties.uid;
                                            else {
                                                var v = function (t, n) {
                                                    var i = t;
                                                    if ("number" == typeof i && o.mathFloor(i) == i && (i = "" + i),
                                                        "string" != typeof i)
                                                        return [void 0, tn.FsId];
                                                    var r = i.trim();
                                                    if (b.indexOf(r.toLowerCase()) >= 0)
                                                        return [void 0, tn.FsId];
                                                    var e = Wo(r)
                                                        , s = void 0;
                                                    return n && n.fc.appKeyHash && n.fc.appKeyHash !== e && n.fc.appKeyHash !== r && (n.fc.appKeyHash,
                                                        s = tn.NewUid),
                                                        [r, s]
                                                }(f, this.ia)
                                                    , l = v[0]
                                                    , d = v[1];
                                                if (!l)
                                                    return tn.FsId,
                                                    {
                                                        events: r
                                                    };
                                                a.properties.uid = l,
                                                    this.ia.setAppId(l),
                                                    d === tn.NewUid && (i = !0)
                                            }
                                        }
                                        Ea(t.source, "setVars", e),
                                            e(this.kc(s, Sa(s, a.properties), u));
                                        break;
                                    default:
                                        (0,
                                            Yr.nt)(s, "Unsupported");
                                }
                            } catch (n) {
                                t.operation,
                                    n.message
                            }
                            return {
                                events: r,
                                reidentify: i
                            }
                        }
                        ,
                        t.prototype.kc = function (t, n, i, r) {
                            var e = pt(n.PayloadToSend)
                                , s = !!i && "fs" !== i;
                            switch (t) {
                                case Zt.Event:
                                    return {
                                        When: 0,
                                        Kind: Pt.SYS_CUSTOM,
                                        Args: s ? [r, e, i] : [r, e]
                                    };
                                case Zt.Document:
                                case Zt.Page:
                                case Zt.User:
                                    return {
                                        When: 0,
                                        Kind: Pt.SYS_SETVAR,
                                        Args: s ? [t, e, i] : [t, e]
                                    };
                                default:
                                    (0,
                                        Yr.nt)(t, "Unsupported");
                            }
                        }
                        ,
                        t.prototype._c = function (t, n) {
                            var i = t.PayloadToSend;
                            if (i && "object" == typeof i) {
                                var r = 0
                                    , e = {};
                                for (var s in i)
                                    if (!(s in this.bc)) {
                                        var o = i[s];
                                        this.bc[s] = {
                                            value: o,
                                            apiSource: n
                                        },
                                            e[s] = o,
                                            r++
                                    }
                                if (0 !== r)
                                    return {
                                        PayloadToSend: e,
                                        ValidationErrors: t.ValidationErrors
                                    }
                            }
                        }
                        ,
                        t
                }();
            function Sa(t, n) {
                var i = 1500;
                return ka(function () {
                    return --i
                }, t, n)
            }
            var ka = function (t, n, i) {
                var r, e, s = {
                    PayloadToSend: {},
                    ValidationErrors: []
                }, u = function (i) {
                    var r = ka(t, n, i);
                    return s.ValidationErrors = s.ValidationErrors.concat(r.ValidationErrors),
                        r.PayloadToSend
                };
                for (var a in i)
                    if (o.objectHasOwnProp(i, a)) {
                        if (t() <= 0)
                            break;
                        var c = i[a]
                            , h = Aa(n, a, c, s.ValidationErrors);
                        if (h) {
                            var f = h.name;
                            if ("obj" !== h.type) {
                                if ("objs" !== h.type)
                                    s.PayloadToSend[f] = _a(h.type, h.value);
                                else {
                                    n != Zt.Event && s.ValidationErrors.push({
                                        Type: "vartype",
                                        FieldName: f,
                                        ValueType: "Array<Object> (unsupported)"
                                    });
                                    for (var v = [], l = 0; l < h.value.length; l++)
                                        (d = u(h.value[l])) && v.push(d);
                                    v.length > 0 && (s.PayloadToSend[f] = v)
                                }
                            } else {
                                var d = u(h.value)
                                    , p = (e = "_obj").length > (r = a).length || r.substring(r.length - e.length) != e ? f.substring(0, f.length - "_obj".length) : f;
                                s.PayloadToSend[p] = d
                            }
                        } else
                            s.PayloadToSend[a] = _a("str", c)
                    }
                return s
            };
            function _a(t, n) {
                var i = n;
                return "str" == t && "string" == typeof i && (i = i.trim()),
                    null == i || "date" != t && i.constructor != Date || (i = function (t) {
                        var n = t.constructor === Date ? t : new Date(t);
                        try {
                            return n.toISOString()
                        } catch (t) {
                            return null
                        }
                    }(i)),
                    i
            }
            function Aa(t, n, i, r) {
                var e = n
                    , s = e
                    , u = typeof i;
                if ("undefined" === u)
                    return r.push({
                        Type: "vartype",
                        FieldName: e,
                        ValueType: u + " (unsupported)"
                    }),
                        null;
                var a = ha[t];
                if (o.objectHasOwnProp(a, e))
                    return {
                        name: e,
                        type: a[e],
                        value: i
                    };
                var c = e.lastIndexOf("_");
                if (-1 == c || !Ta(e.substring(c + 1))) {
                    var h = function (t) {
                        for (var n in fa)
                            if (fa[n](t))
                                return n;
                        return null
                    }(i);
                    if (null == h)
                        return i ? r.push({
                            Type: "vartype",
                            FieldName: e
                        }) : r.push({
                            Type: "vartype",
                            FieldName: e,
                            ValueType: "null (unsupported)"
                        }),
                            null;
                    c = e.length,
                        e = e + "_" + h
                }
                var f = e.substring(0, c)
                    , v = e.substring(c + 1);
                if ("object" === u && !i)
                    return r.push({
                        Type: "vartype",
                        FieldName: s,
                        ValueType: "null (unsupported)"
                    }),
                        null;
                if (!ma.test(f)) {
                    f = f.replace(/[^a-zA-Z0-9_]/g, "").replace(/^[0-9]+/, ""),
                        /[0-9]/.test(f[0]) && (f = f.substring(1)),
                        r.push({
                            Type: "varname",
                            FieldName: s
                        });
                    var l = f + "_" + v;
                    if (ma.source,
                        "" == f)
                        return null;
                    e = l
                }
                return Ta(v) ? function (t, n) {
                    return fa[t](n)
                }(v, i) ? {
                    name: e,
                    type: v,
                    value: i
                } : (pt(i),
                    "number" === u ? u = i % 1 == 0 ? "integer" : "real" : "object" == u && null != i && i.constructor == Date && (u = isNaN(i) ? "invalid date" : "date"),
                    r.push({
                        Type: "vartype",
                        FieldName: s,
                        ValueType: u
                    }),
                    null) : (r.push({
                        Type: "varname",
                        FieldName: s
                    }),
                        null)
            }
            function Ta(t) {
                return !!fa[t]
            }
            function Ea(t, n, i) {
                var r = Wu({
                    source: t,
                    type: "api",
                    entrypoint: n
                });
                r && i({
                    When: 0,
                    Kind: r.Kind,
                    Args: r.Args
                })
            }
            function Ca(t, n) {
                return (0,
                    e.__awaiter)(this, void 0, Ni, function () {
                        var i, s, o, a, c;
                        return (0,
                            e.__generator)(this, function (h) {
                                switch (h.label) {
                                    case 0:
                                        if (h.trys.push([0, 2, , 3]),
                                            cr || fr || function (t) {
                                                return !!N(t, "_fs_use_polyfilled_apis", "boolean")
                                            }(t))
                                            return [2, (0,
                                                e.__assign)((0,
                                                    e.__assign)({}, n), {
                                                    status: r.Clean
                                                })];
                                        if (!t.document || n.status !== r.Unknown)
                                            return [2, n];
                                        if (i = function (t, n) {
                                            var i = n.functions
                                                , s = {}
                                                , o = (0,
                                                    e.__assign)({}, n.helpers);
                                            if (o.functionToString = function (t, n) {
                                                var i, r, e = null === (i = t["__core-js_shared__"]) || void 0 === i ? void 0 : i.inspectSource;
                                                if (e) {
                                                    var s = function () {
                                                        return e(this)
                                                    };
                                                    if (ja(s, 2))
                                                        return s
                                                }
                                                var o = null === (r = t["__core-js_shared__"]) || void 0 === r ? void 0 : r["native-function-to-string"];
                                                if (ja(o))
                                                    return o;
                                                var u = n.__zone_symbol__OriginalDelegate;
                                                return ja(u) ? u : ja(n) ? n : void 0
                                            }(t, o.functionToString),
                                                !o.functionToString)
                                                return n;
                                            var u = !1;
                                            for (var a in i)
                                                if (i[a]) {
                                                    if (s[a] = Ka(o.functionToString, i[a]),
                                                        s[a] || (s[a] = Ma(o.functionToString, o, a)),
                                                        !s[a])
                                                        return n;
                                                    s[a] !== i[a] && (u = !0)
                                                } else
                                                    s[a] = void 0;
                                            return {
                                                status: r.Clean,
                                                functions: u ? s : i,
                                                helpers: o,
                                                errors: []
                                            }
                                        }(t, n),
                                            i.status === r.Clean)
                                            return [2, i];
                                        (s = t.document.createElement("iframe")).id = "FullStory-iframe",
                                            s.className = "fs-hide",
                                            s.style.display = "none",
                                            o = t.document.body || t.document.head || t.document.documentElement || t.document;
                                        try {
                                            o.appendChild(s)
                                        } catch (t) {
                                            return [2, (0,
                                                e.__assign)((0,
                                                    e.__assign)({}, n), {
                                                    status: r.Clean
                                                })]
                                        }
                                        return s.contentWindow ? (a = u(s.contentWindow, r.Clean),
                                            s.parentNode && s.parentNode.removeChild(s),
                                            a.status === r.UnrecoverableFailure ? [2, (0,
                                                e.__assign)((0,
                                                    e.__assign)({}, n), {
                                                    status: r.Clean
                                                })] : [4, Ia(a, n)]) : [2, (0,
                                                    e.__assign)((0,
                                                        e.__assign)({}, n), {
                                                        status: r.Clean
                                                    })];
                                    case 1:
                                        return [2, h.sent()];
                                    case 2:
                                        return c = h.sent(),
                                            Ot.sendToBugsnag(c, "error"),
                                            [2, (0,
                                                e.__assign)((0,
                                                    e.__assign)({}, n), {
                                                    status: r.Clean
                                                })];
                                    case 3:
                                        return [2];
                                }
                            })
                    })
            }
            function Ia(t, n) {
                var i, s = new Ni(function (t) {
                    return i = t
                }
                );
                return setTimeout(function () {
                    try {
                        t.functions.jsonParse("[]").push(0)
                    } catch (t) {
                        i((0,
                            e.__assign)((0,
                                e.__assign)({}, n), {
                                status: r.Clean
                            }))
                    }
                    i(t)
                }),
                    s
            }
            function ja(t, n) {
                var i;
                if (void 0 === n && (n = 0),
                    !t)
                    return !1;
                try {
                    t.call(function () { })
                } catch (t) {
                    return !1
                }
                var r = function (t) {
                    try {
                        return void t.call(null)
                    } catch (t) {
                        return (t.stack || "").replace(/__fs_nomangle_check_stack(.|\n)*$/, "")
                    }
                }
                    , e = void 0;
                0 !== n && "number" == typeof Error.stackTraceLimit && (e = Error.stackTraceLimit,
                    Error.stackTraceLimit = Number.POSITIVE_INFINITY);
                var s = [function () {
                    throw new Error("")
                }
                    , t]
                    , o = function __fs_nomangle_check_stack() {
                        return s.map(r)
                    }()
                    , u = o[0]
                    , a = o[1];
                if (void 0 !== e && (Error.stackTraceLimit = e),
                    !u || !a)
                    return !1;
                for (var c = "\n".charCodeAt(0), h = u.length > a.length ? a.length : u.length, f = 1, v = f; v < h; v++) {
                    var l = u.charCodeAt(u.length - v)
                        , d = a.charCodeAt(a.length - v);
                    if (l != d)
                        break;
                    d != c && v != h - 1 || (f = v)
                }
                return (null !== (i = a.slice(0, a.length - f + 1).match(/\.js:\d+([:)]|$)/gm)) && void 0 !== i ? i : []).length <= n
            }
            function xa(t, n) {
                return t.call(n).indexOf("[native code]") >= 0
            }
            var Oa = ["__zone_symbol__OriginalDelegate", "nr@original"];
            function Ka(t, n) {
                if (n) {
                    for (var i = 0, r = Oa; i < r.length; i++) {
                        var e = n[r[i]];
                        if ("function" == typeof e && xa(t, e))
                            return e
                    }
                    return xa(t, n) ? n : void 0
                }
            }
            function Ma(t, n, i) {
                if ("arrayIsArray" === i) {
                    var r = Ka(t, n.objectToString);
                    if (!r)
                        return;
                    return n.objectToString = r,
                        function (t) {
                            return "[object Array]" == r.call(t)
                        }
                }
            }
            var Ra = function () {
                function t(t, n) {
                    void 0 === n && (n = function (t) {
                        return new WebSocket(t)
                    }
                    ),
                        this.Ac = n,
                        this.Tc = !1,
                        this.Ec = !1,
                        this.Et = {},
                        this.Cc = 1,
                        this.Tt = t,
                        this.Zo = t.options.scheme,
                        this.tu = t.options.cdnHost
                }
                return t.isSupported = function () {
                    return "WebSocket" in window
                }
                    ,
                    t.prototype.page = function (t) {
                        var n = this;
                        return new Ni(function (i, r) {
                            n.Ic({
                                Cmd: hn.Page,
                                Page: t
                            }, fu(n.Tt), function (t) {
                                t.Cmd === fn.Page ? i(t.Page) : (t.Cmd,
                                    r(t.Cmd))
                            }, r)
                        }
                        )
                    }
                    ,
                    t.prototype.settings = function (t) {
                        var n = t.previewMode ? fu(this.Tt) : this.tu;
                        return hu(this.Zo, n, t)
                    }
                    ,
                    t.prototype.bundle = function (t) {
                        return (0,
                            e.__awaiter)(this, void 0, Ni, function () {
                                var n, i, r, s = this;
                                return (0,
                                    e.__generator)(this, function (e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, Or()];
                                            case 1:
                                                return e.sent(),
                                                    n = t.deltaT,
                                                    i = t.serverPageStart,
                                                    r = t.serverBundleTime,
                                                    [2, new Ni(function (e, o) {
                                                        var u = fu(s.Tt);
                                                        Pa(t.recHost, u);
                                                        var a = s.Ic({
                                                            Cmd: hn.Bundle,
                                                            Bundle: {
                                                                Bundle: t.bundle,
                                                                DeltaT: null === n ? void 0 : n,
                                                                OrgId: t.orgId,
                                                                PageId: t.pageId,
                                                                PageStart: null == i ? void 0 : i,
                                                                PrevBundleTime: null == r ? void 0 : r,
                                                                Seq: t.bundle.Seq,
                                                                SessionId: t.sessionId,
                                                                UserId: t.userId
                                                            }
                                                        }, u, function (t) {
                                                            t.Cmd === fn.Bundle ? e([null != a ? a : 0, t.Bundle]) : t.Cmd
                                                        }, o)
                                                    }
                                                    )];
                                        }
                                    })
                            })
                    }
                    ,
                    t.prototype.bundleBeacon = function (t) {
                        var n = fu(this.Tt);
                        return Pa(t.recHost, n),
                            cu(this.Zo, n, t)
                    }
                    ,
                    t.prototype.exponentialBackoffMs = function (t, n) {
                        var i = o.mathMin(vn.BackoffMax, 5e3 * o.mathPow(2, t));
                        return n ? i + .25 * o.mathRandom() * i : i
                    }
                    ,
                    t.prototype.Ic = function (t, n, i, r) {
                        var e = t;
                        e.Seq = this.Cc++;
                        var s = pt(e);
                        return this.Et[e.Seq] = {
                            payload: s,
                            win: i,
                            lose: r
                        },
                            this.jc(n),
                            s.length
                    }
                    ,
                    t.prototype.xc = function (t) {
                        var n;
                        try {
                            n = yt(t)
                        } catch (t) {
                            return
                        }
                        var i = this.Et[n.Seq];
                        delete this.Et[n.Seq],
                            i ? n.Cmd === fn.Error ? (n.Fail.Error,
                                i.lose(new nu(n.Fail.Status, n.Fail.Error))) : i.win(n) : n.Seq
                    }
                    ,
                    t.prototype.Oc = function () {
                        if (this.Ec && this.Kc)
                            for (var t in this.Et) {
                                var n = this.Et[t];
                                n.sent || (this.Kc.send(n.payload),
                                    n.sent = !0)
                            }
                    }
                    ,
                    t.prototype.Mc = function () {
                        for (var t in this.Et) {
                            var n = this.Et[t];
                            n.sent && (delete this.Et[t],
                                n.lose(new nu(0, "Pending request")))
                        }
                    }
                    ,
                    t.prototype.jc = function (t) {
                        var n = this;
                        if (this.Ec)
                            this.Oc();
                        else if (!this.Tc) {
                            this.Tc = !0;
                            var i = ("https:" == this.Zo ? "wss:" : "ws:") + "//" + t + "/rec/sock";
                            this.Kc = this.Ac(i),
                                this.Kc.onopen = function (t) {
                                    n.Tc = !1,
                                        n.Ec = !0,
                                        n.Oc()
                                }
                                ,
                                this.Kc.onmessage = function (t) {
                                    n.xc(t.data),
                                        n.Oc()
                                }
                                ,
                                this.Kc.onclose = function (t) {
                                    n.Tc = n.Ec = !1,
                                        n.Mc()
                                }
                                ,
                                this.Kc.onerror = function (t) {
                                    n.Tc = n.Ec = !1,
                                        n.Mc()
                                }
                        }
                    }
                    ,
                    t
            }();
            function Pa(t, n) {
                t && Rt(n === t, "sock recHost mismatch")
            }
            var Na, La, Ua, Ha, Da = function () {
                function t(t) {
                    this.Rc = !1,
                        this.au = t
                }
                return t.prototype.flush = function () {
                    this.au(),
                        this.Rc = !1
                }
                    ,
                    t.prototype.schedule = function () {
                        var t = this;
                        this.Rc || (this.Rc = !0,
                            Ni.resolve().then(function () {
                                t.flush()
                            })["catch"](function (t) {
                                return Ot.sendToBugsnag(t, "error")
                            }))
                    }
                    ,
                    t
            }(), Ba = function () {
                function t() {
                    this.Pc = {
                        start: [],
                        shutdown: [],
                        "internal/bundle": [],
                        "internal/error": [],
                        "internal/fs-init": []
                    }
                }
                return t.prototype.registerListener = function (t, n) {
                    var i;
                    if (-1 === Ou.indexOf(t) || !n)
                        throw new Error("Invalid event type or missing callback.");
                    var r = {
                        disconnected: !1,
                        callback: n
                    }
                        , e = (null !== (i = this.Pc[t]) && void 0 !== i ? i : []).filter(function (t) {
                            return !t.disconnected
                        });
                    return e.push(r),
                        this.Pc[t] = e,
                    {
                        disconnect: function () {
                            r.disconnected = !0
                        }
                    }
                }
                    ,
                    t.prototype.hasListeners = function (t) {
                        var n;
                        return (null !== (n = this.Pc[t]) && void 0 !== n ? n : []).length > 0 && this.Pc[t].some(function (t) {
                            return !t.disconnected
                        })
                    }
                    ,
                    t.prototype.takeRecords = function (t) {
                        var n, i = null !== (n = this.Pc[t.type]) && void 0 !== n ? n : [];
                        if (0 !== i.length)
                            for (var r = 0, e = i; r < e.length; r++) {
                                var s = e[r]
                                    , o = s.disconnected
                                    , u = s.callback;
                                if (!o)
                                    try {
                                        u(t.data)
                                    } catch (t) {
                                        Ot.sendToBugsnag("Recording observer callback error", "error", {
                                            err: t
                                        })
                                    }
                            }
                    }
                    ,
                    t
            }(), Fa = function () {
                function t(t) {
                    var n = this;
                    this.si = t,
                        this.Et = [],
                        this.vu = new Da(function () {
                            n.au()
                        }
                        )
                }
                return t.prototype.addEvent = function (t) {
                    this.si.hasListeners(t.type) && (this.Et.push(t),
                        this.vu.schedule())
                }
                    ,
                    t.prototype.au = function () {
                        for (var t = 0, n = this.Et; t < n.length; t++) {
                            var i = n[t];
                            this.si.takeRecords(i)
                        }
                        this.Et = []
                    }
                    ,
                    t
            }(), Wa = (La = (Na = window.navigator).vendor,
                Ua = void 0 !== window.opr,
                Ha = Na.userAgent.indexOf("Edge") > -1,
                !!Na.userAgent.match("CriOS") || "Google Inc." === La && !Ua && !Ha), za = /Firefox/.test(window.navigator.userAgent);
            function Va(t) {
                if (!za)
                    return !1;
                var n = window.navigator.userAgent.match(/Firefox\/(\d+)/);
                return !(!n || !n[1]) && parseInt(n[1], 10) < t
            }
            function qa(t) {
                if (!Wa)
                    return !1;
                var n = window.navigator.userAgent.match(/Chrome\/(\d+)/);
                return !(!n || !n[1]) && parseInt(n[1], 10) < t
            }
            function $a(t) {
                if (t === top || W(t) || function (t) {
                    return !!N(t, "_fs_run_in_iframe", "boolean")
                }(t) || z(t))
                    return !0;
                try {
                    return t.parent.document,
                        $a(t.parent)
                } catch (t) { }
                return !1
            }
            function Ga(t) {
                return !gr && t.postMessage && t.MutationObserver && Xa(t.Map) && Xa(t.Set) && Xa(t.WeakMap) && o.snapshot.status !== r.UnrecoverableFailure ? !!$a(t) || !1 : (function (t) {
                    try {
                        t.snapshot.status === r.UnrecoverableFailure && (Ot.sendToBugsnag(t.snapshot.errors[0], "error"),
                            t.snapshot.errors.forEach(s))
                    } catch (t) { }
                }(o),
                    !1)
            }
            function Xa(t) {
                try {
                    if (t)
                        return new t,
                            !0
                } catch (t) { }
                return !1
            }
            Va(28),
                Va(27),
                qa(23),
                qa(38),
                qa(57),
                qa(60);
            var Qa = function (t, n) {
                var i, r, e;
                switch (n) {
                    case "url.now":
                        return null !== (i = t.getCurrentSessionURL(!0)) && void 0 !== i ? i : null;
                    case "id":
                        return null !== (r = t.getCurrentSession()) && void 0 !== r ? r : null;
                    default:
                        return null !== (e = t.getCurrentSessionURL()) && void 0 !== e ? e : null;
                }
            };
            function Ya(t, n) {
                switch (t) {
                    case "getSession":
                    case "init":
                    case "observe":
                    case "restart":
                    case "setConfig":
                    case "setIdentity":
                    case "setPage":
                    case "shutdown":
                    case "source":
                    case "start":
                    case "trackEvent":
                        return {
                            operation: t,
                            option: n
                        };
                    case "stat":
                        return {
                            operation: t,
                            option: {
                                event_type: (i = n).eventType || i.event_type,
                                properties: i.payload || i.properties
                            }
                        };
                    case "log":
                        var i = n;
                        return o.arrayIsArray(n) && (i = {
                            level: n[0],
                            msg: n[1]
                        }),
                        {
                            operation: t,
                            option: i
                        };
                    case "setVars":
                    case "setProperties":
                        var r = ia.SetProperties;
                        return i = n,
                            o.arrayIsArray(n) && (i = {
                                type: n[0],
                                properties: e = n[1]
                            }),
                        {
                            operation: r,
                            option: i
                        };
                    case "event":
                        return i = n,
                            n && "object" == typeof n && "n" in n && (i = {
                                name: n.n,
                                properties: n.p
                            }),
                        {
                            operation: r = ia.TrackEvent,
                            option: i
                        };
                    case "user":
                        var e = n;
                        return {
                            operation: r = ia.SetProperties,
                            option: {
                                type: "user",
                                properties: e
                            }
                        };
                    case "consent":
                        var s = n;
                        return {
                            operation: r = ia.SetIdentity,
                            option: {
                                consent: s
                            }
                        };
                    case "rec":
                        return n ? {
                            operation: ia.Restart
                        } : {
                            operation: r = ia.Shutdown
                        };
                }
            }
            var Ja = "must be an object";
            function Za(t) {
                return !!t && "object" == typeof t
            }
            function tc(t, n) {
                return n in t
            }
            function nc(t, n) {
                return "Init Api - invalid " + t + " config, " + n
            }
            function ic(t) {
                var n;
                if (!t || "object" != typeof t)
                    return !1;
                var i = t;
                return rc(i.target, ["any", "exclude", "mask"]) && rc(i.tag) && rc(i.action, ["erase", "maskText", "scrubUrl", "scrubCss"]) && rc(null !== (n = i.type) && void 0 !== n ? n : "static", ["static", "prefix"])
            }
            function rc(t, n) {
                return void 0 === n && (n = []),
                    "string" == typeof t && (0 === n.length || -1 !== n.indexOf(t))
            }
            function ec(t, n) {
                return t("function" == typeof n ? n() : n)
            }
            function sc(t, n, i, r) {
                return void 0 === r && (r = vn.DefaultRecDisabledMessage),
                {
                    commit: function (n) {
                        if (t)
                            return ec(Y(t), null != n ? n : i)
                    },
                    discard: function (t) {
                        if (n)
                            return oc(Y(n), null != t ? t : r)
                    }
                }
            }
            function oc(t, n) {
                if (void 0 === n && (n = vn.DefaultRecDisabledMessage),
                    t) {
                    var i = n;
                    try {
                        i = new Error(n)
                    } catch (t) { }
                    ec(Y(t), i)
                }
            }
            function uc(t, n, i) {
                void 0 === n && (n = !1);
                for (var r = 0, e = t.commit; r < e.length; r++) {
                    var s = e[r];
                    n ? s.discard(i) : s.commit()
                }
                for (var o = 0, u = t.discard; o < u.length; o++)
                    (s = u[o]).discard(i);
                t.commit = [],
                    t.discard = []
            }
            var ac = [ia.Source, ia.TrackEvent, ia.GetSession]
                , cc = [ia.Observe];
            function hc(t, n) {
                try {
                    var i = t[1]
                        , r = t[3]
                        , e = void 0 === r ? J : r
                        , s = i
                        , o = s.type
                        , u = s.callback;
                    e(n.registerListener(o, u))
                } catch (t) { }
            }
            var fc = function (t) {
                function n(n) {
                    void 0 === n && (n = 250);
                    var i = t.call(this) || this;
                    return i.Nc = o.mathMax(0, n),
                        i
                }
                return (0,
                    e.__extends)(n, t),
                    n.prototype.un = function () {
                        var t = this;
                        (function (t) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    var n;
                                    return (0,
                                        e.__generator)(this, function (i) {
                                            switch (i.label) {
                                                case 0:
                                                    return (n = o.requestWindowIdleCallback) ? [2, new Ni(function (i) {
                                                        n(window, i, {
                                                            timeout: t
                                                        })
                                                    }
                                                    )] : [4, jr(t)];
                                                case 1:
                                                    return i.sent(),
                                                        [2, Mr(42)];
                                            }
                                        })
                                })
                        }
                        )(this.Nc).then(function (n) {
                            n.didTimeout ? Or().then(function () {
                                return t.on(Mr(32))
                            }) : t.on(n)
                        })
                    }
                    ,
                    n
            }(Dr)
                , vc = function (t) {
                    function n(n) {
                        var i = t.call(this) || this;
                        return i.ii = n,
                            i
                    }
                    return (0,
                        e.__extends)(n, t),
                        n.prototype.un = function () {
                            var t = this;
                            Kr().then(function () {
                                Rr(t.ii).then(function () {
                                    var n = Mr(32);
                                    t.on(n)
                                })
                            })
                        }
                        ,
                        n
                }(Dr)
                , lc = function () {
                    function t() { }
                    return t.prototype.createTopRecorder = function (t) {
                        var n = N(t.window, "_fs_use_socket", "boolean") && Ra.isSupported() ? new Ra(t) : new ru(t);
                        return new Qu(t, n)
                    }
                        ,
                        t.prototype.createInnerRecorder = function (t) {
                            return new Zu(t)
                        }
                        ,
                        t
                }()
                , dc = function () {
                    function t(t, n) {
                        void 0 === t && (t = window),
                            void 0 === n && (n = new lc),
                            this.ii = t,
                            this.Lc = n,
                            this.Zo = "https:",
                            this.Uc = !1,
                            this.Hc = !0,
                            this.ia = null,
                            this.Dc = pn.Shutdown,
                            this.Bc = {
                                commit: [],
                                discard: []
                            },
                            this.Fc = new Ba,
                            this.Wc = new Fa(this.Fc)
                    }
                    return t.prototype.init = function () {
                        var t, n;
                        I(this.ii) || (this.ii,
                            t = this.ii,
                            n = C(this.ii),
                            t._fs_loaded = n,
                            n in t || (t[n] = {}),
                            function (t) {
                                (0,
                                    e.__awaiter)(this, void 0, Ni, function () {
                                        var n;
                                        return (0,
                                            e.__generator)(this, function (i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return [4, Ca(t, o.snapshot)];
                                                    case 1:
                                                        return n = i.sent(),
                                                            o.rebuildFromSnapshot(n),
                                                            [2];
                                                }
                                            })
                                    })
                            }(this.ii),
                            this.zc(),
                            this.Vc(),
                            this.ii,
                            this.Wc.addEvent({
                                type: Iu.INTERNAL_FS_INIT,
                                data: {}
                            }))
                    }
                        ,
                        t.prototype.qc = function () {
                            var t = function (t) {
                                var n = {
                                    orgId: B(t) || "",
                                    script: L(t) || "",
                                    recHost: H(t) || "",
                                    cdnHost: U(t) || "",
                                    appHost: D(t) || "",
                                    captureOnStartup: F(t)
                                };
                                return n.orgId && -1 === n.orgId.indexOf("FULLSTORY_KEY") && n.script && n.recHost && n.cdnHost && n.appHost ? n : null
                            }(this.ii);
                            if (null === t)
                                return !1;
                            var n = t.appHost
                                , i = t.cdnHost
                                , r = t.orgId
                                , e = t.recHost
                                , s = t.script
                                , o = t.captureOnStartup;
                            return this.xu = n,
                                this.tu = i,
                                this.Ou = r,
                                this.ju = e,
                                this.Iu = s,
                                this.$c = o,
                                "localhost:8080" == this.ju && (this.Zo = "http:"),
                                this.Gc = function (t, n) {
                                    var i, r = z(n);
                                    return W(n) ? i = !1 : n !== top ? i = !0 : r ? t && r.init && r.init(t) && (i = !0) : i = !1,
                                        i
                                }(r, this.ii),
                                void 0 !== this.Gc && Ga(this.ii)
                        }
                        ,
                        t.prototype.getCurrentSessionURL = function (t) {
                            return this.Xc(t ? "url.now" : "url")
                        }
                        ,
                        t.prototype.getCurrentSession = function () {
                            return this.Xc("id")
                        }
                        ,
                        t.prototype.Xc = function (t) {
                            return this.Qc ? Qa(this.Qc, t) : null
                        }
                        ,
                        t.prototype.enableConsole = function () {
                            this._api(ia.SetConfig, {
                                console: !0
                            })
                        }
                        ,
                        t.prototype.disableConsole = function () {
                            this._api(ia.SetConfig, {
                                console: !1
                            })
                        }
                        ,
                        t.prototype.restart = function () {
                            this._api(ia.Restart)
                        }
                        ,
                        t.prototype.shutdown = function () {
                            this._api(ia.Shutdown)
                        }
                        ,
                        t.prototype.log = function () {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            this._api(ia.Log, t)
                        }
                        ,
                        t.prototype.Yc = function (t) {
                            void 0 === t && (t = qt.Api),
                                this.Dc = pn.Shutdown,
                                this.Qc && !this.Jc && (this.Qc.shutdown(t),
                                    this.Qc = null,
                                    !this.Gc && this.Zc && this.Zc.unloadCrossPageVars(t),
                                    this.Wc.addEvent({
                                        type: Iu.SHUTDOWN,
                                        data: {
                                            reason: t
                                        }
                                    }))
                        }
                        ,
                        t.prototype.th = function () {
                            if (this.Hc)
                                return this.Jc ? (this.Jc(),
                                    void (this.Jc = null)) : void (this.Qc || this.nh(!0))
                        }
                        ,
                        t.prototype.ko = function (t, n) {
                            return (0,
                                e.__awaiter)(this, void 0, Ni, function () {
                                    return (0,
                                        e.__generator)(this, function (i) {
                                            switch (i.label) {
                                                case 0:
                                                    return n && null == this.ia ? [2] : this.Dc === pn.Starting ? (this.ih = [t, n],
                                                        [2]) : (this.Yc(t),
                                                            [4, jr(0)]);
                                                case 1:
                                                    return i.sent(),
                                                        [4, jr(0)];
                                                case 2:
                                                    return i.sent(),
                                                        n && this.ia && this.ia.clear(),
                                                        this.th(),
                                                        [2];
                                            }
                                        })
                                })
                        }
                        ,
                        t.prototype._api = function (t, n, i, r, e) {
                            if (this.Hc && this.Dc !== pn.Fatal) {
                                var s, o = "start" === t || "restart" === t, u = [t, n, i, r || function (t) {
                                    s = t
                                }
                                    , e];
                                if (!e || this.Dc !== pn.Shutdown || o)
                                    return !this.Qc || this.ih ? (q(this.ii, u),
                                        void (o && this.th())) : (this.rh(u),
                                            s);
                                oc(e, vn.ShutdownMessage)
                            } else
                                oc(e)
                        }
                        ,
                        t.prototype.rh = function (t) {
                            var n;
                            if (this.Qc) {
                                var i = null !== (n = this.eh(this.Qc, [t])) && void 0 !== n ? n : {
                                    reidentified: !1,
                                    applyApi: function () { }
                                }
                                    , r = i.applyApi
                                    , e = i.sideEffects
                                    , s = i.initConfig
                                    , o = i.recordingShouldBeEnabled;
                                i.reidentified ? (q(this.ii, t),
                                    this.ko(qt.Reidentify, !0)) : this.sh(this.Qc, {
                                        applyApi: r,
                                        sideEffects: e,
                                        initConfig: s,
                                        recordingShouldBeEnabled: o
                                    }),
                                    void 0 !== o && (o ? this.th() : this.Yc(qt.Api))
                            }
                        }
                        ,
                        t.prototype.eh = function (t, n) {
                            return function (t, n) {
                                for (var i, r, e, s, o, u, a, c = n.inFrame, h = n.initConfig, f = n.recorder, v = n.recordingObserver, l = n.state, d = n.vars, p = function (t) {
                                    for (var n = [], i = 0, r = t; i < r.length; i++) {
                                        var e = r[i]
                                            , s = e[0]
                                            , o = e[1]
                                            , u = e[2]
                                            , a = e[3]
                                            , c = e[4]
                                            , h = Ya(s, o);
                                        h && (h.source = "string" == typeof u ? {
                                            integration: u
                                        } : u,
                                            h.resolve = a,
                                            h.reject = c,
                                            n.push(h))
                                    }
                                    return n
                                }(t), w = [], g = !1, y = !1, m = [], b = [], S = function (t) {
                                    if (d) {
                                        var n = d.api(t)
                                            , i = n.events;
                                        n.reidentify && (w = [],
                                            g = !0,
                                            b.push.apply(b, m),
                                            m = []),
                                            w.push.apply(w, i)
                                    }
                                }, k = function (t, n) {
                                    !1 !== s || -1 !== cc.indexOf(t.operation) ? m.push(sc(t.resolve, t.reject, n)) : b.push(sc(t.resolve, t.reject, n))
                                }, _ = function (t, n) {
                                    b.push(sc(t.resolve, t.reject, void 0, n))
                                }, A = function (t) {
                                    try {
                                        if (t.operation,
                                            c && -1 === ac.indexOf(t.operation)) {
                                            var n = "FS." + t.operation + "() is not available in an inner frame";
                                            return y || (y = !0),
                                                _(t, n),
                                                "continue"
                                        }
                                        switch (t.operation) {
                                            case ia.Restart:
                                            case ia.Start:
                                                s = !0,
                                                    k(t);
                                                break;
                                            case ia.Shutdown:
                                                k(t),
                                                    s = !1;
                                                break;
                                            case ia.Log:
                                                var d = t.option
                                                    , p = d.level
                                                    , g = (n = d.msg,
                                                        f.console().logEvent(null != p ? p : "log", n ? [n] : [], "fs"));
                                                g && w.push(g),
                                                    k(t);
                                                break;
                                            case ia.SetIdentity:
                                                var m = function (n) {
                                                    S({
                                                        operation: ia.SetProperties,
                                                        option: n,
                                                        source: t.source,
                                                        resolve: t.resolve,
                                                        reject: t.reject
                                                    })
                                                };
                                                t.option && "object" == typeof t.option ? (Object.prototype.hasOwnProperty.call(t.option, "consent") && (u = null !== (i = t.option.consent) && void 0 !== i && i),
                                                    Object.prototype.hasOwnProperty.call(t.option, "uid") && m({
                                                        type: "user",
                                                        properties: {
                                                            uid: t.option.uid
                                                        }
                                                    }),
                                                    Object.prototype.hasOwnProperty.call(t.option, "properties") && m({
                                                        type: "user",
                                                        properties: null !== (r = t.option.properties) && void 0 !== r ? r : {}
                                                    }),
                                                    (null === (e = t.option) || void 0 === e ? void 0 : e.anonymous) && m({
                                                        type: "user",
                                                        properties: {
                                                            uid: !1
                                                        }
                                                    })) : m({
                                                        type: "user",
                                                        properties: {
                                                            uid: t.option
                                                        }
                                                    }),
                                                    k(t);
                                                break;
                                            case ia.TrackEvent:
                                            case ia.SetPage:
                                            case ia.SetProperties:
                                                S(t),
                                                    k(t);
                                                break;
                                            case ia.GetSession:
                                                k(t, function () {
                                                    var n;
                                                    return Qa(f, null === (n = t.option) || void 0 === n ? void 0 : n.format)
                                                });
                                                break;
                                            case ia.SetConfig:
                                                var b = t.option.console;
                                                o = b,
                                                    k(t);
                                                break;
                                            case ia.Stat:
                                                var A = t.option
                                                    , T = A.event_type
                                                    , E = A.properties;
                                                w.push(function (t, n) {
                                                    var i = vn.DefaultStatsSettings
                                                        , r = i.MaxEventTypeLength
                                                        , e = i.MaxPayloadLength
                                                        , s = "string" == typeof t ? t.trim().slice(0, r) : "";
                                                    return {
                                                        Kind: Pt.STATS,
                                                        Args: [s, Qe(Li(n, e))]
                                                    }
                                                }(T, E)),
                                                    k(t);
                                                break;
                                            case ia.Observe:
                                                var C = t.option
                                                    , I = C.type
                                                    , j = C.callback;
                                                k(t, null == v ? void 0 : v.registerListener(I, j));
                                                break;
                                            case ia.Source:
                                                var x = Wu({
                                                    source: t.option.source,
                                                    type: "default",
                                                    entrypoint: "source"
                                                });
                                                w.push(x),
                                                    k(t);
                                                break;
                                            case ia.Init:
                                                if (l !== pn.Shutdown) {
                                                    _(t, n = "Capture already started - init rejected.");
                                                    break
                                                }
                                                if (void 0 !== a || void 0 !== h) {
                                                    _(t, n = "Multiple calls to init - init rejected.");
                                                    break
                                                }
                                                var O = function (t) {
                                                    var n, i = {
                                                        recoverable: [],
                                                        unrecoverable: []
                                                    };
                                                    if (!Za(t))
                                                        return i.unrecoverable.push(nc("options", Ja)),
                                                            [i, null];
                                                    var r = {};
                                                    if (tc(t, "privacy")) {
                                                        var e = function (t) {
                                                            var n = "privacy.attributeBlocklist"
                                                                , i = [];
                                                            if (!Za(t))
                                                                return i.push(nc("privacy", Ja)),
                                                                    [i, void 0];
                                                            if (!tc(t, "attributeBlocklist"))
                                                                return [i, void 0];
                                                            if (!nt(t.attributeBlocklist))
                                                                return i.push(nc(n, "must be an array")),
                                                                    [i, void 0];
                                                            for (var r = {
                                                                attributeBlocklist: []
                                                            }, e = 0, s = t.attributeBlocklist; e < s.length; e++) {
                                                                var o = s[e];
                                                                ic(o) ? r.attributeBlocklist.push(o) : i.push(nc(n, "invalid rule: " + Li(o)))
                                                            }
                                                            return [i, r]
                                                        }(t.privacy)
                                                            , s = e[0]
                                                            , o = e[1];
                                                        (n = i.recoverable).push.apply(n, s),
                                                            r.privacy = o
                                                    }
                                                    return [i, r]
                                                }(t.option)
                                                    , K = O[0]
                                                    , M = O[1];
                                                if (K.unrecoverable.length > 0 || null === M) {
                                                    n = "Init config rejected: " + K.unrecoverable.join(",\n"),
                                                        _(t, n);
                                                    break
                                                }
                                                K.recoverable.length > 0 && (n = "Init config partially rejected: " + K.recoverable.join(",\n")),
                                                    a = M,
                                                    k(t);
                                                break;
                                            default:
                                                (0,
                                                    Yr.nt)(t, "invalid operation");
                                        }
                                    } catch (i) {
                                        Ot.sendToBugsnag(i, "error"),
                                            _(t, n = "unknown error evaluating API")
                                    }
                                }, T = 0, E = p; T < E.length; T++)
                                    A(E[T]);
                                return {
                                    applyApi: function () {
                                        for (var t = f.queue(), n = 0, i = w; n < i.length; n++) {
                                            var r = i[n];
                                            t.enqueue(r)
                                        }
                                        void 0 !== u && f.setConsent(u),
                                            void 0 !== a && f.setInitConfig(a),
                                            "boolean" == typeof o && (o ? f.console().start({
                                                ConsoleWatcher: !0
                                            }) : f.console().stop())
                                    },
                                    initConfig: a,
                                    recordingShouldBeEnabled: s,
                                    reidentified: g,
                                    sideEffects: {
                                        commit: m,
                                        discard: b
                                    }
                                }
                            }(n, {
                                inFrame: this.Gc,
                                initConfig: this.Mu,
                                recorder: t,
                                recordingObserver: this.Fc,
                                state: this.Dc,
                                vars: this.Zc
                            })
                        }
                        ,
                        t.prototype.sh = function (t, n) {
                            var i, r, e = n.applyApi, s = n.sideEffects, o = n.initConfig, u = n.recordingShouldBeEnabled;
                            e(),
                                t.getIsSessionReady() || !1 === u ? uc(s, !1, !1 === u ? vn.ShutdownMessage : void 0) : ((i = this.Bc.commit).push.apply(i, s.commit),
                                    (r = this.Bc.discard).push.apply(r, s.discard)),
                                void 0 !== o && (this.Mu = o)
                        }
                        ,
                        t.prototype._cookies = function () {
                            return this.ia ? this.ia.getCookies() : null
                        }
                        ,
                        t.prototype._setCookie = function (t, n) {
                            this.ia && this.ia.setCookie(t, n)
                        }
                        ,
                        t.prototype._withEventQueue = function (t, n) {
                            if (this.Qc) {
                                var i = this.Qc.queue()
                                    , r = this.Qc.pageSignature();
                                null != i && null != r && (t === r ? n(i) : Li({
                                    msg: "Error in _withEventQueue: Page Signature mismatch",
                                    pageSignature: r,
                                    callerSignature: t
                                }, 1024))
                            }
                        }
                        ,
                        t.prototype._withRecorder = function (t, n) {
                            if (this.Qc) {
                                var i = this.Qc.pageSignature();
                                null !== i && (void 0 === t || t === i ? n(this.Qc) : Li({
                                    msg: "Error in _withRecorder: Page Signature mismatch",
                                    pageSignature: i,
                                    callerSignature: t
                                }, 1024))
                            }
                        }
                        ,
                        t.prototype.zc = function () {
                            var t = j(this.ii);
                            if (t)
                                for (var n = 0, i = ["disableConsole", "enableConsole", "getCurrentSession", "getCurrentSessionURL", "log", "restart", "shutdown", "_api", "_withEventQueue", "_withRecorder", "_cookies", "_setCookie"]; n < i.length; n++) {
                                    var r = i[n];
                                    t[r] = dt(this[r], this, lt)
                                }
                        }
                        ,
                        t.prototype.Vc = function () {
                            var t = this;
                            this.Hc = this.qc(),
                                this.Hc ? (this.nh(!1),
                                    this.oh(),
                                    this.ii.addEventListener("message", Ot.wrap(function (n) {
                                        return t.uh(n)
                                    }))) : function (t, n, i) {
                                        for (var r = 0, e = V(t); r < e.length; r++) {
                                            var s = e[r]
                                                , o = s[0]
                                                , u = s[4];
                                            -1 !== cc.indexOf(o) ? o === ia.Observe && hc(s, n) : oc(u)
                                        }
                                        i.addEvent({
                                            type: Iu.SHUTDOWN,
                                            data: {
                                                reason: qt.SettingsBlocked
                                            }
                                        })
                                    }(this.ii, this.Fc, this.Wc)
                        }
                        ,
                        t.prototype.ah = function () {
                            var t = this;
                            this.Ou && (this.ia = new ca(this.Ou, this.ii.document, function (n) {
                                for (var i, r = 0, e = n; r < e.length; r++) {
                                    var s = e[r];
                                    null === (i = t.Qc) || void 0 === i || i.queue().enqueue({
                                        Kind: Pt.STORAGE_WRITE_FAILURE,
                                        Args: s
                                    })
                                }
                            }
                                , this.Gc),
                                this.Zc ? this.Zc.setIdentity(this.ia) : this.Zc = new ba(this.ia))
                        }
                        ,
                        t.prototype.uh = function (t) {
                            if ("string" == typeof t.data && (t.source == this.ii.parent || t.source == this.ii))
                                switch (yu(t.data)[0]) {
                                    case lu.ShutdownFrame:
                                        this.Yc(qt.FsShutdownFrame);
                                        break;
                                    case lu.RestartFrame:
                                        this.th();
                                }
                        }
                        ,
                        t.prototype.hh = function (t, n) {
                            var i, r = this, e = o.mathRound(null !== (i = Y(function () {
                                var t;
                                return null === (t = window.performance) || void 0 === t ? void 0 : t.now()
                            })()) && void 0 !== i ? i : -1);
                            return {
                                window: this.ii,
                                time: new $i,
                                measurer: new vc(this.ii),
                                taskQueue: new fc(2e3),
                                options: {
                                    appHost: this.xu,
                                    orgId: this.Ou,
                                    recHost: this.ju,
                                    cdnHost: this.tu,
                                    scheme: this.Zo,
                                    script: this.Iu
                                },
                                recording: {
                                    bundleUploadInterval: function () {
                                        var n, i;
                                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.bundleUploadInterval()) && void 0 !== i ? i : vn.DefaultBundleUploadInterval
                                    },
                                    getCurrentSessionURL: function (n) {
                                        var i, r;
                                        return null !== (r = null === (i = t()) || void 0 === i ? void 0 : i.getCurrentSessionURL(n)) && void 0 !== r ? r : null
                                    },
                                    identity: this.ia,
                                    inFrame: n,
                                    pageResponse: function () {
                                        var n;
                                        return null === (n = t()) || void 0 === n ? void 0 : n.getPageResponse()
                                    },
                                    pageSignature: function () {
                                        var n, i;
                                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.pageSignature()) && void 0 !== i ? i : null
                                    },
                                    preroll: e,
                                    splitPage: function (t, n) {
                                        return r.ko(t, n)
                                    },
                                    vars: this.Zc,
                                    observer: this.Wc,
                                    bundleApiVersion: function () {
                                        var n, i;
                                        return null !== (i = null === (n = t()) || void 0 === n ? void 0 : n.getBundleApiVersion()) && void 0 !== i ? i : "v1"
                                    }
                                },
                                queue: function () {
                                    var n;
                                    return null === (n = t()) || void 0 === n ? void 0 : n.queue()
                                }
                            }
                        }
                        ,
                        t.prototype.fh = function (t, n) {
                            if (n && this.Zc) {
                                for (var i = 0, r = this.Zc.getDocumentVars(); i < r.length; i++) {
                                    var e = r[i];
                                    t.enqueue(e)
                                }
                                var s = this.Zc.getCrossPageVars();
                                void 0 !== s && t.enqueue(s)
                            }
                        }
                        ,
                        t.prototype.Ru = function (t, n) {
                            var i = this;
                            return function (r) {
                                var e = r.sessionUrl
                                    , s = r.settings;
                                i.Dc = pn.Started,
                                    n && t.tellAllFramesTo([lu.RestartFrame]),
                                    i.ih && (i.ko(i.ih[0], i.ih[1]),
                                        i.ih = null),
                                    i.Wc.addEvent({
                                        type: Iu.START,
                                        data: {
                                            sessionUrl: e,
                                            settings: s
                                        }
                                    }),
                                    uc(i.Bc)
                            }
                        }
                        ,
                        t.prototype.Pu = function () {
                            var t = this;
                            return function () {
                                t.Dc = pn.Fatal,
                                    t.Wc.addEvent({
                                        type: Iu.SHUTDOWN,
                                        data: {
                                            reason: qt.SettingsBlocked
                                        }
                                    }),
                                    uc(t.Bc, !0)
                            }
                        }
                        ,
                        t.prototype.lh = function (t, n, i) {
                            void 0 === i && (i = !1),
                                this.Dc = pn.Starting,
                                t.start(i, this.Ru(t, n), this.Pu())
                        }
                        ,
                        t.prototype.nh = function (t) {
                            var n;
                            this.ah();
                            var i = this.Gc
                                , r = this.hh(function () {
                                    return n
                                }, !!i);
                            n = i ? this.Lc.createInnerRecorder(r) : this.Lc.createTopRecorder(r),
                                this.dh(n, t),
                                this.Qc = n
                        }
                        ,
                        t.prototype.dh = function (t, n) {
                            var i, r = this;
                            void 0 === n && (n = !1);
                            var e, s = !1, o = [];
                            if (!this.Gc) {
                                this.fh(t.queue(), n);
                                var u = N(this.ii, "_fs_asset_map_id");
                                u && o.push([m.Vars, [Zt.Document, {
                                    assetMapId: u
                                }]]),
                                    t.queue().enqueue({
                                        Kind: Pt.REC_FEAT_SUPPORTED,
                                        Args: [Qt.CaptureOnStartupEnabled, !1 === this.$c]
                                    })
                            }
                            o.push.apply(o, V(this.ii));
                            var a = null !== (i = this.eh(t, o)) && void 0 !== i ? i : {
                                applyApi: function () { }
                            }
                                , c = a.applyApi
                                , h = a.sideEffects
                                , f = a.initConfig
                                , v = a.recordingShouldBeEnabled
                                , l = a.reidentified;
                            this.Gc ? (s = !1,
                                e = !1) : (void 0 !== v ? s = !v : !1 === this.$c && (s = !0),
                                    this.$c = !0,
                                    e = !!l),
                                this.sh(t, {
                                    applyApi: c,
                                    sideEffects: h,
                                    initConfig: f,
                                    recordingShouldBeEnabled: v
                                }),
                                s ? this.Jc = function () {
                                    return r.lh(t, n, e)
                                }
                                    : this.lh(t, n, e)
                        }
                        ,
                        t.prototype.oh = function () {
                            var t = this
                                , n = function () {
                                    t.Uc || (t.Uc = !0,
                                        t.Qc && t.Qc.onDomLoad())
                                }
                                , i = !1
                                , r = function () {
                                    i || (i = !0,
                                        t.Qc && t.Qc.onLoad())
                                };
                            switch (document.readyState) {
                                case "interactive":
                                    n();
                                    break;
                                case "complete":
                                    n(),
                                        r();
                            }
                            this.Uc || document.addEventListener("DOMContentLoaded", Ot.wrap(n)),
                                i || this.ii.addEventListener("load", Ot.wrap(function (t) {
                                    n(),
                                        r()
                                }))
                        }
                        ,
                        t
                }();
            !function () {
                try {
                    new dc().init()
                } catch (t) {
                    Ot.sendToBugsnag(t, "error")
                }
            }()
        }
    }
        , n = {};
    function i(r) {
        var e = n[r];
        if (void 0 !== e)
            return e.exports;
        var s = n[r] = {
            exports: {}
        };
        return t[r](s, s.exports, i),
            s.exports
    }
    i.d = function (t, n) {
        for (var r in n)
            i.o(n, r) && !i.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            })
    }
        ,
        i.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }
        ,
        i.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        i(201)
}();
