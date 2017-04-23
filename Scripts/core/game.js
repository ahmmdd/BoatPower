/**
 *  This is the game.ts file that calls all the scene files for the
 *  game
 *
 *  Source File Name:   game.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 19, 2017
 *  Revision History:   1.0.0
 *
 */
/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
var livesValue;
var scoreValue;
var highScoreValue = 0;
// Game Scenes
var menu;
var instruction;
var play;
var play2;
var play3;
var end;
var assetData = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/start.png" },
    { id: "BackButton", src: "../../Assets/images/back.png" },
    { id: "InstructionButton", src: "../../Assets/images/instructions.png" },
    { id: "ExitButton", src: "../../Assets/images/exit.png" },
    { id: "ocean", src: "../../Assets/images/ocean.gif" },
    { id: "plane", src: "../../Assets/images/player.png" },
    { id: "enemy1", src: "../../Assets/images/enemy1.png" },
    { id: "blackBox", src: "../../Assets/images/blackBox.png" },
    { id: "background", src: "../../Assets/images/background.png" },
    { id: "pickup", src: "../../Assets/audio/pickup.mp3" },
    { id: "explosion", src: "../../Assets/audio/explosion.mp3" },
    { id: "engine", src: "../../Assets/audio/engine.mp3" }
];
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    // create our main display list container
    stage = new createjs.Stage(canvas);
    // Enable mouse events
    stage.enableMouseOver(20);
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    // sets up our stats counting workflow
    setupStats();
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}
// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event) {
    // start collecting stats for this frame
    stats.begin();
    // calling State's update method
    currentScene.update();
    // redraw/refresh stage every frame
    stage.update();
    // stop collecting stats for this frame
    stats.end();
}
// Setup Game Stats
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.INSTRUCTION:
            // show the Intructions scene
            stage.removeAllChildren();
            instruction = new scenes.Instruction();
            currentScene = instruction;
            console.log("Starting Instruction Scene");
            break;
        case config.Scene.PLAY:
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.PLAY2:
            // show the play level 2 scene
            stage.removeAllChildren();
            play2 = new scenes.Play2();
            currentScene = play2;
            console.log("Starting PLAY2 Scene");
            break;
        case config.Scene.PLAY3:
            // show the play level 3 scene
            stage.removeAllChildren();
            play3 = new scenes.Play3();
            currentScene = play3;
            console.log("Starting PLAY3 Scene");
            break;
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;

//# sourceMappingURL=game.js.map
