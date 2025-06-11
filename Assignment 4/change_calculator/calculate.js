"use strict";

const clearForm = () => {
    document.querySelector("#cents").value = "";
    document.querySelector("#quarters").value = "";
    document.querySelector("#dimes").value = "";
    document.querySelector("#nickels").value = "";
    document.querySelector("#pennies").value = "";
    document.querySelector("#cents").focus();
};

const calculateChange = () => {
    // get the number of cents from the user
    let cents = Math.floor(parseInt(document.querySelector("#cents").value));

    if (!change.isInRange(cents, 0, 99)) {
        alert("Please enter a valid number between 0 and 99");
        document.querySelector("#cents").select();
    } else {
        change.calculate(cents);

        // display the results of the calculations
        document.querySelector("#quarters").value = change.quarters;
        document.querySelector("#dimes").value = change.dimes;
        document.querySelector("#nickels").value = change.nickels;
        document.querySelector("#pennies").value = change.pennies;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#calculate").addEventListener("click", calculateChange);  
    document.querySelector("#clear").addEventListener("click", clearForm);     
    document.querySelector("#cents").focus();     
});