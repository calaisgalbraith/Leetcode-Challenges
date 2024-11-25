/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let isPal = true // var to track if palindrome
    const alteredString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() // remove spaces and make all lowercase

    for (let i = 0; i < alteredString.length; i++) { // iterate through alteredString
        if (alteredString.charAt(i) !== alteredString.charAt(alteredString.length - (i + 1))) { // check chars match to be palindrome
            isPal = false
            break
        }
    }
    
    return isPal
};