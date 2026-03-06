// fs async

// Import async file system methods (non-blocking)
const { readFile, writeFile } = require("fs");

console.log("start");
// Start reading first.txt
// Node will read it in background and call this function when done
readFile("content/first.txt", "utf8", (err, result) => {
    // If something went wrong while reading
    if (err) {
        console.log(err);
        return; // stop this callback
    }

    // If successful, store file content
    const first = result;
    console.log(first);

    // Now read second.txt (only runs after first finished)
    readFile("content/second.txt", "utf8", (err, result) => {
        // Handle error if reading second file fails
        if (err) {
            console.log(err);
            return;
        }

        // Store second file content
        const second = result;
        console.log(second);

        // Now write both contents into a new file
        // Node writes in background and calls this callback when done
        writeFile(
            "content/result-async.txt",
            `here is the result: ${first}, ${second}\nupdated`,
            (err, result) => {
                // Handle error if writing fails
                if (err) {
                    console.log(err);
                    return;
                }

                // If successful, result is undefined (writeFile returns no data)
                console.log(result, "success");
                console.log("done with this task");
            }
        );
    });
});
console.log("starting next task")
// Correct final understanding:
// Start reading first.txt
// When it finishes, callback runs
// If error → stop
// If success → store content in first
// Then read second.txt
// When it finishes, callback runs
// If error → stop
// If success → store content in second
// Then write result file
// When writing finishes, callback runs
// If error → log it
// If success → result is undefined, print success
// That is 100% accurate.