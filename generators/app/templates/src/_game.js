import 'pixi'
import 'p2'
import {AUTO, Game} from 'phaser';
import MainState from './states/MainState';

class NinjaGame extends Game {
	constructor() {
		super(500, 500, AUTO, 'content', null);
		this.state.add('MainState', MainState, false);
		this.state.start('MainState');
	}
}

new NinjaGame();
