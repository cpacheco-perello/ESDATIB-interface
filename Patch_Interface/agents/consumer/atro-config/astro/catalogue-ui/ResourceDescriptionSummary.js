import { _ as A } from "./index.BRbk5JsM.js";
import {
  s as C,
  r as T,
  d as L,
  e as d,
  o as m,
  f as _,
  g,
  h as O,
  t as y,
  n as w,
  a as b,
} from "./pinia.2mrf23z1.js";
import { p as B } from "./vue-components.Yee89CK1.js";
import { _ as I } from "./_plugin-vue_export-helper.DlAUqK2U.js";
const U = "application/problem+json";
function z(e) {
  if (!e || typeof e != "object") return !1;
  const t = e;
  return (
    (t.type === void 0 || typeof t.type == "string") &&
    (t.title === void 0 || typeof t.title == "string") &&
    (t.status === void 0 || typeof t.status == "number") &&
    (t.detail === void 0 || typeof t.detail == "string") &&
    (t.instance === void 0 || typeof t.instance == "string")
  );
}
function K(e) {
  return e.headers.get("content-type")?.includes(U) ?? !1;
}
const j = (e) => {
    const t = e;
    return (
      t.keyErrorMessage !== void 0 &&
      t.response?.errorTitle !== void 0 &&
      t.response?.errorDescription !== void 0
    );
  },
  M = (e, t) => !e.ok || K(e) || j(t),
  S = (e, t) => (t ? `${A.capitalize(t)} API: ${e}` : e),
  x = (e, t) => (t ? `${e} (${t})` : e),
  v = (e, t, r, o, s) => ({
    title: S(e, r),
    description: x(t, o),
    ...(s !== void 0 && { status: s }),
  }),
  V = (e, t, r) => ({
    title: S(e.response.errorTitle, t),
    description: x(e.response.errorDescription, r),
  }),
  G = (e, t, r) => {
    const o = e.title || "An error occurred",
      s = e.detail || "Error details are not available";
    return {
      title: S(o, t),
      description: x(s, r),
      ...(e.status && { status: e.status }),
    };
  },
  N = (e, t, r, o) =>
    j(e)
      ? V(e, t, r)
      : z(e)
        ? G(e, t, r)
        : o?.status === 401 || o?.status === 403
          ? v(
              "Unauthorized",
              "You are not authorized to access this resource.",
              t,
              r,
              o.status,
            )
          : typeof e == "string"
            ? v("Error", e, t, r, o?.status)
            : v(
                "Unknown Error",
                "An unknown error occurred while processing your request.",
                t,
                r,
              ),
  ae = (e, t) => {
    (console.group(`🚨 ${e}`),
      console.error("Title:", t.title),
      console.error("Description:", t.description),
      console.error("Status:", t.status),
      console.error("Timestamp:", new Date().toISOString()),
      console.groupEnd());
  },
  Y = async (e) => {
    let t;
    try {
      t = await e.json();
    } catch {
      t = await e.text();
    }
    return t;
  };
