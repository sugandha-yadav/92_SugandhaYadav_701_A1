const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // Route to display HTML page
    if (req.url === "/" && req.method === "GET") {

        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    }

    // Route for AJAX request
    else if (req.url === "/gethello" && req.method === "GET") {

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Hello NodeJS!!");

    }

    else {

        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");

    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});