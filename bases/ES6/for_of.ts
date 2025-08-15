(() => {
  type Avenger = {
    name: string;
    power: string;
  };

  const ironMan: Avenger = {
    name: "iroman",
    power: "100",
  };
  const capi: Avenger = {
    name: "capitan america",
    power: "99",
  };
  const thor: Avenger = {
    name: "thor",
    power: "50",
  };

  const avengersArr: Avenger[] = [ironMan, capi, thor];

  for (const element of avengersArr) {
    console.log(element.name);
  }
})();
