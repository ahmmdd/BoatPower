var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var scenes;
(function (scenes) {
    /**
     * The Scene class is a generic / custom Scene container
     *
     * @class Scene
     */
    var Scene = (function (_super) {
        __extends(Scene, _super);
        /**
         * @constructor
         */
        function Scene() {
            _super.call(this);
        }
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Scene.prototype.start = function () {
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Scene.prototype.update = function () {
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Scene.prototype.resize = function () {
        };
        return Scene;
    }(Physijs.Scene));
    scenes.Scene = Scene;
})(scenes || (scenes = {}));

//# sourceMappingURL=scene.js.map
