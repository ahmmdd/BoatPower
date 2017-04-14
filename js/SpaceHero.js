/**
 *  
 *  
 *  Source File Name:   SpaceHero.js
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

    function SpaceHero() {
        this.initialize();
    }

    let p = SpaceHero.prototype;

    p.preloader;

    p.currentGameStateFunction;
    p.currentScene;


    p.initialize = () => {
        // set globals
        canvas = document.getElementById('canvas');
        stage = new createjs.Stage(canvas);
        screen_width = canvas.width;
        screen_height = canvas.height;
        // end globals
        createjs.Touch.enable(stage);
        stage.enableMouseOver();
        game.assets = new game.AssetManager();
        this.preloadAssets()
    }
    p.preloadAssets = () => {
        this.preloader = new ui.Preloader('#d2354c', '#FFF');
        this.preloader.x = (canvas.width / 2) - (this.preloader.width / 2);
        this.preloader.y = (canvas.height / 2) - (this.preloader.height / 2);
        stage.addChild(this.preloader);
        game.assets.on(game.assets.ASSETS_PROGRESS, this.onAssetsProgress, this);
        game.assets.on(game.assets.ASSETS_COMPLETE, this.assetsReady, this);
        game.assets.preloadAssets();
    }
    p.onAssetsProgress = () => {
        this.preloader.update(game.assets.loadProgress);
        stage.update();
    }
    p.assetsReady = () => {
        stage.removeChild(this.preloader);
        stage.update();
        this.createSpriteSheet();
        this.gameReady();
    }
    p.createSpriteSheet = () => {
        let assets = game.assets;
        spritesheet = new createjs.SpriteSheet(assets.getAsset(assets.GAME_SPRITES_DATA));
    }
    p.gameReady = () => {
        createjs.Ticker.setFPS(60);
        createjs.Ticker.on("tick", this.onTick, this);
        this.changeState(game.GameStates.MAIN_MENU);
    }
    p.changeState = (state) => {
        switch (state) {
            case game.GameStates.MAIN_MENU:
                this.currentGameStateFunction = this.gameStateMainMenu;
                break;
            case game.GameStates.GAME:
                this.currentGameStateFunction = this.gameStateGame;
                break;
            case game.GameStates.RUN_SCENE:
                this.currentGameStateFunction = this.gameStateRunScene;
                break;
            case game.GameStates.GAME_OVER:
                this.currentGameStateFunction = this.gameStateGameOver;
                break;
        }
    }
    p.onStateEvent = (e, obj) => {
        this.changeState(obj.state);
    }
    p.disposeCurrentScene = () => {
        if (this.currentScene != null) {
            stage.removeChild(this.currentScene);
            if(this.currentScene.dispose){
               // this.currentScene.dispose();
            }
            this.currentScene = null;
        }
    }
    p.gameStateMainMenu = (tickEvent) => {
        let scene = new game.GameMenu();
        scene.on(game.GameStateEvents.GAME, this.onStateEvent, this, true, {state:game.GameStates.GAME});
        stage.addChild(scene);
        this.disposeCurrentScene();
        this.currentScene = scene;
        this.changeState(game.GameStates.RUN_SCENE);
    }
    p.gameStateGame = (tickEvent) => {
        let scene = new game.Game();
        scene.on(game.GameStateEvents.GAME_OVER, this.onStateEvent, this, true, {state:game.GameStates.GAME_OVER});
        stage.addChild(scene);
        this.disposeCurrentScene()
        this.currentScene = scene;
        this.changeState(game.GameStates.RUN_SCENE);
    }
    p.gameStateGameOver = (tickEvent) => {
        let scene = new game.GameOver();
        stage.addChild(scene);
        scene.on(game.GameStateEvents.MAIN_MENU, this.onStateEvent, this, true, {state:game.GameStates.MAIN_MENU});
        scene.on(game.GameStateEvents.GAME, this.onStateEvent, this, true, {state:game.GameStates.GAME});
        this.disposeCurrentScene();
        this.currentScene = scene;
        this.changeState(game.GameStates.RUN_SCENE);
    }
    p.gameStateRunScene = (tickEvent) => {
        if (this.currentScene.run) {
            this.currentScene.run(tickEvent);
        }
    }
    p.onTick = (e) => {
        if (this.currentGameStateFunction != null) {
            this.currentGameStateFunction(e);
        }
        stage.update();
    }

    window.game.SpaceHero = SpaceHero;

}(window));