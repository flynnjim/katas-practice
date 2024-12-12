/*
convertToBinary()


Implement a function which takes any decimal number and converts it into binary format.
The return value of the function should always be a string of "O"s and "1"s representing the binary number

Do not use .toString(2) for this problem - as this is the functionality you're trying to replicate :)
*/

// Once you have passed the current test, change skipTest on the following test to runTest so you are able to run it with Node

function convertToBinary(decimal) {
  const binaryArray = ["0"];

  // while loop to keep adding deimal one at a time
  while (decimal > 0) {
    // finds the first 0 in reverse order
    for (let i = binaryArray.length - 1; i >= 0; i--) {
      let AddedOne = false;
      let addedOneIndex;

      if (binaryArray[i] === "0") {
        binaryArray[i] = "1";

        AddedOne = true;
        addedOneIndex = i;
      } else if (binaryArray[i] === "1" && i === 0) {
        binaryArray.unshift("1");

        AddedOne = true;
        addedOneIndex = i;
      }
      if (AddedOne) {
        for (let i = addedOneIndex + 1; i < binaryArray.length; i++) {
          binaryArray[i] = "0";
        }

        break;
      }
    }
    decimal -= 1;
  }

  return binaryArray.join("");
}

module.exports = convertToBinary;
