// if the argument is empty return empty string
// create variable to hold the new string and a pointer
// using a while loop nest a inner loop to check each str in the passed in array
// if anytime the letters at the same position don't match return the new string else append to it

const longestCommonPrefix = (strs) => {
    if(strs.length === 0) return "";
    let newStr = "";
    let pointer = 0;
    
    while (pointer < strs[0].length) {
        for (let i = 1; i < strs.length; i += 1) {
            if (strs[i][pointer] !== strs[0][pointer]) {
                return newStr
            }
        }
        newStr += strs[0][pointer]
        pointer += 1
    }
    return newStr
}


// console.log(longestCommonPrefix(["flow", "flower", "flour"]))