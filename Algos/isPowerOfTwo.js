// create two variable one to store the count of the exponent power and one to store the result
// using a while loop check 2 to each power until the result is greater than the input number
// if the result ever equals to the number return true else return false once it exceeds the number

const isPowerOfTwo = (n) => {
    let count = 0;
    let result = 0;
    while (result < n) {
      result = Math.pow(2, count) 
      if (result === n) return true;
      count += 1
    }
    return false
};


// console.log(isPowerOfTwo(218))