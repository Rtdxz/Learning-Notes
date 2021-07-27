/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  /*  if (root == null) {
     return 0;
   }
   else if (root.children.length == 0) {
     console.log('a')
     return 1
   }
   else {
     let max = 0;
     for (let i = 0; i < root.children.length; i++) {
       let depth = maxDepth(root.children[i])
       max = Math.max(max, depth)
     }
     return max + 1
   }
  */


  //迭代
  if (!root) return 0;
  let queue = [];
  let depth = 0
  queue.push(root);
  while (queue.length) {
    let size = queue.length;
    depth++;
    for (let i = 0; i < size; i++) {
      let top = queue.shift();
      if (top && top.children)
        for (let j = 0; j < top.children.length; j++) {
          if (top.children[j]) {
            queue.push(top.children[j])
          }

        }
    }

  }
  return depth


};
// @lc code=end

