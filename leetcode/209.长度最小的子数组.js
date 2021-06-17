/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let result = Infinity;
  let length=0
  for (let i = 0; i < nums.length; i++){
    sum = 0;
    for (let j = i; j < nums.length; j++){
      sum += nums[j];
      
      if (sum >= target) {
        length = j - i + 1;
        // console.log(j,length)
        result = result <length? result:length;
        break;
      }
    }
    
  }
  return result==Infinity?0:result
};
// @lc code=end

