const phoneBookDEF = new Map([   //Create a new phoneBookDEF 
    ['David', '0466112233'],
    ['Emma', '0477223344'],
    ['Frank', '0488334455']
]);

const phoneBookABC = new Map();    // Initialise phoneBookABC with given data
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182');


  
phoneBookABC.set('Caroline', '0455998877');    // Update the phone number for Caroline
  


function printPhoneBook(contacts) {   // Function to print the contents of a phone book
contacts.forEach((phone, name) => {console.log(`${name}: ${phone}`);
});
}
  
  
console.log('Phone Book ABC:');  // Print both phone books
printPhoneBook(phoneBookABC);
console.log('Phone Book DEF:');
printPhoneBook(phoneBookDEF);
  


const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);  // Combine phoneBookABC and phoneBookDEF into a new phoneBook Map
  
 

console.log('Combined Phone Book:');  //  Print out the full list of names in the combined phone book
printPhoneBook(phoneBook);