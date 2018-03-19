# <%= gameName %>

> <%= description %>

### Developing

Based on [NodeJs](https://nodejs.org/en/) and [Phaser](http://phaser.io/). You will need node installed to continue.

Install required dependencies for the project in command prompt from the project directory with:

`npm install`

or if you use [yarn](https://github.com/yarnpkg/yarn)

`yarn`

For all following commands, you can just replace `npm` with `yarn` if yarn is what you are using.

To build and run the application in a development server (note: the first time takes a while but it's much faster after that):

`npm start`

To package and optimize the JavaScript code for deploying to a web server:

`npm run build`

#### Testing out the prodiction build

You probably have your own way of doing this but here's what I do:

* Install []() `yarn global add server` or `npm i -g serve`
* Build the app: `yarn build`
* `cd dist && serve`
