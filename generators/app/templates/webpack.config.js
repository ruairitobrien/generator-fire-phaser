var HtmlWebpackPlugin = require('html-webpack-plugin')
var resolvedPhaser = require('./phaserResolve');

module.exports = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json'
        }
      },
    ].concat(resolvedPhaser.rules)
  },
  resolve: {
    alias: resolvedPhaser.paths
  },
  performance: {
    hints: false
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
