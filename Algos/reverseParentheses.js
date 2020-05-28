const reverseParentheses = (str) => {
    let stack = [];
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
        let inner = [];
        if(str[i] === "(") {
            stack.push(inner)
            inner = []} 
        else if (str[i] === ")") {
            // stack.reverse()
        } else {
            inner.push(str[i])
            console.log(inner)
        }
    }
    return stack
};

console.log(reverseParentheses("(u(love)i)"))