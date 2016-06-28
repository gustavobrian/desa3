"use strict";
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
exports.HeroesRoutes = [
    { path: 'heroes', component: hero_list_component_1.HeroListComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=heroes.routes.js.map