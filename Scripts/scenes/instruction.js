var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var scenes;
(function (scenes) {
    var Instruction = (function (_super) {
        __extends(Instruction, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Instruction() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Instruction.prototype.start = function () {
            this._background = new objects.GameObject("background");
            this.addChild(this._background);
            //Add Menu Label
            this._menuLabel = new objects.Label("Instructions:", "60px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 200, true);
            this.addChild(this._menuLabel);
            this._instructions1 = new objects.Label("Dodge the Enemy Ships", "25px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 150, true);
            this.addChild(this._instructions1);
            this._instructions2 = new objects.Label("Collect the Treasure chests", "25px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 110, true);
            this.addChild(this._instructions2);
            this._instructions3 = new objects.Label("Use Mouse to control the player", "25px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 70, true);
            this.addChild(this._instructions3);
            this._instructions4 = new objects.Label("Each Level has target score before \n\nits updated to next level.", "25px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 30, true);
            this.addChild(this._instructions4);
            // add the Start button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._backButton);
            // Start Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // INTRO Scene updates here
        Instruction.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEFT_CAVE Button click event handler
        Instruction.prototype._backButtonClick = function (event) {
            // Switch to the LEFT_CAVE Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Instruction;
    }(objects.Scene));
    scenes.Instruction = Instruction;
})(scenes || (scenes = {}));

//# sourceMappingURL=instruction.js.map
