/*
Directions:
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.
Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

// Solution 1:
function palindrome(str) {
  return str === str.split('').reverse().join('') ? true : false;
}

palindrome('racecar'); //? true

// Solution 2:
// Not a great solution and double the work but wanted to test the every() method.
// Convert to array to use every(), iterate over each char and access other side of array using the index
// Compare current element and mirroed element on other side of array
// Access element at length of array, increment at every step of the loop - 1
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
palindrome('racecar'); //? true
