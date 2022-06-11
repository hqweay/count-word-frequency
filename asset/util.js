// const fs = require("fs");
// fs.readFileSync("Irregular.txt")
//   .toString()
//   .split(";")
//   .forEach((line) => {
//     words = line
//       .trim()
//       .split(" ")
//       .map((word) => word.trim());
//     if (words.length == 5) {
//       console.log(words[4] + "," + words[0]);
//       console.log(words[3] + "," + words[0]);
//       console.log(words[2] + "," + words[0]);
//       console.log(words[1] + "," + words[0]);
//     }
//     if (words.length == 4) {
//       console.log(words[3] + "," + words[0]);
//       console.log(words[2] + "," + words[0]);
//       console.log(words[1] + "," + words[0]);
//     }
//     if (words.length == 3) {
//       console.log(words[2] + "," + words[0]);
//       console.log(words[1] + "," + words[0]);
//     }
//     if (words.length == 2) {
//       console.log(words[1] + "," + words[0]);
//     }
//   });

// let steemdWrod = {};
// fs.readFileSync("asset/stemmedWord.csv")
//   .toString()
//   .split("\n")
//   .forEach((line) => {
//     if (line != undefined && "" != line.trim()) {
//       words = line.split(",");
//       steemdWrod[words[0].trim()] = words[1].trim();
//     }
//   });
// console.log(JSON.stringify(steemdWrod));
