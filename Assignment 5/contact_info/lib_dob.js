"use strict";

export default class Dob extends Date {
    constructor(dateString) {
        super(dateString);
    }

    static isValid(date) {
        return date.toString() == "Invalid Date" ? false : true;
    }
}