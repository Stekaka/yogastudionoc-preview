import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_uUssomjo.mjs';
import 'es-module-lexer';
import { n as decodeKey } from './chunks/astro/server_CUVSL_N1.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/ocmac/Yogastudion/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/book","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/book\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"book","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/book.ts","pathname":"/api/book","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/booking","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/booking\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"booking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/booking.ts","pathname":"/api/booking","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boka.DqANG3GA.css"}],"routeData":{"route":"/boka","isIndex":false,"type":"page","pattern":"^\\/boka\\/?$","segments":[[{"content":"boka","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boka.astro","pathname":"/boka","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boka.DqANG3GA.css"}],"routeData":{"route":"/kurser","isIndex":false,"type":"page","pattern":"^\\/kurser\\/?$","segments":[[{"content":"kurser","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/kurser.astro","pathname":"/kurser","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boka.DqANG3GA.css"}],"routeData":{"route":"/om-oss","isIndex":false,"type":"page","pattern":"^\\/om-oss\\/?$","segments":[[{"content":"om-oss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/om-oss.astro","pathname":"/om-oss","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boka.DqANG3GA.css"}],"routeData":{"route":"/schema","isIndex":false,"type":"page","pattern":"^\\/schema\\/?$","segments":[[{"content":"schema","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/schema.astro","pathname":"/schema","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boka.DqANG3GA.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/ocmac/Yogastudion/src/pages/boka.astro",{"propagation":"none","containsHead":true}],["/Users/ocmac/Yogastudion/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/ocmac/Yogastudion/src/pages/kurser.astro",{"propagation":"none","containsHead":true}],["/Users/ocmac/Yogastudion/src/pages/om-oss.astro",{"propagation":"none","containsHead":true}],["/Users/ocmac/Yogastudion/src/pages/schema.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/book@_@ts":"pages/api/book.astro.mjs","\u0000@astro-page:src/pages/api/booking@_@ts":"pages/api/booking.astro.mjs","\u0000@astro-page:src/pages/boka@_@astro":"pages/boka.astro.mjs","\u0000@astro-page:src/pages/kurser@_@astro":"pages/kurser.astro.mjs","\u0000@astro-page:src/pages/om-oss@_@astro":"pages/om-oss.astro.mjs","\u0000@astro-page:src/pages/schema@_@astro":"pages/schema.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/Users/ocmac/Yogastudion/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_BMLh_0lF.mjs","/Users/ocmac/Yogastudion/src/components/BokaSchedule":"_astro/BokaSchedule.CynsmsLk.js","/Users/ocmac/Yogastudion/src/components/CourseCard":"_astro/CourseCard.Atc3VjFm.js","/Users/ocmac/Yogastudion/src/components/WeeklySchedule":"_astro/WeeklySchedule.OgnDYZGZ.js","/Users/ocmac/Yogastudion/src/components/TeacherGallery":"_astro/TeacherGallery.Btppyhql.js","/Users/ocmac/Yogastudion/src/components/BookingForm":"_astro/BookingForm.CU9aJ9i3.js","@astrojs/react/client.js":"_astro/client.DsnhMnP3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/boka.DqANG3GA.css","/videos/YogaHero1.mp4","/videos/YogastudionLogo1.png","/videos/Yogastudionfrånköket.webp","/_astro/BokaSchedule.CynsmsLk.js","/_astro/BookingForm.CU9aJ9i3.js","/_astro/CourseCard.Atc3VjFm.js","/_astro/TeacherGallery.Btppyhql.js","/_astro/WeeklySchedule.OgnDYZGZ.js","/_astro/client.DsnhMnP3.js","/_astro/index.CVf8TyFT.js","/_astro/index.CeGaxMbW.js","/_astro/index.uX_C760X.js","/_astro/proxy.CnMULZUg.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Xic6zUmJPa6UAKiK1scqFXowtnLH552o5zWi5SVK9Nc=","experimentalEnvGetSecretEnabled":false});

export { manifest };
