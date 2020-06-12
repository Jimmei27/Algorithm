// bubble sort 

const sortColors = (num) => {
   for (let i = 0; i < num.length; i += 1) {
       for (let j = 0; j < num.length; j += 1) {
          if (num[j] > num[j + 1]) {
              [num[j], num[j+1]] = [num[j+1], num[j]]
          }
       }
   }
   return num
};

// console.log(sortColors([2,0,2,1,1,0]))


// using three pointer iterate through the array 
// swapping all the zeros to the front and twos to the end of the array
// one pointer to keep track of the last zero to the front
// one pointer to keep track of the last zero to the end
// one pointer to iterate through the array

const sortColors1 = (num) => {
let front = 0;
let end =  num.length - 1
let current = 0;

while (current <= end) {
    if(num[current] === 0){
        [num[front], num[current]] = [num[current], num[front]]
        front += 1
        current += 1
    }
    else if(num[current] === 2) {
        [num[end], num[current]] = [num[current], num[end]]
        end -= 1
    } else {
        current += 1
     }
    }
    return num
    };


// console.log(sortColors1([1, 2, 0]))
    