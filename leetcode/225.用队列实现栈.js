/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {

  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift());
  }

  //记录队首元素，即要pop的结果
  let res = this.inQueue.shift();
  console.log(this.inQueue)
  this.inQueue.push(...this.outQueue.slice());
  console.log(this.inQueue)
  //清空队列二
  while (this.outQueue.length) {
    this.outQueue.shift()
  }
  return res
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {

  return this.inQueue[this.inQueue.length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQueue.length == 0 ? true : false
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

