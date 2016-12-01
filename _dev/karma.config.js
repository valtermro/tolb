const babelConfig = require('./babel.config');

const files = ['./**/*_test.js'];

module.exports = config => config.set({
  basePath: '../src',
  files: files,
  preprocessors: files.reduce((a, f) =>
    (a[f] = ['webpack', 'sourcemap']) && a, {}), // eslint-disable-line
  port: 9876,
  colors: true,
  autoWatch: true,
  singleRun: false,

  plugins: [
    'karma-mocha',
    'karma-sourcemap-loader',
    'karma-webpack',
    'karma-chrome-launcher',
  ],
  frameworks: ['mocha'],
  browsers: ['Chrome'],

  client: {
    mocha: { bail: true },
  },

  webpack: {
    devtool: 'inline-source-map',
    module: {
      loaders: [
        { test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: babelConfig.node,
        },
      ],
    },
    node: {
      fs: 'empty',
    },
  },

  webpackMiddleware: {
    noInfo: true,
    stats: false,
  },
});
