var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    var BlackBox = (function (_super) {
        __extends(BlackBox, _super);
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        function BlackBox() {
            _super.call(this, "blackBox");
            this._speed.x = 5; //blackbox speed
            this._reset(this._leftBounds);
            this.name = "blackBox";
            this.soundString = "pickup";
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        BlackBox.prototype._checkBounds = function (value) {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        };
        // reset the ocean offscreen
        BlackBox.prototype._reset = function (value) {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        BlackBox.prototype.update = function () {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        };
        return BlackBox;
    }(objects.GameObject));
    objects.BlackBox = BlackBox;
})(objects || (objects = {}));

//# sourceMappingURL=blackBox.js.map
