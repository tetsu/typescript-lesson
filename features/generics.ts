class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfString = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printNumbers(arr: number[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

printAnything<number>([1, 2, 3]);
printAnything([1, 2, 3]);
printAnything<string>([1, 2, 3]);
printAnything(['a', 'b', 'c']);

// generic constraints

class Car {
  print() {
    console.log('I am a car.');
  }
}

class House {
  print() {
    console.log('I am a house.');
  }
}

interface Printable {
  print(): void;
}

function printCarOrHouse<T extends Printable>(arr: T[]): void {
  for (let item of arr) {
    item.print();
  }
}

printCarOrHouse([new House(), new Car(), new Car(), new House()]);
