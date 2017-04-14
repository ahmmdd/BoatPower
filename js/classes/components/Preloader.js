/**
 *  
 *  
 *  Source File Name:   Preloader.js
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

    window.ui = window.ui || {};

    let Preloader = (fill, stroke) => {
        this.fillColor = fill;
        this.strokeColor = stroke;
        this.initialize();
    }
    let p = Preloader.prototype = new createjs.Container();

    p.width = 400;
    p.height = 40;
    p.fillColor;
    p.strokeColor;
    p.bar;

    p.Container_initialize = p.initialize;

    p.initialize = () => {
        this.Container_initialize();
        this.drawPreloader();
    }

    p.drawPreloader = () => {
        let outline = new createjs.Shape();
        outline.graphics.beginStroke(this.strokeColor);
        outline.graphics.drawRect(0, 0, this.width, this.height);
        this.bar = new createjs.Shape();
        this.bar.graphics.beginFill(this.fillColor);
        this.bar.graphics.drawRect(0, 0, this.width, this.height);
        this.bar.scaleX = 0;
        this.addChild(this.bar, outline);
    }

    p.update = (perc) => {
        perc = perc > 1 ? 1 : perc;
        this.bar.scaleX = perc;
    }

    window.ui.Preloader = Preloader;

}());