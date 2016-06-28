"use strict";
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.email = function (control) {
        var emailRegexp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value !== "" && (control.value.length <= 5 || !emailRegexp.test(control.value))) {
            return { "email": true };
        }
        return null;
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=customvalidator.js.map