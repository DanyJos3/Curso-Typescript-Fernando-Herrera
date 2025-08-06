(() => {
  console.log("Hola, mundo!");
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatSignal = () => {
    return ` activa la señal`;
  };

  const heroName = returnName();
})();
