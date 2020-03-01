//javascript
/* 1.   write a loop that counts from 0 to 100 and logs the current number to the console */
// code here
/* 2.   define a function that counts from 0 to 100 if called */
// function counter() {}

function counter() {
  let counter = 0;
  for (let i = 0; i < 100; i++) {
    counter++;
  }
  return counter;
}
// code here
/* 3.   define a function that counts from 0 to whatever value you passed to it, call this function with 3 different arguments */
// code here

function countFunction(num) {
  let currNumber = 0;
  for (let i = 0; i < num.length; i++) {
    currNumber++;
  }
  return currNumber;
}

countFunction(55);
/* 4.   given this array: var arrayWords = ["cow", "chicken", "dog", "cat"] console log every element using a loop */
// code here
var arrayWords = ['cow', 'chicken', 'dog', 'cat'];

/* 5.   define a function that logs every elements of the arrayWords variable. Call this function. */
// code here
function animals(arr) {
  let words = [];
  for (let i = 0; i < arr.length; i++) {
    // words += arr[i];
    console.log(arr[i]);
    words.push(arr[i]);
  }
  console.log(words);
}

animals(arrayWords);

/* 6.   define a function that logs all words of any array with words you pass to it. Declare two of those arrays. */
// code here
let mixedArr = [
  'The',
  2,
  'Quick',
  4,
  'Brown',
  6,
  'Fox',
  8,
  'Jumps',
  10,
  'Over',
  'The',
  'Lazy',
  'Log',
];
let mixedArrTwo = [
  'The',
  1,
  'Rain',
  3,
  'In',
  5,
  'Spain',
  7,
  'Cow',
  'Falls',
  9,
  'Mainly',
  'On',
  'The',
  'Plain',
];

function arrayLog(arr) {
  let words = [];
  arr.forEach(item => {
    if (typeof item === 'string') {
      words.push(item);
      console.log(words);
    }
  });
  return words;
}
arrayLog(mixedArr);

/* 7.   define a function that logs all words of any array with words you pass to it, except when the word is "cow" (use a conditional). Declare two of those arrays and call the function on them */
// code here
function stringFilter(arr) {
  let nonBovine = [];
  arr.forEach(item => {
    if (typeof item === 'string' && item !== 'Cow') {
      nonBovine.push(item);
    }
  });
  return nonBovine;
}

stringFilter(mixedArrTwo);

/* 8. given this array print out all names. The output should be: */
/*Mittens
Doge
Mickey
Chip
Dale
*/
var myPets = ['Mittens', 'Doge', 'Mickey', 'Chip', 'Dale'];
let petName = '';
function pets(arr) {
  arr.forEach(pet => {
    petName += pet + ' ';
  });
  return petName;
}

console.log(pets);

//write code here
/* 9. print out only the even names. The output should be: 
Mittens
Mickey
Dale
*/
//Hint: use an if-statement to check if you have an odd number, and use the modulo operator like in FizzBuzz
//write code here
var myCollections = [
  ['ball', 'tennis racket', 'boxing glove'],
  ['pants', 't-shirt', 'shoes'],
  ['guitar', 'piano', 'mandolin'],
];
/* 10. Bonus 1: print out all the musical instruments of myCollections */
//write code here
/* 11. Bonus 2: print out the following musical instruments one at a time. The output should be: */
/*
guitar
piano
mandolin
*/
//write code here
/*12. Bonus 3: print out all the odd elements. The output should be: */
/*
ball
boxing glove
pants
shoes
guitar
mandolin
*/
//write code here
