(() => {
  class Avenger {
    // private name: string = "Scott Lang";
    // private team: string;
    // public realName?: string;
    static avgAge: number = 35;

    // constructor(team: string, name: string, realName?: string) {
    //   this.team = team;
    //   this.name = name;
    //   // this.realName = realName;
    // }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    private getBio = () => {
      console.log(`${this.name} (${this.team}) ${Avenger.avgAge}`);
    };
  }

  // const antman: Avenger = new Avenger("Team B", "Capitan", "Scott Lang");
  // console.log(antman);
  // antman.getBio();
})();

// const antman: Avenger = new Avenger("Team B");
