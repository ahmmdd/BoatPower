/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   screen.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 11, 2017
 *  Revision History:   1.0.0
 * 
 *  @module config
 */
module config {
    export class Screen {
        static WIDTH:number = window.innerWidth;
        static HEIGHT:number = window.innerHeight;
        static RATIO:number = window.innerWidth / window.innerHeight;
    }
    
    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY1: number = 1;
        public static OVER: number = 2;
        public static INSTRUCTION: number = 4;
        public static EXIT: number = 6;
    }
}