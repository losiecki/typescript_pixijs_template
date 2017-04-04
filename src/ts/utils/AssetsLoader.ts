export class AssetsLoader {
    constructor() {
    }

    static preloadImages() {
        for (var i = 1; i <= 15; i++) {
            var val = i < 10 ? '0' + i : i;
            // PIXI.loader.add("assets/bg_" + val + ".jpg");
            // console.log("loading " + i);
        }
        PIXI.loader.add("assets/pixi.png");
    }
}
