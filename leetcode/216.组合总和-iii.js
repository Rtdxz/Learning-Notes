/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];
  let backtracking = function (k, startIndex) {
    if (path.length == k) {

      if (n == path.reduce((front, cur) => front + cur, 0)) {

        let newpath = path.slice();
        result.push(newpath);
      }
      return;
    }
    for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
      path.push(i);
      console.log(path);
      backtracking(k, i + 1);
      path.pop();
    }

  }
  backtracking(k, 1);
  return result;


};
// @lc code=end

