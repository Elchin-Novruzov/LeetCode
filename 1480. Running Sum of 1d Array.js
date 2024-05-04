/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr = []
    let n = 0

    for (let i = 0; i < nums.length; i++) {
        arr[i] = nums[i] + n
        n += nums[i]
    }
    return arr
};
