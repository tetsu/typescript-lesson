import { User } from './models/User';

const user = new User({ name: 'Jason', age: 20 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('change1');
});

user.trigger('change');
