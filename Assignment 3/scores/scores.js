"use strict";

const getElement = selector => document.querySelector(selector);

const displayScores = scores => {
    getElement("#score_list").textContent = "";
    getElement("#avg").textContent = "";

    // filter scores
    let filtered = scores.filter(s => {
        if (getElement("#filter").value == 0) {
            return true;
        } else {
            return parseFloat(s[2]) >= parseFloat(getElement("#filter").value);
        }
    });

    // sort filtered scores
    filtered = filtered.sort((a, b) => {
        if (getElement("#sort").value == "fname") {
            return a[0] > b[0];
        } else if (getElement("#sort").value == "lname") {
            return a[1] > b[1];
        } else if (getElement("#sort").value == "score") {
            return parseFloat(a[2]) > parseFloat(b[2]);
        }
    });

    // get total of filtered scores and build display string
    let total = 0;
    filtered.forEach(score => {
        total += parseFloat(score[2]);
        console.log(score[2]);
    });

    // calculate the average 
    let average = total / filtered.length;

    // display
    filtered.forEach(score => {
        getElement("#score_list").textContent += `${score[1]}, ${score[0]}: ${score[2]}\n`
    });
    getElement("#avg").textContent = average.toFixed(1);
};

document.addEventListener("DOMContentLoaded", () => {
    
    let scores = [];

    getElement("#add_score").addEventListener("click", () => {
        scores.push([getElement("#first_name").value, getElement("#last_name").value, getElement("#score").value])
        displayScores(scores);
    });
    
    getElement("#clear_scores").addEventListener("click", () => {
        scores = [];
        getElement("#score_list").textContent = "";
    });

    getElement("#sort").addEventListener("change", () => {
        displayScores(scores);
        console.log("Change sort");
    });
    
    getElement("#filter").addEventListener("change", () => {
        displayScores(scores);
        console.log("Change filter");
    });

    // set focus on first text box on load
    getElement("#first_name").focus();
});