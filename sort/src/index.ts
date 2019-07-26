import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20]);
numbersCollection.sort();
numbersCollection.print();

const charactersCollection = new CharactersCollection('aXAacybSsYyYDdAAax');
charactersCollection.sort();
charactersCollection.print();

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(0);
linkedList.add(2);
linkedList.add(-10);
linkedList.sort();
linkedList.print();
