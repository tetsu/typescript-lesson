import faker from 'faker';
import { Mappable } from './interfaces';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h2>User: </h2><h1>${this.name}</h1>
      </div>
    `;
  }
}
