"use strict";

class TestScores {
    #scores;

    constructor() {
        this.#scores = [];
    }

    add(score) {
        this.#scores.push(score);
    }

    toString() {
        return this.#scores.join(', ');
    }

    toLetterString() {
        const grades = this.#scores.map(elem => {
            if (elem >= 90) return "A";
            else if (elem >= 80) return "B";
            else if (elem >= 70) return "C";
            else if (elem >= 60) return "D";
            else return "F";
        });
        return grades.join(", ");
    }

    toSortedString() {
        const sortedScores = this.#scores.slice();
        sortedScores.sort((a, b) => b - a);  
        return sortedScores.join(", ");
    }

    get avg() {
        const sum = this.#scores.reduce((total, elem) => total + elem, 0);
        return sum/this.#scores.length;
    }
}