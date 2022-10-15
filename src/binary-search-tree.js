const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree
    // remove line with error and write your code here
  }

  add(data) {
    function addData(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;

      if (node.data > data) {
        node.left = addData(node.left, data)
      } else if (node.data < data) {
        node.right = addData(node.right, data)
      }

      return node;
    }

    this.tree = addData(this.tree, data);
    // remove line with error and write your code here
  }

  has(data) {
    function hasData(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      if (node.data > data) {
        return hasData(node.left, data)
      } else if (node.data < data) {
        return hasData(node.right, data)
      }
    }

    return hasData(this.tree, data);
    // remove line with error and write your code here
  }

  find(data) {
    function findData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (node.data > data) {
        return findData(node.left, data)
      } else if (node.data < data) {
        return findData(node.right, data)
      }
    }

    return findData(this.tree, data);
    // remove line with error and write your code here
  }

  remove(data) {
      function removeData(node, data) {
      if (!node) return null;
      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {

        if (!node.left && !node.right) {
          return null;
        } else 

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let rightMin = node.right;

        while (rightMin.left) {
          rightMin = rightMin.left;
        }

        node.data = rightMin.data;
        node.right = removeData(node.right, rightMin.data);

        return node;
      }
    }

    this.tree = removeData(this.tree, data);
    // remove line with error and write your code here
  }

  min() {
    if (!this.tree) return null;

    let min = this.tree;

    while (min.left) {
      min = min.left;
    }

    return min.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.tree) return null;

    let max = this.tree;

    while (max.right) {
      max = max.right;
    }

    return max.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};