/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = [];
  let path = [];
  if (!root) return result;

  let traversal = function (node) {
    path.push(node.val);
    let str = '';
    if (!node.left && !node.right) {
      for (let i = 0; i < path.length; i++) {
        str += path[i];
        if (i !== path.length - 1)
          str += '->';
      }

      result.push(str);
    }
    if (node.left) { traversal(node.left); path.pop(); }
    if (node.right) { traversal(node.right); path.pop(); }
  }
  traversal(root);
  return result;

};
// @lc code=end

