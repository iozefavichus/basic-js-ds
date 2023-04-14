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
    let current = this.roots;
    let found = false;
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

      return this;
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