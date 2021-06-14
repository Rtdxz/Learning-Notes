/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  var result = [];
  var path = [];

  var backtracking = function (n, k, startIndex) {
    if (path.length == k) {
      console.log(path);
      let newpath = path.slice(0)

      result.push(newpath);

      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);

      backtracking(n, k, i + 1);
      path.pop();
    }
  }
  backtracking(n, k, 1);
  return result;
};
// @lc code=end

