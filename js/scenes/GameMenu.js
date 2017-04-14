/**
 *  
 *  
 *  Source File Name:   GameMenu.js
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 14, 2017
 *  Revision History:   1.0.0
 * 
 */
(function (window) {
    window.game = window.game || {}
    function GameMenu() {
        this.initialize();
    }

    let p = GameMenu.prototype = new createjs.Container();
    p.playBtn;
    p.Container_initialize = p.initialize;
    p.initialize = function () {
        this.Container_initialize();
        this.addTitle();
        this.addButton();
    }
    p.addTitle = () => {
        let titleYPos = 200;
        let title = new createjs.Sprite(spritesheet, 'title');
        title.regX = title.getBounds().width / 2;
        title.x = screen_width / 2;
        title.y = -50;
        createjs.Tween.get(title).to({y: titleYPos}, 5000)
            .call(this.bringTitle, null, this);
        this.addChild(title);
    }
    p.addButton = () => {
        this.playBtn = new ui.SimpleButton('Play Game');
        this.playBtn.on('click', this.playGame, this);
        this.playBtn.regX = this.playBtn.width / 2;
        this.playBtn.x = canvas.width / 2;
        this.playBtn.y = 400;
        this.playBtn.alpha = 0;
        this.playBtn.setButton({upColor: '#d2354c', color: '#FFF', borderColor: '#FFF', overColor: '#900'});
        this.addChild(this.playBtn);
    }
    p.bringTitle = (e) => {
        createjs.Tween.get(this.playBtn).to({alpha: 1}, 1000);
    }
    p.playGame = (e) => {
        createjs.Sound.play(game.assets.EXPLOSION);
        this.dispatchEvent(game.GameStateEvents.GAME);
    }
    window.game.GameMenu = GameMenu;
}(window));