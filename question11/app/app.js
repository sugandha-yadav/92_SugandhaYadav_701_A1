const text = require("text-utils");

const sentence = "hello world from npm package";

console.log("Capitalized:", text.capitalize(sentence));
console.log("Reversed:", text.reverse(sentence));
console.log("Word Count:", text.wordCount(sentence));
console.log("Without Spaces:", text.removeSpaces(sentence));