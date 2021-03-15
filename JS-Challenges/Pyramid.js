/*
Directions:
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
Examples:
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####'
  pyramid(4)
      '  #    '
      ' ###   '
      '#####  '
      '#######'
*/

/*

From 0 to n (iterate through rows)
Create an empty string, 'level
From 0 to ??? (columns)
IF the column should have a #
Add a '#' to level
ELSE
Add a space to 'level'
Console log 'stair'

*/

// Solution 1 Iterative =========================================================================================================
/*
    - Use for loop to iterate over each row of output (goes from row 0 up to n - 1)
    - For each row ceated make an empty string to represent the level of the pyramid
    - Iterate over all the different columns inside pyramid
    - Look at how n is related to the number of columns (take n double it and subtract 1 for total number of columns)
    - So in for loop iterate from 0 to 2 * n - 1 to get correct number of columns
    - const columns = [0, 1, 2, 3, 4]
    - const rows = 0
    - Pull out # for index 2 and spaces for other areas
    - Calculate midpoint of array (center index)
    - Take row number of elements on either side of center point and make those #
    - Get midpoint of columns: Use Math.floor(2 * n -1) / 2 where n is total rows
    - Math.floor(5 / 2)
    - Calculate midpoint of row which changes depending on n. At top of function becuase n is never going to change
    - Row number of elements to left and right of midpoint
    - if current column you are looking at is within bounds of midpoint + row and midpoint - row
    - if condition met add in a # otherwise add in a space
*/

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level); //?
  }
}
console.log(pyramid(4));

// Solution 2 Recursion =========================================================================================================
/*
    - Set up base case. (row === n). End function
    - if statement to detect when at end of a level
    - max number of columns in a row is determined by 2 * n - 1
    - Check to see when level string has a length of 2 * n - 1. 
    - if at length console log and move on to next row
    - Add space or # to level string
    - Calculate midpoint and decide if current element being considered is within range of that midpoint
    - Determine column currently on by looking at thhe length of level string (level.length)
    - call pyramind, n unchanged, row still in middle of row, take new char just generated and add onto level string
*/

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
console.log(pyramid(4));
