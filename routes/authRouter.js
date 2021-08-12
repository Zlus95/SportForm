const express = require('express');
const Admin = require('../db/model/adminModel');
const router = express.Router();

router.route('/login')
.get((req, res) => {
  res.render('login');
  })
  .post(async (req, res) => {
    const admin = await Admin.findOne({ login: req.body.login });
    if (admin) {
      if (admin.password !== req.body.password) {
        // console.log("jdnslkshjkshg");
        const error = {
          message: 'Неверно введен пароль'
        };
        return res.render('login', { error });
      }
      req.session.isLogin = true;
      res.redirect('/admin');
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
});

module.exports = router;
