
function RandomizedSet() {
    this.storage = {}; 
    this.length = 0;
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!this.storage[val]){
      this.storage[val] = 1
      this.length += 1
      return true
  } else {
      return false
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.storage[val]){
        delete this.storage[val]
        this.length -= 1
        return true
    } else {
        return false
    }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let value = Object.keys(this.storage)
    return value[Math.floor(Math.random() * Math.floor(this.length))]
};



let randomSet = new RandomizedSet()
console.log(randomSet.insert(1))
console.log(randomSet.remove(2))
console.log(randomSet.insert(2))
console.log(randomSet.getRandom())
console.log(randomSet.remove(1))
console.log(randomSet.insert(2))
console.log(randomSet.getRandom())
console.log(randomSet)