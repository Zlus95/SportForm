const express = require('express');
const Form = require('../db/model/formModel');
const PreOrder = require('../db/model/preOrder');

const router = express.Router();


router.get('/basket/:id', async (req, res) => {
  res.locals
  const myOrder = await Form.findById(req.params.id);
  const allForms = await Form.find({ title: oneForm.title });
  res.render('show', { oneForm, allForms });
});

module.exports = router;
