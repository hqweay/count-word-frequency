const {
  wordcountfrequency,
  fromDir,
  fromUrl,
  fromFile,
  forWordCloud,
  forMomo,
  setFilterStemmedWords,
  getLemma
} = require("./wordFrequencyCounter");
const fs = require("fs");

// setFilterStemmedWords(false);
// setFilterStemmedWords(true);

let stringConfig = wordcountfrequency(
  "what's your name? and what is your name?"
);
let articleByDirConfig = fromDir("./article/");
let articleByFileConfig = fromFile("./article/b.txt");
// let urlConfig = fromUrl(
//   "https://waitbutwhy.com/2014/06/taming-mammoth-let-peoples-opinions-run-life.html"
// );
let urlConfig = wordcountfrequency("");
let appendConfig = fromFile("./article/c.txt");

// console.log(articleByFileConfig.join(appendConfig));
// console.log(forWordCloud(articleByFileConfig));
// console.log(forMomo(articleByFileConfig, 0, 3));

// count word frequency of web pages from a list of urls

let lines = fs.readFileSync("bookmark/paulgraham.txt");
lines
  .toString()
  .split("\n")
  .forEach((line) => {
    if (line != undefined && "" != line.trim()) {
      urlConfig.join(fromUrl(line.trim()));
    }
  });
fs.writeFileSync(
  "./bookmark/result_paulgraham.json",
  // forMomo(urlConfig, 900, 2000).toString()
  // JSON.stringify(forWordCloud(urlConfig))
  JSON.stringify(urlConfig)
);

fs.writeFileSync(
  "./bookmark/result_momo_paulgraham.txt",
  // forMomo(urlConfig, 900, 2000).toString()
  forMomo(urlConfig)
);

// fs.writeFileSync(
//   "asset/read/01.txt",
//   "# " + urlConfig["origin"] + "\r\n" + forMomo(urlConfig, 0, 2000).toString()
// );

// console.log(forWordCloud(urlConfig));

// console.log(getLemma("worse"));