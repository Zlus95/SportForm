const { Schema, model } = require('mongoose');

const cartSchema = Schema({
  name: String,
  shops: [],
});

const cartModel = model('Cart', cartSchema);

module.exports = cartModel;
