"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    $("#name").addEventListener("invalid", () => {
        $("#name").nextElementSibling.textContent = "Please enter your name.";
        $("#name").focus();
    });

    $("#email").addEventListener("invalid", () => {
        $("#email").nextElementSibling.textContent = "Please enter an email or phone.";
        $("#email").focus();
    });

    $("#phone").addEventListener("invalid", () => {
        $("#email").nextElementSibling.textContent = "Please enter an email or phone.";
        $("#email").focus();
    });

    $("#zip").addEventListener("invalid", () => {
        $("#zip").nextElementSibling.textContent = "Please enter a 5 digit ZIP.";
        $("#zip").focus();
    });

    $("#dob").addEventListener("invalid", () => {
        $("#dob").nextElementSibling.textContent = "Please enter a date of birth.";
        $("#dob").focus();
    });

    $("form").addEventListener("submit", evt => {

        const emailPattern = /\S+@\S+\.\S+/;
        const phonePattern = /\d{3}[\-]\d{3}[\-]\d{4}/;
        
        const email = $("#email");
        const phone = $("#phone");

        let dob = new Date($("#dob").value + "T00:00:00");

        let today = new Date();
        today.setHours(0,0,0,0);

        console.log(dob >= today);

        if (!$("form").checkValidity() || (!emailPattern.test(email.value) && !phonePattern.test(phone.value)) || dob >= today) {
            if (!emailPattern.test(email.value) && !phonePattern.test(phone.value)) {
                email.nextElementSibling.textContent = "Please enter an email or phone.";
            } else {
                email.nextElementSibling.textContent = "";
            }

            if (dob >= today) {
                $("#dob").nextElementSibling.textContent = "DOB must be in the past.";
            } else if ($("#dob").checkValidity()) {
                $("#dob").nextElementSibling.textContent = "";
            }

            evt.preventDefault();
        }
    });

    $("form").addEventListener("reset", () => {
        let elements = $("form").elements;
        for (let index = 0; index < 5; index++) {
            elements[index].nextElementSibling.textContent = "";
        }
    });
});