"use strict";

class Burger {
    constructor(type = "regular", size = "single", toppings = []) {
        this.type = type;
        this.size = size;
        this.toppings = toppings;
    }
}

class Drink {
    constructor(type = "water", size = "small") {
        this.type = type;
        this.size = size;
    }
}

class Fries {
    constructor(type = "regular", size = "small") {
        this.type = type;
        this.size = size;
    }
}