import {State} from 'phaser';
import RainbowText from '../objects/RainbowText';

class MainState extends State {
	create() {
		let center = { x: this.game.world.centerX, y: this.game.world.centerY }
		let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a spnkle of\nES6 dust!");
		text.anchor.set(0.5);
	}
}

export default MainState;
