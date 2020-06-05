// use empty string and stack
// iterate through the string
// if the element is an open parens push the string into the stack
// if the element is an close parents pop off the last element in the stack concat the string to it and assign it to the string
// add the letter to the string

const reverseParentheses = (str) => {
    let text = "";
    let stack = [];

    for (let i = 0; i < str.length; i += 1) {
       
        if (str[i] === "(") {
            stack.push(text)
            text = "";
        } else if (str[i] === ")") {
           let popped = stack.pop()
           text = popped.concat(text.split('').reverse().join(''))
        } else {
            text += str[i]
        }
    }

    return text
};

// console.log(reverseParentheses("(u(love)i)"))