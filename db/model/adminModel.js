const { Schema, model } = require('mongoose');

const adminSchema = Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const adminModel = model('Admin', adminSchema);

module.exports = adminModel;
