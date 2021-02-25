/*
Directions:
 Given a string, return a new string with the reversed
 order of characters

Examples:
   reverse('apple') === 'leppa'
   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG'
 */

//=====================================================================
// Solution 1
// use split() method to divide string into ordered list of substrings which puts it in an array
// use reverse() method to reverse array in place
// use join() method to concatenate elements in the array and create new string
function reverseStr(str) {
  const arr = str.split(''); // ['h', 'e', 'l', 'l', 'o'];
  arr.reverse(); // ['o', 'l', 'l', 'e', 'h'];
  return arr.join(''); // olleh
}
reverseStr('hello'); // olleh

//=====================================================================
// Solution 2 (CleanUp Code)
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString('hello');

// =====================================================================
// Solution 3 : Use Loop
function reverseString(str) {
  let reversed = '';

  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
reverseString('Hello');

// =====================================================================
// Solution 4 : Use Reduce
function reverse(str) {
  return str.split('').reduce((reversed, char) => char + reversed, '');
}

reverse('hello'); //?
