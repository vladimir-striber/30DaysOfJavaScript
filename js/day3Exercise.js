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

// 2. Check if type of '10' is equal to 10
const number10 = 10;
const string10 = "10";

console.log(typeof number10 === typeof string10);
console.log(number10 === string10);

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt("9.8" === 10));

// 4. Boolean value is either true or false.
// a) Write three JavaScript statement which provide truthy value.
// b) Write three JavaScript statement which provide falsy value.
let number1 = 1;
let string1 = "1";
console.log(number1 === string1, "number1 == string1");
console.log(null === 0, "null === 0");

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// I.    4 > 3     true
// II.   4 >= 3    true
// III.  4 < 3     false
// IV.   4 <= 3    false
// V.    4 == 4    true
// VI.   4 === 4   true
// VII.  4 != 4    false
// VIII. 4 !== 4   false
// IX.   4 != '4'  false
// X.    4 == '4'  true
// XI.   4 === '4' false
// XII.  Find the length of python and jargon and make a falsy comparison statement.
console.log("4 > 3", 4 > 3);
console.log("4 >= 3", 4 >= 3);
console.log("4 < 3", 4 < 3);
console.log("4 <= 3", 4 <= 3);
console.log("4 == 4", 4 == 4);
console.log("4 === 4", 4 === 4);
console.log("4 != 4", 4 != 4);
console.log("4 !== 4", 4 !== 4);
console.log("4 != '4'", 4 != '4');
console.log("4 == '4'", 4 == '4');
console.log("4 === '4'", 4 === '4');
const python = "python";
const jargon = "jargon";
console.log("python === jargon", python.length !== jargon.length );

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// I.    4 > 3 && 10 < 12     true
// II.   4 > 3 && 10 > 12     false
// III.  4 > 3 || 10 < 12     true
// IV.   4 > 3 || 10 > 12     true
// V.    !(4 > 3)             false
// VI.   !(4 < 3)             true
// VII.  !(false)             true
// VIII. !(4 > 3 && 10 < 12)  false
// IX.   !(4 > 3 && 10 > 12)  true
// X.    !(4 === '4')         true
// XI.   There is no 'on' in both dragon and python   false
console.log(" I.    4 > 3 && 10 < 12", 4 > 3 && 10 < 12);
console.log("II.   4 > 3 && 10 > 12", 4 > 3 && 10 > 12);
console.log("III.  4 > 3 || 10 < 12", 4 > 3 || 10 < 12);
console.log("IV.   4 > 3 || 10 > 12", 4 > 3 || 10 > 12);
console.log("V.    !(4 > 3)", !(4 > 3));
console.log("VI.   !(4 < 3)", !(4 < 3));
console.log("VII.  !(false)", !(false));
console.log("VIII. !(4 > 3 && 10 < 12)", !(4 > 3 && 10 < 12));
console.log("IX.   !(4 > 3 && 10 > 12)", !(4 > 3 && 10 > 12));
console.log("X.    !(4 === '4')", !(4 === '4'));

// 7. Use the Date object to do the following activities:
// I. What is the year today?
// II. What is the month today as a number?
// III. What is the date today?
// IV. What is the day today as a number?
// V. What is the hours now?
// VI. What is the minutes now?
// VII. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const myDate = new Date();
console.log("I. What is the year today?", myDate.getFullYear());
console.log("II. What is the month today as a number?", myDate.getMonth());
console.log(" III. What is the date today?", myDate);
console.log("IV. What is the day today as a number?", myDate.getDate());
console.log("V. What is the hours now?", myDate.getHours());
console.log("// VII. Find out the numbers of seconds elapsed from January 1, 1970 to now.\n", myDate.getTime());

// 2. The JavaScript typeof operator uses to check different data types. Check the data type of each variables from question number 1.
console.log(`firstName (${firstName}) - `, typeof firstName);
console.log(`lastName (${lastName}) - `, typeof lastName);
console.log(`age (${age}) - `, typeof age);
console.log(`country (${country}) - `, typeof country);
console.log(`city (${city}) - `, typeof city);
console.log(`isMarried (${isMarried}) - `, typeof isMarried);
console.log(`year (${year}) - `, typeof year);
console.log(`now (${now}) - `, typeof now);





// ///// 2. Exercises: Arithmetic Operators Part

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter base", "Number goes here");
// let height = prompt("Enter height", "Number goes here");

// console.log(`area of the triangle - `, base * height / 2);

// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let side_a = prompt("Enter side a", "Enter side a");
// let side_b = prompt("Enter side b", "Enter side b");
// let side_c = prompt("Enter side c", "Enter side c");

// console.log(`perimeter of the triangle - `, Number(side_a) + Number(side_b) + Number(side_c));
// when we work with addition we need to use Number() or +{{variable}} because we would get the string (eg. 2345 instead of 2 + 3 + 4 + 5 = 14)
// if we work with multiply then we don't have to use these methods
// the same as above (but strange though)
// console.log(`perimeter of the triangle - `, +side_a + +side_b + +side_c);

// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let side_a = prompt("Enter side a", "Side a");
// let side_b = prompt("Enter side b", "Side b");
// console.log("The area of a triangle is: ", side_a * side_b);

// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const radius = prompt("Enter radius", "radius");
// console.log(radius**2*3.14, "area");
// console.log(radius*2*3.14, "circumference");

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = Math.floor(Math.random() * 11);
let y = 2*x - 2;
console.log(`x - ${x}, y - ${y}`);

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;
const m = y2 - y1 / x2 - x1;
console.log(m);

// 7. Compare the slope of above two questions.

// 8. Calculate the value of y (w = z^2 + 6x + 9). Try to use different x values and figure out at what z value w is 0.
let z;
let w;
z = -3;
w = z**2 + 6*z + 9;
console.log(`w is ${w}`);