const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  status: {type: String, default: 'В обработке'},

  shirt: {
    type: Schema.Types.ObjectId,
    ref: 'preOrder',
  },
  shorts: {
    type: Schema.Types.ObjectId,
    ref: 'preOrder',
  },
  socks: {
    type: Schema.Types.ObjectId,
    ref: 'preOrder',
  },
  form: {
    type: Schema.Types.ObjectId,
    ref: 'preOrder',
    required: true,
  },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userPhone: { type: String, required: true },
  player: [
    {
      size: { type: String, required: true },
      lastName: String,
      number: String,
    }
  ],
});

const orderModel = model('Order', orderSchema);

module.exports = orderModel;
