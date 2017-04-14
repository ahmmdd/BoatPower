/**
 *  
 *  
 *  Source File Name:   SimpleButton.js
 *  Author Name(s):     Mohammed Ahmed
 *                      Joshua Korovesi
 *                      Tyler Acosta
 *                      Justin Muere
 *  Last Modified by:   Mohammed Juned Ahmed
 *  Date Last Modified: April 14, 2017
 *  Revision History:   1.0.0
 * 
 */
(function() {

    window.ui = window.ui || {};

    let SimpleButton =  (label) => {
        this.label = label;
        this.initialize();
    }
    let p = SimpleButton.prototype = new createjs.Container();

    // SimpleButton properties
    p.label;
    p.width;
    p.height;
    p.background;
    p.labelTxt;
    p.fontSize = 24;
    p.borderColor = '#000';
    p.buttonColor = '#ccc';
    p.upColor = '#ccc';
    p.overColor = '#aaa';

    p.Container_initialize = p.initialize;

    p.initialize = () => {
        this.Container_initialize();
        this.drawButton();
        this.setButtonListeners();
    }
    p.drawButton = function(){
        this.removeAllChildren();
        this.labelTxt = new createjs.Text(this.label,this.fontSize + 'px Arial',this.color);
        this.labelTxt.textAlign = 'center';
        this.labelTxt.textBaseline = 'top';
        this.width = this.labelTxt.getMeasuredWidth() + 30;
        this.height = this.labelTxt.getMeasuredHeight() + 20;
        this.labelTxt.x = this.width / 2;
        this.labelTxt.y = 10;
        this.background = new createjs.Shape();
        this.background.graphics.beginStroke(this.borderColor).beginFill(this.buttonColor).drawRect(0,0,this.width,this.height);
        this.addChild(this.background,this.labelTxt);
    }
    p.setButtonListeners = () =>{
        this.cursor = 'pointer';
        this.on('rollover',this.onButtonOver);
        this.on('rollout',this.onButtonOut);
    }
    p.onButtonOver = function(){
        this.buttonColor = this.overColor;
        this.drawButton();
    }
    p.onButtonOut = function(){
        this.buttonColor = this.upColor;
        this.drawButton();
    }

    // Set all
    p.setButton = function(obj){
        this.set(obj);
        this.buttonColor = obj.upColor != undefined ? obj.upColor : this.buttonColor;
        this.drawButton();
    }

    // Set individual
    p.setUpColor = function(color){
        this.upColor = color;
        this.buttonColor = color;
        this.drawButton();
    }
    p.setOverColor = function(color){
        this.overColor = color;
    }
    p.setColor = function(color){
        this.color = this.labelTxt.color = color;
    }
    p.setFontSize = function(size){
        this.fontSize = size;
        this.drawButton();
    }

    window.ui.SimpleButton = SimpleButton;
}());
