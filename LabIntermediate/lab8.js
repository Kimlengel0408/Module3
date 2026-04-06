const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map();
phoneBookDEF.set("Darlene", "0412345678");
phoneBookDEF.set("Evelyn", "0409876543");
phoneBookDEF.set("Fernanda", "0404040404");

phoneBookABC.set("Caroline", "0450672286");

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

function printPhoneBook(contacts) {
    for (let contact of contacts) {
        console.log(contact);        
    }
}

printPhoneBook(phoneBook);
console.log(phoneBook.size);
