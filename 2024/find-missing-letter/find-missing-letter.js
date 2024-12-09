function findMissingLetter(letters) {
  /*
  In this function, you need to find out which letter is missing. But you can't use a reference lookup table (i.e. no array or object with the whole alphabet in it) so you will have think outside the box!
  
  This function needs to take a list and needs to return the letter it is missing.
  
  You will always get a sorted array of consecutive letters, and it will always have exactly one letter missing. The length of the array will always be at least 2. The array will always contain letters in only one case.
    */
  let returnString = "";

  letters.forEach((letter, index) => {
    const thisLetterCode = letter.charCodeAt();

    if (index < letters.length - 1) {
      const nextLetter = letters[index + 1].charCodeAt();

      if (!(thisLetterCode + 1 === nextLetter)) {
        console.log(letter);

        returnString = String.fromCharCode(thisLetterCode + 1);
      }
    }
  });
  return returnString;
}

module.exports = findMissingLetter;
