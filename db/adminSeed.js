const connect = require('./connect');
const Order = require('./model/orderModel');

connect();

Order.create({
      shirt: '611557d1161bf258c7c07f89',
      shorts: '6115589f8f110d5a383006ae',
      socks: '61156394041d965dd2a36201',
      form: '611525992186c338c2a582ac',
      userName: 'alexey',
      userEmail: 'leha@mail.ru',
      userPhone: '89255623223',
      player: [
        {
        lastName: 'Messi',
        number: '23',
        size: 'M'
      },
        {
        lastName: 'Arshavin',
        number: '8',
        size: 'L' 
      }]
    });
    
    Order.create({
      shirt: '611557d1161bf258c7c07f89',
      shorts: '6115589f8f110d5a383006ae',
      socks: '61156394041d965dd2a36201',
      form: '611525992186c338c2a582ac',
      userName: 'Pasha',
      userEmail: 'pasha@mail.ru',
      userPhone: '8925560000',
      player: [
        {
        lastName: 'Dzuba',
        number: '25',
        size: 'S'
      },
        {
        lastName: 'Pligin',
        number: '15',
        size: 'L' 
      }]
    });

    Order.create({
      shirt: '611557d1161bf258c7c07f89',
      shorts: '6115589f8f110d5a383006ae',
      socks: '61156394041d965dd2a36201',
      form: '611525992186c338c2a582ac',
      userName: 'Egor',
      userEmail: 'egor@mail.ru',
      userPhone: '89255623001',
      player: [
        {
        lastName: 'Pele',
        number: '25',
        size: 'S'
      },
        {
        lastName: 'Ronaldo',
        number: '11',
        size: 'L' 
      }]
    });
    
  



