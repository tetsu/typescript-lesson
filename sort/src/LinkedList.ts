import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  public print(): void {
    let pointer = this.head;
    let result: number[] = [];
    while (pointer) {
      result.push(pointer.data);
      pointer = pointer.next;
    }
    console.log(result);
  }

  protected at(index: number): Node | null {
    if (!this.head) {
      throw new Error('Index out of bounds.');
    }

    let pointer: Node | null = this.head;
    let counter = 0;
    while (pointer) {
      if (index === counter) {
        return pointer;
      }
      counter++;
      pointer = pointer.next;
    }

    throw new Error('Index out of bounds.');
  }

  public add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty.');
    }
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);
    if (leftNode && rightNode) {
      return leftNode.data > rightNode.data;
    }
    throw new Error('Empty node detected.');
  }

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

  swap(leftIndex: number, rightIndex: number): void {
    let leftNode = this.at(leftIndex);
    let rightNode = this.at(rightIndex);
    if (leftNode && rightNode) {
      let tempNumber = leftNode.data;
      leftNode.data = rightNode.data;
      rightNode.data = tempNumber;
      return;
    }
    throw new Error('Empty node detected.');
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let pointer = this.head;
    while (pointer.next) {
      length++;
      pointer = pointer.next;
    }
    return length;
  }
}
