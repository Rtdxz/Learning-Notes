/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let path = [];
  let result = [];
  let sum = 0;
  let backtracking = function (startIndex) {
    if (target < sum) {
      return;
    }
    if (target == sum) {
      console.log(path)
      result.push(path.slice());
      return;
    }
    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
      path.push(candidates[i]);
      sum += candidates[i];
      backtracking(i);
      sum -= candidates[i];
      path.pop();
    }
  }
  candidates.sort((a, b) => a - b);
  backtracking(0);
  return result;
};
// @lc code=end

