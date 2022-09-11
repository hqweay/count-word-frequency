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
fs.readFileSync("asset/backup/lemma.en.txt")
  .toString()
  .split("\n")
  .forEach((line) => {
    if (line != undefined && "" != line.trim() && line.includes("->")) {
      // console.log(line);
      words = line.split("->");
      originWord = words[0].split("/")[0].trim();
      words[1].split(",").forEach((newWord) => {
        newWord = newWord.trim();
        if (!steemdWrod[newWord]) {
          steemdWrod[newWord] = [originWord];
        } else {
          if (steemdWrod[newWord].includes(originWord)) {
          } else {
            steemdWrod[newWord].push(originWord);
          }
        }
      });
    }
  });

console.log(JSON.stringify(steemdWrod));
// console.log(JSON.parse(fs.readFileSync("asset/stemmedWords.json").toString()));
