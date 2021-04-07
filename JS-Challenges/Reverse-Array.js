/*
    Directions:

    Write two functions reverseArray and reverseArrayInPlace. The first, reverseArray, 
    takes an array as an argument and produces a new array that has the same elements 
    in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
    it modifies the array given as argument in order to reverse its elements. Neither may use 
    the standard reverse method.
*/

/* 
    -Take the last element of the array, then add it to the newArray
    -Loop through array from the end to the beginning so that the last
     element is first
    -Output newArray when loop is finished
*/

function reverseArray(arr) {
  var array = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    array.push(arr[i]);
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4, 5])); //? [ 5, 4, 3, 2, 1 ]

/*
    -Switch the first element with the last element, then the second element
     with the second to last element until reaching the middle
*/

function reverseArrayInPlace(arr) {
  for (let i = 0; i <= arr.length / 2; i++) {
    let element = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = element;
  }
  return arr;
}
console.log(reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f']));
//? [ 'f', 'e', 'c', 'd', 'b', 'a' ]
