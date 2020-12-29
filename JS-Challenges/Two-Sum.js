//Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one 
//solution, and you may not use the same element twice.
//You can return the answer in any order.

//([15, 7, 11, 2]) target = 9
//return [i, n] 

const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let n = i+1; n < nums.length; n++) { 
            if(nums[i] + nums[n] === target) {
                return [i, n]
            }
        }
    }
} 
console.log(twoSum([15, 7, 11, 2],9)) // [ 1, 3 ]
console.log(twoSum([3, 2, 4],6))  // [ 1, 2 ]