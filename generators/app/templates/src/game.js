/**
 * The original source for this game comes from the tutorial on the phaser
 * website here: https://phaser.io/tutorials/making-your-first-phaser-game
 */
import './game.css';
import 'pixi';
import 'p2';
import {AUTO, Game} from 'phaser';

import GameState from './states/GameState';

class ExampleGame extends Game {
	constructor() {
        super(800, 600, AUTO, 'content', null);
        this.state.add('GameState', GameState, false);

        this.state.start('GameState');
    }
}

new ExampleGame();
