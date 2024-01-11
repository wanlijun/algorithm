/**
 * core concept
 * - Bellman-Ford Algorithm
 * - Relaxing Edges
 * - Negative Cycle
 * - Disconnected Graph
 */

/**
 * Bellman-Ford algorithm 
 * find the shortest path adn can handle graphs with negative edge weights， but can't handle graphs with negative edge cycle
 */

/**
 * Principle of Relaxation of Edges for Bellman-Ford:
 * 1. N vertices, all the edges should be relaxed N-1 times
 * 2.if we relax the edges N times, and there is any change in the shortest distance of any node between the N-1th and Nth relaxation than a negative cycle exists, otherwise not exist.
 */


// a structure to represent a connected, directed and
// weighted graph
class Edge {
  constructor(src, dest, weight) {
    this.src = src;
    this.dest = dest;
    this.weight = weight;
  }
}

class Graph {
  constructor(V, E) {
    this.V = V;
    this.E = E;
    this.edge = [];
  }
}

function createGraph(V, E) {
  const graph = new Graph(V, E);
  for (let i = 0; i < E; i++) {
    graph.edge[i] = new Edge();
  }
  return graph;
}

function printArr(dist, V) {
  console.log("Vertex Distance from Source");
  for (let i = 0; i < V; i++) {
    console.log(`${i} \t\t ${dist[i]}`);
  }
}

function BellmanFord(graph, src) {
  const dist = [];
  const V = graph.V;
  const E = graph.E;
  const edge = graph.edge;
  for (let i = 0; i < V; i++) {
    dist[i] = Number.MAX_SAFE_INTEGER;
  }
  // v-1
  for (let i = 0; i < V - 1; i++) {
    for (let j = 0; j < E; j++) {
      const u = edge[j].src;
      const v = edge[j].dest;
      const weight = edge[j].weight;
      dist[src] = 0
      if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
        dist[v] = dist[u] + weight
      }
    }
  }
  // v
  for (let j = 0; j < E; j++) {
    const u = edge[j].src;
    const v = edge[j].dest;
    const weight = edge[j].weight;
    if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
      console.log('Error! Has Negative Cycle!')
      return;
    }
  }
  printArr(dist, V);
  return dist;
}

// Driver program to test methods of graph class

// Create a graph given in the above diagram

const V = 5;
const E = 8;
const graph = createGraph(V, E);

graph.edge[0] = new Edge(0, 1, -1);
graph.edge[1] = new Edge(0, 2, 4);
graph.edge[2] = new Edge(1, 2, 3);
graph.edge[3] = new Edge(1, 3, 2);
graph.edge[4] = new Edge(1, 4, 2);
graph.edge[5] = new Edge(3, 2, 5);
graph.edge[6] = new Edge(3, 1, 1);
graph.edge[7] = new Edge(4, 3, -3);

BellmanFord(graph, 0);