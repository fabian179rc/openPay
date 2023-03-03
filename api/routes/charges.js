const express = require("express");
const openpay = require("../openpay");
const Charge = require("../models/charge");

const router = express.Router();

router.post("/:id", (req, res, next) => {
  const customerId = req.params.id;
  const { method, amount, description, order_id, due_date } = req.body;

  try {
    if (!customerId) return res.status(400).send("CustomerId Required");
    if (!method || !amount || !description)
      return res
        .status(400)
        .send("method, amount and description are required");
    openpay.customers.charges.create(
      customerId,
      { method, amount, description, order_id, due_date },
      async function (error, charge) {
        if (error) {
          res.status(400).json({ message: error.description });
        } else {
          await Charge.create(charge);
          res.status(201).json(charge);
        }
      }
    );
  } catch (error) {
    next(error);
  }
});
module.exports = router;
