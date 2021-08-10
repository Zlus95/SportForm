const { Schema, model } = require('mongoose');

const adminSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
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
