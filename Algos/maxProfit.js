// declare two variable to keep track of the lowest price and to keep track of max profit
// iterate through the array
// if the current element is lower than current minPrice reassign the minPrice
// else check if element subtracting the minPrice is greater than the current profit

const maxProfit = (prices) => {
  let minPrice = prices[0]
  let profit = 0; 
  
  for (let x of prices) {
      if (minPrice > x) minPrice = x
      else (profit = Math.max(profit, x - minPrice))
  }
  return profit
}


// console.log(maxProfit([7,1,5,3,6,4]))