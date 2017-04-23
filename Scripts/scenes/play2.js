var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *  The Scenes module is a namespace to reference all scene objects
 *
 *  Source File Name:   play2.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 23, 2017
 *  Revision History:   1.0.0
 *
 *  @module scenes
 */
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play2 = (function (_super) {
        __extends(Play2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play2() {
            _super.call(this);
        }
        Play2.prototype._updateScore = function () {
            this._levelLabel.text = "LEVEL 2";
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play2.prototype.start = function () {
            // Set Cloud Count
            this._enemyCount = 4;
            livesValue = 5;
            scoreValue = 0;
            // Instantiate Cloud array
            this._enemy = new Array();
            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);
            // added island to the scene
            this._blackBox = new objects.BlackBox();
            this.addChild(this._blackBox);
            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added clouds to the scene
            for (var enemy = 0; enemy < this._enemyCount; enemy++) {
                this._enemy[enemy] = new objects.Enemy1();
                this.addChild(this._enemy[enemy]);
            }
            this._livesLabel = new objects.Label("lives: " + livesValue, "40px Consolas", "#ffff00", 5, 10, false);
            this.addChild(this._livesLabel);
            this._levelLabel = new objects.Label("Level 1", "40px Consolas", "#ffff00", 200, 10, false);
            this.addChild(this._levelLabel);
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 380, 10, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play2.prototype.update = function () {
            var _this = this;
            this._ocean.update();
            this._blackBox.update();
            this._player.update();
            this._enemy.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
            });
            this._collision.check(this._blackBox);
            this._updateScore();
            this.endState();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        Play2.prototype.endState = function () {
            if (scoreValue >= 2000) {
                console.log("Change to Level 3");
                scene = config.Scene.PLAY3;
                changeScene();
            }
        };
        return Play2;
    }(objects.Scene));
    scenes.Play2 = Play2;
})(scenes || (scenes = {}));

//# sourceMappingURL=play2.js.map
