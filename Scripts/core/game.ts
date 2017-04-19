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
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;

var currentScene: objects.Scene;
var scene: number;

var livesValue: number;
var scoreValue: number;
var highScoreValue: number = 0;

// Game Scenes
var menu: scenes.Menu;
var instruction: scenes.Instruction;
var play: scenes.Play;
var end: scenes.End;

var assetData: objects.Asset[] = [
    // Add your Assets here
    { id: "StartButton", src: "../../Assets/images/start.png" },
    { id: "BackButton", src: "../../Assets/images/back.png" },
    { id: "InstructionButton", src: "../../Assets/images/instructions.png" },
    { id: "ExitButton", src: "../../Assets/images/exit.png" },
    { id: "forest", src: "../../Assets/images/ocean.gif" },
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

function init(): void {
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
function gameLoop(event: createjs.Event): void {
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
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {

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
            // show the MENU scene
            stage.removeAllChildren();
            instruction = new scenes.Instruction();
            currentScene = menu;
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
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;