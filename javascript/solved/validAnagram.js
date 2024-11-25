/*
Given two strings s and t, return true if t is an  anagram of s, and false otherwise.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArr = Array.from(s).sort().join('');
    const tArr = Array.from(t).sort().join('');
    return sArr === tArr
};