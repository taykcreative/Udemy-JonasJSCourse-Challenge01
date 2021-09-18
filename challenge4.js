// Course: JavaScript Fundamentals - Part 1
// Coding Challenge #4
// Completed by: Tay
// Date: September 18, 2021


// declare variables
let tip;
let bill = 430;

tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`)

