const express = require('express');
const router = express.Router();
const Form = require('../db/model/formModel');


router.get('/forms/:id', async (req, res) => {
  const oneForm = await Form.findById(req.params.id);
  const allForms = await Form.find({ title: oneForm.title });
  res.render('show', { oneForm, allForms });
});

router.post('/forms/:id', (req,res) => {
  // const 
  res.redirect();
});

router.get('/shirts/:id', async (req, res) => {
  const oneForm = await Form.findById(req.params.id);
  const allForms = await Form.find({ title: oneForm.title });
  res.render('show', { oneForm, allForms });
});

router.get('/shorts/:id', async (req, res) => {
  const oneForm = await Form.findById(req.params.id);
  const allForms = await Form.find({ title: oneForm.title });
  res.render('show', { oneForm, allForms });
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const form = await Form.findById(id);
  res.render('show', { form });
});

module.exports = router;
