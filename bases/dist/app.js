"use strict";
var Validations;
(function (Validations) {
    var validateName = function (name) {
        return name.length > 2;
    };
    var validateText = function (text) {
        return text.length > 3 ? true : false;
    };
})(Validations || (Validations = {}));
//# sourceMappingURL=app.js.map