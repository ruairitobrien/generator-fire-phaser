import {Sprite} from 'phaser'

class Dude extends Sprite {

    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset);
        this.anchor.setTo(0.5)
    }

    init() {
        //  Player physics properties. Give the little guy a slight bounce.
        this.body.bounce.y = 0.2;
        this.body.gravity.y = 300;
        this.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);
    }
}

export default Dude;
