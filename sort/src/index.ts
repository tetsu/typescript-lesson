import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20]);
const charactersCollection = new CharactersCollection('aXAacbSsDdAAax');
const numSorter = new Sorter(numbersCollection);
const charSorter = new Sorter(charactersCollection);
numSorter.sort();
charSorter.sort();
console.log(numSorter.collection);
console.log(charSorter.collection);
