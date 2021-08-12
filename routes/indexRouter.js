const express = require('express');
const Form = require('../db/model/formModel');
const sessionConfig = require('../app');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
})


module.exports = router;
