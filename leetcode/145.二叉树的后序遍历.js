/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  /* let result = [];

  var postorderInsertTraversal = (node) => {
    if (node) {
      postorderInsertTraversal(node.left);
      postorderInsertTraversal(node.right);
      result.push(node.val);
    }

  }
  postorderInsertTraversal(root);
  return result; */
  /* let stack = [];
  let result = [];
  stack.push(root);
  while (stack.length) {
    let top = stack[stack.length - 1];
    stack.pop();
    if (top) {
      result.push(top.val);
      stack.push(top.left);
      stack.push(top.right);

    }
  }
  return result.reverse(); */
  let stack = [];
  let result = []
  if (!root) return stack;
  stack.push(root);
  while (stack.length > 0) {
    let top = stack[stack.length - 1];
    if (top != null) {

      stack.push(null);
      if (top.right) stack.push(top.right);
      if (top.left) stack.push(top.left);

    }
    else {
      stack.pop();
      let top = stack[stack.length - 1];
      stack.pop();
      result.push(top.val);
    }
  }
  return result;
};
// @lc code=end

