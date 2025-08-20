(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {
      console.log("Constructor del mutante llamado");
    }

    // protected getFullName() {
    //   return `${this.name} (${this.realName})`;
    // }
  }

  class Xmen extends Mutante {}
  class Villian extends Mutante {}

  //   const wolverine = new Xmen("Wolverine", "Logan");
})();
