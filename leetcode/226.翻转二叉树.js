/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  //递归
  /* if (!root) return null;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root; */

  //迭代

  /* let stack = [];
  if (!root) return root;
  stack.push(root);
  while (stack.length) {
    let top = stack[stack.length - 1];
    stack.pop();
    if (top) {
      [top.left, top.right] = [top.right, top.left];
      if (top.left) stack.push(top.left);
      if (top.right) stack.push(top.right);
    }
  }
  return root; */

  //前序迭代2
  /* let stack = [];
  if (!root) return root;
  stack.push(root);
  while (stack.length) {
    let top = stack[stack.length - 1];
    if (top) {
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
      [top.left, top.right] = [top.right, top.left];

    }
  }
  return root; */

  //层次迭代
  let queue = [];
  if (!root) return root;
  queue.push(root)
  while (queue.length) {
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let top = queue[0];
      queue.shift();
      [top.left, top.right] = [top.right, top.left];
      if (top.left) queue.push(top.left);
      if (top.right) queue.push(top.right);
    }

  }
  return root;
};
// @lc code=end

