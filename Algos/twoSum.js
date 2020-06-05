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