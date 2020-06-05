// iterate through the array using two pointers
// swap value of two pointers

const reverseString = (s) => {
  let a = 0;
  let b = s.length - 1;
  
  while(a < b) {
    [s[a], s[b]] = [s[b], s[a]];
    a += 1;
    b -= 1;
  }
  return s
};


// console.log(reverseString( ["H","a","n","n","a","h"]))