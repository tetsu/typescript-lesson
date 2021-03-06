import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

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

  print(): void {
    console.log(this.data);
  }
}
