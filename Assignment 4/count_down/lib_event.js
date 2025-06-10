"use strict";

class Event {
    #datestring;

    constructor(name, datestring) {
        this.name = name;
        this.#datestring = datestring;
        this.date = new Date(datestring);
    }

    hasName() {
        return this.name.length > 0;
    }

    hasDate() {
        return this.#datestring.length > 0;
    }

    isValidDate() {
        return this.date.toString() != "Invalid Date"
    }

    get days() {
        // calculate days
        const today = new Date();
        const msFromToday = this.date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds  
        return Math.ceil( msFromToday / msForOneDay ); 
    }

    get message() {
        // create and display message 
        let msg = "";
        const date = this.date.toDateString();
        if (this.days == 0) {
            msg = `Hooray! Today is ${this.name}! (${date})`;
        } else if (this.days > 0) {
            msg = `${this.days} day(s) until ${this.name}! (${date})`;
        } else if (this.days < 0) {
            msg = `${this.name} happened ${Math.abs(this.days)} 
                   day(s) ago. (${date})`;
        }
        return msg;
    }
}