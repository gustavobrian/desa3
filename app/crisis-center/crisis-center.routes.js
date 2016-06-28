"use strict";
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_center_component_1 = require('./crisis-center.component');
var crisis_admin_component_1 = require('./crisis-admin.component');
var dashboard_component_1 = require('../pages/dashboard/dashboard.component');
var interfaces_1 = require('../interfaces');
//import { AuthGuard }             from '../auth.guard';
var auth_guard_1 = require('../pages/contacto/auth.guard');
var contactoLogin_component_1 = require('../pages/contacto/contactoLogin.component');
exports.CrisisCenterRoutes = [
    {
        path: '',
        redirectTo: '/home2',
        terminal: true
    },
    { path: 'home2', component: contactoLogin_component_1.ContactoLoginComponent },
    {
        path: 'crisis-center',
        component: crisis_center_component_1.CrisisCenterComponent,
        children: [
            {
                path: 'admin',
                component: crisis_admin_component_1.CrisisAdminComponent,
                canActivate: [auth_guard_1.AuthGuard]
            },
            {
                path: ':id',
                component: crisis_detail_component_1.CrisisDetailComponent,
                canDeactivate: [interfaces_1.CanDeactivateGuard]
            },
            {
                path: '',
                component: crisis_list_component_1.CrisisListComponent
            }
        ]
    },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=crisis-center.routes.js.map