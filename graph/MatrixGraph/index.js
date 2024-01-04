const INIT_VALUE = 0
class MatrixGraph {
  constructor(numVertices, numEdges) {
    this.numVertices = numVertices;
    this.numEdges = numEdges;
    this.vertices = []
    this.adjList = []
    for(let i = 0 ; i < numVertices; i++) {
      for(let j = 0; j < numVertices; j++) {
        if (!this.adjList[i]) {
          this.adjList[i] = []
        }
        this.adjList[i][j] = INIT_VALUE
      }
    }
    console.log(this.adjList, numVertices)
  }
 
  addVertices(node) {
    this.vertices.push(node)
  }
  addEdge(A, B) {
    const aIdx = this.vertices.findIndex((val) => val === A);
    const bIdx = this.vertices.findIndex((val) => val === B);
    if (aIdx !== undefined && bIdx !== undefined) {
      this.adjList[aIdx][bIdx] = 1
      this.adjList[bIdx][aIdx] = 1
    }
  }
}
export default MatrixGraph;