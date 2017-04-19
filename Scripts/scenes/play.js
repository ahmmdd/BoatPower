var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScore = function () {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        };
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Set Cloud Count
            this._enemyCount = 3;
            livesValue = 5;
            scoreValue = 0;
            // Instantiate Cloud array
            this._enemy = new Array();
            // added ocean to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);
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
            this._livesLabel = new objects.Label("lives: " + livesValue, "40px Consolas", "#ffff00", 10, 10, false);
            this.addChild(this._livesLabel);
            this._scoreLabel = new objects.Label("Score: " + scoreValue, "40px Consolas", "#ffff00", 390, 10, false);
            this.addChild(this._scoreLabel);
            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
            var _this = this;
            this._forest.update();
            this._blackBox.update();
            this._player.update();
            this._enemy.forEach(function (enemy) {
                enemy.update();
                _this._collision.check(enemy);
            });
            this._collision.check(this._blackBox);
            this._updateScore();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));

//# sourceMappingURL=play.js.map
