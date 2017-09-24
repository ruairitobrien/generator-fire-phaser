'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-fire-phaser:app', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'test-project',
        description: 'What a game!',
        author: 'Some One'
      });
  });

  it('creates files', () => {
    assert.file([
      '.babelrc',
      '.editorconfig',
      '.gitattributes',
      '.gitignore',
      '.npmrc',
      'package.json',
      'phaserResolve.js',
      'README.md',
      'webpack.config.js',
      'webpack.production.config.js',
      'www/index.html',
      'src/game.js',
      'src/game.css',
      'src/states/GameState.js',
      'src/objects/ScoreText.js',
      'src/sprites/Dude.js'
    ]);
  });
});
