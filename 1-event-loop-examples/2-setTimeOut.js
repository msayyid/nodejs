console.log("first");
// Runs immediately because it is synchronous code

setTimeout(() => {
    console.log("second");
}, 0);
// Schedules this function to run later via the event loop
// The callback is placed in the timer queue after at least 0ms
// It will only execute once the call stack is empty

console.log("third");
// Runs immediately after "first" because the timeout callback hasn't executed yet

// completed and exited OS process