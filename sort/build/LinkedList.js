"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    Object.defineProperty(LinkedList.prototype, "print", {
        get: function () {
            var pointer = this.head;
            var result = [];
            while (pointer) {
                result.push(pointer.data);
                pointer = pointer.next;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds.');
        }
        var pointer = this.head;
        var counter = 0;
        while (pointer) {
            if (index === counter) {
                return pointer;
            }
            counter++;
            pointer = pointer.next;
        }
        throw new Error('Index out of bounds.');
    };
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.compare = function (leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty.');
        }
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        if (leftNode && rightNode) {
            return leftNode.data > rightNode.data;
        }
        throw new Error('Empty node detected.');
    };
    // swap(leftIndex: number, rightIndex: number): void {
    //   let leftNode = this.at(leftIndex);
    //   let rightNode = this.at(rightIndex);
    //   if (leftNode && rightNode) {
    //     let tempNode = leftNode;
    //     rightNode.next = leftNode;
    //     leftNode.next = tempNode.next;
    //     let prevNode = this.at(leftIndex - 1);
    //     if (prevNode) {
    //       prevNode.next = rightNode;
    //     } else {
    //       this.head = rightNode;
    //     }
    //     return;
    //   }
    //   throw new Error('Empty node detected.');
    // }
    LinkedList.prototype.swap = function (leftIndex, rightIndex) {
        var leftNode = this.at(leftIndex);
        var rightNode = this.at(rightIndex);
        if (leftNode && rightNode) {
            var tempNumber = leftNode.data;
            leftNode.data = rightNode.data;
            rightNode.data = tempNumber;
            return;
        }
        throw new Error('Empty node detected.');
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head) {
                return 0;
            }
            var length = 1;
            var pointer = this.head;
            while (pointer.next) {
                length++;
                pointer = pointer.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    return LinkedList;
}());
exports.LinkedList = LinkedList;
