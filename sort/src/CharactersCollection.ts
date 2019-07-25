import { Sortable } from './interfaces';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    if (
      this.data[leftIndex].toLocaleLowerCase() ===
      this.data[rightIndex].toLocaleLowerCase()
    ) {
      return this.data[leftIndex] < this.data[rightIndex];
    }

    return (
      this.data[leftIndex].toLocaleLowerCase() >
      this.data[rightIndex].toLocaleLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const temp = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = temp;
    this.data = characters.join('');
  }

  get length() {
    return this.data.length;
  }
}
