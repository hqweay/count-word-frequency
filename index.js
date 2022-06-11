const {
  wordcountfrequency,
  fromDir,
  fromUrl,
  fromFile,
  forWordCloud,
  forMomo,
} = require("./wordFrequencyCounter");

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
const fs = require("fs");
let lines = fs.readFileSync("bookmark/index.txt");
lines
  .toString()
  .split("\n")
  .forEach((line) => {
    urlConfig.join(fromUrl(line));
  });

// console.log(urlConfig);
