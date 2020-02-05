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

const myAge = prompt("Enter your age:");
const yourAge = 25;
const ageDiff = Math.abs(myAge - yourAge);

if (myAge < yourAge && ageDiff === 1) {
  console.log(`You are ${ageDiff} year older then me!`);
} else if (myAge < yourAge && ageDiff > 1) {
  console.log(`You are ${ageDiff} years older then me!`);
} else if (myAge > yourAge && ageDiff === 1) {
  console.log(`You are ${ageDiff} year younger then me`);
} else {
  console.log(`You are ${ageDiff} years younger then me!`);
}







