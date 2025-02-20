const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {    
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addWithin(this.rootTree, data);
  
      function addWithin(node, data) {
        if (!node) {
          return new Node(data);
        }
  
        if (node.data === data) {
          return node;
        }
  
        if (data < node.data) {
          node.left = addWithin(node.left, data);
        } else {
          node.right = addWithin(node.right, data);
        }
  
        return node;
      }
  }

  has(data) {
    return searchWithin(this.rootTree, data);
  
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }
  }

  find(data) {
    if(!this.rootTree) return false
      
      let current = this.rootTree
      let found = false
      while(current && !found){
            if(data < current.data){
              current = current.left
             } else if(data > current.data){
                current = current.right
             } else {
                  found = current
             } 
            
            }
    
        if(!found) return null
        return found
  }

  remove( data ) {
    this.rootTree = removeNode(this.rootTree, data);
  
      function removeNode(node, data) {
        if (!node) {
          return null;
        }
  
        if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else if (node.data < data) {
          node.right = removeNode(node.right, data);
          return node;
        } else {
          // equal - should remove this item
          if (!node.left && !node.right) {
            // put null instead of item
            return null;
          }
  
          if (!node.left) {
            // set right child instead of item
            node = node.right;
            return node;
          }
  
          if (!node.right) {
            // set left child instead of item
            node = node.left;
            return node;
          }
  
          // both children exists for this item
          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.data = minFromRight.data;
  
          node.right = removeNode(node.right, minFromRight.data);
  
          return node;
        }
      }
  }

  min() {
    if (!this.rootTree) {
      return;
    }

    let node = this.rootTree;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootTree) {
      return;
    }

    let node = this.rootTree;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

const tree = new BinarySearchTree();

console.log(tree.root())


module.exports = {
  BinarySearchTree
};