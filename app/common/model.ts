import {Contacto} from "../pages/contacto/contacto.service";
/**
 * Created by Gustavo on 6/24/16.
 */
export class Global {

    public contacto:Contacto;
    public static urlService:string='http://192.168.56.100/laravel/public/';

    private static instance: Global;
    static getInstance() {
        if (!Global.instance) {
            Global.instance = new Global();
        }
        return Global.instance;
    }

}