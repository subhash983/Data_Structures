// function linkedList() {
//     this.head = null;
//     this.tail = null;
// }
//
// function node(value, next, prev) {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
// }
//
// linkedList.prototype.addToHead = function(value) {
//     var newNode = new node(value, this.head, null);
//     if (this.head) {
//         this.head.prev = newNode;
//     } else {
//         this.tail = newNode;
//     }
//     this.head = newNode;
// };
//
// linkedList.prototype.addToTail = function(value) {
//     var newNode = new node(value, null, this.tail);
//     if (this.tail) {
//         this.tail.next = newNode;
//     } else {
//         this.head = newNode;
//     }
//     this.tail = newNode;
// };
//
// linkedList.prototype.removeHead = function() {
//     if (!this.head) {
//         return null;
//     }
//     var retVal = this.head.value;
//     this.head = this.head.next;
//     if (this.head) {
//         this.head.prev = null;
//     } else {
//         this.tail = null;
//     }
//     return retVal;
// };
//
// linkedList.prototype.removeTail = function() {
//     if (!this.tail) {
//         return null;
//     }
//     var retVal = this.tail.value;
//     this.tail = this.tail.prev;
//     if (this.tail) {
//         this.tail.next = null;
//     } else {
//         this.head = null;
//     }
//     return retVal;
// };
//
// linkedList.prototype.search = function(searchValue) {
//     var currentNode = this.head;
//     while (currentNode) {
//         if (currentNode.value === searchValue) {
//             return currentNode.value;
//         }
//         currentNode = currentNode.next;
//     }
//     return null;
// }
//
// linkedList.prototype.indexOf = function(value) {
//     var currentNode = this.head;
//     var index = 0;
//     var retArray = [];
//     while (currentNode) {
//         if (currentNode.value === value) {
//             retArray.push(index);
//         }
//         index++;
//         currentNode = currentNode.next;
//     }
//     return retArray;
// }
//
// //adding to head
// // var ll = new linkedList();
// // ll.addToHead("100");
// // ll.addToHead("200");
//
// //adding to tail
// // var ll = new linkedList();
// // ll.addToTail("100");
// // ll.addToTail("200");
// // ll.addToTail("300");
// // ll.addToTail("400");
//
// //indexOf
// // var ll = new linkedList();
// // ll.addToHead("3");
// // ll.addToHead("5");
// // ll.addToHead("3");
// // ll.addToHead("8");
// //
// // var indxArr = ll.indexOf("8");
// //
// // console.log(indxArr);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
    return this;
  }
  removeLast() {
    if (this.head) {
      if (this.head.next) {
        let currentNode = this.head;
        let previousNode;
        while (currentNode.next) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = null;
      } else {
        this.head = null;
      }
    }
    return this;
  }
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let currentNode = this.head;
    let cIndex = 0;
    while (currentNode) {
      if (cIndex === index) {
        break;
      }
      cIndex++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head);
    }
    let previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
  forEach(fn) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      fn(currentNode, index);
      index++;
      currentNode = currentNode.next;
    }
  }
}

var n1 = new Node(123, null);
var n2 = new Node(456, n1);
var n3 = new Node(789, n2);

let ll = new LinkedList();
ll.head = n3;

ll.forEach((node, index) => {
  node.data += 10;
});
console.log(ll.getAt(0));
