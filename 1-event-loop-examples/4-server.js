const http = require("http"); 
// Import Node's built-in HTTP module (used to create web servers)

const server = http.createServer((req, res) => {
    // This callback runs every time a request reaches the server

    console.log("request event");
    // Log that the server received a request

    res.end("hello world");
    // Send a response back to the client and close the connection
});

server.listen(5000, () => {
    // Start the server and bind it to port 5000
    // After this, the server begins waiting for incoming requests

    console.log("Server listening on port: 5000");
    // This message prints once the server has successfully started
});