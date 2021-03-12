/*
Directions:
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
Examples:
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

const toCapital = str => {
  const words = str.split(' ');
  //["a", "coding", "challenge", "a", "day", "keeps", "the", "skills", "at", "bay"]

  //return words.map(word => word[0].toUpperCase())
  //["A", "C", "C", "A", "D", "K", "T", "S", "A", "B"]

  //return words.map(word => word[0].toUpperCase() + word.slice(1))
  //["A", "Coding", "Challenge", "A", "Day", "Keeps", "The", "Skills", "At", "Bay"]

  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  //"A Coding Challenge A Day Keeps The Skills At Bay"
};

const longStr = 'a coding challenge a day keeps the skills at bay';
console.log(toCapital(longStr));
//"A Coding Challenge A Day Keeps The Skills At Bay"

//METHODS USED:

/*
  String.prototype.split()

  The split() method divides a String into an ordered list of substrings, 
  puts these substrings into an array, and returns the array.  The division 
  is done by searching for a pattern; where the pattern is provided as the
  first parameter in the method's call.  
*/

/*
  Array.prototype.map()

  The map() method creates a new array populated with the results 
  of calling a provided function on every element in the calling array.
*/

/*
   Array.prototype.slice()

  The slice() method returns a shallow copy of a portion of an array into a new
  array object selected from start to end (end not included) where start and end 
  represent the index of items in that array. The original array will not be modified.
*/

/*
  Array.prototype.join()

  The join() method creates and returns a new string by concatenating all of the 
  elements in an array (or an array-like object), separated by commas or a specified
  separator string. If the array has only one item, then that item will be returned 
  without using the separator.
  */

//Solution 2:

// Make an empty arrat "words"
// Split the input string by spaces to get an array
// For each word in the array
// Uppercase the first letter of the word
// Join the first letter with the rest of the string
// Push result into 'words'array
// Join words into a string and return it

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1)); //?
  }
  return words.join(' ');
}

const longSent = 'the quick brown fox jumped over the lazy dog';
console.log(capitalize(longSent));

// Solution 3
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

const longStr = 'this is an odd soultion hard coding uppercase';
console.log(capitalize(longStr)); //? This Is An Odd Solution Hardcoding Uppercase
