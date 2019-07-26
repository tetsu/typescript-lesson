"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        return _this;
    }
    LinkedList.prototype.print = function () {
        var pointer = this.head;
        var result = [];
        while (pointer) {
            result.push(pointer.data);
            pointer = pointer.next;
        }
        console.log(result);
    };
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
}(Sorter_1.Sorter));
exports.LinkedList = LinkedList;