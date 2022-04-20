let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyA, keyD, keyW, keyLEFT, keyRIGHT, leftClick;

// Manoj, Rocket Patrol 2, April 20, ~12 Hours
// Point Breakdown
/*
    * Implement a simultaneous two-player mode (30)
    * Implement mouse control for player movement and mouse click to fire (20)
    * Implement a new timing/scoring mechanism that adds time to the clock for successful hits (20)
    * Display the time remaining (in seconds) on the screen (10)
    * Implement parallax scrolling (10)
    * Allow the player to control the Rocket after it's fired (5)
    * Implement the speed increase that happens after 30 seconds in the original game (5)
*/