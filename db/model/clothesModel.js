const {Schema, model} = require('mongoose');

const clothesSchema = Schema ({
  name:  {
    type: String,
    required: true,
  },
  typeOfClothes:  {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  details:  {
    type: String,
    required: false,
  },
});

const clothesModel = model('Clothes', clothesSchema);

module.exports = clothesModel;
