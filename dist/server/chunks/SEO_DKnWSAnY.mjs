import { f as createComponent, r as renderTemplate, i as createAstro } from './astro/server_CUVSL_N1.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SEO;
  const { businessName, city, streetAddress, postalCode, telephone, url } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n  {JSON.stringify(schema)}\n<\/script>'])));
}, "/Users/ocmac/Yogastudion/src/components/SEO.astro", void 0);

export { $$SEO as $ };
