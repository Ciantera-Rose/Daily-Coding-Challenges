/*
Directions:
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
Examples:
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

// ===========================================================================

// Solution 1: Use for loop

function chunk(array, size) {
  //Crete empty array
  const chunked_arr = [];

  for (let element of array) {
    // Look at last element inside of chunked array
    const last = chunked_arr[chunked_arr.length - 1];

    // If last does not exist or length of the last = to the chunk size
    // push into new array with the element

    if (!last || last.length === size) {
      chunked_arr.push([element]);
    } else {
      // else push last element into chunked array bc there is space
      last.push(element);
    }
  }
  return chunked_arr;
}

chunk([1, 2, 3, 4, 5, 6, 7], 2); //? [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]

// ==================================================================================

// Solution 2 Use slice method and while loop

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  //Create a while loop. This while loop will run as long as index is less than the original arrays length

  while (index < array.length) {
    // take slice out of original array from index to index + size
    // and stick directly into array (chunked.push)
    chunked.push(array.slice(index, index + size));

    // then move onto next index, take index variable and add size to it
    // incrementing by size var to take big scoops out of original array over time

    index += size;
  }

  return chunked;
}

chunk([1, 2, 3, 4, 5], 3); //? [ [ 1, 2, 3 ], [ 4, 5 ] ]
