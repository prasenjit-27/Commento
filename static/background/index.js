var e, t;
("function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, n, a, i) {
    var o =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : {},
      s = "function" == typeof o[a] && o[a],
      l = s.cache || {},
      u =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function c(e, r) {
      if (!l[e]) {
        if (!t[e]) {
          var n = "function" == typeof o[a] && o[a];
          if (!r && n) return n(e, !0);
          if (s) return s(e, !0);
          if (u && "string" == typeof e) return u(e);
          var i = Error("Cannot find module '" + e + "'");
          throw ((i.code = "MODULE_NOT_FOUND"), i);
        }
        ((f.resolve = function (r) {
          var n = t[e][1][r];
          return null != n ? n : r;
        }),
          (f.cache = {}));
        var d = (l[e] = new c.Module(e));
        t[e][0].call(d.exports, f, d, d.exports, this);
      }
      return l[e].exports;
      function f(e) {
        var t = f.resolve(e);
        return !1 === t ? {} : c(t);
      }
    }
    ((c.isParcelRequire = !0),
      (c.Module = function (e) {
        ((this.id = e), (this.bundle = c), (this.exports = {}));
      }),
      (c.modules = t),
      (c.cache = l),
      (c.parent = s),
      (c.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r;
          },
          {},
        ];
      }),
      Object.defineProperty(c, "root", {
        get: function () {
          return o[a];
        },
      }),
      (o[a] = c));
    for (var d = 0; d < r.length; d++) c(r[d]);
    if (n) {
      var f = c(n);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
          ? e(function () {
              return f;
            })
          : i && (this[i] = f);
    }
  })(
    {
      lUFBs: [
        function (e, t, r) {
          e("../../../src/background/index");
        },
        { "../../../src/background/index": "bAqpa" },
      ],
      bAqpa: [
        function (e, t, r) {
          (0, e("./icon-switcher").iconSwitcher).registerChanges();
        },
        { "./icon-switcher": "lcgrC" },
      ],
      lcgrC: [
        function (e, t, r) {
          var n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          (n.defineInteropFlag(r), n.export(r, "iconSwitcher", () => i));
          var a = e("@lib/browserly");
          let i = new (class {
            registerChanges() {
              (chrome.tabs.onCreated.addListener(this.setIcon),
                chrome.tabs.onActivated.addListener(this.setIcon),
                chrome.tabs.onUpdated.addListener(this.setIcon),
                chrome.windows.onFocusChanged.addListener(this.setIcon));
            }
            async setIcon() {
              let e = await (0, a.browserly).isLinkedInPage();
              e !== this.wasLinkedInPage &&
                ((this.wasLinkedInPage = e),
                chrome.action.setIcon({
                  path: e ? "/assets/icon.png" : "/assets/icon-inactive.png",
                }));
            }
            constructor() {
              this.wasLinkedInPage = null;
            }
          })();
        },
        {
          "@lib/browserly": "h5hEY",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      h5hEY: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.TypingVelocity = r.typing = r.browserly = void 0));
          var n = e("ca15fc818f0c6b73");
          Object.defineProperty(r, "browserly", {
            enumerable: !0,
            get: function () {
              return n.browserly;
            },
          });
          var a = e("82758152b0853bce");
          (Object.defineProperty(r, "typing", {
            enumerable: !0,
            get: function () {
              return a.typing;
            },
          }),
            Object.defineProperty(r, "TypingVelocity", {
              enumerable: !0,
              get: function () {
                return a.TypingVelocity;
              },
            }));
        },
        { ca15fc818f0c6b73: "cuEJP", "82758152b0853bce": "3js2S" },
      ],
      cuEJP: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.browserly = void 0));
          class n {
            userAgent = navigator.userAgent;
            getAppVersion() {
              let e = chrome.runtime.getManifest();
              return e?.version;
            }
            isNewerVersionExists(e, t) {
              if (!e || !t) return !1;
              let r = e.split("."),
                n = +r[0],
                a = +r[1],
                i = +r[2],
                o = t.split("."),
                s = +o[0],
                l = +o[1],
                u = +o[2];
              return n > s || (!(s > n) && (a > l || (!(l > a) && i > u)));
            }
            async tryUpdateExtension() {
              let e = await chrome.runtime.requestUpdateCheck();
              return (
                e?.status === "update_available" &&
                (chrome.runtime.reload(), !0)
              );
            }
            getCurrentOS() {
              return this.userAgent.includes("Windows")
                ? "Windows"
                : this.userAgent.includes("Mac")
                  ? "Mac"
                  : this.userAgent.includes("Linux")
                    ? "Linux"
                    : this.userAgent.includes("Android")
                      ? "Android"
                      : this.userAgent.includes("iPhone") ||
                          this.userAgent.includes("iPad") ||
                          this.userAgent.includes("iPod")
                        ? "iOS"
                        : "Unknown";
            }
            getCurrentBrowser() {
              return this.userAgent.includes("Opera")
                ? "Opera"
                : this.userAgent.includes("Chrome")
                  ? "Chrome"
                  : this.userAgent.includes("Firefox")
                    ? "Firefox"
                    : this.userAgent.includes("Safari")
                      ? "Safari"
                      : this.userAgent.includes("MSIE") ||
                          this.userAgent.includes("Trident")
                        ? "IE"
                        : this.userAgent.includes("Edge")
                          ? "Edge"
                          : "Unknown";
            }
            async isLinkedInPage() {
              let e = await this.getCurrentHost();
              return e.toLowerCase().endsWith("linkedin.com");
            }
            async getCurrentHost() {
              let e = await chrome.tabs.query({
                active: !0,
                currentWindow: !0,
              });
              if (0 === e.length || !e[0].url) return "";
              let t = new URL(e[0].url);
              return t.host;
            }
            async getCurrentTabId() {
              let e = await chrome.tabs.query({
                  active: !0,
                  currentWindow: !0,
                }),
                t = e[0].id || null;
              return t;
            }
            async refreshCurrentTab() {
              let e = await this.getCurrentTabId();
              null !== e && chrome.tabs.reload(e);
            }
            async getAllTabIds() {
              let e = await chrome.tabs.query({}),
                t = e.map((e) => e.id);
              return t;
            }
            openTab(e, t = !1) {
              return new Promise(async (r) => {
                let n = await chrome.tabs.create({ url: e, active: t }),
                  a = setTimeout(() => r(null), 1e4);
                chrome.tabs.onUpdated.addListener(function e(t, i) {
                  t === n.id &&
                    i?.status === "complete" &&
                    (clearTimeout(a),
                    chrome.tabs.onUpdated.removeListener(e),
                    r(t));
                });
              });
            }
            async contentExecution(e, t, ...r) {
              t || (t = await this.getCurrentTabId());
              let n = await chrome.scripting.executeScript({
                target: { tabId: t },
                func: e,
                args: r,
              });
              return n?.[0]?.result ?? null;
            }
          }
          r.browserly = new n();
        },
        {},
      ],
      "3js2S": [
        function (e, t, r) {
          var n, a;
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.typing = r.TypingVelocity = void 0));
          let i = e("21f0ae5ec10da83");
          (((a = n || (r.TypingVelocity = n = {})).None = "None"),
            (a.Fast = "Fast"),
            (a.Medium = "Medium"),
            (a.Slow = "Slow"));
          let o = { [n.None]: 0, [n.Fast]: 0.5, [n.Medium]: 0.7, [n.Slow]: 1 };
          r.typing = new (class {
            speedFactor = 1;
            async simulateHuman(e, t, r) {
              this.speedFactor = o[r];
              let n = Array.from(t),
                a = "";
              for (let t = 0; t < n.length; t++) {
                let r = n[t],
                  i = n[t + 1];
                (" " === r && (await this.maybeRetypeWord(e, a), (a = "")),
                  await this.maybeTypo(e, r),
                  e.focus(),
                  document.execCommand("insertText", !1, r));
                let o = this.humanDelayForChar(r, i);
                (await this.pause(o), " " !== r && (a += r));
              }
              await this.maybeRetypeWord(e, a);
            }
            humanDelayForChar(e, t) {
              let r = this.gaussianRandom(110, 35);
              return (
                /[.!?]/.test(e)
                  ? (r += this.gaussianRandom(320, 120))
                  : /[,;:]/.test(e)
                    ? (r += this.gaussianRandom(180, 70))
                    : " " === e
                      ? (r += this.gaussianRandom(90, 45))
                      : "\n" === e && (r += this.gaussianRandom(400, 150)),
                t && /[A-Z!@#$%^&*()_+{}|:"<>?~]/.test(t)
                  ? (r += this.gaussianRandom(55, 25))
                  : t && /[0-9]/.test(t) && (r += this.gaussianRandom(40, 20)),
                0.04 > Math.random() && (r += this.gaussianRandom(350, 200)),
                Math.max(30, Math.round(r))
              );
            }
            async maybeTypo(e, t) {
              /\s/.test(t) ||
                Math.random() > 0.03 ||
                (e.focus(),
                document.execCommand("insertText", !1, t),
                await this.pause(this.humanDelayForChar(t, void 0)),
                await this.pause(this.gaussianRandom(300, 120)),
                document.execCommand("delete", !1),
                await this.pause(this.gaussianRandom(120, 40)));
            }
            async maybeRetypeWord(e, t) {
              if (t.length < 3 || Math.random() > 0.02) return;
              await this.pause(this.gaussianRandom(350, 150));
              for (let e = 0; e < t.length; e++)
                (document.execCommand("delete", !1),
                  await this.pause(this.gaussianRandom(75, 20)));
              await this.pause(this.gaussianRandom(200, 80));
              let r = Array.from(t);
              for (let t = 0; t < r.length; t++)
                (await this.maybeTypo(e, r[t]),
                  e.focus(),
                  document.execCommand("insertText", !1, r[t]),
                  await this.pause(this.humanDelayForChar(r[t], r[t + 1])));
            }
            gaussianRandom(e, t) {
              let r = 0,
                n = 0;
              for (; 0 === r; ) r = Math.random();
              for (; 0 === n; ) n = Math.random();
              let a = Math.sqrt(-2 * Math.log(r)) * Math.cos(2 * Math.PI * n);
              return e + a * t;
            }
            async pause(e) {
              await i.delayHelper.delay(Math.round(e * this.speedFactor));
            }
          })();
        },
        { "21f0ae5ec10da83": "2KL0D" },
      ],
      "2KL0D": [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.urlHelper =
              r.textHelper =
              r.s =
              r.phoneHelper =
              r.numericHelper =
              r.keywordsHelper =
              r.emailHelper =
              r.delayHelper =
              r.calendarHelper =
              r.arrayHelper =
                void 0));
          var n = e("97c3503337f27849");
          Object.defineProperty(r, "arrayHelper", {
            enumerable: !0,
            get: function () {
              return n.arrayHelper;
            },
          });
          var a = e("efefec0feacabb37");
          Object.defineProperty(r, "calendarHelper", {
            enumerable: !0,
            get: function () {
              return a.calendarHelper;
            },
          });
          var i = e("fc3a286e3c6249d2");
          Object.defineProperty(r, "delayHelper", {
            enumerable: !0,
            get: function () {
              return i.delayHelper;
            },
          });
          var o = e("d3c59582d6ab774f");
          Object.defineProperty(r, "emailHelper", {
            enumerable: !0,
            get: function () {
              return o.emailHelper;
            },
          });
          var s = e("4bc70b8e019529fa");
          Object.defineProperty(r, "keywordsHelper", {
            enumerable: !0,
            get: function () {
              return s.keywordsHelper;
            },
          });
          var l = e("2de8b4305739aa29");
          Object.defineProperty(r, "numericHelper", {
            enumerable: !0,
            get: function () {
              return l.numericHelper;
            },
          });
          var u = e("7d078b2ec5adb5a");
          Object.defineProperty(r, "phoneHelper", {
            enumerable: !0,
            get: function () {
              return u.phoneHelper;
            },
          });
          var c = e("e6b75b2ff7da82c9");
          Object.defineProperty(r, "s", {
            enumerable: !0,
            get: function () {
              return c.s;
            },
          });
          var d = e("fa0dfce0ea090840");
          Object.defineProperty(r, "textHelper", {
            enumerable: !0,
            get: function () {
              return d.textHelper;
            },
          });
          var f = e("f17dd1b2c48f3653");
          Object.defineProperty(r, "urlHelper", {
            enumerable: !0,
            get: function () {
              return f.urlHelper;
            },
          });
        },
        {
          "97c3503337f27849": "le33d",
          efefec0feacabb37: "e3c58",
          fc3a286e3c6249d2: "bJEoI",
          d3c59582d6ab774f: "fARMV",
          "4bc70b8e019529fa": "9SmVq",
          "2de8b4305739aa29": "vczyN",
          "7d078b2ec5adb5a": "3b0cy",
          e6b75b2ff7da82c9: "gYJZy",
          fa0dfce0ea090840: "4OsaH",
          f17dd1b2c48f3653: "a6T9l",
        },
      ],
      le33d: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.arrayHelper = void 0),
            (r.arrayHelper = new (class {
              trim(e) {
                let t = [];
                for (let r of e) (r = r.trim()).length >= 1 && t.push(r);
                return t;
              }
              removeSingleChars(e) {
                let t = [];
                for (let r of e) (r = r.trim()).length > 1 && t.push(r);
                return t;
              }
              unique(e) {
                let t = new Set();
                for (let r of e) t.add(r);
                return Array.from(t);
              }
              shuffle(e) {
                return e
                  .map((e) => ({ value: e, sort: Math.random() }))
                  .sort((e, t) => e.sort - t.sort)
                  .map(({ value: e }) => e);
              }
              common(e) {
                if (!e?.length) return null;
                let t = new Map();
                for (let r of e)
                  if (t.has(r)) {
                    let e = t.get(r);
                    t.set(r, e + 1);
                  } else t.set(r, 0);
                let r = null,
                  n = 0;
                for (let [e, a] of t) a > n && ((n = a), (r = e));
                return r;
              }
            })()));
        },
        {},
      ],
      e3c58: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.calendarHelper = void 0),
            (r.calendarHelper = new (class {
              getMonthYear() {
                let e = new Date(),
                  t = e.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                  });
                return t;
              }
              getCurrentMonthName() {
                let e = new Date();
                return [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ][e.getMonth()];
              }
            })()));
        },
        {},
      ],
      bJEoI: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.delayHelper = void 0));
          let n = e("259248136f19505d");
          r.delayHelper = new (class {
            delay(e) {
              return new Promise((t) => {
                setTimeout(t, e);
              });
            }
            async randomDelay(e, t) {
              let r = n.numericHelper.random(e, t);
              await this.delay(r);
            }
          })();
        },
        { "259248136f19505d": "vczyN" },
      ],
      vczyN: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.numericHelper = void 0),
            (r.numericHelper = new (class {
              random(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
              }
              digitName(e) {
                switch (e) {
                  case 0:
                    return "zero";
                  case 1:
                    return "one";
                  case 2:
                    return "two";
                  case 3:
                    return "three";
                  case 4:
                    return "four";
                  case 5:
                    return "five";
                  case 6:
                    return "six";
                  case 7:
                    return "seven";
                  case 8:
                    return "eight";
                  case 9:
                    return "nine";
                  default:
                    return e.toString();
                }
              }
            })()));
        },
        {},
      ],
      fARMV: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.emailHelper = void 0),
            (r.emailHelper = new (class {
              isEmail(e) {
                return (
                  !!e &&
                  /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(e) &&
                  !/@[0-9.]+$/.test(e)
                );
              }
              extractEmails(e) {
                if (!e) return null;
                let t = new Set(),
                  r = /@[0-9.]+$/,
                  n = e.match(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/g);
                if (!n) return null;
                for (let e of n) r.test(e) || t.add(e.toLowerCase());
                return Array.from(t);
              }
            })()));
        },
        {},
      ],
      "9SmVq": [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.keywordsHelper = void 0),
            (r.keywordsHelper = new (class {
              contain(e, t) {
                if (!e) return !1;
                if (!t?.length) return !0;
                for (let r of t) {
                  let t = RegExp(`\\b${r}\\b`, "i");
                  if (t.test(e)) return !0;
                }
                return !1;
              }
              containBoth(e, t, r) {
                if (!e) return !1;
                if (!t?.length && !r?.length) return !0;
                if (!t?.length) return this.contain(e, r);
                if (!r?.length) return this.contain(e, t);
                for (let n of r) {
                  let r = RegExp(`\\b${n}\\b`, "i");
                  if (r.test(e) && this.contain(e, t)) return !0;
                }
                return !1;
              }
            })()));
        },
        {},
      ],
      "3b0cy": [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.phoneHelper = void 0),
            (r.phoneHelper = new (class {
              sanitizePhone(e) {
                if (!e) return e;
                let t = e.split("-");
                for (let r of ((e = ""), t)) e += r.trim();
                return e;
              }
            })()));
        },
        {},
      ],
      gYJZy: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.s = function (e) {
              return 1 === e ? "" : "s";
            }));
        },
        {},
      ],
      "4OsaH": [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.textHelper = void 0),
            (r.textHelper = new (class {
              minifyText(e, t) {
                if (
                  ((e = this.removeRedundantWhiteChars(e)), !t || e.length <= t)
                )
                  return e;
                for (let r = t; r < e.length; r++)
                  if (" " === e[r]) return `${e.substring(0, r)}...`;
                return `${e}...`;
              }
              removeRedundantWhiteChars(e) {
                if (!e) return e;
                let t = !1;
                for (e = e.trim(); !t; ) {
                  let r = e
                    .replaceAll("  ", " ")
                    .replaceAll("\n", " ")
                    .replaceAll("	", " ");
                  ((t = r === e), (e = r));
                }
                return e;
              }
            })()));
        },
        {},
      ],
      a6T9l: [
        function (e, t, r) {
          (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.urlHelper = void 0),
            (r.urlHelper = new (class {
              isUrl(e) {
                return (
                  !!e &&
                  /^https?:\/\/([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/.test(
                    e,
                  )
                );
              }
              removeFragmentQueryDelimiters(e) {
                return e && (e = e.trim())
                  ? ((e = r.urlHelper.removeFragment(e)),
                    (e = r.urlHelper.removeQuery(e)),
                    (e = r.urlHelper.removeDelimiters(e)))
                  : e;
              }
              addSchemaRemoveDelimiters(e) {
                return e && (e = e.trim())
                  ? ((e = r.urlHelper.addSchema(e)),
                    (e = r.urlHelper.removeDelimiters(e)))
                  : e;
              }
              addSchemaRemoveFragmentQueryDelimiters(e) {
                return e && (e = e.trim())
                  ? ((e = r.urlHelper.addSchema(e)),
                    (e = r.urlHelper.removeDelimiters(e)))
                  : e;
              }
              getSeat(e) {
                if (!e) return null;
                let t = e.match(
                    /\/(in|company|newsletters|showcase|school)\/([^/?]+)/i,
                  ),
                  r = t?.[2];
                return (r && (r = decodeURIComponent(r)), r || null);
              }
              isProfileUrl(e) {
                return (
                  !!(e = e?.trim()) &&
                  /^https:\/\/www\.linkedin\.com\/(in|company|newsletters|showcase|school)\/[^/?]+/i.test(
                    e,
                  )
                );
              }
              removeFragment(e) {
                if (!e || !(e = e.trim())) return e;
                let t = e.indexOf("#");
                return -1 === t ? e : e.substring(0, t);
              }
              removeQuery(e) {
                if (!e || !(e = e.trim())) return e;
                let t = e.indexOf("?");
                return -1 === t ? e : e.substring(0, t);
              }
              removeDelimiters(e) {
                return e &&
                  (e = e.trim()) &&
                  (e.endsWith("/") || e.endsWith("?") || e.endsWith("#"))
                  ? e.replace(/[/?#]+$/, "")
                  : e;
              }
              addSchema(e) {
                return !e ||
                  !(e = e.trim()) ||
                  e.startsWith("https://") ||
                  e.startsWith("http://")
                  ? e
                  : "https://" + e;
              }
            })()));
        },
        {},
      ],
      hbR2Q: [
        function (e, t, r) {
          ((r.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (r.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.exportAll = function (e, t) {
              return (
                Object.keys(e).forEach(function (r) {
                  "default" === r ||
                    "__esModule" === r ||
                    t.hasOwnProperty(r) ||
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }),
                t
              );
            }),
            (r.export = function (e, t, r) {
              Object.defineProperty(e, t, { enumerable: !0, get: r });
            }));
        },
        {},
      ],
    },
    ["lUFBs"],
    "lUFBs",
    "parcelRequireb68c",
  ),
  (globalThis.define = t));
