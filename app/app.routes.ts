import { provideRouter, RouterConfig }  from '@angular/router';
//import { AuthGuard }             from './contacto/auth.guard';
//import { CrisisCenterRoutes } from './crisis-center/crisis-center.routes';
//import { HeroesRoutes }       from './heroes/heroes.routes';

//import { LoginRoutes,   AUTH_PROVIDERS }     from './login.routes';

import { CanDeactivateGuard } from './interfaces';

//import {ContactoRoutes } from './contacto/contacto.routers';
//import { HomeRoutes } from './home/home.routers';
//import { DashboardRoutes } from './dashboard/dashboard.routers';
import { HomeComponent } from  './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import {ContactoService} from './pages/contacto/contacto.service';
import { AuthGuard} from './pages/contacto/auth.guard';

export const routes: RouterConfig = [
  //...ContactoRoutes,
 // ...HeroesRoutes,
 // ...LoginRoutes,
  //  ...HomeRoutes,
  // ...CrisisCenterRoutes,

 // ...DashboardRoutes

    { path: 'home',  component: HomeComponent },
    { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
    { path:  '',  redirectTo: '/home' , terminal: true }

];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),

    AuthGuard,
    CanDeactivateGuard
];



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/