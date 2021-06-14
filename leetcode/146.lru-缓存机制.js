/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.key = [];
  this.cache = {};
  this.capacity = capacity;

};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache[key] != undefined) {
    console.log(this.cache[key]);
    this.key.splice(this.key.indexOf(key), 1);
    this.key.push(key);
    return this.cache[key];
  }
  else return -1;

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache[key] != undefined) {
    this.cache[key] = value;
    this.key.splice(this.key.indexOf(key), 1);
    this.key.push(key);
  }
  else {
    if (this.capacity == this.key.length) {
      delete this.cache[this.key[0]];
      this.key.shift();

      this.key.push(key);
      this.cache[key] = value;
    }
    else {
      this.key.push(key);
      this.cache[key] = value;
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

