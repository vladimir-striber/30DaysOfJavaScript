// Day 4 exercise

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:You are old enough to drive but if not 18 give feedback to wait for the years he supposed to wait for.
// Enter your age: 30
// You are old enough to drive.
// Enter your age:15
// You are left with 3 years to drive.

// const isOldEnough = prompt("Enter your age:");
// const diffFrom18 = 18 - isOldEnough;
// if (isOldEnough >= 18) {
//   console.log("You are old enough to drive ;)");
// } else {
//   console.log(`You are going to be able to drive in ${diffFrom18} years :(`);
// }

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison log to console who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// Enter your age: 30
// You are 5 years older than me.

// const myAge = prompt("Enter your age:");
// const yourAge = 25;
// const ageDiff = Math.abs(myAge - yourAge);
//
// if (myAge < yourAge && ageDiff === 1) {
//   console.log(`You are ${ageDiff} year older then me!`);
// } else if (myAge < yourAge && ageDiff > 1) {
//   console.log(`You are ${ageDiff} years older then me!`);
// } else if (myAge > yourAge && ageDiff === 1) {
//   console.log(`You are ${ageDiff} year younger then me`);
// } else {
//   console.log(`You are ${ageDiff} years younger then me!`);
// }

// 4. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways
// * using if else
// * ternary operator.
// let a = 4;
// let b = 5;
// if (a > b) {
//   console.log(`a is greater than b`);
// } else {
//   console.log(`a is less than b`);
// }

// 5. Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?
// const numberInput = prompt("enter number");
// if (numberInput % 2 === 0) {
//   console.log("number is even");
// } else {
//   console.log("number is odd");
// }

// Exercises: Level 2
//
//  1. Write a code which can give grade to students according to theirs scores:
// *80-100, A
// *70-89, B
// *60-69, C
// *50-59, D
// *0-49, F
// let score = prompt("Enter your score");
// if (score <= 49) {
//   console.log("Your grade is F");
// } else if (score > 49 && score <= 59) {
//   console.log("Your grade is D");
// } else if (score > 60 && score <= 69) {
//   console.log("Your grade is C");
// } else if (score > 70 && score <= 79) {
//   console.log("Your grade is B");
// } else {
//   console.log("Your grade is A");
// }

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is://
//     September, October or November, the season is Autumn.
//     December, January or February, the season is Winter.
//     March, April or May, the season is Spring
//     June, July or August, the season is Summer

// let month = prompt("Enter the month");
// if (
//   month.toLowerCase() === 'september' ||
//   month.toLowerCase() === 'october' ||
//   month.toLowerCase() === 'november'
// ) {
//   console.log("It is autumn");
// } else if (
//   month.toLowerCase() === 'december' ||
//   month.toLowerCase() === 'january' ||
//   month.toLowerCase() === 'february'
// ) {
//   console.log("It is winter");
// } else if (
//   month.toLowerCase() === 'march' ||
//   month.toLowerCase() === 'april' ||
//   month.toLowerCase() === 'may'
// ) {
//   console.log("It is spring");
// } else if (
//   month.toLowerCase() === 'jun' ||
//   month.toLowerCase() === 'july' ||
//   month.toLowerCase() === 'avgust'
// ) {
//   console.log("It is summer");
// }

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
const weekDay = prompt("Enter weekday");
if (weekDay.toLowerCase() === "saturday") {
  console.log("It's weekend :D");
} else if (weekDay.toLowerCase() === "sunday") {
  console.log("It's weekend :D");
} else {
  console.log("It's working day :(");
}

// Exercises: Level 3

// 1. Write a program which tells the number days in a month.
const monthAgain = prompt("Enter the month");
if (monthAgain.toLowerCase() === "february") {
  console.log("February has 28 days");
}








