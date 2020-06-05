// use a counter
// iterate through the array 
// check each element to see if it has even amount of number 
// convert into string and use length

const findNumbers = (num) => {
   let count = 0;
   
   for (let i = 0; i < num.length; i += 1) {
   let str = num[i].toString()
    if (str.length % 2 === 0) {
        count += 1
    }
   }
   return count
};

// console.log(findNumbers([12,345,2,6,7896]))