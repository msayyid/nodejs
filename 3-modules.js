// Modules
// CommonJS, every file is module (by defautl)
// Modules - Encapsulated code (only share minimum)

// Import exported values from other files using require()

const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavor.js");


// require("./7-mind-grenade.js")
// This imports and immediately executes the file.
// If the file does not export anything but contains code,
// that code will run as soon as it is required.
// Used when a module has side effects (runs logic on load).
require("./7-mind-grenade.js");

console.log(data); 
// logs the entire exported object from 6-alternative-flavor.js

console.log(data.items, data.singlePerson.name);  
// accesses specific properties from the imported object



// sayHi("susan");
// sayHi(names.john);
// sayHi(names.peter);