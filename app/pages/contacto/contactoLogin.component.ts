import { Component} from '@angular/core';
import {CORE_DIRECTIVES, FormBuilder, Validators, ControlGroup, AbstractControl} from '@angular/common';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Router } from '@angular/router';


//import { Http, Headers ,Response} from '@angular/http';
//import { contentHeaders } from '../common/headers';
import { EmailValidator } from '../../validators/customvalidator';
//import { Observable}     from 'rxjs/Observable';
import {Contacto, ContactoService} from "./contacto.service";
import {AlertComponent} from 'ng2-bootstrap/components/Alert';
import {Global} from '../../common/model'

 

//import { MODAL_DIRECTIVES, ModalComponent } from '../../../node_modules/ng2-bs3-modal/ng2-bs3-modal';
//import { Usuario } from '../../classes/usuario';


//let styles   = require('./contacto.css');
//let template = require('./contactologin.html');

@Component({
    selector: 'contacto_login',
    templateUrl: 'app/pages/contacto/contactologin.html',
    styleUrls: ['app/pages/contacto/contacto.css'],
    providers: [ContactoService],
    directives: [AlertComponent, CORE_DIRECTIVES,ROUTER_DIRECTIVES]
})

export class ContactoLoginComponent {

  loginForm: ControlGroup;
  email: AbstractControl;
  password: AbstractControl;

  global:Global=Global.getInstance();
  //contacto:Contacto;

  active:Boolean=false;

    public alerts:Array<Object>=[];

  constructor(private service: ContactoService, public builder: FormBuilder
       , private router: Router)
  {



      this.loginForm = builder.group({
      email: ["", Validators.compose([
        Validators.required, EmailValidator.email
      ])],
      password: ["", Validators.compose([
        Validators.required, Validators.minLength(4)
      ])]
    })

    this.email = this.loginForm.controls["email"];
    this.password = this.loginForm.controls["password"];


     this.logOut();

  }



   public login(email:string, clave:string) {
      this.active=false;
       this.resetAlert();
       this.service.login(email,clave).subscribe(
           contacto => this.loginIn(contacto),
          // error =>  this.errorMessage = <any>error);
           error =>  this.addAlert(<any>error,'warning'));


    //   this.router.navigate(['dashborad'])


   }

    public  logOut(){
      //  this.password.value ='';
      localStorage.setItem('jwt','');
    }

    private loginIn(contacto:Contacto){
        this.global.contacto = contacto
        this.active=true;
        this.router.navigate(['/dashboard']);
    }
    public recuperar(email:string){
        this.router.navigate(['/dashboard']);
    }

    public resetAlert():void{
        this.alerts=[];
    }
    public addAlert(msg:String,type:String):void {
        this.alerts.push({msg: msg, type: type, closable: true});
    }
    public closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    }

}
