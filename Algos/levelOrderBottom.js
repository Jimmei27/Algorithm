
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

 // doing a BFS iterate through the BST level by level
 // unshifting each value into a result array

const levelOrderBottom = (root) => {
    if (!root) return [];
    let result = [];
    let queue1 = [root];
    while(queue1.length > 0) {
        let queue2 = [];
        let result1 = []
        for (let i = 0; i < queue1.length; i += 1) {
            result1.push(queue1[i].val)
            if(queue1[i].left) {
                queue2.push(queue1[i].left)
            } 
            if(queue1[i].right) {
                queue2.push(queue1[i].right)
            }
        }
        result.unshift(result1)
        queue1 = queue2;
        queue2 = [];
        result1 = [];
    }
    return result
};


// [3,9,20,null,null,15,7]

// let e = new TreeNode(7)
// let d = new TreeNode(15)
// let c = new TreeNode(20, d, e)
// let b = new  TreeNode(9)
// let a = new TreeNode(3, b, c)

// console.log(a)

// console.log(levelOrderBottom(a))