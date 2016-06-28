
/**
 * Created by Gustavo on 6/24/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Router }       from '@angular/router';
//import { ContactoLoginComponent } from 'pages/contacto/contactoLogin.component'



@Component({
    selector: 'my-app',
    templateUrl:'./app/app.html',
    directives: [ROUTER_DIRECTIVES],
})

export class AppComponent {
    constructor(private router: Router) {}


    public recuperar(){
        this.router.navigate(['/dashboard']);
    }

}

