require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://Anastasia:1231234@cluster0.pxr6y.mongodb.net/Project';
console.log(dbUrl);
const options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

function connect() {
  mongoose.connect(dbUrl, options)
    .then(() => console.log('MONGODB CONNECTED...'))
    .catch((err) => console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err));
}

module.exports = connect;
