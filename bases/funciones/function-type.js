"use strict";
(() => {
    const function1 = (a, b, c) => {
        return `${a} ${b} ${c}`;
    };
    const function2 = (a, b) => {
        return a + b;
    };
    const function3 = () => {
        return "No parameters";
    };
    let myFunction;
    myFunction = function1;
    console.log(myFunction("Hello", "World", "!"));
})();
