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

