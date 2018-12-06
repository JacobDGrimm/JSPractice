// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

var sideA = 5;
var sideB = 6;
var sideC = 7;

// herrons formula is area = square root of the semiperimeter times the semiperimeter minus each side

var semi = (sideA + sideB + sideC) / 2;

var area;

area = Math.sqrt(semi*((semi - sideA)*(semi - sideB)*(semi - sideC)));

console.log(area);