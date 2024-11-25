/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) { // iterate through array
        if (target <= nums[i]) { // if target is less than or equal to num at i, return index
            return i
        }
    }

    return nums.length++ // if target greater than all values, return length + 1 (bc will be at end)
};


// Inital Solution
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//     if (nums.indexOf(target) > -1) { // if index exists, return it
//         return nums.indexOf(target)
//     }

//     for (let i = 0; i < nums.length; i++) { // iterate through array
//         if (target < nums[i]) { // if target num less than num at index i, return index 
//             return i
//         }
//     }

//     return nums.length++ // if target greater than all values, return length + 1 (bc will be at end)
// };