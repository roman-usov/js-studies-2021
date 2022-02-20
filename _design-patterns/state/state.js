// Parent State
class Light {
  constructor(light) {
    this.light = light;
  }
}


// Concrete States
class RedLight extends Light {
  constructor() {
    super("red");
  }

  sign() {
    return "STOP";
  }
}

class YellowLight extends Light {
  constructor() {
    super("yellow");
  }

  sign() {
    return "STEADY";
  }
}

class GreenLight extends Light {
  constructor() {
    super("green");
  }

  sign() {
    return "GO";
  }
}


// Context
class TrafficLights {
  constructor() {
    this.states = [new GreenLight(), new YellowLight(), new RedLight()];
    this.current = this.states[0];
    console.log(JSON.stringify(this.current));
  }

  change() {
    const total = this.states.length;
    let index = this.states.findIndex((light) => light === this.current);

    if (index + 1 < total) {
      this.current = this.states[index + 1];
    } else {
      this.current = this.states[0];
    }
  }

  sign() {
    return this.current.sign();
  }
}

const traffic = new TrafficLights();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
