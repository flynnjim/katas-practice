/*

simplifyDirections
The challenge is to implement a function that takes an array of directions and simplifies them. Directions can be simplified if any two directions cause the person to end up in the same place. For example, the directions ["NORTH", "SOUTH"] cancel one another out and the function should return an empty array of no directions [].

Examples
Here are some examples to help you build out your test suite:

simplifyDirections(["NORTH", "SOUTH", "WEST"])
    --> ["WEST"]
simplifyDirections(["NORTH", "WEST", "SOUTH", "WEST", "EAST"])
    --> ["WEST"]
simplifyDirections(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"])
    --> ["NORTH", "NORTH"]

*/

const simplifyDirections = (directions) => {
  let newDirections = directions.slice();

  const removeOpposites = (directions, dir1, dir2) => {
    while (directions.includes(dir1) && directions.includes(dir2)) {
      const index1 = directions.indexOf(dir1);
      directions.splice(index1, 1);
      const index2 = directions.indexOf(dir2);
      directions.splice(index2, 1);
    }
  };
  removeOpposites(newDirections, "EAST", "WEST");
  removeOpposites(newDirections, "NORTH", "SOUTH");
  return newDirections;
};

module.exports = { simplifyDirections };
