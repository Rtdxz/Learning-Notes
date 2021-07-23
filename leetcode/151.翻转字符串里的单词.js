/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let right = s.length - 1;
  let left = right;
  let result = '';
  while (left >= 0) {
    while (s[right] && s[right] == ' ') {
      right--;
    }
    left = right;
    if (left >= 0 && result) {
      result += ' ';
    }
    while (s[left] && s[left] != ' ') {
      left--;
    }
    for (let i = left + 1, j = right; i <= j; i++) {
      result += s[i];
    }


    right = left
  }
  return result;
};
// @lc code=end

