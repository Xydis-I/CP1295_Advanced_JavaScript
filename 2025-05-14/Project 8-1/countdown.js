"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    let timer;

    getElement("#countdown").addEventListener("click", () => {
        clearInterval(timer);

        updateClock();

        timer = setInterval(() => {
            updateClock();
        }, 1000);
    });

    getElement("#event").addEventListener("click", () => {
        clearInterval(timer);
    });

    getElement("#date").addEventListener("click", () => {
        clearInterval(timer);
    });

    // set focus on first text box
    getElement("#event").focus();
});

function updateClock() {
    const eventName = getElement("#event").value;
    const eventDateString = getElement("#date").value;  
    const messageLbl = getElement("#message");  

    // make sure user entered event and date 
    if (eventName == "" || eventDateString == "") {
        messageLbl.textContent = "Please enter both a name and a date.";
        return;
    }

    // convert event date string to Date object and check for validity
    const eventDate = new Date(eventDateString);
    if (eventDate.toString() == "Invalid Date") {
        messageLbl.textContent = "Please enter a valid date.";
        return;
    }

    // calculate days
    const today = new Date();
    let msFromToday = eventDate.getTime() - today.getTime();
    const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
    const daysToDate = Math.floor( msFromToday / msForOneDay ); 

    //calculate hours
    msFromToday -= (daysToDate * 24 * 60 * 60 * 1000);
    let hoursToDate = Math.floor( (msFromToday) / 1000 / 3600 );

    //calculate minutes
    msFromToday -= (hoursToDate * 60 * 60 * 1000);
    let minutesToDate = Math.floor( (msFromToday) / 1000 / 60 );

    //calculate seconds
    msFromToday -= (minutesToDate * 60 * 1000);
    let secondsToDate = Math.floor( (msFromToday) / 1000 );

    // create and display message 
    const displayDate = eventDate.toDateString();
    let msg = "";
    if (daysToDate == 0) {
        msg = `Hooray! Today is ${eventName}! (${displayDate})`;
    } else if (daysToDate > 0) {
        msg = `${daysToDate} day(s), ${hoursToDate} hours, ${minutesToDate} minutes, ${secondsToDate} seconds until ${eventName} (${displayDate})`;
    } else if (daysToDate < 0) {
        msg = `${eventName} happened ${Math.abs(daysToDate)} 
                day(s) ago. (${displayDate})`;
    }
    messageLbl.textContent = msg;
}