const Card = require('../db/model/cartModel');

const sessionMiddle = (req, res, next) => {
  res.locals.isLogin = req.session?.isLogin;
  next();
};

const checkSession = (req, res, next) => {
  if(req.session?.isLogin) {
    next();
  } else {
    res.redirect('/')
  } 
};

const createCart = async (req, res, next) => {
  const card = await Card.findOne({ name: 'fjfjfgjfgxjgjgfjgxfj'});
  if(card) {
    next();
  } else {
    await Card.create({
      name: 'fjfjfgjfgxjgjgfjgxfj',
      shops: [],
    });
    next();
  }
};

module.exports = { sessionMiddle, checkSession, createCart };
