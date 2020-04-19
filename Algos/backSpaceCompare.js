// use a stack && helper function
// invoke helper function on both string and iterate through it
// if its # pop the previous else push
// compare both stack

const backspaceCompare = (S, T) => {

    const newCompare = (input) => {
      const stack = [];
      for (let x of input){
        if (x === '#'){
          stack.pop()
        } else {
          stack.push(x)
        }
      }
      return stack.join(',')
    }
  
    return newCompare(S) === newCompare(T)
  };

//   console.log(backspaceCompare("ab#c", "ad#c"))
//   console.log(backspaceCompare("ab##", "c#d#"))
//   console.log(backspaceCompare("a##c", "#a#c"))
//   console.log(backspaceCompare("a#c", "b"))