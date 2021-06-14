/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  /* let result = [];

  var postorderInsertTraversal = (node) => {
    if (node) {
      postorderInsertTraversal(node.left);
      result.push(node.val);
      postorderInsertTraversal(node.right);
    }
  }
  postorderInsertTraversal(root);
  return result; */

  let stack = [];
  let result = []
  if (!root) return stack;
  stack.push(root);
  while (stack.length > 0) {
    let top = stack[stack.length - 1];
    if (top != null) {
      stack.pop();
      if (top.right) stack.push(top.right);
      stack.push(top);
      stack.push(null);

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

