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

    get element() {
        let element = document.createElement("div");
        let line = document.createElement("h4");

        if (this.type != "regular") {
            line.textContent = `${this.size} ${this.type}burger - $${this.price.toFixed(2)}`
        } else {
            line.textContent = `${this.size} burger - $${this.price.toFixed(2)}`
        }

        let toppingElements = document.createElement("ul");
        this.toppings.forEach(topping => {
            let addon = document.createElement("li");
            addon.textContent = topping;
            toppingElements.appendChild(addon);
        });

        element.appendChild(line);
        element.appendChild(toppingElements);
        return element;
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
        let line = document.createElement("h4");
        
        line.textContent = `${this.size} ${this.type} - $${this.price.toFixed(2)}`

        element.appendChild(line);
        return element;
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

    get element() {
        let element = document.createElement("div");
        let line = document.createElement("h4");
        
        if (this.type == "regular") {
            line.textContent = `${this.size} fries - $${this.price.toFixed(2)}`
        } else {
            line.textContent = `${this.size} ${this.type} fries - $${this.price.toFixed(2)}`
        }
        
        element.appendChild(line);
        return element;
    }
}

class Order {
    constructor(items= []) {
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    clear() {
        this.items = [];
    }

    generateMenu(targetDiv) {
        targetDiv.innerHTML = "";

        let burgers = document.createElement("div");
        let drinks = document.createElement("div");
        let fries = document.createElement("div");

        this.items.forEach(item => {
            if (item.constructor.name == "Burger") {
                burgers.appendChild(item.element);
            } else if (item.constructor.name == "Drink") {
                drinks.appendChild(item.element);
            } else {
                fries.appendChild(item.element);
            }
        });

        targetDiv.appendChild(burgers);
        targetDiv.appendChild(drinks);
        targetDiv.appendChild(fries);

        let total = document.createElement("h2");
        total.textContent = `Total: $${this.total.toFixed(2)}`
        targetDiv.appendChild(total);
    }

    get total() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price;
        });
        return total;
    }
}