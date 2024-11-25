/*
There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

Note that multiple kids can have the greatest number of candies.


*/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const kidsArray = [] // arr to track kids w/ greatest numb of vandie
    const greatestNumb = Math.max(...candies); // get greatest candy numb

    for (let i = 0; i < candies.length; i++) { // iterate through candies
        // add to arry if kid candies + extra candies >= greats number of candies
        kidsArray.push((candies[i] + extraCandies) >= greatestNumb)
    }
    return kidsArray
};