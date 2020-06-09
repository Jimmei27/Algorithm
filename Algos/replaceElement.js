// iterate through the array starting from the end
// using a variable to store the highest number
// inside the loop using a temp variable hold the current value
// reassign the current element to the max variable and check if the temp variable is higher than max

const replaceElements = (arr) => {
    let max = 0;
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        let current = arr[i]
        arr[i] = max
        max = current > max ? current : max
    }
    arr[arr.length - 1] = -1
    return arr
};


// console.log(replaceElements([17,18,5,4,6,1]))


