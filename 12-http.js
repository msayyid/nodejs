// Node's built-in HTTP module (used to create servers without frameworks like Express)
const http = require("http");

// createServer() creates an HTTP server.
// The callback runs EVERY time a request hits the server.
// req = incoming request (URL, method, headers, etc.)
// res = response object used to send data back to the client
const server = http.createServer((req, res) => {

    // Simple routing based on the requested URL
    if (req.url === "/"){
        // res.end() sends the response and closes it
        res.end("Welcome to our home page");
        return; // stop execution so another response isn't sent
    }

    if (req.url === "/about") {
        res.end("Here's our short history");
        return;
    }

    // Default response if the route doesn't match anything above
    // (basically a simple 404 page)
    res.end(`
        <h1>OOps!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>`
    );
});

// Starts the server and listens for requests on port 5000
// Access via: http://localhost:5000
server.listen(5000);


// Ultra-short mental model
// http module → lets Node act as a web server
// createServer() → define how requests are handled
// req.url → tells which page the user requested
// res.end() → sends the response and closes it
// listen(port) → starts the server and waits for requests