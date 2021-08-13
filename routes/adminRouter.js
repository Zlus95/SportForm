const express = require("express");
const router = express.Router();
const Orders = require("../db/model/orderModel");
const PreOrder = require("../db/model/preOrder");

router.get("/", async (req, res) => {
  const orders = await Orders.find();
  res.render("admin", { orders: orders });
});

router.get("/:id", async (req, res) => {
  const order = await Orders.findOne({ _id: req.params.id }).populate({
    path: "shirt", 
    model: PreOrder,
  }).populate({
    path: "shorts", 
    model: PreOrder,
  }).populate({
    path: "socks", 
    model: PreOrder,
  }).populate({
    path: "form", 
    model: PreOrder,
  })

  const statuses = ['Доставка', 'В обработке', 'Ждет обработки'];

  const sortedStatuses = statuses.reduce((acc,el)=>{
    if(el != order.status) acc.push(el)
    return acc
  }, [order.status])

  res.render("order", { order, sortedStatuses });
});

router.put("/", async (req, res) => {
  console.log(req.body);
  // const _id = req.body._id;
  // const status = req.body.status
   const {_id, status} = req.body

  await Orders.findByIdAndUpdate({_id: _id, status: status});

  res.json({status: 200});
});


module.exports = router;
