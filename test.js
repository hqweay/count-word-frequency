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

let stringConfig = wordcountfrequency(
  "what's your name? and what is your name?"
);

let example01 = fromFile("article/test/example01.txt");

// 测试单词还原为原型是否成功
assert.equal(forMomo(example01), "hello\r\nkid\r\nleave\r\nleaf");

// 测试单词不还原为原型
setFilterStemmedWords(false);
example01 = fromFile("article/test/example01.txt");
assert.equal(forMomo(example01), "hello\r\nkidding\r\nkids\r\nleaves");
