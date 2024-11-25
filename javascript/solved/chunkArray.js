/* 
Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

Please solve it without using lodash's _.chunk function.

*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunkedArray = [] // array to return
    let chunkValArray = [] // array to hold values for each subarray/chunk value
    let sizeCount = 1 // val to track # of values in each subarray/chink

    for (let i = 0; i < arr.length; i++) { // iterate through arr values
        if (sizeCount > size) { // check if subarray is at max size
            chunkedArray.push(chunkValArray) // push chunkcedValArray to chunkedArray
            chunkValArray = [] // reset chunkedVal to an empty array
            sizeCount = 1 // reset sizeCount
        }
        
        if (i === (arr.length - 1)) { // check if last value of arr
            chunkedArray.push(chunkValArray) // push chunkcedValArray to chunkedArray
        }

        chunkValArray.push(arr[i]) // add arr[i] value to chunked Array
        sizeCount++ // incrememnt size of chunkedvalArray
    }

    return chunkedArray
};
