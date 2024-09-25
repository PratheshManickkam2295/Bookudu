// run `node index.js` in the terminal
// STEP 1: IMPORT ALL NECESSARY PACKAGES
const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
const bodyParser = require("body-parser");

console.log(process.env);
// ENABLING ENVIRONMENT VARIABLE CONFIGS:
require("dotenv").config()
console.log(process.env);

// CORS CONFIGURATION
// HTTP_SERVER.use(cors());

// BODY PARSER CONFIGURATION
// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
HTTP_SERVER.use(bodyParser.json());

// INJECTING DATABASE CONNECTION
// require("./Database/dbConfig");

// BASIC SERVER CONFIGURATIONS:
const PORT = 5000;

HTTP_SERVER.listen(PORT, "0.0.0.0", (err) => {
  if (err) throw err;
  console.log(`Listening on PORT ${PORT}`);
});

// INJECTING API SERVER
HTTP_SERVER.use("/", require("./app"));

// SYNCHRONOUS CODE
// const fs = require('node:fs');

// const content = new Date().toString();

// try {
//   fs.writeFileSync('./files/test.txt', content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }

// ASYNCHRONOUS CODE

// const fs = require('fs/promises');
// async function createFile() {
//   try {
//     const content = new Date().toString();
//     await fs.writeFile('./files/test.txt', content);
//   } catch (err) {
//     console.log(err);
//   }
// }
// createFile();

// Create a filename with current timestamp

// const fs = require("fs");
// const content = new Date().toString().replace(/[:.]/g,'-');
// const path = `./files/${content}.txt`;

// try {
//   // files written successfully
//   fs.writeFileSync(path, content);
//   // Read the same file
//   fs.readFile(path, "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data)
//     }
//   });
// } catch (err) {
//   console.log(err);
// }

// creating node application
// console.log(`Hello Node.js v${process.versions.node}!`);

// async function createFile() {
//   try {
//     const content = new Date().toString();
//     await fs.writeFile("./files/test.txt", content);
//     console.log("Hey all");
//   } catch (err) {
//     console.log(err);
//   }
// }
// createFile();
