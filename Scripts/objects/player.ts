/**
 *  The Player module is a namespace sets up the object
 *  
 *  Source File Name:   player.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 19, 2017
 *  Revision History:   1.0.0
 * 
 *  @module objects
 */
module objects {
    // PLAYER CLASS ++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES
        private _upBounds: number;
        private _downBounds: number;

        // PUBLIC INSTANCE VARIABLES
        public width: number;
        public height: number;
        public engineSound: createjs.AbstractSoundInstance;
        constructor() {
            super(assets.getResult("plane"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._upBounds = this.height * 0.5;
            this._downBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 550;
            
            this.engineSound = createjs.Sound.play("engine");
            // Loop engine sound forever
            this.engineSound.loop = -1;
        }

        // PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._upBounds) {
                this.y = this._upBounds;
            }

            if (this.y > this._downBounds) {
                this.y = this._downBounds;
            }
        }


        // PUBLIC METHODS
        public update(): void {
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}