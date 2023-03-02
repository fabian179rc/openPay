const express = require("express");
const openpay = require("../openpay");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    openpay.customers.list(function (error, customer) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).json(customer);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  const customerId = req.params.id;
  try {
    openpay.customers.get(customerId, function (error, customer) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).json(customer);
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", (req, res) => {
  const {
    external_id,
    name,
    last_name,
    email,
    requires_account,
    phone_number,
    address,
  } = req.body;

  try {
    if (!name || !email)
      return res.status(400).send("Field name and email required"); //validacion aparte

    openpay.customers.create(
      {
        external_id,
        name,
        last_name,
        email,
        requires_account,
        phone_number,
        address,
      },
      function (error, customer) {
        if (error) {
          console.log(error);
          res.status(400).json({ message: error.description });
        } else {
          res.status(201).json(customer);
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", (req, res) => {
  const customerId = req.params.id;
  const {
    external_id,
    name,
    last_name,
    email,
    requires_account,
    phone_number,
    address,
  } = req.body;

  try {
    if (!name || !email)
      return res.status(400).send("Field name and email required"); //validacion aparte

    const customerRequest = {
      external_id,
      name,
      last_name,
      email,
      requires_account,
      phone_number,
      address,
    };

    openpay.customers.update(
      customerId,
      customerRequest,
      function (error, customer) {
        if (error) {
          res.status(400).json({ message: error.description });
        } else {
          res.status(201).json(customer);
        }
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", (req, res) => {
  const customerId = req.params.id;
  try {
    openpay.customers.delete(customerId, function (error) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).send("Customer Deleted");
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
//manejo de errores centralizado con next
module.exports = router;
