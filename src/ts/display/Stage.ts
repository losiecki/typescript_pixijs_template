import {AssetsLoader} from "../utils/AssetsLoader";

export namespace display {

    export class Stage {
        renderer;
        stage: PIXI.Container;
        stats = new Stats();
        constructor() {
            this.stage = new PIXI.Container();
            var renderOptions: PIXI.RendererOptions = {
                view: <HTMLCanvasElement>(document.getElementById("main-canvas")),
                roundPixels: false,
                antialias: false
            }
            this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, renderOptions);

            this.renderer.backgroundColor = 0xFFFFFF;
            // this.stage.interactive = true;

            // PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.LINEAR;

            document.body.appendChild(this.renderer.view);

            this.renderer.render(this.stage);

            AssetsLoader.preloadImages();

            PIXI.loader.once('complete', this.onImagesPreloaded, this);
            PIXI.loader.on('progress', this.onLoadProgressHandler, this);
            PIXI.loader.load();

            window.onresize = () => this.onResize();
            document.body.appendChild( this.stats.dom );
            requestAnimationFrame(() => this.animate(null));
        }

        onResize() {
            var w = window.innerWidth;
            var h = window.innerHeight;
            this.renderer.view.style.width = w + "px";
            this.renderer.view.style.height = h + "px";
            this.renderer.resize(w, h);
        }

        onLoadProgressHandler(loader: PIXI.loaders.Loader) {
            // console.log(Math.round(loader.progress));
        }

        onImagesPreloaded(loader: PIXI.loaders.Loader) {
            // console.log("images preloaded");
            var bg = new PIXI.Sprite(PIXI.Texture.fromFrame("assets/pixi.png"));
            bg.anchor.x = .5;
            bg.anchor.y = .5;
            bg.position.set(window.innerWidth * .5, window.innerHeight * .5);
            this.stage.addChild(bg);
        }

        animate(time) {
            requestAnimationFrame(() => this.animate(null));
            this.stats.begin();
            this.renderer.render(this.stage);
            this.stats.end();
        }

    }

}