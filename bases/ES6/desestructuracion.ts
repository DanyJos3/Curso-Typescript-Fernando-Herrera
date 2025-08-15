(() => {
  type Avenger = {
    name: string;
    power: string;
    level: number;
    isActive: boolean;
  };

  const ironMan: Avenger = {
    name: "Robert Jr",
    power: "100",
    level: 10,
    isActive: false,
  };

  const printData = ({ name, ...resto }: Avenger) => {
    console.log(name, resto);
  };

  printData(ironMan);

  /** Destructuring de ARRAYS */
  const avengersArr: [String, Number, boolean] = ["Capitan america", 150, true];

  const [, edad, isActive] = avengersArr;

  console.log(edad, isActive);
})();
