const express = require('express');
const Form = require('../db/model/formModel');
const PreOrder = require('../db/model/preOrder');
const Cart = require('../db/model/cartModel');

const router = express.Router();


router.get('/', async (req, res) => {
  const myCart = await Cart.findOne({ name: 'fjfjfgjfgxjgjgfjgxfj' });
  // console.log(myCart);
  const myShops = [];
  for (i = 0; i < myCart.shops.length; i++) {
    const eachShop = await PreOrder.findById(myCart.shops[i]);
    myShops.push(eachShop)
  }
  // console.log(myShops);
  res.render('cart', { myCart, myShops })
});

module.exports = router;
