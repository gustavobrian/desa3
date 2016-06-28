"use strict";
/**
 * Created by Gustavo on 6/23/16.
 */
var Contacto = (function () {
    function Contacto(idcontacto, alias, apellidos, nombres, email) {
        this.idcontacto = idcontacto;
        this.alias = alias;
        this.apellidos = apellidos;
        this.nombres = nombres;
        this.email = email;
    }
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=contacto.js.map