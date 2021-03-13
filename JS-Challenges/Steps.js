/*
Directions:
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
Examples:
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'
*/

// ===========================================================================
// Solution 1:
// Iterative approach

/*
Pesudo Code:

From 0 to n (iterate through rows)
For each row create an empty string, 'stair'
From 0 to n (iterate through columns)
IF the current column is equal to or less than the current row
Add a '#' to stair
ELSE
Add a space to 'stair
Console log 'stair'
*/

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++)
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    console.log(stair);
  }
}
console.log(steps(5));

// ===========================================================================
// Solution 2: Use String.prototype.repeat
function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = '#'.repeat(i) + ' '.repeat(n - i);
    console.log(step);
  }
}
console.log(steps(5));

// ===========================================================================
// Solution 3:
//Create a stair case using RECURSION.

/*
First, determine the base case. The base case is the case in which we decide there
is no more work for us to do and it's time to return and stop the recusrion process

Base case can be found in the first for loop. 
if (row === n), the base case condition has been met and we hit the end of our problem. Exit function.

Determine we are at the end of the row:
if the 'stair' string has a (length === n) then we are at the end of a row

Append the # or space character:
if the length of the stair string is less than or equal to the row number, add a '#', otherwise add a space
*/

function steps(n, row = 0, stair = '') {
  //   //base case
  if (n === row) {
    return;
  }

  //   //Is it time for a new row?
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  //   //Append a character
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

console.log(steps(5));
