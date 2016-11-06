var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var resolvedPhaser = require('./phaserResolve');

var baseDir = './www';
var browserSyncConfig = {
  host: process.env.IP || 'localhost',
  port: process.env.PORT || 3000,
  server: {
    baseDir: baseDir
  }
};

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  noInfo: true,
  entry: './src/game.js',
  output: {
      path: baseDir,
      filename: 'game.js'
  },
  watch: true,
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BrowserSyncPlugin(browserSyncConfig)
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.json$/, loader: 'json' }
    ].concat(resolvedPhaser.loaders)
  },
  resolve: {
    alias: resolvedPhaser.paths
  }
};
