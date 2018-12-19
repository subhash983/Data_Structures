class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
  }
  remove() {
    this.data.pop();
  }
  print() {
    for (let item of this.data) {
      console.log(item);
    }
  }
}

let q1 = new Queue();
q1.add(3);
q1.add(5);
q1.add(7);
q1.print();
q1.remove();
q1.print();
