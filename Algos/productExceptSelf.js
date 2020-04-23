// declare an empty array to hold the results
// declare variable with a value of 1
// multiple going left to right then right to left
// assign first element with the product of all numbers
// return result array

const productExceptSelf = (nums) => {
    let newArr = [];
    let product = 1;
    for (let i = 0; i < nums.length; i += 1) {
        newArr[i] = product
        product *= nums[i]
    }
      product = 1
      for (let j = nums.length - 1; j > 0; j -= 1){
          newArr[j] *= product
          product *= nums[j]
      }
      newArr[0] = product
    return newArr
}


// console.log(productExceptSelf([1,2,3,4]))