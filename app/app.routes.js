"use strict";
var router_1 = require('@angular/router');
//import { AuthGuard }             from './contacto/auth.guard';
//import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
//import { HeroesRoutes }       from './heroes/heroes.routes';
//import { LoginRoutes,   AUTH_PROVIDERS }     from './login.routes';
var interfaces_1 = require('./interfaces');
//import {ContactoRoutes } from './contacto/contacto.routers';
//import { HomeRoutes } from './home/home.routers';
//import { DashboardRoutes } from './dashboard/dashboard.routers';
var home_component_1 = require('./pages/home/home.component');
var dashboard_component_1 = require('./pages/dashboard/dashboard.component');
//import {ContactoService} from './pages/contacto/contacto.service';
var auth_guard_1 = require('./pages/contacto/auth.guard');
exports.routes = [
    //...ContactoRoutes,
    // ...HeroesRoutes,
    // ...LoginRoutes,
    //  ...HomeRoutes,
    // ...CrisisCenterRoutes,
    // ...DashboardRoutes
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: '', redirectTo: '/home', terminal: true }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes),
    auth_guard_1.AuthGuard,
    interfaces_1.CanDeactivateGuard
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map