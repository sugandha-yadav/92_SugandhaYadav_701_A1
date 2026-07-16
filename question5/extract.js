const AdmZip = require("adm-zip");

// Read the zip file
const zip = new AdmZip("myfolder.zip");

// Extract all files into "ExtractedFiles" folder
zip.extractAllTo("ExtractedFiles", true);

console.log("ZIP file extracted successfully!");