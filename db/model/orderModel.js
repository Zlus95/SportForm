const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  orderNumber: Number,
  shirt: {
    clothes: {
      type: Schema.Types.ObjectId,
      ref: 'Clothes',
      required: true,
    },
    color: String,
  },
  shorts:  {
    clothes: {
      type: Schema.Types.ObjectId,
      ref: 'Clothes',
      required: true,
    },
    color: String,
  },
  socks:  {
    clothes: {
      type: Schema.Types.ObjectId,
      ref: 'Clothes',
      required: true,
    },
    color: String,
  },
  userName: {type: String, required: true},
  userEmail: {type: String, required: true},
  userPhone: {type: String, required: true},
  price: {type: Number, required: true},
  players: [{
    surname: String,
    number: Number,
    clothingSize: String
  }]

 
});

const orderModel = model('Order', orderSchema);

module.exports = orderModel;
