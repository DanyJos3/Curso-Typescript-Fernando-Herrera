(() => {
  interface Xmen {
    name: string;
    age: number;
    getPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    public name: string;
    public age: number;
    public realName: string;

    getPower(id: number): string {
      return this.name;
    }
  }
})();
