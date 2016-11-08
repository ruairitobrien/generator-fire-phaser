import {Text} from 'phaser';

class ScoreText extends Text {
    constructor(game, x, y) {
        super(game, x, y, 'score: 0', {font: "32px Arial", fill: "#fff"});
    }
}

export default ScoreText;
