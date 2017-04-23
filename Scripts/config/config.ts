/**
 *  This is the game.ts file that calls all the scene files for the 
 *  game
 *  
 *  Source File Name:   config.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 19, 2017
 *  Revision History:   1.0.0
 * 
 * @module config
 */
module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static INSTRUCTION: number = 1;
        public static PLAY: number = 2;
        public static END: number = 3;
        public static PLAY2: number = 4;
        public static PLAY3: number = 5;

    }


    // Screen Constants
    export class Screen {
        public static WIDTH: number = 640;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 320;
        public static CENTER_Y: number = 240;
    }

    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
}