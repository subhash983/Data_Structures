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

  contains(data) {
    if (data === this.data) {
      return this;
    }
    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }
    return null;
  }
}

const validate = (node, min = null, max = null) => {
  if ((min !== null && this.data < min) || (max != null && this.data > max)) {
    return false;
  }
  let leftValid = true;
  if (this.left) {
    leftValid = validate(node.left, min, node.data);
  }
  let rightValid = true;
  if (node.right) {
    rightValid = validate(node.right, node.data, max);
  }
  return leftValid && rightValid;
};
