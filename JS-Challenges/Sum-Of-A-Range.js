/*
    Directions:
    
    Write a range functiont hat takes two arguments, start and end and return an array 
    containing all the numbers from start up to end.

    Next Write a sum function that takes an array of numbers and returns the sum of
    these numbers. 

*/

function range(start, end) {
  var array = [];

  for (let start = 0; start <= end; start++) {
    array.push(start);
  }
  return array;
}
console.log(range(1, 10)); //? [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function sum(array) {
  var total = 0;

  for (let i of array) {
    total += i;
  }
  return total;
}
console.log(sum(range(1, 10))); //? 55
