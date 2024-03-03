const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "your order is fullfilled",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "your order is created",
  });
});

router.get("/:orderId", (req, res, next) => {
  const orderId = req.params.orderId;
  res.status(200).send(`your order Id is ${orderId} will deliver tomorrow`);
});

module.exports = router;
