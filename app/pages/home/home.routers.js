/**
 * Created by Gustavo on 6/24/16.
 */
/**
 * Created by gustavobrian on 21/06/2016.
 */
"use strict";
//import { CrisisDetailComponent } from '../crisis-center/crisis-detail.component';
//import { CrisisListComponent }   from '../crisis-center/crisis-list.component';
//import { CrisisCenterComponent } from '../crisis-center/crisis-center.component';
//import { CrisisAdminComponent }  from '../crisis-center/crisis-admin.component';
//import { DashboardComponent }     from '../dashboard/dashboard.component';
//import { CanDeactivateGuard }    from '../interfaces';
//import { AuthGuard }             from '../auth.guard';
//import { AppComponent } from '../app.component';
var home_component_1 = require('./home.component');
exports.HomeRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: '/home' }
];
/*
 export const CrisisCenterRoutes: RouterConfig = [
 {
 path: '',
 redirectTo: '/crisis-center',
 terminal: true
 },
 {
 path: 'crisis-center',
 component: CrisisCenterComponent,
 children: [
 {
 path: 'admin',
 component: CrisisAdminComponent,
 canActivate: [AuthGuard]
 },
 {
 path: ':id',
 component: CrisisDetailComponent,
 canDeactivate: [CanDeactivateGuard]
 },
 {
 path: '',
 component: CrisisListComponent
 }
 ]
 }
 ];
 */ 
//# sourceMappingURL=home.routers.js.map