const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "This is from get request",
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "This is from post request",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;

  if (id === "phone") {
    res.status(200).json({
      message: " here is a list of phones",
    });
  } else {
    res.status(200).json({
      message: " we don't have list of phones",
    });
  }
});

module.exports = router;
