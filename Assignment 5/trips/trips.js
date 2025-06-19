"use strict";

import Trip from "./lib_trip.js";
import trips from "./lib_trips.js";
import { isEmptyString, isNegative, isNumeric } from "./lib_validation.js";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#add_trip").addEventListener("click", () => {
        const msgElement = getElement("#msg");
        msgElement.textContent = "";  // clear any previous message

        const destination = getElement("#destination").value;
        const miles = getElement("#miles").value;
        const gallons = getElement("#gallons").value;
        const trip = new Trip(destination, miles, gallons);

        if (isEmptyString(destination) || isEmptyString(miles) ||  isEmptyString(gallons)) {
            msgElement.textContent = "All fields are required.";
            getElement("#destination").focus();
        } else if (!isNumeric(trip.miles) || isNegative(trip.miles)) {
            msgElement.textContent = 
                "Miles must be a valid number greater than zero.";
            getElement("#miles").select();
        } else if (!isNumeric(trip.gallons) || isNegative(trip.gallons)) {
            msgElement.textContent = 
                "Gallons must be a valid number greater than zero.";
            getElement("#gallons").select();
        } else {
            trips.push(trip); 
            getElement("#trip_list").value = trips;
    
            getElement("#destination").value = "";
            getElement("#miles").value = "";
            getElement("#gallons").value = ""; 
            getElement("#destination").focus();   
        }
    });
    
    getElement("#destination").focus();  // initial load
});