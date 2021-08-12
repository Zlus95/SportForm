const {Schema, model } = require('mongoose');

const formSchema = Schema ({
  title: String, 
  name: String,
  price: String,
  color: String,
  img: String,
});

const formModel = model('Form', formSchema);

module.exports = formModel;
