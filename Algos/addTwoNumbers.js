// Definition for singly-linked list.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
 }

var addTwoNumbers = function(l1, l2) {
    let num = "";
    let curr1 = l1;
    let curr2 = l2
    
    while (curr1 !== null && curr2 !== null) {
      if (curr1.val + curr2.val >= 10) {
        num *= 10
        num += (curr1.val + curr2.val)
        num = num.toString()
        curr1 = curr1.next
        curr2 = curr2.next
      } else {
        console.log(curr1.val)
        num += (curr1.val + curr2.val) 
        curr1 = curr1.next
        curr2 = curr2.next
        }
    }
    
    let numLength = num.length
    let newLL = new ListNode (Number(num[numLength-1]))
    let currNew = newLL 
    for (let i = numLength - 2; i >= 0; i -= 1) {
      currNew.next = new ListNode(Number(num[i]))
      currNew = currNew.next
    }
    return (newLL)
};


// let ll1 = new ListNode(2, new ListNode(4, new ListNode(3)))
// let ll2 = new ListNode(5, new ListNode(6, new ListNode(4)))
let ll1 = new ListNode(1, new ListNode(8))
let ll2 = new ListNode((0))
// let ll1 = new ListNode((2, new ListNode(4, new ListNode(3))))
// let ll2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.log(addTwoNumbers(ll1, ll2))