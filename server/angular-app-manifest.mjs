
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jansenolay.github.io/portfolio-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 487, hash: '17260bba5b4969fd7dd9aaad83d32d01653f4226342b9139434fb6c821d9f4c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1000, hash: 'bcf6c1715bfaa954abc566cdd31887cc49140c3c6c3227f2f4aee5819ea17a1c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7337, hash: '0e72b43ca9773a6a160af23c66a72d1b11d00bd3beddd5e49d3d96499137f396', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
