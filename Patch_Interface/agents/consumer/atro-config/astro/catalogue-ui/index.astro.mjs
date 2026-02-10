import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_Cnh9Zfda.mjs';
import 'piccolore';
import { P as PageHeader } from '../chunks/PageHeader_bAco-vn0.mjs';
import { $ as $$Layout } from '../chunks/Layout_CeKZ73gq.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_DM40fJWi.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const search = Astro2.url.searchParams.get("search") || "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cerca al catàleg ESDATIB" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageHeader", PageHeader, { "title": "Cerca al catàleg ESDATIB" })} ${renderComponent($$result2, "SearchTabs", null, { "client:only": "vue", "search": search, "client:component-hydration": "only", "client:component-path": "/app/src/components/search/SearchTabs.vue", "client:component-export": "default" })} ` })}`;
}, "/app/src/pages/index.astro", void 0);

const $$file = "/app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };