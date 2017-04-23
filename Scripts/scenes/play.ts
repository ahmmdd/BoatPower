/**
 *  The Scenes module is a namespace to reference all scene objects
 *  
 *  Source File Name:   play.ts
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
// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _ocean: objects.Ocean;
        private _blackBox: objects.BlackBox;
        private _enemy: objects.Enemy1[];
        private _enemyCount: number;
        private _player: objects.Player;
        private _collision: managers.Collision;
        private _livesLabel: objects.Label;
        private _scoreLabel: objects.Label;
        private _levelLabel:objects.Label;

        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();

        }

        private _updateScore(): void {
            this._levelLabel.text = "LEVEL 1";
            this._livesLabel.text = "Lives: " + livesValue;
            this._scoreLabel.text = "Score: " + scoreValue;
        }

        // PUBLIC METHODS +++++++++++++++++++++

        // Start Method
        public start(): void {
            // Set Cloud Count
            this._enemyCount = 3;
            livesValue = 10;
            scoreValue = 0;

            // Instantiate Cloud array
            this._enemy = new Array<objects.Enemy1>();

            // added ocean to the scene
            this._ocean = new objects.Ocean();
            this.addChild(this._ocean);

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
                5, 10, false
            );
            this.addChild(this._livesLabel);

            this._levelLabel = new objects.Label(
                "Level 1",
                "40px Consolas",
                "#ffff00",
                200, 10, false
            );
            this.addChild(this._levelLabel);

            this._scoreLabel = new objects.Label(
                "Score: " + scoreValue,
                "40px Consolas",
                "#ffff00",
                380, 10, false
            );
            this.addChild(this._scoreLabel);

            // added collision manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._ocean.update();
            this._blackBox.update();

            this._player.update();

            this._enemy.forEach(enemy => {
                enemy.update();
                this._collision.check(enemy);
            });

            this._collision.check(this._blackBox);
            
            this._updateScore();

            this.endState();
        }


        //EVENT HANDLERS ++++++++++++++++++++
        public endState():void{
            if(scoreValue >= 1000){
                console.log("Change to Level 2");
                scene = config.Scene.PLAY2;
                changeScene();
            }
        }
    }
}