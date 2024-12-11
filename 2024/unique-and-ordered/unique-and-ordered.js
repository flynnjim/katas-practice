/*
Implement a function which takes as an argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

The function should be able to to work with both strings and arrays, and should return an array.
*/
function uniqueAndOrdered(inputSequence) {
  let sequence;
  if (typeof inputSequence !== "object") {
    sequence = inputSequence.split("");
  } else {
    sequence = inputSequence;
  }
  const uniqueOrderedArray = [];
  if (sequence.length <= 1) {
    return sequence;
  }
  sequence.forEach((element, index) => {
    const previousElement = uniqueOrderedArray[uniqueOrderedArray.length - 1];

    if (index === 0) {
      uniqueOrderedArray.push(element);
    } else if (element !== previousElement) {
      uniqueOrderedArray.push(element);
    }
  });
  return uniqueOrderedArray;
}

module.exports = uniqueAndOrdered;
