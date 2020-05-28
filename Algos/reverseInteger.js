//check to see if the number is negative or positive
// to make sure number is less than 2 to the 31 power / greater than 2 to -31 power
// if positive reverse then return it
// if negative take out the minus symbol reverse it then add the minus symbol and return it

var reverse = function(x) {
    if(x < 0) {
        x *= -1
        x = x.toString().split("").reverse().join("")
        if(Number(x) > 2**31) {
        return 0
    }
        return Number(x) * -1     
    }
    x = x.toString().split("").reverse().join("")
    if(Number(x) > 2**31) {
        return 0
    }
    return Number(x)
};


// console.log(reverse(111111111111))