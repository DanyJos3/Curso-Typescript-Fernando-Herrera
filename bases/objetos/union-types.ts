(() => {
  type Hero = {
    nombre: string;
    edad?: number;
    poderes: string[];
    getNombre?: () => string;
  };
  let flash: Hero = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre muy rapido", "Viaja en el tiempo"],
  };

  let superman: Hero = {
    nombre: "Clark Kent",
    edad: 60,
    poderes: ["Vuela", "Super fuerza", "Visión de rayos X"],
    getNombre() {
      return this.nombre;
    },
  };

  console.log(flash);
  console.log(superman);
})();
