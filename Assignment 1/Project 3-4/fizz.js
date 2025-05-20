"use strict";

// My console lines weren't numbered so I just included it.

for (let index = 1; index < 21; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
        console.log(`${index} FizzBuzz`);
    }

    else if (index % 3 == 0) {
        console.log(`${index} Fizz`);
    }

    else if (index % 5 == 0) {
        console.log(`${index} Buzz`);
    }

    else {
        console.log(`${index}`);
    }
}