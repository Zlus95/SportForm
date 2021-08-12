const { Schema, model } = require('mongoose');

const preOrderSchema = Schema({
  name: String,
  title: String,
  quantity: String,
  color: String,
});

const preOrderModel = model('PreOrder', preOrderSchema);

module.exports = preOrderModel;
