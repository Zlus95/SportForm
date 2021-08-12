const express = require('express');
const Form = require('../db/model/formModel');
const PreOrder = require('../db/model/preOrder');
const router = express.Router();




router.get('/', async (req, res) => {
  const allF1 = await Form.find({ title: 'F1' });
  const firstF1 = allF1[0];
  const allF2 = await Form.find({ title: 'F2' });
  const firstF2 = allF2[0];
  const allF3 = await Form.find({ title: 'F3' });
  const firstF3 = allF3[0];
  const allF4 = await Form.find({ title: 'F4' });
  const firstF4 = allF4[0];
  const allF5 = await Form.find({ title: 'F5' });
  const firstF5 = allF5[0];
  const allF6 = await Form.find({ title: 'F6' });
  const firstF6 = allF6[0];
  const allF7 = await Form.find({ title: 'F7' });
  const firstF7 = allF7[0];
  const allShirtV = await Form.find({ title: 'Shirt-v' });
  const firstShirtV = allShirtV[0];
  const allShorts = await Form.find({ title: 'Shorts' });
  const firstShorts = allShorts[0];
  const allSocks = await Form.find({ title: 'Socks' });
  const firstSocks = allSocks[0];
  const allShirtRound = await Form.find({ title: 'Shirt-round' });
  const firstShirtRound = allShirtRound[0];
  const allShirtLong = await Form.find({ title: 'Shirt long sleeve' });
  const firstShirtLong = allShirtLong[0];
  const allShirtPolo = await Form.find({ title: 'Shirt-polo' });
  const firstShirtPolo = allShirtPolo[0];

  res.render('catalog',
    {
      firstF1,
      firstF2,
      firstF3,
      firstF4,
      firstF5,
      firstF6,
      firstF7,
      firstShirtV,
      firstShorts,
      firstSocks,
      firstShirtRound,
      firstShirtLong,
      firstShirtPolo
    });
});

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
