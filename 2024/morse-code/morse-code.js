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

module.exports = morseCode;
