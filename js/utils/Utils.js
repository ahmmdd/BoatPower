/**
 *  
 *  
 *  Source File Name:   Utils.js
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 14, 2017
 *  Revision History:   1.0.0
 * 
 */
(function () {

    let Utils = { }

    Utils.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    window.Utils = Utils;

}());

