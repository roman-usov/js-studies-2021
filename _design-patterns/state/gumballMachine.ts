//Классы состояний
class GumballStates {
  //
  InsertCoin() {
    throw new Error(`В ${this.constructor.name} не описан метод InsertCoin()`);
  }
  ReturnCoin() {
    throw new Error(`В ${this.constructor.name} не описан метод InsertCoin()`);
  }
  SellGumball() {
    throw new Error(`В ${this.constructor.name} не описан метод InsertCoin()`);
  }
}
//нет монетки
class NoCoin extends GumballStates {
  InsertCoin(machine) {
    console.log("Монетка вставлена");
    machine.current = machine.states.isCoin;
  }
  ReturnCoin() {
    console.error(`Нельзя вернуть монетку т.к. она не вставлена`);
  }
  SellGumball() {
    console.error(`Нельзя продать жевачку т.к. не вставлена монетка`);
  }
}
// есть монетка
class IsCoin extends GumballStates {
  InsertCoin() {
    console.error(`Нельзя вставить монетку т.к. она уже вставлена`);
  }
  ReturnCoin(machine) {
    console.log("Монетка возвращена");
    machine.current = machine.states.noCoin;
  }
  SellGumball() {
    if (GumballMachine.gumballAmount > 0) {
      console.log(`Жевачка успешно продана и выдана!`);
      machine.current = machine.states.gumballSold;
      GumballMachine.gumballAmount = GumballMachine.gumballAmount - 1;
      GumballMachine.soldCounter += 1;
      console.log(GumballMachine.soldCounter);
      if (!(GumballMachine.soldCounter % 10)) {
        // если количество продаж кратно 10 - выдаем счастливую жвачку
        console.log(`Счастливая жевачка успешно выдана! LUCKY MAN!!!`);
      }
    } else {
      machine.current = machine.states.emptyMachine;
      console.log("Извините, монетки не принимаются т.к. аппарат пуст");
      console.log("Монетка возвращена");
    }
  }
}
// жевачка продана
class GumballSold extends GumballStates {
  InsertCoin(machine) {
    if (GumballMachine.gumballAmount > 0) {
      machine.current = machine.states.isCoin;
      console.log("Монетка вставлена");
    } else {
      machine.current = machine.states.emptyMachine;
      console.log("Извините, монетки не принимаются т.к. аппарат пуст");
    }
  }
  ReturnCoin() {
    console.error("Нельзя вернуть монетку т.к. жевачка уже выдана");
  }
  SellGumball() {
    console.error(`Нельзя продать жевачку т.к. она уже продана`);
  }
}
//автомат пустой, жевачек нет
class EmptyMachine extends GumballStates {
  InsertCoin() {
    console.log("Извините, монетки не принимаются т.к. аппарат пуст");
  }
  ReturnCoin() {
    console.error("Нельзя вернуть монетку т.к. монетка не вставлена");
  }
  SellGumball() {
    console.error(`Нельзя продать жевачку т.к. она автомат пуст`);
  }
}

class GumballMachine {
  static gumballAmount;
  static soldCounter = 0;
  states: {
    noCoin: NoCoin;
    isCoin: IsCoin;
    gumballSold: GumballSold;
    emptyMachine: EmptyMachine;
  };
  current: any;
  constructor(gumballNum) {
    if (!gumballNum) {
      throw new Error(
        `При создании ${this.constructor.name} не было указано изначальное количество шариков`
      );
    }
    GumballMachine.gumballAmount = gumballNum;
    this.states = {
      noCoin: new NoCoin(),
      isCoin: new IsCoin(),
      gumballSold: new GumballSold(),
      emptyMachine: new EmptyMachine()
    };
    this.current = this.states.noCoin;
  }

  InsertCoin() {
    this.current.InsertCoin(this);
  }

  ReturnCoin() {
    this.current.ReturnCoin(this);
  }

  SellGumball() {
    this.current.SellGumball(this);
  }
  AddGumball(num) {
    GumballMachine.gumballAmount = num;
    this.current = this.states.noCoin;
    console.log("Жевачка добавлена в количестве: " + num + " шт.");
  }
}

// usage
const machine = new GumballMachine(1);
machine.InsertCoin();
machine.ReturnCoin();
machine.InsertCoin();
machine.SellGumball();
machine.InsertCoin();
machine.SellGumball();
machine.AddGumball(10);
machine.InsertCoin();
machine.SellGumball();