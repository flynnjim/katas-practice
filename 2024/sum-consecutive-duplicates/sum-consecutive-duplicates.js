/*

The challenge is to implement a function which adds together all the consecutive numbers in an array and pushes them into a new array.

Examples:
You can use these examples to start building up your test suite:

    sumConsecutiveDuplicates([1, 2, 3]);  // returns [1, 2, 3]

    sumConsecutiveDuplicates([1, 1, 2, 3]);  // returns [2, 2, 3]

    sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3]);  // returns [2, 4, 6]

    sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);  // returns [2, 2, 4, 2, 3]


*/

const sumConsecutiveDuplicates = (arr) => {
  const newArray = [];
  arr.forEach((element, index) => {
    if (index === 0) {
      newArray.push(element);
    } else if (element === arr[index - 1]) {
      newArray[newArray.length - 1] += element;
    } else {
      newArray.push(element);
    }
  });
  let noMoreConsecutiveDoubles = true;
  newArray.forEach((num, index) => {
    if (num === newArray[index - 1]) {
      noMoreConsecutiveDoubles = false;
    }
  });

  if (noMoreConsecutiveDoubles) {
    return newArray;
  } else {
    return sumConsecutiveDuplicates(newArray);
  }
};

module.exports = { sumConsecutiveDuplicates };
