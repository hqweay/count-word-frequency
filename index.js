const {
  wordcountfrequency,
  fromDir,
  fromUrl,
  fromFile,
  forWordCloud,
  forMomo,
  setFilterStemmedWords,
} = require("./wordFrequencyCounter");
const fs = require("fs");

// setFilterStemmedWords(false);
// setFilterStemmedWords(true);

let stringConfig = wordcountfrequency(
  "what's your name? and what is your name?"
);
let articleByDirConfig = fromDir("./article/");
let articleByFileConfig = fromFile("./article/b.txt");
let urlConfig = fromUrl("https://leay.net");
let appendConfig = fromFile("./article/c.txt");

// console.log(articleByFileConfig.join(appendConfig));
// console.log(forWordCloud(articleByFileConfig));
// console.log(forMomo(articleByFileConfig, 0, 3));

// count word frequency of web pages from a list of urls

// let lines = fs.readFileSync("bookmark/index.txt");
// lines
//   .toString()
//   .split("\n")
//   .forEach((line) => {
//     if (line != undefined && "" != line.trim()) {
//       urlConfig.join(fromUrl(line));
//     }
//   });
// fs.writeFileSync(
//   "./bookmark/result.txt",
//   forMomo(urlConfig, 900, 2000).toString()
// );

console.log(forMomo(appendConfig, 0, 2000));
