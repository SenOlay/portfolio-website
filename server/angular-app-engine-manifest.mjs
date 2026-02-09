
export default {
  basePath: 'https://jansenolay.github.io/portfolio-website',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
