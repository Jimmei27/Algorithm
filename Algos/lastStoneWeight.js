// iterate through the array as long as there are more than two elements
// sort the array and pop off the two biggest number
// subtract both numbers and push it back into the array
// return the last element

const lastStoneWeight = (stones) => {
    while(stones.length > 1) {
      stones = stones.sort((a,b) => a - b)
      stonesA = stones.pop()
      stonesB = stones.pop()
      stones.push(stonesA - stonesB)
    }
    return stones
  };



// console.log(lastStoneWeight([2,7,4,1,8,1]))
// console.log(lastStoneWeight([8,10,4]))