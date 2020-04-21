// create two variable and assign the value of head of the linkedList
// move one variable by one space and another by two space
// once second variable reaches the end return the middle node


function ListNode(val) {
   this.val = val;
   this.next = null;
}

const middleNode = (head) => {
    let first = head;
    let second = head;
    while (second && second.next){
      first = first.next
      second = second.next.next
    }
     return first
   };

// console.log(middleNode([1,2,3,4,5,6]))