System.register(["./display/Stage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Stage_1, Main, main;
    return {
        setters: [
            function (Stage_1_1) {
                Stage_1 = Stage_1_1;
            }
        ],
        execute: function () {
            Main = (function () {
                function Main(msg) {
                    console.log(msg);
                    this.stage = new Stage_1.display.Stage();
                }
                return Main;
            }());
            exports_1("Main", Main);
            main = new Main('Main Pixi');
        }
    };
});
