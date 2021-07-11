/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sum = function (n) {
    let result = 0;
    while (n > 0) {
      let temp = n % 10;
      result += temp * temp;
      n = Math.floor(n / 10);
    }
    return result;
  }
  let map = new Map();
  while (sum(n) != 1) {
    if (!map.has(sum(n))) {
      map.set(sum(n), true);

    }
    else {
      return false
    }
    n = sum(n);

  }
  return true


};
// @lc code=end

