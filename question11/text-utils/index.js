function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverse(text) {
    return text.split("").reverse().join("");
}

function wordCount(text) {
    return text.trim().split(/\s+/).length;
}

function removeSpaces(text) {
    return text.replace(/\s+/g, "");
}

module.exports = {
    capitalize,
    reverse,
    wordCount,
    removeSpaces
};