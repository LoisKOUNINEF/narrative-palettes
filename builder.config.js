export default {
	esbuild: {
    bundle: true,
    minify: true,
    sourcemap: false,
    drop: ['console', 'debugger'],
    platform: 'browser',
    format: 'esm',
    target: ['es2015'],
    legalComments: 'none',
    loader: {
      '.json': 'json',
    },
    define: {
      'process.env.NODE_ENV': '"production"',
    },
	},
  sass: {
    paths: [ 
      'base', 
      'core',
      'components',
      'views',
    ], // in styles/
  },
	verbose: false,
}
