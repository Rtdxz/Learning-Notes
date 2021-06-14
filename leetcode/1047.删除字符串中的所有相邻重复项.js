/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {

  //递归做法
  /* var insertDuplicate = function (sub) {

    let isRight = true;
    for (var i = 0; i < sub.length; i++) {
      if (sub[i] == sub[i + 1]) {

        isRight = false;
        break;
      }
    }
    if (isRight) {


      return sub;
    }
    let array = sub.split('');
    array.splice(i, 2);
    sub = array.join('')
    return insertDuplicate(sub);

  }
  return insertDuplicate(S); */

  //栈做法
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack[stack.length - 1] != S[i]) {
      stack.push(S[i]);
    }
    else {
      stack.pop()
    }

  }
  return stack.join('');



};
// @lc code=end

