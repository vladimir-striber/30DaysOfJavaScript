// Day 3 exercise

// ///// 1. Exercises: Data types Part

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it
const firstName = "Vladimir";
const lastName = "Striber";
const age = 36;
const country = "Serbia";
const city = "Novi Sad";
const isMarried = true;
const year = new Date();
const now = year.getFullYear();

console.log(`My name is ${firstName} ${lastName}, I am ${age} years old, I live in ${city}, ${country} and if you ask me if I am married the answer is ${isMarried}. I would like to wish you everything best in ${now}.`);

// 2. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
console.log(`firstName (${firstName}) - `, typeof firstName);
console.log(`lastName (${lastName}) - `, typeof lastName);
console.log(`age (${age}) - `, typeof age);
console.log(`country (${country}) - `, typeof country);
console.log(`city (${city}) - `, typeof city);
console.log(`isMarried (${isMarried}) - `, typeof isMarried);
console.log(`year (${year}) - `, typeof year);
console.log(`now (${now}) - `, typeof now);

// 3. Check if type of '10' is equal to 10
const number10 = 10;
const string10 = "10";

console.log(typeof number10 === typeof string10);
console.log(number10 === string10);

// 4. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8" === 10));

// ///// 2. Exercises: Arithmetic Operators Part

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base", "Number goes here");
let height = prompt("Enter height", "Number goes here");

console.log(`area of the triangle - `, base * height / 2);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let side_a = prompt("Enter side a", "Enter side a");
let side_b = prompt("Enter side b", "Enter side b");
let side_c = prompt("Enter side c", "Enter side c");

console.log(`perimeter of the triangle - `, Number(side_a) + Number(side_b) + Number(side_c));
// the same as above (but strange though)
console.log(`perimeter of the triangle - `, +side_a + +side_b + +side_c);
