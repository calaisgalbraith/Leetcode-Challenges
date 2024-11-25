/*
Given a string s, find the length of the longest 
substring
 without repeating characters.

Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstring = '' // var to track longest substring
    let currentSubstring = '' // var to track current substring
    for (let i = 0; i < s.length; i++) {
        if (currentSubstring.includes(s[i])) { // if char is not unqiue, (longest substring found)
            if (currentSubstring.length > longestSubstring.length) { 
        longestSubstring = currentSubstring
    }
           currentSubstring = currentSubstring.substring(currentSubstring.indexOf(s[i])+ 1, currentSubstring.length)
        }
        currentSubstring += s[i]
    }
    // double check if currentSubstring is longer than longestSubstring
    if (currentSubstring.length > longestSubstring.length) { 
        longestSubstring = currentSubstring
    }
    return longestSubstring.length
};