// create helper function to add nodes to a valid BST
// create the root of a BST with the first element
// iterate through the array invoking the helper function
// return the tree 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

const bstFromPreOrder = (preOrder) => {
if (preOrder.length === 0) return null;
if (preOrder.length === 1) return new TreeNode(preOrder[0]);
let newTree = new TreeNode(preOrder[0])

const addNode = (val, newTree) => {
  if(newTree.val > val){
    if(newTree.left === null){
      newTree.left = new TreeNode(val)
    } else {
      addNode(val, newTree.left)
    }
  }
  if(newTree.val < val){
      if(newTree.right === null){
          newTree.right = new TreeNode(val)
      } else {
          addNode(val, newTree.right)
      }
  }
}
for (let i = 1; i < preOrder.length; i += 1) {
    addNode(preOrder[i], newTree)
}
return newTree
}


//console.log(bstFromPreOrder([8,5,1,7,10,12]))