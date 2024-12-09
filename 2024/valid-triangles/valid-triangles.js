function validTriangles(triangles) {
  /*
  This function takes an array of triangles.
  Each triangle is represented as an array e.g. [10, 12, 22] where the three numbers are the sides of the triangle.
  The function should return the count of triangles that are valid.
  To be a valid triangle, the sum of any two sides must be larger than the remaining side
    */
  if (triangles.length === 0) {
    return 0;
  }
  let currentValidTriangles = 0;

  triangles.forEach((triangle) => {
    const totalLengthSum = triangle.reduce((acc, cur) => {
      return acc + cur;
    }, 0);

    let trueTriangle = true;
    triangle.forEach((side) => {
      const twoSideLength = totalLengthSum - side;

      if (twoSideLength < side) {
        trueTriangle = false;
      }
    });
    if (trueTriangle) {
      currentValidTriangles++;
    }
  });
  return currentValidTriangles;
}

module.exports = validTriangles;
