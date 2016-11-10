import {State, Physics} from 'phaser';
import Dude from '../sprites/Dude';
import ScoreText from '../objects/ScoreText';

class GameState extends State {

    init() {
        this.score = 0;
    }

    preload() {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    }

    create() {

        //  We're going to be using physics, so enable the Arcade Physics system
        this.physics.startSystem(Physics.ARCADE);

        //  A simple background for our game
        this.add.sprite(0, 0, 'sky');

        //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.add.group();

        //  We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;

        // Here we create the ground.
        let ground = this.platforms.create(0, this.world.height - 64, 'ground');

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);

        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;

        //  Now let's create two ledges
        let ledge1 = this.platforms.create(400, 400, 'ground');
        ledge1.body.immovable = true;

        let ledge2 = this.platforms.create(-150, 250, 'ground');
        ledge2.body.immovable = true;

        this.dude = new Dude({game: this.game, x: 32, y: this.world.height - 150, asset: 'dude'});

        //  We need to enable physics on the player
        this.physics.arcade.enable(this.dude);
        this.dude.init();

        this.game.add.existing(this.dude);

        //  Finally some stars to collect
        this.stars = this.game.add.group();

        //  We will enable physics for any star that is created in this group
        this.stars.enableBody = true;

        //  Here we'll create 12 of them evenly spaced apart
        for (var i = 0; i < 12; i++)
        {
            //  Create a star inside of the 'stars' group
            let star = this.stars.create(i * 70, 0, 'star');

            //  Let gravity do its thing
            star.body.gravity.y = 300;

            //  This just gives each star a slightly random bounce value
            star.body.bounce.y = 0.7 + Math.random() * 0.2;
        }

        //  The score
        //this.scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
        this.scoreText = new ScoreText(this.game, 16, 16);
        this.game.stage.addChild(this.scoreText);

        //  Our controls.
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update () {
        this.game.physics.arcade.collide(this.dude, this.platforms);
        this.game.physics.arcade.collide(this.stars, this.platforms);

        //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
        this.game.physics.arcade.overlap(this.dude, this.stars, this.collectStar, null, this);

        //  Collide the player and the stars with the platforms
        //  Reset the players velocity (movement)
        this.dude.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            //  Move to the left
            this.dude.body.velocity.x = -150;

            this.dude.animations.play('left');
        }
        else if (this.cursors.right.isDown)
        {
            //  Move to the right
            this.dude.body.velocity.x = 150;

            this.dude.animations.play('right');
        }
        else
        {
            //  Stand still
            this.dude.animations.stop();

            this.dude.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (this.cursors.up.isDown && this.dude.body.touching.down)
        {
            this.dude.body.velocity.y = -350;
        }
    }

    collectStar(dude, star) {
        // Removes the star from the screen
        star.kill();

        //  Add and update the score
        this.score += 10;
        this.scoreText.text = 'Score: ' + this.score;
    }


}

export default GameState;
