/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return result;
  let length = digits.length;
  let result = [];
  let path = [];
  var nums = [];
  nums = [
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ]
  let backtracking = (num) => {

    if (path.length == length) {
      let newpath = path.slice();

      result.push(newpath.join(''));
      return;
    }
    let letter = nums[num - 2];
    for (let i = 0; i < letter.length; i++) {
      path.push(letter[i]);
      backtracking(digits[path.length] * 1);
      path.pop();
    }
  }

  backtracking(digits[0] * 1);
  return result;


};
// @lc code=end

