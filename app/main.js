"use strict";
// main entry point
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
//import {Dashboard} from "./dashboard/dashboard.component";
//import { HomeComponent} from 'pages/home/home.component';
require('./rxjs-operators');
//bootstrap(HomeComponent,
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    common_1.FORM_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(angular2_jwt_1.AuthHttp, {
        useFactory: function (http) {
            return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
                tokenName: 'jwt'
            }), http);
        },
        deps: [http_1.Http]
    })
]).catch(function (err) { return console.error(err); });
/*
 bootstrap(AppComponent, [
 APP_ROUTER_PROVIDERS
 ])
 .catch(err => console.error(err));
 */
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=main.js.map