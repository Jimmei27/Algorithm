// Check if we're serving orders first-come, first-served
// loop through the Orders being served array
// check to see if the orders being serve are at the front of either takeout or dineIn order
// if it was serve increment to the next order 

const isFirstComeFirstServed = (takeOutOrders, dineInOrders, servedOrders) => {
    let take = 0;
    let dine = 0
    for (const x of servedOrders){
        if (x === takeOutOrders[take]){
            take++
        } else if (x === dineInOrders[dine]){
            dine++
        } else if (x !== takeOutOrders[take] && x !== dineInOrders[dine]){
            return false
        }
    }
    if(takeOutOrders.length + dineInOrders.length === servedOrders.length){
        return true
    } else  {
        return false }
  }
  
//   console.log(isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6]))
//   console.log(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]))
//   console.log(isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]))
//   console.log(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]))
//   console.log(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8]))
//   console.log(isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]))
//   console.log(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]))