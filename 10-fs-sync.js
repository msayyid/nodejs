// FS MODULE (sync) - Node.js built-in File System module
// Allows reading, writing, creating, and managing files

// Destructuring specific methods from the fs module
const { readFileSync, writeFileSync, readFile } = require("fs");
console.log("start");

// Importing vm module (not used here)
// runInThisContext executes JS code inside current V8 context
// const { runInThisContext } = require("vm");

// Alternative way to import fs module
// const fs = require("fs");
// fs.readFileSync(); // Access methods through fs object instead of destructuring


// Read file synchronously (blocking operation)
// 'utf8' converts Buffer into readable string
const first = readFileSync("content/first.txt", "utf8");
const second = readFileSync("content/second.txt", "utf8");

// Print contents of both files
console.log(first);
console.log(second);


// Write to file synchronously (blocking operation)
// If file does not exist → it will be created
// { flag: "a" } means append instead of overwrite
writeFileSync(
  "content/result-sync.txt",
  `here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task")
console.log("starting the next one")

// Read the updated file to verify the result
// 'utf-8' and 'utf8' are equivalent
const third = readFileSync("content/result-sync.txt", "utf-8");

// Print final file content
console.log(third);