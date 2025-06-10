"use strict";

class Burger {
    constructor(type = "regular", size = "single", toppings = []) {
        this.type = type;
        this.size = size;
        this.toppings = toppings;
    }

    get price() {
        let price = 0;
        if (this.type == "regular") {
            price += 2;
        } else {
            price += 4;
        }

        if (this.size == "single") {
            price += 2;
        } else {
            price += 5;
        }
        return price;
    }
}

class Drink {
    constructor(type = "water", size = "small") {
        this.type = type;
        this.size = size;
    }

    get price() {
        let price = 0;
        if (this.type == "water") {
            return price;
        }

        if (this.type == "soda") {
            price += 1.25;
        } else {
            price += 1;
        }

        if (this.size == "small") {
            return price;
        } else if (this.size == "medium") {
            return price * 2;
        } else {
            return price * 3;
        }
    }

    get element() {
        let element = document.createElement("div");
        let line = document.createElement("b");
        if (this.type != "regular") {
            line.textContent = `${this.size} ${this.type}burger - $${this.price}`
        } else {
            line.textContent = `${this.size} burger - $${this.price}`
        }
        element.appendChild(line);
    }
}

class Fries {
    constructor(type = "regular", size = "small") {
        this.type = type;
        this.size = size;
    }

    get price() {
        let price = 0;
        if (this.type == "regular") {
            price += 1.50;
        } else {
            price += 1.25;
        }

        if (this.size == "small") {
            return price;
        } else if (this.size == "medium") {
            return price * 2;
        } else {
            return price * 3;
        }
    }
}

class Order {
    constructor(items= []) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    get total() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price;
        });
        return total;
    }
}