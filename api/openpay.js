const OpenPay = require("openpay");
require("dotenv").config();

const env = process.env;

const openpay = new OpenPay(env.ID_OPENPAY, env.PRIVATE_KEY, false);

module.exports = openpay;
