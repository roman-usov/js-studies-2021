// Implementation violating the Dependency Inversion principle

/* class Store {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.stripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.stripe.makePayment(15 * quantity * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(`${this.user} made a payment of $${amountInCents /100} with Stripe.`);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${this.user} made a payment of $${amountInDollars} with Paypal.`);
  }
}

const store = new Store('John');
store.purchaseBike(2);
store.purchaseHelmet(2); */

// Implementation compliant the Dependency Inversion principle

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made a payment of $${amountInCents / 100} with Stripe.`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made a payment of $${amountInDollars} with Paypal.`);
  }
}

const stripe = new StripePaymentProcessor("John");
const paypal = new PaypalPaymentProcessor("Mary");
const storeStripe = new Store(stripe);
const storePaypal = new Store(paypal);
storeStripe.purchaseBike(2);
storeStripe.purchaseHelmet(2);
storePaypal.purchaseBike(2);
storePaypal.purchaseHelmet(2);
