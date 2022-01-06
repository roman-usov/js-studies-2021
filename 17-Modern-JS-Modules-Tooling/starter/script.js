// Importing Module
// import { addToCart, totalPrice as price, quantity } from './shoppingCart.js';

/*
addToCart('bread', 5);
console.log(price);
console.log(quantity);
*/

// console.log('Importing module');

/*import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 5);*/

/*import add, {
  addToCart,
  totalPrice as price,
  quantity,
} from './shoppingCart.js';*/

import { addToCart, cart } from './shoppingCart.js';
addToCart('pizza', 2);
addToCart('apples', 3);
addToCart('bread', 1);

console.log(cart);

/*const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to the cart (shipping cost is ${shippingCost}).`
    );
  };
  const orderFromSupplier = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier.`);
  };
  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);*/

import cloneDeep from '../../node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = false;
console.log('state', state);
console.log('deepClone', stateDeepClone);
