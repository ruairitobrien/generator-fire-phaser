var webpack = require('webpack');
var resolvedPhaser = require('./phaserResolve');

var baseDir = './www';

module.exports = {
  entry: './src/game.js',
  output: {
      path: baseDir,
      filename: 'game.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()

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
}
