export class Die {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

export class Dice {
    constructor() {
        this.die1 = new Die();
        this.die2 = new Die();
    }

    roll() {
        const roll1 = this.die1.roll();
        const roll2 = this.die2.roll();
        return {
            roll1,
            roll2,
            total: roll1 + roll2
        };
    }
}
