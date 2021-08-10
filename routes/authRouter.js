const express = require('express');
const Admin = require('../db/model/adminModel');

const router = express.Router();


router.route('/signup')
  .get((req, res) => {
    res.render('signup');
  })
  .post(async (req, res) => {
    const { username, email, password } = req.body;
    const oldAdmin = await Admin.findOne({ email: req.body.email });
    if(!oldAdmin){
      const user = await Admin.create({ username, email, password });
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
    const admin = await Admin.findOne({ email: req.body.email });
    if (admin) {
      if (admin.password !== req.body.password) {
        // console.log("jdnslkshjkshg");
        const error = {
          message: 'Неверно введен пароль'
        };
        return res.render('login', { error });
      }
      req.session.username = admin.username;
      req.session.useremail = admin.email;
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
