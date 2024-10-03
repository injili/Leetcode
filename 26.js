/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1

    for (j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[j-1]) {
            nums[i] = nums[j]
            i++
        }
    }

    return(i);
};
// @lc code=end

