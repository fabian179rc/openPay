const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Store extends Model {
  static associate(models) {
    Store.belongsTo(models.User);
  }
}

Store.init(
  {
    reference: {
      type: DataTypes.STRING,
    },
    barcode_url: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "store" }
);

module.exports = Store;
