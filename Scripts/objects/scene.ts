/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   scene.ts
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
    // Scene Class
    export class Scene extends createjs.Container {
        // CONSTRUCTOR +++++++++++++++++++++++++++++
        constructor() {
            super();
            this.start();
        }
        
        // Add game objects to my scene in this method
        public start():void {
            stage.addChild(this);
        }
        
        // update game objects in my scene
        public update():void {
            
        }
    }
}