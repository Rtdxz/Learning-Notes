/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let array = s.split('');
  let stack = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '(') {
      stack.push(')')
    }
    else if (array[i] == '[') {
      stack.push(']')
    }
    else if (array[i] == '{') {
      stack.push('}')
    }
    else if (stack.length == 0 || stack[stack.length - 1] != array[i]) {
      return false;
    }
    else {
      stack.pop()
    }
  }

  return !stack.length
};
// @lc code=end

