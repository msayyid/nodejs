setInterval(() => {
    console.log("hello world");
}, 2000);
// Registers a timer that will run the callback every 2000 ms (2 seconds)
// The function is placed in the event loop repeatedly at this interval

console.log("i will run first");
// Runs immediately because it is synchronous