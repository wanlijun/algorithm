const initial = (sptSet, dist, n) => {
  for (let i = 0; i < n; i++) {
    sptSet[i] = false;
    dist[i] = Number.MAX_VALUE;
  }
}
const pickMinimalVertices = (sptSet, dist) => {
  let minIdx = -1;
  let minValue = Number.MAX_VALUE;
  for (let i = 0; i < dist.length; i++) {
    if (!sptSet[i] && dist[i] < minValue) {
      minIdx = i;
      minValue = dist[i]
    }
  }
  return minIdx;
}
const dijkstra = (graph, source) => {
  // sptSet keeps track of vertices in the shortest path tree
  // If a value sptSet[v] is true, then vertex v is included in SPT, otherwise not. 
  // Array dist[] is used to store the shortest distance values of all vertices
  const sptSet = []
  const dist = []
  const parent = []
  const n = graph.length;
  initial(sptSet, dist, n)
  dist[source] = 0;
  parent[source] = -1;
  for (let i = 0; i < n; i++) {
    const v = pickMinimalVertices(sptSet, dist);
    sptSet[v] = true;
    for (let u = 0; u < n; u++) {
      if (graph[v][u] && graph[v][u] + dist[v] < dist[u]) {
        dist[u] = graph[v][u] + dist[v]
        parent[u] = v;
      }
    }
  }
  return dist
}

let graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
[4, 0, 8, 0, 0, 0, 0, 11, 0],
[0, 8, 0, 7, 0, 4, 0, 0, 2],
[0, 0, 7, 0, 9, 14, 0, 0, 0],
[0, 0, 0, 9, 0, 10, 0, 0, 0],
[0, 0, 4, 14, 10, 0, 2, 0, 0],
[0, 0, 0, 0, 0, 2, 0, 1, 6],
[8, 11, 0, 0, 0, 0, 1, 0, 7],
[0, 0, 2, 0, 0, 0, 6, 7, 0]]
const result = dijkstra(graph, 0);
const printResult = (result) => {
  for (let i = 0; i < result.length; i++) {
    console.log(i, result[i])
  }
}
printResult(result);