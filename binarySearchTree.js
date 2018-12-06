function BST(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

//Insert
BST.prototype.insert = function(value) {
    if (this.value >= value) {
        if (this.left) {
            this.left.insert(value);
        } else {
            this.left = new BST(value);
        }
    } else {
        if (this.right) {
            this.right.insert(value);
        } else {
            this.right = new BST(value);
        }
    }
}
//

// console.log(bst);

//Contains
BST.prototype.contains = function(value) {
    if (this.value === value) {
        return true;
    } else if (this.value > value) {
        if (this.left) {
            return this.left.contains(value);
        } else {
            return false;
        }
    } else {
        if (this.right) {
            return this.right.contains(value);
        } else {
            return false;
        }
    }
}

// var bst = new BST(10);
// bst.insert(20);
// bst.insert(5);
// bst.insert(15);
//
// var contains = bst.contains(30);
// console.log(contains);

//DepthFirstTraversal
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    if (order === 'pre-order') {
        iteratorFunc(this.value);
    }
    if (this.left) {
        this.left.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'in-order') {
        iteratorFunc(this.value);
    }
    if (this.right) {
        this.right.depthFirstTraversal(iteratorFunc, order);
    }
    if (order === 'post-order') {
        iteratorFunc(this.value);
    }
}

// var bst = new BST(10);
// bst.insert(20);
// bst.insert(5);
// bst.insert(15);
//
// bst.depthFirstTraversal(log,'post-order');
//
function log(value) {
    console.log(value);
}

//breadthFirstTraversal
BST.prototype.breadthFirstTraversal = function(iterator) {
    var queue = [this];
    while (queue.length) {
        var treeNode = queue.shift();
        iterator(treeNode.value);
        if (treeNode.left) {
            queue.push(treeNode.left);
        }
        if (treeNode.right) {
            queue.push(treeNode.right);
        }
    }
}

// var bst = new BST(10);
// bst.insert(20);
// bst.insert(5);
// bst.insert(15);
// bst.breadthFirstTraversal(log);

BST.prototype.getMinVal = function() {
    if (this.left) {
        return this.left.getMinVal();
    } else {
        return this.value;
    }
}

BST.prototype.getMaxVal = function() {
    if (this.right) {
        return this.right.getMaxVal();
    } else {
        return this.value;
    }
}

// var bst = new BST(10);
// bst.insert(20);
// bst.insert(5);
// bst.insert(15);
// bst.insert(35);
// bst.insert(2);
// console.log(bst.getMinVal());
// console.log(bst.getMaxVal());

BST.prototype.sumLevel = function(level) {
    let queue = [
        {
            level: 0,
            element: this
        }
    ];

    let sum = 0;
    while (queue.length) {
        let node = queue.shift();
        let index = node.level;
        let nodeVal = node.element.value;
        if (index == level) {
            sum += nodeVal;
        }
        if (node.element.left) {
            queue.push({
                level: index + 1,
                element: node.element.left
            });
        }
        if (node.element.right) {
            queue.push({
                level: index + 1,
                element: node.element.right
            });
        }
    }
    return sum;
};

var bst = new BST(10);
bst.insert(20);
bst.insert(5);
bst.insert(15);
bst.insert(35);
bst.insert(2);
console.log(bst.sumLevel(0));
