// Day 2 exercise

// 1. Declare a variable name challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = "30 Days Of JavaScript ";

// 2. Print the string on the browser console using console.log()
console.log(challenge);

// 3. Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// 4. Change all the string to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// 5. Change all the string to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// 6. Cut(slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));
console.log(challenge.substring(0, 2));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substr(3, 18));

// 8. Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because = "You cannot end a sentence with because because because is a conjunction";
console.log(because.substr(31, 23));

// 9. Check if the string contains a word Script using includes() method
console.log(challenge.includes("Script"));

// 10. Split the string into array using split() method
console.log(because.split());

// 11. Split the string 30 Days Of JavaScript at the space using split() method
console.log(because.split(" "));

// 12. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let giants = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(giants.split(","));

// 13. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace("JavaScript", "Python"));
// 14. What is character at index 15 in '30 Days Of JavaScript' string use charAt() method.
console.log(challenge.charAt(15));
console.log(challenge.charAt(11));

// 15. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11));

// 16. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

// 17. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf("a"));

// 18. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.indexOf("because"));

// 19. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.lastIndexOf("because"));

// 20. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.search("because"));

// 21. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let space = " ";
console.log(space.concat("30 days of JavaScript"));
console.log(space.concat("30 days of JavaScript").trim());

// 22. Use startsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.startsWith("30"));

// 23. Use endsWith() method with the string 30 Days Of JavaScript make the result true
console.log(challenge.endsWith("JavaScript"));

// 24. Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/gi));

// 25. Use match() to count the number all because's in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(/because/gi));

// 26. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let days = "30 days of";
let js = "JavaScript";
console.log(days.concat(js));
console.log(days + space.concat(js));

// 27. Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

// 28. ** 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let love = "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(/love/gi).length, "times word 'love' appears in our string");

// 29. ** Calculate the total annual income of the person by extract the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// Extracting numbers from following sentence
let income = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let incomeNum = income.match(/\d+/g);
// Convert string numbers to integers
let newIncomeNum = incomeNum.map(function (x) {
  return parseInt(x, 10)
});
console.log(newIncomeNum);
// Sum of all numbers from array
console.log(newIncomeNum.reduce((a, b) => a + b, 0));

// 30. ** Clean the following text and find the most frequent word(hint, use replace and regular express).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching';
// Clean the sentence from symbols
let sentenceCleaned = sentence.replace(/[^a-zA-Z ]/g, "");
console.log(sentenceCleaned);
// Log every word and number of its appearance
let wordCounts = {};
let words = sentenceCleaned.split(" ");
for (let i = 0; i < words.length; i++) {
  wordCounts[words[i].toLowerCase()] = (wordCounts[words[i].toLowerCase()] || 0) + 1;
}
console.log(wordCounts);
let mostAppears = Object.keys(wordCounts).reduce((a, b) => wordCounts[a] > wordCounts[b] ? a : b);
// Finding the word with most appearances
console.log(mostAppears, "has most appearances");




