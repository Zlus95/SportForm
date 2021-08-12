require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./connect');
const Admin = require('./model/adminModel');
const Form = require('./model/formModel');

// connect();
// Admin.create({ login: "admin", password: "admin" });


const forms = [
  {
    name: 'F7',
    color: 'blue',
    price: '1,300',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f48.jpg',
  },
  {
    name: 'F7',
    color: 'lightblue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f51.jpg',
  },
  {
    name: 'F7',
    color: 'yellow',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f45.jpg'
  },
  {
    name: 'F7',
    color: 'green',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f49.jpg'
  },
  {
    name: 'F7',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f46.jpg'
  },
  {
    name: 'F7',
    color: 'black',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f47.jpg'
  },
  {
    name: 'F7',
    color: 'fiolet',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f50.jpg'
  },
];



async function main() {
  await mongoose.connect('mongodb+srv://Anastasia:1231234@cluster0.pxr6y.mongodb.net/Project', {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
});
  // await connect.connect();
  
  await Form.insertMany(forms);
  await mongoose.disconnect();
}

main();
