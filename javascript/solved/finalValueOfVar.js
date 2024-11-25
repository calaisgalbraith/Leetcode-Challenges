/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce(
        (accumulator, currentValue) => 
            accumulator + (currentValue.includes('+') ? 1 : -1 ),
        0,
    );
};

// First Solution
// var finalValueAfterOperations = function(operations) {
//     let x = 0
//     for (let i = 0; i < operations.length; i++) {
//         if (operations[i].includes('--')) {
//             x--
//         } else {
//             x++
//         }
//     } 
//     return x   
// };