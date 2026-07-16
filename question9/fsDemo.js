const fs = require("fs");

// Read File
fs.readFile("sample.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File Content:\n" + data);

    // Write File
    fs.writeFile("newFile.txt", "This file is created using fs.writeFile().", (err) => {
        if (err) throw err;
        console.log("newFile.txt created.");

        // Append File
        fs.appendFile("newFile.txt", "\nThis line is appended.", (err) => {
            if (err) throw err;
            console.log("Data appended.");

            // Rename File
            fs.rename("newFile.txt", "renamedFile.txt", (err) => {
                if (err) throw err;
                console.log("File renamed.");

                // Check if file exists
                fs.access("renamedFile.txt", fs.constants.F_OK, (err) => {
                    if (err) {
                        console.log("File does not exist.");
                    } else {
                        console.log("File exists.");

                        // File Information
                        fs.stat("renamedFile.txt", (err, stats) => {
                            if (err) throw err;
                            console.log("File Size:", stats.size, "bytes");

                            // Delete File
                            fs.unlink("renamedFile.txt", (err) => {
                                if (err) throw err;
                                console.log("File deleted successfully.");
                            });
                        });
                    }
                });
            });
        });
    });
});