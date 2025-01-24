/*
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
*/
function positiveSum(arr) {
  return arr.reduce((a, b) => (b > 0 ? a + b : a), 0);
}
