import { RouterConfig }          from '@angular/router';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent }   from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisAdminComponent }  from './crisis-admin.component';
import { DashboardComponent }     from '../pages/dashboard/dashboard.component';
import { CanDeactivateGuard }    from '../interfaces';
//import { AuthGuard }             from '../auth.guard';
import { AuthGuard }             from '../pages/contacto/auth.guard';
import { AppComponent } from '../app.component';
import { ContactoLoginComponent } from '../pages/contacto/contactoLogin.component'

export const CrisisCenterRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home2',
    terminal: true
  },
   { path: 'home2',  component: ContactoLoginComponent  },
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
  },
  { path: 'dashboard',  component: DashboardComponent},

];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/