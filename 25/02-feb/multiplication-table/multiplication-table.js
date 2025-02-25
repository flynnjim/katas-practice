// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable = function (size) {
  const initialRow = [];
  const wholeTable = [];
  for (let i = 1; i <= size; i++) {
    initialRow.push(i);
  }
  wholeTable.push(initialRow);
  for (let i = 2; i <= size; i++) {
    const nextLine = [i];
    for (let j = 2; j <= size; j++) {
      const nextNum = nextLine[0] * initialRow[j - 1];
      nextLine.push(nextNum);
    }
    wholeTable.push(nextLine);
  }
  return wholeTable;
};
