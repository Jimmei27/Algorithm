// replace the current node on the linkedlist to the next node

function ListNode(val) {
 this.val = val;
 this.next = null;
 }

var deleteNode = function(node) {
        
    if(this.val === null) {
        delete node;
    } else {
        node.val = node.next.val;
        node.next = node.next.next; 
    }
};


let d = new ListNode(9)
let c = new ListNode(1)
c.next = d;
let b = new ListNode(5)
b.next = c;
let a = new ListNode(4)
a.next = b;


// console.log(deleteNode(c))
// console.log(a)
