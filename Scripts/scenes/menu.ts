/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 * Source File Name:   game.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 11, 2017
 *  Revision History:   1.0.0
 * 
 *  @module scenes
 */

// MENU SCENE
module scenes {
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionButton: objects.Button;
        private _exitButton: objects.Button;
        private _background: objects.GameObject;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {

            this._background = new objects.GameObject(
                "background"
            )
            this.addChild(this._background);
            
            //Add Menu Label
            this._menuLabel = new objects.Label(
                "BOAT POWER", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);


            // add the Start button to the MENU scene
            this._startButton = new objects.Button(
                "StartButton",
                config.Screen.CENTER_X - 200,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);

            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);

            this._instructionButton = new objects.Button(
                "InstructionButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);

            // Start Button event listener
            this._instructionButton.on("click", this.__instructionButtonClick, this);

            this._exitButton = new objects.Button(
                "ExitButton",
                config.Screen.CENTER_X + 200,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._exitButton);

            // Start Button event listener
            this._exitButton.on("click", this.___exitButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEFT_CAVE Button click event handler
        private _startButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        }

        private __instructionButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INSTRUCTION;
            changeScene();
        }

        private ___exitButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.END;
            changeScene();
        }

    }
}