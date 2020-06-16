const largestDivisibleSubset = (num) => {
    let count = 0;
    let newArr = [];
    num.sort((a,b) => a- b)
    // for (let i = num.length - 1; i >= 0; i -= 1) {
    //     let innerCount = 0;
    //     let innerArr = [];
    //     for (let j = 0; j <= i; j+= 1) {
    //        if (num[i] % num[j] === 0) {
    //            innerCount += 1
    //            innerArr.push(num[j])
    //        }
    //     }
    //     if(count < innerCount) {
    //         count = innerCount
    //         newArr = innerArr
    //         innerCount = 0;
    //         innerArr = [];
    //     } else {
    //         innerCount = 0;
    //         innerArr = [];
    //     }
        
    // }
    for (let i = 0; i < num.length; i += 1) {
        let innerCount = 0;
        let innerArr = [];
        for (let j = i; j < num.length; j += 1) {
            if(num[j] % num[i] === 0) {
                innerCount += 1
                innerArr.push(num[j])
            }
        }
             if(count < innerCount) {
            count = innerCount
            newArr = innerArr
            innerCount = 0;
            innerArr = [];
        } else {
            innerCount = 0;
            innerArr = [];
        }
    }
    return newArr
};


console.log(largestDivisibleSubset([1,2,3]))
console.log(largestDivisibleSubset([1,2,4,8]))
console.log(largestDivisibleSubset([4,8,10,240]))