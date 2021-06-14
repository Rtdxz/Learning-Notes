/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  //递归
  /* let result = [];
  var inserOrder = function (node) {
    if (node) {
      result.push(node.val)
      let children = node.children;
      for (let i = 0; i < children.length; i++) {
        inserOrder(children[i])
      }
    }
    else {
      return;
    }
  }
  inserOrder(root);
  return result; */

  //迭代
  /* let result = [];
  let stack = [];
  if (!root) return result;
  stack.push(root)
  while (stack.length) {
    let top = stack[stack.length - 1];
    stack.pop();
    if (top) {
      result.push(top.val);
      if (top.children) {
        let children = top.children;
        for (let i = children.length - 1; i >= 0; i--) {
          if (children[i]) {
            stack.push(children[i]);
          }
        }
      }
    }
  }
  return result; */

};
// @lc code=end

