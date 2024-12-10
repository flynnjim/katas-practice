/*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] =>  ['racecar', 'tacocat']
*/
function getPalindromes(words) {
  const reverseWords = [];
  const onlyPalindromes = [];
  if (words.length === 0) {
    return [];
  }
  words.forEach((word) => {
    let reverseSingleWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseSingleWord += word[i];
    }
    reverseWords.push(reverseSingleWord);
  });
  words.forEach((word, index) => {
    if (word === reverseWords[index]) {
      onlyPalindromes.push(word);
    }
  });

  return onlyPalindromes;
}

module.exports = getPalindromes;
