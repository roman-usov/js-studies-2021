"use strict";

class TreeNode {
  constructor(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let currentNode = this.root;
      let newNode = new TreeNode(value);
      while (currentNode) {
        if (value > currentNode.value) {
          if (!currentNode.rightNode) {
            break;
          }
          currentNode = currentNode.rightNode;
        } else {
          if (!currentNode.leftNode) {
            break;
          }
          currentNode = currentNode.leftNode;
        }
      }
      if (value > currentNode.value) {
        currentNode.rightNode = newNode;
      } else {
        currentNode.leftNode = newNode;
      }
    }
  }
  print(node = this.root) {
    if (!node) {
      return true;
    }
    console.log(node.value);
    this.print(node.leftNode);
    this.print(node.rightNode);
  }
}

const tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(9);
tree.add(5);

console.log(tree);
tree.print();
