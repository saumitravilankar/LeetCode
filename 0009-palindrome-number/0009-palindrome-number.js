/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    console.log(Array.from(x.toString()).join(''))
    console.log(Array.from(x.toString()).reverse().join(''))
    if (Array.from(x.toString()).join('') === Array.from(x.toString()).reverse().join('')) {
        return true
    }
    return false
};