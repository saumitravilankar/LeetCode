/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let outputArr = []
    for (let i = 0; i <= nums.length - 1; i++) {
        const remainder = target - nums[i]
        if (nums.includes(remainder)) {
            if (nums.indexOf(remainder) !== i) {
                outputArr.push(i)
                outputArr.push(nums.indexOf(remainder))
            }
            if (outputArr.length === 2) {
                break;
            }
        }
    }
    return outputArr;
};