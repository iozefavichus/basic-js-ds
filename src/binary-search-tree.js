const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.root = null
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
            if(data === current.value) return undefined;
            if(data < current.value){
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

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
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

        if(!found) return undefined;
        return found
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};