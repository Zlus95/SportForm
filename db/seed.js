const connect = require('./connect');
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




