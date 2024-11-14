/*
There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.

*/

/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let numEmployees = 0
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            numEmployees++
        }
    }

    return numEmployees
};

// Alt solution (has longer runtime in leetcode)
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
// var numberOfEmployeesWhoMetTarget = function(hours, target) {
//     // filter array for vals that met or exceeded target
//     return hours.filter((employeeHours) => employeeHours >= target).length
// };
