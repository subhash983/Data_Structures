//implement graph using adjacency list
import {LinkedList} from "./linkedLists";
class Graph {
  constructor() {
    this.adjList = {};
  }
  addEdge(source, destination) {
    if (!this.adjList[source]) {
      this.adjList[source] = new LinkedList();
    }
    this.adjList[source].insertFirst(destination);

    if (!this.adjList[destination]) {
      this.adjList[destination] = new LinkedList();
    }
    this.adjList[destination].insertFirst(source);
  }
  printGraph() {
    for (let vertex in this.adjList) {
      console.log("Adjacency list of vertex: " + vertex);
      let verticeList = "";
      for (let node of this.adjList[vertex]) {
        verticeList += node.data + ",";
      }
      console.log(verticeList);
    }
  }
}

let g = new Graph();
g.addEdge("a", "b");
g.addEdge("a", "c");
g.addEdge("a", "d");
g.addEdge("a", "e");
g.addEdge("b", "e");
g.addEdge("d", "e");
g.addEdge("c", "e");
g.addEdge("c", "f");

g.printGraph();
