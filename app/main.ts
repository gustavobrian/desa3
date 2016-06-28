// main entry point
import { bootstrap }            from '@angular/platform-browser-dynamic';
import { AppComponent }         from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
//import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
//import {Dashboard} from "./dashboard/dashboard.component";

//import { HomeComponent} from 'pages/home/home.component';

import './rxjs-operators';

//bootstrap(HomeComponent,
bootstrap(AppComponent,
    [
      APP_ROUTER_PROVIDERS,
      FORM_PROVIDERS,
      HTTP_PROVIDERS,
      provide(AuthHttp, {
        useFactory: (http) => {
          return new AuthHttp(new AuthConfig({
            tokenName: 'jwt'
          }), http);
        },
        deps: [Http]
      })
    ]
).catch(err => console.error(err));


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