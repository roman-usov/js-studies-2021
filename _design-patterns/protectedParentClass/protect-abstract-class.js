class Phone {
  constructor() {
    if (this.constructor.name === 'Phone') {
      throw new Error('Phone is an abstract class')
    }
  }

  connectWifi() {
    
  }

  connectBluetooth() {

  }

}

const somePhone = new Phone();

class iPhone extends Phone {
  constructor(){
  }
}

class nokia3310 extends Phone {
  
}