// find
// find the representative of the set (the root node of each of tree)


// Union
// It takes two elements as input and finds the representatives of their sets using the Find operation, and finally puts either one of the trees (representing the set) under the root node of the other tree.

// Union by Rank
// rank[i] is the height of the tree representing the set
//  what we want to do is minimize the height of the resulting tree.
// If the rank of left is less than the rank of right, then it’s best to move left under right,

//Union by Size
//  size[i] is the number of the elements in the tree representing the set.
// If the size of left is less than the size of right, then it’s best to move left under right and increase size of right by size of left. 
class DisjSet {
  constructor(n) {
    this.parents = new Array(n)
    this.n = n;
    this.rank = new Array(n).fill(0)
    this.makeSet()

  }
  // init the parents
  makeSet() {
    for (let i = 0; i < this.n; i++) {
      this.parents[i] = i
    }
  }
  // find the find the representative of the set
  find(x) {
    if (this.parents[x] === x) {
      return x;
    }
    const result = this.find(this.parents[x])
    this.parents[x] = result;
    return result;
  }
  Union(x, y) {
    const xSet = this.find(x);
    const ySet = this.find(y);
    if (this.rank[xSet] > this.rank[ySet]) {
      this.parents[ySet] = xSet
    } else if (this.rank[ySet] > this.rank[xSet]) {
      this.parents[xSet] = ySet
    } else {
      this.parents[ySet] = xSet
      this.rank[xSet] += 1;
    }
  }
}
// usage example
let obj = new DisjSet(5);
obj.Union(0, 2);
obj.Union(4, 2);
obj.Union(3, 1);

if (obj.find(4) === obj.find(0)) {
  console.log("Yes");
} else {
  console.log("No");
}
console.log(obj.find(1), obj.find(0))
if (obj.find(1) === obj.find(0)) {
  console.log("Yes");
} else {
  console.log("No");
}
// find a cycle
