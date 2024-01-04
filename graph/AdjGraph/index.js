class AdjGraph {
  constructor(verticesNum) {
    this.V = verticesNum;
    this.adj = new Array(verticesNum)
    for (let i = 0; i < verticesNum; i++) {
      this.adj[i] = []
    }
  }
  addEdge(v, w) {
    this.adj[v].push(w)
  }
  // there are two arrays, a visited array and a queue to save adjacent
  BFS(source, callback) {
    const visited = new Array(this.V).fill(false);
    const queue = [];
    queue.push(source);
    while (queue.length > 0) {
      let vertices = queue.shift();
      callback(vertices)
      visited[vertices] = true;
      this.adj[vertices].forEach((adjacent, i) => {
        if (!visited[adjacent]) {
          queue.push(adjacent);
        }
      })
    }
  }
  DFS(source, callback) {
    const visited = new Array(this.V).fill(false);
    const stack = [];
    stack.push(source);
    while (stack.length > 0) {
      let vertices = stack.pop();
      callback(vertices)
      visited[vertices] = true;
      this.adj[vertices].reverse().forEach((adjacent) => {
        if (!visited[adjacent]) {
          stack.push(adjacent);
        }
      })
    }

  }
}
export default AdjGraph;