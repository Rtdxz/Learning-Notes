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
  // let result = Infinity;
  // let length=0
  // for (let i = 0; i < nums.length; i++){
  //   sum = 0;
  //   for (let j = i; j < nums.length; j++){
  //     sum += nums[j];
      
  //     if (sum >= target) {
  //       length = j - i + 1;
  //       // console.log(j,length)
  //       result = result <length? result:length;
  //       break;
  //     }
  //   }
    
  // }
  // return result==Infinity?0:result

  let result = Infinity;
  let length = 0;
  let sum = 0;
  //左指针从0开始
  let j = 0;
  //i为右指针
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
    while (sum >= target) {
      length = i - j + 1;
      result = result < length ? result : length;
      //滑动窗口
      sum -= nums[j];
      j++;
     
      
    }
  }
  return result == Infinity ? 0 : result;
};
// @lc code=end

