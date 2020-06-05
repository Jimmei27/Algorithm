// iterate backwards to check if any element equals a 9 
// if it does not equal a 9 increment the element and return the array
// if it equals a 9 change it to zero and continue to iterate
// if loops finishes unshift a 1 in front (first element was a nine)

const plusOne = (digits) => {
    for (let i = digits.length - 1; i >= 0; i -= 1) {
        if (digits[i] !== 9) {
            digits[i] += 1
            return digits
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits
};


// console.log(plusOne([9,9,9]))