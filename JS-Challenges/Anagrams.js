/*

Directions:
 Check to see if two provided strings are anagrams of eachother.
 One string is an anagram of another if it uses the same characters
 in the same quantity. Only consider characters, not spaces
 or punctuation.  Consider capital letters to be the same as lower case
Examples:
   anagrams('rail safety', 'fairy tales') --> True
   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
   anagrams('Hi there', 'Bye there') --> False

*/

// Solution 1:

// The RegExp constructor creates a regular expression object for matching text with a pattern
// Regular expressions can be used to manipulate strings very easily
// \w and \W only matches ASCII based characters; for example, a to z, A to Z, 0 to 9, and _.

// ie.
// const word = "HI THERE!!!";
// word.replace(/[^\w]/g, '').toLowerCase(); //? hithere

// Build a character map out of stringA and stringB
// Compare all of thhe characters inside those two maps together
// Write a helper function to build a character map for a given string vs two for loops
// Create an empty object to serve as char map
// Iterate through string and for every char inside there add it to char map
// Take charMap, assign a key to charMap of current character you're looking at and increment value at that character
// Compare the stringA and stringB char maps
// Look at the number keys in each map and check to see they are identical in length
// Write a if check comparison and if != then we must know we do not have an anagram bc there is a different number of characters
// Meaning one charMap has an extra character type and the other does not
// If they do have the same # of chars then proceed with Map checking process
// Need to iterate over 1 charMap, look at every char inside of it and then compare it to the other char map
// Iterating over object = use for/in loop
// Iterate over stringA 1 time to build charMap
// Iterate over stringB 1 time to build charMap
// Then iterate through 1 charMap to do the final comparison

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap; //? { h: 2, i: 1, t: 1, e: 2, r: 1 }
}

anagrams('rail safety', 'fairy tales'); //?  true
anagrams('Hi There', 'Bye There'); //? false

// Solution 2:

// When you sort an array it will take all of the elements in an array and returns the sorted array.
// The default sort order is ascending.
// Take two input, clean up by removing any spaces and punction, lowercase both strings and then sort
// when sorted no matter what chars are inside they will end up in the exact same order.
// If sorted strings are identical then = anagram

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

anagrams('rail safety', 'fairy tales'); //? true

cleanString('Hello There'); //? "eeehhllort"
