"use strict";

import Trip from "./lib_trip.js";

const tripsData = [];               // a private field

const trips = {
    push(trip) {
        if (trip instanceof Trip) {  // only add valid Trip objects
            tripsData.push(trip);
        } else {
            throw new Error("Must be a Trip object.");
        }
    },

    get avgMpg() {              // a read-only property
        let totalMiles = 0;
        let totalGallons = 0;
        for (let trip of tripsData) {
            totalMiles += trip.miles;
            totalGallons += trip.gallons;
        }
        return totalMiles / totalGallons;
    },

    toString() {                 // override existing method
        let str = "";
        for (let trip of tripsData) {
            str += trip + "\n";
        }
        str += "\nAverage MPG: " + this.avgMpg.toFixed(1);
        return str;
    }
};

export default trips;
