"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = $("form");
    form.setAttribute("novalidate", true);

    // attach invalid event handlers
    for (let i = 0; i < 4; i++) {
        form.elements[i].addEventListener("invalid", evt => {
            if (evt.currentTarget.title != "") {
                evt.currentTarget.nextElementSibling.textContent = evt.currentTarget.title;
            } else {
                evt.currentTarget.nextElementSibling.textContent = evt.currentTarget.validationMessage;
            }
        });
    }

    form.addEventListener("submit", evt => {
        // handle submit event
        for (let i = 0; i < 4; i++) {
            form.elements[i].nextElementSibling.textContent = "";
        }

        const day = new Date().getDate().toString();
        const year = new Date().getFullYear().toString().slice(2,4);

        const expdate = new Date(`20${$("#expdate").value.split('/')[1]}-${$("#expdate").value.split('/')[0]}-01T00:00:00`);

        let today = new Date();
        today.setDate(1);
        today.setHours(0,0,0,0);

        if (!form.checkValidity() || expdate <= today) {
            if (expdate <= today) {
                $("#expdate").nextElementSibling.textContent = $("#expdate").title;
            }
            evt.preventDefault();
        }
    });
});