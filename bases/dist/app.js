"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const ironMan = {
        name: "Robert Jr",
        power: "100",
        level: 10,
        isActive: false,
    };
    const printData = (_a) => {
        var { name } = _a, resto = __rest(_a, ["name"]);
        console.log(name, resto);
    };
    printData(ironMan);
    /** Destructuring de ARRAYS */
    const avengersArr = ["Capitan america", 150, true];
    const [, edad, isActive] = avengersArr;
    console.log(edad, isActive);
})();
(() => {
    const ironMan = {
        name: "iroman",
        power: "100",
    };
    const capi = {
        name: "capitan america",
        power: "99",
    };
    const thor = {
        name: "thor",
        power: "50",
    };
    const avengersArr = [ironMan, capi, thor];
    for (const element of avengersArr) {
        console.log(element.name);
    }
})();
(() => {
    console.log("let");
    const getName = () => {
        console.log("Viejo hola mundo");
    };
    //   getName = () => {
    //     console.log("Nuevo hola mundo");
    //   };
    //   getName();
})();
//# sourceMappingURL=app.js.map