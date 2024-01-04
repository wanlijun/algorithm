// 节点大于左子树任意节点的值，小于右子树任意节点的值
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  root = null;
  _insertNode(node, key) {
    if (!node) {
      return new Node(key);
    }
    if (key > node.key) {
      node.right = this._insertNode(node.right, key)
      
    } else if (key < node.key) {
      node.left =  this._insertNode(node.left, key)
    }
    return node;
  }
  insert(key) {
    this.root = this._insertNode(this.root, key);
  }
  _search(node, key) {
    if (key === node.key) {
      return node
    }
    if (key < node.key) {
      if (node.left === null) {
        return null;
      }
      return this._search(node.left, key)
    } else {
      if (node.right === null) {
        return null;
      }
      return this._search(node.right, key)
    }
  }
  search(key) {
    return this._search(this.root, key);
  }
  //left root  right
  _inOrderTraverse(node, callback) {
    if (node) {
      this._inOrderTraverse(node.left, callback);
      callback(node);
      this._inOrderTraverse(node.right, callback);
    }
  }

  inOrderTraverse(callback) {
    this._inOrderTraverse(this.root, callback);
  }
  inOrderTraverseWithoutRecursion(callback) {
    const stack = [];
    let current = this.root;
    while(current || stack.length > 0) {
      if (current) {
        stack.push(current)
        current = current.left;
      } else {
        current = stack.pop();
        callback(current);
        current = current.right;
      }
    }
  }
  _preOrderTraverse(node, callback) {
    if (node) {
      callback(node);
      this._preOrderTraverse(node.left, callback);
      this._preOrderTraverse(node.right, callback);
    }
  }
  // root left right
  preOrderTraverse(callback) {
    this._preOrderTraverse(this.root, callback);
  }
  preOrderTraverseWithoutRecursion(callback) {
    const stack = [];
    let current = this.root;
    while(current || stack.length > 0) {
      if (current) {
        callback(current);
        stack.push(current)
        current = current.left
      } else {
        current = stack.pop();
        current = current.right;
      }
    }
  }
  // preOrderTraverseWithoutRecursion(callback) {
  //   const stack = [];
  //   let current = this.root;
  //   while (current || stack.length > 0) {
  //     if (current) {
  //       callback(current)
  //       stack.push(current)
  //       current = current.left;
  //     } else {
  //       current = stack.pop();
  //       current = current.right;
  //     }
  //   }
  // }
  _postOrderTraverse(node, callback) {
    if (node) {
      this._postOrderTraverse(node.left, callback);
      this._postOrderTraverse(node.right, callback);
      callback(node)
    }
  }
  // left right root
  postOrderTraverse(callback) {
    this._postOrderTraverse(this.root, callback);
  }
  postOrderTraverseWithoutRecursion(callback) {
    const stack = [];
    let current = this.root;
    stack.push(this.root)
    stack.push(this.root)
    while(stack.length > 0) {
      current = stack.pop();
      if (current && current === stack.at(-1)) {
        if (current.right) {
          stack.push(current.right)
          stack.push(current.right)
        }
        if (current.left) {
          stack.push(current.left)
          stack.push(current.left)
        }
      } else {
        callback(current)
      }
    }
  }
  // postOrderTraverseWithoutRecursion(callback) {
  //   const stack = [];
  //   let current = null;
  //   stack.push(this.root)
  //   stack.push(this.root)
  //   while (stack.length > 0) {
  //     current = stack.pop();
  //     if (current && current === stack.at(-1)) {
  //       if (current.right !== null) {
  //         stack.push(current.right)
  //         stack.push(current.right)
  //       }
  //       if (current.left !== null) {
  //         stack.push(current.left)
  //         stack.push(current.left)
  //       }
  //     } else {
  //       callback(current)
  //     }
  //   }
  // }
  _min(node) {
    if (node.left) {
      return this._min(node.left)
    }
    return node;
  }
  min() {
    return this._min(this.root)
  }
  _max(node) {
    if (node.right) {
      return this._max(node.right)
    }
    return node;
  }
  max() {
    return this._max(this.root)
  }
  // 需要判断，如果是叶子节点直接删除
  // 如果只有一个子节点，让子节点替代原来的位置
  // 如果有两个节点，找右子树里面值最小的值替代该节点的位置
  _remove(node, key) {
    if (!node) {
      return null
    }
    if (key < node.key) {
      node.left = this._remove(node.left, key)
      return node;
    } else if (key > node.key) {
      node.right = this._remove(node.right, key)
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left && node.right === null) {
        return node.left;
      }
      if (node.right && node.left === null) {
        return node.right;
      }
      const aux = this._min(node.right);
      node.key = aux.key
      node.right = this._remove(node.right, aux.key)
      return node;
    }
  }
  remove(key) {
    this._remove(this.root, key)
  }
}

const binaryTree = new BinarySearchTree();
binaryTree.insert(10)
binaryTree.insert(30)
binaryTree.insert(50)
binaryTree.insert(35)
binaryTree.insert(20)
binaryTree.insert(40)
binaryTree.insert(12)
binaryTree.insert(8)
binaryTree.insert(100)

binaryTree.postOrderTraverseWithoutRecursion((node) => console.log(node.key))
