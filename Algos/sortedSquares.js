// create a new array with each squared of each element
// return sort array

const sortedSquares = (A) => {
    let newArr = A.map(x => x * x)
    return newArr.sort((a,b) => a - b)
};


// console.log(sortedSquares([-4,-1,0,3,10]))