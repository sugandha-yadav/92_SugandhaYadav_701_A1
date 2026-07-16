const http = require("http");

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    if (req.url === "/google") {
        try {
            // Fetch Google homepage
            const response = await fetch("https://www.google.com");

            // Get HTML content
            const data = await response.text();

            // Send HTML as response
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } catch (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error fetching Google page: " + error.message);
        }
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Route Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});