/**
 *  The Forest module is a namespace to load all labels
 *  
 *  Source File Name:   forest.ts
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
    // OCEAN CLASS ++++++++++++++++++++++++++++++++++++
    export class Forest extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor() {
            super("forest");
            
           this._speed.x = -5; //ocean speed
           this._reset(-960);
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            // check to see if the top of the ocean 
            // is met the top of the scene
            
            if(this.x >= value) {
                this._reset(-960);
            }
        }
        
        // reset the ocean offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            // scroll the ocean 5 px per frame
            this.x -= this._speed.x;
            this._checkBounds(0);
        }
    }
}