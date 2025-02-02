/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.


*/
function count(string) {
  const stringArray = string.split("");
  const returnOb = {};
  for (let i = 0; i < stringArray.length; i++) {
    const currentValue = stringArray[i];
    if (!returnOb[currentValue]) {
      returnOb[currentValue] = 1;
    } else {
      returnOb[currentValue] += 1;
    }
  }
  return returnOb;
}
