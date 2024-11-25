/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

var numJewelsInStones = function(jewels, stones) {
    let numJewels = 0 // var to store number of jewels

    for (let i = 0; i < stones.length; i++) { // iterate through stones (string)
        if (jewels.includes(stones.charAt(i))) { // check if stone is a jewel (char is included in jewel string)
            numJewels++ // increase stone count if so
        }
    }

    return numJewels
};