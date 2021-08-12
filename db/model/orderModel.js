const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  shirt: {
    type: Schema.Types.ObjectId,
    ref: 'Clothes',
    required: true,
  },
  shorts:  {
    type:Schema.Types.ObjectId,
    ref: 'Clothes',
    required: true,
  },
  socks:  {
    type: Schema.Types.ObjectId,
    ref: 'Clothes',
    required: true,
  },
  userName: {type: String, required: true},
  userEmail: {type: String, required: true},
  userPhone: {type: String, required: true},
  player: [
    price: {type: Number, required: true},
    size: {type: Number, required: true},
    lastName: {type: String, required: false},
    number: {type: Number, required: false},
  ],
});

const orderModel = model('Order', orderSchema);

module.exports = orderModel;
