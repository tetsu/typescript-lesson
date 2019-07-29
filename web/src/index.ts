import { User } from './models/User';

const user = new User({ name: 'Jason', age: 20 });

user.save();

console.log(user);

const user2 = new User({ id: 1, name: 'James', age: 20 });
user2.save();
