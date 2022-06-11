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
let appendConfig = fromFile("./article/c.txt");

console.log(articleByFileConfig.join(appendConfig));
console.log(forWordCloud(articleByFileConfig));
console.log(forMomo(articleByFileConfig));

// fromUrl("https://leay.net").then((urlConfig) => {
//   console.log(urlConfig);
// });
