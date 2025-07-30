// const fs = require("fs"); // import module file system

console.log("1. Start reading file...");

// when a func is passed as a parameter inside another function then its called callback
// fs.readFile("example.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   console.log("2. File content:", data);
// });

// convert the selected code into promise
const fs = require("fs").promises;
fs.readFile("example.txt", "utf8")
  .then((data) => {
    console.log("2. File content:", data);
  })
  .catch((err) => {
    console.log("error is:", err);
  });

console.log("3. End of program");

// async operation-
// callback-- func pass
// promise
// async- await
