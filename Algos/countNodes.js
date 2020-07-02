function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    }
    
// use a queue do a BFS 
// check each nodes left and right and push it into the queue
// return the length of the queue 

const countNodes = (root) => {
    if (!root) return 0
    let queue = [];
    queue.push(root)
    console.log(queue.length)
    for (let i = 0; i < queue.length; i += 1) {
        if(queue[i].left) {
            queue.push(queue[i].left)
        } 
        if(queue[i].right) {
            queue.push(queue[i].right)
        }
    }
    return queue.length
};

// const f = new TreeNode(6)
// const e = new TreeNode(5)
// const d = new TreeNode(4)
// const c = new TreeNode(3, f)
// const b = new TreeNode(2,d,e)
// const a = new TreeNode(1, b, c)

// console.log(a)

// console.log(countNodes(a))


// const countNodes = (root) => {
//     return !root ? 0 : countNodes(root.left) + countNodes(root.right) + 1;
    
// };

