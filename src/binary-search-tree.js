const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.roots = null;
  }

  root(){
    if(this.roots==null){
      return null
    }
    return this.roots;
  }

  add(data){
    let newNode = new Node(data);

    if(this.roots === null){
       this.roots = newNode;
        return this;
    }

    let current = this.roots;

    while(current){
            if(data === current.data) return undefined;
            if(data < current.data){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
  }

  has(data) {
    let current = this.roots;
    while(current){
      if(data === current.data) {
        return true;
      }
      if(data < current.data){
        current = current.left;
    } else {
        current = current.right;
    }
    }
    return false;
  }

  find(data) {
    if(!this.roots) return false

      let current = this.roots
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

        if(!found) {
          return null
        }
        return found
  }

  remove(data) {
    this.roots = this.removeNode(this.roots, data);
}

findMinNode(node) {
  return node.left ? this.findMinNode(node.left) : node;
}

removeNode(node, data) {
    if (node) {
        if (node.data > data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (node.data < data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (!node.left && !node.right) {
                return this.removeLeafNode(node);
            }

            if (!node.left) {
                return this.removeNodeWithoutLeftChild(node);
            } else if (!node.right) {
                return this.removeNodeWithoutRightChild(node);
            }

            return this.removeNodeWithTwoChildren(node);
        }
    } else {
        return null;
    }
}

removeNodeWithTwoChildren(node) {
    const newNode = this.findMinNode(node.right);
    node.data = newNode.data;
    node.right = this.removeNode(node.right, newNode.data);
    return node;
}

removeNodeWithoutLeftChild(node) {
    node = node.right;
    return node;
}


removeNodeWithoutRightChild(node) {
    node = node.left;
    return node;
}

removeLeafNode(node) {
    node = null;
    return node;
}

  min() {
  if(this.roots.data==null){
    return null
  }
  if(this.roots.left === null){
    return this.roots;
  } else {
    let current = this.roots;
    while(current.left){
        current = current.left
      }
      return current.data;
    }
    }


  max(){
    if(this.roots.data==null){
      return null
    }
    if(this.roots.right === null){
      return this.roots;
    } else{
      let current = this.roots;
      while(current.right){
          current = current.right
      }
      return current.data;
      }
    }
}


module.exports = {
  BinarySearchTree
};