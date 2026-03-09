import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CaEPSzJz.mjs';
import { manifest } from './manifest_BMLh_0lF.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/book.astro.mjs');
const _page2 = () => import('./pages/api/booking.astro.mjs');
const _page3 = () => import('./pages/boka.astro.mjs');
const _page4 = () => import('./pages/kurser.astro.mjs');
const _page5 = () => import('./pages/om-oss.astro.mjs');
const _page6 = () => import('./pages/schema.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/book.ts", _page1],
    ["src/pages/api/booking.ts", _page2],
    ["src/pages/boka.astro", _page3],
    ["src/pages/kurser.astro", _page4],
    ["src/pages/om-oss.astro", _page5],
    ["src/pages/schema.astro", _page6],
    ["src/pages/index.astro", _page7]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///Users/ocmac/Yogastudion/dist/client/",
    "server": "file:///Users/ocmac/Yogastudion/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
