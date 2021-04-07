/*
    Directions:
    
    Write a range functiont hat takes two arguments, start and end and return an array 
    containing all the numbers from start up to end.

    Next Write a sum function that takes an array of numbers and returns the sum of
    these numbers. 

    Modify range function to take an optional third argument that indicates the "step" value used
    when building the array. If no step is given, the elements go up by increments of one, 
    corresponding to the old behavior. The function call range(1, 10, 2) should return [1,3,5,7,9]. 
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

function range(start, end, step = start <= end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

console.log(range(1, 10));

function sum(array) {
  var total = 0;

  for (let i of array) {
    total += i;
  }
  return total;
}
console.log(sum(range(1, 10))); //?
