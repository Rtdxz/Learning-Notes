/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
  //递归
  /* let result = [];
  var preorderInsertTraversal = (node) => {
    if (node) {
      result.push(node.val);
      preorderInsertTraversal(node.left);
      preorderInsertTraversal(node.right);
    }
  }
  preorderInsertTraversal(root);
  return result; */

  //迭代
  /* let stack = [];
  let result = [];
  stack.push(root);
  while (stack.length) {
    let top = stack[stack.length - 1];
    stack.pop();
    if (top) {
      result.push(top.val);
      stack.push(top.right);
      stack.push(top.left);
    }
  }
  return result; */

  //迭代2
  let stack = [];
  let result = []
  if (!root) return stack;
  stack.push(root);
  while (stack.length > 0) {
    let top = stack[stack.length - 1];
    if (top != null) {
      stack.pop();
      if (top.right) stack.push(top.right);
      if (top.left) stack.push(top.left);
      stack.push(top);
      stack.push(null);
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

