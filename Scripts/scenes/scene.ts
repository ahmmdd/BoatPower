/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   scene.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 11, 2017
 *  Revision History:   1.0.0
 * 
 *  @module scenes
 */
module scenes {
    /**
     * The Scene class is a generic / custom Scene container
     * 
     * @class Scene
     */
    export class Scene extends Physijs.Scene {
        /**
         * @constructor 
         */
        constructor() {
            super();
        }

        /**
         * The start method is the main method for the scene class
         * 
         * @method start
         * @return void
         */
        public start(): void {

        }
        
        /**
         * The update method updates the animation loop and other objects
         * 
         * @method update
         * @return void
         */
        public update(): void {
            
        }
        
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         * 
         * @method resize
         * @return void
         */
        public resize():void {
            
        }
    }
}