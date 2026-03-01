const path = require("path");

// console.log(path);
console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
// Joins path segments safely using correct OS separator

console.log(filePath); // Prints constructed path

const base = path.basename(filePath);
// Extracts file name from path

console.log(base); // Prints "test.txt"

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
// Creates absolute path starting from current directory

console.log(absolute); // Prints full absolute path