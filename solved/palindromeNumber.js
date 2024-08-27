// Given an integer x, return true if x is a palindrome , and false otherwise

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const reverseInt = x.toString().split('').reverse().join('') // get int reversed
    return x === parseInt(reverseInt) // return if reversed & OG value are equal
};