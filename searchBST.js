// recursively iterate through the tree
// if the value of the root equals the target return the subtree
// if the value don't exist in the tree return null
 
 
 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

const searchBST = (root, val) => {
    if(!root) return null;
    if(root.val === val) return root;
    // if(!root.right && !root.left) return null;
    if(root.val > val) {
      return searchBST(root.left, val)
    }
    if(root.val < val) {
    return searchBST(root.right, val)
    }
};


let e = new TreeNode(3)
let d = new TreeNode(1)
let c = new TreeNode(7)
let b = new TreeNode(2, d, e)
let a = new TreeNode(4, b, c)

// console.log(searchBST(a, 1))