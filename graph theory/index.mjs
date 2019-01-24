//implement graph using adjacency list
import {LinkedList} from "./linkedLists";
// class Graph {
//   constructor() {
//     this.adjList = {};
//   }
//   addEdge(source, destination) {
//     if (!this.adjList[source]) {
//       this.adjList[source] = new LinkedList();
//     }
//     this.adjList[source].insertFirst(destination);
//
//     if (!this.adjList[destination]) {
//       this.adjList[destination] = new LinkedList(); 
//     }
//     this.adjList[destination].insertFirst(source);
//   }
//   printGraph() {
//     for (let vertex in this.adjList) {
//       console.log("Adjacency list of vertex: " + vertex);
//       let verticeList = "";
//       for (let node of this.adjList[vertex]) {
//         verticeList += node.data + ",";
//       }
//       console.log(verticeList);
//     }
//   }
// }

//Adjacency list using ES6 Map
class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
  printGraph() {
    for (let [key, val] of this.AdjList) {
      console.log(key + " -> " + val.join(" "));
    }
  }
}
let g = new Graph(6);
var vertices = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addVertex(vertices[i]);
}
g.addEdge("a", "b");
g.addEdge("a", "c");
g.addEdge("a", "d");
g.addEdge("a", "e");
g.addEdge("b", "e");
g.addEdge("d", "e");
g.addEdge("c", "e");
g.addEdge("c", "f");

g.printGraph();

//TO Adjacency matrix
// class Graph {
//   constructor() {
//  this.adjacencyMatrix=[];
//   }
// }
