/* 
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2); // merge two arrays
    mergedArray.sort((a, b) => a - b); // sort array
    const middleIndex = Math.floor(mergedArray.length / 2); // get middle of array

    if (mergedArray.length % 2 === 0) { // if array length even
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else { // if odd, return median value
        return mergedArray[middleIndex];
    }   
};