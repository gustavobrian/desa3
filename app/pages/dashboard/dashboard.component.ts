import { Component }         from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TopNavComponent} from '../../shared/topnav/topnav';
import {SidebarComponent} from '../../shared/sidebar/sidebar';

@Component({
    selector: 'dashboard',
    templateUrl:'app/pages/dashboard/dashboard.html',

    directives: [ROUTER_DIRECTIVES, TopNavComponent]
})

export class DashboardComponent {
    constructor(){
     //   alert('que es esto');
    }
}


