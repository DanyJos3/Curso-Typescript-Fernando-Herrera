"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    console.log(fullName("Bruce", "Wayne", "Gordon"));
})();
