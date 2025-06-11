"use strict";

const change = {
    "quarters": 0,
    "dimes": 0,
    "nickels": 0,
    "pennies": 0,
    isNumeric(value) {
        return !isNaN(value);
    },
    isInRange(value, minimum, maximum) {
        if (this.isNumeric(value)) {
            return value >= minimum && value <= maximum;
        }
    },
    calculate(cents) {
        // calculate the number of quarters
        this.quarters = Math.floor(cents / 25);        // get number of quarters
        cents = cents % 25;         // assign the remainder to the cents variable

        // calculate the number of dimes
        this.dimes = Math.floor(cents / 10);           // get number of dimes
        cents = cents % 10;         // assign the remainder to the cents variable

        // calculate the number of nickels
        this.nickels = Math.floor(cents / 5);

        // calculate the number of nickels and pennies
        this.pennies = cents % 5;
    }
}