(self.webpackChunkonboarding = self.webpackChunkonboarding || []).push([
  [566, 286],
  {
    7536: (Di, jt, P) => {
      var L = P(6048),
        ee = P(9377),
        le = P(9361),
        i = P(5472),
        Re = P(3142);
      class Se extends L.qj {
        supportsDOMEvents = !0;
        static makeCurrent() {
          (0, L.ig)(new Se());
        }
        onAndCancel(E, a, d, p) {
          return (
            E.addEventListener(a, d, p),
            () => {
              E.removeEventListener(a, d, p);
            }
          );
        }
        dispatchEvent(E, a) {
          E.dispatchEvent(a);
        }
        remove(E) {
          E.remove();
        }
        createElement(E, a) {
          return (a = a || this.getDefaultDocument()).createElement(E);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(E) {
          return E.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(E) {
          return E instanceof DocumentFragment;
        }
        getGlobalEventTarget(E, a) {
          return "window" === a
            ? window
            : "document" === a
              ? E
              : "body" === a
                ? E.body
                : null;
        }
        getBaseHref(E) {
          const a = (function Ce() {
            return (
              (ie = ie || document.head.querySelector("base")),
              ie ? ie.getAttribute("href") : null
            );
          })();
          return null == a
            ? null
            : (function st(u) {
                return new URL(u, document.baseURI).pathname;
              })(a);
        }
        resetBaseElement() {
          ie = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(E) {
          return (0, ee.bS)(document.cookie, E);
        }
      }
      let ie = null,
        Be = (() => {
          class u {
            build() {
              return new XMLHttpRequest();
            }
            static ɵfac = function (d) {
              return new (d || u)();
            };
            static ɵprov = i.jDH({ token: u, factory: u.ɵfac });
          }
          return u;
        })(),
        We = (() => {
          class u extends Re.Hl {
            constructor(a) {
              super(a);
            }
            supports(a) {
              return !0;
            }
            addEventListener(a, d, p, D) {
              return (
                a.addEventListener(d, p, D),
                () => this.removeEventListener(a, d, p, D)
              );
            }
            removeEventListener(a, d, p, D) {
              return a.removeEventListener(d, p, D);
            }
            static ɵfac = function (d) {
              return new (d || u)(i.KVO(le.q));
            };
            static ɵprov = i.jDH({ token: u, factory: u.ɵfac });
          }
          return u;
        })();
      const Lt = ["alt", "control", "meta", "shift"],
        Ot = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        Ct = {
          alt: (u) => u.altKey,
          control: (u) => u.ctrlKey,
          meta: (u) => u.metaKey,
          shift: (u) => u.shiftKey,
        };
      let Kn = (() => {
        class u extends Re.Hl {
          constructor(a) {
            super(a);
          }
          supports(a) {
            return null != u.parseEventName(a);
          }
          addEventListener(a, d, p, D) {
            const V = u.parseEventName(d),
              Ue = u.eventCallback(V.fullKey, p, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                (0, L.rb)().onAndCancel(a, V.domEventName, Ue, D),
              );
          }
          static parseEventName(a) {
            const d = a.toLowerCase().split("."),
              p = d.shift();
            if (0 === d.length || ("keydown" !== p && "keyup" !== p))
              return null;
            const D = u._normalizeKey(d.pop());
            let V = "",
              Ue = d.indexOf("code");
            if (
              (Ue > -1 && (d.splice(Ue, 1), (V = "code.")),
              Lt.forEach((En) => {
                const Ys = d.indexOf(En);
                Ys > -1 && (d.splice(Ys, 1), (V += En + "."));
              }),
              (V += D),
              0 != d.length || 0 === D.length)
            )
              return null;
            const Ut = {};
            return ((Ut.domEventName = p), (Ut.fullKey = V), Ut);
          }
          static matchEventFullKeyCode(a, d) {
            let p = Ot[a.key] || a.key,
              D = "";
            return (
              d.indexOf("code.") > -1 && ((p = a.code), (D = "code.")),
              !(null == p || !p) &&
                ((p = p.toLowerCase()),
                " " === p ? (p = "space") : "." === p && (p = "dot"),
                Lt.forEach((V) => {
                  V !== p && (0, Ct[V])(a) && (D += V + ".");
                }),
                (D += p),
                D === d)
            );
          }
          static eventCallback(a, d, p) {
            return (D) => {
              u.matchEventFullKeyCode(D, a) && p.runGuarded(() => d(D));
            };
          }
          static _normalizeKey(a) {
            return "esc" === a ? "escape" : a;
          }
          static ɵfac = function (d) {
            return new (d || u)(i.KVO(le.q));
          };
          static ɵprov = i.jDH({ token: u, factory: u.ɵfac });
        }
        return u;
      })();
      function Je(u) {
        return {
          appProviders: [...vn, ...(u?.providers ?? [])],
          platformProviders: ne,
        };
      }
      const ne = [
          { provide: i.Agw, useValue: ee.Zn },
          {
            provide: i.PLl,
            useValue: function _t() {
              Se.makeCurrent();
            },
            multi: !0,
          },
          {
            provide: le.q,
            useFactory: function Ie() {
              return ((0, i.TL$)(document), document);
            },
          },
        ],
        vn = [
          { provide: i.H8p, useValue: "root" },
          {
            provide: i.zcH,
            useFactory: function Y() {
              return new i.zcH();
            },
          },
          { provide: Re.Q5, useClass: We, multi: !0, deps: [le.q] },
          { provide: Re.Q5, useClass: Kn, multi: !0, deps: [le.q] },
          Re.mE,
          Re.CI,
          Re.EU,
          { provide: i._9s, useExisting: Re.mE },
          { provide: ee.N0, useClass: Be },
          [],
        ];
      var Me = P(9870);
      const zt = [
          {
            path: "",
            loadChildren: () =>
              P.e(76)
                .then(P.bind(P, 662))
                .then((u) => u.remoteRoutes),
          },
        ],
        Et = {
          production: !1,
          api_Url: window.env.api_Url ?? "default",
          keycloakConfig_url: window.env.keycloakConfig_url,
          keycloakConfig_realm: window.env.keycloakConfig_realm,
          keycloakConfig_clientId: window.env.keycloakConfig_clientId,
        };
      var At = P(7643);
      let K = (() => {
        class u {
          constructor() {
            this.http = (0, i.WQX)(At.Qq);
          }
          getTranslation(a) {
            return this.http.get(`assets/i18n/${a}.json?v=${Date.now()}`);
          }
          static {
            this.ɵfac = function (d) {
              return new (d || u)();
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: u,
              factory: u.ɵfac,
              providedIn: "root",
            });
          }
        }
        return u;
      })();
      var ce = P(6801),
        re = P(8810),
        se = P(9437),
        $ = P(7858);
      const Ge = new Map([
        [
          "400",
          [
            "documents",
            "credentials",
            "keypairs/import",
            "/participants/automaticRenewal",
          ],
        ],
        ["404", ["/certificate", "/credential-validity", "/credentials"]],
        ["409", ["/onboarding-request"]],
        ["500", ["/participants/automaticRenewal"]],
        ["503", ["/agent"]],
        ["404", ["/keypairs", "/automaticRenewal"]],
      ]);
      var He = P(8018),
        ln = P(6442),
        Ti = P(5903),
        ut = P(3689),
        Si = P(9427),
        $e = P(8387),
        Xt = P(7071),
        Mt = P(4540),
        Vt = P(674);
      const Bn = {
        providers: [
          (0, i.oKB)(
            $.Ui.forRoot(),
            He.h.forRoot($.D8Z),
            ln.fg.forRoot(() => (0, Mt.GZ)(Et)),
            Ti.fg.forRoot(() => (0, Mt.Ij)(Et)),
            ut.fg.forRoot(() => (0, Mt.nY)(Et)),
            Si.fg.forRoot(() => (0, Mt.y8)(Et)),
            $e.fg.forRoot(() => (0, Mt.KV)(Et)),
            Vt.fg.forRoot(() => (0, Mt.w4)(Et)),
          ),
          Xt.FI,
          (0, Me.lh)(
            zt,
            (0, Me.lG)(),
            (0, Me.Ii)({ onSameUrlNavigation: "reload" }),
          ),
          (0, Mt.z4)(K, ["en", "es"], "en"),
          (0, Mt.E3)([
            (u, E) => {
              const a = (0, i.WQX)($.GZ5),
                d = (0, i.WQX)(ce.Ix);
              return E(u).pipe(
                (0, se.W)((p) => {
                  const D = [
                    400, 401, 403, 404, 500, 501, 502, 503, 504, 505, 508, 511,
                  ];
                  if (p instanceof At.yz) {
                    if (
                      (function Wt(u, E) {
                        const a = Ge.get(u.toString());
                        return !!a && a.some((d) => E.includes(d));
                      })(p.status, u.url)
                    )
                      return (0, re.$)(() => p);
                    D.includes(p.status) || (p.status >= 500 && p.status < 600)
                      ? d.navigate(["/error"], {
                          state: {
                            error: {
                              status: p.status,
                              statusText: p.statusText,
                              name: p.name,
                              message: p.message,
                              url: p.url,
                              error: p.error,
                            },
                          },
                        })
                      : a.growlError(p.message);
                  }
                  return (0, re.$)(() => p);
                }),
              );
            },
          ]),
          (0, Mt.Kn)(Et),
          {
            provide: $.Vlf,
            useValue: {
              appConfig: {
                global: {
                  appTitle: "CSDR-app",
                  i18n: {
                    i18nService: {
                      defaultLanguage: "en",
                      languages: [
                        { code: "en", label: "English" },
                        { code: "fr", label: "Fran\xe7ais" },
                      ],
                    },
                    i18nLoader: {
                      i18nFolders: ["i18n-eui", "i18n", "i18n-ecl"],
                    },
                  },
                  user: {
                    defaultUserPreferences: { dashboard: {}, lang: "en" },
                  },
                },
              },
              environment: Et,
            },
          },
        ],
      };
      var Xe = P(2881),
        vi = P(8147),
        Jn = P(5254),
        wi = P(453),
        yn = P(1413),
        te = P(8359),
        Vn = P(6977),
        fn = P(9172),
        Ai = P(3726),
        ki = P(5964),
        It = P(152),
        Tn = P(3350),
        kt = P(6139),
        tt = P(1652),
        un = P(4236);
      const nn = ["*"];
      function Xo(u, E) {
        if (
          (1 & u && (i.j41(0, "div", 0), i.nrm(1, "img", 2), i.k0s()), 2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(), i.Y8G("src", a.imageUrl, i.B4B));
        }
      }
      function oo(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 1);
      }
      const $t = ["euiAvatar", ""],
        Pi = [
          [["eui-avatar-icon"]],
          [["eui-avatar-text"]],
          [["eui-avatar-image"]],
          [["eui-avatar-badge"]],
          [["eui-avatar-content"]],
        ],
        Ir = [
          "eui-avatar-icon",
          "eui-avatar-text",
          "eui-avatar-image",
          "eui-avatar-badge",
          "eui-avatar-content",
        ];
      function De(u, E) {
        1 & u && i.nrm(0, "div", 0);
      }
      let Io = (() => {
          class u {
            constructor() {
              ((this.isPositionBottom = !1), (this.position = "top"));
            }
            get cssClasses() {
              return [
                "eui-avatar-badge",
                `eui-avatar-badge--${this.position}`,
                this.isPositionBottom || "bottom" === this.position
                  ? "eui-avatar-badge--bottom"
                  : "eui-avatar-badge--top",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-avatar-badge"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  isPositionBottom: [
                    2,
                    "isPositionBottom",
                    "isPositionBottom",
                    i.L39,
                  ],
                  position: "position",
                },
                ngContentSelectors: nn,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                styles: [
                  ".eui-19   .eui-avatar   [_nghost-%COMP%]{position:absolute}.eui-19   .eui-avatar   [_nghost-%COMP%], .eui-19   .eui-avatar--size-m   [_nghost-%COMP%]{left:75%;top:65%}.eui-19   .eui-avatar--size-s   [_nghost-%COMP%]{left:70%;top:60%}.eui-19   .eui-avatar--size-xs   [_nghost-%COMP%]{left:70%;top:55%}.eui-19   .eui-avatar--size-l   [_nghost-%COMP%]{left:70%;top:70%}.eui-19   .eui-avatar--size-xl   [_nghost-%COMP%]{left:70%;top:75%}.eui-19   .eui-avatar--size-2xl   [_nghost-%COMP%]{left:70%;top:80%}",
                ],
              });
            }
          }
          return u;
        })(),
        ei = (() => {
          class u {
            constructor() {
              this.imageUrlGenerated = "assets";
            }
            get cssClasses() {
              return [
                "eui-avatar-image",
                this.imageUrl ? "" : "eui-avatar-image--default",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-avatar-image"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: { imageUrl: "imageUrl" },
                decls: 2,
                vars: 1,
                consts: [
                  [1, "eui-avatar-image-wrapper"],
                  ["icon", "person-circle:outline", "fillColor", "neutral"],
                  ["alt", "Avatar", 3, "src"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    i.DNE(0, Xo, 2, 1, "div", 0)(
                      1,
                      oo,
                      1,
                      0,
                      "eui-icon-svg",
                      1,
                    ),
                    2 & d && i.vxM(p.imageUrl ? 0 : 1));
                },
                dependencies: [tt.aV],
                styles: [
                  ".eui-19   .eui-avatar   .eui-avatar-image[_nghost-%COMP%]   .eui-avatar-image-wrapper[_ngcontent-%COMP%]{background-size:cover;height:100%;width:100%}.eui-19   .eui-avatar   .eui-avatar-image[_nghost-%COMP%]   .eui-avatar-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--eui-br-max);height:100%;width:100%}.eui-19   .eui-avatar   .eui-avatar-image[_nghost-%COMP%]     .eui-icon-svg svg{height:var(--_size);width:var(--_size)}.eui-19   .eui-avatar   .eui-avatar-image--default[_nghost-%COMP%]{display:flex;align-items:center;justify-content:center}.eui-19   .eui-avatar   .eui-avatar--no-background   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0;background-color:var(--eui-c-surface-container)}.eui-19   .eui-avatar   .eui-avatar--shape-square   [_nghost-%COMP%]   img[_ngcontent-%COMP%]{border-radius:var(--eui-br-m)}",
                ],
              });
            }
          }
          return u;
        })(),
        bn = (() => {
          class u {
            constructor() {
              this.string = "eui-avatar-text";
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-avatar-text"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.string);
                },
                ngContentSelectors: nn,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                styles: [
                  ".eui-19   .eui-avatar   .eui-avatar-text[_nghost-%COMP%]{color:var(--_color);font-weight:var(--_font-weight);font-size:var(--_font-size)}",
                ],
              });
            }
          }
          return u;
        })(),
        ge = (() => {
          class u {
            constructor() {
              ((this.e2eAttr = "eui-avatar"),
                (this.role = "status"),
                (this.ariaLabel = "avatar"),
                (this.hasShadow = !1),
                (this.isShapeSquare = !1),
                (this.isFlat = !1),
                (this.hasNoBackground = !1),
                (this.isReverse = !1),
                (this.baseStatesDirective = (0, i.WQX)(un.hX)));
            }
            get cssClasses() {
              return [
                this.baseStatesDirective.getCssClasses("eui-avatar"),
                this.isShapeSquare ? "eui-avatar--shape-square" : "",
                this.isFlat ? "eui-avatar--flat eui--basic" : "",
                this.hasNoBackground ? "eui-avatar--no-background" : "",
                this.isReverse ? "eui-avatar--reverse" : "",
                this.avatarImage ? "eui-avatar--image" : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [
                  ["div", "euiAvatar", ""],
                  ["span", "euiAvatar", ""],
                  ["eui-avatar"],
                ],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, ei, 5), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.avatarImage = V.first);
                  }
                },
                hostVars: 5,
                hostBindings: function (d, p) {
                  2 & d &&
                    (i.BMQ("data-e2e", p.e2eAttr)("role", p.role)(
                      "aria-label",
                      p.ariaLabel,
                    ),
                    i.HbH(p.cssClasses));
                },
                inputs: {
                  e2eAttr: "e2eAttr",
                  ariaLabel: [0, "aria-label", "ariaLabel"],
                  hasShadow: [2, "hasShadow", "hasShadow", i.L39],
                  isShapeSquare: [2, "isShapeSquare", "isShapeSquare", i.L39],
                  isFlat: [2, "isFlat", "isFlat", i.L39],
                  hasNoBackground: [
                    2,
                    "hasNoBackground",
                    "hasNoBackground",
                    i.L39,
                  ],
                  isReverse: [2, "isReverse", "isReverse", i.L39],
                },
                features: [
                  i.nM4([
                    {
                      directive: un.hX,
                      inputs: [
                        "euiPrimary",
                        "euiPrimary",
                        "euiSecondary",
                        "euiSecondary",
                        "euiSuccess",
                        "euiSuccess",
                        "euiInfo",
                        "euiInfo",
                        "euiWarning",
                        "euiWarning",
                        "euiDanger",
                        "euiDanger",
                        "euiAccent",
                        "euiAccent",
                        "euiVariant",
                        "euiVariant",
                        "euiSizeXS",
                        "euiSizeXS",
                        "euiSizeS",
                        "euiSizeS",
                        "euiSizeL",
                        "euiSizeL",
                        "euiSizeXL",
                        "euiSizeXL",
                        "euiSize2XL",
                        "euiSize2XL",
                        "euiSizeVariant",
                        "euiSizeVariant",
                      ],
                    },
                  ]),
                ],
                attrs: $t,
                ngContentSelectors: Ir,
                decls: 7,
                vars: 1,
                consts: [
                  [1, "eui-avatar-shadow"],
                  [1, "eui-avatar-wrapper"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(Pi),
                    i.DNE(0, De, 1, 0, "div", 0),
                    i.j41(1, "div", 1),
                    i.SdG(2),
                    i.SdG(3, 1),
                    i.SdG(4, 2),
                    i.SdG(5, 3),
                    i.k0s(),
                    i.SdG(6, 4)),
                    2 & d && i.vxM(p.hasShadow ? 0 : -1));
                },
                styles: [
                  ".eui-19.eui-t-ds2025   .eui-avatar[_nghost-%COMP%]{--_content-label-font: var(--eui-f-body-s-semi-bold);--_content-sublabel-font: var(--eui-f-body-s-regular);--_content-label-font-s: var(--eui-f-body-s-semi-bold);--_content-sublabel-font-s: var(--eui-f-microcopy-m-regular);--_content-label-font-l: var(--eui-f-body-m-semi-bold);--_content-sublabel-font-l: var(--eui-f-body-m-regular)}.eui-19   .eui-avatar[_nghost-%COMP%]{--_size: 3rem;--_icon-size: 1.5rem;--_font-size: var(--eui-f-size-xl);--_font-weight: var(--eui-f-weight-bold);--_bg-color: var(--eui-c-s-secondary-surface-light);--_color: var(--eui-c-s-secondary-on-surface-light);--_content-label-font: var(--eui-f-m-bold);--_content-sublabel-font: var(--eui-f-m);--_content-label-font-s: var(--eui-f-s-bold);--_content-sublabel-font-s: var(--eui-f-s);--_content-label-font-l: var(--eui-f-m-bold);--_content-sublabel-font-l: var(--eui-f-m)}.eui-19   .eui-avatar--primary[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-primary-surface);--_color: var(--eui-c-s-primary-surface-contrast)}.eui-19   .eui-avatar--secondary[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-secondary-surface-light);--_color: var(--eui-c-s-secondary-on-surface-light)}.eui-19   .eui-avatar--info[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-info-surface);--_color: var(--eui-c-s-info-surface-contrast)}.eui-19   .eui-avatar--success[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-success-surface);--_color: var(--eui-c-s-success-surface-contrast)}.eui-19   .eui-avatar--warning[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-warning-surface);--_color: var(--eui-c-s-warning-surface-contrast)}.eui-19   .eui-avatar--danger[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-danger-surface);--_color: var(--eui-c-s-danger-surface-contrast)}.eui-19   .eui-avatar--accent[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-accent-surface);--_color: var(--eui-c-s-accent-surface-contrast)}.eui-19   .eui-avatar--flat[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-secondary-surface-light);--_color: var(--eui-c-s-secondary-on-surface-light);--_border-color: var(--eui-c-s-secondary-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--primary[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-primary-surface-light);--_color: var(--eui-c-s-primary-on-surface-light);--_border-color: var(--eui-c-s-primary-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--secondary[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-secondary-surface-light);--_color: var(--eui-c-s-secondary-on-surface-light);--_border-color: var(--eui-c-s-secondary-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--info[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-info-surface-light);--_color: var(--eui-c-s-info-on-surface-light);--_border-color: var(--eui-c-s-info-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--success[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-success-surface-light);--_color: var(--eui-c-s-success-on-surface-light);--_border-color: var(--eui-c-s-success-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--warning[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-warning-surface-light);--_color: var(--eui-c-s-warning-on-surface-light);--_border-color: var(--eui-c-s-warning-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--danger[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-danger-surface-light);--_color: var(--eui-c-s-danger-on-surface-light);--_border-color: var(--eui-c-s-danger-border-lighter)}.eui-19   .eui-avatar--flat.eui-avatar--accent[_nghost-%COMP%]{--_bg-color: var(--eui-c-s-accent-surface-light);--_color: var(--eui-c-s-accent-on-surface-light);--_border-color: var(--eui-c-s-accent-border-light)}.eui-19   .eui-avatar--no-background[_nghost-%COMP%]{--_bg-color: transparent;--_color: var(--eui-c-s-primary)}.eui-19   .eui-avatar--no-background.eui-avatar--secondary[_nghost-%COMP%]{--_color: var(--eui-c-s-secondary)}.eui-19   .eui-avatar--no-background.eui-avatar--info[_nghost-%COMP%]{--_color: var(--eui-c-s-info)}.eui-19   .eui-avatar--no-background.eui-avatar--success[_nghost-%COMP%]{--_color: var(--eui-c-s-success)}.eui-19   .eui-avatar--no-background.eui-avatar--warning[_nghost-%COMP%]{--_color: var(--eui-c-s-warning)}.eui-19   .eui-avatar--no-background.eui-avatar--danger[_nghost-%COMP%]{--_color: var(--eui-c-s-danger)}.eui-19   .eui-avatar--no-background.eui-avatar--accent[_nghost-%COMP%]{--_color: var(--eui-c-s-accent)}.eui-19   .eui-avatar--size-xs[_nghost-%COMP%]{--_size: 1.5rem;--_font-size: var(--eui-f-size-xs);--_icon-size: var(--eui-is-xs)}.eui-19   .eui-avatar--size-s[_nghost-%COMP%]{--_size: 2.5rem;--_font-size: var(--eui-f-s);--_icon-size: var(--eui-is-s)}.eui-19   .eui-avatar--size-m[_nghost-%COMP%]{--_font-size: var(--eui-f-size-xl)}.eui-19   .eui-avatar--size-l[_nghost-%COMP%]{--_size: 4rem;--_font-size: var(--eui-f-size-2xl);--_icon-size: var(--eui-is-l)}.eui-19   .eui-avatar--size-xl[_nghost-%COMP%]{--_size: 5rem;--_font-size: var(--eui-f-size-2xl);--_icon-size: var(--eui-is-xl)}.eui-19   .eui-avatar--size-2xl[_nghost-%COMP%]{--_size: 6rem;--_font-size: var(--eui-f-size-3xl);--_icon-size: var(--eui-is-2xl)}.eui-19   .eui-avatar[_nghost-%COMP%]{display:inline-flex;position:relative;align-items:center;gap:var(--eui-s-xs)}.eui-19   .eui-avatar[_nghost-%COMP%]   .eui-avatar-wrapper[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;border-radius:var(--eui-br-max);background-color:var(--_bg-color);height:var(--_size);width:var(--_size);box-shadow:var(--eui-sh-1);position:relative}.eui-19   .eui-avatar[_nghost-%COMP%]   .eui-avatar-shadow[_ngcontent-%COMP%]{position:absolute;right:-.2rem;height:var(--_size);width:var(--_size);border:.65rem solid var(--eui-c-divider);border-radius:var(--eui-br-max)}.eui-19   .eui-avatar--shape-square[_nghost-%COMP%]   .eui-avatar-wrapper[_ngcontent-%COMP%]{border-radius:var(--eui-br-m)}.eui-19   .eui-avatar--no-background[_nghost-%COMP%]   .eui-avatar-wrapper[_ngcontent-%COMP%]{box-shadow:var(--eui-sh-none);border-radius:var(--eui-br-none)}.eui-19   .eui-avatar--flat[_nghost-%COMP%]   .eui-avatar-wrapper[_ngcontent-%COMP%]{box-shadow:var(--eui-sh-none);border:1px solid var(--_border-color)}.eui-19   .eui-avatar--reverse[_nghost-%COMP%]{flex-direction:row-reverse}.eui-19   .eui-chip   .eui-avatar--size-xs[_nghost-%COMP%]{margin-left:calc(-1 * var(--eui-s-xs))}.eui-19   .eui-chip   .eui-avatar--image[_nghost-%COMP%]   .eui-avatar-wrapper[_ngcontent-%COMP%]{display:block}",
                ],
                changeDetection: 0,
              });
            }
          }
          return u;
        })();
      var Un = P(3381);
      class Zt extends Un.L {
        _origin = "program";
        setFocusOrigin(E) {
          return ((this._origin = E), this);
        }
        setActiveItem(E) {
          (super.setActiveItem(E),
            this.activeItem && this.activeItem.focus(this._origin));
        }
      }
      var So = P(4412),
        Hn = P(6122),
        ti = P(3764);
      function ro(u, E) {
        if (
          (1 & u && (i.j41(0, "eui-avatar-text"), i.EFF(1), i.k0s()), 2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(), i.SpI(" ", a.avatarInitials(), " "));
        }
      }
      function Tr(u, E) {
        1 & u && i.nrm(0, "eui-avatar-image");
      }
      function Qo(u, E) {
        if ((1 & u && i.nrm(0, "eui-avatar-image", 11), 2 & u)) {
          const a = i.XpG(2);
          i.Y8G("imageUrl", a.avatarUrl);
        }
      }
      function Ko(u, E) {
        if (
          (1 & u &&
            i.DNE(0, Tr, 1, 0, "eui-avatar-image")(
              1,
              Qo,
              1,
              1,
              "eui-avatar-image",
              11,
            ),
          2 & u)
        ) {
          const a = i.XpG();
          (i.vxM(a.avatarUrl ? -1 : 0), i.R7$(), i.vxM(a.avatarUrl ? 1 : -1));
        }
      }
      function Qt(u, E) {
        if ((1 & u && (i.j41(0, "div", 5), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG();
          (i.R7$(), i.SpI(" ", a.userState().function, " "));
        }
      }
      function me(u, E) {
        if ((1 & u && (i.j41(0, "div", 5), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG();
          (i.R7$(), i.SpI(" ", a.userState().organisation.code, " "));
        }
      }
      function so(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 10)(1, "div"),
            i.EFF(2),
            i.k0s(),
            i.j41(3, "div", 12),
            i.EFF(4),
            i.k0s(),
            i.j41(5, "div", 12)(6, "strong"),
            i.EFF(7),
            i.k0s()()()),
          2 & u)
        ) {
          let a;
          const d = i.XpG();
          (i.R7$(2),
            i.JRh(null == (a = d.fullName()) ? null : a.impersonated),
            i.R7$(2),
            i.JRh(d.impersonateLabel),
            i.R7$(3),
            i.JRh(d.fullName().user));
        }
      }
      const ao = ["*"],
        Sr = ["dropdown"];
      function T(u, E) {
        1 & u && i.eu8(0);
      }
      function N(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-dropdown", 3, 1),
            i.bIt("isDropdownOpen", function (p) {
              i.eBV(a);
              const D = i.XpG();
              return i.Njj(D.onOpenChange(p));
            })("expand", function (p) {
              i.eBV(a);
              const D = i.XpG();
              return i.Njj(D.onDropdownExpand(p));
            }),
            i.DNE(2, T, 1, 0, "ng-container", 4),
            i.j41(3, "eui-dropdown-content"),
            i.SdG(4),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(),
            d = i.sdS(3);
          (i.Y8G("hasTabNavigation", a.hasTabNavigation),
            i.R7$(2),
            i.Y8G("ngTemplateOutlet", d));
        }
      }
      function x(u, E) {
        1 & u && i.eu8(0);
      }
      function G(u, E) {
        if ((1 & u && i.DNE(0, x, 1, 0, "ng-container", 4), 2 & u)) {
          i.XpG();
          const a = i.sdS(3);
          i.Y8G("ngTemplateOutlet", a);
        }
      }
      function Q(u, E) {
        if ((1 & u && (i.j41(0, "span"), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(4);
          (i.R7$(), i.SpI("", a.welcomeLabel, "\xa0"));
        }
      }
      function oe(u, E) {
        if (
          (1 & u && (i.EFF(0), i.j41(1, "strong"), i.EFF(2), i.k0s()), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.SpI(
            " ",
            null == (a = p.userState()) || null == a.impersonatingUser
              ? null
              : a.impersonatingUser.firstName,
            " ",
          ),
            i.R7$(2),
            i.JRh(
              null == (d = p.userState()) || null == d.impersonatingUser
                ? null
                : d.impersonatingUser.lastName,
            ));
        }
      }
      function ae(u, E) {
        if (
          (1 & u && (i.j41(0, "strong"), i.EFF(1), i.k0s(), i.EFF(2)), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.R7$(),
            i.JRh(
              null == (a = p.userState()) || null == a.impersonatingUser
                ? null
                : a.impersonatingUser.lastName,
            ),
            i.R7$(),
            i.SpI(
              " ",
              null == (d = p.userState()) || null == d.impersonatingUser
                ? null
                : d.impersonatingUser.firstName,
              " ",
            ));
        }
      }
      function Le(u, E) {
        if (
          (1 & u && (i.EFF(0), i.j41(1, "strong"), i.EFF(2), i.k0s()), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.SpI(" ", null == (a = p.userState()) ? null : a.firstName, " "),
            i.R7$(2),
            i.JRh(null == (d = p.userState()) ? null : d.lastName));
        }
      }
      function Ae(u, E) {
        if (
          (1 & u && (i.j41(0, "strong"), i.EFF(1), i.k0s(), i.EFF(2)), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.R7$(),
            i.JRh(null == (a = p.userState()) ? null : a.lastName),
            i.R7$(),
            i.SpI(" ", null == (d = p.userState()) ? null : d.firstName, " "));
        }
      }
      function xt(u, E) {
        if ((1 & u && (i.j41(0, "div", 12), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(4);
          (i.R7$(), i.JRh(a.subInfos));
        }
      }
      function Kt(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 10),
            i.DNE(1, Q, 2, 1, "span")(2, oe, 3, 2)(3, ae, 3, 2),
            i.j41(4, "span"),
            i.EFF(5),
            i.k0s()(),
            i.j41(6, "div", 11),
            i.DNE(7, Le, 3, 2)(8, Ae, 3, 2),
            i.k0s(),
            i.DNE(9, xt, 2, 1, "div", 12)),
          2 & u)
        ) {
          const a = i.XpG(3);
          (i.R7$(),
            i.vxM(a.hasWelcomeLabel ? 1 : -1),
            i.R7$(),
            i.vxM(a.reverseNameOrder ? 2 : 3),
            i.R7$(3),
            i.SpI(",\xa0", a.impersonateLabel, ""),
            i.R7$(2),
            i.vxM(a.reverseNameOrder ? 7 : 8),
            i.R7$(2),
            i.vxM(a.subInfos ? 9 : -1));
        }
      }
      function Dt(u, E) {
        if ((1 & u && (i.j41(0, "div", 10), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(4);
          (i.R7$(), i.JRh(a.welcomeLabel));
        }
      }
      function Yt(u, E) {
        if (
          (1 & u && (i.EFF(0), i.j41(1, "strong"), i.EFF(2), i.k0s()), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.SpI(" ", null == (a = p.userState()) ? null : a.firstName, " "),
            i.R7$(2),
            i.JRh(null == (d = p.userState()) ? null : d.lastName));
        }
      }
      function Sn(u, E) {
        if (
          (1 & u && (i.j41(0, "strong"), i.EFF(1), i.k0s(), i.EFF(2)), 2 & u)
        ) {
          let a, d;
          const p = i.XpG(4);
          (i.R7$(),
            i.JRh(null == (a = p.userState()) ? null : a.lastName),
            i.R7$(),
            i.SpI(" ", null == (d = p.userState()) ? null : d.firstName, " "));
        }
      }
      function de(u, E) {
        if ((1 & u && (i.j41(0, "div", 12), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(4);
          (i.R7$(), i.JRh(a.subInfos));
        }
      }
      function Ze(u, E) {
        if (
          (1 & u &&
            (i.DNE(0, Dt, 2, 1, "div", 10),
            i.j41(1, "div", 11),
            i.DNE(2, Yt, 3, 2)(3, Sn, 3, 2),
            i.k0s(),
            i.DNE(4, de, 2, 1, "div", 12)),
          2 & u)
        ) {
          const a = i.XpG(3);
          (i.vxM(a.hasWelcomeLabel ? 0 : -1),
            i.R7$(2),
            i.vxM(a.reverseNameOrder ? 2 : 3),
            i.R7$(2),
            i.vxM(a.subInfos ? 4 : -1));
        }
      }
      function ze(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 6), i.DNE(1, Kt, 10, 5)(2, Ze, 5, 3), i.k0s()),
          2 & u)
        ) {
          let a;
          const d = i.XpG(2);
          (i.R7$(),
            i.vxM(null != (a = d.userState()) && a.impersonatingUser ? 1 : 2));
        }
      }
      function pn(u, E) {
        if (
          (1 & u && (i.j41(0, "eui-avatar-text"), i.EFF(1), i.k0s()), 2 & u)
        ) {
          const a = i.XpG(2);
          (i.R7$(), i.JRh(a.avatarInitials()));
        }
      }
      function si(u, E) {
        if ((1 & u && i.nrm(0, "eui-avatar-image", 8), 2 & u)) {
          const a = i.XpG(2);
          i.Y8G("imageUrl", a.avatarUrl);
        }
      }
      function Tt(u, E) {
        1 & u &&
          (i.j41(0, "eui-badge", 13), i.nrm(1, "eui-icon-svg", 16), i.k0s());
      }
      function Ft(u, E) {
        1 & u &&
          (i.j41(0, "eui-badge", 14), i.nrm(1, "eui-icon-svg", 17), i.k0s());
      }
      function lo(u, E) {
        1 & u &&
          (i.j41(0, "eui-badge", 15), i.nrm(1, "eui-icon-svg", 18), i.k0s());
      }
      function ji(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "eui-avatar-badge", 9),
            i.DNE(1, Tt, 2, 0, "eui-badge", 13)(2, Ft, 2, 0, "eui-badge", 14)(
              3,
              lo,
              2,
              0,
              "eui-badge",
              15,
            ),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(2);
          (i.R7$(),
            i.vxM(
              a.euiStatusSuccess
                ? 1
                : a.euiStatusDanger
                  ? 2
                  : a.euiStatusSecondary
                    ? 3
                    : -1,
            ));
        }
      }
      function yi(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 19);
      }
      function uo(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 20);
      }
      function co(u, E) {
        if (
          (1 & u &&
            i.DNE(0, yi, 1, 0, "eui-icon-svg", 19)(
              1,
              uo,
              1,
              0,
              "eui-icon-svg",
              20,
            ),
          2 & u)
        ) {
          const a = i.XpG(2);
          i.vxM(a.isDropdownOpen ? 0 : 1);
        }
      }
      function Bi(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "button", 5),
            i.DNE(1, ze, 3, 1, "div", 6),
            i.j41(2, "eui-avatar", 7),
            i.DNE(3, pn, 2, 1, "eui-avatar-text")(
              4,
              si,
              1,
              1,
              "eui-avatar-image",
              8,
            )(5, ji, 4, 1, "eui-avatar-badge", 9),
            i.k0s(),
            i.DNE(6, co, 2, 1),
            i.k0s()),
          2 & u)
        ) {
          let a;
          const d = i.XpG();
          (i.AVh("eui-user-profile-content--no-menu", !d.hasMenu),
            i.Y8G("tabindex", d.hasMenu ? "0" : "-1"),
            i.R7$(),
            i.vxM(d.isShowUserInfos ? 1 : -1),
            i.R7$(),
            i.Y8G("euiSizeS", d.baseStatesDirective.euiSizeS)(
              "hasShadow",
              null == (a = d.userState()) ? null : a.impersonatingUser,
            ),
            i.R7$(),
            i.vxM(d.isShowAvatarInitials ? 3 : 4),
            i.R7$(2),
            i.vxM(
              d.euiStatusSecondary || d.euiStatusSuccess || d.euiStatusDanger
                ? 5
                : -1,
            ),
            i.R7$(),
            i.vxM(d.hasMenu || d.hasToggle ? 6 : -1));
        }
      }
      let bi = (() => {
          class u {
            constructor() {
              ((this.userState = (0, i.WQX)($.DLc).getSignal()),
                (this.isOnline = !0),
                (this.impersonateLabel = "acting as"),
                (this.showDetailsLabel = "Show profile details"),
                (this.isShowAvatarInitials = !0),
                (this.reverseNameOrder = !1),
                (this.showProfileInfo = new i.bkB()),
                (this.closeProfileMenu = new i.bkB()));
            }
            get cssClasses() {
              return "eui-user-profile-card";
            }
            ngOnInit() {
              ((this.avatarInitials = (0, i.EWP)(() => {
                const a = this.userState()
                    .firstName?.substring(0, 1)
                    .toUpperCase(),
                  d = this.userState().lastName?.substring(0, 1).toUpperCase();
                return this.reverseNameOrder ? `${a}${d}` : `${d}${a}`;
              })),
                (this.fullName = (0, i.EWP)(() => {
                  const a = this.userState(),
                    d = this.userState().impersonatingUser,
                    p = (D) =>
                      this.reverseNameOrder
                        ? `${D.firstName} ${D.lastName}`
                        : `${D.lastName} ${D.firstName}`;
                  return { user: p(a), impersonated: d ? p(d) : void 0 };
                })));
            }
            onShowInfoClick() {
              this.showProfileInfo.emit();
            }
            onClose() {
              this.closeProfileMenu.emit();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-user-profile-card"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  impersonateLabel: "impersonateLabel",
                  showDetailsLabel: "showDetailsLabel",
                  avatarUrl: "avatarUrl",
                  isShowAvatarInitials: [
                    2,
                    "isShowAvatarInitials",
                    "isShowAvatarInitials",
                    i.L39,
                  ],
                  reverseNameOrder: "reverseNameOrder",
                },
                outputs: {
                  showProfileInfo: "showProfileInfo",
                  closeProfileMenu: "closeProfileMenu",
                },
                decls: 15,
                vars: 6,
                consts: [
                  [1, "eui-user-profile-card__main-wrapper"],
                  [1, "eui-user-profile-card__avatar-wrapper"],
                  ["euiSizeL", "", "isFlat", ""],
                  [1, "eui-user-profile-card__userInfos"],
                  [1, "eui-u-f-xl", "eui-u-mb-s"],
                  [1, "eui-user-profile-card__userInfos-item"],
                  [1, "eui-user-profile-card__main-wrapper-right-content"],
                  [
                    "icon",
                    "close:outline",
                    "size",
                    "s",
                    "euiRounded",
                    "",
                    3,
                    "buttonClick",
                  ],
                  [
                    "euiButton",
                    "",
                    "euiIconButton",
                    "",
                    "euiInfo",
                    "",
                    "euiSizeS",
                    "",
                    "tabindex",
                    "0",
                    1,
                    "eui-u-ml-auto",
                    "eui-u-mt-m",
                    3,
                    "click",
                    "title",
                  ],
                  ["icon", "information:outline", "size", "s"],
                  [1, "eui-user-profile-card__impersonateInfos"],
                  [3, "imageUrl"],
                  [1, "eui-u-mt-2xs"],
                ],
                template: function (d, p) {
                  if (
                    (1 & d &&
                      (i.j41(0, "div", 0)(1, "div", 1)(2, "eui-avatar", 2),
                      i.DNE(3, ro, 2, 1, "eui-avatar-text")(4, Ko, 2, 2),
                      i.k0s()(),
                      i.j41(5, "div", 3)(6, "div", 4),
                      i.EFF(7),
                      i.k0s(),
                      i.DNE(8, Qt, 2, 1, "div", 5)(9, me, 2, 1, "div", 5),
                      i.k0s(),
                      i.j41(10, "div", 6)(11, "eui-icon-button", 7),
                      i.bIt("buttonClick", function () {
                        return p.onClose();
                      }),
                      i.k0s(),
                      i.j41(12, "button", 8),
                      i.bIt("click", function () {
                        return p.onShowInfoClick();
                      }),
                      i.nrm(13, "eui-icon-svg", 9),
                      i.k0s()()(),
                      i.DNE(14, so, 8, 3, "div", 10)),
                    2 & d)
                  ) {
                    let D;
                    (i.R7$(3),
                      i.vxM(p.isShowAvatarInitials ? 3 : 4),
                      i.R7$(4),
                      i.JRh(p.fullName().user),
                      i.R7$(),
                      i.vxM(p.userState().function ? 8 : -1),
                      i.R7$(),
                      i.vxM(
                        p.userState().organisation &&
                          p.userState().organisation.code
                          ? 9
                          : -1,
                      ),
                      i.R7$(3),
                      i.FS9("title", p.showDetailsLabel),
                      i.R7$(2),
                      i.vxM(
                        null != (D = p.userState()) && D.impersonatingUser
                          ? 14
                          : -1,
                      ));
                  }
                },
                dependencies: [kt.J8, Tn._x, tt.aV, ge, bn, ei],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        fo = (() => {
          class u {
            constructor() {
              ((this.class = "eui-user-profile-menu-item"),
                (this.tabindex = "-1"),
                (this.role = "menuitem"),
                (this.element = (0, i.WQX)(i.aKT)));
            }
            focus() {
              this.element.nativeElement.focus();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-user-profile-menu-item"]],
                hostVars: 4,
                hostBindings: function (d, p) {
                  2 & d &&
                    (i.BMQ("tabindex", p.tabindex)("role", p.role),
                    i.HbH(p.class));
                },
                ngContentSelectors: ao,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        wn = (() => {
          class u {
            constructor() {
              ((this.welcomeLabel = "Welcome"),
                (this.impersonateLabel = "acting as"),
                (this.statusVariant = "success"),
                (this.hasMenu = !1),
                (this.hasWelcomeLabel = !0),
                (this.isShowAvatarInitials = !1),
                (this.hasTabNavigation = !1),
                (this.isReverse = !1),
                (this.hasToggle = !1),
                (this.isHeaderUserProfile = !1),
                (this.isToolbarUserProfile = !1),
                (this.isShowUserInfos = !0),
                (this.isMobileOnly = !0),
                (this.euiStatusSecondary = !1),
                (this.euiStatusSuccess = !1),
                (this.euiStatusDanger = !1),
                (this.reverseNameOrder = !1),
                (this.isDropdownOpen = !1),
                (this.baseStatesDirective = (0, i.WQX)(un.hX)),
                (this.$isDropdownOpen = new So.t(!1)),
                (this.unsubscribeSubject$ = new yn.B()),
                (this.elRef = (0, i.WQX)(i.aKT)),
                (this.cd = (0, i.WQX)(i.gRc)),
                (this.userService = (0, i.WQX)($.DLc)));
            }
            get cssClasses() {
              return [
                this.baseStatesDirective.getCssClasses("eui-user-profile"),
                this.isReverse ? "eui-user-profile--reverse" : "",
                this.isShowAvatarInitials ? "eui-user-profile--initials" : "",
              ]
                .join(" ")
                .trim();
            }
            ngOnInit() {
              ((this.userState = this.userService.getSignal()),
                (this.avatarInitials = (0, i.EWP)(() => {
                  const a = this.userState()
                      .firstName?.substring(0, 1)
                      .toUpperCase(),
                    d = this.userState()
                      .lastName?.substring(0, 1)
                      .toUpperCase();
                  return this.reverseNameOrder ? `${a}${d}` : `${d}${a}`;
                })));
            }
            ngAfterViewInit() {
              this.cd.markForCheck();
              let d,
                a = !1;
              if (this.isToolbarUserProfile)
                ((this.baseStatesDirective.euiSizeS = !0),
                  (this.hasMenu = 0 !== this.hasMenuContent.length));
              else {
                try {
                  ((a = this.elRef.nativeElement.closest("eui-toolbar-item")),
                    (d = this.elRef.nativeElement.closest("eui-toolbar")));
                } catch {}
                setTimeout(() => {
                  (a &&
                    ((this.baseStatesDirective.euiSizeS = !0),
                    (d && d.classList.contains("eui--secondary")) ||
                    this.baseStatesDirective.euiSecondary
                      ? (this.baseStatesDirective.euiSecondary = !0)
                      : (this.baseStatesDirective.euiPrimary = !0)),
                    (a || !this.isHeaderUserProfile) &&
                      (this.hasMenu = 0 !== this.hasMenuContent.length),
                    this.isMobileOnly &&
                      (this.baseStatesDirective.euiSizeS = !0),
                    this.cd.markForCheck());
                });
              }
            }
            ngOnDestroy() {
              (this.unsubscribeSubject$.next(),
                this.unsubscribeSubject$.complete());
            }
            closeDropdown() {
              (this.dropdown.closeDropdown(), (this.isDropdownOpen = !1));
            }
            onDropdownExpand(a) {
              this.isDropdownOpen = a;
            }
            onOpenChange(a) {
              ((this.isDropdownOpen = a), this.$isDropdownOpen.next(a));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-user-profile"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, on, 5), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.hasMenuContent = V);
                  }
                },
                viewQuery: function (d, p) {
                  if ((1 & d && i.GBs(Sr, 5), 2 & d)) {
                    let D;
                    i.mGM((D = i.lsd())) && (p.dropdown = D.first);
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  welcomeLabel: "welcomeLabel",
                  impersonateLabel: "impersonateLabel",
                  avatarUrl: "avatarUrl",
                  subInfos: "subInfos",
                  statusVariant: "statusVariant",
                  hasMenu: [2, "hasMenu", "hasMenu", i.L39],
                  hasWelcomeLabel: [
                    2,
                    "hasWelcomeLabel",
                    "hasWelcomeLabel",
                    i.L39,
                  ],
                  isShowAvatarInitials: [
                    2,
                    "isShowAvatarInitials",
                    "isShowAvatarInitials",
                    i.L39,
                  ],
                  hasTabNavigation: [
                    2,
                    "hasTabNavigation",
                    "hasTabNavigation",
                    i.L39,
                  ],
                  isReverse: [2, "isReverse", "isReverse", i.L39],
                  hasToggle: [2, "hasToggle", "hasToggle", i.L39],
                  isHeaderUserProfile: [
                    2,
                    "isHeaderUserProfile",
                    "isHeaderUserProfile",
                    i.L39,
                  ],
                  isToolbarUserProfile: [
                    2,
                    "isToolbarUserProfile",
                    "isToolbarUserProfile",
                    i.L39,
                  ],
                  isShowUserInfos: [
                    2,
                    "isShowUserInfos",
                    "isShowUserInfos",
                    i.L39,
                  ],
                  isMobileOnly: [2, "isMobileOnly", "isMobileOnly", i.L39],
                  euiStatusSecondary: [
                    2,
                    "euiStatusSecondary",
                    "euiStatusSecondary",
                    i.L39,
                  ],
                  euiStatusSuccess: [
                    2,
                    "euiStatusSuccess",
                    "euiStatusSuccess",
                    i.L39,
                  ],
                  euiStatusDanger: [
                    2,
                    "euiStatusDanger",
                    "euiStatusDanger",
                    i.L39,
                  ],
                  reverseNameOrder: "reverseNameOrder",
                },
                features: [
                  i.Jv_([Hn.G7]),
                  i.nM4([
                    {
                      directive: un.hX,
                      inputs: [
                        "euiSizeS",
                        "euiSizeS",
                        "euiSecondary",
                        "euiSecondary",
                        "euiPrimary",
                        "euiPrimary",
                      ],
                    },
                  ]),
                ],
                ngContentSelectors: ao,
                decls: 4,
                vars: 1,
                consts: [
                  ["userProfileContent", ""],
                  ["dropdown", ""],
                  ["width", "340px", 3, "hasTabNavigation"],
                  [
                    "width",
                    "340px",
                    3,
                    "isDropdownOpen",
                    "expand",
                    "hasTabNavigation",
                  ],
                  [4, "ngTemplateOutlet"],
                  [1, "eui-user-profile-content", 3, "tabindex"],
                  [1, "eui-user-profile__infos"],
                  ["isFlat", "", 3, "euiSizeS", "hasShadow"],
                  [3, "imageUrl"],
                  ["position", "bottom"],
                  [1, "eui-user-profile__infos-welcome"],
                  [1, "eui-user-profile__infos-name"],
                  [1, "eui-user-profile__infos-subinfos"],
                  ["euiSuccess", "", "euiSizeS", "", "euiIconBadge", ""],
                  ["euiDanger", "", "euiSizeS", "", "euiIconBadge", ""],
                  ["euiSecondary", "", "euiSizeS", "", "euiIconBadge", ""],
                  ["icon", "checkmark:outline", "size", "xs"],
                  ["icon", "remove:outline", "size", "xs"],
                  [
                    "icon",
                    "close-circle:outline",
                    "fillColor",
                    "neutral",
                    "size",
                    "xs",
                  ],
                  [
                    "icon",
                    "chevron-up:sharp",
                    "size",
                    "xs",
                    1,
                    "eui-user-profile__drop-indicator",
                  ],
                  [
                    "icon",
                    "chevron-down:sharp",
                    "size",
                    "xs",
                    1,
                    "eui-user-profile__drop-indicator",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(),
                    i.DNE(
                      0,
                      N,
                      5,
                      2,
                      "eui-dropdown",
                      2,
                    )(1, G, 1, 1, "ng-container")(
                      2,
                      Bi,
                      7,
                      9,
                      "ng-template",
                      null,
                      0,
                      i.C5r,
                    )),
                    2 & d && i.vxM(p.hasMenu ? 0 : 1));
                },
                dependencies: [
                  Xe.T3,
                  Hn.mf,
                  Hn.LL,
                  tt.aV,
                  ge,
                  bn,
                  ei,
                  Io,
                  ti.C4,
                ],
                styles: [
                  '.eui-19 .eui-user-profile{display:flex;position:relative}.eui-19 .eui-user-profile-content{align-items:center;background:none;border:var(--eui-bw-none);cursor:pointer;display:flex;padding:var(--eui-s-2xs) 0;gap:var(--eui-s-xs)}.eui-19 .eui-user-profile-content:focus-visible:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-user-profile-content--no-menu{cursor:default}.eui-19 .eui-user-profile__infos{align-items:flex-end;display:flex;flex-direction:column}.eui-19 .eui-user-profile__infos-container{justify-content:flex-end;align-items:center;display:flex;width:100%}.eui-19 .eui-user-profile__infos-welcome{text-align:right;font:var(--eui-f-xs-compact)}.eui-19 .eui-user-profile__infos-name{color:var(--eui-c-branding);text-align:right;font:var(--eui-f-m-compact)}.eui-19 .eui-user-profile__infos-subinfos{color:var(--eui-c-text-light);text-align:right;font:var(--eui-f-xs-compact)}.eui-19 .eui-user-profile__drop-indicator{margin-left:calc(-1 * var(--eui-s-xs))}.eui-19 .eui--secondary .eui-user-profile__infos-name,.eui-19 .eui--secondary .eui-user-profile__infos-welcome{color:var(--eui-c-text)!important}@media screen and (max-width: 767px){.eui-19 .eui-app-shell-header-toolbar-items .eui-user-profile{display:flex}.eui-19 .eui-app .eui-app-toolbar .eui-user-profile__infos{display:none}}@media screen and (min-width: 768px){.eui-19 .eui-app-shell-header-toolbar-items .eui-user-profile{display:none}.eui-19 .is-header-shrink .eui-user-profile{display:flex}}@media screen and (min-width: 768px) and (max-width: 995px){.eui-19 .eui-app .eui-app-toolbar .eui-user-profile__infos{display:none}}.eui-19 .eui-user-profile--primary .eui-user-profile__infos-name,.eui-19 .eui-user-profile--primary .eui-user-profile__infos-welcome,.eui-19 .eui-user-profile--primary .eui-user-profile__infos-subinfos{color:var(--eui-c-white)}.eui-19 .eui-user-profile--primary .eui-user-profile__drop-indicator svg{fill:var(--eui-c-white);color:var(--eui-c-white)}.eui-19 .eui-user-profile--reverse .eui-user-profile-content{flex-direction:row-reverse}.eui-19 .eui-user-profile--reverse .eui-user-profile__infos{margin-left:var(--eui-s-m)}.eui-19 .eui-user-profile--initials .eui-avatar-wrapper{background-color:var(--eui-c-branding-light)!important}.eui-19 .eui-user-profile--initials .eui-avatar-text{color:var(--eui-c-branding-light-contrast)!important}.eui-19 .eui-user-profile-menu{height:auto;min-width:250px;position:relative}.eui-19 .eui-user-profile-menu-item{align-items:center;border-bottom:1px solid var(--eui-c-divider);cursor:pointer;display:flex;padding:var(--eui-s-xs) var(--eui-s-s);gap:var(--eui-s-xs)}.eui-19 .eui-user-profile-menu-item:focus:not([readonly]){outline:2px solid var(--eui-c-focus)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-user-profile-menu-item:focus-visible:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-user-profile-menu-item [tabindex="0"]:focus:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-user-profile-menu-item:last-child{border-bottom:0}.eui-19 .eui-user-profile-menu-item:hover{background-color:var(--eui-c-hover)}.eui-19 .eui-user-profile-menu-item a{color:var(--eui-c-text);text-decoration:none}.eui-19 .eui-user-profile-menu-item.link{cursor:pointer}.eui-19 .eui-user-profile-menu-item-right-content{margin-left:auto}.eui-19 .eui-user-profile-card{width:100%}.eui-19 .eui-user-profile-card__main-wrapper{display:flex;flex-direction:row;padding:var(--eui-s-m) var(--eui-s-m) var(--eui-s-m) 0}.eui-19 .eui-user-profile-card__main-wrapper-right-content{display:flex;flex-direction:column;margin-left:auto}.eui-19 .eui-user-profile-card__avatar-wrapper{display:flex}.eui-19 .eui-user-profile-card__userInfos{display:flex;flex-direction:column;padding-left:var(--eui-s-s)}.eui-19 .eui-user-profile-card__userInfos-item{padding-bottom:var(--eui-s-xs)}.eui-19 .eui-user-profile-card__impersonateInfos{background-color:var(--eui-c-s-secondary-surface-light);padding:var(--eui-s-s)}.eui-19.eui-t-dark .eui-user-profile__infos-name,.eui-19.eui-t-dark .eui-user-profile__infos-welcome{color:var(--eui-c-black)}.eui-19.eui-t-dark .eui-user-profile__drop-indicator svg{fill:var(--eui-c-black);color:var(--eui-c-black)}\n',
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        on = (() => {
          class u {
            constructor() {
              ((this.class = "eui-user-profile-menu"),
                (this.role = "menu"),
                (this.parent = (0, i.WQX)(
                  (0, i.Rfq)(() => wn),
                  { optional: !0 },
                )),
                (this.destroy$ = new yn.B()));
            }
            onKeydown(a) {
              this.focusKeyManager && this.focusKeyManager.onKeydown(a);
            }
            ngAfterViewInit() {
              this.subscribeToParent();
            }
            ngOnDestroy() {
              (this.destroy$.next(!0), this.destroy$.unsubscribe());
            }
            subscribeToParent() {
              this.parent?.$isDropdownOpen
                .pipe((0, Vn.Q)(this.destroy$))
                .subscribe((a) => {
                  a &&
                    ((this.focusKeyManager = new Zt(this.items).withWrap()),
                    this.focusKeyManager.setFirstItemActive());
                });
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-user-profile-menu"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, fo, 4), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.items = V);
                  }
                },
                hostVars: 3,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("keydown", function (V) {
                      return p.onKeydown(V);
                    }),
                    2 & d && (i.BMQ("role", p.role), i.HbH(p.class)));
                },
                ngContentSelectors: ao,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        An = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [wn, bi] });
            }
          }
          return u;
        })();
      var wo = P(1753),
        ye = P(1451),
        g = P(3075);
      const A = ["*"],
        y = (u) => ({ $implicit: u });
      function M(u, E) {}
      function O(u, E) {
        if ((1 & u && i.DNE(0, M, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function H(u, E) {}
      function J(u, E) {
        if ((1 & u && i.DNE(0, H, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function W(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "li", 7)(1, "a", 8),
            i.bIt("click", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onClick(p));
            }),
            i.j41(2, "div", 9),
            i.DNE(3, O, 1, 3, null, 10),
            i.k0s(),
            i.j41(4, "div", 11)(5, "div", 12)(6, "span", 13),
            i.EFF(7),
            i.nI1(8, "translate"),
            i.k0s()()(),
            i.j41(9, "div", 14),
            i.DNE(10, J, 1, 3, null, 10),
            i.k0s()()());
        }
        if (2 & u) {
          const a = i.XpG(2),
            d = i.sdS(8),
            p = i.sdS(10);
          (i.AVh("eui-menu-item--disabled", a.item.disabled),
            i.FS9("id", a.item.id),
            i.Y8G("euiTooltip", a.menuItemTooltip),
            i.BMQ("data-e2e", a.item.e2eAttr)("aria-disabled", a.item.disabled),
            i.R7$(),
            i.AVh("eui-menu-item__link--disabled", a.item.disabled)(
              "eui-menu-item__link--active",
              a.item.active,
            )(
              "eui-menu-item__link--has-sub",
              (null == a.item.children ? null : a.item.children.length) > 0,
            ),
            i.Y8G("euiTooltip", a.menuItemTooltip),
            i.R7$(2),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(4),
            i.JRh(i.bMT(8, 16, a.item.label)),
            i.R7$(3),
            i.Y8G("ngTemplateOutlet", p));
        }
      }
      function et(u, E) {}
      function at(u, E) {
        if ((1 & u && i.DNE(0, et, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function ke(u, E) {}
      function Ve(u, E) {
        1 & u && i.DNE(0, ke, 0, 0, "ng-template");
      }
      function rn(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "li", 16)(1, "a", 17),
            i.bIt("click", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onClick(p));
            }),
            i.DNE(2, at, 1, 3, null, 10),
            i.k0s(),
            i.DNE(3, Ve, 1, 0, null, 10),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(2),
            d = i.sdS(2),
            p = i.sdS(6);
          (i.AVh("eui-menu-item--disabled", a.item.disabled)(
            "eui-menu-item--expanded",
            a.item.expanded || a.item.filtered,
          ),
            i.FS9("id", a.item.id),
            i.BMQ("data-e2e", a.item.e2eAttr)("aria-disabled", a.item.disabled),
            i.R7$(),
            i.AVh("eui-menu-item__link--disabled", a.item.disabled)(
              "eui-menu-item__link--active",
              a.item.active,
            )(
              "eui-menu-item__link--has-sub",
              (null == a.item.children ? null : a.item.children.length) > 0,
            ),
            i.Y8G("routerLink", a.item.url ? a.item.url : null)(
              "queryParams",
              a.item.queryParams,
            )(
              "routerLinkActive",
              a.item.url ? "eui-menu-item__link--active" : "",
            )("euiTooltip", a.menuItemTooltip),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", p));
        }
      }
      function St(u, E) {}
      function wt(u, E) {
        if ((1 & u && i.DNE(0, St, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function $n(u, E) {}
      function ai(u, E) {
        1 & u && i.DNE(0, $n, 0, 0, "ng-template");
      }
      function xi(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "li", 16)(1, "a", 18),
            i.bIt("click", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onClick(p));
            }),
            i.DNE(2, wt, 1, 3, null, 10),
            i.k0s(),
            i.DNE(3, ai, 1, 0, null, 10),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(2),
            d = i.sdS(2),
            p = i.sdS(6);
          (i.AVh("eui-menu-item--disabled", a.item.disabled)(
            "eui-menu-item--expanded",
            a.item.expanded || a.item.filtered,
          ),
            i.FS9("id", a.item.id),
            i.BMQ("data-e2e", a.item.e2eAttr)("aria-disabled", a.item.disabled),
            i.R7$(),
            i.AVh("eui-menu-item__link--disabled", a.item.disabled)(
              "eui-menu-item__link--active",
              a.item.active,
            )(
              "eui-menu-item__link--has-sub",
              (null == a.item.children ? null : a.item.children.length) > 0,
            ),
            i.Y8G("euiTooltip", a.menuItemTooltip),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", p));
        }
      }
      function Vi(u, E) {
        if (
          (1 & u &&
            i.DNE(0, W, 11, 18, "li", 5)(1, rn, 4, 19, "li", 6)(
              2,
              xi,
              4,
              16,
              "li",
              6,
            ),
          2 & u)
        ) {
          const a = i.XpG();
          (i.vxM(a.isLabelItem ? 0 : -1),
            i.R7$(),
            i.vxM(a.isUrlItem ? 1 : -1),
            i.R7$(),
            i.vxM(a.isLinkItem ? 2 : -1));
        }
      }
      function wr(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 19),
            i.nrm(1, "eui-icon-svg", 20),
            i.j41(2, "div", 12)(3, "span", 21),
            i.EFF(4),
            i.nI1(5, "translate"),
            i.k0s()()()),
          2 & u)
        ) {
          const a = i.XpG(3);
          (i.R7$(),
            i.FS9("icon", a.item.iconSvgName),
            i.FS9("fillColor", a.item.iconTypeClass),
            i.R7$(3),
            i.JRh(i.bMT(5, 3, a.item.label)));
        }
      }
      function po(u, E) {}
      function Jo(u, E) {
        if ((1 & u && i.DNE(0, po, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(4);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function ku(u, E) {
        if ((1 & u && i.DNE(0, Jo, 1, 3, null, 10), 2 & u)) {
          i.XpG(3);
          const a = i.sdS(4);
          i.Y8G("ngTemplateOutlet", a);
        }
      }
      function hn(u, E) {
        if ((1 & u && i.DNE(0, wr, 6, 5, "div", 19)(1, ku, 1, 1), 2 & u)) {
          const a = i.XpG(2);
          i.vxM(a.isCollapsed ? 0 : 1);
        }
      }
      function Pa(u, E) {}
      function fe(u, E) {
        if ((1 & u && i.DNE(0, Pa, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function Ar(u, E) {
        if ((1 & u && i.DNE(0, fe, 1, 3, null, 10), 2 & u)) {
          i.XpG(2);
          const a = i.sdS(4);
          i.Y8G("ngTemplateOutlet", a);
        }
      }
      function Ao(u, E) {}
      function Gi(u, E) {
        if ((1 & u && i.DNE(0, Ao, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(2);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function ja(u, E) {
        if (
          (1 & u &&
            (i.DNE(0, hn, 2, 1)(1, Ar, 1, 1),
            i.j41(2, "div", 14),
            i.DNE(3, Gi, 1, 3, null, 10),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(),
            d = i.sdS(10);
          (i.vxM(a.hasIconLabel ? 0 : 1),
            i.R7$(3),
            i.Y8G("ngTemplateOutlet", d));
        }
      }
      function Ba(u, E) {}
      function kr(u, E) {
        if ((1 & u && i.DNE(0, Ba, 0, 0, "ng-template", 15), 2 & u)) {
          const a = i.XpG(2);
          i.Y8G("ngTemplateOutletContext", i.eq3(1, y, a.item));
        }
      }
      function Cs(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 22);
      }
      function xr(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 9),
            i.DNE(1, kr, 1, 3, null, 10),
            i.k0s(),
            i.j41(2, "div", 11)(3, "div", 12)(4, "span", 21),
            i.EFF(5),
            i.nI1(6, "translate"),
            i.k0s(),
            i.DNE(7, Cs, 1, 0, "eui-icon-svg", 22),
            i.k0s()()),
          2 & u)
        ) {
          const a = i.XpG(),
            d = i.sdS(8);
          (i.R7$(),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(4),
            i.JRh(i.bMT(6, 3, a.item.label)),
            i.R7$(2),
            i.vxM(
              a.item.urlExternal && "_blank" === a.item.urlExternalTarget
                ? 7
                : -1,
            ));
        }
      }
      function xu(u, E) {
        1 & u && i.SdG(0);
      }
      function ko(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 20), 2 & u)) {
          const a = i.XpG(4);
          (i.FS9("icon", a.item.iconSvgName),
            i.FS9("fillColor", a.item.iconTypeClass));
        }
      }
      function Va(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 24), 2 & u)) {
          const a = i.XpG(4);
          (i.FS9("iconUrl", a.item.iconSvgUrl),
            i.FS9("fillColor", a.item.iconTypeClass));
        }
      }
      function Ui(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 23), 2 & u)) {
          const a = i.XpG(4);
          (i.FS9("fillColor", null == a.item ? null : a.item.markerTypeClass),
            i.Y8G("aria-label", a.item.markerTypeClass + " marker"));
        }
      }
      function Ga(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 25);
      }
      function kn(u, E) {
        if (
          (1 & u &&
            i.DNE(0, ko, 1, 2, "eui-icon-svg", 20)(
              1,
              Va,
              1,
              2,
              "eui-icon-svg",
              24,
            )(2, Ui, 1, 2, "eui-icon-svg", 23)(3, Ga, 1, 0, "eui-icon-svg", 25),
          2 & u)
        ) {
          const a = i.XpG(3);
          i.vxM(
            a.item.iconSvgName
              ? 0
              : a.item.iconSvgUrl
                ? 1
                : a.item.hasMarker
                  ? 2
                  : a.isLabelItem
                    ? -1
                    : 3,
          );
        }
      }
      function xo(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 23), 2 & u)) {
          const a = i.XpG(3);
          (i.FS9("fillColor", null == a.item ? null : a.item.markerTypeClass),
            i.Y8G("aria-label", a.item.markerTypeClass + " marker"));
        }
      }
      function Es(u, E) {
        if (
          (1 & u && i.DNE(0, kn, 4, 1)(1, xo, 1, 2, "eui-icon-svg", 23), 2 & u)
        ) {
          const a = i.XpG(2);
          i.vxM(a.hasIcon ? 0 : a.item.hasMarker ? 1 : -1);
        }
      }
      function Nr(u, E) {
        if ((1 & u && (i.j41(0, "span"), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(3);
          (i.ZvI(
            "eui-menu-item__link-initials eui-u-c-bg-",
            a.item.iconTypeClass,
            "",
          ),
            i.R7$(),
            i.SpI(" ", a.item.initials, " "));
        }
      }
      function qo(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 20), 2 & u)) {
          const a = i.XpG(5);
          (i.FS9("icon", a.item.iconSvgName),
            i.FS9("fillColor", a.item.iconTypeClass));
        }
      }
      function Ua(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 24), 2 & u)) {
          const a = i.XpG(5);
          (i.FS9("iconUrl", a.item.iconSvgUrl),
            i.FS9("fillColor", a.item.iconTypeClass));
        }
      }
      function Ms(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 23), 2 & u)) {
          const a = i.XpG(5);
          (i.FS9("fillColor", null == a.item ? null : a.item.markerTypeClass),
            i.Y8G("aria-label", a.item.markerTypeClass + " marker"));
        }
      }
      function zn(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 28), 2 & u)) {
          const a = i.XpG(5);
          i.Y8G("aria-label", a.item.iconLabel);
        }
      }
      function Rr(u, E) {
        if (
          (1 & u &&
            i.DNE(0, qo, 1, 2, "eui-icon-svg", 20)(
              1,
              Ua,
              1,
              2,
              "eui-icon-svg",
              24,
            )(2, Ms, 1, 2, "eui-icon-svg", 23)(3, zn, 1, 1, "eui-icon-svg", 28),
          2 & u)
        ) {
          const a = i.XpG(4);
          i.vxM(
            a.item.iconSvgName
              ? 0
              : a.item.iconSvgUrl
                ? 1
                : a.item.hasMarker
                  ? 2
                  : 3,
          );
        }
      }
      function er(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 27);
      }
      function Nu(u, E) {
        if (
          (1 & u && i.DNE(0, Rr, 4, 1)(1, er, 1, 0, "eui-icon-svg", 27), 2 & u)
        ) {
          const a = i.XpG(3);
          i.vxM(a.hasIcon ? 0 : 1);
        }
      }
      function pt(u, E) {
        if ((1 & u && i.DNE(0, Nr, 2, 4, "span", 26)(1, Nu, 2, 1), 2 & u)) {
          const a = i.XpG(2);
          i.vxM(a.hasCollapsedInitials ? 0 : 1);
        }
      }
      function Qe(u, E) {
        if ((1 & u && i.DNE(0, Es, 2, 1)(1, pt, 2, 1), 2 & u)) {
          const a = i.XpG();
          i.vxM(a.isCollapsed ? 1 : 0);
        }
      }
      function ni(u, E) {
        if ((1 & u && i.nrm(0, "eui-badge", 30), 2 & u)) {
          const a = i.XpG(3);
          i.Y8G("euiVariant", a.item.tagTypeClass);
        }
      }
      function Ha(u, E) {
        if ((1 & u && (i.j41(0, "eui-badge", 31), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG(3);
          (i.Y8G("euiVariant", a.item.tagTypeClass),
            i.R7$(),
            i.SpI(" ", a.item.tagLabel, " "));
        }
      }
      function Lr(u, E) {
        if (
          (1 & u &&
            i.DNE(0, ni, 1, 1, "eui-badge", 30)(1, Ha, 2, 2, "eui-badge", 31),
          2 & u)
        ) {
          const a = i.XpG(2);
          i.vxM(a.isCollapsed ? 0 : 1);
        }
      }
      function Or(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 32),
            i.bIt("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onActionIconKeyDown(p));
            })("focusout", function () {
              i.eBV(a);
              const p = i.XpG(2);
              return i.Njj(p.onActionIconFocusOut());
            })("focus", function () {
              i.eBV(a);
              const p = i.XpG(2);
              return i.Njj(p.focusActionIcon());
            })("click", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onActionIconClick(p));
            }),
            i.nrm(1, "eui-icon-svg", 33),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(2);
          (i.Y8G("euiDisabled", a.item.disabled),
            i.BMQ(
              "aria-label",
              null == a.item.actionIcon ? null : a.item.actionIcon.label,
            ),
            i.R7$(),
            i.Y8G(
              "icon",
              null == a.item.actionIcon ? null : a.item.actionIcon.icon,
            )(
              "fillColor",
              null == a.item.actionIcon ? null : a.item.actionIcon.color,
            ));
        }
      }
      function mn(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-icon-button", 35),
            i.bIt("buttonClick", function (p) {
              i.eBV(a);
              const D = i.XpG(3);
              return i.Njj(D.onExpandToggle(p));
            }),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(3);
          i.Y8G(
            "icon",
            a.item.expanded ? "chevron-up:sharp" : "chevron-down:sharp",
          )(
            "ariaLabel",
            a.item.expanded ? a.collapseMenuLabel : a.expandMenuLabel,
          )("tabindex", -1)("euiDisabled", a.item.disabled);
        }
      }
      function Oe(u, E) {
        if ((1 & u && i.DNE(0, mn, 1, 4, "eui-icon-button", 34), 2 & u)) {
          const a = i.XpG(2);
          i.vxM(
            (null == a.item.children ? null : a.item.children.length) > 0
              ? 0
              : -1,
          );
        }
      }
      function dn(u, E) {
        if (
          (1 & u && i.DNE(0, Lr, 2, 1)(1, Or, 2, 4, "button", 29)(2, Oe, 1, 1),
          2 & u)
        ) {
          const a = i.XpG();
          (i.vxM(a.item.tagLabel ? 0 : -1),
            i.R7$(),
            i.vxM(a.item.actionIcon ? 1 : -1),
            i.R7$(),
            i.vxM(a.hasExpandIcon ? 2 : -1));
        }
      }
      const Wn = ["filterInput"],
        ho = ["menubar"],
        Ke = (u, E) => ({ menuItem: u, index: E }),
        $a = (u, E, a) => ({ menuItem: u, index: E, parent: a }),
        Fr = (u, E) => E.id;
      function Is(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "div", 6),
            i.bIt("click", function (p) {
              i.eBV(a);
              const D = i.XpG();
              return i.Njj(D.onMenuFilterClick(p));
            }),
            i.j41(1, "eui-icon-input"),
            i.nrm(2, "eui-icon-svg", 7),
            i.j41(3, "input", 8, 2),
            i.bIt("input", function (p) {
              i.eBV(a);
              const D = i.XpG();
              return i.Njj(D.onFilter(p));
            }),
            i.k0s()()());
        }
        if (2 & u) {
          const a = i.XpG();
          (i.AVh("eui-menu-filter--collapsed", a.isCollapsed),
            i.R7$(3),
            i.Y8G("euiClearable", !0)("placeholder", a.searchFilterLabel)(
              "value",
              a.filterValue,
            ),
            i.BMQ("aria-label", a.searchFilterLabel));
        }
      }
      function za(u, E) {}
      function Pr(u, E) {
        if ((1 & u && i.DNE(0, za, 0, 0, "ng-template", 9), 2 & u)) {
          const a = E.$implicit,
            d = E.$index;
          i.XpG(2);
          const p = i.sdS(6);
          i.Y8G("ngTemplateOutlet", p)(
            "ngTemplateOutletContext",
            i.l_i(2, Ke, a, d),
          );
        }
      }
      function hf(u, E) {
        if ((1 & u && i.Z7z(0, Pr, 1, 5, null, 9, Fr), 2 & u)) {
          const a = i.XpG();
          i.Dyx(a.items);
        }
      }
      function Ds(u, E) {
        1 & u &&
          (i.j41(0, "span", 5), i.EFF(1, "No menu items defined"), i.k0s());
      }
      function Ru(u, E) {}
      function Ts(u, E) {
        if ((1 & u && i.DNE(0, Ru, 0, 0, "ng-template", 9), 2 & u)) {
          const a = E.$implicit,
            d = E.$index,
            p = i.XpG(3).menuItem;
          i.XpG();
          const D = i.sdS(6);
          i.Y8G("ngTemplateOutlet", D)(
            "ngTemplateOutletContext",
            i.sMw(2, $a, a, d, p),
          );
        }
      }
      function Wa(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "ul", 12), i.Z7z(1, Ts, 1, 6, null, 9, Fr), i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(2).menuItem;
          (i.BMQ("aria-label", a.label), i.R7$(), i.Dyx(a.children));
        }
      }
      function Xa(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-menu-item", 11),
            i.bIt("expandToggle", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onExpandToggle(p));
            })("itemClick", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onClick(p));
            }),
            i.DNE(1, Wa, 3, 1, "ul", 12),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(),
            d = a.menuItem,
            p = a.parent,
            D = i.XpG();
          (i.Y8G("item", d)("parent", p)("hasIcon", D.hasIcons)(
            "hasIconLabel",
            D.hasIconsLabels,
          )("hasTooltip", D.hasTooltip)(
            "hasTooltipOnExpanded",
            D.hasTooltipOnExpanded,
          )("isCollapsed", D.isCollapsed)(
            "hasBoldRootLevel",
            D.hasBoldRootLevel,
          )("hasCollapsedInitials", D.hasCollapsedInitials)(
            "hasExpandIcon",
            D.hasExpandIcon,
          ),
            i.R7$(),
            i.vxM(D.shouldRenderChild(d) ? 1 : -1));
        }
      }
      function Ni(u, E) {
        (1 & u && i.DNE(0, Xa, 2, 11, "eui-menu-item", 10),
          2 & u && i.vxM(E.menuItem.filtered ? 0 : -1));
      }
      let tr = (() => {
          class u {
            constructor() {
              ((this.role = "menuitem"),
                (this.ariaLabel = ""),
                (this.tabindex = "-1"),
                (this.hasExpandIcon = !0),
                (this.expandToggle = new i.bkB()),
                (this.itemClick = new i.bkB()),
                (this.expandMenuLabel = "Expand"),
                (this.collapseMenuLabel = "Collapse"),
                (this.isUrlItem = !1),
                (this.isLinkItem = !1),
                (this.isLabelItem = !1),
                (this.isActionIconFocused = !1),
                (this.elementRef = (0, i.WQX)(i.aKT)));
            }
            get cssClasses() {
              return this.getCssClasses();
            }
            get ariaHasPopup() {
              return this.item?.children?.length > 0 || void 0;
            }
            get ariaExpanded() {
              return this.item.children
                ? (0, Jn.c)(this.item.expanded)
                : void 0;
            }
            get ariaDisabled() {
              return this.item.disabled;
            }
            ngOnInit() {
              ((this.isUrlItem =
                (this.item.url ||
                  this.item.urlExternal ||
                  this.item.children ||
                  this.item.command) &&
                !this.item.link),
                (this.isLabelItem = !(
                  this.item.url ||
                  this.item.urlExternal ||
                  this.item.command ||
                  this.item.children ||
                  this.item.link
                )),
                (this.isLinkItem = !this.isUrlItem && !this.isLabelItem),
                (this.ariaLabel = this.getAriaLabel()));
            }
            ngOnChanges(a) {
              a.item &&
                a.item.isFirstChange() &&
                ((this.item = a.item.currentValue),
                this.item.urlExternalTarget ||
                  (this.item.urlExternalTarget = "_blank"),
                (this.item.filtered =
                  "boolean" != typeof this.item.filtered || this.item.filtered),
                (this.item.visible =
                  "boolean" != typeof this.item.visible || this.item.visible));
            }
            stopPropagation(a) {
              (this.itemClick.emit(this.item), (0, $.xh)(a));
            }
            get menuItemTooltip() {
              return (this.hasTooltip && this.isCollapsed) ||
                (this.hasTooltipOnExpanded && !this.isCollapsed)
                ? this.item.tooltip || this.getTooltipFromItem(this.item)
                : null;
            }
            onClick(a) {
              (this.itemClick.emit(this.item), this.focus(), (0, $.xh)(a));
            }
            onExpandToggle(a) {
              (this.expandToggle.emit(this.item), (0, $.xh)(a));
            }
            onActionIconClick(a) {
              (this.item.actionIcon?.action(a), (0, $.xh)(a));
            }
            onActionIconKeyDown(a) {
              "Enter" === a.key &&
                (this.item.actionIcon?.action(a), (0, $.xh)(a));
            }
            focusActionIcon() {
              (this.elementRef.nativeElement
                .querySelector(".eui-menu-item__link-action-icon")
                .focus(),
                (this.isActionIconFocused = !0));
            }
            onActionIconFocusOut() {
              this.isActionIconFocused = !1;
            }
            focus() {
              this.elementRef.nativeElement.focus();
            }
            elementIsVisibleInViewport(a = !1) {
              const {
                  top: d,
                  left: p,
                  bottom: D,
                  right: V,
                } = this.elementRef.nativeElement.getBoundingClientRect(),
                { innerHeight: Ue, innerWidth: Ut } = window;
              return a
                ? ((d > 0 && d < Ue) || (D > 0 && D < Ue)) &&
                    ((p > 0 && p < Ut) || (V > 0 && V < Ut))
                : d >= 0 && p >= 0 && D <= Ue && V <= Ut;
            }
            scrollIntoView(a) {
              this.elementRef.nativeElement.scrollIntoView(a);
            }
            getTooltipFromItem(a) {
              return a.label && a.tagLabel
                ? `${a.label} (${a.tagLabel})`
                : a.label || a.tagLabel || null;
            }
            getAriaLabel() {
              return (
                this.item.label ||
                this.item.tagLabel ||
                (this.item.actionIcon && this.item.actionIcon.label) ||
                this.item.iconLabel ||
                "Eui menu item"
              );
            }
            getCssClasses() {
              return [
                "eui-menu-item",
                this.isCollapsed && this.hasIconLabel
                  ? "eui-menu-item--icon-label"
                  : "",
                !this.parent && this.hasBoldRootLevel
                  ? "eui-menu-item--bold"
                  : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-menu-item"]],
                hostVars: 8,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function (V) {
                      return p.stopPropagation(V);
                    }),
                    2 & d &&
                      (i.BMQ("role", p.role)("aria-label", p.ariaLabel)(
                        "tabindex",
                        p.tabindex,
                      )("aria-haspopup", p.ariaHasPopup)(
                        "aria-expanded",
                        p.ariaExpanded,
                      )("aria-disabled", p.ariaDisabled),
                      i.HbH(p.cssClasses)));
                },
                inputs: {
                  item: "item",
                  parent: "parent",
                  hasExpandIcon: "hasExpandIcon",
                  hasIcon: [2, "hasIcon", "hasIcon", i.L39],
                  hasIconLabel: [2, "hasIconLabel", "hasIconLabel", i.L39],
                  hasTooltip: [2, "hasTooltip", "hasTooltip", i.L39],
                  hasTooltipOnExpanded: [
                    2,
                    "hasTooltipOnExpanded",
                    "hasTooltipOnExpanded",
                    i.L39,
                  ],
                  isCollapsed: [2, "isCollapsed", "isCollapsed", i.L39],
                  hasCollapsedInitials: [
                    2,
                    "hasCollapsedInitials",
                    "hasCollapsedInitials",
                    i.L39,
                  ],
                  hasBoldRootLevel: [
                    2,
                    "hasBoldRootLevel",
                    "hasBoldRootLevel",
                    i.L39,
                  ],
                },
                outputs: {
                  expandToggle: "expandToggle",
                  itemClick: "itemClick",
                },
                features: [i.OA$],
                ngContentSelectors: A,
                decls: 11,
                vars: 1,
                consts: [
                  ["linkContent", ""],
                  ["defaultContent", ""],
                  ["content", ""],
                  ["itemIconContent", ""],
                  ["itemEndContent", ""],
                  [
                    "role",
                    "none",
                    "tabindex",
                    "-1",
                    "position",
                    "after",
                    1,
                    "eui-menu-item__content",
                    3,
                    "id",
                    "eui-menu-item--disabled",
                    "euiTooltip",
                  ],
                  [
                    "role",
                    "none",
                    1,
                    "eui-menu-item__content",
                    3,
                    "id",
                    "eui-menu-item--disabled",
                    "eui-menu-item--expanded",
                  ],
                  [
                    "role",
                    "none",
                    "tabindex",
                    "-1",
                    "position",
                    "after",
                    1,
                    "eui-menu-item__content",
                    3,
                    "id",
                    "euiTooltip",
                  ],
                  [
                    "tabindex",
                    "-1",
                    "href",
                    "javascript:void(0)",
                    "position",
                    "after",
                    1,
                    "eui-menu-item__link",
                    "eui-menu-item__link-category",
                    3,
                    "click",
                    "euiTooltip",
                  ],
                  [1, "eui-menu-item__link-start-block"],
                  [4, "ngTemplateOutlet"],
                  [1, "eui-menu-item__link-content-block"],
                  [1, "eui-menu-item__link-label-container"],
                  [1, "eui-menu-item__link-label-category"],
                  [1, "eui-menu-item__link-end-block"],
                  [3, "ngTemplateOutletContext"],
                  ["role", "none", 1, "eui-menu-item__content", 3, "id"],
                  [
                    "position",
                    "after",
                    "tabindex",
                    "-1",
                    1,
                    "eui-menu-item__link",
                    3,
                    "click",
                    "routerLink",
                    "queryParams",
                    "routerLinkActive",
                    "euiTooltip",
                  ],
                  [
                    "tabindex",
                    "-1",
                    "href",
                    "javascript:void(0)",
                    "position",
                    "after",
                    1,
                    "eui-menu-item__link",
                    3,
                    "click",
                    "euiTooltip",
                  ],
                  [1, "eui-menu-item__link-content-icon-block"],
                  [1, "eui-menu-item__link-icon", 3, "icon", "fillColor"],
                  [1, "eui-menu-item__link-label"],
                  [
                    "icon",
                    "eui-ecl-external",
                    "size",
                    "2xs",
                    "aria-label",
                    "external link icon",
                    "euiEnd",
                    "",
                    1,
                    "eui-menu-item__label-external",
                  ],
                  [
                    "icon",
                    "ellipse:sharp",
                    "size",
                    "2xs",
                    1,
                    "eui-menu-item__link-marker",
                    3,
                    "fillColor",
                    "aria-label",
                  ],
                  [1, "eui-menu-item__link-icon", 3, "iconUrl", "fillColor"],
                  [
                    "icon",
                    "ellipse:sharp",
                    "fillColor",
                    "neutral-light",
                    "size",
                    "2xs",
                    1,
                    "eui-menu-item__link-icon",
                  ],
                  [3, "class"],
                  [
                    "icon",
                    "square:sharp",
                    "fillColor",
                    "neutral-light",
                    "size",
                    "2xs",
                    1,
                    "eui-menu-item__link-icon",
                    "eui-u-ml-2xs",
                  ],
                  [
                    "icon",
                    "ellipse:sharp",
                    "fillColor",
                    "neutral-light",
                    "size",
                    "2xs",
                    1,
                    "eui-menu-item__link-icon",
                    3,
                    "aria-label",
                  ],
                  [
                    "euiButton",
                    "",
                    "euiRounded",
                    "",
                    "euiIconButton",
                    "",
                    "euiSizeS",
                    "",
                    "euiBasicButton",
                    "",
                    "type",
                    "button",
                    "tabindex",
                    "-1",
                    1,
                    "eui-menu-item__link-action-icon",
                    3,
                    "euiDisabled",
                  ],
                  [1, "eui-menu-item__link-dotted-badge", 3, "euiVariant"],
                  [3, "euiVariant"],
                  [
                    "euiButton",
                    "",
                    "euiRounded",
                    "",
                    "euiIconButton",
                    "",
                    "euiSizeS",
                    "",
                    "euiBasicButton",
                    "",
                    "type",
                    "button",
                    "tabindex",
                    "-1",
                    1,
                    "eui-menu-item__link-action-icon",
                    3,
                    "keydown",
                    "focusout",
                    "focus",
                    "click",
                    "euiDisabled",
                  ],
                  [3, "icon", "fillColor"],
                  [
                    "euiRounded",
                    "",
                    "size",
                    "s",
                    1,
                    "eui-menu-item__link-toggle",
                    3,
                    "icon",
                    "ariaLabel",
                    "tabindex",
                    "euiDisabled",
                  ],
                  [
                    "euiRounded",
                    "",
                    "size",
                    "s",
                    1,
                    "eui-menu-item__link-toggle",
                    3,
                    "buttonClick",
                    "icon",
                    "ariaLabel",
                    "tabindex",
                    "euiDisabled",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(),
                    i.DNE(0, Vi, 3, 3)(
                      1,
                      ja,
                      4,
                      2,
                      "ng-template",
                      null,
                      0,
                      i.C5r,
                    )(3, xr, 8, 5, "ng-template", null, 1, i.C5r)(
                      5,
                      xu,
                      1,
                      0,
                      "ng-template",
                      null,
                      2,
                      i.C5r,
                    )(7, Qe, 2, 1, "ng-template", null, 3, i.C5r)(
                      9,
                      dn,
                      3,
                      3,
                      "ng-template",
                      null,
                      4,
                      i.C5r,
                    )),
                    2 & d && i.vxM(p.item.visible && p.item.filtered ? 0 : -1));
                },
                dependencies: [
                  Me.Wk,
                  Me.wQ,
                  Xe.T3,
                  He.h,
                  He.D9,
                  tt.aV,
                  ti.C4,
                  Tn._x,
                  kt.J8,
                  wo.m1,
                ],
                styles: [
                  '.eui-19 .eui-menu{display:flex;flex-direction:column;gap:0;list-style:none;margin-block-start:0;margin-block-end:0;margin:0;padding:0;width:100%}.eui-19 .eui-menu:focus:not([readonly]){outline:2px solid var(--eui-c-focus)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu:focus-visible:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu [tabindex="0"]:focus:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu--collapsed .eui-menu-filter{transition:none;visibility:hidden}.eui-19 .eui-menu--collapsed .eui-menu-item__link{padding-left:var(--eui-s-m)}.eui-19 .eui-menu--collapsed .eui-menu-item__link-start-block{gap:0}.eui-19 .eui-menu--collapsed .eui-menu-item__link-content-block,.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block{visibility:hidden}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-action-icon{display:none}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-dotted-badge{position:absolute;top:var(--eui-s-2xs);right:var(--eui-s-2xs);visibility:visible}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-toggle{display:inherit;position:absolute;right:calc(-1 * var(--eui-s-xs));transform:scale(.75);visibility:visible}.eui-19 .eui-menu--collapsed .eui-menu-item__link-initials{display:flex;background-color:var(--eui-c-s-secondary-surface-light);border:var(--eui-bw-xs) solid var(--eui-c-divider);border-radius:var(--eui-s-xs);font:var(--eui-f-s-bold);justify-content:center;margin-left:calc(-1 * var(--eui-s-2xs));min-width:var(--eui-s-2xl)}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded:first-child{border-bottom:none;padding-bottom:0}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-m)}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-s)}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link{padding-left:0;min-height:var(--eui-s-2xl)}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link-icon{display:none}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link-content-icon-block{padding-top:0;padding-bottom:0}.eui-19 .eui-menu--no-items{color:var(--eui-c-text-lighter);text-align:center}.eui-19 .eui-menu-filter{display:flex;padding:var(--eui-s-m);position:relative;width:100%}.eui-19 .eui-menu-filter--collapsed{padding:0;height:0}.eui-19 .eui-menu-filter--collapsed .eui-icon-svg{display:none}.eui-19 .eui-menu-item{display:flex;position:relative;width:100%}.eui-19 .eui-menu-item:focus-visible>.eui-menu-item__content{outline:1px solid var(--eui-c-focus-visible);outline-offset:0px}.eui-19 .eui-menu-item .eui-menu-item__content{align-items:center;display:flex;position:relative;width:100%;border:var(--eui-bw-xs) solid transparent}.eui-19 .eui-menu-item__link{align-items:center;color:var(--eui-c-text);cursor:pointer;display:flex;font:var(--eui-f-m);gap:var(--eui-s-xs);min-height:var(--eui-s-4xl);padding:0 var(--eui-s-xs) 0 var(--eui-s-m);margin-bottom:calc(-1 * var(--eui-s-2xs));border-top:1px solid var(--eui-c-divider-light);text-decoration:none;width:100%}.eui-19 .eui-menu-item__link-start-block{align-items:center;display:flex;gap:var(--eui-s-xs)}.eui-19 .eui-menu-item__link-start-block:empty{display:none}.eui-19 .eui-menu-item__link-content-block,.eui-19 .eui-menu-item__link-content-icon-block{display:flex;flex-direction:column;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container{align-items:center;display:flex;position:relative;width:100%}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container .eui-menu-item__link-label,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label{color:var(--eui-c-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container .eui-menu-item__link-label-category,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label-category{cursor:default;font:var(--eui-f-bold);opacity:var(--eui-o-75);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-icon-block{gap:var(--eui-s-2xs);padding:var(--eui-s-2xs);align-items:center}.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container{justify-content:center}.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label{font:var(--eui-f-2xs)!important}.eui-19 .eui-menu-item__link-end-block{align-items:center;display:flex;gap:var(--eui-s-xs)}.eui-19 .eui-menu-item__link:hover:not(.eui-menu-item--disabled):not(.eui-menu-item__link-category){background-color:var(--eui-c-active-bg);text-decoration:none}.eui-19 .eui-menu-item__link--disabled{opacity:var(--eui-o-50);pointer-events:none}.eui-19 .eui-menu-item__link--active:not(.eui-menu-item--disabled){background-color:var(--eui-c-active-bg);font:var(--eui-f-m-bold)}.eui-19 .eui-menu-item__link--active:not(.eui-menu-item--disabled) .eui-menu-item__link-label{color:var(--eui-c-link)}.eui-19 .eui-menu-item--expanded{display:flex;flex-direction:column}.eui-19 .eui-menu-item--expanded .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-3xl)}.eui-19 .eui-menu-item .eui-menu-sub .eui-menu-item__link{min-height:var(--eui-s-3xl);padding-left:var(--eui-s-xl);border-top:0}.eui-19 .eui-menu-item--bold>.eui-menu-item__content>.eui-menu-item__link{font:var(--eui-f-m-bold)}.eui-19 .eui-menu-item--icon-label .eui-menu-item__link{padding:0;gap:0}\n',
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        No = (() => {
          class u {
            constructor() {
              ((this.filterValue = ""),
                (this.isCollapsed = !1),
                (this.hasCollapsedInitials = !1),
                (this.hasFilter = !1),
                (this.hasIcons = !1),
                (this.hasIconsLabels = !1),
                (this.hasTooltip = !0),
                (this.hasTooltipOnExpanded = !1),
                (this.expandAllItems = !1),
                (this.isFlat = !1),
                (this.hasScrollToItem = !1),
                (this.hasBoldRootLevel = !1),
                (this.isClick = new i.bkB()),
                (this.itemClick = new i.bkB()),
                (this.expandToggle = new i.bkB()),
                (this.hasExpandIcon = !0),
                (this.router = (0, i.WQX)(ce.Ix)),
                (this.route = (0, i.WQX)(ce.nX)),
                (this.cd = (0, i.WQX)(i.gRc)));
            }
            get cssClasses() {
              return [
                "eui-menu",
                this.isCollapsed ? "eui-menu--collapsed" : "",
                this.hasIcons ? "" : "eui-menu--no-icons",
                this.isFlat ? "eui-menu--flat" : "",
              ]
                .join(" ")
                .trim();
            }
            stopPropagation(a) {
              a.stopPropagation();
            }
            onKeydown(a) {
              const d = this.focusKeyManager.activeItem?.item.children
                  ? this.findFirstFilteredItem(
                      this.focusKeyManager.activeItem?.item.children,
                    )
                  : void 0,
                p = this.findFocusableItem(d),
                D = this.focusKeyManager.activeItem?.item.parent,
                V = this.findFocusableItem(D);
              switch (a.key) {
                case "Enter":
                  (this.focusKeyManager.activeItem.isLinkItem ||
                    this.focusKeyManager.activeItem.isUrlItem) &&
                    !this.focusKeyManager.activeItem.disabled &&
                    (this.focusKeyManager.activeItem.onClick(a),
                    a.preventDefault());
                  break;
                case "ArrowRight":
                  if (this.isFilterEnabled()) break;
                  if (this.focusKeyManager.activeItem?.item.actionIcon) {
                    this.checkActionIconFocusState();
                    break;
                  }
                  this.focusKeyManager.activeItem?.item.expanded ||
                    (this.focusKeyManager.activeItem?.onExpandToggle(a),
                    this.cd.detectChanges());
                  break;
                case "ArrowLeft":
                  if (this.isFilterEnabled()) break;
                  if (this.focusKeyManager.activeItem?.item.actionIcon) {
                    this.checkActionIconFocusState();
                    break;
                  }
                  this.focusKeyManager.activeItem?.item.expanded &&
                    (this.focusKeyManager.activeItem.onExpandToggle(a),
                    this.cd.detectChanges(),
                    a.preventDefault());
                  break;
                case "ArrowDown":
                  if (
                    (a.preventDefault(),
                    this.shouldRenderChild(
                      this.focusKeyManager.activeItem?.item,
                    ))
                  )
                    (p?.focus(), this.focusKeyManager.updateActiveItem(p));
                  else if (D) {
                    const Ue = this.findFilteredItems(D.children),
                      Ys = this.findFocusableItem(Ue[Ue?.length - 1]);
                    this.focusKeyManager.activeItem === Ys
                      ? (this.focusKeyManager.updateActiveItem(V),
                        this.focusKeyManager.setNextItemActive())
                      : this.focusKeyManager.setActiveItem(
                          this.focusKeyManager.activeItemIndex + 1,
                        );
                  } else
                    (this.focusKeyManager.skipPredicate(
                      (Ue) => null != Ue.parent || !1 === Ue.item.visible,
                    ),
                      this.focusKeyManager.onKeydown(a));
                  break;
                case "ArrowUp":
                  if ((a.preventDefault(), D)) {
                    const Ut = this.findFilteredItems(D.children)[0],
                      En = this.findFocusableItem(Ut);
                    this.focusKeyManager.setActiveItem(
                      this.focusKeyManager.activeItem === En
                        ? V
                        : this.focusKeyManager.activeItemIndex - 1,
                    );
                  } else if (
                    (this.focusKeyManager.onKeydown(a),
                    this.shouldRenderChild(
                      this.focusKeyManager.activeItem?.item,
                    ))
                  ) {
                    const Ue = this.findFilteredItems(
                        this.focusKeyManager.activeItem?.item.children,
                      ),
                      En = this.findFocusableItem(Ue[Ue.length - 1]);
                    this.focusKeyManager.setActiveItem(En);
                  }
                  break;
                default:
                  this.focusKeyManager.onKeydown(a);
              }
            }
            ngOnChanges(a) {
              if (a.items) {
                this.items = this.configureItems(this.items);
                const p = this.findMostRelevantItem(
                  this.router.url,
                  this.items,
                );
                p && this.expandToGivenItem(p);
              }
              (a.expandAllItems &&
                (this.items = this.setExpandedToAllItems(
                  (0, Jn.c)(a.expandAllItems.currentValue),
                  this.items,
                )),
                a.filterValue &&
                  this.hasFilter &&
                  this.onFilter(a.filterValue.currentValue ?? ""),
                a.hasCollapsedInitials &&
                  ((this.hasCollapsedInitials =
                    a.hasCollapsedInitials.currentValue),
                  (this.items = this.configureItems(this.items))),
                a.hasScrollToItem &&
                  ((this.hasScrollToItem = a.hasScrollToItem.currentValue),
                  this.hasScrollToItem && this.scrollToItem(this.router.url)),
                a.hasFilter &&
                  ((this.hasFilter = a.hasFilter.currentValue),
                  this.hasFilter ||
                    (this.items = this.filterMenuItems(this.items, ""))));
            }
            ngOnInit() {
              (this.searchFilterLabel ||
                (this.searchFilterLabel = "Search filter"),
                this.router.events.subscribe((a) => {
                  a instanceof ce.wF &&
                    this.hasScrollToItem &&
                    this.scrollToItem(a.url);
                }));
            }
            ngAfterViewInit() {
              ((this.focusKeyManager = new Zt(
                this.menuItemsComponents,
              ).withWrap()),
                this.hasScrollToItem && this.scrollToItem(this.router.url));
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            onClick(a) {
              (a.disabled ||
                (a.urlExternal
                  ? window.open(a.urlExternal, a.urlExternalTarget || "_blank")
                  : a.url
                    ? this.router.navigate([a.url], {
                        relativeTo: this.route,
                        fragment: this.fragmentId,
                      })
                    : "function" == typeof a.command
                      ? a.command()
                      : this.onExpandToggle(a),
                a.link &&
                  (this.items = this.items?.map(
                    (p) => (
                      (p.active = !1),
                      p.id === a.id && (p.active = !0),
                      p
                    ),
                  ))),
                this.isClick.emit(!0),
                this.itemClick.emit(a));
              const d = this.findFocusableItem(a);
              this.focusKeyManager.updateActiveItem(d);
            }
            onExpandToggle(a) {
              a.children &&
                (this.expandToggle.emit(a),
                this.onExpandToggled(a, this.items));
            }
            onMenuFilterClick(a) {
              (0, $.xh)(a);
            }
            onFilter(a) {
              const d = a instanceof Event ? a.target.value : a;
              ((this.items = this.filterMenuItems(this.items, d)),
                (this.hasExpandIcon = !this.isFilterEnabled()));
            }
            shouldRenderChild(a) {
              return (
                a?.children &&
                (a?.expanded ||
                  (this.hasFilter && a?.filtered && this.isFilterEnabled()))
              );
            }
            findFocusableItem(a) {
              return this.menuItemsComponents.find(
                (d) => d.item.label === a?.label && d.item.id === a.id,
              );
            }
            findFirstFilteredItem(a) {
              return a.find((d) => d.filtered);
            }
            findFilteredItems(a) {
              return a.filter((d) => d.filtered);
            }
            checkActionIconFocusState() {
              this.focusKeyManager.activeItem.isActionIconFocused
                ? this.focusKeyManager.activeItem.focus()
                : this.focusKeyManager.activeItem.focusActionIcon();
            }
            filterMenuItems(a, d) {
              return (
                a?.map((p) => {
                  const D =
                    -1 !== p.label?.toLowerCase().indexOf(d.toLowerCase());
                  return (
                    p.children
                      ? ((p.children = this.filterMenuItems(p.children, d)),
                        (p.filtered =
                          p.children.filter((V) => !0 === V.filtered).length >
                          0))
                      : (p.filtered = D || !1),
                    p
                  );
                }) || []
              );
            }
            setExpandedToAllItems(a, d) {
              return d?.map(
                (p) => (
                  p.children &&
                    ((p.expanded = p.expanded ?? a),
                    (p.children = this.setExpandedToAllItems(a, p.children))),
                  Object.assign(p, {
                    visible: void 0 === p.visible || p.visible,
                  })
                ),
              );
            }
            onExpandToggled(a, d) {
              const p = d?.indexOf(a);
              p > -1
                ? (d[p].expanded = !d[p].expanded)
                : d.forEach((D) => {
                    D.children && this.onExpandToggled(a, D.children);
                  });
            }
            configureItems(a, d) {
              return a?.map((p) => {
                if (
                  (p.children &&
                    ((p.children = this.configureItems(p.children, p)),
                    this.expandAllItems && (p.expanded = !0)),
                  d && (p.parent = d),
                  (this.items = this.items?.map((D) => this.setRandomId(D))),
                  p.label && this.hasCollapsedInitials)
                ) {
                  const D = p.label.split(" ");
                  p.initials =
                    1 === D.length
                      ? `${p.label.substring(0, 1)}${p.label.substring(1, 1)}`
                      : `${D[0].substring(0, 1)}${D[1].substring(0, 1)}`;
                }
                return Object.assign(p, {
                  visible: void 0 === p.visible || p.visible,
                  filtered: !0,
                });
              });
            }
            findMostRelevantItem(a, d, p) {
              return d
                ? (d.forEach((D) => {
                    (D.url &&
                      a.indexOf(D.url.substring(1)) > -1 &&
                      (p = this.getMostRelevantItem(a, p, D)),
                      D.children &&
                        (p = this.findMostRelevantItem(a, D.children, p)));
                  }),
                  p)
                : null;
            }
            getMostRelevantItem(a, d, p) {
              const D = a.replace(d?.url || "", ""),
                V = a.replace(p?.url || "", "");
              return D.length < V.length ? d : p;
            }
            expandToGivenItem(a) {
              a.parent &&
                (setTimeout(() => (a.parent.expanded = !0)),
                this.expandToGivenItem(a.parent));
            }
            setRandomId(a) {
              return (
                (a.id = a.id || crypto.randomUUID()),
                a.children &&
                  (a.children = a.children.map((d) => this.setRandomId(d))),
                a
              );
            }
            scrollToItem(a) {
              const d = this.findMostRelevantItem(a, this.items);
              d &&
                (this.expandToGivenItem(d),
                setTimeout((p) => {
                  const D = this.menuItemsComponents?.find(
                    (V) => V.item.id === d.id,
                  );
                  D &&
                    !D.elementIsVisibleInViewport() &&
                    D.scrollIntoView({ behavior: "smooth" });
                }, 300));
            }
            isFilterEnabled() {
              return this.filterInput?.nativeElement?.value.length > 0;
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-menu"]],
                viewQuery: function (d, p) {
                  if (
                    (1 & d &&
                      (i.GBs(Wn, 5, i.aKT), i.GBs(ho, 5, i.aKT), i.GBs(tr, 5)),
                    2 & d)
                  ) {
                    let D;
                    (i.mGM((D = i.lsd())) && (p.filterInput = D.first),
                      i.mGM((D = i.lsd())) && (p.menubar = D.first),
                      i.mGM((D = i.lsd())) && (p.menuItemsComponents = D));
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function (V) {
                      return p.stopPropagation(V);
                    }),
                    2 & d && i.HbH(p.cssClasses));
                },
                inputs: {
                  items: "items",
                  searchFilterLabel: "searchFilterLabel",
                  externalLinkLabel: "externalLinkLabel",
                  fragmentId: "fragmentId",
                  filterValue: "filterValue",
                  isCollapsed: [2, "isCollapsed", "isCollapsed", i.L39],
                  hasCollapsedInitials: [
                    2,
                    "hasCollapsedInitials",
                    "hasCollapsedInitials",
                    i.L39,
                  ],
                  hasFilter: [2, "hasFilter", "hasFilter", i.L39],
                  hasIcons: [2, "hasIcons", "hasIcons", i.L39],
                  hasIconsLabels: [
                    2,
                    "hasIconsLabels",
                    "hasIconsLabels",
                    i.L39,
                  ],
                  hasTooltip: [2, "hasTooltip", "hasTooltip", i.L39],
                  hasTooltipOnExpanded: [
                    2,
                    "hasTooltipOnExpanded",
                    "hasTooltipOnExpanded",
                    i.L39,
                  ],
                  expandAllItems: [
                    2,
                    "expandAllItems",
                    "expandAllItems",
                    i.L39,
                  ],
                  isFlat: [2, "isFlat", "isFlat", i.L39],
                  hasScrollToItem: [
                    2,
                    "hasScrollToItem",
                    "hasScrollToItem",
                    i.L39,
                  ],
                  hasBoldRootLevel: [
                    2,
                    "hasBoldRootLevel",
                    "hasBoldRootLevel",
                    i.L39,
                  ],
                },
                outputs: {
                  isClick: "isClick",
                  itemClick: "itemClick",
                  expandToggle: "expandToggle",
                },
                features: [i.OA$],
                decls: 7,
                vars: 2,
                consts: [
                  ["menubar", ""],
                  ["menuItemTemplateRef", ""],
                  ["filterInput", ""],
                  [1, "eui-menu-filter", 3, "eui-menu-filter--collapsed"],
                  [
                    "euiList",
                    "",
                    "role",
                    "menubar",
                    "aria-orientation",
                    "vertical",
                    "tabindex",
                    "0",
                    1,
                    "eui-menu",
                    3,
                    "keydown",
                  ],
                  [1, "eui-menu--no-items"],
                  [1, "eui-menu-filter", 3, "click"],
                  [
                    "icon",
                    "search:outline",
                    "fillColor",
                    "neutral-lighter",
                    "aria-label",
                    "Search Icon",
                  ],
                  [
                    "euiInputText",
                    "",
                    3,
                    "input",
                    "euiClearable",
                    "placeholder",
                    "value",
                  ],
                  [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                  [
                    3,
                    "item",
                    "parent",
                    "hasIcon",
                    "hasIconLabel",
                    "hasTooltip",
                    "hasTooltipOnExpanded",
                    "isCollapsed",
                    "hasBoldRootLevel",
                    "hasCollapsedInitials",
                    "hasExpandIcon",
                  ],
                  [
                    3,
                    "expandToggle",
                    "itemClick",
                    "item",
                    "parent",
                    "hasIcon",
                    "hasIconLabel",
                    "hasTooltip",
                    "hasTooltipOnExpanded",
                    "isCollapsed",
                    "hasBoldRootLevel",
                    "hasCollapsedInitials",
                    "hasExpandIcon",
                  ],
                  [
                    "euiList",
                    "",
                    "role",
                    "menu",
                    "tabindex",
                    "-1",
                    1,
                    "eui-menu",
                    "eui-menu-sub",
                  ],
                ],
                template: function (d, p) {
                  if (1 & d) {
                    const D = i.RV6();
                    (i.DNE(0, Is, 5, 6, "div", 3),
                      i.j41(1, "ul", 4, 0),
                      i.bIt("keydown", function (Ue) {
                        return (i.eBV(D), i.Njj(p.onKeydown(Ue)));
                      }),
                      i.DNE(3, hf, 2, 0)(4, Ds, 2, 0, "span", 5),
                      i.k0s(),
                      i.DNE(5, Ni, 1, 1, "ng-template", null, 1, i.C5r));
                  }
                  2 & d &&
                    (i.vxM(p.hasFilter ? 0 : -1),
                    i.R7$(3),
                    i.vxM(p.items ? 3 : 4));
                },
                dependencies: [Xe.T3, tr, tt.aV, ye.am, g.es],
                styles: [
                  '.eui-19 .eui-menu{display:flex;flex-direction:column;gap:0;list-style:none;margin-block-start:0;margin-block-end:0;margin:0;padding:0;width:100%}.eui-19 .eui-menu:focus:not([readonly]){outline:2px solid var(--eui-c-focus)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu:focus-visible:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu [tabindex="0"]:focus:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-19 .eui-menu--collapsed .eui-menu-filter{transition:none;visibility:hidden}.eui-19 .eui-menu--collapsed .eui-menu-item__link{padding-left:var(--eui-s-m)}.eui-19 .eui-menu--collapsed .eui-menu-item__link-start-block{gap:0}.eui-19 .eui-menu--collapsed .eui-menu-item__link-content-block,.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block{visibility:hidden}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-action-icon{display:none}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-dotted-badge{position:absolute;top:var(--eui-s-2xs);right:var(--eui-s-2xs);visibility:visible}.eui-19 .eui-menu--collapsed .eui-menu-item__link-end-block .eui-menu-item__link-toggle{display:inherit;position:absolute;right:calc(-1 * var(--eui-s-xs));transform:scale(.75);visibility:visible}.eui-19 .eui-menu--collapsed .eui-menu-item__link-initials{display:flex;background-color:var(--eui-c-s-secondary-surface-light);border:var(--eui-bw-xs) solid var(--eui-c-divider);border-radius:var(--eui-s-xs);font:var(--eui-f-s-bold);justify-content:center;margin-left:calc(-1 * var(--eui-s-2xs));min-width:var(--eui-s-2xl)}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded:first-child{border-bottom:none;padding-bottom:0}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-m)}.eui-19 .eui-menu--collapsed .eui-menu-item--expanded .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-s)}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link{padding-left:0;min-height:var(--eui-s-2xl)}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link-icon{display:none}.eui-19 .eui-menu--collapsed .eui-menu-item--icon-label .eui-menu-sub .eui-menu-item__link-content-icon-block{padding-top:0;padding-bottom:0}.eui-19 .eui-menu--no-items{color:var(--eui-c-text-lighter);text-align:center}.eui-19 .eui-menu-filter{display:flex;padding:var(--eui-s-m);position:relative;width:100%}.eui-19 .eui-menu-filter--collapsed{padding:0;height:0}.eui-19 .eui-menu-filter--collapsed .eui-icon-svg{display:none}.eui-19 .eui-menu-item{display:flex;position:relative;width:100%}.eui-19 .eui-menu-item:focus-visible>.eui-menu-item__content{outline:1px solid var(--eui-c-focus-visible);outline-offset:0px}.eui-19 .eui-menu-item .eui-menu-item__content{align-items:center;display:flex;position:relative;width:100%;border:var(--eui-bw-xs) solid transparent}.eui-19 .eui-menu-item__link{align-items:center;color:var(--eui-c-text);cursor:pointer;display:flex;font:var(--eui-f-m);gap:var(--eui-s-xs);min-height:var(--eui-s-4xl);padding:0 var(--eui-s-xs) 0 var(--eui-s-m);margin-bottom:calc(-1 * var(--eui-s-2xs));border-top:1px solid var(--eui-c-divider-light);text-decoration:none;width:100%}.eui-19 .eui-menu-item__link-start-block{align-items:center;display:flex;gap:var(--eui-s-xs)}.eui-19 .eui-menu-item__link-start-block:empty{display:none}.eui-19 .eui-menu-item__link-content-block,.eui-19 .eui-menu-item__link-content-icon-block{display:flex;flex-direction:column;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container{align-items:center;display:flex;position:relative;width:100%}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container .eui-menu-item__link-label,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label{color:var(--eui-c-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-block .eui-menu-item__link-label-container .eui-menu-item__link-label-category,.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label-category{cursor:default;font:var(--eui-f-bold);opacity:var(--eui-o-75);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-19 .eui-menu-item__link-content-icon-block{gap:var(--eui-s-2xs);padding:var(--eui-s-2xs);align-items:center}.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container{justify-content:center}.eui-19 .eui-menu-item__link-content-icon-block .eui-menu-item__link-label-container .eui-menu-item__link-label{font:var(--eui-f-2xs)!important}.eui-19 .eui-menu-item__link-end-block{align-items:center;display:flex;gap:var(--eui-s-xs)}.eui-19 .eui-menu-item__link:hover:not(.eui-menu-item--disabled):not(.eui-menu-item__link-category){background-color:var(--eui-c-active-bg);text-decoration:none}.eui-19 .eui-menu-item__link--disabled{opacity:var(--eui-o-50);pointer-events:none}.eui-19 .eui-menu-item__link--active:not(.eui-menu-item--disabled){background-color:var(--eui-c-active-bg);font:var(--eui-f-m-bold)}.eui-19 .eui-menu-item__link--active:not(.eui-menu-item--disabled) .eui-menu-item__link-label{color:var(--eui-c-link)}.eui-19 .eui-menu-item--expanded{display:flex;flex-direction:column}.eui-19 .eui-menu-item--expanded .eui-menu-item--expanded .eui-menu-sub .eui-menu-item__link{padding-left:var(--eui-s-3xl)}.eui-19 .eui-menu-item .eui-menu-sub .eui-menu-item__link{min-height:var(--eui-s-3xl);padding-left:var(--eui-s-xl);border-top:0}.eui-19 .eui-menu-item--bold>.eui-menu-item__content>.eui-menu-item__link{font:var(--eui-f-m-bold)}.eui-19 .eui-menu-item--icon-label .eui-menu-item__link{padding:0;gap:0}\n',
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })();
      var jr = P(3294);
      function Xn(u, E) {
        return (0, jr.F)((a, d) => (E ? E(a[u], d[u]) : a[u] === d[u]));
      }
      var Hi = P(6354),
        Ro = P(1090);
      function Ou(u, E) {
        1 & u && (i.j41(0, "h4"), i.EFF(1, "EU official languages"), i.k0s());
      }
      function Fu(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "div", 1)(1, "div", 2)(2, "span", 3),
            i.EFF(3),
            i.k0s(),
            i.j41(4, "button", 4),
            i.bIt("click", function () {
              const p = i.eBV(a).$implicit,
                D = i.XpG(2);
              return i.Njj(D.selectLanguage(p));
            }),
            i.EFF(5),
            i.k0s()()());
        }
        if (2 & u) {
          const a = E.$implicit,
            d = i.XpG(2);
          (i.R7$(3),
            i.JRh(a.code),
            i.R7$(),
            i.Mz_("e2eAttr", "eui-language-selector-item_", a.code, ""),
            i.Y8G(
              "euiBasicButton",
              a.code !==
                (null == d.config ? null : d.config.selectedLanguage.code),
            ),
            i.R7$(),
            i.SpI(" ", a.label, " "));
        }
      }
      function Qa(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 0), i.Z7z(1, Fu, 6, 5, "div", 1, i.fX1), i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(), i.Dyx(a));
        }
      }
      function nr(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "div", 1)(1, "div", 2)(2, "span", 3),
            i.EFF(3),
            i.k0s(),
            i.j41(4, "button", 4),
            i.bIt("click", function () {
              const p = i.eBV(a).$implicit,
                D = i.XpG(3);
              return i.Njj(D.selectLanguage(p));
            }),
            i.EFF(5),
            i.k0s()()());
        }
        if (2 & u) {
          const a = E.$implicit,
            d = i.XpG(3);
          (i.R7$(3),
            i.JRh(a.code),
            i.R7$(),
            i.Mz_("e2eAttr", "eui-language-selector-item_", a.code, ""),
            i.Y8G(
              "euiBasicButton",
              a.code !==
                (null == d.config ? null : d.config.selectedLanguage.code),
            ),
            i.R7$(),
            i.SpI(" ", a.label, " "));
        }
      }
      function Lo(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 5), i.Z7z(1, nr, 6, 5, "div", 1, i.fX1), i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(), i.Dyx(a));
        }
      }
      function b(u, E) {
        if (
          (1 & u &&
            (i.nrm(0, "br"),
            i.j41(1, "h4"),
            i.EFF(2, "Non-EU Languages"),
            i.k0s(),
            i.Z7z(3, Lo, 3, 0, "div", 5, i.fX1)),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(3), i.Dyx(a.additionalLanguageRows));
        }
      }
      function k(u, E) {}
      function h(u, E) {
        1 & u && i.DNE(0, k, 0, 0, "ng-template");
      }
      function v(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 2),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onClick());
            }),
            i.DNE(1, h, 1, 0, null, 3),
            i.j41(2, "span", 4),
            i.EFF(3),
            i.nI1(4, "async"),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(),
            d = i.sdS(4);
          (i.Y8G("euiBranding", a.isToolbarSelector),
            i.BMQ("aria-label", a.ariaLabel),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(2),
            i.JRh(i.bMT(4, 4, a.appShellService.state$).activeLanguage));
        }
      }
      function S(u, E) {}
      function F(u, E) {
        1 & u && i.DNE(0, S, 0, 0, "ng-template");
      }
      function X(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 7),
            i.bIt("click", function () {
              const p = i.eBV(a).$implicit,
                D = i.XpG(2);
              return i.Njj(D.onLanguageChanged(p));
            }),
            i.EFF(1),
            i.k0s());
        }
        if (2 & u) {
          const a = E.$implicit;
          (i.x72("data-e2e", "eui-language-selector-item_", a.code, ""),
            i.R7$(),
            i.Lme(" ", a.label, " (", a.code, ") "));
        }
      }
      function he(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "eui-dropdown")(1, "button", 1),
            i.DNE(2, F, 1, 0, null, 3),
            i.j41(3, "span", 4),
            i.EFF(4),
            i.nI1(5, "async"),
            i.k0s()(),
            i.j41(6, "eui-dropdown-content")(7, "div", 5),
            i.Z7z(8, X, 2, 4, "button", 6, i.fX1),
            i.k0s()()()),
          2 & u)
        ) {
          const a = i.XpG(),
            d = i.sdS(4);
          (i.R7$(),
            i.Y8G("euiBranding", a.isToolbarSelector),
            i.BMQ("aria-label", a.ariaLabel),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(2),
            i.JRh(i.bMT(5, 4, a.appShellService.state$).activeLanguage),
            i.R7$(4),
            i.Dyx(a.languages));
        }
      }
      function je(u, E) {}
      function vt(u, E) {
        1 & u && i.DNE(0, je, 0, 0, "ng-template");
      }
      function yt(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 2),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onOpen());
            }),
            i.DNE(1, vt, 1, 0, null, 3),
            i.j41(2, "span", 4),
            i.EFF(3),
            i.nI1(4, "async"),
            i.k0s()());
        }
        if (2 & u) {
          let a;
          const d = i.XpG(),
            p = i.sdS(4);
          (i.Y8G("euiBranding", d.isToolbarSelector),
            i.BMQ("aria-label", d.ariaLabel),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", p),
            i.R7$(2),
            i.JRh(
              null == (a = i.bMT(4, 4, d.appShellService.state$))
                ? null
                : a.activeLanguage,
            ));
        }
      }
      function Zn(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 8);
      }
      let mo = (() => {
          class u {
            constructor() {
              ((this.config = (0, i.WQX)(Xt.yw, { optional: !0 })),
                (this.languageRows = []),
                (this.additionaLanguageRows = []),
                (this.additionalLanguageRows = []),
                (this.euiDialogService = (0, i.WQX)(Xt.FI)));
            }
            ngOnInit() {
              ((this.languageRows = this.prepareLanguageRows(
                Ro.FR.filterEULanguages(this.config?.languages),
              )),
                (this.additionalLanguageRows = this.prepareLanguageRows(
                  Ro.FR.filterNonEULanguages(this.config?.languages),
                )),
                (this.additionaLanguageRows = this.additionalLanguageRows));
            }
            selectLanguage(a) {
              if (this.selectedLanguage?.code !== a.code)
                for (const d of this.config?.languages || [])
                  if (d.code === a.code) {
                    this.selectedLanguage = d;
                    break;
                  }
              (this.config?.languageChanged(a),
                this.euiDialogService.closeDialog());
            }
            prepareLanguageRows(a) {
              return a.length
                ? a.reduce((d, p, D) => {
                    const V = Math.floor(D / 4);
                    return (d[V] || (d[V] = []), d[V].push(p), d);
                  }, [])
                : [];
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-modal-selector"]],
                decls: 4,
                vars: 2,
                consts: [
                  ["id", "eu_languages", 1, "row"],
                  [1, "col-md-6", "mb-2"],
                  [1, "eui-u-flex", "eui-u-mb-xs"],
                  [1, "eui-u-text-uppercase", "eui-u-width-2"],
                  [
                    "type",
                    "button",
                    "euiButton",
                    "",
                    "euiPrimary",
                    "",
                    3,
                    "click",
                    "e2eAttr",
                    "euiBasicButton",
                  ],
                  ["id", "extra_languages", 1, "row"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.DNE(0, Ou, 2, 0, "h4"),
                    i.Z7z(1, Qa, 3, 0, "div", 0, i.fX1),
                    i.DNE(3, b, 5, 0)),
                    2 & d &&
                      (i.vxM(
                        (null == p.additionalLanguageRows
                          ? null
                          : p.additionalLanguageRows.length) > 0
                          ? 0
                          : -1,
                      ),
                      i.R7$(),
                      i.Dyx(p.languageRows),
                      i.R7$(2),
                      i.vxM(
                        (null == p.additionalLanguageRows
                          ? null
                          : p.additionalLanguageRows.length) > 0
                          ? 3
                          : -1,
                      )));
                },
                dependencies: [kt.J8],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        li = (() => {
          class u {
            constructor() {
              ((this.hasLanguageSelection = !0),
                (this.isToolbarSelector = !1),
                (this.euiPrimary = !1),
                (this.languageSelectorClick = new i.bkB()),
                (this.appShellService = (0, i.WQX)($.OQR)),
                (this.destroy$ = new yn.B()),
                (this.isAriaLabelChanged = !1),
                (this.cd = (0, i.WQX)(i.gRc)),
                (this.euiDialogService = (0, i.WQX)(Xt.FI)),
                (this.translateService = (0, i.WQX)(He.c$)),
                (this.elRef = (0, i.WQX)(i.aKT)));
            }
            get cssClasses() {
              return [
                "eui-language-selector",
                this.languages?.length <= 1
                  ? "eui-language-selector--empty"
                  : "",
                this.isToolbarSelector
                  ? "eui-language-selector--toolbar-selector"
                  : "",
              ]
                .join(" ")
                .trim();
            }
            get isShowDropDown() {
              return this.languages?.length > 1 && this.languages?.length < 4;
            }
            get isShowModal() {
              return this.languages?.length >= 4;
            }
            ngOnChanges(a) {
              a &&
                a.ariaLabel &&
                ((this.isAriaLabelChanged = !0),
                (this.ariaLabel = a.ariaLabel.currentValue));
            }
            ngOnInit() {
              (this.appShellService.state$
                .pipe(
                  (0, Vn.Q)(this.destroy$),
                  Xn("languages"),
                  (0, Hi.T)((a) => a.languages),
                )
                .subscribe((a) => {
                  ((this.languages = a
                    ? Ro.FR.getOrderedLanguages(a)
                    : Ro.FR.getLanguages()),
                    this.cd.detectChanges());
                }),
                this.appShellService.state$
                  .pipe(
                    (0, Vn.Q)(this.destroy$),
                    Xn("activeLanguage"),
                    (0, Hi.T)((a) => a?.activeLanguage),
                  )
                  .subscribe((a) => {
                    ((this.selectedLanguage = this.getLanguage(a)),
                      this.isAriaLabelChanged ||
                        (this.ariaLabel = `Change Language - Current Language: ${this.selectedLanguage.label}`),
                      this.cd.detectChanges());
                  }));
            }
            ngAfterViewInit() {
              let a = !1;
              try {
                a = this.elRef.nativeElement.closest("eui-toolbar");
              } catch {}
              a &&
                setTimeout(() => {
                  this.isToolbarSelector = !0;
                }, 1);
            }
            ngOnDestroy() {
              (this.destroy$.next(!0), this.destroy$.unsubscribe());
            }
            onLanguageChanged(a) {
              this.appShellService.setState({
                ...this.appShellService.state,
                activeLanguage: a.code,
              });
            }
            onOpen(
              a = this.translateService.instant(
                "eui.languageSelector.modalTitle",
              ),
            ) {
              this.euiDialogService.openDialog(
                new Xt.A$({
                  title: a,
                  hasFooter: !1,
                  hasClosedOnClickOutside: !0,
                  bodyComponent: {
                    component: mo,
                    config: {
                      languages: this.languages,
                      selectedLanguage: this.selectedLanguage,
                      languageChanged: (d) => this.onLanguageChanged(d),
                    },
                  },
                }),
              );
            }
            onClick() {
              this.languageSelectorClick.emit();
            }
            getLanguage(a) {
              return this.languages.find((d) => d.code === a);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-language-selector"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  hasLanguageSelection: [
                    2,
                    "hasLanguageSelection",
                    "hasLanguageSelection",
                    i.L39,
                  ],
                  isToolbarSelector: [
                    2,
                    "isToolbarSelector",
                    "isToolbarSelector",
                    i.L39,
                  ],
                  euiPrimary: [2, "euiPrimary", "euiPrimary", i.L39],
                  ariaLabel: [0, "aria-label", "ariaLabel"],
                },
                outputs: { languageSelectorClick: "languageSelectorClick" },
                features: [i.Jv_([Xt.FI]), i.OA$],
                decls: 5,
                vars: 1,
                consts: [
                  ["languageSelectorIcon", ""],
                  [
                    "euiButton",
                    "",
                    "euiBasicButton",
                    "",
                    1,
                    "eui-language-selector__button",
                    3,
                    "euiBranding",
                  ],
                  [
                    "euiButton",
                    "",
                    "euiBasicButton",
                    "",
                    1,
                    "eui-language-selector__button",
                    3,
                    "click",
                    "euiBranding",
                  ],
                  [4, "ngTemplateOutlet"],
                  [1, "eui-language-selector__code"],
                  [1, "eui-language-selector-menu"],
                  [
                    "euiDropdownItem",
                    "",
                    1,
                    "eui-language-selector-menu-language-item",
                  ],
                  [
                    "euiDropdownItem",
                    "",
                    1,
                    "eui-language-selector-menu-language-item",
                    3,
                    "click",
                  ],
                  ["icon", "eui-ecl-global"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    i.DNE(
                      0,
                      v,
                      5,
                      6,
                      "button",
                      1,
                    )(1, he, 10, 6, "eui-dropdown")(2, yt, 5, 6, "button", 1)(
                      3,
                      Zn,
                      1,
                      0,
                      "ng-template",
                      null,
                      0,
                      i.C5r,
                    ),
                    2 & d &&
                      i.vxM(
                        p.hasLanguageSelection
                          ? p.hasLanguageSelection && p.isShowDropDown
                            ? 1
                            : p.hasLanguageSelection && p.isShowModal
                              ? 2
                              : -1
                          : 0,
                      ));
                },
                dependencies: [Xe.Jj, Xe.T3, Hn.mf, Hn.lv, Hn.LL, tt.aV, kt.J8],
                styles: [
                  ".eui-19 .eui-language-selector{align-items:center;cursor:pointer;display:flex;position:relative}.eui-19 .eui-language-selector__button{padding-left:var(--eui-s-s);padding-right:var(--eui-s-s)}.eui-19 .eui-language-selector__code{text-transform:uppercase}.eui-19 .eui-language-selector-menu-language-item{padding:var(--eui-s-m);border-bottom:1px solid var(--eui-c-divider);text-align:center;cursor:pointer}.eui-19 .eui-language-selector-menu-language-item:hover{background:var(--eui-c-hover)}.eui-19 .eui-language-selector--empty{display:none}.eui-19.eui-t-dark .eui-language-selector__button{--_basic-color: var(--eui-c-black)}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })();
      var mf = P(2318);
      let Pu = (() => {
          class u {
            get isDimmerActive() {
              return this._isDimmerActive;
            }
            set isDimmerActive(a) {
              this._isDimmerActive = (0, Jn.c)(a);
            }
            get cssClasses() {
              return [
                "eui-dimmer",
                this._isDimmerActive ? "eui-dimmer--active" : "",
              ]
                .join(" ")
                .trim();
            }
            constructor() {
              ((this.asService = (0, i.WQX)($.OQR)),
                (this.e2eAttr = "eui-dimmer"),
                (this._isDimmerActive = !1),
                (this._DEBUG = !1),
                (0, i.WQX)(ce.Ix)
                  .events.pipe((0, ki.p)((d) => d instanceof ce.Z))
                  .subscribe((d) => {
                    (this._DEBUG &&
                      (console.group("NavigationStart Event"),
                      console.log("navigation id:", d.id),
                      console.log("route:", d.url),
                      console.log("trigger:", d.navigationTrigger)),
                      d.restoredState &&
                        (this.asService.setDimmerActiveState(!1),
                        (this._isDimmerActive = !1),
                        this._DEBUG &&
                          console.warn(
                            "restoring navigation id:",
                            d.restoredState.navigationId,
                          )),
                      this._DEBUG && console.groupEnd());
                  }));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-dimmer"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("data-e2e", p.e2eAttr), i.HbH(p.cssClasses));
                },
                inputs: {
                  isDimmerActive: "isDimmerActive",
                  e2eAttr: "e2eAttr",
                },
                decls: 0,
                vars: 0,
                template: function (d, p) {},
                styles: [
                  ".eui-19 .eui-dimmer{animation:none;background-color:#00000026;height:100vh;left:0;opacity:0;position:fixed;top:0;width:0;z-index:var(--eui-zi-overlay)}.eui-19 .eui-dimmer--active{animation:dimmer-fadeIn var(--eui-base-animation-duration-fast);opacity:1;width:100%}.eui-19 .eui-dimmer:not(.eui-dimmer--active){animation:dimmer-fadeOut var(--eui-base-animation-duration-fast)}@keyframes dimmer-fadeIn{0%{opacity:0}to{opacity:1}}@keyframes dimmer-fadeOut{0%{opacity:1}to{opacity:0}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        ju = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({});
            }
          }
          return u;
        })();
      var Ka = P(9064);
      const ws = (u, E, a, d, p, D) => ({
        "eui-growl-item-container--info eui--info": u,
        "eui-growl-item-container--warning eui--warning": E,
        "eui-growl-item-container--danger eui--danger": a,
        "eui-growl-item-container--success eui--success": d,
        "eui-growl-item-container--filled": p,
        "eui-growl--sticky": D,
      });
      function lt(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "div", 2)(1, "div", 3)(2, "div", 4),
            i.nrm(3, "eui-icon-state", 5),
            i.j41(4, "span", 6),
            i.EFF(5),
            i.k0s()(),
            i.nrm(6, "div", 7),
            i.j41(7, "eui-icon-button", 8),
            i.bIt("buttonClick", function () {
              const p = i.eBV(a).$implicit,
                D = i.XpG();
              return i.Njj(D.remove(p));
            }),
            i.k0s()()());
        }
        if (2 & u) {
          const a = E.$implicit,
            d = i.XpG();
          (i.AVh(
            "eui-u-anim--slideInUp",
            "bottom-left" === d.position ||
              "bottom-center" === d.position ||
              "bottom-right" === d.position,
          )(
            "eui-u-anim--slideInDown",
            "top-left" === d.position ||
              "top-center" === d.position ||
              "top-right" === d.position,
          ),
            i.Y8G(
              "ngClass",
              i.l4e(
                10,
                ws,
                "info" === a.severity,
                "warning" === a.severity,
                "danger" === a.severity,
                "success" === a.severity,
                a.filled,
                d.sticky,
              ),
            ),
            i.R7$(3),
            i.Y8G("euiVariant", a.severity),
            i.R7$(),
            i.Y8G("id", d.titleId),
            i.R7$(),
            i.JRh(a.summary),
            i.R7$(),
            i.Y8G("id", d.contentId)("innerHTML", a.detail, i.npT));
        }
      }
      function z(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "div", 1)(1, "div", 3)(2, "div", 4),
            i.nrm(3, "eui-icon-svg", 9),
            i.j41(4, "span", 10),
            i.EFF(5),
            i.nI1(6, "translate"),
            i.k0s()(),
            i.j41(7, "eui-icon-button", 8),
            i.bIt("buttonClick", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.removeAll());
            }),
            i.k0s()()());
        }
        2 & u && (i.R7$(5), i.JRh(i.bMT(6, 1, "eui.growl.dismiss-all")));
      }
      let _e = (() => {
          class u {
            get cssClasses() {
              return ["eui-growl", `eui-growl--${this.position}`]
                .join(" ")
                .trim();
            }
            get ariaLabelledBy() {
              return this.value?.length ? this.titleId : null;
            }
            get ariaDescribedBy() {
              return this.value?.length ? this.contentId : null;
            }
            constructor() {
              ((this.el = (0, i.WQX)(i.aKT)),
                (this.titleId = "msg-title"),
                (this.contentId = "msg-detail"),
                (this.e2eAttr = "eui-growl"),
                (this.role = "status"),
                (this.ariaLive = "polite"),
                (this.sticky = !1),
                (this.life = 3e3),
                (this.value = []),
                (this.closeAllSticky = !1),
                (this.growlClick = new i.bkB()));
              const a = (0, i.WQX)(i._q3);
              this.differ = a.find([]).create(void 0);
            }
            ngDoCheck() {
              const a = this.differ.diff(this.value);
              a &&
                (a.forEachRemovedItem(({ item: d }) =>
                  clearTimeout(d?.timeout),
                ),
                a.forEachAddedItem(({ item: d }) =>
                  this.createRemovalTimeout(d),
                ));
            }
            remove(a) {
              this.value.splice(this.findMessageIndex(a), 1);
            }
            removeAll() {
              this.value?.length && this.value.splice(0, this.value.length);
            }
            ngOnDestroy() {
              this.sticky ||
                this.value.forEach((a) => clearTimeout(a?.timeout));
            }
            onClick() {
              this.growlClick.emit();
            }
            isGrowlMoreThanTwo() {
              return this.value.filter((a) => a.sticky).length > 2;
            }
            createRemovalTimeout(a) {
              !a.sticky &&
                !a.timeout &&
                (a.timeout = setTimeout(
                  () => this.remove(a),
                  a.life || this.life,
                ));
            }
            findMessageIndex(a) {
              return this.value?.length
                ? this.value.findIndex((d) => d === a)
                : -1;
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-growl"]],
                hostVars: 7,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function () {
                      return p.onClick();
                    }),
                    2 & d &&
                      (i.BMQ("data-e2e", p.e2eAttr)("role", p.role)(
                        "aria-live",
                        p.ariaLive,
                      )("aria-labelledby", p.ariaLabelledBy)(
                        "aria-describedby",
                        p.ariaDescribedBy,
                      ),
                      i.HbH(p.cssClasses)));
                },
                inputs: {
                  e2eAttr: "e2eAttr",
                  ariaLive: "ariaLive",
                  sticky: [2, "sticky", "sticky", i.L39],
                  life: "life",
                  value: "value",
                  closeAllSticky: "closeAllSticky",
                  position: "position",
                },
                outputs: { growlClick: "growlClick" },
                decls: 3,
                vars: 1,
                consts: [
                  [
                    1,
                    "eui-growl-item-container",
                    "eui-u-anim",
                    "eui-u-anim--fast",
                    3,
                    "ngClass",
                    "eui-u-anim--slideInUp",
                    "eui-u-anim--slideInDown",
                  ],
                  [
                    1,
                    "eui-growl-item-container",
                    "eui-u-anim",
                    "eui-u-anim--fast",
                    "eui-growl-item-container--secondary",
                  ],
                  [
                    1,
                    "eui-growl-item-container",
                    "eui-u-anim",
                    "eui-u-anim--fast",
                    3,
                    "ngClass",
                  ],
                  [1, "eui-growl-item"],
                  [1, "eui-growl-item-summary-wrapper"],
                  [1, "eui-growl-item-icon", 3, "euiVariant"],
                  [1, "eui-growl-item-title", 3, "id"],
                  [1, "eui-growl-item-content", 3, "id", "innerHTML"],
                  [
                    "icon",
                    "close:outline",
                    "fillColor",
                    "neutral-light",
                    "euiRounded",
                    "",
                    "ariaLabel",
                    "Close growl icon",
                    1,
                    "eui-growl-item-close",
                    3,
                    "buttonClick",
                  ],
                  ["icon", "checkmark-done:sharp"],
                  [1, "eui-growl-item-title"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.Z7z(0, lt, 8, 17, "div", 0, i.fX1),
                    i.DNE(2, z, 8, 3, "div", 1)),
                    2 & d &&
                      (i.Dyx(p.value),
                      i.R7$(2),
                      i.vxM(
                        p.closeAllSticky && p.isGrowlMoreThanTwo() ? 2 : -1,
                      )));
                },
                dependencies: [Xe.YU, He.h, He.D9, tt.aV, Tn._x, Ka.P_],
                styles: [
                  ".eui-19 .eui-growl{--_color: var(--eui-growl-color, var(--eui-c-s-info-on-surface-light));--_bg-color: var(--eui-growl-bg-color, var(--eui-c-s-info-surface-light));--_color-on-bg: var(--eui-growl-color-on-bg, var(--eui-c-s-info-surface-light-contrast));--_close-hover-color: var(--eui-growl-close-hover-color, var(--eui-c-s-info-surface-light-hover));--eui-bottom-left-horizontal-offset: var(--eui-s-l);--eui-bottom-left-vertical-offset: var(--eui-s-l);--eui-bottom-right-horizontal-offset: var(--eui-s-l);--eui-bottom-right-vertical-offset: var(--eui-s-l)}.eui-19 .eui-growl-item-container--primary{--_color: var(--eui-c-s-primary);--_bg-color: var(--eui-c-s-primary-surface-light);--_color-on-bg: var(--eui-c-s-primary-surface-light-contrast);--_close-hover-color: var(--eui-c-s-primary-surface-light-hover)}.eui-19 .eui-growl-item-container--secondary{--_color: var(--eui-c-s-secondary);--_bg-color: var(--eui-c-s-secondary-surface-light);--_color-on-bg: var(--eui-c-s-secondary-surface-light-contrast);--_close-hover-color: var(--eui-c-s-secondary-surface-light-hover)}.eui-19 .eui-growl-item-container--info{--_color: var(--eui-c-s-info);--_bg-color: var(--eui-c-s-info-surface-light);--_color-on-bg: var(--eui-c-s-info-surface-light-contrast);--_close-hover-color: var(--eui-c-s-info-surface-light-hover)}.eui-19 .eui-growl-item-container--success{--_color: var(--eui-c-s-success);--_bg-color: var(--eui-c-s-success-surface-light);--_color-on-bg: var(--eui-c-s-success-surface-light-contrast);--_close-hover-color: var(--eui-c-s-success-surface-light-hover)}.eui-19 .eui-growl-item-container--warning{--_color: var(--eui-c-s-warning);--_bg-color: var(--eui-c-s-warning-surface-light);--_color-on-bg: var(--eui-c-s-warning-surface-light-contrast);--_close-hover-color: var(--eui-c-s-warning-surface-light-hover)}.eui-19 .eui-growl-item-container--danger{--_color: var(--eui-c-s-danger);--_bg-color: var(--eui-c-s-danger-surface-light);--_color-on-bg: var(--eui-c-s-danger-surface-light-contrast);--_close-hover-color: var(--eui-c-s-danger-surface-light-hover)}.eui-19 .eui-growl-item-container.eui-growl-item-container--filled.eui-growl-item-container--primary{--_bg-color: var(--eui-c-s-primary-surface);--_color-on-bg: var(--eui-c-s-primary-surface-contrast);--_color: var(--eui-c-s-primary-surface-contrast);--_icon-color: var(--eui-c-s-primary-surface-contrast);--_close-hover-color: var(--eui-c-s-primary-surface-hover)}.eui-19 .eui-growl-item-container.eui-growl-item-container--filled.eui-growl-item-container--info{--_bg-color: var(--eui-c-s-info-surface);--_color-on-bg: var(--eui-c-s-info-surface-contrast);--_color: var(--eui-c-s-info-surface-contrast);--_icon-color: var(--eui-c-s-info-surface-contrast);--_close-hover-color: var(--eui-c-s-info-surface-hover)}.eui-19 .eui-growl-item-container.eui-growl-item-container--filled.eui-growl-item-container--success{--_bg-color: var(--eui-c-s-success-surface);--_color-on-bg: var(--eui-c-s-success-surface-contrast);--_color: var(--eui-c-s-success-surface-contrast);--_icon-color: var(--eui-c-s-success-surface-contrast);--_close-hover-color: var(--eui-c-s-success-surface-hover)}.eui-19 .eui-growl-item-container.eui-growl-item-container--filled.eui-growl-item-container--warning{--_bg-color: var(--eui-c-s-warning-surface);--_color-on-bg: var(--eui-c-s-warning-surface-contrast);--_color: var(--eui-c-s-warning-surface-contrast);--_icon-color: var(--eui-c-s-warning-surface-contrast);--_close-hover-color: var(--eui-c-s-warning-surface-hover)}.eui-19 .eui-growl-item-container.eui-growl-item-container--filled.eui-growl-item-container--danger{--_bg-color: var(--eui-c-s-danger-surface);--_color-on-bg: var(--eui-c-s-danger-surface-contrast);--_color: var(--eui-c-s-danger-surface-contrast);--_icon-color: var(--eui-c-s-danger-surface-contrast);--_close-hover-color: var(--eui-c-s-danger-surface-hover)}.eui-19 .eui-growl{position:fixed;width:20rem;z-index:var(--eui-zi-growl-message)}.eui-19 .eui-growl--bottom-left{bottom:var(--eui-bottom-left-vertical-offset);left:var(--eui-bottom-left-horizontal-offset)}.eui-19 .eui-growl--bottom-center{bottom:var(--eui-s-l);right:50%;transform:translate(50%)}.eui-19 .eui-growl--bottom-right{bottom:var(--eui-bottom-right-vertical-offset);right:var(--eui-bottom-right-horizontal-offset)}.eui-19 .eui-growl--top-left{left:var(--eui-s-l);top:var(--eui-s-l)}.eui-19 .eui-growl--top-center{right:50%;top:var(--eui-s-l);transform:translate(50%)}.eui-19 .eui-growl--top-right{right:var(--eui-s-l);top:var(--eui-s-l)}.eui-19 .eui-growl a{text-decoration:underline}.eui-19 .eui-growl-item-container{margin-bottom:var(--eui-s-s);position:relative;background-color:var(--_bg-color);color:var(--_color-on-bg)}.eui-19 .eui-growl-item{display:flex;flex-direction:column;padding:var(--eui-s-m);position:relative;width:20rem;box-shadow:var(--eui-sh-3)}.eui-19 .eui-growl-item-summary-wrapper{display:flex;align-items:center;gap:var(--eui-s-xs)}.eui-19 .eui-growl-item-title{font:var(--eui-f-m-compact-bold);margin-right:var(--eui-s-xl);color:var(--_color)}.eui-19 .eui-growl-item-content:not(:empty){margin-top:var(--eui-s-xs);max-height:80vh;overflow-y:auto;overflow-wrap:break-word;font:var(--eui-f-m-compact)}.eui-19 .eui-growl-item-content:not(:empty)::-webkit-scrollbar{display:inherit;height:4px;width:4px;background-color:var(--eui-c-s-secondary-surface-light)}.eui-19 .eui-growl-item-content:not(:empty)::-webkit-scrollbar-thumb{background-color:var(--_eui-scrollbars-foreground-color);border-radius:5rem}.eui-19 .eui-growl-item-content:not(:empty)::-webkit-scrollbar-thumb:hover{background-color:var(--eui-c-s-secondary-surface)}.eui-19 .eui-growl-item-content:not(:empty)::-webkit-scrollbar-track{background-color:var(--eui-c-s-secondary-surface-light);border-radius:0}@-moz-document url-prefix(){.eui-19 .eui-growl-item-content:not(:empty){scrollbar-color:var(--eui-c-s-secondary-surface) var(--eui-c-s-secondary-surface-light);scrollbar-width:auto}}.eui-19 .eui-growl-item-close{position:absolute;top:var(--eui-s-xs);right:var(--eui-s-xs)}.eui-19 .eui-growl-item-close .eui-icon-button__button:hover{background-color:var(--_close-hover-color)!important}.eui-19 .eui-growl-item-container--filled .eui-icon-svg svg{fill:var(--_icon-color)!important;color:var(--_icon-color)!important}.eui-19 .eui-growl-item-container--filled a,.eui-19 .eui-growl-item-container--filled code{color:var(--eui-c-white)!important}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Nt = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [_e] });
            }
          }
          return u;
        })(),
        sn = (() => {
          class u {
            constructor() {
              ((this.isBlocked = !1),
                (this.role = "region"),
                (this.ariaLabel = "eUI Block Document"));
            }
            get cssClasses() {
              return [
                "eui-block-document",
                this.isBlocked ? "eui-block-document--blocked" : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-block-document"]],
                hostVars: 4,
                hostBindings: function (d, p) {
                  2 & d &&
                    (i.BMQ("role", p.role)("aria-label", p.ariaLabel),
                    i.HbH(p.cssClasses));
                },
                inputs: {
                  isBlocked: [2, "isBlocked", "isBlocked", i.L39],
                  ariaLabel: "ariaLabel",
                },
                decls: 1,
                vars: 0,
                consts: [[1, "eui-block-document__loader"]],
                template: function (d, p) {
                  1 & d && i.nrm(0, "div", 0);
                },
                styles: [
                  '.eui-19   .eui-block-document[_nghost-%COMP%]   .eui-block-document__loader[_ngcontent-%COMP%]{display:none}.eui-19   .eui-block-document--blocked[_nghost-%COMP%]   .eui-block-document__loader[_ngcontent-%COMP%]{display:block;inset:0;margin:auto;overflow:show;position:fixed;z-index:var(--eui-zi-block-document)}.eui-19   .eui-block-document--blocked[_nghost-%COMP%]   .eui-block-document__loader[_ngcontent-%COMP%]:before{background-color:#0000001a;content:"";display:block;height:100%;left:0;position:fixed;top:0;width:100%}.eui-19   .eui-block-document--blocked[_nghost-%COMP%]   .eui-block-document__loader[_ngcontent-%COMP%]:not(:required){background-color:transparent;border:var(--eui-bw-none);color:transparent;font:0/0 a;text-shadow:none}.eui-19   .eui-block-document--blocked[_nghost-%COMP%]   .eui-block-document__loader[_ngcontent-%COMP%]:not(:required):after{border-top:var(--eui-s-xs) solid currentcolor;border-right:var(--eui-s-xs) solid currentcolor;border-bottom-style:solid;border-left-style:solid;border-radius:var(--eui-br-max);border-bottom-width:var(--eui-s-xs);border-left-width:var(--eui-s-xs);border-bottom-color:#0003;border-left-color:#0003;color:var(--eui-c-s-primary-base);-webkit-animation:spin .65s linear infinite;animation:spin .65s linear infinite;display:block;left:50%;margin:-40px 0 0 -40px;top:50%;content:"";position:absolute;height:120px;width:120px}',
                ],
                changeDetection: 0,
              });
            }
          }
          return u;
        })(),
        Cn = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({});
            }
          }
          return u;
        })();
      var nt = P(3623),
        it = P(9417);
      (P(583), P(3102), P(140));
      const mt = ["*"],
        Ri = [[["eui-header"]]],
        xs = ["eui-header"];
      function ar(u, E) {
        1 & u && i.nrm(0, "eui-sidebar-toggle", 0);
      }
      const Rt = [[["eui-app-sidebar-menu"]], "*"],
        Gt = ["eui-app-sidebar-menu", "*"],
        Jt = [[["eui-user-profile-menu"]]],
        Ns = ["eui-user-profile-menu"];
      function Ci(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "button", 2), i.nrm(1, "eui-icon-svg", 3), i.k0s()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(),
            i.Y8G(
              "icon",
              a.toggleProfile ? "chevron-up:sharp" : "chevron-down:sharp",
            ));
        }
      }
      const Rs = ["menu"],
        ii = [
          [["eui-app-sidebar-header-user-profile"]],
          [["eui-app-sidebar-header"]],
          [["eui-app-sidebar-body"]],
          [["eui-app-sidebar-footer"]],
          [["eui-app-sidebar-drawer"]],
        ],
        Xi = [
          "eui-app-sidebar-header-user-profile",
          "eui-app-sidebar-header",
          "eui-app-sidebar-body",
          "eui-app-sidebar-footer",
          "eui-app-sidebar-drawer",
        ];
      function Vu(u, E) {
        1 & u && i.nrm(0, "eui-sidebar-toggle", 0);
      }
      function gf(u, E) {
        1 & u && i.nrm(0, "eui-language-selector", 1);
      }
      const Zi = ["appTopMessage"];
      function Gu(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-icon-button", 4),
            i.bIt("buttonClick", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onCloseClick());
            }),
            i.k0s());
        }
      }
      function _f(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 0),
            i.EFF(1),
            i.k0s(),
            i.j41(2, "div", 1),
            i.EFF(3),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(),
            i.SpI(" ", a.appName, " "),
            i.R7$(2),
            i.SpI(" ", a.appSubTitle, " "));
        }
      }
      function Ls(u, E) {
        if ((1 & u && i.EFF(0), 2 & u)) {
          const a = i.XpG();
          i.SpI(" ", a.appName, "\n");
        }
      }
      const Uu = (u) => ({ $implicit: u });
      function Mg(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 6), 2 & u)) {
          const a = i.XpG(2).$implicit;
          (i.FS9("icon", a.iconSvgName),
            i.FS9("fillColor", a.iconTypeClass || null));
        }
      }
      function Ig(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 5),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG().$index,
                D = i.XpG();
              return i.Njj(D.openMenu(p));
            })("focus", function () {
              i.eBV(a);
              const p = i.XpG().$index,
                D = i.XpG();
              return i.Njj(D.openMenu(p));
            }),
            i.DNE(1, Mg, 1, 2, "eui-icon-svg", 6),
            i.EFF(2),
            i.nrm(3, "eui-icon-svg", 7),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(),
            d = a.$implicit,
            p = a.$index,
            D = i.XpG();
          (i.AVh("active", D.activeMenu === p)(
            "mega-menu-item--disabled",
            d.disabled,
          ),
            i.BMQ("aria-disabled", d.disabled),
            i.R7$(),
            i.vxM(d.iconSvgName ? 1 : -1),
            i.R7$(),
            i.SpI(" ", d.label, " "));
        }
      }
      function Dg(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 8),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG().$index,
                D = i.XpG();
              return i.Njj(D.openMenu(p));
            })("focus", function () {
              i.eBV(a);
              const p = i.XpG().$index,
                D = i.XpG();
              return i.Njj(D.openMenu(p));
            }),
            i.EFF(1),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(),
            d = a.$implicit,
            p = a.$index,
            D = i.XpG();
          (i.AVh("active", D.activeMenu === p)(
            "mega-menu-item--disabled",
            d.disabled,
          ),
            i.Y8G("routerLink", d.disabled ? null : d.url),
            i.BMQ("aria-disabled", d.disabled),
            i.R7$(),
            i.SpI(" ", d.label, " "));
        }
      }
      function Tg(u, E) {
        if ((1 & u && (i.j41(0, "div", 12), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG().$implicit;
          (i.R7$(), i.JRh(a.key));
        }
      }
      function Sg(u, E) {}
      function Hu(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "a", 16), i.DNE(1, Sg, 0, 0, "ng-template", 17), i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$implicit;
          i.XpG(5);
          const d = i.sdS(5);
          (i.AVh("mega-menu-item--disabled", a.disabled),
            i.Y8G("routerLink", a.disabled ? null : a.url),
            i.BMQ("aria-disabled", a.disabled),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d)(
              "ngTemplateOutletContext",
              i.eq3(6, Uu, a),
            ));
        }
      }
      function wg(u, E) {}
      function Ag(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "a", 18), i.DNE(1, wg, 0, 0, "ng-template", 17), i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$implicit;
          i.XpG(5);
          const d = i.sdS(5);
          (i.AVh("mega-menu-item--disabled", a.disabled),
            i.Y8G(
              "href",
              a.disabled ? null : a.urlExternal,
              i.B4B,
            )("target", a.urlExternalTarget ? a.urlExternalTarget : "_blank"),
            i.BMQ("aria-disabled", a.disabled),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", d)(
              "ngTemplateOutletContext",
              i.eq3(7, Uu, a),
            ));
        }
      }
      function kg(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "li", 13),
            i.DNE(1, Hu, 2, 8, "a", 14)(2, Ag, 2, 9, "a", 15),
            i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(), i.vxM(a.url ? 1 : a.urlExternal ? 2 : -1));
        }
      }
      function xg(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 11),
            i.DNE(1, Tg, 2, 1, "div", 12),
            i.Z7z(2, kg, 3, 1, "li", 13, i.Vm6),
            i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(),
            i.vxM("eui-no-label" !== a.key ? 1 : -1),
            i.R7$(),
            i.Dyx(a.value));
        }
      }
      function $u(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 9)(1, "ul", 10),
            i.Z7z(2, xg, 4, 1, "div", 11, i.Vm6),
            i.nI1(4, "keyvalue"),
            i.k0s()()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(2), i.Dyx(i.bMT(4, 0, a.value)));
        }
      }
      function zu(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 4),
            i.Z7z(1, $u, 5, 2, "div", 9, i.Vm6),
            i.nI1(3, "keyvalue"),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$index,
            d = i.XpG();
          (i.R7$(), i.Dyx(i.bMT(3, 0, d.megaMenuItemsGrouped[a])));
        }
      }
      function Ng(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "li"),
            i.DNE(1, Ig, 4, 7, "a", 2)(2, Dg, 2, 7, "a", 3)(
              3,
              zu,
              4,
              2,
              "div",
              4,
            ),
            i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit,
            d = E.$index,
            p = i.XpG();
          (i.R7$(),
            i.vxM(a.children && a.children.length > 0 ? 1 : 2),
            i.R7$(2),
            i.vxM(
              p.activeMenu === d &&
                a.children &&
                a.children.length > 0 &&
                !a.disabled
                ? 3
                : -1,
            ));
        }
      }
      function Rg(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 20), 2 & u)) {
          const a = i.XpG().$implicit;
          (i.FS9("icon", a.iconSvgName),
            i.FS9("fillColor", a.iconTypeClass || null));
        }
      }
      function Lg(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 21), 2 & u)) {
          const a = i.XpG().$implicit;
          (i.FS9("fillColor", a.markerTypeClass || null),
            i.Y8G("aria-label", a.markerTypeClass + " marker"));
        }
      }
      function vf(u, E) {
        if ((1 & u && (i.j41(0, "eui-badge", 26), i.EFF(1), i.k0s()), 2 & u)) {
          const a = i.XpG().$implicit;
          (i.FS9("euiVariant", a.tagTypeClass), i.R7$(), i.JRh(a.tagLabel));
        }
      }
      function Wu(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 19),
            i.DNE(1, Rg, 1, 2, "eui-icon-svg", 20)(
              2,
              Lg,
              1,
              2,
              "eui-icon-svg",
              21,
            ),
            i.k0s(),
            i.j41(3, "div", 22)(4, "div", 23)(5, "span", 24),
            i.EFF(6),
            i.k0s()()(),
            i.j41(7, "div", 25),
            i.DNE(8, vf, 2, 2, "eui-badge", 26),
            i.k0s()),
          2 & u)
        ) {
          const a = E.$implicit;
          (i.R7$(),
            i.vxM(a.iconSvgName ? 1 : a.hasMarker ? 2 : -1),
            i.R7$(5),
            i.JRh(a.label),
            i.R7$(2),
            i.vxM(a.tagLabel ? 8 : -1));
        }
      }
      function Xu(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 8), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.Y8G("icon", a.iconSvgName)(
            "fillColor",
            a.active ? "neutral" : "white",
          );
        }
      }
      function Zu(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 9), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.Y8G("iconUrl", a.iconSvgUrl)(
            "fillColor",
            a.active ? "neutral" : "white",
          );
        }
      }
      function yf(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("", a.iconClass, " eui-icon");
        }
      }
      function bf(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 12), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.Y8G("fillColor", a.active ? "neutral" : "white");
        }
      }
      function Qu(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 6),
            i.nI1(1, "translate"),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(2);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(2);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.j41(2, "div", 7),
            i.DNE(3, Xu, 1, 2, "eui-icon-svg", 8)(
              4,
              Zu,
              1,
              2,
              "eui-icon-svg",
              9,
            )(5, yf, 1, 3, "span", 10),
            i.j41(6, "span", 11),
            i.EFF(7),
            i.nI1(8, "translate"),
            i.k0s(),
            i.DNE(9, bf, 1, 1, "eui-icon-svg", 12),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit;
          (i.AVh("disabled", a.disabled)("icon-home-link", a.isHome),
            i.FS9("title", i.bMT(1, 10, a.label)),
            i.Y8G("tabindex", a.disabled ? -1 : 0),
            i.R7$(3),
            i.vxM(a.iconSvgName ? 3 : a.iconSvgUrl ? 4 : -1),
            i.R7$(2),
            i.vxM(!a.iconClass || a.iconSvgName || a.iconSvgUrl ? -1 : 5),
            i.R7$(2),
            i.JRh(i.bMT(8, 12, a.label)),
            i.R7$(2),
            i.vxM(a.children ? 9 : -1));
        }
      }
      function Ku(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 14), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.Y8G("icon", a.iconSvgName)(
            "fillColor",
            a.active ? "neutral" : "white",
          );
        }
      }
      function Cf(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("", a.iconClass, " eui-icon");
        }
      }
      function Ya(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 15), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.Y8G("fillColor", a.active ? "neutral" : "white");
        }
      }
      function Ef(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 13),
            i.nI1(1, "translate"),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(2);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(2);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.j41(2, "div", 7),
            i.DNE(3, Ku, 1, 2, "eui-icon-svg", 14)(4, Cf, 1, 3, "span", 10),
            i.j41(5, "span", 11),
            i.EFF(6),
            i.nI1(7, "translate"),
            i.k0s(),
            i.DNE(8, Ya, 1, 1, "eui-icon-svg", 15),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit;
          (i.AVh("disabled", a.disabled)("icon-home-link", a.isHome),
            i.FS9("title", i.bMT(1, 10, a.label)),
            i.Y8G("routerLink", a.url),
            i.R7$(3),
            i.vxM(a.iconSvgName ? 3 : -1),
            i.R7$(),
            i.vxM(a.iconClass && !a.iconSvgName ? 4 : -1),
            i.R7$(2),
            i.JRh(i.bMT(7, 12, a.label)),
            i.R7$(2),
            i.vxM(a.children ? 8 : -1));
        }
      }
      function ot(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("eui-toolbar-menu-item__icon eui-icon ", a.iconClass, "");
        }
      }
      function Yu(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 22), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.FS9("icon", a.iconSvgName);
        }
      }
      function Ju(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 21),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(5);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(5);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.DNE(1, ot, 1, 3, "span", 10)(2, Yu, 1, 1, "eui-icon-svg", 22),
            i.j41(3, "span", 23),
            i.EFF(4),
            i.nI1(5, "translate"),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(5);
          (i.AVh("disabled", a.disabled),
            i.Y8G("tabindex", d.isdropdownOpen && !a.disabled ? 0 : -1),
            i.R7$(),
            i.vxM(a.iconClass ? 1 : -1),
            i.R7$(),
            i.vxM(a.iconSvgName ? 2 : -1),
            i.R7$(2),
            i.JRh(i.bMT(5, 6, a.label)));
        }
      }
      function Ye(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("eui-toolbar-menu-item__icon eui-icon ", a.iconClass, "");
        }
      }
      function Ja(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 22), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.FS9("icon", a.iconSvgName);
        }
      }
      function lr(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 24),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(5);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(5);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.DNE(1, Ye, 1, 3, "span", 10)(2, Ja, 1, 1, "eui-icon-svg", 22),
            i.j41(3, "span", 23),
            i.EFF(4),
            i.nI1(5, "translate"),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(5);
          (i.AVh("disabled", a.disabled),
            i.Y8G("tabindex", d.isdropdownOpen && !a.disabled ? 0 : -1)(
              "routerLink",
              a.url,
            ),
            i.R7$(),
            i.vxM(a.iconClass ? 1 : -1),
            i.R7$(),
            i.vxM(a.iconSvgName ? 2 : -1),
            i.R7$(2),
            i.JRh(i.bMT(5, 7, a.label)));
        }
      }
      function Rn(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("eui-toolbar-menu-item__icon eui-icon ", a.iconClass, "");
        }
      }
      function Mf(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 22), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.FS9("icon", a.iconSvgName);
        }
      }
      function Po(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 24),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(8);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(8);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.DNE(1, Rn, 1, 3, "span", 10)(2, Mf, 1, 1, "eui-icon-svg", 22),
            i.j41(3, "span", 23),
            i.EFF(4),
            i.nI1(5, "translate"),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(8);
          (i.AVh("disabled", a.disabled),
            i.Y8G("tabindex", d.isdropdownOpen && !a.disabled ? 0 : -1)(
              "routerLink",
              a.url,
            ),
            i.R7$(),
            i.vxM(a.iconClass ? 1 : -1),
            i.R7$(),
            i.vxM(a.iconSvgName ? 2 : -1),
            i.R7$(2),
            i.JRh(i.bMT(5, 7, a.label)));
        }
      }
      function jo(u, E) {
        if ((1 & u && i.nrm(0, "span"), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.ZvI("eui-toolbar-menu-item__icon eui-icon ", a.iconClass, "");
        }
      }
      function qa(u, E) {
        if ((1 & u && i.nrm(0, "eui-icon-svg", 22), 2 & u)) {
          const a = i.XpG(3).$implicit;
          i.FS9("icon", a.iconSvgName);
        }
      }
      function Ln(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "a", 21),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2).$implicit,
                D = i.XpG(8);
              return i.Njj(D.onLinkClick(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(2).$implicit,
                V = i.XpG(8);
              return i.Njj(V.onKeyDown(p, D));
            }),
            i.DNE(1, jo, 1, 3, "span", 10)(2, qa, 1, 1, "eui-icon-svg", 22),
            i.j41(3, "span", 23),
            i.EFF(4),
            i.nI1(5, "translate"),
            i.k0s()());
        }
        if (2 & u) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(8);
          (i.AVh("disabled", a.disabled),
            i.Y8G("tabindex", d.isdropdownOpen && !a.disabled ? 0 : -1),
            i.R7$(),
            i.vxM(a.iconClass ? 1 : -1),
            i.R7$(),
            i.vxM(a.iconSvgName ? 2 : -1),
            i.R7$(2),
            i.JRh(i.bMT(5, 6, a.label)));
        }
      }
      function If(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "li", 18),
            i.DNE(1, Po, 6, 9, "a", 20)(2, Ln, 6, 8, "a", 19),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$implicit;
          (i.AVh("separator", a.isSeparator),
            i.R7$(),
            i.vxM(a.url ? 1 : -1),
            i.R7$(),
            i.vxM(a.url ? -1 : 2));
        }
      }
      function el(u, E) {
        if ((1 & u && i.DNE(0, If, 3, 4, "li", 25), 2 & u)) {
          const a = E.$implicit;
          i.vxM(void 0 === a.visible || !0 === a.visible ? 0 : -1);
        }
      }
      function Df(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "ul", 16),
            i.Z7z(1, el, 1, 1, null, null, i.fX1),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(5);
          (i.AVh("showOnEnter", d.isdropdownOpen), i.R7$(), i.Dyx(a.children));
        }
      }
      function ci(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "li", 18),
            i.DNE(1, Ju, 6, 8, "a", 19)(2, lr, 6, 9, "a", 20)(
              3,
              Df,
              3,
              2,
              "ul",
              5,
            ),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$implicit;
          (i.AVh("has-sub", null == a ? null : a.children)(
            "separator",
            a.isSeparator,
          )("selected", a.active),
            i.R7$(),
            i.vxM(a.url ? -1 : 1),
            i.R7$(),
            i.vxM(a.url ? 2 : -1),
            i.R7$(),
            i.vxM(a.children ? 3 : -1));
        }
      }
      function qu(u, E) {
        if ((1 & u && i.DNE(0, ci, 4, 9, "li", 17), 2 & u)) {
          const a = E.$implicit;
          i.vxM(void 0 === a.visible || !0 === a.visible ? 0 : -1);
        }
      }
      function tl(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "ul", 16),
            i.Z7z(1, qu, 1, 1, null, null, i.fX1),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(2).$implicit,
            d = i.XpG(2);
          (i.AVh("showOnEnter", d.isdropdownOpen), i.R7$(), i.Dyx(a.children));
        }
      }
      function ec(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "li", 2),
            i.DNE(1, Qu, 10, 14, "a", 3)(2, Ef, 9, 14, "a", 4)(
              3,
              tl,
              3,
              2,
              "ul",
              5,
            ),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG().$implicit;
          (i.AVh("has-sub", a.children)("selected", a.active),
            i.R7$(),
            i.vxM(a.url ? -1 : 1),
            i.R7$(),
            i.vxM(a.url ? 2 : -1),
            i.R7$(),
            i.vxM(a.children ? 3 : -1));
        }
      }
      function Gr(u, E) {
        if ((1 & u && i.DNE(0, ec, 4, 7, "li", 1), 2 & u)) {
          const a = E.$implicit;
          i.vxM(void 0 === a.visible || !0 === a.visible ? 0 : -1);
        }
      }
      function nl(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "nav", 0)(1, "ul"),
            i.Z7z(2, Gr, 1, 1, null, null, i.fX1),
            i.k0s()()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(2), i.Dyx(a.items));
        }
      }
      function ur(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 5),
            i.bIt("click", function () {
              const p = i.eBV(a).$implicit,
                D = i.XpG(2);
              return i.Njj(D.itemSelected(p.id));
            }),
            i.EFF(1),
            i.k0s());
        }
        if (2 & u) {
          const a = E.$implicit;
          (i.FS9("ariaLabel", a.label), i.R7$(), i.SpI(" ", a.label, " "));
        }
      }
      function Os(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "eui-dropdown", 0)(1, "button", 1)(2, "span", 2),
            i.EFF(3),
            i.k0s(),
            i.nrm(4, "eui-icon-svg", 3),
            i.k0s(),
            i.j41(5, "eui-dropdown-content"),
            i.Z7z(6, ur, 2, 2, "button", 4, i.fX1),
            i.k0s()()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(),
            i.BMQ("aria-label", "Button trigger"),
            i.R7$(2),
            i.JRh(a.baseItemSelected.label),
            i.R7$(3),
            i.Dyx(a.items));
        }
      }
      function il(u, E) {
        1 & u && i.SdG(0);
      }
      function Qi(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-icon-button", 2),
            i.bIt("buttonClick", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onSearchClick(!0));
            }),
            i.k0s());
        }
      }
      function ol(u, E) {
        if ((1 & u && i.eu8(0, 8), 2 & u)) {
          const a = E.$implicit,
            d = i.XpG(4);
          i.Y8G("ngTemplateOutlet", d.resultItemTemplate)(
            "ngTemplateOutletContext",
            i.eq3(2, Uu, a),
          );
        }
      }
      function rl(u, E) {
        1 & u && i.DNE(0, ol, 1, 4, "ng-template", 7);
      }
      function Tf(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-autocomplete", 6),
            i.bIt("inputBlur", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onInputBlur(p));
            })("inputFocus", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onInputFocus(p));
            })("selectionChange", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onSelectionChange(p));
            })("inputChange", function (p) {
              i.eBV(a);
              const D = i.XpG(2);
              return i.Njj(D.onSearch(p));
            }),
            i.DNE(1, rl, 1, 0, null, 7),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(2);
          (i.FS9("placeholder", a.placeholderLabel),
            i.FS9("panelWidth", a.panelWidth),
            i.Y8G("autocompleteData", a.searchResults),
            i.R7$(),
            i.vxM(0 !== a.templates.length ? 1 : -1));
        }
      }
      function Ee(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "input", 10),
            i.mxI("ngModelChange", function (p) {
              i.eBV(a);
              const D = i.XpG(3);
              return (i.DH7(D.searchInput, p) || (D.searchInput = p), i.Njj(p));
            }),
            i.bIt("focus", function (p) {
              i.eBV(a);
              const D = i.XpG(3);
              return i.Njj(D.onInputFocus(p));
            })("blur", function (p) {
              i.eBV(a);
              const D = i.XpG(3);
              return i.Njj(D.onInputBlur(p));
            })("keydown", function (p) {
              i.eBV(a);
              const D = i.XpG(3);
              return i.Njj(D.onSearchInput(p));
            }),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(3);
          (i.FS9("placeholder", a.placeholderLabel),
            i.R50("ngModel", a.searchInput));
        }
      }
      function Fs(u, E) {
        if ((1 & u && i.DNE(0, Ee, 1, 2, "input", 9), 2 & u)) {
          const a = i.XpG(2);
          i.vxM(a.isInputText ? 0 : -1);
        }
      }
      function sl(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 11),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG(2);
              return i.Njj(p.onSearchClick(!1));
            }),
            i.nrm(1, "eui-icon-svg", 5),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG(2);
          i.Y8G("euiSecondary", a.isInputFocus)("euiPrimary", !a.isInputFocus);
        }
      }
      function al(u, E) {
        1 & u && i.nrm(0, "eui-icon-svg", 5);
      }
      function Sf(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "eui-icon-input", 1),
            i.DNE(1, Tf, 2, 4, "eui-autocomplete", 3)(2, Fs, 1, 1)(
              3,
              sl,
              2,
              2,
              "button",
              4,
            )(4, al, 1, 0, "eui-icon-svg", 5),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(),
            i.vxM(a.isAutocomplete ? 1 : 2),
            i.R7$(2),
            i.vxM(a.hasSearchButton ? 3 : 4));
        }
      }
      function wf(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-icon-button", 2),
            i.bIt("buttonClick", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onClick());
            }),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG();
          i.Y8G("icon", a.iconSvgName);
        }
      }
      function Af(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "button", 3),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.onClick());
            }),
            i.EFF(1),
            i.nrm(2, "eui-icon-svg", 4),
            i.k0s());
        }
        if (2 & u) {
          const a = i.XpG();
          (i.Y8G("euiDisabled", a.euiDisabled),
            i.R7$(),
            i.SpI(" ", a.label, " "),
            i.R7$(),
            i.Y8G("icon", a.iconSvgName));
        }
      }
      const ll = [
          [["eui-toolbar-logo"]],
          [["eui-toolbar-app"]],
          [["eui-toolbar-environment"]],
          [["eui-toolbar-center"]],
          [["eui-toolbar-items"]],
          [["eui-toolbar-navbar"]],
          [["eui-toolbar-menu"]],
          [["eui-toolbar-mega-menu"]],
          [["eui-language-selector"]],
        ],
        Bo = [
          "eui-toolbar-logo",
          "eui-toolbar-app",
          "eui-toolbar-environment",
          "eui-toolbar-center",
          "eui-toolbar-items",
          "eui-toolbar-navbar",
          "eui-toolbar-menu",
          "eui-toolbar-mega-menu",
          "eui-language-selector",
        ];
      function kf(u, E) {
        1 & u && i.nrm(0, "eui-toolbar-logo");
      }
      function xf(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "eui-toolbar-environment"),
            i.EFF(1),
            i.nI1(2, "async"),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG(2);
          (i.R7$(),
            i.SpI(" ", i.bMT(2, 1, a.asService.state$).environmentValue, " "));
        }
      }
      function Nf(u, E) {
        if (
          (1 & u && (i.nrm(0, "eui-toolbar-app", 7), i.nI1(1, "async")), 2 & u)
        ) {
          const a = i.XpG(2);
          i.FS9("appName", i.bMT(1, 1, a.asService.state$).appName);
        }
      }
      function Rf(u, E) {
        1 & u && i.eu8(0);
      }
      function Lf(u, E) {
        1 & u && i.eu8(0);
      }
      function j(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 6),
            i.DNE(1, kf, 1, 0, "eui-toolbar-logo"),
            i.nI1(2, "async"),
            i.DNE(3, xf, 3, 3, "eui-toolbar-environment"),
            i.nI1(4, "async"),
            i.DNE(5, Nf, 2, 3, "eui-toolbar-app", 7),
            i.nI1(6, "async"),
            i.k0s(),
            i.DNE(7, Rf, 1, 0, "ng-container", 8)(
              8,
              Lf,
              1,
              0,
              "ng-container",
              8,
            )),
          2 & u)
        ) {
          const a = i.XpG(),
            d = i.sdS(7),
            p = i.sdS(15);
          (i.R7$(),
            i.vxM(i.bMT(2, 5, a.asService.state$).hasHeaderLogo ? 1 : -1),
            i.R7$(2),
            i.vxM(
              i.bMT(4, 7, a.asService.state$).hasHeaderEnvironment ? 3 : -1,
            ),
            i.R7$(2),
            i.vxM(i.bMT(6, 9, a.asService.state$).appName ? 5 : -1),
            i.R7$(2),
            i.Y8G("ngTemplateOutlet", d),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", p));
        }
      }
      function be(u, E) {
        1 & u && i.eu8(0);
      }
      function tc(u, E) {
        if ((1 & u && i.DNE(0, be, 1, 0, "ng-container", 8), 2 & u)) {
          i.XpG(3);
          const a = i.sdS(11);
          i.Y8G("ngTemplateOutlet", a);
        }
      }
      function nc(u, E) {
        1 & u && i.eu8(0);
      }
      function Pe(u, E) {
        if ((1 & u && i.DNE(0, nc, 1, 0, "ng-container", 8), 2 & u)) {
          i.XpG(3);
          const a = i.sdS(13);
          i.Y8G("ngTemplateOutlet", a);
        }
      }
      function ic(u, E) {
        1 & u && i.eu8(0);
      }
      function Ur(u, E) {
        1 & u && i.eu8(0);
      }
      function Ei(u, E) {
        if (
          (1 & u &&
            i.DNE(0, ic, 1, 0, "ng-container", 8)(
              1,
              Ur,
              1,
              0,
              "ng-container",
              8,
            ),
          2 & u)
        ) {
          i.XpG(3);
          const a = i.sdS(5),
            d = i.sdS(9);
          (i.Y8G("ngTemplateOutlet", d), i.R7$(), i.Y8G("ngTemplateOutlet", a));
        }
      }
      function ul(u, E) {
        1 & u && i.eu8(0);
      }
      function cl(u, E) {
        if (
          (1 & u &&
            i.DNE(0, tc, 1, 1, "ng-container")(1, Pe, 1, 1, "ng-container")(
              2,
              Ei,
              2,
              2,
            )(3, ul, 1, 0, "ng-container", 8),
          2 & u)
        ) {
          const a = i.XpG(2),
            d = i.sdS(7);
          (i.vxM(a.hasMenu ? 0 : a.hasMegaMenu ? 1 : 2),
            i.R7$(3),
            i.Y8G("ngTemplateOutlet", d));
        }
      }
      function oc(u, E) {
        1 & u && i.eu8(0);
      }
      function Og(u, E) {
        1 & u && i.eu8(0);
      }
      function Fg(u, E) {
        1 & u && i.eu8(0);
      }
      function rc(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 6),
            i.SdG(1),
            i.SdG(2, 1),
            i.SdG(3, 2),
            i.DNE(4, oc, 1, 0, "ng-container", 8),
            i.k0s(),
            i.DNE(5, Og, 1, 0, "ng-container", 8),
            i.j41(6, "div", 9),
            i.DNE(7, Fg, 1, 0, "ng-container", 8),
            i.k0s()),
          2 & u)
        ) {
          i.XpG(2);
          const a = i.sdS(5),
            d = i.sdS(7),
            p = i.sdS(9);
          (i.R7$(4),
            i.Y8G("ngTemplateOutlet", p),
            i.R7$(),
            i.Y8G("ngTemplateOutlet", a),
            i.R7$(2),
            i.Y8G("ngTemplateOutlet", d));
        }
      }
      function sc(u, E) {
        1 & u && i.eu8(0);
      }
      function Ps(u, E) {
        if (
          (1 & u &&
            (i.DNE(0, cl, 4, 2),
            i.nI1(1, "async"),
            i.DNE(2, rc, 8, 3)(3, sc, 1, 0, "ng-container", 8)),
          2 & u)
        ) {
          const a = i.XpG(),
            d = i.sdS(15);
          (i.vxM(i.bMT(1, 2, a.asService.state$).hasHeader ? 0 : 2),
            i.R7$(3),
            i.Y8G("ngTemplateOutlet", d));
        }
      }
      function On(u, E) {
        1 & u && i.SdG(0, 3);
      }
      function Ki(u, E) {
        1 & u && i.SdG(0, 4);
      }
      function ac(u, E) {
        1 & u && i.SdG(0, 5);
      }
      function di(u, E) {
        1 & u && (i.j41(0, "div", 6), i.SdG(1, 6), i.k0s());
      }
      function Yi(u, E) {
        if ((1 & u && i.DNE(0, di, 2, 0, "div", 6), 2 & u)) {
          const a = i.XpG();
          i.vxM(a.hasMenu ? 0 : -1);
        }
      }
      function Of(u, E) {
        1 & u && i.SdG(0, 7);
      }
      function lc(u, E) {
        if ((1 & u && i.DNE(0, Of, 1, 0), 2 & u)) {
          const a = i.XpG();
          i.vxM(a.hasMegaMenu ? 0 : -1);
        }
      }
      function Ff(u, E) {
        1 & u && i.SdG(0, 8);
      }
      const Pf = [
          [["eui-app-sidebar"]],
          [["eui-app-top-message"]],
          [["eui-app-header"]],
          [["eui-app-breadcrumb"]],
          [["eui-app-page-wrapper"]],
          [["eui-app-footer"]],
          [["eui-user-profile"]],
          [["eui-app-toolbar"]],
        ],
        dl = [
          "eui-app-sidebar",
          "eui-app-top-message",
          "eui-app-header",
          "eui-app-breadcrumb",
          "eui-app-page-wrapper",
          "eui-app-footer",
          "eui-user-profile",
          "eui-app-toolbar",
        ];
      function fl(u, E) {
        (1 & u &&
          (i.j41(0, "eui-app-sidebar")(1, "eui-app-sidebar-body"),
          i.nrm(2, "eui-app-sidebar-menu", 4),
          i.k0s()()),
          2 & u && (i.R7$(2), i.Y8G("hasIcons", !0)));
      }
      function pl(u, E) {
        1 & u &&
          (i.j41(0, "eui-app-toolbar")(1, "eui-toolbar")(
            2,
            "eui-toolbar-items",
          )(3, "eui-toolbar-item"),
          i.SdG(4, 6),
          i.k0s()()()());
      }
      function js(u, E) {
        1 & u && i.SdG(0, 7);
      }
      function jf(u, E) {
        1 & u && i.nrm(0, "router-outlet");
      }
      function uc(u, E) {
        if (
          (1 & u &&
            (i.j41(0, "div", 1),
            i.SdG(1, 1),
            i.SdG(2, 2),
            i.DNE(3, pl, 5, 0, "eui-app-toolbar"),
            i.nI1(4, "async"),
            i.nI1(5, "async"),
            i.nI1(6, "async"),
            i.nI1(7, "async"),
            i.nI1(8, "async"),
            i.DNE(9, js, 1, 0),
            i.SdG(10, 3),
            i.j41(11, "div", 5),
            i.SdG(12, 4),
            i.DNE(13, jf, 1, 0, "router-outlet"),
            i.k0s(),
            i.SdG(14, 5),
            i.k0s()),
          2 & u)
        ) {
          const a = i.XpG();
          (i.R7$(3),
            i.vxM(
              (!a.appToolbar &&
                i.bMT(4, 2, a.asService.state$).hasHeader &&
                i.bMT(5, 4, a.asService.breakpoints$).isMobile) ||
                (a.appToolbar &&
                  i.bMT(6, 6, a.asService.state$).hasHeader &&
                  i.bMT(7, 8, a.asService.breakpoints$).isMobile &&
                  0 !== i.bMT(8, 10, a.asService.state$).menuLinks.length)
                ? 3
                : 9,
            ),
            i.R7$(10),
            i.vxM(a.hasNoPageWrapper ? 13 : -1));
        }
      }
      let Ac = (() => {
          class u {
            constructor() {
              ((this.role = "nav"), (this.asService = (0, i.WQX)($.OQR)));
            }
            get cssClasses() {
              return this.getCssClasses();
            }
            ngOnInit() {
              this.asService.activateBreadcrumb();
            }
            getCssClasses() {
              return ["eui-app-breadcrumb"].join(" ");
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-breadcrumb"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.cssClasses));
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                styles: [
                  ".eui-app-breadcrumb{align-items:center;display:flex;flex-direction:row;height:var(--eui-app-breadcrumb-height);top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-top-message-height));position:relative;margin:var(--eui-s-m) 0 var(--eui-s-xs) 0;width:100%}@media screen and (max-width: 767px){.eui-app-breadcrumb{visibility:hidden}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        kc = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({});
            }
          }
          return u;
        })();
      const $s = [Ac];
      let Wr = (() => {
          class u {
            constructor() {
              ((this.class = "eui-app-footer"), (this.role = "contentinfo"));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-footer"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.class));
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                styles: [
                  ".eui-app-footer{border-top:1px solid var(--eui-c-divider-light);margin-top:auto}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        xc = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({});
            }
          }
          return u;
        })();
      const Nc = [Wr];
      let Xr = (() => {
          class u {
            constructor() {
              ((this.e2eAttr = "eui-sidebar-toggle"),
                (this.name = "eui-sidebar-toggle"),
                (this.asService = (0, i.WQX)($.OQR)));
            }
            onToggleSidebar(a) {
              ((this.asService.state.breakpoints.isMobile ||
                this.asService.state.breakpoints.isTablet) &&
                (this.asService.state.isSidebarFocused =
                  !this.asService.isSidebarOpen),
                this.asService.sidebarToggle(),
                (0, $.xh)(a));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-sidebar-toggle"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("data-e2e", p.e2eAttr), i.HbH(p.name));
                },
                inputs: {
                  e2eAttr: "e2eAttr",
                  iconSvgFillColor: "iconSvgFillColor",
                },
                decls: 2,
                vars: 4,
                consts: [
                  [
                    "icon",
                    "menu:outline",
                    "size",
                    "l",
                    3,
                    "buttonClick",
                    "fillColor",
                    "ariaLabel",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.j41(0, "eui-icon-button", 0),
                    i.nI1(1, "async"),
                    i.bIt("buttonClick", function (V) {
                      return p.onToggleSidebar(V);
                    }),
                    i.k0s()),
                    2 & d &&
                      (i.FS9("fillColor", p.iconSvgFillColor),
                      i.Y8G(
                        "ariaLabel",
                        i.bMT(1, 2, p.asService.state$).isSidebarOpen
                          ? "Close Sidebar"
                          : "Open Sidebar",
                      )));
                },
                dependencies: [Xe.Jj, Tn._x],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Ji = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Xr] });
            }
          }
          return u;
        })();
      let Pt = (() => {
          class u {
            constructor() {
              ((this.asService = (0, i.WQX)($.OQR)),
                (this.role = "banner"),
                (this._isShrinkHeaderActive = !1),
                (this.isHeaderShrinked = !1),
                (this.destroy$ = new yn.B()),
                (this.zone = (0, i.WQX)(i.SKi)),
                (this.viewportRuler = (0, i.WQX)(wi.Xj)),
                (this.scrollDispatcher = (0, i.WQX)(wi.R)),
                (this.document = (0, i.WQX)(le.q)),
                (this.platformId = (0, i.WQX)(i.Agw)));
            }
            get cssClasses() {
              return this.getCssClasses();
            }
            get isShrinkHeaderActive() {
              return this._isShrinkHeaderActive;
            }
            set isShrinkHeaderActive(a) {
              this._isShrinkHeaderActive = (0, Jn.c)(a);
            }
            ngOnInit() {
              (this.asService.activateHeader(),
                this.scrollDispatcher
                  .scrolled()
                  .pipe(
                    (0, ki.p)(() => this.isShrinkHeaderActive),
                    (0, Vn.Q)(this.destroy$),
                  )
                  .subscribe(() => {
                    const a =
                      this.viewportRuler.getViewportScrollPosition().top;
                    ($.RIB.setHeaderShrinkCssVar(
                      a > 0,
                      this.document,
                      this.platformId,
                    ),
                      a > 0 !== this.isHeaderShrinked &&
                        this.zone.run(() => (this.isHeaderShrinked = a > 0)));
                  }));
            }
            ngOnDestroy() {
              (this.destroy$.next(!0),
                this.destroy$.unsubscribe(),
                this.asService.setState({
                  ...this.asService.state,
                  hasHeader: !1,
                }),
                this.document.documentElement.style.removeProperty(
                  "--eui-app-header-height",
                ));
            }
            getCssClasses() {
              return [
                "eui-app-header",
                this.isHeaderShrinked ? "eui-app-header--shrinked" : "",
              ].join(" ");
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-header"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.cssClasses));
                },
                inputs: { isShrinkHeaderActive: "isShrinkHeaderActive" },
                ngContentSelectors: xs,
                decls: 5,
                vars: 7,
                consts: [[1, "eui-app-header__sidebar-toggle"]],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(Ri),
                    i.DNE(0, ar, 1, 0, "eui-sidebar-toggle", 0),
                    i.nI1(1, "async"),
                    i.nI1(2, "async"),
                    i.nI1(3, "async"),
                    i.SdG(4)),
                    2 & d &&
                      i.vxM(
                        i.bMT(1, 1, p.asService.state$).hasSidebar &&
                          i.bMT(2, 3, p.asService.state$).hasHeader &&
                          !i.bMT(3, 5, p.asService.state$).hasToolbar
                          ? 0
                          : -1,
                      ));
                },
                dependencies: [Xe.Jj, Xr],
                styles: [
                  ".eui-app-header{align-items:center;display:flex;flex-direction:row;height:var(--eui-app-header-height);position:fixed;right:0;top:var(--eui-app-top-message-height);width:100%;z-index:var(--eui-zi-header);transition:visibility .1s ease}.eui-app-header--shrinked{visibility:hidden}.eui-app-header__sidebar-toggle{padding-left:var(--eui-s-xs);padding-top:var(--eui-s-m)}@media screen and (max-width: 767px){.eui-app-header{visibility:hidden}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Rc = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Pt] });
            }
          }
          return u;
        })();
      const Lc = [Pt];
      let Zr = (() => {
          class u {
            constructor() {
              this.class = "eui-app-sidebar-body";
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-body"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                ngContentSelectors: Gt,
                decls: 2,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(Rt), i.SdG(0), i.SdG(1, 1));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Oc = (() => {
          class u {
            constructor() {
              this._isExpanded = !1;
            }
            get isExpanded() {
              return this._isExpanded;
            }
            set isExpanded(a) {
              this._isExpanded = (0, Jn.c)(a);
            }
            get cssClasses() {
              return this._getCssClasses();
            }
            onSidebarDrawerContentClick(a) {
              a.stopPropagation();
            }
            _getCssClasses() {
              return [
                "eui-app-sidebar-drawer",
                this.isExpanded ? "eui-app-sidebar-drawer--expanded" : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-drawer"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: { isExpanded: "isExpanded" },
                ngContentSelectors: mt,
                decls: 2,
                vars: 0,
                consts: [[1, "eui-app-sidebar-drawer-content", 3, "click"]],
                template: function (d, p) {
                  1 & d &&
                    (i.NAR(),
                    i.j41(0, "div", 0),
                    i.bIt("click", function (V) {
                      return p.onSidebarDrawerContentClick(V);
                    }),
                    i.SdG(1),
                    i.k0s());
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Il = (() => {
          class u {
            constructor() {
              ((this.class = "eui-app-sidebar-footer"),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.document = (0, i.WQX)(le.q)));
            }
            ngOnInit() {
              this.asService.activateSidebarFooter();
            }
            ngOnDestroy() {
              this.document.documentElement.style.removeProperty(
                "--eui-app-sidebar-footer-height",
              );
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-footer"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        pr = (() => {
          class u {
            constructor() {
              ((this.welcomeLabel = "Welcome"),
                (this.impersonateLabel = "acting as"),
                (this.isShowUserInfos = !0),
                (this.isShowAvatarInitials = !1),
                (this.isOnline = !0),
                (this.hasWelcomeLabel = !0),
                (this.hasTabNavigation = !1),
                (this.hasToggle = !1),
                (this.hasProfileDrawer = !1),
                (this.toggle = new i.bkB()),
                (this.toggleProfile = !1));
            }
            get cssClasses() {
              return this._getCssClasses();
            }
            onProfileClick(a) {
              ((this.toggleProfile = !this.toggleProfile),
                (0, $.xh)(a),
                this.toggle.emit());
            }
            onClick(a) {
              (this.hasProfileDrawer && this.onProfileClick(a), (0, $.xh)(a));
            }
            _getCssClasses() {
              return [
                "eui-app-sidebar-header-user-profile",
                this.hasProfileDrawer
                  ? "eui-app-sidebar-header-user-profile--has-drawer"
                  : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-header-user-profile"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, on, 4), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.userProfileMenu = V);
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function (V) {
                      return p.onClick(V);
                    }),
                    2 & d && i.HbH(p.cssClasses));
                },
                inputs: {
                  welcomeLabel: "welcomeLabel",
                  impersonateLabel: "impersonateLabel",
                  avatarUrl: "avatarUrl",
                  isShowUserInfos: [
                    2,
                    "isShowUserInfos",
                    "isShowUserInfos",
                    i.L39,
                  ],
                  isShowAvatarInitials: [
                    2,
                    "isShowAvatarInitials",
                    "isShowAvatarInitials",
                    i.L39,
                  ],
                  isOnline: [2, "isOnline", "isOnline", i.L39],
                  hasWelcomeLabel: [
                    2,
                    "hasWelcomeLabel",
                    "hasWelcomeLabel",
                    i.L39,
                  ],
                  hasTabNavigation: [
                    2,
                    "hasTabNavigation",
                    "hasTabNavigation",
                    i.L39,
                  ],
                  hasToggle: [2, "hasToggle", "hasToggle", i.L39],
                  hasProfileDrawer: [
                    2,
                    "hasProfileDrawer",
                    "hasProfileDrawer",
                    i.L39,
                  ],
                },
                outputs: { toggle: "toggle" },
                ngContentSelectors: Ns,
                decls: 4,
                vars: 10,
                consts: [
                  ["userProfile", ""],
                  [
                    "isReverse",
                    "",
                    3,
                    "hasWelcomeLabel",
                    "welcomeLabel",
                    "impersonateLabel",
                    "avatarUrl",
                    "hasMenu",
                    "isShowUserInfos",
                    "isShowAvatarInitials",
                    "hasTabNavigation",
                    "hasToggle",
                  ],
                  [
                    "euiButton",
                    "",
                    "euiRounded",
                    "",
                    "euiIconButton",
                    "",
                    "euiBasicButton",
                    "",
                    "euiSecondary",
                    "",
                    "aria-label",
                    "Toggle user profile details",
                    1,
                    "eui-u-ml-auto",
                  ],
                  [3, "icon"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(Jt),
                    i.j41(0, "eui-user-profile", 1, 0),
                    i.SdG(2),
                    i.k0s(),
                    i.DNE(3, Ci, 2, 1, "button", 2)),
                    2 & d &&
                      (i.Y8G("hasWelcomeLabel", p.hasWelcomeLabel)(
                        "welcomeLabel",
                        p.welcomeLabel,
                      )("impersonateLabel", p.impersonateLabel)(
                        "avatarUrl",
                        p.avatarUrl,
                      )("hasMenu", 0 !== p.userProfileMenu.length)(
                        "isShowUserInfos",
                        p.isShowUserInfos,
                      )("isShowAvatarInitials", p.isShowAvatarInitials)(
                        "hasTabNavigation",
                        p.hasTabNavigation,
                      )("hasToggle", p.hasToggle),
                      i.R7$(3),
                      i.vxM(p.hasProfileDrawer ? 3 : -1)));
                },
                dependencies: [wn, kt.J8, tt.aV],
                styles: [
                  ".eui-app-sidebar-header-user-profile{border-bottom:1px solid var(--eui-c-divider);display:flex;height:var(--eui-app-sidebar-header-user-profile);padding:var(--eui-s-s) var(--eui-s-m);position:relative;width:100%}.eui-app-sidebar-header-user-profile--has-drawer,.eui-app-sidebar-header-user-profile--has-drawer .eui-user-profile-content--no-menu{cursor:pointer}@media screen and (min-width: 996px){.eui-app-sidebar-header-user-profile{display:none}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Fc = (() => {
          class u {
            constructor() {
              ((this.class = "eui-app-sidebar-header"),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.document = (0, i.WQX)(le.q)));
            }
            ngOnInit() {
              this.asService.activateSidebarHeader();
            }
            ngOnDestroy() {
              this.document.documentElement.style.removeProperty(
                "--eui-app-sidebar-header-height",
              );
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-header"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Qr = (() => {
          class u {
            constructor() {
              ((this.asService = (0, i.WQX)($.OQR)),
                (this.class = "eui-app-sidebar-menu"),
                (this.hasFilter = !1),
                (this.hasIcons = !1),
                (this.hasIconsLabels = !1),
                (this.hasTooltip = !0),
                (this.hasTooltipOnExpanded = !1),
                (this.expandAllItems = !1),
                (this.isCollapsed = !1),
                (this.hasCollapsedInitials = !1),
                (this.isFlat = !1),
                (this.hasScrollToItem = !1),
                (this.hasBoldRootLevel = !1),
                (this.sidebarItemClick = new i.bkB()),
                (this.sidebarItemToggle = new i.bkB()),
                (this.subs = new te.yU()));
            }
            ngOnInit() {
              (this.items &&
                this.asService.setState({
                  ...this.asService.state,
                  sidebarLinks: this.items,
                }),
                this.hasIconsLabels &&
                  (this.asService.hasSidebarCollapsedVariant =
                    this.hasIconsLabels),
                this.subs.add(
                  this.asService.state$.subscribe((a) => {
                    this.items = a?.breakpoints?.isMobile
                      ? a.combinedLinks
                      : a.sidebarLinks;
                  }),
                ));
            }
            ngAfterViewInit() {
              this.subs.add(
                this.asService.state$.subscribe((a) => {
                  a?.isSidebarFocused &&
                    this.menu &&
                    this.menu.menubar.nativeElement.focus();
                }),
              );
            }
            ngOnDestroy() {
              this.subs.unsubscribe();
            }
            ngOnChanges(a) {
              a.items &&
                this.asService.setState({
                  ...this.asService.state,
                  sidebarLinks: this.items,
                });
            }
            onMenuItemClicked(a) {
              (a.url &&
                (this.asService.state.breakpoints.isMobile ||
                  this.asService.state.breakpoints.isTablet ||
                  this.asService.state.isSidebarHidden) &&
                (this.asService.isSidebarOpen = !1),
                this.sidebarItemClick.emit(a));
            }
            onSidebarItemToggled(a) {
              this.sidebarItemToggle.emit(a);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar-menu"]],
                viewQuery: function (d, p) {
                  if ((1 & d && i.GBs(Rs, 5), 2 & d)) {
                    let D;
                    i.mGM((D = i.lsd())) && (p.menu = D.first);
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                inputs: {
                  hasFilter: [2, "hasFilter", "hasFilter", i.L39],
                  hasIcons: [2, "hasIcons", "hasIcons", i.L39],
                  hasIconsLabels: [
                    2,
                    "hasIconsLabels",
                    "hasIconsLabels",
                    i.L39,
                  ],
                  hasTooltip: [2, "hasTooltip", "hasTooltip", i.L39],
                  hasTooltipOnExpanded: [
                    2,
                    "hasTooltipOnExpanded",
                    "hasTooltipOnExpanded",
                    i.L39,
                  ],
                  expandAllItems: [
                    2,
                    "expandAllItems",
                    "expandAllItems",
                    i.L39,
                  ],
                  isCollapsed: [2, "isCollapsed", "isCollapsed", i.L39],
                  hasCollapsedInitials: [
                    2,
                    "hasCollapsedInitials",
                    "hasCollapsedInitials",
                    i.L39,
                  ],
                  isFlat: [2, "isFlat", "isFlat", i.L39],
                  hasScrollToItem: [
                    2,
                    "hasScrollToItem",
                    "hasScrollToItem",
                    i.L39,
                  ],
                  hasBoldRootLevel: [
                    2,
                    "hasBoldRootLevel",
                    "hasBoldRootLevel",
                    i.L39,
                  ],
                  items: "items",
                },
                outputs: {
                  sidebarItemClick: "sidebarItemClick",
                  sidebarItemToggle: "sidebarItemToggle",
                },
                features: [i.OA$],
                decls: 3,
                vars: 14,
                consts: [
                  ["menu", ""],
                  [
                    3,
                    "itemClick",
                    "expandToggle",
                    "items",
                    "hasFilter",
                    "hasIcons",
                    "hasIconsLabels",
                    "hasTooltip",
                    "hasTooltipOnExpanded",
                    "expandAllItems",
                    "isFlat",
                    "hasScrollToItem",
                    "hasCollapsedInitials",
                    "hasBoldRootLevel",
                    "isCollapsed",
                  ],
                ],
                template: function (d, p) {
                  if (1 & d) {
                    const D = i.RV6();
                    (i.j41(0, "eui-menu", 1, 0),
                      i.nI1(2, "async"),
                      i.bIt("itemClick", function (Ue) {
                        return (i.eBV(D), i.Njj(p.onMenuItemClicked(Ue)));
                      })("expandToggle", function (Ue) {
                        return (i.eBV(D), i.Njj(p.onSidebarItemToggled(Ue)));
                      }),
                      i.k0s());
                  }
                  2 & d &&
                    i.Y8G("items", p.items)("hasFilter", p.hasFilter)(
                      "hasIcons",
                      p.hasIcons,
                    )("hasIconsLabels", p.hasIconsLabels)(
                      "hasTooltip",
                      p.hasTooltip,
                    )("hasTooltipOnExpanded", p.hasTooltipOnExpanded)(
                      "expandAllItems",
                      p.expandAllItems,
                    )("isFlat", p.isFlat)("hasScrollToItem", p.hasScrollToItem)(
                      "hasCollapsedInitials",
                      p.hasCollapsedInitials,
                    )("hasBoldRootLevel", p.hasBoldRootLevel)(
                      "isCollapsed",
                      !i.bMT(2, 12, p.asService.state$).isSidebarOpen,
                    );
                },
                dependencies: [Xe.Jj, No],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        hr = (() => {
          class u {
            constructor() {
              ((this.string = "eui-app-sidebar"),
                (this.asService = (0, i.WQX)($.OQR, { optional: !0 })),
                (this.subscriptions = []),
                (this.document = (0, i.WQX)(le.q)));
            }
            close() {
              this.asService &&
                (this.asService.state.breakpoints.isMobile ||
                  this.asService.state.breakpoints.isTablet ||
                  this.asService.state.isSidebarHidden) &&
                (this.asService.isSidebarOpen = !1);
            }
            ngOnInit() {
              (this.asService?.activateSidebar(),
                this.subscriptions.push(
                  this.asService
                    ?.getState("breakpoints.isMobile")
                    .pipe((0, ki.p)((a) => !0 === a))
                    .subscribe(() => (this.asService.isSidebarOpen = !1)),
                ),
                this.subscriptions.push(
                  this.asService
                    ?.getState("breakpoints.isTablet")
                    .pipe((0, ki.p)((a) => !0 === a))
                    .subscribe(() => (this.asService.isSidebarOpen = !1)),
                ));
            }
            ngOnDestroy() {
              (this.subscriptions.forEach((a) => a.unsubscribe()),
                this.asService?.setState({
                  ...this.asService.state,
                  hasSidebar: !1,
                }),
                $.RIB.removeSidebarCssVars(this.document));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-sidebar"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt(
                      "click",
                      function () {
                        return p.close();
                      },
                      !1,
                      i.N_X,
                    ),
                    2 & d && i.HbH(p.string));
                },
                ngContentSelectors: Xi,
                decls: 6,
                vars: 0,
                consts: [[1, "eui-app-sidebar-content"]],
                template: function (d, p) {
                  1 & d &&
                    (i.NAR(ii),
                    i.j41(0, "aside", 0),
                    i.SdG(1),
                    i.SdG(2, 1),
                    i.SdG(3, 2),
                    i.SdG(4, 3),
                    i.SdG(5, 4),
                    i.k0s());
                },
                styles: [
                  ".eui-app-sidebar{background-color:var(--eui-c-surface-shell);height:100%;left:0;position:fixed;top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-toolbar-mega-menu-height) + var(--eui-app-top-message-height));transition:top .1s ease,width .1s ease-in,margin-left .1s ease-in;width:var(--eui-app-sidebar-width);box-shadow:var(--eui-sh-10)}.eui-app-sidebar-header{align-items:center;background-color:var(--eui-c-surface-shell);border-bottom:1px solid var(--eui-c-divider-light);display:flex;width:100%}.eui-app-sidebar-body{display:flex;height:100%;max-height:calc(100% - (var(--eui-app-sidebar-header-height) + var(--eui-app-sidebar-footer-height)));overflow-x:hidden;overflow-y:scroll}.eui-app-sidebar-body::-webkit-scrollbar{display:inherit;height:8px;width:8px;background-color:var(--eui-c-s-secondary-surface-light)}.eui-app-sidebar-body::-webkit-scrollbar-thumb{background-color:var(--_eui-scrollbars-foreground-color);border-radius:5rem}.eui-app-sidebar-body::-webkit-scrollbar-thumb:hover{background-color:var(--eui-c-s-secondary-surface)}.eui-app-sidebar-body::-webkit-scrollbar-track{background-color:var(--eui-c-s-secondary-surface-light);border-radius:0}@-moz-document url-prefix(){.eui-app-sidebar-body{scrollbar-color:var(--eui-c-s-secondary-surface) var(--eui-c-s-secondary-surface-light);scrollbar-width:auto}}.eui-app-sidebar-footer{align-items:center;display:flex;flex:0 0 auto;justify-content:center;padding:var(--eui-s-xs)}.sidebar--close:not(.sidebar--hover) .eui-app-sidebar-body{max-height:100%}.eui-app-sidebar-menu{display:flex;height:100%;width:100%}.eui-app-sidebar-content{border-right:1px solid var(--eui-c-divider-light);background-color:var(--eui-c-surface-shell);box-shadow:var(--eui-sh-2);display:flex;flex-direction:column;height:100%;max-height:calc(100% - (var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-top-message-height)));overflow:hidden;position:relative}.modal-open .eui-app-sidebar{z-index:auto}@media screen and (max-width: 767px){.eui-app-sidebar{z-index:var(--eui-zi-sidebar)}.eui-app-sidebar-body{max-height:100%}.sidebar--close .eui-app-sidebar{box-shadow:none!important;margin-left:calc(var(--eui-app-sidebar-width-active) * -1)}.sidebar--open .eui-app-sidebar{display:initial;margin-left:0;width:75%}}@media screen and (min-width: 768px) and (max-width: 995px){.eui-app-sidebar{z-index:var(--eui-zi-sidebar)}.eui-app-sidebar-body{max-height:100%}.sidebar--close .eui-app-sidebar{box-shadow:none!important;margin-left:calc(var(--eui-app-sidebar-width-active) * -1)}.sidebar--open .eui-app-sidebar{display:initial;margin-left:0;width:50%}.sidebar--hidden.sidebar--open .eui-app-sidebar{box-shadow:var(--eui-sh-4);width:var(--eui-app-sidebar-width-active)}}@media screen and (min-width: 996px){.sidebar--hover .eui-app-sidebar{z-index:var(--eui-zi-sidebar)}.sidebar--close:not(.sidebar--hover) .eui-app-sidebar{width:var(--eui-app-sidebar-width-close)}.sidebar--close:not(.sidebar--hover) .eui-app-sidebar-header{display:none}.sidebar--close:not(.sidebar--hover) .eui-app-sidebar-footer{text-indent:-9999px}.sidebar--hidden.sidebar--close .eui-app-sidebar{margin-left:calc(var(--eui-app-sidebar-width-active) * -1)}.sidebar--hidden.sidebar--open .eui-app-sidebar{box-shadow:var(--eui-sh-4);display:initial;margin-left:0;width:var(--eui-app-sidebar-width-active);z-index:var(--eui-zi-sidebar)}}.eui-app-sidebar-drawer{display:none}.eui-app.sidebar--open.md .eui-app-sidebar-drawer,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer{display:flex;height:100%;position:fixed;top:100vh;transition:top .25s ease-in-out}.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content{background:var(--eui-c-surface-shell);border-top:1px solid var(--eui-c-divider);height:calc(100% - var(--eui-app-sidebar-header-user-profile));overflow-y:auto;padding:var(--eui-s-s);width:100%}.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content::-webkit-scrollbar,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content::-webkit-scrollbar,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content::-webkit-scrollbar{display:inherit;height:8px;width:8px;background-color:var(--eui-c-s-secondary-surface-light)}.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb{background-color:var(--_eui-scrollbars-foreground-color);border-radius:5rem}.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb:hover,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb:hover,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content::-webkit-scrollbar-thumb:hover{background-color:var(--eui-c-s-secondary-surface)}.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content::-webkit-scrollbar-track,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content::-webkit-scrollbar-track,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content::-webkit-scrollbar-track{background-color:var(--eui-c-s-secondary-surface-light);border-radius:0}@-moz-document url-prefix(){.eui-app.sidebar--open.md .eui-app-sidebar-drawer-content,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer-content,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer-content{scrollbar-color:var(--eui-c-s-secondary-surface) var(--eui-c-s-secondary-surface-light);scrollbar-width:auto}}.eui-app.sidebar--open.md .eui-app-sidebar-drawer--expanded,.eui-app.sidebar--open.xs .eui-app-sidebar-drawer--expanded,.eui-app.sidebar--open.sm .eui-app-sidebar-drawer--expanded{top:var(--eui-app-sidebar-header-user-profile);position:absolute;width:100%}.eui-app.sidebar--close.md .eui-app-sidebar-drawer,.eui-app.sidebar--close.xs .eui-app-sidebar-drawer,.eui-app.sidebar--close.sm .eui-app-sidebar-drawer{position:fixed;top:100vh}@media screen and (max-width: 767px){.eui-app-sidebar-drawer,.eui-app-sidebar-drawer--expanded{width:75%}}@media screen and (min-width: 768px) and (max-width: 995px){.eui-app-sidebar-drawer,.eui-app-sidebar-drawer--expanded{width:50%}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Tl = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Qr, pr] });
            }
          }
          return u;
        })();
      const Jf = [hr, Fc, Zr, Il, Qr, pr, Oc];
      let Kr = (() => {
          class u {
            constructor() {
              ((this.role = "banner"),
                (this.euiSecondary = !1),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.document = (0, i.WQX)(le.q)));
            }
            get cssClasses() {
              return [
                "eui-app-toolbar",
                this.euiSecondary
                  ? "eui-app-toolbar--secondary eui--secondary"
                  : "eui-app-toolbar--primary eui--primary",
              ]
                .join(" ")
                .trim();
            }
            ngOnInit() {
              this.asService.activateToolbar();
            }
            ngOnDestroy() {
              (this.asService.setState({
                ...this.asService.state,
                hasToolbar: !1,
              }),
                this.document.documentElement.style.removeProperty(
                  "--eui-app-toolbar-height",
                ));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-toolbar"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.cssClasses));
                },
                inputs: {
                  euiSecondary: [2, "euiSecondary", "euiSecondary", i.L39],
                },
                ngContentSelectors: mt,
                decls: 6,
                vars: 8,
                consts: [
                  [1, "eui-app-toolbar__sidebar-toggle"],
                  ["isToolbarSelector", ""],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(),
                    i.DNE(0, Vu, 1, 0, "eui-sidebar-toggle", 0),
                    i.nI1(1, "async"),
                    i.SdG(2),
                    i.DNE(3, gf, 1, 0, "eui-language-selector", 1),
                    i.nI1(4, "async"),
                    i.nI1(5, "async")),
                    2 & d &&
                      (i.vxM(
                        i.bMT(1, 2, p.asService.getState("hasSidebar"))
                          ? 0
                          : -1,
                      ),
                      i.R7$(3),
                      i.vxM(
                        i.bMT(4, 4, p.asService.getState("hasHeader")) &&
                          i.bMT(5, 6, p.asService.breakpoints$).isMobile
                          ? 3
                          : -1,
                      )));
                },
                dependencies: [Xe.Jj, Xr, li],
                styles: [
                  ".eui-app-toolbar{align-items:center;width:100%;height:var(--eui-app-toolbar-height);display:flex;position:fixed;right:0;left:0;top:calc(var(--eui-app-header-height) + var(--eui-app-top-message-height));z-index:var(--eui-zi-nav);border-bottom:1px solid var(--eui-c-divider)}.eui-app-toolbar__sidebar-toggle{padding-left:var(--eui-s-xs);padding-right:var(--eui-s-xs)}.eui-app-toolbar--primary{background-color:var(--eui-c-branding);color:var(--eui-c-white)}.eui-app-toolbar--primary .eui-icon-svg{--_color: var(--eui-c-white)}.eui-app-toolbar--secondary{background-color:var(--eui-c-surface-shell);color:var(--eui-c-text)}.modal-open .eui-app-toolbar{z-index:auto}.eui-t-ec .eui-app-toolbar__sidebar-toggle{padding-top:calc(var(--eui-s-m) + 2px)}@media screen and (max-width: 767px){.eui-app-toolbar__sidebar-toggle{padding-right:0}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Pc = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Kr] });
            }
          }
          return u;
        })();
      const jc = [Kr];
      let Bc = (() => {
          class u {
            constructor() {
              ((this.role = "banner"),
                (this.isCloseable = !1),
                (this.hasCustomContent = !1),
                (this.topMessageClose = new i.bkB()),
                (this.asService = (0, i.WQX)($.OQR)),
                (this._isVisible = !0),
                (this.destroy$ = new yn.B()),
                (this.elRef = (0, i.WQX)(i.aKT)),
                (this.cd = (0, i.WQX)(i.gRc)),
                (this.obs = (0, i.WQX)(mf.io)),
                (this.baseStatesDirective = (0, i.WQX)(un.hX)),
                (this.document = (0, i.WQX)(le.q)));
            }
            get cssClasses() {
              return [
                this.baseStatesDirective.getCssClasses("eui-app-top-message"),
                this.isVisible ? "" : "eui-app-top-message--hidden",
                this.hasCustomContent ? "eui-app-top-message--custom" : "",
              ]
                .join(" ")
                .trim();
            }
            set isVisible(a) {
              ((this._isVisible = a), this._calculateHeight());
            }
            get isVisible() {
              return this._isVisible;
            }
            ngOnInit() {
              this.asService.breakpoint$
                .pipe((0, Vn.Q)(this.destroy$))
                .subscribe(() => {
                  this._calculateHeight();
                });
            }
            ngAfterViewInit() {
              this.appTopMessageChanges = this.obs
                .observe(this.appTopMessage.nativeElement)
                .pipe((0, fn.Z)(0))
                .subscribe(() => this._calculateHeight());
            }
            ngOnDestroy() {
              (this.asService.setState({
                ...this.asService.state,
                hasTopMessage: !1,
              }),
                $.RIB.activateTopMessageCssVars(0, this.document),
                this.appTopMessageChanges.unsubscribe(),
                this.destroy$.next(!0),
                this.destroy$.unsubscribe());
            }
            onCloseClick() {
              ((this.isVisible = !1),
                $.RIB.activateTopMessageCssVars(0, this.document),
                this.topMessageClose.emit());
            }
            _calculateHeight() {
              setTimeout(() => {
                (this.cd.detach(),
                  this.asService.activateTopMessage(
                    this.elRef.nativeElement.offsetHeight,
                  ),
                  this.cd.reattach(),
                  this.cd.detectChanges());
              }, 0);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app-top-message"]],
                viewQuery: function (d, p) {
                  if ((1 & d && i.GBs(Zi, 5), 2 & d)) {
                    let D;
                    i.mGM((D = i.lsd())) && (p.appTopMessage = D.first);
                  }
                },
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.cssClasses));
                },
                inputs: {
                  isCloseable: [2, "isCloseable", "isCloseable", i.L39],
                  hasCustomContent: [
                    2,
                    "hasCustomContent",
                    "hasCustomContent",
                    i.L39,
                  ],
                  isVisible: "isVisible",
                },
                outputs: { topMessageClose: "topMessageClose" },
                features: [
                  i.nM4([
                    {
                      directive: un.hX,
                      inputs: [
                        "euiPrimary",
                        "euiPrimary",
                        "euiInfo",
                        "euiInfo",
                        "euiWarning",
                        "euiWarning",
                        "euiSuccess",
                        "euiSuccess",
                        "euiDanger",
                        "euiDanger",
                        "euiAccent",
                        "euiAccent",
                        "euiVariant",
                        "euiVariant",
                      ],
                    },
                  ]),
                ],
                ngContentSelectors: mt,
                decls: 5,
                vars: 1,
                consts: [
                  ["appTopMessage", ""],
                  [1, "eui-app-top-message__wrapper"],
                  [1, "eui-app-top-message__content"],
                  [
                    "icon",
                    "close:outline",
                    "ariaLabel",
                    "Close top message",
                    "fillColor",
                    "white",
                    "euiRounded",
                    "",
                    1,
                    "eui-app-top-message__close",
                  ],
                  [
                    "icon",
                    "close:outline",
                    "ariaLabel",
                    "Close top message",
                    "fillColor",
                    "white",
                    "euiRounded",
                    "",
                    1,
                    "eui-app-top-message__close",
                    3,
                    "buttonClick",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(),
                    i.j41(0, "div", 1, 0)(2, "div", 2),
                    i.SdG(3),
                    i.k0s(),
                    i.DNE(4, Gu, 1, 0, "eui-icon-button", 3),
                    i.k0s()),
                    2 & d && (i.R7$(4), i.vxM(p.isCloseable ? 4 : -1)));
                },
                dependencies: [Tn._x],
                styles: [
                  ".eui-app-top-message{padding:var(--eui-s-xs) var(--eui-s-s);position:fixed;width:100%;right:0;top:0;z-index:var(--eui-zi-top-message);background-color:var(--eui-c-s-danger-surface);color:var(--eui-c-s-danger-surface-contrast)}.eui-app-top-message__wrapper{display:flex;flex-direction:row;align-items:center;width:100%}.eui-app-top-message__content{display:flex;flex-direction:column;width:100%}.eui-app-top-message__close{margin-left:auto}.eui-app-top-message--primary{background-color:var(--eui-c-s-primary-surface);color:var(--eui-c-s-primary-surface-contrast)}.eui-app-top-message--primary .eui-app-top-message__close .eui-icon-button__button:hover{background-color:var(--eui-c-s-primary-surface-hover)!important}.eui-app-top-message--info{background-color:var(--eui-c-s-info-surface);color:var(--eui-c-s-info-surface-contrast)}.eui-app-top-message--info .eui-app-top-message__close .eui-icon-button__button:hover{background-color:var(--eui-c-s-info-surface-hover)!important}.eui-app-top-message--success{background-color:var(--eui-c-s-success-surface);color:var(--eui-c-s-success-surface-contrast)}.eui-app-top-message--success .eui-app-top-message__close .eui-icon-button__button:hover{background-color:var(--eui-c-s-success-surface-hover)!important}.eui-app-top-message--warning{background-color:var(--eui-c-s-warning-surface);color:var(--eui-c-s-warning-surface-contrast)}.eui-app-top-message--warning .eui-app-top-message__close .eui-icon-button__button:hover{background-color:var(--eui-c-s-warning-surface-hover)!important}.eui-app-top-message--danger{background-color:var(--eui-c-s-danger-surface);color:var(--eui-c-s-danger-surface-contrast)}.eui-app-top-message--danger .eui-app-top-message__close .eui-icon-button__button:hover{background-color:var(--eui-c-s-danger-surface-hover)!important}.eui-app-top-message--hidden{display:none}.eui-app-top-message--custom{padding:0}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Sl = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Bc] });
            }
          }
          return u;
        })();
      const qf = [Bc];
      let wl = (() => {
          class u {
            constructor() {
              this.class = "eui-toolbar-app";
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-app"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                inputs: { appName: "appName", appSubTitle: "appSubTitle" },
                decls: 2,
                vars: 1,
                consts: [
                  [1, "eui-toolbar-app__name"],
                  [1, "eui-toolbar-app__subTitle"],
                ],
                template: function (d, p) {
                  (1 & d && i.DNE(0, _f, 4, 2)(1, Ls, 1, 1),
                    2 & d && i.vxM(p.appSubTitle ? 0 : 1));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        zs = (() => {
          class u {
            constructor() {
              this.class = "eui-toolbar-environment";
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-environment"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Yr = (() => {
          class u {
            constructor() {
              this.string = "eui-toolbar-item";
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-item"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.string);
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        qt = (() => {
          class u {
            constructor() {
              ((this.euiEnd = !1), (this.euiPositionRight = !1));
            }
            get cssClasses() {
              const a = "eui-toolbar-items";
              return [
                a,
                this.euiEnd ? `${a}--position-right` : "",
                this.euiPositionRight ? `${a}--position-right` : "",
              ]
                .join(" ")
                .trim();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-items"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  euiEnd: [2, "euiEnd", "euiEnd", i.L39],
                  euiPositionRight: [
                    2,
                    "euiPositionRight",
                    "euiPositionRight",
                    i.L39,
                  ],
                },
                ngContentSelectors: mt,
                decls: 1,
                vars: 0,
                template: function (d, p) {
                  1 & d && (i.NAR(), i.SdG(0));
                },
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Ws = (() => {
          class u {
            constructor() {
              ((this.class = "eui-toolbar-logo"),
                (this.homeUrl = ".."),
                (this.logoHeight = "36px"),
                (this.logoWidth = "53px"),
                (this.router = (0, i.WQX)(ce.Ix)),
                (this.config = (0, i.WQX)($.Vlf, { optional: !0 })));
            }
            onClick() {
              this.router.navigate([this.homeUrl]);
            }
            ngOnInit() {
              let a = this.config?.appConfig?.global?.eui?.assetsBaseUrl;
              (a || (a = "assets"),
                (this.logoUrlGenerated = this.logoUrl
                  ? this.logoUrl
                  : `${a}/images/ec-europa/logos/europa-flag-small.png`),
                (this.logoStyle = `width:${this.logoWidth}; height:${this.logoHeight};`));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-logo"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function () {
                      return p.onClick();
                    }),
                    2 & d && i.HbH(p.class));
                },
                inputs: {
                  homeUrl: "homeUrl",
                  logoUrl: "logoUrl",
                  logoHeight: "logoHeight",
                  logoWidth: "logoWidth",
                },
                decls: 1,
                vars: 3,
                consts: [
                  [
                    "alt",
                    "application logo",
                    1,
                    "eui-toolbar-logo__image",
                    3,
                    "src",
                  ],
                ],
                template: function (d, p) {
                  (1 & d && i.nrm(0, "img", 0),
                    2 & d &&
                      (i.Aen(p.logoStyle),
                      i.Y8G("src", p.logoUrlGenerated, i.B4B)));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            }
          }
          return u;
        })(),
        Vc = (() => {
          class u {
            constructor() {
              ((this.string = "eui-toolbar-mega-menu"),
                (this.role = "nav"),
                (this.activeMenu = null),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.document = (0, i.WQX)(le.q)),
                (this.subs = new te.yU()));
            }
            ngOnInit() {
              (this.asService.activateToolbarMegaMenu(),
                (this.megaMenuItems = this.filterMegaMenuItems(this.items)),
                (this.megaMenuItemsGrouped = this.groupByColIdPerParent(
                  this.megaMenuItems,
                )),
                this.subs.add(
                  this.asService
                    .getState("menuLinks")
                    .subscribe((a) => (this.items = a)),
                ));
            }
            ngOnChanges(a) {
              a.items &&
                this.asService.setState({
                  ...this.asService.state,
                  menuLinks: a.items.currentValue,
                });
            }
            ngOnDestroy() {
              (this.asService.setState({
                ...this.asService.state,
                hasToolbarMegaMenu: !1,
              }),
                this.document.documentElement.style.removeProperty(
                  "--eui-app-toolbar-mega-menu-height",
                ));
            }
            closeMenu() {
              this.activeMenu = null;
            }
            openMenu(a) {
              this.activeMenu = a;
            }
            groupByColIdPerParent(a) {
              const d = {};
              return (
                a.forEach((p, D) => {
                  const V = {};
                  (p.children?.forEach((Ue) => {
                    const Ut = Ue.megaMenuColIndex ?? "eui-no-col-label",
                      En = Ue.megaMenuColLabel ?? "eui-no-label";
                    (V[Ut] || (V[Ut] = {}),
                      V[Ut][En] || (V[Ut][En] = []),
                      V[Ut][En].push(Ue));
                  }),
                    (d[D] = V));
                }),
                d
              );
            }
            filterMegaMenuItems(a) {
              return a.map((d) => {
                const p = { ...d };
                return (
                  p.children &&
                    (p.children = this.filterMegaMenuItems(p.children)),
                  p
                );
              });
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-mega-menu"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  2 & d && (i.BMQ("role", p.role), i.HbH(p.string));
                },
                inputs: { items: "items" },
                features: [i.OA$],
                decls: 6,
                vars: 0,
                consts: [
                  ["itemContent", ""],
                  [3, "mouseleave"],
                  [
                    "href",
                    "javascript: void(0)",
                    3,
                    "active",
                    "mega-menu-item--disabled",
                  ],
                  [3, "routerLink", "active", "mega-menu-item--disabled"],
                  [1, "mega-menu__container"],
                  ["href", "javascript: void(0)", 3, "click", "focus"],
                  [1, "mega-menu-item-icon", 3, "icon", "fillColor"],
                  [
                    "icon",
                    "eui-chevron-down:eui",
                    "size",
                    "xs",
                    1,
                    "eui-u-ml-s",
                  ],
                  [3, "click", "focus", "routerLink"],
                  [1, "mega-menu__container-col"],
                  [1, "mega-menu-items"],
                  [1, "mega-menu-item"],
                  [1, "mega-menu-item__category"],
                  [1, "mega-menu-item__link"],
                  [3, "routerLink", "mega-menu-item--disabled"],
                  [3, "href", "target", "mega-menu-item--disabled"],
                  [3, "routerLink"],
                  [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                  [3, "href", "target"],
                  [1, "mega-menu-item__link-start-block"],
                  [1, "mega-menu-item__link-icon", 3, "icon", "fillColor"],
                  [
                    "icon",
                    "ellipse:sharp",
                    "size",
                    "2xs",
                    3,
                    "fillColor",
                    "aria-label",
                  ],
                  [1, "mega-menu-item__link-content-block"],
                  [1, "mega-menu-item__link-label-container"],
                  [1, "mega-menu-item__link-label"],
                  [1, "mega-menu-item__link-end-block"],
                  ["euiOutline", "", 3, "euiVariant"],
                ],
                template: function (d, p) {
                  if (1 & d) {
                    const D = i.RV6();
                    (i.j41(0, "nav", 1),
                      i.bIt("mouseleave", function () {
                        return (i.eBV(D), i.Njj(p.closeMenu()));
                      }),
                      i.j41(1, "ul"),
                      i.Z7z(2, Ng, 4, 2, "li", null, i.Vm6),
                      i.k0s()(),
                      i.DNE(4, Wu, 9, 3, "ng-template", null, 0, i.C5r));
                  }
                  2 & d && (i.R7$(2), i.Dyx(p.megaMenuItems));
                },
                dependencies: [tt.aV, ti.C4, Me.Wk, Xe.lG, Xe.T3],
                styles: [
                  ".eui-toolbar-mega-menu{width:100%;position:fixed;left:0;background-color:var(--eui-c-branding);padding:0;margin:0;top:calc(var(--eui-app-header-height) + var(--eui-app-top-message-height));height:var(--eui-app-toolbar-mega-menu-height)}.eui-toolbar-mega-menu nav{height:100%;margin:0;padding:0;width:100%}.eui-toolbar-mega-menu nav ul{display:flex;height:100%;list-style:none;margin:0;padding:0;position:relative}.eui-toolbar-mega-menu nav ul>li{align-items:center;display:flex}.eui-toolbar-mega-menu nav ul>li a{align-items:center;color:var(--eui-c-branding-contrast);display:flex;height:100%;padding:0 var(--eui-s-l);text-decoration:none}.eui-toolbar-mega-menu nav ul>li a:hover,.eui-toolbar-mega-menu nav ul>li a.active{background-color:var(--eui-c-branding-contrast);color:var(--eui-c-branding)}.eui-toolbar-mega-menu nav ul>li a .mega-menu-item-icon{margin-right:var(--eui-s-xs)}.eui-toolbar-mega-menu nav ul>li a .mega-menu-item-icon:hover .eui-icon-svg>svg,.eui-toolbar-mega-menu nav ul>li a .mega-menu-item-icon.active .eui-icon-svg>svg{fill:var(--eui-c-branding)}.eui-toolbar-mega-menu nav ul>li .mega-menu__container{position:absolute;top:var(--eui-app-toolbar-mega-menu-height);background-color:var(--eui-c-surface-shell);box-shadow:var(--eui-sh-8);gap:var(--eui-s-m);max-height:85vh;overflow:auto;display:flex}.eui-toolbar-mega-menu nav ul>li .mega-menu__container-col{border-right:var(--eui-bw-xs) solid var(--eui-c-divider-light);width:300px}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items{border:var(--eui-bw-xs) solid transparent;display:flex;display:list-item;flex-direction:column;overflow:auto;position:relative;width:100%}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item{display:flex;flex-direction:column;position:relative;width:100%}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item:hover,.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item.active{background-color:var(--eui-c-surface-shell);color:var(--eui-c-text)}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__category{color:var(--eui-c-text);cursor:default;font:var(--eui-f-l-bold);padding:var(--eui-s-xl) var(--eui-s-m) var(--eui-s-xs) var(--eui-s-m);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__category:empty{display:none}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link{align-items:center;display:flex;outline:var(--eui-bw-xs) solid transparent;outline-offset:-1px;width:100%}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link a{color:var(--eui-c-text);cursor:pointer;display:flex;font:var(--eui-f-m);gap:var(--eui-s-xs);outline:var(--eui-bw-xs) solid transparent;outline-offset:-1px;padding:var(--eui-s-xs) var(--eui-s-m);text-decoration:none;width:100%}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link a:hover{background-color:var(--eui-c-s-primary-surface-light);text-decoration:underline}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link a:focus-visible{outline:var(--eui-bw-xs) solid var(--eui-c-focus-visible)}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-start-block{align-items:center;display:flex}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-start-block:empty{display:none}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-content-block{display:flex;flex-direction:column;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-content-block .mega-menu-item__link-label-container{align-items:center;display:flex;position:relative;width:100%}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-content-block .mega-menu-item__link-label-container .mega-menu-item__link-label{color:var(--eui-c-text);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-end-block{align-items:center;display:flex;gap:var(--eui-s-xs);text-decoration:none}.eui-toolbar-mega-menu nav ul>li .mega-menu__container ul.mega-menu-items .mega-menu-item__link-end-block:empty{display:none}.eui-toolbar-mega-menu .mega-menu-item--disabled{cursor:default;opacity:var(--eui-o-50);pointer-events:none}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Al = (() => {
          class u {
            get cssClasses() {
              return "eui-toolbar-menu";
            }
            constructor() {
              ((this.menuItemClick = new i.bkB()),
                (this.isdropdownOpen = !1),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.cd = (0, i.WQX)(i.gRc)),
                (this.document = (0, i.WQX)(le.q)),
                (this.subs = new te.yU()));
            }
            ngOnInit() {
              (this.asService.setState({
                ...this.asService.state,
                hasToolbarMenu: !0,
              }),
                this.subs.add(
                  this.asService
                    .getState("menuLinks")
                    .subscribe((a) => (this.items = a)),
                ));
            }
            ngOnDestroy() {
              (this.subs.unsubscribe(),
                this.asService.setState({
                  ...this.asService.state,
                  hasToolbarMenu: !1,
                }));
            }
            ngOnChanges(a) {
              a.items &&
                this.asService.setState({
                  ...this.asService.state,
                  menuLinks: a.items.currentValue,
                });
            }
            onLinkClick(a) {
              (a.url && window.scrollTo(0, 0),
                !a.disabled && a.children && this.menuItemClick.emit(a),
                !a.disabled &&
                  !a.children &&
                  (this.menuItemClick.emit(a),
                  this.document
                    .querySelectorAll("#top-menu li:hover > ul")
                    .forEach((D) => {
                      (D.classList.remove("show"),
                        D.classList.remove("showOnEnter"));
                    }),
                  this.document
                    .querySelectorAll("#top-menu li:hover")
                    .forEach((D) => {
                      D.addEventListener("mouseover", (V) => {
                        const Ue = D.querySelector("#top-menu li:hover > ul"),
                          Ut = Ue ? !Ue.classList.contains("show") : null;
                        (V.preventDefault(),
                          Ut && Ue.classList.add("show"),
                          V.stopPropagation());
                      });
                    })),
                a.urlExternal &&
                  window.open(a.urlExternal, a?.urlExternalTarget || "_blank"),
                a.command && a.command());
            }
            onKeyDown(a, d) {
              switch (a.key) {
                case "Enter":
                  (d.url && window.scrollTo(0, 0),
                    d.children &&
                      (this.menuItemClick.emit(d), (this.isdropdownOpen = !0)),
                    d.children ||
                      (this.menuItemClick.emit(d), (this.isdropdownOpen = !1)),
                    d.urlExternal && window.open(d.urlExternal, d.urlExternal),
                    d.command && d.command());
                  break;
                case "Tab":
                  if (this.isdropdownOpen) {
                    const p = Array.from(
                      this.document.querySelectorAll(".child > a"),
                    ).reverse()[0];
                    p.onblur = () => {
                      a.shiftKey ||
                        ((this.isdropdownOpen = !1),
                        this.cd.detectChanges(),
                        (p.onblur = () => {}));
                    };
                  }
                  break;
                case "Escape":
                  this.isdropdownOpen = !1;
              }
              if (a.shiftKey && "Tab" === a.key && this.isdropdownOpen) {
                const p = Array.from(
                  this.document.querySelectorAll(".child > a"),
                )[0];
                ((p.onblur = () => {
                  ((this.isdropdownOpen = !1),
                    this.cd.detectChanges(),
                    (p.onblur = () => {}));
                }),
                  d.children && (this.isdropdownOpen = !1));
              }
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-menu"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: { items: "items" },
                outputs: { menuItemClick: "menuItemClick" },
                features: [i.OA$],
                decls: 1,
                vars: 1,
                consts: [
                  ["id", "top-menu", 1, "eui-toolbar-menu-content"],
                  ["routerLinkActive", "selected", 3, "has-sub", "selected"],
                  ["routerLinkActive", "selected"],
                  [3, "disabled", "tabindex", "title", "icon-home-link"],
                  [3, "routerLink", "disabled", "title", "icon-home-link"],
                  [1, "show", 3, "showOnEnter"],
                  [3, "click", "keydown", "tabindex", "title"],
                  [1, "eui-u-flex"],
                  [1, "eui-u-mr-xs", 3, "icon", "fillColor"],
                  [1, "eui-u-mr-xs", 3, "iconUrl", "fillColor"],
                  [3, "class"],
                  [1, "eui-toolbar-menu-label"],
                  [
                    "icon",
                    "chevron-down:sharp",
                    "size",
                    "xs",
                    1,
                    "eui-u-ml-s",
                    3,
                    "fillColor",
                  ],
                  [3, "click", "keydown", "routerLink", "title"],
                  ["size", "s", 1, "eui-u-mr-xs", 3, "icon", "fillColor"],
                  [
                    "icon",
                    "chevron-down:sharp",
                    "size",
                    "xs",
                    1,
                    "eui-u-ml-xs",
                    3,
                    "fillColor",
                  ],
                  [1, "show"],
                  [1, "child", 3, "has-sub", "separator", "selected"],
                  [1, "child"],
                  [3, "tabindex", "disabled"],
                  [3, "tabindex", "disabled", "routerLink"],
                  [3, "click", "keydown", "tabindex"],
                  [1, "eui-toolbar-menu-item__icon", 3, "icon"],
                  [1, "eui-toolbar-menu-item__label"],
                  [3, "click", "keydown", "tabindex", "routerLink"],
                  [1, "child", 3, "separator"],
                ],
                template: function (d, p) {
                  (1 & d && i.DNE(0, nl, 4, 0, "nav", 0),
                    2 & d && i.vxM(p.items && 0 !== p.items.length ? 0 : -1));
                },
                dependencies: [tt.aV, Me.Wk, Me.wQ, He.h, He.D9],
                styles: [
                  '.eui-toolbar-menu{display:flex;height:var(--eui-app-toolbar-height);width:100%}.eui-toolbar-menu-content{display:grid;height:var(--eui-app-toolbar-height);list-style-type:none;margin:0;padding:0;position:relative;z-index:var(--eui-zi-nav)}.eui-toolbar-menu-content ul:not(.show){display:flex;list-style:none;width:100%;z-index:calc(var(--eui-zi-sidebar) + 1)}.eui-toolbar-menu-content ul,.eui-toolbar-menu-content ul li,.eui-toolbar-menu-content ul li a{border:var(--eui-bw-none);color:var(--eui-c-white);display:block;height:var(--eui-app-toolbar-height);line-height:var(--eui-s-l);margin:0;max-height:var(--eui-app-toolbar-height);min-width:0;padding:0;position:relative;text-decoration:none;display:flex}.eui-toolbar-menu-content ul.disabled,.eui-toolbar-menu-content ul li.disabled,.eui-toolbar-menu-content ul li a.disabled{opacity:var(--eui-o-50)}.eui-toolbar-menu-content ul.disabled:hover,.eui-toolbar-menu-content ul li.disabled:hover,.eui-toolbar-menu-content ul li a.disabled:hover{color:var(--eui-c-text-lighter)!important}.eui-toolbar-menu-content ul.hidden,.eui-toolbar-menu-content ul li.hidden,.eui-toolbar-menu-content ul li a.hidden{display:none!important}.eui-toolbar-menu-content ul:hover,.eui-toolbar-menu-content ul li:hover,.eui-toolbar-menu-content ul li a:hover{background-color:var(--eui-c-branding);text-decoration:none!important}.eui-toolbar-menu-content:after,.eui-toolbar-menu-content>ul:after{clear:both;content:".";display:block;height:0;line-height:0;visibility:hidden}.eui-toolbar-menu-content>ul>li{border-right:1px ridge rgba(255,255,255,.25);box-sizing:border-box;display:inline-block;min-width:60px}.eui-toolbar-menu-content>ul>li:empty{min-width:0}.eui-toolbar-menu-content>ul>li:last-child{border-right:none}.eui-toolbar-menu-content>ul>li>a{padding:var(--eui-s-s);text-align:center;transition:color 0s linear,background-color .2s linear}.eui-toolbar-menu-content>ul>li>a:focus{border-color:var(--eui-c-s-secondary-border-light)!important}.eui-toolbar-menu-content>ul>li>a:not(.icon-home-link){overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-menu-content>ul>li.selected>a,.eui-toolbar-menu-content>ul>li:hover>a{background-color:var(--eui-c-primary-lightest);color:var(--eui-c-text)}.eui-toolbar-menu-content>ul>li.selected>a .eui-icon-svg>svg,.eui-toolbar-menu-content>ul>li:hover>a .eui-icon-svg>svg{color:var(--eui-c-text)!important;fill:var(--eui-c-text)!important}.eui-toolbar-menu-content>ul>li.selected>a.disabled,.eui-toolbar-menu-content>ul>li:hover>a.disabled{background-color:transparent!important;border-left:0;opacity:var(--eui-o-50);cursor:not-allowed}.eui-toolbar-menu-content ul ul{left:-9999px;position:absolute;z-index:var(--eui-zi-nav)}.eui-toolbar-menu-content li:hover>ul.show,.eui-toolbar-menu-content li:focus-within>ul.showOnEnter{flex-direction:column;left:auto;position:fixed}.eui-toolbar-menu-content .showOnEnter a:focus{border-color:var(--eui-c-divider-light)}.eui-toolbar-menu-content ul.show .eui-icon-svg>svg{color:var(--eui-c-white);fill:var(--eui-c-white);height:1.25rem;width:1.25rem}.eui-toolbar-menu-content ul ul ul{margin-left:100%;top:0;z-index:var(--eui-zi-nav)}.eui-toolbar-menu-content ul ul ul.show{position:absolute!important}.eui-toolbar-menu-content ul ul li{height:0;transition:height .2s ease-in-out}.eui-toolbar-menu-content ul ul li.child{background:var(--eui-c-branding-dark);height:auto}.eui-toolbar-menu-content ul ul li.child:empty{min-height:0}.eui-toolbar-menu-content ul ul li.child .eui-toolbar-menu-item__icon{margin-right:var(--eui-s-xs)}.eui-toolbar-menu-content ul ul li.child .eui-toolbar-menu-item__label{padding:var(--eui-s-2xs);position:relative}.eui-toolbar-menu-content ul ul li.hidden{display:none!important}.eui-toolbar-menu-content ul ul li.selected>a{border-left:3px solid var(--eui-c-s-accent-border-light);color:var(--eui-c-s-accent-border)}.eui-toolbar-menu-content ul ul li a,.eui-toolbar-menu-content ul ul li h2{align-items:center;background:var(--eui-c-branding-dark);display:flex;line-height:1.25;min-height:var(--eui-s-3xl);padding:var(--eui-s-2xs) var(--eui-s-xs);text-decoration:none;transition:color .2s ease-in-out;width:260px}.eui-toolbar-menu-content ul ul li h2{color:var(--eui-c-accent);font-size:var(--eui-f-size-m);padding-left:var(--eui-s-xs);padding-top:var(--eui-s-s)}.eui-toolbar-menu-content ul ul li a{border-left:3px solid transparent;padding-left:var(--eui-s-2xs)}.eui-toolbar-menu-content ul ul li:hover>a,.eui-toolbar-menu-content ul ul li a:hover{border-left:3px solid var(--eui-c-s-accent-border);color:var(--eui-c-s-accent-border)!important}.eui-toolbar-menu-content ul ul li.has-sub>a:after{border-bottom:2px solid var(--eui-c-divider);border-right:2px solid var(--eui-c-divider);content:"";height:var(--eui-s-s);position:absolute;right:var(--eui-s-s);transform:rotate(-45deg);width:var(--eui-s-s)}.eui-toolbar-menu-content ul ul li a.disabled{opacity:var(--eui-o-50);cursor:default}.eui-toolbar-menu-content ul ul li a.disabled:hover{border-left:3px solid transparent}.eui-toolbar-menu-content ul ul li.separator{background-color:var(--eui-c-s-secondary-surface-light)!important;height:1px!important}.eui-toolbar-menu-content .icon-home-link .eui-icon-svg>svg{height:1.5rem;width:1.5rem}.eui-toolbar-menu-content .icon-menu-item.selected .icon-home-link:after,.eui-toolbar-menu-content .icon-menu-item:hover .icon-home-link:after{border-right:0}.eui-toolbar-menu-content .icon-menu-item.selected .icon-home-link:before,.eui-toolbar-menu-content .icon-menu-item:hover .icon-home-link:before{border-left:0}.eui-toolbar-menu-content .eui-toolbar-menu-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#nav-bar.sidebar-toggle-with-top-menu #top-menu{left:calc(var(--eui-layout-sidebar-width) + var(--eui-f-size-base));position:absolute}\n',
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Jr = (() => {
          class u {
            constructor() {
              ((this.class = "eui-toolbar-navbar"),
                (this.itemClick = new i.bkB()),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.isDropdownView = !1),
                (this.elementRef = (0, i.WQX)(i.aKT)));
            }
            ngAfterContentInit() {
              this.baseItemSelected = this.items.filter((a) => a.isActive)[0];
            }
            ngAfterViewInit() {
              const a =
                this.elementRef.nativeElement.closest(
                  "eui-toolbar",
                ).clientWidth;
              this.elementRef.nativeElement.clientWidth > a &&
                setTimeout(() => {
                  this.isDropdownView = !0;
                }, 1);
            }
            itemSelected(a) {
              (this.items.forEach((d) => {
                d.isActive = d.id === a;
              }),
                this.itemClick.emit(a));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-navbar"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, fi, 4), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.items = V);
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                outputs: { itemClick: "itemClick" },
                ngContentSelectors: mt,
                decls: 3,
                vars: 3,
                consts: [
                  ["isLabelUpdatedFromSelectedItem", ""],
                  ["euiButton", "", "euiSecondary", "", "euiSizeS", ""],
                  [1, "eui-label"],
                  ["icon", "chevron-down:sharp", "size", "s"],
                  ["euiDropdownItem", "", 3, "ariaLabel"],
                  ["euiDropdownItem", "", 3, "click", "ariaLabel"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(),
                    i.DNE(0, Os, 8, 2, "eui-dropdown", 0),
                    i.nI1(1, "async"),
                    i.DNE(2, il, 1, 0)),
                    2 & d &&
                      i.vxM(
                        i.bMT(1, 1, p.asService.breakpoints$).isLtLargeTablet ||
                          p.isDropdownView
                          ? 0
                          : 2,
                      ));
                },
                dependencies: [Xe.Jj, tt.aV, kt.J8, Hn.mf, Hn.lv, Hn.LL],
                styles: [
                  ".eui-toolbar-navbar{display:flex;align-items:center;width:100%;padding:0 var(--eui-s-s);height:var(--eui-s-5xl)}.eui-toolbar-navbar-item{display:flex;align-items:center;height:100%;padding:var(--eui-s-m) var(--eui-s-s);border-bottom:2px solid transparent;font:var(--eui-f-bold);cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:4px}.eui-toolbar-navbar-item:focus-visible:not([readonly]){outline:2px solid var(--eui-c-focus-visible)!important;outline-offset:-2px!important;transition:none}.eui-toolbar-navbar-item:hover{background-color:var(--eui-c-branding-dark)}.eui-toolbar-navbar-item--active{border-bottom:3px solid var(--eui-c-white);color:var(--eui-c-white)}.eui--secondary .eui-toolbar-navbar-item:hover{background-color:var(--eui-c-surface-container-1)}.eui--secondary .eui-toolbar-navbar-item--active{border-bottom:3px solid var(--eui-c-active);color:var(--eui-c-active)}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        fi = (() => {
          class u {
            get cssClasses() {
              return [
                "eui-toolbar-navbar-item",
                this.isActive ? "eui-toolbar-navbar-item--active" : "",
              ]
                .join(" ")
                .trim();
            }
            constructor() {
              ((this.tabindex = 0), (this.isActive = !1));
              const a = (0, i.WQX)(Jr, { host: !0, optional: !0 });
              this.navBarComponentParent = a;
            }
            onClick() {
              this._click();
            }
            onKeydown(a) {
              switch (a.code) {
                case "Enter":
                case "Space":
                  (a.preventDefault(), a.stopPropagation(), this._click());
              }
            }
            _click() {
              this.navBarComponentParent.itemSelected(this.id);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-navbar-item"]],
                hostVars: 3,
                hostBindings: function (d, p) {
                  (1 & d &&
                    i.bIt("click", function () {
                      return p.onClick();
                    })("keydown", function (V) {
                      return p.onKeydown(V);
                    }),
                    2 & d &&
                      (i.BMQ("tabindex", p.tabindex), i.HbH(p.cssClasses)));
                },
                inputs: {
                  id: "id",
                  label: "label",
                  isActive: [2, "isActive", "isActive", i.L39],
                },
                decls: 1,
                vars: 1,
                template: function (d, p) {
                  (1 & d && i.EFF(0), 2 & d && i.JRh(p.label));
                },
                encapsulation: 2,
                changeDetection: 0,
              });
            }
          }
          return u;
        })(),
        Xs = (() => {
          class u {
            constructor() {
              ((this.isInputFocus = !1),
                (this.searchInput = ""),
                (this.panelWidth = "25vw"),
                (this.searchResults = []),
                (this.isAutocomplete = !1),
                (this.isInputText = !1),
                (this.hasSearchButton = !1),
                (this.hasExpandAnimation = !0),
                (this.search = new i.bkB()),
                (this.selectionChange = new i.bkB()),
                (this.searchClick = new i.bkB()),
                (this.inputFocus = new i.bkB()),
                (this.inputBlur = new i.bkB()),
                (this.asService = (0, i.WQX)($.OQR)));
            }
            get cssClasses() {
              return [
                "eui-toolbar-search",
                this.isInputFocus ? "eui-toolbar-search--focus" : "",
                this.hasExpandAnimation
                  ? ""
                  : "eui-toolbar-search--no-animation",
              ]
                .join(" ")
                .trim();
            }
            ngAfterContentInit() {
              (this.isAutocomplete && (this.isInputText = !1),
                this.isInputText && (this.isAutocomplete = !1),
                !this.isInputText &&
                  !this.isAutocomplete &&
                  (this.isAutocomplete = !0));
            }
            ngAfterViewInit() {
              this.templates.forEach((a) => {
                "resultItemTemplate" === a.getType() &&
                  (this.resultItemTemplate = a.template);
              });
            }
            onSelectionChange(a) {
              this.selectionChange.emit(a);
            }
            onInputFocus(a) {
              (this.inputFocus.emit(a), (this.isInputFocus = !0));
            }
            onInputBlur(a) {
              (!this.hasSearchButton ||
                (this.hasSearchButton && "" === this.searchInput)) &&
                (this.inputBlur.emit(a), (this.isInputFocus = !1));
            }
            onSearch(a) {
              ((this.searchTerm = a), this.search.emit(a));
            }
            onSearchInput(a) {
              ("Enter" === a.code || "NumpadEnter" === a.code) &&
                ((this.searchTerm = this.searchInput),
                this.search.emit(this.searchInput));
            }
            onSearchClick(a) {
              a
                ? this.searchClick.emit(null)
                : ((this.isInputFocus = !1),
                  this.searchInput && this.searchClick.emit(this.searchInput));
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-search"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && i.wni(D, wo.rd, 4), 2 & d)) {
                    let V;
                    i.mGM((V = i.lsd())) && (p.templates = V);
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  placeholderLabel: "placeholderLabel",
                  panelWidth: "panelWidth",
                  searchResults: "searchResults",
                  isAutocomplete: [
                    2,
                    "isAutocomplete",
                    "isAutocomplete",
                    i.L39,
                  ],
                  isInputText: [2, "isInputText", "isInputText", i.L39],
                  hasSearchButton: [
                    2,
                    "hasSearchButton",
                    "hasSearchButton",
                    i.L39,
                  ],
                  hasExpandAnimation: [
                    2,
                    "hasExpandAnimation",
                    "hasExpandAnimation",
                    i.L39,
                  ],
                },
                outputs: {
                  search: "search",
                  selectionChange: "selectionChange",
                  searchClick: "searchClick",
                  inputFocus: "inputFocus",
                  inputBlur: "inputBlur",
                },
                decls: 3,
                vars: 3,
                consts: [
                  ["icon", "search:outline-ecl-search"],
                  ["euiIconPositionEnd", ""],
                  ["icon", "search:outline-ecl-search", 3, "buttonClick"],
                  [3, "autocompleteData", "placeholder", "panelWidth"],
                  [
                    "euiButton",
                    "",
                    "euiIconButton",
                    "",
                    "euiSizeS",
                    "",
                    "aria-label",
                    "search button",
                    1,
                    "eui-toolbar-search__input-button",
                    3,
                    "euiSecondary",
                    "euiPrimary",
                  ],
                  ["icon", "search:outline", "size", "s"],
                  [
                    3,
                    "inputBlur",
                    "inputFocus",
                    "selectionChange",
                    "inputChange",
                    "autocompleteData",
                    "placeholder",
                    "panelWidth",
                  ],
                  ["euiTemplate", "dropdownOption"],
                  [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                  [
                    "euiInputText",
                    "",
                    1,
                    "eui-toolbar-search-bar__input",
                    3,
                    "ngModel",
                    "placeholder",
                  ],
                  [
                    "euiInputText",
                    "",
                    1,
                    "eui-toolbar-search-bar__input",
                    3,
                    "ngModelChange",
                    "focus",
                    "blur",
                    "keydown",
                    "ngModel",
                    "placeholder",
                  ],
                  [
                    "euiButton",
                    "",
                    "euiIconButton",
                    "",
                    "euiSizeS",
                    "",
                    "aria-label",
                    "search button",
                    1,
                    "eui-toolbar-search__input-button",
                    3,
                    "click",
                    "euiSecondary",
                    "euiPrimary",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.DNE(0, Qi, 1, 0, "eui-icon-button", 0),
                    i.nI1(1, "async"),
                    i.DNE(2, Sf, 5, 2, "eui-icon-input", 1)),
                    2 & d &&
                      i.vxM(
                        i.bMT(1, 1, p.asService.breakpoints$).isLtLargeTablet
                          ? 0
                          : 2,
                      ));
                },
                dependencies: [
                  kt.J8,
                  tt.aV,
                  Tn._x,
                  nt.xM,
                  ye.am,
                  g.es,
                  wo.rd,
                  Xe.T3,
                  it.YN,
                  it.me,
                  it.BC,
                  it.vS,
                  Xe.Jj,
                ],
                styles: [
                  ".eui-19   .eui-toolbar-search[_nghost-%COMP%]{display:flex;top:0}.eui-19   .eui-toolbar-search[_nghost-%COMP%]   .eui-button[_ngcontent-%COMP%]   .eui-button__container[_ngcontent-%COMP%]{justify-content:center}.eui-19   .eui-toolbar-search[_nghost-%COMP%]     .eui-input-text{background-color:var(--eui-c-branding-dark);border-color:var(--eui-c-branding-light);text-overflow:ellipsis;transition:width .25s ease-in-out;color:var(--eui-c-branding-dark-contrast);width:200px}.eui-19   .eui-toolbar-search[_nghost-%COMP%]     .eui-input-text--clearable-icon{display:none}.eui-19   .eui-toolbar-search--focus[_nghost-%COMP%]     .eui-input-text{background-color:var(--eui-c-surface-container);color:var(--eui-c-black);width:300px}.eui-19   .eui-toolbar-search--focus[_nghost-%COMP%]     .eui-button{border-color:var(--eui-c-s-primary-surface)}.eui-19   .eui-toolbar-search--focus[_nghost-%COMP%]     .eui-button:hover svg{color:var(--eui-c-white);fill:var(--eui-c-white)}.eui-19   .eui-toolbar-search--focus[_nghost-%COMP%]     .eui-button svg{color:var(--eui-c-neutral-lightest);fill:var(--eui-c-neutral-lightest)}.eui-19   .eui-toolbar-search--focus[_nghost-%COMP%]   .eui-search__icon[_ngcontent-%COMP%]{display:none}.eui-19   .eui-toolbar-search[_nghost-%COMP%]     .eui-button{position:absolute;right:2px;top:2px;color:var(--eui-c-neutral-lightest);background-color:var(--eui-c-primary-darker)}.eui-19   .eui-toolbar-search[_nghost-%COMP%]     .eui-button .eui-icon-svg{z-index:1}.eui-19   .eui-toolbar--no-animation[_nghost-%COMP%]     .eui-input-text{transition:none}.eui-19   .eui-toolbar-search--focus.eui-toolbar-search--no-animation[_nghost-%COMP%]     .eui-input-text{width:200px}.eui-19   .eui--secondary   .eui-toolbar-search[_nghost-%COMP%]     .eui-input-text{background-color:var(--eui-c-surface-container);border-color:var(--eui-c-s-secondary-border-light);color:var(--eui-c-neugral-bg-light-contrast)}.eui-19   .eui--secondary   .eui-toolbar-search[_nghost-%COMP%]     .eui-button{background-color:var(--eui-c-surface-container-1);color:var(--eui-c-text);border-color:var(--eui-c-s-secondary-border-light)}.eui-19   .eui--secondary   .eui-toolbar-search[_nghost-%COMP%]     .eui-button:hover, .eui-19   .eui--secondary   .eui-toolbar-search[_nghost-%COMP%]     .eui-button:focus{background-color:var(--eui-c-surface-container-3);color:var(--eui-c-text)}.eui-19   .eui--secondary   .eui-toolbar-search[_nghost-%COMP%]     .eui-button .eui-icon-svg svg{fill:var(--eui-c-text);color:var(--eui-c-text)}",
                ],
                changeDetection: 0,
              });
            }
          }
          return u;
        })(),
        kl = (() => {
          class u {
            constructor() {
              ((this.class = "eui-toolbar-selector"),
                (this.euiDisabled = !1),
                (this.selectorClick = new i.bkB()),
                (this.asService = (0, i.WQX)($.OQR)));
            }
            onClick() {
              this.selectorClick.emit(!0);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar-selector"]],
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.class);
                },
                inputs: {
                  label: "label",
                  iconSvgName: "iconSvgName",
                  euiDisabled: [2, "euiDisabled", "euiDisabled", i.L39],
                },
                outputs: { selectorClick: "selectorClick" },
                decls: 3,
                vars: 3,
                consts: [
                  ["fillColor", "neutral-bg", 3, "icon"],
                  [
                    "euiButton",
                    "",
                    "euiButtonOutline",
                    "",
                    1,
                    "eui-toolbar-selector__button",
                    3,
                    "euiDisabled",
                  ],
                  ["fillColor", "neutral-bg", 3, "buttonClick", "icon"],
                  [
                    "euiButton",
                    "",
                    "euiButtonOutline",
                    "",
                    1,
                    "eui-toolbar-selector__button",
                    3,
                    "click",
                    "euiDisabled",
                  ],
                  [
                    "fillColor",
                    "neutral-bg",
                    "size",
                    "s",
                    1,
                    "eui-u-ml-m",
                    3,
                    "icon",
                  ],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.DNE(0, wf, 1, 1, "eui-icon-button", 0),
                    i.nI1(1, "async"),
                    i.DNE(2, Af, 3, 3, "button", 1)),
                    2 & d &&
                      i.vxM(
                        i.bMT(1, 1, p.asService.breakpoints$).isLtLargeTablet
                          ? 0
                          : 2,
                      ));
                },
                dependencies: [Xe.Jj, kt.J8, tt.aV, Tn._x],
                styles: [
                  ".eui-toolbar-selector__button{background-color:var(--eui-c-branding-dark)!important;border-color:var(--eui-c-branding-light)!important;border-radius:var(--eui-br-xl)!important;color:var(--eui-c-surface-container-2)!important}.eui-toolbar-selector__button:hover{border-color:var(--eui-c-white)!important;color:var(--eui-c-white)!important}.eui-toolbar-selector__button:hover .eui-icon-svg svg{fill:var(--eui-c-white)!important;color:var(--eui-c-white)!important}.eui-t-dark .eui-toolbar-selector__button{color:var(--eui-c-black)!important}.eui-t-dark .eui-toolbar-selector__button .eui-icon-svg svg{fill:var(--eui-c-black)!important;color:var(--eui-c-black)!important}\n",
                ],
                encapsulation: 2,
                changeDetection: 0,
              });
            }
          }
          return u;
        })(),
        Qn = (() => {
          class u {
            constructor() {
              ((this.euiSecondary = !1),
                (this.euiPrimary = !0),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.elRef = (0, i.WQX)(i.aKT)));
            }
            get cssClasses() {
              return [
                "eui-toolbar",
                this.euiSecondary
                  ? "eui-toolbar--secondary eui--secondary"
                  : "",
                this.euiPrimary ? "eui-toolbar--primary eui--primary" : "",
              ]
                .join(" ")
                .trim();
            }
            ngOnInit() {
              this.euiSecondary && (this.euiPrimary = !1);
            }
            ngAfterViewInit() {
              const a = this.elRef.nativeElement.closest("eui-app-toolbar");
              setTimeout(() => {
                a &&
                  a.classList.contains("eui--secondary") &&
                  ((this.euiSecondary = !0), (this.euiPrimary = !1));
              }, 1);
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-toolbar"]],
                contentQueries: function (d, p, D) {
                  if ((1 & d && (i.wni(D, Al, 5), i.wni(D, Vc, 5)), 2 & d)) {
                    let V;
                    (i.mGM((V = i.lsd())) && (p.hasMenu = V.first),
                      i.mGM((V = i.lsd())) && (p.hasMegaMenu = V.first));
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  euiSecondary: [2, "euiSecondary", "euiSecondary", i.L39],
                  euiPrimary: [2, "euiPrimary", "euiPrimary", i.L39],
                },
                ngContentSelectors: Bo,
                decls: 16,
                vars: 5,
                consts: [
                  ["toolbarCenter", ""],
                  ["toolbarItems", ""],
                  ["toolbarNavbar", ""],
                  ["toolbarMenu", ""],
                  ["toolbarMegaMenu", ""],
                  ["toolbarLanguageSelector", ""],
                  [1, "eui-toolbar__left"],
                  [3, "appName"],
                  [4, "ngTemplateOutlet"],
                  [1, "eui-toolbar__right"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(ll),
                    i.DNE(0, j, 9, 11),
                    i.nI1(1, "async"),
                    i.nI1(2, "async"),
                    i.DNE(3, Ps, 4, 4)(
                      4,
                      On,
                      1,
                      0,
                      "ng-template",
                      null,
                      0,
                      i.C5r,
                    )(6, Ki, 1, 0, "ng-template", null, 1, i.C5r)(
                      8,
                      ac,
                      1,
                      0,
                      "ng-template",
                      null,
                      2,
                      i.C5r,
                    )(10, Yi, 1, 1, "ng-template", null, 3, i.C5r)(
                      12,
                      lc,
                      1,
                      1,
                      "ng-template",
                      null,
                      4,
                      i.C5r,
                    )(14, Ff, 1, 0, "ng-template", null, 5, i.C5r)),
                    2 & d &&
                      i.vxM(
                        i.bMT(1, 1, p.asService.state$).hasHeader &&
                          i.bMT(2, 3, p.asService.breakpoints$).isMobile
                          ? 0
                          : 3,
                      ));
                },
                dependencies: [Xe.Jj, Xe.T3, Ws, zs, wl],
                styles: [
                  ".eui-toolbar{align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;height:var(--eui-app-toolbar-height);justify-content:space-between;padding:0 var(--eui-s-m) 0 var(--eui-s-s);position:relative;width:100%;border-bottom:1px solid var(--eui-c-divider);overflow:hidden}.eui-toolbar__left,.eui-toolbar__start{display:flex;align-items:center;flex:1}.eui-toolbar__center{display:block;margin-left:auto;text-align:center}.eui-toolbar__right{align-items:center;display:flex;flex:1;justify-content:right}.eui-toolbar-items{align-items:center;display:flex;margin-left:auto;position:relative;gap:var(--eui-s-s)}.eui-toolbar-items--position-left{margin-right:auto}.eui-toolbar-items--position-right{margin-left:auto}.eui-toolbar-items>*{display:inline-flex}.eui-toolbar-item{display:flex;align-items:center}.eui-toolbar-logo{display:flex;margin-right:var(--eui-s-m)}.eui-toolbar-logo__image{background-size:cover;cursor:pointer;height:40px}.eui-toolbar-app{font:var(--eui-f-xl);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-app__name{font:var(--eui-f-l);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-app__subTitle{font:var(--eui-f-m);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar-environment{background-color:var(--eui-c-s-danger);color:var(--eui-c-white);cursor:pointer;font:var(--eui-f-s);left:var(--eui-s-3xs);pointer-events:none;position:absolute;text-align:center;transform:rotate(-20deg);width:4.75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.eui-toolbar--primary{background-color:var(--eui-c-branding);color:var(--eui-c-white)}.eui-toolbar--secondary,.eui--secondary .eui-toolbar{background-color:var(--eui-c-surface-shell);color:var(--eui-c-text)}.eui--primary .eui-toolbar{background-color:var(--eui-c-branding);color:var(--eui-c-white)}.eui--primary .eui-toolbar-item .eui-icon-svg{--_color: var(--eui-c-white)}.eui--primary .eui-icon-button--has-focus-hover-bg .eui-icon-button__button:hover{background-color:var(--eui-c-branding-light)!important;color:var(--eui-c-branding-light-contrast)!important}.eui--primary .eui-icon-button--has-focus-hover-bg .eui-icon-button__button:hover .eui-icon-svg svg{color:var(--eui-c-branding-light-contrast)!important;fill:var(--eui-c-branding-light-contrast)!important}.eui-t-dark .eui--primary .eui-toolbar,.eui-t-dark .eui-toolbar--primary{color:var(--eui-c-black)}.eui-t-dark .eui-toolbar-item .eui-icon-svg{--_color: var(--eui-c-black)}@media screen and (max-width: 767px){.eui-toolbar{flex-wrap:initial;padding:0 var(--eui-s-xs) 0 var(--eui-s-m)}.eui-toolbar-logo{display:none}.eui-toolbar-app{display:block;font:var(--eui-f-xl);padding-left:0;text-overflow:inherit;overflow:visible}.eui-toolbar-environment{display:none}.eui-t-ec .eui-toolbar-app{margin-top:0}}\n",
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        tp = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵmod = i.$C({ type: u });
            }
            static {
              this.ɵinj = i.G2t({ imports: [Qn, Al, kl, Jr, Xs] });
            }
          }
          return u;
        })();
      let qr = (() => {
          class u {
            constructor() {
              ((this.cssClasses = "eui-app"),
                (this.appSubTitle = ""),
                (this.themeClass = ""),
                (this.hasNoPageWrapper = !1),
                (this.isSidebarOpen = !0),
                (this.isShrinkHeaderActive = !0),
                (this.isSidebarHidden = !1),
                (this.asService = (0, i.WQX)($.OQR)),
                (this.euiGrowlService = (0, i.WQX)($.GZ5)),
                (this.destroy$ = new yn.B()),
                (this.cdRef = (0, i.WQX)(i.gRc)),
                (this.platformId = (0, i.WQX)(i.Agw)),
                (this.document = (0, i.WQX)(le.q)));
            }
            ngAfterContentInit() {
              ((this.hasNoPageWrapper = !this.customPageWrapper),
                (this.isViewLoaded = !0));
            }
            ngOnInit() {
              if (
                ((this.isViewLoaded = !1),
                $.RIB.initCssVars(this.document, this.platformId),
                $.RIB.setHtmlClass("eui-19", this.document),
                (0, ee.UE)(this.platformId))
              ) {
                const a = window.navigator.userAgent.toLowerCase();
                this.asService.setState({
                  ...this.asService.state,
                  windowHeight: window.innerHeight,
                  windowWidth: window.innerWidth,
                  hasHeader: !1,
                  hasSidebar: !1,
                  deviceInfo: {
                    isChrome: a.indexOf("chrome") > -1,
                    isIE: a.indexOf("trident") > -1,
                    isFF: a.indexOf("firefox") > -1,
                  },
                  appBaseFontSize: this.asService.getBaseFontSize(),
                });
              }
              (this.asService
                .getState("wrapperClasses")
                .pipe((0, Vn.Q)(this.destroy$))
                .subscribe((a) => {
                  (this.cdRef.detach(),
                    (this.cssClasses = ["eui-app", a].join(" ")),
                    this.cdRef.reattach(),
                    this.cdRef.detectChanges());
                }),
                (0, ee.UE)(this.platformId) &&
                  (0, Ai.R)(window, "resize")
                    .pipe((0, It.B)(50), (0, Vn.Q)(this.destroy$))
                    .subscribe(() => {
                      (this.asService?.setState({
                        ...this.asService.state,
                        windowHeight: window.innerHeight,
                        windowWidth: window.innerWidth,
                      }),
                        $.RIB.setAppViewportCssVars(this.platformId));
                    }));
            }
            ngOnChanges(a) {
              (a.isSidebarHidden &&
                this.asService.setState({
                  ...this.asService.state,
                  isSidebarHidden: a.isSidebarHidden.currentValue,
                }),
                a.isSidebarOpen &&
                  this.asService.setState({
                    ...this.asService.state,
                    isSidebarOpen: a.isSidebarOpen.currentValue,
                  }));
            }
            ngOnDestroy() {
              (this.destroy$.next(!0), this.destroy$.unsubscribe());
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["eui-app"]],
                contentQueries: function (d, p, D) {
                  if (
                    (1 & d &&
                      (i.wni(D, hr, 5), i.wni(D, _o, 5), i.wni(D, Kr, 5)),
                    2 & d)
                  ) {
                    let V;
                    (i.mGM((V = i.lsd())) && (p.appSidebar = V.first),
                      i.mGM((V = i.lsd())) && (p.customPageWrapper = V.first),
                      i.mGM((V = i.lsd())) && (p.appToolbar = V.first));
                  }
                },
                hostVars: 2,
                hostBindings: function (d, p) {
                  2 & d && i.HbH(p.cssClasses);
                },
                inputs: {
                  appSubTitle: "appSubTitle",
                  themeClass: "themeClass",
                  isSidebarOpen: [2, "isSidebarOpen", "isSidebarOpen", i.L39],
                  isShrinkHeaderActive: [
                    2,
                    "isShrinkHeaderActive",
                    "isShrinkHeaderActive",
                    i.L39,
                  ],
                  isSidebarHidden: [
                    2,
                    "isSidebarHidden",
                    "isSidebarHidden",
                    i.L39,
                  ],
                },
                features: [i.OA$],
                ngContentSelectors: dl,
                decls: 11,
                vars: 20,
                consts: [
                  [3, "isDimmerActive"],
                  [1, "eui-app-main"],
                  [
                    3,
                    "growlClick",
                    "value",
                    "sticky",
                    "closeAllSticky",
                    "life",
                    "ariaLive",
                    "position",
                  ],
                  [3, "isBlocked"],
                  [3, "hasIcons"],
                  ["role", "main", 1, "eui-app-main-content"],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.NAR(Pf),
                    i.nrm(0, "eui-dimmer", 0),
                    i.nI1(1, "async"),
                    i.SdG(2),
                    i.DNE(3, fl, 3, 1, "eui-app-sidebar"),
                    i.nI1(4, "async"),
                    i.nI1(5, "async"),
                    i.nI1(6, "async"),
                    i.DNE(7, uc, 15, 12, "div", 1),
                    i.j41(8, "eui-growl", 2),
                    i.bIt("growlClick", function () {
                      return p.euiGrowlService.growlCallback
                        ? p.euiGrowlService.growlCallback()
                        : null;
                    }),
                    i.k0s(),
                    i.nrm(9, "eui-block-document", 3),
                    i.nI1(10, "async")),
                    2 & d &&
                      (i.Y8G(
                        "isDimmerActive",
                        i.bMT(1, 10, p.asService.state$).isDimmerActive,
                      ),
                      i.R7$(3),
                      i.vxM(
                        !p.appSidebar &&
                          0 !==
                            i.bMT(4, 12, p.asService.state$).menuLinks.length &&
                          i.bMT(5, 14, p.asService.state$).hasHeader &&
                          i.bMT(6, 16, p.asService.breakpoints$).isMobile
                          ? 3
                          : -1,
                      ),
                      i.R7$(4),
                      i.vxM(p.isViewLoaded ? 7 : -1),
                      i.R7$(),
                      i.Y8G("value", p.euiGrowlService.growlMessages)(
                        "sticky",
                        p.euiGrowlService.isGrowlSticky,
                      )("closeAllSticky", p.euiGrowlService.isCloseAllSticky)(
                        "life",
                        p.euiGrowlService.growlLife,
                      )("ariaLive", p.euiGrowlService.ariaGrowlLive)(
                        "position",
                        p.euiGrowlService.growlPosition,
                      ),
                      i.R7$(),
                      i.Y8G(
                        "isBlocked",
                        i.bMT(10, 18, p.asService.state$).isBlockDocumentActive,
                      )));
                },
                dependencies: [
                  ce.n3,
                  Xe.Jj,
                  hr,
                  Zr,
                  Qr,
                  Kr,
                  Qn,
                  qt,
                  Yr,
                  _e,
                  Pu,
                  sn,
                ],
                styles: [
                  '.eui-app{display:flex;overflow:hidden}.eui-app-main-content{flex-grow:1;margin-top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-toolbar-mega-menu-height) + var(--eui-app-top-message-height) - var(--eui-app-breadcrumb-height));position:relative}.eui-app-main{min-height:100vh;background:var(--eui-c-surface-page);width:calc(100% - var(--eui-app-sidebar-width));margin-left:var(--eui-app-sidebar-width);transition:top .1s ease,width .1s ease-in,margin-left .1s ease-in-out;display:flex;flex-direction:column}eui-app-page-wrapper{display:flex;width:100%}@media screen and (max-width: 767px){.eui-app.sidebar--open:before{background:#0000004d;bottom:0;content:"";position:fixed;right:0;top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-top-message-height));transition:all .1s ease;width:100vw;z-index:980}}@media screen and (min-width: 768px) and (max-width: 995px){.eui-app.sidebar--open:before{background:#0000004d;bottom:0;content:"";position:fixed;right:0;top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-top-message-height));transition:all .1s ease;width:100vw;z-index:980}}@media screen and (min-width: 996px){.sidebar--hidden.eui-app.sidebar--open:before{background:#0000004d;bottom:0;content:"";position:fixed;right:0;top:calc(var(--eui-app-header-height) + var(--eui-app-toolbar-height) + var(--eui-app-top-message-height));transition:all .1s ease;width:100vw;z-index:980}}@media screen and (max-width: 767px){.eui-app-main{margin-left:0;width:100%}}@media screen and (min-width: 768px) and (max-width: 995px){.eui-app-main{margin-left:0;width:100%}}@media screen and (min-width: 996px){.sidebar--close .eui-app-main{margin-left:var(--eui-app-sidebar-width-close);width:calc(100% - var(--eui-app-sidebar-width-close))}.sidebar--hidden.sidebar--close .eui-app-main,.sidebar--hidden.sidebar--open .eui-app-main{margin-left:0;width:100%}}\n',
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        _o = (() => {
          class u {
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵdir = i.FsC({
                type: u,
                selectors: [["eui-app-page-wrapper"]],
              });
            }
          }
          return u;
        })();
      const Gc = [Ji, Rc, xc, Pc, tp, Tl, Sl, Cn, Nt, ju, kc, An];
      let np = (() => {
        class u {
          static {
            this.ɵfac = function (d) {
              return new (d || u)();
            };
          }
          static {
            this.ɵmod = i.$C({ type: u });
          }
          static {
            this.ɵinj = i.G2t({
              imports: [
                Xe.MD,
                Me.iI,
                Gc,
                qr,
                Ji,
                Rc,
                xc,
                Pc,
                tp,
                Tl,
                Sl,
                Cn,
                Nt,
                ju,
                kc,
                An,
              ],
            });
          }
        }
        return u;
      })();
      var fp = P(787);
      function pp(u, E) {
        if (1 & u) {
          const a = i.RV6();
          (i.j41(0, "eui-user-profile")(1, "eui-user-profile-menu")(
            2,
            "eui-user-profile-menu-item",
            2,
          ),
            i.bIt("click", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.logOut());
            })("keydown.enter", function () {
              i.eBV(a);
              const p = i.XpG();
              return i.Njj(p.logOut());
            }),
            i.nrm(3, "eui-icon-svg", 3),
            i.j41(4, "span", 4),
            i.EFF(5, "Sign out"),
            i.k0s()()()());
        }
      }
      (function Pn(u, E) {
        return (0, i.TL3)({ rootComponent: u, ...Je(E) });
      })(
        (() => {
          class u {
            constructor() {
              ((this.keycloak = (0, i.WQX)(vi.A)),
                document.body.classList.add("simpl-splash-screen-hidden"));
            }
            logOut() {
              const a = window.location.origin,
                d = window.location.pathname.includes("/onboarding")
                  ? "/onboarding/application/info"
                  : "/application/info";
              this.keycloak.logout({ redirectUri: `${a}${d}` }).then();
            }
            static {
              this.ɵfac = function (d) {
                return new (d || u)();
              };
            }
            static {
              this.ɵcmp = i.VBU({
                type: u,
                selectors: [["app-onboarding-entry"]],
                decls: 7,
                vars: 1,
                consts: [
                  [
                    "logoUrl",
                    "assets/images/logo/simpl-logo.svg",
                    "logoHeight",
                    "100px",
                    "logoWidth",
                    "200px",
                  ],
                  ["euiPositionRight", ""],
                  [1, "eui-u-p-s", 3, "click", "keydown.enter"],
                  [
                    "icon",
                    "eui-logout-thin",
                    "fillColor",
                    "danger",
                    1,
                    "eui-u-mr-m",
                  ],
                  ["euiLabel", ""],
                ],
                template: function (d, p) {
                  (1 & d &&
                    (i.j41(0, "eui-app")(1, "eui-app-toolbar")(
                      2,
                      "eui-toolbar",
                    ),
                    i.nrm(3, "eui-toolbar-logo", 0),
                    i.j41(4, "eui-toolbar-items", 1)(5, "eui-toolbar-item"),
                    i.DNE(6, pp, 6, 0, "eui-user-profile"),
                    i.k0s()()()()()),
                    2 & d &&
                      (i.R7$(6), i.vxM(p.keycloak.authenticated ? 6 : -1)));
                },
                dependencies: [
                  Xe.MD,
                  Me.iI,
                  np,
                  qr,
                  Kr,
                  Qn,
                  qt,
                  Yr,
                  Ws,
                  wn,
                  on,
                  fo,
                  tt.aV,
                  fp.X_,
                ],
                encapsulation: 2,
              });
            }
          }
          return u;
        })(),
        Bn,
      ).catch((u) => console.error(u));
    },
    6442: (Di, jt, P) => {
      P.d(jt, {
        Ad: () => L.Ad,
        Fc: () => L.Fc,
        ON: () => L.ON,
        Vk: () => L.Vk,
        YA: () => L.YA,
        fg: () => L.fg,
        ho: () => L.ho,
        io: () => L.io,
      });
      var L = P(4198);
    },
    674: (Di, jt, P) => {
      (P.d(jt, { fg: () => Re.f, Vk: () => i.V }), P(1299), P(2731), P(6632));
      var i = P(6547),
        Re = P(4487);
    },
    3689: (Di, jt, P) => {
      (P.d(jt, { fg: () => i.f, Vk: () => le.V }), P(2878), P(5992));
      var le = P(5747),
        i = P(6039);
    },
    5903: (Di, jt, P) => {
      P.d(jt, { Jg: () => L.Jg, Vk: () => L.Vk, fg: () => L.fg });
      var L = P(8636);
    },
    8759: (Di, jt, P) => {
      P.d(jt, {
        y8: () => We,
        GZ: () => st,
        nY: () => Ne,
        Ij: () => Be,
        KV: () => Kn,
        Kn: () => In,
        w4: () => Lt,
        E3: () => vn,
        z4: () => ne.z,
      });
      var L = P(6442),
        ee = P(3689),
        le = P(5903),
        i = P(9427),
        Re = P(674),
        ie = (P(6934), P(8387));
      function st(Me) {
        return new L.Vk({ basePath: Me.api_Url + "/onboardingApi/v1" });
      }
      function Ne(Me) {
        return new ee.Vk({ basePath: Me.api_Url + "/sapApi/tier1/v2" });
      }
      function Be(Me) {
        return new le.Vk({ basePath: Me.api_Url + "/sapApi/v1" });
      }
      function We(Me) {
        return new i.Vk({ basePath: Me.api_Url + "/identityApi/v1" });
      }
      function Lt(Me) {
        return new Re.Vk({ basePath: Me.api_Url + "/authApi/v1" });
      }
      function Kn(Me) {
        return new ie.Vk({ basePath: Me.api_Url + "/identityApi/tier1/v2" });
      }
      P(487);
      var Pn = P(4067),
        jn = P(885),
        Je = P(6214),
        Fe = P(8711),
        _t = P(9650),
        Y = P(7071),
        Ie = P(5263),
        ne = P(9709),
        ue = P(9410),
        we = P(7643);
      const qe = (0, ue.PZ)({
          urlPattern: /^https?:\/\/[^/]+(\/.*)?$/i,
          bearerPrefix: "Bearer",
        }),
        vn = (Me) => [
          { provide: ue.YU, useValue: [qe] },
          (0, we.$R)((0, we.Sx)(), (0, we.b$)([ue.E, ...(Me ?? [])])),
        ],
        In = (Me) => [
          (0, jn.H)(Me),
          { provide: Je.H, useValue: Me.api_Url },
          ...(0, Pn.m)(),
          (0, Fe.hX)(),
          (0, _t.vF)(),
          Y.FI,
          (0, Ie.Jo)(),
        ];
    },
    2881: (Di, jt, P) => {
      P.d(jt, {
        Jj: () => Dt,
        MD: () => ye,
        QX: () => bi,
        Sq: () => ti,
        T3: () => Q,
        TG: () => yi,
        YU: () => Un,
        bT: () => Qo,
        fw: () => le,
        kF: () => We,
        lG: () => co,
        ux: () => so,
        vh: () => Tt,
      });
      var L = P(5472),
        ee = P(6048);
      let le = (() => {
        class g extends ee.hb {
          _platformLocation;
          _baseHref = "";
          _removeListenerFns = [];
          constructor(y, M) {
            (super(),
              (this._platformLocation = y),
              null != M && (this._baseHref = M));
          }
          ngOnDestroy() {
            for (; this._removeListenerFns.length; )
              this._removeListenerFns.pop()();
          }
          onPopState(y) {
            this._removeListenerFns.push(
              this._platformLocation.onPopState(y),
              this._platformLocation.onHashChange(y),
            );
          }
          getBaseHref() {
            return this._baseHref;
          }
          path(y = !1) {
            const M = this._platformLocation.hash ?? "#";
            return M.length > 0 ? M.substring(1) : M;
          }
          prepareExternalUrl(y) {
            const M = (0, ee.om)(this._baseHref, y);
            return M.length > 0 ? "#" + M : M;
          }
          pushState(y, M, O, H) {
            const J =
              this.prepareExternalUrl(O + (0, ee.Q)(H)) ||
              this._platformLocation.pathname;
            this._platformLocation.pushState(y, M, J);
          }
          replaceState(y, M, O, H) {
            const J =
              this.prepareExternalUrl(O + (0, ee.Q)(H)) ||
              this._platformLocation.pathname;
            this._platformLocation.replaceState(y, M, J);
          }
          forward() {
            this._platformLocation.forward();
          }
          back() {
            this._platformLocation.back();
          }
          getState() {
            return this._platformLocation.getState();
          }
          historyGo(y = 0) {
            this._platformLocation.historyGo?.(y);
          }
          static ɵfac = function (M) {
            return new (M || g)(L.KVO(ee.Vw), L.KVO(ee.kB, 8));
          };
          static ɵprov = L.jDH({ token: g, factory: g.ɵfac });
        }
        return g;
      })();
      var Re = (function (g) {
          return (
            (g[(g.Decimal = 0)] = "Decimal"),
            (g[(g.Percent = 1)] = "Percent"),
            (g[(g.Currency = 2)] = "Currency"),
            (g[(g.Scientific = 3)] = "Scientific"),
            g
          );
        })(Re || {}),
        ie = (function (g) {
          return (
            (g[(g.Format = 0)] = "Format"),
            (g[(g.Standalone = 1)] = "Standalone"),
            g
          );
        })(ie || {}),
        Ce = (function (g) {
          return (
            (g[(g.Narrow = 0)] = "Narrow"),
            (g[(g.Abbreviated = 1)] = "Abbreviated"),
            (g[(g.Wide = 2)] = "Wide"),
            (g[(g.Short = 3)] = "Short"),
            g
          );
        })(Ce || {}),
        st = (function (g) {
          return (
            (g[(g.Short = 0)] = "Short"),
            (g[(g.Medium = 1)] = "Medium"),
            (g[(g.Long = 2)] = "Long"),
            (g[(g.Full = 3)] = "Full"),
            g
          );
        })(st || {});
      function We(g) {
        return (0, L.H5H)(g)[L.KH2.LocaleId];
      }
      function Je(g, A) {
        return At((0, L.H5H)(g)[L.KH2.DateFormat], A);
      }
      function Fe(g, A) {
        return At((0, L.H5H)(g)[L.KH2.TimeFormat], A);
      }
      function _t(g, A) {
        return At((0, L.H5H)(g)[L.KH2.DateTimeFormat], A);
      }
      function Y(g, A) {
        const y = (0, L.H5H)(g),
          M = y[L.KH2.NumberSymbols][A];
        if (typeof M > "u") {
          if (12 === A) return y[L.KH2.NumberSymbols][0];
          if (13 === A) return y[L.KH2.NumberSymbols][1];
        }
        return M;
      }
      function In(g) {
        if (!g[L.KH2.ExtraData])
          throw new Error(
            `Missing extra locale data for the locale "${g[L.KH2.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`,
          );
      }
      function At(g, A) {
        for (let y = A; y > -1; y--) if (typeof g[y] < "u") return g[y];
        throw new Error("Locale data API: locale data undefined");
      }
      function K(g) {
        const [A, y] = g.split(":");
        return { hours: +A, minutes: +y };
      }
      const $ =
          /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
        Ge = {},
        Bt =
          /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
      function Wt(g, A, y, M) {
        let O = (function ki(g) {
          if (Tn(g)) return g;
          if ("number" == typeof g && !isNaN(g)) return new Date(g);
          if ("string" == typeof g) {
            if (((g = g.trim()), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(g))) {
              const [O, H = 1, J = 1] = g.split("-").map((W) => +W);
              return He(O, H - 1, J);
            }
            const y = parseFloat(g);
            if (!isNaN(g - y)) return new Date(y);
            let M;
            if ((M = g.match($)))
              return (function It(g) {
                const A = new Date(0);
                let y = 0,
                  M = 0;
                const O = g[8] ? A.setUTCFullYear : A.setFullYear,
                  H = g[8] ? A.setUTCHours : A.setHours;
                (g[9] &&
                  ((y = Number(g[9] + g[10])), (M = Number(g[9] + g[11]))),
                  O.call(A, Number(g[1]), Number(g[2]) - 1, Number(g[3])));
                const J = Number(g[4] || 0) - y,
                  W = Number(g[5] || 0) - M,
                  et = Number(g[6] || 0),
                  at = Math.floor(1e3 * parseFloat("0." + (g[7] || 0)));
                return (H.call(A, J, W, et, at), A);
              })(M);
          }
          const A = new Date(g);
          if (!Tn(A)) throw new Error(`Unable to convert "${g}" into a date`);
          return A;
        })(g);
        A = Dn(y, A) || A;
        let W,
          J = [];
        for (; A; ) {
          if (((W = Bt.exec(A)), !W)) {
            J.push(A);
            break;
          }
          {
            J = J.concat(W.slice(1));
            const ke = J.pop();
            if (!ke) break;
            A = ke;
          }
        }
        let et = O.getTimezoneOffset();
        M &&
          ((et = Vn(M, et)),
          (O = (function Ai(g, A) {
            const O = g.getTimezoneOffset();
            return (function fn(g, A) {
              return (
                (g = new Date(g.getTime())).setMinutes(g.getMinutes() + A),
                g
              );
            })(g, -1 * (Vn(A, O) - O));
          })(O, M)));
        let at = "";
        return (
          J.forEach((ke) => {
            const Ve = (function te(g) {
              if (yn[g]) return yn[g];
              let A;
              switch (g) {
                case "G":
                case "GG":
                case "GGG":
                  A = $e(3, Ce.Abbreviated);
                  break;
                case "GGGG":
                  A = $e(3, Ce.Wide);
                  break;
                case "GGGGG":
                  A = $e(3, Ce.Narrow);
                  break;
                case "y":
                  A = ut(0, 1, 0, !1, !0);
                  break;
                case "yy":
                  A = ut(0, 2, 0, !0, !0);
                  break;
                case "yyy":
                  A = ut(0, 3, 0, !1, !0);
                  break;
                case "yyyy":
                  A = ut(0, 4, 0, !1, !0);
                  break;
                case "Y":
                  A = wi(1);
                  break;
                case "YY":
                  A = wi(2, !0);
                  break;
                case "YYY":
                  A = wi(3);
                  break;
                case "YYYY":
                  A = wi(4);
                  break;
                case "M":
                case "L":
                  A = ut(1, 1, 1);
                  break;
                case "MM":
                case "LL":
                  A = ut(1, 2, 1);
                  break;
                case "MMM":
                  A = $e(2, Ce.Abbreviated);
                  break;
                case "MMMM":
                  A = $e(2, Ce.Wide);
                  break;
                case "MMMMM":
                  A = $e(2, Ce.Narrow);
                  break;
                case "LLL":
                  A = $e(2, Ce.Abbreviated, ie.Standalone);
                  break;
                case "LLLL":
                  A = $e(2, Ce.Wide, ie.Standalone);
                  break;
                case "LLLLL":
                  A = $e(2, Ce.Narrow, ie.Standalone);
                  break;
                case "w":
                  A = Jn(1);
                  break;
                case "ww":
                  A = Jn(2);
                  break;
                case "W":
                  A = Jn(1, !0);
                  break;
                case "d":
                  A = ut(2, 1);
                  break;
                case "dd":
                  A = ut(2, 2);
                  break;
                case "c":
                case "cc":
                  A = ut(7, 1);
                  break;
                case "ccc":
                  A = $e(1, Ce.Abbreviated, ie.Standalone);
                  break;
                case "cccc":
                  A = $e(1, Ce.Wide, ie.Standalone);
                  break;
                case "ccccc":
                  A = $e(1, Ce.Narrow, ie.Standalone);
                  break;
                case "cccccc":
                  A = $e(1, Ce.Short, ie.Standalone);
                  break;
                case "E":
                case "EE":
                case "EEE":
                  A = $e(1, Ce.Abbreviated);
                  break;
                case "EEEE":
                  A = $e(1, Ce.Wide);
                  break;
                case "EEEEE":
                  A = $e(1, Ce.Narrow);
                  break;
                case "EEEEEE":
                  A = $e(1, Ce.Short);
                  break;
                case "a":
                case "aa":
                case "aaa":
                  A = $e(0, Ce.Abbreviated);
                  break;
                case "aaaa":
                  A = $e(0, Ce.Wide);
                  break;
                case "aaaaa":
                  A = $e(0, Ce.Narrow);
                  break;
                case "b":
                case "bb":
                case "bbb":
                  A = $e(0, Ce.Abbreviated, ie.Standalone, !0);
                  break;
                case "bbbb":
                  A = $e(0, Ce.Wide, ie.Standalone, !0);
                  break;
                case "bbbbb":
                  A = $e(0, Ce.Narrow, ie.Standalone, !0);
                  break;
                case "B":
                case "BB":
                case "BBB":
                  A = $e(0, Ce.Abbreviated, ie.Format, !0);
                  break;
                case "BBBB":
                  A = $e(0, Ce.Wide, ie.Format, !0);
                  break;
                case "BBBBB":
                  A = $e(0, Ce.Narrow, ie.Format, !0);
                  break;
                case "h":
                  A = ut(3, 1, -12);
                  break;
                case "hh":
                  A = ut(3, 2, -12);
                  break;
                case "H":
                  A = ut(3, 1);
                  break;
                case "HH":
                  A = ut(3, 2);
                  break;
                case "m":
                  A = ut(4, 1);
                  break;
                case "mm":
                  A = ut(4, 2);
                  break;
                case "s":
                  A = ut(5, 1);
                  break;
                case "ss":
                  A = ut(5, 2);
                  break;
                case "S":
                  A = ut(6, 1);
                  break;
                case "SS":
                  A = ut(6, 2);
                  break;
                case "SSS":
                  A = ut(6, 3);
                  break;
                case "Z":
                case "ZZ":
                case "ZZZ":
                  A = Mt(0);
                  break;
                case "ZZZZZ":
                  A = Mt(3);
                  break;
                case "O":
                case "OO":
                case "OOO":
                case "z":
                case "zz":
                case "zzz":
                  A = Mt(1);
                  break;
                case "OOOO":
                case "ZZZZ":
                case "zzzz":
                  A = Mt(2);
                  break;
                default:
                  return null;
              }
              return ((yn[g] = A), A);
            })(ke);
            at += Ve
              ? Ve(O, y, et)
              : "''" === ke
                ? "'"
                : ke.replace(/(^'|'$)/g, "").replace(/''/g, "'");
          }),
          at
        );
      }
      function He(g, A, y) {
        const M = new Date(0);
        return (M.setFullYear(g, A, y), M.setHours(0, 0, 0), M);
      }
      function Dn(g, A) {
        const y = We(g);
        if (((Ge[y] ??= {}), Ge[y][A])) return Ge[y][A];
        let M = "";
        switch (A) {
          case "shortDate":
            M = Je(g, st.Short);
            break;
          case "mediumDate":
            M = Je(g, st.Medium);
            break;
          case "longDate":
            M = Je(g, st.Long);
            break;
          case "fullDate":
            M = Je(g, st.Full);
            break;
          case "shortTime":
            M = Fe(g, st.Short);
            break;
          case "mediumTime":
            M = Fe(g, st.Medium);
            break;
          case "longTime":
            M = Fe(g, st.Long);
            break;
          case "fullTime":
            M = Fe(g, st.Full);
            break;
          case "short":
            const O = Dn(g, "shortTime"),
              H = Dn(g, "shortDate");
            M = Yn(_t(g, st.Short), [O, H]);
            break;
          case "medium":
            const J = Dn(g, "mediumTime"),
              W = Dn(g, "mediumDate");
            M = Yn(_t(g, st.Medium), [J, W]);
            break;
          case "long":
            const et = Dn(g, "longTime"),
              at = Dn(g, "longDate");
            M = Yn(_t(g, st.Long), [et, at]);
            break;
          case "full":
            const ke = Dn(g, "fullTime"),
              Ve = Dn(g, "fullDate");
            M = Yn(_t(g, st.Full), [ke, Ve]);
        }
        return (M && (Ge[y][A] = M), M);
      }
      function Yn(g, A) {
        return (
          A &&
            (g = g.replace(/\{([^}]+)}/g, function (y, M) {
              return null != A && M in A ? A[M] : y;
            })),
          g
        );
      }
      function ln(g, A, y = "-", M, O) {
        let H = "";
        (g < 0 || (O && g <= 0)) && (O ? (g = 1 - g) : ((g = -g), (H = y)));
        let J = String(g);
        for (; J.length < A; ) J = "0" + J;
        return (M && (J = J.slice(J.length - A)), H + J);
      }
      function ut(g, A, y = 0, M = !1, O = !1) {
        return function (H, J) {
          let W = (function Si(g, A) {
            switch (g) {
              case 0:
                return A.getFullYear();
              case 1:
                return A.getMonth();
              case 2:
                return A.getDate();
              case 3:
                return A.getHours();
              case 4:
                return A.getMinutes();
              case 5:
                return A.getSeconds();
              case 6:
                return A.getMilliseconds();
              case 7:
                return A.getDay();
              default:
                throw new Error(`Unknown DateType value "${g}".`);
            }
          })(g, H);
          if (((y > 0 || W > -y) && (W += y), 3 === g))
            0 === W && -12 === y && (W = 12);
          else if (6 === g)
            return (function Ti(g, A) {
              return ln(g, 3).substring(0, A);
            })(W, A);
          const et = Y(J, 5);
          return ln(W, A, et, M, O);
        };
      }
      function $e(g, A, y = ie.Format, M = !1) {
        return function (O, H) {
          return (function Xt(g, A, y, M, O, H) {
            switch (y) {
              case 2:
                return (function Ct(g, A, y) {
                  const M = (0, L.H5H)(g),
                    H = At(
                      [M[L.KH2.MonthsFormat], M[L.KH2.MonthsStandalone]],
                      A,
                    );
                  return At(H, y);
                })(A, O, M)[g.getMonth()];
              case 1:
                return (function Ot(g, A, y) {
                  const M = (0, L.H5H)(g),
                    H = At([M[L.KH2.DaysFormat], M[L.KH2.DaysStandalone]], A);
                  return At(H, y);
                })(A, O, M)[g.getDay()];
              case 0:
                const J = g.getHours(),
                  W = g.getMinutes();
                if (H) {
                  const at = (function Me(g) {
                      const A = (0, L.H5H)(g);
                      return (
                        In(A),
                        (A[L.KH2.ExtraData][2] || []).map((M) =>
                          "string" == typeof M ? K(M) : [K(M[0]), K(M[1])],
                        )
                      );
                    })(A),
                    ke = (function zt(g, A, y) {
                      const M = (0, L.H5H)(g);
                      In(M);
                      const H =
                        At([M[L.KH2.ExtraData][0], M[L.KH2.ExtraData][1]], A) ||
                        [];
                      return At(H, y) || [];
                    })(A, O, M),
                    Ve = at.findIndex((rn) => {
                      if (Array.isArray(rn)) {
                        const [St, wt] = rn,
                          $n = J >= St.hours && W >= St.minutes,
                          ai =
                            J < wt.hours || (J === wt.hours && W < wt.minutes);
                        if (St.hours < wt.hours) {
                          if ($n && ai) return !0;
                        } else if ($n || ai) return !0;
                      } else if (rn.hours === J && rn.minutes === W) return !0;
                      return !1;
                    });
                  if (-1 !== Ve) return ke[Ve];
                }
                return (function Lt(g, A, y) {
                  const M = (0, L.H5H)(g),
                    H = At(
                      [
                        M[L.KH2.DayPeriodsFormat],
                        M[L.KH2.DayPeriodsStandalone],
                      ],
                      A,
                    );
                  return At(H, y);
                })(A, O, M)[J < 12 ? 0 : 1];
              case 3:
                return (function Kn(g, A) {
                  return At((0, L.H5H)(g)[L.KH2.Eras], A);
                })(A, M)[g.getFullYear() <= 0 ? 0 : 1];
              default:
                throw new Error(`unexpected translation type ${y}`);
            }
          })(O, H, g, A, y, M);
        };
      }
      function Mt(g) {
        return function (A, y, M) {
          const O = -1 * M,
            H = Y(y, 5),
            J = O > 0 ? Math.floor(O / 60) : Math.ceil(O / 60);
          switch (g) {
            case 0:
              return (
                (O >= 0 ? "+" : "") + ln(J, 2, H) + ln(Math.abs(O % 60), 2, H)
              );
            case 1:
              return "GMT" + (O >= 0 ? "+" : "") + ln(J, 1, H);
            case 2:
              return (
                "GMT" +
                (O >= 0 ? "+" : "") +
                ln(J, 2, H) +
                ":" +
                ln(Math.abs(O % 60), 2, H)
              );
            case 3:
              return 0 === M
                ? "Z"
                : (O >= 0 ? "+" : "") +
                    ln(J, 2, H) +
                    ":" +
                    ln(Math.abs(O % 60), 2, H);
            default:
              throw new Error(`Unknown zone width "${g}"`);
          }
        };
      }
      const Vt = 0,
        Bn = 4;
      function vi(g) {
        const A = g.getDay(),
          y = 0 === A ? -3 : Bn - A;
        return He(g.getFullYear(), g.getMonth(), g.getDate() + y);
      }
      function Jn(g, A = !1) {
        return function (y, M) {
          let O;
          if (A) {
            const H = new Date(y.getFullYear(), y.getMonth(), 1).getDay() - 1,
              J = y.getDate();
            O = 1 + Math.floor((J + H) / 7);
          } else {
            const H = vi(y),
              J = (function Xe(g) {
                const A = He(g, Vt, 1).getDay();
                return He(g, 0, 1 + (A <= Bn ? Bn : Bn + 7) - A);
              })(H.getFullYear()),
              W = H.getTime() - J.getTime();
            O = 1 + Math.round(W / 6048e5);
          }
          return ln(O, g, Y(M, 5));
        };
      }
      function wi(g, A = !1) {
        return function (y, M) {
          return ln(vi(y).getFullYear(), g, Y(M, 5), A);
        };
      }
      const yn = {};
      function Vn(g, A) {
        g = g.replace(/:/g, "");
        const y = Date.parse("Jan 01, 1970 00:00:00 " + g) / 6e4;
        return isNaN(y) ? A : y;
      }
      function Tn(g) {
        return g instanceof Date && !isNaN(g.valueOf());
      }
      const kt = /^(\d+)?\.((\d+)(-(\d+))?)?$/;
      function bn(g) {
        const A = parseInt(g);
        if (isNaN(A))
          throw new Error("Invalid integer literal when parsing " + g);
        return A;
      }
      const To = /\s+/,
        Zo = [];
      let Un = (() => {
        class g {
          _ngEl;
          _renderer;
          initialClasses = Zo;
          rawClass;
          stateMap = new Map();
          constructor(y, M) {
            ((this._ngEl = y), (this._renderer = M));
          }
          set klass(y) {
            this.initialClasses = null != y ? y.trim().split(To) : Zo;
          }
          set ngClass(y) {
            this.rawClass = "string" == typeof y ? y.trim().split(To) : y;
          }
          ngDoCheck() {
            for (const M of this.initialClasses) this._updateState(M, !0);
            const y = this.rawClass;
            if (Array.isArray(y) || y instanceof Set)
              for (const M of y) this._updateState(M, !0);
            else if (null != y)
              for (const M of Object.keys(y)) this._updateState(M, !!y[M]);
            this._applyStateDiff();
          }
          _updateState(y, M) {
            const O = this.stateMap.get(y);
            void 0 !== O
              ? (O.enabled !== M && ((O.changed = !0), (O.enabled = M)),
                (O.touched = !0))
              : this.stateMap.set(y, { enabled: M, changed: !0, touched: !0 });
          }
          _applyStateDiff() {
            for (const y of this.stateMap) {
              const M = y[0],
                O = y[1];
              (O.changed
                ? (this._toggleClass(M, O.enabled), (O.changed = !1))
                : O.touched ||
                  (O.enabled && this._toggleClass(M, !1),
                  this.stateMap.delete(M)),
                (O.touched = !1));
            }
          }
          _toggleClass(y, M) {
            (y = y.trim()).length > 0 &&
              y.split(To).forEach((O) => {
                M
                  ? this._renderer.addClass(this._ngEl.nativeElement, O)
                  : this._renderer.removeClass(this._ngEl.nativeElement, O);
              });
          }
          static ɵfac = function (M) {
            return new (M || g)(L.rXU(L.aKT), L.rXU(L.sFG));
          };
          static ɵdir = L.FsC({
            type: g,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: [0, "class", "klass"], ngClass: "ngClass" },
          });
        }
        return g;
      })();
      class Hn {
        $implicit;
        ngForOf;
        index;
        count;
        constructor(A, y, M, O) {
          ((this.$implicit = A),
            (this.ngForOf = y),
            (this.index = M),
            (this.count = O));
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ti = (() => {
        class g {
          _viewContainer;
          _template;
          _differs;
          set ngForOf(y) {
            ((this._ngForOf = y), (this._ngForOfDirty = !0));
          }
          set ngForTrackBy(y) {
            this._trackByFn = y;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          _ngForOf = null;
          _ngForOfDirty = !0;
          _differ = null;
          _trackByFn;
          constructor(y, M, O) {
            ((this._viewContainer = y),
              (this._template = M),
              (this._differs = O));
          }
          set ngForTemplate(y) {
            y && (this._template = y);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const y = this._ngForOf;
              !this._differ &&
                y &&
                (this._differ = this._differs
                  .find(y)
                  .create(this.ngForTrackBy));
            }
            if (this._differ) {
              const y = this._differ.diff(this._ngForOf);
              y && this._applyChanges(y);
            }
          }
          _applyChanges(y) {
            const M = this._viewContainer;
            y.forEachOperation((O, H, J) => {
              if (null == O.previousIndex)
                M.createEmbeddedView(
                  this._template,
                  new Hn(O.item, this._ngForOf, -1, -1),
                  null === J ? void 0 : J,
                );
              else if (null == J) M.remove(null === H ? void 0 : H);
              else if (null !== H) {
                const W = M.get(H);
                (M.move(W, J), ro(W, O));
              }
            });
            for (let O = 0, H = M.length; O < H; O++) {
              const W = M.get(O).context;
              ((W.index = O), (W.count = H), (W.ngForOf = this._ngForOf));
            }
            y.forEachIdentityChange((O) => {
              ro(M.get(O.currentIndex), O);
            });
          }
          static ngTemplateContextGuard(y, M) {
            return !0;
          }
          static ɵfac = function (M) {
            return new (M || g)(L.rXU(L.c1b), L.rXU(L.C4Q), L.rXU(L._q3));
          };
          static ɵdir = L.FsC({
            type: g,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          });
        }
        return g;
      })();
      function ro(g, A) {
        g.context.$implicit = A.item;
      }
      let Qo = (() => {
        class g {
          _viewContainer;
          _context = new Ko();
          _thenTemplateRef = null;
          _elseTemplateRef = null;
          _thenViewRef = null;
          _elseViewRef = null;
          constructor(y, M) {
            ((this._viewContainer = y), (this._thenTemplateRef = M));
          }
          set ngIf(y) {
            ((this._context.$implicit = this._context.ngIf = y),
              this._updateView());
          }
          set ngIfThen(y) {
            (Qt(y),
              (this._thenTemplateRef = y),
              (this._thenViewRef = null),
              this._updateView());
          }
          set ngIfElse(y) {
            (Qt(y),
              (this._elseTemplateRef = y),
              (this._elseViewRef = null),
              this._updateView());
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngIfUseIfTypeGuard;
          static ngTemplateGuard_ngIf;
          static ngTemplateContextGuard(y, M) {
            return !0;
          }
          static ɵfac = function (M) {
            return new (M || g)(L.rXU(L.c1b), L.rXU(L.C4Q));
          };
          static ɵdir = L.FsC({
            type: g,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          });
        }
        return g;
      })();
      class Ko {
        $implicit = null;
        ngIf = null;
      }
      function Qt(g, A) {
        if (g && !g.createEmbeddedView) throw new L.wOt(2020, !1);
      }
      let so = (() => {
          class g {
            _defaultViews = [];
            _defaultUsed = !1;
            _caseCount = 0;
            _lastCaseCheckIndex = 0;
            _lastCasesMatched = !1;
            _ngSwitch;
            set ngSwitch(y) {
              ((this._ngSwitch = y),
                0 === this._caseCount && this._updateDefaultCases(!0));
            }
            _addCase() {
              return this._caseCount++;
            }
            _addDefault(y) {
              this._defaultViews.push(y);
            }
            _matchCase(y) {
              const M = y === this._ngSwitch;
              return (
                (this._lastCasesMatched ||= M),
                this._lastCaseCheckIndex++,
                this._lastCaseCheckIndex === this._caseCount &&
                  (this._updateDefaultCases(!this._lastCasesMatched),
                  (this._lastCaseCheckIndex = 0),
                  (this._lastCasesMatched = !1)),
                M
              );
            }
            _updateDefaultCases(y) {
              if (this._defaultViews.length > 0 && y !== this._defaultUsed) {
                this._defaultUsed = y;
                for (const M of this._defaultViews) M.enforceState(y);
              }
            }
            static ɵfac = function (M) {
              return new (M || g)();
            };
            static ɵdir = L.FsC({
              type: g,
              selectors: [["", "ngSwitch", ""]],
              inputs: { ngSwitch: "ngSwitch" },
            });
          }
          return g;
        })(),
        Q = (() => {
          class g {
            _viewContainerRef;
            _viewRef = null;
            ngTemplateOutletContext = null;
            ngTemplateOutlet = null;
            ngTemplateOutletInjector = null;
            constructor(y) {
              this._viewContainerRef = y;
            }
            ngOnChanges(y) {
              if (this._shouldRecreateView(y)) {
                const M = this._viewContainerRef;
                if (
                  (this._viewRef && M.remove(M.indexOf(this._viewRef)),
                  !this.ngTemplateOutlet)
                )
                  return void (this._viewRef = null);
                const O = this._createContextForwardProxy();
                this._viewRef = M.createEmbeddedView(this.ngTemplateOutlet, O, {
                  injector: this.ngTemplateOutletInjector ?? void 0,
                });
              }
            }
            _shouldRecreateView(y) {
              return !!y.ngTemplateOutlet || !!y.ngTemplateOutletInjector;
            }
            _createContextForwardProxy() {
              return new Proxy(
                {},
                {
                  set: (y, M, O) =>
                    !!this.ngTemplateOutletContext &&
                    Reflect.set(this.ngTemplateOutletContext, M, O),
                  get: (y, M, O) => {
                    if (this.ngTemplateOutletContext)
                      return Reflect.get(this.ngTemplateOutletContext, M, O);
                  },
                },
              );
            }
            static ɵfac = function (M) {
              return new (M || g)(L.rXU(L.c1b));
            };
            static ɵdir = L.FsC({
              type: g,
              selectors: [["", "ngTemplateOutlet", ""]],
              inputs: {
                ngTemplateOutletContext: "ngTemplateOutletContext",
                ngTemplateOutlet: "ngTemplateOutlet",
                ngTemplateOutletInjector: "ngTemplateOutletInjector",
              },
              features: [L.OA$],
            });
          }
          return g;
        })();
      function ae(g, A) {
        return new L.wOt(2100, !1);
      }
      class Le {
        createSubscription(A, y) {
          return (0, L.O8t)(() =>
            A.subscribe({
              next: y,
              error: (M) => {
                throw M;
              },
            }),
          );
        }
        dispose(A) {
          (0, L.O8t)(() => A.unsubscribe());
        }
      }
      class Ae {
        createSubscription(A, y) {
          return (
            A.then(
              (M) => y?.(M),
              (M) => {
                throw M;
              },
            ),
            {
              unsubscribe: () => {
                y = null;
              },
            }
          );
        }
        dispose(A) {
          A.unsubscribe();
        }
      }
      const xt = new Ae(),
        Kt = new Le();
      let Dt = (() => {
        class g {
          _ref;
          _latestValue = null;
          markForCheckOnValueUpdate = !0;
          _subscription = null;
          _obj = null;
          _strategy = null;
          constructor(y) {
            this._ref = y;
          }
          ngOnDestroy() {
            (this._subscription && this._dispose(), (this._ref = null));
          }
          transform(y) {
            if (!this._obj) {
              if (y)
                try {
                  ((this.markForCheckOnValueUpdate = !1), this._subscribe(y));
                } finally {
                  this.markForCheckOnValueUpdate = !0;
                }
              return this._latestValue;
            }
            return y !== this._obj
              ? (this._dispose(), this.transform(y))
              : this._latestValue;
          }
          _subscribe(y) {
            ((this._obj = y),
              (this._strategy = this._selectStrategy(y)),
              (this._subscription = this._strategy.createSubscription(y, (M) =>
                this._updateLatestValue(y, M),
              )));
          }
          _selectStrategy(y) {
            if ((0, L.jNT)(y)) return xt;
            if ((0, L.zjR)(y)) return Kt;
            throw ae();
          }
          _dispose() {
            (this._strategy.dispose(this._subscription),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null));
          }
          _updateLatestValue(y, M) {
            y === this._obj &&
              ((this._latestValue = M),
              this.markForCheckOnValueUpdate && this._ref?.markForCheck());
          }
          static ɵfac = function (M) {
            return new (M || g)(L.rXU(L.gRc, 16));
          };
          static ɵpipe = L.EJ8({ name: "async", type: g, pure: !1 });
        }
        return g;
      })();
      const pn = new L.nKC(""),
        si = new L.nKC("");
      let Tt = (() => {
          class g {
            locale;
            defaultTimezone;
            defaultOptions;
            constructor(y, M, O) {
              ((this.locale = y),
                (this.defaultTimezone = M),
                (this.defaultOptions = O));
            }
            transform(y, M, O, H) {
              if (null == y || "" === y || y != y) return null;
              try {
                return Wt(
                  y,
                  M ?? this.defaultOptions?.dateFormat ?? "mediumDate",
                  H || this.locale,
                  O ??
                    this.defaultOptions?.timezone ??
                    this.defaultTimezone ??
                    void 0,
                );
              } catch (J) {
                throw ae();
              }
            }
            static ɵfac = function (M) {
              return new (M || g)(
                L.rXU(L.xe9, 16),
                L.rXU(pn, 24),
                L.rXU(si, 24),
              );
            };
            static ɵpipe = L.EJ8({ name: "date", type: g, pure: !0 });
          }
          return g;
        })(),
        yi = (() => {
          class g {
            transform(y) {
              return JSON.stringify(y, null, 2);
            }
            static ɵfac = function (M) {
              return new (M || g)();
            };
            static ɵpipe = L.EJ8({ name: "json", type: g, pure: !1 });
          }
          return g;
        })(),
        co = (() => {
          class g {
            differs;
            constructor(y) {
              this.differs = y;
            }
            differ;
            keyValues = [];
            compareFn = Bi;
            transform(y, M = Bi) {
              if (!y || (!(y instanceof Map) && "object" != typeof y))
                return null;
              this.differ ??= this.differs.find(y).create();
              const O = this.differ.diff(y),
                H = M !== this.compareFn;
              return (
                O &&
                  ((this.keyValues = []),
                  O.forEachItem((J) => {
                    this.keyValues.push(
                      (function uo(g, A) {
                        return { key: g, value: A };
                      })(J.key, J.currentValue),
                    );
                  })),
                (O || H) && (M && this.keyValues.sort(M), (this.compareFn = M)),
                this.keyValues
              );
            }
            static ɵfac = function (M) {
              return new (M || g)(L.rXU(L.MKu, 16));
            };
            static ɵpipe = L.EJ8({ name: "keyvalue", type: g, pure: !1 });
          }
          return g;
        })();
      function Bi(g, A) {
        const y = g.key,
          M = A.key;
        if (y === M) return 0;
        if (null == y) return 1;
        if (null == M) return -1;
        if ("string" == typeof y && "string" == typeof M) return y < M ? -1 : 1;
        if ("number" == typeof y && "number" == typeof M) return y - M;
        if ("boolean" == typeof y && "boolean" == typeof M)
          return y < M ? -1 : 1;
        const O = String(y),
          H = String(M);
        return O == H ? 0 : O < H ? -1 : 1;
      }
      let bi = (() => {
        class g {
          _locale;
          constructor(y) {
            this._locale = y;
          }
          transform(y, M, O) {
            if (
              !(function on(g) {
                return !(null == g || "" === g || g != g);
              })(y)
            )
              return null;
            O ||= this._locale;
            try {
              return (function Io(g, A, y) {
                return (function Pi(g, A, y, M, O, H, J = !1) {
                  let W = "",
                    et = !1;
                  if (isFinite(g)) {
                    let at = (function Dr(g) {
                      let M,
                        O,
                        H,
                        J,
                        W,
                        A = Math.abs(g) + "",
                        y = 0;
                      for (
                        (O = A.indexOf(".")) > -1 && (A = A.replace(".", "")),
                          (H = A.search(/e/i)) > 0
                            ? (O < 0 && (O = H),
                              (O += +A.slice(H + 1)),
                              (A = A.substring(0, H)))
                            : O < 0 && (O = A.length),
                          H = 0;
                        "0" === A.charAt(H);
                        H++
                      );
                      if (H === (W = A.length)) ((M = [0]), (O = 1));
                      else {
                        for (W--; "0" === A.charAt(W); ) W--;
                        for (O -= H, M = [], J = 0; H <= W; H++, J++)
                          M[J] = Number(A.charAt(H));
                      }
                      return (
                        O > 22 && ((M = M.splice(0, 21)), (y = O - 1), (O = 1)),
                        { digits: M, exponent: y, integerLen: O }
                      );
                    })(g);
                    J &&
                      (at = (function ei(g) {
                        if (0 === g.digits[0]) return g;
                        const A = g.digits.length - g.integerLen;
                        return (
                          g.exponent
                            ? (g.exponent += 2)
                            : (0 === A
                                ? g.digits.push(0, 0)
                                : 1 === A && g.digits.push(0),
                              (g.integerLen += 2)),
                          g
                        );
                      })(at));
                    let ke = A.minInt,
                      Ve = A.minFrac,
                      rn = A.maxFrac;
                    if (H) {
                      const Vi = H.match(kt);
                      if (null === Vi)
                        throw new Error(`${H} is not a valid digit info`);
                      const wr = Vi[1],
                        po = Vi[3],
                        Jo = Vi[5];
                      (null != wr && (ke = bn(wr)),
                        null != po && (Ve = bn(po)),
                        null != Jo
                          ? (rn = bn(Jo))
                          : null != po && Ve > rn && (rn = Ve));
                    }
                    !(function Do(g, A, y) {
                      if (A > y)
                        throw new Error(
                          `The minimum number of digits after fraction (${A}) is higher than the maximum (${y}).`,
                        );
                      let M = g.digits,
                        O = M.length - g.integerLen;
                      const H = Math.min(Math.max(A, O), y);
                      let J = H + g.integerLen,
                        W = M[J];
                      if (J > 0) {
                        M.splice(Math.max(g.integerLen, J));
                        for (let Ve = J; Ve < M.length; Ve++) M[Ve] = 0;
                      } else {
                        ((O = Math.max(0, O)),
                          (g.integerLen = 1),
                          (M.length = Math.max(1, (J = H + 1))),
                          (M[0] = 0));
                        for (let Ve = 1; Ve < J; Ve++) M[Ve] = 0;
                      }
                      if (W >= 5)
                        if (J - 1 < 0) {
                          for (let Ve = 0; Ve > J; Ve--)
                            (M.unshift(0), g.integerLen++);
                          (M.unshift(1), g.integerLen++);
                        } else M[J - 1]++;
                      for (; O < Math.max(0, H); O++) M.push(0);
                      let et = 0 !== H;
                      const at = A + g.integerLen,
                        ke = M.reduceRight(function (Ve, rn, St, wt) {
                          return (
                            (wt[St] = (rn += Ve) < 10 ? rn : rn - 10),
                            et &&
                              (0 === wt[St] && St >= at ? wt.pop() : (et = !1)),
                            rn >= 10 ? 1 : 0
                          );
                        }, 0);
                      ke && (M.unshift(ke), g.integerLen++);
                    })(at, Ve, rn);
                    let St = at.digits,
                      wt = at.integerLen;
                    const $n = at.exponent;
                    let ai = [];
                    for (et = St.every((Vi) => !Vi); wt < ke; wt++)
                      St.unshift(0);
                    for (; wt < 0; wt++) St.unshift(0);
                    wt > 0
                      ? (ai = St.splice(wt, St.length))
                      : ((ai = St), (St = [0]));
                    const xi = [];
                    for (
                      St.length >= A.lgSize &&
                      xi.unshift(St.splice(-A.lgSize, St.length).join(""));
                      St.length > A.gSize;
                    )
                      xi.unshift(St.splice(-A.gSize, St.length).join(""));
                    (St.length && xi.unshift(St.join("")),
                      (W = xi.join(Y(y, M))),
                      ai.length && (W += Y(y, O) + ai.join("")),
                      $n && (W += Y(y, 6) + "+" + $n));
                  } else W = Y(y, 9);
                  return (
                    (W =
                      g < 0 && !et
                        ? A.negPre + W + A.negSuf
                        : A.posPre + W + A.posSuf),
                    W
                  );
                })(
                  g,
                  (function ct(g, A = "-") {
                    const y = {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 0,
                        posPre: "",
                        posSuf: "",
                        negPre: "",
                        negSuf: "",
                        gSize: 0,
                        lgSize: 0,
                      },
                      M = g.split(";"),
                      O = M[0],
                      H = M[1],
                      J =
                        -1 !== O.indexOf(".")
                          ? O.split(".")
                          : [
                              O.substring(0, O.lastIndexOf("0") + 1),
                              O.substring(O.lastIndexOf("0") + 1),
                            ],
                      W = J[0],
                      et = J[1] || "";
                    y.posPre = W.substring(0, W.indexOf("#"));
                    for (let ke = 0; ke < et.length; ke++) {
                      const Ve = et.charAt(ke);
                      "0" === Ve
                        ? (y.minFrac = y.maxFrac = ke + 1)
                        : "#" === Ve
                          ? (y.maxFrac = ke + 1)
                          : (y.posSuf += Ve);
                    }
                    const at = W.split(",");
                    if (
                      ((y.gSize = at[1] ? at[1].length : 0),
                      (y.lgSize = at[2] || at[1] ? (at[2] || at[1]).length : 0),
                      H)
                    ) {
                      const ke = O.length - y.posPre.length - y.posSuf.length,
                        Ve = H.indexOf("#");
                      ((y.negPre = H.substring(0, Ve).replace(/'/g, "")),
                        (y.negSuf = H.slice(Ve + ke).replace(/'/g, "")));
                    } else ((y.negPre = A + y.posPre), (y.negSuf = y.posSuf));
                    return y;
                  })(
                    (function Ie(g, A) {
                      return (0, L.H5H)(g)[L.KH2.NumberFormats][A];
                    })(A, Re.Decimal),
                    Y(A, 5),
                  ),
                  A,
                  1,
                  0,
                  y,
                );
              })(
                (function An(g) {
                  if ("string" == typeof g && !isNaN(Number(g) - parseFloat(g)))
                    return Number(g);
                  if ("number" != typeof g)
                    throw new Error(`${g} is not a number`);
                  return g;
                })(y),
                O,
                M,
              );
            } catch (H) {
              throw ae();
            }
          }
          static ɵfac = function (M) {
            return new (M || g)(L.rXU(L.xe9, 16));
          };
          static ɵpipe = L.EJ8({ name: "number", type: g, pure: !0 });
        }
        return g;
      })();
      let ye = (() => {
        class g {
          static ɵfac = function (M) {
            return new (M || g)();
          };
          static ɵmod = L.$C({ type: g });
          static ɵinj = L.G2t({});
        }
        return g;
      })();
    },
    6048: (Di, jt, P) => {
      P.d(jt, {
        Q: () => Lt,
        Sm: () => Kn,
        Vw: () => Ce,
        aZ: () => Pn,
        hb: () => Ot,
        hj: () => st,
        ig: () => Se,
        kB: () => Ct,
        om: () => Be,
        qj: () => ie,
        rb: () => Re,
      });
      var L = P(5472),
        ee = P(1413),
        le = P(9361);
      let i = null;
      function Re() {
        return i;
      }
      function Se(Y) {
        i ??= Y;
      }
      class ie {}
      let Ce = (() => {
        class Y {
          historyGo(ne) {
            throw new Error("");
          }
          static ɵfac = function (ue) {
            return new (ue || Y)();
          };
          static ɵprov = L.jDH({
            token: Y,
            factory: () => (0, L.WQX)(Ne),
            providedIn: "platform",
          });
        }
        return Y;
      })();
      const st = new L.nKC("");
      let Ne = (() => {
        class Y extends Ce {
          _location;
          _history;
          _doc = (0, L.WQX)(le.q);
          constructor() {
            (super(),
              (this._location = window.location),
              (this._history = window.history));
          }
          getBaseHrefFromDOM() {
            return Re().getBaseHref(this._doc);
          }
          onPopState(ne) {
            const ue = Re().getGlobalEventTarget(this._doc, "window");
            return (
              ue.addEventListener("popstate", ne, !1),
              () => ue.removeEventListener("popstate", ne)
            );
          }
          onHashChange(ne) {
            const ue = Re().getGlobalEventTarget(this._doc, "window");
            return (
              ue.addEventListener("hashchange", ne, !1),
              () => ue.removeEventListener("hashchange", ne)
            );
          }
          get href() {
            return this._location.href;
          }
          get protocol() {
            return this._location.protocol;
          }
          get hostname() {
            return this._location.hostname;
          }
          get port() {
            return this._location.port;
          }
          get pathname() {
            return this._location.pathname;
          }
          get search() {
            return this._location.search;
          }
          get hash() {
            return this._location.hash;
          }
          set pathname(ne) {
            this._location.pathname = ne;
          }
          pushState(ne, ue, we) {
            this._history.pushState(ne, ue, we);
          }
          replaceState(ne, ue, we) {
            this._history.replaceState(ne, ue, we);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(ne = 0) {
            this._history.go(ne);
          }
          getState() {
            return this._history.state;
          }
          static ɵfac = function (ue) {
            return new (ue || Y)();
          };
          static ɵprov = L.jDH({
            token: Y,
            factory: () => new Y(),
            providedIn: "platform",
          });
        }
        return Y;
      })();
      function Be(Y, Ie) {
        return Y
          ? Ie
            ? Y.endsWith("/")
              ? Ie.startsWith("/")
                ? Y + Ie.slice(1)
                : Y + Ie
              : Ie.startsWith("/")
                ? Y + Ie
                : `${Y}/${Ie}`
            : Y
          : Ie;
      }
      function We(Y) {
        const Ie = Y.search(/#|\?|$/);
        return "/" === Y[Ie - 1] ? Y.slice(0, Ie - 1) + Y.slice(Ie) : Y;
      }
      function Lt(Y) {
        return Y && "?" !== Y[0] ? `?${Y}` : Y;
      }
      let Ot = (() => {
        class Y {
          historyGo(ne) {
            throw new Error("");
          }
          static ɵfac = function (ue) {
            return new (ue || Y)();
          };
          static ɵprov = L.jDH({
            token: Y,
            factory: () => (0, L.WQX)(Kn),
            providedIn: "root",
          });
        }
        return Y;
      })();
      const Ct = new L.nKC("");
      let Kn = (() => {
          class Y extends Ot {
            _platformLocation;
            _baseHref;
            _removeListenerFns = [];
            constructor(ne, ue) {
              (super(),
                (this._platformLocation = ne),
                (this._baseHref =
                  ue ??
                  this._platformLocation.getBaseHrefFromDOM() ??
                  (0, L.WQX)(le.q).location?.origin ??
                  ""));
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; )
                this._removeListenerFns.pop()();
            }
            onPopState(ne) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(ne),
                this._platformLocation.onHashChange(ne),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(ne) {
              return Be(this._baseHref, ne);
            }
            path(ne = !1) {
              const ue =
                  this._platformLocation.pathname +
                  Lt(this._platformLocation.search),
                we = this._platformLocation.hash;
              return we && ne ? `${ue}${we}` : ue;
            }
            pushState(ne, ue, we, qe) {
              const vn = this.prepareExternalUrl(we + Lt(qe));
              this._platformLocation.pushState(ne, ue, vn);
            }
            replaceState(ne, ue, we, qe) {
              const vn = this.prepareExternalUrl(we + Lt(qe));
              this._platformLocation.replaceState(ne, ue, vn);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            getState() {
              return this._platformLocation.getState();
            }
            historyGo(ne = 0) {
              this._platformLocation.historyGo?.(ne);
            }
            static ɵfac = function (ue) {
              return new (ue || Y)(L.KVO(Ce), L.KVO(Ct, 8));
            };
            static ɵprov = L.jDH({
              token: Y,
              factory: Y.ɵfac,
              providedIn: "root",
            });
          }
          return Y;
        })(),
        Pn = (() => {
          class Y {
            _subject = new ee.B();
            _basePath;
            _locationStrategy;
            _urlChangeListeners = [];
            _urlChangeSubscription = null;
            constructor(ne) {
              this._locationStrategy = ne;
              const ue = this._locationStrategy.getBaseHref();
              ((this._basePath = (function _t(Y) {
                if (new RegExp("^(https?:)?//").test(Y)) {
                  const [, ne] = Y.split(/\/\/[^\/]+/);
                  return ne;
                }
                return Y;
              })(We(Fe(ue)))),
                this._locationStrategy.onPopState((we) => {
                  this._subject.next({
                    url: this.path(!0),
                    pop: !0,
                    state: we.state,
                    type: we.type,
                  });
                }));
            }
            ngOnDestroy() {
              (this._urlChangeSubscription?.unsubscribe(),
                (this._urlChangeListeners = []));
            }
            path(ne = !1) {
              return this.normalize(this._locationStrategy.path(ne));
            }
            getState() {
              return this._locationStrategy.getState();
            }
            isCurrentPathEqualTo(ne, ue = "") {
              return this.path() == this.normalize(ne + Lt(ue));
            }
            normalize(ne) {
              return Y.stripTrailingSlash(
                (function Je(Y, Ie) {
                  if (!Y || !Ie.startsWith(Y)) return Ie;
                  const ne = Ie.substring(Y.length);
                  return "" === ne || ["/", ";", "?", "#"].includes(ne[0])
                    ? ne
                    : Ie;
                })(this._basePath, Fe(ne)),
              );
            }
            prepareExternalUrl(ne) {
              return (
                ne && "/" !== ne[0] && (ne = "/" + ne),
                this._locationStrategy.prepareExternalUrl(ne)
              );
            }
            go(ne, ue = "", we = null) {
              (this._locationStrategy.pushState(we, "", ne, ue),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(ne + Lt(ue)),
                  we,
                ));
            }
            replaceState(ne, ue = "", we = null) {
              (this._locationStrategy.replaceState(we, "", ne, ue),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(ne + Lt(ue)),
                  we,
                ));
            }
            forward() {
              this._locationStrategy.forward();
            }
            back() {
              this._locationStrategy.back();
            }
            historyGo(ne = 0) {
              this._locationStrategy.historyGo?.(ne);
            }
            onUrlChange(ne) {
              return (
                this._urlChangeListeners.push(ne),
                (this._urlChangeSubscription ??= this.subscribe((ue) => {
                  this._notifyUrlChangeListeners(ue.url, ue.state);
                })),
                () => {
                  const ue = this._urlChangeListeners.indexOf(ne);
                  (this._urlChangeListeners.splice(ue, 1),
                    0 === this._urlChangeListeners.length &&
                      (this._urlChangeSubscription?.unsubscribe(),
                      (this._urlChangeSubscription = null)));
                }
              );
            }
            _notifyUrlChangeListeners(ne = "", ue) {
              this._urlChangeListeners.forEach((we) => we(ne, ue));
            }
            subscribe(ne, ue, we) {
              return this._subject.subscribe({
                next: ne,
                error: ue ?? void 0,
                complete: we ?? void 0,
              });
            }
            static normalizeQueryParams = Lt;
            static joinWithSlash = Be;
            static stripTrailingSlash = We;
            static ɵfac = function (ue) {
              return new (ue || Y)(L.KVO(Ot));
            };
            static ɵprov = L.jDH({
              token: Y,
              factory: () =>
                (function jn() {
                  return new Pn((0, L.KVO)(Ot));
                })(),
              providedIn: "root",
            });
          }
          return Y;
        })();
      function Fe(Y) {
        return Y.replace(/\/index.html$/, "");
      }
    },
    7643: (Di, jt, P) => {
      (P.d(jt, {
        $R: () => So,
        Lr: () => Ct,
        Nl: () => Ie,
        Qq: () => ut,
        Sx: () => ro,
        _y: () => ue,
        b$: () => Hn,
        yz: () => He,
      }),
        P(4523));
      var ee = P(5472),
        le = P(274),
        i = P(5964),
        Re = P(6354),
        Se = P(980),
        ie = P(5558),
        Ce = P(7673),
        st = P(1985),
        Ne = P(6648),
        Be = P(9377),
        We = P(9361);
      class Lt {}
      class Ot {}
      class Ct {
        headers;
        normalizedNames = new Map();
        lazyInit;
        lazyUpdate = null;
        constructor(N) {
          N
            ? "string" == typeof N
              ? (this.lazyInit = () => {
                  ((this.headers = new Map()),
                    N.split("\n").forEach((x) => {
                      const G = x.indexOf(":");
                      if (G > 0) {
                        const Q = x.slice(0, G),
                          oe = x.slice(G + 1).trim();
                        this.addHeaderEntry(Q, oe);
                      }
                    }));
                })
              : typeof Headers < "u" && N instanceof Headers
                ? ((this.headers = new Map()),
                  N.forEach((x, G) => {
                    this.addHeaderEntry(G, x);
                  }))
                : (this.lazyInit = () => {
                    ((this.headers = new Map()),
                      Object.entries(N).forEach(([x, G]) => {
                        this.setHeaderEntries(x, G);
                      }));
                  })
            : (this.headers = new Map());
        }
        has(N) {
          return (this.init(), this.headers.has(N.toLowerCase()));
        }
        get(N) {
          this.init();
          const x = this.headers.get(N.toLowerCase());
          return x && x.length > 0 ? x[0] : null;
        }
        keys() {
          return (this.init(), Array.from(this.normalizedNames.values()));
        }
        getAll(N) {
          return (this.init(), this.headers.get(N.toLowerCase()) || null);
        }
        append(N, x) {
          return this.clone({ name: N, value: x, op: "a" });
        }
        set(N, x) {
          return this.clone({ name: N, value: x, op: "s" });
        }
        delete(N, x) {
          return this.clone({ name: N, value: x, op: "d" });
        }
        maybeSetNormalizedName(N, x) {
          this.normalizedNames.has(x) || this.normalizedNames.set(x, N);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Ct
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((N) => this.applyUpdate(N)),
              (this.lazyUpdate = null)));
        }
        copyFrom(N) {
          (N.init(),
            Array.from(N.headers.keys()).forEach((x) => {
              (this.headers.set(x, N.headers.get(x)),
                this.normalizedNames.set(x, N.normalizedNames.get(x)));
            }));
        }
        clone(N) {
          const x = new Ct();
          return (
            (x.lazyInit =
              this.lazyInit && this.lazyInit instanceof Ct
                ? this.lazyInit
                : this),
            (x.lazyUpdate = (this.lazyUpdate || []).concat([N])),
            x
          );
        }
        applyUpdate(N) {
          const x = N.name.toLowerCase();
          switch (N.op) {
            case "a":
            case "s":
              let G = N.value;
              if (("string" == typeof G && (G = [G]), 0 === G.length)) return;
              this.maybeSetNormalizedName(N.name, x);
              const Q = ("a" === N.op ? this.headers.get(x) : void 0) || [];
              (Q.push(...G), this.headers.set(x, Q));
              break;
            case "d":
              const oe = N.value;
              if (oe) {
                let ae = this.headers.get(x);
                if (!ae) return;
                ((ae = ae.filter((Le) => -1 === oe.indexOf(Le))),
                  0 === ae.length
                    ? (this.headers.delete(x), this.normalizedNames.delete(x))
                    : this.headers.set(x, ae));
              } else (this.headers.delete(x), this.normalizedNames.delete(x));
          }
        }
        addHeaderEntry(N, x) {
          const G = N.toLowerCase();
          (this.maybeSetNormalizedName(N, G),
            this.headers.has(G)
              ? this.headers.get(G).push(x)
              : this.headers.set(G, [x]));
        }
        setHeaderEntries(N, x) {
          const G = (Array.isArray(x) ? x : [x]).map((oe) => oe.toString()),
            Q = N.toLowerCase();
          (this.headers.set(Q, G), this.maybeSetNormalizedName(N, Q));
        }
        forEach(N) {
          (this.init(),
            Array.from(this.normalizedNames.keys()).forEach((x) =>
              N(this.normalizedNames.get(x), this.headers.get(x)),
            ));
        }
      }
      class Pn {
        encodeKey(N) {
          return _t(N);
        }
        encodeValue(N) {
          return _t(N);
        }
        decodeKey(N) {
          return decodeURIComponent(N);
        }
        decodeValue(N) {
          return decodeURIComponent(N);
        }
      }
      const Je = /%(\d[a-f0-9])/gi,
        Fe = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function _t(T) {
        return encodeURIComponent(T).replace(Je, (N, x) => Fe[x] ?? N);
      }
      function Y(T) {
        return `${T}`;
      }
      class Ie {
        map;
        encoder;
        updates = null;
        cloneFrom = null;
        constructor(N = {}) {
          if (((this.encoder = N.encoder || new Pn()), N.fromString)) {
            if (N.fromObject) throw new ee.wOt(2805, !1);
            this.map = (function jn(T, N) {
              const x = new Map();
              return (
                T.length > 0 &&
                  T.replace(/^\?/, "")
                    .split("&")
                    .forEach((Q) => {
                      const oe = Q.indexOf("="),
                        [ae, Le] =
                          -1 == oe
                            ? [N.decodeKey(Q), ""]
                            : [
                                N.decodeKey(Q.slice(0, oe)),
                                N.decodeValue(Q.slice(oe + 1)),
                              ],
                        Ae = x.get(ae) || [];
                      (Ae.push(Le), x.set(ae, Ae));
                    }),
                x
              );
            })(N.fromString, this.encoder);
          } else
            N.fromObject
              ? ((this.map = new Map()),
                Object.keys(N.fromObject).forEach((x) => {
                  const G = N.fromObject[x],
                    Q = Array.isArray(G) ? G.map(Y) : [Y(G)];
                  this.map.set(x, Q);
                }))
              : (this.map = null);
        }
        has(N) {
          return (this.init(), this.map.has(N));
        }
        get(N) {
          this.init();
          const x = this.map.get(N);
          return x ? x[0] : null;
        }
        getAll(N) {
          return (this.init(), this.map.get(N) || null);
        }
        keys() {
          return (this.init(), Array.from(this.map.keys()));
        }
        append(N, x) {
          return this.clone({ param: N, value: x, op: "a" });
        }
        appendAll(N) {
          const x = [];
          return (
            Object.keys(N).forEach((G) => {
              const Q = N[G];
              Array.isArray(Q)
                ? Q.forEach((oe) => {
                    x.push({ param: G, value: oe, op: "a" });
                  })
                : x.push({ param: G, value: Q, op: "a" });
            }),
            this.clone(x)
          );
        }
        set(N, x) {
          return this.clone({ param: N, value: x, op: "s" });
        }
        delete(N, x) {
          return this.clone({ param: N, value: x, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((N) => {
                const x = this.encoder.encodeKey(N);
                return this.map
                  .get(N)
                  .map((G) => x + "=" + this.encoder.encodeValue(G))
                  .join("&");
              })
              .filter((N) => "" !== N)
              .join("&")
          );
        }
        clone(N) {
          const x = new Ie({ encoder: this.encoder });
          return (
            (x.cloneFrom = this.cloneFrom || this),
            (x.updates = (this.updates || []).concat(N)),
            x
          );
        }
        init() {
          (null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((N) => this.map.set(N, this.cloneFrom.map.get(N))),
              this.updates.forEach((N) => {
                switch (N.op) {
                  case "a":
                  case "s":
                    const x =
                      ("a" === N.op ? this.map.get(N.param) : void 0) || [];
                    (x.push(Y(N.value)), this.map.set(N.param, x));
                    break;
                  case "d":
                    if (void 0 === N.value) {
                      this.map.delete(N.param);
                      break;
                    }
                    {
                      let G = this.map.get(N.param) || [];
                      const Q = G.indexOf(Y(N.value));
                      (-1 !== Q && G.splice(Q, 1),
                        G.length > 0
                          ? this.map.set(N.param, G)
                          : this.map.delete(N.param));
                    }
                }
              }),
              (this.cloneFrom = this.updates = null)));
        }
      }
      class ue {
        map = new Map();
        set(N, x) {
          return (this.map.set(N, x), this);
        }
        get(N) {
          return (
            this.map.has(N) || this.map.set(N, N.defaultValue()),
            this.map.get(N)
          );
        }
        delete(N) {
          return (this.map.delete(N), this);
        }
        has(N) {
          return this.map.has(N);
        }
        keys() {
          return this.map.keys();
        }
      }
      function qe(T) {
        return typeof ArrayBuffer < "u" && T instanceof ArrayBuffer;
      }
      function vn(T) {
        return typeof Blob < "u" && T instanceof Blob;
      }
      function In(T) {
        return typeof FormData < "u" && T instanceof FormData;
      }
      const zt = "Content-Type",
        At = "X-Request-URL",
        K = "text/plain",
        ce = "application/json",
        re = `${ce}, ${K}, */*`;
      class se {
        url;
        body = null;
        headers;
        context;
        reportProgress = !1;
        withCredentials = !1;
        responseType = "json";
        method;
        params;
        urlWithParams;
        transferCache;
        constructor(N, x, G, Q) {
          let oe;
          if (
            ((this.url = x),
            (this.method = N.toUpperCase()),
            (function we(T) {
              switch (T) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || Q
              ? ((this.body = void 0 !== G ? G : null), (oe = Q))
              : (oe = G),
            oe &&
              ((this.reportProgress = !!oe.reportProgress),
              (this.withCredentials = !!oe.withCredentials),
              oe.responseType && (this.responseType = oe.responseType),
              oe.headers && (this.headers = oe.headers),
              oe.context && (this.context = oe.context),
              oe.params && (this.params = oe.params),
              (this.transferCache = oe.transferCache)),
            (this.headers ??= new Ct()),
            (this.context ??= new ue()),
            this.params)
          ) {
            const ae = this.params.toString();
            if (0 === ae.length) this.urlWithParams = x;
            else {
              const Le = x.indexOf("?");
              this.urlWithParams =
                x + (-1 === Le ? "?" : Le < x.length - 1 ? "&" : "") + ae;
            }
          } else ((this.params = new Ie()), (this.urlWithParams = x));
        }
        serializeBody() {
          return null === this.body
            ? null
            : "string" == typeof this.body ||
                qe(this.body) ||
                vn(this.body) ||
                In(this.body) ||
                (function Me(T) {
                  return (
                    typeof URLSearchParams < "u" && T instanceof URLSearchParams
                  );
                })(this.body)
              ? this.body
              : this.body instanceof Ie
                ? this.body.toString()
                : "object" == typeof this.body ||
                    "boolean" == typeof this.body ||
                    Array.isArray(this.body)
                  ? JSON.stringify(this.body)
                  : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || In(this.body)
            ? null
            : vn(this.body)
              ? this.body.type || null
              : qe(this.body)
                ? null
                : "string" == typeof this.body
                  ? K
                  : this.body instanceof Ie
                    ? "application/x-www-form-urlencoded;charset=UTF-8"
                    : "object" == typeof this.body ||
                        "number" == typeof this.body ||
                        "boolean" == typeof this.body
                      ? ce
                      : null;
        }
        clone(N = {}) {
          const x = N.method || this.method,
            G = N.url || this.url,
            Q = N.responseType || this.responseType,
            oe = N.transferCache ?? this.transferCache,
            ae = void 0 !== N.body ? N.body : this.body,
            Le = N.withCredentials ?? this.withCredentials,
            Ae = N.reportProgress ?? this.reportProgress;
          let xt = N.headers || this.headers,
            Kt = N.params || this.params;
          const Dt = N.context ?? this.context;
          return (
            void 0 !== N.setHeaders &&
              (xt = Object.keys(N.setHeaders).reduce(
                (Yt, Sn) => Yt.set(Sn, N.setHeaders[Sn]),
                xt,
              )),
            N.setParams &&
              (Kt = Object.keys(N.setParams).reduce(
                (Yt, Sn) => Yt.set(Sn, N.setParams[Sn]),
                Kt,
              )),
            new se(x, G, ae, {
              params: Kt,
              headers: xt,
              context: Dt,
              reportProgress: Ae,
              responseType: Q,
              withCredentials: Le,
              transferCache: oe,
            })
          );
        }
      }
      var $ = (function (T) {
        return (
          (T[(T.Sent = 0)] = "Sent"),
          (T[(T.UploadProgress = 1)] = "UploadProgress"),
          (T[(T.ResponseHeader = 2)] = "ResponseHeader"),
          (T[(T.DownloadProgress = 3)] = "DownloadProgress"),
          (T[(T.Response = 4)] = "Response"),
          (T[(T.User = 5)] = "User"),
          T
        );
      })($ || {});
      class Ge {
        headers;
        status;
        statusText;
        url;
        ok;
        type;
        constructor(N, x = 200, G = "OK") {
          ((this.headers = N.headers || new Ct()),
            (this.status = void 0 !== N.status ? N.status : x),
            (this.statusText = N.statusText || G),
            (this.url = N.url || null),
            (this.ok = this.status >= 200 && this.status < 300));
        }
      }
      class Bt extends Ge {
        constructor(N = {}) {
          super(N);
        }
        type = $.ResponseHeader;
        clone(N = {}) {
          return new Bt({
            headers: N.headers || this.headers,
            status: void 0 !== N.status ? N.status : this.status,
            statusText: N.statusText || this.statusText,
            url: N.url || this.url || void 0,
          });
        }
      }
      class Wt extends Ge {
        body;
        constructor(N = {}) {
          (super(N), (this.body = void 0 !== N.body ? N.body : null));
        }
        type = $.Response;
        clone(N = {}) {
          return new Wt({
            body: void 0 !== N.body ? N.body : this.body,
            headers: N.headers || this.headers,
            status: void 0 !== N.status ? N.status : this.status,
            statusText: N.statusText || this.statusText,
            url: N.url || this.url || void 0,
          });
        }
      }
      class He extends Ge {
        name = "HttpErrorResponse";
        message;
        error;
        ok = !1;
        constructor(N) {
          (super(N, 0, "Unknown Error"),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${N.url || "(unknown url)"}`
                : `Http failure response for ${N.url || "(unknown url)"}: ${N.status} ${N.statusText}`),
            (this.error = N.error || null));
        }
      }
      function Ti(T, N) {
        return {
          body: N,
          headers: T.headers,
          context: T.context,
          observe: T.observe,
          params: T.params,
          reportProgress: T.reportProgress,
          responseType: T.responseType,
          withCredentials: T.withCredentials,
          transferCache: T.transferCache,
        };
      }
      let ut = (() => {
        class T {
          handler;
          constructor(x) {
            this.handler = x;
          }
          request(x, G, Q = {}) {
            let oe;
            if (x instanceof se) oe = x;
            else {
              let Ae, xt;
              ((Ae = Q.headers instanceof Ct ? Q.headers : new Ct(Q.headers)),
                Q.params &&
                  (xt =
                    Q.params instanceof Ie
                      ? Q.params
                      : new Ie({ fromObject: Q.params })),
                (oe = new se(x, G, void 0 !== Q.body ? Q.body : null, {
                  headers: Ae,
                  context: Q.context,
                  params: xt,
                  reportProgress: Q.reportProgress,
                  responseType: Q.responseType || "json",
                  withCredentials: Q.withCredentials,
                  transferCache: Q.transferCache,
                })));
            }
            const ae = (0, Ce.of)(oe).pipe(
              (0, le.H)((Ae) => this.handler.handle(Ae)),
            );
            if (x instanceof se || "events" === Q.observe) return ae;
            const Le = ae.pipe((0, i.p)((Ae) => Ae instanceof Wt));
            switch (Q.observe || "body") {
              case "body":
                switch (oe.responseType) {
                  case "arraybuffer":
                    return Le.pipe(
                      (0, Re.T)((Ae) => {
                        if (
                          null !== Ae.body &&
                          !(Ae.body instanceof ArrayBuffer)
                        )
                          throw new ee.wOt(2806, !1);
                        return Ae.body;
                      }),
                    );
                  case "blob":
                    return Le.pipe(
                      (0, Re.T)((Ae) => {
                        if (null !== Ae.body && !(Ae.body instanceof Blob))
                          throw new ee.wOt(2807, !1);
                        return Ae.body;
                      }),
                    );
                  case "text":
                    return Le.pipe(
                      (0, Re.T)((Ae) => {
                        if (null !== Ae.body && "string" != typeof Ae.body)
                          throw new ee.wOt(2808, !1);
                        return Ae.body;
                      }),
                    );
                  default:
                    return Le.pipe((0, Re.T)((Ae) => Ae.body));
                }
              case "response":
                return Le;
              default:
                throw new ee.wOt(2809, !1);
            }
          }
          delete(x, G = {}) {
            return this.request("DELETE", x, G);
          }
          get(x, G = {}) {
            return this.request("GET", x, G);
          }
          head(x, G = {}) {
            return this.request("HEAD", x, G);
          }
          jsonp(x, G) {
            return this.request("JSONP", x, {
              params: new Ie().append(G, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(x, G = {}) {
            return this.request("OPTIONS", x, G);
          }
          patch(x, G, Q = {}) {
            return this.request("PATCH", x, Ti(Q, G));
          }
          post(x, G, Q = {}) {
            return this.request("POST", x, Ti(Q, G));
          }
          put(x, G, Q = {}) {
            return this.request("PUT", x, Ti(Q, G));
          }
          static ɵfac = function (G) {
            return new (G || T)(ee.KVO(Lt));
          };
          static ɵprov = ee.jDH({ token: T, factory: T.ɵfac });
        }
        return T;
      })();
      const Xt = new ee.nKC("");
      function vi(T, N) {
        return N(T);
      }
      function Jn(T, N) {
        return (x, G) => N.intercept(x, { handle: (Q) => T(Q, G) });
      }
      const yn = new ee.nKC(""),
        te = new ee.nKC(""),
        Vn = new ee.nKC(""),
        fn = new ee.nKC("", { providedIn: "root", factory: () => !0 });
      function Ai() {
        let T = null;
        return (N, x) => {
          null === T &&
            (T = ((0, ee.WQX)(yn, { optional: !0 }) ?? []).reduceRight(Jn, vi));
          const G = (0, ee.WQX)(ee.Ua0);
          if ((0, ee.WQX)(fn)) {
            const oe = G.add();
            return T(N, x).pipe((0, Se.j)(() => G.remove(oe)));
          }
          return T(N, x);
        };
      }
      let It = (() => {
        class T extends Lt {
          backend;
          injector;
          chain = null;
          pendingTasks = (0, ee.WQX)(ee.Ua0);
          contributeToStability = (0, ee.WQX)(fn);
          constructor(x, G) {
            (super(), (this.backend = x), (this.injector = G));
          }
          handle(x) {
            if (null === this.chain) {
              const G = Array.from(
                new Set([
                  ...this.injector.get(te),
                  ...this.injector.get(Vn, []),
                ]),
              );
              this.chain = G.reduceRight(
                (Q, oe) =>
                  (function wi(T, N, x) {
                    return (G, Q) =>
                      (0, ee.N4e)(x, () => N(G, (oe) => T(oe, Q)));
                  })(Q, oe, this.injector),
                vi,
              );
            }
            if (this.contributeToStability) {
              const G = this.pendingTasks.add();
              return this.chain(x, (Q) => this.backend.handle(Q)).pipe(
                (0, Se.j)(() => this.pendingTasks.remove(G)),
              );
            }
            return this.chain(x, (G) => this.backend.handle(G));
          }
          static ɵfac = function (G) {
            return new (G || T)(ee.KVO(Ot), ee.KVO(ee.uvJ));
          };
          static ɵprov = ee.jDH({ token: T, factory: T.ɵfac });
        }
        return T;
      })();
      const Ir = /^\)\]\}',?\n/,
        De = RegExp(`^${At}:`, "m");
      let ct = (() => {
        class T {
          xhrFactory;
          constructor(x) {
            this.xhrFactory = x;
          }
          handle(x) {
            if ("JSONP" === x.method) throw new ee.wOt(-2800, !1);
            const G = this.xhrFactory;
            return (
              G.ɵloadImpl ? (0, Ne.H)(G.ɵloadImpl()) : (0, Ce.of)(null)
            ).pipe(
              (0, ie.n)(
                () =>
                  new st.c((oe) => {
                    const ae = G.build();
                    if (
                      (ae.open(x.method, x.urlWithParams),
                      x.withCredentials && (ae.withCredentials = !0),
                      x.headers.forEach((Ze, ze) =>
                        ae.setRequestHeader(Ze, ze.join(",")),
                      ),
                      x.headers.has("Accept") ||
                        ae.setRequestHeader("Accept", re),
                      !x.headers.has(zt))
                    ) {
                      const Ze = x.detectContentTypeHeader();
                      null !== Ze && ae.setRequestHeader(zt, Ze);
                    }
                    if (x.responseType) {
                      const Ze = x.responseType.toLowerCase();
                      ae.responseType = "json" !== Ze ? Ze : "text";
                    }
                    const Le = x.serializeBody();
                    let Ae = null;
                    const xt = () => {
                        if (null !== Ae) return Ae;
                        const Ze = ae.statusText || "OK",
                          ze = new Ct(ae.getAllResponseHeaders()),
                          pn =
                            (function Io(T) {
                              return "responseURL" in T && T.responseURL
                                ? T.responseURL
                                : De.test(T.getAllResponseHeaders())
                                  ? T.getResponseHeader(At)
                                  : null;
                            })(ae) || x.url;
                        return (
                          (Ae = new Bt({
                            headers: ze,
                            status: ae.status,
                            statusText: Ze,
                            url: pn,
                          })),
                          Ae
                        );
                      },
                      Kt = () => {
                        let {
                            headers: Ze,
                            status: ze,
                            statusText: pn,
                            url: si,
                          } = xt(),
                          Tt = null;
                        (204 !== ze &&
                          (Tt =
                            typeof ae.response > "u"
                              ? ae.responseText
                              : ae.response),
                          0 === ze && (ze = Tt ? 200 : 0));
                        let Ft = ze >= 200 && ze < 300;
                        if (
                          "json" === x.responseType &&
                          "string" == typeof Tt
                        ) {
                          const lo = Tt;
                          Tt = Tt.replace(Ir, "");
                          try {
                            Tt = "" !== Tt ? JSON.parse(Tt) : null;
                          } catch (ji) {
                            ((Tt = lo),
                              Ft &&
                                ((Ft = !1), (Tt = { error: ji, text: Tt })));
                          }
                        }
                        Ft
                          ? (oe.next(
                              new Wt({
                                body: Tt,
                                headers: Ze,
                                status: ze,
                                statusText: pn,
                                url: si || void 0,
                              }),
                            ),
                            oe.complete())
                          : oe.error(
                              new He({
                                error: Tt,
                                headers: Ze,
                                status: ze,
                                statusText: pn,
                                url: si || void 0,
                              }),
                            );
                      },
                      Dt = (Ze) => {
                        const { url: ze } = xt(),
                          pn = new He({
                            error: Ze,
                            status: ae.status || 0,
                            statusText: ae.statusText || "Unknown Error",
                            url: ze || void 0,
                          });
                        oe.error(pn);
                      };
                    let Yt = !1;
                    const Sn = (Ze) => {
                        Yt || (oe.next(xt()), (Yt = !0));
                        let ze = {
                          type: $.DownloadProgress,
                          loaded: Ze.loaded,
                        };
                        (Ze.lengthComputable && (ze.total = Ze.total),
                          "text" === x.responseType &&
                            ae.responseText &&
                            (ze.partialText = ae.responseText),
                          oe.next(ze));
                      },
                      de = (Ze) => {
                        let ze = { type: $.UploadProgress, loaded: Ze.loaded };
                        (Ze.lengthComputable && (ze.total = Ze.total),
                          oe.next(ze));
                      };
                    return (
                      ae.addEventListener("load", Kt),
                      ae.addEventListener("error", Dt),
                      ae.addEventListener("timeout", Dt),
                      ae.addEventListener("abort", Dt),
                      x.reportProgress &&
                        (ae.addEventListener("progress", Sn),
                        null !== Le &&
                          ae.upload &&
                          ae.upload.addEventListener("progress", de)),
                      ae.send(Le),
                      oe.next({ type: $.Sent }),
                      () => {
                        (ae.removeEventListener("error", Dt),
                          ae.removeEventListener("abort", Dt),
                          ae.removeEventListener("load", Kt),
                          ae.removeEventListener("timeout", Dt),
                          x.reportProgress &&
                            (ae.removeEventListener("progress", Sn),
                            null !== Le &&
                              ae.upload &&
                              ae.upload.removeEventListener("progress", de)),
                          ae.readyState !== ae.DONE && ae.abort());
                      }
                    );
                  }),
              ),
            );
          }
          static ɵfac = function (G) {
            return new (G || T)(ee.KVO(Be.N0));
          };
          static ɵprov = ee.jDH({ token: T, factory: T.ɵfac });
        }
        return T;
      })();
      const ei = new ee.nKC(""),
        Do = new ee.nKC("", {
          providedIn: "root",
          factory: () => "XSRF-TOKEN",
        }),
        ge = new ee.nKC("", {
          providedIn: "root",
          factory: () => "X-XSRF-TOKEN",
        });
      class Gn {}
      let cn = (() => {
        class T {
          doc;
          cookieName;
          lastCookieString = "";
          lastToken = null;
          parseCount = 0;
          constructor(x, G) {
            ((this.doc = x), (this.cookieName = G));
          }
          getToken() {
            const x = this.doc.cookie || "";
            return (
              x !== this.lastCookieString &&
                (this.parseCount++,
                (this.lastToken = (0, Be.bS)(x, this.cookieName)),
                (this.lastCookieString = x)),
              this.lastToken
            );
          }
          static ɵfac = function (G) {
            return new (G || T)(ee.KVO(We.q), ee.KVO(Do));
          };
          static ɵprov = ee.jDH({ token: T, factory: T.ɵfac });
        }
        return T;
      })();
      function To(T, N) {
        const x = T.url.toLowerCase();
        if (
          !(0, ee.WQX)(ei) ||
          "GET" === T.method ||
          "HEAD" === T.method ||
          x.startsWith("http://") ||
          x.startsWith("https://")
        )
          return N(T);
        const G = (0, ee.WQX)(Gn).getToken(),
          Q = (0, ee.WQX)(ge);
        return (
          null != G &&
            !T.headers.has(Q) &&
            (T = T.clone({ headers: T.headers.set(Q, G) })),
          N(T)
        );
      }
      var Un = (function (T) {
        return (
          (T[(T.Interceptors = 0)] = "Interceptors"),
          (T[(T.LegacyInterceptors = 1)] = "LegacyInterceptors"),
          (T[(T.CustomXsrfConfiguration = 2)] = "CustomXsrfConfiguration"),
          (T[(T.NoXsrfProtection = 3)] = "NoXsrfProtection"),
          (T[(T.JsonpSupport = 4)] = "JsonpSupport"),
          (T[(T.RequestsMadeViaParent = 5)] = "RequestsMadeViaParent"),
          (T[(T.Fetch = 6)] = "Fetch"),
          T
        );
      })(Un || {});
      function Zt(T, N) {
        return { ɵkind: T, ɵproviders: N };
      }
      function So(...T) {
        const N = [
          ut,
          ct,
          It,
          { provide: Lt, useExisting: It },
          {
            provide: Ot,
            useFactory: () =>
              (0, ee.WQX)(Xt, { optional: !0 }) ?? (0, ee.WQX)(ct),
          },
          { provide: te, useValue: To, multi: !0 },
          { provide: ei, useValue: !0 },
          { provide: Gn, useClass: cn },
        ];
        for (const x of T) N.push(...x.ɵproviders);
        return (0, ee.EmA)(N);
      }
      function Hn(T) {
        return Zt(
          Un.Interceptors,
          T.map((N) => ({ provide: te, useValue: N, multi: !0 })),
        );
      }
      const ti = new ee.nKC("");
      function ro() {
        return Zt(Un.LegacyInterceptors, [
          { provide: ti, useFactory: Ai },
          { provide: te, useExisting: ti, multi: !0 },
        ]);
      }
    },
    9377: (Di, jt, P) => {
      function L(ie, Ce) {
        Ce = encodeURIComponent(Ce);
        for (const st of ie.split(";")) {
          const Ne = st.indexOf("="),
            [Be, We] =
              -1 == Ne ? [st, ""] : [st.slice(0, Ne), st.slice(Ne + 1)];
          if (Be.trim() === Ce) return decodeURIComponent(We);
        }
        return null;
      }
      P.d(jt, {
        N0: () => Se,
        UE: () => i,
        Vy: () => Re,
        Zn: () => ee,
        bS: () => L,
      });
      const ee = "browser",
        le = "server";
      function i(ie) {
        return ie === ee;
      }
      function Re(ie) {
        return ie === le;
      }
      class Se {}
    },
    5472: (Di, jt, P) => {
      function ee(e, t) {
        return Object.is(e, t);
      }
      (P.d(jt, {
        bc$: () => IM,
        iLQ: () => mu,
        sZ2: () => gr,
        o8S: () => Ii,
        BIS: () => DM,
        gRc: () => SE,
        Ql9: () => Fx,
        Ocv: () => Hx,
        abz: () => fi,
        Z63: () => ni,
        aKT: () => u,
        uvJ: () => Xn,
        zcH: () => Mi,
        bkB: () => Oi,
        ES_: () => Ws,
        y_5: () => Cs,
        $GK: () => W,
        nKC: () => de,
        zZn: () => qt,
        _q3: () => pg,
        MKu: () => hg,
        xe9: () => lg,
        Co$: () => e0,
        Vns: () => ps,
        SKi: () => gt,
        Xx1: () => xr,
        Agw: () => MM,
        PLl: () => bp,
        rOR: () => Ut,
        sFG: () => YT,
        _9s: () => jh,
        czy: () => Ed,
        WPN: () => as,
        kdw: () => ko,
        C4Q: () => eu,
        NYb: () => dw,
        giA: () => k0,
        xvI: () => Lx,
        RxE: () => gE,
        c1b: () => Od,
        gXe: () => Ho,
        mal: () => Lp,
        Tzd: () => Rp,
        Af3: () => X,
        tdH: () => kM,
        L39: () => FN,
        EWP: () => Au,
        a0P: () => oR,
        Ol2: () => nm,
        w6W: () => W1,
        QZP: () => gg,
        Rfq: () => bn,
        oKB: () => Fr,
        WQX: () => fe,
        hFB: () => fp,
        naY: () => eN,
        Hps: () => a,
        QuC: () => ho,
        uuI: () => _g,
        EmA: () => Ke,
        geq: () => P1,
        Udg: () => PN,
        CGW: () => Vg,
        phd: () => hw,
        HJs: () => rR,
        N4e: () => S,
        vPA: () => p,
        O8t: () => io,
        ebz: () => O1,
        An2: () => Qn,
        H3F: () => dm,
        H8p: () => tr,
        KH2: () => Oa,
        Ua0: () => _o,
        wOt: () => te,
        WHO: () => w0,
        e01: () => A0,
        Lf2: () => qs,
        lNU: () => yn,
        h9k: () => tv,
        $MX: () => pd,
        ZF7: () => ua,
        Kcf: () => MI,
        e5t: () => SI,
        UyX: () => DI,
        cWb: () => II,
        osQ: () => TI,
        H5H: () => Bm,
        Zy3: () => fn,
        mq5: () => Db,
        JZv: () => $t,
        TL3: () => hN,
        LfX: () => ae,
        plB: () => fs,
        jNT: () => gm,
        zjR: () => N0,
        ngT: () => mi,
        XSP: () => GA,
        TL$: () => CM,
        Tbb: () => ct,
        rcV: () => $o,
        nM4: () => u0,
        Vt3: () => om,
        OA$: () => Xu,
        Jv_: () => OC,
        R7$: () => Mv,
        BMQ: () => Cm,
        x72: () => Em,
        qtP: () => Mm,
        HbH: () => rb,
        ZvI: () => fb,
        AVh: () => km,
        BUC: () => pb,
        vxM: () => _b,
        wni: () => sC,
        SS7: () => Km,
        VBU: () => n0,
        FsC: () => o0,
        jDH: () => x,
        G2t: () => Q,
        $C: () => im,
        EJ8: () => r0,
        rXU: () => ya,
        nrm: () => Om,
        eu8: () => Fm,
        bVm: () => Qd,
        qex: () => Zd,
        k0s: () => Xd,
        j41: () => Wd,
        RV6: () => Ib,
        xGo: () => Lc,
        Mr5: () => Pm,
        KVO: () => hn,
        kS0: () => pr,
        QTQ: () => by,
        bIt: () => Um,
        lsd: () => uC,
        joV: () => mc,
        qSk: () => hc,
        XpG: () => Qb,
        nI1: () => QC,
        bMT: () => KC,
        i5U: () => YC,
        SdG: () => Yb,
        NAR: () => Kb,
        Y8G: () => Sm,
        FS9: () => $m,
        Mz_: () => ef,
        lJ4: () => PC,
        eq3: () => jC,
        l_i: () => BC,
        sMw: () => VC,
        ziG: () => GC,
        s1E: () => UC,
        l4e: () => HC,
        NyB: () => dC,
        mGM: () => lC,
        r8f: () => RC,
        sdS: () => fC,
        Dyx: () => Cb,
        Z7z: () => bb,
        fX1: () => yb,
        Vm6: () => vb,
        Njj: () => nc,
        N_X: () => ih,
        EBC: () => cv,
        eBV: () => tc,
        npT: () => nv,
        $dS: () => iv,
        B4B: () => eh,
        n$t: () => rv,
        bH3: () => NC,
        Aen: () => eo,
        xc7: () => Am,
        zvX: () => jm,
        DNE: () => lm,
        C5r: () => JC,
        EFF: () => EC,
        JRh: () => zm,
        SpI: () => tf,
        Lme: () => Wm,
        E5c: () => Xm,
        DH7: () => kC,
        mxI: () => Qm,
        R50: () => Zm,
        GBs: () => aC,
        wEZ: () => cC,
      }),
        P(4523));
      let le = null,
        i = !1,
        Re = 1;
      const Se = Symbol("SIGNAL");
      function ie(e) {
        const t = le;
        return ((le = e), t);
      }
      function Ce() {
        return le;
      }
      const Be = {
        version: 0,
        lastCleanEpoch: 0,
        dirty: !1,
        producerNode: void 0,
        producerLastReadVersion: void 0,
        producerIndexOfThis: void 0,
        nextProducerIndex: 0,
        liveConsumerNode: void 0,
        liveConsumerIndexOfThis: void 0,
        consumerAllowSignalWrites: !1,
        consumerIsAlwaysLive: !1,
        kind: "unknown",
        producerMustRecompute: () => !1,
        producerRecomputeValue: () => {},
        consumerMarkedDirty: () => {},
        consumerOnSignalRead: () => {},
      };
      function We(e) {
        if (i) throw new Error("");
        if (null === le) return;
        le.consumerOnSignalRead(e);
        const t = le.nextProducerIndex++;
        (we(le),
          t < le.producerNode.length &&
            le.producerNode[t] !== e &&
            ue(le) &&
            ne(le.producerNode[t], le.producerIndexOfThis[t]),
          le.producerNode[t] !== e &&
            ((le.producerNode[t] = e),
            (le.producerIndexOfThis[t] = ue(le) ? Ie(e, le, t) : 0)),
          (le.producerLastReadVersion[t] = e.version));
      }
      function Ot(e) {
        if ((!ue(e) || e.dirty) && (e.dirty || e.lastCleanEpoch !== Re)) {
          if (!e.producerMustRecompute(e) && !_t(e)) return void jn(e);
          (e.producerRecomputeValue(e), jn(e));
        }
      }
      function Ct(e) {
        if (void 0 === e.liveConsumerNode) return;
        const t = i;
        i = !0;
        try {
          for (const n of e.liveConsumerNode) n.dirty || Pn(n);
        } finally {
          i = t;
        }
      }
      function Kn() {
        return !1 !== le?.consumerAllowSignalWrites;
      }
      function Pn(e) {
        ((e.dirty = !0), Ct(e), e.consumerMarkedDirty?.(e));
      }
      function jn(e) {
        ((e.dirty = !1), (e.lastCleanEpoch = Re));
      }
      function Je(e) {
        return (e && (e.nextProducerIndex = 0), ie(e));
      }
      function Fe(e, t) {
        if (
          (ie(t),
          e &&
            void 0 !== e.producerNode &&
            void 0 !== e.producerIndexOfThis &&
            void 0 !== e.producerLastReadVersion)
        ) {
          if (ue(e))
            for (let n = e.nextProducerIndex; n < e.producerNode.length; n++)
              ne(e.producerNode[n], e.producerIndexOfThis[n]);
          for (; e.producerNode.length > e.nextProducerIndex; )
            (e.producerNode.pop(),
              e.producerLastReadVersion.pop(),
              e.producerIndexOfThis.pop());
        }
      }
      function _t(e) {
        we(e);
        for (let t = 0; t < e.producerNode.length; t++) {
          const n = e.producerNode[t],
            o = e.producerLastReadVersion[t];
          if (o !== n.version || (Ot(n), o !== n.version)) return !0;
        }
        return !1;
      }
      function Y(e) {
        if ((we(e), ue(e)))
          for (let t = 0; t < e.producerNode.length; t++)
            ne(e.producerNode[t], e.producerIndexOfThis[t]);
        ((e.producerNode.length =
          e.producerLastReadVersion.length =
          e.producerIndexOfThis.length =
            0),
          e.liveConsumerNode &&
            (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0));
      }
      function Ie(e, t, n) {
        if ((qe(e), 0 === e.liveConsumerNode.length && vn(e)))
          for (let o = 0; o < e.producerNode.length; o++)
            e.producerIndexOfThis[o] = Ie(e.producerNode[o], e, o);
        return (
          e.liveConsumerIndexOfThis.push(n),
          e.liveConsumerNode.push(t) - 1
        );
      }
      function ne(e, t) {
        if ((qe(e), 1 === e.liveConsumerNode.length && vn(e)))
          for (let o = 0; o < e.producerNode.length; o++)
            ne(e.producerNode[o], e.producerIndexOfThis[o]);
        const n = e.liveConsumerNode.length - 1;
        if (
          ((e.liveConsumerNode[t] = e.liveConsumerNode[n]),
          (e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n]),
          e.liveConsumerNode.length--,
          e.liveConsumerIndexOfThis.length--,
          t < e.liveConsumerNode.length)
        ) {
          const o = e.liveConsumerIndexOfThis[t],
            r = e.liveConsumerNode[t];
          (we(r), (r.producerIndexOfThis[o] = t));
        }
      }
      function ue(e) {
        return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
      }
      function we(e) {
        ((e.producerNode ??= []),
          (e.producerIndexOfThis ??= []),
          (e.producerLastReadVersion ??= []));
      }
      function qe(e) {
        ((e.liveConsumerNode ??= []), (e.liveConsumerIndexOfThis ??= []));
      }
      function vn(e) {
        return void 0 !== e.producerNode;
      }
      function In(e, t) {
        const n = Object.create(At);
        ((n.computation = e), void 0 !== t && (n.equal = t));
        const o = () => {
          if ((Ot(n), We(n), n.value === Et)) throw n.error;
          return n.value;
        };
        return ((o[Se] = n), o);
      }
      const Me = Symbol("UNSET"),
        zt = Symbol("COMPUTING"),
        Et = Symbol("ERRORED"),
        At = {
          ...Be,
          value: Me,
          dirty: !0,
          error: null,
          equal: ee,
          kind: "computed",
          producerMustRecompute: (e) => e.value === Me || e.value === zt,
          producerRecomputeValue(e) {
            if (e.value === zt)
              throw new Error("Detected cycle in computations.");
            const t = e.value;
            e.value = zt;
            const n = Je(e);
            let o,
              r = !1;
            try {
              ((o = e.computation()),
                ie(null),
                (r = t !== Me && t !== Et && o !== Et && e.equal(t, o)));
            } catch (s) {
              ((o = Et), (e.error = s));
            } finally {
              Fe(e, n);
            }
            r ? (e.value = t) : ((e.value = o), e.version++);
          },
        };
      let ce = function K() {
        throw new Error();
      };
      function re(e) {
        ce(e);
      }
      let $ = null;
      function Wt(e, t) {
        (Kn() || re(e),
          e.equal(e.value, t) ||
            ((e.value = t),
            (function ln(e) {
              (e.version++,
                (function Lt() {
                  Re++;
                })(),
                Ct(e),
                $?.());
            })(e)));
      }
      function He(e, t) {
        (Kn() || re(e), Wt(e, t(e.value)));
      }
      const Yn = { ...Be, equal: ee, value: void 0, kind: "signal" };
      function Ti(e, t, n) {
        const o = Object.create($e);
        ((o.source = e), (o.computation = t), null != n && (o.equal = n));
        const s = () => {
          if ((Ot(o), We(o), o.value === Et)) throw o.error;
          return o.value;
        };
        return ((s[Se] = o), s);
      }
      const $e = {
        ...Be,
        value: Me,
        dirty: !0,
        error: null,
        equal: ee,
        kind: "linkedSignal",
        producerMustRecompute: (e) => e.value === Me || e.value === zt,
        producerRecomputeValue(e) {
          if (e.value === zt)
            throw new Error("Detected cycle in computations.");
          const t = e.value;
          e.value = zt;
          const n = Je(e);
          let o;
          try {
            const r = e.source();
            ((o = e.computation(
              r,
              t === Me || t === Et
                ? void 0
                : { source: e.sourceValue, value: t },
            )),
              (e.sourceValue = r));
          } catch (r) {
            ((o = Et), (e.error = r));
          } finally {
            Fe(e, n);
          }
          t !== Me && o !== Et && e.equal(t, o)
            ? (e.value = t)
            : ((e.value = o), e.version++);
        },
      };
      var Vt = P(2056),
        Bn = P(4412),
        Xe = P(1413),
        vi = P(8359),
        Jn = P(6354);
      const yn =
        "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss";
      class te extends Error {
        code;
        constructor(t, n) {
          (super(fn(t, n)), (this.code = t));
        }
      }
      function fn(e, t) {
        return `${(function Vn(e) {
          return `NG0${Math.abs(e)}`;
        })(e)}${t ? ": " + t : ""}`;
      }
      const Ai = Symbol("InputSignalNode#UNSET"),
        ki = {
          ...Yn,
          transformFn: void 0,
          applyValueToInputSignal(e, t) {
            Wt(e, t);
          },
        };
      function Tn(e, t) {
        const n = Object.create(ki);
        function o() {
          if ((We(n), n.value === Ai)) throw new te(-950, null);
          return n.value;
        }
        return ((n.value = e), (n.transformFn = t?.transform), (o[Se] = n), o);
      }
      function kt(e) {
        return { toString: e }.toString();
      }
      const un = "__parameters__";
      function qn(e, t, n) {
        return kt(() => {
          const o = (function oo(e) {
            return function (...n) {
              if (e) {
                const o = e(...n);
                for (const r in o) this[r] = o[r];
              }
            };
          })(t);
          function r(...s) {
            if (this instanceof r) return (o.apply(this, s), this);
            const l = new r(...s);
            return ((c.annotation = l), c);
            function c(f, m, _) {
              const C = f.hasOwnProperty(un)
                ? f[un]
                : Object.defineProperty(f, un, { value: [] })[un];
              for (; C.length <= _; ) C.push(null);
              return ((C[_] = C[_] || []).push(l), f);
            }
          }
          return ((r.prototype.ngMetadataName = e), (r.annotationCls = r), r);
        });
      }
      const $t = globalThis;
      function De(e) {
        for (let t in e) if (e[t] === De) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function Io(e, t) {
        for (const n in t)
          t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
      }
      function ct(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return `[${e.map(ct).join(", ")}]`;
        if (null == e) return "" + e;
        const t = e.overriddenName || e.name;
        if (t) return `${t}`;
        const n = e.toString();
        if (null == n) return "" + n;
        const o = n.indexOf("\n");
        return o >= 0 ? n.slice(0, o) : n;
      }
      function ei(e, t) {
        return e ? (t ? `${e} ${t}` : e) : t || "";
      }
      const Do = De({ __forward_ref__: De });
      function bn(e) {
        return (
          (e.__forward_ref__ = bn),
          (e.toString = function () {
            return ct(this());
          }),
          e
        );
      }
      function ge(e) {
        return Gn(e) ? e() : e;
      }
      function Gn(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(Do) &&
          e.__forward_ref__ === bn
        );
      }
      function x(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function Q(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function oe(e) {
        return Le(e, Kt) || Le(e, Yt);
      }
      function ae(e) {
        return null !== oe(e);
      }
      function Le(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function xt(e) {
        return e && (e.hasOwnProperty(Dt) || e.hasOwnProperty(Sn))
          ? e[Dt]
          : null;
      }
      const Kt = De({ ɵprov: De }),
        Dt = De({ ɵinj: De }),
        Yt = De({ ngInjectableDef: De }),
        Sn = De({ ngInjectorDef: De });
      class de {
        _desc;
        ngMetadataName = "InjectionToken";
        ɵprov;
        constructor(t, n) {
          ((this._desc = t),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = x({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                })));
        }
        get multi() {
          return this;
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function Bi(e) {
        return e && !!e.ɵproviders;
      }
      const bi = De({ ɵcmp: De }),
        fo = De({ ɵdir: De }),
        wn = De({ ɵpipe: De }),
        on = De({ ɵmod: De }),
        An = De({ ɵfac: De }),
        Yo = De({ __NG_ELEMENT_ID__: De }),
        wo = De({ __NG_ENV_ID__: De });
      function ye(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function M(e, t) {
        throw new te(-200, e);
      }
      function J(e, t) {
        throw new te(-201, !1);
      }
      var W = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })(W || {});
      let et;
      function at() {
        return et;
      }
      function ke(e) {
        const t = et;
        return ((et = e), t);
      }
      function Ve(e, t, n) {
        const o = oe(e);
        return o && "root" == o.providedIn
          ? void 0 === o.value
            ? (o.value = o.factory())
            : o.value
          : n & W.Optional
            ? null
            : void 0 !== t
              ? t
              : void J();
      }
      const wt = {},
        $n = "__NG_DI_FLAG__";
      class ai {
        injector;
        constructor(t) {
          this.injector = t;
        }
        retrieve(t, n) {
          return this.injector.get(t, n.optional ? Vt.p2 : wt, n);
        }
      }
      const xi = "ngTempTokenPath",
        wr = /\n/gm,
        Jo = "__source";
      function ku(e, t = W.Default) {
        if (void 0 === (0, Vt.Af)()) throw new te(-203, !1);
        if (null === (0, Vt.Af)()) return Ve(e, void 0, t);
        {
          const n = (0, Vt.Af)();
          let o;
          return (
            (o = n instanceof ai ? n.injector : n),
            o.get(e, t & W.Optional ? null : void 0, t)
          );
        }
      }
      function hn(e, t = W.Default) {
        return (at() || ku)(ge(e), t);
      }
      function fe(e, t = W.Default) {
        return hn(e, Ar(t));
      }
      function Ar(e) {
        return typeof e > "u" || "number" == typeof e
          ? e
          : (e.optional && 8) |
              (e.host && 1) |
              (e.self && 2) |
              (e.skipSelf && 4);
      }
      function Ao(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const o = ge(e[n]);
          if (Array.isArray(o)) {
            if (0 === o.length) throw new te(900, !1);
            let r,
              s = W.Default;
            for (let l = 0; l < o.length; l++) {
              const c = o[l],
                f = ja(c);
              "number" == typeof f
                ? -1 === f
                  ? (r = c.token)
                  : (s |= f)
                : (r = c);
            }
            t.push(hn(r, s));
          } else t.push(hn(o));
        }
        return t;
      }
      function Gi(e, t) {
        return ((e[$n] = t), (e.prototype[$n] = t), e);
      }
      function ja(e) {
        return e[$n];
      }
      const Cs = Gi(
          qn("Inject", (e) => ({ token: e })),
          -1,
        ),
        xr = Gi(qn("Optional"), 8),
        ko = Gi(qn("SkipSelf"), 4);
      function Ui(e, t) {
        return e.hasOwnProperty(An) ? e[An] : null;
      }
      function xo(e, t) {
        e.forEach((n) => (Array.isArray(n) ? xo(n, t) : t(n)));
      }
      function Es(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Nr(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function zn(e, t, n) {
        let o = er(e, t);
        return (
          o >= 0
            ? (e[1 | o] = n)
            : ((o = ~o),
              (function Ms(e, t, n, o) {
                let r = e.length;
                if (r == t) e.push(n, o);
                else if (1 === r) (e.push(o, e[0]), (e[0] = n));
                else {
                  for (r--, e.push(e[r - 1], e[r]); r > t; )
                    ((e[r] = e[r - 2]), r--);
                  ((e[t] = n), (e[t + 1] = o));
                }
              })(e, o, t, n)),
          o
        );
      }
      function Rr(e, t) {
        const n = er(e, t);
        if (n >= 0) return e[1 | n];
      }
      function er(e, t) {
        return (function Nu(e, t, n) {
          let o = 0,
            r = e.length >> n;
          for (; r !== o; ) {
            const s = o + ((r - o) >> 1),
              l = e[s << n];
            if (t === l) return s << n;
            l > t ? (r = s) : (o = s + 1);
          }
          return ~(r << n);
        })(e, t, 1);
      }
      const pt = {},
        Qe = [],
        ni = new de(""),
        Ha = new de("", -1),
        Lr = new de("");
      class Or {
        get(t, n = wt) {
          if (n === wt) {
            const o = new Error(`NullInjectorError: No provider for ${ct(t)}!`);
            throw ((o.name = "NullInjectorError"), o);
          }
          return n;
        }
      }
      function mn(e, t) {
        const n = e[on] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${ct(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Oe(e) {
        return e[bi] || null;
      }
      function dn(e) {
        return e[fo] || null;
      }
      function Wn(e) {
        return e[wn] || null;
      }
      function ho(e) {
        const t = Oe(e) || dn(e) || Wn(e);
        return null !== t && t.standalone;
      }
      function Ke(e) {
        return { ɵproviders: e };
      }
      function Fr(...e) {
        return { ɵproviders: Is(0, e), ɵfromNgModule: !0 };
      }
      function Is(e, ...t) {
        const n = [],
          o = new Set();
        let r;
        const s = (l) => {
          n.push(l);
        };
        return (
          xo(t, (l) => {
            const c = l;
            Pr(c, s, [], o) && ((r ||= []), r.push(c));
          }),
          void 0 !== r && za(r, s),
          n
        );
      }
      function za(e, t) {
        for (let n = 0; n < e.length; n++) {
          const { ngModule: o, providers: r } = e[n];
          Ds(r, (s) => {
            t(s, o);
          });
        }
      }
      function Pr(e, t, n, o) {
        if (!(e = ge(e))) return !1;
        let r = null,
          s = xt(e);
        const l = !s && Oe(e);
        if (s || l) {
          if (l && !l.standalone) return !1;
          r = e;
        } else {
          const f = e.ngModule;
          if (((s = xt(f)), !s)) return !1;
          r = f;
        }
        const c = o.has(r);
        if (l) {
          if (c) return !1;
          if ((o.add(r), l.dependencies)) {
            const f =
              "function" == typeof l.dependencies
                ? l.dependencies()
                : l.dependencies;
            for (const m of f) Pr(m, t, n, o);
          }
        } else {
          if (!s) return !1;
          {
            if (null != s.imports && !c) {
              let m;
              o.add(r);
              try {
                xo(s.imports, (_) => {
                  Pr(_, t, n, o) && ((m ||= []), m.push(_));
                });
              } finally {
              }
              void 0 !== m && za(m, t);
            }
            if (!c) {
              const m = Ui(r) || (() => new r());
              (t({ provide: r, useFactory: m, deps: Qe }, r),
                t({ provide: Lr, useValue: r, multi: !0 }, r),
                t({ provide: ni, useValue: () => hn(r), multi: !0 }, r));
            }
            const f = s.providers;
            if (null != f && !c) {
              const m = e;
              Ds(f, (_) => {
                t(_, m);
              });
            }
          }
        }
        return r !== e && void 0 !== e.providers;
      }
      function Ds(e, t) {
        for (let n of e)
          (Bi(n) && (n = n.ɵproviders), Array.isArray(n) ? Ds(n, t) : t(n));
      }
      const Ru = De({ provide: String, useValue: De });
      function Ts(e) {
        return null !== e && "object" == typeof e && Ru in e;
      }
      function Ni(e) {
        return "function" == typeof e;
      }
      const tr = new de(""),
        No = {},
        Lu = {};
      let Ss;
      function jr() {
        return (void 0 === Ss && (Ss = new Or()), Ss);
      }
      class Xn {}
      class Hi extends Xn {
        parent;
        source;
        scopes;
        records = new Map();
        _ngOnDestroyHooks = new Set();
        _onDestroyHooks = [];
        get destroyed() {
          return this._destroyed;
        }
        _destroyed = !1;
        injectorDefTypes;
        constructor(t, n, o, r) {
          (super(),
            (this.parent = n),
            (this.source = o),
            (this.scopes = r),
            v(t, (l) => this.processProvider(l)),
            this.records.set(Ha, Lo(void 0, this)),
            r.has("environment") && this.records.set(Xn, Lo(void 0, this)));
          const s = this.records.get(tr);
          (null != s && "string" == typeof s.value && this.scopes.add(s.value),
            (this.injectorDefTypes = new Set(this.get(Lr, Qe, W.Self))));
        }
        retrieve(t, n) {
          return this.get(t, n.optional ? Vt.p2 : wt, n);
        }
        destroy() {
          (nr(this), (this._destroyed = !0));
          const t = ie(null);
          try {
            for (const o of this._ngOnDestroyHooks) o.ngOnDestroy();
            const n = this._onDestroyHooks;
            this._onDestroyHooks = [];
            for (const o of n) o();
          } finally {
            (this.records.clear(),
              this._ngOnDestroyHooks.clear(),
              this.injectorDefTypes.clear(),
              ie(t));
          }
        }
        onDestroy(t) {
          return (
            nr(this),
            this._onDestroyHooks.push(t),
            () => this.removeOnDestroy(t)
          );
        }
        runInContext(t) {
          nr(this);
          const n = (0, Vt.mu)(this),
            o = ke(void 0);
          try {
            return t();
          } finally {
            ((0, Vt.mu)(n), ke(o));
          }
        }
        get(t, n = wt, o = W.Default) {
          if ((nr(this), t.hasOwnProperty(wo))) return t[wo](this);
          o = Ar(o);
          const s = (0, Vt.mu)(this),
            l = ke(void 0);
          try {
            if (!(o & W.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const m =
                  (function h(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof de)
                    );
                  })(t) && oe(t);
                ((f = m && this.injectableDefInScope(m) ? Lo(Ro(t), No) : null),
                  this.records.set(t, f));
              }
              if (null != f) return this.hydrate(t, f, o);
            }
            return (o & W.Self ? jr() : this.parent).get(
              t,
              (n = o & W.Optional && n === wt ? null : n),
            );
          } catch (c) {
            if ("NullInjectorError" === c.name) {
              if (((c[xi] = c[xi] || []).unshift(ct(t)), s)) throw c;
              return (function Ba(e, t, n, o) {
                const r = e[xi];
                throw (
                  t[Jo] && r.unshift(t[Jo]),
                  (e.message = (function kr(e, t, n, o = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.slice(2)
                        : e;
                    let r = ct(t);
                    if (Array.isArray(t)) r = t.map(ct).join(" -> ");
                    else if ("object" == typeof t) {
                      let s = [];
                      for (let l in t)
                        if (t.hasOwnProperty(l)) {
                          let c = t[l];
                          s.push(
                            l +
                              ":" +
                              ("string" == typeof c
                                ? JSON.stringify(c)
                                : ct(c)),
                          );
                        }
                      r = `{${s.join(", ")}}`;
                    }
                    return `${n}${o ? "(" + o + ")" : ""}[${r}]: ${e.replace(wr, "\n  ")}`;
                  })("\n" + e.message, r, n, o)),
                  (e.ngTokenPath = r),
                  (e[xi] = null),
                  e
                );
              })(c, t, "R3InjectorError", this.source);
            }
            throw c;
          } finally {
            (ke(l), (0, Vt.mu)(s));
          }
        }
        resolveInjectorInitializers() {
          const t = ie(null),
            n = (0, Vt.mu)(this),
            o = ke(void 0);
          try {
            const s = this.get(ni, Qe, W.Self);
            for (const l of s) l();
          } finally {
            ((0, Vt.mu)(n), ke(o), ie(t));
          }
        }
        toString() {
          const t = [],
            n = this.records;
          for (const o of n.keys()) t.push(ct(o));
          return `R3Injector[${t.join(", ")}]`;
        }
        processProvider(t) {
          let n = Ni((t = ge(t))) ? t : ge(t && t.provide);
          const o = (function Fu(e) {
            return Ts(e) ? Lo(void 0, e.useValue) : Lo(Qa(e), No);
          })(t);
          if (!Ni(t) && !0 === t.multi) {
            let r = this.records.get(n);
            (r ||
              ((r = Lo(void 0, No, !0)),
              (r.factory = () => Ao(r.multi)),
              this.records.set(n, r)),
              (n = t),
              r.multi.push(t));
          }
          this.records.set(n, o);
        }
        hydrate(t, n, o) {
          const r = ie(null);
          try {
            return (
              n.value === Lu
                ? M(ct(t))
                : n.value === No &&
                  ((n.value = Lu), (n.value = n.factory(void 0, o))),
              "object" == typeof n.value &&
                n.value &&
                (function k(e) {
                  return (
                    null !== e &&
                    "object" == typeof e &&
                    "function" == typeof e.ngOnDestroy
                  );
                })(n.value) &&
                this._ngOnDestroyHooks.add(n.value),
              n.value
            );
          } finally {
            ie(r);
          }
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = ge(t.providedIn);
          return "string" == typeof n
            ? "any" === n || this.scopes.has(n)
            : this.injectorDefTypes.has(n);
        }
        removeOnDestroy(t) {
          const n = this._onDestroyHooks.indexOf(t);
          -1 !== n && this._onDestroyHooks.splice(n, 1);
        }
      }
      function Ro(e) {
        const t = oe(e),
          n = null !== t ? t.factory : Ui(e);
        if (null !== n) return n;
        if (e instanceof de) throw new te(204, !1);
        if (e instanceof Function)
          return (function Ou(e) {
            if (e.length > 0) throw new te(204, !1);
            const n = (function Ae(e) {
              return (e && (e[Kt] || e[Yt])) || null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new te(204, !1);
      }
      function Qa(e, t, n) {
        let o;
        if (Ni(e)) {
          const r = ge(e);
          return Ui(r) || Ro(r);
        }
        if (Ts(e)) o = () => ge(e.useValue);
        else if (
          (function Xa(e) {
            return !(!e || !e.useFactory);
          })(e)
        )
          o = () => e.useFactory(...Ao(e.deps || []));
        else if (
          (function Wa(e) {
            return !(!e || !e.useExisting);
          })(e)
        )
          o = (r, s) =>
            hn(
              ge(e.useExisting),
              void 0 !== s && s & W.Optional ? W.Optional : void 0,
            );
        else {
          const r = ge(e && (e.useClass || e.provide));
          if (
            !(function b(e) {
              return !!e.deps;
            })(e)
          )
            return Ui(r) || Ro(r);
          o = () => new r(...Ao(e.deps));
        }
        return o;
      }
      function nr(e) {
        if (e.destroyed) throw new te(205, !1);
      }
      function Lo(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function v(e, t) {
        for (const n of e)
          Array.isArray(n) ? v(n, t) : n && Bi(n) ? v(n.ɵproviders, t) : t(n);
      }
      function S(e, t) {
        let n;
        e instanceof Hi ? (nr(e), (n = e)) : (n = new ai(e));
        const r = (0, Vt.mu)(n),
          s = ke(void 0);
        try {
          return t();
        } finally {
          ((0, Vt.mu)(r), ke(s));
        }
      }
      function F() {
        return void 0 !== at() || null != (0, Vt.Af)();
      }
      function X(e) {
        if (!F()) throw new te(-203, !1);
      }
      const lt = 0,
        z = 1,
        _e = 2,
        Nt = 3,
        xn = 4,
        sn = 5,
        Cn = 6,
        Br = 7,
        nt = 8,
        it = 9,
        ui = 10,
        ve = 11,
        Oo = 12,
        As = 13,
        ir = 14,
        ht = 15,
        Fo = 16,
        or = 17,
        $i = 18,
        Vr = 19,
        ks = 20,
        zi = 21,
        Wi = 23,
        Nn = 24,
        pe = 26,
        Bu = 1,
        Ri = 7,
        ar = 9,
        Rt = 10;
      function Gt(e) {
        return Array.isArray(e) && "object" == typeof e[Bu];
      }
      function Jt(e) {
        return Array.isArray(e) && !0 === e[Bu];
      }
      function Ns(e) {
        return !!(4 & e.flags);
      }
      function Ci(e) {
        return e.componentOffset > -1;
      }
      function Rs(e) {
        return !(1 & ~e.flags);
      }
      function ii(e) {
        return !!e.template;
      }
      function Xi(e) {
        return !!(512 & e[_e]);
      }
      function Zi(e) {
        return !(256 & ~e[_e]);
      }
      class vf {
        previousValue;
        currentValue;
        firstChange;
        constructor(t, n, o) {
          ((this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = o));
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Wu(e, t, n, o) {
        null !== t ? t.applyValueToInputSignal(t, o) : (e[n] = o);
      }
      const Xu = (() => {
        const e = () => Zu;
        return ((e.ngInherit = !0), e);
      })();
      function Zu(e) {
        return (e.type.prototype.ngOnChanges && (e.setInput = bf), yf);
      }
      function yf() {
        const e = Ku(this),
          t = e?.current;
        if (t) {
          const n = e.previous;
          if (n === pt) e.previous = t;
          else for (let o in t) n[o] = t[o];
          ((e.current = null), this.ngOnChanges(t));
        }
      }
      function bf(e, t, n, o, r) {
        const s = this.declaredInputs[o],
          l =
            Ku(e) ||
            (function Cf(e, t) {
              return (e[Qu] = t);
            })(e, { previous: pt, current: null }),
          c = l.current || (l.current = {}),
          f = l.previous,
          m = f[s];
        ((c[s] = new vf(m && m.currentValue, n, f === pt)), Wu(e, t, r, n));
      }
      const Qu = "__ngSimpleChanges__";
      function Ku(e) {
        return e[Qu] || null;
      }
      const ot = function (e, t = null, n) {},
        Yu = "svg";
      function Ye(e) {
        for (; Array.isArray(e); ) e = e[lt];
        return e;
      }
      function lr(e, t) {
        return Ye(t[e]);
      }
      function Rn(e, t) {
        return Ye(t[e.index]);
      }
      function Po(e, t) {
        return e.data[t];
      }
      function jo(e, t) {
        return e[t];
      }
      function qa(e, t, n, o) {
        (n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)),
          (t[n] = o));
      }
      function Ln(e, t) {
        const n = t[e];
        return Gt(n) ? n : n[lt];
      }
      function el(e) {
        return !(128 & ~e[_e]);
      }
      function ci(e, t) {
        return null == t ? null : e[t];
      }
      function qu(e) {
        e[or] = 0;
      }
      function tl(e) {
        1024 & e[_e] || ((e[_e] |= 1024), el(e) && ur(e));
      }
      function Gr(e) {
        return !!(9216 & e[_e] || e[Nn]?.dirty);
      }
      function nl(e) {
        (e[ui].changeDetectionScheduler?.notify(8),
          64 & e[_e] && (e[_e] |= 1024),
          Gr(e) && ur(e));
      }
      function ur(e) {
        e[ui].changeDetectionScheduler?.notify(0);
        let t = Qi(e);
        for (; null !== t && !(8192 & t[_e]) && ((t[_e] |= 8192), el(t)); )
          t = Qi(t);
      }
      function Os(e, t) {
        if (Zi(e)) throw new te(911, !1);
        (null === e[zi] && (e[zi] = []), e[zi].push(t));
      }
      function Qi(e) {
        const t = e[Nt];
        return Jt(t) ? t[Nt] : t;
      }
      function ol(e) {
        return (e[Br] ??= []);
      }
      function rl(e) {
        return (e.cleanup ??= []);
      }
      const Ee = {
        lFrame: dc(null),
        bindingsEnabled: !0,
        skipHydrationRootTNode: null,
      };
      let al = !1;
      function ll() {
        return Ee.bindingsEnabled;
      }
      function Bo() {
        return null !== Ee.skipHydrationRootTNode;
      }
      function j() {
        return Ee.lFrame.lView;
      }
      function be() {
        return Ee.lFrame.tView;
      }
      function tc(e) {
        return ((Ee.lFrame.contextLView = e), e[nt]);
      }
      function nc(e) {
        return ((Ee.lFrame.contextLView = null), e);
      }
      function Pe() {
        let e = ic();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ic() {
        return Ee.lFrame.currentTNode;
      }
      function Ei(e, t) {
        const n = Ee.lFrame;
        ((n.currentTNode = e), (n.isParent = t));
      }
      function ul() {
        return Ee.lFrame.isParent;
      }
      function cl() {
        Ee.lFrame.isParent = !1;
      }
      function oc() {
        return Ee.lFrame.contextLView;
      }
      function sc() {
        return al;
      }
      function Ps(e) {
        const t = al;
        return ((al = e), t);
      }
      function On() {
        const e = Ee.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex),
          t
        );
      }
      function Ki() {
        return Ee.lFrame.bindingIndex;
      }
      function di() {
        return Ee.lFrame.bindingIndex++;
      }
      function Yi(e) {
        const t = Ee.lFrame,
          n = t.bindingIndex;
        return ((t.bindingIndex = t.bindingIndex + e), n);
      }
      function Ff(e, t) {
        const n = Ee.lFrame;
        ((n.bindingIndex = n.bindingRootIndex = e), dl(t));
      }
      function dl(e) {
        Ee.lFrame.currentDirectiveIndex = e;
      }
      function fl(e) {
        const t = Ee.lFrame.currentDirectiveIndex;
        return -1 === t ? null : e[t];
      }
      function pl() {
        return Ee.lFrame.currentQueryIndex;
      }
      function js(e) {
        Ee.lFrame.currentQueryIndex = e;
      }
      function jf(e) {
        const t = e[z];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[sn] : null;
      }
      function uc(e, t, n) {
        if (n & W.SkipSelf) {
          let r = t,
            s = e;
          for (
            ;
            !((r = r.parent),
            null !== r ||
              n & W.Host ||
              ((r = jf(s)), null === r || ((s = s[ir]), 10 & r.type)));
          );
          if (null === r) return !1;
          ((t = r), (e = s));
        }
        const o = (Ee.lFrame = cc());
        return ((o.currentTNode = t), (o.lView = e), !0);
      }
      function hl(e) {
        const t = cc(),
          n = e[z];
        ((Ee.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1));
      }
      function cc() {
        const e = Ee.lFrame,
          t = null === e ? null : e.child;
        return null === t ? dc(e) : t;
      }
      function dc(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return (null !== e && (e.child = t), t);
      }
      function fc() {
        const e = Ee.lFrame;
        return (
          (Ee.lFrame = e.parent),
          (e.currentTNode = null),
          (e.lView = null),
          e
        );
      }
      const pc = fc;
      function ml() {
        const e = fc();
        ((e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0));
      }
      function gn() {
        return Ee.lFrame.selectedIndex;
      }
      function Vo(e) {
        Ee.lFrame.selectedIndex = e;
      }
      function dt() {
        const e = Ee.lFrame;
        return Po(e.tView, e.selectedIndex);
      }
      function hc() {
        Ee.lFrame.currentNamespace = Yu;
      }
      function mc() {
        !(function Gf() {
          Ee.lFrame.currentNamespace = null;
        })();
      }
      let _c = !0;
      function cr() {
        return _c;
      }
      function Fn(e) {
        _c = e;
      }
      function gl(e, t) {
        for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
          const s = e.data[n].type.prototype,
            {
              ngAfterContentInit: l,
              ngAfterContentChecked: c,
              ngAfterViewInit: f,
              ngAfterViewChecked: m,
              ngOnDestroy: _,
            } = s;
          (l && (e.contentHooks ??= []).push(-n, l),
            c &&
              ((e.contentHooks ??= []).push(n, c),
              (e.contentCheckHooks ??= []).push(n, c)),
            f && (e.viewHooks ??= []).push(-n, f),
            m &&
              ((e.viewHooks ??= []).push(n, m),
              (e.viewCheckHooks ??= []).push(n, m)),
            null != _ && (e.destroyHooks ??= []).push(n, _));
        }
      }
      function Bs(e, t, n) {
        vc(e, t, 3, n);
      }
      function Vs(e, t, n, o) {
        (3 & e[_e]) === n && vc(e, t, n, o);
      }
      function _l(e, t) {
        let n = e[_e];
        (3 & n) === t && ((n &= 16383), (n += 1), (e[_e] = n));
      }
      function vc(e, t, n, o) {
        const s = o ?? -1,
          l = t.length - 1;
        let c = 0;
        for (let f = void 0 !== o ? 65535 & e[or] : 0; f < l; f++)
          if ("number" == typeof t[f + 1]) {
            if (((c = t[f]), null != o && c >= o)) break;
          } else
            (t[f] < 0 && (e[or] += 65536),
              (c < s || -1 == s) &&
                (Hf(e, n, t, f), (e[or] = (4294901760 & e[or]) + f + 2)),
              f++);
      }
      function yc(e, t) {
        ot(4, e, t);
        const n = ie(null);
        try {
          t.call(e);
        } finally {
          (ie(n), ot(5, e, t));
        }
      }
      function Hf(e, t, n, o) {
        const r = n[o] < 0,
          s = n[o + 1],
          c = e[r ? -n[o] : n[o]];
        r
          ? e[_e] >> 14 < e[or] >> 16 &&
            (3 & e[_e]) === t &&
            ((e[_e] += 16384), yc(c, s))
          : yc(c, s);
      }
      const dr = -1;
      class Hr {
        factory;
        injectImpl;
        resolving = !1;
        canSeeViewProviders;
        multi;
        componentProviders;
        index;
        providerFactory;
        constructor(t, n, o) {
          ((this.factory = t),
            (this.canSeeViewProviders = n),
            (this.injectImpl = o));
        }
      }
      function bc(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function Cc(e) {
        return 64 === e.charCodeAt(0);
      }
      function fr(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let o = 0; o < t.length; o++) {
              const r = t[o];
              "number" == typeof r
                ? (n = r)
                : 0 === n ||
                  Ec(e, n, r, 0, -1 === n || 2 === n ? t[++o] : null);
            }
          }
        return e;
      }
      function Ec(e, t, n, o, r) {
        let s = 0,
          l = e.length;
        if (-1 === t) l = -1;
        else
          for (; s < e.length; ) {
            const c = e[s++];
            if ("number" == typeof c) {
              if (c === t) {
                l = -1;
                break;
              }
              if (c > t) {
                l = s - 1;
                break;
              }
            }
          }
        for (; s < e.length; ) {
          const c = e[s];
          if ("number" == typeof c) break;
          if (c === n) return void (null !== r && (e[s + 1] = r));
          (s++, null !== r && s++);
        }
        (-1 !== l && (e.splice(l, 0, t), (s = l + 1)),
          e.splice(s++, 0, n),
          null !== r && e.splice(s++, 0, r));
      }
      function bl(e) {
        return e !== dr;
      }
      function $r(e) {
        return 32767 & e;
      }
      function zr(e, t) {
        let n = (function Zf(e) {
            return e >> 16;
          })(e),
          o = t;
        for (; n > 0; ) ((o = o[ir]), n--);
        return o;
      }
      let Cl = !0;
      function Gs(e) {
        const t = Cl;
        return ((Cl = e), t);
      }
      const Mc = 255,
        Ic = 5;
      let Qf = 0;
      const Li = {};
      function Us(e, t) {
        const n = Dc(e, t);
        if (-1 !== n) return n;
        const o = t[z];
        o.firstCreatePass &&
          ((e.injectorIndex = t.length),
          El(o.data, e),
          El(t, null),
          El(o.blueprint, null));
        const r = Hs(e, t),
          s = e.injectorIndex;
        if (bl(r)) {
          const l = $r(r),
            c = zr(r, t),
            f = c[z].data;
          for (let m = 0; m < 8; m++) t[s + m] = c[l + m] | f[l + m];
        }
        return ((t[s + 8] = r), s);
      }
      function El(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function Dc(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Hs(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          o = null,
          r = t;
        for (; null !== r; ) {
          if (((o = Il(r)), null === o)) return dr;
          if ((n++, (r = r[ir]), -1 !== o.injectorIndex))
            return o.injectorIndex | (n << 16);
        }
        return dr;
      }
      function Ml(e, t, n) {
        !(function Kf(e, t, n) {
          let o;
          ("string" == typeof n
            ? (o = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(Yo) && (o = n[Yo]),
            null == o && (o = n[Yo] = Qf++));
          const r = o & Mc;
          t.data[e + (r >> Ic)] |= 1 << r;
        })(e, t, n);
      }
      function Tc(e, t, n) {
        if (n & W.Optional || void 0 !== e) return e;
        J();
      }
      function Sc(e, t, n, o) {
        if (
          (n & W.Optional && void 0 === o && (o = null),
          !(n & (W.Self | W.Host)))
        ) {
          const r = e[it],
            s = ke(void 0);
          try {
            return r ? r.get(t, o, n & W.Optional) : Ve(t, o, n & W.Optional);
          } finally {
            ke(s);
          }
        }
        return Tc(o, 0, n);
      }
      function wc(e, t, n, o = W.Default, r) {
        if (null !== e) {
          if (2048 & t[_e] && !(o & W.Self)) {
            const l = (function Oc(e, t, n, o, r) {
              let s = e,
                l = t;
              for (; null !== s && null !== l && 2048 & l[_e] && !Xi(l); ) {
                const c = Ac(s, l, n, o | W.Self, Li);
                if (c !== Li) return c;
                let f = s.parent;
                if (!f) {
                  const m = l[ks];
                  if (m) {
                    const _ = m.get(n, Li, o);
                    if (_ !== Li) return _;
                  }
                  ((f = Il(l)), (l = l[ir]));
                }
                s = f;
              }
              return r;
            })(e, t, n, o, Li);
            if (l !== Li) return l;
          }
          const s = Ac(e, t, n, o, Li);
          if (s !== Li) return s;
        }
        return Sc(t, n, o, r);
      }
      function Ac(e, t, n, o, r) {
        const s = (function xc(e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(Yo) ? e[Yo] : void 0;
          return "number" == typeof t ? (t >= 0 ? t & Mc : Rc) : t;
        })(n);
        if ("function" == typeof s) {
          if (!uc(t, e, o)) return o & W.Host ? Tc(r, 0, o) : Sc(t, n, o, r);
          try {
            let l;
            if (((l = s(o)), null != l || o & W.Optional)) return l;
            J();
          } finally {
            pc();
          }
        } else if ("number" == typeof s) {
          let l = null,
            c = Dc(e, t),
            f = dr,
            m = o & W.Host ? t[ht][sn] : null;
          for (
            (-1 === c || o & W.SkipSelf) &&
            ((f = -1 === c ? Hs(e, t) : t[c + 8]),
            f !== dr && Xr(o, !1)
              ? ((l = t[z]), (c = $r(f)), (t = zr(f, t)))
              : (c = -1));
            -1 !== c;
          ) {
            const _ = t[z];
            if (Nc(s, c, _.data)) {
              const C = kc(c, t, n, l, o, m);
              if (C !== Li) return C;
            }
            ((f = t[c + 8]),
              f !== dr && Xr(o, t[z].data[c + 8] === m) && Nc(s, c, t)
                ? ((l = _), (c = $r(f)), (t = zr(f, t)))
                : (c = -1));
          }
        }
        return r;
      }
      function kc(e, t, n, o, r, s) {
        const l = t[z],
          c = l.data[e + 8],
          _ = $s(
            c,
            l,
            n,
            null == o ? Ci(c) && Cl : o != l && !!(3 & c.type),
            r & W.Host && s === c,
          );
        return null !== _ ? Wr(t, l, _, c, r) : Li;
      }
      function $s(e, t, n, o, r) {
        const s = e.providerIndexes,
          l = t.data,
          c = 1048575 & s,
          f = e.directiveStart,
          _ = s >> 20,
          w = r ? c + _ : e.directiveEnd;
        for (let I = o ? c : c + _; I < w; I++) {
          const R = l[I];
          if ((I < f && n === R) || (I >= f && R.type === n)) return I;
        }
        if (r) {
          const I = l[f];
          if (I && ii(I) && I.type === n) return f;
        }
        return null;
      }
      function Wr(e, t, n, o, r) {
        let s = e[n];
        const l = t.data;
        if (s instanceof Hr) {
          const c = s;
          c.resolving &&
            M(
              (function g(e) {
                return "function" == typeof e
                  ? e.name || e.toString()
                  : "object" == typeof e &&
                      null != e &&
                      "function" == typeof e.type
                    ? e.type.name || e.type.toString()
                    : ye(e);
              })(l[n]),
            );
          const f = Gs(c.canSeeViewProviders);
          c.resolving = !0;
          const _ = c.injectImpl ? ke(c.injectImpl) : null;
          uc(e, o, W.Default);
          try {
            ((s = e[n] = c.factory(void 0, r, l, e, o)),
              t.firstCreatePass &&
                n >= o.directiveStart &&
                (function Uf(e, t, n) {
                  const {
                    ngOnChanges: o,
                    ngOnInit: r,
                    ngDoCheck: s,
                  } = t.type.prototype;
                  if (o) {
                    const l = Zu(t);
                    ((n.preOrderHooks ??= []).push(e, l),
                      (n.preOrderCheckHooks ??= []).push(e, l));
                  }
                  (r && (n.preOrderHooks ??= []).push(0 - e, r),
                    s &&
                      ((n.preOrderHooks ??= []).push(e, s),
                      (n.preOrderCheckHooks ??= []).push(e, s)));
                })(n, l[n], t));
          } finally {
            (null !== _ && ke(_), Gs(f), (c.resolving = !1), pc());
          }
        }
        return s;
      }
      function Nc(e, t, n) {
        return !!(n[t + (e >> Ic)] & (1 << e));
      }
      function Xr(e, t) {
        return !(e & W.Self || (e & W.Host && t));
      }
      class Pt {
        _tNode;
        _lView;
        constructor(t, n) {
          ((this._tNode = t), (this._lView = n));
        }
        get(t, n, o) {
          return wc(this._tNode, this._lView, t, Ar(o), n);
        }
      }
      function Rc() {
        return new Pt(Pe(), j());
      }
      function Lc(e) {
        return kt(() => {
          const t = e.prototype.constructor,
            n = t[An] || Zr(t),
            o = Object.prototype;
          let r = Object.getPrototypeOf(e.prototype).constructor;
          for (; r && r !== o; ) {
            const s = r[An] || Zr(r);
            if (s && s !== n) return s;
            r = Object.getPrototypeOf(r);
          }
          return (s) => new s();
        });
      }
      function Zr(e) {
        return Gn(e)
          ? () => {
              const t = Zr(ge(e));
              return t && t();
            }
          : Ui(e);
      }
      function Il(e) {
        const t = e[z],
          n = t.type;
        return 2 === n ? t.declTNode : 1 === n ? e[sn] : null;
      }
      function pr(e) {
        return (function Yf(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const o = n.length;
            let r = 0;
            for (; r < o; ) {
              const s = n[r];
              if (bc(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < o && "string" == typeof n[r]; ) r++;
              else {
                if (s === t) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(Pe(), e);
      }
      function zs(e, t = null, n = null, o) {
        const r = Yr(e, t, n, o);
        return (r.resolveInjectorInitializers(), r);
      }
      function Yr(e, t = null, n = null, o, r = new Set()) {
        const s = [n || Qe, Fr(e)];
        return (
          (o = o || ("object" == typeof e ? void 0 : ct(e))),
          new Hi(s, t || jr(), o || null, r)
        );
      }
      class qt {
        static THROW_IF_NOT_FOUND = wt;
        static NULL = new Or();
        static create(t, n) {
          if (Array.isArray(t)) return zs({ name: "" }, n, t, "");
          {
            const o = t.name ?? "";
            return zs({ name: o }, t.parent, t.providers, o);
          }
        }
        static ɵprov = x({
          token: qt,
          providedIn: "any",
          factory: () => hn(Ha),
        });
        static __NG_ELEMENT_ID__ = -1;
      }
      class Ws {
        attributeName;
        constructor(t) {
          this.attributeName = t;
        }
        __NG_ELEMENT_ID__ = () => pr(this.attributeName);
        toString() {
          return `HostAttributeToken ${this.attributeName}`;
        }
      }
      new de("").__NG_ELEMENT_ID__ = (e) => {
        const t = Pe();
        if (null === t) throw new te(204, !1);
        if (2 & t.type) return t.value;
        if (e & W.Optional) return null;
        throw new te(204, !1);
      };
      const Jr = !1;
      let fi = (() =>
        class e {
          static __NG_ELEMENT_ID__ = kl;
          static __NG_ENV_ID__ = (n) => n;
        })();
      class Xs extends fi {
        _lView;
        constructor(t) {
          (super(), (this._lView = t));
        }
        onDestroy(t) {
          const n = this._lView;
          return Zi(n)
            ? (t(), () => {})
            : (Os(n, t),
              () =>
                (function il(e, t) {
                  if (null === e[zi]) return;
                  const n = e[zi].indexOf(t);
                  -1 !== n && e[zi].splice(n, 1);
                })(n, t));
        }
      }
      function kl() {
        return new Xs(j());
      }
      class Qn {}
      const Zs = new de("", { providedIn: "root", factory: () => !1 }),
        xl = new de(""),
        qr = new de("");
      let _o = (() => {
        class e {
          taskId = 0;
          pendingTasks = new Set();
          get _hasPendingTasks() {
            return this.hasPendingTasks.value;
          }
          hasPendingTasks = new Bn.t(!1);
          add() {
            this._hasPendingTasks || this.hasPendingTasks.next(!0);
            const n = this.taskId++;
            return (this.pendingTasks.add(n), n);
          }
          has(n) {
            return this.pendingTasks.has(n);
          }
          remove(n) {
            (this.pendingTasks.delete(n),
              0 === this.pendingTasks.size &&
                this._hasPendingTasks &&
                this.hasPendingTasks.next(!1));
          }
          ngOnDestroy() {
            (this.pendingTasks.clear(),
              this._hasPendingTasks && this.hasPendingTasks.next(!1));
          }
          static ɵprov = x({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          });
        }
        return e;
      })();
      const Oi = class np extends Xe.B {
        __isAsync;
        destroyRef = void 0;
        pendingTasks = void 0;
        constructor(t = !1) {
          (super(),
            (this.__isAsync = t),
            F() &&
              ((this.destroyRef = fe(fi, { optional: !0 }) ?? void 0),
              (this.pendingTasks = fe(_o, { optional: !0 }) ?? void 0)));
        }
        emit(t) {
          const n = ie(null);
          try {
            super.next(t);
          } finally {
            ie(n);
          }
        }
        subscribe(t, n, o) {
          let r = t,
            s = n || (() => null),
            l = o;
          if (t && "object" == typeof t) {
            const f = t;
            ((r = f.next?.bind(f)),
              (s = f.error?.bind(f)),
              (l = f.complete?.bind(f)));
          }
          this.__isAsync &&
            ((s = this.wrapInTimeout(s)),
            r && (r = this.wrapInTimeout(r)),
            l && (l = this.wrapInTimeout(l)));
          const c = super.subscribe({ next: r, error: s, complete: l });
          return (t instanceof vi.yU && t.add(c), c);
        }
        wrapInTimeout(t) {
          return (n) => {
            const o = this.pendingTasks?.add();
            setTimeout(() => {
              try {
                t(n);
              } finally {
                void 0 !== o && this.pendingTasks?.remove(o);
              }
            });
          };
        }
      };
      function es(...e) {}
      function ip(e) {
        let t, n;
        function o() {
          e = es;
          try {
            (void 0 !== n &&
              "function" == typeof cancelAnimationFrame &&
              cancelAnimationFrame(n),
              void 0 !== t && clearTimeout(t));
          } catch {}
        }
        return (
          (t = setTimeout(() => {
            (e(), o());
          })),
          "function" == typeof requestAnimationFrame &&
            (n = requestAnimationFrame(() => {
              (e(), o());
            })),
          () => o()
        );
      }
      function Nl(e) {
        return (
          queueMicrotask(() => e()),
          () => {
            e = es;
          }
        );
      }
      const ts = "isAngularZone",
        mr = ts + "_ID";
      let Hc = 0;
      class gt {
        hasPendingMacrotasks = !1;
        hasPendingMicrotasks = !1;
        isStable = !0;
        onUnstable = new Oi(!1);
        onMicrotaskEmpty = new Oi(!1);
        onStable = new Oi(!1);
        onError = new Oi(!1);
        constructor(t) {
          const {
            enableLongStackTrace: n = !1,
            shouldCoalesceEventChangeDetection: o = !1,
            shouldCoalesceRunChangeDetection: r = !1,
            scheduleInRootZone: s = Jr,
          } = t;
          if (typeof Zone > "u") throw new te(908, !1);
          Zone.assertZonePatched();
          const l = this;
          ((l._nesting = 0),
            (l._outer = l._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (l._inner = l._inner.fork(new Zone.TaskTrackingZoneSpec())),
            n &&
              Zone.longStackTraceZoneSpec &&
              (l._inner = l._inner.fork(Zone.longStackTraceZoneSpec)),
            (l.shouldCoalesceEventChangeDetection = !r && o),
            (l.shouldCoalesceRunChangeDetection = r),
            (l.callbackScheduled = !1),
            (l.scheduleInRootZone = s),
            (function Wc(e) {
              const t = () => {
                  !(function zc(e) {
                    function t() {
                      ip(() => {
                        ((e.callbackScheduled = !1),
                          Qs(e),
                          (e.isCheckStableRunning = !0),
                          ns(e),
                          (e.isCheckStableRunning = !1));
                      });
                    }
                    e.isCheckStableRunning ||
                      e.callbackScheduled ||
                      ((e.callbackScheduled = !0),
                      e.scheduleInRootZone
                        ? Zone.root.run(() => {
                            t();
                          })
                        : e._outer.run(() => {
                            t();
                          }),
                      Qs(e));
                  })(e);
                },
                n = Hc++;
              e._inner = e._inner.fork({
                name: "angular",
                properties: { [ts]: !0, [mr]: n, [mr + n]: !0 },
                onInvokeTask: (o, r, s, l, c, f) => {
                  if (
                    (function Xc(e) {
                      return ap(e, "__ignore_ng_zone__");
                    })(f)
                  )
                    return o.invokeTask(s, l, c, f);
                  try {
                    return (op(e), o.invokeTask(s, l, c, f));
                  } finally {
                    (((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === l.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      rp(e));
                  }
                },
                onInvoke: (o, r, s, l, c, f, m) => {
                  try {
                    return (op(e), o.invoke(s, l, c, f, m));
                  } finally {
                    (e.shouldCoalesceRunChangeDetection &&
                      !e.callbackScheduled &&
                      !(function sp(e) {
                        return ap(e, "__scheduler_tick__");
                      })(f) &&
                      t(),
                      rp(e));
                  }
                },
                onHasTask: (o, r, s, l) => {
                  (o.hasTask(s, l),
                    r === s &&
                      ("microTask" == l.change
                        ? ((e._hasPendingMicrotasks = l.microTask),
                          Qs(e),
                          ns(e))
                        : "macroTask" == l.change &&
                          (e.hasPendingMacrotasks = l.macroTask)));
                },
                onHandleError: (o, r, s, l) => (
                  o.handleError(s, l),
                  e.runOutsideAngular(() => e.onError.emit(l)),
                  !1
                ),
              });
            })(l));
        }
        static isInAngularZone() {
          return typeof Zone < "u" && !0 === Zone.current.get(ts);
        }
        static assertInAngularZone() {
          if (!gt.isInAngularZone()) throw new te(909, !1);
        }
        static assertNotInAngularZone() {
          if (gt.isInAngularZone()) throw new te(909, !1);
        }
        run(t, n, o) {
          return this._inner.run(t, n, o);
        }
        runTask(t, n, o, r) {
          const s = this._inner,
            l = s.scheduleEventTask("NgZoneEvent: " + r, t, $c, es, es);
          try {
            return s.runTask(l, n, o);
          } finally {
            s.cancelTask(l);
          }
        }
        runGuarded(t, n, o) {
          return this._inner.runGuarded(t, n, o);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const $c = {};
      function ns(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            (e._nesting++, e.onMicrotaskEmpty.emit(null));
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Qs(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            !0 === e.callbackScheduled)
        );
      }
      function op(e) {
        (e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null)));
      }
      function rp(e) {
        (e._nesting--, ns(e));
      }
      class Ks {
        hasPendingMicrotasks = !1;
        hasPendingMacrotasks = !1;
        isStable = !0;
        onUnstable = new Oi();
        onMicrotaskEmpty = new Oi();
        onStable = new Oi();
        onError = new Oi();
        run(t, n, o) {
          return t.apply(n, o);
        }
        runGuarded(t, n, o) {
          return t.apply(n, o);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, o, r) {
          return t.apply(n, o);
        }
      }
      function ap(e, t) {
        return !(!Array.isArray(e) || 1 !== e.length) && !0 === e[0]?.data?.[t];
      }
      class Mi {
        _console = console;
        handleError(t) {
          this._console.error("ERROR", t);
        }
      }
      const lp = new de("", {
        providedIn: "root",
        factory: () => {
          const e = fe(gt),
            t = fe(Mi);
          return (n) => e.runOutsideAngular(() => t.handleError(n));
        },
      });
      class up {
        destroyed = !1;
        listeners = null;
        errorHandler = fe(Mi, { optional: !0 });
        destroyRef = fe(fi);
        constructor() {
          this.destroyRef.onDestroy(() => {
            ((this.destroyed = !0), (this.listeners = null));
          });
        }
        subscribe(t) {
          if (this.destroyed) throw new te(953, !1);
          return (
            (this.listeners ??= []).push(t),
            {
              unsubscribe: () => {
                const n = this.listeners?.indexOf(t);
                void 0 !== n && -1 !== n && this.listeners?.splice(n, 1);
              },
            }
          );
        }
        emit(t) {
          if (this.destroyed) return void console.warn(fn(953, !1));
          if (null === this.listeners) return;
          const n = ie(null);
          try {
            for (const o of this.listeners)
              try {
                o(t);
              } catch (r) {
                this.errorHandler?.handleError(r);
              }
          } finally {
            ie(n);
          }
        }
      }
      function Vg(e) {
        return new up();
      }
      function dp(e, t) {
        return Tn(e, t);
      }
      const fp =
        ((dp.required = function Gg(e) {
          return Tn(Ai, e);
        }),
        dp);
      function pp() {
        return is(Pe(), j());
      }
      function is(e, t) {
        return new u(Rn(e, t));
      }
      let u = (() =>
        class e {
          nativeElement;
          constructor(n) {
            this.nativeElement = n;
          }
          static __NG_ELEMENT_ID__ = pp;
        })();
      function E(e) {
        return e instanceof u ? e.nativeElement : e;
      }
      function a(e) {
        return "function" == typeof e && void 0 !== e[Se];
      }
      function p(e, t) {
        const n = (function Ge(e, t) {
            const n = Object.create(Yn);
            ((n.value = e), void 0 !== t && (n.equal = t));
            const o = () => (We(n), n.value);
            return ((o[Se] = n), o);
          })(e, t?.equal),
          o = n[Se];
        return (
          (n.set = (r) => Wt(o, r)),
          (n.update = (r) => He(o, r)),
          (n.asReadonly = D.bind(n)),
          n
        );
      }
      function D() {
        const e = this[Se];
        if (void 0 === e.readonlyFn) {
          const t = () => this();
          ((t[Se] = e), (e.readonlyFn = t));
        }
        return e.readonlyFn;
      }
      function V(e) {
        return a(e) && "function" == typeof e.set;
      }
      function Ue() {
        return this._results[Symbol.iterator]();
      }
      class Ut {
        _emitDistinctChangesOnly;
        dirty = !0;
        _onDirty = void 0;
        _results = [];
        _changesDetected = !1;
        _changes = void 0;
        length = 0;
        first = void 0;
        last = void 0;
        get changes() {
          return (this._changes ??= new Xe.B());
        }
        constructor(t = !1) {
          this._emitDistinctChangesOnly = t;
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          this.dirty = !1;
          const o = (function kn(e) {
            return e.flat(Number.POSITIVE_INFINITY);
          })(t);
          (this._changesDetected = !(function Ga(e, t, n) {
            if (e.length !== t.length) return !1;
            for (let o = 0; o < e.length; o++) {
              let r = e[o],
                s = t[o];
              if ((n && ((r = n(r)), (s = n(s))), s !== r)) return !1;
            }
            return !0;
          })(this._results, o, n)) &&
            ((this._results = o),
            (this.length = o.length),
            (this.last = o[this.length - 1]),
            (this.first = o[0]));
        }
        notifyOnChanges() {
          void 0 !== this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.next(this);
        }
        onDirty(t) {
          this._onDirty = t;
        }
        setDirty() {
          ((this.dirty = !0), this._onDirty?.());
        }
        destroy() {
          void 0 !== this._changes &&
            (this._changes.complete(), this._changes.unsubscribe());
        }
        [Symbol.iterator] = Ue;
      }
      function Rl(e) {
        return !(128 & ~e.flags);
      }
      var Qc = (function (e) {
        return (
          (e[(e.OnPush = 0)] = "OnPush"),
          (e[(e.Default = 1)] = "Default"),
          e
        );
      })(Qc || {});
      const Kc = new Map();
      let tM = 0;
      function mp(e) {
        Kc.delete(e[Vr]);
      }
      const _p = "__ngContext__";
      function hi(e, t) {
        Gt(t)
          ? ((e[_p] = t[Vr]),
            (function iM(e) {
              Kc.set(e[Vr], e);
            })(t))
          : (e[_p] = t);
      }
      function Kg(e) {
        return Jg(e[Oo]);
      }
      function Yg(e) {
        return Jg(e[xn]);
      }
      function Jg(e) {
        for (; null !== e && !Jt(e); ) e = e[xn];
        return e;
      }
      let yp;
      function CM(e) {
        yp = e;
      }
      function vo() {
        if (void 0 !== yp) return yp;
        if (typeof document < "u") return document;
        throw new te(210, !1);
      }
      const gr = new de("", { providedIn: "root", factory: () => EM }),
        EM = "ng",
        bp = new de(""),
        MM = new de("", { providedIn: "platform", factory: () => "unknown" }),
        IM = new de(""),
        DM = new de("", {
          providedIn: "root",
          factory: () =>
            vo()
              .body?.querySelector("[ngCspNonce]")
              ?.getAttribute("ngCspNonce") || null,
        }),
        l_ = new de("", { providedIn: "root", factory: () => !1 });
      var xp = (function (e) {
        return (
          (e[(e.CHANGE_DETECTION = 0)] = "CHANGE_DETECTION"),
          (e[(e.AFTER_NEXT_RENDER = 1)] = "AFTER_NEXT_RENDER"),
          e
        );
      })(xp || {});
      const qs = new de(""),
        f_ = new Set();
      function mi(e) {
        f_.has(e) ||
          (f_.add(e),
          performance?.mark?.("mark_feature_usage", {
            detail: { feature: e },
          }));
      }
      function kM(e, t) {
        if (null !== Ce()) throw new te(-602, !1);
      }
      let nd = (() =>
        class e {
          view;
          node;
          constructor(n, o) {
            ((this.view = n), (this.node = o));
          }
          static __NG_ELEMENT_ID__ = xM;
        })();
      function xM() {
        return new nd(j(), Pe());
      }
      var ea = (function (e) {
        return (
          (e[(e.EarlyRead = 0)] = "EarlyRead"),
          (e[(e.Write = 1)] = "Write"),
          (e[(e.MixedReadWrite = 2)] = "MixedReadWrite"),
          (e[(e.Read = 3)] = "Read"),
          e
        );
      })(ea || {});
      let Np = (() => {
        class e {
          impl = null;
          execute() {
            this.impl?.execute();
          }
          static ɵprov = x({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          });
        }
        return e;
      })();
      const p_ = [ea.EarlyRead, ea.Write, ea.MixedReadWrite, ea.Read];
      let h_ = (() => {
        class e {
          ngZone = fe(gt);
          scheduler = fe(Qn);
          errorHandler = fe(Mi, { optional: !0 });
          sequences = new Set();
          deferredRegistrations = new Set();
          executing = !1;
          constructor() {
            fe(qs, { optional: !0 });
          }
          execute() {
            const n = this.sequences.size > 0;
            (n && ot(16), (this.executing = !0));
            for (const o of p_)
              for (const r of this.sequences)
                if (!r.erroredOrDestroyed && r.hooks[o])
                  try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                      this.maybeTrace(
                        () => (0, r.hooks[o])(r.pipelinedValue),
                        r.snapshot,
                      ),
                    );
                  } catch (s) {
                    ((r.erroredOrDestroyed = !0),
                      this.errorHandler?.handleError(s));
                  }
            this.executing = !1;
            for (const o of this.sequences)
              (o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()));
            for (const o of this.deferredRegistrations) this.sequences.add(o);
            (this.deferredRegistrations.size > 0 && this.scheduler.notify(7),
              this.deferredRegistrations.clear(),
              n && ot(17));
          }
          register(n) {
            const { view: o } = n;
            void 0 !== o
              ? ((o[25] ??= []).push(n), ur(o), (o[_e] |= 8192))
              : this.executing
                ? this.deferredRegistrations.add(n)
                : this.addSequence(n);
          }
          addSequence(n) {
            (this.sequences.add(n), this.scheduler.notify(7));
          }
          unregister(n) {
            this.executing && this.sequences.has(n)
              ? ((n.erroredOrDestroyed = !0),
                (n.pipelinedValue = void 0),
                (n.once = !0))
              : (this.sequences.delete(n),
                this.deferredRegistrations.delete(n));
          }
          maybeTrace(n, o) {
            return o ? o.run(xp.AFTER_NEXT_RENDER, n) : n();
          }
          static ɵprov = x({
            token: e,
            providedIn: "root",
            factory: () => new e(),
          });
        }
        return e;
      })();
      class m_ {
        impl;
        hooks;
        view;
        once;
        snapshot;
        erroredOrDestroyed = !1;
        pipelinedValue = void 0;
        unregisterOnDestroy;
        constructor(t, n, o, r, s, l = null) {
          ((this.impl = t),
            (this.hooks = n),
            (this.view = o),
            (this.once = r),
            (this.snapshot = l),
            (this.unregisterOnDestroy = s?.onDestroy(() => this.destroy())));
        }
        afterRun() {
          ((this.erroredOrDestroyed = !1),
            (this.pipelinedValue = void 0),
            this.snapshot?.dispose(),
            (this.snapshot = null));
        }
        destroy() {
          (this.impl.unregister(this), this.unregisterOnDestroy?.());
          const t = this.view?.[25];
          t && (this.view[25] = t.filter((n) => n !== this));
        }
      }
      function Rp(e, t) {
        !t?.injector && X();
        const n = t?.injector ?? fe(qt);
        return (mi("NgAfterRender"), g_(e, n, t, !1));
      }
      function Lp(e, t) {
        !t?.injector && X();
        const n = t?.injector ?? fe(qt);
        return (mi("NgAfterNextRender"), g_(e, n, t, !0));
      }
      function g_(e, t, n, o) {
        const r = t.get(Np);
        r.impl ??= t.get(h_);
        const s = t.get(qs, null, { optional: !0 }),
          l = n?.phase ?? ea.MixedReadWrite,
          c = !0 !== n?.manualCleanup ? t.get(fi) : null,
          f = t.get(nd, null, { optional: !0 }),
          m = new m_(
            r.impl,
            (function NM(e, t) {
              if (e instanceof Function) {
                const n = [void 0, void 0, void 0, void 0];
                return ((n[t] = e), n);
              }
              return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
            })(e, l),
            f?.view,
            o,
            c,
            s?.snapshot(null),
          );
        return (r.impl.register(m), m);
      }
      let x_ = (e, t, n, o) => {},
        N_ = () => null;
      function R_(e, t, n = !1) {
        return N_(e, t, n);
      }
      function U_(e, t) {
        const n = e.contentQueries;
        if (null !== n) {
          const o = ie(null);
          try {
            for (let r = 0; r < n.length; r += 2) {
              const l = n[r + 1];
              if (-1 !== l) {
                const c = e.data[l];
                (js(n[r]), c.contentQueries(2, t[l], l));
              }
            }
          } finally {
            ie(o);
          }
        }
      }
      function Zp(e, t, n) {
        js(0);
        const o = ie(null);
        try {
          t(e, n);
        } finally {
          ie(o);
        }
      }
      function Qp(e, t, n) {
        if (Ns(t)) {
          const o = ie(null);
          try {
            const s = t.directiveEnd;
            for (let l = t.directiveStart; l < s; l++) {
              const c = e.data[l];
              c.contentQueries && c.contentQueries(1, n[l], l);
            }
          } finally {
            ie(o);
          }
        }
      }
      var Ho = (function (e) {
        return (
          (e[(e.Emulated = 0)] = "Emulated"),
          (e[(e.None = 2)] = "None"),
          (e[(e.ShadowDom = 3)] = "ShadowDom"),
          e
        );
      })(Ho || {});
      let dd, fd;
      function la(e) {
        return (
          (function H_() {
            if (void 0 === dd && ((dd = null), $t.trustedTypes))
              try {
                dd = $t.trustedTypes.createPolicy("angular", {
                  createHTML: (e) => e,
                  createScript: (e) => e,
                  createScriptURL: (e) => e,
                });
              } catch {}
            return dd;
          })()?.createHTML(e) || e
        );
      }
      function Kp() {
        if (void 0 === fd && ((fd = null), $t.trustedTypes))
          try {
            fd = $t.trustedTypes.createPolicy("angular#unsafe-bypass", {
              createHTML: (e) => e,
              createScript: (e) => e,
              createScriptURL: (e) => e,
            });
          } catch {}
        return fd;
      }
      function $_(e) {
        return Kp()?.createHTML(e) || e;
      }
      function W_(e) {
        return Kp()?.createScriptURL(e) || e;
      }
      class ss {
        changingThisBreaksApplicationSecurity;
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${yn})`;
        }
      }
      class _I extends ss {
        getTypeName() {
          return "HTML";
        }
      }
      class vI extends ss {
        getTypeName() {
          return "Style";
        }
      }
      class yI extends ss {
        getTypeName() {
          return "Script";
        }
      }
      class bI extends ss {
        getTypeName() {
          return "URL";
        }
      }
      class CI extends ss {
        getTypeName() {
          return "ResourceURL";
        }
      }
      function $o(e) {
        return e instanceof ss ? e.changingThisBreaksApplicationSecurity : e;
      }
      function ua(e, t) {
        const n = (function EI(e) {
          return (e instanceof ss && e.getTypeName()) || null;
        })(e);
        if (null != n && n !== t) {
          if ("ResourceURL" === n && "URL" === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see ${yn})`);
        }
        return n === t;
      }
      function MI(e) {
        return new _I(e);
      }
      function II(e) {
        return new vI(e);
      }
      function DI(e) {
        return new yI(e);
      }
      function TI(e) {
        return new bI(e);
      }
      function SI(e) {
        return new CI(e);
      }
      class wI {
        inertDocumentHelper;
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = "<body><remove></remove>" + t;
          try {
            const n = new window.DOMParser().parseFromString(
              la(t),
              "text/html",
            ).body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.firstChild?.remove(), n);
          } catch {
            return null;
          }
        }
      }
      class AI {
        defaultDoc;
        inertDocument;
        constructor(t) {
          ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument(
                "sanitization-inert",
              )));
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement("template");
          return ((n.innerHTML = la(t)), n);
        }
      }
      const xI = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
      function pd(e) {
        return (e = String(e)).match(xI) ? e : "unsafe:" + e;
      }
      function zo(e) {
        const t = {};
        for (const n of e.split(",")) t[n] = !0;
        return t;
      }
      function Wl(...e) {
        const t = {};
        for (const n of e)
          for (const o in n) n.hasOwnProperty(o) && (t[o] = !0);
        return t;
      }
      const Z_ = zo("area,br,col,hr,img,wbr"),
        Q_ = zo("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
        K_ = zo("rp,rt"),
        Yp = Wl(
          Z_,
          Wl(
            Q_,
            zo(
              "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
            ),
          ),
          Wl(
            K_,
            zo(
              "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
            ),
          ),
          Wl(K_, Q_),
        ),
        Jp = zo("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
        Y_ = Wl(
          Jp,
          zo(
            "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
          ),
          zo(
            "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
          ),
        ),
        NI = zo("script,style,template");
      class RI {
        sanitizedSomething = !1;
        buf = [];
        sanitizeChildren(t) {
          let n = t.firstChild,
            o = !0,
            r = [];
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (o = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                  ? this.chars(n.nodeValue)
                  : (this.sanitizedSomething = !0),
              o && n.firstChild)
            )
              (r.push(n), (n = FI(n)));
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let s = OI(n);
                if (s) {
                  n = s;
                  break;
                }
                n = r.pop();
              }
          return this.buf.join("");
        }
        startElement(t) {
          const n = J_(t).toLowerCase();
          if (!Yp.hasOwnProperty(n))
            return ((this.sanitizedSomething = !0), !NI.hasOwnProperty(n));
          (this.buf.push("<"), this.buf.push(n));
          const o = t.attributes;
          for (let r = 0; r < o.length; r++) {
            const s = o.item(r),
              l = s.name,
              c = l.toLowerCase();
            if (!Y_.hasOwnProperty(c)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let f = s.value;
            (Jp[c] && (f = pd(f)), this.buf.push(" ", l, '="', ev(f), '"'));
          }
          return (this.buf.push(">"), !0);
        }
        endElement(t) {
          const n = J_(t).toLowerCase();
          Yp.hasOwnProperty(n) &&
            !Z_.hasOwnProperty(n) &&
            (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
        }
        chars(t) {
          this.buf.push(ev(t));
        }
      }
      function OI(e) {
        const t = e.nextSibling;
        if (t && e !== t.previousSibling) throw q_(t);
        return t;
      }
      function FI(e) {
        const t = e.firstChild;
        if (
          t &&
          (function LI(e, t) {
            return (
              (e.compareDocumentPosition(t) &
                Node.DOCUMENT_POSITION_CONTAINED_BY) !==
              Node.DOCUMENT_POSITION_CONTAINED_BY
            );
          })(e, t)
        )
          throw q_(t);
        return t;
      }
      function J_(e) {
        const t = e.nodeName;
        return "string" == typeof t ? t : "FORM";
      }
      function q_(e) {
        return new Error(
          `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
        );
      }
      const PI = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        jI = /([^\#-~ |!])/g;
      function ev(e) {
        return e
          .replace(/&/g, "&amp;")
          .replace(PI, function (t) {
            return (
              "&#" +
              (1024 * (t.charCodeAt(0) - 55296) +
                (t.charCodeAt(1) - 56320) +
                65536) +
              ";"
            );
          })
          .replace(jI, function (t) {
            return "&#" + t.charCodeAt(0) + ";";
          })
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      let hd;
      function tv(e, t) {
        let n = null;
        try {
          hd =
            hd ||
            (function X_(e) {
              const t = new AI(e);
              return (function kI() {
                try {
                  return !!new window.DOMParser().parseFromString(
                    la(""),
                    "text/html",
                  );
                } catch {
                  return !1;
                }
              })()
                ? new wI(t)
                : t;
            })(e);
          let o = t ? String(t) : "";
          n = hd.getInertBodyElement(o);
          let r = 5,
            s = o;
          do {
            if (0 === r)
              throw new Error(
                "Failed to sanitize html because the input is unstable",
              );
            (r--, (o = s), (s = n.innerHTML), (n = hd.getInertBodyElement(o)));
          } while (o !== s);
          return la(new RI().sanitizeChildren(qp(n) || n));
        } finally {
          if (n) {
            const o = qp(n) || n;
            for (; o.firstChild; ) o.firstChild.remove();
          }
        }
      }
      function qp(e) {
        return "content" in e &&
          (function BI(e) {
            return (
              e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
            );
          })(e)
          ? e.content
          : null;
      }
      var as = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })(as || {});
      function nv(e) {
        const t = Xl();
        return t
          ? $_(t.sanitize(as.HTML, e) || "")
          : ua(e, "HTML")
            ? $_($o(e))
            : tv(vo(), ye(e));
      }
      function iv(e) {
        const t = Xl();
        return t
          ? t.sanitize(as.STYLE, e) || ""
          : ua(e, "Style")
            ? $o(e)
            : ye(e);
      }
      function eh(e) {
        const t = Xl();
        return t
          ? t.sanitize(as.URL, e) || ""
          : ua(e, "URL")
            ? $o(e)
            : pd(ye(e));
      }
      function ov(e) {
        const t = Xl();
        if (t) return W_(t.sanitize(as.RESOURCE_URL, e) || "");
        if (ua(e, "ResourceURL")) return W_($o(e));
        throw new te(904, !1);
      }
      function rv(e, t, n) {
        return (function HI(e, t) {
          return ("src" === t &&
            ("embed" === e ||
              "frame" === e ||
              "iframe" === e ||
              "media" === e ||
              "script" === e)) ||
            ("href" === t && ("base" === e || "link" === e))
            ? ov
            : eh;
        })(
          t,
          n,
        )(e);
      }
      function Xl() {
        const e = j();
        return e && e[ui].sanitizer;
      }
      const $I = /^>|^->|<!--|-->|--!>|<!-$/g,
        zI = /(<|>)/g;
      function cv(e) {
        return e.ownerDocument;
      }
      function ih(e) {
        return e.ownerDocument.body;
      }
      function yo(e) {
        return e instanceof Function ? e() : e;
      }
      function nD(e, t, n) {
        let o = e.length;
        for (;;) {
          const r = e.indexOf(t, n);
          if (-1 === r) return r;
          if (0 === r || e.charCodeAt(r - 1) <= 32) {
            const s = t.length;
            if (r + s === o || e.charCodeAt(r + s) <= 32) return r;
          }
          n = r + 1;
        }
      }
      const hv = "ng-template";
      function iD(e, t, n, o) {
        let r = 0;
        if (o) {
          for (; r < t.length && "string" == typeof t[r]; r += 2)
            if ("class" === t[r] && -1 !== nD(t[r + 1].toLowerCase(), n, 0))
              return !0;
        } else if (oh(e)) return !1;
        if (((r = t.indexOf(1, r)), r > -1)) {
          let s;
          for (; ++r < t.length && "string" == typeof (s = t[r]); )
            if (s.toLowerCase() === n) return !0;
        }
        return !1;
      }
      function oh(e) {
        return 4 === e.type && e.value !== hv;
      }
      function oD(e, t, n) {
        return t === (4 !== e.type || n ? e.value : hv);
      }
      function rD(e, t, n) {
        let o = 4;
        const r = e.attrs,
          s =
            null !== r
              ? (function lD(e) {
                  for (let t = 0; t < e.length; t++) if (bc(e[t])) return t;
                  return e.length;
                })(r)
              : 0;
        let l = !1;
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          if ("number" != typeof f) {
            if (!l)
              if (4 & o) {
                if (
                  ((o = 2 | (1 & o)),
                  ("" !== f && !oD(e, f, n)) || ("" === f && 1 === t.length))
                ) {
                  if (qi(o)) return !1;
                  l = !0;
                }
              } else if (8 & o) {
                if (null === r || !iD(e, r, f, n)) {
                  if (qi(o)) return !1;
                  l = !0;
                }
              } else {
                const m = t[++c],
                  _ = sD(f, r, oh(e), n);
                if (-1 === _) {
                  if (qi(o)) return !1;
                  l = !0;
                  continue;
                }
                if ("" !== m) {
                  let C;
                  if (
                    ((C = _ > s ? "" : r[_ + 1].toLowerCase()),
                    2 & o && m !== C)
                  ) {
                    if (qi(o)) return !1;
                    l = !0;
                  }
                }
              }
          } else {
            if (!l && !qi(o) && !qi(f)) return !1;
            if (l && qi(f)) continue;
            ((l = !1), (o = f | (1 & o)));
          }
        }
        return qi(o) || l;
      }
      function qi(e) {
        return !(1 & e);
      }
      function sD(e, t, n, o) {
        if (null === t) return -1;
        let r = 0;
        if (o || !n) {
          let s = !1;
          for (; r < t.length; ) {
            const l = t[r];
            if (l === e) return r;
            if (3 === l || 6 === l) s = !0;
            else {
              if (1 === l || 2 === l) {
                let c = t[++r];
                for (; "string" == typeof c; ) c = t[++r];
                continue;
              }
              if (4 === l) break;
              if (0 === l) {
                r += 4;
                continue;
              }
            }
            r += s ? 1 : 2;
          }
          return -1;
        }
        return (function uD(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const o = e[n];
              if ("number" == typeof o) return -1;
              if (o === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function mv(e, t, n = !1) {
        for (let o = 0; o < t.length; o++) if (rD(e, t[o], n)) return !0;
        return !1;
      }
      function cD(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const o = t[n];
          if (e.length === o.length) {
            for (let r = 0; r < e.length; r++) if (e[r] !== o[r]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function gv(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function dD(e) {
        let t = e[0],
          n = 1,
          o = 2,
          r = "",
          s = !1;
        for (; n < e.length; ) {
          let l = e[n];
          if ("string" == typeof l)
            if (2 & o) {
              const c = e[++n];
              r += "[" + l + (c.length > 0 ? '="' + c + '"' : "") + "]";
            } else 8 & o ? (r += "." + l) : 4 & o && (r += " " + l);
          else
            ("" !== r && !qi(l) && ((t += gv(s, r)), (r = "")),
              (o = l),
              (s = s || !qi(o)));
          n++;
        }
        return ("" !== r && (t += gv(s, r)), t);
      }
      const xe = {};
      function sh(e, t) {
        return e.createComment(
          (function sv(e) {
            return e.replace($I, (t) => t.replace(zI, "\u200b$1\u200b"));
          })(t),
        );
      }
      function _d(e, t, n) {
        return e.createElement(t, n);
      }
      function ls(e, t, n, o, r) {
        e.insertBefore(t, n, o, r);
      }
      function vv(e, t, n) {
        e.appendChild(t, n);
      }
      function yv(e, t, n, o, r) {
        null !== o ? ls(e, t, n, o, r) : vv(e, t, n);
      }
      function Cv(e, t, n) {
        const { mergedAttrs: o, classes: r, styles: s } = n;
        (null !== o &&
          (function Xf(e, t, n) {
            let o = 0;
            for (; o < n.length; ) {
              const r = n[o];
              if ("number" == typeof r) {
                if (0 !== r) break;
                o++;
                const s = n[o++],
                  l = n[o++],
                  c = n[o++];
                e.setAttribute(t, l, c, s);
              } else {
                const s = r,
                  l = n[++o];
                (Cc(s) ? e.setProperty(t, s, l) : e.setAttribute(t, s, l), o++);
              }
            }
          })(e, t, o),
          null !== r &&
            (function mD(e, t, n) {
              "" === n
                ? e.removeAttribute(t, "class")
                : e.setAttribute(t, "class", n);
            })(e, t, r),
          null !== s &&
            (function hD(e, t, n) {
              e.setAttribute(t, "style", n);
            })(e, t, s));
      }
      function ah(e, t, n, o, r, s, l, c, f, m, _) {
        const C = pe + o,
          w = C + r,
          I = (function gD(e, t) {
            const n = [];
            for (let o = 0; o < t; o++) n.push(o < e ? null : xe);
            return n;
          })(C, w),
          R = "function" == typeof m ? m() : m;
        return (I[z] = {
          type: e,
          blueprint: I,
          template: n,
          queries: null,
          viewQuery: c,
          declTNode: t,
          data: I.slice().fill(null, C),
          bindingStartIndex: C,
          expandoStartIndex: w,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof s ? s() : s,
          pipeRegistry: "function" == typeof l ? l() : l,
          firstChild: null,
          schemas: f,
          consts: R,
          incompleteFirstPass: !1,
          ssrId: _,
        });
      }
      function vd(e, t, n, o, r, s, l, c, f, m, _) {
        const C = t.blueprint.slice();
        return (
          (C[lt] = r),
          (C[_e] = 1228 | o),
          (null !== m || (e && 2048 & e[_e])) && (C[_e] |= 2048),
          qu(C),
          (C[Nt] = C[ir] = e),
          (C[nt] = n),
          (C[ui] = l || (e && e[ui])),
          (C[ve] = c || (e && e[ve])),
          (C[it] = f || (e && e[it]) || null),
          (C[sn] = s),
          (C[Vr] = (function nM() {
            return tM++;
          })()),
          (C[Cn] = _),
          (C[ks] = m),
          (C[ht] = 2 == t.type ? e[ht] : C),
          C
        );
      }
      function lh(e) {
        let t = 16;
        return (e.signals ? (t = 4096) : e.onPush && (t = 64), t);
      }
      function Ql(e, t, n, o) {
        if (0 === n) return -1;
        const r = t.length;
        for (let s = 0; s < n; s++)
          (t.push(o), e.blueprint.push(o), e.data.push(null));
        return r;
      }
      function uh(e, t) {
        return (e[Oo] ? (e[As][xn] = t) : (e[Oo] = t), (e[As] = t), t);
      }
      function Mv(e = 1) {
        Iv(be(), j(), gn() + e, !1);
      }
      function Iv(e, t, n, o) {
        if (!o)
          if (3 & ~t[_e]) {
            const s = e.preOrderHooks;
            null !== s && Vs(t, s, 0, n);
          } else {
            const s = e.preOrderCheckHooks;
            null !== s && Bs(t, s, n);
          }
        Vo(n);
      }
      var yd = (function (e) {
        return (
          (e[(e.None = 0)] = "None"),
          (e[(e.SignalBased = 1)] = "SignalBased"),
          (e[(e.HasDecoratorInputTransform = 2)] =
            "HasDecoratorInputTransform"),
          e
        );
      })(yd || {});
      function ch(e, t, n, o) {
        const r = ie(null);
        try {
          const [s, l, c] = e.inputs[n];
          let f = null;
          (!!(l & yd.SignalBased) && (f = t[s][Se]),
            null !== f && void 0 !== f.transformFn
              ? (o = f.transformFn(o))
              : null !== c && (o = c.call(t, o)),
            null !== e.setInput ? e.setInput(t, f, o, n, s) : Wu(t, f, s, o));
        } finally {
          ie(r);
        }
      }
      function Dv(e, t, n, o, r) {
        const s = gn(),
          l = 2 & o;
        try {
          (Vo(-1),
            l && t.length > pe && Iv(e, t, pe, !1),
            ot(l ? 2 : 0, r),
            n(o, r));
        } finally {
          (Vo(s), ot(l ? 3 : 1, r));
        }
      }
      function bd(e, t, n) {
        ((function ID(e, t, n) {
          const o = n.directiveStart,
            r = n.directiveEnd;
          (Ci(n) &&
            (function _D(e, t, n) {
              const o = Rn(t, e),
                r = (function Ev(e) {
                  const t = e.tView;
                  return null === t || t.incompleteFirstPass
                    ? (e.tView = ah(
                        1,
                        null,
                        e.template,
                        e.decls,
                        e.vars,
                        e.directiveDefs,
                        e.pipeDefs,
                        e.viewQuery,
                        e.schemas,
                        e.consts,
                        e.id,
                      ))
                    : t;
                })(n),
                s = e[ui].rendererFactory,
                l = uh(
                  e,
                  vd(
                    e,
                    r,
                    null,
                    lh(n),
                    o,
                    t,
                    null,
                    s.createRenderer(o, n),
                    null,
                    null,
                    null,
                  ),
                );
              e[t.index] = l;
            })(t, n, e.data[o + n.componentOffset]),
            e.firstCreatePass || Us(n, t));
          const s = n.initialInputs;
          for (let l = o; l < r; l++) {
            const c = e.data[l],
              f = Wr(t, e, l, n);
            (hi(f, t),
              null !== s && SD(0, l - o, f, c, 0, s),
              ii(c) && (Ln(n.index, t)[nt] = Wr(t, e, l, n)));
          }
        })(e, t, n),
          !(64 & ~n.flags) &&
            (function DD(e, t, n) {
              const o = n.directiveStart,
                r = n.directiveEnd,
                s = n.index,
                l = (function Pf() {
                  return Ee.lFrame.currentDirectiveIndex;
                })();
              try {
                Vo(s);
                for (let c = o; c < r; c++) {
                  const f = e.data[c],
                    m = t[c];
                  (dl(c),
                    (null !== f.hostBindings ||
                      0 !== f.hostVars ||
                      null !== f.hostAttrs) &&
                      TD(f, m));
                }
              } finally {
                (Vo(-1), dl(l));
              }
            })(e, t, n));
      }
      function dh(e, t, n = Rn) {
        const o = t.localNames;
        if (null !== o) {
          let r = t.index + 1;
          for (let s = 0; s < o.length; s += 2) {
            const l = o[s + 1],
              c = -1 === l ? n(t, e) : e[l];
            e[r++] = c;
          }
        }
      }
      let gh,
        Tv = () => null;
      function gi(e, t, n, o, r, s, l, c) {
        if (c || !mh(t, e, n, o, r)) {
          if (3 & t.type) {
            const f = Rn(t, n);
            ((o = (function ED(e) {
              return "class" === e
                ? "className"
                : "for" === e
                  ? "htmlFor"
                  : "formaction" === e
                    ? "formAction"
                    : "innerHtml" === e
                      ? "innerHTML"
                      : "readonly" === e
                        ? "readOnly"
                        : "tabindex" === e
                          ? "tabIndex"
                          : e;
            })(o)),
              (r = null != l ? l(r, t.value || "", o) : r),
              s.setProperty(f, o, r));
          }
        } else
          Ci(t) &&
            (function MD(e, t) {
              const n = Ln(t, e);
              16 & n[_e] || (n[_e] |= 64);
            })(n, t.index);
      }
      function TD(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function fh(e, t) {
        const n = e.directiveRegistry;
        let o = null;
        if (n)
          for (let r = 0; r < n.length; r++) {
            const s = n[r];
            mv(t, s.selectors, !1) &&
              ((o ??= []), ii(s) ? o.unshift(s) : o.push(s));
          }
        return o;
      }
      function bo(e, t, n, o, r, s) {
        const l = Rn(e, t);
        !(function ph(e, t, n, o, r, s, l) {
          if (null == s) e.removeAttribute(t, r, n);
          else {
            const c = null == l ? ye(s) : l(s, o || "", r);
            e.setAttribute(t, r, c, n);
          }
        })(t[ve], l, s, e.value, n, o, r);
      }
      function SD(e, t, n, o, r, s) {
        const l = s[t];
        if (null !== l)
          for (let c = 0; c < l.length; c += 2) ch(o, n, l[c], l[c + 1]);
      }
      function wv(e, t, n) {
        return (
          (null === e || ii(e)) &&
            (n = (function Ja(e) {
              for (; Array.isArray(e); ) {
                if ("object" == typeof e[Bu]) return e;
                e = e[lt];
              }
              return null;
            })(n[t.index])),
          n[ve]
        );
      }
      function mh(e, t, n, o, r) {
        const s = e.inputs?.[o],
          l = e.hostDirectiveInputs?.[o];
        let c = !1;
        if (l)
          for (let f = 0; f < l.length; f += 2) {
            const m = l[f];
            (ch(t.data[m], n[m], l[f + 1], r), (c = !0));
          }
        if (s) for (const f of s) (ch(t.data[f], n[f], o, r), (c = !0));
        return c;
      }
      function wD(e, t) {
        const n = Ln(t, e),
          o = n[z];
        !(function AD(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(o, n);
        const r = n[lt];
        (null !== r && null === n[Cn] && (n[Cn] = R_(r, n[it])),
          ot(18),
          Cd(o, n, n[nt]),
          ot(19, n[nt]));
      }
      function Cd(e, t, n) {
        hl(t);
        try {
          const o = e.viewQuery;
          null !== o && Zp(1, o, n);
          const r = e.template;
          (null !== r && Dv(e, t, r, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            t[$i]?.finishViewCreation(e),
            e.staticContentQueries && U_(e, t),
            e.staticViewQueries && Zp(2, e.viewQuery, n));
          const s = e.components;
          null !== s &&
            (function kD(e, t) {
              for (let n = 0; n < t.length; n++) wD(e, t[n]);
            })(t, s);
        } catch (o) {
          throw (
            e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            o
          );
        } finally {
          ((t[_e] &= -5), ml());
        }
      }
      function da(e, t, n, o) {
        const r = ie(null);
        try {
          const s = t.tView,
            f = vd(
              e,
              s,
              n,
              4096 & e[_e] ? 4096 : 16,
              null,
              t,
              null,
              null,
              o?.injector ?? null,
              o?.embeddedViewInjector ?? null,
              o?.dehydratedView ?? null,
            );
          f[Fo] = e[t.index];
          const _ = e[$i];
          return (
            null !== _ && (f[$i] = _.createEmbeddedView(s)),
            Cd(s, f, n),
            f
          );
        } finally {
          ie(r);
        }
      }
      function us(e, t) {
        return !t || null === t.firstChild || Rl(e);
      }
      function _h(e, t) {
        return gh(e, t);
      }
      var Ed = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })(Ed || {});
      function vr(e) {
        return !(32 & ~e.flags);
      }
      function fa(e, t, n, o, r) {
        if (null != o) {
          let s,
            l = !1;
          Jt(o) ? (s = o) : Gt(o) && ((l = !0), (o = o[lt]));
          const c = Ye(o);
          (0 === e && null !== n
            ? null == r
              ? vv(t, n, c)
              : ls(t, n, c, r || null, !0)
            : 1 === e && null !== n
              ? ls(t, n, c, r || null, !0)
              : 2 === e
                ? (function Zl(e, t, n) {
                    e.removeChild(null, t, n);
                  })(t, c, l)
                : 3 === e && t.destroyNode(c),
            null != s &&
              (function PD(e, t, n, o, r) {
                const s = n[Ri];
                s !== Ye(n) && fa(t, e, o, s, r);
                for (let c = Rt; c < n.length; c++) {
                  const f = n[c];
                  Id(f[z], f, e, t, o, s);
                }
              })(t, e, s, n, r));
        }
      }
      function kv(e, t) {
        (t[ui].changeDetectionScheduler?.notify(9),
          Id(e, t, t[ve], 2, null, null));
      }
      function vh(e, t) {
        const n = e[ar],
          o = n.indexOf(t);
        n.splice(o, 1);
      }
      function Kl(e, t) {
        if (Zi(t)) return;
        const n = t[ve];
        (n.destroyNode && Id(e, t, n, 3, null, null),
          (function RD(e) {
            let t = e[Oo];
            if (!t) return yh(e[z], e);
            for (; t; ) {
              let n = null;
              if (Gt(t)) n = t[Oo];
              else {
                const o = t[Rt];
                o && (n = o);
              }
              if (!n) {
                for (; t && !t[xn] && t !== e; )
                  (Gt(t) && yh(t[z], t), (t = t[Nt]));
                (null === t && (t = e), Gt(t) && yh(t[z], t), (n = t && t[xn]));
              }
              t = n;
            }
          })(t));
      }
      function yh(e, t) {
        if (Zi(t)) return;
        const n = ie(null);
        try {
          ((t[_e] &= -129),
            (t[_e] |= 256),
            t[Nn] && Y(t[Nn]),
            (function OD(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let o = 0; o < n.length; o += 2) {
                  const r = t[n[o]];
                  if (!(r instanceof Hr)) {
                    const s = n[o + 1];
                    if (Array.isArray(s))
                      for (let l = 0; l < s.length; l += 2) {
                        const c = r[s[l]],
                          f = s[l + 1];
                        ot(4, c, f);
                        try {
                          f.call(c);
                        } finally {
                          ot(5, c, f);
                        }
                      }
                    else {
                      ot(4, r, s);
                      try {
                        s.call(r);
                      } finally {
                        ot(5, r, s);
                      }
                    }
                  }
                }
            })(e, t),
            (function LD(e, t) {
              const n = e.cleanup,
                o = t[Br];
              if (null !== n)
                for (let l = 0; l < n.length - 1; l += 2)
                  if ("string" == typeof n[l]) {
                    const c = n[l + 3];
                    (c >= 0 ? o[c]() : o[-c].unsubscribe(), (l += 2));
                  } else n[l].call(o[n[l + 1]]);
              null !== o && (t[Br] = null);
              const r = t[zi];
              if (null !== r) {
                t[zi] = null;
                for (let l = 0; l < r.length; l++) (0, r[l])();
              }
              const s = t[Wi];
              if (null !== s) {
                t[Wi] = null;
                for (const l of s) l.destroy();
              }
            })(e, t),
            1 === t[z].type && t[ve].destroy());
          const o = t[Fo];
          if (null !== o && Jt(t[Nt])) {
            o !== t[Nt] && vh(o, t);
            const r = t[$i];
            null !== r && r.detachView(e);
          }
          mp(t);
        } finally {
          ie(n);
        }
      }
      function bh(e, t, n) {
        return (function xv(e, t, n) {
          let o = t;
          for (; null !== o && 168 & o.type; ) o = (t = o).parent;
          if (null === o) return n[lt];
          if (Ci(o)) {
            const { encapsulation: r } =
              e.data[o.directiveStart + o.componentOffset];
            if (r === Ho.None || r === Ho.Emulated) return null;
          }
          return Rn(o, n);
        })(e, t.parent, n);
      }
      function Nv(e, t, n) {
        return Lv(e, t, n);
      }
      let Ch,
        Lv = function Rv(e, t, n) {
          return 40 & e.type ? Rn(e, n) : null;
        };
      function Md(e, t, n, o) {
        const r = bh(e, o, t),
          s = t[ve],
          c = Nv(o.parent || t[sn], o, t);
        if (null != r)
          if (Array.isArray(n))
            for (let f = 0; f < n.length; f++) yv(s, r, n[f], c, !1);
          else yv(s, r, n, c, !1);
        void 0 !== Ch && Ch(s, o, t, n, r);
      }
      function cs(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Rn(t, e);
          if (4 & n) return Eh(-1, e[t.index]);
          if (8 & n) {
            const o = t.child;
            if (null !== o) return cs(e, o);
            {
              const r = e[t.index];
              return Jt(r) ? Eh(-1, r) : Ye(r);
            }
          }
          if (128 & n) return cs(e, t.next);
          if (32 & n) return _h(t, e)() || Ye(e[t.index]);
          {
            const o = Fv(e, t);
            return null !== o
              ? Array.isArray(o)
                ? o[0]
                : cs(Qi(e[ht]), o)
              : cs(e, t.next);
          }
        }
        return null;
      }
      function Fv(e, t) {
        return null !== t ? e[ht][sn].projection[t.projection] : null;
      }
      function Eh(e, t) {
        const n = Rt + e + 1;
        if (n < t.length) {
          const o = t[n],
            r = o[z].firstChild;
          if (null !== r) return cs(o, r);
        }
        return t[Ri];
      }
      function Mh(e, t, n, o, r, s, l) {
        for (; null != n; ) {
          if (128 === n.type) {
            n = n.next;
            continue;
          }
          const c = o[n.index],
            f = n.type;
          if ((l && 0 === t && (c && hi(Ye(c), o), (n.flags |= 2)), !vr(n)))
            if (8 & f) (Mh(e, t, n.child, o, r, s, !1), fa(t, e, r, c, s));
            else if (32 & f) {
              const m = _h(n, o);
              let _;
              for (; (_ = m()); ) fa(t, e, r, _, s);
              fa(t, e, r, c, s);
            } else 16 & f ? Pv(e, t, o, n, r, s) : fa(t, e, r, c, s);
          n = l ? n.projectionNext : n.next;
        }
      }
      function Id(e, t, n, o, r, s) {
        Mh(n, o, e.firstChild, t, r, s, !1);
      }
      function Pv(e, t, n, o, r, s) {
        const l = n[ht],
          f = l[sn].projection[o.projection];
        if (Array.isArray(f))
          for (let m = 0; m < f.length; m++) fa(t, e, r, f[m], s);
        else {
          let m = f;
          const _ = l[Nt];
          (Rl(o) && (m.flags |= 128), Mh(e, t, m, _, r, s, !0));
        }
      }
      function pa(e, t, n, o, r = !1) {
        for (; null !== n; ) {
          if (128 === n.type) {
            n = r ? n.projectionNext : n.next;
            continue;
          }
          const s = t[n.index];
          (null !== s && o.push(Ye(s)), Jt(s) && Ih(s, o));
          const l = n.type;
          if (8 & l) pa(e, t, n.child, o);
          else if (32 & l) {
            const c = _h(n, t);
            let f;
            for (; (f = c()); ) o.push(f);
          } else if (16 & l) {
            const c = Fv(t, n);
            if (Array.isArray(c)) o.push(...c);
            else {
              const f = Qi(t[ht]);
              pa(f[z], f, c, o, !0);
            }
          }
          n = r ? n.projectionNext : n.next;
        }
        return o;
      }
      function Ih(e, t) {
        for (let n = Rt; n < e.length; n++) {
          const o = e[n],
            r = o[z].firstChild;
          null !== r && pa(o[z], o, r, t);
        }
        e[Ri] !== e[lt] && t.push(e[Ri]);
      }
      function jv(e) {
        if (null !== e[25]) {
          for (const t of e[25]) t.impl.addSequence(t);
          e[25].length = 0;
        }
      }
      let Bv = [];
      const UD = {
          ...Be,
          consumerIsAlwaysLive: !0,
          kind: "template",
          consumerMarkedDirty: (e) => {
            ur(e.lView);
          },
          consumerOnSignalRead() {
            this.lView[Nn] = this;
          },
        },
        $D = {
          ...Be,
          consumerIsAlwaysLive: !0,
          kind: "template",
          consumerMarkedDirty: (e) => {
            let t = Qi(e.lView);
            for (; t && !Vv(t[z]); ) t = Qi(t);
            t && tl(t);
          },
          consumerOnSignalRead() {
            this.lView[Nn] = this;
          },
        };
      function Vv(e) {
        return 2 !== e.type;
      }
      function Gv(e) {
        if (null === e[Wi]) return;
        let t = !0;
        for (; t; ) {
          let n = !1;
          for (const o of e[Wi])
            o.dirty &&
              ((n = !0),
              null === o.zone || Zone.current === o.zone
                ? o.run()
                : o.zone.run(() => o.run()));
          t = n && !!(8192 & e[_e]);
        }
      }
      function Dd(e, t = !0, n = 0) {
        const r = e[ui].rendererFactory;
        r.begin?.();
        try {
          !(function WD(e, t) {
            const n = sc();
            try {
              (Ps(!0), Dh(e, t));
              let o = 0;
              for (; Gr(e); ) {
                if (100 === o) throw new te(103, !1);
                (o++, Dh(e, 1));
              }
            } finally {
              Ps(n);
            }
          })(e, n);
        } catch (l) {
          throw (
            t &&
              (function hh(e, t) {
                const n = e[it],
                  o = n ? n.get(Mi, null) : null;
                o && o.handleError(t);
              })(e, l),
            l
          );
        } finally {
          r.end?.();
        }
      }
      function Hv(e, t, n, o) {
        if (Zi(t)) return;
        const r = t[_e];
        hl(t);
        let c = !0,
          f = null,
          m = null;
        Vv(e)
          ? ((m = (function BD(e) {
              return (
                e[Nn] ??
                (function VD(e) {
                  const t = Bv.pop() ?? Object.create(UD);
                  return ((t.lView = e), t);
                })(e)
              );
            })(t)),
            (f = Je(m)))
          : null === Ce()
            ? ((c = !1),
              (m = (function HD(e) {
                const t = e[Nn] ?? Object.create($D);
                return ((t.lView = e), t);
              })(t)),
              (f = Je(m)))
            : t[Nn] && (Y(t[Nn]), (t[Nn] = null));
        try {
          (qu(t),
            (function ac(e) {
              return (Ee.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && Dv(e, t, n, 2, o));
          const _ = !(3 & ~r);
          if (_) {
            const I = e.preOrderCheckHooks;
            null !== I && Bs(t, I, null);
          } else {
            const I = e.preOrderHooks;
            (null !== I && Vs(t, I, 0, null), _l(t, 0));
          }
          if (
            ((function XD(e) {
              for (let t = Kg(e); null !== t; t = Yg(t)) {
                if (!(2 & t[_e])) continue;
                const n = t[ar];
                for (let o = 0; o < n.length; o++) tl(n[o]);
              }
            })(t),
            Gv(t),
            $v(t, 0),
            null !== e.contentQueries && U_(e, t),
            _)
          ) {
            const I = e.contentCheckHooks;
            null !== I && Bs(t, I);
          } else {
            const I = e.contentHooks;
            (null !== I && Vs(t, I, 1), _l(t, 1));
          }
          !(function QD(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let o = 0; o < n.length; o++) {
                  const r = n[o];
                  if (r < 0) Vo(~r);
                  else {
                    const s = r,
                      l = n[++o],
                      c = n[++o];
                    Ff(l, s);
                    const f = t[s];
                    (ot(24, f), c(2, f), ot(25, f));
                  }
                }
              } finally {
                Vo(-1);
              }
          })(e, t);
          const C = e.components;
          null !== C && Wv(t, C, 0);
          const w = e.viewQuery;
          if ((null !== w && Zp(2, w, o), _)) {
            const I = e.viewCheckHooks;
            null !== I && Bs(t, I);
          } else {
            const I = e.viewHooks;
            (null !== I && Vs(t, I, 2), _l(t, 2));
          }
          if ((!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[22])) {
            for (const I of t[22]) I();
            t[22] = null;
          }
          (jv(t), (t[_e] &= -73));
        } catch (_) {
          throw (ur(t), _);
        } finally {
          (null !== m &&
            (Fe(m, f),
            c &&
              (function GD(e) {
                e.lView[Nn] !== e && ((e.lView = null), Bv.push(e));
              })(m)),
            ml());
        }
      }
      function $v(e, t) {
        for (let n = Kg(e); null !== n; n = Yg(n))
          for (let o = Rt; o < n.length; o++) zv(n[o], t);
      }
      function ZD(e, t, n) {
        ot(18);
        const o = Ln(t, e);
        (zv(o, n), ot(19, o[nt]));
      }
      function zv(e, t) {
        el(e) && Dh(e, t);
      }
      function Dh(e, t) {
        const o = e[z],
          r = e[_e],
          s = e[Nn];
        let l = !!(0 === t && 16 & r);
        if (
          ((l ||= !!(64 & r && 0 === t)),
          (l ||= !!(1024 & r)),
          (l ||= !(!s?.dirty || !_t(s))),
          (l ||= !1),
          s && (s.dirty = !1),
          (e[_e] &= -9217),
          l)
        )
          Hv(o, e, o.template, e[nt]);
        else if (8192 & r) {
          (Gv(e), $v(e, 1));
          const c = o.components;
          (null !== c && Wv(e, c, 1), jv(e));
        }
      }
      function Wv(e, t, n) {
        for (let o = 0; o < t.length; o++) ZD(e, t[o], n);
      }
      function Yl(e, t) {
        const n = sc() ? 64 : 1088;
        for (e[ui].changeDetectionScheduler?.notify(t); e; ) {
          e[_e] |= n;
          const o = Qi(e);
          if (Xi(e) && !o) return e;
          e = o;
        }
        return null;
      }
      function Xv(e, t, n, o) {
        return [e, !0, 0, t, null, o, null, n, null, null];
      }
      function Zv(e, t) {
        const n = Rt + t;
        if (n < e.length) return e[n];
      }
      function ha(e, t, n, o = !0) {
        const r = t[z];
        if (
          ((function KD(e, t, n, o) {
            const r = Rt + o,
              s = n.length;
            (o > 0 && (n[r - 1][xn] = t),
              o < s - Rt
                ? ((t[xn] = n[r]), Es(n, Rt + o, t))
                : (n.push(t), (t[xn] = null)),
              (t[Nt] = n));
            const l = t[Fo];
            null !== l && n !== l && Qv(l, t);
            const c = t[$i];
            (null !== c && c.insertView(e), nl(t), (t[_e] |= 128));
          })(r, t, e, n),
          o)
        ) {
          const l = Eh(n, e),
            c = t[ve],
            f = c.parentNode(e[Ri]);
          null !== f &&
            (function ND(e, t, n, o, r, s) {
              ((o[lt] = r), (o[sn] = t), Id(e, o, n, 1, r, s));
            })(r, e[sn], c, t, f, l);
        }
        const s = t[Cn];
        null !== s && null !== s.firstChild && (s.firstChild = null);
      }
      function Th(e, t) {
        const n = Jl(e, t);
        return (void 0 !== n && Kl(n[z], n), n);
      }
      function Jl(e, t) {
        if (e.length <= Rt) return;
        const n = Rt + t,
          o = e[n];
        if (o) {
          const r = o[Fo];
          (null !== r && r !== e && vh(r, o), t > 0 && (e[n - 1][xn] = o[xn]));
          const s = Nr(e, Rt + t);
          !(function Av(e, t) {
            (kv(e, t), (t[lt] = null), (t[sn] = null));
          })(o[z], o);
          const l = s[$i];
          (null !== l && l.detachView(s[z]),
            (o[Nt] = null),
            (o[xn] = null),
            (o[_e] &= -129));
        }
        return o;
      }
      function Qv(e, t) {
        const n = e[ar],
          o = t[Nt];
        ((Gt(o) || t[ht] !== o[Nt][ht]) && (e[_e] |= 2),
          null === n ? (e[ar] = [t]) : n.push(t));
      }
      let ql = class {
          _lView;
          _cdRefInjectingView;
          notifyErrorHandler;
          _appRef = null;
          _attachedToViewContainer = !1;
          get rootNodes() {
            const t = this._lView,
              n = t[z];
            return pa(n, t, n.firstChild, []);
          }
          constructor(t, n, o = !0) {
            ((this._lView = t),
              (this._cdRefInjectingView = n),
              (this.notifyErrorHandler = o));
          }
          get context() {
            return this._lView[nt];
          }
          set context(t) {
            this._lView[nt] = t;
          }
          get destroyed() {
            return Zi(this._lView);
          }
          destroy() {
            if (this._appRef) this._appRef.detachView(this);
            else if (this._attachedToViewContainer) {
              const t = this._lView[Nt];
              if (Jt(t)) {
                const n = t[8],
                  o = n ? n.indexOf(this) : -1;
                o > -1 && (Jl(t, o), Nr(n, o));
              }
              this._attachedToViewContainer = !1;
            }
            Kl(this._lView[z], this._lView);
          }
          onDestroy(t) {
            Os(this._lView, t);
          }
          markForCheck() {
            Yl(this._cdRefInjectingView || this._lView, 4);
          }
          detach() {
            this._lView[_e] &= -129;
          }
          reattach() {
            (nl(this._lView), (this._lView[_e] |= 128));
          }
          detectChanges() {
            ((this._lView[_e] |= 1024),
              Dd(this._lView, this.notifyErrorHandler));
          }
          checkNoChanges() {}
          attachToViewContainerRef() {
            if (this._appRef) throw new te(902, !1);
            this._attachedToViewContainer = !0;
          }
          detachFromAppRef() {
            this._appRef = null;
            const t = Xi(this._lView),
              n = this._lView[Fo];
            (null !== n && !t && vh(n, this._lView),
              kv(this._lView[z], this._lView));
          }
          attachToAppRef(t) {
            if (this._attachedToViewContainer) throw new te(902, !1);
            this._appRef = t;
            const n = Xi(this._lView),
              o = this._lView[Fo];
            (null !== o && !n && Qv(o, this._lView), nl(this._lView));
          }
        },
        eu = (() =>
          class e {
            static __NG_ELEMENT_ID__ = qD;
          })();
      const YD = eu,
        JD = class extends YD {
          _declarationLView;
          _declarationTContainer;
          elementRef;
          constructor(t, n, o) {
            (super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = o));
          }
          get ssrId() {
            return this._declarationTContainer.tView?.ssrId || null;
          }
          createEmbeddedView(t, n) {
            return this.createEmbeddedViewImpl(t, n);
          }
          createEmbeddedViewImpl(t, n, o) {
            const r = da(
              this._declarationLView,
              this._declarationTContainer,
              t,
              { embeddedViewInjector: n, dehydratedView: o },
            );
            return new ql(r);
          }
        };
      function qD() {
        return Td(Pe(), j());
      }
      function Td(e, t) {
        return 4 & e.type ? new JD(t, e, is(e, t)) : null;
      }
      function ma(e, t, n, o, r) {
        let s = e.data[t];
        if (null === s)
          ((s = (function kh(e, t, n, o, r) {
            const s = ic(),
              l = ul(),
              f = (e.data[t] = (function uT(e, t, n, o, r, s) {
                let l = t ? t.injectorIndex : -1,
                  c = 0;
                return (
                  Bo() && (c |= 128),
                  {
                    type: n,
                    index: o,
                    insertBeforeIndex: null,
                    injectorIndex: l,
                    directiveStart: -1,
                    directiveEnd: -1,
                    directiveStylingLast: -1,
                    componentOffset: -1,
                    propertyBindings: null,
                    flags: c,
                    providerIndexes: 0,
                    value: r,
                    attrs: s,
                    mergedAttrs: null,
                    localNames: null,
                    initialInputs: null,
                    inputs: null,
                    hostDirectiveInputs: null,
                    outputs: null,
                    hostDirectiveOutputs: null,
                    directiveToIndex: null,
                    tView: null,
                    next: null,
                    prev: null,
                    projectionNext: null,
                    child: null,
                    parent: t,
                    projection: null,
                    styles: null,
                    stylesWithoutHost: null,
                    residualStyles: void 0,
                    classes: null,
                    classesWithoutHost: null,
                    residualClasses: void 0,
                    classBindings: 0,
                    styleBindings: 0,
                  }
                );
              })(0, l ? s : s && s.parent, n, t, o, r));
            return (
              (function lT(e, t, n, o) {
                (null === e.firstChild && (e.firstChild = t),
                  null !== n &&
                    (o
                      ? null == n.child && null !== t.parent && (n.child = t)
                      : null === n.next && ((n.next = t), (t.prev = n))));
              })(e, f, s, l),
              f
            );
          })(e, t, n, o, r)),
            (function Of() {
              return Ee.lFrame.inI18n;
            })() && (s.flags |= 32));
        else if (64 & s.type) {
          ((s.type = n), (s.value = o), (s.attrs = r));
          const l = (function Ur() {
            const e = Ee.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          s.injectorIndex = null === l ? -1 : l.injectorIndex;
        }
        return (Ei(s, !0), s);
      }
      let _y = () => null;
      function _a(e, t) {
        return _y(e, t);
      }
      let QT = class {},
        vy = class {};
      class KT {
        resolveComponentFactory(t) {
          throw Error(`No component factory found for ${ct(t)}.`);
        }
      }
      let Rd = class {
        static NULL = new KT();
      };
      class jh {}
      let YT = (() =>
          class e {
            destroyNode = null;
            static __NG_ELEMENT_ID__ = () =>
              (function JT() {
                const e = j(),
                  n = Ln(Pe().index, e);
                return (Gt(n) ? n : e)[ve];
              })();
          })(),
        qT = (() => {
          class e {
            static ɵprov = x({
              token: e,
              providedIn: "root",
              factory: () => null,
            });
          }
          return e;
        })();
      function fs(e) {
        return !!mn(e);
      }
      const Vh = {};
      class va {
        injector;
        parentInjector;
        constructor(t, n) {
          ((this.injector = t), (this.parentInjector = n));
        }
        get(t, n, o) {
          o = Ar(o);
          const r = this.injector.get(t, Vh, o);
          return r !== Vh || n === Vh ? r : this.parentInjector.get(t, n, o);
        }
      }
      function Gh(e, t, n) {
        let o = n ? e.styles : null,
          r = n ? e.classes : null,
          s = 0;
        if (null !== t)
          for (let l = 0; l < t.length; l++) {
            const c = t[l];
            "number" == typeof c
              ? (s = c)
              : 1 == s
                ? (r = ei(r, c))
                : 2 == s && (o = ei(o, c + ": " + t[++l] + ";"));
          }
        (n ? (e.styles = o) : (e.stylesWithoutHost = o),
          n ? (e.classes = r) : (e.classesWithoutHost = r));
      }
      function ya(e, t = W.Default) {
        const n = j();
        return null === n ? hn(e, t) : wc(Pe(), n, ge(e), t);
      }
      function by() {
        throw new Error("invalid");
      }
      function Uh(e, t, n, o, r) {
        const s = null === o ? null : { "": -1 },
          l = r(e, n);
        if (null !== l) {
          let c,
            f = null,
            m = null;
          const _ = (function o1(e) {
            let t = null,
              n = !1;
            for (let l = 0; l < e.length; l++) {
              const c = e[l];
              if (
                (0 === l && ii(c) && (t = c), null !== c.findHostDirectiveDefs)
              ) {
                n = !0;
                break;
              }
            }
            if (!n) return null;
            let o = null,
              r = null,
              s = null;
            for (const l of e)
              (null !== l.findHostDirectiveDefs &&
                ((o ??= []),
                (r ??= new Map()),
                (s ??= new Map()),
                r1(l, o, s, r)),
                l === t && ((o ??= []), o.push(l)));
            return null !== o
              ? (o.push(...(null === t ? e : e.slice(1))), [o, r, s])
              : null;
          })(l);
          (null === _ ? (c = l) : ([c, f, m] = _),
            (function a1(e, t, n, o, r, s, l) {
              const c = o.length;
              let f = !1;
              for (let w = 0; w < c; w++) {
                const I = o[w];
                (!f && ii(I) && ((f = !0), s1(e, n, w)),
                  Ml(Us(n, t), e, I.type));
              }
              !(function p1(e, t, n) {
                ((e.flags |= 1),
                  (e.directiveStart = t),
                  (e.directiveEnd = t + n),
                  (e.providerIndexes = t));
              })(n, e.data.length, c);
              for (let w = 0; w < c; w++) {
                const I = o[w];
                I.providersResolver && I.providersResolver(I);
              }
              let m = !1,
                _ = !1,
                C = Ql(e, t, c, null);
              c > 0 && (n.directiveToIndex = new Map());
              for (let w = 0; w < c; w++) {
                const I = o[w];
                if (
                  ((n.mergedAttrs = fr(n.mergedAttrs, I.hostAttrs)),
                  u1(e, n, t, C, I),
                  f1(C, I, r),
                  null !== l && l.has(I))
                ) {
                  const [B, Z] = l.get(I);
                  n.directiveToIndex.set(I.type, [
                    C,
                    B + n.directiveStart,
                    Z + n.directiveStart,
                  ]);
                } else
                  (null === s || !s.has(I)) &&
                    n.directiveToIndex.set(I.type, C);
                (null !== I.contentQueries && (n.flags |= 4),
                  (null !== I.hostBindings ||
                    null !== I.hostAttrs ||
                    0 !== I.hostVars) &&
                    (n.flags |= 64));
                const R = I.type.prototype;
                (!m &&
                  (R.ngOnChanges || R.ngOnInit || R.ngDoCheck) &&
                  ((e.preOrderHooks ??= []).push(n.index), (m = !0)),
                  !_ &&
                    (R.ngOnChanges || R.ngDoCheck) &&
                    ((e.preOrderCheckHooks ??= []).push(n.index), (_ = !0)),
                  C++);
              }
              !(function l1(e, t, n) {
                for (let o = t.directiveStart; o < t.directiveEnd; o++) {
                  const r = e.data[o];
                  if (null !== n && n.has(r)) {
                    const s = n.get(r);
                    (Ey(0, t, s, o), Ey(1, t, s, o), Iy(t, o, !0));
                  } else (Cy(0, t, r, o), Cy(1, t, r, o), Iy(t, o, !1));
                }
              })(e, n, s);
            })(e, t, n, c, s, f, m));
        }
        null !== s &&
          null !== o &&
          (function i1(e, t, n) {
            const o = (e.localNames = []);
            for (let r = 0; r < t.length; r += 2) {
              const s = n[t[r + 1]];
              if (null == s) throw new te(-301, !1);
              o.push(t[r], s);
            }
          })(n, o, s);
      }
      function r1(e, t, n, o) {
        const r = t.length;
        (e.findHostDirectiveDefs(e, t, o), n.set(e, [r, t.length - 1]));
      }
      function s1(e, t, n) {
        ((t.componentOffset = n), (e.components ??= []).push(t.index));
      }
      function Cy(e, t, n, o) {
        const r = 0 === e ? n.inputs : n.outputs;
        for (const s in r)
          if (r.hasOwnProperty(s)) {
            let l;
            ((l = 0 === e ? (t.inputs ??= {}) : (t.outputs ??= {})),
              (l[s] ??= []),
              l[s].push(o),
              My(t, s));
          }
      }
      function Ey(e, t, n, o) {
        const r = 0 === e ? n.inputs : n.outputs;
        for (const s in r)
          if (r.hasOwnProperty(s)) {
            const l = r[s];
            let c;
            ((c =
              0 === e
                ? (t.hostDirectiveInputs ??= {})
                : (t.hostDirectiveOutputs ??= {})),
              (c[l] ??= []),
              c[l].push(o, s),
              My(t, l));
          }
      }
      function My(e, t) {
        "class" === t ? (e.flags |= 8) : "style" === t && (e.flags |= 16);
      }
      function Iy(e, t, n) {
        const { attrs: o, inputs: r, hostDirectiveInputs: s } = e;
        if (null === o || (!n && null === r) || (n && null === s) || oh(e))
          return ((e.initialInputs ??= []), void e.initialInputs.push(null));
        let l = null,
          c = 0;
        for (; c < o.length; ) {
          const f = o[c];
          if (0 !== f)
            if (5 !== f) {
              if ("number" == typeof f) break;
              if (!n && r.hasOwnProperty(f)) {
                const m = r[f];
                for (const _ of m)
                  if (_ === t) {
                    ((l ??= []), l.push(f, o[c + 1]));
                    break;
                  }
              } else if (n && s.hasOwnProperty(f)) {
                const m = s[f];
                for (let _ = 0; _ < m.length; _ += 2)
                  if (m[_] === t) {
                    ((l ??= []), l.push(m[_ + 1], o[c + 1]));
                    break;
                  }
              }
              c += 2;
            } else c += 2;
          else c += 4;
        }
        ((e.initialInputs ??= []), e.initialInputs.push(l));
      }
      function u1(e, t, n, o, r) {
        e.data[o] = r;
        const s = r.factory || (r.factory = Ui(r.type)),
          l = new Hr(s, ii(r), ya);
        ((e.blueprint[o] = l),
          (n[o] = l),
          (function c1(e, t, n, o, r) {
            const s = r.hostBindings;
            if (s) {
              let l = e.hostBindingOpCodes;
              null === l && (l = e.hostBindingOpCodes = []);
              const c = ~t.index;
              ((function d1(e) {
                let t = e.length;
                for (; t > 0; ) {
                  const n = e[--t];
                  if ("number" == typeof n && n < 0) return n;
                }
                return 0;
              })(l) != c && l.push(c),
                l.push(n, o, s));
            }
          })(e, t, o, Ql(e, n, r.hostVars, xe), r));
      }
      function f1(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let o = 0; o < t.exportAs.length; o++) n[t.exportAs[o]] = e;
          ii(t) && (n[""] = e);
        }
      }
      function Dy(e, t, n, o, r, s, l, c) {
        const f = t.consts,
          _ = ma(t, e, 2, o, ci(f, l));
        return (
          s && Uh(t, n, _, ci(f, c), r),
          (_.mergedAttrs = fr(_.mergedAttrs, _.attrs)),
          null !== _.attrs && Gh(_, _.attrs, !1),
          null !== _.mergedAttrs && Gh(_, _.mergedAttrs, !0),
          null !== t.queries && t.queries.elementStart(t, _),
          _
        );
      }
      function Ty(e, t) {
        (gl(e, t), Ns(t) && e.queries.elementEnd(t));
      }
      class Sy extends Rd {
        ngModule;
        constructor(t) {
          (super(), (this.ngModule = t));
        }
        resolveComponentFactory(t) {
          const n = Oe(t);
          return new cu(n, this.ngModule);
        }
      }
      class cu extends vy {
        componentDef;
        ngModule;
        selector;
        componentType;
        ngContentSelectors;
        isBoundToModule;
        cachedInputs = null;
        cachedOutputs = null;
        get inputs() {
          return (
            (this.cachedInputs ??= (function h1(e) {
              return Object.keys(e).map((t) => {
                const [n, o, r] = e[t],
                  s = {
                    propName: n,
                    templateName: t,
                    isSignal: !!(o & yd.SignalBased),
                  };
                return (r && (s.transform = r), s);
              });
            })(this.componentDef.inputs)),
            this.cachedInputs
          );
        }
        get outputs() {
          return (
            (this.cachedOutputs ??= (function m1(e) {
              return Object.keys(e).map((t) => ({
                propName: e[t],
                templateName: t,
              }));
            })(this.componentDef.outputs)),
            this.cachedOutputs
          );
        }
        constructor(t, n) {
          (super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function fD(e) {
              return e.map(dD).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors ?? []),
            (this.isBoundToModule = !!n));
        }
        create(t, n, o, r) {
          ot(22);
          const s = ie(null);
          try {
            const l = this.componentDef,
              c = o
                ? ["ng-version", "19.2.14"]
                : (function pD(e) {
                    const t = [],
                      n = [];
                    let o = 1,
                      r = 2;
                    for (; o < e.length; ) {
                      let s = e[o];
                      if ("string" == typeof s)
                        2 === r
                          ? "" !== s && t.push(s, e[++o])
                          : 8 === r && n.push(s);
                      else {
                        if (!qi(r)) break;
                        r = s;
                      }
                      o++;
                    }
                    return (n.length && t.push(1, ...n), t);
                  })(this.componentDef.selectors[0]),
              f = ah(0, null, null, 1, 0, null, null, null, null, [c], null),
              m = (function g1(e, t, n) {
                let o = t instanceof Xn ? t : t?.injector;
                return (
                  o &&
                    null !== e.getStandaloneInjector &&
                    (o = e.getStandaloneInjector(o) || o),
                  o ? new va(n, o) : n
                );
              })(l, r || this.ngModule, t),
              _ = (function _1(e) {
                const t = e.get(jh, null);
                if (null === t) throw new te(407, !1);
                return {
                  rendererFactory: t,
                  sanitizer: e.get(qT, null),
                  changeDetectionScheduler: e.get(Qn, null),
                };
              })(m),
              C = _.rendererFactory.createRenderer(null, l),
              w = o
                ? (function vD(e, t, n, o) {
                    const s = o.get(l_, !1) || n === Ho.ShadowDom,
                      l = e.selectRootElement(t, s);
                    return (
                      (function yD(e) {
                        Tv(e);
                      })(l),
                      l
                    );
                  })(C, o, l.encapsulation, m)
                : (function v1(e, t) {
                    const n = (e.selectors[0][0] || "div").toLowerCase();
                    return _d(
                      t,
                      n,
                      "svg" === n ? Yu : "math" === n ? "math" : null,
                    );
                  })(l, C),
              I = vd(
                null,
                f,
                null,
                512 | lh(l),
                null,
                null,
                _,
                C,
                m,
                null,
                R_(w, m, !0),
              );
            ((I[pe] = w), hl(I));
            let R = null;
            try {
              const B = Dy(pe, f, I, "#host", () => [this.componentDef], !0, 0);
              (w && (Cv(C, w, B), hi(w, I)),
                bd(f, I, B),
                Qp(f, B, I),
                Ty(f, B),
                void 0 !== n &&
                  (function b1(e, t, n) {
                    const o = (e.projection = []);
                    for (let r = 0; r < t.length; r++) {
                      const s = n[r];
                      o.push(null != s && s.length ? Array.from(s) : null);
                    }
                  })(B, this.ngContentSelectors, n),
                (R = Ln(B.index, I)),
                (I[nt] = R[nt]),
                Cd(f, I, null));
            } catch (B) {
              throw (null !== R && mp(R), mp(I), B);
            } finally {
              (ot(23), ml());
            }
            return new y1(this.componentType, I);
          } finally {
            ie(s);
          }
        }
      }
      class y1 extends QT {
        _rootLView;
        instance;
        hostView;
        changeDetectorRef;
        componentType;
        location;
        previousInputValues = null;
        _tNode;
        constructor(t, n) {
          (super(),
            (this._rootLView = n),
            (this._tNode = Po(n[z], pe)),
            (this.location = is(this._tNode, n)),
            (this.instance = Ln(this._tNode.index, n)[nt]),
            (this.hostView = this.changeDetectorRef = new ql(n, void 0, !1)),
            (this.componentType = t));
        }
        setInput(t, n) {
          const o = this._tNode;
          if (
            ((this.previousInputValues ??= new Map()),
            this.previousInputValues.has(t) &&
              Object.is(this.previousInputValues.get(t), n))
          )
            return;
          const r = this._rootLView;
          (mh(o, r[z], r, t, n),
            this.previousInputValues.set(t, n),
            Yl(Ln(o.index, r), 1));
        }
        get injector() {
          return new Pt(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      let Od = (() =>
        class e {
          static __NG_ELEMENT_ID__ = C1;
        })();
      function C1() {
        return ky(Pe(), j());
      }
      const E1 = Od,
        wy = class extends E1 {
          _lContainer;
          _hostTNode;
          _hostLView;
          constructor(t, n, o) {
            (super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = o));
          }
          get element() {
            return is(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Pt(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Hs(this._hostTNode, this._hostLView);
            if (bl(t)) {
              const n = zr(t, this._hostLView),
                o = $r(t);
              return new Pt(n[z].data[o + 8], n);
            }
            return new Pt(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Ay(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - Rt;
          }
          createEmbeddedView(t, n, o) {
            let r, s;
            "number" == typeof o
              ? (r = o)
              : null != o && ((r = o.index), (s = o.injector));
            const l = _a(this._lContainer, t.ssrId),
              c = t.createEmbeddedViewImpl(n || {}, s, l);
            return (this.insertImpl(c, r, us(this._hostTNode, l)), c);
          }
          createComponent(t, n, o, r, s) {
            const l =
              t &&
              !(function li(e) {
                return "function" == typeof e;
              })(t);
            let c;
            if (l) c = n;
            else {
              const R = n || {};
              ((c = R.index),
                (o = R.injector),
                (r = R.projectableNodes),
                (s = R.environmentInjector || R.ngModuleRef));
            }
            const f = l ? t : new cu(Oe(t)),
              m = o || this.parentInjector;
            if (!s && null == f.ngModule) {
              const B = (l ? m : this.parentInjector).get(Xn, null);
              B && (s = B);
            }
            const _ = Oe(f.componentType ?? {}),
              C = _a(this._lContainer, _?.id ?? null),
              I = f.create(m, r, C?.firstChild ?? null, s);
            return (this.insertImpl(I.hostView, c, us(this._hostTNode, C)), I);
          }
          insert(t, n) {
            return this.insertImpl(t, n, !0);
          }
          insertImpl(t, n, o) {
            const r = t._lView;
            if (
              (function Df(e) {
                return Jt(e[Nt]);
              })(r)
            ) {
              const c = this.indexOf(t);
              if (-1 !== c) this.detach(c);
              else {
                const f = r[Nt],
                  m = new wy(f, f[sn], f[Nt]);
                m.detach(m.indexOf(t));
              }
            }
            const s = this._adjustIndex(n),
              l = this._lContainer;
            return (
              ha(l, r, s, o),
              t.attachToViewContainerRef(),
              Es(Hh(l), s, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Ay(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              o = Jl(this._lContainer, n);
            o && (Nr(Hh(this._lContainer), n), Kl(o[z], o));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              o = Jl(this._lContainer, n);
            return o && null != Nr(Hh(this._lContainer), n) ? new ql(o) : null;
          }
          _adjustIndex(t, n = 0) {
            return t ?? this.length + n;
          }
        };
      function Ay(e) {
        return e[8];
      }
      function Hh(e) {
        return e[8] || (e[8] = []);
      }
      function ky(e, t) {
        let n;
        const o = t[e.index];
        return (
          Jt(o)
            ? (n = o)
            : ((n = Xv(o, t, null, e)), (t[e.index] = n), uh(t, n)),
          xy(n, t, e, o),
          new wy(n, e, t)
        );
      }
      let xy = function Ry(e, t, n, o) {
          if (e[Ri]) return;
          let r;
          ((r =
            8 & n.type
              ? Ye(o)
              : (function M1(e, t) {
                  const n = e[ve],
                    o = n.createComment(""),
                    r = Rn(t, e),
                    s = n.parentNode(r);
                  return (ls(n, s, o, n.nextSibling(r), !1), o);
                })(t, n)),
            (e[Ri] = r));
        },
        $h = () => !1;
      class zh {
        queryList;
        matches = null;
        constructor(t) {
          this.queryList = t;
        }
        clone() {
          return new zh(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Wh {
        queries;
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const o =
                null !== t.contentQueries ? t.contentQueries[0] : n.length,
              r = [];
            for (let s = 0; s < o; s++) {
              const l = n.getByIndex(s);
              r.push(this.queries[l.indexInDeclarationView].clone());
            }
            return new Wh(r);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        finishViewCreation(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== Yh(t, n).matches && this.queries[n].setDirty();
        }
      }
      class Ly {
        flags;
        read;
        predicate;
        constructor(t, n, o = null) {
          ((this.flags = n),
            (this.read = o),
            (this.predicate =
              "string" == typeof t
                ? (function x1(e) {
                    return e.split(",").map((t) => t.trim());
                  })(t)
                : t));
        }
      }
      class Xh {
        queries;
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let o = 0; o < this.queries.length; o++)
            this.queries[o].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let o = 0; o < this.length; o++) {
            const r = null !== n ? n.length : 0,
              s = this.getByIndex(o).embeddedTView(t, r);
            s &&
              ((s.indexInDeclarationView = o),
              null !== n ? n.push(s) : (n = [s]));
          }
          return null !== n ? new Xh(n) : null;
        }
        template(t, n) {
          for (let o = 0; o < this.queries.length; o++)
            this.queries[o].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class Zh {
        metadata;
        matches = null;
        indexInDeclarationView = -1;
        crossesNgTemplate = !1;
        _declarationNodeIndex;
        _appliesToNextNode = !0;
        constructor(t, n = -1) {
          ((this.metadata = t), (this._declarationNodeIndex = n));
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index &&
            (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-t.index, n),
              new Zh(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 & ~this.metadata.flags) {
            const n = this._declarationNodeIndex;
            let o = t.parent;
            for (; null !== o && 8 & o.type && o.index !== n; ) o = o.parent;
            return n === (null !== o ? o.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const o = this.metadata.predicate;
          if (Array.isArray(o))
            for (let r = 0; r < o.length; r++) {
              const s = o[r];
              (this.matchTNodeWithReadOption(t, n, S1(n, s)),
                this.matchTNodeWithReadOption(t, n, $s(n, t, s, !1, !1)));
            }
          else
            o === eu
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, $s(n, t, o, !1, !1));
        }
        matchTNodeWithReadOption(t, n, o) {
          if (null !== o) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === u || r === Od || (r === eu && 4 & n.type))
                this.addMatch(n.index, -2);
              else {
                const s = $s(n, t, r, !1, !1);
                null !== s && this.addMatch(n.index, s);
              }
            else this.addMatch(n.index, o);
          }
        }
        addMatch(t, n) {
          null === this.matches
            ? (this.matches = [t, n])
            : this.matches.push(t, n);
        }
      }
      function S1(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let o = 0; o < n.length; o += 2) if (n[o] === t) return n[o + 1];
        return null;
      }
      function A1(e, t, n, o) {
        return -1 === n
          ? (function w1(e, t) {
              return 11 & e.type ? is(e, t) : 4 & e.type ? Td(e, t) : null;
            })(t, e)
          : -2 === n
            ? (function k1(e, t, n) {
                return n === u
                  ? is(t, e)
                  : n === eu
                    ? Td(t, e)
                    : n === Od
                      ? ky(t, e)
                      : void 0;
              })(e, t, o)
            : Wr(e, e[z], n, t);
      }
      function Oy(e, t, n, o) {
        const r = t[$i].queries[o];
        if (null === r.matches) {
          const s = e.data,
            l = n.matches,
            c = [];
          for (let f = 0; null !== l && f < l.length; f += 2) {
            const m = l[f];
            c.push(m < 0 ? null : A1(t, s[m], l[f + 1], n.metadata.read));
          }
          r.matches = c;
        }
        return r.matches;
      }
      function Qh(e, t, n, o) {
        const r = e.queries.getByIndex(n),
          s = r.matches;
        if (null !== s) {
          const l = Oy(e, t, r, n);
          for (let c = 0; c < s.length; c += 2) {
            const f = s[c];
            if (f > 0) o.push(l[c / 2]);
            else {
              const m = s[c + 1],
                _ = t[-f];
              for (let C = Rt; C < _.length; C++) {
                const w = _[C];
                w[Fo] === w[Nt] && Qh(w[z], w, m, o);
              }
              if (null !== _[ar]) {
                const C = _[ar];
                for (let w = 0; w < C.length; w++) {
                  const I = C[w];
                  Qh(I[z], I, m, o);
                }
              }
            }
          }
        }
        return o;
      }
      function Kh(e, t) {
        return e[$i].queries[t].queryList;
      }
      function Fy(e, t, n) {
        const o = new Ut(!(4 & ~n));
        return (
          (function Tf(e, t, n, o) {
            const r = ol(t);
            (r.push(n), e.firstCreatePass && rl(e).push(o, r.length - 1));
          })(e, t, o, o.destroy),
          (t[$i] ??= new Wh()).queries.push(new zh(o)) - 1
        );
      }
      function Py(e, t, n) {
        const o = be();
        return (
          o.firstCreatePass &&
            (Vy(o, new Ly(e, t, n), -1),
            !(2 & ~t) && (o.staticViewQueries = !0)),
          Fy(o, j(), t)
        );
      }
      function Vy(e, t, n) {
        (null === e.queries && (e.queries = new Xh()),
          e.queries.track(new Zh(t, n)));
      }
      function Yh(e, t) {
        return e.queries.getByIndex(t);
      }
      function Gy(e, t) {
        const n = e[z],
          o = Yh(n, t);
        return o.crossesNgTemplate ? Qh(n, e, t, []) : Oy(n, e, o, t);
      }
      function Jh(e, t, n) {
        let o;
        const r = In(() => {
          o._dirtyCounter();
          const s = (function R1(e, t) {
            const n = e._lView,
              o = e._queryIndex;
            if (void 0 === n || void 0 === o || 4 & n[_e])
              return t ? void 0 : Qe;
            const r = Kh(n, o),
              s = Gy(n, o);
            return (
              r.reset(s, E),
              t
                ? r.first
                : r._changesDetected || void 0 === e._flatValue
                  ? (e._flatValue = r.toArray())
                  : e._flatValue
            );
          })(o, e);
          if (t && void 0 === s) throw new te(-951, !1);
          return s;
        });
        return (
          (o = r[Se]),
          (o._dirtyCounter = p(0)),
          (o._flatValue = void 0),
          r
        );
      }
      function Wy(e, t) {
        return (function Uy(e) {
          return Jh(!0, !1);
        })();
      }
      const O1 =
        ((Wy.required = function L1(e, t) {
          return (function Hy(e) {
            return Jh(!0, !0);
          })();
        }),
        Wy);
      function Xy(e, t) {
        const n = Object.create(ki),
          o = new up();
        function r() {
          return (We(n), Zy(n.value), n.value);
        }
        return (
          (n.value = e),
          (r[Se] = n),
          (r.asReadonly = D.bind(r)),
          (r.set = (s) => {
            n.equal(n.value, s) || (Wt(n, s), o.emit(s));
          }),
          (r.update = (s) => {
            (Zy(n.value), r.set(s(n.value)));
          }),
          (r.subscribe = o.subscribe.bind(o)),
          (r.destroyRef = o.destroyRef),
          r
        );
      }
      function Zy(e) {
        if (e === Ai) throw new te(952, !1);
      }
      function Qy(e, t) {
        return Xy(e);
      }
      const P1 =
        ((Qy.required = function F1(e) {
          return Xy(Ai);
        }),
        Qy);
      let ps = class {},
        e0 = class {};
      function W1(e, t) {
        return new em(e, t ?? null, []);
      }
      class em extends ps {
        ngModuleType;
        _parent;
        _bootstrapComponents = [];
        _r3Injector;
        instance;
        destroyCbs = [];
        componentFactoryResolver = new Sy(this);
        constructor(t, n, o, r = !0) {
          (super(), (this.ngModuleType = t), (this._parent = n));
          const s = mn(t);
          ((this._bootstrapComponents = yo(s.bootstrap)),
            (this._r3Injector = Yr(
              t,
              n,
              [
                { provide: ps, useValue: this },
                { provide: Rd, useValue: this.componentFactoryResolver },
                ...o,
              ],
              ct(t),
              new Set(["environment"]),
            )),
            r && this.resolveInjectorInitializers());
        }
        resolveInjectorInitializers() {
          (this._r3Injector.resolveInjectorInitializers(),
            (this.instance = this._r3Injector.get(this.ngModuleType)));
        }
        get injector() {
          return this._r3Injector;
        }
        destroy() {
          const t = this._r3Injector;
          (!t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null));
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class tm extends e0 {
        moduleType;
        constructor(t) {
          (super(), (this.moduleType = t));
        }
        create(t) {
          return new em(this.moduleType, t, []);
        }
      }
      class t0 extends ps {
        injector;
        componentFactoryResolver = new Sy(this);
        instance = null;
        constructor(t) {
          super();
          const n = new Hi(
            [
              ...t.providers,
              { provide: ps, useValue: this },
              { provide: Rd, useValue: this.componentFactoryResolver },
            ],
            t.parent || jr(),
            t.debugName,
            new Set(["environment"]),
          );
          ((this.injector = n),
            t.runEnvironmentInitializers && n.resolveInjectorInitializers());
        }
        destroy() {
          this.injector.destroy();
        }
        onDestroy(t) {
          this.injector.onDestroy(t);
        }
      }
      function nm(e, t, n = null) {
        return new t0({
          providers: e,
          parent: t,
          debugName: n,
          runEnvironmentInitializers: !0,
        }).injector;
      }
      let Z1 = (() => {
        class e {
          _injector;
          cachedInjectors = new Map();
          constructor(n) {
            this._injector = n;
          }
          getOrCreateStandaloneInjector(n) {
            if (!n.standalone) return null;
            if (!this.cachedInjectors.has(n)) {
              const o = Is(0, n.type),
                r =
                  o.length > 0
                    ? nm([o], this._injector, `Standalone[${n.type.name}]`)
                    : null;
              this.cachedInjectors.set(n, r);
            }
            return this.cachedInjectors.get(n);
          }
          ngOnDestroy() {
            try {
              for (const n of this.cachedInjectors.values())
                null !== n && n.destroy();
            } finally {
              this.cachedInjectors.clear();
            }
          }
          static ɵprov = x({
            token: e,
            providedIn: "environment",
            factory: () => new e(hn(Xn)),
          });
        }
        return e;
      })();
      function n0(e) {
        return kt(() => {
          const t = s0(e),
            n = {
              ...t,
              decls: e.decls,
              vars: e.vars,
              template: e.template,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              onPush: e.changeDetection === Qc.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              dependencies: (t.standalone && e.dependencies) || null,
              getStandaloneInjector: t.standalone
                ? (r) => r.get(Z1).getOrCreateStandaloneInjector(n)
                : null,
              getExternalStyles: null,
              signals: e.signals ?? !1,
              data: e.data || {},
              encapsulation: e.encapsulation || Ho.Emulated,
              styles: e.styles || Qe,
              _: null,
              schemas: e.schemas || null,
              tView: null,
              id: "",
            };
          (t.standalone && mi("NgStandalone"), a0(n));
          const o = e.dependencies;
          return (
            (n.directiveDefs = Fd(o, !1)),
            (n.pipeDefs = Fd(o, !0)),
            (n.id = (function eS(e) {
              let t = 0;
              const o = [
                e.selectors,
                e.ngContentSelectors,
                e.hostVars,
                e.hostAttrs,
                "function" == typeof e.consts ? "" : e.consts,
                e.vars,
                e.decls,
                e.encapsulation,
                e.standalone,
                e.signals,
                e.exportAs,
                JSON.stringify(e.inputs),
                JSON.stringify(e.outputs),
                Object.getOwnPropertyNames(e.type.prototype),
                !!e.contentQueries,
                !!e.viewQuery,
              ];
              for (const s of o.join("|"))
                t = (Math.imul(31, t) + s.charCodeAt(0)) | 0;
              return ((t += 2147483648), "c" + t);
            })(n)),
            n
          );
        });
      }
      function Q1(e) {
        return Oe(e) || dn(e);
      }
      function K1(e) {
        return null !== e;
      }
      function im(e) {
        return kt(() => ({
          type: e.type,
          bootstrap: e.bootstrap || Qe,
          declarations: e.declarations || Qe,
          imports: e.imports || Qe,
          exports: e.exports || Qe,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        }));
      }
      function Y1(e, t) {
        if (null == e) return pt;
        const n = {};
        for (const o in e)
          if (e.hasOwnProperty(o)) {
            const r = e[o];
            let s, l, c, f;
            (Array.isArray(r)
              ? ((c = r[0]), (s = r[1]), (l = r[2] ?? s), (f = r[3] || null))
              : ((s = r), (l = r), (c = yd.None), (f = null)),
              (n[s] = [o, c, f]),
              (t[s] = l));
          }
        return n;
      }
      function J1(e) {
        if (null == e) return pt;
        const t = {};
        for (const n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
        return t;
      }
      function o0(e) {
        return kt(() => {
          const t = s0(e);
          return (a0(t), t);
        });
      }
      function r0(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          standalone: e.standalone ?? !0,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function s0(e) {
        const t = {};
        return {
          type: e.type,
          providersResolver: null,
          factory: null,
          hostBindings: e.hostBindings || null,
          hostVars: e.hostVars || 0,
          hostAttrs: e.hostAttrs || null,
          contentQueries: e.contentQueries || null,
          declaredInputs: t,
          inputConfig: e.inputs || pt,
          exportAs: e.exportAs || null,
          standalone: e.standalone ?? !0,
          signals: !0 === e.signals,
          selectors: e.selectors || Qe,
          viewQuery: e.viewQuery || null,
          features: e.features || null,
          setInput: null,
          findHostDirectiveDefs: null,
          hostDirectives: null,
          inputs: Y1(e.inputs, t),
          outputs: J1(e.outputs),
          debugInfo: null,
        };
      }
      function a0(e) {
        e.features?.forEach((t) => t(e));
      }
      function Fd(e, t) {
        if (!e) return null;
        const n = t ? Wn : Q1;
        return () =>
          ("function" == typeof e ? e() : e).map((o) => n(o)).filter(K1);
      }
      function om(e) {
        let t = (function l0(e) {
            return Object.getPrototypeOf(e.prototype).constructor;
          })(e.type),
          n = !0;
        const o = [e];
        for (; t; ) {
          let r;
          if (ii(e)) r = t.ɵcmp || t.ɵdir;
          else {
            if (t.ɵcmp) throw new te(903, !1);
            r = t.ɵdir;
          }
          if (r) {
            if (n) {
              o.push(r);
              const l = e;
              ((l.inputs = rm(e.inputs)),
                (l.declaredInputs = rm(e.declaredInputs)),
                (l.outputs = rm(e.outputs)));
              const c = r.hostBindings;
              c && rS(e, c);
              const f = r.viewQuery,
                m = r.contentQueries;
              if (
                (f && iS(e, f),
                m && oS(e, m),
                tS(e, r),
                Io(e.outputs, r.outputs),
                ii(r) && r.data.animation)
              ) {
                const _ = e.data;
                _.animation = (_.animation || []).concat(r.data.animation);
              }
            }
            const s = r.features;
            if (s)
              for (let l = 0; l < s.length; l++) {
                const c = s[l];
                (c && c.ngInherit && c(e), c === om && (n = !1));
              }
          }
          t = Object.getPrototypeOf(t);
        }
        !(function nS(e) {
          let t = 0,
            n = null;
          for (let o = e.length - 1; o >= 0; o--) {
            const r = e[o];
            ((r.hostVars = t += r.hostVars),
              (r.hostAttrs = fr(r.hostAttrs, (n = fr(n, r.hostAttrs)))));
          }
        })(o);
      }
      function tS(e, t) {
        for (const n in t.inputs) {
          if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
            continue;
          const o = t.inputs[n];
          void 0 !== o &&
            ((e.inputs[n] = o), (e.declaredInputs[n] = t.declaredInputs[n]));
        }
      }
      function rm(e) {
        return e === pt ? {} : e === Qe ? [] : e;
      }
      function iS(e, t) {
        const n = e.viewQuery;
        e.viewQuery = n
          ? (o, r) => {
              (t(o, r), n(o, r));
            }
          : t;
      }
      function oS(e, t) {
        const n = e.contentQueries;
        e.contentQueries = n
          ? (o, r, s) => {
              (t(o, r, s), n(o, r, s));
            }
          : t;
      }
      function rS(e, t) {
        const n = e.hostBindings;
        e.hostBindings = n
          ? (o, r) => {
              (t(o, r), n(o, r));
            }
          : t;
      }
      function u0(e) {
        const t = (n) => {
          const o = Array.isArray(e);
          null === n.hostDirectives
            ? ((n.findHostDirectiveDefs = c0),
              (n.hostDirectives = o ? e.map(sm) : [e]))
            : o
              ? n.hostDirectives.unshift(...e.map(sm))
              : n.hostDirectives.unshift(e);
        };
        return ((t.ngInherit = !0), t);
      }
      function c0(e, t, n) {
        if (null !== e.hostDirectives)
          for (const o of e.hostDirectives)
            if ("function" == typeof o) {
              const r = o();
              for (const s of r) d0(sm(s), t, n);
            } else d0(o, t, n);
      }
      function d0(e, t, n) {
        const o = dn(e.directive);
        ((function uS(e, t) {
          for (const n in t) t.hasOwnProperty(n) && (e[t[n]] = e[n]);
        })(o.declaredInputs, e.inputs),
          c0(o, t, n),
          n.set(o, e),
          t.push(o));
      }
      function sm(e) {
        return "function" == typeof e
          ? { directive: ge(e), inputs: pt, outputs: pt }
          : {
              directive: ge(e.directive),
              inputs: f0(e.inputs),
              outputs: f0(e.outputs),
            };
      }
      function f0(e) {
        if (void 0 === e || 0 === e.length) return pt;
        const t = {};
        for (let n = 0; n < e.length; n += 2) t[e[n]] = e[n + 1];
        return t;
      }
      function Pd(e) {
        return (
          !!am(e) &&
          (Array.isArray(e) || (!(e instanceof Map) && Symbol.iterator in e))
        );
      }
      function am(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Co(e, t, n) {
        return (e[t] = n);
      }
      function fu(e, t) {
        return e[t];
      }
      function en(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function hs(e, t, n, o) {
        const r = en(e, t, n);
        return en(e, t + 1, o) || r;
      }
      function jd(e, t, n, o, r) {
        const s = hs(e, t, n, o);
        return en(e, t + 2, r) || s;
      }
      function Fi(e, t, n, o, r, s) {
        const l = hs(e, t, n, o);
        return hs(e, t + 2, r, s) || l;
      }
      function pu(e, t, n, o, r, s, l, c, f, m) {
        const _ = n + pe,
          C = t.firstCreatePass
            ? (function pS(e, t, n, o, r, s, l, c, f) {
                const m = t.consts,
                  _ = ma(t, e, 4, l || null, c || null);
                (ll() && Uh(t, n, _, ci(m, f), fh),
                  (_.mergedAttrs = fr(_.mergedAttrs, _.attrs)),
                  gl(t, _));
                const C = (_.tView = ah(
                  2,
                  _,
                  o,
                  r,
                  s,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  m,
                  null,
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, _),
                    (C.queries = t.queries.embeddedTView(_))),
                  _
                );
              })(_, t, e, o, r, s, l, c, f)
            : t.data[_];
        Ei(C, !1);
        const w = h0(t, e, C, n);
        (cr() && Md(t, e, w, C), hi(w, e));
        const I = Xv(w, e, w, C);
        return (
          (e[_] = I),
          uh(e, I),
          (function Ny(e, t, n) {
            return $h(e, t, n);
          })(I, C, e),
          Rs(C) && bd(t, e, C),
          null != f && dh(e, C, m),
          C
        );
      }
      function lm(e, t, n, o, r, s, l, c) {
        const f = j(),
          m = be();
        return (pu(f, m, e, t, n, o, r, ci(m.consts, s), l, c), lm);
      }
      let h0 = function m0(e, t, n, o) {
        return (Fn(!0), t[ve].createComment(""));
      };
      let dm = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵprov = x({
            token: e,
            factory: e.ɵfac,
            providedIn: "platform",
          });
        }
        return e;
      })();
      const w0 = new de(""),
        A0 = new de("");
      let mm,
        dw = (() => {
          class e {
            _ngZone;
            registry;
            _isZoneStable = !0;
            _callbacks = [];
            _taskTrackingZone = null;
            _destroyRef;
            constructor(n, o, r) {
              ((this._ngZone = n),
                (this.registry = o),
                F() && (this._destroyRef = fe(fi, { optional: !0 }) ?? void 0),
                mm ||
                  ((function fw(e) {
                    mm = e;
                  })(r),
                  r.addToWindow(o)),
                this._watchAngularEvents(),
                n.run(() => {
                  this._taskTrackingZone =
                    typeof Zone > "u"
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                }));
            }
            _watchAngularEvents() {
              const n = this._ngZone.onUnstable.subscribe({
                  next: () => {
                    this._isZoneStable = !1;
                  },
                }),
                o = this._ngZone.runOutsideAngular(() =>
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      (gt.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          ((this._isZoneStable = !0),
                            this._runCallbacksIfReady());
                        }));
                    },
                  }),
                );
              this._destroyRef?.onDestroy(() => {
                (n.unsubscribe(), o.unsubscribe());
              });
            }
            isStable() {
              return this._isZoneStable && !this._ngZone.hasPendingMacrotasks;
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                queueMicrotask(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    (clearTimeout(n.timeoutId), n.doneCb());
                  }
                });
              else {
                let n = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(
                  (o) =>
                    !o.updateCb ||
                    !o.updateCb(n) ||
                    (clearTimeout(o.timeoutId), !1),
                );
              }
            }
            getPendingTasks() {
              return this._taskTrackingZone
                ? this._taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, o, r) {
              let s = -1;
              (o &&
                o > 0 &&
                (s = setTimeout(() => {
                  ((this._callbacks = this._callbacks.filter(
                    (l) => l.timeoutId !== s,
                  )),
                    n());
                }, o)),
                this._callbacks.push({ doneCb: n, timeoutId: s, updateCb: r }));
            }
            whenStable(n, o, r) {
              if (r && !this._taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              (this.addCallback(n, o, r), this._runCallbacksIfReady());
            }
            registerApplication(n) {
              this.registry.registerApplication(n, this);
            }
            unregisterApplication(n) {
              this.registry.unregisterApplication(n);
            }
            findProviders(n, o, r) {
              return [];
            }
            static ɵfac = function (o) {
              return new (o || e)(hn(gt), hn(k0), hn(A0));
            };
            static ɵprov = x({ token: e, factory: e.ɵfac });
          }
          return e;
        })(),
        k0 = (() => {
          class e {
            _applications = new Map();
            registerApplication(n, o) {
              this._applications.set(n, o);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, o = !0) {
              return mm?.findTestabilityInTree(this, n, o) ?? null;
            }
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵprov = x({
              token: e,
              factory: e.ɵfac,
              providedIn: "platform",
            });
          }
          return e;
        })(),
        x0 = (() => {
          class e {
            static ɵprov = x({
              token: e,
              providedIn: "root",
              factory: () => new pw(),
            });
          }
          return e;
        })();
      class pw {
        queuedEffectCount = 0;
        queues = new Map();
        schedule(t) {
          this.enqueue(t);
        }
        remove(t) {
          const o = this.queues.get(t.zone);
          o.has(t) && (o.delete(t), this.queuedEffectCount--);
        }
        enqueue(t) {
          const n = t.zone;
          this.queues.has(n) || this.queues.set(n, new Set());
          const o = this.queues.get(n);
          o.has(t) || (this.queuedEffectCount++, o.add(t));
        }
        flush() {
          for (; this.queuedEffectCount > 0; )
            for (const [t, n] of this.queues)
              null === t ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
        }
        flushQueue(t) {
          for (const n of t) (t.delete(n), this.queuedEffectCount--, n.run());
        }
      }
      function gm(e) {
        return !!e && "function" == typeof e.then;
      }
      function N0(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const R0 = new de("");
      function hw(e) {
        return Ke([{ provide: R0, multi: !0, useValue: e }]);
      }
      let L0 = (() => {
        class e {
          resolve;
          reject;
          initialized = !1;
          done = !1;
          donePromise = new Promise((n, o) => {
            ((this.resolve = n), (this.reject = o));
          });
          appInits = fe(R0, { optional: !0 }) ?? [];
          injector = fe(qt);
          constructor() {}
          runInitializers() {
            if (this.initialized) return;
            const n = [];
            for (const r of this.appInits) {
              const s = S(this.injector, r);
              if (gm(s)) n.push(s);
              else if (N0(s)) {
                const l = new Promise((c, f) => {
                  s.subscribe({ complete: c, error: f });
                });
                n.push(l);
              }
            }
            const o = () => {
              ((this.done = !0), this.resolve());
            };
            (Promise.all(n)
              .then(() => {
                o();
              })
              .catch((r) => {
                this.reject(r);
              }),
              0 === n.length && o(),
              (this.initialized = !0));
          }
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
        }
        return e;
      })();
      const mu = new de("");
      let Ii = (() => {
        class e {
          _runningTick = !1;
          _destroyed = !1;
          _destroyListeners = [];
          _views = [];
          internalErrorHandler = fe(lp);
          afterRenderManager = fe(Np);
          zonelessEnabled = fe(Zs);
          rootEffectScheduler = fe(x0);
          dirtyFlags = 0;
          tracingSnapshot = null;
          externalTestViews = new Set();
          afterTick = new Xe.B();
          get allViews() {
            return [...this.externalTestViews.keys(), ...this._views];
          }
          get destroyed() {
            return this._destroyed;
          }
          componentTypes = [];
          components = [];
          isStable = fe(_o).hasPendingTasks.pipe((0, Jn.T)((n) => !n));
          constructor() {
            fe(qs, { optional: !0 });
          }
          whenStable() {
            let n;
            return new Promise((o) => {
              n = this.isStable.subscribe({
                next: (r) => {
                  r && o();
                },
              });
            }).finally(() => {
              n.unsubscribe();
            });
          }
          _injector = fe(Xn);
          _rendererFactory = null;
          get injector() {
            return this._injector;
          }
          bootstrap(n, o) {
            return this.bootstrapImpl(n, o);
          }
          bootstrapImpl(n, o, r = qt.NULL) {
            ot(10);
            const s = n instanceof vy;
            if (!this._injector.get(L0).done) throw new te(405, "");
            let c;
            ((c = s ? n : this._injector.get(Rd).resolveComponentFactory(n)),
              this.componentTypes.push(c.componentType));
            const f = (function mw(e) {
                return e.isBoundToModule;
              })(c)
                ? void 0
                : this._injector.get(ps),
              _ = c.create(r, [], o || c.selector, f),
              C = _.location.nativeElement,
              w = _.injector.get(w0, null);
            return (
              w?.registerApplication(C),
              _.onDestroy(() => {
                (this.detachView(_.hostView),
                  Ud(this.components, _),
                  w?.unregisterApplication(C));
              }),
              this._loadComponent(_),
              ot(11, _),
              _
            );
          }
          tick() {
            (this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick());
          }
          _tick() {
            (ot(12),
              null !== this.tracingSnapshot
                ? this.tracingSnapshot.run(xp.CHANGE_DETECTION, this.tickImpl)
                : this.tickImpl());
          }
          tickImpl = () => {
            if (this._runningTick) throw new te(101, !1);
            const n = ie(null);
            try {
              ((this._runningTick = !0), this.synchronize());
            } catch (o) {
              this.internalErrorHandler(o);
            } finally {
              ((this._runningTick = !1),
                this.tracingSnapshot?.dispose(),
                (this.tracingSnapshot = null),
                ie(n),
                this.afterTick.next(),
                ot(13));
            }
          };
          synchronize() {
            null === this._rendererFactory &&
              !this._injector.destroyed &&
              (this._rendererFactory = this._injector.get(jh, null, {
                optional: !0,
              }));
            let n = 0;
            for (; 0 !== this.dirtyFlags && n++ < 10; )
              (ot(14), this.synchronizeOnce(), ot(15));
          }
          synchronizeOnce() {
            if (
              (16 & this.dirtyFlags &&
                ((this.dirtyFlags &= -17), this.rootEffectScheduler.flush()),
              7 & this.dirtyFlags)
            ) {
              const n = !!(1 & this.dirtyFlags);
              ((this.dirtyFlags &= -8), (this.dirtyFlags |= 8));
              for (let { _lView: o, notifyErrorHandler: r } of this.allViews)
                _w(o, r, n, this.zonelessEnabled);
              if (
                ((this.dirtyFlags &= -5),
                this.syncDirtyFlagsWithViews(),
                23 & this.dirtyFlags)
              )
                return;
            } else
              (this._rendererFactory?.begin?.(),
                this._rendererFactory?.end?.());
            (8 & this.dirtyFlags &&
              ((this.dirtyFlags &= -9), this.afterRenderManager.execute()),
              this.syncDirtyFlagsWithViews());
          }
          syncDirtyFlagsWithViews() {
            this.allViews.some(({ _lView: n }) => Gr(n))
              ? (this.dirtyFlags |= 2)
              : (this.dirtyFlags &= -8);
          }
          attachView(n) {
            const o = n;
            (this._views.push(o), o.attachToAppRef(this));
          }
          detachView(n) {
            const o = n;
            (Ud(this._views, o), o.detachFromAppRef());
          }
          _loadComponent(n) {
            (this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector.get(mu, []).forEach((r) => r(n)));
          }
          ngOnDestroy() {
            if (!this._destroyed)
              try {
                (this._destroyListeners.forEach((n) => n()),
                  this._views.slice().forEach((n) => n.destroy()));
              } finally {
                ((this._destroyed = !0),
                  (this._views = []),
                  (this._destroyListeners = []));
              }
          }
          onDestroy(n) {
            return (
              this._destroyListeners.push(n),
              () => Ud(this._destroyListeners, n)
            );
          }
          destroy() {
            if (this._destroyed) throw new te(406, !1);
            const n = this._injector;
            n.destroy && !n.destroyed && n.destroy();
          }
          get viewCount() {
            return this._views.length;
          }
          static ɵfac = function (o) {
            return new (o || e)();
          };
          static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
        }
        return e;
      })();
      function Ud(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      function _w(e, t, n, o) {
        (n || Gr(e)) && Dd(e, t, n && !o ? 0 : 1);
      }
      function Cm(e, t, n, o) {
        const r = j();
        return (en(r, di(), t) && (be(), bo(dt(), r, e, t, n, o)), Cm);
      }
      function Ia(e, t, n, o) {
        return en(e, di(), n) ? t + ye(n) + o : xe;
      }
      function Da(e, t, n, o, r, s) {
        const c = hs(e, Ki(), n, r);
        return (Yi(2), c ? t + ye(n) + o + ye(r) + s : xe);
      }
      function Em(e, t, n, o, r, s) {
        const l = j(),
          c = Ia(l, t, n, o);
        return (c !== xe && bo(dt(), l, e, c, r, s), Em);
      }
      function Mm(e, t, n, o, r, s, l, c) {
        const f = j(),
          m = Da(f, t, n, o, r, s);
        return (m !== xe && bo(dt(), f, e, m, l, c), Mm);
      }
      function Hd(e, t) {
        return (e << 17) | (t << 2);
      }
      function gs(e) {
        return (e >> 17) & 32767;
      }
      function Im(e) {
        return 2 | e;
      }
      function Na(e) {
        return (131068 & e) >> 2;
      }
      function Dm(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function Tm(e) {
        return 1 | e;
      }
      function J0(e, t, n, o) {
        const r = e[n + 1],
          s = null === t;
        let l = o ? gs(r) : Na(r),
          c = !1;
        for (; 0 !== l && (!1 === c || s); ) {
          const m = e[l + 1];
          (iA(e[l], t) && ((c = !0), (e[l + 1] = o ? Tm(m) : Im(m))),
            (l = o ? gs(m) : Na(m)));
        }
        c && (e[n + 1] = o ? Im(r) : Tm(r));
      }
      function iA(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && er(e, t) >= 0)
        );
      }
      const _n = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function q0(e) {
        return e.substring(_n.key, _n.keyEnd);
      }
      function oA(e) {
        return e.substring(_n.value, _n.valueEnd);
      }
      function eb(e, t) {
        const n = _n.textEnd;
        return n === t
          ? -1
          : ((t = _n.keyEnd =
              (function aA(e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (_n.key = t), n)),
            Ra(e, t, n));
      }
      function tb(e, t) {
        const n = _n.textEnd;
        let o = (_n.key = Ra(e, t, n));
        return n === o
          ? -1
          : ((o = _n.keyEnd =
              (function lA(e, t, n) {
                let o;
                for (
                  ;
                  t < n &&
                  (45 === (o = e.charCodeAt(t)) ||
                    95 === o ||
                    ((-33 & o) >= 65 && (-33 & o) <= 90) ||
                    (o >= 48 && o <= 57));
                )
                  t++;
                return t;
              })(e, o, n)),
            (o = ib(e, o, n)),
            (o = _n.value = Ra(e, o, n)),
            (o = _n.valueEnd =
              (function uA(e, t, n) {
                let o = -1,
                  r = -1,
                  s = -1,
                  l = t,
                  c = l;
                for (; l < n; ) {
                  const f = e.charCodeAt(l++);
                  if (59 === f) return c;
                  (34 === f || 39 === f
                    ? (c = l = ob(e, f, l, n))
                    : t === l - 4 &&
                        85 === s &&
                        82 === r &&
                        76 === o &&
                        40 === f
                      ? (c = l = ob(e, 41, l, n))
                      : f > 32 && (c = l),
                    (s = r),
                    (r = o),
                    (o = -33 & f));
                }
                return c;
              })(e, o, n)),
            ib(e, o, n));
      }
      function nb(e) {
        ((_n.key = 0),
          (_n.keyEnd = 0),
          (_n.value = 0),
          (_n.valueEnd = 0),
          (_n.textEnd = e.length));
      }
      function Ra(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function ib(e, t, n, o) {
        return ((t = Ra(e, t, n)) < n && t++, t);
      }
      function ob(e, t, n, o) {
        let r = -1,
          s = n;
        for (; s < o; ) {
          const l = e.charCodeAt(s++);
          if (l == t && 92 !== r) return s;
          r = 92 == l && 92 === r ? 0 : l;
        }
        throw new Error();
      }
      function Sm(e, t, n) {
        const o = j();
        return (en(o, di(), t) && gi(be(), dt(), o, e, t, o[ve], n, !1), Sm);
      }
      function wm(e, t, n, o, r) {
        mh(t, e, n, r ? "class" : "style", o);
      }
      function Am(e, t, n) {
        return (to(e, t, n, !1), Am);
      }
      function km(e, t) {
        return (to(e, t, null, !0), km);
      }
      function eo(e) {
        no(lb, cA, e, !1);
      }
      function cA(e, t) {
        for (
          let n = (function sA(e) {
            return (nb(e), tb(e, Ra(e, 0, _n.textEnd)));
          })(t);
          n >= 0;
          n = tb(t, n)
        )
          lb(e, q0(t), oA(t));
      }
      function rb(e) {
        no(gA, Eo, e, !0);
      }
      function Eo(e, t) {
        for (
          let n = (function rA(e) {
            return (nb(e), eb(e, Ra(e, 0, _n.textEnd)));
          })(t);
          n >= 0;
          n = eb(t, n)
        )
          zn(e, q0(t), !0);
      }
      function to(e, t, n, o) {
        const r = j(),
          s = be(),
          l = Yi(2);
        (s.firstUpdatePass && ab(s, e, l, o),
          t !== xe &&
            en(r, l, t) &&
            ub(
              s,
              s.data[gn()],
              r,
              r[ve],
              e,
              (r[l + 1] = (function vA(e, t) {
                return (
                  null == e ||
                    "" === e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = ct($o(e)))),
                  e
                );
              })(t, n)),
              o,
              l,
            ));
      }
      function no(e, t, n, o) {
        const r = be(),
          s = Yi(2);
        r.firstUpdatePass && ab(r, null, s, o);
        const l = j();
        if (n !== xe && en(l, s, n)) {
          const c = r.data[gn()];
          if (db(c, o) && !sb(r, s)) {
            let f = o ? c.classesWithoutHost : c.stylesWithoutHost;
            (null !== f && (n = ei(f, n || "")), wm(r, c, l, n, o));
          } else
            !(function _A(e, t, n, o, r, s, l, c) {
              r === xe && (r = Qe);
              let f = 0,
                m = 0,
                _ = 0 < r.length ? r[0] : null,
                C = 0 < s.length ? s[0] : null;
              for (; null !== _ || null !== C; ) {
                const w = f < r.length ? r[f + 1] : void 0,
                  I = m < s.length ? s[m + 1] : void 0;
                let B,
                  R = null;
                (_ === C
                  ? ((f += 2), (m += 2), w !== I && ((R = C), (B = I)))
                  : null === C || (null !== _ && _ < C)
                    ? ((f += 2), (R = _))
                    : ((m += 2), (R = C), (B = I)),
                  null !== R && ub(e, t, n, o, R, B, l, c),
                  (_ = f < r.length ? r[f] : null),
                  (C = m < s.length ? s[m] : null));
              }
            })(
              r,
              c,
              l,
              l[ve],
              l[s + 1],
              (l[s + 1] = (function mA(e, t, n) {
                if (null == n || "" === n) return Qe;
                const o = [],
                  r = $o(n);
                if (Array.isArray(r))
                  for (let s = 0; s < r.length; s++) e(o, r[s], !0);
                else if ("object" == typeof r)
                  for (const s in r) r.hasOwnProperty(s) && e(o, s, r[s]);
                else "string" == typeof r && t(o, r);
                return o;
              })(e, t, n)),
              o,
              s,
            );
        }
      }
      function sb(e, t) {
        return t >= e.expandoStartIndex;
      }
      function ab(e, t, n, o) {
        const r = e.data;
        if (null === r[n + 1]) {
          const s = r[gn()],
            l = sb(e, n);
          (db(s, o) && null === t && !l && (t = !1),
            (t = (function dA(e, t, n, o) {
              const r = fl(e);
              let s = o ? t.residualClasses : t.residualStyles;
              if (null === r)
                0 === (o ? t.classBindings : t.styleBindings) &&
                  ((n = _u((n = xm(null, e, t, n, o)), t.attrs, o)),
                  (s = null));
              else {
                const l = t.directiveStylingLast;
                if (-1 === l || e[l] !== r)
                  if (((n = xm(r, e, t, n, o)), null === s)) {
                    let f = (function fA(e, t, n) {
                      const o = n ? t.classBindings : t.styleBindings;
                      if (0 !== Na(o)) return e[gs(o)];
                    })(e, t, o);
                    void 0 !== f &&
                      Array.isArray(f) &&
                      ((f = xm(null, e, t, f[1], o)),
                      (f = _u(f, t.attrs, o)),
                      (function pA(e, t, n, o) {
                        e[gs(n ? t.classBindings : t.styleBindings)] = o;
                      })(e, t, o, f));
                  } else
                    s = (function hA(e, t, n) {
                      let o;
                      const r = t.directiveEnd;
                      for (let s = 1 + t.directiveStylingLast; s < r; s++)
                        o = _u(o, e[s].hostAttrs, n);
                      return _u(o, t.attrs, n);
                    })(e, t, o);
              }
              return (
                void 0 !== s &&
                  (o ? (t.residualClasses = s) : (t.residualStyles = s)),
                n
              );
            })(r, s, t, o)),
            (function tA(e, t, n, o, r, s) {
              let l = s ? t.classBindings : t.styleBindings,
                c = gs(l),
                f = Na(l);
              e[o] = n;
              let _,
                m = !1;
              if (
                (Array.isArray(n)
                  ? ((_ = n[1]), (null === _ || er(n, _) > 0) && (m = !0))
                  : (_ = n),
                r)
              )
                if (0 !== f) {
                  const w = gs(e[c + 1]);
                  ((e[o + 1] = Hd(w, c)),
                    0 !== w && (e[w + 1] = Dm(e[w + 1], o)),
                    (e[c + 1] = (function qw(e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[c + 1], o)));
                } else
                  ((e[o + 1] = Hd(c, 0)),
                    0 !== c && (e[c + 1] = Dm(e[c + 1], o)),
                    (c = o));
              else
                ((e[o + 1] = Hd(f, 0)),
                  0 === c ? (c = o) : (e[f + 1] = Dm(e[f + 1], o)),
                  (f = o));
              (m && (e[o + 1] = Im(e[o + 1])),
                J0(e, _, o, !0),
                J0(e, _, o, !1),
                (function nA(e, t, n, o, r) {
                  const s = r ? e.residualClasses : e.residualStyles;
                  null != s &&
                    "string" == typeof t &&
                    er(s, t) >= 0 &&
                    (n[o + 1] = Tm(n[o + 1]));
                })(t, _, e, o, s),
                (l = Hd(c, f)),
                s ? (t.classBindings = l) : (t.styleBindings = l));
            })(r, s, t, n, l, o));
        }
      }
      function xm(e, t, n, o, r) {
        let s = null;
        const l = n.directiveEnd;
        let c = n.directiveStylingLast;
        for (
          -1 === c ? (c = n.directiveStart) : c++;
          c < l && ((s = t[c]), (o = _u(o, s.hostAttrs, r)), s !== e);
        )
          c++;
        return (null !== e && (n.directiveStylingLast = c), o);
      }
      function _u(e, t, n) {
        const o = n ? 1 : 2;
        let r = -1;
        if (null !== t)
          for (let s = 0; s < t.length; s++) {
            const l = t[s];
            "number" == typeof l
              ? (r = l)
              : r === o &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                zn(e, l, !!n || t[++s]));
          }
        return void 0 === e ? null : e;
      }
      function lb(e, t, n) {
        zn(e, t, $o(n));
      }
      function gA(e, t, n) {
        const o = String(t);
        "" !== o && !o.includes(" ") && zn(e, o, n);
      }
      function ub(e, t, n, o, r, s, l, c) {
        if (!(3 & t.type)) return;
        const f = e.data,
          m = f[c + 1],
          _ = (function eA(e) {
            return !(1 & ~e);
          })(m)
            ? cb(f, t, n, r, Na(m), l)
            : void 0;
        $d(_) ||
          ($d(s) ||
            ((function Jw(e) {
              return !(2 & ~e);
            })(m) &&
              (s = cb(f, null, n, r, c, l))),
          (function jD(e, t, n, o, r) {
            if (t) r ? e.addClass(n, o) : e.removeClass(n, o);
            else {
              let s = -1 === o.indexOf("-") ? void 0 : Ed.DashCase;
              null == r
                ? e.removeStyle(n, o, s)
                : ("string" == typeof r &&
                    r.endsWith("!important") &&
                    ((r = r.slice(0, -10)), (s |= Ed.Important)),
                  e.setStyle(n, o, r, s));
            }
          })(o, l, lr(gn(), n), r, s));
      }
      function cb(e, t, n, o, r, s) {
        const l = null === t;
        let c;
        for (; r > 0; ) {
          const f = e[r],
            m = Array.isArray(f),
            _ = m ? f[1] : f,
            C = null === _;
          let w = n[r + 1];
          w === xe && (w = C ? Qe : void 0);
          let I = C ? Rr(w, o) : _ === o ? w : void 0;
          if ((m && !$d(I) && (I = Rr(f, o)), $d(I) && ((c = I), l))) return c;
          const R = e[r + 1];
          r = l ? gs(R) : Na(R);
        }
        if (null !== t) {
          let f = s ? t.residualClasses : t.residualStyles;
          null != f && (c = Rr(f, o));
        }
        return c;
      }
      function $d(e) {
        return void 0 !== e;
      }
      function db(e, t) {
        return !!(e.flags & (t ? 8 : 16));
      }
      function fb(e, t, n) {
        no(zn, Eo, Ia(j(), e, t, n), !0);
      }
      function pb() {
        return j()[ht][nt];
      }
      class SA {
        destroy(t) {}
        updateValue(t, n) {}
        swap(t, n) {
          const o = Math.min(t, n),
            r = Math.max(t, n),
            s = this.detach(r);
          if (r - o > 1) {
            const l = this.detach(o);
            (this.attach(o, s), this.attach(r, l));
          } else this.attach(o, s);
        }
        move(t, n) {
          this.attach(n, this.detach(t));
        }
      }
      function Nm(e, t, n, o, r) {
        return e === n && Object.is(t, o)
          ? 1
          : Object.is(r(e, t), r(n, o))
            ? -1
            : 0;
      }
      function Rm(e, t, n, o) {
        return !(
          void 0 === t ||
          !t.has(o) ||
          (e.attach(n, t.get(o)), t.delete(o), 0)
        );
      }
      function hb(e, t, n, o, r) {
        if (Rm(e, t, o, n(o, r))) e.updateValue(o, r);
        else {
          const s = e.create(o, r);
          e.attach(o, s);
        }
      }
      function mb(e, t, n, o) {
        const r = new Set();
        for (let s = t; s <= n; s++) r.add(o(s, e.at(s)));
        return r;
      }
      class gb {
        kvMap = new Map();
        _vMap = void 0;
        has(t) {
          return this.kvMap.has(t);
        }
        delete(t) {
          if (!this.has(t)) return !1;
          const n = this.kvMap.get(t);
          return (
            void 0 !== this._vMap && this._vMap.has(n)
              ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n))
              : this.kvMap.delete(t),
            !0
          );
        }
        get(t) {
          return this.kvMap.get(t);
        }
        set(t, n) {
          if (this.kvMap.has(t)) {
            let o = this.kvMap.get(t);
            void 0 === this._vMap && (this._vMap = new Map());
            const r = this._vMap;
            for (; r.has(o); ) o = r.get(o);
            r.set(o, n);
          } else this.kvMap.set(t, n);
        }
        forEach(t) {
          for (let [n, o] of this.kvMap)
            if ((t(o, n), void 0 !== this._vMap)) {
              const r = this._vMap;
              for (; r.has(o); ) ((o = r.get(o)), t(o, n));
            }
        }
      }
      function _b(e, t) {
        mi("NgControlFlow");
        const n = j(),
          o = di(),
          r = n[o] !== xe ? n[o] : -1,
          s = -1 !== r ? zd(n, pe + r) : void 0;
        if (en(n, o, e)) {
          const c = ie(null);
          try {
            if ((void 0 !== s && Th(s, 0), -1 !== e)) {
              const f = pe + e,
                m = zd(n, f),
                _ = Lm(n[z], f),
                C = _a(m, _.tView.ssrId);
              ha(m, da(n, _, t, { dehydratedView: C }), 0, us(_, C));
            }
          } finally {
            ie(c);
          }
        } else if (void 0 !== s) {
          const c = Zv(s, 0);
          void 0 !== c && (c[nt] = t);
        }
      }
      class AA {
        lContainer;
        $implicit;
        $index;
        constructor(t, n, o) {
          ((this.lContainer = t), (this.$implicit = n), (this.$index = o));
        }
        get $count() {
          return this.lContainer.length - Rt;
        }
      }
      function vb(e) {
        return e;
      }
      function yb(e, t) {
        return t;
      }
      class kA {
        hasEmptyBlock;
        trackByFn;
        liveCollection;
        constructor(t, n, o) {
          ((this.hasEmptyBlock = t),
            (this.trackByFn = n),
            (this.liveCollection = o));
        }
      }
      function bb(e, t, n, o, r, s, l, c, f, m, _, C, w) {
        mi("NgControlFlow");
        const I = j(),
          R = be(),
          B = void 0 !== f,
          Z = j(),
          q = c ? l.bind(Z[ht][nt]) : l,
          U = new kA(B, q);
        ((Z[pe + e] = U),
          pu(I, R, e + 1, t, n, o, r, ci(R.consts, s)),
          B && pu(I, R, e + 2, f, m, _, C, ci(R.consts, w)));
      }
      class xA extends SA {
        lContainer;
        hostLView;
        templateTNode;
        operationsCounter = void 0;
        needsIndexUpdate = !1;
        constructor(t, n, o) {
          (super(),
            (this.lContainer = t),
            (this.hostLView = n),
            (this.templateTNode = o));
        }
        get length() {
          return this.lContainer.length - Rt;
        }
        at(t) {
          return this.getLView(t)[nt].$implicit;
        }
        attach(t, n) {
          const o = n[Cn];
          ((this.needsIndexUpdate ||= t !== this.length),
            ha(this.lContainer, n, t, us(this.templateTNode, o)));
        }
        detach(t) {
          return (
            (this.needsIndexUpdate ||= t !== this.length - 1),
            (function NA(e, t) {
              return Jl(e, t);
            })(this.lContainer, t)
          );
        }
        create(t, n) {
          const o = _a(this.lContainer, this.templateTNode.tView.ssrId),
            r = da(
              this.hostLView,
              this.templateTNode,
              new AA(this.lContainer, n, t),
              { dehydratedView: o },
            );
          return (this.operationsCounter?.recordCreate(), r);
        }
        destroy(t) {
          (Kl(t[z], t), this.operationsCounter?.recordDestroy());
        }
        updateValue(t, n) {
          this.getLView(t)[nt].$implicit = n;
        }
        reset() {
          ((this.needsIndexUpdate = !1), this.operationsCounter?.reset());
        }
        updateIndexes() {
          if (this.needsIndexUpdate)
            for (let t = 0; t < this.length; t++)
              this.getLView(t)[nt].$index = t;
        }
        getLView(t) {
          return (function RA(e, t) {
            return Zv(e, t);
          })(this.lContainer, t);
        }
      }
      function Cb(e) {
        const t = ie(null),
          n = gn();
        try {
          const o = j(),
            r = o[z],
            s = o[n],
            l = n + 1,
            c = zd(o, l);
          if (void 0 === s.liveCollection) {
            const m = Lm(r, l);
            s.liveCollection = new xA(c, o, m);
          } else s.liveCollection.reset();
          const f = s.liveCollection;
          if (
            ((function wA(e, t, n) {
              let o,
                r,
                s = 0,
                l = e.length - 1;
              if (Array.isArray(t)) {
                let f = t.length - 1;
                for (; s <= l && s <= f; ) {
                  const m = e.at(s),
                    _ = t[s],
                    C = Nm(s, m, s, _, n);
                  if (0 !== C) {
                    (C < 0 && e.updateValue(s, _), s++);
                    continue;
                  }
                  const w = e.at(l),
                    I = t[f],
                    R = Nm(l, w, f, I, n);
                  if (0 !== R) {
                    (R < 0 && e.updateValue(l, I), l--, f--);
                    continue;
                  }
                  const B = n(s, m),
                    Z = n(l, w),
                    q = n(s, _);
                  if (Object.is(q, Z)) {
                    const U = n(f, I);
                    (Object.is(U, B)
                      ? (e.swap(s, l), e.updateValue(l, I), f--, l--)
                      : e.move(l, s),
                      e.updateValue(s, _),
                      s++);
                  } else if (
                    ((o ??= new gb()), (r ??= mb(e, s, l, n)), Rm(e, o, s, q))
                  )
                    (e.updateValue(s, _), s++, l++);
                  else if (r.has(q)) (o.set(B, e.detach(s)), l--);
                  else {
                    const U = e.create(s, t[s]);
                    (e.attach(s, U), s++, l++);
                  }
                }
                for (; s <= f; ) (hb(e, o, n, s, t[s]), s++);
              } else if (null != t) {
                const f = t[Symbol.iterator]();
                let m = f.next();
                for (; !m.done && s <= l; ) {
                  const _ = e.at(s),
                    C = m.value,
                    w = Nm(s, _, s, C, n);
                  if (0 !== w)
                    (w < 0 && e.updateValue(s, C), s++, (m = f.next()));
                  else {
                    ((o ??= new gb()), (r ??= mb(e, s, l, n)));
                    const I = n(s, C);
                    if (Rm(e, o, s, I))
                      (e.updateValue(s, C), s++, l++, (m = f.next()));
                    else if (r.has(I)) {
                      const R = n(s, _);
                      (o.set(R, e.detach(s)), l--);
                    } else
                      (e.attach(s, e.create(s, C)), s++, l++, (m = f.next()));
                  }
                }
                for (; !m.done; )
                  (hb(e, o, n, e.length, m.value), (m = f.next()));
              }
              for (; s <= l; ) e.destroy(e.detach(l--));
              o?.forEach((f) => {
                e.destroy(f);
              });
            })(f, e, s.trackByFn),
            f.updateIndexes(),
            s.hasEmptyBlock)
          ) {
            const m = di(),
              _ = 0 === f.length;
            if (en(o, m, _)) {
              const C = n + 2,
                w = zd(o, C);
              if (_) {
                const I = Lm(r, C),
                  R = _a(w, I.tView.ssrId);
                ha(w, da(o, I, void 0, { dehydratedView: R }), 0, us(I, R));
              } else Th(w, 0);
            }
          }
        } finally {
          ie(t);
        }
      }
      function zd(e, t) {
        return e[t];
      }
      function Lm(e, t) {
        return Po(e, t);
      }
      function Wd(e, t, n, o) {
        const r = j(),
          s = be(),
          l = pe + e,
          c = r[ve],
          f = s.firstCreatePass ? Dy(l, s, r, t, fh, ll(), n, o) : s.data[l],
          m = Eb(s, r, f, c, t, e);
        r[l] = m;
        const _ = Rs(f);
        return (
          Ei(f, !0),
          Cv(c, m, f),
          !vr(f) && cr() && Md(s, r, m, f),
          (0 ===
            (function Sf() {
              return Ee.lFrame.elementDepthCount;
            })() ||
            _) &&
            hi(m, r),
          (function wf() {
            Ee.lFrame.elementDepthCount++;
          })(),
          _ && (bd(s, r, f), Qp(s, f, r)),
          null !== o && dh(r, f),
          Wd
        );
      }
      function Xd() {
        let e = Pe();
        ul() ? cl() : ((e = e.parent), Ei(e, !1));
        const t = e;
        ((function kf(e) {
          return Ee.skipHydrationRootTNode === e;
        })(t) &&
          (function Lf() {
            Ee.skipHydrationRootTNode = null;
          })(),
          (function Af() {
            Ee.lFrame.elementDepthCount--;
          })());
        const n = be();
        return (
          n.firstCreatePass && Ty(n, t),
          null != t.classesWithoutHost &&
            (function zf(e) {
              return !!(8 & e.flags);
            })(t) &&
            wm(n, t, j(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Wf(e) {
              return !!(16 & e.flags);
            })(t) &&
            wm(n, t, j(), t.stylesWithoutHost, !1),
          Xd
        );
      }
      function Om(e, t, n, o) {
        return (Wd(e, t, n, o), Xd(), Om);
      }
      let Eb = (e, t, n, o, r, s) => (
        Fn(!0),
        _d(
          o,
          r,
          (function gc() {
            return Ee.lFrame.currentNamespace;
          })(),
        )
      );
      function Zd(e, t, n) {
        const o = j(),
          r = be(),
          s = e + pe,
          l = r.firstCreatePass
            ? (function FA(e, t, n, o, r) {
                const s = t.consts,
                  l = ci(s, o),
                  c = ma(t, e, 8, "ng-container", l);
                null !== l && Gh(c, l, !0);
                const f = ci(s, r);
                return (
                  ll() && Uh(t, n, c, f, fh),
                  (c.mergedAttrs = fr(c.mergedAttrs, c.attrs)),
                  null !== t.queries && t.queries.elementStart(t, c),
                  c
                );
              })(s, r, o, t, n)
            : r.data[s];
        Ei(l, !0);
        const c = Mb(r, o, l, e);
        return (
          (o[s] = c),
          cr() && Md(r, o, c, l),
          hi(c, o),
          Rs(l) && (bd(r, o, l), Qp(r, l, o)),
          null != n && dh(o, l),
          Zd
        );
      }
      function Qd() {
        let e = Pe();
        const t = be();
        return (
          ul() ? cl() : ((e = e.parent), Ei(e, !1)),
          t.firstCreatePass && (gl(t, e), Ns(e) && t.queries.elementEnd(e)),
          Qd
        );
      }
      function Fm(e, t, n) {
        return (Zd(e, t, n), Qd(), Fm);
      }
      let Mb = (e, t, n, o) => (Fn(!0), sh(t[ve], ""));
      function Ib() {
        return j();
      }
      function Pm(e, t, n) {
        const o = j();
        return (en(o, di(), t) && gi(be(), dt(), o, e, t, o[ve], n, !0), Pm);
      }
      function jm(e, t, n) {
        const o = j();
        if (en(o, di(), t)) {
          const s = be(),
            l = dt();
          gi(s, l, o, e, t, wv(fl(s.data), l, o), n, !0);
        }
        return jm;
      }
      const _s = void 0;
      var VA = [
        "en",
        [["a", "p"], ["AM", "PM"], _s],
        [["AM", "PM"], _s, _s],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        _s,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
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
          ],
        ],
        _s,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", _s, "{1} 'at' {0}", _s],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function BA(e) {
          const t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let La = {};
      function GA(e, t, n) {
        ("string" != typeof t && ((n = t), (t = e[Oa.LocaleId])),
          (t = t.toLowerCase().replace(/_/g, "-")),
          (La[t] = e),
          n && (La[t][Oa.ExtraData] = n));
      }
      function Bm(e) {
        const t = (function UA(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Tb(t);
        if (n) return n;
        const o = t.split("-")[0];
        if (((n = Tb(o)), n)) return n;
        if ("en" === o) return VA;
        throw new te(701, !1);
      }
      function Db(e) {
        return Bm(e)[Oa.PluralCase];
      }
      function Tb(e) {
        return (
          e in La ||
            (La[e] =
              $t.ng &&
              $t.ng.common &&
              $t.ng.common.locales &&
              $t.ng.common.locales[e]),
          La[e]
        );
      }
      var Oa = (function (e) {
        return (
          (e[(e.LocaleId = 0)] = "LocaleId"),
          (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (e[(e.DaysFormat = 3)] = "DaysFormat"),
          (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
          (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
          (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
          (e[(e.Eras = 7)] = "Eras"),
          (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (e[(e.WeekendRange = 9)] = "WeekendRange"),
          (e[(e.DateFormat = 10)] = "DateFormat"),
          (e[(e.TimeFormat = 11)] = "TimeFormat"),
          (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
          (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
          (e[(e.NumberFormats = 14)] = "NumberFormats"),
          (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
          (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
          (e[(e.CurrencyName = 17)] = "CurrencyName"),
          (e[(e.Currencies = 18)] = "Currencies"),
          (e[(e.Directionality = 19)] = "Directionality"),
          (e[(e.PluralCase = 20)] = "PluralCase"),
          (e[(e.ExtraData = 21)] = "ExtraData"),
          e
        );
      })(Oa || {});
      const Kd = "en-US";
      let Sb = Kd;
      function zb(e, t, n) {
        return function o(r) {
          if (r === Function) return n;
          Yl(Ci(e) ? Ln(e.index, t) : t, 5);
          const l = t[nt];
          let c = Wb(t, l, n, r),
            f = o.__ngNextListenerFn__;
          for (; f; ) ((c = Wb(t, l, f, r) && c), (f = f.__ngNextListenerFn__));
          return c;
        };
      }
      function Wb(e, t, n, o) {
        const r = ie(null);
        try {
          return (ot(6, t, n), !1 !== n(o));
        } catch (s) {
          return (
            (function kk(e, t) {
              const n = e[it],
                o = n ? n.get(Mi, null) : null;
              o && o.handleError(t);
            })(e, s),
            !1
          );
        } finally {
          (ot(7, t, n), ie(r));
        }
      }
      function Xb(e, t, n, o, r, s) {
        const c = t[z],
          _ = t[n][c.data[n].outputs[o]],
          C = c.firstCreatePass ? rl(c) : null,
          w = ol(t),
          I = _.subscribe(s),
          R = w.length;
        (w.push(s, I), C && C.push(r, e.index, R, -(R + 1)));
      }
      function Um(e, t, n, o) {
        const r = j(),
          s = be(),
          l = Pe();
        return (Hm(s, r, r[ve], l, e, t, o), Um);
      }
      function Hm(e, t, n, o, r, s, l) {
        const c = Rs(o),
          m = e.firstCreatePass ? rl(e) : null,
          _ = ol(t);
        let C = !0;
        if (3 & o.type || l) {
          const w = Rn(o, t),
            I = l ? l(w) : w,
            R = _.length,
            B = l ? (q) => l(Ye(q[o.index])) : o.index;
          let Z = null;
          if (
            (!l &&
              c &&
              (Z = (function xk(e, t, n, o) {
                const r = e.cleanup;
                if (null != r)
                  for (let s = 0; s < r.length - 1; s += 2) {
                    const l = r[s];
                    if (l === n && r[s + 1] === o) {
                      const c = t[Br],
                        f = r[s + 2];
                      return c.length > f ? c[f] : null;
                    }
                    "string" == typeof l && (s += 2);
                  }
                return null;
              })(e, t, r, o.index)),
            null !== Z)
          )
            (((Z.__ngLastListenerFn__ || Z).__ngNextListenerFn__ = s),
              (Z.__ngLastListenerFn__ = s),
              (C = !1));
          else {
            !(function XM(e, t, n, o) {
              x_(e, t, n, o);
            })(t, I, r, (s = zb(o, t, s)));
            const q = n.listen(I, r, s);
            (_.push(s, q), m && m.push(r, B, R, R + 1));
          }
        } else s = zb(o, t, s);
        if (C) {
          const w = o.outputs?.[r],
            I = o.hostDirectiveOutputs?.[r];
          if (I && I.length)
            for (let R = 0; R < I.length; R += 2)
              Xb(o, t, I[R], I[R + 1], r, s);
          if (w && w.length) for (const R of w) Xb(o, t, R, r, r, s);
        }
      }
      function Qb(e = 1) {
        return (function Bf(e) {
          return (Ee.lFrame.contextLView = (function ec(e, t) {
            for (; e > 0; ) ((t = t[ir]), e--);
            return t;
          })(e, Ee.lFrame.contextLView))[nt];
        })(e);
      }
      function Nk(e, t) {
        let n = null;
        const o = (function aD(e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (!(1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let r = 0; r < t.length; r++) {
          const s = t[r];
          if ("*" !== s) {
            if (null === o ? mv(e, s, !0) : cD(o, s)) return r;
          } else n = r;
        }
        return n;
      }
      function Kb(e) {
        const t = j()[ht][sn];
        if (!t.projection) {
          const o = (t.projection = (function qo(e, t) {
              const n = [];
              for (let o = 0; o < e; o++) n.push(t);
              return n;
            })(e ? e.length : 1, null)),
            r = o.slice();
          let s = t.child;
          for (; null !== s; ) {
            if (128 !== s.type) {
              const l = e ? Nk(s, e) : 0;
              null !== l &&
                (r[l] ? (r[l].projectionNext = s) : (o[l] = s), (r[l] = s));
            }
            s = s.next;
          }
        }
      }
      function Yb(e, t = 0, n, o, r, s) {
        const l = j(),
          c = be(),
          f = o ? e + 1 : null;
        null !== f && pu(l, c, f, o, r, s, null, n);
        const m = ma(c, pe + e, 16, null, n || null);
        (null === m.projection && (m.projection = t), cl());
        const C = !l[Cn] || Bo();
        null === l[ht][sn].projection[m.projection] && null !== f
          ? (function Rk(e, t, n) {
              const o = pe + n,
                r = t.data[o],
                s = e[o],
                l = _a(s, r.tView.ssrId);
              ha(s, da(e, r, void 0, { dehydratedView: l }), 0, us(r, l));
            })(l, c, f)
          : C &&
            !vr(m) &&
            (function FD(e, t, n) {
              Pv(t[ve], 0, t, n, bh(e, n, t), Nv(n.parent || t[sn], n, t));
            })(c, l, m);
      }
      function $m(e, t, n) {
        return (ef(e, "", t, "", n), $m);
      }
      function ef(e, t, n, o, r) {
        const s = j(),
          l = Ia(s, t, n, o);
        return (l !== xe && gi(be(), dt(), s, e, l, s[ve], r, !1), ef);
      }
      function sC(e, t, n, o) {
        !(function jy(e, t, n, o) {
          const r = be();
          if (r.firstCreatePass) {
            const s = Pe();
            (Vy(r, new Ly(t, n, o), s.index),
              (function N1(e, t) {
                const n = e.contentQueries || (e.contentQueries = []);
                t !== (n.length ? n[n.length - 1] : -1) &&
                  n.push(e.queries.length - 1, t);
              })(r, e),
              !(2 & ~n) && (r.staticContentQueries = !0));
          }
          return Fy(r, j(), n);
        })(e, t, n, o);
      }
      function aC(e, t, n) {
        Py(e, t, n);
      }
      function lC(e) {
        const t = j(),
          n = be(),
          o = pl();
        js(o + 1);
        const r = Yh(n, o);
        if (
          e.dirty &&
          (function If(e) {
            return !(4 & ~e[_e]);
          })(t) === !(2 & ~r.metadata.flags)
        ) {
          if (null === r.matches) e.reset([]);
          else {
            const s = Gy(t, o);
            (e.reset(s, E), e.notifyOnChanges());
          }
          return !0;
        }
        return !1;
      }
      function uC() {
        return Kh(j(), pl());
      }
      function cC(e, t, n, o) {
        !(function zy(e, t) {
          const n = e[Se];
          ((n._lView = j()),
            (n._queryIndex = t),
            (n._queryList = Kh(n._lView, t)),
            n._queryList.onDirty(() => n._dirtyCounter.update((o) => o + 1)));
        })(e, Py(t, n, o));
      }
      function dC(e = 1) {
        js(pl() + e);
      }
      function fC(e) {
        return jo(oc(), pe + e);
      }
      function EC(e, t = "") {
        const n = j(),
          o = be(),
          r = e + pe,
          s = o.firstCreatePass ? ma(o, r, 1, t, null) : o.data[r],
          l = MC(o, n, s, t, e);
        ((n[r] = l), cr() && Md(o, n, l, s), Ei(s, !1));
      }
      let MC = (e, t, n, o, r) => (
        Fn(!0),
        (function rh(e, t) {
          return e.createText(t);
        })(t[ve], o)
      );
      function zm(e) {
        return (tf("", e, ""), zm);
      }
      function tf(e, t, n) {
        const o = j(),
          r = Ia(o, e, t, n);
        return (r !== xe && Wo(o, gn(), r), tf);
      }
      function Wm(e, t, n, o, r) {
        const s = j(),
          l = Da(s, e, t, n, o, r);
        return (l !== xe && Wo(s, gn(), l), Wm);
      }
      function Xm(e, t, n, o, r, s, l) {
        const c = j(),
          f = (function Ta(e, t, n, o, r, s, l, c) {
            const m = jd(e, Ki(), n, r, l);
            return (Yi(3), m ? t + ye(n) + o + ye(r) + s + ye(l) + c : xe);
          })(c, e, t, n, o, r, s, l);
        return (f !== xe && Wo(c, gn(), f), Xm);
      }
      function Wo(e, t, n) {
        const o = lr(t, e);
        !(function _v(e, t, n) {
          e.setValue(t, n);
        })(e[ve], o, n);
      }
      function Zm(e, t, n) {
        V(t) && (t = t());
        const o = j();
        return (en(o, di(), t) && gi(be(), dt(), o, e, t, o[ve], n, !1), Zm);
      }
      function kC(e, t) {
        const n = V(e);
        return (n && e.set(t), n);
      }
      function Qm(e, t) {
        const n = j(),
          o = be(),
          r = Pe();
        return (Hm(o, n, n[ve], r, e, t), Qm);
      }
      const xC = {};
      function Km(e) {
        const t = be(),
          n = j(),
          o = e + pe;
        return (Ei(ma(t, o, 128, null, null), !1), qa(t, n, o, xC), Km);
      }
      function NC(e) {
        return (mi("NgLet"), qa(be(), j(), gn(), e), e);
      }
      function RC(e) {
        const n = jo(oc(), pe + e);
        if (n === xC) throw new te(314, !1);
        return n;
      }
      function Ym(e, t, n, o, r) {
        if (((e = ge(e)), Array.isArray(e)))
          for (let s = 0; s < e.length; s++) Ym(e[s], t, n, o, r);
        else {
          const s = be(),
            l = j(),
            c = Pe();
          let f = Ni(e) ? e : ge(e.provide);
          const m = Qa(e),
            _ = 1048575 & c.providerIndexes,
            C = c.directiveStart,
            w = c.providerIndexes >> 20;
          if (Ni(e) || !e.multi) {
            const I = new Hr(m, r, ya),
              R = qm(f, t, r ? _ : _ + w, C);
            -1 === R
              ? (Ml(Us(c, l), s, f),
                Jm(s, e, t.length),
                t.push(f),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                n.push(I),
                l.push(I))
              : ((n[R] = I), (l[R] = I));
          } else {
            const I = qm(f, t, _ + w, C),
              R = qm(f, t, _, _ + w),
              Z = R >= 0 && n[R];
            if ((r && !Z) || (!r && !(I >= 0 && n[I]))) {
              Ml(Us(c, l), s, f);
              const q = (function Kk(e, t, n, o, r) {
                const s = new Hr(e, n, ya);
                return (
                  (s.multi = []),
                  (s.index = t),
                  (s.componentProviders = 0),
                  LC(s, r, o && !n),
                  s
                );
              })(r ? Qk : Zk, n.length, r, o, m);
              (!r && Z && (n[R].providerFactory = q),
                Jm(s, e, t.length, 0),
                t.push(f),
                c.directiveStart++,
                c.directiveEnd++,
                r && (c.providerIndexes += 1048576),
                n.push(q),
                l.push(q));
            } else Jm(s, e, I > -1 ? I : R, LC(n[r ? R : I], m, !r && o));
            !r && o && Z && n[R].componentProviders++;
          }
        }
      }
      function Jm(e, t, n, o) {
        const r = Ni(t),
          s = (function Za(e) {
            return !!e.useClass;
          })(t);
        if (r || s) {
          const f = (s ? ge(t.useClass) : t).prototype.ngOnDestroy;
          if (f) {
            const m = e.destroyHooks || (e.destroyHooks = []);
            if (!r && t.multi) {
              const _ = m.indexOf(n);
              -1 === _ ? m.push(n, [o, f]) : m[_ + 1].push(o, f);
            } else m.push(n, f);
          }
        }
      }
      function LC(e, t, n) {
        return (n && e.componentProviders++, e.multi.push(t) - 1);
      }
      function qm(e, t, n, o) {
        for (let r = n; r < o; r++) if (t[r] === e) return r;
        return -1;
      }
      function Zk(e, t, n, o, r) {
        return eg(this.multi, []);
      }
      function Qk(e, t, n, o, r) {
        const s = this.multi;
        let l;
        if (this.providerFactory) {
          const c = this.providerFactory.componentProviders,
            f = Wr(o, o[z], this.providerFactory.index, r);
          ((l = f.slice(0, c)), eg(s, l));
          for (let m = c; m < f.length; m++) l.push(f[m]);
        } else ((l = []), eg(s, l));
        return l;
      }
      function eg(e, t) {
        for (let n = 0; n < e.length; n++) t.push((0, e[n])());
        return t;
      }
      function OC(e, t = []) {
        return (n) => {
          n.providersResolver = (o, r) =>
            (function Xk(e, t, n) {
              const o = be();
              if (o.firstCreatePass) {
                const r = ii(e);
                (Ym(n, o.data, o.blueprint, r, !0),
                  Ym(t, o.data, o.blueprint, r, !1));
              }
            })(o, r ? r(e) : e, t);
        };
      }
      function PC(e, t, n) {
        const o = On() + e,
          r = j();
        return r[o] === xe ? Co(r, o, n ? t.call(n) : t()) : fu(r, o);
      }
      function jC(e, t, n, o) {
        return $C(j(), On(), e, t, n, o);
      }
      function BC(e, t, n, o, r) {
        return zC(j(), On(), e, t, n, o, r);
      }
      function VC(e, t, n, o, r, s) {
        return (function WC(e, t, n, o, r, s, l, c) {
          const f = t + n;
          return jd(e, f, r, s, l)
            ? Co(e, f + 3, c ? o.call(c, r, s, l) : o(r, s, l))
            : Mu(e, f + 3);
        })(j(), On(), e, t, n, o, r, s);
      }
      function GC(e, t, n, o, r, s, l) {
        return (function XC(e, t, n, o, r, s, l, c, f) {
          const m = t + n;
          return Fi(e, m, r, s, l, c)
            ? Co(e, m + 4, f ? o.call(f, r, s, l, c) : o(r, s, l, c))
            : Mu(e, m + 4);
        })(j(), On(), e, t, n, o, r, s, l);
      }
      function UC(e, t, n, o, r, s, l, c) {
        const f = On() + e,
          m = j(),
          _ = Fi(m, f, n, o, r, s);
        return en(m, f + 4, l) || _
          ? Co(m, f + 5, c ? t.call(c, n, o, r, s, l) : t(n, o, r, s, l))
          : fu(m, f + 5);
      }
      function HC(e, t, n, o, r, s, l, c, f) {
        const m = On() + e,
          _ = j(),
          C = Fi(_, m, n, o, r, s);
        return hs(_, m + 4, l, c) || C
          ? Co(_, m + 6, f ? t.call(f, n, o, r, s, l, c) : t(n, o, r, s, l, c))
          : fu(_, m + 6);
      }
      function Mu(e, t) {
        const n = e[t];
        return n === xe ? void 0 : n;
      }
      function $C(e, t, n, o, r, s) {
        const l = t + n;
        return en(e, l, r)
          ? Co(e, l + 1, s ? o.call(s, r) : o(r))
          : Mu(e, l + 1);
      }
      function zC(e, t, n, o, r, s, l) {
        const c = t + n;
        return hs(e, c, r, s)
          ? Co(e, c + 2, l ? o.call(l, r, s) : o(r, s))
          : Mu(e, c + 2);
      }
      function QC(e, t) {
        const n = be();
        let o;
        const r = e + pe;
        n.firstCreatePass
          ? ((o = (function ix(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const o = t[n];
                  if (e === o.name) return o;
                }
            })(t, n.pipeRegistry)),
            (n.data[r] = o),
            o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy))
          : (o = n.data[r]);
        const s = o.factory || (o.factory = Ui(o.type)),
          c = ke(ya);
        try {
          const f = Gs(!1),
            m = s();
          return (Gs(f), qa(n, j(), r, m), m);
        } finally {
          ke(c);
        }
      }
      function KC(e, t, n) {
        const o = e + pe,
          r = j(),
          s = jo(r, o);
        return Iu(r, o) ? $C(r, On(), t, s.transform, n, s) : s.transform(n);
      }
      function YC(e, t, n, o) {
        const r = e + pe,
          s = j(),
          l = jo(s, r);
        return Iu(s, r)
          ? zC(s, On(), t, l.transform, n, o, l)
          : l.transform(n, o);
      }
      function Iu(e, t) {
        return e[z].data[t].pure;
      }
      function JC(e, t) {
        return Td(e, t);
      }
      class gE {
        full;
        major;
        minor;
        patch;
        constructor(t) {
          this.full = t;
          const n = t.split(".");
          ((this.major = n[0]),
            (this.minor = n[1]),
            (this.patch = n.slice(2).join(".")));
        }
      }
      const Lx = new gE("19.2.14");
      class Ox {
        ngModuleFactory;
        componentFactories;
        constructor(t, n) {
          ((this.ngModuleFactory = t), (this.componentFactories = n));
        }
      }
      let Fx = (() => {
          class e {
            compileModuleSync(n) {
              return new tm(n);
            }
            compileModuleAsync(n) {
              return Promise.resolve(this.compileModuleSync(n));
            }
            compileModuleAndAllComponentsSync(n) {
              const o = this.compileModuleSync(n),
                s = yo(mn(n).declarations).reduce((l, c) => {
                  const f = Oe(c);
                  return (f && l.push(new cu(f)), l);
                }, []);
              return new Ox(o, s);
            }
            compileModuleAndAllComponentsAsync(n) {
              return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
            }
            clearCache() {}
            clearCacheFor(n) {}
            getModuleId(n) {}
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
          }
          return e;
        })(),
        Bx = (() => {
          class e {
            zone = fe(gt);
            changeDetectionScheduler = fe(Qn);
            applicationRef = fe(Ii);
            _onMicrotaskEmptySubscription;
            initialize() {
              this._onMicrotaskEmptySubscription ||
                (this._onMicrotaskEmptySubscription =
                  this.zone.onMicrotaskEmpty.subscribe({
                    next: () => {
                      this.changeDetectionScheduler.runningTick ||
                        this.zone.run(() => {
                          this.applicationRef.tick();
                        });
                    },
                  }));
            }
            ngOnDestroy() {
              this._onMicrotaskEmptySubscription?.unsubscribe();
            }
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
          }
          return e;
        })();
      function rg({
        ngZoneFactory: e,
        ignoreChangesOutsideZone: t,
        scheduleInRootZone: n,
      }) {
        return (
          (e ??= () => new gt({ ...sg(), scheduleInRootZone: n })),
          [
            { provide: gt, useFactory: e },
            {
              provide: ni,
              multi: !0,
              useFactory: () => {
                const o = fe(Bx, { optional: !0 });
                return () => o.initialize();
              },
            },
            {
              provide: ni,
              multi: !0,
              useFactory: () => {
                const o = fe(Gx);
                return () => {
                  o.initialize();
                };
              },
            },
            !0 === t ? { provide: xl, useValue: !0 } : [],
            { provide: qr, useValue: n ?? Jr },
          ]
        );
      }
      function sg(e) {
        return {
          enableLongStackTrace: !1,
          shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
          shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
        };
      }
      let Gx = (() => {
          class e {
            subscription = new vi.yU();
            initialized = !1;
            zone = fe(gt);
            pendingTasks = fe(_o);
            initialize() {
              if (this.initialized) return;
              this.initialized = !0;
              let n = null;
              (!this.zone.isStable &&
                !this.zone.hasPendingMacrotasks &&
                !this.zone.hasPendingMicrotasks &&
                (n = this.pendingTasks.add()),
                this.zone.runOutsideAngular(() => {
                  this.subscription.add(
                    this.zone.onStable.subscribe(() => {
                      (gt.assertNotInAngularZone(),
                        queueMicrotask(() => {
                          null !== n &&
                            !this.zone.hasPendingMacrotasks &&
                            !this.zone.hasPendingMicrotasks &&
                            (this.pendingTasks.remove(n), (n = null));
                        }));
                    }),
                  );
                }),
                this.subscription.add(
                  this.zone.onUnstable.subscribe(() => {
                    (gt.assertInAngularZone(), (n ??= this.pendingTasks.add()));
                  }),
                ));
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
          }
          return e;
        })(),
        Tu = (() => {
          class e {
            appRef = fe(Ii);
            taskService = fe(_o);
            ngZone = fe(gt);
            zonelessEnabled = fe(Zs);
            tracing = fe(qs, { optional: !0 });
            disableScheduling = fe(xl, { optional: !0 }) ?? !1;
            zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
            schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
            subscriptions = new vi.yU();
            angularZoneId = this.zoneIsDefined
              ? this.ngZone._inner?.get(mr)
              : null;
            scheduleInRootZone =
              !this.zonelessEnabled &&
              this.zoneIsDefined &&
              (fe(qr, { optional: !0 }) ?? !1);
            cancelScheduledCallback = null;
            useMicrotaskScheduler = !1;
            runningTick = !1;
            pendingRenderTaskId = null;
            constructor() {
              (this.subscriptions.add(
                this.appRef.afterTick.subscribe(() => {
                  this.runningTick || this.cleanup();
                }),
              ),
                this.subscriptions.add(
                  this.ngZone.onUnstable.subscribe(() => {
                    this.runningTick || this.cleanup();
                  }),
                ),
                (this.disableScheduling ||=
                  !this.zonelessEnabled &&
                  (this.ngZone instanceof Ks || !this.zoneIsDefined)));
            }
            notify(n) {
              if (!this.zonelessEnabled && 5 === n) return;
              let o = !1;
              switch (n) {
                case 0:
                  this.appRef.dirtyFlags |= 2;
                  break;
                case 3:
                case 2:
                case 4:
                case 5:
                case 1:
                  this.appRef.dirtyFlags |= 4;
                  break;
                case 6:
                case 13:
                  ((this.appRef.dirtyFlags |= 2), (o = !0));
                  break;
                case 12:
                  ((this.appRef.dirtyFlags |= 16), (o = !0));
                  break;
                case 11:
                  o = !0;
                  break;
                default:
                  this.appRef.dirtyFlags |= 8;
              }
              if (
                ((this.appRef.tracingSnapshot =
                  this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null),
                !this.shouldScheduleTick(o))
              )
                return;
              const r = this.useMicrotaskScheduler ? Nl : ip;
              ((this.pendingRenderTaskId = this.taskService.add()),
                (this.cancelScheduledCallback = this.scheduleInRootZone
                  ? Zone.root.run(() => r(() => this.tick()))
                  : this.ngZone.runOutsideAngular(() => r(() => this.tick()))));
            }
            shouldScheduleTick(n) {
              return !(
                (this.disableScheduling && !n) ||
                this.appRef.destroyed ||
                null !== this.pendingRenderTaskId ||
                this.runningTick ||
                this.appRef._runningTick ||
                (!this.zonelessEnabled &&
                  this.zoneIsDefined &&
                  Zone.current.get(mr + this.angularZoneId))
              );
            }
            tick() {
              if (this.runningTick || this.appRef.destroyed) return;
              if (0 === this.appRef.dirtyFlags) return void this.cleanup();
              !this.zonelessEnabled &&
                7 & this.appRef.dirtyFlags &&
                (this.appRef.dirtyFlags |= 1);
              const n = this.taskService.add();
              try {
                this.ngZone.run(
                  () => {
                    ((this.runningTick = !0), this.appRef._tick());
                  },
                  void 0,
                  this.schedulerTickApplyArgs,
                );
              } catch (o) {
                throw (this.taskService.remove(n), o);
              } finally {
                this.cleanup();
              }
              ((this.useMicrotaskScheduler = !0),
                Nl(() => {
                  ((this.useMicrotaskScheduler = !1),
                    this.taskService.remove(n));
                }));
            }
            ngOnDestroy() {
              (this.subscriptions.unsubscribe(), this.cleanup());
            }
            cleanup() {
              if (
                ((this.runningTick = !1),
                this.cancelScheduledCallback?.(),
                (this.cancelScheduledCallback = null),
                null !== this.pendingRenderTaskId)
              ) {
                const n = this.pendingRenderTaskId;
                ((this.pendingRenderTaskId = null), this.taskService.remove(n));
              }
            }
            static ɵfac = function (o) {
              return new (o || e)();
            };
            static ɵprov = x({ token: e, factory: e.ɵfac, providedIn: "root" });
          }
          return e;
        })();
      const lg = new de("", {
          providedIn: "root",
          factory: () =>
            fe(lg, W.Optional | W.SkipSelf) ||
            (function Ux() {
              return (typeof $localize < "u" && $localize.locale) || Kd;
            })(),
        }),
        Hx = new de("", { providedIn: "root", factory: () => "USD" }),
        af = new de(""),
        Zx = new de("");
      function Su(e) {
        return !e.moduleRef;
      }
      let Mr = null;
      function eN() {
        return !1;
      }
      let SE = (() =>
        class e {
          static __NG_ELEMENT_ID__ = tN;
        })();
      function tN(e) {
        return (function nN(e, t, n) {
          if (Ci(e) && !n) {
            const o = Ln(e.index, t);
            return new ql(o, o);
          }
          return 175 & e.type ? new ql(t[ht], t) : null;
        })(Pe(), j(), !(16 & ~e));
      }
      class xE {
        constructor() {}
        supports(t) {
          return Pd(t);
        }
        create(t) {
          return new aN(t);
        }
      }
      const sN = (e, t) => t;
      class aN {
        length = 0;
        collection;
        _linkedRecords = null;
        _unlinkedRecords = null;
        _previousItHead = null;
        _itHead = null;
        _itTail = null;
        _additionsHead = null;
        _additionsTail = null;
        _movesHead = null;
        _movesTail = null;
        _removalsHead = null;
        _removalsTail = null;
        _identityChangesHead = null;
        _identityChangesTail = null;
        _trackByFn;
        constructor(t) {
          this._trackByFn = t || sN;
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            o = this._removalsHead,
            r = 0,
            s = null;
          for (; n || o; ) {
            const l = !o || (n && n.currentIndex < RE(o, r, s)) ? n : o,
              c = RE(l, r, s),
              f = l.currentIndex;
            if (l === o) (r--, (o = o._nextRemoved));
            else if (((n = n._next), null == l.previousIndex)) r++;
            else {
              s || (s = []);
              const m = c - r,
                _ = f - r;
              if (m != _) {
                for (let w = 0; w < m; w++) {
                  const I = w < s.length ? s[w] : (s[w] = 0),
                    R = I + w;
                  _ <= R && R < m && (s[w] = I + 1);
                }
                s[l.previousIndex] = _ - m;
              }
            }
            c !== f && t(l, c, f);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Pd(t))) throw new te(900, !1);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let r,
            s,
            l,
            n = this._itHead,
            o = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let c = 0; c < this.length; c++)
              ((s = t[c]),
                (l = this._trackByFn(c, s)),
                null !== n && Object.is(n.trackById, l)
                  ? (o && (n = this._verifyReinsertion(n, s, l, c)),
                    Object.is(n.item, s) || this._addIdentityChange(n, s))
                  : ((n = this._mismatch(n, s, l, c)), (o = !0)),
                (n = n._next));
          } else
            ((r = 0),
              (function dS(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Symbol.iterator]();
                  let o;
                  for (; !(o = n.next()).done; ) t(o.value);
                }
              })(t, (c) => {
                ((l = this._trackByFn(r, c)),
                  null !== n && Object.is(n.trackById, l)
                    ? (o && (n = this._verifyReinsertion(n, c, l, r)),
                      Object.is(n.item, c) || this._addIdentityChange(n, c))
                    : ((n = this._mismatch(n, c, l, r)), (o = !0)),
                  (n = n._next),
                  r++);
              }),
              (this.length = r));
          return (this._truncate(n), (this.collection = t), this.isDirty);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            ((this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null));
          }
        }
        _mismatch(t, n, o, r) {
          let s;
          return (
            null === t ? (s = this._itTail) : ((s = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(o, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, s, r))
              : null !==
                  (t =
                    null === this._linkedRecords
                      ? null
                      : this._linkedRecords.get(o, r))
                ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                  this._moveAfter(t, s, r))
                : (t = this._addAfter(new lN(n, o), s, r)),
            t
          );
        }
        _verifyReinsertion(t, n, o, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(o, null);
          return (
            null !== s
              ? (t = this._reinsertAfter(s, t._prev, r))
              : t.currentIndex != r &&
                ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            (this._addToRemovals(this._unlink(t)), (t = n));
          }
          (null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null));
        }
        _reinsertAfter(t, n, o) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            s = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(t, n, o),
            this._addToMoves(t, o),
            t
          );
        }
        _moveAfter(t, n, o) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, o),
            this._addToMoves(t, o),
            t
          );
        }
        _addAfter(t, n, o) {
          return (
            this._insertAfter(t, n, o),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, o) {
          const r = null === n ? this._itHead : n._next;
          return (
            (t._next = r),
            (t._prev = n),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new NE()),
            this._linkedRecords.put(t),
            (t.currentIndex = o),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            o = t._next;
          return (
            null === n ? (this._itHead = o) : (n._next = o),
            null === o ? (this._itTail = n) : (o._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new NE()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class lN {
        item;
        trackById;
        currentIndex = null;
        previousIndex = null;
        _nextPrevious = null;
        _prev = null;
        _next = null;
        _prevDup = null;
        _nextDup = null;
        _prevRemoved = null;
        _nextRemoved = null;
        _nextAdded = null;
        _nextMoved = null;
        _nextIdentityChange = null;
        constructor(t, n) {
          ((this.item = t), (this.trackById = n));
        }
      }
      class uN {
        _head = null;
        _tail = null;
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let o;
          for (o = this._head; null !== o; o = o._nextDup)
            if (
              (null === n || n <= o.currentIndex) &&
              Object.is(o.trackById, t)
            )
              return o;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            o = t._nextDup;
          return (
            null === n ? (this._head = o) : (n._nextDup = o),
            null === o ? (this._tail = n) : (o._prevDup = n),
            null === this._head
          );
        }
      }
      class NE {
        map = new Map();
        put(t) {
          const n = t.trackById;
          let o = this.map.get(n);
          (o || ((o = new uN()), this.map.set(n, o)), o.add(t));
        }
        get(t, n) {
          const r = this.map.get(t);
          return r ? r.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return (this.map.get(n).remove(t) && this.map.delete(n), t);
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function RE(e, t, n) {
        const o = e.previousIndex;
        if (null === o) return o;
        let r = 0;
        return (n && o < n.length && (r = n[o]), o + t + r);
      }
      class LE {
        constructor() {}
        supports(t) {
          return t instanceof Map || am(t);
        }
        create() {
          return new cN();
        }
      }
      class cN {
        _records = new Map();
        _mapHead = null;
        _appendAfter = null;
        _previousMapHead = null;
        _changesHead = null;
        _changesTail = null;
        _additionsHead = null;
        _additionsTail = null;
        _removalsHead = null;
        _removalsTail = null;
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || am(t))) throw new te(900, !1);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (o, r) => {
              if (n && n.key === r)
                (this._maybeAddToChanges(n, o),
                  (this._appendAfter = n),
                  (n = n._next));
              else {
                const s = this._getOrCreateRecordForKey(r, o);
                n = this._insertBeforeOrAppend(n, s);
              }
            }),
            n)
          ) {
            (n._prev && (n._prev._next = null), (this._removalsHead = n));
            for (let o = n; null !== o; o = o._nextRemoved)
              (o === this._mapHead && (this._mapHead = null),
                this._records.delete(o.key),
                (o._nextRemoved = o._next),
                (o.previousValue = o.currentValue),
                (o.currentValue = null),
                (o._prev = null),
                (o._next = null));
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const o = t._prev;
            return (
              (n._next = t),
              (n._prev = o),
              (t._prev = n),
              o && (o._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const r = this._records.get(t);
            this._maybeAddToChanges(r, n);
            const s = r._prev,
              l = r._next;
            return (
              s && (s._next = l),
              l && (l._prev = s),
              (r._next = null),
              (r._prev = null),
              r
            );
          }
          const o = new dN(t);
          return (
            this._records.set(t, o),
            (o.currentValue = n),
            this._addToAdditions(o),
            o
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            ((this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null));
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((o) => n(t[o], o));
        }
      }
      class dN {
        key;
        previousValue = null;
        currentValue = null;
        _nextPrevious = null;
        _next = null;
        _prev = null;
        _nextAdded = null;
        _nextRemoved = null;
        _nextChanged = null;
        constructor(t) {
          this.key = t;
        }
      }
      function OE() {
        return new pg([new xE()]);
      }
      let pg = (() => {
        class e {
          factories;
          static ɵprov = x({ token: e, providedIn: "root", factory: OE });
          constructor(n) {
            this.factories = n;
          }
          static create(n, o) {
            if (null != o) {
              const r = o.factories.slice();
              n = n.concat(r);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (o) => e.create(n, o || OE()),
              deps: [[e, new ko(), new xr()]],
            };
          }
          find(n) {
            const o = this.factories.find((r) => r.supports(n));
            if (null != o) return o;
            throw new te(901, !1);
          }
        }
        return e;
      })();
      function FE() {
        return new hg([new LE()]);
      }
      let hg = (() => {
        class e {
          static ɵprov = x({ token: e, providedIn: "root", factory: FE });
          factories;
          constructor(n) {
            this.factories = n;
          }
          static create(n, o) {
            if (o) {
              const r = o.factories.slice();
              n = n.concat(r);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (o) => e.create(n, o || FE()),
              deps: [[e, new ko(), new xr()]],
            };
          }
          find(n) {
            const o = this.factories.find((r) => r.supports(n));
            if (o) return o;
            throw new te(901, !1);
          }
        }
        return e;
      })();
      function hN(e) {
        ot(8);
        try {
          const { rootComponent: t, appProviders: n, platformProviders: o } = e,
            r = (function qx(e = []) {
              if (Mr) return Mr;
              const t = (function IE(e = [], t) {
                return qt.create({
                  name: t,
                  providers: [
                    { provide: tr, useValue: "platform" },
                    { provide: af, useValue: new Set([() => (Mr = null)]) },
                    ...e,
                  ],
                });
              })(e);
              return (
                (Mr = t),
                (function O0() {
                  !(function se(e) {
                    ce = e;
                  })(() => {
                    throw new te(600, !1);
                  });
                })(),
                (function DE(e) {
                  const t = e.get(bp, null);
                  S(e, () => {
                    t?.forEach((n) => n());
                  });
                })(t),
                t
              );
            })(o),
            s = [rg({}), { provide: Qn, useExisting: Tu }, ...(n || [])];
          return (function CE(e) {
            const t = Su(e) ? e.r3Injector : e.moduleRef.injector,
              n = t.get(gt);
            return n.run(() => {
              Su(e)
                ? e.r3Injector.resolveInjectorInitializers()
                : e.moduleRef.resolveInjectorInitializers();
              const o = t.get(Mi, null);
              let r;
              if (
                (n.runOutsideAngular(() => {
                  r = n.onError.subscribe({
                    next: (s) => {
                      o.handleError(s);
                    },
                  });
                }),
                Su(e))
              ) {
                const s = () => t.destroy(),
                  l = e.platformInjector.get(af);
                (l.add(s),
                  t.onDestroy(() => {
                    (r.unsubscribe(), l.delete(s));
                  }));
              } else {
                const s = () => e.moduleRef.destroy(),
                  l = e.platformInjector.get(af);
                (l.add(s),
                  e.moduleRef.onDestroy(() => {
                    (Ud(e.allPlatformModules, e.moduleRef),
                      r.unsubscribe(),
                      l.delete(s));
                  }));
              }
              return (function Kx(e, t, n) {
                try {
                  const o = n();
                  return gm(o)
                    ? o.catch((r) => {
                        throw (t.runOutsideAngular(() => e.handleError(r)), r);
                      })
                    : o;
                } catch (o) {
                  throw (t.runOutsideAngular(() => e.handleError(o)), o);
                }
              })(o, n, () => {
                const s = t.get(L0);
                return (
                  s.runInitializers(),
                  s.donePromise.then(() => {
                    if (
                      ((function WA(e) {
                        "string" == typeof e &&
                          (Sb = e.toLowerCase().replace(/_/g, "-"));
                      })(t.get(lg, Kd) || Kd),
                      !t.get(Zx, !0))
                    )
                      return Su(e)
                        ? t.get(Ii)
                        : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
                    if (Su(e)) {
                      const f = t.get(Ii);
                      return (
                        void 0 !== e.rootComponent &&
                          f.bootstrap(e.rootComponent),
                        f
                      );
                    }
                    return (
                      (function Qx(e, t) {
                        const n = e.injector.get(Ii);
                        if (e._bootstrapComponents.length > 0)
                          e._bootstrapComponents.forEach((o) => n.bootstrap(o));
                        else {
                          if (!e.instance.ngDoBootstrap) throw new te(-403, !1);
                          e.instance.ngDoBootstrap(n);
                        }
                        t.push(e);
                      })(e.moduleRef, e.allPlatformModules),
                      e.moduleRef
                    );
                  })
                );
              });
            });
          })({
            r3Injector: new t0({
              providers: s,
              parent: r,
              debugName: "",
              runEnvironmentInitializers: !1,
            }).injector,
            platformInjector: r,
            rootComponent: t,
          });
        } catch (t) {
          return Promise.reject(t);
        } finally {
          ot(9);
        }
      }
      function FN(e) {
        return "boolean" == typeof e ? e : null != e && "false" !== e;
      }
      function PN(e, t = NaN) {
        return isNaN(parseFloat(e)) || isNaN(Number(e)) ? t : Number(e);
      }
      function io(e) {
        return (function Mt(e) {
          const t = ie(null);
          try {
            return e();
          } finally {
            ie(t);
          }
        })(e);
      }
      function Au(e, t) {
        return In(e, t?.equal);
      }
      class UN {
        [Se];
        constructor(t) {
          this[Se] = t;
        }
        destroy() {
          this[Se].destroy();
        }
      }
      function gg(e, t) {
        !t?.injector && X();
        const n = t?.injector ?? fe(qt);
        let r,
          o = !0 !== t?.manualCleanup ? n.get(fi) : null;
        const s = n.get(nd, null, { optional: !0 }),
          l = n.get(Qn);
        return (
          null === s || t?.forceRoot
            ? (r = (function WN(e, t, n) {
                const o = Object.create(HN);
                return (
                  (o.fn = e),
                  (o.scheduler = t),
                  (o.notifier = n),
                  (o.zone = typeof Zone < "u" ? Zone.current : null),
                  o.scheduler.schedule(o),
                  o.notifier.notify(12),
                  o
                );
              })(e, n.get(x0), l))
            : ((r = (function zN(e, t, n) {
                const o = Object.create($N);
                return (
                  (o.view = e),
                  (o.zone = typeof Zone < "u" ? Zone.current : null),
                  (o.notifier = t),
                  (o.fn = n),
                  (e[Wi] ??= new Set()),
                  e[Wi].add(o),
                  o.consumerMarkedDirty(o),
                  o
                );
              })(s.view, l, e)),
              o instanceof Xs && o._lView === s.view && (o = null)),
          (r.injector = n),
          null !== o && (r.onDestroyFn = o.onDestroy(() => r.destroy())),
          new UN(r)
        );
      }
      const KE = {
          ...Be,
          consumerIsAlwaysLive: !0,
          consumerAllowSignalWrites: !0,
          dirty: !0,
          hasRun: !1,
          cleanupFns: void 0,
          zone: null,
          kind: "effect",
          onDestroyFn: es,
          run() {
            if (((this.dirty = !1), this.hasRun && !_t(this))) return;
            this.hasRun = !0;
            const e = (o) => (this.cleanupFns ??= []).push(o),
              t = Je(this),
              n = Ps(!1);
            try {
              (this.maybeCleanup(), this.fn(e));
            } finally {
              (Ps(n), Fe(this, t));
            }
          },
          maybeCleanup() {
            if (this.cleanupFns?.length)
              try {
                for (; this.cleanupFns.length; ) this.cleanupFns.pop()();
              } finally {
                this.cleanupFns = [];
              }
          },
        },
        HN = {
          ...KE,
          consumerMarkedDirty() {
            (this.scheduler.schedule(this), this.notifier.notify(12));
          },
          destroy() {
            (Y(this),
              this.onDestroyFn(),
              this.maybeCleanup(),
              this.scheduler.remove(this));
          },
        },
        $N = {
          ...KE,
          consumerMarkedDirty() {
            ((this.view[_e] |= 8192), ur(this.view), this.notifier.notify(13));
          },
          destroy() {
            (Y(this),
              this.onDestroyFn(),
              this.maybeCleanup(),
              this.view[Wi]?.delete(this));
          },
        },
        XN = (e) => e;
      function _g(e, t) {
        return YE(
          "function" == typeof e
            ? Ti(e, XN, t?.equal)
            : Ti(e.source, e.computation, e.equal),
        );
      }
      function YE(e) {
        const t = e[Se],
          n = e;
        return (
          (n.set = (o) =>
            (function ut(e, t) {
              (Ot(e), Wt(e, t), jn(e));
            })(t, o)),
          (n.update = (o) =>
            (function Si(e, t) {
              (Ot(e), He(e, t), jn(e));
            })(t, o)),
          (n.asReadonly = D.bind(e)),
          n
        );
      }
      function oR(e, t) {
        const n = Oe(e),
          o = t.elementInjector || jr();
        return new cu(n).create(
          o,
          t.projectableNodes,
          t.hostElement,
          t.environmentInjector,
        );
      }
      function rR(e) {
        const t = Oe(e);
        if (!t) return null;
        const n = new cu(t);
        return {
          get selector() {
            return n.selector;
          },
          get type() {
            return n.componentType;
          },
          get inputs() {
            return n.inputs;
          },
          get outputs() {
            return n.outputs;
          },
          get ngContentSelectors() {
            return n.ngContentSelectors;
          },
          get isStandalone() {
            return t.standalone;
          },
          get isSignal() {
            return t.signals;
          },
        };
      }
    },
    7858: (Di, jt, P) => {
      var L, ee;
      P.d(jt, {
        $CM: () => Ni,
        D8Z: () => ja,
        DLc: () => Ss,
        GZ5: () => po,
        K2k: () => Qe,
        NF7: () => Ms,
        OQR: () => Oe,
        RIB: () => pt,
        Ui: () => M,
        Vlf: () => ut,
        W40: () => kr,
        ZgB: () => rn,
        gAs: () => Fr,
        iH9: () => Za,
        lcq: () => Xt,
        pMd: () => Lr,
        xh: () => Es,
      });
      var le = P(1090),
        i = P(5472),
        Re = P(6216),
        Se = P(9377),
        ie = P(6048),
        Ce = P(9361),
        st = P(2881),
        Ne = P(4412),
        Be = P(7673),
        We = P(7468),
        Ot = (P(6648), P(1413)),
        Ct = P(9030),
        Kn = P(4843),
        Pn = P(5964),
        jn = P(152),
        Je = P(3294),
        Fe = P(6354),
        _t = P(6697),
        Y = P(5558),
        Ie = P(9437),
        ue = (P(274), P(8141)),
        we = P(6977),
        qe = P(1164),
        vn = P(5791),
        In = P(7356),
        Me = P(5263),
        zt = P(7643),
        Et = P(6801),
        K = (P(1049), P(8018)),
        ce = P(9079),
        re = P(119);
      const se = {
          baseLoggerName: "root",
          logLevel: le.$b.ERROR,
          logAppenders: { type: le.Z8, prefixFormat: "[{level}]" },
        },
        $ = { languages: ["en"], defaultLanguage: "en" },
        Bt = { bindWithTranslate: !1 },
        ln = {
          appConfig: {
            global: {
              showConnectionStatus: {
                messageBox: { lifespan: 0 },
                enabled: !0,
              },
              i18n: { i18nService: { ...$ }, i18nLoader: {} },
              locale: { ...Bt },
              user: { defaultUserPreferences: { locale: { ...Bt } } },
            },
          },
          environment: { envAppHandlersConfig: {} },
        },
        Ti = Re || L || (L = P.t(Re, 2)),
        ut = new i.nKC("EuiConfig"),
        Si = new i.nKC("moduleName"),
        $e = new i.nKC("moduleConfig"),
        Xt = new i.nKC("finalConfigToken"),
        Mt = new i.nKC("globalConfig"),
        Vt = new i.nKC("baseName"),
        Bn = new i.nKC("logConfig"),
        Xe = new i.nKC("SHOW_CONNECTION_STATUS"),
        vi = new i.nKC("HTTP_ERROR_HANDLER_CONFIG");
      function Jn(b) {
        return Object.assign(ln.appConfig.global, b && b.global);
      }
      function wi(b) {
        return Object.assign(
          {},
          ln.appConfig.global.showConnectionStatus,
          b && b.showConnectionStatus,
        );
      }
      function yn(b, k) {
        return Object.assign({}, b && b.modules && b.modules[k]);
      }
      function te(b) {
        return Object.assign({}, b && b.httpErrorHandler);
      }
      function Vn(b) {
        return Object.assign({}, b && b.log);
      }
      function fn(b) {
        const k = b && b.environment,
          h =
            k.envDynamicConfig &&
            k.envDynamicConfig.merge &&
            Array.isArray(k.envDynamicConfig.merge)
              ? k.envDynamicConfig.merge
              : [],
          v =
            !(!k.envDynamicConfig || !k.envDynamicConfig.deepMerge) &&
            k.envDynamicConfig.deepMerge,
          S = k && k.loadedEnvDynamicConfig,
          he = (function Ai(b, k) {
            return Object.assign({}, b, k);
          })(b && b.appConfig, k && k.envAppHandlersConfig);
        return (function ki(b, k, h, v) {
          const S = {};
          return (
            h &&
              h.length > 0 &&
              h.forEach((F) => {
                null != k &&
                  k[F] &&
                  "object" == typeof k[F] &&
                  null != b &&
                  b[F] &&
                  "object" == typeof b[F] &&
                  (v
                    ? ((S[F] = {}), Ti(!0, S[F], b[F], k[F]))
                    : (k[F] = { ...b[F], ...k[F] }));
              }),
            Object.assign({}, b, k, S)
          );
        })(he, S, h, v);
      }
      var It = (function (b) {
          return (
            (b.INIT_STORE = "[App] Init store"),
            (b.UPDATE_APP_VERSION = "[App] Update version"),
            (b.UPDATE_APP_CONNECTION = "[App] Update connection"),
            (b.ADD_APP_LOADED_CONFIG_MODULES =
              "[App] Update app loaded config modules"),
            (b.UPDATE_APP_STATUS = "[App] Update status"),
            (b.UPDATE_CURRENT_MODULE = "[App] Update current module"),
            (b.ACTIVATED_ROUTE = "[App] Activated route"),
            (b.ADD_API_QUEUE_ITEM = "[App] Add API queue item"),
            (b.REMOVE_API_QUEUE_ITEM = "[App] Remove API queue item"),
            (b.EMPTY_API_QUEUE = "[App] empty API queue"),
            b
          );
        })(It || {}),
        Pi = (function (b) {
          return ((b.UPDATE_I18N_STATE = "[I18n] Update I18n State"), b);
        })(Pi || {}),
        De = (function (b) {
          return (
            (b.UPDATE_USER_STATE = "[User] Update User state"),
            (b.UPDATE_USER_DETAILS = "[User] Update details"),
            (b.UPDATE_USER_PREFERENCES = "[User] Update preferences"),
            (b.UPDATE_USER_RIGHTS = "[User] Update rights"),
            (b.UPDATE_USER_DASHBOARD = "[User] Update dashboard"),
            b
          );
        })(De || {}),
        bn = (function (b) {
          return ((b.UPDATE_NOTIFICATIONS_LIST = "[Notif] Update list"), b);
        })(bn || {}),
        Gn = (function (b) {
          return ((b.UPDATE_LOCALE_STATE = "[Locale] Update Locale State"), b);
        })(Gn || {});
      const ro = {
          [It.UPDATE_APP_VERSION]: (b, k) => ({ ...b, version: k.payload }),
          [It.UPDATE_APP_CONNECTION]: (b, k) => ({
            ...b,
            connected: k.payload,
          }),
          [It.UPDATE_APP_STATUS]: (b, k) => ({ ...b, status: k.payload }),
          [It.UPDATE_CURRENT_MODULE]: (b, k) =>
            Object.assign({}, b, { currentModule: k.payload }),
          [It.ADD_API_QUEUE_ITEM]: (b, k) => {
            const h = Object.assign({}, k.payload.item, {
                timestamp: new Date().getTime(),
              }),
              v = Object.assign({}, b.apiQueue, { [k.payload.id]: h });
            return Object.assign({}, b, { apiQueue: v });
          },
          [It.REMOVE_API_QUEUE_ITEM]: (b, k) => {
            const h = Object.keys(b.apiQueue)
              .filter((v) => v !== k.payload)
              .reduce((v, S) => ((v[S] = b.apiQueue[S]), v), {});
            return Object.assign({}, b, { apiQueue: h });
          },
          [It.EMPTY_API_QUEUE]: (b, k) =>
            Object.assign({}, b, { apiQueue: {} }),
        },
        ao = {
          [De.UPDATE_USER_DETAILS]: (b, k) => {
            let h = k.payload.fullName;
            h ||
              (h =
                `${k.payload.firstName || ""} ${k.payload.lastName || ""}`.trim());
            const v = Object.assign({}, b.details, k.payload, { fullName: h });
            return Object.assign({}, b, v);
          },
          [De.UPDATE_USER_PREFERENCES]: (b, k) => {
            const h = Object.assign({}, b.preferences, k.payload);
            return Object.assign({}, b, { preferences: h });
          },
          [De.UPDATE_USER_STATE]: (b, k) => {
            let h = k.payload.fullName;
            return (
              h ||
                (h =
                  `${k.payload.firstName || ""} ${k.payload.lastName || ""}`.trim()),
              Object.assign({}, b, k.payload, { fullName: h })
            );
          },
          [De.UPDATE_USER_RIGHTS]: (b, k) =>
            Object.assign({}, b, { rights: [...k.payload] }),
          [De.UPDATE_USER_DASHBOARD]: (b, k) => {
            const h = Object.assign({}, b.preferences, {
              dashboard: k.payload,
            });
            return { ...b, preferences: h };
          },
        },
        N = {
          [bn.UPDATE_NOTIFICATIONS_LIST]: (b, k) =>
            Object.assign({}, b, { list: [...k.payload] }),
        },
        Q = { [Pi.UPDATE_I18N_STATE]: (b, k) => ({ ...b, ...k.payload }) },
        Le = { [Gn.UPDATE_LOCALE_STATE]: (b, k) => ({ ...b, ...k.payload }) };
      (Object.assign(
        {},
        {
          app: (b = le.dT, k) => (ro[k.type] ? ro[k.type](b, k) : b),
          user: (b = le.rL, k) => (ao[k.type] ? ao[k.type](b, k) : b),
          notifications: (b = le.uH, k) => (N[k.type] ? N[k.type](b, k) : b),
          i18n: (b = le.i2, k) => (Q[k.type] ? Q[k.type](b, k) : b),
          locale: (b = le.ws, k) => (Le[k.type] ? Le[k.type](b, k) : b),
        },
      ),
        Re || L || (L = P.t(Re, 2)));
      const Sn = [
          "loadedConfigModules",
          "connect",
          "currentModule",
          "status",
          "apiQueue",
        ],
        de = (b) =>
          b
            ? Object.keys(b)
                .filter((k) => !Sn.includes(k))
                .reduce((k, h) => ((k[h] = b[h]), k), {})
            : {},
        pn = new i.nKC("BASE_LOGGER_NAME"),
        si = new i.nKC("LOG_LEVEL"),
        Tt = new i.nKC("LOG_APPENDERS");
      let Ft = (() => {
        class b extends le.Vy {
          constructor(h, v, S) {
            (super(h, v, S),
              (this.name = h),
              (this.level = v),
              (this.appenders = S),
              (this.loggers = {}));
          }
          getLogger(h, v = !1) {
            const S =
              (v && this.loggers[h]) ||
              new le.Vy(h, this.level, this.appenders);
            return (v && (this.loggers[h] = S), S);
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(i.KVO(pn), i.KVO(si), i.KVO(Tt));
            };
          }
          static {
            this.ɵprov = i.jDH({ token: b, factory: b.ɵfac });
          }
        }
        return b;
      })();
      const ji = {};
      function Bi(b, k, h, v = null, S = {}) {
        const F = (function yi(b) {
            return (
              b &&
              ("baseLoggerName" in b || "logLevel" in b || "logAppenders" in b)
            );
          })(S),
          X = F ? v : k,
          he = Object.assign(
            { baseLoggerName: X },
            F ? Object.assign({}, h, S) : h,
          ),
          je =
            ji[X] ||
            (function co(b = se, k = null) {
              const h = (b = Object.assign({}, se, b)).logLevel,
                v = (function uo(b = se, k = null) {
                  return (
                    ((b = Object.assign({}, se, b)).logAppenders =
                      b.logAppenders || []),
                    (b.logAppenders = Array.isArray(b.logAppenders)
                      ? b.logAppenders
                      : [b.logAppenders]),
                    b.logAppenders.map(
                      (h) =>
                        new ("object" == typeof h ? h.type : h)(
                          "object" == typeof h ? h : void 0,
                          k,
                        ),
                    )
                  );
                })(b, k);
              return new Ft(b.baseLoggerName, h, v);
            })(he, b);
        return ((ji[X] = je), je);
      }
      new i.nKC("LOG_CONFIG");
      var wn = (function (b) {
        return (
          (b[(b.local = 0)] = "local"),
          (b[(b.session = 1)] = "session"),
          b
        );
      })(wn || {});
      let on = (() => {
        class b {
          constructor(h, v) {
            ((this.logService = h),
              (this.platformId = v),
              (this._autoSaveHandlers = {}),
              (this.isHandlingAutoSave = !1),
              (0, Se.UE)(this.platformId) && (this._storage = localStorage),
              (this.state = new Ne.t({})),
              this.state
                .asObservable()
                .pipe(
                  (0, Pn.p)(() => this.isHandlingAutoSave),
                  (0, jn.B)(1e3),
                  (0, Je.F)((F, X) => (0, qe.A)(F, X)),
                )
                .subscribe((F) => {
                  this.saveState(F);
                }));
          }
          init(h, v) {
            if ((0, Se.UE)(this.platformId)) {
              this._storage = v === wn.session ? sessionStorage : localStorage;
              let S = ((b = localStorage) => {
                if (b)
                  try {
                    const k = b.getItem("state");
                    if (null === k) return;
                    let h = JSON.parse(k);
                    return ((h = { ...h, app: de(h?.app) }), h);
                  } catch {
                    return;
                  }
              })(this._storage);
              S = { ...S, app: { ...S?.app, version: h } };
              const F = this.deepMerge(S, { ...le.RA });
              this.updateState(F);
            }
          }
          addAutoSaveHandler(h, v) {
            this._autoSaveHandlers[h] = v;
          }
          handleAutoSave() {
            this.isHandlingAutoSave = !0;
          }
          dispatch(h) {
            console.warn("eUI does not PROXY to NGRX store.dispatch() anymore");
          }
          updateState(h, v) {
            const S = this.state.getValue();
            let F;
            ((F = v ? v(S, { ...h }) : this.deepMerge(S, { ...h })),
              this.state.next(F));
          }
          select(h) {
            const v = this.state.asObservable();
            return h
              ? v.pipe(
                  (0, Fe.T)(
                    "function" == typeof h
                      ? (S) => h(S)
                      : (S) =>
                          h
                            ? h
                                .split(".")
                                .reduce(
                                  (X, he) =>
                                    X && void 0 !== X[he] ? X[he] : void 0,
                                  S,
                                )
                            : S,
                  ),
                  (0, Je.F)((S, F) => (0, qe.A)(S, F)),
                )
              : v;
          }
          saveState(h) {
            let v = { app: h.app };
            if (h.user) {
              const { userId: S, preferences: F } = h.user;
              v.user = { userId: S, preferences: F };
            }
            Object.keys(this._autoSaveHandlers).forEach((S) => {
              const F = this._autoSaveHandlers[S];
              v = Object.assign(v, { [S]: F(h[S]) });
            });
            try {
              const S = JSON.stringify(v);
              this._storage?.setItem("state", S);
            } catch {}
          }
          deepMerge(h, v) {
            const S = Object.assign({}, h);
            return (
              this.isObject(h) &&
                this.isObject(v) &&
                Object.keys(v).forEach((F) => {
                  this.isObject(v[F])
                    ? F in h
                      ? (S[F] = this.deepMerge(h[F], v[F]))
                      : Object.assign(S, { [F]: v[F] })
                    : Object.assign(S, { [F]: v[F] });
                }),
              S
            );
          }
          isObject(h) {
            return h && "object" == typeof h && !Array.isArray(h);
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(i.KVO(Ft, 8), i.KVO(i.Agw));
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: b,
              factory: b.ɵfac,
              providedIn: "root",
            });
          }
        }
        return b;
      })();
      function g(b) {
        return [
          { provide: Si, useValue: b },
          { provide: $e, useFactory: yn, deps: [Xt, Si] },
          { provide: Ft, useFactory: Bi, deps: [i.zZn, Vt, Bn, Si, $e] },
        ];
      }
      const A = (b, k) => ({
          ...b,
          app: {
            ...b.app,
            loadedConfigModules: {
              lastAddedModule: k.moduleName,
              modulesConfig: {
                ...b.app.loadedConfigModules.modulesConfig,
                [k.moduleName]: { ...k.moduleConfig },
              },
            },
          },
        }),
        y = new i.nKC("Internal Theme ForRoot Guard");
      let M = (() => {
        class b {
          static forRoot() {
            return {
              ngModule: b,
              providers: [
                { provide: H, useFactory: J, deps: [] },
                {
                  provide: y,
                  useFactory: O,
                  deps: [[H, new i.Xx1(), new i.kdw()]],
                },
                { provide: In.D, useClass: Me.QH, deps: [In.M] },
                { provide: Vt, useValue: "eui-core" },
                { provide: Xt, useFactory: fn, deps: [ut] },
                { provide: Mt, useFactory: Jn, deps: [Xt] },
                { provide: Bn, useFactory: Vn, deps: [Xt] },
                { provide: Xe, useFactory: wi, deps: [Mt] },
                { provide: Ft, useFactory: Bi, deps: [i.zZn, Vt, Bn] },
                { provide: vi, useFactory: te, deps: [Xt] },
              ],
            };
          }
          static forChild(h) {
            return { ngModule: b, providers: g(h) };
          }
          constructor(h, v, S) {
            if (v) {
              const F = S.get(on),
                X = S.get(Si),
                he = S.get($e);
              F.updateState({ moduleName: X, moduleConfig: he }, A);
            }
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(i.KVO(y, 8), i.KVO(b, 12), i.KVO(i.zZn));
            };
          }
          static {
            this.ɵmod = i.$C({ type: b });
          }
          static {
            this.ɵinj = i.G2t({});
          }
        }
        return b;
      })();
      const O = (b) => {
        if (b)
          throw new TypeError(
            "CoreModule.forRoot() called twice. Feature modules should use ThemeModule.forChild() instead.",
          );
        return "guarded";
      };
      class H {
        constructor() {}
      }
      const J = () => new H(),
        Ve = () => {
          const b =
              (0, i.WQX)(ie.hj, { optional: !0 }) || Promise.resolve(null),
            k = (0, i.WQX)(Xt),
            h = (0, i.WQX)(on);
          return new Promise((v) => {
            b.then(() => {
              let S, F;
              ((S =
                k && k.versions && k.versions.app ? k.versions.app : "0.0.0"),
                (F = k && k.saveStateStorage ? k.saveStateStorage : wn.local),
                h.init(S, F),
                h.handleAutoSave(),
                v(null));
            });
          });
        };
      function rn() {
        return (0, i.phd)(Ve);
      }
      let po = (() => {
        class b {
          constructor() {
            ((this.growlMessages = []),
              (this.isGrowlSticky = !1),
              (this.isCloseAllSticky = !1),
              (this.growlLife = 3e3),
              (this.growlPosition = "bottom-right"),
              (this.growlCallback = null),
              (this.ariaGrowlLive = "polite"));
          }
          growl(h, v, S, F, X, he, je) {
            if (
              "info" !== h.severity &&
              "warning" !== h.severity &&
              "success" !== h.severity &&
              "danger" !== h.severity
            )
              throw new Error(
                "EuiGrowlService.growl() ERROR : message severity must be either : success, warning, info, danger",
              );
            ((void 0 === S || !S) && (this.growlMessages = []),
              (this.growlMessages = this.growlMessages.concat(h)),
              (h.life = F || h.life),
              (h.sticky = v || h.sticky),
              void 0 === F || isNaN(F)
                ? "danger" === h.severity
                  ? (v = !0)
                  : (this.growlLife = 3e3)
                : (this.growlLife = F),
              (this.isGrowlSticky = v || !1),
              X && (this.growlPosition = X),
              he && (this.growlCallback = he),
              je && (this.ariaGrowlLive = je));
          }
          clearGrowl() {
            this.growlMessages = [];
          }
          growlSuccess(h, v) {
            this.growl(
              { severity: "success", summary: "SUCCESS", detail: h },
              !1,
              !1,
              void 0,
              v,
            );
          }
          growlError(h, v) {
            this.growl(
              { severity: "danger", summary: "ERROR", detail: h },
              !1,
              !1,
              void 0,
              v,
            );
          }
          growlWarning(h, v) {
            this.growl(
              { severity: "warning", summary: "WARNING", detail: h },
              !1,
              !1,
              void 0,
              v,
            );
          }
          growlInfo(h, v) {
            this.growl(
              { severity: "info", summary: "INFO", detail: h },
              !1,
              !1,
              void 0,
              v,
            );
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)();
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: b,
              factory: b.ɵfac,
              providedIn: "root",
            });
          }
        }
        return b;
      })();
      class Ao {
        constructor(k, h = "", v = (S) => S) {
          ((this.prefix = k),
            (this.suffix = h),
            (this.compileTranslationsFn = v));
        }
        compileTranslations(k, h) {
          return this.compileTranslationsFn(k, h);
        }
        equals(k) {
          return this.prefix === k.prefix && this.suffix === k.suffix;
        }
        getPath(k) {
          return `${this.prefix}${k}${this.suffix}`;
        }
      }
      let Gi = (() => {
        class b {
          constructor(h, v, S) {
            ((this.http = h),
              (this.logService = v),
              (this.euiAppConfig = S),
              (this.resources = []),
              (this.failedResources = []),
              v &&
                (this.logger = this.logService.getLogger("core.I18nLoader")));
            const F = this.euiAppConfig.global && this.euiAppConfig.global.i18n;
            this.resources.push(...this.createResources(F && F.i18nLoader));
          }
          getTranslation(h) {
            return this.loadResources(this.resources, h).pipe(
              (0, Fe.T)(
                (v) => (
                  (this.failedResources = v.hasError ? v.errors : []),
                  v.translations
                ),
              ),
            );
          }
          addResources(h) {
            let v = this.createResources(h);
            return (
              (v = v.filter((S) => !this.resources.some((F) => F.equals(S)))),
              this.resources.push(...v),
              v
            );
          }
          removeResources(h) {
            this.resources = this.resources.filter(
              (v) => !h.some((S) => S.equals(v)),
            );
          }
          loadResources(h, v) {
            if (Array.isArray(h) && h.length > 0) {
              const S = h.map((F) => this.loadResource(F, v));
              return (0, We.p)(S).pipe(
                (0, Fe.T)((F) => {
                  const X = [],
                    he = [];
                  return (
                    F.forEach((je) => {
                      je.isError
                        ? he.push({ resource: je.resource, error: je.error })
                        : X.push(je);
                    }),
                    X.length === F.length
                      ? { hasError: !1, translations: (0, le.Um)(X) }
                      : {
                          hasError: !0,
                          translations: (0, le.Um)(X),
                          errors: he,
                        }
                  );
                }),
              );
            }
            return (0, Be.of)({ hasError: !1, translations: {} });
          }
          getFailedResources() {
            return this.failedResources;
          }
          createResources(h) {
            h = (0, le.uV)(h);
            const v = [],
              S = Array.isArray(h.i18nFolders)
                ? h.i18nFolders
                : h.i18nFolders
                  ? [h.i18nFolders]
                  : [];
            S && v.push(...S.map((he) => new Ao(`assets/${he}/`, ".json")));
            const F = Array.isArray(h.i18nServices)
              ? h.i18nServices
              : h.i18nServices
                ? [h.i18nServices]
                : [];
            F && v.push(...F.map((he) => new Ao(he)));
            const X = Array.isArray(h.i18nResources)
              ? h.i18nResources
              : h.i18nResources
                ? [h.i18nResources]
                : [];
            return (
              X &&
                v.push(
                  ...X.map(
                    (he) =>
                      new Ao(
                        he.prefix,
                        he.suffix,
                        this.getResourceCompileFunction(he.compileTranslations),
                      ),
                  ),
                ),
              v
            );
          }
          loadResource(h, v) {
            const S = h.getPath(v);
            return this.http.get(S).pipe(
              (0, Fe.T)((F) => h.compileTranslations(F, v)),
              (0, Fe.T)(
                (F) => (
                  this.logger?.info(`I18n resource loaded from path ${S}`),
                  F
                ),
              ),
              (0, Ie.W)(
                (F) => (
                  this.logger?.warn(
                    `I18n resource NOT loaded from path ${S}`,
                    F,
                  ),
                  (0, Be.of)({
                    error: `I18n resource NOT loaded from path ${S}`,
                    resource: h,
                    isError: !0,
                  })
                ),
              ),
            );
          }
          getResourceCompileFunction(h) {
            const v = this.euiAppConfig.customHandler;
            if (v && "function" == typeof v[h]) return v[h];
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(i.KVO(zt.Qq), i.KVO(Ft, 8), i.KVO(Xt));
            };
          }
          static {
            this.ɵprov = i.jDH({ token: b, factory: b.ɵfac });
          }
        }
        return b;
      })();
      const ja = { loader: { provide: K.Wr, useClass: Gi } },
        Ba = (b) => b.app.loadedConfigModules.lastAddedModule;
      let kr = (() => {
        class b extends le.l5 {
          static {
            this.DEFAULT_STATE = { activeLang: "en" };
          }
          constructor(h, v, S, F, X) {
            (super(b.DEFAULT_STATE),
              (this.baseGlobalConfig = h),
              (this.translateService = v),
              (this.logService = S),
              (this.store = F),
              (this.document = X),
              (this.subNotifier = new Ot.B()),
              (this.stateSubject = new Ne.t(this.stateInstance)),
              (this.state = (0, ce.ot)(this.stateSubject, { equal: qe.A })),
              this.onStateChange.subscribe((he) => {
                this.stateSubject.next(he);
              }),
              (this.config = (0, le.fn)(this.baseGlobalConfig)),
              (this.onModuleLoad = new Ne.t({ ready: !1, name: null })));
          }
          ngOnDestroy() {
            (this.subNotifier.next(void 0), this.subNotifier.complete());
          }
          getState(h) {
            return h
              ? "function" == typeof h
                ? this.stateSubject.asObservable().pipe(
                    (0, we.Q)(this.subNotifier),
                    (0, Fe.T)((v) => h(v)),
                    (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                  )
                : this.stateSubject.asObservable().pipe(
                    (0, we.Q)(this.subNotifier),
                    (0, Fe.T)((v) =>
                      h
                        .split(".")
                        .reduce(
                          (F, X) => (F && void 0 !== F[X] ? F[X] : void 0),
                          v,
                        ),
                    ),
                    (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                  )
              : this.stateSubject.asObservable().pipe(
                  (0, we.Q)(this.subNotifier),
                  (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                );
          }
          updateState(h, v) {
            (h.activeLang && this.updateHTMLDOMLang(h.activeLang),
              (this.stateInstance = super.deepMerge(this.stateInstance, {
                ...h,
              })),
              this.onStateChange.next(this.stateInstance));
          }
          getSignal() {
            return this.state;
          }
          init(h) {
            const v =
                h && h.activeLang
                  ? h.activeLang
                  : this.preparedDefaultLanguage(),
              S = { ...h, activeLang: v };
            return "string" == typeof v
              ? (super.initEuiService(this.store),
                this.updateState(S),
                this.setup(v))
              : (0, Be.of)({
                  success: !1,
                  error: "Initial active lang should be string",
                });
          }
          onReady(h) {
            return this.onModuleLoad.pipe(
              (0, Y.n)((v) =>
                h
                  ? (0, Be.of)(v)
                  : this.store.select(Ba).pipe(
                      (0, ue.M)((S) => (h = S)),
                      (0, Fe.T)(() => v),
                    ),
              ),
              (0, Pn.p)((v) => !0 === v.ready && v.name === h),
              (0, _t.s)(1),
            );
          }
          lazyLoad(h) {
            const v = Math.floor(1e5 * Math.random() + 1).toLocaleString();
            return this.addResources(h, v);
          }
          lazyLoadInit(h, v) {
            return this.addResources(h, v);
          }
          addResources(h, v) {
            this.onModuleLoad.next({ ready: !1, name: v });
            const S = this.translateService.currentLoader;
            if (S instanceof Gi) {
              const F = [],
                X = S,
                he = X.addResources(h);
              F.push(
                X.loadResources(he, this.translateService.currentLang).pipe(
                  (0, _t.s)(1),
                  (0, ue.M)((vt) => {
                    this.translateService.setTranslation(
                      this.translateService.currentLang,
                      vt.translations,
                      !0,
                    );
                  }),
                ),
              );
              const je =
                this.config.defaultLanguage ||
                this.translateService.defaultLang;
              return (
                this.translateService.currentLang !== je &&
                  F.push(
                    X.loadResources(he, je).pipe(
                      (0, _t.s)(1),
                      (0, ue.M)((vt) => {
                        this.translateService.setTranslation(
                          je,
                          vt.translations,
                          !0,
                        );
                      }),
                    ),
                  ),
                (0, We.p)(F).pipe(
                  (0, Fe.T)((vt) =>
                    vt[0].hasError
                      ? { success: !1, error: vt[0].errors }
                      : { success: !0 },
                  ),
                  (0, ue.M)(() => {
                    this.onModuleLoad.next({ ready: !0, name: v });
                  }),
                  (0, Ie.W)(
                    (vt) => (
                      this.onModuleLoad.next({ ready: !0, name: v, error: vt }),
                      (0, Be.of)({ success: !1, error: vt })
                    ),
                  ),
                )
              );
            }
            return (0, Be.of)({
              success: !1,
              error: "currentLoader is not an I18nLoader.",
            });
          }
          preparedDefaultLanguage() {
            const h = (0, le.oT)();
            return h &&
              this.config.languages &&
              le.FR.getLanguageCodes(this.config.languages).includes(h)
              ? h
              : this.config.defaultLanguage;
          }
          setup(h) {
            return (
              (this.config = Object.assign({}, $, this.config)),
              this.config.languages &&
                (this.translateService.addLangs(
                  le.FR.getLanguageCodes(this.config.languages),
                ),
                this.logService &&
                  this.logService.info(
                    `I18n accepted languages set to ${le.FR.getLanguageCodes(this.config.languages)}`,
                  )),
              this.translateService.use(h).pipe(
                (0, ue.M)(() => {
                  (this.bindActiveLangStateToTranslateService(),
                    this.bindTranslateServiceLangChangeToState(),
                    this.config.defaultLanguage &&
                      this.setDefaultLanguage(this.config.defaultLanguage));
                }),
                (0, Fe.T)(() => {
                  if (this.translateService.currentLoader instanceof Gi) {
                    const v =
                      this.translateService.currentLoader.getFailedResources();
                    if (v.length > 0) return { success: !1, error: v };
                  }
                  return { success: !0 };
                }),
                (0, Ie.W)((v) => (0, Be.of)({ success: !1, error: v })),
              )
            );
          }
          bindActiveLangStateToTranslateService() {
            this.getState((h) => h.activeLang)
              .pipe((0, we.Q)(this.subNotifier))
              .subscribe((h) => {
                null !== h &&
                  this.translateService.currentLang !== h &&
                  this.use(h);
              });
          }
          bindTranslateServiceLangChangeToState() {
            this.translateService.onLangChange.subscribe((h) => {
              (this.stateInstance.activeLang !== h.lang &&
                this.updateState({ activeLang: h.lang }),
                this.logService &&
                  this.logService.info(
                    `I18n current language set to ${h.lang}`,
                  ));
            });
          }
          setDefaultLanguage(h) {
            (this.translateService.setDefaultLang(h),
              this.logService &&
                this.logService.info(`I18n default language set to ${h}`));
          }
          use(h) {
            return this.translateService.use(h);
          }
          updateHTMLDOMLang(h) {
            this.document.documentElement.lang = h;
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(
                i.KVO(Mt),
                i.KVO(K.c$),
                i.KVO(Ft, 8),
                i.KVO(on),
                i.KVO(Ce.q),
              );
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: b,
              factory: b.ɵfac,
              providedIn: "root",
            });
          }
        }
        return b;
      })();
      const Es = (b) => (
          b && (b.preventDefault(), b.stopPropagation(), (b.cancelBubble = !0)),
          !1
        ),
        Ms = () => Math.random().toString(36).substring(2, 9);
      let pt = (() => {
        class b {
          static {
            this.setHtmlClass = (h, v) => {
              v.documentElement.classList.add(h);
            };
          }
          static {
            this.getCssVarValue = (h, v, S) =>
              (0, Se.Vy)(S)
                ? v.documentElement.style.getPropertyValue(h)
                : getComputedStyle(v.documentElement).getPropertyValue(h);
          }
          static {
            this.setCssVarValue = (h, v, S) => {
              S.documentElement.style.setProperty(h, v);
            };
          }
          static {
            this.setCssVar = (h, v, S, F) => {
              const X = this.getCssVarValue(h, S, F);
              this.setCssVarValue(v, X, S);
            };
          }
          static {
            this.initCssVars = (h, v) => {
              (this.setCssVar(
                "--eui-app-header-height-default",
                "--eui-app-header-height",
                h,
                v,
              ),
                this.setCssVar(
                  "--eui-app-breadcrumb-height-default",
                  "--eui-app-breadcrumb-height",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-top-message-height-default",
                  "--eui-app-top-message-height",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-toolbar-height-default",
                  "--eui-app-toolbar-height",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-toolbar-mega-menu-height-default",
                  "--eui-app-toolbar-mega-menu-height",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-sidebar-width-default",
                  "--eui-app-sidebar-width",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-sidebar-width-close-default",
                  "--eui-app-sidebar-width-close",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-sidebar-header-height-default",
                  "--eui-app-sidebar-header-height",
                  h,
                  v,
                ),
                this.setCssVar(
                  "--eui-app-sidebar-footer-height-default",
                  "--eui-app-sidebar-footer-height",
                  h,
                  v,
                ));
            };
          }
          static {
            this.getBreakpointValues = (h, v) => {
              const S = [],
                F = this.getCssVarValue("--eui-bp-xs", h, v);
              S.push({ bkp: "xs", pxValue: F, value: F.replace("px", "") });
              const X = this.getCssVarValue("--eui-bp-sm", h, v);
              S.push({ bkp: "sm", pxValue: X, value: X.replace("px", "") });
              const he = this.getCssVarValue("--eui-bp-md", h, v);
              S.push({ bkp: "md", pxValue: he, value: he.replace("px", "") });
              const je = this.getCssVarValue("--eui-bp-lg", h, v);
              S.push({ bkp: "lg", pxValue: je, value: je.replace("px", "") });
              const vt = this.getCssVarValue("--eui-bp-xl", h, v);
              S.push({ bkp: "xl", pxValue: vt, value: vt.replace("px", "") });
              const yt = this.getCssVarValue("--eui-bp-xxl", h, v);
              S.push({ bkp: "xxl", pxValue: yt, value: yt.replace("px", "") });
              const Zn = this.getCssVarValue("--eui-bp-fhd", h, v);
              S.push({ bkp: "fhd", pxValue: Zn, value: Zn.replace("px", "") });
              const mo = this.getCssVarValue("--eui-bp-2k", h, v);
              S.push({ bkp: "2k", pxValue: mo, value: mo.replace("px", "") });
              const li = this.getCssVarValue("--eui-bp-4k", h, v);
              return (
                S.push({ bkp: "4k", pxValue: li, value: li.replace("px", "") }),
                S
              );
            };
          }
          static {
            this.activateEditModeCssVars = (h, v) => {
              h
                ? (this.setCssVarValue(
                    "--eui-docpage-navigation-z-index",
                    "inherit",
                    v,
                  ),
                  this.setCssVarValue("--eui-z-index-sidebar", "inherit", v),
                  this.setCssVarValue("--eui-z-index-root", "inherit", v))
                : (this.setCssVarValue(
                    "--eui-docpage-navigation-z-index",
                    "2",
                    v,
                  ),
                  this.setCssVarValue("--eui-z-index-sidebar", "1044", v),
                  this.setCssVarValue("--eui-z-index-root", "1", v));
            };
          }
          static {
            this.activateHeaderCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-header-height-active",
                "--eui-app-header-height",
                h,
                v,
              );
            };
          }
          static {
            this.activateBreadcrumbCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-breadcrumb-height-active",
                "--eui-app-breadcrumb-height",
                h,
                v,
              );
            };
          }
          static {
            this.activateTopMessageCssVars = (h, v) => {
              this.setCssVarValue("--eui-app-top-message-height", `${h}px`, v);
            };
          }
          static {
            this.activateToolbarCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-toolbar-height-active",
                "--eui-app-toolbar-height",
                h,
                v,
              );
            };
          }
          static {
            this.activateToolbarMegaMenuCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-toolbar-mega-menu-height-active",
                "--eui-app-toolbar-mega-menu-height",
                h,
                v,
              );
            };
          }
          static {
            this.activateFooterCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-footer-height-active",
                "--eui-app-footer-height",
                h,
                v,
              );
            };
          }
          static {
            this.setHeaderShrinkCssVar = (h, v, S) => {
              this.setCssVar(
                h
                  ? "--eui-app-header-height-shrink"
                  : "--eui-app-header-height-active",
                "--eui-app-header-height",
                v,
                S,
              );
            };
          }
          static {
            this.activateSidebarCssVars = (h, v, S = !1) => {
              (this.setCssVar(
                "--eui-app-sidebar-width-active",
                "--eui-app-sidebar-width",
                h,
                v,
              ),
                this.setCssVar(
                  S
                    ? "--eui-app-sidebar-width-close-variant-active"
                    : "--eui-app-sidebar-width-close-active",
                  "--eui-app-sidebar-width-close",
                  h,
                  v,
                ));
            };
          }
          static {
            this.removeSidebarCssVars = (h) => {
              (h.documentElement.style.removeProperty(
                "--eui-app-sidebar-header-height",
              ),
                h.documentElement.style.removeProperty(
                  "--eui-app-sidebar-footer-height",
                ),
                h.documentElement.style.removeProperty(
                  "--eui-app-sidebar-width",
                ),
                h.documentElement.style.removeProperty(
                  "--eui-app-sidebar-width-close",
                ));
            };
          }
          static {
            this.activateSidebarHeaderCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-sidebar-header-height-active",
                "--eui-app-sidebar-header-height",
                h,
                v,
              );
            };
          }
          static {
            this.activateSidebarFooterCssVars = (h, v) => {
              this.setCssVar(
                "--eui-app-sidebar-footer-height-active",
                "--eui-app-sidebar-footer-height",
                h,
                v,
              );
            };
          }
          static setAppViewportCssVars(h) {
            if ((0, Se.UE)(h)) {
              const v = 0.01 * window.innerHeight,
                S = 0.01 * window.innerWidth;
              (this.setCssVarValue("--eui-app-vh", `${v}px`, document),
                this.setCssVarValue("--eui-app-vw", `${S}px`, document));
            }
          }
        }
        return b;
      })();
      function Qe(b, k = (0, i.WQX)(i.zZn)) {
        try {
          return k.get(b, null);
        } catch {
          return null;
        }
      }
      const Lr = new i.nKC("DYNAMIC_COMPONENT_CONFIG"),
        mn = {
          appName: "",
          appShortName: "",
          appSubTitle: "",
          appBaseFontSize: "",
          isSidebarOpen: !0,
          isSidebarActive: !1,
          hasSidebar: !1,
          hasHeader: !1,
          hasBreadcrumb: !1,
          hasHeaderLogo: !1,
          hasHeaderEnvironment: !1,
          hasToolbar: !1,
          hasToolbarMegaMenu: !1,
          hasToolbarMenu: !1,
          environmentValue: "",
          isSidebarHidden: !1,
          isSidebarFocused: !1,
          hasSidebarCollapsedVariant: !1,
          hasTopMessage: !1,
          windowWidth: 0,
          windowHeight: 0,
          mainContentHeight: 0,
          pageHeaderHeight: 0,
          wrapperClasses: "",
          breakpoint: "",
          breakpoints: {
            isMobile: !1,
            isTablet: !1,
            isLtLargeTablet: !1,
            isLtDesktop: !1,
            isDesktop: !1,
            isXL: !1,
            isXXL: !1,
            isFHD: !1,
            is2K: !1,
            is4K: !1,
          },
          breakpointValues: [],
          menuLinks: [],
          sidebarLinks: [],
          combinedLinks: [],
          isBlockDocumentActive: !1,
          deviceInfo: null,
          activeLanguage: "en",
          languages: le.FR.getLanguages(),
          appMetadata: null,
          hasModalActive: !1,
          isDimmerActive: !1,
        };
      let Oe = (() => {
        class b {
          get state$() {
            return this._state$.asObservable();
          }
          get breakpoint$() {
            return this._breakpoint$.asObservable();
          }
          get breakpoints$() {
            return this._breakpoints$.asObservable();
          }
          get state() {
            return this._state$.getValue();
          }
          set isSidebarOpen(h) {
            this.setState({ ...this.state, isSidebarOpen: h });
          }
          get isSidebarOpen() {
            return this.state.isSidebarOpen;
          }
          set isSidebarActive(h) {
            this.setState({ ...this.state, isSidebarActive: h });
          }
          set sidebarLinks(h) {
            this.setState({ ...this.state, sidebarLinks: h });
          }
          set hasSidebarCollapsedVariant(h) {
            (this.setState({ ...this.state, hasSidebarCollapsedVariant: h }),
              pt.activateSidebarCssVars(this.document, this.platformId, h));
          }
          set menuLinks(h) {
            this.setState({ ...this.state, menuLinks: h });
          }
          set isBlockDocumentActive(h) {
            this.setState({ ...this.state, isBlockDocumentActive: h });
          }
          get hasHeader() {
            return this.state.hasHeader;
          }
          get isDimmerActive() {
            return this.state.isDimmerActive;
          }
          set isDimmerActive(h) {
            this.setState({ ...this.state, isDimmerActive: h });
          }
          constructor(h, v, S, F, X, he, je) {
            ((this.config = h),
              (this.http = v),
              (this.platformId = S),
              (this.document = F),
              (this.router = X),
              (this.storeService = he),
              (this.i18nService = je));
            let vt = mn;
            const yt = h?.i18n?.i18nService?.languages || mn.languages,
              Zn = h?.i18n?.i18nService?.defaultLanguage || mn.activeLanguage;
            ((vt = { ...vt, languages: yt, activeLanguage: Zn }),
              (this._state$ = new Ne.t(vt)),
              (this._breakpoint$ = new Ne.t("")),
              (this._breakpoints$ = new Ne.t({})),
              this.bindActiveLanguageToAppShellState());
          }
          setState(h, v = !0) {
            let S, F, X;
            const he = this.state;
            this.state.windowWidth !== h.windowWidth
              ? ((S = this.getBreakpoint(h.windowWidth)),
                (F = this.getBreakpoints(S)),
                this._breakpoint$.next(S),
                this._breakpoints$.next(F))
              : ((S = he.breakpoint), (F = he.breakpoints));
            const je = this.getWrapperClasses(h, S);
            X =
              this.state.menuLinks !== h.menuLinks ||
              this.state.sidebarLinks !== h.sidebarLinks
                ? [...h.menuLinks, ...h.sidebarLinks]
                : this.state.combinedLinks;
            const vt = { ...this.state };
            (this._state$.next({
              ...h,
              wrapperClasses: je,
              breakpoint: S,
              breakpoints: F,
              combinedLinks: X,
            }),
              v &&
                h.activeLanguage !== vt.activeLanguage &&
                this.i18nService.updateState({ activeLang: h.activeLanguage }));
          }
          getState(h) {
            return (0, Ct.v)(() =>
              h
                ? this.state$.pipe(
                    (0, Fe.T)((v) => (0, vn.A)(v, h)),
                    (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                  )
                : this.state$,
            );
          }
          sidebarToggle() {
            this.isSidebarOpen = !this.state.isSidebarOpen;
          }
          dimmerActiveToggle() {
            const h = this.isDimmerActive;
            (this.setState({ ...this.state, isDimmerActive: !h }),
              pt.activateEditModeCssVars(!h, this.document));
          }
          setDimmerActiveState(h) {
            (this.setState({ ...this.state, isDimmerActive: h }),
              pt.activateEditModeCssVars(h, this.document));
          }
          fetchAppMetadata(h = "assets/app-metadata.json") {
            this.getJson(h).then((v) => {
              this.setState({ ...this.state, appMetadata: v });
            });
          }
          activateSidebar() {
            (this.setState({ ...this.state, hasSidebar: !0 }),
              this.state.isSidebarHidden ||
                pt.activateSidebarCssVars(
                  this.document,
                  this.platformId,
                  this.state.hasSidebarCollapsedVariant,
                ));
          }
          activateSidebarHeader() {
            pt.activateSidebarHeaderCssVars(this.document, this.platformId);
          }
          activateSidebarFooter() {
            pt.activateSidebarFooterCssVars(this.document, this.platformId);
          }
          activateHeader() {
            (this.setState({ ...this.state, hasHeader: !0 }),
              pt.activateHeaderCssVars(this.document, this.platformId));
          }
          activateBreadcrumb() {
            (this.setState({ ...this.state, hasBreadcrumb: !0 }),
              pt.activateBreadcrumbCssVars(this.document, this.platformId));
          }
          activateTopMessage(h) {
            (this.setState({ ...this.state, hasTopMessage: !0 }),
              pt.activateTopMessageCssVars(h, this.document));
          }
          activateToolbar() {
            (this.setState({ ...this.state, hasToolbar: !0 }),
              pt.activateToolbarCssVars(this.document, this.platformId));
          }
          activateToolbarMegaMenu() {
            (this.setState({ ...this.state, hasToolbarMegaMenu: !0 }),
              pt.activateToolbarMegaMenuCssVars(
                this.document,
                this.platformId,
              ));
          }
          activateToolbarMenu() {
            this.setState({ ...this.state, hasToolbarMenu: !0 });
          }
          getBaseFontSize() {
            return (
              this.state.appBaseFontSize ||
              pt.getCssVarValue(
                "--eui-f-size-base",
                this.document,
                this.platformId,
              )
            );
          }
          setBaseFontSize(h) {
            (this.setState({ ...this.state, appBaseFontSize: h }, !1),
              pt.setCssVarValue("--eui-f-size-base", h, this.document));
          }
          getWrapperClasses(h, v) {
            const S = [];
            return (
              S.push(v),
              h.hasSidebar &&
                (h.isSidebarHidden && S.push("sidebar--hidden"),
                S.push(h.isSidebarOpen ? "sidebar--open" : "sidebar--close")),
              h.deviceInfo?.isFF && S.push("ff"),
              h.deviceInfo?.isIE && S.push("ie"),
              h.deviceInfo?.isChrome && S.push("chrome"),
              S.join(" ")
            );
          }
          getBreakpoint(h) {
            let v = "";
            return (
              0 === this.state.breakpointValues.length &&
                this.setState({
                  ...this.state,
                  breakpointValues: pt.getBreakpointValues(
                    this.document,
                    this.platformId,
                  ),
                }),
              this.state.breakpointValues.forEach((S, F) => {
                F < this.state.breakpointValues.length
                  ? h >= S.value &&
                    h < this.state.breakpointValues[F + 1]?.value &&
                    (v = S.bkp)
                  : h >= S.value && (v = S.bkp);
              }),
              v
            );
          }
          getBreakpoints(h) {
            return {
              isMobile: "xs" === h || "sm" === h,
              isTablet: "md" === h,
              isLtLargeTablet:
                "xs" === h || "sm" === h || "md" === h || "lg" === h,
              isLtDesktop:
                "xs" === h ||
                "sm" === h ||
                "md" === h ||
                "lg" === h ||
                "xl" === h,
              isDesktop: "xxl" === h,
              isXL: "xl" === h,
              isXXL: "xxl" === h,
              isFHD: "fhd" === h,
              is2K: "2k" === h,
              is4K: "4k" === h,
            };
          }
          getJson(h) {
            return (0, Kn._)(this.http.get(h))
              .then(this.extractData)
              .catch(this.handleError);
          }
          extractData(h) {
            return h || {};
          }
          handleError(h) {
            return (
              console.error("An error occurred", h),
              Promise.reject(h.message || h)
            );
          }
          bindActiveLanguageToAppShellState() {
            this.i18nService
              .getState((h) => h.activeLang)
              .subscribe((h) => {
                h !== this.state.activeLanguage &&
                  this.setState({ ...this.state, activeLanguage: h }, !1);
              });
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(
                i.KVO(Mt, 8),
                i.KVO(zt.Qq),
                i.KVO(i.Agw),
                i.KVO(Ce.q),
                i.KVO(Et.Ix),
                i.KVO(on),
                i.KVO(kr, 8),
              );
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: b,
              factory: b.ɵfac,
              providedIn: "root",
            });
          }
        }
        return b;
      })();
      var Ke = (function (b) {
        return (
          (b.DEFAULT = "default"),
          (b.ECL_EC = "ecl-ec"),
          (b.ECL_EC_RTL = "ecl-ec-rtl"),
          (b.ECL_EU = "ecl-eu"),
          (b.ECL_EU_RTL = "ecl-eu-rtl"),
          (b.EUI_LEGACY = "eui-legacy"),
          (b.EUI_LEGACY_HC = "eui-legacy-high-contrast"),
          (b.DARK = "dark"),
          (b.COMPACT = "compact"),
          (b.DS2025 = "ds2025"),
          b
        );
      })(Ke || {});
      const $a = {
        themes: [
          { name: Ke.DEFAULT, isActive: !1, styleSheet: null, cssClass: null },
          {
            name: Ke.ECL_EC,
            isActive: !1,
            styleSheet: "eui-ecl-ec.css",
            cssClass: null,
          },
          {
            name: Ke.ECL_EC_RTL,
            isActive: !1,
            styleSheet: "eui-ecl-ec-rtl.css",
            cssClass: null,
          },
          {
            name: Ke.ECL_EU,
            isActive: !1,
            styleSheet: "eui-ecl-eu.css",
            cssClass: null,
          },
          {
            name: Ke.ECL_EU_RTL,
            isActive: !1,
            styleSheet: "eui-ecl-eu-rtl.css",
            cssClass: null,
          },
          {
            name: Ke.EUI_LEGACY,
            isActive: !1,
            styleSheet: null,
            cssClass: "eui-t-eui-legacy",
          },
          {
            name: Ke.EUI_LEGACY_HC,
            isActive: !1,
            styleSheet: null,
            cssClass: "eui-t-high-contrast",
          },
          {
            name: Ke.DARK,
            isActive: !1,
            styleSheet: null,
            cssClass: "eui-t-dark",
          },
          {
            name: Ke.COMPACT,
            isActive: !1,
            styleSheet: null,
            cssClass: "eui-t-compact",
          },
          {
            name: Ke.DS2025,
            isActive: !1,
            styleSheet: null,
            cssClass: "eui-t-ds2025",
          },
        ],
        theme: {
          isDefault: !1,
          isEclEc: !1,
          isEclEcRtl: !1,
          isEclEu: !1,
          isEclEuRtl: !1,
          isEuiLegacy: !1,
          isEuiLegacyHc: !1,
          isDark: !1,
          isCompact: !1,
          isDs2025: !1,
        },
      };
      let Fr = (() => {
        class b {
          constructor(h, v, S) {
            ((this.document = h),
              (this.config = v),
              (this.asService = S),
              (this._state$ = new Ne.t($a)),
              this.setActiveTheme(this.config?.eui?.theme || Ke.DEFAULT, !0));
          }
          get state$() {
            return this._state$.asObservable();
          }
          get state() {
            return this._state$.getValue();
          }
          isDefault() {
            return this.state.theme.isDefault;
          }
          isEclEc() {
            return this.state.theme.isEclEc;
          }
          isEclEcRtl() {
            return this.state.theme.isEclEcRtl;
          }
          isEclEu() {
            return this.state.theme.isEclEu;
          }
          isEclEuRtl() {
            return this.state.theme.isEclEuRtl;
          }
          isEuiLegacy() {
            return this.state.theme.isEuiLegacy;
          }
          isEuiLegacyHc() {
            return this.state.theme.isEuiLegacyHc;
          }
          isDark() {
            return this.state.theme.isDark;
          }
          isCompact() {
            return this.state.theme.isCompact;
          }
          isDs2025() {
            return this.state.theme.isDs2025;
          }
          setActiveTheme(h, v) {
            const S = this.state.themes,
              F = S.findIndex((X) => X.name === h);
            if (F < 0) throw new Error("NO_THEME_FOUND");
            {
              S[F].isActive = v;
              const X = S[F],
                he = $a.theme;
              switch (h) {
                case Ke.DEFAULT:
                  he.isDefault = v;
                  break;
                case Ke.ECL_EC:
                  he.isEclEc = v;
                  break;
                case Ke.ECL_EC_RTL:
                  he.isEclEcRtl = v;
                  break;
                case Ke.ECL_EU:
                  he.isEclEu = v;
                  break;
                case Ke.ECL_EU_RTL:
                  he.isEclEuRtl = v;
                  break;
                case Ke.DARK:
                  he.isDark = v;
                  break;
                case Ke.COMPACT:
                  he.isCompact = v;
                  break;
                case Ke.EUI_LEGACY:
                  he.isEuiLegacy = v;
                  break;
                case Ke.EUI_LEGACY_HC:
                  he.isEuiLegacyHc = v;
                  break;
                case Ke.DS2025:
                  he.isDs2025 = v;
              }
              (this._state$.next({ themes: S, theme: he }),
                this._renderTheme(X, v));
            }
          }
          _renderTheme(h, v) {
            if (h.name === Ke.COMPACT) {
              this.asService.setBaseFontSize(v ? "14px" : "16px");
              const S = this.document.getElementById("eui-theme");
              this._renderThemeCss(h, v, S);
            } else if (h.name === Ke.ECL_EC_RTL || h.name === Ke.ECL_EU_RTL) {
              const S = this.document.getElementById("rtl-theme");
              this._renderThemeCss(h, v, S);
            } else {
              const S = this.document.getElementById("eui-theme");
              this._renderThemeCss(h, v, S);
            }
          }
          _renderThemeCss(h, v, S) {
            const F = this.document.getElementsByTagName("head")[0];
            if (v) {
              if (
                (h.cssClass &&
                  document.querySelector("html").classList.add(h.cssClass),
                h.styleSheet)
              )
                if (S) S.href = h.styleSheet;
                else {
                  const X = this.document.createElement("link");
                  ((X.id = "eui-theme"),
                    (X.rel = "stylesheet"),
                    (X.href = `assets/${h.styleSheet}`),
                    F.appendChild(X));
                }
            } else
              (h.cssClass &&
                document.querySelector("html").classList.remove(h.cssClass),
                h.styleSheet && S && (S.media = ""));
          }
          static {
            this.ɵfac = function (v) {
              return new (v || b)(i.KVO(Ce.q), i.KVO(Mt, 8), i.KVO(Oe));
            };
          }
          static {
            this.ɵprov = i.jDH({
              token: b,
              factory: b.ɵfac,
              providedIn: "root",
            });
          }
        }
        return b;
      })();
      ("defineDriver" in (ee || (ee = P.t(re, 2))) && (ee || (ee = P.t(re, 2))),
        new i.nKC("LOCAL_FORAGE_SERVICE_CONFIG"));
      const Ni = new i.nKC("localeIdMapper");
      let Za = (() => {
          class b extends le.D1 {
            static {
              this.DEFAULT_STATE = { id: "en-US" };
            }
            constructor(h, v, S, F, X, he) {
              (super({
                id:
                  S ||
                  Intl.DateTimeFormat().resolvedOptions().locale ||
                  b.DEFAULT_STATE.id,
              }),
                (this.store = h),
                (this.baseGlobalConfig = v),
                (this.locale_id = S),
                (this.localeMapper = F),
                (this.i18n = X),
                (this.log = he),
                (this.subNotifier = new Ot.B()),
                he && (this.logger = he.getLogger("core.LocaleService")),
                (this.stateSubject = new Ne.t(this.stateInstance)),
                (this.state = (0, ce.ot)(this.stateSubject, { equal: qe.A })),
                this.onStateChange.subscribe((je) => {
                  this.stateSubject.next(je);
                }),
                (this.config = (0, le.Dy)(this.baseGlobalConfig)),
                this.localeMapper || (this.localeMapper = st.kF));
            }
            ngOnDestroy() {
              (this.subNotifier.next(void 0), this.subNotifier.complete());
            }
            getState(h) {
              return h
                ? "function" == typeof h
                  ? this.stateSubject.asObservable().pipe(
                      (0, Fe.T)((v) => h(v)),
                      (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                    )
                  : this.stateSubject.asObservable().pipe(
                      (0, Fe.T)((v) =>
                        h
                          .split(".")
                          .reduce(
                            (F, X) => (F && void 0 !== F[X] ? F[X] : void 0),
                            v,
                          ),
                      ),
                      (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                    )
                : this.stateSubject
                    .asObservable()
                    .pipe((0, Je.F)((v, S) => (0, qe.A)(v, S)));
            }
            init(h) {
              return (
                super.initEuiService(),
                (h = h || { id: this.currentLocale }),
                this.config?.bindWithTranslate &&
                  this.bindTranslateServiceLangChangeToState(),
                (0, Be.of)({ success: !0 }).pipe(
                  (0, ue.M)(() => this.updateState(h)),
                )
              );
            }
            updateState(h) {
              const v = structuredClone(this.stateInstance);
              if (h?.id)
                try {
                  const S = this.localeMapper(h.id);
                  this.stateInstance = super.deepMerge(this.stateInstance, {
                    ...h,
                    id: S,
                  });
                } catch (S) {
                  const F = `Locale for '${h.id}' is not available.\nPlease use addLocale('${h.id}') first`;
                  throw (this.log && this.logger.info(F, S), new Error(F));
                }
              else
                this.stateInstance = super.deepMerge(this.stateInstance, {
                  ...h,
                });
              (this.onStateChange.next(this.stateInstance),
                (this.prevStateInstance = v));
            }
            getSignal() {
              return this.state;
            }
            get previousLocale() {
              return this.prevStateInstance?.id || this.currentLocale;
            }
            get currentLocale() {
              return this.stateInstance?.id;
            }
            bindTranslateServiceLangChangeToState() {
              this.i18n &&
                this.i18n.onStateChange
                  .pipe(
                    (0, we.Q)(this.subNotifier),
                    (0, Pn.p)(
                      (h) =>
                        null != h?.activeLang &&
                        h?.activeLang.length > 1 &&
                        h.activeLang.toLowerCase() !==
                          this.stateInstance?.id.slice(0, 2).toLowerCase(),
                    ),
                    (0, Fe.T)((h) => this.localeMapper(h.activeLang)),
                    (0, Y.n)((h) =>
                      this.getState().pipe(
                        (0, _t.s)(1),
                        (0, Fe.T)((v) => {
                          const S = v.available ? v.available : [];
                          return {
                            ...v,
                            id: h,
                            available: Array.from(new Set([...S, h])),
                          };
                        }),
                      ),
                    ),
                  )
                  .subscribe((h) => this.updateState(h));
            }
            static {
              this.ɵfac = function (v) {
                return new (v || b)(
                  i.KVO(on),
                  i.KVO(Mt),
                  i.KVO(i.xe9),
                  i.KVO(Ni, 8),
                  i.KVO(kr, 8),
                  i.KVO(Ft, 8),
                );
              };
            }
            static {
              this.ɵprov = i.jDH({
                token: b,
                factory: b.ɵfac,
                providedIn: "root",
              });
            }
          }
          return b;
        })(),
        Ss = (() => {
          class b extends le.D1 {
            static {
              this.DEFAULT_STATE = { userId: "annonymous" };
            }
            constructor(h) {
              (super(b.DEFAULT_STATE),
                (this.store = h),
                (this.stateSubject = new Ne.t(this.stateInstance)),
                (this.state = (0, ce.ot)(this.stateSubject, { equal: qe.A })),
                this.onStateChange.subscribe((v) => {
                  const S = structuredClone(v);
                  this.stateSubject.next(S);
                }));
            }
            init(h) {
              return (
                super.initEuiService(),
                Object.prototype.hasOwnProperty.call(h, "userId")
                  ? (this.updateState(h), (0, Be.of)({ success: !0 }))
                  : (0, Be.of)({
                      success: !1,
                      error: "Init object should be instance of BaseUserState",
                    })
              );
            }
            getState(h) {
              return h
                ? "function" == typeof h
                  ? this.stateSubject.asObservable().pipe(
                      (0, Fe.T)((v) => h(v)),
                      (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                    )
                  : this.stateSubject.asObservable().pipe(
                      (0, Fe.T)((v) =>
                        h
                          .split(".")
                          .reduce(
                            (F, X) => (F && void 0 !== F[X] ? F[X] : void 0),
                            v,
                          ),
                      ),
                      (0, Je.F)((v, S) => (0, qe.A)(v, S)),
                    )
                : this.stateSubject
                    .asObservable()
                    .pipe((0, Je.F)((v, S) => (0, qe.A)(v, S)));
            }
            updateState(h, v) {
              ((this.stateInstance = v
                ? v(this.stateInstance, h)
                : super.deepMerge(this.stateInstance, h)),
                this.onStateChange.next(this.stateInstance));
            }
            getSignal() {
              return this.state;
            }
            static {
              this.ɵfac = function (v) {
                return new (v || b)(i.KVO(on));
              };
            }
            static {
              this.ɵprov = i.jDH({
                token: b,
                factory: b.ɵfac,
                providedIn: "root",
              });
            }
          }
          return b;
        })();
      new i.nKC("UX_ERROR_MAPPING_HANDLER");
    },
    9410: (Di, jt, P) => {
      P.d(jt, {
        E: () => zt,
        PZ: () => ne,
        WA: () => _t,
        YU: () => In,
        Z1: () => At,
      });
      var L = P(4523),
        ee = P(5472),
        le = P(6648),
        i = P(3028),
        Re = P(8147),
        We = (function (K) {
          return (
            (K.KeycloakAngularNotInitialized = "KeycloakAngularNotInitialized"),
            (K.KeycloakAngularInit = "KeycloakAngularInit"),
            (K.AuthError = "AuthError"),
            (K.AuthLogout = "AuthLogout"),
            (K.AuthRefreshError = "AuthRefreshError"),
            (K.AuthRefreshSuccess = "AuthRefreshSuccess"),
            (K.AuthSuccess = "AuthSuccess"),
            (K.Ready = "Ready"),
            (K.TokenExpired = "TokenExpired"),
            (K.ActionUpdate = "ActionUpdate"),
            K
          );
        })(We || {});
      const Ot = (K) => {
          const ce = (0, ee.vPA)({ type: We.KeycloakAngularInit });
          return K
            ? ((K.onReady = (re) => {
                ce.set({ type: We.Ready, args: re });
              }),
              (K.onAuthError = (re) => {
                ce.set({ type: We.AuthError, args: re });
              }),
              (K.onAuthLogout = () => {
                ce.set({ type: We.AuthLogout });
              }),
              (K.onActionUpdate = (re, se) => {
                ce.set({
                  type: We.ActionUpdate,
                  args: { status: re, action: se },
                });
              }),
              (K.onAuthRefreshError = () => {
                ce.set({ type: We.AuthRefreshError });
              }),
              (K.onAuthRefreshSuccess = () => {
                ce.set({ type: We.AuthRefreshSuccess });
              }),
              (K.onAuthSuccess = () => {
                ce.set({ type: We.AuthSuccess });
              }),
              (K.onTokenExpired = () => {
                ce.set({ type: We.TokenExpired });
              }),
              ce)
            : (ce.set({ type: We.KeycloakAngularNotInitialized }), ce);
        },
        Ct = new ee.nKC("Keycloak Events Signal"),
        Fe = (K = {}) =>
          Object.entries(K).reduce(
            (ce, [re, se]) => ((ce[re] = se.roles), ce),
            {},
          ),
        _t = (K) => (ce, re) => {
          const se = (0, ee.WQX)(Re.A),
            $ = se?.authenticated ?? !1,
            Ge = {
              resourceRoles: Fe(se?.resourceAccess),
              realmRoles: se?.realmAccess?.roles ?? [],
            };
          return K(ce, re, {
            authenticated: $,
            keycloak: se,
            grantedRoles: Ge,
          });
        },
        Y = "Bearer",
        Ie = "Authorization",
        ne = (K) => ({
          ...K,
          bearerPrefix: K.bearerPrefix ?? Y,
          authorizationHeaderName: K.authorizationHeaderName ?? Ie,
          shouldUpdateToken: K.shouldUpdateToken ?? (() => !0),
        }),
        ue = (function () {
          var K = (0, L.A)(function* (
            ce,
            re,
            { shouldUpdateToken: se = ($) => !0 },
          ) {
            return !se(ce) || (yield re.updateToken().catch(() => !1));
          });
          return function (re, se, $) {
            return K.apply(this, arguments);
          };
        })(),
        In =
          (new ee.nKC(
            "Include the bearer token as implemented by the provided function",
          ),
          new ee.nKC(
            "Include the bearer token when explicitly defined int the URL pattern condition",
          )),
        zt = (K, ce) => {
          const se = ((0, ee.WQX)(In) ?? []).find((Ge) =>
            ((
              { method: K, url: ce },
              { urlPattern: re, httpMethods: se = [] },
            ) => {
              const $ =
                  0 === se.length || se.join().indexOf(K.toUpperCase()) > -1,
                Ge = re.test(ce);
              return $ && Ge;
            })(K, Ge),
          );
          if (!se) return ce(K);
          const $ = (0, ee.WQX)(Re.A);
          return (0, le.H)(ue(K, $, se)).pipe(
            (0, i.Z)(() =>
              $.authenticated
                ? ((K, ce, re, se) => {
                    const {
                      bearerPrefix: $ = Y,
                      authorizationHeaderName: Ge = Ie,
                    } = se;
                    return ce(
                      K.clone({ setHeaders: { [Ge]: `${$} ${re.token}` } }),
                    );
                  })(K, ce, $, se)
                : ce(K),
            ),
          );
        },
        Et = (K, ce) => {
          const { initOptions: re, features: se = [] } = ce;
          return re
            ? (0, ee.phd)(
                (0, L.A)(function* () {
                  const $ = (0, ee.WQX)(ee.uvJ);
                  ((0, ee.N4e)($, () => se.forEach((Ge) => Ge.configure())),
                    yield K.init(re).catch((Ge) =>
                      console.error("Keycloak initialization failed", Ge),
                    ));
                }),
              )
            : [];
        };
      function At(K) {
        const ce = new Re.A(K.config),
          re = K.providers ?? [],
          se = Ot(ce);
        return (0, ee.EmA)([
          { provide: Ct, useValue: se },
          { provide: Re.A, useValue: ce },
          ...re,
          Et(ce, K),
        ]);
      }
    },
  },
]);
