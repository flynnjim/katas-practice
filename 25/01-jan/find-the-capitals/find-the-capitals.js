/*
nstructions
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

Example (Input --> Output)
"CodEWaRs" --> [0,3,4,6]
*/
var capitals = function (word) {
  const capitals = [];
  word.split("").forEach((char, i) => {
    if (char.toUpperCase() === char) {
      capitals.push(i);
    }
  });
  return capitals;
};
