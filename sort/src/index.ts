import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20]);
const charactersCollection = new CharactersCollection('aXAacbSsDdAAax');
const numSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);
numSorter.sort();
charSorter.sort();
console.log(numSorter.collection);
console.log(charSorter.collection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(0);
linkedList.add(2);
linkedList.add(-10);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
console.log(linkedList.print);
