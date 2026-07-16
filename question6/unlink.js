const fs = require("fs");
const util = require("util");

// Promisify fs.unlink
const deleteFile = util.promisify(fs.unlink);

// Call the promisified function
deleteFile("demo.txt")
    .then(() => {
        console.log("File deleted successfully!");
    })
    .catch((err) => {
        console.log("Error:", err.message);
    });