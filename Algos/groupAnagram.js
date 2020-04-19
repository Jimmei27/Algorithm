// create a cache
// iterate through the array 
// store each element with the key of each element sorted
// return a nested array of all the properties in the cache

const groupAnagrams = (strs) => {
    const cache = {};
    for (let x of strs){
      let sorted = x.split('').sort().join('')
      if(!cache[sorted]){
        cache[sorted] = [x]
      } else {
        cache[sorted].push(x)
      }
    }
     return Object.values(cache)
   }


// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))