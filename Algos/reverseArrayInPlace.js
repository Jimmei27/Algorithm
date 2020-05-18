  // Reverse the input array of characters in place
  // using two pointers at the opposite side of the array
  // loop through the array with the pointers and reassign both element with each other's value
function reverse(arrayOfChars) {

   let left  = 0; 
   let right = arrayOfChars.length - 1

   while (left < right) {
       
       [arrayOfChars[left], arrayOfChars[right]] = 
       [arrayOfChars[right], arrayOfChars[left]]

       left += 1;
       right -= 1;
   }
    return arrayOfChars
  }

  const message = [ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ','s', 't', 'e', 'a', 'l' ]
  

 //  reverse the entire array using the previous function
 //  iterate through the array 
 //  every time it hits a space invoke the letters with helper function

  const reverseWords = (message) => {
      reverse(message)
      let start = 0;

      function reverseInner(start, end, message) {

        // Reverse the input array of characters in place
       let left  = start; 
       let right = end;
    
       while (left < right) {
           
           [message[left], message[right]] = 
           [message[right], message[left]]
    
           left += 1;
           right -= 1;
       }
        return message
      }
      for (let i = 0; i < message.length; i += 1){
          if (message[i] === ' '){
            reverseInner(start, i - 1 , message)
            start = i + 1
          } 
      }
      reverseInner(start, message.length - 1, message)
      return message
  }

// console.log(reverseWords(message).join(''))
