// Sort all the people in decreasing order of there height. For those who have the same height, sort them in ascending order of there k-values.
// Now iterate over the sorted array and insert them in the output array at indices equal to there k-values.

const reconstructQueue = (people) => {
    people.sort((a,b) => b[0] === a[0] ? a[1] - b[1] : b[0] - a[0])
    // console.log(people)

    let result = [];

    for (let ppl of people) {
     //   console.log(ppl)
        result.splice(ppl[1], 0, ppl)
    }
    return result
};


// console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))