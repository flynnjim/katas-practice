const morseCodeReverse = require("./convert-from-morse-code");

function morseCode(originalString) {
  const splitWords = originalString.split("  ");
  const convertedWords = splitWords.map((str) => {
    const splitWord = str.split(" ");
    const englishWord = splitWord.map((code) => {
      return morseCodeReverse[code];
    });
    return englishWord.join("");
  });

  return convertedWords.join(" ");
}

function englishToMorse(str) {
  const splitSentence = str.split(" ");
  const sentenceConverted = splitSentence.map((word) => {
    const splitStr = word.split("");
    const wholeWordMorse = splitStr.map((char) => {
      function findKey(char) {
        const morseKeys = Object.keys(morseCodeReverse);
        return morseKeys.find((key) => morseCodeReverse[key] === char);
      }
      morseCodeCalculated = findKey(char);

      return morseCodeCalculated;
    });
    return wholeWordMorse.join(" ");
  });

  return sentenceConverted.join("   ");
}

module.exports = { morseCode, englishToMorse };
