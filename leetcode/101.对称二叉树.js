/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {

  if (!root) return true;
  let compare = (left, right) => {

    if (!left && !right) return true;
    else if (!left && right) return false;
    else if (left && !right) return false;
    else if (right.val != left.val) return false;

    let outside = compare(left.left, right.right);
    let inside = compare(left.right, right.left);
    return outside && inside;
  }




  return compare(root.left, root.right);
};
// @lc code=end

