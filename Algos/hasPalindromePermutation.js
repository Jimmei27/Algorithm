// Check if any permutation of the input is a palindrome
// use a cache to count the number of times each letter appears
// the loop through the cache to pull out the letters that appears odd amount of time 
// store in array and return true if the array length is 1 or 0

const hasPalindromePermutation1 = (theString) => {
    let cache = {};
    let newArr = [];
    if(theString.length === 0 || theString.length === 1) return true
    
     for (let x of theString) {
       if (!cache[x]){
         cache[x] = 1
       } else {
         cache[x] += 1
       }
     }
    
     for (let y in cache) {
         if (cache[y] % 2 === 1){
             newArr.push(y)
         }
     }
     if (newArr.length > 1) {
         return false
        } else {
            return true
        }
  }

  
  // use a set to keep letter than appears odd amount of time
  // loop through the strings to check if its in the set 
  // check the size of the set 

const hasPalindromePermutation = (theString) => {
    const newSet = new Set();
    
    for (let char of theString) {
      if (newSet.has(char)) {
        newSet.delete(char);
      } else {
        newSet.add(char);
      }
    }
    return newSet.size <= 1;
  }
//   console.log(hasPalindromePermutation('aabcbcd'))
//   console.log(hasPalindromePermutation('aabccbdd'))
//   console.log(hasPalindromePermutation('aabcd'))
//   console.log(hasPalindromePermutation('aabbcd'))
//   console.log(hasPalindromePermutation(''))
//   console.log(hasPalindromePermutation('a'))
