/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   End.ts
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
// LEFT_CAVE SCENE
module scenes {
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _endLabel: objects.Label;
        private _restartButton: objects.Button;
        private _background: objects.GameObject;
        private _scoreLabel: objects.Label;
        private _highScoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }

        // PUBLIC METHODS ++++++++++++++++++++


        // Start Method
        public start(): void {

            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }

            this._background = new objects.GameObject(
                "background"
            );
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label(
                "Game Over", "60px Consolas",
                "#000000",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);

            this._scoreLabel = new objects.Label(
                "Your Score: " + scoreValue, "40px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);

            //Add HighScore Label
            this._highScoreLabel = new objects.Label(
                "High Score: " + highScoreValue, "40px Consolas",
                "#14148a",
                config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            //this.addChild(this._highScoreLabel);

            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);

            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }


        //EVENT HANDLERS ++++++++++++++++++++

        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}