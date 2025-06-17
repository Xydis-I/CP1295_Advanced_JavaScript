"use strict";

import Dob from "./lib_dob.js";

export default class Contact {
    constructor(name, email, phone, zip, dob) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.zip = zip;
        this.dob = dob;
    }

    static isValidEmail(emailString) {
        return emailString != "";
    }

    static isValidPhone(phoneString) {
        return phoneString != "";
    }
}