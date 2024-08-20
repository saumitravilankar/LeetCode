/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (Array.from(x.toString()).join('') === Array.from(x.toString()).reverse().join('')) {
        return true
    }
    return false
};