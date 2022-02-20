class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked.`);
  }

  walk() {
    console.log(`${this.name} walked.`);
  }
}

class FlyingMonster {
  fly() {
    console.log(`${this.name} flew.`);
  }
}

class SwimmingMonster {
  swim() {
    console.log(`${this.name} swam.`);
  }
}

// Composition

const bear = new Monster("bear");
bear.walk();

// Composition
function walkingAttacker({ name }) {
  return {
    walk: () => console.log(`${name} walked.`),
    attack: () => console.log(`${name} attacked.`),
  };
}

function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam.`),
  };
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew.`),
  };
}


function swimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...walkingAttacker(monster),
    ...swimmer(monster),
  };
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name };

  return {
    ...monster,
    ...walkingAttacker(monster),
    ...swimmer(monster),
    ...flyer(monster),
  };
}

const ptero = flyingSwimmingMonsterCreator("Ptero");
ptero.swim();
ptero.fly();
ptero.walk();
ptero.attack();
