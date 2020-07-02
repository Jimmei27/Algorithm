// have one pointer at the beginning of the array and one at the end of the array
// using a while loop, while the beginning pointer is less than the end pointer
// find the mid point of each pointer 
// if the middle of the array is less than the mid point of both pointer 
// reassign end pointer to mid minus one
// else reassign the beginning pointer to the mid plus one
// return the array length minus the start 

const hIndex = (citations) => {
        
    let start = 0 
    let end = citations.length-1;
    
    while (start <= end) {
        
        let mid = Math.floor((start+end)/2);
        
        if (citations.length - mid - 1 < citations[mid]) {
            
            end = mid - 1;
        } else {
            
            start = mid + 1;
        }
    }
    
    return citations.length - start;
};


