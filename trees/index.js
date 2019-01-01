class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      nodes.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    let nodes = [this.root];
    while (nodes.length) {
      let node = nodes.shift();
      nodes.unshift(...node.children);
      fn(node);
    }
  }
}
