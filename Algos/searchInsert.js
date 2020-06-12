// using a pointer iterate through the array
// if the element is larger than the target return position of the pointer

const searchInsert = (num, target) => {
   let pointer = 0; 
   while (pointer < num.length) {
    //    if(num[pointer] === target) {
    //        return pointer
    //    }
       if(num[pointer] > target) {
           return pointer
       }
       pointer += 1
   }
   return pointer
};


// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
// console.log(searchInsert([1,3,5,6], 0))