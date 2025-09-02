function logClass(constructor: Function) {
  console.log(`Class ${constructor} has been created.`);
}

@logClass
export class Pokemon {
  constructor(public name: string, public type: string, public level: number) {}
}
