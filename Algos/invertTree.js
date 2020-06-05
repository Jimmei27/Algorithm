
 // Definition for a binary tree node.
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

// recursive go through the tree and reassign left with right
// if current root is null return null
// assign left and right to a variable
// reassign left and right 
// recursive call on each node

const invertTree = (root) => {
    if(root === null) {
      return null
    }
    let left = root.left
    let right = root.right
    root.left = right
    root.right = left

    invertTree(left)
    invertTree(right)
    return root
};


let e = new TreeNode(7)
let d = new TreeNode(2)
let c = new TreeNode(6, null, e)
let b = new TreeNode(3, d)
let a = new TreeNode(5, b, c)

//console.log(invertTree(a))