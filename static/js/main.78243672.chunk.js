(this["webpackJsonplofi-app"] = this["webpackJsonplofi-app"] || []).push([[0], {
    46: function(e, t, n) {},
    82: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n(1)
          , c = n(0)
          , a = n.n(c)
          , o = n(18)
          , r = n.n(o)
          , s = n(4)
          , l = (n(46),
        n(3))
          , u = n(28);
        function b(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window
              , i = Object(c.useRef)();
            Object(c.useEffect)((function() {
                i.current = t
            }
            ), [t]),
            Object(c.useEffect)((function() {
                if (n && n.addEventListener) {
                    var t = function(e) {
                        return i.current(e)
                    };
                    return n.addEventListener(e, t),
                    function() {
                        n.removeEventListener(e, t)
                    }
                }
            }
            ), [e, n])
        }
        function d() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
              , t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            function n(n) {
                t && e.forEach((function(e) {
                    var t = (e[2] || {}).withShift;
                    ("any" === e[0] || n.key === e[0] && (!0 !== t || n.shiftKey)) && (n.preventDefault(),
                    e[1] && e[1]())
                }
                ))
            }
            return b("keyup", (function(e) {
                var t;
                j.includes(null === (t = e.target) || void 0 === t ? void 0 : t.tagName) || n(e)
            }
            )),
            null
        }
        var j = ["INPUT", "TEXTAREA"]
          , m = n(5)
          , f = n(33)
          , O = n.n(f)
          , h = n(0)
          , p = h.useEffect
          , v = h.useState;
        var x = function() {
            var e = v(!1)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , i = t[1];
            return p((function() {
                i(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document)
            }
            ), []),
            n
        }
          , g = [{
            id: "5qap5aO4i9A",
            name: "lofi hip hop radio - beats to relax/study to"
        }, {
            id: "ORBwkXsUNEs",
            name: "4K \ud83d\udd34 Lofi Hip Hop Beats 24/7 Radio \ud83d\udd34 No Copyright Lofi Beats to sleep/ study to"
        }, {
            id: "DWcJFNfaw9c",
            name: "lofi hip hop radio - beats to sleep/chill to"
        }, {
            id: "5yx6BWlEVcY",
            name: "Chillhop Radio - jazzy & lofi hip hop beats"
        }, {
            id: "-9gEgshJUuY",
            name: "Japanese Lofi Radio 24/7 \ud83d\udd34 Aesthetic Lofi Hip Hop Music \ud83d\udd34"
        }, {
            id: "-5KAN9_CzSA",
            name: "coffee shop radio // 24/7 lofi hip-hop beats"
        }, {
            id: "Qt0-9mO-ZXY",
            name: "Space Lofi Hip Hop Radio 24/7 \ud83d\ude80 Chill Lofi Beats To Study, Lofi Sleep Music \ud83d\ude80 No Copyright Lofi"
        }, {
            id: "kJ3gKk-Zu-8",
            name: "Lofi Ramen shop \u266b chillhop beats to chill & study \u266b relaxing lofi music"
        }, {
            id: "HDhR2Yhnvfo",
            name: "lofi hip hop radio \ud83c\udf3f chill beats to relax/study to"
        }, {
            id: "7NOSDKb0HlU",
            name: "lofi hip hop radio - beats to study/relax to \ud83d\udc3e"
        }, {
            id: "tNkZsRW7h2c",
            name: "Space Ambient Music LIVE 24/7: Space Traveling Background Music, Music for Stress Relief, Dreaming"
        }, {
            id: "IjMESxJdWkg",
            name: "24/7 lofi hip hop radio - beats to study/chill/relax"
        }, {
            id: "CGVYpiS3lTg",
            name: "Friday vibes ~ lofi hiphop radio 24/7 - beats to relax/study"
        }, {
            id: "QYW2K6Ncfwo",
            name: "SACRA BEATS \u30b5\u30af\u30e9\u30d3\u30fc\u30c4 | lofi beats,24/7,chill,relax,study to,radio,"
        }, {
            id: "qH3fETPsqXU",
            name: "\u301024/7 CHILL LOFI HIP HOP RADIO\u3011beats to sleep/relax/study to"
        }, {
            id: "FjHGZj2IjBk",
            name: "[B??nh y??n th?? gi??n nh??? nh??ng] Thi???n - Monoman"
        }]
          , y = {
            track: function(e, t) {}
        }
          , I = function() {
            var e = Object(c.useState)("")
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , i = t[1];
            return Object(c.useEffect)((function() {
                setTimeout((function() {
                    "" === n && i("."),
                    "." === n && i(".."),
                    ".." === n && i("..."),
                    "..." === n && i("")
                }
                ), 300)
            }
            ), [n]),
            n
        }
          , w = n.p + "static/media/beats1.bb5eeeaf.svg"
          , N = n.p + "static/media/beats2.6d67e4f1.svg"
          , M = n.p + "static/media/beats3.b7b47b9b.svg"
          , Z = n.p + "static/media/beats4.ad915208.svg"
          , z = n.p + "static/media/beatsMute.70cdfd3c.svg"
          , A = n.p + "static/media/buffering1.27886777.svg"
          , D = n.p + "static/media/buffering2.97cf3daf.svg"
          , G = n.p + "static/media/buffering3.34a0de3c.svg"
          , T = n.p + "static/media/buffering4.e55cf19d.svg"
          , P = n.p + "static/media/checkmark.27630148.svg"
          , H = n.p + "static/media/facebook.3fe0a515.svg"
          , S = n.p + "static/media/forward.64c7a860.svg"
          , L = n.p + "static/media/fullscreen-enter.47fab6db.svg"
          , E = n.p + "static/media/fullscreen-exit.93379b1e.svg"
          , Y = n.p + "static/media/heart.0513072e.svg"
          , k = n.p + "static/media/mail.7a7748f6.svg"
          , R = n.p + "static/media/mailbrew.3d6186a7.svg"
          , W = n.p + "static/media/open.b33a26e7.svg"
          , B = n.p + "static/media/pause.69ddfc29.svg"
          , F = n.p + "static/media/play.1055bee6.svg"
          , X = n.p + "static/media/previous.17bb0c57.svg";
        function V(e) {
            var t = e.name
              , n = e.style;
            return Object(i.jsx)("img", {
                className: "shadow",
                src: Q[t],
                alt: "",
                style: Object(m.a)({
                    width: 20,
                    height: 20,
                    flex: "0 0 20px"
                }, n)
            })
        }
        var Q = {
            shuffle: n.p + "static/media/shuffle.53b14e6b.svg",
            play: F,
            pause: B,
            forward: S,
            previous: X,
            open: W,
            timer: n.p + "static/media/timer.1427f4b2.svg",
            mail: k,
            heart: Y,
            twitter: n.p + "static/media/twitter.26696d4a.svg",
            facebook: H,
            checkmark: P,
            fullscreenEnter: L,
            fullscreenExit: E,
            beats1: w,
            beats2: N,
            beats3: M,
            beats4: Z,
            buffering1: A,
            buffering2: D,
            buffering3: G,
            buffering4: T,
            beatsMute: z,
            mailbrew: R
        }
          , C = n(36);
        function U(e) {
            return Object(i.jsx)(C.a, Object(m.a)({
                touch: !1,
                arrow: !1
            }, e))
        }
        var J = function(e) {
            var t = e.onClick
              , n = e.text
              , c = e.style
              , a = e.icon
              , o = e.tooltip
              , r = e.type
              , s = e.value
              , l = e.className;
            return Object(i.jsx)(U, {
                content: o,
                disabled: !o,
                children: Object(i.jsxs)("button", {
                    onClick: t,
                    type: null !== r && void 0 !== r ? r : "button",
                    value: s,
                    style: Object(m.a)(Object(m.a)({
                        display: "flex",
                        alignItems: "center"
                    }, c), n ? {} : {
                        lineHeight: 0
                    }),
                    className: l,
                    title: o,
                    children: [a && Object(i.jsx)(V, {
                        name: a,
                        style: {
                            marginRight: n ? 8 : 0
                        }
                    }), n && Object(i.jsx)("span", {
                        children: n
                    })]
                })
            })
        }
          , K = n(88)
          , q = n(87);
        function _(e) {
            return "https://dc85enhu9zukf.cloudfront.net/gifs/" + e + ".gif"
        }
        var $ = "ontouchend"in document;
        var ee = function(e) {
            var t = e.isPlaying
              , n = Object(c.useState)(1)
              , a = Object(l.a)(n, 2)
              , o = a[0]
              , r = a[1]
              , u = Object(s.f)(pe)
              , b = Object(s.f)(ve)
              , d = u < .1 || !t;
            return Object(c.useEffect)((function() {
                var e = setInterval((function() {
                    r((function(e) {
                        return 4 === e ? 1 : e + 1
                    }
                    ))
                }
                ), 250);
                return function() {
                    return clearInterval(e)
                }
            }
            ), []),
            Object(i.jsx)(V, {
                name: d ? "beatsMute" : (b ? "buffering" : "beats") + o,
                style: {
                    marginRight: "8px"
                }
            })
        }
          , te = function(e) {
            var t = e.currentStationId
              , n = e.setCurrentStationId
              , c = e.isPlaying
              , a = Object(s.e)(Ne)
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , u = o[1]
              , b = Object(s.g)(we)
              , d = Object(s.g)(Ie);
            if (!t)
                return null;
            var j = g.find((function(e) {
                return e.id === t
            }
            ));
            if (!j)
                return null;
            var m = localStorage.stationClicked || $ ? Object(i.jsx)("span", {
                children: j.name
            }) : Object(i.jsxs)("span", {
                children: [Object(i.jsxs)("span", {
                    className: "red",
                    style: {
                        display: "inline"
                    },
                    children: ["click to change >", " "]
                }), j.name]
            });
            return Object(i.jsxs)("div", {
                onChange: function(e) {
                    n(e.target.value)
                },
                value: t,
                name: "stations",
                id: "stations-selector",
                children: [Object(i.jsx)(K.a, {
                    children: r && Object(i.jsx)(q.a.div, {
                        initial: {
                            y: 60,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 60,
                            opacity: 0
                        },
                        transition: {
                            type: "spring",
                            duration: .3,
                            bounce: .1
                        },
                        id: "stations-list",
                        onClick: function() {
                            return u(!1)
                        },
                        children: g.map((function(e) {
                            var c = e.id === t;
                            return Object(i.jsxs)("div", {
                                className: "station-wrapper pointer",
                                onClick: function() {
                                    c || n(e.id)
                                },
                                children: [Object(i.jsxs)("div", {
                                    className: "station-thumbnail " + (c ? "green-box-small" : ""),
                                    style: {
                                        position: "relative",
                                        backgroundImage: "url(".concat(_("station_thumb_" + e.id), ")")
                                    },
                                    children: [Object(i.jsx)("a", {
                                        onClick: function(e) {
                                            e.stopPropagation()
                                        },
                                        href: "https://www.youtube.com/watch?v=".concat(e.id),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        style: {
                                            position: "absolute",
                                            top: 8,
                                            right: 8
                                        },
                                        children: Object(i.jsx)(V, {
                                            name: "open"
                                        })
                                    }), " "]
                                }), Object(i.jsx)("span", {
                                    className: "option",
                                    children: e.name
                                }, e.id)]
                            })
                        }
                        ))
                    })
                }), Object(i.jsxs)("div", {
                    id: "stations-button",
                    className: "pointer",
                    onClick: function() {
                        localStorage.setItem("stationClicked", "true"),
                        r || y.track("Open Selector"),
                        b(!1),
                        d(!1),
                        u(!r)
                    },
                    style: {
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "nowrap"
                    },
                    children: [Object(i.jsx)(ee, {
                        isPlaying: c
                    }), " ", m]
                })]
            })
        }
          , ne = function(e) {
            var t = e.size
              , n = void 0 === t ? 10 : t;
            return Object(i.jsx)("div", {
                style: {
                    width: n,
                    height: n
                }
            })
        };
        var ie = function(e) {
            var t = e.on
              , n = e.volume;
            return Object(i.jsx)("div", {
                className: n > .02 ? "green-box" : "red-box",
                style: {
                    width: 6,
                    height: 14,
                    marginRight: 5,
                    background: "white",
                    display: "inline-block",
                    pointerEvents: "none",
                    opacity: t ? 1 : .5
                }
            })
        };
        var ce = function(e) {
            var t = e.volume
              , n = e.setVolume
              , a = e.style
              , o = Object(c.useRef)(null)
              , r = Object(c.useState)(!1)
              , s = Object(l.a)(r, 2)
              , u = s[0]
              , b = s[1]
              , d = Object(c.useState)({
                x: 0,
                w: 0
            })
              , j = Object(l.a)(d, 2)
              , f = j[0]
              , O = j[1];
            function h(e) {
                b(!1)
            }
            function p(e) {
                u && v(e)
            }
            function v(e) {
                var t, i = e.clientX;
                n(Math.min(Math.max((t = (i - f.x) / f.w,
                Math.round(100 * (t + Number.EPSILON)) / 100), 0), 1))
            }
            return Object(c.useEffect)((function() {
                var e = o.current.getBoundingClientRect();
                O({
                    x: e.x,
                    w: e.width
                })
            }
            ), [t]),
            Object(i.jsx)("div", {
                style: Object(m.a)({
                    userSelect: "none"
                }, a),
                children: Object(i.jsxs)("div", {
                    onMouseDown: function(e) {
                        b(!0),
                        v(e)
                    },
                    onMouseOut: h,
                    onMouseUp: h,
                    onMouseMove: p,
                    onTouchMove: p,
                    onTouchEnd: h,
                    ref: o,
                    style: {
                        width: "auto",
                        display: "inline-block"
                    },
                    className: "pointer",
                    children: [Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .02
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .1
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .2
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .3
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .4
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .5
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .6
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .7
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .8
                    }), Object(i.jsx)(ie, {
                        volume: t,
                        on: t > .9
                    })]
                })
            })
        };
        function ae(e, t) {
            var n = Math.floor(Math.random() * e.length);
            return n === t ? ae(e, t) : n
        }
        var oe = {
            width: "100%",
            zIndex: 6
        }
          , re = {
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
        }
          , se = {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            background: "black"
        }
          , le = {
            pointerEvents: "none",
            userSelect: "none",
            position: "fixed",
            top: "100%",
            left: "100%"
        }
          , ue = {
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px"
        }
          , be = {
            pointerEvents: "none",
            userSelect: "none",
            zIndex: -1,
            borderRadius: "8px"
        }
          , de = function() {
            var e = Object(c.useState)("")
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1];
            return Object(c.useEffect)((function() {
                setTimeout((function() {
                    "" === n && a("."),
                    "." === n && a(".."),
                    ".." === n && a("..."),
                    "..." === n && a("")
                }
                ), 300)
            }
            ), [n]),
            Object(i.jsxs)("span", {
                children: ["Loading", n]
            })
        }
          , je = function(e) {
            var t = e.onStationChanged
              , n = e.isPlaying
              , a = e.setIsPlaying
              , o = Object(s.f)(he)
              , r = Object(s.e)(Ne)
              , u = Object(l.a)(r, 2)
              , b = u[0]
              , j = u[1]
              , f = Object(s.e)(xe)
              , h = Object(l.a)(f, 2)
              , p = h[0]
              , v = h[1]
              , w = Object(s.f)(ge)
              , N = Object(s.f)(ye)
              , M = Object(c.useState)(!0)
              , Z = Object(l.a)(M, 2)
              , z = Z[0]
              , A = Z[1]
              , D = Object(s.e)(ve)
              , G = Object(l.a)(D, 2)
              , T = G[0]
              , P = G[1]
              , H = Object(c.useState)(null)
              , S = Object(l.a)(H, 2)
              , L = S[0]
              , E = S[1]
              , Y = Object(s.e)(pe)
              , k = Object(l.a)(Y, 2)
              , R = k[0]
              , W = k[1]
              , B = Object(c.useState)(null)
              , F = Object(l.a)(B, 2)
              , X = F[0]
              , V = F[1]
              , Q = Object(c.useState)("")
              , C = Object(l.a)(Q, 2)
              , U = C[0]
              , K = C[1]
              , q = Object(s.f)(he)
              , _ = Object(s.e)(Ze)
              , $ = Object(l.a)(_, 2)
              , ee = $[0]
              , ie = $[1]
              , je = !X && q && ee
              , me = x();
            function fe() {
                V(null),
                K("")
            }
            function Oe(e) {
                e ? y.track("Player - Play") : y.track("Player - Pause"),
                a(e)
            }
            var Ie = Object(c.useCallback)((function() {
                fe(),
                j(!1);
                var e = ae(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Shuffle")
            }
            ), [N, t]);
            function we() {
                fe(),
                j(!1);
                var e = function(e, t) {
                    var n = t - 1;
                    return n < 0 ? e.length - 1 : n
                }(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Back")
            }
            function Me() {
                fe(),
                j(!1);
                var e = function(e, t) {
                    var n = t + 1;
                    return n > e.length - 1 ? 0 : n
                }(g, N);
                v(g[e].id),
                t(),
                y.track("Player - Forward")
            }
            return d([["ArrowRight", Me], ["ArrowLeft", we], ["ArrowUp", function() {
                W(Math.round(10 * Math.min(R + .1, 1)) / 10)
            }
            ], ["ArrowDown", function() {
                W(Math.round(10 * Math.max(R - .1, 0)) / 10)
            }
            ], ["v", function() {
                je || y.track("Show original video"),
                ie(!je)
            }
            ], ["Escape", function() {
                return j(!1)
            }
            ], [" ", function() {
                return Oe(!n)
            }
            ]], o),
            Object(c.useEffect)((function() {
                var e;
                if (T)
                    return e = setTimeout((function() {
                        E(!0)
                    }
                    ), 3e3),
                    function() {
                        return clearTimeout(e)
                    }
                    ;
                clearTimeout(e),
                E(!1)
            }
            ), [T, w]),
            Object(c.useEffect)((function() {
                if (150 === X) {
                    K("Ops, this station is not working. Skipping it");
                    var e = setTimeout((function() {
                        fe(),
                        Ie()
                    }
                    ), 4e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [X, Ie]),
            Object(i.jsxs)(i.Fragment, {
                children: [Object(i.jsxs)("div", {
                    style: Object(m.a)(Object(m.a)({}, oe), {}, {
                        display: o ? "block" : "none"
                    }),
                    children: [!b && U && Object(i.jsxs)("span", {
                        className: "red",
                        children: [U, Object(i.jsx)(I, {})]
                    }), !b && !U && T && L && Object(i.jsxs)("span", {
                        className: "red",
                        children: ["Buffering", Object(i.jsx)(I, {})]
                    }), Object(i.jsx)(ne, {
                        size: 14
                    }), !z && Object(i.jsx)("div", {
                        id: "buttons-ui",
                        children: Object(i.jsxs)("div", {
                            style: re,
                            children: [!n && Object(i.jsx)(J, {
                                icon: "play",
                                onClick: function() {
                                    return Oe(!0)
                                }
                            }), n && Object(i.jsx)(J, {
                                icon: "pause",
                                onClick: function() {
                                    return Oe(!1)
                                }
                            }), Object(i.jsx)(J, {
                                icon: "shuffle",
                                onClick: Ie
                            }), Object(i.jsx)(J, {
                                icon: "previous",
                                onClick: we
                            }), Object(i.jsx)(J, {
                                icon: "forward",
                                onClick: Me
                            }), !me && Object(i.jsx)(ce, {
                                volume: R,
                                setVolume: W,
                                style: {
                                    marginLeft: "4px"
                                }
                            })]
                        })
                    }), Object(i.jsx)(ne, {
                        size: 12
                    }), !z && Object(i.jsx)(te, {
                        isPlaying: n,
                        currentStationId: p,
                        setCurrentStationId: function(e) {
                            v(e),
                            t(),
                            Oe(!0)
                        }
                    }), z && Object(i.jsx)("div", {
                        id: "buttons-ui",
                        children: Object(i.jsx)(de, {})
                    })]
                }), Object(i.jsx)("div", {
                    style: je ? se : le,
                    className: "yt-wrapper",
                    children: Object(i.jsx)("div", {
                        style: ue,
                        children: Object(i.jsx)(O.a, {
                            controls: !1,
                            playing: n,
                            url: "https://www.youtube.com/watch?v=" + w.id,
                            style: be,
                            width: "100vw",
                            height: "200vw",
                            volume: R,
                            config: {
                                youtube: {
                                    playerVars: {
                                        modestbranding: !0,
                                        color: "black"
                                    }
                                }
                            },
                            playsinline: !0,
                            onReady: function() {
                                return A(!1)
                            },
                            onError: function(e) {
                                return V(e)
                            },
                            onPlay: function() {
                                return a(!0)
                            },
                            onPause: function() {
                                return a(!1)
                            },
                            onBuffer: function() {
                                return P(!0)
                            },
                            onBufferEnd: function() {
                                return P(!1)
                            },
                            onStart: function() {
                                return P(!1)
                            },
                            onEnded: function() {
                                return Ie()
                            }
                        })
                    })
                })]
            })
        }
          , me = ["MU56lYT1Ov07fVTsnM", "2yzgWbRc97QOIUpklz", "fqtxCwUd2t6dCzILMq", "3dhmyq6EKw2x7eFt4X", "3oEjHGokRZdOBbcZuo", "wKnqovL33x9in9ci6X", "KETTXY34XNgWZBxvqx", "NKEt9elQ5cR68", "Basrh159dGwKY", "XbJYBCi69nyVOffLIU", "mJhkYA1gnvY7r481qL", "dvreHY4p06lzVSDrvj", "8vRvucL4OhyjyM4A8T", "gfld3S4CsRXRZjqEj3", "7bEpr3NIPNY0E", "QLgtN0msAekg3x7YTm", "dsd7XbYg0e6hG0A7i8", "YRK6HL1CEMUxZHLvjl", "YRQfWgn1De4nYLLQBa", "NnMH7LDpZTPZS", "xUOwGcu6wd0cXBj5n2", "3o6nV7ygKBVCmLPpJu", "p71BYIPogqBPy", "2seKKLp1n0sEeJLYTK", "PXj1J0eMONGOA", "5torEEM8QnR95Cqg11", "He1ppTVuaVSCs", "97e6IX0kayYTK", "3gTmgzy7wYJfyaGRHQ", "3nbxypT20Ulmo", "v2WuhMBzb3h5e", "ZyFCksxxD9tmLYfGJo", "j5zqQSABpeHCU8EpO3", "TNTyFBi6r9R6g", "7FvaPVEKXuB3O", "Wci9oW5MbO6PK", "qvkaMMMqyGFjO", "4oHyOIBIt57ag", "lkceXNDw4Agryfrwz8", "SJhhRPXjaTGe5MKz5N", "4YZNYcTybcYTnROykG", "RcRYrpC1pBvIB0icDm", "9LZTcawH3mc8V2oUqk", "pVGsAWjzvXcZW4ZBTE", "2SYqgPxMm2kbVe3y02", "tvU9iTev6uBIQ", "H62NM1ab7wzMXURdoi", "l1BgQOc1Jj7L86BA4", "gH1jGsCnQBiFHWMFzh", "11fHSR7hmRLbkA", "ckr4W2ppxPBeIF8dx4", "vMSXa7KFGx49aeeXhe", "ZCZ7FHlu3sPek3h0zP", "9jwuxt5bXKadi", "6705G9I9sUcNCaJF10"]
          , fe = ["static1", "static2", "static3", "static4", "static5", "static6", "static7", "static8"]
          , Oe = function(e) {
            return function(t) {
                var n = t.setSelf
                  , i = t.onSet
                  , c = localStorage.getItem(e);
                null != c && n(JSON.parse(c)),
                i((function(t) {
                    t instanceof s.a ? localStorage.removeItem(e) : localStorage.setItem(e, JSON.stringify(t))
                }
                ))
            }
        }
          , he = Object(s.c)({
            key: "playerShown",
            default: !1
        })
          , pe = Object(s.c)({
            key: "playerVolume",
            default: .7,
            effects_UNSTABLE: [Oe("playerVolume")]
        })
          , ve = Object(s.c)({
            key: "isBuffering",
            default: null
        })
          , xe = Object(s.c)({
            key: "currentStationId",
            default: g[0].id,
            effects_UNSTABLE: [Oe("currentStationId")]
        })
          , ge = Object(s.d)({
            key: "currentStation",
            get: function(e) {
                var t = (0,
                e.get)(xe)
                  , n = g.find((function(e) {
                    return e.id === t
                }
                ));
                return n || (localStorage.removeItem("currentStationId"),
                g[0])
            }
        })
          , ye = Object(s.d)({
            key: "currentStationIndex",
            get: function(e) {
                var t = (0,
                e.get)(ge);
                return g.findIndex((function(e) {
                    return e === t
                }
                ))
            }
        })
          , Ie = Object(s.c)({
            key: "pomodoroShown",
            default: !1
        })
          , we = Object(s.c)({
            key: "aboutShown",
            default: !1
        })
          , Ne = Object(s.c)({
            key: "stationsSelectorOpen",
            default: !1
        })
          , Me = Object(s.c)({
            key: "lowEnergyMode",
            default: !1,
            effects_UNSTABLE: [Oe("lowEnergyMode")]
        })
          , Ze = Object(s.c)({
            key: "embedShown",
            default: !1,
            effects_UNSTABLE: [Oe("embedShown")]
        })
          , ze = Object(s.c)({
            key: "currentGifIndex",
            default: 0,
            effects_UNSTABLE: [Oe("currentGifIndex")]
        })
          , Ae = Object(s.c)({
            key: "nextGifIndex",
            default: ae(me)
        })
          , De = Object(s.c)({
            key: "staticShown",
            default: !1
        })
          , Ge = Object(s.c)({
            key: "staticIndex",
            default: ae(fe)
        });
        function Te() {
            return "ontouchend"in document
        }
        function Pe(e) {
            var t = function(e, t) {
                var n = function(e) {
                    var t = window.localStorage.getItem(e);
                    if (t)
                        return JSON.parse(t)
                }
                  , i = Object(c.useState)((function() {
                    if ("undefined" !== typeof window)
                        return n(e) || t
                }
                ))
                  , a = Object(l.a)(i, 2)
                  , o = a[0]
                  , r = a[1];
                Object(c.useEffect)((function() {
                    try {
                        r(n(e))
                    } catch (t) {
                        console.log("error reading local storage", t)
                    }
                }
                ), [e]);
                var s = Object(c.useCallback)((function(t) {
                    try {
                        var n = t instanceof Function ? t(o) : t;
                        r(n),
                        window.localStorage.setItem(e, JSON.stringify(n))
                    } catch (i) {
                        console.log("error writing local storage", i)
                    }
                }
                ), [o])
                  , u = Object(c.useCallback)((function() {
                    window.localStorage.removeItem(e),
                    r(t)
                }
                ), []);
                return [o, s, u]
            }("aboutShown", !1)
              , n = Object(l.a)(t, 2)
              , i = n[0]
              , a = n[1]
              , o = Te()
              , r = Object(s.g)(we);
            Object(c.useEffect)((function() {
                var t = window.innerWidth;
                if (!(o || t < 600) && !i && e) {
                    var n = setTimeout((function() {
                        r(!0),
                        a(!0)
                    }
                    ), 1e3);
                    return function() {
                        return clearTimeout(n)
                    }
                }
            }
            ), [e])
        }
        var He = n(34)
          , Se = n.n(He);
        function Le() {
            var e = Object(s.g)(xe);
            Object(c.useEffect)((function() {
                var t = function() {
                    var e = Se.a.parse(location.search).station;
                    return e && g.find((function(t) {
                        return t.id === e
                    }
                    ))
                }();
                t && e(t.id)
            }
            ), [])
        }
        function Ee() {
            // var e = Object(s.f)(ge);
            // return function() {
            //     e && (y.track("Tweet Station", {
            //         stationName: e.name,
            //         stationId: e.id
            //     }),
            //     window.open(function(e) {
            //         var t = e.text
            //           , n = e.url;
            //         return "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(t), "&url=").concat(encodeURIComponent(n))
            //     }({
            //         text: "Chilling with \ud83c\udfa7 ".concat(e.name),
            //         url: "https://lofi.cafe/?station=".concat(e.id)
            //     })))
            // }
        }
        var Ye = n.p + "static/media/boot.47b60944.mp3"
          , ke = n.p + "static/media/static.c9617a7e.mp3"
          , Re = n.p + "static/media/endWork.05b9f5ea.mp3"
          , We = n.p + "static/media/endPause.d5eb5059.mp3"
          , Be = {
            static: new Audio(ke),
            boot: new Audio(Ye),
            endWork: new Audio(Re),
            endPause: new Audio(We)
        }
          , Fe = n(35)
          , Xe = new (n.n(Fe).a)({
            en: {
                listeningNow: "listening now",
                tapToStart: "tap to start",
                pressToStart: "press any key to start",
                changeStation: "chuy???n b??i",
                playPause: "play/pause",
                changeGif: "thay ?????i n???n",
                showVideo: "thay ?????i khung h??nh",
                lowPowerMode: "l??m nhi???u",
                closeThis: "tho??t to??n m??n h??nh",
                sayHi: "Ho???c b???m v??o ????y ????? g???i l???i ch??o!",
                updates: "Nh???n th??ng b??o & updates",
                arrows: "tr??i ph???i <  >",
                spacebar: "spacebar"
            },
            ja: {
                tapToStart: "\u30bf\u30c3\u30d7\u3057\u3066\u30b9\u30bf\u30fc\u30c8\u3057\u3066\u304f\u3060\u3055\u3044",
                pressToStart: "\u30ad\u30fc\u3092\u62bc\u3057\u3066\u30b9\u30bf\u30fc\u30c8\u3057\u3066\u304f\u3060\u3055\u3044"
            },
            it: {
                listeningNow: "in ascolto ora",
                pressToStart: "premi un tasto per cominciare",
                changeStation: "cambia stazione",
                playPause: "play/pausa",
                tweetThisStation: "twitta questa stazione",
                changeGif: "cambia gif",
                showVideo: "mostra video originale",
                lowPowerMode: "modalit\xe0 low-power",
                closeThis: "chiudi",
                sayHi: "Clicca qui per scriverci!",
                updates: "Nuove stazioni & update",
                arrows: "frecce",
                spacebar: "spazio"
            },
            es: {
                listeningNow: "escuchando ahora",
                pressToStart: "presionar una cualquier tecla para empezar",
                changeStation: "cambiar de estaci\xf2n",
                playPause: "play/pause",
                tweetThisStation: "tuitear esta estaci\xf2n",
                changeGif: "cambiar el gif",
                showVideo: "mostrar video original",
                lowPowerMode: "modo low-power",
                closeThis: "cerrar",
                sayHi: "Hacer clic aqui para contactarnos",
                updates: "Recibir actualizaciones",
                arrows: "flechas",
                spacebar: "barra espaciadora"
            }
        });
        var Ve = n(17);
        function Qe(e) {
            var t = e.show
              , n = e.children
              , c = Object(Ve.a)(e, ["show", "children"]);
            return Object(i.jsx)(K.a, {
                children: t && Object(i.jsx)(q.a.div, Object(m.a)(Object(m.a)({
                    initial: {
                        y: -20,
                        opacity: 0
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: -20,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        duration: .25,
                        bounce: .05
                    },
                    className: "about-container"
                }, c), {}, {
                    children: n
                }))
            })
        }
        var Ce = function() {
            return Object(i.jsxs)("span", {
                style: {
                    display: "flex",
                    marginBottom: "10px"
                },
                children: [Object(i.jsx)(Ue, {
                    name: "WinDinggg2k6",
                    username: "WinDinggg2k6",
                    image: "https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/277725819_3202509600021793_2534262697197811245_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0JbjOz1xEFcAX9GvgXc&_nc_ht=scontent.fhan5-9.fna&oh=00_AT8T1HgfLD5Vvah7cXuKIrLU516VDQb-sQBHYydCGjw4Vg&oe=62D66825"
                })]
            })
        }
          , Ue = function(e) {
            var t = e.name
              , n = e.username
              , c = e.image;
            return Object(i.jsxs)("a", {
                href: "https://facebook.com/" + n,
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    marginLeft: "16px"
                },
                className: "team-member pointer",
                children: [Object(i.jsx)("img", {
                    style: {
                        width: "80px",
                        height: "80px",
                        marginBottom: "3px"
                    },
                    src: c,
                    alt: t,
                    className: "green-box-small"
                }), Object(i.jsxs)("span", {
                    style: {
                        display: "block",
                        textDecoration: "none",
                        fontSize: "20px"
                    },
                    children: ["@", n]
                })]
            })
        }
          , Je = function() {
            return Object(i.jsxs)("form", {
                action: "https://buttondown.email/api/emails/embed-subscribe/lofi",
                method: "post",
                target: "popupwindow",
                onSubmit: "window.open('https://buttondown.email/lofi', 'popupwindow')",
                className: "embeddable-buttondown-form",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    marginBottom: "4px"
                },
                children: [Object(i.jsxs)("span", {
                    style: {
                        display: "block",
                        marginBottom: "6px"
                    },
                    children: [Object(i.jsx)(V, {
                        name: "mail",
                        style: {
                            position: "relative",
                            bottom: "-3px"
                        }
                    }), " ", Xe.updates]
                }), Object(i.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "center"
                    },
                    children: [Object(i.jsx)("input", {
                        type: "email",
                        className: "green-box-small",
                        placeholder: "your@amazing.email",
                        name: "email",
                        id: "bd-email",
                        style: {
                            width: "188px"
                        }
                    }), Object(i.jsx)("input", {
                        type: "hidden",
                        value: "1",
                        name: "embed"
                    }), Object(i.jsx)("button", {
                        text: "Subscribe",
                        type: "submit",
                        value: "Subscribe",
                        style: {
                            flex: 0
                        },
                        children: Object(i.jsx)(V, {
                            name: "checkmark",
                            style: {
                                marginLeft: "5px"
                            }
                        })
                    })]
                })]
            })
        }
          , Ke = function() {
            var e = Object(s.f)(we);
            return Object(i.jsxs)(Qe, {
                show: e,
                className: "about-container",
                children: [Object(i.jsx)(Ce, {}), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: Xe.arrows
                    }), " ", Xe.changeStation]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "16px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: Xe.spacebar
                    }), " ", Xe.playPause]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "G"
                    }), " ", Xe.changeGif]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "12px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "V"
                    }), " ", Xe.showVideo]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "4px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "L"
                    }), " ", Xe.lowPowerMode]
                }), Object(i.jsxs)("span", {
                    style: {
                        marginBottom: "12px"
                    },
                    children: [Object(i.jsx)("span", {
                        className: "red",
                        children: "ESC"
                    }), " ", Xe.closeThis]
                }), Object(i.jsx)(Je, {}), Object(i.jsx)("a", {
                    href: "mailto:hey@lofi.cafe",
                    children: Object(i.jsx)(J, {
                        text: Xe.sayHi
                    })
                })]
            })
        };
        var qe = function(e) {
            var t = e.src
              , n = e.zIndex
              , c = void 0 === n ? 0 : n
              , a = e.show;
            return void 0 === a || a ? Object(i.jsx)("img", {
                style: {
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    top: "0",
                    left: "0",
                    objectFit: "cover",
                    zIndex: c
                },
                src: t,
                alt: ""
            }) : null
        };
        function _e() {
            var e = Object(s.f)(ze)
              , t = Object(s.f)(De)
              , n = Object(s.f)(Ge)
              , c = Object(s.f)(Ae);
            return Object(i.jsxs)(i.Fragment, {
                children: [Object(i.jsx)(qe, {
                    src: _(fe[n]),
                    show: t,
                    zIndex: 1
                }), Object(i.jsx)(qe, {
                    src: _(me[e])
                }), Object(i.jsx)($e, {
                    src: _(fe[n])
                }), Object(i.jsx)($e, {
                    src: _(me[c])
                })]
            })
        }
        var $e = function(e) {
            var t = e.src;
            return Object(i.jsx)("img", {
                src: t,
                alt: "preload",
                style: {
                    position: "absolute",
                    top: "100%",
                    left: "100%"
                }
            })
        };
        function et(e) {
            var t = e.isPlaying
              , n = e.setIsPlaying
              , a = Object(c.useState)(!1)
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , u = o[1];
            Object(c.useEffect)((function() {
                if (r) {
                    var e = setTimeout((function() {
                        u(!1)
                    }
                    ), 1e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [r]);
            var b = Object(s.f)(we)
              , d = Object(s.f)(Ie)
              , j = Object(s.f)(Ne);
            return b || d || j ? null : Object(i.jsx)("div", {
                style: {
                    position: "absolute",
                    top: "25%",
                    right: "25%",
                    bottom: "25%",
                    left: "25%",
                    cursor: "pointer",
                    zIndex: 99,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                onMouseEnter: function() {
                    return u(!0)
                },
                onMouseLeave: function() {
                    return u(!1)
                },
                onClick: function() {
                    n(!t)
                },
                children: Object(i.jsx)(V, {
                    name: t ? "pause" : "play",
                    style: {
                        transform: "scale(".concat(r ? .98 : .3, ")"),
                        opacity: r ? 1 : 0,
                        transition: "0.1s"
                    }
                })
            })
        }
        var tt = 1500;
        var nt = function() {
            var e = Object(s.f)(Ie)
              , t = Object(c.useState)(tt)
              , n = Object(l.a)(t, 2)
              , a = n[0]
              , o = n[1]
              , r = Object(c.useState)(!1)
              , u = Object(l.a)(r, 2)
              , b = u[0]
              , d = u[1]
              , j = Object(c.useState)(!1)
              , m = Object(l.a)(j, 2)
              , f = m[0]
              , O = m[1]
              , h = Object(c.useRef)(4)
              , p = Math.floor(a / 60).toString()
              , v = (a - 60 * p).toString()
              , x = !0 === f ? "blue" : !0 === b ? "red" : void 0;
            function g() {
                b || y.track("Start Pomodoro"),
                d(!b)
            }
            return Object(c.useEffect)((function() {
                var e;
                return b ? e = setInterval((function() {
                    o((function(e) {
                        return e - 1
                    }
                    ))
                }
                ), 1e3) : clearInterval(e),
                function() {
                    return clearInterval(e)
                }
            }
            ), [b]),
            Object(c.useEffect)((function() {
                0 === a && (d(!1),
                f ? (o(tt),
                O(!1),
                Be.endPause.play()) : (O(!0),
                h.current++,
                h.current % 4 === 0 ? (o(900),
                Be.endWork.play()) : (o(300),
                Be.endWork.play())))
            }
            ), [a, f]),
            Object(i.jsxs)(Qe, {
                show: e,
                style: {
                    textAlign: "right",
                    marginTop: 15
                },
                className: "vertical",
                children: [Object(i.jsxs)("span", {
                    className: x,
                    children: [2 === p.length ? p : "0" + p, ":", 2 === v.length ? v : "0" + v]
                }), b || a === tt || 300 === a || 900 === a ? Object(i.jsx)(J, {
                    text: b ? "Pause" : "Start",
                    onClick: g
                }) : Object(i.jsxs)("div", {
                    style: {
                        display: "flex"
                    },
                    children: [Object(i.jsx)(J, {
                        text: "Continue",
                        onClick: g,
                        style: {
                            marginRight: "8px"
                        }
                    }), " ", Object(i.jsx)(J, {
                        text: "Stop",
                        onClick: function() {
                            d(!1),
                            o(tt)
                        }
                    })]
                }), (!f || f && !b) && Object(i.jsx)(J, {
                    text: "+5:00",
                    onClick: function() {
                        o((function(e) {
                            return e + 300
                        }
                        )),
                        b || (O(!1),
                        d(!0),
                        Be.endWork.play())
                    }
                })]
            })
        }
          , it = function(e) {
            var t = e.blinking
              , n = e.style
              , a = Object(c.useState)("\u2588")
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , s = o[1];
            return Object(c.useEffect)((function() {
                t ? setTimeout((function() {
                    "" === r && s("\u2588"),
                    "\u2588" === r && s("")
                }
                ), 600) : s("\u2588")
            }
            ), [t, r]),
            Object(i.jsx)("span", {
                style: Object(m.a)({
                    marginLeft: "4px",
                    fontSize: "100%"
                }, n),
                children: r
            })
        }
          , ct = function(e) {
            var t = e.children
              , n = e.delay
              , a = void 0 === n ? 0 : n
              , o = e.show
              , r = void 0 === o || o
              , s = e.onFinished
              , u = e.style
              , b = e.className
              , d = Object(c.useState)("")
              , j = Object(l.a)(d, 2)
              , m = j[0]
              , f = j[1]
              , O = Object(c.useRef)(0)
              , h = t.length;
            return Object(c.useEffect)((function() {
                if (r) {
                    var e = setTimeout((function() {
                        var e = setInterval((function() {
                            return O.current++,
                            f(t.toString().slice(0, O.current)),
                            O.current > h - 1 && (clearInterval(e),
                            s && s()),
                            function() {
                                return clearInterval(e)
                            }
                        }
                        ), 40)
                    }
                    ), a);
                    return function() {
                        return clearTimeout(e)
                    }
                }
            }
            ), [t, a, h, s, r, m]),
            Object(i.jsx)("span", {
                style: u,
                className: b,
                children: m
            })
        }
          , at = Te();
        function ot() {
            var e = Object(c.useState)(!1)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , o = at ? Xe.tapToStart : Xe.pressToStart;
            return Object(i.jsxs)("button", {
                style: oe,
                children: [Object(i.jsx)(ct, {
                    delay: 1500,
                    onFinished: function() {
                        return a(!0)
                    },
                    children: o
                }), Object(i.jsx)(it, {
                    blinking: n
                })]
            })
        }
        function rt() {
            y.track("Share on Facebook"),
            window.open("https://www.facebook.com/")
        }
        var st = Te();
        function lt(e) {
            var t = e.fullscreen
              , n = e.fullscreenAvailable
              , c = Object(s.e)(Ie)
              , a = Object(l.a)(c, 2)
              , o = a[0]
              , r = a[1]
              , u = Object(s.e)(we)
              , b = Object(l.a)(u, 2)
              , d = b[0]
              , j = b[1]
              , m = Ee();
              return Object(i.jsxs)("div", {
                id: "horizontal",
                children: [n && Object(i.jsx)(J, {
                    className: "hide-small-screen",
                    tooltip: "Fullscreen",
                    icon: t.active ? "fullscreenExit" : "fullscreenEnter",
                    onClick: function() {
                        return t.active ? t.exit() : t.enter()
                    },
                    style: {
                        marginRight: "14px"
                    }
                }), !st && Object(i.jsx)(J, {
                    tooltip: "Facebook",
                    icon: "facebook",
                    onClick: rt,
                    style: {
                        marginRight: "14px"
                    }
                }), Object(i.jsx)(J, {
                    tooltip: "H???n gi???",
                    icon: "timer",
                    onClick: function() {
                        o || y.track("Open Pomodoro"),
                        r(!o),
                        j(!1)
                    },
                    style: {
                        marginRight: "14px"
                    }
                }), Object(i.jsx)(J, {
                    tooltip: "About",
                    icon: "heart",
                    onClick: function() {
                        d || y.track("Open About"),
                        j(!d),
                        r(!1)
                    }
                })]
            })
        }
        var ut = n(10)
          , bt = n.n(ut)
          , dt = n(24)
          , jt = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []
              , n = Object(c.useState)(null)
              , i = Object(l.a)(n, 2)
              , a = i[0]
              , o = i[1]
              , r = Object(c.useState)(null)
              , s = Object(l.a)(r, 2)
              , u = s[0]
              , b = s[1];
            return Object(c.useEffect)((function() {
                (function() {
                    var t = Object(dt.a)(bt.a.mark((function t() {
                        var n, i;
                        return bt.a.wrap((function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0,
                                    t.next = 3,
                                    fetch(e);
                                case 3:
                                    return n = t.sent,
                                    t.next = 6,
                                    n.json();
                                case 6:
                                    i = t.sent,
                                    o(i),
                                    t.next = 13;
                                    break;
                                case 10:
                                    t.prev = 10,
                                    t.t0 = t.catch(0),
                                    b(t.t0);
                                case 13:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, null, [[0, 10]])
                    }
                    )));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }
                )()()
            }
            ), t),
            {
                response: a,
                error: u
            }
        }
          , mt = function(e) {
            var t = e.blinking
              , n = Object(Ve.a)(e, ["blinking"])
              , a = Object(c.useState)("\u2022")
              , o = Object(l.a)(a, 2)
              , r = o[0]
              , s = o[1];
            return Object(c.useEffect)((function() {
                t ? setTimeout((function() {
                    " " === r && s("\u2022"),
                    "\u2022" === r && s(" ")
                }
                ), 600) : s("\u2022")
            }
            ), [t, r]),
            Object(i.jsx)("span", Object(m.a)(Object(m.a)({}, n), {}, {
                children: r
            }))
        }
          , ft = function() {
            var e, t = Object(c.useState)(!1), n = Object(l.a)(t, 2), a = n[0], o = n[1], r = Object(c.useState)(0), s = Object(l.a)(r, 2), u = s[0], d = s[1];
            b("focus", (function() {
                d(u + 1)
            }
            ));
            var j = jt("https://mailbrew-functions.vercel.app/lofi-cafe-visitors", [u])
              , m = null !== (e = null === j || void 0 === j ? void 0 : j.response) && void 0 !== e ? e : 0
              , f = m && m.toLocaleString("en")
              , O = Object(c.useMemo)((function() {
                return Xe.listeningNow + " " + f.toString()
            }
            ), [f]);
            return !f || (null === j || void 0 === j ? void 0 : j.response) < 3 ? null : Object(i.jsxs)("span", {
                className: "red",
                id: "visitors-counter",
                children: [Object(i.jsx)(ct, {
                    delay: 1e3,
                    className: "red",
                    onFinished: function() {
                        return o(!0)
                    },
                    children: O
                }), a && Object(i.jsx)(mt, {
                    style: {
                        display: "inline-block",
                        width: "10px",
                        marginLeft: "4px"
                    },
                    blinking: !0,
                    className: "red"
                })]
            })
        };
        var Ot = function() {
            var e = Object(s.e)(he)
              , t = Object(l.a)(e, 2)
              , n = t[0]
              , a = t[1]
              , o = Object(s.e)(Me)
              , r = Object(l.a)(o, 2)
              , b = r[0]
              , j = r[1]
              , m = Object(c.useState)(!1)
              , f = Object(l.a)(m, 2)
              , O = f[0]
              , h = f[1]
              , p = Object(s.g)(Ie)
              , v = Object(s.g)(we)
              , x = function() {
                var e = Object(s.g)(De)
                  , t = Object(s.e)(Ge)
                  , n = Object(l.a)(t, 2)
                  , i = n[0]
                  , c = n[1];
                return function(t) {
                    e(!0),
                    setTimeout((function() {
                        e(!1);
                        var t = ae(fe, i);
                        c(t)
                    }
                    ), t)
                }
            }()
              , g = function() {
                var e = Object(s.g)(ze)
                  , t = Object(s.e)(Ae)
                  , n = Object(l.a)(t, 2)
                  , i = n[0]
                  , c = n[1];
                return function() {
                    e(i);
                    var t = ae(me, i);
                    c(t)
                }
            }()
              , I = Ee();
            Pe(O),
            Le();
            var w = "ja" === Xe.getLanguage()
              , N = Object(u.b)()
              , M = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
            function Z() {
                n || (a(!0),
                h(!0))
            }
            return d([["Escape", function() {
                v(!1),
                p(!1)
            }
            ], ["t", I], ["l", function() {
                return j(!b)
            }
            ], ["g", g], ["any", Z]]),
            Object(i.jsx)(u.a, {
                handle: N,
                children: Object(i.jsxs)("div", {
                    id: "container",
                    className: [b ? "low-energy" : "", n ? "" : "pointer", w ? "ja" : ""].join(" ").trim(),
                    onClick: Z,
                    children: [n && Object(i.jsx)(et, {
                        isPlaying: O,
                        setIsPlaying: h
                    }), Object(i.jsx)(_e, {}), Object(i.jsx)("div", {
                        id: "crt-lines"
                    }), Object(i.jsx)("div", {
                        id: "darken"
                    }), Object(i.jsx)("div", {
                        id: "vignette"
                    }), Object(i.jsxs)("div", {
                        id: "top-ui",
                        children: [Object(i.jsx)("div", {
                            children: Object(i.jsx)(ft, {})
                        }), Object(i.jsxs)("div", {
                            className: "vertical",
                            children: [n && Object(i.jsx)(lt, {
                                fullscreen: N,
                                fullscreenAvailable: M
                            }), Object(i.jsx)(Ke, {}), Object(i.jsx)(nt, {})]
                        })]
                    }), !n && Object(i.jsx)(ot, {}), Object(i.jsx)(je, {
                        isPlaying: O,
                        setIsPlaying: h,
                        onStationChanged: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            y.track("Change Station"),
                            x(300),
                            e && Be.static.play(),
                            g()
                        }
                    })]
                })
            })
        };
        var ht = function() {
            return Object(i.jsx)(s.b, {
                children: Object(i.jsx)(Ot, {})
            })
        }
          , pt = function(e) {
            e && e instanceof Function && n.e(3).then(n.bind(null, 89)).then((function(t) {
                var n = t.getCLS
                  , i = t.getFID
                  , c = t.getFCP
                  , a = t.getLCP
                  , o = t.getTTFB;
                n(e),
                i(e),
                c(e),
                a(e),
                o(e)
            }
            ))
        };
        r.a.render(Object(i.jsx)(a.a.StrictMode, {
            children: Object(i.jsx)(ht, {})
        }), document.getElementById("root")),
        pt()
    }
}, [[82, 1, 2]]]);
//# sourceMappingURL=main.78243672.chunk.js.map

