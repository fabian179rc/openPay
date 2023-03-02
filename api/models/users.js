const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class User extends Model {
  static associate(models) {
    User.hasOne(models.Store);
    User.hasOne(models.Address);
  }
}

User.init(
  {
    // id: {
    //   type: DataTypes.STRING,
    //   primaryKey: true,
    // },
    // creation_date: {
    //   type: DataTypes.DATE,
    // },
    // status: {
    //   type: DataTypes.STRING,
    // },
    // balance: {
    //   type: DataTypes.INTEGER,
    // },
    // clabe: {
    //   type: DataTypes.INTEGER,
    // },
    external_id: {
      type: DataTypes.STRING,
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
    requires_account: {
      type: DataTypes.BOOLEAN,
    },
    phone_number: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
