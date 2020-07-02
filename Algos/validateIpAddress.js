// create two helpers one to check for ipv4 and one to check for ipv6
// for ipv4 check to make sure there are no letters and negative numbers
// split the string to make sure there are four decimals and each is less than 255
// if the decimal starts with a zero make sure there are no following numbers
// for ipv6 split the string to check there are 8 decimals 
// make sure it on consist of numbers 0-9 and letters a-f
// each decimal should not have more than 4 characters or empty

const validIPAddress = (IP) => {

    const check4 = (IP) => {
        if (IP.match(/[a-z-]/i)) return "Neither"
        IP = IP.split(".");
        if(IP.length !== 4) return "Neither";

        for (let i = 0; i < IP.length; i += 1) {
            if(IP[i].length === 0) return "Neither"
            if(IP[i] > 255) {
                return "Neither"
            }
            if(IP[i][0] === "0") {
                if(IP[i][1]) {
                    return "Neither"
                }
            }
        }
        return "IPv4"
    }

    const check6 = (IP) => {
        IP = IP.split(":")
        if(IP.length !== 8) return "Neither";
        for (let i = 0; i < IP.length; i += 1) {
            if((IP[i].match(/[^0-9a-fA-F]/g))) return "Neither";
            if(IP[i].length === 0) return "Neither"
            if(IP[i].length > 4) return "Neither";
        }
        return "IPv6"
    }

    if(IP.includes('.')){
        return check4(IP)
    } else {
        return check6(IP)
    }
};


// console.log(validIPAddress("1e1.4.5.6"))
// console.log(validIPAddress("172.16.254.1"))
// console.log(validIPAddress("172.16.254.01"))
// console.log(validIPAddress("256.256.256.256"))
// console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
// console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334"))
// console.log(validIPAddress("0.0.0.-0"))

