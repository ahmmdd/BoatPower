/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   play2.ts
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 23, 2017
 *  Revision History:   1.0.0
 * 
 *  @module scenes
 */
// PLAY SCENE
module scenes {
    export class Play2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _forest: objects.Forest;
        private _blackBox: objects.BlackBox;
        private _enemy: objects.Enemy1[];
        private _enemyCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        private _updateScore(): void {
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Cloud Count
            this._enemyCount = 6;
            livesValue = 5;
            scoreValue = 0;

            // Instantiate Cloud array
            this._enemy = new Array<objects.Enemy1>();

            // added ocean to the scene
            this._forest = new objects.Forest();
            this.addChild(this._forest);

            // added island to the scene
            this._blackBox = new objects.BlackBox();
            this.addChild(this._blackBox);

            // added player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);

            //added clouds to the scene
            for (var enemy: number = 0; enemy < this._enemyCount; enemy++) {
                this._enemy[enemy] = new objects.Enemy1();
                this.addChild(this._enemy[enemy]);
            }

            this._livesLabel = new objects.Label(
                "lives: " + livesValue,
                "40px Consolas",
                "#ffff00",
                10, 10, false
            );
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#ffff00",
                390, 10, false
            );
            this.addChild(this._scoreLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._forest.update();
            this._blackBox.update();

            this._player.update();

            this._enemy.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
            });

            this._collision.check(this._blackBox);
            
            this._updateScore();
        }


        //EVENT HANDLERS ++++++++++++++++++++

    }
}