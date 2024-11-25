/*
You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let operations = 0;

    for (let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 3
        if (remainder) { // if remainder is non zero
            operations++
        }
    }
    

    return operations
};