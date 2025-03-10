/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string) {
  const regex = /[a-zA-Z]/;
  const stringArray = string.split("");
  const alphabetArray = [];
  stringArray.forEach((letter) => {
    const lowerCaseLetter = letter.toLowerCase();
    if (letter.match(regex) && !alphabetArray.includes(lowerCaseLetter)) {
      alphabetArray.push(lowerCaseLetter);
    }
  });
  return alphabetArray.length === 26;
}
