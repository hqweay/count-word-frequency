const fs = require("fs");
// fs.readFileSync("asset/backup/Irregular(已经删除重复单词).txt")
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

let steemdWrod = {};
fs.readFileSync("asset/backup/Irregular+mark.csv")
  .toString()
  .split("\n")
  .forEach((line) => {
    if (line != undefined && "" != line.trim()) {
      words = line.split(",");
      // if (steemdWrod[words[0].trim()] == undefined) {
      // steemdWrod[words[0].trim()] = words[1].trim();
      // } else {
      if (!steemdWrod[words[0].trim()]) {
        steemdWrod[words[0].trim()] = [words[1].trim()];
      } else {
        if (steemdWrod[words[0].trim()].includes(words[1].trim())) {
          // console.log(words[0].trim() + "," + words[1].trim());
        } else {
          steemdWrod[words[0].trim()].push(words[1].trim());
        }
      }

      // }
    }
  });

console.log(JSON.stringify(steemdWrod));
// console.log(JSON.parse(fs.readFileSync("asset/stemmedWords.json").toString()));
