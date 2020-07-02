// create a count variable for number of stairs
// using a while loop which stops after all the counts are arranged
// subtract the stair level of coin on each loop
// check to see if there are still coins left 
// if there are increment the count 


const arrangeCoins = (n) => {
    let count = 0;
    while (n > 0) {
        n = n - (count + 1) 
        if (n >= 0) {
            count += 1
        }
    }
    return count
};

// console.log(arrangeCoins(8))