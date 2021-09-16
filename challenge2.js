// Course: JavaScript Fundamentals - Part 1
// Coding Challenge #2
// Completed by: Tay
// Date: September 16, 2021

// Declaring Variables
let marksMass;
let marksHeight;

let johnsMass;
let johnsHeight;

let markHigherBMI;

// Assigning Variables
marksMass = 95; //kg
marksHeight = 1.88; //meters
johnsMass = 85;//kg
johnsHeight = 1.76//meters

// computing
let marksBMI = marksMass / (marksHeight * 2);
console.log(marksBMI);
let johnsBMI = johnsMass / (johnsHeight * 2);
console.log(johnsBMI);

//if/else
if (marksBMI > johnsBMI) markHigherBMI = true;
else markHigherBMI = false;

if (markHigherBMI = true) {
    console.log("Mark's BMI (" + marksBMI + ") is higher than John's (" + johnsBMI + ")!");
}
else {
    console.log("John's BMI (" + johnsBMI + ") is higher than Mark's (" + marksBMI + ")!");
}