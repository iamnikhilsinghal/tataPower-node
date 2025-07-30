const fs = require("fs");

console.log("1. Start reading file...");

const result = fs.readFileSync("example.txt", "utf8");
console.log("2. Result is:", result);

console.log("3. End of program");

// async await- blocking
