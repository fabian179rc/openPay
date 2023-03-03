const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Address extends Model {
  static associate(models) {
    Address.belongsTo(models.Customer);
  }
}

Address.init(
  {
    line1: {
      type: DataTypes.STRING,
    },
    line2: {
      type: DataTypes.STRING,
    },
    line3: {
      type: DataTypes.STRING,
    },
    postal_code: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    country_code: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "address" }
);

module.exports = Address;
