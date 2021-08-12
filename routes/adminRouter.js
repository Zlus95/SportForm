const express = require("express");
const router = express.Router();
const Orders = require("../db/model/orderModel");
const Clothes = require("../db/model/clothesModel");

router.get("/", async (req, res) => {
  const orders = await Orders.find().
  populate({
    path: "shirt",
    populate: { path: "clothes", model: Clothes },
  }).populate({
    path: "shorts",
    populate: { path: "clothes", model: Clothes },
  }).populate({
    path: "socks",
    populate: { path: "clothes", model: Clothes },
  })
  res.render("admin", { orders: orders });
});

router.get("/:id", async (req, res) => {
  const order = await Orders.findOne({_id: req.params.id}).populate({
    path: "shirt",
    populate: { path: "clothes", model: Clothes },
  }).populate({
    path: "shorts",
    populate: { path: "clothes", model: Clothes },
  }).populate({
    path: "socks",
    populate: { path: "clothes", model: Clothes },
  });
  res.render('order', {order});
});

module.exports = router;
