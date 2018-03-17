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
      'LICENSE',
      'README.md',
      'webpack.config.js',
      'src/index.js',
      'src/game.css',
      'src/states/GameState.js',
      'src/objects/ScoreText.js',
      'src/sprites/Dude.js'
    ]);
  });
});
