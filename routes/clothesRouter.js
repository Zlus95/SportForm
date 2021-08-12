const express = require('express');
const Form = require('../db/model/formModel');
const PreOrder = require('../db/model/preOrder');
const router = express.Router();


router.get('/forms/:id', async (req, res) => {
  const oneForm = await Form.findById(req.params.id);
  const allForms = await Form.find({ title: oneForm.title });
  res.render('show', { oneForm, allForms });
});

router.post('/forms/:id', async (req, res) => {
  const idClothes = await Form.findById(req.params.id);
  const myPreOrder = await PreOrder.create({
    name: idClothes.name,
    title: idClothes.title,
    quantity: req.body.select,
    color: idClothes.color,
  });

  res.redirect(`/basket/${myPreOrder._id}`);
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

router.get('/socks/:id', async (req, res) => {
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
