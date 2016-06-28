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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
//import { Http, Headers ,Response} from '@angular/http';
//import { contentHeaders } from '../common/headers';
var customvalidator_1 = require('../../validators/customvalidator');
//import { Observable}     from 'rxjs/Observable';
var contacto_service_1 = require("./contacto.service");
var Alert_1 = require('ng2-bootstrap/components/Alert');
var model_1 = require('../../common/model');
//import { MODAL_DIRECTIVES, ModalComponent } from '../../../node_modules/ng2-bs3-modal/ng2-bs3-modal';
//import { Usuario } from '../../classes/usuario';
//let styles   = require('./contacto.css');
//let template = require('./contactologin.html');
var ContactoLoginComponent = (function () {
    function ContactoLoginComponent(service, builder, router) {
        this.service = service;
        this.builder = builder;
        this.router = router;
        this.global = model_1.Global.getInstance();
        //contacto:Contacto;
        this.active = false;
        this.alerts = [];
        this.loginForm = builder.group({
            email: ["", common_1.Validators.compose([
                    common_1.Validators.required, customvalidator_1.EmailValidator.email
                ])],
            password: ["", common_1.Validators.compose([
                    common_1.Validators.required, common_1.Validators.minLength(4)
                ])]
        });
        this.email = this.loginForm.controls["email"];
        this.password = this.loginForm.controls["password"];
        this.logOut();
    }
    ContactoLoginComponent.prototype.login = function (email, clave) {
        var _this = this;
        this.active = false;
        this.resetAlert();
        this.service.login(email, clave).subscribe(function (contacto) { return _this.loginIn(contacto); }, 
        // error =>  this.errorMessage = <any>error);
        function (error) { return _this.addAlert(error, 'warning'); });
        //   this.router.navigate(['dashborad'])
    };
    ContactoLoginComponent.prototype.logOut = function () {
        //  this.password.value ='';
        localStorage.setItem('jwt', '');
    };
    ContactoLoginComponent.prototype.loginIn = function (contacto) {
        this.global.contacto = contacto;
        this.active = true;
        this.router.navigate(['/dashboard']);
    };
    ContactoLoginComponent.prototype.recuperar = function (email) {
        this.router.navigate(['/dashboard']);
    };
    ContactoLoginComponent.prototype.resetAlert = function () {
        this.alerts = [];
    };
    ContactoLoginComponent.prototype.addAlert = function (msg, type) {
        this.alerts.push({ msg: msg, type: type, closable: true });
    };
    ContactoLoginComponent.prototype.closeAlert = function (i) {
        this.alerts.splice(i, 1);
    };
    ContactoLoginComponent = __decorate([
        core_1.Component({
            selector: 'contacto_login',
            templateUrl: 'app/pages/contacto/contactologin.html',
            styleUrls: ['app/pages/contacto/contacto.css'],
            providers: [contacto_service_1.ContactoService],
            directives: [Alert_1.AlertComponent, common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [contacto_service_1.ContactoService, common_1.FormBuilder, router_2.Router])
    ], ContactoLoginComponent);
    return ContactoLoginComponent;
}());
exports.ContactoLoginComponent = ContactoLoginComponent;
//# sourceMappingURL=contactoLogin.component.js.map