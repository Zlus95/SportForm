const express = require('express');
const router = express.Router();
const clothesModel = require('../db/model/clothesModel');
const Form = require('../db/model/formModel');

// router.route('/tshirt')
//   .get((req, res) => {
//     res.render('tshirt');
//   })
//   .post(async (req, res) => {
//     const { input, style, typeOfClothes, price, details } = req.body;
//     console.log(input, style, typeOfClothes, price, details);
    // const newTshirt = await clothesModel.create({
    //   name,
    //   color: style,
    //   typeOfClothes,
    //   price
    // });
  //   res.redirect('/basket');

  // })

// router.route('/shorts')
//   .get((req, res) => {
//     res.render('shorts');
//   })

// router.route('/gaiters')
//   .get((req, res) => {
//     res.render('gaiters');
//   });


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const form = await Form.findById(id);
  res.render('show', { form });
});


module.exports = router;
