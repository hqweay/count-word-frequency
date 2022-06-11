Counting english word frequency from string, file, dir and url. Result like :

```json
{
  total: 19,
  words: [ 'hello', 'cool' ], // sorted words
  wordCounts: { cool: 8, hello: 11 },
  join: [Function: join]
}
```

## API

- `wordcountfrequency()`

- `fromDir()`

- `fromUrl()`

- `fromFile()`

- `forWordCloud()`

  - ```json
    // Return value example
    [ [ 'hello', 11 ], [ 'cool', 8 ] ]
    ```

- `forMomo()`

  - ```json
    // Return value example
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
```

## thanks

- [angus-c/wordy: An embedded word frequency util](https://github.com/angus-c/wordy)

