// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Built creating my own bubble sort algorithm

function flattenAndSort(array) {
  const flatArray = array.flat(Infinity);
  let finishSort = false;
  while (!finishSort) {
    finishSort = true;
    for (let i = 0; i < flatArray.length - 1; i++) {
      const curNum = flatArray[i];
      const nextNum = flatArray[i + 1];
      if (nextNum < curNum) {
        finishSort = false;
        flatArray[i] = nextNum;
        flatArray[i + 1] = curNum;
      }
    }
  }
  return flatArray;
}
