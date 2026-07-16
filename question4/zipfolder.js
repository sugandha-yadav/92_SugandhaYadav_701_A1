const fs = require("fs");
const archiver = require("archiver");

const output = fs.createWriteStream("myfolder.zip");
const archive = archiver("zip", {
    zlib: { level: 9 }
});

archive.pipe(output);

archive.directory("myfolder/", false);

archive.finalize();

output.on("close", () => {
    console.log("ZIP file created successfully!");
});