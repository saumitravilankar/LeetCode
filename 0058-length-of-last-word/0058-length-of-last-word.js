/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let filteredArr = s.trim().split(' ');
    return filteredArr[filteredArr.length - 1].length
};