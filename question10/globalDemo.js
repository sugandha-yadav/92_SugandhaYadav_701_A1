// Using Global Objects

console.log("=== Global Objects Demo ===");

// __filename
console.log("Current File:", __filename);

// __dirname
console.log("Current Directory:", __dirname);

// setTimeout()
setTimeout(() => {
    console.log("This message is displayed after 2 seconds.");
}, 2000);

// setInterval()
let count = 1;
const interval = setInterval(() => {
    console.log("Interval Count:", count);
    count++;

    if (count > 3) {
        clearInterval(interval);
        console.log("Interval stopped.");
    }
}, 1000);

// Read Command Line Arguments
console.log("\n=== Command Line Arguments ===");

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("No command line arguments provided.");
} else {
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}