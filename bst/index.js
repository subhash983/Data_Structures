class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data < this.data) {
      if (this.left) {
        this.left.insert(data);
      } else {
        this.left = new Node(data);
      }
    } else {
      if (this.right) {
        this.right.insert(data);
      } else {
        this.right = new Node(data);
      }
    }
  }
}
