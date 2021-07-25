/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (['+', '-', '*', '/'].indexOf(tokens[i]) != -1) {
      let num1 = stack.pop();
      let num2 = stack.pop();
      let top;
      switch (tokens[i]) {
        case '+':
          top = num2 * 1 + num1 * 1;
          break;
        case '-':
          top = num2 - num1;
          break;
        case '*':
          top = num2 * num1;
          break;
        case '/':
          if (num2 / num1 < 0) {
            top = Math.ceil(num2 / num1);
          }
          else {
            top = Math.floor(num2 / num1);
          }


          break;
        default:
          break;
      }
      stack.push(top);
      console.log(stack)
    }
    else {
      stack.push(tokens[i])
    }
  }
  return stack[stack.length - 1]
};
// @lc code=end

