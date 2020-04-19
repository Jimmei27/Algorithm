// count variable to keep track of the total movement
// iterate through the movement array to combine the movement
// move the letter according to the count variable

const stringShift = (s, shift) => {
    let count = 0;
    for (let i = 0; i < shift.length; i += 1){
      if(shift[i][0] === 0) {
        count -=  shift[i][1]
      } else {
        count += shift[i][1]
      }
    }
    if (count === 0) return s;
  
    s = s.split('')
    while(count !== 0){
      if (count < 0){
        let shifted = s.shift()
        s.push(shifted)
        count += 1
      } else {
        let popped = s.pop()
        s.unshift(popped)
        count -= 1
      }
    }
    return s.join('')
  };

  // console.log(stringShift("abc", [[0,1],[1,2]]))
  // console.log(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]))