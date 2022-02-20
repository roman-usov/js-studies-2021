// Here we're using an object as a prototype
// We want to decouple new objects from the parent class of the car object
const car = {
  wheels: 4,

  init() {
    console.log(`I have a car with ${this.wheels} wheels, and I'm ${this.owner}`);
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Roman'
  }
});

carWithOwner.init();

console.log(carWithOwner);

class Phone {
  constructor() {
    if (this.constructor.name === 'Phone')
      throw new Error('Phone class is abstract')
  }

  call(number) {}

  takePhoto() {}

  connectToWifi() {}
}

const Phone = new Phone();