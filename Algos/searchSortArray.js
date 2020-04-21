// divide and conquer 
// iterate from the midpoint of the array using two pointer
// if any pointer is the target return the index

const search = (nums, target) => {
    let a = 0;
    let b = 0; 
    let length = nums.length
    if (length % 2 === 0){
      a = length/2
      b = length/2 + 1
    } else {
      a = b = Math.floor(length/2)
    }
    while (a >= 0 || b <= length - 1){
      if (nums[a] === target) return a
      if (nums[b] === target) return b
      a -= 1
      b += 1
    }
    return -1
  };

// console.log(search([4,5,6,7,0,1,2], 0))  