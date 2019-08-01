import { User } from './models/User';

const collection = User.buildUserColletion();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
