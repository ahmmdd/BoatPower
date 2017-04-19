/**
 *  The loads all assets
 *  
 *  Source File Name:   assets.ts
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
    // ASSET CLASS ++++++++++++++++++++++++++
    export class Asset {
        //PUBLIC INSTANCE VARIABLES
        public id:string;
        public src: string;
        // CONSTRUCTOR +++++++++++++++++++++
        constructor(id:string, src:string) {
            this.id = id;
            this.src = src;
        }
    }
}