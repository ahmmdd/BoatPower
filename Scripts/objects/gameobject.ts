/**
 *  The GameObject module is a namespace to load all labels
 *  
 *  Source File Name:   gameobjects.ts
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
    // GAMEOBJECT SUPER CLASS ++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PRIVATE INSTANCE VARIABLES +++++++++++++++++
        protected _speed:createjs.Point;
        protected _leftBounds:number;
        protected _rightBounds:number;
        protected _topBounds:number;
        protected _bottomBounds:number;
        
        // PUBLIC INSTANCE VARIABLES
        public name:string;
        public width:number;
        public height:number;     
        public centerX:number;
        public centerY:number;
        public isColliding:boolean;
        public soundString:string;
        
        
        // CONSTRUCTOR METHOD +++++++++++++++++++++++++
        constructor(bitmapString:string) {
            super(assets.getResult(bitmapString));
            
           this._speed = new createjs.Point(0, 0);
           this.width = this.getBounds().width;
           this.height = this.getBounds().height;
           this.centerX = this.width * 0.5;
           this.centerY = this.height * 0.5;
           
           this._topBounds = -this.height;
           this._bottomBounds = config.Screen.HEIGHT + this.height;
           this._leftBounds = 0;
           this._rightBounds = config.Screen.WIDTH - this.width;
        }
        
        // PRIVATE METHODS ++++++++++++++++++++++++++++
        protected _checkBounds(value:number):void {
            var resetValue:number = 0;
            // check if y value has met the reset criteria
            if(this.x >= value) {
                this._reset(resetValue);
            }
        }
        
        // Reset the Object offscreen
        protected _reset(value:number):void {
            this.x = value;
        }
        
        
        // PUBLIC METHODS ++++++++++++++++++++++++++++++
        public update():void {
            var boundValue:number = 0;
            // scroll the ocean 5 px per frame
            this.x += this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}