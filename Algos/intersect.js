//cache each element from one of the input array 
// iterate through the other array and check if the cache contains each element
// if it does push into new array and decrement from the cache

var intersect = function(nums1, nums2) {
    let obj = {};
    let newArr = [];
    for (let i = 0; i < nums1.length; i += 1) {
        if(!obj[nums1[i]]){
            obj[nums1[i]] = 1
        } else {
            obj[nums1[i]] += 1
        }
    }

    for (let j = 0; j < nums2.length; j += 1) {
        if(obj[nums2[j]]) {
            obj[nums2[j]] -= 1
            newArr.push(nums2[j])
            if(obj[nums2[j]] === 0) delete obj[nums2[j]]
        }
    }
    return newArr
};

// console.log(intersect([-2147483648,1,2,3], [1,-2147483648,-2147483648]))