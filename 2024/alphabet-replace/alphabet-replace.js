function alphabetReplace(string) {
  /*
  This function that accepts a string of any length, and replaces each letter within each word with the corresponding index that that letter has in the alphabet.
  
  You must have a space between each index number, and do NOT need to account extra for spaces between words.
    */
  const noSpacesString = string.split(" ").join("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let indexString = "";
  for (let i = 0; i < noSpacesString.length; i++) {
    indexString += alphabet.indexOf(noSpacesString[i].toLowerCase()) + 1 + " ";
  }
  return indexString.trim();
}

module.exports = alphabetReplace;
