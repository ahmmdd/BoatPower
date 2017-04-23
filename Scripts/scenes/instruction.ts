/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   instruction.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 19, 2017
 *  Revision History:   1.0.0
 * 
 *  @module scenes
 */
// MENU SCENE
module scenes {
    export class Instruction extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _menuLabel: objects.Label;
        private _background: objects.GameObject;
        private _instructions1: objects.Label;
        private _instructions2: objects.Label;
        private _instructions3: objects.Label;
        private _instructions4: objects.Label;
        private _backButton: objects.Button;

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
                "Instructions:", "60px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 200, true);
            this.addChild(this._menuLabel);

            this._instructions1 = new objects.Label(
                "Dodge the Enemy Ships",
                "25px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 150, true);
            this.addChild(this._instructions1);
            
            this._instructions2 = new objects.Label(
                "Collect the Treasure chests",
                "25px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 110, true);
            this.addChild(this._instructions2);

            this._instructions3 = new objects.Label(
                "Use Mouse to control the player",
                "25px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 70, true);
            this.addChild(this._instructions3);

            this._instructions4 = new objects.Label(
                "Each Level has target score before \n\nits updated to next level.",
                "25px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 30, true);
            this.addChild(this._instructions4);
            // add the Start button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);

            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INTRO Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // LEFT_CAVE Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        }


    }
}