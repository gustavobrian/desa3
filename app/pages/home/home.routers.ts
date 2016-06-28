/**
 * Created by Gustavo on 6/24/16.
 */
/**
 * Created by gustavobrian on 21/06/2016.
 */


//import { ContactoLoginComponent} from  '../contacto/contactoLogin.component';



import { RouterConfig }          from '@angular/router';
//import { CrisisDetailComponent } from '../crisis-center/crisis-detail.component';
//import { CrisisListComponent }   from '../crisis-center/crisis-list.component';
//import { CrisisCenterComponent } from '../crisis-center/crisis-center.component';
//import { CrisisAdminComponent }  from '../crisis-center/crisis-admin.component';
//import { DashboardComponent }     from '../dashboard/dashboard.component';
//import { CanDeactivateGuard }    from '../interfaces';
//import { AuthGuard }             from '../auth.guard';
//import { AppComponent } from '../app.component';

import { HomeComponent} from './home.component';

export const HomeRoutes : RouterConfig = [

    { path: 'home',  component: HomeComponent  },
    { path: '',  redirectTo: '/home' }


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