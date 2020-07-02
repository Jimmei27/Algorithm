// iterate through th array 
// return the number that appears once 

const singleNumber = (nums) => {    
    let single;
    for (let i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};

// console.log(singleNumber([1,2,4,2,4]))