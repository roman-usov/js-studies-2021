/* class Bird {
  fly() {
    console.log("I can fly.");
  }
}

class Eagle extends Bird {
  dive() {
    console.log("I can dive.");
  }
}

class Duck extends Bird {
  quack() {
    console.log("I can quack.");
  }
}

// LSP Violation: Penguin can't use the Bird fly method
class Penguin extends Bird {
  fly() {
    throw new Error("Can't fly.");
  }

  swim() {
    console.log("I can swim.");
  }
}

function makeBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin); */

// Comply with the LSP by creating FlyingBird, NonFlyingBird

class FlyingBird {
  fly() {
    console.log("I can fly.");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim.");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack.");
  }
}

class Penguin extends SwimmingBird {


}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}


// Now we comply with LSP. But we have a problem because a duck can swim, too. This can be solved with Composition.

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);