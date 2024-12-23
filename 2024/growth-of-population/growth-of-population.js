/*
p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/

function nbYear(p0, percent, aug, p) {
  let numYears = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 * (1 + percent / 100) + aug);
    numYears++;
  }
  return numYears;
}
