/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negativeNumb = x < 0 // track if x is negative
    x = Math.abs(x) // make x positive
    let result = x.toString().split('').reverse().join(''); // reverse number
    result = Number(result)

    return result > 0x7FFFFFFF ? 0 : negativeNumb ? result * -1 : result
};
