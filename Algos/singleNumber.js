const singleNumber = (nums) => {
    var single;
    for (var i = 0; i < nums.length; i++) {
        single ^= nums[i];
    }
    return single;
};

// console.log(singleNumber([1,2,4,2,4]))