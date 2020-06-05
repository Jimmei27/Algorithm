// iterate through the first array
// replay the element after m with the elements in the second array

const merge = (nums1, m, nums2, n) => {
    for (let i = m; i < m + n; i += 1) {
        nums1[i] = nums2[i - m]
    }
    return nums1.sort((a,b) => a -b)
};


// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))