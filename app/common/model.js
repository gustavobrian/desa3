"use strict";
/**
 * Created by Gustavo on 6/24/16.
 */
var Global = (function () {
    function Global() {
    }
    Global.getInstance = function () {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        return Global.instance;
    };
    Global.urlService = 'http://192.168.56.100/laravel/public/';
    return Global;
}());
exports.Global = Global;
//# sourceMappingURL=model.js.map