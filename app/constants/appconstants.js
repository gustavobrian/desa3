"use strict";
var ViewConstantApp = (function () {
    function ViewConstantApp() {
        this._constantView = 'Constante de vista';
    }
    Object.defineProperty(ViewConstantApp.prototype, "constantView", {
        get: function () {
            return this._constantView;
        },
        enumerable: true,
        configurable: true
    });
    return ViewConstantApp;
}());
exports.ViewConstantApp = ViewConstantApp;
var ConfigConstantsApp = (function () {
    function ConfigConstantsApp() {
        this._constantConfig = 'Constante de la configuración de la app';
        this._url = 'http://localhost:8888/laravel/public/angular2login';
    }
    Object.defineProperty(ConfigConstantsApp.prototype, "constantConfig", {
        get: function () {
            return this._constantConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigConstantsApp.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigConstantsApp;
}());
exports.ConfigConstantsApp = ConfigConstantsApp;
/*
export const CONSTANTS_PROVIDER: Provider[] = [
  provide(ConfigConstantsApp, { ConfigConstantsApp }),
  provide(ViewConstantApp, { ViewConstantApp })
];
*/ 
//# sourceMappingURL=appconstants.js.map