/**
 * Created by Gustavo on 6/24/16.
 */
import { Component } from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Router }       from '@angular/router';
import { ContactoLoginComponent } from '../contacto/contactoLogin.component'

//import '../rxjs-operators';


@Component({
    selector: 'home',
    templateUrl:'app/pages/home/home.html',
    directives: [CORE_DIRECTIVES,ROUTER_DIRECTIVES,ContactoLoginComponent],

})
export class HomeComponent {
    constructor(private router: Router ){}

    public recuperar(){
        this.router.navigate(['/dashboard']);
    }

}

