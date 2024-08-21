/**
 * @param {string} s
 * @return {number}
 */

const data = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

var romanToInt = function (s) {
    const valueArray = Array.from(s).map(item => data[item])
    const finalArray = []
    for (let i = 0; i < valueArray.length; i++) {
        if (valueArray[i + 1] && (valueArray[i] < valueArray[i + 1])) {
            finalArray.push(valueArray[i + 1] - valueArray[i])
            i++;
        } else {
            finalArray.push(valueArray[i])
        }
    }
    let total = finalArray.reduce((acc, val) => acc += val, 0)
    return total
};