async function le(
  e,
  { method: t, errorIdentifier: r, apiName: o, body: s, defaultData: l = null },
  a,
) {
  const n = C(l),
    u = T(null),
    i = T(!1);
  i.value = !0;
  try {
    const c = await fetch(e, {
        body: s ? JSON.stringify(s) : void 0,
        method: t,
        headers: { "Content-Type": "application/json" },
      }),
      p = await Y(c);
    M(c, p)
      ? ((u.value = N(p, o, r, c)), (n.value = l))
      : ((n.value = a ? a(p) : p), (u.value = null));
  } catch (c) {
    ((u.value = v(
      "An error occurred while fetching data",
      c instanceof Error ? c.message : String(c),
      o,
      r,
    )),
      (n.value = l));
  } finally {
    i.value = !1;
  }
  return { data: n, error: u, isLoading: i };
}
const P = (e, t, r = {}) => {
    const { handleArrays: o = !0, skipKeys: s = [], maxDepth: l = 100 } = r,
      a = (n, u = 0) => {
        if (u >= l || !n) return n;
        if (Array.isArray(n))
          return o
            ? n.map((i) => (i && typeof i == "object" ? a(i, u + 1) : i))
            : n;
        if (typeof n == "object") {
          const i = {};
          for (const [c, p] of Object.entries(n)) {
            if (s.includes(c)) continue;
            const f = t(c, p, { isKey: !0, parent: n });
            f.shouldContinue && f.value && typeof f.value == "object"
              ? (i[f.key] = a(f.value, u + 1))
              : (i[f.key] = f.value);
          }
          return i;
        }
        return n;
      };
    return a(e);
  },
  h = (e, t = "simpl") => e.replace(new RegExp(`^${t}:`), ""),
  R = (e, t = "simpl") =>
    P(e, (r, o) => ({ key: h(r, t), value: o, shouldContinue: !0 })),
  q = (e) =>
    h(e)
      .replace(/([a-z])(?=[A-Z])/g, "$1 ")
      .replace(/-/g, " ")
      .replace(/^./, (t) => t.toUpperCase())
      .replace(/@/g, ""),
  k = (e, t = "simpl") =>
    !e || typeof e != "object"
      ? e
      : Array.isArray(e)
        ? e.map((r) => k(r, t))
        : P(e, (r, o) => ({ key: q(r), value: o, shouldContinue: !0 })),
  E = (e, t) => (
    typeof t == "string" && (t = [t]),
    !e || typeof e == "string"
      ? e
      : P(e, (r, o) => ({ key: r, value: o, shouldContinue: !t.includes(r) }), {
          skipKeys: t,
        })
  ),
  ue = (e) => E(e, "@type"),
  J = (e) => E(e, "rdf:type"),
  D = (e) => {
    if (!e) return e;
    if (e["@value"]) return e["@value"];
    if (e && typeof e == "object") {
      const t = {};
      for (const [r, o] of Object.entries(e))
        r.startsWith("@") || (t[r] = D(o));
      return t;
    }
    return e;
  },
  fe = (e) => {
    const t = D(e),
      r = R(t),
      o = E(r, ["@context", "@id", "@type", "rdf:type", "proof"]);
    return k(o);
  },
  W = (e) =>
    e.toLowerCase().includes("data")
      ? "document"
      : e.toLowerCase().includes("application")
        ? "apps"
        : e.toLowerCase().includes("infrastructure")
          ? "server"
          : "document",
  Z = (e) => {
    const t = e.credentialSubject?.["simpl:dataProperties"],
      r = e.credentialSubject?.["simpl:providerInformation"],
      o = e.credentialSubject?.["simpl:generalServiceProperties"],
      s = o ? R(J(o)) : null;
    return {
      id: e.credentialSubject["@id"],
      ...s,
      title: s?.title || s?.name,
      description: s?.description,
      offeringType: s?.offeringType,
      providedBy: r?.["simpl:providedBy"],
      format: t?.["simpl:format"],
    };
  },
  H = (e) => {
    const t = Object.keys(e)
      .filter((r) => r !== "claimsGraphUri")
      .reduce((r, o) => ((r[o] = e[o]), r), {});
    return {
      id: e.claimsGraphUri?.[0],
      ...t,
      title: t.title || t.name,
      description: t.description,
    };
  },
  pe = (e) => {
    if (!e) return;
    const r =
      e.credentialSubject?.["simpl:generalServiceProperties"]?.[
        "simpl:sharingMethodId"
      ];
    return r ? h(r) : void 0;
  },
  de = (e) => {
    if (!e) return;
    const r =
      e.credentialSubject?.["simpl:generalServiceProperties"]?.[
        "simpl:offeringType"
      ];
    return r ? h(r) : void 0;
  },
  Q = L({
    __name: "ResourceDescriptionSummary",
    props: {
      isLarge: { type: Boolean, default: !1 },
      searchResult: {},
      resourceDescriptionDocument: {},
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        o = b(() => {
          if (r.searchResult) return H(r.searchResult);
          if (r.resourceDescriptionDocument)
            return Z(r.resourceDescriptionDocument);
        }),
        s = b(() =>
          o.value &&
          "offeringType" in o.value &&
          typeof o.value.offeringType == "string"
            ? o.value.offeringType
            : "",
        ),
        l = b(() => W(s.value)),
        a = {
          props: r,
          item: o,
          resourceType: s,
          iconName: l,
          get _() {
            return A;
          },
          get SIcon() {
            return B;
          },
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
  X = { class: "flex flex-col" },
  F = { class: "text-secondary mb-4 flex flex-row gap-2" },
  $ = { class: "result-resource-type font-semibold" },
  ee = {
    key: 0,
    class: "bg-secondary h-1 w-1 flex-shrink-0 self-center rounded-full",
  },
  te = { key: 1, class: "resource-format uppercase" },
  re = { key: 1, class: "result-description mt-4" };
function oe(e, t, r, o, s, l) {
  return (
    m(),
    d("div", X, [
      _("div", F, [
        O(
          o.SIcon,
          { name: o.iconName, class: "text-secondary h-5 w-auto flex-grow-0" },
          null,
          8,
          ["name"],
        ),
        _("div", $, y(o._.capitalize(o.resourceType)) + "​", 1),
        o.item?.format ? (m(), d("div", ee)) : g("", !0),
        o.item?.format ? (m(), d("div", te, y(o.item.format), 1)) : g("", !0),
      ]),
      _(
        "p",
        {
          class: w([
            "result-title font-semibold",
            { "text-secondary text-2xl": r.isLarge, "text-xl": !r.isLarge },
          ]),
        },
        y(o.item?.title),
        3,
      ),
      o.item?.providedBy
        ? (m(),
          d(
            "p",
            { key: 0, class: w(["text-base", { "mt-4": r.isLarge }]) },
            y(o.item.providedBy),
            3,
          ))
        : g("", !0),
      o.item?.description
        ? (m(), d("p", re, y(o.item.description), 1))
        : g("", !0),
    ])
  );
}
const me = I(Q, [["render", oe]]);
export {
  me as R,
  le as a,
  de as b,
  pe as c,
  fe as d,
  ae as e,
  ue as f,
  Z as g,
  q as h,
};
