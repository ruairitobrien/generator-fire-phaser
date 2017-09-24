'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }
  prompting() {
    this.log(yosay(
      'Welcome to the ' + chalk.green('generator-fire-phaser') + ' generator!'
    ));

    var prompts = [{
      type: String,
      name: 'projectName',
      message: 'What will your project be called?',
      default: 'fire-phaser'
    }, {
      type: String,
      name: 'description',
      message: 'Brief desciprion of the project.',
      default: 'This will be great!'
    }, {
      type: String,
      name: 'author',
      message: 'Name of the author.',
      default: 'Dr Who'
    }, {
      type: String,
      name: 'gameName',
      message: 'Name of the game.',
      default: 'Not sure yet... 2'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    return {
      packageJSON: function () {
        this.fs.copyTpl(
          this.templatePath('_package.json'),
          this.destinationPath('package.json'),
          {
            projectName: this.props.projectName,
            description: this.props.description,
            author: this.props.author
          }
        );
      },
      babel: function () {
        this.fs.copy(
          this.templatePath('babelrc'),
          this.destinationPath('.babelrc')
        );
      },
      git: function () {
        this.fs.copy(
          this.templatePath('gitignore'),
          this.destinationPath('.gitignore')
        );

        this.fs.copy(
          this.templatePath('gitattributes'),
          this.destinationPath('.gitattributes')
        );
      },
      editorconfig: function () {
        this.fs.copy(
          this.templatePath('editorconfig'),
          this.destinationPath('.editorconfig')
        );
      },
      npmrc: function () {
        this.fs.copy(
          this.templatePath('npmrc'),
          this.destinationPath('.npmrc')
        );
      },
      readme: function () {
        this.fs.copyTpl(
          this.templatePath('_README.md'),
          this.destinationPath('README.md'),
          {
            gameName: this.props.gameName,
            description: this.props.description
          }
        );
      },
      webpack: function () {
        this.fs.copy(
          this.templatePath('webpack.config.js'),
          this.destinationPath('webpack.config.js')
        );
        this.fs.copy(
          this.templatePath('webpack.production.config.js'),
          this.destinationPath('webpack.production.config.js')
        );
      },
      phaserResolve: function () {
        this.fs.copy(
          this.templatePath('phaserResolve.js'),
          this.destinationPath('phaserResolve.js')
        );
      },
      www: function () {
        this.fs.copyTpl(
          this.templatePath('www/_index.html'),
          this.destinationPath('www/index.html'),
          {
            gameName: this.props.gameName
          }
        );
        this.fs.copy(
          this.templatePath('www/assets'),
          this.destinationPath('www/assets')
        );
      },
      src: function () {
        this.fs.copy(
          this.templatePath('src/game.css'),
          this.destinationPath('src/game.css')
        );
        this.fs.copyTpl(
          this.templatePath('src/game.js'),
          this.destinationPath('src/game.js')
        );
        this.fs.copyTpl(
          this.templatePath('src/states/GameState.js'),
          this.destinationPath('src/states/GameState.js')
        );
        this.fs.copyTpl(
          this.templatePath('src/objects/ScoreText.js'),
          this.destinationPath('src/objects/ScoreText.js')
        );
        this.fs.copyTpl(
          this.templatePath('src/sprites/Dude.js'),
          this.destinationPath('src/sprites/Dude.js')
        );
      }
    };
  }
};
