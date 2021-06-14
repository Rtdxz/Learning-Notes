/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let orign = x;
  var sum = 0;
  while (x >= 1) {
    let temp = x % 10;
    x = Math.floor(x / 10);
    sum = temp + sum * 10;
    console.log(sum)
  }
  return sum === orign;
};
// @lc code=end

