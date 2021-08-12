const express = require('express');
const Form = require('../db/model/formModel');
const router = express.Router();


router.get('/', async (req, res) => {
  res.render('index');
})


module.exports = router;
