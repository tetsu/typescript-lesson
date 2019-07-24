class Vehicle {
  constructor(public color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }

  protected showColor(): void {
    console.log(this.color);
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private startDrivingProcess(): void {
    console.log('vroom');
  }

  private showWheels(): void {
    console.log(`This car has ${this.wheels} wheels`);
  }

  public drive(): void {
    this.startDrivingProcess();
    this.honk();
    this.showColor();
    this.showWheels();
  }
}

const car = new Car(4, 'red');
car.drive();
