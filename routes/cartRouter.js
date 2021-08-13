const express = require('express');
const Form = require('../db/model/formModel');
const PreOrder = require('../db/model/preOrder');
const Cart = require('../db/model/cartModel');

const router = express.Router();


router.get('/', async (req, res) => {
  const myCart = await Cart.findOne({ name: 'fjfjfgjfgxjgjgfjgxfj' });
  console.log(myCart);
  const myShops = [];
  const price = [];
  if (myCart.shops.length > 0) {
    for (let i = 0; i < myCart.shops.length; i++) {
      // try{

      // }
      console.log(myCart.shops[i]);
      const eachShop = await PreOrder.findById(myCart.shops[i]);
      console.log(eachShop);
      eachShop.price = Number(eachShop.price) * Number(eachShop.quantity);
      price.push(eachShop.price)
      myShops.push(eachShop);
    }
    // console.log(price);
    const resultSum = await price.reduce((acc, item) => Number(acc) + Number(item));
    // console.log(myShops);
    res.render('cart', { myShops, price, resultSum })
  } else {
    res.render('cart');
  }

});

router.post('/', async (req, res) => {
  const allCart = req.body;
  await Cart.findOneAndDelete({ name: 'fjfjfgjfgxjgjgfjgxfj' });
  res.redirect('/')
});

// router.delete('/:id', async (req, res) => {
//   const myCart = await Cart.findOne({ name: 'fjfjfgjfgxjgjgfjgxfj' });
//   console.log(req.params.id);
//   await myCart.shops.filter(el => el!==req.params.id).save();
//   // await myCart.shops = array;
//   console.log(myCart.shops);
//   // await myCart.save()
//   const deleteShop = await PreOrder.findOneAndDelete({ _id: req.params.id });
//   res.json({ deleteShop });
// });

module.exports = router;
