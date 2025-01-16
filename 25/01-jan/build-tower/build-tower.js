/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

*/
function towerBuilder(nFloors) {
  const numFloorStars = nFloors * 2 - 1;
  const tower = [];
  for (let i = 1; i <= numFloorStars; i += 2) {
    let str = "";
    str += " ".repeat((numFloorStars - i) / 2);
    str += "*".repeat(i);
    str += " ".repeat((numFloorStars - i) / 2);
    tower.push(str);
  }
  return tower;
}
