/* eslint-disable */

class BinaryNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    add(node) {
        if (node.data < this.data) {
            // going left
            if (this.left) {
                // left already exists
                this.left.add(node);
            } else {
                // left is empty
                this.left = node;
            }
        }

        if (node.data >= this.data) {
            // going right
            if (this.right) {
                // right already exists
                this.right.add(node);
            } else {
                // right is empty
                this.right = node;
            }
        }
    }
}

const A = new BinaryNode('A');
const B = new BinaryNode('B');
const C = new BinaryNode('C');
const D = new BinaryNode('D');
const E = new BinaryNode('E');
B.add(A);
B.add(D);
B.add(C);
B.add(E)

console.log(B);
