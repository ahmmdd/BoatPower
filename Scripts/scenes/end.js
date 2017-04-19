var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEFT_CAVE SCENE
var scenes;
(function (scenes) {
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS ++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            if (scoreValue > highScoreValue) {
                highScoreValue = scoreValue;
            }
            this._background = new objects.GameObject("background");
            this.addChild(this._background);
            //Add Menu Label
            this._endLabel = new objects.Label("Game Over", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y - 160, true);
            this.addChild(this._endLabel);
            this._scoreLabel = new objects.Label("Your Score: " + scoreValue, "40px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y - 80, true);
            this.addChild(this._scoreLabel);
            //Add HighScore Label
            this._highScoreLabel = new objects.Label("High Score: " + highScoreValue, "40px Consolas", "#14148a", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            //this.addChild(this._highScoreLabel);
            // add the BACK button to the OVER scene
            this._restartButton = new objects.Button("BackButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180, true);
            this.addChild(this._restartButton);
            // START_OVER Button event listener
            this._restartButton.on("click", this._restartButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        End.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // START_OVER Button click event handler
        End.prototype._restartButtonClick = function (event) {
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));

//# sourceMappingURL=end.js.map
