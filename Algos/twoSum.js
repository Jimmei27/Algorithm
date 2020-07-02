// sort the array
// assign two pointers
// start from front and the end of the array
// find the elements that adds up to the target

const twoSum = (num, target) => {
    num = num.sort((a,b) => a - b)
    let a = 0
    let b  = num.length - 1

    while (a !== b) {
        if (num[a] + num[b] === target) {
            return [a, b]
        } else if (num[a] + num[b] < target) {
            a += 1
        } else {
            b -= 1
        }
    }
};


// console.log(twoSum([2, 7, 11, 15], 9))

const twoSummed = (num, target) => {
    let obj = {};
    for (let i = 0; i < num.length; i += 1) {
        let sub = target - num[i]
        console.log(obj)
        if (obj[sub]) {
            console.log(i)
        return [obj[sub], num[i]]
       } else {
           obj[num[i]] = num[i]
       }
   }
}

// console.log(twoSummed([2, 7, 11, 15], 9))


const threeSum = (num, target) => {
    let obj = {};

}

// console.log(threeSum([-1, 0, 1, 2, -1, -4], 0))


    
var divide = function(dividend, divisor) {
    let num = 0;
    let count = 0;
    while (count < Math.abs(dividend)){
        num += 1;
        count += Math.abs(divisor)
    }
    if(count === Math.abs(dividend)){
        if((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ) {
            return num
        } else {
            return -Math.abs(num)
        }
    } else {
        if((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0) ) {
            return num - 1
        } else {
            return -Math.abs(num - 1)
        }
    }
};

// console.log(divide(-20000099, -1))

var searchRange = function(nums, target) {
    let a = 0;
    let b = nums.length - 1
    while (a < b) {
        if (nums[a] !== target) {
            a += 1
        }
        if (nums[b] !== target) {
            b -= 1
        }
        console.log(a,b)
        if (nums[a] === target && nums[b] === target){
            return [a,b]
        }
    }
    console.log(1)
    if(nums[a] === target && nums[b] === target) {
        return [a,b]
    }
    return [-1,-1]
};

console.log(searchRange([-1], 1))