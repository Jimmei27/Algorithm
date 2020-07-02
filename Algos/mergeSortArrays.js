const mergeArrays = (myArray, aliceArray) => {

    // Combine the sorted arrays into one large sorted array
  let newArr = myArray.concat(aliceArray)
  return newArr.sort((a,b) => a - b)

}
  
// create an array to hold the merged array
// using multiple pointers (one on each array and one for count)
// reassign the index in the empty array to the lowest number from both array

const myArray = [3, 4, 6, 10, 11, 15, 20, 21];
const aliceArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, aliceArray))

const mergeArr = (arr1, arr2) => {
  let newArr = [];
  let first = 0;
  let second = 0;
  let count = 0;
  while (count < (arr1.length + arr2.length)){
    if(arr1[first] === undefined){
      newArr[count] = arr2[second]
      second += 1
      count += 1
    }
    if(arr2[second] === undefined){
      newArr[count] = arr1[first]
      first += 1
      count += 1
    }
    if(arr1[first] < arr2[second]){
      newArr[count] = arr1[first]
      first += 1
      count += 1
    } else {
      newArr[count] = arr2[second]
      second += 1
      count += 1
    }
  }
  return newArr
}
console.log(mergeArr(myArray, aliceArray))

const mergedArr = (arr1, arr2) => {
  let newArr = [];
  let first = 0;
  let second = 0;
  while (newArr.length < (arr1.length + arr2.length)){
    if(arr1[first] === undefined) {
      newArr.push(arr2[second])
      second += 1
    }
    if(arr2[second] === undefined) {
      newArr.push(arr1[first])
      first += 1
    }
    if(arr1[first] < arr2[second]){
      newArr.push(arr1[first])
      first += 1
    } else {
      newArr.push(arr2[second])
      second += 1
    }
  }
  return newArr
}
// console.log(mergedArr(myArray, aliceArray))