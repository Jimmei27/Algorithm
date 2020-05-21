// add a empty array to the perimeter
// base case is when both array are empty return the added array
// shift out the first element in index check if there is a value and push it in the new array
// recursive call on the two array 

const shuffle = (arr1, arr2, arr3 = []) => {
    if(arr1.length === 0 && arr2.length === 0) return arr3;
    let first = arr1.shift()
    let second = arr2.shift()
    if(first) {arr3.push(first)}
    if(second) {arr3.push(second)}
    return shuffle(arr1, arr2, arr3) 
  }
  
  

  const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs']
  const bottomHalf = ['Jack of Hearts', 'Ten of Spades']
  //console.log(shuffle(topHalf, bottomHalf))
  