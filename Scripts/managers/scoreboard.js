/**
 *  The managers module sets up the score board
 *
 *  Source File Name:   scoreboard.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 19, 2017
 *  Revision History:   1.0.0
 *
 *  @module managers
 */
var managers;
(function (managers) {
    // Scoreboard class +++++++++++++++++++++++++++++++++++
    var ScoreBoard = (function () {
        /**
         * Empty Constructor
         */
        function ScoreBoard() {
        }
        // PUBLIC PROPERTIES
        ScoreBoard.prototype.setScore = function (value) {
            this._score = value;
        };
        ScoreBoard.prototype.getScore = function () {
            return this._score;
        };
        ScoreBoard.prototype.setLives = function (value) {
            this._lives = value;
        };
        ScoreBoard.prototype.getLives = function () {
            return this._lives;
        };
        // PUBLIC METHODS
        /**
         * Update Method
         */
        ScoreBoard.prototype.update = function () {
        };
        /**
         * AddScore method - adds points to the _score
         */
        ScoreBoard.prototype.addScore = function (score) {
            this._score += score;
        };
        /**
         * AddLives method - adds lives to the _lives
         */
        ScoreBoard.prototype.addLives = function (lives) {
            this._lives += lives;
        };
        /**
         * RemoveLives method - removes lives from  _lives
         */
        ScoreBoard.prototype.removeLives = function (lives) {
            this._lives -= lives;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));

//# sourceMappingURL=scoreboard.js.map
