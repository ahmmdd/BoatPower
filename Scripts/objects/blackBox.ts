module objects {
    // ISLAND CLASS ++++++++++++++++++++++++++++++++++++
    export class BlackBox extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++

        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("blackBox");

            this._speed.x = 5; //blackbox speed
            this._reset(this._leftBounds);
            this.name = "blackBox";
            this.soundString = "pickup";
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value: number): void {
            // check to see if the top of the island 
            // is outside the viewport         
            if (this.x >= value) {
                this._reset(this._leftBounds);
            }
        }

        // reset the ocean offscreen
        protected _reset(value: number): void {
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }


        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update(): void {
            // scroll the island 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}