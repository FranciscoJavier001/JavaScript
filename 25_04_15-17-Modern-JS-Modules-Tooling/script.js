// import module
// import { addToCart, totalPrice as price, totalPrice, tq } from './shoppingCart.js'
// addToCart('bread', 5)
// console.log(price, tq);

// import { addToCart } from "./shoppingCart";

// console.log('Importing module');
//  console.log(shippingCost)

// import * as ShoppingCart from './shoppingCart.js'
// ShoppingCart.addToCrt('bread', 5)
// console.log(ShoppingCart.totalPrice)

// import add, {addToCart, totalPrice asprice, tq} from './shoppingCart.js
// console.log(price)

// import add, {cart} from './shoppingCart.js'
// add('pizza', 2)
// add('bread', 5)
// add('apples', 4)

// console.log(cart);

// const ShoppingCart2 = (function () {
//     const cart = []
//     const shippingCost = 10
//     const totalPrice = 237
//     const totalQuantity = 23
    
// const addToCart = function(product,quantity){
//     cart.push({product, quantity})
//     console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
// }

// const orderStock = function(product, quantity){
//     console.log(`${quantity} ${product} ordered from supplier`);
// }

// return{
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity
// }})()


// ShoppingCart2.addToCart('apple', 4)
// ShoppingCart2.addToCart('pizza', 2)
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost)

// export addToCart = function(product, quantity) {
//     cart.push({product, quantity})
//     console.log(`${quantity} ${product} added to cart (sipping cost is ${shippingCost})`);
// }

// const {addToCart} = requiere('./shoppingCart')

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js"

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5}
    ],
    user: {loggedIn: true},
}

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)

state.user.loggedIn = false
console.log(stateClone);
console.log(stateDeepClone);
