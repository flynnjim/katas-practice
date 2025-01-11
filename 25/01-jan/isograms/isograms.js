/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

*/
function isIsogram(str) {
  const strArray = [];
  let isIsogram = true;
  str.split("").forEach((letter) => {
    const lowerCaseLetter = letter.toLowerCase();
    if (strArray.includes(lowerCaseLetter)) {
      isIsogram = false;
    }
    strArray.push(lowerCaseLetter);
  });
  return isIsogram;
}
