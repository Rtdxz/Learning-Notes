/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stack = [];
  let array = path.split('/')
  console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] == '.' || array[i] == '') continue
    if (array[i] == '..') {
      stack.length && stack.pop()

      continue
    }
    stack.push(array[i]);
  }
  console.log(stack)
  return '/' + stack.join('/')
};
// @lc code=end

