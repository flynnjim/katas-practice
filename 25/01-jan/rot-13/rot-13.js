/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const newShiftArray = [];

  const stringArray = message.split("");
  const shiftedLetters = stringArray.map((char) => {
    const regex = /[a-zA-Z]/;
    if (regex.test(char)) {
      const isCapitalised = char === char.toUpperCase();
      const currentIndex = alphabet.indexOf(char.toLowerCase());
      const shiftThirteenIndex = (currentIndex + 13) % 26;
      const pushValue = isCapitalised
        ? alphabet[shiftThirteenIndex].toUpperCase()
        : alphabet[shiftThirteenIndex];
      newShiftArray.push(pushValue);
    } else {
      newShiftArray.push(char);
    }
  });
  return newShiftArray.join("");
}
