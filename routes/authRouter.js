const express = require('express');
const User = require('../db/model/userModel');

const router = express.Router();


router.route('/signup')
  .get((req, res) => {
    res.render('signup');
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    const oldUser = await User.findOne({ email: req.body.email });
    if(!oldUser){
      const user = await User.create({ username, email, password });
      req.session.username = user.username;
      req.session.useremail = user.email;
      res.redirect('/');
    } else {
      const error = {
        message: 'Такой пользователь существует'
      };
      res.render('signup', { error });
    }
  });

router.route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.password !== req.body.password) {
        const error = {
          message: 'Неверно введен пароль'
        };
        res.render('login', { error });
      }
      req.session.username = user.username;
      req.session.useremail = user.email;
      res.redirect('/');
    } else {
      const error = {
        message: 'Неверно введена почта или пользователь не зарегистрирован'
      };
      res.render('login', { error });
    }
  });

router.get('/logout', (req,res) => {
  req.session.destroy();
  res.redirect('/');
})
module.exports = router;
