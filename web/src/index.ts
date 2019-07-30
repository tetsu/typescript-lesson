import { User } from './models/User';

const user = new User({ name: 'Jason', age: 20 });

user.attributes.get('id');
