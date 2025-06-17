"use strict";

import Contact from "./lib_contact.js";
import Dob from "./lib_dob.js";

const getElement = selector => document.querySelector(selector);

const padNum = num => num.toString().padStart(2, "0");

const clearContact = () => {
    sessionStorage.removeItem("contact");
};
const saveContact = (...contact) => {
    sessionStorage.contact = JSON.stringify(contact);
};
const displayContact = () => {
    const contact = JSON.parse(sessionStorage.contact ?? null);
    if (Array.isArray(contact)) {
        getElement("#name").value = contact[0]["name"];
        getElement("#email").value = contact[0]["email"];
        getElement("#phone").value = contact[0]["phone"];
        getElement("#zip").value = contact[0]["zip"];
        const dt = new Dob(contact[0]["dob"]);
        if(!(dt.toString() == "Invalid Date")) {
            const str = `${dt.getFullYear()}-${padNum(dt.getMonth() + 1)}-${padNum(dt.getDate())}`;
            getElement("#dob").value = str;
        }
    }
};
const displayConfirmPage = () => {
    const contact = JSON.parse(sessionStorage.contact ?? null);
    if (Array.isArray(contact)) {
        getElement("#lbl_name").textContent = contact[0]["name"];
        getElement("#lbl_email").textContent = contact[0]["email"];
        getElement("#lbl_phone").textContent = contact[0]["phone"];
        getElement("#lbl_zip").textContent = contact[0]["zip"];
        getElement("#lbl_dob").textContent = new Dob(contact[0]["dob"]).toDateString() ?? "";
    }
};

const clearMessages = () => {
    const inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        const span = input.nextElementSibling;
        if (span) span.textContent = "";
    }
    inputs[0].focus();
};

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");

    if (form) {  // index.html
        // turn off default HTML validation messages
        form.noValidate = true;

        // attach invalid event handler for form controls
        for (let element of form.elements) {
            element.addEventListener("invalid", evt => {
                const elem = evt.currentTarget;
                const msg = elem.title ? elem.title : elem.validationMessage;
                const span = elem.nextElementSibling;
                if (span) span.textContent = msg;
            });
        }

        // display data from web storage in contact form
        displayContact();

        form.addEventListener("submit", evt => {
            clearMessages();  

            // validate user has entered an email or a phone number
            const email = getElement("#email");
            const phone = getElement("#phone");

            let msg = (!Contact.isValidEmail(email.value) && !Contact.isValidPhone(phone.value)) ? "Please enter an email or phone." : "";
            email.setCustomValidity(msg);

            // validate dob 
            const dob = getElement("#dob"); 
            const dobValue = new Date(dob.value + "T00:00:00");   // add time to correct UTC/local time issue
            if (!Dob.isValid(dobValue)) {
                msg = "Please enter a valid DOB."
            } else {
                let today = new Date();
                today = new Date(today.getFullYear(), today.getMonth(), today.getDate()); // sets time to 00:00:00
                msg = (today <= dobValue) ? "DOB must be in the past." : "";
            }
            dob.setCustomValidity(msg);

            // validate form
            if(!form.checkValidity()) { 
                evt.preventDefault();
            } else {
                // save contact info to web storage
                saveContact(new Contact(getElement("#name").value, email.value, 
                    phone.value, getElement("#zip").value, new Dob(dobValue)));
            }
        });

        form.addEventListener("reset", () => {
            clearMessages();
            clearContact();
        });
    } else {     // confirm.html
        // display data from web storage in confirm page labels
        displayConfirmPage();
    }
}); 