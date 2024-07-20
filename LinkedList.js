import { ListNode } from './ListNode.js';

class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.length = 0;
    }

    append(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = this.tail = node; // if list is empty, node is now head and tail
        } else {
            this.tail = this.tail.next = node; // points current tail towards node, updates node to be new tail
        }
        return node;
    }

    prepend(value) {
        const node = new ListNode(value);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            [node.next, this.head] = [this.head, node]; // points new node to current head, makes new node current head
        }
        return node;
    }

    size(node = this.head) {
        if (node.next == null) {
            this.length++;
            return this.length;
        } else {
            this.length++;
            return this.size(node.next);
        }
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    atIndex(index, node = this.head, i = 0) {
        if (node === null) {
            return 'Index is out of bounds.'; // Handle null node
        }
        if (i == index) {
            return node.value;
        } else {
            return this.atIndex(index, node.next, i + 1); // Pass incremented i
        }
    }

    pop(node) {
        if (node.next == this.tail) {
            [node, node.next] = [this.tail, null];
            return this.head;
        } else {
            this.pop(node.next);
            return node;
        }
    }

    contains(value, node = this.head) {
        if (node.next == null) {
            return false;
        } else {
            if (node.value == value) return true;
            return this.contains(value, node.next);
        }
    }

    find(value, node = this.head, i = 0) {
        if (node == null) {
            return 'Not found.';
        }
        if (value == node.value) {
            return i;
        } else {
            return this.find(value, node.next, i + 1);
        }
    }

    toString(node = this.head) {
        if (node == null) {
            return 'NULL';
        } else {
            return `( ${node.value} ) -> ` + this.toString(node.next);
        }
    }
}

export { LinkedList };
