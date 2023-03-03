const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Charge extends Model {
  static associate(models) {
    Charge.belongsTo(models.Customer);
  }
}

Charge.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.DATE,
    },
    customer_id: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "charge" }
);

module.exports = Charge;
