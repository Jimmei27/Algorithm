// Sort the scores in O(n) time
// create a new array for sorted result and a new array filled with zeros according to the length of the highest score
// looped to the scores and increment the counts on the new array with zeros keeping track of the number of times each number appears
// loop through the new array and push in the index number according to the number of appearances

const sortScores = (unorderedScores, highestPossibleScore) => {

    const newArr = new Array((highestPossibleScore + 1)).fill(0);
    const sortArr = [];
    
    for (let x of unorderedScores) {
        newArr[x] += 1
    }

    for (let i = newArr.length; i > 0; i -= 1) {
        if (newArr[i] > 0) {
            for (let j = 0; j < newArr[i]; j += 1) {
                sortArr.push(i)
            }
        }
    }
    return sortArr;
  }


// console.log(sortScores([], 100))
// console.log(sortScores([55], 100))
// console.log(sortScores([30, 60], 100))
// console.log(sortScores([37, 89, 41, 65, 91, 53], 100))
// console.log(sortScores([20, 10, 30, 30, 10, 20], 100))