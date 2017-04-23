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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            this._background = new objects.GameObject("background");
            this.addChild(this._background);
            //Add Menu Label
            this._menuLabel = new objects.Label("BOAT POWER", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._menuLabel);
            // add the Start button to the MENU scene
            this._startButton = new objects.Button("StartButton", config.Screen.CENTER_X - 200, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._startButton);
            // Start Button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructionButton = new objects.Button("InstructionButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._instructionButton);
            // Start Button event listener
            this._instructionButton.on("click", this.__instructionButtonClick, this);
            this._exitButton = new objects.Button("ExitButton", config.Screen.CENTER_X + 200, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._exitButton);
            // Start Button event listener
            this._exitButton.on("click", this.___exitButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Menu.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Menu.prototype._startButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        Menu.prototype.__instructionButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.INSTRUCTION;
            changeScene();
        };
        Menu.prototype.___exitButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.END;
            changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));

//# sourceMappingURL=menu.js.map
