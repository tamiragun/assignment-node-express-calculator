const express = require("express");
const router = express.Router();
const calculate = require("../insuranceCalculator.js");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

//POST request to calculate the insurance cost for a given set of distances.
//the input should be a JSON object with array of numbers called "distances".
router.post("/api", (req, res, next) => {
  const { distances } = req.body;
  try {
    const insuranceCost = calculate(distances);
    res.status(201).send(JSON.stringify(insuranceCost));
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
