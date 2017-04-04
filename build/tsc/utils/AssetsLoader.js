System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AssetsLoader;
    return {
        setters:[],
        execute: function() {
            AssetsLoader = (function () {
                function AssetsLoader() {
                }
                AssetsLoader.preloadImages = function () {
                    for (var i = 1; i <= 15; i++) {
                        var val = i < 10 ? '0' + i : i;
                    }
                    PIXI.loader.add("assets/pixi.png");
                };
                return AssetsLoader;
            }());
            exports_1("AssetsLoader", AssetsLoader);
        }
    }
});
//# sourceMappingURL=AssetsLoader.js.map