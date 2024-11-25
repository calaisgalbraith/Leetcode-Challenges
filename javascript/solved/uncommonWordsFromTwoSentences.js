/*
A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let totalArray = s1.split(' '); // turn string to arrays
    totalArray = totalArray.concat(s2.split(' ')); // turn string to arrays
    const arrayToReturn = []

    // get occurances of each word
    let count = totalArray.reduce(function (val1, val2) {
        return (
            val1[val2] ? ++val1[val2] : (val1[val2] = 1),
            val1
        );
    }, {});

    // if word occurance is 1, add to arrayToReturn
    for (const countVal in count) {
        if (count[countVal] === 1) {
            arrayToReturn.push(countVal)
        }
    }

    return arrayToReturn;
};