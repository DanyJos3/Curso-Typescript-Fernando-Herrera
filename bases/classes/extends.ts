(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructur del avenger llamado");
    }

    protected getFullName() {
      return `${this.name} (${this.realName})`;
    }
  }

  class Xmen extends Avenger {
    // constructor(name: string, realName: string, public powers: string[]) {
    //   super(name, realName);
    // }
    // public getPowers() {
    //   return this.powers.join(", ");
    // }
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor del Xmen llamado");
    }

    public getFullNameXmen = () => {
      console.log(super.getFullName() + "xmen");
    };
  }

  //   const wolverine = new Xmen("Hola", "Mundo", true);
  //   console.log(wolverine);
  //   wolverine.getFullNameXmen();
})();
