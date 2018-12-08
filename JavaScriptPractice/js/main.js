// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

var sideA = 5;
var sideB = 6;
var sideC = 7;

// herrons formula is area = square root of the semiperimeter times the semiperimeter minus each side

var semi = (sideA + sideB + sideC) / 2;

var area;

area = Math.sqrt(semi*((semi - sideA)*(semi - sideB)*(semi - sideC)));

console.log(area);


// find the angle between the hands of a clock at a specific time. I had this one in an interview but i want to try it in javascript now

// step one is convert the hour and minute into angles on a circle
// lets use 3:25
// 60 minutes in an hour 360 / 60 = 6 so every minutes is six degrees
// there are 360 degrees in a circle 12 hours on the clock. 360 / 12 
var hour = 3;
var minute = 25;
var minuteAngle = minute * 6;
var hourAngle = (hour * 30) + ((minute / 12) * 6);
var answerAngle = Math.abs(minuteAngle - hourAngle);
if (answerAngle > 180) {
    answerAngle -= 180
}
console.log(answerAngle);