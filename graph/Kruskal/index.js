// parent is an array to save the parent of vertices. it's initial value is itself.
// rank is the height of node. It's initial value is zero
// n is the number of edges

function makeSet(parent, rank, n) {
  for (let i = 0; i < n; i++) {
    parent[i] = i;
    rank[i] = 0
  }
}
// find the representative of component and cache the result
function findParent(parent, component) {
  if (parent[component] === component) {
    return component;
  }
  return parent[component] = findParent(parent, parent[component])
}
// union two sets
function unionSet(u, v, parent, rank) {
  const uRoot = findParent(parent, u);
  const vRoot = findParent(parent, v);
  if (rank[uRoot] < rank[vRoot]) {
    parent[uRoot] = vRoot
  } else if (rank[uRoot] > rank[vRoot]) {
    parent[vRoot] = uRoot;
  } else {
    parent[vRoot] = uRoot;
    rank[uRoot] += 1;
  }
}
// create the minimum spanning tree
// First, sort the edge array in ascending order
// and then pick up a minimal weight edge to construct graph and check if there is a cycle graph
function kruskalAlgo(n, edge) {
  const edgeAscending = edge.sort((a, b) => a[2] - b[2]);
  const edgeNum = edgeAscending.length;
  const parent = [];
  const rank = [];
  makeSet(parent, rank, n);
  const result = [];
  for (let i = 0; i < edgeNum; i++) {
    const [source, target] = edge[i];
    const sourceRoot = findParent(parent, source);
    const targetRoot = findParent(parent, target);
    if (sourceRoot !== targetRoot) {
      result.push(edge[i]);
      unionSet(sourceRoot, targetRoot, parent, rank)
    }
  }
  return result;
}


let edge = [
  [0, 1, 10],
  [0, 2, 6],
  [0, 3, 5],
  [1, 3, 15],
  [2, 3, 4]
];

const result = kruskalAlgo(4, edge);

const printMinimumSpanningTree = (result) => {
  for (let i = 0; i < result.length; i++) {
    const [source, target, weight] = result[i]
    console.log(source, '--->', target, weight)
  }
}
printMinimumSpanningTree(result);