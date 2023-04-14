const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null;
    // this.left = null;
    // this.right = null;
  }

  root() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);

    if(this.root === null){
       this.root = newNode;
        return this;
    }

    let current = this.root;

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
    let current = this.root;
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
    if(!this.root) return false

      let current = this.root
      let found = false
      while(current && !found){
            if(data < current.value){
              current = current.left
             } else if(data > current.value){
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
    this.root = this.removeNode(this.root, data);
  }

  min() {

  }

  max() {
  }
}

module.exports = {
  BinarySearchTree
};