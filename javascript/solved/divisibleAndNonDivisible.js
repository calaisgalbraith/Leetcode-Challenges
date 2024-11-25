/*
You are given positive integers n and m.

Define two integers as follows:

num1: The sum of all integers in the range [1, n] (both inclusive) that are not divisible by m.
num2: The sum of all integers in the range [1, n] (both inclusive) that are divisible by m.
Return the integer num1 - num2.
*/


/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i % m ? i : -i
    }

    return sum
};


// Initial Solution

// /**
//  * @param {number} n
//  * @param {number} m
//  * @return {number}
//  */
// var differenceOfSums = function(n, m) {
//     let num1 = 0; // for non divisible nums
//     let num2 = 0; // for dividisble nums

//     for (let i = 1; i <= n; i++) { // go 1 - n (inclusive)
//         if (i % m) { // if n not divisible by 3
//             num1 += i
//         } else { // if n divisiable by 3
//             num2 += i
//         }
//     }

//     return num1 - num2
// };