(() => {
  class Avenger {
    private static instance: Avenger;

    private constructor(public name: string, public realName: string) {}

    public static createInstance(name: string, realName: string) {
      if (!Avenger.instance) {
        Avenger.instance = new Avenger(name, realName);
      }
      return Avenger.instance;
    }
  }

  const antman = Avenger.createInstance("Antman", "Scott Lang");
  const antman2 = Avenger.createInstance("Antman", "test");
  const antman3 = Avenger.createInstance("Antman", "test2");

  // console.log(antman);
  // console.log(antman2);
  // console.log(antman3);
})();
