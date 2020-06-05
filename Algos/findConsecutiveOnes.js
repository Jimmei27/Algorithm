// one variable for result and one to keep a track of inner count
// iterate through the array
// if the element equals to one increment temp count
// else compare the temp and count for the higher count

const findMaxConsecutiveOnes = (num) => {
    let count = 0; 
    let temp = 0;

    for (let i = 0; i < num.length; i += 1) {
        if (num[i] === 1) {
            temp += 1
        } else {
            count = temp > count ? temp : count
            temp = 0
        }
        count = temp > count ? temp : count
    }

    return count
};

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))