class Node {
  constructor(data) {
    this.key = data;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class ALVTree {
  constructor() {
    this.root = null
  }
  height(node) {
    if (node === null) return 0;
    return node.height;
  }
  max(a, b) {
    return a > b ? a : b
  }
  rightRote(node) {
    const left = node.left;
    node.left = left.right;
    left.right = node;

    node.height = this.max(
      this.height(node.right),
      this.height(node.left)
    ) + 1;
    left.height = this.max(
      this.height(left.right),
      this.height(left.left)
    ) + 1;

    return left;
  }
  leftRote(node) {
    const right = node.right;
    node.right = right.left;
    right.left = node;

    node.height = this.max(
      this.height(node.left),
      this.height(node.right),
    ) + 1;
    right.height = this.max(
      this.height(right.left),
      this.height(right.right),
    ) + 1;
    return right;
  }
  getBalance(node) {
    if (node == null) return 0;
    return this.height(node.left) - this.height(node.right);
  }
  _insert(node, key) {
    if (node === null) return new Node(key)
    if (key < node.key) {
      node.left = this._insert(node.left, key)
    } else if (key > node.key) {
      node.right = this._insert(node.right, key);
    } else {
      return node;
    }

    // update height of this ancestor node
    node.height = this.max(
      this.height(node.left),
      this.height(node.right)
    ) + 1;

    const balance = this.getBalance(node);

    if (balance > 1 && key < node.left.key) {
      return this.rightRote(node);
    }
    if (balance > 1 && key > node.left.key) {
      node.left = this.leftRote(node.left)
      return this.rightRote(node)
    }
    if(balance < -1 && key > node.right.key) {
      return this.leftRote(node)
    }
    if(balance < -1 && key < node.right.key) {
      node.right = this.rightRote(node.right)
      return this.leftRote(node)
    }
    return node;
  }
  insert(key) {
    this.root = this._insert(this.root, key)
  }
  preOrder(node) {
    if (node != null) {
      console.log(node.key + " ")
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
}
var tree = new ALVTree(); 
tree.insert(10)
tree.insert(20); 
tree.insert(30); 
tree.insert(40); 
tree.insert(50); 
tree.insert(25); 

tree.preOrder(tree.root); 