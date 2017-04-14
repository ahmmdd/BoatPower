/**
 *  
 *  
 *  Source File Name:   state.js
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

    window.game = window.game || {};

    let GameStates = {
        MAIN_MENU:0,
        RUN_SCENE:1,
        GAME:10,
        GAME_OVER:20
    }

    let GameStateEvents = {
        MAIN_MENU:'main menu event',
        GAME_OVER:'game over event',
        MAIN_MENU_SELECT:'game menu select event',
        GAME:'game event'
    }

    window.game.GameStates = GameStates;
    window.game.GameStateEvents = GameStateEvents;

}());
