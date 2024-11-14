/*
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) { // iterate through arrary
        for (let j = i + 1; j < nums.length; j++) { // iterate through nums after i
            if (nums[i] === nums[j]) {
                goodPairs++
            }
        }
    }

    return goodPairs
};