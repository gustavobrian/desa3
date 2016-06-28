import {Component, ViewEncapsulation} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import { Global} from '../../common/model'

@Component({
  //  moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'app/shared/topnav/topnav.html',
    styleUrls: ['app/shared/topnav/topnav.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ DROPDOWN_DIRECTIVES,CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class TopNavComponent {
    private usuario:string;
    private model : Global =Global.getInstance();
    
    constructor(){

        this.usuario= this.model.contacto.apellidos + ', ' + this.model.contacto.nombres;

   }
}


