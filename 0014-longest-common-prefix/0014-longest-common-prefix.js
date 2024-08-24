/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) {
        return strs[0]
    }

    const sortedArr = strs.sort((a, b) => a.length - b.length)
    console.log(sortedArr)
    let result = ""
    for (let i = 0; i < sortedArr[0].length; i++) {
        const letter = sortedArr[0][i];
        let flag = false;
        console.log(flag, '------flag1')
        for (let j = 1; j < sortedArr.length; j++) {
            console.log(sortedArr[j][i], '------------to compare')
            if (letter === sortedArr[j][i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
            console.log(flag, '------flag2')
        }
        if (flag === true) {
            result += letter
            console.log(flag, '------flag3')
            console.log(letter, '------letter')
        } else {
            break;
        }
    }
    return result
};