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
const assert = require("assert");

// setFilterStemmedWords(false);
// setFilterStemmedWords(true);

let stringConfig = wordcountfrequency(
  "what's your name? and what is your name?"
);
let articleByDirConfig = fromDir("./article/");
let articleByFileConfig = fromFile("./article/b.txt");
let urlConfig = fromUrl("https://leay.net");
let appendConfig = fromFile("./article/c.txt");

// 测试单词还原为原型是否成功
assert.equal(forMomo(appendConfig, 0, 2000), "hello\r\nkid\r\nleave\r\nleaf");
