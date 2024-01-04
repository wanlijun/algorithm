import MatrixGraph from './index.js';

const matrixGraph = new MatrixGraph(5, 6)
matrixGraph.addVertices('V0');
matrixGraph.addVertices('V1');
matrixGraph.addVertices('V2');
matrixGraph.addVertices('V3');
matrixGraph.addVertices('V4');

matrixGraph.addEdge('V0', 'V4');
matrixGraph.addEdge('V1', 'V0');
matrixGraph.addEdge('V1', 'V2');
matrixGraph.addEdge('V2', 'V0');
matrixGraph.addEdge('V2', 'V3');
matrixGraph.addEdge('V3', 'V4');

console.log(matrixGraph.adjList)
console.log(matrixGraph.vertices)