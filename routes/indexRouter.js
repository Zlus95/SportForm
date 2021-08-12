const express = require('express');
const Form = require('../db/model/formModel');
const router = express.Router();


router.get('/', async (req, res) => {
const allForms = await Form.find();
  res.render('index', { allForms });
})


module.exports = router;
