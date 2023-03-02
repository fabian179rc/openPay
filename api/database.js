const Sequelize = require("sequelize");

const sequelize = new Sequelize("openPay", "postgres", "333333", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
