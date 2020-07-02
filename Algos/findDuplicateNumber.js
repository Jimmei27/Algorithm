// iterate through the array
// using the index to keep track of the appearance of each element
// if the element appears change the number in that index to a negative number
// if the number is already negative return that number since the number appeared already

const findDuplicate = (nums) => {
    for(let i = 0; i < nums.length; i++){
        let n = Math.abs(nums[i])
        if(nums[n] < 0) return n;
        nums[n] *= -1
    }
};

// console.log(findDuplicate([3,1,3,4,2]))



const findDuplicate1 = (nums) => {
    let turtoise = nums[0];
    let hare = nums[nums[0]];

    while(turtoise !== hare) {
        turtoise = nums[turtoise];
        hare = nums[nums[hare]];
        
        if(turtoise === hare) {
            break;
        }
    }
    
    turtoise = 0;
    
    while(turtoise !== hare) {
        turtoise = nums[turtoise];
        hare = nums[hare];

    }
    return turtoise;
};
console.log(findDuplicate1([3,1,3,4,2]))

// create two variables as pointers
// while both pointers aren't equal move the second pointer across the array to find any element that matches
// the first pointer once the second iterate through the entire array move the first pointer to check again

const findDuplicate2 = (nums) => {
    let a = 0;
    let b = 1;
    
    while (nums[a] !== nums[b]) {
        if(b < nums.length) {
            b++  
        } else {
            a++ 
            b = a + 1
        }
    }
    return nums[a]
};

// console.log(findDuplicate2([3,1,3,4,2]))
