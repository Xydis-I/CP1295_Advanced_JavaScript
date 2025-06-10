"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    let order = new Order();

    $("#add_order").addEventListener("click", () => {
        // Burger
        if ($("#burger_regular").checked || $("#burger_cheese").checked || $("#burger_single").checked || $("#burger_double").checked) {
            let burger = new Burger();

            const types = document.getElementsByName("burger_type");
            for (let i = 0; i < types.length; i++) {
                if (types[i].checked) {
                    burger.type = types[i].value;
                }
            }

            const sizes = document.getElementsByName("burger_size");
            for (let i = 0; i < sizes.length; i++) {
                if (sizes[i].checked) {
                    burger.size = sizes[i].value;
                }
            }

            const toppings = $("#toppings").querySelectorAll("input[type='checkbox']");
            for (let i = 0; i < toppings.length; i++) {
                if (toppings[i].checked) {
                    burger.toppings.push(toppings[i].value);
                }
            }

            order.add(burger);
            console.log(burger);
        }

        // Drink
        if ($("#water").checked || $("#tea").checked || $("#soda").checked || $("#drink_small").checked || $("#drink_medium").checked || $("#drink_large").checked) {
            let drink = new Drink();

            const types = document.getElementsByName("drink_type");
            for (let i = 0; i < types.length; i++) {
                if (types[i].checked) {
                    drink.type = types[i].value;
                }
            }

            const sizes = document.getElementsByName("drink_size");
            for (let i = 0; i < sizes.length; i++) {
                if (sizes[i].checked) {
                    drink.size = sizes[i].value;
                }
            }

            order.add(drink);
            console.log(drink);
        }

        // Fries
        if ($("#fry_regular").checked || $("#fry_curly").checked || $("#drink_small").checked || $("#drink_medium").checked || $("#drink_large").checked) {
            let fries = new Fries();

            const types = document.getElementsByName("fry_type");
            for (let i = 0; i < types.length; i++) {
                if (types[i].checked) {
                    fries.type = types[i].value;
                }
            }

            const sizes = document.getElementsByName("fry_size");
            for (let i = 0; i < sizes.length; i++) {
                if (sizes[i].checked) {
                    fries.size = sizes[i].value;
                }
            }

            order.add(fries);
            console.log(fries);
        }

        console.log("Total: " + order.total);
    }); 

    $("#clear_order").addEventListener("click", () => {
        
    });
    
}); 