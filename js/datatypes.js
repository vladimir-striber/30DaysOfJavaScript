// Data types

const petsName = "Piggy";

const petsAge = 35;

const isSilly = true;

let thisIsUndefined;

let thisIsNull = null;

let thisIsArray = [1, 2, 3];


console.log(typeof petsName);
console.log(typeof petsAge);
console.log(typeof isSilly);
console.log(typeof thisIsUndefined);
console.log(typeof thisIsNull);
console.log(typeof thisIsArray);

let test;

test = "Moje ime";
// test = "Tvoje ime";

console.log(test.startsWith("Moj"));

console.log(test);

let randNum = Math.ceil(Math.random() * 9);
console.log(randNum);

let a = Math.ceil(Math.random() * 9);
let b = Math.ceil(Math.random() * 9);

console.log(`If a is bigger than 5 it is ${ a > 5 }`);

// Convert string to numbers

let stringNumber = "4.4";

console.log(parseFloat(stringNumber));