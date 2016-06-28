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
/**
 * Created by Gustavo on 6/23/16.
 */
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var headers_1 = require('../../common/headers');
var http_1 = require('@angular/http');
var model_1 = require("../../common/model");
var Contacto = (function () {
    function Contacto(id, idcontacto, alias, apellidos, nombres, email) {
        this.id = id;
        this.idcontacto = idcontacto;
        this.alias = alias;
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.email = email;
    }
    return Contacto;
}());
exports.Contacto = Contacto;
var ContactoService = (function () {
    function ContactoService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    ContactoService.prototype.login = function (email, clave) {
        //  let url= 'http://192.168.56.100/laravel/public/loginjwt';
        var body = JSON.stringify({ email: email, clave: clave });
        //  let headers= contentHeaders;
        return this.http.post(model_1.Global.urlService + 'loginjwt', body, { headers: headers_1.contentHeaders })
            .map(this.resultLogin)
            .catch(this.handleError);
    };
    ContactoService.prototype.resultLogin = function (response) {
        //  let res=new Result().map(response);
        var res = response.json().user;
        localStorage.setItem('jwt', res.token);
        return new Contacto(res.id, res.idcontacto, res.alias, res.apellidos, res.nombres, res.email);
    };
    ContactoService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var customError = error.json().error;
        if (customError != null && customError.length > 0) {
            return Observable_1.Observable.throw(customError);
        }
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    ContactoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactoService);
    return ContactoService;
}());
exports.ContactoService = ContactoService;
//# sourceMappingURL=contacto.service.js.map