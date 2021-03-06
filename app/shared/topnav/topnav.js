"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var model_1 = require('../../common/model');
var TopNavComponent = (function () {
    function TopNavComponent() {
        this.model = model_1.Global.getInstance();
        this.usuario = this.model.contacto.apellidos + ', ' + this.model.contacto.nombres;
    }
    TopNavComponent = __decorate([
        core_1.Component({
            //  moduleId: module.id,
            selector: 'top-nav',
            templateUrl: 'app/shared/topnav/topnav.html',
            styleUrls: ['app/shared/topnav/topnav.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [ng2_bootstrap_1.DROPDOWN_DIRECTIVES, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=topnav.js.map