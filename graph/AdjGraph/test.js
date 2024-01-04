import Graph from './index.js';

const g = new Graph(4);
  
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);



g.BFS(2, (node) => {
  console.log(node, '====')
})