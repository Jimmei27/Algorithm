// sort the array using the difference of index 0 - index 1
// find the midpoint of the nest arrays
// add all the numbers on index 0 from arrays in front of the midpoint
// add all the numbers on index 1 from arrays behind the midpoint

const twoCitySchedCost = (costs) => {
   costs = costs.sort((a, b) => (a[0] - b[0]) - (a[1] - b[1]))   
   let sum = 0; 
   let len = costs.length / 2
   for (let i = 0; i < costs.length; i += 1) 
   {
    if (i < len) {
        sum += costs[i][0]
    }
    if (i >= len) {
        sum += costs[i][1]
    }
   }
   return sum
};


// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))