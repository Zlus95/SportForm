require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./connect');

const Admin = require('./model/adminModel');
const Form = require('./model/formModel');

// connect();
// Admin.create({ login: "admin", password: "admin" });

const Order = require('./model/orderModel')
const Clothes = require('./model/clothesModel')

connect();

async function seed() {
  const shirt = await Clothes.create({
    name: 'empire',
    typeOfClothes: 'shirt',
    price: 950,
  })
  const shorts = await Clothes.create({
    name: 'empire',
    typeOfClothes: 'shorts',
    price: 950,
  })
  const socks = await Clothes.create({
    name: 'empire',
    typeOfClothes: 'socks',
    price: 950,
  })

  Order.create({
    shirt: {clothes: shirt, color: 'red'},
    shorts: {clothes: shorts, color: 'red'},
    socks: {clothes: socks, color: 'red'},
    userName: 'alexey',
    userEmail: 'leha@mail.ru',
    userPhone: '89255623223',
    price: 950,
    players: [
      {
      surname: 'Messi',
      number: 23,
      clothingSize: 'M'
    },
      {
      surname: 'Arshavin',
      number: 8,
      clothingSize: 'L' 
    }]
  })

  Order.create({
    shirt: {clothes: shirt, color: 'red'},
    shorts: {clothes: shorts, color: 'red'},
    socks: {clothes: socks, color: 'red'},
    userName: 'pasha',
    userEmail: 'pasha@mail.ru',
    userPhone: '8925560000',
    price: 950,
    players: [
      {
      surname: 'Dzuba',
      number: 25,
      clothingSize: 'S'
    },
      {
      surname: 'Pligin',
      number: 11,
      clothingSize: 'M' 
    }]
  })

  Order.create({
    shirt: {clothes: shirt, color: 'red'},
    shorts: {clothes: shorts, color: 'red'},
    socks: {clothes: socks, color: 'red'},
    userName: 'Egor',
    userEmail: 'egor@mail.ru',
    userPhone: '8925560001',
    price: 950,
    players: [
      {
      surname: 'Kobzev',
      number: 15,
      clothingSize: 'S'
    },
      {
      surname: 'Pele',
      number: 12,
      clothingSize: 'M' 
    }]
  })
}

 seed();




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
