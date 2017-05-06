System.register(["../utils/AssetsLoader"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AssetsLoader_1, display;
    return {
        setters: [
            function (AssetsLoader_1_1) {
                AssetsLoader_1 = AssetsLoader_1_1;
            }
        ],
        execute: function () {
            (function (display) {
                var Stage = (function () {
                    function Stage() {
                        var _this = this;
                        this.stats = new Stats();
                        this.stage = new PIXI.Container();
                        var renderOptions = {
                            view: (document.getElementById("main-canvas")),
                            roundPixels: false,
                            antialias: false
                        };
                        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, renderOptions);
                        this.renderer.backgroundColor = 0xFFFFFF;
                        document.body.appendChild(this.renderer.view);
                        this.renderer.render(this.stage);
                        AssetsLoader_1.AssetsLoader.preloadImages();
                        PIXI.loader.once('complete', this.onImagesPreloaded, this);
                        PIXI.loader.on('progress', this.onLoadProgressHandler, this);
                        PIXI.loader.load();
                        window.onresize = function () { return _this.onResize(); };
                        document.body.appendChild(this.stats.dom);
                        requestAnimationFrame(function () { return _this.animate(null); });
                    }
                    Stage.prototype.onResize = function () {
                        var w = window.innerWidth;
                        var h = window.innerHeight;
                        this.renderer.view.style.width = w + "px";
                        this.renderer.view.style.height = h + "px";
                        this.renderer.resize(w, h);
                    };
                    Stage.prototype.onLoadProgressHandler = function (loader) {
                    };
                    Stage.prototype.onImagesPreloaded = function (loader) {
                        var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("assets/pixi.png"));
                        bg.anchor.x = .5;
                        bg.anchor.y = .5;
                        bg.position.set(window.innerWidth * .5, window.innerHeight * .5);
                        this.stage.addChild(bg);
                    };
                    Stage.prototype.animate = function (time) {
                        var _this = this;
                        requestAnimationFrame(function () { return _this.animate(null); });
                        this.stats.begin();
                        this.renderer.render(this.stage);
                        this.stats.end();
                    };
                    return Stage;
                }());
                display.Stage = Stage;
            })(display || (display = {}));
            exports_1("display", display);
        }
    };
});
//# sourceMappingURL=Stage.js.map