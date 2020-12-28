//Create a Capitalize Function in JavaScript

/*
  -The function should capitalize the first letter of every word in a string
  -ie. "a coding challenge a day keeps the skills at bay"
*/

const toCapital = str => {
  const words = str.split(" ")   
  //["a", "coding", "challenge", "a", "day", "keeps", "the", "skills", "at", "bay"]
  
  //return words.map(word => word[0].toUpperCase())  
  //["A", "C", "C", "A", "D", "K", "T", "S", "A", "B"]
  
  //return words.map(word => word[0].toUpperCase() + word.slice(1)) 
  //["A", "Coding", "Challenge", "A", "Day", "Keeps", "The", "Skills", "At", "Bay"] 
  
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
  //"A Coding Challenge A Day Keeps The Skills At Bay"
  
}

const longStr = "a coding challenge a day keeps the skills at bay"
console.log(toCapital(longStr))
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