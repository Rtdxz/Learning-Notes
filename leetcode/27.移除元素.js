/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //双重for循环暴力解法
  /*  let size = nums.length
   for (let i = 0; i < size; i++) {
     if (nums[i] === val) {
       for (let j = i + 1; j < size; j++) {
         nums[j - 1] = nums[j]
       }
       i--;
       size--;
     }
   }
   return size; */

  //双指针法,快慢指针
  let slowIndex = 0;
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (val != nums[fastIndex]) {
      nums[slowIndex++] = nums[fastIndex]
    }
  }
  return slowIndex
};
// @lc code=end

