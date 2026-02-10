import "./index.CgJZnPxS.js";
import {
  d as R,
  n as o,
  o as s,
  p as d,
  q as W,
  t as S,
  u as l,
  F as p,
  v as I,
  c as _,
  a as K,
  x as Y,
  y as f,
  z as X,
  A as Z,
  C as $,
  W as ee,
  K as ae,
  D as re,
  E as N,
  G as B,
  I as v,
  J as y,
  L as F,
  r as u,
  f as te,
  M as se,
  O as ne,
  Q as U,
  R as q,
  T as Q,
  V as ce,
  b as le,
  X as oe,
  Y as ie,
} from "./vue-components.BBBbsI74.js";
import { _ as x } from "./_plugin-vue_export-helper.DlAUqK2U.js";
import { f as L } from "./services.CJ3D2YoZ.js";
const ue = R({
    __name: "SearchResults",
    props: {
      result: {},
      showJson: { type: Boolean, default: !1 },
      resultsNumberSuffix: {},
    },
    setup(t, { expose: r }) {
      r();
      const a = t,
        e = K(() => a.result?.length ?? 0),
        n = {
          props: a,
          resultCount: e,
          get ResourceDescriptionCard() {
            return Y;
          },
        };
      return (
        Object.defineProperty(n, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  de = { class: "border-t" },
  he = { class: "search-results-details mb-10 pt-3" },
  me = { class: "mb-1 text-xl" },
  _e = { class: "number-of-results" },
  fe = { class: "search-results flex flex-col gap-4 md:grid md:grid-cols-2" };
function Se(t, r, a, e, n, i) {
  return (
    s(),
    o("div", de, [
      d("div", he, [
        d("p", me, [
          d("span", _e, l(e.resultCount), 1),
          S(
            " result" +
              l(e.resultCount !== 1 ? "s" : "") +
              " " +
              l(a.resultsNumberSuffix),
            1,
          ),
        ]),
        W(t.$slots, "details"),
      ]),
      d("div", fe, [
        (s(!0),
        o(
          p,
          null,
          I(
            a.result,
            (c) => (
              s(),
              _(
                e.ResourceDescriptionCard,
                {
                  key: c.claimsGraphUri?.[0],
                  "search-result": c,
                  "show-more-details": !0,
                  "card-button": {
                    href: `/resourceDescriptions/${c.claimsGraphUri?.[0]}`,
                  },
                },
                null,
                8,
                ["search-result", "card-button"],
              )
            ),
          ),
          128,
        )),
      ]),
    ])
  );
}
const G = x(ue, [["render", Se]]),
  ve = R({
    __name: "FormattedNumberRangeValue",
    props: { label: {}, numberRange: {} },
    setup(t, { expose: r }) {
      r();
      const e = {
        isMin: (n) => n.includes(">"),
        get invertOperator() {
          return X;
        },
      };
      return (
        Object.defineProperty(e, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        e
      );
    },
  });
function pe(t, r, a, e, n, i) {
  return (
    s(),
    o("span", null, [
      e.isMin(a.numberRange.op1)
        ? (s(),
          o(
            p,
            { key: 0 },
            [
              S(
                l(a.numberRange.value1) +
                  " " +
                  l(e.invertOperator(a.numberRange.op1)),
                1,
              ),
            ],
            64,
          ))
        : a.numberRange.op2 && e.isMin(a.numberRange.op2)
          ? (s(),
            o(
              p,
              { key: 1 },
              [
                S(
                  l(a.numberRange.value2) +
                    " " +
                    l(e.invertOperator(a.numberRange.op2)),
                  1,
                ),
              ],
              64,
            ))
          : f("", !0),
      S(" " + l(a.label) + " ", 1),
      a.numberRange.op2 && !e.isMin(a.numberRange.op2)
        ? (s(),
          o(
            p,
            { key: 2 },
            [S(l(a.numberRange.op2) + " " + l(a.numberRange.value2), 1)],
            64,
          ))
        : e.isMin(a.numberRange.op1)
          ? f("", !0)
          : (s(),
            o(
              p,
              { key: 3 },
              [S(l(a.numberRange.op1) + " " + l(a.numberRange.value1), 1)],
              64,
            )),
    ])
  );
}
const be = x(ve, [["render", pe]]),
  ge = R({
    __name: "SearchedProperties",
    props: { input: {}, level: { default: 0 } },
    setup(t, { expose: r }) {
      r();
      const a = {
        get isAdvancedSearchNumberRangeValue() {
          return re;
        },
        get humanizeLabel() {
          return ae;
        },
        get filterOutAtTypes() {
          return ee;
        },
        FormattedNumberRangeValue: be,
      };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  ye = { class: "search-parameter-label font-semibold" },
  Re = { key: 1, class: "search-parameter-value" };
function xe(t, r, a, e, n, i) {
  const c = Z("SearchedProperties", !0);
  return a.input &&
    typeof a.input != "string" &&
    Object.keys(a.input).length > 0
    ? (s(),
      o(
        "div",
        {
          key: 0,
          style: $({ marginLeft: `${a.level}rem` }),
          class: "search-parameter leading-6",
        },
        [
          (s(!0),
          o(
            p,
            null,
            I(
              e.filterOutAtTypes(a.input),
              (h, m) => (
                s(),
                o("div", null, [
                  d("span", ye, l(e.humanizeLabel(m)) + ": ", 1),
                  e.isAdvancedSearchNumberRangeValue(h)
                    ? (s(),
                      _(
                        e.FormattedNumberRangeValue,
                        {
                          key: 0,
                          label: e.humanizeLabel(m),
                          "number-range": h,
                          class: "search-parameter-value",
                        },
                        null,
                        8,
                        ["label", "number-range"],
                      ))
                    : (s(),
                      _(c, { key: 1, input: h, level: a.level + 1 }, null, 8, [
                        "input",
                        "level",
                      ])),
                ])
              ),
            ),
            256,
          )),
        ],
        4,
      ))
    : typeof a.input == "string"
      ? (s(), o("span", Re, l(a.input), 1))
      : f("", !0);
}
const ke = x(ge, [["render", xe]]),
  Ce = R({
    __name: "SearchedPropertiesTree",
    props: { inputProperties: {} },
    setup(t, { expose: r }) {
      r();
      const a = { SearchedProperties: ke };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  });
function Oe(t, r, a, e, n, i) {
  return (
    s(),
    _(
      e.SearchedProperties,
      {
        input: a.inputProperties,
        level: 0,
        class: "latest-search-parameters flex flex-col gap-2",
      },
      null,
      8,
      ["input"],
    )
  );
}
const De = x(Ce, [["render", Oe]]),
  z = (t) => t.items.map((r) => Object.values(r)[0]),
  we = (t) =>
    t.Service.map((r) => ({ label: r.replace(/\.ttl/, ""), value: r })),
  Pe = (t) => {
    if (!t || Object.keys(t).length === 0) return;
    const r = {};
    for (const [a, e] of Object.entries(t))
      for (const [n, i] of Object.entries(e)) {
        const c = n.replace(/^[^:]*:/, ""),
          h =
            a.split(":")[0] +
            ":" +
            a.split(":")[1].slice(0, 1).toUpperCase() +
            a.split(":")[1].slice(1);
        r[h] = { ...r[h], "@type": a, [c]: i };
      }
    return r;
  };
function Te() {
  return {
    fetchSearchSchemas: () =>
      L(
        "/api/schemas",
        {
          method: "GET",
          errorIdentifier: "SCHEMA_FETCH_ERROR",
          apiName: "xsfc advanced search be",
          defaultData: [],
        },
        we,
      ),
    fetchConvertedSchema: (a) =>
      L(`/api/schemas/${a}/content?schemaUIType=advancedSearch`, {
        method: "GET",
        errorIdentifier: "TTL_CONVERT_ERROR",
        apiName: "catalogue UI ttl to json",
      }),
  };
}
async function Le(t) {
  return L(
    "/api/selfDescriptions/advanced",
    {
      method: "POST",
      body: t,
      errorIdentifier: "ADVANCED_SEARCH_ERROR",
      apiName: "advanced search",
      defaultData: [],
    },
    z,
  );
}
const Ve = R({
    __name: "AdvancedSearch",
    setup(t, { expose: r }) {
      r();
      const { fetchSearchSchemas: a, fetchConvertedSchema: e } = Te(),
        n = u([]),
        i = u(),
        c = u(null),
        h = u(!0),
        m = te({ data: {}, errors: [] }),
        k = u(null),
        C = u(!1),
        D = u(!1),
        V = u([]),
        w = u(null),
        O = u(null),
        E = u(null),
        j = u(0);
      a().then(({ data: b, error: g }) => {
        (g.value
          ? (O.value = g.value)
          : ((O.value = null), (n.value = b.value)),
          (h.value = !1));
      });
      const J = async (b) => {
          ((i.value = b), (m.data = {}));
          const { data: g, error: T } = await e(b);
          T.value
            ? (O.value = T.value)
            : ((O.value = null),
              (c.value = g.value?.root
                ? Object.values(g.value.root)[0]
                : void 0));
        },
        H = async (b) => {
          m.errors = b.errors ?? [];
        },
        P = K(() => Pe(m.data)),
        A = {
          fetchSearchSchemas: a,
          fetchConvertedSchema: e,
          schemas: n,
          selectedSchemaKey: i,
          selectedSchema: c,
          isSchemasLoading: h,
          form: m,
          lastSearchedProperties: k,
          isSearchLoading: C,
          showResults: D,
          result: V,
          errorDetails: w,
          schemasErrorDetails: O,
          resultsContainer: E,
          formKey: j,
          selectShape: J,
          onChange: H,
          searchData: P,
          handleSearchSubmit: async (b) => {
            if (!P.value) return;
            ((D.value = !1), (k.value = se(P.value)));
            const g = E.value.getBoundingClientRect().top + window.scrollY;
            (window.scrollTo({ top: g, behavior: "smooth" }), (C.value = !0));
            const { data: T, error: M } = await Le(P.value);
            (M.value
              ? (w.value = M.value)
              : ((w.value = null), (V.value = T.value)),
              (C.value = !1),
              (D.value = !0));
          },
          resetForm: () => {
            ((m.data = {}),
              (m.errors = []),
              j.value++,
              (D.value = !1),
              (V.value = []),
              (k.value = null),
              (w.value = null));
          },
          get SSelect() {
            return ce;
          },
          get SButton() {
            return Q;
          },
          get SLoadingSpinner() {
            return q;
          },
          get SStatusMessage() {
            return U;
          },
          get SJsonFormsWrapper() {
            return ne;
          },
          SearchResults: G,
          SearchedPropertiesTree: De,
        };
      return (
        Object.defineProperty(A, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        A
      );
    },
  }),
  Ee = { class: "schemas-loading flex h-20 items-center justify-center pt-4" },
  je = { class: "flex flex-col gap-y-4 pt-4 pb-20" },
  Ae = { class: "flex max-w-screen-md flex-col gap-y-4" },
  Me = { class: "flex flex-row justify-end gap-4" },
  Ne = { ref: "resultsContainer" },
  Be = { class: "flex flex-col gap-4" };
function Fe(t, r, a, e, n, i) {
  return (
    s(),
    o(
      p,
      null,
      [
        N(d("div", Ee, [v(e.SLoadingSpinner, { class: "h-20 w-20" })], 512), [
          [B, e.isSchemasLoading],
        ]),
        N(
          d(
            "div",
            je,
            [
              d("div", Ae, [
                e.schemasErrorDetails
                  ? (s(),
                    _(
                      e.SStatusMessage,
                      {
                        key: 0,
                        class: "schemas-error",
                        title: e.schemasErrorDetails.title,
                        variant: "error",
                      },
                      {
                        default: y(() => [
                          S(l(e.schemasErrorDetails.description), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      ["title"],
                    ))
                  : f("", !0),
                e.schemas.length
                  ? (s(),
                    _(
                      e.SSelect,
                      {
                        key: 1,
                        modelValue: e.selectedSchemaKey,
                        "onUpdate:modelValue":
                          r[0] || (r[0] = (c) => (e.selectedSchemaKey = c)),
                        id: "search-schema",
                        options: e.schemas,
                        label: "Tipus de recurs",
                        onChange: e.selectShape,
                      },
                      null,
                      8,
                      ["modelValue", "options"],
                    ))
                  : f("", !0),
              ]),
              e.selectedSchema
                ? (s(),
                  o(
                    "form",
                    {
                      key: e.formKey,
                      action: "",
                      onSubmit: F(e.handleSearchSubmit, ["prevent"]),
                      class: "flex max-w-screen-md flex-col gap-y-4 pb-5",
                    },
                    [
                      d("div", null, [
                        v(
                          e.SJsonFormsWrapper,
                          {
                            data: e.form.data,
                            "onUpdate:data":
                              r[1] || (r[1] = (c) => (e.form.data = c)),
                            schema: e.selectedSchema,
                            "form-schema-variant": "advancedSearch",
                            onChange: e.onChange,
                          },
                          null,
                          8,
                          ["data", "schema"],
                        ),
                      ]),
                      d("div", Me, [
                        v(
                          e.SButton,
                          {
                            severity: "secondary",
                            type: "button",
                            disabled:
                              !e.form.data ||
                              Object.keys(e.form.data).length === 0,
                            onClick: e.resetForm,
                            label: "Netejar paràmetres",
                          },
                          null,
                          8,
                          ["disabled"],
                        ),
                        v(
                          e.SButton,
                          {
                            class: "advanced-search-button",
                            icon: "search",
                            iconPos: "right",
                            severity: "primary",
                            type: "submit",
                            disabled:
                              e.isSearchLoading ||
                              !e.searchData ||
                              Object.keys(e.searchData).length === 0,
                            onSubmit: F(e.handleSearchSubmit, ["prevent"]),
                            label: "Cerca",
                          },
                          null,
                          8,
                          ["disabled"],
                        ),
                        e.isSearchLoading
                          ? (s(),
                            _(e.SLoadingSpinner, {
                              key: 0,
                              class: "search-loading ml-4",
                            }))
                          : f("", !0),
                      ]),
                    ],
                    32,
                  ))
                : f("", !0),
              d(
                "div",
                Ne,
                [
                  e.showResults
                    ? (s(),
                      _(
                        e.SearchResults,
                        {
                          key: 0,
                          result: e.result,
                          "results-number-suffix": "per els paràmetres",
                        },
                        {
                          details: y(() => [
                            d("div", Be, [
                              e.lastSearchedProperties
                                ? (s(),
                                  _(
                                    e.SearchedPropertiesTree,
                                    {
                                      key: 0,
                                      "input-properties":
                                        e.lastSearchedProperties,
                                    },
                                    null,
                                    8,
                                    ["input-properties"],
                                  ))
                                : f("", !0),
                              e.errorDetails
                                ? (s(),
                                  _(
                                    e.SStatusMessage,
                                    {
                                      key: 1,
                                      title: e.errorDetails.title,
                                      variant: "error",
                                    },
                                    {
                                      default: y(() => [
                                        S(l(e.errorDetails.description), 1),
                                      ]),
                                      _: 1,
                                    },
                                    8,
                                    ["title"],
                                  ))
                                : f("", !0),
                            ]),
                          ]),
                          _: 1,
                        },
                        8,
                        ["result"],
                      ))
                    : f("", !0),
                ],
                512,
              ),
            ],
            512,
          ),
          [[B, !e.isSchemasLoading]],
        ),
      ],
      64,
    )
  );
}
const Ie = x(Ve, [["render", Fe]]);
async function Ke(t) {
  const {
    data: r,
    error: a,
    isLoading: e,
  } = await L(
    `/api/selfDescriptions?q=${encodeURIComponent(t)}`,
    {
      method: "GET",
      errorIdentifier: "QUICK_SEARCH_ERROR",
      apiName: "quick search",
      defaultData: [],
    },
    z,
  );
  return { data: r, error: a, isLoading: e };
}
const Ue = R({
    __name: "QuickSearch",
    props: { search: {} },
    setup(t, { expose: r }) {
      r();
      const a = u([]),
        e = u(null),
        n = u(!1),
        i = t,
        c = u(i.search),
        h = async () => {
          if (!i.search) return;
          n.value = !0;
          const { data: k, error: C } = await Ke(i.search);
          (C.value ? (e.value = C.value) : k.value && (a.value = k.value),
            (n.value = !1));
        };
      le(h);
      const m = {
        result: a,
        errorDetails: e,
        isLoading: n,
        props: i,
        localSearchValue: c,
        performSearch: h,
        get SLoadingSpinner() {
          return q;
        },
        get SStatusMessage() {
          return U;
        },
        get SInput() {
          return oe;
        },
        get SButton() {
          return Q;
        },
        SearchResults: G,
      };
      return (
        Object.defineProperty(m, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        m
      );
    },
  }),
  qe = {
    action: "/",
    method: "get",
    class: "mb-4 flex flex-row justify-start gap-4 pt-4",
  },
  Qe = { key: 1 },
  Ge = { key: 1 };
function ze(t, r, a, e, n, i) {
  return (
    s(),
    o(
      p,
      null,
      [
        d("form", qe, [
          v(
            e.SInput,
            {
              id: "quick-search-inpage",
              class: "w-full max-w-screen-md flex-grow",
              name: "search",
              type: "text",
              placeholder: "Cerca ràpida",
              modelValue: e.localSearchValue,
              "onUpdate:modelValue":
                r[0] || (r[0] = (c) => (e.localSearchValue = c)),
            },
            null,
            8,
            ["modelValue"],
          ),
          v(e.SButton, {
            class: "quick-search-button",
            label: "Cerca",
            icon: "search",
            iconPos: "right",
            severity: "primary",
            type: "submit",
          }),
        ]),
        d("div", null, [
          e.isLoading
            ? (s(), _(e.SLoadingSpinner, { key: 0 }))
            : a.search?.length
              ? (s(),
                o("div", Qe, [
                  e.errorDetails
                    ? (s(),
                      _(
                        e.SStatusMessage,
                        {
                          key: 0,
                          class: "quick-search-error",
                          title: e.errorDetails.title,
                          variant: "error",
                        },
                        {
                          default: y(() => [
                            S(l(e.errorDetails.description), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["title"],
                      ))
                    : (s(),
                      o("div", Ge, [
                        v(
                          e.SearchResults,
                          { result: e.result },
                          {
                            details: y(() => [
                              r[1] ||
                                (r[1] = d(
                                  "strong",
                                  null,
                                  "per la cadena de cerca:",
                                  -1,
                                )),
                              S(" " + l(e.props.search), 1),
                            ]),
                            _: 1,
                          },
                          8,
                          ["result"],
                        ),
                      ])),
                ]))
              : f("", !0),
        ]),
      ],
      64,
    )
  );
}
const Je = x(Ue, [["render", ze]]),
  He = R({
    __name: "SearchTabs",
    props: { search: {} },
    setup(t, { expose: r }) {
      r();
      const e = {
        tabs: [
          { tabName: "quick-search", tabTitle: "Cerca ràpida" },
          { tabName: "advanced-search", tabTitle: "Cerca avançada" },
        ],
        get STabs() {
          return ie;
        },
        AdvancedSearch: Ie,
        QuickSearch: Je,
      };
      return (
        Object.defineProperty(e, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        e
      );
    },
  }),
  We = { class: "search-tabs" };
function Ye(t, r, a, e, n, i) {
  return (
    s(),
    o("div", We, [
      v(
        e.STabs,
        { tabs: e.tabs },
        {
          "quick-search": y(() => [
            v(e.QuickSearch, { search: a.search }, null, 8, ["search"]),
          ]),
          "advanced-search": y(() => [v(e.AdvancedSearch)]),
          _: 1,
        },
      ),
    ])
  );
}
const ta = x(He, [["render", Ye]]);
export { ta as default };
