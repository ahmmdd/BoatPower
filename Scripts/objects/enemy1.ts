/**
 *  The Enemy module is a namespace to load all enemies
 *  
 *  Source File Name:   enemy.ts
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
    // CLOUD CLASS ++++++++++++++++++++++++++++++++++++
    export class Enemy1 extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("enemy1");
            
           this._reset(this._leftBounds);
           this.name = "enemy1";
           this.soundString = "explosion";
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the cloud 
            // is outside the viewport         
            if(this.x >= value) {
                this._reset(this._leftBounds);
            }
        }
        
        // reset the cloud offscreen
        protected _reset(value:number):void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the cloud left the screen
            this.x += this._speed.x;
            this._checkBounds(this._rightBounds);
        }
    }
}