// four variable , one to keep track of total profit

function maxProfit (prices) {
    let totalProfit = 0;
    let maximLocal = prices[prices.length - 1];
    let stocksHeld = 0;
    let expenseSoFar = 0;

    for (let i = prices.length - 2; i >= 0; i --) {
        let current = prices[i];
        if (current >= maximLocal) {
            totalProfit += stocksHeld * maximLocal - expenseSoFar;
            stocksHeld = 0;
            expenseSoFar = 0;
            maximLocal = current
        } else {
            stocksHeld += 1;
            expenseSoFar += prices[i];
        }
    } 
    if (stocksHeld > 0) {
        totalProfit += stocksHeld * maximLocal - expenseSoFar
    }
    return totalProfit
}


// console.log(maxProfit([3,4,10,3,5,2]))


