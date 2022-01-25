let random = {};

// Give randomly integers
function randomly(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

let match = randomly(80, 120);
let triangle = randomly(3, 10);
let square = randomly(5, 10);
let x = randomly(4, 10);
let circle = randomly(1, 10);

random = {
  match: match,
  triangle: triangle,
  square: square,
  x: x,
  circle: circle,
};

export { random };
