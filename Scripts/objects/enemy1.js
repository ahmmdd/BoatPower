var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    var Enemy1 = (function (_super) {
        __extends(Enemy1, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function Enemy1() {
            _super.call(this, "enemy1");
            this._reset(this._leftBounds);
            this.name = "enemy1";
            this.soundString = "explosion";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        Enemy1.prototype._checkBounds = function (value) {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the cloud offscreen
        Enemy1.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        Enemy1.prototype.update = function () {
            // scroll the cloud left the screen
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return Enemy1;
    }(objects.GameObject));
    objects.Enemy1 = Enemy1;
})(objects || (objects = {}));

//# sourceMappingURL=enemy1.js.map
