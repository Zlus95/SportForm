const express = require('express');
const Form = require('../db/model/formModel');
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

  res.render('index',
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
})


module.exports = router;
