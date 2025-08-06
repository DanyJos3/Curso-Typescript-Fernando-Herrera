"use strict";
(() => {
    let flash = {
        nombre: "Barry Allen",
        edad: 24,
        poderes: ["Corre muy rapido", "Viaja en el tiempo"],
    };
    flash = {
        nombre: "Clark Kent",
        edad: 60,
        poderes: ["Vuela", "Super fuerza", "Visión de rayos X"],
        getNombre() {
            return this.nombre;
        },
    };
    console.log(flash);
    console.log(flash.getNombre ? flash.getNombre() : "No hay nombre disponible");
})();
