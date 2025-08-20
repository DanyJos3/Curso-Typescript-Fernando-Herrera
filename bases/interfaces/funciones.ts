(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let add: addTwoNumbers;
  //   let add: addTwoNumbers = (x, y) => {
  //     return x + y;
  //   };

  add = (a, b) => {
    return 10;
  };
})();
