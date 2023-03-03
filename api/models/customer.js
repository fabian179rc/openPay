const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Customer extends Model {
  static associate(models) {
    Customer.belongsTo(models.Address);
    Customer.belongsTo(models.Charge);
  }
}
Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    creation_date: {
      type: DataTypes.DATE,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.INTEGER,
    },
    clabe: {
      type: DataTypes.INTEGER,
    },
    external_id: {
      type: DataTypes.STRING,
    },
    addressId: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, modelName: "customer" }
);
module.exports = Customer;
