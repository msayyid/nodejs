// GLOBALS - NO WINDOW !!!!
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed


// Globals in Node.js are built-in variables and functions
// that are available everywhere without importing them.
// Examples: __dirname (current folder path),
// __filename (current file path),
// require (import modules),
// module (info about current file),
// process (info about running Node environment),
// and functions like setInterval().

console.log(__dirname);
setInterval(() => {
    console.log("hello world");
}, 1500);