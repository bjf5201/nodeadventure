'use strict';

let input = process.argv.slice(2);
input = input.map(num => parseInt(num));
let sum = 0;
const sumArgs = (num1, num2) => num1 + num2;

input.forEach(num => {
    sum = sumArgs(sum, num);
});

console.log(sum);
