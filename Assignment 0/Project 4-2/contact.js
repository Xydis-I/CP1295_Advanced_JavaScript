"use strict";

const contacts = [
    "1|Scott|scott@murach.com|1-559-555-5555",
    "2|Joel|joel@murach.com|1-409-555-5555",
    "3|Mike|mike@murach.com|1-363-555-5555"
];

const menuString = "COMMAND MENU\n" +
    "list - List all contacts\n" +
    "get # - Get contact with the specified number\n" +
    "exit - Exit program";


while (true) {
    let userInput = prompt(menuString);

    if (userInput.toLowerCase() == "list") {
        let listString = "";
        contacts.forEach(contact => {
            listString += `${contact.split("|")[0]} - ${contact.split("|")[1]}\n`;
        });
        alert(listString);
    }

    else if (userInput.split(" ")[0].toLowerCase() == "get" && Number.isInteger(parseInt(userInput.split(" ")[1]))) {
        if (parseInt(userInput.split(" ")[1]) > contacts.length || parseInt(userInput.split(" ")[1]) < 1) {
            alert(`No data for #${parseInt(userInput.split(" ")[1])}`);
        } else {
            let contact = contacts[parseInt(userInput.split(" ")[1]) - 1].split("|");
            alert(`Contact info for ${contact[1]}
                \nEmail: ${contact[2]}
                \nPhone: ${contact[3]}`);
        }
    }

    else if (userInput.toLowerCase() == "exit") {
        break;
    }

    else {
        alert("Invalid command")
    }
}