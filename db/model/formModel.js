const {Schema, model } = require('mongoose');

const formSchema = Schema ({
  title: String, 
  name:  {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  color: String,
  img: String,
});

const formModel = model('Form', formSchema);

module.exports = formModel;
