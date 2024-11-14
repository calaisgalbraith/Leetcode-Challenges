/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const stringArray = s.split(' ') // split string into array
    const wordsArray = stringArray.filter((thing) => thing.trim() !== ''); // filter out array values that arent words
    return wordsArray[wordsArray.length - 1].length // reutrn legnth of last word
};