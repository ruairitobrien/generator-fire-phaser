var path = require('path');
var phaserBuildPath = path.dirname(require.resolve('phaser-ce'));
var custom = path.join(phaserBuildPath, 'custom');

var phaserJs = 'phaser-split.js';
var pixiiJs = 'pixi.js';
var p2Js = 'p2.js';

function fullPathTo(fileName) {
  return path.join(custom, fileName);
}

module.exports = {
  /**
   * These paths are used with webpack resolve (https://webpack.github.io/docs/configuration.html#resolve-alias)
   * Since phaser exposes a pre-built module by default we need to use the original scripts
   * to be able to use phaser with a module loader properly.
   */
  paths: {
    phaser: fullPathTo(phaserJs),
    pixi: fullPathTo(pixiiJs),
    p2: fullPathTo(p2Js)
  },
  /**
   * Phaser 2 requires some global variables to be available when the phaser
   * script is loaded. This is a workaround to get phaser to work with es6 modules.
   * The https://github.com/webpack/expose-loader plugin is used to bind the required
   * variables.
   */
  loaders: [
    {test: new RegExp(phaserJs), loader: 'expose-loader?Phaser'},
    {test: new RegExp(pixiiJs), loader: 'expose-loader?PIXI'},
    {test: new RegExp(p2Js), loader: 'expose-loader?p2'}
  ]
};
