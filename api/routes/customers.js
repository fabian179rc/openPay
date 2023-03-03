const express = require("express");
const openpay = require("../openpay");
const router = express.Router();
const Customer = require("../models/customer");
const Address = require("../models/address");

router.get("/", (req, res, next) => {
  try {
    openpay.customers.list(function (error, customer) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).json(customer);
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", (req, res, next) => {
  const customerId = req.params.id;
  try {
    if (!customerId) return res.status(400).send("CustomerId Required");
    openpay.customers.get(customerId, function (error, customer) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).json(customer);
      }
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  const { external_id, name, last_name, email, phone_number, address } =
    req.body;

  try {
    if (!name || !email || !address)
      return res.status(400).send("Field name, email and address required");

    openpay.customers.create(
      {
        external_id,
        name,
        last_name,
        email,
        phone_number,
        address,
      },
      async function (error, customer) {
        if (error) {
          res.status(400).json({ message: error.description });
        } else {
          const createdAddress = await Address.create(customer.address);
          const createdCustomer = await Customer.create({
            id: customer.id,
            creation_date: customer.creation_date,
            external_id: customer.external_id,
            name: customer.name,
            last_name: customer.last_name,
            email: customer.email,
            phone_number: customer.phone_number,
            status: customer.status,
            balance: customer.balance,
            clabe: customer.clabe,
            addressId: createdAddress.dataValues.id,
          });
          res.status(201).json(createdCustomer);
        }
      }
    );
  } catch (error) {
    next(error);
  }
});

router.put("/:id", (req, res, next) => {
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
    if (!customerId) return res.status(400).send("CustomerId Required");
    if (!name || !email)
      return res.status(400).send("Field name and email required");
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
    next(error);
  }
});

router.delete("/:id", (req, res, next) => {
  const customerId = req.params.id;
  try {
    if (!customerId) return res.status(400).send("CustomerId Required");
    openpay.customers.delete(customerId, function (error) {
      if (error) {
        res.status(400).json({ message: error.description });
      } else {
        res.status(201).send("Customer Deleted");
      }
    });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
