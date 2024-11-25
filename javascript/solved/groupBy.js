/*
Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.

The provided callback fn will accept an item in the array and return a string key.

The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Please solve it without lodash's _.groupBy function.
*/

/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const objectToReturn = {}
    this.forEach((element) => {
        const key = fn(element)
        if (!objectToReturn[key]) {
            objectToReturn[key] = []
        }
        objectToReturn[key].push(element)
    })
    return objectToReturn
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

// Initial Solution
/**
 * @param {Function} fn
 * @return {Object}
 */
// Array.prototype.groupBy = function(fn) {
//     const objectToReturn = {}
//     this.forEach((element) => {
//         if (objectToReturn[fn(element)] === undefined) {
//             objectToReturn[fn(element)] = [element]
//         } else {
//              objectToReturn[fn(element)].push(element)
//         }
//     })
//     return objectToReturn
// }
