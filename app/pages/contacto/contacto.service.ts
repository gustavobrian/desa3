/**
 * Created by Gustavo on 6/23/16.
 */
import { Injectable } from '@angular/core';
import { Observable}     from 'rxjs/Observable';
import { contentHeaders } from '../../common/headers';
import { Http, Response} from '@angular/http';
import {Global} from "../../common/model";

export class Contacto{

    constructor(
        public id: number,
        public idcontacto: number,
        public alias: string,
        public apellidos: string,
        public nombres: string,
        public email: string
    ){

    }

}

@Injectable()
export class ContactoService {


    isLoggedIn: boolean = false;

    public constructor(private http:Http){

    }

    public login(email:string, clave:string) :Observable <Contacto> {
      //  let url= 'http://192.168.56.100/laravel/public/loginjwt';

        let body = JSON.stringify({ email, clave });
      //  let headers= contentHeaders;

        return this.http.post(Global.urlService + 'loginjwt', body
            , { headers: contentHeaders })
            .map(this.resultLogin)
            .catch(this.handleError);
    }

    private resultLogin(response:Response){
       //  let res=new Result().map(response);
        let res=response.json().user;
        localStorage.setItem('jwt', res.token);

        return new Contacto(res.id, res.idcontacto,res.alias,res.apellidos,res.nombres,res.email);

    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let customError:string= error.json().error;
        if(customError!=null && customError.length>0){
            return Observable.throw(customError);
        }
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}


