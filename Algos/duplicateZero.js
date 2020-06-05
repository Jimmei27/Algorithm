// iterate through the array 
// if element is zero shift all the element back by one

const duplicateZeros = (arr) => {   
 for(let i = 0; i < arr.length; i += 1) {
        if (arr[i] === 0) {
            for (let j = arr.length - 1; j > i; j -= 1) {
               arr[j] = arr[j - 1]
            }
            i += 1
        }
    }
   return arr
};

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))