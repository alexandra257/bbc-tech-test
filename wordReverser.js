class WordReverser {
  reverseWords(str) {
    let wordArray = str.split(" ");
    let reversedWords = "";

    wordArray.forEach((word) => {
      if (!this.isValidWord(word)) {
        throw Error("All characters must be lowercase");
      } else {
        let reversedWord = word.split("").reverse().join("");
        reversedWords += ` ${reversedWord}`;
      }
    });
    return reversedWords.substring(1);
  }

  isValidWord(word) {
    return word.match(/^[a-z]+$/);
  }
}

const wordReverser = new WordReverser();

module.exports = wordReverser;
