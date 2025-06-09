"use strict";

const validation = {
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
    }
}