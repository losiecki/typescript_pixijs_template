!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[m][e]}})}function r(e){var t;if(e&&e.__esModule){t={};for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);t.__useDefault&&delete t.__useDefault,t.__esModule=!0}else{if("[object Module]"===Object.prototype.toString.call(e)||"undefined"!=typeof System&&System.isModule&&System.isModule(e))return e;t={"default":e,__useDefault:!0}}return new n(t)}function n(e){Object.defineProperty(this,m,{value:e}),Object.keys(e).forEach(t,this)}function o(e){return"@node/"===e.substr(0,6)?c(e,r(h(e.substr(6))),{}):p[e]}function i(e){var t=o(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return u(t,r),f(t,r,[]),t.module}function u(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var n=o(t.deps[r]);t.depLoads.push(n),n.linkRecord&&u(n,n.linkRecord);var i=t.setters&&t.setters[r];i&&(i(n.module||n.linkRecord.moduleObj),n.importerSetters.push(i))}return e}}function d(t,r){var n=r.moduleObj,o=t.importerSetters,i=!1,u=r.declare.call(e,function(e,t){if(!i){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(n[r]=e[r]);else n[e]=t;i=!0;for(var u=0;u<o.length;u++)o[u](n);return i=!1,t}},{id:t.key});"function"!=typeof u?(r.setters=u.setters,r.execute=u.execute):(r.setters=[],r.execute=u)}function s(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function a(e,t,r,n){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:n,executingRequire:r,moduleObj:{"default":{},__useDefault:!0},setters:void 0}}}function l(e,t,r){return function(n){for(var o=0;o<e.length;o++)if(e[o]===n){var i,u=t[o],d=u.linkRecord;return i=d?-1===r.indexOf(u)?f(u,d,r):d.moduleObj:u.module,i.__useDefault?i["default"]:i}}}function f(t,r,o){if(o.push(t),t.module)return t.module;if(r.setters){for(var i=0;i<r.deps.length;i++){var u=r.depLoads[i],d=u.linkRecord;d&&-1===o.indexOf(u)&&f(u,d,d.setters?o:[])}r.execute.call(v)}else{var s={id:t.key},a=r.moduleObj;Object.defineProperty(s,"exports",{configurable:!0,set:function(e){a["default"]=e},get:function(){return a["default"]}});var c=l(r.deps,r.depLoads,o);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)c(r.deps[i]);var p=r.execute.call(e,c,a["default"],s);if(void 0!==p?a["default"]=p:s.exports!==a["default"]&&(a["default"]=s.exports),a["default"]&&a["default"].__esModule)for(var m in a["default"])Object.hasOwnProperty.call(a["default"],m)&&"default"!==m&&(a[m]=a["default"][m])}var s=t.module=new n(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](s);return s}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},m="undefined"!=typeof Symbol?Symbol():"@@baseObject";n.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(n.prototype[Symbol.toStringTag]="Module");var h="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&void 0!==require.resolve&&"undefined"!=typeof process&&process.platform&&require,v={};return Object.freeze&&Object.freeze(v),function(e,t,o,u){return function(d){d(function(d){var l={_nodeRequire:h,register:s,registerDynamic:a,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new n(e)}};c("@empty",new n({}));for(var f=0;f<t.length;f++)c(t[f],r(arguments[f],{}));u(l);var m=i(e[0]);if(e.length>1)for(var f=1;f<e.length;f++)i(e[f]);return o?m["default"]:(m instanceof n&&Object.defineProperty(m,"__esModule",{value:!0}),m)})}}}("undefined"!=typeof self?self:global)(["a"],[],!1,function(e){this.require,this.exports,this.module,e.register("b",[],function(e,t){"use strict";var r;return t&&t.id,{setters:[],execute:function(){r=function(){function e(){}return e.preloadImages=function(){for(var e=1;15>=e;e++);PIXI.loader.add("assets/pixi.png")},e}(),e("AssetsLoader",r)}}}),e.register("c",["b"],function(e,t){"use strict";var r,n;return t&&t.id,{setters:[function(e){r=e}],execute:function(){!function(e){var t=function(){function e(){var e=this;this.stats=new Stats,this.stage=new PIXI.Container;var t={view:document.getElementById("main-canvas"),roundPixels:!1,antialias:!1};this.renderer=PIXI.autoDetectRenderer(window.innerWidth,window.innerHeight,t),this.renderer.backgroundColor=16777215,document.body.appendChild(this.renderer.view),this.renderer.render(this.stage),r.AssetsLoader.preloadImages(),PIXI.loader.once("complete",this.onImagesPreloaded,this),PIXI.loader.on("progress",this.onLoadProgressHandler,this),PIXI.loader.load(),window.onresize=function(){return e.onResize()},document.body.appendChild(this.stats.dom),requestAnimationFrame(function(){return e.animate(null)})}return e.prototype.onResize=function(){var e=window.innerWidth,t=window.innerHeight;this.renderer.view.style.width=e+"px",this.renderer.view.style.height=t+"px",this.renderer.resize(e,t)},e.prototype.onLoadProgressHandler=function(e){},e.prototype.onImagesPreloaded=function(e){var t=new PIXI.Sprite(PIXI.Texture.fromFrame("assets/pixi.png"));t.anchor.x=.5,t.anchor.y=.5,t.position.set(.5*window.innerWidth,.5*window.innerHeight),this.stage.addChild(t)},e.prototype.animate=function(e){var t=this;requestAnimationFrame(function(){return t.animate(null)}),this.stats.begin(),this.renderer.render(this.stage),this.stats.end()},e}();e.Stage=t}(n=n||(n={})),e("display",n)}}}),e.register("a",["c"],function(e,t){"use strict";var r,n,o;return t&&t.id,{setters:[function(e){r=e}],execute:function(){n=function(){function e(e){this.stage=new r.display.Stage}return e}(),e("Main",n),o=new n("Main Pixi")}}})})(function(e){"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&module.exports&&"function"==typeof require?module.exports=e():e()});