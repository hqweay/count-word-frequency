Counting english word frequency from string, file, dir and url. Result like :

```plaintext
{
  total: 19,
  words: [ 'hello', 'cool' ],
  wordCounts: { cool: 8, hello: 11 }
}
```

- total: the number of deduplicated words
- words: an array of the sorted deduplicated words
- wordCounts: the word frequency

## API

- `setFilterStemmedWords(boolean)`

  - controls whether to convert words into prototypes and then count word frequencies

- `wordcountfrequency()`

- `fromDir()`

- `fromUrl()`

- `fromFile()`

- `forWordCloud()`

  - // Return value example
    
    ```json
    [
      ["hello", 11],
      ["cool", 8]
    ]
    ```

- `forMomo(config, start, end)`

  - ```javascript
    const {fromFile} = require("./wordFrequencyCounter");
    let articleByFileConfig = fromFile("./article/b.txt");
    console.log(forMomo(articleByFileConfig, 0, 3));// return the top 3 words by frequency
    console.log(forMomo(articleByFileConfig));// return all words
    ```

  - // Return value example；To import into the Momo App(墨墨背单词).

    ```plaintext l
    abandon
    hello
    ```


## example

```JavaScript
const {
  wordcountfrequency,
  fromDir,
  fromUrl,
  fromFile,
  forWordCloud,
  forMomo,
} = require("./wordFrequencyCounter");

setFilterStemmedWords(true); //controls whether to convert words into prototypes and then count word frequencies

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

console.log(urlConfig);
```

## one more thing

- `asset/stemmedWords.json`：A simple corpus of word prototypes

```javascript
console.log(stemmedWords["redone"]) 
// output redo
```

## thanks

- [angus-c/wordy: An embedded word frequency util](https://github.com/angus-c/wordy)
- [python-chinese\] 如何得到单词的原形？](https://groups.google.com/g/python-cn/c/2iqdCcdaG64)
- [DataCluster/wordmark: 一个单词的不同形式划为原型的对照表](https://github.com/DataCluster/wordmark)
