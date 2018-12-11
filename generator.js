class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  *printValues() {
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3, [new Tree(5)])
]);
const vals = [];
for (let val of tree.printValues()) {
  vals.push(val);
}
console.log(vals);
