require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('./connect');

// const Admin = require('./model/adminModel');
const Form = require('./model/formModel');

// connect();
// Admin.create({ login: "admin", password: "admin" });

// const Order = require('./model/orderModel')
// const Clothes = require('./model/clothesModel')

// connect();

// async function seed() {
//   const shirt = await Clothes.create({
//     name: 'empire',
//     typeOfClothes: 'shirt',
//     price: 950,
//   })
//   const shorts = await Clothes.create({
//     name: 'empire',
//     typeOfClothes: 'shorts',
//     price: 950,
//   })
//   const socks = await Clothes.create({
//     name: 'empire',
//     typeOfClothes: 'socks',
//     price: 950,
//   })

//   Order.create({
//     shirt: {clothes: shirt, color: 'red'},
//     shorts: {clothes: shorts, color: 'red'},
//     socks: {clothes: socks, color: 'red'},
//     userName: 'alexey',
//     userEmail: 'leha@mail.ru',
//     userPhone: '89255623223',
//     price: 950,
//     players: [
//       {
//       surname: 'Messi',
//       number: 23,
//       clothingSize: 'M'
//     },
//       {
//       surname: 'Arshavin',
//       number: 8,
//       clothingSize: 'L' 
//     }]
//   })

//   Order.create({
//     shirt: {clothes: shirt, color: 'red'},
//     shorts: {clothes: shorts, color: 'red'},
//     socks: {clothes: socks, color: 'red'},
//     userName: 'pasha',
//     userEmail: 'pasha@mail.ru',
//     userPhone: '8925560000',
//     price: 950,
//     players: [
//       {
//       surname: 'Dzuba',
//       number: 25,
//       clothingSize: 'S'
//     },
//       {
//       surname: 'Pligin',
//       number: 11,
//       clothingSize: 'M' 
//     }]
//   })

//   Order.create({
//     shirt: {clothes: shirt, color: 'red'},
//     shorts: {clothes: shorts, color: 'red'},
//     socks: {clothes: socks, color: 'red'},
//     userName: 'Egor',
//     userEmail: 'egor@mail.ru',
//     userPhone: '8925560001',
//     price: 950,
//     players: [
//       {
//       surname: 'Kobzev',
//       number: 15,
//       clothingSize: 'S'
//     },
//       {
//       surname: 'Pele',
//       number: 12,
//       clothingSize: 'M' 
//     }]
//   })
// }

//  seed();




// const forms = [
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'sky-blue',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/sky-blue.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'orange',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/neon-orange.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'neon-lemon',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/neon-lemon.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'red',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/red.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'ruby',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/ruby.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'navy',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/navy.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'yellow',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/yellow.jpg',
//   },
//   {
//     title: 'Shirt-round',
//     name: 'Футболка игровая',
//     color: 'white',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120040/white.jpg',
//   },
// ];

const forms = [
  {

    title: 'Shirt-polo',
    name: 'Футболка игровая - Поло',
    color: 'red',
    price: '900',
    img: 'https://2k-shop.ru/images/120033/red_navy_white.jpg',
  },
  {
    title: 'Shirt-polo',
    name: 'Футболка игровая - Поло',
    color: 'white_red',
    price: '900',
    img: 'https://2k-shop.ru/images/120033/white_red_white.jpg',
  },
  {
    title: 'Shirt-polo',
    name: 'Футболка игровая - Поло',
    color: 'royal_navy',
    price: '900',
    img: 'https://2k-shop.ru/images/120033/royal_navy_white.jpg',
  },
  {
    title: 'Shirt-polo',
    name: 'Футболка игровая - Поло',
    color: 'green_black',
    price: '900',
    img: 'https://2k-shop.ru/images/120033/green_black_white.jpg',
  },
  {
    title: 'Shirt-polo',
    name: 'Футболка игровая - Поло',
    color: 'nawhite_royal',
    price: '900',
    img: 'https://2k-shop.ru/images/120033/white_royal_white.jpg',
  {
    title: 'F1',
    name: 'form',
    color: 'light green',
    price: '1,300',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/f20.jpg',
  },
  {
    title: 'F1',
    name: 'form',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/f22.jpg',
  },
  {
    title: 'F1',
    name: 'form',
    color: 'black',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/f23.jpg'
  },
  {
    title: 'F1',
    name: 'form',
    color: 'white',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/f24.jpg'
  },
  {
    title: 'F1',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/f19.jpg'
  },
  {
    title: 'F2',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/8v.jp'
  },
  {
    title: 'F2',
    name: 'form',
    color: 'light blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/7v.jpg'
  },
  {
    title: 'F2',
    name: 'form',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/03/6v.jpg'
  },
  {
    title: 'F3',
    name: 'form',
    color: 'orange',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/s1_redorange_01.jpg'
  },
  {
    title: 'F3',
    name: 'form',
    color: 'yellow',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/s1_yellow_01.jpg'
  },
  {
    title: 'F3',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/s1_blue_01.jpg'
  },
  {
    title: 'F4',
    name: 'form',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/a1_red_01.jpg'
  },
  {
    title: 'F4',
    name: 'form',
    color: 'black',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/a1_black_01.jpg'
  },
  {
    title: 'F4',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/a1_blue_01.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'white',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f44.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f38.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'green',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f41.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'darkblue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f40.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'blue',ыбрать количество
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f43.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f43.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'fiolet',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f42.jpg'
  },
  {
    title: 'F5',
    name: 'form',
    color: 'yellow',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f37.jpg'
  },
  {
    title: 'F6',
    name: 'form',
    color: 'green',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/d1_green_01.jpg'
  },
  {
    title: 'F6',
    name: 'form',
    color: 'brown',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/08/a1_2_01.jpg'
  },
  {
    title: 'F6',
    name: 'form',
    color: 'white',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/d1_red_01.jpg'
  },
  {
    title: 'F6',
    name: 'form',
    color: 'orange',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/05/d1_indigo_01.jpg'
  },
  {
    title: 'F6',
    name: 'form',
    color: 'blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f48.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'light blue',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f51.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'yellow',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f45.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'green',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f49.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'red',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f46.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'black',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f47.jpg'
  },
  {
    title: 'F7',
    name: 'form',
    color: 'fiolet',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f50.jpg'
  },
  
  {
    title: 'F7',
    name: 'form',
    color: 'fiolet',
    price: '1,200',
    img: 'https://olimpion.com/wp-content/uploads/2021/06/f50.jpg'

  },
];

// const forms = [
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'black',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/black.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'ruby',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/ruby.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'yellow',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/yellow.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'sky-blue',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/sky-blue_black.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'green',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/green.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'violet',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/violet.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'white',
//     price: '500',
//     img: 'https://2k-shop.ru/images/120041/white.jpg',
//   },
//   {
//     title: 'Shorts',
//     name: 'Шорты игровые',
//     color: 'orange',
//     price: '700',
//     img: 'https://2k-shop.ru/images/120041/orange.jpg',
//   },
// ];

// const forms = [
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'black',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/black_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'violet',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/violet_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'sky-blue',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/sky-blue_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'neon-lemon',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/neon-lemon_black.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'blue',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/royal_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольыбрать количествоные',
//     color: 'red',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/red_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'green',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/green_white.jpg',
//   },
//   {
//     title: 'Socks',
//     name: 'Гетры футбольные',
//     color: 'white',
//     price: '300',
//     img: 'https://2k-shop.ru/images/120350/white_black.jpg',
//   },
// ];


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
