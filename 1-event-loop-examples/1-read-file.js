const { readFile } = require("fs"); 
// Import the readFile function from Node's built-in fs (file system) module

console.log("started a first task"); 
// This runs immediately when the program starts

readFile("./content/first.txt", "utf8", (err, result) => {
    // Asynchronously start reading the file
    // Node sends this task to the system and continues running the program
    // The callback will run later when the file reading is finished

    if (err) {
        console.log(err);
        return; 
        // If an error occurs (file not found, etc.), print it and stop this callback
    }

    console.log(result); 
    // Print the contents of the file

    console.log("completed first task"); 
    // This runs after the file has been successfully read
});

console.log("starting next task"); 
// This runs BEFORE the file finishes reading because readFile is asynchronous