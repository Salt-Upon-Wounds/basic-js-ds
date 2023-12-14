const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  _root = null;

  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = { data: data, left: null, right: null};
    } else {
      this.addNode(this._root, data);
    }
  }

  addNode(node, data) {
    if (node.data > data) {
      if (node.left === null) node.left = { data: data, left: null, right: null};
      else this.addNode(node.left, data);
    } else {
      if (node.right === null) node.right = { data: data, left: null, right: null};
      else this.addNode(node.right, data);
    }
  }

  has(data) {
    if (this._root === null) {
      return false;
    } else {
      return this.hasNode(this._root, data);
    }
  }

  hasNode(node, data) {
    if (node.data === data) {
      return true;
    }
    if (node.data > data) {
      if (node.left === null) return false;
      else return this.hasNode(node.left, data);
    } else {
      if (node.right === null) return false;
      else return this.hasNode(node.right, data);
    }
  }

  find(data) {
    if (this._root === null) {
      return null;
    } else {
      return this.findNode(this._root, data);
    }
  }

  findNode(node, data) {
    if (node.data === data) {
      return node;
    }
    if (node.data > data) {
      if (node.left === null) return null;
      else return this.findNode(node.left, data);
    } else {
      if (node.right === null) return null;
      else return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this.removeNode(this._root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if(data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  findMinNode(node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
  findMaxNode(node) {
    if (node.right === null) return node;
    else return this.findMaxNode(node.right);
  }

  min() {
    if (this._root === null) return null;
    return this.findMinNode(this._root).data;
  }

  max() {
    if (this._root === null) return null;
    return this.findMaxNode(this._root).data;
  }
}

module.exports = {
  BinarySearchTree
};