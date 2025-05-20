"use strict";

let distance = parseInt(prompt("Distance (miles): "));
let speed = parseInt(prompt("Speed (MPH): "));

let hours = Math.trunc((distance / speed))
let minutes = ((distance / speed) - hours) * 60;

alert(`Distance: ${distance} miles
    \nSpeed: ${speed} MPH
    \nTravel time: ${hours} hours, ${Math.round(minutes)} minutes`);
