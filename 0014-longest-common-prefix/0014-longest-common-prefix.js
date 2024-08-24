/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0]
    }
    let result = ""
    const sortedArr = strs.sort((a, b) => a.length - b.length)
    for (let i = 0; i < sortedArr[0].length; i++) {
        const letter = sortedArr[0][i];
        let flag = false;
        for (let j = 1; j < sortedArr.length; j++) {
            if (letter === sortedArr[j][i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            result += letter
        } else {
            break;
        }
    }
    return result
};