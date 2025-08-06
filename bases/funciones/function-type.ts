(() => {
  const function1 = (a: string, b: string, c: string): string => {
    return `${a} ${b} ${c}`;
  };

  const function2 = (a: number, b: number): number => {
    return a + b;
  };

  const function3 = (): string => {
    return "No parameters";
  };

  let myFunction: (a: string, b: string, c: string) => string;

  myFunction = function1;

  console.log(myFunction("Hello", "World", "!"));
})();
